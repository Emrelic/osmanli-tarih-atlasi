# -*- coding: utf-8 -*-
"""UFUK OLCUMU — B-GORUNUM-0072, 1.MURAT'in M-4849 istegi.

SORU: A'nin 5 gunluk surtunmeli yuruyusunu buyutmek, dolgu fonksiyonlarinin
isini yapar mi? (16 Eylul karari: "Koridor ve enklav fonksiyonlari YALNIZ
OLCUM gerek gosterirse yazilir." O olcum hic yapilmamisti.)

NE YAPAR: motorun PETEK_D asamasina kadarki kismini KUCUK BIR KUTUDA
kosturur (tam kosu DEGIL), verilen `--saat` butcesiyle; sonra o kutudaki
devlet govdelerini kurar ve Emre'nin saydigi DORT BOSLUK SINIFINI olcer:
  (a) govde icindeki delik           - sayi + km2
  (b) ana kutleden kopuk parca       - sayi
  (c) derinligi genisliginden buyuk girinti - dolgu modulunun KENDI olcutuyle
      (`cins == "koridor"`), boylece dolgu yolunun rakamlariyla YAN YANA konur
  (d) sahipsiz kalan kara            - km2
Ayrica dolgu yolunun o kutuda urettigi parca sayisini da basar.

🔴 KUTU MODU TAM KOSU DEGILDIR ve sayilari DUNYA sayisi diye okunamaz.
   Kutu kenarinda petekler kesilir; karsilastirma AYNI KUTUDA farkli
   SAATLER arasinda anlamlidir, kutular arasinda degil.

⚠️ KAYNAK AMELIYATI — `denetim/ARAC-MOTOR-YURUYUS-SINAV-0917.py` ile AYNI
   dort degisiklik. Iki alet ayni yerlere dokunuyor; motor degisirse IKISI
   BIRDEN guncellenmeli. Her capa icin "tam bir kez gecmeli" sarti var;
   gecmezse alet DURUR (sessizce yanlis kesmez).

Kosus:
  py denetim/ARAC-B-GORUNUM-UFUK-0072.py --kutu=26,34,50,44 --ad anadolu --saat 40
  py denetim/ARAC-B-GORUNUM-UFUK-0072.py --ozet
Cikti: denetim/B-GORUNUM-0072-UFUK.json
"""
import argparse
import hashlib
import io
import json
import os
import sys
import time

import shapely

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "denetim", "B-GORUNUM-0072-UFUK.json")
ANA_MOTOR = os.path.join(KOK, "arac", "uret_petek.py")
GUNLER = ("1520-06-15", "1683-06-15", "1800-06-15")


def _yukle():
    if os.path.exists(CIKTI):
        return json.load(io.open(CIKTI, encoding="utf-8"))
    return {}


def _kaydet(H):
    io.open(CIKTI, "w", encoding="utf-8").write(
        json.dumps(H, ensure_ascii=False, indent=1))


def _motor_kesiti(kutu, kesim="col"):
    """Motor metnini kutu moduna cevirir. Capalar TAM BIR KEZ gecmeli.

    `kesim`: nerede kesilecegi.
      "col"        — COL TAVANI'ndan ONCE (varsayilan, ucuz). PETEK_D
                     kiyi kesimi + ada kurali + kara-kisitli devir gecmis
                     hâliyle olculur; COL TAVANI GECMEMISTIR.
      "col-sonrasi"— COL TAVANI'ndan SONRA ("Motorun cizdigi kara"dan once).
                     🔴 (c) olcumu icin SART: Sahra kutusunda en cok fark
                     yaratmasi beklenen asama col tavanidir; ondan once
                     kesmek, olcmek istedigimiz seyi olcum disinda birakir.
                     ⚠️ Bu kesim `data/` ya da `veri-kaynak/` YAZMAZ —
                     ilk yazan asama "Motorun cizdigi kara"dir ve o kesimin
                     DISINDA kalir.
    """
    src = io.open(ANA_MOTOR, encoding="utf-8", newline="").read().replace("\r\n", "\n")

    def degis(eski, yeni):
        nonlocal src
        if src.count(eski) != 1:
            raise SystemExit("CAPA %d kez gecti: %r - alet guncellenmeli"
                             % (src.count(eski), eski[:60]))
        src = src.replace(eski, yeni)

    degis("BOLGE = box(-180, -60, 180, 85)\n", "BOLGE = box(%s)\n" % kutu)
    # 🔴 KILIT CAPASI GIRINTILI — motor 20 Eylul'de degisti: kilit artik
    #    `if _ISCI_NO is None:` blogunun ICINDE. ARAC-MOTOR-YURUYUS-SINAV-0917
    #    hala ESKI (girintisiz) capayi ariyor ⇒ o alet bugun DURUR. Bildirildi.
    degis('    if not _KILIT.al("petek"):\n        sys.exit(1)\n'
          '    atexit.register(_KILIT.birak, "petek")\n',
          "    pass  # SINAV: kilit atlandi\n")
    i = src.index('io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..",')
    j = src.index('+ "\\n")\n', i) + len('+ "\\n")\n')
    if '".uretim-basladi"' not in src[i:j]:
        raise SystemExit("damga satiri taninmadi - alet guncellenmeli")
    src = src[:i] + "pass  # SINAV: .uretim-basladi YAZILMADI\n" + src[j:]
    if kesim == "col-sonrasi":
        capa = 'asama("Motorun \u00e7izdi\u011fi kara (motor_kara.geojson)")\n'
    else:
        capa = "# ---------------- COL TAVANI ----------------\n".replace(
            "COL", "\u00c7\u00d6L")
    if src.count(capa) != 1:
        raise SystemExit("KESIM CAPASI %d kez gecti: %r - alet guncellenmeli"
                         % (src.count(capa), capa[:50]))
    k = src.index(capa)
    return src[:k], hashlib.sha256(src.encode("utf-8")).hexdigest()[:12]


def _govdeler(NS, gun):
    """Kutudaki devlet govdeleri: her devletin o gunku peteklerinin birlesimi.
    `d:` (dogrudan) ve `v:` (tabi) AYNI govdeye katilir — B gorunumu sorusu
    'toprak dolu mu' sorusudur, kademesi degil."""
    from shapely.ops import unary_union
    PD, Y = NS["PETEK_D"], NS["YERLER"]
    # 🔴 SEMA: `d:`/`v:` Osmanli'nin dogrudan/tabi donemleridir ve DEVLET
    #    KIMLIGI TASIMAZ (devlet bellidir). Yabanci sahiplik `s:` altindadir
    #    ve kimlik orada `d:` ALANINDA durur (CLAUDE.md §8). Ikisini ayni
    #    dongude okumak "s icindeki d" ile "kokteki d"yi karistirir.
    kova = {}
    for i, y in enumerate(Y):
        g = PD[i] if i < len(PD) else None
        if g is None or g.is_empty:
            continue
        for alan in ("d", "v"):
            for dn in (y.get(alan) or []):
                if dn["f"] <= gun < dn["t"]:
                    kova.setdefault("OSMANLI", []).append(g)
        for sp in (y.get("s") or []):
            if sp["f"] <= gun < sp["t"] and sp.get("d"):
                kova.setdefault(sp["d"], []).append(g)
    out = []
    for kim, gs in kova.items():
        try:
            u = unary_union(gs)
        except Exception:
            continue
        if not u.is_empty:
            out.append((kim, u))
    out.sort(key=lambda kg: kg[0])
    return out


def _sinif_abd(govdeler, km2):
    """(a) delik · (b) kopuk parca — dogrudan govde geometrisinden."""
    delik_n, delik_km2, kopuk_n, kopuk_devlet = 0, 0.0, 0, 0
    from shapely.geometry import Polygon
    for _kim, g in govdeler:
        ps = [g] if g.geom_type == "Polygon" else list(g.geoms)
        ps = [p for p in ps if p.geom_type == "Polygon"]
        if len(ps) > 1:
            kopuk_n += len(ps) - 1
            kopuk_devlet += 1
        for p in ps:
            for ring in p.interiors:
                delik_n += 1
                try:
                    delik_km2 += km2(Polygon(ring))
                except Exception:
                    pass
    return delik_n, round(delik_km2), kopuk_n, kopuk_devlet


def kos(a):
    src, sha = _motor_kesiti(a.kutu)
    os.environ["MOTOR_YURUYUS"] = "1" if a.bayrak else "0"
    os.environ["MOTOR_YURUYUS_SAAT"] = str(a.saat)
    os.environ["MOTOR_EGIM_AB_KAPALI"] = "1"     # olcum Dijkstra'lari: uretime karismaz
    os.environ["MOTOR_NEHIR_AB_KAPALI"] = "1"
    NS = {"__name__": "__main__", "__file__": ANA_MOTOR}
    t0 = time.time()
    exec(compile(src, ANA_MOTOR + " [UFUK kesiti]", "exec"), NS)
    sure = round(time.time() - t0, 1)

    from shapely.ops import unary_union
    km2 = NS["_ham_km2"]
    PD = NS["PETEK_D"]
    kara_km2 = km2(NS["KARA"])
    dolu = [g for g in PD if g is not None and not g.is_empty]
    boyali_km2 = km2(unary_union(dolu)) if dolu else 0.0

    SON = {"kutu": a.kutu, "bayrak": bool(a.bayrak), "saat": a.saat,
           "motor_sha_ilk12": sha, "sure_sn": sure, "petek": len(PD),
           "kara_km2": round(kara_km2), "boyali_km2": round(boyali_km2),
           "d_sahipsiz_kara_km2": round(kara_km2 - boyali_km2),
           "butce_km": round(a.saat * NS["NEHIR_KM_SAAT"], 1),
           "kopruleneni_azami_km": round(2 * a.saat * NS["NEHIR_KM_SAAT"], 1),
           "gun": {}}

    sys.path.insert(0, os.path.join(KOK, "arac"))
    import dolgu as D
    kara_ix = D.KaraIndeks(NS["KARA"])
    for gun in GUNLER:
        gov = _govdeler(NS, gun)
        da, dkm2, kn, kd = _sinif_abd(gov, km2)
        t1 = time.time()
        parcalar, _rapor = D.kesit_dolgu([(k, g) for k, g in gov],
                                         NS["KARA"], kara_ix)
        cins = {}
        for p in parcalar:
            cins[p["cins"]] = cins.get(p["cins"], 0) + 1
        SON["gun"][gun] = {
            "devlet": len(gov),
            "a_delik_sayi": da, "a_delik_km2": dkm2,
            "b_kopuk_parca": kn, "b_kopuk_devlet": kd,
            "c_koridor": cins.get("koridor", 0),
            "dolgu_parca": len(parcalar), "dolgu_cins": cins,
            "dolgu_sn": round(time.time() - t1, 1)}
        print("  %s  devlet %3d | delik %3d (%s km2) | kopuk %3d | "
              "koridor %3d | dolgu %4d parca (%.0f sn)"
              % (gun, len(gov), da, format(dkm2, ","), kn,
                 cins.get("koridor", 0), len(parcalar),
                 SON["gun"][gun]["dolgu_sn"]), flush=True)

    H = _yukle()
    H[a.ad] = SON
    _kaydet(H)
    print("ad=%s saat=%s bayrak=%s | sure %.1f sn | sahipsiz %s km2 | butce %s km"
          % (a.ad, a.saat, a.bayrak, sure,
             format(SON["d_sahipsiz_kara_km2"], ","), SON["butce_km"]))
    return SON


def ozet():
    H = _yukle()
    if not H:
        raise SystemExit("olcum yok: %s" % CIKTI)
    print("%-16s %-18s %5s %7s %9s %11s %9s"
          % ("ad", "kutu", "saat", "sure", "butce km", "sahipsiz km2", "petek"))
    for ad, s in sorted(H.items()):
        print("%-16s %-18s %5s %7s %9s %11s %9s"
              % (ad, s["kutu"], s["saat"] if s["bayrak"] else "-",
                 s["sure_sn"], s.get("butce_km", "-"),
                 format(s["d_sahipsiz_kara_km2"], ","), s["petek"]))
    print()
    for gun in GUNLER:
        print("--- %s ---" % gun)
        print("%-16s %7s %9s %9s %9s %9s"
              % ("ad", "devlet", "a delik", "a km2", "b kopuk", "c koridor"))
        for ad, s in sorted(H.items()):
            g = s.get("gun", {}).get(gun)
            if not g:
                continue
            print("%-16s %7s %9s %9s %9s %9s"
                  % (ad, g["devlet"], g["a_delik_sayi"],
                     format(g["a_delik_km2"], ","), g["b_kopuk_parca"],
                     g["c_koridor"]))
        print()


# ═══════════════════════════════════════════════════════════════════════════
# BANT KIPI — Emre'nin karari: uc bant 5 / 7 / 10 gun (40 / 56 / 80 saat)
# ═══════════════════════════════════════════════════════════════════════════
# 1.MURAT (M-4852): *"Kosuyu baslatmam icin iki sayi sart: bant basina SURE
# ve bant basina DOSYA BOYUTU."* Ve ayrica col kelepcesinin GERCEK bedeli.
#
# 🔴 NICIN MOTORA DOKUNMADAN OLCULUYOR: bant, ayni bedel alaninin farkli
#    kontur seviyesidir (bkz. denetim/B-GORUNUM-0072-UFUK.md §0). Yani
#    bant_b = PETEK_D(butce_b) - PETEK_D(butce_{b-1}). Uc kutu kosusu
#    (40/56/80) bu farki dogrudan verir; motoru degistirmek GEREKMIYOR ve
#    olcumden ONCE degistirmek yanlis olurdu (sayilar kabul edilmeyebilir).
#
# 🔴 COL KELEPCESI de ayni bicimde, kod yazmadan olculuyor:
#    kelepceli_i = (PETEK_D_80_i - COL) u (PETEK_D_40_i n COL)
#    yani colun ICINDE ufuk 5 gunde kalir, disinda 10 gun olur. Bu, Eylul
#    kararinin lafzinin birebir karsiligidir.
#    ⚠️ COL burada motorun kendi kaynagindan (ne_10m_geography_regions_polys,
#      FEATURECLA == "Desert") YENIDEN kuruluyor — motorunki kesit
#      icinde kalmadigi icin (kesim COL'dan ONCE duruyor). Motor o taniмi
#      degistirirse BU ALET DE guncellenmeli.
BANT_SAAT = (40.0, 56.0, 80.0)


def Polygon_bos():
    from shapely.geometry import Polygon
    return Polygon()


def _kutu_poligon(kutu):
    from shapely.geometry import box
    return box(*[float(x) for x in kutu.split(",")])


def _km2_olcer():
    """`_ham_km2` ile AYNI olcut — motorun kendi islevini disaridan cagiramadigimiz
    icin (kesit kapandi) burada yeniden kuruluyor; formul motordan alindi."""
    import math

    def km2(g):
        if g is None or g.is_empty:
            return 0.0
        lat = g.centroid.y
        return abs(g.area) * (111.32 ** 2) * max(0.05, math.cos(math.radians(lat)))
    return km2


def dokum(a):
    """TEK butce kosar, PETEK_D'yi WKB olarak diske yazar. Ayri surecte
    cagrilir (bkz. `bant` icindeki yalitim gerekcesi)."""
    import pickle
    src, _sha = _motor_kesiti(a.kutu, getattr(a, "kesim", "col") or "col")
    os.environ["MOTOR_YURUYUS"] = "1"
    os.environ["MOTOR_YURUYUS_SAAT"] = str(a.saat)
    os.environ["MOTOR_EGIM_AB_KAPALI"] = "1"
    os.environ["MOTOR_NEHIR_AB_KAPALI"] = "1"
    NS = {"__name__": "__main__", "__file__": ANA_MOTOR}
    t0 = time.time()
    exec(compile(src, ANA_MOTOR + " [DOKUM kesiti]", "exec"), NS)
    sure = round(time.time() - t0, 1)
    import shapely as _sh
    pd = [(_sh.to_wkb(g, output_dimension=2)
           if (g is not None and not g.is_empty) else b"") for g in NS["PETEK_D"]]
    paket = {"pd": pd, "kara": _sh.to_wkb(NS["KARA"], output_dimension=2),
             "sure": sure, "saat": a.saat}
    # Ⓑ BANT HAM KESIMLERI — yalniz butce kesiminden gecmis hâl. (c) olcumu
    # bunu tam boru hattindan gecmis PETEK_D ile karsilastiracak.
    _bh = NS.get("_BANT_HAM") or {}
    if _bh:
        paket["bant_ham"] = {
            str(b): [(_sh.to_wkb(g, output_dimension=2)
                      if (g is not None and not g.is_empty) else b"")
                     for g in gl] for b, gl in _bh.items()}
    # SAHIPLIK TABLOSU — (b) olcumu icin: hangi petek hangi tarihte kimin.
    # `d:`/`v:` Osmanli'nin (kimlik tasimaz), `s:` yabancinin (`d:` alaninda).
    _sah = []
    for _y in NS["YERLER"]:
        _dn = []
        for _alan in ("d", "v"):
            for _p in (_y.get(_alan) or []):
                _dn.append((_p["f"], _p["t"], "OSMANLI"))
        for _p in (_y.get("s") or []):
            if _p.get("d"):
                _dn.append((_p["f"], _p["t"], _p["d"]))
        _sah.append(_dn)
    paket["sahiplik"] = _sah
    with open(a.dokum, "wb") as f:
        pickle.dump(paket, f, protocol=4)


def _col_kur(BOLGE, BASEMAPS):
    from shapely.geometry import shape
    from shapely.ops import unary_union
    parca = []
    gr = json.load(io.open(os.path.join(
        BASEMAPS, "ne_10m_geography_regions_polys.geojson"), encoding="utf-8"))
    for f in gr["features"]:
        if (f["properties"].get("FEATURECLA") or "") != "Desert":
            continue
        g = shape(f["geometry"])
        if not g.envelope.intersects(BOLGE):
            continue
        g = g.buffer(0).intersection(BOLGE)
        if not g.is_empty:
            parca.append(g)
    return (unary_union(parca) if parca else None), len(parca)


def _pool_boyut(geolar):
    """Bant geometrilerinin `donemler.js` SEMASIYLA kodlanmis boyutu.
    Iki kademeli havuz (halka + parca) — A ciktisiyla AYNI kodlama, yoksa
    olculen sey bantlarin degil bicimin farki olurdu."""
    sys.path.insert(0, os.path.join(KOK, "arac"))
    import dolgu as D
    hav = D.Havuz()
    kayit = []
    for i, g in enumerate(geolar):
        if g is None or g.is_empty:
            continue
        p = [hav.ekle(x) for x in D._parcalar(g)]
        if p:
            kayit.append({"i": i, "p": p})
    s = (json.dumps(hav.halka, separators=(",", ":"))
         + json.dumps(hav.parca, separators=(",", ":"))
         + json.dumps(kayit, separators=(",", ":")))
    kose = sum(len(h) for h in hav.halka)
    return len(s.encode("utf-8")), len(hav.halka), kose, len(kayit)


def bant(a):
    from shapely.ops import unary_union
    from shapely.geometry import Polygon
    import pickle
    import subprocess
    import tempfile
    # 🔴 HER BUTCE AYRI SURECTE. Ilk denemede uc `exec` ayni surecte kosuldu
    #    ve ikincisi `ValueError: I/O operation on closed file` ile dustu:
    #    motor stdout'u kendi log catalina sariyor (`_Catal`) ve atexit onu
    #    kapatiyor; ikinci kosu kapali dosyaya yaziyor. Ayrica kilit, damga
    #    ve modul duzeyi durum da paylasilirdi. ⇒ Yalitim SART, hiz icin degil
    #    DOGRULUK icin: ayni surecte kosan ikinci olcum birincinin artigini
    #    tasir ve bunu kimse fark etmez.
    sonuc = {"kutu": a.kutu, "bant_saat": list(BANT_SAAT), "kosu": [], "bant": []}
    PD, kara_wkb = {}, None
    # 🔴 DOKUMLER YENIDEN KULLANILIR. Kutu kosusu 90-270 sn (makine yukune
    #    gore); bant hesabini duzeltmek icin uc kosuyu bastan yapmak, olcumu
    #    duzeltmeyi PAHALI kilar ve pahali duzeltme YAPILMAZ. Dosya varsa
    #    kosu atlanir; kutu ya da saat degisirse ad da degisir.
    gecici = os.environ.get("BGOR_DOKUM_DIZIN") or os.path.join(
        tempfile.gettempdir(), "bgor-dokum")
    os.makedirs(gecici, exist_ok=True)
    kutu_ad = a.kutu.replace(",", "_")
    for saat in BANT_SAAT:
        yol = os.path.join(gecici, "pd-%s-%g.pkl" % (kutu_ad, saat))
        t0 = time.time()
        if os.path.exists(yol):
            print("  kosu saat=%s ATLANDI (dokum var)" % saat, flush=True)
        else:
            r = subprocess.run([sys.executable, "-u", os.path.abspath(__file__),
                                "--dokum", yol, "--kutu", a.kutu,
                                "--saat", str(saat), "--ad", "dokum"],
                               cwd=KOK, capture_output=True, timeout=3600)
            if not os.path.exists(yol):
                sys.stdout.write(r.stdout[-2000:].decode("utf-8", "replace"))
                sys.stdout.write(r.stderr[-2000:].decode("utf-8", "replace"))
                raise SystemExit("dokum alinamadi: saat=%s" % saat)
        sn = round(time.time() - t0, 1)
        with open(yol, "rb") as f:
            paket = pickle.load(f)
        PD[saat] = [shapely.from_wkb(w) if w else Polygon_bos()
                    for w in paket["pd"]]
        kara_wkb = paket["kara"]
        sonuc["kosu"].append({"saat": saat, "sure_sn": sn,
                              "ic_sure_sn": paket["sure"]})
        print("  kosu saat=%s -> %.1f sn (surec ici %.1f)"
              % (saat, sn, paket["sure"]), flush=True)

    KARA = shapely.from_wkb(kara_wkb)
    BOLGE_ = _kutu_poligon(a.kutu)
    km2 = _km2_olcer()
    kara_km2 = km2(KARA)

    # --- ONCE VARSAYIMI SINA: BUTCE KESIMI TEKDUZE MI? ---
    # 🔴 BUTUN BANT HESABI BUNA DAYANIYOR ve olculmeden kabul edilemez:
    #    bant_b = PETEK_D(b) - PETEK_D(b-1) ancak PETEK_D(40) ⊆ PETEK_D(56)
    #    ⊆ PETEK_D(80) ise "ic ice OLMAYAN artis bandi" anlamina gelir.
    #    Tutmazsa bantlar ortusur, bir toprak iki banda birden yazilir ve
    #    arayuz onu iki kez cizer — kimse fark etmez.
    #    Tekduzelik BEKLENIR (buyuk butce daha az keser) ama ARA ASAMALAR
    #    (ada kurali, kara-kisitli devir) butceye bagli karar verebilir.
    ihlal_n, ihlal_km2 = 0, 0.0
    for k in range(1, len(BANT_SAAT)):
        kucuk, buyuk = BANT_SAAT[k - 1], BANT_SAAT[k]
        for i, gk in enumerate(PD[kucuk]):
            gb = PD[buyuk][i]
            if gk is None or gk.is_empty:
                continue
            try:
                tasma = gk.difference(gb) if gb is not None else gk
            except Exception:
                continue
            if not tasma.is_empty:
                a = km2(tasma)
                if a > 1.0:               # 1 km2 alti: kayan nokta kirintisi
                    ihlal_n += 1
                    ihlal_km2 += a
    sonuc["tekduzelik"] = {"ihlal_petek": ihlal_n, "ihlal_km2": round(ihlal_km2)}
    print("  TEKDUZELIK SINAVI: kucuk butcenin buyuk butce disina tasmasi -> "
          "%d petek, %s km2 %s"
          % (ihlal_n, format(round(ihlal_km2), ","),
             "(TEMIZ)" if ihlal_n == 0 else "🔴 BANTLAR ORTUSUYOR"), flush=True)

    # --- BANT BASINA BOYUT VE SURE ---
    onceki = None
    for k, saat in enumerate(BANT_SAAT):
        t0 = time.time()
        if onceki is None:
            gl = PD[saat]
            ad = "<=%g" % (saat / 8.0)
        else:
            gl = []
            for i, g in enumerate(PD[saat]):
                o = PD[onceki][i]
                try:
                    gl.append(g.difference(o) if (g is not None and not g.is_empty
                                                  and o is not None) else g)
                except Exception:
                    gl.append(Polygon())
            ad = "%g-%g" % (onceki / 8.0, saat / 8.0)
        fark_sn = round(time.time() - t0, 1)
        onceki = saat          # 🔴 BU SATIR UNUTULMUSTU — ilk kosuda uc bant da
        #    kumulatif cikti (<=5 / <=7 / <=10, ucu de ~316 KB) ve "artis bandi"
        #    hic olculmedi. Belirti gorunurdu (uc bant AYNI boyutta ve fark
        #    suresi 0,0 sn) — sayiya bakilmasaydi "bantlar ucuz" diye YANLIS
        #    bir hukum cikardi.
        bayt, halka, kose, kayit = _pool_boyut(gl)
        dolu = [g for g in gl if g is not None and not g.is_empty]
        sonuc["bant"].append({
            "ad": ad + " gun", "saat": saat, "fark_sn": fark_sn,
            "bayt": bayt, "kb": round(bayt / 1024.0, 1), "halka": halka,
            "kose": kose, "kayit": kayit,
            "km2": round(km2(unary_union(dolu))) if dolu else 0})
        print("  bant %-10s | %8.1f KB | halka %5d | kose %7d | kayit %4d "
              "| alan %s km2 | fark %.1f sn"
              % (ad, bayt / 1024.0, halka, kose, kayit,
                 format(sonuc["bant"][-1]["km2"], ","), fark_sn), flush=True)

    # --- COL KELEPCESI ---
    COL, coln = _col_kur(BOLGE_, os.path.join(KOK, "veri-kaynak"))
    t0 = time.time()
    # 🔴 KELEPCE TEK DEGER DEGIL, MERDIVEN OLCULUYOR. Eylul karari "colde
    #    ufuk 5 gunde kalir" diyor, ama o bir SECIM — ve Emre'ye secenek
    #    sunabilmek icin colun kendi ufkunun 40/56/80 hallerini ayri ayri
    #    olcuyorum. Col DISINDA ufuk her halde 80 saat (10 gun).
    kelepce = {}
    if COL is None or COL.is_empty:
        kelepce_km2 = None
        print("  COL YOK bu kutuda - kelepce olculemedi")
    else:
        for col_saat in BANT_SAAT:
            kel = []
            for i, g80 in enumerate(PD[80.0]):
                gc = PD[col_saat][i]
                try:
                    parca = [x for x in
                             (g80.difference(COL) if g80 is not None else None,
                              gc.intersection(COL) if gc is not None else None)
                             if x is not None and not x.is_empty]
                    kel.append(unary_union(parca) if parca else Polygon())
                except Exception:
                    kel.append(gc if gc is not None else Polygon())
            dolu = [g for g in kel if not g.is_empty]
            kelepce["col_ufku_%g_saat" % col_saat] = round(
                kara_km2 - (km2(unary_union(dolu)) if dolu else 0))
            print("  kelepce: col ufku %g saat -> sahipsiz %s km2"
                  % (col_saat, format(kelepce["col_ufku_%g_saat" % col_saat], ",")),
                  flush=True)
        kelepce_km2 = kelepce["col_ufku_40_saat"]
    sonuc["col"] = {
        "col_poligon": coln, "col_km2": round(km2(COL)) if COL is not None else 0,
        "kelepcesiz_10gun_sahipsiz_km2": None, "kelepceli_10gun_sahipsiz_km2": kelepce_km2,
        "kelepce_merdiveni": kelepce,
        "sure_sn": round(time.time() - t0, 1)}
    for saat in BANT_SAAT:
        dolu = [g for g in PD[saat] if g is not None and not g.is_empty]
        anahtar = "sahipsiz_%g_saat" % saat
        sonuc["col"][anahtar] = round(kara_km2 - (km2(unary_union(dolu)) if dolu else 0))
    sonuc["col"]["kelepcesiz_10gun_sahipsiz_km2"] = sonuc["col"]["sahipsiz_80_saat"]
    sonuc["kara_km2"] = round(kara_km2)
    print("  COL: %d poligon, %s km2 | sahipsiz 40sa %s | 56sa %s | 80sa %s "
          "| KELEPCELI 80sa %s"
          % (coln, format(sonuc["col"]["col_km2"], ","),
             format(sonuc["col"]["sahipsiz_40_saat"], ","),
             format(sonuc["col"]["sahipsiz_56_saat"], ","),
             format(sonuc["col"]["sahipsiz_80_saat"], ","),
             format(kelepce_km2, ",") if kelepce_km2 is not None else "-"))

    H = _yukle()
    H["BANT-" + a.ad] = sonuc
    _kaydet(H)
    return sonuc


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--kutu", default="26,34,50,44")
    p.add_argument("--ad")
    p.add_argument("--saat", type=float, default=40.0)
    p.add_argument("--bayrak", type=int, default=1)
    p.add_argument("--ozet", action="store_true")
    p.add_argument("--bant", action="store_true")
    p.add_argument("--dokum", help="ic kullanim: tek butce kosar, PETEK_D'yi yazar")
    p.add_argument("--kesim", default="col", choices=("col", "col-sonrasi"),
                   help="motor metninin nerede kesilecegi (bkz. _motor_kesiti)")
    a = p.parse_args()
    if a.ozet:
        return ozet()
    if a.dokum:
        return dokum(a)
    if not a.ad:
        raise SystemExit("--ad sart")
    if a.bant:
        return bant(a)
    kos(a)


if __name__ == "__main__":
    main()

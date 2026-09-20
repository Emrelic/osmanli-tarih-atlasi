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


def _motor_kesiti(kutu):
    """Motor metnini kutu moduna cevirir. Capalar TAM BIR KEZ gecmeli."""
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
    k = src.index("# ---------------- COL TAVANI ----------------\n"
                  .replace("COL", "\u00c7\u00d6L"))
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


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--kutu", default="26,34,50,44")
    p.add_argument("--ad")
    p.add_argument("--saat", type=float, default=40.0)
    p.add_argument("--bayrak", type=int, default=1)
    p.add_argument("--ozet", action="store_true")
    a = p.parse_args()
    if a.ozet:
        return ozet()
    if not a.ad:
        raise SystemExit("--ad sart")
    kos(a)


if __name__ == "__main__":
    main()

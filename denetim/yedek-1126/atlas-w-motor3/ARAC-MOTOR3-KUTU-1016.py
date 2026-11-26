# -*- coding: utf-8 -*-
"""MOTOR3-1016 — DAR KUTU SINAVI sürücüsü (motoru DEĞİŞTİRMEZ, kendi ağacında koşar).

🔴 KOŞU SÜRERKEN KOŞTURULMAZ (ağır süreç). Örnek alınan: denetim/ARAC-SINIR-KISIT-KUTU-1015.py.
Ağaç: kosu/26-hazirlik ucu + denetim/MOTOR-{YAKA-KILIDI,INCE-CIKINTI,ZIKZAK-DUZ}-1016.diff
uygulanmış (`kos` denetler; komşu-kur yaması da uygulanmış olabilir — bayrağı kapalı kalır).
Kesit üretimi `arac/motor_esitlik.py` `kesit_uret` (BOLGE = box(kutu) + salt-okur kanca).

ALT KOMUTLAR
  kos  --kutu x0,y0,x1,y1 --ad AD --varyant orig|kapali|acik --onb DİZİN [--bayrak Y,I,Z] [--ortam K=V,…]
        orig   = `--taban-ref` (varsayılan kosu/26-hazirlik) uret_petek.py (yamasız) · bayrak yok
        kapali = yamalı metin · MOTOR3 bayrakları YOK — orig ile BİT BİT aynı olmalı
        acik   = yamalı metin + ORTAMDA bayrak(lar): Y→MOTOR_YAKA_KILIDI=1 · I→MOTOR_INCE_CIKINTI=1 ·
                 Z→MOTOR_ZIKZAK_DUZ=1. Bayrak ORTAMDAN okunur ⇒ tuz farklı ⇒ önbellek paylaşılmaz
                 (ayrı --onb dizini önerilir, şart değil).
        Ortam (KOŞU 26 eşdeğeri): YÜRÜYÜŞ 40 sa · çöl kelepçesi 0 · MOTOR_SINIR_KISIT=1 ·
        MOTOR_COL_GIRINTI_KAPALI=1 · TEK süreç · DEVAM yok · A/B ölçümleri kapalı · bant yok.
  olc  --dizin ÇIKTI --vaka tuna|rodop [--json yol]
        tuna  (#7, gün 1284-06-01): Macaristan gövdesinin Tuna GÜNEYİNDEKİ alanı (km²) ·
              Zimnicea zamansız peteğinin güney payı · ters yön: kutudaki gövde birleşimi ve
              çift binme toplamı.
        rodop (#10 #11, gün 1281-06-01): Bulgar gövdesinin İNCE alanı (açma r=2,5 km ile
              kalkan pay, km²) · Hasköy zamansız peteğinin ince alanı · Bizans–Bulgar ortak
              sınırı: uzunluk, kıvrım oranı (uzunluk/kiriş), >60° dönüş sayısı (0,3 km
              sadeleştirmeden sonra) · ters yön: birleşim + binme.
  kiyas A B          iki çıktı dizininin sha256'sı (bit bit — orig ≡ kapali)
  hukum KAPALI.json ACIK.json
        İKİ YÖN: ① kusur kalktı (tuna: güney Macar ≤ %10 · rodop: ince alan ≥ %50 düşüş,
        ya da dönüş/kıvrım düşüşü — açık bayrağa göre) ② birleşim alanı |fark| ≤ %0,5
        (delik/taşma yok) ③ binme ARTMADI (+5 km² tolerans). Çıkış 0 = geçti.

ÇIKTI: <SCR>/kutu-m3/<AD>/ (motor.log, meta.json, üretilen .js)

KOMUT DİZİSİ (koordinatör/HAVVA, KOŞU 26'dan SONRA):
  git -C C:\\atlas worktree add C:\\atlas-w-m3k kosu/26-hazirlik --detach
  git -C C:\\atlas-w-m3k apply <yol>\\MOTOR-YAKA-KILIDI-1016.diff <yol>\\MOTOR-INCE-CIKINTI-1016.diff <yol>\\MOTOR-ZIKZAK-DUZ-1016.diff
  copy <yol>\\ARAC-MOTOR3-KUTU-1016.py C:\\atlas-w-m3k\\denetim\\
  set P=py C:\\atlas-w-m3k\\denetim\\ARAC-MOTOR3-KUTU-1016.py
  set T=23.8,42.6,27.2,44.8
  %P% kos --kutu %T% --ad tuna-orig   --varyant orig   --onb C:\\atlas-sinav-cikti\\onb-m3-orig
  %P% kos --kutu %T% --ad tuna-kapali --varyant kapali --onb C:\\atlas-sinav-cikti\\onb-m3
  %P% kos --kutu %T% --ad tuna-acik   --varyant acik   --bayrak Y --onb C:\\atlas-sinav-cikti\\onb-m3-y
  %P% kiyas <SCR>\\kutu-m3\\tuna-orig <SCR>\\kutu-m3\\tuna-kapali
  %P% olc --dizin <SCR>\\kutu-m3\\tuna-kapali --vaka tuna --json <SCR>\\kutu-m3\\tuna-kapali.json
  %P% olc --dizin <SCR>\\kutu-m3\\tuna-acik   --vaka tuna --json <SCR>\\kutu-m3\\tuna-acik.json
  %P% hukum <SCR>\\kutu-m3\\tuna-kapali.json <SCR>\\kutu-m3\\tuna-acik.json
  set R=23.8,40.6,27.2,42.9
  %P% kos --kutu %R% --ad rodop-orig   --varyant orig   --onb C:\\atlas-sinav-cikti\\onb-m3-orig
  %P% kos --kutu %R% --ad rodop-kapali --varyant kapali --onb C:\\atlas-sinav-cikti\\onb-m3
  %P% kos --kutu %R% --ad rodop-acik-i --varyant acik --bayrak I   --onb C:\\atlas-sinav-cikti\\onb-m3-i
  %P% kos --kutu %R% --ad rodop-acik-z --varyant acik --bayrak Z   --onb C:\\atlas-sinav-cikti\\onb-m3-z
  %P% kos --kutu %R% --ad rodop-acik-iz --varyant acik --bayrak I,Z --onb C:\\atlas-sinav-cikti\\onb-m3-iz
  %P% kiyas <SCR>\\kutu-m3\\rodop-orig <SCR>\\kutu-m3\\rodop-kapali
  %P% olc --dizin <SCR>\\kutu-m3\\rodop-kapali --vaka rodop --json <SCR>\\kutu-m3\\rodop-kapali.json
  (aynısı rodop-acik-i / -z / -iz için) · %P% hukum <...kapali.json> <...acik-iz.json>
"""
import argparse, datetime, hashlib, io, json, math, os, shutil, subprocess, sys, time

sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
AG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(AG, "arac"))
SCR = os.environ.get("M3_SCR", r"C:\Users\user\AppData\Local\Temp\claude\C--atlas"
                     r"\d3ef9f1f-d3af-4413-9063-52fbbc1ce09f\scratchpad")
CIKTI_KOK = os.path.join(SCR, "kutu-m3")
URETILEN_IZLI = ["data/bolgeler.js", "data/devirler.js", "veri-kaynak/motor_kara.geojson"]
URETILEN_IZSIZ = ["data/donemler.js", "data/devletler_harita.js", "data/petek_govde.js",
                  "data/ufuk_bantlari.js", "data/dolgu.js", ".uretim-basladi"]
KIYAS = ("donemler.js", "devletler_harita.js", "bolgeler.js", "petek_govde.js")
BAYRAK_SATIRLARI = ('YAKA_KILIDI = os.environ.get("MOTOR_YAKA_KILIDI") == "1"\n',
                    'INCE_CIKINTI = int(os.environ.get("MOTOR_INCE_CIKINTI", "0") or "0")\n',
                    'ZIKZAK_DUZ = os.environ.get("MOTOR_ZIKZAK_DUZ") == "1"\n')
BAYRAK_ORTAM = {"Y": "MOTOR_YAKA_KILIDI", "I": "MOTOR_INCE_CIKINTI", "Z": "MOTOR_ZIKZAK_DUZ"}
VAKA = {
    "tuna": {"gun": "1284-06-01", "olcu": (24.9, 43.3, 26.3, 44.0), "nokta_guney": (25.6, 43.45),
             "devlet": "macaristan", "petek": "Zimnicea"},
    "rodop": {"gun": "1281-06-01", "olcu": (24.8, 41.3, 26.4, 42.3), "a": "bizans",
              "b": "bulgar-carligi", "petek": "Hasköy (Haskovo)", "ince_km": 2.5},
}


def sha(yol):
    h = hashlib.sha256()
    with open(yol, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def kos(a):
    import motor_esitlik as me
    motor = os.path.join(AG, "arac", "uret_petek.py")
    yamali = io.open(motor, encoding="utf-8").read().replace("\r\n", "\n")
    eksik = [b for b in BAYRAK_SATIRLARI if b not in yamali]
    if eksik:
        raise SystemExit(f"ağaçtaki uret_petek.py MOTOR3 yamalı DEĞİL — eksik: {eksik}")
    cikti = os.path.join(CIKTI_KOK, a.ad)
    if os.path.exists(os.path.join(cikti, "meta.json")):
        raise SystemExit(f"{cikti} zaten var")
    os.makedirs(cikti, exist_ok=True)
    subprocess.run(["git", "-C", AG, "checkout", "--"] + URETILEN_IZLI, check=True)
    for u in URETILEN_IZSIZ:
        y = os.path.join(AG, u)
        if os.path.exists(y):
            os.remove(y)
    if a.varyant == "orig":
        kaynak = os.path.join(cikti, "_orig_uret_petek.py")
        with open(kaynak, "wb") as f:
            f.write(subprocess.run(["git", "-C", AG, "show", f"{a.taban_ref}:arac/uret_petek.py"],
                                   capture_output=True, check=True).stdout)
        if "YAKA_KILIDI" in io.open(kaynak, encoding="utf-8").read():
            raise SystemExit("taban zaten MOTOR3 yamalı — orig olamaz")
    else:
        kaynak = motor
    src = me.kesit_uret(kaynak, a.kutu, None)
    kesit = os.path.join(AG, "arac", "_sinav_kesit.py")
    with io.open(kesit, "w", encoding="utf-8", newline="\n") as f:
        f.write(f"__file__ = {motor!r}\n" + src)
    env = {k: v for k, v in os.environ.items() if not k.startswith("MOTOR_")}
    env.update({"MOTOR_YURUYUS": "1", "MOTOR_YURUYUS_SAAT": "40", "MOTOR_COL_UFUK_SAAT": "0",
                "MOTOR_SINIR_KISIT": "1", "MOTOR_COL_GIRINTI_KAPALI": "1",
                "MOTOR_SUREC_ISCI": "1", "MOTOR_PARALEL_ISCI": str(a.isci),
                "MOTOR_EGIM_AB_KAPALI": "1", "MOTOR_NEHIR_AB_KAPALI": "1",
                "MOTOR_ONBELLEK_DIZIN": os.path.abspath(a.onb),
                "MOTOR_CANLI_LOG": os.path.join(cikti, "canli.log"),
                "PYTHONPATH": os.path.join(AG, "arac"), "PYTHONIOENCODING": "utf-8"})
    if a.varyant == "acik":
        if not a.bayrak:
            raise SystemExit("acik varyantı --bayrak ister (Y,I,Z)")
        for b in a.bayrak.split(","):
            env[BAYRAK_ORTAM[b.strip().upper()]] = "1"
    elif a.bayrak:
        raise SystemExit("--bayrak yalnız acik varyantında")
    for kv in (a.ortam or "").split(","):
        if kv.strip():
            k_, v_ = kv.split("=", 1)
            env[k_.strip()] = v_.strip()
    os.makedirs(a.onb, exist_ok=True)
    meta = {"ad": a.ad, "kutu": a.kutu, "varyant": a.varyant, "bayrak": a.bayrak, "onb": a.onb,
            "kaynak_sha256": sha(kaynak), "disk_motor_sha256": sha(motor),
            "ag_head": subprocess.run(["git", "-C", AG, "rev-parse", "HEAD"],
                                      capture_output=True, text=True).stdout.strip(),
            "ortam": {k: v for k, v in env.items() if k.startswith("MOTOR_")},
            "basla": datetime.datetime.now().isoformat(timespec="seconds")}
    t0 = time.time()
    with open(os.path.join(cikti, "motor.log"), "w", encoding="utf-8") as lg:
        r = subprocess.run([sys.executable, "-u", kesit], cwd=AG, env=env, stdout=lg,
                           stderr=subprocess.STDOUT,
                           creationflags=0x4000 if os.name == "nt" else 0)   # BELOW_NORMAL
    meta["motor_kod"], meta["motor_sn"] = r.returncode, round(time.time() - t0)
    if r.returncode == 0:
        meta["sha256"] = {}
        for u in URETILEN_IZSIZ[:3] + ["data/bolgeler.js"]:
            y = os.path.join(AG, u)
            if os.path.exists(y):
                shutil.copy2(y, os.path.join(cikti, os.path.basename(u)))
                meta["sha256"][os.path.basename(u)] = sha(y)
    # motorun MOTOR3 sayaç satırları (açıkken) meta'ya
    try:
        log = io.open(os.path.join(cikti, "motor.log"), encoding="utf-8", errors="replace").read()
        meta["motor3_satir"] = [s.strip() for s in log.splitlines()
                                if any(t in s for t in ("yaka kilidi", "ince çıkıntı", "zikzak ("))]
    except OSError:
        pass
    meta["bitis"] = datetime.datetime.now().isoformat(timespec="seconds")
    with open(os.path.join(cikti, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=1)
    os.remove(kesit)
    print(f"KOŞU {a.ad} ({a.varyant} {a.bayrak or ''}) · motor kod {meta['motor_kod']} · "
          f"{meta['motor_sn']} sn · {cikti}")
    for s in meta.get("motor3_satir", []):
        print("   ", s)
    return 0 if r.returncode == 0 else 1


# ───────────────────────────── ölçüm ─────────────────────────────
def _laea(kutu):
    from pyproj import Transformer
    from shapely.ops import transform
    lon0, lat0 = (kutu[0] + kutu[2]) / 2, (kutu[1] + kutu[3]) / 2
    t = Transformer.from_crs("EPSG:4326", f"+proj=laea +lat_0={lat0} +lon_0={lon0} +units=km",
                             always_xy=True)
    return lambda g: transform(t.transform, g)


def _govde(dz):
    import denetle as D
    from shapely.geometry import Polygon

    class Govde(D._D8Govde):
        """_D8Govde'nin AYNISI, yalnız dosyalar verilen dizinden ve kimlik sınavı YOK."""

        def __init__(self, dz):
            self._Polygon = Polygon
            H = D._d8_js(os.path.join(dz, "devletler_harita.js"))
            Dn = D._d8_js(os.path.join(dz, "donemler.js"))
            B = D._d8_js(os.path.join(dz, "bolgeler.js"))
            self.damga = "dar kutu " + os.path.basename(dz)
            self.bolgeler = B["BOLGELER"]
            self.kay = [
                (H["DEVLET_PARCALAR"], H["DEVLET_PARCA_HALKA"],
                 [(d["id"], dn.get("f") or "0000", dn.get("t") or "9999", dn.get("g") or [])
                  for d in H["DEVLET_HARITA"] for dn in d.get("dnm") or []]),
                (Dn["PARCALAR"], Dn["PARCA_HALKA"],
                 [(k, d.get("f") or "0000", d.get("t") or "9999", d.get(al) or [])
                  for d in Dn["DONEMLER"] for al, k in (("o", "OSMANLI"), ("v", "OSM-TABI"))]),
            ]
            self._onb = {}
            self._kutu = {}

    return Govde(dz)


def _petek(dz, ad):
    """zamansız petek (petek_govde.js) — adıyla."""
    from shapely.geometry import Polygon
    from shapely.ops import unary_union
    js = ("global.window={};require(process.argv[1]+'/donemler.js');require(process.argv[1]+"
          "'/petek_govde.js');const P=window.PETEKLER,G=window.PETEK_GOVDE,H=window.PETEK_GOVDE_PARCA;"
          "const i=P.findIndex(p=>p.a===process.argv[2]);"
          "process.stdout.write(JSON.stringify(i<0?null:(G[i]||[]).map(k=>H[k])));")
    r = subprocess.run(["node", "-e", js, dz.replace("\\", "/"), ad], capture_output=True)
    v = json.loads(r.stdout.decode("utf-8") or "null")
    if v is None:
        return None
    return unary_union([Polygon(p[0], p[1:]) for p in v])


def _binme_birlesim(parca, P):
    from shapely.ops import unary_union
    gs = [P(g) for _, g in parca]
    bir = unary_union(gs) if gs else None
    toplam = sum(g.area for g in gs)
    return (round(bir.area, 1) if bir is not None else 0.0), round(toplam - (bir.area if bir else 0), 1)


def _donus(L, esik=60.0):
    cs = list(L.coords)
    n = 0
    for a, b, c in zip(cs, cs[1:], cs[2:]):
        v1 = (b[0] - a[0], b[1] - a[1]); v2 = (c[0] - b[0], c[1] - b[1])
        l1, l2 = math.hypot(*v1), math.hypot(*v2)
        if l1 < 1e-9 or l2 < 1e-9:
            continue
        x = max(-1.0, min(1.0, (v1[0] * v2[0] + v1[1] * v2[1]) / (l1 * l2)))
        n += math.degrees(math.acos(x)) > esik
    return n


def _ince(g_km, r):
    if g_km is None or g_km.is_empty:
        return 0.0
    ac = g_km.buffer(-r, join_style=2).buffer(r, join_style=2)
    return round(g_km.difference(ac).area, 1)


def olc(a):
    from shapely.geometry import box, shape, Point
    from shapely.ops import unary_union, split, linemerge
    V = VAKA[a.vaka]
    K = box(*V["olcu"])
    P = _laea(V["olcu"])
    gv = _govde(a.dizin)
    parca = [(gid, g.intersection(K)) for gid, g in gv.kesit(V["gun"], V["olcu"])]
    parca = [(gid, g) for gid, g in parca if not g.is_empty]
    birlesim, binme = _binme_birlesim(parca, P)
    out = {"dizin": a.dizin, "vaka": a.vaka, "gun": V["gun"], "kutu": V["olcu"],
           "birlesim_km2": birlesim, "binme_km2": binme,
           "devletler": sorted({gid for gid, _ in parca})}
    if a.vaka == "tuna":
        rv = json.load(open(os.path.join(AG, "veri-kaynak", "ne_10m_rivers.geojson"), encoding="utf-8"))
        T = unary_union([shape(f["geometry"]).intersection(K) for f in rv["features"]
                         if f["properties"].get("name") == "Danube" and shape(f["geometry"]).intersects(K)])
        gun = [p for p in split(K, T).geoms if p.contains(Point(*V["nokta_guney"]))][0]
        mac = unary_union([g for gid, g in parca if gid == V["devlet"]] or [box(0, 0, 0, 0)])
        out["macar_guney_km2"] = round(P(mac.intersection(gun)).area, 1)
        z = _petek(a.dizin, V["petek"])
        out["petek_guney_km2"] = None if z is None else round(P(z.intersection(gun)).area, 1)
        print(f"ÖLÇÜM {a.dizin} [tuna {V['gun']}]")
        print(f"  Macaristan Tuna GÜNEYİNDE: {out['macar_guney_km2']:,} km² · "
              f"{V['petek']} zamansız petek güney payı: {out['petek_guney_km2']} km²")
    else:
        A = unary_union([g for gid, g in parca if gid == V["a"]] or [box(0, 0, 0, 0)])
        B = unary_union([g for gid, g in parca if gid == V["b"]] or [box(0, 0, 0, 0)])
        Ak, Bk = P(A), P(B)
        out["b_ince_km2"] = _ince(Bk, V["ince_km"])
        out["a_ince_km2"] = _ince(Ak, V["ince_km"])
        hz = _petek(a.dizin, V["petek"])
        out["petek_ince_km2"] = None if hz is None else _ince(P(hz.intersection(K)), V["ince_km"])
        ortak = Ak.boundary.intersection(Bk.buffer(0.05))
        L = linemerge(ortak) if not ortak.is_empty else None
        parts = [] if L is None else [p for p in getattr(L, "geoms", [L]) if p.geom_type == "LineString"]
        uz = sum(p.length for p in parts)
        kir = sum(Point(p.coords[0]).distance(Point(p.coords[-1])) for p in parts)
        out["ortak_km"] = round(uz, 1)
        out["kivrim"] = round(uz / kir, 3) if kir > 0 else None
        out["donus60"] = sum(_donus(p.simplify(0.3)) for p in parts)
        out["ortak_parca"] = len(parts)
        print(f"ÖLÇÜM {a.dizin} [rodop {V['gun']}]")
        print(f"  ince (r={V['ince_km']} km açma): {V['b']} {out['b_ince_km2']:,} km² · {V['a']} "
              f"{out['a_ince_km2']:,} km² · {V['petek']} zamansız {out['petek_ince_km2']} km²")
        print(f"  {V['a']}–{V['b']} ortak sınır: {out['ortak_km']:,} km · {out['ortak_parca']} parça · "
              f"kıvrım {out['kivrim']} · >60° dönüş {out['donus60']}")
    print(f"  ters yön: kutudaki gövde birleşimi {birlesim:,} km² · çift binme {binme:,} km² · "
          f"devlet {len(out['devletler'])}")
    if a.json:
        with open(a.json, "w", encoding="utf-8") as f:
            json.dump(out, f, ensure_ascii=False, indent=1)
    return 0


def kiyas(a):
    fark = 0
    for ad in KIYAS:
        ya, yb = os.path.join(a.A, ad), os.path.join(a.B, ad)
        if not (os.path.exists(ya) and os.path.exists(yb)):
            print(f"  {ad}: EKSİK ({os.path.exists(ya)}, {os.path.exists(yb)})")
            fark += 1
            continue
        sa, sb = sha(ya), sha(yb)
        print(f"  {ad}: {'AYNI' if sa == sb else 'FARKLI'} {sa[:12]} {sb[:12]}")
        fark += sa != sb
    print("KIYAS: " + ("BİT BİT AYNI" if not fark else f"{fark} dosya farklı"))
    return 0 if not fark else 1


def hukum(a):
    K_ = json.load(open(a.kapali, encoding="utf-8"))
    A_ = json.load(open(a.acik, encoding="utf-8"))
    if K_["vaka"] != A_["vaka"]:
        raise SystemExit("iki ölçüm farklı vakadan")
    sonuc = []

    def h(ad, ok, ayr):
        sonuc.append(ok)
        print(f"  {'✓' if ok else '✗'} {ad} — {ayr}")

    if K_["vaka"] == "tuna":
        h("① kusur vardı (kapalıda güney Macar > 100 km²)", K_["macar_guney_km2"] > 100,
          f"{K_['macar_guney_km2']:,}")
        h("① kusur kalktı (açıkta ≤ %10)", A_["macar_guney_km2"] <= 0.1 * max(1.0, K_["macar_guney_km2"]),
          f"{K_['macar_guney_km2']:,} → {A_['macar_guney_km2']:,} km² · petek güney "
          f"{K_.get('petek_guney_km2')} → {A_.get('petek_guney_km2')}")
    else:
        dus_ince = A_["b_ince_km2"] <= 0.5 * K_["b_ince_km2"] if K_["b_ince_km2"] > 0 else True
        h("① ince alan (Bulgar) ≥ %50 düştü [I açıkken beklenir]", dus_ince,
          f"{K_['b_ince_km2']:,} → {A_['b_ince_km2']:,} km² · petek {K_.get('petek_ince_km2')} → "
          f"{A_.get('petek_ince_km2')}")
        h("① >60° dönüş azaldı [Z açıkken beklenir]", A_["donus60"] < K_["donus60"],
          f"{K_['donus60']} → {A_['donus60']} · kıvrım {K_['kivrim']} → {A_['kivrim']} · uzunluk "
          f"{K_['ortak_km']:,} → {A_['ortak_km']:,} km")
    fb = abs(A_["birlesim_km2"] - K_["birlesim_km2"]) / max(1.0, K_["birlesim_km2"])
    h("② birleşim alanı |fark| ≤ %0,5 (delik/taşma yok)", fb <= 0.005,
      f"{K_['birlesim_km2']:,} → {A_['birlesim_km2']:,} km² (%{100 * fb:.3f})")
    h("③ binme ARTMADI (+5 km²)", A_["binme_km2"] <= K_["binme_km2"] + 5,
      f"{K_['binme_km2']:,} → {A_['binme_km2']:,} km²")
    print("HÜKÜM: " + ("GEÇTİ" if all(sonuc) else "DÜŞTÜ (açık bayrağa göre beklenmeyen ① satırı "
                                                     "bilgi amaçlıdır — ör. yalnız I açıkken dönüş)"))
    return 0 if all(sonuc) else 1


def main():
    p = argparse.ArgumentParser()
    s = p.add_subparsers(dest="k", required=True)
    k = s.add_parser("kos")
    k.add_argument("--kutu", required=True)
    k.add_argument("--ad", required=True)
    k.add_argument("--varyant", choices=("orig", "kapali", "acik"), required=True)
    k.add_argument("--onb", required=True)
    k.add_argument("--bayrak", help="acik için: Y,I,Z alt kümesi")
    k.add_argument("--isci", type=int, default=3)
    k.add_argument("--taban-ref", default="kosu/26-hazirlik")
    k.add_argument("--ortam", help="ek MOTOR_* ortamı: K=V,K=V")
    o = s.add_parser("olc")
    o.add_argument("--dizin", required=True)
    o.add_argument("--vaka", choices=tuple(VAKA), required=True)
    o.add_argument("--json")
    c = s.add_parser("kiyas")
    c.add_argument("A")
    c.add_argument("B")
    hk = s.add_parser("hukum")
    hk.add_argument("kapali")
    hk.add_argument("acik")
    a = p.parse_args()
    return {"kos": kos, "olc": olc, "kiyas": kiyas, "hukum": hukum}[a.k](a)


if __name__ == "__main__":
    sys.exit(main())

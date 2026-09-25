# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 · AYIKLAMA SINAVI — yamalı `_puan_bolgesi` motorunkiyle BİT BİT aynı mı?

  REF : HEAD `arac/uret_petek.py`nin `_puan_bolgesi`si (AST ile birebir çekilir)
  B   : yamalı dosyanın `_puan_bolgesi`si (nokta başına alt pencere) — YAMANIN KENDİ KODU
  A   : 10° karo + 400 km hale (ARAC-LEGO-karo-puan.py) — biçim karşılaştırması için
Ölçüt: poligon WKB eşitliği (REF ↔ B, REF ↔ A). Poligonlaştırma maskenin deterministik
işlevi ⇒ WKB eşitliği maske eşitliğini de kapsar; ayrıca B'nin maskesi doğrudan kıyaslanır.
Evren: koşu 15 girdisi (üretimin koşacağı veri), devlet × dönem aktif kümeleri, eşsiz küme.
Petek GEREKMEZ: puan yalnız aktif noktaların konumunu okur.
ÖRNEKLEM (M-5185 ④ⓐⓑ — öngörü `MOTOR-LEGO-0925-ayikla-ongoru.md`, ölçümden önce):
  KUTUP    üye |enlem| > 60°              — en yüksek enlemliler önce, sonra rastgele
  TARIH    üye |boylam| > 170° ya da pencere > 180° geniş
  BOSLUK   en yakın üye komşusu > 400 km olan üye var
  KENAR    pencere ızgara sınırıyla kırpılıyor (−60/85 enlem, ±180 boylam)
  AGIR     tahminî maliyet (hücre × nokta) en yüksekler
  RASTGELE eşsiz kümelerden düzgün rastgele (küçük gövdeler temsil edilsin)
Kullanım: py denetim/ARAC-LEGO-ayikla-sinav.py <yamalı uret_petek.py> [--kuru] [--tavan N]
"""
import ast, importlib.util, json, math, os, random, sys, time
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import numpy as np
import shapely
from shapely.geometry import box
from shapely.ops import unary_union

DEN = r"C:\atlas\denetim"


def modul(ad, dosya):
    sp = importlib.util.spec_from_file_location(ad, os.path.join(DEN, dosya))
    m = importlib.util.module_from_spec(sp); sp.loader.exec_module(m); return m


def puan_fonk(yol):
    t = ast.parse(open(yol, encoding="utf-8").read())
    ns = dict(math=math, box=box, unary_union=unary_union)
    for n in t.body:
        if (isinstance(n, ast.FunctionDef) and n.name == "_puan_bolgesi") or \
                (isinstance(n, ast.Assign) and len(n.targets) == 1 and isinstance(n.targets[0], ast.Name)
                 and n.targets[0].id in ("KV_ADIM", "PUAN_ESIK", "PUAN_HALKA")):
            exec(compile(ast.Module([n], []), yol, "exec"), ns)
    assert "_puan_bolgesi" in ns and "PUAN_HALKA" in ns, yol
    return ns


def km(a, b):
    return math.hypot((a["lon"] - b["lon"]) * 111.32 * math.cos(math.radians((a["lat"] + b["lat"]) / 2)),
                      (a["lat"] - b["lat"]) * 110.574)


def main():
    yamali = sys.argv[1]
    kuru = "--kuru" in sys.argv
    tavan = float(sys.argv[sys.argv.index("--tavan") + 1]) if "--tavan" in sys.argv else 4e11
    kp = modul("kp", "ARAC-LEGO-karo-puan.py")
    ko = kp.ko
    et = modul_et = None
    # yükleyiciyi ARAC-LEGO-karo-olc.kur içindeki yoldan al (etki.yukle), petek yüklemeden
    sp = importlib.util.spec_from_file_location("etki", os.path.join(DEN, "ARAC-LEGO-etki.py"))
    et = importlib.util.module_from_spec(sp)
    exec(compile(open(sp.origin, encoding="utf-8").read().replace("\nmain()\n", "\n"), sp.origin, "exec"), et.__dict__)
    Y, B = et.yukle(r"C:/atlas-kosu15")
    REF = puan_fonk(r"C:\atlas\arac\uret_petek.py")
    YAM = puan_fonk(yamali)
    ortak = dict(YERLER=Y, _kvx0=-180, _kvy0=-60, _kvnx=int(round(360 / 0.05)), _kvny=int(round(145 / 0.05)))
    for ns in (REF, YAM):
        ns.update(ortak, _PUAN_ONBELLEK={})
    kpns = dict(REF); kpns.update(ortak)
    # ---- evren: eşsiz aktif kümeler ----
    kume = {}
    for did in B:
        for a, ak in ko.donemler(Y, B, did):
            kume.setdefault(ak, (did, a))
    print(f"  evren (koşu 15 girdisi): {len(Y)} nokta · {sum(len(ko.donemler(Y, B, d)) for d in B):,} gövde · "
          f"eşsiz aktif küme {len(kume):,}")
    bilgi = []
    for ak, (did, a) in kume.items():
        x0, y0, nx, ny = kp.pencere(kpns, ak, Y)
        uy = [Y[j] for j in ak]
        lats = [abs(y["lat"]) for y in uy]; lons = [y["lon"] for y in uy]
        r = 400.0
        c = max(0.15, math.cos(math.radians(max(lats))))
        kenar = (min(y["lat"] for y in uy) - r / 110.574 < -60 or max(y["lat"] for y in uy) + r / 110.574 > 85 or
                 min(lons) - r / 111.32 / c < -180 or max(lons) + r / 111.32 / c > 180)
        bos = False
        if len(uy) > 1:
            for i, p in enumerate(uy[:300]):
                if min(km(p, q) for k2, q in enumerate(uy) if k2 != i) > 400:
                    bos = True; break
        bilgi.append(dict(ak=ak, did=did, a=a, n=len(ak), mal=nx * ny * len(ak), maxlat=max(lats),
                          kutup=max(lats) > 60, tarih=(max(abs(l) for l in lons) > 170 or nx * 0.05 > 180),
                          bosluk=bos, kenar=kenar))
    rnd = random.Random(925)
    secim = {}
    def al(etiket, liste, anahtar, n_ust, n_rast):
        liste = sorted(liste, key=anahtar, reverse=True)
        s = liste[:n_ust] + rnd.sample(liste[n_ust:], min(n_rast, max(0, len(liste) - n_ust)))
        for b in s:
            secim.setdefault(id(b), (b, set()))[1].add(etiket)
        print(f"    {etiket:9s} sınıfta {len(liste):5,d} · seçilen {len(s)}")
    al("KUTUP", [b for b in bilgi if b["kutup"]], lambda b: b["maxlat"], 10, 30)
    al("TARIH", [b for b in bilgi if b["tarih"]], lambda b: b["mal"], 5, 30)
    al("BOSLUK", [b for b in bilgi if b["bosluk"]], lambda b: b["mal"], 5, 30)
    al("KENAR", [b for b in bilgi if b["kenar"]], lambda b: b["maxlat"], 5, 20)
    al("AGIR", bilgi, lambda b: b["mal"], 12, 0)
    al("RASTGELE", bilgi, lambda b: 0, 0, 150)
    orn = [v for v in secim.values()]
    if "--yalniz" in sys.argv:          # negatif çapa vb.: yalnız bir sınıf
        _s = sys.argv[sys.argv.index("--yalniz") + 1]
        orn = [v for v in orn if _s in v[1]]
    mal = sum(b["mal"] for b, _ in orn)
    print(f"  örneklem {len(orn)} eşsiz küme · tahminî maliyet {mal:.2e} hücre×nokta (tavan {tavan:.0e})")
    if kuru:
        return
    orn.sort(key=lambda v: v[0]["mal"])           # ucuzdan pahalıya: erken kusur erken görünür
    sayi = {"ref_b": 0, "ref_a": 0, "n": 0}; sure = {"REF": 0.0, "B": 0.0, "A": 0.0}
    sinif_fark = {}; harcanan = 0.0; t0 = time.time()
    for b, etiketler in orn:
        if harcanan + b["mal"] > tavan and sayi["n"] >= 50:
            print(f"  ⏹ tavan: {sayi['n']} kümede duruldu (kalan {len(orn) - sayi['n']})"); break
        harcanan += b["mal"]
        ak, did = b["ak"], b["did"]
        REF["_PUAN_ONBELLEK"].clear(); YAM["_PUAN_ONBELLEK"].clear()
        s = time.perf_counter(); g0 = REF["_puan_bolgesi"](did, ak, None); sure["REF"] += time.perf_counter() - s
        s = time.perf_counter(); g1 = YAM["_puan_bolgesi"](did, ak, None); sure["B"] += time.perf_counter() - s
        # A: karo maskesi + global poligonlaştırma
        s = time.perf_counter()
        x0, y0, nx, ny = kp.pencere(kpns, ak, Y)
        KV = 0.05; kh = int(round(10.0 / KV)); mk = np.zeros((ny, nx), dtype=bool)
        for j0 in range(0, ny, kh):
            for i0 in range(0, nx, kh):
                h, w = min(kh, ny - j0), min(kh, nx - i0)
                cx0, cy0 = x0 + i0 * KV, y0 + j0 * KV
                lat_m = max(abs(cy0), abs(cy0 + h * KV))
                dx = 400.0 / 111.320 / max(1e-9, math.cos(math.radians(min(90.0, lat_m)))) + KV
                dy = 400.0 / 110.574 + KV
                yak = [q for q in ak if cx0 - dx <= Y[q]["lon"] <= cx0 + w * KV + dx and cy0 - dy <= Y[q]["lat"] <= cy0 + h * KV + dy]
                if yak:
                    mk[j0:j0 + h, i0:i0 + w] = kp.puan_izgara(kpns, yak, Y, x0, y0, nx, ny, j0, i0, h, w)
        g2 = kp.poligonla(mk, x0, y0, KV)[0]
        sure["A"] += time.perf_counter() - s
        w = lambda g: b"NONE" if g is None else shapely.to_wkb(g)
        eb, ea = w(g0) == w(g1), w(g0) == w(g2)
        sayi["n"] += 1; sayi["ref_b"] += eb; sayi["ref_a"] += ea
        for e in etiketler:
            f = sinif_fark.setdefault(e, [0, 0, 0])
            f[0] += 1; f[1] += (not eb); f[2] += (not ea)
        if not (eb and ea):
            print(f"    ✗ FARK {did} {b['a']} |aktif| {b['n']} {sorted(etiketler)} · B {'✓' if eb else '✗'} A {'✓' if ea else '✗'}")
        if sayi["n"] % 25 == 0:
            print(f"    … {sayi['n']} küme · REF {sure['REF']:.0f} sn · B {sure['B']:.1f} · A {sure['A']:.1f} · "
                  f"{time.time() - t0:.0f} sn duvar", flush=True)
    n = sayi["n"]
    print(f"\n  SONUÇ ({n} eşsiz küme):")
    print(f"    REF ↔ B (yama, nokta başına) WKB aynı: {sayi['ref_b']}/{n}")
    print(f"    REF ↔ A (10° karo)           WKB aynı: {sayi['ref_a']}/{n}")
    print(f"    süre: REF {sure['REF']:.1f} sn · B {sure['B']:.1f} sn ({sure['REF'] / max(sure['B'], 1e-9):.0f}×) · "
          f"A {sure['A']:.1f} sn ({sure['REF'] / max(sure['A'], 1e-9):.0f}×)")
    print("    sınıf başına (küme · B farkı · A farkı):")
    for e, (k, fb, fa) in sorted(sinif_fark.items()):
        print(f"      {e:9s} {k:4d} · {fb} · {fa}")
    sys.exit(0 if sayi["ref_b"] == n else 1)


if __name__ == "__main__":
    main()

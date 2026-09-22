# -*- coding: utf-8 -*-
"""P13B · SEÇİCİ İNCE (0014/H-0004 Aral/Baykal · 0016/H-0003 Tuz Gölü · 0020/H-0005 Malta ·
0029/H-0007 Osmanlı çekirdek kıyı) ÖLÇÜMÜ. Kod değişikliği YOK.
Soru: kıyı/göl kenarının kabalığını HANGİ adım üretiyor? Adaylar:
  GOLLER simplify 0.01 (≈1,1 km) · KARA_TOL 0.002 (≈220 m) · seyrelt SEYRELT_TOL 0.03
  (≈3,3 km, YALNIZ yabancı havuz) · mp_koord 3 ondalık (≈111 m) · SADE_TOL (kıyıya uygulanmaz)
Ölçü: yayındaki halka ile ham Natural Earth geometrisi arasındaki Hausdorff (km) ve köşe
aralığı; aynı yerin ham NE / GOLLER(0.01) / GOLLER(0.002) karşılaştırması."""
import io, json, os, sys, time, importlib.util, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\atlas"
sys.path.insert(0, os.path.join(KOK, "arac"))
from shapely.geometry import Polygon, MultiPolygon, LineString, shape, box, Point
from shapely.ops import unary_union
import girdi

sp = importlib.util.spec_from_file_location("p13b_kara", os.path.join(KOK, "denetim", "ARAC-P13B-KARA-0914.py"))
km_ = importlib.util.module_from_spec(sp); sp.loader.exec_module(km_)
KARA, GOLLER, BOLGE, kns = km_.kara_goller()


def pencere(yol, adlar):
    s = io.open(yol, encoding="utf-8").read()
    out = {}
    for ad in adlar:
        a = "window." + ad + " = "; i = s.find(a)
        out[ad] = json.loads(s[i + len(a):s.find(";\n", i)])
    return out


def km(d, lat):
    return d * 111.32 * math.cos(math.radians(lat)) if False else d * 111.0


def halka_istat(halkalar, kutu):
    """kutuya değen halka sayısı, eşsiz köşe, medyan segment km."""
    kb = box(*kutu)
    seg, kose, n = [], set(), 0
    for h in halkalar:
        L = LineString(h)
        if not L.intersects(kb):
            continue
        n += 1
        for a, b in zip(h, h[1:]):
            if kb.contains(Point(a)):
                kose.add(tuple(a))
                seg.append(math.hypot((b[0]-a[0]) * 111.32 * math.cos(math.radians(a[1])),
                                      (b[1]-a[1]) * 110.574))
    seg.sort()
    return n, len(kose), (seg[len(seg)//2] if seg else None)


def hausdorff_km(cizgi, referans, kutu):
    kb = box(*kutu)
    a = cizgi.intersection(kb); b = referans.intersection(kb)
    if a.is_empty or b.is_empty:
        return None
    return a.hausdorff_distance(b) * 111.0


t0 = time.time()
dh = pencere(os.path.join(KOK, "data", "devletler_harita.js"), ["DEVLET_PARCALAR"])["DEVLET_PARCALAR"]
oh = pencere(os.path.join(KOK, "data", "donemler.js"), ["PARCALAR"])["PARCALAR"]
print(f"havuzlar: yabancı halka {len(dh):,} · Osmanlı halka {len(oh):,} · {time.time()-t0:.0f} sn")
ne_land = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
ne_lake = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_lakes.geojson"), encoding="utf-8"))


def ne_kara(kutu):
    kb = box(*kutu)
    return unary_union([shape(f["geometry"]).buffer(0).intersection(kb) for f in ne_land["features"]
                        if shape(f["geometry"]).envelope.intersects(kb)])


def ne_gol(kutu, ad_parca=None):
    kb = box(*kutu)
    gs = [shape(f["geometry"]).buffer(0) for f in ne_lake["features"]
          if shape(f["geometry"]).envelope.intersects(kb)
          and (ad_parca is None or ad_parca.lower() in (f["properties"].get("name") or "").lower())]
    return unary_union(gs) if gs else None


YERLER = [
    ("Malta (yabancı, ada)", (14.15, 35.78, 14.60, 36.10), "kara", None),
    ("Tuz Gölü (Osmanlı, göl)", (32.9, 38.4, 33.9, 39.3), "gol", "Tuz"),
    ("Van Gölü (Osmanlı, göl)", (42.2, 38.2, 43.8, 39.1), "gol", "Van"),
    ("Baykal (yabancı, göl)", (103.5, 51.3, 110.2, 55.9), "gol", "Baikal"),
    ("Aral (yabancı, tarihî göl)", (58.0, 43.3, 61.8, 46.9), "aral", None),
    ("Marmara kıyısı Gemlik (Osmanlı çekirdek)", (28.8, 40.3, 29.3, 40.5), "kara", None),
]
aral = None
for eg in girdi.oku_goller():
    aral = shape(eg["geometry"]).buffer(0)
for ad, kutu, cins, isim in YERLER:
    if cins == "kara":
        ref = ne_kara(kutu)
    elif cins == "aral":
        ref = aral
    else:
        ref = ne_gol(kutu, isim)
    if ref is None or ref.is_empty:
        print(f"{ad}: referans geometri BULUNAMADI"); continue
    ref_b = ref.boundary
    g01 = ref.simplify(0.01, preserve_topology=True).boundary
    g002 = ref.simplify(0.002, preserve_topology=True).boundary
    n_d, k_d, s_d = halka_istat(dh, kutu)
    n_o, k_o, s_o = halka_istat(oh, kutu)
    kb = box(*kutu)
    dcizgi = unary_union([LineString(h) for h in dh if LineString(h).intersects(kb)]) if n_d else None
    ocizgi = unary_union([LineString(h) for h in oh if LineString(h).intersects(kb)]) if n_o else None
    print(f"\n{ad}  kutu {kutu}")
    print(f"   ham NE köşe {len(ref_b.coords) if ref_b.geom_type=='LineString' else sum(len(x.coords) for x in ref_b.geoms):,} · "
          f"simplify 0.01 Hausdorff {hausdorff_km(g01, ref_b, kutu) or 0:.2f} km · "
          f"simplify 0.002 Hausdorff {hausdorff_km(g002, ref_b, kutu) or 0:.2f} km")
    if n_d:
        print(f"   YABANCI havuz: {n_d} halka · kutuda eşsiz köşe {k_d:,} · medyan segment {s_d:.2f} km · "
              f"ham NE'ye Hausdorff {hausdorff_km(dcizgi.boundary if dcizgi.geom_type.endswith('Polygon') else dcizgi, ref_b, kutu) or 0:.2f} km")
    if n_o:
        print(f"   OSMANLI havuz: {n_o} halka · kutuda eşsiz köşe {k_o:,} · medyan segment {s_o:.2f} km · "
              f"ham NE'ye Hausdorff {hausdorff_km(ocizgi, ref_b, kutu) or 0:.2f} km")
# göl kıyısı köşe bedeli (dosya boyutu tahmininin tabanı)
gs = GOLLER.geoms if GOLLER.geom_type == "MultiPolygon" else [GOLLER]
k_motor = sum(len(p.exterior.coords) + sum(len(r.coords) for r in p.interiors) for p in gs)
print(f"\nGOLLER (motor, simplify 0.01) toplam köşe {k_motor:,} · parça {len(gs)}")

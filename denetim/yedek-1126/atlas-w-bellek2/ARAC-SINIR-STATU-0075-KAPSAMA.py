# -*- coding: utf-8 -*-
"""SINIR-STATU-0075 — bir devletin boyali govdesinin CEVRESININ ne kadari o gun yururlukteki bir hattin (E/C/D) 'yaninda'?
Soru: H-0003 (Isvicre) / H-0004 (Hollanda): D/E kalite hat gövdenin ne kadarını KAPSIYOR?
Yontem: govde cevresi ~5 km'de bir ornek nokta; o noktanin ARA km icinde yururlukte hat varsa 'hatli', yoksa 'hatsiz'.
'hatsiz' cevre = (a) kiyi (b) hattin YOK/eksik oldugu kara sinir. Kiyi/kara ayrimi icin nokta 6 km icinde baska bir govde
ya da 'komsu boyali govde' var mi bakilir: var -> kara komsu, yok -> kiyi/dis.
Girdi: SP/hatlar.json + SP/govde_<gun>.geojson. Kullanim: py denetim/ARAC-SINIR-STATU-0075-KAPSAMA.py"""
import io, json, math, sys, collections
from shapely.geometry import shape, LineString, Point
from shapely.strtree import STRtree
from shapely.ops import unary_union

sys.stdout.reconfigure(encoding="utf-8")
SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\5ff25445-e091-44b4-ab3c-92a0887236ff\scratchpad"
K = json.load(io.open(SP + r"\hatlar.json", encoding="utf-8"))["kayitlar"]
GUN = "1830-02-03"
ARA_KM = 12.0          # hat ile govde kenari arasi izin (NE 1:10m + petek kabaligi)
KOMSU_KM = 6.0
ADIM_KM = 5.0
gj = json.load(io.open(SP + "\\govde_%s.geojson" % GUN, encoding="utf-8"))
g, kim = [], []
for f in gj["features"]:
    geo = shape(f["geometry"])
    if not geo.is_valid:
        geo = geo.buffer(0)
    g.append(geo); kim.append(f["properties"]["id"])
agac = STRtree(g)

aktif = []
for k in K:
    if k["nokta"] < 2:
        continue
    if (k.get("f") or "0") <= GUN < (k.get("t") or "9999"):
        aktif.append((k["id"], k.get("sinif"), LineString(k["hat"])))
print("o gun yururlukteki geometrili hat:", len(aktif))

def km_derece(lat):
    return 111.32, 111.32 * math.cos(math.radians(lat))

def yakin(p, lat):
    kx, ky = km_derece(lat)
    d = 1e9; hid = None
    for i, s, l in aktif:
        dd = l.distance(p)
        # yaklasik km (derece mesafesi; enlem duzeltmesi ort.)
        dk = dd * ((kx + ky) / 2)
        if dk < d:
            d, hid = dk, (i, s)
    return d, hid

def cevre_ornek(geo):
    polys = list(geo.geoms) if geo.geom_type == "MultiPolygon" else [geo]
    for pg in polys:
        for ring in [pg.exterior] + list(pg.interiors):
            L = ring.length * 111.32 * math.cos(math.radians(ring.centroid.y))
            n = max(2, int(L / ADIM_KM))
            for j in range(n):
                yield ring.interpolate(j / n, normalized=True), L / n

for ad, anahtar in (("Isvicre", "isvicre"), ("Hollanda", "hollanda")):
    govde = unary_union([g[i] for i in range(len(g)) if kim[i] == anahtar])
    sayac = collections.Counter(); km = collections.Counter()
    hatbaz = collections.Counter()
    for p, birim in cevre_ornek(govde):
        # komsu boyali baska govde var mi (kara komsu)
        kx, ky = km_derece(p.y)
        r = KOMSU_KM / ((kx + ky) / 2)
        komsu = False
        for i in map(int, agac.query(p.buffer(r))):
            if kim[i] != anahtar and g[i].distance(p) < r:
                komsu = True; break
        d, h = yakin(p, p.y)
        if d <= ARA_KM:
            sinif = "hatli(%s)" % (h[1])
            hatbaz[h[0]] += birim
        elif komsu:
            sinif = "HATSIZ kara komsu"
        else:
            sinif = "hatsiz kiyi/dis (deniz-goldis)"
        km[sinif] += birim; sayac[sinif] += 1
    top = sum(km.values())
    print("=" * 60)
    print("%s (%s) · govde cevresi ~%.0f km" % (ad, GUN, top))
    for s, v in km.most_common():
        print("   %-34s %6.0f km  %%%.0f" % (s, v, 100 * v / top))
    print("   hat bazinda (km, govdeye ~%.0f km icinde):" % ARA_KM)
    for h, v in hatbaz.most_common():
        print("      %-28s %6.0f km" % (h, v))

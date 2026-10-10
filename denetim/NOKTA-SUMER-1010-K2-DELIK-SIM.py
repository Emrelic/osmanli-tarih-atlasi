"""NOKTA-SUMER-1010-K2 §3 — YAKLAŞIK SİMÜLASYON, motor DEĞİL.
Koştur: py denetim/NOKTA-SUMER-1010-K2-DELIK-SIM.py  (YAMASIZ ağaçta; yeni noktalar JSON'dan gelir)

Soru: s:'siz, bit:'i ufuktan (UFUK[0] = 1000) önce olan Sümer noktaları eklenince, motorun
`_kusatilmis` kuralı (uret_petek.py:4921-4990, KUSATMA_ESIK 0.90) bu noktaların peteğini komşuya
DEVREDER mi, yoksa sahipsiz petek haritada BOŞ mu kalır?
Motorla FARK (beyan): düz Voronoi (motor kıyı/nehir/sırt yaslaması YOK) · kara =
veri-kaynak/motor_kara.geojson · bölge 26-38K 38-54D · kıyı tamponu 0.01 · km² kaba (enlem ~31,5).
Ölçüt `_kusatilmis` ile birebir: kıyı-dışı sınırın sahipli+sahnedeki komşu peteklere payı ≥ 0.90.
"""
import json, os, sys
sys.stdout.reconfigure(encoding='utf-8')
import shapely
from shapely.geometry import Point, box, shape, MultiPoint
from shapely.ops import unary_union
HERE = os.path.dirname(os.path.abspath(__file__))
WT = os.path.dirname(HERE)                                   # depo kökü
sys.path.insert(0, os.path.join(WT, 'arac')); os.chdir(WT)
import girdi
Y = girdi.yukle(sessiz=True)
YENI = json.load(open(os.path.join(HERE, 'NOKTA-SUMER-1010-K2-DELIK-GIRDI.json'), encoding='utf-8'))
adlar = {y['ad'] for y in YENI}
assert not any(y['ad'] in adlar for y in Y), 'ağaç YAMALI — yamasız ağaçta koştur'
BOLGE = box(38, 26, 54, 38)
kara = json.load(open(os.path.join(WT, 'veri-kaynak', 'motor_kara.geojson'), encoding='utf-8'))
KARA = unary_union([shape(f['geometry']) for f in kara['features']
                    if shape(f['geometry']).intersects(BOLGE)]).intersection(BOLGE)
KIYI = KARA.boundary.difference(BOLGE.boundary).buffer(0.01)


def sahipli(y, g):
    return any(p['f'] <= g < p['t'] for k in ('d', 'v', 's') for p in (y.get(k) or []))


def var(y, g):
    return not ((y.get('kur') and y['kur'] > g) or (y.get('bit') and y['bit'] <= g))


def kos(noktalar, gunler):
    pts = [(y['lon'], y['lat']) for y in noktalar]
    vor = shapely.voronoi_polygons(MultiPoint(pts), extend_to=BOLGE)
    hucre = [None] * len(noktalar)
    for poly in vor.geoms:
        for i, p in enumerate(pts):
            if hucre[i] is None and poly.contains(Point(p)):
                hucre[i] = poly.intersection(KARA); break
    for g in gunler:
        delik, delik_km2, devir = [], 0.0, []
        for i, y in enumerate(noktalar):
            if not y.get('_yeni'): continue
            if var(y, g) or sahipli(y, g): continue
            c = hucre[i]
            if c is None or c.is_empty: continue
            ic = c.boundary.difference(KIYI)
            sah = [hucre[j] for j, yj in enumerate(noktalar)
                   if j != i and hucre[j] is not None and var(yj, g) and sahipli(yj, g)
                   and hucre[j].intersects(c.buffer(0.02))]
            pay = 0.0
            if ic.length > 1e-9 and sah:
                ort = ic.intersection(unary_union(sah).buffer(0.002))
                pay = min(ort.length / ic.length, 1.0)
            km2 = c.area * 111.32 * 94.9
            if pay >= 0.90:
                devir.append((y['ad'], round(pay, 2)))
            else:
                delik.append((y['ad'], round(pay, 2), round(km2)))
                delik_km2 += km2
        print(f"{g}: devredilen {len(devir)} · BOŞ KALAN {len(delik)} · ~{delik_km2:,.0f} km²")
        for d in sorted(delik, key=lambda t: -t[2]): print('      BOŞ', d)
        for d in devir: print('      devir', d)


bolge_Y = [y for y in Y if 38 <= y['lon'] <= 54 and 26 <= y['lat'] <= 38]
print('bölgedeki atlas noktası', len(bolge_Y), '· yeni', len(YENI))
for y in YENI: y['_yeni'] = True
kos(bolge_Y + YENI, ['1000-06-15', '1300-06-15', '1600-06-15', '1900-06-15'])

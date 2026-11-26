# -*- coding: utf-8 -*-
"""C KAPSAMA POLIGONU -- Ege (Saros Korfezi/Enez) ve Karadeniz (Kiyikoy)
kiyi hattindan GERCEK nokta cikarir (veri-kaynak/ne_10m_land.geojson).
Cikti: denetim/OLCUM-CKAPSAMA-KIYI-0911.json (js icinde de kullanilacak).
"""
import io, json

d = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))

def ring_noktalari(geom):
    """Bir Polygon/MultiPolygon'un DIS halkalarini (lon,lat) listeleri olarak dondurur."""
    t = geom["type"]
    if t == "Polygon":
        yield geom["coordinates"][0]
    elif t == "MultiPolygon":
        for poly in geom["coordinates"]:
            yield poly[0]

# Iki bolgeyi kapsayan kaba kutu icindeki kiyi noktalarini topla.
SAROS = {"lat_min": 40.3, "lat_max": 40.9, "lon_min": 25.9, "lon_max": 26.9}
KARADENIZ = {"lat_min": 41.5, "lat_max": 42.2, "lon_min": 27.5, "lon_max": 28.7}

def icinde(lon, lat, k):
    return k["lat_min"] <= lat <= k["lat_max"] and k["lon_min"] <= lon <= k["lon_max"]

saros_noktalar, kara_noktalar = [], []
for feat in d["features"]:
    for ring in ring_noktalari(feat["geometry"]):
        for lon, lat in ring:
            if icinde(lon, lat, SAROS):
                saros_noktalar.append([round(lon, 4), round(lat, 4)])
            if icinde(lon, lat, KARADENIZ):
                kara_noktalar.append([round(lon, 4), round(lat, 4)])

print("Saros/Enez kutusunda kiyi noktasi:", len(saros_noktalar))
print("Karadeniz/Kiyikoy kutusunda kiyi noktasi:", len(kara_noktalar))

# Cok yogunsa seyrelt (her N. noktayi al) -- poligonun ekranda makul
# sayida kose tasimasi icin.
def seyrelt(noktalar, hedef=25):
    if len(noktalar) <= hedef:
        return noktalar
    adim = max(1, len(noktalar) // hedef)
    return noktalar[::adim]

saros_seyrek = seyrelt(saros_noktalar)
kara_seyrek = seyrelt(kara_noktalar)
print("seyreltilmis Saros:", len(saros_seyrek))
print("seyreltilmis Karadeniz:", len(kara_seyrek))

out = {"saros_kiyisi": saros_seyrek, "karadeniz_kiyisi": kara_seyrek}
io.open("denetim/OLCUM-CKAPSAMA-KIYI-0911.json", "w", encoding="utf-8").write(
    json.dumps(out, ensure_ascii=False, indent=1))
print("yazildi: denetim/OLCUM-CKAPSAMA-KIYI-0911.json")

# -*- coding: utf-8 -*-
"""ETIKET-0073 ek ölçüm — `bos_alanlar.js` HALKA kayıtları ile gerçek
yerleşimlerin MÜKERRER ETİKETİ. Ekran görüntüsünde Dir'iye adı iki kez yazılı
çıktı: biri `.sehir`, biri italik `.bosluk-kutu`. Sınıfın büyüklüğü ölçülüyor.
"""
import sys, os, re, json, math
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi

KOK = os.path.join(os.path.dirname(__file__), "..")
ham = open(os.path.join(KOK, "data", "bos_alanlar.js"), encoding="utf-8").read()
# cins sözlüğünden "halka" gösterimli cinsleri bul
cins_ham = ""
for ad in ("bos_cinsler.js", "bos_alanlar.js"):
    y = os.path.join(KOK, "data", ad)
    if os.path.exists(y):
        cins_ham += open(y, encoding="utf-8").read()
halka_cinsler = set(re.findall(r'"?([A-Za-zçğıöşüÇĞİÖŞÜ_-]+)"?\s*:\s*\{[^{}]*gosterim\s*:\s*"halka"', cins_ham))
print("halka gosterimli cins:", sorted(halka_cinsler) or "(bulunamadi -> tum kayitlar taranacak)")

kayitlar = []
for m in re.finditer(r'\{([^{}]*)\}', ham):
    g = m.group(1)
    ad = re.search(r'ad\s*:\s*"((?:[^"\\]|\\.)*)"', g)
    lat = re.search(r'lat\s*:\s*(-?[\d.]+)', g)
    lon = re.search(r'lon\s*:\s*(-?[\d.]+)', g)
    cins = re.search(r'cins\s*:\s*"([^"]*)"', g)
    if ad and lat and lon:
        kayitlar.append({"ad": ad.group(1).replace('\\"', '"'), "lat": float(lat.group(1)),
                         "lon": float(lon.group(1)), "cins": cins.group(1) if cins else ""})
print("bos_alanlar kaydi:", len(kayitlar))

halkalar = [k for k in kayitlar if (not halka_cinsler) or k["cins"] in halka_cinsler]
print("halka (adli, cizilen) kayit:", len(halkalar))

Y = girdi.yukle(sessiz=True)
mukerrer = []
for h in halkalar:
    for y in Y:
        d = girdi.km(h["lat"], h["lon"], y["lat"], y["lon"])
        if d <= 5.0:
            mukerrer.append({"halka": h["ad"], "cins": h["cins"], "yerlesim": y["ad"],
                             "km": round(d, 2), "ayni_ad": h["ad"].split(" (")[0] == y["ad"].split(" (")[0]})
mukerrer.sort(key=lambda c: c["km"])
ayni = [m for m in mukerrer if m["ayni_ad"]]
print("HALKA <-> YERLESIM 5 km icinde:", len(mukerrer), " ayni adli:", len(ayni))
print("--- ayni adli (gercek mukerrer etiket) ---")
for m in ayni[:40]:
    print("  %6.2f km  %-28s ~ %-28s  cins=%s" % (m["km"], m["halka"], m["yerlesim"], m["cins"]))
if len(ayni) > 40:
    print("  ... +%d" % (len(ayni) - 40))

out = os.path.join(os.path.dirname(__file__), "ETIKET-0073-BOSLUK.json")
with open(out, "w", encoding="utf-8") as f:
    json.dump({"bos_kayit": len(kayitlar), "halka": len(halkalar),
               "yakin_eslesme": len(mukerrer), "ayni_adli": len(ayni),
               "liste": mukerrer}, f, ensure_ascii=False, indent=1)
print("yazildi:", out)

"""data/sehir_tarihce_arkeoloji*.js dosyalarını arac/denetle_yayin.py BEKLEYEN sözlüğüne gerekçeyle yazar (yetim-dosya kapısı).
Idempotent. py denetim/arkeoloji_bekleyen_1020.py"""
import glob, os, re, sys

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
p = os.path.join(KOK, "arac", "denetle_yayin.py")
s = open(p, encoding="utf-8").read()
capa = '        "data/sehir_tarihce_osm.js":'
assert capa in s
yeni = []
for y in sorted(glob.glob(os.path.join(KOK, "data", "sehir_tarihce_arkeoloji*.js"))):
    ad = "data/" + os.path.basename(y)
    if '"%s"' % ad in s:
        continue
    yeni.append('        "%s": "MO arkeoloji katmani yerlesim birikimi (VERI-MO-ARKEO, 20 Ekim 2026); "\n'
                '                                         "kasitli YUKLENMEZ: sehir_tarihce semasi, motor/site okumaz; onkosul AKTARIM (MO-MOTOR) + Emre", ' % ad)
if yeni:
    s = s.replace(capa, "        # ── 20 EKIM 2026 — ARKEOLOJI KATMANI (MO) yerlesim birikimi: sehir_tarihce_osm.js ile AYNI statu ──\n" + "\n".join(yeni) + "\n" + capa, 1)
    open(p, "w", encoding="utf-8", newline="").write(s)
print(len(yeni), "dosya eklendi")

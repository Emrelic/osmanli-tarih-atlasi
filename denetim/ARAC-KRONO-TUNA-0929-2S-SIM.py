# KRONO-TUNA-0929 — SİMÜLASYON: kronoloji_cok_romanya/ukrayna Değişmez 2 evreninde OLSAYDI
# 2s sayıları ne olurdu? `arac/denetle.py`ye DOKUNMAZ; modülü içe aktarır, yalnız bu
# süreçte `olaylari_yukle`yi iki dosyayla genişletip `main()`i koşturur.
# Gerekçe: denetle.py:1039 evreni `olaylar*.js` + `kronoloji_sinir*.js` ile sınırlı —
# `kronoloji_cok_*.js` 2s'e HİÇ girmiyor; yeni kronoloji dosyaları haritayı doğrulasa da ölçülmüyor.
# Kullanım: py denetim/ARAC-KRONO-TUNA-0929-2S-SIM.py   (çıktı denetle.py ile aynı biçim)
import sys, os, re
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle
_eski = denetle.olaylari_yukle
EK = [("kronoloji_cok_romanya.js", "KRONOLOJI_COK_ROMANYA"), ("kronoloji_cok_ukrayna.js", "KRONOLOJI_COK_UKRAYNA")]
def genis():
    o = _eski()
    for dosya, deg in EK:
        ek = denetle.oku_pencere(os.path.join(denetle.DATA, dosya), deg)
        print(f"[SİM] {dosya}: {len(ek)} madde evrene eklendi", file=sys.stderr)
        o.extend(ek)
    return o
denetle.olaylari_yukle = genis
sys.argv = [sys.argv[0]]
denetle.main()

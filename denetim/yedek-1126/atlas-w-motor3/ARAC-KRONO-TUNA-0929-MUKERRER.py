# KRONO-TUNA-0929 — denetle.py'nin KENDİ mükerrer ölçütü (mukerrer_maddeler) ile, iki dosyam
# 2s evrenine girseydi hangi çiftleri doğururdu? denetle.py'ye DOKUNMAZ, yalnız içe aktarır.
# Kullanım: py denetim/ARAC-KRONO-TUNA-0929-MUKERRER.py
import sys, os
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac")); os.chdir(KOK)
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import denetle
O = denetle.olaylari_yukle()
taban = len(denetle.mukerrer_maddeler(O))
benim = []
for dosya, deg in [("kronoloji_cok_romanya.js", "KRONOLOJI_COK_ROMANYA"), ("kronoloji_cok_ukrayna.js", "KRONOLOJI_COK_UKRAYNA")]:
    for m in denetle.oku_pencere(os.path.join(denetle.DATA, dosya), deg):
        m["_benim"] = dosya; benim.append(m)
hepsi = denetle.mukerrer_maddeler(O + benim)
yeni = [c for c in hepsi if c[2].get("_benim") or c[3].get("_benim")]
print(f"taban {taban} · evrene eklenince {len(hepsi)} · benim maddeme dokunan {len(yeni)}")
for yil, oran, a, b, olcut in yeni:
    ic = [x for x in (a, b) if x.get("_benim")]
    ds = [x for x in (a, b) if not x.get("_benim")]
    tip = "İÇ (iki benim)" if len(ic) == 2 else "DIŞ"
    print(f"- {tip} {olcut:10s} {oran:.2f} | {a['t']} {a['b'][:60]}  ⟷  {b['t']} {b['b'][:60]}")

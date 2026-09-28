"""KUNYE-ANADOLU-0081 devam (Balkan statü/künye ailesi) — yalnız okur.
1380-1470 arasında s:sirbistan | s:sirp-despotlugu | s:bosna | s:hersek taşıyan her yerleşimin zinciri
(motor evreni, girdi.yukle) + dosyası. Kullanım: py denetim/KUNYE-ANADOLU-0081-balkan-olc.py
"""
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

KIM = {"sirbistan", "sirp-despotlugu", "bosna", "hersek"}
Y = girdi.yukle(sessiz=True)
sayi = {}
for y in sorted(Y, key=lambda y: (y["lat"] < 43.5, y["lon"])):
    ilgili = [p for p in (y.get("s") or []) if p.get("d") in KIM and p["f"] < "1470" and p["t"] > "1380"]
    if not ilgili:
        continue
    for p in ilgili:
        sayi[p["d"]] = sayi.get(p["d"], 0) + 1
    zin = []
    for k in ("s", "d", "v", "isg"):
        for p in y.get(k) or []:
            if p["f"] < "1480" and p["t"] > "1370":
                zin.append((p["f"], "%s %s→%s %s" % (k, p["f"], p["t"], p.get("d") or p.get("kid") or p.get("k") or p.get("y") or "")))
    print("%-24s %.2f,%.2f  %s" % (y["ad"], y["lat"], y["lon"], y.get("_kaynak") or ""))
    for _, s in sorted(zin):
        print("      " + s)
print("dönem sayısı:", sayi)

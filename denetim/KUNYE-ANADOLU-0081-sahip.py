"""KUNYE-ANADOLU-0081 — bir günde bir kimliğin yerleşimleri, MOTORUN evreninde (girdi.yukle,
GIRDI_DOSYALARI'nın bütün dosyaları). Sahip önceliği suzgec.js sahipAnahtari ile aynı:
d → osmanli · v → tabi:<kid|k> · s → s:<d>.

Kullanım:
  py denetim/KUNYE-ANADOLU-0081-sahip.py <gün> <kimlik> [--yakin lat,lon,km]   kimliğin o günkü yerleşimleri
  py denetim/KUNYE-ANADOLU-0081-sahip.py --ad <ad-parçası>                         bir yerleşimin bütün dönemleri + dosyası
"""
import math
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

Y = girdi.yukle(sessiz=True)


def sahip(y, g):
    for p in y.get("d") or []:
        if p["f"] <= g < p["t"]:
            return "osmanli"
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "tabi:" + (p.get("kid") or p.get("k") or "")
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return "s:" + p["d"]
    return ""


if sys.argv[1] == "--ad":
    q = sys.argv[2].lower()
    for y in Y:
        if q in y["ad"].lower():
            print("%s  %.3f,%.3f  kaynak=%s" % (y["ad"], y["lat"], y["lon"], y.get("_dosya") or y.get("dosya") or "?"))
            for k in ("s", "d", "v", "isg"):
                for p in y.get(k) or []:
                    print("   %s %s → %s  %s" % (k, p.get("f"), p.get("t"),
                                                 {a: b for a, b in p.items() if a not in ("f", "t")}))
    sys.exit(0)

g, kim = sys.argv[1], sys.argv[2]
out = []
for y in Y:
    s = sahip(y, g)
    if s in ("s:" + kim, "tabi:" + kim) or (kim == "osmanli" and s == "osmanli"):
        out.append(y)
print("%s %s → %d yerleşim (motor evreni %d)" % (g, kim, len(out), len(Y)))
for y in sorted(out, key=lambda y: y["lon"]):
    print("   %-34s %.3f,%.3f" % (y["ad"], y["lat"], y["lon"]))

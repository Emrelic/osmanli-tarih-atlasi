import sys
sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi
Y = [y for y in girdi.yukle(sessiz=True) if y.get("lon") is not None]
def pen(y):
    r = []
    for a in ("d", "v", "s"):
        for p in (y.get(a) or []):
            r.append((p.get("f") or "", p.get("t") or "9999", a, p.get("d") or p.get("v") or ""))
    return sorted(r)
n = 0
for y in Y:
    if not (45.5 <= y["lat"] <= 55.5 and 12.0 <= y["lon"] <= 27.0):
        continue
    p = pen(y)
    if not p or y.get("kur"):
        continue
    f, t, a, d = p[0]
    if f == "1281-01-01":
        n += 1
        print("%-26s %-8s %.2f,%.2f %s/%s %s" % (str(y.get("ad"))[:26], y.get("tur"), y["lat"], y["lon"], a, d, y.get("_kaynak")))
print(n)

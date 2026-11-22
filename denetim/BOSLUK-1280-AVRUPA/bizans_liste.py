import sys, collections
sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi
GUN = "1280-01-01"
Y = [y for y in girdi.yukle(sessiz=True) if y.get("lon") is not None]
AV = [y for y in Y if 34 <= y["lat"] <= 72 and -12 <= y["lon"] <= 60]
def pen(y):
    r = []
    for a in ("d", "v", "s"):
        for p in (y.get(a) or []):
            r.append((p.get("f") or "", p.get("t") or "9999", a, p.get("d")))
    return sorted(r)
def sahnede(y):
    return any(f <= GUN < t for f, t, a, d in pen(y)) or bool(y.get("kasitli_bosluk"))
n = 0
for y in AV:
    if sahnede(y): continue
    kur = y.get("kur")
    if kur and kur > GUN: continue
    p = pen(y)
    if not p: continue
    f, t, a, d = p[0]
    if d != "bizans": continue
    n += 1
    print("%s|%s|%.2f|%.2f|kur=%s|%s|%s|%s" % (y.get("id"), y.get("ad"), y["lat"], y["lon"], y.get("kur"), y.get("_kaynak"), [(x[0], x[1], x[2], x[3]) for x in p[:4]], ""))
print(n)

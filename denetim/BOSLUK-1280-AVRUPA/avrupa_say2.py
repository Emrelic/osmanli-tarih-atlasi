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
sahip = collections.Counter()
yok = []
for y in AV:
    if sahnede(y): continue
    kur = y.get("kur")
    if kur and kur > GUN: continue
    p = pen(y)
    if not p:
        yok.append(y); continue
    f, t, a, d = p[0]
    sahip[(d or "(d/v: " + a + ")")] += 1
print("1280'de sahipsiz, kuruluşu 1280 öncesi/yok, ilk pencere sahibi (ilk 40):")
for k, v in sahip.most_common(40):
    print("  %-34s %d" % (k, v))
print("toplam sahip çeşidi:", len(sahip))
print()
print("pencere yok:", len(yok), "· örnek:", [str(y.get("ad"))[:18] + "/" + str(y.get("_kaynak")) for y in yok[:12]])
# devletler.js ömürleri
import re, json
s = open("data/devletler.js", encoding="utf-8").read()
ids = re.findall(r'id:\s*"([^"]+)"\s*,[^}]*?f:\s*"([^"]*)"\s*,\s*t:\s*"([^"]*)"', s)
om = {i: (f, t) for i, f, t in ids}
print("devletler.js ömür okunan:", len(om))
for k, v in sahip.most_common(25):
    print("  %-30s f/t=%s" % (k, om.get(k)))

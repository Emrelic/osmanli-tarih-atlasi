# -*- coding: utf-8 -*-
"""D-RENK-0073 — F: HAT ile BOYA ne kadar ortusuyor? (1923-10-29)
Her hattin uzerinde ~10 km'de bir nokta; noktanin 5 km sag/sol'unda hangi
devletin govdesi boyali? Beklenen: sol=sol_taraf, sag=oteki taraf."""
import io, json, math, collections

from shapely.geometry import shape, LineString, Point
from shapely.strtree import STRtree
from shapely.prepared import prep

SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\0f85f827-a96b-4a7c-bfd6-a06cab079a08\scratchpad"
GUN = "1923-10-29"
ADIM_KM = 10.0
YAN_KM = 5.0

K = json.load(io.open(SP + r"\hatlar.json", encoding="utf-8"))["kayitlar"]
IDH = json.load(io.open(SP + r"\govde1923_idharita.json", encoding="utf-8"))

def hk(t):      # D048: govde "harita:" anahtariyla anahtarli, id ile DEGIL
    return IDH.get(t, t)
gj = json.load(io.open(SP + r"\govde1923.geojson", encoding="utf-8"))
govde, kimlik = [], []
for f in gj["features"]:
    g = shape(f["geometry"])
    if not g.is_valid:
        g = g.buffer(0)
    govde.append(g)
    kimlik.append(f["properties"]["id"])
agac = STRtree(govde)
hazir = [prep(g) for g in govde]
print("govde:", len(govde), "· essiz kimlik:", len(set(kimlik)))

def sahip(x, y):
    p = Point(x, y)
    for i in agac.query(p):
        i = int(i)
        if hazir[i].contains(p):
            return kimlik[i]
    return None

def yur(k, g):
    return (k.get("f") or "0") <= g <= (k.get("t") or "9999")

ac = [k for k in K if yur(k, GUN) and k["nokta"] >= 2]
say = collections.Counter()
per_dev = collections.defaultdict(collections.Counter)
kayma = []
ornekler = []
nokta_toplam = 0

for k in ac:
    tr = [hk(t) for t in (k.get("taraflar") or [])]
    if len(tr) != 2:
        say["taraf!=2"] += 1
        continue
    sol_bek = hk(k["sol_taraf"]) if k.get("sol_taraf") else None
    hat = LineString(k["hat"])
    # ~ADIM_KM'de bir nokta
    uz_km = 0.0
    c = k["hat"]
    for i in range(len(c) - 1):
        (x1, y1), (x2, y2) = c[i], c[i + 1]
        dy = (y2 - y1) * 111.32
        dx = (x2 - x1) * 111.32 * math.cos(math.radians((y1 + y2) / 2))
        uz_km += math.hypot(dx, dy)
    n = max(2, min(200, int(uz_km / ADIM_KM)))
    kayit_say = collections.Counter()
    for j in range(n):
        s = (j + 0.5) / n
        p = hat.interpolate(s, normalized=True)
        q = hat.interpolate(min(1.0, s + 0.002), normalized=True)
        vx, vy = q.x - p.x, q.y - p.y
        L = math.hypot(vx, vy) or 1e-9
        kos = math.cos(math.radians(p.y)) or 1e-6
        # normal (sol = yonun solu)
        nx, ny = -vy / L, vx / L
        dd = YAN_KM / 111.32
        sol = sahip(p.x + nx * dd / kos, p.y + ny * dd)
        sag = sahip(p.x - nx * dd / kos, p.y - ny * dd)
        nokta_toplam += 1
        if sol is None and sag is None:
            hal = "IKI-YAN-BOS"
        elif {sol, sag} == set(tr):
            hal = "DOGRU-CIFT" if (sol_bek is None or sol == sol_bek) else "TERS-CIFT"
        elif (sol in tr) or (sag in tr):
            hal = "TEK-YAN-DOGRU"
        else:
            hal = "UCUNCU-DEVLET"
        say[hal] += 1
        kayit_say[hal] += 1
        per_dev[tr[0]][hal] += 1
        per_dev[tr[1]][hal] += 1
        if hal != "DOGRU-CIFT":
            # renk ile hat arasindaki kayma: iki tarafin govdesine uzaklik toplami
            d = 0.0
            for t in tr:
                ix = [i for i, kk in enumerate(kimlik) if kk == t]
                if not ix:
                    d = None
                    break
                d += min(govde[i].distance(p) for i in ix)
            if d is not None:
                kayma.append(d * 111.32)
    ornekler.append((k["id"], "/".join(tr), kayit_say.most_common(1)[0][0], n))

print()
print("== 1923-10-29 · %d hat · %d ornek nokta ==" % (len(ac), nokta_toplam))
for h, n in say.most_common():
    print("  %-14s %6d  (%%%.1f)" % (h, n, 100.0 * n / max(1, nokta_toplam)))

if kayma:
    kayma.sort()
    print()
    print("== hat ile boya arasindaki KAYMA (yanlis noktalarda, km) ==")
    for et, q in (("medyan", 0.5), ("%75", 0.75), ("%90", 0.90), ("en buyuk", 0.999)):
        print("  %-9s %8.1f km" % (et, kayma[int(q * (len(kayma) - 1))]))
    print("  ortalama %.1f km · n=%d" % (sum(kayma) / len(kayma), len(kayma)))

print()
print("== hat basina baskin hal (ilk 18) ==")
for i, (hid, tr, hal, n) in enumerate(ornekler[:18]):
    print("  %-26s %-34s %-14s n=%d" % (hid, tr, hal, n))

json.dump({"say": dict(say), "nokta": nokta_toplam,
           "kayma_medyan_km": (kayma[len(kayma)//2] if kayma else None)},
          io.open(SP + r"\hat_boya_1923.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

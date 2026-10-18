"""A5 > A7 olan kayitlar: hangi devlet/donem, ne kadar kayip, hangi desen."""
import math, os, sys, collections
import numpy as np
SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BETIK_DIZIN)
import bantyukle
B = bantyukle.Bant()
KMD = 6371.0088 * math.pi / 180
ha = np.zeros(B.nhalka)
for k in range(B.nhalka):
    r = B.halka(k); x = r[:, 0]; y = r[:, 1]
    xs = x * math.cos(math.radians(float(y.mean())))
    ha[k] = 0.5 * abs(float(np.dot(xs[:-1], y[1:]) - np.dot(xs[1:], y[:-1]))) * KMD * KMD


def pa(p):
    hs = B.parca[p]
    return ha[hs[0]] - sum(ha[h] for h in hs[1:])


A = np.array([[sum(pa(p) for p in r["g"]) for r in b["dnm"]] for b in B.bant])
d = B.bant[0]["dnm"]
kayip = A[0] - A[1]
idx = np.where(A[0] > A[1] * 1.002)[0]
print("A5>A7 kayit", len(idx), "· toplam kayip km2 %.0f" % kayip[idx].sum())
by = collections.Counter(d[i]["d"] for i in idx)
print("devlete gore:", by.most_common(12))
print("kayip dagilimi (km2) p50,p90,maks:", [round(float(np.percentile(kayip[idx], q))) for q in (50, 90, 100)])
print("goreli kayip p50,p90,maks:", [round(float(np.percentile((kayip / A[0])[idx], q)), 4) for q in (50, 90, 100)])
for i in sorted(idx, key=lambda i: -kayip[i])[:12]:
    print("  %-22s %s..%s  A5 %9.0f  A7 %9.0f  A10 %9.0f  kayip %8.0f (%.1f%%)  parca sayisi 5/7/10: %d/%d/%d" % (
        d[i]["d"], d[i]["f"], d[i]["t"], A[0][i], A[1][i], A[2][i], kayip[i], 100 * kayip[i] / A[0][i],
        len(B.bant[0]["dnm"][i]["g"]), len(B.bant[1]["dnm"][i]["g"]), len(B.bant[2]["dnm"][i]["g"])))
# desen: gozlem — kayip olan kayitlarin A5 = A10 mu?
print("A10 >= A5 olanlar (kayip 7'de, 10'da geri geliyor):", int((A[2][idx] >= A[0][idx] * 0.998).sum()), "/", len(idx))
k7 = np.where(A[1] > A[2] * 1.002)[0]
print("A7>A10:", [(d[i]["d"], d[i]["f"], round(A[1][i]), round(A[2][i])) for i in k7])

# -*- coding: utf-8 -*-
"""GOSTERIM-0075 / H-0048-2 — iğne `bolgeler.js` (idari bölge sınırı) ya da `donemler.sb` (serbest kenar) kaynaklı mı?
SALT OKUR. py denetim/ARAC-GOSTERIM-0075-IGNE3.py <KOK> <gun> lon0 lat0 lon1 lat1"""
import io, os, sys, json, math
KOK = sys.argv[1]; GUN = sys.argv[2]; lon0, lat0, lon1, lat1 = (float(x) for x in sys.argv[3:7])
BURASI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def satir_json(yol, degisken):
    for satir in io.open(yol, encoding="utf-8"):
        if satir.startswith("window." + degisken + " "):
            i = satir.index("=") + 1
            return json.loads(satir[i:].rstrip().rstrip(";\n").rstrip(";"))
    raise KeyError(degisken)
def km(a, b):
    la = math.radians((a[1] + b[1]) / 2)
    return math.hypot((b[0] - a[0]) * 111.32 * math.cos(la), (b[1] - a[1]) * 110.57)
def kutuda(r): return any(lon0 <= p[0] <= lon1 and lat0 <= p[1] <= lat1 for p in r)
def uzun_kenar(r):
    return max((km(r[i], r[i + 1]) for i in range(len(r) - 1)), default=0)
def gecerli(f, t, g): return (not f or f <= g) and (not t or g < t)

B = satir_json(os.path.join(KOK, "data", "bolgeler.js"), "BOLGELER")
print("bölge kaydı:", len(B))
aktif = [b for b in B if gecerli(b.get("f"), b.get("t"), GUN)]
print("o gün aktif bölge:", len(aktif))
for b in aktif:
    for mp in b["g"]:
        for r in mp:
            if kutuda(r):
                print("  bölge %-28s halka %5d köşe · en uzun kenar %6.1f km · ilk köşe %s" % (b.get("ad", "?")[:28], len(r), uzun_kenar(r), r[0]))
# serbest kenar hatları (dönem kaydındaki sb indeksleri → window.SERBEST)
D = satir_json(os.path.join(KOK, "data", "donemler.js"), "DONEMLER")
S = satir_json(os.path.join(KOK, "data", "donemler.js"), "SERBEST")
for d in D:
    if gecerli(d.get("f"), d.get("t"), GUN):
        sb = d.get("sb") or []
        print("dönem", d["f"], d["t"], "· sb hat sayısı:", len(sb))
        n = 0
        for i in sb:
            h = S[i]
            if kutuda(h):
                n += 1; print("  serbest hat #%d · %d köşe · en uzun kenar %.1f km · uçlar %s → %s" % (i, len(h), uzun_kenar(h), h[0], h[-1]))
        print("kutuda serbest hat:", n)
        break

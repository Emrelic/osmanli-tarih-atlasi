# İkinci tur: alt hipotez evreni (f tam 1281 / f<1281) + tur1 ⊕ tur2 birleşik oran (1281 halkası)
import sys, io, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
E = json.load(open(sys.argv[1], encoding="utf-8")); U0, U1 = E["veri_ufku"]
tam = once = 0
for k in E["kayit"]:
    L = [p for p in k["s"] if p.get("f") and p["f"] < U1 and (p.get("t") or U1) > U0 and max(p["f"], U0) == U0]
    if not L: continue
    if any(p["f"] < U0 for p in L): once += 1
    else: tam += 1
print("1281 halkalı kayıt:", tam + once, "· f TAM 1281-01-01:", tam, "· f < 1281 olan:", once)
def w(k, n, z=1.96):
    p = k / n; d = 1 + z * z / n; c = (p + z * z / (2 * n)) / d
    h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return p, c - h, c + h
for ad, k, n in (("tur1 (1281 halkası)", 7, 10), ("tur2", 9, 31), ("birleşik", 16, 41)):
    p, l, h = w(k, n)
    print(f"{ad:20} {k}/{n} %{100*p:.1f} (%{100*l:.1f}–%{100*h:.1f}) ⇒ 1419: {1419*p:.0f} ({1419*l:.0f}–{1419*h:.0f})")

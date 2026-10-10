# KAYNAKSIZ-ORNEKLEM-1010 — hükümlerden oran · Wilson %95 · 1841'e genelleme · CSV
# py k_analiz.py orneklem.json hukum.py hukum2.py cikti.csv
import sys, io, json, math, csv
from collections import Counter, defaultdict
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
O = json.load(open(sys.argv[1], encoding="utf-8"))
ns = {}
exec(open(sys.argv[2], encoding="utf-8").read(), ns)
exec(open(sys.argv[3], encoding="utf-8").read(), ns)
H = {h[0]: h for h in ns["H"] + ns["H2"]}
S = O["secim"]; N = len(S); EV = O["evren"]
assert sorted(H) == list(range(1, N + 1)), "eksik/fazla hüküm: %s" % (set(range(1, N + 1)) ^ set(H))

def wilson(k, n, z=1.96):
    if n == 0: return (float("nan"),) * 3
    p = k / n; d = 1 + z * z / n
    c = (p + z * z / (2 * n)) / d; h = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d
    return p, c - h, c + h

GUC_KANITLI = {"DOGRUDAN", "DOLAYLI", "ARAMA"}
GUC_SIKI = {"DOGRUDAN", "DOLAYLI"}
def hukum(i, gorus):
    h = H[i]; v, g = h[1], h[2]
    if v == "OLCULEMEDI": return "OLCULEMEDI"
    if gorus == "genis": return v
    if gorus == "kanitli": return v if g in GUC_KANITLI else "OLCULEMEDI"
    if gorus == "siki": return v if g in GUC_SIKI else "OLCULEMEDI"

out = []
for gorus in ("genis", "kanitli", "siki"):
    c = Counter(hukum(i, gorus) for i in range(1, N + 1))
    y, d, o = c["YANLIS"], c["DOGRU"], c["OLCULEMEDI"]
    p, lo, hi = wilson(y, y + d)
    # ölçülemeyenler için iki uç: hepsi doğru / hepsi yanlış
    p_min, p_max = y / N, (y + o) / N
    out.append((gorus, y, d, o, p, lo, hi, p_min, p_max))
    print(f"[{gorus:8}] YANLIŞ {y} · DOĞRU {d} · ÖLÇÜLEMEDİ {o} | ölçülende YANLIŞ %{100*p:.1f} "
          f"(Wilson %95: %{100*lo:.1f}–%{100*hi:.1f}) ⇒ 1841'e: {EV*p:.0f} ({EV*lo:.0f}–{EV*hi:.0f}) "
          f"| ölçülemeyen uçları: %{100*p_min:.1f}–%{100*p_max:.1f} ⇒ {EV*p_min:.0f}–{EV*p_max:.0f}")

print("\nBÖLGE (geniş görüş):")
bt = defaultdict(Counter)
for i, s in enumerate(S, 1): bt[s["bolge"]][hukum(i, "genis")] += 1
for b in sorted(bt, key=lambda b: -sum(bt[b].values())):
    c = bt[b]; print(f"  {b:24} n={sum(c.values()):2} · Y {c['YANLIS']} · D {c['DOGRU']} · Ö {c['OLCULEMEDI']}  (evren {O['evren_bolge'][b]})")

print("\nBAŞLANGIÇ 1281-01-01 mi (geniş görüş):")
for etiket, f in (("1281-01-01'de başlayan", lambda s: s["iddia_f"] == "1281-01-01"),
                  ("daha geç başlayan", lambda s: s["iddia_f"] != "1281-01-01")):
    idx = [i for i, s in enumerate(S, 1) if f(s)]
    c = Counter(hukum(i, "genis") for i in idx)
    p, lo, hi = wilson(c["YANLIS"], c["YANLIS"] + c["DOGRU"])
    print(f"  {etiket:24} n={len(idx):2} · Y {c['YANLIS']} · D {c['DOGRU']} · Ö {c['OLCULEMEDI']} · "
          f"YANLIŞ %{100*p:.0f} (%{100*lo:.0f}–%{100*hi:.0f})")
    # sıkı görüşte de
    c2 = Counter(hukum(i, "siki") for i in idx)
    p2, lo2, hi2 = wilson(c2["YANLIS"], c2["YANLIS"] + c2["DOGRU"])
    print(f"  {'':24}   sıkı: Y {c2['YANLIS']} · D {c2['DOGRU']} · Ö {c2['OLCULEMEDI']} · %{100*p2:.0f} (%{100*lo2:.0f}–%{100*hi2:.0f})")

print("\nGÜÇ dağılımı:", dict(Counter(H[i][2] for i in H)))
zin = [i for i in H if "ZİNCİRDE BAŞKA YANLIŞ" in H[i][6] or "ÇELİŞİYOR" in H[i][6]]
print("Zincirin BAŞKA halkasında yanlış/çelişki görülen kayıt:", len(zin), zin)

with open(sys.argv[4], "w", encoding="utf-8-sig", newline="") as fh:
    w = csv.writer(fh)
    w.writerow(["sira", "kayit", "bolge", "iddia_sahip", "iddia_f", "iddia_t", "hukum", "guc",
                "hukum_kanitli", "hukum_siki", "kaynak", "http", "kaynak_cumlesi", "not"])
    for i, s in enumerate(S, 1):
        h = H[i]
        w.writerow([i, s["anahtar"], s["bolge"], s["iddia_d"], s["iddia_f"], s["iddia_t"], h[1], h[2],
                    hukum(i, "kanitli"), hukum(i, "siki"), h[3], h[4], h[5], h[6]])
json.dump(out, open(sys.argv[4] + ".ozet.json", "w", encoding="utf-8"), ensure_ascii=False)

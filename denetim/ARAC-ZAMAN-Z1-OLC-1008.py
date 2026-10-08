# ZAMAN-Z1-1008 — ufuk açılınca (veri uzatılmadan) evrene ne girer? Yalnız OKUR.
# Kullanım: py denetim/ARAC-ZAMAN-Z1-OLC-1008.py   (ağaç kökünden)
import sys, os, collections
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "arac"))
import girdi

ESKI = ("1281-01-01", "1923-10-29")
YENI = ("1000-01-01", "1945-09-02")
ESKI_NOB, YENI_NOB = "1923-11-01", "1945-09-05"

Y = girdi.yukle(sessiz=True)
print("yerleşim", len(Y))

def pad(t):  # üç haneli yıl güvenliği (D205)
    if not t: return t
    p = t.split("-")
    if t.startswith("-"): return t
    return p[0].zfill(4) + t[len(p[0]):]

kotu = [(y["ad"], k, p.get("f"), p.get("t")) for y in Y for k in ("s", "d", "v", "isg")
        for p in (y.get(k) or []) for x in (p.get("f"), p.get("t"))
        if x and (len(x.split("-")[0]) != 4 or x.startswith("-"))]
print("4 haneli olmayan tarih:", len(kotu), kotu[:5])

# ① Osmanlı kesit listesi (uret_petek tarihler: d+v)
def kesit(tset, bas, nob):
    ts = sorted(t for t in tset if bas <= t <= nob)
    if not ts or ts[0] != bas: ts.insert(0, bas)
    if ts[-1] != nob: ts.append(nob)
    return ts
dv = set()
for y in Y:
    for dn in (y.get("d") or []) + (y.get("v") or []):
        dv.add(dn["f"]); dv.add(dn["t"])
k0, k1 = kesit(dv, ESKI[0], ESKI_NOB), kesit(dv, YENI[0], YENI_NOB)
print("① Osmanlı kesit:", len(k0), "→", len(k1), "yeni günler:", sorted(set(k1) - set(k0))[:20])

# ② Yabancı (s) kesit günleri — devlet başına toplam (koşu maliyeti vekili)
dev = collections.defaultdict(set)
for y in Y:
    for sp in (y.get("s") or []):
        dev[sp["d"]].add(sp["f"]); dev[sp["d"]].add(sp["t"])
    # motor her devlete o noktaların d/v tarihlerini de ekler
for y in Y:
    ds = {sp["d"] for sp in (y.get("s") or [])}
    for dn in (y.get("d") or []) + (y.get("v") or []):
        for d in ds: dev[d].add(dn["f"]); dev[d].add(dn["t"])
t0 = t1 = 0; on0 = on1 = 0; once_dev = set(); sonra_dev = set()
for d, ts in dev.items():
    a = [t for t in ts if ESKI[0] <= t <= ESKI_NOB]
    b = [t for t in ts if YENI[0] <= t <= YENI_NOB]
    if a: t0 += len(kesit(set(ts), ESKI[0], ESKI_NOB)) - 1
    if b: t1 += len(kesit(set(ts), YENI[0], YENI_NOB)) - 1
    if any(YENI[0] <= t < ESKI[0] for t in ts): once_dev.add(d)
    if any(ESKI[1] < t <= YENI_NOB for t in ts): sonra_dev.add(d)
print(f"② yabancı devlet×kesit aralığı: {t0} → {t1}  (+{t1-t0}, %{100*(t1-t0)/max(t0,1):.1f})")
print(f"   1281 öncesi tarihi olan devlet: {len(once_dev)} · 1923 sonrası tarihi olan: {len(sonra_dev)}")

# ③ yeni penceredeki GERÇEK tarih (sınır işareti olmayan) — kategori bazında
yeni_once = collections.Counter(); yeni_sonra = collections.Counter()
ornek_sonra = []
for y in Y:
    for k in ("s", "d", "v", "isg"):
        for p in (y.get(k) or []):
            for x in (p.get("f"), p.get("t")):
                if not x: continue
                if YENI[0] < x < ESKI[0]: yeni_once[k] += 1
                if ESKI[1] < x < YENI[1]:
                    yeni_sonra[k] += 1
                    if len(ornek_sonra) < 12: ornek_sonra.append((y["ad"], k, p.get("d"), p.get("f"), p.get("t")))
print("③ (1000,1281) içi tarih:", dict(yeni_once), " (1923-10-29,1945-09-02) içi:", dict(yeni_sonra))
print("   örnek sonra:", ornek_sonra)
uc = collections.Counter()
for y in Y:
    for k in ("s", "d", "v", "isg"):
        for p in (y.get(k) or []):
            if p.get("t") == ESKI[1]: uc["t=1923-10-29 " + k] += 1
            if p.get("f") == ESKI[0]: uc["f=1281-01-01 " + k] += 1
            if p.get("t") and p["t"] > YENI[1]: uc["t>1945-09-02 " + k] += 1
            if p.get("t") == YENI[1]: uc["t=1945-09-02 " + k] += 1
print("   uç sayımları:", dict(uc))

# ④ Değişmez 1 — kesitler genişletilirse
def ir(ps, g): return bool(ps) and any(p["f"] <= g < p["t"] for p in ps)
def sahipsiz_gun(g):
    n = set()
    for t in Y:
        if t.get("kur") and t["kur"] > g: continue
        if t.get("bit") and t["bit"] <= g: continue
        if ir(t.get("d"), g) or ir(t.get("s"), g) or ir(t.get("v"), g): continue
        n.add(t["ad"])
    return n
bugun = set()
for yil in [1285, 1290, 1295] + list(range(1300, 1921, 20)):
    bugun |= sahipsiz_gun(f"{yil}-06-15")
once = set()
for yil in range(1000, 1281, 20):
    once |= sahipsiz_gun(f"{yil}-06-15")
sonra = set()
for yil in (1925, 1930, 1935, 1940, 1945):
    s = sahipsiz_gun(f"{yil}-06-15") if yil < 1945 else sahipsiz_gun("1945-09-01")
    print(f"   {yil}: sahipsiz {len(s)}")
    sonra |= s
print(f"④ Değişmez 1: bugün {len(bugun)} · +1000-1280 kesitleri {len(bugun|once)} · +1925-1945 {len(bugun|sonra)} · ikisi {len(bugun|once|sonra)}")
print(f"   1000-06-15 sahipsiz {len(sahipsiz_gun('1000-06-15'))} · 1200-06-15 {len(sahipsiz_gun('1200-06-15'))} · 1280-06-15 {len(sahipsiz_gun('1280-06-15'))}")
sahipli1200 = [y for y in Y if ir(y.get("s"), "1200-06-15") or ir(y.get("d"), "1200-06-15")]
print("   1200'de sahipli nokta:", len(sahipli1200), collections.Counter(p["d"] for y in sahipli1200 for p in y["s"] if p["f"] <= "1200-06-15" < p["t"]).most_common(12))
kur1281 = sum(1 for y in Y if y.get("kur") == "1281-01-01")
print("   kur:1281-01-01 kenetli:", kur1281)

# ⑤ göller
G = girdi.oku_goller(sessiz=True)
print("⑤ göl (eski UFUK ile alınan):", len(G))

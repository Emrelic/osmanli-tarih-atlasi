# SUMER-2000-OLCEK-1009 — çağ çağ yerleşim · künye · madde ve bölge yoğunluğu. Yalnız OKUR.
# Kullanım (ağaç kökünden): py denetim/ARAC-SUMER-2000-OLC-1009.py <sumer_js.json>
#   sumer_js.json = node denetim/ARAC-SUMER-2000-TOPLA-1009.js . <yol>
import io, json, math, os, re, sys
from collections import Counter, defaultdict
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
import girdi
from shapely.geometry import shape, box
from shapely.ops import transform, unary_union

# Çağlar: yarı açık [a, b) — dizgi ANAHTAR (işaret, 5 haneli yıl, ay, gün) ile sıralanır
def anahtar(t):
    """Tarih dizgisi → (yıl:int, ay, gün) — işaretli, dolgusuz/dolgulu fark etmez. Bozuksa None."""
    m = re.match(r"^\s*(-?)(\d{1,5})(?:-(\d{1,2}))?(?:-(\d{1,2}))?", str(t or ""))
    if not m:
        return None
    y = int(m.group(2)) * (-1 if m.group(1) else 1)
    return (y, int(m.group(3) or 1), int(m.group(4) or 1))

CAGLAR = [
    ("MÖ 3000-1200", (-3000, 1, 1), (-1200, 1, 1)),
    ("MÖ 1200-MS 476", (-1200, 1, 1), (476, 1, 1)),
    ("476-1000", (476, 1, 1), (1000, 1, 1)),
    ("1000-1281", (1000, 1, 1), (1281, 1, 1)),
    ("1281-1923", (1281, 1, 1), (1923, 10, 30)),       # 1923-10-29 dahil
    ("1923-2000", (1923, 10, 30), (2001, 1, 1)),       # 2000 dahil
]
def cag(k):
    if k is None:
        return "BOZUK"
    if k < CAGLAR[0][1]:
        return "< MÖ 3000"
    for ad, a, b in CAGLAR:
        if a <= k < b:
            return ad
    return "> 2000"

J = json.load(io.open(sys.argv[1], encoding="utf-8"))
print(f"evren: {J['betik']} betik · eval hatası {len(J['hata'])} · madde {len(J['madde'])} · künye {len(J['kunye'])}")

# ---- ham biçim tuzakları
def bicim(t):
    t = str(t)
    if t.startswith("-"): return "negatif"
    m = re.match(r"^(\d+)-", t)
    if not m: return "yil-yalniz" if re.match(r"^\d+$", t) else "diger"
    n = len(m.group(1))
    return {4: "4hane", 3: "3hane-dolgusuz", 2: "2hane", 1: "1hane"}.get(n, "%dhane" % n) if not (n == 4 and t[0] == "0") else "4hane-dolgulu(0YYY)"
mb = Counter(bicim(t) for t, _ in J["madde"])
kb = Counter(bicim(x) for _, f, t in J["kunye"] for x in (f, t) if x)
print("madde tarih biçimi:", dict(mb))
print("künye f/t biçimi:", dict(kb))

# ---- MADDE çağ çağ
mc = Counter(cag(anahtar(t)) for t, _ in J["madde"])
print("\nMADDE (t):", {c: mc.get(c, 0) for c in ["< MÖ 3000"] + [x[0] for x in CAGLAR] + ["> 2000", "BOZUK"]})
eski = sorted((anahtar(t), t, k) for t, k in J["madde"] if anahtar(t) and anahtar(t) < (1000, 1, 1))
print("  en eski 5 madde:", [(t, k) for _, t, k in eski[:5]])
print("  476 öncesi madde:", sum(1 for e in eski if e[0] < (476, 1, 1)),
      Counter(k for e, t, k in eski if e < (476, 1, 1)).most_common(6))

# ---- KÜNYE: o çağda YAŞAYAN (f < b ve t > a; t yoksa açık)
def yasar(f, t, a, b):
    kf, kt = anahtar(f) if f else (-99999, 1, 1), anahtar(t) if t else (99999, 1, 1)
    return kf is not None and kt is not None and kf < b and kt > a
kc = {ad: sum(1 for _, f, t in J["kunye"] if yasar(f, t, a, b)) for ad, a, b in CAGLAR}
print("\nKÜNYE (o çağda yaşayan):", kc)
kf_min = sorted((anahtar(f), i, f) for i, f, _ in J["kunye"] if f and anahtar(f))[:8]
print("  en eski 8 künye f:", [(i, f) for _, i, f in kf_min])
print("  künye f çağı:", dict(Counter(cag(anahtar(f)) for _, f, _ in J["kunye"] if f)))

# ---- YERLEŞİM
Y = girdi.yukle(sessiz=True)
print(f"\nYERLEŞİM evreni: {len(Y)} (girdi.GIRDI_DOSYALARI {len(girdi.GIRDI_DOSYALARI)} dosya)")
yb = Counter()
for y in Y:
    for kat in ("s", "d", "v", "isg", "kd"):
        for p in y.get(kat) or []:
            for x in (p.get("f"), p.get("t")):
                if x: yb[bicim(x)] += 1
    for x in (y.get("kur"), y.get("bit")):
        if x: yb[bicim(x)] += 1
print("yerleşim tarih biçimi:", dict(yb))

def sahipli(y, a, b):
    for kat in ("s", "d", "v"):
        for p in y.get(kat) or []:
            kf, kt = anahtar(p.get("f")), anahtar(p.get("t"))
            if kf and kt and kf < b and kt > a:
                return True
    return False

BOLGE = [   # (ad, lon0, lat0, lon1, lat1) — İLK eşleşen kazanır
    ("Mezopotamya", 38, 29, 49, 38), ("Levant", 33, 29, 38, 37.5), ("Mısır", 24, 21, 37, 32),
    ("Anadolu", 26, 36, 45, 42.5), ("Ege-Balkan", 19, 34, 30, 46), ("İtalya", 6, 36, 19, 47.5),
    ("İran", 44, 25, 63, 40), ("Hint", 66, 6, 92, 36), ("Çin", 98, 18, 125, 45),
    ("Avrupa (kalan)", -11, 35, 40, 72), ("Dünya (kalan)", -180, -60, 180, 85),
]
def bolge(y):
    for ad, a, b, c, d in BOLGE:
        if a <= y["lon"] <= c and b <= y["lat"] <= d:
            return ad
    return "Dünya (kalan)"

# kara alanı (eşit alanlı silindirik izdüşüm; km²)
R = 6371.0088
def esit(x, y, z=None):
    return (R * math.radians(x), R * math.sin(math.radians(y)))
land = unary_union([shape(f["geometry"]).buffer(0) for f in
                    json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))["features"]])
kalan = land.intersection(box(-180, -60, 180, 85))
alan = {}
for ad, a, b, c, d in BOLGE:
    parca = kalan.intersection(box(a, b, c, d))
    kalan = kalan.difference(box(a, b, c, d))
    alan[ad] = transform(esit, parca).area
print("kara alanı (bin km²):", {k: round(v / 1000) for k, v in alan.items()}, "toplam", round(sum(alan.values()) / 1000))

print("\nYERLEŞİM — o çağda SAHİPLİ nokta (s/d/v çağla örtüşüyor) · /1000 km² kara")
tablo = {}
for ad, a, b in CAGLAR:
    say = Counter(bolge(y) for y in Y if sahipli(y, a, b))
    kur = sum(1 for y in Y if anahtar(y.get("kur")) and a <= anahtar(y["kur"]) < b)
    tablo[ad] = say
    top = sum(say.values())
    print(f"  {ad:<16} sahipli {top:>5} · kur: bu çağda {kur:>4} · yoğunluk dünya {1000 * top / sum(alan.values()):.4f}")
print("\nBÖLGE × ÇAĞ — sahipli nokta (yoğunluk /1000 km²)")
print("  " + "bölge".ljust(16) + "".join(c[0].rjust(20) for c in CAGLAR) + "   kara bin km²")
for ad, *_ in BOLGE:
    satir = "".join(("%d (%.3f)" % (tablo[c][ad], 1000 * tablo[c][ad] / alan[ad])).rjust(20) for c, _, _ in CAGLAR)
    print("  " + ad.ljust(16) + satir + "   " + str(round(alan[ad] / 1000)))

# -*- coding: utf-8 -*-
"""A-AMERIKA-0078 ölçüm aleti — SALT OKUR.

Soru: 1923-09-01'de Amerikalarda (Latin Amerika kutusu) kara hücrelerinin kaçı hiçbir
devletin gövdesine düşmüyor, ve SEBEBİ ne?

İki bakış, aynı ızgara (ADIM derece):
  EKRAN  = devletler_harita.js gövdeleri (son koşunun çıktısı; A-AMERIKA-0078 scratchpad dökümü)
  PETEK  = girdi.yukle() noktaları, o gün var olan en yakın nokta ve onun sahibi (motorun
           mantığı; motor_kara ufku ile) — bir sonraki koşunun göstereceği A katmanı tahmini
Hücre sınıfları (PETEK):
  OK       en yakın canlı nokta sahipli
  B-KAYIT  en yakın canlı nokta o gün SAHİPSİZ (s/d/v penceresi yok)
  C-UFUK   motor_kara dışında (motor çizmiyor; en yakın nokta çok uzak)
Bölge kırılımı: kaba kutular (Guyanalar, Orta Amerika, llanos, Amazon, And, Atacama, …).
Pozitif kontrol (B9): bilinen noktalar (Buenos Aires, Manaus, Mexico City) OK ve sahipli olmalı.

Kullanım: py denetim/A-AMERIKA-0078-olc.py <govde.geojson> [ADIM] [--ek <yerlesimler_a78_amerika.js>] [--hucre <çıktı.json>]
  --ek: henüz GIRDI_DOSYALARI'na bağlanmamış dosyayı da PETEK'e katar (SONRA ölçümü)
"""
import sys, io, os, json, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from shapely.geometry import shape, Point
from shapely.strtree import STRtree
from shapely.prepared import prep

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

GUN = "1923-09-01"
args = sys.argv[1:]
GOVDE = args[0]
ADIM = float(args[1]) if len(args) > 1 and not args[1].startswith("--") else 0.5
EK = args[args.index("--ek") + 1] if "--ek" in args else None
HUCRE = args[args.index("--hucre") + 1] if "--hucre" in args else None
# --ufuk KM: motor_kara (son koşunun ÇIKTISI) yerine mesafe modeli — en yakın canlı nokta > KM ise C-UFUK.
#   Yeni noktanın etkisini koşusuz ölçmek için (motor_kara yeni noktayı bilmez). Motor tavanı 200 km (uret_petek.py A1).
UFUK = float(args[args.index("--ufuk") + 1]) if "--ufuk" in args else None
KUTU = (-118.0, -56.0, -34.0, 33.0)   # Latin Amerika (Meksika kuzeyi dahil)

def pad(t):
    if not t: return ""
    p = str(t).split("-")
    return "%04d-%02d-%02d" % (int(p[0]), int(p[1]) if len(p) > 1 else 1, int(p[2]) if len(p) > 2 else 1)

def var_mi(y, g):
    kur, bit = pad(y.get("kur") or ""), pad(y.get("bit") or "")
    if kur and kur > g: return False
    if bit and bit <= g: return False
    return True

def sahibi(y, g):
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            f, t = pad(p.get("f", "")), pad(p.get("t", ""))
            if f and f > g: continue
            if t and t <= g: continue
            return p.get("d") or p.get("kid") or "OSMANLI"
    return None

Y = [y for y in girdi.yukle(sessiz=True) if y.get("lat") is not None]
if EK:
    import re, subprocess
    js = io.open(EK, encoding="utf-8").read()
    deg = re.search(r"window\.(YERLESIMLER\w*)\s*=", js).group(1)
    ek = girdi._cevir(js, deg)
    adlar = {y["ad"] for y in Y}
    cak = [y["ad"] for y in ek if y["ad"] in adlar]
    if cak: raise SystemExit("AD ÇAKIŞMASI: " + ", ".join(cak))
    Y += ek
    print(f"--ek {os.path.basename(EK)}: {len(ek)} nokta katıldı ({deg})")
canli = [y for y in Y if var_mi(y, GUN)
         and KUTU[0] - 15 <= y["lon"] <= KUTU[2] + 15 and KUTU[1] - 10 <= y["lat"] <= KUTU[3] + 10]
print(f"gün {GUN} · canlı nokta (genişletilmiş kutu) {len(canli)} · ızgara {ADIM}°")
NP = STRtree([Point(y["lon"], y["lat"]) for y in canli])

def en_yakin(x, yy):
    # STRtree.nearest düzlemsel; enlem düzeltmesi için en yakın 12 aday arasında km ile seç
    p = Point(x, yy)
    i = NP.nearest(p)
    d0 = p.distance(Point(canli[int(i)]["lon"], canli[int(i)]["lat"]))
    aday = NP.query(p.buffer(d0 * 1.6 + 0.01))
    return min((canli[int(j)] for j in aday), key=lambda y: girdi.km(yy, x, y["lat"], y["lon"]))

def _yukle(yol):
    out = []
    for f in json.load(io.open(os.path.join(KOK, yol), encoding="utf-8"))["features"]:
        g = shape(f["geometry"])
        if g.bounds[2] < KUTU[0] or g.bounds[0] > KUTU[2] or g.bounds[3] < KUTU[1] or g.bounds[1] > KUTU[3]: continue
        out.append(g if g.is_valid else g.buffer(0))
    return out
KARA = _yukle("veri-kaynak/ne_10m_land.geojson"); GOL = _yukle("veri-kaynak/ne_10m_lakes.geojson")
ka, go = STRtree(KARA), STRtree(GOL)
def kara(x, y):
    p = Point(x, y)
    if any(GOL[int(i)].contains(p) for i in go.query(p)): return False
    return any(KARA[int(i)].contains(p) for i in ka.query(p))
mk = json.load(io.open(os.path.join(KOK, "veri-kaynak", "motor_kara.geojson"), encoding="utf-8"))
MOTOR = prep(shape(mk["features"][0]["geometry"]))

gj = json.load(io.open(GOVDE, encoding="utf-8"))
govde, kim = [], []
for f in gj["features"]:
    g = shape(f["geometry"]); govde.append(g if g.is_valid else g.buffer(0)); kim.append(f["properties"]["id"])
ga = STRtree(govde); gh = [prep(g) for g in govde]
def ekran(x, y):
    p = Point(x, y)
    for i in ga.query(p):
        if gh[int(i)].contains(p): return kim[int(i)]
    return None

BOLGE = [  # (ad, lon0, lat0, lon1, lat1) — ilk eşleşen
    ("Orta Amerika", -92.5, 7.0, -77.0, 18.5),
    ("Guyanalar", -61.5, 1.0, -51.0, 9.0),
    ("llanos/Orinoko", -74.0, 3.0, -61.5, 11.0),
    ("Atacama/Puna", -71.5, -28.0, -65.0, -17.0),
    ("And kuzey (Kol-Ekv-Peru)", -81.5, -17.0, -72.0, 3.0),
    ("Amazon", -74.0, -17.0, -50.0, 3.0),
    ("Chaco", -65.0, -28.0, -56.0, -17.0),
    ("Patagonya", -76.0, -56.0, -62.0, -39.0),
    ("Meksika", -118.0, 14.0, -86.0, 33.0),
    ("Karayip adaları", -86.0, 10.0, -59.0, 24.0),
    ("Güney Amerika öteki", -82.0, -56.0, -34.0, 13.0),
]
def bolge(x, y):
    for ad, a, b, c, d in BOLGE:
        if a <= x <= c and b <= y <= d: return ad
    return "öteki"

# B9 pozitif kontrol
SINA = [("Buenos Aires", -58.4, -34.6), ("Manaus", -60.0, -3.1), ("Mexico City", -99.1, 19.4)]
for ad, x, y in SINA:
    e = en_yakin(x, y); s = sahibi(e, GUN); o = ekran(x, y)
    print(f"  SINAV {ad}: kara={kara(x,y)} motor={MOTOR.contains(Point(x,y))} petek={e['ad']}→{s} ekran={o}")
    if not (kara(x, y) and s and o): raise SystemExit("B9 TUTMADI — ölçüm geçersiz")

say = collections.defaultdict(collections.Counter)
hucreler = []
x = KUTU[0] + ADIM / 2
while x < KUTU[2]:
    y = KUTU[1] + ADIM / 2
    while y < KUTU[3]:
        if kara(x, y):
            b = bolge(x, y)
            e = en_yakin(x, y); dk = girdi.km(y, x, e["lat"], e["lon"]); s = sahibi(e, GUN)
            m = (dk <= UFUK) if UFUK else MOTOR.contains(Point(x, y)); o = ekran(x, y)
            p = "C-UFUK" if not m else ("B-KAYIT" if s is None else "OK")
            c = say[b]; c["n"] += 1; c["PETEK_" + p] += 1; c["EKRAN_" + ("DOLU" if o else "BOS")] += 1
            if o and s and o != s: c["FARK"] += 1
            hucreler.append({"x": round(x, 3), "y": round(y, 3), "b": b, "ekran": o, "petek": p,
                             "sahip": s, "nokta": e["ad"], "km": round(dk)})
        y += ADIM
    x += ADIM

T = collections.Counter()
for b in say: T.update(say[b])
print(f"\n{'bölge':28} {'kara':>5} {'EKRAN boş':>10} {'PETEK OK':>9} {'B-KAYIT':>8} {'C-UFUK':>7}")
for b, _, _, _, _ in BOLGE + [("öteki", 0, 0, 0, 0)]:
    c = say.get(b)
    if not c: continue
    n = c["n"]
    print(f"{b:28} {n:5} {c['EKRAN_BOS']:5} %{100*c['EKRAN_BOS']/n:4.0f} {c['PETEK_OK']:4} %{100*c['PETEK_OK']/n:3.0f} "
          f"{c['PETEK_B-KAYIT']:8} {c['PETEK_C-UFUK']:7}")
n = T["n"]
print(f"{'TOPLAM':28} {n:5} {T['EKRAN_BOS']:5} %{100*T['EKRAN_BOS']/n:4.0f} {T['PETEK_OK']:4} %{100*T['PETEK_OK']/n:3.0f} "
      f"{T['PETEK_B-KAYIT']:8} {T['PETEK_C-UFUK']:7}")

# Sebep: B-KAYIT hücrelerinin sorumlu noktaları, C-UFUK hücrelerinin en yakın nokta mesafe dağılımı
bk = collections.Counter(h["nokta"] for h in hucreler if h["petek"] == "B-KAYIT")
print("\nB-KAYIT sorumlu noktalar (en çok 25):")
for ad, v in bk.most_common(25): print(f"  {v:4}  {ad}")
cu = [h["km"] for h in hucreler if h["petek"] == "C-UFUK"]
if cu:
    cu.sort(); print(f"\nC-UFUK en yakın nokta km: min {cu[0]} · medyan {cu[len(cu)//2]} · max {cu[-1]}")
ok_km = sorted(h["km"] for h in hucreler if h["petek"] == "OK")
print(f"OK en yakın nokta km: medyan {ok_km[len(ok_km)//2]} · %90 {ok_km[int(len(ok_km)*.9)]} · max {ok_km[-1]}")
if HUCRE:
    json.dump(hucreler, io.open(HUCRE, "w", encoding="utf-8"), ensure_ascii=False)
    print("hücreler →", HUCRE)

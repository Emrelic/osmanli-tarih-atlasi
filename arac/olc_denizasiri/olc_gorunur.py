# -*- coding: utf-8 -*-
"""ADIM 1c — GORUNUR KUSUR OLCUMU  (Emre'nin K4 olcutuyle)

K4 (h17#3b, Emre'nin kendi cumlesi):
  "TUM BUNUN GIBI DENIZ OTESI TASMALAR ARASTIRILARAK BULUNMALI VE GEREGI
   YAPILMALI, EGER GERCEK BIR DURUM DEGIL ISE COZUMLENMELI."

Son sart belirleyici: taşma HISTORIK OLARAK GERCEKSE KALIR. O yuzden olcut
"su kac km" degil:

  GORUNUR KUSUR = denizasiri parcanin sahibi, o TARIHTE, parcayi cevreleyen
                  BUTUN kara komsularindan FARKLI  ->  ekranda yanlis renkte
                  bir ada gorunur (Emre: "Gelibolu'da kirmizi bir bolge var")

Tromso fiyortunu gecer (iki yaka da Norvec = ayni sahip, gorunmez);
Kilitbahir'i gecmez (1345'te Asya Osmanli, Avrupa Bizans = farkli renk).

Salt okuma. Kosu gerektirmez.
"""
import json, os, sys, math, pickle

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
SCR = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\a5479cb4-16ee-4def-832f-307c172e7614\scratchpad"
sys.path.insert(0, os.path.join(KOK, "arac"))

from shapely.geometry import Point, Polygon, MultiPolygon, LineString, box
from shapely.ops import unary_union
from shapely.strtree import STRtree
import shapely
import girdi

R = 6371.0088
KESIT = ["1300-06-15", "1345-06-15", "1400-06-15", "1453-06-15", "1500-06-15",
         "1600-06-15", "1700-06-15", "1800-06-15", "1900-06-15"]

DENIZ = [  # okunabilirlik icin — kaba kutular, yalniz AD vermek amacli
    ("Çanakkale Boğazı", 25.9, 39.9, 26.8, 40.5),
    ("Marmara Denizi",   26.6, 40.2, 30.0, 41.1),
    ("İstanbul Boğazı",  28.9, 40.9, 29.3, 41.3),
    ("Ege Denizi",       22.5, 35.0, 28.5, 41.0),
    ("İyon Denizi",      17.0, 35.5, 22.5, 40.5),
    ("Adriyatik",        12.0, 39.5, 20.0, 46.0),
    ("Akdeniz",         -6.0, 30.0, 36.5, 41.5),
    ("Karadeniz",        27.0, 40.5, 42.0, 47.5),
    ("Hazar Denizi",     46.0, 36.0, 55.0, 47.5),
    ("Kızıldeniz",       32.0, 12.0, 44.0, 30.0),
    ("Basra Körfezi",    47.0, 23.0, 57.0, 31.0),
    ("Umman Denizi",     55.0,  8.0, 78.0, 26.0),
    ("Bengal Körfezi",   78.0,  5.0, 95.0, 23.0),
    ("Güney Çin Denizi",100.0, -8.0, 122.0, 24.0),
    ("Malaka/Sumatra",   94.0, -8.0, 112.0,  8.0),
    ("Doğu Çin Denizi", 118.0, 24.0, 132.0, 41.0),
    ("Baltık Denizi",    10.0, 53.5, 30.0, 66.0),
    ("Kuzey Denizi",     -4.0, 51.0, 10.0, 61.0),
    ("Norveç Denizi",     3.0, 61.0, 25.0, 71.5),
    ("Barents Denizi",   20.0, 68.0, 60.0, 82.0),
    ("Kara Denizi (Sib.)",60.0, 68.0, 105.0, 82.0),
    ("Manş / Biskay",   -10.0, 43.0,  2.5, 51.5),
    ("Atlantik",        -25.0, 20.0, -6.0, 62.0),
]


def deniz_adi(x, y):
    for ad, x0, y0, x1, y1 in DENIZ:
        if x0 <= x <= x1 and y0 <= y <= y1:
            return ad
    return "?"


def km2(g):
    if g is None or g.is_empty:
        return 0.0
    ps = g.geoms if isinstance(g, MultiPolygon) else [g]
    T = 0.0
    for p in ps:
        if not isinstance(p, Polygon):
            continue
        for ring, sg in [(p.exterior, 1)] + [(h, -1) for h in p.interiors]:
            cs = list(ring.coords); s = 0.0
            for i in range(len(cs) - 1):
                lo1, la1 = math.radians(cs[i][0]), math.radians(cs[i][1])
                lo2, la2 = math.radians(cs[i + 1][0]), math.radians(cs[i + 1][1])
                s += (lo2 - lo1) * (2 + math.sin(la1) + math.sin(la2))
            T += sg * abs(s * R * R / 2)
    return T


YERLER = girdi.yukle(sessiz=True)
with open(os.path.join(SCR, "kara_maskesi.pkl"), "rb") as f:
    KARA = pickle.load(f)
shapely.prepare(KARA)


def sahip(y, g):
    """CLAUDE.md Degismez 1 mantigi: d -> OSMANLI, v -> tabi, s -> devlet."""
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tâbi"
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p.get("d") or "?"
    return None


# --- adaylar: IHLAL + BOGAZ kovalari ---
D = json.load(open(os.path.join(SCR, "denizasiri_v3.json"), encoding="utf-8"))
aday = [(r, "IHLAL") for r in D["IHLAL"]] + [(r, "BOGAZ") for r in D["BOGAZ"]]
aday = [(r, k) for r, k in aday if r["km2"] >= 50.0]
print("aday parca (>=50 km²): %d" % len(aday), flush=True)

# --- petek parcalarini yeniden yukle, aday parcalari eslestir ---
parcalar = {}          # i -> [poly, ...]
with open(os.path.join(SCR, "petek.ndjson"), encoding="utf-8") as f:
    for satir in f:
        o = json.loads(satir)
        pl = []
        for ring in o["parts"]:
            try:
                p = Polygon(ring[0], ring[1:]) if len(ring) > 1 else Polygon(ring[0])
            except Exception:
                continue
            if not p.is_valid:
                p = p.buffer(0)
            if not p.is_empty:
                pl.append(p)
        if pl:
            parcalar[o["i"]] = pl

# butun parcalar tek agac (komsu bulmak icin)
tum, sahibi = [], []
for i, pl in parcalar.items():
    for p in pl:
        tum.append(p); sahibi.append(i)
agac = STRtree(tum)
print("petek parcasi: %d" % len(tum), flush=True)

pt = [Point(y["lon"], y["lat"]) for y in YERLER]
SONUC = []
for r, kova in aday:
    i = r["i"]
    tp = pt[i]
    # bu kaydin parcasini alan+tohumsuzluk ile bul
    hedefp = None
    for p in parcalar.get(i, []):
        if p.intersects(tp):
            continue
        if abs(km2(p) - r["km2"]) < max(1.0, 0.02 * r["km2"]):
            hedefp = p; break
    if hedefp is None:
        continue
    # kara komsulari: parcaya degen/1 km icindeki baska petekler
    hal = hedefp.buffer(0.02)          # ~2 km
    kom = set()
    for j in [int(x) for x in agac.query(hal)]:
        s = sahibi[j]
        if s == i:
            continue
        if tum[j].intersects(hal):
            kom.add(s)
    mp = hedefp.representative_point()
    hat = LineString([(tp.x, tp.y), (mp.x, mp.y)])
    dsu = hat.difference(KARA)
    orta = dsu.interpolate(0.5, normalized=True) if not dsu.is_empty else mp
    dad = deniz_adi(orta.x, orta.y)

    gorunur = []
    for g in KESIT:
        so = sahip(YERLER[i], g)
        if so is None:
            continue                      # o tarihte yerlesim yok/sahipsiz
        ko = {sahip(YERLER[j], g) for j in kom}
        ko.discard(None)
        if not ko:
            continue                      # komsusuz: karsilastirilamaz
        ayni = (so in ko) or (so in ("OSMANLI", "tâbi") and ko & {"OSMANLI", "tâbi"})
        if not ayni:
            gorunur.append((g[:4], so, sorted(ko)[:3]))
    SONUC.append({
        "ad": YERLER[i]["ad"], "i": i, "km2": r["km2"], "kova": kova,
        "su_km": r["su_km"], "hat_km": r["hat_km"], "deniz": dad,
        "komsu": len(kom), "gorunur": gorunur,
    })

SONUC.sort(key=lambda s: -s["km2"])
gor = [s for s in SONUC if s["gorunur"]]
tem = [s for s in SONUC if not s["gorunur"]]

print()
print("=" * 92)
print("K4 OLCUMU — 'GERCEK BIR DURUM DEGIL ISE COZUMLENMELI'")
print("=" * 92)
print("  aday (>=50 km², IHLAL+BOGAZ) : %d parca · %.0f km²"
      % (len(SONUC), sum(s["km2"] for s in SONUC)))
print("  🔴 GORUNUR KUSUR              : %d parca · %.0f km²   (sahibi komsularindan FARKLI)"
      .replace("🔴", ">>") % (len(gor), sum(s["km2"] for s in gor)))
print("  🟢 GERCEK DURUM / GORUNMEZ    : %d parca · %.0f km²   (ayni sahip -> ekranda kusur yok)"
      .replace("🟢", "  ") % (len(tem), sum(s["km2"] for s in tem)))

print()
print("=" * 92)
print("EMRE'YE GIDECEK LISTE — DENIZ OTESI TASMALAR, GORUNUR KUSUR OLANLAR")
print("=" * 92)
print("  %-24s %9s  %-20s %7s  %s" % ("yerlesim", "km²", "hangi deniz", "su km", "hangi tarihlerde gorunur"))
for s in gor[:25]:
    tar = ", ".join("%s:%s" % (t, o if len(o) < 12 else o[:11]) for t, o, k in s["gorunur"][:5])
    print("  %-24s %9.0f  %-20s %7.1f  %s" % (s["ad"][:24], s["km2"], s["deniz"][:20], s["su_km"], tar))

print()
print("=" * 92)
print("GORUNMEZ (gercek durum) — EN BUYUK 12 · bunlara DOKUNULMAMALI")
print("=" * 92)
for s in tem[:12]:
    print("  %-24s %9.0f  %-20s  su %5.1f km  komsu %d"
          % (s["ad"][:24], s["km2"], s["deniz"][:20], s["su_km"], s["komsu"]))

json.dump(SONUC, open(os.path.join(SCR, "gorunur_kusur.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print()
print("ayrinti: scratchpad/gorunur_kusur.json")

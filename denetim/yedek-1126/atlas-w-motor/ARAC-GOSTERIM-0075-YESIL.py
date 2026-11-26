# -*- coding: utf-8 -*-
"""GOSTERIM-0075 / H-0017 · H-0022 — "boş yeşil arazi" NE? Sahipsiz mi, Rusya mı, başka mı?

İKİ ÖLÇÜM:
 ① KAYIT: kutudaki gerçek kara hücrelerini (ne_10m_land, 0,02°) o günkü gövdelerle kesiştir →
    hücre başına KİM boyuyor (birden çok ise hepsi), kaç hücre HİÇBİR gövdede değil (SAHİPSİZ).
 ② PİKSEL: görselin yeşil kümesinin ortalama rengi ↔ her adayın (kimlik rengi × 0,44 opaklık,
    bej kabartma #f2f1c1 üzerinde) beklenen rengi; en yakın aday ve ΔE (CIE76, arac/renk_olc.lab).

SALT OKUR. Girdi HEAD kopyası.  py denetim/ARAC-GOSTERIM-0075-YESIL.py <KOK>
Çıktı: denetim/GOSTERIM-0075-YESIL.json
"""
import io, os, sys, json, time, math
import numpy as np
from collections import Counter
from shapely.geometry import Polygon, shape, box
from shapely.ops import unary_union
from shapely import make_valid, contains_xy

KOK = sys.argv[1]
BURASI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BURASI, "arac"))
import girdi
CIKTI = os.path.join(BURASI, "denetim", "GOSTERIM-0075-YESIL.json")
GORSEL = r"C:\claudemre\kutu\giden\parti-emrelic-0075"

KUTULAR = {   # (gün, lon0, lat0, lon1, lat1) — görsel altyazılarından
    "H-0017-1 Eflak-Boğdan": ("1834-01-01", 20.08, 42.67, 30.01, 48.29),
    "H-0017-2 Yergöğü": ("1834-01-01", 24.87, 43.36, 28.35, 45.48),
    "H-0022-1 İbrail": ("1836-01-01", 27.81, 44.61, 28.37, 45.52),
    "H-0022-2 Yergöğü": ("1836-01-01", 24.77, 43.54, 26.54, 44.36),
}

def satir_json(yol, degisken):
    for satir in io.open(yol, encoding="utf-8"):
        if satir.startswith("window." + degisken + " "):
            i = satir.index("=") + 1
            return json.loads(satir[i:].rstrip().rstrip(";\n").rstrip(";"))
    raise KeyError(degisken)

t0 = time.time()
DON = os.path.join(KOK, "data", "donemler.js"); DEV = os.path.join(KOK, "data", "devletler_harita.js")
PARCALAR = satir_json(DON, "PARCALAR"); PARCA_HALKA = satir_json(DON, "PARCA_HALKA"); DONEMLER = satir_json(DON, "DONEMLER")
D_PARCALAR = satir_json(DEV, "DEVLET_PARCALAR"); D_PARCA_HALKA = satir_json(DEV, "DEVLET_PARCA_HALKA")
DEVLET_HARITA = satir_json(DEV, "DEVLET_HARITA")
YERLER = girdi.yukle(sessiz=True)
print("ayrıştırma %.1f sn" % (time.time() - t0), flush=True)

def poligon(halka, havuz):
    dis = havuz[halka[0]]
    if len(dis) < 4: return None
    ic = [havuz[i] for i in halka[1:] if len(havuz[i]) >= 4]
    try:
        p = Polygon(dis, ic)
        if not p.is_valid: p = make_valid(p)
        return p if not p.is_empty else None
    except Exception:
        return None
def birlestir(ps):
    try: return unary_union(ps)
    except Exception: return unary_union([make_valid(p) for p in ps])
def gecerli(f, t, g): return (not f or f <= g) and (not t or g < t)

def govdeler(gun, kt):
    """kutuyla KESİŞEN gövdeler (kutuya kırpılmış)."""
    out = {}
    for d in DONEMLER:
        if not gecerli(d.get("f"), d.get("t"), gun): continue
        for alan, kim in (("o", "OSM-dogrudan"), ("v", "OSM-tabi")):
            idx = []
            for e in d.get(alan) or []:
                if isinstance(e, int): idx.append(e)
                elif isinstance(e, dict): idx.extend(e.get("g") or [])
            ps = [poligon(PARCA_HALKA[i], PARCALAR) for i in idx if i < len(PARCA_HALKA)]
            ps = [p for p in ps if p is not None and p.intersects(kt)]
            if ps: out[kim] = birlestir(ps)
        break
    for dv in DEVLET_HARITA:
        for d in dv.get("dnm") or []:
            if not gecerli(d.get("f"), d.get("t"), gun): continue
            ps = [poligon(D_PARCA_HALKA[i], D_PARCALAR) for i in (d.get("g") or []) if i < len(D_PARCA_HALKA)]
            ps = [p for p in ps if p is not None and p.intersects(kt)]
            if ps: out[dv["id"]] = birlestir(ps)
            break
    return out

def nokta_sahibi(y, g):
    if y.get("kur") and y["kur"] > g: return "YOK"
    if y.get("bit") and y["bit"] <= g: return "YOK"
    for x in y["d"]:
        if x["f"] <= g < x["t"]: return "OSM-dogrudan"
    for x in y["v"]:
        if x["f"] <= g < x["t"]: return "OSM-tabi"
    for x in y["s"]:
        if x["f"] <= g < x["t"]: return x["d"]
    return "SAHIPSIZ"

KARA = json.load(io.open(os.path.join(BURASI, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
KARA_G = unary_union([make_valid(shape(f["geometry"])) for f in KARA["features"]])
print("kara hazır %.1f sn" % (time.time() - t0), flush=True)

SON = {}
for etiket, (gun, lon0, lat0, lon1, lat1) in KUTULAR.items():
    kt = box(lon0, lat0, lon1, lat1)
    B = govdeler(gun, kt)
    kara = KARA_G.intersection(kt)
    adim = 0.02
    xs = np.arange(lon0 + adim / 2, lon1, adim); ys = np.arange(lat0 + adim / 2, lat1, adim)
    gx, gy = np.meshgrid(xs, ys); gx = gx.ravel(); gy = gy.ravel()
    kara_mi = contains_xy(kara, gx, gy)
    gx, gy = gx[kara_mi], gy[kara_mi]
    sayim = Counter(); bos_hucre = []
    tek = Counter()
    for x, y in zip(gx, gy):
        kim = tuple(sorted(k for k, g in B.items() if g.contains(__import__("shapely").geometry.Point(x, y))))
        sayim[kim] += 1
        if not kim: bos_hucre.append((round(float(x), 3), round(float(y), 3)))
    # 'eflak' gövdesindeki hücrelerin en yakın noktası kim?
    sahip = [nokta_sahibi(y, gun) for y in YERLER]
    var = [i for i, s in enumerate(sahip) if s != "YOK"]
    lat = np.array([YERLER[i]["lat"] for i in var]); lon = np.array([YERLER[i]["lon"] for i in var])
    en_yakin_eflak = Counter()
    if "eflak" in B:
        ef = [(x, y) for x, y in zip(gx, gy) if B["eflak"].contains(__import__("shapely").geometry.Point(x, y))]
        for x, y in ef:
            d2 = ((lon - x) * math.cos(math.radians(y))) ** 2 + (lat - y) ** 2
            j = int(d2.argmin()); en_yakin_eflak[YERLER[var[j]]["ad"] + " [" + sahip[var[j]] + "]"] += 1
    SON[etiket] = {"gun": gun, "kara_hucre_0.02": int(len(gx)),
                   "sahipsiz_hucre": int(sayim.get((), 0)),
                   "hucre_sahibi": {" + ".join(k) if k else "SAHİPSİZ": v for k, v in sayim.most_common()},
                   "eflak_govdesindeki_hucrelerin_en_yakin_noktasi": dict(en_yakin_eflak.most_common(6)),
                   "sahipsiz_ornek": bos_hucre[:10]}
    print("\n== %s %s · kara hücresi %d · SAHİPSİZ %d" % (etiket, gun, len(gx), sayim.get((), 0)), flush=True)
    for k, v in sayim.most_common(8): print("    %-40s %6d" % (" + ".join(k) or "SAHİPSİZ", v), flush=True)
    if en_yakin_eflak: print("    eflak gövdesi ↔ en yakın nokta:", dict(en_yakin_eflak.most_common(4)), flush=True)

# ② piksel
from PIL import Image
def piksel(dosya, kutu):
    im = Image.open(os.path.join(GORSEL, dosya)).convert("RGB")
    c = Counter()
    for x in range(kutu[0], kutu[2]):
        for y in range(kutu[1], kutu[3]):
            p = im.getpixel((x, y)); c[(p[0] // 4 * 4, p[1] // 4 * 4, p[2] // 4 * 4)] += 1
    top = c.most_common(12); n = sum(v for _, v in top)
    return tuple(round(sum(k[i] * v for k, v in top) / n) + 2 for i in range(3))
def lab(rgb):
    def f(t): return t ** (1 / 3) if t > 0.008856 else 7.787 * t + 16 / 116
    r, g, b = [(v / 255) for v in rgb]
    r, g, b = [((v + 0.055) / 1.055) ** 2.4 if v > 0.04045 else v / 12.92 for v in (r, g, b)]
    X = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047; Y = (r * 0.2126 + g * 0.7152 + b * 0.0722); Z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883
    return (116 * f(Y) - 16, 500 * (f(X) - f(Y)), 200 * (f(Y) - f(Z)))
def de(a, b):
    la, lb = lab(a), lab(b); return math.sqrt(sum((x - y) ** 2 for x, y in zip(la, lb)))
def mix(hexrenk, a, zemin=(242, 241, 193)):
    rgb = tuple(int(hexrenk[i:i + 2], 16) for i in (1, 3, 5))
    return tuple(round(rgb[i] * a + zemin[i] * (1 - a)) for i in range(3))
ADAY = {"eflak": "#4db34d", "rusya": "#4f7d4f", "bogdan": "#24905a"}   # arac/renkler.py BOYALAR
OLCUM = {}
for dosya, kutu in (("H-0022-2.png", (200, 90, 340, 230)), ("H-0022-1.png", (120, 260, 200, 330)), ("H-0017-2.png", (60, 300, 140, 380))):
    ort = piksel(dosya, kutu)
    OLCUM[dosya] = {"olculen_rgb": ort, "adaylar": {k: {"beklenen_rgb_0.44": mix(v, 0.44), "dE76": round(de(ort, mix(v, 0.44)), 1)} for k, v in ADAY.items()}}
    print("\n%s ölçülen %s  →  " % (dosya, ort) + " · ".join("%s ΔE %.1f" % (k, v["dE76"]) for k, v in OLCUM[dosya]["adaylar"].items()), flush=True)
SON["_piksel"] = OLCUM
io.open(CIKTI, "w", encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("\nyazıldı:", CIKTI, "· %.1f sn" % (time.time() - t0))

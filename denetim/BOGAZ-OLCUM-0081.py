# -*- coding: utf-8 -*-
"""BOGAZ-OLCUM-0081 — dar su hatlarinda motorun kara izgarasi ve petek boyamasi.

SALT OKUR: C:/atlas-kosu16 (kosu 16 onbellegi + ciktisi). Hicbir dosyaya yazmaz
(yalniz denetim/BOGAZ-OLCUM-0081.json).

Olcer:
  A. Izgara (_kvkara, 0,05 deg, motorun AYNI formulu: hucre merkezi KARA icinde mi)
     - her bogaz penceresinde: hucre sayisi kara/deniz, bogazi ATLAYAN 8-komsu adim
       (iki kara hucresi, merkezden merkeze dogru SUDAN geciyor)
  B. Kuresel sinif: bogazi atlayan butun adimlar, kume kume, dolanma mesafesi ile
  C. Petek (kosu 16 petek_govde.js): tohumun karsi yakasinda kalan pay (km2),
     200 km2 esiginin altinda mi (izgaraya hic SORULMAZ)
  D. Tiflis peteginin kuzey ucu ve Kafkas sirtini asip asmadigi (DEM profili)
"""
import sys, os, json, math, pickle, sqlite3, re, heapq, time
import numpy as np
import shapely
from shapely.geometry import box, Point, LineString, Polygon, MultiPolygon, shape
from shapely.ops import unary_union

KOSU = "C:/atlas-kosu16"
sys.path.insert(0, KOSU + "/arac")
import girdi  # kosu 16'nin kendi kopyasi

T0 = time.time()
def log(*a):
    print(f"[{time.time()-T0:6.0f}s]", *a, flush=True)

# ---------- KARA (kosu 16 onbellegi, k1 katmani, goller cikarilmis hali) ----
b = sqlite3.connect(f"file:{KOSU}/_motor_onbellek/motor_onbellek.sqlite?mode=ro", uri=True)
KARA = GOLLER = None
for (blob,) in b.execute("select deger from kayit where katman='k1' order by zaman desc"):
    v = pickle.loads(blob)
    # k1'de goller kaydi (GOLLER, KARA, n, baraj_listesi): baraj LISTE olmali —
    # ayni katmanda 4'lu baska bir kayit daha var (491 parcali, KARA DEGIL).
    if isinstance(v, tuple) and len(v) == 4 and isinstance(v[3], list):
        GOLLER, KARA = v[0], v[1]
        break
assert KARA is not None, "k1 goller kaydi bulunamadi"
shapely.prepare(KARA)
log("KARA onbellekten", KARA.geom_type, f"{len(KARA.geoms) if hasattr(KARA,'geoms') else 1} parca")

X0, Y0, ADIM = -180.0, -60.0, 0.05
NX, NY = 7200, 2900
KVDY = 111.32 * ADIM  # motorun _KVDY'si: kontrol asagida

def hucre(lon, lat):
    return int((lon - X0) / ADIM), int((lat - Y0) / ADIM)
def merkez(i, j):
    return X0 + (i + 0.5) * ADIM, Y0 + (j + 0.5) * ADIM

# ---------- tam izgara (motorla ayni) ----------
xs = X0 + (np.arange(NX) + 0.5) * ADIM
kara = np.zeros((NY, NX), dtype=np.uint8)
for j in range(NY):
    kara[j] = shapely.contains_xy(KARA, xs, np.full(NX, Y0 + (j + 0.5) * ADIM))
log(f"izgara kara hucre {int(kara.sum()):,} (kosu16.log: 6,095,287)")

# ---------- B. kuresel tarama: SUDAN gecen 8-komsu adimlar ----------
# Aday: iki uc da kara. Yalniz KIYI hucresinden cikan adimlar sinanir (hucre
# kutusu KARA sinirina degiyorsa kiyi). Sinir rasterlanir (all_touched).
from rasterio import features as rfe
from rasterio.transform import from_origin
tr = from_origin(X0, Y0 + NY * ADIM, ADIM, ADIM)
kiyi = rfe.rasterize([(KARA.boundary, 1)], out_shape=(NY, NX), transform=tr,
                     all_touched=True, dtype="uint8")
kiyi = np.flipud(kiyi)  # satir 0 = GUNEY (motorun yonu)
log(f"kiyi hucresi {int(kiyi.sum()):,}")

YONLER = ((1, 0), (0, 1), (1, 1), (1, -1))
ORNEK = np.arange(1, 12) / 12.0   # 11 ornek, ~0,46 km aralik (41 K'da)
atlayan = []   # (i,j,di,dj)
for di, dj in YONLER:
    A = kara.astype(bool) & (kiyi.astype(bool))
    # hedef
    jj, ii = np.nonzero(A)
    a, bb = ii + di, jj + dj
    ok = (a >= 0) & (a < NX) & (bb >= 0) & (bb < NY)
    ii, jj, a, bb = ii[ok], jj[ok], a[ok], bb[ok]
    ok = kara[bb, a].astype(bool)
    ii, jj, a, bb = ii[ok], jj[ok], a[ok], bb[ok]
    # kaynak kiyi DEGILSE ama hedef kiyiysa da sinanmali: ters yonu ayrica ekle
    jj2, ii2 = np.nonzero(kara.astype(bool) & ~kiyi.astype(bool))
    a2, b2 = ii2 + di, jj2 + dj
    ok2 = (a2 >= 0) & (a2 < NX) & (b2 >= 0) & (b2 < NY)
    ii2, jj2, a2, b2 = ii2[ok2], jj2[ok2], a2[ok2], b2[ok2]
    ok2 = kara[b2, a2].astype(bool) & kiyi[b2, a2].astype(bool)
    ii = np.concatenate([ii, ii2[ok2]]); jj = np.concatenate([jj, jj2[ok2]])
    x1 = X0 + (ii + 0.5) * ADIM; y1 = Y0 + (jj + 0.5) * ADIM
    su = np.zeros(len(ii), dtype=bool)
    for t in ORNEK:
        su |= ~shapely.contains_xy(KARA, x1 + t * di * ADIM, y1 + t * dj * ADIM)
    for i_, j_ in zip(ii[su], jj[su]):
        atlayan.append((int(i_), int(j_), di, dj))
    log(f"yon {di},{dj}: sinanan {len(ii):,} · SUDAN gecen {int(su.sum()):,}")
log(f"SUDAN gecen adim toplam {len(atlayan):,}")

YASAK = set()
for i, j, di, dj in atlayan:
    YASAK.add((i, j, i + di, j + dj)); YASAK.add((i + di, j + dj, i, j))

def adim_km(j, di, dj):
    dx = KVDY * math.cos(math.radians(Y0 + (j + 0.5) * ADIM))
    return math.hypot(dx * di, KVDY * dj)

def dolanma(i0, j0, i1, j1, tavan_km=400.0):
    """YASAK adimlar olmadan (i0,j0)->(i1,j1) izgara mesafesi; tavan ustu = inf."""
    uz = {(i0, j0): 0.0}; q = [(0.0, i0, j0)]
    Y8 = ((1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1))
    while q:
        d, i, j = heapq.heappop(q)
        if (i, j) == (i1, j1): return d
        if d > tavan_km: return math.inf
        if d > uz.get((i, j), math.inf): continue
        for di, dj in Y8:
            a, c = i + di, j + dj
            if not (0 <= a < NX and 0 <= c < NY) or not kara[c, a]: continue
            if (i, j, a, c) in YASAK: continue
            nd = d + adim_km(j, di, dj)
            if nd < uz.get((a, c), math.inf):
                uz[(a, c)] = nd; heapq.heappush(q, (nd, a, c))
    return math.inf

# kumeleme: adim orta noktalari, 2 hucre komsulukla birlesen kumeler
orta = {}
for k, (i, j, di, dj) in enumerate(atlayan):
    orta.setdefault((i, j), []).append(k)
ebeveyn = list(range(len(atlayan)))
def bul(x):
    while ebeveyn[x] != x:
        ebeveyn[x] = ebeveyn[ebeveyn[x]]; x = ebeveyn[x]
    return x
for (i, j), ks in orta.items():
    for a in range(-2, 3):
        for c in range(-2, 3):
            for k2 in orta.get((i + a, j + c), []):
                for k1 in ks:
                    r1, r2 = bul(k1), bul(k2)
                    if r1 != r2: ebeveyn[r1] = r2
kume = {}
for k in range(len(atlayan)):
    kume.setdefault(bul(k), []).append(k)
log(f"kume {len(kume):,}")

def gol_mu(x, y):
    return GOLLER is not None and GOLLER.contains(Point(x, y))

kumeler = []
for r, ks in kume.items():
    # temsilci: en uzun dolanmayi veren adim — once her kumede en cok 6 adim dene
    en = None
    for k in ks[:6]:
        i, j, di, dj = atlayan[k]
        dz = adim_km(j, di, dj)
        dl = dolanma(i, j, i + di, j + dj)
        if en is None or dl > en[1]:
            en = (k, dl, dz)
    k, dl, dz = en
    i, j, di, dj = atlayan[k]
    x, y = merkez(i + di / 2, j + dj / 2)
    kumeler.append({"lon": round(x, 3), "lat": round(y, 3), "adim": len(ks),
                    "dogrudan_km": round(dz, 1),
                    "dolanma_km": (None if math.isinf(dl) else round(dl, 1)),
                    "gol": bool(gol_mu(x, y))})
log("dolanma olculdu")

# ---------- A. adli bogazlar ----------
BOGAZLAR = [  # ad, lon, lat, yari-pencere (deg), bilinen en dar genislik (km, genel bilgi)
    ("İstanbul Boğazı", 29.06, 41.12, 0.25, 0.7),
    ("Çanakkale Boğazı", 26.45, 40.20, 0.40, 1.2),
    ("Kerç Boğazı", 36.55, 45.30, 0.35, 4.5),
    ("Bab-ül Mendeb", 43.40, 12.60, 0.35, 26.0),
    ("Cebelitarık", -5.60, 35.97, 0.35, 14.0),
    ("Messina", 15.62, 38.20, 0.25, 3.0),
    ("Öresund", 12.70, 55.95, 0.35, 4.0),
    ("Büyük Belt", 11.00, 55.35, 0.35, 16.0),
    ("Küçük Belt", 9.75, 55.50, 0.25, 0.8),
    ("Bonifacio", 9.20, 41.33, 0.25, 11.0),
    ("Eğriboz (Euripos)", 23.59, 38.46, 0.20, 0.04),
    ("Hürmüz", 56.40, 26.55, 0.40, 39.0),
    ("Menai", -4.20, 53.20, 0.20, 0.2),
    ("Kerç-Taman (Azak ağzı)", 36.60, 45.35, 0.10, 4.5),
]
bogaz_sonuc = []
for ad, lo, la, r, gen in BOGAZLAR:
    i0, j0 = hucre(lo - r, la - r); i1, j1 = hucre(lo + r, la + r)
    alt = kara[j0:j1 + 1, i0:i1 + 1]
    n_at = [(i, j, di, dj) for (i, j, di, dj) in atlayan
            if i0 <= i <= i1 and j0 <= j <= j1]
    # gercek maskede pencere ici bilesenler vs izgara 8-bilesenleri
    pen = box(lo - r, la - r, lo + r, la + r)
    gk = KARA.intersection(pen)
    gps = list(gk.geoms) if hasattr(gk, "geoms") else [gk]
    gps = [p for p in gps if p.area > 1e-5]
    gps.sort(key=lambda p: -p.area)
    # her kara hucresinin gercek bileseni (merkez hangi parcada)
    from scipy import ndimage
    lab, nlab = ndimage.label(alt, structure=np.ones((3, 3)))
    kopru = 0
    for L in range(1, nlab + 1):
        jj, ii = np.nonzero(lab == L)
        ps = set()
        for a_, c_ in zip(ii[::3], jj[::3]):
            x, y = merkez(i0 + a_, j0 + c_)
            for q, p in enumerate(gps[:6]):
                if p.contains(Point(x, y)): ps.add(q); break
        if len(ps) >= 2: kopru += 1
    en = max((k for k in kumeler if abs(k["lon"] - lo) <= r and abs(k["lat"] - la) <= r),
             key=lambda k: (k["dolanma_km"] or 1e9), default=None)
    bogaz_sonuc.append({"ad": ad, "en_dar_km": gen, "pencere_hucre": int(alt.size),
                        "kara_hucre": int(alt.sum()), "deniz_hucre": int(alt.size - alt.sum()),
                        "pencere_gercek_bilesen": len(gps),
                        "izgara_bilesen": int(nlab),
                        "iki_yakayi_birlestiren_izgara_bileseni": kopru,
                        "sudan_gecen_adim": len(n_at),
                        "en_kotu_kume": en})
    log(ad, bogaz_sonuc[-1])

# ---------- C. petek (kosu 16 cikti) ----------
def js_dizi(yol, degisken):
    s = open(yol, encoding="utf-8").read()
    m = re.search(r"window\." + degisken + r"\s*=\s*", s)
    dec = json.JSONDecoder()
    v, _ = dec.raw_decode(s, m.end())
    return v
PARCA = js_dizi(KOSU + "/data/petek_govde.js", "PETEK_GOVDE_PARCA")
GOVDE = js_dizi(KOSU + "/data/petek_govde.js", "PETEK_GOVDE")
PETEKLER = js_dizi(KOSU + "/data/donemler.js", "PETEKLER")
log(f"petek {len(PETEKLER)} · govde {len(GOVDE)} · parca {len(PARCA)}")
Y = girdi.yukle(sessiz=True)
adkoor = {}
for y in Y:
    adkoor.setdefault(y["ad"], (y["lon"], y["lat"]))

def govde_geo(k):
    g = GOVDE[k]
    if g is None: return None
    idx = g if isinstance(g, list) else [g]
    ps = []
    for q in idx:
        rings = PARCA[q]
        try:
            ps.append(Polygon(rings[0], rings[1:]))
        except Exception:
            pass
    return unary_union(ps) if ps else None

def km2(g):
    lat = g.centroid.y
    return g.area * 111.32 ** 2 * math.cos(math.radians(lat))

petek_sonuc = {}
for ad, lo, la, r, gen in BOGAZLAR[:5] + [BOGAZLAR[5], BOGAZLAR[6]]:
    pen = box(lo - r, la - r, lo + r, la + r)
    gk = KARA.intersection(pen)
    gps = sorted([p for p in (gk.geoms if hasattr(gk, "geoms") else [gk]) if p.area > 1e-5],
                 key=lambda p: -p.area)
    satir = []
    for k, p in enumerate(PETEKLER):
        c = adkoor.get(p["a"])
        if c is None or not pen.contains(Point(c)): continue
        g = govde_geo(k)
        if g is None or g.is_empty: continue
        tb = next((q for q, gp in enumerate(gps) if gp.buffer(1e-4).contains(Point(c))), -1)
        karsi = 0.0; parcalar = []
        for q, gp in enumerate(gps):
            if q == tb: continue
            ix = g.intersection(gp)
            if ix.is_empty: continue
            a = km2(ix)
            if a < 0.5: continue
            karsi += a
            for pp in (ix.geoms if hasattr(ix, "geoms") else [ix]):
                if pp.geom_type == "Polygon" and km2(pp) >= 0.5:
                    parcalar.append(round(km2(pp), 1))
        if karsi >= 0.5:
            satir.append({"petek": p["a"], "lon": c[0], "lat": c[1],
                          "karsi_yaka_km2": round(karsi, 1),
                          "parcalar_km2": sorted(parcalar, reverse=True)[:6],
                          "hepsi_200_alti": all(x < 200 for x in parcalar)})
    petek_sonuc[ad] = sorted(satir, key=lambda s: -s["karsi_yaka_km2"])
    log(ad, "karsi yakaya tasan petek", len(satir))

# ---------- D. Tiflis ----------
tif = {}
for k, p in enumerate(PETEKLER):
    if p["a"].startswith("Tiflis"):
        g = govde_geo(k); c = adkoor.get(p["a"])
        if g is None: continue
        mnx, mny, mxx, mxy = g.bounds
        # kuzey ucu
        ext = [pt for poly in (g.geoms if hasattr(g, "geoms") else [g]) for pt in poly.exterior.coords]
        kuz = max(ext, key=lambda t: t[1])
        # DEM profili tohum -> kuzey ucu
        import rasterio
        dem = rasterio.open(os.path.join(KOSU, "veri-kaynak", "yukseklik", "etopo2022_30s_dunya.tif"))
        prof = []
        for t in np.linspace(0, 1, 60):
            x = c[0] + t * (kuz[0] - c[0]); y = c[1] + t * (kuz[1] - c[1])
            prof.append(float(next(dem.sample([(x, y)]))[0]))
        tif[p["a"]] = {"tohum": c, "alan_km2": round(km2(g)), "bbox": [round(v, 3) for v in g.bounds],
                       "kuzey_uc": [round(kuz[0], 3), round(kuz[1], 3)],
                       "tohum_kuzey_uc_km": round(girdi.km(c[1], c[0], kuz[1], kuz[0]), 1),
                       "profil_azami_m": round(max(prof)), "profil_uc_m": round(prof[-1]),
                       "profil_ornek_m": [round(v) for v in prof[::6]]}
        log("Tiflis", tif[p["a"]])

# ---------- ozet ----------
anlamli = [k for k in kumeler if not k["gol"] and (k["dolanma_km"] is None or
           k["dolanma_km"] > 3 * k["dogrudan_km"] + 20)]
cikti = {"izgara_kara": int(kara.sum()), "sudan_gecen_adim": len(atlayan),
         "kume": len(kumeler), "anlamli_kume_deniz": len(anlamli),
         "anlamli_kume_gol": len([k for k in kumeler if k["gol"] and (k["dolanma_km"] is None or
                                  k["dolanma_km"] > 3 * k["dogrudan_km"] + 20)]),
         "bogazlar": bogaz_sonuc, "petek": petek_sonuc, "tiflis": tif,
         "anlamli_kumeler": sorted(anlamli, key=lambda k: -(k["dolanma_km"] or 1e9))}
json.dump(cikti, open("C:/atlas/denetim/BOGAZ-OLCUM-0081.json", "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
log("yazildi · anlamli deniz kumesi", len(anlamli))

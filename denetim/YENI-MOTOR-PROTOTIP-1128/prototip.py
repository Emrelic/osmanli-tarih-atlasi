# -*- coding: utf-8 -*-
"""YENİ MOTOR PROTOTİPİ — 13 kural (K1–K13), iki kutu × üç gün, eski haritayla yan yana.

Devir: denetim/KOSU-SORUSTURMA-1127/DEVIR-YENI-MOTOR-PROTOTIP-1127.md
Kurallar: denetim/KOSU-SORUSTURMA-1127/YENI-MOTOR-KURALLARI-TASLAK-1127.md

BU ÜRETİM KODU DEĞİLDİR. Hız, önbellek şeması, çıktı şeması, bütün dünya kapsam dışı.
Soru tek: kural seti doğru haritayı veriyor mu?

Eski motordan KOPYALANAN parçalar (uret_petek.py içe aktarılamaz; etiket motor-eski-kosu40-1127):
  kara maskesi + göller (baraj kuralı) :804-903 · nehir sınıfları :904-1034 · geçitler :1037-1056
  ızgara + tohum yerleştirme :1329-1404 · eğim sürtünmesi :1448-1520 · nehir kenar bedeli :1569-1702
  boğaz yasağı :1749-1777 · kıstak köprüsü :1798-1887, 1953-1987 · tohum yakası :1906-1951
  adım bedeli (Dijkstra) :1991-2033 · sahne kuralı :5669-5722 · o günün sahibi :8223-8225, 8406-8423
  antlaşma hattı okuması :500-556 · hat süzgeci :7993-8005, 10209-10233
Motor dosyalarına (uret_petek.py, dolgu.py, renkler.py, girdi.py, motor_onbellek.py) DOKUNULMAZ;
girdi.py / gun.py / renkler.py yalnız İÇE AKTARILIR (okuma).

Çalıştırma:  py denetim/YENI-MOTOR-PROTOTIP-1128/prototip.py [--kutu KOD] [--gun GÜN] [--taze]
"""
import os, sys, io, json, math, time, pickle, argparse, contextlib, collections, subprocess, heapq, tempfile

BURASI = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(os.path.dirname(BURASI))
sys.path.insert(0, os.path.join(KOK, "arac"))
if ((getattr(sys.stdout, "encoding", None) or "").lower() not in ("utf-8", "utf8")
        and hasattr(sys.stdout, "buffer")):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace", line_buffering=True)

import numpy as np
import shapely
from shapely.geometry import shape, box, LineString, Polygon
from shapely.ops import unary_union
from shapely.strtree import STRtree
from scipy.sparse import csr_matrix
from scipy.sparse.csgraph import dijkstra
from scipy import ndimage

with contextlib.redirect_stdout(io.StringIO()):       # renkler.py içe aktarılırken yüzlerce uyarı basar
    import girdi
    import gun as _gun
    from renkler import BOYALAR
gn = _gun.gun

# ───────────────────────── sabitler ─────────────────────────
ADIM = 0.05                    # ızgara (°) — eski KV_ADIM
DY = ADIM * 111.32             # km
KM_SAAT = 5.04                 # Tobler düz hız; km-eşdeğeri ÷ 5,04 = saat (eski NEHIR_KM_SAAT)
GUN_SAAT = 8.0                 # 1 gün = 8 saat yürüyüş
CEKIRDEK = 5 * GUN_SAAT * KM_SAAT      # K6: 5 gün = 40 saat = 201,6 km-eşdeğeri
SERIT_YOL = 20 * GUN_SAAT * KM_SAAT    # K7: iki komşu kaynak arası yol ≤ 20 gün
SERIT_YARI = 5 * GUN_SAAT * KM_SAAT    # K7/K8: yolun iki yanında 5'er gün
DENIZ_YOL = 10 * GUN_SAAT * KM_SAAT    # K8: kaynak–deniz yolu ≤ 10 gün
DENIZ_KM2 = 100000.0                   # K8: iç deniz eşiği
EGIM_CARPANI = 0.005
KARA_TOL = 0.002
PAY = 8.0                      # hesap penceresi kutudan her yöne ≈ 25 gün (8°) geniş
INCE = 3                       # çizimde eski harita ve kıyı 0,0167° (ızgaranın 3 katı ince)
YON = ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1))
SINIR_SINIF = ("C", "D", "E", "F")     # K10
NEHIR_TABLO = {"gecitsiz": {1: 16.0, 2: 4.0}, "kopru": 0.0, "feribot": 8.0,
               "kale-cifti": 8.0, "sig-gecit": 4.0}      # eski "idare" öznesi
KUTULAR = collections.OrderedDict([
    ("anadolu-balkan", {"ad": "Anadolu–Balkanlar", "kutu": (15.0, 33.0, 45.0, 48.0)}),
    ("misir-arabistan", {"ad": "Mısır–Arabistan", "kutu": (25.0, 10.0, 60.0, 35.0)}),
])
GUNLER = ["1300-06-15", "1550-06-15", "1760-03-11"]
SURUM = "v3"                   # önbellek adı — hesap değişince artır
OSM, TABI = "OSMANLI", "OSMANLI-TABI"
OSM_RENK, TABI_RENK = "#8e0b22", "#d4707d"       # js/app.js osmanli-dolgu · tâbi açık kırmızı
KAYNAKLAR = os.path.join(KOK, "veri-kaynak")
T0 = time.perf_counter()


def soyle(*a):
    print("[%6.0f sn]" % (time.perf_counter() - T0), *a, flush=True)


def tepe_bellek_mb():
    try:
        import psutil
        mi = psutil.Process().memory_info()
        return getattr(mi, "peak_wset", mi.rss) / 2 ** 20
    except Exception:
        return float("nan")


def ana_depo():
    """Worktree'de yükseklik verisi yoktur (.gitignore); ana checkout'un yolunu bul."""
    try:
        c = subprocess.run(["git", "rev-parse", "--git-common-dir"], cwd=KOK, capture_output=True,
                           encoding="utf-8", timeout=30)
        p = c.stdout.strip()
        if p:
            p = p if os.path.isabs(p) else os.path.join(KOK, p)
            return os.path.dirname(os.path.abspath(p))
    except Exception:
        pass
    return None


def dem_bul():
    adaylar = []
    if os.environ.get("PROTOTIP_DEM"):
        adaylar.append(os.environ["PROTOTIP_DEM"])
    kokler = [KOK] + ([ana_depo()] if ana_depo() else [])
    for k in kokler:
        for a in ("etopo2022_30s_dunya.tif", "etopo2022_30s_atlas.tif"):
            adaylar.append(os.path.join(k, "veri-kaynak", "yukseklik", a))
    for a in adaylar:
        if os.path.exists(a) and os.path.getsize(a) > 10 ** 8:
            return a
    return None


def pencere(kutu):
    x0, y0, x1, y1 = kutu
    return (x0 - PAY, max(-60.0, y0 - PAY), x1 + PAY, min(84.0, y1 + PAY))


def alan_satir(y0, ny):
    """Satır başına hücre alanı (km²)."""
    lat = y0 + (np.arange(ny) + 0.5) * ADIM
    return DY * DY * np.cos(np.radians(lat))


# ───────────────────────── STATİK KATMAN (kutu başına bir kez) ─────────────────────────
def kesen_adimlar(izg, kara, hatlar):
    """`hatlar` (LineString listesi) hattını KESEN ızgara adımları (merkez→komşu merkez).
    Döner: (anahtar=h*8+yön, hat indeksi, orta nokta x, y). Eski `_nehir_kenar_kur` ①-③."""
    x0, y0, nx, ny = izg
    bos = (np.zeros(0, np.int64), np.zeros(0, np.int64), np.zeros(0), np.zeros(0))
    if not hatlar:
        return bos
    hs = set()
    for ln in hatlar:
        L = ln.length
        n = max(2, int(L / (ADIM * 0.5)) + 1)
        pt = shapely.line_interpolate_point(ln, np.linspace(0.0, L, n))
        ii = np.floor((shapely.get_x(pt) - x0) / ADIM).astype(np.int64)
        jj = np.floor((shapely.get_y(pt) - y0) / ADIM).astype(np.int64)
        m = (ii >= 0) & (ii < nx) & (jj >= 0) & (jj < ny)
        hs.update((jj[m] * nx + ii[m]).tolist())
    if not hs:
        return bos
    h = np.fromiter(hs, np.int64, len(hs))
    j, i = np.divmod(h, nx)
    aday = set()
    for dj in (-1, 0, 1):
        for di in (-1, 0, 1):
            a, b = i + di, j + dj
            m = (a >= 0) & (a < nx) & (b >= 0) & (b < ny)
            a, b = a[m], b[m]
            m2 = kara[b, a]
            aday.update((b[m2] * nx + a[m2]).tolist())
    if not aday:
        return bos
    c = np.fromiter(aday, np.int64, len(aday))
    cj, ci = np.divmod(c, nx)
    cx = x0 + (ci + 0.5) * ADIM
    cy = y0 + (cj + 0.5) * ADIM
    AN, X0, Y0, X1, Y1 = [], [], [], [], []
    for yi, (di, dj) in enumerate(YON):
        a, b = ci + di, cj + dj
        m = (a >= 0) & (a < nx) & (b >= 0) & (b < ny)
        m[m] = kara[b[m], a[m]]
        AN.append(c[m] * 8 + yi)
        X0.append(cx[m]); Y0.append(cy[m])
        X1.append(cx[m] + di * ADIM); Y1.append(cy[m] + dj * ADIM)
    AN = np.concatenate(AN); X0 = np.concatenate(X0); Y0 = np.concatenate(Y0)
    X1 = np.concatenate(X1); Y1 = np.concatenate(Y1)
    seg = shapely.linestrings(np.stack([np.column_stack([X0, Y0]), np.column_stack([X1, Y1])], axis=1))
    si, hi = STRtree(hatlar).query(seg, predicate="intersects")
    return AN[si], hi.astype(np.int64), (X0[si] + X1[si]) / 2.0, (Y0[si] + Y1[si]) / 2.0


def hatlar_ayir(geoms):
    out = []
    for g in geoms:
        if g is None or g.is_empty:
            continue
        for ln in shapely.get_parts(g):
            if ln.geom_type in ("LineString", "LinearRing") and not ln.is_empty:
                out.append(ln)
            elif ln.geom_type.startswith("Multi") or ln.geom_type == "GeometryCollection":
                out.extend(hatlar_ayir([ln]))
    return out


def statik_kur(kod, onb, taze=False):
    yol = os.path.join(onb, "statik-%s-%s.pkl" % (kod, SURUM))
    if os.path.exists(yol) and not taze:
        with open(yol, "rb") as f:
            st = pickle.load(f)
        soyle("statik katman önbellekten:", kod)
        return st
    kutu = KUTULAR[kod]["kutu"]
    pen = pencere(kutu)
    P = box(*pen)
    x0, y0, x1, y1 = pen
    nx = int(round((x1 - x0) / ADIM)); ny = int(round((y1 - y0) / ADIM))
    izg = (x0, y0, nx, ny)
    st = {"kod": kod, "kutu": kutu, "pen": pen, "izg": izg, "olcum": {}}
    soyle("statik katman kuruluyor:", kod, "pencere", pen, "ızgara %d×%d" % (nx, ny))

    # --- kara maskesi (eski :821-824) ---
    ne = json.load(open(os.path.join(KAYNAKLAR, "ne_10m_land.geojson"), encoding="utf-8"))
    KARA = unary_union([shape(f["geometry"]).buffer(0).intersection(P)
                        for f in ne["features"] if shape(f["geometry"]).envelope.intersects(P)])
    KARA = KARA.buffer(0).simplify(KARA_TOL, preserve_topology=True).buffer(0)
    del ne
    # --- göller, baraj kuralı (eski :848-894) ---
    DOGAL_GOL = {"Lake Il'Men'", "Ozero Kubenskoye", "Mjøsa", "Kostroma Reservoir"}
    gl = json.load(open(os.path.join(KAYNAKLAR, "ne_10m_lakes.geojson"), encoding="utf-8"))
    gs, baraj = [], 0
    for f in gl["features"]:
        p = f["properties"]
        g = shape(f["geometry"]).buffer(0)
        if not (g.envelope.intersects(P) and g.area > 0.02):
            continue
        ad = p.get("name") or "(adsız)"
        yil = p.get("year") or -99
        if p.get("featurecla") == "Reservoir" and ad not in DOGAL_GOL and (yil >= 1900 or p.get("dam_name")):
            baraj += 1
            continue
        g = g.intersection(P)
        if not g.is_empty:
            gs.append(g)
    with contextlib.redirect_stdout(io.StringIO()):
        ekgol = girdi.oku_goller()
    for eg in ekgol:
        g = shape(eg["geometry"]).buffer(0).intersection(P)
        if not g.is_empty:
            gs.append(g)
    GOLLER = unary_union(gs).buffer(0).simplify(0.01, preserve_topology=True).buffer(0) if gs else None
    if GOLLER is not None and not GOLLER.is_empty:
        KARA = KARA.difference(GOLLER).buffer(0)
    st["KARA"], st["GOLLER"] = KARA, GOLLER
    st["olcum"]["gol"] = len(gs); st["olcum"]["baraj_atlandi"] = baraj
    soyle("  kara + %d göl (baraj %d atlandı)" % (len(gs), baraj))

    # --- ızgara maskesi (eski :1346-1352), satır 0 = GÜNEY ---
    shapely.prepare(KARA)
    xs = x0 + (np.arange(nx) + 0.5) * ADIM
    kara = np.zeros((ny, nx), bool)
    for j in range(ny):
        kara[j] = shapely.contains_xy(KARA, xs, np.full(nx, y0 + (j + 0.5) * ADIM))
    st["kara"] = kara
    # deniz / göl ayrımı (K8): göl = merkezi GOLLER içinde kalan su; ≥100.000 km² göl bileşeni denizdir
    su = ~kara
    gol = np.zeros((ny, nx), bool)
    if GOLLER is not None and not GOLLER.is_empty:
        shapely.prepare(GOLLER)
        gx0, gy0, gx1, gy1 = GOLLER.bounds
        for j in range(ny):
            la = y0 + (j + 0.5) * ADIM
            if gy0 <= la <= gy1:
                gol[j] = su[j] & shapely.contains_xy(GOLLER, xs, np.full(nx, la))
        comp, n = ndimage.label(gol)
        if n:
            al = alan_satir(y0, ny)[:, None] * np.ones((1, nx))
            ca = ndimage.sum(al, comp, np.arange(1, n + 1))
            buyuk = np.nonzero(ca >= DENIZ_KM2)[0] + 1
            if len(buyuk):
                gol &= ~np.isin(comp, buyuk)
            st["olcum"]["ic_deniz_sayilan_gol"] = int(len(buyuk))
    deniz = su & ~gol
    st["deniz"], st["gol"] = deniz, gol
    st["kiyi"] = kara & ndimage.binary_dilation(deniz, structure=np.ones((3, 3), bool))
    soyle("  ızgara: kara %d · deniz %d · göl %d hücre" % (kara.sum(), deniz.sum(), gol.sum()))

    # --- eğim sürtünmesi (eski :1448-1520) ---
    surt = None
    dem = dem_bul()
    if dem:
        import rasterio
        from rasterio.windows import from_bounds
        with rasterio.open(dem) as ds:
            ust = min(y0 + ny * ADIM, float(ds.bounds.top))
            sat = int(round((ust - y0) / ADIM))
            win = from_bounds(x0, y0, x0 + nx * ADIM, ust, transform=ds.transform)
            zp = ds.read(1, window=win, out_shape=(sat, nx),
                         resampling=rasterio.enums.Resampling.average).astype("float32")
        zp = np.flipud(zp)                       # satır 0 = GÜNEY
        z = np.zeros((ny, nx), "float32"); z[:sat] = zp
        gy, gx = np.gradient(z)
        egim = np.hypot(gx, gy)
        surt = (1.0 + EGIM_CARPANI * egim).astype("float32")
        st["olcum"]["egim_medyan_m_hucre"] = float(np.median(egim[kara]))
        st["olcum"]["surtunme_medyan"] = float(np.median(surt[kara]))
        st["olcum"]["surtunme_maks"] = float(surt[kara].max())
        st["dem"] = os.path.basename(dem)
        soyle("  eğim: %s · sürtünme medyanı %.3f · en pahalı %.2f" % (
            os.path.basename(dem), st["olcum"]["surtunme_medyan"], st["olcum"]["surtunme_maks"]))
    else:
        st["dem"] = None
        soyle("  🔴 YÜKSEKLİK VERİSİ YOK — EĞİMSİZ hesap")
    st["surt"] = surt

    # --- nehirler ve sınıfları (eski :905-1034) ---
    BUYUK = {"Danube", "Duna", "Dunav", "Sava", "Drava", "Tisza", "Tisa", "Morava", "Dniester",
             "Dnipro", "Dnieper", "Prut", "Southern Bug", "Don", "Kuban", "Firat", "Al Furat",
             "Euphrates", "Dijlah", "Tigris", "Murat", "Kura", "Aras", "Nile", "Bahr el Nil",
             "Maritsa", "Meric", "Vardar", "Struma", "Sakarya", "Kizilirmak", "Yesilirmak",
             "Seyhan", "Ceyhan", "Jordan", "Orontes", "Buyuk Menderes", "Gediz",
             "Kucuk Menderes", "Kücük Menderes", "Menderes", "Maeander", "Meander",
             "Bakircay", "Caicus", "Susurluk", "Simav", "Kocacay",
             "Porsuk", "Aksu", "Kopru", "Koprucay", "Dalaman", "Esen", "Xanthos",
             "Goksu", "Calycadnus", "Coruh", "Kelkit", "Devrez", "Filyos", "Yenice",
             "Buyuk Zap", "Great Zab", "Kucuk Zab", "Little Zab", "Habur", "Khabur",
             "Balikh", "Asi", "Berdan", "Tarsus", "Manavgat", "Bartin", "Gonen", "Granicus",
             "Dicle", "Donau", "Tuna", "Evros", "Drau"}

    def sade(s):
        return "".join(c for c in s.lower() if c.isalpha())
    BUYUK_SADE = {sade(b) for b in BUYUK} | {"bykmenderes", "kizlirmak", "kiziirmak", "kckmenderes",
                                             "yesiirmak", "bakiray", "kprüay", "kopruay", "gksu"}
    SINIF1_ADLAR = {"danube", "donau", "duna", "dunav", "dunarea", "tuna", "sava", "drava", "drau",
                    "tisza", "tisa", "prut", "dnipro", "dnieper", "dnepr", "don", "volga",
                    "euphrates", "firat", "alfurat", "tigris", "dicle", "dijlah", "nile", "bahrelnil",
                    "aras", "araks", "kura", "kizilirmak", "kizlirmak", "kiziirmak", "sakarya",
                    "maritsa", "meric", "evros"}
    rv = json.load(open(os.path.join(KAYNAKLAR, "ne_10m_rivers.geojson"), encoding="utf-8"))
    nehir, nsinif = [], []
    for f in rv["features"]:
        pr = f["properties"]
        adlar = [pr.get("name"), pr.get("name_en"), pr.get("name_alt")]
        ad = next((a for a in adlar if a and sade(a) in BUYUK_SADE), None)
        try:
            sr = float(pr.get("scalerank"))
        except (TypeError, ValueError):
            sr = 99.0
        if ad is None and sr > 5.0:
            continue
        if f.get("geometry") is None:
            continue
        g = shape(f["geometry"])
        if not g.envelope.intersects(P):
            continue
        g = g.intersection(P)
        if g.is_empty:
            continue
        sinif = 1 if (sr <= 3.0 or ({sade(a) for a in adlar if a} & SINIF1_ADLAR)) else 2
        for ln in hatlar_ayir([g]):
            nehir.append(ln); nsinif.append(sinif)
    st["nehir"], st["nehir_sinif"] = nehir, nsinif
    # --- geçitler (eski :1037-1045) ---
    ham = io.open(os.path.join(KOK, "data", "gecitler.js"), "rb").read().decode("utf-8")
    gecit = [(float(g["lon"]), float(g["lat"]), g["tur"], float(g["etki_km"]), g["ad"])
             for g in girdi._cevir(ham, "GECITLER")]
    st["gecit"] = gecit
    # --- nehir geçiş bedeli, KENARA yazılır (eski :1607-1702) ---
    an, hi, mx, my = kesen_adimlar(izg, kara, nehir)
    sinif = np.array(nsinif, np.int64)[hi] if len(hi) else np.zeros(0, np.int64)
    sira = np.lexsort((sinif, an))
    an, sinif, mx, my = an[sira], sinif[sira], mx[sira], my[sira]
    ilk = np.ones(len(an), bool); ilk[1:] = an[1:] != an[:-1]
    an, sinif, mx, my = an[ilk], sinif[ilk], mx[ilk], my[ilk]
    saat = np.where(sinif == 1, NEHIR_TABLO["gecitsiz"][1], NEHIR_TABLO["gecitsiz"][2]).astype(float)
    indirim = 0
    if gecit and len(an):
        gpt = shapely.points([g[0] for g in gecit], [g[1] for g in gecit])
        mi, gi = STRtree(gpt).query(shapely.points(mx, my), predicate="dwithin", distance=0.5)
        for m_, g_ in zip(mi.tolist(), gi.tolist()):
            glo, gla, tur, etki, _ = gecit[g_]
            tb = NEHIR_TABLO.get(tur)
            if tb is None:
                continue
            if girdi.km(my[m_], mx[m_], gla, glo) <= etki and tb < saat[m_]:
                saat[m_] = tb; indirim += 1
    st["nehir_kesen"] = an                       # nehri kesen bütün adımlar (bedelsiz köprüler dahil)
    st["nehir_anah"] = an[saat > 0]
    st["nehir_bedel"] = (saat[saat > 0] * KM_SAAT)
    st["olcum"].update(nehir_parca=len(nehir), nehir_kesen_adim=int(len(an)),
                       nehir_sinif1_adim=int((sinif == 1).sum()), gecit=len(gecit),
                       gecit_indirimli_adim=int(indirim))
    soyle("  nehir: %d parça · kesen adım %d (sınıf-1 %d) · geçit %d, indirimli adım %d" % (
        len(nehir), len(an), (sinif == 1).sum(), len(gecit), indirim))

    # --- boğaz yasağı: doğrusu karadan çıkan adım YASAK (eski :1749-1777) ---
    from rasterio import features as rfe
    from rasterio.transform import from_origin
    kiyi_h = np.flipud(rfe.rasterize([(KARA.boundary, 1)], out_shape=(ny, nx),
                                     transform=from_origin(x0, y0 + ny * ADIM, ADIM, ADIM),
                                     all_touched=True, dtype="uint8")).astype(bool)
    tt = np.arange(1, 12) / 12.0
    yasak = []
    JJ, II = np.nonzero(kara)
    for yi, (di, dj) in enumerate(YON):
        a, b = II + di, JJ + dj
        ok = (a >= 0) & (a < nx) & (b >= 0) & (b < ny)
        ii, jj, a, b = II[ok], JJ[ok], a[ok], b[ok]
        ok = kara[b, a] & (kiyi_h[jj, ii] | kiyi_h[b, a])
        ii, jj = ii[ok], jj[ok]
        bx = x0 + (ii + 0.5) * ADIM
        by = y0 + (jj + 0.5) * ADIM
        m = np.zeros(len(ii), bool)
        for t in tt:
            m |= ~shapely.contains_xy(KARA, bx + t * di * ADIM, by + t * dj * ADIM)
        yasak.append((jj[m] * nx + ii[m]) * 8 + yi)
    yasak = np.unique(np.concatenate(yasak))
    st["su_yasak"] = yasak
    soyle("  boğaz yasağı: %d yönlü kenar" % len(yasak))

    # --- kenar listesi E0 (su yasağı düşülmüş; adım bedeli eski :2014-2029) ---
    surt_d = surt.ravel() if surt is not None else None
    EU, EV, EW, EA = [], [], [], []
    for yi, (di, dj) in enumerate(YON):
        a, b = II + di, JJ + dj
        ok = (a >= 0) & (a < nx) & (b >= 0) & (b < ny)
        ii, jj, a, b = II[ok], JJ[ok], a[ok], b[ok]
        ok = kara[b, a]
        ii, jj, a, b = ii[ok], jj[ok], a[ok], b[ok]
        u = jj * nx + ii; v = b * nx + a
        anah = u * 8 + yi
        tut = ~np.isin(anah, yasak)
        u, v, anah, jj = u[tut], v[tut], anah[tut], jj[tut]
        dx = DY * np.cos(np.radians(y0 + (jj + 0.5) * ADIM))
        w = np.hypot(dx * di, DY * dj)
        if surt_d is not None:
            w = w * surt_d[v]                    # sürtünme HEDEF hücreden (eski :2023-2027)
        EU.append(u); EV.append(v); EW.append(w); EA.append(anah)
    EU = np.concatenate(EU); EV = np.concatenate(EV); EW = np.concatenate(EW); EA = np.concatenate(EA)
    ix = np.searchsorted(st["nehir_anah"], EA)
    ix[ix >= len(st["nehir_anah"])] = 0
    if len(st["nehir_anah"]):
        es = st["nehir_anah"][ix] == EA
        EW = EW + np.where(es, st["nehir_bedel"][ix], 0.0)
    st["e_u"], st["e_v"], st["e_w"], st["e_a"] = EU.astype(np.int32), EV.astype(np.int32), EW, EA
    st["e_nehir"] = np.isin(EA, st["nehir_kesen"])
    soyle("  kenar: %d" % len(EU))

    # --- çizim için ince kara maskesi (kutu, ADIM/INCE), satır 0 = KUZEY ---
    bx0, by0, bx1, by1 = kutu
    res = ADIM / INCE
    W = int(round((bx1 - bx0) / res)); H = int(round((by1 - by0) / res))
    fx = bx0 + (np.arange(W) + 0.5) * res
    ince = np.zeros((H, W), bool)
    for r in range(H):
        ince[r] = shapely.contains_xy(KARA, fx, np.full(W, by1 - (r + 0.5) * res))
    st["kara_ince"] = ince
    st["olcum"]["statik_sn"] = time.perf_counter() - T0
    # hazırlanmış (prepared) geometri turşuya girmez; yüklenince yeniden hazırlanır
    with open(yol, "wb") as f:
        pickle.dump(st, f, protocol=4)
    soyle("statik katman yazıldı:", yol)
    return st


# ───────────────────────── VERİ: yerleşim, devlet, hat ─────────────────────────
def veri_yukle():
    with contextlib.redirect_stdout(io.StringIO()):
        Y = girdi.yukle(sessiz=True)
        DV = girdi.oku_devletler()
    for y in Y:
        for alan, dv in girdi.VARSAYILAN.items():
            y.setdefault(alan, [] if dv == [] else dv)
    HA = {k["id"]: k["harita"] for k in DV if k.get("id") and k.get("harita")}
    tabi = {}
    for k in DV:
        if k.get("id") and isinstance(k.get("tabi"), list):
            p = [(sk_pad(q.get("f") or "-9999"), sk_pad(q.get("t") or "9999"))
                 for q in k["tabi"] if isinstance(q, dict) and q.get("ust") == "osmanli"]
            if p:
                tabi[k["id"]] = p
    return Y, HA, tabi


def sk_pad(s):
    if not isinstance(s, str) or not s or s[0] == "-":
        return s
    y, ayr, kal = s.partition("-")
    if y.isdigit() and len(y) < 4:
        return y.zfill(4) + ayr + kal
    return s


def hatlari_oku(onb, taze=False):
    """Antlaşma hatları: index.html'in yüklediği d_sinirlar*.js, node ile (eski :529-545)."""
    yol = os.path.join(onb, "hatlar-%s.pkl" % SURUM)
    if os.path.exists(yol) and not taze:
        return pickle.load(open(yol, "rb"))
    from paket_coz import index_esleyen
    rel = index_esleyen(KOK, r"/d_sinirlar")
    if not rel:
        raise SystemExit("index.html'de d_sinirlar dosyası yok — K10 uygulanamaz")
    dos = sorted({os.path.join(KOK, *m.split("/")) for m in rel})
    js = ("global.window={};for(const f of %s)eval(require('fs').readFileSync(f,'utf8'));"
          "process.stdout.write(JSON.stringify(Object.values(window).filter(Array.isArray).flat()"
          ".filter(r=>r&&r.id&&r.hat&&r.hat.length).map(r=>({id:r.id,sinif:r.sinif,kategori:r.kategori,"
          "taraflar:r.taraflar,f:r.f,t:r.t,hat:r.hat}))));" % json.dumps(dos))
    c = subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8", timeout=300)
    if c.returncode != 0 or not c.stdout.strip():
        raise SystemExit("d_sinirlar okunamadı (node): " + (c.stderr or "").strip()[-300:])
    ham = json.loads(c.stdout)
    pickle.dump((ham, len(dos)), open(yol, "wb"))
    return ham, len(dos)


def aktif_hatlar(ham, tabi, g, pen):
    """K10: o gün geçerli C/D/E/F hatları. Bir tarafı o gün Osmanlı'ya TÂBİ olan hat yoktur (eski :8002)."""
    n = gn(g)
    P = box(*pen)

    def tabi_mi(p):
        return any(gn(f) <= n < gn(t) for f, t in tabi.get(p, ()))
    out, say = [], collections.Counter()
    for r in ham:
        sn = r.get("sinif") or r.get("kategori") or "?"
        if sn not in SINIR_SINIF:
            continue
        f, t = sk_pad(r.get("f") or "-9999"), sk_pad(r.get("t") or "9999")
        try:
            if not (gn(f) <= n < gn(t)):
                continue
        except Exception:
            say["tarih okunamadı"] += 1
            continue
        tf = r.get("taraflar") or []
        if any(tabi_mi(p) for p in tf):
            say["taraf tâbi"] += 1
            continue
        h = r["hat"]
        parca = h if isinstance(h[0][0], list) else [h]
        for q in parca:
            if len(q) < 2:
                continue
            ln = LineString(q)
            if not ln.intersects(P):
                continue
            for l2 in hatlar_ayir([ln.intersection(P)]):
                out.append(l2)
            say["hat"] += 1
    return out, dict(say)


def kaynak_listesi(Y, HA, g, pen):
    """K1 sahne + K2 kaynak türü + K3 (kademe ayrımı yok). Eski `_mo_sahne_disi`, `_gun_sahipleri`."""
    n = gn(g)
    x0, y0, x1, y1 = pen
    kay, say, borc, tarihsiz, renksiz = [], collections.Counter(), [], [], set()
    for idx, y in enumerate(Y):
        if not (x0 <= y["lon"] < x1 and y0 <= y["lat"] < y1):
            continue
        kur, bit = y.get("kur"), y.get("bit")
        fs = [gn(p["f"]) for kat in ("d", "v", "s") for p in y[kat]]
        disi = False
        if bit and gn(bit) <= n:
            disi = True
        elif kur:
            disi = gn(kur) > n
        elif not fs:
            disi = not bit
        else:
            disi = min(fs) > n
        if disi:
            say["sahne dışı"] += 1
            if y.get("bos") in ("kabile", "devletsiz") and not kur and not bit and not fs:
                tarihsiz.append(idx)
            continue
        tur, anah = None, None
        if any(gn(p["f"]) <= n < gn(p["t"]) for p in y["d"]):
            tur, anah = "boyar", OSM
        elif any(gn(p["f"]) <= n < gn(p["t"]) for p in y["v"]):
            tur, anah = "boyar", TABI
        else:
            for p in y["s"]:
                if gn(p["f"]) <= n < gn(p["t"]):
                    d = p["d"]
                    if d == "__BOSLUK__":
                        tur, anah = "boyamaz", "__BOSLUK__"
                    elif d == "__YOK__":
                        tur = "yok"
                    elif d.startswith("__"):
                        tur = "degil"
                    else:
                        k = d if d in BOYALAR else HA.get(d)
                        if k in BOYALAR:
                            tur, anah = "boyar", k
                        else:
                            tur, anah = "boyar", d
                            renksiz.add(d)
                    break
        if tur is None:
            if y.get("kasitli_bosluk") or y.get("bos") in ("kabile", "devletsiz", "insansiz"):
                tur, anah = "boyamaz", "bos:" + str(y.get("bos") or "kasitli")
            else:
                tur = "degil"
        if tur == "yok":
            say["sahne dışı (__YOK__)"] += 1
            continue
        if tur == "degil":
            say["kaynak değil (veri borcu)"] += 1
            borc.append(y["ad"])
            continue
        if os.environ.get("PROTOTIP_K4SIZ") == "1" and (y.get("k") or 0) >= 4:
            say["k:4 kaynak sayılmadı (ÖLÇÜM bayrağı)"] += 1      # yalnız K3'ün etkisini ölçmek için
            continue
        say[tur + (" k:4" if (y.get("k") or 0) >= 4 else "")] += 1
        kay.append({"idx": idx, "ad": y["ad"], "lon": y["lon"], "lat": y["lat"], "tur": tur,
                    "anah": anah, "k": y.get("k") or 0})
    return kay, dict(say), borc, tarihsiz, sorted(renksiz)


def tohum_yerlestir(st, kay):
    """Kaynakları ızgara hücresine oturtur: su hücresi → en yakın kara (eski :1389-1402) ·
    tohum yakası (eski :1908-1947) · kıstak köprüsü (eski :1825-1887, 1953-1985) ·
    aynı hücrede FARKLI sahipli iki kaynak → ikincisi boş komşu hücreye (prototip kararı)."""
    x0, y0, nx, ny = st["izg"]
    kara, KARA = st["kara"], st["KARA"]
    shapely.prepare(KARA)
    su_yasak = st.get("_su_kume")
    if su_yasak is None:
        su_yasak = st["_su_kume"] = set(st["su_yasak"].tolist())
    olc = collections.Counter()
    nehir = st["nehir"]
    agac = STRtree(nehir) if nehir else None

    def keser(xa, ya, xb, yb):
        s = LineString([(xa, ya), (xb, yb)])
        return any(nehir[int(k)].intersects(s) for k in agac.query(s))

    def serbest(h, yi):
        j, i = divmod(h, nx)
        di, dj = YON[yi]
        a, b = i + di, j + dj
        if not (0 <= a < nx and 0 <= b < ny) or not kara[b, a]:
            return -1
        if (h * 8 + yi) in su_yasak:
            return -1
        return b * nx + a

    def hapis(h, pen=6):
        j0, i0 = divmod(h, nx)
        gor, yig = {h}, [h]
        while yig:
            c = yig.pop()
            for yi in range(8):
                k = serbest(c, yi)
                if k < 0 or k in gor:
                    continue
                kj, ki = divmod(k, nx)
                if abs(ki - i0) > pen or abs(kj - j0) > pen:
                    return False
                gor.add(k); yig.append(k)
        return True

    def kara_yolu(lon, lat, arama=4, incel=0.005, yol_km=16.0):
        r = (arama + 1) * ADIM
        n = int(round(2 * r / incel)) + 1
        xs = lon - r + np.arange(n) * incel
        ys = lat - r + np.arange(n) * incel
        gx, gy = np.meshgrid(xs, ys)
        m = shapely.contains_xy(KARA, gx.ravel(), gy.ravel()).reshape(n, n)
        c = n // 2
        bas = None
        for rr in range(0, 4):
            for jj in range(c - rr, c + rr + 1):
                for ii in range(c - rr, c + rr + 1):
                    if 0 <= jj < n and 0 <= ii < n and m[jj, ii]:
                        bas = (jj, ii); break
                if bas: break
            if bas: break
        if bas is None:
            return None
        ky = incel * 111.32
        kx = ky * math.cos(math.radians(lat))
        uz = np.full((n, n), np.inf)
        uz[bas] = 0.0
        q = [(0.0, bas)]
        while q:
            d, (jj, ii) = heapq.heappop(q)
            if d > uz[jj, ii] or d > yol_km:
                continue
            for di, dj in YON:
                b, a = jj + dj, ii + di
                if 0 <= b < n and 0 <= a < n and m[b, a]:
                    nd = d + math.hypot(kx * di, ky * dj)
                    if nd < uz[b, a]:
                        uz[b, a] = nd; heapq.heappush(q, (nd, (b, a)))

        def f(x, y):
            ii = int(round((x - xs[0]) / incel)); jj = int(round((y - ys[0]) / incel))
            if not (0 <= jj < n and 0 <= ii < n) or not np.isfinite(uz[jj, ii]):
                return None
            return float(uz[jj, ii])
        return f

    for k in kay:
        k["h"] = None
        i = int((k["lon"] - x0) / ADIM); j = int((k["lat"] - y0) / ADIM)
        if not (0 <= i < nx and 0 <= j < ny):
            olc["pencere dışı"] += 1
            continue
        if not kara[j, i]:
            en, ed = None, 9e9
            for dj in range(-3, 4):
                for di in range(-3, 4):
                    a, b = i + di, j + dj
                    if 0 <= a < nx and 0 <= b < ny and kara[b, a]:
                        d = di * di + dj * dj
                        if d < ed:
                            ed, en = d, (a, b)
            if en is None:
                olc["ızgarada yer yok"] += 1
                continue
            i, j = en
            olc["kara hücresine kaydırıldı"] += 1
        h = j * nx + i
        # tohum yakası: nokta ile hücre merkezi arasında nehir varsa aynı yakadaki komşuya
        if agac is not None:
            cx, cy = x0 + (i + 0.5) * ADIM, y0 + (j + 0.5) * ADIM
            if keser(k["lon"], k["lat"], cx, cy):
                en, ed = None, 9e9
                for dj in (-1, 0, 1):
                    for di in (-1, 0, 1):
                        a, b = i + di, j + dj
                        if (di == 0 and dj == 0) or not (0 <= a < nx and 0 <= b < ny) or not kara[b, a]:
                            continue
                        ax, ay = x0 + (a + 0.5) * ADIM, y0 + (b + 0.5) * ADIM
                        if keser(k["lon"], k["lat"], ax, ay):
                            continue
                        km = girdi.km(k["lat"], k["lon"], ay, ax)
                        if km < ed:
                            en, ed = b * nx + a, km
                if en is not None:
                    h = en
                    olc["tohum yakası"] += 1
        k["h"] = h
    # kıstak köprüsü
    hapis_ezber = {}
    for k in kay:
        h = k["h"]
        if h is None:
            continue
        if h not in hapis_ezber:
            hapis_ezber[h] = hapis(h)
        if not hapis_ezber[h]:
            continue
        yol = kara_yolu(k["lon"], k["lat"])
        if yol is None:
            continue
        hj, hi = divmod(h, nx)
        en, ed = None, 9e9
        for dj in range(-4, 5):
            for di in range(-4, 5):
                a, b = hi + di, hj + dj
                if not (0 <= a < nx and 0 <= b < ny):
                    continue
                kk = b * nx + a
                if kk == h or not kara[b, a]:
                    continue
                km = yol(x0 + (a + 0.5) * ADIM, y0 + (b + 0.5) * ADIM)
                if km is None or km >= ed or km > 16.0:
                    continue
                if kk not in hapis_ezber:
                    hapis_ezber[kk] = hapis(kk)
                if hapis_ezber[kk]:
                    continue
                en, ed = kk, km
        if en is not None:
            k["h"] = en
            olc["kıstak köprüsü"] += 1
    # aynı hücre çakışması
    dolu = {}
    for ki, k in enumerate(kay):
        h = k["h"]
        if h is None:
            continue
        if h not in dolu:
            dolu[h] = ki
            k["asil"] = ki
            continue
        o = kay[dolu[h]]
        if (o["tur"], o["anah"]) == (k["tur"], k["anah"]):
            k["asil"] = dolu[h]
            olc["aynı hücre, aynı sahip (birleşti)"] += 1
            continue
        yer = None
        for yi in range(8):
            c = serbest(h, yi)
            if c >= 0 and c not in dolu:
                yer = c; break
        if yer is None:
            k["h"] = None
            olc["aynı hücre, farklı sahip (YER BULUNAMADI, düştü)"] += 1
            continue
        k["h"] = yer; dolu[yer] = ki; k["asil"] = ki
        olc["aynı hücre, farklı sahip (komşu hücreye)"] += 1
    return dict(olc)


# ───────────────────────── HESAP (gün başına) ─────────────────────────
def hesapla(st, kay, hatlar):
    x0, y0, nx, ny = st["izg"]
    N = nx * ny
    kara = st["kara"]
    olc = {}
    t0 = time.perf_counter()
    eu, ev, ew, ea = st["e_u"], st["e_v"], st["e_w"], st["e_a"]
    # K10 — antlaşma hattını kesen adım GEÇİLMEZ
    if hatlar:
        dan, _, _, _ = kesen_adimlar(st["izg"], kara, hatlar)
        duvar = np.unique(dan)
        acik = ~np.isin(ea, duvar)
    else:
        duvar = np.zeros(0, np.int64)
        acik = np.ones(len(ea), bool)
    olc["duvar_kenar"] = int(len(duvar))
    G = csr_matrix((ew[acik], (eu[acik], ev[acik])), shape=(N, N))

    # kaynak dizileri
    nk = len(kay)
    boyar = np.array([k["tur"] == "boyar" for k in kay], bool)
    anahlar = sorted({k["anah"] for k in kay if k["tur"] == "boyar"})
    aix = {a: i for i, a in enumerate(anahlar)}
    k_anah = np.array([aix[k["anah"]] if k["tur"] == "boyar" else -1 for k in kay], np.int32)
    h2k = np.full(N, -1, np.int32)
    for ki, k in enumerate(kay):
        if k.get("h") is not None and k.get("asil") == ki:
            h2k[k["h"]] = ki
    tohum = np.nonzero(h2k >= 0)[0].astype(np.int32)

    # K4 + K5 — çok kaynaklı sürtünmeli Dijkstra: her hücrenin en yakın kaynağı ve süresi
    dist, pred, src = dijkstra(G, directed=True, indices=tohum, return_predecessors=True, min_only=True)
    ok = src >= 0
    lab = np.full(N, -1, np.int32)
    lab[ok] = h2k[src[ok]]
    olc["dijkstra_sn"] = time.perf_counter() - t0
    # K6 — çekirdek
    cek = ok & (dist <= CEKIRDEK)

    # K7 — komşu kaynak çiftleri ve aralarındaki en kısa yol (hat duvarının iki yanı da KOMŞU sayılır)
    lu, lv = lab[eu], lab[ev]
    m = (lu >= 0) & (lv >= 0) & (lu < lv)
    pu, pv = eu[m], ev[m]
    D = dist[pu] + ew[m] + dist[pv]
    anah = lu[m].astype(np.int64) * nk + lv[m]
    sira = np.lexsort((D, anah))
    anah, D, pu, pv = anah[sira], D[sira], pu[sira], pv[sira]
    ilk = np.ones(len(anah), bool); ilk[1:] = anah[1:] != anah[:-1]
    anah, D, pu, pv = anah[ilk], D[ilk], pu[ilk], pv[ilk]
    cA, cB = (anah // nk).astype(np.int64), (anah % nk).astype(np.int64)
    komsu = collections.defaultdict(set)         # hücreleri değen her çift
    komsu20 = collections.defaultdict(set)       # aradaki yol ≤ 20 gün olanlar (K8'in "komşu"su)
    for a, b, d in zip(cA.tolist(), cB.tolist(), D.tolist()):
        komsu[a].add(b); komsu[b].add(a)
        if d <= SERIT_YOL:
            komsu20[a].add(b); komsu20[b].add(a)
    olc["komsu_cift"] = int(len(anah))
    olc["komsu_cift_20gun_ici"] = int((D <= SERIT_YOL).sum())
    olc["komsu_cift_20gun_ustu"] = int((D > SERIT_YOL).sum())

    def zincir(c):
        out = []
        while c >= 0:
            out.append(c)
            c = pred[c]
        return out

    yol7 = collections.defaultdict(list)
    yollar7 = []
    for a, b, d, u, v in zip(cA.tolist(), cB.tolist(), D.tolist(), pu.tolist(), pv.tolist()):
        if d > SERIT_YOL or not (boyar[a] or boyar[b]):
            continue
        za, zb = zincir(u), zincir(v)
        yollar7.append((za[::-1] + zb, d, a, b))
        if boyar[a]:
            yol7[a].append(za); yol7[a].append(zb)
        if boyar[b]:
            yol7[b].append(za); yol7[b].append(zb)
    olc["serit_cifti"] = len(yollar7)

    # K8 — deniz: kaynağın KENDİ hücrelerindeki en yakın kıyı; ≤20 gün uzaktaki en az bir komşusu da
    #      denize ≤10 günde ulaşmalı (tek kaynaktan dil uzamaz)
    kc = np.nonzero(st["kiyi"].ravel() & (lab >= 0))[0]
    sira = np.lexsort((dist[kc], lab[kc]))
    kc = kc[sira]
    ilk = np.ones(len(kc), bool); ilk[1:] = lab[kc][1:] != lab[kc][:-1]
    kc = kc[ilk]
    dsea = np.full(nk, np.inf)
    cstar = np.full(nk, -1, np.int64)
    dsea[lab[kc]] = dist[kc]; cstar[lab[kc]] = kc
    denize = dsea <= DENIZ_YOL
    yol8, yollar8, tek_kaynak = {}, [], 0
    for a in np.nonzero(denize & boyar)[0].tolist():
        if any(denize[b] for b in komsu20.get(a, ())):
            z = zincir(int(cstar[a]))
            yol8[a] = z
            yollar8.append((z[::-1], float(dsea[a]), a))
        else:
            tek_kaynak += 1
    olc["deniz_10gun_ici_kaynak"] = int((denize & boyar).sum())
    olc["deniz_serit_kaynak"] = len(yol8)
    olc["deniz_tek_kaynak_dil_yok"] = tek_kaynak

    # şerit: yol hücrelerinden 5 günlük sınırlı Dijkstra; yalnız kaynağın KENDİ hücreleri boyanır
    t1 = time.perf_counter()
    sirali = np.argsort(lab, kind="stable")
    labs = lab[sirali]
    bas = np.searchsorted(labs, np.arange(nk), side="left")
    son = np.searchsorted(labs, np.arange(nk), side="right")
    ser7 = np.zeros(N, bool); ser8 = np.zeros(N, bool)
    for a in sorted(set(yol7) | set(yol8)):
        p7 = np.unique(np.concatenate([np.asarray(z, np.int64) for z in yol7[a]])) if a in yol7 else np.zeros(0, np.int64)
        p8 = np.asarray(yol8[a], np.int64) if a in yol8 else np.zeros(0, np.int64)
        P_ = np.unique(np.concatenate([p7, p8])).astype(np.int32)
        d2, _p, s2 = dijkstra(G, directed=True, indices=P_, return_predecessors=True, min_only=True,
                              limit=SERIT_YARI)
        hc = sirali[bas[a]:son[a]]
        sec = hc[d2[hc] <= SERIT_YARI]
        if not len(sec):
            continue
        y8 = ~np.isin(s2[sec], p7) if len(p7) else np.ones(len(sec), bool)
        ser7[sec[~y8]] = True
        ser8[sec[y8]] = True
    olc["serit_sn"] = time.perf_counter() - t1

    # katmanlar: 1 çekirdek · 2 şerit K7 · 3 deniz şeridi K8 · 4 delik K9 · 5 boyamayan kaynağın toprağı
    hb = np.zeros(N, bool); hb[ok] = boyar[lab[ok]]
    kat = np.zeros(N, np.uint8)
    kat[cek & hb] = 1
    kat[ser7 & hb & (kat == 0)] = 2
    kat[ser8 & hb & (kat == 0)] = 3
    kat[cek & ok & ~hb] = 5
    boya = np.full(N, -1, np.int32)
    b_ = (kat >= 1) & (kat <= 3)
    boya[b_] = k_anah[lab[b_]]

    # K9 — delik: tek devletle çevrili, içinde boyamayan kaynak olmayan boyanmamış kara bileşeni
    grup = np.arange(len(anahlar))
    if OSM in aix and TABI in aix:
        grup[aix[TABI]] = aix[OSM]               # Osmanlı doğrudan + tâbi = tek devlet
    B2 = boya.reshape(ny, nx); K2 = kat.reshape(ny, nx)
    bosk = kara & (B2 < 0)
    comp, nc = ndimage.label(bosk)               # 4-komşuluk
    kod = np.full((ny, nx), -3, np.int64)        # -3: göl / yok sayılır
    kod[B2 >= 0] = grup[B2[B2 >= 0]]
    kod[st["deniz"]] = -2
    kod[bosk] = -1
    c_gr, c_an = [], []
    for (sa, sb) in (((slice(None), slice(0, -1)), (slice(None), slice(1, None))),
                     ((slice(None), slice(1, None)), (slice(None), slice(0, -1))),
                     ((slice(0, -1), slice(None)), (slice(1, None), slice(None))),
                     ((slice(1, None), slice(None)), (slice(0, -1), slice(None)))):
        ca = comp[sa]; kb = kod[sb]; bb = B2[sb]
        mm = (ca > 0) & (kb != -1) & (kb != -3)
        c_gr.append(np.stack([ca[mm], kb[mm]], 1))
        m3 = (ca > 0) & (bb >= 0)
        c_an.append(np.stack([ca[m3], bb[m3]], 1))
    c_gr = np.unique(np.concatenate(c_gr), axis=0) if nc else np.zeros((0, 2), np.int64)
    gruplar = collections.defaultdict(set)
    for c, g in c_gr.tolist():
        gruplar[c].add(g)
    kenar = set(np.unique(np.concatenate([comp[0], comp[-1], comp[:, 0], comp[:, -1]])).tolist()) - {0}
    boyamazli = set(np.unique(comp[K2 == 5]).tolist()) - {0}
    baskin = {}
    if nc:
        ca = np.concatenate(c_an)
        if len(ca):
            ua, sayi = np.unique(ca, axis=0, return_counts=True)
            for (c, a), s in zip(ua.tolist(), sayi.tolist()):
                if c not in baskin or s > baskin[c][1]:
                    baskin[c] = (a, s)
    doldur, cep = {}, set()
    for c, gs in gruplar.items():
        if c in kenar or c in boyamazli:
            continue
        dev = {g for g in gs if g >= 0}
        if len(dev) != 1:
            continue
        if -2 in gs:
            cep.add(c)                           # kıyı cebi: tek devlet + deniz — DAR yorumda dolmaz
        else:
            doldur[c] = next(iter(dev))
    if doldur:
        cf = comp.ravel()
        hedef = np.zeros(nc + 1, np.int64) - 1
        for c, g in doldur.items():
            hedef[c] = g
        sec = np.nonzero(hedef[cf] >= 0)[0]
        g_ = hedef[cf[sec]]
        kendi = np.full(len(sec), -1, np.int64)
        lm = lab[sec] >= 0
        kendi[lm] = k_anah[lab[sec][lm]]
        uy = (kendi >= 0)
        uy[uy] = grup[kendi[uy]] == g_[uy]
        bs = np.array([baskin.get(c, (g, 0))[0] for c, g in zip(cf[sec].tolist(), g_.tolist())], np.int64)
        boya[sec] = np.where(uy, kendi, bs)
        kat[sec] = 4
    if cep:
        cf = comp.ravel()
        kat[np.isin(cf, np.fromiter(cep, np.int64, len(cep))) & (kat == 0)] = 6
    olc["delik_dolan"] = len(doldur)
    olc["kiyi_cebi"] = len(cep)
    olc["bos_bilesen"] = int(nc)
    olc["hesap_sn"] = time.perf_counter() - t0
    return {"boya": boya.reshape(ny, nx), "kat": kat.reshape(ny, nx), "lab": lab.reshape(ny, nx),
            "dist": dist.reshape(ny, nx), "anahlar": anahlar, "yollar7": yollar7, "yollar8": yollar8,
            "olc": olc, "h2k": h2k, "ciftler": list(zip(cA.tolist(), cB.tolist(), D.tolist())),
            "dsea": dsea}


# ───────────────────────── ESKİ HARİTA (yayındaki, Koşu 39) ─────────────────────────
def _havuz_parcala(m, ad):
    i = m.index("window." + ad + " = ") + len("window." + ad + " = ")
    j = m.index("];", i)
    return m[i + 3:j - 2].split("]],[[")


def _dizi(m, ad):
    i = m.index("window." + ad + " = ") + len("window." + ad + " = ")
    return json.loads(m[i:m.index("];", i) + 1])


def eski_cikar(onb, taze=False):
    """data/devletler_harita.js + data/donemler.js → {gün: {anahtar: [WKB…]}} (iki kutunun birleşimi)."""
    yol = os.path.join(onb, "eski-%s.pkl" % SURUM)
    if os.path.exists(yol) and not taze:
        return pickle.load(open(yol, "rb"))
    yd = os.path.join(KOK, "data", "devletler_harita.js")
    yo = os.path.join(KOK, "data", "donemler.js")
    if not (os.path.exists(yd) and os.path.exists(yo)):
        raise SystemExit("Eski harita açılmamış. Önce:\n  py arac/kodla.py coz-c data data/devletler_harita.js\n"
                         "  py arac/kodla.py coz-c data data/donemler.js donem")
    ks = [v["kutu"] for v in KUTULAR.values()]
    bx = (min(k[0] for k in ks), min(k[1] for k in ks), max(k[2] for k in ks), max(k[3] for k in ks))

    def poligon(havuz, halkalar):
        hs = [json.loads("[[" + havuz[r] + "]]") for r in halkalar]
        if len(hs[0]) < 3:
            return None
        xs = [p[0] for p in hs[0]]; ys = [p[1] for p in hs[0]]
        if max(xs) < bx[0] or min(xs) > bx[2] or max(ys) < bx[1] or min(ys) > bx[3]:
            return None
        p = Polygon(hs[0], [h for h in hs[1:] if len(h) >= 3])
        if not p.is_valid:
            p = p.buffer(0)
        return None if p.is_empty else p

    out = {g: {} for g in GUNLER}
    soyle("eski harita okunuyor (devletler_harita.js)…")
    m = open(yd, encoding="utf-8").read()
    DH = _dizi(m, "DEVLET_HARITA"); PH = _dizi(m, "DEVLET_PARCA_HALKA")
    havuz = _havuz_parcala(m, "DEVLET_PARCALAR")
    iz = m[m.index("window.URETIM_IZI"):][:20000]
    del m
    for kayit in DH:
        for d in kayit.get("dnm") or []:
            for g in GUNLER:
                if d.get("f") and d.get("t") and gn(d["f"]) <= gn(g) < gn(d["t"]):
                    for i in d.get("g") or []:
                        p = poligon(havuz, PH[i])
                        if p is not None:
                            out[g].setdefault(kayit["id"], []).append(shapely.to_wkb(p))
    del havuz, DH, PH
    soyle("eski harita okunuyor (donemler.js)…")
    m = open(yo, encoding="utf-8").read()
    D = _dizi(m, "DONEMLER"); PH = _dizi(m, "PARCA_HALKA")
    havuz = _havuz_parcala(m, "PARCALAR")
    del m
    for g in GUNLER:
        sec = [d for d in D if gn(d["f"]) <= gn(g) < gn(d["t"])]
        if not sec:
            continue
        for alan, anah in (("o", OSM), ("v", TABI)):
            for i in sec[0].get(alan) or []:
                p = poligon(havuz, PH[i])
                if p is not None:
                    out[g].setdefault(anah, []).append(shapely.to_wkb(p))
    sonuc = (out, {"iz_bas": iz[:300]})
    pickle.dump(sonuc, open(yol, "wb"), protocol=4)
    return sonuc


def eski_raster(eski_gun, kutu, res, anah_ix):
    """Eski gövdeleri kutu ızgarasına döker (satır 0 = KUZEY). Değer = anahtar indeksi, yok = -1."""
    from rasterio import features as rfe
    from rasterio.transform import from_origin
    bx0, by0, bx1, by1 = kutu
    W = int(round((bx1 - bx0) / res)); H = int(round((by1 - by0) / res))
    K = box(*kutu)
    sekil = []
    for anah, wkbler in eski_gun.items():
        for w in wkbler:
            g = shapely.from_wkb(w)
            if g.intersects(K):
                sekil.append((g, anah_ix[anah] + 1))
    if not sekil:
        return np.full((H, W), -1, np.int32)
    r = rfe.rasterize(sekil, out_shape=(H, W), transform=from_origin(bx0, by1, res, res),
                      fill=0, dtype="int32")
    return r - 1


# ───────────────────────── ÇİZİM ─────────────────────────
def hex_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def anah_renk(a, eski_renk=None):
    if a == OSM:
        return hex_rgb(OSM_RENK)
    if a == TABI:
        return hex_rgb(TABI_RENK)
    if a in BOYALAR:
        return hex_rgb(BOYALAR[a][1])
    if eski_renk and a in eski_renk:
        return hex_rgb(eski_renk[a])
    return (150, 150, 150)


def anah_ad(a):
    if a == OSM:
        return "Osmanlı"
    if a == TABI:
        return "Osmanlı (tâbi)"
    if a in BOYALAR:
        return BOYALAR[a][0].split("(")[0].strip()
    return a


DENIZ_RGB = (214, 228, 238)
KARA_RGB = (242, 238, 228)


def resim_kur(L, kara_ince, lut):
    """L: ince etiket (-1 boyasız). Döner RGB."""
    H, W = L.shape
    img = np.empty((H, W, 3), np.uint8)
    img[:] = DENIZ_RGB
    img[kara_ince] = KARA_RGB
    m = kara_ince & (L >= 0)
    img[m] = lut[L[m]]
    # sınır: farklı sahipli komşu piksel
    Lk = np.where(kara_ince, L, -9)
    s = np.zeros((H, W), bool); z = np.zeros((H, W), bool); kiyi = np.zeros((H, W), bool)
    for a, b in ((Lk[:, :-1], Lk[:, 1:]), (Lk[:-1, :], Lk[1:, :])):
        f = a != b
        dev = f & (a >= 0) & (b >= 0)
        bos = f & (((a >= 0) & (b == -1)) | ((a == -1) & (b >= 0)))
        ky = f & ((a == -9) | (b == -9))
        if a.shape[1] == W - 1:
            s[:, :-1] |= dev; z[:, :-1] |= bos; kiyi[:, :-1] |= ky
        else:
            s[:-1, :] |= dev; z[:-1, :] |= bos; kiyi[:-1, :] |= ky
    img[kiyi] = (110, 130, 150)
    img[z] = (img[z] * 0.55 + np.array([90, 90, 90]) * 0.45).astype(np.uint8)
    img[s] = (40, 40, 40)
    return img


def yeni_ince(dizi2, st, dolgu=-1):
    """Izgara (satır 0 GÜNEY, pencere) → kutu, ince çözünürlük, satır 0 KUZEY; kıyı ince maskeden."""
    x0, y0, nx, ny = st["izg"]
    bx0, by0, bx1, by1 = st["kutu"]
    i0 = int(round((bx0 - x0) / ADIM)); i1 = int(round((bx1 - x0) / ADIM))
    j0 = int(round((by0 - y0) / ADIM)); j1 = int(round((by1 - y0) / ADIM))
    a = np.flipud(dizi2[j0:j1, i0:i1])
    k = np.flipud(st["kara"][j0:j1, i0:i1])
    A = np.repeat(np.repeat(a, INCE, 0), INCE, 1)
    Kk = np.repeat(np.repeat(k, INCE, 0), INCE, 1)
    ince = st["kara_ince"]
    # ince maskede kara, ızgarada su olan kıyı pikseli: en yakın ızgara-kara pikselinden (≤ INCE+1 px)
    eks = ince & ~Kk
    if eks.any():
        uz, (ri, ci) = ndimage.distance_transform_edt(~Kk, return_indices=True)
        yak = eks & (uz <= INCE + 1)
        A = A.copy()
        A[yak] = A[ri[yak], ci[yak]]
        A[eks & ~yak] = dolgu
    return A


def etiket_koy(ax, L, anahlar, alan_px, kutu, en_cok=14, taban_px=900):
    import matplotlib.patheffects as pe
    bx0, by0, bx1, by1 = kutu
    H, W = L.shape
    sirali = sorted(range(len(anahlar)), key=lambda i: -alan_px[i])[:en_cok]
    for i in sirali:
        if alan_px[i] < taban_px:
            continue
        m = (L == i)
        comp, n = ndimage.label(m)
        if not n:
            continue
        boy = ndimage.sum(m, comp, np.arange(1, n + 1))
        c = int(np.argmax(boy)) + 1
        sl = ndimage.find_objects(comp)[c - 1]
        alt = np.pad(comp[sl] == c, 1)
        dt = ndimage.distance_transform_edt(alt)
        r, cc = np.unravel_index(np.argmax(dt), dt.shape)
        r += sl[0].start - 1; cc += sl[1].start - 1
        x = bx0 + (cc + 0.5) / W * (bx1 - bx0); y = by1 - (r + 0.5) / H * (by1 - by0)
        ax.text(x, y, anah_ad(anahlar[i]), fontsize=7.5, ha="center", va="center", color="#111",
                path_effects=[pe.withStroke(linewidth=2.2, foreground="white")], zorder=8)


def ortak_cizgiler(ax, st, hatlar, kay, tarihsiz_xy, kutu, nokta=True):
    from matplotlib.collections import LineCollection
    K = box(*kutu)
    for sinif, renk, kal in ((2, "#5b8fc4", 0.35), (1, "#2f6fb0", 0.7)):
        seg = [np.asarray(l.coords) for l, s in zip(st["nehir"], st["nehir_sinif"])
               if s == sinif and l.intersects(K)]
        if seg:
            ax.add_collection(LineCollection(seg, colors=renk, linewidths=kal, zorder=4))
    if hatlar:
        seg = [np.asarray(l.coords) for l in hatlar if l.intersects(K)]
        if seg:
            ax.add_collection(LineCollection(seg, colors="black", linewidths=1.6, linestyles=(0, (4, 2)), zorder=6))
    if nokta and kay:
        b = [(k["lon"], k["lat"]) for k in kay if k["tur"] == "boyar" and k["k"] < 4]
        b4 = [(k["lon"], k["lat"]) for k in kay if k["tur"] == "boyar" and k["k"] >= 4]
        bz = [(k["lon"], k["lat"]) for k in kay if k["tur"] == "boyamaz"]
        if b4:
            ax.scatter(*zip(*b4), s=1.2, c="#222", linewidths=0, zorder=7, alpha=0.75)
        if b:
            ax.scatter(*zip(*b), s=4.5, c="black", linewidths=0, zorder=7)
        if bz:
            ax.scatter(*zip(*bz), s=16, facecolors="none", edgecolors="black", linewidths=0.8, zorder=7)
        if tarihsiz_xy:
            ax.scatter(*zip(*tarihsiz_xy), s=16, marker="x", c="#555", linewidths=0.8, zorder=7)
    ax.set_xlim(kutu[0], kutu[2]); ax.set_ylim(kutu[1], kutu[3])


def beyan_satirlari(st, senaryo):
    egim = ("EĞİM VAR (%s, çarpan 0,005)" % st["dem"]) if st.get("dem") else \
        "🔴 EĞİM YOK — yükseklik verisi bu makinede bulunamadı, sürtünme yalnız nehir bedeli"
    return [
        "%s · %s · %s · ızgara 0,05° · hesap penceresi kutudan her yöne 8° geniş, resim kutuya kırpıldı" % (
            KUTULAR[st["kod"]]["ad"], senaryo["gun"], egim),
        "SOL = yayındaki harita (Koşu 39, 5 günlük bant; eski B dolgusu YOK, Koşu 40 bitmedi) — yani \"eski A\" ile "
        "\"yeni tek yapı\" karşılaştırılıyor. Eski koşunun girdisi bugünkü veriden geridedir.",
        "SAĞ = 13 kural prototipi. EKSİK/SAPMA: K11 geçit listesi yok → eski boğaz yasağı + kıstak köprüsü, yerleşimsiz ada "
        "boyanmaz · K3 k:4 kendi yazılı sahibiyle kaynak (abi-merkez verisi yok) · K12 himaye/alt künye yok · K13 yok (her gün baştan)",
        "K2: tarihsiz kabile/devletsiz nokta sahnede sayılmadı (× işareti) · K9 dar yorum: denize değen cep dolmaz · "
        "siyah kesik çizgi = o gün geçerli antlaşma hattı (K10) · mavi = nehir · ● kaynak · ○ boyamayan kaynak",
    ]


def ciz_eski_yeni(st, senaryo, sonuc, eskiL, anahlar, lut, alan_e, alan_y, yol):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    kutu = st["kutu"]
    bx0, by0, bx1, by1 = kutu
    yeniL = yeni_ince(sonuc["boya_ortak"], st)
    oran = (by1 - by0) / ((bx1 - bx0) * math.cos(math.radians((by0 + by1) / 2)))
    pw = eskiL.shape[1] / 100.0            # ince raster 1:1 piksel
    ph = pw * oran
    fig = plt.figure(figsize=(2 * pw + 0.6, ph + 2.3), dpi=100)
    alt = 1.55 / (ph + 2.3); ust = 0.55 / (ph + 2.3)
    gen = pw / (2 * pw + 0.6)
    bosl = 0.2 / (2 * pw + 0.6)
    for n, (L, baslik) in enumerate(((eskiL, "ESKİ — yayındaki harita (Koşu 39, 5 günlük bant)"),
                                     (yeniL, "YENİ — 13 kural prototipi (tek yapı)"))):
        ax = fig.add_axes([bosl + n * (gen + bosl), alt, gen, 1 - alt - ust])
        img = resim_kur(L, st["kara_ince"], lut)
        ax.imshow(img, extent=(bx0, bx1, by0, by1), origin="upper", interpolation="nearest",
                  aspect=1.0 / math.cos(math.radians((by0 + by1) / 2)), zorder=1)
        ortak_cizgiler(ax, st, senaryo["hatlar"], senaryo["kay"], senaryo["tarihsiz_xy"], kutu)
        apx = np.bincount(L[L >= 0], minlength=len(anahlar))
        etiket_koy(ax, L, anahlar, apx, kutu)
        ax.set_title("%s · %s · boyalı %s km²" % (baslik, senaryo["gun"],
                                                  "{:,.0f}".format(alan_e if n == 0 else alan_y).replace(",", ".")),
                     fontsize=14)
        ax.tick_params(labelsize=7)
    for i, s in enumerate(beyan_satirlari(st, senaryo)):
        fig.text(0.008, (1.25 - i * 0.30) / (ph + 2.3), s, fontsize=9.5, ha="left", va="center")
    fig.savefig(yol, dpi=100)
    plt.close(fig)


KATMAN_RENK = {1: (120, 160, 120), 2: (240, 170, 60), 3: (70, 150, 220), 4: (200, 70, 160),
               5: (170, 170, 170), 6: (250, 235, 130)}
KATMAN_AD = {1: "çekirdek — kaynağına ≤ 5 gün (K6)", 2: "şerit — iki komşu kaynak arası ≤ 20 gün (K7)",
             3: "deniz şeridi — kaynak–deniz ≤ 10 gün, en az iki komşu (K8)",
             4: "delik — tek devletle çevrili boşluk (K9)",
             5: "boyamayan kaynağın toprağı — kimseye verilmez (K2)",
             6: "kıyı cebi — tek devlet + deniz arasında kalan; DAR yorumda BOYANMADI"}


def ciz_katman(st, senaryo, sonuc, yol, ek=None, baslik=None):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.patches import Patch
    from matplotlib.collections import LineCollection
    kutu = st["kutu"]
    bx0, by0, bx1, by1 = kutu
    x0, y0, nx, ny = st["izg"]
    Kt = yeni_ince(sonuc["kat"].astype(np.int32), st, dolgu=0)
    Bo = yeni_ince(sonuc["boya_ortak"], st)
    ince = st["kara_ince"]
    H, W = Kt.shape
    img = np.empty((H, W, 3), np.uint8)
    img[:] = DENIZ_RGB
    img[ince] = KARA_RGB
    for k, r in KATMAN_RENK.items():
        img[ince & (Kt == k)] = r
    Lk = np.where(ince, Bo, -9)
    s = np.zeros((H, W), bool)
    s[:, :-1] |= (Lk[:, :-1] != Lk[:, 1:]) & (Lk[:, :-1] >= 0) & (Lk[:, 1:] >= 0)
    s[:-1, :] |= (Lk[:-1, :] != Lk[1:, :]) & (Lk[:-1, :] >= 0) & (Lk[1:, :] >= 0)
    img[s] = (30, 30, 30)
    oran = (by1 - by0) / ((bx1 - bx0) * math.cos(math.radians((by0 + by1) / 2)))
    pw = 26.0; ph = pw * oran
    fig = plt.figure(figsize=(pw + 0.4, ph + 2.6), dpi=100)
    alt = 1.9 / (ph + 2.6); ust = 0.5 / (ph + 2.6)
    ax = fig.add_axes([0.2 / (pw + 0.4), alt, pw / (pw + 0.4), 1 - alt - ust])
    ax.imshow(img, extent=(bx0, bx1, by0, by1), origin="upper", interpolation="nearest",
              aspect=1.0 / math.cos(math.radians((by0 + by1) / 2)), zorder=1)

    def xy(z):
        z = np.asarray(z, np.int64)
        j, i = np.divmod(z, nx)
        return np.column_stack([x0 + (i + 0.5) * ADIM, y0 + (j + 0.5) * ADIM])
    s7 = [xy(z) for z, _, _, _ in sonuc["yollar7"]]
    s8 = [xy(z) for z, _, _ in sonuc["yollar8"]]
    if s7:
        ax.add_collection(LineCollection(s7, colors="#7a3b00", linewidths=0.35, alpha=0.55, zorder=5))
    if s8:
        ax.add_collection(LineCollection(s8, colors="#0b3c7a", linewidths=0.6, alpha=0.9, zorder=5))
    ortak_cizgiler(ax, st, senaryo["hatlar"], senaryo["kay"], senaryo["tarihsiz_xy"], kutu)
    ax.set_title(baslik or "YENİ haritanın KATMANLARI — %s · %s (hangi toprak hangi kuraldan geliyor)" % (
        KUTULAR[st["kod"]]["ad"], senaryo["gun"]), fontsize=15)
    if ek:
        ek(ax)
    al = sonuc["katman_km2"]
    el = [Patch(facecolor=np.array(KATMAN_RENK[k]) / 255.0, edgecolor="#333",
                label="%s — %s km²" % (KATMAN_AD[k], "{:,.0f}".format(al.get(k, 0)).replace(",", ".")))
          for k in (1, 2, 3, 4, 5, 6)]
    ax.legend(handles=el, loc="lower left", fontsize=10, framealpha=0.92)
    ax.tick_params(labelsize=7)
    satir = beyan_satirlari(st, senaryo)
    satir[1] = ("Kahverengi ince çizgi = K7 yolu (iki komşu kaynak arası en kısa sürtünmeli yol, ≤ 20 gün) · lacivert ince çizgi = "
                "K8 yolu (kaynak → en yakın kıyı) · koyu çizgi = devlet sınırı")
    for i, s_ in enumerate(satir):
        fig.text(0.008, (1.55 - i * 0.33) / (ph + 2.6), s_, fontsize=10, ha="left", va="center")
    fig.savefig(yol, dpi=100)
    plt.close(fig)


# ───────────────────────── KURAL SINAMASI (uydurma sahne) ─────────────────────────
def sinama(a):
    """Kuralların İKİ YÖNDE sınaması: gerçek yerleşimler YOK, çöle elle konmuş yedi uydurma kaynak.
    Emre'nin örneği: 'çölde iki devlet, aralarındaki bölge 15 günlük → silindir gibi birleşir';
    > 20 gün ise birleşmez; tek kaynaktan denize dil uzamaz, iki komşudan uzar."""
    st = statik_kur("misir-arabistan", a.onbellek, a.taze)
    nokta = [("A", 41.0, 27.0, "sinama-1"), ("B", 46.5, 27.0, "sinama-2"),      # ≈ 15 gün
             ("C", 27.0, 26.5, "sinama-3"), ("D", 27.0, 16.5, "sinama-4"),      # > 20 gün
             ("E", 34.7, 19.0, "sinama-5"),                                     # denize ≈ 7 gün, yalnız
             ("F", 55.5, 21.0, "sinama-6"), ("G", 54.5, 19.8, "sinama-6")]      # denize ≤ 10 gün, iki komşu
    kay = [{"idx": -1, "ad": n, "lon": x, "lat": y, "tur": "boyar", "anah": d, "k": 1} for n, x, y, d in nokta]
    tohum_yerlestir(st, kay)
    son = hesapla(st, kay, [])
    son["boya_ortak"] = son["boya"]
    x0, y0, nx, ny = st["izg"]
    bx0, by0, bx1, by1 = st["kutu"]
    i0 = int(round((bx0 - x0) / ADIM)); i1 = int(round((bx1 - x0) / ADIM))
    j0 = int(round((by0 - y0) / ADIM)); j1 = int(round((by1 - y0) / ADIM))
    alan = (alan_satir(y0, ny)[:, None] * np.ones((1, nx)))[j0:j1, i0:i1]
    kat_k = son["kat"][j0:j1, i0:i1]
    son["katman_km2"] = {int(k): float(alan[kat_k == k].sum()) for k in range(1, 7)}
    cift = {(kay[x]["ad"], kay[y]["ad"]): d / KM_SAAT / GUN_SAAT for x, y, d in son["ciftler"]}
    deniz = {kay[i]["ad"]: float(son["dsea"][i] / KM_SAAT / GUN_SAAT) for i in range(len(kay))}
    soyle("SINAMA çift uzaklıkları (gün):", {k: round(v, 1) for k, v in cift.items()})
    soyle("SINAMA denize uzaklık (gün):", {k: round(v, 1) for k, v in deniz.items()})

    def ek(ax):
        import matplotlib.patheffects as pe
        for n, x, y, d in nokta:
            ax.text(x + 0.25, y + 0.25, n, fontsize=20, fontweight="bold", color="black",
                    path_effects=[pe.withStroke(linewidth=3, foreground="white")], zorder=9)
    senaryo = {"gun": "SINAMA (uydurma sahne)", "kay": kay, "hatlar": [], "tarihsiz_xy": []}
    p = os.path.join(a.cikti, "sinama-kurallar.png")
    ciz_katman(st, senaryo, son, p, ek=ek,
               baslik="KURAL SINAMASI — gerçek yerleşim YOK, çöle konmuş 7 uydurma kaynak: "
                      "A–B %.1f gün (şerit OLMALI) · C–D %.1f gün (şerit OLMAMALI) · E yalnız, denize %.1f gün (dil OLMAMALI) · "
                      "F, G denize %.1f / %.1f gün (deniz şeridi OLMALI)" % (
                          cift.get(("A", "B"), float("nan")), cift.get(("C", "D"), float("nan")),
                          deniz["E"], deniz["F"], deniz["G"]))
    json.dump({"cift_gun": {"%s-%s" % k: v for k, v in cift.items()}, "deniz_gun": deniz,
               "katman_km2": son["katman_km2"], "olc": son["olc"]},
              open(os.path.join(a.cikti, "sinama-olcum.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    soyle("  →", os.path.basename(p))


# ───────────────────────── ANA AKIŞ ─────────────────────────
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kutu", action="append")
    ap.add_argument("--gun", action="append")
    ap.add_argument("--sinama", action="store_true", help="uydurma sahneyle kural sınaması (tek PNG)")
    ap.add_argument("--taze", action="store_true", help="önbelleği yeniden kur")
    ap.add_argument("--onbellek", default=os.path.join(tempfile.gettempdir(), "yeni-motor-prototip-1128"))
    ap.add_argument("--cikti", default=BURASI)
    a = ap.parse_args()
    os.makedirs(a.onbellek, exist_ok=True)
    if a.sinama:
        sinama(a)
        return
    kutular = a.kutu or list(KUTULAR)
    gunler = a.gun or GUNLER
    Y, HA, tabi = veri_yukle()
    soyle("veri: %d yerleşim · %d künyede harita: · %d tâbi pencereli künye" % (len(Y), len(HA), len(tabi)))
    ham, ndos = hatlari_oku(a.onbellek, a.taze)
    soyle("antlaşma hattı: %d kayıt (%d dosya)" % (len(ham), ndos))
    eski, eski_iz = eski_cikar(a.onbellek, a.taze)
    olcum_yol = os.path.join(a.cikti, "olcum.json")
    olcum = json.load(open(olcum_yol, encoding="utf-8")) if os.path.exists(olcum_yol) else {}
    for kod in kutular:
        st = statik_kur(kod, a.onbellek, a.taze)
        x0, y0, nx, ny = st["izg"]
        kutu = st["kutu"]
        bx0, by0, bx1, by1 = kutu
        i0 = int(round((bx0 - x0) / ADIM)); i1 = int(round((bx1 - x0) / ADIM))
        j0 = int(round((by0 - y0) / ADIM)); j1 = int(round((by1 - y0) / ADIM))
        alan = (alan_satir(y0, ny)[:, None] * np.ones((1, nx)))[j0:j1, i0:i1]
        kara_k = st["kara"][j0:j1, i0:i1]
        for g in gunler:
            ts = time.perf_counter()
            soyle("══ %s · %s" % (kod, g))
            kay, say, borc, tarihsiz, renksiz = kaynak_listesi(Y, HA, g, st["pen"])
            tolc = tohum_yerlestir(st, kay)
            hatlar, hsay = aktif_hatlar(ham, tabi, g, st["pen"])
            soyle("  kaynak:", say, "· tohum:", tolc, "· hat:", hsay)
            son = hesapla(st, kay, hatlar)
            soyle("  hesap %.1f sn (Dijkstra %.1f, şerit %.1f) · %s" % (
                son["olc"]["hesap_sn"], son["olc"]["dijkstra_sn"], son["olc"]["serit_sn"],
                {k: v for k, v in son["olc"].items() if not k.endswith("_sn")}))
            # ortak anahtar uzayı (eski ∪ yeni)
            eg = eski.get(g, {})
            anahlar = sorted(set(son["anahlar"]) | set(eg))
            aix = {k: i for i, k in enumerate(anahlar)}
            cev = np.array([aix[k] for k in son["anahlar"]] + [-1], np.int32)
            son["boya_ortak"] = np.where(son["boya"] >= 0, cev[son["boya"]], -1).astype(np.int32)
            lut = np.array([anah_renk(k) for k in anahlar], np.uint8)
            # alanlar (kutu içi, 0,05° ızgara, aynı kara maskesi)
            yeni_k = son["boya_ortak"][j0:j1, i0:i1]
            eski_k = np.flipud(eski_raster(eg, kutu, ADIM, aix))
            eski_k = np.where(kara_k, eski_k, -1)
            ay = np.bincount(yeni_k[yeni_k >= 0], weights=alan[yeni_k >= 0], minlength=len(anahlar))
            ae = np.bincount(eski_k[eski_k >= 0], weights=alan[eski_k >= 0], minlength=len(anahlar))
            kat_k = son["kat"][j0:j1, i0:i1]
            katman_km2 = {int(k): float(alan[kat_k == k].sum()) for k in range(1, 7)}
            son["katman_km2"] = katman_km2
            fark = sorted(range(len(anahlar)), key=lambda i: -abs(ay[i] - ae[i]))[:10]
            # sınır kenarlarının nehre oturma oranı (açık konu b): farklı devletli komşu hücre çifti
            def nehir_orani(L2):
                Lp = np.full((ny, nx), -1, np.int64)
                Lp[j0:j1, i0:i1] = L2
                lf = Lp.ravel()
                a_, b_ = lf[st["e_u"]], lf[st["e_v"]]
                m = (a_ >= 0) & (b_ >= 0) & (a_ != b_) & (st["e_u"] < st["e_v"])
                return int(m.sum()), int((m & st["e_nehir"]).sum())
            ne_t, ne_n = nehir_orani(eski_k)
            ny_t, ny_n = nehir_orani(yeni_k)
            # çizim
            senaryo = {"gun": g, "kay": kay, "hatlar": hatlar,
                       "tarihsiz_xy": [(Y[i]["lon"], Y[i]["lat"]) for i in tarihsiz
                                       if bx0 <= Y[i]["lon"] <= bx1 and by0 <= Y[i]["lat"] <= by1]}
            eskiL = eski_raster(eg, kutu, ADIM / INCE, aix)
            p1 = os.path.join(a.cikti, "%s-%s-eski-yeni.png" % (kod, g))
            p2 = os.path.join(a.cikti, "%s-%s-katman.png" % (kod, g))
            ciz_eski_yeni(st, senaryo, son, eskiL, anahlar, lut, ae.sum(), ay.sum(), p1)
            ciz_katman(st, senaryo, son, p2)
            sure = time.perf_counter() - ts
            kutu_ici = [k for k in kay if bx0 <= k["lon"] < bx1 and by0 <= k["lat"] < by1]
            olcum["%s|%s" % (kod, g)] = {
                "kutu": KUTULAR[kod]["ad"], "gun": g, "egim": st.get("dem") or "YOK",
                "kara_km2": float(alan[kara_k].sum()),
                "boyali_eski_km2": float(ae.sum()), "boyali_yeni_km2": float(ay.sum()),
                "katman_km2": katman_km2,
                "en_cok_degisen": [{"devlet": anahlar[i], "ad": anah_ad(anahlar[i]), "eski_km2": float(ae[i]),
                                    "yeni_km2": float(ay[i]), "fark_km2": float(ay[i] - ae[i])} for i in fark],
                "kaynak_sayim_pencere": say, "kaynak_kutu_ici": len(kutu_ici),
                "boyamayan_kutu_ici": sum(1 for k in kutu_ici if k["tur"] == "boyamaz"),
                "tarihsiz_kabile_devletsiz_kutu_ici": len(senaryo["tarihsiz_xy"]),
                "veri_borcu": borc, "renksiz_kimlik": renksiz, "tohum": tolc, "hat": hsay,
                "hesap": son["olc"],
                "sinir_kenari": {"eski_toplam": ne_t, "eski_nehirde": ne_n,
                                 "yeni_toplam": ny_t, "yeni_nehirde": ny_n},
                "senaryo_sn": sure, "tepe_bellek_mb": tepe_bellek_mb(),
                "statik": st["olcum"],
            }
            json.dump(olcum, open(olcum_yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
            soyle("  boyalı: eski %.0f · yeni %.0f km² · katman %s · %.0f sn · tepe bellek %.0f MB" % (
                ae.sum(), ay.sum(), {k: round(v) for k, v in katman_km2.items()}, sure, tepe_bellek_mb()))
            soyle("  →", os.path.basename(p1), "·", os.path.basename(p2))
    soyle("BİTTİ · tepe bellek %.0f MB" % tepe_bellek_mb())


if __name__ == "__main__":
    main()

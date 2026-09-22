# -*- coding: utf-8 -*-
"""P13B · BOĞAZ kümesi ÖLÇÜMÜ (0008/H-0005 · 0016/H-0004 · H-0005 · 0019/H-0018 · H-0019 ·
0031/H-0022 · parti-0002/H-0014). Kod değişikliği YOK.
Soru: motorun KARA-KISITLI SAHİPLİK ızgarası (KV_ADIM) hangi dar suları GÖREMİYOR?
Tanım — GİZLİ BOĞAZ KENARI: ızgarada iki komşu hücrenin ikisi de KARA, ama iki merkezi
birleştiren doğru parçası üzerindeki 7 örnekten en az biri motorun KARA maskesinin
DIŞINDA (su). Dijkstra bu kenardan geçiyor; gerçek maske geçmiyor.
İkinci kısım: koşu 10 PETEK_D (petek_govde.js) içinde Boğaz/Çanakkale yerleşimlerinin
peteğinin KARŞI YAKAYA düşen parçaları, alanı ve KV_MIN_KM2 eşiğine göre durumu."""
import io, json, os, sys, time, importlib.util, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\atlas"
import numpy as np
import shapely
from shapely.geometry import Polygon, MultiPolygon, Point, LineString

sp = importlib.util.spec_from_file_location("p13b_kara", os.path.join(KOK, "denetim", "ARAC-P13B-KARA-0914.py"))
km_ = importlib.util.module_from_spec(sp); sp.loader.exec_module(km_)
KARA, GOLLER, BOLGE, kns = km_.kara_goller()
ADIM = kns["KV_ADIM"]; KVMIN = kns["KV_MIN_KM2"]
x0, y0, x1, y1 = BOLGE.bounds
nx, ny = int(round((x1 - x0) / ADIM)), int(round((y1 - y0) / ADIM))
xs = x0 + (np.arange(nx) + 0.5) * ADIM
ys = y0 + (np.arange(ny) + 0.5) * ADIM
shapely.prepare(KARA)
t0 = time.time()
kara = np.zeros((ny, nx), dtype=bool)
for j in range(ny):
    kara[j] = shapely.contains_xy(KARA, xs, np.full(nx, ys[j]))
print(f"ızgara {nx}×{ny} · kara {int(kara.sum()):,} · {time.time()-t0:.0f} sn (motorla aynı yöntem: contains_xy)")
su = ~kara
R = 4
bant = su.copy()
for k in range(1, R + 1):
    bant[:, k:] |= su[:, :-k]; bant[:, :-k] |= su[:, k:]
b2 = bant.copy()
for k in range(1, R + 1):
    b2[k:, :] |= bant[:-k, :]; b2[:-k, :] |= bant[k:, :]
aday = kara & b2
J, I = np.nonzero(aday)
print(f"suya ≤{R} hücre kara hücresi (aday bant) {len(J):,}")
TS = [k / 8.0 for k in range(1, 8)]
gizli = []
t0 = time.time()
for di, dj in ((1, 0), (0, 1), (1, 1), (1, -1)):
    I2, J2 = I + di, J + dj
    ok = (I2 >= 0) & (I2 < nx) & (J2 >= 0) & (J2 < ny)
    Ia, Ja, Ib, Jb = I[ok], J[ok], I2[ok], J2[ok]
    iki_kara = kara[Jb, Ib]
    Ia, Ja, Ib, Jb = Ia[iki_kara], Ja[iki_kara], Ib[iki_kara], Jb[iki_kara]
    kesik = np.zeros(len(Ia), dtype=bool)
    for t in TS:
        px = xs[Ia] + di * ADIM * t
        py = ys[Ja] + dj * ADIM * t
        kesik |= ~shapely.contains_xy(KARA, px, py)
    for a, b, c, d in zip(Ia[kesik], Ja[kesik], Ib[kesik], Jb[kesik]):
        gizli.append((int(a), int(b), int(c), int(d)))
print(f"GİZLİ BOĞAZ KENARI (iki ucu kara, arası su): {len(gizli):,} · {time.time()-t0:.0f} sn")
# kümele
isaret = {}
for a, b, c, d in gizli:
    isaret.setdefault((a, b), 0); isaret[(a, b)] += 1
    isaret.setdefault((c, d), 0); isaret[(c, d)] += 1
gor, kumeler = set(), []
for h in isaret:
    if h in gor:
        continue
    yig, kum = [h], []
    gor.add(h)
    while yig:
        u = yig.pop(); kum.append(u)
        for da in (-1, 0, 1):
            for db in (-1, 0, 1):
                v = (u[0] + da, u[1] + db)
                if v in isaret and v not in gor:
                    gor.add(v); yig.append(v)
    kumeler.append(kum)
kumeler.sort(key=lambda k: -len(k))
print(f"küme {len(kumeler)} · en büyük 25:")
for k in kumeler[:25]:
    lo = [xs[a] for a, _ in k]; la = [ys[b] for _, b in k]
    print(f"   {len(k):>4} hücre · {np.mean(la):7.2f}K {np.mean(lo):8.2f}D · "
          f"kutu {min(la):.2f}-{max(la):.2f}K / {min(lo):.2f}-{max(lo):.2f}D")
ADLI = {"İstanbul Boğazı": (40.95, 41.30, 28.90, 29.20), "Çanakkale Boğazı": (39.95, 40.55, 26.10, 26.95),
        "Messina": (38.05, 38.35, 15.50, 15.75), "Kerç": (45.10, 45.50, 36.35, 36.75),
        "Pag": (44.25, 44.75, 14.70, 15.35), "Vardø": (70.25, 70.45, 30.90, 31.25),
        "Saroz girişi": (40.35, 40.75, 26.00, 26.80)}
print("adlı dar sular — gizli kenar sayısı:")
for ad, (la0, la1, lo0, lo1) in ADLI.items():
    n = sum(1 for a, b, c, d in gizli if la0 <= ys[b] <= la1 and lo0 <= xs[a] <= lo1)
    tr = LineString([((lo0 + lo1) / 2, la0), ((lo0 + lo1) / 2, la1)])
    print(f"   {ad:<18} {n:>4}")

# ── ikinci kısım: karşı yaka parçaları (koşu 10 PETEK_D) ─────────────────────
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi


def pencere(yol, adlar):
    s = io.open(yol, encoding="utf-8").read()
    out = {}
    for ad in adlar:
        a = "window." + ad + " = "; i = s.find(a)
        out[ad] = json.loads(s[i + len(a):s.find(";\n", i)])
    return out


pg = pencere(os.path.join(KOK, "data", "petek_govde.js"), ["PETEK_GOVDE_PARCA", "PETEK_GOVDE"])
eski_ad = [p["a"] for p in pencere(os.path.join(KOK, "data", "donemler.js"), ["PETEKLER"])["PETEKLER"]]
Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
BOGAZ = [(29.13, 41.23), (29.08, 41.17), (29.06, 41.10), (29.03, 41.04), (28.99, 41.00)]
CANAK = [(26.18, 40.02), (26.33, 40.09), (26.40, 40.15), (26.41, 40.21), (26.55, 40.33),
         (26.68, 40.41), (26.85, 40.48)]


def yaka(pt, hat):
    """hat boyunca yönlü çizgiye göre işaret: +1 sol, −1 sağ (en yakın segment)."""
    best, s = 9e9, 0
    for (ax, ay), (bx, by) in zip(hat, hat[1:]):
        L = LineString([(ax, ay), (bx, by)])
        dd = L.distance(pt)
        if dd < best:
            best = dd
            s = 1 if ((bx - ax) * (pt.y - ay) - (by - ay) * (pt.x - ax)) > 0 else -1
    return s, best


def km2(g, lat):
    return g.area * 111.32 * 110.574 * math.cos(math.radians(lat))


ARANAN = ["İstanbul", "Üsküdar", "Rumeli Hisarı", "Anadolu Hisarı", "Kilitbahir", "Çanakkale",
          "Çimpe", "Gelibolu", "Maydos", "Eceabat", "Lapseki", "Kadıköy", "Galata"]
print("karşı yaka parçaları (koşu 10 PETEK_D):")
for i, ad in enumerate(eski_ad):
    if not any(ad.startswith(a) for a in ARANAN):
        continue
    y = Y.get(ad)
    if not y:
        continue
    p = Point(y["lon"], y["lat"])
    hat = BOGAZ if y["lon"] > 28.5 else CANAK
    ys_, _ = yaka(p, hat)
    ps = [Polygon(pg["PETEK_GOVDE_PARCA"][j][0], pg["PETEK_GOVDE_PARCA"][j][1:])
          for j in pg["PETEK_GOVDE"][i]]
    satir = []
    for q in ps:
        r = q.representative_point()
        yr, d = yaka(r, hat)
        a = km2(q, r.y)
        karsi = (yr != ys_ and d < 0.6)
        satir.append(f"{a:,.0f} km²{' KARŞI YAKA' if karsi else ''}"
                     f"{' (<KV_MIN ' + str(int(KVMIN)) + ' ⇒ ızgaraya SORULMAZ)' if karsi and a < KVMIN else ''}")
    print(f"   {ad:<28} {len(ps)} parça: " + " · ".join(satir))

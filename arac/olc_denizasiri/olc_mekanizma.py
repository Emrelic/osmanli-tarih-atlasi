# -*- coding: utf-8 -*-
"""ADIM 2a — IKI SORU

SORU 1 (koordinatorun ⑥): Pag/Vardo GERCEK IHLAL mi, benim maskemin artigi mi?
   -> maske disi 10 tohum listesinde YOKLAR (ayri olculdu) => GERCEK.
   Burada MEKANIZMAYI ariyoruz: nicin ADA KURALI onlari kesmiyor?
   HIPOTEZ: KARA-KISITLI SAHIPLIK'in 0.05° (~5,5 km) izgarasi dar bogazlari
   GOREMIYOR; adayi anakaraya BAGLI sanip anakara parcasini adaya veriyor
   -> yani ADA KURALI'nin kestigini SONRAKI ASAMA geri veriyor.
   (uret_petek.py:1114 KV_ADIM = 0.05)

SORU 2 (koordinatorun ③): "kara yolu / duz hat orani" Tromso ile Kilitbahir'i
   ayirir mi?  HIPOTEZ KOORDINATORUN, olcum benim. Curutmeye hazirim.

Salt okuma.
"""
import json, os, sys, math, pickle, heapq

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
SCR = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\a5479cb4-16ee-4def-832f-307c172e7614\scratchpad"
sys.path.insert(0, os.path.join(KOK, "arac"))

from shapely.geometry import Point, Polygon, MultiPolygon
import shapely, numpy as np
import girdi

KV_ADIM = 0.05                     # motorun kendi izgarasi (uret_petek.py:1114)
R = 6371.0088


def km2(g):
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


def hav(ax, ay, bx, by):
    la1, lo1, la2, lo2 = map(math.radians, (ay, ax, by, bx))
    h = math.sin((la2-la1)/2)**2 + math.cos(la1)*math.cos(la2)*math.sin((lo2-lo1)/2)**2
    return 2 * R * math.asin(min(1, math.sqrt(h)))


YERLER = girdi.yukle(sessiz=True)
KARA = pickle.load(open(os.path.join(SCR, "kara_maskesi.pkl"), "rb"))
shapely.prepare(KARA)


def yerel_izgara(x0, y0, x1, y1, adim=KV_ADIM):
    nx = max(2, int(round((x1 - x0) / adim)))
    ny = max(2, int(round((y1 - y0) / adim)))
    xs = x0 + (np.arange(nx) + 0.5) * adim
    kara = np.zeros((ny, nx), dtype=bool)
    for j in range(ny):
        lat = y0 + (j + 0.5) * adim
        kara[j] = shapely.contains_xy(KARA, xs, np.full(nx, lat))
    return nx, ny, kara


def kara_yolu_km(ax, ay, bx, by, pay=3.0, adim=KV_ADIM):
    """A'dan B'ye YALNIZ kara hucrelerinden Dijkstra. Ulasilamazsa None."""
    x0, x1 = min(ax, bx) - pay, max(ax, bx) + pay
    y0, y1 = min(ay, by) - pay, max(ay, by) + pay
    nx, ny, kara = yerel_izgara(x0, y0, x1, y1, adim)

    def hucre(x, y):
        return (min(nx-1, max(0, int((x - x0)/adim))), min(ny-1, max(0, int((y - y0)/adim))))

    def en_yakin_kara(i, j):
        if kara[j, i]:
            return i, j
        for r in range(1, 6):
            for dj in range(-r, r+1):
                for di in range(-r, r+1):
                    a, b = i+di, j+dj
                    if 0 <= a < nx and 0 <= b < ny and kara[b, a]:
                        return a, b
        return None

    s = en_yakin_kara(*hucre(ax, ay)); t = en_yakin_kara(*hucre(bx, by))
    if s is None or t is None:
        return None
    DY = adim * 111.32
    uz = np.full(nx*ny, np.inf)
    si = s[1]*nx + s[0]; ti = t[1]*nx + t[0]
    uz[si] = 0.0
    q = [(0.0, si)]
    while q:
        d, h = heapq.heappop(q)
        if d > uz[h]:
            continue
        if h == ti:
            return d
        j, i = divmod(h, nx)
        dx = DY * math.cos(math.radians(y0 + (j+0.5)*adim))
        for di, dj in ((1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)):
            a, b = i+di, j+dj
            if not (0 <= a < nx and 0 <= b < ny) or not kara[b, a]:
                continue
            k = b*nx + a
            nd = d + math.hypot(dx*di, DY*dj)
            if nd < uz[k]:
                uz[k] = nd
                heapq.heappush(q, (nd, k))
    return None


# ---------- SORU 1 : Pag / Vardo izgarada anakaraya BAGLI mi ----------
print("=" * 88)
print("SORU 1 — Pag ve Vardo, motorun 0.05° IZGARASINDA anakaraya BAGLI mi?")
print("  (bagli ise: ADA KURALI keser, KARA-KISITLI SAHIPLIK geri verir)")
print("=" * 88)
for hedef, kx, ky in (("Pag (Pago)", 15.019, 44.468), ("Vardø", 31.111, 70.371)):
    # adanin tohumundan, anakaradaki bir noktaya kara yolu var mi?
    # anakara referansi: en yakin 'buyuk bilesen' noktasi -- basitce
    # 1 derece guneye/dogusuna dogru kara arayarak
    nx, ny, kara = yerel_izgara(kx-2.5, ky-2.0, kx+2.5, ky+2.0)
    # ada hucresinden baslayarak izgara-baglantili bileseni bul
    def hc(x, y):
        return (min(nx-1, max(0, int((x-(kx-2.5))/KV_ADIM))),
                min(ny-1, max(0, int((y-(ky-2.0))/KV_ADIM))))
    si, sj = hc(kx, ky)
    if not kara[sj, si]:
        bulundu = False
        for r in range(1, 5):
            for dj in range(-r, r+1):
                for di in range(-r, r+1):
                    a, b = si+di, sj+dj
                    if 0 <= a < nx and 0 <= b < ny and kara[b, a]:
                        si, sj = a, b; bulundu = True; break
                if bulundu: break
            if bulundu: break
    yig = [(si, sj)]
    gor = np.zeros_like(kara)
    gor[sj, si] = True
    n = 0
    while yig:
        i, j = yig.pop()
        n += 1
        for di, dj in ((1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)):
            a, b = i+di, j+dj
            if 0 <= a < nx and 0 <= b < ny and kara[b, a] and not gor[b, a]:
                gor[b, a] = True
                yig.append((a, b))
    toplam_kara = int(kara.sum())
    print("  %-12s izgara bileseni %5d hucre / bolgedeki toplam kara %5d hucre  (%%%.1f)"
          % (hedef, n, toplam_kara, 100.0*n/max(toplam_kara, 1)))
    print("               => %s"
          % ("ANAKARAYA BAGLI (izgara dar bogazi GOREMIYOR)" if n > 0.30*toplam_kara
             else "AYRI kalmis (izgara bogazi goruyor)"))

# ---------- SORU 2 : kara yolu / duz hat orani ----------
print()
print("=" * 88)
print("SORU 2 — 'kara yolu / duz hat orani' Tromso ile Kilitbahir'i ayirir mi?")
print("  (hipotez KOORDINATORUN; olcum benim)")
print("=" * 88)
S = json.load(open(os.path.join(SCR, "gorunur_kusur.json"), encoding="utf-8"))
parcalar = {}
for satir in open(os.path.join(SCR, "petek.ndjson"), encoding="utf-8"):
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
    parcalar[o["i"]] = pl

sec = [s for s in S if s["km2"] >= 90]
sec.sort(key=lambda s: -s["km2"])
print("  %-24s %8s %7s %9s %9s %7s  %s"
      % ("yerlesim", "km²", "su km", "duz km", "kara km", "ORAN", "gorunur?"))
satirlar = []
for s in sec[:26]:
    i = s["i"]; tp = Point(YERLER[i]["lon"], YERLER[i]["lat"])
    h = None
    for p in parcalar.get(i, []):
        if p.intersects(tp):
            continue
        if abs(km2(p) - s["km2"]) < max(1.0, 0.02*s["km2"]):
            h = p; break
    if h is None:
        continue
    m = h.representative_point()
    duz = hav(tp.x, tp.y, m.x, m.y)
    ky = kara_yolu_km(tp.x, tp.y, m.x, m.y)
    oran = (ky/duz) if (ky and duz > 0) else None
    satirlar.append((s["ad"], s["km2"], s["su_km"], duz, ky, oran, bool(s["gorunur"])))
    print("  %-24s %8.0f %7.1f %9.0f %9s %7s  %s"
          % (s["ad"][:24], s["km2"], s["su_km"], duz,
             ("%.0f" % ky) if ky else "ULASILMAZ",
             ("%.2f" % oran) if oran else "—",
             "GORUNUR" if s["gorunur"] else "gorunmez"))

g = [x for x in satirlar if x[6] and x[5]]
t = [x for x in satirlar if not x[6] and x[5]]
print()
if g and t:
    print("  GORUNUR olanlarin orani  : min %.2f  ortanca %.2f  max %.2f"
          % (min(x[5] for x in g), sorted(x[5] for x in g)[len(g)//2], max(x[5] for x in g)))
    print("  gorunmez olanlarin orani : min %.2f  ortanca %.2f  max %.2f"
          % (min(x[5] for x in t), sorted(x[5] for x in t)[len(t)//2], max(x[5] for x in t)))
    ayirir = min(x[5] for x in g) > max(x[5] for x in t)
    print("  => HIPOTEZ %s" % ("TUTTU (kumeler ayrisiyor)" if ayirir
                               else "CURUDU (kumeler ORTUSUYOR - tek esik ayiramaz)"))
ulasilmaz = [x for x in satirlar if not x[5]]
if ulasilmaz:
    print("  ULASILMAZ (kara yolu YOK) %d parca: %s"
          % (len(ulasilmaz), ", ".join(x[0][:14] for x in ulasilmaz[:8])))

# -*- coding: utf-8 -*-
"""SEFER-OK-0075 / H-0033 — deniz oklarını KARADAN GEÇİRMEDEN, denizden yönlendirir.

Emre: *"deniz seyrüseferlerini … karaların üzerinden geçirmeden deniz üzerinden
gösterecek kodu yaz … gerekirse ok kıvrıla kıvrıla gitsin."*

YÖNTEM (üretim verisine YAZMAZ — öneriyi JSON'a döker; uygulama "dosya senin"den sonra):
  1. Kara: veri-kaynak/ne_10m_land.geojson — uret_petek.py'nin okuduğu GERÇEK kara.
     (motor_kara.geojson DEĞİL: o motorun çıktısıdır, ~200 km tavanla çizilmiş.)
  2. Her BACAK (ardışık iki durak) yerel pencerede sınanır. Düz bacak karayı kesmiyorsa
     DOKUNULMAZ (kayıt kaynağında ne diyorsa odur).
  3. Karayı kesen bacakta: pencere ızgaraya bölünür, 8 komşulu A* ile deniz yolu bulunur,
     sonra "ip germe" ile gereksiz ara noktalar atılır — ok kıyıyı sıyırarak KIVRILARAK
     ama en az noktayla gider. Üç aşama: 0.03° hücre (kıyıdan 1 hücre uzak) → 0.01°
     → 0.004° hücre-merkezi testi (Çanakkale gibi ~1 km'lik boğazlar için).
  4. Hedef, başlangıcın BAĞLI deniz bileşenine oturtulur (durak karada kalmışsa —
     Yanya gölleri gibi kapalı sulara değil, denize).
  5. Bir bacağın ucu kıyıdan >0.15° içerideyse (Larnaka→Lefkoşa gibi) o KASTEN kara
     bacağıdır: dokunulmaz ve ölçüme SAYILMAZ.
  6. Liman noktası kıyıdadır; ucuna 0.15° yarıçaplı muafiyet dairesi tanınır.

Kullanım:
  py denetim/ARAC-SEFER-OK-DENIZ-ROTA-0075.py <seferler.json> <cikti.json> [ekstra.json]
"""
import json, math, sys, os, heapq
import numpy as np
import shapely
from shapely.geometry import shape, LineString, Point, box
from shapely.ops import unary_union
from shapely.strtree import STRtree
from scipy import ndimage

KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
LAND = os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson")
LIMAN_R = 0.15       # derece — liman muafiyet dairesi
IC_ESIK = 0.15       # derece — bu kadar içerideki uç KARA bacağıdır
MAX_HUCRE = 90000
ASAMALAR = (         # (hücre °, pencere payı °, genişletme, yasak testi, hücre tavanı)
    (0.03, 1.5, 1, "kesisim", 90000),
    (0.01, 0.8, 0, "kesisim", 250000),
    (0.004, 0.4, 0, "merkez", 600000),
)

_g = None
def kara():
    global _g
    if _g is None:
        d = json.load(open(LAND, encoding="utf-8"))
        geoms = [shape(f["geometry"]).buffer(0) for f in d["features"]]
        _g = (geoms, STRtree(geoms))
    return _g

def km(a, b):
    R = 6371.0088
    p1, p2 = math.radians(a[1]), math.radians(b[1])
    dp, dl = p2 - p1, math.radians(b[0] - a[0])
    x = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(x))

def yerel_kara(xmin, ymin, xmax, ymax):
    geoms, agac = kara()
    pencere = box(xmin, ymin, xmax, ymax)
    parca = []
    for i in agac.query(pencere):
        c = shapely.clip_by_rect(geoms[i], xmin, ymin, xmax, ymax)
        if not c.is_empty:
            parca.append(c)
    if not parca:
        return None
    return unary_union(parca).buffer(0)

def kara_mi_ic(land, p):
    """uç kıyıdan IC_ESIK'ten fazla KARANIN İÇİNDE mi?"""
    if land is None:
        return False
    pt = Point(p)
    return land.contains(pt) and pt.distance(land.boundary) > IC_ESIK

def bacak_ok_mu(land_buf, a, b, daireler):
    seg = LineString([a, b])
    if not land_buf.intersects(seg):
        return True
    kalan = seg.intersection(land_buf).difference(daireler)
    return kalan.is_empty or kalan.length < 0.03

def astar(engel, baslangic, hedef, res, enlem):
    H, W = engel.shape
    kx = 111.0 * math.cos(math.radians(enlem)) * res
    ky = 111.0 * res
    kx_ky = math.hypot(kx, ky)
    def h(i, j):
        return math.hypot((i - hedef[0]) * ky, (j - hedef[1]) * kx)
    acik = [(h(*baslangic), 0.0, baslangic)]
    g = {baslangic: 0.0}; ata = {}
    kom = [(-1, 0, ky), (1, 0, ky), (0, -1, kx), (0, 1, kx),
           (-1, -1, kx_ky), (-1, 1, kx_ky), (1, -1, kx_ky), (1, 1, kx_ky)]
    while acik:
        f, gc, n = heapq.heappop(acik)
        if n == hedef:
            yol = [n]
            while n in ata:
                n = ata[n]; yol.append(n)
            return yol[::-1]
        if gc > g.get(n, 1e18):
            continue
        for di, dj, w in kom:
            i, j = n[0] + di, n[1] + dj
            if i < 0 or j < 0 or i >= H or j >= W or engel[i, j]:
                continue
            if di and dj and (engel[n[0] + di, n[1]] or engel[n[0], n[1] + dj]):
                continue                       # çapraz köşe kesmesin
            ng = gc + w
            if ng < g.get((i, j), 1e18):
                g[(i, j)] = ng; ata[(i, j)] = n
                heapq.heappush(acik, (ng + h(i, j), ng, (i, j)))
    return None

def _rota_asama(a, b, res, pay, gen, test, maxh):
    xmin, xmax = min(a[0], b[0]) - pay, max(a[0], b[0]) + pay
    ymin, ymax = min(a[1], b[1]) - pay, max(a[1], b[1]) + pay
    land = yerel_kara(xmin, ymin, xmax, ymax)
    if land is None:
        return [], "pencerede kara yok"
    daireler = unary_union([Point(a).buffer(LIMAN_R), Point(b).buffer(LIMAN_R)])
    while ((xmax - xmin) / res) * ((ymax - ymin) / res) > maxh:
        res *= 1.25
    land_buf = land.buffer(res * 0.6)
    if bacak_ok_mu(land_buf, a, b, daireler):
        return [], "düz bacak karayı kesmiyor"
    W = int(math.ceil((xmax - xmin) / res)); H = int(math.ceil((ymax - ymin) / res))
    xs = xmin + np.arange(W) * res; ys = ymin + np.arange(H) * res
    X0, Y0 = np.meshgrid(xs, ys)
    shapely.prepare(land)
    if test == "merkez":
        engel = shapely.contains_xy(land, X0 + res / 2, Y0 + res / 2)
    else:
        engel = shapely.intersects(shapely.box(X0, Y0, X0 + res, Y0 + res), land)
    if gen:
        engel = ndimage.binary_dilation(engel, iterations=gen)
    lab, _n = ndimage.label(~engel)

    def hucre(p):
        return (min(H - 1, max(0, int((p[1] - ymin) / res))),
                min(W - 1, max(0, int((p[0] - xmin) / res))))

    def en_yakin(p, maske):
        i, j = hucre(p)
        if maske[i, j]:
            return (i, j)
        _d, idx = ndimage.distance_transform_edt(~maske, return_indices=True)
        return (int(idx[0][i, j]), int(idx[1][i, j]))

    serbest = ~engel
    if not serbest.any():
        return None, "pencere tamamen kara"
    s = en_yakin(a, serbest)
    tb = en_yakin(b, serbest)
    if lab[tb] != lab[s]:
        # Hedefin kendi bileşeni BÜYÜK ve başlangıçtan ayrıysa boğaz bu çözünürlükte
        # kapalıdır (Çanakkale) — ok karadan atlamasın, bir sonraki aşama denesin.
        # Küçükse (Yanya gölleri gibi kapalı su üstünde kalmış kara durağı) hedef
        # başlangıcın deniz bileşenine oturtulur.
        boy = np.bincount(lab.ravel())
        if boy[lab[tb]] >= 0.02 * serbest.sum():
            return None, "boğaz kapalı (hücre %.3f°, iki büyük deniz bileşeni)" % res
        tb = en_yakin(b, lab == lab[s])
    t = tb
    yol = astar(engel, s, t, res, (a[1] + b[1]) / 2)
    if yol is None:
        return None, "bileşenler ayrı (hücre %.3f°)" % res
    pts = [[round(xmin + (j + 0.5) * res, 3), round(ymin + (i + 0.5) * res, 3)] for i, j in yol]
    tam = [list(a)] + pts + [list(b)]
    out = [tam[0]]; k = 0
    while k < len(tam) - 1:
        son = k + 1
        for m in range(len(tam) - 1, k, -1):
            if bacak_ok_mu(land_buf, tam[k], tam[m], daireler):
                son = m; break
        out.append(tam[son]); k = son
    # DOĞRULAMA: ip germe görünür komşu bulamayıp körlemesine ilerlediyse (ya da son
    # sıçrama limana karadan gidiyorsa) bu aşama BAŞARISIZDIR — sonraki aşama denesin.
    for i in range(1, len(out)):
        if not bacak_ok_mu(land_buf, out[i - 1], out[i], daireler):
            return None, "doğrulama başarısız: %s→%s karayı kesiyor (hücre %.3f°)" % (out[i - 1], out[i], res)
    return out[1:-1], "yönlendirildi (%d ara nokta, hücre %.3f°)" % (len(out) - 2, res)

def bacak_yonlendir(a, b):
    """(a→b) deniz bacağı. Dönüş: (ara noktalar | None, not, sınıf).
    sınıf: dokunulmadi | kara (KASTEN) | yonlendirildi | BASARISIZ"""
    genis = yerel_kara(min(a[0], b[0]) - 1.0, min(a[1], b[1]) - 1.0,
                       max(a[0], b[0]) + 1.0, max(a[1], b[1]) + 1.0)
    if kara_mi_ic(genis, a) or kara_mi_ic(genis, b):
        return [], "KASTEN KARA bacağı (uç kıyıdan >%.2f° içeride)" % IC_ESIK, "kara"
    son_not = ""
    for res, pay, gen, test, maxh in ASAMALAR:
        ara, n = _rota_asama(a, b, res, pay, gen, test, maxh)
        if ara is not None:
            return ara, n, ("yonlendirildi" if ara else "dokunulmadi")
        son_not = n
    return None, "ROTA BULUNAMADI (3 aşama denendi; son: %s)" % son_not, "BASARISIZ"

def kasten_kara(yol):
    """KASTEN kara bacakları (bir ucu kıyıdan >IC_ESIK içeride) — ucuz sınıflama, rota aramaz."""
    out = []
    for i in range(1, len(yol)):
        a, b = yol[i - 1], yol[i]
        genis = yerel_kara(min(a[0], b[0]) - 1.0, min(a[1], b[1]) - 1.0,
                           max(a[0], b[0]) + 1.0, max(a[1], b[1]) + 1.0)
        if kara_mi_ic(genis, a) or kara_mi_ic(genis, b):
            out.append([a, b])
    return out

def kara_km_disi(yol, istasyonlar, kara_bacaklar=()):
    """yol üzerinde, istasyonların 0.2° çevresi ve KASTEN KARA bacakları HARİÇ kara km'si."""
    xs = [p[0] for p in yol]; ys = [p[1] for p in yol]
    land = yerel_kara(min(xs) - .3, min(ys) - .3, max(xs) + .3, max(ys) + .3)
    if land is None:
        return 0.0, 0.0
    muaf = unary_union([Point(p).buffer(0.2) for p in istasyonlar])
    kb = [[list(x) for x in c] for c in kara_bacaklar]
    top = kara = 0.0
    for i in range(1, len(yol)):
        if [list(yol[i - 1]), list(yol[i])] in kb:
            continue
        seg = LineString([yol[i - 1], yol[i]])
        L = km(yol[i - 1], yol[i]); top += L
        if seg.length == 0:
            continue
        c = seg.intersection(land).difference(muaf)
        kara += L * min(1.0, c.length / seg.length)
    return kara, top

def isle(kayit):
    yol = kayit["yol"]
    yeni = [yol[0]]; notlar = []; kara_bacak = []
    for i in range(1, len(yol)):
        a, b = yol[i - 1], yol[i]
        ara, n, sinif = bacak_yonlendir(a, b)
        if sinif == "kara":
            kara_bacak.append([a, b]); notlar.append("bacak %d: %s" % (i, n))
        if ara is None:
            yeni.append(b); notlar.append("bacak %d: %s" % (i, n)); continue
        yeni.extend(ara); yeni.append(b)
        if ara:
            notlar.append("bacak %d: %s" % (i, n))
    return yeni, notlar, kara_bacak

DENIZ_EK = ("Osmanlı donanmasının Mora'dan Çeşme'ye çekilişi (1770)",
            "Osmanlı donanmasının İskenderiye'ye teslimi (1839)")

if __name__ == "__main__":
    kaynak = json.load(open(sys.argv[1], encoding="utf-8"))
    ekstra = json.load(open(sys.argv[3], encoding="utf-8")) if len(sys.argv) > 3 else []
    secim = [s for s in kaynak if s.get("tur") == "deniz" or s.get("ad") in DENIZ_EK] + ekstra
    sonuc = []
    for s in secim:
        ist = s["yol"]
        yeni, notlar, kb = isle(s)
        k0, t0 = kara_km_disi(ist, ist, kb)
        k1, t1 = kara_km_disi(yeni, ist, kb)
        sonuc.append({"ns": s.get("_ns"), "i": s.get("_i"), "ad": s["ad"], "tur": s.get("tur"),
                      "yol_eski": s["yol"], "yol_yeni": yeni, "notlar": notlar,
                      "kara_km_once": round(k0), "kara_km_sonra": round(k1),
                      "toplam_km_once": round(t0), "toplam_km_sonra": round(t1),
                      "nokta_once": len(s["yol"]), "nokta_sonra": len(yeni),
                      "kasten_kara_bacak": len(kb),
                      "basarisiz": [n for n in notlar if "BULUNAMADI" in n]})
        print("%-64s kara %4d -> %4d km | %2d -> %2d nokta | kasten-kara %d | basarisiz %d" % (
            s["ad"][:64], k0, k1, len(s["yol"]), len(yeni), len(kb),
            len(sonuc[-1]["basarisiz"])), flush=True)
    json.dump(sonuc, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)

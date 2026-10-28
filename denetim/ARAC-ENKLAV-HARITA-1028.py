# -*- coding: utf-8 -*-
"""ARAC-ENKLAV-HARITA-1028 — haritada ÇİZİLEN enklav/eksklav ölçümü (tüm devlet-dönemleri, MÖ dahil).

ÖNCEKİ ölçümler (ENKLAV-TARAMA-1013, eksklav_olc.py, D7) yerleşim NOKTASI verisini ölçer.
Bu alet motorun ÇİZDİĞİ petekleri ölçer: kullanıcının ekranda gördüğü kopuk parça.

Girdi (önce coz-c ile üretilmiş olmalı):
  py arac/kodla.py coz-c data data/devletler_harita.js
  py arac/kodla.py coz-c data data/donemler.js donem
Birim: (devlet, dönem). Dönemin petek halkaları ORTAK KÖŞE grafiğiyle bileşenlere ayrılır
(komşu petekler köşe paylaşır). En büyük (alan) bileşen = ana kara. Ötekiler >= ALAN_ESIK km² ise aday.
Her aday için: ana karaya uzaklık, kopuş türü (KARA: düz hat tümüyle karada · DENIZ: hat denizden/
gölden geçer), düz hat boyunca o günün başka sahipleri (koridor), çevre halkasını kaplayan devletler
(enklav sahibi), süre. Bir devletin bileşen yapısı (hangi peteklerin ayrık olduğu) bir önceki dönemle
AYNIYSA yeniden ölçülmez, mevcut adayın süresi uzatılır (en çok TAZE_YIL yılda bir yeniden ölçülür).

Kullanım: py denetim/ARAC-ENKLAV-HARITA-1028.py <cikti.json>
Salt okur. ~1-2 saat (tek süreç, ~5 GB bellek).
"""
import io, json, math, os, sys, time
from collections import defaultdict

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import gun as G
from shapely.geometry import Polygon, LineString, shape
from shapely.ops import unary_union, nearest_points
from shapely.prepared import prep
from shapely.strtree import STRtree
from shapely import make_valid

ALAN_ESIK = 100.0      # km² — altı "kırıntı", ayrı sayılır
TEMAS_KM = 3.0         # ana karaya bu kadar yakın bileşen "yapışık" (ayrı sayılmaz)
TAZE_YIL = 100         # aynı yapı en çok bu kadar yılda bir yeniden ölçülür


def blk(yol, ad):
    for l in io.open(yol, encoding="utf-8"):
        if l.startswith("window." + ad + " "):
            return json.loads(l[l.index("=") + 1:].strip().rstrip(";"))
    raise KeyError(ad)


def km_xy(lat):
    return 111.320 * math.cos(math.radians(lat)), 110.574


def alan_km2(g):
    c = g.centroid
    kx, ky = km_xy(c.y)
    return g.area * kx * ky


def km(a, b):
    kx, ky = km_xy((a.y + b.y) / 2.0)
    return math.hypot((b.x - a.x) * kx, (b.y - a.y) * ky)


def poli(halkalar):
    try:
        if not halkalar or len(halkalar[0]) < 4:
            return None
        p = Polygon(halkalar[0], [h for h in halkalar[1:] if len(h) >= 4])
        if not p.is_valid:
            p = make_valid(p)
        return p if not p.is_empty else None
    except Exception:
        return None


def halka_alan(r):
    s = 0.0
    for i in range(len(r) - 1):
        s += r[i][0] * r[i + 1][1] - r[i + 1][0] * r[i][1]
    return abs(s) / 2.0


def bilesenler(hl):
    """Öğe (petek) indekslerinin ORTAK KÖŞE bağlı bileşenleri: [[idx,...], ...]; büyükten küçüğe."""
    ata = {}

    def bul(x):
        while ata[x] != x:
            ata[x] = ata[ata[x]]
            x = ata[x]
        return x
    for n, h in enumerate(hl):
        if not h or len(h[0]) < 4:
            continue
        r = ("r", n)
        ata.setdefault(r, r)
        for v in h[0]:
            v = (v[0], v[1])
            if v not in ata:
                ata[v] = v
            a, b = bul(r), bul(v)
            if a != b:
                ata[a] = b
    grup = defaultdict(list)
    for x in list(ata):
        if x[0] == "r":
            grup[bul(x)].append(x[1])
    out = list(grup.values())
    out.sort(key=lambda c: -sum(halka_alan(hl[i][0]) for i in c))
    return out


def main():
    cikti = sys.argv[1]
    t0 = time.time()
    dh = os.path.join(KOK, "data", "devletler_harita.js")
    H = blk(dh, "DEVLET_HARITA")
    DP = blk(dh, "DEVLET_PARCALAR")
    DPH = blk(dh, "DEVLET_PARCA_HALKA")
    OD = blk(os.path.join(KOK, "data", "donemler.js"), "DONEMLER")
    OP = blk(os.path.join(KOK, "data", "donemler.js"), "PARCALAR")
    OPH = blk(os.path.join(KOK, "data", "donemler.js"), "PARCA_HALKA")
    print("yüklendi %.0f sn" % (time.time() - t0), flush=True)

    gj = json.load(io.open(os.path.join(KOK, "veri-kaynak", "motor_kara.geojson"), encoding="utf-8"))
    KARA_H = prep(unary_union([shape(f["geometry"]) for f in gj["features"]]).buffer(0))
    print("kara maskesi %.0f sn" % (time.time() - t0), flush=True)

    # DON: [devlet, fg, tg, f, t, anahtar, halka_listesi, petek_kimlikleri]
    DON = []
    for s in H:
        for d in s["dnm"]:
            try:
                f, t = G.gun(d["f"]), G.gun(d["t"])
            except Exception:
                continue
            if t <= f:
                continue
            ids = [i for i in d["g"] if isinstance(i, int) and 0 <= i < len(DPH)]
            hl = [[DP[h] for h in DPH[i] if 0 <= h < len(DP)] for i in ids]
            if hl:
                DON.append([s["id"], f, t, d["f"], d["t"], ("d", s["id"], tuple(ids)), hl, ids])
    for d in OD:
        try:
            f, t = G.gun(d["f"]), G.gun(d["t"])
        except Exception:
            continue
        if t <= f:
            continue
        ids = [i for i in list(d.get("o") or []) + list(d.get("v") or []) if isinstance(i, int) and 0 <= i < len(OPH)]
        hl = [[OP[h] for h in OPH[i] if 0 <= h < len(OP)] for i in ids]
        if hl:
            DON.append(["OSMANLI", f, t, d["f"], d["t"], ("o", tuple(ids)), hl, ids])
    print("dönem: %d (%.0f sn)" % (len(DON), time.time() - t0), flush=True)

    # petek-düzeyi uzamsal dizin (devlet-dönemi başına tembel, sınırlı önbellek)
    hucre = {}

    def hucre_ver(j):
        a = DON[j][5]
        if a not in hucre:
            if len(hucre) > 300:
                hucre.clear()
            ps = [p for p in (poli(h) for h in DON[j][6]) if p is not None]
            hucre[a] = (ps, STRtree(ps) if ps else None)
        return hucre[a]

    # kaba kutu dizini (dönemler için)
    from shapely.geometry import box
    kutular = []
    for x in DON:
        x0 = y0 = 1e9
        x1 = y1 = -1e9
        for h in x[6]:
            if h and len(h[0]) >= 4:
                for v in h[0]:
                    if v[0] < x0: x0 = v[0]
                    if v[0] > x1: x1 = v[0]
                    if v[1] < y0: y0 = v[1]
                    if v[1] > y1: y1 = v[1]
        kutular.append(box(x0, y0, x1, y1) if x1 >= x0 else box(0, 0, 0, 0))
    agac = STRtree(kutular)
    print("kutular %.0f sn" % (time.time() - t0), flush=True)

    def nokta_sahibi(pt, gm, dev):
        """gm gününde pt'yi kaplayan (dev dışı) devlet kimliği ya da None."""
        for j in agac.query(pt):
            d2 = DON[j]
            if d2[0] == dev or not (d2[1] <= gm < d2[2]):
                continue
            ps, tr = hucre_ver(j)
            if tr is not None and len(tr.query(pt, predicate="intersects")):
                return d2[0]
        return None

    adaylar = []
    son = {}                 # (devlet, yapı imzası) -> aday sözlüğü (süre uzatma)
    son_olc = {}             # aynı -> son ölçüm günü
    son_tg = {}              # aynı -> son görülen dönem bitişi
    kirinti = defaultdict(int)
    yapisik = 0
    n_cok = 0
    for k, (dev, f, t, fs, ts, _a, hl, ids) in enumerate(DON):
        if len(hl) < 2:
            continue
        bil = bilesenler(hl)
        if len(bil) < 2:
            continue
        n_cok += 1
        imza = frozenset(frozenset(ids[i] for i in c) for c in bil[1:])
        anah = (dev, imza)
        if anah in son and f - son_olc[anah] < TAZE_YIL * 365 and f <= son_tg[anah] + 1:
            for ad in son[anah]:
                ad["tg"] = t
                ad["t"] = ts
                ad["n_donem"] += 1
            son_tg[anah] = t
            continue
        son[anah] = []
        tk = time.time()
        ana_ps = [p for p in (poli(hl[i]) for i in bil[0]) if p is not None]
        if not ana_ps:
            continue
        ana_agac = STRtree(ana_ps)
        gm = (f + t) // 2
        for c in bil[1:]:
            ps = [p for p in (poli(hl[i]) for i in c) if p is not None]
            if not ps:
                continue
            p = unary_union(ps)
            a = alan_km2(p)
            if a < ALAN_ESIK:
                kirinti[dev] += 1
                continue
            j0 = ana_agac.query_nearest(p)[0]
            n1, n2 = nearest_points(ana_ps[j0], p)
            uz = km(n1, n2)
            if uz < TEMAS_KM:
                yapisik += 1
                continue
            hat = LineString([n1, n2])
            kara = bool(KARA_H.covers(hat))
            NK = 40
            sahip = defaultdict(int)
            for q in range(1, NK if kara else 1):          # DENIZ: koridor sorulmaz (ada/denizaşırı)
                o = nokta_sahibi(hat.interpolate(q / NK, normalized=True), gm, dev)
                if o:
                    sahip[o] += 1
            kor = {s: round(100 * v / (NK - 1)) for s, v in sorted(sahip.items(), key=lambda z: -z[1])}
            kapali = round(100 * sum(sahip.values()) / (NK - 1))
            cev = defaultdict(int)
            NC = 60
            hb = p.simplify(0.03).buffer(0.06)
            if hb.geom_type != "Polygon":
                hb = max(hb.geoms, key=lambda z: z.area)
            hlk = hb.exterior
            for q in range(NC if kara else 0):
                o = nokta_sahibi(hlk.interpolate(q / NC, normalized=True), gm, dev)
                if o:
                    cev[o] += 1
            cevl = {s: round(100 * v / NC) for s, v in sorted(cev.items(), key=lambda z: -z[1])[:3]}
            ct = p.centroid
            ad = {
                "devlet": dev, "f": fs, "t": ts, "fg": f, "tg": t, "n_donem": 1,
                "alan_km2": round(a), "ana_alan_km2": round(sum(x.area for x in ana_ps) * 111.32 * 110.574 * math.cos(math.radians(ct.y))),
                "lat": round(ct.y, 2), "lon": round(ct.x, 2),
                "uzak_km": round(uz), "tur": "KARA" if kara else "DENIZ",
                "koridor_dolu_pct": kapali, "koridor": dict(list(kor.items())[:4]),
                "cevre": cevl, "petek_sayisi": len(c),
            }
            adaylar.append(ad)
            son[anah].append(ad)
        son_olc[anah] = f
        son_tg[anah] = t
        if time.time() - tk > 15:
            print("  YAVAŞ dönem %s %s..%s %.0f sn" % (dev, fs, ts, time.time() - tk), flush=True)
        if n_cok % 100 == 0:
            print("  dönem %d/%d  çok-bileşenli %d  aday %d  (%.0f sn)" % (k, len(DON), n_cok, len(adaylar), time.time() - t0), flush=True)
    io.open(cikti, "w", encoding="utf-8").write(json.dumps(
        {"donem_sayisi": len(DON), "cok_bilesenli_donem": n_cok, "kirinti_say": sum(kirinti.values()),
         "yapisik_say": yapisik, "aday": adaylar}, ensure_ascii=False))
    print("bitti: %d dönem, %d çok-bileşenli, %d aday (%.0f sn)" % (len(DON), n_cok, len(adaylar), time.time() - t0))


if __name__ == "__main__":
    main()

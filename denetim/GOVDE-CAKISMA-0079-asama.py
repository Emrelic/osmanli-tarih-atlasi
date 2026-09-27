# -*- coding: utf-8 -*-
"""GOVDE-CAKISMA-0079 — cakisma HANGI ASAMADA doguyor?

Motorun yabanci govde zincirini (uret_petek.py:6329 `_yabanci_govde_hesap`)
KOSU OLMADAN, uretilmis taban peteklerden (data/petek_govde.js) asama asama
yeniden kurar ve iki komsu govdenin kesisimini HER ASAMADA olcer:

    ham   = unary_union(petek)                      (6333)
    K     = kapat(ham, 0.15)                        (2788)
    B1    = delikleri_doldur(K, sahip_ix)           (2875)  — sade kopya
    B3    = _b3_koridor_kirp(B1, sahip_ix)          (3175)  — sade kopya
    SON   = devletler_harita.js'teki gercek govde

Motor kodu IMPORT EDILMEZ, KOSTURULMAZ; formuller satir numarasiyla kopyalandi.
Epok devri (olu yerlesimin peteginin komsulara paylastirilmasi, 5028) en yakin
CANLI yerlesime pikselsiz Voronoi ile yaklasiklanir.
Kullanim: py denetim/GOVDE-CAKISMA-0079-asama.py
"""
import sys, os, math, json, importlib.util
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
BURA = os.path.dirname(os.path.abspath(__file__))
_s = importlib.util.spec_from_file_location("olc", os.path.join(BURA, "GOVDE-CAKISMA-0079-olc.py"))
olc = importlib.util.module_from_spec(_s); _s.loader.exec_module(olc)
import shapely
from shapely.geometry import Polygon, Point, MultiPoint, box
from shapely.ops import unary_union, voronoi_diagram
from shapely.validation import make_valid

P = olc.js_oku("data/petek_govde.js", ["PETEK_GOVDE_PARCA", "PETEK_GOVDE"])
AD = [p["a"] for p in olc.js_oku("data/donemler.js", ["PETEKLER"])["PETEKLER"]]
Y = olc.YERLER
# Koşudan sonra girdi buyuyebilir (kosu 15: 4294, bugun 4296) ⇒ SIRA DEGIL AD ile esle
_PIX = {a: i for i, a in enumerate(AD)}
PX = [_PIX.get(y["ad"]) for y in Y]
_yok = [y["ad"] for y, p in zip(Y, PX) if p is None]
print(f"  PETEKLER {len(AD)} · YERLER {len(Y)} · petegi olmayan (kosudan sonra eklenmis) {len(_yok)}: {_yok[:5]}")
NOK = [Point(y["lon"], y["lat"]) for y in Y]
AGAC = shapely.STRtree(NOK)
# motorun boya anahtari yonlendirmesi (uret_petek.py:1017-1026): BOYALAR'da yoksa `harita:`
sys.path.insert(0, os.path.join(os.path.dirname(BURA), "arac"))
import renkler, girdi
_BOY = set(renkler.BOYALAR)
_ALT = {k["id"]: k.get("harita") for k in girdi.oku_devletler() if k.get("harita")}
for _y in Y:
    for _sp in _y["s"]:
        if _sp["d"] not in _BOY and _ALT.get(_sp["d"]) in _BOY:
            _sp["d"] = _ALT[_sp["d"]]


def b2(g, sahip, kavis=0.35, enklav_km=250.0):   # uret_petek.py:3073 (sade; KARA sinavi YOK)
    ps = list(g.geoms) if g.geom_type == "MultiPolygon" else [g]
    if len(ps) < 2: return g
    ps.sort(key=lambda p: p.area, reverse=True)
    ana, kopru = ps[0], []
    kmd = lambda la: 111.32 * max(0.15, math.cos(math.radians(la)))
    for p in ps[1:]:
        n1, n2 = shapely.ops.nearest_points(ana, p)
        la = (n1.y + n2.y) / 2.0
        if math.hypot((n2.x - n1.x) * kmd(la), (n2.y - n1.y) * 110.574) > enklav_km: continue
        hat = shapely.LineString([n1, n2])
        # 3043 _bant_baskasinin_topragini_kesiyor_mu — YALNIZ ORTA HAT sinanir
        n = max(2, int(hat.length * 111.32 / 10.0)); ihlal = False
        for i in range(n + 1):
            q = int(AGAC.nearest(hat.interpolate(i / float(n), normalized=True)))
            if q not in sahip: ihlal = True; break
        if ihlal: continue
        x0, y0, x1, y1 = p.bounds
        _la = (y0 + y1) / 2.0
        w_e = max(min((x1 - x0) * kmd(_la), (y1 - y0) * 110.574), 25.0)
        en_e = (w_e / 2.0) / kmd(_la); en_a = min(2.0 * en_e, 3.0)
        dx, dy = n2.x - n1.x, n2.y - n1.y
        bo = math.hypot(dx, dy) or 1e-9
        px, py = -dy / bo, dx / bo
        sol, sag = [], []
        for i in range(25):
            t = i / 24.0
            w = (en_a + (en_e - en_a) * t) * (1.0 - kavis * math.sin(math.pi * t))
            cx, cy = n1.x + dx * t, n1.y + dy * t
            sol.append((cx + px * w, cy + py * w)); sag.append((cx - px * w, cy - py * w))
        bant = Polygon(sol + list(reversed(sag))).buffer(0)
        if yasakli(bant.difference(g), sahip): continue
        kopru.append(bant)
    return temiz(unary_union([g] + kopru)) if kopru else g


def petek(j):
    i = PX[j]
    if i is None:
        return Polygon()
    ps = [Polygon(pp[0], pp[1:]) for k in P["PETEK_GOVDE"][i] for pp in [P["PETEK_GOVDE_PARCA"][k]]]
    return temiz(unary_union([temiz(p) for p in ps])) if ps else Polygon()


def temiz(q):                                   # uret_petek.py:165
    if not q.is_valid: q = make_valid(q)
    if q.geom_type == "GeometryCollection":
        q = unary_union([p for p in q.geoms if p.geom_type in ("Polygon", "MultiPolygon")])
    return q.buffer(0)


def kapat(g, yaricap=0.15):                     # uret_petek.py:2788
    if g.is_empty: return g
    k = temiz(g.buffer(yaricap, join_style=2, mitre_limit=2.0)).buffer(-yaricap, join_style=2, mitre_limit=2.0)
    return unary_union([temiz(k), g])


def yasakli(alan, sahip):                       # uret_petek.py:3020 (sade)
    for q in AGAC.query(alan):
        q = int(q)
        if alan.contains(NOK[q]):
            if Y[q].get("kasitli_bosluk") or Y[q].get("bos"):
                return "kb"
            if q not in sahip:
                return "yerlesim"
    return None


def b1(g, sahip):                               # uret_petek.py:2875 (sade: halka bazli)
    ps = list(getattr(g, "geoms", [g]))
    out = []
    for p in ps:
        if p.geom_type != "Polygon":
            continue
        tut = []
        for r in p.interiors:
            if yasakli(Polygon(r), sahip):
                tut.append(r)
        out.append(Polygon(p.exterior, tut))
    return temiz(unary_union(out))


def b3(g, sahip):                               # uret_petek.py:3175 (sade kopya)
    if g.is_empty: return g
    gs = g.simplify(0.02, preserve_topology=True)
    k = kapat(gs, 0.45)
    aday = temiz(k.difference(g))
    if aday.is_empty: return g
    x0, y0, x1, y1 = g.bounds
    m = 0.45 * 4
    disari = temiz(box(x0 - m, y0 - m, x1 + m, y1 + m).difference(k))
    dk = disari.buffer(0.01)
    dolan = []
    for c in list(getattr(aday, "geoms", [aday])):
        if c.is_empty or c.length <= 0: continue
        agiz = temiz(c.intersection(dk))
        if agiz.is_empty: continue
        w = 2.0 * c.area / c.length
        try:
            d = c.hausdorff_distance(agiz)
        except Exception:
            continue
        if d <= w: continue
        if yasakli(c, sahip) in ("kb", "yerlesim"): continue
        gv = temiz(c.difference(agiz.buffer(w)))
        if not gv.is_empty: dolan.append(gv)
    return temiz(unary_union([g] + dolan)) if dolan else g


def olu_mu(y, g):
    return (y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g)


def aktif_kume(did, g):
    return frozenset(j for j, y in enumerate(Y)
                     if not olu_mu(y, g)
                     and any(sp["d"] == did and sp["f"] <= g < sp["t"] for sp in y["s"])
                     and not any(dn["f"] <= g < dn["t"] for dn in y["d"] + y["v"]))


def epok_hucre(g, kutu, pay=3.0):
    """kutu cevresindeki yerlesimlerin o gunku hucresi (olunun payi en yakin canliya)."""
    x0, y0, x1, y1 = kutu
    K = box(x0 - pay, y0 - pay, x1 + pay, y1 + pay)
    ix = [int(q) for q in AGAC.query(K)]
    H = {j: petek(j) for j in ix}
    canli = [j for j in ix if not olu_mu(Y[j], g)]
    olu = [j for j in ix if olu_mu(Y[j], g) and not H[j].is_empty]
    if olu and canli:
        vd = voronoi_diagram(MultiPoint([NOK[j] for j in canli]), envelope=K.buffer(2))
        bol = {}
        for b in vd.geoms:
            for j in canli:
                if b.covers(NOK[j]):
                    bol[j] = b; break
        alan = unary_union([H[j] for j in olu])
        for j, b in bol.items():
            p = b.intersection(alan)
            if not p.is_empty and p.area > 0:
                H[j] = temiz(unary_union([H[j], p]))
        for j in olu:
            H[j] = Polygon()
    return H


def kes(a, b):
    try:
        return a.intersection(b)
    except shapely.errors.GEOSException:          # topoloji arizasi: temizle + 1e-6 izgarada tekrar
        return shapely.intersection(temiz(a), temiz(b), grid_size=1e-6)


def fark(a, b):
    try:
        return a.difference(b)
    except shapely.errors.GEOSException:
        return shapely.difference(temiz(a), temiz(b), grid_size=1e-6)


def km2(g, lat):
    return g.area * 111.32 * 110.574 * math.cos(math.radians(lat))


def olc_cift(ad, g, kutu):
    x0, y0, x1, y1 = kutu
    lat = (y0 + y1) / 2
    W = box(*kutu)
    G = [x for x in olc.govdeler(g, kutu) if x[0].startswith("devlet:")]
    H = epok_hucre(g, kutu)
    asama = {}
    for gad, son, f, t in G:
        did = gad[len("devlet:"):]
        ak = aktif_kume(did, g)
        ham = temiz(unary_union([H[j] for j in ak if j in H and not H[j].is_empty])) if ak else Polygon()
        k = kapat(ham)
        v1 = b1(k, ak)
        v2 = b2(v1, ak)          # gosterim_duzelt sirasi: B2 SONRA B3 (uret_petek.py:3278)
        v3 = b3(v2, ak)
        asama[gad] = {"ham": ham, "K": k, "B1": v1, "B2": v2, "B3": v3, "SON": son, "n": len(ak)}
    # CARE SINAVI (onerilen motor kurali): ekleyen asamalarin sonucu, O GUN BASKA
    # devletin ham petek bolgesini KESEMEZ  ⇒  KUR = B3 − ⋃ ham(oteki)
    # (yalniz pencerede gorunen govdelerin ham'i — pencere disi komsular sayilmadi)
    for gad, a in asama.items():
        oteki = unary_union([b["ham"] for h, b in asama.items() if h != gad and not b["ham"].is_empty])
        a["KUR"] = fark(a["B3"], oteki) if not oteki.is_empty else a["B3"]
        a["kayip_km2"] = km2(kes(fark(a["B3"], a["KUR"]), W), lat)
    print(f"\n=== {ad} · {g} · {kutu}")
    for gad, a in asama.items():
        print(f"  {gad:34s} CARE: B3'ten kesilen (baskasinin ham petegi) {a['kayip_km2']:,.0f} km²")
        print(f"  {'':34s} EKLEME (pencerede): K {km2(kes(fark(a['K'], a['ham']), W), lat):,.0f} · "
              f"B1 {km2(kes(fark(a['B1'], a['K']), W), lat):,.0f} · "
              f"B2 {km2(kes(fark(a['B2'], a['B1']), W), lat):,.0f} · "
              f"B3 {km2(kes(fark(a['B3'], a['B2']), W), lat):,.0f} km² · ham {km2(kes(a['ham'], W), lat):,.0f}")
        # yeniden kurulumun sinavi: B3 ile gercek SON govde pencerede ne kadar ortusuyor
        s, r = a["SON"].intersection(W), a["B3"].intersection(W)
        ykf = s.symmetric_difference(r).area / max(s.area, 1e-12)
        print(f"  {gad:34s} aktif {a['n']:4d} · SON {km2(s, lat):9,.0f} km² · "
              f"yeniden-kurulum farki {100 * ykf:5.1f}%")
    ad_ = list(asama)
    sonuc = []
    for i in range(len(ad_)):
        for k in range(i + 1, len(ad_)):
            A, B = asama[ad_[i]], asama[ad_[k]]
            sat = {}
            for st in ("ham", "K", "B1", "B2", "B3", "SON", "KUR"):
                sat[st] = km2(kes(kes(A[st], B[st]), W), lat)
            if sat["SON"] < 1 and sat["B3"] < 1:
                continue
            O = kes(kes(A["SON"], B["SON"]), W)
            ek = {}
            for st, onc in (("K", "ham"), ("B1", "K"), ("B2", "B1"), ("B3", "B2")):
                ekA = fark(A[st], A[onc]); ekB = fark(B[st], B[onc])
                ek[st] = km2(kes(O, unary_union([ekA, ekB])), lat)
            # yeniden kurulumun ACIKLAYAMADIGI kisim: (SON - B3) kendi tarafinda, komsunun SON'u ile
            ek["SON-B3 (aciklanamayan)"] = km2(kes(O, unary_union(
                [fark(A["SON"], A["B3"]), fark(B["SON"], B["B3"])])), lat)
            # TESHIS: aciklanamayan parcalar hangi taban petegine dusuyor, o yerlesim o gun kimin
            ac = kes(O, unary_union([fark(A["SON"], A["B3"]), fark(B["SON"], B["B3"])]))
            parca = sorted(getattr(ac, "geoms", [ac]), key=lambda p: -p.area)
            teshis = []
            for p in parca[:6]:
                if p.is_empty or p.geom_type != "Polygon": continue
                rp = p.representative_point()
                sahip = [j for j, h in H.items() if not h.is_empty and h.contains(rp)]
                ta = [j for j in (int(q) for q in AGAC.query(rp.buffer(3))) if petek(j).contains(rp)]
                j = sahip[0] if sahip else None
                t = ta[0] if ta else None
                teshis.append({"km2": round(km2(p, lat)), "nokta": [round(rp.x, 3), round(rp.y, 3)],
                               "o_gunku_hucre": (Y[j]["ad"], olc.etiket(Y[j], g)) if j is not None else None,
                               "taban_petek": (Y[t]["ad"], olc.etiket(Y[t], g), bool(olu_mu(Y[t], g))) if t is not None else None,
                               "A_aktif": j in A and False, "SON_A_icinde": A["SON"].contains(rp), "SON_B_icinde": B["SON"].contains(rp),
                               "B3_A_icinde": A["B3"].contains(rp), "B3_B_icinde": B["B3"].contains(rp)})
            for x in teshis:
                print("     teshis:", x)
            print(f"  {ad_[i]} × {ad_[k]}")
            print("     kesisim km²: " + " · ".join(f"{s} {v:,.0f}" for s, v in sat.items()))
            if sat["SON"] >= 1:
                print("     SON kesisimin hangi asamanin EKLEDIGI alana dustugu: "
                      + " · ".join(f"{s} {100 * v / sat['SON']:.0f}%" for s, v in ek.items()))
            sonuc.append({"pencere": ad, "gun": g, "cift": [ad_[i], ad_[k]], "kesisim_km2": sat, "ekleyen_km2": ek})
    return sonuc


if __name__ == "__main__":
    PENCERE = [
        ("H-77:82/83 Kafkas", "1921-06-01", (40.99, 40.45, 43.4, 41.59)),
        ("H-79:2 Trabzon", "1281-01-01", (36.73, 39.53, 41.81, 41.52)),
        ("H-79:6 G.Cin", "1281-01-01", (103.38, 20.33, 112.73, 27.36)),
        ("H-79:5 Yinchuan-Xian", "1281-01-01", (103.97, 30.92, 110.73, 40.34)),
        ("H-77:13 Nigbolu", "1915-09-06", (24.2, 43.6, 25.8, 44.4)),
        ("H-79:1 Cizre", "1281-01-01", (42.02, 36.63, 43.11, 38.00)),
    ]
    sec = sys.argv[1:]
    out = []
    for ad, g, k in PENCERE:
        if sec and not any(s in ad for s in sec):
            continue
        out += olc_cift(ad, g, k)
    with open(os.path.join(BURA, "GOVDE-CAKISMA-0079-asama" + ("-eski" if os.environ.get("GOVDE_KOK") else "") + ".json"), "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=1)

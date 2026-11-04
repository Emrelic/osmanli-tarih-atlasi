# -*- coding: utf-8 -*-
"""
sina_enklav_kirp.py — MOTOR-ENKLAV-KIRP-1104 kesit sınaması (tam koşu YOK).

NE SINANIR: `arac/uret_petek.py`deki GERÇEK işlevler (`enklav_gunu`, `_enklav_disk`,
`_enklav_kirp` + bağımlılıkları `poligonal`, `temiz`, `_poligonlar`, `_ham_km2`,
`_km_derece`, `gn`) AST ile motordan SÖKÜLÜP koşturulur — kopya değil.

GİRDİ (yaklaşıklık, beyanlı):
  · Taban petek = koşu 32 `data/petek_govde.js` (zamansız PETEK_D). İndeks eşlemesi
    bugünkü girdiyle parmak izinde AYRIŞIYOR (96 dosya); bu yüzden her nokta için
    hücre, `H[i]` noktaya <0,05° ise kabul edilir, değilse hücre BOŞ sayılır
    (sayılır ve basılır).
  · Devir = penceredeki `kur > g` ya da `bit <= g` noktalar (devir_kumesi'nin (a)
    kolu; kuşatılmışlık kolu YOK). Paylaştırma motorun ③ yolunun (yerel Voronoi)
    yeniden yazımıdır — koşuda YÜRÜYÜŞ (ızgara Dijkstra) kullanılır. Yani "önce"
    sayısı koşunun sayısı DEĞİL, aynı mekanizmanın yaklaşığıdır.
ÖLÇÜLEN: penceredeki her devletin "noktasız parçası" (içinde o devletin o gün
  sahnedeki hiçbir noktası olmayan bağlı bileşen; LAB tanımı) km², önce/sonra;
  toplam alan korunumu; presidio başına kalan km².
"""
import ast, os, sys, math, time, json
KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac", "olc_enklav"))
sys.path.insert(0, os.path.join(KOK, "arac"))
from _ortak import oku_petek_govde
import girdi, gun
import shapely
from shapely.geometry import shape, box, Polygon, MultiPolygon, Point, MultiPoint
from shapely.ops import unary_union, voronoi_diagram
from shapely.affinity import scale as _scale
from shapely.strtree import STRtree
from shapely.validation import make_valid

T0 = time.time()
ISTENEN = ["temiz", "poligonal", "_poligonlar", "_ham_km2", "_km_derece", "gn",
           "enklav_gunu", "_enklav_disk", "_enklav_kirp"]
src = open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
agac_ast = ast.parse(src)
kod = {n.name: ast.get_source_segment(src, n) for n in agac_ast.body
       if isinstance(n, ast.FunctionDef) and n.name in ISTENEN}
eksik = set(ISTENEN) - set(kod)
if eksik:
    raise SystemExit(f"motorda bulunamadı: {eksik}")

GOV, H = oku_petek_govde()
Y = girdi.yukle(sessiz=True)
N = len(Y)
pts = [Point(y["lon"], y["lat"]) for y in Y]
hizasiz = 0
for i in range(N):
    if not H[i].is_empty and H[i].distance(pts[i]) >= 0.05:
        H[i] = Polygon(); hizasiz += 1
print(f"taban hücre {len(H)} · hizasız (boşaltıldı) {hizasiz}")

NS = dict(shapely=shapely, shape=shape, box=box, Polygon=Polygon, MultiPolygon=MultiPolygon,
          Point=Point, MultiPoint=MultiPoint, unary_union=unary_union,
          voronoi_diagram=voronoi_diagram, _scale=_scale, STRtree=STRtree,
          make_valid=make_valid, math=math, MOTOR_YURUYUS=True, R_DUNYA=6371.0088,
          _GUNMOD=gun, _GN_ONB={}, YERLER=Y, noktalar=pts, _ENKLAV_GUN_EZBER={},
          ENKLAV_KIRP_KM=0.0,
          _ENKLAV=frozenset(i for i, y in enumerate(Y) if any(p.get("enklav") for p in y["s"])))
for ad in ISTENEN:
    exec(kod[ad], NS)
km2 = NS["_ham_km2"]; gn = NS["gn"]; poligonal = NS["poligonal"]


def sahip(y, G):
    for k, lst in (("OSMANLI", y.get("d")), ("TABI", y.get("v")), (None, y.get("s"))):
        for p in lst or []:
            if gn(p["f"]) <= G < gn(p["t"]):
                return k or p.get("d") or "?"
    return None


def olu_mu(y, G):
    return bool((y.get("kur") and gn(y["kur"]) > G) or (y.get("bit") and gn(y["bit"]) <= G))


def gun_hucre(pencere, G):
    """Pencere içi yaklaşık petek_epok: ölü hücreler canlı komşulara yerel Voronoi."""
    ix = [i for i in range(N) if pencere.intersects(pts[i]) or
          (not H[i].is_empty and pencere.intersects(H[i]))]
    hucre = {i: H[i] for i in ix}
    olu = [i for i in ix if olu_mu(Y[i], G) and not H[i].is_empty]
    canli = set(i for i in ix if not olu_mu(Y[i], G))
    ag = STRtree([H[i] for i in ix])
    # bitişik ölü grupları
    gorulen, gruplar = set(), []
    olu_k = set(olu)
    for i in olu:
        if i in gorulen: continue
        yig, gr = [i], []
        gorulen.add(i)
        while yig:
            k = yig.pop(); gr.append(k)
            for q in ag.query(H[k].buffer(0.02)):
                j = ix[int(q)]
                if j in olu_k and j not in gorulen:
                    gorulen.add(j); yig.append(j)
        gruplar.append(gr)
    for gr in gruplar:
        alan = poligonal(unary_union([H[i] for i in gr]))
        komsu = sorted({ix[int(q)] for q in ag.query(alan.buffer(0.02))} & canli)
        komsu = [j for j in komsu if not H[j].is_empty or True]
        for i in gr: hucre[i] = Polygon()
        if not komsu:
            continue
        if len(komsu) == 1:
            hucre[komsu[0]] = poligonal(unary_union([hucre[komsu[0]], alan])); continue
        vd = voronoi_diagram(MultiPoint([pts[j] for j in komsu]), envelope=box(*alan.buffer(1.0).bounds))
        ver = {}
        for b in vd.geoms:
            s = next((j for j in komsu if b.covers(pts[j])), None)
            if s is None: continue
            pg = poligonal(b.intersection(alan))
            if not pg.is_empty: ver[s] = poligonal(unary_union([ver.get(s, Polygon()), pg]))
        for j, gq in ver.items():
            hucre[j] = poligonal(unary_union([hucre[j], gq]))
    return hucre, canli


def noktasiz_parcalar(hucre, canli, G, pencere):
    """devlet -> [(km², temsil noktası)] — içinde o devletin sahnedeki noktası olmayan bileşenler."""
    sah = {}
    for i, g in hucre.items():
        if g.is_empty or i not in canli: continue
        s = sahip(Y[i], G)
        if s is None: continue
        sah.setdefault(s, []).append(i)
    out = {}
    for s, ii in sah.items():
        # 0,0006° tampon: petek_govde 0,001°'ye yuvarlı ⇒ komşu hücreler arasında kıl payı
        # (≤ ~70 m) çözümleme boşluğu var; motorda kenarlar ortak. Önce/sonra AYNI tampon.
        u = unary_union([hucre[i].buffer(0.0006) for i in ii]).buffer(0)
        ps = list(u.geoms) if u.geom_type == "MultiPolygon" else [u]
        P = [pts[i] for i in ii]
        for p in ps:
            if p.is_empty or not pencere.intersects(p.representative_point()): continue
            if not any(p.buffer(0.01).contains(q) for q in P):
                a = km2(p)
                if a >= 1.0:
                    c = p.representative_point()
                    out.setdefault(s, []).append((round(a, 1), round(c.y, 2), round(c.x, 2)))
    return out


def nokta_celiski(hucre, canli, G, pencere):
    """Sahnedeki sahipli nokta, BAŞKA sahipli bir hücrenin içinde mi (Değişmez 3 ailesi)."""
    ii = [i for i in hucre if not hucre[i].is_empty]
    ag = STRtree([hucre[i] for i in ii])
    out = []
    for i in hucre:
        if i not in canli or not pencere.contains(pts[i]):
            continue
        s = sahip(Y[i], G)
        if s is None:
            continue
        for q in ag.query(pts[i]):
            k = ii[int(q)]
            if hucre[k].contains(pts[i]):
                sk = sahip(Y[k], G)
                if sk != s:
                    out.append(f"{Y[i]['ad']}({s})∈{Y[k]['ad']}({sk})")
                break
    return out


def sina(etiket, pencere, G_str, R):
    G = gn(G_str)
    NS["ENKLAV_KIRP_KM"] = R; NS["_ENKLAV_GUN_EZBER"].clear()
    hucre, canli = gun_hucre(pencere, G)
    once = noktasiz_parcalar(hucre, canli, G, pencere)
    cel0 = nokta_celiski(hucre, canli, G, pencere)
    top0 = sum(km2(g) for g in hucre.values())
    enk = NS["enklav_gunu"](G_str)
    enk_p = frozenset(i for i in enk if i in hucre)
    # _enklav_kirp liste ister: tam boy liste kur, pencere dışı boş
    L = [Polygon()] * N
    for i, g in hucre.items(): L[i] = g
    TB = [Polygon()] * N
    for i in hucre: TB[i] = H[i]
    kay = NS["_enklav_kirp"](L, TB, enk_p, set(canli), R, 1e-12)
    for i in hucre: hucre[i] = L[i]
    sonra = noktasiz_parcalar(hucre, canli, G, pencere)
    cel1 = nokta_celiski(hucre, canli, G, pencere)
    top1 = sum(km2(g) for g in hucre.values())
    print(f"\n=== {etiket} · {G_str} · R={R:g} km · penceredeki presidio {len(enk_p)} "
          f"({', '.join(Y[i]['ad'] for i in sorted(enk_p))})")
    for ad, a, al in kay:
        print(f"   kırpıldı {ad:<26} {a:>8,.0f} km² → {al}")
    for i in sorted(enk_p):
        print(f"   kalan    {Y[i]['ad']:<26} {km2(hucre[i]):>8,.0f} km²")
    def yaz(d):
        return "; ".join(f"{s}: " + ", ".join(f"{a:,.0f} km² @{la}K {lo}D" for a, la, lo in v)
                         for s, v in sorted(d.items())) or "YOK"
    print(f"   noktasız parça ÖNCE : {yaz(once)}")
    print(f"   noktasız parça SONRA: {yaz(sonra)}")
    for s, v in sonra.items():
        for a, la, lo in v:
            if (a, la, lo) in once.get(s, []):
                continue
            q = Point(lo, la)
            sah = [Y[i]["ad"] for i, g in hucre.items() if not g.is_empty and g.contains(q)]
            kom = [Y[i]["ad"] + ("(enk)" if i in enk_p else "") + ":" + str(sahip(Y[i], G))
                   for i, g in hucre.items()
                   if not g.is_empty and g.distance(q) < 0.15 and Y[i]["ad"] not in sah]
            print(f"     YENİ parça {s} {a} km² hücresi {sah} · çevre {kom[:8]}")
            ayni = [g for i, g in hucre.items() if not g.is_empty and i in canli
                    and sahip(Y[i], G) == s and not g.contains(q)]
            if ayni:
                parca = [x for i, g in hucre.items() if g.contains(q) for x in NS["_poligonlar"](g)
                         if x.contains(q)]
                if parca:
                    zon = parca[0].buffer(0.01)
                    tab = [f"{Y[i]['ad']}[{'ölü' if olu_mu(Y[i], G) else 'canlı'}"
                           f"{',enk' if i in enk_p else ''},{sahip(Y[i], G)}]"
                           for i in range(N) if not H[i].is_empty and H[i].intersects(zon)]
                    bos = zon.difference(unary_union([g for g in hucre.values() if not g.is_empty]))
                    print(f"       taban komşuları: {tab} · çevrede hiçbir hücrenin olmadığı alan "
                          f"{km2(bos):,.0f} km² (deniz/hizasız boşluk)")
                    d = min(parca[0].distance(g) for g in ayni)
                    print(f"       aynı devletin öteki hücrelerine uzaklık {d:.5f}° "
                          f"({d * 111:.2f} km){' — ÇÖZÜMLEME ARTIĞI (petek_govde 0,001° yuvarlı)' if d < 0.002 else ''}")
    print(f"   alan korunumu: {top0:,.1f} → {top1:,.1f} km² (fark {top1 - top0:+.3f})")
    print(f"   nokta-başka-sahip çelişkisi ÖNCE {len(cel0)} · SONRA {len(cel1)}"
          + (f" · yeni: {sorted(set(cel1) - set(cel0))}" if set(cel1) - set(cel0) else ""))
    return {"etiket": etiket, "gun": G_str, "R": R, "kirp": kay, "once": once, "sonra": sonra,
            "korunum": [top0, top1], "celiski": [cel0, cel1]}


SONUC = []
ORAN = box(-2.6, 34.4, 1.4, 36.3)
BADIS = box(-5.6, 34.2, -2.6, 35.6)
for R in (5.0, 10.0, 15.0):
    SONUC.append(sina("ORAN", ORAN, "1600-06-15", R))
for G_str in ("1750-06-15", "1720-06-15", "1820-06-15"):
    SONUC.append(sina("ORAN", ORAN, G_str, 10.0))
for R in (5.0, 10.0, 15.0):
    SONUC.append(sina("BÂDİS", BADIS, "1600-06-15", R))
SONUC.append(sina("FAS KUZEY", box(-7.5, 33.9, -4.6, 36.1), "1650-06-15", 10.0))
SONUC.append(sina("KIRIM", box(32.8, 44.2, 37.2, 45.8), "1400-06-15", 10.0))
SONUC.append(sina("KIRIM", box(32.8, 44.2, 37.2, 45.8), "1600-06-15", 10.0))
SONUC.append(sina("ANGOLA", box(12.0, -11.5, 17.0, -7.5), "1700-06-15", 10.0))
SONUC.append(sina("HİNDİSTAN GD", box(77.5, 10.0, 81.5, 14.5), "1700-06-15", 10.0))
# Bayrak kapalı: hiçbir şey değişmemeli (enklav_gunu boş küme)
NS["ENKLAV_KIRP_KM"] = 0.0; NS["_ENKLAV_GUN_EZBER"].clear()
print("\nBAYRAK KAPALI: enklav_gunu('1600-06-15') =", len(NS["enklav_gunu"]("1600-06-15")), "(0 beklenir)")

# ── Dünya: yalnız TABAN etkisi (devirsiz) — R=10, presidio başına kırpılan km², 4 gün
print("\n=== DÜNYA, taban hücre etkisi (devir simülasyonu YOK) R=10 km")
for G_str in ("1500-06-15", "1600-06-15", "1700-06-15", "1800-06-15", "1900-06-15"):
    NS["ENKLAV_KIRP_KM"] = 10.0; NS["_ENKLAV_GUN_EZBER"].clear()
    enk = NS["enklav_gunu"](G_str)
    G = gn(G_str)
    canli = set(i for i in range(N) if not olu_mu(Y[i], G))
    L = list(H)
    kay = NS["_enklav_kirp"](L, H, enk, canli, 10.0, 1e-12)
    print(f"  {G_str}: {len(enk)} presidio, {len(kay)} kırpıldı, toplam {sum(r[1] for r in kay):,.0f} km² · "
          + " · ".join(f"{a} {k:,.0f}" for a, k, _ in sorted(kay, key=lambda r: -r[1])[:8]))
print(f"\nsüre {time.time() - T0:.0f} sn")

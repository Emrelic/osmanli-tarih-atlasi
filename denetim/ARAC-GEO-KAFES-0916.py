# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — REÇETE "KAFES" SINAVI (D029). YALNIZ OKUR.

REÇETE: süs adımlarından (kapat · B1 · B2 · B3) SONRA, KARA/PUAN'dan önce
    g = g ∩ ( kendi hücreleri ∪ o gün SAHİPSİZ hücreler )
Yani bir gövde, o gün BAŞKA bir sahibi olan peteğe ve HİÇBİR peteğin olmadığı
(200 km tavanı dışı) yere boya taşıyamaz. Kapama/köprü/koridor kendi içinde ve
sahipsiz boşlukta çalışmaya devam eder.

Burada yayındaki gövdeye TABAN hücrelerle uygulanır (motorun epok hücresi yok):
  kaldırılan_komsu_km2   başka sahibin hücresinden silinen (örtüşme kaynağı)
  kaldırılan_hucresiz_km2 tavan dışından silinen (şerit kaynağı)
  kalan_ortusme_km2      reçeteden sonra çiftler arası örtüşme (beklenen ~0)
  yeni_bosluk_km2        reçetenin sildiği, komşu gövdenin de BOYAMADIĞI kara
                         (hücresiz silinenler hariç — orası tasarım gereği boş)
ÖNGÖRÜ (ölçümden önce): kalan örtüşme toplamı, bugünkünün ≤%10'u;
yeni boşluk ≤ kaldırılan_komsu'nun %15'i.
⚠️ Taban hücre zamansız ⇒ "sahipsiz" kur/bit devirlerini içerir (izinli sayılır);
   bayat dönemler (san-devletleri 1281→1923) bu sınavda TAZE maske alır — yani
   sonuç "reçete + tazelik" birleşiminin üst sınırıdır.
"""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Polygon, box, shape
from shapely.ops import unary_union
from shapely.strtree import STRtree
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)

DN = geo.js_oku("donemler.js"); DH = geo.js_oku("devletler_harita.js"); PG = geo.js_oku("petek_govde.js")
YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
PET = DN["PETEKLER"]; PGP = PG["PETEK_GOVDE_PARCA"]
cell = []
for ix in PG["PETEK_GOVDE"]:
    ps = [Polygon(PGP[j][0], PGP[j][1:]) for j in ix]
    cell.append(unary_union([p if p.is_valid else p.buffer(0) for p in ps]) if ps else Polygon())
agac = STRtree(cell)
kara = unary_union([shape(f["geometry"]) for f in json.load(open(
    os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))["features"]])
norm = lambda s: {"OSMANLI": "OSM-o", "TABI": "OSM-v"}.get(s, s)
toplam = {"ortusme_once": 0, "ortusme_sonra": 0, "kaldirilan_komsu": 0, "kaldirilan_hucresiz": 0, "yeni_bosluk": 0}
satir = []
for vid, gun, la0, la1, lo0, lo1 in geo.VAKALAR:
    B = box(lo0, la0, lo1, la1)
    lat = (la0 + la1) / 2
    own = {}
    for i in agac.query(B.buffer(0.5)):
        i = int(i); y = YER.get(PET[i]["a"])
        own[i] = norm(geo.sahip(y, gun)) if y else None
    tum = unary_union([cell[i] for i in own])
    sahipsiz = unary_union([cell[i] for i, s in own.items() if s is None])
    g0 = {}
    for d in DN["DONEMLER"]:
        if d["f"] <= gun < d["t"]:
            for kat in ("o", "v"):
                g = geo.coz(d.get(kat), DN["PARCALAR"], DN["PARCA_HALKA"]).intersection(B)
                if not g.is_empty: g0["OSM-" + kat] = g
    for s in DH["DEVLET_HARITA"]:
        for p in s["dnm"]:
            if p["f"] <= gun < p["t"]:
                g = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"]).intersection(B)
                if not g.is_empty: g0[s["id"]] = g
    g1, kk, kh = {}, 0, 0
    for k, g in g0.items():
        kendi = unary_union([cell[i] for i, s in own.items() if s == k])
        kafes = unary_union([kendi, sahipsiz]).buffer(0.002)
        yeni = g.intersection(kafes)
        sil = g.difference(kafes)
        kk += geo.km2(sil.intersection(tum), lat)
        kh += geo.km2(sil.difference(tum), lat)
        g1[k] = yeni

    def ort(gs):
        ks = list(gs); t = 0
        for i in range(len(ks)):
            for j in range(i + 1, len(ks)):
                if ks[i].startswith("OSM") and ks[j].startswith("OSM"):
                    continue
                t += geo.km2(gs[ks[i]].intersection(gs[ks[j]]), lat)
        return t
    o0, o1 = ort(g0), ort(g1)
    b0 = unary_union(list(g0.values())) if g0 else Polygon()
    b1 = unary_union(list(g1.values())) if g1 else Polygon()
    yb = geo.km2(b0.difference(b1).intersection(tum).intersection(kara), lat)
    satir.append({"vaka": vid, "ortusme_once": round(o0), "ortusme_sonra": round(o1),
                  "kaldirilan_komsu": round(kk), "kaldirilan_hucresiz": round(kh), "yeni_bosluk": round(yb)})
    for a, b in (("ortusme_once", o0), ("ortusme_sonra", o1), ("kaldirilan_komsu", kk),
                 ("kaldirilan_hucresiz", kh), ("yeni_bosluk", yb)):
        toplam[a] += round(b)
    print(satir[-1])
print("TOPLAM", toplam)
json.dump({"toplam": toplam, "satir": satir},
          open(os.path.join(KOK, "denetim", "OLCUM-GEO-KAFES-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

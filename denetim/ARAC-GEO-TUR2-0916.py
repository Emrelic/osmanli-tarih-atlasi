# -*- coding: utf-8 -*-
"""GEOMETRI 0916 İKİNCİ TUR — KUTU-AYIKLA MOTOR 1-20 (eski paketler 0021-0048). YALNIZ OKUR.

Görseller eski koşulardan; ÖLÇÜM BUGÜNKÜ YAYINDA (koşu 11 çıktısı) yapılır ⇒ her vaka
için ilk soru "kusur bugün hâlâ var mı" (D044: şikâyet, şikâyet edilen şeyden hızlı bayatlar).
Her vaka (madde, gün, kutu) için:
  örtüşme km² (farklı sahipler; OSM o/v kendi arasında hariç)
  boşluk km²  üç kova: HÜCRESİZ (200 km tavanı dışı) · SAHİPLİ-BOYANMAMIŞ (hücrenin o gün
              sahibi var, hiçbir gövde boyamıyor) · SAHİPSİZ (hücrenin o gün sahibi yok)
  geçersiz    çıktıdaki ham halkalardan is_valid=False olanlar (kendini kesen şekil)
  kafes       ARAC-GEO-KAFES reçetesiyle örtüşme sonrası · silinen komşu · silinen hücresiz
Kullanım: py denetim/ARAC-GEO-TUR2-0916.py → denetim/OLCUM-GEO-TUR2-0916.json
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

V = [  # (MOTOR no, madde/görsel, gün, lat0, lat1, lon0, lon1)
    (2, "0030/H-0018-1", "1392-01-01", 38.19, 38.97, 36.17, 36.64),
    (3, "0035/H-0072-1", "1721-08-30", 54.73, 57.65, 21.48, 22.99),
    (4, "0035/H-0101-1", "1820-01-08", 22.63, 24.81, 54.01, 55.15),
    (5, "0040/H-0001-1", "1281-01-01", 41.77, 42.86, 25.35, 27.37),
    (5, "0040/H-0001-2", "1281-01-01", 40.09, 41.47, 20.25, 21.88),
    (5, "0040/H-0001-3", "1281-01-01", 38.02, 39.20, 27.88, 28.90),
    (5, "0040/H-0001-4", "1281-01-01", 40.51, 40.95, 34.23, 34.65),
    (5, "0040/H-0001-5", "1281-01-01", 40.71, 41.86, 42.79, 45.82),
    (5, "0040/H-0001-6", "1281-01-01", 40.43, 41.08, 38.24, 39.50),
    (5, "0040/H-0001-7", "1281-01-01", 38.59, 39.59, 38.54, 39.17),
    (5, "0040/H-0001-8", "1281-01-01", 48.54, 50.85, 14.70, 18.10),
    (5, "0040/H-0001-9", "1281-01-01", 55.80, 57.99, 20.82, 24.52),
    (6, "0040/H-0002-1", "1281-01-01", 59.11, 60.81, 21.88, 27.08),
    (7, "0040/H-0003-1", "1281-01-01", 62.29, 66.33, 14.38, 18.66),
    (7, "0040/H-0003-2", "1281-01-01", 67.34, 68.87, 20.63, 25.73),
    (7, "0040/H-0003-3", "1281-01-01", 62.47, 67.59, 26.30, 33.36),
    (8, "0040/H-0007-1", "1281-01-01", 42.79, 47.59, 57.44, 62.23),
    (9, "0042/H-0002-1", "1299-01-01", 39.79, 40.14, 28.00, 28.20),
    (9, "0042/H-0002-2", "1299-01-01", 38.78, 39.19, 31.03, 31.82),
    (9, "0042/H-0002-3", "1299-01-01", 38.55, 39.04, 36.37, 36.98),
    (9, "0042/H-0002-4", "1299-01-01", 38.47, 39.55, 38.59, 39.27),
    (9, "0042/H-0002-5", "1299-01-01", 41.89, 42.74, 25.47, 27.26),
    (9, "0042/H-0002-6", "1299-01-01", 43.34, 44.57, 21.95, 23.95),
    (9, "0042/H-0002-7", "1299-01-01", 45.21, 45.59, 16.88, 17.42),
    (9, "0042/H-0002-8", "1299-01-01", 50.63, 53.88, 27.61, 33.48),
    (9, "0042/H-0002-9", "1299-01-01", 60.95, 67.15, 10.27, 16.58),
    (9, "0042/H-0002-10", "1299-01-01", 58.43, 69.33, 19.92, 33.98),
    (10, "0042/H-0005-1", "1308-01-01", 42.51, 45.91, 20.99, 30.36),
    (11, "0042/H-0008-1", "1323-01-01", 39.77, 40.81, 28.40, 30.18),
    (12, "0042/H-0009-1", "1329-06-01", 40.61, 41.39, 28.79, 29.93),
    (13, "0042/H-0012-1", "1346-06-01", 40.34, 44.80, 38.34, 49.87),
    (14, "0042/H-0013-1", "1346-06-01", 40.70, 41.49, 43.83, 45.67),
    (15, "0042/H-0015-1", "1352-03-01", 40.12, 40.83, 26.15, 26.85),
    (16, "0042/H-0016-1", "1352-03-01", 39.60, 40.55, 24.81, 26.05),
    (17, "0042/H-0039-1", "1408-06-01", 35.64, 38.56, 39.32, 43.30),
    (17, "0042/H-0039-2", "1409-01-01", 35.19, 38.64, 38.56, 43.89),
    (17, "0042/H-0039-3", "1409-01-01", 36.91, 38.38, 41.41, 43.19),
    (18, "0043/H-0017-1", "1517-09-10", 20.79, 26.93, 24.38, 31.06),
    (18, "0043/H-0017-2", "1517-09-10", 30.21, 31.57, 21.45, 24.29),
    (18, "0043/H-0017-3", "1517-09-10", 32.59, 33.11, 37.66, 38.75),
    (19, "0044/H-0011-1", "1546-01-01", 27.95, 30.30, 47.20, 49.04),
    (19, "0044/H-0011-2", "1546-01-01", 30.46, 31.15, 46.34, 47.71),
    (20, "0048/H-0009-1", "1602-01-01", 23.00, 26.08, 51.12, 53.21),
]


def gecersiz_say(ix, parca, halka, B):
    n = 0
    for p in ix or []:
        hs = [parca[h] for h in halka[p]]
        try:
            pg = Polygon(hs[0], hs[1:])
        except Exception:
            n += 1; continue
        if pg.intersects(B) and not pg.is_valid:
            n += 1
    return n


def main():
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
    out = []
    for no, vid, gun, la0, la1, lo0, lo1 in V:
        B = box(lo0, la0, lo1, la1); lat = (la0 + la1) / 2
        own = {}
        for i in agac.query(B.buffer(0.5)):
            i = int(i); y = YER.get(PET[i]["a"])
            own[i] = norm(geo.sahip(y, gun)) if y else None
        g0, gec = {}, 0
        for d in DN["DONEMLER"]:
            if d["f"] <= gun < d["t"]:
                for kat in ("o", "v"):
                    gec += gecersiz_say(d.get(kat), DN["PARCALAR"], DN["PARCA_HALKA"], B)
                    g = geo.coz(d.get(kat), DN["PARCALAR"], DN["PARCA_HALKA"]).intersection(B)
                    if not g.is_empty: g0["OSM-" + kat] = g
        for s in DH["DEVLET_HARITA"]:
            for p in s["dnm"]:
                if p["f"] <= gun < p["t"]:
                    gec += gecersiz_say(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"], B)
                    g = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"]).intersection(B)
                    if not g.is_empty: g0[s["id"]] = (g)
        # örtüşme
        def ort(gs):
            ks, t, cift = list(gs), 0, []
            for i in range(len(ks)):
                for j in range(i + 1, len(ks)):
                    if ks[i].startswith("OSM") and ks[j].startswith("OSM"):
                        continue
                    a = geo.km2(gs[ks[i]].intersection(gs[ks[j]]), lat)
                    if a >= 1:
                        t += a; cift.append((ks[i], ks[j], round(a)))
            return t, cift
        o0, cift = ort(g0)
        # boşluk kovaları
        boya = unary_union(list(g0.values())) if g0 else Polygon()
        tum = unary_union([cell[i] for i in own]) if own else Polygon()
        sahipli = unary_union([cell[i] for i, s in own.items() if s]) if own else Polygon()
        karaB = kara.intersection(B)
        bos = karaB.difference(boya)
        k_hucresiz = geo.km2(bos.difference(tum), lat)
        k_sahipli = geo.km2(bos.intersection(sahipli), lat)
        k_sahipsiz = geo.km2(bos.intersection(tum).difference(sahipli), lat)
        sahipli_bos_hucre = []
        for i, s in own.items():
            if s and cell[i].intersects(B):
                x = geo.km2(bos.intersection(cell[i]), lat)
                if x >= 20:
                    sahipli_bos_hucre.append((PET[i]["a"], s, round(x)))
        # kafes
        sahipsiz = unary_union([cell[i] for i, s in own.items() if s is None]) if own else Polygon()
        g1, kk, kh = {}, 0, 0
        for k, g in g0.items():
            kendi = unary_union([cell[i] for i, s in own.items() if s == k])
            kaf = unary_union([kendi, sahipsiz]).buffer(0.002)
            sil = g.difference(kaf)
            kk += geo.km2(sil.intersection(tum), lat); kh += geo.km2(sil.difference(tum), lat)
            g1[k] = g.intersection(kaf)
        o1, _ = ort(g1)
        yb = geo.km2(boya.difference(unary_union(list(g1.values()))).intersection(tum).intersection(karaB), lat) if g1 else 0
        r = {"motor": no, "gorsel": vid, "gun": gun, "katman": sorted(g0),
             "ortusme_km2": round(o0), "ortusme_cift": cift[:5], "gecersiz_halka": gec,
             "bosluk_hucresiz_km2": round(k_hucresiz), "bosluk_sahipli_km2": round(k_sahipli),
             "bosluk_sahipsiz_km2": round(k_sahipsiz), "sahipli_bos_hucre": sorted(sahipli_bos_hucre, key=lambda x: -x[2])[:4],
             "kafes_ortusme_sonra": round(o1), "kafes_sil_komsu": round(kk), "kafes_sil_hucresiz": round(kh),
             "kafes_yeni_bosluk": round(yb)}
        out.append(r)
        print(f"M{no:<2} {vid:15} {gun} ört {r['ortusme_km2']:6}→{r['kafes_ortusme_sonra']:5} · boş hücresiz {r['bosluk_hucresiz_km2']:6}"
              f" sahipli {r['bosluk_sahipli_km2']:5} sahipsiz {r['bosluk_sahipsiz_km2']:5} · geçersiz {gec} · {cift[:2]} {sahipli_bos_hucre[:2]}")
    json.dump(out, open(os.path.join(KOK, "denetim", "OLCUM-GEO-TUR2-0916.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()

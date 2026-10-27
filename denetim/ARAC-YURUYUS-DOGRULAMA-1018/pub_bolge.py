"""Yayinlanmis ufuk bantlari: bolge/tarih/bant basina bosluk sinifi (a,c,d,e), eksklav (b), girinti (c).
KARA = ne_10m_land − ne_10m_lakes (goller bosluk sayilmaz). Salt okuma."""
import json, math, os, sys, time
import numpy as np
import shapely
from shapely.geometry import box, Polygon
from shapely.ops import unary_union
from shapely import STRtree

SP = os.environ.get("YDOG_DIZIN") or os.path.join(__import__("tempfile").gettempdir(), "ydog1018")
os.makedirs(SP, exist_ok=True)
BETIK_DIZIN = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BETIK_DIZIN)
import bantyukle

KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KMD = 6371.0088 * math.pi / 180
B = bantyukle.Bant()
SON = {}
t0 = time.time()
bant_ad = [b["ad"] for b in B.bant]
HEDEF = sys.argv[1:] or None      # ornek: "Anadolu" "Orta Asya"


def gecerli(g):
    return g if g.is_valid else shapely.make_valid(g)


def sinuz(g, lon0):
    def f(c):
        return np.column_stack([(c[:, 0] - lon0) * np.cos(np.radians(c[:, 1])) * KMD, c[:, 1] * KMD])
    return gecerli(shapely.transform(g, f))


def yukle(yol):
    h = json.load(open(os.path.join(KOK, "veri-kaynak", yol), encoding="utf-8"))
    return unary_union([gecerli(shapely.geometry.shape(f["geometry"])) for f in h["features"]])


LAND = yukle("ne_10m_land.geojson")
GOL = yukle("ne_10m_lakes.geojson")
KARA_DUNYA = gecerli(LAND.difference(GOL))
print("kara yuklendi %.1f sn" % (time.time() - t0), flush=True)

GEOMC = {}
def kgeom(k, i):
    key = (k, i)
    if key not in GEOMC:
        GEOMC[key] = gecerli(B.kayit_geom(B.bant[k]["dnm"][i]))
    return GEOMC[key]


def aktif(tarih):
    return [i for i, r in enumerate(B.bant[0]["dnm"]) if r["f"] <= tarih < r["t"]]


BOLGELER = {
    "Anadolu": ((26, 35, 45, 42), ("1300-06-15", "1520-06-15", "1683-06-15")),
    "Sahra kenari": ((-10, 20, 35, 33), ("1520-06-15", "1683-06-15")),
    "Orta Asya": ((55, 36, 85, 50), ("1520-06-15", "1683-06-15")),
    "Arabistan": ((35, 12, 60, 32), ("1520-06-15", "1683-06-15")),
}
SON["bolge"] = {}
for ad, (kutu, tarihler) in BOLGELER.items():
    if HEDEF and ad not in HEDEF:
        continue
    bx = box(*kutu)
    lon0 = (kutu[0] + kutu[2]) / 2
    kara = sinuz(KARA_DUNYA.intersection(bx), lon0)
    kutu_sin = sinuz(bx, lon0)
    kenar_hat = kutu_sin.boundary
    kara_km2 = kara.area
    kara_kenar = kara.boundary
    for tarih in tarihler:
        ak = aktif(tarih)
        sonuc = {}
        for k in range(3):
            devgeo = {}
            for i in ak:
                g = kgeom(k, i).intersection(bx)
                if g.is_empty:
                    continue
                devgeo.setdefault(B.bant[k]["dnm"][i]["d"], []).append(g)
            dev = {d: sinuz(unary_union(l), lon0) for d, l in devgeo.items()}
            sahip = gecerli(unary_union(list(dev.values()))) if dev else Polygon()
            bosluk = kara.difference(sahip)
            parcalar = [p for p in (bosluk.geoms if hasattr(bosluk, "geoms") else [bosluk])
                        if p.area > 25 and p.geom_type == "Polygon"]
            sat = {"kara km2": round(kara_km2), "sahipli kara km2": round(kara.intersection(sahip).area),
                   "bosluk km2": round(sum(p.area for p in parcalar)), "bilesen": len(parcalar)}
            sinif = {"kenar(kutu kenarina degiyor)": [0, 0.0], "sahipsiz-uzak (0 devlet)": [0, 0.0],
                     "tek devlet iceride (a)": [0, 0.0], "tek devlet+deniz (c/e)": [0, 0.0],
                     "iki+ devlet arasi (d)": [0, 0.0]}
            kapanir = {"cap<=400": [0, 0.0], "cap>400": [0, 0.0]}
            ayrinti = []
            devl_ad = list(dev.keys())
            devl_agac = STRtree([dev[x] for x in devl_ad])
            for p in parcalar:
                pb = p.buffer(3)
                kenarda = pb.intersects(kenar_hat)
                kom = {devl_ad[j] for j in devl_agac.query(pb) if dev[devl_ad[j]].intersects(pb)}
                deniz = p.boundary.intersection(kara_kenar.buffer(2)).length
                deniz_temas = deniz > 0.15 * p.boundary.length
                try:
                    cap = 2 * shapely.maximum_inscribed_circle(p, 5).length
                except Exception:
                    cap = float("nan")
                if kenarda:
                    s = "kenar(kutu kenarina degiyor)"
                elif len(kom) == 0:
                    s = "sahipsiz-uzak (0 devlet)"
                elif len(kom) == 1:
                    s = "tek devlet+deniz (c/e)" if deniz_temas else "tek devlet iceride (a)"
                else:
                    s = "iki+ devlet arasi (d)"
                sinif[s][0] += 1; sinif[s][1] += p.area
                if s != "kenar(kutu kenarina degiyor)":
                    kk = "cap<=400" if cap <= 400 else "cap>400"
                    kapanir[kk][0] += 1; kapanir[kk][1] += p.area
                ayrinti.append((round(p.area), round(cap), s, sorted(kom)[:3]))
            ayrinti.sort(reverse=True)
            sat["siniflar"] = {s: [v[0], round(v[1])] for s, v in sinif.items()}
            sat["kenar-disi: capi<=400 km (B kapatir) / >400"] = {kk: [v[0], round(v[1])] for kk, v in kapanir.items()}
            sat["en buyuk 6 (km2, cap km, sinif, komsu)"] = ayrinti[:6]
            # (b) eksklav
            adaylar = 0; bilesen_top = 0; ayrik_devlet = 0
            for d, g in dev.items():
                parts = [q for q in (g.geoms if hasattr(g, "geoms") else [g]) if q.area > 25]
                bilesen_top += len(parts)
                if len(parts) < 2:
                    continue
                ayrik_devlet += 1
                ob = gecerli(unary_union([dev[x] for x in dev if x != d])) if len(dev) > 1 else Polygon()
                for a in range(len(parts)):
                    for b in range(a + 1, len(parts)):
                        if parts[a].distance(parts[b]) > 403:
                            continue
                        hat = shapely.shortest_line(parts[a], parts[b])
                        kara_oran = hat.intersection(kara).length / max(hat.length, 1e-9)
                        if kara_oran >= 0.8 and not hat.intersects(ob):
                            adaylar += 1
            sat["eksklav (b)"] = {"devlet": len(dev), "bilesen toplami": bilesen_top,
                                  "birden cok bilesenli devlet": ayrik_devlet,
                                  "403km altinda kara kopru adayi cift": adaylar}
            # (c) girinti ~ closing(50 km) bos karada
            girinti = 0.0
            for d, g in dev.items():
                cl = gecerli(g.buffer(50).buffer(-50))
                fark = cl.difference(g).intersection(kara)
                if len(dev) > 1:
                    fark = fark.difference(gecerli(unary_union([dev[x] for x in dev if x != d])))
                girinti += fark.area
            sat["girinti (c) ~ closing 50km, bos kara km2"] = round(girinti)
            sonuc[bant_ad[k]] = sat
        SON["bolge"][ad + " " + tarih] = sonuc
        print(ad, tarih, "tamam %.0f sn" % (time.time() - t0), flush=True)
        json.dump(SON, open(os.path.join(SP, "pub_bolge_%s.json" % ("_".join(HEDEF).replace(" ", "") if HEDEF else "hepsi")), "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
print("BITTI %.0f sn" % (time.time() - t0))

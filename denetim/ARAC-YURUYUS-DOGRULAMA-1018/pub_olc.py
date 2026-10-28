"""YAYINLANMIS UFUK BANTLARI (data/ufuk_bantlari_ust.js + ufuk_bant_parcalar*.js -> coz-c ile acilmis ham dosya)
uzerinde olcum. Salt okuma. Cikti: pub_sonuc.json + ekrana metin.
Bolum 1 yapi/alan (tum kayitlar) · 2 geometrik ic ice (ornek) · 3 devletler arasi binme · 4 bolge bosluk sinifi (a,d,e)
· 5 eksklav (b) · 6 girinti (c) yaklasik."""
import json, math, os, random, sys, time
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

# ---------- halka alanlari (km2, yerel cos(lat) duzeltmeli shoelace) ----------
hal_alan = np.zeros(B.nhalka)
hal_lat = np.zeros(B.nhalka)
for k in range(B.nhalka):
    r = B.halka(k)
    x = r[:, 0]; y = r[:, 1]
    ml = float(y.mean())
    xs = x * math.cos(math.radians(ml))
    hal_alan[k] = 0.5 * abs(float(np.dot(xs[:-1], y[1:]) - np.dot(xs[1:], y[:-1]))) * KMD * KMD
    hal_lat[k] = ml
print("halka alanlari %.1f sn" % (time.time() - t0), flush=True)


def parca_alan(p):
    hs = B.parca[p]
    return hal_alan[hs[0]] - sum(hal_alan[h] for h in hs[1:])


bant_ad = [b["ad"] for b in B.bant]
alan = np.array([[sum(parca_alan(p) for p in r["g"]) for r in b["dnm"]] for b in B.bant])  # 3 x n
n = alan.shape[1]
print("kayit alanlari %.1f sn" % (time.time() - t0), flush=True)
A5, A7, A10 = alan
tol = 1.002
SON["yapi"] = {"kayit": n, "devlet": len({r["d"] for r in B.bant[0]["dnm"]}),
               "bant": bant_ad, "saat": [b["saat"] for b in B.bant], "izi": B.izi.decode()[:120]}
SON["monoton"] = {
    "A5>A7": int((A5 > A7 * tol).sum()), "A7>A10": int((A7 > A10 * tol).sum()),
    "A5>A10": int((A5 > A10 * tol).sum()),
    "A7==A5 (+-0.2%)": int((np.abs(A7 - A5) <= 0.002 * A5).sum()),
    "A10==A7 (+-0.2%)": int((np.abs(A10 - A7) <= 0.002 * A7).sum()),
    "A10==A5 (+-0.2%)": int((np.abs(A10 - A5) <= 0.002 * A5).sum()),
}
buy = A5 > 1000
r75 = (A7 / np.maximum(A5, 1))[buy]; r105 = (A10 / np.maximum(A5, 1))[buy]
SON["oran"] = {"n(A5>1000km2)": int(buy.sum()),
               "A7/A5 p10,medyan,p90,maks": [round(float(np.percentile(r75, q)), 3) for q in (10, 50, 90, 100)],
               "A10/A5 p10,medyan,p90,maks": [round(float(np.percentile(r105, q)), 3) for q in (10, 50, 90, 100)]}
# kendi kendine tamamlayan teorik: kucuk izole devlette (A5<60000) oran
k_iz = (A5 > 1000) & (A5 < 30000)
SON["oran_kucuk"] = {"n": int(k_iz.sum()),
                     "A7/A5 medyan": round(float(np.median((A7 / A5)[k_iz])), 3),
                     "A10/A5 medyan": round(float(np.median((A10 / A5)[k_iz])), 3)}
print(json.dumps(SON, ensure_ascii=False, indent=1), flush=True)

# ---------- 2. geometrik ic ice (orneklem) ----------
random.seed(7)
idx = [i for i in range(n) if A5[i] > 3000]
orn = random.sample(idx, min(300, len(idx)))
ihlal57 = ihlal710 = 0
topA5 = topfark57 = topfark710 = 0.0


def geom(k, i):
    return B.kayit_geom(B.bant[k]["dnm"][i])


def km2g(g):
    if g.is_empty:
        return 0.0
    c = g.centroid.y
    return g.area * KMD * KMD * math.cos(math.radians(c))


maksfark = []
for i in orn:
    g5, g7, g10 = geom(0, i), geom(1, i), geom(2, i)
    f57 = km2g(g5.difference(g7)); f710 = km2g(g7.difference(g10))
    topA5 += km2g(g5); topfark57 += f57; topfark710 += f710
    maksfark.append(max(f57 / max(km2g(g5), 1), f710 / max(km2g(g7), 1)))
    if f57 > 0.002 * km2g(g5): ihlal57 += 1
    if f710 > 0.002 * km2g(g7): ihlal710 += 1
SON["geometrik_ic_ice"] = {"orneklem": len(orn), "g5 ⊄ g7 (>%0.2 alan)": ihlal57,
                           "g7 ⊄ g10 (>%0.2 alan)": ihlal710,
                           "Σ alan(g5\\g7) km2": round(topfark57, 1), "Σ alan(g7\\g10) km2": round(topfark710, 1),
                           "Σ alan(g5) km2": round(topA5), "maks goreli fark": round(max(maksfark), 5)}
print(json.dumps(SON["geometrik_ic_ice"], ensure_ascii=False), flush=True)

# ---------- yardimci: sinuzoidal duzlem ----------
def sinuz(g, lon0):
    def f(c):
        return np.column_stack([(c[:, 0] - lon0) * np.cos(np.radians(c[:, 1])) * KMD, c[:, 1] * KMD])
    return shapely.transform(g, f)


land_ham = json.load(open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
LAND = unary_union([shapely.geometry.shape(f["geometry"]) for f in land_ham["features"]])
print("kara yuklendi %.1f sn" % (time.time() - t0), flush=True)

GEOMC = {}
def kgeom(k, i):
    key = (k, i)
    if key not in GEOMC:
        GEOMC[key] = B.kayit_geom(B.bant[k]["dnm"][i])
    return GEOMC[key]


def aktif(tarih):
    return [i for i, r in enumerate(B.bant[0]["dnm"]) if r["f"] <= tarih < r["t"]]


# ---------- 3. devletler arasi binme (ayni gun, ayni bant) ----------
SON["binme"] = {}
for tarih in ("1300-06-15", "1520-06-15", "1683-06-15", "1800-06-15"):
    ak = aktif(tarih)
    sat = {}
    for k in range(3):
        gl = [kgeom(k, i) for i in ak]
        ids = [B.bant[k]["dnm"][i]["d"] for i in ak]
        agac = STRtree(gl)
        top = 0.0; cift = 0; toplam = sum(km2g(g) for g in gl)
        buyuk = []
        for a, ga in enumerate(gl):
            for b in agac.query(ga):
                if b <= a: continue
                if ids[a] == ids[b]: continue
                kes = ga.intersection(gl[b])
                if kes.is_empty: continue
                ak2 = km2g(kes)
                if ak2 > 1.0:
                    top += ak2; cift += 1; buyuk.append((round(ak2), ids[a], ids[b]))
        buyuk.sort(reverse=True)
        sat[bant_ad[k]] = {"devlet": len(ak), "Σalan km2": round(toplam), "binen cift": cift,
                           "Σbinme km2": round(top), "binme/alan": round(top / max(toplam, 1), 5),
                           "en buyuk 3": buyuk[:3]}
    SON["binme"][tarih] = sat
    print(tarih, json.dumps(sat, ensure_ascii=False), flush=True)

# ---------- 4-6. bolge bosluk sinifi / eksklav / girinti ----------
BOLGELER = {
    "Anadolu": ((26, 35, 45, 42), ("1300-06-15", "1520-06-15", "1683-06-15")),
    "Sahra kenari": ((-10, 20, 35, 33), ("1520-06-15", "1683-06-15")),
    "Orta Asya": ((55, 36, 85, 50), ("1520-06-15", "1683-06-15")),
    "Arabistan": ((35, 12, 60, 32), ("1520-06-15", "1683-06-15")),
}
SON["bolge"] = {}
for ad, (kutu, tarihler) in BOLGELER.items():
    bx = box(*kutu)
    lon0 = (kutu[0] + kutu[2]) / 2
    kara = sinuz(LAND.intersection(bx), lon0)
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
                if g.is_empty: continue
                devgeo.setdefault(B.bant[k]["dnm"][i]["d"], []).append(g)
            dev = {d: sinuz(unary_union(l), lon0) for d, l in devgeo.items()}
            sahip = unary_union(list(dev.values())) if dev else Polygon()
            sahip_kara = sahip.intersection(kara)
            bosluk = kara.difference(sahip)
            parcalar = [p for p in (bosluk.geoms if hasattr(bosluk, "geoms") else [bosluk]) if p.area > 25]  # >25 km2
            sat = {"kara km2": round(kara_km2), "sahipli kara km2": round(sahip_kara.area),
                   "bosluk km2": round(sum(p.area for p in parcalar)), "bilesen": len(parcalar)}
            sinif = {"kenar(kutu kenarina degiyor)": [0, 0.0], "sahipsiz-uzak (0 devlet)": [0, 0.0],
                     "tek devlet iceride (a)": [0, 0.0], "tek devlet+deniz (c/e)": [0, 0.0],
                     "iki+ devlet arasi (d)": [0, 0.0]}
            kapanir = {"B 400 km kuraliyla kapanir (cap<=400)": 0.0, "400 km'yi asar (cap>400)": 0.0}
            kapanir_n = {"B 400 km kuraliyla kapanir (cap<=400)": 0, "400 km'yi asar (cap>400)": 0}
            ayrinti = []
            devl_agac = STRtree(list(dev.values())); devl_ad = list(dev.keys())
            for p in parcalar:
                kenarda = p.buffer(3).intersects(kenar_hat)
                kom = {devl_ad[j] for j in devl_agac.query(p.buffer(3)) if dev[devl_ad[j]].intersects(p.buffer(3))}
                deniz = p.boundary.intersection(kara_kenar.buffer(2)).length
                deniz_temas = deniz > 0.15 * p.boundary.length
                if shapely.is_empty(p): continue
                try:
                    cap = 2 * shapely.minimum_bounding_radius(p) if False else 2 * shapely.maximum_inscribed_circle(p, 5).length
                except Exception:
                    cap = float("nan")
                if kenarda: s = "kenar(kutu kenarina degiyor)"
                elif len(kom) == 0: s = "sahipsiz-uzak (0 devlet)"
                elif len(kom) == 1: s = "tek devlet+deniz (c/e)" if deniz_temas else "tek devlet iceride (a)"
                else: s = "iki+ devlet arasi (d)"
                sinif[s][0] += 1; sinif[s][1] += p.area
                if s != "kenar(kutu kenarina degiyor)":
                    kk = "B 400 km kuraliyla kapanir (cap<=400)" if cap <= 400 else "400 km'yi asar (cap>400)"
                    kapanir[kk] += p.area; kapanir_n[kk] += 1
                    ayrinti.append((round(p.area), round(cap), s, sorted(kom)[:3]))
            ayrinti.sort(reverse=True)
            sat["siniflar"] = {s: [v[0], round(v[1])] for s, v in sinif.items()}
            sat["kenar-disi: B kuraliyla"] = {kk: [kapanir_n[kk], round(kapanir[kk])] for kk in kapanir}
            sat["en buyuk 5 (km2, cap km, sinif, komsu)"] = ayrinti[:5]
            # (b) eksklav: ayni devletin bilesenleri, 403 km altinda, arada baska devlet yok
            parc_dev = {}
            adaylar = 0; bilesen_top = 0; birlesen = 0
            for d, g in dev.items():
                parts = [q for q in (g.geoms if hasattr(g, "geoms") else [g]) if q.area > 25]
                bilesen_top += len(parts)
                if len(parts) < 2: continue
                ob = unary_union([dev[x] for x in dev if x != d]) if len(dev) > 1 else Polygon()
                for a in range(len(parts)):
                    for b in range(a + 1, len(parts)):
                        dist = parts[a].distance(parts[b])
                        if dist > 403: continue
                        hat = shapely.shortest_line(parts[a], parts[b])
                        kara_oran = hat.intersection(kara).length / max(hat.length, 1e-9)
                        baska = hat.intersects(ob)
                        if kara_oran >= 0.8 and not baska:
                            adaylar += 1
            sat["eksklav (b)"] = {"devlet bilesen toplami": bilesen_top, "403km altinda kara kopru adayi cift": adaylar}
            # (c) girinti: closing(50 km) - devlet, bos karada
            if dev:
                diger = None
                girinti = 0.0
                tum = unary_union(list(dev.values()))
                for d, g in dev.items():
                    cl = g.buffer(50).buffer(-50)
                    fark = cl.difference(g).intersection(kara)
                    fark = fark.difference(unary_union([dev[x] for x in dev if x != d])) if len(dev) > 1 else fark
                    girinti += fark.area
                sat["girinti (c) ~ closing 50km, bos kara km2"] = round(girinti)
            sonuc[bant_ad[k]] = sat
        SON["bolge"][ad + " " + tarih] = sonuc
        print(ad, tarih, "tamam %.0f sn" % (time.time() - t0), flush=True)
        json.dump(SON, open(os.path.join(SP, "pub_sonuc.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump(SON, open(os.path.join(SP, "pub_sonuc.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("BITTI %.0f sn" % (time.time() - t0))

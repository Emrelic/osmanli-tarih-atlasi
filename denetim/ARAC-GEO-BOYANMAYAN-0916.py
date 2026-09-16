# -*- coding: utf-8 -*-
"""GEOMETRI 0916 İKİNCİ TUR — "SAHİPLİ AMA BOYANMAYAN HÜCRE" sınıfı + Mardin kalan örtüşmesi. YALNIZ OKUR.
Her hücre için: o gün sahibi · sahibin o gün DEVLET_HARITA'da aktif dönemi var mı (f/t) ·
sahip gövdesi hücrenin yüzde kaçını boyuyor · noktanın kendi hücresi boyanıyor mu ·
kayıt alanları (kur · bit · bos · kasitli_bosluk · k · s dönemi) · künye penceresi (devletler.js).
ÖNGÖRÜ (ölçümden önce): çoğunda sahip gövdesi o gün VAR ama hücreyi kısmen boyuyor ⇒ PUAN/KARA
kesimi; "dönem yok" çıkarsa sebep başka (künye/boya anahtarı/tâbi önceliği).
"""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Point, Polygon
from shapely.ops import unary_union
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)

HEDEF = [("Buraymî", "1820-01-08"), ("Östersund (Jämtland)", "1299-01-01"), ("Meciboj (Mejibuji)", "1299-01-01"),
         ("Viyana", "1281-01-01"), ("Šiauliai", "1281-01-01"), ("Šiauliai", "1721-08-30"), ("Alta", "1281-01-01"),
         ("Küngrat", "1281-01-01"), ("Câlû", "1517-09-10"), ("Berat", "1281-01-01"), ("Armutlu", "1323-01-01"),
         ("Beykoz", "1329-06-01"), ("İmroz", "1352-03-01")]
ORT = [("1409-01-01", 42.3, 37.6)]  # Mardin kutusunun ortası — kalan örtüşme

DN = geo.js_oku("donemler.js"); DH = geo.js_oku("devletler_harita.js"); PG = geo.js_oku("petek_govde.js")
YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
KUN = {k["id"]: k for k in girdi.oku_devletler()}
HAR = {}
for k in KUN.values():
    HAR.setdefault(k.get("harita") or k["id"], k)
ix = {p["a"]: i for i, p in enumerate(DN["PETEKLER"])}
PGP = PG["PETEK_GOVDE_PARCA"]


def hucre(ad):
    ps = [Polygon(PGP[j][0], PGP[j][1:]) for j in PG["PETEK_GOVDE"][ix[ad]]]
    return unary_union([p if p.is_valid else p.buffer(0) for p in ps])


def govde(did, gun):
    for s in DH["DEVLET_HARITA"]:
        if s["id"] == did:
            for p in s["dnm"]:
                if p["f"] <= gun < p["t"]:
                    return geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"]), (p["f"], p["t"])
            return None, ("dnm var, bu gün YOK", [(p["f"], p["t"]) for p in s["dnm"]][:4])
    return None, "DEVLET_HARITA'da HİÇ YOK"


out = []
for ad, gun in HEDEF:
    y = YER[ad]; c = hucre(ad); lat = c.centroid.y
    s = geo.sahip(y, gun)
    g, bilgi = govde(s, gun) if s not in (None, "OSMANLI", "TABI") else (None, "osmanlı/boş")
    kun = KUN.get(s) or HAR.get(s)
    r = {"hucre": ad, "gun": gun, "sahip": s, "hucre_km2": round(geo.km2(c, lat)),
         "govde_donemi": bilgi, "govde_boyar_%": round(100 * g.intersection(c).area / c.area, 1) if g else None,
         "nokta_boyali": bool(g and g.buffer(0.01).contains(Point(y["lon"], y["lat"]))),
         "kayit": {k: y.get(k) for k in ("k", "kur", "bit", "bos", "kasitli_bosluk", "tur", "_kaynak")},
         "s_donemi": [p for p in y.get("s") or [] if p["f"] <= gun < p["t"]],
         "kunye": {k: kun.get(k) for k in ("id", "f", "t", "harita")} if kun else "KÜNYE YOK"}
    out.append(r); print(r)

for gun, lon, lat in ORT:
    P = Point(lon, lat)
    kim = []
    for s in DH["DEVLET_HARITA"]:
        for p in s["dnm"]:
            if p["f"] <= gun < p["t"]:
                g = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"])
                if g.buffer(0.3).contains(P):
                    kim.append((s["id"], p["f"], p["t"]))
    print("MARDIN kutusu ortası", gun, kim)
json.dump(out, open(os.path.join(KOK, "denetim", "OLCUM-GEO-BOYANMAYAN-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1, default=str)

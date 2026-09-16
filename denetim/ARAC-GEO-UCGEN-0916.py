# -*- coding: utf-8 -*-
"""GEOMETRI 0916 — ÜÇGEN/KAMA sınavı (H-0012 · H-0124 · H-0069). YALNIZ OKUR.

Soru: ekrandaki düz kenarlı üçgenin altındaki TABAN hücre kimin, o gün sahibi
var mı, ve o gün hangi gövde(ler) onu boyuyor? Ayrıca Osmanlı katmanları
(o · v · h) kendi aralarında örtüşüyor mu (ARAC-GEO-OLCUM bu çifti atlıyordu).
"""
import json, math, os, sys
sys.stdout.reconfigure(encoding="utf-8")
from shapely.geometry import Point, Polygon, box
from shapely.ops import unary_union
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import importlib.util
_sp = importlib.util.spec_from_file_location("geo", os.path.join(KOK, "denetim", "ARAC-GEO-OLCUM-0916.py"))
geo = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(geo)

HUCRELER = ["Vladikavkaz", "Kabartay (Nalçik)", "Rostov (Don)", "Taganrog", "Azak", "Çerkask (Razdory)"]
GUNLER = {"H-0012": "1605-10-03", "H-0124": "1679-01-01", "H-0069": "1642-02-26"}

DN = geo.js_oku("donemler.js"); DH = geo.js_oku("devletler_harita.js"); PG = geo.js_oku("petek_govde.js")
YER = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
ix = {p["a"]: i for i, p in enumerate(DN["PETEKLER"])}
PGP = PG["PETEK_GOVDE_PARCA"]
out = {"hucre": {}, "boyama": {}, "osm_ic_ortusme": {}}


def hucre(ad):
    ps = [Polygon(PGP[j][0], PGP[j][1:]) for j in PG["PETEK_GOVDE"][ix[ad]]]
    return unary_union([p if p.is_valid else p.buffer(0) for p in ps])


for ad in HUCRELER:
    c = hucre(ad)
    lat = c.centroid.y
    y = YER[ad]
    out["hucre"][ad] = {"km2": round(geo.km2(c, lat)), "bbox": [round(v, 2) for v in c.bounds],
                        "uzun_kenar_>120km": geo.uzun_kenarlar(c, lat)[0],
                        "en_uzun_kenar_km": geo.uzun_kenarlar(c, lat)[1],
                        "kur": y.get("kur"), "kasitli_bosluk": y.get("kasitli_bosluk"), "bos": y.get("bos"),
                        "ilk_sahiplik": min([p["f"] for k in ("s", "d", "v") for p in y.get(k) or []] or [None])}

for vid, gun in GUNLER.items():
    govde = {}
    for d in DN["DONEMLER"]:
        if d["f"] <= gun < d["t"]:
            for kat in ("o", "v"):
                govde["OSM-" + kat] = geo.coz(d.get(kat), DN["PARCALAR"], DN["PARCA_HALKA"])
            for hi, hb in enumerate(d.get("h") or []):
                govde[f"OSM-h{hi}"] = geo.coz(hb["g"], DN["PARCALAR"], DN["PARCA_HALKA"])
    for s in DH["DEVLET_HARITA"]:
        for p in s["dnm"]:
            if p["f"] <= gun < p["t"]:
                govde[s["id"]] = geo.coz(p["g"], DH["DEVLET_PARCALAR"], DH["DEVLET_PARCA_HALKA"])
    for ad in HUCRELER:
        c = hucre(ad)
        lat = c.centroid.y
        if not c.intersects(box(35, 40, 50, 50)):
            continue
        pay = {}
        for k, g in govde.items():
            x = g.intersection(c)
            if not x.is_empty and geo.km2(x, lat) > 5:
                pay[k] = round(100 * x.area / c.area, 1)
        y = YER[ad]
        out["boyama"].setdefault(vid, {})[ad] = {"sahip_gunde": geo.sahip(y, gun), "boyayan_%": pay,
                                                 "boyanmayan_%": round(100 - 100 * unary_union(
                                                     [g for g in govde.values()]).intersection(c).area / c.area, 1)}
    B = box(37, 40.5, 49, 48.5)
    ok = [k for k in govde if k.startswith("OSM")]
    for i in range(len(ok)):
        for j in range(i + 1, len(ok)):
            x = govde[ok[i]].intersection(govde[ok[j]]).intersection(B)
            if not x.is_empty and geo.km2(x, 44) > 5:
                out["osm_ic_ortusme"].setdefault(vid, []).append((ok[i], ok[j], round(geo.km2(x, 44))))

json.dump(out, open(os.path.join(KOK, "denetim", "OLCUM-GEO-UCGEN-0916.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print(json.dumps(out, ensure_ascii=False, indent=1))

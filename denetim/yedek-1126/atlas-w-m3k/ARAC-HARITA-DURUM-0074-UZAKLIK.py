# -*- coding: utf-8 -*-
"""H-0008 SEBEP TESTI 3 — cakisan govdeler NOKTAYA YAKIN yerde mi cakisiyor,
yoksa NOKTASIZ bosluklarda mi?

Her buyuk cakisma lekesinin agirlik merkezi icin: (a) dunyadaki en yakin
yerlesim noktasi, (b) ciftin iki tarafinin KENDI noktalarina uzakligi.
Nokta seyrek bolgede cakisiyorsa sebep 'seyrek bolge genisleme kurallari',
nokta yogun bolgede cakisiyorsa sebep petek/sinir mantigidir.
Cikti: denetim/HARITA-DURUM-0074-UZAKLIK.json
"""
import io, os, sys, json
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = [y for y in girdi.yukle(sessiz=True) if y.get("lat") is not None]

def pad(t):
    if not t: return ""
    p = str(t).split("-")
    return "%04d-%02d-%02d" % (int(p[0]), int(p[1]) if len(p) > 1 else 1,
                               int(p[2]) if len(p) > 2 else 1)

def sahipleri(y, g):
    out = set()
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            f, t = pad(p.get("f", "")), pad(p.get("t", ""))
            if f and f > g: continue
            if t and t <= g: continue
            out.add(p.get("d") or p.get("kid") or ("OSM-dogrudan" if kat == "d" else "OSM-tabi"))
    return out

GUN = "1850-01-01"
d = json.load(io.open(os.path.join(KOK, "denetim",
              "HARITA-DURUM-0074-INCELIK-%s.json" % GUN), encoding="utf-8"))
buyuk = [r for r in d["ciftler"] if r["ort_genislik_km"] >= 5.0][:20]

G = pad(GUN)
sahip_nokta = {}
for y in Y:
    for k in sahipleri(y, G):
        sahip_nokta.setdefault(k, []).append(y)

SON = []
for r in buyuk:
    la, lo = r["merkez"]
    a, b = r["cift"].split(" + ")
    en = min(Y, key=lambda y: girdi.km(la, lo, y["lat"], y["lon"]))
    sat = {"cift": r["cift"], "km2": r["km2"], "merkez": r["merkez"],
           "en_yakin_nokta": en["ad"],
           "en_yakin_km": round(girdi.km(la, lo, en["lat"], en["lon"]), 1)}
    for ad in (a, b):
        ps = sahip_nokta.get(ad) or []
        sat[ad[:24] + "_nokta"] = len(ps)
        sat[ad[:24] + "_km"] = (round(min(girdi.km(la, lo, y["lat"], y["lon"]) for y in ps), 1)
                                if ps else None)
    SON.append(sat)
    sys.stdout.buffer.write(("%-44s %9s km2 | en yakin nokta %-18s %6.1f km | %s\n" % (
        r["cift"][:44], "{:,.0f}".format(r["km2"]), en["ad"][:18], sat["en_yakin_km"],
        " · ".join("%s:%s nokta/%s km" % (k[:16], sat[k[:24]+"_nokta"], sat[k[:24]+"_km"])
                   for k in (a, b)))).encode("utf-8", "replace"))

uz = sorted(s["en_yakin_km"] for s in SON)
print("\nen yakin nokta km — ortanca %.1f · asgari %.1f · azami %.1f"
      % (uz[len(uz)//2], uz[0], uz[-1]))
io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-UZAKLIK.json"), "w",
        encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi")

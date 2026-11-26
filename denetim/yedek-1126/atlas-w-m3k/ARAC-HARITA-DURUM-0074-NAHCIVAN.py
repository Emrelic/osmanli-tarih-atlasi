# -*- coding: utf-8 -*-
"""H-0008 gorselindeki gri lekenin (kacar + rusya kesisimi, 1.939 km2,
merkez 39,075N 45,812E) VERI tarafi: o pencerede hangi noktalar hangi
kimlige yazilmis."""
import sys, os, io, json
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = [y for y in girdi.yukle(sessiz=True) if y.get("lat") is not None]
G = "1828-02-22"

def pad(t):
    if not t: return ""
    p = str(t).split("-")
    return "%04d-%02d-%02d" % (int(p[0]), int(p[1]) if len(p) > 1 else 1,
                               int(p[2]) if len(p) > 2 else 1)

sec = [y for y in Y if 37.8 <= y["lat"] <= 39.7 and 44.8 <= y["lon"] <= 49.0]
satir = []
for y in sorted(sec, key=lambda y: y["ad"]):
    aktif = []
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            f, t = pad(p.get("f", "")), pad(p.get("t", ""))
            if f and f > G: continue
            if t and t <= G: continue
            aktif.append("%s:%s %s..%s" % (kat, p.get("d") or p.get("kid") or "OSMANLI",
                                           p.get("f"), p.get("t")))
    satir.append({"ad": y["ad"], "lat": y["lat"], "lon": y["lon"],
                  "dosya": y.get("_kaynak"), "m": y.get("m"), "kd_var": bool(y.get("kd")),
                  "aktif": aktif})

for s in satir:
    sys.stdout.buffer.write(("%-30s %7.3f %7.3f  m=%-14s kd=%s  %s\n" % (
        s["ad"], s["lat"], s["lon"], str(s["m"])[:14], "E" if s["kd_var"] else "-",
        " | ".join(s["aktif"]) or "SAHIPSIZ")).encode("utf-8", "replace"))
print("nokta:", len(satir))
kacar = [s for s in satir if any("kacar" in a for a in s["aktif"])]
rus = [s for s in satir if any("rusya" in a for a in s["aktif"])]
print("kacar:", len(kacar), "rusya:", len(rus))
io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-NAHCIVAN.json"), "w",
        encoding="utf-8").write(json.dumps(satir, ensure_ascii=False, indent=1))

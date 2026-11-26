# -*- coding: utf-8 -*-
"""FERHATPASA-MATRIS — KESİT (SALT OKUR)

Kutu 30-44°K · 40-52°D içindeki bütün atlas noktaları (girdi.yukle — motorun
okuduğu dosya kümesi, D037) ve üç kesitte sahip:
   1590-03-21 antlaşma · 1603-10-21 Safevî geri alışının başı · 1612-11-20 Nasuh Paşa
Sahip sırası d > v > s (ARAC-KITA29-KESIT ile aynı, app.js ile aynı).
Ayrıca 1570-1650'ye değen dönem zinciri ve m: / _kaynak basılır.

Kullanım:  py denetim/ARAC-FERHATPASA-MATRIS-KESIT-0913.py [--json yol]
"""
import os, sys, io, json, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

LA0, LA1, LO0, LO1 = 30.0, 44.0, 40.0, 52.0
KESIT = ["1590-03-21", "1603-10-21", "1612-11-20"]
Y = girdi.yukle(sessiz=True)


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tabi:" + str(p.get("d") or p.get("k"))
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return str(p.get("d"))
    return "SAHIPSIZ"


kutu = [y for y in Y if y.get("lat") is not None
        and LA0 <= y["lat"] <= LA1 and LO0 <= y["lon"] <= LO1]
kutu.sort(key=lambda z: (-z["lat"], z["lon"]))
print("# taban %d nokta · kutu %d nokta" % (len(Y), len(kutu)))
cikti = []
for y in kutu:
    zincir = []
    for alan in ("d", "v", "s"):
        for p in (y.get(alan) or []):
            if p.get("t", "9999") < "1570-01-01" or p.get("f", "0") > "1650-12-31":
                continue
            ek = {k: v for k, v in p.items() if k not in ("f", "t")}
            zincir.append((alan, p.get("f"), p.get("t"), ek))
    s = [sahip(y, g) for g in KESIT]
    cikti.append({"ad": y["ad"], "lat": y["lat"], "lon": y["lon"], "m": y.get("m"),
                  "dosya": y.get("_kaynak"), "kur": y.get("kur"),
                  "sahip": dict(zip(KESIT, s)), "zincir": zincir})
    print("%-30s %7.3f %7.3f  %-14s %-14s %-14s  %s  m=%s" % (
        y["ad"][:30], y["lat"], y["lon"], s[0][:14], s[1][:14], s[2][:14],
        y.get("_kaynak"), y.get("m")))
    for z in zincir:
        print("      %s %s→%s %s" % (z[0], z[1], z[2], json.dumps(z[3], ensure_ascii=False)[:160]))

for g in KESIT:
    c = collections.Counter(("OSM/tabi" if (sahip(y, g) == "OSMANLI" or sahip(y, g).startswith("tabi")) else sahip(y, g)) for y in kutu)
    print("# %s  %s" % (g, dict(c.most_common())))
if "--json" in sys.argv:
    with open(sys.argv[sys.argv.index("--json") + 1], "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, indent=1)

# -*- coding: utf-8 -*-
# ONCE1281-IRAN — odak_cozum.js'in `sehirler` havuzunu (d/v/s taşıyan yerleşim adları) + koordinatı dışa verir.
#   py denetim/ARAC-ONCE1281-IRAN-HAVUZ.py  → denetim/ONCE1281-IRAN-HAVUZ.json
import sys, os, io, json, importlib.util
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
h = girdi.yukle(sessiz=True)
sp = importlib.util.spec_from_file_location("nrm", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
nrm = importlib.util.module_from_spec(sp); sp.loader.exec_module(nrm)
out = []
for y in h:
    dolu = y.get("d") or y.get("v") or y.get("s")
    ad = y.get("ad")
    if not dolu or not isinstance(ad, str) or not ad: continue
    out.append({"ad": ad, "kisa": ad.split(" (")[0], "n": nrm.norm(ad.split(" (")[0]),
                "lat": y.get("lat"), "lon": y.get("lon")})
io.open(os.path.join(KOK, "denetim", "ONCE1281-IRAN-HAVUZ.json"), "w", encoding="utf-8").write(json.dumps(out, ensure_ascii=False))
print("yerlesim", len(h), "havuz", len(out))

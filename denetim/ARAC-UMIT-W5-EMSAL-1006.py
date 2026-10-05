# -*- coding: utf-8 -*-
import sys, os, io, contextlib, re
K = sys.argv[1]; sys.path.insert(0, os.path.join(K, "arac")); os.chdir(K)
import girdi
with contextlib.redirect_stderr(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
G = "1916-06-01"
satir_cache = {}
def satir(dosya, ad):
    if dosya not in satir_cache:
        satir_cache[dosya] = io.open(os.path.join("data", dosya), encoding="utf-8").read().split("\n")
    pat = 'ad:"' + ad + '"'
    for i, l in enumerate(satir_cache[dosya], 1):
        if pat in l or ('"ad": "' + ad + '"') in l:
            return i
    return "?"
def don(lst, g):
    for p in lst or []:
        if p.get("f") and p.get("t") and p["f"] <= g < p["t"]:
            return p
    return None
rows = []
for y in Y:
    if not (48.5 <= y["lat"] <= 58.5 and 13.5 <= y["lon"] <= 30.5):
        continue
    s = don(y.get("s"), G); i = don(y.get("isg"), G)
    sk = s["d"] if s else "-"
    # 1915-18 penceresinde s: zinciri (1914-08 .. 1919-01)
    zin = [f'{p["f"]}→{p["t"]} {p["d"]}' for p in (y.get("s") or []) if p["t"] > "1914-08-01" and p["f"] < "1919-01-01"]
    isg = [f'{p["f"]}→{p["t"]} {p.get("d") or p.get("isg")}' for p in (y.get("isg") or []) if p["t"] > "1914-08-01" and p["f"] < "1919-01-01"]
    kay = " ".join([y.get("kaynak") or ""] + [(p.get("kaynak") or "") for p in (y.get("s") or []) + (y.get("isg") or [])])
    desen = bool(re.search(r"deseni|aynı dayanak|kaydıyla aynı|desenin", kay))
    parti = "KASA-POLONYA-1005" if "KASA-POLONYA-1005" in kay else ("UMIT-W5" if "UMIT-W5" in kay else "")
    rows.append((sk, y["ad"], y.get("_kaynak"), satir(y.get("_kaynak"), y["ad"]), zin, isg, desen, parti))
rows.sort(key=lambda r: (r[0], r[1]))
from collections import Counter
print("1916-06-01 s: sahibi dağılımı:", Counter(r[0] for r in rows).most_common())
print("isg: taşıyan (1914-08..1919):", sum(1 for r in rows if r[5]))
for sk, ad, d, l, zin, isg, desen, parti in rows:
    if sk in ("almanya", "avusturya", "rusya", "kongre-polonyasi", "macaristan-habsburg", "rusya-gecici-hukumet") or isg:
        print(f"{sk:18} | {ad[:30]:30} | {d}:{l} | s: {' ; '.join(zin)} | isg: {' ; '.join(isg) or '-'} | {'DESEN' if desen else ''} {parti}")

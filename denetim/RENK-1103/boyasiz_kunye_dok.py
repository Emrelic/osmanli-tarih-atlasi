# -*- coding: utf-8 -*-
import io, os, sys, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
D = girdi.oku_devletler()
M = {d["id"]: d for d in D}
J = json.load(io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "kunye_boya_eslesme.json"), encoding="utf-8"))
for i in J["kunye_boyasiz"]:
    d = M[i]
    refs = set(re.findall(r"\[\[([a-z0-9-]+)\]\]", (d.get("ozet") or "") + " " + (d.get("ic_not") or "")))
    print("=====", i, "|", d.get("ad"), "|", d.get("bolge"), d.get("f"), d.get("t"))
    print("  ozet:", (d.get("ozet") or "")[:420])
    print("  refs:", sorted(refs))
    print("  ic_not_boya:", (d.get("ic_not_boya") or "")[:300], "| ic_not_komsu:", d.get("ic_not_komsu"))

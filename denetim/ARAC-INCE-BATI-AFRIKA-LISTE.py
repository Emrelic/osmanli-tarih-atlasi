# INCE-BATI-AFRIKA — KRONO-BOSLUK-0930.json'dan bati-afrika künyelerini süzer, künye penceresi + künye içi kronoloji ile basar.
import json, io, re, sys, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
d = json.load(io.open(os.path.join(KOK, "denetim", "KRONO-BOSLUK-0930.json"), encoding="utf-8"))
L = d["siralama_tek_boya"]
print("toplam", len(L), "anahtarlar", list(L[0].keys()))
bati = [x for x in L if x.get("bolge") == "bati-afrika"]
print("bati-afrika:", len(bati), "ilk220:", sum(1 for x in L[:220] if x.get("bolge") == "bati-afrika"))
dev = io.open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8").read()
bl = {}
for b in re.split(r'\n(?=\{ id:")', dev):
    m = re.match(r'\{ id:"([^"]+)"', b)
    if m:
        bl[m.group(1)] = b
kay = re.compile(r't:\s*"(\d{3,4}-\d\d-\d\d)"[^{}]{0,300}?b:\s*"([^"]+)"')
for x in bati:
    ic = [f"{t}:{b[:55]}" for t, b in kay.findall(bl.get(x["id"], ""))]
    print(f'{x["id"]} | {x["ad"][:40]} | {x["f"]}→{x["t"]} | yy={x["yerlesim_yil"]} s={x["yer_s"]} ic={len(ic)}')
    for i in ic:
        print("     ·", i)

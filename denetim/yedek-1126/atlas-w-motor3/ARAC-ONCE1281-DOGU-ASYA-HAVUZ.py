# ONCE1281-DOGU-ASYA — odak için `sehirler` havuzu (odak_cozum.js ⑤ ile aynı süzgeç:
# d/v/s taşıyan, ad dizgisi olan yerleşim; ad ve ad.split(" (")[0] eklenir)
#   py denetim/ARAC-ONCE1281-DOGU-ASYA-HAVUZ.py <regex> ...   → eşleşen havuz adları + lat/lon
import sys, re, io, os, json
sys.stdout.reconfigure(encoding="utf-8")
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "arac"))
import girdi
Y = girdi.yukle()
Y = Y if isinstance(Y, list) else Y.get("yerlesimler", Y)
havuz = {}
for y in Y:
    if not (y.get("d") or y.get("v") or y.get("s")): continue
    ad = y.get("ad")
    if not isinstance(ad, str) or not ad: continue
    for a in (ad, ad.split(" (")[0]):
        havuz.setdefault(a, (y.get("lat"), y.get("lon")))
print("havuz:", len(havuz), "ad (evren", len(Y), "yerleşim)")
if len(sys.argv) > 1 and sys.argv[1] == "--json":
    io.open(sys.argv[2], "w", encoding="utf-8").write(json.dumps(havuz, ensure_ascii=False))
    sys.exit(0)
for rx in sys.argv[1:]:
    h = [f"{a} ({v[0]},{v[1]})" for a, v in havuz.items() if re.search(rx, a, re.I)]
    print(f"[{rx}]", " | ".join(h[:12]) if h else "YOK")

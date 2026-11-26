# Tahtadan TEK bir kaydın gövdesini basar: py ... M-3135
import json, io, sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

hedef = sys.argv[1]
d = json.load(io.open("oturumlar/tahta.json", encoding="utf-8"))
k = d["kayitlar"] if isinstance(d, dict) and "kayitlar" in d else d
for r in k:
    if str(r.get("no")) == hedef:
        print(r.get("zaman"), "|", r.get("kimden"), "->", r.get("kime"))
        print("-" * 60)
        print(r.get("mesaj"))
        break
else:
    print("BULUNAMADI:", hedef)

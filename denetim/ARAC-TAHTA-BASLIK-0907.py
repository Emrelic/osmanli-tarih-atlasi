# Tahtanın son N kaydını TEK SATIR hâlinde basar.
# Niçin: `tahta.py oku` gövdeleri de basıyor ve 50 KB'ı aşıyor;
# koordinatörün ihtiyacı gövde değil KİM-KİME-NE ÜÇLÜSÜ.
import json, io, sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

N = int(sys.argv[1]) if len(sys.argv) > 1 else 25
d = json.load(io.open("oturumlar/tahta.json", encoding="utf-8"))
k = d["kayitlar"] if isinstance(d, dict) and "kayitlar" in d else d
print("TOPLAM", len(k))
for r in k[-N:]:
    m = (r.get("mesaj") or "").replace("\n", " ")[:86]
    print(
        r.get("no"), "|", str(r.get("zaman", ""))[-8:], "|",
        (r.get("kimden") or "?")[:22], "->", (r.get("kime") or "?")[:18], "|", m,
    )

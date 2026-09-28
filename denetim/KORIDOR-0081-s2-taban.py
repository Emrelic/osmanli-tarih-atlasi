"""KORIDOR-0081 — S2'nin TABAN ORANI: bütün dönem başlangıçlarının kaçı kaynaksız?

S2 (ada döneminde kaynak yok) ancak taban oranından belirgin yüksekse bir SİNYALDİR;
değilse "kaynaksız" yalnız verinin genel hâlidir ve adaya özgü bir şey söylemez.
"""
import re
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

VI = re.compile(r"veri.?i[cç]i", re.I)
Y = girdi.yukle(sessiz=True)
n = k = 0
for y in Y:
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            f = p.get("f", "")
            if not f or f <= "1281-01-01" or f >= "1923-10-29":
                continue
            n += 1
            kay = p.get("kaynak") or y.get("kaynak") or ""
            k += (not kay) or bool(VI.search(kay))
print(f"1281 sonrası dönem başlangıcı {n} · kaynaksız/veri-içi {k} (%{100 * k / n:.0f})")

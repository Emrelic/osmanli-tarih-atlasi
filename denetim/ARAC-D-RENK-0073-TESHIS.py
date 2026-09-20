# -*- coding: utf-8 -*-
"""D-RENK-0073 — B: Emre'nin gorselindeki kesit (1821-09-15, Guatemala kutusu)
   gercekten D/E hatti tasiyor mu? TESHIS."""
import io, json

SP = r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-\0f85f827-a96b-4a7c-bfd6-a06cab079a08\scratchpad"
K = json.load(io.open(SP + r"\hatlar.json", encoding="utf-8"))["kayitlar"]

GUN = "1821-09-15"
KUTU = (-93.45, 11.61, -86.77, 19.40)   # gorselin alt serididen

def yur(k, g):
    f = k.get("f") or "0000-01-01"
    t = k.get("t") or "9999-12-31"
    return f <= g <= t

print("== 1821-09-15 yururlukteki hatlar (nokta>0) ==")
ac = [k for k in K if yur(k, GUN) and k["nokta"]]
for k in sorted(ac, key=lambda x: x["id"]):
    xs = [p[0] for p in k["hat"]]
    ys = [p[1] for p in k["hat"]]
    print("  %-28s %-22s %s..%s  lon %7.2f..%7.2f lat %6.2f..%6.2f  n=%d" %
          (k["id"], "/".join(k["taraflar"] or []), k["f"], k.get("t"),
           min(xs), max(xs), min(ys), max(ys), k["nokta"]))
print("toplam:", len(ac))

print()
print("== Gorsel kutusuna (lon %.2f..%.2f lat %.2f..%.2f) DEGEN hat ==" % KUTU)
deg = 0
for k in K:
    if not k["nokta"]:
        continue
    xs = [p[0] for p in k["hat"]]; ys = [p[1] for p in k["hat"]]
    if max(xs) < KUTU[0] or min(xs) > KUTU[2] or max(ys) < KUTU[1] or min(ys) > KUTU[3]:
        continue
    deg += 1
    print("  %-26s %-24s %s..%s  sinif=%s  yururlukte(1821)=%s" %
          (k["id"], "/".join(k["taraflar"] or []), k["f"], k.get("t"),
           k.get("sinif"), yur(k, GUN)))
print("kutuya degen kayit:", deg)

# -*- coding: utf-8 -*-
# SINIR-ARABISTAN-0078 — 1923-09-01'de Arabistan yerleşimlerinin sahipleri (A katmanı)
import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi
GUN = sys.argv[1] if len(sys.argv) > 1 else "1923-09-01"
Y = girdi.yukle(sessiz=True)
say = {}; n = 0
for y in Y:
    lat, lon = y.get("lat"), y.get("lon")
    if lat is None or not (34 <= lon <= 60 and 12 <= lat <= 32.5):
        continue
    n += 1
    sahip = None
    for p in y.get("s") or []:
        if p.get("f", "0000") <= GUN < p.get("t", "9999"):
            sahip = p.get("d")
    say.setdefault(sahip, []).append(y["ad"])
print(f"kutudaki yerleşim: {n} (toplam okunan {len(Y)})")
for k, v in sorted(say.items(), key=lambda x: -len(x[1])):
    print(f"{str(k):28} {len(v):4}  {', '.join(v[:12])}")

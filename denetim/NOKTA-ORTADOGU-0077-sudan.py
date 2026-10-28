# -*- coding: utf-8 -*-
"""Sudan kutusu (21.8-38.7E, 3.4-22.0N): 1914-12-18'de sahibi 'ingiltere' ya da
'ingiliz-sudani' olan noktalar; ingiltere olanların o dönemin başlangıç günü ve dosyası.
Yalnız okur. Soru: aynı kondominyum iki kimlikle mi boyanıyor?"""
import sys
import importlib.util
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import os  # MUTLAK-KOK-DENETIM-1006: kök için
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import girdi  # noqa: E402

_spec = importlib.util.spec_from_file_location("h76", os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "denetim", "HARITA-0076-sahip.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
Y = girdi.yukle(sessiz=True)
if isinstance(Y, tuple):
    Y = Y[0]
g = _m.gun_no("1914-12-18")
say = Counter()
bas = Counter()
dosya = Counter()
ornek = {}
for y in Y:
    lon, lat = float(y["lon"]), float(y["lat"])
    if not (21.8 <= lon <= 38.7 and 3.4 <= lat <= 22.0):
        continue
    o, v = _m.sahip(y, g)
    if o not in ("ingiltere", "ingiliz-sudani"):
        continue
    say[o] += 1
    f = next((k.get("f") for k in (y.get("s") or []) if k.get("d") == o and _m.aralikta(k.get("f"), k.get("t"), g)), None)
    bas[(o, f)] += 1
    dosya[(o, y.get("_kaynak"))] += 1
    ornek.setdefault((o, f), []).append(y["ad"])
print("sahip sayisi:", dict(say))
for k, n in bas.most_common():
    print("  %-16s f=%s  %3d  ör: %s" % (k[0], k[1], n, ", ".join(ornek[k][:5])))
print("dosyaya gore:")
for k, n in dosya.most_common():
    print("  %-16s %-34s %3d" % (k[0], k[1], n))

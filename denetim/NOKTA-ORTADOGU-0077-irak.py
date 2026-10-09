# -*- coding: utf-8 -*-
"""Irak kutusu (38.5-48.7E, 29-37.5N): Osmanlı'dan İngiltere'ye (s: ingiltere) geçiş günü
her nokta için; aynı güne toplanan 'toptan' geçişleri sayar. Yalnız okur.
Soru (H-0004 · H-0033): Basra/Bağdat günü etraftaki şehirlere toptan mı yazılmış?"""
import sys
from collections import defaultdict

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import os  # MUTLAK-KOK-DENETIM-1006: kök için
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import girdi  # noqa: E402

Y = girdi.yukle(sessiz=True)
if isinstance(Y, tuple):
    Y = Y[0]
gun = defaultdict(list)
for y in Y:
    lon, lat = float(y["lon"]), float(y["lat"])
    if not (38.5 <= lon <= 48.7 and 29.0 <= lat <= 37.5):
        continue
    for k in (y.get("s") or []):
        if k.get("d") == "ingiltere" and "1914" <= (k.get("f") or "") <= "1919":
            gun[k["f"]].append("%s(%.2f,%.2f)" % (y["ad"], lat, lon))
for g in sorted(gun):
    print("%s  %2d  %s" % (g, len(gun[g]), ", ".join(gun[g])))

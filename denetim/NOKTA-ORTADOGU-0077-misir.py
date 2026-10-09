# -*- coding: utf-8 -*-
"""Mısır kutusu (24-37E, 21.5-32N): verilen günlerde her noktanın sahip/tâbi/işgal
üçlüsü; yalnız "misir-sultanligi/kralligi + isg:ingiltere" standardına UYMAYANLAR basılır.
Standart: 1914-12-18..1922-03-15 misir-sultanligi, 1922-03-15.. misir-kralligi, ikisinde de
isg:ingiltere (Kahire kaydının kalıbı). Yalnız okur."""
import sys
import importlib.util

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
KUTU = (24.0, 37.0, 21.5, 32.0)
for tarih, bek in (("1914-12-18", "misir-sultanligi"), ("1922-03-15", "misir-kralligi"), ("1922-03-14", "misir-sultanligi")):
    g = _m.gun_no(tarih)
    ic = [y for y in Y if KUTU[0] <= float(y["lon"]) <= KUTU[1] and KUTU[2] <= float(y["lat"]) <= KUTU[3]]
    uyan, uymayan = 0, []
    for y in ic:
        o, v = _m.sahip(y, g)
        i = _m.isgal(y, g)
        if o == bek and i == "ingiltere" and not v:
            uyan += 1
        else:
            uymayan.append((y["ad"], float(y["lat"]), float(y["lon"]), o, v, i, y.get("_kaynak")))
    print("=" * 80)
    print(tarih, "kutu nokta", len(ic), "standarda uyan", uyan, "uymayan", len(uymayan))
    for r in sorted(uymayan, key=lambda r: -r[1]):
        print("  %-30s %6.2f %6.2f  sahip=%-18s tabi=%-10s isg=%-10s %s" % r)

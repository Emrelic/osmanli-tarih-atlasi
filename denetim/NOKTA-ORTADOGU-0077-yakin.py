# -*- coding: utf-8 -*-
"""Verilen (lon, lat) çevresindeki en yakın N yerleşimi, gün için sahip/tâbi/işgal ile basar.
Kullanım: py denetim/NOKTA-ORTADOGU-0077-yakin.py <lon> <lat> <YYYY-MM-DD> [N]   (yalnız okur)"""
import sys
import math
import importlib.util

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import os  # MUTLAK-KOK-DENETIM-1006: kök için
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import girdi  # noqa: E402

_spec = importlib.util.spec_from_file_location("h76", os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "denetim", "HARITA-0076-sahip.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)


def km(a, b, c, d):
    p = math.pi / 180
    h = math.sin((d - b) * p / 2) ** 2 + math.cos(b * p) * math.cos(d * p) * math.sin((c - a) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(h))


lon, lat, tarih = float(sys.argv[1]), float(sys.argv[2]), sys.argv[3]
n = int(sys.argv[4]) if len(sys.argv) > 4 else 8
g = _m.gun_no(tarih)
Y = girdi.yukle(sessiz=True)
if isinstance(Y, tuple):
    Y = Y[0]
L = sorted(Y, key=lambda y: km(lon, lat, float(y["lon"]), float(y["lat"])))[:n]
for y in L:
    kur = y.get("kur")
    if kur and _m.gun_no(kur) > g:
        o, v, i = "KURULMAMIS", None, None
    else:
        o, v = _m.sahip(y, g)
        i = _m.isgal(y, g)
    print("  %6.1f km  %-32s %7.3f %7.3f  sahip=%-20s tabi=%-14s isg=%-10s %s" % (
        km(lon, lat, float(y["lon"]), float(y["lat"])), y["ad"][:32], float(y["lat"]), float(y["lon"]),
        o, v, i, y.get("_kaynak")))

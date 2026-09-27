# -*- coding: utf-8 -*-
"""Havuzdaki yerleşimleri kutuya göre basar: py kutu.py <havuz.json> lon0 lat0 lon1 lat1"""
import io, json, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
Y = json.load(io.open(sys.argv[1], encoding="utf-8"))
x0, y0, x1, y1 = map(float, sys.argv[2:6])
r = [y for y in Y if isinstance(y.get("lat"), (int, float)) and x0 <= y["lon"] <= x1 and y0 <= y["lat"] <= y1]
print(len(r), "yerleşim:", " · ".join("%s(%.2f,%.2f)" % (y["ad"], y["lat"], y["lon"]) for y in sorted(r, key=lambda y: -y["lat"])))

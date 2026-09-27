# -*- coding: utf-8 -*-
# NOKTA-KAFKAS-0077 · H-0075b — Güney Kafkasya'da 1919-06-01 günü her noktanın sahibi.
# Öngörü (ölçümden ÖNCE): Tiflis `sovyet-rusya` görünür (Gürcistan DC'nin başkenti olmasına rağmen).
import sys, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import girdi

GUN = sys.argv[1] if len(sys.argv) > 1 else "1919-06-01"
for ad in girdi.GIRDI_DOSYALARI:
    for y in girdi.oku_dosya(ad):
        if not (38.8 <= y["lat"] <= 43.6 and 40.0 <= y["lon"] <= 50.5):
            continue
        sahip = "SAHİPSİZ"
        for kat in ("s", "d", "v"):
            for p in y.get(kat) or []:
                if p["f"] <= GUN < p["t"]:
                    sahip = p.get("d") if kat == "s" else ("OSMANLI" if kat == "d" else "tâbi")
        print(f"{sahip:38s} {y['ad']:32s} {y['lat']:.2f},{y['lon']:.2f}  {ad}")

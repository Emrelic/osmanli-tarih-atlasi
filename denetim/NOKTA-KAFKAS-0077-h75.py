# -*- coding: utf-8 -*-
# NOKTA-KAFKAS-0077 · H-0075 — Kafkasya'da (38-50°D · 38.5-47°K) 1917-03-15 SONRASINA sarkan
# `rusya` (çarlık) penceresi olan noktalar + 1918-1921 Gürcü/Ermeni/Azerî pencere sayımı.
# Öngörü (ölçümden ÖNCE, 27 Eyl): Soçi ve Sohum en az ikisi; Dağıstan'da ≥1.
import sys, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import girdi

sarkan, say = [], {}
for ad in girdi.GIRDI_DOSYALARI:
    for y in girdi.oku_dosya(ad):
        if not (38.5 <= y["lat"] <= 47 and 36 <= y["lon"] <= 50):
            continue
        for p in y.get("s") or []:
            if p["d"] == "rusya" and p["t"] > "1917-03-15":
                sarkan.append((y["ad"], y["lat"], y["lon"], p["f"], p["t"], ad))
            if p["f"] <= "1919-06-01" < p["t"]:
                say[p["d"]] = say.get(p["d"], 0) + 1
print("1917-03-15 sonrasına sarkan 'rusya' penceresi:", len(sarkan))
for s in sarkan:
    print("  ", s)
print("1919-06-01 günü Kafkas kutusunda sahipler:", dict(sorted(say.items(), key=lambda t: -t[1])))

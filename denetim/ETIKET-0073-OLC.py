# -*- coding: utf-8 -*-
"""ETIKET-0073 — yakın yerleşim çiftleri evreni (etiket çakışması sınıfı).
Çıktı: denetim/ETIKET-0073-CIFTLER.json + ekrana özet.
"""
import sys, os, json, math
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import girdi

Y = girdi.yukle(sessiz=True)
pts = [y for y in Y if y.get("lat") is not None and y.get("lon") is not None]
print("yerlesim:", len(Y), " koordinatli:", len(pts))

CELL = 0.25  # ~27 km hucre -> 15 km esigi guvenle kapsar
grid = {}
for i, y in enumerate(pts):
    grid.setdefault((int(math.floor(y["lat"] / CELL)),
                     int(math.floor(y["lon"] / CELL))), []).append(i)

ciftler, seen = [], set()
for (gy, gx), idxs in grid.items():
    komsu = []
    for dy in (-1, 0, 1):
        for dx in (-1, 0, 1):
            komsu.extend(grid.get((gy + dy, gx + dx), []))
    for i in idxs:
        for j in komsu:
            a, b = (i, j) if i < j else (j, i)
            if a == b or (a, b) in seen:
                continue
            seen.add((a, b))
            d = girdi.km(pts[a]["lat"], pts[a]["lon"], pts[b]["lat"], pts[b]["lon"])
            if d <= 15.0:
                ciftler.append({
                    "a": pts[a]["ad"], "b": pts[b]["ad"], "km": round(d, 3),
                    "a_lat": pts[a]["lat"], "a_lon": pts[a]["lon"],
                    "b_lat": pts[b]["lat"], "b_lon": pts[b]["lon"],
                    "a_g": pts[a].get("g", 0), "b_g": pts[b].get("g", 0),
                    "a_tur": pts[a].get("tur", ""), "b_tur": pts[b].get("tur", "")})
ciftler.sort(key=lambda c: c["km"])

print("--- esik tablosu (evren: %d nokta) ---" % len(pts))
for esik in (1, 3, 5, 10, 15):
    n = sum(1 for c in ciftler if c["km"] <= esik)
    kume = set()
    for c in ciftler:
        if c["km"] <= esik:
            kume.add(c["a"]); kume.add(c["b"])
    print("  <= %2d km : %4d cift  (%d ayri yerlesim)" % (esik, n, len(kume)))

print("--- Riyad / Diriye ---")
bulundu = False
for c in ciftler:
    ad = c["a"] + "|" + c["b"]
    if "Riyad" in ad and ("Dir" in ad or "iriye" in ad):
        print("  ", json.dumps(c, ensure_ascii=False)); bulundu = True
if not bulundu:
    for y in pts:
        if "Riyad" in y["ad"] or "iriye" in y["ad"] or y["ad"].startswith("Dir"):
            print("   nokta:", y["ad"], y["lat"], y["lon"], "g=", y.get("g"))

print("--- en yakin 30 cift ---")
for c in ciftler[:30]:
    print("  %6.2f km  %-30s %-30s  g=%s/%s" % (c["km"], c["a"], c["b"], c["a_g"], c["b_g"]))

out = os.path.join(os.path.dirname(__file__), "ETIKET-0073-CIFTLER.json")
with open(out, "w", encoding="utf-8") as f:
    json.dump({"yerlesim": len(pts), "esik_km": 15.0, "cift": len(ciftler),
               "ciftler": ciftler}, f, ensure_ascii=False, indent=1)
print("yazildi:", out, len(ciftler), "cift")

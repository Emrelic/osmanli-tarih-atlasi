# -*- coding: utf-8 -*-
"""KOSU13-YAMA — Salyan Kura'nın hangi yakasında? (YAMA-0063-HAZAR S1 açık kararı)
Salt okuma. Natural Earth 10m nehirleri + atlas kaydının koordinatı.
Yöntem: Kura çizgisinin Salyan boylamındaki enlem(ler)ini bul; kayıt kuzeyindeyse
sol (kuzey/doğu) yaka, güneyindeyse sağ (güney/batı) yaka. Nehir burada KB→GD
aktığı için ayrıca en yakın segmentin çapraz çarpım işaretine de bakılır.
    py denetim/ARAC-KOSU13-KURA-YAKA-0917.py
"""
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi  # noqa: E402

R = json.load(io.open("veri-kaynak/ne_10m_rivers.geojson", encoding="utf-8"))
kura = []
adlar = set()
for ft in R["features"]:
    p = ft.get("properties") or {}
    ad = " ".join(str(p.get(k) or "") for k in ("name", "name_en", "name_alt"))
    if "Kura" in ad or "Kür" in ad:
        adlar.add(ad.strip())
        g = ft["geometry"]
        parcalar = g["coordinates"] if g["type"] == "MultiLineString" else [g["coordinates"]]
        kura.extend(parcalar)
print("Kura özellik adları:", adlar, "| parça:", len(kura))

Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
for ad in ("Salyan", "Mahmudâbâd", "Şâbüran", "Bakü", "Lenkeran"):
    y = Y[ad]
    lat, lon = y["lat"], y["lon"]
    en_iyi = None
    for hat in kura:
        for (x1, y1), (x2, y2) in zip(hat, hat[1:]):
            # nokta-segment mesafesi (düz yaklaşım, yerel ölçek)
            c = math.cos(math.radians(lat))
            ax, ay, bx, by, px, py_ = x1 * c, y1, x2 * c, y2, lon * c, lat
            dx, dy = bx - ax, by - ay
            t = max(0, min(1, ((px - ax) * dx + (py_ - ay) * dy) / (dx * dx + dy * dy or 1e-12)))
            qx, qy = ax + t * dx, ay + t * dy
            d = math.hypot(px - qx, py_ - qy) * 111.32
            capraz = dx * (py_ - ay) - dy * (px - ax)  # >0: akış yönünün SOLU
            if en_iyi is None or d < en_iyi[0]:
                en_iyi = (d, capraz, (x1, y1), (x2, y2))
    d, capraz, a, b = en_iyi
    # NE çizgi yönü akış yönü mü? Kura ağzı ~49.4°D (Hazar) — doğuya giden uç akış sonu
    akis_dogru = b[0] >= a[0]
    sol = (capraz > 0) == akis_dogru
    print("%-12s %.4f,%.4f  en yakın Kura segmenti %.1f km  → %s yaka (akışa göre %s)"
          % (ad, lat, lon, d, "SOL/kuzey-doğu" if sol else "SAĞ/güney-batı",
             "sol" if sol else "sağ"))

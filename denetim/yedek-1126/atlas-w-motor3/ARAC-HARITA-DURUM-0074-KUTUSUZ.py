# -*- coding: utf-8 -*-
"""CAKISMA ciktisini gorsel kutulariyla kesistir: Emre'nin gordugu lekeler
hangi kimlik ciftinden geliyor."""
import json, io, os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = json.load(io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-CAKISMA.json"),
                      encoding="utf-8"))
KUTU = {
    "H-0007 Bohemya 1827-07-06":  ("1827-07-06", 49.84, 51.10, 15.73, 18.09),
    "H-0008 Nahcivan 1828-02-22": ("1828-02-22", 36.67, 38.95, 44.05, 46.96),
    "H-0014 Poti 1829-09-14":     ("1829-09-14", 41.82, 42.64, 41.35, 42.70),
    "H-0015 EflakBogdan 1830-05-07": ("1830-05-07", 43.14, 48.21, 22.91, 29.42),
}
SON = {}
for ad, (gun, la0, la1, lo0, lo1) in KUTU.items():
    r = d["olcumler"].get(gun)
    if not r:
        SON[ad] = "o gun olculmedi"
        print(ad, "— o gun olculmedi"); continue
    bul = []
    for cift, v in r["ciftler"].items():
        x0, y0, x1, y1 = v["kutu"]
        if x1 < lo0 or x0 > lo1 or y1 < la0 or y0 > la1: continue
        # merkez kutunun icinde mi (daha siki olcut)
        icm = la0 <= v["merkez"][0] <= la1 and lo0 <= v["merkez"][1] <= lo1
        bul.append({"cift": cift, "km2": v["km2"], "merkez": v["merkez"],
                    "merkez_kutuda": icm})
    bul.sort(key=lambda x: -x["km2"])
    SON[ad] = {"gun": gun, "dunya_cifte_iddia_km2": r["cifte_iddiali_km2"],
               "dunya_cift": r["cift_sayisi"], "kutuyla_kesisen": bul}
    sys.stdout.buffer.write(("%s | dunya cifte iddia %s km2 / %d cift | kutuyla kesisen %d\n"
        % (ad, "{:,.0f}".format(r["cifte_iddiali_km2"]), r["cift_sayisi"], len(bul))
        ).encode("utf-8", "replace"))
    for b in bul[:8]:
        sys.stdout.buffer.write(("    %-42s %9s km2  merkez %s %s\n" % (
            b["cift"][:42], "{:,.0f}".format(b["km2"]), b["merkez"],
            "<< MERKEZ KUTUDA" if b["merkez_kutuda"] else "")).encode("utf-8", "replace"))

io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-KUTU.json"), "w",
        encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi")

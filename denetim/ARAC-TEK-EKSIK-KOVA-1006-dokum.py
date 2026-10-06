# -*- coding: utf-8 -*-
"""TEK-EKSIK-KOVA-1006 — beş kovanın dökümü (kayıt, kova üyeleri, ±30 gün maddeleri). SALT OKUR."""
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle as D  # noqa: E402

HEDEF = {"1456-06-01": "Kili", "1856-03-30": "Kili", "1654-01-18": "Sloboda bozkırı",
         "1772-08-05": "Elbing (Elbląg)", "1920-09-02": "Kal'a-i Hum (Darvaz)",
         "1920-10-08": "Rondonópolis"}
Y = D.yerlesimleri_yukle()
O = D.olaylari_yukle()
Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
kir, _ = D.degismez2(Yc, O, ("s",), yer_sarti=True)
for d, ad in HEDEF.items():
    k = kir[d]
    print("=" * 100)
    print(d, "eksik:", k.get("eksik"), "| üyeler:", sorted(k["ad"]))
    for u in sorted(k["ad"]):
        print("   sahip", u, k["sahip"].get(u))
    y = next(y for y in Yc if y["ad"] == ad)
    print("KAYIT:", json.dumps({a: v for a, v in y.items() if not a.startswith("_")},
                               ensure_ascii=False)[:1500], "| dosya", y.get("_kaynak"))
    gd = D.gun_no(d)
    for o in O:
        if abs(D.gun_no(o["t"]) - gd) <= 30:
            print("   MADDE", o["t"], "|", o.get("b"), "| yer_id=", o.get("yer_id"),
                  "| yer=", o.get("yer"), "| kaynak=", str(o.get("kaynak"))[:120])

# -*- coding: utf-8 -*-
# OSMANLI-IC-0082 — adlari verilen yerlesimlerin donem alanlarini (s/d/v/isg/f/t/kur) basar.
import sys, json
sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi
Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
for ad in sys.argv[1:]:
    y = Y.get(ad)
    if not y:
        print("YOK:", ad); continue
    print("==", ad, y["lat"], y["lon"], "<" + y["_kaynak"] + ">")
    for k in ("f", "t", "kur", "s", "d", "v", "isg"):
        if y.get(k):
            deger = y[k]
            if isinstance(deger, list):
                deger = [{a: b for a, b in p.items() if a in ("f", "t", "d", "kid", "k")} for p in deger]
            print("  ", k, json.dumps(deger, ensure_ascii=False))

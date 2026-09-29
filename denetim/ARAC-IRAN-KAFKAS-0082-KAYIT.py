# -*- coding: utf-8 -*-
"""IRAN-KAFKAS-0082 — adı verilen yerleşimlerin 1700-1850 arası d:/v:/isg:/s: dönemlerini basar.
Kullanım: py denetim/ARAC-IRAN-KAFKAS-0082-KAYIT.py "Ad1,Ad2" [bas] [son]"""
import sys, io
sys.path.insert(0, "arac")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi

adlar = sys.argv[1].split(",")
bas = sys.argv[2] if len(sys.argv) > 2 else "1700"
son = sys.argv[3] if len(sys.argv) > 3 else "1850"
Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
for ad in adlar:
    y = Y.get(ad)
    if not y:
        print(f"## {ad}: BULUNAMADI"); continue
    print(f"## {ad}  ({y['lat']},{y['lon']}) {y['_kaynak']} k={y.get('k')} m={y.get('m')}")
    for kat in ("s", "d", "v", "isg"):
        for p in y.get(kat) or []:
            if p["t"] >= bas and p["f"] <= son:
                ek = {k: v for k, v in p.items() if k not in ("f", "t", "d")}
                print(f"   {kat:3} {p['f']} → {p['t']}  {p.get('d','')}  {str(ek)[:260] if ek else ''}")

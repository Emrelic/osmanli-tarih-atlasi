# -*- coding: utf-8 -*-
"""Adı verilen yerleşimlerin HAM kaydını ve dosyasını basar (yalnız okur).
Kullanım: py denetim/NOKTA-ORTADOGU-0077-kayit.py "Ad1" "Ad2" ...  (alt dizgi eşleşmesi)"""
import sys
import json

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\atlas\arac")
import girdi  # noqa: E402

Y = girdi.yukle(sessiz=True)
if isinstance(Y, tuple):
    Y = Y[0]
for ara in sys.argv[1:]:
    for y in Y:
        if ara in y.get("ad", ""):
            print(json.dumps(y, ensure_ascii=False))

# -*- coding: utf-8 -*-
"""PAKET-KRON2 — çekilmiş TDV gövdesinde (ARAC-A6A çıktısı) bağlamlı arama. Yalnız OKUR.
py denetim/ARAC-KRON2-GOVDE-ARA-0913.py DIZIN slug DESEN [DESEN ...] [--pay N]
Satır sonları boşluğa çevrilir (grep'in satır kırığında kaçırdığı eşleşmeler için).
"""
import io, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
a = sys.argv[1:]
pay = 250
if "--pay" in a:
    i = a.index("--pay"); pay = int(a[i + 1]); del a[i:i + 2]
dizin, slug, desenler = a[0], a[1], a[2:]
metin = re.sub(r"\s+", " ", io.open(os.path.join(dizin, slug + ".txt"), encoding="utf-8").read())
for d in desenler:
    bul = list(re.finditer(d, metin, re.I))
    print(f"== {slug} «{d}» {len(bul)} eşleşme")
    for m in bul[:6]:
        print("   …" + metin[max(0, m.start() - pay): m.end() + pay] + "…")

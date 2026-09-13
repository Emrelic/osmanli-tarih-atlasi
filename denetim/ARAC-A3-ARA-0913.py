# -*- coding: utf-8 -*-
"""PAKET-A3 — çekilmiş TDV gövdesinde (ARAC-A6A-TDV-0913.py çıktısı) cümle arar.
py denetim/ARAC-A3-ARA-0913.py DIZIN slug REGEX [--baglam N]
Eşleşen her yeri ±N karakter (vars. 300) bağlamla basar. Alıntı değil OKUMA aracıdır.
"""
import io, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
a = sys.argv[1:]
n = 300
if "--baglam" in a:
    i = a.index("--baglam"); n = int(a[i + 1]); del a[i:i + 2]
dizin, slug, rx = a[0], a[1], a[2]
t = open(os.path.join(dizin, slug + ".txt"), encoding="utf-8").read().replace("\n", " ")
bas = 0
k = 0
for m in re.finditer(rx, t, re.I):
    if m.start() < bas:
        continue
    s, e = max(0, m.start() - n), min(len(t), m.end() + n)
    print(f"--- [{slug} @{m.start()}] …{t[s:e]}…")
    bas = e
    k += 1
print(f"=== {slug}: {k} bölge")

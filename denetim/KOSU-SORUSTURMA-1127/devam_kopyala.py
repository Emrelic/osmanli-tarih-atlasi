# -*- coding: utf-8 -*-
"""Koşu 40'ın `_petek_devam/<iz>/s_*.pkl` dosyalarını TEK TEK yükleyip sınayarak ölçüm ağacına KOPYALAR.
Kaynak dizine dokunmaz. KOSU-YAYIN.md kuralı: kesilen koşunun pkl'leri devamdan önce tek tek yüklenir
(yarım yazılmış dosya koşuyu saatler sonra `UnpicklingError` ile öldürür — Koşu 36).
Kullanım: py devam_kopyala.py <kaynak _petek_devam> <hedef _petek_devam>"""
import os, sys, pickle, shutil, ctypes
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x40)
kaynak, hedef = sys.argv[1], sys.argv[2]
for izd in sorted(os.listdir(kaynak)):
    kd = os.path.join(kaynak, izd)
    if not os.path.isdir(kd):
        continue
    hd = os.path.join(hedef, izd)
    os.makedirs(hd, exist_ok=True)
    tamam = bozuk = atla = 0
    izler, bayt, donem = set(), 0, 0
    for ad in sorted(os.listdir(kd)):
        y = os.path.join(kd, ad)
        if not ad.endswith(".pkl"):
            atla += 1
            continue
        try:
            with open(y, "rb") as f:
                iz, r = pickle.load(f)
            did, dad, renk, ham, tani = r
            izler.add(iz)
            donem += len(ham)
        except Exception as e:
            bozuk += 1
            print("BOZUK (kopyalanmadı): %s — %s: %s" % (ad, type(e).__name__, str(e)[:80]))
            continue
        shutil.copy2(y, os.path.join(hd, ad))
        bayt += os.path.getsize(y)
        tamam += 1
    print("%s: kopyalanan %d · bozuk %d · pkl olmayan %d · %.0f MB · dönem kaydı %d · ayrık iz %d (%s)" % (
        izd, tamam, bozuk, atla, bayt / 2**20, donem, len(izler),
        ", ".join(sorted(i[:16] for i in izler))))

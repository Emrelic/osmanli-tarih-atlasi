# -*- coding: utf-8 -*-
"""devletler_harita.js içindeki dönem başlangıç günlerini (f) METİN olarak sayar (salt okuma, düşük
öncelik). Ⓑ'nin kesit listesi = bütün aralıkların ayrık f'leri (dolgu.kosudan :1295); Osmanlı kırılma
günleri bu dosyada YOK (donemler.js yazılmadı) ⇒ sayı ALT SINIRDIR."""
import re, sys, io, ctypes
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
try:
    ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x40)
except Exception:
    pass
sys.path.insert(0, sys.argv[2])          # arac/ — yalnız gun.py için
import gun
yol = sys.argv[1]
fs, n_dnm, ornek = set(), 0, None
with io.open(yol, "r", encoding="utf-8") as f:
    for satir in f:
        if satir.startswith("window.DEVLET_PARCALAR") or satir.startswith("window.DEVLET_PARCA_HALKA"):
            continue
        bul = re.findall(r'"f":"([^"]+)"', satir)
        if bul and ornek is None:
            i = satir.find('"f":"')
            ornek = satir[max(0, i - 200):i + 200]
        n_dnm += len(bul)
        fs.update(bul)
print("örnek:", ornek)
print("dönem (f) sayısı:", n_dnm, "· ayrık f:", len(fs))
sirali = sorted(fs, key=gun.gun)
print("ilk:", sirali[:3], "son:", sirali[-3:])
for k in (500, 1000, 1500, 2000, 2250, 2505, 3000, 4000, 5000, 6000):
    if k <= len(sirali):
        print("  %d. ayrık gün: %s" % (k, sirali[k - 1]))
import bisect
gs = [gun.gun(x) for x in sirali]
for y in ("1281-01-01", "1500-01-01", "1700-01-01", "1750-01-01", "1800-01-01", "1850-01-01", "1900-01-01", "1923-10-29", "1950-01-01"):
    print("  %s öncesi ayrık gün: %d" % (y, bisect.bisect_left(gs, gun.gun(y))))

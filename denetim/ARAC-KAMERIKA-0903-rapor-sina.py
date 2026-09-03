# -*- coding: utf-8 -*-
"""RAPOR SINAVI — raporda anılan her dosya diskte GERÇEKTEN var mı?

🔴 NİÇİN DOSYA, TEK SATIR DEĞİL: bu sınavı önce PowerShell'de tek satır
yazdım ve regex'teki BACKTICK'i PowerShell KAÇIŞ KARAKTERİ diye yedi —
desen bozuldu, `unterminated character set` patladı. `§11`in *"kaçış
içeren hiçbir düzeltme kabuktan geçirilmez"* kuralı; bu sefer bash
değil PowerShell, ve orada backtick daha da tehlikeli.

📌 Bir raporun anlattığı dosya diskte yoksa, rapor kendi kendine
yalan söylüyordur — ve bunu yalnız ölçmek gösterir.

PROJE KÖKÜNDEN:  py denetim/ARAC-KAMERIKA-0903-rapor-sina.py
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

RAPOR = "denetim/BULGU-KAMERIKA-0903.md"
s = io.open(RAPOR, encoding="utf-8").read()
print("rapor: %d karakter · %d satır" % (len(s), s.count("\n") + 1))

TIRNAK = chr(96)                      # backtick — kabuktan GEÇİRİLMEDİ
desen = TIRNAK + r"([^" + TIRNAK + r"]*KAMERIKA-0903[^" + TIRNAK + r"]*)" + TIRNAK
adlar = sorted(set(re.findall(desen, s)))

yok, var = [], []
for a in adlar:
    aday = a.strip()
    if os.path.exists(os.path.join("denetim", aday)) or os.path.exists(aday):
        var.append(aday)
    else:
        yok.append(aday)

print("\nraporda anılan KAMERIKA dosyası: %d" % len(adlar))
print("🟢 diskte VAR : %d" % len(var))
for a in var:
    print("   " + a)
print("🔴 diskte YOK : %d" % len(yok))
for a in yok:
    print("   " + a)

# ters yön: diskte olup raporda hiç anılmayan
disk = [f for f in os.listdir("denetim") if "KAMERIKA-0903" in f]
anilmayan = [f for f in disk if f not in var]
print("\ndiskteki KAMERIKA dosyası: %d · raporda ANILMAYAN: %d"
      % (len(disk), len(anilmayan)))
for f in anilmayan:
    print("   " + f)
print("\n%s" % ("🔴 EKSİK VAR" if yok else "🟢 raporun andığı her dosya diskte"))
sys.exit(1 if yok else 0)

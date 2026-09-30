# -*- coding: utf-8 -*-
"""kronoloji_cok_senkron_0930.js — odak alanı olmayan maddelere ODAK sözlüğüne göre
yer_id / odak_kimlik ekler (anahtar: t). Zaten odaklı maddeye dokunmaz."""
import sys, io, re, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "data", "kronoloji_cok_senkron_0930.js")
ODAK = {
 "1917-03-15": ("odak_kimlik", "rusya-gecici-hukumet"),
 "1917-11-07": ("odak_kimlik", "sovyet-rusya"),
 "1410-06-15": ("yer_id", "İstanbul"),
 "1411-02-17": ("yer_id", "Edirne"),
 "1413-07-05": ("odak_kimlik", "musa-celebi"),
 "1523-06-06": ("odak_kimlik", "isvec"),
 "1547-01-16": ("yer_id", "Moskova"),
 "1478-01-15": ("yer_id", "Novgorod"),
 "1526-08-29": ("yer_id", "Mohaç"),
 "1774-07-26": ("odak_kimlik", "kirim"),
 "1923-07-24": ("yer_id", "Rodos"),
 "1918-10-30": ("yer_id", "Limni"),
 "1878-03-03": ("yer_id", "Kars"),
 "1878-07-13": ("odak_kimlik", "romanya"),
 "1699-01-26": ("yer_id", "Kamaniçe"),
 "1718-07-21": ("yer_id", "Belgrad"),
 "1739-09-18": ("yer_id", "Belgrad"),
 "1913-05-30": ("yer_id", "Dedeağaç (Alexandroupoli)"),
 "1510-12-01": ("yer_id", "Merv (Mari)"),
 "1453-05-29": ("yer_id", "İstanbul"),
 "1460-05-29": ("odak_kimlik", "bizans"),
 "1871-01-18": ("yer_id", "Berlin"),
 "1795-10-24": ("yer_id", "Varşova"),
}
t = open(YOL, encoding="utf-8").read()
parcalar = re.split(r"(?m)^(?=  \{ t:)", t)
eklenen, eksik = 0, []
for i, p in enumerate(parcalar):
    m = re.match(r'  \{ t:"([^"]+)"', p)
    if not m or re.search(r"\b(yer_id|odak_yer|odak_kimlik)\s*:", p):
        continue
    if m.group(1) not in ODAK:
        eksik.append(m.group(1)); continue
    alan, deger = ODAK[m.group(1)]
    yeni = re.sub(r"(taraflar:\[[^\]]*\],)", r'\1 %s:"%s",' % (alan, deger), p, count=1)
    if yeni == p:
        eksik.append(m.group(1)); continue
    parcalar[i] = yeni; eklenen += 1
open(YOL, "w", encoding="utf-8").write("".join(parcalar))
print("eklenen:", eklenen, "odaksiz kalan:", eksik)

# -*- coding: utf-8 -*-
"""Kac yerlesim kaydi COK SATIRA yayilmis? Elle duzeltmek mi, alete
yetenek eklemek mi daha ucuz — once OLC."""
import io
import os
import re
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

AD_RX = re.compile(r'\bad:\s*"((?:[^"\\]|\\.)*)"')


def dengeli(s):
    """Satirdaki { } [ ] dengesi (tirnak ve kacis farkinda)."""
    d = 0
    tirnak = False
    kacis = False
    for c in s:
        if kacis:
            kacis = False
            continue
        if c == "\\":
            kacis = True
            continue
        if c == '"':
            tirnak = not tirnak
            continue
        if tirnak:
            continue
        if c in "{[":
            d += 1
        elif c in "}]":
            d -= 1
    return d


cok = []
tek = 0
for dosya in girdi.GIRDI_DOSYALARI:
    yol = os.path.join("data", os.path.basename(dosya))
    if not os.path.exists(yol):
        continue
    satirlar = io.open(yol, encoding="utf-8", newline="").read().split("\n")
    for i, s in enumerate(satirlar):
        m = AD_RX.search(s)
        if not m:
            continue
        if dengeli(s) == 0:
            tek += 1
        else:
            # kac satir surecek
            d = dengeli(s)
            n = 1
            j = i
            while d != 0 and j + 1 < len(satirlar) and n < 40:
                j += 1
                n += 1
                d += dengeli(satirlar[j])
            cok.append((m.group(1), os.path.basename(dosya), i + 1, n))

print("TEK SATIRLIK kayit :", tek)
print("COK SATIRLI  kayit :", len(cok))
if cok:
    print()
    print("%-32s %-30s %6s %5s" % ("ad", "dosya", "satir", "kac"))
    for ad, d, i, n in cok[:40]:
        print("%-32s %-30s %6d %5d" % (ad[:32], d[:30], i, n))
    if len(cok) > 40:
        print("... %d tane daha" % (len(cok) - 40))

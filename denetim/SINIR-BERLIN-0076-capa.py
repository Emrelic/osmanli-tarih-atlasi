# -*- coding: utf-8 -*-
"""Kronoloji ÇAPASI arar — ek okuma kartı bağlanacak maddeyi ölçer.
SALT OKUR. py denetim/SINIR-BERLIN-0076-capa.py <YYYY-MM-DD> [...]"""
import sys
import io
import os
import re
import glob

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(__file__), "..", "data")

aranan = sys.argv[1:]
dosyalar = sorted(glob.glob(os.path.join(KOK, "olaylar*.js"))) + \
           sorted(glob.glob(os.path.join(KOK, "kronoloji*.js")))
print("evren: %d dosya" % len(dosyalar))
bulundu = {a: 0 for a in aranan}
for yol in dosyalar:
    try:
        t = io.open(yol, encoding="utf-8").read()
    except Exception as e:
        print("  OKUNAMADI %s: %s" % (os.path.basename(yol), e))
        continue
    for satir in t.split("\n"):
        for a in aranan:
            if a in satir:
                bulundu[a] += 1
                kisa = re.sub(r"\s+", " ", satir.strip())[:220]
                print("  %-12s %-34s %s" % (a, os.path.basename(yol), kisa))
print("--- sonuc")
for a in aranan:
    print("  %-12s %s" % (a, "%d satir" % bulundu[a] if bulundu[a]
                          else "CAPA BULUNAMADI"))

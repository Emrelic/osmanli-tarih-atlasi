# -*- coding: utf-8 -*-
"""KITA 9 — PDF METIN CIKARICI (ikinci cikarici).

CLAUDE.md §4-7: "METIN CIKARILAMADI" != "BELGEDE METIN YOK".
WebFetch uc akademik PDF icin "cikarilamiyor" demisti ve ucunun de metin
katmani vardi; pypdf on saniyede okudu. Bu alet o dersin uygulamasidir.

kullanim: py denetim/ARAC-YURUME-PDF-0912.py <pdf yolu> [aranacak kelime ...]
Aranan kelime verilirse yalniz o kelimeyi ICEREN satirlar basilir.
"""
import sys, io, os, re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

if len(sys.argv) < 2:
    sys.exit("kullanim: py ARAC-YURUME-PDF-0912.py <pdf> [kelime ...]")

yol = sys.argv[1]
kelimeler = [k.lower() for k in sys.argv[2:]]

try:
    from pypdf import PdfReader
except ImportError:
    try:
        from PyPDF2 import PdfReader
    except ImportError:
        sys.exit("pypdf de PyPDF2 de YOK — ucuncu bir cikarici gerekir")

r = PdfReader(yol)
metin = []
for s in r.pages:
    try:
        metin.append(s.extract_text() or "")
    except Exception as e:
        metin.append("")
tam = "\n".join(metin)

print("sayfa: %d · cikarilan karakter: %d" % (len(r.pages), len(tam)))
if len(tam) < 200:
    print("🔴 METIN KATMANI YOK GIBI — ucuncu bir cikarici (OCR) gerekir")
    sys.exit(2)

if not kelimeler:
    print(tam[:6000])
    sys.exit(0)

satirlar = [s.strip() for s in tam.split("\n")]
for k in kelimeler:
    print()
    print("=" * 70)
    print("ARANAN: %s" % k)
    print("=" * 70)
    n = 0
    for i, s in enumerate(satirlar):
        if k in s.lower():
            n += 1
            onc = satirlar[i - 1] if i else ""
            son = satirlar[i + 1] if i + 1 < len(satirlar) else ""
            print("  [%d] %s" % (n, onc))
            print("      >>> %s" % s)
            print("      %s" % son)
            if n >= 12:
                print("  ... (ilk 12 eslesme)")
                break
    if n == 0:
        print("  GECMIYOR")

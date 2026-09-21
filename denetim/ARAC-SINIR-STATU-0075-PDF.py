# -*- coding: utf-8 -*-
"""SINIR-STATU-0075 — PDF'ten metin cikar, anahtar sözcük geçen satirlari (öncesi/sonrasi ile) bas.
Kullanim: py denetim/ARAC-SINIR-STATU-0075-PDF.py <pdf> <anahtar1> <anahtar2> ...   (yalnizca anahtar yoksa basligi + ilk 1500 karakteri basar)"""
import sys, re
from pypdf import PdfReader

sys.stdout.reconfigure(encoding="utf-8")
yol, anahtarlar = sys.argv[1], sys.argv[2:]
r = PdfReader(yol)
print("SAYFA:", len(r.pages))
sayfalar = []
for i, p in enumerate(r.pages):
    try:
        sayfalar.append(re.sub(r"\s+", " ", p.extract_text() or ""))
    except Exception as e:
        sayfalar.append("")
if not anahtarlar:
    print(" ".join(sayfalar)[:1500])
    sys.exit(0)
for i, t in enumerate(sayfalar):
    for a in anahtarlar:
        for m in re.finditer(re.escape(a), t, flags=re.I):
            s = max(0, m.start() - 260)
            e = min(len(t), m.end() + 360)
            print("[s.%d · %s] ...%s..." % (i + 1, a, t[s:e]))
            print("---")

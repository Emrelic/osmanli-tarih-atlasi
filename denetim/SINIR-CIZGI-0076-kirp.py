# -*- coding: utf-8 -*-
"""Gorseli buyuterek kirp: py denetim/SINIR-CIZGI-0076-kirp.py <giris> <cikis> [kat]"""
import sys
from PIL import Image
g, c = sys.argv[1], sys.argv[2]
kat = int(sys.argv[3]) if len(sys.argv) > 3 else 3
im = Image.open(g)
print('asil boyut:', im.size)
im2 = im.resize((im.size[0] * kat, im.size[1] * kat), Image.LANCZOS)
im2.save(c)
print('yazildi:', c, im2.size)

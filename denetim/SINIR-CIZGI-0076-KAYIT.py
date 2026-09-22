# -*- coding: utf-8 -*-
"""Adi verilen yerlesim kayitlarini TAM dok. Kullanim: py ... "<ad parcasi>" [...]"""
import sys, os, json
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.path.insert(0, r'C:\atlas\arac')
os.chdir(r'C:\atlas')
import girdi

Y = girdi.yukle(sessiz=True)
for arg in sys.argv[1:]:
    a = arg.lower()
    for y in Y:
        if a in (y.get('ad') or '').lower():
            print(json.dumps(y, ensure_ascii=False))
            print()

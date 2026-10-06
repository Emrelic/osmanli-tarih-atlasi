# -*- coding: utf-8 -*-
# 🔴 BEYAN (UMIT-W56e, 6 Eki 2026): başka makinenin yolunu okur, bu makinede koşamaz: C:\Users\emrem\AppData\Local\Temp\claude\C--atlas\68bd1d7f-e7f4-4083-abc8-fab2c56f3252\scratchpad (teslim.txt)
"""Teslim mesajini tahta.json'dan GERI OKU (ORTAK-0076 §6 madde 5)."""
import json, sys, io
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
SP = r'C:\Users\emrem\AppData\Local\Temp\claude\C--atlas\68bd1d7f-e7f4-4083-abc8-fab2c56f3252\scratchpad'
gonderilen = io.open(SP + r'\teslim.txt', encoding='utf-8').read()
import os  # MUTLAK-KOK-DENETIM-1006: kök için
d = json.load(io.open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "oturumlar", "tahta.json"), encoding='utf-8'))
msgs = d['mesajlar'] if isinstance(d, dict) and 'mesajlar' in d else d
hedef = [m for m in msgs if str(m.get('no') or m.get('id')) == 'M-5049']
if not hedef:
    print('🔴 M-5049 TAHTADA YOK'); sys.exit(1)
tahtada = hedef[0].get('mesaj', '')
print('gonderilen: %d karakter · tahtada: %d karakter' % (len(gonderilen), len(tahtada)))
for im in ['Bekciyi kapatiyorum', 'SEMA KALEMI', 'ONGORU CURUDU', '16,2 km',
           'D-RENK-0073', 'Halaib', 'M-5028', 'durum_tablosu']:
    print(('  ✓ ' if im in tahtada else '  🔴 KAYIP: ') + im)

# -*- coding: utf-8 -*-
"""Uretilen dosyalarin sinavi: JSON gecerli mi, hukum sozlukte mi, kac madde."""
import json, io, sys, collections, subprocess
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

SOZLUK = {"cozuldu", "once-cozuldu", "zaten-dogru", "sirada", "kosu-bekliyor",
          "olculecek", "senin-kararin", "onay-bekliyor", "cozulemedi",
          "yapilamaz", "vazgecildi", "gerek-yok", "tekrar", "bayat", "kapsam-disi"}
BENIM = """H-0002 H-0004 H-0037 H-0041 H-0042 H-0054 H-0059 H-0066 H-0076 H-0078
H-0080 H-0097 H-0099 H-0116 H-0118 H-0120 H-0123 H-0126 H-0137 H-0144 H-0149
H-0155 H-0156""".split()

d = json.load(io.open(r'C:\atlas\denetim\SINIR-CIZGI-0076-CEVAP.json', encoding='utf-8'))
m = d['maddeler']
print('CEVAP.json gecerli · madde sayisi:', len(m), '(beklenen 23)')
print('hukum dagilimi:', dict(collections.Counter(v['hukum'] for v in m.values())))
tanimsiz = [k for k, v in m.items() if v['hukum'] not in SOZLUK]
print('sozlukte OLMAYAN hukum:', tanimsiz or 'yok')
eksik = [k for k in BENIM if k not in m]
fazla = [k for k in m if k not in BENIM]
print('eksik madde:', eksik or 'yok', '· fazla madde:', fazla or 'yok')
gerekce = [k for k, v in m.items()
           if v['hukum'] in ('gerek-yok', 'senin-kararin', 'vazgecildi', 'yapilamaz',
                             'cozulemedi', 'kapsam-disi') and len(v.get('not', '')) < 40]
print('GEREKCESIZ (reddedilir) :', gerekce or 'yok')

for yol in ['denetim/SINIR-CIZGI-0076-YAMA-hukuki_sinirlar.js',
            'denetim/SINIR-CIZGI-0076-YAMA-yerlesimler.js',
            'denetim/SINIR-CIZGI-0076-YAMA-olaylar.js',
            'denetim/SINIR-CIZGI-0076-YAMA-app_js.js',
            'denetim/SINIR-CIZGI-0076-YAMA-ekokuma_p76h.js']:
    r = subprocess.run(['node', '--check', r'C:\atlas' + '\\' + yol.replace('/', '\\')],
                       capture_output=True, text=True)
    print(('  OK   ' if r.returncode == 0 else '  HATA ') + yol +
          ('' if r.returncode == 0 else ' :: ' + r.stderr.strip()[:200]))

# -*- coding: utf-8 -*-
# kullanim: py _jp_ctx.py <dosya> <satir_baslangic> <satir_bitis>  (aya/yil basliklarini da gosterir)
import sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_kaynak')
L = open(os.path.join(D, sys.argv[1]), encoding='utf-8').read().split('\n')
a, b = int(sys.argv[2]), int(sys.argv[3])
# onceki en yakin yil/ay basligini bul
for i in range(a - 1, -1, -1):
    if ('年' in L[i][:25] and ('春' in L[i][:25] or '月' in L[i][:25] or '延暦' in L[i][:25] or '和銅' in L[i][:25] or '養老' in L[i][:25])) or L[i].startswith('=='):
        print('[BASLIK]', i + 1, L[i][:80]); break
for i in range(a - 1, min(b, len(L))):
    print(i + 1, L[i][:int(sys.argv[4]) if len(sys.argv) > 4 else 160])

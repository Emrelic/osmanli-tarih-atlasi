# -*- coding: utf-8 -*-
"""4 yerlesim donemi: d:"habsburg" -> d:"avusturya" (RENK-1105 madde 1: tek kimlik, sahte sinir yok)."""
import io
N = {'data/yerlesimler_zincir64.js': 3, 'data/yerlesimler_ms1_1281_yeni.js': 1}
for yol, n in N.items():
    js = io.open(yol, encoding='utf-8', newline='').read()
    assert js.count('d:"habsburg"') == n, (yol, js.count('d:"habsburg"'))
    js = js.replace('d:"habsburg"', 'd:"avusturya"')
    io.open(yol, 'w', encoding='utf-8', newline='').write(js)
    print('ok', yol, n)

# -*- coding: utf-8 -*-
"""devletler.js'te sureklilik gosteren kunyelere ortak harita: anahtari yazar.
Her kunye icin `{ id:"X", ` -> `{ id:"X", harita:"HEDEF", ` (tam bir eslesme sart)."""
import io, re, sys
sys.path.insert(0, 'arac')
import contextlib
with contextlib.redirect_stdout(io.StringIO()):
    import renkler
YAZ = {
    'isvec-birlik-oncesi': 'isvec',
    'moskova': 'rusya',
    'floransa': 'toskana',
    'savoya': 'sardinya',
    'brandenburg-markgrafligi': 'prusya',
    'brandenburg-prusya': 'prusya',
    'nguyen-beyligi': 'nguyen-hanedani',
    'luksemburg-kontlugu': 'luksemburg-dukaligi',
    'visconti': 'milanoduka',
    'avusturya-marki': 'avusturya',
    'avusturya-dukaligi': 'avusturya',
    'bohemya-dukaligi': 'bohemya',
    'norvec-1814': 'norvec',
    'norvec-isvec-birligi': 'norvec',
}
yol = 'data/devletler.js'
js = io.open(yol, encoding='utf-8', newline='').read()
for k, h in YAZ.items():
    assert h in renkler.BOYALAR, 'BOYALAR yok: ' + h
    rx = re.compile(r'(\{\s*id:\s*"%s"\s*,)' % re.escape(k))
    ms = list(rx.finditer(js))
    assert len(ms) == 1, (k, len(ms))
    m = ms[0]
    # kaydin ilk 600 karakterinde harita: olmamali
    bas = js[m.end():]
    bas = bas[:bas.index('kronoloji:')]
    mh = re.search(r'harita:\s*"([^"]*)"', bas)
    if mh:
        a = m.end() + mh.start(1)
        js = js[:a] + h + js[a + len(mh.group(1)):]
        print('   (mevcut harita degistirildi: %s)' % mh.group(1))
    else:
        js = js[:m.end()] + ' harita:"%s",' % h + js[m.end():]
    print('ok', k, '->', h)
io.open(yol, 'w', encoding='utf-8', newline='').write(js)

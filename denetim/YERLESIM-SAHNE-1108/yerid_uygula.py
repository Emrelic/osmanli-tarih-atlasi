# -*- coding: utf-8 -*-
"""Araştırma çıktısındaki (yerid_E*.json) kanıtlı yer_id atamalarını kronoloji dosyalarına işler.
Kullanım: py -X utf8 -I yerid_uygula.py <arastirma_dizini> <veri.json> [--yaz]
Güvenceler: yer_id atlasta TAM `ad` ya da ' (' öncesi olarak VAR · madde satırı (t + b) dosyada TEK · satırda yer_id/yer_kon YOK ·
satır yapısı bozulmaz (yalnız ilk '{'ten sonra bir alan eklenir; dosya baytları başka yerde değişmez).
"""
import glob, json, os, re, sys

ARA, VERI = sys.argv[1], sys.argv[2]
YAZ = '--yaz' in sys.argv
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
Y = json.load(open(VERI, encoding='utf-8'))['Y']
tam = {y['ad'] for y in Y}
pre = {y['ad'].split(' (')[0] for y in Y}

kayit = []
for f in sorted(glob.glob(os.path.join(ARA, 'yerid_E*.json'))):
    d = json.load(open(f, encoding='utf-8'))
    kayit += d if isinstance(d, list) else d.get('kayitlar', [])

islenen, atlanan = 0, []
dosyalar = {}
for r in kayit:
    yid = r.get('yer_id')
    if not yid:
        continue
    if yid not in tam and yid not in pre:
        atlanan.append((r['dosya'], r['t'], r['baslik'][:50], 'atlasta yok: ' + yid)); continue
    yol = os.path.join(KOK, 'data', r['dosya'])
    if yol not in dosyalar:
        dosyalar[yol] = open(yol, 'rb').read().decode('utf-8').split('\n')
    sat = dosyalar[yol]
    bj = json.dumps(r['baslik'], ensure_ascii=False)[1:-1]
    aday = [i for i, s in enumerate(sat) if s.lstrip().startswith('{') and bj in s and re.search(r'["\']?t["\']?\s*:\s*"%s"' % re.escape(r['t']), s)]
    if len(aday) != 1:
        atlanan.append((r['dosya'], r['t'], r['baslik'][:50], f'satır eşleşmesi {len(aday)}')); continue
    s = sat[aday[0]]
    bos = re.search(r'(["\']?yer_id["\']?\s*:\s*)(""|\'\')', s)          # yer_id:"" = alan var ama BOŞ → doldurulur
    if re.search(r'["\']?yer_kon["\']?\s*:\s*\[', s) or (re.search(r'["\']?yer_id["\']?\s*:', s) and not bos):
        atlanan.append((r['dosya'], r['t'], r['baslik'][:50], 'satırda dolu yer_id/yer_kon var')); continue
    if bos:
        sat[aday[0]] = s[:bos.start()] + bos.group(1) + json.dumps(yid, ensure_ascii=False) + s[bos.end():]
        islenen += 1; continue
    k = s.index('{')
    quoted = s[k + 1:k + 2] == '"'
    ek = ('"yer_id": %s, ' if quoted else 'yer_id:%s, ') % json.dumps(yid, ensure_ascii=False)
    sat[aday[0]] = s[:k + 1] + ek + s[k + 1:]
    islenen += 1

print('işlenen', islenen, 'atlanan', len(atlanan))
for a in atlanan:
    print('  -', *a)
if YAZ:
    for yol, sat in dosyalar.items():
        open(yol, 'wb').write('\n'.join(sat).encode('utf-8'))
    print('yazıldı:', [os.path.basename(p) for p in dosyalar])

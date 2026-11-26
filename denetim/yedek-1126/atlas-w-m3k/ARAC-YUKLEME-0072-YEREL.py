# -*- coding: utf-8 -*-
"""YUKLEME-0072 — index.html'in yuklediği YEREL dosyaların envanteri.
Olcer: adet, ham bayt, gzip bayt, sira (index.html'deki gorunus sirasi), tur.
Cikti: denetim/YUKLEME-0072-YEREL.json + ekrana ozet.
"""
import gzip, io, json, os, re, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
html = open(os.path.join(KOK, 'index.html'), encoding='utf-8').read()

# script src + link href (stylesheet) — mutlak URL'ler ayrilir
ref = []
for m in re.finditer(r'<script[^>]*\ssrc="([^"]+)"', html):
    ref.append(('script', m.group(1), m.start()))
for m in re.finditer(r'<link[^>]*\shref="([^"]+)"', html):
    ref.append(('link', m.group(1), m.start()))
ref.sort(key=lambda t: t[2])

yerel, disari, eksik = [], [], []
for tur, src, poz in ref:
    if src.startswith('http://') or src.startswith('https://') or src.startswith('//'):
        disari.append((tur, src))
        continue
    yol = src.split('?')[0].split('#')[0]
    tam = os.path.join(KOK, yol.replace('/', os.sep))
    if not os.path.exists(tam):
        eksik.append(yol)
        continue
    ham = os.path.getsize(tam)
    buf = io.BytesIO()
    with open(tam, 'rb') as f, gzip.GzipFile(fileobj=buf, mode='wb', compresslevel=6, mtime=0) as g:
        while True:
            parca = f.read(1 << 20)
            if not parca:
                break
            g.write(parca)
    yerel.append({'tur': tur, 'yol': yol, 'damga': '?v=' in src, 'ham': ham, 'gzip': buf.tell()})

top_ham = sum(d['ham'] for d in yerel)
top_gz = sum(d['gzip'] for d in yerel)
mb = lambda b: round(b / 1048576.0, 2)

klasor = {}
for d in yerel:
    k = d['yol'].split('/')[0] if '/' in d['yol'] else '(kok)'
    a = klasor.setdefault(k, {'adet': 0, 'ham': 0, 'gzip': 0})
    a['adet'] += 1; a['ham'] += d['ham']; a['gzip'] += d['gzip']

buyuk = sorted(yerel, key=lambda d: -d['ham'])[:12]

ozet = {
    'adet_yerel': len(yerel), 'adet_disari': len(disari), 'eksik': eksik,
    'damgasiz': [d['yol'] for d in yerel if not d['damga']],
    'toplam_ham_mb': mb(top_ham), 'toplam_gzip_mb': mb(top_gz),
    'klasor': {k: {'adet': v['adet'], 'ham_mb': mb(v['ham']), 'gzip_mb': mb(v['gzip'])}
               for k, v in sorted(klasor.items(), key=lambda kv: -kv[1]['ham'])},
    'en_buyuk': [{'yol': d['yol'], 'ham_mb': mb(d['ham']), 'gzip_mb': mb(d['gzip'])} for d in buyuk],
    'disari': [s for _, s in disari],
    'dosyalar': yerel,
}
cik = os.path.join(KOK, 'denetim', 'YUKLEME-0072-YEREL.json')
json.dump(ozet, open(cik, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

print('yerel dosya      :', len(yerel), ' disari:', len(disari), ' EKSIK:', eksik)
print('toplam ham       :', mb(top_ham), 'MB   gzip:', mb(top_gz), 'MB')
print('damgasiz (?v yok):', len(ozet['damgasiz']))
print('--- klasor ---')
for k, v in ozet['klasor'].items():
    print('  %-12s %4d dosya  %8.2f MB ham  %8.2f MB gzip' % (k, v['adet'], v['ham_mb'], v['gzip_mb']))
print('--- en buyuk 12 ---')
for d in ozet['en_buyuk']:
    print('  %-34s %8.2f MB  gz %7.2f MB' % (d['yol'], d['ham_mb'], d['gzip_mb']))
print('--- disari ---')
for s in ozet['disari']:
    print('  ', s)

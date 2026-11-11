# -*- coding: utf-8 -*-
"""Çok satırlı (biçimli JSON) ya da `b:"..."` biçimli maddelere yer_id yazar.
Kullanım: py -X utf8 -I yerid_cokSatir.py <arastirma_dizini> <veri.json> [--yaz]
E*.json'daki başlık ~70 karaktere kesiktir: başlık ÖNEKİ dosyada TEK yerde geçmeli; aynı bloğun t'si eşleşmeli;
yer_id/yer_kon dolu olmamalı; yer_id atlasta (ya da sahne1108'de) var olmalı."""
import glob, json, os, re, sys
ARA, VERI = sys.argv[1], sys.argv[2]
YAZ = '--yaz' in sys.argv
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
Y = json.load(open(VERI, encoding='utf-8'))['Y']
adlar = set()
for y in Y:
    adlar.add(y['ad']); adlar.add(y['ad'].split(' (')[0])
yeni = open(os.path.join(KOK, 'data', 'yerlesimler_sahne1108.js'), encoding='utf-8').read()
for m in re.finditer(r'ad:"([^"]+)"', yeni):
    adlar.add(m.group(1)); adlar.add(m.group(1).split(' (')[0])
kayit = []
for f in sorted(glob.glob(os.path.join(ARA, 'yerid_E*.json'))):
    kayit += json.load(open(f, encoding='utf-8'))
yaz = {}
for r in kayit:
    yid = r.get('yer_id') or r.get('yeni_yerlesim_gerekli')
    if not yid: continue
    p = os.path.join(KOK, 'data', r['dosya'])
    if not os.path.exists(p): continue
    t = yaz.get(p) or open(p, encoding='utf-8', newline='').read()
    pre = json.dumps(r['baslik'], ensure_ascii=False)[:-1]
    cand = [(m.start(), True) for m in re.finditer(re.escape('"b": ' + pre), t)]
    cand += [(m.start(), False) for m in re.finditer(re.escape('b:' + pre), t)]
    if len(cand) != 1: continue
    i, quoted = cand[0]
    bas = t.rfind('{', 0, i); son = t.index('}', i)
    blok = t[bas:son]
    if ('"t": "%s"' % r['t'] not in blok) and ('t:"%s"' % r['t'] not in blok): continue
    if re.search(r'yer_kon', blok) or re.search(r'yer_id"?\s*:\s*"[^"]', blok): continue
    if yid not in adlar and yid.split(' (')[0] not in adlar:
        print('ATLASTA YOK', yid, r['baslik'][:50]); continue
    if re.search(r'yer_id"?\s*:\s*""', blok):
        yb = re.sub(r'(yer_id"?\s*:\s*)""', lambda m: m.group(1) + json.dumps(yid, ensure_ascii=False), blok, 1)
        t = t[:bas] + yb + t[son:]
    elif quoted:
        satbas = t.rfind('\n', 0, i) + 1
        ind = t[satbas:i]
        t = t[:satbas] + ind + '"yer_id": ' + json.dumps(yid, ensure_ascii=False) + ',\n' + t[satbas:]
    else:
        t = t[:i] + 'yer_id:' + json.dumps(yid, ensure_ascii=False) + ', ' + t[i:]
    yaz[p] = t
    print('TAMAM', os.path.basename(p), r['t'], yid, '|', r['baslik'][:40])
if YAZ:
    for p, t in yaz.items(): open(p, 'w', encoding='utf-8', newline='').write(t)
    print('yazıldı', len(yaz), 'dosya')

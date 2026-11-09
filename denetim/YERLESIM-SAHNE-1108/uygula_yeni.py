# -*- coding: utf-8 -*-
"""Araştırma JSON'larından (A-D) uygulanabilir yeni yerleşimleri süzer ve data/yerlesimler_sahne1108.js üretir.
Kullanım: py -I uygula_yeni.py <arastirma_dizini> <veri.json> [--yaz]
Süzgeç: güven yüksek|orta · 'MEVCUT/ZATEN VAR' notu yok · ad+3 km mükerrer yok · zincir kesintisiz ve t:null ile biter
· her d devletler.js id'si ve renkler.py BOYALAR anahtarı (ya da __BOSLUK__). Süzülenler rapora yazılır (uygulanmaz).
"""
import json, re, sys, os, math, glob

ARA, VERI = sys.argv[1], sys.argv[2]
YAZ = '--yaz' in sys.argv
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

def gk(t):
    m = re.match(r'^(-?\d+)(?:-(\d\d))?(?:-(\d\d))?', t or '')
    return None if not m else int(m.group(1)) * 10000 + int(m.group(2) or 1) * 100 + int(m.group(3) or 1)

def norm(s):
    import unicodedata
    s = s.replace('İ', 'i').replace('I', 'i')
    s = ''.join(c for c in unicodedata.normalize('NFKD', s) if not unicodedata.combining(c)).lower().replace('ı', 'i')
    return re.sub(r'[^a-z0-9]+', ' ', s).strip()

def km(a, b, c, d):
    r = math.pi / 180
    x = math.sin((c - a) * r / 2) ** 2 + math.cos(a * r) * math.cos(c * r) * math.sin((d - b) * r / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))

dev = open(os.path.join(KOK, 'data', 'devletler.js'), encoding='utf-8').read()
ids = set(re.findall(r'\bid:\s*"([^"]+)"', dev))
ren = open(os.path.join(KOK, 'arac', 'renkler.py'), encoding='utf-8').read()
boya = ren[ren.index('BOYALAR = {'):]
boya = set(re.findall(r'^\s*"([^"]+)"\s*:', boya, re.M))
Y = json.load(open(VERI, encoding='utf-8'))['Y']
idx = {}
for y in Y:
    for p in [y['ad'].split(' (')[0]] + re.findall(r'\(([^)]+)\)', y['ad']):
        for q in re.split(r'[/,;]', p):
            idx.setdefault(norm(q), []).append(y)

kabul, ret = [], []
for f in sorted(glob.glob(os.path.join(ARA, 'arastirma_*.json'))):
    d = json.load(open(f, encoding='utf-8'))
    d = d if isinstance(d, list) else d.get('kayitlar') or list(d.values())
    for e in d:
        if not isinstance(e, dict):
            continue
        sebep = []
        if e.get('guven') not in ('yuksek', 'orta'): sebep.append('güven ' + str(e.get('guven')))
        if re.search(r'MEVCUT:|ZATEN VAR|MEVCUT\b', e.get('notlar') or '') and 'MEVCUT DEĞİL' not in (e.get('notlar') or ''): sebep.append('atlasta zaten var')
        if not isinstance(e.get('lat'), (int, float)) or not isinstance(e.get('lon'), (int, float)): sebep.append('koordinat yok')
        else:
            for p in [e['ad'].split(' (')[0]] + re.findall(r'\(([^)]+)\)', e['ad']):
                for h in idx.get(norm(p), []):
                    if km(e['lat'], e['lon'], h['lat'], h['lon']) <= 50: sebep.append('ad+50km mükerrer: ' + h['ad'])
            for h in Y:
                if abs(h['lat'] - e['lat']) < .05 and abs(h['lon'] - e['lon']) < .05 and km(e['lat'], e['lon'], h['lat'], h['lon']) <= 3:
                    sebep.append('3 km komşu: ' + h['ad']); break
        s = e.get('s') or []
        if not s: sebep.append('zincir yok')
        else:
            if gk(s[0]['f']) < gk(e.get('kur')): sebep.append('zincir kur öncesinde başlıyor')
            if gk(s[0]['f']) > gk(e.get('kur')):
                e['_kur_at'] = True      # kur yaklaşıksa yazılmaz (yıl bilinmiyorsa yazılmaz); sahne zincir başından
            for a, b in zip(s, s[1:]):
                if a.get('t') != b['f']: sebep.append(f"zincir kesik {a.get('t')}→{b['f']}"); break
            if s[-1].get('t') not in (None, 'null', '') and gk(s[-1]['t']) < 20000101: sebep.append('zincir t:null ile bitmiyor (' + str(s[-1].get('t')) + ')')
            for r in s:
                if r['d'] != '__BOSLUK__' and (r['d'] not in ids or r['d'] not in boya): sebep.append('geçersiz d ' + r['d'])
                if r.get('t') not in (None, 'null', '') and gk(r['t']) <= gk(r['f']): sebep.append('sıfır/ters dilim ' + r['f'])
        (ret if sebep else kabul).append((e, sebep))

def js(v): return json.dumps(v, ensure_ascii=False)
satir = []
for e, _ in kabul:
    s = ',\n   '.join('{f:%s,t:%s,d:%s,kaynak:%s}' % (js(r['f']), 'undefined' if r.get('t') in (None, 'null', '') else js(r['t']), js(r['d']), js(r['kaynak'] + ' [KAYNAK OKUNMADI/teyit bekliyor — YERLESIM-SAHNE-1108]')) for r in e['s'])
    s = s.replace('t:undefined,', '')
    satir.append('{ ad:%s, tur:"sehir", lat:%s, lon:%s, g:0, k:3,%s\n s:[%s],\n kaynak:%s },' % (
        js(e['ad']), e['lat'], e['lon'], '' if e.get('_kur_at') else ' kur:%s,' % js(e['kur']), s,
        js('Koordinat: ' + (e.get('koord_kaynak') or '?') + ' [YERLESIM-SAHNE-1108; kaynak okunmadı beyanı: ' + (e.get('guven') or '?') + ' güven]')))
print('KABUL', len(kabul), [e['ad'] for e, _ in kabul])
print('RED', len(ret))
for e, s in ret: print('  -', e.get('ad'), '|', '; '.join(s)[:140])
if YAZ:
    out = os.path.join(KOK, 'data', 'yerlesimler_sahne1108.js')
    open(out, 'w', encoding='utf-8').write(
        '// data/yerlesimler_sahne1108.js — YERLESIM-SAHNE-1108: kronolojide anılıp atlasta olmayan yerleşimler (üretici denetim/YERLESIM-SAHNE-1108/uygula_yeni.py).\n'
        '// Her kayıt: mükerrer taraması (ad+3 km) temiz, zincir kur→t:null kesintisiz, d kimlikleri doğrulanmış. Kaynaklar araştırma ajanı çıktısıdır; "KAYNAK OKUNMADI" damgalı alanlar teyit bekler.\n'
        'window.YERLESIMLER_SAHNE1108 = [\n' + '\n'.join(satir) + '\n];\n')
    print('yazıldı', out)

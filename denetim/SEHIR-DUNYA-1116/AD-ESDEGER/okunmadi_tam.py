# -*- coding: utf-8 -*-
"""'kaynak okunmadı' 58 girdinin TAM kayıtlarını (id + ad_kaynak girdisi: ad, dil, donem, kaynak, kanit) AD-KAYNAK-OKUNMADI-TAM.json'a yazar (gömülü tarayıcı doğrulaması için)."""
import csv, io, json, re, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
A = 'denetim/SEHIR-DUNYA-1116/AD-ESDEGER/'
def norm(s):
    s = unicodedata.normalize('NFKD', (s or '').lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^\w]+', ' ', s).strip()
durum = [r['durum'] for r in csv.DictReader(open(A + 'KANIT-DOGRULAMA.tsv', encoding='utf-8'), delimiter='\t')]
pilot = json.load(open(A + 'PILOT_A.json', encoding='utf-8')) + json.load(open(A + 'PILOT_B.json', encoding='utf-8'))
it = iter(durum); out = []
for s in pilot:
    for e in s['ad_kaynak']:
        d = next(it); n = norm(re.sub(r'\(.*?\)', '', e['ad']))
        if d == 'OK' and n and n in norm(e.get('kanit', '')): continue
        if d == 'OK': d = 'KANIT_AD_ICERMIYOR'
        out.append({'id': s['id'], 'ad': e['ad'], 'dil': e.get('dil'), 'donem': e.get('donem'), 'kaynak': e.get('kaynak'), 'kanit': e.get('kanit'), 'neden': d})
json.dump(out, open(A + 'AD-KAYNAK-OKUNMADI-TAM.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
from collections import Counter
print(len(out), Counter(o['neden'] for o in out))

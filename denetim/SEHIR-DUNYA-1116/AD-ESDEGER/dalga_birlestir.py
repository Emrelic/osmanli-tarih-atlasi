# -*- coding: utf-8 -*-
"""DALGA2_*.json (ajanın tarayıcı/TDV ile ÇIKTIDAN ÖNCE includes() doğruladığı girdiler) → birleşik JSON'lardaki kayıtlara ad_kaynak.
Kabul koşulu: kanıt ADI taşıyor (normalize) ve (ad,dil) tekrarı yok. Yeni ad adlar'ın SONUNA. Kabul edilmeyenler DALGA-REDDEDILEN.tsv.
Kullanım: py dalga_birlestir.py DALGA2_1.json [DALGA2_2.json ...]"""
import csv, io, json, re, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = 'denetim/SEHIR-DUNYA-1116/'
def norm(s):
    s = unicodedata.normalize('NFKD', (s or '').lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^\w]+', ' ', s).strip()
dalga = []
for f in sys.argv[1:]: dalga += json.load(open(D + 'AD-ESDEGER/' + f, encoding='utf-8'))
DOS = {'hint': D + 'F2-1117/hint_birlesik11.json', 'orta': D + 'F2-1117/orta_asya_birlesik10.json', 'afrika': D + 'F2-1117/afrika_birlesik10.json'}
veri = {k: json.load(open(v, encoding='utf-8')) for k, v in DOS.items()}
idler = {x['id']: x for L in veri.values() for x in L}
eklenen = yeni_ad = 0; red = []; sehir = set(); diller = set(); kaynaksiz = 0
for s in dalga:
    x = idler.get(s['id'])
    if not x: red.append((s['id'], '(kayıt yok)', 'id bulunamadı')); continue
    for e in s.get('ad_kaynak') or []:
        n = norm(re.sub(r'\(.*?\)', '', e['ad']))
        if not n or n not in norm(e.get('kanit', '')): red.append((s['id'], e['ad'], 'kanit adı taşımıyor')); continue
        if (norm(e['ad']), e.get('dil')) in {(norm(a['ad']), a.get('dil')) for a in x.get('ad_kaynak') or []}: continue
        x.setdefault('ad_kaynak', []).append({k: e.get(k) for k in ('ad', 'dil', 'donem', 'kaynak', 'kanit')})
        eklenen += 1; sehir.add(s['id']); diller.add(e.get('dil'))
        if norm(e['ad']) not in {norm(a) for a in x.get('adlar') or []}: x.setdefault('adlar', []).append(e['ad']); yeni_ad += 1
    kaynaksiz += len(s.get('kaynaksiz') or [])
for k, v in DOS.items(): json.dump(veri[k], open(v, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
with open(D + 'AD-ESDEGER/DALGA-REDDEDILEN.tsv', 'a', encoding='utf-8', newline='') as f:
    csv.writer(f, delimiter='\t').writerows(red)
top = sum(len(x.get('ad_kaynak') or []) for L in veri.values() for x in L); topdil = {e['dil'] for L in veri.values() for x in L for e in x.get('ad_kaynak') or []}
topsehir = sum(1 for L in veri.values() for x in L if x.get('ad_kaynak'))
print(f'şehir(bu dalga) {len(sehir)} | eklenen ad_kaynak {eklenen} | yeni ad {yeni_ad} | dil {sorted(d for d in diller if d)} | reddedilen {len(red)} | ajan-beyanı kaynaksız mevcut ad {kaynaksiz} || TOPLAM: şehir(ad_kaynak olan) {topsehir}, ad_kaynak {top}, dil {len(topdil)}')

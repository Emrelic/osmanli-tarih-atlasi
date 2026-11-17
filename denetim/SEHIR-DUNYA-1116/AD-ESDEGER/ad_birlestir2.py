# -*- coding: utf-8 -*-
"""OKUNMADI-DOGRULAMA.json: gömülü tarayıcıyla sayfa metninde doğrulanan ('OK') girdileri ad_kaynak'a ekler (aynı (ad,dil) tekrar eklenmez; yeni ad adlar'ın SONUNA).
OK dışındakiler (ALINTI_YOK / AD_YOK / ERISILEMEDI) 'okunmadı' kalır. Kanıt ADI taşımıyorsa (normalize) eklenmez."""
import io, json, re, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = 'denetim/SEHIR-DUNYA-1116/'
def norm(s):
    s = unicodedata.normalize('NFKD', (s or '').lower()); s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^\w]+', ' ', s).strip()
dog = json.load(open(D + 'AD-ESDEGER/OKUNMADI-DOGRULAMA.json', encoding='utf-8'))
ok = {}; reddet = []
for e in dog:
    kanit = e.get('yeni_kanit') or e.get('kanit') or ''
    n = norm(re.sub(r'\(.*?\)', '', e['ad']))
    if e.get('durum') == 'OK' and n and n in norm(kanit):
        ok.setdefault(e['id'], []).append({'ad': e['ad'], 'dil': e.get('dil'), 'donem': e.get('donem'), 'kaynak': e.get('kaynak'), 'kanit': kanit})
    else: reddet.append((e['id'], e['ad'], e.get('durum')))
DOS = {'hint': D + 'F2-1117/hint_birlesik11.json', 'orta': D + 'F2-1117/orta_asya_birlesik10.json', 'afrika': D + 'F2-1117/afrika_birlesik10.json'}
veri = {k: json.load(open(v, encoding='utf-8')) for k, v in DOS.items()}
eklenen = yeni_ad = 0; diller = set()
for k, L in veri.items():
    for x in L:
        for e in ok.get(x['id'], []):
            mevcut_ak = {(norm(a['ad']), a['dil']) for a in x.get('ad_kaynak') or []}
            if (norm(e['ad']), e['dil']) in mevcut_ak: continue
            x.setdefault('ad_kaynak', []).append(e); eklenen += 1; diller.add(e['dil'])
            if norm(e['ad']) not in {norm(a) for a in x.get('adlar') or []}:
                x.setdefault('adlar', []).append(e['ad']); yeni_ad += 1
for k, v in DOS.items(): json.dump(veri[k], open(v, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
top_ak = sum(len(x.get('ad_kaynak') or []) for L in veri.values() for x in L)
top_dil = {e['dil'] for L in veri.values() for x in L for e in x.get('ad_kaynak') or []}
print('eklenen ad_kaynak', eklenen, '| yeni ad', yeni_ad, '| reddedilen/okunmadı kalan', len(reddet), reddet, '| TOPLAM ad_kaynak', top_ak, '| toplam dil', len(top_dil), sorted(top_dil))

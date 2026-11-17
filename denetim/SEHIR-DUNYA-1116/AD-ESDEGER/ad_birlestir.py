# -*- coding: utf-8 -*-
"""Pilot birleştirme: PILOT_A/B.json ad_kaynak girdilerinden YALNIZ kanıtı sayfa metninde DOĞRULANAN ('OK', KANIT-DOGRULAMA.tsv) olanlar veriye girer.
'YOK' ve 'DOGRULANMADI' (Britannica 403 vb.) girdiler VERİYE KONMAZ → AD-KAYNAK-OKUNMADI.tsv ('kaynak okunmadı').
Yeni ad (adlar'da olmayan) yalnız doğrulanmış girdiden gelir; adlar sırası: mevcut sıra korunur, yeni adlar SONA eklenir (dönem ad_kaynak'ta).
Çıktı: afrika/orta_asya/hint birleşik JSON'lar güncellenir (ad_kaynak alanı), AD-ESDEGER/PILOT-BIRLESIM-SAYILAR.txt."""
import csv, io, json, os, re, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = 'denetim/SEHIR-DUNYA-1116/'
A = D + 'AD-ESDEGER/'
def norm(s):
    s = unicodedata.normalize('NFKD', (s or '').lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^\w]+', ' ', s).strip()
durum = [r['durum'] for r in csv.DictReader(open(A + 'KANIT-DOGRULAMA.tsv', encoding='utf-8'), delimiter='\t')]
# KANIT-DOGRULAMA satır sırası: PILOT_A, PILOT_B; her şehir; her ad_kaynak girdisi (aynı döngü)
pilot = json.load(open(A + 'PILOT_A.json', encoding='utf-8')) + json.load(open(A + 'PILOT_B.json', encoding='utf-8'))
it = iter(durum)
ok_by_id = {}; okunmadi = []
for s in pilot:
    for e in s['ad_kaynak']:
        d = next(it)
        n_ad = norm(re.sub(r'\(.*?\)', '', e['ad']))
        if d == 'OK' and n_ad and n_ad not in norm(e.get('kanit', '')):
            d = 'KANIT_AD_ICERMIYOR'          # alıntı sayfada var ama adı taşımıyor: ad için kanıt sayılmaz
        if d == 'OK':
            ok_by_id.setdefault(s['id'], []).append({k: e.get(k) for k in ('ad', 'dil', 'donem', 'kaynak', 'kanit')})
        else:
            okunmadi.append([s['id'], e['ad'], e.get('dil', ''), e.get('donem') or '', d, e.get('kaynak', '')[:160]])
assert next(it, None) is None, 'satır sırası uyuşmuyor'
DOS = {'hint': D + 'F2-1117/hint_birlesik11.json', 'orta': D + 'F2-1117/orta_asya_birlesik10.json', 'afrika': D + 'F2-1117/afrika_birlesik10.json'}
veri = {k: json.load(open(v, encoding='utf-8')) for k, v in DOS.items()}
sehir = 0; ad_say = 0; yeni_ad = 0; diller = set(); kaynaksiz_mevcut = 0; satir = []
for k, L in veri.items():
    for x in L:
        if x['id'] not in {s['id'] for s in pilot}: continue
        ok = ok_by_id.get(x['id'], [])
        # aynı (ad,dil) bir kez; ilk doğrulanmış kaynak
        gorulen = set(); temiz = []
        for e in ok:
            key = (norm(e['ad']), e['dil'])
            if key in gorulen: continue
            gorulen.add(key); temiz.append(e)
        x['ad_kaynak'] = temiz
        mevcut = {norm(a) for a in (x.get('adlar') or [])}
        for e in temiz:
            if norm(e['ad']) not in mevcut:
                x.setdefault('adlar', []).append(e['ad']); mevcut.add(norm(e['ad'])); yeni_ad += 1
        kay = {norm(e['ad']) for e in temiz}
        ks = [a for a in (x.get('adlar') or []) if norm(re.sub(r'\(.*?\)', '', a)) not in kay and norm(a) not in kay]
        kaynaksiz_mevcut += len(ks)
        sehir += 1; ad_say += len(temiz); diller |= {e['dil'] for e in temiz}
        satir.append([x['id'], len(temiz), len(x.get('adlar') or []), len(ks), '; '.join(ks)[:200]])
for k, v in DOS.items(): json.dump(veri[k], open(v, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
with open(A + 'AD-KAYNAK-OKUNMADI.tsv', 'w', encoding='utf-8', newline='') as f:
    w = csv.writer(f, delimiter='\t'); w.writerow(['id', 'ad', 'dil', 'donem', 'neden(durum)', 'kaynak']); w.writerows(okunmadi)
with open(A + 'PILOT-BIRLESIM-SEHIR.tsv', 'w', encoding='utf-8', newline='') as f:
    w = csv.writer(f, delimiter='\t'); w.writerow(['id', 'dogrulanmis_ad_kaynak', 'adlar_toplam', 'adlar_kaynaksiz_mevcut', 'kaynaksiz_adlar']); w.writerows(satir)
ozet = f'şehir {sehir} | doğrulanmış ad_kaynak girdisi {ad_say} | yeni ad (adlar\'a eklenen) {yeni_ad} | dil {len(diller)} {sorted(diller)} | okunmadı (veriye konmayan) {len(okunmadi)} | adlar\'da kaynaksız mevcut ad {kaynaksiz_mevcut}'
open(A + 'PILOT-BIRLESIM-SAYILAR.txt', 'w', encoding='utf-8').write(ozet + '\n')
print(ozet)

"""Devredilebilir kayıtları iş bölümüne göre üç dosyaya böler (devletler.js'e YAZMAZ).
DOĞU 500–1281 → zaman-atlama · BATI 500–1281 → VERI-MS1-1281 · MÖ12000–MS499 (A,B,C) → VERI-MO-ARKEO.
Kullanım (worktree kökünden): py denetim/once1281/devir_bol.py"""
import json, io, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
J = json.load(open('denetim/ONCE1281-DEVLET-LISTESI.json', encoding='utf-8'))
DOGU = {'CIN', 'KOJA', 'GDASYA', 'HINT', 'BOZKIR', 'AFRIKA', 'AMERIKA'}
ALAN = ['id', 'ad', 'ad_yerel', 'tur', 'bolge', 'f', 't', 'kesinlik', 'baskent', 'etkin_bolge', 'sehirler', 'ozet',
        'oncul', 'ardil', 'oncelik', 'kaynak', 'dogrulama', 'ic_not', 'esleme', '_dilim']
dosya = {'ZAMAN-ATLAMA_dogu_500-1281': [], 'MS1-1281_bati_500-1281': [], 'MO-ARKEO_MO12000-MS499': []}
for k in J['kayitlar']:
    if not k['devredilebilir']:
        continue
    kod, dil = k['_dilim'].rsplit('_', 1)
    if dil in 'DE':
        hedef = 'ZAMAN-ATLAMA_dogu_500-1281' if kod in DOGU else 'MS1-1281_bati_500-1281'
    else:
        hedef = 'MO-ARKEO_MO12000-MS499'
    dosya[hedef].append({a: k.get(a) for a in ALAN})
for ad, liste in dosya.items():
    yeni = [k for k in liste if k['esleme']['durum'] == 'eksik']
    json.dump({'not': 'devletler.js künye adayları. dogrulama=kismen-okundu: yıl/varlık kaynakla okundu, gün çoğunlukla değil. YAZMADAN ÖNCE ham kaynaktan yeniden doğrula. esleme.durum != eksik olanlar yeni künye değil, MEVCUT künye düzeltme/genişletme adayıdır.',
               'sayi': len(liste), 'yeni_kunye': len(yeni), 'mevcut_kunye_duzeltme': len(liste) - len(yeni), 'kayit': liste},
              open(f'denetim/once1281/devir/{ad}.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    bolge = collections.Counter(k['_dilim'].rsplit('_', 1)[0] for k in liste)
    print(ad, len(liste), 'yeni', len(yeni), dict(bolge))

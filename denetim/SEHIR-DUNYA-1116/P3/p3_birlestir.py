# -*- coding: utf-8 -*-
"""P3/Bxx.json kayıtlarını blok eşleşmesiyle (Bxx.tsv blok sütunu, lat/lon ≤3 km) afrika/orta_asya/hint birleşik JSON'lara ekler (id tekrar yok).
Kullanım: py p3_birlestir.py B01 B03 B05 ... ; sonra sehir_tarihce.py yaz ile js üretilir (ayrı adım)."""
import csv, io, json, math, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = 'denetim/SEHIR-DUNYA-1116/'
HEDEF = {'hint': D + 'F2-1117/hint_birlesik11.json', 'orta-asya-mogolistan': D + 'F2-1117/orta_asya_birlesik10.json', 'afrika-guney-bati': D + 'F2-1117/afrika_birlesik10.json'}
veri = {k: json.load(open(v, encoding='utf-8')) for k, v in HEDEF.items()}
idler = {x['id'] for L in veri.values() for x in L}
def km(a, b, c, d):
    p = math.pi / 180; x = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 12742 * math.asin(math.sqrt(x))
toplam = {k: 0 for k in HEDEF}; atlanan = []
for b in sys.argv[1:]:
    yol = D + 'P3/%s.json' % b
    if not os.path.exists(yol): continue
    kayit = json.load(open(yol, encoding='utf-8'))
    tsv = list(csv.DictReader(open(D + 'P3/%s.tsv' % b, encoding='utf-8'), delimiter='\t')) if os.path.exists(D + 'P3/%s.tsv' % b) else []
    for x in kayit:
        if x['id'] in idler: atlanan.append((b, x['id'], 'id var')); continue
        blok = x.pop('_blok', None)   # ön tarama kayıtları blok bilgisini taşır
        for r in (tsv if blok is None else []):
            try:
                if r['lat'] and km(float(r['lat']), float(r['lon']), float(x['lat']), float(x['lon'])) <= 3: blok = r['blok']; break
            except ValueError: pass
        if blok not in HEDEF:   # parti satırı dışı kayıt: id'deki ülke koduna göre
            ks = x['id'].split('-')
            if any(c in ks for c in ('kz', 'uz', 'tm', 'tj', 'kg', 'mn', 'af', 'cn', 'ru')): blok = 'orta-asya-mogolistan'
            elif any(c in ks for c in ('in', 'pk', 'bd', 'lk', 'np', 'bt', 'mv')): blok = 'hint'
            else: blok = 'afrika-guney-bati'
            if blok not in HEDEF: atlanan.append((b, x['id'], 'blok bulunamadı')); continue
        veri[blok].append(x); idler.add(x['id']); toplam[blok] += 1
for k, v in HEDEF.items(): json.dump(veri[k], open(v, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('eklenen', toplam, '| atlanan', atlanan, '| toplam kayıt', {k: len(v) for k, v in veri.items()})

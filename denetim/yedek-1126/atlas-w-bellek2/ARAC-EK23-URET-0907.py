# -*- coding: utf-8 -*-
"""`denetim/OLAYLAR-EK23-HAZIR.js` URETICISI — ⑪ KOL.
   Kayitlar ELLE YAZILMAZ; olculmus adaylardan uretilir.

   UC KARAR, ucu de OLCUME dayaniyor:
     ① `1794-01-01` Zend DUSURULUR — CEKIRDEKTE ZATEN VAR (olaylar_ek22.js,
        ayni gun, benzerlik 0.61). Sartname onu "bekliyor" diye sayiyordu;
        BORC ODENMIS.
     ② BALKAN'in iki 1917 maddesi DUSURULUR — TASIMA'nin ayni gunlu, KAYNAKLI
        (Riasanovsky & Steinberg) surumleri var. Ikisi de BENIM yazdigim
        kayitlardi; kendi mukerrerimi dusuruyorum.
     ③ `tur:` → `k:` YALNIZ deger CEKIRDEK SOZLUGUNDE varsa cevrilir.
        Yoksa `k` BOS birakilir ve BILDIRILIR — eslesme UYDURULMAZ.
"""
import json, io, glob, os, re, sys, collections
sys.dont_write_bytecode = True
sys.path.insert(0, 'arac')
import girdi

# ---- CEKIRDEGIN `k:` SOZLUGU — olculur, varsayilmaz ----
K_SOZLUK = collections.Counter()
for f in sorted(glob.glob('data/olaylar*.js')):
    src = io.open(f, encoding='utf-8', errors='replace').read()
    for mm in re.finditer(r'window\.([A-Z0-9_]+)\s*=', src):
        try:
            v = girdi._cevir(src, mm.group(1))
        except Exception:
            continue
        for o in (v if isinstance(v, list) else []):
            if isinstance(o, dict) and o.get('k'):
                K_SOZLUK[o['k']] += 1

O = json.load(io.open('denetim/_ek23_olcum.json', encoding='utf-8'))
aday = O['aday']

DUS = [
    ('KRONOLOJI-ZEND-1794-0905.json', '1794-01-01',
     'CEKIRDEKTE ZATEN VAR — olaylar_ek22.js, ayni gun, benzerlik 0.61'),
    ('KRONOLOJI-BALKAN-0906.json', '1917-03-15',
     'TASIMA surumu KAYNAKLI (Riasanovsky & Steinberg) — bu KAYIT amacliydi'),
    ('KRONOLOJI-BALKAN-0906.json', '1917-11-07',
     'TASIMA surumu KAYNAKLI — ayni sebep'),
]
META = re.compile(r'^[🔴🟡🟢⚪⚠️_]')

secili, dusen, k_bos = [], [], []
for a in aday:
    m = a['madde']
    d = [x for x in DUS if x[0] == a['dosya'] and x[1] == m['t']]
    if d:
        dusen.append((a, d[0][2])); continue
    yeni = {k: v for k, v in m.items() if not META.match(k)}
    if 'k' not in yeni and 'tur' in yeni:
        if yeni['tur'] in K_SOZLUK:
            yeni['k'] = yeni['tur']
        else:
            k_bos.append((a['dosya'], m['t'], yeni['tur'], m['b'][:56]))
    secili.append({'kaynak_dosya': a['dosya'], 'madde': yeni})

secili.sort(key=lambda z: z['madde']['t'])

print('=== SECIM ===')
print('   aday          : %d' % len(aday))
print('   DUSEN         : %d' % len(dusen))
for a, n in dusen:
    print('      %s  %-34s  %s' % (a['madde']['t'], a['dosya'][:34], n))
print('   SECILEN       : %d' % len(secili))
print()
print('=== `k:` COZULEMEYEN (deger cekirdek sozlugunde YOK) : %d ===' % len(k_bos))
for f, t, tur, b in k_bos:
    print('   %-12s tur="%s"  %-56s [%s]' % (t, tur, b, f[:28]))
print()
print('   cekirdek `k:` sozlugu (%d deger): %s'
      % (len(K_SOZLUK), ', '.join(sorted(K_SOZLUK))))

# ---- gun hassasiyeti ----
kaba = [s for s in secili
        if not re.match(r'^\d{4}-\d{2}-\d{2}$', s['madde']['t'])]
yil = [s for s in secili if re.match(r'^\d{4}-01-01$', s['madde']['t'])]
print()
print('=== GUN HASSASIYETI ===')
print('   GUN bicimli olmayan (YYYY / YYYY-MM): %d' % len(kaba))
print('   `YYYY-01-01` (yil hassasiyeti, §4 yazimi): %d' % len(yil))
for s in yil:
    print('      %s  %-52s [%s]' % (s['madde']['t'], s['madde']['b'][:52],
                                     s['kaynak_dosya'][:26]))

json.dump({'secili': secili,
           'dusen': [{'dosya': a['dosya'], 't': a['madde']['t'],
                      'b': a['madde']['b'], 'niye': n} for a, n in dusen],
           'k_cozulemeyen': [{'dosya': f, 't': t, 'tur': tur, 'b': b}
                             for f, t, tur, b in k_bos],
           'cekirdek_k_sozlugu': sorted(K_SOZLUK)},
          io.open('denetim/_ek23_secim.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
print()
print('yazildi: denetim/_ek23_secim.json')

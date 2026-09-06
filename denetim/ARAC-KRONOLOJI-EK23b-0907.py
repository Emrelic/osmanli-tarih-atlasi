# -*- coding: utf-8 -*-
"""MUKERRER OLCUMU — IKINCI TUR. Birinci tur `denetle.py`nin esigini
   (400 gun · 0.34) TAKLIT ETTI ve **55 eslesme** verdi; okununca cogu
   SAHTE cikti:
     «Tarsus'un kurtulusu» ↔ «Buyuk Taarruz ve Izmir'in kurtulusu» 0.59
     «Kilis'in ... isgali» ↔ «II. Abdulhamid'in ... vefati»        0.43
   ⇒ 0.34 bir TARAMA esigi, bir HUKUM esigi DEGIL. (`§11`: bir aleti
     taklit eden olcum onun esigini tasir — ama esigin NE ICIN oldugunu
     da tasimali.)
   Bu tur AYNI GUN ustunden olcer: mukerrerlik iddiasi icin gun eslesmesi
   ON KOSUL.
"""
import json, io, glob, os, re, sys, datetime, difflib
sys.dont_write_bytecode = True
sys.path.insert(0, 'arac')
import girdi

O = json.load(io.open('denetim/_ek23_olcum.json', encoding='utf-8'))
aday = O['aday']

cek = []
for f in sorted(glob.glob('data/olaylar*.js')):
    src = io.open(f, encoding='utf-8', errors='replace').read()
    for mm in re.finditer(r'window\.([A-Z0-9_]+)\s*=', src):
        try:
            v = girdi._cevir(src, mm.group(1))
        except Exception:
            continue
        for o in (v if isinstance(v, list) else []):
            if isinstance(o, dict) and o.get('t'):
                cek.append((o['t'], o.get('b', ''), os.path.basename(f)))

gunler = {}
for t, b, f in cek:
    gunler.setdefault(t, []).append((b, f))


def benzer(a, b):
    return difflib.SequenceMatcher(None, a or '', b or '').ratio()


print('=== AYNI GUN OLCUMU — %d aday ===' % len(aday))
inen, yeni = [], []
for a in aday:
    m = a['madde']
    ayni = gunler.get(m['t'], [])
    if not ayni:
        yeni.append(a); continue
    en = max(ayni, key=lambda z: benzer(m.get('b'), z[0]))
    r = benzer(m.get('b'), en[0])
    inen.append((a, en[0], en[1], r))

print()
print('--- 🔴 CEKIRDEKTE AYNI GUNDE MADDE VAR : %d ---' % len(inen))
for a, b, f, r in sorted(inen, key=lambda z: -z[3]):
    isaret = '🔴 MUKERRER' if r >= 0.34 else '🟡 AYNI GUN, BASKA KONU'
    print('  %s  %s  %s' % (isaret, a['madde']['t'], a['dosya'][:34]))
    print('       aday : %s' % a['madde']['b'][:88])
    print('       cekir: %s   [%s]  benzerlik %.2f' % (b[:88], f, r))

print()
print('--- 🟢 CEKIRDEKTE O GUN HIC MADDE YOK : %d ---' % len(yeni))
for a in sorted(yeni, key=lambda z: z['madde']['t']):
    print('   %-12s %-40s [%s]' % (a['madde']['t'], a['madde']['b'][:40],
                                    a['dosya'][:34]))

json.dump({'inen': [{'aday': a['madde'], 'dosya': a['dosya'],
                     'cekirdek_b': b, 'cekirdek_dosya': f,
                     'benzerlik': round(r, 3)} for a, b, f, r in inen],
           'yeni': yeni},
          io.open('denetim/_ek23_ayni_gun.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
print()
print('yazildi: denetim/_ek23_ayni_gun.json')

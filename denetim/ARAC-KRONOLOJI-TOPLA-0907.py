# -*- coding: utf-8 -*-
"""CEKIRDEK KRONOLOJI BORCU — bekleyen maddeleri TOPLAR.
   🔴 SEMA TAHMIN EDILMEZ: her dosyanin anahtar kumesi DOKULUR, sonra
      madde tasiyan yapilar ARANIR. (`§11`: alan adi TANIMLANDIGI yerden
      okunur; burada tanim yok, o yuzden HER DOSYA ayri ayri dokuluyor.)
"""
import json, io, glob, os, re, sys
sys.dont_write_bytecode = True

ALAN_IZI = ('t', 'b')          # bir maddenin en az tasidigi alanlar


def madde_mi(o):
    return isinstance(o, dict) and all(k in o for k in ALAN_IZI) \
        and isinstance(o.get('t'), str) and re.match(r'^\d{3,4}-', o['t'])


def gez(x, yol=''):
    """ic ice her yapiyi gezer, madde gorunumlu sozlukleri toplar."""
    if madde_mi(x):
        yield yol, x
        return
    if isinstance(x, dict):
        for k, v in x.items():
            yield from gez(v, yol + '/' + str(k))
    elif isinstance(x, list):
        for i, v in enumerate(x):
            yield from gez(v, yol + '[%d]' % i)


print('=== KRONOLOJI-* ARTEFAKTLARI — SEMA DOKUMU ===')
toplam = 0
kaynaklar = {}
for f in sorted(glob.glob('denetim/KRONOLOJI-*')):
    ad = os.path.basename(f)
    if f.endswith('.json'):
        try:
            d = json.load(io.open(f, encoding='utf-8'))
        except Exception as e:
            print('  %-42s ⚠️ JSON OKUNAMADI: %s' % (ad, str(e)[:40]))
            continue
        bulunan = list(gez(d))
        ust = list(d.keys())[:6] if isinstance(d, dict) else ['(list)']
        print('  %-42s madde %2d   anahtar: %s'
              % (ad, len(bulunan), ', '.join(str(u)[:22] for u in ust)))
        if bulunan:
            kaynaklar[ad] = bulunan
            toplam += len(bulunan)
    else:
        js = io.open(f, encoding='utf-8', errors='replace').read()
        n = len(re.findall(r'\bt:\s*"', js))
        print('  %-42s 🟡 JS dosyasi · t: sayisi %d (ayri islenir)' % (ad, n))

print()
print('TOPLAM madde gorunumlu kayit: %d · dosya: %d' % (toplam, len(kaynaklar)))
print()
print('=== YOL DESENLERI (madde nerede duruyor) ===')
desen = {}
for ad, blist in kaynaklar.items():
    for yol, o in blist:
        k = re.sub(r'\[\d+\]', '[]', yol)
        desen.setdefault(k, []).append(ad)
for k in sorted(desen, key=lambda z: -len(desen[z])):
    print('   %-46s %3d  (%s)' % (k, len(desen[k]),
                                  ', '.join(sorted(set(desen[k]))[:3])[:60]))

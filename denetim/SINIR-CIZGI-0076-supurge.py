# -*- coding: utf-8 -*-
"""TASNIFSIZ SUPURGESI — PARTI.md ## H- basliklari ile SEVK-0076.md sekiz listesini karsilastirir."""
import re, collections, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

SEVK = r'C:\atlas\oturumlar\SEVK-0076.md'
PARTI = r'C:\claudemre\kutu\giden\parti-emrelic-0076\PARTI.md'

sevk = open(SEVK, encoding='utf-8').read()
parti = open(PARTI, encoding='utf-8').read()

# 1) PARTI.md'deki ## H-XXXX basliklari (satir basi)
basliklar = re.findall(r'(?m)^##\s+(H-\d{4})\b', parti)
print('PARTI.md ## H- baslik sayisi :', len(basliklar), ' tekil:', len(set(basliklar)))
tek = [k for k, v in collections.Counter(basliklar).items() if v > 1]
if tek:
    print('  MUKERRER baslik:', sorted(tek))

# 2) SEVK-0076.md: her "## `AD`" bolumunun ICINDEKI TUM ``` bloklari
bloklar = re.findall(r'(?m)^##\s+`([^`]+)`([^\n]*)\n(.*?)(?=(?m:^##\s)|\Z)', sevk, re.S)
atama = {}
basligin_iddiasi = {}
for ad, kalan, govde in bloklar:
    ids = []
    for m in re.finditer(r'```(.*?)```', govde, re.S):
        ids += re.findall(r'H-\d{4}', m.group(1))
    atama.setdefault(ad, []).extend(ids)
    s = re.search(r'(\d+)\s*madde', kalan)
    if s:
        basligin_iddiasi[ad] = int(s.group(1))

print()
print('SEVK-0076.md listeleri  (basliktaki iddia / gercek sayim):')
toplam = []
for ad in atama:
    iddia = basligin_iddiasi.get(ad, '-')
    fark = '' if iddia == len(atama[ad]) else '   <<< UYUSMUYOR'
    print('  %-20s iddia %3s / sayim %3d (tekil %d)%s'
          % (ad, iddia, len(atama[ad]), len(set(atama[ad])), fark))
    toplam += atama[ad]
print('  ' + '-' * 52)
print('  TOPLAM atanan  %3d  (tekil %d)' % (len(toplam), len(set(toplam))))

sayac = collections.Counter(toplam)
cift = {k: v for k, v in sayac.items() if v > 1}
print()
print('IKI KISIYE BIRDEN VERILEN: %d' % len(cift))
for k in sorted(cift):
    kimler = [ad for ad in atama if k in atama[ad]]
    print('  %s -> %s' % (k, ', '.join(kimler)))

pakette = set(basliklar)
atanan = set(toplam)

eksik = sorted(pakette - atanan)
print()
print('KIMSEYE VERILMEMIS (pakette var, sevkte yok): %d' % len(eksik))
for k in eksik:
    m = re.search(r'(?m)^##\s+' + k + r'\b(.*)$', parti)
    print('   ', k, (m.group(1).strip()[:78] if m else ''))

hayalet = sorted(atanan - pakette)
print()
print('SEVKTE VAR, PAKETTE YOK (hayalet madde): %d' % len(hayalet))
for k in hayalet:
    kimler = [ad for ad in atama if k in atama[ad]]
    print('   ', k, '->', ', '.join(kimler))

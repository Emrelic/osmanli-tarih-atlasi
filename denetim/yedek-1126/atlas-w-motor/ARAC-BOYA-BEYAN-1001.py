# -*- coding: utf-8 -*-
"""BOYA BEYANI GERI KOYUCU — `boya_gerekli:true` var olan kunyelere ekler.

🔴 NICIN: 8 kunye onerisinde 197 kez `boya_gerekli` vardi; birlestirici
   (ARAC-KUNYE-1945-0930-UYGULA.py) o alani ALAN KUMESINDE TASIMIYORDU ve beyan
   `data/devletler.js`e SIFIR indi. Sonuc: `durum_tablosu.py` 154 BEYANLI boya
   borcunu "GERCEK SESSIZ BORC" saydi ve sayi 12 -> 172 diye sicradi.
   Beyanli borc, sessiz borctan FARKLIDIR: biri kayda gecmis bir bekleyis,
   oteki gorulmemis bir delik.

   Bu, `denetle.py`nin kendi yorumundaki TIMBUKTU vakasinin birebir aynisi:
   "s: ve kaynak: indi, beyan inmedi — YAMANIN YARISI INDI, YARISI DUSTU."
   Birlestiriciye alan eklendi (kalici care); bu betik GECMISI onarir.

Kullanim:  py denetim/ARAC-BOYA-BEYAN-1001.py [--yaz]
Varsayilan KURU KOSU.

🔴 Dizgi-bilen: kunye blogunun siniri parantez eslemesiyle bulunur ve dizgi
   icindeki parantezler SAYILMAZ (`ozet` alanlarinda "[[iran]]" gibi metinler
   var). Bu, `ARAC-KUNYE-1945-0930-UYGULA.py`nin `esle()` islevinin aynisi —
   yeniden yazilmadi, ayni mantik kullanildi (`dersler/D244`).
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, 'data', 'devletler.js')
LISTE = os.path.join(KOK, 'denetim', 'BOYA-GEREKLI-1001.json')
KURU = '--yaz' not in sys.argv


def esle(m, i, ac='{', kapa='}'):
    """m[i] == ac; eslesen kapa'nin indeksini dondur (dizgileri atlar)."""
    assert m[i] == ac, (m[i:i + 20], ac)
    d, j, n = 0, i, len(m)
    while j < n:
        c = m[j]
        if c == '"':
            j += 1
            while m[j] != '"':
                j += 2 if m[j] == '\\' else 1
        elif c == ac:
            d += 1
        elif c == kapa:
            d -= 1
            if d == 0:
                return j
        j += 1
    raise SystemExit('eslesme yok')


j = json.load(io.open(LISTE, encoding='utf-8'))
hedef = sorted(j.get('kimlikler', {}).keys())
print('%s  hedef kimlik: %d' % ('### KURU KOSU ###' if KURU else '### YAZIYOR ###', len(hedef)))

m = io.open(YOL, encoding='utf-8', newline='').read()
n0 = len(re.findall(r'\{\s*id:"', m))
print('devletler.js kunye: %d' % n0)
print()

yazildi, zaten, yok, mukerrer, boyali = 0, 0, [], [], []
for kid in hedef:
    kalip = r'\{\s*id:"%s"' % re.escape(kid)
    bulgu = list(re.finditer(kalip, m))
    if not bulgu:
        yok.append(kid)
        continue
    if len(bulgu) > 1:
        mukerrer.append(kid)
        continue
    a = bulgu[0].start()
    b = esle(m, a)
    B = m[a:b + 1]
    if 'boya_gerekli' in B:
        zaten += 1
        continue
    # 🔴 `harita:` DOLU ise beyan YANLIS olur — o kunye boyaniyor demektir.
    hm = re.search(r'\bharita:"([^"]*)"', B)
    if hm and hm.group(1).strip():
        boyali.append(kid + ' (harita:' + hm.group(1) + ')')
        continue
    # `bolge:` alanindan SONRA ekle — ilk satirin sonuna, bicimi bozmadan
    yer = re.search(r'\bid:"%s"' % re.escape(kid), B)
    ek = re.search(r'\bbaskent:"[^"]*"', B)
    if not ek:
        ek = re.search(r'\bt:"[^"]*"', B)
    if not ek:
        yok.append(kid + ' (ekleme noktasi bulunamadi)')
        continue
    mutlak = a + ek.end()
    m = m[:mutlak] + ', boya_gerekli:true' + m[mutlak:]
    yazildi += 1

print('eklenecek      : %d' % yazildi)
print('zaten var      : %d' % zaten)
print('🔴 BOYALI (beyan YANLIS olurdu, atlandi): %d' % len(boyali))
for x in boyali[:10]:
    print('     ' + x)
print('devletler.js\'te YOK: %d' % len(yok))
for x in yok[:10]:
    print('     ' + x)
if mukerrer:
    print('🔴 MUKERRER id: %d -> %s' % (len(mukerrer), ', '.join(mukerrer[:8])))

n1 = len(re.findall(r'\{\s*id:"', m))
if n1 != n0:
    raise SystemExit('🔴 KUNYE SAYISI DEGISTI: %d -> %d — YAZILMADI' % (n0, n1))
print()
print('kunye sayisi degismedi: %d ✓' % n1)

if KURU:
    print()
    print('=> uygulamak icin: py denetim/ARAC-BOYA-BEYAN-1001.py --yaz')
    sys.exit(0)

io.open(YOL, 'w', encoding='utf-8', newline='').write(m)
r = subprocess.run(['node', '--check', YOL], capture_output=True, text=True)
if r.returncode != 0:
    print('🔴 node --check BASARISIZ:')
    print(r.stderr[:600])
    sys.exit(1)
print('yazildi · node --check TEMIZ · boya_gerekli toplam: %d'
      % io.open(YOL, encoding='utf-8').read().count('boya_gerekli'))

# -*- coding: utf-8 -*-
"""Erdel zincirini (cikti/teyit/erdel_oneri.md) 5 kayda işler (Szászsebes zaten bu zincirde):
 - `v:` vassal girdileri kaldırılır (s: dogu-macar-kralligi / erdel dilimleri onları karşılar; öneri risk 3)
 - 1687-08-12→bitiş macaristan-habsburg dilimi -> 1867-06-20'ye çekilir, önüne
   1526-11-10 dogu-macar-kralligi, 1541-08-29 erdel, 1556-03-12→1711-04-29 erdel, 1711-04-29→1867-06-20 habsburg eklenir.
Kullanım: py -X utf8 -I erdel_uygula.py [--yaz]"""
import os, re, sys
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
HEDEF = [('yerlesimler.js', 'Erdel (Kaloşvar)'), ('yerlesimler_ek29.js', 'Erdel Belgradı (Gyulafehérvár)'),
         ('yerlesimler_ek29.js', 'Brassó (Braşov)'), ('yerlesimler_ek29.js', 'Segesvár (Sighişoara)'),
         ('yerlesimler_ek_macaristan.js', 'Zilah (Zalău)')]
KAY = ("Erdel zinciri (Emre onayı 12 Kasım 2026; denetim/YERLESIM-SAHNE-1108/cikti/teyit/erdel_oneri.md): TDV 'Erdel' (Kemal Karpat, c.11, 1995) "
       "1541 haraçgüzar voyvodalık, 1699 Karlofça ile Avusturya'ya terk; MTA History of Transylvania: 26 Temmuz 1551 / 12 Mart 1556 Szászsebes diyeti / "
       "20 Haziran 1867 Kolozsvár diyetinin feshi ('300 yıllık ayrı statü sona erdi'); 1711-04-29 Szatmár (kronoloji maddesi) Habsburg doğrudan yönetimin kurumsal sonu. "
       "TASARIM KARARI: 1711-1867 arası `habsburg` (Macar tacından ayrı birim); fiilî Habsburg himayesi 1687-88, hukuken 26 Ocak 1699, atlasta zincir 1711-04-29'dan.")

def esles(t, a, ac, kap):
    """t[a]==ac olan açılıştan eşleşen kapanışın indeksi (string-duyarlı)."""
    d = 0; i = a; ins = False
    while i < len(t):
        c = t[i]
        if ins:
            if c == '\\': i += 1
            elif c == '"': ins = False
        else:
            if c == '"': ins = True
            elif c == ac: d += 1
            elif c == kap:
                d -= 1
                if d == 0: return i
        i += 1
    raise SystemExit('eşleşme yok')

def dilim(f, t, d, kay):
    return '{"f":"%s","t":"%s","d":"%s","kaynak":"%s"}' % (f, t, d, kay.replace('"', "'"))

dosyalar = {}
for dosya, ad in HEDEF:
    p = os.path.join(KOK, 'data', dosya)
    T = dosyalar.get(p) or open(p, encoding='utf-8', newline='').read()
    a = T.index('ad:"%s"' % ad)
    # kayıt sonu: sonraki "\n{ ad:" ya da "\n//"
    m = re.compile(r'\n(\{ ad:|//)').search(T, a)
    b = m.start() if m else len(T)
    blok = T[a:b]
    # 1) v: kaldır
    mv = re.search(r'(?<![A-Za-z_"])"?v"?:\[', blok)
    while mv:
        i0 = mv.end() - 1
        i1 = esles(blok, i0, '[', ']')
        j = i1 + 1
        if blok[j:j+1] == ',': j += 1
        # önceki girinti/boşluğu da al
        k = mv.start()
        while k > 0 and blok[k-1] in ' \t': k -= 1
        if k > 0 and blok[k-1] == '\n' and blok[j:j+1] == '\n': j += 1
        blok = blok[:k] + blok[j:]
        mv = re.search(r'(?<![A-Za-z_"])"?v"?:\[', blok)
    # 2) 1687 dilimi
    m1 = re.search(r'\{"?f"?:\s*"1687-08-12","?t"?:\s*"(1918-11-1\d)","?d"?:\s*"macaristan-habsburg"', blok)
    assert m1, ad
    kisa = KAY
    yeni = ', '.join([
        dilim('1526-11-10', '1541-08-29', 'dogu-macar-kralligi', kisa),
        dilim('1541-08-29', '1551-07-26', 'erdel', kisa),
        dilim('1556-03-12', '1711-04-29', 'erdel', kisa),
        dilim('1711-04-29', '1867-06-20', 'habsburg', kisa)]) + ', '
    kalan = '{"f":"1867-06-20","t":"%s","d":"macaristan-habsburg"' % m1.group(1)
    blok = blok[:m1.start()] + yeni + kalan + blok[m1.end():]
    T = T[:a] + blok + T[b:]
    dosyalar[p] = T
    print('TAMAM', ad)
if '--yaz' in sys.argv:
    for p, T in dosyalar.items(): open(p, 'w', encoding='utf-8', newline='').write(T)
    print('yazıldı', len(dosyalar))

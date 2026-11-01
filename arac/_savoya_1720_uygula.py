# -*- coding: utf-8 -*-
# ITALYA-1028k: Torino / Nice / Chambery zincirlerinde 1720-08-02 oncesi 'sardinya' (kunye f 1720-08-02) -> 'savoya' (kunye t 1720-08-02). Tek seferlik.
import glob, sys
sys.stdout.reconfigure(encoding="utf-8")
K = ("Savoya Kontluğu/Dükalığı (künye savoya, f 1032-01-01, t 1720-08-02): Sardinya-Piyemonte Krallığı künyesi f 1720-08-02'de başlar; "
     "önceki 'sardinya' etiketi 1720 öncesini Krallık sayıyordu (4d ihlali). Savoya dükü Sicilya'yı Avusturya'ya verip Sardinya'yı aldı (Lahey Antlaşması, Ağustos 1720; atlas kronoloji_italya.js 1720-08-02). "
     "BEYANLI YAKLAŞIKLIK: Fransız işgalleri (1536-1562 Piyemonte, 1690'lar), 1559 Cateau-Cambrésis ve Savoya Dükalığı'nın iç ayrıntıları ayrı gösterilmedi. · ITALYA-1028k")
K = K.replace('"', "'")

def uygula(dosya, ad, f, t):
    L = open(dosya, encoding="utf-8", newline="").read().split("\n")
    idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"%s"' % ad)]
    assert len(idx) == 1, ad
    seg = '{f:"%s",t:"%s",d:"sardinya"' % (f, t)
    assert L[idx[0]].count(seg) == 1, (ad, seg)
    L[idx[0]] = L[idx[0]].replace(
        seg, '{f:"%s",t:"1720-08-02",d:"savoya",kaynak:"%s"},{f:"1720-08-02",t:"%s",d:"sardinya"' % (f, K, t))
    open(dosya, "w", encoding="utf-8", newline="").write("\n".join(L))

uygula("data/yerlesimler.js", "Torino", "1281-01-01", "1798-12-09")
uygula("data/yerlesimler_avrupa.js", "Nice", "1388-09-28", "1793-01-31")
uygula("data/yerlesimler_avrupa.js", "Chambéry", "1281-01-01", "1792-11-27")
print("tamam")

# -*- coding: utf-8 -*-
# ITALYA-1028n: Toskana merkezlerine (Floransa, Pisa, Lucca) antik-erken ortacag oneki; toskana-markizligi 812 sonrasi. Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
ORTAK = ("ZİNCİR-İTALYA-ANTİK (ITALYA-1028n, künye sınırları esas): roma-imp (-0026-01-16→0395-01-17), bati-roma (→476-08-28), odoakar (476-08-23→493-03-05), dogu-got (493-03-05→553), "
         "langobard (568→774), karolenj-italya (774→962-02-02), toskana-markizligi (812-01-01→1197-11-11) künyelerinin kendi sınırları ve kaynakları (Britannica, Treccani 'Toscana'). "
         "BEYANLI YAKLAŞIKLIK: şehre özgü el değiştirme günleri ayrı gösterilmedi (Gotik Savaş 535-553, Lombard Tuscia'nın kuruluşu 570'ler, Karolenj dilimi 774'te yıl hassasiyetiyle); "
         "Tuscia markizliği (812) Karolenj dilimini yıl hassasiyetiyle 812'de keser; Roma Cumhuriyeti dönemi yazılmadı (kaynak okunmadı).")
S = [("-0026-01-16", "0395-01-17", "roma-imp"), ("0395-01-17", "0476-08-23", "bati-roma"), ("0476-08-23", "0493-03-05", "odoakar"),
     ("0493-03-05", "0553-01-01", "dogu-got"), ("0553-01-01", "0568-01-01", "bizans"), ("0568-01-01", "0774-01-01", "langobard"),
     ("0774-01-01", "0812-01-01", "karolenj-italya"), ("0812-01-01", "1000-01-01", "toskana-markizligi")]
onek = ",".join('{f:"%s",t:"%s",d:"%s"%s}' % (f, t, d, (',kaynak:"%s"' % ORTAK.replace('"', "'")) if i == 0 else "") for i, (f, t, d) in enumerate(S)) + ","

for dosya, ad in [("data/yerlesimler.js", "Floransa"), ("data/yerlesimler_avrupa.js", "Pisa"), ("data/yerlesimler_avrupa.js", "Lucca")]:
    L = open(dosya, encoding="utf-8", newline="").read().split("\n")
    idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"%s"' % ad)]
    assert len(idx) == 1, ad
    l = L[idx[0]]
    k = l.index("s:[") + 3
    assert l[k:k + 15] == '{f:"1000-01-01"', (ad, l[k:k + 20])
    L[idx[0]] = l[:k] + onek + l[k:]
    open(dosya, "w", encoding="utf-8", newline="").write("\n".join(L))
    print(ad, "tamam")

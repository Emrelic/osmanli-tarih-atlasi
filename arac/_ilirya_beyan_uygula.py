# -*- coding: utf-8 -*-
# ITALYA-1028e: Ilirya Eyaletleri'nin 1813 sonu (1813-01-01 yer tutucu) icin BEYAN. Tarih degismez, yalniz kaynak: beyani eklenir.
import sys
sys.stdout.reconfigure(encoding="utf-8")
DOS = "data/yerlesimler_avrupa.js"
BY = ("BEYANLI YAKLAŞIKLIK: 1813-01-01 gün olarak YER TUTUCUDUR (yalnız yıl teyitli). Avusturya'nın İlirya Eyaletleri'ni geri alışı 1813 Eylül-Kasım'a yayılır "
      "(Hiller'in Drava harekâtı Eylül 1813; Laibach 5 Ekim'e dek Avusturya elinde; Trieste teslimi 2 Kasım 1813 — yerel/ikincil kaynak, teyitsiz; Gorizia günü bulunamadı). "
      "Kaynak: Wikipedia 'Illyrian Provinces' (ikincil), ikinci kaynak aranıyor; şehre özel gün için TIB/Avusturya Kriegsarchiv neşri aranmalı. · ITALYA-1028e")
for ad in ["Trieste", "Görz (Gorizia)", "Tarvis (Tarvisio)"]:
    L = open(DOS, encoding="utf-8", newline="").read().split("\n")
    idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"%s"' % ad)]
    assert len(idx) == 1, ad
    seg = '{f:"1813-01-01",t:"1918-11-03",d:"avusturya"}'
    assert L[idx[0]].count(seg) == 1, ad
    L[idx[0]] = L[idx[0]].replace(seg, '{f:"1813-01-01",t:"1918-11-03",d:"avusturya",kaynak:"%s"}' % BY.replace('"', "'"))
    open(DOS, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")

# -*- coding: utf-8 -*-
# ITALYA-1028g: San Marino 1739-10-17 / 1740-02-05 Alberoni isgali (papalik). Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
DOS = "data/yerlesimler_nokta2.js"
K = ("Alberoni işgali: Ravenna'daki papalık legatı Kardinal Giulio Alberoni 17 Ekim 1739'da San Marino'yu askerî güçle işgal edip yeni anayasa dayattı; "
     "Papa XII. Clemens 5 Şubat 1740'ta hakları tanıyıp bağımsızlığı geri verdi (Wikipedia 'History of San Marino' ve arama özetleri; ikincil — ikinci kaynak aranıyor). "
     "BEYAN: 1503 Cesare Borgia işgali (aylar sürdü, gün bulunamadı) yazılmadı. · ITALYA-1028g")
L = open(DOS, encoding="utf-8", newline="").read().split("\n")
idx = [i for i, l in enumerate(L) if l.startswith('{"ad": "San Marino (Monte Titano)"')]
assert len(idx) == 1
seg = '{"f": "1000-01-01", "t": "2000-12-31", "d": "san-marino"}'
assert L[idx[0]].count(seg) == 1
L[idx[0]] = L[idx[0]].replace(
    seg,
    '{"f": "1000-01-01", "t": "1739-10-17", "d": "san-marino"}, {"f": "1739-10-17", "t": "1740-02-05", "d": "papalik", "kaynak": "%s"}, '
    '{"f": "1740-02-05", "t": "2000-12-31", "d": "san-marino"}' % K.replace('"', "'"))
open(DOS, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")

# -*- coding: utf-8 -*-
# ITALYA-1028o: Venedik 697-01-01 -> 1000 (venedik kunyesi f 697). Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
K = ("Venedik Cumhuriyeti: künye venedik f 0697-01-01 (gelenek: ilk doge Paolo Lucio Anafesto; künye kaynağı Britannica 'Venice' ve atlas olaylar_ortacag_italya_dogu_avrupa.js:11). "
     "BEYANLI YAKLAŞIKLIK: 697 geleneksel tarihtir (Bizans Venetia'sı içinde doge makamı), Venedik'in fiilî özerkliği ve Bizans'a nominal bağlılığı (8.-11. yy) ayrı gösterilmedi; "
     "697 öncesi Bizans/Lombard Venetia'sı yazılmadı. ikinci kaynak aranıyor. · ITALYA-1028o")
dosya = "data/yerlesimler.js"
L = open(dosya, encoding="utf-8", newline="").read().split("\n")
idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"Venedik"')]
assert len(idx) == 1
l = L[idx[0]]
k = l.index("s:[") + 3
assert l[k:k + 15] == '{f:"1000-01-01"', l[k:k + 20]
L[idx[0]] = l[:k] + '{f:"0697-01-01",t:"1000-01-01",d:"venedik",kesinlik:{f:"yil"},kaynak:"%s"},' % K.replace('"', "'") + l[k:]
open(dosya, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")

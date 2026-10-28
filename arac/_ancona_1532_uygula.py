# -*- coding: utf-8 -*-
# ITALYA-1028j: Ancona Cumhuriyeti 1281-1532 (papalik yerine). Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
DOS = "data/yerlesimler_avrupa.js"
K = ("Ancona Cumhuriyeti: künye ancona-cumhuriyeti (devletler.js, f 1100 yüzyıl, t 1532-01-01 yıl) — Treccani Enciclopedia on line 'Ancona': «La libertà comunale di A. cessò nel 1532, "
     "allorché con Clemente VII entrò sotto la sovranità diretta del papato» (1348 Malatesta işgali ve 1355 Albornoz'un Papalık yönetimi komün çerçevesinde aynı polity sayıldı). "
     "BEYANLI YAKLAŞIKLIK: künye ic_not'u bitişi Eylül 1532 olarak taslaklar ama gün/ay okunmadı → 1532-01-01 (yıl hassasiyeti); önceki zincir 1281'de papalik yazıyordu, Treccani bunu desteklemez. ikinci kaynak aranıyor. · ITALYA-1028j")
L = open(DOS, encoding="utf-8", newline="").read().split("\n")
idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"Ancona"')]
assert len(idx) == 1
seg = '{f:"1281-01-01",t:"1808-04-02",d:"papalik"'
assert L[idx[0]].count(seg) == 1
L[idx[0]] = L[idx[0]].replace(
    seg,
    '{f:"1281-01-01",t:"1532-01-01",d:"ancona-cumhuriyeti",kesinlik:{t:"yil"},kaynak:"%s"},{f:"1532-01-01",t:"1808-04-02",d:"papalik"' % K.replace('"', "'"))
open(DOS, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")

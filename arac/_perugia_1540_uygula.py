# -*- coding: utf-8 -*-
# ITALYA-1028j: Perugia Komunu 1281-1540 (papalik yerine). Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
DOS = "data/yerlesimler_avrupa.js"
K = ("Perugia Komünü: künye perugia-komunu (devletler.js, f 1139 onyıl, t 1540-01-01 yıl) — Treccani Enciclopedia on line 'Perugia': «La signoria dei Baglioni terminò nel 1540, "
     "quando Paolo III iniziò la costruzione della rocca Paolina»; papalık tanıması 1198 ama fiilî komün/signoria 1540'a dek sürdü (Michelotti, Visconti, Ladislao, Braccio, Baglioni aynı polity sayıldı). "
     "BEYANLI YAKLAŞIKLIK: yıl hassasiyeti (Tuz Savaşı 1540; gün okunmadı) → 1540-01-01; önceki zincir 1281'de papalik yazıyordu. ikinci kaynak aranıyor. · ITALYA-1028j")
L = open(DOS, encoding="utf-8", newline="").read().split("\n")
idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"Perugia"')]
assert len(idx) == 1
seg = '{f:"1281-01-01",t:"1809-05-17",d:"papalik"'
assert L[idx[0]].count(seg) == 1
L[idx[0]] = L[idx[0]].replace(
    seg,
    '{f:"1281-01-01",t:"1540-01-01",d:"perugia-komunu",kesinlik:{t:"yil"},kaynak:"%s"},{f:"1540-01-01",t:"1809-05-17",d:"papalik"' % K.replace('"', "'"))
open(DOS, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")

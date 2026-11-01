# -*- coding: utf-8 -*-
# ITALYA-1028i: Zurih zincirine Helvetik Cumhuriyeti (1798-04-12 / 1803-02-19). Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
DOS = "data/yerlesimler_avrupa.js"
HK = ("Helvetik Cumhuriyeti: HLS «Lugano»/«Bellinzona» zincirleriyle AYNI gün 12 Nisan 1798 (Aarau, anayasa), son 19 Şubat 1803 "
      "Arabuluculuk Senedi (künye helvetik-cumhuriyeti t). BEYAN: Fransız işgali ve eski kanton hükümetlerinin düşüşü ilan gününden önce "
      "olduğu için 1798 Mart-Nisan arası eski sahip gösterilir; ikinci kaynak aranıyor. · ITALYA-1028i")
L = open(DOS, encoding="utf-8", newline="").read().split("\n")
idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"Zürih"')]
assert len(idx) == 1
seg = '{f:"1351-05-01",t:"2000-12-31",d:"isvicre"}'
assert L[idx[0]].count(seg) == 1
L[idx[0]] = L[idx[0]].replace(
    seg,
    '{f:"1351-05-01",t:"1798-04-12",d:"isvicre"},{f:"1798-04-12",t:"1803-02-19",d:"helvetik-cumhuriyeti",kaynak:"%s"},'
    '{f:"1803-02-19",t:"2000-12-31",d:"isvicre"}' % HK.replace('"', "'"))
open(DOS, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")

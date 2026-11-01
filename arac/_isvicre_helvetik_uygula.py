# -*- coding: utf-8 -*-
# ITALYA-1028c: Isvicre sehir zincirlerine Helvetik Cumhuriyeti (1798-04-12 / 1803-02-19) ve Cenevre'nin bagimsizlik/ilhak zinciri. Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
DOS = "data/yerlesimler_avrupa.js"

HK = ("Helvetik Cumhuriyeti: HLS «Lugano»/«Bellinzona» zincirleriyle AYNI gün 12 Nisan 1798 (Aarau, anayasa), son 19 Şubat 1803 "
      "Arabuluculuk Senedi (künye helvetik-cumhuriyeti t). BEYAN: Fransız işgali ve eski kanton hükümetlerinin düşüşü (Bern 5 Mart 1798) "
      "ilan gününden önce olduğu için 1798 Mart-Nisan arası eski sahip gösterilir; ikinci kaynak aranıyor. · ITALYA-1028c")

def bol(L, ad, f, t, d):
    idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"%s"' % ad)]
    assert len(idx) == 1, ad
    seg = '{f:"%s",t:"%s",d:"%s"}' % (f, t, d)
    assert L[idx[0]].count(seg) == 1, (ad, seg)
    yeni = ('{f:"%s",t:"1798-04-12",d:"%s"},{f:"1798-04-12",t:"1803-02-19",d:"helvetik-cumhuriyeti",kaynak:"%s"},'
            '{f:"1803-02-19",t:"%s",d:"%s"}') % (f, d, HK, t, d)
    L[idx[0]] = L[idx[0]].replace(seg, yeni)

L = open(DOS, encoding="utf-8", newline="").read().split("\n")
bol(L, "Luzern", "1332-11-07", "2000-12-31", "isvicre")
bol(L, "Bern", "1353-03-06", "2000-12-31", "isvicre")
bol(L, "Basel", "1501-07-13", "2000-12-31", "isvicre")
bol(L, "Lozan", "1536-01-01", "2000-12-31", "isvicre")

# Cenevre
CK = ("Cenevre Cumhuriyeti: künye cenevre-cumhuriyeti f 1536-05-21 / t 1798-04-26 (Reform oylaması 21 Mayıs 1536; Fransa'ya ilhak antlaşması 26 Nisan 1798, HLS «Genf»). "
      "Cenevre 1798'e dek Konfederasyon'un tam üyesi değil, Bern/Zürih/Fribourg müttefikiydi; önceki zincir 1536'dan itibaren isvicre yazıyordu. ")
FK = ("Fransa'ya ilhak: 26 Nisan 1798 antlaşması (HLS «Genf»), Léman departmanı; 31 Aralık 1813'te Cumhuriyet'in restorasyonu (Wikipedia 'Léman (department)' infobox; ikincil). "
      "ikinci kaynak aranıyor. · ITALYA-1028c")
SK = ("31 Aralık 1813 restorasyonundan sonra Cenevre Konfederasyon'a katıldı (kabul 1814, kantonluk 1815). BEYANLI YAKLAŞIKLIK: restorasyon günü ile "
      "Konfederasyon'a resmî katılım günü arasındaki (1813-12-31 → 1815) kısa bağımsız dönem isvicre yazıldı; katılım günü teyit edilemedi. ikinci kaynak aranıyor. · ITALYA-1028c")
idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"Cenevre"')]
assert len(idx) == 1
seg = '{f:"1281-01-01",t:"1536-01-01",d:"almanya"},{f:"1536-01-01",t:"2000-12-31",d:"isvicre"}'
assert L[idx[0]].count(seg) == 1
L[idx[0]] = L[idx[0]].replace(
    seg,
    '{f:"1281-01-01",t:"1536-05-21",d:"almanya"},'
    '{f:"1536-05-21",t:"1798-04-26",d:"cenevre-cumhuriyeti",kaynak:"' + CK.replace('"', "'") + '"},'
    '{f:"1798-04-26",t:"1813-12-31",d:"fransa-cumhuriyet",kaynak:"' + FK.replace('"', "'") + '"},'
    '{f:"1813-12-31",t:"2000-12-31",d:"isvicre",kaynak:"' + SK.replace('"', "'") + '"}')
open(DOS, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")

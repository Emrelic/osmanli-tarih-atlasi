# -*- coding: utf-8 -*-
# ITALYA-1028h: kunyesi artik var olan komunler: Padova (padova-komunu 1164-1318) ve Bolonya (bologna-komunu 1281-1506). Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
DOS = "data/yerlesimler_avrupa.js"
L = open(DOS, encoding="utf-8", newline="").read().split("\n")

def satir(ad):
    idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"%s"' % ad)]
    assert len(idx) == 1, ad
    return idx[0]

# Padova
KP = ("BOŞLUK DOLDURMA (Emre merdiveni): künye padova-komunu (devletler.js, f 1138-01-01, t 1318-01-01) — Treccani Enciclopedia on line 'Padova': «dal 1138 ... i consoli, rappresentanti del libero Comune; nel 1164 P. fu la prima città dell'Italia settentrionale a cacciare il vicario imperiale». "
      "t: I. Jacopo da Carrara Temmuz 1318'de (25 Temmuz 1318'den kısa süre sonra) aristokrasice ömür boyu koruyucu/vali seçildi (Wikipedia 'Jacopo I da Carrara', ikincil) — gün kesin değil, 25 Temmuz 1318 aralığın ilk günü alındı. "
      "BEYANLI YAKLAŞIKLIK: 1237-1256 Ezzelino da Romano senyörlüğü ve 1256 sonrası Guelf yönetimi ayrı gösterilmedi (komün çerçevesi); ikinci kaynak aranıyor (Treccani DBI 'Carrara, Iacopo da'). · ITALYA-1028h")
i = satir("Padova")
seg1 = '{f:"1164-01-01",t:"1281-01-01",d:"__BOSLUK__"'
assert L[i].count(seg1) == 1
# ilk BOSLUK dilimi (1164-1281) ve ikincisi (1281-1345) tamamen degistirilir: sinirlar dilim basindan itibaren
a = L[i].index(seg1)
b = L[i].index('{f:"1345-01-01",t:"1388-11-21",d:"carrara"')
yeni = ('{f:"1164-01-01",t:"1318-07-25",d:"padova-komunu",kesinlik:{f:"yil",t:"ay"},kaynak:"%s"},'
        '{f:"1318-07-25",t:"1345-01-01",d:"__BOSLUK__",kaynak:"BEYAN (AVRUPA-SINIR-0077 · KUTU-HATALI-1015 · ITALYA-1028h): Jacopo I da Carrara 1318 sonrası fiilî senyör (1319 Kasım\'da hukuken Cangrande\'nin imparatorluk vekillerine devretti), Marsilio 1328-1337 Cangrande della Scala vekili (Wikipedia \'Lords of Padua\', ikincil) — carrara künyesi 1345\'te başlar, 1318-1345 Padova için sahip künyesi yok; komşuya İTİLMEDİ (§3.5.1)"},'
        % KP.replace('"', "'"))
L[i] = L[i][:a] + yeni + L[i][b:]

# Bolonya
KB = ("BOŞLUK/SAHİP DÜZELTMESİ (ITALYA-1028h): künye bologna-komunu (devletler.js, f 1114-01-01, t 1506-11-11) — Treccani Enciclopedia on line 'Bologna': Guastalla konsili 1106 ve komün 1114; "
      "Bentivoglio senyörlüğü (1401-1506) künyede aynı polity sayıldı. t: Papa II. Julius 11 Kasım 1506'da Bologna'ya girip Bentivoglio'yu kaldırdı (Wikipedia 'Julius II', 'Giovanni II Bentivoglio'; ikincil). "
      "BEYANLI YAKLAŞIKLIK: 1306 Papalık ve 1327 sonrası Visconti, Pepoli, Oleggio (1350-60) ve 1438 sonrası Visconti/Sforza/Bentivoglio geçişleri ayrı gösterilmedi (künye ic_not: 'komün/signoria geçişleri çok'); ikinci kaynak aranıyor. · ITALYA-1028h")
j = satir("Bolonya")
seg = '{f:"1281-01-01",t:"1796-06-23",d:"papalik"'
assert L[j].count(seg) == 1
L[j] = L[j].replace(seg, '{f:"1281-01-01",t:"1506-11-11",d:"bologna-komunu",kesinlik:{t:"ay"},kaynak:"%s"},{f:"1506-11-11",t:"1796-06-23",d:"papalik"' % KB.replace('"', "'"))
open(DOS, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")

# -*- coding: utf-8 -*-
# NAPOLYON-ITALYA-1028 ek tur: Napoli (Partenopa 1799) ve Ancona (Marche 1808). Tek seferlik.
import re, sys
sys.stdout.reconfigure(encoding="utf-8")

def degistir(dosya, onek, eski, yeni):
    L = open(dosya, encoding="utf-8", newline="").read().split("\n")
    n = [i for i, l in enumerate(L) if l.startswith(onek)]
    assert len(n) == 1, (onek, n)
    assert L[n[0]].count(eski) == 1, (onek, L[n[0]].count(eski))
    L[n[0]] = L[n[0]].replace(eski, yeni)
    open(dosya, "w", encoding="utf-8", newline="").write("\n".join(L))

KP = ("Partenopa: künye partenopea-cumhuriyeti (devletler.js) f 1799-01-23 / t 1799-06-13; Fransız ordusu Napoli'ye 23 Ocak 1799'da girdi, "
      "Kardinal Ruffo 13 Haziran 1799'da geri aldı. BEYANLI YAKLAŞIKLIK: yalnız Napoli şehri bu döneme yazıldı; taşra Bourbon yanlısı kaldı, "
      "ikinci kaynak aranıyor. · NAPOLYON-ITALYA-1028")
degistir("data/yerlesimler.js", '{ ad:"Napoli", tur:"liman"',
         '{f:"1281-01-01",t:"1861-02-13",d:"napoli"}',
         '{f:"1281-01-01",t:"1799-01-23",d:"napoli"},{f:"1799-01-23",t:"1799-06-13",d:"partenopea-cumhuriyeti",kesinlik:"gun",kaynak:%s},'
         '{f:"1799-06-13",t:"1861-02-13",d:"napoli"}' % repr(KP).replace("'", '"') if False else
         '{f:"1281-01-01",t:"1799-01-23",d:"napoli"},{f:"1799-01-23",t:"1799-06-13",d:"partenopea-cumhuriyeti",kaynak:"' + KP.replace('"', "'") + '"},{f:"1799-06-13",t:"1861-02-13",d:"napoli"}')

KA = ("Marche İtalya Krallığı'na 2 Nisan 1808 kararnamesiyle katıldı (Devlet Arşivleri envanteri inventari-san.cultura.gov.it/inventari/869/pdf; "
      "20 Nisan 1808: Metauro departmanı, merkezi Ancona); İtalya Krallığı 16 Nisan 1814 mütarekesiyle çöktü (Britannica 'Kingdom of Italy'). "
      "BEYANLI YAKLAŞIKLIK: 1814-1815 Murat işgali ve kesin Papalık iadesi (Viyana Kongresi 1815) gösterilmedi; Papalık 1814-04-16'dan itibaren de jure sahip yazıldı. "
      "ikinci kaynak aranıyor. · NAPOLYON-ITALYA-1028")
degistir("data/yerlesimler_avrupa.js", '{ ad:"Ancona", tur:"liman"',
         '{f:"1281-01-01",t:"1860-09-29",d:"papalik"',
         '{f:"1281-01-01",t:"1808-04-02",d:"papalik"},{f:"1808-04-02",t:"1814-04-16",d:"italya-napolyon",kaynak:"' + KA.replace('"', "'") + '"},{f:"1814-04-16",t:"1860-09-29",d:"papalik"')
print("tamam")

# -*- coding: utf-8 -*-
# ITALYA-1028p: Cenova antik-erken ortacag oneki + ceneviz 1099-1281. Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
ORTAK = ("ZİNCİR-İTALYA-ANTİK (ITALYA-1028p, künye sınırları esas): roma-imp (-0026-01-16→0395-01-17), bati-roma (→476-08-28), odoakar (476-08-23→493-03-05), dogu-got (493-03-05→553), "
         "langobard (568→774), karolenj-italya (774→962-02-02), almanya (962-02-02→) künyelerinin kendi sınırları ve kaynakları. "
         "BEYANLI YAKLAŞIKLIK: Cenova'nın Lombard fethi (Rothari, 643 civarı; Bizans Liguria'sı 553-643) ve Obertenghi markiziyle KRCİ nominal çerçevesi (962-1099) ayrı gösterilmedi; "
         "Roma Cumhuriyeti dönemi yazılmadı.")
CEN = ("Cenova Komünü: Compagna Communis'in kuruluşu 1099 (Treccani Enciclopedia on line 'Genova'; atlas olay maddesi 1099) — künye cenova f 1005-01-01'dir ('bulunamadı' kaynaklı), "
       "zincir kaynaklı 1099 yıl hassasiyetiyle başlatıldı (BEYAN: 1005-1099 arasında komün öncesi Cenova'nın sahibi KRCİ/Obertenghi markizi olarak almanya yazıldı); ikinci kaynak aranıyor. · ITALYA-1028p")
S = [("-0026-01-16", "0395-01-17", "roma-imp"), ("0395-01-17", "0476-08-23", "bati-roma"), ("0476-08-23", "0493-03-05", "odoakar"),
     ("0493-03-05", "0553-01-01", "dogu-got"), ("0553-01-01", "0568-01-01", "bizans"), ("0568-01-01", "0774-01-01", "langobard"),
     ("0774-01-01", "0962-02-02", "karolenj-italya"), ("0962-02-02", "1099-01-01", "almanya")]
dizi = ",".join('{f:"%s",t:"%s",d:"%s"%s}' % (f, t, d, (',kaynak:"%s"' % ORTAK.replace('"', "'")) if i == 0 else "") for i, (f, t, d) in enumerate(S))
dizi += ',{f:"1099-01-01",t:"1281-01-01",d:"ceneviz",kesinlik:{f:"yil"},kaynak:"%s"},' % CEN.replace('"', "'")
dosya = "data/yerlesimler.js"
L = open(dosya, encoding="utf-8", newline="").read().split("\n")
idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"Cenova"')]
assert len(idx) == 1
l = L[idx[0]]
k = l.index("s:[") + 3
assert l[k:k + 15] == '{f:"1281-01-01"', l[k:k + 20]
L[idx[0]] = l[:k] + dizi + l[k:]
open(dosya, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")

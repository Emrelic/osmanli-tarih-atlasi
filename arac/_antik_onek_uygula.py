# -*- coding: utf-8 -*-
# ITALYA-1028l: Kuzey/Orta Italya merkezlerinin zincirine antik-erken ortacag oneki (roma-imp ... almanya) ve Roma'nin tam zinciri. Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")

ORTAK = ("ZİNCİR-İTALYA-ANTİK (ITALYA-1028l, künye sınırları esas): roma-imp (-0026-01-16→0395-01-17), bati-roma (395-01-17→476-08-28), odoakar (476-08-23→493-03-05), "
         "dogu-got (493-03-05→553), langobard (568→774), karolenj-italya (774→962-02-02), almanya (962-02-02→) künyelerinin kendi sınırları ve kaynakları (Britannica, Treccani, Procopius). "
         "BEYANLI YAKLAŞIKLIK: şehre özgü el değiştirme günleri ayrı gösterilmedi — 535-553 Gotik Savaş'ta Bizans-Got geçişleri (Milano 539 yıkımı, Verona/Brescia 562'ye dek Bizans direnişi), "
         "553-568 Bizans dilimi, 569 Alboin'in girişi, Karolenj dilimi 774'te yıl hassasiyetiyle; Roma Cumhuriyeti dönemi (şehrin Roma'ya katılışı MÖ 3.-2. yy) kaynak okunmadığı için yazılmadı.")

def onek(son_t):
    """-0026-01-16 ... 962-02-02 + almanya 962-02-02 -> son_t"""
    s = [
        ("-0026-01-16", "0395-01-17", "roma-imp"),
        ("0395-01-17", "0476-08-23", "bati-roma"),
        ("0476-08-23", "0493-03-05", "odoakar"),
        ("0493-03-05", "0553-01-01", "dogu-got"),
        ("0553-01-01", "0568-01-01", "bizans"),
        ("0568-01-01", "0774-01-01", "langobard"),
        ("0774-01-01", "0962-02-02", "karolenj-italya"),
        ("0962-02-02", son_t, "almanya"),
    ]
    out = []
    for i, (f, t, d) in enumerate(s):
        if i == 0:
            out.append('{f:"%s",t:"%s",d:"%s",kaynak:"%s"}' % (f, t, d, ORTAK.replace('"', "'")))
        else:
            out.append('{f:"%s",t:"%s",d:"%s"}' % (f, t, d))
    return ",".join(out) + ","

def ekle(dosya, ad, onekstr):
    L = open(dosya, encoding="utf-8", newline="").read().split("\n")
    idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"%s"' % ad)]
    assert len(idx) == 1, ad
    l = L[idx[0]]
    k = l.index("s:[") + 3
    assert l[k:k + 4] == '{f:"', (ad, l[k:k + 20])
    L[idx[0]] = l[:k] + onekstr + l[k:]
    open(dosya, "w", encoding="utf-8", newline="").write("\n".join(L))

def ilk_f(dosya, ad):
    for l in open(dosya, encoding="utf-8").read().split("\n"):
        if l.startswith('{ ad:"%s"' % ad):
            k = l.index("s:[") + 3
            return l[k + 4:k + 14]

# Po vadisi / kuzey merkezleri (ilk dilim >= 1000): onek 962-02-02'de bitiyor, ilk dilim 962'den onceye uzamaz
for dosya, ad in [("data/yerlesimler.js", "Milano"), ("data/yerlesimler.js", "Torino"),
                  ("data/yerlesimler_avrupa.js", "Verona"), ("data/yerlesimler_avrupa.js", "Brescia"),
                  ("data/yerlesimler_avrupa.js", "Bergamo"), ("data/yerlesimler_avrupa.js", "Parma"),
                  ("data/yerlesimler_avrupa.js", "Piacenza"), ("data/yerlesimler_avrupa.js", "Modena"),
                  ("data/yerlesimler_avrupa.js", "Padova")]:
    f0 = ilk_f(dosya, ad)
    assert f0 >= "0962-02-02", (ad, f0)
    ekle(dosya, ad, onek(f0))
    print(ad, "ilk dilim", f0)
print("tamam")

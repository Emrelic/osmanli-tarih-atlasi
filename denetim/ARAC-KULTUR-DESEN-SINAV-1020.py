# -*- coding: utf-8 -*-
"""MO-MOTOR-1020 — renkler.py KULTUR_DESEN doğrulayıcısı İKİ YÖNLÜ sınav.
Çıkış 0 = iyi örnek temiz VE altı bozuk örneğin altısı da yakalandı. (Yalnız temiz gören sınav sınav değildir.)"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import io, contextlib
with contextlib.redirect_stdout(io.StringIO()):          # renkler.py yüklenirken basar
    import renkler as R

B = {"kultur-a": ("Kültür A", "#8a6d3b"), "kultur-b": ("Kültür B", "#3b6d8a")}
iyi = {"kultur-a": ("serit", 0.45), "kultur-b": ("nokta", 0.30)}
bozuk = {
    "BOYALAR'da yok":      {"kultur-z": ("serit", 0.45)},
    "bilinmeyen desen":    {"kultur-a": ("kareli", 0.45)},
    "opaklik cok dusuk":   {"kultur-a": ("serit", 0.05)},
    "opaklik cok yuksek":  {"kultur-a": ("serit", 0.90)},
    "cift degil":          {"kultur-a": "serit"},
    "opaklik sayi degil":  {"kultur-a": ("serit", "yarim")},
}
hata = 0
h = R.kultur_desen_dogrula(iyi, B)
print("iyi örnek:", "TEMİZ" if not h else "✗ YANLIŞ İHLAL %r" % h)
hata += bool(h)
for ad, d in bozuk.items():
    h = R.kultur_desen_dogrula(d, B)
    print("bozuk (%s):" % ad, "yakalandı" if h else "✗ KAÇTI")
    hata += (not h)
print("modül sözlüğü:", "TEMİZ" if not R.kultur_desen_dogrula() else "✗ TUTARSIZ", "· KULTUR_DESEN kimlik sayısı", len(R.KULTUR_DESEN))
sys.exit(1 if hata else 0)

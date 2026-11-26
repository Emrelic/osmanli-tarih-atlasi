# -*- coding: utf-8 -*-
"""NIHAVEND-BAGLANTI — DÜZ METİNDE ANAHTARLARI BİRLEŞİK PENCERELERLE BASAR (SALT OKUR)

Niçin: aynı paragrafta birden çok anahtar geçince METINARA aleti aynı bağlamı
tekrar tekrar basıyor (Kütükoğlu 1962'de 100+ eşleşme). Bu alet üst üste binen
pencereleri birleştirir, her pencereye hangi anahtarların düştüğünü yazar ve
pencerenin ÖNCESİNDEKİ son "sayfa numarası gibi duran" satırı (djvu.txt'de
yalnız rakamdan oluşan satır) gösterir. Sayfa tahmini ±1 sayfadır — OCR.

Kullanım:
  py denetim/ARAC-NHB-PENCERE-0913.py <txt yolu> <yarıçap> <anahtar> [...]
"""
import sys, io, re, bisect

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
yol, r = sys.argv[1], int(sys.argv[2])
keys = sys.argv[3:]
raw = open(yol, "rb").read().decode("utf-8", "replace")

# sayfa numarası adayları: tek başına satırda 1-3 haneli sayı
sayfa = []
for m in re.finditer(r"(?m)^[ \t]*(\d{1,3})[ \t]*$", raw):
    sayfa.append((m.start(), m.group(1)))
spos = [p for p, _ in sayfa]

hits = sorted((m.start(), k) for k in keys for m in re.finditer(re.escape(k), raw))
wins = []
for p, k in hits:
    a, b = max(0, p - r), p + r
    if wins and a <= wins[-1][1]:
        wins[-1][1] = max(wins[-1][1], b)
        wins[-1][2].add(k)
    else:
        wins.append([a, b, {k}])
print("# %s · %d kar · %d eşleşme · %d pencere" % (yol, len(raw), len(hits), len(wins)))
for a, b, ks in wins:
    i = bisect.bisect_right(spos, a) - 1
    s = sayfa[i][1] if i >= 0 else "?"
    print("\n== c%d · önceki sayfa no ≈ %s · %s" % (a, s, sorted(ks)))
    print(re.sub(r"\s+", " ", raw[a:b]))

# -*- coding: utf-8 -*-
"""SINIR-STATU-0075 — TDV maddesini HAM HTML'den ayiklar: etiketleri atar, anahtar sozcuk geçen cümleleri (öncesi/sonrası ile) basar.
Kullanim: py denetim/ARAC-SINIR-STATU-0075-TDV.py <html-yolu> <anahtar1> <anahtar2> ...
CLAUDE.md §4 TDV tuzaklari: gövde boyutunu ve baslik satirini de basar (boilerplate/yanlis madde tuzagi)."""
import io, re, sys, html

sys.stdout.reconfigure(encoding="utf-8")
yol, anahtarlar = sys.argv[1], sys.argv[2:]
ham = io.open(yol, encoding="utf-8", errors="replace").read()
ham = re.sub(r"(?is)<(script|style|noscript)[^>]*>.*?</\1>", " ", ham)
m = re.search(r"(?is)<title>(.*?)</title>", ham)
print("TITLE:", html.unescape(m.group(1)).strip() if m else "?")
metin = html.unescape(re.sub(r"(?s)<[^>]+>", " ", ham))
metin = re.sub(r"\s+", " ", metin)
print("METIN UZUNLUK:", len(metin))
cumleler = re.split(r"(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜ\"“(])", metin)
print("CUMLE:", len(cumleler))
gorulen = set()
for i, c in enumerate(cumleler):
    if any(a.lower() in c.lower() for a in anahtarlar):
        for j in (i - 1, i, i + 1):
            if 0 <= j < len(cumleler) and j not in gorulen:
                gorulen.add(j)
                print("[%d] %s" % (j, cumleler[j][:700]))
        print("---")

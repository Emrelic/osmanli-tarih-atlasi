# -*- coding: utf-8 -*-
"""FERHATPASA-MATRIS — ÇEVRİMİÇİ DÜZ METİN / HTML'DE ANAHTAR ARAMA (SALT OKUR)

Metin BELLEKTE okunur, diske YAZILMAZ. HTML etiketleri atılır. Her eşleşme
±N karakter bağlamla ve metindeki karakter konumuyla basılır (konum = sayfa
numarası yerine atıf; archive.org djvu.txt'de sayfa başlıkları metnin içindedir).

Kullanım:  py denetim/ARAC-FERHATPASA-MATRIS-METINARA-0913.py <url> <bağlam> <anahtar> [...]
"""
import sys, io, re, html, urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
url, pay, anah = sys.argv[1], int(sys.argv[2]), sys.argv[3:]
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
r = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=180)
b = r.read()
t = b.decode("utf-8", "replace")
if "<html" in t[:2000].lower():
    t = re.sub(r"<script.*?</script>|<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
t = re.sub(r"\s+", " ", t)
print("# %s | son adres %s | %d karakter" % (url, r.geturl(), len(t)))
son = -10 ** 9
for m in sorted((m for a in anah for m in re.finditer(re.escape(a), t)), key=lambda m: m.start()):
    if m.start() < son + pay:
        continue
    son = m.start()
    print("[@%d] %s: …%s…" % (m.start(), m.group(0), t[max(0, m.start() - pay):m.end() + pay]))

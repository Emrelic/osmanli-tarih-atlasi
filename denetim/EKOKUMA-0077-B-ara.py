# -*- coding: utf-8 -*-
"""EKOKUMA-0077-B — TDV aramasında sonuç başlıklarını SLUG'larıyla basar.
Kullanım: py denetim/EKOKUMA-0077-B-ara.py "<kelime>" ["<kelime>" ...]
"""
import html
import re
import sys
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
BAS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0 Safari/537.36"}
ATLA = {"arama", "duyurular", "hakkinda", "iletisim", "kisaltmalar", "yazarlar"}
for k in sys.argv[1:]:
    url = "https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(k)
    h = urllib.request.urlopen(urllib.request.Request(url, headers=BAS), timeout=60).read().decode("utf-8", "replace")
    print("===", k)
    gor = set()
    for m in re.finditer(r'href="(?:https://islamansiklopedisi\.org\.tr)?/([a-z0-9\-]+)"[^>]*>(.*?)</a>', h, re.S):
        slug, ad = m.group(1), re.sub(r"<[^>]+>", " ", m.group(2))
        ad = re.sub(r"\s+", " ", html.unescape(ad)).strip()
        if slug in ATLA or slug in gor or not ad:
            continue
        gor.add(slug)
        print("  ", slug, "|", ad[:70])

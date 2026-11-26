# -*- coding: utf-8 -*-
"""IRAN-KAFKAS-0082 — TDV arama (ajax: sp=m başlık · sp=t içerik). /arama/ sayfası sonucu JS ile yükler,
düz HTML'de link YOKTUR (boş sonuç ≠ yok). Kullanım: py ... kelime1 kelime2 ..."""
import sys, re, io, urllib.request, urllib.parse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
for k in sys.argv[1:]:
    for sp in ("m", "t"):
        url = f"https://islamansiklopedisi.org.tr/ajax_search_auto.php?sp={sp}&=ac&q=" + urllib.parse.quote(k)
        rq = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0",
             "Referer": "https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(k)})
        try:
            h = urllib.request.urlopen(rq, timeout=40).read().decode("utf-8", "replace")
        except Exception as e:
            print(k, sp, "HATA", e); continue
        l = [x for x in re.findall(r'href="/([a-z0-9\-]+)"', h)]
        print(f"{k} [{sp}] {len(l)}: {' '.join(dict.fromkeys(l))}")

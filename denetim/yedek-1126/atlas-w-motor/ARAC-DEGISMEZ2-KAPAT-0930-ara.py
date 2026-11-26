# -*- coding: utf-8 -*-
"""TDV arama ucu (M-5694 BULGU 2): başlık + slug listesi.  py <bu> kelime1 kelime2 ..."""
import sys, io, json, urllib.request, urllib.parse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
for q in sys.argv[1:]:
    url = "https://islamansiklopedisi.org.tr/ajax_search_auto.php?sp=aa&=ac&q=" + urllib.parse.quote(q)
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0",
          "X-Requested-With": "XMLHttpRequest", "Referer": "https://islamansiklopedisi.org.tr/"})
    try:
        t = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")
    except Exception as e:
        print(q, "→ ARIZA", e); continue
    import re, html as H
    bulunan = re.findall(r'<a href="/([^"]+)"><li><span class="sr-title">([^<]+)<', t)
    print(q, "→", [(s, H.unescape(b).strip()) for s, b in bulunan] or "başlıkta sonuç yok")

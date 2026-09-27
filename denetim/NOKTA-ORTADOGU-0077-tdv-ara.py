# -*- coding: utf-8 -*-
"""TDV arama sayfasından madde bağlantılarını çıkarır (salt okur).
Kullanım: py denetim/NOKTA-ORTADOGU-0077-tdv-ara.py kelime1 kelime2 ..."""
import sys
import re
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
for k in sys.argv[1:]:
    url = "https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(k)
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        t = urllib.request.urlopen(req, timeout=40).read().decode("utf-8", "replace")
    except Exception as e:
        print("## %s: HATA %s" % (k, e))
        continue
    linkler = re.findall(r'href="(?:https://islamansiklopedisi\.org\.tr)?/([a-z0-9\-]+)"', t)
    gor = []
    for s in linkler:
        if s not in gor and s not in ("arama", "hakkinda", "iletisim", "giris"):
            gor.append(s)
    print("## %s: %s" % (k, " ".join(gor[:25])))

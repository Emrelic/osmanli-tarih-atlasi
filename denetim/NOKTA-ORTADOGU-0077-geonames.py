# -*- coding: utf-8 -*-
"""GeoNames arama sayfasından (ad, ülke, enlem, boylam, tür) satırlarını çeker (salt okur).
Kullanım: py denetim/NOKTA-ORTADOGU-0077-geonames.py "<ad>" [ülke-kodu]"""
import sys
import re
import html
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
q = sys.argv[1]
ulke = sys.argv[2] if len(sys.argv) > 2 else ""
url = "https://www.geonames.org/search.html?q=%s&country=%s" % (urllib.parse.quote(q), ulke)
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
t = urllib.request.urlopen(req, timeout=40).read().decode("utf-8", "replace")
satirlar = re.findall(r"<tr[^>]*>(.*?)</tr>", t, re.S)
for s in satirlar:
    hucre = [html.unescape(re.sub(r"<[^>]+>", " ", h)).strip() for h in re.findall(r"<td[^>]*>(.*?)</td>", s, re.S)]
    gid = re.search(r"geonames\.org/(\d+)/", s)
    if len(hucre) >= 5 and ("N" in hucre[-2] or "S" in hucre[-2] or re.search(r"\d", hucre[-1])):
        print(gid.group(1) if gid else "-", " | ".join(re.sub(r"\s+", " ", h)[:70] for h in hucre[1:]))

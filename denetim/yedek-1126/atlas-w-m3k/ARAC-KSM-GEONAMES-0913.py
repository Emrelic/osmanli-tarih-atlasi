# -*- coding: utf-8 -*-
"""FERHATPASA-KOSE — GeoNames tam metin araması (geonames.org/search.html), İran süzgeçli (SALT OKUR).

Kullanım:  py denetim/ARAC-KSM-GEONAMES-0913.py <sorgu> [<sorgu> ...]
Her sorgu için ilk 12 satır: ad · ülke/il · özellik sınıfı · enlem · boylam (ondalık).
"""
import sys, io, re, html, urllib.request, urllib.parse, time

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"


def dms(s):
    m = re.match(r"([NSEW])\s*(\d+)\D+(\d+)\D+(\d+)", s.strip())
    if not m:
        return None
    v = int(m.group(2)) + int(m.group(3)) / 60 + int(m.group(4)) / 3600
    return round(-v if m.group(1) in "SW" else v, 5)


for q in sys.argv[1:]:
    url = "https://www.geonames.org/search.html?" + urllib.parse.urlencode({"q": q, "country": "IR"})
    try:
        t = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60).read().decode("utf-8", "replace")
    except Exception as e:
        print("##", q, "HATA", e)
        continue
    rows = re.findall(r"<tr[^>]*>(.*?)</tr>", t, flags=re.S)
    print("##", q)
    n = 0
    for r in rows:
        tds = re.findall(r"<td[^>]*>(.*?)</td>", r, flags=re.S)
        if len(tds) < 6:
            continue
        g = re.search(r'class="latitude">([-\d.]+)</span><span class="longitude">([-\d.]+)<', r)
        if not g:
            continue
        ad = re.search(r'<a href="(/\d+/[^"]+)">([^<]+)</a>', tds[1])
        tx = [re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", x))).strip() for x in tds]
        print("   %s | id %s | %s | %s | %s %s" % (html.unescape(ad.group(2)) if ad else tx[1][:50], ad.group(1).split("/")[1] if ad else "-",
                                                tx[2][:45], tx[3][:45], g.group(1), g.group(2)))
        n += 1
        if n >= 15:
            break
    if n == 0:
        print("   (sonuç yok)")
    time.sleep(1)

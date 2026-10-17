# -*- coding: utf-8 -*-
"""Bölüm URL desenini dene: <slug>/<jfurl>."""
import io, os, re, sys, urllib.request
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"
u = "https://islamansiklopedisi.org.tr/musul--irak/3-musul-meselesi"
ist = urllib.request.Request(u, headers={"User-Agent": UA, "Accept-Language": "tr-TR,tr;q=0.9"})
with urllib.request.urlopen(ist, timeout=30) as c:
    html = c.read().decode("utf-8", "replace")
parca = re.findall(r"<div[^>]+class=\"[^\"]*article-part[^\"]*\"[^>]*>([\s\S]*?)</div>", html)
print("http ok · parça:", len(parca), "· boyut:", len(html))
if parca:
    metin = re.sub(r"<[^>]+>", " ", parca[0])
    print(re.sub(r"\s+", " ", metin)[:300])

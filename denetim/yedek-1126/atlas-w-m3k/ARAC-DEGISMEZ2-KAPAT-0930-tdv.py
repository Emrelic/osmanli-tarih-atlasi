# -*- coding: utf-8 -*-
"""TDV maddesinde bir desenin geçtiği cümleleri basar.  py <bu> <slug> <regex> [genislik]"""
import sys, io, re, html, urllib.request
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
slug, desen = sys.argv[1], sys.argv[2]
w = int(sys.argv[3]) if len(sys.argv) > 3 else 170
req = urllib.request.Request("https://islamansiklopedisi.org.tr/" + slug,
                             headers={"User-Agent": "Mozilla/5.0"})
t = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")
t = html.unescape(re.sub(r"<[^>]+>", " ", t))
t = re.sub(r"\s+", " ", t)
print(f"[{slug}] govde {len(t)} kar")
for m in re.finditer(r".{0,%d}(?:%s).{0,%d}" % (w, desen, w), t):
    print(">>", m.group(0))

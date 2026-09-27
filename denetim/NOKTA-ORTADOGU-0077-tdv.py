# -*- coding: utf-8 -*-
"""NOKTA-ORTADOGU-0077 — TDV maddelerinde desen geçen cümleler (salt okur, önbellekli).
Kullanım: py denetim/NOKTA-ORTADOGU-0077-tdv.py slug1,slug2 "<regex>" [azami]
Yönlendirme (302 → ölü slug, CLAUDE.md §4 tuzak ①) son URL ile bildirilir."""
import sys
import re
import html
import os
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ONB = os.path.join(os.path.dirname(os.path.abspath(__file__)), "NOKTA-ORTADOGU-0077-tdv-onbellek")
os.makedirs(ONB, exist_ok=True)
SLUGLAR = sys.argv[1].split(",")
DESEN = re.compile(sys.argv[2] if len(sys.argv) > 2 else r"19(0|1|2)\d", re.I)
AZAMI = int(sys.argv[3]) if len(sys.argv) > 3 else 25
for s in SLUGLAR:
    yol = os.path.join(ONB, s.replace("/", "_") + ".html")
    if not os.path.exists(yol):
        req = urllib.request.Request("https://islamansiklopedisi.org.tr/" + s, headers={"User-Agent": "Mozilla/5.0"})
        try:
            r = urllib.request.urlopen(req, timeout=40)
            son = r.geturl()
            if not son.rstrip("/").endswith("/" + s):
                print("## %s: YONLENDIRME -> %s (olu slug)" % (s, son))
                continue
            open(yol, "wb").write(r.read())
        except Exception as e:
            print("## %s: HATA %s" % (s, e))
            continue
    t = open(yol, encoding="utf-8", errors="replace").read()
    t = html.unescape(re.sub(r"<[^>]+>", " ", t))
    t = re.sub(r"\s+", " ", t)
    i = t.find("Kopyalama metni")
    govde = t[i:] if i > 0 else t
    cumleler = re.split(r"(?<=[.;])\s", govde)
    isabet = [c for c in cumleler if DESEN.search(c)]
    print("## %s: govde %d kr · %d cumle" % (s, len(govde), len(isabet)))
    for c in isabet[:AZAMI]:
        print("   ·", c[:500])

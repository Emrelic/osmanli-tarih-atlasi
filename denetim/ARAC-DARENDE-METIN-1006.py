# -*- coding: utf-8 -*-
"""DARENDE-SILIFKE-1006 — TDV html -> düz metin (SALT OKUR kaynak; yalnız <slug>.txt yazar
bu klasörün -tdv/ alt dizinine). Kullanım: py denetim/ARAC-MALATYA-METIN-1006.py <slug> ..."""
import os, re, sys, html
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), "DARENDE-SILIFKE-1006-tdv")
for s in sys.argv[1:]:
    h = open(os.path.join(D, s + ".html"), encoding="utf-8").read()
    h = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", h)
    h = re.sub(r"(?i)<br\s*/?>|</p>|</div>|</h\d>", "\n", h)
    t = html.unescape(re.sub(r"<[^>]+>", " ", h))
    t = "\n".join(re.sub(r"[ \t]+", " ", l).strip() for l in t.splitlines())
    t = re.sub(r"\n{2,}", "\n", t)
    open(os.path.join(D, s + ".txt"), "w", encoding="utf-8").write(
        f"https://islamansiklopedisi.org.tr/{s}\n" + t)
    print(s, len(t))

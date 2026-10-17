# -*- coding: utf-8 -*-
"""Flip maddelerinden birinin ham HTML'ini kaydet (yapı incelemesi)."""
import io, os, sys, urllib.request
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
hedef = os.path.join(KOK, "denetim", "GLM1-EPOK-SAHIP-1009-tdv-onbellek", "_ham-musul-irak.html")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36"
u = "https://islamansiklopedisi.org.tr/musul--irak/"
ist = urllib.request.Request(u, headers={"User-Agent": UA, "Accept-Language": "tr-TR,tr;q=0.9"})
with urllib.request.urlopen(ist, timeout=30) as c:
    html = c.read().decode("utf-8", "replace")
io.open(hedef, "w", encoding="utf-8").write(html)
print("kaydedildi", len(html))

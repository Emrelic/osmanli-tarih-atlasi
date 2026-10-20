"""index.html'e bölge olay dosyasını bağlar (pilot satırının hemen altına). py denetim/arkeoloji_baglama_1020.py <bolge>"""
import os, sys
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
p = os.path.join(KOK, "index.html")
s = open(p, encoding="utf-8").read()
for b in sys.argv[1:]:
    satir = '<script src="data/olaylar_arkeoloji_%s.js"></script>\n' % b
    if satir in s:
        continue
    cpa = '<script src="data/olaylar_arkeoloji_pilot.js"></script>\n'
    assert cpa in s
    s = s.replace(cpa, cpa + satir, 1)
open(p, "w", encoding="utf-8", newline="").write(s)

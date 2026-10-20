"""index.html'e bölge olay dosyasını bağlar (pilot satırının hemen altına; ?v= damgasından bağımsız). py denetim/arkeoloji_baglama_1020.py <bolge> [...]"""
import os, re, sys
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
p = os.path.join(KOK, "index.html")
s = open(p, encoding="utf-8", newline="").read()
for b in sys.argv[1:]:
    if re.search(r'data/olaylar_arkeoloji_%s\.js' % re.escape(b), s):
        continue
    m = re.search(r'<script src="data/olaylar_arkeoloji_pilot\.js[^"]*"></script>(\r?\n)', s)
    assert m, "pilot satırı yok"
    s = s[:m.end()] + '<script src="data/olaylar_arkeoloji_%s.js"></script>%s' % (b, m.group(1)) + s[m.end():]
open(p, "w", encoding="utf-8", newline="").write(s)

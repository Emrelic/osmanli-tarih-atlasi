"""index.html / arac/girdi_listesi.py bağlama (idempotent; ?v= damgasından bağımsız).
    py denetim/arkeoloji_baglama_1020.py <olay-bolge> [...]                 → data/olaylar_arkeoloji_<bolge>.js satırı (pilot satırının altına)
    py denetim/arkeoloji_baglama_1020.py --yerlesim <dosya.js> [...]        → data/<dosya>.js: index.html (yerlesimler_mo_sumer satırının altına) + girdi_listesi.py GIRDI_DOSYALARI
"""
import os, re, sys
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
p = os.path.join(KOK, "index.html")
s = open(p, encoding="utf-8", newline="").read()
args = sys.argv[1:]
if args and args[0] == "--yerlesim":
    gp = os.path.join(KOK, "arac", "girdi_listesi.py")
    g = open(gp, encoding="utf-8", newline="").read()
    for fn in args[1:]:
        fn = os.path.basename(fn)
        if not re.search(r'data/%s' % re.escape(fn), s):
            m = re.search(r'<script src="data/yerlesimler_mo_sumer\.js[^"]*"></script>(\r?\n)', s)
            assert m, "yerlesimler_mo_sumer satırı yok"
            s = s[:m.end()] + '<script src="data/%s"></script>%s' % (fn, m.group(1)) + s[m.end():]
        if '"%s"' % fn not in g:
            m = re.search(r'    "yerlesimler_mo_sumer\.js",(\r?\n)', g)
            assert m, "girdi_listesi: mo_sumer satırı yok"
            g = g[:m.end()] + '    "%s",%s' % (fn, m.group(1)) + g[m.end():]
    open(gp, "w", encoding="utf-8", newline="").write(g)
else:
    for b in args:
        if re.search(r'data/olaylar_arkeoloji_%s\.js' % re.escape(b), s):
            continue
        m = re.search(r'<script src="data/olaylar_arkeoloji_pilot\.js[^"]*"></script>(\r?\n)', s)
        assert m, "pilot satırı yok"
        s = s[:m.end()] + '<script src="data/olaylar_arkeoloji_%s.js"></script>%s' % (b, m.group(1)) + s[m.end():]
open(p, "w", encoding="utf-8", newline="").write(s)

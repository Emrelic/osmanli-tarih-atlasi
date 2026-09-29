# KRONO-ITALYA-0929 — TDV önbelleğinde cümle tarayıcı.
# Kullanım: py -X utf8 denetim/ARAC-KRONO-ITALYA-0929-CUMLE.py "<regex>" <slug> [<slug> ...]
# Her slug için regex'in geçtiği CÜMLEYİ (gövdeden, başlık/bibliyografya hariç) basar.
import sys, re, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KRONO-ITALYA-0929-tdv-onbellek")
rx = re.compile(sys.argv[1], re.I)
for slug in sys.argv[2:]:
    p = os.path.join(KOK, slug + ".txt")
    if not os.path.exists(p):
        print("==", slug, "YOK"); continue
    t = open(p, encoding="utf-8").read()
    i = t.find("Kopyalama metni")
    g = t[i:] if i >= 0 else t
    j = g.find("BİBLİYOGRAFYA")
    if j > 0:
        g = g[:j]
    print("==", slug)
    for c in re.split(r"(?<=[.!?])\s+|\n", g):
        if rx.search(c) and len(c) > 25:
            print("  -", c.strip()[:420])

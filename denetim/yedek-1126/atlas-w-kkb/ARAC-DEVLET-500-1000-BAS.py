# DEVLET-500-1000 — önbellekteki TDV gövdelerinin başlık satırı + gövde başı
#   py denetim/ARAC-DEVLET-500-1000-BAS.py <slug> [<slug> ...] [--n 900]
import sys, os, io, re
sys.stdout.reconfigure(encoding="utf-8")
DIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "DEVLET-500-1000-tdv-onbellek")
a = sys.argv[1:]; n = 900
if "--n" in a:
    i = a.index("--n"); n = int(a[i + 1]); del a[i:i + 2]
for s in a:
    p = os.path.join(DIZ, s + ".txt")
    if not os.path.exists(p): print("==", s, "YOK"); continue
    g = io.open(p, encoding="utf-8").read()
    m = re.search(r'opacity:0\.85;[^>]*>\s*(.{0,300}?)-->', g)
    bas = m.group(1) if m else "?"
    k = g.find("Kopyalama metni")
    print("==", s, "|", bas.strip())
    print(g[k + 16:k + 16 + n] if k >= 0 else g[:n])
    print()

# DEVLET-500-1000 — gövdede son/yıkılış/kuruluş cümlelerini ara (çoklu slug)
#   py denetim/ARAC-DEVLET-500-1000-SON.py <regex> <N> <slug> [<slug> ...]
import sys, os, io, re
sys.stdout.reconfigure(encoding="utf-8")
DIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "DEVLET-500-1000-tdv-onbellek")
rx, n = sys.argv[1], int(sys.argv[2])
for s in sys.argv[3:]:
    p = os.path.join(DIZ, s + ".txt")
    if not os.path.exists(p): print("==", s, "YOK"); continue
    g = io.open(p, encoding="utf-8").read()
    k = g.find("Kopyalama metni"); g = g[k:] if k >= 0 else g
    b = g.find("BİBLİYOGRAFYA"); g = g[:b] if b > 0 else g
    print("==", s)
    for i, m in enumerate(re.finditer(rx, g, re.I)):
        if i >= 6: break
        print("  …", g[max(0, m.start() - n): m.end() + n // 2], "…")

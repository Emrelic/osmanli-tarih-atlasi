# EKOKUMA-0077-C — önbellekteki TDV metinlerinden anahtar kelime geçen paragrafları basar.
# Kullanım: py denetim/ARAC-EKOKUMA-0077-C-PASAJ.py <desen> <slug> [<slug> ...]
import sys, re, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "EKOKUMA-0077-C-tdv-onbellek")
desen = re.compile(sys.argv[1], re.I)
for slug in sys.argv[2:]:
    yol = os.path.join(KOK, slug + ".txt")
    if not os.path.exists(yol):
        print("==", slug, "YOK"); continue
    paragraflar = [p for p in open(yol, encoding="utf-8").read().split("\n") if len(p) > 150 and "data-width" not in p and "Her hakkı" not in p]
    isabet = [p for p in paragraflar if desen.search(p)]
    print(f"== {slug}: {len(isabet)}/{len(paragraflar)} paragraf")
    for p in isabet:
        print("  ·", p.strip()[:3000])

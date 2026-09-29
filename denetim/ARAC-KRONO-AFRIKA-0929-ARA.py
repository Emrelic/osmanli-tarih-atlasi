# KRONO-AFRIKA-0929 — TDV önbelleğinde terim arar, bağlamla basar (hafif: satır satır).
# Kullanım: py -X utf8 denetim/ARAC-KRONO-AFRIKA-0929-ARA.py <dosya1,dosya2|hepsi> <regex> [bağlam=180] [azami=6]
import sys, re, os, glob
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KRONO-AFRIKA-0929-tdv-onbellek")
dosyalar = sys.argv[1]
rx = re.compile(sys.argv[2], re.I)
bag = int(sys.argv[3]) if len(sys.argv) > 3 else 180
azami = int(sys.argv[4]) if len(sys.argv) > 4 else 6
adlar = [os.path.basename(p)[:-4] for p in glob.glob(os.path.join(KOK, "*.txt"))] if dosyalar == "hepsi" else dosyalar.split(",")
for ad in adlar:
    p = os.path.join(KOK, ad + ".txt")
    if not os.path.exists(p):
        continue
    t = open(p, encoding="utf-8").read()
    n = 0
    son = -1
    for m in rx.finditer(t):
        if m.start() < son:
            continue
        a, b = max(0, m.start() - bag), min(len(t), m.end() + bag)
        print(f"[{ad}] …{t[a:b].replace(chr(10), ' ')}…")
        son = b
        n += 1
        if n >= azami:
            break

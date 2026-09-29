# KRONO-AFRIKA-0929 — mükerrer taraması: anahtar sözcük geçen KRONOLOJİ maddelerini (t + b) listeler.
# Kullanım: py -X utf8 denetim/ARAC-KRONO-AFRIKA-0929-MUKERRER.py "<regex>" [azami=12]
# data/olaylar*.js + data/kronoloji*.js içinde  t:"...", b:"..."  çiftlerini arar (künye içi `kronoloji:[` dâhil devletler.js).
import sys, re, glob, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
rx = re.compile(sys.argv[1], re.I)
azami = int(sys.argv[2]) if len(sys.argv) > 2 else 12
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data")
dosyalar = sorted(glob.glob(os.path.join(KOK, "olaylar*.js")) + glob.glob(os.path.join(KOK, "kronoloji*.js")) + [os.path.join(KOK, "devletler.js"), os.path.join(KOK, "savaslar.js")])
n = 0
kayit = re.compile(r't:\s*"(\d{3,4}-\d\d-\d\d)"[^{}]{0,300}?b:\s*"([^"]+)"')
for p in dosyalar:
    try:
        s = open(p, encoding="utf-8").read()
    except Exception:
        continue
    for m in kayit.finditer(s):
        if rx.search(m.group(2)):
            print(f"{os.path.basename(p)} | {m.group(1)} | {m.group(2)[:120]}")
            n += 1
            if n >= azami:
                sys.exit()
print("toplam:", n)

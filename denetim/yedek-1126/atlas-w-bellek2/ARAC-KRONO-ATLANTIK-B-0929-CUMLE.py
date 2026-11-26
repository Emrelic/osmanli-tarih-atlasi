# KRONO-ATLANTIK-B-0929 — önbellekteki TDV metninden yıl içeren cümleleri basar.
# Kullanım: py -X utf8 denetim/ARAC-KRONO-ATLANTIK-B-0929-CUMLE.py <slug> [anahtar ...]
import sys, re, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KRONO-ATLANTIK-B-0929-tdv-onbellek")
slug, anahtar = sys.argv[1], sys.argv[2:]
t = open(os.path.join(KOK, slug + ".txt"), encoding="utf-8").read()
for m in re.finditer(r"[^.]*\b1[2-9]\d\d\b[^.]*\.", t):
    s = m.group(0).strip()
    if len(s) < 600 and (not anahtar or any(k in s for k in anahtar)):
        print("-", s)

# KRONO-ATLANTIK-B-0929 — verilen t: günlerinin madde bloğunu (t:'den sonraki '},' e kadar) basar.
# Kullanım: py -X utf8 denetim/ARAC-KRONO-ATLANTIK-B-0929-GOSTER.py <dosya> <t> [<t> ...]
import sys, re
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
s = open(sys.argv[1], encoding="utf-8").read()
for t in sys.argv[2:]:
    for m in re.finditer(r'\{ t:"' + re.escape(t) + r'".*?\},?\n', s, flags=re.S):
        print("==", t, "satır", s[:m.start()].count("\n") + 1)
        print(m.group(0)[:1500])

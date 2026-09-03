# -*- coding: utf-8 -*-
"""devletler.js'in KENDİ sözlüğünü ölç — tur: · bolge: · süregelen t: emsali.

M-2500 şartı: "tur: MEVCUT 17 değerden". Hangileri olduğunu tahmin
etmeyip ölçüyorum (§11: veri zaten bir dilde yazılıysa ona sor).
"""
import io
import re
import sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
s = io.open("data/devletler.js", encoding="utf-8").read()

tur = Counter(re.findall(r'tur\s*:\s*"([^"]+)"', s))
print("TUR degerleri: %d" % len(tur))
for k, n in tur.most_common():
    print("  %4d  %s" % (n, k))

bol = Counter(re.findall(r'bolge\s*:\s*"([^"]+)"', s))
print("\nBOLGE degerleri: %d" % len(bol))
for k, n in bol.most_common():
    print("  %4d  %s" % (n, k))

print("\n--- SUREGELEN DEVLET emsali: abd · kanada benzeri t: ne yaziyor ---")
for kim in ("abd", "meksika", "rusya", "danimarka", "ingiltere", "fransa",
            "haudenosaunee", "komanci", "cherokee", "choctaw", "powhatan",
            "creek-konfederasyonu", "apaci-ovalar", "natchez", "cahokia",
            "pueblo-bagimsizligi", "ingiliz-kuzey-amerika"):
    m = re.search(r'id\s*:\s*"' + re.escape(kim) + r'"(.{0,400})', s, re.S)
    if not m:
        print("  %-24s YOK" % kim)
        continue
    g = m.group(1)
    f = re.search(r'\bf\s*:\s*"([^"]+)"', g)
    t = re.search(r'\bt\s*:\s*"([^"]+)"', g)
    tr = re.search(r'\btur\s*:\s*"([^"]+)"', g)
    bg = re.search(r'\bbolge\s*:\s*"([^"]+)"', g)
    print("  %-24s f=%-12s t=%-12s tur=%-12s bolge=%s"
          % (kim, f.group(1) if f else "?", t.group(1) if t else "?",
             tr.group(1) if tr else "?", bg.group(1) if bg else "?"))

# -*- coding: utf-8 -*-
"""UYGULA-4 — bir GÜNÜN ±30 gününde kronoloji maddesi var mı (Değişmez 2/2s'in soracağı soru).

    py denetim/ARAC-UYGULA4-GUN-0918.py 1427-01-01 1838-01-01 1864-07-01

Yamayı indirmeden ÖNCE koşar. Hiçbir şey yazmaz.
"""
import io, os, re, sys
from datetime import date

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
mad = []
for f in sorted(os.listdir(os.path.join(KOK, "data"))):
    if not (f.startswith("olaylar") or f.startswith("kronoloji")) or not f.endswith(".js"):
        continue
    t = io.open(os.path.join(KOK, "data", f), encoding="utf-8").read()
    for m in re.finditer(r't:\s*"(\d{4}-\d{2}-\d{2})"[^\n]{0,400}?b:\s*"([^"]{0,90})', t):
        mad.append((m.group(1), m.group(2), f))
print("taranan madde:", len(mad))


def g(s):
    return date(int(s[:4]), int(s[5:7]), int(s[8:10])).toordinal()


for hedef in sys.argv[1:]:
    print(f"\n{hedef}:")
    for d, t, b, f in sorted((abs(g(t) - g(hedef)), t, b, f) for t, b, f in mad)[:3]:
        print(f"   {'🟢' if d <= 30 else '🔴'} {d:6d} gün · {t} · {b[:66]} · {f}")

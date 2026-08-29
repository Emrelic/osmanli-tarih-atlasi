# -*- coding: utf-8 -*-
"""PAKET DOKUMU — DOGRU EVREN: ClaudEmre/kutu/giden/*/CEVAP.json

🔴 Iki kez yanlis evrende olctum:
     denetim/HUKUM-*.json ham       -> 687  (TASNIF/BAYAT ayni maddeyi tekrarliyor)
     kendi tekillestirmem            -> 258  (parti anahtari cakisiyordu)
   Dogru sayi 183 ve kaynagi bu: her paketin CEVAP.json'i, madde basina
   TEK kayit. `_isci_nabzi.py:44` zaten buradan sayiyor.
📌 CLAUDE.md: "var olan URETECI cagir" — kendi regex'ini yazma.
"""
import collections
import glob
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = "C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden"
ACIK = ("sirada", "olculecek")

paketler = {}
say = collections.Counter()
for y in sorted(glob.glob(os.path.join(KOK, "*", "CEVAP.json"))):
    ad = os.path.basename(os.path.dirname(y))
    try:
        d = json.load(io.open(y, encoding="utf-8"))
    except Exception as e:
        print("BOZUK:", ad, e)
        continue
    m = d.get("maddeler") or {}
    a = k = 0
    cins = collections.Counter()
    for v in m.values():
        if not isinstance(v, dict):
            continue
        h = (v.get("hukum") or "").strip()
        say[h] += 1
        cins[h] += 1
        if h in ACIK:
            a += 1
        else:
            k += 1
    paketler[ad] = (len(m), a, k, cins)

toplam = sum(v[0] for v in paketler.values())
acik = sum(v[1] for v in paketler.values())
print("=" * 70)
print("PAKET: %d · MADDE: %d · ACIK: %d · KAPALI: %d"
      % (len(paketler), toplam, acik, toplam - acik))
print()
print("HUKUM DAGILIMI")
for k, v in say.most_common():
    im = "🔴" if k in ACIK else "🟢"
    print("   %s %-18s %4d  (%%%.0f)" % (im, k or "(bos)", v, 100.0 * v / max(1, toplam)))
print()
print("ACIGI OLAN PAKETLER (cok -> az)")
sirali = sorted(((v[1], ad, v[0], v[3]) for ad, v in paketler.items()), reverse=True)
for a, ad, n, cins in sirali:
    if a == 0:
        continue
    d = " · ".join("%s %d" % (h, c) for h, c in cins.most_common() if h in ACIK)
    print("   %-30s %3d/%-3d acik    %s" % (ad[:30], a, n, d))
print()
kapali_paket = [ad for a, ad, n, c in sirali if a == 0]
print("🟢 TAMAMEN KAPALI PAKET: %d" % len(kapali_paket))
for ad in kapali_paket[:12]:
    print("     ", ad)

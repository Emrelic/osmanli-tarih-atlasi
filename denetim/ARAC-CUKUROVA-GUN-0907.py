# -*- coding: utf-8 -*-
"""CUKUROVA YAMASI HANGI GUNLERI ISTIYOR — ve hangisinin maddesi YOK?

Cukurova yamasi (denetim/yer_yama_cukurova_isg_0907.js, 15 kayit)
Degismez 7'yi 663 -> 661 indiriyor AMA `Degismez 2i`yi 3 -> 9 ACIK
yapiyor: `isg:` gunlerinin kronoloji maddesi yok.

Bu betik o gunleri ADIYLA cikarir — kac tane, hangi sehir, ve en yakin
madde ne kadar uzakta. Boylece "6 gun" bir tahmin degil bir LISTE olur.

VERIYE DOKUNMAZ.
"""
import collections
import json
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi     # noqa: E402
import denetle   # noqa: E402

YAMA = os.path.join(KOK, "denetim", "yer_yama_cukurova_isg_0907.js")
if not os.path.exists(YAMA):
    raise SystemExit("YAMA YOK: %s" % YAMA)

JS = (
    'const fs=require("fs"),vm=require("vm");'
    'const c={window:{},console:{log(){}}};vm.createContext(c);'
    'vm.runInContext(fs.readFileSync(process.argv[2],"utf8"),c);'
    'let e=null;for(const a of Object.keys(c.window)){const v=c.window[a];'
    'if(Array.isArray(v)&&(!e||v.length>e.length))e=v;}'
    'if(!e||!e.length)throw new Error("SIFIR KAYIT");'
    'process.stdout.write(JSON.stringify(e));'
)
gec = os.path.join(os.environ.get("TEMP", "."), "_cuk_gun_0907.js")
open(gec, "w", encoding="utf-8").write(JS)
h = subprocess.run(["node", gec, YAMA], capture_output=True, text=True,
                   encoding="utf-8")
if h.returncode != 0:
    raise SystemExit("node COKTU: " + (h.stderr or "")[:300])
K = json.loads(h.stdout)
print("yama kaydi: %d" % len(K))
if len(K) < 5:
    raise SystemExit("SESSIZ SIFIR")

O = denetle.olaylari_yukle()
print("cekirdek kronoloji: %d madde" % len(O))

# CANLI isg gunleri — yamanin GETIRDIGI gunleri ayirt etmek icin
Y = girdi.yukle(sessiz=True)
canli_isg = set()
for y in Y:
    for p in (y.get("isg") or []):
        for u in ("f", "t"):
            if p.get(u):
                canli_isg.add(p[u])

gun_sehir = collections.defaultdict(list)
for r in K:
    for p in (r.get("isg") or []):
        for u in ("f", "t"):
            g = p.get(u)
            if g and not (g <= "1281-01-01" or g >= "1923-10-29"):
                gun_sehir[g].append("%s(%s)" % (r["ad"], p.get("d", "?")))


def en_yakin(g):
    g0 = denetle.gun_no(denetle.tam(g))
    en, ed = None, 10 ** 9
    for o in O:
        t = o.get("t")
        if not t:
            continue
        d = abs(denetle.gun_no(denetle.tam(t)) - g0)
        if d < ed:
            ed, en = d, o
    return ed, (en.get("b") or "")[:56] if en else ""


print("\n" + "=" * 74)
print("YAMANIN `isg:` GUNLERI — %d benzersiz" % len(gun_sehir))
print("=" * 74)
eksik = []
for g in sorted(gun_sehir):
    d, b = en_yakin(g)
    yeni = "" if g in canli_isg else "  🆕 YENI GUN"
    im = "🟢" if d <= 30 else "🔴"
    print("%s %s  %3dg  %-56s%s" % (im, g, d, b, yeni))
    print("      %s" % " · ".join(sorted(set(gun_sehir[g])))[:100])
    if d > 30:
        eksik.append((g, sorted(set(gun_sehir[g]))))

print("\n" + "=" * 74)
print("  MADDESI OLMAYAN (>30 gun): %d" % len(eksik))
print("=" * 74)
for g, sehirler in eksik:
    print("  %s   %s" % (g, ", ".join(sehirler)[:88]))

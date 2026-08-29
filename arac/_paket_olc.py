# -*- coding: utf-8 -*-
"""PAKET 0039 — somut iddialari OLC, sonra hukum yaz."""
import collections
import io
import json
import re
import subprocess
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

Y = girdi.yukle() if hasattr(girdi, "yukle") else girdi.oku()
if isinstance(Y, tuple):
    Y = Y[0]

GUN = "1923-06-15"


def aktif(y, alan, g):
    return [p for p in (y.get(alan) or []) if p.get("f", "") <= g < p.get("t", "")]


print("=" * 66)
print("H-0007 — KUTSAL ROMA 1923'te CIZILIYOR MU?")
kr = []
for y in Y:
    for p in aktif(y, "s", GUN):
        if "kutsal" in (p.get("d") or "").lower() or "roma" in (p.get("d") or "").lower():
            kr.append((y["ad"], p.get("d"), p.get("f"), p.get("t")))
print("   %s'te `kutsal-roma`/roma tasiyan nokta: %d" % (GUN, len(kr)))
for a, d, f, t in kr[:10]:
    print("      %-24s %s  %s → %s" % (a[:24], d, f, t))
# kunye penceresi
try:
    js = ("global.window={};const fs=require('fs');"
          "eval(fs.readFileSync('data/devletler.js','utf8'));"
          "const D=window.DEVLETLER||[];"
          "const r=D.filter(x=>/roma|kutsal/i.test(x.id+' '+(x.ad||'')))"
          ".map(x=>({id:x.id,ad:x.ad,f:x.f,t:x.t}));"
          "process.stdout.write(JSON.stringify(r));")
    o = subprocess.run(["node", "-e", js], capture_output=True, timeout=90)
    for x in json.loads(o.stdout.decode("utf-8") or "[]"):
        print("      KUNYE  %-22s %s → %s" % (x.get("id"), x.get("f"), x.get("t")))
except Exception as e:
    print("      kunye okunamadi:", e)

print()
print("=" * 66)
print("H-0006 — ROMANYA 1923'te KAC PARCA (nokta kumesi)")
rom = [y for y in Y if any((p.get("d") or "").startswith("romanya")
                           for p in aktif(y, "s", GUN))]
print("   romanya noktasi: %d" % len(rom))
if rom:
    lat = [y["lat"] for y in rom]
    lon = [y["lon"] for y in rom]
    print("   kutu: %.2f-%.2f K / %.2f-%.2f D" % (min(lat), max(lat), min(lon), max(lon)))
    for y in sorted(rom, key=lambda x: x["lon"])[:14]:
        print("      %-24s %7.3f %7.3f" % (y["ad"][:24], y["lat"], y["lon"]))

print()
print("=" * 66)
print("H-0008 — CEKOSLOVAKYA · AVUSTURYA · MACARISTAN 1923")
for kim in ("cekoslovakya", "avusturya", "macaristan"):
    n = [y for y in Y if any((p.get("d") or "") == kim for p in aktif(y, "s", GUN))]
    print("   %-16s %3d nokta" % (kim, len(n)))
    for y in n[:6]:
        print("        %-26s %7.3f %7.3f" % (y["ad"][:26], y["lat"], y["lon"]))

print()
print("=" * 66)
print("H-0005 — ISGAL ORTUSU: 1921'de kac kayit, kim isgal ediyor")
isg = collections.Counter()
for y in Y:
    for p in (y.get("isg") or []):
        if p.get("f", "") <= "1921-06-15" < p.get("t", ""):
            isg[p.get("d") or "?"] += 1
print("   1921-06-15'te aktif isgal kaydi: %d" % sum(isg.values()))
for k, v in isg.most_common():
    print("      %-20s %3d" % (k, v))

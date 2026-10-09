# -*- coding: utf-8 -*-
"""ZAMAN-Z6-1008 — sınıf + kaynak tablosu (md). Veri yazmaz."""
import sys, io, os, json, subprocess, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
dilim = sys.argv[1] if len(sys.argv) > 1 else "anadolu"
t = json.load(io.open(os.path.join(KOK, "denetim", f"ZAMAN-Z6-{dilim}-sinif.json"), encoding="utf-8"))
print(dict(collections.Counter(k["sinif"] for k in t)))
print(dict(collections.Counter(k.get("neden", "")[:24] for k in t if k["sinif"] == "3")))
kod = ("global.window={};eval(require('fs').readFileSync('data/yer_yama_once1281_z6.js','utf8'));"
       "process.stdout.write(JSON.stringify(window.YER_YAMA_ONCE1281_Z6))")
a = json.loads(subprocess.run(["node", "-e", kod], capture_output=True, text=True, encoding="utf-8", cwd=KOK).stdout)
adlar = {k["ad"] for k in t}
L = ["| Nokta | 1281 öncesi zincir | 1281 eklemi | TDV dayanağı (birebir alıntının başı) |", "|---|---|---|---|"]
for r in a:
    if r["ad"] not in adlar:
        continue
    z = " → ".join(f"{d['f']} `{d['d']}`" + (" (tanık)" if d["tur"] == "tanik" else "") for d in r["once1281"]["dayanak"])
    al = " · ".join(f"`{d['tdv']}` «{d['alinti'][:100]}{'…' if len(d['alinti']) > 100 else ''}»" for d in r["once1281"]["dayanak"])
    L.append(f"| {r['ad']} | {z} | {r['once1281']['gecis']} | {al.replace('|', '/')} |")
M = ["| Sınıf | Nokta | Gerekçe |", "|---|---|---|"]
for s in ["1", "2z", "3k", "3b", "3y"]:
    for k in t:
        if k["sinif"] == s:
            M.append(f"| {s} | {k['ad']} | {k.get('neden', '').replace('|', '/')} |")
yol = os.path.join(KOK, "denetim", f"ZAMAN-Z6-{dilim}-tablo.md")
io.open(yol, "w", encoding="utf-8", newline="\n").write(
    f"# ZAMAN-Z6 · {dilim} — kaynak tablosu (sınıf 2) ve gerekçeli öteki sınıflar\n\n"
    + "\n".join(L) + "\n\n" + "\n".join(M) + "\n\n"
    + "Sınıf 3 (TDV maddesi yok / madde var cümle yok) ad listesi: `ZAMAN-Z6-" + dilim + "-sinif.json`.\n")
print(len(L) - 2, len(M) - 2, "→", yol)

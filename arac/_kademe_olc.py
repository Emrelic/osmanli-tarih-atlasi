# -*- coding: utf-8 -*-
"""KADEME YAMASI — UYGULAMADAN ONCE OLCUM (yazmaz).

Sorulari:
  1. Yama kayitlarinin adlari veride KAC KEZ geciyor? (0 = kayip, 2+ = belirsiz)
  2. Ust duzey `k:` icin `g:N,` cipasi guvenilir mi? (kd: icindeki k: ile karismasin)
  3. Kac kayitta `k:` HIC YOK (eklenmesi gerekir)?
"""
import os, re, io, sys, json, collections, subprocess

KOK = os.getcwd()
VERI = os.path.join(KOK, "data")

# ---- yamalari kendi dilinde oku (regex YOK — CLAUDE.md: yorumlayiciyi cagir)
JS = r"""
global.window={};
const fs=require('fs');
for (const f of ['data/yer_yama_kademe.js','data/yer_yama_kademe2.js'])
  eval(fs.readFileSync(f,'utf8'));
const A=(window.YER_YAMA_KADEME||[]).concat(window.YER_YAMA_KADEME2||[]);
process.stdout.write(JSON.stringify(A.map(r=>({
  ad: r.yerlesim, eski: (r.mevcut||{}).k, yeni: (r.oneri||{}).k, olcut: r.olcut
}))));
"""
p = subprocess.run(["node", "-e", JS], cwd=KOK, capture_output=True)
if p.returncode != 0:
    sys.stdout.write("NODE HATASI:\n" + p.stderr.decode("utf-8", "replace")[:800] + "\n")
    raise SystemExit(1)
yama = json.loads(p.stdout.decode("utf-8"))
print("yama kaydi: %d" % len(yama))

dag = collections.Counter((r["eski"], r["yeni"]) for r in yama)
print("\n(eski k -> yeni k) dagilimi:")
for (e, y), n in sorted(dag.items(), key=lambda x: -x[1]):
    print("   k%s -> k%s   %4d" % (e, y, n))

# ---- girdi dosyalarini bul
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
DOSYALAR = list(girdi.GIRDI_DOSYALARI)
print("\ngirdi dosyasi: %d" % len(DOSYALAR))

AD_RX = re.compile(r'\bad:\s*"((?:[^"\\]|\\.)*)"')
# ust duzey k: -- `g:N,` cipasinin HEMEN ardindaki k:
G_K_RX = re.compile(r'\bg:\s*-?\d+\s*,\s*k:\s*(\d+)')
G_RX = re.compile(r'\bg:\s*-?\d+\s*,')

konum = collections.defaultdict(list)   # ad -> [(dosya, satir_no)]
cipa_var = cipa_yok = kayit = 0

for dosya in DOSYALAR:
    yol = os.path.join(VERI, dosya)
    if not os.path.exists(yol):
        print("  🔴 YOK: %s" % dosya); continue
    for i, satir in enumerate(io.open(yol, encoding="utf-8"), 1):
        m = AD_RX.search(satir)
        if not m:
            continue
        kayit += 1
        konum[m.group(1)].append((dosya, i))
        if G_K_RX.search(satir):
            cipa_var += 1
        elif G_RX.search(satir):
            cipa_yok += 1

print("veride kayit satiri: %d" % kayit)
print("  g:N, k:N  cipasi TUTAN : %d" % cipa_var)
print("  g: var ama k: YOK      : %d   <- k: EKLENMESI gerekenler" % cipa_yok)
print("  g: HIC YOK             : %d" % (kayit - cipa_var - cipa_yok))

# ---- yamayi veriyle esle
yok = []; belirsiz = []; tek = 0
for r in yama:
    yerler = konum.get(r["ad"], [])
    if not yerler:
        yok.append(r["ad"])
    elif len(yerler) > 1:
        belirsiz.append((r["ad"], yerler))
    else:
        tek += 1

print("\n=== ESLESME ===")
print("  tek eslesme (UYGULANABILIR): %d" % tek)
print("  HIC eslesmeyen             : %d" % len(yok))
print("  BIRDEN COK eslesen         : %d   <- ELLE karar" % len(belirsiz))

if yok:
    print("\n--- eslesmeyen ilk 15:")
    for a in yok[:15]:
        print("     %s" % a.encode("ascii", "replace").decode("ascii"))
if belirsiz:
    print("\n--- belirsiz ilk 15:")
    for a, yerler in belirsiz[:15]:
        print("     %-28s %s" % (a.encode("ascii", "replace").decode("ascii"),
                                 " · ".join("%s:%d" % y for y in yerler)))

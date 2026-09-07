# -*- coding: utf-8 -*-
"""63 CAKISMANIN CINSI — veri mi, BEYAN mi?

Sehrizor acildi ve sasirtici cikti: `s:` artik iki yamada da AYNI,
`d:` yalniz bir yamada. Catisan alan `neden:` (ve `kaynak:`).

HIPOTEZ: `kaynak/neden/not` KAYIT SEVIYESINDE SKALER, ama hakli
cikardiklari iddia ALAN SEVIYESINDE. Iki yama ayrik dizilere dokunsa
bile (biri `d:`, oteki `s:`) PAYLASILAN skalerde carpisirlar —
ve alet bunu VERI CATISMASI gibi raporlar.

Bu betik hipotezi olcer: her cakismanin catisan alan kumesini doker
ve iki kovaya ayirir.
  VERI CATISMASI   catisan alanlarda d/s/v/isg VAR
  BEYAN CATISMASI  catisan alanlarin TAMAMI kaynak/neden/not/bos

Salt okuma — uygulayicinin kendi kodunu ice aktarir, TAKLIT ETMEZ.
"""
import collections
import importlib.util
import io
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

# Uygulayici bir betik (main gibi kosuyor); ice aktarmak yerine
# ONUN CIKTISINI okuyup catisan alanlari KENDI hesaplamak yerine,
# yamalari ayni yoldan okuyup alan imzasini kurariz.
import json
import subprocess

JS = (
    'const fs=require("fs"),vm=require("vm"),path=require("path");'
    'const dizin=process.argv[2];const cikti={};'
    'for(const f of fs.readdirSync(dizin)){'
    '  if(!/^yer_yama.*\\.js$/.test(f))continue;'
    '  const c={window:{},console:{log(){}}};vm.createContext(c);'
    '  try{vm.runInContext(fs.readFileSync(path.join(dizin,f),"utf8"),c);}catch(e){continue;}'
    '  let en=null;for(const a of Object.keys(c.window)){const v=c.window[a];'
    '    if(Array.isArray(v)&&(!en||v.length>en.length))en=v;}'
    '  if(!en)continue;'
    '  cikti[f]=en.filter(r=>r&&r.ad).map(r=>{const o={ad:r.ad};'
    '    for(const k of Object.keys(r))if(k!=="ad")o[k]=JSON.stringify(r[k]);'
    '    return o;});'
    '}'
    'process.stdout.write(JSON.stringify(cikti));'
)
gec = os.path.join(os.environ.get("TEMP", "."), "_cakisma_sinif_0907.js")
with io.open(gec, "w", encoding="utf-8") as f:
    f.write(JS)
h = subprocess.run(["node", "--max-old-space-size=4096", gec,
                    os.path.join(KOK, "data")],
                   capture_output=True, text=True, encoding="utf-8")
if h.returncode != 0:
    raise SystemExit("node COKTU: " + (h.stderr or "")[:400])
YAMA = json.loads(h.stdout)
if len(YAMA) < 5:
    raise SystemExit("SESSIZ SIFIR: %d yama dosyasi" % len(YAMA))
print("yama dosyasi: %d" % len(YAMA))

VERI_ALAN = {"d", "s", "v", "isg"}
BEYAN_ALAN = {"kaynak", "neden", "not", "bos"}

gruplu = collections.defaultdict(list)
for dosya, kayitlar in YAMA.items():
    for r in kayitlar:
        gruplu[r["ad"]].append((dosya, r))

kova = collections.Counter()
ornek = collections.defaultdict(list)
alan_sayaci = collections.Counter()
for ad, liste in gruplu.items():
    if len(liste) < 2:
        continue
    alanlar = set()
    for _, r in liste:
        alanlar |= set(r.keys()) - {"ad"}
    catisan = []
    for a in sorted(alanlar):
        degerler = {r.get(a) for _, r in liste if a in r}
        if len(degerler) > 1:
            catisan.append(a)
    if not catisan:
        kova["AYRIK — cakisma DEGIL"] += 1
        continue
    if catisan == ["kaynak"]:
        kova["yalniz kaynak (veri iner)"] += 1
        continue
    for a in catisan:
        alan_sayaci[a] += 1
    if set(catisan) & VERI_ALAN:
        kova["VERI CATISMASI"] += 1
        ornek["VERI"].append((ad, catisan))
    elif set(catisan) <= BEYAN_ALAN:
        kova["BEYAN CATISMASI"] += 1
        ornek["BEYAN"].append((ad, catisan))
    else:
        kova["KARMA"] += 1
        ornek["KARMA"].append((ad, catisan))

print("\n" + "=" * 66)
for k, v in kova.most_common():
    print("  %-32s %4d" % (k, v))
print("=" * 66)
print("\nCATISAN ALAN DAGILIMI (bloke edenlerde):")
for a, n in alan_sayaci.most_common():
    print("  %-10s %4d" % (a, n))

for kov in ("BEYAN", "KARMA", "VERI"):
    if not ornek[kov]:
        continue
    print("\n-- %s (ilk 8) --" % kov)
    for ad, c in ornek[kov][:8]:
        print("   %-28s %s" % (ad, ",".join(c)))

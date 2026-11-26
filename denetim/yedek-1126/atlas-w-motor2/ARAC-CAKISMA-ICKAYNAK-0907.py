# -*- coding: utf-8 -*-
"""DONEM ICI `kaynak:` — kac cakisma BUNDAN doguyor?

BULGU (Rodos, olculdu):
  yer_yama_ada_kaynak.js  isg:[{f,t,d, kaynak:"oniki-ada"}]
  yer_yama_onikiada.js    isg:[{f,t,d}]
  => f/t/d BIREBIR AYNI. Tek fark donem nesnesinin ICINDEKI `kaynak`.

Uygulayicinin `kaynak` muafiyeti KAYIT seviyesinde
(`catisan_alanlar == ["kaynak"]`); bu `kaynak` DONEM seviyesinde,
o yuzden muafiyet ATESLENMIYOR ve cakisma VERI CATISMASI gibi gorunuyor.

Bu betik olcer: her cakismanin donemleri BEYAN ALT-ALANLARI atildiginda
ESITLENIYOR MU? Esitlenenler bir TARIH sorusu DEGIL, bir ALET sorusudur.
"""
import collections
import io
import json
import os
import subprocess

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

JS = (
    'const fs=require("fs"),vm=require("vm"),path=require("path");'
    'const dizin=process.argv[2];const cikti={};'
    'for(const f of fs.readdirSync(dizin)){'
    '  if(!/^yer_yama.*\\.js$/.test(f))continue;'
    '  const c={window:{},console:{log(){}}};vm.createContext(c);'
    '  try{vm.runInContext(fs.readFileSync(path.join(dizin,f),"utf8"),c);}catch(e){continue;}'
    '  let en=null;for(const a of Object.keys(c.window)){const v=c.window[a];'
    '    if(Array.isArray(v)&&(!en||v.length>en.length))en=v;}'
    '  if(!en)continue;cikti[f]=en.filter(r=>r&&r.ad);'
    '}'
    'process.stdout.write(JSON.stringify(cikti));'
)
gec = os.path.join(os.environ.get("TEMP", "."), "_ickaynak_0907.js")
with io.open(gec, "w", encoding="utf-8") as f:
    f.write(JS)
h = subprocess.run(["node", "--max-old-space-size=4096", gec,
                    os.path.join(KOK, "data")],
                   capture_output=True, text=True, encoding="utf-8")
if h.returncode != 0:
    raise SystemExit("node COKTU: " + (h.stderr or "")[:400])
YAMA = json.loads(h.stdout)
if len(YAMA) < 5:
    raise SystemExit("SESSIZ SIFIR")

DIZI = ("d", "s", "v", "isg")
BEYAN = {"kaynak", "neden", "not", "bos", "k", "kesinlik", "enklav"}


def cekirdek(p):
    """donemin VERI cekirdegi — beyan alt-alanlari atilir."""
    return json.dumps({k: v for k, v in p.items() if k not in BEYAN},
                      sort_keys=True, ensure_ascii=False)


def tam(p):
    return json.dumps(p, sort_keys=True, ensure_ascii=False)


gruplu = collections.defaultdict(list)
for dosya, kayitlar in YAMA.items():
    for r in kayitlar:
        gruplu[r["ad"]].append((dosya, r))

kova = collections.Counter()
ornek = collections.defaultdict(list)
for ad, liste in gruplu.items():
    if len(liste) < 2:
        continue
    catisan_tam, catisan_cek = [], []
    for a in DIZI:
        tamlar = {tam(sorted(r.get(a, []), key=lambda p: (p.get("f") or "")))
                  if False else json.dumps([tam(p) for p in
                                            sorted(r.get(a, []),
                                                   key=lambda p: (p.get("f") or ""))],
                                           ensure_ascii=False)
                  for _, r in liste if a in r}
        ceks = {json.dumps([cekirdek(p) for p in
                            sorted(r.get(a, []), key=lambda p: (p.get("f") or ""))],
                           ensure_ascii=False)
                for _, r in liste if a in r}
        if len(tamlar) > 1:
            catisan_tam.append(a)
            if len(ceks) > 1:
                catisan_cek.append(a)
    if not catisan_tam:
        continue
    if not catisan_cek:
        kova["🟢 YALNIZ DONEM ICI BEYAN — veri AYNI"] += 1
        ornek["BEYAN"].append((ad, catisan_tam,
                               sorted({d for d, _ in liste})))
    else:
        kova["🔴 GERCEK VERI FARKI"] += 1
        ornek["VERI"].append((ad, catisan_cek, sorted({d for d, _ in liste})))

print("=" * 70)
for k, v in kova.most_common():
    print("  %-42s %4d" % (k, v))
print("=" * 70)
for kov, bas in (("BEYAN", "donem ici beyan (ALET sorusu)"),
                 ("VERI", "gercek veri farki (TARIH sorusu)")):
    print("\n-- %s — ilk 10 --" % bas)
    for ad, alanlar, dosyalar in ornek[kov][:10]:
        print("   %-24s %-6s %s" % (ad, ",".join(alanlar),
                                    " vs ".join(x[9:-3] for x in dosyalar)))
    if len(ornek[kov]) > 10:
        print("   … +%d" % (len(ornek[kov]) - 10))

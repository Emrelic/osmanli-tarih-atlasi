# -*- coding: utf-8 -*-
"""AYRIK ALAN — 175 ad "cakisma DEGIL" sayiliyor. Peki HEPSI INIYOR MU?

`_sahiplik_uygula.py:531` civari:  x = liste[0]; r = x["r"]
=> UYGULANAN yalniz BIRINCI yamanin kaydi. Ayni adi tasiyan oteki
   yamalarin alanlari, AYRIK olsalar bile, INMIYOR OLABILIR.

Bu bir HIPOTEZ. Betik onu OLCER:
  her cok-yamali ad icin, liste[0]'da OLMAYAN ama liste[1:]'de OLAN
  veri alani (d/s/v/isg/m) var mi?

CLAUDE.md §11: "sessiz atlama, yanlis sonuctan pahalidir."
SINIR: `liste` sirasi uygulayicinin kendi DOSYALAR sirasindan gelir;
bu betik ayni sirayi kurmak icin ayni glob'u kullanir — ama uygulayiciyi
ICE AKTARMIYOR, yani sira BIREBIR ayni olmayabilir. O yuzden sonuc
"hangi ad" degil "KAC ADDA RISK VAR" olarak okunur.
"""
import collections
import io
import json
import os
import subprocess

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

JS = (
    'const fs=require("fs"),vm=require("vm"),path=require("path");'
    'const dizin=process.argv[2];const cikti=[];'
    'for(const f of fs.readdirSync(dizin).sort()){'
    '  if(!/^yer_yama.*\\.js$/.test(f))continue;'
    '  const c={window:{},console:{log(){}}};vm.createContext(c);'
    '  try{vm.runInContext(fs.readFileSync(path.join(dizin,f),"utf8"),c);}catch(e){continue;}'
    '  let en=null;for(const a of Object.keys(c.window)){const v=c.window[a];'
    '    if(Array.isArray(v)&&(!en||v.length>en.length))en=v;}'
    '  if(!en)continue;'
    '  for(const r of en)if(r&&r.ad)cikti.push([f,r.ad,Object.keys(r)]);'
    '}'
    'process.stdout.write(JSON.stringify(cikti));'
)
gec = os.path.join(os.environ.get("TEMP", "."), "_ayrik_0907.js")
with io.open(gec, "w", encoding="utf-8") as f:
    f.write(JS)
h = subprocess.run(["node", "--max-old-space-size=4096", gec,
                    os.path.join(KOK, "data")],
                   capture_output=True, text=True, encoding="utf-8")
if h.returncode != 0:
    raise SystemExit("node COKTU: " + (h.stderr or "")[:400])
KAYIT = json.loads(h.stdout)
if len(KAYIT) < 100:
    raise SystemExit("SESSIZ SIFIR: %d kayit" % len(KAYIT))
print("toplam yama kaydi: %d" % len(KAYIT))

VERI = {"d", "s", "v", "isg", "m"}
BEYAN = {"kaynak", "neden", "not", "bos", "kur"}

gruplu = collections.defaultdict(list)
for dosya, ad, alanlar in KAYIT:
    gruplu[ad].append((dosya, set(alanlar) - {"ad"}))

cok = {a: l for a, l in gruplu.items() if len(l) > 1}
print("birden cok yamada gecen ad: %d" % len(cok))

riskli_veri = []
riskli_beyan = []
for ad, liste in cok.items():
    ilk = liste[0][1]
    kalan = set()
    for _, al in liste[1:]:
        kalan |= al
    eksikV = (kalan & VERI) - ilk
    eksikB = (kalan & BEYAN) - ilk
    if eksikV:
        riskli_veri.append((ad, sorted(eksikV), [d for d, _ in liste]))
    elif eksikB:
        riskli_beyan.append((ad, sorted(eksikB), [d for d, _ in liste]))

print("\n" + "=" * 68)
print("  liste[0]'da OLMAYAN VERI alani tasiyan ad : %d" % len(riskli_veri))
print("  yalnizca BEYAN alani eksik kalan ad       : %d" % len(riskli_beyan))
print("=" * 68)
for ad, eksik, dosyalar in riskli_veri[:15]:
    print("  %-26s eksik: %-10s  %s" % (ad, ",".join(eksik),
                                        " | ".join(x[9:-3] for x in dosyalar)))
if len(riskli_veri) > 15:
    print("  … +%d" % (len(riskli_veri) - 15))
print("\n(ilk-yama sirasi glob+sort ile kuruldu; uygulayicinin sirasiyla")
print(" BIREBIR ayni olmayabilir — sayi bir RISK olcusudur, ad listesi degil)")

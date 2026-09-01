# -*- coding: utf-8 -*-
"""yerlesimler_kafkas_duzeltme.js — kayitlari CANLI veriye INMIS mi?

Dosya ne girdi.py'de ne index.html'de. Iki ihtimal:
  (a) kayitlari zaten yerlesimler*.js'e islenmis  -> dosya ARSIVE
  (b) hic islenmemis                              -> UYGULANMALI
Ikisi de mumkun ve fark buyuk. OLC.
"""
import json
import os
import subprocess
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

YOL = "data/yer_yama_kafkas.js"
if not os.path.exists(YOL):
    print("DOSYA YOK:", YOL)
    raise SystemExit(1)

JS = """
global.window={};const fs=require('fs');
eval(fs.readFileSync('%s','utf8'));""" % YOL + """
const cik={};
for(const k of Object.keys(global.window)){
  const v=global.window[k];
  cik[k]=Array.isArray(v)?v:[v];
}
process.stdout.write(JSON.stringify(cik));
"""
p = subprocess.run(["node", "-e", JS], capture_output=True)
if p.returncode != 0:
    print("NODE HATASI:", p.stderr.decode("utf-8", "replace")[:400])
    raise SystemExit(1)
d = json.loads(p.stdout.decode("utf-8"))
print("AD ALANLARI:", ", ".join("%s(%d)" % (k, len(v)) for k, v in d.items()))

kayitlar = [x for v in d.values() for x in v if isinstance(x, dict) and x.get("ad")]
print("kayit:", len(kayitlar))
print()

# canli veri
Y = girdi.yukle() if hasattr(girdi, "yukle") else girdi.oku()
if isinstance(Y, tuple):
    Y = Y[0]
ix = {}
for y in Y:
    ix.setdefault(y["ad"], []).append(y)

inmis, inmemis, yok = [], [], []
for r in kayitlar:
    ad = r["ad"]
    if ad not in ix:
        yok.append(ad)
        continue
    canli = ix[ad][0]
    ayni = True
    fark = []
    for alan in ("s", "d", "v", "isg"):
        if alan not in r:
            continue
        a = json.dumps(r.get(alan), sort_keys=True, ensure_ascii=False)
        b = json.dumps(canli.get(alan), sort_keys=True, ensure_ascii=False)
        if a != b:
            ayni = False
            fark.append(alan)
    (inmis if ayni else inmemis).append((ad, fark))

print("🟢 INMIS  (canli veri dosyayla AYNI): %d" % len(inmis))
for ad, _ in inmis:
    print("     ", ad)
print()
print("🔴 INMEMIS (canli veri FARKLI): %d" % len(inmemis))
for ad, fark in inmemis:
    print("     %-28s farkli alan: %s" % (ad[:28], ", ".join(fark)))
print()
if yok:
    print("⚠️ VERIDE HIC YOK: %d" % len(yok))
    for ad in yok:
        print("     ", ad)

print()
print("=== HUKUM ===")
if inmemis:
    print("🔴 %d kayit HENUZ INMEMIS — dosya UYGULANMALI (ya da reddedilmeli)." % len(inmemis))
elif inmis and not inmemis:
    print("🟢 HEPSI INMIS — dosya ARSIVE alinabilir, is kalmadi.")

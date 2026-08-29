# -*- coding: utf-8 -*-
"""YAMA AILELERI — hangi kayit hangi uygulayiciya ait, ve INDI MI?

Iki ayri aile var ve KARISTIRILIYOR:
  A) KRONOLOJI ESLESME  {dosya, t, b, yer_id|yer_kon}  -> olaylar*.js
                        uygulayici: arac/yama_uygula.js   (1561 indi)
  B) SAHIPLIK           {ad, s|d|v|kd|isg}              -> yerlesimler*.js
                        uygulayici: ??? <- ISTE SORU BU
"""
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

VERI = "data"
dosyalar = sorted(f for f in os.listdir(VERI) if "yama" in f.lower())

# Her dosyayi NODE ile okut — kendi dilinde ayristir (CLAUDE.md kurali:
# "veri zaten bir dilde yazilmissa o dilin yorumlayicisini cagir").
BETIK = r"""
const fs=require('fs'),path=require('path');
const f=process.argv[2];
global.window={};
try{ eval(fs.readFileSync(f,'utf8')); }catch(e){ console.log(JSON.stringify({hata:String(e)})); process.exit(0); }
const cik={};
for(const k of Object.keys(global.window)){
  const v=global.window[k];
  const dizi = Array.isArray(v) ? v : (v && typeof v==='object' ? Object.values(v).filter(Array.isArray).flat() : []);
  cik[k]={n:dizi.length, tip:Array.isArray(v)?'dizi':typeof v,
          kron:dizi.filter(x=>x&&(x.yer_id!==undefined||x.yer_kon!==undefined)).length,
          sahip:dizi.filter(x=>x&&x.ad!==undefined&&(x.s||x.d||x.v||x.kd||x.isg)).length,
          adsiz:dizi.filter(x=>x&&x.ad===undefined&&x.dosya===undefined).length};
}
console.log(JSON.stringify(cik));
"""
yol_betik = os.path.join(os.environ.get("TEMP", "."), "_yama_oku.js")
open(yol_betik, "w", encoding="utf-8").write(BETIK)

A = B = BOS = 0
b_dosya = []
print("=" * 74)
print(f"{'dosya':<34}{'kron':>6}{'sahip':>7}{'diger':>7}  degisken")
print("-" * 74)
for f in dosyalar:
    r = subprocess.run(["node", yol_betik, os.path.join(VERI, f)],
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace", timeout=60)
    try:
        d = json.loads(r.stdout.strip() or "{}")
    except Exception:
        print(f"{f:<34}  AYRISTIRILAMADI: {(r.stdout or r.stderr)[:60]}")
        continue
    if "hata" in d:
        print(f"{f:<34}  EVAL HATASI: {d['hata'][:50]}")
        continue
    tk = ts = td = 0
    adlar = []
    for k, v in d.items():
        tk += v["kron"]; ts += v["sahip"]; td += v["adsiz"]
        adlar.append(f"{k}({v['n']},{v['tip']})")
    A += tk; B += ts; BOS += td
    if ts:
        b_dosya.append((f, ts))
    print(f"{f:<34}{tk:>6}{ts:>7}{td:>7}  {' '.join(adlar)[:28]}")

print("-" * 74)
print(f"{'TOPLAM':<34}{A:>6}{ts and B or B:>7}{BOS:>7}")
print()
print("A) KRONOLOJI ESLESME :", A, " -> arac/yama_uygula.js (kuru kosu: 1561 zaten indi)")
print("B) SAHIPLIK          :", B, " -> uygulayicisi ARANIYOR")
if b_dosya:
    print()
    print("   Sahiplik kaydi TASIYAN dosyalar:")
    for f, n in sorted(b_dosya, key=lambda x: -x[1]):
        print(f"      {f:<34}{n:>5}")

# -*- coding: utf-8 -*-
"""SUDAN YAMASI · ⑧ RENK KAPISI.

🔴 NİÇİN ŞART: `ingiliz-sudani` bugün veride **1 nokta**. Yama inince
**35 nokta** olacak ve Sudan'ın tamamını kaplayacak. `renk_olc`
ÇİZİLMEYEN gövde için çift KURMAZ ⇒ doğacak çakışmalar **bugün
görünmüyor**.
`YONTEM-1923-SINIR.md §⑧`: "bir kusuru DOĞMADAN yakalamak istiyorsan
bugünkü veriye değil YARIN ÇİZİLECEK OLANA bak."

🔴 VE ALETİ TAKLİT ETMİYORUM: `renkler._bindirilmis_lab` ve `_de3`
doğrudan çağrılıyor, opaklık `renkler.OPAKLIK["yabanci"]`.
Bir ölçüm ham hex ile yapılırsa EKRANDA OLMAYAN bir rengi ölçer —
ölçüldü: `novgorod` ham 17,87 · bindirilmiş 13,25.

EŞİK (§⑧): ΔE 12 ihlal · 12-13 sınırda · anlatı merkezi ≥25
"""
import io
import json
import math
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
os.chdir(r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ")
sys.path.insert(0, "arac")
G = "1923-10-28"
YENI = "ingiliz-sudani"

import renkler  # noqa: E402

# aletin KENDİ fonksiyonları — taklit YOK
lab = renkler._bindirilmis_lab
de3 = renkler._de3
OPAK = renkler.OPAKLIK["yabanci"]
BOYALAR = renkler.BOYALAR
print("BOYALAR %d · OPAKLIK[yabanci] %s" % (len(BOYALAR), OPAK))

# 1923 kesiti + yama BELLEKTE uygulanmış hâli
kod = r"""
const fs=require('fs'),vm=require('vm');
const {execSync}=require('child_process');
const G='1923-10-28';
const DOSYA=JSON.parse(execSync('py denetim/_girdi_listesi.py',
  {encoding:'utf-8',maxBuffer:1<<24}).trim());
const N=[];
for(const f of DOSYA){const yol='data/'+f.replace(/^data[\\/]/,'');
  if(!fs.existsSync(yol))continue;
  const d={window:{}};vm.createContext(d);
  try{vm.runInContext(fs.readFileSync(yol,'utf8'),d);}catch(e){continue;}
  for(const k of Object.keys(d.window)){const A=d.window[k];
    if(Array.isArray(A))for(const y of A)
      if(y&&y.ad&&y.lat!==undefined)N.push(y);}}
const d2={window:{}};vm.createContext(d2);
vm.runInContext(fs.readFileSync('denetim/yer_yama_afrika_1923.js','utf8'),d2);
const Y=d2.window.YER_YAMA_AFRIKA_1923||[];
const yam={};for(const r of Y)yam[r.ad]=r.s;
const akt=z=>(z||[]).filter(p=>p.f<=G&&G<p.t);
const out=[];
for(const y of N){
  if((y.bit&&y.bit<=G)||(y.kur&&y.kur>G))continue;
  if(akt(y.d).length){out.push({ad:y.ad,lat:y.lat,lon:y.lon,k:'OSMANLI'});continue;}
  if(akt(y.v).length){out.push({ad:y.ad,lat:y.lat,lon:y.lon,k:'OSMANLI-tabi'});continue;}
  const s=akt(yam[y.ad]||y.s)[0];
  if(s)out.push({ad:y.ad,lat:y.lat,lon:y.lon,k:s.d});
}
console.log(JSON.stringify(out));
"""
io.open("denetim/_sudan_kesit.js", "w", encoding="utf-8").write(kod)
P = json.loads(subprocess.run(["node", "denetim/_sudan_kesit.js"],
                              capture_output=True, text=True,
                              encoding="utf-8").stdout)
os.remove("denetim/_sudan_kesit.js")
print("1923 kesiti (yama UYGULANMIŞ): %d nokta" % len(P))

yeni = [p for p in P if p["k"] == YENI]
print("`%s` gövdesi: %d nokta   (yamadan ÖNCE 1)" % (YENI, len(yeni)))
if not yeni:
    print("🔴 gövde boş — DURDUM"); raise SystemExit(2)


def km(a, b):
    la = math.radians(a["lat"]), math.radians(b["lat"])
    dφ = la[1] - la[0]
    dλ = math.radians(b["lon"] - a["lon"])
    h = (math.sin(dφ / 2) ** 2
         + math.cos(la[0]) * math.cos(la[1]) * math.sin(dλ / 2) ** 2)
    return 6371 * 2 * math.asin(min(1, math.sqrt(h)))


# KOMŞULUK — yeni gövdenin her noktasına en yakın FARKLI kimlikler
komsu = {}
for a in yeni:
    for b in P:
        if b["k"] == YENI or b["k"].startswith("OSMANLI"):
            continue
        d = km(a, b)
        if d < komsu.get(b["k"], (1e9,))[0]:
            komsu[b["k"]] = (d, a["ad"], b["ad"])

print("\n=== KOMŞU KİMLİKLER (yeni gövdeye en yakın nokta) ===")
kunye = json.loads(subprocess.run(
    ["node", "-e", "const fs=require('fs'),vm=require('vm');"
     "const d={window:{}};vm.createContext(d);"
     "vm.runInContext(fs.readFileSync('data/devletler.js','utf8'),d);"
     "console.log(JSON.stringify(d.window.DEVLETLER||[]));"],
    capture_output=True, text=True, encoding="utf-8").stdout)
ix = {k["id"]: k for k in kunye}


def hexi(kid):
    k = ix.get(kid)
    a = (k.get("harita") or kid) if k else kid
    v = BOYALAR.get(a)
    return v[1] if isinstance(v, (list, tuple)) and len(v) > 1 else None


h_yeni = hexi(YENI)
print("`%s` hex: %s" % (YENI, h_yeni))
if not h_yeni:
    print("🔴 yeni kimliğin rengi YOK — DURDUM"); raise SystemExit(2)
L_yeni = lab(h_yeni, OPAK)

satir = []
for kid, (d, a, b) in sorted(komsu.items(), key=lambda x: x[1][0])[:14]:
    h = hexi(kid)
    if not h:
        satir.append((kid, d, None, None, "renk YOK"))
        continue
    dE = de3(L_yeni, lab(h, OPAK))
    dur = ("🔴 İHLAL" if dE < 12 else
           "🟡 SINIRDA" if dE < 13 else "🟢")
    satir.append((kid, d, h, dE, dur))

print("\n  %-24s %9s %9s %8s" % ("kimlik", "mesafe", "hex", "ΔE"))
ihlal = 0
for kid, d, h, dE, dur in satir:
    print("  %-24s %7.0f km %9s %8s  %s"
          % (kid, d, h or "-", ("%.2f" % dE) if dE else "-", dur))
    if dE and dE < 12:
        ihlal += 1

print("\n%s" % ("🔴 %d İHLAL — renk kalemi doğuyor" % ihlal if ihlal
                else "🟢 ÇAKIŞMA YOK — yama renk borcu DOĞURMUYOR"))
raise SystemExit(2 if ihlal else 0)

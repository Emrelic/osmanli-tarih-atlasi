# -*- coding: utf-8 -*-
"""RENKSIZ AMA CIZILEN KIMLIK — harita deligi avi.
CLAUDE.md 8: "s:[{d:'...'}] icindeki kimlik BOYALAR sozlugunde tanimli
olmali; yoksa bolge BOYANMAZ." Yani veride KULLANILAN ama renksiz bir
kimlik, haritada bir DELIKTIR.

Evren AYRIMI onemli:
   BAGLI    girdi.GIRDI_DOSYALARI  -> bugun cizilen
   KUYRUK   baglanmayi bekleyenler -> yarin cizilecek
Ikisi ayri raporlanir (CLAUDE.md 11: "veri penceresi != kunye penceresi").
"""
import os, sys, json, subprocess
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
os.chdir(r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ")
sys.path.insert(0, "arac")
import girdi, renkler

BOYALI = set(renkler.BOYALAR.keys())

# 🔴 `harita:` ALANI OKUNMADAN "RENKSIZ" HUKMU VERILEMEZ.
# Ilk yazimda yalniz `id`ye baktim ve 8 SAHTE POZITIF verdi:
# bulgaristan-kralligi · sirbistan-kralligi · suud-ucuncu · arnavutluk-bagimsiz
# · suud-ikinci · sirbistan-prensligi · bulgaristan-prensligi · sirp-despotlugu
# Sekizinin de kunyesi `harita:` ile RENKLI bir anahtara bakiyor
# (bulgaristan-kralligi -> "bulgaristan"), yani motor onlari BOYUYOR.
# RENK 2 bu tuzagi 7 Agustos'ta olcmus ve "id U harita" birlesiminin 33
# yanlis pozitif urettigini gostermisti; ayni aile.
import re as _re
_hp = io = None
import io as _io
_metin = _io.open("data/devletler.js", encoding="utf-8").read()
_harita = {}
_p = subprocess.run(["node", "-e",
    "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));"
    "const o={};for(const d of (window.DEVLETLER||[]))if(d.harita)o[d.id]=d.harita;"
    "console.log(JSON.stringify(o));"],
    capture_output=True, text=True, encoding="utf-8")
if _p.stdout.strip():
    _harita = json.loads(_p.stdout.strip().splitlines()[-1])

def cizilir(kimlik):
    """Bu kimlik haritada BOYANIR mi? Dogrudan rengi olabilir ya da
    `harita:` ile renkli bir anahtara bakiyor olabilir."""
    if kimlik in BOYALI:
        return True
    hedef = _harita.get(kimlik)
    return bool(hedef and hedef in BOYALI)

print("BOYALAR: %d  |  `harita:` alani olan kunye: %d" % (len(BOYALI), len(_harita)))

KUYRUK = ["yerlesimler_ok101.js", "yerlesimler_ok102.js", "yerlesimler_ok104.js",
          "yerlesimler_ok106.js", "yerlesimler_ok107.js", "yerlesimler_ok109.js",
          "yerlesimler_ok110.js", "yerlesimler_p0037.js"]

js = r"""
const fs=require('fs');const ds=JSON.parse(process.argv[1]);
function oku(f){global.window={};let k=[];
  try{eval(fs.readFileSync('data/'+f,'utf8'));}catch(e){return [];}
  for(const a of Object.keys(global.window)){const v=global.window[a];
    if(Array.isArray(v))k=k.concat(v);}
  return k;}
const kim={};
for(const f of ds){for(const r of oku(f)){
  for(const alan of ['s','isg'])
    for(const p of (r[alan]||[])) if(p.d) (kim[p.d]=kim[p.d]||[]).push(r.ad);
}}
console.log(JSON.stringify(kim));
"""

def tara(dosyalar, etiket):
    r = subprocess.run(["node", "-e", js, json.dumps(list(dosyalar))],
                       capture_output=True, text=True, encoding="utf-8")
    if not r.stdout.strip():
        print(etiket, "OKUNAMADI", r.stderr[:200]); return {}
    kim = json.loads(r.stdout.strip().splitlines()[-1])
    renksiz = {k: v for k, v in kim.items()
               if not cizilir(k) and k != "__BOSLUK__"}
    dolayli = {k: v for k, v in kim.items()
               if k not in BOYALI and cizilir(k)}
    print("\n=== %s ===" % etiket)
    print("kullanilan kimlik: %d  |  RENKSIZ: %d  |  `harita:` ile DOLAYLI boyanan: %d"
          % (len(kim), len(renksiz), len(dolayli)))
    for k, v in sorted(renksiz.items(), key=lambda x: -len(x[1])):
        print("   🔴 %-28s %3d donem   ornek: %s" % (k, len(v), ", ".join(sorted(set(v))[:3])))
    return renksiz

tara(girdi.GIRDI_DOSYALARI, "BAGLI EVREN — bugun cizilen")
tara(KUYRUK, "KUYRUK — yarin cizilecek")

# HALKA-ADAY · 13 Eylül 2026 · SALT OKUR
# 9 kalemin halka kaydını ve halkayı doğuran kronoloji maddesinin TAM metnini basar.
import sys, json, os, re, subprocess
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESEN = re.compile(r'kr-(trablus-|derne|bingazi|kandiye|derbend|erzincan|kayseri|maras-memluk|batum|tilimsan|kandehar)')

kayitlar = []
with open(os.path.join(KOK, "data", "kaynakli_halka_kronoloji.js"), encoding="utf-8") as f:
    for l in f:
        l = l.strip().rstrip(",")
        if l.startswith("{") and DESEN.search(l):
            kayitlar.append(json.loads(l))

JS = r"""
const fs=require('fs'),path=require('path');
const KOK=process.argv[1], hedef=JSON.parse(process.argv[2]);
for(const [dosya,t] of hedef){
  global.window={};
  try{eval(fs.readFileSync(path.join(KOK,dosya),'utf8'));}catch(e){console.log('HATA',dosya,e.message);continue;}
  for(const k of Object.keys(window)){const v=window[k];if(!Array.isArray(v))continue;
    for(const o of v){if(o&&o.t===t)console.log('>>',dosya,JSON.stringify(o));}}
}
"""
hedef = []
for r in kayitlar:
    k = r["kaynak"]
    print("##", r["id"], r.get("tarih"), r["kesinlik"], "|", k.get("slug") or k.get("ad"), "|", k["alinti"])
    m = re.match(r"(data/[^ ]+\.js) · t:(\S+)", r["rapor"])
    if m:
        hedef.append([m.group(1), m.group(2)])
print()
out = subprocess.run(["node", "-e", JS, KOK, json.dumps(hedef)], capture_output=True, text=True, encoding="utf-8")
print(out.stdout)
print(out.stderr[-1500:])

# HALKA-ADAY · 13 Eylül 2026 · SALT OKUR
# YAMA-HALKA-ADAY-0913.json geçerli JSON mu, halka kayıtları şemaya ve havuza uyuyor mu?
# ① json.load · ② id benzersiz · ③ yer havuzda TEK kayıt (arac/girdi.py dosyaları, yamasız)
# ④ devlet künyede ya da "osmanli" · ⑤ tarih/f/t biçimi · ⑥ ARALIK kayıtlarında f < t
import sys, os, json, re, subprocess
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

J = json.load(open(os.path.join(KOK, "denetim", "YAMA-HALKA-ADAY-0913.json"), encoding="utf-8"))
H = J["halka_ekle"]
print("oneri:", len(J["oneriler"]), "· halka_ekle:", len(H), "· halka_isaretle:", len(J["halka_isaretle"]))

JS = r"""
const fs=require('fs'),path=require('path');
const KOK=process.argv[1], dosyalar=JSON.parse(process.argv[2]);
const ad={};
for(const f of dosyalar){global.window={};try{eval(fs.readFileSync(path.join(KOK,'data',f),'utf8'));}catch(e){continue;}
  for(const k of Object.keys(window)){const v=window[k];if(Array.isArray(v))for(const r of v)if(r&&r.ad)ad[r.ad]=(ad[r.ad]||0)+1;}}
global.window={};eval(fs.readFileSync(path.join(KOK,'data','devletler.js'),'utf8'));
const D=Object.keys(window).filter(k=>Array.isArray(window[k])).flatMap(k=>window[k]).filter(x=>x&&x.id).map(x=>x.id);
console.log(JSON.stringify({ad, D}));
"""
out = subprocess.run(["node", "-e", JS, KOK, json.dumps(list(girdi.GIRDI_DOSYALARI))],
                     capture_output=True, text=True, encoding="utf-8")
veri = json.loads(out.stdout.strip().splitlines()[-1])
havuz, kunye = veri["ad"], set(veri["D"])
GUN = re.compile(r"^\d{4}-\d{2}-\d{2}$")
hata = 0
idler = [h["id"] for h in H]
if len(idler) != len(set(idler)):
    print("HATA mükerrer id"); hata += 1
for h in H:
    s = []
    if havuz.get(h["yer"], 0) != 1:
        s.append("yer havuzda %d kayıt" % havuz.get(h["yer"], 0))
    if h["devlet"] != "osmanli" and h["devlet"] not in kunye:
        s.append("devlet künyede yok")
    if "tarih" in h:
        if not GUN.match(h["tarih"]): s.append("tarih biçimi")
    else:
        if not (GUN.match(h["f"]) and GUN.match(h["t"]) and h["f"] < h["t"]): s.append("aralık")
    if not h["kaynak"].get("alinti"): s.append("alıntı yok")
    if s:
        hata += 1
    print(("HATA " if s else "ok   ") + h["id"], "; ".join(s))
print("hata:", hata)
sys.exit(1 if hata else 0)

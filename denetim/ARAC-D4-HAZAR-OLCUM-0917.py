# -*- coding: utf-8 -*-
"""D4-ORTADOGU · DALGA-0059 md.7 — 1720-1735 Dağıstan kıyısı (Terek → Derbend) atlas kayıtlarını ölçer.
Salt okuma. Evren: arac/girdi.py GIRDI_DOSYALARI (motorun okuduğu dosyalar) + kronoloji maddeleri."""
import sys, io, os, json, subprocess, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, "arac")
import girdi

JS = r"""
const fs=require('fs');global.window={};
for(const f of JSON.parse(process.argv[1])){try{eval(fs.readFileSync(f,'utf8'))}catch(e){console.error('HATA',f,e.message)}}
const out=[];
for(const k of Object.keys(window)){const v=window[k];if(!Array.isArray(v))continue;
  for(const y of v){if(!y||!y.ad)continue;out.push({k,ad:y.ad,lat:y.lat,lon:y.lon??y.lng,d:y.d,v:y.v,s:y.s,isg:y.isg,kur:y.kur,m:y.m})}}
process.stdout.write(JSON.stringify(out));
"""
dosyalar = [os.path.join("data", str(f)) for f in girdi.GIRDI_DOSYALARI]
r = subprocess.run(["node", "-e", JS, json.dumps(dosyalar)], capture_output=True, text=True, encoding="utf-8")
if r.returncode:
    raise SystemExit(r.stderr)
Y = json.loads(r.stdout)
print("dosya", len(dosyalar), "· kayıt", len(Y))
ALT, UST = "1717-01-01", "1740-01-01"
kutu = [y for y in Y if isinstance(y.get("lat"), (int, float)) and 41.2 < y["lat"] < 44.6 and 45.8 < y["lon"] < 48.8]
for y in sorted(kutu, key=lambda y: -y["lat"]):
    s = []
    for alan in ("d", "v", "s", "isg"):
        for p in (y.get(alan) or []):
            if p.get("f", "") < UST and p.get("t", "9999") > ALT:
                s.append(f"{alan}:{p.get('d','OSM')} {p.get('f')}→{p.get('t')}")
    print(f"{y['ad'][:24]:24} {y['lat']:.3f} {y['lon']:.3f} {y['k'][:26]:26} kur={y.get('kur') or '-':10} | " + " ; ".join(s))

print("\n--- 1722-1735 kronoloji maddeleri (Hazar / Derbend / Şemhal / Tarku / Bakü / Reşt / Gence) ---")
OL = r"""
const fs=require('fs');global.window={};
for(const f of fs.readdirSync('data').filter(f=>/^(olaylar|kronoloji).*\.js$/.test(f))){try{eval(fs.readFileSync('data/'+f,'utf8'))}catch(e){}}
const out=[];for(const k of Object.keys(window)){const v=window[k];if(Array.isArray(v))for(const o of v)if(o&&o.t&&o.b)out.push({k,t:o.t,b:o.b,gun:o.gun,kaynak:o.kaynak})}
process.stdout.write(JSON.stringify(out));
"""
r = subprocess.run(["node", "-e", OL], capture_output=True, text=True, encoding="utf-8")
O = json.loads(r.stdout)
for o in sorted(O, key=lambda o: o["t"]):
    if "1720" <= o["t"] <= "1736" and re.search(r"Derbend|Hazar|Şemhal|Tarku|Bakü|Reşt|Gence|Petro|Dağıstan|Rus", o["b"]):
        print(o["t"], o["k"][:22], "|", o["b"][:110], "| gun:", o.get("gun"), "| kaynak:", str(o.get("kaynak"))[:80])

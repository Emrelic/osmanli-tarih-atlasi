# KRONO-ATLANTIK-A-0929 — DUZELTME.md'nin "uygulanmayan öneriler" ve künye-atfı tablolarını üretir
#   py denetim/ARAC-KRONO-ATLANTIK-A-0929-RAPOR.py > (ekrana; DUZELTME.md'ye elle yerleştirilir)
import json, io, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8")
UYG = {"fransa": {38, 70, 102, 114, 133, 140, 156},
       "ispanya": {45, 46, 50, 76, 86, 88, 111, 132},
       "portekiz": {7, 8, 9, 19, 30, 32, 42, 45, 63, 64, 67, 74, 82, 85}}
for k in ("fransa", "ispanya", "portekiz"):
    L = json.load(io.open(f"denetim/KRONO-ATLANTIK-A-0929-bulgu-{k}.json", encoding="utf-8"))[:-1]
    ac = [x for x in L if x["i"] not in UYG[k] and x["sinif"] != "kaynak-zayif"]
    print(f"\n### `kronoloji_{k}.js` — uygulanmayan tarih/metin önerileri ({len(ac)})\n")
    print("| i | satır | mevcut t | başlık | sınıf | güven | öneri | kanıt |\n|---|---|---|---|---|---|---|---|")
    for x in ac:
        c = lambda s: str(s).replace("|", "¦").replace("\n", " ")[:220]
        print(f"| {x['i']} | {x.get('satir')} | {x['t']} | {c(x['b'])[:60]} | {x['sinif']} | {x.get('guven')} | {c(x['onerilen'])} | {c(x['kanit'])} |")
    kz = [x for x in L if x["sinif"] == "kaynak-zayif" and x["i"] not in UYG[k]]
    print(f"\n`kaynak-zayif` (uygulanmayan): **{len(kz)}** madde — tam liste `denetim/KRONO-ATLANTIK-A-0929-bulgu-{k}.json`.")

# künye atfı: dosyanın tamamı tek künyeye bağlanıyor → madde başına doğru künye
js = r"""
const fs=require('fs'),vm=require('vm');const c={window:{}};vm.createContext(c);
for(const k of ['fransa','ispanya']) vm.runInContext(fs.readFileSync('data/kronoloji_'+k+'.js','utf8'),c);
const out={fransa:c.window.KRONOLOJI_FRANSA.map((m,i)=>[i,m.t,m.b]).filter(x=>x[1]>='1792-09-22'),
           ispanya:c.window.KRONOLOJI_ISPANYA.map((m,i)=>[i,m.t,m.b]).filter(x=>x[1]<'1479-01-20')};
console.log(JSON.stringify(out));"""
o = json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8").stdout)
print(f"\n### Künye atfı — `KRONOLOJI_FRANSA`'nın `fransa-cumhuriyet`e ait {len(o['fransa'])} maddesi (t ≥ 1792-09-22)\n")
print("Hepsi bugün `fransa` (987→1792-09-22) künyesine bağlanıyor. Önerilen `devlet:\"fransa-cumhuriyet\"`. İlk/son: "
      f"i{o['fransa'][0][0]} {o['fransa'][0][1]} … i{o['fransa'][-1][0]} {o['fransa'][-1][1]}. Dizinler: "
      + ", ".join(str(x[0]) for x in o["fransa"]))
print(f"\n### Künye atfı — `KRONOLOJI_ISPANYA`'nın 1479-01-20 öncesi {len(o['ispanya'])} maddesi\n")
ONER = {"1340-10-30": "kastilya + portekiz (+ granada, merini karşı taraf)", "1385-08-14": "portekiz + kastilya",
        "1391-06-04": "kastilya (Aragon'a da yayıldı → + aragon)", "1412-06-24": "aragon",
        "1469-10-19": "kastilya + aragon", "1474-12-13": "kastilya", "1478-11-01": "kastilya"}
print("| i | t | başlık | önerilen künye |\n|---|---|---|---|")
for i, t, b in o["ispanya"]: print(f"| {i} | {t} | {b} | {ONER.get(t, '?')} |")

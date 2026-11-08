import json, sys, subprocess
sys.stdout.reconfigure(encoding="utf-8")
ids = sys.argv[1:]
j = subprocess.run(["node", "-e", """
const fs=require('fs');const vm=require('vm');
const s=fs.readFileSync('data/devletler.js','utf8');
const c={window:{}};vm.createContext(c);vm.runInContext(s+';this.D=(typeof DEVLETLER!=="undefined")?DEVLETLER:window.DEVLETLER;',c);
const ids=process.argv.slice(1);
console.log(JSON.stringify(c.D.filter(x=>ids.includes(x.id)).map(x=>({id:x.id,ad:x.ad,f:x.f,t:x.t,baskent:x.baskent,kaynak:x.kaynak,ic_not:x.ic_not}))));
""", *ids], capture_output=True, encoding="utf-8").stdout
for o in json.loads(j):
    print("##", o["id"], o["ad"], o["f"], "->", o.get("t"))
    print("KAYNAK:", o["kaynak"])
    print("IC_NOT:", o.get("ic_not"))

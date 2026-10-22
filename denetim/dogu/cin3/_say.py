import json, subprocess, os, collections
D = os.path.dirname(os.path.abspath(__file__)); KOK = os.path.abspath(os.path.join(D, '..', '..', '..'))
node = "const vm=require('vm'),fs=require('fs');const sb={window:{}};vm.createContext(sb);for(const f of process.argv.slice(1)){vm.runInContext(fs.readFileSync(f,'utf8'),sb);}console.log(JSON.stringify(sb.window));"
w = json.loads(subprocess.run(['node', '-e', node] + [os.path.join(D, x) for x in ['kronoloji_cok_dogu_cin3.js', 'kronoloji_sinir_dogu_cin3.js']], capture_output=True, cwd=KOK).stdout.decode('utf-8'))
for k, v in w.items():
    c = collections.Counter(m['kesinlik'] for m in v)
    print(k, len(v), dict(c), 'ic_not_takvim:', sum(1 for m in v if 'ic_not_takvim' in m))
allm = w['KRONOLOJI_COK_DOGU_CIN3'] + w['KRONOLOJI_SINIR_DOGU_CIN3']
print('toplam', len(allm), dict(collections.Counter(m['kesinlik'] for m in allm)), sum(1 for m in allm if 'ic_not_takvim' in m))

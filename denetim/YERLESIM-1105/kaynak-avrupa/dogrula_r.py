import json, os, subprocess, sys
sys.stdout.reconfigure(encoding='utf-8')
H = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(H, '..', '..', '..'))
BASE = sys.argv[1] if len(sys.argv) > 1 else 'origin/kasa-1113-batch8-aday'
atl = json.load(open(os.path.join(H, 'atlananlar-r.json'), encoding='utf-8'))
atl_set = {(a['parti'], a['dosya'], a['ad'], a['f'], a['t'], a['alan']) for a in atl}
kay = []
for p in range(1, 6):
    for k in json.load(open(os.path.join(H, 'kaynaklar-parti%d.json' % p), encoding='utf-8')):
        k['parti'] = p
        if (p, k['dosya'], k['ad'], k['f'], k['t'], k['alan']) not in atl_set:
            kay.append(k)
print('uygulanan kayit:', len(kay))
by = {}
for k in kay:
    by.setdefault(k['dosya'], []).append(k)
ok = True
for dosya, lst in by.items():
    yeni = open(os.path.join(ROOT, 'data', dosya), encoding='utf-8', newline='').read()
    eski = subprocess.run(['git', '-C', ROOT, 'show', BASE + ':data/' + dosya], capture_output=True, encoding='utf-8').stdout
    for k in lst:
        a = ',kaynak:"' + k['kaynak'] + '"'
        b = ',"kaynak":"' + k['kaynak'] + '"'
        if a in yeni: yeni = yeni.replace(a, '', 1)
        elif b in yeni: yeni = yeni.replace(b, '', 1)
        else:
            print('EKSIK', k['ad'].encode('ascii', 'replace').decode(), k['f']); ok = False
    esit = (yeni.replace('\r\n', '\n') == eski.replace('\r\n', '\n'))
    print(dosya, len(lst), 'kayit geri alininca tabanla', 'OZDES' if esit else 'FARKLI')
    ok = ok and esit
sys.exit(0 if ok else 1)

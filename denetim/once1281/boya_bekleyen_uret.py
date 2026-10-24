"""BOYA-BEKLEYEN-KURULUS-GERI.tsv üretir (KRON-ANTIK'in BOYA-BEKLEYEN.tsv'sinden ayrı, şeması farklı): KURULUS-GERI'nin BOYALAR'da olmayan kimlikleri; GÜNCEL origin/main'deki
arac/renkler.py metninde hâlâ geçmeyenler 'boya_bekliyor', geçenler 'boya_tamam' diye işaretlenir.
Kullanım (worktree kökünden): py denetim/once1281/boya_bekleyen_uret.py   (önce: git fetch origin)"""
import re, json, io, sys, subprocess, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
MD = open(r'C:\Users\user\AppData\Local\Claude-Data\claude_pzs8sxrjxfjjc\side-session-notes\kurulus-geri\KUNYE-BOYA-ISTEGI-k3.md', encoding='utf-8').read()
ids = re.findall(r'^- ([a-z0-9-]+) \((kunye var|KUNYE YOK)\)', MD.split('## Kunye omru')[0], re.M)


def git_show(yol):
    return subprocess.run(['git', 'show', 'origin/main:' + yol], capture_output=True, encoding='utf-8').stdout


renk = git_show('arac/renkler.py')
dev = git_show('data/devletler.js')
J = json.load(open('denetim/ONCE1281-DEVLET-LISTESI.json', encoding='utf-8'))
LIS = {k['id']: k for k in J['kayitlar']}
ESL = {}
for k in J['kayitlar']:
    m = (k.get('esleme') or {}).get('mevcut_id')
    if m:
        ESL.setdefault(m, []).append(k['id'])
D38 = {r['id']: r for r in json.load(open('denetim/once1281/KUNYE-DUZELTME-38.json', encoding='utf-8'))}
satir = ['id\tkunye\tboyalar\tkunye_f\tkunye_t\tliste_kaydi\tliste_dogrulama\tsinif_38\tdurum\tnot']
for i, atlas_durum in ids:
    kunye_var = re.search(r'id:\s*"' + re.escape(i) + '"', dev) is not None
    boya_var = re.search(r'["\']' + re.escape(i) + r'["\']\s*:', renk) is not None
    if not boya_var and kunye_var:      # künyenin harita: anahtarı BOYALAR'da mı?
        hm = re.search(r'id:\s*"' + re.escape(i) + r'"[^}]*?harita:\s*"([^"]+)"', dev, re.S)
        if hm and re.search(r'["\']' + re.escape(hm.group(1)) + r'["\']\s*:', renk):
            boya_var = True
    m = re.search(r'id:\s*"' + re.escape(i) + r'"[^}]*?f:\s*"([^"]+)"[^}]*?t:\s*"([^"]+)"', dev, re.S)
    f, t = (m.group(1), m.group(2)) if m else ('', '')
    kayit = LIS.get(i)
    kayitlar = ([i] if kayit else []) + ESL.get(i, [])
    dog = ','.join(sorted({LIS[x]['dogrulama'] for x in kayitlar if x in LIS})) or '-'
    durum = 'boya_tamam' if boya_var else ('boya_bekliyor' if kunye_var else 'kunye_ve_boya_bekliyor')
    sinif = D38[i]['sinif'] if i in D38 else ''
    not_ = ''
    if not kunye_var:
        not_ = 'künye yok: önce künye (era oturumu), sonra BOYALAR'
    elif i in D38 and D38[i]['sinif'] in ('kisalt', 'genislet', 'ardil-kunye'):
        not_ = 'künye f/t düzeltmesi bekleniyor (KUNYE-DUZELTME-38) — boya künye ömründen bağımsız'
    satir.append('\t'.join([i, 'var' if kunye_var else 'yok', 'var' if boya_var else 'yok', f, t, ';'.join(kayitlar), dog, sinif, durum, not_]))
os.makedirs('denetim/once1281/yer-eksik', exist_ok=True)
open('denetim/once1281/yer-eksik/BOYA-BEKLEYEN-KURULUS-GERI.tsv', 'w', encoding='utf-8', newline='\n').write('\n'.join(satir) + '\n')
from collections import Counter
print(len(ids), Counter(s.split('\t')[8] for s in satir[1:]))

"""KURULUS-GERI'nin BOYALAR'da olmayan kimlikleri (KUNYE-BOYA-ISTEGI-k3.md) için: listemde / 38-sınıflandırmada / atlas künyesinde durum."""
import re, json, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
MD = open(r'C:\Users\user\AppData\Local\Claude-Data\claude_pzs8sxrjxfjjc\side-session-notes\kurulus-geri\KUNYE-BOYA-ISTEGI-k3.md', encoding='utf-8').read()
bolum = MD.split('## Kunye omru')[0]
ids = re.findall(r'^- ([a-z0-9-]+) \((kunye var|KUNYE YOK)\)', bolum, re.M)
MEV = {d['id']: d for d in json.load(open('denetim/once1281/mevcut_kunyeler.json', encoding='utf-8'))}
J = json.load(open('denetim/ONCE1281-DEVLET-LISTESI.json', encoding='utf-8'))
LIS = {k['id']: k for k in J['kayitlar']}
REF = {}
for k in J['kayitlar']:
    m = (k.get('esleme') or {}).get('mevcut_id')
    if m:
        REF.setdefault(m, []).append(k)
D38 = {r['id']: r for r in json.load(open('denetim/once1281/KUNYE-DUZELTME-38.json', encoding='utf-8'))}
satir, ozet = [], {'kunye_var': 0, 'kunye_yok': 0, 'listede_dogrulanmis_aday': 0, 'iki_tarafta_yok': 0}
for i, durum in ids:
    k = LIS.get(i)
    r = REF.get(i, [])
    dog = (k or {}).get('dogrulama') or ', '.join(sorted({x['dogrulama'] for x in r})) or '—'
    sayac = 'listede_dogrulanmis_aday' if (k and k['dogrulama'] != 'taslak') or any(x['dogrulama'] != 'taslak' for x in r) else None
    if not k and not r and i not in D38:
        ozet['iki_tarafta_yok'] += 1
    ozet['kunye_var' if durum == 'kunye var' else 'kunye_yok'] += 1
    if sayac:
        ozet[sayac] += 1
    m = MEV.get(i)
    satir.append(f"| `{i}` | {durum} | {(m['f'] + '…' + m['t']) if m else '—'} | {('aday: ' + k['_dilim'] + ' ' + k['dogrulama']) if k else ''}{('eşleşen kayıt: ' + ', '.join(x['id'] + ' ' + x['dogrulama'] for x in r[:3])) if r else ''} | {'38-sınıflandırma: ' + D38[i]['sinif'] if i in D38 else ''} |")
L = ['# KURULUŞ-GERİ BOYASIZ KİMLİKLER — DOĞRULAMA DURUMU', '', f'Kimlik: **{len(ids)}** · ' + ' · '.join(f'{a} {b}' for a, b in ozet.items()), '',
     '| id | durum | atlas f…t | liste | 38 |', '|---|---|---|---|---|'] + satir
open('denetim/once1281/BOYASIZ-DURUM.md', 'w', encoding='utf-8').write('\n'.join(L) + '\n')
print(len(ids), ozet)

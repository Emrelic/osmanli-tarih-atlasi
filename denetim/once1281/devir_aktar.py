"""Devredilebilir kayıtları künye alanlarıyla dışa aktarır (devletler.js'e YAZMAZ).
Kullanım (worktree kökünden): py denetim/once1281/devir_aktar.py <cikti.json> <id> <id> ...
id verilmezse devir_tarafi=VERI-MS1-1281 olan tüm devredilebilirler aktarılır."""
import json, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
J = json.load(open('denetim/ONCE1281-DEVLET-LISTESI.json', encoding='utf-8'))
cikti, ids = sys.argv[1], set(sys.argv[2:])
ALAN = ['id', 'ad', 'ad_yerel', 'tur', 'bolge', 'f', 't', 'kesinlik', 'baskent', 'etkin_bolge', 'sehirler', 'ozet',
        'oncul', 'ardil', 'oncelik', 'kaynak', 'dogrulama', 'ic_not', 'esleme', '_dilim']
sec, yok = [], []
for k in J['kayitlar']:
    if ids and k['id'] not in ids:
        continue
    if not ids and not (k['devredilebilir'] and k['devir_tarafi'] == 'VERI-MS1-1281'):
        continue
    sec.append({a: k.get(a) for a in ALAN})
bulunan = {k['id'] for k in sec}
yok = sorted(ids - bulunan)
json.dump({'not': 'devletler.js künye adayları; f/t kaynaklı değilse dogrulama=taslak. YAZMADAN ÖNCE ham kaynaktan yeniden doğrula.',
           'kayit': sec, 'listede_bulunmayan': yok}, open(cikti, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(sec), 'kayıt;', 'bulunmayan:', yok)

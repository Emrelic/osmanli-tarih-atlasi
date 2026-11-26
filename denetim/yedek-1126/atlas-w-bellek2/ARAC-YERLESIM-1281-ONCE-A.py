# YERLESIM-1281-ONCE · adım A — 162 var-aday noktanın BUGÜNKÜ ilk dönemi + TDV önbelleğinden
# 1180-1280 cümle adayları. data/'ya yazmaz. Çıktı: JSON (argv[1]).
import sys, json, re, os, collections
sys.path.insert(0, 'arac'); import girdi
sys.stdout.reconfigure(encoding='utf-8')
print('GIRDI_DOSYALARI =', len(girdi.GIRDI_DOSYALARI))
Y = {y['ad']: y for y in girdi.yukle(sessiz=True)}
print('evren nokta =', len(Y))
src = json.load(open('denetim/ONCE1281-YERLESIM-0930.json', encoding='utf-8'))
va = [x for x in src['s3_liste'] if x['once1281_varlik'] == 'var-aday']
print('var-aday =', len(va))
ONB = 'denetim/ONCE1281-YERLESIM-tdv-onbellek'
def govde(slug):
    p = os.path.join(ONB, slug + '.txt')
    return open(p, encoding='utf-8', errors='replace').read() if os.path.exists(p) else ''
yil_re = re.compile(r'(?<![\d.])(1[12]\d\d)(?![\d.])')
out = []; say = collections.Counter(); bulunmayan = 0
for x in va:
    y = Y.get(x['ad'])
    if not y:
        bulunmayan += 1
    ilk = None
    if y:
        ps = sorted([p for p in (y.get('s') or [])], key=lambda p: p.get('f', ''))
        ilk = ps[0] if ps else None
    say[(ilk or {}).get('d')] += 1
    g = govde(x['tdv_slug'])
    cum = re.split(r'(?<=[.!?])\s+', re.sub(r'\s+', ' ', g))
    aday = []
    for c in cum:
        ys = [int(m) for m in yil_re.findall(c) if 1180 <= int(m) <= 1280]
        if ys and len(c) < 400:
            aday.append(c)
    out.append({'ad': x['ad'], 'koordinat': x['koordinat'], 'kova': x['kova'], 'slug': x['tdv_slug'],
                'tdv_yil': x['yil'], 'tdv_cumle': x['tdv_cumle'],
                'ilk_donem': {k: v for k, v in (ilk or {}).items() if k in ('f', 't', 'd')},
                'dosya': y.get('_kaynak') if y else None, 'govde_var': bool(g),
                'aday_1180_1280': aday[:8]})
print('atlasta bulunmayan ad =', bulunmayan)
print('ilk dönem sahibi dağılımı:', say.most_common())
json.dump(out, open(sys.argv[1], 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

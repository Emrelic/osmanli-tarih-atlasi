"""Aday devletlerin başkent/şehirlerini atlas yerleşimleriyle eşler; yerleşimin ilk s: dönemi adayın
ömründen SONRA başlıyorsa (ya da s: boşsa) o aday "haritada delik bırakıyor" öncelik sınıfındadır.
Hafif: yalnız veri dosyalarını okur. Kullanım: py denetim/once1281/delik_oncelik.py"""
import sys, io, json, re, unicodedata, collections, contextlib
sys.path.insert(0, 'arac')
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
with contextlib.redirect_stdout(io.StringIO()):
    import girdi
    Y = girdi.yukle(sessiz=True)

TR = str.maketrans({'ı': 'i', 'İ': 'i', 'ş': 's', 'Ş': 's', 'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c',
                    'â': 'a', 'Â': 'a', 'î': 'i', 'Î': 'i', 'û': 'u', 'Û': 'u'})


def norm(s):
    s = unicodedata.normalize('NFKD', s.translate(TR)).lower()
    s = ''.join(c for c in s if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9 ]+', ' ', s).strip()


def yil(s):
    m = re.match(r'(-?\d+)', s or '')
    return int(m.group(1)) if m else None


IDX = collections.defaultdict(list)
for y in Y:
    ad = y['ad']
    parcalar = [ad] + re.findall(r'\(([^)]+)\)', ad) + [re.sub(r'\s*\([^)]*\)', '', ad)]
    for p in parcalar:
        n = norm(p)
        if len(n) >= 4:
            IDX[n].append(y)
    ilk = [yil(p.get('f')) for p in (y.get('s') or []) if p.get('d') not in ('__YOK__',) and yil(p.get('f')) is not None]
    y['_ilk_s'] = min(ilk) if ilk else None

J = json.load(open('denetim/ONCE1281-DEVLET-LISTESI.json', encoding='utf-8'))
out = []
for k in J['kayitlar']:
    if k['esleme']['durum'] != 'eksik' or not k.get('devredilebilir') and k.get('dogrulama') != 'taslak':
        continue
    f, t = yil(k.get('f')), yil(k.get('t'))
    if f is None:
        continue
    adaylar = []
    for ad in re.split(r'\s*(?:→|,|;|/| ve )\s*', str(k.get('baskent') or '')) + list(k.get('sehirler') or []):
        n = norm(re.sub(r'\s*\([^)]*\)', '', ad))
        for y in IDX.get(n, []):
            if y not in adaylar:
                adaylar.append(y)
    delikler = [y for y in adaylar if y['_ilk_s'] is None or y['_ilk_s'] > f + 25]
    if not delikler:
        continue
    out.append({'id': k['id'], 'ad': k['ad'], 'f': k.get('f'), 't': k.get('t'), 'dogrulama': k['dogrulama'],
                'devredilebilir': k['devredilebilir'], 'oncelik': k.get('oncelik'), '_dilim': k['_dilim'],
                'delik_yerlesimler': [{'ad': y['ad'], 'k': y.get('k'), 'ilk_s': y['_ilk_s']} for y in delikler][:8],
                'delik_sayisi': len(delikler)})
out.sort(key=lambda r: (not r['devredilebilir'], -r['delik_sayisi']))
json.dump(out, open('denetim/once1281/DELIK-ONCELIK.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
L = ['# HARİTADA DELİK BIRAKAN ADAY DEVLETLER (öncelik)', '',
     'Ölçüt: adayın başkenti/şehri atlasta bir yerleşim ve o yerleşimin ilk `s:` dönemi adayın `f`inden 25+ yıl sonra (ya da `s:` boş). '
     'Künye yazılırsa o yerleşimlerin ömür başı sahip kazanır (zincir yazımı era/KURULUS-GERI oturumlarında).', '',
     f'Aday: **{len(out)}** · devredilebilir (kaynak okunmuş): **{sum(1 for r in out if r["devredilebilir"])}**', '',
     '| id | ad | f…t | durum | dilim | delik yerleşim (ilk s) |', '|---|---|---|---|---|---|']
for r in out:
    d = ', '.join(f"{y['ad']} ({y['ilk_s']})" for y in r['delik_yerlesimler'][:4])
    L.append(f"| `{r['id']}` | {r['ad']} | {r['f']}…{r['t']} | {r['dogrulama']} | {r['_dilim']} | {d} |")
open('denetim/once1281/DELIK-ONCELIK.md', 'w', encoding='utf-8').write('\n'.join(L) + '\n')
print(len(out), 'aday;', sum(1 for r in out if r['devredilebilir']), 'devredilebilir')

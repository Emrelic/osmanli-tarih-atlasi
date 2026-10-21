"""dilimler/*.json -> denetim/ONCE1281-DEVLET-LISTESI.json + .md  (hafif; yalnız stdlib)
Kullanım (worktree kökünden): py denetim/once1281/birlestir.py
Doğrular: şema, bölge sözlüğü, tarih biçimi, f<=t, mevcut_id gerçekten var mı, id mükerrer mi,
devir dilimi f ile uyumlu mu. İhlalleri 'sorunlar' olarak rapora yazar (kayıt atılmaz)."""
import json, re, glob, os, io, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

BOLGELER = set("""anadolu balkanlar orta-avrupa bati-avrupa kuzey-avrupa dogu-avrupa italya iberya kafkasya iran
mezopotamya suriye-filistin arabistan kuzey-afrika misir-sudan dogu-afrika bati-afrika orta-afrika guney-afrika
orta-asya guney-asya dogu-asya guneydogu-asya sibirya-bozkir kuzey-amerika orta-amerika guney-amerika okyanusya""".split())
ESLEME = {'var', 'var-f-t-farkli', 'var-kisa', 'ardil-var', 'eksik'}
DOGRULAMA = {'okundu', 'kismen-okundu', 'taslak'}
TARIH = re.compile(r'^-?\d{4}-\d{2}-\d{2}$')
ID = re.compile(r'^[a-z0-9]+(-[a-z0-9]+)*$')


def yil(s):
    m = re.match(r'(-?\d+)', s or '')
    return int(m.group(1)) if m else None


def devir(y):
    if y is None: return '?'
    return 'A' if y <= -3000 else 'B' if y <= -500 else 'C' if y < 500 else 'D' if y < 1000 else 'E'


mevcut = json.load(open('denetim/once1281/mevcut_kunyeler.json', encoding='utf-8'))
MEV = {d['id']: d for d in mevcut}
kayitlar, sorunlar, rapor_dosyalari = [], [], []
for yol in sorted(glob.glob('denetim/once1281/dilimler/*.json')):
    ad = os.path.basename(yol)[:-5]
    try:
        veri = json.load(open(yol, encoding='utf-8'))
    except Exception as e:
        sorunlar.append((ad, '-', f'JSON okunamadı: {e}'))
        continue
    if not isinstance(veri, list):
        sorunlar.append((ad, '-', 'kök dizi değil')); continue
    kod, dil = ad.rsplit('_', 1)
    for k in veri:
        k['_dilim'] = ad
        kid = k.get('id', '?')
        def s(m): sorunlar.append((ad, kid, m))
        if not ID.match(str(kid)): s('id biçimi')
        for a in ('ad', 'tur', 'bolge', 'dogrulama', 'esleme'):
            if not k.get(a): s(f'{a} eksik')
        if k.get('bolge') not in BOLGELER: s(f"bolge sözlük dışı: {k.get('bolge')}")
        if k.get('dogrulama') not in DOGRULAMA: s(f"dogrulama: {k.get('dogrulama')}")
        for a in ('f', 't'):
            v = k.get(a)
            if v is not None and not TARIH.match(str(v)): s(f'{a} biçimi: {v}')
        fy, ty = yil(k.get('f')), yil(k.get('t'))
        if fy is not None and ty is not None and (fy, k['f']) > (ty, k['t']): s('f > t')
        if fy is not None and fy >= 1281: s('f >= 1281 (kapsam dışı)')
        if fy is not None and devir(fy) != dil: s(f'dilim {dil} ama f devri {devir(fy)}')
        if not k.get('kaynak'): s('kaynak boş')
        e = k.get('esleme') or {}
        if e.get('durum') not in ESLEME: s(f"esleme.durum: {e.get('durum')}")
        mid = e.get('mevcut_id')
        if e.get('durum') != 'eksik' and not mid: s('esleme var ama mevcut_id yok')
        if mid and mid not in MEV: s(f'mevcut_id atlas künyesinde yok: {mid}')
        if e.get('durum') == 'eksik' and kid in MEV: s('esleme=eksik ama id atlasta var')
        kayitlar.append(k)
    r = yol[:-len(f'_{dil}.json')] + '_RAPOR.md'
    if r not in rapor_dosyalari: rapor_dosyalari.append(r)

# mükerrer id: aynı id birden çok dilimde (bölgeler arası çakışma)
sayac = collections.Counter(k.get('id') for k in kayitlar)
muk = {i: n for i, n in sayac.items() if n > 1}
for i in muk:
    sorunlar.append(('*', i, f'mükerrer id x{sayac[i]}: ' + ','.join(k['_dilim'] for k in kayitlar if k.get('id') == i)))

# mevcut künyelerden hiçbir kayıtla eşlenmeyenler (kapsam denetimi)
esl_id = {(k.get('esleme') or {}).get('mevcut_id') for k in kayitlar}
yetim = sorted(d['id'] for d in mevcut if yil(d.get('f')) is not None and yil(d['f']) < 1281
               and d['id'] not in esl_id and d['id'] not in sayac and d.get('tur') != 'kultur')

tam = {'uretim': 'denetim/once1281/birlestir.py', 'kayit_sayisi': len(kayitlar), 'kayitlar': kayitlar,
       'sorunlar': [{'dilim': a, 'id': b, 'sorun': c} for a, b, c in sorunlar],
       'atlasta_olup_listede_eslesmeyen': yetim}
json.dump(tam, open('denetim/ONCE1281-DEVLET-LISTESI.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

# ---- MD özeti
L = ['# 1281 ÖNCESİ DEVLET LİSTESİ — ÖZET', '',
     f'Üretim: `py denetim/once1281/birlestir.py` · makine okur: `ONCE1281-DEVLET-LISTESI.json` · dilim dosyaları: `denetim/once1281/dilimler/`',
     f'Kayıt: **{len(kayitlar)}** · sorun: **{len(sorunlar)}** · atlasta olup listede eşleşmeyen (kültür hariç): **{len(yetim)}**', '']
L += ['## Bölge × devir (kayıt sayısı)', '', '| bölge kodu | A MÖ12000-3001 | B MÖ3000-501 | C MÖ500-MS499 | D 500-999 | E 1000-1280 | toplam |', '|---|---|---|---|---|---|---|']
g = collections.defaultdict(lambda: collections.Counter())
for k in kayitlar:
    g[k['_dilim'].rsplit('_', 1)[0]][k['_dilim'].rsplit('_', 1)[1]] += 1
tot = collections.Counter()
for kod in sorted(g):
    c = g[kod]; tot.update(c)
    L.append(f"| {kod} | " + ' | '.join(str(c[x]) for x in 'ABCDE') + f' | {sum(c.values())} |')
L.append('| **TOPLAM** | ' + ' | '.join(str(tot[x]) for x in 'ABCDE') + f' | {sum(tot.values())} |')
L += ['', '## Atlas eşlemesi', '', '| durum | sayı |', '|---|---|']
ec = collections.Counter((k.get('esleme') or {}).get('durum') for k in kayitlar)
for d in ['var', 'var-f-t-farkli', 'var-kisa', 'ardil-var', 'eksik']:
    L.append(f'| {d} | {ec[d]} |')
dc = collections.Counter(k.get('dogrulama') for k in kayitlar)
L += ['', f"Doğrulama: okundu {dc['okundu']} · kismen-okundu {dc['kismen-okundu']} · taslak {dc['taslak']}", '']
L += ['## Bölge × eşleme', '', '| bölge kodu | var | f/t farklı | kısa | ardıl | eksik |', '|---|---|---|---|---|---|']
bg = collections.defaultdict(collections.Counter)
for k in kayitlar:
    bg[k['_dilim'].rsplit('_', 1)[0]][(k.get('esleme') or {}).get('durum')] += 1
for kod in sorted(bg):
    c = bg[kod]
    L.append(f"| {kod} | {c['var']} | {c['var-f-t-farkli']} | {c['var-kisa']} | {c['ardil-var']} | {c['eksik']} |")
L += ['', '## EKSİK devletler (atlasta künyesi yok)', '']
eks = sorted((k for k in kayitlar if (k.get('esleme') or {}).get('durum') == 'eksik'),
             key=lambda k: (k['_dilim'], yil(k.get('f')) if yil(k.get('f')) is not None else 0))
cur = None
for k in eks:
    if k['_dilim'] != cur:
        cur = k['_dilim']; L += ['', f'### {cur}']
    L.append(f"- `{k['id']}` {k['ad']} ({k.get('tur')}) {k.get('f')} … {k.get('t')} [{k.get('dogrulama')}] {k.get('oncelik') or ''}")
L += ['', '## Künyesi kısa / f-t çelişkili (düzeltme adayı)', '']
for k in kayitlar:
    e = k.get('esleme') or {}
    if e.get('durum') in ('var-f-t-farkli', 'var-kisa'):
        m = MEV.get(e.get('mevcut_id'), {})
        L.append(f"- `{e.get('mevcut_id')}` atlas {m.get('f')}…{m.get('t')} ↔ liste {k.get('f')}…{k.get('t')} ({e['durum']}): {e.get('not') or ''}")
L += ['', '## Atlasta olup listede eşleşmeyen künyeler (kültür hariç)', '', ', '.join(f'`{i}`' for i in yetim), '']
L += ['## Sorunlar (şema/ölçüm)', '']
for a, b, c in sorunlar[:400]:
    L.append(f'- {a} `{b}`: {c}')
if len(sorunlar) > 400: L.append(f'- … {len(sorunlar) - 400} sorun daha (JSON `sorunlar`)')
L += ['', '## Dilim raporları', '']
for r in rapor_dosyalari:
    L.append(f"- `{r}` {'var' if os.path.exists(r) else 'YOK'}")
open('denetim/ONCE1281-DEVLET-LISTESI.md', 'w', encoding='utf-8').write('\n'.join(L) + '\n')
print(len(kayitlar), 'kayıt;', len(sorunlar), 'sorun;', len(yetim), 'eşleşmeyen atlas künyesi')

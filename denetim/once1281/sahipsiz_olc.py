"""Sahipsizlik ölçümü (hafif; yalnız veri dosyalarını okur, motoru ÇALIŞTIRMAZ).
Sorular: (a) hangi yerleşimin s: dönemi boş/yok? (b) s: içinde künyesi olmayan (devletler.js'te yok) d: kimliği hangileri,
kaç yerleşimde? (c) boyasız (BOYALAR'da olmayan) künye kimlikleri hangi yerleşimlerde? (d) __BOSLUK__ dilimleri.
Çıktı: denetim/once1281/SAHIPSIZ-OLCUM.json + .md. Kullanım (worktree kökünden): py denetim/once1281/sahipsiz_olc.py"""
import sys, io, json, os, collections
sys.path.insert(0, 'arac')
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
import girdi, renkler

Y = girdi.yukle(sessiz=True)
DEV = {d['id']: d for d in girdi.oku_devletler()}
B = renkler.BOYALAR
liste = json.load(open('denetim/ONCE1281-DEVLET-LISTESI.json', encoding='utf-8'))
LISTE = {k['id']: k for k in liste['kayitlar']}


def boyali(i):
    d = DEV.get(i)
    return i in B or (d is not None and d.get('harita') in B)


bos_s, kunyesiz, boyasiz, bosluk = [], collections.defaultdict(list), collections.defaultdict(list), collections.defaultdict(list)
for y in Y:
    s = y.get('s') or []
    k = y.get('k')
    if not s:
        bos_s.append((y['ad'], k))
    for p in s:
        d = p.get('d')
        if d is None:
            continue
        if d == '__BOSLUK__':
            bosluk[y['ad']].append((p.get('f'), p.get('t')))
        elif d == '__YOK__':
            continue
        elif d not in DEV:
            kunyesiz[d].append(y['ad'])
        elif not boyali(d):
            boyasiz[d].append(y['ad'])

k3 = [a for a, k in bos_s if (k is not None and k <= 3)]
cikti = {
    'yerlesim_sayisi': len(Y),
    's_bos_yerlesim': len(bos_s), 's_bos_k_le_3': len(k3), 's_bos_k_le_3_adlar': k3[:300],
    'kunyesiz_d': {d: {'yerlesim_sayisi': len(set(v)), 'ornek': sorted(set(v))[:8], 'devlet_listesinde_aday_var': d in LISTE,
                       'aday_dogrulama': (LISTE[d]['dogrulama'] if d in LISTE else None)}
                   for d, v in sorted(kunyesiz.items(), key=lambda x: -len(set(x[1])))},
    'boyasiz_kunye_d': {d: {'yerlesim_sayisi': len(set(v)), 'ornek': sorted(set(v))[:8],
                            'liste_eslemesi': (DEV[d].get('f'), DEV[d].get('t'))}
                        for d, v in sorted(boyasiz.items(), key=lambda x: -len(set(x[1])))},
    'bosluk_yerlesim_sayisi': len(bosluk), 'bosluk_dilim_sayisi': sum(len(v) for v in bosluk.values()),
}
json.dump(cikti, open('denetim/once1281/SAHIPSIZ-OLCUM.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

L = ['# SAHİPSİZLİK ÖLÇÜMÜ (hafif, veri dosyalarından)', '',
     f"Yerleşim: **{len(Y)}** · `s:` boş/yok: **{len(bos_s)}** (k≤3: **{len(k3)}**) · `__BOSLUK__` taşıyan yerleşim: **{len(bosluk)}** ({cikti['bosluk_dilim_sayisi']} dilim)",
     f"Künyesi OLMAYAN `d:` kimliği: **{len(kunyesiz)}** · künyesi var ama BOYALAR'da olmayan: **{len(boyasiz)}**", '',
     '## Künyesi olmayan d: kimlikleri (en çok kullanılandan)', '', '| id | yerleşim | listede aday | örnek |', '|---|---|---|---|']
for d, v in list(cikti['kunyesiz_d'].items())[:80]:
    L.append(f"| `{d}` | {v['yerlesim_sayisi']} | {v['aday_dogrulama'] or '—'} | {', '.join(v['ornek'][:5])} |")
L += ['', '## Künyesi var, boyası yok (ilk 80)', '', '| id | yerleşim | künye f…t | örnek |', '|---|---|---|---|']
for d, v in list(cikti['boyasiz_kunye_d'].items())[:80]:
    L.append(f"| `{d}` | {v['yerlesim_sayisi']} | {v['liste_eslemesi'][0]}…{v['liste_eslemesi'][1]} | {', '.join(v['ornek'][:5])} |")
open('denetim/once1281/SAHIPSIZ-OLCUM.md', 'w', encoding='utf-8').write('\n'.join(L) + '\n')
print('yerleşim', len(Y), 'boş s', len(bos_s), 'k<=3', len(k3), 'künyesiz d', len(kunyesiz), 'boyasız', len(boyasiz), 'boşluk yerleşim', len(bosluk))

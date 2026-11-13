import json, os, re, sys
H = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(H, '..', '..', '..'))
kay = json.load(open(os.path.join(H, 'kaynaklar-parti3.json'), encoding='utf-8'))
BEKLENEN = 77
if len(kay) != BEKLENEN:
    print('HATA: kayit sayisi', len(kay)); sys.exit(1)
by = {}
for k in kay:
    by.setdefault(k['dosya'], []).append(k)
degisen = 0
for dosya, lst in by.items():
    yol = os.path.join(ROOT, 'data', dosya)
    with open(yol, encoding='utf-8', newline='') as f:
        satirlar = f.read().split('\n')   # CRLF varsa \r satir sonunda kalir
    for k in lst:
        i = k['satir'] - 1
        s = satirlar[i]
        # ilgili alan blogu: 's:[' veya 'v:[' ... kendi satirinda
        # ayni satirda ya da sonraki satirlarda olabilir: kayit bitene kadar (siradaki '{ ad:' satirina) ara
        j = i
        blok_idx = []
        while j < len(satirlar) and (j == i or not satirlar[j].lstrip().startswith('{ ad:')):
            blok_idx.append(j); j += 1
        alan = k['alan']
        rx = re.compile(r'\{f:"%s",t:"%s",(?:[a-z]+:true,)*(?:d:"[^"]*"|k:"[^"]*")' % (re.escape(k['f']), re.escape(k['t'])))
        bulunan = []
        for b in blok_idx:
            for m in rx.finditer(satirlar[b]):
                bulunan.append((b, m))
        # alan filtresi: eslesmenin onundeki 's:[' / 'v:[' anahtari
        sec = []
        for b, m in bulunan:
            onc = satirlar[b][:m.start()]
            a_s, a_v = onc.rfind('s:['), onc.rfind('v:[')
            if b != blok_idx[0] and a_s < 0 and a_v < 0:
                # onceki satirlarda ara
                a = None
                for bb in range(b, blok_idx[0] - 1, -1):
                    t = satirlar[bb] if bb != b else onc
                    x, y = t.rfind('s:['), t.rfind('v:[')
                    if x >= 0 or y >= 0:
                        a = 's' if x > y else 'v'; break
            else:
                a = 's' if a_s > a_v else 'v'
            if a == alan:
                sec.append((b, m))
        if len(sec) != 1:
            print('HATA: eslesme sayisi', len(sec), k['ad'].encode('ascii', 'replace').decode(), k['f'], k['t'], alan); sys.exit(1)
        b, m = sec[0]
        # nesnenin kapanisini bul ('}' - ilk eslesen kapanis; string icinde '}' olmayabilir ama guvenli tara)
        satir = satirlar[b]
        p = m.end()
        # nesne ici: tirnakli dizgileri atlayarak '}' ara
        depth = 1; q = p; ins = False
        while q < len(satir):
            c = satir[q]
            if ins:
                if c == '"': ins = False
            else:
                if c == '"': ins = True
                elif c == '{': depth += 1
                elif c == '}':
                    depth -= 1
                    if depth == 0: break
            q += 1
        if q >= len(satir):
            print('HATA: nesne ayni satirda kapanmiyor', k['ad'].encode('ascii', 'replace').decode(), k['f']); sys.exit(1)
        govde = satir[m.start():q]
        if re.search(r'(^|[,{])kaynak:', govde):
            print('HATA: kaynak zaten var', k['ad'].encode('ascii', 'replace').decode(), k['f'], k['t']); sys.exit(1)
        satirlar[b] = satir[:q] + ',kaynak:"' + k['kaynak'] + '"' + satir[q:]
        degisen += 1
    with open(yol, 'w', encoding='utf-8', newline='') as f:
        f.write('\n'.join(satirlar))
print('degisen nesne:', degisen, 'beklenen:', BEKLENEN, 'ESIT' if degisen == BEKLENEN else 'FARKLI')
sys.exit(0 if degisen == BEKLENEN else 1)

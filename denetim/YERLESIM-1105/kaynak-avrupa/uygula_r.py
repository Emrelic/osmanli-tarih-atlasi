import json, os, re, sys
# Yeniden uygulama: 5 partinin kaynaklar-partiN.json kayitlari, yeni tabana (UMIT celiski2 dahil) uygulanir.
# Satir numarasi degismis olabilir -> kayit AD ile bulunur. Eslesmeyen / zaten kaynakli / coklu eslesen kayit
# ATLANIR (UMIT degistirmis olabilir) ve atlananlar.json'a yazilir. Yalniz-ekleme: mevcut metin degismez.
H = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(H, '..', '..', '..'))
def A_(s): return s.encode('ascii', 'replace').decode()

kay = []
for p in range(1, 6):
    for k in json.load(open(os.path.join(H, 'kaynaklar-parti%d.json' % p), encoding='utf-8')):
        k['parti'] = p
        kay.append(k)
TOPLAM = len(kay)
by = {}
for k in kay:
    by.setdefault(k['dosya'], []).append(k)

degisen = 0
atlanan = []
for dosya, lst in by.items():
    yol = os.path.join(ROOT, 'data', dosya)
    with open(yol, encoding='utf-8', newline='') as f:
        satirlar = f.read().split('\n')
    # kayit baslangic satirlari: ad -> [idx...]
    bas = {}
    for idx, s in enumerate(satirlar):
        m = re.match(r'\s*\{\s*"?ad"?:\s*"((?:[^"\\]|\\.)*)"', s)
        if m:
            bas.setdefault(m.group(1), []).append(idx)
    for k in lst:
        def atla(neden):
            atlanan.append({'parti': k['parti'], 'dosya': dosya, 'ad': k['ad'], 'f': k['f'], 't': k['t'], 'alan': k['alan'], 'neden': neden})
        adaylar = bas.get(k['ad'], [])
        if not adaylar:
            atla('kayit adi bulunamadi'); continue
        i = min(adaylar, key=lambda x: abs(x - (k['satir'] - 1)))
        j = i
        blok_idx = []
        while j < len(satirlar) and (j == i or not re.match(r'\s*\{\s*"?ad"?:', satirlar[j])):
            blok_idx.append(j); j += 1
        alan = k['alan']
        rx = re.compile(r'\{"?f"?:"%s","?t"?:"%s",(?:"?[a-z]+"?:true,)*(?:"?d"?:"[^"]*"|"?k"?:"[^"]*")' % (re.escape(k['f']), re.escape(k['t'])))
        sec = []
        for b in blok_idx:
            for m in rx.finditer(satirlar[b]):
                onc = satirlar[b][:m.start()]
                a_s, a_v = onc.rfind('s:['), onc.rfind('v:[')
                if a_s < 0 and a_v < 0:
                    a = None
                    for bb in range(b - 1, blok_idx[0] - 1, -1):
                        x, y = satirlar[bb].rfind('s:['), satirlar[bb].rfind('v:[')
                        if x >= 0 or y >= 0:
                            a = 's' if x > y else 'v'; break
                else:
                    a = 's' if a_s > a_v else 'v'
                if a == alan:
                    sec.append((b, m))
        if len(sec) != 1:
            atla('f/t eslesmesi %d (donem degismis olabilir)' % len(sec)); continue
        b, m = sec[0]
        satir = satirlar[b]
        depth = 1; q = m.end(); ins = False
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
            atla('nesne ayni satirda kapanmiyor'); continue
        govde = satir[m.start():q]
        if re.search(r'(^|[,{])"?kaynak"?:', govde):
            atla('donemde zaten kaynak var (UMIT/baska commit)'); continue
        anahtar = '"kaynak"' if govde.startswith('{"f"') else 'kaynak'
        satirlar[b] = satir[:q] + ',' + anahtar + ':"' + k['kaynak'] + '"' + satir[q:]
        degisen += 1
    with open(yol, 'w', encoding='utf-8', newline='') as f:
        f.write('\n'.join(satirlar))
json.dump(atlanan, open(os.path.join(H, 'atlananlar-r.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('toplam kayit:', TOPLAM, 'degisen:', degisen, 'atlanan:', len(atlanan), 'TOPLAM==degisen+atlanan:', TOPLAM == degisen + len(atlanan))
for a in atlanan:
    print('ATLA p%d %s | %s %s->%s | %s' % (a['parti'], a['dosya'], A_(a['ad']), a['f'], a['t'], a['neden']))
sys.exit(0 if TOPLAM == degisen + len(atlanan) else 1)

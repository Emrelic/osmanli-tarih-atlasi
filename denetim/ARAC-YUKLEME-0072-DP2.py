# -*- coding: utf-8 -*-
"""YUKLEME-0072 (a) — Douglas-Peucker'i YABANCI havuzunda ve altlik.js'te olc.
Ayrica altlik.js icin ONDALIK KIRPMA kazanci (o dosya 6+ ondalik tasiyor).
Cikti: denetim/YUKLEME-0072-DP2.json
"""
import json, math, os, random, re, sys
sys.stdout.reconfigure(encoding='utf-8')
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def dizi_dilimle(metin, bas):
    ogeler = []; derin = 0; i = bas; oge_bas = None; dize = False; kacis = False; n = len(metin)
    while i < n:
        c = metin[i]
        if dize:
            if kacis: kacis = False
            elif c == '\\': kacis = True
            elif c == '"': dize = False
        elif c == '"': dize = True
        elif c in '[{':
            derin += 1
            if derin == 2 and oge_bas is None: oge_bas = i
        elif c in ']}':
            derin -= 1
            if derin == 1 and oge_bas is not None:
                ogeler.append((oge_bas, i + 1)); oge_bas = None
            elif derin == 0:
                return ogeler, i
        elif c == ',' and derin == 1: oge_bas = None
        i += 1
    return ogeler, n


def dp(nokta, tol):
    if len(nokta) < 3: return nokta[:], 0.0
    tut = [False] * len(nokta); tut[0] = tut[-1] = True
    yigin = [(0, len(nokta) - 1)]; enb = 0.0
    while yigin:
        i, j = yigin.pop()
        if j <= i + 1: continue
        ax, ay = nokta[i]; bx, by = nokta[j]
        dx, dy = bx - ax, by - ay; uz2 = dx * dx + dy * dy
        ek, es = -1.0, -1
        for k in range(i + 1, j):
            px, py = nokta[k]
            if uz2 == 0: d = math.hypot(px - ax, py - ay)
            else:
                t = ((px - ax) * dx + (py - ay) * dy) / uz2
                t = 0.0 if t < 0 else (1.0 if t > 1 else t)
                d = math.hypot(px - (ax + t * dx), py - (ay + t * dy))
            if d > ek: ek, es = d, k
        if ek > tol:
            tut[es] = True; yigin.append((i, es)); yigin.append((es, j))
        elif ek > enb: enb = ek
    return [nokta[k] for k in range(len(nokta)) if tut[k]], enb


def yaz(x):
    s = ('%.5f' % x).rstrip('0').rstrip('.')
    return s if s not in ('', '-0') else '0'


def halkalari_bul(p):
    """ic ice listeden [ [x,y], ... ] halkalarini cikar."""
    cik = []
    def gez(d):
        if isinstance(d, dict):
            for a in ('geometry', 'coordinates', 'features', 'geometries'):
                if a in d: gez(d[a])
            return
        if not isinstance(d, list) or not d: return
        if isinstance(d[0], (int, float)): return
        if isinstance(d[0], list) and d[0] and isinstance(d[0][0], (int, float)):
            cik.append(d); return
        for x in d: gez(x)
    gez(p)
    return cik


def dp_havuz(metin, ogeler, kac, etiket):
    random.seed(72)
    sec = random.sample(range(len(ogeler)), min(kac, len(ogeler)))
    cik = {}
    for ad, tol in (('0,5 km', 0.0045), ('1 km', 0.009), ('2 km', 0.018)):
        hb = yb = 0; dh = dy = 0; es = 0.0
        for i in sec:
            a, b = ogeler[i]
            try: p = json.loads(metin[a:b])
            except Exception: continue
            hb += (b - a)
            parca = []
            for h in halkalari_bul(p):
                y, s = dp([tuple(x) for x in h], tol)
                if len(y) < 4: y = [tuple(x) for x in h]
                dh += len(h); dy += len(y)
                if s > es: es = s
                parca.append('[' + ','.join('[' + yaz(x) + ',' + yaz(q) + ']' for x, q in y) + ']')
            yb += len('[' + ','.join(parca) + ']')
        cik[ad] = {'ornek_oge': len(sec), 'ham_mb': round(hb / 1048576.0, 2), 'yeni_mb': round(yb / 1048576.0, 2),
                   'kalan_yuzde': round(100.0 * yb / hb, 1) if hb else None,
                   'dugum_ham': dh, 'dugum_yeni': dy,
                   'en_buyuk_sapma_km': round(es * 111.0, 2)}
        print('  %-10s %-8s ham %6.2f MB -> %6.2f MB  kalan %5.1f%%  dugum %8d -> %8d  sapma <= %4.2f km'
              % (etiket, ad, cik[ad]['ham_mb'], cik[ad]['yeni_mb'], cik[ad]['kalan_yuzde'], dh, dy, cik[ad]['en_buyuk_sapma_km']))
    return cik


rap = {}
print('--- YABANCI havuzu (DEVLET_PARCALAR) ---')
m = open(os.path.join(KOK, 'data', 'devletler_harita.js'), encoding='utf-8').read()
p = re.search(r'window\.DEVLET_PARCALAR\s*=\s*', m).end()
og, _ = dizi_dilimle(m, p)
rap['yabanci_dp'] = dp_havuz(m, og, 2000, 'yabanci')
# ayni gövde kac kez tekrarliyor? (havuz zaten indeksli; birebir ayni metin var mi)
gor = {}
for a, b in og:
    k = m[a:b]
    gor[k] = gor.get(k, 0) + 1
tek = len(gor); cok = sum(v for v in gor.values() if v > 1)
tekrar_bayt = sum(len(k) * (v - 1) for k, v in gor.items() if v > 1)
rap['yabanci_tekrar'] = {'havuz_oge': len(og), 'benzersiz': tek,
                         'tekrar_eden_oge': len(og) - tek,
                         'tekrardan_kurtarilacak_mb': round(tekrar_bayt / 1048576.0, 2)}
print('  tekrar   : %d oge, %d benzersiz -> birebir tekrar %d oge, %.2f MB'
      % (len(og), tek, len(og) - tek, tekrar_bayt / 1048576.0))
del m, gor

print('--- altlik.js (ALTLIK GeoJSON) ---')
ma = open(os.path.join(KOK, 'data', 'altlik.js'), encoding='utf-8').read()
i = ma.find('window.ALTLIK')
bas = ma.find('{', ma.find('=', i))
derin = 0; dize = False; kacis = False; j = bas
while j < len(ma):
    c = ma[j]
    if dize:
        if kacis: kacis = False
        elif c == '\\': kacis = True
        elif c == '"': dize = False
    elif c == '"': dize = True
    elif c == '{': derin += 1
    elif c == '}':
        derin -= 1
        if derin == 0: break
    j += 1
A = json.loads(ma[bas:j + 1])
print('  ALTLIK anahtarlari:', list(A.keys()))
alt = {}
for k, v in A.items():
    ozl = json.dumps(v, ensure_ascii=False, separators=(',', ':'))
    hh = halkalari_bul(v.get('features', v) if isinstance(v, dict) else v)
    dugum = sum(len(h) for h in hh)
    alt[k] = {'mb': round(len(ozl) / 1048576.0, 2), 'halka': len(hh), 'dugum': dugum}
    print('  %-12s %6.2f MB  %6d halka  %8d dugum' % (k, alt[k]['mb'], len(hh), dugum))
rap['altlik_katman'] = alt

# altlik: ondalik kirpma + DP birlikte
def altlik_kirp(A, ondalik, tol):
    hb = yb = 0; dh = dy = 0; es = 0.0
    for k, v in A.items():
        for h in halkalari_bul(v.get('features', v) if isinstance(v, dict) else v):
            hb += len(json.dumps(h, separators=(',', ':')))
            y, s = (dp([tuple(x) for x in h], tol) if tol else ([tuple(x) for x in h], 0.0))
            if len(y) < 4: y = [tuple(x) for x in h]
            dh += len(h); dy += len(y)
            if s > es: es = s
            f = '%.' + str(ondalik) + 'f'
            yb += len('[' + ','.join('[' + (f % x).rstrip('0').rstrip('.') + ',' + (f % q).rstrip('0').rstrip('.') + ']' for x, q in y) + ']')
    return {'ham_mb': round(hb / 1048576.0, 2), 'yeni_mb': round(yb / 1048576.0, 2),
            'kalan_yuzde': round(100.0 * yb / hb, 1), 'dugum_ham': dh, 'dugum_yeni': dy,
            'en_buyuk_sapma_km': round(es * 111.0, 2)}

print('  --- altlik senaryolar ---')
rap['altlik'] = {}
for ad, ond, tol in (('yalniz 3 ondalik', 3, 0.0), ('3 ondalik + DP 0,5 km', 3, 0.0045), ('3 ondalik + DP 1 km', 3, 0.009)):
    r = altlik_kirp(A, ond, tol)
    rap['altlik'][ad] = r
    print('  %-24s ham %6.2f MB -> %6.2f MB  kalan %5.1f%%  dugum %8d -> %8d  sapma <= %4.2f km'
          % (ad, r['ham_mb'], r['yeni_mb'], r['kalan_yuzde'], r['dugum_ham'], r['dugum_yeni'], r['en_buyuk_sapma_km']))

json.dump(rap, open(os.path.join(KOK, 'denetim', 'YUKLEME-0072-DP2.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('\nJSON: denetim/YUKLEME-0072-DP2.json')

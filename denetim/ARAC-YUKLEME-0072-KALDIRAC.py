# -*- coding: utf-8 -*-
"""YUKLEME-0072 — uc kaldiracin MALIYET/KAZANC olcumu (tahmin degil, olcum).

(a) sadelestirme  : koordinat basamagi + Douglas-Peucker'in gercek kazanci ve sapmasi
(b) devre parcalama: bir gun icin gereken gövde havuzu toplamin yuzde kaci
(c) paralel cekme : dosya basina ayristirma suresi (AYRISTIRMA.json'dan okunur)

Cikti: denetim/YUKLEME-0072-KALDIRAC.json
"""
import json, math, os, re, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = lambda *p: os.path.join(KOK, *p)


def dizi_dilimle(metin, bas):
    """metin[bas] '[' olmak uzere, en ust duzey ogelerin (bas,bit) dilimlerini dondur."""
    assert metin[bas] == '['
    ogeler = []
    derin = 0
    i = bas
    oge_bas = None
    dize = False
    kacis = False
    n = len(metin)
    while i < n:
        c = metin[i]
        if dize:
            if kacis:
                kacis = False
            elif c == '\\':
                kacis = True
            elif c == '"':
                dize = False
        elif c == '"':
            dize = True
        elif c in '[{':
            derin += 1
            if derin == 2 and oge_bas is None:
                oge_bas = i
        elif c in ']}':
            derin -= 1
            if derin == 1 and oge_bas is not None:
                ogeler.append((oge_bas, i + 1))
                oge_bas = None
            elif derin == 0:
                return ogeler, i
        elif c == ',' and derin == 1:
            oge_bas = None
        elif derin == 1 and oge_bas is None and not c.isspace():
            oge_bas = i
            # sayi/atom oge: virgule ya da ]'a kadar
            j = i
            while j < n and metin[j] not in ',]':
                j += 1
            ogeler.append((i, j))
            oge_bas = None
            i = j - 1
        i += 1
    return ogeler, n


def global_span(metin, ad):
    m = re.search(r'window\.' + ad + r'\s*=\s*', metin)
    if not m:
        return None
    return m.end()


def yukle_dizi(metin, ad):
    p = global_span(metin, ad)
    if p is None or metin[p] != '[':
        return None, None
    ogeler, bit = dizi_dilimle(metin, p)
    return ogeler, (p, bit + 1)


# ---------------------------------------------------------------- (a) basamak
def basamak_dagilimi(yol, ornek_bayt=8 * 1024 * 1024):
    s = open(yol, encoding='utf-8').read(ornek_bayt)
    say = {}
    for m in re.finditer(r'-?\d+\.(\d+)', s):
        k = len(m.group(1))
        say[k] = say.get(k, 0) + 1
    tp = sum(say.values()) or 1
    return {str(k): round(100.0 * v / tp, 1) for k, v in sorted(say.items())}, tp


def basamak_kirp_kazanci(yol, hedef, ornek_bayt=8 * 1024 * 1024):
    """Ornek dilimde koordinatlari <hedef> ondalika yuvarlayinca kac bayt gider."""
    s = open(yol, encoding='utf-8').read(ornek_bayt)
    def f(m):
        return ('%.' + str(hedef) + 'f') % float(m.group(0))
    y = re.sub(r'-?\d+\.\d+', f, s)
    # gereksiz sifirlari at (JS sayi yazimi)
    y = re.sub(r'(\.\d*?)0+(?=[,\]\}])', lambda m: m.group(1).rstrip('.') or '', y)
    return len(s), len(y)


# ------------------------------------------------- Douglas-Peucker
def dp(nokta, tol):
    if len(nokta) < 3:
        return nokta[:]
    tut = [False] * len(nokta)
    tut[0] = tut[-1] = True
    yigin = [(0, len(nokta) - 1)]
    enb = 0.0
    while yigin:
        i, j = yigin.pop()
        if j <= i + 1:
            continue
        ax, ay = nokta[i]; bx, by = nokta[j]
        dx, dy = bx - ax, by - ay
        uz2 = dx * dx + dy * dy
        ek, es = -1.0, -1
        for k in range(i + 1, j):
            px, py = nokta[k]
            if uz2 == 0:
                d = math.hypot(px - ax, py - ay)
            else:
                t = ((px - ax) * dx + (py - ay) * dy) / uz2
                t = 0.0 if t < 0 else (1.0 if t > 1 else t)
                d = math.hypot(px - (ax + t * dx), py - (ay + t * dy))
            if d > ek:
                ek, es = d, k
        if ek > tol:
            tut[es] = True
            yigin.append((i, es)); yigin.append((es, j))
        else:
            if ek > enb:
                enb = ek
    return [nokta[k] for k in range(len(nokta)) if tut[k]], enb


def halka_sadelestir(halka, tol):
    y, sapma = dp(halka, tol)
    if len(y) < 4:
        return halka, 0.0
    return y, sapma


def yaz_sayi(x):
    s = ('%.5f' % x).rstrip('0').rstrip('.')
    return s if s not in ('', '-0') else '0'


# ---------------------------------------------------------------- ana
def olc():
    rap = {}

    # ---- havuz buyuklukleri
    for ad, dosya, havuz, donem_ad in (
        ('OSMANLI', 'data/donemler.js', 'PARCALAR', 'DONEMLER'),
        ('YABANCI', 'data/devletler_harita.js', 'DEVLET_PARCALAR', 'DEVLET_HARITA'),
    ):
        yol = D(*dosya.split('/'))
        metin = open(yol, encoding='utf-8').read()
        ogeler, span = yukle_dizi(metin, havuz)
        toplam = os.path.getsize(yol)
        havuz_bayt = span[1] - span[0]
        # donem kayitlari
        dp_ogeler, dspan = yukle_dizi(metin, donem_ad)
        donem_bayt = (dspan[1] - dspan[0]) if dspan else 0
        rap[ad] = {
            'dosya': dosya, 'dosya_mb': round(toplam / 1048576.0, 2),
            'havuz_oge': len(ogeler), 'havuz_mb': round(havuz_bayt / 1048576.0, 2),
            'havuz_yuzde': round(100.0 * havuz_bayt / toplam, 1),
            'donem_kayit': len(dp_ogeler) if dp_ogeler else 0,
            'donem_mb': round(donem_bayt / 1048576.0, 2),
        }
        # ---- (b) bir gun icin gereken havuz payi
        if ad == 'OSMANLI':
            donemler = json.loads(metin[dspan[0]:dspan[1]])
            oge_boy = [b - a for a, b in ogeler]
            pay = {}
            for d in donemler:
                yil = int(d['f'][:4])
                yy = (yil // 100 + 1)
                b = sum(oge_boy[i] for i in d.get('o', []) if i < len(oge_boy))
                b += sum(oge_boy[i] for i in d.get('c', []) if i < len(oge_boy))
                pay[yy] = pay.get(yy, 0) + b
            tp = sum(pay.values()) or 1
            rap[ad]['donem_sayisi'] = len(donemler)
            rap[ad]['yuzyil_payi'] = {str(k) + '. yy': {'mb': round(v / 1048576.0, 2), 'yuzde': round(100.0 * v / tp, 1)}
                                      for k, v in sorted(pay.items())}
            # tek gun: en buyuk tek donem
            enb = max(donemler, key=lambda d: sum(oge_boy[i] for i in d.get('o', []) if i < len(oge_boy)))
            enb_b = sum(oge_boy[i] for i in enb.get('o', []) if i < len(oge_boy))
            rap[ad]['tek_gun_en_buyuk'] = {'donem': enb['f'] + '..' + enb['t'],
                                           'mb': round(enb_b / 1048576.0, 3),
                                           'havuzun_yuzdesi': round(100.0 * enb_b / havuz_bayt, 2)}
            # ---- (a) DP: havuzun ilk N ogesinde olc
            rap[ad]['dp'] = dp_olc(metin, ogeler)

    # ---- basamak dagilimi
    rap['basamak'] = {}
    for dosya in ('data/donemler.js', 'data/devletler_harita.js', 'data/altlik.js'):
        yol = D(*dosya.split('/'))
        dag, n = basamak_dagilimi(yol)
        ham, kirp3 = basamak_kirp_kazanci(yol, 3)
        _, kirp4 = basamak_kirp_kazanci(yol, 4)
        rap['basamak'][dosya] = {'ondalik_dagilim_yuzde': dag, 'ornek_koordinat': n,
                                 'ornek_mb': round(ham / 1048576.0, 2),
                                 '3_ondalik_kalan_yuzde': round(100.0 * kirp3 / ham, 1),
                                 '4_ondalik_kalan_yuzde': round(100.0 * kirp4 / ham, 1)}
    return rap


def dp_olc(metin, ogeler, kac=400):
    """Havuzdan ornek ogeler alip Douglas-Peucker uygular; bayt ve sapma olcer."""
    import random
    random.seed(72)
    sec = random.sample(range(len(ogeler)), min(kac, len(ogeler)))
    cikti = {}
    for tol_km, tol in (('0,5 km', 0.0045), ('1 km', 0.009), ('2 km', 0.018)):
        ham_b = yeni_b = 0
        dugum_h = dugum_y = 0
        en_sapma = 0.0
        for i in sec:
            a, b = ogeler[i]
            try:
                p = json.loads(metin[a:b])
            except Exception:
                continue
            halkalar = p if (p and isinstance(p[0][0], list)) else [p]
            ham_b += (b - a)
            parcalar = []
            for h in halkalar:
                if not h or not isinstance(h[0], list):
                    continue
                y, s = halka_sadelestir([tuple(x) for x in h], tol)
                dugum_h += len(h); dugum_y += len(y)
                if s > en_sapma:
                    en_sapma = s
                parcalar.append('[' + ','.join('[' + yaz_sayi(x) + ',' + yaz_sayi(yy) + ']' for x, yy in y) + ']')
            yeni_b += len('[' + ','.join(parcalar) + ']')
        cikti[tol_km] = {
            'ornek_oge': len(sec),
            'ham_mb': round(ham_b / 1048576.0, 2), 'yeni_mb': round(yeni_b / 1048576.0, 2),
            'kalan_yuzde': round(100.0 * yeni_b / ham_b, 1) if ham_b else None,
            'dugum_ham': dugum_h, 'dugum_yeni': dugum_y,
            'dugum_kalan_yuzde': round(100.0 * dugum_y / dugum_h, 1) if dugum_h else None,
            'en_buyuk_sapma_km': round(en_sapma * 111.0, 2),
        }
    return cikti


if __name__ == '__main__':
    r = olc()
    yol = D('denetim', 'YUKLEME-0072-KALDIRAC.json')
    json.dump(r, open(yol, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print(json.dumps(r, ensure_ascii=False, indent=1))
    print('\nJSON:', yol)

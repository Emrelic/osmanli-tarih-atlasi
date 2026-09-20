# -*- coding: utf-8 -*-
"""M-ALANI-0920 — `glm/M-ALANI-ONERI.json` onerilerinin `m:` SEMASINA uygunlugunu olcer.

NIYE: 20 Eylul'de 2s kapisina yer sarti eklendi; kapinin YER kolu
(denetle.py:1380) `Y_BOLGE = {ad: _2s_norm(y.get("m"))}` diyerek `m:` alanini
BOLGE okuyor. Oysa sema (VERI-YAPISI.md:120):

    m = Bagli oldugu k1/k2 merkezinin ADI — bir yerlesim adina birebir eslesmeli

Bu betik oneri kumesini semaya karsi tarar ve yan hasari sayar. HUKUM VERMEZ,
VERIYE DOKUNMAZ — yalnizca olcer.

Kosum:  py denetim/ARAC-M-ALANI-0920.py
"""
import sys, os, io, contextlib, json, math

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, 'arac')

_buf = io.StringIO()
with contextlib.redirect_stdout(_buf):
    import girdi
    Y = girdi.yukle()
BY = {r['ad']: r for r in Y}


def km(a, b):
    la, lo, lb, lob = map(math.radians, (a['lat'], a['lon'], b['lat'], b['lon']))
    h = math.sin((lb - la) / 2) ** 2 + math.cos(la) * math.cos(lb) * math.sin((lob - lo) / 2) ** 2
    return 6371 * 2 * math.asin(math.sqrt(h))


def k12_acik(r, azami=5):
    """uret_petek.py:1055 k12_merkez() ile ayni yuruyus: zincir k1/k2'ye kapaniyor mu."""
    j = r
    for _ in range(azami):
        if j.get('k') in (1, 2):
            return False
        m = j.get('m')
        if not m or m not in BY:
            return True
        j = BY[m]
    return True


def main():
    print('=' * 72)
    print('M-ALANI-0920 — oneri x sema olcumu')
    print('=' * 72)

    # --- 1. mevcut sozluk
    mevcut = {r['m'] for r in Y if r.get('m')}
    adlar = set(BY)
    bag = sorted(km(r, BY[r['m']]) for r in Y if r.get('m') and r['m'] in BY)
    print('\n[1] MEVCUT m: SOZLUGU')
    print('    dolu kayit           : %d / %d' % (sum(1 for r in Y if r.get('m')), len(Y)))
    print('    benzersiz deger      : %d' % len(mevcut))
    print('    bunlardan yerlesim adi: %d' % len(mevcut & adlar))
    print('    ad TUTMAYAN (eski borc): %s' % sorted(mevcut - adlar))
    print('    bag mesafesi: ortanca %.0f km · %%90 %.0f km · maks %.0f km'
          % (bag[len(bag) // 2], bag[int(len(bag) * .9)], bag[-1]))

    # --- 2. oneriler
    d = json.load(open('glm/M-ALANI-ONERI.json', encoding='utf-8'))
    print('\n[2] ONERILERIN SEMAYA UYUMU')
    for guv in ('YUKSEK', 'ORTA', 'DUSUK'):
        rec = [r for r in d['kayitlar'] if r['guven'] == guv]
        ciftler = {(r['yerlesim'], r['oneri_m']) for r in rec
                   if r['yerlesim'] in BY and r['oneri_m']}
        ad_yok = {c for c in ciftler if c[1] not in BY}
        ad_var = ciftler - ad_yok
        uzak = {c for c in ad_var if km(BY[c[0]], BY[c[1]]) > 300}
        dolu = sum(1 for r in rec if r.get('m_simdi'))
        print('    -- %-7s kayit %4d | benzersiz cift %4d' % (guv, len(rec), len(ciftler)))
        print('       oneri YERLESIM ADI DEGIL (sema ihlali) : %4d cift' % len(ad_yok))
        print('       oneri yerlesim adi                     : %4d cift' % len(ad_var))
        print('          bunlardan >300 km (mevcut %%90 esigi): %4d cift' % len(uzak))
        print('       m: ZATEN DOLU (degistirme onerisi)      : %4d kayit' % dolu)

    # --- 3. yan hasar: gercek sema borcu
    canli = [r for r in Y if (r.get('d') or r.get('v'))]
    zincir_acik = {r['ad'] for r in canli if r.get('k') in (3, 4) and k12_acik(r)}
    acik_2s = {r['yerlesim'] for r in d['kayitlar']}
    kesisim = sorted(acik_2s & zincir_acik)
    print('\n[3] GERCEK SEMA BORCU (motorun kendi uyardigi)')
    print('    canli (d/v olan) kayit                  : %d' % len(canli))
    print('    k3/k4 ve m: zinciri ACIK                : %d' % len(zincir_acik))
    print('    bunlardan 2s acik listesinde de olan    : %d' % len(kesisim))
    for ad in kesisim:
        r = BY[ad]
        print('       %-42s k=%s  %s' % (ad, r.get('k'), r.get('_kaynak')))

    # --- 4. homonim tuzagi
    print('\n[4] HOMONIM TUZAGI (ad tutmasi yetmiyor)')
    ornek = [('Modon', 'Mora'), ('Sevilla', 'Limni'), ('Tallinn (Reval)', 'Batum')]
    for a, o in ornek:
        if a in BY and o in BY:
            print('    %-18s -> %-8s  %6.0f km   (hedef: lat %.2f lon %.2f)'
                  % (a, o, km(BY[a], BY[o]), BY[o]['lat'], BY[o]['lon']))
    if 'Mora (Tripoliçe)' in BY:
        r = BY['Mora (Tripoliçe)']
        print("    KARSILASTIR — 'Mora (Tripoliçe)': lat %.2f lon %.2f  (gercek Mora budur)"
              % (r['lat'], r['lon']))


if __name__ == '__main__':
    main()

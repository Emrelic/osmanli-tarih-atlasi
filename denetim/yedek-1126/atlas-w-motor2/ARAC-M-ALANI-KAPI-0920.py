# -*- coding: utf-8 -*-
"""M-ALANI-0920 (A) olcumu — 2s YER kolundaki `m:` bacagi kaldirilsa acik kac olur?

1.MURAT'in M-4689 sevki: kodu DEGISTIRME; denetle'nin kendi fonksiyonlarini
import edip `m:` bacagini devre disi birakarak OLC.

YONTEM — koda dokunmadan bacagi kesmenin tek dogru yolu:
    denetle.py:1380   Y_BOLGE = {y["ad"]: _2s_norm(y.get("m") or "") for y in Y}
    denetle.py:1479   if bolge and _2s_gecer(...)
`m:` bos string ise `if bolge` yanlis doner ve bacak HIC calismaz. Yani
yerlesim kayitlarinin `m:` alanini bellekte bosaltmak, bacagi kesmeye BIREBIR
denktir. DISKE YAZILMAZ — yalniz bellekteki kopya degisir.

Kosum:  py denetim/ARAC-M-ALANI-KAPI-0920.py
"""
import sys, os, io, contextlib, copy

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, 'arac')

# NOT: import sirasinda stdout YUTULMAZ — denetle.py:32 stdout'un `encoding`
# niteligine bakiyor, StringIO'da o None ve import patliyor. Bannerini bassin.
import denetle


def olc(Y, O):
    """denetle.py:3792-3797 boru hattinin birebir ayni sirasi."""
    Y_cekirdek = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
    kir_s, acik_ham = denetle.degismez2(Y_cekirdek, O, ("s",), yer_sarti=True)
    acik_kapsam, disi_s = denetle.kapsam_disi(Y, acik_ham)
    yil_borc_s, acik_s = denetle.yil_temsili_ayir(acik_kapsam)
    return {'kirilma': len(kir_s), 'acik': len(acik_s),
            'kapsam_disi': len(disi_s), 'yil_borc': len(yil_borc_s),
            'acik_ham': len(acik_ham), 'tarihler': {a[0] for a in acik_s}}


def main():
    with contextlib.redirect_stdout(io.StringIO()):
        Y = denetle.yerlesimleri_yukle()
        O = denetle.olaylari_yukle()

    print('=' * 72)
    print('M-ALANI-0920 (A) — 2s YER kolundaki `m:` bacaginin agirligi')
    print('=' * 72)
    print('\nyerlesim %d · kronoloji maddesi %d' % (len(Y), len(O)))
    print('m: dolu yerlesim: %d' % sum(1 for y in Y if y.get('m')))

    with contextlib.redirect_stdout(io.StringIO()):
        bugun = olc(Y, O)

    # --- bacagi kes: m: alanini bellekte bosalt (diske YAZILMAZ)
    Y2 = copy.deepcopy(Y)
    for y in Y2:
        y['m'] = ''
    with contextlib.redirect_stdout(io.StringIO()):
        bacaksiz = olc(Y2, O)

    print('\n%-26s %10s %10s %8s' % ('', 'BUGUN', 'm: BACAGI', 'FARK'))
    print('%-26s %10s %10s %8s' % ('', '', 'KESILMIS', ''))
    print('-' * 58)
    for ad, k in (('YABANCI kirilmasi', 'kirilma'), ('ham acik', 'acik_ham'),
                  ('KAPSAM DISI', 'kapsam_disi'), ('YIL-TEMSILI BORC', 'yil_borc'),
                  ('>>> ACIK (gun hassas)', 'acik')):
        a, b = bugun[k], bacaksiz[k]
        print('%-26s %10d %10d %+8d' % (ad, a, b, b - a))

    yeni = bacaksiz['tarihler'] - bugun['tarihler']
    print('\n`m:` bacagi SU AN kac tarihi tek basina kapatiyor: %d' % len(yeni))
    if yeni:
        print('ornek tarihler:', ', '.join(sorted(yeni)[:12]))
    print('\nNOT: bu bir ONERI degil OLCUMDUR — kapinin duzeltilmesi ayri is.')
    print('Bugunku 192 acigin tabani budur; `m:` bacagi kaldirilirsa aciklar')
    print('yukaridaki "m: BACAGI KESILMIS" sutununa cikar.')


if __name__ == '__main__':
    main()

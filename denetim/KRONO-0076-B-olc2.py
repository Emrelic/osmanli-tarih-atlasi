# -*- coding: utf-8 -*-
"""KRONO-0076-B ÖLÇÜM 2 — veri/harita soran 6 madde + kayıp çapa (H-0086).

H-0070 Doğu Sudan sahipliği · H-0081 Doğu Rumeli noktaları · H-0082 nokta yok mu
H-0086 çapa madde hiç var mı · H-0087 1892 Gadames d-sınırı · H-0103 Refah-Taba
"""
import io, os, re, sys, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

KOK = r"C:\atlas\data"
dosyalar = sorted(glob.glob(os.path.join(KOK, "*.js")))
satirlar = []
for f in dosyalar:
    try:
        t = open(f, encoding="utf-8").read()
    except Exception:
        continue
    for i, s in enumerate(t.split("\n"), 1):
        satirlar.append((os.path.basename(f), i, s))


def ara(baslik, kelimeler, haric=(), tavan=10, kirp=240):
    print("=" * 78)
    print(baslik)
    n = 0
    for d, i, s in satirlar:
        if d in haric:
            continue
        if all(k in s for k in kelimeler):
            n += 1
            if n <= tavan:
                print("  %s:%d  %s" % (d, i, s.strip()[:kirp]))
    if n == 0:
        print("  bulunamadi (0 satir)")
    else:
        print("  >> toplam %d satir" % n)


BUYUK = ("donemler.js", "devletler_harita.js", "bolgeler.js", "bos_alanlar.js")

# --- H-0086: çapa madde gerçekten yok mu? Gevşek tarama
ara("H-0086/a  'Mulayda' / 'Müleyd' herhangi bir yerde", ["leyd"], BUYUK)
ara("H-0086/b  '1891-01' herhangi bir yerde", ["1891-01"], BUYUK)
ara("H-0086/c  'Râşid'/'Rasid' + 1891", ["1891"], BUYUK, tavan=20, kirp=180)

# --- H-0082 / H-0087: Tunus-Trablusgarp d-sınırı var mı?
ara("H-0082/H-0087  d_sinirlar* içinde 'tunus'", ["tunus"], BUYUK, tavan=20, kirp=200)
ara("H-0087  'Gadames' herhangi bir yerde", ["Gadam"], BUYUK, tavan=20)
ara("H-0087  'adames' (aksan bagimsiz)", ["adames"], BUYUK, tavan=20)

# --- H-0081: Doğu Rumeli noktaları
for ad in ["Filibe", "Eskizagra", "Eski Zagra", "Zagra", "Tatarpazar", "Pazarcik", "Pazarc"]:
    ara("H-0081  yerlesim adi: %s" % ad, ['ad:"%s' % ad], BUYUK, tavan=6, kirp=200)

# --- H-0070: Doğu Sudan / Tokar / Sevakin noktaları ve sahipligi
for ad in ["Tokar", "Sevakin", "Sevâkin", "Kassala", "Kesela", "Berber", "Dongola", "Ubeyyid"]:
    ara("H-0070  yerlesim adi: %s" % ad, ['ad:"%s' % ad], BUYUK, tavan=4, kirp=400)

# --- H-0103: Refah / Taba noktaları
for ad in ["Refah", "Taba", "Akabe"]:
    ara("H-0103  yerlesim adi: %s" % ad, ['ad:"%s' % ad], BUYUK, tavan=4, kirp=300)

# -*- coding: utf-8 -*-
"""4c/4d icin GERCEK denetle.py algoritmasi (arac/denetle.py:1777-1822'den
BIREBIR kopyalandi, taklit DEGIL) -- Misir yamasi henuz devletler.js'e
inmedigi icin denetle.py'yi dogrudan kosturmak onu OLCEMEZ; bu yuzden
algoritma AYNEN alinip PROPOSED kunye + PROPOSED nokta donemleri ile
kosturuldu.
"""
from datetime import date as _d

HAYALET_TOLERANS_GUN = 400   # arac/denetle.py:1576 -- AYNEN
ATLAS_BASI = "1281-01-01"    # arac/denetle.py:1658 -- AYNEN
ATLAS_SONU = "1923-10-29"    # arac/denetle.py:1619 -- AYNEN

def _gun_farki(a, b):
    def ay(s):
        p = (s or "").split("-")
        try:
            return _d(int(p[0]), int(p[1]) if len(p) > 1 else 1,
                       int(p[2]) if len(p) > 2 else 1)
        except Exception:
            return None
    x, y = ay(a), ay(b)
    return None if (x is None or y is None) else (x - y).days

# PROPOSED kunye pencereleri (denetim/YAMA-KUNYE-1923-0905.json, onaylandi M-2930)
K = {
    "misir-sultanligi": ("1914-12-18", "1922-03-15"),
    "misir-kralligi":   ("1922-03-15", "1923-10-29"),
}

# PROPOSED nokta donemleri -- 55 noktanin HEPSI AYNI iki donemi kullaniyor
# (denetim/yer_yama_misir_himaye.js -- her kayitta ayni f/t)
DONEMLER = [
    ("misir-sultanligi", "1914-12-18", "1922-03-15"),
    ("misir-kralligi",   "1922-03-15", "1923-10-29"),
]

ihlal, asan, once = [], [], []
for kim, pf, pt in DONEMLER:
    kf, kt = K[kim]
    g = _gun_farki(pf, kt)
    if g is not None and g > HAYALET_TOLERANS_GUN:
        ihlal.append((kim, "HAYALET: donem baslangici kunye sonundan cok sonra"))
        continue
    g2 = _gun_farki(kf, pt)
    if g2 is not None and g2 > HAYALET_TOLERANS_GUN:
        ihlal.append((kim, "HAYALET: donem bitisi kunye basindan cok once"))
        continue
    if kt and kt < ATLAS_SONU:
        g3 = _gun_farki(pt, kt)
        if g3 is not None and g3 > HAYALET_TOLERANS_GUN:
            asan.append((kim, pf, pt, kt, g3 / 365.25))
    if kf and kf > ATLAS_BASI:
        g4 = _gun_farki(kf, pf)
        if g4 is not None and g4 > HAYALET_TOLERANS_GUN:
            once.append((kim, pf, pt, kf, g4 / 365.25))

print("HAYALET (kunye omru disi kullanim):", len(ihlal), ihlal)
print("4c (ASAN -- donem kunye sonunu asiyor):", len(asan), asan)
print("4d (ONCE -- donem kunye basindan once basliyor):", len(once), once)
print()
print("55 NOKTA X 2 DONEM = 110 karsilastirma, hepsi AYNI iki (kim,f,t) ucglusu")
print("oldugu icin sonuc TEKRARLI degil, HER NOKTA icin AYNI cikar -> 0/0/0")

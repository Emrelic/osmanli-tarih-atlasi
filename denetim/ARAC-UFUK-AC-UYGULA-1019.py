# -*- coding: utf-8 -*-
"""UFUK acilisi (MO 12000): girdi.py (TUZ) + js/app.js. Eslesme sayisi dogrulanir.
UFUK[0] = "-11999-01-01" (astronomik yil: MO 12000 = -11999). VERI_UFKU DEGISMEZ.
girdi.py'deki ufuk/gol/kd dizgi kiyaslari da gun.py sayacina cevrilir (C3'un girdi ayagi)."""
import sys


def oku(yol):
    raw = open(yol, "rb").read()
    return raw.decode("utf-8-sig"), raw[:3] == b"\xef\xbb\xbf"


def yaz(yol, s, bom):
    open(yol, "wb").write((b"\xef\xbb\xbf" if bom else b"") + s.encode("utf-8"))


HATA = []


def degistir(s, eski, yeni, say=1):
    if "\r\n" in s:
        eski, yeni = eski.replace("\n", "\r\n"), yeni.replace("\n", "\r\n")
    n = s.count(eski)
    if n != say:
        HATA.append("ESLESME %d (beklenen %d): %r" % (n, say, eski[:90]))
        return s
    return s.replace(eski, yeni)


g, gb = oku("arac/girdi.py")
g = degistir(g, 'UFUK = ("1000-01-01", "2000-12-31")', 'UFUK = ("-11999-01-01", "2000-12-31")   # MÖ 12000 (astronomik -11999) .. MS 2000')
g = degistir(g, 'import re\n', 'import re\nimport gun as _gun     # C3: tarih KIYASI gün sayacıyla (dizgi MÖ\'de ters)\n', 1)
g = degistir(g, 'if p.get("f", "") <= gun < p.get("t", "9999"):',
             'if _gun.gun(p.get("f") or "-99999") <= _gun.gun(gun) < _gun.gun(p.get("t") or "99999"):')
g = degistir(g, 'if UFUK[0] < VERI_UFKU[0]:', 'if _gun.gun(UFUK[0]) < _gun.gun(VERI_UFKU[0]):')
g = degistir(g, 'if VERI_UFKU[1] < UFUK[1]:', 'if _gun.gun(VERI_UFKU[1]) < _gun.gun(UFUK[1]):')
g = degistir(g, 'if gf >= UFUK[1] or gt <= UFUK[0]:', 'if _gun.gun(gf) >= _gun.gun(UFUK[1]) or _gun.gun(gt) <= _gun.gun(UFUK[0]):')
g = degistir(g, 'if gf > UFUK[0] or gt < UFUK[1]:', 'if _gun.gun(gf) > _gun.gun(UFUK[0]) or _gun.gun(gt) < _gun.gun(UFUK[1]):')
g = degistir(g, '''(UFUK[0], gf) if gf > UFUK[0] else None,
                                (gt, UFUK[1]) if gt < UFUK[1] else None) if x]''',
             '''(UFUK[0], gf) if _gun.gun(gf) > _gun.gun(UFUK[0]) else None,
                                (gt, UFUK[1]) if _gun.gun(gt) < _gun.gun(UFUK[1]) else None) if x]''')

a, ab = oku("js/app.js")
a = degistir(a, 'var BASLANGIC = gunIdx("1000-01-01");', 'var BASLANGIC = gunIdx("-11999-01-01");')

if HATA:
    sys.exit("\n".join(HATA))
yaz("arac/girdi.py", g, gb)
yaz("js/app.js", a, ab)
print("tamam")

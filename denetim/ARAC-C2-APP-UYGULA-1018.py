# -*- coding: utf-8 -*-
"""C2 kalani: js/app.js ve js/gelistirici.js'te HAM tarih dizgisi kiyaslayan 14 yeri gunIdx/GUN.gun'a cevirir.
(gunIdx zaten GUN sayacina bagli; kalan yerler p.f <= gs gibi dizgi kiyasiydi: MO'de ters, 3 haneli yilda yanlis.)
Eslesme sayisi dogrulanir. Kullanim: py denetim/ARAC-C2-APP-UYGULA-1018.py"""
import sys


def oku(yol):
    raw = open(yol, "rb").read()
    return raw.decode("utf-8-sig"), raw[:3] == b"\xef\xbb\xbf"


def yaz(yol, s, bom):
    open(yol, "wb").write((b"\xef\xbb\xbf" if bom else b"") + s.encode("utf-8"))


HATA = []


def degistir(s, eski, yeni, say=1):
    n = s.count(eski)
    if n != say:
        HATA.append("ESLESME %d (beklenen %d): %r" % (n, say, eski[:80]))
        return s
    return s.replace(eski, yeni)


a, abom = oku("js/app.js")
a = degistir(a, 'function (a, b) { return a.f < b.f ? -1 : a.f > b.f ? 1 : 0; }',
             'function (a, b) { return gunIdx(a.f) - gunIdx(b.f); }', 2)
a = degistir(a, 'function (a, b) { return a.t < b.t ? -1 : a.t > b.t ? 1 : 0; }',
             'function (a, b) { return gunIdx(a.t) - gunIdx(b.t); }', 2)
a = degistir(a, 'var aktif = p.f <= gs && gs < p.t;',
             'var aktif = gunIdx(p.f) <= gunIdx(gs) && gunIdx(gs) < gunIdx(p.t);')
a = degistir(a, '(gs < p.f ? "henüz başlamadı"', '(gunIdx(gs) < gunIdx(p.f) ? "henüz başlamadı"')
for k in ("d", "v", "s"):
    a = degistir(a, 'if ((p = y.%s[i]).f <= gun && gun < p.t)' % k,
                 'if (gunIdx((p = y.%s[i]).f) <= gunIdx(gun) && gunIdx(gun) < gunIdx(p.t))' % k)
a = degistir(a, 'return a.f < b.f ? a : b;', 'return gunIdx(a.f) < gunIdx(b.f) ? a : b;')
a = degistir(a, 'return a.t > b.t ? a : b;', 'return gunIdx(a.t) > gunIdx(b.t) ? a : b;')
a = degistir(a, 'if (p.f <= gs && gs < p.t) ad += " · işgal: "',
             'if (gunIdx(p.f) <= gunIdx(gs) && gunIdx(gs) < gunIdx(p.t)) ad += " · işgal: "')

a = degistir(a, 'var g = Object.keys(uc).sort();',
             'var g = Object.keys(uc).sort(function (a, b) { return gunIdx(a) - gunIdx(b); });')

a = degistir(a, 'if (u.f && u.f > o.t) return;                       // henüz katılmadı',
             'if (u.f && gunIdx(u.f) > gunIdx(o.t)) return;       // henüz katılmadı')
a = degistir(a, 'if (u.t && u.t < o.t) return;                       // ayrıldı',
             'if (u.t && gunIdx(u.t) < gunIdx(o.t)) return;       // ayrıldı')

g, gbom = oku("js/gelistirici.js")
g = degistir(g, 'if (r.f <= gun && (gun < r.t || (gun === r.t && r.t === "2000-12-31")))',
             'if (GUN.gun(r.f) <= GUN.gun(gun) && (GUN.gun(gun) < GUN.gun(r.t) || (gun === r.t && r.t === "2000-12-31")))')

if HATA:
    sys.exit("\n".join(HATA))
yaz("js/app.js", a, abom)
yaz("js/gelistirici.js", g, gbom)
print("tamam")

# -*- coding: utf-8 -*-
"""C1: arac/denetle.py tarih dizgisi kiyaslarini gun.py sayacina cevirir + negatif yil kapisini baglar.
Kullanim: py denetim/ARAC-C1-DENETLE-UYGULA-1018.py   (cwd = depo koku). Her degisiklik eslesme sayisini dogrular."""
import re, sys
YOL = "arac/denetle.py"
s = open(YOL, encoding="utf-8-sig").read()
bom = open(YOL, "rb").read(3) == b"\xef\xbb\xbf"
ilk = s
HATA = []


def degistir(eski, yeni, say=1):
    global s
    n = s.count(eski)
    if n != say:
        HATA.append("ESLESME %d (beklenen %d): %r" % (n, say, eski[:90]))
        return
    s = s.replace(eski, yeni)


def regex(rx, yeni, say):
    global s
    s, n = re.subn(rx, yeni, s)
    if n != say:
        HATA.append("REGEX ESLESME %d (beklenen %d): %s" % (n, say, rx))


degistir('''from girdi import UFUK, VERI_UFKU, UFUK_DAMGASI, ufuk_devirleri
''', '''from girdi import UFUK, VERI_UFKU, UFUK_DAMGASI, ufuk_devirleri

# 🆕 C1 · GUN-SAYACI: tarih KIYASI yalniz gun sayisiyla (dizgi MO'de ters, 3 haneli yilda yanlis).
#   Gecersiz tarihte FIRLATIR — None donup ihlali sessizce gecirmek yasak (eski _gun_farki).
_GN_ONB = {}


def gn(s):
    n = _GN_ONB.get(s)
    if n is None:
        n = _GN_ONB[s] = _gun.gun(s)
    return n
''')
degistir('return (not g) or g < UFUK[0] or g > UFUK[1] or g in UFUK_DAMGASI',
         'return (not g) or gn(g) < gn(UFUK[0]) or gn(g) > gn(UFUK[1]) or g in UFUK_DAMGASI')
# f <= g < t kalibi
regex(r'(\w+(?:\[[^\]\n]+\])?)\["f"\] <= (\w+) < (\w+(?:\[[^\]\n]+\])?)\["t"\]',
      r'gn(\1["f"]) <= gn(\2) < gn(\3["t"])', 9)
regex(r'\b(a|b)\["f"\] < (a|b)\["t"\]', r'gn(\1["f"]) < gn(\2["t"])', 4)
degistir('p["f"] < t and p["t"] > f', 'gn(p["f"]) < gn(t) and gn(p["t"]) > gn(f)')
degistir('gunler = [g for g in gunler if df <= g < dt]', 'gunler = [g for g in gunler if gn(df) <= gn(g) < gn(dt)]')
degistir('if kur and kur > g:', 'if kur and gn(kur) > gn(g):')
regex(r'\b(y|yj)\["kur"\] > g\b', r'gn(\1["kur"]) > gn(g)', 1)
regex(r'\b(y|yj)\["bit"\] <= g\b', r'gn(\1["bit"]) <= gn(g)', 1)
degistir('if f <= g < t:', 'if gn(f) <= gn(g) < gn(t):', 3)
degistir('(p.get("f") or "0000") <= gun < (p.get("t") or "9999")',
         'gn(p.get("f") or "-9999") <= gn(gun) < gn(p.get("t") or "9999")', 4)
degistir('return (p.get("f") or "") < ufuk[1] and (p.get("t") or "9999") > ufuk[0]',
         'return gn(p.get("f") or "-9999") < gn(ufuk[1]) and gn(p.get("t") or "9999") > gn(ufuk[0])')
degistir('if not (f <= gun and (gun <= t if bitis_dahil else gun < t)):',
         'if not (gn(f) <= gn(gun) and (gn(gun) <= gn(t) if bitis_dahil else gn(gun) < gn(t))):')
degistir('return any(f <= gun < t for f, t in tabi_pen.get(taraf, ()))',
         'return any(gn(f) <= gn(gun) < gn(t) for f, t in tabi_pen.get(taraf, ()))')
degistir('aktif = [g for f, t, g in pencereler if f <= gun < t]', 'aktif = [g for f, t, g in pencereler if gn(f) <= gn(gun) < gn(t)]')
degistir("p.f||'0000'", "p.f||'-9999'")
degistir('L = [a for a in aralik.get(k[0], ()) if a[3] <= gun < a[4]]',
         'L = [a for a in aralik.get(k[0], ()) if gn(a[3]) <= gn(gun) < gn(a[4])]')
# min/max/sorted: dizgi sirasi -> gun sirasi
degistir('key=pad)', 'key=lambda x: gn(pad(x)))', 2)
degistir('sorted(O, key=lambda o: o["t"])', 'sorted(O, key=lambda o: gn(o["t"]))', 2)
degistir('key=lambda p: p["f"])', 'key=lambda p: gn(p["f"]))')
degistir('''    return (sorted(g for g in gunler if g and g < f_),
            sorted(g for g in gunler if g and g >= f_))''',
         '''    return (sorted((g for g in gunler if g and gn(g) < gn(f_)), key=gn),
            sorted((g for g in gunler if g and gn(g) >= gn(f_)), key=gn))''')

# _gun_farki / _gun_no: datetime.date KALDIR; gecersiz tarihte FIRLAT (eski: negatif yilda None -> ihlal gorunmez)
degistir('''def _gun_farki(a, b):
    from datetime import date as _d

    def ay(s):
        p = (s or "").split("-")
        try:
            return _d(int(p[0]), int(p[1]) if len(p) > 1 else 1,
                      int(p[2]) if len(p) > 2 else 1)
        except Exception:
            return None
    x, y = ay(a), ay(b)
    return None if (x is None or y is None) else (x - y).days
''', '''def _gun_farki(a, b):
    """a - b (gun). Bos/None girdi -> None (uc yok); GECERSIZ tarih FIRLATIR.
    Eski hali date() ile MO yilda None donup 'olculemedi'yi sessizce gecirirdi."""
    if not a or not b:
        return None
    return gn(a) - gn(b)
''')
degistir('''def _gun_no(t):
    p = (t + "-01-01").split("-")
    return date(int(p[0]), int(p[1]), int(p[2])).toordinal()''',
         '''def _gun_no(t):
    return gn(t) + 719163''')

# --- yil kesme / date aritmetigi (MO'de cokerdi ya da sessizce yanlis okurdu) ---
degistir('            if bit and bit <= g:\n', '            if bit and gn(bit) <= gn(g):\n')
degistir('''gunler = ["%04d-06-15" % yil for yil in range(int(df[:4]), int(dt[:4]) + 1, 10)]''',
         '''gunler = [_gun.dizgi(_gun.gun_sayisi(yil, 6, 15))
                  for yil in range(_gun.yil(gn(df)), _gun.yil(gn(dt)) + 1, 10)]''')
degistir('''                import datetime
                yy, mm, dd = int(g[:4]), int(g[5:7]), int(g[8:10])
                for yon in (-1, 1):
                    try:
                        alt = (datetime.date(yy, mm, dd)
                               + datetime.timedelta(days=yon * kaydir)).isoformat()
                    except Exception:
                        continue
''', '''                for yon in (-1, 1):
                    alt = _gun.dizgi(gn(g) + yon * kaydir)
''')
degistir('if ilk > "%04d-01-01" % (int(VERI_UFKU[0][:4]) + SUPHE_ESIK_YIL):',
         'if gn(ilk) > _gun.gun_sayisi(_gun.yil(gn(VERI_UFKU[0])) + SUPHE_ESIK_YIL, 1, 1):')
degistir('and ilk <= VERI_UFKU[0][:4] + "-12-31"):',
         'and gn(ilk) <= _gun.gun_sayisi(_gun.yil(gn(VERI_UFKU[0])), 12, 31)):')
degistir('''        p = g.split("-")
        try:
            return (date(int(p[0]), int(p[1]), int(p[2]))
                    + timedelta(days=gun)).isoformat()
        except Exception:
            return g
''', '''        return _gun.dizgi(gn(g) + gun)
''')
degistir('''    from datetime import date, timedelta
    try:
        # DENETLE-TARIH-KALAN-1008: `fromisoformat` dört haneli yıl ister;
        # "330-05-11" pad()'siz SESSİZCE None dönüyordu (gün düşüyordu).
        return (date.fromisoformat(pad(g)) - timedelta(days=1)).isoformat()
    except ValueError:
        return None
''', '''    # C1: date.fromisoformat yil < 1'i ve 3 haneli yili reddedip None donuyordu (gun sessizce
    # dusuyordu). Sayac 908 / -2999'u dogru okur; GECERSIZ tarih FIRLATIR.
    return _gun.dizgi(gn(g) - 1)
''')
degistir('''gun = sum((date.fromisoformat(pad(s)) - date.fromisoformat(pad(b))).days
                  for b, s, _, _ in farklar)''', '''gun = sum(gn(s) - gn(b) for b, s, _, _ in farklar)''')

if HATA:
    sys.exit("\n".join(HATA))
if s == ilk:
    sys.exit("degisiklik yok")
open(YOL, "w", encoding="utf-8-sig" if bom else "utf-8", newline="").write(s)
print("tamam")

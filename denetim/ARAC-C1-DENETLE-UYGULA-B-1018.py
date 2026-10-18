# -*- coding: utf-8 -*-
"""C1 ikinci tur: denetle.py'de kalan tek-harfli degisken (f, t, df, dt...) dizgi kiyaslari.
Siralama: ARAC-C1-DENETLE-UYGULA -> bu -> ARAC-C1-KAPI-BAGLA. Eslesme sayisi dogrulanir."""
import sys
YOL = "arac/denetle.py"
raw = open(YOL, "rb").read()
bom = raw[:3] == b"\xef\xbb\xbf"
s = raw.decode("utf-8-sig")
HATA = []


def degistir(eski, yeni, say=1):
    global s
    n = s.count(eski)
    if n != say:
        HATA.append("ESLESME %d (beklenen %d): %r" % (n, say, eski[:80]))
        return
    s = s.replace(eski, yeni)


degistir('''        araliklar.sort()
''', '''        araliklar.sort(key=lambda a: (gn(a[0]), gn(a[1])))
''')
degistir('''            if f <= birlesik[-1][1]:
                birlesik[-1][1] = max(birlesik[-1][1], t)''',
         '''            if gn(f) <= gn(birlesik[-1][1]):
                birlesik[-1][1] = max(birlesik[-1][1], t, key=gn)''')
degistir('if bit and bit <= bas:', 'if bit and gn(bit) <= gn(bas):')
degistir('if kt and pad(kt) < ATLAS_SONU:', 'if kt and gn(pad(kt)) < gn(ATLAS_SONU):')
degistir('if kf and pad(kf) > ATLAS_BASI:', 'if kf and gn(pad(kf)) > gn(ATLAS_BASI):')
degistir('        if t <= g1:\n', '        if gn(t) <= gn(g1):\n')
degistir('''                if f == t:
                    sifir.append((y["ad"], kat, f))
                elif f > t:''', '''                if gn(f) == gn(t):
                    sifir.append((y["ad"], kat, f))
                elif gn(f) > gn(t):''')
degistir('if u and f < u < t:', 'if u and gn(f) < gn(u) < gn(t):')
degistir('kes = sorted(kes) + [t]', 'kes = sorted(kes, key=gn) + [t]')
degistir('gunler = sorted({f} | {df for df, dt in uclar if f < df < t})',
         'gunler = sorted({f} | {df for df, dt in uclar if gn(f) < gn(df) < gn(t)}, key=gn)')
degistir('if df < t and f < dt and sahip != k["kime"]:', 'if gn(df) < gn(t) and gn(f) < gn(dt) and sahip != k["kime"]:')
degistir('max(df, f), min(dt, t), sahip)', 'max(df, f, key=gn), min(dt, t, key=gn), sahip)')
degistir('h.get("f") or h.get("tarih") or "0000"', 'h.get("f") or h.get("tarih") or "-9999"')
degistir('if not (hf <= t and f <= ht):', 'if not (gn(hf) <= gn(t) and gn(f) <= gn(ht)):')

if HATA:
    sys.exit("\n".join(HATA))
open(YOL, "wb").write((b"\xef\xbb\xbf" if bom else b"") + s.encode("utf-8"))
print("tamam")

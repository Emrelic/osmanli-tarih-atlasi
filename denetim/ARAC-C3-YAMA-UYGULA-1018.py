# -*- coding: utf-8 -*-
"""C3 yamasini arac/uret_petek.py'ye uygular (YENIDEN URETILEBILIR: yama bu betikle uretilir).
Kullanim: py denetim/ARAC-C3-YAMA-UYGULA-1018.py        (cwd = depo koku)
Her degisiklik beklenen sayida eslesmeyi DOGRULAR; eslesme sayisi tutmazsa durur.
Ayrica denetim/ARAC-C3-YAMA-UYGULA-1018.py yalniz uret_petek.py'yi degistirir; commit etmez."""
import re, sys
import os
YOL = os.path.join(sys.argv[1] if len(sys.argv) > 1 else ".", "arac", "uret_petek.py")   # [KOK]: sinav gecici kopyada uygular
s = open(YOL, encoding="utf-8").read()
ilk = s


def degistir(eski, yeni, say=1):
    global s
    n = s.count(eski)
    if n != say:
        sys.exit("ESLESME %d (beklenen %d): %r" % (n, say, eski[:90]))
    s = s.replace(eski, yeni)


def regex(rx, yeni, say):
    global s
    s, n = re.subn(rx, yeni, s)
    if n != say:
        sys.exit("REGEX ESLESME %d (beklenen %d): %s" % (n, say, rx))


# ① KESIT_SON + sayac yardimcilari (datetime.date KALDIRILIR: yil < 1'i reddeder)
degistir('''KESIT_SON = (_dt.date.fromisoformat(girdi.UFUK[1])
             + _dt.timedelta(days=3)).isoformat()
''', '''# 🆕 C3 · GUN-SAYACI (arac/gun.py): tarih KIYASI/SIRALAMASI yalniz tam sayi gunle yapilir.
#   Dizgi kiyasi MO'de TERS (\"-0499\" < \"-2999\") ve 3 haneli yilda yanlis (\"900\" > \"1281\");
#   datetime.date yil < 1'i REDDEDER. Isaret, arac/gun.py `motor_sayacli_mi` kapisinin okudugu
#   TEK beyandir — yalniz denetim/ARAC-C3-DIZGI-KIYAS-TARAMA-1018.py 0 supheli verince konur.
import gun as _GUNMOD
GUN_SAYACI = True
_GN_ONB = {}


def gn(s):
    \"\"\"tarih dizgisi -> gun sayisi (onbellekli). Gecersizde FIRLATIR (None donmek yasak).\"\"\"
    n = _GN_ONB.get(s)
    if n is None:
        n = _GN_ONB[s] = _GUNMOD.gun(s)
    return n


def gsirala(it):
    \"\"\"tarihleri GUN sirasina dizer; ayni gunun farkli yazimi dizgiyle sabit sirada.\"\"\"
    return sorted(it, key=lambda t: (gn(t), t))


KESIT_SON = _GUNMOD.dizgi(_GUNMOD.gun(girdi.UFUK[1]) + 3)
_EPOK_N, _KESIT_SON_N = gn(EPOK), gn(KESIT_SON)
''')

# ② sorted(t for t in X if EPOK <= t <= KESIT_SON)  (4 bicim)
regex(r'sorted\((\w+) for \1 in (\w+) if EPOK <= \1 <= KESIT_SON\)',
      r'gsirala(\1 for \1 in \2 if _EPOK_N <= gn(\1) <= _KESIT_SON_N)', 4)
degistir('_gun = sorted(g for g in _gun if isinstance(g, str) and EPOK <= g <= KESIT_SON)',
         '_gun = gsirala(g for g in _gun if isinstance(g, str) and _EPOK_N <= gn(g) <= _KESIT_SON_N)')
degistir('''                if EPOK <= _g <= KESIT_SON:
                    _gk2.add(_g)
        L["gunler"] = sorted(_gk2)''', '''                if _EPOK_N <= gn(_g) <= _KESIT_SON_N:
                    _gk2.add(_g)
        L["gunler"] = gsirala(_gk2)''')
degistir('if not (EPOK < _g <= KESIT_SON):', 'if not (_EPOK_N < gn(_g) <= _KESIT_SON_N):')
degistir('''_epok_gun = sorted({y["kur"] for y in YERLER if y.get("kur")}
                   | {y["bit"] for y in YERLER if y.get("bit")})''',
         '''_epok_gun = gsirala({y["kur"] for y in YERLER if y.get("kur")}
                    | {y["bit"] for y in YERLER if y.get("bit")})''')
degistir('_kkb_gun = sorted({g for j in hj for g in _KKB_NOKTA_GUN.get(j, ())})',
         '_kkb_gun = gsirala({g for j in hj for g in _KKB_NOKTA_GUN.get(j, ())})')
# bisect: dizgi listesi uzerinde -> sayi anahtariyla (python >= 3.10 key=)
degistir('_kk_i = bisect.bisect_right(_kkb_gun, a) if _kkb_gun is not None else None',
         '_kk_i = bisect.bisect_right(_kkb_gun, gn(a), key=gn) if _kkb_gun is not None else None')

# ③ f <= a < t kalibi:  X["f"] <= a < Y["t"]
regex(r'(\w+(?:\[[^\]\n]+\])?)\["f"\] <= (\w+) < (\w+(?:\[[^\]\n]+\])?)\["t"\]',
      r'gn(\1["f"]) <= gn(\2) < gn(\3["t"])', 22)
degistir('return any(f <= a < t for f, t in _SK_TABI.get(p, ()))',
         'return any(gn(f) <= gn(a) < gn(t) for f, t in _SK_TABI.get(p, ()))')
# kur / bit
regex(r'(\w+)\["kur"\] > (\w+)\b', r'gn(\1["kur"]) > gn(\2)', 5)
regex(r'(\w+)\["bit"\] <= (\w+)\b', r'gn(\1["bit"]) <= gn(\2)', 5)

# ④ SINIR-KISIT pencere sabitleri: "0000" (= MO 1!) acik-baslangic isareti OLAMAZ
degistir('p.get("f") or "0000"', 'p.get("f") or "-9999"')
degistir('_skr.get("f") or "0000"', '_skr.get("f") or "-9999"')
degistir('if _skt2 <= EPOK or _skf >= KESIT_SON or _skt2 <= _skf:',
         'if gn(_skt2) <= _EPOK_N or gn(_skf) >= _KESIT_SON_N or gn(_skt2) <= gn(_skf):')
degistir('_g0 = max(_skf, EPOK)', '_g0 = max(_skf, EPOK, key=gn)')

# ⑤ min/max donem uclari
degistir('"f": min(dn["f"] for dn in ara), "t": max(dn["t"] for dn in ara),',
         '"f": min((dn["f"] for dn in ara), key=gn), "t": max((dn["t"] for dn in ara), key=gn),')
# ⑥ rapor/ekran
degistir('if "1830-01-01" <= d["f"] <= "1842-12-31":',
         'if gn("1830-01-01") <= gn(d["f"]) <= gn("1842-12-31"):')
degistir('_once = [g for g in OLCU_KESIT if g < _oyn[0][0][:10]]',
         '_once = [g for g in OLCU_KESIT if gn(g) < gn(_oyn[0][0][:10])]')
# ⑦ tarihler dizisinin sonundaki kenar kontroller (esitlik) dizgi esitligidir: gunle
degistir('if tarihler[0] != EPOK: tarihler.insert(0, EPOK)', 'if gn(tarihler[0]) != _EPOK_N: tarihler.insert(0, EPOK)')
degistir('if tarihler[-1] != KESIT_SON: tarihler.append(KESIT_SON)', 'if gn(tarihler[-1]) != _KESIT_SON_N: tarihler.append(KESIT_SON)')

regex(r'if (_wts|ts)\[0\] != EPOK:', r'if gn(\1[0]) != _EPOK_N:', 3)
regex(r'if ts\[-1\] != KESIT_SON:', r'if gn(ts[-1]) != _KESIT_SON_N:', 2)

if s == ilk:
    sys.exit("degisiklik yok")
open(YOL, "w", encoding="utf-8", newline="").write(s)
print("tamam")

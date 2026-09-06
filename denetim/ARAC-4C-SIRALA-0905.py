# -*- coding: utf-8 -*-
"""`4c` KOVASINI SIRALA — ve `4d` ILE KESISIMINI OLC.

Sevk: 1.MURAT M-2856 ③. Oturum NEHIR SURTUNME, 5 Eylul 2026. SALT OKUMA.

🔴 TANIM `denetle.py`DEN OKUNDU, koordinatorun tarifinden DEGIL
   (M-2856 ④'un sarti). Kodun kendi satirlari:

   `4c` (asan):  donem, devletin OLUMUNU ASIYOR
       if kt and kt < ATLAS_SONU:           ← atlas sonuna kadar yasayan
           g3 = _gun_farki(p["t"], kt)        kunyeler HARIC
           if g3 > TOL: asan.append(...)

   `4d` (once):  donem, devletin DOGUMUNDAN ONCE basliyor
       if kf and kf > ATLAS_BASI:           ← atlas basindan once dogan
           g4 = _gun_farki(kf, p["f"])        kunyeler HARIC
           if g4 > TOL: once.append(...)

🔴 VE KODUN KENDI YORUMU: *"`continue` YOK: bir donem UCUNE DE dusebilir
   (zend tam boyle — kunyeyi IKI UCTAN DA asiyor). Kesisim AYRI basilir."*
   ⇒ Bu arac o kesisimi OLCER.

⚠️ SIMULATOR FARKI, ACIKCA: `denetle.py` bu dongude YALNIZ `s:` okur.
   Bu arac da YALNIZ `s:` okur — `isg:` yamasi HENUZ INMEDI.
"""
import io
import os
import sys
import importlib.util as _ilu
from collections import defaultdict
from datetime import date

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
ATLAS_BASI, ATLAS_SONU, TOL = "1281-01-01", "1923-10-29", 400

# ⑩ KOL (7 Eylül 2026): pad() artık ORTAK — dört ayrı alette ayrı ayrı
# yazılmış olması üç haneli yıl tuzağının (dubrovnik·nube·bu alet·ardıl
# kontrolü·yemen-zeydi) beşinci vakasına sebep oldu. Bkz. ARAC-TARIH-0907.py.
_spec = _ilu.spec_from_file_location(
    "_tarih0907", os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                "ARAC-TARIH-0907.py"))
_tarih0907 = _ilu.module_from_spec(_spec)
_spec.loader.exec_module(_tarih0907)
pad = _tarih0907.pad


def _g(s):
    if not s:
        return None
    p = str(s).split("-")
    try:
        return date(int(p[0]), int(p[1]) if len(p) > 1 else 1,
                    int(p[2]) if len(p) > 2 else 1)
    except (ValueError, IndexError):
        return None


def fark(a, b):
    x, y = _g(a), _g(b)
    return None if (x is None or y is None) else (x - y).days


def main():
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    os.chdir(KOK)
    sys.path.insert(0, os.path.join(KOK, "arac"))
    import girdi

    Y = girdi.yukle(sessiz=True)
    D = girdi.oku_devletler()
    K = {d["id"]: (d.get("f"), d.get("t")) for d in D if d.get("id")}
    grup = defaultdict(list)
    for d in D:
        if d.get("harita") and d.get("f") and d.get("t"):
            grup[d["harita"]].append((d["f"], d["t"]))
    H = {h: (min(x[0] for x in v), max(x[1] for x in v))
         for h, v in grup.items()}

    c_say, d_say, ikisi = defaultdict(int), defaultdict(int), defaultdict(int)
    c_max, c_ornek = {}, defaultdict(list)
    for y in Y:
        for p in (y.get("s") or []):
            kim = p.get("d")
            if not kim:
                continue
            if kim in K:
                kf, kt = K[kim]
            elif kim in H:
                kf, kt = H[kim]
            else:
                continue
            g = fark(p.get("f"), kt) if kt else None
            if g is not None and g > TOL:
                continue
            g2 = fark(kf, p.get("t")) if kf else None
            if g2 is not None and g2 > TOL:
                continue
            c = d = False
            if kt and pad(kt) < ATLAS_SONU:
                g3 = fark(p.get("t"), kt)
                if g3 is not None and g3 > TOL:
                    c = True
                    c_say[kim] += 1
                    yil = g3 / 365.25
                    if kim not in c_max or yil > c_max[kim]:
                        c_max[kim] = yil
                    if len(c_ornek[kim]) < 3:
                        c_ornek[kim].append(y["ad"])
            if kf and pad(kf) > ATLAS_BASI:
                g4 = fark(kf, p.get("f"))
                if g4 is not None and g4 > TOL:
                    d = True
                    d_say[kim] += 1
            if c and d:
                ikisi[kim] += 1

    print("🔴 ADAY LISTESI, HUKUM DEGIL. Ust sira 'yanlis' degil 'BUYUK'.\n")
    print("`4c` toplam: %d kayit · %d kimlik" % (sum(c_say.values()),
                                                 len(c_say)))
    print("`4d` toplam: %d kayit · %d kimlik" % (sum(d_say.values()),
                                                 len(d_say)))
    print("🔴 IKISINE BIRDEN dusen: %d kayit · %d kimlik\n"
          % (sum(ikisi.values()), len(ikisi)))

    print("%-26s %5s %5s %6s  %-12s %-12s %s"
          % ("kimlik", "4c", "4d", "ikisi", "kunye t:", "en buyuk", "ornek"))
    print("-" * 100)
    for kim, n in sorted(c_say.items(), key=lambda x: -x[1])[:26]:
        kt = (K.get(kim) or H.get(kim) or ("?", "?"))[1]
        print("%-26s %5d %5d %6d  %-12s %6.1f yil  %s"
              % (kim[:26], n, d_say.get(kim, 0), ikisi.get(kim, 0),
                 kt, c_max[kim], ", ".join(c_ornek[kim])[:30]))

    if ikisi:
        print("\n═══ 🔴 IKI UCTAN DA ASANLAR (kodun 'zend tam boyle' dedigi)")
        for kim, n in sorted(ikisi.items(), key=lambda x: -x[1]):
            kf, kt = (K.get(kim) or H.get(kim) or ("?", "?"))
            print("   %-26s %4d kayit   kunye %s → %s" % (kim[:26], n, kf, kt))


if __name__ == "__main__":
    main()

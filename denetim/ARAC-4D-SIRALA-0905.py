# -*- coding: utf-8 -*-
"""`4d` KOVASINI KATKIYA GORE SIRALA — LISTE, HUKUM DEGIL.

Sevk: 1.MURAT M-2852 ②. Oturum NEHIR SURTUNME, 5 Eylul 2026.
SALT OKUMA.

`4d` = donem, kunyesinin DOGUMUNDAN once basliyor (denetle.py:1817).
Bu arac her kimligin o kovaya KAC KAYITLA katildigini sayar ve
kunye penceresiyle veride kullanilan en erken gunu yan yana koyar.

🔴 CIKTI BIR ADAY LISTESIDIR, BIR HUKUM DEGIL. Bir kimligin listede
   ust sirada olmasi "yanlis" demek DEGIL — yalnizca "buyuk" demek.
   Her satir ayrica kaynakla sinanir.
"""
import io
import os
import sys
import importlib.util as _ilu
from collections import defaultdict
from datetime import date

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
ATLAS_BASI, ATLAS_SONU, TOL = "1281-01-01", "1923-10-29", 400

# ⑩ KOL (7 Eylül 2026): pad() artık ORTAK, bkz. ARAC-TARIH-0907.py.
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

    sayac = defaultdict(int)
    enerken = {}
    ornek = defaultdict(list)
    for y in Y:
        for alan in ("d", "s", "v", "isg"):
            for p in (y.get(alan) or []):
                kim = p.get("d")
                if not kim:
                    continue
                if kim in K:
                    kf, kt = K[kim]
                elif kim in H:
                    kf, kt = H[kim]
                else:
                    continue
                # ihlal daliyla ayni sirayi izle
                g = fark(p.get("f"), kt) if kt else None
                if g is not None and g > TOL:
                    continue
                g2 = fark(kf, p.get("t")) if kf else None
                if g2 is not None and g2 > TOL:
                    continue
                if kf and pad(kf) > ATLAS_BASI:
                    g4 = fark(kf, p.get("f"))
                    if g4 is not None and g4 > TOL:
                        sayac[kim] += 1
                        f = p.get("f")
                        if kim not in enerken or f < enerken[kim]:
                            enerken[kim] = f
                        if len(ornek[kim]) < 3:
                            ornek[kim].append(y["ad"])

    print("🔴 BU BIR ADAY LISTESIDIR, BIR HUKUM DEGIL.")
    print("   Ust sirada olmak 'yanlis' demek degil, 'BUYUK' demek.\n")
    print("`4d` toplam: %d kayit · %d kimlik\n" % (sum(sayac.values()),
                                                   len(sayac)))
    print("%-26s %5s  %-12s %-12s  %s"
          % ("kimlik", "kayit", "kunye f:", "en erken", "ornek"))
    print("-" * 96)
    for kim, n in sorted(sayac.items(), key=lambda x: -x[1])[:30]:
        kf = (K.get(kim) or H.get(kim) or ("?", "?"))[0]
        yil = None
        try:
            yil = (_g(pad(kf)) - _g(enerken[kim])).days // 365
        except Exception:
            pass
        print("%-26s %5d  %-12s %-12s  %s%s"
              % (kim[:26], n, kf, enerken[kim],
                 ", ".join(ornek[kim])[:34],
                 ("  (%d yil erken)" % yil) if yil else ""))


if __name__ == "__main__":
    main()

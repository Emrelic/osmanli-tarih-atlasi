# -*- coding: utf-8 -*-
"""KITA 13 — "ARADA NE VAR?" (SALT OKUR)

Emre'nin H-0005'te koydugu KURAL:
   "bir toprak enklav sekilde bir devletin topraklarindan kopup
    kaybediliyor ise veya enklav seklinde kazaniliyor ise bu durumda
    ARADAKI TOPRAKLARIN GERCEKTE NE OLDUGUNU SORGULAMALI."

Bu alet o soruyu MAKINEYE SORULABILIR hale getirir: bir nokta ve bir gun
verildiginde, en yakin N komsuyu ve O GUNKU SAHIPLERINI basar.

⇒ Boylece `CLAUDE.md §2`nin ilk sorusu ("o bolgede yerlesim noktasi var
   mi?") ile Emre'nin sorusu ("arada ne var?") AYNI CIKTIDA cevaplanir.

Kullanim:
    py denetim/ARAC-KITA13-ARADA-NE-VAR-0912.py <gun> <ad> [<ad> ...]
    py denetim/ARAC-KITA13-ARADA-NE-VAR-0912.py 1514-09-30 Doğubeyazıt
"""
import os, sys, io, importlib.util

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

_spec = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm

import girdi

Y = girdi.yukle(sessiz=True)
IX = {}
for y in Y:
    IX.setdefault(norm(y.get("ad", "")), y)


def sahip(y, g):
    """Motorun sirasi: d: > v: > s: > isg:  (app.js ile ayni)."""
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tâbi:" + str(p.get("d"))
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return p.get("d")
    return "SAHİPSİZ"


def isgal(y, g):
    for p in (y.get("isg") or []):
        if p.get("f") <= g < p.get("t"):
            return p.get("d")
    return None


def bul(ad):
    n = norm(ad)
    if n in IX:
        return IX[n]
    aday = [y for k, y in IX.items() if n in k]
    if len(aday) == 1:
        return aday[0]
    if len(aday) > 1:
        # en kisa ad = en az ek tasiyan, muhtemelen aranan
        aday.sort(key=lambda y: len(y.get("ad", "")))
        return aday[0]
    return None


def main():
    gun = sys.argv[1]
    N = 8
    print("# gün: %s · taban: %d nokta" % (gun, len(Y)))
    for ad in sys.argv[2:]:
        y = bul(ad)
        print("=" * 78)
        if y is None:
            print('🔴 "%s" ARANDI, ATLASTA YOK — §2: noktasız bölge, komşu '
                  "peteği emer" % ad)
            continue
        s0 = sahip(y, gun)
        i0 = isgal(y, gun)
        print('"%s"  (%s, %s)   %s%s'
              % (y.get("ad"), y.get("lat"), y.get("lon"), s0,
                 ("  [isg:%s]" % i0) if i0 else ""))
        komsu = []
        for z in Y:
            if z is y:
                continue
            la, lo = z.get("lat"), z.get("lon")
            if la is None or lo is None:
                continue
            komsu.append((girdi.km(y["lat"], y["lon"], la, lo), z))
        komsu.sort(key=lambda x: x[0])
        farkli = 0
        for d, z in komsu[:N]:
            sz = sahip(z, gun)
            im = "  " if sz == s0 else "🔴"
            if sz != s0:
                farkli += 1
            iz = isgal(z, gun)
            print("   %s %6.1f km  %-28s %s%s"
                  % (im, d, (z.get("ad") or "")[:27], sz,
                     ("  [isg:%s]" % iz) if iz else ""))
        print("   ⇒ en yakın %d komşunun %d'i FARKLI sahipte"
              % (N, farkli))
        if farkli == N:
            print("   🔴🔴 TAM ENKLAV: hiçbir komşusu aynı sahipte değil")


main()

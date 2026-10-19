# -*- coding: utf-8 -*-
"""eksklav_olc.py (Degismez 7e) tarih dizgisi kiyaslarini gun.py sayacina cevirir + `bit:` DIKKATE ALINIR.
Neden: UFUK MO'ye acilip Sumer noktalari (kur:/bit: NEGATIF) girince 7e 1910 -> 2258'e siciradi: V kumesi yalniz
`kur > g` ariyor, `bit` hic okunmuyordu ve "-2699" > "1303" dizgi kiyasi False => MO noktasi 1303'te CANLI sayildi."""
import sys

YOL = "arac/eksklav_olc.py"
raw = open(YOL, "rb").read()
bom = raw[:3] == b"\xef\xbb\xbf"
s = raw.decode("utf-8-sig")
nl = "\r\n" if "\r\n" in s else "\n"
HATA = []


def degistir(eski, yeni, say=1):
    global s
    eski, yeni = eski.replace("\n", nl), yeni.replace("\n", nl)
    n = s.count(eski)
    if n != say:
        HATA.append("ESLESME %d (beklenen %d): %r" % (n, say, eski[:80]))
        return
    s = s.replace(eski, yeni)


degistir("import math\n", "import math\nimport os\nimport sys\n\nsys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))\nimport gun as _gun     # C1: tarih kiyasi gun sayacıyla (dizgi MÖ'de ters)\n")
degistir('if p.get("f") and p.get("t") and p["f"] <= g < p["t"]:',
         'if p.get("f") and p.get("t") and _gun.gun(p["f"]) <= _gun.gun(g) < _gun.gun(p["t"]):')
degistir('if p.get("f") and p.get("t") and p.get("d") and p["f"] <= g < p["t"]:',
         'if p.get("f") and p.get("t") and p.get("d") and _gun.gun(p["f"]) <= _gun.gun(g) < _gun.gun(p["t"]):')
degistir("if u and bas <= u < son:", "if u and _gun.gun(bas) <= _gun.gun(u) < _gun.gun(son):")
degistir("    return sorted(g)\n", "    return sorted(g, key=_gun.gun)\n")
degistir('V = tuple(i for i, y in enumerate(Y) if not (y.get("kur") and y["kur"] > g))',
         'V = tuple(i for i, y in enumerate(Y)\n'
         '                  if not (y.get("kur") and _gun.gun(y["kur"]) > _gun.gun(g))\n'
         '                  and not (y.get("bit") and _gun.gun(y["bit"]) <= _gun.gun(g)))')
degistir("for g in sorted(R):", "for g in sorted(R, key=_gun.gun):")
if HATA:
    sys.exit("\n".join(HATA))
open(YOL, "wb").write((b"\xef\xbb\xbf" if bom else b"") + s.encode("utf-8"))
print("tamam")

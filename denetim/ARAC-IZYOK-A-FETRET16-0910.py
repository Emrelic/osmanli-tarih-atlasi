# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — parti-emrelic-0018/H-0004'un 16 NOKTASI (SALT OKUR).

O madde 1406'da Rumeli'de sehzade kimligi TASIMAYAN 16 noktayi ADIYLA
sayiyor ve "DUZELTME NET: o 16 noktaya Fetret donemi yazilacak" diyor.

parti-emrelic-0019/H-0004 ise ayni kusuru UC nokta icin duzeltmis
(Ignada · Rezve · Ahtapolu).

⇒ Soru: 16'nin kaci BUGUN sehzade kimligi tasiyor?

ONGORU (olcumden ONCE, D022): 0019 yamasi ucunu indirdi; 16'nin
en az 3'u duzelmis olmali. Kalan 13 icin bir sey ONGORMUYORUM —
baska bir oturum onlara dokunmus olabilir.
"""
import os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
import importlib.util

_spec = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm

ONALTI = ["Uzunköprü", "Havsa", "Meriç", "Orestiada", "Sofulu", "Dedeağaç",
          "Lalapaşa", "Kofçaz", "Dereköy", "Demirköy", "İğneada",
          "Mustafapaşa", "Elhova", "Malko Tırnova", "Ahtapolu", "Rezve"]

SEHZADE = {"suleyman-celebi", "isa-celebi", "mehmed-celebi", "musa-celebi"}
GUN = "1406-06-15"   # maddenin kendi kesiti: 1406

Y = girdi.yukle(sessiz=True)
ix = {}
for y in Y:
    ix.setdefault(norm(y.get("ad", "")), y)


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSMANLI (duz d:)"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tabi:" + str(p.get("d"))
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return p.get("d")
    return "SAHIPSIZ"


print("# taban: %d nokta · kesit %s" % (len(Y), GUN))
print()
duzelen, kalan, bulunamayan = [], [], []
for ad in ONALTI:
    a = norm(ad)
    y = ix.get(a)
    if y is None:
        aday = [v for k, v in ix.items() if a in k]
        y = aday[0] if len(aday) == 1 else None
    if y is None:
        bulunamayan.append(ad)
        print("  %-18s ARANDI, YOK (normallestirici ile)" % ad)
        continue
    s = sahip(y, GUN)
    im = "🟢" if s in SEHZADE else "🔴"
    (duzelen if s in SEHZADE else kalan).append(y.get("ad"))
    print("  %s %-18s -> %s" % (im, y.get("ad"), s))

print()
print("SEHZADE kimligi TASIYAN : %d" % len(duzelen))
print("HALA duz d:/baska       : %d   %s" % (len(kalan), ", ".join(kalan)))
print("bulunamayan             : %d   %s" % (len(bulunamayan), ", ".join(bulunamayan)))

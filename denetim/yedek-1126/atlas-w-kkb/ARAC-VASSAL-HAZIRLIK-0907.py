# -*- coding: utf-8 -*-
"""VASSAL ETIKET — HANGI ADIM INMIS, HANGISI EKSIK?

HUKUM-VASSAL-GORUNUM-0906.md dort adim sayiyor:
  1. girdi.py  -> BILINEN_DONEM_ALANLARI'na `kid` VE `statu`
  2. yama      -> 279 donem `kid:` + 429 donem `statu:"vassal"`
  3. js/app.js -> renk + lejant + etiket
  4. denetle.py + renk_olc.py

Brifing "VASSAL ETIKET bloke: donemler.js `k`/`statu` tasimiyor ⇒
uret_petek degisikligi sart" diyor. Bu betik hangisinin gercekten
eksik oldugunu OLCER — devralmaz.
"""
import collections
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi   # noqa: E402

print("=" * 66)
print("ADIM 1 — girdi.py alan kutugu")
print("=" * 66)
kutuk = getattr(girdi, "BILINEN_DONEM_ALANLARI", None)
if kutuk is None:
    print("  🔴 BILINEN_DONEM_ALANLARI YOK")
else:
    print("  kutuk: %s" % ", ".join(sorted(kutuk)))
    for a in ("kid", "statu"):
        print("  %-6s %s" % (a, "🟢 VAR" if a in kutuk else "🔴 YOK"))

print()
print("=" * 66)
print("ADIM 2 — veride `v:` donemleri")
print("=" * 66)
Y = girdi.yukle(sessiz=True)
if len(Y) < 3000:
    raise SystemExit("SESSIZ SIFIR")
v_toplam = 0
alan_say = collections.Counter()
statu_deger = collections.Counter()
k_deger = collections.Counter()
nokta_v = 0
for y in Y:
    vs = y.get("v") or []
    if vs:
        nokta_v += 1
    for p in vs:
        v_toplam += 1
        for a in p:
            alan_say[a] += 1
        if "statu" in p:
            statu_deger[p["statu"]] += 1
        if p.get("k"):
            k_deger[p["k"]] += 1
print("  `v:` donemi %d · tasiyan nokta %d" % (v_toplam, nokta_v))
print("  ALAN DAGILIMI: %s" % " · ".join(
    "%s %d" % (a, n) for a, n in alan_say.most_common()))
print("  statu: %s" % (dict(statu_deger) or "🔴 HIC YOK"))
print("  farkli `k` degeri: %d" % len(k_deger))
print("  en sik k: %s" % " · ".join(
    "%s(%d)" % (k[:26], n) for k, n in k_deger.most_common(6)))
terimsiz = [k for k in k_deger if not any(
    t in k.lower() for t in ("vassal", "özerk", "ozerk", "himaye",
                             "haraç", "harac", "ocaklık", "ocaklik",
                             "voyvoda", "tâbi", "tabi"))]
print("  `k` metninde TERIM tasimayan deger: %d / %d"
      % (len(terimsiz), len(k_deger)))

print()
print("=" * 66)
print("ADIM 3/4 — uretilen donemler.js")
print("=" * 66)
d = os.path.join(KOK, "data", "donemler.js")
metin = open(d, encoding="utf-8", errors="replace").read()
print("  boyut %.1f MB" % (len(metin) / 1048576))
for anahtar in ('"v":', '"av":', '"statu"', '"vk"', '"vl"'):
    print("  %-9s %s" % (anahtar, "VAR" if anahtar in metin else "🔴 YOK"))
print()
print("HUKUM: `kayit['v']` TEK BIRLESIK govde (uret_petek.py:4800) —")
print("  `unary_union([_pe[j] for j in tabi])` kimligi ORADA kaybediyor.")
print("  Etiket icin gereken sey GEOMETRI DEGIL, grup basina bir CAPA:")
print("     {k, statu, nokta}  ⇒ app.js etiketi oraya koyar")

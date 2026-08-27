# -*- coding: utf-8 -*-
"""YAYIN ZINCIRI — kosu bittikten sonraki adimlari SIRAYLA kosturur
ve HER KAPIDA DURUR.

🔴 PUSH YAPMAZ. Sebep olculmus: `renk_olc.py`nin tek `sys.exit`i bir
   alt-komutun icinde, yani DUZ KOSU HER ZAMAN 0 DONER. Bir zincir
   cikis koduna guvenirse dort cakismayi "gecti" sayar. Bu betik
   cikis kodunu DEGIL, CIKTIYI onume koyar; hukmu insan verir.

Kullanim:  py yayin_zinciri.py <ATLAS_KOK>
"""
import os, subprocess, sys, io, datetime

KOK = sys.argv[1] if len(sys.argv) > 1 else os.environ.get("ATLAS_KOK")

def yaz(s):
    print(str(s).encode("ascii", "replace").decode("ascii"))

def kos(ad, komut, log):
    yaz("")
    yaz("=" * 66)
    yaz(">> %s" % ad)
    yaz("=" * 66)
    ly = os.path.join(KOK, log)
    with io.open(ly, "w", encoding="utf-8") as f:
        p = subprocess.run(komut, cwd=KOK, stdout=f,
                           stderr=subprocess.STDOUT, text=True,
                           encoding="utf-8", errors="replace")
    ham = io.open(ly, encoding="utf-8", errors="replace").read()
    yaz("cikis kodu: %d   (log: %s)" % (p.returncode, log))
    return p.returncode, ham

ADIMLAR = [
    ("uret_devirler.py", ["py", "arac/uret_devirler.py"], "y_devirler.log"),
    ("denetle.py",       ["py", "arac/denetle.py"],       "y_denetle.log"),
    ("renk_olc.py",      ["py", "arac/renk_olc.py"],      "y_renk.log"),
]

sonuc = []
for ad, k, lg in ADIMLAR:
    kod, ham = kos(ad, k, lg)
    # her adimin KARAR SATIRLARINI one cikar
    anahtar = ("SONUÇ:", "SONUC:", "çakışma", "cakisma", "görünmez",
               "gorunmez", "Doğrulama", "antlaşma", "antlasma",
               "Traceback", "✗", "🔴")
    onemli = [s for s in ham.splitlines()
              if any(a in s for a in anahtar)][-14:]
    for s in onemli:
        yaz("   " + s.strip())
    sonuc.append((ad, kod))

yaz("")
yaz("=" * 66)
yaz("ZINCIR BITTI — SONRAKI ADIMLAR ELDE, OTOMATIK DEGIL")
yaz("=" * 66)
for ad, kod in sonuc:
    yaz("   %-20s cikis %d" % (ad, kod))
yaz("")
yaz("⚠️ CIKIS KODU KAPI DEGILDIR — renk_olc duz kosuda HER ZAMAN 0 doner.")
yaz("   Yukaridaki CIKTI satirlarini oku, sonra:")
yaz("     py arac/surum_damgala.py")
yaz("     py arac/denetle_yayin.py")
yaz("     git add/commit -F <dosya>  &&  git push")
yaz("     tarayicida ac ve GOZLE dogrula")

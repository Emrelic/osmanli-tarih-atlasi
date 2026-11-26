# -*- coding: utf-8 -*-
"""Bir `--oner` artefaktini `arac/renkler.py`ye BOYALAR'a aktarir.

    py denetim/ARAC-RENK-AKTAR-0903.py <artefakt.txt> [--yaz] [--not "<metin>"]

🔴 NICIN CAPA ONEMLI — 3 Eylul 2026, ilk deneme BOZUK CIKTI:
   ekleme noktasi `ham.rstrip().rfind("\\n}")` ile arandi ve DOSYANIN SON
   `}`sini buldu (satir 3507) — BOYALAR'in kapanisi 2901'deydi. 143 satir
   BASKA BIR YAPININ icine yazildi, `BOYALAR` 407'de kaldi ve 143 hex
   "UYUSMADI" cikti. Betik bunu kendi yakaladi ve geri alindi.
   📌 §11'in "yorumdaki suslu parantez != kaydin suslu parantezi"
      dersinin dosya sonu hali: SON `}` aradiginin `}`si DEGILDIR.
   ⇒ CARE: son KAYIT SATIRINA capa at, ve TEK oldugunu DOGRULA.

⚠️ VE ONEMLI BIR SIRA KURALI: aktarimdan ONCE hedef kimliklerin
   BOYALAR'da OLMAMASI gerekir. Ikinci gecis kosturuluyorsa once
   `git checkout -- arac/renkler.py` ile onceki aktarim GERI ALINIR —
   yoksa cozucu kendi kotu renklerini ENGEL sayar.
"""
import io, os, re, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)

ARG = [a for a in sys.argv[1:] if not a.startswith("--")]
YAZ = "--yaz" in sys.argv
NOT = ""
if "--not" in sys.argv:
    i = sys.argv.index("--not")
    if i + 1 < len(sys.argv):
        NOT = sys.argv[i + 1]
if not ARG:
    print(__doc__); sys.exit(1)
ART = ARG[0]
if not os.path.exists(ART):
    print("🔴 artefakt yok: %s" % ART); sys.exit(1)
YOL = os.path.join(KOK, "arac", "renkler.py")

par = []
for s in io.open(ART, encoding="utf-8", errors="replace"):
    s = s.strip()
    if not s or s.startswith("//"):
        continue
    p = s.split()
    if len(p) == 2 and p[1].startswith("#") and len(p[1]) == 7:
        par.append((p[0], p[1].lower()))
print("artefakt: %s · %d oneri" % (os.path.basename(ART), len(par)))
if not par:
    print("🔴 oneri okunamadi"); sys.exit(1)

import girdi, renkler
n0 = len(renkler.BOYALAR)
zaten = [k for k, _ in par if k in renkler.BOYALAR]
if zaten:
    print("🔴 %d kimlik ZATEN BOYALAR'da: %s" % (len(zaten), zaten[:5]))
    print("   ⇒ once `git checkout -- arac/renkler.py` (bkz. modul basligi)")
    sys.exit(1)

KUN = {k["id"]: k for k in girdi.oku_devletler()}
sat = []
for kid, hx in par:
    ad = (KUN.get(kid) or {}).get("ad") or kid
    sat.append('    %-26s (%-38s %s),'
               % ('"%s":' % kid, '"%s",' % ad.replace('"', "'"), '"%s"' % hx))

ham = io.open(YOL, encoding="utf-8").read()
# 🔴 CAPAYI BOYALAR BLOGUYLA SINIRLA — dosyanin son `}`si ya da son
#    `"key": (...)` satiri BASKA BIR YAPIYA ait olabilir (ve iki kez
#    oldu: bir kisit sozlugu ve bir baska dict).
_b = ham.find("\nBOYALAR = {")
if _b < 0:
    print("🔴 `BOYALAR = {` bulunamadi"); sys.exit(1)
_son = ham.find("\n}", _b)          # sutun 0'daki kapanis
if _son < 0:
    print("🔴 BOYALAR kapanisi bulunamadi"); sys.exit(1)
blok_metin = ham[_b:_son]
if '"prusya":' not in blok_metin:
    print("🔴 bulunan blok BOYALAR DEGIL — bilinen anahtar yok"); sys.exit(1)
kayitlar = list(re.finditer(r'^    "[^"]+":\s*\([^\n]*\),\n',
                            blok_metin, re.M))
if not kayitlar:
    print("🔴 BOYALAR kaydi bulunamadi"); sys.exit(1)
capa = kayitlar[-1].group(0)
if ham.count(capa) != 1:
    print("🔴 capa TEK DEGIL (%d) — %r" % (ham.count(capa), capa.strip()[:60]))
    sys.exit(1)
print("blok: BOYALAR (%d kayit) · capa: %s"
      % (len(kayitlar), capa.strip()[:56]))

blok = ""
if NOT:
    blok += "\n    # " + "\n    # ".join(NOT.split("\n")) + "\n"
blok += "\n".join(sat) + "\n"
yeni = ham.replace(capa, capa + blok, 1)

if not YAZ:
    print("⚪ KURU KOSU · %+d karakter · %d satir" % (len(yeni) - len(ham), len(sat)))
    sys.exit(0)

io.open(YOL, "w", encoding="utf-8", newline="\n").write(yeni)
import importlib
importlib.reload(renkler)
n1 = len(renkler.BOYALAR)
print("🟢 BOYALAR %d → %d  (+%d, beklenen +%d)" % (n0, n1, n1 - n0, len(par)))

# 🔴 KARSILASTIRMA DOSYA METNI UZERINDEN — icе aktarilmis dict DEGIL.
# `_aciklik_tabani_uygula()` ice aktarimda bazi renkleri YUKSELTIYOR;
# dict ile kiyaslamak her boyle rengi sonsuza kadar "BOZUK" gosterir
# (`--dogrula` bugun tam bunu yapti: nijer-deltasi #30188a vs #31198b).
metin = io.open(YOL, encoding="utf-8").read()
eksik = [k for k, h in par
         if not re.search(r'"%s":\s*\([^\n]*"%s"' % (re.escape(k), h), metin)]
print("🟢 %d/%d hex dosya METNINDE birebir" % (len(par) - len(eksik), len(par))
      if not eksik else "🔴 METINDE UYUSMAYAN: %d %s" % (len(eksik), eksik[:5]))
sys.exit(0 if (n1 - n0 == len(par) and not eksik) else 1)

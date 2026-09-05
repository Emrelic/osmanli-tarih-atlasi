# -*- coding: utf-8 -*-
"""ADIM ⑥ KIMLIK KARSILIGI — DUZELTILMIS: renk `harita:` ANAHTARINA bakar.

🔴 ONCEKI SURUM (`ARAC-KIMLIK-KARSILIGI-0905.py`) `k in BOYALAR` diye
   sordu ve `harita:` DOLAYLAMASINI atladi ⇒ 17 dedi, gercek 13.
   `§11` (RENK 2): *"Renk `harita:` anahtarina bakar, `id`ye DEGIL"* ·
   *"kunye var ama `harita:` baska anahtardaysa kendi rengine ihtiyaci
   YOKTUR."*
SALT OKUR. ASCII.
"""
import io, os, re, sys, unicodedata, collections
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
DEN = os.path.join(KOK, "denetim")


def a(s):
    s = str(s).replace("İ", "I").replace("ı", "i").replace("Ş", "S").replace("ş", "s")
    s = s.replace("Ğ", "G").replace("ğ", "g").replace("Ü", "U").replace("ü", "u")
    s = s.replace("Ö", "O").replace("ö", "o").replace("Ç", "C").replace("ç", "c")
    return "".join(c for c in unicodedata.normalize("NFKD", s) if ord(c) < 128)


def p(s=""):
    print(a(s))


sys.path.insert(0, os.path.join(KOK, "arac"))
import renkler
BOYALAR = set(renkler.BOYALAR)

# kunye: id -> harita anahtari (varsa)
dv = io.open(os.path.join(KOK, "data", "devletler.js"),
             encoding="utf-8", errors="replace").read()
# her kayit blogunda id ve (varsa) harita
HARITA_OF = {}
KUNYE = set()
for blok in re.split(r"\n\s*\{", dv):
    mid = re.search(r'\bid:\s*"([^"]+)"', blok)
    if not mid:
        continue
    KUNYE.add(mid.group(1))
    mh = re.search(r'\bharita:\s*"([^"]+)"', blok)
    if mh:
        HARITA_OF[mid.group(1)] = mh.group(1)

p("kunye %d · `harita:` tasiyan %d · BOYALAR %d"
  % (len(KUNYE), len(HARITA_OF), len(BOYALAR)))


def boyanir(k):
    """§11: once `harita:` anahtari, yoksa id'nin kendisi."""
    hedef = HARITA_OF.get(k, k)
    return hedef in BOYALAR, hedef


KALIP = re.compile(r"^yer_yama.*\.js$")
kullanilan = collections.defaultdict(set)
for f in sorted(os.listdir(DEN)):
    if not KALIP.match(f):
        continue
    s = io.open(os.path.join(DEN, f), encoding="utf-8", errors="replace").read()
    govde = "\n".join(l for l in s.split("\n") if not l.lstrip().startswith("//"))
    for m in re.finditer(r'\bd:\s*"([^"]+)"', govde):
        kullanilan[m.group(1)].add(f)

p("")
p("=== BEKLEYEN YAMALARIN KULLANDIGI KIMLIK: %d ===" % len(kullanilan))

eksik_kunye, eksik_renk, dolayli = [], [], []
for k in sorted(kullanilan):
    if k not in KUNYE:
        eksik_kunye.append(k)
    ok, hedef = boyanir(k)
    if not ok:
        eksik_renk.append((k, hedef))
    elif hedef != k:
        dolayli.append((k, hedef))

p("")
p("=== 🟢 `harita:` DOLAYLAMASIYLA BOYANANLAR (delik DEGIL) : %d ===" % len(dolayli))
for k, h in dolayli:
    p("  %-28s -> harita:\"%s\"  (BOYALI)" % (k, h))

p("")
p("=== 🔴 KUNYESI YOK : %d ===" % len(eksik_kunye))
for k in eksik_kunye:
    p("  %s" % k)

p("")
p("=== 🔴 GERCEKTEN RENGI YOK : %d ===" % len(eksik_renk))
for k, h in eksik_renk:
    ek = "" if h == k else "  (harita:\"%s\" da BOYASIZ)" % h
    p("  %-28s %s%s" % (k, ", ".join(sorted(kullanilan[k]))[:44], ek))

p("")
p("=== SONUC ===")
p("  kimlik %d · kunyesi yok %d · GERCEK renksiz %d · dolayli boyanan %d"
  % (len(kullanilan), len(eksik_kunye), len(eksik_renk), len(dolayli)))

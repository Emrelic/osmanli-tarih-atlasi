# -*- coding: utf-8 -*-
"""ADIM ⑥ ON-SINAVININ EKSIK AYAGI — 397 kaydin KULLANDIGI kimliklerin
KUNYESI ve RENGI var mi?

Onceki on-sinav (ARAC-TASIMA-ON-SINAV-0905.py) su ucunu olcmustu:
  ad carpismasi · data/'de ayni ad · suzgec uyumu
OLCMEDIGI: kayitlarin `d:`/`s:` KIMLIKLERI kunyede ve BOYALAR'da var mi.
`§8`: BOYALAR'da tanimli degilse BOLGE BOYANMAZ ⇒ HARITA DELIGI.
`§1.5`: "Renksiz kunye — HARITA DELIGI ✓ 0" degismezi.

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


# ── ① BOYALAR — renkler.py'yi PYTHON'a okut (regex DEGIL) ────────────────
sys.path.insert(0, os.path.join(KOK, "arac"))
try:
    import renkler
    BOYALAR = set(renkler.BOYALAR)
except Exception as e:
    p("renkler.py okunamadi: %s" % e)
    sys.exit(2)
p("BOYALAR: %d kimlik" % len(BOYALAR))

# ── ② KUNYE — devletler.js'ten id + harita anahtarlari ───────────────────
dv = io.open(os.path.join(KOK, "data", "devletler.js"),
             encoding="utf-8", errors="replace").read()
KUNYE = set(re.findall(r'\bid:\s*"([^"]+)"', dv))
HARITA = set(re.findall(r'\bharita:\s*"([^"]+)"', dv))
p("kunye id: %d · harita anahtari: %d" % (len(KUNYE), len(HARITA)))

# ── ③ BEKLEYEN YAMALARIN KULLANDIGI KIMLIKLER ────────────────────────────
KALIP = re.compile(r"^yer_yama.*\.js$")
kim = collections.defaultdict(set)   # kimlik -> {dosya}
for f in sorted(os.listdir(DEN)):
    if not KALIP.match(f):
        continue
    s = io.open(os.path.join(DEN, f), encoding="utf-8", errors="replace").read()
    # yorum satirlarini AT — `§11`: yorumda gecen ad kayit degildir
    govde = "\n".join(l for l in s.split("\n") if not l.lstrip().startswith("//"))
    for m in re.finditer(r'\bd:\s*"([^"]+)"', govde):
        kim[m.group(1)].add(f)

p("")
p("=== BEKLEYEN YAMALARIN KULLANDIGI KIMLIK: %d ===" % len(kim))

eksik_kunye, eksik_renk = [], []
for k in sorted(kim):
    kun = (k in KUNYE) or (k in HARITA)
    ren = (k in BOYALAR)
    if not kun:
        eksik_kunye.append(k)
    if not ren:
        eksik_renk.append(k)

p("")
p("=== 🔴 KUNYESI YOK (adim ① beklemeli) : %d ===" % len(eksik_kunye))
for k in eksik_kunye:
    p("  %-30s %s" % (k, ", ".join(sorted(kim[k]))[:56]))
if not eksik_kunye:
    p("  (yok)")

p("")
p("=== 🔴 RENGI YOK — HARITA DELIGI RISKI (adim ⑧ beklemeli) : %d ==="
  % len(eksik_renk))
for k in eksik_renk:
    p("  %-30s %s" % (k, ", ".join(sorted(kim[k]))[:56]))
if not eksik_renk:
    p("  (yok)")

p("")
p("=== OZET ===")
p("  kimlik %d · kunyesi yok %d · rengi yok %d"
  % (len(kim), len(eksik_kunye), len(eksik_renk)))
p("  ⇒ adim ⑥, bu iki kume BOSALMADAN kosulmaz (yoksa harita deligi)")

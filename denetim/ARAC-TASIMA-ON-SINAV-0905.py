# -*- coding: utf-8 -*-
"""MERGE ADIM ⑥ ON HAZIRLIK — hangi dosyalar tasinacak, ve carpisma var mi?

`_sahiplik_uygula.py` `data/` dizinini `^yer_yama.*\\.js$` ile tarar ve
`denetim/`e HIC bakmaz. Yani tasima ELLE. Bu betik tasima LISTESINI
olcer ve UC RISKI onceden sinar:
  ① AD CARPISMASI  — `data/`de ayni adli dosya var mi?  (uzerine yazar)
  ② SUZGEC         — dosya `^yer_yama.*\\.js$` kalibina UYUYOR mu?
                     uymayan dosya tasinsa bile OKUNMAZ (sessiz)
  ③ AD ALANI       — iki dosya ayni `window.X`i mi tanimliyor? (§7)

SALT OKUR. Cikti ASCII.
"""
import io, os, re, sys, unicodedata, collections
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
DEN = os.path.join(KOK, "denetim")
VER = os.path.join(KOK, "data")


def a(s):
    s = str(s).replace("İ", "I").replace("ı", "i").replace("Ş", "S").replace("ş", "s")
    s = s.replace("Ğ", "G").replace("ğ", "g").replace("Ü", "U").replace("ü", "u")
    s = s.replace("Ö", "O").replace("ö", "o").replace("Ç", "C").replace("ç", "c")
    return "".join(c for c in unicodedata.normalize("NFKD", s) if ord(c) < 128)


def p(s=""):
    print(a(s))


KALIP = re.compile(r"^yer_yama.*\.js$")
AD_RX = re.compile(r"window\.([A-Za-z0-9_]+)\s*=")

aday = sorted(f for f in os.listdir(DEN) if f.endswith(".js"))
p("denetim/ altinda .js: %d" % len(aday))

tasinir, uymaz = [], []
for f in aday:
    (tasinir if KALIP.match(f) else uymaz).append(f)

p("")
p("=== ① SUZGECE UYAN (tasinabilir) : %d ===" % len(tasinir))
kayit_top = 0
adlar = collections.defaultdict(list)
for f in tasinir:
    s = io.open(os.path.join(DEN, f), encoding="utf-8", errors="replace").read()
    n = len(re.findall(r'\bad\s*:\s*"', s))
    kayit_top += n
    for m in AD_RX.finditer(s):
        adlar[m.group(1)].append(f)
    carp = "🔴 data/'de VAR" if os.path.exists(os.path.join(VER, f)) else ""
    p("  %-46s %4d kayit  %s" % (f[:46], n, carp))
p("  ---- toplam kayit: %d" % kayit_top)

p("")
p("=== ② SUZGECE UYMAYAN (.js ama tasinsa OKUNMAZ) : %d ===" % len(uymaz))
for f in uymaz:
    p("  %s" % f[:60])
if not uymaz:
    p("  (yok)")

p("")
p("=== ③ AD CARPISMASI (window.X — §7 sessiz ezme) ===")
c = 0
for ad, ff in sorted(adlar.items()):
    if len(ff) > 1:
        c += 1
        p("  🔴 window.%-28s %d dosya: %s" % (ad, len(ff), ", ".join(x[:22] for x in ff)))
if not c:
    p("  🟢 carpisma YOK — %d benzersiz ad" % len(adlar))

p("")
p("=== ④ data/'DE ZATEN OLAN AD (uzerine yazar) ===")
c = 0
for f in tasinir:
    if os.path.exists(os.path.join(VER, f)):
        c += 1
        p("  🔴 %s" % f)
if not c:
    p("  🟢 ad carpismasi YOK")

p("")
p("=== ⑤ TASIMA KOMUTU (merge adim ⑥) ===")
p("  git mv " + " ".join("denetim/" + f for f in tasinir[:3]) + " ... data/")
p("  (tam liste yukarida · %d dosya)" % len(tasinir))

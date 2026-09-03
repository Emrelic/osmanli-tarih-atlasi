# -*- coding: utf-8 -*-
"""Bir yerlesim dosyasini IKI YERE birden baglar ve iki kumenin BIREBIR
oldugunu dogrular.

NICIN VAR: 3 Eylul 2026 sabahi uc dosya (68 nokta) `girdi.py`ye baglandi
ama `index.html`e baglanmadi. Motor okudu, TARAYICI OKUMADI — ve hicbir
denetim otmedi, cunku iki taraf da KENDI ICINDE tutarliydi.
Bu alet o kusuru tekrarlanamaz kilar: tek cagriyla iki tarafa da yazar,
sonra iki kumeyi KARSILASTIRIR.

    py denetim/ARAC-BAGLA-GENEL-0903.py yerlesimler_afrika2.js [--yaz]
"""
import io, os, re, sys, glob, subprocess

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
ARG = [a for a in sys.argv[1:] if not a.startswith("--")]
YAZ = "--yaz" in sys.argv
if not ARG:
    print(__doc__); sys.exit(1)
DOSYA = os.path.basename(ARG[0])
G = os.path.join(KOK, "arac", "girdi.py")
I = os.path.join(KOK, "index.html")

if not os.path.exists(os.path.join(KOK, "data", DOSYA)):
    print("🔴 data/%s YOK" % DOSYA); sys.exit(1)

gh = io.open(G, encoding="utf-8").read()
ih = io.open(I, encoding="utf-8").read()
g_var = DOSYA in gh
i_var = ('data/%s' % DOSYA) in ih
print("bugun: girdi.py %s · index.html %s"
      % ("VAR" if g_var else "YOK", "VAR" if i_var else "YOK"))

if not g_var:
    m = list(re.finditer(r'\n(\s*)"yerlesimler[^"]*\.js",', gh))
    if not m:
        print("🔴 girdi.py capasi yok"); sys.exit(1)
    son = m[-1]
    gh2 = gh[:son.end()] + '\n%s"%s",' % (son.group(1), DOSYA) + gh[son.end():]
else:
    gh2 = gh

if not i_var:
    m = list(re.finditer(r'[ \t]*<script src="data/yerlesimler[^"]*"></script>\n', ih))
    if not m:
        print("🔴 index.html capasi yok"); sys.exit(1)
    d = re.search(r"\?v=r(\d+)", ih)
    v = "?v=r%s" % d.group(1) if d else ""
    ih2 = (ih[:m[-1].end()]
           + '    <script src="data/%s%s"></script>\n' % (DOSYA, v)
           + ih[m[-1].end():])
else:
    ih2 = ih

if not YAZ:
    print("⚪ KURU KOSU · girdi.py %+d · index.html %+d karakter"
          % (len(gh2) - len(gh), len(ih2) - len(ih)))
    sys.exit(0)

if gh2 != gh:
    io.open(G, "w", encoding="utf-8", newline="\n").write(gh2)
    print("🟢 girdi.py'ye baglandi")
if ih2 != ih:
    io.open(I, "w", encoding="utf-8", newline="\n").write(ih2)
    print("🟢 index.html'e baglandi")

# --- DOGRULAMA: iki kume BIREBIR mi -----------------------------------
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
Gk = sorted(girdi.GIRDI_DOSYALARI)
Ik = sorted(set(re.findall(r'<script src="data/(yerlesimler[^"?]*\.js)',
                           io.open(I, encoding="utf-8").read())))
print("\ngirdi.py %d · index.html %d · %s"
      % (len(Gk), len(Ik), "🟢 BIREBIR" if Gk == Ik
         else "🔴 AYRISIYOR: %s" % sorted(set(Gk) ^ set(Ik))))
if Gk != Ik:
    sys.exit(1)
Y = girdi.yukle()
print("🟢 girdi.yukle() TEMIZ · yerlesim %d" % len(Y))

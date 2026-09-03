# -*- coding: utf-8 -*-
"""Yeni yerlesim dosyalarini IKI YERE BIRDEN baglar.

🔴 girdi.py GIRDI_DOSYALARI (motor) VE index.html <script> (tarayici).
   Biri eksikse dosya YARIM baglidir ve HICBIR DENETIM OTMEZ —
   3 Eylul'de uc dosya tam bu hale dusmustu (fae8d8c).

kullanim: py bagla.py <dosya.js> [<dosya.js> ...]
"""
import io, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.getcwd()
GP = os.path.join(KOK, "arac", "girdi.py")
IP = os.path.join(KOK, "index.html")
CAPA_G = '    "yerlesimler_p0037.js",'
CAPA_I = '<script src="data/yerlesimler_p0037.js?v='

g = io.open(GP, encoding="utf-8").read()
h = io.open(IP, encoding="utf-8").read()
sur = re.search(r"\?v=(r\d+)", h).group(1)
eklendi_g, eklendi_i, atlandi = [], [], []

for f in sys.argv[1:]:
    f = os.path.basename(f)
    yol = os.path.join(KOK, "data", f)
    if not os.path.exists(yol):
        print("⚪ %-32s DOSYA YOK — atlandi" % f)
        continue
    if f not in g:
        i = g.index(CAPA_G)
        g = g[:i] + '    "%s",\n' % f + g[i:]
        eklendi_g.append(f)
    else:
        atlandi.append(f + " (girdi.py'de zaten var)")
    if f not in h:
        m = re.search(re.escape(CAPA_I), h)
        h = h[:m.start()] + '<script src="data/%s?v=%s"></script>\n' % (f, sur) + h[m.start():]
        eklendi_i.append(f)
    else:
        atlandi.append(f + " (index.html'de zaten var)")

io.open(GP, "w", encoding="utf-8", newline="").write(g)
io.open(IP, "w", encoding="utf-8", newline="").write(h)
print("girdi.py'ye eklendi   : %s" % (", ".join(eklendi_g) or "yok"))
print("index.html'e eklendi  : %s" % (", ".join(eklendi_i) or "yok"))
if atlandi:
    print("atlandi               : %s" % ", ".join(atlandi))

# --- DOGRULAMA: iki kume BIREBIR mi
sys.path.insert(0, os.path.join(KOK, "arac"))
import importlib, girdi
importlib.reload(girdi)
G = set(girdi.GIRDI_DOSYALARI)
I = set(re.findall(r"yerlesimler[a-z0-9_]*\.js", io.open(IP, encoding="utf-8").read()))
print()
print("girdi.py: %d · index.html: %d" % (len(G), len(I)))
print("girdi VAR index YOK: %s" % (sorted(G - I) or "[]"))
print("index VAR girdi YOK: %s" % (sorted(I - G) or "[]"))
print("🟢 BIREBIR" if G == I else "🔴 AYRISIYOR")

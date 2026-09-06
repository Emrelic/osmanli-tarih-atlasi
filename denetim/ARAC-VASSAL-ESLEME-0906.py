# -*- coding: utf-8 -*-
"""SECENEK 🅑 — `v:` donemlerindeki 40 SERBEST METNI kunyeye esler.

🔴 KENDI ARACIMI YAZMIYORUM — projenin kendi aletleri cagriliyor:
   `arac/girdi.py`            motorun JS okuyucusu (regex DEGIL)
   `denetim/ARAC-NORMAL-0903.py`  ORTAK normallestirici
      (`§4`: uc ayri normallestirici uc ayri kor nokta dogurur;
       ve `"İ".lower()` iki kod noktasi verir — `lower()` KULLANILMAZ)

CIKTI: her `k` metni icin
   🟢 ESLESTI      kunye bulundu (tam ya da parantezsiz)
   🟡 ADAY VAR     benzer kunye(ler) var, KARAR GEREK
   🔴 ESLESMEDI    kunye ACILMALI
Ve her satirda kac DONEMI etkiledigi — cunku maliyet donem sayisidir,
metin sayisi degil.
"""
import io, os, sys, re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.path.insert(0, os.path.join(KOK, "denetim"))

import girdi
_n = __import__("ARAC-NORMAL-0903".replace("-", "_")) if False else None

# ARAC-NORMAL-0903.py adinda tire var — importlib ile yuklenir
import importlib.util
_spec = importlib.util.spec_from_file_location(
    "arac_normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_mod)
norm = _mod.norm


def a(s):
    # emoji ve latin disi isaretler: cp1254 onlari KODLAYAMAZ ve betik
    # coker. Once ASCII etikete indirilir. (Bu gece besinci vaka.)
    for x, y in [("\U0001f7e2","[OK]"), ("\U0001f534","[!]"),
                 ("\U0001f7e1","[?]"), ("\u26a0","[uyari]"),
                 ("\u26aa","[o]"), ("\U0001f4cc","[not]"),
                 ("\u2192","->"), ("\u2014","-"), ("\u00b7","*")]:
        s = s.replace(x, y)
    for x, y in [("İ","I"),("ı","i"),("ş","s"),("Ş","S"),("ü","u"),("Ü","U"),
                 ("ö","o"),("Ö","O"),("ç","c"),("Ç","C"),("ğ","g"),("Ğ","G"),
                 ("â","a"),("î","i"),("û","u"),("’","'"),("Â","A")]:
        s = s.replace(x, y)
    # kalan her sey: kodlanabiliyorsa birak, degilse '?'
    return "".join(c if ord(c) < 256 else "?" for c in s)

def p(s=""):
    sys.stdout.write(a(str(s)) + "\n")


# ── 1. `v:` metinleri ve DONEM sayilari ────────────────────────────────
Y = girdi.yukle(sessiz=True)
metin = {}          # k metni -> donem sayisi
ksiz = 0
for y in Y:
    for d in (y.get("v") or []):
        k = d.get("k")
        if k is None:
            ksiz += 1
        else:
            metin[k] = metin.get(k, 0) + 1

p("=" * 74)
p("`v:` DONEM  : %d   (kayit %d)" % (sum(metin.values()) + ksiz,
                                     sum(1 for y in Y if y.get("v"))))
p("`k` DOLU    : %d donem · %d farkli metin" % (sum(metin.values()), len(metin)))
p("`k` BOS     : %d donem   <- bunlarin kimligi AYRICA arastirilacak" % ksiz)
p("=" * 74)

# ── 2. kunyeler ────────────────────────────────────────────────────────
D = girdi.oku_devletler()
if isinstance(D, dict):
    kunyeler = list(D.values())
else:
    kunyeler = list(D)
p("kunye: %d" % len(kunyeler))

ad_ix = {}
for k in kunyeler:
    ad = k.get("ad") or ""
    kid = k.get("id") or ""
    if not kid:
        continue
    ad_ix.setdefault(norm(ad), []).append((kid, ad))

def parantezsiz(s):
    return re.sub(r"\s*\([^)]*\)\s*", " ", s).strip()

def cekirdek(s):
    """unvan kuyruklarini at: Sultanligi · Voyvodaligi · Ocakligi ..."""
    s = parantezsiz(s)
    s = re.sub(r"\b(Hanligi|Hânligi|Hanlığı|Voyvodaligi|Voyvodalığı|"
               r"Ocakligi|Ocaklığı|Prensligi|Prensliği|Serifligi|Şerifliği|"
               r"Sultanligi|Sultanlığı|Kralligi|Krallığı|Beyligi|Beyliği|"
               r"hanedani|hânedanı|Dukaligi|Dukalığı|idaresi|Emirligi|"
               r"Emirliği|Imamligi|İmamlığı)\b", " ", s, flags=re.I)
    return s.strip()

# ── 3. esleme ──────────────────────────────────────────────────────────
esles, aday, yok = [], [], []
for k_metin, n in sorted(metin.items(), key=lambda x: -x[1]):
    nk = norm(k_metin)
    if nk in ad_ix:
        esles.append((k_metin, n, ad_ix[nk][0][0], "TAM"))
        continue
    np_ = norm(parantezsiz(k_metin))
    if np_ and np_ in ad_ix:
        esles.append((k_metin, n, ad_ix[np_][0][0], "PARANTEZSIZ"))
        continue
    # gevsek: kunye adi metnin cekirdegini ICERIYOR mu (iki yonlu)
    c = norm(cekirdek(k_metin))
    bulunan = []
    if len(c) >= 4:
        for nad, ciftler in ad_ix.items():
            if c and (c in nad or nad in c):
                bulunan.extend(ciftler)
    if bulunan:
        aday.append((k_metin, n, bulunan[:4]))
    else:
        yok.append((k_metin, n))

p("")
p("### 🟢 ESLESTI — %d metin · %d DONEM" % (esles.__len__(),
                                            sum(x[1] for x in esles)))
for m, n, kid, cins in esles:
    p("  %4d  %-34s -> %-28s %s" % (n, m[:34], kid, cins))
p("")
p("### 🟡 ADAY VAR, KARAR GEREK — %d metin · %d DONEM"
  % (len(aday), sum(x[1] for x in aday)))
for m, n, b in aday:
    p("  %4d  %-34s -> %s" % (n, m[:34], ", ".join(x[0] for x in b)))
p("")
p("### 🔴 ESLESMEDI, KUNYE ACILMALI — %d metin · %d DONEM"
  % (len(yok), sum(x[1] for x in yok)))
for m, n in yok:
    p("  %4d  %s" % (n, m))
p("")
p("=" * 74)
p("MALIYET OZETI (donem cinsinden — metin sayisi DEGIL):")
p("  🟢 hazir      %4d donem" % sum(x[1] for x in esles))
p("  🟡 karar      %4d donem" % sum(x[1] for x in aday))
p("  🔴 yeni kunye %4d donem" % sum(x[1] for x in yok))
p("  ⚪ `k` bos    %4d donem  (ayri kalem)" % ksiz)

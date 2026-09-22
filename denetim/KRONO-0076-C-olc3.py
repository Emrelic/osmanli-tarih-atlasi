# -*- coding: utf-8 -*-
"""KRONO-0076-C ucuncu olcum — TERS YON SINAVI (D206 / ORTAK §4 ⑥):
onerilen iki `t:` kaydirmasi Degismez 2'yi (+-30 gun) bozar mi?
Salt okur; arac/girdi.py'yi yalnizca ICE AKTARIR, degistirmez."""
import io, os, re, sys, datetime

KOK = r"C:\atlas"
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa

DATA = os.path.join(KOK, "data")

def gun(s):
    p = s.split("-")
    try:
        if len(p) == 3: return datetime.date(int(p[0]), int(p[1]), int(p[2]))
        if len(p) == 2: return datetime.date(int(p[0]), int(p[1]), 1)
        if len(p) == 1 and p[0].isdigit(): return datetime.date(int(p[0]), 1, 1)
    except Exception:
        return None
    return None

# ---- 1. butun kronoloji maddelerinin gunleri ----
def kayitlar(metin):
    i, n = 0, len(metin)
    while i < n:
        if metin[i] == '{':
            d, j, q, esc = 0, i, None, False
            while j < n:
                c = metin[j]
                if esc: esc = False
                elif q:
                    if c == '\\': esc = True
                    elif c == q: q = None
                elif c in '"\'': q = c
                elif c == '{': d += 1
                elif c == '}':
                    d -= 1
                    if d == 0:
                        yield metin[i:j+1]; i = j; break
                j += 1
            else: return
        i += 1

maddeler = []   # (tarih, dosya, b)
for dosya in sorted(os.listdir(DATA)):
    if not (dosya.startswith("olaylar") or dosya.startswith("kronoloji")) or not dosya.endswith(".js"):
        continue
    with io.open(os.path.join(DATA, dosya), encoding="utf-8") as f:
        metin = f.read()
    for k in kayitlar(metin):
        m = re.search(r'(?:^|[\s,{])t\s*:\s*"([0-9\-]+)"', k)
        if not m: continue
        g = gun(m.group(1))
        if g: maddeler.append((g, dosya, (re.search(r'b\s*:\s*"((?:[^"\\]|\\.)*)"', k) or [None, ""])[1]))

# ---- 2. yerlesimlerdeki d:/v: kirilmalari ----
kirilma = []    # (tarih, yerlesim)
try:
    yer = girdi.yerlesimleri_oku() if hasattr(girdi, "yerlesimleri_oku") else None
except Exception:
    yer = None
if yer is None:
    # dosyalari dogrudan tara: "f":"YYYY-MM-DD" gibi donem baslangiclari
    metin_hepsi = ""
    for dosya in girdi.GIRDI_DOSYALARI:
        yol = dosya if os.path.isabs(dosya) else os.path.join(KOK, dosya)
        if not os.path.exists(yol):
            yol = os.path.join(DATA, os.path.basename(dosya))
        if os.path.exists(yol):
            with io.open(yol, encoding="utf-8") as f:
                metin_hepsi += f.read()
    for m in re.finditer(r'\bf\s*:\s*"(\d{4}-\d{2}-\d{2})"', metin_hepsi):
        g = gun(m.group(1))
        if g: kirilma.append((g, "f:"))

c = []
c.append("kronoloji maddesi (tarihi cozulen): %d" % len(maddeler))
c.append("yerlesim donem baslangici (f:) : %d" % len(kirilma))
c.append("")

SINAV = [
    ("H-0119  olaylar.js  Trablusgarp Savasi", "1911-09-01", "1911-09-29"),
    ("H-0160  olaylar.js  I. Dunya Savasina giris", "1914-11-01", "1914-11-11"),
]
for ad, eski_s, yeni_s in SINAV:
    eski, yeni = gun(eski_s), gun(yeni_s)
    c.append("=== %s :  %s  ->  %s" % (ad, eski_s, yeni_s))
    # ESKI konumun kapsadigi ama YENI konumun kapsamadigi kirilmalar
    risk = [k for k in kirilma
            if abs((k[0] - eski).days) <= 30 and abs((k[0] - yeni).days) > 30]
    c.append("    eski konumun kapsayip yeninin kapsamadigi kirilma: %d" % len(risk))
    acikta = []
    for g, _ in risk:
        # baska bir kronoloji maddesi bu kirilmayi +-30 icinde tutuyor mu?
        korur = any(abs((m[0] - g).days) <= 30 and not (m[1] == "olaylar.js" and m[0] == eski)
                    for m in maddeler)
        if not korur: acikta.append(g)
    c.append("    bunlardan BASKA MADDE ile korunmayan (gercek risk): %d" % len(acikta))
    for g in sorted(set(acikta))[:10]:
        c.append("        %s" % g)
    # pencere icindeki komsu madde sayisi (baglam)
    yakin = [m for m in maddeler if abs((m[0] - yeni).days) <= 30]
    c.append("    yeni konumun +-30 gun komsulugundaki kronoloji maddesi: %d" % len(yakin))
    c.append("")

yol = os.path.join(KOK, "denetim", "KRONO-0076-C-OLCUM3.txt")
with io.open(yol, "w", encoding="utf-8") as f:
    f.write("\n".join(c))
print("\n".join(c))

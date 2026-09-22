# -*- coding: utf-8 -*-
"""KRONO-0076-C dorduncu olcum — SISAM kaydirmasinin TERS YON sinavi (D206).
1912-03-13 -> 1912-11-11 kaydirilirsa eski konuma dayanan kirilma acikta kalir mi?
Salt okur."""
import io, os, re, sys, datetime
KOK = r"C:\atlas"
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
DATA = os.path.join(KOK, "data")

def gun(s):
    p = s.split("-")
    try:
        if len(p) == 3: return datetime.date(int(p[0]), int(p[1]), int(p[2]))
        if len(p) == 2: return datetime.date(int(p[0]), int(p[1]), 1)
        if len(p) == 1: return datetime.date(int(p[0]), 1, 1)
    except Exception: return None

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

maddeler = []
for dosya in sorted(os.listdir(DATA)):
    if not (dosya.startswith("olaylar") or dosya.startswith("kronoloji")) or not dosya.endswith(".js"):
        continue
    with io.open(os.path.join(DATA, dosya), encoding="utf-8") as f:
        metin = f.read()
    for k in kayitlar(metin):
        m = re.search(r'(?:^|[\s,{])t\s*:\s*"([0-9\-]+)"', k)
        if not m: continue
        g = gun(m.group(1))
        b = re.search(r'b\s*:\s*"((?:[^"\\]|\\.)*)"', k)
        if g: maddeler.append((g, b.group(1) if b else "", dosya))

metin_hepsi = ""
for dosya in girdi.GIRDI_DOSYALARI:
    yol = dosya if os.path.isabs(dosya) else os.path.join(KOK, dosya)
    if not os.path.exists(yol): yol = os.path.join(DATA, os.path.basename(dosya))
    if os.path.exists(yol):
        with io.open(yol, encoding="utf-8") as f: metin_hepsi += f.read()
kir = sorted(set(m.group(1) for m in re.finditer(r'\bf\s*:\s*"(\d{4}-\d{2}-\d{2})"', metin_hepsi)))

ESKI, YENI = gun("1912-03-13"), gun("1912-11-11")
c = []
c.append("kronoloji maddesi: %d · tekil yerlesim donem baslangici: %d" % (len(maddeler), len(kir)))
# eski konumun kapsadigi, yeninin kapsamadigi kirilmalar
risk = [g for g in (gun(x) for x in kir)
        if g and abs((g - ESKI).days) <= 30 and abs((g - YENI).days) > 30]
c.append("SISAM 1912-03-13 -> 1912-11-11")
c.append("  eski konumun kapsayip yeninin kapsamadigi kirilma gunu: %d" % len(risk))
acikta = []
for g in sorted(set(risk)):
    korur = [m for m in maddeler
             if abs((m[0] - g).days) <= 30 and not (m[0] == ESKI and "Sisam" in m[1])]
    if not korur: acikta.append(g)
    else:
        c.append("    %s  -> baska %d madde koruyor (ornek: %s)" % (g, len(korur), korur[0][1][:50]))
c.append("  BASKA MADDE ILE KORUNMAYAN (gercek risk): %d" % len(acikta))
for g in acikta[:20]: c.append("      ACIKTA: %s" % g)
c.append("  yeni konumun +-30 gun komsulugundaki kronoloji maddesi: %d"
         % len([m for m in maddeler if abs((m[0] - YENI).days) <= 30]))
yol = os.path.join(KOK, "denetim", "KRONO-0076-C-OLCUM4.txt")
with io.open(yol, "w", encoding="utf-8") as f: f.write("\n".join(c))
print("\n".join(c))

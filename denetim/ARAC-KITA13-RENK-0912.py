# -*- coding: utf-8 -*-
"""KITA 13 — H-0007: `gurcistan` ↔ `karakoyunlu` RENK CAKISMASI (SALT OKUR)

Emre: "renk neredeyse ayni talihsiz bir sekilde ayni renk secilmis".

🔴 VE `arac/renk_olc.py` BU CIFTI HIC BASMIYOR — ne "cakisan", ne "yakin
   ama degmeyen", ne "sinirda", ne "olculemedi" kovasinda. Yani cift HIC
   KURULMAMIS. Bu alet nicin kurulmadigini olcer:
     ① hex'ler gercekten yakin mi?           (CIE76 + CIE94 ΔE)
     ② donemleri ORTUSUYOR mu?               (esZamanli)
     ③ noktalari 600 km'den YAKIN mi?        (renk_olc'un esigi)
   Ucu de EVET ise aletin bir KOR NOKTASI var demektir.

⚠️ ΔE burada CIE76 ve CIE94 ile hesaplaniyor; `renk_olc.py` hangi formulu
   kullaniyorsa sayilar birebir tutmayabilir. Bu yuzden sayi degil YON
   raporlaniyor, ve fark buyukse ayrica yaziliyor (D119: ayni rengi iki
   alet farkli harmanliyor).
"""
import os, sys, io, math

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

CIFT = [("gurcistan", "#e020b0"), ("karakoyunlu", "#e018e0")]
EK = [("imereti", "#deea90"), ("akkoyunlu", "#48ae48")]


def lab(hx):
    hx = hx.lstrip("#")
    r, g, b = (int(hx[i:i + 2], 16) / 255.0 for i in (0, 2, 4))

    def f(c):
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = f(r), f(g), f(b)
    X = r * 0.4124 + g * 0.3576 + b * 0.1805
    Y = r * 0.2126 + g * 0.7152 + b * 0.0722
    Z = r * 0.0193 + g * 0.1192 + b * 0.9505
    Xn, Yn, Zn = 0.95047, 1.0, 1.08883

    def h(t):
        return t ** (1.0 / 3) if t > 0.008856 else (7.787 * t + 16.0 / 116)
    fx, fy, fz = h(X / Xn), h(Y / Yn), h(Z / Zn)
    return (116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz))


def de76(a, b):
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(lab(a), lab(b))))


def de94(a, b):
    L1, a1, b1 = lab(a)
    L2, a2, b2 = lab(b)
    dL = L1 - L2
    C1 = math.hypot(a1, b1)
    C2 = math.hypot(a2, b2)
    dC = C1 - C2
    da, db = a1 - a2, b1 - b2
    dH2 = max(da * da + db * db - dC * dC, 0)
    return math.sqrt((dL) ** 2 + (dC / (1 + 0.045 * C1)) ** 2
                     + dH2 / (1 + 0.015 * C1) ** 2)


Y = girdi.yukle(sessiz=True)


def donemler(kimlik):
    out = []
    for y in Y:
        for a in ("s", "v", "isg"):
            for p in (y.get(a) or []):
                if p.get("d") == kimlik:
                    out.append((p.get("f"), p.get("t"), y))
    return out


print("① RENK MESAFESİ")
for (k1, h1), (k2, h2) in [(CIFT[0], CIFT[1]), (CIFT[0], EK[0]), (CIFT[1], EK[1])]:
    print("   %-14s %s  ↔  %-14s %s   ΔE76 %5.2f · ΔE94 %5.2f"
          % (k1, h1, k2, h2, de76(h1, h2), de94(h1, h2)))

print()
print("② ZAMAN ÖRTÜŞMESİ ve ③ MESAFE")
A = donemler("gurcistan")
B = donemler("karakoyunlu")
print("   gurcistan dönem: %d · karakoyunlu dönem: %d" % (len(A), len(B)))
enYakin = None
ortusen = 0
for f1, t1, y1 in A:
    for f2, t2, y2 in B:
        if not (f1 and t1 and f2 and t2):
            continue
        if f1 < t2 and f2 < t1:          # örtüşüyor
            ortusen += 1
            d = girdi.km(y1["lat"], y1["lon"], y2["lat"], y2["lon"])
            if enYakin is None or d < enYakin[0]:
                enYakin = (d, y1.get("ad"), y2.get("ad"), max(f1, f2), min(t1, t2))
print("   örtüşen dönem çifti: %d" % ortusen)
if enYakin:
    print("   EN YAKIN eşzamanlı çift: %.1f km  %s ↔ %s   (%s → %s)"
          % enYakin)
    print("   ⇒ renk_olc.py eşiği 600 km · bu çift %s"
          % ("EŞİĞİN İÇİNDE" if enYakin[0] < 600 else "eşiğin DIŞINDA"))

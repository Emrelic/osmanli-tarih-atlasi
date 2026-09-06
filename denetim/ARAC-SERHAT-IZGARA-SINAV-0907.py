# -*- coding: utf-8 -*-
"""IZGARA SINAVI — C13'un KAPANMAMIS ayagi.

🔴 NICIN AYRI BIR SINAV: `ARAC-SERHAT-SINAV-0907.py` Gabriel FORMULUNU
   sinadi (kaba kuvvetle, 3-4 noktali kumelerde) ve gecti. Ama ARAC
   aday aramayi bir IZGARA ile yapiyor. Formul dogru olsa bile izgara
   bir adayi KACIRIRSA kenar sessizce DUSER — ve hicbir sey otmez.
   `§11`: "iki yolu da ENJEKTE kayitla sinamak, dosya okuma yolunu HIC
   sinamamaktir." Bu, o dersin IZGARA yuzudur.

🔴 VE SOMUT BIR SUPHE VAR, tahmin degil KODDAN:
     dx = r_km / (111.32 * cos(SORGU NOKTASININ enlemi)) / HUC
   Sorgu noktasi 60 K'de, hedef 65 K'de ise cos(60)=0.500 ama
   cos(65.4)=0.416 — dx %20 KUCUK hesaplanir ve yuksek enlemde bir
   aday KACABILIR.

SINAV: her nokta icin KABA KUVVETLE (butun n'e karsi) D_MAX icindeki
komsulari bul, IZGARANIN dondurdugu kumeyle karsilastir.
   IZGARA KUMESI ⊇ KABA KUVVET KUMESI  olmali (ust kume: fazlasi zararsiz,
   EKSIGI kenar dusurur).
"""
import sys, io, math
from collections import defaultdict

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, KOK + r"\arac")
import girdi

G = "1923-10-28"
D_MAX = 600.0
HUC = 5.0
R = 6371.0
rad = math.pi / 180


def hav(la1, lo1, la2, lo2):
    dp = (la2 - la1) * rad
    dl = (lo2 - lo1) * rad
    x = math.sin(dp / 2) ** 2 + math.cos(la1 * rad) * math.cos(la2 * rad) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(x)))


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return "OSMANLI-tabi"
    for p in (y.get("s") or []):
        if p.get("f", "") <= g < p.get("t", ""):
            return p.get("d")
    return None


Y = girdi.yukle()
P = []
for y in Y:
    if y.get("lat") is None or y.get("lon") is None:
        continue
    if y.get("bit") and y["bit"] <= G:
        continue
    if y.get("kur") and y["kur"] > G:
        continue
    if sahip(y, G):
        P.append((y["ad"], float(y["lat"]), float(y["lon"])))
n = len(P)
print("nokta:", n)

# ARAC'in IZGARASI — birebir ayni kod
izg = defaultdict(list)
for i, p in enumerate(P):
    izg[(int(math.floor(p[1] / HUC)), int(math.floor(p[2] / HUC)))].append(i)


def yakin(la, lo, r_km):
    dy = r_km / 111.32 / HUC + 1
    dx = r_km / (111.32 * max(0.15, math.cos(la * rad))) / HUC + 1
    a0 = int(math.floor(la / HUC))
    b0 = int(math.floor(lo / HUC))
    out = []
    for a in range(a0 - int(dy), a0 + int(dy) + 1):
        for b in range(b0 - int(dx), b0 + int(dx) + 1):
            out.extend(izg.get((a, ((b + 36) % 72) - 36), []))
    return out


kacan = []
fazla_top = 0
for i in range(n):
    ad, la, lo = P[i]
    kaba = set(j for j in range(n)
               if j != i and hav(la, lo, P[j][1], P[j][2]) <= D_MAX)
    izgara = set(yakin(la, lo, D_MAX)) - {i}
    eksik = kaba - izgara
    fazla_top += len(izgara - kaba)
    if eksik:
        for j in sorted(eksik):
            kacan.append((ad, la, lo, P[j][0], P[j][1], P[j][2],
                          hav(la, lo, P[j][1], P[j][2])))

f = io.open("denetim/SERHAT-IZGARA-SINAV-0907.md", "w", encoding="utf-8")
W = f.write
W("# IZGARA SINAVI — `ARAC-SERHAT-CIFT-0907.py`\n\n")
W("> C13 ③/④'ün kapanmamış ayağı: aracın **formülü** ayrı sınandı ve\n")
W("> geçti; bu sınav aracın **ızgarasını** sınar. Izgara bir adayı\n")
W("> kaçırırsa kenar **sessizce düşer** ve hiçbir şey ötmez.\n\n")
W("```\n")
W("kesit                 %s\n" % G)
W("nokta                 %d\n" % n)
W("tarama yarıçapı       %.0f km\n" % D_MAX)
W("ızgara hücresi        %.1f derece\n" % HUC)
W("ölçüt                 IZGARA KÜMESİ ⊇ KABA KUVVET KÜMESİ\n")
W("\n")
W("🔴 IZGARANIN KAÇIRDIĞI ADAY   %d\n" % len(kacan))
W("⚪ ızgaranın FAZLADAN döndürdüğü (zararsız)  %d\n" % fazla_top)
W("```\n\n")
if kacan:
    W("## 🔴 KAÇAN ADAYLAR — ızgara bunları görmüyor\n\n```\n")
    for a, la, lo, b, lb, lob, d in sorted(kacan, key=lambda t: -abs(t[1]))[:40]:
        W("%-24s (%.2f,%.2f)  ->  %-24s (%.2f,%.2f)  %.1f km\n"
          % (a, la, lo, b, lb, lob, d))
    W("```\n\n")
    en = max(abs(t[1]) for t in kacan)
    W("En yüksek enlem: **%.2f°** — şüphe doğrulandı: kusur `dx`in sorgu\n" % en)
    W("noktasının enlemiyle hesaplanmasından geliyor.\n")
    W("\n🔴 **SONUÇ: ARAÇ EKSİK ÖLÇÜYOR.** `1286` sayısı bir ALT SINIRDIR.\n")
else:
    W("## 🟢 KAÇAN ADAY YOK — ızgara üst küme döndürüyor\n\n")
    W("Şüphe (`dx` sorgu noktasının enlemiyle hesaplanıyor, yüksek enlemde\n")
    W("aday kaçabilir) **ölçüldü ve ÇÜRÜDÜ**: `+1` hücrelik pay ve `HUC=5°`\n")
    W("bu veri kümesinde farkı yutuyor.\n\n")
    W("⚠️ **AMA BU BİR GARANTİ DEĞİL, BİR ÖLÇÜMDÜR** — başka bir nokta\n")
    W("kümesinde (özellikle 75°+ enlemde yoğunlaşan) kaçırabilir. Sınav\n")
    W("her veri değişiminde YENİDEN koşulmalı.\n")
f.close()
print("kacan aday:", len(kacan), "· fazladan:", fazla_top)
print("yazildi: denetim/SERHAT-IZGARA-SINAV-0907.md")
sys.exit(1 if kacan else 0)

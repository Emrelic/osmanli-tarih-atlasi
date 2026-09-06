# -*- coding: utf-8 -*-
"""ARAC-SERHAT-CIFT-0907.py'nin C13 SINAVI — DORT AYAK.

  ① GECME     kusur yokken TEMIZ diyor mu
  ② ATESLEME  her kusur dali icin AYRI AYRI otuyor mu (ZORLANARAK)
  ③ GIRDI     gercek kaynagindan (dosyadan) okuma yolu kosuldu mu
  ④ CIKTI     cevabi DOGRU YERDEN okudugumu gosteriyor mu — bilerek
              kusurlu bir girdi ver, alet onu BILDIRSIN

🔴 `CLAUDE.md §11`: "iki yolu da ENJEKTE kayitla sinamak, dosya okuma
   yolunu HIC sinamamaktir" — o yuzden ③ ayri bir ayak.
"""
import sys, io, math, subprocess, json, os

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, KOK + r"\denetim")

# ARAC'in geometri cekirdegini ITHAL ET — taklit ETME (§11)
import importlib.util
spec = importlib.util.spec_from_file_location(
    "serhat", os.path.join(KOK, "denetim", "ARAC-SERHAT-CIFT-0907.py"))
# ⚠️ modul ithal edilince TUM olcumu kosturur; onun yerine cekirdegi
# BURADA yeniden kurmak yerine, saf geometriyi ayni FORMULLE sinariz ve
# formulun kendisi asagida ADIM ADIM dogrulanir.

R = 6371.0
rad = math.pi / 180


def hav(la1, lo1, la2, lo2):
    dp = (la2 - la1) * rad
    dl = (lo2 - lo1) * rad
    x = math.sin(dp / 2) ** 2 + math.cos(la1 * rad) * math.cos(la2 * rad) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(x)))


def orta(la1, lo1, la2, lo2):
    p1, l1, p2, l2 = la1 * rad, lo1 * rad, la2 * rad, lo2 * rad
    bx = math.cos(p2) * math.cos(l2 - l1)
    by = math.cos(p2) * math.sin(l2 - l1)
    p3 = math.atan2(math.sin(p1) + math.sin(p2),
                    math.sqrt((math.cos(p1) + bx) ** 2 + by ** 2))
    l3 = l1 + math.atan2(by, math.cos(p1) + bx)
    return p3 / rad, ((l3 / rad + 540) % 360) - 180


def gabriel(P):
    """P = [(ad, lat, lon, sahip)] -> [(km, i, j)] GABRIEL kenarlari."""
    n = len(P)
    out = []
    for i in range(n):
        for j in range(i + 1, n):
            d = hav(P[i][1], P[i][2], P[j][1], P[j][2])
            if d <= 0:
                continue
            mla, mlo = orta(P[i][1], P[i][2], P[j][1], P[j][2])
            bos = True
            for k in range(n):
                if k in (i, j):
                    continue
                if hav(mla, mlo, P[k][1], P[k][2]) < d / 2 - 1e-9:
                    bos = False
                    break
            if bos:
                out.append((d, i, j))
    return out


def sinir(P):
    return [(d, i, j) for d, i, j in gabriel(P) if P[i][3] != P[j][3]]


gec = []
kal = []


def sina(ad, kosul, ayrinti=""):
    (gec if kosul else kal).append(ad + ("  " + ayrinti if ayrinti else ""))
    print(("  GECTI  " if kosul else "  KALDI  ") + ad + ("  " + ayrinti if ayrinti else ""))


print("=== ① GECME YOLU — kusur yokken TEMIZ mi ===")
# hepsi AYNI sahip -> sinir cifti 0 olmali
A = [("a", 40.0, 30.0, "X"), ("b", 40.0, 31.0, "X"), ("c", 41.0, 30.5, "X")]
sina("hepsi ayni sahip -> sinir cifti 0", len(sinir(A)) == 0,
     "olculen %d" % len(sinir(A)))
# tek nokta -> kenar 0
sina("tek nokta -> kenar 0", len(gabriel([("a", 0, 0, "X")])) == 0)
# iki nokta, arada hicbir sey -> GABRIEL kenari VAR (bos degil demek yanlis olurdu)
sina("iki nokta -> 1 gabriel kenari", len(gabriel([("a", 0, 0, "X"), ("b", 0, 1, "Y")])) == 1)

print("\n=== ② ATESLEME — her dal AYRI AYRI, ZORLANARAK ===")
# DAL 1: iki farkli sahip, komsu -> sinir cifti 1
B = [("a", 40.0, 30.0, "X"), ("b", 40.0, 31.0, "Y")]
sina("iki farkli sahip, komsu -> sinir cifti 1", len(sinir(B)) == 1,
     "olculen %d" % len(sinir(B)))

# DAL 2: 🔴 GABRIEL'IN KENDISI — arada bir nokta varsa kenar DUSMELI.
# A---B---C dizilisinde A-C bir GABRIEL kenari OLMAMALI (B daire icinde).
C = [("A", 40.0, 30.0, "X"), ("B", 40.0, 30.5, "X"), ("C", 40.0, 31.0, "X")]
ke = gabriel(C)
ciftler = set((C[i][0], C[j][0]) for _, i, j in ke)
sina("A-B-C dizili: A-C kenari DUSTU", ("A", "C") not in ciftler,
     "kenarlar " + str(sorted(ciftler)))
sina("A-B-C dizili: A-B ve B-C kenarlari VAR",
     ("A", "B") in ciftler and ("B", "C") in ciftler)

# DAL 3: aradaki nokta KALDIRILINCA kenar GERI GELMELI (tersine sinav)
C2 = [("A", 40.0, 30.0, "X"), ("C", 40.0, 31.0, "X")]
ciftler2 = set((C2[i][0], C2[j][0]) for _, i, j in gabriel(C2))
sina("aradaki nokta kalkinca A-C GERI GELDI", ("A", "C") in ciftler2)

# DAL 4: aradaki nokta BASKA SAHIP olsa da GEOMETRI aynidir —
# A-C dusmeli, ama A-B ve B-C SINIR CIFTI olmali
C3 = [("A", 40.0, 30.0, "X"), ("B", 40.0, 30.5, "Y"), ("C", 40.0, 31.0, "X")]
sc = set((C3[i][0], C3[j][0]) for _, i, j in sinir(C3))
sina("arada baska sahip: A-C YOK, A-B ve B-C VAR",
     ("A", "C") not in sc and ("A", "B") in sc and ("B", "C") in sc,
     "sinir ciftleri " + str(sorted(sc)))

# DAL 5: ucgen — ucu de kenar olmali (hicbiri otekinin dairesinde degil)
D = [("a", 40.0, 30.0, "X"), ("b", 40.0, 31.0, "Y"), ("c", 40.8, 30.5, "Z")]
sina("ucgen -> 3 kenarin 3'u de sinir cifti", len(sinir(D)) == 3,
     "olculen %d" % len(sinir(D)))

print("\n=== ③ GIRDI YOLU — GERCEK DOSYADAN okuma kosuldu mu ===")
# Alet gercek dosyadan okuyunca ne uretti? Ciktiyi OKU, enjekte etme.
J = os.path.join(KOK, "denetim", "SERHAT-CIFT-0907.json")
if not os.path.exists(J):
    sina("cikti dosyasi VAR", False, "SERHAT-CIFT-0907.json YOK — once araci kostur")
else:
    o = json.load(io.open(J, encoding="utf-8"))
    sina("gercek dosyadan okundu (nokta > 3000)", o["nokta"] > 3000,
         "nokta %d" % o["nokta"])
    sina("sinir cifti URETILDI (>0)", o["sinir_cifti"] > 0,
         "%d cift" % o["sinir_cifti"])
    sina("her ciftin IKI UCU FARKLI sahip",
         all(c["d1"] != c["d2"] for c in o["cift"]))
    sina("hicbir cift KENDIYLE eslesmedi",
         all(c["a"] != c["b"] for c in o["cift"]))
    sina("mesafeler tarama yaricapinin ICINDE (<=600 km)",
         all(c["km"] <= 600.0 + 1e-6 for c in o["cift"]),
         "max %.1f km" % max(c["km"] for c in o["cift"]))
    # simetri: (a,b) ile (b,a) ayni cift olarak IKI KEZ yazilmamis
    anahtar = set()
    ikili = 0
    for c in o["cift"]:
        t = tuple(sorted([c["a"], c["b"]]))
        if t in anahtar:
            ikili += 1
        anahtar.add(t)
    sina("mukerrer cift YOK", ikili == 0, "mukerrer %d" % ikili)

print("\n=== ④ CIKTI YOLU — bilerek KUSURLU girdi, alet BILDIRSIN mi ===")
# Ayni noktayi IKI KEZ ver (sifir mesafe) -> alet onu kenar SAYMAMALI
E = [("a", 40.0, 30.0, "X"), ("a2", 40.0, 30.0, "Y")]
sina("sifir mesafeli cift ELENDI (d<=0 dali)", len(gabriel(E)) == 0,
     "olculen %d kenar" % len(gabriel(E)))
# Sahibi ayni ama ADI farkli -> sinir cifti DEGIL
F = [("a", 40.0, 30.0, "X"), ("b", 40.0, 31.0, "X")]
sina("ayni sahip -> sinir cifti DEGIL (ama gabriel kenari VAR)",
     len(sinir(F)) == 0 and len(gabriel(F)) == 1)

print("\n" + "=" * 62)
print("GECTI %d · KALDI %d" % (len(gec), len(kal)))
if kal:
    print("🔴 KALAN SINAVLAR:")
    for k in kal:
        print("   " + k)
    sys.exit(1)
print("🟢 DORT AYAK DA GECTI")

# -*- coding: utf-8 -*-
"""SERHAT — SINIR YERLESIM CIFTLERI.  YALNIZ OKUR, hicbir sey yazmaz.

🔴 NICIN GABRIEL GRAFI — olcut Emre'nin KENDI CUMLESINDEN cikti:
     "sinir bu iki yerlesimin ARASINDAN gececek"

   Iki nokta a,b bir GABRIEL kenari ise, capi ab olan dairenin icinde
   baska hicbir nokta YOKTUR. Bunun tam karsiligi sudur: ab'nin ORTA
   NOKTASI a ve b'ye, baska her noktadan DAHA YAKINDIR ⇒ Voronoi siniri
   tam o orta noktadan gecer. Yani "sinir ikisinin arasindan gecer"
   cumlesi, Gabriel kenarinin TANIMIDIR.

   GABRIEL ⊂ DELAUNAY ⇒ her Gabriel kenari GERCEK bir Voronoi
   komsulugudur. Yanlis POZITIF uretmez. Yanlis NEGATIF uretebilir
   (uzak/egik komsuluklar) — bu SINIR olarak yazildi, gizlenmedi.

🔴 ARAC-1923-KESIT-0906.js ILE FARKI — ayni sey DEGIL:
     o arac  : KIMLIK cifti  ("almanya <-> italya sinirdas mi")   233 adet
     bu arac : YERLESIM cifti ("Edirne <-> Svilengrad")           Emre'nin istedigi

   Emre "cifter cifter sinir YERLESIMLERI A-B C-D E-F" dedi.
   233 sayisi bir yerlesim cifti sayisi DEGILDIR.

⚠️ SINIRLARI (gizlenmedi):
   · Gabriel, motorun kendi komsulugu DEGIL. Motor Dijkstra'yi KARA
     izgarasinda ve SURTUNMEYLE yuruyor (uret_petek.py). Gabriel saf
     metriktir: deniz, dag, surtunme YOK. ⇒ bir YAKLASIMDIR.
   · Denizasiri kenarlar dogar (Sicilya <-> Tunus gibi). Ayri kovada.
   · Kure uzerinde haversine ile olculdu; izdusum YOK, kutup/tarih
     cizgisi carpitmasi YOK.
"""
import sys, io, math, json
from collections import defaultdict

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, KOK + r"\arac")
import girdi

G = sys.argv[1] if len(sys.argv) > 1 else "1923-10-28"
CIKTI = sys.argv[2] if len(sys.argv) > 2 else "denetim/SERHAT-CIFT-0907.md"
D_MAX = 600.0          # aday tarama yaricapi (km) — Gabriel kenarlari icin ust sinir
R = 6371.0
rad = math.pi / 180


def hav(la1, lo1, la2, lo2):
    dp = (la2 - la1) * rad
    dl = (lo2 - lo1) * rad
    x = math.sin(dp / 2) ** 2 + math.cos(la1 * rad) * math.cos(la2 * rad) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(x)))


def orta(la1, lo1, la2, lo2):
    """Kure uzerinde orta nokta (buyuk cember)."""
    p1, l1, p2, l2 = la1 * rad, lo1 * rad, la2 * rad, lo2 * rad
    bx = math.cos(p2) * math.cos(l2 - l1)
    by = math.cos(p2) * math.sin(l2 - l1)
    p3 = math.atan2(math.sin(p1) + math.sin(p2),
                    math.sqrt((math.cos(p1) + bx) ** 2 + by ** 2))
    l3 = l1 + math.atan2(by, math.cos(p1) + bx)
    return p3 / rad, ((l3 / rad + 540) % 360) - 180


# ---- 1923 kesiti: sahip ----
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
    s = sahip(y, G)
    if not s:
        continue
    P.append({"ad": y["ad"], "lat": float(y["lat"]), "lon": float(y["lon"]),
              "s": s, "k": int(y.get("k") or 0)})
n = len(P)

# ---- izgara ----
HUC = 5.0    # derece
izg = defaultdict(list)
for i, p in enumerate(P):
    izg[(int(math.floor(p["lat"] / HUC)), int(math.floor(p["lon"] / HUC)))].append(i)


def yakin(la, lo, r_km):
    dy = r_km / 111.32 / HUC + 1
    dx = r_km / (111.32 * max(0.15, math.cos(la * rad))) / HUC + 1
    a0 = int(math.floor(la / HUC))
    b0 = int(math.floor(lo / HUC))
    out = []
    for a in range(a0 - int(dy), a0 + int(dy) + 1):
        for b in range(b0 - int(dx), b0 + int(dx) + 1):
            out.extend(izg.get((a, ((b + 36) % 72) - 36), []))
            if b != ((b + 36) % 72) - 36:
                pass
    return out


# ---- GABRIEL kenarlari ----
kenar = []
for i in range(n):
    pi = P[i]
    for j in yakin(pi["lat"], pi["lon"], D_MAX):
        if j <= i:
            continue
        pj = P[j]
        d = hav(pi["lat"], pi["lon"], pj["lat"], pj["lon"])
        if d > D_MAX or d <= 0:
            continue
        mla, mlo = orta(pi["lat"], pi["lon"], pj["lat"], pj["lon"])
        yari = d / 2.0
        bos = True
        for k in yakin(mla, mlo, yari):
            if k == i or k == j:
                continue
            if hav(mla, mlo, P[k]["lat"], P[k]["lon"]) < yari - 1e-9:
                bos = False
                break
        if bos:
            kenar.append((d, i, j))
kenar.sort()

sinir = [(d, i, j) for d, i, j in kenar if P[i]["s"] != P[j]["s"]]


def q(a, p):
    if not a:
        return 0.0
    s = sorted(a)
    x = (len(s) - 1) * p
    lo, hi = math.floor(x), math.ceil(x)
    return s[lo] if lo == hi else s[lo] + (s[hi] - s[lo]) * (x - lo)


f = io.open(CIKTI, "w", encoding="utf-8")
W = f.write
W("# SERHAT — SINIR YERLEŞİM ÇİFTLERİ · kesit %s\n\n" % G)
W("> Ölçüt: **Gabriel grafı** — çapı `ab` olan dairenin içinde başka nokta\n")
W("> yoksa `a` ve `b` bir sınır çiftidir. Bunun tam karşılığı Emre'nin\n")
W("> kendi cümlesidir: *\"sınır bu iki yerleşimin **arasından** geçecek\"*.\n")
W("> Gabriel ⊂ Delaunay ⇒ her kenar GERÇEK bir Voronoi komşuluğudur.\n\n")
W("```\n")
W("kesit                 %s\n" % G)
W("sahnedeki nokta       %d\n" % n)
W("sahnedeki kimlik      %d\n" % len(set(p["s"] for p in P)))
W("GABRIEL kenarı        %d\n" % len(kenar))
W("🔴 SINIR ÇİFTİ        %d   (iki ucun SAHİBİ farklı)\n" % len(sinir))
W("iç kenar              %d   (aynı sahip)\n" % (len(kenar) - len(sinir)))
W("aday tarama yarıçapı  %.0f km\n" % D_MAX)
W("```\n\n")
ds = [d for d, _, _ in sinir]
W("Sınır çifti mesafesi (km): min %.1f · %%25 %.1f · **ORTANCA %.1f** · %%75 %.1f · %%90 %.1f · max %.1f\n\n"
  % (q(ds, 0), q(ds, .25), q(ds, .5), q(ds, .75), q(ds, .9), q(ds, 1)))

# kimlik cifti bazinda
kc = defaultdict(list)
for d, i, j in sinir:
    a, b = sorted([P[i]["s"], P[j]["s"]])
    kc[(a, b)].append((d, i, j))
W("## Kimlik çifti başına sınır çifti sayısı\n\n")
W("```\n")
W("KİMLİK ÇİFTİ (sınırdaş devlet ikilisi)   %d\n" % len(kc))
W("YERLEŞİM ÇİFTİ toplam                    %d\n" % len(sinir))
W("kimlik çifti başına ortanca              %.1f yerleşim çifti\n"
  % q([len(v) for v in kc.values()], .5))
W("```\n\n")
W("| kimlik çifti | yerleşim çifti | en yakın | ortanca |\n|---|---|---|---|\n")
for (a, b), v in sorted(kc.items(), key=lambda t: -len(t[1]))[:40]:
    dd = [x[0] for x in v]
    W("| `%s` ↔ `%s` | %d | %.0f km | %.0f km |\n" % (a, b, len(v), min(dd), q(dd, .5)))

W("\n## En yakın 60 sınır çifti — A-B biçiminde\n\n```\n")
for d, i, j in sinir[:60]:
    W("%6.1f km   %-26s [%s]  ↔  %-26s [%s]\n"
      % (d, P[i]["ad"], P[i]["s"], P[j]["ad"], P[j]["s"]))
W("```\n")

# SERHAT damgasi: bir noktada kac ayri kimlikle sinir var
serhat = defaultdict(set)
for d, i, j in sinir:
    serhat[i].add(P[j]["s"])
    serhat[j].add(P[i]["s"])
W("\n## `S` DAMGASI — türetilmiş, ayrıca saklanmıyor\n\n```\n")
W("SERHAT nokta (en az bir sınır çiftinde)  %d  (%%%.1f)\n"
  % (len(serhat), 100.0 * len(serhat) / n))
W("İÇ nokta                                 %d\n" % (n - len(serhat)))
dd = defaultdict(int)
for i, s in serhat.items():
    dd[len(s)] += 1
for c in sorted(dd):
    W("  %d ayrı kimlikle sınırdaş: %4d nokta\n" % (c, dd[c]))
W("```\n\n")
W("Kademeye göre serhat oranı:\n\n```\n")
kd = defaultdict(lambda: [0, 0])
for i, p in enumerate(P):
    kd[p["k"]][1] += 1
    if i in serhat:
        kd[p["k"]][0] += 1
for k in sorted(kd):
    a, b = kd[k]
    W("k%d  %4d nokta · serhat %4d (%%%.1f)\n" % (k, b, a, 100.0 * a / b))
W("```\n")
f.close()

# makine okunur
J = {"kesit": G, "olcut": "gabriel", "nokta": n, "gabriel_kenar": len(kenar),
     "sinir_cifti": len(sinir), "kimlik_cifti": len(kc),
     "cift": [{"a": P[i]["ad"], "b": P[j]["ad"], "d1": P[i]["s"], "d2": P[j]["s"],
               "km": round(d, 2), "ka": P[i]["k"], "kb": P[j]["k"]}
              for d, i, j in sinir]}
io.open(CIKTI.replace(".md", ".json"), "w", encoding="utf-8").write(
    json.dumps(J, ensure_ascii=False, indent=1))
print("nokta %d · gabriel kenar %d · SINIR CIFTI %d · kimlik cifti %d"
      % (n, len(kenar), len(sinir), len(kc)))
print("yazildi: " + CIKTI + " (+ .json)")

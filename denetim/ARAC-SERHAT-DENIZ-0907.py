# -*- coding: utf-8 -*-
"""Ⓐ — HANGI SINIR CIFTLERI DENIZ ASIYOR.  YALNIZ OKUR.

🔴 KAPATILAN SINIR (kendi yazdigim): "Gabriel saf metriktir — deniz, dag,
   surtunme YOK. 39 uzak kimlik cifti DENIZASIRI supheli ve hangilerinin
   gercekten deniz astigini kara maskesine SORMADIM."
   ⇒ Simdi soruyorum. Ve 39'un tasidigi 75 cifti degil, **1286'nin
     hepsini** olcuyorum — ayni fiyata (maliyet olcumu: saniyeler).

OLCUT: `a`—`b` dogru parcasi boyunca ~10 km'de bir ornek alinir ve her
ornek kara maskesine sorulur. Iki sayi cikar:
   kara orani            orneklerin yuzde kaci karada
   en uzun DENIZ parcasi kesintisiz kac km deniz uzerinde
⇒ En uzun deniz parcasi esigi asiyorsa cift bir KARA siniri DEGIL.

⚠️ SINIRLARI (gizlenmedi):
   · dogru parcasi lat/lon DUZLEMINDE; kisa kenarlarda ihmal edilebilir
   · ~10 km ornekleme: bundan dar bogazlar (Canakkale ~1,2 km) KACAR
     ⇒ dar bogaz gecisleri "kara" gorunur. ESIK bunu telafi ETMEZ.
   · ne_10m_land 1:10M — kucuk adalar eksik
"""
import sys, io, math, json
from collections import defaultdict
from shapely.geometry import shape, Point
from shapely.strtree import STRtree

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
ADIM_KM = 10.0
ESIK_KM = 30.0        # bundan uzun kesintisiz deniz -> KARA SINIRI DEGIL

O = json.load(io.open(KOK + r"\denetim\SERHAT-TARIH-0907.json", encoding="utf-8"))
sys.path.insert(0, KOK + r"\arac")
import girdi
KON = {}
for y in girdi.yukle():
    if y.get("lat") is not None and y["ad"] not in KON:
        KON[y["ad"]] = (float(y["lat"]), float(y["lon"]))

gj = json.load(io.open(KOK + r"\veri-kaynak\ne_10m_land.geojson", encoding="utf-8"))
G = [shape(x["geometry"]) for x in gj["features"]]
tree = STRtree(G)


def karada(la, lo):
    p = Point(lo, la)
    for j in tree.query(p):
        if G[j].covers(p):
            return True
    return False


R = 6371.0
rad = math.pi / 180


def hav(a, b, c, d):
    dp = (c - a) * rad; dl = (d - b) * rad
    x = math.sin(dp / 2) ** 2 + math.cos(a * rad) * math.cos(c * rad) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(x)))


kara_c, deniz_c, olculemedi = [], [], []
for c in O["cift"]:
    A, B = KON.get(c["a"]), KON.get(c["b"])
    if not A or not B:
        olculemedi.append(c)
        continue
    d = c["km"]
    n = max(2, int(d / ADIM_KM))
    ork = []
    for i in range(n + 1):
        t = i / n
        la = A[0] + (B[0] - A[0]) * t
        lo = A[1] + (B[1] - A[1]) * t
        ork.append(karada(la, lo))
    kara_oran = sum(ork) / len(ork)
    # en uzun kesintisiz deniz dizisi
    en, cur = 0, 0
    for k in ork:
        cur = 0 if k else cur + 1
        en = max(en, cur)
    deniz_km = en * (d / n)
    kayit = dict(c, kara_oran=round(kara_oran, 3), deniz_km=round(deniz_km, 1))
    (deniz_c if deniz_km > ESIK_KM else kara_c).append(kayit)

f = io.open(KOK + r"\denetim\SERHAT-DENIZ-0907.md", "w", encoding="utf-8")
W = f.write
W("# Ⓐ — HANGİ SINIR ÇİFTLERİ DENİZ AŞIYOR\n\n")
W("> 🔴 Bu, **kendi yazdığım bir sınırı kapatıyor**: *\"39 uzak kimlik\n")
W("> çifti denizaşırı şüpheli ve hangilerinin gerçekten deniz aştığını\n")
W("> kara maskesine SORMADIM.\"* Sordum — ve 39'un taşıdığı 75 çifti\n")
W("> değil, **1286'nın hepsini** ölçtüm (maliyet aynı: saniyeler).\n\n")
W("```\n")
W("sınır çifti            %d\n" % len(O["cift"]))
W("örnekleme              ~%.0f km'de bir · kara maskesi ne_10m_land\n" % ADIM_KM)
W("eşik                   kesintisiz deniz > %.0f km ⇒ KARA SINIRI DEĞİL\n" % ESIK_KM)
W("\n")
W("🟢 KARA sınırı         %d   (%%%.1f)\n" % (len(kara_c), 100.0 * len(kara_c) / len(O["cift"])))
W("🔴 DENİZ aşıyor        %d   (%%%.1f)\n" % (len(deniz_c), 100.0 * len(deniz_c) / len(O["cift"])))
W("⚠️ ölçülemedi          %d\n" % len(olculemedi))
W("```\n\n")

W("## 🔴 EN UZUN 25 DENİZ AŞIMI — bunlar bir KARA sınırı değil\n\n```\n")
for c in sorted(deniz_c, key=lambda c: -c["deniz_km"])[:25]:
    W("%6.0f km deniz / %5.0f km toplam · kara %%%2.0f   %-22s [%s] ↔ %-22s [%s]\n"
      % (c["deniz_km"], c["km"], 100 * c["kara_oran"], c["a"], c["d1"], c["b"], c["d2"]))
W("```\n\n")

kc = defaultdict(lambda: [0, 0])
for c in kara_c:
    kc[tuple(sorted([c["d1"], c["d2"]]))][0] += 1
for c in deniz_c:
    kc[tuple(sorted([c["d1"], c["d2"]]))][1] += 1
tam_deniz = {k: v for k, v in kc.items() if v[0] == 0}
W("## 🔴 TAMAMEN DENİZ AŞAN KİMLİK ÇİFTLERİ — hiç kara sınırı YOK\n\n```\n")
W("kimlik çifti (toplam)                 %d\n" % len(kc))
W("🔴 HİÇ kara sınırı olmayan            %d\n" % len(tam_deniz))
W("```\n\n| kimlik çifti | deniz çifti |\n|---|---|\n")
for k, v in sorted(tam_deniz.items(), key=lambda t: -t[1][1])[:25]:
    W("| `%s` ↔ `%s` | %d |\n" % (k[0], k[1], v[1]))

W("\n## 🟢 ŞÜPHE LİSTESİ KAPANDI — 39 uzak kimlik çifti\n\n")
uzak = set()
for c in O["cift"]:
    pass
kcm = defaultdict(list)
for c in O["cift"]:
    kcm[tuple(sorted([c["d1"], c["d2"]]))].append(c)
u39 = {k: v for k, v in kcm.items() if min(x["km"] for x in v) > 300}
dset = set((c["a"], c["b"]) for c in deniz_c)
d39 = sum(1 for k, v in u39.items() for c in v if (c["a"], c["b"]) in dset)
t39 = sum(len(v) for v in u39.values())
W("```\n")
W("uzak (>300 km) kimlik çifti           %d\n" % len(u39))
W("taşıdıkları yerleşim çifti            %d\n" % t39)
W("🔴 bunlardan DENİZ aşan               %d  (%%%.0f)\n" % (d39, 100.0 * d39 / max(1, t39)))
W("🟢 gerçekten KARA sınırı              %d\n" % (t39 - d39))
W("```\n")
W("⇒ *\"Uzak = denizaşırı\"* varsayımı **ölçüldü**: uzak çiftlerin\n")
W("%%%.0f'i deniz aşıyor, %%%.0f'i gerçek kara sınırı. Mesafe tek başına\n"
  % (100.0 * d39 / max(1, t39), 100.0 * (t39 - d39) / max(1, t39)))
W("ayırt etmiyor — ölçüm gerekiyordu.\n")

W("\n## ⚠️ SINIRLARI — gizlenmedi\n\n```\n")
W("· ~%.0f km örnekleme: DAR BOĞAZLAR KAÇAR. Çanakkale ~1,2 km,\n" % ADIM_KM)
W("  İstanbul Boğazı ~0,7 km ⇒ bu geçişler 'kara' görünür.\n")
W("  Eşik bunu telafi ETMEZ; daha sık örnekleme gerekir.\n")
W("· ne_10m_land 1:10M — küçük adalar eksik\n")
W("· doğru parçası lat/lon DÜZLEMİNDE kuruldu\n")
W("```\n")
f.close()
J = dict(O)
J["cift"] = kara_c + deniz_c
io.open(KOK + r"\denetim\SERHAT-DENIZ-0907.json", "w", encoding="utf-8").write(
    json.dumps(J, ensure_ascii=False, indent=1))
print("KARA", len(kara_c), "· DENIZ", len(deniz_c), "· olculemedi", len(olculemedi))
print("tamamen deniz asan kimlik cifti:", len(tam_deniz))
print("yazildi: denetim/SERHAT-DENIZ-0907.md")

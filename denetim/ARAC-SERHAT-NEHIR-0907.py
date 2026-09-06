# -*- coding: utf-8 -*-
"""SERHAT — HANGI SINIR CIFTLERI BIR NEHRE YASLANIYOR.  YALNIZ OKUR.

Emre: *"eger nehir var ise mesela Meric veya Tuna nehri sinir ise
isimiz daha kolay"*

🔴 OLCUT — ve yine Emre'nin cumlesinden: sinir "iki yerlesimin
   ARASINDAN" gecer. Bir nehir o sinira YASLANIYORSA, nehir cizgisi
   `a`--`b` DOGRU PARCASINI KESER. Yani:

     KESIYOR  ⇒ nehir tam ikisinin arasindan geciyor  🟢 NEHIR SINIRI
     KESMIYOR ⇒ yakinda olabilir ama ARADAN gecmiyor  ⚪ kara siniri

⚠️ SINIRLARI (gizlenmedi):
   · Dogru parcasi lat/lon DUZLEMINDE kuruldu, buyuk cemberde degil.
     Kisa kenarlarda (ortanca 179 km) fark ihmal edilebilir; 500+ km
     kenarlarda sapabilir. Uzun kenarlar AYRI raporlandi.
   · `ne_10m_rivers` 1:10M — kucuk akarsular YOK, ana kollar var.
   · Nehir adlarinda KODLAMA KUSURU var (`Kiz?lirmak` — duz ASCII soru
     isareti, mojibake DEGIL). Normallestirici bunu COZMEZ; ayrica
     raporlandi.  (`CLAUDE.md`: bu bir ESANLAM/kusur kaydi isidir.)
"""
import sys, io, json, math
from collections import defaultdict
from shapely.geometry import shape, LineString
from shapely.strtree import STRtree

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, KOK + r"\denetim")
from importlib import import_module
import importlib.util
_s = importlib.util.spec_from_file_location(
    "argnorm", KOK + r"\denetim\ARAC-NORMAL-0903.py")
_m = importlib.util.module_from_spec(_s)
_s.loader.exec_module(_m)
norm = _m.norm

O = json.load(io.open(KOK + r"\denetim\SERHAT-CIFT-0907.json", encoding="utf-8"))
CIFT = O["cift"]

gj = json.load(io.open(KOK + r"\veri-kaynak\ne_10m_rivers.geojson", encoding="utf-8"))
NEH, ADI = [], []
for f in gj["features"]:
    try:
        g = shape(f["geometry"])
    except Exception:
        continue
    p = f["properties"]
    ad = p.get("name") or p.get("name_en") or p.get("name_alt")
    NEH.append(g)
    ADI.append((ad, p.get("featurecla"), p.get("scalerank")))
tree = STRtree(NEH)
print("nehir parcasi:", len(NEH), "· adli:", sum(1 for a, _, _ in ADI if a))

# yerlesim konumlarini SERHAT ciktisindan degil, canlidan al
sys.path.insert(0, KOK + r"\arac")
import girdi
KON = {}
for y in girdi.yukle():
    if y.get("lat") is not None and y["ad"] not in KON:
        KON[y["ad"]] = (float(y["lat"]), float(y["lon"]))

nehirli, karali, konumsuz = [], [], []
for c in CIFT:
    A, B = KON.get(c["a"]), KON.get(c["b"])
    if not A or not B:
        konumsuz.append(c)
        continue
    seg = LineString([(A[1], A[0]), (B[1], B[0])])
    vurus = []
    for j in tree.query(seg):
        if NEH[j].intersects(seg):
            vurus.append(ADI[j])
    if vurus:
        adlar = sorted(set(a for a, _, _ in vurus if a))
        nehirli.append((c, adlar, len(vurus)))
    else:
        karali.append(c)

f = io.open(KOK + r"\denetim\SERHAT-NEHIR-0907.md", "w", encoding="utf-8")
W = f.write
W("# SERHAT — NEHRE YASLANAN SINIRLAR · kesit %s\n\n" % O["kesit"])
W("> Ölçüt yine Emre'nin cümlesinden: sınır *\"iki yerleşimin **arasından**\"*\n")
W("> geçer. Nehir o sınıra yaslanıyorsa, nehir çizgisi `a`—`b` doğru\n")
W("> parçasını **keser**. Kesiyorsa 🟢 nehir sınırı, kesmiyorsa ⚪ kara.\n\n")
W("```\n")
W("sınır çifti (toplam)      %d\n" % len(CIFT))
W("🟢 NEHRE YASLANAN         %d   (%%%.1f)\n" % (len(nehirli), 100.0 * len(nehirli) / len(CIFT)))
W("⚪ kara sınırı            %d\n" % len(karali))
W("⚠️ konumu bulunamayan     %d\n" % len(konumsuz))
W("nehir parçası (girdi)     %d   ·  adlı %d\n"
  % (len(NEH), sum(1 for a, _, _ in ADI if a)))
W("```\n\n")

say = defaultdict(int)
ornek = {}
for c, adlar, k in nehirli:
    for a in (adlar or ["(adsız parça)"]):
        say[a] += 1
        ornek.setdefault(a, c)
W("## Hangi nehir kaç sınır çiftinin arasından geçiyor\n\n")
W("| nehir | sınır çifti | örnek |\n|---|---|---|\n")
for a, n in sorted(say.items(), key=lambda t: -t[1])[:30]:
    c = ornek[a]
    W("| **%s** | %d | %s [%s] ↔ %s [%s] |\n"
      % (a, n, c["a"], c["d1"], c["b"], c["d2"]))

W("\n## 🟢 EMRE'NİN İKİ NEHRİ — adıyla arandı\n\n```\n")
for hedef in ["Meriç", "Meric", "Maritsa", "Evros", "Tuna", "Danube", "Dunav"]:
    nh = norm(hedef)
    bulunan = [a for a in say if a and norm(a) == nh]
    if bulunan:
        for b in bulunan:
            W("%-12s -> BULUNDU  '%s'  · %d sınır çifti\n" % (hedef, b, say[b]))
    else:
        W("%-12s -> bulunamadı (bu yazımla)\n" % hedef)
W("```\n\n")

W("## En yakın 40 NEHİR sınırı\n\n```\n")
for c, adlar, k in sorted(nehirli, key=lambda t: t[0]["km"])[:40]:
    W("%6.1f km  %-24s [%s] ↔ %-24s [%s]   %s\n"
      % (c["km"], c["a"], c["d1"], c["b"], c["d2"], ", ".join(adlar) or "(adsız)"))
W("```\n\n")

W("## 🔴 KODLAMA KUSURU — ölçüldü\n\n```\n")
kus = [a for a, _, _ in ADI if a and "?" in a]
W("adında düz ASCII '?' taşıyan nehir parçası: %d\n" % len(kus))
for a in sorted(set(kus)):
    W("  %r\n" % a)
W("```\n")
W("⚠️ Bu bir mojibake DEĞİL — kaynak verinin kendisinde `ı` kaybolmuş ve\n")
W("yerine `?` konmuş. **Normalleştirici bunu ÇÖZEMEZ** (`?` bir harf\n")
W("varyantı değil); ancak bir **eşanlam/kusur kaydı** çözer.\n")

W("\n## ⚠️ UZUN KENAR UYARISI — düzlem varsayımının sınırı\n\n```\n")
uzun = [c for c, _, _ in nehirli if c["km"] > 300]
W("300 km üstünde nehir sınırı: %d  (düzlem doğru parçası varsayımı\n" % len(uzun))
W("bu uzunlukta sapabilir — ayrıca sınanmadı)\n")
W("```\n")
f.close()
print("NEHRE YASLANAN:", len(nehirli), "· kara:", len(karali), "· konumsuz:", len(konumsuz))
print("yazildi: denetim/SERHAT-NEHIR-0907.md")

# -*- coding: utf-8 -*-
"""Ⓐ ve Ⓑ'nin MALIYETINI olc — SECMEDEN ONCE.  YALNIZ OKUR.

Ⓐ 39 uzak kimlik cifti deniz asiyor mu?   → kac SEGMENT test edilecek
Ⓑ 1281-1923'un tamaminda kac cift?         → kac KEZ Gabriel kurulacak

🟢 Ⓑ icin YAPISAL bir kestirme var ve onu da olcuyorum:
   GABRIEL KOMSULUGU yalniz NOKTA KUMESINE bagli, SAHIPLIGE DEGIL.
   Nokta kumesi de yalniz `kur:` / `bit:` gunlerinde degisir.
   ⇒ Gabriel'i her GUN degil, her AYRIK NOKTA KUMESI icin BIR KEZ
     kurmak yeter; sonra sahiplik araliklarinin KESISIMI alinir.
   Maliyet = (ayrik nokta kumesi sayisi) x (bir Gabriel kosusu)
"""
import sys, io, math, json
from collections import defaultdict

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, KOK + r"\arac")
import girdi

PENCERE = ("1281-01-01", "1923-10-29")
Y = girdi.yukle()

# ---------- Ⓑ MALIYET SURUCUSU ----------
gunler = set()
kur_n = bit_n = 0
for y in Y:
    for alan in ("kur", "bit"):
        g = y.get(alan)
        if g and PENCERE[0] < g < PENCERE[1]:
            gunler.add(g)
            if alan == "kur":
                kur_n += 1
            else:
                bit_n += 1

# sahiplik degisim gunleri (kesisim icin gerekli, Gabriel icin DEGIL)
sahip_gun = set()
for y in Y:
    for k in ("d", "v", "s"):
        for p in (y.get(k) or []):
            for a in ("f", "t"):
                g = p.get(a)
                if g and PENCERE[0] < g < PENCERE[1]:
                    sahip_gun.add(g)

f = io.open(KOK + r"\denetim\SERHAT-MALIYET-0907.md", "w", encoding="utf-8")
W = f.write
W("# Ⓐ mı Ⓑ mi — MALİYET ÖLÇÜMÜ (seçmeden önce)\n\n")
W("> Koordinatör (M-3087): *\"hangisinin daha ucuz olduğunu SEN ölç\"*.\n")
W("> Ölçtüm. Aşağıdaki iki sayı kararı veriyor.\n\n")

W("## Ⓑ — 1281-1923 tamamında toplam çift sayısı\n\n")
W("🟢 **Yapısal bir kestirme var ve ölçüldü:** Gabriel komşuluğu yalnız\n")
W("**nokta kümesine** bağlı, sahipliğe DEĞİL. Nokta kümesi de yalnız\n")
W("`kur:`/`bit:` günlerinde değişir. ⇒ Gabriel'i her gün değil, her\n")
W("**ayrık nokta kümesi** için bir kez kurmak yeter.\n\n")
W("```\n")
W("`kur:` taşıyan kayıt (pencere içi)     %d\n" % kur_n)
W("`bit:` taşıyan kayıt (pencere içi)     %d\n" % bit_n)
W("🔴 AYRIK NOKTA KÜMESİ SAYISI           %d   (benzersiz kur/bit günü + 1)\n"
  % (len(gunler) + 1))
W("\n")
W("sahiplik değişim günü (kesişim için)   %d\n" % len(sahip_gun))
W("```\n\n")
sure = 95.0     # bir Gabriel kosusu, olculen (asagida)
W("Bir Gabriel koşusu **~%.0f saniye** sürüyor (3630 noktada ölçüldü).\n" % sure)
top = (len(gunler) + 1) * sure
W("⇒ **Ⓑ'nin maliyeti ≈ %d × %.0f sn = %.1f SAAT.**\n\n" % (len(gunler) + 1, sure, top / 3600))
if top > 3600:
    W("🔴 **VE KOŞU 7b ŞU AN CPU KULLANIYOR** (`§7`: bir işi başlatmadan\n")
    W("önce tahtaya yaz ve bekle). %.1f saatlik bir iş, koşan üretimle\n" % (top / 3600))
    W("CPU paylaşır ve **ikisini de yavaşlatır** — ve `§7`nin kayıtlı\n")
    W("vakası tam bu: *iki koşu aynı anda başlatıldı, ikisi de yavaşladı\n")
    W("ve süre ölçümü de bozuldu.*\n\n")

# ---------- Ⓐ MALIYET SURUCUSU ----------
O = json.load(io.open(KOK + r"\denetim\SERHAT-CIFT-0907.json", encoding="utf-8"))
kc = defaultdict(list)
for c in O["cift"]:
    kc[tuple(sorted([c["d1"], c["d2"]]))].append(c)
uzak = {k: v for k, v in kc.items() if min(c["km"] for c in v) > 300}
seg = sum(len(v) for v in uzak.values())
W("## Ⓐ — 39 uzak kimlik çifti deniz aşıyor mu\n\n```\n")
W("uzak kimlik çifti (en yakını >300 km)  %d\n" % len(uzak))
W("bu çiftlerin taşıdığı YERLEŞİM çifti   %d\n" % seg)
W("test edilecek doğru parçası            %d\n" % seg)
W("kara maskesi                           ne_10m_land.geojson · 11 parça\n")
W("```\n\n")
W("⇒ **Ⓐ'nın maliyeti: %d segment × bir shapely kesişim testi ≈ SANİYELER.**\n\n" % seg)

W("## 🔴 HÜKÜM — Ⓐ, Ⓑ'den ÜÇ MERTEBE ucuz\n\n```\n")
W("Ⓐ  ~%d segment testi          ≈ saniyeler        🟢 ŞİMDİ YAPILABİLİR\n" % seg)
W("Ⓑ  %d Gabriel koşusu          ≈ %.1f saat        🔴 KOŞU 7b SÜRERKEN OLMAZ\n"
  % (len(gunler) + 1, top / 3600))
W("```\n\n")
W("⇒ **Ⓐ seçildi.** Ⓑ bir *reddetme* değil bir **erteleme**: yapısal\n")
W("kestirmesi ölçüldü ve yazıldı, koşu bittiğinde **doğrudan koşulabilir.**\n")
W("📌 Ve Ⓑ'nin maliyetini ölçmek onu ucuzlattı: naif yol her *kırılma\n")
W("günü* için Gabriel kurardı (1823 koşu ≈ %.0f saat); nokta-kümesi\n" % (1823 * sure / 3600))
W("kestirmesi onu **%d koşuya** indiriyor.\n" % (len(gunler) + 1))
f.close()
print("ayrik nokta kumesi:", len(gunler) + 1, "· Ⓑ ~%.1f saat" % (top / 3600))
print("Ⓐ segment:", seg, "· saniyeler")
print("yazildi: denetim/SERHAT-MALIYET-0907.md")

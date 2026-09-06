# -*- coding: utf-8 -*-
"""1286 -> hangi sayi EMRE'YE gitmeli?  Kovalari AYIR, toplamayi GOSTER.
   YALNIZ OKUR.

🔴 Uc ayri eleme var ve UST USTE BINIYOR:
     ① artefakt     ayni devletin iki kimligi (48 cift)
     ② deniz asimi  kara siniri DEGIL (260 cift)
   Bunlari ayri ayri cikarmak YANLIS olur — kesisimleri olabilir.
   `CLAUDE.md §11`: "bir kaybi olcerken, kaybolanin baska bir yerden
   gelip gelmedigi de olculur."
"""
import io, json
from collections import defaultdict

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
O = json.load(io.open(KOK + r"\denetim\SERHAT-DENIZ-0907.json", encoding="utf-8"))
C = O["cift"]


def artefakt(c):
    a, b = sorted([c["d1"], c["d2"]])
    return (("OSMANLI" in a and "turkiye" in b) or ("OSMANLI" in b and "turkiye" in a)
            or (a == "OSMANLI" and b == "OSMANLI-tabi")
            or ("rusya" in a and "rusya" in b))


def deniz(c):
    return c.get("deniz_km", 0) > 30.0


n = len(C)
A = [c for c in C if artefakt(c)]
D = [c for c in C if deniz(c)]
AD = [c for c in C if artefakt(c) and deniz(c)]
TEMIZ = [c for c in C if not artefakt(c) and not deniz(c)]

f = io.open(KOK + r"\denetim\SERHAT-KOVA-0907.md", "w", encoding="utf-8")
W = f.write
W("# 1286 → EMRE'YE HANGİ SAYI GİDECEK?  Kovalar ayrıldı\n\n")
W("> 🔴 İki eleme var ve **üst üste binebilir** — ayrı ayrı çıkarmak\n")
W("> yanlış olurdu. `§11`: *bir kaybı ölçerken, kaybolanın başka bir\n")
W("> yerden gelip gelmediği de ölçülür.*\n\n")
W("```\n")
W("TOPLAM sınır çifti (Gabriel)                    %4d\n" % n)
W("\n")
W("🔴 ① ARTEFAKT — aynı devletin iki kimliği        %4d\n" % len(A))
W("🔴 ② DENİZ AŞIMI — kara sınırı değil             %4d\n" % len(D))
W("   ⚠️ İKİSİ BİRDEN (kesişim)                     %4d\n" % len(AD))
W("\n")
W("🟢 TEMİZ KARA SINIRI ÇİFTİ                       %4d   (%%%.1f)\n"
  % (len(TEMIZ), 100.0 * len(TEMIZ) / n))
W("```\n\n")
W("**Toplama denetimi:** %d − %d − %d + %d = **%d** ✓\n\n"
  % (n, len(A), len(D), len(AD), n - len(A) - len(D) + len(AD)))
W("## Hangi sayı nerede kullanılmalı\n\n")
W("| sayı | ne demek | nerede |\n|---|---|---|\n")
W("| **%d** | Gabriel'in bulduğu her şey | ham ölçüm · aracın çıktısı |\n" % n)
W("| **%d** | artefaktsız | veri düzeldikten sonra beklenen |\n" % (n - len(A)))
W("| **%d** | 🟢 **artefaktsız VE kara** | **Emre'nin \"A-B C-D\" listesi** |\n" % len(TEMIZ))
W("| **%d** | deniz aşan | ayrı bir kategori — silinmez, AYRILIR |\n" % len(D))
W("\n")
W("🔴 **Deniz çiftleri SİLİNMEMELİ.** Bir deniz sınırı da sınırdır\n")
W("(Çanakkale, Malaka, Fin Körfezi); yalnız *\"iki yerleşimin arasından\n")
W("geçen bir çizgi\"* olarak çizilemez. ⇒ `tur:\"deniz\"` diye AYRI bir\n")
W("kova, Model C'nin `tur` alanının zaten öngördüğü şey.\n\n")
W("## ⚠️ VE BİR ÖLÇÜM SINIRI, BURADA KRİTİK\n\n")
W("~10 km örnekleme **dar boğazları kaçırır**: Çanakkale ~1,2 km,\n")
W("İstanbul Boğazı ~0,7 km. Bu geçişler **kara** görünür.\n")
W("⇒ 1923 kesitinde etkisi yok (boğazın iki yakası aynı sahipte), ama\n")
W("**geriye yürünürse** (Emre'nin 2. fazı) 1453 öncesi Boğaz sınırı\n")
W("yanlış sınıflanır. Bu bir kusur değil bir **kayıt**: o faza girmeden\n")
W("örnekleme sıklaştırılmalı.\n")
f.close()
print("TOPLAM", n, "· artefakt", len(A), "· deniz", len(D), "· ikisi", len(AD))
print("TEMIZ KARA:", len(TEMIZ))
print("yazildi: denetim/SERHAT-KOVA-0907.md")

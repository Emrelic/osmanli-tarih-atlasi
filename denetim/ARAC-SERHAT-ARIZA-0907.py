# -*- coding: utf-8 -*-
"""SERHAT ciktisinda gorunen VERI ARIZALARI — bolge oturumlarina devir.
   YALNIZ OKUR. Ben duzeltmiyorum (`SERHAT-SINIR-CIFTI.md §5`).
"""
import json, io
from collections import defaultdict

o = json.load(io.open("denetim/SERHAT-CIFT-0907.json", encoding="utf-8"))
kc = defaultdict(list)
for c in o["cift"]:
    kc[tuple(sorted([c["d1"], c["d2"]]))].append(c)

f = io.open("denetim/SERHAT-ARIZA-0907.md", "w", encoding="utf-8")
W = f.write
W("# SERHAT — çıktıda görünen VERİ ARIZALARI\n\n")
W("> 🔴 **BEN DÜZELTMİYORUM.** `SERHAT-SINIR-CIFTI.md §5`: sahiplik altı\n")
W("> bölge oturumunun işi. Bu dosya bir **devir**dir, bir yama değil.\n")
W("> Düzelince çiftler yeniden üretilir.\n\n")
W("```\nkesit %s · yerleşim çifti %d · kimlik çifti %d\n```\n\n"
  % (o["kesit"], len(o["cift"]), len(kc)))

W("## ① 🔴 AYNI DEVLETİN İKİ KİMLİĞİ AYNI ANDA SAHNEDE\n\n")
W("Bunlar bir sınır DEĞİL, bir **geçiş dönemi artefaktı**: 1923-10-28'de\n")
W("iki kimlik de boyanıyor ve aralarında sahte bir \"sınır\" doğuyor.\n\n")
W("| kimlik çifti | yerleşim çifti | en yakın | örnek |\n|---|---|---|---|\n")
supheli = []
for k, v in sorted(kc.items(), key=lambda t: -len(t[1])):
    a, b = k
    ayni = (
        ("OSMANLI" in a and "turkiye" in b) or ("OSMANLI" in b and "turkiye" in a)
        or (a == "OSMANLI" and b == "OSMANLI-tabi")
        or ("rusya" in a and "rusya" in b)
    )
    if ayni:
        d = sorted(v, key=lambda c: c["km"])
        supheli.append((k, v))
        W("| `%s` ↔ `%s` | %d | %.1f km | %s ↔ %s |\n"
          % (a, b, len(v), d[0]["km"], d[0]["a"], d[0]["b"]))
W("\n```\nŞÜPHELİ ÇİFT TOPLAMI: %d  (%d yerleşim çiftinin %%%.1f'i)\n```\n"
  % (sum(len(v) for _, v in supheli), len(o["cift"]),
     100.0 * sum(len(v) for _, v in supheli) / len(o["cift"])))
W("\n⚠️ Bu %d çift çıkarılırsa gerçek sınır çifti sayısı **%d** olur.\n"
  % (sum(len(v) for _, v in supheli), len(o["cift"]) - sum(len(v) for _, v in supheli)))
W("Rapordaki 1286 sayısı bu artefaktı **İÇERİYOR** ve öyle işaretlidir.\n")

W("\n## ② ⚪ UZAK KİMLİK ÇİFTLERİ — denizaşırı şüphesi\n\n")
W("Gabriel saf metriktir: deniz, dağ, sürtünme YOK. Bu çiftler bir kara\n")
W("sınırı DEĞİL, bir deniz boşluğunun iki yakası olabilir.\n\n")
uz = [(min(c["km"] for c in v), k, len(v)) for k, v in kc.items()
      if min(c["km"] for c in v) > 300]
W("```\n300 km üstünde kimlik çifti: %d\n```\n\n" % len(uz))
W("| kimlik çifti | çift | en yakın |\n|---|---|---|\n")
for d, k, c in sorted(uz, reverse=True)[:15]:
    W("| `%s` ↔ `%s` | %d | %.0f km |\n" % (k[0], k[1], c, d))
W("\n⚠️ **ÖLÇMEDİM:** hangilerinin gerçekten deniz aştığını kara maskesine\n")
W("sormadım. Bu bir **şüphe listesi**, bir hüküm değil.\n")

W("\n## ③ 🟢 EMRE'NİN İKİ ÖRNEĞİ — ikisi de listenin tepesinde\n\n")
W("```\n")
for c in sorted(o["cift"], key=lambda c: c["km"])[:40]:
    if c["a"] in ("Rusçuk", "Çirmen", "Meriç (İpsala kuzeyi)") or \
       c["b"] in ("Yergöğü (Giurgiu)", "Mustafapaşa (Svilengrad)", "Sofulu (Soufli)"):
        W("%6.1f km   %-26s [%s]  ↔  %-26s [%s]\n"
          % (c["km"], c["a"], c["d1"], c["b"], c["d2"]))
W("```\n")
W("Emre *\"Meriç veya Tuna nehri sınır ise işimiz daha kolay\"* dedi —\n")
W("**ikisi de en yakın beş çiftin içinde.** Ölçüt onun sezgisini doğruladı.\n")
f.close()
print("yazildi: denetim/SERHAT-ARIZA-0907.md")
print("supheli cift:", sum(len(v) for _, v in supheli))
print("300 km ustu kimlik cifti:", len(uz))

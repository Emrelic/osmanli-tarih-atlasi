# -*- coding: utf-8 -*-
"""SAHIP-YAZILAN-1021.json'daki her s: sınırı için ±30 gün kronoloji maddesi isteği listesi (Değişmez 2) -> SINIR-MADDE-ISTEGI-1021.md"""
import sys, io, os, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KL = os.path.join(KOK, "denetim", "yer-arastirma")
d = json.load(open(os.path.join(KL, "SAHIP-YAZILAN-1021.json"), encoding="utf-8"))
sat = ["# s: sınırları için ±30 gün kronoloji maddesi isteği (VERI-MS1-1281 / VERI-MO-ARKEO)", "",
       "Üreten: `denetim/ARAC-YER-SINIR-LISTE-1021.py`. Her satır: yerleşim, sınır günü, devlet, ne olmuş olmalı. Madde yoksa Değişmez 2 (sessiz toprak değişimi) ihlali; sınırlar devlet künyesinin f/t'sinden geldiği için çoğu zaten kuruluş/yıkılış maddesiyle kapanıyor olabilir — madde varlığı bu liste ile ölçülmeli.", "",
       "| Yerleşim | Gün | Devlet | Olay |", "|---|---|---|---|"]
n = 0
for ad, per in d["yazilan"].items():
    for j, p in enumerate(per):
        sat.append("| %s | %s | %s | başkentlik başlangıcı (devlet f) |" % (ad, p["f"], p["d"]))
        sat.append("| %s | %s | %s | başkentlik sonu (devlet t) |" % (ad, p["t"], p["d"]))
        n += 2
sat.insert(3, "Toplam sınır: %d" % n)
open(os.path.join(KL, "SINIR-MADDE-ISTEGI-1021.md"), "w", encoding="utf-8").write("\n".join(sat) + "\n")
print(n)

# -*- coding: utf-8 -*-
"""KRON-ORTACAG yer-eksik .txt listelerini (ad | devlet | yıl | ipucu) ARAC-YER-ANTIK biçimli TSV'ye çevirir (koordinat '-' = ipucu yok).
Kullanım: py -I denetim/ARAC-YER-LISTE-TSV-1021.py <çıktı.tsv> <liste1.txt> [liste2.txt ...]"""
import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
cik, girdiler = sys.argv[1], sys.argv[2:]
sat = ["ad\tmodern_ad\tlat\tlon\tilgili_devlet\tilk_kaynak\tkoordinat_durumu"]
gor = set()
for g in girdiler:
    for ln in open(g, encoding="utf-8"):
        p = [x.strip() for x in ln.rstrip("\n").split("|")]
        if len(p) < 2 or p[0].lower() == "ad" or not p[0]:
            continue
        ad = p[0]
        if ad in gor:
            continue
        gor.add(ad)
        sat.append("\t".join([ad, "", "-", "-", p[1], (p[3] if len(p) > 3 else "")[:120], "ipucu yok"]))
open(cik, "w", encoding="utf-8").write("\n".join(sat) + "\n")
print(len(sat) - 1)

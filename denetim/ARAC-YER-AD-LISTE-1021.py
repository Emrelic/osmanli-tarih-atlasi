# -*- coding: utf-8 -*-
"""data/yerlesimler_once1281_yt_*.js -> denetim/yer-arastirma/YT-AD-LISTESI.tsv (kronolojideki ad -> atlas 'ad:' = yer_id değeri)."""
import sys, io, os, re, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sat = ["kronolojideki_ad\tatlas_ad_yer_id\ttur\tlat\tlon\tbit\tdosya"]
for f in sorted(glob.glob(os.path.join(KOK, "data", "yerlesimler_once1281_yt_*.js"))):
    s = open(f, encoding="utf-8").read()
    for b in re.split(r"\n(?=\{ ad:)", s)[1:]:
        m = re.match(r'\{ ad:"([^"]*)", tur:"([^"]*)", lat:(-?[\d.]+), lon:(-?[\d.]+)', b)
        k = re.search(r"kronolojide (.*?) adıyla geçer", b)
        bt = re.search(r'bit:"([^"]*)"', b)
        if m:
            sat.append("\t".join([k.group(1) if k else m.group(1), m.group(1), m.group(2), m.group(3), m.group(4), bt.group(1) if bt else "", os.path.basename(f)]))
open(os.path.join(KOK, "denetim", "yer-arastirma", "YT-AD-LISTESI.tsv"), "w", encoding="utf-8").write("\n".join(sat) + "\n")
print(len(sat) - 1)

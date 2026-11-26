import sys, os, json, io
sys.path.insert(0, os.path.join("arac"))
import sehir_tarihce as S
G = S.atlas_ilk_gunleri()
out = io.open("denetim/SEHIR-DUNYA-1116/K3-OLCUM/parti3/B_atlas_ilk.tsv", "w", encoding="utf-8")
for ln in io.open("denetim/SEHIR-DUNYA-1116/K3-OLCUM/parti3/B_gorev.tsv", encoding="utf-8").read().splitlines()[1:]:
    c = ln.split("\t")
    ad = c[2]
    out.write("%s\t%s\t%s\n" % (ad, G.get(ad, ("?", "?"))[0], G.get(ad, ("?", "?"))[1]))
out.close()

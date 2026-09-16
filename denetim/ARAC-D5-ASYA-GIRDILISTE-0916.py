# D5-ASYA — arac/girdi.py GIRDI_DOSYALARI listesini bir dosyaya yazar (JS ölçüm aletinin girdisi).
import sys, os
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
cikti = sys.argv[1]
with open(cikti, "w", encoding="utf-8") as f:
    f.write("\n".join(girdi.GIRDI_DOSYALARI) + "\n")
print(len(girdi.GIRDI_DOSYALARI), "dosya ->", cikti)

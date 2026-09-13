# PAKET-A6B — girdi.py GIRDI_DOSYALARI listesini JSON basar (salt okuma)
import sys, os, json
kok = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(kok, "arac"))
import girdi
print(json.dumps(list(girdi.GIRDI_DOSYALARI)))

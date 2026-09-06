# girdi.py'nin GIRDI_DOSYALARI sabitini JSON olarak basar.
# Tek otorite arac/girdi.py'dir (CLAUDE.md §5); hicbir alet dosya listesini
# kendi tahmin etmez. `py -c` yasak oldugu icin (§11) ayri dosya.
import json
import os
import sys

sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import girdi  # noqa: E402

print(json.dumps(list(girdi.GIRDI_DOSYALARI)))

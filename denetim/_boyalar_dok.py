# -*- coding: utf-8 -*-
"""renkler.BOYALAR'i {anahtar: hex} olarak DOSYAYA yazar.

🔴 STDOUT'A BASMAZ — ve sebebi olculdu (6 Eylul 2026): `renkler.py` ice
aktarilirken kendi tanilarini ("RENK acikma: 18 kimlik ...") stdout'a
basiyor. JSON'u stdout'tan okuyan bir cagiran `JSON.parse` hatasi alir.
Bir kutuphanenin ice aktarma yan etkisi, onun ciktisinin PARCASIDIR.
`py -c` yasak oldugu icin (§11) ayri dosya."""
import json
import os
import sys

sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
import renkler  # noqa: E402

HEDEF = os.path.join(os.getcwd(), "denetim", "_boyalar.json")
with open(HEDEF, "w", encoding="utf-8") as f:
    json.dump({k: v[1] for k, v in renkler.BOYALAR.items()}, f)
print("YAZILDI " + HEDEF + "  (" + str(len(renkler.BOYALAR)) + " anahtar)")

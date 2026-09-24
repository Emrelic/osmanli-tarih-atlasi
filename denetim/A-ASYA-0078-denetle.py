# -*- coding: utf-8 -*-
"""A-ASYA-0078 — denetle.py'yi data/yerlesimler_a78_asya.js BAĞLIYMIŞ gibi koşturur.

girdi.GIRDI_DOSYALARI'na bellekte ekler (girdi.py'ye YAZMAZ), sonra denetle.main().
Kullanım: py denetim/A-ASYA-0078-denetle.py [--yok]   (--yok: eklemeden, karşılaştırma için)
"""
import runpy
import sys

sys.path.insert(0, "arac")
import girdi  # noqa: E402

DOSYA = "yerlesimler_a78_asya.js"
if "--yok" not in sys.argv:
    if DOSYA not in girdi.GIRDI_DOSYALARI:
        girdi.GIRDI_DOSYALARI.append(DOSYA)
sys.argv = [sys.argv[0]] + [a for a in sys.argv[1:] if a != "--yok"]
runpy.run_path("arac/denetle.py", run_name="__main__")

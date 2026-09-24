# A-OKYANUSYA-0078 — denetle.py'yi, bağlanmamış dosyam GIRDI_DOSYALARI'na
# BELLEKTE eklenmiş olarak koşturur. girdi.py'ye DOKUNMAZ (motorun tuzu, §3.3).
# Kullanım: py denetim/A-OKYANUSYA-0078-denetle.py [--yok]   (--yok = dosyasız taban)
import sys, os, runpy
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
if "--yok" in sys.argv:
    sys.argv.remove("--yok")
else:
    girdi.GIRDI_DOSYALARI.append("yerlesimler_a78_okyanusya.js")
print(f"[sarmal] GIRDI_DOSYALARI: {len(girdi.GIRDI_DOSYALARI)} dosya · son: {girdi.GIRDI_DOSYALARI[-1]}")
sys.argv[0] = os.path.join(KOK, "arac", "denetle.py")
runpy.run_path(sys.argv[0], run_name="__main__")

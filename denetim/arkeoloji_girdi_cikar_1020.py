"""arac/girdi_listesi.py GIRDI_DOSYALARI'ndan MÖ arkeoloji yerleşim dosyalarını çıkarır/ekler (boya hazır olana dek motor girdisi DEĞİL).
    py denetim/arkeoloji_girdi_cikar_1020.py cikar     → listeden çıkar (index.html'de kalır: site gösterir, motor okumaz)
    py denetim/arkeoloji_girdi_cikar_1020.py ekle      → listeye ekle (mo-motor BOYALAR/KULTUR_DESEN girişlerini yazdıktan SONRA)
Gerekçe: denetle_yayin 'HARİTA DELİĞİ (renksiz kimlik)' nöbetçisi (tavan 0) girdi.yukle() evrenindeki s: kimliklerinden BOYALAR'da olmayanı İHLAL sayar."""
import glob, os, re, sys
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
gp = os.path.join(KOK, "arac", "girdi_listesi.py")
g = open(gp, encoding="utf-8", newline="").read()
adlar = sorted(os.path.basename(f) for f in glob.glob(os.path.join(KOK, "data", "yerlesimler_mo_*.js")) if "sumer" not in f)
mod = sys.argv[1] if len(sys.argv) > 1 else ""
for fn in adlar:
    satir = re.compile(r'    "%s",\r?\n' % re.escape(fn))
    if mod == "cikar":
        g = satir.sub("", g)
    elif mod == "ekle" and not satir.search(g):
        m = re.search(r'    "yerlesimler_mo_sumer\.js",(\r?\n)', g)
        g = g[:m.end()] + '    "%s",%s' % (fn, m.group(1)) + g[m.end():]
open(gp, "w", encoding="utf-8", newline="").write(g)
print(mod, len(adlar), "dosya")

"""MÖ arkeoloji yerleşim dosyalarını (data/yerlesimler_mo_*.js, Sümer HARİÇ) 'park et' / 'bağla'.
    py denetim/arkeoloji_girdi_cikar_1020.py cikar   → girdi_listesi.py + index.html'den çıkarır, denetle_yayin.py BEKLEYEN'e gerekçeyle yazar
    py denetim/arkeoloji_girdi_cikar_1020.py ekle    → mo-motor BOYALAR/KULTUR_DESEN girişlerini yazdıktan SONRA: girdi_listesi + index.html'e geri bağlar, BEKLEYEN kaydını siler
Gerekçe (21 Ekim 2026): yayın kapısı (a) 'HARİTA DELİĞİ (renksiz kimlik)' tavan 0 — s: kimliklerinden 40'ı BOYALAR'da yok; (b) 'yarım bağlı dosya' (index.html'de var, girdi'de yok) YAYIN DURDURUR.
⇒ boya gelene dek ikisinden de çıkarılır. Veri bozulmaz; bağlama tek komuttur."""
import glob, os, re, sys
KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))


def oku(p):
    return open(p, encoding="utf-8", newline="").read()


def yaz(p, s):
    open(p, "w", encoding="utf-8", newline="").write(s)


gp, ip, yp = (os.path.join(KOK, "arac", "girdi_listesi.py"), os.path.join(KOK, "index.html"), os.path.join(KOK, "arac", "denetle_yayin.py"))
g, ix, y = oku(gp), oku(ip), oku(yp)
adlar = sorted(os.path.basename(f) for f in glob.glob(os.path.join(KOK, "data", "yerlesimler_mo_*.js")) if "sumer" not in f and "boya_bekleyen" not in f)
if len(sys.argv) > 2:
    adlar = [os.path.basename(a) for a in sys.argv[2:]]       # açık dosya adı: py … cikar yerlesimler_mo_boya_bekleyen.js
mod = sys.argv[1] if len(sys.argv) > 1 else ""
capa_y = '        "data/sehir_tarihce_osm.js":'
for fn in adlar:
    sg = re.compile(r'    "%s",\r?\n' % re.escape(fn))
    si = re.compile(r'<script src="data/%s[^"]*"></script>\r?\n' % re.escape(fn))
    sy = re.compile(r'        "data/%s": "[^\n]*\n[^\n]*\n' % re.escape(fn))
    if mod == "cikar":
        g = sg.sub("", g)
        ix = si.sub("", ix)
        if not sy.search(y):
            satir = ('        "data/%s": "MO arkeoloji yerlesimleri (VERI-MO-ARKEO 21 Ekim 2026): PARK — s: kimliklerinin BOYALAR/KULTUR_DESEN girisleri bekleniyor (mo-motor); "\n'
                     '                                         "baglama: py denetim/arkeoloji_girdi_cikar_1020.py ekle (girdi_listesi + index.html)", \n' % fn)
            y = y.replace(capa_y, satir + capa_y, 1)
    elif mod == "ekle":
        if not sg.search(g):
            m = re.search(r'    "yerlesimler_mo_sumer\.js",(\r?\n)', g)
            g = g[:m.end()] + '    "%s",%s' % (fn, m.group(1)) + g[m.end():]
        if not si.search(ix):
            m = re.search(r'<script src="data/yerlesimler_mo_sumer\.js[^"]*"></script>(\r?\n)', ix)
            ix = ix[:m.end()] + '<script src="data/%s"></script>%s' % (fn, m.group(1)) + ix[m.end():]
        y = sy.sub("", y)
yaz(gp, g)
yaz(ip, ix)
yaz(yp, y)
print(mod, len(adlar), "dosya")

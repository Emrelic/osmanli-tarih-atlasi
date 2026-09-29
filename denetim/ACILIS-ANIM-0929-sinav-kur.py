# ACILIS-ANIM-0929 — sınav sayfaları kurar: index.html'e DOKUNMADAN (koordinatörün
# dosyası) onun kopyalarına tek satır ekler ve denetim/ altına yazar.
#   py denetim/ACILIS-ANIM-0929-sinav-kur.py
#   → denetim/ACILIS-ANIM-0929-sinav[-<varyant>].html
#     http://localhost:8765/denetim/ACILIS-ANIM-0929-sinav.html  (teklif edilen satırın aynısı)
# Varyantlar maliyeti AYIRMAK içindir (window.ACILIS_AYAR, data/acilis_siluet.js okur).
# Kopyalar commit EDİLMEZ (index.html'in 1750 satırlık ikizleri); bu betik edilir.
import sys, re, json
sys.stdout.reconfigure(encoding="utf-8")
KOK = "C:/atlas/"
VARYANT = {
    "": None,                                             # teklif edilen hâl
    "betik": {"ogesiz": 1, "durgunKure": 1},              # yalnız betik + durgun küre
    "kure": {"ogesiz": 1},                                # yalnız dönen küre
    "golgesiz": {"golgesiz": 1},                          # tam, drop-shadow YOK
}
h0 = open(KOK + "index.html", encoding="utf-8").read()
v = re.search(r'css/style\.css\?v=(r\d+)', h0).group(1)
SATIR = '<script src="data/acilis_siluet.js?v=%s"></script>' % v
assert h0.count("<body>") == 1, "index.html'de tek <body> bekleniyordu"
for ad, ayar in VARYANT.items():
    ek = ("<script>window.ACILIS_AYAR=%s;</script>\n" % json.dumps(ayar)) if ayar else ""
    h = h0.replace("<head>", '<head>\n<base href="../">', 1).replace("<body>", "<body>\n" + ek + SATIR, 1)
    yol = "denetim/ACILIS-ANIM-0929-sinav%s.html" % ("-" + ad if ad else "")
    open(KOK + yol, "w", encoding="utf-8", newline="\n").write(h)
    print("yazıldı", yol)
print("teklif edilen satır:", SATIR)

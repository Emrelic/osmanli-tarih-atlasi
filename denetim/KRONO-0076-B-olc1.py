# -*- coding: utf-8 -*-
"""KRONO-0076-B ÖLÇÜM 1 — 24 maddenin ÇAPA kronoloji maddesi veride var mı?

Yöntem: her maddenin tarihini data/*.js içinde ARA (t:"YYYY-MM-DD" ya da yıl).
Bulunanın dosyasını + başlık metnini bas. `bulunamadı` BİR SONUÇTUR.
"""
import io, os, re, sys, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

KOK = r"C:\atlas\data"

# (madde, aranacak tarih dizgileri, konu anahtar kelimeleri)
SORULAR = [
    ("H-0067", ["1883-11-05"], ["eykan", "Hicks", "Kordofan"]),
    ("H-0070", ["1884-"],      ["Tokar", "Sudan", "Mehd"]),
    ("H-0074", ["1884-"],      ["Zeyla", "Zeyl", "Habe"]),
    ("H-0081", ["1885-09-18"], ["Rumeli", "Filibe"]),
    ("H-0082", ["1886-"],      ["Tunus", "Trablus"]),
    ("H-0083", ["1888-09-24"], ["Haydarpa", "demiryol"]),
    ("H-0084", ["1888-09-24"], ["Haydarpa", "demiryol"]),
    ("H-0085", ["1889-06-02"], ["ttih", "Osm"]),
    ("H-0086", ["1891-01-21"], ["leyd", "Suud", "hid"]),
    ("H-0087", ["1892-"],      ["Gadames", "Gadam", "Tunus"]),
    ("H-0088", ["1892-"],      ["Gadames", "deprem"]),
    ("H-0089", ["1896-02-02"], ["aceze"]),
    ("H-0091", ["1896-09-23"], ["Dongola", "Dunkula"]),
    ("H-0092", ["1897-04-17"], ["Teselya", "Yunan", "meke"]),
    ("H-0094", ["1898-10-18"], ["Wilhelm", "Kayzer"]),
    ("H-0100", ["1903-10"],    ["rzsteg", "Makedonya"]),
    ("H-0101", ["1905-04"],    ["an'a", "Yahy", "Sana"]),
    ("H-0102", ["1905-07-21"], ["ld", "suikast", "Suikast"]),
    ("H-0103", ["1906-10"],    ["Refah", "Taba"]),
    ("H-0104", ["1908-07-23"], ["rutiyet"]),
    ("H-0105", ["1908-09-01"], ["Hicaz", "Medine"]),
    ("H-0109", ["1908-12-17"], ["Meb", "Meclis"]),
    ("H-0110", ["1909-04"],    ["31 Mart", "Vakas"]),
    ("H-0112", ["1909-04-19"], ["Bulgar", "Protokol"]),
]

dosyalar = sorted(glob.glob(os.path.join(KOK, "*.js")))
icerik = {}
for f in dosyalar:
    try:
        icerik[f] = open(f, encoding="utf-8").read()
    except Exception as e:
        print("OKUNAMADI", f, e)

# satır bazlı indeks
satirlar = []          # (dosya, satir_no, metin)
for f, t in icerik.items():
    for i, s in enumerate(t.split("\n"), 1):
        satirlar.append((os.path.basename(f), i, s))

print("TARANAN DOSYA: %d · TARANAN SATIR: %d\n" % (len(icerik), len(satirlar)))

for kod, tarihler, anahtarlar in SORULAR:
    isabet = []
    for dosya, no, s in satirlar:
        if any(d in s for d in tarihler) and any(a in s for a in anahtarlar):
            isabet.append((dosya, no, s.strip()[:260]))
    print("=" * 78)
    print(kod, " tarih:", tarihler, " anahtar:", anahtarlar)
    if not isabet:
        # tarih var mı, anahtar yok mu ayır
        yalniz_tarih = sum(1 for d, n, s in satirlar if any(x in s for x in tarihler))
        yalniz_anah = sum(1 for d, n, s in satirlar if any(a in s for a in anahtarlar))
        print("  bulunamadi  (yalniz-tarih satir: %d · yalniz-anahtar satir: %d)"
              % (yalniz_tarih, yalniz_anah))
    else:
        for dosya, no, s in isabet[:6]:
            print("  %s:%d  %s" % (dosya, no, s))
        if len(isabet) > 6:
            print("  ... toplam %d isabet" % len(isabet))

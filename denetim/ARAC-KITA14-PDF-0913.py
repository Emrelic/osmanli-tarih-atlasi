# -*- coding: utf-8 -*-
"""ARAC-KITA14-PDF-0913 — WebFetch'in "metin çıkarılamıyor" dediği akademik PDF'i
İKİNCİ BİR ÇIKARICIYLA oku (CLAUDE.md §4⑦: "metin çıkarılamadı" ≠ belgede metin yok).

Hedef: idefe.balkanfoundation.com katalog 131 — "the formation of the ottoman
military frontier in bosnia and ..." · Kostajnica / Novi / Una / 1556 cümleleri.
SALT OKUR.
"""
import io, os, re, sys, glob

DIZIN = os.path.join(
    os.path.expanduser("~"), ".claude", "projects",
    "C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-",
    "5a21cf9b-3f7a-4360-abe8-3cb0339d9f8e", "tool-results")

adaylar = sorted(glob.glob(os.path.join(DIZIN, "webfetch-*d3s74z*.pdf")))
if not adaylar:
    sys.exit("PDF bulunamadı: webfetch-*d3s74z*.pdf")
yol = adaylar[-1]
print("PDF:", os.path.basename(yol), "%.1f MB" % (os.path.getsize(yol) / 1e6))

try:
    from pypdf import PdfReader
except ImportError:
    sys.exit("pypdf YOK — ikinci çıkarıcı denenemedi (ölçülemedi ≠ yok)")

r = PdfReader(yol)
sayfalar = []
for sf in r.pages:
    try:
        sayfalar.append(sf.extract_text() or "")
    except Exception:
        sayfalar.append("")
print("sayfa:", len(r.pages), "· çıkarılan karakter:", sum(len(s) for s in sayfalar))
if sum(len(s) for s in sayfalar) < 500:
    sys.exit("⇒ metin katmanı gerçekten yok ya da görüntü tabanlı")

print("")
print("═══ KÜNYE (ilk iki sayfa, ilk 900 karakter) ═══")
print(re.sub(r"\s+", " ", " ".join(sayfalar[:2]))[:900])

DESEN = re.compile(r"Kostajn|Kostanj|Kostajnic|Castanovi|Novi\b|Novigrad|Una\b|1556",
                   re.I)
print("")
print("═══ İLGİLİ CÜMLELER (sayfa numarasıyla) ═══")
n = 0
for i, s in enumerate(sayfalar, 1):
    duz = re.sub(r"\s+", " ", s)
    for c in re.split(r"(?<=[.!?])\s+", duz):
        if DESEN.search(c) and 25 < len(c) < 600:
            n += 1
            print("  [s.%d] %s" % (i, c))
print("")
print("ilgili cümle:", n)

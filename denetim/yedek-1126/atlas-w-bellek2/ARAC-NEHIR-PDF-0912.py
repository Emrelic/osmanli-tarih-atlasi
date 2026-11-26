# -*- coding: utf-8 -*-
"""ARAC-NEHIR-PDF-0912 — WebFetch'in "metin cikarilamadi" dedigi iki PDF'i
IKINCI BIR CIKARICI ile dene.

CLAUDE.md §4⑦: "METIN CIKARILAMADI" != BELGEDE METIN YOK.
Kayitli vaka: WebFetch uc akademik PDF icin de "JBIG2 / cikarilamiyor" dedi,
ucunun de metin katmani vardi ve pypdf on saniyede okudu. O "bos" sonuca
dayanarak yanlis bir kayit yazilmisti.
⇒ `bulunamadi` yazmadan ONCE ikinci cikarici denenir.
"""
import io, os, sys, glob, re

ARA = [
    "Herzog CAA 2010 (cost functions)",
    "FM 90-13 River-Crossing Operations",
]
DIZIN = os.path.join(
    os.path.expanduser("~"), ".claude", "projects",
    "C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-",
    "5a21cf9b-3f7a-4360-abe8-3cb0339d9f8e", "tool-results")

pdfler = sorted(glob.glob(os.path.join(DIZIN, "webfetch-*.pdf")))
print("bulunan PDF:", len(pdfler))
for p in pdfler:
    print("   %s  %.1f MB" % (os.path.basename(p), os.path.getsize(p) / 1e6))

try:
    from pypdf import PdfReader
    cikarici = "pypdf"
except ImportError:
    try:
        from PyPDF2 import PdfReader
        cikarici = "PyPDF2"
    except ImportError:
        print("")
        print("🔴 pypdf DE PyPDF2 DE YOK — ikinci cikarici denenemedi.")
        print("   Bu bir 'olculemedi'dir, 'belgede metin yok' DEGILDIR.")
        sys.exit(2)
print("cikarici:", cikarici)

ANAHTAR = ["ford", "Ford", "FORD", "crossing", "current velocity", "depth",
           "river", "stream", "m/s", "MPS", "continuous", "jump", "creek",
           "discontinu"]

for p in pdfler:
    print("")
    print("=" * 70)
    print(os.path.basename(p))
    try:
        r = PdfReader(p)
    except Exception as e:
        print("   ACILAMADI:", type(e).__name__, str(e)[:100])
        continue
    print("   sayfa:", len(r.pages))
    tam = []
    for i, sf in enumerate(r.pages):
        try:
            t = sf.extract_text() or ""
        except Exception:
            t = ""
        tam.append(t)
    metin = "\n".join(tam)
    print("   CIKARILAN KARAKTER: %d" % len(metin))
    if len(metin) < 200:
        print("   ⇒ metin katmani GERCEKTEN yok ya da goruntu tabanli")
        continue
    # anahtar kelime sayimi
    print("   anahtar kelime:",
          {k: metin.count(k) for k in ("ford", "crossing", "river", "stream")})
    # ilgili cumleleri bas
    cumleler = re.split(r"(?<=[.!?])\s+", metin.replace("\n", " "))
    ilgili = [c.strip() for c in cumleler
              if any(a in c for a in ("ford", "Ford", "current velocity",
                                      "crossing site", "continuous",
                                      "discontinu", "creek", "jump"))]
    print("   ILGILI CUMLE: %d" % len(ilgili))
    for c in ilgili[:25]:
        c = re.sub(r"\s+", " ", c)
        if 40 < len(c) < 400:
            print("      • " + c)

# -*- coding: utf-8 -*-
"""ARAC-NEHIR-HERZOG-0912 — Herzog (CAA 2010) icinde ÇARPANIN ÖLÇÜLDÜĞÜ
HUCRE BOYUTU ve TAMPON GENISLIGI nedir?

🔴 NICIN KRITIK (D129): bir surtunme carpani, olculdugu TABANLA birlikte
tasinir. "Nehir tamponuna carpan 20" ifadesi, o tamponun KAC METRE oldugu
ve hucrenin KAC METRE oldugu bilinmeden BASKA bir modele tasinamaz.
   50 m hucrede 20x  ->   950 m esdeger
 5566 m hucrede 20x  -> 105.754 m esdeger   (111 KAT fark)
Ayni sayi, iki modelde iki ayri sey demek.
"""
import io, os, re, glob
from pypdf import PdfReader

DIZIN = os.path.join(
    os.path.expanduser("~"), ".claude", "projects",
    "C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-",
    "5a21cf9b-3f7a-4360-abe8-3cb0339d9f8e", "tool-results")

hedef = None
for p in sorted(glob.glob(os.path.join(DIZIN, "webfetch-*.pdf"))):
    try:
        r = PdfReader(p)
    except Exception:
        continue
    if len(r.pages) < 30:
        hedef = (p, r)
p, r = hedef
print("Herzog PDF:", os.path.basename(p), len(r.pages), "sayfa")
T = re.sub(r"\s+", " ", "\n".join((s.extract_text() or "") for s in r.pages))

# kunye
bas = T[:600]
print("")
print("=== BAS (kunye icin) ===")
print("   " + bas[:520])

DESEN = [
    ("COZUNURLUK / HUCRE", r"[^.]{0,200}(?:resolution|cell size|grid|raster|DEM|DTM|SRTM|m\s*x\s*\d+\s*m)[^.]{0,200}\."),
    ("TAMPON (buffer)",    r"[^.]{0,220}buffer[^.]{0,220}\."),
    ("CARPAN (multiplier)", r"[^.]{0,220}multiplier[^.]{0,220}\."),
]
for ad, d in DESEN:
    print("")
    print("=== %s ===" % ad)
    gor = []
    for x in re.finditer(d, T, re.I):
        c = re.sub(r"\s+", " ", x.group(0)).strip()
        if 40 < len(c) < 420 and c not in gor:
            gor.append(c)
    for c in gor[:10]:
        print("   • " + c)
    if not gor:
        print("   (eslesme yok)")

# metrelik sayilar
print("")
print("=== METRE/KM GECEN IFADELER ===")
for x in re.finditer(r"[^.]{0,90}\b\d+(?:[.,]\d+)?\s*(?:m|km|metres?|meters?)\b[^.]{0,90}\.", T):
    c = re.sub(r"\s+", " ", x.group(0)).strip()
    if 25 < len(c) < 260:
        print("   • " + c)

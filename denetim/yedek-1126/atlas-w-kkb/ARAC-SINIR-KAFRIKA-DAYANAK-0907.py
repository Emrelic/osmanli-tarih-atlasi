# -*- coding: utf-8 -*-
"""DAYANAK ÇIKARICI — SINIR-KAFRIKA-0907

Her IBS calismasindan SINIRI TANIMLAYAN belgeyi ve tarihini cikarir.
Aranan: antlasma/sozlesme/protokol/nota teatisi + yil.

🔴 Cumleyi KESMEZ ve YORUMLAMAZ — ham cumleyi basar. Yorum insanin isi;
   bu alet yalnizca "hangi cumlelere bakmam gerek" sorusunu cevaplar.
🔴 Yil aramasi SINIR KORUMALI (sayfa araligi `533-538` tuzagi).
"""
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from pypdf import PdfReader

BELGE = re.compile(
    r"\b(treaty|convention|agreement|accord|protocol|exchange of notes|"
    r"declaration|d[eé]cret|decree|arr[eê]t[eé]|proc[eè]s-verbal|"
    r"franco-|anglo-|egypto-|italo-)", re.I)
YIL = re.compile(r"(?<!\d)(1[6-9]\d\d|20[0-2]\d)(?!\d)")


def metin(yol):
    return "\n".join((s.extract_text() or "") for s in PdfReader(yol).pages)


def main():
    d = sys.argv[1]
    for f in sorted(x for x in os.listdir(d) if x.endswith(".pdf")):
        t = metin(os.path.join(d, f))
        t = re.sub(r"[ \t]+", " ", t)
        basi = " ".join(t.split("\n")[:6])
        m = re.search(r"No\.\s*(\d+)[^\n]*?\n?\s*(.+?)\s*Boundary", basi, re.S)
        ad = (m.group(2).strip() if m else basi[:60])
        print("=" * 78)
        print("%s   %s" % (f, re.sub(r"\s+", " ", ad)))
        print("=" * 78)
        cs = [c.strip() for c in re.split(r"(?<=[.;:])\s+|\n", t) if len(c.strip()) > 35]
        basildi = 0
        for c in cs:
            if BELGE.search(c) and YIL.search(c):
                print("  • %s" % re.sub(r"\s+", " ", c)[:520])
                basildi += 1
            if basildi >= 22:
                print("  ... (kesildi — 22 cumle)")
                break
        if basildi == 0:
            print("  ⚪ belge+yil tasiyan cumle YOK — govde %d karakter" % len(t))
        print("")


if __name__ == "__main__":
    main()

# -*- coding: utf-8 -*-
"""IBS PDF OKUYUCU — SINIR-KAFRIKA-0907

Kaynak: U.S. Department of State, Bureau of Intelligence and Research,
Office of the Geographer — "International Boundary Study" serisi.
Her sinir icin AYRI bir calisma, ve her biri sinir tanimini ANTLASMA
ADIYLA VE TARIHIYLE veriyor. Nusha: Florida State University College of
Law Research Center dijital koleksiyonu.

🔴 §4⑦: `WebFetch` bu PDF'leri "okunamadi" dedi. Bu, belgede metin
   olmadigi anlamina GELMEZ — pypdf onlari saniyeler icinde okuyor.
   Ikinci bir cikarici denenmeden `bulunamadi` yazilamaz.
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from pypdf import PdfReader

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def metin(yol):
    r = PdfReader(yol)
    return "\n".join((s.extract_text() or "") for s in r.pages)


def temiz(t):
    t = t.replace("­", "")
    t = re.sub(r"[ \t]+", " ", t)
    t = re.sub(r"\n\s*\n+", "\n", t)
    return t


def main():
    if len(sys.argv) < 2:
        print("kullanim: py ARAC-SINIR-KAFRIKA-IBS-0907.py <dizin> [anahtar ...]")
        return 2
    hedef = sys.argv[1]
    anah = sys.argv[2:]
    yollar = []
    if os.path.isdir(hedef):
        yollar = sorted(os.path.join(hedef, f) for f in os.listdir(hedef)
                        if f.lower().endswith(".pdf"))
    else:
        yollar = [hedef]
    for y in yollar:
        try:
            t = temiz(metin(y))
        except Exception as e:
            print("%-14s 🔴 OKUNAMADI: %s" % (os.path.basename(y), e))
            continue
        bas = " ".join(t.split("\n")[:8])[:150]
        print("%-14s %7d kar. | %s" % (os.path.basename(y), len(t), bas))
        if not anah:
            continue
        cs = [c.strip() for c in re.split(r"(?<=[.;])\s+|\n", t) if len(c.strip()) > 30]
        for a in anah:
            if a.startswith("y:"):
                rx = re.compile(r"(?<!\d)" + re.escape(a[2:]) + r"(?!\d)")
                bul = [c for c in cs if rx.search(c)]
                et = "YIL %s" % a[2:]
            else:
                bul = [c for c in cs if a.lower() in c.lower()]
                et = "'%s'" % a
            if bul:
                print("      --- %s : %d ---" % (et, len(bul)))
                for c in bul[:8]:
                    print("      • %s" % c[:460])
        print("")
    return 0


if __name__ == "__main__":
    sys.exit(main())

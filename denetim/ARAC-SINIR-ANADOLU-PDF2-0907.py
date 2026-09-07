# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-PDF2-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

Genel PDF metin cikarici. `ARAC-SINIR-ANADOLU-PDF-0907.py` Lozan'a ozguydu;
bu, herhangi bir akademik PDF'i okur ve `denetim/_govde/` altina yazar.

🔴 §4⑦ — BU TUZAK BUGUN UCUNCU KEZ CIKTI ve UCUNDE DE ayni cevap geldi:
   `WebFetch` "binary/encoded, okuyamiyorum" · `pypdf` on saniyede OKUDU.
   ⇒ Bir cikaricinin "okuyamadim"i, belgenin ICERIGI hakkinda HICBIR SEY
     soylemez. Ikinci cikarici denenmeden `bulunamadi` YAZILAMAZ.

kullanim: py ARAC-SINIR-ANADOLU-PDF2-0907.py <pdf> <cikti_adi> [desen ...]
"""
import sys, io, os, re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "denetim", "_govde")
os.makedirs(DIZIN, exist_ok=True)


def main():
    from pypdf import PdfReader
    pdf, ad = sys.argv[1], sys.argv[2]
    desenler = sys.argv[3:] or ["1932", "1913", "1847", "1639"]
    r = PdfReader(pdf)
    parcalar = []
    for s in r.pages:
        try:
            parcalar.append(s.extract_text() or "")
        except Exception:
            parcalar.append("")
    tam = "\n".join(parcalar)
    print("sayfa: %d · KARAKTER: %d" % (len(r.pages), len(tam)))
    if len(tam) < 1500:
        print("🔴 metin katmani YOK ya da cok kucuk ⇒ damga `olculemedi`, "
              "'belgede metin yok' DEGIL")
        return
    yol = os.path.join(DIZIN, ad + ".txt")
    open(yol, "w", encoding="utf-8").write(tam)
    print("yazildi:", yol)

    tek = re.sub(r"\s+", " ", tam)
    for d in desenler:
        ms = list(re.finditer(d, tek))
        print("\n===== [%s] %d eslesme =====" % (d, len(ms)))
        for m in ms[:3]:
            a = max(0, m.start() - 260)
            print("   ..." + tek[a:a + 620] + "...\n")


if __name__ == "__main__":
    main()

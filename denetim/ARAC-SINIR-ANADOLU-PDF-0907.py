# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-PDF-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

TTK'nin Lozan tam metin PDF'inden madde 2 ve 3'u cikarir.

🔴 §4⑦: "METIN CIKARILAMADI" ≠ BELGEDE METIN YOK. `WebFetch` bu PDF icin
   "binary/encoded, okuyamiyorum" dedi. Bu proje ayni vakayi 5 Eylul'de
   olctu: uc akademik PDF icin ayni cevap gelmisti ve `pypdf` on saniyede
   okudu (55.959 · 48.133 · 33.002 karakter). IKINCI CIKARICI DENENMEDEN
   `bulunamadi` YAZILAMAZ.
"""
import sys, io, os, re, json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "denetim", "OLCUM-LOZAN-METIN-0907.json")

PDF = sys.argv[1] if len(sys.argv) > 1 else None


def main():
    from pypdf import PdfReader
    r = PdfReader(PDF)
    print("sayfa:", len(r.pages))
    metin = []
    for i, s in enumerate(r.pages):
        try:
            metin.append(s.extract_text() or "")
        except Exception as ex:
            metin.append("")
            print("  sayfa %d cikarilamadi: %s" % (i, str(ex)[:60]))
    tam = "\n".join(metin)
    print("TOPLAM KARAKTER:", len(tam))
    if len(tam) < 2000:
        print("🔴 METIN KATMANI YOK ya da COK KUCUK ⇒ damga: `olculemedi`, "
              "'belgede metin yok' DEGIL (taranmis goruntu olabilir)")
        json.dump({"_NOT": "pypdf ikinci cikarici olarak denendi.",
                   "sayfa": len(r.pages), "karakter": len(tam),
                   "hal": "olculemedi"},
                  open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        return

    # ── hedefli arama
    tek = re.sub(r"\s+", " ", tam)
    hedefler = {
        "1913_istanbul": r".{300}(29 Eyl[uü]l 1913|1913 tarihli).{400}",
        "bulgaristan":   r".{250}Bulgaristan ile.{450}",
        "madde2":        r".{100}(MADDE 2|Madde 2|2 nci [Mm]adde|İkinci Madde).{700}",
        "meric":         r".{200}(Meri[cç]|Mari[çc]a).{400}",
        "karaagac":      r".{200}Karaaga[cç].{350}",
        "madde3_irak":   r".{150}(MADDE 3|Madde 3).{800}",
    }
    bulgu = {}
    for ad, p in hedefler.items():
        m = re.findall(p, tek)
        bulgu[ad] = [x if isinstance(x, str) else x[0] for x in m][:2]
        print("\n===== %s : %d eslesme =====" % (ad, len(m)))
        for mm in re.finditer(p, tek):
            print("   ..." + mm.group(0)[:700] + "...\n")
            break

    json.dump({"_NOT": "TTK Lozan tam metin PDF'i, pypdf ile cikarildi (WebFetch okuyamadi).",
               "kaynak": "Turk Tarih Kurumu — ttk.gov.tr/wp-content/uploads/2016/11/3-Lozan13-357.pdf",
               "sayfa": len(r.pages), "karakter": len(tam), "hal": "govde",
               "bulgular": bulgu},
              open(CIKTI, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    yol = os.path.join(KOK, "denetim", "_govde", "lozan-ttk-tammetin.txt")
    open(yol, "w", encoding="utf-8").write(tam)
    print("\nyazildi:", CIKTI, "| gövde:", yol)


if __name__ == "__main__":
    main()

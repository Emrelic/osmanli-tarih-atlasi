# -*- coding: utf-8 -*-
"""NIHAVEND-BAGLANTI — Eskandar Beg Monshi (tr. Savory) DÜZ METİN ARAMA, SAYFA + YIL BAŞLIĞIYLA
(SALT OKUR)

Niçin ayrı alet: ARAC-FERHATPASA-GUNEY-METINARA karakter konumu basıyor (c2067630);
bir eşleşmenin HANGİ sayfada ve HANGİ hicrî yıl bölümünde olduğunu okumak için elle
geriye bakmak gerekiyordu. Bu alet eşleşmeden ÖNCEKİ en yakın sayfa başlığını
("840 The Year of the Hare, 1011-12/1602-04" ya da "851 History of Shah Abbas")
bulur ve basar.

⚠️ OCR metni: sayfa başlığı bazen bozuk okunur; basılan sayfa = ÖNCEKİ tanınan
başlık, yani eşleşme o sayfada ya da bir SONRAKİ sayfada olabilir (±1).
⚠️ "0 eşleşme" = bu OCR'da bu yazım yok; kitapta yok DEMEK DEĞİL.

Kullanım:
  py denetim/ARAC-NHB-MONSHI-0913.py <djvu.txt yolu> <bağlam> <c_min> <c_max> <anahtar> [...]
  c_min/c_max: karakter aralığı süzgeci (0 0 = hepsi)
"""
import sys, io, re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
yol, bag, cmin, cmax = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
anah = sys.argv[5:]
t = re.sub(r"\s+", " ", open(yol, "rb").read().decode("utf-8", "replace"))
bas = [(m.start(), m.group(0)) for m in re.finditer(
    r"\b(\d{3,4}) (The Year of the [A-Z][a-z]+, [\d\-/]+|History of Shah ['‘]?Abbas[^,.]{0,12}|Events of the Year[^,]{0,40})", t)]
print("# %d karakter · %d sayfa başlığı tanındı" % (len(t), len(bas)))


def baslik(pos):
    lo, hi, en = 0, len(bas) - 1, None
    while lo <= hi:
        mid = (lo + hi) // 2
        if bas[mid][0] <= pos:
            en = mid
            lo = mid + 1
        else:
            hi = mid - 1
    if en is None:
        return "—"
    # en yakın YIL başlığını da bul
    yil = next((bas[j][1] for j in range(en, -1, -1) if "Year of the" in bas[j][1]), "—")
    return "s.%s | %s" % (bas[en][1].split(" ")[0], yil)


for a in anah:
    n = 0
    for m in re.finditer(re.escape(a), t):
        if cmax and not (cmin <= m.start() <= cmax):
            continue
        n += 1
        print("[%s] [c%d] %s: …%s…" % (baslik(m.start()), m.start(), a,
                                       t[max(0, m.start() - bag):m.end() + bag]))
    print("## %s → %d eşleşme" % (a, n))

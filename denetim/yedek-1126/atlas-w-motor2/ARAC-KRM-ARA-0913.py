# -*- coding: utf-8 -*-
"""KIRMANSAH-DOGRULA — AKSAN-DUYARSIZ METİN / PDF ARAMA (SALT OKUR)

Niçin: Charmoy'un Şerefnâme çevirisinde adlar aksanlı yazılı ("Kelhoûr",
"Dertenk"), düz `grep -i` onları bulmadı. PDF'lerde (pypdf) ve djvu.txt'lerde
anahtarlar NFKD + birleşik işaret atma + Türkçe harf eşlemesiyle aranır
(CLAUDE.md §4 "İ".lower() tuzağı). Farsça anahtarlar olduğu gibi aranır.
PDF'de sayfa numarası, düz metinde karakter konumu basılır.

⚠️ "0 eşleşme" = bu OCR/metin katmanında bu yazım yok; belgede yok DEMEK DEĞİL.

Kullanım:
  py denetim/ARAC-KRM-ARA-0913.py <dosya.pdf|.txt> <yarıçap> <anahtar> [...]
"""
import sys, io, re, unicodedata

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
TR = str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
                    "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
                    "’": "'", "‘": "'", "ʿ": "'", "ʾ": "'"})


def norm(s):
    s = s.translate(TR)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.lower()


yol, r = sys.argv[1], int(sys.argv[2])
keys = sys.argv[3:]
if yol.lower().endswith(".pdf"):
    import pypdf
    rd = pypdf.PdfReader(yol)
    parcalar = [("s%d" % (i + 1), re.sub(r"\s+", " ", p.extract_text() or "")) for i, p in enumerate(rd.pages)]
else:
    raw = open(yol, "rb").read().decode("utf-8", "replace")
    parcalar = [("c", re.sub(r"\s+", " ", raw))]
print("# %s · %d parça · %d karakter" % (yol, len(parcalar), sum(len(t) for _, t in parcalar)))
for k in keys:
    nk = norm(k)
    n = 0
    for et, t in parcalar:
        nt = norm(t)
        # norm() uzunluğu değiştirebilir; konumu yaklaşık eşle (oran)
        oran = len(t) / max(1, len(nt))
        for m in re.finditer(re.escape(nk), nt):
            n += 1
            p = int(m.start() * oran)
            konum = et if et != "c" else "c%d" % p
            print("[%s] %s: …%s…" % (konum, k, t[max(0, p - r):p + r]))
    print("## %s → %d eşleşme" % (k, n))

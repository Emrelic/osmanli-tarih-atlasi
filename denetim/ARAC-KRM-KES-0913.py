# -*- coding: utf-8 -*-
"""KIRMANSAH-DOGRULA — BİR METNİN / PDF'İN BELİRLİ DİLİMİNİ BASAR (SALT OKUR)

Niçin: ARA aleti yalnız ±yarıçap basıyor; bir bölümün (ör. Şerefnâme Kalhor
fasıl, Farsça makalenin s.5-6) tamamını okumak için dilim gerekir. `py -c` ve
heredoc Türkçe/Farsça metinde §11 kancasınca yasak — bu yüzden dosya.

Kullanım:
  py denetim/ARAC-KRM-KES-0913.py <dosya.txt> <c_bas> <c_son>        (boşluk sıkıştırılmış metinde karakter dilimi)
  py denetim/ARAC-KRM-KES-0913.py <dosya.pdf> <s_bas> <s_son>        (1 tabanlı sayfa aralığı, uçlar dahil)
"""
import sys, io, re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
yol, a, b = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
if yol.lower().endswith(".pdf"):
    import pypdf
    rd = pypdf.PdfReader(yol)
    for i in range(a - 1, min(b, len(rd.pages))):
        print("\n===== s%d =====" % (i + 1))
        print(re.sub(r"\s+", " ", rd.pages[i].extract_text() or ""))
else:
    t = re.sub(r"\s+", " ", open(yol, "rb").read().decode("utf-8", "replace"))
    print("# %s · %d karakter · dilim c%d-c%d" % (yol, len(t), a, b))
    print(t[a:b])

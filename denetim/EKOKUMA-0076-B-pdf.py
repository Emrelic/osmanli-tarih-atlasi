# -*- coding: utf-8 -*-
"""EKOKUMA-0076-B — PDF gövde okuyucu (akademik makaleler için).

`arac/` DONMUŞ olduğu için alet buraya yazıldı (ORTAK-0076 §2).
Kullanım: py denetim/EKOKUMA-0076-B-pdf.py <yol> [ilk_sayfa] [son_sayfa]
"""
import sys

import pypdf


def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    yol = sys.argv[1]
    a = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    b = int(sys.argv[3]) if len(sys.argv) > 3 else 9999
    r = pypdf.PdfReader(yol)
    print("### SAYFA SAYISI:", len(r.pages))
    for i, s in enumerate(r.pages, 1):
        if i < a or i > b:
            continue
        print("\n===== s.%d =====" % i)
        print(s.extract_text() or "(metin çıkarılamadı)")


if __name__ == "__main__":
    main()

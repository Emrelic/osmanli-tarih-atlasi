# -*- coding: utf-8 -*-
"""FERHATPASA-GUNEY — ÖNBELLEKTEKİ DÜZ METNİN KARAKTER ARALIĞINI BAS (SALT OKUR)

METINARA aletinin verdiği `c<konum>` işaretinden anlatının TAMAMINI okumak
için: tek cümle alıntı neyi tarihlediğini söylemeyebilir (§4⑧ · D093 · D162).
Boşluklar METINARA ile AYNI biçimde sıkıştırılır ⇒ konumlar birebir tutar.

Kullanım:  py denetim/ARAC-FERHATPASA-GUNEY-ARALIK-0913.py <yol> <başlangıç> <bitiş>
"""
import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
yol, a, b = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
t = re.sub(r"\s+", " ", open(yol, "rb").read().decode("utf-8", "replace"))
print("# %s [%d:%d] / %d" % (yol, a, b, len(t)))
s = t[a:b]
for i in range(0, len(s), 160):
    print(s[i:i + 160])

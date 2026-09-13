# -*- coding: utf-8 -*-
"""PDF metnini pypdf ile çıkarır, anahtar geçen yerleri bağlamıyla basar.
§4⑦: bir çıkarıcının "okuyamadım"ı belgenin içeriği hakkında bir şey söylemez —
ilk sayfaların uzunluğu da basılır ki boş çıkarım fark edilsin."""
import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
from pypdf import PdfReader

yol, pencere = sys.argv[1], int(sys.argv[2])
anahtarlar = sys.argv[3:]
r = PdfReader(yol)
sayfalar = [(p.extract_text() or "") for p in r.pages]
print("# sayfa %d · karakter %d · ilk 3 sayfa uzunluk %s"
      % (len(sayfalar), sum(len(s) for s in sayfalar), [len(s) for s in sayfalar[:3]]))
metin = "\n".join("[[s.%d]] %s" % (i + 1, s) for i, s in enumerate(sayfalar))
metin = re.sub(r"[ \t]+", " ", metin)
bas = []
for a in anahtarlar:
    for m in re.finditer(re.escape(a), metin):
        bas.append((m.start(), a))
bas.sort()
son = -1
for poz, a in bas:
    if poz < son:
        continue
    lo, hi = max(0, poz - pencere), min(len(metin), poz + pencere)
    sayfa = metin.rfind("[[s.", 0, poz)
    etiket = metin[sayfa:sayfa + 9] if sayfa >= 0 else "?"
    print("=" * 76)
    print("[%s] %s" % (a, etiket))
    print(metin[lo:hi].replace("\n", " "))
    son = hi

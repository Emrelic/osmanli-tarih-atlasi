# -*- coding: utf-8 -*-
"""0047 — Farsça akademik PDF'te terim arama (SALT OKUR)

İndirir (yoksa) ve pypdf ile metin çıkarır; Farsça terimlerin ve rakamların
geçtiği yerleri bağlamıyla basar. Çıkan karakter sayısı basılır: çok düşükse
hüküm `ölçülemedi`dir, `bulunamadı` DEĞİL (§4⑦). Farsça PDF'lerde pypdf harf
sırasını/biçimini bozabilir — 0 eşleşme ayrıca "ölçülemedi olabilir" diye okunur.

Kullanım:  py denetim/ARAC-0047-FARSIPDF-0913.py <url> <yerel_dosya> <terim> [...]
"""
import sys, io, os, re, urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
url, yol = sys.argv[1], sys.argv[2]
terimler = sys.argv[3:]
if not os.path.exists(yol):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124"})
    with open(yol, "wb") as f:
        f.write(urllib.request.urlopen(req, timeout=120).read())
with open(yol, "rb") as f:
    bas = f.read(8)
print("# dosya %s · ilk baytlar %r" % (yol, bas))
from pypdf import PdfReader
r = PdfReader(yol)
t = " ".join((p.extract_text() or "") for p in r.pages)
t = re.sub(r"\s+", " ", t)
print("# sayfa %d · karakter %d" % (len(r.pages), len(t)))
for k in terimler:
    yerler = [m.start() for m in re.finditer(re.escape(k), t)]
    print("\n## %s → %d" % (k, len(yerler)))
    for s in yerler[:4]:
        print("   … %s …" % t[max(0, s - 180):s + 180])

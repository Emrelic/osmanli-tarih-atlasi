# -*- coding: utf-8 -*-
"""FERHATPASA-MATRIS — ÇEVRİMİÇİ PDF'TE ANAHTAR ARAMA (SALT OKUR)

PDF BELLEKTE okunur, diske YAZILMAZ (pypdf — §4⑦: bir çıkarıcının
"okuyamadım"ı belgenin içeriği hakkında bir şey söylemez).
Her eşleşme sayfa numarası ve ±350 karakter bağlamla basılır.

Kullanım:  py denetim/ARAC-FERHATPASA-MATRIS-PDFARA-0913.py <url> <anahtar> [...]
"""
import sys, io, re, urllib.request
import pypdf

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
url, anah = sys.argv[1], sys.argv[2:]
if url.startswith("http"):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    b = urllib.request.urlopen(req, timeout=180).read()
else:                                   # yerel dosya (ör. WebFetch'in sakladığı PDF)
    with open(url, "rb") as f:
        b = f.read()
PAY = int(__import__("os").environ.get("PAY", "350"))
r = pypdf.PdfReader(io.BytesIO(b))
print("# %s | %d bayt | %d sayfa" % (url, len(b), len(r.pages)))
bos = 0
for i, p in enumerate(r.pages):
    try:
        t = re.sub(r"\s+", " ", p.extract_text() or "")
    except Exception:
        t = ""
    if not t.strip():
        bos += 1
        continue
    for a in anah:
        for m in re.finditer(re.escape(a), t):
            print("[s%d] %s: …%s…" % (i + 1, a, t[max(0, m.start() - 350):m.end() + 350]))
print("# metinsiz sayfa: %d" % bos)

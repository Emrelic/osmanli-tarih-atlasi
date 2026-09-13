# -*- coding: utf-8 -*-
"""KITA 29 — YEREL BELGEDEN PASAJ: HTML ya da PDF (SALT OKUR)

TDV ve Iranica aletleri kendi sitelerini açıyor. Akademik makaleler
(DergiPark PDF · dergi sayfaları) için bu alet DİSKTEKİ dosyayı okur:
indirme ayrı adımda curl ile yapılır, böylece aynı belge tekrar tekrar
çekilmez ve okunan şeyin HANGİ bayt olduğu sabitlenir.

🔴 §4⑦: "metin çıkarılamadı ≠ belgede metin yok". PDF'ten çıkan karakter
   sayısı basılır; 0 ya da çok düşükse hüküm `ölçülemedi`dir, `bulunamadı` DEĞİL.
🔴 Arama motorunun YZ özeti bir KAYNAK DEĞİLDİR (§4 kırmızı çizgi) — bu alet
   özeti değil belgenin KENDİ cümlesini basar.

Kullanım:
    py denetim/ARAC-KITA29-BELGEPASAJ-0913.py <dosya.pdf|dosya.html> <önce> <sonra> <anahtar> [...]
"""
import sys, re, io, html

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

yol, once, sonra = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
anahtarlar = sys.argv[4:]

if yol.lower().endswith(".pdf"):
    from pypdf import PdfReader
    r = PdfReader(yol)
    parcalar = []
    for i, s in enumerate(r.pages):
        try:
            parcalar.append("[[s.%d]] %s" % (i + 1, s.extract_text() or ""))
        except Exception as e:  # sayfa bozuksa SAY ve bas, sessizce atlama
            parcalar.append("[[s.%d]] <ÇIKARILAMADI: %s>" % (i + 1, e))
    t = " ".join(parcalar)
    print("# PDF %s | %d sayfa" % (yol, len(r.pages)))
else:
    h = io.open(yol, encoding="utf-8", errors="replace").read()
    t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    print("# HTML %s" % yol)

t = re.sub(r"-\s*\n\s*", "", t)          # satır sonu tirelemesi
t = re.sub(r"\s+", " ", t)
C = re.split(r"(?<=[.!?])\s+", t)
print("# metin %d karakter | %d cümle" % (len(t), len(C)))
if len(t) < 2000:
    print("# 🔴 METİN ÇOK KISA — hüküm `ölçülemedi`, `bulunamadı` DEĞİL (§4⑦)")

basildi, isabet = set(), 0
for i, c in enumerate(C):
    if any(a in c for a in anahtarlar):
        isabet += 1
        lo, hi = max(0, i - once), min(len(C), i + sonra + 1)
        if all(j in basildi for j in range(lo, hi)):
            continue
        print("=" * 78)
        for j in range(lo, hi):
            print("%s [%d] %s" % (">>" if j == i else "  ", j, C[j][:700]))
            basildi.add(j)
print("# isabetli cümle: %d  (anahtarlar: %s)" % (isabet, " · ".join(anahtarlar)))

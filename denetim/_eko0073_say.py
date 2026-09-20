# -*- coding: utf-8 -*-
# EKO-UI-0073 — hangi TÜRDE kaç kart var.
# 🔴 İlk sürüm HAM `tur:` taramasıydı ve YANILTTI: `öldürme` · `mersiye` ·
# `kaside` gibi değerler kartın türü DEĞİL, kartın İÇİNDEKİ nesnelerin kendi
# `tur` alanı; `mimari` ise yalnız bir YORUM satırında geçiyor. Bu yüzden
# sayım kodun tanıdığı 14 anahtarla KISITLANIR, gerisi ayrı kovaya düşer.
import io, re, sys, glob, collections
sys.stdout.reconfigure(encoding="utf-8")

KOD_TURU = ["sebep-sonuc", "magazin", "merak", "antlasma", "tartisma",
            "teknik-bilimsel", "kimdir", "dis-yankilar", "kahramanlik",
            "menkibeler", "sok-haberler", "edebiyat", "savas-hikayesi",
            "karsi-anlati"]

say = collections.Counter()
disari = collections.Counter()
for yol in sorted(glob.glob("data/ekokuma*.js")):
    try:
        metin = io.open(yol, encoding="utf-8").read()
    except Exception:
        continue
    for satir in metin.split("\n"):
        if satir.lstrip().startswith("//"):
            continue                      # yorum satırı sayılmaz
        for t in re.findall(r'\btur\s*:\s*["\']([^"\']+)["\']', satir):
            (say if t in KOD_TURU else disari)[t] += 1

print("KOD TANIYOR (EKOKUMA_TUR anahtarı) — toplam %d kayıt" % sum(say.values()))
for t in KOD_TURU:
    print("  %-18s %4d" % (t, say[t]))
print()
print("KOD TANIMIYOR (kart türü DEĞİL, iç nesne alanı) — %d kayıt, %d ayrı değer"
      % (sum(disari.values()), len(disari)))
for t, n in disari.most_common():
    print("  %-18s %4d" % (t, n))

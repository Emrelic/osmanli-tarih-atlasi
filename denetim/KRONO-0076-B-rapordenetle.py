# -*- coding: utf-8 -*-
"""Raporun §3 tablosu SEVKIN 24 maddesini kapsiyor mu?

Sebep: ayni kor nokta iki kez yasandi — CEVAP.json'da ve raporda H-0103
sessizce dustu. Denetim KENDI ciktisina degil SEVKE karsi sorar.
"""
import io, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

SEVK = ("H-0067 H-0070 H-0074 H-0081 H-0082 H-0083 H-0084 H-0085 H-0086 H-0087 "
        "H-0088 H-0089 H-0091 H-0092 H-0094 H-0100 H-0101 H-0102 H-0103 H-0104 "
        "H-0105 H-0109 H-0110 H-0112").split()
assert len(SEVK) == 24

t = io.open(r"C:\atlas\denetim\KRONO-0076-B.md", encoding="utf-8").read()
m = re.search(r"## 3\. MADDE MADDE.*?(?=\n## )", t, re.S)
if not m:
    print("🔴 §3 tablosu bulunamadi"); sys.exit(1)
bulunan = re.findall(r"^\| (H-\d{4}) \|", m.group(0), re.M)

# B9: sinav gercekten okuyor mu?
print("B9 POZITIF KANIT: tabloda H-0067 var mi ->",
      "EVET" if "H-0067" in bulunan else "🔴 HAYIR, AYRISTIRICI KOR")
if "H-0067" not in bulunan:
    sys.exit(1)

print("tabloda: %d satir · sevkte: %d madde" % (len(bulunan), len(SEVK)))
eksik = [n for n in SEVK if n not in bulunan]
fazla = [n for n in bulunan if n not in SEVK]
print("EKSIK:", eksik or "yok")
print("FAZLA:", fazla or "yok")
print("SONUC:", "TABLO TAM (24/24)" if not eksik and not fazla else "🔴 DUZELT")

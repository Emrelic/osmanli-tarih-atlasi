# -*- coding: utf-8 -*-
"""SINIR-BERLIN-0076 teslim sınavı — kendi ürettiklerimi denetler."""
import sys
import io
import json
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

# ── CEVAP.json ───────────────────────────────────────────────────────────
d = json.load(io.open("denetim/SINIR-BERLIN-0076-CEVAP.json", encoding="utf-8"))
print("CEVAP.json geçerli · madde: %d · yatay kalem hükmü: %s" % (
    len(d["maddeler"]), d["_yatay_devralinan"]["hukum"]))

HUKUMLER = {"cozuldu", "once-cozuldu", "zaten-dogru", "sirada", "kosu-bekliyor",
            "olculecek", "senin-kararin", "onay-bekliyor", "cozulemedi",
            "yapilamaz", "vazgecildi", "gerek-yok", "tekrar", "bayat",
            "kapsam-disi"}
# ATEŞLEME: sözlükte OLMAYAN bir kelime yakalanıyor mu?
print("  ateşleme (uydurma hüküm yakalanır mı): %s"
      % ("UYDURMA" not in HUKUMLER))
kotu = [(k, v["hukum"]) for k, v in d["maddeler"].items()
        if v["hukum"] not in HUKUMLER]
print("  sözlükte olmayan hüküm: %s" % (kotu if kotu else 0))
gerekce_ister = {"gerek-yok", "senin-kararin", "vazgecildi", "yapilamaz",
                 "cozulemedi", "kapsam-disi", "olculecek"}
bos = [k for k, v in d["maddeler"].items()
       if v["hukum"] in gerekce_ister and len(v.get("not", "")) < 80]
print("  gerekçesiz yazılmış (reddedilir) : %s" % (bos if bos else 0))
sayac = {}
for v in d["maddeler"].values():
    sayac[v["hukum"]] = sayac.get(v["hukum"], 0) + 1
for h, n in sorted(sayac.items(), key=lambda kv: -kv[1]):
    print("    %-16s %d" % (h, n))

# ── ek okuma kartları: geliştirici sesi ──────────────────────────────────
t = io.open("denetim/SINIR-BERLIN-0076-YAMA-ekokuma_p76g.js",
            encoding="utf-8").read()
YASAK = [r"\bD\d{3}\b", r"\bH-\d{4}\b", r"Emre", r"bu oturum",
         r"\.js\b", r"denetim/", r"CLAUDE\.md", r"girdi\.py", r"yerlesimler"]
KIRLI = "D231 H-0040 Emre bu oturum data/yerlesimler.js denetim/ CLAUDE.md girdi.py"
vurus = sum(1 for r in YASAK if re.search(r, KIRLI))
print("ek okuma · süzgeç ateşleme (kirli dizgi): %d/%d vurdu" % (vurus, len(YASAK)))
if vurus != len(YASAK):
    print("  🔴 SÜZGEÇ KIRIK — sayı güvenilmez")
    sys.exit(1)
# 🔴 Kartları BÖLEREK ayır — ilk denemem `\n\s*\},` arıyordu ve 0 kart
# buldu, yani SESSİZCE TEMİZ raporlayacaktı ("boş küme her öngörüyü
# doğrular", §11). Sayı ikinci bir kaynakla — dosyadaki id sayısı —
# karşılaştırılıyor; uyuşmazsa alet DURUR.
parca = re.split(r"\n\{ id:\"", t)[1:]
kartlar = [(p.split("\"", 1)[0], p) for p in parca]
id_sayisi = len(re.findall(r"\bid:\"p76g-", t))
print("  kart: %d  ·  dosyadaki p76g id sayısı: %d" % (len(kartlar), id_sayisi))
if len(kartlar) != id_sayisi or not kartlar:
    print("  🔴 AYRIŞTIRICI KIRIK — kart sayısı id sayısıyla uyuşmuyor. "
          "Bu aletin 'ihlal 0' çıktısı YALAN olur.")
    sys.exit(1)
ihlal = 0
for kid, govde in kartlar:
    for r in YASAK:
        for m in re.finditer(r, govde):
            ihlal += 1
            print("  🔴 İHLAL %s · %s · ...%s..." % (kid, r,
                  govde[max(0, m.start() - 40):m.start() + 40].replace("\n", " ")))
print("  geliştirici sesi ihlali: %d" % ihlal)
sys.exit(1 if (kotu or bos or ihlal) else 0)

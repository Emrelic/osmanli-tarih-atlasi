# -*- coding: utf-8 -*-
u"""Ⓑ'NİN EVRENİ — «koşu bitince» kalemi taşıyan belgeler
SINAV-KOSU8-0907  ·  7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
NİÇİN VAR — 1.MURAT'ın tek cümlesi: «ÖNCE EVRENİ ÖLÇ»
══════════════════════════════════════════════════════════════════════════
Ⓑ'nin evrenini **12 belge** diye devralmıştım. O sayı dar bir ifade
kümesinden çıkmıştı (`koşu bitince|koşu sonrası koş|koşu indiğinde|
koşudan sonra ölç`) ve `denetim/` taramasının koordinatörün 17'sini
**51** yapması, aynı şeyin burada da olabileceğini gösterdi.

🔴 VE İLK ÖLÇÜM DENEMEM BOZUK ÇIKTI — kaydediyorum:
   Kabuk döngüsünde `grep -F "$p"` ile Türkçe desenler denendi ve
   **on üç desenin on üçü de 0 dosya** döndürdü; aynı anda birleşik
   `grep -E` **128** dedi. Yani ölçüm sessizce çöktü ve **temiz bir
   sıfır** üretti.
   `CLAUDE.md §11`: *"`0`, «yok» ile «bakmadım» arasında ayrım yapmaz."*
   ⇒ Çare deseni düzeltmek değil, **dilin kendi yorumlayıcısına vermek**
     (bugün `ast` ile bir kez öğrenildi; bu ikincisi).

BU BETİK NE YAPAR / NE YAPMAZ
   YAPAR   evreni ölçer VE **ifadeye duyarlılığını** gösterir: her desen
           tek tek sayılır, böylece «evren N'dir» hükmünün hangi ifade
           seçimine dayandığı GÖRÜNÜR olur.
   YAPMAZ  bulduğu belgelerin bayat olup olmadığına karar VERMEZ. O,
           `SINAV-KOSU8-BASLIK-0907.py`nin ve elle okumanın işi.

📌 Ve bir evren sayısı ASLA tek bir desenden verilmez: bu betik
   deseni değiştirdiğinde sayının ne kadar oynadığını basar. Oynama
   büyükse «evren N» bir ölçüm değil bir **ifade tercihidir.**

KOŞULUŞ
    py denetim/SINAV-KOSU8-EVREN-0907.py
    py denetim/SINAV-KOSU8-EVREN-0907.py --atesle
"""
from __future__ import unicode_literals

import io
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = ["denetim", "oturumlar", "."]

# ── DESENLER — her biri AYRI sayılır ────────────────────────────────────
# 🔴 Liste elle yazıldı ve bu bir SINIRDIR: aklıma gelmeyen bir ifade
#   evrenin dışında kalır. O yüzden aşağıda «yalnız bu desenle bulunan»
#   sütunu var — bir desen tek başına dosya getiriyorsa, benzerlerinin
#   de aranması gerektiğinin işaretidir.
DESENLER = [
    ("koşu bitince", r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?bitince"),
    ("koşu bittikten", r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?bittikten"),
    ("koşu bitene", r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?bitene"),
    ("koşu bitsin", r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?bitsin"),
    ("koşu bitmeden", r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?bitmeden"),
    ("koşu sonrası", r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?sonras(?:ı|i)"),
    ("koşudan sonra", r"ko(?:ş|s)udan\s+sonra"),
    ("koşu indiğinde", r"ko(?:ş|s)u\s*ind(?:i|İ)(?:ğ|g)inde"),
    ("koşu çözülünce", r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?(?:ç|c)(?:ö|o)z(?:ü|u)l(?:ü|u)nce"),
    ("bir sonraki koşu", r"bir sonraki ko(?:ş|s)u"),
    ("sonraki koşuda", r"sonraki ko(?:ş|s)uda"),
    ("gelecek koşu", r"gelecek ko(?:ş|s)u"),
    ("yeni bir koşu", r"yeni bir ko(?:ş|s)u"),
    ("koşu 8", r"ko(?:ş|s)u\s*8\b"),
]


def dosyalar():
    out = []
    for d in DIZIN:
        kok = os.path.join(KOK, d) if d != "." else KOK
        if d == ".":
            for ad in sorted(os.listdir(kok)):
                if ad.endswith(".md"):
                    out.append(("./" + ad, os.path.join(kok, ad)))
            continue
        if not os.path.isdir(kok):
            continue
        for ad in sorted(os.listdir(kok)):
            if ad.endswith(".md"):
                out.append((d + "/" + ad, os.path.join(kok, ad)))
    return out


def tara():
    rx = [(ad, re.compile(p, re.I)) for ad, p in DESENLER]
    per = {ad: set() for ad, _ in DESENLER}
    tum = set()
    for gor, yol in dosyalar():
        try:
            with io.open(yol, encoding="utf-8", errors="replace") as f:
                m = f.read()
        except Exception:                            # noqa: BLE001
            continue
        for ad, r in rx:
            if r.search(m):
                per[ad].add(gor)
                tum.add(gor)
    return per, tum


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    r = dict((ad, re.compile(p, re.I)) for ad, p in DESENLER)
    de("Türkçe «koşu bitince» yakalanır", True,
       bool(r["koşu bitince"].search("Bu iş koşu bitince yapılacak")))
    de("ASCII «kosu bitince» de yakalanır", True,
       bool(r["koşu bitince"].search("kosu bitince yapilacak")))
    de("araya sayı girse de yakalanır («koşu 7b bitince»)", True,
       bool(r["koşu bitince"].search("koşu 7b bitince")))
    de("BÜYÜK harf yakalanır", True,
       bool(r["koşu bitince"].search("KOŞU BİTİNCE")))
    de("«koşu 8» sınırlı: «koşu 80» YAKALANMAZ", False,
       bool(r["koşu 8"].search("koşu 80 hakkında")))
    de("ilgisiz metin GİRMEZ", False,
       bool(r["koşu bitince"].search("bu koşu uzun sürdü")))
    de("«koşudan sonra» ayrı desen", True,
       bool(r["koşudan sonra"].search("koşudan sonra ölçülecek")))
    de("desen sayısı 14", 14, len(DESENLER))
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME\n")
        d = atesleme()
        kotu = 0
        for ad, b, o, ok in d:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(48) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
        return 1 if kotu else 0

    per, tum = tara()
    if not tum:
        print("⚫ ÖLÇÜLEMEDİ — hiçbir desen eşleşmedi; tarama bozuk olabilir")
        return 2
    print("═" * 78)
    print("Ⓑ EVRENİ — «koşu bitince» kalemi taşıyan belgeler")
    print("═" * 78)
    print("taranan   : %s  ·  %d .md dosyası" % (", ".join(DIZIN), len(dosyalar())))
    print("BİRLEŞİK EVREN : %d DOSYA" % len(tum))
    print("")
    print("İFADEYE DUYARLILIK — her desen ayrı, ve YALNIZ o desenle bulunan:")
    print("  %-20s %6s %8s" % ("desen", "dosya", "YALNIZ"))
    for ad, _ in DESENLER:
        k = per[ad]
        yalniz = {f for f in k if not any(f in per[b] for b, _ in DESENLER if b != ad)}
        print("  %-20s %6d %8d%s" % (ad, len(k), len(yalniz),
                                     "  ← tek kaynak" if yalniz else ""))
    print("")
    en = max(len(per[a]) for a, _ in DESENLER)
    print("─" * 78)
    print("🔴 EN GENİŞ TEK DESEN %d dosya · BİRLEŞİK %d dosya  ⇒  %.1f KAT"
          % (en, len(tum), len(tum) / float(max(1, en))))
    print("   Tek bir desenle verilen bir «evren N» hükmü, bu oranda")
    print("   eksik olurdu. ⇒ Bir evren sayısı ASLA tek desenden verilmez.")
    print("")
    print("⚠️ SINIR: desen listesi ELLE yazıldı. Aklıma gelmeyen bir ifade")
    print("   evrenin DIŞINDA kalır. «YALNIZ» sütunu bunun uyarısıdır —")
    print("   bir desen tek başına dosya getiriyorsa, benzerleri de aranmalı.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())

# -*- coding: utf-8 -*-
u"""YAMA SAHİPLİĞİ × HEDEF BEYANI  ·  SINAV-KOSU8-0907  ·  7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
SORU (1.MURAT) — merge kilitleri kalkınca sıradaki risk
══════════════════════════════════════════════════════════════════════════
    ① hangi ALET bu dosyayı glob'uyla SAHİPLENİYOR?
    ② dosya hedefini MAKİNE OKUNUR bir alanda BEYAN ediyor mu?

    ① SAHİPLİ  + beyanlı    → temiz
    ② SAHİPLİ  + beyansız   → bugün çalışıyor, yarın yanlış alete düşebilir
    ③ SAHİPSİZ + beyanlı    → 🔴 yama var, onu uygulayacak alet YOK
    ④ SAHİPSİZ + beyansız   → 🔴🔴 kimse bilmiyor, kimse uygulamayacak
    ⑤ İKİ ALET birden       → 🔴🔴 çakışma

🔴 ÖNGÖRÜ ÖLÇÜMDEN ÖNCE: `denetim/ONGORU-SINAV-KOSU8-SAHIP-0907.md`
   Ö-P1 40≤N≤140 (mazeret VAR) · Ö-P2 sahipsiz ≥%60 · Ö-P3 çakışma 0 ·
   Ö-P4 makine okunur beyan ≤%20 · Ö-P5 kova ③ BOŞ   (P2-P5 mazeret YOK)

══════════════════════════════════════════════════════════════════════════
🔴 «BEYANLI» İKİ KADEMELİ SAYILIYOR — ve sebebi ölçülmüş bir fark
══════════════════════════════════════════════════════════════════════════
    ALAN VAR   `_HEDEF` · `hedef` · `hedef_dosya` · `hedef_dosya_onerisi`
    ALET OKUR  yalnız `_HEDEF` · `hedef`      (`_kronoloji_uygula`, 7260b83)
⇒ Aradaki fark bir BULGUDUR, bir ayrıntı değil: `ZEND` ve `AVRUPA`
  hedefini `hedef_dosya` ALANINDA söylüyor ve alet onu GÖRMÜYOR —
  `not` kilidiyle aynı sınıf: ***aracın alan kümesi eksik.***

⚠️ VE `_HEDEF` BİR ÖNERİDİR: bu betik sözleşmeyi ÖLÇER, KOYMAZ.
   Zorunlu kılmak ayrı bir yetki ve bende değil (`§7`).

KOŞULUŞ
    py denetim/SINAV-KOSU8-SAHIP-0907.py
    py denetim/SINAV-KOSU8-SAHIP-0907.py --atesle
    py denetim/SINAV-KOSU8-SAHIP-0907.py --liste 3   (bir kovanın dökümü)
"""
from __future__ import unicode_literals

import io
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "denetim")

# ── ÖLÇÜT — öngörüde yazıldı, sonradan DEĞİŞTİRİLMEDİ ───────────────────
YAMA_ANAHTAR = ("kunyeler", "maddeler", "madde", "yamalar", "yama",
                "oneri", "oneriler", "eklenen", "kayitlar")
BEYAN_ALAN = ("_HEDEF", "hedef", "hedef_dosya", "hedef_dosya_onerisi")
BEYAN_ALET = ("_HEDEF", "hedef")          # `_kronoloji_uygula`nın okuduğu

SAHIPLER = [("_kunye_uygula", "YAMA-KUNYE-"),
            ("_kronoloji_uygula", "KRONOLOJI-")]


def yama_mi(d):
    u"""Öngörüde yazılan ölçüt, birebir."""
    if isinstance(d, list):
        return any(isinstance(x, dict) and ("id" in x or "ad" in x)
                   for x in d[:5])
    if not isinstance(d, dict):
        return False
    if any(a in d for a in YAMA_ANAHTAR):
        return True
    for v in d.values():
        if isinstance(v, list) and v and isinstance(v[0], dict) \
                and ("id" in v[0] or "ad" in v[0]):
            return True
    return False


def sahipler(ad):
    return [a for a, onek in SAHIPLER if ad.startswith(onek)]


def beyan(d):
    u"""(alan_var, alet_okur) — iki kademe AYRI döner."""
    if not isinstance(d, dict):
        return (False, False)
    return (any(a in d for a in BEYAN_ALAN),
            any(a in d for a in BEYAN_ALET))


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    de("yama · kunyeler anahtarı", True, yama_mi({"kunyeler": {}}))
    de("yama · maddeler anahtarı", True, yama_mi({"maddeler": []}))
    de("yama · iç dizi + id", True, yama_mi({"x": [{"id": "a"}]}))
    de("yama · iç dizi + ad", True, yama_mi({"x": [{"ad": "a"}]}))
    de("yama · üst düzey DİZİ + id", True, yama_mi([{"id": "a"}]))
    de("yama DEĞİL · yalnız ölçüm anahtarları", False,
       yama_mi({"olcum": 5, "_NOT": "x"}))
    de("yama DEĞİL · iç dizi ama id/ad yok", False,
       yama_mi({"x": [{"deger": 1}]}))
    de("sahip · YAMA-KUNYE öneki", ["_kunye_uygula"],
       sahipler("YAMA-KUNYE-X.json"))
    de("sahip · KRONOLOJI öneki", ["_kronoloji_uygula"],
       sahipler("KRONOLOJI-X.json"))
    de("sahip · başka önek → SAHİPSİZ", [], sahipler("BULGU-X.json"))
    de("beyan · _HEDEF → ikisi de", (True, True), beyan({"_HEDEF": "a"}))
    de("beyan · hedef_dosya → alan VAR, alet OKUMAZ", (True, False),
       beyan({"hedef_dosya": "a"}))
    de("beyan · hiç → ikisi de yok", (False, False), beyan({"x": 1}))
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME\n")
        d = atesleme()
        kotu = 0
        for ad, b, o, ok in d:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(46) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
        return 1 if kotu else 0

    hepsi = sorted(a for a in os.listdir(DIZIN) if a.endswith(".json"))
    kova = {1: [], 2: [], 3: [], 4: [], 5: []}
    yama_sayisi = 0
    okunamayan = 0
    alan_var_n = alet_okur_n = 0
    for ad in hepsi:
        try:
            with io.open(os.path.join(DIZIN, ad), encoding="utf-8") as f:
                d = json.load(f)
        except Exception:                            # noqa: BLE001
            okunamayan += 1
            continue
        if not yama_mi(d):
            continue
        yama_sayisi += 1
        sah = sahipler(ad)
        av, ao = beyan(d)
        alan_var_n += av
        alet_okur_n += ao
        if len(sah) > 1:
            k = 5
        elif sah and ao:
            k = 1
        elif sah:
            k = 2
        elif ao:
            k = 3
        else:
            k = 4
        kova[k].append((ad, sah, av, ao))

    print("═" * 78)
    print("YAMA SAHİPLİĞİ × HEDEF BEYANI")
    print("═" * 78)
    print("denetim/*.json            : %d" % len(hepsi))
    print("  okunamayan              : %d" % okunamayan)
    print("  YAMA CİNSİ (ölçüt aşağıda): %d" % yama_sayisi)
    print("  hedef ALANI olan         : %d" % alan_var_n)
    print("  ALETİN OKUYABİLDİĞİ      : %d   ← aradaki fark BULGU" % alet_okur_n)
    print("")
    baslik = {1: "① SAHİPLİ + beyanlı — temiz",
              2: "② SAHİPLİ + beyansız — bugün çalışıyor, yarın riskli",
              3: "🔴 ③ SAHİPSİZ + beyanlı — yama var, ALET YOK",
              4: "🔴🔴 ④ SAHİPSİZ + beyansız — kimse bilmiyor",
              5: "🔴🔴 ⑤ İKİ ALET birden — ÇAKIŞMA"}
    for k in (1, 2, 3, 4, 5):
        print("%-58s %4d" % (baslik[k], len(kova[k])))
    print("")
    iL = sys.argv.index("--liste") if "--liste" in sys.argv else -1
    if iL >= 0:
        k = int(sys.argv[iL + 1])
        print("KOVA %d DÖKÜMÜ:" % k)
        for ad, sah, av, ao in kova[k]:
            print("   %-46s sahip=%s alan=%s alet=%s"
                  % (ad, ",".join(sah) or "-", "V" if av else "-",
                     "V" if ao else "-"))
        print("")
    else:
        print("③ ve ④'ün ilk onu (tamamı için: --liste 3 / --liste 4):")
        for k in (3, 4):
            for ad, _, av, ao in kova[k][:10]:
                print("   [%d] %s" % (k, ad))
        print("")

    # ── ÖNGÖRÜ SINAVI ────────────────────────────────────────────────────
    sahipsiz = len(kova[3]) + len(kova[4])
    oran = 100.0 * sahipsiz / max(1, yama_sayisi)
    beyan_oran = 100.0 * alet_okur_n / max(1, yama_sayisi)
    print("─" * 78)
    print("ÖNGÖRÜ SINAVI (denetim/ONGORU-SINAV-KOSU8-SAHIP-0907.md)")
    for et, kos, ol in (
            ("Ö-P1  40 <= N <= 140", 40 <= yama_sayisi <= 140, yama_sayisi),
            ("Ö-P2  sahipsiz >= %60", oran >= 60, "%.1f%%" % oran),
            ("Ö-P3  cakisma == 0", len(kova[5]) == 0, len(kova[5])),
            ("Ö-P4  makine beyan <= %20", beyan_oran <= 20, "%.1f%%" % beyan_oran),
            ("Ö-P5  kova 3 BOS", len(kova[3]) == 0, len(kova[3]))):
        print("  %-24s %s   ölçülen %s" % (et, "🟢 TUTTU" if kos else "🔴 ÇÜRÜDÜ", ol))
    print("")
    print("ÖLÇÜT (öngörüde yazıldı, DEĞİŞTİRİLMEDİ):")
    print("  YAMA CİNSİ  = üst düzey anahtar %s" % ", ".join(YAMA_ANAHTAR[:5]))
    print("                … ya da id/ad taşıyan bir kayıt dizisi")
    print("  SAHİPLİ     = YAMA-KUNYE-* ya da KRONOLOJI-* öneki")
    print("  BEYANLI     = alan: %s   ·   alet: %s"
          % ("/".join(BEYAN_ALAN), "/".join(BEYAN_ALET)))
    print("")
    print("⚠️ `_HEDEF` bir ÖNERİDİR — bu betik sözleşmeyi ÖLÇER, KOYMAZ.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())

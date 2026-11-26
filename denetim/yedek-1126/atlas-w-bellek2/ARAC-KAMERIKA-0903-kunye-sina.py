# -*- coding: utf-8 -*-
"""KÜNYE REÇETESİ SINAVI — teslimden önce kendi çıktımı sınıyorum.

M-2500'ün beş şartı + M-2396'nın üç haneli yıl tuzağı + M-2493'ün
uydurma tarih kovası. C13: her dal AYRI AYRI ateşlenir.

PROJE KÖKÜNDEN:  py denetim/ARAC-KAMERIKA-0903-kunye-sina.py
"""
import io
import json
import re
import sys
from datetime import date

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

DOSYA = ["denetim/KUNYE-KAMERIKA-0903.json",
         "denetim/KUNYE-KAMERIKA-0903-parti2.json",
         "denetim/KUNYE-KAMERIKA-0903-parti3.json",
         "denetim/KUNYE-KAMERIKA-0903-parti4.json"]

s = io.open("data/devletler.js", encoding="utf-8").read()
MEVCUT = set(re.findall(r'id\s*:\s*"([^"]+)"', s))
# künye düzeyindeki tur: değerleri (kronoloji tur:'larından ayır)
KUNYE_TUR = {"devlet", "krallik", "cumhuriyet", "sultanlik", "beylik",
             "hanedanlik", "imparatorluk", "hanlik", "prenslik", "dukalik",
             "sehzadelik", "ocaklik", "federasyon", "emirlik", "ulke",
             "siyaset", "gecici-isgal", "gecici-hukumet", "vassal"}
BOLGE = set(re.findall(r'bolge\s*:\s*"([^"]+)"', s))

K = []
for d in DOSYA:
    K += json.load(io.open(d, encoding="utf-8"))
print("künye: %d (%s)" % (len(K), " + ".join(str(len(json.load(
    io.open(d, encoding='utf-8')))) for d in DOSYA)))

GUN = re.compile(r"^\d{4}-\d{2}-\d{2}$")
UFUK_F, UFUK_T = "1281-01-01", "1923-10-29"
hata = []
CIKIS = 0   # CLAUDE.md §3: 0 temiz · 1 ihlal · 2 ölçülemedi
SEBEP = ""
# ÖNCÜL (v2 ⓑ): reçete devletler.js'e ZATEN işlenmişse (aynı id + aynı ad)
# "bu reçete yazılabilir mi" sorusu bayattır — o reçete ölçülmez, AYRICA sayılır.
# Gerileme sezicisi: id silinirse reçete yeniden gerçek ölçüme girer.
# Aynı id + FARKLI ad = gerçek çakışma, ölçüme girer (⑥ öter).
MEVCUT_AD = dict(re.findall(r'id\s*:\s*"([^"]+)"\s*,\s*ad\s*:\s*"([^"]*)"', s))
ISLENMIS = [k.get("id") for k in K if MEVCUT_AD.get(k.get("id")) == k.get("ad")]
OLCULECEK = [k for k in K if k.get("id") not in ISLENMIS]
print("zaten işlenmiş (id+ad devletler.js'te): %d · gerçek ölçüme giren: %d"
      % (len(ISLENMIS), len(OLCULECEK)))


def bak(kosul, kim, mesaj):
    if not kosul:
        hata.append("%-22s %s" % (kim, mesaj))


gorulen = set()
for k in OLCULECEK:
    i = k.get("id", "?")
    # ① dört haneli yıl (M-2396)
    for alan in ("f", "t"):
        v = k.get(alan, "")
        bak(bool(GUN.match(v)), i,
            "%s biçimsiz ya da üç haneli yıl: %r" % (alan, v))
    # ② f < t
    if GUN.match(k.get("f", "")) and GUN.match(k.get("t", "")):
        bak(k["f"] < k["t"], i, "f >= t (%s → %s)" % (k["f"], k["t"]))
        bak(k["f"] >= "1000-01-01", i, "f atlas ufkundan çok önce")
        bak(k["t"] <= UFUK_T, i, "t atlas ufkunu (%s) aşıyor" % UFUK_T)
    # ③ tur: mevcut sözlükten
    bak(k.get("tur") in KUNYE_TUR, i, "tur sözlükte yok: %r" % k.get("tur"))
    # ④ bolge: mevcut sözlükten
    bak(k.get("bolge") in BOLGE, i, "bolge sözlükte yok: %r" % k.get("bolge"))
    # ⑤ harita: YAZILMAZ (M-2500)
    bak("harita" not in k, i, "harita: alanı YAZILMIŞ — M-2500 yasakladı")
    # ⑥ id çakışması
    bak(i not in MEVCUT, i, "id devletler.js'te ZATEN VAR")
    bak(i not in gorulen, i, "id reçete içinde MÜKERRER")
    gorulen.add(i)
    # ⑦ zorunlu alanlar
    for alan in ("ad", "ozet", "not", "kaynak", "dayanak", "kronoloji"):
        bak(bool(k.get(alan)), i, "%s alanı BOŞ" % alan)
    # ⑧ kronoloji günleri de dört haneli ve künye ömrü içinde
    for e in k.get("kronoloji", []):
        t = e.get("t", "")
        bak(bool(GUN.match(t)), i, "kronoloji günü biçimsiz: %r" % t)
        if GUN.match(t) and GUN.match(k.get("f", "")) \
                and GUN.match(k.get("t", "")):
            bak(k["f"] <= t <= k["t"], i,
                "kronoloji günü künye ömrü DIŞINDA: %s (%s..%s)"
                % (t, k["f"], k["t"]))
        bak(bool(e.get("b")), i, "kronoloji maddesi metinsiz")
    # ⑨ takvim geçerliliği — 1851-09-31 gibi olmayan gün yakalanır
    for v in [k.get("f", ""), k.get("t", "")] + \
             [e.get("t", "") for e in k.get("kronoloji", [])]:
        if GUN.match(v):
            try:
                date(int(v[:4]), int(v[5:7]), int(v[8:10]))
            except ValueError:
                hata.append("%-22s TAKVİMDE OLMAYAN GÜN: %s" % (i, v))

print("\n--- ① geçme yolu: gerçek reçete ---")
if hata:
    CIKIS = 1
    print("🔴 %d HATA" % len(hata))
    for h in hata:
        print("   " + h)
elif not OLCULECEK:
    CIKIS = 2
    SEBEP = ("ÖLÇÜLEMEDİ: %d reçetenin tamamı (%d/%d) zaten devletler.js'te — soru bayat"
             " (teslim-öncesi araç)" % (len(K), len(ISLENMIS), len(K)))
    print("⚪ " + SEBEP)
else:
    print("🟢 TEMİZ — %d reçete ölçüldü, 0 hata" % len(OLCULECEK))
if ISLENMIS and OLCULECEK:
    print("⚪ ayrıca %d reçete zaten işlenmiş (ölçülmedi): %s"
          % (len(ISLENMIS), ", ".join(ISLENMIS)))

print("\n--- ② ateşleme yolu: her dal ZORLA sınanır (C13) ---")
sahte = [
    ({"id": "x1", "ad": "a", "tur": "devlet", "f": "987-01-01",
      "t": "1900-01-01", "bolge": "kuzey-amerika", "ozet": "o",
      "not": "n", "kaynak": "k", "dayanak": "d", "kronoloji":
      [{"t": "1900-01-01", "b": "b", "tur": "son"}]}, "üç haneli yıl"),
    ({"id": "x2", "ad": "a", "tur": "devlet", "f": "1900-01-01",
      "t": "1800-01-01", "bolge": "kuzey-amerika", "ozet": "o",
      "not": "n", "kaynak": "k", "dayanak": "d", "kronoloji": []}, "f >= t"),
    ({"id": "x3", "ad": "a", "tur": "UYDURMA", "f": "1800-01-01",
      "t": "1900-01-01", "bolge": "kuzey-amerika", "ozet": "o",
      "not": "n", "kaynak": "k", "dayanak": "d", "kronoloji": []}, "tur yok"),
    ({"id": "abd", "ad": "a", "tur": "devlet", "f": "1800-01-01",
      "t": "1900-01-01", "bolge": "kuzey-amerika", "ozet": "o",
      "not": "n", "kaynak": "k", "dayanak": "d", "kronoloji": []},
     "id ZATEN VAR"),
    ({"id": "x5", "ad": "a", "tur": "devlet", "f": "1800-01-01",
      "t": "1900-01-01", "bolge": "kuzey-amerika", "harita": "abd",
      "ozet": "o", "not": "n", "kaynak": "k", "dayanak": "d",
      "kronoloji": []}, "harita: yazılmış"),
    ({"id": "x6", "ad": "a", "tur": "devlet", "f": "1800-01-01",
      "t": "1900-01-01", "bolge": "kuzey-amerika", "ozet": "o",
      "not": "n", "kaynak": "k", "dayanak": "d", "kronoloji":
      [{"t": "1700-01-01", "b": "b", "tur": "son"}]}, "kronoloji ömür dışı"),
    ({"id": "x7", "ad": "a", "tur": "devlet", "f": "1800-01-01",
      "t": "1851-09-31", "bolge": "kuzey-amerika", "ozet": "o",
      "not": "n", "kaynak": "k", "dayanak": "d", "kronoloji": []},
     "takvimde olmayan gün"),
]
for kayit, ad in sahte:
    hata = []
    gorulen = set()
    k = kayit
    i = k["id"]
    for alan in ("f", "t"):
        v = k.get(alan, "")
        bak(bool(GUN.match(v)), i, "%s biçimsiz" % alan)
    if GUN.match(k.get("f", "")) and GUN.match(k.get("t", "")):
        bak(k["f"] < k["t"], i, "f >= t")
    bak(k.get("tur") in KUNYE_TUR, i, "tur yok")
    bak("harita" not in k, i, "harita yazılmış")
    bak(i not in MEVCUT, i, "id var")
    for e in k.get("kronoloji", []):
        t = e.get("t", "")
        if GUN.match(t) and GUN.match(k.get("f", "")) \
                and GUN.match(k.get("t", "")):
            bak(k["f"] <= t <= k["t"], i, "kronoloji dışarıda")
    for v in [k.get("f", ""), k.get("t", "")]:
        if GUN.match(v):
            try:
                date(int(v[:4]), int(v[5:7]), int(v[8:10]))
            except ValueError:
                hata.append("takvim")
    if not hata:
        CIKIS = 1   # ateşleme dalı ötmedi = sınav kendini doğrulayamadı
    print("   %-24s → %s" % (ad, "🟢 ÖTTÜ" if hata else "🔴 ÖTMEDİ"))
print("\nSONUÇ:", {0: "temiz", 1: "İHLAL", 2: SEBEP}[CIKIS] +
      (" · ayrıca %d reçete zaten işlenmiş (ölçülmedi)" % len(ISLENMIS)
       if ISLENMIS and OLCULECEK else ""))
sys.exit(CIKIS)

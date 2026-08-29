# -*- coding: utf-8 -*-
"""183 ACIK MADDEYI DOSYA CINSINE GORE AYIR — bolme kriteri DOSYA.

Her maddenin `not` alanindaki SEVK ipucuna ve anahtar kelimelere bakip
hangi dosya ailesine dustugunu tahmin eder. Tahmin OLDUGU acikca yazilir;
oturum kendi olcumuyle duzeltir.
"""
import collections
import glob
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = "C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden"
ACIK = ("sirada", "olculecek")

# (kova, regex) — SIRA ONEMLI, ilk tutan kazanir
KOVALAR = [
    ("MOTOR",     r"uret_petek|motor|petek|B2|B3|koridor geometri|tavan|"
                  r"emilme|voronoi|enklav birles"),
    ("ARAYUZ",    r"app\.js|index\.html|css|arayüz|arayuz|panel|düğme|dugme|"
                  r"lejant|zoom|animasyon|renk tonu|görünüm|gorunum|SEVK: ARAYÜZ"),
    ("RENK",      r"renkler\.py|BOYALAR|renk çakış|renk cakis|ΔE|palet"),
    ("KRONOLOJI", r"olaylar|kronoloji|madde yaz|Değişmez 2|kaynak:|TDV.*madde"),
    ("DEVLET",    r"devletler\.js|künye|kunye|hayalet devlet|Değişmez 4"),
    ("VERI",      r"yerlesimler|nokta|koordinat|sahiplik|dönem|donem|"
                  r"Değişmez 1|Değişmez 3|kademe"),
    ("SAVAS",     r"savaslar\.js|sefer|muharebe|güzergâh|guzergah|kuşatma"),
    ("KISI",      r"kisiler\.js|padişah|padisah|kişi|sadrazam"),
]

kalemler = []
for y in sorted(glob.glob(os.path.join(KOK, "*", "CEVAP.json"))):
    paket = os.path.basename(os.path.dirname(y))
    try:
        d = json.load(io.open(y, encoding="utf-8"))
    except Exception:
        continue
    for hid, v in (d.get("maddeler") or {}).items():
        if not isinstance(v, dict):
            continue
        h = (v.get("hukum") or "").strip()
        if h not in ACIK:
            continue
        notu = (v.get("not") or "")
        kova = "?"
        for ad, rx in KOVALAR:
            if re.search(rx, notu, re.I):
                kova = ad
                break
        kalemler.append((kova, paket, hid, h, notu))

say = collections.Counter(k[0] for k in kalemler)
print("=" * 72)
print("ACIK MADDE: %d" % len(kalemler))
print()
print("KOVA DAGILIMI (not alanindan CIKARIM — kesin degil)")
for k, v in say.most_common():
    print("   %-12s %3d" % (k, v))
print()
for kova, _ in KOVALAR + [("?", "")]:
    grup = [x for x in kalemler if x[0] == kova]
    if not grup:
        continue
    print("=" * 72)
    print("── %s (%d) ──" % (kova, len(grup)))
    for _, paket, hid, h, notu in sorted(grup, key=lambda x: (x[1], x[2])):
        p = paket.replace("parti-emrelic-", "").replace("parti-", "")
        print("   %-10s %-8s %-11s %s" % (p, hid, h, notu[:82].replace("\n", " ")))

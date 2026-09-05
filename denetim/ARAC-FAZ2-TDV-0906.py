# -*- coding: utf-8 -*-
"""FAZ 2 ③④ — TDV gövdelerinden İŞGAL günlerini çıkarır.

🔴 GÖVDEYİ KESMEZ (bu gecenin `uganda` dersi: ilk BİBLİYOGRAFYA'da
   kesmek %79 kaybettirdi).
🔴 Yıl araması SINIR KORUMALI (`533` ↔ sayfa aralığı `533-538` dersi).
🔴 Boilerplate ölçülür ve AYRI kovaya yazılır (§4④) — "yok" SAYILMAZ.
"""
import io
import os
import re
import subprocess
import sys

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

SLUG = ["adana", "mersin", "tarsus", "gaziantep", "maras", "urfa",
        "osmaniye", "kilis", "mardin", "nusaybin"]

AY = ("ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|"
      "kasım|aralık")
GUN_RX = re.compile(r"(\d{1,2})\s+(%s)\s+(19[12]\d)" % AY, re.I)
ILGI = re.compile(r"(işgal|tahliye|kurtul|mütareke|itilâfnâme|itilafname|"
                  r"antlaşma|boşalt|çekil)", re.I)


def govde(slug):
    r = subprocess.run(
        ["curl", "-sL", "--max-time", "30",
         "https://islamansiklopedisi.org.tr/%s" % slug],
        capture_output=True)
    h = r.stdout.decode("utf-8", "replace")
    h = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", h)
    t = re.sub(r"(?s)<[^>]+>", " ", h)
    t = re.sub(r"&#\d+;|&[a-z]+;", " ", t)
    return re.sub(r"\s+", " ", t).strip()


print("═══ TDV GÖVDELERİ — İŞGAL/TAHLİYE GÜNLERİ")
for s in SLUG:
    t = govde(s)
    if len(t) < 2000:
        print("\n── %-12s ⚫ BOİLERPLATE (%d kar.) — 'yok' SAYILMAZ, §4④"
              % (s, len(t)))
        continue
    print("\n── %-12s %d karakter" % (s, len(t)))
    bulundu = 0
    for m in GUN_RX.finditer(t):
        a, b = max(0, m.start() - 150), min(len(t), m.end() + 150)
        c = t[a:b]
        if not ILGI.search(c):
            continue
        bulundu += 1
        if bulundu > 6:
            break
        print("   🟢 %-22s … %s …" % (m.group(0), c[60:260].strip()))
    if not bulundu:
        # gün yoksa YIL + ilgi
        for m in re.finditer(r"(?<!\d)(19[12]\d)(?!\d)", t):
            a, b = max(0, m.start() - 120), min(len(t), m.end() + 160)
            c = t[a:b]
            if ILGI.search(c):
                bulundu += 1
                if bulundu > 4:
                    break
                print("   🟡 YIL %s … %s …" % (m.group(1), c[40:230].strip()))
    if not bulundu:
        print("   ⚪ ilgili gün/yıl BULUNAMADI (gövde okundu, kesilmedi)")

# -*- coding: utf-8 -*-
"""Koşu 7b — SÜRECİN ÇIKIŞINI bekleyen ikinci nöbetçi.

Birinci nöbetçi (`_bekci_kosu7b.py`) `data/donemler.js`in yazılmasını
bekliyordu ve 07:11'de öttü. AMA SÜREÇ ÖLMEDİ: motor `donemler.js`i
yazdıktan sonra da çalışmaya devam ediyor (öteki çıktılar + doğrulama).

📌 `CLAUDE.md §10`: "bitti sanıp erken haber vermek, hiç haber vermemekten
kötüdür." Birinci tetik GERÇEKLEŞMİŞ bir olaydı ama KOŞUNUN SONU DEĞİLDİ —
bu, tetiği fazla erken seçmiş olmanın kaydı.

Bu nöbetçi PID'in kaybolmasını bekler ve çıkışta üretim izini ölçer.
"""
import os
import subprocess
import sys
import time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG = os.path.join(KOK, "denetim", "BEKCI-KOSU7B-CIKIS.log")
# 🔴 PID ARGÜMANDAN — ilk yazımda 3880'e SABİTLENMİŞTİ ve `uret_petek.py`
#    çıkınca öttü. Ama koşu orada bitmiyor: `kos_ve_yayinla.py` (PID 18120)
#    zinciri sürdürüyor (altlık → renk_olc → denetle → YAYIN KAPISI → damga
#    → commit + push). ⇒ Tetiği bir kez daha fazla erken seçmemek için PID
#    dışarıdan veriliyor.
PID = int(sys.argv[1]) if len(sys.argv) > 1 else 3880
ARA_SN = 60
CANLILIK_SN = 1800
TAVAN_SN = 6 * 3600

IZLE = ["data/donemler.js", "data/devletler_harita.js",
        "data/bolgeler.js", "data/petek_govde.js", "data/altlik.js"]


def yaz(s):
    m = "[%s] %s" % (time.strftime("%H:%M:%S"), s)
    print(m, flush=True)
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(m + "\n")


def canli(pid):
    ck = subprocess.run(
        ["powershell", "-NoProfile", "-c",
         "if (Get-Process -Id %d -ErrorAction SilentlyContinue) {'VAR'} else {'YOK'}" % pid],
        capture_output=True, text=True, check=False)
    return "VAR" in ck.stdout


def damgalar():
    d = []
    for y in IZLE:
        p = os.path.join(KOK, y)
        if os.path.exists(p):
            d.append("%s %s %.1fMB" % (
                os.path.basename(y),
                time.strftime("%H:%M", time.localtime(os.path.getmtime(p))),
                os.path.getsize(p) / 1048576))
        else:
            d.append("%s YOK" % os.path.basename(y))
    return " · ".join(d)


def main():
    basla = time.time()
    yaz("NÖBET 2 BAŞLADI · tetik = PID %d'in ÇIKIŞI (donemler.js DEĞİL)" % PID)
    yaz("   " + damgalar())
    son = basla
    while True:
        time.sleep(ARA_SN)
        gecen = time.time() - basla
        if not canli(PID):
            yaz("🟢 SÜREÇ ÇIKTI — koşu 7b BİTTİ (%.1f dk nöbet)" % (gecen / 60))
            yaz("   " + damgalar())
            subprocess.run(["powershell", "-NoProfile", "-c",
                            "1..9 | ForEach-Object { [Console]::Beep(880,250); "
                            "Start-Sleep -Milliseconds 120 }"], check=False)
            return 0
        if gecen > TAVAN_SN:
            yaz("🔴 ZAMAN AŞIMI — %.1f saat, süreç hâlâ canlı" % (gecen / 3600))
            return 1
        if time.time() - son >= CANLILIK_SN:
            son = time.time()
            yaz("⏳ süreç HÂLÂ CANLI · %.0f dk · %s" % (gecen / 60, damgalar()))


if __name__ == "__main__":
    sys.exit(main())

# -*- coding: utf-8 -*-
"""Koşu 7b nöbetçisi — GERÇEKLEŞMİŞ bir olaya bağlanır, süreye DEĞİL.

CLAUDE.md §10: "Bekçi her zaman GERÇEKLEŞMİŞ bir olaya bağlanır — geçen
süreye, tahmine ya da bir oturumun 'bitiyorum' demesine değil."
Tetik: data/donemler.js'in mtime'ı — motor onu koşunun SONUNDA yazar.

CLAUDE.md §7 (3 Eylül vakası): "bir nöbetçi DÜZENLİ olarak 'hâlâ
nöbetteyim' demelidir" — ölen bir nöbetçinin sessizliği "iyi gidiyor"
diye okunuyordu. Saatlik canlılık raporu bu yüzden var.
"""
import os
import subprocess
import sys
import time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TETIK = os.path.join(KOK, "data", "donemler.js")
LOG = os.path.join(KOK, "denetim", "BEKCI-KOSU7B.log")
PID_KOSU = 3880
ARA_SN = 60
TAVAN_SN = 8 * 3600          # 16s09dk tavanının üstüne pay
CANLILIK_SN = 3600


def yaz(satir):
    damga = time.strftime("%H:%M:%S")
    metin = "[%s] %s" % (damga, satir)
    print(metin, flush=True)
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(metin + "\n")


def beep(kere, frekans, sure):
    komut = (
        "1..%d | ForEach-Object { [Console]::Beep(%d,%d); "
        "Start-Sleep -Milliseconds 120 }" % (kere, frekans, sure)
    )
    subprocess.run(["powershell", "-NoProfile", "-c", komut], check=False)


def kosuyor(pid):
    """PID canlı mı — ölçüm, tahmin değil."""
    ck = subprocess.run(
        ["powershell", "-NoProfile", "-c",
         "if (Get-Process -Id %d -ErrorAction SilentlyContinue) "
         "{'VAR'} else {'YOK'}" % pid],
        capture_output=True, text=True, check=False)
    return "VAR" in ck.stdout


def main():
    if not os.path.exists(TETIK):
        yaz("DUR — tetik dosyası yok: %s" % TETIK)
        return 2
    taban = os.path.getmtime(TETIK)
    basla = time.time()
    yaz("NÖBET BAŞLADI · tetik=data/donemler.js · taban mtime=%s · koşu PID=%d"
        % (time.strftime("%m-%d %H:%M", time.localtime(taban)), PID_KOSU))
    son_canlilik = basla

    while True:
        time.sleep(ARA_SN)
        gecen = time.time() - basla

        if os.path.getmtime(TETIK) != taban:
            yaz("🟢 KOŞU BİTTİ — donemler.js YAZILDI (%.1f saat nöbet)"
                % (gecen / 3600))
            beep(9, 880, 250)
            return 0

        if not kosuyor(PID_KOSU):
            # Tetik yazılmadan süreç ölmüşse koşu ÇÖKMÜŞTÜR.
            yaz("🔴 KOŞU ÖLDÜ — PID %d yok VE donemler.js yazılmadı "
                "(%.1f saat sonra)" % (PID_KOSU, gecen / 3600))
            beep(3, 220, 700)
            return 1

        if gecen > TAVAN_SN:
            yaz("🔴 ZAMAN AŞIMI — %.1f saat, tetik hâlâ yazılmadı" % (gecen / 3600))
            beep(3, 220, 700)
            return 1

        if time.time() - son_canlilik >= CANLILIK_SN:
            son_canlilik = time.time()
            yaz("⏳ koşu SÜRÜYOR · %.1f saat · PID canlı · tetik bekleniyor"
                % (gecen / 3600))


if __name__ == "__main__":
    sys.exit(main())

# -*- coding: utf-8 -*-
"""ORHANGAZI kosu bekcisi — 25 Agustos 2026.

TETIK: data/donemler.js'in DEGISME DAMGASI (motor onu SONDA yazar).
       Tahmine, gecen sureye ya da bir oturumun "bitiyorum" demesine BAGLI DEGIL.
BITINCE: 9 beep (880 Hz · 250 ms · 120 ms ara)
TIKANIRSA: 6 saat sonra UC KALIN ALCAK beep (220 Hz)
YARIM YAZIM: iki tur ust uste AYNI BOYUT gorulene kadar "bitti" DEMEZ.

NOT: `wmic` bu makinede YOK (WinError 2) — surec sorgusu PowerShell
     Get-CimInstance ile yapiliyor ve SINANDI (uret_petek: True).
"""
import os, sys, time, subprocess, datetime

KOK = os.environ.get("ATLAS_KOK")
HEDEF = os.path.join(KOK, "data", "donemler.js")
LOG = os.path.join(KOK, "bekci_25agu.log")
ARALIK = 60
TAVAN = 6 * 3600

PS_SORGU = "(Get-CimInstance Win32_Process -Filter \"Name='python.exe'\").CommandLine"


def yaz(s):
    z = datetime.datetime.now().strftime("%H:%M:%S")
    with open(LOG, "a", encoding="utf-8") as f:
        f.write("[%s] %s\n" % (z, s))
        f.flush()


def beep(hz, ms, n, ara=0.12):
    for _ in range(n):
        try:
            subprocess.run(["powershell", "-NoProfile", "-c",
                            "[Console]::Beep(%d,%d)" % (hz, ms)], timeout=30)
        except Exception:
            pass
        time.sleep(ara)


def motor_yasiyor():
    try:
        c = subprocess.run(["powershell", "-NoProfile", "-c", PS_SORGU],
                           capture_output=True, timeout=60)
        return b"uret_petek" in c.stdout
    except Exception:
        return True  # olcemedik -> "olmus" DEME (olculemedi != temiz)


taban_m = os.path.getmtime(HEDEF)
taban_b = os.path.getsize(HEDEF)
yaz("BEKCI KURULDU (ORHANGAZI) · taban mtime=%s boyut=%d" %
    (datetime.datetime.fromtimestamp(taban_m).strftime("%Y-%m-%d %H:%M:%S"), taban_b))
yaz("motor gorunuyor mu (sinandi): %s" % motor_yasiyor())

bas = time.time()
onceki_boyut = None
yok_tur = 0

while True:
    time.sleep(ARALIK)
    gecen = time.time() - bas

    try:
        m = os.path.getmtime(HEDEF)
        b = os.path.getsize(HEDEF)
    except OSError:
        continue

    if m > taban_m:
        # damga degisti — yarim yazim olmasin diye iki tur ayni boyut bekle
        if onceki_boyut is not None and b == onceki_boyut and b > 0:
            if b < taban_b * 0.70:
                yaz("UYARI: dosya %%30'dan fazla KUCULDU (%d -> %d) — YARIM YAZIM SUPHESI" % (taban_b, b))
                beep(220, 600, 3, 0.25)
                sys.exit(4)
            yaz("BITTI · yeni boyut=%d (%.1f dk)" % (b, gecen / 60))
            beep(880, 250, 9)
            sys.exit(0)
        onceki_boyut = b
        yaz("damga degisti, boyut oturuyor mu: %d" % b)
        continue

    onceki_boyut = None

    if not motor_yasiyor():
        yok_tur += 1
        yaz("motor gorunmuyor (%d/3)" % yok_tur)
        if yok_tur >= 3:
            yaz("MOTOR 3 TURDUR GORUNMUYOR ve dosya HALA ESKI — KOSU OLMUS OLABILIR (%.1f dk)" % (gecen / 60))
            beep(220, 600, 3, 0.25)
            sys.exit(2)
    else:
        yok_tur = 0

    if gecen > TAVAN:
        yaz("TAVAN ASILDI (6 saat) — TAKILDI")
        beep(220, 600, 3, 0.25)
        sys.exit(3)

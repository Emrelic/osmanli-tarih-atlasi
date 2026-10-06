# -*- coding: utf-8 -*-
"""olcu_kapisi_1006 — OLCU-KAPISI-1006.js'in Python ikizi (UMIT-W32, 6 Ekim 2026).

Ölçülemeyen soru "temiz" değil ÇIKIŞ 2'dir. Bu modül yalnız betiklerin kendi
çağırdığı bir yardımcıdır; hiçbir kapıya BAĞLI DEĞİL.

  T1 dosya(yollar, ipucu)  gereken girdi/üretilmiş dosya diskte yok → çıkış 2
  T4 api(modul, adlar)     çağrılacak ad modülde yok → çıkış 2
  kova(neden) + bitir()    alt ölçüm ölçülemedi → sonda çıkış 2

Neden 1 değil 2: 1 = "İHLAL VAR" demektir (denetle.py, 4 Ekim). Eksik girdiyle
çöken betik bugüne kadar 1 veriyordu — otomasyon bunu ihlal sanırdı.

🧪 SINAV KANCASI: OLCU_KAPISI_YAPAY_EKSIK="data/x.js,..." o yolları YOK sayar
(T1'in gerçek yolu koşar, yalnız girdi yapaydır).
"""
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Üretilmiş, gitignore'lu dosyaların kodlanmış kaynaktan nasıl geri çözüleceği.
COZ = {
    "data/donemler.js": "py arac/kodla.py coz-c data data/donemler.js donem",
    "data/devletler_harita.js": "py arac/kodla.py coz-c data data/devletler_harita.js",
    "data/petek_govde.js": "py arac/kodla.py coz-c data data/petek_govde.js govde",
}

KOVA = []


def olculemedi(neden):
    print("⚫ ÖLÇÜLEMEDİ — %s (olcu_kapisi_1006)" % neden, flush=True)
    sys.exit(2)


def dosya(yollar, kok=None):
    """T1 — `yollar` kök-göreli ("data/donemler.js"); biri yoksa çıkış 2."""
    kok = kok or KOK
    yapay = [y for y in os.environ.get("OLCU_KAPISI_YAPAY_EKSIK", "").split(",") if y]
    for y in yollar:
        if y in yapay or not os.path.exists(os.path.join(kok, y)):
            ipucu = COZ.get(y.replace("\\", "/"))
            olculemedi("T1 girdi yok: %s%s%s" % (
                y, " · üret: " + ipucu if ipucu else "", " [YAPAY]" if y in yapay else ""))


def api(modul, adlar, etiket=None):
    """T4 — modülde olmayan ad varsa çıkış 2 (AttributeError çöküşü = 1 yerine)."""
    yok = [a for a in adlar if not hasattr(modul, a)]
    if yok:
        olculemedi("T4 API yok: %s" % ", ".join(
            "%s.%s" % (etiket or modul.__name__, a) for a in yok))


def kova(neden):
    KOVA.append(neden)
    print("  ⚫ ÖLÇÜLEMEDİ — %s" % neden, flush=True)


def bitir(kod=0):
    """İhlal (1) varsa hüküm 1 kalır ama kova YİNE basılır."""
    if KOVA:
        print("\n⚫ ÖLÇÜLEMEDİ KOVASI (%d): %s (olcu_kapisi_1006)"
              % (len(KOVA), " · ".join(KOVA)), flush=True)
        sys.exit(1 if kod == 1 else 2)
    if kod:
        sys.exit(kod)

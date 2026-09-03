# -*- coding: utf-8 -*-
"""KOŞU BEKÇİSİ — bitişi `data/donemler.js` DAMGASINDAN anlar.

🔴 TETİK SÜRE DEĞİL, GERÇEKLEŞMİŞ OLAY (`CLAUDE.md §10`):
motor `donemler.js`i koşunun SONUNDA yazar. Süreye ya da motorun kendi
tahminine bakan bir bekçi *"bitti"* der ve YANILTIR — bu projede
yaşandı: koşu temiz bitecekti ama çıktı bayat olacaktı.

🔴 VE İKİ SONUCU DA YAKALAR — `BEKCI-KURULUMU`nun asıl dersi:
    BİTTİ   donemler.js damgası DEĞİŞTİ            → 9 beep
    ÖLDÜ    süreç YOK ama damga DEĞİŞMEDİ          → 3 kalın alçak beep
"Sessizlik iyi gidiyor demek değildir" — bir bekçi yalnız olay anında
konuşursa, öldüğünde de sustuğu için fark edilmez. Bu yüzden her 30
dakikada bir CANLILIK raporu basar.

kullanım (Monitor aracıyla, persistent):
    py denetim/ARAC-KAMERIKA-0903-kosu-bekci.py --pid 1268
"""
import argparse
import io
import os
import sys
import time

sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

A = argparse.ArgumentParser()
A.add_argument("--pid", type=int, default=1268)
A.add_argument("--tetik", default="data/donemler.js")
A.add_argument("--log", default="kosu_3eylul_2.log")
A.add_argument("--ara", type=int, default=60)        # saniye
A.add_argument("--canlilik", type=int, default=1800)  # 30 dk
A.add_argument("--tavan", type=int, default=4 * 3600)
K = A.parse_args()


def beep(f, ms, n, bekle=0.12):
    try:
        import winsound
        for _ in range(n):
            winsound.Beep(f, ms)
            time.sleep(bekle)
    except Exception:
        pass


def yasiyor(pid):
    try:
        import ctypes
        h = ctypes.windll.kernel32.OpenProcess(0x1000, False, pid)
        if not h:
            return False
        kod = ctypes.c_ulong()
        ctypes.windll.kernel32.GetExitCodeProcess(h, ctypes.byref(kod))
        ctypes.windll.kernel32.CloseHandle(h)
        return kod.value == 259          # STILL_ACTIVE
    except Exception:
        return os.path.exists("/proc/%d" % pid)


def son_log():
    try:
        with io.open(K.log, encoding="utf-8", errors="replace") as f:
            s = [x.strip() for x in f.readlines() if x.strip()]
        return s[-1][:110] if s else "(log boş)"
    except Exception as e:
        return "(log okunamadı: %s)" % e


t0 = time.time()
damga0 = os.path.getmtime(K.tetik) if os.path.exists(K.tetik) else 0
zaman0 = time.strftime("%Y-%m-%d %H:%M", time.localtime(damga0))
print("[BEKÇİ] nöbette · tetik=%s (damga %s) · PID %d %s · her %d sn yoklar, "
      "her %d dk canlılık raporu · %s"
      % (K.tetik, zaman0, K.pid,
         "CANLI" if yasiyor(K.pid) else "🔴 ZATEN YOK",
         K.ara, K.canlilik // 60, son_log()))

son_canlilik = time.time()
while True:
    time.sleep(K.ara)
    gecen = int(time.time() - t0)

    damga = os.path.getmtime(K.tetik) if os.path.exists(K.tetik) else 0
    if damga != damga0:
        print("🟢🟢 KOŞU BİTTİ — %s YENİDEN YAZILDI (%s) · nöbet %d dk · %s"
              % (K.tetik,
                 time.strftime("%H:%M:%S", time.localtime(damga)),
                 gecen // 60, son_log()))
        print("⚠️ data/ ve arac/ ARTIK SERBEST — ama yayın kapısı "
              "(denetle_yayin.py) koşmadan yayınlanmaz.")
        beep(880, 250, 9)
        break

    if not yasiyor(K.pid):
        print("🔴🔴 KOŞU ÖLDÜ — PID %d YOK ama %s DEĞİŞMEDİ. Çıktı EKSİK. "
              "nöbet %d dk · son log: %s"
              % (K.pid, K.tetik, gecen // 60, son_log()))
        beep(220, 600, 3, 0.25)
        break

    if time.time() - son_canlilik >= K.canlilik:
        son_canlilik = time.time()
        print("⏳ koşu SÜRÜYOR · %d dk · %s" % (gecen // 60, son_log()))

    if gecen > K.tavan:
        print("🔴 BEKÇİ TAVANI (%d saat) DOLDU — koşu hâlâ sürüyor, damga "
              "değişmedi. Takılmış OLABİLİR, sorun. son log: %s"
              % (K.tavan // 3600, son_log()))
        beep(220, 600, 3, 0.25)
        break

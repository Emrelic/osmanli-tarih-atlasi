# -*- coding: utf-8 -*-
"""ÇİFT KOŞU KİLİDİ — süreç canlılığına dayalı, ve İÇE AKTARILABİLİR.

🔴 NİÇİN AYRI BİR MODÜL:
`uret_petek.py` içe aktarılamaz (kendi başında `__main__` değilse
`RuntimeError` atar — dosyanın tamamı modül düzeyinde koşuyor). Kilit oraya
gömülseydi **sınanamazdı**: `C13③` (girdiyi gerçek kaynağından okuma yolu
koşuldu mu) ve `C13④` (aletin cevabını doğru yerden okuduğunu göster) ancak
16 saatlik bir üretim başlatarak denenebilirdi — yani hiç denenmezdi.
Burada duruyor, saniyeler içinde sınanıyor, motor onu çağırıyor.

🔴 DOĞURAN VAKA — VE İKİSİ DE ÖLÇÜLMÜŞ:
① 3 Eylül 2026, 47 SANİYE ARAYLA iki oturum aynı renk koşusunu başlattı
   (22:54:46 ve 22:55:33). `CLAUDE.md §7`: *"§7 DOSYA sahipliğini korur ama
   KAYNAK sahipliği diye bir şey YOK."* İkisi de aynı CPU'yu paylaştı.
② Ve `kos_ve_yayinla.py`nin kendi kilidinde ÖLÇÜLMÜŞ bir delik var:
      if yas < 240:   # 4 saat — "en uzun makul koşu"
   Koşu 4b **16 saat 09 dakika** sürdü (09-04 00:48:18 → 16:57:36).
   ⇒ Dördüncü saatten sonra başlatılan bir koşu, kilidi *"takılmış"* sayıp
     DEVRALIRDI ve iki üretim yan yana koşardı. Tavan bir TAHMİNDİ; ölçüm
     onu çürüttü.

🟢 ÇARE — YAŞ DEĞİL CANLILIK:
Kilit dosyası PID taşır. Karar sırası:
   ① PID yaşıyor mu?   → yaşıyorsa REDDET (yaşı ne olursa olsun)
   ② PID ölmüş         → devral, ve NİÇİN devraldığını YAZ
   ③ PID okunamadı     → yaş tavanına düş (geriye uyum), ve bunu SÖYLE
📌 Yaş bir vekildir, canlılık ÖLÇÜMDÜR. Vekil 4 saatte yanıldı.

KAÇIŞ KAPISI: `MOTOR_KILIT_KAPALI=1` — kilit tamamen atlanır. Yalnız
kilidin kendisi bozulursa üretimi kurtarmak için; normal kullanımda ASLA.
"""
import io
import os
import sys
import time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YAS_TAVANI_DK = 1440.0        # 24 saat — koşu 4b 16s09dk sürdü, %48 pay
                              # ⚠️ bu tavan yalnız PID OKUNAMADIĞINDA işler


def _yol(ad):
    return os.path.join(KOK, ".%s.kilit" % ad)


def _yasiyor_mu(pid):
    """PID canlı mı? Bilinmiyorsa None döner — 'hayır' DEĞİL.

    🔴 Üç durum, ikisi değil: canlı / ölü / ÖLÇÜLEMEDİ. `§11`in
    *"ölçülemedi ≠ temiz"* kuralı burada *"ölçülemedi ≠ ölü"* olur —
    ve yanlış okunursa canlı bir üretimin üstüne ikincisi biner.
    """
    if not pid:
        return None
    try:
        if os.name == "nt":
            import subprocess
            r = subprocess.run(
                ["tasklist", "/FI", "PID eq %d" % pid, "/NH", "/FO", "CSV"],
                capture_output=True, text=True, timeout=20)
            if r.returncode != 0:
                return None
            return ('"%d"' % pid) in (r.stdout or "")
        os.kill(pid, 0)
        return True
    except ProcessLookupError:
        return False
    except PermissionError:
        return True            # başkasının süreci — VAR demektir
    except Exception:
        return None


def _oku(yol):
    """Kilit dosyasını ayrıştır → (pid, damga, ham). Bozuksa (None, None, ham)."""
    try:
        ham = io.open(yol, encoding="utf-8").read().strip()
    except Exception:
        return None, None, ""
    pid, damga = None, None
    for parca in ham.split("|"):
        parca = parca.strip()
        if parca.startswith("pid="):
            try:
                pid = int(parca[4:])
            except ValueError:
                pid = None
        elif parca.startswith("bas="):
            damga = parca[4:]
    return pid, damga, ham


def al(ad="petek", yaz=print):
    """Kilidi al. Alınamazsa False döner ve SEBEBİ yazar."""
    if os.environ.get("MOTOR_KILIT_KAPALI") == "1":
        yaz("⚠️ MOTOR_KILIT_KAPALI=1 — çift koşu kilidi ATLANDI. "
            "İki üretim aynı anda koşarsa çıktı SESSİZCE bozulur.")
        return True

    yol = _yol(ad)
    if os.path.exists(yol):
        pid, damga, ham = _oku(yol)
        try:
            yas = (time.time() - os.path.getmtime(yol)) / 60.0
        except Exception:
            yas = 0.0
        canli = _yasiyor_mu(pid)

        if canli is True:
            yaz("🔴 ZATEN BİR '%s' KOŞUSU VAR — PID %s CANLI (%.0f dk önce "
                "başladı)" % (ad, pid, yas))
            yaz("   İkinci koşu BAŞLATILMADI. İki üretim aynı anda koşarsa")
            yaz("   data/ yarı yazılmış okunur ve çıktı SESSİZCE bozulur.")
            yaz("   Kayıt: %s" % ham)
            return False

        if canli is False:
            yaz("⚠️ Kilit vardı ama PID %s ÖLMÜŞ (%.0f dk) — devralıyorum."
                % (pid, yas))
        else:
            # 🔴 PID okunamadı: burada YAŞ vekiline düşülür, ve bu bir
            #    ödünleşmedir — vekil 4 saatte bir kez yanıldı (bkz. başlık).
            if yas < YAS_TAVANI_DK:
                yaz("🔴 KİLİT VAR ve CANLILIK ÖLÇÜLEMEDİ (%.0f dk · kayıt: %s)"
                    % (yas, ham))
                yaz("   'Ölçülemedi' ÖLÜ demek DEĞİLDİR — koşu BAŞLATILMADI.")
                yaz("   Gerçekten takıldıysa: %s dosyasını sil." % yol)
                return False
            yaz("⚠️ Kilit %.0f dk eski (tavan %.0f) ve canlılık ölçülemedi — "
                "devralıyorum." % (yas, YAS_TAVANI_DK))

    with io.open(yol, "w", encoding="utf-8") as f:
        f.write("pid=%d | bas=%s | argv=%s"
                % (os.getpid(), time.strftime("%Y-%m-%d %H:%M:%S"),
                   " ".join(sys.argv[:2])))
    return True


def birak(ad="petek"):
    try:
        os.remove(_yol(ad))
    except Exception:
        pass

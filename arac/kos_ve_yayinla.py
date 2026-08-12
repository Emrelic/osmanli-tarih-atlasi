# -*- coding: utf-8 -*-
"""TOKENSİZ YAYIN ZİNCİRİ — üretim · denetim · damga · commit · push.

🔴 NİÇİN VAR (Emre, 12 Ağustos 2026):
   *"Token'i bitirdikten sonra koşuyu başlatamıyoruz değil mi, emir
   veremediğimiz için? Emir vermek için token gerektirmeyen, zamanlayıcılı
   bir emir verebilir miyiz?"*

   Cevap: EVET. Koşu Claude'a hiç ihtiyaç duymaz — düz bir alt süreçtir.
   Token gereken tek şey KARAR VERMEK ve SONUCU DEĞERLENDİRMEK. Karar
   önceden verilirse, zincirin tamamı SIFIR TOKEN'la koşar.

   ⇒ Bu betik, "token'ı şimdi harcayıp sonra bedava iş satın almanın"
   aletidir. `YASALAR` triyaj maddesinin uygulanmış hâli:
   *"ne yarım bırak, ne boşa harca."*

🔴 GÜVENLİK İLKESİ — KAPI KAPALIYSA YAYINLAMAZ:
   Zincir her adımda çıkış kodunu okur. Denetim ya da yayın kapısı ihlal
   verirse **DURUR ve YAYINLAMAZ.** Yanlış bir yayın, yayınlanmamış bir
   düzeltmeden kat kat pahalıdır (Emre'nin kuralı: *"75 dakika bedava,
   yanlış yayın değil"*).

Koşum:
    py arac/kos_ve_yayinla.py                 # hemen koş
    py arac/kos_ve_yayinla.py --kuru          # hiçbir şey yapma, planı bas
    py arac/kos_ve_yayinla.py --yayinlama     # koş + denetle, PUSH ETME

Zamanlayıcıya bağlamak (tokensiz):
    py arac/kos_ve_yayinla.py --zamanla 21:30
"""
import io
import os
import subprocess
import sys
import time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG = os.path.join(KOK, "kosu_zincir.log")
MESAJ = os.path.join(KOK, "denetim", "zincir-commit-mesaji.txt")


def yaz(s):
    print(s, flush=True)
    with io.open(LOG, "a", encoding="utf-8") as f:
        f.write(s + "\n")


def kos(ad, argv, olumcul=True, dk=200):
    """Bir adımı koştur. olumcul=True ise başarısızlıkta ZİNCİR DURUR."""
    yaz("\n" + "=" * 66)
    yaz("ADIM: %s   (%s)" % (ad, time.strftime("%H:%M:%S")))
    yaz("=" * 66)
    t0 = time.time()
    try:
        r = subprocess.run(argv, cwd=KOK, capture_output=True, text=True,
                           encoding="utf-8", errors="replace", timeout=dk * 60)
    except subprocess.TimeoutExpired:
        yaz("🔴 ZAMAN AŞIMI (%d dk) — ZİNCİR DURDU" % dk)
        return None
    sure = (time.time() - t0) / 60.0
    cikti = (r.stdout or "") + (r.stderr or "")
    # log'a TAMAMI, ekrana son 25 satır
    with io.open(LOG, "a", encoding="utf-8") as f:
        f.write(cikti + "\n")
    for s in cikti.strip().split("\n")[-25:]:
        print("   " + s, flush=True)
    yaz("→ kod=%d · %.1f dk" % (r.returncode, sure))
    if r.returncode != 0 and olumcul:
        yaz("🔴 BU ADIM İHLAL VERDİ — ZİNCİR DURDU, YAYIN YAPILMADI.")
        yaz("   Bu bir kusur değil bir KAPI: yanlış yayın, yayınlanmamış")
        yaz("   düzeltmeden kat kat pahalıdır.")
        return None
    return r.returncode


def beep(n=9):
    ps = ("1..%d | ForEach-Object { [Console]::Beep(880,250); "
          "Start-Sleep -Milliseconds 120 }" % n)
    try:
        subprocess.run(["powershell", "-NoProfile", "-Command", ps],
                       capture_output=True, timeout=60)
    except Exception:
        pass


KILIT = os.path.join(KOK, ".zincir.kilit")


def _kilit_al():
    """🔴 ÇİFT KOŞU KİLİDİ — Emre 'ŞİMDİ BAŞLAT' düğmesi istedi (12 Ağu).

    Elle başlatma + 22:00 zamanlayıcısı + 23:50 emniyet ağı = aynı anda üç
    tetikleyici. İki üretim aynı anda koşarsa `data/` yarı yazılmış hâlde
    okunur ve çıktı SESSİZCE bozulur — bu proje dört üretimi böyle kaybetti.
    """
    if os.path.exists(KILIT):
        try:
            yas = (time.time() - os.path.getmtime(KILIT)) / 60.0
            eski = io.open(KILIT, encoding="utf-8").read().strip()
        except Exception:
            yas, eski = 0, "?"
        if yas < 240:                      # 4 saat — en uzun makul koşu
            yaz("🔴 ZATEN BİR ZİNCİR KOŞUYOR (%.0f dk önce başladı: %s)"
                % (yas, eski))
            yaz("   İkinci koşu BAŞLATILMADI. İki üretim aynı anda koşarsa")
            yaz("   data/ yarı yazılmış okunur ve çıktı SESSİZCE bozulur.")
            yaz("   Gerçekten takıldıysa: .zincir.kilit dosyasını sil.")
            return False
        yaz("⚠️ Eski kilit bulundu (%.0f dk) — takılmış sayıp devralıyorum." % yas)
    with io.open(KILIT, "w", encoding="utf-8") as f:
        f.write(time.strftime("%Y-%m-%d %H:%M:%S"))
    return True


def _kilit_birak():
    try:
        os.remove(KILIT)
    except Exception:
        pass


def zincir(yayinla=True, uretimsiz=False):
    if not _kilit_al():
        return 2
    try:
        return _zincir(yayinla, uretimsiz)
    finally:
        _kilit_birak()


def _zincir(yayinla=True, uretimsiz=False):
    yaz("\n\n" + "#" * 66)
    yaz("# TOKENSİZ YAYIN ZİNCİRİ — başlangıç %s%s"
        % (time.strftime("%Y-%m-%d %H:%M:%S"),
           "   [EMNİYET AĞI — üretim ATLANIYOR]" if uretimsiz else ""))
    yaz("#" * 66)

    if uretimsiz:
        # 🔴 EMNİYET AĞI (Emre'nin sorusu, 12 Ağustos 2026):
        #    "koşu 75 dk sürerse 23:50 gibi bir saate yayın komutu
        #     zamanlayabilir miyiz?"
        #    Yayın ZATEN zincirin içinde ve normalde bu koşu GEREKSİZDİR.
        #    Var oluş sebebi tek bir hâl: ana zincir üretimi bitirdi ama
        #    SONRAKİ bir adımda öldü (çökme · kilitli dosya · ağ). O zaman
        #    diskte TAZE çıktı vardır ve kimse yayınlamamıştır.
        #    ⚠️ Ana zincir başarıyla push ettiyse bu koşu hiçbir şey bulmaz
        #    ve TEMİZ çıkar — zararsızdır. "Yayınlanmamış olma" ihtimaline
        #    karşı ödenen ucuz sigorta.
        if not os.path.exists(os.path.join(KOK, "data", "donemler.js")):
            yaz("🔴 data/donemler.js YOK — üretim hiç koşmamış. DURDUM.")
            return 1
        yas = (time.time()
               - os.path.getmtime(os.path.join(KOK, "data", "donemler.js"))) / 3600.0
        yaz("donemler.js yaşı: %.1f saat" % yas)
        if yas > 6:
            yaz("🔴 ÇIKTI 6 SAATTEN ESKİ — bu, bu geceki koşunun ürünü DEĞİL.")
            yaz("   Bayat çıktıyı yayınlamak, hiç yayınlamamaktan KÖTÜDÜR.")
            yaz("   DURDUM, yayın YAPILMADI.")
            return 1
    else:
        if kos("üretim (uret_petek.py) ~75 dk",
               [sys.executable, "arac/uret_petek.py"], dk=200) is None:
            return 1
        if kos("devirler (uret_devirler.py)",
               [sys.executable, "arac/uret_devirler.py"], dk=40) is None:
            return 1
    # 🔴 renk ölçümü: CLAUDE.md §9 — veriye dokunan her koşudan sonra ŞART.
    #    Ölümcül DEĞİL: uyarı üretir, yayını kesmez (eşik ≠ tercih ayrımı).
    kos("renk ölçümü (renk_olc.py)", [sys.executable, "arac/renk_olc.py"],
        olumcul=False, dk=40)
    if kos("ALTI DEĞİŞMEZ (denetle.py)", [sys.executable, "arac/denetle.py"],
           dk=40) is None:
        return 1
    if kos("YAYIN KAPISI (denetle_yayin.py)",
           [sys.executable, "arac/denetle_yayin.py"], dk=40) is None:
        return 1

    if not yayinla:
        yaz("\n🟡 --yayinlama verildi: damga/commit/push ATLANDI.")
        beep(9)
        return 0

    if kos("sürüm damgası", [sys.executable, "arac/surum_damgala.py"],
           dk=10) is None:
        return 1

    # --- commit: mesaj ÖNCEDEN dosyaya yazılmış olmalı (§11) ----------
    if not os.path.exists(MESAJ):
        yaz("🔴 COMMIT MESAJI YOK: %s" % MESAJ)
        yaz("   Zincir kurulurken yazılmalıydı. Yayın YAPILMADI.")
        return 1
    kos("git add", ["git", "add", "-A", "--", "data", "index.html"],
        olumcul=False, dk=10)
    if kos("git commit", ["git", "commit", "-F", MESAJ], dk=10) is None:
        return 1
    kos("git pull --rebase", ["git", "pull", "--rebase"], olumcul=False, dk=10)
    if kos("git push", ["git", "push"], dk=10) is None:
        return 1

    yaz("\n🟢 ZİNCİR TAMAM — yayınlandı. %s" % time.strftime("%H:%M:%S"))
    yaz("   GitHub Pages'in sunması ~40-60 sn sürer.")
    beep(9)
    return 0


def zamanla(saat, uretimsiz=False):
    """Windows Görev Zamanlayıcısına bağla — TOKENSİZ koşar."""
    ad = "AtlasYayinAgi" if uretimsiz else "AtlasKosuZinciri"
    komut = '"%s" "%s"%s' % (sys.executable,
                             os.path.join(KOK, "arac", "kos_ve_yayinla.py"),
                             " --uretimsiz" if uretimsiz else "")
    r = subprocess.run(["schtasks", "/Create", "/F", "/SC", "ONCE",
                        "/TN", ad, "/ST", saat, "/TR", komut],
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace")
    print((r.stdout or "") + (r.stderr or ""))
    if r.returncode == 0:
        print("🟢 KURULDU: %s · %s · TOKENSİZ" % (ad, saat))
        print("   iptal:  schtasks /Delete /TN %s /F" % ad)
        print("   log  :  %s" % LOG)
    else:
        print("🔴 KURULAMADI (kod %d) — yönetici hakkı gerekebilir." % r.returncode)
    return r.returncode


def main(argv):
    if "--zamanla" in argv:
        i = argv.index("--zamanla")
        if i + 1 >= len(argv):
            print("!! --zamanla SAAT ister, ör. --zamanla 21:30")
            return 1
        return zamanla(argv[i + 1], uretimsiz="--uretimsiz" in argv)
    if "--kuru" in argv:
        print(__doc__)
        print("PLAN: uret_petek → uret_devirler → renk_olc → denetle →")
        print("      denetle_yayin → surum_damgala → commit → push → 9 bip")
        print("commit mesajı: %s  (%s)"
              % (MESAJ, "VAR" if os.path.exists(MESAJ) else "🔴 YOK"))
        return 0
    return zincir(yayinla="--yayinlama" not in argv,
                  uretimsiz="--uretimsiz" in argv)


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

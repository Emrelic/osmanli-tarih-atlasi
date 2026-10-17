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
   İki kapı (denetle.py · denetle_yayin.py) üç kodu AYRI okur (`CLAUDE.md
   §3`): 0 geçer · 1 İHLAL → DUR · 2 ÖLÇÜLEMEDİ → DUR ve ölçülemeyen
   sorular ADIYLA basılır · başka kod / zaman aşımı → DUR. Bu zincirde
   kapıyı uyarıya indiren bayrak YOKTUR.

🔒 ÇİFT KOŞU KİLİDİ — SÜREÇ DAMGASI (`.zincir.kilit`), yaş DEĞİL:
   Kilit `pid=<N> | bas=<zaman> | makine=<ad> | argv=…` taşır; başkasının
   kilidi yalnız OKUNUR (hiçbir süreç öldürülmez). Karar:
     PID CANLI (psutil, yoksa `tasklist`)   → BAŞLATMAZ, çıkış 3 (meşgul)
     PID ÖLÜ (aynı makine)                  → devralır, sebebini yazar
     damga BOZUK / pid= yok / eski biçim /
     başka makine / canlılık ölçülemedi     → BAŞLATMAZ, çıkış 2 (ölçülemedi)
   Yaş yalnız İKİNCİL bilgi olarak basılır, karara girmez. Eskiden
   `yas < 240` dk vekiliydi: 7-8 saatlik tam inşada 4. saatten sonra CANLI
   bir zincirin kilidini devralırdı (KOSU-YAYIN-KAPI-1010).
   ⚠️ PID yeniden kullanımı (ölü zincirin PID'ini başka süreç almış) CANLI
   okunur ⇒ güvenli yön: başlatmaz; kayıt basılır, insan karar verir.

📦 COMMIT YALNIZ YAYIN LİSTESİNİ TAŞIR (KOS-VE-YAYINLA-ADD-1010):
   Liste `arac/yayin_listesi.py`den TÜRETİLİR ve satır satır basılır.
   `git add -- <liste>` + `git commit -F <mesaj> -- <liste>` (aynı pathspec,
   ADIYLA; `add -A` / `add .` / `commit -a` YOK), sonra `git show --name-only`
   ile GERİ OKUNUR — liste dışı dosya taşıyorsa push YAPILMAZ. data/ altında
   listede olmayan değişmiş/izlenmeyen her dosya ADIYLA basılır, commite
   GİRMEZ. Liste DURDURUCU (gitignore'lu · diskte yok · BAYAT TÜREV) ya da
   ÖLÇÜLEMEDİ verirse commit ATILMAZ.

Çıkış: 0 tamam · 1 bir adım/kapı düştü · 2 kilit ÖLÇÜLEMEDİ · 3 kilit
CANLI bir zincirde.

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
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import yayin_listesi                                        # noqa: E402
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG = os.path.join(KOK, "kosu_zincir.log")
MESAJ = os.path.join(KOK, "denetim", "zincir-commit-mesaji.txt")


def yaz(s):
    print(s, flush=True)
    with io.open(LOG, "a", encoding="utf-8") as f:
        f.write(s + "\n")


def kos(ad, argv, olumcul=True, dk=200, tum=None):
    """Bir adımı koştur. olumcul=True ise başarısızlıkta ZİNCİR DURUR.

    tum: liste verilirse çıktının TAMAMI oraya da eklenir (kapı ayrıştırması).
    """
    yaz("\n" + "=" * 66)
    yaz("ADIM: %s   (%s)" % (ad, time.strftime("%H:%M:%S")))
    yaz("=" * 66)
    t0 = time.time()
    # 📡 SATIR SATIR AKIŞ — M-4535 (18 Eylül 2026). Eskiden `subprocess.run(
    # capture_output=True)` çıktıyı adım BİTİNCE log'a yazıyordu; koşu 13B
    # 1440. dakikada zaman aşımıyla öldürülünce 24 saatlik log'un TAMAMI
    # kayboldu ("hangi aşamada kaldı" cevapsız). Şimdi her satır geldiği an
    # log'a eklenir (flush'lı); ekrana yine son 25 satır basılır.
    # Zaman aşımında SÜREÇ AĞACI öldürülür (motorun işçi süreçleri dahil).
    import threading, collections
    son = collections.deque(maxlen=25)
    env = dict(os.environ, PYTHONUNBUFFERED="1")
    p = subprocess.Popen(argv, cwd=KOK, stdin=subprocess.DEVNULL,
                         stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                         text=True, encoding="utf-8", errors="replace", env=env)

    def _akit():
        with io.open(LOG, "a", encoding="utf-8") as f:
            for satir in p.stdout:
                f.write(satir)
                f.flush()
                son.append(satir.rstrip("\n"))
                if tum is not None:
                    tum.append(satir.rstrip("\n"))
    okuyucu = threading.Thread(target=_akit, daemon=True)
    okuyucu.start()
    try:
        p.wait(timeout=dk * 60)
    except subprocess.TimeoutExpired:
        try:
            subprocess.run(["taskkill", "/PID", str(p.pid), "/T", "/F"],
                           capture_output=True, timeout=60)
        except Exception:
            p.kill()
        okuyucu.join(timeout=30)
        yaz("🔴 ZAMAN AŞIMI (%d dk) — ZİNCİR DURDU (son satırlar yukarıda, log'da TAM)" % dk)
        for s in son:
            print("   " + s, flush=True)
        return None
    okuyucu.join(timeout=60)
    sure = (time.time() - t0) / 60.0
    for s in son:
        print("   " + s, flush=True)

    class r:                     # eski `subprocess.run` sonucunun kullanılan alanı
        returncode = p.returncode
    yaz("→ kod=%d · %.1f dk" % (r.returncode, sure))
    if r.returncode != 0 and olumcul:
        yaz("🔴 BU ADIM İHLAL VERDİ — ZİNCİR DURDU, YAYIN YAPILMADI.")
        yaz("   Bu bir kusur değil bir KAPI: yanlış yayın, yayınlanmamış")
        yaz("   düzeltmeden kat kat pahalıdır.")
        return None
    return r.returncode


def _bos_bellek_gb():
    """Boş fiziksel bellek (GB) — Windows GlobalMemoryStatusEx; ölçülemezse None."""
    try:
        import ctypes

        class _MS(ctypes.Structure):
            _fields_ = [("dwLength", ctypes.c_ulong), ("dwMemoryLoad", ctypes.c_ulong),
                        ("ullTotalPhys", ctypes.c_ulonglong), ("ullAvailPhys", ctypes.c_ulonglong),
                        ("ullTotalPageFile", ctypes.c_ulonglong), ("ullAvailPageFile", ctypes.c_ulonglong),
                        ("ullTotalVirtual", ctypes.c_ulonglong), ("ullAvailVirtual", ctypes.c_ulonglong),
                        ("ullAvailExtendedVirtual", ctypes.c_ulonglong)]
        m = _MS()
        m.dwLength = ctypes.sizeof(_MS)
        ctypes.windll.kernel32.GlobalMemoryStatusEx(ctypes.byref(m))
        return m.ullAvailPhys / 1024.0 ** 3
    except Exception:
        return None


# ⚙️ MOTOR ORTAMI — M-4537 (19 Eylül 2026). Elle verilmişse DOKUNULMAZ.
#   MOTOR_ONBELLEK_DIZIN : koşular ARASI önbellek (artımlı motor). Koşu
#       worktree'leri (C:/atlas-kosuNN) aynı önbelleği paylaşsın diye SABİT bir
#       yol: <sistem sürücüsü>/atlas-onbellek. OneDrive altına KONMAZ (büyük
#       sqlite dosyası eşitlemeye girer).
#   MOTOR_SUREC_ISCI     : gövde aşamasının süreç sayısı. Her süreç ana süreç
#       kadar bellek ister (yürüyüş açıkken ~3-3,5 GB) ⇒ boş belleğe göre
#       1..3. Ölçülemezse 1 (eski davranış).
SUREC_BASINA_GB = 3.5


def _motor_ortami():
    if not os.environ.get("MOTOR_ONBELLEK_DIZIN"):
        os.environ["MOTOR_ONBELLEK_DIZIN"] = os.path.join(
            os.environ.get("SystemDrive", "C:") + os.sep, "atlas-onbellek")
    if not os.environ.get("MOTOR_SUREC_ISCI"):
        bos = _bos_bellek_gb()
        n = 1 if bos is None else max(1, min(3, int(bos // SUREC_BASINA_GB)))
        os.environ["MOTOR_SUREC_ISCI"] = str(n)
        yaz("⚙️ MOTOR_SUREC_ISCI=%d (boş bellek %s GB, süreç başına %.1f GB)"
            % (n, "?" if bos is None else "%.1f" % bos, SUREC_BASINA_GB))
    yaz("⚙️ MOTOR_ONBELLEK_DIZIN=%s" % os.environ["MOTOR_ONBELLEK_DIZIN"])


def beep(n=9):
    ps = ("1..%d | ForEach-Object { [Console]::Beep(880,250); "
          "Start-Sleep -Milliseconds 120 }" % n)
    try:
        subprocess.run(["powershell", "-NoProfile", "-Command", ps],
                       capture_output=True, timeout=60)
    except Exception:
        pass


KILIT = os.path.join(KOK, ".zincir.kilit")


def _pid_canli(pid):
    """PID canlı mı? True / False / None (ÖLÇÜLEMEDİ — 'ölü' DEĞİL).

    Önce psutil; yoksa Windows'ta `tasklist /FI "PID eq N"` (CSV'nin PID
    alanı TAM eşitlikle okunur — yerelleştirilmiş "BİLGİ: …" satırı
    eşleşmez). Yalnız OKUR; hiçbir süreç öldürülmez.
    """
    if not isinstance(pid, int) or pid <= 0:
        return None
    try:
        import psutil
    except ImportError:
        psutil = None
    if psutil is not None:
        try:
            return bool(psutil.pid_exists(pid))
        except Exception:
            return None
    try:
        if os.name == "nt":
            r = subprocess.run(["tasklist", "/FI", "PID eq %d" % pid,
                                "/NH", "/FO", "CSV"],
                               capture_output=True, text=True, timeout=30,
                               errors="replace")
            if r.returncode != 0:
                return None
            for satir in (r.stdout or "").splitlines():
                alan = [x.strip('"') for x in satir.strip().split('","')]
                if len(alan) >= 2 and alan[1] == str(pid):
                    return True
            return False
        os.kill(pid, 0)
        return True
    except ProcessLookupError:
        return False
    except PermissionError:
        return True
    except Exception:
        return None


def _makine():
    import platform
    return os.environ.get("COMPUTERNAME") or platform.node() or "?"


def _kilit_oku():
    """Kilit damgası → (pid, alanlar, ham). Ayrıştırılamazsa pid None."""
    try:
        ham = io.open(KILIT, encoding="utf-8").read().strip()
    except Exception:
        return None, {}, ""
    alan = {}
    for parca in ham.split("|"):
        k, ayr, v = parca.strip().partition("=")
        if ayr:
            alan[k.strip()] = v.strip()
    try:
        pid = int(alan.get("pid", ""))
    except ValueError:
        pid = None
    return pid, alan, ham


def _kilit_yaz():
    """O_EXCL ile yaz: iki zincir aynı anda boş kilidi göremez."""
    fd = os.open(KILIT, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
    with io.open(fd, "w", encoding="utf-8") as f:
        f.write("pid=%d | bas=%s | makine=%s | argv=%s"
                % (os.getpid(), time.strftime("%Y-%m-%d %H:%M:%S"), _makine(),
                   " ".join(sys.argv[1:])))


def _kilit_al():
    """🔴 ÇİFT KOŞU KİLİDİ — Emre 'ŞİMDİ BAŞLAT' düğmesi istedi (12 Ağu).

    Elle başlatma + 22:00 zamanlayıcısı + 23:50 emniyet ağı = aynı anda üç
    tetikleyici. İki üretim aynı anda koşarsa `data/` yarı yazılmış hâlde
    okunur ve çıktı SESSİZCE bozulur — bu proje dört üretimi böyle kaybetti.

    🔴 SÜREÇ DAMGASI, yaş DEĞİL (KOSU-YAYIN-KAPI-1010 · `CLAUDE.md §7`:
    "çakışmada beyana değil süreç damgasına bak"). Eski `yas < 240` vekili,
    tam inşa 7-8 saat sürerken CANLI zincirin kilidini 4. saatte
    devralıyordu. Dönüş: "alindi" · "mesgul" (canlı PID) · "olculemedi".
    """
    if os.path.exists(KILIT):
        pid, alan, ham = _kilit_oku()
        try:
            yas = "%.0f dk" % ((time.time() - os.path.getmtime(KILIT)) / 60.0)
        except Exception:
            yas = "?"
        makine = alan.get("makine")
        if pid is None:
            canli, neden = None, "damga BOZUK ya da eski biçim (pid= yok)"
        elif makine and makine != _makine():
            canli, neden = None, "damga BAŞKA MAKİNENİN (%s)" % makine
        else:
            canli = _pid_canli(pid)
            neden = "PID %d canlılığı ölçülemedi" % pid
        if canli is True:
            yaz("🔴 ZATEN BİR ZİNCİR KOŞUYOR — PID %d CANLI (bilgi: kilit yaşı %s)"
                % (pid, yas))
            yaz("   Kayıt: %s" % ham)
            yaz("   İkinci koşu BAŞLATILMADI. İki üretim aynı anda koşarsa")
            yaz("   data/ yarı yazılmış okunur ve çıktı SESSİZCE bozulur.")
            return "mesgul"
        if canli is None:
            yaz("🔴 KİLİT VAR ve ÖLÇÜLEMEDİ — %s (bilgi: kilit yaşı %s)"
                % (neden, yas))
            yaz("   Kayıt: %r" % ham)
            yaz("   'Ölçülemedi' ÖLÜ demek DEĞİLDİR — koşu BAŞLATILMADI.")
            yaz("   Elle doğrula; sahibi gerçekten yoksa: %s dosyasını sil." % KILIT)
            return "olculemedi"
        yaz("⚠️ Kilit vardı ama PID %d ÖLÜ — devralıyorum (bilgi: kilit yaşı %s)"
            % (pid, yas))
        yaz("   Eski kayıt: %s" % ham)
        try:
            os.remove(KILIT)
        except FileNotFoundError:
            pass
        except Exception as e:
            yaz("🔴 Ölü kilit silinemedi (%s) — koşu BAŞLATILMADI." % e)
            return "olculemedi"
    try:
        _kilit_yaz()
    except FileExistsError:
        yaz("🔴 Kilidi aynı anda başka bir zincir aldı — koşu BAŞLATILMADI.")
        return "mesgul"
    return "alindi"


def _kilit_birak():
    """Yalnız KENDİ damgamızı siler — başkasının kilidine dokunmaz."""
    pid, _alan, _ham = _kilit_oku()
    if pid != os.getpid():
        return
    try:
        os.remove(KILIT)
    except Exception:
        pass


def _kapi_hukmu(ad, kod, satirlar):
    """Kapı adımının çıkış kodunu üç hâlde okur. True yalnız 0'da.

    kod None = zaman aşımı (kos() öyle döndürür).
    """
    if kod == 0:
        return True
    if kod is None:
        yaz("🔴 %s ZAMAN AŞIMI — ZİNCİR DURDU, YAYIN YAPILMADI." % ad)
    elif kod == 1:
        yaz("🔴 %s çıkış 1 — İHLAL VAR. ZİNCİR DURDU, YAYIN YAPILMADI." % ad)
    elif kod == 2:
        yaz("🔴 %s çıkış 2 — ÖLÇÜLEMEDİ (temiz DEĞİL). ZİNCİR DURDU, "
            "YAYIN YAPILMADI." % ad)
        kova, icinde = [], False
        for l in satirlar:
            if "ÖLÇÜLEMEYEN SORU" in l:
                icinde = True
            elif icinde and l.strip().startswith("SONUÇ"):
                break
            if icinde:
                kova.append(l)
        for l in kova or ["(ölçülemeyen soru listesi çıktıda BULUNAMADI — "
                          "tam çıktı: %s)" % LOG]:
            yaz("   │ " + l)
    else:
        yaz("🔴 %s çıkış %d — tanınmayan kod (çökme?). ZİNCİR DURDU, "
            "YAYIN YAPILMADI." % (ad, kod))
    return False


def zincir(yayinla=True, uretimsiz=False):
    durum = _kilit_al()
    if durum == "mesgul":
        return 3
    if durum != "alindi":
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
        # 🔴🔴 ZAMAN AŞIMI 200 → 1440 dk (24 saat), 5 Eylül 2026.
        # SEBEBİ ÖLÇÜLMÜŞ BİR KAYIPTIR: koşu 5 bu satır yüzünden ÖLDÜ.
        #     21:26:47 başladı · ~00:47'de zincir "ZAMAN AŞIMI (200 dk)"
        #     deyip ÜRETİMİ KESTİ · 3 saat 20 dakika boşa gitti
        # Ve tahmin ("~75 dk") çok daha eski bir dünyadan: koşu 4b
        # **16 saat 09 dakika** sürdü (09-04 00:48:18 → 16:57:36, ölçüldü).
        # 200 dakikalık bir tavan o koşuyu ASLA bitiremezdi.
        #
        # 📌 Ve bu, aynı gece düzeltilen `kos_ve_yayinla._kilit_al`ın
        # `yas < 240` kusurunun BİREBİR AYNISI: eski, küçük dünyadan kalma
        # bir SÜRE TAHMİNİ. Kilit düzeltildi, bu tavana BAKILMADI.
        # ⇒ Bir zaman sabiti düzeltilirken, aynı dosyadaki ÖTEKİ zaman
        #   sabitleri de ölçülür. Biri bayatladıysa ötekiler de bayattır.
        #
        # ⚠️ 1440 bir TAHMİN DEĞİL bir TAVAN: %49 pay bırakıldı. Koşu bundan
        #   uzun sürerse kesilmesi DOĞRUDUR — ama 200 dakikada kesilmesi
        #   bir kusurdu.
        #
        # 🔴 VE BAŞLIKTAKİ SÜRE, GİRDİ BÜYÜKLÜĞÜYLE BİRLİKTE YAZILIR.
        # 7 Eylül 2026'da `SINAV-KOSU8-0907` bunu bayat buldu: başlık
        # "16s09dk" diyordu, ölçülen en uzun koşu (7B) **16s49dk**ydı —
        # ve o rakam ~2731 petekli bir tabandan geliyordu; koşu 8 **3805**
        # petekle koşuyor. Voronoi ve kesişim maliyeti nokta sayısıyla
        # doğrusaldan kötü ölçekler ⇒ DAHA UZUN BİR KOŞU BEKLENEN
        # DAVRANIŞTIR, bir arıza işareti DEĞİL.
        # ⇒ `§11`: bir süre kaydının yanına GİRDİ BÜYÜKLÜĞÜ yazılmazsa,
        #   o kayıt bir sonraki koşuda YANLIŞ ALARM üretir. Ve "tahmini
        #   aştı" ile "takıldı" AYRI hükümlerdir: ikincisi CPU deltasıyla
        #   ayrıca ölçülür.
        _motor_ortami()
        if kos("üretim (uret_petek.py) — ölçülen en uzun koşu 16s49dk "
               "(koşu 7B, ~2731 petek; bu koşunun tabanı FARKLIYSA süre de farklıdır)",
               [sys.executable, "arac/uret_petek.py"],
               dk=int(os.environ.get("KOSU_ZAMAN_DK", "1440"))) is None:
        # KOSU_ZAMAN_DK: yürüyüşlü koşu 24 saate sığmadı (13B, 18 Eyl 2026) —
        # tavan koşu başına ortamdan verilir; varsayılan 1440 değişmedi.
            return 1
        if kos("devirler (uret_devirler.py)",
               [sys.executable, "arac/uret_devirler.py"], dk=40) is None:
            return 1
        # 🔴 4 Eylül 2026 — ZİNCİRE İKİ ÜRETEÇ EKLENDİ, ve sebebi ÖLÇÜLMÜŞ
        # BİR YAYIN REDDİDİR. Zincir yalnız `uret_devirler`i koşuyordu; oysa
        # `denetle_yayin` YEDİ üretilmiş çıktının izini denetliyor ve ikisi
        # daha koşudan SONRA tazelenmek zorunda:
        #     data/altlik.js       ← veri-kaynak/motor_kara.geojson (koşu YAZAR)
        #                            ve arac/uret_petek.py (bugün DEĞİŞTİ)
        #     data/bekleyenler.js  ← BEKLEYENLER.md
        # ⇒ 4 Eylül sabahı koşu 4b temiz bitti, kapı "taze 4 · BAYAT 3" deyip
        #   REDDETTİ ve üç üreteç ELLE koşuldu. Kapı doğru davrandı; eksik
        #   olan ZİNCİRDİ.
        # ⚠️ Ölümcül DEĞİL: bunlar yayının ÖN KOŞULU ama üretimin sonucu
        #   değil — biri patlarsa kapı zaten durduracak ve sebebi ADIYLA
        #   söyleyecek. Burada zinciri öldürmek, teşhisi gizlerdi.
        kos("altlık (uret_altlik.py)",
            [sys.executable, "arac/uret_altlik.py"], olumcul=False, dk=40)
        kos("bekleyenler (uret_bekleyenler.py)",
            [sys.executable, "arac/uret_bekleyenler.py"], olumcul=False, dk=10)
    # 🔴 renk ölçümü: CLAUDE.md §9 — veriye dokunan her koşudan sonra ŞART.
    #    Ölümcül DEĞİL: uyarı üretir, yayını kesmez (eşik ≠ tercih ayrımı).
    kos("renk ölçümü (renk_olc.py)", [sys.executable, "arac/renk_olc.py"],
        olumcul=False, dk=40)
    _tum = []
    if not _kapi_hukmu("ALTI DEĞİŞMEZ (denetle.py)",
                       kos("ALTI DEĞİŞMEZ (denetle.py)",
                           [sys.executable, "arac/denetle.py"],
                           olumcul=False, dk=40, tum=_tum), _tum):
        return 1
    # 🔴🔴 SÜRÜM DAMGASI KAPIDAN **ÖNCE** — 7 Eylül 2026'da ölçüldü, ve bu
    # bir sıra kusuruydu: damga adımı kapıdan 20 SATIR SONRA duruyordu.
    #   kapının `damga_ihlali` şartı → "COMMIT ETMEDEN ÖNCE: surum_damgala.py"
    #   zincir → o adımı kapıdan SONRAYA koymuş
    #   ⇒ kapı `return 1` verince damga adımına HİÇ SIRA GELMİYOR:
    #     KAPI, BİR SONRAKİ ADIMIN ÇÖZECEĞİ ŞEYE TAKILIYOR.
    # `§11`in *"kusur ne tavandaydı ne yetim-yüz mantığında — İKİSİNİN
    # ARASINDAYDI"* ailesi: iki adım da tek başına doğru, kusur SIRADA.
    #
    # 🟢 İKİ UCU DA ÖLÇÜLDÜ (`§3.5.1`) — `SINAV-KOSU8-0907`, 11 şartın 11'i:
    #   damgalar>1  ETKİLENMEZ (`re.subn` HEPSİNİ tek `SURUM`e yazar; ölçüldü:
    #               index.html'de 179 damga, 179'u da aynı değer ⇒ küme 1 kalır)
    #   _sz         ETKİLENMEZ (yalnız `src=`/`href=` NİTELİĞİ; <script> gövdesi
    #               hiç okunmuyor)
    #   yoklar · izlenmeyenler · kayitsiz  ETKİLENMEZ (etiket eklenmiyor/silinmiyor)
    #   bayat · iz_bayat · izsiz · _bagli · _dizinsiz  ETKİLENMEZ (veri sha256'sı)
    #   ⇒ yeni bir ötüş üretmesi için YOL YOK.
    # ⚠️ Ve bu bir KAPI GEVŞETMESİ DEĞİLDİR: hiçbir şart muaf tutulmuyor,
    #   yalnız kapının KENDİ REÇETESİ kapıdan önce uygulanıyor.
    #
    # 🔒 `if yayinla` KORUMASI ŞART: `surum_damgala.py` `index.html`i YAZAR.
    #   Korumasız öne alınsaydı `--yayinlama` (kuru) koşusu da dosyayı
    #   değiştirirdi — bir ölçüm koşusunun depoyu kirletmesi yasak.
    if yayinla and kos("sürüm damgası", [sys.executable, "arac/surum_damgala.py"],
                       dk=10) is None:
        return 1
    _tum = []
    if not _kapi_hukmu("YAYIN KAPISI (denetle_yayin.py)",
                       kos("YAYIN KAPISI (denetle_yayin.py)",
                           [sys.executable, "arac/denetle_yayin.py"],
                           olumcul=False, dk=40, tum=_tum), _tum):
        return 1
    # 🔴 ADRES NÖBETÇİSİ — 13 Ağustos 2026, BEŞ KEZ tekrarlanan bir hatadan sonra.
    # Şartnameye oturum kimliği yazılması: bayat/yanlış adres ⇒ işçilerin raporu
    # hiçbir yere ulaşmaz ⇒ çalışan oturumlar "ölü" sanılır. Sebebi YAPISAL:
    # `list_sessions` mevcut oturumu hariç tuttuğu için koordinatör kendi
    # kimliğini GÖREMEZ, yazdığı her adres bir TAHMİNDİR.
    # ⚠️ ÖLÜMCÜL DEĞİL — kirli bir şartname YAYINI bozmaz, EKİBİ bozar. Yayını
    # durdurmak burada orantısız olurdu; ama SESSİZ de geçilmez, çünkü bu
    # projenin dersi tam bu: "koşturulmayan bir nöbetçi, olmayan nöbetçiden
    # ayırt edilemez." Zincire bağlanmasının sebebi UNUTULMAMASI.
    kos("adres nöbetçisi (adres_nobetci.py)",
        [sys.executable, "arac/adres_nobetci.py"], olumcul=False, dk=5)

    # 🔴 YAYIN LİSTESİ — `git add -A -- data` YERİNE (KOS-VE-YAYINLA-ADD-1010).
    #    Eski satır data/ altındaki HER ŞEYİ alıyordu: başka oturumların yarım
    #    dosyaları ve izlenmeyen dosyalar dahil — `CLAUDE.md §7`: "`git add -A`
    #    YASAK", burada bir ARAÇ yapıyordu. Ve `git commit -F` pathspec'siz
    #    olduğu için İNDEKSTE başkasının hazırladığı her şeyi de taşıyordu.
    #    Artık: liste `arac/yayin_listesi.py`den TÜRETİLİR (kural orada),
    #    add ve commit AYNI pathspec'le ADIYLA, commit `git show --name-only`
    #    ile GERİ OKUNUR. Listede olmayan kirli/izlenmeyen data/ dosyası
    #    ADIYLA basılır ve commite GİRMEZ.
    L = yayin_listesi.turet(KOK)
    yaz("\n" + "=" * 66)
    yaz("ADIM: yayın listesi (arac/yayin_listesi.py)")
    yaz("=" * 66)
    for s in L["satirlar"]:
        yaz("   " + s)
    for s in _liste_disi_kirli(L["liste"]):
        yaz("   · listede DEĞİL, commite GİRMEZ: %s" % s)

    if not yayinla:
        yaz("\n🟡 --yayinlama verildi: damga/commit/push ATLANDI.")
        beep(9)
        return 0

    # (sürüm damgası YUKARI TAŞINDI — kapıdan önce; gerekçesi orada.)

    if L["dur"] or L["olculemedi"]:
        yaz("🔴 YAYIN LİSTESİ %s — commit ve push YAPILMADI."
            % ("DURDURUCU VERDİ" if L["dur"] else "ÖLÇÜLEMEDİ"))
        return 1

    # --- commit: mesaj ÖNCEDEN dosyaya yazılmış olmalı (§11) ----------
    if not os.path.exists(MESAJ):
        yaz("🔴 COMMIT MESAJI YOK: %s" % MESAJ)
        yaz("   Zincir kurulurken yazılmalıydı. Yayın YAPILMADI.")
        return 1
    liste = L["liste"]
    if kos("git add (liste, ADIYLA)", ["git", "add", "--"] + liste, dk=10) is None:
        return 1
    if kos("git commit (aynı pathspec)", ["git", "commit", "-F", MESAJ, "--"] + liste,
           dk=10) is None:
        return 1
    tasinan = _commit_dosyalari()
    fazla = sorted(set(tasinan) - set(liste)) if tasinan is not None else None
    if fazla is None:
        yaz("🔴 commit GERİ OKUNAMADI (git show) — push YAPILMADI.")
        return 1
    if fazla:
        yaz("🔴 commit LİSTE DIŞI dosya taşıyor: %s — push YAPILMADI." % " ".join(fazla))
        return 1
    yaz("✓ commit geri okundu: %d dosya, hepsi listede: %s"
        % (len(tasinan), " ".join(tasinan)))
    kos("git pull --rebase", ["git", "pull", "--rebase"], olumcul=False, dk=10)
    if kos("git push", ["git", "push"], dk=10) is None:
        return 1

    yaz("\n🟢 ZİNCİR TAMAM — yayınlandı. %s" % time.strftime("%H:%M:%S"))
    yaz("   GitHub Pages'in sunması ~40-60 sn sürer.")
    beep(9)
    return 0


def _liste_disi_kirli(liste):
    """data/ altında değişmiş ya da izlenmeyen, LİSTEDE OLMAYAN dosyalar (salt okur)."""
    r = subprocess.run(["git", "-C", KOK, "status", "--porcelain=v1",
                        "--untracked-files=all", "--", "data"],
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode != 0:
        return ["(git status ÖLÇÜLEMEDİ: %s)" % (r.stderr or "").strip()[:100]]
    sec = set(liste)
    cikti = []
    for satir in (r.stdout or "").splitlines():
        durum, yol = satir[:2], satir[3:].strip().strip('"')
        if " -> " in yol:
            yol = yol.split(" -> ")[-1]
        if yol not in sec:
            cikti.append("%s (%s)" % (yol, "izlenmiyor" if durum == "??" else "değişmiş " + durum.strip()))
    return cikti


def _commit_dosyalari():
    """Son commit'in taşıdığı dosyalar; okunamazsa None."""
    r = subprocess.run(["git", "-C", KOK, "show", "--name-only", "--format=", "HEAD"],
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode != 0:
        return None
    return [l.strip() for l in (r.stdout or "").splitlines() if l.strip()]


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
        # 🔴 BU SATIRLAR 7 Eylül 2026'da İKİ YERDEN BAYAT ÇIKTI ve `--kuru`
        # bir ÖLÇÜM ARACIDIR — yanlış sıra basan bir ölçüm aracı, merge
        # gecesi ona bakan oturumu yanıltır:
        #   ① ÜÇ ADIM EKSİKTİ  uret_altlik · uret_bekleyenler · adres_nobetci
        #   ② SIRA TERSTİ      damga, kapıdan SONRA gösteriliyordu; oysa
        #                      `2f1bc20` ile kapıdan ÖNCEye alındı (:245/:248)
        # ⚠️ Ve ② tek başına sinsi: yanlış bir SIRA kendi içinde tutarlıdır —
        #   damganın kapıdan önce mi sonra mı geldiği, çıktıya bakarak
        #   ANLAŞILMAZ. `§11`: *"sıra bildiren her alet, sırayı NEREDEN
        #   aldığını taşımalı."*
        # ⇒ Kaynak: bu dosyanın kendi `kos()` çağrıları, satır sırasıyla —
        #   :191 :195 :211 :213 :217 :219 :245 :248 :260. Bir adım
        #   eklenir/taşınırsa BU LİSTE DE GÜNCELLENİR.
        # 🔜 BORÇ: liste elle yazılı olduğu için yine bayatlayabilir; doğrusu
        #   `kos()` çağrılarından ÜRETMEK (`ast`, `lineno` sıralı). Bu gece
        #   yapılmadı: bu dosyaya bugün zaten bir sıra değişikliği indi ve
        #   aynı geceye ikinci bir DAVRANIŞ değişikliği yığmak, yarın bir şey
        #   bozulursa hangisinin bozduğunu ayırt edilemez kılar. Bu edit
        #   yalnız BASILAN METİN — denetim akışına dokunmuyor.
        print("PLAN: uret_petek → uret_devirler → uret_altlik →")
        print("      uret_bekleyenler → renk_olc → denetle → surum_damgala →")
        print("      denetle_yayin → adres_nobetci → yayın listesi →")
        print("      commit (yalnız liste, pathspec) → geri okuma → push → 9 bip")
        print("      (surum_damgala YALNIZ yayın koşusunda; --yayinlama ile")
        print("       ATLANIR ⇒ kuru koşuda `damga_ihlali` HÂLÂ ötebilir)")
        print("commit mesajı: %s  (%s)"
              % (MESAJ, "VAR" if os.path.exists(MESAJ) else "🔴 YOK"))
        return 0
    return zincir(yayinla="--yayinlama" not in argv,
                  uretimsiz="--uretimsiz" in argv)


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

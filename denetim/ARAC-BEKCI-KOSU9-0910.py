# -*- coding: utf-8 -*-
"""KOSU 9 NOBETCISI — 8C'nin devami, IKI EKLEMEYLE.

8C'den DEGISMEYENLER (hepsi olculmus gerekcelerle, dokunulmadi):
   · tetik GERCEK BIR OLAY: `data/donemler.js` — motor onu kosunun SONUNDA
     yazar. `veri-kaynak/motor_kara.geojson` TETIK DEGILDIR (kosunun 70.
     dakikasinda yazilir, ~16 saat ERKEN oterdi).
   · "mtime degisti" != "yazim bitti": boyut IKI ARDISIK kontrolde sabit
     kalmadan bitmis SAYILMAZ (~31 MB dosya).
   · UC DURUM: VAR / YOK / OLCULEMEDI — ve "OLCULEMEDI" bip BASMAZ ama
     SESSIZ de gecilmez (`§11`: olculemedi != yok).
   · OMUR, izlenen isin bilinen azamisinden UZUN. 8B bunu ihlal etti ve
     kosu 4,5 saat NOBETCISIZ kaldi.

## 🆕 EKLEME 1 — PID ELLE YAZILMAZ, ARANIR
8C'de `PID = 10780` sabitti. Bir sonraki kosuda o sayi BASKA BIR SUREC
olabilir ya da hic olmayabilir; ikisinde de nobetci yanlis seyi izler ve
bunu SOYLEMEZ. Burada PID komut satirindan bulunur (`kos_ve_yayinla` ya
da `uret_petek`), ve BULUNAMAZSA nobetci BASLAMAZ.
📌 `D131`in kardesi: elle yazilan bir tanimlayici, bir sonraki kosuda
   sessizce yanlis hedefi gosterir.

## 🆕 EKLEME 2 — BELLEK BIR ALARM, YALNIZ BIR SATIR DEGIL
🔴 NICIN: `CAPRAZ PARALEL` 10 Eylul 2026'da olctu — paralel FAZ 1'in ilk
   yaziminda `list(_ex.map(...))` butun ham geometriyi AYNI ANDA tutuyordu
   ve `rusya` (asamanin %22,2'si) 80/579. sirada dogup kalan %86 boyunca
   bellekte duruyordu. Bu makinede bos RAM 1,1 GB.
   ⇒ Kusur CIKTIYI BOZMAZ — KOSUYU OLDURUR, ve hicbir bit-denkligi
     sinavi onu goremez. Care uygulandi (uretec dogrudan dolasiliyor),
     AMA TAM GIRDIDE ILK KEZ KOSUYOR.
   ⇒ Nobetci bellegi yalnizca RAPORLAMAZ: esigi asarsa OTER. Sabaha
     "bellek yuzunden oldu" diye bakmak yerine, tirmanirken haber verir.
⚠️ Esik bir TAHMIN ve oyle DAMGALANIYOR (`D107`): kosu 8'in tepe bellegi
   OLCULMEDI. 4,0 GB bir ILK ALARM, bir hukum degil — asilmasi "oldu"
   demek degil "bak" demektir. Ilk kosudan sonra GERCEK degerle degistir.

CIKTI: denetim/BEKCI-KOSU9.out — ASCII, cp1254 konsolunda olmez.
KOSUM:  py denetim/ARAC-BEKCI-KOSU9-0910.py
"""
import io, os, subprocess, sys, time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 🔴 TETIK VE SUREC DESENI SINAV ICIN DEGISTIRILEBILIR — ve bu bir kolaylik
#    DEGIL, bir ZORUNLULUK. Nobetcinin UC yolu ucuz sinanir (kosu yok / kosu
#    var / surec oldu), ama DORDUNCUSU — "KOSU BITTI, 9 BIP" — gercek tetigi
#    (`data/donemler.js`) yazmadan sinanamaz, ve o dosyaya dokunmak yayin
#    kapisinin uretim izini bozar.
#    ⇒ Sinanmayan yol, en cok guvendigimiz yoldur: o yol bozuksa kosu biter
#      ve KIMSE HABERDAR OLMAZ (`§10`: sessizlik "iyi gidiyor" diye okunur).
#    Bu yuzden tetik ve desen ortam degiskeniyle saptirilabilir; VARSAYILAN
#    her zaman GERCEK olandir, yani unutmak sinavi degil YALNIZ sinavi bozar.
TETIK = os.environ.get("BEKCI_TETIK") or os.path.join(KOK, "data", "donemler.js")
DESEN = os.environ.get("BEKCI_DESEN") or "kos_ve_yayinla|uret_petek"
ASGARI = int(os.environ.get("BEKCI_ASGARI") or 1048576)   # tetigin asgari boyutu
LOG = os.path.join(KOK, "denetim", "BEKCI-KOSU9.out")

YOKLAMA = 120           # saniye
CANLILIK = 3600         # saatlik canlilik raporu (`§7` kurali)
OMUR = 30 * 3600        # 30 saat — kosu 8 (20s05dk) azamisinin USTUNDE
BELLEK_ALARM = 4.0      # GB · TAHMIN, olcum DEGIL (bkz. ust yazi)


def yaz(s):
    satir = "[%s] %s" % (time.strftime("%H:%M:%S"), s)
    with io.open(LOG, "a", encoding="utf-8") as f:
        f.write(satir + "\n")
    try:
        print(satir, flush=True)
    except Exception:
        print(satir.encode("ascii", "replace").decode("ascii"), flush=True)


def bip(n, frek, sure):
    for _ in range(n):
        subprocess.call(["powershell", "-NoProfile", "-c",
                         "[Console]::Beep(%d,%d)" % (frek, sure)])
        time.sleep(0.12)


def pid_bul():
    """Kosan motoru KOMUT SATIRINDAN bul. Bulamazsa None — TAHMIN ETME."""
    try:
        c = subprocess.check_output(
            ["powershell", "-NoProfile", "-c",
             "Get-CimInstance Win32_Process -Filter \"Name='python.exe'\" | "
             "Where-Object { $_.CommandLine -match '%s' } | "
             "ForEach-Object { $_.ProcessId }" % DESEN],
            stderr=subprocess.DEVNULL).decode("ascii", "replace").strip()
    except Exception:
        return None
    kayitlar = [s.strip() for s in c.splitlines() if s.strip().isdigit()]
    if len(kayitlar) != 1:
        # 0 → kosu yok · 2+ → hangisi? Ikisinde de TAHMIN ETMEK yanlis hedefe
        # nobet tutmaktir, ve nobetci bunu SOYLEMEZ.
        return None
    return int(kayitlar[0])


def surec_bilgi(pid):
    """(durum, cpu_ya_da_sebep, bellek) — UC DURUM: VAR / YOK / OLCULEMEDI.

    🔴 BU FONKSIYON 8C'DEN KOPYALANDI VE ORADA BOZUKTU — 10 Eylul 2026'da
       SINANARAK bulundu (sahte bir motor sureci oldurulup gozlendi):
    ```
       beklenen  🔴 SUREC YOK ve tetik YAZILMADI — kosu COKMUS   (bip 3, cikis 2)
       gercek    ⚠️ OLCULEMEDI (1. kez) — komut patladi: ... exit status 1
    ```
       SEBEP: `Get-Process -Id N -ErrorAction SilentlyContinue` surec YOKKEN
       CIKTIYI susturur ama POWERSHELL'IN CIKIS KODUNU 1 yapar. `check_output`
       sifir olmayan cikista ISTISNA atar ⇒ "YOK" dali HIC CALISMAZ.
    🔴 VE BEDELI TAM OLARAK 8C'NIN KENDI UST YAZISINDA YAZILIYDI:
       *"gercek bir cokme 'olculemedi' sanilip SESSIZ GECILEBILIRDI"*.
       Gerceklesen tam bu: cokme 5 yoklama (10 dakika) boyunca "olculemedi"
       diye birikip sonunda YANLIS TESHISLE ("nobetci KOR", cikis 4) cikardi.
       ⇒ Koordinator sabah "nobetci kor kalmis" der, "kosu cokmus" DEMEZ.
    📌 Ders yaziliydi, KOD onu uygulamiyordu. `D039`: bir kuralin yazili
       olmasi uygulandigi anlamina gelmez — ve burada kurali yazan ile
       ihlal eden AYNI DOSYAYDI.
    🟢 CARE IKI KATLI:
       ① PowerShell HER ZAMAN 0 ile ciksin ve hukmu KENDISI bassin
         (`else {'YOK'}` + `exit 0`) — yokluk artik BIR CEVAP, bir hata degil.
       ② Python cikis koduna DEGIL, BASILAN HUKME baksin (`run`, `check_output`
         degil) — yani "istisna atmadi" ile "surec var" birbirine karismasin.
    """
    try:
        p = subprocess.run(
            ["powershell", "-NoProfile", "-NonInteractive", "-c",
             "$p=Get-Process -Id %d -ErrorAction SilentlyContinue;"
             "if($p){'VAR|{0}|{1}' -f $p.CPU,$p.WorkingSet64}else{'YOK'};"
             "exit 0" % pid],
            capture_output=True, stdin=subprocess.DEVNULL)
        c = (p.stdout or b"").decode("ascii", "replace").strip()
    except Exception as e:
        return "OLCULEMEDI", "komut patladi: %s" % e, None
    if c == "YOK":
        return "YOK", None, None
    if not c.startswith("VAR|") or c.count("|") != 2:
        # Bos cikti da BURAYA duser — ve bu DOGRU: "hicbir sey basmadi"
        # artik "surec yok" DEMEK DEGIL, "olcemedim" demek.
        return "OLCULEMEDI", "beklenmedik cikti: %r" % c[:60], None
    _, a, b = c.split("|")
    try:
        # Turkce yerel: ondalik VIRGUL. Binlik NOKTA atilir, virgul noktaya doner.
        return "VAR", float(a.strip().replace(".", "").replace(",", ".")), int(b)
    except ValueError:
        return "OLCULEMEDI", "sayi ayristirilamadi: %r" % a[:40], None


def boyut():
    try:
        return os.path.getmtime(TETIK), os.path.getsize(TETIK)
    except OSError:
        return None, None


PID = pid_bul()
if PID is None:
    yaz("🔴 NOBETCI BASLAMADI — kosan motor sureci BULUNAMADI (0 ya da 2+).")
    yaz("   Once kosuyu baslat, sonra nobetciyi kur. TAHMIN EDILEN bir PID,")
    yaz("   yanlis hedefe nobet tutar ve bunu SOYLEMEZ.")
    sys.exit(1)

taban_m, taban_b = boyut()
yaz("=" * 62)
yaz("NOBETCI 9 basladi · PID %d · tetik %s" % (PID, os.path.basename(TETIK)))
yaz("  taban: mtime %s  boyut %s" % (
    time.strftime("%d %b %H:%M", time.localtime(taban_m)) if taban_m else "YOK",
    "%.1f MB" % (taban_b / 1048576.0) if taban_b else "YOK"))
yaz("  omur %d saat · yoklama %d sn · bellek alarmi %.1f GB (TAHMIN)"
    % (OMUR // 3600, YOKLAMA, BELLEK_ALARM))

bas = time.time()
son_canlilik = 0.0
onceki_cpu = None
olculemedi = 0
bellek_tepe = 0
bellek_otuldu = False

while True:
    time.sleep(YOKLAMA)
    gecen = time.time() - bas

    m, b = boyut()
    if taban_m is not None and m is not None and m > taban_m:
        yaz("tetik DEGISTI (%.1f MB) — yazim bitisi dogrulaniyor..."
            % (b / 1048576.0))
        kararli, onceki_b = 0, b
        while kararli < 2:
            time.sleep(30)
            m2, b2 = boyut()
            if b2 == onceki_b and b2 and b2 > ASGARI:
                kararli += 1
            else:
                kararli = 0
                yaz("  hala yaziliyor: %.1f MB" % ((b2 or 0) / 1048576.0))
            onceki_b = b2
        yaz("KOSU 9 BITTI — %s  %.1f MB  (nobet %.1f saat)"
            % (time.strftime("%H:%M:%S", time.localtime(m2)),
               b2 / 1048576.0, gecen / 3600.0))
        yaz("  TEPE BELLEK: %.2f GB  <- KOSU 9'UN ILK OLCUMU, esigi bununla degistir"
            % (bellek_tepe / 1073741824.0))
        yaz("  SIRA: denetle.py -> renk_olc.py -> denetle_yayin.py -> damga -> yayin")
        bip(9, 880, 250)          # `§10`: uzun isin bitisi = 9 bip
        sys.exit(0)

    durum, cpu, bellek = surec_bilgi(PID)

    if durum == "YOK":
        yaz("🔴 SUREC YOK ve tetik YAZILMADI — kosu COKMUS")
        yaz("   tepe bellek: %.2f GB" % (bellek_tepe / 1073741824.0))
        bip(3, 220, 700)
        sys.exit(2)

    if durum == "OLCULEMEDI":
        olculemedi += 1
        yaz("⚠️ OLCULEMEDI (%d. kez) — %s" % (olculemedi, cpu))
        if olculemedi >= 5:
            yaz("🔴 5 KEZ UST USTE OLCULEMEDI — nobetci KOR. Elle bak.")
            bip(3, 330, 500)
            sys.exit(4)
        continue
    olculemedi = 0

    if bellek > bellek_tepe:
        bellek_tepe = bellek

    # 🆕 BELLEK ALARMI — bir kez oter, sonra susar (tekrar tekrar otmek
    #    alarmi uyusturur; `denetle.py`nin "borc etiketi alarmi uyusturur"
    #    notuyla ayni gerekce).
    if not bellek_otuldu and bellek_tepe / 1073741824.0 >= BELLEK_ALARM:
        bellek_otuldu = True
        yaz("🔴 BELLEK ESIGI ASILDI — %.2f GB (esik %.1f GB)"
            % (bellek_tepe / 1073741824.0, BELLEK_ALARM))
        yaz("   Bu bir OLUM DEGIL, bir BAK isareti. CAPRAZ PARALEL'in B2")
        yaz("   bulgusu tam bu ekseni isaret ediyordu ve tam girdide ILK KEZ")
        yaz("   kosuyor. Kosu SURUYOR; makinenin bos RAM'ine bak.")
        bip(3, 440, 400)

    if gecen - son_canlilik >= CANLILIK:
        son_canlilik = gecen
        delta = "" if onceki_cpu is None else "  (+%.0f sn CPU)" % (cpu - onceki_cpu)
        onceki_cpu = cpu
        yaz("surec CANLI · nobet %.1f sa · CPU %.0f sn%s · bellek %.0f MB (tepe %.2f GB)"
            % (gecen / 3600.0, cpu, delta, bellek / 1048576.0,
               bellek_tepe / 1073741824.0))

    if gecen > OMUR:
        yaz("🔴 ZAMAN ASIMI — %.1f saat, surec HALA CANLI" % (gecen / 3600.0))
        yaz("  ⚠️ Bu bir BITIS DEGIL: nobetci oldu, kosu olmedi. YENI NOBETCI KUR.")
        bip(3, 220, 700)
        sys.exit(3)

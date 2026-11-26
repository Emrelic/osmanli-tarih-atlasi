# -*- coding: utf-8 -*-
"""KOSU 8 NOBETCISI (ucuncu) — tetik GERCEK BIR OLAY, sure DEGIL.

NICIN UCUNCU:
   BEKCI-KOSU8B.out 18:01:58'de "ZAMAN ASIMI — 6.0 saat, surec hala canli"
   yazip TASARIM GEREGI cikti. Kosu o an 6,7 saatteydi; simdi 11,3.
   ⇒ Kosu 4,5 SAATTIR NOBETCISIZ ve gece iniyor.
   🔴 Zaman asimi KOSUNUN OLCULEN AZAMISINDEN kisaydi (7B: 16s49dk).
      Bir nobetcinin omru, izledigi isin bilinen azamisinden UZUN olmali;
      yoksa tam is uzadiginda — yani en cok gerektiginde — oluyor.

`§10` KURALI: tetik TAHMINE ya da GECEN SUREYE degil, GERCEKLESMIS BIR
OLAYA baglanir. Motor `data/donemler.js`i kosunun SONUNDA yazar.
⚠️ `veri-kaynak/motor_kara.geojson` tetik DEGILDIR — o kosunun 70.
   DAKIKASINDA yaziliyor (olculdu, 7 Eylul) ve ~16 saat ERKEN oterdi.

🔴 VE "MTIME DEGISTI" != "YAZIM BITTI": dosya ~31 MB, ve yarim yazilmis
   bir dosyayi gorup 9 bip basmak `§10`un yasakladigi seydir
   ("bitti sanip erken haber vermek, hic haber vermemekten kotudur").
   ⇒ BOYUT IKI ARDISIK KONTROLDE AYNI KALMADAN bitmiş SAYILMAZ.

CIKTI: denetim/BEKCI-KOSU8C.out — ASCII, cp1254 konsolunda olmez.
"""
import io, os, subprocess, sys, time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TETIK = os.path.join(KOK, "data", "donemler.js")
LOG = os.path.join(KOK, "denetim", "BEKCI-KOSU8C.out")
PID = 10780

YOKLAMA = 120          # saniye
CANLILIK = 3600        # saatlik rapor
OMUR = 30 * 3600       # 30 saat — 7B'nin azamisinin (16s49dk) cok ustunde


def yaz(s):
    satir = "[%s] %s" % (time.strftime("%H:%M:%S"), s)
    with io.open(LOG, "a", encoding="utf-8") as f:
        f.write(satir + "\n")
    try:
        print(satir)
    except Exception:
        print(satir.encode("ascii", "replace").decode("ascii"))


def bip(n, frek, sure):
    for _ in range(n):
        subprocess.call(["powershell", "-NoProfile", "-c",
                         "[Console]::Beep(%d,%d)" % (frek, sure)])
        time.sleep(0.12)


def surec_bilgi():
    """(durum, cpu, bellek) dondurur.

    🔴 UC DURUM, IKI DEGIL — ve ayrimi bir NOBETCIDE hayati:
        "VAR"        surec canli, sayilar okundu
        "YOK"        PowerShell TEMIZ CALISTI ve BOS dondu ⇒ surec GERCEKTEN yok
        "OLCULEMEDI" komut patladi / cikti ayristirilamadi ⇒ HICBIR SEY BILMIYORUZ

    Ilk yazimda "YOK" ile "OLCULEMEDI" ayni degere (None) iniyordu ve
    cagiran taraf ikisine de "kosu COKMUS OLABILIR" deyip 3 bip basiyordu.
    ⇒ Gecenin ucunde bir ayristirma hatasi, SAHTE BIR COKME ALARMI olurdu
      ve `§11`in "olculemedi != yok" kuralinin tam ihlali.
    ⚠️ Ve ters yonu daha da kotu: gercek bir cokme "olculemedi" sanilip
      SESSIZ GECILEBILIRDI. O yuzden "OLCULEMEDI" de RAPORLANIR — yalniz
      bip basmaz.
    """
    try:
        c = subprocess.check_output(
            ["powershell", "-NoProfile", "-c",
             "$p=Get-Process -Id %d -ErrorAction SilentlyContinue;"
             "if($p){'{0}|{1}' -f $p.CPU,$p.WorkingSet64}" % PID],
            stderr=subprocess.DEVNULL).decode("ascii", "replace").strip()
    except Exception as e:
        return "OLCULEMEDI", "komut patladi: %s" % e, None
    if not c:
        return "YOK", None, None          # temiz kostu, bos dondu
    if "|" not in c:
        return "OLCULEMEDI", "beklenmedik cikti: %r" % c[:60], None
    a, b = c.split("|")
    try:
        # Turkce yerel: ondalik VIRGUL (olculdu: "37207,21875").
        # Binlik ayraci cikarsa nokta ATILIR, sonra virgul noktaya doner.
        return "VAR", float(a.strip().replace(".", "").replace(",", ".")), int(b)
    except ValueError:
        return "OLCULEMEDI", "sayi ayristirilamadi: %r" % a[:40], None


def boyut():
    try:
        return os.path.getmtime(TETIK), os.path.getsize(TETIK)
    except OSError:
        return None, None


taban_m, taban_b = boyut()
yaz("NOBETCI 8C basladi · PID %d · tetik %s" % (PID, os.path.basename(TETIK)))
yaz("  taban: mtime %s  boyut %s" % (
    time.strftime("%d %b %H:%M", time.localtime(taban_m)) if taban_m else "YOK",
    "%.1f MB" % (taban_b / 1048576.0) if taban_b else "YOK"))
yaz("  omur %d saat · yoklama %d sn" % (OMUR // 3600, YOKLAMA))

bas = time.time()
son_canlilik = 0.0
onceki_cpu = None
olculemedi = [0]        # ust uste kac kez olculemedi (liste: dongu icinde yazilir)

while True:
    time.sleep(YOKLAMA)
    gecen = time.time() - bas

    m, b = boyut()
    if taban_m is not None and m is not None and m > taban_m:
        # mtime degisti — YAZIM BITTI MI? boyut iki kontrolde sabit kalmali
        yaz("tetik DEGISTI (%.1f MB) — yazim bitisi dogrulaniyor..." % (b / 1048576.0))
        kararli = 0
        onceki_b = b
        while kararli < 2:
            time.sleep(30)
            m2, b2 = boyut()
            if b2 == onceki_b and b2 and b2 > 1048576:
                kararli += 1
            else:
                kararli = 0
                yaz("  hala yaziliyor: %.1f MB" % ((b2 or 0) / 1048576.0))
            onceki_b = b2
        yaz("KOSU 8 BITTI — %s  %.1f MB  (nobet %.1f saat)"
            % (time.strftime("%H:%M:%S", time.localtime(m2)),
               b2 / 1048576.0, gecen / 3600.0))
        yaz("  SIRA: denetle.py -> denetle_yayin.py -> surum damgasi -> yayin")
        bip(9, 880, 250)          # `§10`: uzun isin bitisi = 9 bip
        sys.exit(0)

    durum, cpu, bellek = surec_bilgi()

    if durum == "YOK":
        # surec GERCEKTEN yok ama tetik yazilmadi ⇒ COKMUS. SESSIZ KALMA.
        yaz("🔴 SUREC YOK ve tetik YAZILMADI — kosu COKMUS")
        bip(3, 220, 700)
        sys.exit(2)

    if durum == "OLCULEMEDI":
        # BIP YOK — bu bir cokme iddiasi DEGIL, bir olcum bosluğu.
        # Ama SESSIZ de gecilmez: ust uste 5 kez olculemezse (10 dk)
        # artik bir ariza isareti sayilir ve bildirilir.
        olculemedi[0] += 1
        yaz("⚠️ OLCULEMEDI (%d. kez) — %s" % (olculemedi[0], cpu))
        if olculemedi[0] >= 5:
            yaz("🔴 5 KEZ UST USTE OLCULEMEDI — nobetci KOR. Elle bak.")
            bip(3, 330, 500)
            sys.exit(4)
        continue
    olculemedi[0] = 0

    if gecen - son_canlilik >= CANLILIK:
        son_canlilik = gecen
        delta = "" if onceki_cpu is None else "  (+%.0f sn CPU)" % (cpu - onceki_cpu)
        onceki_cpu = cpu
        yaz("surec CANLI · nobet %.1f sa · CPU %.0f sn%s · bellek %.0f MB"
            % (gecen / 3600.0, cpu, delta, bellek / 1048576.0))

    if gecen > OMUR:
        yaz("🔴 ZAMAN ASIMI — %.1f saat, surec HALA CANLI" % (gecen / 3600.0))
        yaz("  ⚠️ Bu bir BITIS DEGIL: nobetci olduyu, kosu olmedi. YENI NOBETCI KUR.")
        bip(3, 220, 700)
        sys.exit(3)

# -*- coding: utf-8 -*-
"""KOSU 4 BEKCISI — 3/4 Eylul 2026.

TETIK SURE DEGIL, DOSYA DAMGASI (CLAUDE.md §10):
  `data/donemler.js` motor tarafindan KOSUNUN SONUNDA yazilir. Bekci
  gecen sureye, tahmine ya da bir oturumun "bitiyorum" demesine DEGIL,
  GERCEKLESMIS bir olaya baglanir.
  ⚠️ "Bitti sanip erken haber vermek, hic haber vermemekten kotudur."

CANLILIK RAPORU (CLAUDE.md §7, 3 Eylul 2026 dersi):
  Bir bekci DUZENLI olarak "hala nobetteyim" demelidir. 3 Eylul 01:25'te
  bir kosu ve bekcisi BIRLIKTE oldu; bekci yalniz OLAY ANINDA
  konustugu icin sessizlik "iyi gidiyor" diye okundu ve durum SEKIZ
  SAAT sonra, Emre sordugu icin fark edildi.
  ⇒ Her 60 dakikada bir satir yazilir. Bir saat ses gelmezse hukum
    "kosu iyi gidiyor" DEGIL, "BEKCI OLMUS OLABILIR".

CIKTI: denetim/BEKCI-KOSU4B.log  (koordinator buradan okur)
SES  : bitiste 9 beep (§10 — "masaya don"), zaman asiminda 3 kalin alcak
"""
import io, os, sys, time, subprocess, datetime

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEDEF = os.path.join(KOK, "data", "donemler.js")
LOG = os.path.join(KOK, "denetim", "BEKCI-KOSU4C.log")
# 🔴 5 Eylül 2026: burada `kosu4b.log` SABİT yazılıydı ve koşu 5b
#   `kosu_ayrik.log`a yazıyordu ⇒ bekçi her canlılık satırında BİTMİŞ bir
#   koşunun son satırını basıyordu ("=====" profil kapanışı). Aynı gece
#   "nöbetçi yanlış konuşuyor" kusuru 3s20dk yaktı; bu onun kardeşi.
#   ⇒ Sabit ad yerine EN TAZE .log — bekçi başlarken BİR KEZ seçilir
#     (koşu sürerken değişmesin diye; §11 "aletin evreni koşarken kaymasın").
def _taze_log():
    try:
        a = [os.path.join(KOK, f) for f in os.listdir(KOK) if f.endswith(".log")]
        return max(a, key=os.path.getmtime) if a else os.path.join(KOK, "kosu4b.log")
    except Exception:
        return os.path.join(KOK, "kosu4b.log")


KOSU_LOG = _taze_log()
TAVAN_SN = 24 * 3600          # 🔴 12 -> 24 SAAT (4 Eylul 12:50)
#   Eski tavan 'kosu ~8,5 saat' varsayimiyla konmustu. Kosu 4 o
#   varsayimi CURUTTU: 12,0 saatte hala CANLI (CPU 42.455 sn) ve
#   ilerliyor (devlet 80->90, is %38->%66). Nobetci tavanda oldu,
#   kosu surdu — ve arada kimse bakmasa fark edilmezdi.
#   ⚠️ Tavan bir OLCUM degil bir VARSAYIMDIR; varsayim curudugunde
#      nobetci once olur, kosu sonra biter.
ARALIK = 60                   # yoklama
RAPOR = 3600                  # canlilik raporu


def yaz(s):
    """Log dosyasina utf-8 yazar, konsola ASCII'ye DUSEREK yazar.

    🔴 4 Eylul 2026: bu bekcinin onceki surumu ilk canlilik satirinda
    UnicodeEncodeError ile COKTU — cp1254 konsolu 'saat' emojisini
    (\u23f3) yazamadi. Dosyaya yazim basarili olmustu, print() coktu.
    📌 `renkler.py`nin kendi uyarisinin aynisi: "patlayabilen bir uyari
       uyarisizliktan kotudur — sorunu haber vermek yerine KENDISI sorun
       olur." Bir NOBETCI icin bedeli daha agir: sustugunda "kosu iyi
       gidiyor" diye okunuyor.
    ⚠️ try/except SART ve ortam degiskeni YETMEZ: baska biri
       PYTHONIOENCODING'siz baslatirsa yine cokerdi.
    """
    d = datetime.datetime.now().strftime("%H:%M:%S")
    try:
        with io.open(LOG, "a", encoding="utf-8") as f:
            f.write("%s  %s\n" % (d, s))
    except Exception:
        pass                      # log yazilamasa bile NOBET SURSUN
    try:
        print("%s  %s" % (d, s), flush=True)
    except Exception:
        try:
            print("%s  %s" % (d, s.encode("ascii", "replace").decode("ascii")),
                  flush=True)
        except Exception:
            pass                  # konsol hic yazamasa bile NOBET SURSUN


def beep(n, frek=880, sure=250, ara=120):
    try:
        subprocess.run(
            ["powershell", "-c",
             "1..%d | ForEach-Object { [Console]::Beep(%d,%d); "
             "Start-Sleep -Milliseconds %d }" % (n, frek, sure, ara)],
            capture_output=True, timeout=60)
    except Exception as e:
        yaz("beep basarisiz: %s" % e)


def son_satir():
    try:
        t = io.open(KOSU_LOG, encoding="utf-8", errors="replace").read()
        satirlar = [x.strip() for x in t.splitlines() if x.strip()]
        return satirlar[-1][:110] if satirlar else "(log bos)"
    except Exception:
        return "(log okunamadi)"


if not os.path.exists(HEDEF):
    yaz("🔴 hedef yok: %s" % HEDEF); sys.exit(1)
BASLANGIC_MTIME = os.path.getmtime(HEDEF)
T0 = time.time()


def _pid_oku():
    """`.petek.kilit`ten koşan üretimin PID'ini al. Yoksa None — ve None
    bir hata DEĞİL: bekçi eski davranışına (yalnız damga) düşer, ama
    bunu SÖYLER."""
    try:
        yol = os.path.join(os.path.dirname(os.path.dirname(
            os.path.abspath(__file__))), ".petek.kilit")
        for p in open(yol, encoding="utf-8").read().split("|"):
            p = p.strip()
            if p.startswith("pid="):
                return int(p[4:])
    except Exception:
        pass
    return None


def _yasiyor(pid):
    """🔴 ÜÇ DURUM, İKİSİ DEĞİL: canlı / ölü / ÖLÇÜLEMEDİ.
    Ölçülemedi ÖLÜ demek DEĞİLDİR — yanlış okunursa bekçi çalışan bir
    koşuyu 'öldü' diye ilan eder ve 9 beep yerine 3 alçak beep basar."""
    try:
        import subprocess
        r = subprocess.run(["tasklist", "/FI", "PID eq %d" % pid, "/NH", "/FO", "CSV"],
                           capture_output=True, text=True, timeout=20)
        if r.returncode != 0:
            return True                      # ölçülemedi ⇒ CANLI say
        return ('"%d"' % pid) in (r.stdout or "")
    except Exception:
        return True                          # ölçülemedi ⇒ CANLI say


PID = _pid_oku()
yaz("BEKCI BASLADI · hedef donemler.js · damga %s · izlenen PID %s"
    % (datetime.datetime.fromtimestamp(BASLANGIC_MTIME).strftime("%m-%d %H:%M:%S"),
       PID if PID else "OKUNAMADI (yalniz damga izlenecek)"))

son_rapor = T0
while True:
    time.sleep(ARALIK)
    gecen = time.time() - T0
    try:
        m = os.path.getmtime(HEDEF)
    except OSError:
        continue                      # motor yazarken kisa sure erisilemez
    if m > BASLANGIC_MTIME:
        # 🔴 DAMGA DEGISTI — ama motor DOSYAYI HALA YAZIYOR olabilir.
        #    Boyut iki yoklama boyunca SABIT kalana kadar bekle; yoksa
        #    yarim yazilmis bir dosyaya "bitti" denir.
        onceki = -1
        while True:
            time.sleep(20)
            try:
                b = os.path.getsize(HEDEF)
            except OSError:
                continue
            if b == onceki and b > 0:
                break
            onceki = b
        yaz("🟢 KOSU 4 BITTI · %.1f saat · donemler.js %d bayt · son satir: %s"
            % (gecen / 3600.0, onceki, son_satir()))
        beep(9)
        sys.exit(0)
    if gecen > TAVAN_SN:
        yaz("🔴 ZAMAN ASIMI · %.1f saat · donemler.js DEGISMEDI · son satir: %s"
            % (gecen / 3600.0, son_satir()))
        beep(3, frek=220, sure=700, ara=200)
        sys.exit(1)
    # ══════════════════════════════════════════════════════════════════
    # 🔴🔴 SÜREÇ CANLILIĞI — 5 Eylül 2026'da EKLENDİ, ve sebebi ÖLÇÜLMÜŞ
    # BİR KÖRLÜKTÜR. Bu bekçi koşu 5 öldükten SONRA 90+ dakika boyunca
    # "⏳ kosu SURUYOR" basmaya devam etti.
    #     21:26:47 koşu başladı · ~00:47 zincir ZAMAN AŞIMIYLA öldürdü
    #     02:27:26 bekçi hâlâ "SURUYOR · 300 dk" diyordu
    # Sebep: bekçi yalnız `donemler.js` DAMGASINA bakıyordu. Koşu ölünce
    # damga da değişmez ⇒ bekçi ölümü "henüz bitmedi" diye okur.
    # 🔴 VE SESSİZLİK BURADA "İYİ GİDİYOR" DİYE OKUNDU: koordinatör iki
    #   saat boyunca "PID canlı" diye rapor etti, ÇÜNKÜ KİLİT DOSYASINI
    #   OKUYORDU — dosyada yazan PID'in YAŞADIĞINI hiç ölçmedi.
    #   Bulan bir işçi oturum oldu (`1923 SINIRLARI`), kendi işine
    #   başlamadan önce ölçtü.
    # 📌 `CLAUDE.md §7`: "bir nöbetçinin sessizliği bir ölçüm değildir."
    #   Buradaki daha kötüydü: nöbetçi susmuyordu, YANLIŞ KONUŞUYORDU.
    # ══════════════════════════════════════════════════════════════════
    if PID:
        if not _yasiyor(PID):
            yaz("🔴🔴 SUREC OLDU · PID %s · %.1f saat · son satir: %s"
                % (PID, gecen / 3600.0, son_satir()))
            yaz("   donemler.js DEGISMEDI ⇒ kosu BITMEDI, OLDU.")
            beep(3, frek=220, sure=700, ara=200)
            sys.exit(2)
    if time.time() - son_rapor >= RAPOR:
        son_rapor = time.time()
        yaz("⏳ kosu SURUYOR · %d dk · PID %s canli · %s"
            % (int(gecen / 60), PID or "?", son_satir()))

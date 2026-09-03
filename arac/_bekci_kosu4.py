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

CIKTI: denetim/BEKCI-KOSU4.log  (koordinator buradan okur)
SES  : bitiste 9 beep (§10 — "masaya don"), zaman asiminda 3 kalin alcak
"""
import io, os, sys, time, subprocess, datetime

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEDEF = os.path.join(KOK, "data", "donemler.js")
LOG = os.path.join(KOK, "denetim", "BEKCI-KOSU4.log")
KOSU_LOG = os.path.join(KOK, "kosu4.log")
TAVAN_SN = 12 * 3600          # 12 saat — kosu ~8,5 saat
ARALIK = 60                   # yoklama
RAPOR = 3600                  # canlilik raporu


def yaz(s):
    d = datetime.datetime.now().strftime("%H:%M:%S")
    with io.open(LOG, "a", encoding="utf-8") as f:
        f.write("%s  %s\n" % (d, s))
    print("%s  %s" % (d, s), flush=True)


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
yaz("BEKCI BASLADI · hedef donemler.js · damga %s"
    % datetime.datetime.fromtimestamp(BASLANGIC_MTIME).strftime("%m-%d %H:%M:%S"))

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
    if time.time() - son_rapor >= RAPOR:
        son_rapor = time.time()
        yaz("⏳ kosu SURUYOR · %d dk · %s" % (int(gecen / 60), son_satir()))

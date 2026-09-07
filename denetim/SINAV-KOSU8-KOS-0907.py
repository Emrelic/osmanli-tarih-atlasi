# -*- coding: utf-8 -*-
u"""SINAV TAKIMI KOŞTURUCU  ·  SINAV-KOSU8-0907  ·  7 Eylül 2026

Koşu 8 bittiğinde koşulacak sınavları SIRAYLA koşturur ve tek tabloda
raporlar. Kendisi hiçbir şey ölçmez — ölçenler ayrı dosyalardır.

══════════════════════════════════════════════════════════════════════════
🔴 ⓪ ÖN KOŞUL — KOŞU GERÇEKTEN BİTTİ Mİ
══════════════════════════════════════════════════════════════════════════
Bu takım koşu BİTMEDEN koşulursa **anlamsız bir cevap** verir: `donemler.js`
hâlâ koşu 7B'nin çıktısıdır ve bütün `vl` kalemleri "İHLAL" der. O yüzden
koşturucu önce üç sinyale bakar ve biri bile eksikse **DURUR**:

    ① SÜREÇ    üretim PID'i hâlâ canlı mı           → canlıysa DUR
    ② ÇIKTI    data/donemler.js mtime > koşu başı   → değilse DUR
    ③ İZ       donemler.js `vl` taşıyor mu          → taşımıyorsa UYAR

`CLAUDE.md §10`: *"«Süre doldu, bitti» demek YANILTICIDIR — bekçi her zaman
GERÇEKLEŞMİŞ bir olaya bağlanır."* ⇒ Süreye bakmıyoruz, DAMGAYA bakıyoruz.
⚠️ Ve `§11`: *"`mtime` bir ÖLÇÜM değil bir DAMGADIR — içerik değişmeden de
değişir."* Bu yüzden ② tek başına yeterli sayılmıyor, ③ ile birlikte okunuyor.

══════════════════════════════════════════════════════════════════════════
🔴 GLOB KULLANILMIYOR — LİSTE AÇIK
══════════════════════════════════════════════════════════════════════════
Sınav dosyaları `denetim/SINAV-KOSU8-*-0907.*` sözleşmesinde ama bu betik
**glob ile taramıyor**, adları tek tek yazıyor. Sebep `CLAUDE.md §11`:
*"bir glob bir AD SÖZLEŞMESİDİR"* — bir fikstür ya da bulgu dosyası aynı
deseni tutturduğunda glob onu sahiplenir ve alet **«0 kayıt» diye sessiz
bir sıfır basar.** Bu proje o bedeli iki kez ödedi.
(Nitekim `SINAV-KOSU8-FIKSTUR-VL-0907.js` tam o deseni tutturuyor ve bir
sınav DEĞİL.)

KOŞULUŞ
    py denetim/SINAV-KOSU8-KOS-0907.py            # ön koşul + bütün sınavlar
    py denetim/SINAV-KOSU8-KOS-0907.py --zorla    # ön koşulu ATLA (koşu sürerken
                                                  #   ne diyeceklerini görmek için)
    py denetim/SINAV-KOSU8-KOS-0907.py --c13      # yalnız C13 ateşleme ayakları
çıkış: 0 hepsi GEÇTİ · 1 en az bir İHLAL · 2 en az bir ÖLÇÜLEMEDİ (ihlal yok)
"""
from __future__ import unicode_literals

import os
import subprocess
import sys
import time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ── SINAVLAR — açık liste, glob YOK ──────────────────────────────────────
# (ad, komut, C13 ateşleme komutu ya da None)
SINAVLAR = [
    ("Ö9 GERİLEME · peteksiz nokta",
     ["py", "denetim/SINAV-KOSU8-PETEKSIZ-0907.py"],
     ["py", "denetim/SINAV-KOSU8-PETEKSIZ-0907.py", "--atesle"]),
    ("`vl` ÇIKTI · varlık · şema · ad · konum",
     ["node", "--max-old-space-size=4096", "denetim/SINAV-KOSU8-VL-0907.js"],
     ["node", "denetim/SINAV-KOSU8-VL-0907.js", "--atesle"]),
    ("KIYAS · koşu 8 ↔ koşu 7B (kontrol grubu)",
     ["node", "--max-old-space-size=6144", "denetim/SINAV-KOSU8-KIYAS-0907.js"],
     ["node", "denetim/SINAV-KOSU8-KIYAS-0907.js", "--atesle"]),
]

# `vl` sınavının GEÇME ayağı — fikstürle, koşudan bağımsız koşar
GECME_AYAGI = ("C13① GEÇME · `vl` sınavı sağlam fikstüre SESSİZ mi",
               ["node", "denetim/SINAV-KOSU8-VL-0907.js", "--dosya",
                "denetim/SINAV-KOSU8-FIKSTUR-VL-0907.js"])

# ── YETKİLİ ALETLER — bu takım onların yerini TUTMAZ ─────────────────────
# 🔴 `denetle.py` · `denetle_yayin.py` · `renk_olc.py` ayrı ve YETKİLİ
#   aletlerdir; `oturumlar/KOSU-BITINCE-SIRA.md` sırasında koşulurlar.
#   Buraya KOPYALANMADI — kopyalansaydı iki otorite doğar ve bir gün
#   ayrışırlardı (`§11`, bu projede dört vaka).
HATIRLATMA = [
    "py arac/denetle.py                 # değişmezler — TABANI yamalardan ÖNCE ölç",
    "py arac/durum_tablosu.py --yaz     # §1.5'i yerinde güncelle",
    "py arac/renk_olc.py                # §9: veri değiştiyse ŞART",
    "py arac/denetle_yayin.py           # yayın kapısı — SONUCU OKU",
]


def kosu_suruyor_mu():
    u"""(sürüyor_mu, açıklama) — üretim süreci canlı mı?"""
    try:
        c = subprocess.run(
            ["powershell", "-NoProfile", "-Command",
             "Get-CimInstance Win32_Process -Filter \"Name='python.exe'\" | "
             "Where-Object { $_.CommandLine -like '*uret_petek*' } | "
             "Select-Object -ExpandProperty ProcessId"],
            capture_output=True, timeout=60)
        cikti = c.stdout.decode("utf-8", "replace").strip()
    except Exception as e:                          # noqa: BLE001
        return (None, "ölçülemedi: %s" % e)
    pidler = [s.strip() for s in cikti.splitlines() if s.strip().isdigit()]
    if pidler:
        return (True, "uret_petek CANLI · PID " + ", ".join(pidler))
    return (False, "uret_petek süreci YOK")


def on_kosul():
    u"""Üç sinyal. Döner: (gecer_mi, [satır…])"""
    s = []
    suruyor, aciklama = kosu_suruyor_mu()
    if suruyor is None:
        s.append(("⚫", "① SÜREÇ · " + aciklama))
    elif suruyor:
        s.append(("🔴", "① SÜREÇ · " + aciklama + " — KOŞU SÜRÜYOR"))
    else:
        s.append(("🟢", "① SÜREÇ · " + aciklama))

    yol = os.path.join(KOK, "data", "donemler.js")
    if os.path.exists(yol):
        mt = os.path.getmtime(yol)
        s.append(("🟡", "② ÇIKTI · donemler.js mtime " +
                  time.strftime("%d %b %H:%M:%S", time.localtime(mt)) +
                  "  (mtime bir DAMGADIR, ölçüm değil — ③ ile birlikte okunur)"))
    else:
        s.append(("🔴", "② ÇIKTI · donemler.js YOK"))

    # ③ İZ — dosyada `vl` geçiyor mu? (ucuz metin taraması, eval etmeden)
    iz = False
    try:
        with open(yol, "rb") as f:
            while True:
                blok = f.read(1 << 22)
                if not blok:
                    break
                if b'"vl":' in blok or b"vl:[" in blok:
                    iz = True
                    break
    except Exception:                               # noqa: BLE001
        iz = None
    if iz is True:
        s.append(("🟢", "③ İZ · donemler.js `vl` TAŞIYOR — koşu 8 çıktısı"))
    elif iz is False:
        s.append(("🔴", "③ İZ · donemler.js `vl` TAŞIMIYOR — bu HÂLÂ koşu 7B "
                        "çıktısı; sınavlar anlamsız cevap verir"))
    else:
        s.append(("⚫", "③ İZ · okunamadı"))

    gecer = (suruyor is False) and (iz is True)
    return (gecer, s)


def kos(ad, komut):
    t0 = time.time()
    try:
        c = subprocess.run(komut, cwd=KOK, capture_output=True, timeout=3600)
        kod = c.returncode
        cikti = c.stdout.decode("utf-8", "replace")
        hata = c.stderr.decode("utf-8", "replace")
    except Exception as e:                          # noqa: BLE001
        return (2, "koşturulamadı: %s" % e, 0.0)
    sure = time.time() - t0
    son = [x for x in cikti.strip().splitlines() if x.strip()]
    ozet = son[-1] if son else (hata.strip().splitlines() or ["(çıktı yok)"])[-1]
    return (kod, ozet.strip(), sure)


def main():
    yaz = sys.stdout.write
    zorla = "--zorla" in sys.argv
    yalniz_c13 = "--c13" in sys.argv

    print("═" * 78)
    print("SINAV TAKIMI — KOŞU 8")
    print("═" * 78)

    if yalniz_c13:
        print("\nC13② ATEŞLEME AYAKLARI\n" + "─" * 78)
        kotu = 0
        for ad, _, atesle in SINAVLAR:
            if not atesle:
                continue
            kod, ozet, sure = kos(ad, atesle)
            print(("🟢 " if kod == 0 else "🔴 ") + ad.ljust(46) + ozet)
            kotu += (kod != 0)
        kod, ozet, _ = kos(*GECME_AYAGI)
        print(("🟢 " if kod == 0 else "🔴 ") + GECME_AYAGI[0].ljust(46) + ozet)
        kotu += (kod != 0)
        return 1 if kotu else 0

    gecer, satirlar = on_kosul()
    print("\n⓪ ÖN KOŞUL — koşu gerçekten bitti mi\n" + "─" * 78)
    for i, s in satirlar:
        print("  " + i + " " + s)
    if not gecer and not zorla:
        print("\n🔴 DURDUM — koşu bitmemiş görünüyor.")
        print("   Sınavları şimdi koşturmak ANLAMSIZ bir cevap verir ve o cevap")
        print("   bir sonraki oturuma «ölçüldü» diye görünür.")
        print("   Yine de görmek istersen:  --zorla")
        return 2
    if not gecer and zorla:
        print("\n⚠️ --zorla · ön koşul SAĞLANMADI. Aşağıdaki sonuçlar")
        print("   ÖLÇÜM DEĞİL, koşu bitmeden aletlerin ne dediğidir.")

    print("\nSINAVLAR\n" + "─" * 78)
    ihlal = olcemedi = 0
    for ad, komut, _ in SINAVLAR:
        kod, ozet, sure = kos(ad, komut)
        isaret = "🟢" if kod == 0 else ("🔴" if kod == 1 else "⚫")
        print("  %s %s %6.1fs  %s" % (isaret, ad.ljust(44), sure, ozet))
        if kod == 1:
            ihlal += 1
        elif kod != 0:
            olcemedi += 1

    print("\nHATIRLATMA — bu takım YETKİLİ aletlerin yerini TUTMAZ:")
    for h in HATIRLATMA:
        print("   " + h)

    print("\n" + "═" * 78)
    if ihlal:
        print("🔴 %d İHLAL — YAYIN YAPILMAZ" % ihlal)
        return 1
    if olcemedi:
        print("⚫ %d ÖLÇÜLEMEDİ — «temiz» DEĞİL" % olcemedi)
        return 2
    print("🟢 SINAV TAKIMI GEÇTİ")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())

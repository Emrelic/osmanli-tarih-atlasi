# -*- coding: utf-8 -*-
u"""SINAV — Ö9'UN GERİLEME HÂLİ  ·  SINAV-KOSU8-0907  ·  7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
🔴 NİÇİN BU DOSYA VAR — Ö9 BAYATTI, AMA SİLİNMEDİ, ANLAMI TERS ÇEVRİLDİ
══════════════════════════════════════════════════════════════════════════
Ö9'un özgün hâli bir **iyileşme** ölçütüydü:

    "PETEKLER 2731 → ~3800 · peteksiz oran %28,2 → ~%0.
     🔴 Tutmazsa koşu EKSİK BİTMİŞ demektir; yayın yapılmaz."

O borç **4 Eylül 17:15'te `0e7cb11` ile ÖDENDİ** ve ölçüldü: bugünkü
(koşu 7B) çıktıda PETEKLER 3805, peteksiz 0. ⇒ Ö9 bugün **bayat çıktıya
karşı bile GEÇİYOR**, ve geçmesi HİÇBİR ŞEY KANITLAMIYOR: sonucu bir
önceki koşudan geliyor.

`CLAUDE.md §11`: *"bayat bir kabul ölçütü YANLIŞ SEBEPTEN geçer — ve
geçtiği için kimse ona bakmaz. Tehlikesi «boşa iş» değil SAHTE GÜVEN."*

⇒ Bu dosya aynı sayıyı **ters yönde** okur:
    ESKİ   "peteksiz DÜŞTÜ MÜ?"     (iyileşme — artık anlamsız)
    YENİ   "peteksiz HÂLÂ 0 MI?"    (gerileme — koşu nokta KAYBETTİ Mİ?)

══════════════════════════════════════════════════════════════════════════
DÖRT ALAN (`CLAUDE.md §11` öngörü şablonu)
══════════════════════════════════════════════════════════════════════════
① NE          girdide olup haritada çizilmeyen nokta sayısı
② MAZERET     YOK. Koşu 8'in motor tarafındaki tek değişikliği `vl`
              çapasıdır (`2127303`) ve o `donemler.js`e alan EKLER,
              petek SİLMEZ. Nokta kaybının mazereti olamaz.
③ NEREDEN     `denetim/ARAC-PETEKSIZ-0905.js`in çıktısı
              birim: NOKTA (adet) ve PETEK (adet)
④ NEYE KARŞI  koşu 8 · kontrol grubu koşu 7B (`567895f`): 3805 petek,
              peteksiz 0

══════════════════════════════════════════════════════════════════════════
🔴 EŞİK — VE NİÇİN SABİT SAYI DEĞİL
══════════════════════════════════════════════════════════════════════════
Sarılan alet `oran > %5` diye bir eşik taşıyor; o eşik **%28,2'lik bir
tabandan %0'a inişi** ölçmek için konmuştu ve bugünkü soruya GEVŞEK:
peteksiz 100 noktaya çıksa (%2,6) o eşik hâlâ "GEÇTİ" derdi.

Buradaki eşikler MUTLAK SAYI DEĞİL, İLİŞKİDİR — ilişki taban taşımaz:

    E1   peteksiz == 0                       (sıfır tolerans)
    E2   PETEKLER == girdideki nokta sayısı  (ikisi de aletten okunur)

`§11`: *"bir eşik, ölçüldüğü tabanla birlikte taşınır"* — bu proje bugün
üç bayat eşik ödedi (Ö9 · R1'in 96/640'ı · `kosu8.log`un 16s09dk'sı).
Sabit sayı yazmamak, dördüncüsünü ödememenin en ucuz yolu.

══════════════════════════════════════════════════════════════════════════
🔴 TAKLİT ALET KURULMADI — YETKİLİ ALET ÇAĞRILIYOR
══════════════════════════════════════════════════════════════════════════
Peteksizliği yeniden hesaplamıyorum. `ARAC-PETEKSIZ-0905.js` bu sorunun
yetkili aletidir (dosya listesini `girdi.py`ye soruyor, her dosyayı ayrı
ad alanında eval ediyor). Bu betik onu KOŞTURUR ve sayılarını okur.
⚠️ Ve okuma yolu kırılgandır (`§11`: *"damga dizisine bakan alet bir gün
sessiz bir yanlış negatif üretir"*) — o yüzden ayrıştırma BAŞARISIZ
olursa sonuç **ÖLÇÜLEMEDİ**'dir, asla "temiz" değil.

KOŞULUŞ
    py denetim/SINAV-KOSU8-PETEKSIZ-0907.py
    py denetim/SINAV-KOSU8-PETEKSIZ-0907.py --atesle   (C13② fikstürle)
çıkış: 0 GEÇTİ · 1 İHLAL · 2 ÖLÇÜLEMEDİ
"""
from __future__ import unicode_literals

import io
import os
import re
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALET = os.path.join("denetim", "ARAC-PETEKSIZ-0905.js")

# ── ÇIKTI AYRIŞTIRMA — çapalar ANKRAJLI, ve üçü de zorunlu ───────────────
# 🔴 Serbest bir sayı araması yerine SATIR BAŞINA çapalı desen: aletin
#   başka bir satırındaki bir sayıyı yanlışlıkla yakalamasın.
RX_PETEK = re.compile(r"^PETEKLER\s*:\s*(\d+)\s*$", re.M)
RX_TOPLAM = re.compile(r"^TOPLAM nokta (\d+) \| PETEKSIZ (\d+)\b", re.M)
RX_DOSYA = re.compile(r"^girdi dosyasi\s*:\s*(\d+)\s*$", re.M)


def ayristir(metin):
    u"""Aletin çıktısından üç sayıyı çıkarır. Biri eksikse None döner."""
    a = RX_PETEK.search(metin)
    b = RX_TOPLAM.search(metin)
    c = RX_DOSYA.search(metin)
    if not (a and b and c):
        return None
    return {
        "petek": int(a.group(1)),
        "nokta": int(b.group(1)),
        "peteksiz": int(b.group(2)),
        "dosya": int(c.group(1)),
    }


# ── C13② ATEŞLEME — ayrıştırıcının HER dalı, sahte çıktıyla ──────────────
def atesleme():
    saglam = (
        "girdi dosyasi : 77\n"
        "PETEKLER      : 3805\n"
        "\n"
        "TOPLAM nokta 3805 | PETEKSIZ 0 (%0.0)\n"
        "\n"
        "🟢 GECTI — peteksiz oran %0.0\n"
    )
    dallar = []

    def de(ad, bekle, olc):
        dallar.append((ad, bekle, olc, bekle == olc))

    d = ayristir(saglam)
    de("ayrıştırma · sağlam çıktı okunur", (3805, 3805, 0, 77),
       None if d is None else (d["petek"], d["nokta"], d["peteksiz"], d["dosya"]))
    de("ayrıştırma · PETEKLER satırı YOKSA None",
       None, ayristir(saglam.replace("PETEKLER      : 3805\n", "")))
    de("ayrıştırma · TOPLAM satırı YOKSA None",
       None, ayristir(re.sub(r"^TOPLAM.*$", "", saglam, flags=re.M)))
    de("ayrıştırma · BOŞ çıktı None", None, ayristir(""))
    de("ayrıştırma · benzer ama BAŞKA satır yakalanmaz",
       None, ayristir("  PETEKLER      : 3805\nTOPLAM nokta 1 | PETEKSIZ 0\n"))

    # 🔴 YALNIZ ÇIKIŞ KODU karşılaştırılıyor. İlk yazımda tuple'ın tamamı
    #   (`(0, [])`) beklenmişti ve dal öttü — kusur `hukum`da değil
    #   BEKLENTİDEYDİ (hüküm satırlarını da döndürüyor). C13② bir kez daha
    #   fonksiyonu değil sınavın kendisini yakaladı; `§11`: *doğru hüküm,
    #   yanlış teşhisle gelebilir* — teşhis ölçülmeden düzeltme yapılmaz.
    de("hüküm · peteksiz 0 → GEÇTİ", 0, hukum(
        {"petek": 3805, "nokta": 3805, "peteksiz": 0, "dosya": 77})[0])
    de("hüküm · peteksiz 1 → İHLAL (E1)", 1, hukum(
        {"petek": 3805, "nokta": 3805, "peteksiz": 1, "dosya": 77})[0])
    de("hüküm · PETEKLER < nokta → İHLAL (E2)", 1, hukum(
        {"petek": 3000, "nokta": 3805, "peteksiz": 0, "dosya": 77})[0])
    de("hüküm · dosya listesi ŞÜPHELİ KISA → ÖLÇÜLEMEDİ", 2, hukum(
        {"petek": 3805, "nokta": 3805, "peteksiz": 0, "dosya": 3})[0])
    return dallar


def hukum(s):
    u"""Sayılardan hüküm. Döner: (çıkış_kodu, [satır…])."""
    satir = []
    kod = 0
    if s["dosya"] < 10:
        satir.append(("⚫", "girdi dosya listesi şüpheli kısa (%d) — "
                            "ayrıştırma kusurlu olabilir" % s["dosya"]))
        return (2, satir)
    # E1 — sıfır tolerans
    if s["peteksiz"] == 0:
        satir.append(("🟢", "E1 · peteksiz nokta 0 (kontrol grubu 7B: 0) — GERİLEME YOK"))
    else:
        satir.append(("🔴", "E1 · peteksiz nokta %d — koşu 7B'de 0'DI. "
                            "YENİ KOŞU NOKTA KAYBETMİŞ." % s["peteksiz"]))
        kod = 1
    # E2 — ilişki, sabit sayı değil
    if s["petek"] == s["nokta"]:
        satir.append(("🟢", "E2 · PETEKLER (%d) = girdi noktası (%d)" % (s["petek"], s["nokta"])))
    else:
        satir.append(("🔴", "E2 · PETEKLER %d ≠ girdi noktası %d (fark %d)"
                            % (s["petek"], s["nokta"], s["nokta"] - s["petek"])))
        kod = 1
    return (kod, satir)


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME — sahte çıktıyla zorlanan dallar\n")
        kotu = 0
        dallar = atesleme()
        for ad, bekle, olc, ok in dallar:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(48) +
                  "beklenen %r · ölçülen %r" % (bekle, olc))
            if not ok:
                kotu += 1
        print("\n%d/%d dal ateşledi" % (len(dallar) - kotu, len(dallar)))
        return 1 if kotu else 0

    if not os.path.exists(os.path.join(KOK, ALET)):
        print("⚫ ÖLÇÜLEMEDİ — yetkili alet yok: " + ALET)
        return 2
    try:
        ham = subprocess.run(["node", ALET], cwd=KOK, capture_output=True,
                             timeout=900)
    except Exception as e:                       # noqa: BLE001
        print("⚫ ÖLÇÜLEMEDİ — alet koşturulamadı: %s" % e)
        return 2
    metin = ham.stdout.decode("utf-8", "replace")
    print("═" * 74)
    print("SINAV-KOSU8 · Ö9 GERİLEME (peteksiz nokta)")
    print("═" * 74)
    print("yetkili alet : " + ALET + "   (çıkış kodu %d)" % ham.returncode)
    s = ayristir(metin)
    if s is None:
        print("\n⚫ ÖLÇÜLEMEDİ — aletin çıktısı beklenen biçimde değil.")
        print("   🔴 Bu «temiz» DEĞİLDİR ve «çürüdü» de değildir. Alet")
        print("      değişmiş olabilir; çıktısı elle okunmalı.")
        print("   --- aletin ilk 15 satırı ---")
        for satir in metin.splitlines()[:15]:
            print("   | " + satir)
        return 2
    print("girdi dosyası: %d · girdi noktası: %d · PETEKLER: %d · peteksiz: %d"
          % (s["dosya"], s["nokta"], s["petek"], s["peteksiz"]))
    print("")
    kod, satirlar = hukum(s)
    for isaret, ne in satirlar:
        print("  " + isaret + " " + ne)
    print("")
    if kod == 0:
        print("🟢 GEÇTİ — gerileme yok")
    elif kod == 1:
        print("🔴 KABUL EDİLMEZ — YAYIN YAPILMAZ")
    else:
        print("⚫ EKSİK ÖLÇÜM — «temiz» DEĞİL")
    return kod


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())

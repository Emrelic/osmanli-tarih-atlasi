# -*- coding: utf-8 -*-
"""DURUM TAHTASI — bütün oturumların hâlini TEK KOMUTLA gösterir.

🔴 NİÇİN VAR — Emre'nin teklifi (13 Ağustos 2026):
    "Sen bu işçilerin şartnamelerine ara sıra mesaj atma konusunda kural
     yazsan daha mantıklı değil mi:
       1) ben oturum olarak buradayım, emir ve görüşlerinize hazırım
       2) iş istiyorum
       3) iş promptu ulaştı, çalışmaya başlıyorum
       4) iş üstündeyim, çalışıyorum
       5) iş bitti, çıktılar raporlar şunlardır
       6) iş bitti ve bir süredir boşum — yeni iş mi, hazırda mı, emekli mi?"

Fikir doğru. AMA aynı gün ölçüldü: **`send_message` "sent" diyor ve HEDEFE
VARMIYOR.** Altı oturum bunu bağımsız olarak doğruladı. ⇒ Altı hâl MESAJ
olarak taşınamaz; DOSYAYA yazılır ve buradan taranır.

📌 Ve böylesi daha iyi, çünkü `CLAUDE.md §11`in on birinci dersi tam bunu
söylüyor: *"bir bilgi serbest metin olarak inerse inmiş sayılmaz — bir `if`
ile sorulamıyorsa kayıt vardır, VERİ YOKTUR."* Bir mesaj okunur ve unutulur;
bir damga **sorgulanır.**

## SÖZLEŞME — her oturum kendi ilerleme dosyasının İLK SATIRINA yazar
    <!-- DURUM: CALISIYORUM | 2026-08-13 22:15 | yer_id 726 -> 402 -->

    alanlar:  HAL | ZAMAN (YYYY-AA-GG SS:DD) | TEK SATIR ÖZET
    HAL, altı kelimeden biri:
        HAZIR        buradayım, emir bekliyorum          (Emre'nin ①)
        IS-ISTIYORUM boştayım ve iş talep ediyorum        (②)
        ALDIM        şartname ulaştı, başlıyorum          (③)
        CALISIYORUM  iş üstündeyim                        (④)
        BITTI        teslim ettim, çıktılar raporda       (⑤)
        BOSTA        iş bitti, bir süredir boşum          (⑥)

⚠️ Damga DEĞİŞTİKÇE güncellenir — bir kez yazılıp unutulan damga, damga
değil YALANDIR. `--bayat` seçeneği tam bunu ölçer.

Kullanım:
    py arac/durum_tahtasi.py            # tahtayı bas
    py arac/durum_tahtasi.py --bayat 4  # 4 saatten eski damgaları işaretle
    py arac/durum_tahtasi.py --eksik    # damgası HİÇ OLMAYAN dosyaları listele
"""
import datetime
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "oturumlar")

HALLER = ["HAZIR", "IS-ISTIYORUM", "ALDIM", "CALISIYORUM", "BITTI", "BOSTA"]
IM = {
    "HAZIR": "🟢", "IS-ISTIYORUM": "🟡", "ALDIM": "🔵",
    "CALISIYORUM": "⏳", "BITTI": "✅", "BOSTA": "🟡",
}
# Emre'nin numaralari — tahtada gorunsun ki sozlesme ekranda hatirlansin
NO = {"HAZIR": "①", "IS-ISTIYORUM": "②", "ALDIM": "③",
      "CALISIYORUM": "④", "BITTI": "⑤", "BOSTA": "⑥"}

KALIP = re.compile(
    r"<!--\s*DURUM:\s*([A-ZĞÜŞİÖÇ\-]+)\s*\|\s*([\d]{4}-[\d]{2}-[\d]{2}[ T][\d]{2}:[\d]{2})"
    r"\s*(?:\|\s*(.*?))?\s*-->", re.I)


def dosyalar():
    if not os.path.isdir(DIZIN):
        return
    for ad in sorted(os.listdir(DIZIN)):
        if ad.upper().endswith("-ILERLEME.MD"):
            yield ad, os.path.join(DIZIN, ad)


def oku(yol):
    """İlk 40 satırda damga arar. Dosyanın tamamı taranmaz: damga BAŞTA
    olmalı — sonuna gömülen damga, gözle bulunamaz ve amacını yitirir."""
    try:
        with io.open(yol, encoding="utf-8") as f:
            bas = "".join([next(f, "") for _ in range(40)])
    except Exception as e:
        return None, None, "OKUNAMADI: %s" % e
    m = KALIP.search(bas)
    if not m:
        return None, None, None
    hal = m.group(1).upper().replace("İ", "I")
    return hal, m.group(2).replace("T", " "), (m.group(3) or "").strip()


def yas_saat(zaman, simdi):
    try:
        t = datetime.datetime.strptime(zaman.strip()[:16], "%Y-%m-%d %H:%M")
    except Exception:
        return None
    return (simdi - t).total_seconds() / 3600.0


def main(argv):
    bayat_esik = 4.0
    if "--bayat" in argv:
        i = argv.index("--bayat")
        if i + 1 < len(argv):
            try:
                bayat_esik = float(argv[i + 1])
            except ValueError:
                pass
    yalniz_eksik = "--eksik" in argv

    # ⚠️ Date.now() yerine tek okuma: aynı koşuda tutarlı yaş hesabı
    simdi = datetime.datetime.now()
    satir, eksik, bilinmeyen = [], [], []

    for ad, yol in dosyalar():
        oturum = ad[:-len("-ILERLEME.md")]
        hal, zaman, ozet = oku(yol)
        if hal is None:
            eksik.append((oturum, ozet or "damga YOK"))
            continue
        if hal not in HALLER:
            bilinmeyen.append((oturum, hal))
        satir.append((oturum, hal, zaman, ozet, yas_saat(zaman, simdi)))

    if yalniz_eksik:
        print("DAMGASI OLMAYAN DOSYALAR — %d" % len(eksik))
        for o, s in eksik:
            print("   %-24s %s" % (o, s))
        return 0 if not eksik else 1

    print("=" * 74)
    print("DURUM TAHTASI — %s" % simdi.strftime("%Y-%m-%d %H:%M"))
    print("=" * 74)
    if not satir and not eksik:
        print("(oturumlar/ altında hiç ilerleme dosyası yok)")
        return 0

    sira = {h: i for i, h in enumerate(HALLER)}
    for o, hal, zaman, ozet, yas in sorted(
            satir, key=lambda r: (sira.get(r[1], 9), -(r[4] or 0))):
        bayat = "🔴 BAYAT" if (yas is not None and yas > bayat_esik) else ""
        yas_m = ("%4.1f sa" % yas) if yas is not None else "  ?   "
        print("%s %s %-22s %-13s %s %s" % (
            IM.get(hal, "❔"), NO.get(hal, " "), o[:22], hal, yas_m, bayat))
        if ozet:
            print("        %s" % ozet[:64])

    if eksik:
        print("\n🔴 DAMGASIZ — %d dosya (sözleşme: ilk satıra DURUM damgası)" % len(eksik))
        for o, s in eksik:
            print("   %-24s %s" % (o, s))
    if bilinmeyen:
        print("\n⚠️ TANINMAYAN HAL — %d" % len(bilinmeyen))
        for o, h in bilinmeyen:
            print("   %-24s '%s' — geçerli: %s" % (o, h, " · ".join(HALLER)))

    # 🔴 Koordinatörün asıl sorusu: KİM BEKLİYOR?
    bekleyen = [r for r in satir if r[1] in ("HAZIR", "IS-ISTIYORUM", "BOSTA")]
    calisan = [r for r in satir if r[1] in ("ALDIM", "CALISIYORUM")]
    bayatlar = [r for r in satir if r[4] is not None and r[4] > bayat_esik]
    print("\n" + "-" * 74)
    print("çalışan %d · İŞ BEKLEYEN %d · damgası bayat %d (>%.0f sa) · damgasız %d"
          % (len(calisan), len(bekleyen), len(bayatlar), bayat_esik, len(eksik)))
    if bekleyen:
        print("🟡 İŞ BEKLEYENLER: " + ", ".join(r[0] for r in bekleyen))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

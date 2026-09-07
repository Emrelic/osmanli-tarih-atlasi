# -*- coding: utf-8 -*-
u"""KOŞU 8 BİTİŞ TAHMİNİ — 7B'nin KENDİ aşama tablosundan türetilir.

══════════════════════════════════════════════════════════════════════════
🔴 BU BİR ÖLÇÜM DEĞİL, BİR PROJEKSİYONDUR — ve damgası budur.
══════════════════════════════════════════════════════════════════════════
`kosu8.log`un kendi taban satırı BAYAT: *"ölçülen en uzun koşu 16s09dk"*.
Gerçek taban koşu 7B = **16s49dk** (`9de4c32`, 7 Eylül 07:15) ve 7B
BUGÜNKÜ girdi büyüklüğüyle koştu. `§11`: *bir süre kaydı, ölçüldüğü
GİRDİ BÜYÜKLÜĞÜYLE birlikte taşınır.*

Ama basit bir "başlangıç + 16s49dk" toplaması da yanlış olurdu: koşu 8
ölçülebilir biçimde **daha yavaş** ilerliyor. Bu betik onu 7B'nin kendi
aşama tablosundan ve koşu 8'in İKİ GÖZLENMİŞ KİLOMETRE TAŞINDAN türetir.

KİLOMETRE TAŞLARI — ikisi de gerçekleşmiş bir olaya bağlı (`§10`):
    veri-kaynak/motor_kara.geojson   mtime   ← "Motorun çizdiği kara" aşaması
    data/bolgeler.js                 mtime   ← "Bölge sınırları" aşaması
🔴 `§11`: *mtime bir ÖLÇÜM değil bir DAMGADIR.* Burada damga olarak
   kullanılıyor — dosyanın İÇERİĞİ değil, YAZILDIĞI AN soruluyor; bu
   damganın taşıdığı tek bilgi de odur.

ÇIKARIM ZİNCİRİ VE KIRILGANLIĞI — açıkça:
    ① 7B'nin aşama tablosu okunur (kosu7-*.log)
    ② Koşu 8'in iki kilometre taşı, tablodaki karşılıklarıyla eşlenir
    ③ İki noktadan bir HIZ ORANI (r) ve bir ÖN SÜRE (P) çözülür
    🔴 İKİ NOKTADAN İKİ BİLİNMEYEN — hata payı YOK, gürültü doğrudan
       sonuca geçer. O yüzden r iki AYRI yoldan da hesaplanıp
       aralık olarak verilir, tek sayı olarak DEĞİL.

KOŞULUŞ:  py denetim/SINAV-KOSU8-BITIS-0907.py
"""
from __future__ import unicode_literals

import datetime as dt
import glob
import io
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KOSU8_BASI = dt.datetime(2026, 9, 7, 11, 17, 46)

# aşama adı → tablodaki ada ait ÖNEK (tablo adı kesiyor)
KILOMETRE = [
    ("motor_kara", "veri-kaynak/motor_kara.geojson", "Motorun çizdiği kara"),
    ("bolgeler", "data/bolgeler.js", "Bölge sınırları"),
]

RX = re.compile(
    r"^\s{4,}(?P<ad>\S.*?)\s{2,}"
    r"(?:(?P<s>\d+)s\s+)?(?:(?P<d>\d+)dk\s+)?(?:(?P<n>\d+)sn)\s+"
    r".*?%\s*[\d.]+\s*$")


def saniye(m):
    return (int(m.group("s") or 0) * 3600 + int(m.group("d") or 0) * 60 +
            int(m.group("n") or 0))


def sure(sn):
    sn = int(sn)
    return "%ds %02ddk" % (sn // 3600, (sn % 3600) // 60)


def main():
    loglar = sorted(glob.glob(os.path.join(KOK, "kosu7-*.log")),
                    key=os.path.getmtime, reverse=True)
    tablo = []
    kaynak = None
    for yol in loglar:
        with io.open(yol, encoding="utf-8", errors="replace") as f:
            satirlar = f.read().splitlines()
        gecici = []
        for s in satirlar:
            if "ÇAPRAZ SAYAÇ" in s:
                break
            m = RX.match(s)
            if m:
                gecici.append((m.group("ad").strip(), saniye(m)))
        if len(gecici) >= 10:
            tablo, kaynak = gecici, yol
            break
    if not tablo:
        print("⚫ ÖLÇÜLEMEDİ — 7B aşama tablosu ayrıştırılamadı")
        return 2

    toplam = sum(x[1] for x in tablo)
    print("═" * 74)
    print("KOŞU 8 BİTİŞ PROJEKSİYONU")
    print("═" * 74)
    print("taban tablo : %s" % os.path.basename(kaynak))
    print("aşama sayısı: %d · aşama süresi toplamı: %s (%.1f dk)"
          % (len(tablo), sure(toplam), toplam / 60.0))
    print("")
    print("EN AĞIR BEŞ AŞAMA (7B):")
    for ad, sn in sorted(tablo, key=lambda x: -x[1])[:5]:
        print("   %-42s %10s  %%%4.1f" % (ad[:42], sure(sn), 100.0 * sn / toplam))
    print("")

    # kilometre taşları
    kt = []
    for _, dosya, asama_onek in KILOMETRE:
        yol = os.path.join(KOK, dosya.replace("/", os.sep))
        if not os.path.exists(yol):
            print("⚫ %s YOK — atlandı" % dosya)
            continue
        an = dt.datetime.fromtimestamp(os.path.getmtime(yol))
        gecen = (an - KOSU8_BASI).total_seconds()
        # 7B'de o aşamaya KADARKİ (o aşama DÂHİL) kümülatif süre
        kum = 0
        bulundu = False
        for ad, sn in tablo:
            kum += sn
            if ad.startswith(asama_onek[:20]):
                bulundu = True
                break
        if not bulundu:
            print("⚫ aşama tabloda bulunamadı: %s" % asama_onek)
            continue
        kt.append((dosya, an, gecen, kum))
        print("KİLOMETRE · %-30s yazıldı %s → koşu 8'de %6.1f dk"
              % (dosya, an.strftime("%H:%M:%S"), gecen / 60.0))
        print("            7B'de o ana kadarki aşama süresi: %6.1f dk" % (kum / 60.0))

    if len(kt) < 2:
        print("\n⚫ ÖLÇÜLEMEDİ — iki kilometre taşı gerekiyor")
        return 2

    (_, _, g1, k1), (_, _, g2, k2) = kt[0], kt[1]
    if k2 == k1:
        print("\n⚫ ÖLÇÜLEMEDİ — iki aşama aynı kümülatife düşüyor")
        return 2
    r = (g2 - g1) / float(k2 - k1)          # iki noktadan hız oranı
    P = g1 - k1 * r                          # ön süre (import/veri yükleme)
    kalan_7b = toplam - k2                   # bolgeler'den SONRAKİ aşama süresi

    print("")
    print("─" * 74)
    print("ÇÖZÜM (iki nokta, iki bilinmeyen):")
    print("   hız oranı r = %.2f   (1,00 = 7B ile aynı hız)" % r)
    print("   ön süre  P = %.1f dk (aşama dışı: import + veri + maske)" % (P / 60.0))
    print("   kalan aşama süresi (7B ölçeğinde) = %s (%.1f dk)"
          % (sure(kalan_7b), kalan_7b / 60.0))
    print("")
    print("BİTİŞ TAHMİNİ — ARALIK, tek sayı DEĞİL:")
    for etiket, rr in (("7B hızıyla (r=1,00)", 1.0),
                       ("ölçülen hızla (r=%.2f)" % r, r)):
        bitis = KOSU8_BASI + dt.timedelta(seconds=P + (k2 + kalan_7b) * rr)
        print("   %-26s → %s   (toplam %s)"
              % (etiket, bitis.strftime("%d %b %H:%M"), sure(P + (k2 + kalan_7b) * rr)))
    print("")
    print("🔴 KIRILGANLIK — açıkça:")
    print("   · r İKİ noktadan çözüldü; hata payı YOK, gürültü doğrudan geçer.")
    print("   · CPU paylaşımı değişirse r değişir (bu makinede çok oturum var).")
    print("   · `vl` çapası koşu 8'e YENİ iş ekliyor; 7B tablosunda karşılığı YOK.")
    print("   ⇒ Bu bir TAHMİN. Bekçi yine GERÇEKLEŞMİŞ olaya bağlanmalı:")
    print("     tetik `data/donemler.js`, süreye DEĞİL (§10).")
    print("")
    print("🟢 SAĞLAM OLAN TEK ŞEY — ve karar bunun üzerine kurulmalı:")
    print("   7B'nin tablosuna göre `bolgeler.js`ten SONRAKİ iş, koşunun")
    print("   aşama süresinin %%%.1f'i. Koşu 8 o noktaya %.1f dk'da vardı."
          % (100.0 * kalan_7b / toplam, g2 / 60.0))
    print("   ⇒ Koşu 8'in ÖNÜNDE işin BÜYÜK ÇOĞUNLUĞU duruyor.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())

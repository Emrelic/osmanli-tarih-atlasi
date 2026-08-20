# -*- coding: utf-8 -*-
"""EKLEYİCİ KAPI — ÖLÇÜMDEN ÖNCE YAZILMIŞ ÖNGÖRÜ.

    damga        : 2026-08-20 03:0x  (ölçüm HENÜZ yapılmadı)
    yazan        : PAKET 0019 TASNIF  (kapı kalemi)
    taban        : kosu_gunluk/①_harita_üretimi.log:1576
                   "🚪 EKLEYİCİ KAPI: 69198 petek-gün katıldı ·
                    250 ÇEKİŞMELİ (boş bırakıldı) · 1532 gün hesaplandı"
                   koşu 6404f8f · r2622 · 20 Ağu 02:10

🔴 NİÇİN ÖNCE YAZILIYOR (`CLAUDE.md §11`):
   Sonradan yazılan beklenti, ölçümü gördükten sonra farkında olmadan ona
   göre şekillenir ve HİÇBİR ZAMAN yanlış çıkmaz — yani hiçbir şey öğretmez.
   Önce yazılan yanlış çıkabilir, ve ancak yanlış çıkabilen bir şey bilgi
   taşır. Aşağıdaki her kalemin yanında MAZERETİ olup olmadığı da yazılı:
   mazeret de önceden yazılmazsa, her yanlış öngörü sonradan açıklanabilir
   hâle gelir ve hiçbiri çürümez.

═══════════════════════════════════════════════════════════════════════════
0 · ÖLÇÜLMÜŞ OLAN — bunlar ÖNGÖRÜ DEĞİL, kodu okuyarak ÇIKARILDI
═══════════════════════════════════════════════════════════════════════════
K1  `_dolgu_kumesi` (uret_petek.py:3568) `out[...].append(j)` yapıyor ve
    `j` bir SAHİPSİZ NOKTANIN `YERLER` indeksidir.
    ⇒ Kapı yalnız "sahipsiz noktası olan" boşluğu (C sınıfı) kapatabilir.
    ⇒ A1 tavanının KESTİĞİ toprağın (B sınıfı) petek indeksi YOKTUR;
      kapı ona YAPISAL OLARAK dokunamaz. İşçinin ① bulgusu KOD DÜZEYİNDE
      DOĞRULANDI (ölçüm, öngörü değil).

K2  Kabul şartı (:3534): `bos ∈ {devletsiz, hata}` VEYA
    (`tur == "bolge"` VE `bos` hiç yazılmamış).
    ⇒ `devletsiz` kayıtların `bos` alanı DOLU olduğu için ikinci şart
      onları kurtarmaz. `devletsiz` kümeden çıkarılırsa 143 kaydın
      143'ü kapı dışına düşer. (Ölçüm, öngörü değil.)

═══════════════════════════════════════════════════════════════════════════
1 · ÖNGÖRÜLER — ölçümden ÖNCE, sayıyla
═══════════════════════════════════════════════════════════════════════════
"""

ONGORU = [

    # ---------------------------------------------------------------- ③
    dict(
        no="Ö1",
        konu="③ `devletsiz` kaldırılırsa petek-gün DÜŞÜŞÜ",
        tahmin="45.000 - 55.000 petek-gün düşer (%65-80). Nokta tahminim: 50.000.",
        gerekce=(
            "143 `devletsiz` kaydın çoğu çöl/bozkır 'bölge' noktasıdır ve "
            "ömrü 1281-1923'ü kaplar; yani 1532 günün NEREDEYSE HEPSİNDE "
            "sahnededir. Uygun havuzun geri kalanı (`hata` + bos'suz `bolge`) "
            "hem daha az hem daha kısa ömürlü olmalı."),
        mazeret="VAR — uygun havuzun bileşimini (devletsiz / hata / bolge) ÖLÇMEDİM.",
    ),

    dict(
        no="Ö2",
        konu="③ sonrası ÇEKİŞMELİ sayacı",
        tahmin="250 → 60-150 arasına düşer (aday havuz küçüldüğü için).",
        gerekce="Çekişme yalnız uygun boş noktalarda doğuyor; havuz küçülünce azalır.",
        mazeret="VAR — çekişmenin hangi kayıtlarda doğduğunu ölçmedim.",
    ),

    # ---------------------------------------------------------------- ②
    dict(
        no="Ö3",
        konu="② puanı peteğe değil ALANA uygulamak: petek-gün sayacına etkisi",
        tahmin="petek-gün sayacı DÜŞMEZ (0 ile %3 arası). Düşen şey ALAN olur.",
        gerekce=(
            "② 'peteği, puanın gerçekten geçtiği bölgeyle KES' demektir. "
            "Kesişim boş çıkmadıkça petek yine katılır; yalnız katılan "
            "GEOMETRİ küçülür. Sayaç üyelik sayar, alan saymaz."),
        mazeret="YOK — bu, mekanizmanın doğrudan sonucu. Tutmazsa ② hakkındaki "
                "anlayışım yanlış demektir.",
    ),

    dict(
        no="Ö4",
        konu="② uygulanınca Libya kutusunda düşen ALAN",
        tahmin="Boyalı 742 hücrenin 134'ü (%18) düşer — ÇÖL oturumunun ölçtüğü "
               "92.744 km². 400 km ufkunun dışındaki 19 hücrenin 19'u da düşer.",
        gerekce="ÇÖL oturumu bu iki sayıyı zaten ölçtü; ② tam o hücreleri kesiyor.",
        mazeret="VAR — ÇÖL'ün ızgarasını (0,25°) birebir tekrarlamayabilirim.",
    ),

    # ---------------------------------------------------------------- ①
    dict(
        no="Ö5",
        konu="🔴 ② ve ③ uygulandıktan SONRA Basra-Bağdat boşluğu",
        tahmin="21.599 km²'lik boşluk AYNEN KALIR — kapanan alan 0 km², "
               "kapanan hücre 0/51.",
        gerekce=(
            "ÇÖL oturumu 250 km içinde TEK BİR SAHİPSİZ NOKTA olmadığını "
            "ölçtü. Kapı sahipsiz NOKTA peteği dağıtır; orada dağıtacak "
            "petek yok. ⇒ ② de ③ de o boşluğa DOKUNAMAZ."),
        mazeret="YOK — mazereti olan bir öngörü değil. Tutmazsa ① teşhisi "
                "(B/C sınıfı terslemesi) yanlış demektir ve iş baştan kurulur.",
    ),

    dict(
        no="Ö6",
        konu="③ uygulanınca ÇÖL raporunun 1 ve 2 numaralı noktaları",
        tahmin="İKİSİ DE BOŞA DÖNER. (1: Serîr peteği · 2: Vâv el-Kebîr peteği — "
               "ikisi de `bos:devletsiz`.)",
        gerekce="ÇÖL ölçtü: o iki noktanın boyanması yalnız kapıdan geliyor; "
                "ne kendi puanları ne A1 tavanı yetişiyor.",
        mazeret="YOK — kod ve rapor birlikte bunu söylüyor.",
    ),

    dict(
        no="Ö7",
        konu="🔴 EMRE'NİN İKİ ŞİKÂYETİ — hangisi hangi çareyle kapanır",
        tahmin=(
            "③ tek başına: 'çöl niçin Osmanlı' KAPANIR · 'Basra-Bağdat boş' "
            "KAPANMAZ.  ② tek başına: 'çöl' KISMEN kapanır (%18) · 'Basra' "
            "KAPANMAZ.  ②+③ birlikte: yine 'Basra' KAPANMAZ. "
            "⇒ İKİ ŞİKÂYETİ BİRDEN KARŞILAYAN ÇARE BU İKİSİ DEĞİL; "
            "B sınıfı için AYRI bir mekanizma gerekir."),
        gerekce="Ö5'in doğrudan sonucu.",
        mazeret="YOK.",
    ),

    dict(
        no="Ö8",
        konu="⚠️ GERİLİM — ③ Emre'nin ESKİ şikâyetini geri getirir mi",
        tahmin=(
            "Getirir ama SINIRLI: ③ sonrası 1703-08-22'de Osmanlı doğrudan "
            "alanı %4-10 arası düşer. Çöl yeniden 'bomboş' görünmez, çünkü "
            "`hata` ve bos'suz `bolge` kayıtları kapıda KALIR."),
        gerekce="Kapının katılımının tamamı devletsiz değil; havuzun bir kısmı "
                "başka etiketlerden geliyor.",
        mazeret="VAR — havuz bileşimini ölçmedim (Ö1 ile aynı bilinmez).",
    ),
]


def bas():
    print("EKLEYİCİ KAPI — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)")
    print("taban: 69198 petek-gün · 250 çekişmeli · 1532 gün · r2622")
    print("=" * 74)
    for o in ONGORU:
        print("\n" + o["no"] + "  " + o["konu"])
        print("   tahmin  : " + o["tahmin"])
        print("   gerekçe : " + o["gerekce"])
        print("   mazeret : " + o["mazeret"])
    print("\n" + "=" * 74)
    mazeretsiz = [o["no"] for o in ONGORU if o["mazeret"].startswith("YOK")]
    print("MAZERETSİZ kalemler: " + ", ".join(mazeretsiz) +
          "  — bunlar tutmazsa TEŞHİS yanlıştır, ölçüm değil.")


if __name__ == "__main__":
    import sys, io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                                  errors="replace")
    bas()

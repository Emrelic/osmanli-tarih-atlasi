# -*- coding: utf-8 -*-
"""ÖRTME (occlusion) — ÖLÇÜMDEN ÖNCE YAZILMIŞ ÖNGÖRÜ.

    damga  : 2026-08-21 04:5x  (ölçüm HENÜZ yapılmadı, uygulama HENÜZ yapılmadı)
    yazan  : KRONOLOJİ ŞEMASI / OSMANGAZI / EVREN DOĞRULAMA (aynı oturum,
             koordinatörün M-0873/M-0895/bu mesajdaki üç adı)
    taban  : denetim/BULGULAR-DORDUNCU.md (dördüncü sınıf ölçümü, commit
             3240fb8) — bu öngörü O ölçümün ÜSTÜNE, aynı replika yöntemiyle
             kuruluyor.

🔴 NİÇİN ÖNCE YAZILIYOR (CLAUDE.md §11): sonradan yazılan beklenti ölçümü
gördükten sonra farkında olmadan ona göre şekillenir ve hiçbir zaman yanlış
çıkmaz — yani hiçbir şey öğretmez. Her kalemin MAZERETİ ayrıca yazılı: mazeret
de önceden yazılmazsa her yanlış öngörü sonradan açıklanabilir hâle gelir.

═══════════════════════════════════════════════════════════════════════════
0 · TARİF — Emre'nin kuralı, birebir
═══════════════════════════════════════════════════════════════════════════
"Bir toprağın en yakınındaki yerleşim merkezlerini bir çizgi ile
birleştirdikten sonra bu çizginin arkasında kalan yerleşim yerleri
puanlamaya katılmaz. Doğuda 300 · 305 · 310 km'de üç yerleşim varsa yalnız
en yakındaki 1 tanesi katılır."

Uygulama: çevre N dilime bölünür (taban N=12, 30°/dilim). Her dilimde
YALNIZ en yakın sahip nokta puan verir — DEVLETİ NE OLURSA OLSUN (occlusion
geometrik bir olgu, siyasi değil: yakın bir köy hangi devletin olursa
olsun, arkasındaki uzak köyün görüş hattını KESER).

═══════════════════════════════════════════════════════════════════════════
1 · ÖNGÖRÜLER
═══════════════════════════════════════════════════════════════════════════

O1  MEVCUT KAPI (bugünkü ③, bos:hata/tur:bolge, taban 69.198 petek-gün)
    ÜSTÜNDEKİ ETKİ
    tahmin: %10-30 arası DÜŞER (nokta tahminim %18).
    gerekçe: Bugünkü puanlama çok-noktalı toplamla eşiğe ulaşan (200-400 km
             halkasından 2p+1p+1p gibi) kayıtların bir kısmı, örtme sonrası
             o noktaların bazısı aynı dilimde occlude olacağı için TOPLAM
             puan düşecek, bazı "eşik tam 4" kayıtlar eşiğin ALTINA inecek.
             Tek-nokta 200km-içi (4p, tek başına eşiği geçen) kayıtlar
             ETKİLENMEZ — örtme yalnız AYNI DİLİMDEKİ farklı-mesafe
             noktaları eler, en yakını hep kalır.
    mazeret: VAR — bugünkü 69.198'in kaçının "tek nokta 4p" kaçının
             "çok nokta toplamı" olduğunu ÖLÇMEDİM, oranı bilmiyorum.

O2  DÖRDÜNCÜ SINIF "kapanabilir" (taban 124.218 petek-gün, BULGULAR-DORDUNCU
    §2) ÜSTÜNDEKİ ETKİ
    tahmin: %15-35 arası DÜŞER (nokta tahminim %22) — O1'den BÜYÜK oranda,
            çünkü dördüncü sınıf noktalar (sehir/liman/kale, gerçek
            yerleşimler) daha YOĞUN bir dağılımda, yani aynı dilime düşen
            komşu sayısı daha yüksek olmalı.
    mazeret: VAR — yoğunluk varsayımı ÖLÇÜLMEDİ, kıyaslamalı bir çıkarım.

O3  ÇEKİŞMELİ sayaç (mevcut kapı tabanı 250, dördüncü sınıf tabanı 1.177)
    tahmin: İKİSİ DE ARTAR (%10-40 arası artış). Örtme toplam puanı
            küçülttüğü için "en yüksek puanlı TEK devlet" farkı da küçülür,
            beraberlik ihtimali YÜKSELİR.
    mazeret: YOK — bu, "toplam puan azalır" öngörüsünün (O1/O2) doğrudan
             mantıksal sonucu. O1/O2 tutarsa bu da tutmalı.

O4  NÂSIRİYE TEST VAKASI (1703-08-22, koordinatörün bildirdiği OSMANLI 41 ·
    safevi 18, eşik 4)
    tahmin: SONUÇ DEĞİŞMEZ — OSMANLI kazanmaya devam eder. Fark 41-18=23,
            hiçbir tek dilimin taşıyabileceği puan payından (dilim başına
            en fazla 4p, 12 dilimde teorik tavan 48p ama gerçekte çok daha
            az) büyük bir marj var; örtme margin'i daraltır ama YÖN
            DEĞİŞTİRMEZ.
    mazeret: VAR — Nâsıriye'nin gerçek 12-dilim dağılımını (kaç OSMANLI kaç
             safevi nokta hangi dilimde) ÖLÇMEDİM, yalnız toplam puanların
             büyüklük farkına dayanıyorum.

O5  🔴 DİLİM GENİŞLİĞİ DUYARLILIĞI (N=8/45° · N=12/30° · N=24/15°) —
    MAZERETSİZ
    tahmin: MONOTON — N küçüldükçe (dilim GENİŞLEDİKçe) düşüş oranı BÜYÜR;
            N büyüdükçe (dilim DARALDIKÇA) düşüş oranı KÜÇÜLÜR, N→çok büyük
            limitte örtmesiz duruma yakınsar. N=8'de O1/O2'nin düşüş oranı
            N=24'ün EN AZ 1,5 KATI olmalı.
    mazeret: YOK — bu, dilim tanımının doğrudan matematiksel sonucu.
             Tutmazsa uygulamamda bir mantık hatası var demektir.

O6  🔴 HESAPLAMA MALİYETİ — MAZERETSİZ
    tahmin: Örtme, mevcut `_dolgu_kumesi` maliyetinin ÜZERİNE EN FAZLA
            %50 ek süre bindirir (bearing hesabı da aynı numpy matris
            boyutunda, O(bos×sahip), yalnız bir atan2 + bucket geçişi
            ekleniyor — yeni bir dış döngü YOK).
    mazeret: YOK — işlemin karmaşıklık sınıfı değişmiyor, yalnız sabit
             çarpanı büyüyor. Tutmazsa tasarımımda gizli bir O(n²) daha
             var demektir.

O7  ÇEKİŞMENİN DEVLET DAĞILIMI (O2'nin global coğrafya bulgusuyla
    tutarlılık)
    tahmin: Örtme sonrası kapanabilir kalan petek-günlerin devlet dağılımı
            YİNE GLOBAL kalır (tek bir devlet payı %10'u geçmez) — örtme
            geometrik bir süzgeç, belli bir devleti hedeflemiyor.
    mazeret: VAR — yeniden hesaplamadan ÖLÇMEDİM, yalnız mekanizmanın
             devlet-körü olduğu tasarımına dayanıyor.

═══════════════════════════════════════════════════════════════════════════
2 · KARNE — ölçümden SONRA doldurulacak (şu an BOŞ, damga ölçüm sonrası)
═══════════════════════════════════════════════════════════════════════════
# O1  ...
# O2  ...
# O3  ...
# O4  ...
# O5  ...
# O6  ...
# O7  ...


def bas():
    for satir in (
        "O1  mevcut kapı düşüşü: %10-30 (nokta %18) — mazeret VAR",
        "O2  dördüncü-sınıf kapanabilir düşüşü: %15-35 (nokta %22) — mazeret VAR",
        "O3  çekişmeli ARTAR %10-40 — MAZERETSİZ",
        "O4  Nâsıriye SONUCU DEĞİŞMEZ (OSMANLI kazanır) — mazeret VAR",
        "O5  dilim daraldıkça düşüş küçülür (monoton) — MAZERETSİZ",
        "O6  maliyet artışı ≤%50 — MAZERETSİZ",
        "O7  çekişme sonrası dağılım GLOBAL kalır — mazeret VAR",
    ):
        print(satir)


if __name__ == "__main__":
    import sys, io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                                  errors="replace")
    bas()

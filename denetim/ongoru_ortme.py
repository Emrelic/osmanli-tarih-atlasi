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
2 · KARNE — ölçüldü 2026-08-21 05:xx (384/1536 gün örneklem, %25 — açıkça
    söyleniyor, tam ızgara DEĞİL). Replika: scratchpad ortme_olcum.py +
    ortme_olcum2.py (havuz ayrımı + Nâsıriye tek-gün testi).
═══════════════════════════════════════════════════════════════════════════
# O1  🔴 ÇÜRÜDÜ — YÖN BİLE YANLIŞ. Mevcut kapı (C sınıfı, bos:hata/
#     tur:bolge) örtme sonrası kapanabilir sayısı DÜŞMEDİ, ARTTI:
#     482 → 527 (+9,3%). Sebep muhtemelen: C sınıfı noktalar seyrek/ıssız
#     olduğu için örtme nadiren puan siliyor, ama sildiği az sayıdaki puan
#     tam ÇEKİŞMEYİ BOZAN puan oluyor (bkz O3). Tahmin ettiğim mekanizma
#     (çok-noktalı toplamın eşiğin altına düşmesi) BU HAVUZDA baskın değil.
#
# O2  🟡 KISMEN ÇÜRÜDÜ — yön doğru (kapanabilir DÜŞTÜ), büyüklük bandımın
#     ÇOK altında: dördüncü sınıf (D4) 31.126 → 29.651 (−4,7%), tahmin
#     bandım %15-35'ti. Aşırı tahmin ettim.
#
# O3  🔴 ÇÜRÜDÜ (mazeretsiz) — HAVUZLAR TERS YÖNDE. D4'te çekişmeli ARTTI
#     (294→391, +33,0%, bandımın içinde) ama C'de AZALDI (67→22, −67,2%).
#     Genel bir "artar" hükmü YANLIŞTI — iki havuzun geometrik yoğunluğu
#     öyle farklı ki örtme ikisine ZIT etki yapıyor.
#
# O4  🟢 TUTTU — Nâsıriye (1703-08-22) ÖLÇÜLDÜ (tek-gün direkt test, örneklem
#     dışı): HAM OSMANLI 41 · safevi 18 (koordinatörün bildirdiğiyle BİREBİR
#     aynı). Örtme sonrası: N=8→16-4 · N=12→24-4 · N=24→29-8. ÜÇÜNDE DE
#     OSMANLI kazanıyor, sonuç DEĞİŞMEDİ — yalnız marj daraldı.
#
# O5  🟢 TUTTU (mazeretsiz) — MONOTON, birleşik havuz N=8/12/24 kapanabilir
#     düşüşü: −%7,3 / −%4,5 / −%2,2. N=8/N=24 oranı 3,3× (istenen eşik
#     ≥1,5×'i rahatça geçiyor).
#
# O6  ⚪ ÖLÇMEDİM (ayrıştırılmadı) — baseline-yalnız ile baseline+örtme
#     süresini AYRI ÖLÇMEDİM (aynı koşuda iç içe hesaplandılar). Örtme
#     hesabının karmaşıklık sınıfı baseline ile AYNI (O(bos×sahip), bir
#     atan2 + 12 dilimlik vektörize argmin ekleniyor) — ama somut bir
#     yüzde veremiyorum, "ölçmedim" diye yazıyorum.
#
# O7  🟢 TUTTU — örtme sonrası (N=12) en büyük tek devlet payı OSMANLI
#     %5,9 (1769/30178) — global kaldı, tek devlete kaymadı.
#
# 📌 EN DEĞERLİ ÇÜRÜME: O1 ve O3. İkisi de "havuzlar aynı yönde tepki
# verir" varsayımına dayanıyordu ve İKİSİ DE YANLIŞ ÇIKTI — mevcut kapı (C)
# ile dördüncü sınıf (D4) örtmeye TERS yönde tepki veriyor. Bu, iki havuzu
# AYRI ölçmeden tek bir "örtme etkisi" sayısı vermenin yanıltıcı olacağını
# gösteriyor; BULGULAR-ORTME.md bu yüzden ikisini AYRI raporluyor.
"""


def bas():
    print("ÖRTME — ÖNGÖRÜ KARNESİ (ölçüldü 2026-08-21, 384/1536 gün örneklem)")
    for satir in (
        "O1  ÇÜRÜDÜ (yön yanlış) — mevcut kapı (C) kapanabilir 482→527 (+9,3%)",
        "O2  KISMEN ÇÜRÜDÜ (yön doğru, büyüklük küçük) — D4 31126→29651 (-4,7%)",
        "O3  ÇÜRÜDÜ (mazeretsiz) — D4 çekişmeli +33,0% ama C çekişmeli -67,2%",
        "O4  TUTTU — Nâsıriye HAM 41-18, örtmeli N12 24-4, OSMANLI hep kazandı",
        "O5  TUTTU (mazeretsiz) — N=8/12/24 düşüş -7,3/-4,5/-2,2%, monoton",
        "O6  ÖLÇMEDİM — maliyet artışı ayrıştırılmadı",
        "O7  TUTTU — en büyük devlet payı %5,9, global kaldı",
    ):
        print(satir)


if __name__ == "__main__":
    import sys, io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                                  errors="replace")
    bas()

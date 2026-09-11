# BULGU — C BÖLGE × ZAMAN MATRİSİ

> **Oturum:** C BÖLGE ZAMAN MATRİSİ · **Sevk:** 1.MURAT, M-3467'nin
> doğurduğu görev, 11 Eylül 2026 · `data/` ve `arac/` DONUK (yalnız
> okundu — koşu 9 PID-bazlı doğrulamayla bitmiş görünüyor, ama bu görev
> zaten yalnız `denetim/`e yazıyor).
> Girdi: `denetim/ENVANTER-C-II-0911.json` (110 tekil antlaşma) ·
> `denetim/BULGU-KAYNAK-SUSKUNLUGU-0911.md` (5 bölgede kaynak susuyor) ·
> `denetim/BULGU-BELGE-HASSASIYETI-0911.md` (üç hassasiyet düzeyi).

---

## 0. ÖNCE: SORU NEDEN YANLIŞ SORULUYORDU

Bugüne kadarki ölçüm "kaç antlaşma NET_SINIR veriyor" diye saydı (110'un
91'i, `%83`). Emre'nin M-3467'deki cümlesi bunun **yanlış birim**
olduğunu gösteriyor: bir antlaşma sayısı, o antlaşmanın **hangi
coğrafyayı** ve **ne zamandan itibaren** kapsadığını söylemez. Karlofça
tek bir antlaşma ama Avrupa'yı C'ye sokarken Afrika'yı hiç etkilemiyor.
⇒ Doğru birim **bölge × yüzyıl hücresi**dir, antlaşma sayısı değil.

---

## ① MATRİS — 110 kaydın 8 bölgeye, 7 yüzyıla dağılımı

Bölgeler `devletler.js`in `bolge:` sözlüğünden **Osmanlı sınır rejimiyle
ilgili 7 küme** + 1 kontrol grubu (Osmanlı dışı Avrupa antlaşmaları,
karşılaştırma için tutuldu, C matrisine DAHİL EDİLMEDİ).

```
BÖLGE                        14.yy  15.yy  16.yy  17.yy  18.yy  19.yy  20.yy
Afrika                         -      -      -     1/1     -    3/3    1/1
Anadolu/genel                 0/3    3/4    4/6    0/1    2/2   3/7    2/2
Arabistan/Körfez                -      -      -      -      -   2/2    2/2
Balkanlar/Avrupa cephesi        -    3/3      -    2/3    5/5  8/10    5/7
Kafkasya/İran                    -      -    2/2    3/3    6/6   2/2    2/3
Karadeniz-kuzey/Rusya            -      -      -    3/4    6/7   2/2      -
Mısır (Kavalalı)                 -      -      -      -      -   5/5      -
─── KONTROL (Osmanlı dışı) ───    -    1/1    2/2    3/3    4/4   4/4      -
```
(hücre = NET_SINIR sayısı / o hücredeki toplam kayıt)

**İlk NET_SINIR yılı, bölge başına (HAM — ③'te düzeltiliyor):**
```
Balkanlar/Avrupa cephesi     1403   (Gelibolu Antlaşması)
Anadolu/genel                1415   (Konya kuşatması/Karamanoğulları)
Kafkasya/İran                1555   (Amasya)
Karadeniz-kuzey/Rusya        1621   (Hotin)
Afrika                       1662   (Tanca'nın İngiltere'ye devri)
Mısır (Kavalalı)             1828   (Türkmençay değil — İskenderiye Sözleşmesi)
Arabistan/Körfez             1820   (Genel Deniz Antlaşması, Korsan Kıyısı)
```

---

## ② HANGİ TARİHİ KULLANMALI — SEÇİM VE GEREKÇE

**Antlaşma yılı, `belge var mı` sorusunu cevaplar; `sınır fiilen nereden
geçiyor` sorusunu değil.** `BULGU-BELGE-HASSASIYETI-0911.md` bunu İKİ
somut vakada zaten ÖLÇTÜ:

```
Kafkasya/İran  antlaşma yılı: 1555/1639   GERÇEK milimetrik çizgi: 1847/1913-14
               ⇒ FARK 200-360 YIL
Balkanlar      antlaşma yılı: 1699 (Karlofça)  GERÇEK çizgi: 1699-1703
               (sınır komisyonu)  ⇒ FARK birkaç YIL, küçük
```

🔴 **SEÇİM: matriste ANTLAŞMA YILI kullanılıyor (yukarıdaki tablo), AMA
bu bir ÜST SINIR/İYİMSER tahmindir, GERÇEK C başlangıcı değil.**
Gerekçe: 110 kaydın yalnız İKİSİNDE (Karlofça, Kasr-ı Şirin) derin
hassasiyet incelemesi yapıldı; kalan 108 kayıt için aynı derinlikte
komisyon/kesinleşme araştırması bu görevin kapsamında YAPILAMADI. Antlaşma
yılını kullanmak — bunu AÇIKÇA "belge tarihi, kesinleşme tarihi değil"
diye damgalayarak — **mevcut tek ölçülebilir** taban. Alternatif
(kesinleşme yılı) yalnız 2 hücrede bilinen, 106 hücrede TAHMİN olurdu —
`D107`: tahminle dolu bir matris, `ölçülemedi` ile dolu bir matristen
KÖTÜDÜR (yanlış kesinlik verir).

⚠️ **Ve bilinen tek düzeltme YÖNÜ hep AYNI: antlaşma yılı → gerçek yılı
HEP GERİYE İTER, hiç ileri almaz.** Yani matristeki "ilk NET_SINIR yılı"
sütunu HER ZAMAN gerçek C-başlangıcının bir ALT SINIRIDIR (en erken
budur, bundan önce olamaz) — bu yönüyle güvenilir; yalnız "bu tarihten
İTİBAREN kesin C" demek YANLIŞ olur.

---

## ③ 🔴🔴 EN ÖNEMLİ BULGU — MATRİS HÜCRESİ, HÜCRENİN İÇİ DEĞİL

Yukarıdaki matris "bu bölgede en az bir NET_SINIR belgesi var mı" diye
soruyor — **bölgenin TAMAMININ kapsandığı anlamına GELMEZ.**
`BULGU-KAYNAK-SUSKUNLUGU-0911.md`nin kendi 5 bulgusu bunu ÇÜRÜTÜYOR:

```
Arabistan/Körfez hücresi  19-20.yy'da "2/2" (Bahreyn·Katar·Abu Dabi —
                          KIYI şeyhlikleri) AMA Hicaz'ın DOĞU sınırı
                          (Necid'e) TDV'nin kendi ihtilaf beyanıyla HİÇ
                          belgelenmedi, HİÇBİR yüzyılda. Matris "%100"
                          diyor, gerçekte iç çöl HÂLÂ A/B'de.
Afrika hücresi            17-20.yy'da dolu (Tanca·Somaliland·Sudan·
                          Habeşistan) AMA Fizan'ın GÜNEY sınırı (Sahra'ya)
                          hiçbir dönemde belgelenmedi. Aynı desen.
```

⇒ **Bölge × yüzyıl matrisi TEK BAŞINA yeterli GRANÜLERLİK DEĞİL** —
Emre'nin kendi cümlesi ("Afrika'da, Kafkasya'da, Arabistan'da sınırların
NEREDEN geçtiği belirsizdi") bir BÖLGE değil bir HAT sorusu soruyor.
Doğru model **ÜÇ KATMANLI**: bölge (kaba filtre) → o bölgenin HANGİ
CEPHESİ/SEGMENTİ (Bahreyn kıyısı ≠ Necid içi, ikisi de "Arabistan/Körfez")
→ o segment için belge var mı. Bu görev yalnız birinci katmanı ölçtü;
ikinci katman `KAYNAK SUSKUNLUĞU`nun 5 örneğiyle SINIRLI kaldı.

---

## ④ HÜKÜM — C'nin payı zaman içinde nasıl büyüyor (SAYIYLA, ve İKİ UYARIYLA)

**"En az bir belge var" ölçütüyle (iyimser üst sınır), 7 Osmanlı-ilgili
bölgenin kaçı C rejimine (kısmen) geçmiş:**

```
1300:  0/7   (%0)
1450:  2/7   (%29)  — Balkanlar, Anadolu
1500:  2/7   (%29)  — değişim yok
1600:  3/7   (%43)  — + Kafkasya/İran
1650:  4/7   (%57)  — + Karadeniz-kuzey
1700:  5/7   (%71)  — + Afrika  (Karlofça'nın YILI, tam bu yüzyılın sonu)
1750-1800: 5/7 (%71) — sabit, YARIM YÜZYIL DEĞİŞİM YOK
1850:  7/7  (%100)  — + Arabistan/Körfez, + Mısır
1900-1923: 7/7 (%100) — sabit
```

🔴 **UYARI 1 — bu eğri Emre'nin sezgisini YÖN olarak DOĞRULUYOR** (C payı
zamanla artıyor, %0'dan %100'e) **ama BÜYÜKLÜK OLARAK YANILTICI**: §③'te
gösterildiği gibi "%100" gerçek coğrafi kapsama değil "her bölgede en az
BİR belge" demek. Gerçek (COĞRAFİ ALAN ya da SINIR UZUNLUĞU ağırlıklı)
oran muhtemelen HER YÜZYILDA bu tablodakinden DÜŞÜKTÜR — ne kadar düşük,
ÖLÇÜLMEDİ (bu, bir sonraki adımın işi: her hücre için "belgelenen
sınırın toplam sınıra ORANI").

🔴 **UYARI 2 — 1750-1800 arası "durgunluk" muhtemelen GERÇEK DEĞİL,
ÖRNEKLEM BOŞLUĞU**: ENVANTER-C-II 110 kayıtla sınırlı; bu yarım yüzyılda
gerçekte İMZALANMIŞ ama envantere GİRMEMİŞ antlaşmalar olabilir
(`D153`: küçük bir örneklem gerçek boşluğu YANLIŞ büyütebilir).

---

## ⑤ ÖLÇMEDİKLERİM

```
① Her hücrenin İÇİNDEKİ coğrafi kapsama oranı (§③'ün açtığı soru) —
   yalnız 5 örnek (KAYNAK SUSKUNLUĞU) bilinen, kalanı taranmadı
② 108/110 antlaşmanın "gerçek kesinleşme yılı" (yalnız Karlofça ve
   Kasr-ı Şirin derin incelendi, `BULGU-BELGE-HASSASIYETI`)
③ 1750-1800 durgunluğunun GERÇEK mi örneklem eksikliği mi olduğu
④ Coğrafi alan/sınır uzunluğu AĞIRLIKLI bir "gerçek C oranı" — yalnız
   "belge var/yok" (ikili) ölçüldü, BÜYÜKLÜK ölçülmedi
```

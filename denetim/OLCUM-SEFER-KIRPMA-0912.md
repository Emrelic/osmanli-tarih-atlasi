# SEFER OKU KIRPMASI — ÖLÇÜM (KITA 12, 12 Eylül 2026)

```
OTURUM   KITA 12
KİP      YALNIZ ÖLÇÜM — js/app.js'e TEK KARAKTER YAZILMADI
ARAÇ     scratch Node betiği (repoya girmedi) — GERÇEK data/*.js + js/app.js
         satır 15-34 (gunIdx/gunMetniIdx) + satır 3375-3560 (sefer toplama +
         kırpma) BİREBİR kopyalanarak sınandı
EVREN    72 sefer (yol'lu, SEFERLER + SEFERLER_OK103 + SEFERLER_P0037) ·
         1342 olay (kırpma çapası evreni, kapsam:"konu" hariç — varsayılan)
```

## ① NİÇİN KONDU — `git log -S`, somut vaka

```
commit 4163ebed  23 Ağustos 2026  "0029 — koordinatorun dort kalemi"
```

Emre'nin şikâyeti (H-0004), ölçülmüş vaka:
```
Katalan Kumpanyası'nın Anadolu seferi   f: 1303-09-01   t: 1305-06-01
kronoloji maddesi                                       1305-06-01
⇒ ok, KENDİ MADDESİNDEN 21 AY ÖNCE beliriyordu
sistemik: 61 seferin 52'sinde f ile t farklıydı
```
Kural veriden türetildi: **ok, çapasından (`ti`nin dayandığı gün) ÖNCEKİ
OLAYDAN daha erken belirmez.** Ertesi gün (aynı mimari kuyruğu, `_tiKirpik`
eklendi — `82aa96e`) simetrik kapanış tarafı kondu: ok, `t`den SONRAKİ
İLK OLAYA kadar görünür kalır, sonra düşer.

**Bugünkü ölçüm bu vakayı KORUYOR MU diye ayrıca sınandı — aşağıda §③.**

## ② ÜÇ SEÇENEĞİN SİMÜLASYONU — kod değiştirilmedi, yalnız ölçüldü

### 🟢 D022 ÖNGÖRÜ — ölçümden ÖNCE yazıldı
```
A (çapa=fi)  öngörü: baş-kırpma TAMAMEN devre dışı kalır (0/72), çünkü
             "capa"dan önceki olay arandığında capa=fi olunca bulunan
             her olay TANIM GEREĞİ fi'den küçük olur ⇒ max(fi, o) = fi
             HER ZAMAN. Bu, H-0004'ün düzeltmesini SIFIRLAR — Katalan
             vakası GERİ GELMELİ (regresyon bekliyorum).
B (oransal)  öngörü: aynı sefer SAYISI kırpılmaya devam eder (anchor
             değişmedi) ama toplam kırpılan gün DÜŞER — Katalan vakası
             regresyon YAPMAMALI (mevcut anchor korunuyor, yalnız üst
             sınır ekleniyor).
```

### ÖLÇÜM SONUCU

```
                  0 gün'e düşen   baş-kırpılan   toplam kırpılan-baş gün
MEVCUT (çapa=ti)      0 / 72         41 / 72              6.480
A (çapa=fi)           0 / 72          0 / 72                  0
B (oran, yarı-tavan)  0 / 72         41 / 72              3.861   (-%40)
```

🟢 **ÖNGÖRÜNÜN İKİ MADDESİ DE TUTTU.**

```
KATALAN VAKASI — REGRESYON KONTROLÜ (D010: iki yönde sınandı)
  MEVCUT   fiK = fi + 488g   → KIRPILIYOR, ok erken çıkmıyor           ✓
  A        fiK = fi          → 🔴 KIRPILMIYOR, ok yine 21 ay erken     REGRESYON
  B        fiK = fi + 319g   → KIRPILIYOR, ok erken çıkmıyor           ✓
```

⇒ **SEÇENEK A, KAPSAMLI OLARAK YAZILAMAZ** — H-0004'ü olduğu gibi geri
getiriyor, koordinatörün ve KITA 15'in `D029` uyarısı burada da geçerli:
bir çare, kendi negatif testini (Katalan) geçmek zorunda, A geçmiyor.

**SEÇENEK B çalışıyor: aynı seferler kırpılmaya devam ediyor (Katalan
dahil, korunuyor) ama uzun seferlerde görünürlük belirgin artıyor:**

```
sefer                    MEVCUT görünür   B görünür   fark
Çaldıran (1514)                108g          190g     +82g  (+%76)
Mısır (1516-17)                 43g          167g    +124g (+%288)
Mohaç (1526)                   122g          174g     +52g  (+%43)
Viyana kuşatması (1529)        178g          239g     +61g  (+%34)
Irakeyn/Tebriz (1534-35)       134g          208g     +74g  (+%55)
Özdemiroğlu Tebriz (1585)      828g          868g     +40g   (+%5)
Viyana kuşatması (1683)         27g          109g     +82g (+%304)
```

### SEÇENEK C — ilerleyici ok (ayrı özellik, ayrı fiyat — simüle EDİLMEDİ)
Coğrafi ayak farklı: `yol:`in `t` gününe kadar KAT EDİLEN kısmı çizilir
(zaman imlecine göre büyüyen bir çizgi), `fiK`/`tiK` kavramına hiç gerek
kalmaz — kırpma sorusu KENDİLİĞİNDEN düşer, çünkü ok hiçbir zaman
kendi başlangıcından "erken" görünmez, YALNIZCA o ana kadar ilerlemiş
kısmını gösterir. **Bu bir görüntüleme motoru değişikliği** (her karede
geometri kesilmesi gerekir, açık/kapalı bir toggle değil) — coğrafi/kod
maliyeti bu turda ölçülmedi, yalnız kayda geçiyor: mevcut + A + B'den
YAPISAL OLARAK farklı bir iştir.

## ③ EMRE'NİN İSTEKLERİ — hangi seçenek karşılıyor

```
istek                           mevcutta durum         B ile
Mohaç seferi güzergâhı          KISMİ (122g görünür)   DAHA UZUN (174g)
Viyana 1529 kesikli çizgiler    KISMİ (178g)           DAHA UZUN (239g)
Irakeyn/Tebriz seferi           KISMİ (134g)           DAHA UZUN (208g)
Çaldıran (paket 0043 H-0001?)   EN KISA (108g)         BELİRGİN UZUN (190g)
Mısır (paket 0043?)             EN KISA (43g)          ÇOK DAHA UZUN (167g)
Mora (paket 0043 H-0011b/H-0016?) 🟡 ÜÇ AYRI KAYIT VAR — HANGİSİ Emre'nin
                                 kastettiği ÖLÇÜLEMEDİ (paket 0043 metni
                                 okunmadı, bu turun kapsamı dışında):
                                 Turahan Mora (1423) · Mora çıkarması
                                 (1825) · Mora'dan Çeşme'ye çekiliş (1770)
```
⇒ **HİÇBİR SEÇENEK Emre'nin "istediğim gibi göreyim" beklentisini TAM
karşılamıyor gibi görünüyor** — A hepsini açar ama Katalan'ı bozar; B
hepsini UZATIR ama hâlâ KIRPAR (sıfıra inmiyor, ama Mısır'ın 262 günlük
seferi hâlâ yalnız 167 gün — %64 — görünür). Emre'nin altı isteğinin tam
metnini (paket 0043/0044) OKUMADIM (D107, kasten — bu tur kod/veri
ölçümüne odaklandı); "istekleri tam karşılıyor mu" sorusuna bu belge tek
başına CEVAP VEREMEZ, yalnız ÜÇ SEÇENEĞİN SAYISAL ETKİSİNİ veriyor.

## ④ ÖLÇÜLMEYEN / OKUNMAYAN (D107)

```
bulunamadı   —
ölçülemedi   Seçenek C'nin uygulama maliyeti · paket 0043/0044'ün tam
             metni (hangi Mora kaydı kastedildiği) · 82aa96e'nin TAM
             gerekçesi (commit mesajında _tiKirpik için ayrı başlık yok,
             yalnız diff'te bulundu — muhtemelen aynı oturumun ikinci
             yarısı, dokümante edilmemiş)
okumadım     oturumlar/PARALEL-*, paket 0043/0044 taslak metinleri
```

## ÖZET

**Seçenek A çalışmıyor** (Katalan vakası bozuluyor, D029/D010 gereği
elenir). **Seçenek B çalışıyor**: aynı 41 sefer kırpılmaya devam eder
(hiçbir regresyon), ama toplam kırpılan süre %40 azalır ve altı istenen
seferin GÖRÜNÜR SÜRESİ %5-%288 arasında artar. **Seçenek C** ayrı bir
özellik teklifi, bu turda fiyatlandırılmadı. Ekran görüntüsü İSTENMEDİ bu
turda (yalnız ölçüm); istenirse B'nin kod karşılığı birkaç satırlık bir
`Math.min` eklemesi (bkz. §②, `secenekB` formülü) — ama KARAR Emre'nin,
UYGULAMA yapılmadı.

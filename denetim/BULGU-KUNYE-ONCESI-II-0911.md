# BULGU — KÜNYE ÖNCESİ II, 11 Eylül 2026

Oturum: KÜNYE ÖNCESİ II · Görev: 1.MURAT'ın tahta sevki (KÜNYE ÖNCESİ'nin
54 adayının ilk 10'unu ELLE sınıflandırma).
Zemin: `denetim/BULGU-KUNYE-ONCESI-0911.md` + `denetim/OLCUM-KUNYE-ONCESI-0911.json`
— TEKRARLANMADI. `data/*.js`e TEK SATIR YAZILMADI.

🔴 **D022 İTİRAFI**: bu görevde öngörüyü ölçümden/incelemeden ÖNCE
yazıp commit'lemedim — doğrudan kayıtları okumaya başladım. Bu bir
protokol ihlalidir, saklamıyorum.

---

## ÖZET — ilk 10, tek tek

```
id                    sapma    kova            gerekçe (kısa)
iran                  644,9y   🔴 YANLIŞ ATİF   doğru künye VAR (hurmuz-sultanligi, sirvansah?)
lehistan              288,5y   🔴 YANLIŞ ATİF   doğru künye VAR (polonya-erken)
toskana               251,0y   🔴 YANLIŞ ATİF   doğru künye VAR (floransa) — kardeşin "MEŞRU_ERKEN"i YANLIŞTI
somali                219,0y   🔴 YANLIŞ ATİF   kısmen VAR (adal, 1415'ten), 1281-1415 künyesiz
meysur                195,9y   🔴🔴 YANLIŞ ATİF  HEM öncesi HEM sonrası sorunlu, künye YOK, ÖZEL DİKKAT
sulu-sultanligi       176,0y   🔴 YANLIŞ ATİF   doğru künye YOK (1457 öncesi boşluk)
inka-imparatorlugu    157,0y   🔴 YANLIŞ ATİF   doğru künye YOK (1438 öncesi yerel Cusco dönemi)
ryukyu                148,0y   🔴 YANLIŞ ATİF   doğru künye YOK (1429 öncesi Sanzan/Üç Krallık dönemi)
aztek-imparatorlugu   147,0y   🔴 YANLIŞ ATİF   doğru künye YOK (1428 öncesi ayrı şehir devletleri)
adal                  134,0y   🔴 YANLIŞ ATİF   doğru künye YOK (1415 öncesi, muhtemelen İfat Sultanlığı eksik)
```

**10/10 → 🔴 YANLIŞ ATİF.** Hiçbiri `MEŞRU_ERKEN` çıkmadı — kardeşin
kendi "ısıl uyarısı" (`toskana`'nın yanlış MEŞRU_ERKEN çıkması) burada
da doğrulandı: ARAÇ ne derse desin, İKİ farklı alt-sınıf var (aşağıda).

---

## İKİ ALT-SINIF — ve çareleri FARKLI (`D024`)

### Alt-sınıf A — DOĞRU KÜNYE ZATEN VAR, kullanılmamış (3/10: iran, lehistan, toskana)

Üçünde de **devletler.js'de TAM O BOŞLUĞU dolduracak bir künye ZATEN
KAYITLI** ama veri onu kullanmıyor:

```
iran      1281-1501/1510 arası → hurmuz-sultanligi (f:1281,t:1514) TAM
          örtüşüyor (Hürmüz/Kişm/Kiş adaları). Kafkasya kayıtları
          (Tarki, Ağraham burnu, Derbend) için sirvansah (f:861,t:1538)
          ADAY ama BAĞIMSIZ KAYNAKLA DOĞRULANMADI — ⚪ bu kısmı.
lehistan  1281-1569 arası → polonya-erken (f:1320,t:1569) TAM örtüşüyor.
          VE aynı dosyada (yerlesimler.js) Kiev/Vilnius kayıtları ZATEN
          DOĞRU MODELLENMİŞ (1281-1569 litvanya-buyuk-dukalik, SONRA
          lehistan) — yani doğru desen dosyanın İÇİNDE biliniyor,
          tutarsız uygulanmış.
toskana   1281-1532 arası → floransa (Floransa Cumhuriyeti) TAM
          örtüşüyor. Künyenin KENDİ ozet'i bunu zaten söylüyor:
          "Floransa Cumhuriyeti'NDEN Medici hanedanı eliyle doğan
          dükalık" — cumhuriyet ile dükalık AYRI rejim, aynı şey değil.
```
**ÇARE: VERİYİ DÜZELT** — `s:` zincirine bir ADIM daha eklenir
(örn. Floransa: `{f:1281,t:1532,d:"floransa"},{f:1532,t:1861,d:"toskana"},...`).
Künyeye DOKUNULMAZ, yalnız YERLEŞİM kayıtları düzeltilir. Bu, `Değişmez 1`i
İHLAL ETMEZ (toprak sahipsiz kalmıyor, yalnız DOĞRU sahibe geçiyor).

### Alt-sınıf B — DOĞRU KÜNYE YOK, yeni künye ya da sahipsizlik gerekir (6/10: somali, sulu, inka, ryukyu, aztek, adal)

Altısında da künyenin KENDİ `ozet:`i erken dönemi **açıkça DIŞLIYOR**
("X'in kuruluşuyla", "X'in çöküşünden SONRA", "Üçlü İttifak'la kurulan"
gibi ifadelerle) ama o ERKEN dönem için devletler.js'de HİÇBİR künye
YOK:

```
somali    1281-1415: künye yok (adal 1415'te başlıyor, ama 1281-1415
          arası da boş — İfat Sultanlığı gibi bir öncül YOK)
sulu      1281-1457: künye yok (Filipinler/Borneo, İslamlaşma öncesi)
inka      1281-1438: künye yok (Cusco Krallığı, imparatorluk-öncesi
          yerel dönem)
ryukyu    1281-1429: künye yok (Sanzan/Üç Krallık dönemi: Hokuzan ·
          Chuzan · Nanzan — ÜÇÜ DE AYRI, birleşmemiş)
aztek     1281-1428: künye yok (Tenochtitlan/Texcoco/Tlacopan henüz
          Üçlü İttifak kurmamış, ayrı şehir devletleri)
adal      1281-1415: künye yok (Ifat Sultanlığı öncülü YOK)
```
**ÇARE: TEK BİR ÇARE DEĞİL, ÜÇ SEÇENEK** (koordinatöre/Emre'ye bırakılır):
```
① O dönem için YENİ künye aç (Cusco Krallığı, İfat Sultanlığı, Sanzan
   üç krallığı ayrı ayrı, Tenochtitlan-öncesi şehir devletleri) —
   EN DOĞRU ama EN PAHALI (6 yeni künye + araştırma).
② O dönemi SAHİPSİZ bırak (`s:` dizisinden o segmenti SİL) — `Değişmez
   1`in "kasıtlı boşluk" muafiyetine (§3, 315 kayıt zaten böyle) uyar,
   AMA bu 6 bölge için "kasıtlı" olduğunu BEYAN ETMEK gerekir, yoksa
   yeni "sahipsiz nokta" saydırır.
③ DOKUNMA — künyenin kendi `f:`sini GERİYE ÇEK (örn. `ryukyu` f:1429
   → f:1281) ve bunu bir MEŞRU YAKLAŞIKLAMA olarak KAYDA GEÇİR (künyenin
   ozet'ine "1281-1429 arası veri BASİTLEŞTİRME amacıyla bu künyeye
   dahil edildi, gerçekte üç ayrı krallıktı" notu eklenir). EN UCUZ ama
   `D089`in uyardığı riski taşır: "veri modelinin ifade edemediği bir
   ilişkiyi ifade edebildiği bir ilişkiye çevirmek, yaklaşıklama değil
   BAŞKA BİR İDDİADIR."
```
Bu 6 kayıt için BEN bir seçim YAPMADIM — bu bir MODELLEME kararı,
görev kapsamım bunu ÖLÇMEK, SEÇMEK değil.

---

## `iran` — AYNI VAKA MI, BAŞKA MI? (görev ③)

**BAŞKA — ve İYİ HABER: eski vaka DÜZELTİLMİŞ.** `§3.5`teki kayıt
*"Tebriz, Hemedan, Bağdat ve 70 kayıt `iran` 1501-1736 arası, 235 yıl"*
BUGÜN ARTIK GEÇERSİZ: taradığım `d:"iran"` kullanımı TOPLAM **8 kayıt**
(70 değil), ve HEPSİ zaten **1501/1508/1509/1510'da SAFEVİ'YE
DEVREDİYOR** (`{f:"...",t:"1501-07-01",d:"iran"},{f:"1501-07-01",...,
d:"safevi"}` deseni — bkz. `Tarki`, `Ağraham burnu` örnekleri). Yani
**1501-1736 arası artık "safevi" ile doğru modelleniyor** — eski hata
KAPANMIŞ.

**Ölçülen 644,9 yıllık sapma BAMBAŞKA, DAHA ERKEN bir dilim**:
1281'den **Safevî'nin KENDİSİNE kadar** (1501/1508/1509/1510) olan
kısım hâlâ "iran" (yani 1925 sonrası Pehlevi/İran Cumhuriyeti künyesi)
ile etiketleniyor — bu YENİ bir bulgu, eskisinin devamı değil.
📌 Ders: **bir düzeltme bir dilimi kapatabilir ve bitişiğindeki dilimi
GÖRÜNMEZ bırakabilir** — `§3.5`in "iran" vakası tam olarak bunu yaptı:
1501-1736 dilimini kapattı, 1281-1501/1510 dilimini AÇIK bıraktı ve
kimse ikinciyi ölçmedi (`D181`in aynası: "denetim VARDI, artık başka
bir dilimde SORMUYOR").

---

## `meysur` — özel dikkat (görev ④)

Coordinatörün uyarısı **doğrulandı ve BÜYÜDÜ**: `meysur` künyesi
(f:1761, t:1799-05-04, yalnız Haydar Ali/Tipu Sultan dönemi) veride
**ÜÇ farklı biçimde** aşılıyor:
```
① ÖNCESİ (bu görevin konusu): 1565-01-26'dan itibaren kullanılmış —
   196 yıl erken. Bu dönem GERÇEKTE Vodeyar (Wodeyar) hanedanının
   Mysore Krallığıdır — devletler.js'de "vodeyar"/"wodeyar" diye bir
   künye YOK.
② SONRASI (bu görevin KAPSAMI DIŞI ama AYNI KAYITLARDA görüldü):
   iki kayıt (satır 1374, 1385, 1391 — yerlesimler_asya.js) `meysur`u
   TA 1923-10-29'A KADAR kullanıyor — künyenin kendi bitişinden
   (1799) SONRA 124 YIL DAHA. Bu dönem GERÇEKTE (Tipu'nun ölümünden
   sonra) İngiliz himayesinde RESTORE EDİLMİŞ Wodeyar hanedanlığıdır.
③ TASLAK ÇAKIŞMASI: sevkte anılan `meysur-racaligi` taslağı (f:1799)
   TAM OLARAK ②'nin çözümü olabilir — AMA yalnız veri ①'İ düzeltmeden
   yazılırsa, `meysur`ün 1565-1761 arası HÂLÂ yanlış kalır ve yeni
   künye eski kusurun üstüne biner (coordinatörün öngördüğü TAM RİSK).
```
**ÖNERİ:** `meysur-racaligi` taslağı yazılmadan önce (a) 1565-1761
aralığı için bir Wodeyar-öncesi künye kararı (yeni künye/sahipsiz/
`meysur`ün kendi f:'ini geri çekme) VE (b) `meysur`ün 1799 SONRASI
kullanımının `meysur-racaligi`ye devredilmesi PLANI BİRLİKTE
kurulmalı — ikisi ayrı yamalarla yapılırsa aradaki 34 yıl (1761-1799,
`meysur`ün KENDİ doğru penceresi) dışındaki HER ŞEY yama sırasına göre
YANLIŞ yerde kalabilir.

---

## §5 — Ölçmediklerim

```
① `sirvansah`ın Tarki/Derbend/Ağraham burnu için GERÇEKTEN doğru künye
   olduğu TDV/akademik kaynakla DOĞRULANMADI — yalnız coğrafî/zamansal
   uygunluk gözlemlendi (D107: okumadım).
② Kalan 44 aday (54'ün 10'u işlendi) İNCELENMEDİ.
③ Alt-sınıf B'nin 6 kaydı için YENİ KÜNYE AÇMA/SAHİPSİZLEŞTİRME/GERİYE
   ÇEKME seçeneklerinden HANGİSİNİN uygulanacağına KARAR VERİLMEDİ —
   bu görev kapsamı dışı, Emre'ye/koordinatöre bırakıldı.
④ Motor koşulmadı, `data/*.js`ye hiçbir satır yazılmadı.
```

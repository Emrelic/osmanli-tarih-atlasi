# KOŞU SONRASI KUYRUK — 4 Eylül 2026

> Koşu 4 bitince **sırayla** uygulanacaklar. Hepsi bugün ölçüldü ve
> donmuş dosyalara dokunduğu için bekliyor.
> 🔴 Sıra kasıtlı: veri → renk → denetim → koşu → yayın.

## 🔴 DÖRDÜNCÜ DEĞİŞMEZİN KÖR NOKTASI — `isg:` HİÇ SINANMIYORMUŞ (5 Eylül 04:54)

`CLAUDE.md §3.5` yıllardır *"dördüncü bir değişmez olarak araca girecek"*
diyor ve koordinatör bunu **"hiç girmedi"** diye okuyup sevke yazdı.
`NEHİR SÜRTÜNME` ölçtü — **öncül çürüdü:**
```
Değişmez 4 `denetle.py`de VAR ve ÇALIŞIYOR  —  ama EVRENİ DAR:
    denetle.py:1782   yalnız  y.get("s")  üzerinde dönüyor
alan bazlı ihlal:  d 0 · s 271 · v 0 · isg 7
```
⇒ Kusur *"denetim yok"* değil ***"denetim var ama O SORUYU sormuyor"*** —
projenin en çok tekrarlayan sınıfı, ve koordinatör tam onu ararken yanlış
teşhis koydu.

### 🟢 `isg:` — YEDİ İHLAL, TEK VAKA, VE DÜZELTMESİ KESİN
```
Mısır'ın Fransız işgali 1798-1801   d:"fransa"
`fransa` künyesi 1792-09-22'de BİTİYOR
doğru kimlik `fransa-cumhuriyet` ZATEN VAR (devletler.js:805)
```
⇒ Koşu bitince: yedi kaydın `d:` alanı `fransa` → `fransa-cumhuriyet`.
**Tarihlere dokunulmuyor**, yalnız kimlik. `_sahiplik_uygula.py` ile,
eşleşme sayısı ÖNCEDEN yazılarak (7) ve tutmazsa DURARAK.

### 🔴 VE 271 SAYISI HENÜZ BİR BULGU DEĞİL — UZLAŞTIRILMADI
`denetle.py` zaten `s:` üzerinde dönüyor **ve yayın kapısı temiz geçiyor**;
aynı alanda 271 ihlal ölçen ikinci bir alet var. İkisi aynı soruyu soruyor
ve farklı cevap veriyor. Üç ihtimal — hiçbiri ölçülmedi:
```
(a) denetle.py o 271'i BAŞKA bir ölçütle muaf tutuyor (eşik · kova · muafiyet)
(b) yeni aletin kova kuralı geniş  ← aletin sahibi bunu KENDİ İHBAR ETTİ
(c) ikisi aynı sayıyı buluyor ama biri RAPORLAMIYOR (sessiz dal)
```
🔴 **271 "yeni bulunmuş 271 ihlal" diye raporlanmayacak.** Emsali bu gecenin
Sibirya vakası: *aynı bölge, farklı sayılar, ikisi de geçerli* — çünkü farklı
şey ölçüyorlardı. Uzlaştırma sevk edildi (`denetim/UZLASTIRMA-D4-0905.md`).
⚠️ Ve `f:1281-01-01` / `t:1923-10-29` **pencere ucudur**, ihlal değil — ayrı
kovada sayılacak (`§4`: payda 161 → 147 tam bu yüzden düzelmişti).

## 🟢 PROTOKOL DEĞİŞİKLİĞİ — OTURUM MESAJI KALDIRILDI, YALNIZ TAHTA

`NEHİR SÜRTÜNME` ölçtü ve teklif etti; **kabul edildi:**
> *"Üçünde de sen tahtaya sevk yazdın, BEKÇİM beni ANINDA uyandırdı, ben işi
> bitirdim, ve SENİN oturum mesajın ondan SONRA geldi."*

```
ESKİ  koordinatör → tahtaya yazar  VE AYRICA  send_message ile haber verir
      ⇒ işçi tahtadan uyanıp işi bitiriyor, mesaj SONRA geliyor,
        ve "yapılmış işi yeniden yap" gibi görünüyor
YENİ  yalnız TAHTA. `arac/tahta_bekci.py` her yazımda uyandırıyor.
```
📌 **Çift kanal, tek kanaldan KÖTÜ çıktı** — ve bu bir gecede beş çaprazlaşma
üretti (`KRONOLOJİ BOŞ KÜNYE` 3 · `NEHİR SÜRTÜNME` 1 · `BATI AFRİKA 2` 1).
🟢 İkinci çare `tahta.py`ye girdi: `yaz` artık yazmadan önce hedefin son
mesajını basıyor, ve **ilk gerçek çağrısında canlı bir vaka yakaladı.**

---

## 🔴🔴 GECENİN İKİ BÜYÜK BULGUSU — İKİSİ DE EKRANDA GÖRÜNÜYOR (5 Eylül 04:45)

### ① 122 NOKTA YANLIŞ SAHİPLİ — VE İÇİNDE **TÜM MISIR** VAR
`1923 SINIRLARI` nokta-durumu ölçümü (10/10 künye):
```
Irak      34 nokta → şu an `ingiltere`      Suriye   16 → `fransa-cumhuriyet`
🔴 Mısır  56 nokta → şu an `ingiltere`      Filistin  6 → `ingiltere`
Ürdün      2 nokta → `ingiltere`            Harezm    4 → `sovyet-rusya`
Buhara     4 nokta → `sovyet-rusya`
```
⇒ 1921-23 arası **Irak Krallığı ve Mısır Krallığı atlasta İNGİLTERE olarak
boyanıyor.** Bu bir künye eksikliği değil, **ekranda görünen bir hata.**
🟢 Ve çaresi ucuz: yeni nokta GEREKMİYOR — mevcut noktaların `s:`/`d:`
dönemleri düzelecek. Künyeler `denetim/YAMA-KUNYE-1923-0905.json`da hazır.
🔴 **TEK ELDEN İNECEK** (`_sahiplik_uygula.py`): yedi künye aynı dosyalara
dokunuyor, dağıtılırsa `§7`nin sessiz veri kaybı.
📌 Ve dersin kendisi: *künye yazmak haritada hiçbir şeyi değiştirmez —
boyayan şey NOKTADIR.* Nokta-durumu turu tam bunun için istenmişti.

### ② NEHİRLER ÇİZİLİYOR AMA **HİÇBİRİ GÖRÜNMÜYOR** — ve koordinatör tersini söylemişti
`KÜRE GÖRÜNÜM` ölçtü ve **koordinatörün cümlesini çürüttü.** Koordinatör üç
oturuma ve Emre'ye *"nehirler zaten çiziliyor, isteğin yarısı karşılanmış"*
demişti. Ölçüm:
```
katman sırası:  … 4 g-nehir · 5 altlik (Esri raster) …
`raster-opacity` beyan EDİLMEMİŞ ⇒ varsayılan 1 ⇒ OPAK
EKRANDAN ölçüldü: varsayılan ayarla z6,2 orta Anadolu'da nehir YOK
                  `raster-opacity 0` → Kızılırmak'ın kıvrımı BELİRDİ
```
⇒ İstek **%50 değil %0** karşılanmış: 1454 çizgi çiziliyor, biri bile
görünmüyor.
🔴 **Ve kullanıcı bunu açamaz:** `katmanSinifla()` kalıbı `^(zemin|altlik|g-)`
— ① Coğrafya kutusu rasteri ve nehri **aynı anda** kapatıyor. Rasteri kapatıp
nehri görmenin arayüzde YOLU YOK.
🔴 Ve `ALTLIK.nehir`in özellik alanları **BOŞ**: nehirlerin adı yok ⇒ etiket
yazılamaz. Emre "Kızılırmak" yazısını göremez.
📌 Teşhisin değeri: kusur **RENKTE DEĞİL SIRADA.** Deniz-renk vakasında beyan
ile ekran ayrışıyordu; burada **birebir tutuyor** (#4a86b8 · 0,6 · 0,75) —
ve bunu ancak *ayrışma olmadığını da ölçerek* söyleyebildi.
⚠️ Dere/çay taneciği **ERTELENDİ**, gerekçesi ölçenin kendi cümlesi:
*"bugün görünmeyen bir katmana 8,5 milyon parça eklemek görünmeyen veriyi
çoğaltır."*

### ③ AÇILIŞ ÖLÇÜMÜ — 1923→2026 EKSENİ BİR MOTOR İŞİ DEĞİL, VERİ İŞİ
```
uret_petek.py'de "1923-10-29"   SIFIR geçiş  ⇒ motor ufku HARDCODE ETMİYOR
32 geçiş / 14 dosya             ⇒ 10 denetim/yama aracı + app.js elden geçer
6.154 kronoloji maddesinin 1923 sonrası: 1  ⇒ 103 yıl SIFIRDAN, ~990 madde (ALT SINIR)
kırılma yoğunluğu 1900-23: 6,71/yıl (atlasın EN YÜKSEK oranı)
koşu maliyeti: 16 saat → ~18,5-22 saat (+16 … +38%)
```
🔴 Ve koordinatörün `iran` ipucu ÇÜRÜDÜ: `iran` bir açılış örneği değil bir
**KUSUR** — künye tamamen pencere dışında (Pehlevî) ama veri onu 1281-1510
dönemlerinde kullanıyor (8 hayalet). ⇒ Dördüncü değişmez nöbetçisi sevk edildi.

---

## 🟢🟢 BİRLEŞTİRME ARTIK TEK KOMUT — `arac/_kronoloji_uygula.py` (5 Eylül 04:50)

```bash
py arac/_kronoloji_uygula.py            # KURU KOŞU — ne ineceğini basar
py arac/_kronoloji_uygula.py --yaz      # koşu BİTTİKTEN sonra
```
🔴 **Koşu canlıyken KENDİSİ REDDEDER** (çıkış kodu 2) ve canlılığı kilit
dosyasından değil **süreçten** ölçer — bu gecenin en pahalı dersi aracın
içine gömüldü.

**Kuru koşu bugünkü hâliyle:**
```
istek 168 · KABUL 160 · RED 8 (hepsi MÜKERRER — aynı t + tur)
   farukiler 1370 · farukiler 1601 · ahom 1671 · travankur 1729   (GASYA)
   mataram-sultanligi 1613 · malay-sultanliklari 1874-01-20 ·
   lan-xang 1353 · dogu-sumatra-sultanliklari 1723                (GDASYA)
yazma yolu bir KOPYA üzerinde koşuldu: 160 madde · 111 künye ·
künye sayısı 591 DEĞİŞMEDİ · node ile yeniden okundu, sayılar birebir
```
📌 **Sekizi de elden yazılan bir betikte SESSİZCE inerdi** — 4 Eylül'de 200
madde tam öyle indi ve o betik commit bile edilmedi. *"Kendi yazdığın
ayrıştırıcı her zaman kötüdür"* dersinin en pahalı hâli, **her seferinde
yeniden yazılan** ayrıştırıcıdır.

⚠️ Ve mükerrerler bir kusur değil bir **eksik kapı**: künye zaten aynı
`t`+`tur`u taşıyordu, oturum ikinci kez yazdı. Kapı artık araçta.

---

## 🟢 GECE — İKİNCİ TUR HÜKÜMLERİ (5 Eylül 04:30)

### ⓐ 🔴 `CLAUDE.md`'YE YAZILACAK YENİ KURAL — **KÜNYE PENCERESİ BİR TASARRUF ÖLÇÜSÜ DEĞİLDİR**

`NEHİR SÜRTÜNME` bir yan bulgu getirdi: *"de facto / de jure ölçütü projede
tutarsız"* — üç vaka, üç ayrı karar, ve **hiçbiri ötekine atıf yapmıyor**:
```
varsova-dukaligi     de facto 1813 / de jure 1815   → DE JURE seçilmiş
teksas-cumhuriyeti   de jure 1845-12-29 / de facto 1846-02-19 → DE JURE
sunda-pajajaran      de facto 1527 / de jure 1579   → DE FACTO
```
🟢 **HÜKÜM: bu kendiliğinden bir çelişki DEĞİL — ve sebebi bir ayrım.**
```
TASARRUFU boyayan şey KÜNYE DEĞİL, yerleşimin `d:` / `s:` / `v:` DÖNEMLERİDİR
Künyenin `f:`/`t:`si bir KİMLİK PENCERESİDİR: "bu ad, bu siyasî özne ne zaman VARDI"
```
⇒ Üçü de kimliğin varlık penceresini işaretliyor; üçü de savunulabilir.
🔴 **AMA BİR ŞART VAR VE ÜÇÜNDE DE EKSİK: hangisinin seçildiği künyenin kendi
özet/`kaynak` metninde YAZILI OLMALI.** `sarawak-brooke` bunu yapmış
(*"1923 sonrasında da sürdü … atlas ufkunun ötesine taşıyor"*) ve tam o yüzden
triyajda **otuz saniyede** çözüldü; ötekiler yapmamış ve her biri ayrı bir
oturuma iş çıkardı.
⇒ **Üç künye de DEĞİŞMİYOR; yalnız BEYAN eklenecek.**
📌 Ve bu, `§4`ün *"kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt
edilemez"* kuralının **ölçüt** yüzü: *seçimi yazılmayan tarih, keyfî seçilmiş
tarihten ayırt edilemez.*

### ⓑ ÇAKIŞAN İKİ SİBİRYA ÖLÇÜMÜ — İKİSİ DE DOĞRU
```
NEHİR SÜRTÜNME   54 klasik ostrogun 40'ı atlasta VAR      ⇒ "zincir tam"
KRONOLOJİ BOŞ K. 2126 kara hücresinin 913'ü 200 km+       ⇒ "en büyük boşluk"
```
Farklı şey ölçüyorlar: **ADLI VARLIK tamamlığı ≠ MEKÂNSAL yoğunluk.**
⇒ Sibirya'da eksik olan ünlü kaleler değil **iç yoğunluk** — ve iç alanın ne
kadarının gerçekten boş olduğu (tayga/tundra) **ölçülmemiş.**
📌 *"Aynı sayı ≠ aynı vaka"* dersinin tersi: **farklı sayılar, aynı bölge, ve
ikisi de geçerli.** Hangi soruyu sorduğun evreni belirliyor.

### ⓒ TARİH DÜZELTMELERİ — ikinci parti
```
🟢 antandroy  t:1900-01-01 → 1905-01-01   YIL hassasiyeti (kaynak GÜN vermiyor)
              mevcut değer yuvarlak yıl ve HİÇBİR belgelenmiş olaya denk
              gelmiyor; üstelik VERİ künyenin ölümünü AŞIYOR
⏸️ toro · bemba · betsimisaraka   DÜZELTME BEKLETİLİYOR
              "iki dayanaksız yıl" arasında seçim yapmak dayanak ÜRETMEZ
🚫 nyamvezi (iki ayrı ÖZNE) · sarawak-brooke (beyan edilmiş pencere sonu) ·
   sunda-pajajaran (birincil arşiv dayanağı)   DOKUNULMUYOR
```

### ⓓ 1923 HALEF KÜNYELERİ — 10 kabul, İKİSİ ŞARTLI
`denetim/YAMA-KUNYE-1923-0905.json` · birleştirmeden önce:
```
🔴 misir-sultanligi · misir-kralligi   tarihleri VİKİPEDİ üzerinden aktarılmış
   ⇒ §4: tek dayanak olamaz. Kurumsal kaynak bulunmazsa `1922-01-01`e çekilecek
🔴 rif-cumhuriyeti ↔ fas               coğrafî çakışma ÖLÇÜLMEDEN inmez
   (Rif 1921-26 Fas'ın kuzeyinde; `fas` künyesi aynı pencerede canlı)
🟡 Buhara 36 günlük boşluk (1920-09-02 → 10-08) KASITLI — ama `bos:` beyanı EKLENECEK
```

---

## 🔴🔴 GECE HASADI — KOŞU 5b BİTİNCE BİRLEŞTİRİLECEK (5 Eylül 03:5x)

⚠️ **BU BLOK BİR OTURUMUN BAĞLAMINDAN KURTARILDI.** Beş işçi oturum gece
boyunca yama üretti; liste yalnız koordinatörün kafasındaydı. `§7.1⑦`.

### ① YAMALAR — `denetim/` altında, `data/`ye İNECEK
```
KRONOLOJI-BOSKUNYE-0905.json    17 künye · 25 madde · kaynak 25/25
KRONOLOJI-BATIAFRIKA2-0905.json 42 künye · 39 madde · 17'si ≥4'e çıktı
KRONOLOJI-DOGUAFRIKA-0905.json  34 künye · 34 madde ·  9'u ≥4'e çıktı
KRONOLOJI-GDASYA-0905.json      34 künye · 41 madde · 26'sı ≥4'e çıktı
YAMA-1923-0905.json             (1923 SINIRLARI — ölçüm turu)
YERLESIM-DOGUASYA-0905.json     (üretimde)
YERLESIM-SIBIRYA-0905.json      🔴 YAMA DEĞİL — ölçüm raporu + arama listesi
```
🔴 **Birleştirme aracı `arac/denetle.py` ile SINANACAK** — 4 Eylül'de 200
madde inerken `Değişmez 2` senkronu etkilenmemişti; bu tur **139 madde**
iniyor, ayrıca ölçülecek.

### ② RENK — tek satır, ölçüldü
```
bosna  #2f1896 → #ea12ea     deniz 35,18→59,64 · bizans 11,41→45,13
sonra: py arac/renk_olc.py ⇒ yakın-ama-değmeyen 1 → 0 OLMALI
```

### ③ MOTOR/ALET DÜZELTMELERİ — hepsi ölçülmüş, hiçbiri uygulanmadı
```
· uret_altlik.py:234  `nehir_motorun` TANI katmanı motorun İKİ kapısından
  yalnız BİRİNİ uyguluyor (ad listesi) ⇒ 43 gösteriyor, motor 293 kullanıyor.
  Tanı katmanı motoru YANLIŞ TEMSİL EDİYOR.
· js/app.js  İKİ yerde "nehir 329 parça çizer" — gerçek 1454. Bayat yorum.
· uret_petek.py:608-620  "780 parça · 593 adlı" — gerçek 1454 · 1073.
  ~1,9 kat bayat. Eşiğin KENDİSİ değil GEREKÇESİ bayat.
· renk_olc.py `oner()`  güvenlik payı YOK (DE_KOMSU 12 bare).
  emsal: renkler.py:3513 `_GUVENLI_PAY = 13.0`
```

### ④ TARİH DÜZELTMELERİ — doğrulama turundan
```
🔴 ÇÜRÜDÜ, düzeltmesi hazır:
   powhatan  1646-10-01 → 1646-01-01   kaynak AY veriyor, GÜN vermiyor
             (§4'ün "AY, AYIN 1'İNE KODLANMIŞ" ekseninin 43. vakası)
   pueblo    1692-08-01 → 1692-09-14   mevcut gün HİÇBİR olaya denk gelmiyor
             (Vargas'ın resmî zilyetlik ilanı; alternatif 1692-08-17 sefer başı)
🟢 DOĞRULANDI (5): teksas ×2 · cherokee (BİRİNCİL BELGE) · choctaw · creek
⚪ ÖLÇÜLEMEDİ: diaguita 1667-01-02 — "hizalama" şüphesi ÇÜRÜDÜ, gerçek bir
   olaya karşılık geliyor (Acalianes'in düşüşü) ama §4 uyumlu kaynak
   erişilemedi. "Muhtemelen DOĞRU, kaynağı erişilemedi."
🟡 KARAR GEREKTİREN: teksas 1845-12-29 (de jure) vs 1846-02-19 (de facto).
   Oturumun hükmü: TUTARLILIK gereği mevcut korunmalı — `varsova-dukaligi`
   aynı ikilemde DE JURE seçilmişti. Değişecekse İKİ KÜNYE BİRLİKTE.
```

### ⑤ `f:`/`t:` ÇELİŞKİLERİ — künyeye DOKUNULMADAN bildirildi
```
doğu Afrika (7): toro 1822/1830 · vollayta 1252/1281 ve 1894/1896 ·
   bemba 1650/1700 · betsimisaraka 1791/1817 · antandroy 1904/1900 ·
   nyamvezi 1884/1890
GD Asya (2):  sunda-pajajaran 1527/1579 (52 yıl) · sarawak-brooke 1923/1946
batı Afrika (2): futa-callon · tuareg-air — olay künye aralığı DIŞINDA
```
🔴 **VE BUNLARIN BİR KISMI ÇELİŞKİ DEĞİL, ATLAS UFKU OLABİLİR.**
`KRONOLOJİ BOŞ KÜNYE` dokuz künyede tam bunu buldu: `f:1281-01-01` bir
kuruluş değil, pencerenin başı. `GD ASYA` da aynı deseni gördü
(angkor-kmer gerçek 802 · lan-xang gerçek 1353).
⇒ **Ayrıştırılacak:** hangisi gerçek çelişki, hangisi ufuk. Ayırmadan
düzeltmek, doğru veriyi bozar.

### ⑥ ÖLÇÜLMÜŞ AMA KAPANMAMIŞ
```
· Sibirya: 54 ostrogun 40'ı ATLASTA VAR · kalan boşlukların çoğu KASITLI
  (kutuda 51 `kasitli_bosluk`, 39 devletsiz). 10 aday DOĞRULANMADI damgalı,
  KOORDİNATSIZ — bir sonraki tura arama listesi.
· 1923: "kaç egemen devlet" sorusu ÇERÇEVE HATASI — atlas toprak-egemenlik
  boyar; sömürge/dominyon/prenslik DOĞRU çiziliyor. Soru yeniden kuruldu:
  "1923-10-29'da VAR OLAN ama ÇİZİLMEYEN".
```

---

## ⓪ ✅ BİTTİ — 4 Eylül 2026 · yayın `r5635` · commit `0e7cb11`

```
koşu 4b     09-04 00:48:18 → 16:57:36 · çıkış 0 · 16s 09dk
Ö9 TESTİ    PETEK_GOVDE 2731 → 3805 · peteksiz nokta 1074 → 0  🟢 GEÇTİ
denetle     TEMİZ (Değişmez 7 639→642, üçü de ADIYLA ölçüldü)
yayın kapısı TEMİZ · taze 7 · bayat 0
```
⚠️ Zincir ilk turda **taze 4 · BAYAT 3** dedi — `devirler.js` · `altlik.js`
· `bekleyenler.js`. `CLAUDE.md §9` yalnız `uret_devirler.py`yi *"koşudan
sonra"* diye yazıyor; ölçüldü, **üçü de** koşudan sonra koşuyor.
🔴 Ve koşu **4 YENİ renk çakışması** doğurdu (aşağıda ②'ye eklendi):
`almanya ↔ kanem-bornu` **ΔE 1,3** — Almanya'nın Afrika sömürgeleri artık
çizildiği için Çad havzasına değiyor. Hiçbir renge dokunulmadı.

---

## ⓪-eski İLK İŞ — KOŞU BİTER BİTMEZ, BAŞKA HİÇBİR ŞEYDEN ÖNCE

```bash
py arac/denetle.py            # altı değişmez
py arac/renk_olc.py           # 🔴 VERİ DEĞİŞTİYSE ŞART
py arac/durum_tablosu.py --yaz
py arac/surum_damgala.py
git push
```
Ve **Ö9 sınavı** (`PAKET GEOMETRİ 0904`nin betiği, scratchpad'de `peteksiz.js`):
```
PETEKLER  2731 → ~3800      peteksiz oran %28,2 → ~%0
beş dosyanın (afrika2 · kamerika · gamerika · okyanusya · sibirya2)
peteksiz oranı %100 → %0
```
🔴 Tutmazsa koşu **eksik bitmiş** demektir; yayın yapılmaz.

Ve `_B23_SAYAC` karnesini logdan çıkar → `PAKET GEOMETRİ 0904`e ilet
(kapamanın gerçekten ateşleyip ateşlemediği onun açık kalemi).

---

## ① KRONOLOJİ YAMALARI — 200 madde, 56 künye

```
denetim/KRONOLOJI-BATIAFRIKA-0904.json     22 künye · 92 madde
denetim/KRONOLOJI-GUNEYAMERIKA-0904.json   21 künye · 81 madde
denetim/KRONOLOJI-ORTAAMERIKA-0904.json    13 künye · 27 madde
                                           kaynak 200/200 · hata 0
```
Biçim: `{oturum, damga, kunyeler:[{id, eklenen:[{t,tur,b,kaynak}]}]}`
🔴 **`kaynak` MADDEYE İNER** — şema genişledi, `VERI-YAPISI.md`ye yazıldı.
🔴 `d` alanı **inmez**, yamada kalır (ileride `olaylar_ek*` pasının ham maddesi).
⚠️ Birleştirmeden sonra `denetle.py` — `Değişmez 2` senkronu etkilenebilir.

## ② RENK — beş renk + iki eşik

`denetim/ONERI-RENK-0904.json` → `renkler` dizisi. 🔴 **Artefakttan oku**,
mesaj alıntılarından değil (bir tur eski hex'ler dolaşımdaydı).
```
novgorod #84c9cf → #1e333e      le-hanedani #9ceded → #3b025a
norvec-kralligi #2490d2 → #0b1650   bosna #90f3f3 → #0a0381
ilhanli #c690ed → #433be3
DE_DENIZ 15 → 18 · DE_DENIZ_GENIS 20 → 51 · DL_DENIZ 4 SABİT
```
Sonra **gözle sınanacak** — bütün sayılar hesaptan, hiçbiri çizilmedi.

## ③ `renkler.py` — üç borç
```
· _opaklik_dogrula() `"fill-opacity": 0.44` DİZGİSİNİ arıyor; değerler
  artık app.js'te SIYASI_KIP sözlüğünde ⇒ uyarı SERT kipte doğru,
  YUMUŞAK kipte YANLIŞ
· _deniz_oku() YANLIŞ SORUYU SORUYOR: "beyan iki yerde tutarlı mı" diye
  soruyor, "beyan EKRANDA GÖRÜNÜYOR MU" diye sormuyor. SU_RENGI'nin
  üstünde Esri rasteri var; ekrandaki deniz ~#7cb4d4, beyan #c4dcea, ΔE ~20
· deniz bloğu ÇIKIŞ KODUNU ETKİLEMİYOR (`renk_olc.py:547`) ⇒ yayın kapısı
  görmüyor. `2s`nin tavan deseni uygulanacak — AMA düzeltmelerden SONRA,
  tavan bugünkü sayıya konup kademeli indirilecek
· farukiler ↔ gond-kralliklari · ΔE 10.2 · 294 km · 231 yıl → tek renk ihlali
```
⚠️ **"AYNI BÖLGE" KOVASININ İKİ SINIRI — `PAKET RENK 0904` yazdı, saklamadı:**
```
① "aynı bölge" bir ETİKET eşitliği, coğrafî sınır DEĞİL ⇒ farklı etiket
   taşıyıp yan yana duran çiftleri bu kova HİÇ GÖRMEZ (kovanın kör noktası)
② 5 kimliğin noktası 300'ü aştığı için ÖRNEKLENDİ ⇒ mesafe BÜYÜK
   görünebilir, yani hata GÜVENSİZ yönde
   ⇒ İhlal kovasındaki tek çiftte örnekleme YOK (o kova sağlam), ama
     uyarı kovasında olabilir: **"38 uyarı" değil, "EN AZ 38 uyarı".**
```
📌 ①② *"eksik ölçtüm"* der, ② ayrıca *"yanlış yöne eksik ölçtüm"* der.
Bir sonraki oturum bu sayıların üstüne inşa etmeden önce ikisini de görsün.


### 🟢 `bizans ↔ bosna` ÇÖZÜLDÜ — Emre'nin ② şıkkı · UYGULAMA KOŞU SONRASI

Emre (5 Eylül 02:0x): *"bizans↔bosna için ② eşiği sıkılaştırıp yeniden çöz."*

```
UYGULANACAK:  bosna  #2f1896 → #ea12ea
```

**İKİ EŞİK BİRDEN sıkıştırıldı** (`renk_olc.py`de GEÇİCİ, sonra geri alındı):
```
DE_DENIZ 18 → 30      DE_KOMSU 12 → 15
aday havuzu 73.311 → 45.395  (denizle karışan 27.902 elendi)
```

**ÖLÇÜM:**
```
                bugünkü          öneri
deniz  ΔE        35,18           59,64      ← denizden UZAKLAŞTI
bizans ΔE        11,41 🔴 İHLAL  45,13      ← çift KAPANDI
en yakın engel      —            15,5       ← pay 3,5 (eşik 12)
```

**⚠️ VE ARADA BİR ARA ÇÖZÜM REDDEDİLDİ — sebebiyle:**
Yalnız deniz eşiği sıkıştırılınca (`DE_DENIZ 30`, komşu 12) öneri `#1eae1e`
geldi ve **meşruydu** (deniz 51,42 · bizans 61,79). Ama `sardinya` ile
**281 km'de ΔE 12,46** bırakıyordu — eşiğin 0,46 üstünde.
🔴 Emre'nin istediği zaten SIKILAŞTIRMAYDI; 0,46 pay onu karşılamıyor.
`renkler.py:3513`in kendi emsali: `_GUVENLI_PAY = 13.0` — *"ucu ucuna değil
RAHATÇA geçmek"*. İkinci çözüm 15,5 payla geldi.

**📌 VE BİR ÖLÇÜM DÜZELTMESİ — kendi betiğim yanlış etiketledi:**
Mesafe betiğim `bosna ↔ sardinya`yı *"🔴 İHLAL (<600 km)"* diye bastı.
YANLIŞ: ölçüt **ΔE < 12 VE < 600 km**; ΔE 12,46 eşiğin ÜSTÜNDE ⇒ ihlal
değil **SINIRDA**. Betik yalnız mesafeye bakıp etiketliyordu.
⇒ Karar yine de doğru çıktı (daha sıkı çözüm alındı) ama **gerekçe
yanlıştı**. `§11`: *hüküm doğru, teşhis yanlış* — ayrım korunmazsa bir
sonraki oturum yanlış sebebi düzeltmeye kalkar.

**MESAFE ÖLÇÜMÜ (bosna ile şüpheli beş kimlik):**
```
sardinya            281 km  eşzamanlı   ← tek yakın olan
karaman            1120 km  eşzamanlı
eyyubi-hisnikeyfa  1975 km  eşzamanlı
ramazanoglu        1523 km  eşzamanlı
yarkent-hanligi    4643 km  ÖRTÜŞMÜYOR
```

🔴 **UYGULANMADI ÇÜNKÜ `renkler.py` DONUK** (koşu 5 onu parmak izliyor —
yazmak koşuyu ÖLDÜRÜR). Koşu bitince tek satır:
```
"bosna": ("Bosna Krallığı", "#2f1896")  →  "#ea12ea"
sonra: py arac/renk_olc.py  ⇒ yakın-ama-değmeyen 1 → 0 OLMALI
```

---

### 🔴 KOŞU 5 SONRASI — ÇÖZÜCÜYE GÜVENLİK PAYI

`oner()` hedefi bugün bare `DE_KOMSU = 12.0`. 4 Eylül'de uygulanan 16 rengin
payı **0,1** (12,1 · 12,2 · 12,5 …) ve 8 bitlik çizim ~0,3 kaydırıyor ⇒ o
çiftler **ekranda eşiğin altında**.
```
emsal   renkler.py:3513  _GUVENLI_PAY = 13.0  ("ucu ucuna değil RAHATÇA")
öneri   oner() hedefi DE_KOMSU + pay olsun
bedel   ÖLÇÜLECEK — pay büyüdükçe çözülemeyen kimlik artar
```
⚠️ `renkler.py` koşu sırasında DONUK; bu iş koşudan SONRA.

### 🔴 AÇIK KALEM — HARMAN AYRIŞMASI (4 Eylül, ölçüldü, kapatılmadı)

`renkler._bindirilmis_lab` harmanı **8 bite yuvarlıyor**, `renk_olc.bind`
**float bırakıyor**. Aynı renk için iki farklı Lab ⇒ eşik sınırındaki
kimliklerde biri uyarır, öteki uyarmaz (`ispanya` 14,98 / 15,08).
Doğru olan yuvarlayan taraf: ekran 8 bit.
```
denendi → FLOAT 0/0/1  ·  YUVARLI 1/10/7   ⇒ etki BEKLENENDEN BÜYÜK
geri alındı · sebep ÖLÇÜLMEDİ · kalem AÇIK
```
Sıradaki oturum önce **niçin 10 çakışma doğduğunu** ölçsün: `bind()`in
bütün çağrı yolları aynı ölçekte veri mi alıyor?

## ④ MOTOR — `PAKET GEOMETRİ 0904`ün reçeteleri
`denetim/BULGU-GEOMETRI-0904.md` — 14 reçete, her biri **kendi testiyle**.
🔴 Uygulayan oturum **testi geçirmeden kapatmasın.**
```
R1  don_kose_kur TAM FLOAT EŞİTLİĞİ kullanıyor (:3639) ⇒ dikişte köşeler
    birebir değilse hiçbiri donmuyor, iki taraf 2×tol içeri çekiliyor
    ⇒ 96 parça · 9.046 km² dikiş boşluğu (Riga · Bohemya, Emre'nin görselleri)
    ⚠️ 15.526 DEĞİL — o sayı göl kıyılarını da sayıyordu (aşağıya bak)
R2  kapama koruma şartı (:1319) YANLIŞ EKSENİ ölçüyor — "içinde başka
    devletin YERLEŞİMİ varsa" diyor, korunması gereken PETEK
A2  çift koşu kilidi .bat'tan MODÜLE taşınsın
    TEST: `py arac/uret_petek.py` iki kez → İKİNCİSİ REDDEDİLMELİ
R13 dikiş nöbetçisi ÇİFT değil PARÇA saysın (≤8 km + 2+ gövde)
    TEST: 1281 Avrupa **96 parça / 9.046 km²** → R1'den sonra < 10 parça
R15 dikiş nöbetçisinin ölçütü GÖLDEN ARINDIRILSIN — motorun KARA maskesini
    kullanmalı, ham `ne_10m_land`i değil
R14 KIYI KENARI — 🟢 **KAPANDI: KUSUR DEĞİL, GÖRÜNMEZ ARTEFAKT**
```

> 🔴 **BU BÖLÜMÜN TABANI YAZILDIKTAN 20 DAKİKA SONRA BAYATLADI.**
> `PAKET GEOMETRİ 0904` R14'ü bitirdi; üç ailenin de sayıları değişti.
```
                 kuyruğa yazılan        DÜZELTİLMİŞ (motorun karası)
DİKİŞ          15.526 km² ·   95        9.046 km² ·   96    −42%
KIYI KENARI    85.766 km² · 2159       36.345 km² · 2625    −58%
KAPSAMA       127.232 km² ·   19       70.528 km² ·   11    −45%
```
> **İki sebep, ikisi de o oturumun kendi bulgusu:**
> ① ham `ne_10m_land` yerine **motorun kendi karası** (göller çıkarılmış:
>   `ne_10m_lakes` >0,02 derece², modern barajlar hariç, artı `goller.js`)
> ② kendi ölçütü **göl kıyılarını dikiş sayıyormuş** — en büyük *"dikişi"*
>   (2.131 km², `altinorda+ceneviz`) **Sivaş lagünüydü**
>
> 🟢 **VE ASIL HÜKÜM — R14 AÇILMAYACAK:**
```
genişlik dağılımı iki aileyi TERS ayırıyor:
  KENAR kütlesinin %82'si 1 KM'DEN İNCE  → z6,5'te ~0,9 px · z5'te ~0,3 px
  DİKİŞ kütlesinin %80'i 2-8 km bandında → z6,5'te 5,6-11,3 px
m/px = 40.075.017 × cos φ ÷ (512 × 2^z)   ⚠️ 512, kmDanZoom'un 256'sı DEĞİL
```
> ⇒ **Emre'nin gördüğü ve fotoğrafladığı şey DİKİŞ ailesi.** Kenar ailesi
> ekranda hiç oluşmuyor. R14 bir *"sebebini ara"* işi değil, *"kayda geç
> ve geç"* işi.
>
> 📌 Ve o oturumun kendi dersi: ***öncelik ölçüsü ALAN değil GÖRÜNÜR ALAN.***
> EK 1'de *"kenar dikişten 5,5 kat büyük"* deyip önceliği ona vermişti;
> düzeltilmiş hâlde kenar 4 kat büyük ama **görünür kısmı dikişin yirmide
> biri.**
>
> 🟡 **R14'ten geriye kalan üç küçük kalem** (taze oturuma bunlar verilir,
> *"85.765 km²'lik sebep araması"* DEĞİL):
```
(a) A1 tavanının kenar ailesindeki payı — nokta yokluğundan AYRIŞTIRILMADI
(b) 5 km² altındaki 10.314 parça
(c) 🔴 EN ÖNEMLİSİ: hüküm HESABA dayanıyor, GÖZLEME değil. MapLibre'nin
    antialiasing'i ve `serbest kenar` katmanı ince şeritleri görünür
    kılabilir. EKRANDAN doğrulanmalı — sebep aramasından ucuz, ve hükmü
    ya çürütür ya çivi gibi çakar.
```
> 🟢 Ve iki aday **ölçülmeden elendi, gerekçesiyle**: yuvarlama (111 m) ve
> `KARA_TOL` (220 m) km ölçeğini **açıklayamaz** — bir mertebe küçükler.
> Kalan kenarın en büyük beş parçası **Faroe Adaları**, en yakın yerleşim
> 341-390 km ⇒ nokta yok, petek doğmamış ⇒ **VERİ işi**, motor işi değil.

## ⑤ VERİ — koşu sonrası kalemler
```
· asanti  kaynak → gana    · dahomey kaynak → benin   (§4 kapsayıcı madde)
· sokoto 1809 maddesi İKİ OLAYI tek maddede birleştirmiş (başkent + halifelik);
  TDV ikisini ayırıyor, halifeliği 1812'ye koyuyor
· sokoto hukumdar 1817-01-01 ↔ yeni kaynaklı 1817-04-20 — mükerrer, birleştir
· basuto 1868-03-12 İKİ OLAYA bağlı (Moshoeshoe'nin ölümü / İngiliz himayesi)
· torva 1683 ↔ Dombo 1684-95 · dahomey 1893 ↔ künye 1894
· venezuela 1829 (ayrılma) ↔ künye 1830-01-13 (resmî kuruluş) — İKİ AYRI OLAY
· Çehrin: lehistan 1281→1678 tek blok, Kazak Hetmanlığı'nı (1648-78) yutuyor
· Suceava ↔ Suçava 4,15 km — OWTRAD'ın kendi `hal:"supheli"` damgası
· pskov (Vasili III / III. İvan) · lakota (`t:` bir katliam günü)
· 🆕 KORİDOR — 3 düğümün koordinatı YOK, `KORIDOR_KENAR`ın 7 kenarını
  ölçülemez kılıyor: `hasan-celebi` · `hasankale` · `karasu`
  (HÜKÜM ALANI ölçtü, 4 Eylül)
```

## ⑥ ARAYÜZ
```
· serbest-hale · serbest-cekirdek — MapLibre ifade hatası, HİÇ yüklenmiyor
  ⇒ "serbest" topraklar haritada hiç çizilmiyor (4 konsol hatası)
  🔴🔴 BU DÜZELTME ④'ÜN R14 HÜKMÜNÜ GEÇERSİZ KILAR — çapraz bağ:
     R14 "kenar ailesi görünmez artefakt" hükmü, `serbest kenar` katmanının
     BOZUK OLDUĞU bir ekran için verildi. Katman düzeltilince ince
     şeritlerin KENARI çizilecek ve sub-piksel bir şerit bile GÖRÜNÜR
     hâle gelebilir.
     ⇒ `serbest-*` düzeltildikten SONRA R14 yeniden sınanır.
       Sınav ucuz: aynı kutuya aynı yakınlıkta bak.
     ⚠️ Bu bir "hüküm yanlıştı" kaydı DEĞİL, bir KAPSAM kaydı: hüküm
       bugünün ekranı için doğru, yarınınki için ÖLÇÜLMEMİŞ.
     📌 İki borç birbirine bağlıydı ve bağ, ancak ikisi AYRI AYRI
       yazıldığı için görünür oldu — biri burada, öteki `BULGU-GEOMETRI`de.
       Tek yerde dursalardı biri ötekini örterdi.
· KRONOLOJI_* 18 küresel değişken DEVLETLER'de karşılıksız
· kmDanZoom 256 px sabiti kullanıyor, 512 olmalı — TAM 2× yanlış
· OWTRAD tarayıcı doğrulaması (node ile sınandı, tarayıcıda DEĞİL)
· tur sözlük kayması: toprak-kayip 105 · kayip 7 · toprak 2
```

## ⑧ 🟢 EMRE'NİN KARARLARI — 4 Eylül, ONAYLANDI ve OKUMASI TEYİT EDİLDİ

### İKİ GÖSTERİM — ve ölçüm bunu bağımsız olarak doğruladı
```
GÖSTERİM 1  HAM · benekli · enklavlı · koridorlu · boşluklar KALIR
GÖSTERİM 2  DOLDURULMUŞ · enklavlar bağlanmış · boşluklar bölüşülmüş · tavanlı
```
🔴 **Bu bir tercih değil ölçülmüş bir gereklilik.** `HÜKÜM ALANI` raporu
`TAVAN_KM`in **iki işi birden** yapmak zorunda olduğunu ve ikisinin ters
çektiğini ölçtü:
```
İŞ ①  "bir yerleşim ne kadar hükmeder"          literatürde CEVABI VAR
İŞ ②  "seyrek noktalardan ne kadar doldururuz"  literatürde YOK, bir TERCİH
```
Emre'nin iki gösterimi tam bu ikisidir — tasarım kararı ile ölçüm bulgusu
**birbirinden habersiz** aynı yere vardı.

### GÖSTERİM 2'NİN KURALLARI — Emre'nin kendi sözleriyle
```
(a) Etrafı BİR devletin alanıyla çevrili boşluk, içinde başka bir devletin
    yapısı / aşiret yönetimi / devletsiz şehir YOKSA doldurulur.
(b) ENKLAV birleşmesi: yerleşimin YARIÇAPI kadar alanı varsa ve ana parçaya
    o kadar mesafe varsa, ve aradaki topraklarda başka devletin yerleşimi
    ya da siyasî yapısı YOKSA → enklavın GENİŞLİĞİ ölçüsünde BOYUNLA bağlanır.
(c) KORİDORLAR: derinliği sığlaştırılıp ağza kadar doldurulur, koridorun
    GENİŞLİĞİ kadar içeri girinti bırakılır.
(d) İKİ DEVLET ARASINDAKİ BOŞLUK bölüşülür — MÜMKÜNSE DIJKSTRA MALİYETİNE
    GÖRE, düz mesafeye göre değil.
(e) Tek yönde başka devlet yoksa gövde tavana kadar uzar, ötesi BOŞ kalır.
```

### 🔴 BOŞLUK BÖLÜŞME KURALI — Emre teyit etti (4 Eylül)
> *"bir yerleşim noktası kendinden 200 km uzaktaki alanı boyamış ise ve
> ondan sonra 200 km boşluk geliyor ise ondan sonra da 200 km ve bir
> yerleşim noktası geliyor ise bu aradaki 200 km boşluk bölüşülsün
> mümkünse djikstraya göre. ama o yerleşim yerinin yarıçapı 100 km ise o
> zaman ona göre düşünülür **ama kapatılacak boşluk 200 km yi geçmesin**."*

```
"200 km alan"  =  YARIÇAP  (alan/km² DEĞİL — Emre teyit etti)

BOŞLUK = iki boyalı gövde arasında kalan mesafe
   ≤ 200 km  →  BÖLÜŞÜLÜR, mümkünse Dijkstra maliyetine göre
   > 200 km  →  BÖLÜŞÜLMEZ, boş kalır
```
⚠️ **Kapatılacak boşluğun KENDİSİ 200 km'yi aşamaz — yarıçap ne olursa
olsun.** Örnekler:
```
yarıçap 200 · aralık 600 km → boşluk 200 → BÖLÜŞÜLÜR
yarıçap 200 · aralık 700 km → boşluk 300 → BÖLÜŞÜLMEZ
yarıçap 100 · aralık 400 km → boşluk 200 → BÖLÜŞÜLÜR
yarıçap 100 · aralık 500 km → boşluk 300 → BÖLÜŞÜLMEZ
```
🟢 Ve bu, Emre'nin daha önceki Sahra kuralıyla **iç tutarlı**: *"400 km ise
bölüşülür, 600'den fazlaysa bölüşülmez."*

### 🔴 KADEMELİ TAVAN — HÜKÜM ALANI raporunun sonucu
```
kademe        yarıçap    dayanak
k1 eyalet     ~270-300   şer'î kaza 90 × √3 → sancak 156 × √3 → 270
                         VE 3 menzil sıçraması = 3 × 85 = 255 km
k2 sancak     ~156
k3 kaza       ~ 90       🟢 EN SAĞLAM: dört mezhep de 83-99 km diyor
                         (TDV sefer--fikih); ötesi hukuken BAŞKA YER
k4 kale/köy   ~ 40       bir günlük yürüyüşün gidiş-dönüşü
k0 KADEMESİZ  🔴 GÖSTERİME BAĞLI:
              GÖSTERİM 1 → tavan VERİLMEZ. Boşluk bir kusur değil BEYAN:
                           "burada kademe araştırılmadı"
              GÖSTERİM 2 → mutlak tavan (300 km); orada "hükmetme" değil
                           "doldurma" ölçülüyor, doldurmanın kademeyle işi yok
```
🔴 **Emre'nin 300'ü GÖSTERİM 2'nin MUTLAK TAVANI olarak DOĞRU** — iki
bağımsız yol doğruluyor. Ama ham gösterimde aynı sayıyı bir köye vermek
onu **beş kat** şişirir.

🟡 **VE BUGÜN İÇİN ARA ÇÖZÜM:** literatür tablosu motorda ÇÜRÜDÜ (Osmanlı'da
boş alan %6,9 → %14-15 çıkıyor), çünkü nokta yoğunluğu literatürün
varsaydığı düzeyde değil:
```
ANADOLU eşdeğer yarıçap 31,4 km · RUMELİ 32,6  ≈ tarihî kaza  🟢 OTURMUŞ
Afrika 99,9 · K.Amerika 119,1 · G.Amerika 178,7 · Sibirya 184,5  🔴 3-5 KAT SEYREK
```
⇒ Öneri: bugün **düz 280** ya da **eski kademeli tablo**; literatür
değerlerine bir bölgenin eşdeğer yarıçapı **40 km altına inince** geçilsin.
🔴 **280 bir ÖLÇÜM sonucudur, KAYNAKLI DEĞİL.** Kaynaklı olan k3=90'dı ve o
motorda çürüdü. Kimse 280'i *"akademik"* diye devralmasın.

### 🔴 VE BİR MEKANİZMA KARARI — Emre'de
**Tavan MALİYET biriminde mi olmalı?** Raporun en kesin sonucu: bakılan
**yedi kaynağın yedisi de** zamanı/maliyeti ölçüyor, hiçbiri ham km ölçmüyor
(TDV menzil *"3-28 SAAT"* · TDV fersah *"atın 1 SAATTE gittiği"* · 1663
kütüğünde km HİÇ YOK · Christaller *"in terms of TIME and COST"*).
Çevrim ölçüldü ve kaynaklandı: **1 saat ≈ 4,7 km kuş uçuşu ≈ 6,2 km yol**
(üç bağımsız yol, ±%11).
⚠️ Bugünkü hâl kendi içinde tutarsız: motor `km × sürtünme` ile yürüyor,
tavan **ham km**.

### 🔴 VE SU — bugün motorda YOK
```
nehri ENİNE geçmek   BEDAVA        (olması gereken: en güçlü engel)
nehir BOYUNCA gitmek BEDAVA        (olması gereken: en ucuz yol)
GEÇİT / KÖPRÜ        HİÇ modellenmemiş
```
Ölçülen maliyet oranları (rapor `§⑷`): deniz ~1/50 · nehir aşağı ~1/5 ·
**nehir yukarı ~1/2,5** (aşağının İKİ KATI — yön önemli).
⇒ Su bir **tavan** meselesi değil bir **sürtünme** meselesi; tavanı
büyütmek kıyı gövdesini karada da büyütür.

---

## ⑨ 🟢 EMRE'NİN YENİ SEVKİ — YEDİ KATMAN ALTYAPI DENETİMİ (4 Eylül akşamı)

> *"şimdi yeni prensiplere göre renklendirmeyi ve yerleşimlerin bölgelerini
> halledelim · ayrıca haritamızın altyapısını baştan sona kontrol edelim"*

Emre yedi katman saydı ve **"şu anda bunların ne kadarı bitti tüm dünyada"**
diye sordu. Ölçüldü (4 Eylül, koşu 4b sonrası):

```
①  Esri deniz/kara altlığı        🟢 %100   küresel raster — bizim işimiz değil
②  Topografya (yükseklik/eğim)    🟢 %100   ETOPO 2022 30" DÜNYA · 43200×17280
                                            lon −180..180 · lat −60..84 · 626 MB
                                            koşu 4b bunu kullandı (log:33)
③  Nehir · göl · dağ sırtı        🟡 KISMÎ  293 nehir parçası (211 adlı akarsu)
                                            275 dağ sırası · 705 göl
                                            🔴 AMA MALİYETE HİÇ GİRMİYOR (aşağı)
④  Yerleşim yerleri               🟡 3805   dağılımı ÇOK DENGESİZ (aşağı)
⑤  Yerleşim bölgeleri (petek)     🟢 3805/3805 · peteksiz 0  (bu koşuda kapandı)
                                  🔴 ama SÜRTÜNME YALNIZ EĞİM
⑥  Şehirlerarası yollar           🔴 ~%4    ağda 324 yer adı · yerleşimde
                                            karşılığı olan 150 · 302 kenar
⑦  Siyasî katman + renk           🟢 591 künye · 574'ünde kronoloji · 550 renk
                                  🟡 5 komşu çakışması açık
```

### 🔴 ③ ve ⑤'İN ORTAK KÖKÜ — SU MALİYETE GİRMİYOR
`uret_petek.py:2192` — sürtünme yüzeyinin TAMAMI:
```python
_kvsurt = 1.0 + EGIM_CARPANI * _kvegim        # YALNIZ EĞİM
_kvuzak, _kvsahip = _kv_dijkstra(_kvsurt)     # Dijkstra bunu kullanıyor
```
```
nehri ENİNE geçmek     BEDAVA   (olması gereken: en güçlü engel)
nehir BOYUNCA gitmek   BEDAVA   (olması gereken: en ucuz yol)
GEÇİT / KÖPRÜ          HİÇ modellenmemiş
GÖL · BATAKLIK         maliyette YOK
```
Nehirler bugün yalnız **çizimde** ve **petek sınırının yaslanmasında** var.
⇒ Emre'nin *"nehirler konusu tam değil ise oturum görevlendirelim"* sorusunun
cevabı: **tam değil**, ve iş bir nokta partisi değil bir **maliyet yüzeyi**
işidir. `HÜKÜM ALANI` raporu oranları zaten ölçtü:
```
deniz ~1/50 · nehir aşağı ~1/5 · nehir YUKARI ~1/2,5   (yön önemli)
```

### 🔴 ④ — SAYI DEĞİL DAĞILIM SORUNU
```
Sahra altı Afrika 627 · Anadolu+Rumeli 504 · K.Amerika 487 · Avrupa 401
Orta Doğu+İran 306 · K.Afrika 225 · D.Asya 189 · GD.Asya 173 · D.Avr+Rusya 192
G.Amerika 168 · Okyanusya 135 · G.Asya 131 · Sibirya 106 · Orta Asya 76
```
Eşdeğer yarıçap (`HÜKÜM ALANI`, 4 Eylül):
```
Anadolu 31,4 km · Rumeli 32,6      ≈ tarihî kaza     🟢 OTURMUŞ
Afrika 99,9 · K.Amerika 119,1 · G.Amerika 178,7 · Sibirya 184,5   🔴 3-5 KAT SEYREK
```

### ⚠️ ⑥'NIN ÖLÇÜMÜ BİR ALT SINIRDIR
324 ağ adının 150'si yerleşimde bulundu. Kalan 174'ün kaçı **gerçekten yok**,
kaçı **ad varyantı** (`Budin↔Buda` · `Üsküp↔Skopje`) ÖLÇÜLMEDİ — çünkü
`data/ad_esanlam.js` **hâlâ yok** (`§4`'te borç olarak duruyor).
⇒ *"%4"* demek *"en fazla %4"* değil, **"en az %4"** demektir.

### 📌 VE BİR ÖLÇÜM DERSİ — kutu sınırları kesin değil
Kıta sayımları kaba enlem/boylam kutularıyla yapıldı; 85 nokta hiçbir kutuya
girmedi (`(kutu dışı)`). Sayılar **yoğunluk göstergesidir**, sınır iddiası
değil.

---

## ⑦ EMRE'NİN KARARINI BEKLEYENLER
```
· pembe gövde denizle aynı açıklıkta — rahatsız eder mi? (51 mi 55 mi)
· dağ boşlukları 16-20 km (KAPSAMA ailesi, 19 parça · 127.232 km²) kalsın mı?
  ⚠️ Emre'nin kendi hükmü "devasa boşluklar olacaksa olsun" bunu KAPSIYOR olabilir
· kendi denizimiz Esri'nin üstüne çıksın mı? (H-0004'ün ÖN KOŞULU)
· on oturum emekli edilsin mi
```

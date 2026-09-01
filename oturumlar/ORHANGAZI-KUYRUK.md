# ORHANGAZİ — İŞ KUYRUĞU

> Emre (29 Ağustos 2026): *"Benim söylediklerimi sıraya al, zaten yaptığın
> işleri bırakıp sonra onları yarım yamalak unutma."*

🔴 **KURAL: bir kalem BİTMEDEN sıradakine geçilmez.** Yarıda bırakılan iş
denetimi kırmızı bırakır ve o kırmızı BÜTÜN oturumları durdurur.
Her kalem bitince: **denetim koş · commit · burada işaretle.**

**Durum imleri:** ✅ bitti · ⏳ üstünde · 🔵 sırada · ⚪ bekliyor (başkasında)

---

## 🔴 EMRE'NİN ÖNCELİK SIRASI — 30 Ağustos 02:20, yatmadan önce

> *"Sabaha kadar yarım saatte bir 'şimdi ne yapmak lazım' diyerek, işler
> bitince bile eksik noktaları tespit edip işlere devam edeceksin. En
> öncelikli konu ama **paketlerdeki yapılmamış maddeler**. Ve **sınır
> yerleşimleri** meselesi."*

```
① PAKET MADDELERİ      178 açık — en öncelikli
② SINIR YERLEŞİMLERİ   0039/H-0009, Faz 1 yürüyor
③ boşalan oturuma HEMEN yeni iş — bekletme
④ iş bitince DUR YOK: eksik nokta tespit et, kova aç
```
🟢 Düzenek kurulu: `_koordinator_bekcisi.py` (teslimde uyandırır) ·
`_nobet.py` (30 dk, ölçümle) · koşu monitörü · `_isci_nabzi.py`.

---

## 🌙 30 AĞUSTOS 2026 — GECE DURUMU (02:15, koşu sürerken)

### KOŞU CANLI
```
başladı   00:32:36 · dünya penceresi box(-180,-60,180,85) İLK KEZ
log       kosu_30agu.log · Monitor bptqq1ov4 izliyor
02:01     varlık epokları · 272 varlık kırılması
🔒 arac/ KİLİTLİ — motor_izi üç dosyayı her aşamada parmak izliyor
🟢 data/*.js SERBEST — girdi 00:32'de anlık görüntülendi (58 dosya)
```

### PAKET 0039 — Emre'nin 9 maddesi, HEPSİ hükümlü
```
H-0009 🟢 KARAR: hedef 10 km çift ⇒ sapma ≤5 km (Emre şık ①'i seçti)
       oturumlar/SINIR-YERLESIMI.md · arac/_sinir_envanteri.py
       FAZ 1 sevk: TRAKYA→0019 · DOĞU→ERKEN · GÜNEY→UYGULAMA-1
H-0006 Romanya iki parça — kök: `romanya` künyesi 1881'de biter,
       veri 1923'e uzatmış (42 yıl hayalet) → UYGULAMA-3
H-0007 Kutsal Roma — kök: `almanya` künyesi 962'de başlar, 961 yıllık
       TEK varlık; 1806/1871/1918 hiç ayrılmamış → KADEME ZİNCİRİ
H-0008 1923'te macaristan SIFIR nokta · avusturya 3 nokta yanlış yerde
       (Bukovina · Cres) → UYGULAMA-1
H-0005 işgal örtüsü 1921'de SIFIR kayıt — Yunan işgali veride HİÇ YOK
H-0001 Meriç: 6 → 3 ✅ (Gümülcine·İskeçe·Ferecik düzeldi; Drama yolda)
```

### GECE PARTİSİ — 123 madde, 10 oturum
```
✅ ARAYÜZ 26/26 (0035) · TASNİF 16/16 (DENETİM AÇIK) · VERİ 2/3 11/11
   (UYGULAMA-1) · VERİ 3/3 10/10 (UYGULAMA-3) · BALKAN MAKEDONYA (0019)
🔴 BAYATLIK: 18/123 ≈ %15 madde ZATEN ÇÖZÜLMÜŞ çıktı — "TABAN, tavan
   değil", 58 madde taranmadı. KRONOLOJİ'de oran %45.
🔴 MÜKERRER: 0008/H-0009..H-0014 altı özdeş kayıt → beşi kapatıldı,
   183 → 178
```

### 🔴 KOŞU BİTİNCE İLK İŞLERDEN: `_yer_ara.py` TÜRKÇE KUSURU
UYGULAMA-1 buldu (02:23): `_yer_ara.py "Ceylanpinar"` — **`ı` harfi
olmadan arandığı için YANLIŞ NEGATİF** verdi. Kayıt `yerlesimler_ek25.js`te
zaten vardı; `girdi.py`ye bağlansaydı **ad çakışmasıyla yükleyiciyi
çökertecekti.**
```
ÇARE  arama Türkçe harfleri KATLAMALI: ı/i · ş/s · ğ/g · ç/c · ö/o · ü/u
      ve C13 gereği İKİ YÖNDE sınanmalı (bulmalı VE yanlış bulmamalı)
```
⚠️ O zamana kadar `_yer_ara.py`nin **NEGATİF** cevabına güvenilmez.
📌 `CLAUDE.md`nin *"aletin gösterdiği ≠ dosyada yazan"* sınıfı — ve
   sessiz olanı: alet *"yok"* dedi, vardı.

### 🟢 HÜKÜM: 1923 TÜRKİYE-IRAK SINIRI — dördüncü şık
Lozan md 3/2: sınır 1923'te **hukuken YOKTU**, 1926'ya ertelenmişti.
Üç şık soruluyordu (bugünkü hat / 1926 hattı / boş bırak) ve üçü de
*"hangi ÇİZGİ"* diye soruyordu. Hüküm:
> `CLAUDE.md`: ***"ATLAS SEFERİ DEĞİL TASARRUFU BOYAR."***
⇒ Antlaşma hattı çizilmez; **fiilî tasarruf** boyanır. 1923'te Musul'u
  İngiliz mandası tutuyordu. İki yakaya nokta yazılır, sınır aralarından
  geçer — çizilen şey bir antlaşma hattı değil, **iki fiilî idarenin
  dokunduğu yer**, ve o 1923'te GERÇEKTEN vardı.
⚠️ Her kaydın `neden:` alanına ihtilaf YAZILIR — kayıtsız belirsizlik
  yarın kesinlik sanılır.

### 🔒 KOŞU BİTİNCE — SIRAYLA
```
① denetle.py  ② uret_devirler.py  ③ renk_olc.py (ŞART, veri değişti)
④ denetle_yayin.py  ⑤ surum_damgala.py  ⑥ push
+ girdi.py'ye BAĞLANACAK yeni dosyalar: yerlesimler_sinir_*.js
+ MOTOR 55 + RENK 5 maddesi kilidi AÇILIR (DENETİM AÇIK tasarımları hazır)
```

---

## 📍 29 AĞUSTOS 2026 — GÜN SONU DURUMU (pil %40'ta yazıldı)

```
🌍 DÜNYA PENCERESİ    box(-180,-60,180,85) · 3,48 kat · denetim TEMİZ ✅
📦 SAHİPLİK YAMASI    25 kayıt indi — üçüncü ailenin uygulayıcısı YOKMUŞ ✅
🚪 YAYIN KAPISI       yetim 45 → 8 · kalan 8 GERÇEK, adıyla kayıtlı ✅
📌 ÇATALCA            eklendi (2609 → 2610) — Trakya kolunun engeliydi ✅
⚔️ BALKAN SAVAŞLARI   3 kola sevk edildi ⏳
🔴 KAFKAS DÜZELTMESİ  19 kaydın 19'u DA İNMEMİŞ — DÜNYA PENCERE'de ⏳
```

**Aydın'da fişe takılınca SIRAYLA:**
```
① py arac/denetle.py            temiz mi (bugün temizdi)
② py arac/uret_petek.py         ~5s 15dk (dünya penceresi ilk kez)
③ py arac/uret_devirler.py
④ py arac/renk_olc.py           🔴 VERİ DEĞİŞTİ ⇒ ŞART
⑤ py arac/denetle_yayin.py      "YAYIN BAYAT" ancak burada kapanır
⑥ py arac/surum_damgala.py      sonra push
```
⚠️ Koşudan önce `arac/*.py` DONMUŞ olmalı — motor_izi her aşamada
bakıyor ve koşu sırasında `arac/` altına yazmak koşuyu ÖLDÜRÜR.
(Ben bunu bir kez yaptım: `girdi.py`ye dokundum, 4s 08dk gitti.)

**Koşunun öngörüsü** (DÜNYA PENCERE yazdı, koşudan ÖNCE):
```
MAZERETİ OLMAYAN  ① Osmanlı gövdesi DEĞİŞMEZ (±%0,5) — tutmazsa KOD YANLIŞ
                  ② ±180 sarması YOK — hiçbir petek meridyeni atlamaz
                  ③ ada kuralı ÇOK ateşler — kıtalar arası deniz eklendi
MAZERETİ OLABİLİR ④ km² ⑤ süre ~5s15dk ⑥ bozuk kenar ⑦ çöl tavanı ×2
```
🔴 Ve B2 köprüsü ilk kez sınanacak: **konkav kenar** (H-0003) ve
**köprünün yaslandığı gövdenin rengini alması** (H-0004). Karne
basılıyor: `🎨 B2 KÖPRÜ RENGİ: N DOĞRUDAN · M TÂBİ`.

---

## ✅ 1. DÜNYA PENCERESİ — **BİTTİ** (29 Ağu · denetim TEMİZ · çıkış kodu 0)

```
BOLGE = box(-180, -60, 180, 85)        3,48 kat
17 nokta düzeltildi (40,45 km → 0,10 km)
Bâdis: iki kez aracın önerisi tutmadı; tam maskeyle sondalandı,
       35.1721,-4.3009 → 35.1727,-4.3007 (67 m). ✓
denetle.py: SONUÇ temiz · konum 0 · Değişmez 7 ✓ 488
```
📌 Ve iki kusur yol boyunca çıktı: ayrıştırıcım iki satırı sessizce
kaçırdı (sayı tutuyor mu kilidi eklendi), ilk sondam maskeyi YEREL
sadeleştirip yanlış cevap verdi (evren dardı).

<details><summary>eski hâli</summary>

`BOLGE = box(-180,-60,180,85)` yazıldı (3,48 kat), ama **179 noktanın
"pencere dışı" muafiyeti kalkınca 18'i kara maskesi dışında çıktı.**

```
Ek denetim ✗ konum: 18 nokta kara maskesinin dışında (beklenen 0)
SONUÇ: İHLAL VAR — çıkış kodu 1
```

Denetim önerileri hazır ve **sınanmış** (`⚠️ bu öneri sınandı ve GEÇMEDİ`
damgası taşımayanlar güvenli). 17'si ≤5 km kıyı düzeltmesi, biri
(Bâdis) kendi testini geçmiyor.

- [x] 17 noktayı öneriyle düzelt
- [x] Bâdis'i ayrı ele al (öneri sınandı ve GEÇMEDİ)
- [x] `denetle.py` yeşil, çıkış kodu 0
- [x] commit — `0f688ec` + bu
</details>

---

## ⏳ 2. MERİÇ'İN BATISI — ölçüldü, **KALEM 3'E DEVREDİLDİ**

Ölçüm aşağıda duruyor ve BALKAN TRAKYA kolunun şartnamesine **başlangıç
kanıtı** olarak kondu — aynı kutu, aynı üç şehir. Ayrı iş olarak
tutmuyorum ki iki yerden birden yazılmasın.

> Emre: *"Balkan savaşlarından sonra Meriç nehrinin batısında Osmanlı
> toprağı kalmış görünüyor, bu hatalı olmalı. Teyid et düzelt."*
> Ve ekran görüntüsü üzerine: *"Bu tarihte haritanın bu şekilde olduğuna
> emin miyiz?"* — **HAYIR, emin değiliz. Ölçtüm, yanlış.**

**Ölçüm (1913-10-01 kesiti, Batı Trakya kutusu 40,5-41,8K / 24,0-26,4D):**

```
🔴 Drama      24,15°D   d: 1413-07-05 → 1923-10-29   TEK BLOK
              Balkan savaşları HİÇ yazılmamış. TDV: "bir ara Bulgarlar'ın
              eline geçen Drama, II. Balkan harpleri esnasında yeniden
              Yunanlılar tarafından zaptedildi"
🔴 Gümülcine  25,41°D   d: 1913-09-29 → 1920-05-27   Bulgar'dan sonra YİNE Osmanlı
🔴 İskeçe     24,89°D   aynı desen
🔴 Ferecik    26,17°D   aynı desen
🟢 Enez · İpsala — Meriç ağzının DOĞU/Türkiye yakası, muhtemelen DOĞRU
```

🟢 **Verinin kendi içindeki çelişki kanıt:** aynı kutuda **Dedeağaç ve
Sofulu `bulgaristan-kralligi`** yazılı. Yani bazı Batı Trakya kayıtları
doğru, üçü yanlış — tek bir oturumun hatası.

**Külliyatta HAZIR günler (ölçüldü):**
```
1912-10-23  Şark Ordusu bozgunu — Kumanova ve Selânik'in kaybı
1912-11-08  Selanik'in alınması
1913-05-30  Londra Antlaşması — I. Balkan Savaşı sona erdi
1913-07-21  Edirne Osmanlı tarafından geri alındı
1913-08-10  Bükreş Antlaşması        ← Drama · Kavala · Serez → YUNANİSTAN
1913-09-29  İstanbul Antlaşması      ← Batı Trakya → BULGARİSTAN
1913-11-14  Atina Antlaşması
```

- [ ] Drama · Gümülcine · İskeçe · Ferecik düzelt
- [ ] Enez ve İpsala'yı ayrıca doğrula (yanlış alarm mı)
- [ ] denetim yeşil · commit

---

## 🔵 3. BALKAN SAVAŞLARI 1912-1914 — GÜN BE GÜN

> Emre: *"Tüm Balkan savaşları 1912-1914 arası birinci ikinci balkan
> savaşlarında hangi şehir hangi ülkeye kaybedildi, ordular nereye kadar
> ilerledi, harita gün be gün nasıl değişti — bunu detaylı çalış ve
> haritayı da buna uygun hale getir, tekrar kontrol et."*

Kalem 2 bunun **küçük bir parçası**; bu iş bütün Rumeli'yi kapsıyor.
Oturumlara bölünecek (dosya bazlı):

- [x] şartname yaz — `oturumlar/BALKAN-SAVASLARI.md`
- [x] üç kola sevk et (3/3 adresli, 29 Ağu)
- [⏳] **TRAKYA** → UYGULAMA-0019 · Meriç kusuru BU KUTUDA
- [⏳] **MAKEDONYA** → ALTI BARDAK · Drama'nın 510 yıllık tek bloğu burada
- [⏳] **BATI** (Arnavutluk-Epir-Sancak) → YAMA KURTARMA
- [ ] Ege adaları (Limni · Midilli · Sakız · Rodos) — henüz sevk EDİLMEDİ
- [ ] yamaları uygula (`_sahiplik_uygula.py`) + denetim
- [ ] **Emre'ye tekrar kontrol** — kendisi *"tekrar kontrol et"* dedi

---

## ⚪ 4. KARAR ④ HİMAYE ŞERİDİ — ARAYÜZ'le birlikte inmeli

Tâbi toprak kendi rengiyle + sınırında ince Osmanlı şeridi.
🔴 Motor bugün `kayit["v"]`yi **TEK BİRLEŞİK GÖVDE** olarak yazıyor;
devlet ayrımı yok. Arayüz Eflak'ı Kırım'dan ayrı boyayamaz.
⇒ Motorun **devlet başına** tâbi gövde yayması gerek (`vp`), ve bu
**geriye uyumlu** olmalı (eski `v` kalsın) yoksa yarısı inince harita
bozulur.

- [ ] ARAYÜZ canlı mı ölç
- [ ] sözleşmeyi yaz, iki tarafa birden ver

---

## ⚪ 5. KÜÇÜK KALEMLER

- [ ] 🔴 **İKİ BEKÇİ ÇELİŞİYOR — `_isci_nabzi.py` PİLDEN HABERSİZ.**
      29 Ağu %22'de ölçüldü: pil bekçisi *"yeni iş başlatma, toparlan"*
      dedi, on üç oturum uydu ve sustu. Nabız o sessizliği **arıza** sanıp
      *"İŞÇİLERİ send_message İLE DÜRT"* dedi. Tavsiyeye uyulsaydı kendi
      toparlanma emrim çiğnenecekti.
      📌 Kusur ikisinde de değil, **aralarında**: nabız *"çıktı durdu"*
      diye bakıyor, *"durması İSTENDİ mi"* diye sormuyor.
      `CLAUDE.md`nin *"kusur ne tavanda ne yetim-yüz mantığında —
      İKİSİNİN ARASINDAYDI"* vakasının bekçi tarafı.
      ⇒ ÇARE: nabız pil eşiğini okusun; %40'ın altında *"sessizlik
      BEKLENEN"* desin. Küçük iş, ama %25'te BAŞLATILMADI (kendi kuralım).

- [ ] 🟡 **ŞEYH BEDREDDİN — tarih/yer eşleşmesi ÖLÇÜLMEDİ.**
      `savaslar.js:331` koordinatı Serez'e hizalandı (0031/H-0016, iki
      oturum bağımsız ölçtü, doğru). AMA kaydın tarihi `1416-05-01` ve
      Serez, Bedreddin'in **1420'deki idam yeri**; 1416 Börklüce'nin
      **Karaburun** safhası (İzmir ~38,6K/26,5D) ve Bedreddin'in kendi
      Deliorman safhası.
      ⇒ Koordinat düzeltmesi paket maddesine göre DOĞRU; ayrı soru şu:
        1416 simgesi Serez'de mi durmalı, yoksa tarih mi 1420 olmalı,
        yoksa isyan ÜÇ ayrı simge mi (Karaburun · Deliorman · Serez)?
      ⚠️ Bu soruyu BEN sordum ve ÖLÇMEDİM. Düzeltmeyi bloke etmedim.

- [ ] Kahul · Bolgrad noktaları (UYGULAMA-1 devretti)
- [ ] Sibiu · Debre · Foça-İzmir (YAMA KURTARMA devretti, araştırılmadı)
- [ ] ±180 komşuluk kaybı — **borç kaydı**, engel değil
      (Fiji↔Tonga 750 km, motor 353,7° görüyor)
- [ ] `SEYREK_ESIK_KM` — DÜNYA PENCERE önerdi (300 km, 313 nokta) ama
      *"uygulamadan önce ölçülmeli"* dedi: N=5 duyarlılığı · eşik değeri ·
      peteğe mi noktaya mı ait

---

## 🔒 KOŞU — Emre'nin emri

> *"Koşuyu ben Çanakkale'den Aydın'a varınca, Aydın'da fişe taktım koşu
> başlatalım derim, o zaman koşarsın. Şimdilik diğer işleri yapalım."*

**Bataryada koşu YOK.** Pil 14,8 Wh (sağlık %49) ⇒ koşu 25-35 dakikada
ölür ve motor `donemler.js`i EN SONDA yazdığı için **sıfır** üretir.


---

# 30 AĞUSTOS 2026 · GECE — ÜÇ KÖR DAL AÇILDI

Emre uyurken yapılanların **ölçülmüş** dökümü. Sabah bunu oku, tahtayı
baştan okumana gerek yok.

## 🔴 EN BÜYÜK BULGU: ÜÇ DENETİM DALI KÖRDÜ, ÜÇÜ DE "TEMİZ" DİYORDU

```
① savaş senkronu      AYLARDIR hiç ölçmüyordu — ayrıştırıcı kırıktı
② mükerrer çıktı      ihlaller ZAYIF listenin ALTINDA basılıyordu
③ Değişmez 4 (hayalet) ÜÇÜNCÜ HÂLİ hiç sormuyordu
```

### ① SAVAŞ SENKRONU — kök: Türkçe kesme işareti
`oku_pencere` yorumları siliyordu ama yalnız **satır BAŞINDAKİLERİ**.
`savaslar.js`in yorumları satır SONUNDA ve içlerinde `20'sinde` ·
`js'ten` var. Gövdede **309 tek tırnak — TEK SAYI** ⇒ ayrıştırıcı hayalî
bir dizgede kalıp kapanış `]`ini hiç görmüyordu. Dosya sağlamdı (node
okuyor: 171 savaş). `_yorumsuz()` yazıldı (`0df4651`).

**İlk koşuda iki ölçüm:**
```
savaş senkronu      164/171 kaydın maddesi var · 7 açık
hassasiyet düşüşü   15/164 çiftte dizin GÜNÜ biliyor, kronoloji BİLMİYOR
```
🟢 **15 → 0 KAPANDI** (ARAŞTIRMA 2S, `17fa60a`). On bir meşhur muharebe
ay hassasiyetinden güne çıktı — I. Kosova 1389-06-15 · Varna 1444-11-10 ·
İnebahtı 1571-10-07 · II. Viyana 1683-09-12 · Çanakkale 1915-03-18 ·
**Sakarya 1921-09-13**. Gün uydurulmadı, `savaslar.js`ten kopyalandı.
⚠️ Bedeli kaydedildi: `2t` 16 → 17 (tavan 42, ihlal değil).

📌 Kalan 7 kayıt **kusur değil MODEL BOŞLUĞU**: dizin kuşatmanın
BAŞLADIĞI günü, kronoloji BİTTİĞİ günü yazıyor. İkinci bir tarih alanı
yok. (Cecora +387g · Rodos +66g · II. Viyana +49g · Bağdat +39g ·
Hotin +37g · Çanakkale +37g · Şahkulu +31g)

### ② MÜKERRER — kök: çıktı SIRASI, ve beni İKİ KEZ yanılttı
Zayıf ölçüt listesi (47 çift) ihlal listesinin (2-4 çift) ÜSTÜNDE
basılıyordu; göz uzun olana düşüyor. Ben iki kez zayıf listeyi gerçek
ihlal sanıp öyle iş dağıttım. DENETİM AÇIK kökü buldu ve sırayı
çevirdi: **ihlaller ÖNCE, zayıf liste SONRA ve yalnız SAYIYLA.**
🟢 **Mükerrer 4 → 0.** (2S iki tanesini kaldırdı, KRONOLOJİ başlıkları
ayrıştırdı, UYGULAMA-3 Şammar'ı kapattı.)

### ③ DEĞİŞMEZ 4 — ve bu, gecenin en sert bulgusu
Denetim yalnız *"dönem BAŞI künyeden sonra mı"* diye soruyordu.
**Sormadığı: dönem devletin ölümünü AŞIYOR mu?**
```
🔴 590 dönem · 35 kimlik — üç yıldır görünmez
   rusya   315 dönem   6,6 yıla kadar
   zend    129 dönem
   maratha   7 dönem   105,4 YIL (1818'de öldü, 1923'e kadar boyanıyor)
   filipin-racaliklari 63,5 yıl · macaristan 40,0 · akkoyunlu 20,0
```

🔴🔴 **VE DENETİM AÇIK ŞUNU İSPATLADI:** `CLAUDE.md §3.5`in dört kurucu
vakasının **ÜÇÜ DE bu biçimdeydi** —
```
Batnoz   bizans 1281→1537   künye biter 1453-05-29   dönem BAŞI künye İÇİNDE
İbrim    memluk →1555       künye biter 1517-04-13
Sevâkin  memluk →1557       künye biter 1517-04-13
```
⇒ **Değişmez 4, kendisini doğuran vakaların çoğunu yapısal olarak
yakalayamıyordu.** Üç yıl boyunca *"o vakaları önlüyorum"* sanılarak durdu.

Dal indi (`Değişmez 4c`, `BEKLENEN_ASAN = 590`, ayrı sayaç, `C13` 4/4
sınandı). Kova dökümü:
```
🟡 A) ardıl künye VAR    367   → kimlik dönüşümü (rusya 315 · macaristan 15 · hafsi 12)
🔴 B) ardıl künye YOK    223   → künye araştırması (zend 129 · pagan 14 · ilhanli 12)
```

## 🟢 YAYIN KUSURU — üç dosya bir gündür görünmüyordu
`olaylar_ek19.js` (29 Ağu) · `ek21.js` · `ek22.js` `data/` altında
yaşıyordu ama **`index.html`de YOKTU.** `denetle.py` glob'ladığı için
denetim TEMİZ diyordu, **kullanıcı maddeleri GÖRMÜYORDU.**
Bağlandı (`7b11b50`), doğrulandı: 25/25, ölü referans yok.
📌 Ve bu ders `index.html`in kendi yorumunda **zaten yazılıydı**.
Ders vardı, **nöbetçi yoktu.**

## SINIR YERLEŞİMİ — ŞARTNAMEM İKİNCİ KEZ ÇÜRÜDÜ
İki kol da dosyalarını **KASTEN BOŞ** bıraktı ve gerekçesi ölçüm:
```
benim vekilim (çift mesafesinin yarısı)   ~35-75 km öngörüyordu
OPUS 85'in gerçek ölçümü                   ortanca 6,37 km
OPUS 86'nın ölçümü                         ortanca 3,3 km
⇒ İŞ SANILANDAN ÇOK AZ. Hedef "her kesimi düzelt" değil,
  "KÖTÜ KESİMLERİ BUL" olmalı.
```
🔴 **Ve çift kuralı artık bir teorem:** `sapma = |dB−dA|/2`
```
+Çıldır tek              6,37 → 6,83   KÖTÜLEŞTİ (tek nokta devleti BÜYÜTÜR)
+Çıldır ↔ +Kartsakhi     6,37 → 6,18   çift VE simetrik
+Nehrî  ↔ +Uşnu          6,37 → 6,83   çift AMA simetrik değil (20↔30 km)
```
⇒ **Çift olmak yetmiyor, SİMETRİK olmalı.**

## KOŞU
00:32'de başladı · devlet 80/396 · ~2 saat kaldı · PID 8384 sağ.
**Bitince:** `denetle.py` → `uret_devirler.py` → `renk_olc.py` (ŞART,
veri değişti) → `denetle_yayin.py` → `surum_damgala.py` → push.

## KOŞUDAN SONRA — kilitli oldukları için bekleyenler
```
① data/yerlesimler_sinir_*.js → girdi.py'ye kaydet
② Kafkas dosyası yeniden adlandırma (M-1734)
③ _yer_ara.py Türkçe yanlış-negatif (ı/i · ş/s · ğ/g · ç/c · ö/o · ü/u)
④ MOTOR kovasındaki 58 kalem
```

## AÇIK MADDE: 187 → dağıtıldı
```
MOTOR 58   koşuya bağlı, BEKLİYOR
ARAYUZ 26  → ARAYÜZ oturumu (js/app.js · css/style.css)
KRONOLOJI  → ARAŞTIRMA 2S
VERI       → UYGULAMA-1 (rusya 315) + kalanlar
? 32       → UYGULAMA-3 sınıflandırdı, kovalara dağıldı
B kovası 94 → UYGULAMA-3 (künye araştırması)
zend 129    → DENETİM AÇIK (tek künye düzeltmesiyle kapanabilir mi)
```


---

# 30 AĞUSTOS 09:40 · KOŞU BİTTİ, YAYIN ÇIKTI — SABAH RAPORU

## 🟢 YAYIN r4325 CANLIDA
```
koşu        00:32 → 08:31 (8 saat) · çıkış kodu 0
            "Doğrulama: tüm yerleşimlerin peteği geçerli ✓"
denetim     SONUÇ: temiz · çıkış kodu 0 · SIFIR ihlal
damga       r3753 → r4325
```
**İlk kez kullanıcıya giden üç motor değişikliği:**
```
DÜNYA PENCERESİ   BOLGE L-şekli → box(-180,-60,180,85)
İÇBÜKEY KÖPRÜ     B2_KAVIS 0.35
KÖPRÜ RENGİ       yaslandığı gövdenin rengini alır
```
Yabancı alan **+6,9% … +19,5%** (dokuz kesitin dokuzu) — pencere açılıyor.
Osmanlı −0,1% … −0,8% (köprü daralması, beklenen).

## 🔴 BİLEREK YAYINLANAN GECİKME — Emre bunu bilmeli
`denetle_yayin.py` *"YAYIN BAYAT"* diyor ve **doğru söylüyor**: koşu
başladıktan sonra **30 yerleşim dosyası** değişti. Motor girdiyi koşu
başında anlık görüntüler.
```
⇒ EN BÜYÜĞÜ: HAYALET-RUSYA partisi (344 dönem)
  Bu haritada Çarlık Rusyası HÂLÂ 1923'e kadar boyalı görünüyor.
  Bir sonraki koşuda düzelecek.
```
📌 Kusur değil **gecikme** — ama kayıtsız gecikme kusurdan ayırt edilemez.

## GECENİN BİLANÇOSU — dört kör dal açıldı
```
① savaş senkronu    AYLARDIR hiç ölçmüyordu (Türkçe kesme işareti
                    ayrıştırıcıyı kırıyordu) → açıldı, 15 kalem verdi,
                    15 → 0 kapandı (11 meşhur muharebe güne çıktı)
② mükerrer sırası   ihlaller zayıf listenin ALTINDA basılıyordu, beni
                    İKİ KEZ yanılttı → sıra çevrildi, mükerrer 4 → 0
③ Değişmez 4c/4d/4s "dönem künyeyi kısmen örtüyor mu" HİÇ sorulmuyordu
                    → 911 dönem görünür oldu (136'nın 6,7 katı)
④ denetle_yayin     kapının KENDİSİ çöküyordu (KeyError), sürüm damgası
                    denetimi hiç koşmuyordu → düzeltildi
```
🔴 **VE ③'ÜN EN SERT SONUCU:** `CLAUDE.md §3.5`in dört kurucu vakasının
**üçü de** `4c` biçimindeymiş — yani `Değişmez 4` üç yıl boyunca
*kendisini doğuran vakaları* yapısal olarak yakalayamıyormuş.

## BİTEN İŞLER
```
HAYALET-RUSYA   344 → 0     (rusya → sovyet-rusya, tek commit'te)
hassasiyet      15 → 0      (I. Kosova · Varna · İnebahtı · Sakarya…)
mükerrer         4 → 0
Değişmez 4     136 → 8      (iran/macaristan/romanya ardıl künyeleri)
ARAYÜZ         26/26 işlendi, 3'ü uygulandı (deniz rengi · yabancı
                başkentler · sürüm etiketi)
32 sınıflandırılmamış kalem → kovalara dağıtıldı
```

## 🔴 SIRADAKİ KOŞUNUN İLK İŞLERİ
```
① RENK BORCU — renk_olc 3 çakışma buldu (renkler.py'ye dokunulmadan!)
     5,5  isvec ↔ sovyet-rusya            ← 14 → 344 kullanıma çıktı
     9,9  ingiliz-kuzey-amerika ↔ ispanya ← dünya penceresi
    10,1  meiji-japonya ↔ sovyet-rusya
   + novgorod #84c9cf su rengine ΔE 16,6 (kıyı gövdesi suya karışıyor)
② girdi.py'ye bağlanacak partiler (yayın kapısı sayıyor):
   yerlesimler_4ff22b · yerlesimler_amerika2 · yerlesimler_hindistan ·
   yerlesimler_8beb2b   ⇒ "6. koşunun İLK işi" diye damgalılar
③ 9 yetim dosya sınıflandırılacak — en önemlisi
   yerlesimler_kafkas_duzeltme.js (20 kayıtlık YAMA, uygulanmayı bekliyor)
④ _yer_ara.py Türkçe yanlış-negatif (ı/i · ş/s · ğ/g · ç/c · ö/o · ü/u)
⑤ Kafkas dosyası yeniden adlandırma (M-1734)
```

## ⚠️ EMRE'YE SORULACAK — TEK SORU
**Yerleşim rehberi (gazetteer) indirilsin mi?**
```
① ne için    sınır yerleşimi programı, köy düzeyinde koordinat
② niçin      hedef 5 km sapma; elle tahmin ±3-5 km ⇒ hatanın kendisi
             hedef kadar büyük, o yüzden nokta YAZILMADI
③ ölçüldü    depoda yok. Viabundus açıldı: 1092 kasaba ama
             48,72-60,72 K (Kuzey Avrupa) — Türkiye sınırına DEĞMİYOR,
             Balkanlarda da yaramaz (Belgrad 44,8 K)
```
🔴 Bu cevap gelmeden **sınır yerleşimi Doğu kolu kapalı** — ve iki kol da
dosyalarını KASTEN BOŞ bıraktı, çünkü ölçüm noktaların sapmayı
BÜYÜTTÜĞÜNÜ gösterdi.

## SINIR PROGRAMI — şartnamem İKİ KEZ çürütüldü, ikisi de kayıtlı
```
benim vekilim   ~35-75 km sapma öngörüyordu
gerçek ölçüm    ortanca 6,37 km (Doğu) · 3,3 km (Güney)
⇒ İŞ SANILANDAN ÇOK AZ. Hedef "her kesimi düzelt" değil
  "KÖTÜ KESİMLERİ BUL" olmalı.
```
Ve çift kuralı artık bir **teorem**: `sapma = |dB−dA|/2` ⇒ tek yakaya
nokta koymak bisektörü karşı yakaya iter, yani **devleti büyütür.**
Çift olmak yetmiyor, **SİMETRİK** olmalı (Nehrî↔Uşnu 20↔30 km, kötüleşti).


---

# 31 AĞUSTOS 2026 · DEVİR NOTU — compact öncesi sağlama

> Bu bölüm **compact ya da bayrak devri** için yazıldı. Devralan
> koordinatör tahtayı baştan okumasın; buradan devam etsin.
> Yazan: ORHANGAZİ · saat ~20:30

## 🟢 KOŞU — ŞU AN KOŞUYOR

```
başladı   31 Ağustos ~18:53      log: kosu_31agu.log
durum     devlet 70/401 · ~1 saat kaldı (20:20 itibarıyla)
süreç     PID 7788 · CPU 4885s · 1,9 GB
```

🔒 **KİLİTLİ:** `arac/uret_petek.py · arac/girdi.py · arac/renkler.py`
Dokunmak koşuyu ÖLDÜRÜR (83 dk ve 4s08dk, iki ölçülmüş vaka).
🟢 `data/*.js` yazmak GÜVENLİ (girdi başta fotoğraflandı) — ama **bu
koşuya girmez**, bir sonrakine kalır.

### KOŞU BİTİNCE — altı adım, sırayla
```
① py arac/denetle.py                temiz mi
② py arac/uret_devirler.py          devirler.js — uret_petek'ten SONRA
③ py arac/renk_olc.py               🔴 ŞART — veri değişti
④ py arac/denetle_yayin.py          yayın kapısı
⑤ py arac/surum_damgala.py          ?v=rNN yükselt
⑥ git push                          ~40-60 sn sonra canlıda
```
⚠️ Koşu bitince **MOTOR kovasındaki 62 madde açılır** — o güne kadar
onlara dokunulmaz.

## EMRE'NİN BUGÜNKÜ KARARLARI — beşi de kayda geçti

```
① BEŞ İŞ SIRASI: RENK TABANI → KOŞU → PAKET TRİYAJI → 1923 ÇIPASI
   → KORİDOR AĞININ DÜNYAYA YAYILMASI
   + "arada imkân oldukça paketleri bitirmek için görevlendirme yap,
      HIZ ve DOĞRULUKTAN TAVİZ VERMEDEN"
② REHBER: "B'yi yapalım, TAM DÜNYA — ama SADECE SINIR YERLEŞİMLERİNİ
   alacak şekilde süzelim." Ham dosya depoya GİRMEZ.
③ SIRA TERS: "Önce 1923 sınırlarını BİREBİR çizelim, sonra GERİYE
   gelerek sınırı değişmiş ülke varsa o sene için kesinleştirelim.
   Almanya 1918'de değiştiyse yansıtalım."
④ 🔴 EN BÜYÜĞÜ — TOPOGRAFYA: "Yerleşim yerlerinin bölgelerini artık
   TAMAMEN topografyaya dayandıralım. Dağ, tepe, nehir, geçit, koridor
   — yayılımlar gerçekçi olsun. Sınırlar dağa ya da nehire yaslansın.
   Aralarındaki bölgeleri bu topografyaya göre bölsün. Ne gerekiyorsa yapalım."
⑤ CEPHANE: haftalık limit %58 (31 Ağustos öğleden sonra ölçümü)
```

## KİM NEREDE — ⚠️ AD ile OTURUM BAŞLIĞI AYRIŞIYOR

```
tahta adı              oturum başlığı      iş
────────────────────────────────────────────────────────────────
RENK AÇIKLIK TABANI    ARAYÜZ              ✅ BİTTİ (0a411f8)
PAKET DEFTERİ          UYGULAMA-3          8 inmemiş hüküm + 27 çelişki
REHBER 1923            UYGULAMA-ERKEN      ✅ ilk parti (4 nokta) · rehber sürüyor
KORİDOR DÜNYA          KORİDOR DÜNYA       kapsam kararı BEKLİYOR (aşağıda)
KRONOLOJİ TRİYAJ       ARAŞTIRMA 2S        KRONOLOJI 36
VERİ TRİYAJ            UYGULAMA-1          VERI 40
YOL VERİSİ ARAŞTIRMA   UYGULAMA-0035       (b) — ORBIS/DARMC ölçümü
MALİYET-MESAFE         UYGULAMA-0019       🔴 topografya işi — 20:2x'te sevk
```

## 🔴 BUGÜN BULUNAN İKİ HABERLEŞME KUSURU

### ① `tahta.json` alan adı: `kimden`, `kim` DEĞİL
```
`kim` alanını kullanan mesaj:     0
`kimden` alanını kullanan mesaj:  1857
```
⇒ Tahtayı `kim` ile sorgulayan **her betik sessizce boş döner.**
🔴 Bu yüzden REHBER 1923'ü **haksız yere sessiz ilan ettim**; üç mesajı
ve bir commit'i vardı. Kanıt ekrandaydı (her satır `None → ORHANGAZI`
basıyordu) ve **görmezden geldim.** Bulan: REHBER 1923.
⚠️ Aleti düzeltmek AÇIK BİR İŞ — henüz kimseye verilmedi.

### ② Tahtaya yazmak BOŞTA DURAN oturumu UYANDIRMIYOR
`MALİYET-MESAFE` görevini tahtaya yazdım; o adda oturum yoktu ve
**kimse almadı.** Emre'nin en büyük talimatı ~4 saat sahipsiz kaldı.
```
⇒ KURAL: idle oturuma iş vermek için `send_message` ŞART.
   Tahta yalnız bekçisi koşan oturuma ulaşır.
```

## KORİDOR — HEDEF TANIMI DÜZELTİLDİ, KARAR EMRE'DE

🔴 **"Koridor" adı İKİ AYRI ve İLGİSİZ şeyde kullanılıyor:**
```
uret_petek.py:1576  _b3_koridor_kirp()  → GEOMETRİ: dar girintiyi kapatır
data/koridor*.js    KORIDOR_*_DUGUM     → MENZİL AĞI: konak + saat/km
                    (grep KORIDOR uret_petek.py → SIFIR sonuç)
```
Benim brifingim ikisini birleştirmişti; KORİDOR DÜNYA ayırdı.

**Ve "dünyaya yayma" mevcut kaynakla KARŞILANMIYOR:**
```
OWTRAD künyesi: "Osmanlı ve komşuları, 1300-1600"
154 düğüm (107 yerleşim + 47 sentetik) · 174 kenar (131 kara + 43 deniz)
23 ülke kodunun HEPSİ Balkan-Anadolu-Levant
yerleşim karşılığı OLMAYAN düğüm: yalnız 9 ⇒ kazanç DÜĞÜMDE değil KENARDA
```
⇒ Emre'ye üç şık sunuldu, **(a) seçildi:**
```
(a) KARMA — Osmanlı kuşağında OWTRAD, dünyada DEM'den TÜRET   ← SEÇİLDİ
(b) dış veri tabanlarını ölç (ORBIS/DARMC)                     ← PARALEL, sevk edildi
(c) yalnız Osmanlı kuşağında yoğunlaştır
```

## MALİYET-MESAFE — altyapı ZATEN VAR

```
arac/maliyet.py            32 KB · 15 Ağustos · PROTOTİP
veri-kaynak/yukseklik/     atlas 192 MB + dunya 626 MB  ← İKİSİ DE DİSKTE
uret_petek.py              EGIM_CARPANI = 0.005 (kalibre)
                           KARA-KISITLI DIJKSTRA (:1819)
denetim/MALIYET-ONGORU.md · denetim/EGIM-CARPANI-OLCUM.md
```
Prototipin kendi notu: *"yükseklik — VERİ YOK — katman duruyor, ağırlığı
0. **Veri gelince TEK SATIRLA açılır.**"* ⇒ **O gün geldi.**

⚠️ `altyapi_durum.py` *"topoğrafya motora BAĞLANMADI"* diyor — **BU SATIR
YANLIŞ**, kod eğim çarpanını kullanıyor. Alet düzeltilmeli.

**Sınav ölçütü:** `CLAUDE.md §2`de ADIYLA sayılan vakalar düzeliyor mu?
Sardinya/Annaba · Kefalonya/Ayamavra · Brač-Hvar-Korčula/Mostar.
**En belirleyici sayı:** Dijkstra ızgarası koşuyu kaç kat büyütür?

## TAVAN POLİTİKASI — bugün konuldu

> **Tavanı yükseltmek de düşürmek de, ancak ÖLÇÜM neyin değiştiğini
> söylediğinde meşrudur.**

```
zend'de sayıyı DÜŞÜREN çare REDDEDİLDİ — künye doğruydu, veri yanlıştı
   ("sayıyı düşüren en kolay yol, yanlışı meşrulaştırmaktır")
Değişmez 7 494 → 514 KABUL EDİLDİ — 514'ün 492'si eski pencere İÇİNDE
   (eski tavan 494'ün altında) ⇒ eski coğrafyada artış YOK
4c/4d/4s 275/461/140 → 277/465/142 — 4 sınır noktası bağlandı, dönemleri
   `ilhanli 1281-01-01` ve `zend 1747-1796` bilinen kovalarında
```
🔴 **Ve bir uyarı (KORİDOR DÜNYA):** üç turdur aynı iki kayıt ailesi için
tavan yükseltiyoruz. *"Borç büyüdü"* demek yerine *"beklenen budur"*
demeye başlıyor. **`zend`in 133 kaydı artık bir tavan işi değil bir
DURDURMA işi** — her yeni sınır partisi onu büyütüyor. Tarif hazır:
`f: 1747-06-20 → 1751-01-01` · `t: 1796-01-01 → 1794-01-01`, arada FETRET.

## AÇIK MADDE — 180

```
MOTOR      62   🔒 koşuya bağlı
VERI       40   KRONOLOJI 36   ARAYUZ 24   DEVLET 8   SAVAS 5   RENK 5
```
```
defterin dediği 187 → ölçüldü 180 (7 kapandı)
8 inmemiş hüküm  · 27 çelişki (defter kapalı, rapor açık) → UYGULAMA-3'te
```
**Ölçülmüş hız:** 9 günde 451 madde geldi, 376 kapandı.
Net tempo 30 Ağustos gecesi **+5/gün** (324 commit'e rağmen — iş altyapıya
gitti), 28 Ağustos'ta **+81/gün** (triyaj günü).
⇒ *Emek ≠ paket kapanması.* Süreyi belirleyen, oturumların **neye
yöneltildiği.**

## 🔴 BUGÜN DÜŞTÜĞÜM ÜÇ ÖLÇÜM TUZAĞI — devralan tekrarlamasın

```
① `x`/`y` okudum, kanonik şema `lat`/`lon` (girdi.py:644)
   ⇒ 3 km mükerrer testim BÜTÜN kayıtları atladı ve "0" dedi.
     Boş test, doğru testle TESADÜFEN aynı sonucu verdi.
② `kim` okudum, alan adı `kimden`
   ⇒ 1857 mesajın hepsi `None`; bir oturumu haksız yere ölü ilan ettim.
③ `maddeler` sarmalayıcısı aradım; HUKUM-*.json'da ÜST SEVİYE doğrudan
   {paket: {madde: {hukum}}}  ⇒ üç kez yanlış şema tahmin ettim,
   dördüncüde DOSYAYA BAKTIM.
```
📌 Üçü de aynı aile: **şemayı tahmin etme, veriye bak.** Ve ②'nin
kanıtı ekrandaydı — `None` satırları. *Aletin bastığı uyarıyı okumak,
onu çalıştırmak kadar önemli.*

## YARININ İLK İŞLERİ
```
① Koşu bitişini bekle → altı adımlık yayın dizisi
② MOTOR 62 kalemini aç ve dağıt
③ `kimden`/`kim` alet kusurunu düzelt (kimseye verilmedi)
④ `altyapi_durum.py`nin "topoğrafya bağlanmadı" satırını düzelt
⑤ Koridor kapsamı: (a) karma yol — DEM'den türetme pilotu
⑥ 8 inmemiş hüküm + 27 çelişki (UYGULAMA-3'te, rapor bekleniyor)
```


---

## 🔴 31 AĞUSTOS · EMRE KARARI — TAVAN KALDIRILACAK (ek)

> *"Maliyet-mesafe indiğinde tavanı **önce tamamen kaldıralım.** Duruma
> göre sonra bir **emniyet kemeri** olarak koyarız geri."*

```
① maliyet-mesafe üretime girince TAVAN_KM TAMAMEN KALKAR (küçültülmez)
② ÖLÇÜLÜR
③ gerekirse GERİ konur — ana mekanizma olarak değil, emniyet kemeri olarak
```

### VE BUNUN ÖLÇÜLMÜŞ BİR GEÇMİŞİ VAR — tekrarlanmasın
```
27 Ağu   Emre {1:400, 2:400, 3:200, 4:100} dedi. Gerekçesi SAĞLAMDI.
28 Ağu   GERİ ALINDI: 1600 −%10,6 · 1700 −%12,1 · 1800 −%16,8 · 1900 −%19,0
         Koşudan ÖNCE yazılmış "±%2" öngörüsü MAZERETSİZDİ, çürüdü.
```
🔴 **Niçin tutmadı — ve bu, tavansız senaryonun ölçütünü belirler:**
> *"Tavan komşu ortasında KESMİYOR, peteğin YARIÇAPINI MUTLAK kırpıyor.
> Aradaki toprak SAHİPSİZ kalıyor — sınır kaymıyor, HARİTADA DELİK açılıyor."*
> ⇒ *"Kaç nokta tavana çarpar" yanlış soru; doğrusu **"kaç km² toprağı
> sahipsizleştirir"**.*

### ⚠️ VE BİR YÖNETİM KUSURU KAYDEDİLDİ
Emre'nin 27 Ağustos kararı 28 Ağustos'ta geri alındı. **Geri alma
DOĞRUYDU** (ölçüm net ve öngörü mazeretsizdi). Ama:
```
· gerekçe KODA yazıldı
· Emre'ye bildirildiğine dair TAHTADA İZ YOK (arandı, bulunamadı)
· Emre bugün (31 Ağu) hâlâ yürürlükte sanarak sordu ⇒ bildirilmemiş
```
📌 **Kullanıcının KENDİ kararını geri almak, kullanıcının onayını
gerektirir.** Ölçüm haklı olsa bile. Bu, *"defter kapalı diyor gerçek
açık"* ailesinin en ağır üyesi — çünkü burada kapanan şey bir madde
değil, **bir karar.**
⇒ KURAL: Emre'nin adıyla verdiği bir karar geri alınacaksa, geri alma
**ona bildirilir** — koda yazmak yetmez.

### TAVANSIZ SENARYONUN ÖLÇÜTÜ (MALİYET-MESAFE'ye verildi)
```
① kaç km² SAHİPSİZLEŞİYOR        ← 28 Ağustos'u çürüten sayı
② Değişmez 1 / 1b bozuluyor mu
③ Osmanlı doğrudan+tâbi toplamı — 1600·1700·1800·1900 kesitlerinde
④ ve ANCAK sonra: kaç petek değişti, sınır sırta oturdu mu
```
🔴 **Asıl sınav ÇÖL:** Sardinya/Kefalonya deniz engeliyle çözülür (kolay).
Ama Sahra **düz ve alçak** — eğim çarpanı orada az ceza verir. Maliyet-
mesafe çölde tavanın işini yapmayabilir; `COL_PUAN_ESIK` (8) ile birlikte
çalışması gerekebilir (o mekanizma 27 Ağustos koşusunda ÇALIŞTI:
14.468 petek-gün çölde takıldı).

### GÂT VAKASI — tavanın yan etkisinin canlı örneği
Emre 31 Ağustos'ta Gât'ın iki yanındaki çıkıntıyı sordu. Ölçüldü:
```
Gât   k4 → tavan 140 km        Ubârî 317 km ötede, o da k4
      140+140 = 280 < 317      ⇒ arada 37 km KİMSENİN DEĞİL
Murzuk k2 → tavan 420 km, 390 km ötede ⇒ YETİŞİYOR, boşluğu dolduruyor
⇒ Gât'ın 140 km'lik DAİRESİ Murzuk'un gövdesine yapışıyor
⇒ bir daire bir gövdeye yapışınca TAM İKİ KÖŞE çıkar = Emre'nin gördüğü omuzlar
```
🟢 Emre'nin *"orada koridor yok, enklav yok"* gözlemi ÖLÇÜMLE DOĞRULANDI
(B2 eşiği 250 km, Gât 317 km ötede ⇒ köprü kurulmuyor).
⇒ **Sebep A1 yarıçap tavanı** — yani tavan kalkınca bu vaka da kapanır.


---

# 1 EYLÜL · BAYRAK DEVRİ — devralan koordinatörün İLK EKRANI

> Tahtayı baştan okuma. Bu bölüm yeter. Yazan: ORHANGAZİ, devir anında.

## DURUM — bir cümle
Koşu bitti, **yayın r4391 canlıda**, sekiz iş kolunun sekizi de teslim
etti. Sıradaki işler taze başlıyor; bu yüzden devir yapıldı.

## 🟢 YAYINDA OLAN (r4391 · `bbb902a`)
```
17 kimliğin rengi açıldı   bizans #0f0f5d → #281e6f (Emre'nin "gölge" şikâyeti)
344 hayalet Çarlık Rusyası dönemi düzeltilmiş
52 dosyalık veri borcu · dünya penceresi · eğim DEM dünya kapsamı
```
⚠️ **DÖRT KAYIT GERİDE** — Emre onayıyla (a şıkkı). Koşu girdiyi 18:53'te
fotoğrafladı, sonra 4 kayıt yazıldı: `Widyân · Nuhayb` (Necef dolgusu) ·
`Şeyhrumi · Şeyh Salû-yi Ulyâ` (sınır çifti). Sonraki koşuda kapanır.

## 🔴 DAĞITIM LİSTESİ — sırayla, gerekçeleriyle

```
① MALİYET-MESAFE AŞAMA 3        ← EN BÜYÜK · devam eden tek iş
   Aşama 1-2 BİTTİ: DEM bağlandı · GÖL KUSURU bulunup düzeltildi ·
   eğimin payı İLK KEZ ölçüldü.
   🔴 VE KOORDİNATÖRÜN HİPOTEZİ ÇÜRÜDÜ: "maliyet-mesafe tavanın yerini
      alır" YANLIŞ — erişimi yalnız −%12 kısıyor, hâlâ kaldırılan
      tavanın 2,5 KATI. ⇒ EMNİYET KEMERİ ZORUNLU.
   🟢 Ama daha iyi bir öneri çıktı: **emniyet kemeri ÇÖL FRENİ olmalı,
      yarıçap tavanı DEĞİL** — çünkü TAVAN_KM'i geri koymak
      maliyet-mesafenin sahiplendiği hücreleri yine sahipsizleştirir.
   ⇒ AŞAMA 3: çöl freni tasarımı + `uret_petek.py`ye bağlama ÖNERİSİ
      (uygulamayı koordinatör yapar; o dosya parmak izli)
   📌 Bu oturumun bağlamı DEĞERLİ (iş ortasında) — devir raporu istendi.

② ÜÇ DOSYAYI BAĞLA — SONRAKİ KOŞU BAŞLAMADAN ÖNCE
   yerlesimler_4ff22b.js · amerika2.js · hindistan.js  (2'şer nokta)
   Renkleri HAZIR (hawaii-kralligi · merina · farukiler · apaci-ovalar ·
   komanci). `girdi.py` VE `index.html`, İKİSİ BİRDEN.
   🔴 KAYIT ÜÇÜNCÜ KEZ BAYATLADI: `denetle_yayin.py:955-975` bunları
      "6. koşunun İLK işi" diyor ve o koşu geldi geçti.
   ⚠️ KURAL: **"Anlık görüntü YAZABİLİRSİN der, BAĞLAYABİLİRSİN demez."**
      Koşu BAŞLAMADAN önce bağla; sonra bağlamak yayını BAYAT yapar.

③ PAKET TRİYAJI — 180 açık
   MOTOR 62 **ARTIK AÇIK** (koşu bitti, engel kalktı).
   VERI 40 · KRONOLOJI 36 · ARAYUZ 24 · DEVLET 8 · SAVAS 5 · RENK 5
   Ölçülmüş hız: triyaja yöneltilmiş 3 oturum ≈ 30/gün.

④ 1923 ÇIPASI — yöntem TUTTU, ötekilere yay
   KUZEY-A çifti: sapma **7,29 → 0,73 km** (10 kat). Doğu kolu bitti.
   Kalan: Güney (Suriye-Irak) · Trakya/Balkan · dünya.
   ⚠️ Rehber (gazetteer) kararı: Emre **B**'yi seçti — tam dünya indir,
      YALNIZ sınır yerleşimlerini süz, ham dosya depoya GİRMEZ.
      `denetim/BULGU-YOL-VERISI.md` okunmalı (henüz koordinatör okumadı).

⑤ KORİDOR — kapsam kararı: Emre **(a) karma yol**u seçti
   Osmanlı kuşağında OWTRAD (gerçek menziller), dünyada DEM'den TÜRET.
   ⚠️ "Koridor" adı İKİ ayrı mekanizmada: `_b3_koridor_kirp()` (geometri)
      ve `data/koridor*.js` (menzil ağı). Karıştırma.

⑥ GÂT ÇIKINTILARI — sebep ölçüldü, ÇARE tavan kalkınca gelir
   Gât k4 (tavan 140 km) · Ubârî 317 km · Murzuk k2 (420 km) boşluğa
   yetişiyor ⇒ Gât'ın 140 km'lik DAİRESİ gövdeye yapışıyor, iki omuz
   çıkıyor. B2 köprüsü DEVREDE DEĞİL (eşik 250 km).
   ⇒ ①'in çözdüğü sınıf. Ayrı iş açma.
```

## ⚠️ DEVRALANA ÜÇ UYARI — bugün bunlara çarptım

```
① ŞEMAYI TAHMİN ETME, VERİYE BAK
   `lat`/`lon` (x/y değil) · `kimden` (kim değil) ·
   HUKUM-*.json üst seviye {paket:{madde:{hukum}}} (maddeler sarmalayıcı YOK)
   Üçü de sessizce boş sonuç verdi; biri bir oturumu haksız yere ölü ilan ettirdi.

② İKİ ALET ZIT ÖĞÜT VEREBİLİR
   `_bagli_mi.py` "bağla" dedi, `denetle_yayin.py` "kasten bekliyor" diyordu.
   Önce koşturduğuma uydum, geri almak zorunda kaldım.
   ⇒ Bir aletin öğüdünü uygulamadan önce ÖTEKİNİN aynı dosya hakkında
     ne dediğine bak.

③ TAHTA, BOŞTA DURAN OTURUMU UYANDIRMIYOR
   `send_message` şart. Tahtaya yazılan bir görev 4 saat SAHİPSİZ kaldı.
```

## 📌 VE BİR YÖNETİM KURALI — bugün doğdu
> **Kullanıcının ADIYLA verdiği bir karar geri alınacaksa, geri alma ONA
> BİLDİRİLİR — koda yazmak yetmez.**
Emre'nin 27 Ağustos tavan kararı 28'inde ölçümle geri alındı (haklı
olarak), gerekçe koda yazıldı, **ama ona söylenmedi** — 31 Ağustos'ta
hâlâ yürürlükte sanarak sordu.

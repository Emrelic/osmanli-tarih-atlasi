# KASA-SAHIP-BOLGE-1010 — dört bölgede sahip hatası TAM TARAMASI

Görev: YILDIRIM BAYEZIT (DIKIS-KAPI kararı ⑤) · Araştırmacı: KASA · `data/` DONUK · öneri + csv.
Dayanak: KAYNAKSIZ-ORNEKLEM iki turda 19 sahip hatası ölçtü, bölgesel yoğunlaşma buldu. Bu tur **örneklem değil,
TAM tarama**: evren küçük, desen biliniyor.
**Bölgeler (ölçümden ÖNCE sabit kutular, nokta koordinatıyla):**
- **K. Afrika kıyısı** (Fas–Cezayir–Tunus Mağribi): enlem 33,0-37,6 · boylam -10,0-11,6.
- **Tihâme** (Kızıldeniz kıyı ovası, Asîr–Yemen): enlem 12,5-21,0 · boylam 39,0-43,6.
- **Gîlân** (Hazar güneybatı kıyısı): enlem 36,5-38,6 · boylam 48,5-50,9.
- **Ege-Tesalya:** Tesalya (enlem 39,0-40,3 · boylam 21,0-23,3) + Batı Anadolu beylik kuşağı (enlem 36,5-39,6 ·
  boylam 26,0-29,6).
**Yöntem (sabit):**
- Kutudaki her noktanın 1281-1923 `s:` halkaları listelenir.
- Önce kaynaklı/kaynaksız ayrılır. Kaynaksız halkalar ve **merkezî bir künyeye (ilhanli · bizans · selcuklu · memluk ·
  hafsi · merini · resuli · safevi …) yazılmış kıyı/taşra halkaları** önceliklidir.
- Noktanın TDV şehir maddesi (yoksa akademik) okunur. O dönemde şehri ADIYLA anan bir yerel hânedan / beylik
  cümlesi (Y/Ş) var mı?
- Sınıflar:
  - **TEMİZ** (tanık halkayla uyuşuyor)
  - **SAHİP HATASI-merkez** (taşra beyliği merkezî künyeye yazılmış; Aydın↔Menteşe deseni)
  - **SAHİP HATASI-başka**
  - **YER YANLIŞ** (§3.5: devlet var, nokta yanlış yerde; Maumere sınıfı) — ayrı kova
  - **ÖLÇÜLEMEDİ** (tanık yok)
- Düzeltme kalemi: d + f + t + kaynak adıyla, §4 sözleşmesiyle (hicrî ∩ miladî; gün varsa gün).

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10) — kendi aralığım
**Desen:**
- ① Hatalar 1281-1500 arasında yoğunlaşır: beylikler ve parçalanma dönemi (%80).
- ② Hataların çoğunluğu **SAHİP HATASI-merkez** (Aydın↔Menteşe deseni tutar) (%70).
- ③ Kaynaksız halkalar kaynaklılardan **3 kat** daha sık hatalı (Yemen dersi, %75).
- ④ YER YANLIŞ en fazla 1 (bu bölgeler Maumere tipi künye-yer karışıklığına az açık).
**Büyüklük (geniş):**
- Kutulardaki nokta: **120 ± 80** · 1281-1923 halka: **400 ± 250**.
- Tanıkla sınanabilen halka: **150 ± 100**.
- SAHİP HATASI: **20 ± 20** (merkez 14 ± 14 · başka 6 ± 6) · YER YANLIŞ **1 ± 1** · ÖLÇÜLEMEDİ halkaların **%50 ± 25**'i.
- Bölge başına en çok hata: **Ege-Tesalya** (beylik yoğunluğu) > K. Afrika > Tihâme > Gîlân.

## 1. ÖLÇÜM

Zemin: main a2f1c44d, `girdi.yukle` (yetkili yükleyici). TDV maddeleri çekildi: `bicaye` · `kostantine` · `annabe`
(taslak) · `cezayir--cezayir` · `hafsiler` · `gilan` · `lahican` · `aydin` · `tire` · `birgi` · `ayasuluk` ·
`aydinogullari` · `menteseogullari` · `germiyanogullari` · `kutahya` · `yenisehir` · `tirhala` · `tesalya` · `masavva`.
Tihâme'nin Yemen noktaları önceki iki raporda ölçülmüştü; burada yeniden ölçülmedi, adıyla bağlandı.
Çıktı: `denetim/KASA-SAHIP-BOLGE-1010.csv` (19 satır; nokta · atlas · sınıf · tanık sınıfı · öneri · kaynak cümlesi).

### 1.1 Evren
```
nokta 173 (K. Afrika 110 · Ege-Tesalya 41 · Tihâme 17 · Gîlân 5) · 1281-1923 halkası 504 · kaynaksız halka 477 (%95)
```

### 1.2 Bulgular (grup grup)
**K. AFRİKA — "Zeyyânî doğuya taşmış" (HATA-başka):**
- Atlas 40 Cezayir noktasını `zeyyani 1281-1519/1552` yazıyor; **19'u 4,5°D'nin doğusunda**.
- TDV doğunun iki merkezini **HAFSÎ** veriyor:
  - Bicâye: "Hafsîler burada müstakil emirlikler kurmuşlardır".
  - Kostantîne: "Hafsîler'e geçen Kostantîne".
- Kalan 16 doğu noktası için şehir adlı tanık yok. Zeyyânî iddiası kaynaksız ve bölge tanığıyla ÇELİŞKİLİ ⇒
  **ölçülemedi-çelişkili**.
- Ayrıca:
  - Cezayir (Alger): TDV "…Abdülvâdîler, Benî Gāniyeler, Hafsîler ve Merînîler çeşitli tarihlerde hüküm sürdüler" ⇒
    **KARIŞIK**, San'a deseni ⇒ `__BOSLUK__` (K). Oruç Reis 1516.
  - Cicel: "1513'ten beri Cicelli'nin hâkimi olan Oruç Reis" ⇒ zeyyani t 1519 → **1513**.
**TİHÂME — "Memlük kıyıya yazılmış" (HATA-başka):**
- Masavva TDV: "XIV. yüzyılın sonunda yine Habeş topraklarına katıldığı, XVI. yüzyılda ise tekrar Dehlek'in himaye ve
  kontrolüne girdiği" ⇒ `memluk 1281-1517` **dayanaksız**. Osmanlı 2 Cemâziyelâhir 964 = **1557-04-02**.
- Dahlak, Arkîko: aynı bölge ⇒ ölçülemedi-çelişkili. **Dehlek künyesi YOK.**
- Yemen noktaları: KASA-YEMEN-RESULI (Hudeyde, Kemeran, Ebha HATA) · MOHA-FERASAN (`__BOSLUK__`).
**GÎLÂN — "İlhanlı yerel emirliklerin üstüne yazılmış" (HATA-merkez — koordinatörün deseni):**
- TDV gilan: "Moğol istilâsı zamanında Gîlân'da çeşitli emirlikler vardı" · "Olcaytu 706'da (1306) Gîlân'ı kendi
  topraklarına kattıysa da burada tutunamadı ve ertesi yıl bölgeden uzaklaştı".
- Lâhîcân, Y:
  - Nâsırvend emiri Şah Nev "Olcaytu Han Gîlân'a hâkim olduğunda ona boyun eğdi (705/1305-1306)" ⇒ `v:ilhanli`,
    `d:` değil.
  - "792'de (1390) Seyyid Hâdî Kiyâ, Nâsırvendler'in hâkimiyetine son vererek" ⇒ **Kârkiyâ Lâhîcân'da 1390**,
    atlasın 1371'i değil.
- Reşt, Enzeli: aynı bölge cümlesi (S).
- **Nâsırvend künyesi YOK.**
**EGE-TESALYA — "Bizans fazla uzun" (HATA-başka; yerel beylik eksik):**
- Atlas Aydın-ili noktalarını `bizans 1281-1308` yazıyor. TDV:
  - Aydın: "1282'de Menteşe Bey tarafından kesin olarak Türk hâkimiyeti altına alındı" (**26 yıl erken Türk**).
  - Ayasuluk: "Sasa Bey tarafından **Ekim 1304**'te … 1309'a doğru ise Aydınoğlu".
  - Birgi: "muhtemelen 1304 … Aydınoğlu Mehmed Bey ise burayı **1307**'de".
  - Tire: Sasa (yılsız, Ş).
- ⇒ Ara sahip **Sasa Bey** (Menteşe'nin damadı) — **künyesi YOK**.
- Tesalya:
  - Tırhala `katalan 1311-1390` ↔ TDV "1349'da … Batı Tesalya, Sırp Çarı Stefan Duşan" · "1359-1393 … küçük Sırp
    beyliğinin ikametgâhı" ⇒ **Sırp 1349-1393**.
  - Yenişehir (Larissa): Osmanlı "788'de (1386)" — atlasta `bizans 1390-1394` ile yanlış.
**TEMİZ (kontrol):**
- Germiyan kuşağı (Simav · Tavşanlı · Emet · Uşak): `selcuklu 1281-1300 · germiyan 1300-` ↔ TDV kutahya "Germiyan
  Beyliği'nin 1300'de kurulduğu" + "699 (1300) … Selçuklu hâkimiyetini tanıdıklarını" ✓.
- Kaynaklı halkalar (Tunus, Tilimsan, Fas, Rabat, Tanca, Zebîd, Halhâl/Astara karakoyunlu …): hiçbirinde hata
  bulunmadı.

### 1.3 Sayılar
```
tarandı: 173 nokta · 504 halka
HATA (şehir adlı tanıkla, Y/Ş)            15 nokta
   bu tur: Bicâye · Konstantin · Cezayir · Cicel · Masavva · Lâhîcân · Aydın · Ayasuluk · Birgi · Tire · Tırhala ·
           Yenişehir                                                                           12
   önceki Yemen raporları: Hudeyde · Kemeran · Ebha                                             3
ÇELİŞKİLİ-ölçülemedi (yalnız bölge tanığı, S)    22  (doğu Cezayir 16 · Dahlak · Arkîko · Reşt · Enzeli · Söke · Kuşadası)
__BOSLUK__ (onaylı)                               2  (Moha · Ferasan)
TEMİZ (tanıkla)                                   4 nokta (Germiyan kuşağı) + kaynaklı halkalar
YER YANLIŞ (§3.5)                                 0
künyesi YOK olan yerel sahip                      4  (Sasa · Nâsırvend · Dehlek · Tesalya Sırp beyliği)
kaynaklı halka hatası / kaynaksız halka hatası    0/27 · ≥15/477
geri kalan ~130 nokta (çoğu Fas, Tunus, Endülüs, Portekiz kıyısı): bu turda tanık okunmadı ⇒ ÖLÇÜLEMEDİ, temiz DEĞİL
```

### 1.4 Öngörü sınavı
```
DESEN ① hatalar 1281-1500'de            ✓ 15/15 (Bicâye–Tesalya: hepsi 1281-1519 aralığında)
DESEN ② çoğunluk HATA-merkez            ✗ — 3 merkez (Gîlân) · 12 BAŞKA. Baskın desen "MERKEZ künye" değil
                                          "KOMŞU/ESKİ sahip uzatılmış" (Zeyyânî doğuya, Bizans 1308'e, Memlük kıyıya)
DESEN ③ kaynaksız 3 kat sık hatalı       ✓ (fazlasıyla) — kaynaklı 0/27 · kaynaksız ≥15/477
DESEN ④ YER YANLIŞ ≤1                    ✓ 0
nokta 120 ± 80                          173 ✓ · halka 400 ± 250 → 504 ✓
SAHİP HATASI 20 ± 20                    15 ✓ (merkez 14 ± 14 → 3 ✓ · başka 6 ± 6 → 12 ✗)
en çok hata Ege-Tesalya                 Ege 6 · K. Afrika 4 Y + 16 S ⇒ K. Afrika ✗
```
🆕 Desen düzeltmesi: sahip hatasının baskın biçimi "taşra beyliği MERKEZÎ künyeye" değil, **"komşu ya da önceki sahip
SINIRDAN TAŞIRILMIŞ"**. Bir dinastinin rengi ya coğrafî komşusunun (Zeyyânî → Hafsî toprağı) ya da zamandaşı
olmayan önceki sahibin (Bizans → Menteşe/Sasa) üstüne yayılmış. Ortak kök yine kaynaksızlık: 15'in 15'i kaynaksız
halkada.

## 2. ③ İSTİYORUM
a) **12 düzeltme kalemi** (csv; FAZ 2 `2m`).
   - Hafsî: Bicâye, Konstantin. Konstantin zinciri 1519/1526/1533-34 dahil.
   - Cezayir `__BOSLUK__` (K) → Oruç 1516 · Cicel t 1513.
   - Masavva Habeş/Dehlek → Osmanlı 1557-04-02.
   - Lâhîcân Nâsırvend (v:ilhanli 1305/06) → Kârkiyâ 1390.
   - Aydın, Ayasuluk, Birgi, Tire: Bizans t erken çekilir.
   - Tırhala Sırp 1349-1393 · Yenişehir Osmanlı 1386.
b) **4 künye adayı (senin kalemin):** Sasa Bey beyliği (Ayasuluk/Birgi/Tire/Aydın 1300-1309) · Nâsırvend (Lâhîcân) ·
   Dehlek Sultanlığı · Tesalya Sırp beyliği (1359-1393). Künye olmadan HATA düzeltmesi `__BOSLUK__` (N) olur.
c) **22 çelişkili-ölçülemedi nokta:** kaynaksız sahip, bölge tanığıyla çelişiyor. Önerim `__BOSLUK__` (K); şehir adlı
   tanık bulunursa sahip yazılır (San'a hükmüyle aynı).
d) Kalan ~130 noktanın (Fas, Tunus, Endülüs, Portekiz kıyısı) taraması ayrı tur. Kaynaklı 0/27 bulgusu oralarda hata
   oranının daha düşük olabileceğini söylüyor, ama ölçülmedi.

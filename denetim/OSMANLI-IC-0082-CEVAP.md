# OSMANLI-IC-0082 — CEVAP (parti-emrelic-0082 · 7 madde)

> Oturum: OSMANLI-IC-0082 · 30 Eylül 2026 · koordinatör YILDIRIM BAYEZIT
> 🔴 Hiçbir şey UYGULANMADI — `data/`, `js/`, `index.html` dokunulmadı. Her madde HÜKÜM.
> Ölçüm aletleri: `denetim/ARAC-OSMANLI-IC-0082-{ROTA,TDV,KUTU,KAYIT,EMIS,ISGAL-DELIK}.py`
> Canlı ölçümler: yerel sunucu (`localhost:8765`, r10630 damgalı `index.html`),
> `ekKartBagliMi` · `seferKayitlariniTopla` · `ISGALLER` · harita kaynakları SAYFANIN KENDİ işlevleriyle sorgulandı.

## Hüküm tablosu

| # | Konu | Hüküm | Tek satır |
|---|---|---|---|
| H-0065 | Duckworth oku karadan geçiyor | ✗ hatali | Canlı `rota` Gelibolu yarımadasını İKİ kez kesiyor: **22,2 km karada**. Düzeltilmiş hat hazır: **0,0 km** |
| H-0066 | Alemdar'ın iki oku | ✗ hatali | Aynı yürüyüş İKİ kayıtta; biri düz hat. Sağ Kol menzilli olan kalmalı; tarih ucu §4'e aykırı |
| H-0067 | Alemdar'ın ölümüne ek okuma | ✔ dogru | Maddeye bağlı **4 kart** zaten var (biri olayı anlatıyor); canlıda ölçüldü |
| H-0068 | Âyanlar listesi | ✔ dogru + ? emre-karari | Liste kartı ZATEN VAR (26 aile/kişi, TDV `ayan` omurgalı). Yeni HARİTA KATMANI ayrı karar |
| H-0069 | 1810'da Kahul-İsmail arası taramasız kırmızı | ✗ hatali | Noktasızlık DEĞİL: işgal örtüsü zamansız petekten kuruluyor, 1821'de kurulan Bolgrad'ın peteği delik bırakıyor |
| H-0099 | 1844 Tashîh-i sikke ek okuma | ✗ hatali (eksik) | Maddeye bağlı kart **0**. TDV malzemesi toplandı, kart taslağı aşağıda |
| H-0102 | 93 Harbi'nin çıkış sebebi | ✔ dogru | Sebep kartı var ve üç 24 Nisan 1877 maddesinin üçüne de bağlı |

**Dağılım:** ✔ dogru 3 · ✗ hatali 4 · ◔ olculemedi 0 · ▷ kosu-bekliyor 0 · ? emre-karari 1 (H-0068'in ek sorusu) · ∅ 0
**Petek koşusu gereken madde: 0.** H-0069'un düzeltmesi yalnız `arac/uret_devirler.py` + onun koşusu (motorun dört tuz dosyasına dokunmaz, §9.1).

---

## H-0065 — Duckworth harekâtı (1807-02-20) · ✗ hatali

**Emre:** ok Çanakkale Boğazı'ndan geçmeli, ama kara sütunundan geçerek Marmara'ya giriyor.

**Ölçtüm** (`ARAC-OSMANLI-IC-0082-ROTA.py`, `veri-kaynak/ne_10m_land.geojson`):
- Kayıt: `data/seferler_p0071.js` `p0071-duckworth-1807` (paket: `data/paket_26.js`). `app.js:5070` `rota` varsa ONU çizer.
- Canlı `rota` (SEFER-OK-0075'in 0,01°'lik ızgara aletiyle "düzeltilmiş" hat) Boğaz'ı izlemiyor.
  Çanakkale'den KUZEYBATIYA, Saros tarafına (26.154, 40.282) atlıyor. Sonra Bolayır berzahını
  (26.304, 40.462 → 26.544, 40.552) geçip Gelibolu'ya iniyor:
  ```
  parça n1→n2  karada  9,85 km   (yarımadayı batıya kesiyor)
  parça n4→n5  karada 11,69 km   (berzahı doğuya kesiyor)
  TOPLAM       karada 22,17 km   ← canlı rota
  ham `yol`    karada  8,83 km   ← rota, düzeltmek istediği hattan 2,5 kat KÖTÜ
  ```
  Tarayıcıdan bağımsız ölçüm (motor karası `g-kara`, 2 km örnek) aynı sonucu verdi: **20 km karada**.
- Boğaz kanalını 0,006-0,007°'lik ızgarayla haritaladım ve kanal ortasından yeni hat çizdim:
  **karada 0,00 km**.

**Önerilen düzeltme.** `p0071-duckworth-1807` kaydının `rota` alanı şununla değişir, `yol`
aynı kalır:
```
rota:[[26.17,40.02],[26.30,40.08],[26.385,40.135],[26.378,40.17],[26.39,40.197],[26.43,40.212],
      [26.47,40.232],[26.50,40.252],[26.53,40.276],[26.57,40.30],[26.61,40.324],[26.64,40.348],
      [26.665,40.372],[26.69,40.396],[26.75,40.42],[26.80,40.444],[26.87,40.47],[27.6,40.72],[28.9,40.87]]
```
Kaynak zinciri değişmez (TDV `canakkale-bogazi`: 19 Şubat 1807'de Boğaz'dan geçiş). Ara noktalar
yalnız DENİZ GEOMETRİSİdir, uğrak yeri değildir. Kayıttaki `kesinlik` notu bunu zaten söylüyor.

⚠️ **Yan bulgu (aynı alet ailesi):** canlıdaki 17 deniz okunun **7'si** motor karası
üzerinde ≥10 km yol alıyor: Kıbrıs 1570 (106) · Mora 1825 (98) · Çeşme 1770 (54) ·
Duckworth (20) · Savoy 1366 (14) · Sivastopol 1914 (10) · Kerç/Novorossiysk 1914 (10).
Bir kısmında karaya çıkma ucu MEŞRU olabilir (çıkarma harekâtı), bu yüzden hüküm vermedim.
Ama 13 `rota`nın kaynağı aynı SEFER-OK-0075 aletidir. **Öneri:** o aletin çıktıları kara
testiyle bir kez taranmalı. Duckworth vakası, aletin dar boğazda kanalı kaybedip yarımadanın
öbür yakasına atladığını gösteriyor.

---

## H-0066 — Alemdar Mustafa Paşa İstanbul'a girdi (1808-07-19) · ✗ hatali

**Emre:** neden iki ayrı ok var? Doğrusu kalsın. Kuş uçuşu değil, klasik yol ve geçitlerden gitsin.

**Ölçtüm:** aynı yürüyüş canlıda İKİ kayıtta:
| Kayıt | Hat | Tarih |
|---|---|---|
| `data/savaslar.js:894` `a4-alemdar-istanbul-1808` (paket_12) — mor | Rusçuk → Edirne → İstanbul, **3 nokta, düz hat** | f `1808-01-01` (YIL) → t `1808-07-19` |
| `data/seferler_ok103.js:125` — koyu kırmızı | Edirne → Babaeski → Lüleburgaz → Çorlu → Silivri → Küçükçekmece → Dâvudpaşa (**Sağ Kol menzilleri**) | f `1808-07-01` → t `1808-07-19` |

Mükerrerliği `seferler_p0071.js` başlığı 20 Eylül'de de yazmış ("ZATEN VAR ve İKİ KEZ"), ama
kayıtlar birleştirilmemiş.

**Kaynak** (TDV `alemdar-mustafa-pasa`, Kemal Beydilli, gövde bu oturumda okundu):
*"sadrazamın maiyetinde Edirne'den yola çıkıldı"* · *"İstanbul'da Dâvud Paşa sahrasına
varıldığında … (19 Temmuz 1808)"*. **Edirne'den çıkış günü TDV'de YOK.** Rusçuk→Edirne kolu
TDV'de yürüyüş olarak anlatılmıyor. Kaydın dayanağı Malhasyan & Yıldız 2017 ("Rusçuk'tan
ayrıldıktan sonra"); güzergâh ve geçit hiçbir kaynakta adıyla geçmiyor.

**Hüküm ve öneri:**
1. **`seferler_ok103.js`teki Sağ Kol oku kalır.** TDV'ye uygun (Edirne başlangıçlı) ve Emre'nin
   istediği "klasik yol" budur.
2. **`savaslar.js` `a4-alemdar-istanbul-1808` düz hattı kaldırılır.** Edirne→İstanbul kısmı
   birebir mükerrer, Rusçuk→Edirne kısmı ise güzergâhsız düz çizgi.
   → Rusçuk kolu korunmak istenirse (**? emre-karari**, iki meşru seçenek):
   (a) KALDIR: TDV anlatmıyor, geçit bilinmiyor · (b) KORU, ama yalnız kaynak geçidi adıyla
   verirse yol üstünden çizilir. Bugün (b) için kaynak **bulunamadı**. Sonucu değiştirmeyen
   tercihse benim önerim (a).
3. 🔴 **`seferler_ok103.js` `f:"1808-07-01"` §4 ihlalidir.** Kaydın kendi notu "BAŞLANGIÇ GÜNÜ
   TAHMİNDİR … ayın 1'ine konuldu" diyor. Ay da bilinmiyor. Kural gereği `f:"1808-01-01"` +
   `tarih_hassasiyet:"f: YIL (Edirne'den çıkış günü TDV'de yok) · t: GÜN"` olmalı.
   ⚠️ Bedeli: ok Ocak'tan itibaren görünür. Bunu istemeyen bir çizim kuralı (ör. oku yalnız
   `t`'ye yakın göstermek) arayüz kararıdır, veriye sahte gün yazmanın gerekçesi olamaz.

---

## H-0067 — Alemdar Mustafa Paşa'nın ölümü (1808-11-16) · ✔ dogru

**Emre:** bu olayın hikâyesini anlatan ek okuma yapalım.

**Ölçtüm (canlı, `ekKartBagliMi` ile):** `olaylar_ek2.js` `1808-11-16` "Alemdar Mustafa
Paşa'nın ölümü" maddesine **4 kart bağlı ve yükleniyor**:
- `EKOKUMA_ALEMDAR:alemdar-vakasi-mahmudun-tavri` [tartisma, 4455 karakter]. Metni **"OLAY."**
  başlığıyla vakayı anlatarak açılır: 15 Kasım gecesi baskın, Bâbıâli'nin kuşatılışı,
  cephaneliğin ateşlenmesi, yâranın öldürülmesi, Sekbân-ı Cedîd'in sokak çarpışması
  (4000'e karşı 15-16.000). Sonra üç okumayı tartışır. Kaynaklar TDV `alemdar-mustafa-pasa` ·
  `sekban-i-cedid` · `ayan`.
- `EKOKUMA_ALEMDAR:alemdar-mustafa-pasa-sahsiyet` [kimdir]
- `EKOKUMA_YENICERI:yeniceri-mahmud-stratejisi` · `yeniceri-yozlasma-esame` [sebep-sonuc]
- (+ `EKOKUMA_YENILESME:matbaa-kesintili-tarihi-1747-1826`)

Anlatılan olgular TDV gövdesiyle birebir tutuyor (bu oturumda yeniden okundu: "15 Kasım 1808
gecesi başlayan ayaklanma", "cephaneliği ateşe vererek … öldü (16 Kasım 1808)").

**Öneri (isteğe bağlı):** Emre yalnız anlatı istiyorsa ve tartışma kartının başlığı ("II. Mahmud
onu kurtarabilir miydi") onu hikâyeden uzaklaştırıyorsa, çözüm yeni bir kart değildir. Mevcut
kartın `ozet`i ya da başlığı olayı öne alacak biçimde düzeltilir. Yeni kart, aynı olguyu iki
yerde tutup bayatlatır (`app.js` 11192'deki gerekçe).

---

## H-0068 — Âyanların listesi ve yönettikleri yerler · ✔ dogru + ? emre-karari

**Emre:** âyanların listesini ve yönettikleri yerleri gösteren bir liste ek okuma yapalım.

**Ölçtüm:** istenen liste kartı **zaten var ve canlı**:
`EKOKUMA_ALEMDAR:ayan-hangi-aile-nereyi-tutuyordu` [kimdir, 3738 karakter], başlığı
**"Hangi âyan nereyi tutuyordu — künyesi olan aileler ve bölgeleri"**. Omurgası TDV `ayan`
(Özcan Mert, 1991), ayrıca her ailenin kendi TDV maddesi. İçerik:
```
RUMELİ           ① Tirsiniklioğlu (Rusçuk) ② Alemdar (Hezargrad→Rusçuk) ③ Pazvandoğlu (Vidin)
                 ④ Tepedelenli (Yanya) ⑤ İşkodralı Buşatlı ⑥ Sened imzacıları: Sirozlu İsmâil,
                 Çirmen mutasarrıfı Mustafa, Bolu voyvodası Hacıahmedoğlu, Şile âyanı Ahmed,
                 Bilecik âyanı Kalyoncu Mustafa
ANADOLU          ⑦ Karaosmanoğulları (Manisa) ⑧ Çapanoğulları (Bozok) ⑨ Canikli (Samsun)
                 ⑩ Tuzcuoğulları (Rize) ⑪ Kozanoğulları (Kozan) ⑫ Zennecizâde (Kayseri) ·
                 Müderriszâde (Ankara) · Kanlızâde (Balıkesir) · Kâtiboğlu (İzmir) ·
                 Yılanlıoğlu (Isparta) · Tekelioğlu (Antalya) · Menemencioğlu (Çukurova)
ARAP VİLÂYETLERİ ⑬ Azmzâdeler (Suriye) ⑭ Babanzâdeler (K. Irak) ⑮ Cezzâr (Akkâ) ⑯ Kavalalı (Mısır)
= 16 madde · 26 aile/kişi · her satır künyeli · "LİSTENİN SINIRI" paragrafı döküm OLMADIĞINI söylüyor
```
Kart **Sened-i İttifak** (1808-10-07) maddesine bağlı, Alemdar maddelerine bağlı DEĞİL.
Emre muhtemelen Alemdar maddelerinden bakıp kartı görmedi.

**Öneri (düzeltme sayılmaz, erişim):** `data/ekokuma_bag_oneri.js` (`EKOBAG_ONERI`) ile kartı
Alemdar maddelerine de bağlamak. ⚠️ `EKOBAG_ONERI` kartın `olay` listesini **tamamen EZER**
(`app.js:11166`), yani yeni liste eski çapayı da içermeli:
`"ayan-hangi-aile-nereyi-tutuyordu": ["1808-10-07|Sened-i İttifak","1808-07-19|Alemdar","1808-11-16|Alemdar"]`

**? emre-karari — HARİTA KATMANI (yeni boyut, açmayı yalnız Emre yapar, §1.6):**
"Yönettikleri yerleri GÖSTEREN" sözü bir harita katmanı olarak da okunabilir. İki seçenek:
| | (a) Kart yeter (bugünkü durum) | (b) Âyan haritası katmanı |
|---|---|---|
| Kapsam | 26 künyeli aile, metin | 26 aile × merkez yerleşim × zaman penceresi |
| Yeni dosya | yok | `data/ayanlar_<x>.js` (`window.AYANLAR_<X>`) + `app.js` işaret katmanı + `index.html` satırı |
| Kaynak işi | bitti | her aile için f/t (âyanlığın başı-sonu) TDV'den ayrı ayrı. Kartta bu tarihlerin çoğu YOK (yalnız Tirsinikli ö.1806, Pazvandoğlu ö.1807, Tepedelenli ö.1822, Çapanoğlu 1755 mâlikâne, Tuzcuoğlu 1763) |
| Petek koşusu | — | **GEREKMEZ** (işaret katmanı sınır üretmez). Toprak boyasına bağlanırsa (âyan = alt sahip) motora yeni kimlik girer: Değişmez 2 kırılmaları, koşu ve 8. boyut açılışı gerekir, önerilmez |
| Tahmini iş | 0 | 1 veri oturumu (26 × TDV maddesi) + 1 arayüz kalemi |
Seçmiyorum. Kaynak yoğunluğu açısından (a)→(b) geçişindeki asıl maliyet, **f/t tarihlerinin
çoğunun bugün kaynakta okunmamış olması**dır.

---

## H-0069 — 1810-06-10 · Kahul ile İsmail arası "Osmanlı gibi kırmızı" · ✗ hatali

**Emre:** bu toprak neden Osmanlı toprağıymış gibi kırmızı görünüyor? Bölgede yerleşim de yok.

**Ölçtüm** (canlı harita kaynakları, 1810-06-10, 0,05°'lik ızgara, 45.3-46.4K × 28.1-29.4D):
```
v = tâbi (Boğdan) + işgal taralı    V = tâbi, TARAMASIZ
o = Osmanlı + işgal taralı          O = Osmanlı, TARAMASIZ
45.85 vvvvvvVVVVVVVVVOOOOOoooooo
45.65 vVVVVVVVOOOOOOOOOOOooooooo
45.45 vvVOOOOOOOoooooooooooooooo
```
Çevrenin tamamı Rus işgali altında taralı. Ortada Kahul'dan kuzeydoğuya uzanan çapraz bir şerit
taramasız kalıyor: batı yarısı tâbi Boğdan (açık kırmızı), doğu yarısı doğrudan Osmanlı
(koyu kırmızı). Emre'nin ekran görüntüsü birebir budur.
- O gün bölgedeki yerleşimler: **İsmail** (d: + `isg:rusya` 1809-09-26→1812-05-28) ·
  **Kahul** (v:bogdan + `isg:rusya` 1806-11-30→) · **Kili** (d: + `isg:rusya`). Üçü de işgalli.
  Şerit içinde o gün var olan nokta **YOK** (Emre haklı).
- **Noktasızlık tek başına sebep DEĞİL.** Motor o toprağı günlük olarak İsmail/Kahul/Kili'ye
  veriyor (sahiplik doğru: tâbi + Osmanlı), üçü de işgalli. Taramayı düşüren işgal ÖRTÜSÜ.
- `window.ISGALLER`de şeridi kapsayan kayıt **0**. İsmail #31, Kahul ve Kili #29 kapsanıyor.

**Kök sebep (kodda ölçüldü):** `arac/uret_devirler.py:245 isgalleri_uret()` örtüyü, `isg:`
taşıyan yerleşimlerin **ZAMANSIZ** petek gövdelerinin birleşimi olarak kurar (`PETEK_GOVDE`,
bütün yerleşimler üzerinden tek Voronoi). O zamansız tabanda **Bolgrad (45.681, 28.613,
`kur:"1821-01-01"`)** kendi peteğine sahip. Şerit tam Bolgrad'ın zamansız peteğidir: düz
Voronoi'de (28.7, 45.85) noktası Bolgrad'a 20 km, Kahul'a 40 km uzak. 1810'da Bolgrad yok ve
`isg:`i yok, bu yüzden peteği örtüye girmiyor. Günlük motor ise o toprağı işgalli komşulara
dağıtıyor. Sonuç: işgalli toprağın ortasında taramasız dilim.
Betiğin kendi yorumu (`uret_devirler.py` ~331 ve `uret_petek.py:7648`) varsayımı açıkça
yazıyor: *"en geç `kur:` 1869, `isg:` 1878'den başlıyor"*. Bu varsayım artık **YANLIŞ**:
`isg:` 1790'dan başlıyor (Bolgrad `kur` 1821 > `isg` 1790/1809).

**Kapsam** (`ARAC-OSMANLI-IC-0082-ISGAL-DELIK.py`, 98 işgal bölümü, düz Voronoi yaklaşımı,
yalnız en yakın komşuya bakar, alt sınırdır): **3 delik adayı**
```
rusya     1790-12-22→1792-01-09  Bolgrad   (kur 1821)  komşu İsmail 41 km
rusya     1809-09-26→1812-05-28  Bolgrad   (kur 1821)  komşu İsmail 41 km   ← H-0069
ingiltere 1900-01-01→1923-10-29  Cinca/Jinja (kur 1901) komşu Mengo 69 km
```

**Önerilen düzeltme — veri DEĞİL, üretici:** `isgalleri_uret()`, bölümün `[f,t)` aralığının
bir kısmında VAR OLMAYAN yerleşimin zamansız peteğini, o gün toprağını devralan komşu bölüm
üyesiyse örtüye katmalı. Daha doğru yol: örtüyü bölümün `f` günündeki günlük petekten kurmak.
- ❌ Bolgrad'a 1809 `isg:` yazmak YANLIŞ olur (1821'den önce yok, hayalet işgal).
- ❌ Şeride yerleşim noktası eklemek de yanlış: kaynaklı bir 1810 yerleşimi aranmadı ve sorun
  noktasızlık değil. `YERLESIM-ONERI.md` bu yüzden YAZILMADI.
- ✅ Dosya `arac/uret_devirler.py`: motorun dört tuz dosyasından biri DEĞİL (§9.1),
  `uret_petek.py` koşusu gerekmez. Yalnız `uret_devirler.py` yeniden koşar ve `data/devirler.js`
  (ISGALLER) yenilenir.

---

## H-0099 — 1844 Tashîh-i sikke: Mecidiye düzeni · ✗ hatali (eksik kart)

**Emre:** çift metal sistemi nedir, mecidiye sistemi nedir, önemi nedir? Ek okuma yapalım.

**Ölçtüm:** `olaylar_ek2.js` `1844-01-01` "Tashîh-i sikke: Mecidiye düzeni" maddesine canlıda
bağlı kart **0** (792 kartlık havuzda). "Mecidiye" geçen 7 kartın hiçbiri para konusu değil
(Mecidiye köşkü, Mecidiye camii vb.).

**Kaynak (TDV birincil, üçünün gövdesi bu oturumda okundu):**
- TDV `kurus` (Şevket Pamuk, 2002): *"1844 tarihli tashîh-i sikke işlemiyle hem gümüş kuruş
  için hem de yeni oluşturulan altın lira birimi için yeni standartlar belirlendi. 100 gümüş
  kuruş = 1 altın lira"* · 1 kuruş = 1 g saf gümüş, 1 lira = 6,6 g saf altın ⇒ *"altın-gümüş
  paritesi 100/6,6 = 15,1 … Osmanlı Devleti sabit kurla belirlenmiş çift metalli para düzenine
  geçmiş oluyordu"* · önemi: *"benimsenen sikke standartlarının daha öncekilerin aksine kalıcı
  olabilmesi, 1914 yılına kadar korunabilmesi"*, altı padişah aynı standartla bastı ·
  öncesi: kuruştaki saf gümüş 1720'de 14,5 g → 1824'te 2,4 g → 1844'te 1,0 g; 1760'lar-1844
  arası gıda fiyatları 10-15 kat · sonu: *"1870'li yıllarda gümüşün … değeri düşünce … Osmanlı
  Devleti de 1879 yılında çift maden düzenini kaldırmaya yöneldi"*.
- TDV `mecidiye` (DİA, 2003): sebep *"piyasada bol miktarda değişik türde ve bir kısmı mağşûş
  sikkelerin bulunması"* · ferman 26 Safer 1256 / **29 Nisan 1840** · Londra'dan darphâne aleti ·
  eski paralar **23 Temmuz 1843**'te tedavülden kaldırıldı · **ilk mecidiye 22 Nisan 1844**,
  yarım 18 Mayıs, çeyrek 19 Mayıs 1844 · "mecidiye" adı özellikle **20 kuruşluk GÜMÜŞ** sikkede
  genelleşti · Abdülmecid'in ölümüne kadar 15.312.329 altın, 54.987.960 gümüş mecidiye basıldı.
- TDV `sikke` (Oğuz Tekin, 2009): karar adı *"tashîh-i ayâr (tashîh-i sikke)"*, 1256 (1840) ·
  "bimetalist (çift metalli)" kavramı Fâtih'in altın sikkesinden beri Osmanlı'da var (kavram
  bağlamı için).

**Öneri — kart taslağı** (`tur:"teknik-bilimsel"`, `olay:["1844-01-01|Tashîh-i sikke"]`; yazarı
koordinatör atar, bu oturum `data/`ya yazmadı):
> **Başlık:** Mecidiye ve çift metal düzeni — 1844'te para neden yeniden kuruldu, niçin 70 yıl dayandı?
> **Gövde omurgası:** ① SORUN: tağşîş. Kuruştaki gümüş 14,5 g'dan 1 g'a indi, piyasada karışık
> ve ayarı bozuk sikke (Pamuk; DİA) · ② KARAR VE UYGULAMA: 1840 fermanı → Londra'dan alet →
> 1843 eski paranın kaldırılışı → 22 Nisan 1844 ilk mecidiye (DİA) · ③ ÇİFT METAL NEDİR: iki
> madenin de tam değerli para olması ve aralarındaki oranın devletçe SABİTLENMESİ; 100 kuruş =
> 1 lira ⇒ 1 g altın = 15,1 g gümüş. Önceden oranı piyasa belirliyordu (Pamuk) · ④ MECİDİYE
> NEDİR: 20 kuruşluk gümüş sikke, yarım 10, çeyrek 5; altın liranın da adı (DİA) · ⑤ ÖNEMİ:
> standart 1914'e kadar kaldı, altı padişah · ⑥ SONU: 1870'lerde gümüş düştü, 1879'da çift
> madenden altına yöneliş (Pamuk).

**Yan bulgu — kronoloji maddesi (hüküm koordinatörün, iki not):**
1. `d:` metni *"altın lira (Mecidiye) esaslı"* diyor. TDV'ye göre "mecidiye" adı asıl
   20 kuruşluk GÜMÜŞ sikkede genelleşti, altın mecidiyeler de vardı. Önerilen metin:
   "altın lira ve gümüş mecidiye (20 kuruş)".
2. Tarih `1844-01-01` (YIL) kaynağa uygun: Pamuk "1844 tarihli" diyor. Gün istenirse DİA'nın
   **22 Nisan 1844** (ilk mecidiyenin darbı) günü var. Ama o gün "tashîh"in değil ilk basımın
   günüdür. Madde başlığı "Mecidiye düzeni" dediği için ikisi de savunulur. Ben bir şey
   değiştirmedim; değişirse `gun:` alanına "ilk mecidiyenin darbı (TDV `mecidiye`)" yazılmalı.

---

## H-0102 — 24 Nisan 1877 · 93 Harbi'nin çıkış sebebi · ✔ dogru

**Emre:** 93 Harbi'nin çıkış sebebine dair ek okuma yapalım.

**Ölçtüm (canlı):** 24 Nisan 1877'nin **üç** kronoloji maddesinin üçüne de (`OLAYLAR_EK10`
"Rusya'nın savaş ilânı — Doksanüç Harbi'nin başlaması" · `KRONOLOJI_RUSYA` · `KRONOLOJI_BALKAN`)
aynı 4 kart bağlı. Bunların arasında tam istenen kart da var:
- `EKOKUMA_RIVAYET:sebep-sonuc-doksanuc-harbi-1877-ayastefanos` [sebep-sonuc]. Kendi `kisa`
  alanı: *"bu kart Berlin'in sebebini DEĞİL, savaşın KENDİSİNİN sebebini anlatır"*. Sebep
  zinciri: 1875-76 Hersek ve Bulgar isyanları → Rus panslavizmi → İstanbul Konferansı'nın reddi →
  24 Nisan 1877 ilanı. Kaynak TDV `doksanuc-harbi` + `ayastefanos-antlasmasi`.
- `EKOKUMA_P76B:tersane-konferansi-sonuc` (İstanbul/Tersane Konferansı'nın çöküşü, ayrıntılı)
- (+ Paris 1856 ve Berlin 1878 sebep-sonuç kartları)

TDV `doksanuc-harbi` (Mahir Aydın, 1994) bu oturumda yeniden okundu, kartla tutarlı.

**Öneri (zenginleştirme, hata değil):** TDV aradaki bir halkayı daha veriyor: *"31 Mart 1877
tarihinde Londra Protokolü'nü imzalamışlarsa da … bu protokolün kararları da … Bâbıâli
tarafından reddedildi. Nihayet … Rusya, 24 Nisan 1877 tarihinde … savaş ilân etti."* Kart
Konferans'tan doğrudan ilana atlıyor, Londra Protokolü eklenebilir.
⚠️ Kartın metnindeki "1.410.000.000 rublelik tazminat" rakamı bu oturumda DOĞRULANMADI.
TDV `doksanuc-harbi` yalnız **802.500.000 frank** veriyor (kartın `bag` alanıyla tutarlı).
İki rakam farklı anlaşmaların (Ayastefanos ↔ sonraki ödeme) rakamları olabilir. Karttaki
tek cümlede yan yana kalırsa okuru şaşırtır, ayrı bir kontrol önerilir.

---

## Bulunamadı
- Alemdar'ın **Edirne'den çıkış günü** (TDV `alemdar-mustafa-pasa`: yok).
- Alemdar'ın **Rusçuk→Edirne güzergâhı / geçidi** (hiçbir okunan kaynakta adıyla yok).
- TDV `tashih-i-sikke` ve `osmanli-rus-savaslari` slug'ları **302 (ölü)**, konu `kurus`,
  `mecidiye`, `sikke` ve `doksanuc-harbi` maddelerinden okundu.
- `mecidiye--sikke` slug'ı 302. Doğrusu düz `mecidiye`.

## Değişen dosyalar (hepsi bu oturumun, adıyla)
- `denetim/OSMANLI-IC-0082-CEVAP.md` (bu dosya)
- `denetim/ARAC-OSMANLI-IC-0082-ROTA.py` · `-TDV.py` · `-KUTU.py` · `-KAYIT.py` · `-EMIS.py` · `-ISGAL-DELIK.py`
- `data/` · `js/` · `index.html`: **dokunulmadı**. `denetle.py` koşturulmadı: veri değişikliği
  yok, ortak doktrin §6 "yalnız teslimden önce bir kez" diyor ve tepe 2,4 GB. Ölçülecek bir
  şey değişmedi.

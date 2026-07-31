# Oturum 14 — Batı Sahra kervan noktaları + Sudan'ın üç eksiği + beş maddenin kaynağı

**Araştırma oturumu — `data/` altına hiçbir şey yazılmadı.**

---

# 1. Batı Sahra — ölçüm teşhisi doğruluyor

## 1a. O kutuda **tek nokta** var

`lat 18-30, lon -18..-2` kutusunu taradım (1.541 noktanın tamamı üzerinden):

```
Sahra batısı    27.000  -4.000   yerlesimler.js
────────────────────────────────
toplam: 1
```

**Batı Sahra ve Moritanya'nın tamamı için bir tek nokta.** COĞRAFYA'nın
"medyan 391 km, kuralın değil verinin eksikliği" teşhisi ölçümle doğrulandı.

Adayların bugünkü en yakın komşuları — koordinatörün "1.000 km öteden
Timbuktu'ya bağlı" tespiti birebir çıktı:

| Aday | En yakın mevcut nokta | Mesafe |
|---|---|---|
| Şinkīt | Timbuktu | **1.067 km** |
| Vâdân | Timbuktu | **1.017 km** |
| Tîşît | Timbuktu | 714 km |
| Simârâ | Agadir | 457 km |
| Vâlâta | Timbuktu | 431 km |
| Tindûf | Agadir | 338 km |

Dokuz adayın dokuzu da 3 km kuralını fazlasıyla geçiyor (en dar 25,9 km,
Ebâ Adası → Kosti).

## 1b. 🔴 TDV'de altısından YALNIZ BİRİ var — ve o biri pencerenin dışında

Altı adı da arattım:

| Ad | TDV | Not |
|---|---|---|
| **Şinkīt** | ✅ `sinkit` — gerçek madde | tek müstakil madde |
| Vâlâta | 🔴 **madde yok** | arama 0 sonuç |
| Vâdân | 🔴 madde yok | yalnız `sinkit`/`kunti` içinde geçiyor |
| Tîşît | 🔴 madde yok | — |
| Tindûf | 🔴 madde yok | `fas` ve `sus` içinde anılıyor |
| Simârâ (Smara) | 🔴 madde yok | `sus`: *"Tindûf yakınındaki **Simârâ (Smara)** Zâviyesi"* |

📌 **TDV'nin yazımı Smara değil `Simârâ`** — `sus` maddesinden birebir.

### 🔴 Ve şu çıktı: `Şinkīt` PENCERENİN DIŞINDA

`uret_petek.py`:43 → `BOLGE = box(-12, 1.5, 62, 62)`

| Nokta | Boylam | Batı sınırına |
|---|---|---|
| **Şinkīt** | **-12.362** | 🔴 **-0.362° — DIŞARIDA** |
| Simârâ | -11.671 | +0.329° içeride |
| Vâdân | -11.617 | +0.383° içeride |
| Tîşît | -9.508 | +2.492° |
| Tindûf | -8.128 | +3.872° |
| Vâlâta | -7.023 | +4.977° |

> **Altı noktadan TDV maddesi olan tek nokta, haritaya giremeyen tek nokta.**

Kutu dışı nokta yazmak güvenli değil: motor hücreyi `.intersection(BOLGE)`
ile kırpıyor, yani peteği **boş** çıkar — `r83`te düzeltilen "sıfır alanlı
petek" sınıfı. Barava ve Kısmâyû'nun `yerlesimler_afrika.js` §14'te yorumda
bekletilmesinin sebebi tam olarak bu.

⇒ **Şinkīt YORUMDA bekletilsin**, pencere batıya açılınca yorum kaldırılır.
Vâdân ve Simârâ sınıra 0,33-0,38° mesafede — **çalışırlar ama peteklerinin
batı yarısı kırpılır.** Bu bir hata değil, pencerenin doğal sonucu; yine de
bilerek eklenmeli.

## 1c. Öneri — beşi yazılabilir, biri yorumda

🔴 **Hepsi KASTEN SAHİPSİZ.** `CLAUDE.md §3` gereği doğru davranış budur ve
ayrıca **hiçbir tarih kaynağı gerektirmez** — sahipsiz dolgu noktası yalnız
komşu peteğin çölü yutmasını engeller. TDV maddesi olmayan beş yer için bu,
"kaynak yoksa yazma" kuralıyla **tam uyumlu** tek çözüm.

```js
// --- Batı Sahra kervan yolu — hepsi kasten sahipsiz ---------------------
{ ad:"Tindûf",          tur:"bolge", lat:27.671, lon:-8.128,  g:0, k:0, s:[], d:[], v:[] },
{ ad:"Simârâ (Smara)",  tur:"bolge", lat:26.739, lon:-11.671, g:0, k:0, s:[], d:[], v:[] },
{ ad:"Vâdân",           tur:"bolge", lat:20.933, lon:-11.617, g:0, k:0, s:[], d:[], v:[] },
{ ad:"Tîşît",           tur:"bolge", lat:18.450, lon:-9.508,  g:0, k:0, s:[], d:[], v:[] },
{ ad:"Vâlâta",          tur:"bolge", lat:17.297, lon:-7.023,  g:0, k:0, s:[], d:[], v:[] },

// ⚠️ PENCERE BATIYA AÇILINCA — bugün box(-12,…)'nin 0,362° dışında
// { ad:"Şinkīt", tur:"sehir", lat:20.463, lon:-12.362, g:0, k:0, s:[], d:[], v:[] },
```

⚠️ **`BEKLENEN_SAHIPSIZ` 50 → 55.**

### 1d. Şinkīt için TDV ne veriyor (pencere açılınca kullanılmak üzere)

`sinkit` ✅ gerçek madde (kütük değil, iki aşamalı sınamadan geçti):
- Kuruluş: *"ilk defa **160 (776) veya 165 (781)** yılında kurulduğu görüşü yaygındır"* — iki rivayet, yıl
- *"Kuzey Afrika ile Siyah Afrika arasındaki kervan ticaretinin önemli noktalardan"*, hac kervanlarının toplanma merkezi
- *"**1907**'de Şinkīt merkez yapıldı ve bu durum 1937 yılına kadar devam etti"*

`moritanya` ✅: *"**1854**'te Fransızlar Moritanya'ya girdi; ancak ülkenin
içlerine doğru nüfuz etmeleri **XX. yüzyılın başlarında** gerçekleşti."*

📌 **Yine de sahipsiz öneriyorum.** 1907'de Şinkīt'e Fransız dönemi vermek,
bomboş çölün ortasında tek bir Fransız adası boyar — oysa Fransa o tarihte
bölgeyi bütün olarak denetliyordu, tek kasabayı değil. Sahipsiz bırakmak
hem daha doğru hem kırılma borcu doğurmuyor. **Karar sizin**, kaynak yukarıda.

---

# 2. Sudan'ın üç eksik noktası (A5'in ölçtüğü)

## 2a. Ebâ Adası — 🟢 zinciri hazır, YENİ KIRILMA ÜRETMEZ

TDV `muhammed-ahmed-el-mehdi` ✅ birebir:
> *"Kardeşleri Beyaz Nil'deki Kevve yakınlarında ormanlık bir mevki olan
> **Ebâ adasına** gittiklerinde onlara katıldı ve **1287 (1870) yılından
> itibaren adaya yerleşerek tarikatını kurdu**."*
> *"Rüyasını ilk defa **Rebîülâhir 1298'de (Mart 1881)** … anlattı."*

Kosti'ye **25,9 km** ve aynı Beyaz Nil şeridinde. Kosti'nin zincirini
**birebir** tekrarlar:

```js
{ ad:"Ebâ Adası", tur:"bolge", lat:13.000, lon:32.500, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},
     {f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },
```

🔴 **`mehdi` dönemini 1881'e ÇEKMEYİN.** Cazip görünüyor (mehdîlik orada ilân
edildi) ama TDV'ye göre Muhammed Ahmed 1881 Ağustosunda gelen kuvveti
yendikten sonra **Kordofan'a çekildi** — ada sürekli elinde kalmadı. 1881'e
çekmek hem kaynaksız bir toprak iddiası olur hem yeni bir kırılma açar.

📌 **1881'in yeri kronoloji, harita değil.** Mehdîliğin ilânına madde
gerekiyorsa (`Mart 1881`, ay hassasiyetli) ayrı iş; bu noktanın zinciriyle
ilgisi yok.

## 2b. Bahrülgazâl — 🟢 TDV AY veriyor

> *"Dârfûr ve Bahrülgazâl de **Aralık 1883 ve Nisan 1884**'te Avrupalı
> valilerce Mehdî kuvvetlerine teslim edildi."*

Yani Dârfûr **Aralık 1883**, Bahrülgazâl **Nisan 1884**. A5'in "1884"ü doğru
ve TDV ayı da veriyor.

📌 Kendi maddem doğrulandı: `olaylar_ek9.js` → `1883-12-23 "Darfur'un Mehdî
kuvvetlerine geçişi"` — TDV'nin *"Aralık 1883"*üyle uyuşuyor.

```js
{ ad:"Bahrülgazâl (Vâv)", tur:"bolge", lat:7.700, lon:28.000, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1821-06-14",d:"funj"},          // ❓ bkz. aşağıda
     {f:"1884-04-01",t:"1899-01-19",d:"mehdi"},
     {f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1884-04-01",k:"Mısır (Kavalalı)"}], d:[] },
```
⚠️ `1884-04-01` = "Nisan 1884"ün gün karşılığı; yıl için `YYYY-01-01`
yazdığımız gibi ay için ayın 1'i. **Yeni kırılma açar** — 1884-04'te madde
yok, en yakını `1884-06-03 Hewett`. Madde gerekirse yazarım.

## 2c. Fâşûdâ — 🟡 TDV tarih vermiyor

`muhammed-ahmed-el-mehdi` Fâşûdâ'yı **anıyor** ama düşüş tarihi vermiyor:
> *"**Fâşûdâ Valisi** Râşid Eymen 1400 kişilik bir kuvvetle Mehdî'nin üzerine
> yürüdü."*

A5'in "1881"i bu cümleyle uyumlu (vali Mehdî'ye yürüyor demek Fâşûdâ hâlâ
Mısır'da demek) ama **düşüş günü/yılı TDV'de yok.** `1881` tahminini
yazmıyorum.

🔴 **İki soru açık:** (1) Fâşûdâ ne zaman Mehdî'ye geçti? (2) 1821 öncesi
kimin? — Şillük krallığıydı, Funj değil; `funj` yazmak yanlış olur, ama
`sillük` diye bir kimlik yok ve **kimlik uydurmuyorum.**

⇒ **Fâşûdâ'yı bu turda önermiyorum.** Ayrı bir araştırma turu ister
(`sudan` maddesi + Şillük). İsterseniz sıradaki turda alırım.

---

# 3. Beş maddenin kaynağı — üçü çözüldü, ikisi çözülmedi

| Madde | Öneri | Dayanak |
|---|---|---|
| **1798-07** Napolyon'un işgali | ✅ **`selim-iii`** | *"Mısır'a saldırı **(Temmuz 1798)**"* — **ay** veriyor, `kahire`'nin çıplak "1798"inden iyi |
| **1802-06-25** Paris Antlaşması | ✅ **`selim-iii`** | *"Fransa nihayet **1802**'de barış yapmak ve Mısır'ı terketmek zorunda kaldığında"* (yıl) |
| **1798-09-03** Fransa'ya savaş ilânı | 🟡 **`selim-iii`** *(kısmî)* | TDV *"(**Ocak 1799**)"* diyor — ama bu **ittifakın** tarihi, savaş ilânının değil. Slug doğru, tarih başka olayın. |
| **1801-10-09** tahliye | 🔴 **uygun slug YOK** | `aris` gerçek madde ama *"**24 Ocak 1800** … Fransızlar … Mısır'ı terketmişlerdir"* — **tahliyeyi 1800'e koyuyor, yanlış.** `selim-iii` de 1802 diyor. Üçü de farklı. |
| **1807-03-17** Fraser seferi | 🔴 **`selim-iii`'te YOK** | Madde 1807 Şubatında İstanbul'a yaklaşan İngiliz filosunu (Duckworth) anıyor, İskenderiye çıkarmasını **anmıyor.** |

## 3a. 🔴 `aris` bir tuzak — ve daha önce de düşmüştüm

`aris` üç gün-kesin tarih veriyor (18 Şubat 1799 işgal · 17 Kasım 1799 geri
alınış · 24 Ocak 1800 anlaşma) ve **1799 olayları için mükemmel.** Ama
tahliyeyi Arîş Antlaşması'na bağlayarak 1800'e koyuyor.

**Gerçekte Arîş Antlaşması İngiltere'ce onaylanmadı ve Fransızlar 1801'e
kadar kaldı.** `OTURUM-14-DUZELTMELER §16c`'de bunu zaten kaydetmiştim.

⇒ **`1801-10-09` maddesine `aris` yazılmamalı** — canlı, zengin, gün-kesin
bir maddedir ve **tam da bu yüzden tehlikelidir**: "fakir slug" değil,
**yanlış tarihli sağlam slug.** Yeni bir sınıf.

## 3b. Özet

✅ **İkisi kesin:** 1798-07 ve 1802-06-25 → `selim-iii`
🟡 **Biri kısmî:** 1798-09-03 → `selim-iii` (tarih uyuşmazlığı notuyla)
🔴 **İkisi çözülmedi:** 1801-10-09 ve 1807-03-17

İkisi için de **tahmin yazmıyorum.** 1807 Fraser seferi muhtemelen
`iskenderiye` ya da `kavalali-mehmed-ali-pasa` maddesindedir (Mehmed Ali
Fraser'ı püskürten taraftı) — **ölçmedim**, sıradaki tura.

> ### ⚠️ BU BÖLÜM SONRADAN AŞILDI — **§6'ya bakın**
> Sıradaki turda ikisi de ölçüldü ve **ikisi de çözüldü:**
> `1807-03-17` → **`iskenderiye`** (§6a) · `1801-10-09` → **`yusuf-ziya-pasa`** (§6b).
> Ayrıca `1802-06-25` için önerim `selim-iii`'ten **`yusuf-ziya-pasa`**'ya
> yükseldi: `selim-iii` yalnız yıl veriyordu, `yusuf-ziya-pasa` **25 Haziran
> 1802**'yi gün olarak veriyor (§6b, Bonus 1).
> Ve sezgim yanlış çıktı: `kavalali-mehmed-ali-pasa`'da 1807 seferi **hiç yok.**

---

# 4. Ölçülmüş kapsam

| İş | Kayıt | Durum |
|---|---|---|
| Batı Sahra sahipsiz nokta | **5** | hazır, `BEKLENEN_SAHIPSIZ` 50 → 55 |
| Şinkīt | 1 | 🔴 pencere dışı, **yorumda** |
| Ebâ Adası | 1 | hazır, yeni kırılma yok |
| Bahrülgazâl | 1 | hazır, **1 yeni kırılma** (madde gerekebilir) |
| Fâşûdâ | 1 | 🔴 **önerilmedi** — kaynak yok, kimlik yok |
| `kaynak:` taşıması | 3 | ikisi kesin, biri kısmî |
| Çözülmeyen kaynak | 2 | 1801-10-09 · 1807-03-17 |

**Yazılabilir: 7 nokta + 3 kaynak düzeltmesi. Açık bırakılan: 1 nokta + 2 kaynak.**

---

# 5. UYGULANACAK METİNLER (girdi donuk — Merkez işleyecek)

## 5a. Beş Batı Sahra noktası — `yerlesimler_afrika.js`

```js
// ===========================================================================
// 18) BATI SAHRA KERVAN YOLU — beşi de KASTEN SAHİPSİZ
// ---------------------------------------------------------------------------
// Kullanıcı çöl tavanını 300 km onayladı; COĞRAFYA ise Batı Sahra medyanının
// 391 km olduğunu ve bunun KURALIN değil VERİNİN eksikliği olduğunu ölçtü.
// Doğrulandı: `lat 18-30 / lon -18..-2` kutusunda 1.541 noktanın içinde
// TEK NOKTA vardı (Sahra batısı). Şinkīt'in en yakın komşusu 1.067 km
// öteydi (Timbuktu) — kullanıcının "pat diye 1000 km öteye geçiyor"
// itirazının birebir sayısal karşılığı.
//
// BEŞİ DE SAHİPSİZ ve bu iki ayrı sebeple doğru:
//   1. CLAUDE.md §3 — çöl dolgu noktası komşu peteğin çölü yutmasını
//      engeller, sahiplik iddia etmez.
//   2. TDV'de beşinin de MADDESİ YOK (arandı: valata/vadan/tisit/tinduf/
//      simara -> hepsi 0 sonuç). Sahipsizlik, "kaynak yoksa yazma"
//      kuralıyla uyumlu TEK çözüm — sahiplik yazmak uydurma olurdu.
//
// UYARI: Simârâ (-11.671) ve Vâdân (-11.617) pencerenin batı sınırına
// 0,33-0,38 derece mesafede. Petekleri BOLGE tarafından kırpılacak; bu bir
// hata değil, bilerek kabul edilmiş sonuçtur.
// TDV yazımı "Smara" değil SİMÂRÂ — `sus` maddesinden birebir.

{ ad:"Tindûf",         tur:"bolge", lat:27.671, lon:-8.128,  g:0, k:0, s:[], d:[], v:[] },
{ ad:"Simârâ (Smara)", tur:"bolge", lat:26.739, lon:-11.671, g:0, k:0, s:[], d:[], v:[] },
{ ad:"Vâdân",          tur:"bolge", lat:20.933, lon:-11.617, g:0, k:0, s:[], d:[], v:[] },
{ ad:"Tîşît",          tur:"bolge", lat:18.450, lon:-9.508,  g:0, k:0, s:[], d:[], v:[] },
{ ad:"Vâlâta",         tur:"bolge", lat:17.297, lon:-7.023,  g:0, k:0, s:[], d:[], v:[] },

// ŞİNKĪT PENCERENİN DIŞINDA — lon -12.362, box(-12,...)'nin 0,362 derece
// batısı. Kutu dışı nokta `.intersection(BOLGE)` ile boş peteğe düşer
// (r83 sınıfı), Barava ve Kısmâyû ile aynı sebeple YORUMDA bekliyor.
// İRONİ KAYDA GEÇSİN: altı adaydan TDV maddesi olan TEK nokta budur
// (`sinkit` — kuruluş 776/781, kervan ve hac yollarının toplanma merkezi,
// 1907'de Fransız idare merkezi). Kaynağı en sağlam olan, haritaya
// giremeyen oldu. Pencere batıya açılırsa İLK bu girer.
// { ad:"Şinkīt", tur:"sehir", lat:20.463, lon:-12.362, g:0, k:0, s:[], d:[], v:[] },
```
**`BEKLENEN_SAHIPSIZ` 50 -> 55.**

## 5b. Ebâ Adası — yeni kırılma YOK

```js
// Mehdî hareketinin doğduğu ada. TDV muhammed-ahmed-el-mehdi: Muhammed
// Ahmed 1287 (1870) yılından itibaren adaya yerleşip tarikatını kurdu,
// mehdîlik iddiasını ilk defa Rebîülâhir 1298'de (Mart 1881) açıkladı.
// mehdi DÖNEMİ 1881'E ÇEKİLMEDİ: TDV'ye göre 1881 Ağustosunda üzerine
// gelen kuvveti yendikten sonra KORDOFAN'A ÇEKİLDİ — ada sürekli elinde
// kalmadı. 1881'e çekmek kaynaksız bir toprak iddiası olur ve yeni bir
// kırılma açardı. 1881'in yeri kronoloji, harita değil.
// Kosti'ye 25,9 km; zinciri Kosti ile BİREBİR, yeni kırılma üretmez.
{ ad:"Ebâ Adası", tur:"bolge", lat:13.000, lon:32.500, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},
     {f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },
```

## 5c. Bahrülgazâl — 1 yeni kırılma + maddesi

```js
{ ad:"Bahrülgazâl (Vâv)", tur:"bolge", lat:7.700, lon:28.000, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1821-06-14",d:"funj"},
     {f:"1884-04-01",t:"1899-01-19",d:"mehdi"},
     {f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1884-04-01",k:"Mısır (Kavalalı)"}], d:[] },
```

**Maddesi** (çakışma tarandı: `1884-04-01` boş, en yakın komşu 90 gün):

```js
{ t:"1884-04-01", k:"kayip", etiket:["toprak-kaybi","ayaklanma"],
  b:"Bahrülgazâl'in Mehdî kuvvetlerine teslimi — Sudan'ın güneybatısının kaybı",
  gun:"Nisan 1884", yer:"Bahrülgazâl vilâyeti, Vâv",
  kisiler:"Frank Lupton (vali)",
  d:"Mehdî ayaklanması Kordofan ve Dârfûr'u aldıktan sonra Mısır'ın en uzak güney vilâyetlerini de kuşattı. TDV, Dârfûr ile Bahrülgazâl'in Avrupalı valilerce sırasıyla Aralık 1883 ve Nisan 1884'te Mehdî kuvvetlerine teslim edildiğini kaydeder; Bahrülgazâl valisi Frank Lupton kuşatılmış ve takviye ulaşmayınca teslim olmuştur. Böylece Hidiv İsmâil'in Nil'in yukarı havzasında kurduğu idare tamamen çözüldü ve bölge 1899'da geri alınana kadar Mehdî devletinde kaldı. TDV ay hassasiyetinde tarih vermektedir; gün doğrulanamadığı için ayın 1'i yazılmıştır.",
  kaynak:"muhammed-ahmed-el-mehdi" },
```

Kendi `1883-12-23 Dârfûr` maddem TDV'nin *"Aralık 1883"*üyle uyuşuyor —
aynı cümle iki maddeyi birden doğruladı.

---

# 6. Son iki slug — biri çözüldü, biri beklediğimden iyi

## 6a. `1807-03-17` Fraser seferi -> **`iskenderiye`**

`iskenderiye` gerçek madde (iki bölümlü), olayı **anlatıyor**:
> *"Osmanlı donanmasının İskenderiye'den ayrılışından **(11 Kasım 1806)**
> sonra İngiliz hükümeti Fransızlar'ın Mısır'a hâkim olmasını engellemek
> için kuvvet gönderdi"*
> *"İngiliz donanması İskenderiye'den çekilmiş **(19 Eylül 1807)**"*

**Ama `17 Mart` günü TDV'de yok** — madde seferi iki ucundan tarihliyor
(donanmanın ayrılışı ve çekilişi), çıkarma gününü vermiyor. Aseb ile aynı
sınıf: **slug doğru, gün TDV dışı.** Aseb'de verdiğiniz karar (B) burada da
geçerli: gün işaretlensin, kırılma oynatılmasın.

`kavalali-mehmed-ali-pasa` denendi ve **1807 seferi maddede hiç yok** —
Mehmed Ali Fraser'ı püskürten taraf olduğu hâlde. Not düşüyorum çünkü
sezgi ("püskürten taraf anlatır") yanlış çıktı.

## 6b. `1801-10-09` -> **`yusuf-ziya-pasa`** — ve bir bonus verdi

`aris` elenmişti (yanlış tarihli), `misir` elenmişti (fakir), `iskenderiye`
1801'i 1798 Ebûkīr yenilgisine bağlayarak geçiştiriyor,
`kavalali-mehmed-ali-pasa` tahliye için tarih vermiyor.

**`yusuf-ziya-pasa`** (canlı, seferi bizzat komuta eden sadrazam) olayı
baştan sona anlatıyor:
> *"Sadrazam **17 Temmuz 1801**'de merasimle Kahire'ye girerek askerî
> harekâtı başarıyla sona erdirmiş oldu"*
> *"tahliyeyi de içeren barış antlaşması **25 Haziran 1802**'de imzalanarak
> iki devlet arasındaki düşmanlık sona erdirildi"*

### BONUS 1 — `1802-06-25` maddesi GÜN OLARAK doğrulandı

`selim-iii` bu olay için yalnız **yıl** veriyordu (*"1802'de barış yapmak"*).
`yusuf-ziya-pasa` **25 Haziran 1802** diyor — verideki günün **birebir
kendisi.**
=> **`1802-06-25` için önerimi `selim-iii`'ten `yusuf-ziya-pasa`'ya
yükseltiyorum.** Yıl hassasiyetli bir atıftan gün hassasiyetli atfa geçiş.

### BONUS 2 — kronolojide eksik bir gün-kesin olay

**17 Temmuz 1801** — sadrazamın Kahire'ye girişi, seferin askerî sonu.
Kronolojide **yok** ve tarih boş (en yakın komşu 1801-04-01 ve 1801-10-09,
çakışma taranmış). İsterseniz maddesini yazarım.

### `1801-10-09` için karar önerisi

TDV **1801 Ekiminde bir tahliye günü vermiyor.** Verinin `1801-10-09`u
standart kayıttan (son Fransız birliklerinin ayrılışı). Aseb'de koyduğunuz
ölçüt burada da uygulanabilir: **gün tek başına duruyor, çakışmıyor ->
işaretle ve bırak**, `kaynak:"yusuf-ziya-pasa"`.

Alternatif: maddeyi `1801-07-17`ye çekmek (TDV gün-kesin). Ama o **askerî
harekâtın sonu**, tahliyenin değil — maddenin başlığı "tahliye" olduğu için
tarihi taşımak yerine **`kaynak:`ı bağlamak** daha doğru.

## 6c. TDV içi bir gün farkı daha

`aris`: Arîş Antlaşması **24 Ocak 1800**
`yusuf-ziya-pasa`: aynı antlaşma **25 Ocak 1800**

Bu turda üçüncü TDV-içi tarih uyuşmazlığı (Tâcûre Fransa/İngiltere ·
himaye 18/19 Aralık · Arîş 24/25 Ocak). Hiçbiri bizim maddelerimizi
etkilemiyor ama desen kayda değer: **TDV'nin farklı maddeleri aynı olayı
bir gün kaydırarak verebiliyor.** Çapraz doğrulama şart.

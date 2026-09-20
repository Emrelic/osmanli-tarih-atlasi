# TARIH-SUPHE-0920 — veride üç tarih şüphesi kaynağa oturtuldu

**Oturum:** TARIH-SUPHE-0920 (Opus 5) · **sevk:** 1.MURAT, tahta M-4749 · **tarih:** 20 Eylül 2026
**Kapsam:** ① 1515 Dulkadir · ② 1543 Segedin · ③ Bolayır + Maydos (1354 · 1366 · 1376)
**Yetki:** ilgili `data/yerlesimler*.js` ve `data/olaylar*.js` kayıtlarının tarih/kaynak alanları
+ bu dosya. `data/` commit'i YOK (koordinatör commitler). Motor koşusu YOK.

---

## 0 · ÖLÇÜM ÖNCESİ TABAN (`py arac/denetle.py`, hiçbir düzenleme yapılmadan)

```
Değişmez 1  ✓  3921 yerleşim, 299 sahipsiz (beklenen 324)
Değişmez 1c ✓  sahipsiz ve BELGESİZ: 4 (tavan 4)
Değişmez 1b ✓  BEYANSIZ pencere arası boşluk: 0
Değişmez 2  ✓  587 kırılma, 0 açık (beklenen 0)
Değişmez 2s ✓  1418 YABANCI kırılması · 180 AÇIK (tavan 195) · 589 KAPSAM DIŞI · 151 YIL-TEMSİLÎ BORÇ
Değişmez 2i ✓  130 İŞGAL kırılması, 1 açık (tavan 3)
Değişmez 2t ✓  kırılmasız madde: 1 (tavan 42)
Değişmez 4c ✓  130 dönem devletin ÖLÜMÜNÜ AŞIYOR (beklenen 132)
Ek denetim  ✓  0 sıfır-uzunluk, 0 ters, 0 kategori-içi çakışma
            i  96 s×d/v + 26 d×v örtüşmesi — KASITLI konvansiyon, ihlal sayılmıyor
SONUÇ: temiz
```

> ⚠️ §1.5 tablosu bayattı: orada `2s` için **192 AÇIK (tavan 201)** ve `2i` için **125
> kırılma** yazıyor; bugünkü ölçüm **180 AÇIK (tavan 195)** ve **130 kırılma**. Taban
> olarak BUGÜNKÜ koşu alındı (`D199`).

---

## 1 · ÖNGÖRÜ — düzenlemelerden ÖNCE yazıldı (§11)

**Sınav anı:** aşağıdaki bütün düzenlemeler yapıldıktan sonra tek `py arac/denetle.py` koşusu.
**Evren:** `data/yerlesimler.js`, `data/yerlesimler_anadolu_0914.js`, `data/yerlesimler_ok110.js`
(9 yerleşim kaydı) + `data/olaylar_ek5.js` (1 madde düzeltmesi, 2 yeni madde).

| # | Ölçü | Taban | ÖNGÖRÜ | Gerekçe |
|---|---|---|---|---|
| 1 | Değişmez 1 sahipsiz | 299 | **299 (değişmez)** | nokta eklenmiyor/silinmiyor; `s:` bitişi ile `d:` başlangıcı bitişik kalıyor, boşluk açılmıyor |
| 2 | Değişmez 2 kırılma | 587 | **593–599** | 6 kayda `v:` eklendi (uçları kırılma sayılırsa +12, yalnız başlangıç sayılırsa +6); `d:` başlangıcı taşındı, sayıyı değiştirmez |
| 3 | Değişmez 2 açık | 0 | **0** | 1515-06-13'te madde ZATEN var; 1522-01-01 ve 1543-01-01 için madde YAZILIYOR |
| 4 | Değişmez 2s kırılma | 1418 | **1418 (değişmez)** | `s:` dönemlerinin SAYISI değişmiyor, yalnız bitiş günleri taşınıyor |
| 5 | Değişmez 2s AÇIK | 180 | **≤180** | yeni maddeler kırılan YERİ (Maraş·Elbistan·Göksun·Gürün·Zamantı·Darende / Segedin) ve TARAFLARI (Dulkadir·Osmanlı / Macaristan·Osmanlı) adıyla anıyor |
| 6 | Değişmez 2i kırılma | 130 | **136–142** | 6 yeni `v:` dönemi işgal/tâbi kovasına düşerse |
| 7 | Değişmez 2i açık | 1 | **1 (tavan 3 aşılmaz)** | her iki ucun da maddesi var |
| 8 | Değişmez 4c künye aşımı | 130 | **130 (değişmez)** | `dulkadir` künyesi `t:"1522-01-01"` — yeni dönem ucu künyeyi TAM kapatıyor, aşmıyor |
| 9 | SONUÇ | temiz | **temiz** | |

**Öngörü yanlış çıkarsa:** sayı raporlanır, düzeltme geri alınmaz — sebebi aranır (§11
"ölçüm doğru, çıkarım yanlış").

---

## 2 · ① 1515 DULKADİR — savaşın günü ile ilhakın günü AYRI OLAYDIR

### Ne ölçtüm
`data/yerlesimler*.js`te `dulkadir` geçen **6 kayıt** var ve **altısı da birebir aynı**:
`s:` dulkadir → `1515-06-13`, ardından `d:` doğrudan Osmanlı `1515-06-13 → 1920-04-23`.

| kayıt | dosya | dulkadir dönemi (ÖNCE) |
|---|---|---|
| Maraş | `yerlesimler.js` | 1337-01-01 → 1515-06-13 |
| Elbistan | `yerlesimler.js` | 1337→1381, 1384 → 1515-06-13 |
| Zamantı (Pınarbaşı) | `yerlesimler_anadolu_0914.js` | 1360-01-01 → 1515-06-13 |
| Göksun | `yerlesimler_anadolu_0914.js` | 1337-01-01 → 1515-06-13 |
| Gürün | `yerlesimler_anadolu_0914.js` | 1338-01-01 → 1515-06-13 |
| Darende | `yerlesimler_ok110.js` | 1338-01-01 → 1515-06-13 |

### Kaynak ne diyor (TDV `dulkadirogullari`, 200, gövde HAM okundu — 21.848 karakter)
> "Şehsuvaroğlu Ali Bey'in öncülük ettiği Osmanlı ordusunu Göksun ile Andırın arasında
> Ördekli mevkiinde karşılayan Alâüddevle yenildi ve öldürüldü **(13 Haziran 1515)**.
> Alâüddevle Bey'den sonra Dulkadıroğulları Beyliği'nin başına **Yavuz Sultan Selim
> tarafından Şehsuvaroğlu Ali Bey getirildi.**"

> "…Ferhad Paşa İran'a sefer bahanesiyle onu Tokat'a davet etti ve Artukova'da
> çocuklarıyla birlikte katlettirdi **(1522)**. **Ali Bey'in öldürülmesinden sonra**
> Dulkadırlı ülkesi Osmanlı topraklarına katılarak Maraş merkez olmak üzere bir eyalet
> haline getirildi."

### 🔴 Kaynak kendiyle çelişiyor — BİLDİRİLİYOR (`D211` ⑥)
TDV **`dulkadir-eyaleti`** aynı olaya **1521** diyor ve dahası:
> "Ali Bey'in ortadan kaldırılmasından **(1521)** sonra Dulkadıroğulları Beyliği Osmanlı
> idarî teşkilâtındaki yerini aldı. Ancak buranın bir beylerbeyilik merkezi olarak
> **hangi tarihte teşkil edildiği kesin olarak bilinmemektedir**; Kanûnî Sultan Süleyman
> döneminin (1520-1566) başlarında kurulduğu tahmin edilmektedir."

⇒ İki TDV maddesi **1521 ↔ 1522** ayrışıyor, ikisi de **gün vermiyor**, biri "kesin olarak
bilinmiyor" diyor. Sahte kesinlik yasak (`D210`): tarih alanına **yıl hassasiyeti**
(`1522-01-01` + `kesinlik:{f:"yil"}`) yazıldı, çelişki `kaynak:` alanına AÇIKÇA kondu.
**1522 seçildi, 1521 değil** — çünkü ① `dulkadirogullari` maddesi olayın kendi maddesidir
ve tarihi cümle içinde verir, ② atlasın kendi künyesi `devletler.js` `dulkadir t:"1522-01-01"`
zaten 1522 diyor, ③ `kronoloji_anadolu.js` 1522-01-01 "Maraş merkezli Osmanlı eyaleti
kuruldu" maddesi de 1522. **Bu bir tercihtir, ölçüm değildir — 1521 hâlâ meşru bir okumadır.**

### Hüküm: İKİ AYRI OLAY, veri İKİYE AYRILDI
| dönem | önce | sonra |
|---|---|---|
| 1360/1337 → 1515-06-13 | `s: dulkadir` (bağımsız) | **değişmedi** |
| 1515-06-13 → 1522-01-01 | ❌ `d:` doğrudan Osmanlı | ✅ `s: dulkadir` sürüyor + `v:` **tâbi beylik** (açık ton) |
| 1522-01-01 → 1920-04-23 | `d:` `y:"savas"` | ✅ `d:` `y:"ilhak"`, `kesinlik:{f:"yil"}` |

`v:`/`d:` çakışmasında `v:` kazanır (VERI-YAPISI §576) — 1515-1522 arası harita
**Osmanlı'ya tâbi** açık tonunda çizilir, ki kaynağın söylediği tam budur.

### Kronoloji tarafı
- `olaylar_ek5.js` **1515-06-13** maddesinin başlığı *"Turnadağ Zaferi ve Dulkadir
  Beyliği'nin **ilhakı**"* idi — TDV'ye göre 1515'te ilhak YOKTUR, tâbiyet vardır.
  Başlık ve detay düzeltildi (bu, sevkin "veri ikiye ayrılmalı mı" sorusunun kronoloji
  ayağıdır; `b:`/`d:` alanına dokunuldu — **yetki sınırının kıyısı, BİLDİRİLİYOR**).
- **1522-01-01** için yeni madde yazıldı (Değişmez 2 kırılmasının karşılığı).

---

## 3 · ② 1543 SEGEDİN — atlasın günü Estergon seferinden ÖDÜNÇ ALINMIŞ

### Ne ölçtüm
`yerlesimler.js` Segedin (Szeged): `s: macaristan 1281-01-01 → **1543-08-10**`,
`d: **1543-08-10** → 1686-10-23`.
`data/olaylar*.js`te 1543-08-10 günündeki TEK madde: *"Estergon ve İstolni Belgrad'ın
fethi"* (`olaylar_ek5.js`, `yer_id:"Estergon"`). Segedin bu maddede ADI GEÇMİYOR.
⇒ Atlasın günü, o gün senkronu kapatan komşu maddeden devralınmış bir gündür — **atlas
kaydı dayanak değildir** (`D207`).

### Kaynak ne diyor (TDV `segedin`, 200, gövde HAM okundu — 12.205 karakter)
> "Budin'de 948'de (1541) Osmanlı idaresinin tam olarak kurulmasının ardından Segedin ileri
> gelenleri I. Ferdinand'ın hâkimiyetini benimsediler… Bunun üzerine Budin Beylerbeyi
> **Küçük Bâlî Paşa 1543 başlarında** şehrin yöneticilerini yanına çağırdı ve ihanet
> ettikleri gerekçesiyle başlarını vurdurdu. **Daha sonra Segedin'i ele geçirmek için
> birlikler gönderdi. Bu arada Segedin livâsı teşkil edildi** ve ilk sancak beyliğine
> Küçük Bâlî Paşa'nın oğlu Derviş Bey tayin edildi."

⇒ Segedin'i alan **Budin beylerbeyinin birlikleridir**, Kanûnî'nin 1543 Estergon seferi
değil; zaman **"1543 başları"**dır, 10 Ağustos değil. TDV Estergon seferiyle hiçbir bağ
kurmuyor. Gövdede **1542 hiç geçmiyor** — yani "1541-43 arası bir yerde" değil, kaynak
açıkça **1543 başları** diyor.

### Hüküm
`1543-08-10` → **`1543-01-01`** (yıl/‑"başları" hassasiyeti, `kesinlik:{f:"yil"}`,
`kaynak:` alanında birebir alıntı). 1543-01-01 için `olaylar_ek5.js`e yeni madde yazıldı.

---

## 4 · ③ BOLAYIR + MAYDOS — 1354 KAYNAĞA OTURDU, 1366/1376 OTURMADI

### Ne ölçtüm
Bolayır ve Maydos (Eceabat) kayıtları, **Gelibolu kaydının zaman çizgisinin birebir
kopyasıdır** (`1354-03-02` · `1366-08-01` · `1376-09-01`). Çimpe de aynı çizgiyi izler,
yalnız başlangıcı `1352-03-01`. Yani üç günün hiçbiri Bolayır/Maydos için ayrıca ölçülmüş
değildir — komşudan devralınmıştır.

### 1354 — ✅ AKADEMİK KAYNAKLA DOĞRULANDI
**Metin Tetik, "Gelibolu Yarımadası'nda İlk Osmanlıların Fetih Güzergâhı ve Gelibolu'nun
Fethi (1354)", *Osmanlı Araştırmaları* 61 (Haziran 2023), s. 43-82** (İSAM hakemli;
dergipark `article-file/3217446`, 40 sayfa, pypdf ile okundu):

- *"Gelibolu Yarımadası'ndaki ilk Osmanlı fetihlerinin **1352-1354 tarihleri arasında
  değil de asıl olarak 1-2 Mart 1354'te meydana gelen büyük depremin ardından**
  gerçekleştiği yolundaki bilgiler teyit edilmiştir."*
- Fetih güzergâhı: *"Viranca-Hisar - Cinbi - Aya-Şilonya – Odküklük - Eksamiliye –
  **Bolayır** – Gelibolu (kuşatma)"* ⇒ **Bolayır, Gelibolu'dan ÖNCE alındı.**
- *"Depremin yarattığı kaostan faydalanan ilk Osmanlılar, **neredeyse tüm Gelibolu
  Yarımadası'nı ele geçirmişlerdi.** Gelibolu ise kuşatma altında idi."*
- *"**Tüm Gelibolu Yarımadası'nın ele geçirildiğini gören** Gelibolu Tekfuru, daha fazla
  direnç göstermeyerek şehri Osmanlılara teslim etti."*
- Maydos: *"Madytos/Maydos (Eceabad)… **Ece Ovası Nahiyesi**'nin merkezidir"* — yani
  yarımadanın 1354'te ele geçirilen iç kesimindedir.

⇒ **1354-03-02 günü Bolayır ve Maydos için TABANdır** (depremin ertesi; fetih hemen
ardından). Gün, iki yer için ayrıca kaynakta YOKTUR; deprem günü `1-2 Mart 1354` olarak
veriliyor. TDV `suleyman-pasa`nın aktardığı Âşıkpaşazâde/Neşrî zinciri Bolayır'ı **1352
sonrasına** koyuyordu; Tetik 2023 bunu ölçerek çürütüyor ve 1354 Mart'ından sonraya
çekiyor — **atlasın günü ile akademik kaynak UYUŞUYOR.** Kayıtlara `kaynak:` yazıldı,
tarih DEĞİŞTİRİLMEDİ.

### 1366 ve 1376 — ⚪ BULUNAMADI (bir sonuçtur, "temiz" değildir)
- TDV `gelibolu` (30.239 karakter, HAM okundu): *"13 Ağustos 1366'da Savoy (Savoia) Dükü
  Amedeo bir Haçlı filosu ile **Gelibolu'yu** alıp 14 Haziran 1367'de Bizans'a terketti"* ·
  *"1376'daki bu ikinci fetihle **Gelibolu** kati olarak Osmanlı hâkimiyetine girmiş oldu."*
  — **yalnız Gelibolu şehri**; Bolayır bu bağlamda anılmıyor, **Maydos gövdede hiç geçmiyor.**
- TDV'de `bolayir` ve `maydos` maddesi YOK (EKOKUMA-SIMGE-0070 aramayla ölçmüştü; ben de
  `gelibolu` + `suleyman-pasa` + `cimpe` gövdelerinde aradım).
- Tetik 2023 metninde **"1366" 0 geçiş, "1376" 0 geçiş** — makale 1354'te bitiyor.
- İki ayrı akademik arama (Savoy 1366 kapsamı · Kydones'in iki söylevi üzerine Türkçe
  literatür) Bolayır/Maydos'un el değiştirdiğine dair **açık bir cümle vermedi.**

⇒ Atlasın Bolayır ve Maydos için yazdığı **1366-08-01 → 1376-09-01 `bizans` dönemi bir
ÇIKARIMDIR, ölçüm değildir.** Ters yön kuralı (`D206`): dönemi SİLMEK de kaynaksız bir
düzeltme olurdu ve hatayı öbür tarafa taşırdı. ⇒ **DEĞİŞTİRİLMEDİ, BEYAN EDİLDİ**
(`not:` alanı). Kapatılması için Bizans/Savoy kaynak tarafından ayrı bir sevk gerekir.

### 🔴 YAN BULGU — benim üç kalemimde DEĞİL, düzeltmedim
`1366-08-01` günü hiçbir kaynağa dayanmıyor; TDV `gelibolu` **13 Ağustos 1366** diyor,
atlasın kendi `kronoloji_bizans.js` maddesi ise **1366-08-23** ("Savoy'lu Amadeo
Gelibolu'yu geri aldı"). Üç farklı gün: `08-01` (atlas yerleşim) · `08-13` (TDV) ·
`08-23` (atlas kronoloji). Bu, **Gelibolu ve Çimpe** kayıtlarını da bağlar (4 yerleşim +
`olaylar_ek.js` 1366-08-01 maddesi) — kalemim değil, **sevk önerilir.**
Aynı sınıf: `1376-09-01` günü de kaynaksızdır (TDV yalnız "1376" diyor).

---

## 5 · ÖLÇÜM — bütün düzenlemelerden sonra `py arac/denetle.py`

```
Değişmez 1  ✓  3921 yerleşim, 299 sahipsiz (beklenen 324)
Değişmez 2  ✓  589 kırılma, 0 açık (beklenen 0)
Değişmez 2s ✓  1417 YABANCI kırılması · 178 AÇIK (tavan 195) · 589 KAPSAM DIŞI · 151 YIL-TEMSİLÎ BORÇ
Değişmez 2i ✓  129 İŞGAL kırılması, 1 açık (tavan 3)
Değişmez 2t ✓  kırılmasız madde: 1 (tavan 42)
Değişmez 4c ✓  130 dönem devletin ÖLÜMÜNÜ AŞIYOR (beklenen 132)
Ek denetim  ✓  0 sıfır-uzunluk, 0 ters, 0 kategori-içi çakışma
SONUÇ: temiz
```

| # | Ölçü | Taban | ÖNGÖRÜ | ÖLÇÜM | Tuttu mu |
|---|---|---|---|---|---|
| 1 | Değişmez 1 sahipsiz | 299 | 299 | **299** | ✅ |
| 2 | Değişmez 2 kırılma | 587 | 593–599 | **589** | ❌ |
| 3 | Değişmez 2 açık | 0 | 0 | **0** | ✅ |
| 4 | Değişmez 2s kırılma | 1418 | 1418 | **1417** | ❌ |
| 5 | Değişmez 2s AÇIK | 180 | ≤180 | **178** | ✅ (2 açık KAPANDI) |
| 6 | Değişmez 2i kırılma | 130 | 136–142 | **129** | ❌ |
| 7 | Değişmez 2i açık | 1 | 1 | **1** | ✅ |
| 8 | Değişmez 4c | 130 | 130 | **130** | ✅ |
| 9 | SONUÇ | temiz | temiz | **temiz** | ✅ |

### Öngörünün üç kalemi niçin tutmadı — SEBEBİ ÖLÇÜLDÜ, tahmin edilmedi

**(2) ve (4): sayaç "kırılma" değil "kırılma GÜNÜ" sayıyor.** `arac/denetle.py:degismez2`
içinde `kir = {}` sözlüğünün anahtarı **yalnız tarihtir** (`kir.setdefault(d, …)`), yerleşim
adları o günün altında bir KÜMEDE toplanır. Yani `len(kir)` = *ayrık kırılma günü sayısı*.
Ben "kayıt başına kırılma" saydığım için +6…+12 bekledim; gerçekte:
- 6 Dulkadır kaydı **aynı** iki güne (1515-06-13 · 1522-01-01) düşüyor ⇒ `d:`/`v:` kolunda
  yalnız **+1 yeni gün** (1522-01-01), Segedin'den **+1** (1543-01-01) = **587 → 589.** ✔
- `s:` kolunda 1515-06-13 ve 1543-08-10 günleri o kovadan ÇIKTI, 1522-01-01 ve 1543-01-01
  girdi; günlerden biri başka kayıtlarla ZATEN paylaşılıyordu ⇒ net **−1** (1418 → 1417).
⇒ Öngörü yanlış değil, **sayacın tanımını yanlış okudum**. Ders sınıfı: *"denetim var ≠ o
soruyu soruyor"* — sayacın BİRİMİ okunmadan öngörü kurulmaz.

**(6): `v:` işgal kovasına DÜŞMÜYOR.** `denetle.py:3922` → `degismez2(Y_cekirdek, O, ("isg",))`.
Değişmez 2i **yalnız `isg:`** alanını sayıyor; `v:` (tâbilik) Değişmez 2'nin `("d","v")`
kolundadır. Eklediğim 6 `v:` dönemi 2i'yi hiç ilgilendirmiyor.
🔴 **Ve 130 → 129 düşüşü BENİM DEĞİL:** `isg:` alanına hiç dokunmadım (ölçtüm: dokunduğum
4 dosyanın diff'inde `isg:` yalnız Maraş kaydının kendi satırında geçiyor, değer değişmemiş).
Sebebi §7'de.

---

## 6 · 🔴 AKSAKLIK — `data/yerlesimler.js` ÇALIŞMA AĞACINDA EŞZAMANLI DEĞİŞİYOR

Ölçüm: `git diff -U0 -- data/yerlesimler.js` içinde **39 kayıt** değişmiş; bunların
**34'ü benim değil**:

> Ahıska · Anabolu (Nauplion) · Ayamavra (Lefkada) · Batum · Birlad · Eğriboz · Hotin ·
> Kalas (Galatz) · Katîf · Kefalonya · Korfu · Krayova · Lahsa · Malatya · Modon · Nakşa ·
> Orhei · Otranto · Parga · Rakka · Rimnik · Roman · Sakız · Slatina · Sohum · Soroka ·
> Turnu Severin · Tırgu Jiu · Uyvar · Zaklise · Çuha Adası · İbrail · İstendil · İthaki

Ayrıca `data/yerlesimler_epir.js`, `data/yerlesimler_ek_adalar.js`,
`data/yer_yama_balkan_1923.js`, `data/olaylar_ek6.js` de benim dışımda değişmiş.
Ad kümesi (Batum · Sohum · Ahıska · İbrail · Kalas · Orhei) **işgal/1806 sınıfına** benziyor;
tahtada 17:12'de `ISGAL-1806` sevki yapılmıştı.

**Sonuçları:**
1. Benim taban koşum (17:20 civarı) ile son koşum arasında **başka bir oturumun düzenlemeleri
   araya girdi**; 2i'nin 130 → 129 düşüşü bu pencerede oldu ve benim kalemim değil.
2. Son `denetle.py` koşusu **birleşik ağacı** ölçüyor: `SONUÇ: temiz` benim 9 kaydım +
   ötekinin 34 kaydı birlikte temiz demektir. Benim kalemimi tek başına ölçmek için
   yalıtılmış bir ağaç gerekirdi (yapılmadı — `data/` dondurmaya yetkim yok).
3. **Commit sırası önemli:** `data/yerlesimler.js` pathspec'i ile commit edilirse ötekinin
   yarım işi de gider. Koordinatör commitlemeden önce ISGAL sevkiyle konuşmalı.

---

## 7 · Değişen dosyalar (benim kalemim)

| Dosya | Değişiklik |
|---|---|
| `data/yerlesimler.js` | **5 kayıt:** Maraş · Elbistan (dulkadır→1522 + `v:` tâbi + `y:"ilhak"` + `kesinlik`+`kaynak`) · Segedin (Szeged) (1543-08-10 → 1543-01-01 + `kesinlik`+`kaynak`) · Bolayır · Maydos (Eceabat) (**tarih DEĞİŞMEDİ**, `kaynak:` + `not:` eklendi) |
| `data/yerlesimler_anadolu_0914.js` | **3 kayıt:** Zamantı (Pınarbaşı) · Göksun · Gürün (aynı Dulkadır yaması) |
| `data/yerlesimler_ok110.js` | **1 kayıt:** Darende (aynı Dulkadır yaması; mevcut boş `v:[]` dolduruldu) |
| `data/olaylar_ek5.js` | 1515-06-13 maddesinin `b:`/`d:` düzeltmesi + `ic_not_d:` · **yeni madde 1522-01-01** (Dulkadir ilhakı) · **yeni madde 1543-01-01** (Segedin) |
| `denetim/TARIH-SUPHE-0920.md` | bu rapor |

**Dokunulmayanlar:** `data/devletler.js` (dulkadir künyesi `t:"1522-01-01"` ZATEN doğru,
genişletme gerekmedi) · `arac/*` · `index.html` · hiçbir `yer_id`/`etiket`/`duygu` alanı.

### ⚠️ Yetki sınırının kıyısında yapılan iki şey — açıkça bildiriliyor
1. `olaylar_ek5.js` 1515-06-13 maddesinin **`b:` ve `d:` metinleri** düzeltildi (şartname
   "tarih/kaynak alanları" diyordu). Gerekçe: harita 1515'te artık ilhak göstermiyor;
   başlık "ilhakı" demeye devam etseydi **kronoloji ile harita çelişirdi** (CLAUDE.md §1).
2. `data/yerlesimler.js` CLAUDE.md §7'de Oturum 0'ın dosyasıdır; sevk `data/yerlesimler*.js`
   dediği ve üç kalemin beşi bu dosyada olduğu için yazıldı. **Commit edilmedi.**

---

## 8 · Yaşanmış tuzak — yeni ders adayı

`v:[…]` bir kayda **kör eklenirse**, o kayıtta ZATEN bir `v:` varsa JS/JSON nesnesinde
**mükerrer anahtar** doğar ve **ikincisi birincisini SESSİZCE yutar.** Maraş'ta tam bu oldu:
eklediğim tâbilik dönemi, mevcut `v:[{1832 Mısır}]` tarafından yutuldu; `denetle.py`
**hiç ötmedi** (SONUÇ yine "temiz"ti). Yalnız yamadan sonra kaydı **motorun kendi
ayrıştırıcısıyla GERİ OKUduğum** için yakalandı (§7.1 ⑤b'nin veri karşılığı).
⇒ Kural adayı: *bir diziye alan eklerken önce o alanın VAR OLUP OLMADIĞI ölçülür; ekleme
değil BİRLEŞTİRME yapılır.* Ayrıca: 8 kayıtlık "mükerrer anahtar" şüphesini süslü-parantez
sayan bir ayrıştırıcıyla sınadım — **hepsi yanlış pozitif** çıktı (kaba dilimleyici bir
sonraki kaydı yutuyordu). Başka mükerrer anahtar YOK.

---

## 9 · BENİM DELTAM YALITILDI — birleşik ağaçtan ayrıştırıldı

§6'daki eşzamanlı yazma yüzünden `denetle.py`nin toplam sayıları tek başına kimin ne yaptığını
söylemiyor. Ölçüm tekrarlandı: kırılma GÜNÜ kümesi **iki kez** kuruldu — ① ağacın şu hâli
② benim 9 kaydımın YAMADAN ÖNCEKİ değerleriyle (bellekte geri alınarak). Başka oturumun
yazdıkları iki hesapta da aynı olduğu için sadeleşiyor.

```
D2  (d+v)  önce  589 gün · sonra  591 gün · DELTA +2 · eklenen: 1522-01-01, 1543-01-01 · çıkan: yok
D2s (s)    önce 1836 gün · sonra 1835 gün · DELTA −1 · eklenen: yok · çıkan: 1515-06-13
```
*(mutlak sayılar `denetle.py`nin `Y_cekirdek` evreninden büyük, çünkü bu ölçüm BÜTÜN girdi
dosyalarını alıyor; kıyas edilen şey DELTA'dır.)*

⇒ §5'te yazdığım açıklama **doğrulandı**: benim kalemim D2'ye **+2 gün**, D2s'ye **−1 gün**
katıyor. `1515-06-13` `s:` kovasından düştü (o günde `s:` kırılması olan başka kayıt yok);
`1543-08-10` düşmedi (başka kayıtlar orada), `1543-01-01` zaten vardı.
**D2i'nin 130 → 129 düşüşü bu hesapta YOK** — yani benim değil (§6).

🔶 **EKO-ALEMDAR'a not (tahta M-4766):** o oturum aynı taban (587 · 1418 · 180) ve aynı sonuç
(589 · 1417 · 178) sayılarını ölçüp **farkı ISGAL-1806'ya** bağlamış. Yukarıdaki yalıtılmış
ölçüme göre **o fark benim yamamdır** (1522-01-01 + 1543-01-01 girdi, 1515-06-13 `s:`ten
çıktı); ISGAL-1806'nın yazdıkları o üç sayacı kıpırdatmamış görünüyor — 130 → 129 düşüşü
hariç. Yatay mesajla bildirildi.

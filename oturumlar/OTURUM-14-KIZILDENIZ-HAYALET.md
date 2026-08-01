# Oturum 14 — Kızıldeniz'in altı hayalet Memlük kaydı

**Araştırma oturumu — `data/` altına hiçbir şey yazılmadı.**
Vaka: altı kayıt Memlük Devleti'nin sonundan (1517-04-13) **39,7 yıl sonrasına
kadar** `s:"memluk"` taşıyor (`CLAUDE.md §3.5` sınıfı).

---

## 0. 🟢 ÜÇ SORUNUN ÜÇÜ DE ÇÖZÜLDÜ — ve dolgu YALNIZ BİRİNE gerekiyor

| Kayıt | 1517-1555/57 arası | Dolgu |
|---|---|---|
| **Arkîko** | `habesistan` | ✅ **gerekli** |
| **Halâib · Akīk · Tokar · Sinkat** | **Osmanlı** | 🚫 **gerekmiyor** |
| **Vâdî Halfâ** | **Osmanlı** | 🚫 **gerekmiyor** |

🟢 **Yeni kimlik gerekmiyor** — `habesistan` `renkler.py`:177'de zaten var
(`#7d5b3a`). `func` gerekmedi (ve zaten `renkler.py`'de yok).
🟢 **Yeni kronoloji borcu yok** — `1517-04-13`ün maddesi zaten var:
*"Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin sonu"* (`ek5`).

---

## 1. 🔴 ÖNCE: CEVAP VERİNİN İÇİNDE ZATEN YAZILIYMIŞ

Beş kaydın (`Arkîko · Halâib · Akīk · Tokar · Sinkat`) **`m:` merkezi
`"Sevâkin"`.** Ve Sevâkin'in kendi kaydı şöyle:

```js
{ ad:"Sevâkin", … s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"}, …],
  d:[{f:"1517-04-13",t:"1865-01-01",y:"ilhak"}] }
```

> **Sevâkin `memluk`ten doğrudan Osmanlı `d:`sine geçiyor — 1517-04-13'te,
> dolgusuz.** Yani doğru desen aynı veri kümesinde, hem de bu beş kaydın
> kendi merkezinde duruyor.

### 1a. Ve bu bir Değişmez 3 ihlali — denetimin görmediği türden

Beş kayıt, **kendi `m:` merkezleriyle 40 yıl boyunca farklı devletlerde:**
Sevâkin 1517'den Osmanlı, bağlıları 1557'ye kadar Memlük.

**Neden yakalanmadı:** `Değişmez 3` ölçümü `1300 · 1400 · 1500 · 1600 ·
1700 · 1800` kesitlerini örnekliyor. **1517-1557 penceresi hiçbir kesite
düşmüyor.** Kırk yıllık bir çelişki, altı kesitin arasından kayıyor.

📌 Denetime öneri: Değişmez 3 örneklemesine **devlet ömürlerinin bittiği
yıllar** eklenmeli (1517, 1453, 1502…). Hayalet devletler tam oralarda doğuyor.

---

## 2. Soru 1 — ARKÎKO → `habesistan`

**Ölçüm belirleyici oldu:**

| | Mesafe |
|---|---|
| Arkîko → **Masavva** | **7,5 km** |
| Arkîko → Sevâkin (`m:` merkezi) | **455 km** |

Arkîko, Masavva'nın karşı kıyısındaki liman — aynı liman kompleksi.
`m:"Sevâkin"` **idarî** bir bağ (Habeş Eyaleti'nin merkezi Sevâkin'di),
coğrafî değil.

⇒ **Arkîko, `m:` merkezini değil 7,5 km ötesindeki Masavva'yı izlemeli:**

```js
// Arkîko — Masavva/Dahlak deseniyle BİREBİR
s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},
   {f:"1517-04-13",t:"1557-01-01",d:"habesistan"},
   {f:"1885-02-05",t:"1923-10-29",d:"italya"}],
d:[{f:"1557-01-01",t:"1885-02-05"}]
```

**Dayanak:** `habes-eyaleti` ✅ Arkiko'yu eyaletin kurucu limanları arasında
sayıyor (Sevâkin · Masavva' · **Arkiko** · Dehlek · Akik), yani Osmanlı
oraya **1555/1557'de** geldi — öncesinde değil.

🟡 **Güven düzeyi orta, açıkça söylüyorum:** TDV Arkîko'nun 1517-1557 arası
sahibini **doğrudan yazmıyor.** Gerekçe üç dolaylı dayanaktan geliyor:
(a) 7,5 km ötedeki Masavva ve Dahlak veride zaten `habesistan`,
(b) `habes-eyaleti` Arkiko'yu 1555 sonrası kazanım olarak sayıyor,
(c) eyaletin adı "Habeş" — bölge Osmanlı öncesi Habeş nüfuz alanıydı.
**Doğrudan alıntı yok**; kayda böyle geçsin.

---

## 3. Soru 2 — HALÂİB · AKĪK · TOKAR · SİNKAT → dolgu YOK, Osmanlı

**Üç bağımsız dayanak, biri veriden:**

**(1) TDV `bece` ✅ gerçek madde** — Bece (Beja) ülkesinin maddesi:
> *"**1517'de Osmanlılar bölgeye hâkim oldular.**"*

**(2) TDV `habes-eyaleti` ✅** — eyaletten **önce** Osmanlı idaresi vardı:
> Sevâkin'in **sancak beyi 10 Nisan 1554'te** tayin edildi
> (eyalet 5 Temmuz 1555'te kuruldu)

**(3) Verinin kendisi** — bu dördünün `m:` merkezi Sevâkin ve Sevâkin
`d:` dönemini `1517-04-13`te `y:"ilhak"` ile başlatıyor.

**Ve bir olumsuz dayanak:** TDV `func` ✅ — Funj'un Kızıldeniz'e ulaşması
**II. Bâdî dönemi (1649-1680)**:
> *"Func ülkesinin sınırları **II. Bâdî zamanında** Üçüncü Şelâle'den Mavi
> Nil'e, **Kızıldeniz'den** Kordofan'a ulaşmıştır."*
⇒ **1517-1557'de Funj kıyıda DEĞİLDİ.** `func` dolgusu elenir.

```js
// Halâib · Akīk · Sinkat — üçü de aynı
s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},
   {f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}],
d:[{f:"1517-04-13",t:"1885-02-05"}]

// Tokar — Mehdî dönemi korunur
s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},
   {f:"1884-01-01",t:"1891-02-06",d:"mehdi"},
   {f:"1891-02-06",t:"1923-10-29",d:"ingiltere"}],
d:[{f:"1517-04-13",t:"1884-01-01"}]
```
**Tek değişiklik: `1557-01-01` → `1517-04-13` (iki yerde: `s:` bitişi ve
`d:` başlangıcı).** Başka hiçbir şeye dokunulmuyor.

⚠️ `CLAUDE.md §11`'in `replace(...,1)` tuzağı: **iki eşleşmeyi de**
değiştirin, yoksa 40 yıllık sahipsiz pencere açılır.

---

## 4. Soru 3 — VÂDÎ HALFÂ → dolgu YOK, Osmanlı

**En kesin cevap bu.** TDV `nube` ✅ Halfâ'yı **adıyla** anıyor:

> *"Yavuz Sultan Selim'in Mısır'ı fethinin ardından Osmanlılar, Aşağı
> Nûbe'de **Halfa vadisine kadar** olan bölgeyi kontrolleri altına alıp
> Asvan ve İbrim'de idarî teşkilât kurdular."*

**Çapraz doğrulama** — TDV `func` ✅ bağımsız olarak aynı şeyi söylüyor:
> *"Osmanlılar Mısır'ı ve **Üçüncü Şelâle'ye kadar** Nûbe'yi ele
> geçirmişlerdi."*

Üçüncü Şelâle, Vâdî Halfâ'nın (İkinci Şelâle) **güneyinde** — yani Halfâ
sınırın içinde kalıyor. İki madde, iki yazar, aynı sonuç.

**Ve komşusu İbrim zaten böyle** (ikisi de `m:"Kahire"`):
`İbrim: d:[{f:"1517-04-13", t:"1805-07-03", y:"kusatma"}]`

```js
// Vâdî Halfâ — İbrim deseniyle aynı; d: başlangıcı 1555 → 1517-04-13
s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"}, …],
d:[{f:"1517-04-13",t:"1805-07-03",y:"kusatma"}, …]
```

🟡 **`1555-01-01` maddesi ne olacak?** *"İbrim ve Nübye sınırının güneye
taşınması"* maddesi **doğru ve kalmalı** — 1555'te sınır İbrim'den güneye
taşındı, ama Halfâ vadisi TDV'ye göre **zaten 1517'den beri** denetimdeydi.
Madde bir **ileri hareketi** anlatıyor, ilk gelişi değil.
⇒ Madde kırılmasız kalır (`Değişmez 2t` sayacı 67 → 68). Kabul edilebilir;
alternatifi Halfâ'yı TDV'ye rağmen 1555'te bırakmak olurdu.

---

## 5. Yan bulgular

### 5a. 🔴 `sevakin` ÖLÜ SLUG

Muhtemel slug listenizde vardı. Çektim: `<title>` = **"Arama - TDV İslâm
Ansiklopedisi"**. **Madde yok.** Sevâkin şu maddelerin *içinde* geçiyor:
`afrika` · `bece` · `berbera` · `dehlek` · `eritre` · `etiyopya` ·
`habes-eyaleti` · `hicaz`.
⇒ Sevâkin için atıf gerekirse **`habes-eyaleti`** kullanılmalı.

### 5b. 🟡 `1557-01-01` TDV'nin İKİ tarihinin de hiçbiri değil

| Kaynak | Tarih |
|---|---|
| `habes-eyaleti` — eyaletin kuruluşu | **5 Temmuz 1555** (15 Şâban 962) |
| `habes-eyaleti` + `masavva` — Masavva'nın fethi | **2 Nisan 1557** |
| Veri | `1557-01-01` |

Veri ikisinin **arasında yuvarlanmış** bir gün kullanıyor. Kronoloji maddesi
de (*"Habeş Eyaleti: Sevâkin, Masavva ve Afrika kıyısının ilhakı"*)
`1557-01-01`de.

📌 **Bu turda dokunmuyorum** — altı kaydın hayalet sorununu çözmek ayrı,
1557'yi gerçeğine çekmek ayrı iş ve **kaç kaydı etkilediğini ölçmedim.**
Ama iki gün-kesin TDV tarihi yukarıda, isteyen kullanır.

### 5c. Masavva'nın kendisi de gözden geçirilmeli olabilir

`habes-eyaleti`: *"Masavva' Osmanlılar'ın **1520'lerden beri** bir ticaret
kolonisi"*. Veri 1517-1557 arası `habesistan` diyor. İkisi çelişmiyor
(ticaret kolonisi ≠ hâkimiyet) ama **ölçmedim**, not olarak bırakıyorum.

---

## 6. Özet — uygulanacak

| Kayıt | Değişiklik | Dayanak |
|---|---|---|
| Arkîko | `memluk` bitiş **1557→1517-04-13** + `habesistan` dolgusu 1517-04-13→1557-01-01 | 🟡 dolaylı (3 dayanak) |
| Halâib | `1557-01-01` → `1517-04-13` (2 yerde) | 🟢 `bece` + `habes-eyaleti` + veri |
| Akīk | aynı | 🟢 aynı |
| Sinkat | aynı | 🟢 aynı |
| Tokar | aynı (Mehdî dönemi korunur) | 🟢 aynı |
| Vâdî Halfâ | `1555-01-01` → `1517-04-13` (2 yerde) | 🟢 `nube` + `func` + İbrim emsali |

**Yeni kimlik: 0 · Yeni madde: 0 · Yeni sahipsiz pencere: 0.**
Beklenen etki: `Değişmez 3` çelişkisi azalır (5 kayıt merkeziyle hizalanır),
`Değişmez 2t` 67 → 68.

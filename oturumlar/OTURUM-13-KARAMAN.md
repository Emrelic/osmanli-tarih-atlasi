# OTURUM 13 — KARAMAN İLHAKI (1468–1474)

**Soru (kullanıcı):** *"Karaman'ın ilhakından sonra önceden Karaman olan ama
ilhaktan sonra Osmanlı'ya katılmayan yerler var. Bozukluk mu, tarihî gerçeklik
mi? Tüm Karaman ülkesi katılmadı mı? Bir kısım toprak dışarıda mı kaldı, başka
devletler mi aldı, yoksa müstakil mi kaldılar?"*

**Kısa cevap: gördüğü şey TARİHÎ GERÇEKLİK — ama tarihlerde üç kusur var,
biri tamamen kaynaksız.**

---

## 1. Kullanıcının dört sorusuna doğrudan cevap

| Soru | Cevap |
|---|---|
| Bozukluk mu, gerçeklik mi? | **Gerçeklik.** İlhak kademelidir; çekirdek 1468'de, Toroslar/İçel 1472-1474'te düştü. |
| Tüm Karaman ülkesi katılmadı mı? | **Hayır.** Konya-Larende çekirdeği Nisan 1468'de alındı; Pîr Ahmed ve Kasım Bey Toroslar'a çekilip **1474'e kadar** direndi. |
| Başka devletler mi aldı? | **Hayır.** Karaman toprağının hiçbir parçası başka devlete geçmedi. |
| Müstakil mi kaldılar? | **Evet** — Karamanoğulları 1468-1474 arası Akkoyunlu (Uzun Hasan) desteğiyle müstakil sürdü. |

### ⚠️ Kullanıcının gördüğü "katılmayan yer" bunlardan biri OLMAYABİLİR

Karaman'a bitişik **ama hiç Karaman olmamış** iki komşu var; haritada
Karaman'ın "içinde kalmış" gibi görünürler:

- **Alâiye (Alanya)** — 1293'ten beri **ayrı beylik** (`alaiye` kimliği).
  Karaman'dan bağımsızdır; 1471'de Gedik Ahmed Paşa aldı.
- **Ramazanoğulları** (Adana, Tarsus) — Çukurova; Karaman değil.

Kullanıcı "Karaman'dı ama katılmadı" diye işaret ettiği yer bunlardan biriyse
**hata değil, doğru veridir.** Ekran görüntüsündeki koordinat gelirse ayırt
edilebilir.

---

## 2. Veride ne var — kademeli ilhak zaten modellenmiş

`karaman` kimliğinin **altı ayrı bitiş günü** var:

| Bitiş günü | Ne oluyor |
|---|---|
| 1293-01-01 | Alâiye ayrılıyor |
| 1397-07-01 | Yıldırım Bayezid'in ilhakı |
| 1414-06-01 | Çelebi Mehmed dönemi |
| 1419-01-01 | ikinci dalga |
| **1468-01-01** | Konya · Karaman (Larende) · Ermenek · Niğde → OSMANLI |
| **1471-01-01** | Anamur · Silifke → OSMANLI (+ Alanya `alaiye`'den) |

⇒ Kullanıcının gördüğü **1468-1471 arası üç yıllık pencere** verinin kastıdır.
Kademeli devir kusur değil. **Kusur, tarihlerin kendisinde.**

---

## 3. TDV doğrulaması — üç kusur çıktı

### 3.1 `1468-01-01` → yıl doğru, **ayı biliniyor: Nisan**

**TDV `karamanogullari`** (✔ doğrulandı):
> Osmanlı kuvvetleri **1468 Nisanında** önce Gevele'yi, ardından Konya'yı aldı.

Ve aynı madde çekirdek sonrası direnişi anlatıyor: Pîr Ahmed Toroslar'a
çekildi, Uzun Hasan'a sığındı; **tam hâkimiyet 1474**.

🔧 `1468-01-01` → **`1468-04-01`** (gün bilinmiyor, ay biliniyor).

### 3.2 `1471-01-01` (Silifke) → **1-2 yıl erken, ve bir diziyi siliyor**

**TDV `silifke`** (✔):
> Gedik Ahmed Paşa **1472**'de İçel'e gidip Silifke Kalesi'ni teslim aldı.

Kale aynı yıl **geri alındı**; Otlukbeli'nden (1473-08-11) sonra kesin Osmanlı
oldu. Yani gerçek dizi **al → kaybet → geri al**; veride tek gün var ve o gün
de yanlış.

🔧 Silifke `1471-01-01` → **`1473-01-01`** (kesinleşme).
📌 1472 alınış-kayıp dizisi **sıfır uzunlukta dönemle değil, kronoloji
maddesiyle** anlatılmalı (`CLAUDE.md §8`: sıfır uzunluk yasak — Tebriz vakası).

### 3.3 🔴 `1471-01-01` (Anamur) → **hiçbir kaynağı yok**

- `anamur` → **ÖLÜ slug**
- `mamure-kalesi` → **ÖLÜ slug**
- `gedik-ahmed-pasa`'nın 1472 fetih listesinde **Anamur geçmiyor**

Bu tarih büyük ihtimalle **Silifke'den kopyalanmış bir yer tutucu.**
`KARAR-DAYANAK 14` gereği: kaynaksız yer tutucu **işaretlenir**, uydurulmaz.
En yakın kaynaklı çapa Silifke 1473'tür.

### 3.4 Alanya `1471-01-01` → **DOĞRU, teyit edildi**

**TDV `gedik-ahmed-pasa`** (✔): Alâiye **1471**'de alındı.
Ve devamı, veride hiç olmayan dört kaleyi veriyor:
> ertesi yıl İçel ve Karaman'da Silifke, **Mokan, Gorigos (Kızkalesi), Gülek
> ve Lülye**'yi ele geçirdi.

---

## 4. Eksik nokta — biri tam kaynaklı

### 4.1 ✅ AKSARAY — yazılabilir

**TDV `aksaray`** (✔): Yıldırım Bayezid **1397**'de aldı; 1402'den sonra
Karaman'a döndü; **1468**'de kesin Osmanlı oldu ve halkın bir kısmı
İstanbul'a sürüldü (İstanbul'daki Aksaray semtinin adı buradan).

```js
{ ad:"Aksaray", tur:"sehir", lat:38.3687, lon:34.0370, g:0, k:3, m:"Konya",
  s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},
     {f:"1308-01-01",t:"1366-01-01",d:"ilhanli"},
     {f:"1366-01-01",t:"1397-07-01",d:"karaman"},
     {f:"1402-09-15",t:"1468-04-01",d:"karaman"}],
  d:[{f:"1397-07-01",t:"1402-07-28",y:"kusatma"},
     {f:"1468-04-01",t:"1923-10-29",y:"kusatma"}] },
```
⚠️ 1397 ve 1468 için **gün bilinmiyor**; 1402-07-28 Ankara Savaşı, 1402-09-15
Karaman'ın geri alışı için yer tutucudur — ikisi de ayrıca doğrulanmalı.
⚠️ `aksaray--nigde` slug'ı **ÖLÜdür**; kaynak `aksaray`'dır.

### 4.2 🟡 Dört işaretli aday — kaynak adı var, maddesi yok

`gedik-ahmed-pasa` maddesinin adıyla saydığı, 1472'de alınan kaleler:
**Mokan (Mennan)** · **Gorigos (Kızkalesi)** · **Gülek** · **Lülye**.

Müstakil TDV maddeleri doğrulanamadı, koordinatları kaynaklı değil.
⇒ **Aday olarak işaretlendi, kayıt yazılmadı.** (Zübâre kuralı.)

### 4.3 Koordinatörün sorduğu diğer adaylar

| Aday | Durum |
|---|---|
| **Mut** | `mut` slug **ÖLÜ**. Kaynaksız — yazılmadı. |
| **Gülnar** | Müstakil madde yok. Yazılmadı. |
| **Taşeli** | Yöre adı, yerleşim değil. Nokta olarak uygun değil. |
| **Larende** | ✅ Veride **"Karaman"** adıyla zaten var — eksik değil. |

---

## 5. `devletler.js` çelişkisi (Oturum 3'ün dosyası)

| Kaynak | Karaman'ın sonu |
|---|---|
| `data/devletler.js` | **1487-01-01** |
| harita gövdesi (`yerlesimler`) | **1471-01-01** |
| TDV `karamanogullari` | **1474** |

⇒ 1471-1487 arası **topraksız bir devlet kaydı** duruyor. Üçünün de
1474'te buluşması gerekir. Karar Oturum 3'ün.

---

## 6. Slug denetimi (`<title>` + **madde metni** ile)

| Slug | Durum |
|---|---|
| `karamanogullari` | ✅ CANLI, iddiayı içeriyor (1468 Nisan · 1474) |
| `silifke` | ✅ CANLI, iddiayı içeriyor (1472 · 1473) |
| `gedik-ahmed-pasa` | ✅ CANLI, iddiayı içeriyor (Alâiye 1471 · dört kale 1472) |
| `aksaray` | ✅ CANLI, iddiayı içeriyor (1397 · 1468 · sürgün) |
| `anamur` | 🔴 ÖLÜ |
| `mut` | 🔴 ÖLÜ |
| `mamure-kalesi` | 🔴 ÖLÜ |
| `aksaray--nigde` | 🔴 ÖLÜ |

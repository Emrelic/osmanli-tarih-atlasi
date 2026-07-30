# Kimlik dosyası — Gîlân ve Mâzenderan · Oturum 4

Hazırlayan: Oturum 4 (İran yerleşim katmanı). **Talep eden:** merkez oturum,
devam görevi Öncelik 2. **Uygulayacak:** Oturum 16 — `arac/renkler.py`.

> ⚠️ Bu oturum `arac/renkler.py`'ye **dokunmadı.** Aşağıdaki her sayı ölçüldü;
> DSATUR kararını Oturum 16 verir.

---

## 1. Neden ayrı kimlik gerekiyor

Bu iki bölge merkez oturum tarafından **kasten** `iran` bırakıldı, ve gerekçe
doğruydu: ikisi de Şah Abbas'a kadar Safevî denetiminde değildi, dolayısıyla
`safevi` yazmak 1501-1592/1596 arasını yalanlardı. Ama `iran` de yalan söylüyor:
o pencerede bölgenin sahibi **İran değil, kendi hânedanlarıydı.**

Bugün harita 1281-1592 arası Gîlân'ı ve Mâzenderan'ı, komşu Irâk-ı Acem ile
**aynı tonda** gösteriyor. Yani Hazar'ın güney kıyısındaki iki bağımsız beylik
coğrafyası, hiç var olmamış gibi eriyor.

---

## 2. `gilan` — Gîlân beylikleri

| Alan | Değer |
|---|---|
| **Önerilen id** | `gilan` |
| **Görünen ad** | `Gîlân beylikleri (Kâr-Kiyâ · İshâkiyye)` |
| **f** | `1281-01-01` (pencere başı; hânedanlar daha eski) |
| **t** | `1592-01-01` |
| **Merkez** | Lâhîcan (Bîye-pîş kolu) · Reşt / Fûmen (Bîye-pes kolu) |
| **Kaynak** | TDV **GÎLÂN** (slug `gilan`, `<title>` doğrulandı) |

TDV GÎLÂN'dan ölçülen iki tarih:
* İlhanlı Olcaytu bölgeyi **706 (1306)** yılında ilhak etti ama **tutamadı ve
  ertesi yıl çekildi**; ardından **Karkia (Kâr-Kiyâ) hânedanı** hâkim oldu.
  Yani Gîlân İlhanlı hâkimiyetine **hiç yerleşmedi** — bu yüzden mevcut
  kayıtlarda `ilhanli` dönemi de yoktur, doğrudur.
* *"Safevî Hükümdarı I. Şah Abbas 1592'de bölgeyi hâkimiyeti altına aldı."*

İlgili TDV maddeleri: `zeydiler--taberistan` (ZEYDÎLER, Taberistan-Deylem-Gîlân,
**864-1526**) · `deylem` (DEYLEM). **`karkiya` diye müstakil madde YOK**
(arama ile denendi).

**Etkilenen yerleşim (3):** Reşt · Lâhîcan · Bender Enzeli

## 3. `mazenderan` — Mâzenderan beylikleri

| Alan | Değer |
|---|---|
| **Önerilen id** | `mazenderan` |
| **Görünen ad** | `Mâzenderan beylikleri (Bâvendî · Efrâsiyâbî · Mar'aşî)` |
| **f** | `1281-01-01` |
| **t** | `1596-01-01` |
| **Merkez** | Firîm / Sârî (Bâvendî) → Âmül, sonra Sârî (Mar'aşî) |
| **Kaynak** | TDV **BÂVENDÎLER** (`bavendiler`) · **MAR'AŞÎLER** (`marasiler`) |

Hânedan zinciri, TDV'den ölçülmüş tarihlerle:

| Hânedan | Aralık | Dayanak |
|---|---|---|
| **Bâvendîler** | 665 – **1349** | TDV BÂVENDÎLER madde tanımı: *"Taberistan'da hüküm süren İran asıllı bir hânedan (665-1349)"*. Merkez Şehriyârkûh'ta Firîm |
| **Efrâsiyâbîler** (Kiyâ Efrâsiyâb / Çelâvî) | 1349 – **1359** | TDV MAR'AŞÎLER: *"Kiyâ Efrâsiyâb … Seyyid Kıvâmüddin'in … ordusuna yenilerek öldürüldü (760/1359)"* |
| **Mar'aşîler** | **1359** – 1596 | Aynı madde: zaferin ardından Kıvâmüddin Âmül'e girdi; oğlu Kemâleddin, Kiyâ-Celâlîler'in merkezi Sârî'yi aldı ve *"Mâzenderan'ın tamamına yakını"* Mar'aşîler'e geçti. Madde tanımı: *"XIV-XVI. yüzyıllar arasında … Mâzenderan bölgesinde hüküm süren"* |

⚠️ Timurlu ara dönemi (1392-1405) bu zincirin içindedir; Mar'aşîler Timur'a tâbi
oldu. Ayrı kimlik istenmiyorsa mevcut `timurlu` penceresi korunabilir.

**Etkilenen yerleşim (4):** Sârî · Âmül · Bârfurûş (Bâbil) · Eşref (Behşehr)

### ⚠️ Ferahâbâd bu listeye GİRMEZ — merkez oturumun listesinde hata var
Devam görevi Ferahâbâd'ı "1596'ya kadar kasten `iran`" grubuna koyuyor. Ama
Ferahâbâd'ın kaydında **`kur:"1611-01-01"`** var: şehri I. Şah Abbas 1611'de
kurdurdu, yani 1596'da **henüz yoktu.** Kaydındaki `iran 1335-1596` penceresi
yalnız Değişmez 1'i (sahipsizlik yok) sağlamak için duran bir dolgudur.

Ferahâbâd'a `mazenderan` yazılırsa, **hiç var olmadığı 261 yıl** boyunca
Mâzenderan beyliği rengiyle boyanır. Bu, `kur:` alanının motor tarafından
okunmamasının doğurduğu sessiz hata sınıfının (`OGRENILENLER.md §1`) tam örneği.
**Ferahâbâd Safevî doğumludur; kimliği `safevi` kalmalı.**

---

## 4. DSATUR girdisi — ölçülmüş komşuluk

Ölçüm: her iki bölgenin noktalarının **250 km çevresindeki** yerleşimlerin
o tarihteki sahibi. Dört kesit (1300 · 1400 · 1500 · 1590):

| Kimlik | 1300 | 1400 | 1500 | 1590 | Birleşik komşu kümesi |
|---|---|---|---|---|---|
| `gilan` | ilhanli, iran | iran, timurlu | akkoyunlu, iran | OSMANLI, iran, safevi | **OSMANLI · akkoyunlu · ilhanli · iran · safevi · timurlu** |
| `mazenderan` | ilhanli, iran | iran, timurlu | akkoyunlu, iran, timurlu | iran, safevi | **akkoyunlu · ilhanli · iran · safevi · timurlu** |

**Ek kısıt: `gilan` ile `mazenderan` birbirine komşudur** (Hazar'ın güney
kıyısında sınırdaşlar), dolayısıyla ikisi aynı rengi paylaşamaz.

Kaçınılacak mevcut hex değerleri (`arac/renkler.py`):

```
iran        #b5885b      ilhanli     #7a5ba0      timurlu     #8d6e63
safevi      #6b4a7d      akkoyunlu   #b5bcc9      karakoyunlu #4a5b6b
rusya       #4f7d4f      gurcistan   #6b7da0
```

⚠️ `ilhanli` (#7a5ba0) ile `safevi` (#6b4a7d) zaten birbirine yakın morlar;
`gilan`/`mazenderan` mor aileye sokulmamalı. Kırmızı tonları Osmanlı ailesine
ayrılmıştır (`VERI-YAPISI.md`) — o aile de kapalı. **Yeşil-turkuaz ve
sarı-hardal aralığı bu köşede boş görünüyor**, ama nihai ΔE ölçümü
bindirilmiş renk üzerinden yapılmalıdır (`renkler.py` başındaki uyarı).

Toplam maliyet: **2 kimlik, 7 yerleşim, 2 pencere** (1281-1592 ve 1281-1596).
Sahnede aynı anda en çok 66 devlet olduğu ve DSATUR'un 7 renk yettiğini
söylediği ölçümle birlikte, bu iki kimlik tavanı zorlamaz.

---

## 5. Sırada bekleyen 15 kimlik

Bu iki kimlik, Oturum 4'ün ilk turunda bildirilen 17 kimlikten yalnız 9. ve 10.
sıradakilerdir. Tam liste, öncelik sırası ve her birinin etkilediği pencere
`oturumlar/OTURUM-4-ILERLEME.md` §3'tedir. En büyük tek kazanç hâlâ orada:
**`afsar` + `zend` + `kacar`** eklenmedikçe 1736-1923 arası bütün İran tek
renkte kalıyor — 187 yıl.

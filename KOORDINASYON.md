# Oturum Koordinasyonu — görev, dosya ve model dağıtımı

14 paralel oturumun yazma yetkisi ve görev sınırları.

**Model dağılımı (kullanıcı tarafından sabitlendi):**
- **Opus 5** → Oturum **2 · 4 · 11 · 13 · 14 · 16**
- **Fable 5** → Oturum **8 · 12**
- **Sonnet 5** → Oturum **3 · 5 · 7 · 9 · 10 · 15**
- **Haiku** kullanılmaz

---

## 0. İki temel kural

### Kural 1 — Görev konuya göre değil, DOSYAYA göre dağıtılır

Ölçüldü: 7 petek üretimi çöpe gitti, 3 kez başka oturumun yarım işi commit'lendi.
Hepsinde konular farklı, **dosya aynıydı**. Konu ayrımı çakışmayı önlemez.

### Kural 2 — Opus araştırır, Sonnet uygular

Model dağılımı sabit olduğu için görevler modele göre yerleşti:

| | Rol | Çıktı |
|---|---|---|
| **Opus** (2·4·11·13·14·16) | "Ne doğru?" sorusunu cevaplar. Tartışmalı tarih, TDV doğrulaması, geri alınamaz motor kararı. | Kaynaklı, slug'ı doğrulanmış **olgu listesi** / çalışan motor |
| **Sonnet** (3·5·7·9·10·15) | "Kural yazılı mı?" sorusunu cevaplar. Şartnamesi belli dönüşüm, transkripsiyon. | Dosyaya işlenmiş veri |
| **Fable** (8·12) | "Kaç?" sorusunu cevaplar. Yalnız **ölçüm** — sayı üretir, karar vermez. | Ölçüm raporu (`.md`), koda yazmaz |

Bir Sonnet oturumu **doğrulanmamış tarihî iddia yazmaz.** Kaynak gerektiren bir
madde önüne çıkarsa durur, ilgili Opus oturumuna havale eder.

**Fable için ek koruma:** bu projede Fable ölçümüm yok, bu yüzden 8 ve 12 hiçbir
veri dosyasına yazmaz — yalnız rapor üretir. Raporlarını **kullanmadan önce
doğrularım**; sayı yeniden üretilebilir olmalı (hangi komut, hangi girdi, hangi
çıktı). "Şuna benziyor" biçiminde gözlem kabul edilmez, ölçü istenir.

---

## 1. Yazma yetkisi tablosu

Bir oturum **yalnız kendi satırındaki dosyalara yazar.**

| Oturum | Model | Yazabildiği dosyalar |
|---|---|---|
| **Ben** | — | `js/app.js` · `css/style.css` · `index.html` · `arac/uret_devirler.py` |
| **2** | Opus | `arac/denetle.py` · `arac/denetle_yayin.py` · `denetim/` |
| **3** | Sonnet | `data/devletler.js` |
| **4** | Opus | `oturumlar/OTURUM-4-DUZELTMELER.md` · `OTURUM-4-KRONOLOJI.md` |
| **5** | Sonnet | `data/kisiler.js` |
| **7** | Sonnet | `data/olaylar_ek7.js` |
| **8** | **Fable** | `oturumlar/OTURUM-8-*.md` (yalnız ölçüm; koda yazmaz) |
| **9** | Sonnet | `data/kimlikler.js` |
| **10** | Sonnet | `data/savaslar.js` |
| **11** | Opus | `data/olaylar_ek10.js` · `oturumlar/OTURUM-11-BALKAN.md` |
| **12** | **Fable** | `oturumlar/OTURUM-12-DUZELTMELER.md` (yalnız ölçüm; veriye yazmaz) |
| **13** | Opus | `data/yerlesimler_asya.js` · `data/olaylar_ek11.js` |
| **14** | Opus | `data/yerlesimler_afrika.js` · `data/olaylar_ek9.js` |
| **15** | Sonnet | `data/yerlesimler_ortaasya2.js` · `data/goller.js` |
| **16** | Opus | `arac/uret_petek.py` · `renkler.py` · `girdi.py` |

⚠️ **İki yer değişti:** Balkan ekseni Oturum 15'ten **Oturum 11'e** (Opus olduğu için),
Orta Asya + Aral poligonu Oturum 11'den **Oturum 15'e** (mekanik iş) geçti.
Oturum 15, `OTURUM-11-ORTA-ASYA.md` ve `OTURUM-11-KIMLIK.md` notlarını devralır.

### `data/yerlesimler.js` — tek çekişmeli dosya

hatalar 11'in **17 maddesi** buraya dokunuyor. Hiçbir oturum doğrudan yazmaz:

1. Araştıran oturum `oturumlar/OTURUM-N-DUZELTMELER.md` yazar: kayıt adı, mevcut
   değer, önerilen değer, **TDV slug'ı**, gerekçe.
2. Ben kilit penceremde toplu uygularım, denetimi koşarım, commit ederim.

### Petek kilidi

`arac/uret_petek.py` çalışırken `data/yerlesimler.js` okunamaz; üretim 30+ dakika
sürüyor, ortasında yazan üretimi çöpe atar (2 kez oldu).

> **Kilidi ilân eden değil, BIRAKAN taraf açar.**

Kilit **Oturum 16**'da. Üretim başlarken/bitince oturumlara haber verir.

---

## 2. Commit kuralı

`git add data/` veya `git add .` **yasak** (3 kez başkasının yarım işi gitti):

```
git add <dosya1> <dosya2>
git diff --cached --stat
git commit -m "..."
```

`js/` veya `css/` değiştiyse `index.html`'deki `?v=rNN` damgası da artmalı — yoksa
kod yayına gider ama tarayıcı önbellekten eskisini verir (r83'te 4 commit takıldı).

---

## 3. Kaynak kuralı (değişmez)

- **TDV İslâm Ansiklopedisi** İslâm dünyası için birincil kaynak.
- **Wikipedia asla tek kaynak değil.**
- 🔴 **Ölü slug tuzağı:** `islamansiklopedisi.org.tr/<slug>` var olmayan slug için de
  **HTTP 200** döner, sessizce arama sayfasına yönlendirir. Yalnız `<title>` ele
  verir: `"Arama - TDV İslâm Ansiklopedisi"`. **Her slug böyle doğrulanacak;**
  doğrulanmamış slug kaynak sayılmaz.
- Kaynak yoksa **uydurulmaz** — "kaynak yok" işaretlenir ve bana bildirilir.

---

## 4. OPUS OTURUMLARI — araştırır ve karar verir

### Oturum 2 — denetim katmanı · `arac/denetle*.py`

**Neden Opus ve neden ilk dalga:** artık **9 Sonnet oturumu** aynı anda veri
yazacak. Denetim katmanı bu mimaride tek hata ağı ve *önce* var olmalı. Bu, tüm
dağıtımın en yüksek kaldıraçlı işi.

- **Yeni denetim — sürüm damgası:** `js/` veya `css/` değiştiyse `index.html`
  damgası da arttı mı (r83 vakası: kod yayında, tarayıcı eskisini gösteriyor)
- **Mükerrer denetimi neden 36'yı kaçırdı** (Âli Paşa'nın 1871 vefatı iki madde)
  — eşik **ölçülerek** ayarlanacak, tahminle değil
- **Yeni denetim — statü tutarlılığı:** bir kayıt `d:` (doğrudan) ile `v:` (vasal)
  arasında gerekçesiz sıçrıyor mu; işgal `s:` olarak mı yoksa `v:` olarak mı
  yazılmış. Sonnet oturumlarının en olası hata sınıfı bu.
- **Sekizinci denetim — anakronizm** (`ETIKETLEME.md`): bir olay, taraflarından
  biri henüz kurulmamış / çoktan yıkılmışken geçiyor mu
- Denetim çıktısını `denetim/` altına tarihli yaz ki dalgalar arası fark görülsün

### Oturum 4 — Arabistan/Yemen + 1806-1830 · **iki blok**

Projenin en zor sourcing işi. Her ikisi de `yerlesimler.js`'e dokunuyor →
**düzeltme listesi yaz, veriye yazma.**

**A. Arabistan · Yemen · Hicaz** → `OTURUM-4-DUZELTMELER.md`
- 1 — Tosun Paşa Yanbu'ya çıktı: **Yanbu neresi**; Vehhâbîler Mekke-Medine-Tâif'i
  aldıktan sonra orada görünen Osmanlı parçası gerçek mi
- 20 — Kavalalı'ya irsî valilik: Arabistan'da nüfuz alanına geçen toprak doğru mu;
  Mısır'ın güneyi / Kızıldeniz batısı **Osmanlı idaresi mi Mısır idaresi mi**
- 24 — Yemen'de nokta nokta Osmanlı idaresi hata mı; Kızıldeniz'in karşı kıyısı
  Osmanlı'ya mı Mısır'a mı bağlı
- 25 — Şirket-i Hayriye maddesinde Yemen toprakları neden artıyor
- 34 — Asîr'in doğrudan idareye alınması; körfezdeki hareketlilik ayrı madde
- 35 — Lahsa: neresi merkeze bağlı, neresi özerk
- 53 — San'â'nın geri alınması (kaybı hiç görünmüyor)

**B. 1806-1830 kronolojisi** → `OTURUM-4-KRONOLOJI.md`
Oturum 7 (Sonnet) bunu `olaylar_ek7.js`'e işleyecek — **doğrudan madde metni yaz.**
- 2 — Bükreş antlaşması: Kafkasya'daki kayıp + Hotin doğru mu; **savaşa giden
  gelişmeler eksik** (ne zaman başladı, hangi savaş, bozgunlar nerede)
- 7 — Osmanlı-Rus savaşında Rus ilerlemeleri
- 8 · 10 — Cezayir'in Fransa'ya kaybı, işgal nasıl oldu, adım adım
- 9 — Yunan isyanı: Mısır kuvvetleri, Rus-İngiliz-Fransız müdahalesi

### Oturum 11 — Balkan ekseni 1859-1913 · `data/olaylar_ek10.js`

**Yeni görev — Orta Asya notlarını Oturum 15'e devret.** hatalar 11'in en
tartışmalı bloğu; "kişisel birlik ≠ ilhak" ve "işgal ≠ vasallık" hatalarının
yoğunlaştığı yer (`OGRENILENLER §14`).

- 3 — Belgrad ne zaman elden çıktı da geri alındı (madde havada kalmış)
- 28 · 29 · 30 — Eflak-Boğdan birleşmesi, Cuza, Romanya adı. **Boğdan vasal
  görünüyor, Eflak görünmüyor** — yanlışsa en baştan geriye dönük düzelt
- 38 · 39 — 93 harbine giden yolun taşları + harbin safhaları
- 46 · 47 · 48 · 49 — Ayastefanos → Berlin farkı, Doğu Rumeli'nin katılması,
  **Bulgaristan özerk mi bağımsız mı**, Romanya-Sırbistan bağımsızlığı, Teselya/Dömeke
- 54 — Bosna: **önce Avusturya taralı işgali, sonra ilhak** (iki ayrı gösterim)
- 57 · 58 — Balkan savaşları adım adım; Çatalca'ya kadar kayıp mıydı; Edirne
- **Sınır geometrisi** (29: "Boğdan cetvelle çizilmiş gibi") → `OTURUM-11-BALKAN.md`,
  `yerlesimler.js`'e dokunma
- **Devlet kayıtları** gerekirse Oturum 3'ten iste, kendin yazma

### Oturum 13 — Asya cepheleri · `yerlesimler_asya.js` + `olaylar_ek11.js`

- 59 — Britanya'nın Basra'da ilerlemesi doğru mu; doğruysa kronolojide yok
- 61 · 62 — Irak · Filistin · Kafkas cepheleri **gün gün**: Rus ilerlemesi ve
  çekilmesi, Osmanlı'nın kurtardığı iller, Ermeni harekâtları, savaş sonu
  Kafkasya ilerleyişi, Mondros'a kadar müttefik ilerlemesi
- 60'ın araştırma kısmı — Sarıkamış ve Kanal harekâtı (ikisi de `yenilgi`)
- **Ok kayıtlarını Oturum 10'a bildir**, `savaslar.js`'e yazma
- Devam: harita penceresi ölçümü (`OTURUM-13-PENCERE-OLCUMU.md`)

### Oturum 14 — Afrika · `yerlesimler_afrika.js` + `olaylar_ek9.js`

- 16 — Bicaye işgali nerede (haritada görünmüyor)
- 18 — Cebel-i Dürüz neresi, kime karşı ayaklandı; Cezayir'den Fransa'ya geçen
  parça bu maddeyle mi ilgili
- 23 — Cezayir işgalinden sonra hâlâ Osmanlı pembesi görünen iç bölgeler: bağ kaldı mı
- 27 — Tuggurt: elden çıkan bölge işaretlenmeli
- 41 · 42 — Mısır'ın İngiliz işgali, madde madde, **taralı gösterim**
- 43 — Mehdî devleti ilerlemeleri haritada yok
- 44 — İngiltere'nin Kızıldeniz ve Arabistan yarımadası faaliyetleri
- 51 — **Tunus işgali ile Duyûn-ı Umûmiyye ayrı maddeler olmalı**
- 52 — Bogos → Habeşistan (neresi olduğu haritada yok)
- 56 — Trablusgarp savaşı, İtalyan işgalleri adım adım
- 17 (Libya sınırları cetvelle çizilmiş gibi) → **motor sorunu**, Oturum 16'ya bildir

### Oturum 16 — motor · `uret_petek.py` · `renkler.py` · `girdi.py`

**Petek kilidinin sahibi.** Motorun tek kusuru bütün haritayı sessizce bozuyor:
**noktasız bir bölge en yakın hücreye yutulur ve o hücrenin sahibinin rengiyle
boyanır.** Bu yüzden Opus.

- 17 — çöl sınırlarının cetvelle çizilmiş görünmesi: sancak peteğinin gerçek
  şekli mi, yoksa **nokta yokluğu** mu? Ölç, sonra karar ver.
- 40 — 1800 sonlarında Mısır'ın ortasındaki boşluk (aynı kusur şüphesi)
- 29'un geometri kısmı — Boğdan sınırları cetvel değil topografya izlemeli
- Devam: `KORUMA_PAYI = 0.06` sonrası sıfır alanlı hücre taraması
- Oturum 8'in (Fable) ölçüm raporunu girdi olarak kullan — **ama sayıyı kendin
  doğrula**, ölçümü doğrulanmamış rapora dayanarak motoru değiştirme
- Üretim başlarken ve bitince oturumlara haber ver (§1 kilit kuralı)
- Oturum 14, madde 17'yi sana havale edecek

---

## 5. SONNET OTURUMLARI — uygular ve doğrular

### Oturum 10 — `data/savaslar.js`
Şema `js/app.js`'te hazır: `HAREKET` (9 tip) + `SONUC_ROZET`, dokuz çizgi katmanı kurulu.

`tur`: `sefer · cekilme · tahliye · akin · kusatma · deniz · teslim · seyahat · isyan`
`sonuc`: `zafer · yenilgi · belirsiz`

- **Mevcut 50 SEFERLER kaydını etiketle** (alan yoksa `sefer`/`belirsiz` varsayılır)
- **Yalnız tarihi ve yeri kronolojide ZATEN olan okları ekle:** 4 (2. Sırp isyanı 🔥) ·
  5 (Eflak isyanı, İpsilanti) · 6 (Navarin) · 12 (Rus donanması → Büyükdere) ·
  19 (donanmanın İskenderiye'ye teslimi = `teslim`) · 31 (Girit isyanı 🔥) ·
  33 (Belgrad garnizonunun çekilmesi = `cekilme`) · 34 (Abdülaziz seyahati =
  `seyahat`, 5-6 adım) · 39 (Rus ordusu → Yeşilköy) · 55 (Arnavutluk isyanı 🔥)
- 🔴 **Yeni tarih/koordinat araştırma.** Bilinmeyen varsa ilgili Opus oturumundan
  iste (60 → Oturum 13, Afrika okları → Oturum 14, Balkan okları → Oturum 11)

### Oturum 7 — `data/olaylar_ek7.js`
**Oturum 4'ün B bloğunu işler.** Kendi başına tarihî iddia üretmez.
- Oturum 4'ün `OTURUM-4-KRONOLOJI.md` maddelerini dosyaya geçir
- 26 — Sinop baskını ayrı madde (yaygın bilinen, tek olay)
- 36 — Âli Paşa'nın 1871 vefatı iki madde: **mükerreri sil** (Oturum 2 ile eşgüdüm)

### Oturum 15 — `yerlesimler_ortaasya2.js` · `goller.js`
**Oturum 11'den devraldı.** `OTURUM-11-ORTA-ASYA.md` ve `-KIMLIK.md` notlarını oku.
- **Tarihî Aral Gölü poligonu** — modern göl sınırı kullanıldığı için ~88.000 km²
  yanlışlıkla Hîve boyanıyor (Oturum 11'in bulgusu, ölçülmüş)
- `yerlesimler_ortaasya2.js` (7 nokta) birleştirme — `nogay`/`kazak` kimlikleri
  **Oturum 9'dan iste**

### Oturum 5 — `data/kisiler.js`
- 37 — V. Murad'ın cülûsu ve hal'i **ayrılmalı**; Abdülaziz'in hal'i genişletilmeli;
  Bakanlar Kurulu'nun tabancayla basılması, Çerkes Hasan olayı, Beşiktaş muhafızlığı
- Kronoloji maddelerini **Oturum 11'e bildir** (`olaylar_ek10.js` onun)

### Oturum 3 — `data/devletler.js`
- Kimlik sözlüğü: 213 devletin **105'i haritalanmamış**
- Balkan savaşları ve Berlin sonrası yeni devlet kayıtları — **Oturum 11'in
  ihtiyacı**, onunla konuş; kronolojiye sen yazma

### Oturum 9 — `data/kimlikler.js`
- 47 — Berlin sonrası Bulgaristan: bağlı özerk devlet miydi (kimlik + renk)
- Renk paylaşımı: **hiç aynı anda var olmamış** kimlikler aynı rengi paylaşabilir
- 🔴 **Kimlik birleştirme yapılmayacak** — ölçüldü: DSATUR 4→5'e çıkıyor ve
  "hayalet birleşik devlet" üretiyor (Oturum 12'nin ölçümü)
- Oturum 15 `nogay` ve `kazak` kimliklerini isteyecek

---

## 5b. FABLE OTURUMLARI — yalnız ölçer

Oturum **8** ve **12** hiçbir veri dosyasına yazmaz; çıktıları `.md` raporudur.
Rapor şu biçimde olmalı — aksi kabul edilmez:

    Bulgu        : <tek cümle>
    Komut        : <çalıştırılan komut>
    Girdi        : <hangi dosya, hangi tarih>
    Ölçüm        : <sayı + birim>
    Karşılaştırma: <sağlıklı örnekle yan yana>

"Şuna benziyor / bozuk görünüyor" biçiminde gözlem geçersizdir. Yeniden
üretilemeyen sayı yok sayılır. **Karar vermezler** — "bu yanlış, şöyle olmalı"
demek onların işi değil; ölçümü ilgili Opus oturumuna havale ederler. Raporlar
kullanılmadan önce ben doğrularım.

### Oturum 8 — geometri teşhisi · `oturumlar/OTURUM-8-*.md`
Çıktısı **Oturum 16'nın (motor) girdisi.**
- 13 · 14 — Mısır'ın Çukurova-Adana'yı alması; Şam'dan doğuya ve Halep'ten
  Diyarbakır'a uzanan çıkıntılar. **Ölç:** bu hücreler kaç km², kaç köşe noktası,
  komşu sağlıklı hücrelerle oranı ne. Normal mi diye **karar verme** → Oturum 16
- 40 — Mısır ortasındaki boşluğun alanı ve içinde kaç yerleşim noktası var
  (sıfırsa bilinen kusur sınıfı) → Oturum 16
- 11 — Girit'te yalnız orta bölümün boyasız olması: **ölç** (kaç hücre, hangi
  sahipler). Tüm adanın Mısır vasal rengine boyanıp boyanmayacağı **tarihî karar**
  → Oturum 14'e havale et
- Bekleyen ölçümler: ada kuralı ayrımı · Venedik %0 vakası · 32 ULP kenarı

### Oturum 12 — `oturumlar/OTURUM-12-DUZELTMELER.md`
- Batı Avrupa **renk paylaşımı ölçümü** — Fable için en uygun iş: hiç aynı anda
  var olmamış kimlik çiftlerini listele, her biri için DSATUR renk sayısını
  önce/sonra ölç. Sonucu Oturum 9 uygular.
- 50 — İtalya'nın Kızıldeniz'de işgali · 51'in Fransa kısmı: haritada **ne
  görünüyor** (hangi kayıt, hangi tarih, hangi sahip). Kronolojiyi Oturum 14 yazar.
- 🔴 `data/yerlesimler_avrupa.js` artık **sana kapalı** — İber Birliği vakasında
  olduğu gibi bu dosya tartışmalı kararlar içeriyor.

---

### Ben — `js/app.js` · `css/style.css` · `index.html`
- ✅ 21 · 22 · 30 · 32 · 60-rozet — r91'de yayında
- ⬜ **Üçüncü gösterim: işgal (taralı alan)** — 42 ve 54 için gerekli
- ⬜ Bölge isimleri büyük punto (Mısır, Cezayir, Osmanlı) — 21'in ikinci yarısı
- ⬜ Dokuz ok tipi için lejant

---

## 6. Dalgalar — token bütçesi

Maliyeti belirleyen **oturum sayısı değil, TDV araştırma hacmi.** Paralellik toplamı
değiştirmez, pencereyi daha çabuk tüketir. Kaldıraç **dalga başına madde sayısı.**

| Dalga | Oturumlar | Neden |
|---|---|---|
| **0 — şimdi** | yok | Kalan %21 yeni döneme saklanır |
| **1** | **2** (Opus) · 16 · 10 | 🔴 **2 önce**: 9 Sonnet oturumu veri yazmaya başlamadan hata ağı kurulmalı. 16 petek kilidini açar. 10 ucuz ve kimseyi beklemez. |
| **2** | **4** · **11** (ikisi Opus) | İki en zor araştırma bloğu. Pahalı — tek başına bir dalga. |
| **3** | **14** · **13** (ikisi Opus) | Afrika + Asya cepheleri |
| **4** | 7 · 15 · 8 · 5 | Sonnet: 4'ün çıktısını işleme + ölçüm. Ucuz. |
| **5** | 3 · 9 · 12 | Kimlik / renk. En ucuz, sona kalabilir. |

Dalga bitmeden sonraki açılmaz. Bitiş = `OTURUM-N-ILERLEME.md` güncellenmesi.

**Opus yükü 2., 3. dalgada toplanıyor** — dönemin en taze olduğu ana denk getirin.

---

## 6b. Ne devredilir, ne devredilmez

Ölçüt **sıkıştırma oranı**: işin girdisi çıktısından ne kadar büyük?

| Oran | İş türü | Kim yapar |
|---|---|---|
| ~20:1 | Araştırma — 20 TDV sayfası okunur, 7 doğrulanmış olgu çıkar | **Ayrı oturum** |
| ~50:1 | Ölçüm — bütün geometri taranır, 5 sayı çıkar | **Ayrı oturum** |
| ~1:1 | Mekanik düzenleme — dosya girer, aynı dosya çıkar | **Ben** (kurulum maliyeti işten büyük) |
| — | Entegrasyon, karar, `yerlesimler.js` uygulaması | **Ben** (bütün resim gerekiyor) |

**Gerçek tavan bütçe değil, doğrulama kapasitesi.** Her çıktı benden geçiyor.
Oturumlar doğrulayabildiğimden hızlı üretirse ya birikir ya da doğrulamadan kabul
ederim — ikincisi bu projeye hatanın giriş yolu (uydurma kesinlik, doğrulanmamış slug).

**Kalıcı kural: aynı anda en fazla 4 oturum, hepsi araştırma bloğu, hepsi ayrı dosya.**
Geri kalan her şey bende.

---

## 7. İletişim

- Oturumlar **benimle** konuşur, birbirleriyle değil. Tek entegrasyon noktası benim.
- Başka dosyada düzeltme gerekiyorsa **sahibine bildir**, kendin yazma.
- Sonnet oturumu kaynak gerektiren maddeye çarparsa **durur**, Opus'a havale eder.
- Bitirince `oturumlar/OTURUM-N-ILERLEME.md` güncellenir.

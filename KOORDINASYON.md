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

### 🤖 ÜRETİLEN DOSYALAR — SAHİBİ YOK, ELLE YAZILMAZ

| Dosya | Ne zaman yazılır |
|---|---|
| `data/bolgeler.js` | geometri boru hattından hemen sonra (koşunun ~40. saniyesi) |
| `data/donemler.js` | koşunun sonunda |
| `data/devletler_harita.js` | koşunun sonunda |

Üçü de `arac/uret_petek.py`'nin **çıktısı**. Elle yapılan bir düzenleme bir sonraki
koşuda **sessizce ezilir** — hata vermez, denetim temiz görünür.

⚠️ Bu satır bir ölçüm hatasından doğdu: `bolgeler.js`'i "motorun okuduğu dosya"
sanmıştım (grep çıktısında görüp `open(...,"w")` mu `"r"` mi diye bakmadan).
Oturum 16 düzeltti. `CLAUDE.md §5` zaten "🤖 ÜRETİLMİŞ — ELLE DÜZENLEME" diyordu
ama **KOORDINASYON.md'de yoktu**, ve yeni gelen oturum bu dosyayı okuyor.

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

Kilit **Oturum 16**'da. Ama Oturum 16'nın ölçtüğü gibi bu artık yetmiyor:

> **"Kilitledim" demek yetmiyor — yedi üretim böyle gitti.** Kilit iki taraflı
> değil; `yerlesimler.js`'in **on iki potansiyel yazarı** var. Koşu öncesi her
> oturumun ayrı ayrı **"girdi sabit"** demesi gerekiyor.

**Üretim penceresi protokolü:**
1. Oturum 16 "üretim açıyorum" der.
2. `yerlesimler*.js`'e yazma ihtimali olan **her oturum** "girdi sabit" diye
   cevaplar. Cevap vermeyen oturum varsa üretim başlamaz.
3. Üretim koşar (30+ dk). Bu sürede hiçbir yazma yok.
4. Oturum 16 "motor serbest" der. Kilidi bırakan taraf açar.

### 🔴 KİLİT İKİ YÖNLÜDÜR — tek yönlü duyuru güvenilmez

Yukarıdaki protokol yalnız **başlatan** tarafı bağlıyordu ve bu bir kez kırıldı:
üretim 21:53'te başladı, kilit duyurusu gönderildi ama **mesaj kuyruğa alındı**
(hedef oturum turunu bitirmeden ulaşmadı), 22:06'da `yerlesimler_afrika.js`'e
108 satır yazıldı. Koşu temiz bitecekti, denetim temiz çıkacaktı, harita
sessizce veriden geri kalacaktı.

Ters yön de yazılı olmalı — Oturum 14'ün önerisi:

> **Uzun bir yazma turuna başlamadan önce YAZAN TARAF sorar: "üretim koşuyor mu?"**

Ölçüsü basit: `git status` ile `data/bolgeler.js` · `donemler.js` ·
`devletler_harita.js` damgalarına bak. Son dakikalarda değişmişlerse motor koşuyor.

**Neden iki yön şart:** duyuru mesaj katmanında yaşıyor ve mesaj gecikebilir;
`uret_petek.py`'deki parmak-izi bekçisi (`00468aa`) çöpe gitmeyi **görünür**
kılıyor ama **önlemiyor**. Önleme yalnız iki tarafın da sorması hâlinde çalışır.
Bu, `OGRENILENLER §15`'in ("bir aracın kör noktası aynadaki yönü sormamaktır")
protokol hâli.

⚠️ Motorda **uçtan uca koşturulmamış üç değişiklik birikti**: `kur:`/`bit:`
epokları (b781c2c), yedinci denetim tabanı, 5 yeni renk. Yeni dönemin ilk işi
bu üçünü tek koşuda doğrulamak.

---

## 1b. Sonraki dalga kuyruğu (Oturum 16'nın ölçümlerinden)

Bu üç iş **ölçüldü ve sahibi belli**, ama sahibi bu dalgada açılmadı:

| İş | Kime | Ölçülmüş gerekçe |
|---|---|---|
| md.40 — Batı çölü + Nûbe çölü'ne 19. yy dönemi | **14** | Boşluk motor kusuru DEĞİL: içinde 2 nokta var, ikisi kasten sahipsiz. Asimetri şurada: 1885'te batıdaki Cağbûb Osmanlı, doğusundaki Mısır batı çölü boş. Mehmed Ali 1820'de Siva'yı ilhak etti, vahalar Kahire'den idare edildi → 1820 sonrası `v:` gerekebilir. TDV: `vahat` · `siva` · `misir` |
| md.29 — nehir kenarına nokta: Soroka, Orhei, Reni | **11** | Boğdan cetvelle çizilmiş DEĞİL (köşe/1000 km = 101,7; sağlıklı 115-118). Sorun yaslanmada: Roman %0, Kili %0, Suçava %5. Sebep ölçüldü: yaslama yarıçapı 33 km, Prut-Dniester arası yer yer 150 km — orta dikme hiçbir nehre yaklaşamıyor |
| md.17 — Libya içine nokta | **14** | Çöl sınırı cetvel DEĞİL, nokta yokluğu: 8 nokta / 1.540.913 km² = 192.614 km²/nokta; Batı Anadolu 1.868 (103 kat). 🔴 ŞART: eklenecek noktaların **çoğu kasten sahipsiz kalmalı** — Osmanlı'nın Trablusgarp hâkimiyeti kıyı + vahaydı, çöle sahiplik atamak yanlış olur |

**Şarkî Rumeli renk kısıtı** doğru ama bugün uygulanamaz: `sarki-rumeli` kimliği
hiçbir `yerlesimler*.js`'te geçmiyor (0 nokta-dönem). Kimlik veriye girdiği gün
ayrı hex gerekecek; not `renkler.py`'ye düşüldü.

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

## 6c. Geometrik düzeltme listelerinde işlem kuralı

> **Hiçbir vaka, parçanın KOORDİNATI söylenmeden tartışılmaz.**

Kara-kısıtlı Voronoi'nin 32 parçalık listesi gözden geçirilirken bu kural üç kez
üst üste kendini kanıtladı — ve üçünde de sezgi yanıldı:

| Vaka | Sezgi | Koordinat ne dedi |
|---|---|---|
| Sina güneyi → Tebük | *"Sinâ Mısır'a bağlıydı, red"* | 28,60K **34,99D** — Akabe körfezinin doğusu, yani **Arabistan**. Transfer doğru. |
| Helsinki → Riga | *"28.522 km² Finlandiya içi"* | 58,70K 25,54D — **Estonya**. Gerçek denizaşırı vaka. |
| Urmiye → Merend | *"kasaba kendi gölünün hinterlandını kaybediyor"* | 37,86K 45,50D — gölün **kuzeydoğu** yakası, zaten Merend hinterlandı. Transfer doğru. |

Üçünde de hata aynı biçimdeydi: **adın çağrıştırdığı resme göre hüküm.** "Sina",
"Helsinki", "Urmiye" duyulunca zihinde bir yer beliriyor ve parçanın gerçekte nerede
olduğu sorulmuyor.

Sekiz basamaklı bir sayı, iki oturumun sezgisinden güvenilir çıktı.

⚠️ Ve tarihî hüküm de coğrafyaya bakmadan verilemez: `§26`'da *"geometri karar veremez,
tarihî göz gerekir"* denmişti; tersi de doğru. İkisi birlikte gerekiyor
(`OGRENILENLER §28-§29`).

---

## 7. İletişim

- Oturumlar **benimle** konuşur, birbirleriyle değil. Tek entegrasyon noktası benim.
- Başka dosyada düzeltme gerekiyorsa **sahibine bildir**, kendin yazma.
- Sonnet oturumu kaynak gerektiren maddeye çarparsa **durur**, Opus'a havale eder.
- Bitirince `oturumlar/OTURUM-N-ILERLEME.md` güncellenir.

---

## 8. YENİ EKSEN — tarih çizgisini Kösedağ'a (1243) geriye götürmek

Kullanıcı kararı: *"tarih çizgimizi Anadolu Selçuklu Devleti'nin dağıldığı tarihe
doğru ilerletelim… beylikleri de buna göre tekrar belirleyelim, kronolojiyi
haritayı her şeyi geriye doğru genişletelim."*

### Ölçüm — planı bu sayı belirliyor

```
927 yerleşim kaydı
├─ 883'ünün en erken dönemi TAM OLARAK "1281-01-01"   (881'i s: yabancı sahip)
├─ 1281'den ÖNCE başlayan kayıt                    : 0
└─ 1281'den sonra başlayan                         : 22 (1395, 1452, 1466…)
```

**1281 gerçek bir tarih değil, atlasın EPOK DAMGASI.** O 883 tarihin hiçbiri
"burası 1 Ocak 1281'de şu devletin oldu" demiyor; "atlas burada başlıyor" diyor.

### 🔴 Sıralama kuralı — epok VERİDEN SONRA taşınır

Epoku 1243'e çekip veri getirilmezse 883 kayıt o aralığı kapsamaz: harita 38 yıl
**bomboş** görünür ve Değişmez 1 sahipsiz sayısı 34'ten ~900'e fırlar. Sıra:

1. 1243-1281 verisi üretilir (Oturum 13 + 14)
2. Kimlik ve devlet kayıtları açılır (Oturum 3 + 9)
3. Motor epoku okur (Oturum 16)
4. **En son** arayüzdeki başlangıç ve `<title>` değişir (ben)

### Çapa: Kösedağ, 1 Temmuz 1243 — DÜZELTİLDİ


⚠️ **Benim ilk verdiğim "26 Haziran 1243" UYDURMAYDI.** Oturum 14 TDV'ye iki kez
gitti: `kosedag-savasi` maddesinde o ifade **geçmiyor**. TDV iki tarih veriyor —
İbn Bîbî 11 Muharrem 641 = **1 Temmuz 1243**, İbnü'l-Adîm 13 Muharrem = 3 Temmuz.
Kaynaksız bir güne gün hassasiyeti verdim; `OGRENILENLER §8`'in tam örneği ve
kuralı koyan bendim.

**Çapa zaten kusurlu:** tâbiiyet savaşın günü değil ANTLAŞMA ile başladı ve TDV o
antlaşmaya tarih vermiyor (yıllık 3.600.000 dirhem + 10.000 koyun yazıyor, gün
yazmıyor). "Selçuklu İlhanlı vassalı oldu" günü TDV'den çıkarılamıyor.

### 🔴 BÖLÜMÜ YANLIŞ KURDUM — ölçüm düzeltti

"22 beylik" bir **XIV. yüzyıl listesi**. Yaşayan beylik sayısı (Oturum 14 ölçtü):

```
1243 →  2      (Çobanoğulları · Divriği Mengücüklüleri)
1256 →  3      1261 → 4      1277 → 6
1281 →  6      1290 → 8      1300 → 12-13
```

Listemdeki **sekizi 1300'den sonra** kuruldu, pencereye hiç girmiyor: Aydın 1308 ·
Teke 1321 · Eretna 1335 · Dulkadir 1337 · Tâceddin ~1348 · Hacıemîr ~1350 ·
Ramazan 1352 · Kadı Burhâneddin 1381.

Yani Oturum 14'e verdiğim pay boşluğun **yalnız %27'si**. 1243-1281'i dolduracak
olan **Selçuklu + İlhanlı + Trabzon Rum + Kilikya Ermeni + Kıbrıs** — hepsi
Oturum 13'ün alanı. **Oturum 14 Afrika'ya dönüyor.**

Ayrıca listemde **Mengücüklüler eksikti** (1243'te yaşayan iki beylikten biri) ve
**Alâiye fazlaydı** (TDV `alanya` maddesi: Karamanoğulları'nın kolu; tablo ise
ayrı beylik diyor — TDV kendi içinde çelişiyor, tek taraflı silinmedi).

### Kademe önerisi — tek hamlede 1243'e gitme

| Kademe | Tarih | Durum |
|---|---|---|
| **A** | 1288-01-01 | Karacahisar, Osmanlı'nın ilk **doğrulanmış** toprağı. Bugünkü 1281 zaten kaynaksız; düzeltme, genişletme değil |
| **B** | 1277-01-01 | Cimri olayı: Konya, Kütahya, Karaman aynı anda kırılıyor. 6 beylik canlı |
| **C** | 1256-01-01 | Karamanoğulları. 3 beylik canlı, Anadolu'nun ~%90'ı Selçuklu |
| **D** | 1243-07-01 | Kösedağ. 2 beylik canlı, ~%95'i Selçuklu/Trabzon Rum/Kilikya |

🔴 **Osmanlı'nın 1281-1288 arası TDV'de doğrulanmış toprağı YOK.** İnegöl ve
Bilecik'in bugünkü 1281-1299 sahipsizliği bunun sonucu. Epok 1243'e çekilirse bu
boşluk 7 yıldan **45 yıla** çıkar.

### Beş ölü slug (Oturum 14 doğruladı)

`mentesogullari` → **menteseogullari** (tek harf!) · `eretna` → `eretnaogullari` ·
`beylikler` → `anadolu-beylikleri` · `cimri` ve `ermenek` → karşılığı YOK.
Ermenek ölü olduğu için Karamanoğulları'nın "ilk merkezi Ermenek" bilgisi
**doğrulanamadı ve uydurulmadı**; doğrulanmış tek merkez Lârende/Karaman 1286.

Selçuklu'nun İlhanlı vassalı hâline geldiği ve merkezî otoritenin çöktüğü an —
beylik boşluğunu yaratan tam olarak bu. Sultanlık ~1308'e kadar kâğıt üstünde
sürüyor; **ikisi de veriye girmeli**, tek tarihe indirgemek yanlış olur.

### Dağıtım

| Oturum | Pay | Çıktı |
|---|---|---|
| **13** (Opus) | Anadolu Selçuklu 1243-1308 · İlhanlı hâkimiyeti (`v:` mi `s:` mi) · 1243-1281'de sahibi değişen komşular | `OTURUM-13-SELCUKLU.md` |
| **14** (Opus) | ~22 beylik: kuruluş tarihi, merkez, ilk şehirler, Selçuklu/İlhanlı bağı | `OTURUM-14-BEYLIKLER.md` |
| **3** (Sonnet) | `devletler.js` kayıtları — 13/14'ün çıktısı gelince | `devletler.js` |
| **9** (Sonnet) | kimlik + renk | `kimlikler.js` |
| **16** (Opus) | epok mimarisi, `kur:`/`bit:` ile ilişkisi | motor |
| **ben** | zaman çizgisi başlangıcı, başlık, lejant | `js/` `index.html` |

### İki tuzak (görev mesajlarına yazıldı)

**"Kuruluş tarihi" tuzağı** — beyliklerin çoğu için tek bir kuruluş günü YOKTUR.
Uç beyliğinden müstakil beyliğe geçiş yıllara yayılır ve kaynaklar çelişir.
Emin olunmayan yerde aralık verilecek, uydurulmayacak (`OGRENILENLER §8`).

**Toprak sıfır toplamlıdır** — beylikler doğarken Anadolu boş değildi. Bir
beyliğin başlangıcını erkene çekmek, aynı toprağı o tarihte Selçuklu'dan ALMAK
demektir. Oturum 13 ile 14 çakışan her toprakta mutabık kalacak.

# Anadolu Selçuklu Devleti 1243-1308 ve İlhanlı hâkimiyetinin veri karşılığı

**Oturum 13 (Opus) · 2026-07-30 · yalnız rapor — `data/yerlesimler.js`'e YAZILMADI**

Merkez oturumun verdiği görevin **1. ve 2. maddeleri** bu belgede cevaplanmıştır.
3. madde (1243-1281 arası Anadolu dışı komşular) sonraki döneme bırakıldı; yine de
bu turda çıkan **iki doğrulanmış bulgu** §7'ye yazıldı ki kaybolmasın.

Bütün TDV slug'ları `<title>` ile sınandı; ölü olanlar §8'de listelidir.

---

## 0. Baş sonuçlar

| Soru | Cevap | Dayanak |
|---|---|---|
| Kösedağ'ın tarihi | **1 Temmuz 1243** (11 Muharrem 641) | TDV `kosedag-savasi` |
| 1243'te Selçuklu toprak kaybetti mi | **Hayır.** Sivas, Kayseri, Erzincan yağmalandı, işgal edilmedi | TDV `kosedag-savasi` |
| İlhanlı hâkimiyeti `v:` mi `s:` mi | **`s:` + `d:"selcuklu"`** — `v:` teknik olarak imkânsız | §3, motor ölçümü |
| Selçuklu ne zaman biter | **1308, II. Mesud'un ölümü** — ikisi aynı olay, alternatif değil | TDV `mesud-ii` |
| 1259-1262 Kızılırmak bölünmesi çizilsin mi | **Hayır**, kronolojiye yazılsın | §5 |
| Epok 1243'e taşınabilir mi | **Bugün hayır** — 864 kayıt sahipsiz kalır | §6 |
| Yeni kimlik / renk gerekiyor mu | **Hayır.** `selcuklu` (#c2185b) ve `ilhanli` (#7a5ba0) zaten var | `renkler.py` 149, 199 |

🔴 **En önemli bulgu:** mevcut veri, 1281'de Sivas · Kayseri · Amasya · Tokat ·
Erzincan · Erzurum dahil **16 Anadolu kaydını `ilhanli` gösteriyor.** TDV bu
şehirlerin 1280'de bizzat Selçuklu sultanı II. Mesud'a verildiğini yazıyor.
Düzeltme listesi §4'te.

---

## 1. Çapa tarihi — merkez oturumun tarihini düzeltiyorum

Merkez "Kösedağ, **26 Haziran 1243**" önerdi. TDV bu tarihi vermiyor:

> "İbn Bîbî savaşın 641 yılının 11 Muharreminde (**1 Temmuz 1243**), o günlerde
> hayatta olan İbnü'l-Adîm ise 13 Muharreminde (**3 Temmuz**) vuku bulduğunu
> kaydeder." — TDV, `kosedag-savasi` (Faruk Sümer)

26 Haziran, 641 yılının **6** Muharremine düşer; hiçbir kaynakta bu gün yok.
Yaygın olarak Vikipedi'de geçer — `KOORDINASYON.md` §3'ün "Vikipedi asla tek
kaynak değil" kuralının tam vakası.

> ### Çapa: **1243-07-01** (İbn Bîbî). Şerh: İbnü'l-Adîm 03 Temmuz der.

Merkezin "1243 dağılmanın başlangıcı, 1308 resmî son, **ikisi de veriye girmeli**"
tespitine **katılıyorum** — hatta veri bunu zaten yarı yarıya yapıyor: `selcuklu`
kaydı `devletler.js`'te `f:"1075-01-01", t:"1308-01-01"` olarak duruyor, yani 1308
girilmiş, 1243 girilmemiş.

### 1.1 Bir ekleme: 1240 sınır tarifi hazır duruyor

TDV `selcuklular`, Kösedağ'dan üç yıl önceki sınırı **cümle cümle** tarif ediyor:

> "Bu tarihte devletin sınırları Erzurum'un doğusundan başlayarak Van gölüne
> iniyor, oradan Âmid önündeki Dicle'ye, güneyde Urfa ve Ayıntab'ın kuzeyinden
> geçerek Maraş'ın güneyindeki Nur dağlarına uzanıyor, batıda Dalaman çayından
> başlayıp Denizli önünden geçerek kuzeyde Sakarya'ya ulaşıyordu."

1240 ile 1243 arasında bu sınırda hiçbir değişiklik yok (tek istisna Erzurum'un
1242 sonunda yağmalanıp **terkedilmesi**, §2). Yani **1243 taban geometrisi bu
cümleden doğrulanabiliyor** — ayrı araştırma gerekmiyor. Aynı paragraf, o tarihte
Selçuklu'ya **tâbi** olan beş devleti de sayıyor; §7'ye aldım.

---

## 2. Kösedağ 1243'te ne DEĞİŞTİ — cevap: toprak değil, statü

Görev metni "hangi şehirler fiilen sultanlıkta kaldı" diye soruyor. Kaynağa göre
doğru cevap **hepsi**:

| Şehir | 1242-43'te ne oldu | Sonuç |
|---|---|---|
| Erzurum | 1242 sonlarında Baycu Noyan zaptetti, halkı kılıçtan geçirdi, **baharda Mugan'a döndü** | işgal değil, akın |
| Sivas, Kayseri | Kösedağ'ın ardından "tahrip ve yağma" | **garnizon bırakılmadı** |
| Erzincan | Moğollar dönerken yağmalandı | aynı |
| Tokat, Amasya, Ankara, Konya, Antalya | sultan ve vezir buralara kaçtı, Moğol girmedi | dokunulmadı |

Antlaşmanın şartları **tamamen malî**: yılda 3.600.000 dirhem, 10.000 koyun,
1000 sığır, 1000 deve. **Tek bir şehir devredilmiyor.** Batu Han tâbiliğin işareti
olarak "ok, yay, kılıç ve börk" gönderiyor.

> "Böylece Ortadoğu'nun en kuvvetli devleti olan Anadolu Selçukluları Kösedağ
> bozgunuyla **tâbi devlet durumuna** düşmüş…" — TDV, `kosedag-savasi`

**Haritaya çevirisi: 1243-07-01'de Anadolu'nun boyası hiç değişmez.** Değişen,
kimin adına hutbe okunduğu değil, kime vergi gittiğidir — ve bizim şemamızda
verginin karşılığı yok.

Bu, çapayı gereksiz kılmıyor; **kronolojide** birinci sınıf bir maddedir. Ama
"Kösedağ'ı ekleyince harita kırılacak" beklentisi yanlış olur: Değişmez 2
anlamında Kösedağ **kırılmasız bir maddedir**.

### 2.1 Fiilî idare ne zaman değişti: 1277

Toprak el değiştirmedi ama idare değişti — ve tarihi bellidir:

- 15 Nisan 1277 — Elbistan ovasında Baybars İlhanlı ordusunu bozdu (TDV `abaka`).
- Baybars çekilince Abaka Anadolu'ya girdi, "bir rivayete göre 200.000 kişiyi
  katletti" (TDV `abaka`).
- Pervâne Muînüddin Süleyman idam edildi ve — kritik cümle:

> "İlhanlılar … Anadolu Selçuklu Devleti'ni **Tebriz'den gönderdikleri memurlarla
> idare etmeye başladılar.**" — TDV, `selcuklular`

Dikkat: cümle "Anadolu'yu" değil "**Anadolu Selçuklu Devleti'ni**" diyor. Yani
1277'de olan şey ilhak değil, **vesayetin şiddetlenmesi**; devlet aracı olarak
yerinde duruyor. Sonraki otuz yılın olayları da bunu doğruluyor — İlhanlı hanları
Selçuklu tahtına sultan **atıyorlar**, tahtı kaldırmıyorlar (§3.2).

---

## 3. `v:` mi `s:` mi — cevap `s:`, ve gerekçe iki ayrı eksende

### 3.1 Teknik gerekçe: `v:` bu işi yapamaz — tek başına belirleyici

Şemayı ölçtüm (`arac/girdi.py` §77-84, `arac/uret_petek.py` §892-936):

| | `d:` | `v:` | `s:` |
|---|---|---|---|
| Kimlik alanı (`d:"…"`) | yok | **yok** | **var** |
| Yalnız açıklama alanı | `y:` | `k:` | — |
| Motor hangi havuza atar | `OSM_HAVUZ` | **`OSM_HAVUZ`** | devlet havuzu |
| Haritada rengi | Osmanlı koyu | **Osmanlı açık ton** | devletin kendi rengi |

`uret_petek.py` §915-936 `tabi` kümesini `OSM_HAVUZ`'a yazıyor. Yani:

> **`v:` "tâbi" değil, "OSMANLI'YA tâbi" demektir.** Anadolu'ya 1243-1308 arası
> `v:` yazmak, haritayı **Osmanlı'nın açık tonuna** boyar — Osman Gazi'nin
> beyliğini kurmasından 56 yıl önce.

Bu tek başına kapanmış bir sorudur. `v:` seçeneği yok; `s:` + `d:` zorunlu. Geriye
tek soru kalıyor: `d:` ne olacak — `selcuklu` mu `ilhanli` mi?

### 3.2 Tarihî gerekçe: `selcuklu`. Bu, `OGRENILENLER` §14'ün aynı sınıfı

§14 ölçütü şuydu: *iki krallık aynı üst otoriteyi paylaşıyor ama **kendi
kurumlarını koruyorsa** haritada ayrı kimlikle durur* (İber Birliği vakası,
ölçüt: Portekiz kendi tacını, meclisini ve sömürge idaresini korudu).

Anadolu Selçuklu'da aynı ölçüt, aynı sonuç:

| §14 ölçütü | Selçuklu 1243-1308 | Kaynak |
|---|---|---|
| Kendi hükümdarı var mı | **Var**, kesintisiz — sadece 695-697 (1296-98) taht boş | TDV `selcuklular` hükümdar cetveli |
| Kendi sikkesi var mı | **Var.** "Son Anadolu Selçuklu sikkeleri de ona (II. Mesud'a) aittir" | TDV `mesud-ii` |
| Kendi divanı/veziri var mı | **Var** — Sâhib Ata Fahreddin Ali, Fahreddin Kazvînî, Şemseddin Lâkûşî | TDV `mesud-ii` |
| Üst otorite tahtı kaldırdı mı | **Hayır, doldurdu** — Argun 1282'de Mesud'u sultan ilân etti, Gāzân 1298'de III. Keykubad'ı geçirdi, 1302'de Mesud'u geri getirdi | TDV `mesud-ii` |

İlhanlı tarafı da aynı şeyi söylüyor:

> "Hülâgû öldüğü zaman (8 Şubat 1265) İlhanlı Devleti'nin sınırları Amuderya'dan
> Fırat'a ve Kafkasya'dan Belûcistan'a kadar uzanıyor, **Anadolu Selçuklu Devleti
> ile küçük Ermenistan Krallığı da bağımlı devletlerini oluşturuyordu.**"
> — TDV, `ilhanlilar`

"Bağımlı devlet" — İlhanlı'nın *sınırı* değil, İlhanlı'nın *tâbii*. TDV ikisini
aynı cümlede ayırıyor.

> ### 🔻 KARAR: 1243-07-01 → 1308-01-01 arası bütün Selçuklu Anadolu'su
> ### `s:[{f:"1243-07-01", t:"1308-01-01", d:"selcuklu"}]`
>
> İlhanlı vesayeti haritada **boya olarak değil, kronolojide** durur.
> `d:`/`v:` kullanılamaz; `d:"ilhanli"` ise devleti yok saymak olur.

### 3.3 Karşı görüşü de yazıyorum

Bu kararın bedeli var ve saklamak yanlış olur: 1277-1308 arasında Anadolu'da
gerçekten Moğol valileri (Togaçar, Baltu, Sülemiş, sonra Timurtaş) oturuyor,
vergiyi onlar topluyor, sultan Kayseri'de otururken **Konya'yı ahîler idare
ediyor** (TDV `mesud-ii`). "Selçuklu" boyası bu otuz yılı olduğundan güçlü
gösterir.

Buna rağmen `selcuklu` diyorum, çünkü alternatifin bedeli daha büyük: `ilhanli`
demek, kendi sikkesini basan ve kendi sultanını tahta çıkaran bir devleti
haritadan **otuz bir yıl** silmek olur — `3.5`'teki "hayalet devlet" hatasının
tam tersi, "hayaletlenmiş gerçek devlet".

Doğru telâfi boya değil, **etiket**: 1277-1308 aralığı kronolojide "İlhanlı
vesayeti" olarak, ayrıca `devletler.js`'in `selcuklu` özetinde işaretlenmeli.
(Ayrıca `js/app.js`'te işgal için **taralı gösterim** yapılıyor — `KOORDINASYON.md`
§ "Ben". Vesayet için üçüncü bir gösterim istenirse doğru yer orasıdır; ama bu
**benim kararım değil**, arayüz sahibinindir.)

---

## 4. 🔴 Mevcut veride ölçülmüş çelişki — 16 kayıt

Bu, raporun en somut çıktısıdır. Ölçüm:

```
py -c "... girdi.oku_dosya('yerlesimler.js') ... 1281-06-15 sahibi ..."
Anadolu kutusu (25-45°D, 35.5-42.5°K): 228 nokta
  bizans 99 | ilhanli 29 | selcuklu 22 | memluk 14 | venedik 11 | ceneviz 8 | …
```

29 `ilhanli` kaydının **16'sı Anadolu içinde** (42°D'nin batısında). Kalan 13'ü
(Van, Bitlis, Erbil, Hoy, Mâku, Musul çevresi…) gerçekten İlhanlı toprağıdır,
dokunulmaz.

TDV bu 16'nın en az beşini **açıkça** Selçuklu sayıyor:

> "Abaka Han **Erzurum, Erzincan, Sivas, Diyarbekir ve Harput'un idaresini ona
> (II. Mesud'a) verdi.**" (679/1280) — TDV, `selcuklular`

Yani veri, tam da bu şehirleri bir yıl sonrasında (1281-01-01) İlhanlı gösteriyor.

Ve Erzurum için TDV daha da kesin:

> "**Anadolu Selçuklu Devleti'nin yıkılmasından (1308) sonra İlhanlılar'a
> bağlandıysa da**…" — TDV, `erzurum`

### Düzeltme listesi — `data/yerlesimler.js` (uygulayan: entegrasyon)

Onaltı kayıtta tek işlem: `1281-01-01` başlangıçlı `ilhanli` dönemi **ikiye
bölünecek**, öncesi `selcuklu` olacak.

| Kayıt | lat/lon | Mevcut | Önerilen |
|---|---|---|---|
| Kırşehir | 39.146/34.164 | `ilhanli` 1281-01-01→1335-01-01 | `selcuklu` **1243-07-01**→1308-01-01 · `ilhanli` 1308-01-01→1335-01-01 |
| Osmancık | 40.980/34.800 | `ilhanli` 1281→1335 | aynı biçim |
| Çorum | 40.550/34.955 | `ilhanli` 1281→1335 | aynı biçim |
| Merzifon | 40.876/35.463 | `ilhanli` 1281→1335 | aynı biçim |
| Kayseri | 38.734/35.480 | `ilhanli` 1281→1335 | aynı biçim |
| Amasya | 40.650/35.833 | `ilhanli` 1281→1335 | aynı biçim |
| Ladik (Amasya) | 40.912/35.898 | `ilhanli` 1281→1335 | aynı biçim |
| Samsun | 41.286/36.331 | `ilhanli` 1281→1335 | aynı biçim |
| Tokat | 40.314/36.554 | `ilhanli` 1281→1335 | aynı biçim |
| Çarşamba | 41.199/36.727 | `ilhanli` 1281→1335 | aynı biçim |
| Niksar | 40.593/36.951 | `ilhanli` 1281→1335 | aynı biçim |
| Terme | 41.207/36.976 | `ilhanli` 1281→1335 | aynı biçim |
| Sivas | 39.750/37.015 | `ilhanli` 1281→1335 | aynı biçim |
| Kemah | 39.600/39.030 | `ilhanli` 1281→**1340** | `selcuklu` 1243-07-01→1308 · `ilhanli` 1308→1340 |
| Erzincan | 39.750/39.492 | `ilhanli` 1281→**1348** | `selcuklu` 1243-07-01→1308 · `ilhanli` 1308→1348 |
| Erzurum | 39.905/41.266 | `ilhanli` 1281→**1348** | `selcuklu` 1243-07-01→1308 · `ilhanli` 1308→1348 |

⚠️ **Bu düzeltme epok taşınmadan da yapılabilir ve yapılmalıdır.** `1243-07-01`
yerine bugünkü `1281-01-01` yazılırsa bile 1281-1308 arası düzelir; epok
geldiğinde tarih öne çekilir. **İki adım ayrılabilir.**

⚠️ **Değişmez 2 uyarısı:** bu değişiklik **1308-01-01'de 16 yeni kırılma** açar.
Konya, Niğde, Bartın, Safranbolu, Eflani zaten o gün kırılıyor ve maddesi var mı
kontrol edilmeli. Uygulanmadan önce `denetle.py` 2. denetimi koşturulmalı.

### 4.1 Bu düzeltmeye girmeyen, ama ölçülen iki şüphe

Ayrı oturum işi; **doğrulanmadan uygulanmasın**:

1. **Malatya ve Divriği `memluk` 1281→1399.** TDV `mesud-ii`, III. Keykubad'ın
   (1298-1302) "**Sivas, Malatya, Divriği** ve diğer yerlerde" zulmettiğini
   yazıyor — yani o tarihte Selçuklu idaresinde. Memlûk'ün Malatya'yı 1281'de
   elinde tuttuğu ayrıca doğrulanmalı.
2. **Erzurum'un 1348→1515 `akkoyunlu` zinciri.** TDV `erzurum` bambaşka bir dizi
   veriyor: Togaylılar 1336 · Şeyh Hasan 1340 · Eretna/Mutahharten 1360 ·
   Karakoyunlu 1385 · Timur 1387 · Karakoyunlu 1436 · **Akkoyunlu ancak 1467** ·
   Safevî 1502. Yüz yirmi yıllık fark var. Kapsam dışı, ama kayda geçti.

---

## 5. Kızılırmak bölünmesi haritada gösterilmeli mi — hayır

### 5.1 Önce tarih düzeltmesi: aralık 1256-1262 değil, **1259-1262**

Görev metni "1256-1262" diyor. Kaynak başka bir dizi veriyor:

| Tarih | Olay | Kaynak |
|---|---|---|
| 647-652 (1249-1254) | **Üçlü müşterek saltanat** — Karatay üç kardeşi birlikte sultan ilân etti, "üçü adına hutbe okutup para bastırdı". Toprak bölünmesi **yok** | `selcuklular` |
| 652 (1254) | Kılıcarslan Kayseri'de ayrı sultan ilân etti; ertesi yıl Ahmedhisarı'nda yenildi | `selcuklular` |
| 654 (1256) | Sultanhanı'nda Baycu, Keykâvus'u yendi | `selcuklular` |
| 4 Mart 1257 | Kılıcarslan Konya'da tahta çıkarıldı | `keykavus-ii` |
| **1 Mayıs 1257** | Keykâvus Konya'da tekrar tahtta | `keykavus-ii` |
| 656 (1258) | Keykâvus Malatya, Sivas, Tokat, Amasya'yı aldı; Kılıcarslan Erzincan'a çekildi | `keykavus-ii` |
| **657 (1259)** | **Mengü Han'ın yarlığı: "Kızılırmak'ın doğusunda kalan yerler Kılıcarslan'a ait olacaktı"** | `keykavus-ii` |
| **660 (1262)** | Keykâvus İstanbul'a kaçtı; "Böylece Selçuklu ülkesi Kılıcarslan'a kaldı" | `kilicarslan-iv` |

Yani coğrafî bölünme **üç yıl** sürüyor (1259-1262), altı yıl değil. 1256-1257
arası olan şey bölünme değil, **aynı tahtın el değiştirmesi**.

### 5.2 Neden çizilmemeli

**a) Kaynak sınırı çizmeye yetmiyor.** Tek cümle var: "Kızılırmak'ın doğusu".
Kızılırmak yay çizdiği için bu bir boylam değil. Ölçtüm — 34.5°D kesildiğinde:

```
BATI (22 nokta): … Sivrihisar 31.54 · Bartın 32.34 · Konya 32.49 · Kırşehir 34.16
DOĞU (29 nokta): Niğde 34.68 · Osmancık 34.80 · Çorum 34.95 · … Erzurum 41.27
```

**Kırşehir batıya, Niğde doğuya düşüyor** — ikisi de yanlış. Kırşehir nehrin
üstünde, Niğde ise Konya yörüngesinde ve nehrin güneybatısında. Doğru sınır ancak
şehir şehir karar verilerek çizilir ve o kararın kaynağı yok.

**b) İki taraf da tek devlet olarak muamele görüyor.** Bölünmeden hemen sonra
"iki sultan hediyelerle Tebriz'de Hülâgû'yu ziyaret ettiler", birlikte Suriye
seferine katıldılar, ve tâbilik vergisi **ikisine birden** 200.000 altın olarak
kesildi (TDV `keykavus-ii`). Bu iki devlet değil, **bir devletin yarlıkla ikiye
ayrılmış idaresi**.

**c) Emsal ters yönde ama daha zayıf.** Projede Osmanlı Fetret'i **çiziliyor** —
`renkler.py` 186-189: `suleyman-celebi` · `isa-celebi` · `mehmed-celebi` ·
`musa-celebi`. Emsal, hânedan içi bölünmenin çizilebileceğini gösteriyor.
Ama Fetret **on bir yıl** sürdü, her çelebi kendi sikkesini bastı ve rakip
sultanlar birbirleriyle savaştı. Selçuklu vakasında üç yıl, ortak sefer, ortak
vergi ve **dış otoritenin dayattığı** bir taksim var. Aynı sınıf değil.

**d) Bedeli 109 girişlik palette bir renk.** `selcuklu-dogu` yeni bir kimlik ve
DSATUR girdisi demek; hem de `selcuklu` ile **kesin sınırdaş** bir kimlik.

> ### 🔻 KARAR: çizilmesin. Kronolojiye **iki madde** yazılsın:
> - `1259-01-01` — Mengü Han'ın yarlığıyla ülke iki kardeş arasında bölündü,
>   Kızılırmak'ın doğusu IV. Kılıcarslan'a verildi
> - `1262-01-01` — II. İzzeddin Keykâvus Bizans'a sığındı, ülke tekrar tek elde
>   toplandı
>
> **Merkez yine de çizilmesini isterse:** kimlik `selcuklu-dogu`, rengi `selcuklu`
> #c2185b'nin **komşu tonu** olmalı (ayrı hue değil) — çünkü bu bir devlet değil,
> bir devletin yarısıdır. Sınırı ise şehir listesiyle verilmelidir, boylamla değil.

---

## 6. Selçuklu'nun sonu: 1308 — ve bu, Mesud'un ölümüdür

Görev "II. Mesud'un ölümü mü, 1308 mi" diye soruyor. **İkisi aynı olay:**

> "II. Mesud uzun süre hasta yattıktan sonra **708 (1308) yılında Kayseri'de
> vefat etti.** … Günümüze intikal etmiş olan son Anadolu Selçuklu sikkeleri de
> Sultan II. Mesud'a aittir." — TDV, `mesud-ii`

Ardılı tanınmadığı için sayılmıyor:

> "Onun ardından Kılıcarslan b. III. Keyhusrev gibi tahta çıkarılmış (710/1310)
> bir hânedan mensubu olsa bile ülke içinde ve Moğollar tarafından tanınmadığı
> için II. Mesud'un son hükümdar kabul edilmesi daha isabetli olur."

Makrîzî'nin verdiği 718 (1318) TDV tarafından **iki maddede birden** reddediliyor
(`selcuklular` ve `mesud-ii`): "Demirtaş'ın Selçuklu şehzadelerini öldürtmesiyle
ilgili olabileceği gibi yanlış bir tesbit de olabilir."

**Gün yok.** `§4` kuralı gereği `1308-01-01`. Mevcut veri (Konya, Niğde, Bartın,
Safranbolu, Eflani) zaten bu tarihi kullanıyor — **değişiklik gerekmiyor**.

⚠️ Küçük bir iç tutarsızlık: `selcuklular` maddesi ardılın 1308'de, `mesud-ii`
maddesi 710/1310'da tahta çıktığını yazıyor. Bizim için önemsiz — ikisi de
"tanınmadı" diyor.

⚠️ **695-697 (1296-1298) taht boş.** TDV hükümdar cetvelinde "Selçuklu tahtının
boş kaldığı dönem" satırı var. **Bu dönemde harita `selcuklu` kalmalıdır** —
devlet var, sultan yok. Hükümdar paneli boş görünecek; bu doğru davranıştır
(Osmanlı Fetret'i için de aynı çözüm kullanılıyor).

---

## 7. Epok taşınması: bugün yapılamaz — 864 kayıt

Merkezin "önce veri, sonra epok" kuralını **ölçtüm ve doğruluyorum**. Sayı da
tahminden biraz büyük çıktı:

```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi
# her kayitta en erken donem baslangici + kur: alani
```

| Ölçüm | Sayı |
|---|---|
| Motor girdisindeki toplam kayıt (`yerlesimler.js` + afrika + ortaasya2) | **934** |
| En erken dönemi tam olarak `1281-01-01` olan | **887** (%95) |
| 1281'den önce başlayan kayıt | **0** |
| Dönemi hiç olmayan | 22 |
| Epok 1243'e çekilirse **1243-1281 arası sahipsiz kalacak** | **864** |
| `kur:` alanı 1243 sonrası olduğu için meşru boş kalacak | 23 |

**Değişmez 1'in sahipsiz sayısı 34 → 898'e fırlar.** Merkezin "~900" tahmini
doğru. Bu sayı toplama ile değil, **Değişmez 1'in kendi yöntemiyle** ölçüldü:
mevcut 1300-1920 kesitlerine 1245-1280 arası sekiz kesit eklendi, `kur:` alanı
kesit tarihinden sonra olan kayıtlar muaf tutuldu.

```
bugunku sahipsiz (1300-1920 kesitleri): 34
epok 1243 olsaydi (1245-1280 kesitleri eklenince): 898   (artis 864)
```

Ayrıca bir nokta daha: 887 kaydın **885'i `s:`** (yabancı sahip), yalnız 2'si
`d:`. Yani 1281 damgası neredeyse tamamen "komşu devletlerin" tarafındadır —
Osmanlı tarafı zaten 1299'dan başlıyor.

### Kademe önerisi

| Adım | İş | Kimin | Epok |
|---|---|---|---|
| 1 | §4'ün 16 kaydı düzeltilir (1281 tarihiyle) | entegrasyon | 1281 kalır |
| 2 | Anadolu kutusundaki 228 kaydın 1243-1281 dönemi yazılır | Oturum 14 (beylikler) + bu oturum | 1281 kalır |
| 3 | Komşular (§8) 1243'e uzatılır | ayrı oturum | 1281 kalır |
| 4 | Geri kalan ~640 uzak kayıt için karar: uzatılsın mı, `kur:` mı yazılsın | merkez | 1281 kalır |
| 5 | **Epok 1243-07-01'e çekilir**, Değişmez 1 koşulur | entegrasyon | **1243** |

Adım 5 ancak adım 4 bittikten sonra. Aksi hâlde harita 38 yıl boyunca delik olur.

---

## 8. 3. maddeye avans: bu turda düşen iki doğrulanmış bulgu

3. madde (1243-1281 komşuları) sonraki döneme bırakıldı. Ama araştırma sırasında
iki şey kendiliğinden çıktı ve kaybolmasın diye yazıyorum. **İkisi de tek
kaynaklıdır, uygulanmadan önce ikinci kaynakla doğrulanmalıdır.**

### 8.1 🔴 Sinop 1259-1266 — ölçülmüş, veride YOK

> "Selçuklular devrinde Karadeniz'in en önemli limanı haline gelen Sinop'a göz
> diken **Trabzon Rum İmparatorluğu** … **burayı ele geçirmişti (657/1259)**.
> … Pervâne Selçuklu ordusuyla Sinop'u kuşattı ve uzun süren bir kuşatmadan
> sonra **şehir teslim oldu (664/1266)**." — TDV, `kilicarslan-iv`

Mevcut veri: `Sinop … s:[{f:"1281-01-01",t:"1322-01-01",d:"pervane"}, …]` —
1259-1266 arası Trabzon dönemi **hiç yok**. Epok 1243'e taşındığında bu yedi
yıllık pencere yazılmalı, yoksa yeni bir sessiz toprak değişimi doğar.

### 8.2 1240'ta Selçuklu'ya tâbi olan beş devlet

> "**Çukurova'daki Ermeni Krallığı, Halep Eyyûbî Melikliği, Artuklular, Trabzon
> Rum Devleti, İznik Bizans Devleti** bu dönemde Anadolu Selçuklu Devleti'ne
> tâbi oldu." — TDV, `selcuklular`

Görev metnindeki komşu listesinin (Trabzon, Kilikya, İznik, Gürcistan, Memlük,
Altın Orda, Kıbrıs) üçü burada zaten Selçuklu tâbii olarak geçiyor. 1243'ten
sonra bu tâbiliklerin ne olduğu **ayrı ayrı doğrulanmalı** — Kösedağ'dan sonra
Selçuklu'nun kendisi tâbi olduğu için bu ilişkilerin çözülmüş olması beklenir,
ama **varsayılmamalıdır**.

⚠️ Ayrıca §3.1'in sonucu burada da geçerli: bu beş devletin Selçuklu'ya tâbiliği
de `v:` ile yazılamaz. Şemada "X devletine tâbi" diye bir alan **yok**; yalnız
"Osmanlı'ya tâbi" var. Dünya kapsamına geçildiğinde bu, `MIMARI.md`'nin çözülmemiş
sorunlarına eklenmesi gereken **yapısal bir eksiktir** — Oturum 16'ya bildirilmeli.

---

## 9. TDV slug denetimi

Her slug `<title>` ile sınandı (`curl -s -L … | grep '<title>'`), 2026-07-30.

**CANLI (kullanıldı):**
`kosedag-savasi` · `selcuklular` · `ilhanlilar` · `mesud-ii` · `keykavus-ii` ·
`kilicarslan-iv` · `keyhusrev-ii` · `keyhusrev-iii` · `keykubad-iii` · `abaka` ·
`erzurum` · `karamanogullari` · `pervane`

**CANLI ama yönlendirme — içerik yok:**
`anadolu-selcuklulari` → sayfa açılıyor, gövdesi tek satır: *"bk. SELÇUKLULAR
[Anadolu]"*. Yani `<title>` testi geçiyor ama **madde metni yok.**
🔴 Bu, `CLAUDE.md` §4'teki ölü-slug tuzağının **ikinci türü**: başlık doğru
çıkıyor, içerik yok. Kaynak gösterilecek slug `selcuklular`'dır.

**ÖLÜ — bu tur ölçüldü:**
`izzeddin-keykavus-ii` (doğrusu `keykavus-ii`) · `rukneddin-kilicarslan-iv`
(doğrusu `kilicarslan-iv`) · `timurtas` · `demirtas` · `timurtas-b-colpan` ·
`muineddin-suleyman` · `muineddin-suleyman-pervane` · `suleyman-pervane` ·
`baycu` · `elbistan-savasi`

⚠️ **TDV'de İlhanlı valisi Timurtaş'ın müstakil maddesi yok.** `/timurtas-pasa`
diye bir madde var ama o **Osmanlı** Timurtaş Paşa'sıdır — karıştırılmamalı.
İlhanlı Timurtaş'a dair bilgi `ilhanlilar` maddesi içinde geçiyor.

⚠️ **`pervane` maddesi devlet değil, MAKAM maddesidir** (belge düzenleyen divan
görevlisi). Verideki `pervane` kimliği (Sinop 1281-1322) **Pervâneoğulları
beyliğidir**; ikisi karıştırılırsa yanlış kaynak gösterilir.

---

## 10. Özet — merkez oturuma dört cümle

1. **Çapa 26 Haziran değil, 1 Temmuz 1243.** İbn Bîbî; İbnü'l-Adîm 3 Temmuz der.
2. **`v:` kullanılamaz** — motor onu Osmanlı havuzuna yazıyor. Cevap
   `s:{d:"selcuklu"}`, 1243-07-01 → 1308-01-01. İlhanlı vesayeti kronolojide.
3. **Mevcut veride 16 Anadolu kaydı yanlış** — 1281'de İlhanlı gösteriliyor, TDV
   o şehirleri 1280'de II. Mesud'a verilmiş yazıyor. Liste §4'te, epok
   taşınmadan da uygulanabilir.
4. **Epok bugün taşınamaz:** 864 kayıt sahipsiz kalır, Değişmez 1 34 → 898.
   Kademe planı §7'de.

Ayrıca: Kızılırmak bölünmesi **1259-1262**'dir (1256 değil) ve çizilmemelidir;
sonu **1308**'dir ve o zaten Mesud'un ölümüdür; **yeni renk/kimlik gerekmiyor.**


---
---

# BÖLÜM II — Merkezin dört sorusu (2026-07-30, ikinci tur)

Girdi olarak `oturumlar/OTURUM-14-BEYLIKLER.md` okundu (commit 7e477a8) ve
Oturum 3'ün kimlik envanteri doğrulandı. Bölüm I'in kararları değişmedi;
bu bölüm onların üstüne bina ediliyor.

## 11. Ölçülmüş ön tespitler — üç iddia doğrulandı, iki tanesi çürüdü

| İddia | Kaynak | Ölçüm sonucu |
|---|---|---|
| 27 kimliğin 27'si `devletler.js`'te kayıtlı | merkez | ✅ **doğru** — 240 devlet kaydı; `selcuklu` 1075-1308, `ilhanli` 1256-1353, `karaman` 1256-1487, `lusignan` 1192-1489, `trabzon-rum` 1204-1461, `cobanogullari` 1211-1309 … hepsi var |
| `mogol-imparatorlugu` kimliği açılmalı | merkez | ⚠️ **kayıt zaten var** (1206-1260, Karakurum) **ama `harita:` alanı ve `renkler.py` girişi YOK** — bugün boyayamaz |
| Kıbrıs / Trabzon hayalet devlet riski | Oturum 14 | ✅ **risk yok** — `lusignan` #8a6ba0 ve `trabzon-rum` #00838f `renkler.py`'de mevcut, ömürleri de pencereyi kapsıyor |
| artuklu 56 yıl taşıyor | Oturum 3 | ✅ **doğru, yeri bulundu** — §14.2 |
| İnegöl ve Bilecik bugün sahipsiz | Oturum 14 | ❌ **eskimiş** — ikisi de `bizans` 1281→1299. Sahipsiz 34'ün tamamı çöl/Arabistan; listeyi §12.2'ye koydum |

## 12. (B) Kademe kararı — **maliyet yokuş değil, UÇURUM**

### 12.1 Ölçüm

Oturum 14 dört kademe öneriyor (1288 → 1277 → 1256 → 1243) ve maliyetin kademeli
arttığını varsayıyor. Ölçtüm — **öyle değil.** Değişmez 1'in kendi yöntemiyle,
her epok için üç yılda bir kesit alarak:

```
epok 1281 (bugun)        sahipsiz  34
epok 1288 (kademe A)     sahipsiz  34   (artis   0)
epok 1277 (kademe B)     sahipsiz 898   (artis 864)
epok 1256 (kademe C)     sahipsiz 898   (artis 864)
epok 1243 (kademe D)     sahipsiz 898   (artis 864)
```

**B, C ve D'nin maliyeti birbirinin aynı.** Sebep basit ve Bölüm I §7'de zaten
ölçülmüştü: **hiçbir kaydın 1281-01-01'den önce başlayan tek bir dönemi yok.**
Bu yüzden 1281'in bir gün öncesine inmekle 38 yıl öncesine inmek **aynı 864
kaydı** aynı anda sahipsiz bırakıyor.

> ### 🔻 Sonuç: kademeli iniş yanlış kurgu. Eşik tek: **1281.**
> 1277'ye inmek 1243'e inmekten **daha ucuz değil** — sadece daha az tarih
> kazandırıyor. Aynı 864 kayda dokunulacaksa 1243'e inmek **daha kârlı.**

### 12.2 Kademe A (1288) — katılmıyorum

Oturum 14'ün A kademesi epoku **ileriye** taşıyor (1281 → 1288) ve gerekçesi
*"İnegöl ve Bilecik'in bugünkü 1281-1299 sahipsizliği"*. **Ölçtüm: öyle bir
sahipsizlik yok.** Bugünkü 34 sahipsiz kaydın tamamı çöl ve Arabistan:

```
Agadez · Batı çölü (Mısır) · Buraydâ · Büyük Doğu Ergi · Darfur · Dir'iye ·
Fizan güneyi · Hadramut · Hoggar · Hâil · Karakum · Manama · Mukalla · Ndjamena ·
Necid içi · Nefud · Nûbe çölü · Ogaden · Riyad · Rub'ul Hâlî (2) · Sahra batısı ·
Sirte iç çölü · Somali çölü · Tamanrasset · Tibesti · Timbuktu · Uneyze · Uzboy ·
Üstyurt (2) · Şakrâ · Abu Dabi · Doha
```

İnegöl ve Bilecik ikisi de `s:[{f:"1281-01-01", t:"1299-01-01", d:"bizans"}]`
taşıyor. `CLAUDE.md` §3'teki sahipsizlik vakası **geçmiş zaman kipindedir**;
kapatılmış.

Dolayısıyla A kademesi bir hatayı düzeltmiyor; **883 Osmanlı dışı kaydın
zaman çizgisini 7 yıl kısaltıyor.** Bir Osmanlı sorununu bütün dünyanın
takvimini keserek çözmek olur.

### 12.3 Benim önerim: dört kademe değil, **iki**

| Kademe | Ne | Epok | Risk |
|---|---|---|---|
| **1 — şimdi** | Bölüm I §4'ün 16 kaydı + §14'ün hayalet düzeltmeleri, **bugünkü 1281 damgasıyla** | 1281 kalır | **sıfır** — mevcut hataları düzeltir, yeni pencere açmaz |
| **2 — 864 kayıt yazıldıktan sonra** | 1243-1281 katmanı **tek seferde**, sonra epok | **1243-07-01** | Değişmez 1 aynı gün temiz çıkmalı |

864 kaydın iş dağılımı ölçüldü — bu tablo doğrudan görev dağıtımıdır:

| Bölge | Kayıt | Kim |
|---|---|---|
| Anadolu kutusu (25-45°D, 35.5-42.5°K) | **222** | **13** (Selçuklu/İlhanlı) + 14 (beylikler) |
| Avrupa-Balkan-Akdeniz (<25°D) | **263** | 11 / 12 |
| İran-Irak-Kafkasya (38-64°D, 25-42°K) | **146** | 13 (§13.5) |
| Arabistan-Kızıldeniz | **99** | 4 |
| Diğer | **134** | — |

⚠️ **222'nin hepsi araştırma istemiyor.** 1281'de `bizans` olan 99 kayıt
(Bursa, İznik, İzmir, Balıkesir…) 1243'te de Bizans/İznik'tir; tek satırlık
geriye uzatma yeter. **Ama VARSAYILMAMALI** — merkezin kendi kuralı.

---

## 13. (A) 1243-1256 boşluğu — üç seçeneğin hiçbiri değil

### 13.1 Soru Anadolu için yanlış sorulmuş

Bölüm I §3'te karar verildi: **harita metbûyu boyamaz.** 1256-1308 arasında
İlhanlı Anadolu'nun metbûudur ve haritayı boyamıyor; 1243-1256 arasında Büyük
Moğol İmparatorluğu metbûdur ve **aynı sebeple boyamaz.**

Seçenek (a)'yı Anadolu için almak, kendi §3 kararımı bozar: metbûyu boyamaya
başlarsam 1256'dan sonra da `ilhanli` boyamam gerekir — ki bu seçenek (b)'nin
genelleştirilmiş hâlidir ve merkezin kendisi onu "tarihsel olarak yanlış"
diye eledi.

> ### 🔻 (A) Anadolu için cevap: **1243-07-01 → 1308-01-01 kesintisiz `selcuklu`.**
> 1256'da haritada hiçbir şey değişmez. Değişen metbûdur ve metbû kronolojide
> durur.

⚠️ Ama seçenek (c)'nin ifadesini **kabul etmiyorum.** "Selçuklu'yu tam
hükümran say" demiyorum. Diyorum ki: **şemamızın tâbiiyeti ifade edecek alanı
yok** (Bölüm I §8.2). Bu bir tarih iddiası değil, ölçülmüş bir şema eksiği.
Haritada Selçuklu'yu görüp "demek bağımsızdı" diyen kullanıcı yanılır — ve o
yanılgıyı düzeltecek yer kronoloji ile `devletler.js` özetidir.

### 13.2 Ama (a) GEREKLİ — Anadolu için değil, İran-Irak için

Merkezin sorusu Anadolu'yu soruyor; asıl problem başka yerde. Ölçtüm:

> **1281'de `ilhanli` olan 136 kaydın 98'i Anadolu dışındadır** — Tebriz'den
> Basra'ya, Merâga'dan Nîşâbur'a. Orada Moğollar **metbû değil, doğrudan
> hâkimdir.** Ve 1256'dan önce o doğrudan hâkimiyet Büyük Moğol
> İmparatorluğu'na aittir.

Yani `mogol-imparatorlugu` kimliği gerçekten gerekiyor — 1243-1256 arası
**Anadolu dışı** 98 kayıt için. Kayıt `devletler.js`'te zaten var (1206-1260,
Karakurum) ama **`harita:` alanı yok ve `renkler.py`'de rengi yok** →
bugün boyanamaz. **Oturum 3'ten `harita:"mogol-imparatorlugu"`, Oturum 16'dan
bir renk istenmeli.**

### 13.3 🔴 Ve iş 98 kayıtla bitmiyor — İran-Irak 1243-1256 Moğol da değil

Epok 1243'e inerse İran-Irak'ın o 13 yılı **üçe** ayrılır. TDV `hulagu`
gün hassasiyetinde veriyor:

| Tarih | Olay | Haritaya etkisi |
|---|---|---|
| Mayıs 1253 | Öncü birlikler İsmâilîler üzerine hareket | — |
| **19 Kasım 1256** | Rükneddin Hûrşah **Alamut'ta** teslim oldu | İsmâilî kaleleri → Moğol |
| **10 Şubat 1258** (4 Safer 656) | Halife **Müsta'sım kayıtsız şartsız teslim oldu**, Bağdat yağmalandı | **Bağdat Abbâsî'den çıkar** |

Yani 1243-1258 arasında **Bağdat Abbâsî halifeliğindedir.** Bugünkü veri
Bağdat'ı 1281'den itibaren `iran` gösteriyor (CLAUDE.md §3.5'in bilinen
"İran hayaleti" vakası) — epok inince bu kayıt üç ayrı sahip ister.

**Bu, kapsam olarak Selçuklu görevinden büyük ve ayrı bir iştir.** Epok
kararında hesaba katılmalı: 1243'e inmek yalnız Anadolu'yu değil,
**Abbâsî halifeliğinin son 15 yılını da** haritaya sokar.

### 13.4 Özet — (A)'nın cevabı üç parça

1. **Anadolu:** `selcuklu`, 1243-07-01 → 1308-01-01, kesintisiz. Seçenek (c),
   ama gerekçesi "hükümran sayıyoruz" değil, "harita metbû boyamaz".
2. **İran-Irak-Horasan (98 kayıt):** seçenek (a) — `mogol-imparatorlugu`
   gerekli, ve kimliğin `harita:` + renk eksiği kapatılmalı.
3. **Bağdat ve Irak-ı Arab:** ikisi de değil — **`abbasi`**, 10 Şubat 1258'e
   kadar. Ayrı görev.

---

## 14. (C+D) Dokuz çekişmeli toprak — benim tarafım

Oturum 14'ün §7 tablosundaki sekiz maddenin Selçuklu/İlhanlı/Latin tarafını
yazıyorum. Her biri TDV'den doğrulandı; slug'lar §15'te.

### 14.1 Madde madde

**1 · Konya 1277 — Cimri Vak'ası. Gün hassasiyetinde ölçüldü.**
TDV `selcuklular`: Karamanoğlu Mehmed Bey **9 Zilhicce 675 (14 Mayıs 1277)**
Konya'yı ele geçirdi, **ertesi gün** Cimri'yi (Alâeddin Siyavuş) tahta oturttu;
Mehmed Bey **17 Muharrem 676 (20 Haziran 1277)**, Siyavuş **17 Muharrem 678
(30 Mayıs 1279)** öldürüldü.
→ **Öneri:** Konya `karaman` **1277-05-14 → 1277-06-20** (beş hafta), öncesi ve
sonrası `selcuklu`. Bu atlasın gün çözünürlüğüne uygundur (Tebriz'in dokuz
günlük 1514 penceresi emsal).
⚠️ Ayrıca bugünkü Konya zincirinde **13 yıllık hayalet var**: `ilhanli`
1308→1366, ama `ilhanli` 1353'te bitiyor. TDV `konya`: Alâeddin Bey Konya'yı
**Eretnalılar'dan** aldı (768/1366-67). Aradaki dönem `eretna` olmalı.
Aynı hata **Niğde**'de de var (§14.2).

**2 · Lârende (Karaman) 1286 · 3 · Beyşehir 1288 — kabul, öncesi `selcuklu`.**
Beyşehir bugün `esrefogullari` 1281→1326-10-09 taşıyor; TDV `esrefogullari`
merkezin 1288'de Beyşehir'e taşındığını söylüyor → **1281-1288 arası
`selcuklu` olmalı.**

**4 · Kütahya — düzeltme GEREKMİYOR, mevcut veri doğru.**
TDV `kutahya`: *"699 (1300) tarihli bir kitâbe bu yıllarda Germiyanlılar'ın
**Selçuklu hâkimiyetini tanıdıklarını** gösterir. Kütahya merkez olmak üzere
Germiyan Beyliği'nin **1300'de** kurulduğu anlaşılmaktadır."* 1277 iktâsı
mülkiyet devri değil; 1285-1291 arası şehir Germiyan ile II. Mesud arasında
gidip geliyor. Bugünkü veri (`selcuklu` 1281→1300, `germiyan` 1300→1381)
kaynağın tam karşılığıdır. **Dokunulmasın.**

**5 · Afyonkarahisar — kayıt var, adı farklı.**
`Karahisâr-ı Sâhib (Afyon)` (38.76/30.54) `sahibata` 1281→1341 taşıyor.
`sahibata` ömrü 1275-1341, taşma yok. TDV `afyonkarahisar` 1341'de
Germiyan'a geçtiğini doğruluyor. **Pencere içi düzeltme gerekmiyor**;
1243-1275 arası `selcuklu` yazılmalı.

**6 · Eflani 1292 — kabul, ama sınıfı işaretliyorum.**
TDV `candarogullari`: *"Şemseddin Yaman Candar'a **İlhanlı Hükümdarı Geyhatu
tarafından** Eflani ve civarı **iktâ olarak verildi**"*; Geyhatu 1291-1295.
Madde yıl vermiyor; `anadolu-beylikleri` tablosu 1292 diyor → `1292-01-01`
kabul edilebilir, **ama aralık 1291-1295 olarak işaretlenmeli.**
⚠️ Bu bir **fetih değil iktâ**dır: toprak İlhanlı'nın verdiğidir, kimse
kimseden almamıştır. Yine de proje bütün uc beyliklerini ayrı boyadığı için
tutarlılık adına `candar` boyanmalı.
Bugünkü veri: `selcuklu` 1281→1308, `ilhanli` 1308→1309, `candar` 1309→…
→ **Öneri:** `selcuklu` → 1292-01-01, `candar` 1292-01-01 → … Bir yıllık
`ilhanli` sıçraması (1308-1309) kaldırılmalı.

**7 · Sinop — dört dönem, üçü veride yok.**
TDV `kilicarslan-iv`: Trabzon Rum İmparatorluğu Sinop'u **657/1259**'da aldı;
Pervâne **664/1266**'da geri aldı ve temliknâme ile şahsî mülk edindi;
oğlu 676/1277'de beyliği kurdu.
→ **Öneri:** `selcuklu` 1243→1259 · `trabzon-rum` 1259→1266 ·
`selcuklu` 1266→1277 · `pervane` 1277→1322.
Bugünkü veri yalnız sonuncusunu (1281'den) taşıyor.

**8 · Alâiye — 🔴 Oturum 14'ün tespiti YANLIŞ, Kıbrıs bu pencerede yok.**
Oturum 14: *"1243-1293 arası Kıbrıs Krallığı'na bağlıydı."* TDV `alanya`
bunun tersini söylüyor:
> *"**Kıbrıs Krallığı'na bağlı iken 1221 yılında I. Alâeddin Keykubad
> tarafından fethedilmiş** … **1293'te Karamanoğlu Mecdüddin Mahmud Bey
> Alâiye'yi ele geçirerek** Mısır Sultanı Melik Eşref adına hutbe okutmuştur."*

Kıbrıs şehri **1221'de** kaybetti, 1243'te değil. Yani 1243-1293 arası Alâiye
**Selçuklu'dur** ve pencerede **Latin hâkimiyeti yoktur.**
→ **İki sonuç:** (i) Oturum 14'ün "Kıbrıs hayalet devlet riski" **düşüyor**;
(ii) bugünkü veri de yanlış — Alanya `karaman` 1281→1293 taşıyor, oysa
**1281-1293 arası `selcuklu`, 1293'ten sonra `karaman`** olmalı. Veri tam
ters yönde.
⚠️ Ayrı bir `alaiye` kimliği (1293-1471) de sorgulanmalı: TDV 1293'te
Karamanoğlu Mahmud Bey'i, 1333'te Karamanoğlu Yûsuf Bey'i gösteriyor.
Oturum 14 haklı — **Alâiye Karaman'ın koludur.** Ama bu pencere dışı, ayrı iş.

**9 · Tralleis/Aydın 1282 — Oturum 14'ün tek taraflı işi.** İtirazım yok;
bugünkü Aydın kaydı `bizans` 1281→1308 taşıyor, 1282'de kesilmeli.

### 14.2 🔴 (D) Hayalet devlet taraması — iki gerçek bulgu

Bütün Anadolu kimlikleri `devletler.js` ömürleriyle karşılaştırıldı
(`§3.5` denetimi, henüz araca girmemiş olanı elle koşturuldu):

| Kimlik | Devlet ömrü | Taşan kayıt | Taşma |
|---|---|---|---|
| **`artuklu`** | 1102-**1409** | Harput (Elazığ) · Çemişgezek · Palu, üçü de `1281-01-01..1465-01-01` | **56 yıl** |
| **`ilhanli`** | 1256-**1353** | Konya · Niğde, `1308-01-01..1366-01-01` | **13 yıl** |

**`artuklu` — Oturum 3'ün 56 yılı bulundu, ama asıl hata çok daha büyük.**
TDV `harput`:
> *"**1234'e kadar Artuklular'ın elinde kalan şehir bu tarihte Anadolu
> Selçukluları** … tarafından zaptedildi … **1465'te Uzun Hasan şehri kesin
> biçimde Akkoyunlular'a kattı.**"*

Yani Harput 1234'te Artuklu olmaktan çıkmış. Veri onu **1281'den 1465'e kadar**
Artuklu gösteriyor — hata 56 yıl değil, **231 yıl.** 1465 tarihi doğru ama
sahibi yanlış: o tarih **Akkoyunlu'nun** alış tarihi.
Ayrıca TDV `selcuklular`, Abaka'nın 1280'de **Harput'u** II. Mesud'a verdiğini
yazıyor → 1281'de Harput **Selçuklu'dur.**
→ **Öneri:** üç kayıtta da `selcuklu` 1243-07-01 → 1308-01-01, sonrası ayrı
araştırma (`ilhanli` → Dulkadir/Karakoyunlu/Akkoyunlu, TDV dizisi mevcut).
`devletler.js`'in `artuklular` kronolojisi bunu zaten söylüyor:
*"1234 — Harput kolu Anadolu Selçuklularına geçti."* **Kendi kataloğumuzla
kendi haritamız çelişiyor.**

**`ilhanli` — Konya ve Niğde'de 13 yıllık hayalet.** §14.1'de anlatıldı;
doğru sahip `eretna` (1335-1381).

### 14.3 🔴 Yeni bulgu: eksik kimlik — Mengücüklüler

Oturum 14, 1243'te yaşayan iki beylikten birinin **Divriği Mengücüklüleri**
olduğunu ölçtü (slug `mengucukluler` ✓ CANLI). Kontrol ettim:

> **`mengucuk` kimliği `devletler.js`'te YOK, `renkler.py`'de rengi YOK.**
> Bugünkü veride **Divriği** `memluk` 1281→1399 taşıyor.

Ayrıca TDV `mesud-ii`, III. Keykubad'ın (1298-1302) **"Sivas, Malatya, Divriği
ve diğer yerlerde"** zulmettiğini yazıyor — yani 1300 civarında Divriği
Selçuklu idaresinde. Divriği'nin 1281'de Memlûk olması **ayrıca şüpheli**
(Bölüm I §4.1'de Malatya ile birlikte işaretlenmişti; şimdi ikinci bir kaynak
aynı yöne işaret ediyor).
→ **Oturum 3'ten `mengucuk` devlet kaydı, Oturum 16'dan renk istenmeli.**

### 14.4 Bu turda ölçülen kimlik/renk ihtiyacı — toplam

| Kimlik | `devletler.js` | `renkler.py` | Ne için |
|---|---|---|---|
| `selcuklu` | ✅ 1075-1308 | ✅ #c2185b | Anadolu 1243-1308 |
| `ilhanli` | ✅ 1256-1353 | ✅ #7a5ba0 | İran-Irak 1256+ |
| `trabzon-rum` | ✅ 1204-1461 | ✅ #00838f | Sinop 1259-1266 |
| `lusignan` | ✅ 1192-1489 | ✅ #8a6ba0 | *pencerede gerekmiyor* (§14.1/8) |
| `mogol-imparatorlugu` | ✅ 1206-1260 | ❌ **yok** (`harita:` alanı da yok) | İran-Irak 1243-1256, 98 kayıt |
| `abbasi` | ? | ? | Bağdat 1243-1258 |
| `mengucuk` | ❌ **yok** | ❌ **yok** | Divriği 1243-~1277 |

**Yani yeni renk ihtiyacı üç kimlik: `mogol-imparatorlugu`, `mengucuk`,
`abbasi`.** Bölüm I §0'daki "yeni renk gerekmiyor" hükmü **yalnız Anadolu
için** geçerliydi ve öyle kalıyor; İran-Irak katmanı açılırsa üç renk gerekir.

---

## 15. Slug denetimi — ikinci tur

Hepsi `<title>` ile sınandı, 2026-07-30.

**Bu turda CANLI ve kullanıldı:** `alanya` · `harput` · `artuklular` ·
`candarogullari` · `konya` · `kutahya` · `hulagu` · `bagdat` · `abbasiler` ·
`alamut` · `karamanogullari`

**Bu turda ÖLÜ ölçüldü:** `baycu` · `elbistan-savasi` · `timurtas` ·
`demirtas` · `timurtas-b-colpan` · `muineddin-suleyman(-pervane)` ·
`suleyman-pervane` · `izzeddin-keykavus-ii` · `rukneddin-kilicarslan-iv`

Oturum 14'ün beş ölü slug'ını (`mentesogullari` · `eretna` · `beylikler` ·
`cimri` · `ermenek`) ayrıca sınamadım; onların ölçümü kendi raporunda
yöntemiyle birlikte veriliyor ve yöntem doğru.

---

## 16. Merkeze özet — beş cümle

1. **(A)** Anadolu 1243-1308 kesintisiz `selcuklu`; 1256'da haritada hiçbir şey
   değişmez, çünkü **harita metbû boyamaz** (Bölüm I §3'ün zorunlu sonucu).
   Ama `mogol-imparatorlugu` **gerçekten gerekli** — Anadolu için değil,
   İran-Irak'taki **98 kayıt** için; ve Bağdat 10 Şubat 1258'e kadar
   **Abbâsî'dir.**
2. **(B)** Kademe kurgusu ölçümle çürüdü: **1277, 1256 ve 1243'ün maliyeti
   birbirinin aynı (864 kayıt)**, çünkü hiçbir kaydın 1281 öncesi dönemi yok.
   Eşik tek ve 1281'de. Aynı işe girilecekse **doğrudan 1243** daha kârlı.
   Kademe A'ya (1288) katılmıyorum — dayandığı sahipsizlik **kapatılmış**.
3. **(C)** Sekiz çekişmeli toprağın tarafımı yazdım. **Kütahya'da düzeltme
   gerekmiyor** (mevcut veri kaynağın tam karşılığı). **Alâiye'de Oturum 14
   yanılmış** — Kıbrıs şehri 1221'de kaybetti, pencerede Latin hâkimiyeti yok;
   üstelik bugünkü veri de ters (`karaman` 1281→1293 olmalıydı `selcuklu`).
4. **(D)** Kıbrıs ve Trabzon hayalet riski **yok** (ikisinin de rengi var).
   Buna karşılık **iki gerçek hayalet bulundu:** `artuklu` Harput-Çemişgezek-Palu'da
   56 yıl (asıl hata 231 yıl), `ilhanli` Konya-Niğde'de 13 yıl. Ve **`mengucuk`
   kimliği hiç yok** — 1243'te yaşayan iki beylikten biri.
5. **Epok damgası uyarınızı uyguladım:** bu raporda önerilen hiçbir tarih
   uydurulmadı. Gün bilinmeyende `YYYY-01-01`, kaynak çelişiyorsa aralık
   (Eflani 1291-1295) yazıldı. Gün hassasiyetinde olanlar yalnız kaynakta gün
   geçenlerdir: **1277-05-14 · 1277-06-20 · 1279-05-30 · 1256-11-19 ·
   1258-02-10 · 1277-04-15.**

---

# BÖLÜM III — EPOK MALİYETİNİN KİMLİK BOYUTU

> Merkez 3. maddeyi *"açık kalan iki karar sende"* diye tekrar sordu:
> (A) 1243-1256 boşluğu, (B) kademe kararı. **İkisi de bu dosyada zaten
> cevaplanmıştı** — (B) §12'de, (A) §13'te. Bu bölüm o kararları değiştirmiyor;
> **§12.3'ün eksik bıraktığı boyutu** ölçüyor ve bir rakamını düzeltiyor.

## 17. §12'nin sonucu doğrulandı, sayısı düzeltildi

§12.1 "B, C ve D'nin maliyeti birbirinin aynı" demişti ve `sahipsiz 898`
yazmıştı. **Sonuç doğru, sayı yanlış.** Bugün yeniden ölçüldü (Değişmez 1'in
kendi yöntemi, `kur:` muafiyetiyle):

| Epok | Sahipsiz kayıt | `kur:` ile muaf |
|---|---|---|
| **1243-07-01** | **736** | 31 |
| 1256-06-15 | **736** | 31 |
| 1277-06-15 | **736** | 31 |
| 1281-06-15 | 35 | 31 |

✅ **§12'nin asıl iddiası tam olarak doğrulanıyor:** üç epok da **birebir aynı
736**'yı veriyor. Kademeli iniş diye bir şey yok; eşik tek ve **1281**'dedir.

🔴 **Ama `898` bir kayıt sayısı olamaz** — dosyada toplam **767** yerleşim var.
O sayı büyük ihtimalle kayıt×kesit çifti sayıyordu. §12.1'in tablosu bu yüzden
**736** ile okunmalı. (Toplam da değişti: `CLAUDE.md` 764 diyor, bugün 767 —
başka oturumlar nokta eklemiş.)

## 18. §12.3'ün ölçmediği boyut: **kimlik**

§12.3 864 kaydı **bölgeye** göre dağıttı (Anadolu 222 · Avrupa 263 · İran-Irak
146 …). Eksik olan soru şu: *o kaydın 1281'deki sahibi 1243'te var mıydı?*

İlk dönemi tam `1281-01-01` olan **721** kayıt, 1281'deki sahibine göre üçe
ayrılıyor:

| Sınıf | Kayıt | Kimlik | Ne gerekiyor |
|---|---|---|---|
| **A** — sahibi 1243'te **henüz kurulmamış** | **290** | 25 | kuruluşa kadar **ayrı bir sahip** — araştırma |
| **B** — sahibi `devletler.js`'te **hiç yok** | **118** | 12 | önce katalog kaydı, sonra epok |
| **C** — sahibi 1243'te yaşıyor | **313** | — | **tek satırlık geriye uzatma** |

⚠️ §12.3'te *"222'nin hepsi araştırma istemiyor, 1281'de `bizans` olan 99 kayda
tek satır yeter"* demiştim. **Doğru ama eksik.** C sınıfının 313 kaydı gerçekten
tek satırlık; ama **A + B = 408 kayıt**, yani etkilenenlerin **%57'si** yeni
araştırma istiyor. Epok kararının gerçek fiyatı budur.

### 18.1 A sınıfı — en büyük iki blok

```
ilhanli 136 · memluk 48 · napoli 16 · lehistan 12 · bogdan 11 · umman 8 ·
kirim 7 · ispanya 7 · rusya 7 · mentese 6 · karaman 5 · fas 5 · adal 3 ·
habesistan 3 · eflak 2 · toskana 2 · isvec 2 · danimarka 2 · esrefogullari 2 ·
ahiler 1 · inancogullari 1 · pervane 1 · katalan 1 · somali 1 · sahibata 1
```

**1. `ilhanli` — 136 kayıt.** İlhanlı 1256'da kuruluyor; epok inince bu 136 kayıt
13 yıllık bir başka sahip ister. **Cevabı §13.4 zaten verdi:** Anadolu →
`selcuklu` · İran-Irak-Horasan 98 → `mogol-imparatorlugu` · Bağdat → `abbasi`.

**2. `memluk` — 48 kayıt. 🔴 §13.4'te ATLANMIŞ.** Memlükler **1250**'de kuruluyor
(`devletler.js`: `1250-01-01`). 1243-1250 arasında Mısır ve Suriye **Eyyûbî**dir.
Ve **`eyyubi` katalogda yoktur** (parça eşleşmeyle arandı: `Eyyub`, `Eyyûb` →
kayıt yok).

> ### 🔻 §13.4'e dördüncü parça
> **4. Mısır-Suriye (48 kayıt): `eyyubi`, 1250'ye kadar.**
> Kimlik `devletler.js`'te yok — açılmalı (Oturum 3), `harita:` alanı ve
> `renkler.py` rengi ile birlikte (Oturum 16).

Geri kalan A kimliklerinin çoğu **beylikler ve Avrupa** — Oturum 14 ve 11/12'nin
alanı. `mentese` (1280) · `karaman` (1256) · `esrefogullari` (1277) ·
`pervane` (1277) · `inancogullari` (1261) · `sahibata` (1275) · `ahiler` (1290):
yedisi de Kösedağ sonrası kuruluyor, yani **1243'te Anadolu'da Selçuklu'dan
başka boyanacak bir şey yok** — bu, §13.1'in kararını bağımsız olarak doğruluyor.

### 18.2 🔴 B sınıfı epok kararını BEKLEMEZ — bugünün hatası

```
iran 47 · ceneviz 18 · bulgaristan 15 · yemen 9 · sirbistan 8 · lusignan 6 ·
atinadukaligi 4 · avusturya 4 · bosna 3 · arnavutluk 2 · milanoduka 1 · sardinya 1
```

Bu 12 kimlik **haritada bugün kullanılıyor** ama `devletler.js`'te karşılığı yok.
Yani kullanıcı dizin penceresinde o devleti aradığında bulamıyor, ama haritada
rengini görüyor. **Epok hiç inmese de bu bir eksiktir.**

`iran` 47 kayıtla en büyüğü ve `CLAUDE.md §3.5`'in adıyla andığı **"İran
hayaleti"nin ta kendisi**: katalogda kaydı olmayan, ömrü denetlenemeyen, bu
yüzden Safevî'nin coğrafyasını ikiye bölen kimlik. Onu düzeltmek epok işi değil,
**bugünkü işidir.** → Oturum 3.

⚠️ `avusturya` ve `ceneviz` gibi isimlerin katalogda olmaması şaşırtıcı; başka
bir adla durup durmadıkları **parça eşleşmeyle arandı** (`Avust`, `Cenev`,
`Ceneviz`) — yok. Yanlış negatif değil.

## 19. Ölçüm ve bir tuzak

Betik: `scratchpad/epok1243.js` (kaynağı `OTURUM-13-OLCUM-ARACLARI.md`'ye
alınmadı; tek kullanımlık).

🔴 **Tuzak — üç haneli yıl.** İlk koşuda `bizans` (`330-05-11`), `venedik`
(`697-01-01`), `almanya` (`962-02-02`), `papalik` (`756-01-01`) ve `nube`
(`543-01-01`) *"1243'te henüz kurulmamış"* çıktı. Sebep: **tarihler dizgi olarak
karşılaştırılıyor** ve `"330-05-11" > "1243-07-01"` doğrudur (`'3' > '1'`).
Beş devlet yanlışlıkla A sınıfına düşmüştü.

> Bu depodaki bütün tarih karşılaştırmaları dizgi tabanlıdır ve **1000'den küçük
> yıl taşıyan her kayıtta sessizce ters çalışır.** Bugün yalnız `devletler.js`'te
> var (yerleşimlerin hepsi 1281+), ama kapsam MÖ 12000'e inecek —
> `YOL-HARITASI.md`'nin ufku. **Epok tartışmasından bağımsız, yapısal bir borç.**
> Düzeltmesi tek satır: yılı 4 haneye tamamla, sonra karşılaştır.

## 20. Merkeze — 3. maddenin durumu

1. **(A) ve (B) kararları açık değil, verilmiş durumda** — §12 ve §13. Bu bölüm
   onları değiştirmiyor, doğruluyor.
2. **(B)'nin cevabı:** kademe yok, tek eşik 1281. Üç epok da aynı **736**
   sahipsizi veriyor. §12.1'deki `898` yanlış sayıdır, `736` ile okunmalı.
3. **(A)'nın cevabı dört parça oldu:** Anadolu `selcuklu` · İran-Irak
   `mogol-imparatorlugu` · Bağdat `abbasi` · **Mısır-Suriye `eyyubi`** (yeni).
4. **Epokun gerçek fiyatı:** 408 kayıt araştırma, 313 kayıt tek satır.
5. **Epoktan bağımsız açılması gereken üç kimlik:** `abbasi` · `eyyubi` ·
   `mengucuk` (§14.3) — ve `mogol-imparatorlugu`'nun `harita:` + rengi.
   Ayrıca B sınıfının 12 kimliği, başta **`iran`**.

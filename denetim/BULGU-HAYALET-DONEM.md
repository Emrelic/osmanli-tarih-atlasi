# BULGU — DEĞİŞMEZ 4: HAYALET DÖNEM

**OPUS HAZIR KITA 87** · 24 Ağustos 2026 · OSMANGAZİ sevkiyle
Teslim: bu rapor + `data/yer_yama_hayalet.js` (`window.YER_YAMA_HAYALET`, 129 kayıt)
**Hiçbir veri dosyasına yazılmadı.** `data/yerlesimler*.js` · `arac/*` · `js/app.js` koordinatörde.

---

## 0. İKİ SATIR — ölçüm ile çıkarım ayrı

> **① NE ÖLÇTÜM.** `py arac/denetle.py` → *"Değişmez 4 ✓ **129** hayalet dönem
> (beklenen 136)"*. Sayı kendi koşumda doğrulandı, koordinatörden devralınmadı.
> Aynı ölçütü `js/app.js:70 devletAdi()` ile birebir aynı kuralla kurup ekrana
> uyguladım: **247 dönem, künyesinin ömrü dışında bir adla gösteriliyor.**
>
> **② ONDAN NE ÇIKARDIM.** `129` bir *tavan* değil bir **pencere**. Değişmez 4
> kusurun **%52'sini** görüyor; kalan 118 kayıt tavanın *dışında* — tavan sıfıra
> indirilse bile görünmezler. Ve 129'un **78'i araştırma işi değil**: aranan doğru
> künye `devletler.js`'te **zaten var**.

---

## 1. Ölçümün nasıl çıkarıldığı

Kendi ayrıştırıcımı yazmadım (`§11`: *veri zaten bir dilde yazılıysa o dilin
yorumlayıcısını çağır*). `denetle.py`'nin kendi `degismez4()` fonksiyonunu ve
`girdi.py`'nin kendi yükleyicisini çağırdım; `devletler.js` `node` ile okundu.

| ölçüm | değer |
|---|---|
| yerleşim (girdi.py'nin okuduğu) | 2606 |
| Değişmez 4 — hayalet dönem | **129** (tavan 136) |
| aracın kendi uyarısı | *"TAVAN GEVŞEK — BEKLENEN_HAYALET = 129 yapılmalı, aradaki 7 puanlık gerçek regresyon GÖRÜNMEZ"* |
| `kunyesiz` kovası (ölçülemedi) | 935 dönem |
| ekranda yanlış adla gösterilen dönem | **247** |

### 129 → dokuz kimlik

```
iran        50   en büyük 544,7 yıl      norvec   24   433,3
macaristan  20   392,2                   rusya    12     4,0
irlanda     10   319,7                   lehistan  9    68,9
fransa       2    24,2                   isvec     1   161,9
gurcistan    1   117,2
```

---

## 2. 🔴 ASIL BULGU — Değişmez 4 kusurun yarısını GÖRMÜYOR

`denetle.py:1279` sözlüğü **yalnız `id:`** ile kuruyor:
`{d["id"]: (d.get("f"), d.get("t"))}`. Oysa veri `d:` alanına çoğu zaman **boya
anahtarını** yazıyor ve o anahtarın `id:` karşılığı yok ⇒ kayıt `kunyesiz`
kovasına düşüyor ve **hiç ölçülmüyor**. Kova bugün **935 dönem** taşıyor.

`§11`'in kendi cümlesi: *ölçemediğini eleyen bir süzgeç, onu temiz sayar.*

**Ölçüm** (`app.js:70` ile birebir aynı kural: `id` ∪ `harita`, ilk yazan kazanır):

```
EKRANDA künyesinin ömrü DIŞINDA bir adla gösterilen dönem : 247
    Değişmez 4'ün gördüğü                                 : 129
    HİÇ GÖRÜLMEYEN                                        : 118
        bulgaristan 42 · sirbistan 36 · suud 26 · arnavutluk 13 · sardinya 1
```

Görünmeyenler, `§3.5`'in *"kullanıcının EKRANDA gördüğü"* cinsinden:

| yerleşim | dönem | ekranda yazan | o künyenin ömrü |
|---|---|---|---|
| Saraybosna | 1918-11-11 → 1923 | **Sırbistan Krallığı (Nemanjić Hanedanı)** | 1217–1402 |
| Mustafapaşa | 1913-09-29 → 1923 | **İkinci Bulgar İmparatorluğu** | 1185–1396 |
| Hâil | 1921-11-02 → 1923 | **I. Suûdî Devleti (Vehhâbî Emirliği)** | 1744–1818 |
| İşkodra | 1913-04-23 → 1923 | **Arnavutluk (Kastriota Direnişi)** | 1443–1479 |

**Tek sebep:** `devletAdi()` **zaman körü** — bir anahtar → tek ad, tarihe bakmadan.
454 boya anahtarının **6'sı** birden çok künye tarafından paylaşılıyor ve o altısı
247 kaydın tamamını üretiyor.

📌 Bu, `§3.5`'in Batnoz/İbrim vakalarının **ad ekseni**: orada *var olmayan devlet
boyanıyordu*, burada **var olan devlet yanlış adla anılıyor** — ve ikincisi denetime
görünmüyor.

---

## 3. 🔴 İKİ UÇ — re-point tek başına yapılırsa HARİTA DELİĞİ açar

`uret_petek.py:596` boya anahtarı olarak `d:` alanının **ham değerini** kullanıyor,
`:3732` gövdeleri **`BOYALAR` üzerinde dönerek** üretiyor. Yani `BOYALAR`'da
olmayan bir kimliğe işaret etmek = **o gövde hiç çizilmez** (`§8` harita deliği).

```
🟢 RENGİ VAR — güvenli hedef
   irlanda-serbest-devlet · sovyet-rusya · litvanya-buyuk-dukalik ·
   fransa-cumhuriyet · gurcistan-demokratik-cumhuriyeti · galzay · afsar ·
   turkmen · akkoyunlu · karakoyunlu · celayirli · serbedariler · kert ·
   muzafferi · timurlu · incu · gilan-kiya · mazenderan-marasi ·
   lur-i-buzurg · lur-i-kucek · ilhanli

🔴 RENGİ YOK — ÖNCE RENK, sonra veri   (55 öneri parçası bunlara bağlı)
   norvec-kralligi (24 kayıt) · macaristan-naiplik (20) · sirvansah (10) ·
   isvec-birlik-oncesi (1)
```

⚠️ `macaristan-naiplik` künyesinde `harita:"macaristan"` **var** — ama motor
künyenin `harita:` alanını **okumuyor**, `d:`nin ham değerine bakıyor. Yani
"künyede harita alanı var" **boyanacak demek değil.** Bu ailede iki çare var ve
hangisinin doğru olduğu koordinatörün kararı:

| çare | ne yapar | kimin dosyası |
|---|---|---|
| **(A)** veride kimliği özel künyeye çevir | ad **ve** denetim düzelir, **renk gerekir** | veri (koordinatör) |
| **(B)** `devletAdi(id, gün)` — zamanlı ad | 247'nin **tamamını** düzeltir, renk gerekmez, **denetim yine kırmızı kalır** | `js/app.js` (koordinatör) |

📌 İkisi birbirinin alternatifi değil: **(B) ekranı**, **(A) veriyi** düzeltir.
`bulgaristan · sirbistan · suud · arnavutluk` ailesi için (B) tek başına yeter;
`iran · norvec · irlanda · lehistan` ailesi için (A) şart.

---

## 4. ÖNERİLER — `data/yer_yama_hayalet.js`

**129 kayıt · 80 KESİN · 40 GEREKÇELİ · 9 BULUNAMADI.**

### 4.1 Sınır garantisi — bu yama bir sınırı KAYDIRMAZ

Her önerinin **ilk parçasının `f`'i** ve **son parçasının `t`'si** mevcut dönemin
`f`/`t`'siyle **aynıdır**; üreteç bunu doğruluyor (`doğrulama hatası: 0`).
⇒ Komşu dönemler hiç değişmiyor, **Değişmez 1'de yeni boşluk açılamaz.**
Değişen yalnız **kimlik**. `§3.5.1`'in *"iki uç da ölçülür"* şartı burada
tartışmayla değil **yapıyla** sağlanıyor — ölçülmesi gereken tek uç **renk**tir (§3).

### 4.2 Mekanik aile — 78 kayıt, ARAŞTIRMA DEĞİL (romanya vakasının tekrarı)

| bugün | önerilen künye | künyenin ömrü | n |
|---|---|---|---|
| `norvec` | `norvec-kralligi` | 1281-01-01 → 1537-01-01 — veriyle **birebir** | 24 |
| `macaristan` | `macaristan-naiplik` | 1918-11-16 → 1923-10-29 | 20 |
| `rusya` | `sovyet-rusya` | 1917-11-07 → 1923-10-29 | 12 |
| `irlanda` | `irlanda-serbest-devlet` | 1922-12-06 → 1923-10-29 — **birebir** | 10 |
| `lehistan` | `litvanya-buyuk-dukalik` | 1253-07-06 → 1569-07-01 | 8 |
| `fransa` | `fransa-cumhuriyet` | 1792-09-22 → 1923-10-29 | 2 |
| `isvec` | `isvec-birlik-oncesi` | 1281-01-01 → 1523-06-06 | 1 |
| `gurcistan` | `gurcistan-demokratik-cumhuriyeti` | 1918-05-26 → 1921-03-16 | 1 |

📌 `lehistan` ailesinin gerekçesi ayrıca kayda değer: Bryansk · Çernigov · Putivl ·
Kursk · Orel · Smolensk 14-16. yüzyılda **Litvanya**'nın fethidir; `lehistan`
künyesi (Lublin Birliği, 1569) o fetihlerden **iki yüzyıl sonra** kurulmuştur.
Yani kusur bir yazım hatası değil, **iki devletin tek künyeye sıkıştırılması**.

⚠️ `rusya → sovyet-rusya` **GEREKÇELİ** işaretlendi, KESİN değil: Buhara
(1920-09-02) ve Hîve (1920-04-26) 1920-24 arasında **biçimsel olarak bağımsız**
Halk Sovyet Cumhuriyetleridir. `sovyet-rusya` en yakın doğru künyedir, **tam
karşılık değildir.**

### 4.3 İran ailesi — 50 kayıt, GERÇEK araştırma işi

Veri deseni her yerleşimde aynı: `ilhanli 1281→1335-12-01` · **`iran`
1335-12-01→X** · `timurlu`/`safevi` X→… . Yani `iran`, **İlhanlı sonrası fetretin
yer tutucusu**; künyesi 1925-12-12'de kurulan Pehlevî İran'ıdır (544,7 yıl).
`CLAUDE.md §11` bu boşluğu adıyla anlatıyor ve *"İran'ın fetreti çözülmemiş"* diyor.

**KURAL (kaynaklı):** baş parça `ilhanli`ya verilir. Dayanak — TDV `ilhanlilar`:
*"İran'da kurulan bir Moğol devleti **(1256-1353)**"*, son hükümdar Nûşirevân
**745-754 (1344-1353)**. Yani Ebû Saîd'in 1335'teki ölümü devletin **sonu
değildir**; künye zaten `1256-01-01..1353-01-01`. Kuyruk parça, kaynaklı ardıla gider.

| yerleşim(ler) | öneri | dayanak (TDV) | güven |
|---|---|---|---|
| Herat | `kert` (tek parça) | `kert`: *"Kuruluş 643/1245 … Herat Timur tarafından işgal edildi (783/1381)"* | KESİN |
| Meşhed | `ilhanli`→1337-09-09, `serbedariler` | `serbedariler`: *"Sebzevâr'ın kontrolünü ele geçirip (12 Safer 738/9 Eylül 1337)"*; hâkim şehirler **Meşhed, Tûs** | KESİN |
| Simnân · Dâmgan · Bistâm | aynı ikili | `serbedariler`: *"Câcerm, **Damgan, Simnân**, Gürgân, Meşhed, Tûs, Esterâbâd"* | GEREKÇELİ (Bistâm adıyla geçmiyor) |
| Yezd | `muzafferi` (tek parça) | `muzafferiler`: hânedan 1318'de Yezd'de kuruldu (1318-1393) | KESİN |
| Isfahan | `incu`→1357, `muzafferi`→1387, `timurlu`, `karakoyunlu`, `akkoyunlu` | `muzafferiler`: *"Isfahan 1356-57'de fethedildi"*, *"1357: İncûları ortadan kaldırdı"* | KESİN |
| Kâşân · Erdistan · Nâin · Erdekân · Gulpâygân | `incu`→1357, `muzafferi` | `muzafferiler` bu şehirleri **adıyla** sayıyor | GEREKÇELİ |
| Telafer | `ilhanli`→1340, `celayirli` | `celayirliler`: 1340-1431; *"Musul ve Diyarbekir'i 1364'te aldı"*; 1410'da Ahmed Celâyir öldürüldü — verinin 1411 sınırıyla uyuşuyor | KESİN |
| Şamahı · Bakü · Kabala · Ereş · Şâbüran · Mahmudâbâd · Derbend | `sirvansah` (tek parça) | `sirvansahlar`: *"Şemâhî … Bakü … Derbend, Şâbüran, Kabala ve Salyan"*; Derbendî kolu 1378-1501; Şah İsmail Ferruh Yesâr'ı 906/1500'de yendi | KESİN 🔴 renk yok |
| Salyan · Kuba · Şeki | `sirvansah` | aynı madde; künye kapanışı **1538-01-01** verinin kuyruğuyla birebir | GEREKÇELİ 🔴 renk yok |
| Revan · Gence | `ilhanli`→1340, `celayirli`→1410, `karakoyunlu`→1469, `akkoyunlu` | künye tarihleri + `celayirliler` (Azerbaycan-Tebriz 1358) | GEREKÇELİ |
| Kazvin · Kum · Tahran | Isfahan zinciri | zincir, **aynı kuşağın komşu kayıtlarından** birebir alındı | GEREKÇELİ |
| Hemedan · Kirmanşah · Zencan · Zagros içi | `ilhanli`→1340, `celayirli`→1410, `karakoyunlu`→1469, `akkoyunlu` | `celayirliler` batı İran-Irak sahası | GEREKÇELİ |
| Nihâvend · Burûcird | `ilhanli`→1353, `lur-i-kucek` | künye 1184-1597; **TDV `nihavend` slug'ı ÖLÜ** | GEREKÇELİ |
| Luristan | `ilhanli`→1353, `lur-i-buzurg`→1424, `lur-i-kucek` | künyeler (Hazâraspîler 1155-1424) | GEREKÇELİ |
| Reşt | `ilhanli`→1371, `gilan-kiya` | künye (Kârkiyâ, Gilân) 1371-1592 | GEREKÇELİ |
| Esterâbâd | `ilhanli`→1337, `serbedariler`→1386, `timurlu`→1507, `mazenderan-marasi` | `serbedariler`: *Esterâbâd*, 1358'de Emîr Velî adına sikke; hânedan 1386'da bitti | GEREKÇELİ |
| **Kandehar** | `galzay`→1738-03-24, `afsar` | künye `galzay` **1709-04-21**..1738 — verinin başlangıç **günüyle birebir**; Nâdir Kandehar'ı 1738 Mart'ında aldı | KESİN |
| Merv | `afsar` (tek parça) | künye 1736-03-08..1796 — başlangıç günü birebir | KESİN |
| Kızılarvat (1736→1860) | `afsar`→1796, `turkmen` | künyeler | GEREKÇELİ |

### 4.4 🔴 BULUNAMADI — 9 kayıt, öneri YAZILMADI

*"Bulunamadı"* bir sonuçtur ve uydurmaktan kat kat değerlidir (`§7.1 ④`).

| kayıt | niçin öneri yok | ne gerekiyor |
|---|---|---|
| Tarki (Tarku) · Ağraham burnu | Tarku Şamhallığı / Dağıstan için künye **yok** | VERİ DEVLET → künye |
| Kiş · Hürmüz Adası · Kişm | **`hurmuz` künyesi yok** (TDV `hurmuz--iran` maddesi CANLI — CLAUDE.md'de kayıtlı) | VERİ DEVLET → künye |
| Dihistan ovası · Kızılarvat (1507→1510) | Pencere **Şeybânî (Özbek)** dönemidir — 1510-12-02 Merv Savaşı, Şah İsmail'in Şeybânî Han'ı yendiği gün. `seybani` künyesi **yok** | VERİ DEVLET → künye + RENK |
| Varşova (1806-11-28 → 1815-06-09) | **Varşova Dukalığı** künyesi yok | VERİ DEVLET → künye |
| Tebbes | Kûhistan için TDV'de bu döneme ait müstakil hüküm **bulunamadı** | öneri yazıldı ama **ZAYIF** — onaysız uygulanmamalı |

---

## 5. Ölçmediklerim — açıkça

`§11`: *ölçmediğini "ölçmedim" diye yaz.*

- **Öneriler haritada denenmedi.** `uret_petek.py` koşturulmadı (koordinatörün
  dosyası, ~40 dk). Yani *"renk var"* ölçüldü, *"gövde gerçekten çizildi"* **ölçülmedi**.
- **935'lik `kunyesiz` kovasının tamamı hayalet açısından taranmadı mı?** Tarandı:
  `harita:` takma adıyla çözüldüğünde kovaya **yalnız 2** yeni hayalet ekleniyor
  (Lozan/`sardinya` · Berat/`arnavutluk`). ⇒ *Kova bir hayalet yığını değil;*
  ***asıl kusur ad ekseninde, sahiplik ekseninde değil.*** Bu, kendi tahminimi
  çürüttü — "935 kayıt ölçülmemiş" cümlesinden çok daha büyük bir borç bekliyordum.
- **GEREKÇELİ işaretli 40 kaydın şehir özelinde TDV doğrulaması yapılmadı**;
  dayanakları bölge/künye/komşu-kayıt. Hangi kaydın hangisi olduğu yama
  dosyasında `guven` ve `kaynak` alanlarında **kayıt kayıt** yazılıdır.
- **`BEKLENEN_HAYALET` tavanına dokunulmadı** (`arac/` koordinatörde). Aracın kendi
  uyarısı 136 → 129 indirilmesini istiyor.
- Yama dosyası yayın kapısındaki **yetim veri dosyası** sayısını 25 → **26** yaptı.
  Bu, `yer_yama_*.js` ailesinin (benimkiyle birlikte **19 dosya** — sayıldı)
  yerleşik deseni; kapı zaten kırmızıydı
  (bayat yayın + 26 yetim). *Aritmetikten çıkarım — ayrıca ölçülmedi.*

---

## 6. UYGULAMA SIRASI — bağlayıcı

```
① RENK          norvec-kralligi · macaristan-naiplik · sirvansah · isvec-birlik-oncesi
                → 55 öneri parçası buna bağlı. RENKSİZ UYGULAMA = HARİTA DELİĞİ.
② VERİ DEVLET   hurmuz · seybani · tarku-samhalligi · varsova-dukaligi künyeleri
                → 9 BULUNAMADI kaydı buna bağlı.
③ VERİ          renk engeli olmayan 74 kaydı uygula (irlanda · rusya · lehistan ·
                fransa · gurcistan · iran ailesinin renkli hedefleri).
④ KOŞU          uret_petek.py + renk_olc.py (§9: veriye dokunan her koşudan sonra).
⑤ TAVAN         denetle.py BEKLENEN_HAYALET'i ölçülen yeni değere indir.
⑥ AYRI İŞ       devletAdi(id, gün) — 118 kayıtlık görünmeyen yarı. js/app.js.
```

⚠️ ③'ü ①'den önce yapmak, hayaleti kapatıp **delik** açar — `§11`'in
*"bir düzeltme doğru çalışabilir ve sonraki aşama onu geri alabilir"* ailesi.

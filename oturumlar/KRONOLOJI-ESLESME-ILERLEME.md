# KRONOLOJİ EŞLEŞME — ilerleme defteri

**Oturum:** KRONOLOJİ EŞLEŞME (açılış adı: OPUS HAZIR KITA 54) · Opus
**Görev:** tahta **M-1059**, OSMANGAZİ (koordinatör) · 22 Ağustos 2026
**Dosyalarım:** `data/kronoloji_eslesme_yama.js` → `window.KRONOLOJI_ESLESME_YAMA`
· bu defter
**Dokunmadıklarım:** `js/app.js` · `data/devletler.js` · `index.html` (koordinatörün)
· `arac/girdi.py` · `arac/renkler.py` · `arac/uret_petek.py` (koşu kilidi)

---

## 0. Açılışta yapılan — taban ölçümü

Görev gelmeden önce boş beklemeyip `arac/durum_tablosu.py`yi **salt okunur**
koşturdum (`--yaz` KOŞMADIM; kök `*.md` Oturum 0'ın). **`CLAUDE.md §1.5`
tablosu dokuz satırda bayat çıktı** — tahta M-1047 · M-1053, koordinatör
M-1068'de *"ben güncelleyeceğim"* dedi.

İki kalem yalnız büyümemiş, **kova değiştirmiş**: `Değişmez 1b` ✗→✓ ve
dizinsiz harita kimliği 6→1. Belgeyi okuyan bir oturum **ödenmiş bir borcu
hâlâ açık** sanardı.

---

## 1. Görevin kendisi — 531 görünmez madde

### 1.1 Taban (koordinatörün sayısıyla birebir tuttu)

Ölçüm aracı: **node** — `index.html`deki 112 veri dosyası yüklenip
`js/app.js:5493`teki eşleme mantığı birebir tekrarlandı. Regex kullanılmadı;
*"veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını çağır."*

```
künye toplam           431
kronoloji dosyası       26 (index.html'e bağlı)
  eşleşen               21 → 2473 madde
  eşleşmeyen             5 →  531 madde   ← GÖREV
     KRONOLOJI_CIN       → "cin"        136
     KRONOLOJI_HINDISTAN → "hindistan"  131
     KRONOLOJI_MISIR     → "misir"      120
     KRONOLOJI_OZBEK     → "ozbek"       73
     KRONOLOJI_JAPONYA   → "japonya"     71
```

### 1.2 Kod nasıl çalışıyor (`js/app.js:5491-5509`)

`derinKronolojiBindir()` `window.KRONOLOJI_*` desenini tarar, `id` =
sonekin küçük harfli hâli, `DEVLETLER` içinde o `id`yi arar ve bulursa
`.kronoloji` alanına bindirir. Sonra `odakKur()` **yalnız `kronoloji`si
dolu** künyeleri devlet seçiciye koyar. ⇒ Künyesi olmayan dosya seçiciye
hiç giremez.

`KRONOLOJI_ID_OZEL` bugün **boş** (`{}`); "KRONOLOJI_XYZ → gerçek-id"
istisnaları için.

### 1.3 Üç seçeneğin ölçümü

**(a) en temsilî gövdeye eşle — EN AZ %35 madde yanlış etikete girer**

Ölçüt: maddenin tarihi seçilen gövdenin `f`–`t` ömrünün dışındaysa o madde
kesinlikle yanlış etikettedir. **Bu bir alt sınırdır** — ömrün içindeki bir
madde de başka bir yapıya ait olabilir.

```
cin       → qing-hanedani        69/136  %51
japonya   → meiji-japonya        43/71   %61
hindistan → babur-imparatorlugu  39/131  %30
misir     → misir-kavalali       33/120  %28
ozbek     → buhara                3/73   %4
TOPLAM                          187/531  EN AZ %35
```

🔴 Koordinatörün şartnamesi **%75** ("dörtte üçü") diyordu; ölçüm **en az
%35** dedi. İkisi de aynı yöne işaret ediyor, taban benimki. Bildirildi.

**(c) hanedan hanedan böl — İKİ YAPISAL ENGEL, ikisi de ölçüldü**

```
① BOŞLUK   Mısır'ın 24 maddesi HİÇBİR hanedan künyesine düşmüyor
           1517-1805 arası Mısır bir OSMANLI EYALETİDİR; `memluk` 1517'de
           bitmiş, `misir-kavalali` 1805'te başlamış, aradaki 288 yılın
           künyesi YOK — olamaz da, çünkü o toprak Osmanlı'dır.
           (İskenderiye'nin teslimi · İbrahim Paşa Kanunnâmesi · Büyük
            Fitne · Birinci Kanal Harekâtı…)
② ÇAKIŞMA  Özbek'in 73 maddesinin 71'i BİRDEN ÇOK gövdenin ömrüne düşüyor.
           Buhara · Hîve · Hokand EŞZAMANLIDIR, ardışık DEĞİL. Bölme,
           hanedanların birbirini izlediğini varsayar; burada üçü aynı anda
           sahnede ve maddelerin çoğu aralarındaki ilişkiyi anlatıyor.
```

⇒ Bölme, **her maddenin bir hanedana ait olduğunu varsayar.** Mısır'ın 24
maddesi *ülkeye* aittir, hiçbir hanedana değil.

**(b) DEVLETLER'e ülke ölçekli kapsayıcı künye — ÖNERİLEN**

```
çakışma          beş id de boşta: `id:` YOK · `harita:` değeri YOK ·
                 yerleşim verisinde 0 dönem ⇒ HİÇBİRİ BOYANMAZ
hayalet risk     SIFIR — `harita:` yazılmadığı sürece harita katmanına girmez
yan etki         renk_fark.py `kunye_var_renk_yok` 30 → 35 (ÖNGÖRÜ)
                 kusur DEĞİL: o dal araçta `False` ile işaretli (sessiz borç)
emsal (güçlü)    OSMANLI_SYNTH — app.js:5548, aynı desen ama JS tarafında
emsal (zayıf)    izlanda `tur:"ulke"` — değerin kabul edildiğini gösterir,
                 ama izlanda BOYANIR ⇒ "boyanmayan kapsayıcı" emsali DEĞİL
```

🟢 **Asıl gerekçe:** beş dosyanın **beşi de kendi başlığında zaten bunu
söylüyor** — *"Üç hanedan TEK dosyada, kullanıcı 'Çin' seçtiğinde üçünü
birden görmeli"* · *"TEK dosya, kullanıcı 'Japonya' seçip bütün akışı
görmeli."* ⇒ (b) yeni bir tasarım değil; **verinin yazarlarının zaten
varsaydığı tasarımın `DEVLETLER`deki karşılığını kurmak.** Eksik olan veri
değil, **karşılığıydı.**

### 1.4 Yama kendi testini geçti

```
node --check data/kronoloji_eslesme_yama.js        TEMİZ
yama bellekte uygulanıp eşleme yeniden koşuldu:
                        ÖNCE   SONRA
   seçicideki künye      392    397
   eşleşmeyen dosya        5      0
   görünmez madde        531      0
   seçilebilir madde    3929   4460   (+531)
```

`js/app.js` değişikliği **gerekmiyor** — `KRONOLOJI_ID_OZEL`e hiçbir şey
eklenmesine gerek yok, künye eklenince beşi de kendiliğinden bağlanıyor.

### 1.5 İki tuzak — yamanın tasarımına alındı

**① Yamanın kendi adı tarayıcıya takılıyor.** `§7` gereği değişken adı
`window.KRONOLOJI_ESLESME_YAMA` olmak zorunda, ve
`"KRONOLOJI_ESLESME_YAMA".slice(0,10) === "KRONOLOJI_"` ⇒ dosya `index.html`e
bağlanırsa tarayıcı onu da tarar ve **altıncı bir "eşlenemedi" uyarısı**
doğar; yani yama, düzeltmeye çalıştığı kusuru üretir.
🟢 Bir sonraki satır `if (!derin || !derin.length) return;` — **nesnenin
`.length`i yoktur**, sessizce elenir. ⇒ Yama **bilerek nesnedir**, dizi
değil. Sınandı: `.length: undefined`, eşleşmeyen 0.

**② `f`/`t` kullanıcıya görünür.** `kartCiz()` künyenin `f`–`t` aralığını
kartta *"1281 – 1923"* diye basıyor. Bu yüzden aralıklar uydurulmadı: her
biri **o dosyanın kendi başlık beyanıdır** ve ölçülen madde aralığıyla
karşılaştırıldı. Mısır'ın `t` günü bulunamadı ⇒ `§4` gereği `1922-01-01`.

---

## 2. Yan bulgular — görevin dışında, ölçerek bulundu, DÜZELTİLMEDİ

### 2.1 🔴 Aynı kusurun SESSİZ yarısı — 550 madde künyesinin ömrü dışında

Bugün **eşleşen** 21 dosyanın 2473 maddesinden **550'si (%22)** bağlandığı
künyenin `f`–`t` aralığının dışında.

```
iran        107/107  %100   künye = Pehlevî 1925-2026, kronoloji 1295-1923
                            ⇒ maddelerin TAMAMI künye doğmadan önce
italya      164/192   %85   künye 'İtalya Krallığı' 1861, kronoloji 1240'tan
macaristan   83/127   %65   künye 1526'da bitiyor, kronoloji 1918'e sürüyor
fransa       91/184   %49   künye 'Fransa Krallığı' 1792, kronoloji 1923'e
lehistan     63/140   %45   künye 1569-1795, kronoloji 1295-1918
```

**Ölçüm yukarıda; çıkarım ayrı satırda:** 531 görünmez madde bu kusurun
**gürültülü** yarısıdır — konsol onları bağırıyor. 550 madde ise **sessiz**
yarısı: hiçbir uyarı vermiyorlar, çünkü eşleşme *başarılı* sayılıyor,
yalnız yanlış künyeye. ⇒ Seçenek (a) varsayımsal bir zarar değil; **zaten
yayında olan ve 550 maddeyi etkileyen ölçülmüş bir zarardır.**

⚠️ Bu beş dosya bana verilmedi, dokunmadım. Aynı (b) çaresi onlar için de
kurulabilir; karar koordinatörün.

### 2.2 Dizin penceresinde sessiz kayıp — 5 künye hiç listelenmiyor

`app.js:3486` `DEVLET_TUR_ADI` 13 tür sayıyor, `DEVLETLER`de 16 tür var.
Sözlükte olmayanlar: `isyan` (taiping · dashun · san-fan) · `ulke`
(izlanda) · `emirlik` (bahavelpur) = **5 künye dizinde görünmüyor.**
📌 Bu, o satırın hemen üstündeki yorumun anlattığı `sehzadelik` vakasının
**dördüncü tekrarı** — yorum *"bu sözlükte yoktu"* diyor, ve bugün üç tür
daha yok.

### 2.3 `etiket:` gövde kimliği taşımıyor — dördüncü seçenek bugün yok

`kronoloji_cin.js` başlığı *"hangi hanedan olduğu `d:` içinde ve `etiket:`te
belirtiliyor"* diyor. Ölçüldü: `d:` **2-4 cümlelik anlatımdır**, `etiket:`
ise **konu** etiketidir (askeri · siyaset · bilim…). Tek istisna
`KRONOLOJI_OZBEK`: orada `buhara` (43) · `hive` (21) · `hokand` (17)
gerçekten künye id'si.

⇒ Madde başına gövde eşlemesi bugün **1 dosyada mümkün, 4 dosyada değil** —
bilgi **anlatım metninin içinde**, yapılandırılmış bir alanda değil.
`§11`in on birinci kusur sınıfı: *bir `if` ile sorulamıyorsa kayıt vardır,
veri yoktur.*

---

## 3. Ölçmediklerim — açıkça

- **Maddelerin içeriğini okumadım.** (a)'nın zararını yalnız tarihle ölçtüm;
  *"ömrün içinde ama başka gövdeye ait"* maddeleri saymadım ⇒ **%35 bir alt
  sınırdır**, kesin değer değil.
- **Yamayı uygulamadım** — `data/devletler.js` koordinatörün.
  `kunye_var_renk_yok` 30 → 35 bir **öngörüdür**, ölçüm değil.
- **Tarayıcıda çalıştırmadım.** Eşleme mantığını node'da birebir tekrarladım;
  gerçek sayfada seçicinin nasıl göründüğünü görmedim.
- Beş kapsayıcının `bolge:` değerlerini var olan bölge adlarından aldım;
  bölge katmanının bunları nasıl kullandığını **ölçmedim**.

---

## 4. Sıradaki — koordinatörün kararına bağlı

1. Yamayı uygula (`devletler.js`e 5 kayıt) ve üç doğrulamayı koştur.
2. §2.1'deki 550 maddelik sessiz yarı için karar: aynı çare kurulacak mı?
3. §2.2'deki `DEVLET_TUR_ADI` eksiği (tek satır, `js/app.js` koordinatörün).

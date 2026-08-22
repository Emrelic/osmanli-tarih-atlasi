# ORTA ASYA KRONOLOJİ — ilerleme defteri

**Oturum:** OPUS HAZIR KITA 52 → **ORTA ASYA KRONOLOJİ** (M-1069 ile adlandırıldı)
**Model:** Opus 5 · **Dosyam:** `data/kronoloji_orta_asya.js` → `window.KRONOLOJI_ORTA_ASYA`
**Şartname:** `oturumlar/KRONOLOJI-SARTNAME.md` (tek otorite) + M-1069
**Açılış:** 22 Ağustos 2026

---

## 0. ÖNCE BİR AKSAKLIK — ve kanalı kurtardı

Açılış mesajımın **ilk denemesi kayboldu**: `tahta.py` çıkış kodu **0** verdi,
mesaj tahtaya **inmedi**. Aynı dakikada koordinatör M-1049/1050/1051'i
yazıyordu. Bunu bekletmeden bildirdim (`§7.1 ⑥`).

Koordinatör ölçtü ve **doğruladı** (M-1069):
```
KİLİTSİZ  8 eşzamanlı yazıcı → 3 kayıt · 5 KAYIP · çıkış kodları HEPSİ 0
KİLİTLİ   8 eşzamanlı yazıcı → 8 kayıt · 0 kayıp
%62 kayıp · kilit yazıldı ve push edildi (commit 7342961)
```

📌 **Ders:** *"Çıkış kodu 0 bir teslim değil bir girişim kaydıdır."*
Ve bulan şey bir denetim betiği değil, **kendi mesajının indiğini doğrulayan
bir oturumdu.** Doğrulamasaydım kusur on beş oturum boyunca sessizce sürecekti.

---

## 1. ÖN ÖLÇÜM — şartnamedeki dört ad/sayı düzeltildi (M-1071)

Koordinatör *"sayılarım TABAN DEĞİL, seninki taban"* dedi; ölçüldü.

### 1.1 Künye adları — üçü yanlıştı
```
verilen        GERÇEK id (devletler.js, node ile yüklendi)
astrahan   →   astarhan            (Astarhan/Ejderhan Hanlığı, 1466-1556)
sibir      →   sibir-hanligi       (1430-1598)
kasgar     →   BÖYLE BİR KÜNYE YOK
               gerçeği ÜÇ künye: yarkent-hanligi (1514-1705) ·
               mogulistan (1347-1680) · yakub-beg (1865-1878)
kirgiz     →   KÜNYE HİÇ YOK — 431 künyenin tam metin taramasında sıfır
DOĞRU:  kazan · nogay · cungar · kazak-hanligi · turkmen
```
📌 `CLAUDE.md §4` **Türkçe yazım ekseni** tuzağının birebir tekrarı: kendi
transliterasyonunu değil **gerçek `id:`yi** kullan.

### 1.2 Örtüşme — 30 dosya, 3248 madde node ile yüklendi (regex DEĞİL)
```
kimlik      eşleşme  GERÇEKTEN o kimliğe ait olan
KAZAN         18     ~5   (1437 ayrılış · 1521 · 1552 fetih) → 115 yıl İÇ tarih YOK
ASTARHAN      10     ~5   90 yıllık hanlığın kendi tarihi YOK
NOGAY          9      0   hepsi Kırım/Altın Orda gözünden yan cümle · 343 yıl BOŞ
SİBİR          9      1   yalnız Rus gözünden Yermak · Küçüm Han YOK
CUNGAR         9      7   ama HEPSİ kronoloji_cin.js'te, ÇİN gözünden
YARKENT        5      0   191 yıl BOŞ
KAZAK         20    ~2   🔴 17'si UKRAYNA/DON KAZAKLARI — kelime çakışması
KIRGIZ         1      1
TÜRKMEN       38    ~4   ezici çoğunluk AKKOYUNLU/KARAKOYUNLU Türkmeni
```
🔴 **KAZAK satırı bir ölçüm tuzağıdır:** *"20 eşleşme"* diye raporlansaydı
kapsam VAR sanılacaktı. Kelimeyi değil **kaydı** okumak gerekti.

**ÖLÇÜM ile ÇIKARIM ayrı satır (§6):**
- **Ölçtüğüm:** dokuz kimliğin dokuzunda da yalnız *"ayrılış/fetih anı"* yazılı.
- **Bundan çıkardığım:** bu bir derinleştirme değil **sıfırdan yazım** işi;
  örtüşme riski düşük ama ÇAPA olaylar tekrarlanmamalı.

### 1.3 Üç karar istedim, varsayımlarımı yazıp çalıştım
| soru | varsayımım | koordinatör cevabı |
|---|---|---|
| `kirgiz` künyesi yok, ne yapayım? | ayrı kimlik saymadan, coğrafyasının maddesi olarak yaz | **bekliyor** |
| `kasim` (Kasımov, 1452-1681) kapsama girsin mi? | GİRMİYOR — sen söylemedin, kendi başıma genişletmem | **bekliyor** |
| `mogulistan` + `yakub-beg` de kapsansın mı? | EVET — yoksa Tarım havzası 1347-1878 parça parça kalır | **bekliyor** |

---

## 2. KAYNAK DİSİPLİNİ — ölçülmüş slug tablosu (2026-08-22)

**HTTP kodu VE GÖVDESİ okunarak doğrulananlar (13 + 3):**
`kazan-hanligi · astarhan-hanligi · nogaylar · sibir-hanligi · kucum-han ·
kazaklar · kazakistan · kasgar · yakub-beg · kalmuklar · kirgizlar ·
turkmenler · kasim-hanligi · mahtumkulu · manas-destani · secere-i-terakime`

**🔴 TUZAK ÇIKANLAR — ve ikisi `devletler.js`i doğrudan ilgilendiriyor:**
```
ejderhan-hanligi   HTTP 200 · başlık doğru · ama madde DEĞİL:
                   "bk. ASTARHAN HANLIĞI" yönlendirme kabuğu (2472 krk).
                   ⚠️ devletler.js `astarhan` künyesi kaynak alanında
                   TAM BU SLUG'I gösteriyor — yani bir maddeye değil bir
                   YÖNLENDİRMEYE dayanıyor. Gerçeği: astarhan-hanligi.
dogu-turkistan     aynı sınıf, yönlendirme kabuğu (2372 krk).
```
📌 Bu, `CLAUDE.md §4`ün ①-④ tuzak listesine **BEŞİNCİ** bir alt sınıf ekliyor:
*canlı slug + doğru başlık + gerçek gövde — ama gövde bir MADDE değil bir
YÖNLENDİRME.* ③ (boş gövde) ve ④ (boilerplate) ile karışmaz: burada içerik
gelmiştir, sadece **madde değildir**. `<title>` testi de HTTP testi de geçer.

**ÖLÜ ölçülenler (302):** `cungarlar · yarkent · altisehir · mangit ·
astarhan · hive · altin-orda · ebul-hayr-han · abulhayr · kokand ·
turkistan--sehir · tasken · ozbek-hani · suyunbike`

**🟢 §4'ün "dar slug tutmazsa kapsayıcı maddeyi dene" kuralı İKİ KEZ işledi:**
- `cungarlar` ölü → **`kalmuklar`** canlı ve Cungar Hanlığı'nı *Doğu Kalmukları*
  başlığı altında tam veriyor (Togan · Esen · Galdan · Sevang Rabdan · 1758).
- `kazaklar` maddesi **etnografik**, hanlığın han listesi yok → **`kazakistan`**
  maddesinin TARİH bölümü Burunduk'tan Alaş Orda'ya kadar her hanı veriyor.
  ⇒ `devletler.js` `kazak-hanligi` künyesindeki *"yetersiz — kazaklar maddesi
  hanlığın siyasi tarihini vermiyor"* damgası **doğruydu ama eksikti**: kaynak
  vardı, **adresi başkaydı.**

---

## 3. TESLİM — 0 → 205 madde

`data/kronoloji_orta_asya.js` · `window.KRONOLOJI_ORTA_ASYA` · `node --check` ✓

```
① MADDE           0 → 205   ·  eksik alan 0  ·  gün hassasiyeti olmayan 0
② KONU (bir madde birden çok kovaya girebilir)
   askerî/siyasî      173  %84      🔴 hedef ~%40 — AÇIKÇA EKSİK, bkz. §4
   idarî/hukukî/malî   35  %17      (hedef ~%15) ✓
   bilim/teknoloji     11   %5      (hedef ~%15) 🔴
   kültür/sanat        20  %10      (hedef ~%15) 🔴
   sosyal/dinî         62  %30      (hedef ~%10) ✓ aşıyor
   iktisadî            12   %6      (hedef  ~%5) ✓
③ onem  5:37  4:66  3:83  2:19  1:0
   dunya 5:0   4:2   3:41  2:84  1:78
④ kapsam  ic 62  ·  dis 143
⑤ yer_id  DOLU 185 (50 farklı yerleşim) · BOŞ 20 · yerleşimde bulunmayan 0
⑥ kaynak  205/205 dolu · "bulunamadı" 1
   dayanak: kazakistan 47 · kazan-hanligi 29 · nogaylar 19 · kalmuklar 17 ·
   kucum-han 16 · turkmenler 15 · yakub-beg 11 · kasgar 11 · astarhan-hanligi 8 ·
   sibir-hanligi 8 · kazaklar 8 · kirgizlar 8 · mahtumkulu 3 · manas-destani 2 ·
   devletler.js künyesi 2 · bulunamadı 1
⑦ dosya içi mükerrer (tarih+başlık) 0
⑧ commit: aşağıda · index.html'e eklenecek dosya: data/kronoloji_orta_asya.js
```

### 3.1 `onem:` ÖNCE YANLIŞTI, ÖLÇÜLDÜ VE DÜZELTİLDİ
İlk yazımda **205 maddenin 103'ü `onem:5`ti (%52)**. Şartname §3.2:
*"`onem:5` verdiğin HER maddede hangi kaynağın onu dönüm noktası saydığını
gösterebilmelisin."* 103 madde bu sınavı geçemezdi.
⇒ Tablo **madde madde elle** yeniden karar verildi (155 madde değişti).
⚠️ **Mekanik kaydırma YAPILMADI** — `onem` ile `dunya` tasarım gereği bağımsız
eksenlerdir; birini ötekinden türetmek, bu projenin *"ölçüm doğru, çıkarım
yanlış"* hatasının ta kendisi olurdu.

### 3.2 TEKRARLANMAYAN ÇAPA OLAYLAR — bilerek yazılmadı
`1437 Kazan ayrılışı · 1466 Astarhan ayrılışı · 1502 Büyük Orda sonu ·
1521 Sâhib Giray · 1549/1556 Astarhan · 1552 Kazan fethi · 1569 Don-Volga ·
1581 Yermak seferi · 1449 Tumu · 1755 Qianlong · 1759 Altışehir · 1878 Zuo`
⇒ `altinorda · kirim · rusya · cin · ozbek` dosyalarındalar. Bu dosya
onların **arasını** dolduruyor.

⚠️ Denetimim *"başka dosyada aynı güne düşen madde: 106"* diyor. **Bu bir
mükerrerlik ölçümü DEĞİL, takvim çakışması ölçümüdür**: `YYYY-01-01` yazan
maddeler doğal olarak aynı güne düşüyor. Tek tek bakıldı, **içerik mükerreri
YOK**. (Ölçüm ile çıkarım ayrı satır.)

---

## 4. NEYİ BULAMADIM / NEYİ YAPAMADIM — açıkça

1. **Konu dağılımı hedefin altında.** Askerî/siyasî %84, hedef ~%40.
   **Sebep ölçüldü:** bu dokuz kimliğin TDV maddeleri ezici çoğunlukla
   siyasî-askerî anlatı veriyor; göçebe hanlıklardan geriye yazılı kültür
   mirası az kalmıştır. Kaynağın sustuğu yerde madde **uydurulmadı** (§1).
   Bulunabilen altı kültür/bilim kalemi ayrı bir bölümde yazıldı ve
   niçin bu kadar az olduğu dosya içinde de açıklandı.
   ⇒ **Kapatılmış gibi gösterilmiyor: bu bir EKSİKLİKTİR.**
2. **`yer_id` boş 20 madde.** Sebebi tek: o adlarda yerleşim kaydı YOK.
   Aşağıdaki 16 yer için nokta gerekiyor (koordinatörün kararı):
   `Göktepe (1879/1881 Rus seferleri) · Saraycık (Nogay başkenti) ·
   Akmescid-Kızılorda (1853 kuşatması) · Sığnak · Otrar · Sayram · Suzak ·
   Kökçetav · Akmola · Irgız · Balkaş · Isık Göl · Pişpek (Bişkek) ·
   Evliyaata (Taraz) · Aksu · Talas`
   🔴 **TUZAK:** `Akmescid` adında bir nokta VAR ama **Kırım'daki**
   Akmescid'dir (44,95°K / 34,10°D) — Kızılorda'nın 2900 km batısı.
   Kullanılmadı; `§11`in *"yakın mükerrer"* değil, **aynı adlı BAŞKA yer**
   tuzağı.
3. **Kırgızlar için künye yok** — 8 madde yazıldı ama hiçbiri bir `id:`ye
   bağlanamıyor. Ayrı künye kararı koordinatörün.
4. **`kasim` (Kasım Hanlığı) kapsanmadı** — kronolojisi hâlâ boş.
   TDV `kasim-hanligi` maddesi CANLI ve zengin (15.048 krk), yani iş hazır.
5. **Ölçmediğim şey:** bu dosyanın uçuş animasyonundaki davranışı. Yalnız
   `yer_id`lerin yerleşim kümesiyle birebir eşleştiğini ölçtüm; uçuşun
   gerçekten çalıştığını **görmedim.**

---

## 5. KOORDİNATÖRE — üç ölçülmüş bulgu, karar sende

### ① `devletler.js` `astarhan` künyesinin kaynak alanı bir YÖNLENDİRMEYİ gösteriyor
`kaynak:"ejderhan-hanligi"` → o slug bir madde değil, *"bk. ASTARHAN HANLIĞI"*
kabuğu. Doğrusu **`astarhan-hanligi`**. Dosya benim değil, düzeltmedim.

### ② İKİ DOSYA ARASINDA `dunya` ÇELİŞKİSİ — şartname bunu KUSUR sayıyor
```
1552 Kazan fethi      kronoloji_rusya.js dunya:3  ·  kronoloji_kirim.js dunya:4
1556 Astarhan ilhakı  kronoloji_rusya.js dunya:3  ·  kronoloji_kirim.js dunya:4
```
Benim komşu maddelerim **dunya:4** çizgisine göre puanlandı. İkisi de benim
dosyam değil; hangisinin düzeltileceği senin kararın.

### ③ AYNI OLAY, İKİ FARKLI GÜN
```
Kazan'ın düşüşü   kronoloji_rusya.js  1552-10-02
                  TDV kazan-hanligi   15 Ekim 1552   ← benim yazdığım
```
Fark muhtemelen Julian/Gregorien takvim ayrılığıdır ama **ölçmedim**, tahmin
ediyorum. Kaynak farkı da olabilir.

### ④ index.html
`data/kronoloji_orta_asya.js` **BAĞLANMADI** — şartname §5 gereği bağlamayı
sen yapacaksın. Bağlanmazsa 205 madde ekranda görünmez (proje bunu DÖRT KEZ
yaşadı).

---

## 6. SIRADAKİ TUR — hazır bekliyor

- `kasim` (Kasım Hanlığı 1452-1681) — kaynak canlı, künye var, kronoloji 0.
- Kazan Hanlığı'nın **on dokuz han değişiminin** kaynakta tarihlenmemiş
  olanları için ikinci kaynak taraması.
- Cungar Hanlığı'nın **Tibet kolu** (1717 Lhasa) — `kalmuklar` maddesi
  değinmiyor, `cin` dosyasında 1720 var; ayrı kaynak gerekiyor.
- Kültür/bilim kovasını doldurmak için **TDV dışı akademik kaynak** izni
  (Kazan Tatar edebiyatı, Çağatay edebiyatı, Kazak akınlık geleneği).
  🔴 `CLAUDE.md §4` kırmızı çizgisi gereği bu **koordinatörün izniyle** yapılır.

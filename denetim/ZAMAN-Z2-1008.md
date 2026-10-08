# ZAMAN-Z2-1008 — arayüzün 1000–1945'i oynatması (js/app.js · index.html · css/style.css)

Oturum: ZAMAN-Z2-ARAYUZ-ZAMAN-1008 (UMIT) · 8 Ekim 2026 · ağaç `C:\atlas-z2` @ `origin/makine/umit` `e28edfdc`
Teslim: `ZAMAN-Z2-1008-APPJS.diff` (üç dosya tek diff, UYGULANMADI). `git apply --check` hem `e28edfdc`de
hem güncel `d8e4e07b`de (Z1/Z4/Z7 teslimleri sonrası) temiz · LF · CR 0 · 31.624 bayt.

## §0 Önceki ölçümler ne diyordu (mükerrer kapısı)
- `YOL-HARITASI` Boyut 1: çubuk doğrusal olamaz, **çağ bölmeli** olmalı · `kesinlik` alanı ve "~MÖ 550 / 1427 civarı" gösterimi.
- `KAPSAM-1945-OLC-0930`: `app.js:90 BITIS` + `:9092` zaman çubuğu etiketi; "1923" geçen 16 satır. Hangisinin tavan olduğu **ölçülmemişti**.
- `OLCUM-1923-2026-KAPSAM-0905` §3: `aktifAralik` son-gün kuralı bir **görüntü kararı**; `BITIS` güncellenmezse çubuk 1923'te durur.
- `BULGU-1923-2026-ACILIS-0905`: `js/app.js` 3 yerde, `denetle_gorunur.py` çubuğu `[1281,1923]` tanımlıyor.
- `SONRA1923-SAYIM-1004`: "yüklü ≠ görünür" — 500 madde yüklü, çubuk UC'de duruyor.
- ⇒ **Envanter ve sınıflandırma yapılmamıştı, çağ ölçeği/kesinlik gösterimi yazılmamıştı.** Mükerrer yok.
  O günden bugüne değişen: 1923-1945 kronolojisi (505 madde) ve `once1281` dosyaları (1.202 madde) YÜKLÜ.

## ① Öngörü
⚠️ **Dürüstlük notu:** Öngörüleri ölçümden önce DOSYAYA yazmadım. Aşağıdakiler kod okunurken yaptığım
beklentilerdir, ölçümle karşılaştırması yanlarında. Kural ihlalidir, bildiriyorum.
| beklenti (kod okurken) | ölçüm |
|---|---|
| `donemBul`un "iki uçta kırpma"sı çubuk açılınca AKTİF yanlış çizer (1100'de 1281 beyliği) | ✓ doğrulandı: `-3` dalı eklenmeden önce 1100 → dönem 0 |
| 1923-10-29 karesi `aktifAralik` BITIS'e bağlı kalırsa yeniden boşalır | ✓ (kural VERI_SONU'ya taşındı; 1923-10-29 → dönem 619, dolu) |
| padişah kartı uçlarda KIRILMAZ, yalnız "—" der | ✓ kırılmadı; "—" + sebep eklendi |
| çağ çarpanı 1000-1281 ≈ ×2, 1923-1945 ≈ ×0,2 | ✓ 2,127 / 1,000 / 0,207 |
| odak kapısı ETKİLENMEZ | ✗ **YANLIŞ** — SEKME SESSİZ +19 (aşağıda ②-6) |

## ② Ne ölçtüm

### ②-1 Envanter ve SINIF (app.js, ufuk mu tarihî mi)
| yer | eski | sınıf | yeni |
|---|---|---|---|
| `:89 BASLANGIC` | 1281-01-01 | **UFUK** | `1000-01-01` |
| `:90 BITIS` | 1923-10-29 | **UFUK** | `1945-09-02` |
| (yeni) `VERI_UFKU` | — | **VERİ** (= `girdi.py VERI_UFKU`, Z1) | `["1281-01-01","1923-10-29"]` → `VERI_BASI/VERI_SONU` |
| `:112 aktifAralik` son-gün kuralı | `t===BITIS` | **VERİ** (verinin son günü) | `VERI_SONU` |
| `:1682 donemBul` iki uçta kırpma | ilk/son dönem | **hata olurdu** | `-3` (veri dışı: Osmanlı gövdesi çizilmez) |
| `:3666 EPOK_DAMGASI` | 1281-01-01 | **TARİHÎ/veri epoku** (883 kaydın ilk dönemi) | DEĞİŞMEDİ |
| `:9322` yerleşim çubuğu | doğrusal `[1281,BITIS]` + sabit 4 yazı | UFUK | çağ ölçeği (`gunKonum`) + ortak eksen |
| `:9987` kaydırıcı min/max/value | gün indeksi | UFUK | KONUM 0…1.000.000 |
| açılış günü (`suanki = BASLANGIC`) | 1281 | **TARİHÎ** (veri başı) | `ACILIS_GUNU = VERI_BASI` — 1000'de boş haritayla açılmasın |
| `:11487-11498` madde farkı uç atlaması | BASLANGIC/BITIS | **VERİ** (D180 gerekçesi veri ucuna) | `VERI_BASI/VERI_SONU` |
| `:14169 oncesiSonrasiKirp` | `once<BASLANGIC` | **VERİ** | `VERI_BASI`/`VERI_SONU` |
| `:12540/12607` oynatma başı/sonu | BASLANGIC/BITIS | UFUK | aynen (değer değişti) |
| `:14548/14562` ⏮⏭ uçlar | BASLANGIC/BITIS | UFUK | aynen |
| `:14665-14680` tarihe git kırpma | BASLANGIC/BITIS | UFUK | aynen + uzak madde eşiği (②-5) |
| `:15376 gezSuanki` (devlet odağı) | BASLANGIC/BITIS | UFUK | aynen ⇒ 1281 öncesi devlet maddelerine ARTIK gidiliyor |
| `:8733` hukuki sınır açık uç | BITIS | UFUK | aynen (açık uç 1945'e kadar) |
| `js/d_katman.js:415 _D_PENCERE_SONU` | 1923-10-29 | **TARİHÎ/veri** (D hattı geriye sarma noktası) | DEĞİŞMEDİ (metin doğru) |
| `index.html:6 <title>` · açılış perdesi "1281'den 1923'e" | — | marka metni | DEĞİŞMEDİ — **karar Emre'nin** (④-4) |

### ②-2 Çağ bölmeli çubuk
- `ZAMAN_CAGLARI` (app.js, BASLANGIC'in altı): 1000–1281 **%15** · 1281–1923 **%73** · 1923–1945 **%12**. Yeni çağ = yeni satır.
- Gün↔konum gidiş-dönüş: 1100-06-15 · 1281-01-01 · 1923-10-29 · 1930-06-15 · 1945-09-02 — **5/5 birebir** (ilk sürümde
  100.000 konumla 1 gün kayıyordu → 1.000.000'e çıkarıldı; en seyrek çağda konum başına 0,7 gün).
- Ok tuşları ESKİ sözleşmede: ±1 gün (Shift ±365) — kaydırıcı odaktayken de (ölçüldü: 1945-09-02 → ← → 1 Eylül 1945).
- Eksen yazıları `left:%` ile GERÇEK konumda; dar çubukta çakışan düşük öncelikli yazı gizleniyor
  (800 px pencerede ölçüldü: "19231945" çakışması → 1923 gizli, 1000·1281·1500·1700·1945 görünür). Yerleşim çubuğu aynı eksen.
- Oynatma çarpanı: 2,127 / 1,000 / 0,207 (normal 180 gün/sn ⇒ 383 / 180 / 37 gün/sn). **Ölçülen yan kusur ve düzeltmesi:**
  eski `Math.max(1, round(…))` her kareye ≥1 gün veriyordu ⇒ 60 kare/sn'de **60 gün/sn taban** yavaş çağı ezerdi
  (ilk ölçüm 1930'da 122 gün/sn). Kesir artık birikiyor; düzeltmeden sonra tek zincirle 1930: 57 gün/2 sn.
  ⚠️ Gizli bölmede kare 1 sn'ye kırpıldığı için mutlak hız ölçümü güvenilir değil. 1500'de 222 (beklenen 180) ölçüldü;
  sebebi testin durdur-başlat'ı aynı karede çağırıp iki rAF zinciri doğurması (önceden var olan yarış, `zamanlayici` bayrağı).
  Kullanıcı tıklamasıyla oluşması pek olası değil, düzeltmedim.

### ②-3 Kesinlik gösterimi (`kesinlik` alanı, VERI-YAPISI.md — skaler ve {f,t} İKİSİ de)
`kesinlikliYazi(ham, gi, kesinlik)` + yeni `kisaTarihYazi(m)` (devlet listeleri ham ISO basıyordu, ör. "1100-01-01"):
```
gun "29 Mayıs 1453" · ay "Mayıs 1453" · yil "1427" · onyil "~1090" · yuzyil "XV. yüzyıl" · belirsiz "~1891 (belirsiz)"
alan yok + YYYY-01-01 → "1100" (eski davranış) · {f:"ay",t:"gun"} → "Ekim 1689" · gün biliniyorsa ISO aynen
```
Veride: OLAYLAR'da `kesinlik` taşıyan **91** madde (değerler yalnız gun/ay/yil), KRONOLOJI_* içinde **2**.

### ②-4 Uçlarda kırılma (tarayıcı, yerel http.server, 4 Ekim sonrası veri)
```
gün          dönem  Osmanlı gövdesi     padişah kartı                         konsol hatası
1100-06-15   -3     çizilmez + şerit    "— · Osmanlı hanedanından önce"       0
1281-01-01    0     dolu                "— · Osmanlı hanedanından önce" (1299 öncesi; eskiden boş "—")  0
1402-09-01   -2     Fetret (değişmedi)  Fetret                                0
1923-10-29  619     dolu (son gün kuralı korundu)  Halife Abdülmecid          0
1930-06-15   -3     çizilmez + şerit    "— · Osmanlı hanedanından sonra"      0
1945-09-02   -3     çizilmez + şerit    aynı                                  0
```
`KAPSAM DIŞI` şeridi (harita üstü, `#kapsam-disi-serit`) VERI_UFKU dışında görünür: 1923-10-29 gizli, 1923-10-30 görünür.
Z1'in ④-2 isteği bu: motor UFUK'u açıp yarım yabancı gövde çizse bile şerit "çizili olan EKSİKTİR" der.
Devlet odağı (Bizans): ilk maddeye tık → 1000-01-01 (637 tarihli madde UFUK başına kırpıldı), dönem -3, hata 0.

### ②-5 Ana kronoloji uçlarda neredeyse BOŞ — ölçüldü
```
                    <1281   1281–1923   1923-10-29…1945-09-02   >1945
OLAYLAR (ana akış)      0       1.782                       2       0
KRONOLOJI_* (110 dosya) 1.202   6.551                     505       4
```
⇒ "olay olay" oynatma 1000–1281'de hiçbir şey göstermez; 1281 öncesinin ve 1923 sonrasının maddeleri yalnız devlet
seçicisinden ulaşılabilir. "Tarihe git 1100" eskiden 1281'e (180 yıl öteye) gidiyordu. Artık en yakın madde 5 yıldan
uzaksa tarihin KENDİSİNE gidip sebebini yazıyor (ölçüldü: 1100 → 1 Ocak 1100 · 1939 → 1 Ocak 1939 · 1453 eskisi gibi
maddeye gidiyor). Ana akışa ne girer sorusu **Z7'nin kalemi** (④-3).

### ②-6 🔴 ODAK KAPISI (yayın kapısına bağlı) — bu diff tavanı aşıyor
`arac/odak_cozum.js` app.js'ten `var BASLANGIC = gunIdx(` → `// ═══` dilimini kesip koşuyor. Dilim kendi içinde
çalışıyor (OLCULEMEDI 0). Ama kırpma 1000–1945'e açıldı:
```
                       taban e28edfdc   bu diff
SEKME_GOVDE                 254           235
SEKME_SESSIZ                 46            65   (tavan sekme_sessiz = 53)
kapı: SESSİZ GERİLEDİ    1 yeni çift     20 yeni çift   (1 = 1381 Timur/iran, TABANDA ZATEN VAR)
```
Yeni 19 çiftin **19'u da 1281 öncesi**: selcuklu 7 · kilikya-ermeni 9 · gurcistan 1 · memluk 1 · bulgar-carligi 1 · karaman 1
(tam liste aşağıda). Hüküm: eskiden 1281-01-01'e kırpılıp **1281'in gövdesine** uçuyorlardı (1080 olayına 1281 sınırı).
Yeni ölçüm doğru, eski "GÖVDE" yanlış pozitifti. **Kusur değil, KAPSAM** — ama kapı bunu ayırt etmiyor.
```
1080-01-01 Fetih sonrası nüfus ve iskân politikası · selcuklu     1243-01-01 Baycu ile ön anlaşma · kilikya-ermeni
1140-01-01 İlk Selçuklu parasının basılması · selcuklu           1251-01-01 Korikos kalesi genişletildi · kilikya-ermeni
1202-01-01 II. Süleyman Şah'ın Gürcistan seferi · selcuklu       1256-01-01 Toros Roslin İncil'i · kilikya-ermeni
1216-06-01 Çukurova Ermeni Krallığı tâbiiyeti · selcuklu         1260-06-01 Sempat, Antakya kodeksi · kilikya-ermeni
1219-01-01 I. Levon öldü · kilikya-ermeni                         1266-08-24 Mari Bozgunu · kilikya-ermeni
1223-01-01 Venedik/Kıbrıs ticarî antlaşma · selcuklu             1270-10-28 Hetum I öldü · kilikya-ermeni
1226-01-01 Hetum I kral oldu · kilikya-ermeni                     1271-01-01 Baybars'ın Kıbrıs seferi · memluk
1226-06-01 Sis ve Tarsus darphaneleri · kilikya-ermeni           1277-01-01 İvaylo Ayaklanması · bulgar-carligi
1231-01-01 Moğol istilası başladı · gurcistan                     1277-11-01 Mehmed Bey, İç İl · karaman
1240-01-01 Babaîler İsyanı · selcuklu
```

### ②-7 Kapılar
- `node --check js/app.js` ✓ (her adımda)
- `py arac/denetle_arayuz.py` önce **temiz** (çıkış 0) · sonra **temiz** (çıkış 0) — fark yok
- tarayıcı: 1100 · 1281 · 1923-10-29 · 1930 · 1945 · 1402 (Fetret) · 1500 — `window.onerror` **0**, konsol hatası **0**
- `git apply --check` ✓ `e28edfdc` · ✓ `d8e4e07b`

## ③ Ne bulamadım / ölçmedim
- **Z1 hizası:** Z1 raporunu (`d8e4e07b`) okudum, `VERI_UFKU` adını ve değerini aynen aldım. Z1'e iki mesaj gitti, doğrudan cevap
  gelmedi. Motor yaması inince `donemler.js`in hangi aralığı kapsayacağını **ölçmedim** (koşu yok). app.js veri penceresini bu yüzden
  `donemler`den TÜRETMİYOR, sabit tutuyor.
- `kodla.py:592/634/974` açılış günü `1281-01-01` (Z1 bildirdi): app.js `ACILIS_GUNU = VERI_BASI` = 1281-01-01 ⇒ **bugün hizalı**.
  Okumadım; arac/ Z1'in.
- `denetle_gorunur.py:259/294` zaman çubuğu tanımı: Z1'in ARAC.diff'i `girdi.UFUK`a bağlıyor; app.js ile eşitliği **koşmadım**.
- `denetle_yayin.py`nin tamamını koşmadım; yalnız odak bölümünü (`odak_olc.kapi_olcumu`) iki ağaçta koşturdum.
- Mobil (375 px) görünümü ölçmedim. CSS'te `#zaman` → `#zaman-sarmal` taşındı, mantık aynı.
- 1000'den önceki maddeler (Bizans 637, 831…) UFUK başına (1000-01-01) kırpılıyor; kaç madde **saymadım**.

## ④ Ne istiyorum / öneriyorum
1. 🔴 **TAVAN + SABİT AYNI COMMIT'TE (§3.4-②):** bu diff tek başına inerse yayın kapısı **SESSİZ GERİLEDİ** der.
   - **(a) ÖNERİM:** `odak_olc`a ayrı kova: madde günü `VERI_UFKU` dışındaysa SESSİZ değil **"VERİ PENCERESİ DIŞI"** (bilgi,
     bloke etmez, adıyla basılır). 2s'nin `KAPSAM DIŞI` deseni, Z1 ④-2 ile aynı. Dosya arac/ (Z1/koordinatör).
   - (b) Geçici: 19 çift `sekme_sessiz_kimlik`e adıyla eklenir (koordinatör yazar). Kötü seçenek: kapsam borcunu kusur tavanına
     gömer ve Z6 veriyi doldurdukça çifti kapatmak elle iş olur.
2. **Yayın kapısı sorusu (Z1 ④-3'e katılıyorum, genişleterek):** `app.js BASLANGIC/BITIS == girdi.UFUK` **ve**
   `app.js VERI_UFKU == girdi.VERI_UFKU`. İkisi de app.js'te tek satırlık dizi/dizgi, regex ile okunur.
3. **Z7'ye:** ana akış (OLAYLAR) 1281 öncesinde 0, 1923 sonrasında 2 madde. "Olay olay" kipinin 1000–1281'de ne oynatacağı karar ister:
   OLAYLAR'a taşımak Değişmez 2 evrenini büyütür; arayüzde "Osmanlı yokken birleşik havuz" göstermek ayrı bir iş.
4. **Emre'nin kararı — padişah kartı Osmanlı yokken:** bugün yalnız durum yazılıyor ("Osmanlı hanedanından önce/sonra"), kişi
   UYDURULMADI. Seçenekler: ① 1923-10-29 sonrası **Cumhurbaşkanı** (M. Kemal 1923–1938, İnönü 1938–1950; kartvizit şeması aynı,
   yeni `CUMHURBASKANLARI` dizisi + TDV kaynağı) ② 1281 öncesi **Anadolu Selçuklu sultanı** ③ kart o yıllarda gizlenir.
   Önerim ①: Cumhuriyet atlasın konusunun doğrudan devamı. ② ancak 1281 öncesi Osmanlı odağı netleşince.
   Aynı karar: `<title>` "(1281–1923)" ve açılış perdesindeki "1281'den 1923'e" — ufuk mu veri mi yazsın?
5. `kesinlik:"yil"`: VERI-YAPISI.md örneği "1427 civarı" diyor, ben **"1427"** yazdım. Yıl hassasiyeti "yıl BİLİNİYOR" demek,
   "civarı" ancak onyıl ve daha kaba birimde doğru. Şema metni de düzeltilmeli; kök *.md olduğu için koordinatörün.
6. Uygulama sırası: bu diff **Z1'in üç diff'iyle aynı commit'e ve tam inşaya bağlı DEĞİL**. app.js motor tuzunda değil, koşu
   istemez, bugünkü veriyle de doğru çalışıyor (veri 1281–1923, şerit dışarıyı örtüyor). Tek şart ④-1.

## Dosyalar (`C:\atlas-umit\denetim\`e kopyalandı, izlenmeyen)
- `ZAMAN-Z2-1008.md` — bu rapor
- `ZAMAN-Z2-1008-APPJS.diff` — `js/app.js` (+291/−29) · `index.html` (+9/−0: `#zaman-sarmal`, `#zaman-eksen`) · `css/style.css` (+29/−6: sarmal, eksen, şerit)

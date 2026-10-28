# KRONO-ESLENMEYEN-1006 — eşlenmeyen 15 kronoloji dosyası: karar tablosu

Görev: UMIT-W37-KRONO-ESLENMEYEN-1006 (UMIT İRTİBAT). Yalnız ölçüm + tablo; `data/`, `js/`, `arac/`a yazılmadı.
Ağaç `C:\atlas-w37` = origin/main `7afbe86f` (detached).

## 0. ÖNGÖRÜ — ölçmeden ÖNCE mühürlendi (6 Ekim 2026)
- Eşlenmeyen dosya sayısı bugün de **15**, madde **2.084 ± 30**.
- **TEK-DEVLET çıkacak dosya: 0** (en çok 1 — aday `ozbek` ya da `sirbistan`). Gerekçe: "hanedanlar ayrı" kararıyla
  ülke adlı dosyalar (cin, japonya, misir, sirbistan, hindistan) künye ZİNCİRİdir; ötekiler adıyla bölgeseldir.
- Kesin atıflı madde payı 0929'daki %76 civarında kalacak (±5 puan); künyesiz/belirsiz ~%24.
- Yazarın atfı pencere dışında kalan madde: 0929'daki 6 ± 3.

### Öngörü tuttu mu
| öngörü | ölçülen | |
|---|---|---|
| 15 dosya · 2.084 ± 30 madde | **15 · 2.084** | ✓ |
| TEK-DEVLET 0 (en çok 1) | **0** | ✓ (en yüksek tek künye payı `misir-kavalali` %73) |
| kesin atıf %76 ± 5 | **%91,9** (1.698 `taraflar` + 218 0929 atfı) | ✗ TUTMADI — sebep §2 |
| yazar atfı pencere dışı 6 ± 3 | **2** (`taraflar`ta 0; `kunye:` alanında 1; 0929 atfında 1) | ✗ TUTMADI — aynı sebep |

## 1. Yöntem ve evren
- **Evren:** `index.html`in yüklediği 70 `data/` betiği (paketler dahil) `node vm`de koşturuldu; app.js:14251-14298
  `derinKronolojiBindir` eşlemesi birebir taklit edildi (`KRONOLOJI_ID_OZEL` boş · `slice(10).toLowerCase()` ·
  `_`→`-` · `DEVLETLER` `id` eşitliği). Sonuç: **bağlı 26 · eşlenmeyen 15 / 2.084 madde** · künye 896.
  Görevdeki sayılardan iki küçük fark: `anadolu` **281** (273 değil) · `dogu_afrika` **218** (217 değil).
- **Pencere:** künye `f`/`t`, sayısal gün (yıl×10⁴ — D205 dizgi tuzağı yok); `t` boşsa sürüyor.
- **Atıf kaynağı, öncelikle:** ① maddenin `taraflar[]` alanı — `cokTarafliKronolojiEkle` (app.js:14306) TAM BUNU
  okur · ② yoksa `denetim/KRONO-BAGLAMA-0929.json` atfı (0929 UYGULA'nın kuru sınıflaması, BELİRSİZ hariç) ·
  ③ ikisi de yoksa ATIFSIZ.
- Ölçüm betikleri scratchpad'de (`yukle.js` · `analiz.js` · `tsv2.js` · `e.js`), depoya yazılmadı.
- 0929 UYGULA aracı bugün kuru koşuda bile DURUYOR: `japonya#0: zaten devlet alanı var — DUR` (aracın
  `taraflar` görünce durma kuralı, §2'nin sonucu).

## 2. 🔴 ANA BULGU — `taraflar[]` 1 Ekim'de yazılmış; ÇOK yolunun verisi büyük ölçüde diskte
`52222fa3` (2026-10-01 00:51, "KOSU 19 GIRDISI + bir gecelik kronoloji kampanyasi") bu 15 dosyanın maddelerine
`taraflar[]` ekledi (ör. `anadolu`: önce 0, sonra 253 satır). Commit mesajı bunu anmıyor.
```
taraflar uzunluğu   0: 386 · 1: 1.675 · 2: 22 · 3: 1
taraflar'daki id devletler.js'te YOK         → 0
taraflar'daki id maddenin gününü KAPSAMIYOR   → 0
0929 atfıyla karşılaştırma (t+b ile birleşen 2.050 madde):
   AYNI 1.321 · FARKLI 29 · taraf var/0929 BELİRSİZ 327 · taraf yok/0929 atıf var 219 · ikisi de boş 154
   (34 madde 0929'dan sonra t ya da b değiştirmiş, birleşmedi)
```
FARKLI 29'un örüntüsü: 0929 iki künye vermiş, `taraflar` birini seçmiş (geçiş günü `kenmu`/`muromachi`,
`babur`/`sur` 1540, `ozbek` Buhara+Hive/Hokand ikilileri).
⇒ Değişken `KRONOLOJI_X` → `KRONOLOJI_COK_X` olursa **1.698 madde** başka dokunuşsuz bugünkü ekleyiciyle
künyesine iner; `taraflar`sız **386** madde inmez (görünmez kalır).
🔴 Ekleyicinin kendi pencere sınavı YOK (app.js:14313-14321); bugün zararsız, çünkü `taraflar`ta pencere dışı 0.

## 3. Dosya tablosu — ①②③④⑤
A = `taraflar` pencerede · B = `taraflar` yok, 0929 atfı pencerede · C = atıf var, pencere dışı · E = atıfsız
(parantez: dosyanın aday ailesinden HİÇBİR künye o günü kapsamıyor). "künye" = aday künye sayısı. "En büyük tek
künye" = ③ tek-devlet sınavı (aday künyelerden en çok maddeyi taşıyan).

| değişken | madde | tarih aralığı | coğrafya (en sık yer_id) | künye | en büyük tek künye | A | B | C | E (ailesiz) |
|---|---|---|---|---|---|---|---|---|---|
| `KRONOLOJI_CIN` | 136 | 1281-01-01 → 1923-01-26 | Pekin, Nanking, Kanton | 4 | qing-hanedani 70 (%51) | 124 | 10 | 0 | 2 (0) |
| `KRONOLOJI_HINDISTAN` | 131 | 1290-06-13 → 1849-03-29 | Delhi, Agra, Lahor | 18 | babur-imparatorlugu 58 (%44) | 101 | 23 | 0 | 7 (0) |
| `KRONOLOJI_JAPONYA` | 71 | 1281-08-15 → 1923-09-01 | Edo, Kyoto, Nagazaki | 6 | meiji-japonya 29 (%41) | 62 | 9 | 0 | 0 |
| `KRONOLOJI_MISIR` | 120 | 1517-01-22 → 1915-01-14 | Kahire, İskenderiye, Akkâ | 4 | misir-kavalali 87 (%73) | 111 | 9 | 0 | 0 |
| `KRONOLOJI_OZBEK` | 73 | 1500-01-01 → 1920-09-02 | Buhara, Hokand, Semerkant | 3 | buhara 40 (%55) | 61 | 12 | 0 | 0 |
| `KRONOLOJI_ANADOLU` | 281 | 1063-01-01 → 1522-01-01 | Konya, Mardin, Kayseri | 6 | selcuklu 86 (%31) | 253 | 18 | 0 | 10 (2) |
| `KRONOLOJI_ARABISTAN` | 60 | 0897-01-01 → 1920-01-01 | Sana, Lahsa, Maskat | 4 | yemen-zeydi 24 = umman 24 (%40) | 43 | 10 | 0 | 7 (0) |
| `KRONOLOJI_BALKAN` | 177 | 1185-01-01 → 1923-07-24 | Atina, Cetinje, Tırnova | 7 | yunanistan 51 (%29) | 125 | 29 | 0 | 23 (0) |
| `KRONOLOJI_DOGU_AFRIKA` | 218 | 1270-01-01 → 1923-09-28 | Masavva, Zeyla, Mengo | 10 | habesistan 83 (%38) | 190 | 18 | 0 | 10 (0) |
| `KRONOLOJI_GUNEY_ASYA` | 153 | 1281-01-01 → 1923-10-29 | Katmandu, Tatta, İmphâl | 9 | racput 33 (%22) | 133 | 18 | 0 | 2 (0) |
| `KRONOLOJI_IRAN_ARDILLARI` | 155 | 1155-01-01 → 1603-01-01 | Tebriz, Şiraz, Sebzevâr | 8 | ilhanli 46 (%30) | 108 | 18 | 0 | 29 (1) |
| `KRONOLOJI_ITALYA_SEHIR` | 186 | 1281-01-01 → 1859-06-11 | Cenova, Ferrara, Siena | 3 | cenova 115 (%62) | 170 | 5 | 0 | 11 (1) |
| `KRONOLOJI_KUZEYAFRIKA` | 83 | 1196-01-01 → 1912-10-18 | Tilimsan, Tunus, Trablus | 5 | merini 23 (%28) | 65 | 12 | 1 | 5 (4) |
| `KRONOLOJI_ORTA_ASYA` | 205 | 1207-01-01 → 1922-04-01 | Kazan, Kaşgar, Tobolsk | 10 | kazak-hanligi 44 (%21) | 136 | 8 | 0 | 61 (17) |
| `KRONOLOJI_SIRBISTAN` | 35 | 1217-01-01 → 1918-12-01 | Belgrad, Semendire, Üsküp | 5 | sirbistan-prensligi 12 (%34) | 16 | 19 | 0 | 0 |
| **TOPLAM** | **2.084** | | | | | **1.698** | **218** | **1** | **167 (25)** |

### ② Tek-devlet mi — 15/15 ÇOK-DEVLETLİ
- Hiçbir dosyada tek künye maddelerin tamamını taşımıyor; en yüksek pay `misir` → `misir-kavalali` %73.
- ⚠️ "Pencere kapsıyor mu" tek başına ölçüt DEĞİL: uzun ömürlü ilgisiz künyeler dosyanın TAMAMINI kapsıyor
  (`ingiltere` 11 dosyada %100 · `venedik` 2 · `habsburg` 2 · `papalik` 1). Bu yüzden ③ sınavı dosyanın kendi
  aday ailesinde yapıldı.
- Dosya kökü `devletler.js`te (id + ad, normalleştirilmiş) TARANDI:
  - `misir` / `sirbistan` / `japonya` / `cin` → kök ZİNCİR halinde birden çok künye ("hanedanlar ayrı" ⇒ ÇOK);
  - `hindistan` → tek kök künyesi `ingiliz-hindistani` (1757+): yalnız 21/131 maddeyi kapsıyor, `taraflar`ta hiç geçmiyor;
  - öteki 9 dosyanın kökü hiçbir künyeye düşmüyor.
- Osmanlı'nın kendisi `DEVLETLER`de künye DEĞİL (yalnız `misir-eyaleti` · `sirbistan-eyaleti` · `bosna-eyaleti` ·
  `arnavutluk-osmanli`) ⇒ Osmanlı'ya ait maddelerin künye hedefi yok.

### ③/④ Madde başına aday künye dağılımı (A + B, pencere içi)
- **cin:** qing-hanedani 70 · ming-hanedani 42 · yuan-hanedani 12 · cin-cumhuriyeti 11
- **hindistan:** babur-imparatorlugu 58 · delhi-sultanligi 22 · maratha 8 · meysur 7 · sih-imparatorlugu 5 · behmeni 4 · golkonda 4 · gucerat-sultanligi 4 · bengal-sultanligi 3 · sur-hanedani 2 · afgan-durrani 2 · bicapur 2 · ahmednagar 2 · kesmir 2 · malva-sultanligi 2 · meysur-racaligi 1 · vijayanagara 1 · sind 1
- **japonya:** meiji-japonya 29 · edo-bakufu 21 · azuchi-momoyama 10 · muromachi 8 · kamakura 3 · kenmu 1
- **misir:** misir-kavalali 87 · misir-eyaleti 29 · memluk 4 · misir-sultanligi 1
- **ozbek:** buhara 40 · hive 18 · hokand 15
- **anadolu:** selcuklu 86 · karaman 51 · artuklu 43 · dulkadir 35 · aydin 29 · kilikya-ermeni 27
- **arabistan:** yemen-zeydi 24 · umman 24 · benihalid 4 · nebhani 1
- **balkan:** yunanistan 51 · karadag 36 · bosna-kralligi 20 · zeta 15 · bulgaristan-kralligi 14 · bulgar-carligi 11 · bulgaristan-prensligi 8
- **dogu_afrika:** habesistan 83 · adal 30 · somali 30 · svahili-sehirleri 28 · buganda 19 · evfat 12 · makdisu-sultanligi 2 · kaffa-kralligi 2 · cimma-sultanligi 1 · sidamo-kralliklari 1
- **guney_asya:** racput 33 · sind 32 · nepal 32 · travankur 21 · manipur 20 · babur-imparatorlugu 17 · ladak 13 · delhi-sultanligi 1 · meysur 1
- **iran_ardillari:** ilhanli 46 · serbedariler 24 · celayirli 21 · muzafferi 17 · kert 12 · incu 4 · lur-i-buzurg 1 · lur-i-kucek 1
- **italya_sehir:** cenova 115 · ferrara 36 · siena 24
- **kuzeyafrika:** merini 23 · sadi 22 · zeyyani 13 · hafsi 11 · trablusgarp-ocagi 8
- **orta_asya:** kazak-hanligi 44 · kazan 28 · sibir-hanligi 21 · nogay 14 · yakub-beg 12 · turkmen 11 · mogulistan 6 · astarhan 4 · cungar 3 · yarkent-hanligi 2
- **sirbistan:** sirbistan-prensligi 12 · sirbistan-nemanjic 7 · sirbistan-kralligi 7 · sirp-despotlugu 6 · sirbistan-eyaleti 6

(23 madde iki-üç taraflı; dağılım toplamı A+B'yi biraz aşar.)

### ⑤ Pencere dışı ya da künyesiz — 168 madde (A'da 0)
- **C — atıf pencere dışı: 1** — `kuzeyafrika` 1554-01-01 "Sâlih Reis Tilimsan'ı fethetti, hanedan sona erdi";
  0929 atfı `zeyyani`, künyenin `t`si öncesinde bitiyor.
- **E — atıfsız: 167.**
  - **142 aile künyesi pencerede** — bu bir ÜST SINIRDIR: kapsayan künyenin DOĞRU künye olduğunu söylemez.
    Örnek: `orta_asya` 1552-10-15 "Kazan'ın düşüşü" — `kazan` künyesi 1552-10-02'de bitiyor, onu kapsayan başka
    bir aile künyesi.
  - **25 aile künyesi YOK:**
    - orta_asya 17: Kazak/Alaş 1891-1919 Rus idaresi 7 · Kırgız 4 · Kalmuk 1890/1920 2 · Sinkiang 1884 1 ·
      kültür maddesi 3 (Ersarı 1314 · Kâşgar medresesi 1250 · Radloff 1885);
    - kuzeyafrika 4: Trablusgarp 1911-12 İtalyan işgali / Osmanlı;
    - anadolu 2: Malazgirt 1071 · Artuk Bey 1063 — `selcuklu` 1075'te başlıyor;
    - iran_ardillari 1: Luristan 1603 → Safevî;
    - italya_sehir 1: Este 1859 — `ferrara` 1859-01-01'de bitiyor.
- **E'nin dosya dağılımı:** orta_asya 61 · iran_ardillari 29 · balkan 23 · italya_sehir 11 · anadolu 10 ·
  dogu_afrika 10 · hindistan 7 · arabistan 7 · kuzeyafrika 5 · cin 2 · guney_asya 2.
  - balkan 23'ün çoğu Osmanlı dönemi Bulgar maddesi (1688-1878: Eksarhlık, Levski, Nisan İsyanı, 93 Harbi):
    `bulgar-carligi` 1396'da biter, `bulgaristan-prensligi` 1878'de başlar; aradaki Osmanlı'nın künyesi yok.
- **0929'un adını koyduğu künyesiz yapılar, bugün (id + ad taraması):**
  - hâlâ YOK: Kırgız · Oyrat · Alaş · Ya'rubî · Osmanlı Yemen'i · Korsika · Libya · Ceneviz kolonileri (ayrı künye);
  - artık VAR: `incu` · `buganda` · `habesistan` · `cungar` · `yakub-beg` · `benihalid` (Lahsa).

## 4. Karar için durum özeti (öneri DEĞİL)
- **15/15 dosya ÇOK-DEVLETLİ.** `KRONOLOJI_ID_OZEL` ile tek künyeye bağlamak hiçbirinde doğru değil: en iyi
  durumda (`misir`) maddelerin %27'si yanlış künyeye düşer.
- ÇOK yolu için veri **%81,5'te (1.698 / 2.084) diskte hazır**: `taraflar`, künyesiz 0, pencere dışı 0.
- 0929 atfıyla bu oran **%91,9**'a çıkar (+218).
- Kalan **168** (C 1 + E 167) yazarla/kaynakla çözülmeli; bunların 25'inin aday ailesinde künye YOK.
- **ÖLÇÜLMEDİ — bugün:** hedef künyelerin kendi kronolojisiyle aynı `t` mükerrerliği. 0929'da 15 dosyada 212 çift
  ölçülmüştü; bugünkü `t`+`b` dedupe bunları geçirir (W26 §1 ile aynı sınıf).
- "Hanedanlar ayrı" kararı gereği hiçbir künyenin genişletilmesi önerilmedi.

## 5. TSV — `denetim/KRONO-ESLENMEYEN-1006.tsv` (2.084 satır, UTF-8 BOM, sekme ayraçlı)
Sütunlar:
- dosya · sira · t · b
- taraflar · taraf_pencere (✓/✗/∅)
- kunye_alani
- atif_0929 · sinif_0929 · atif_0929_pencere
- aday_kunye · pencere (✓/✗) · sinif (A/B/C/E)
- E_aile_pencerede

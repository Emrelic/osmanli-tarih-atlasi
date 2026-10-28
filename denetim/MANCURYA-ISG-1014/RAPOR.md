# MANCURYA-ISG-1014 — Mançukuo'nun sonu 1945-08-17'ye çekildi, ardından gelen Sovyet işgali `isg:` olarak yazıldı

**Emre'nin kararı (14 Ekim 2026), seçenek (b):** `mancukuo` künyesi 1945-08-17'de biter
(dağılma ilânı; Nihon Daihyakka). 11 Mançurya noktasının `mancukuo` dönemi de o gün bitirildi.
Sonrasındaki Sovyet varlığı sahipliği değiştirmeyen `isg:` dönemi olarak yazıldı.

Ölçümün yeri: UMIT, worktree `agent-ad2683e4ec7c1da92`, taban `fc76e9d3` (origin/main ile fark 0).

## 🔴 Önce: düzeltilen dosya YAYINDA DEĞİL

`data/yer_yama_1923_1945.js` dosyasının başlığında **KARANTİNA** yazıyor (9 Ekim 2026).
Bu dosya `arac/girdi.py GIRDI_DOSYALARI`'nda yok, `index.html`'de de yok. Ölçtüm: 96 girdinin
hiçbiri bir `yer_yama` dosyası değil. Canlı veride (`yerlesimler_asya.js`, `yerlesimler_nokta_asya_0917.js`)
bu 11 noktanın hiçbirinde Mançukuo dönemi yok. Örneğin Harbin'in zinciri şöyle:
`cin-cumhuriyeti 1912-02-12 → 1949-10-01`.

Bundan üç sonuç çıkıyor:
- Bu işin yama dosyasındaki değişiklikleri haritayı ve `denetle`yi **bugün etkilemez.**
  Yama karantinadan çıkıp `_sahiplik_uygula` ile uygulandığında etkiler. Uygulayıcı `isg`yi tanıyor
  (`arac/_sahiplik_uygula.py:34`).
- Bu yüzden `denetle` çıkış 0, ama yeni `isg:` kırılmalarını **SORMADI.** 2i 237 kırılma saydı;
  bu işten gelen yeni kırılma yok. Ölçülemedi ≠ temiz.
- Karantina notu "gövde bugünkü main'e karşı YENİDEN ÜRETİLİR" diyor. Yeniden üretim bu 11 kaydı
  ezerse bu iş kaybolur. Yeniden üretecek oturum `MANCURYA-ISG-1014` damgalı `s:`/`isg:`/`ic_not`
  alanlarını korumalı.

Kronoloji maddeleri ise canlı. Değişmez 2'nin kapsamındaki `data/kronoloji_sinir_nokta2.js`'e
yazıldılar ve sitede görünürler (aşağıda §3).

## 1. Şehir tablosu

Kaynakların kısaltmaları:
- **GL7**: Glantz, *August Storm: The Soviet 1945 Strategic Offensive in Manchuria* (Leavenworth Papers 7, 1983).
  CGSC/CARL web baskısının Wayback kopyasından metin olarak okundu.
- **BSE**: BSE 3. bs. «Маньчжурская операция 1945» (Eronin; booksite.ru/fulltext/1/001/008/073/571.htm)
- **JL45 / JL46**: 吉林省编年纪事 (Jilin Eyalet Kütüphanesi), 1931-45 ve 1946-49 ciltleri (PDF)
- **KEES**: Keesing's Contemporary Archives, Haziran 1946 (Stanford PDF)
- **FRUS497 / FRUS368**: FRUS 1946 c. IX, d. 497 (SWNCC 291/1) ve d. 368 (5 Nisan 1946 tarihli Sovyet çekilme **planı**)
- **SHEN**: Shen Zhihua, 「斯大林与中国内战的起源（1945-1946）」 (aisixiang.com/data/24676.html)
- **CASS**: ÇSBA Yakın Tarih Enstitüsü, 「1946年春反苏运动述评」

| satır | şehir | `mancukuo` → `cin-cumhuriyeti` | Sovyet alınış (`isg f`) | kaynak | Sovyet çekilme (`isg t`) | kaynak |
|---|---|---|---|---|---|---|
| 7711 | Cehol (Chengde) | 08-31 → **08-17** | **bulunamadı** | BSE yalnız KMG'nin 18 Ağustos'ta Chengde'ye "çıktığını" (вышла к) yazıyor, alındığını yazmıyor | **bulunamadı** | — ⇒ `isg:` yazılmadı, `ic_not` beyanlı |
| 7713 | Mukden (Şenyang) | 08-31 → **08-17** | **1945-08-19** | BSE: hava indirmesi · JL45: Puyi havaalanında esir · GL7: ana kuvvet 21 Ağustos ("iki gün sonra") | **1946-03-12** | KEES «evacuated Mukden on March 12» · JL46 «12日全部撤离沈阳» (ÇELİŞKİ: CASS 8 Mart, SHEN'deki bildirim 13 Mart) |
| 7715 | Liaoyang | 08-31 → **08-17** | **bulunamadı** | GL7 ve BSE gün vermiyor | **bulunamadı** | — ⇒ `isg:` yazılmadı |
| 7717 | Cilin (Jilin) | 08-31 → **08-17** | **1945-08-19** | BSE · JL45 «8月19日：苏军空降长春、吉林» | **1946-04-14** | JL46 4月14日 «苏军自吉林市撤离回国» · FRUS368 planı "13-16 Nisan" ile uyumlu |
| 7719 | Ningguta | 08-31 → **08-17** | **bulunamadı** | GL7 yalnız Ningan'ın kuzeyinde Mudan geçişini anlatıyor (17-19 Ağustos) | **bulunamadı** | — ⇒ `isg:` yazılmadı |
| 7721 | Aigun | 08-31 → **08-17** | **1945-08-20** | GL7: Aihun mevzii 20 Ağustos'ta teslim oldu (öncü birlikler 11 Ağustos'ta karaya çıkmıştı, beyanlı) | **1946-05-03 ÜST SINIR** | SHEN · CASS · KEES: bütün Kuzeydoğu'dan çekilme tamam. Şehrin günü **bulunamadı** |
| 7723 | Harbin | 08-31 → **08-17** | **1945-08-18** | BSE: hava indirmesi · 15. Ordu 20 Ağustos'ta girdi (BSE, GL7) | **1946-04-25** | FRUS497 «the date of the Soviet evacuation» · SHEN «定于25日撤离» (ÇELİŞKİ: KEES 21 Nisan) |
| 7725 | Qiqihar | 08-31 → **08-17** | **1945-08-19** | GL7 «occupied ... Tsitsihar on 19 August» | **1946-04-25 YAKLAŞIK** | SHEN: Sovyet **bildirimi** 25 Nisan. Fiilî gün yok: FRUS368 planı 26/27 · Çin resmî basını 24 · KEES 28 |
| 7919 | Mergen (Nenjiang) | 08-31 → **08-17** | **1945-08-21** | GL7 «On 20 and 21 August they secured Nencheng and Peian». Hangi gün hangisi bilinmediği için üst uç alındı | **1946-05-03 ÜST SINIR** | SHEN · CASS · KEES. Şehrin günü **bulunamadı** |
| 7921 | Sanxing (Yilan) | 08-31 → **08-17** | **1945-08-19** | GL7 «On 19 August this force secured Sansing» | **1946-05-03 ÜST SINIR** | SHEN · CASS · KEES. Şehrin günü **bulunamadı** |
| 7923 | Chifeng (Ulanhad) | 08-31 → **08-17** | 1945-08-17 (bulundu) | GL7 «on 17 August occupied Chihfeng» | **bulunamadı** | 17. Ordu ertesi gün kıyıya yürüdü; garnizon ve çekilme kaynakta yok ⇒ `isg:` yazılmadı, `ic_not` beyanlı |

Sayılar:
- 11 noktanın 11'inde `mancukuo` 1945-08-17'de bitiyor ve `cin-cumhuriyeti` aynı gün başlıyor.
  Boşluk, çakışma ve sıfır uzunlukta dönem yok (betikle sınandı).
- 7 noktaya `isg:` yazıldı (`d:"sovyet-rusya"`). `kaynak` ve `ic_not` her birinde var.
  - 4'ünün iki ucu da şehir düzeyinde kaynaklı: Mukden, Cilin, Harbin, Qiqihar (Qiqihar'ın `t`si yaklaşık).
  - 3'ünün `t`si beyanlı üst sınır: Aigun, Mergen, Sanxing.
- 4 noktaya `isg:` yazılmadı: Cehol, Liaoyang, Ningguta, Chifeng. Nedeni her kaydın `ic_not`unda yazılı.
- Ardıl künye `cin-cumhuriyeti` (`f` 1911-10-10, `t` yok) 1945-08-17'yi kapsıyor; künye sınıflandırması gerekmedi.
  `sovyet-rusya` (1917-11-07 → 1991-12-26) `isg` pencerelerini kapsıyor ve `arac/renkler.py` BOYALAR'da
  tanımlı (satır 166, 722).
- `isg:` hiçbir noktada 17 Ağustos'tan önce başlamıyor. En erken başlangıç Harbin, 18 Ağustos.
- `isg t` 1945-09-02'den sonra. Kayıtların `s:` zinciri ise 1945-09-02'de bitiyor (yamanın ufku).
  İşgal zincirin ucunu aşıyor. Yama canlıya alınırken bu durum ayrıca ölçülmeli.

## 2. `devletler.js` 1945-08-31 "son" maddesi (satır 10553)

Madde silinmedi. Günü kaynağa göre **1945-08-19**'a çekildi, `tur` `son` yerine `isgal` oldu.
Metin şimdi şöyle: "Sovyet hava indirme birlikleri Mukden, Cilin ve Hsinking'e indi; … Puyi Mukden
havaalanında Sovyet askerlerince esir alındı".

Dayanaklar:
- Yamakawa Nihonshi Shō-jiten 「溥儀」 «45年8月19日瀋陽でソ連軍に逮捕され»
- JL45 «溥仪在沈阳机场被苏军俘虏»
- BSE: 19 Ağustos'ta Mukden'e hava indirmesi

ÇELİŞKİ: Britannica Kokusai Shō-kōmoku 16 Ağustos diyor. Bu çelişki `ic_not_t` alanına yazıldı.

Künyenin sonu 08-17 dağılma maddesidir; bu madde ondan iki gün sonraya düşüyor. Eski 08-31 maddesi
de pencerenin dışındaydı, `denetle` bunu ihlal saymıyor.

`data/kronoloji_cok_1923_1945.js` satır 7298'deki `ic_not_d` alanı "1945-08-31 maddesi" diyordu.
Yeni güne göre güncellendi.

## 3. Kronoloji maddeleri (Değişmez 2i)

🔴 Talimat maddeleri `data/kronoloji_cok_1923_1945.js`'e yazmayı söylüyordu, ama o dosya **Değişmez 2
kapsamında değil.** `denetle.olaylari_yukle()` yalnız `olaylar*.js` ve `kronoloji_sinir*.js`
dosyalarını okuyor. Ayrıca o dosyanın kapsadığı dönem 1945-09-02'de bitiyor. Bu yüzden 7 madde
Mançukuo'nun 1945-08-17 maddesinin hemen ardına, `data/kronoloji_sinir_nokta2.js` satır 85-91'e yazıldı.

Maddelerin ortak alanları:
- `tur:"isgal"`, `sinif:"isg"`
- taraflar: `sovyet-rusya` ve `cin-cumhuriyeti`. `mancukuo` taraflara konmadı, çünkü künyesinin
  penceresi 08-17'de kapanıyor ve madde orada görünmezdi.
- etikette `toprak-*` yok. Böylece Değişmez 2t bu maddeleri "kırılması yok" diye saymaz.

| t | madde | `yer_id` |
|---|---|---|
| 1945-08-18 | Harbin'e hava indirmesi, işgal başladı | Harbin |
| 1945-08-19 | Mukden, Cilin, Tsitsihar, Sansing alındı; Puyi esir alındı | Mukden (Şenyang) |
| 1945-08-20 | Aihun teslim oldu; Nencheng ve Peian 20-21 Ağustos'ta alındı | Aigun |
| 1946-03-12 | Sovyetler Mukden'i boşalttı | Mukden (Şenyang) |
| 1946-04-14 | Sovyetler Changchun ve Cilin'den çekildi | Cilin (Jilin) |
| 1946-04-25 | Sovyetler Harbin'den çekildi (Tsitsihar aynı günlerde) | Harbin |
| 1946-05-03 | Sovyetler Kuzeydoğu'dan çekilmeyi tamamladığını ilân etti (Port Arthur hariç) | — (`yer`: Mançurya) |

Yeni `isg:` kırılmalarının her biri bu maddelerden birinin 0 gün yakınında. Yama canlıya alındığında
2i'nin bunları kapatması gerekir. Bugün ölçülemiyor, çünkü yama karantinada.

## 4. Ölçüm

- `py arac/kodla.py coz-c data data/devletler_harita.js` → 0. `coz-c … donemler.js donem` → 0.
- `py arac/denetle.py` → **çıkış 0, "SONUÇ: temiz"**:
  - Değişmez 2: 679 kırılma, 0 açık
  - 2i: 237 kırılma, 1 açık (tavan 1)
  - 2t: 10 (tavan 13)
  - 2s: 190 (tavan 191)
  - Uyarı: karantinadaki yamayı ölçmüyor (§ başı).
- `py arac/renk_olc.py` → 0.
- `py arac/paketle.py yenile` → 30 paket. Değişen kaynak `devletler.js` (paket_05).
- `py arac/surum_damgala.py` → r12336.

## 5. Bulunamayanlar ve öneriler

1. Sovyet alınış günü bulunamadı: Chengde, Liaoyang, Ningguta.
   Çekilme günü bulunamadı: Chengde, Liaoyang, Ningguta, Chifeng, Aigun, Mergen, Sanxing.
   En olası kaynaklar şehirlerin 地方志 ciltleri (《辽阳市志》, 《宁安县志》, 《承德市志》, 《嫩江县志》, 《依兰县志》, 《爱辉县志》).
   Ağda açık metinleri bulunamadı.
2. **Emre kararı gerekiyor:** Aigun, Mergen ve Sanxing'de `isg t` = 1946-05-03 beyanlı bir üst sınır.
   Bu, 1945-08-31 ile aynı türden bir yaklaşıklık. Aralarındaki fark, bunun kaynaklı bir olayın günü
   olması ve beyan edilmiş olması. FRUS368'deki plan bu yerler için 10 Nisan diyor; o tarih bir plan.
   İki seçenek:
   - (a) Üst sınır kalsın.
   - (b) Bu üç `isg` kaldırılsın, işgal boşluk olarak beyan edilsin.
   Önerim (a), çünkü işgalin VARLIĞI kesin, belirsiz olan yalnız sonu.
3. Hsinking (Changchun) noktası (`yerlesimler_nokta2.js:30`) bu işin dışındaydı ve `isg:`
   almadı. Kaynaklar hazır: 19 Ağustos 1945 hava indirmesi (BSE, JL45), 14 Nisan 1946 çekilme
   (JL46, KEES). Ayrı küçük bir iş olarak eklenebilir.
4. Mevcut 1945-08-17 maddesindeki (`kronoloji_sinir_nokta2.js:84`) "Kızıl Ordu Hsinking'i aldı"
   cümlesi 17 Ağustos'a ait değil. Hava indirmesi 19 Ağustos'ta, ana kuvvet 21 Ağustos'ta (GL7).
   Bu iş o maddeye dokunmadı.

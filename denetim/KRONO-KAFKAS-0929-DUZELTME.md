# KRONO-KAFKAS-0929 — MEVCUT MADDELERDEKİ KUSURLAR

> 29 Eylül 2026 · ORTAK §5.3: mevcut maddeyi **silmedim, değiştirmedim**; karar
> koordinatörün (ve `data/kronoloji_gurcistan.js` için KRONO-BAGLAMA-0929'un).
> Her kalem: dosya · t · ne yanlış · kaynak · önerilen düzeltme · kesinlik.
> Kaynak gövdeleri: `denetim/KRONO-KAFKAS-0929-tdv-onbellek/` ve
> `denetim/KAFKAS-KORFEZ-0081-tdv-onbellek/gurcistan.txt`.

## A. OLGU HATASI — düzeltilmeli

**K1 · `data/kronoloji_gurcistan.js` 1744-01-01 — taht sırası TERS**
- Madde: *"Teimuraz II Kaheti, oğlu Erekle (II. Herakli) Kartli kralı oldu"* (kaynak: "bulunamadı").
- TDV `gurcistan` 3. bölüm: *"Nâdir Şah II. Teymuraz'ı Kartli'nin, oğlu Irakli'yi ise Kahet'in çarı olarak tanıdı. II. Teymuraz'ın ölümünden sonra 1762 yılında Irakli, Kartli ve Kahet'i bir idare altında birleştirdi."*
- Aynı dosyanın 1762-01-08 maddesi de doğru sırayı varsayıyor ("zaten hüküm sürdüğü Kaheti'ye Kartli'yi de katarak") ⇒ dosya kendi içinde çelişiyor.
- Öneri: b → "II. Teymuraz Kartli, oğlu Irakli (II. Herakli) Kaheti kralı oldu"; yer_id Tiflis ya da Zagem ikisi de savunulur; kaynak → TDV gurcistan 3. bölüm (yıl TDV'de yok: "1735-1744 isyanlarından sonra" — 1744 kaynaksız kalır, `gun:` notu). Kesinlik: yüksek.

**K2 · `data/kronoloji_gurcistan.js` 1555-05-29 Amasya — paylaşım yanlış anlatılmış**
- Madde d: *"batısı (İmereti ve Kartli'nin bir kısmı) Osmanlı, doğusu (Kaheti ve Kartli'nin çoğu) Safevî"*.
- TDV `gurcistan` 3. bölüm: *"İmeret, Dadyan (Megrel ve Svanet), Güryel, Daveli/Tao-eli Osmanlı Devleti'ne; Kartli, Kahet ve Mosuk ise Safevî Devleti'ne veriliyordu."* ⇒ Kartli'nin bir parçası Osmanlı'ya DÜŞMEDİ.
- Öneri: d'yi TDV listesine göre yeniden yaz. Kesinlik: yüksek.

**K3 · Tiflis'in Safevî'ye geçişi: üç kayıt, iki değer, biri uydurma gün**
- `data/kronoloji_gurcistan.js` 1603-10-21 *"Tiflis'in Şah Abbas tarafından geri alınması"* — kaynak yalnız TDV `tiflis`, o da *"1603'te Tiflis Şah Abbas'ın eline geçti"* (YIL). 21 Ekim Tebriz'in günüdür (komşu günü şartsız devralınmış, not yok) ⇒ sahte kesinlik (§4).
- `data/olaylar_ek6.js` 1606-01-01 *"Tiflis ve Gence'nin kaybı"* — TDV `gurcistan` 1606'yı **Lori ve Tumanıs** için veriyor, Tiflis için 1603.
- Harita Tiflis `d:` 1578-08-24→**1606**-01-01.
- Öneri: kronoloji_gurcistan maddesi t:"1603-01-01" + gun:"1603 (TDV gün vermez)"; olaylar_ek6 maddesinin başlığı/kaynağı çekirdek sahibince gözden geçirilsin; harita YERLESIM-ONERI Ö5. Kesinlik: orta (TDV'nin iki maddesi birbirini destekliyor).

**K4 · `data/kronoloji_gurcistan.js` 1632-01-01 Rostom — alıntı metni yalanlıyor**
- Madde b/d: *"Safevî idaresi Kartli'yi Tiflis vilayeti olarak yeniden örgütleyip … Rostom'u vali tayin etti"*.
- Alıntıladığı TDV cümlesi (`gurcistan` 3. bölüm): *"1632'de Tiflis vilâyeti olarak tekrar **Osmanlı** idaresiyle birleştirilmiş ve ihtida etmiş olan Rostom buraya vali tayin edilmişti"*. Madde TDV'yi alıntılayıp tersini söylüyor.
- Ayrıca TDV `tiflis`: *"1643'te Kartli'nin idaresine tayin edilen Rostom/Rüstem"* ⇒ TDV iki maddede iki yıl (1632/1643). Aynı dosyanın 1643 maddesi "Rüstem Han'ın Tiflis kalesini tahkim etmesi" bu ikinci cümleye dayanıyor.
- ⚠️ TDV `gurcistan`ın "Osmanlı" demesi ölçülemedi: Rostom'un bir Safevî atamasıyla Kartli'ye geldiği genel literatür bilgisidir ama bu turda akademik kaynakla DOĞRULANMADI. ⇒ Hüküm istiyorum: TDV'nin kendi cümlesi mi esas (§4 "çelişirse TDV esastır"), yoksa TDV `gurcistan`ın bu cümlesi bir dizgi hatası mı? Kesinlik: düşük — kaynak ikinci bir akademik eserle okunmalı.

**K5 · `data/kronoloji_cok_1dunya_B.js` 1920-01-01 — ay kaynakta var, madde yılın başında**
- Madde: *"İngilizler Batum'u boşalttı, şehre Gürcistan el koydu (Temmuz 1920)"*.
- TDV `acara`: *"İngilizler 1 Temmuz 1920'de Batum'u Gürcü işgaline terkedip 17 Temmuz 1920'de buradan tamamen çekildi"* ⇒ gün de var.
- Öneri: t:"1920-07-01", kaynak TDV acara. Kesinlik: yüksek. (Bu yüzden aynı olayı `kronoloji_cok_gurcistan.js`e yazmadım.)

## B. KAYNAK ALANI KUSURU — "atlas referans değil" (§4, D207)

**K6 · `data/kronoloji_gurcistan.js` — künyeyi/atlası kaynak gösteren maddeler; TDV karşılığı BULUNDU**
| t | mevcut `kaynak:` | TDV karşılığı |
|---|---|---|
| 1121-08-12 Didgori | devletler.js gurcistan künyesi | TDV `gurcistan` 2. bölüm: *"12 Ağustos 1121'de Didgori yakınlarında"* ✓ gün tutuyor |
| 1122-01-01 Tiflis başşehir | devletler.js künyesi | TDV `gurcistan` 2. bölüm: Didgori'den sonra *"Tiflis ve Ani'yi işgal ettiler. Tiflis Gürcistan'ın başşehri oldu"* (yıl: 1121 ile aynı cümle — 1122 kaynakta YOK) |
| 1184-01-01 Tamar | devletler.js künyesi | TDV `gurcistan` 2. bölüm: *"580'de (1184-85) Kraliçe Tamara devrinde"* (tahta çıkış olarak değil, dönem olarak) |
| 1783-07-24 Georgievsk | devletler.js künyesi | TDV `gurcistan` 3. bölüm *"(1783)"*; ⚠️ TDV `tiflis` *"24 Temmuz **1784**'te Georgeivsk'te"* — TDV iki maddede iki yıl; gün (24 Temmuz) yalnız 1784 cümlesinde. Takvim belirtilmemiş (Rus kaynaklı, muhtemelen Jülyen) |
| 1795-01-01 Tiflis tahribi | TDV gurcistan (yıl) | TDV `tiflis`: *"Eylül 1795'te düzenlediği seferde Tiflis'i tahrip etti"* ⇒ AY var |
| 1709-01-01 matbaa | "bulunamadı" | TDV `tiflis`: *"Vahtang zamanında 1709'da Tiflis'e matbaa getirildi"* ⇒ kaynak VAR |
| 1810-02-20 İmereti | devletler.js imereti künyesi + olaylar_ek16 | TDV'de yok (bulunamadı, `imereti` slug 302); atlas kaydı kaynak sayılmaz |
| 1921-02-25 Tiflis işgali | "atlasın kendi verisiyle 25 Şubat olarak sabitlenmiştir" | TDV `acara`: *"Gürcistan 25 Şubat 1921'de Bolşevikler tarafından işgal edilerek"* ⇒ gün KAYNAKLI oldu |
| 1921-03-16 Batum düşüşü | devletler.js GDC künyesi | TDV `acara`/`batum`: 16 Mart 1921 Moskova Antlaşması (Batum'un Gürcistan'a bırakılması); "Batum'un düşüşü" başlığı TDV'de böyle geçmiyor — ölçülemedi |
- Öneri: `kaynak:` alanları TDV maddesiyle değiştirilsin; 1122 ve 1184 için gün/yıl ayrımı `gun:` alanına yazılsın. Kesinlik: yüksek (alıntılar önbellekte).

## C. KAYNAK ÇELİŞKİSİ — hüküm gerekiyor

**K7 · Batum/Acara'nın Osmanlı'ya geçişi: 1479 · 1535 · 1578**
- `data/kronoloji_gurcistan.js` 1479-01-01 (TDV `gurcistan`: *"Acaristan (Batum) ve çevresi 1479'da fethedildi"*) · TDV `acara`: *"Acara'nın fethi 1535'te gerçekleşti"* · harita 1578-08-09 · TDV `batum`/`acara`: 1568-1574 Erzurum sancağı.
- Harita her iki TDV değeriyle de çelişiyor. Hangi TDV maddesi esas? YERLESIM-ONERI Ö9.

**K8 · Harita 1578-08-01 (Ahıska, Zazalo, Ts'q'altbila) — Çıldır'dan ÖNCE**
- TDV `ahiska`: atabegler *"Çıldır Savaşı (1578) sonunda Osmanlı idaresine girdiler"*; TDV `cildir-eyaleti`: *"9 Ağustos 1578'de … Çıldır Savaşı'nın hemen ardından Atabeg ülkesinin geri kalan kısımlarının fethi tamamlanmış oldu"*. ⇒ 1578-08-01 zaferden sekiz gün önce; kaynaksız. Değişmez 2s AÇIK listesinde duruyor (1578-08-01, 2 yerleşim).
- Öneri: 1578-08-09 (gün komşudan: Çıldır). Kesinlik: yüksek.

**K9 · Gümrü Antlaşması: 2 mi 3 Aralık 1920 mi?**
- `data/olaylar_ek5.js` 1920-12-03 = TDV `kars` (*"3 Aralık 1920'de imzalanan Gümrü Antlaşması"*). TDV `revan`: *"Gümrü Antlaşması ile birlikte (2 Aralık 1920)"*. Künye `ermenistan-demokratik-cumhuriyeti` t:1920-12-02; harita Revan sovyet-rusya 1920-12-02.
- TDV kendi içinde çelişiyor (§4 ⑥). Madde mevcut; yalnız `ic_not_d:`e çelişki notu önerilir. Değişmez 2s AÇIK: 1920-12-02 Revan → maddesi Gümrü'yü anıyor ama Revan'ın SOVYETLEŞMESİNİ anan kaynaklı madde yok — Ermenistan'da Sovyet idaresinin ilanı için TDV'de gün BULUNAMADI, bu yüzden madde yazmadım.

**K10 · Türkmençay Antlaşması: iki gün — büyük ihtimalle TAKVİM farkı**
- `data/kronoloji_iran.js` **1828-02-10** · `data/olaylar_ek7.js` ve `data/kronoloji_sinir_komsu.js` **1828-02-22**. 12 günlük fark 19. yüzyılda Jülyen-Miladî farkının tam kendisidir (10 Şubat eski üslup = 22 Şubat yeni üslup). Harita 1828-02-22.
- Öneri: ikisini aynı takvime çekmek ve `gun:` alanında takvimi yazmak (`VERI-YAPISI.md §59` takvim geleneği). Bu hesap bir TÜRETMEDİR, kaynak cümlesi değildir — uygulayan oturum kaynağında takvimi okumalı. Kesinlik: orta.

**K11 · TDV `ahiska`: "Haziran 1918'de Trabzon Antlaşması"**
- Haziran 1918'de Osmanlı ile Gürcistan arasındaki antlaşma Batum Antlaşması'dır (4 Haziran 1918 — `kronoloji_cok_1dunya_B.js`). TDV'nin bu cümlesi atlasa kaynak olarak taşınırsa "Trabzon" adı DÜZELTİLEREK taşınmalı ve not düşülmeli. Veri kusuru değil; ileride tuzak.

## D. KÜNYE — KUNYE-DUNYA-0929'a iletilecek (devletler.js'e DOKUNULMADI)

**K12 · Eksik künyeler (Kafkasya)** — hepsi TDV'de adıyla anılıyor:
| Yapı | Ömür (TDV) | Nerede anılıyor |
|---|---|---|
| Revan (Erivan) Hanlığı | 1747 → 1828-04-02 (ilga) | TDV `revan` |
| Kartli Krallığı | 1490 → 1762 (Kaheti ile birleşme) | TDV `gurcistan` ("üç krallık") — bugün `gurcistan` künyesi taşıyor |
| Samçhe (Meskheti) Atabekliği | 1268 → 1578 | TDV `ahiska`, `cildir-eyaleti` |
| Megrelya (Dadyan) | ? → 1803 (Rusya) / feshi Kırım Harbi sonrası | TDV `gurcistan` |
| Guria (Güryel) | ? → 1804 | TDV `gurcistan` |
| Abhazya Prensliği | ? → 1810 (Rusya) / 1864 fesih | TDV `sohum`, `gurcistan` |
- ⚠️ `kaheti-kralligi` künyesi yalnız 1578-08-09→1606-01-01; Kaheti krallığı 1490'dan 1762'ye yaşadı (TDV `gurcistan`). Künye Osmanlı tâbiliği penceresi gibi kurulmuş; sınıf ② ("aynı polity sürüyor → künyeyi GENİŞLET") adayı. Harita v: Zagem 1578-08-24 ile künye f 1578-08-09 arasında 15 gün fark var.
- `zend` künyesi 1751-01-01 başlıyor, harita Revan bölgesini 1747-06-20'den zend boyuyor (denetle.py "künye aşımı −3,5 yıl", 8 yerleşim) — sınıf ③ (ardıl yapı = Revan Hanlığı, künye yok).

## E. ÖLÇÜLEMEDİ
- 1771 Abhaz isyanı ve Sohum Kalesi'nin Abhazlarca alınması (TDV `sohum`): Abhazya künyesi olmadığı için madde YAZILMADI.
- Kars'a bağlı öteki yerleşimlerin (Sarıkamış, Kağızman, Arpaçay, Digor, Iğdır) 1919-1920 durumu: TDV `kars` yalnız şehri anıyor.
- Ermenistan'da Sovyet idaresinin ilanı (Aralık 1920): TDV'de gün yok; akademik kaynak bu turda okunamadı.

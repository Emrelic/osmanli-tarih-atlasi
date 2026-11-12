# GÜRCÜ KRALLIKLARI (Gürcistan · Kartli · Kaheti · İmereti · Samçhe · Guria · Megrelya · Abhazya · Svaneti) — 13 Kasım 2026 denetim

Ölçüm: makine UMIT · worktree `reverent-allen-bb8c39` · HEAD `b228a31ca` (oturum başı fotoğrafı; git koşturulmadı) · **salt okuma**
(tek yazılan dosya bu rapor). Yerleşim zincirleri `arac/girdi.py yukle(sessiz=True)` ile **bir kez** okundu (betik scratchpad'de).
TDV metinleri önceki işlerin önbelleğinden okundu: `denetim/KAFKAS-KORFEZ-0081-tdv-onbellek/{gurcistan,tiflis,ahiska}.txt`,
`denetim/KRONO-KAFKAS-0929-tdv-onbellek/{batum,sohum,cildir-eyaleti}.txt`.

Önceki işler (yinelenmedi): `denetim/ARASTIRMA-GURCU-0912.md` (Kartli/Kaheti künye penceresi; Karakoyunlu tâbiliği YOK hükmü) ·
`denetim/IRAN-DENETIM-1112.md` E7 (Tiflis yağması 1795 → TDV «Eylül 1795»; yan not: TDV `tiflis` Georgievsk'i «24 Temmuz 1784» der) ·
`denetim/IRAN-DENETIM-1111.md` (Tiflis 1723-06-23 / 1735-08-12 kırılmaları, TDV) · `denetim/OLCUM-IMERETI-1810.json` (Kutaisi
1810-02-20 O.S. → 1810-03-04 dönüşümü uygulanmış; doğru, yinelenmedi) · Poti 1640-1724 beyanlı boşluğu (`yerlesimler_ek28.js` Poti
`neden`, POSTIT-104) — doğru, yinelenmedi.

## ① Ne ölçtüm (sayılarla)

- **Künye: 12** — `gurcistan` (devletler.js:1212), `imereti` (:1239), `kaheti-kralligi` (:9618), `samtshe-atabegligi` (:10448),
  `kartli-kralligi` (:10524), `megrelya-prensligi` (:10541), `guria-prensligi` (:10559), `abhazya-prensligi` (:10570), `svaneti`
  (:18017), `abhazya-krallik` (:22878), `kaheti-hereti-kralligi` (:28991), `gurcistan-demokratik-cumhuriyeti` (:1254). Hepsi
  `arac/renkler.py` BOYALAR'da var.
- **Kronoloji: `data/kronoloji_gurcistan.js` 287 satır, 1250-1925 arası 37 madde** + künyelerin kendi kronolojisi (~60 madde).
- **Yerleşim zinciri: 25 kayıt** (Tiflis, Gori, Duşeti, Telavi, Zagem, Kutaisi, Poti, Zugdidi, Sohum, Batum, Ahıska, Ahılkelek, Ardahan,
  Artvin, Şavşat, Posof, Hanak, Hulo, Hopa, Sarp, Borçka, Kars, Revan, Gence, Şeki).
- **Künye → yerleşim kullanımı:** `abhazya-prensligi` **0**, `guria-prensligi` **0**, `svaneti` **0**, `megrelya-prensligi` 1 (Zugdidi),
  `samtshe-atabegligi` 1 (yalnız Ardahan 1467-1551), `kartli-kralligi` 2, `kaheti-kralligi` 2, `imereti` 2.
- **Jülyen/Gregoryen dönüşümleri sınandı: 8.** Doğru: 1783-08-04 (Georgievsk, +11), 1801-09-24 (+12), 1810-03-04 (+12), 1788-12-17
  (+11), 1853-09-11 (+12), 1722-08-24 (+11), 1828-02-22 (+12). Yanlış/eksik: 1798-01-11 (B9).
- **Ozurgeti, Mestia, Gremi** için yerleşim noktası **yok** (grep, 0 kayıt).

## ② Ne bulamadım / ölçemedim

- Ahıska (Paskeviç) ve Ahılkelek 1828 düşüş **günleri**: açılabilen akademik kaynakta gün okunmadı (yalnız Vikipedi türevleri — kullanılmadı).
- 1490 bölünme anlaşması için akademik kaynak: yalnız Vikipedi; Iranica 403 (KASA-1112 erişilemeyenler listesi).
- V. Giorgi'nin batıyı birleştirme yılı (1329/1330) ve Moğol tâbiliğinin bitiş yılı: TDV yılsız; GE «გიორგი V» maddesi açılmadı.
- I. Pavel manifestosu (18 Aralık 1800 O.S.) için birincil neşir (PSZ) açılmadı — `kartli-kralligi` 1800-01-01 maddesi yalnız yıl kaldı.
- Elaznauri (İmereti-Rusya, 1804) ve Guria 1804/1829 günleri: kaynak açılmadı.
- Ahıska'nın Safevî elinde kaldığı aralık (TDV yalnız «bir ara»).
- Değişmez 2'yi `denetle.py` ile ölçmedim (yasak); ±30 gün eşleşmesini elle, yalnız aşağıdaki kırılmalar için baktım.

## ③ Bulgular

### B1 — Sohum: Osmanlı'nın 1854-1856 ve 1877 fiilî dönüşleri haritada yok [SINIR]
- Kimlik: `data/yerlesimler.js:738` Sohum; `data/devletler.js:10583` `abhazya-prensligi` maddesi 1856-07-10.
- Atlasta: Sohum `s:` rusya 1810-07-11 → 1917-03-15 kesintisiz. Kronolojide «1856-07-10 Rusya Sohum'u **yeniden** işgal etti» var,
  ama zincirde geri alınacak bir Osmanlı dönemi yok (madde var, kırılma yok).
- Kaynak: TDV «Sohum» (önbellek): «Ruslar, Sohum Kalesi'ni 1854 yılı başlarında terketti» · «Osmanlı birlikleri Mayıs 1854'te Sohum'a
  girdi» · «10 Temmuz 1856'da Ruslar, Sohum'u tekrar işgal etti» · 1877: «12 Ağustos 1877'de Sohum boşaltıldı».
- Öneri: `isg:` (ya da `d:`) Osmanlı `{f:"1854-05-01", t:"1856-07-10"}` (f ay hassasiyeti, beyanlı) + kronoloji maddesi «Osmanlı birlikleri
  Sohum'a girdi (Mayıs 1854)». 1877 için Osmanlı girişinin günü kaynakta okunmadı (yalnız 2 Mayıs bombardımanı, 12 Ağustos tahliye) →
  ancak giriş günü bulununca `isg` 1877 yazılsın; o zamana dek beyan.

### B2 — Abhazya, Guria ve Svaneti künyeleri haritada hiç boyanmıyor; Sohum 1281-1578 `gurcistan` [EKSİK-DEVLET]
- Kimlik: `abhazya-prensligi` (devletler.js:10570, f 1463), `guria-prensligi` (:10559, f 1508), `svaneti` (:18017, f 1463): yerleşimde 0
  kullanım. Sohum `s:` gurcistan 1281-01-01 → 1578-08-09.
- Atlasta: Abhazya'nın merkezi 1463'ten sonra da «Gürcistan Krallığı» boyanıyor; Guria'nın (Ozurgeti) ve Svaneti'nin (Mestia) noktası yok
  → toprak İmereti/Megrelya/Batum peteklerine emiliyor.
- Kaynak: TDV «Sohum»: «1451'de Osmanlı Devleti'ne itaat eden … Sohum Kalesi 1454'te Osmanlı donanmasınca tahrip edilerek tekrar ele
  geçirildi» · «1578'de İran seferi esnasında Sohum eyaleti oluşturuldu». TDV «Gürcistan»: «üç krallığa … ve beş beyliğe ayrıldı».
- Öneri: Sohum `s:` 1463-01-01 → `abhazya-prensligi` (künye f'si ile aynı yıl, beyanlı); Ozurgeti ve Mestia noktası (mükerrer taraması
  ardından) `guria-prensligi` / `svaneti` zinciriyle. 1451/1454 Osmanlı tâbiliği ancak süresi kaynakla bulunursa `v:` olur.

### B3 — Ahıska atabeglik merkezi olduğu hâlde 1281-1578 `gurcistan` boyanıyor [SINIR]
- Kimlik: `data/yerlesimler.js:1123` Ahıska `s:` gurcistan 1281-01-01 → 1578-08-09; `yerlesimler_ek28.js:125` Ahılkelek aynı.
  `samtshe-atabegligi` (f 1268, t 1578-08-09) yalnız Ardahan'da (1467-1551) kullanılıyor; Ardahan 1281-1467 ise ilhanlı→celayirli→
  timurlu→karakoyunlu.
- Kaynak: TDV «Ahıska»: «atabegler, 1268-1578 tarihleri arasında bölgenin yönetimini ellerinde tuttular ve bu dönemde İlhanlı, Karakoyunlu,
  Akkoyunlu devletlerine bağlı kaldılar.»
- Öneri: Ahıska ve Ahılkelek `s:` 1281-01-01 → 1578-08-09 `samtshe-atabegligi`. Ardahan'ın 1281-1467'si de aynı künyeye (TDV `ahiska`'ya
  göre Ardahan atabeg toprağı). Üst devlet ilişkisi künye `tabi:` ile (İlhanlı/Karakoyunlu/Akkoyunlu; yıllar kaynaktan) yazılsın.

### B4 — Ahıska ve Ahılkelek 1828 Rus işgali haritada yok; Osmanlı 1829-09-14'e kadar sürüyor [SINIR]
- Kimlik: Ahıska `d:` 1578-08-09 → 1829-09-14; Ahılkelek `d:` aynı; madde `kronoloji_gurcistan.js:308` (Edirne 1829-09-14).
- Kaynak: TDV «Çıldır Eyaleti»: «1828 Osmanlı-Rus savaşı sırasında Ahıska ve Ahılkelek Rus işgaline uğradı ve 1829 Edirne Antlaşması'yla
  Ruslar'a terkedildi.»
- Öneri: KASA-1112 madde 5 (harita fiilî) gereği `isg:` rusya 1828 → 1829-09-14, işgal maddeleriyle birlikte. **Gün henüz kaynaksız**
  (bkz. ②); Kars'taki `isg` deseni örnek. Gün bulunmadan yazılmasın.

### B5 — Ahıska'nın Safevî dönemi: madde var, zincirde yok [SESSİZ-DEĞİŞİM'in tersi / EKSİK]
- Kimlik: `kronoloji_gurcistan.js:201` «1635 Ahıska'nın Osmanlı tarafından Safevîlerden geri alınması»; Ahıska `d:` 1578-1829 kesintisiz.
- Kaynak: TDV «Ahıska»: «Bir ara Safevîler'in eline geçen şehir, 1635'te Osmanlılar tarafından geri alındı.» TDV «Çıldır Eyaleti»:
  «1634-1635'te bir kısım sancakları Safevîler'in hücum ve tahribatına uğradı» · «Ahıska'nın 1639 Kasrışîrin Antlaşması'yla Osmanlı
  idaresinde olduğu kabul edildi.»
- Öneri: başlangıç kaynakta yok ⇒ zincire dokunulmaz; madde metnine «Safevî elinde kalış aralığı kaynakta yok» beyanı. (Karar: ④-c.)

### B6 — Batum'un Rusya'ya fiilî devri 7 Eylül 1878; Batum sancağının öteki yerleşimleri Ayastefanos (1878-03-03) ile kırılıyor [TARİH-HATA]
- Kimlik: Batum `d:` → 1878-07-13 (Berlin), `s:` rusya 1878-07-13. Hulo, Sarp, Artvin, Borçka, Şavşat, Posof, Hanak `s:` rusya
  **1878-03-03**. Ardahan `s:` rusya 1878-07-13 (isg 1877-05-17).
- Kaynak: Muammer Demirel, «Artvin ve Batum Göçmenleri (1877-1878 Osmanlı-Rus Savaşı'ndan Sonra)», *TAED* 40 (2009), s. 317-340
  (DergiPark article-file/33456; PDF okundu): «Ruslar, 7 Eylül 1878 tarihinde Batum'a girmişlerdir» (dpn. 4); aynı makale Batum sancağının
  savaşta işgal edilmediğini söyler. Destek: *The Spectator* 31 Ağustos 1878, s.1 (Rus girişinin Eylül'e ertelendiği; başlık okundu).
  TDV «Batum»: «1878 Berlin Antlaşması'yla serbest liman olarak Rusya'ya bırakıldı».
- Öneri: Batum + Hulo, Sarp, Artvin, Borçka, Şavşat (işgal edilmemiş Batum sancağı) `d:` t ve `s:` rusya f → **1878-09-07**; kronolojiye
  ikinci madde «Rus kuvvetleri Batum'a girdi (7 Eylül 1878)» (Berlin 13 Temmuz ile arası 56 gün > 30 ⇒ KASA-1112 madde 4: iki madde).
  Ayastefanos imzası hiçbir yerde fiilî devir değildir. Posof/Hanak (Ardahan sancağı, 1877'den işgalde) Ardahan desenine (`isg` +
  1878-07-13) çekilsin; Kaynak için ikinci bağımsız akademik teyit (Rusça gün 26 Ağustos O.S.?) **aranmadı** — gün tek makaleye dayanır.

### B7 — Batum 1479 fethi kronolojide var, zincirde 1578'e kadar `gurcistan` [SESSİZ-DEĞİŞİM'in tersi]
- Kimlik: `kronoloji_gurcistan.js:123` «1479 Acaristan (Batum ve çevresi) Osmanlı tarafından fethedildi» (TDV); Batum `s:` gurcistan
  1008 → 1578-08-09 (gün Çıldır Savaşı'ndan, Batum'la ilgisi yok); `v:` Güryel tâbi 1555-1578.
- Kaynak: TDV «Gürcistan»: «Acaristan (Batum) ve çevresi 1479'da fethedildi». TDV «Batum»: «XV. yüzyılın sonlarında Osmanlılar tarafından
  alınan Batum bir ara elden çıktıysa da daha sonra tekrar fethedildi» · «1568-1574 yılları arasında Erzurum'un bir sancağı».
- Öneri: en az `d:` Osmanlı **1568-01-01** (TDV: Erzurum sancağı — yıl) ile 1578-08-09 kırılmasının yerine geçsin; 1479-«bir ara» aralığı
  ④-d'de karar. Sohum (1578-08-09) aynı «Çıldır günü» devralmasını taşıyor; TDV yalnız yıl veriyor ⇒ `1578-01-01` + beyan.

### B8 — «1490 bölünmesi» TDV'ye atfediliyor ama TDV yıl vermiyor; aynı olay üç farklı yılda [KAYNAKSIZ · ÇELİŞKİ]
- Kimlik: `kronoloji_gurcistan.js:129, :135, :141` (1490-01-01, kaynak «gurcistan (TDV …)»); `devletler.js:1223` gurcistan 1490 maddesi;
  `imereti` f 1490; Kutaisi/Poti kırılması 1490. Buna karşılık Tiflis/Gori/Duşeti kırılması **1484** (kartli f, Iranica), Telavi/Zagem
  **1492** (kaheti f, EB1911).
- Kaynak: TDV «Gürcistan» önbelleğinde «1490» **0 geçiş**; cümle: «Fakat daha sonra Gürcistan üç krallığa (Kartliya, Kahetya, İmeretiya) ve
  beş beyliğe ayrıldı» (yılsız). `ARASTIRMA-GURCU-0912.md` §② «1490'larda» alıntısı TDV metninde yok.
- Öneri: üç maddenin `kaynak:`ı «TDV yılsız; 1490 bulunamadı» diye düzeltilsin; tarih kararı ④-a.

### B9 — II. Erekle'nin ölümü Jülyen günüyle yazılmış: 1798-01-11 → 1798-01-22 [TAKVİM]
- Kimlik: `kronoloji_gurcistan.js:276` `t:"1798-01-11"`, kaynak «bulunamadı».
- Kaynak: Gürcü Ansiklopedisi «ერეკლე II» (G. Maisuradze; georgianencyclopedia.ge/ka/form/10886): «11. I. 1798» (tek gün, eski
  takvim — aynı ansiklopedi Georgievsk'i «24 ივლისს (4 აგვ.)» diye Jülyen-önce verir). Büyük Sovyet Ansiklopedisi metni (booksite.ru
  aynası): «11 (22).1.1798». **Çift teyit.**
- Öneri: `t:"1798-01-22"`, `ic_not_takvim:"Jülyen 11 Ocak 1798 = Gregoryen 22 Ocak 1798 (GE Maisuradze; BSE)"`, kaynak alanı doldurulsun.
  Harita kırılması yok.

### B10 — 1762 birleşmesi: kronoloji 1762-01-08 (TDV'ye atfen gün), künye/zincir 1762-01-01 [KAYNAKSIZ · TAKVİM]
- Kimlik: `kronoloji_gurcistan.js:258` `t:"1762-01-08"` (kaynak TDV gurcistan — TDV yalnız «1762 yılında»); `devletler.js:1226`,
  `:10535`, kaheti t, kartli→gurcistan kırılması Tiflis/Gori/Duşeti/Telavi/Zagem 1762-01-01.
- Kaynak: GE «Teimuraz II» (georgianencyclopedia.ge/en/form_eng/921, arama özeti): Teymuraz II 8 Ocak 1762'de Petersburg'da öldü
  (Rus sarayında ⇒ büyük olasılıkla Jülyen; Gregoryen 19 Ocak — **dönüşüm benim hesabım, kaynakta yok**).
- Öneri: 8 Ocak günü TDV'den değil ölüm gününden geliyor ⇒ `kaynak:` GE'ye çevrilsin. Takvim teyidi (ikinci kaynakta «8 (19)») bulunursa
  madde + beş yerleşim kırılması + iki künye ucu birlikte 1762-01-19'a taşınsın; bulunmazsa 1762-01-01 (yıl) + beyan.

### B11 — Tiflis'in Şah Abbas'a geçişi: madde 1603-10-21, zincir 1603-01-01 [KAYNAKSIZ · ÇELİŞKİ]
- Kimlik: `kronoloji_gurcistan.js:183` `t:"1603-10-21"` (kaynak «tiflis (TDV)»); Tiflis/Gori `d:` t 1603-01-01, Zagem/Telavi `v:` t
  1603-01-01; `devletler.js:10533` kartli maddesi 1603-01-01.
- Kaynak: TDV «Tiflis»: «1603'te Tiflis Şah Abbas'ın eline geçti»; TDV «Gürcistan»: «1603'te Şah I. Abbas Tiflis şehrini Osmanlılar'dan
  geri alıp…» — ikisi de yalnız yıl. 21 Ekim günü hiçbir okunan kaynakta yok.
- Öneri: `t:"1603-01-01"` + «yalnız yıl» beyanı (zincirle aynı gün; tarih uydurma yasağı).

### B12 — Georgievsk iki ayrı günde: `kartli-kralligi` 1783-01-01, `gurcistan` + kronoloji 1783-08-04 [ÇELİŞKİ]
- Kimlik: `devletler.js:10536` (1783-01-01, «TDV yalnız yıl») · `:1227` ve `kronoloji_gurcistan.js:264` (1783-08-04, Gürcüce + Rusça çift
  teyit).
- Öneri: kartli maddesi `t:"1783-08-04"` + aynı `ic_not_takvim`. TDV «Tiflis»'in «24 Temmuz 1784»ü (IRAN-1112 E7 yan not) TDV
  «Gürcistan»ın «1783»ü ile çelişir; Jülyen günü doğru, yıl hatalı ⇒ `ic_not`ta beyan, değişiklik yok.

### B13 — Kronoloji odakları yanlış yerde: Kiev, Bila Tserkva, «Gürcistan», Duşeti [ÇELİŞKİ]
- Kimlik: `devletler.js:10567` Guria 1804 → `Kiev`; `:10579`, `:10580` Abhazya 1808 / 1810-02-17 → `Kiev`; `:10584` Abhazya 1864 →
  `Kiev`,`Bila Tserkva`; `:10576` Abhazya 1463 → `"Gürcistan"` (yerleşim adı değil); `:10530-10539` Kartli'nin 7 maddesi → `Duşeti`
  (Aragvi eristavlığı; Kartli başkenti Tiflis); `:10568` Guria 1829 → `Edirne` (antlaşma yeri, kabul edilebilir).
- Öneri: Guria → Batum (Ozurgeti noktası açılana dek, beyanlı); Abhazya → Sohum; Kartli → Tiflis. `py arac/odak_olc.py` sonrası yeniden ölç.

### B14 — 1281'de iki Gürcü krallığı vardı (batı bağımsız, doğu Moğol tâbisi); atlas tek `gurcistan` gösteriyor [EKSİK-DEVLET]
- Kimlik: Kutaisi `s:` gurcistan 1281-1490; Tiflis `s:` gurcistan 1281-1484; `gurcistan` künyesinde `tabi:` yok, 1259/1330 maddesi yok.
- Kaynak: GE «დავით VI ნარინი» (georgianencyclopedia.ge/ka/pdf-export/27213, arama özeti): 1259 ayaklanması; 1262'den «fiilen batı
  Gürcistan (İmereti) kralı kaldı»; «Gürcistan'daki Moğol egemenliği [batıya] uzanmıyordu»; Kutaisi'de tutundu. TDV «Gürcistan»:
  «1243'te Büyük Han'ı resmen metbû tanıdı» · «Kral V. Giorgi, İlhanlılar'ın son dönemindeki karışıklıklardan istifade ederek
  Gürcistan'daki Moğol hâkimiyetine son verdi» (yılsız).
- Öneri: yeni künye `bati-gurcistan-kralligi` (f 1259 YIL, t = V. Giorgi'nin Kutaisi'yi alışı — yıl GE'den okunacak); Kutaisi 1281 → t.
  `gurcistan` künyesine `tabi:[{ust:"ilhanli", f:"1281-01-01" (atlas başlangıcı), t:<V. Giorgi>}]`. Bitiş yılı okunmadan uygulanmasın.

### B15 — Megrelya: künye `f`/`not` çelişkisi ve Zugdidi `v:` aralığı TDV'nin tersine [ÇELİŞKİ]
- Kimlik: `devletler.js:10542-10545` f `1555-05-29`, ama `not`: «f = … ilk kaynaklı gün (1578 tâbilik bildirimi)»; `yerlesimler_nokta2.js:55`
  Zugdidi `v:` Osmanlı tâbi 1555-05-29 → **1578-08-09**.
- Kaynak: künyenin özeti ve TDV «Gürcistan»: 1555 Amasya'da Dadyan Osmanlı payında; «Tiflis'in fethinden sonra İmeret ve Kahet
  yöneticileri Osmanlılar'a itaatlerini bildirdiler» (1578). Tâbilik 1578'de **biter** değil, sürer.
- Öneri: `not` f=1555 ile uyumlu yazılsın; Zugdidi `v:` t'si 1578'de kesilmesin — Kutaisi `v:` deseni gibi Rus himayesine (1803, TDV yıl)
  kadar uzatılsın. 1857 sonu (Rus idaresi) ile 1867 resmî ilga ayrı madde olarak `ic_not`ta (kaynak aranmalı).

### B16 — İmereti ve Megrelya maddeleri akademik olmayan kaynaklara dayanıyor [KAYNAKSIZ]
- Kimlik: `devletler.js:1247-1249` (Britannica + travelguide.ge, imereti.gov.ge), `:10547-10556` (royalark.net, 9 madde).
- Öneri: CLAUDE.md kaynak kuralı (popüler site/turizm/şecere sitesi yok) ⇒ bu maddeler `kaynak:` «teyitsiz» damgası alsın; GE
  (Gürcü Ansiklopedisi) karşılıkları (Solomon I, Katsia II Dadiani, Levan V, David Dadiani) ile değiştirilsin. Hresili 1757-12-14 ve
  Katsia 1788-12-17 günleri Jülyen/Gregoryen bakımından da GE'den sınanmalı.

## ④ Karar gereken — Emre'ye öneriyle

- **a) Gürcistan'ın bölünme yılı (B8).** Seçenekler: (1) Iranica'nın kademeli tarihleri — Kaheti 1465, Kartli 1484 (atlas zaten Kartli'de
  kullanıyor; Iranica 403, yalnız arama özeti); (2) 1490 resmî bölünme (yalnız Vikipedi; TDV yılsız). Öneri: tek kaynak ilkesiyle
  değişiklik yapmamak, ama üç ucu (1484/1490/1492) **beyanla** tutmak; EMRELİC'te açık Iranica oturumuyla «Kakheti», «Kartli», «Imereti»
  maddeleri okununca birleştirmek.
- **b) Abhazya isyanı 1771 (B1-B2).** TDV «Sohum»: Abhazlar «1771'de … Sohum Kalesi'ni kuşatarak ele geçirdiler»; dönüş günü/yılı yok.
  Öneri: zincire yazmamak, kronoloji maddesine «Osmanlı'nın kaleye dönüşü kaynakta yok» beyanı.
- **c) Ahıska'nın Safevî aralığı (B5).** Öneri: kaynak bulunana dek dokunma; aday kaynak — Kırzıoğlu, *Osmanlılar'ın Kafkas-Elleri'ni Fethi*
  (TTK 1976) ve Svanidze, *Çıldır Eyaleti Cebe Defteri* (Tiflis 1979) — TDV'nin kendi bibliyografyası.
- **d) Batum 1479-1568 (B7).** TDV iki maddede fethi verir, «bir ara elden çıktı» der, süre yok. Öneri: 1568'den Osmanlı `d:`; 1479-1568
  için `v:`/`d:` yazmamak, maddeye beyan.
- **e) Kartli-Kaheti'nin Safevî tâbiliği (1603/1614-1723, 1736-1747).** Atlas `kartli-kralligi`ni bağımsız boyuyor; `tabi:` yok. Tiflis
  1736-1747 `afsar`, aynı yıllarda Telavi `kaheti-kralligi`. `BULGU-GURCISTAN-0034.md` H-0023 bunu tasarım kararı olarak bırakmıştı; artık
  künye `tabi:` modeli var (Revan Hanlığı örneği, `devletler.js:10462`). Öneri: `kartli-kralligi` ve `kaheti-kralligi`ye `tabi:` (Safevî /
  Afşar) — yıllar TDV «Tiflis»ten (1632 Rostom valiliği, 1735-08-12) — ve Telavi'nin 1735-1747'sinin Tiflis'le uyumlanması; ikisi de
  kaynakla ayrıca sınanmalı.

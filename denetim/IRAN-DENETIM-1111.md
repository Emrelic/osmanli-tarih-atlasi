# İRAN DENETİMİ — 11 Kasım 2026 (DENETIM-1111)

Kapsam: İlhanlı (1281) → ardıl beylikler (Çobânî, Celâyirli, Muzafferî, İncû, Serbedârî, Kert, Lür, Gîlân, Mâzenderân, Hürmüz,
Sîstan, Müşa'şa') → Timurlu → Karakoyunlu → Akkoyunlu → Safevî (1501) → Hotakî → Afşar → Zend → Kaçar → Pehlevî (1925) →
İran İslâm Cumhuriyeti (1979). Yalnız denetim: `data/` altında hiçbir dosya değişmedi.

**Ölçüm yeri:** makine **UMIT** (`COMPUTERNAME`; 1 Kasım kararıyla UMIT'e atlas işi verilmez — bu tur oraya açıldı, bilginize),
worktree `reverent-allen-bb8c39`, HEAD `7a3659d54`, `origin/main` ile 0 fark (ölçüm anında). Makine belleği tükenmişti
(16 GB'ın ~49 MB'ı boş): `kodla.py coz-c` MemoryError verdi, `denetle.py` koşusu yarıda kaldı; koordinatör oturumun talimatıyla
ağır komut koşturulmadı. **Üretilmiş harita (bölge/petek, Değişmez 8) ÖLÇÜLMEDİ** — bulgular girdi verisi (`s:`/`d:` dönemleri)
ve kronoloji üzerindendir.

**Yöntem:** `arac/girdi.py yukle` + `oku_devletler` ile İran zinciri çıkarıldı: 31 künye, `s:`te bu künyelerden biri geçen
335 yerleşim, 1919 kırılma (271 gün×sahip grubu). Her grup için Değişmez 2 evreninde (`olaylar*.js` + `kronoloji_sinir*.js`,
7702 madde) ±30 gündeki en yakın maddeler döküldü: **12 grup tamamen maddesiz**, kalanların alâkası dört alt ajanca elle
okundu (çoğu "VAR" alâkasız madde ile karşılanıyor). Bölüm 2 ayrıca 149 yerleşimin etkin sahip zincirini (d: > isg: > v: > s:)
hesapladı. Yöntem sınırı: kırılma çiftleri `s:` yazılış sırasıyla çıkarıldı (tarih sırası değil) — "önce→sonra" çifti bazen
yanıltıcıdır; `d:` pencereleri ilk çıkarımda yoktu (Bölüm 2'de düzeltildi).

**12 Kasım eki:** 403 yüzünden açık kalan 12 sorunun 10'u Iranica tarayıcıdan okunarak kapatıldı — raporun SONUNDAKİ EK'e bakın (Şiraz 1792 yeni bulgu; Kaçar kuruluşu, Zend sonu, Mahabad TDV–Iranica çelişkisi).

**Kaynak durumu (11 Kasım):** TDV İslâm Ansiklopedisi birinci dayanak (onlarca madde GET ile okundu). **Encyclopaedia Iranica ve
Britannica bütün denemelerde 403 verdi — çekilemedi**; Iranica'ya dayanan her gün "teyitsiz" işaretlidir. CGIE (cgie.org.ir)
ve Dâneşnâme-i Cihân-ı İslâm bu turda kullanılamadı. Vikipedi dayanak alınmadı.

## Özet — en önemli bulgular

| # | Bulgu | Sınıf | Etki | Öneri |
|---|---|---|---|---|
| 1 | Zend dönemleri 1747-06-20'de başlıyor, künye 1751 (TDV "Zendler": Kerim Han'ın yükselişi 1751 başı) — 103 yerleşim | HAYALET | 1747-1751 bütün İran yanlış renkte | 1747-06-20→1751-01-01 arası `afsar` (Âdil Şah/İbrahim/Şâhruh), Zend 1751'den (B3.1) |
| 2 | Hotakî dönemi haritada yok: İsfahan/Kâşân/Şiraz/Kirman 1503-1736 kesintisiz Safevî | SESSİZ-DEĞİŞİM | Kronoloji "İsfahan düştü" diyor, harita göstermiyor | `galzay` 1722-11-10 → 1729-11-16 (TDV) (B2.1) |
| 3 | 1469-01-01 toplu Karakoyunlu→Akkoyunlu kırılması (95 yerleşim) alâkalı maddesiz; Bağdat üç ayrı günde | SESSİZ-DEĞİŞİM / ÇELİŞKİ | | İran 1469-04-01 (TDV Şevval 873), Irâk-ı Arab 1469-12-19 (B1.3); Van havzası 1467-01-01 → 1467-11-10 (B1.4) |
| 4 | Çobânîler haritada yok; Tebriz/Azerbaycan 1340'tan Celâyirli (82 yerleşim) — TDV: Üveys Tebriz'i 1358'de aldı | EKSİK-DEVLET / SINIR | | 1340-1357 `cobaniler` (B1.1); Fars 1353'e dek `incu` (B1.2) |
| 5 | Kaçar: künye f 1789-03-21 kaynaksız; Mâzenderan/Gîlân/Tahran 1794'e dek Zend, 103 yerleşim tek günde Kaçar'a | TARİH-HATA / SINIR | | f = 1786-03-12 (TDV: 11 Cemâziyelevvel 1200), kademeli geçiş (B3.3-B3.4); Zend sonu 1794-01-01 değil (B3.2) |
| 6 | `iran` künyesi `t:"2026-08-07"` — kayıt yazım günü, kapanış değil | TARİH-HATA | Yaşayan devlet "bitmiş" | `t` kaldırılsın (B4.2) |
| 7 | 1923-10-29 ufuk kesiği: Bacirge (Esendere) 1923'ten İran; Culfa, Astara, Zerenc yanlış zincirde | SINIR | | Bacirge `turkiye-cumhuriyeti`; Zerenc 1872/1905 hakemliği (B4.1, B4.4, B3.9 — aynı bulgu iki bölümde) |
| 8 | Türkmençay `kronoloji_iran.js:296` Jülyen günüyle 1828-02-10 | TAKVİM | | 1828-02-22 + `ic_not` (B3.10) |
| 9 | Bağdat 1623 (madde 1623-11-28; TDV iç kale 11-12 Ocak 1624) ve 1534 (iki gün: 11-28 / 12-04) | ÇELİŞKİ | ~25 Irak yerleşimi | 1624-01-12; 1534-11-28 (TDV) (B2.2, B2.3) |
| 10 | Gîlân SSC, Azerbaycan Millî Hükûmeti künyeli ama hiçbir yerleşimde yok; Mahabad künyesi yok; 1941 işgali yok | EKSİK-DEVLET | | (B4.5, B4.6) |

Ayrıca: Değişmez 2 evreninde tamamen maddesiz 12 kırılma grubu (Timur 1370 tahtı — 21 yerleşim; Delhi 1398/1399; Kâbil-Gazne
1504; Belh 1506; Kandehar 1622/1649/1709; Dera Gazi Han 1739/1747; Merv 1785) — ayrıntı bölümlerde.

## Sayılar (birleşik)

- Künye: 31 (zincir + `bolge:"iran"` 1281 sonrası) tam; ayrıca Bölüm 3'te 13 Kafkas hanlığı künyesinin f/t'si.
- Kronoloji maddesi: ~350 okundu (B1 ~200, B2 ~75, B3 ~45, B4 ~30).
- Yerleşim: 335'inin zinciri çıkarıldı; ~290'ı tek tek okundu (B1 ~75, B2 149, B3 ~45, B4 ~20).
- Kırılma grubu: 271'in hepsi ±30 gün evreninde ölçüldü; 12 maddesiz; alâka elle okundu (B1 77, B2 73, B3 55, B4 18).
- **Bulgu: 64** (B1 16 · B2 17 · B3 17 · B4 12 · 12 Kasım teyit eki +2; sondaki EK'e bakın); B3.9 ile B4.1/B4.4/B4.10 aynı 1923 kesiğidir.
- Ölçülemedi: üretilmiş harita (bellek); `denetle.py` tam koşusu; Iranica/Britannica (403); CGIE/Dâneşnâme; bölüm sonlarındaki
  listeler.

---



---

# Bölüm 1 — İran 1281–1501 denetimi

Ölçüm: UMIT, worktree `reverent-allen-bb8c39` (salt okuma), scratchpad çıkarımları (kunyeler.json, yerlesimler.json,
kirilmalar.tsv, d2_yakin.tsv, hayalet.tsv). Kaynaklar 11 Kasım 2026'da çekildi. Iranica (iranicaonline.org) **403 döndü →
çekilemedi**. Iranica'ya dayanan her şey "doğrulanmadı" diye işaretlendi.

---

### B1.1 — Tebriz ve Azerbaycan 1340–1357 arasında Celâyirli gösteriliyor; Çobânîler haritada yok  [SINIR / EKSİK-DEVLET]
- Kimlik: `cobaniler` (devletler.js:18239, f 1335-11-30, t 1357-01-01). **s: içinde 0 yerleşimi var**, BOYALAR'da tanımlı.
  Kırılma: 1340-01-01 ilhanli→celayirli, **82 yerleşim** (Tebriz, Erdebil, Sultâniye, Merâga, Hoy, Merend, Nahçıvan, Revan, Gence,
  Hemedan, Bağdat, Musul…). Tebriz: celayirli 1340-01-01..1386-01-01.
- Atlasta: Azerbaycan, Celâyirli'nin kuruluş günü olan 1340'tan başlayarak Celâyirli. Atlasın kendi `cobaniler` künyesi ise
  Çobânîler'in Tebriz'i 1338–1357 arasında tuttuğunu yazıyor (kronoloji 1338/1342/1343/1357, odak_yer Tebriz).
- Kaynak: TDV «Celâyirliler» (islamansiklopedisi.org.tr/celayirliler): «Üveys 1358'de Azerbaycan ile Tebriz'i … ele geçirerek».
  TDV «İlhanlılar»: kukla hanlar iki kola ayrılıyor, biri Hasan-ı Büzürg'ün (Bağdat), öteki Hasan-ı Kûçek'in (Tebriz).
  `cobaniler` künye kaynağına göre (TDV, Ebû Said/İran): Melik Eşref 758/1357.
- Öneri: Azerbaycan grubunun (Tebriz, Erdebil, Merâga, Hoy, Merend, Sultâniye, Zencan, Nahçıvan, Ahar, Sarâb, Miyâne, Urmiye…)
  dönemi şöyle olmalı: `cobaniler` 1340-01-01..1357-01-01 → (1357'de Canibek: altinorda ya da kısa bir __BOSLUK__) →
  `celayirli` 1358-01-01. Bağdat ve Irak-ı Arab 1340'tan Celâyirli kalır. Yeni maddeler gerekiyor: "Çobânîler Tebriz'de" (1338/1340)
  ve "Üveys Tebriz'i aldı" (1358). Haritadaki en büyük hata bu: 17 yıl boyunca İlhanlı'nın asıl çekirdeği yanlış devletin elinde görünüyor.

### B1.2 — Şiraz ve Fars 1335'ten Muzafferî gösteriliyor; Fars 1353'e kadar İncû'nundu  [SINIR / ÇELİŞKİ]
- Kimlik: kırılma 1335-12-01 ilhanli→muzafferi (19 yerleşim: Şiraz, Kâzerûn, Fesâ, Dârâb, Cehrom, Firûzâbâd, Mînâb…). Şiraz:
  muzafferi 1335-12-01..1393-01-01. `incu` (devletler.js:663) haritada ise Isfahan, Kazvin, Kum, Tahran, Kâşân, Gulpâygân, Erdistan,
  Nâin, Erdekân'ı tutuyor, yani İncû'nun başkenti olan Şiraz'ı tutmuyor.
- Atlasın kendi `incu` kronolojisi (devletler.js:671-675, TDV «İncûlular»): 1340'ta Pîr Hüseyin Şiraz'ı alıyor, 1343'te
  Şiraz'da Ebû İshak'ın hâkimiyeti pekişiyor, **754/1353'te Muzafferî Mübârizüddin Şiraz'ı alıyor**. Muzafferî 1335–1353
  arasında Yezd'i, 1340-06-27'den sonra Kirman'ı tutuyordu.
- Öneri: Fars grubu (Şiraz, Kâzerûn, Fesâ, Dârâb, Cehrom, Firûzâbâd, Lâr, Ebrekûh…) `incu` 1335-12-01..1353 → `muzafferi`.
  Gün: 754 h. = 1353-02-06..1354-01-26. Kaynak ay veriyorsa (Şevval 754) o ay, vermiyorsa 1353-02-06. Atlasın incu maddesindeki
  "1353-01-01" hicrî yılın ilk gününe de denk gelmiyor (bkz. B1.12). Ayrıca o maddenin odak_yer'i "Luristan", olması gereken "Şiraz".
  İncû'nun Kazvin, Kum ve Tahran'ı tuttuğuna dair kaynak görmedim (ölçülemedi).

### B1.3 — 1469-01-01'de 95 yerleşim Karakoyunlu'dan Akkoyunlu'ya geçiyor; ilgili madde yok  [SESSİZ-DEĞİŞİM / TARİH-HATA]
- Kimlik: kırılma 1469-01-01 karakoyunlu→akkoyunlu, 95 yerleşim (Bağdat, Hille, Necef, Kerbelâ, Basra, Vâsıt, Musul, Kerkük,
  Hemedan, Isfahan, Şiraz, Kirman, Yezd, Kazvin, Huzistan…). d2_yakin'in ±30 gün içinde bulduğu tek madde "Livno ve batı Bosna"; olayla ilgisi yok.
- Kaynak: TDV «Karakoyunlular»: Hasan Ali'nin öldürülmesi «Şevval 873 / Nisan 1469»; Bağdat kolunun sonu
  «14 Cemâziyelâhir 874 / 19 Aralık 1469». TDV «Akkoyunlular»: «Kirman (1469) ve Bağdat'ı (1470) ele geçirdiği».
  Bağdat'ın Akkoyunlu'ya geçişi atlasta üç ayrı tarihle geçiyor: harita 1469-01-01, `karakoyunlu` t 1469-12-19 (kronoloji_karakoyunlu.js:475),
  kronoloji_akkoyunlu.js:340'ta 1470-01-01.
- Öneri: grubu ikiye ayır. Irâk-ı Acem, Fars, Kirman ve Huzistan → **1469-04-01**: mevcut "Hasan Ali öldürüldü" maddesiyle karşılanır.
  Irâk-ı Arab (Bağdat, Hille, Necef, Kerbelâ, Kûfe, Vâsıt, Basra, Kürne, Fâv, Sâmerrâ, Tikrit…) → **1469-12-19**: TDV günü,
  `karakoyunlu` künyesinin t'siyle aynı. Akkoyunlu kronolojisindeki 1470 "çift tarih" olarak ic_not'a yazılsın.

### B1.4 — 1467-01-01'de Van havzası (25 yerleşim) Cihan Şah'ın ölümünden 10 ay önce Akkoyunlu'ya geçiyor  [TARİH-HATA]
- Kimlik: kırılma 1467-01-01 karakoyunlu→akkoyunlu (Van, Muş, Bitlis, Erciş, Erzurum, Kars, Doğubayazıt, Hakkâri…). Madde de aynı günde:
  olaylar_ek20.js:73 «Uzun Hasan Karakoyunlu Devleti'ne son verdi». Bu madde 1469-04-01'deki «Karakoyunlu hanedanı sona erdi» maddesiyle de çakışıyor.
- Kaynak: TDV «Cihan Şah» ve «Karakoyunlular»: «12 Rebîülâhir 872 / 10 Kasım 1467», Sancak (Bingöl) baskını. Atlasın kendisi de
  kronoloji_karakoyunlu.js:495/501'de 1467-11-10 kullanıyor.
- Öneri: kırılmayı ve maddeyi **1467-11-10**'a taşı. Maddenin metni "Cihan Şah Sancak'ta öldürüldü — Van havzası Akkoyunlu'ya geçti"
  olsun; "devlete son verdi" ifadesi 1469'a kalsın.

### B1.5 — Serbedârî toprağı bütün Horasan'a ve Sistan'a yayılmış; Mihribânî ve Kert haritada yok sayılacak kadar küçük  [SINIR / ÇELİŞKİ]
- Kimlik: 1337-09-09 ilhanli→serbedariler, 25 yerleşim. Aralarında Zerenc (Sîstan), Kâin, Bîrcend, Merv, Serahs, Nesâ, Ebîverd,
  Kızılarvat, Göktepe, Dihistan, Tûs, Meşhed, Kûçân, Kelât var. `sistan-mihribani` (devletler.js:28947) **s: içinde 0 yerleşim**.
  `kert` yalnız Herat, Tebbes ve Eski Kandehar'ı tutuyor.
- Kaynak: TDV «Serbedârîler»: Serbedârî alanı «Câm'dan Damgan'a, Habişan'dan Türşiz'e», ayrıca Nîşâbur, Gürgân, Câcerm, Damgan ve
  Simnân. Merv, Sistan, Kûhistan ve Kâin bu maddede geçmiyor. Herat seferini Kert kazanıyor (1342). Atlasın `sistan-mihribani`
  kronolojisi (TDV «Mihribânîler»): Sistan Mihribânî'nin, Timur Sistan'ı **1383**'te alıyor. Harita ise Zerenc'i 1381-01-01'de Serbedârî'den Timur'a veriyor.
- Öneri: Zerenc (Sîstan) → `sistan-mihribani` 1281..1383-03-06, sonra timurlu (atlasın kendi maddesi var). Merv, Serahs, Nesâ,
  Ebîverd, Kızılarvat, Göktepe, Dihistan, Kâin ve Bîrcend için zincir yeniden kurulsun: Kert, Câ'ûn-ı Kurbânî ya da beyanlı yaklaşıklık.
  Bu ikincil kaynak gerektiriyor; Iranica «Sarbedarids» ve «Kart» çekilemedi.

### B1.6 — İlhanlı kronolojisi "1335-01-01 bölünme": Ebû Saîd 30 Kasım 1335'te öldü  [TARİH-HATA]
- Kimlik: devletler.js:2140 `ilhanli` kronoloji t:"1335-01-01".
- Kaynak: TDV «Ebû Said Bahadır Han», «13 Rebîülâhir 736 (30 Kasım 1335)». `cobaniler` künyesinin kaynak alanı da bunu alıntılıyor.
  Haritanın kendi bölünme kırılması 1335-12-01'de.
- Öneri: t:"1335-11-30".
- İlhanlı sonu (t=1353): TDV «İlhanlılar» başlığı «(1256-1353)», han tablosu Nûşirevân «745-754 (1344-1353)» ile bitiyor.
  **Sınıflandırma: t=1353 doğru, künye kısaltılmasın.** 1335 merkezin çöküşüdür; 1336–1353 arası, Çobânî ve Celâyirli
  emirlerin elinde kukla hanlar dönemi (aynı polity, "künye sürer"). Haritada İlhanlı'nın 1353'e kadar yalnız Gilan, Mâzenderan,
  Luristan ve Kuzey Horasan artıklarında kalması makul. 12 adet "1335-12-01 ilhanli→ilhanli" kırılması (Meşhed, Luristan, Zencan…)
  aynı sahip içinde dönem bölünmesi, sahip değişmiyor; ses kirliliği.

### B1.7 — Eretna 1335-01-01'de, Ebû Saîd'in ölümünden 11 ay önce, 29 yerleşim alıyor  [TARİH-HATA]
- Kimlik: kırılma 1335-01-01 ilhanli→eretna (Kayseri, Niğde, Nevşehir…), madde olaylar_ek16.js:55.
- Kaynak: TDV «Eretnaoğulları»: Eretna'nın yükselişi «Ebû Said Bahadır Han'ın ölümü üzerine (1335)». 1340'ta Memlûk hutbesini
  kesiyor, «ertesi yıl» (1341) bağımsızlığını ilan ediyor, Karanbük zaferi 1343'te.
- Öneri: en erken 1335-11-30 (fiilî kopuş). Bağımsızlık esas alınırsa 1341-01-01 ve madde ona taşınır. Hangisi seçilirse ic_not'ta beyan edilsin.

### B1.8 — Kazvin 1452'de Karakoyunlu'ya geçiyor; TDV 1447 diyor  [TARİH-HATA]
- Kimlik: Kazvin timurlu 1387-11-01..1452-01-01, ardından karakoyunlu (1452 grubunda 46 yerleşim).
- Kaynak: TDV «Karakoyunlular»: «Şâhruh'un vefatı üzerine de (851/1447) Sultâniye ve Kazvin'i ülkesine kattı». Kirman için «856-857/1452-1453».
- Öneri: Kazvin (ve yakın petekleri Tâkistan, Ebher gibi, varsa) → karakoyunlu **1447-03-19** (851 h. ∩ 1447'nin ilk günü) ve yeni madde.
  1452-01-01 grubu Kirman için tutarlı. Rey, Isfahan ve Fars'a TDV yıl vermiyor (ölçülemedi).

### B1.9 — Kiyâ ve Mar'aşî hayaletleri: Gilan 1353–1371, Mâzenderan 1353–1359  [HAYALET]
- Kimlik: hayalet.tsv. `gilan-kiya` (künye f 1371-01-01): Lâhîcan, Reşt, Bender Enzeli 1353'ten. `mazenderan-marasi`
  (f 1359-01-01): Sârî, Âmül, Bârfurûş, Eşref 1353'ten.
- Kaynak: atlasın kendi künyeleri (Kâr Kiyâ, Iranica 773/1371; Mar'aşî, TDV «Mar'aşîler» 760: Kıvâmüddin Kiyâ Efrâsiyâb'ı yeniyor).
  Âmül 1349–1359 arasında Kiyâ Efrâsiyâb Çelâvî'nin elindeydi (bavendi t 1349-04-17 ile tutarlı); atlasta bu devletin künyesi yok.
- Öneri: Mâzenderan 1353–1359 için ya yeni `celavi` (Kiyâ Efrâsiyâb) künyesi, ya da 1359'a kadar beyanlı yaklaşıklık
  (merdiven ⑤). Mar'aşî 1359'da başlar. Gilan 1353–1371 aralığı yerel hânedanlar (Biyepes/Fumen İshakvendleri) için kaynak arayacak.
  Reşt ve Enzeli Biyepes'tedir; Kâr Kiyâ'nın Lâhîcan merkezli Biyepiş'te olduğunu ayrıca denetlemek gerekiyor (Iranica çekilemedi).

### B1.10 — Safevî 1501: harita günü (1501-07-01) hicrî 907'den önce; TDV'nin kendi içinde çelişkisi var  [TAKVİM / ÇELİŞKİ]
- Kimlik: kırılma 1501-07-01 akkoyunlu→safevi (42 yerleşim, Tebriz dahil), madde olaylar_ek7.js:208. `akkoyunlu` kronolojisinde
  1501-01-01 (devletler.js:545).
- Kaynak: TDV «Akkoyunlular»: «İsmâil, 1501'de Nahcıvan yöresinde Elvend'i yenip Tebriz'e girdi», «(907/1501)». TDV «Şah İsmâil»:
  «907 (1502) yılı baharında … Şerûr'da». 907 h. = 1501-07-17..1502-07-06.
- Öneri: 907 ∩ 1501 kesişiminin ilk günü olan **1501-07-17**. 1501-07-01 tarihi hicrî yıl başlamadan önceye düşüyor. Akkoyunlu
  kronolojisindeki 1501-01-01 de aynı güne alınmalı. ic_not'a iki TDV maddesinin (1501 ile 1502 baharı) çelişkisi yazılsın.

### B1.11 — Hüseyin Baykara Herat'ı 22 Mart 1469'da aldı; atlas 1470 yazıyor  [TARİH-HATA]
- Kimlik: devletler.js:2154 `timurlu` kronoloji t:"1470-01-01".
- Kaynak: TDV «Hüseyin Baykara»: «8 Ramazan 873 / 22 Mart 1469». Ebû Saîd'in ölümü «25 Receb 873 (8 Şubat 1469)».
- Öneri: t:"1469-03-22". Ebû Saîd'in ölümü (1469-02-08) ayrı madde olarak eklensin; Akkoyunlu'nun Irâk-ı Acem'e yürüyüşünün tetiği budur.

### B1.12 — Hicrî yıl başlamadan önceye düşen toplu kırılmalar: Timur 1381 ve 1386  [TAKVİM]
- 1381-01-01 serbedariler→timurlu (20 yerleşim): TDV «Serbedârîler» Timur'un Sebzevâr seferini «783 (1381)» diye veriyor;
  783 h. 1381-03-28'de başlıyor. Öneri: **1381-03-28** (Herat'ın 1381-04-01'i ile de uyumlu).
- 1386-01-01 celayirli→timurlu (41 yerleşim, Tebriz): 788 h. 1386-02-02'de başlıyor. TDV «Celâyirliler» Timur'un Tebriz'i aldığı günü vermiyor.
  Kaynak yalnız "788" diyorsa öneri **1386-02-02** (kaynak araştırması gerekli).
- 1353-01-01 (İncû Şiraz kaybı, 754 h.) için öneri 1353-02-06, bkz. B1.2.

### B1.13 — Celâyirli kronolojisi haritayla ve öteki kronolojiyle çelişiyor (Bağdat 1393 ve 1410/1411)  [ÇELİŞKİ]
- Kimlik: devletler.js:557 «Timur Bağdat'ı aldı» 1393-01-01; harita Bağdat→timurlu 1393-08-29. devletler.js:559 «Kara Yûsuf …
  Bağdat'ı ele geçirdi» 1410-01-01; harita 1411-01-01; kronoloji_karakoyunlu.js:271 «Bağdat fethedildi» 1411-04-25.
- Kaynak: TDV «Celâyirliler»: Bağdat «1393'ten itibaren» Timur'un. Sultan Ahmed «813/1410» öldürüldü (atlasta 1410-08-30, Esed).
  Bağdat'ın düşüşü 814/1411; 814 h. 1411-04-25'te başlıyor.
- Öneri: celayirli 1393 maddesi → 1393-08-29 (haritayla aynı; gün kaynağı ic_not'a yazılsın). 1410 maddesi ikiye ayrılsın:
  1410-08-30 (Sultan Ahmed öldü) ve 1411-04-25 (Bağdat). Haritadaki Bağdat kırılması 1411-01-01'den **1411-04-25**'e alınsın;
  1411-01-01, 814 h.'den önceye düşüyor.

### B1.14 — Akkoyunlu kronolojisi: yalnız yıl veren `toprak-kayip` ve tarihsiz kaynaklar  [KAYNAKSIZ]
- `akkoyunlu` (devletler.js:532), `celayirli` ve `karakoyunlu` künye kronolojilerinde (1340, 1378, 1453, 1458, 1464, 1380, 1400…)
  kaynak alanı yok. `karakoyunlu` 1380 «Kara Mehmed … Tebriz'i alarak» cümlesi haritada karşılıksız: Tebriz o yıllarda Celâyirli.
  TDV «Karakoyunlular» Kara Mehmed'e yalnız 1380–1389 saltanat yılları veriyor; Tebriz zaptını o metinde görmedim.
  1400 «Timur'a yenilip tâbi oldu» doğrulanmadı; Kara Yûsuf 1400'de Osmanlı'ya sığındı.
- `serbedariler` (1338-07-01, 1344, 1353-12-13) ve `kert` (1285, 1327) maddeleri **kureansiklopedi.com**'a dayanıyor; bu popüler
  ansiklopedi kaynak kuralına uymaz. `musasa` 1441, 1461 ve 1508 maddeleri Vikipedi ve wikishia'ya dayanıyor. Ayrıca `musasa`
  kuruluşu 1441-01-01, künye f 1442-01-16 (TDV, 4 Ramazan 845), özet ise «Şubat 1441» diyor: üç farklı tarih. TDV'ye göre Safevî ilhakı 914/1508-1509.
- `serbedariler` kuruluş maddesi 1337-01-01 (devletler.js:616); künye f 1337-09-09 (TDV «12 Safer 738 / 9 Eylül 1337»). Öneri: 1337-09-09.
- Öneri: popüler kaynaklar TDV ya da Iranica alıntısıyla değiştirilsin.

### B1.15 — Herat'ın Timurlu sonu iki ayrı günde  [ÇELİŞKİ]  (1507; bölüm sınırının hemen dışında)
- Herat (yerlesimler_ek16.js) timurlu→buhara **1507-01-01**. Öteki bütün Horasan yerleşimleri ve `timurlu` künyesinin t'si
  («Şeybânî Han Herat'ı aldı») **1507-05-24**.
- Öneri: Herat'ı 1507-05-24'e hizala.

### B1.16 — Alma-Kulağı 1503-01-01 (40 yerleşim)  [TAKVİM, düşük öncelik]
- TDV «Şah İsmâil»: «Almakulağı savaşında … (908/1503)». 908 ∩ 1503 = 1503-01-01..1503-06-25, yani kural gereği 1503-01-01'e uyuyor.
  Savory / Cambridge History of Iran vol. 6'daki gün (Haziran 1503) burada **doğrulanmadı** (Iranica 403).
  Gün teyit edilirse taşınmalı; madde olaylar_ek11.js:121.

---

## Sayılar
- Künye: 22 denetlendi (+ `mihribani` ve `sistan-mihribani` çift kaydı fark edildi; `mihribani`nin ne boyası ne yerleşimi var).
- Künye kronoloji maddesi: yaklaşık 170 okundu; ayrıca karakoyunlu/akkoyunlu kronolojilerinden yaklaşık 25 madde ve olaylar*'dan 6 ilgili madde.
- Yerleşim: yaklaşık 75'inin zinciri tek tek okundu (Tebriz, Bağdat, Şiraz, Isfahan, Kirman, Yezd, Kazvin, Herat, Reşt, Horasan grubu, Huzistan grubu…).
- Kırılma grubu (1281–1503, 2 ve daha fazla yerleşim): 77 grubun ilgisi okundu.
- Bulgu: 16.

## Ölçülemedi / bulunamadı
- Encyclopaedia Iranica: HTTP 403, hiçbir madde çekilemedi (Chobanids, Sarbedarids, Kart, Kār Kiā, Esmāʿīl I).
- CGIE ve rch.ac.ir denenmedi (zaman).
- Kazvin, Kum ve Tahran'ın 1335–1357 arası İncû aidiyeti: kaynak bulunamadı.
- Kuzey Horasan'ın (Tûs, Meşhed, Merv, Nesâ) 1337–1381 arası gerçek sahibi (Câ'ûn-ı Kurbânî / Togay Timur): ölçülemedi.
- Timur'un Tebriz'i aldığı gün (1386): TDV «Celâyirliler»de yok.
- Erzurum/Van grubunun 1502-01-01'de Safevî'ye geçmesi: kaynak okunmadı.
- Gilan'da Reşt ve Enzeli'nin (Biyepes) Kâr Kiyâ'ya aidiyeti: doğrulanmadı.


---

# Bölüm 2 — 1501–1736 (Safevî + Hotakî ara dönemi)

Ölçüm: UMIT, worktree reverent-allen-bb8c39 (HEAD 7a3659d54), salt okuma. Etkin sahip hesabı d: > isg: > v: > s:
önceliğiyle yapıldı (`arac/_yer_ara.py` mantığı). Döküm 149 yerleşim için `scratchpad\b2_etkin.tsv` dosyasında
(betik: `scratchpad\b2_etkin.py`; girdi.yukle ile, motor koşturulmadı).
Not: kirilmalar.tsv yalnız s: geçişlerini gösterir. Osmanlı pencereleri d: içinde olduğu için "safevi->safevi"
satırları aslında Osmanlı penceresinin uçlarıdır.

### B2.1 — Hotakî (Galzay) hâkimiyeti haritada hiç yok: İsfahan ve iç İran 1722-1729 Safevî boyanıyor  [EKSİK-DEVLET / SINIR]
- Kimlik: galzay künyesi (devletler.js:2638); yerleşimler: Isfahan, Kâşân, Şiraz, Kirman, Yezd, Kum vb. (yerlesimler.js)
- Atlasta: s: içinde `galzay` yalnız Eski Kandehar'da var (1709-04-21..1738-03-24). İsfahan, Şiraz, Kirman ve Kâşân
  1503 → 1736-03-08 kesintisiz `safevi`. Kronoloji ise düşüşü anlatıyor: kronoloji_iran 1722-11-10 "İsfahan düştü",
  galzay künyesi 1722-11-10 ve 1729-11-13 maddeleri. Harita bu maddeleri doğrulamıyor; bu, "kronoloji ile harita
  birbirini doğrular" ilkesinin tersten ihlali.
- Kaynak: TDV safeviler: "Sultan Hüseyin Şah 30 Muharrem 1135’te (10 Kasım 1722) kayıtsız şartsız teslim olmak
  zorunda kaldı" · "Aralık 1729’da Eşref’i Şîraz yakınlarında yenilgiye uğratarak İran’dan çıkardı". Iranica GHILZI
  çekilemedi (403).
- Öneri: İsfahan ve Kâşân için s: galzay 1722-11-10 → 1729-11-16 (Nâdir'in İsfahan'a girişi; galzay künye maddesi
  1729-11-13 + 3 gün). Şiraz için galzay 1724 (kuşatmanın bitişi, gün araştırılacak) → 1729-12/1730-01 (TDV "Aralık
  1729"). Kirman ve Kum için ayrı kaynak taraması gerekiyor. Yezd düşmedi, Safevî kalabilir. Abdâlî Herat'ı
  (1716/17-1732) ve Melik Mahmud Sîstânî'nin Meşhed'i (1722-1726) için künye yok; bunlar da eksik devlet adayı.

### B2.2 — Bağdat 1623: madde TDV'ye dayandığını söylüyor ama TDV 11-12 Ocak 1624 diyor  [TARİH-HATA]
- Kimlik: olaylar_ek5.js:242 (1623-11-28, kaynak:"bagdat") · kronoloji_iran.js:428 · Bağdat, Kerbelâ, Necef, Hille,
  Kûfe, Sâmerrâ, Tikrit, Şehrizor, Kasr-ı Şîrîn ve öteki 11 yerleşimin d: ucu (toplam 20)
- Atlasta: 1623-11-28. Musul, Kerkük, Erbil ve Altınköprü ise 1624-01-01'de geçiyor. Bu düzende çevre, merkezden önce
  değil sonra düşüyor; tarihî sıra ters de olabilir.
- Kaynak: TDV bagdat: "iç kaleyi Safevîler’e teslim etti (11-12 Ocak 1624)"; kuşatma "1623 Temmuzunda" başladı.
  TDV safeviler: "Kerkük, Şehrizor, Kerbelâ, Necef ve Bağdat’ı ele geçirdi (1033/1624)".
- Öneri: Bağdat zincirinin ucunu 1624-01-12 yap (teslimin son günü; seçim ic_not'ta "11-12 Ocak" diye beyan edilsin).
  28 Kasım 1623'ün başka bir akademik kaynağı varsa çelişki iki kaynakla ic_not'a yazılsın; TDV esastır. İki madde
  birlikte taşınmalı.

### B2.3 — Bağdat 1534: iki madde iki ayrı günde; d: TDV'nin gününden 6 gün sonra  [ÇELİŞKİ]
- Kimlik: olaylar.js:86 (1534-12-04, "Aralık 1534 başı") · kronoloji_iran.js:146 (1534-11-28) · Irak'taki yaklaşık
  25 yerleşimin d: f'si 1534-12-04 (Bağdat, Kerkük, Erbil, Kasr-ı Şîrîn, Hille, Necef…)
- Kaynak: TDV bagdat: "Kanûnî de 21 Cemâziyelevvel 941’de (28 Kasım 1534) şehre girdi."
- Öneri: olaylar.js maddesi ve Irak d: uçları 1534-11-28 olsun (kronoloji_iran zaten doğru).

### B2.4 — Tebriz 1534 girişi: atlas 13 Temmuz, TDV 6 Ağustos  [ÇELİŞKİ]
- Kimlik: Tebriz d: {f:"1534-07-13", t:"1535-06-01"} (yerlesimler.js:789) · madde "Tebriz'e ilk giriş" 1534-07-13
- Kaynak: TDV tebriz: "Osmanlılar 25 Muharrem 941’de (6 Ağustos 1534) tekrar buraya girdiler." 13 Temmuz 1534 tam
  1 Muharrem 941'dir; Pargalı İbrahim Paşa'nın girişi için başka kaynaklarda geçen gün budur.
- Öneri: TDV esas → 1534-08-06. 13 Temmuz'u veren akademik kaynak bulunursa ic_not'ta iki kaynakla beyan edilsin.
  Bitişteki 1535-06-01 (ay) için TDV gün vermiyor ("şehri boşalttılar"); ayrıca araştırılmalı.

### B2.5 — Lahsa, Katîf, Ukayr, Cübeyl için 1524-1550 "safevi" dönemi kaynaksız ve TDV ile çelişiyor  [HAYALET / KAYNAKSIZ]
- Kimlik: Lahsa s: {f:"1524-01-01",t:"1550-01-01",d:"safevi"}, kaynak alanı yok; aynısı Katîf, Ukayr ve Cübeyl'de.
  Karşılayan madde alâkasız (1524-01-01 "Hain Ahmed Paşa isyanı").
- Kaynak: TDV lahsa: bölge "Âl-i Ecved’in elinde iken…"; "Benî Hâlid kabilesi Osmanlı hâkimiyeti öncesinde de
  Lahsâ’nın hâkimiydi"; "Basra beylerbeyiliğine bağlandı (1547)". Safevî hâkimiyeti anılmıyor.
- Öneri: safevi dönemini kaldır. Merdiven: TDV ecved ya da benihalid → ilgili künye ya da beyanlı boşluk. Osmanlı d:
  f'si 1550-01-01 yerine TDV'ye göre 1547-01-01 olsun (yalnız yıl; madde de buna göre).

### B2.6 — Hürmüz Adası ve Kişm 1510-1515 "safevi": gün Merv Savaşı'ndan alınmış, TDV'ye göre yerleşim vasal sultanlıktı  [TARİH-HATA / ÇELİŞKİ]
- Kimlik: Hürmüz Adası ve Kişm (Qeshm) s: hurmuz-sultanligi → safevi 1510-12-02 → portekiz 1515-04-01 ·
  hurmuz-sultanligi künyesi t 1514-01-01
- Atlasta: künye 1514'te bitiyor ama yerleşimler 1510'da Safevî'ye geçiyor; künye kaydı 1510 ile 1514 arasında
  yerleşimsiz kalıyor. 1510-12-02 Merv Savaşı'nın günü; Hürmüz'le ilgisi yok.
- Kaynak: TDV hurmuz--iran: "İran'ın vasalı olan sultanı Portekiz'e bağladı (1514)" · 1507 kuşatması başarısız ·
  geri alınış "23 Nisan 1622" (atlas doğru).
- Öneri: s: hurmuz-sultanligi → 1514-01-01, ardından portekiz 1514-01-01 → 1622-04-23 (TDV yılı). Safevî tâbiliği
  istenirse v: ile gösterilsin. 1515-04-01 maddesi TDV ile çelişkili; ic_not'ta Albuquerque 1515 (Boxer) ile beyan
  edilsin.

### B2.7 — Galzay künyesi: bitiş (t) yerleşimin gününden 82 gün önce; künye kaynağı "bulunamadı"  [HAYALET / KAYNAKSIZ]
- Kimlik: devletler.js:2638 galzay {f:1709-04-21, t:1738-01-01}; Eski Kandehar s: galzay → 1738-03-24 (hayalet.tsv)
- Kaynak: TDV araması "Hotekiler" sıfır sonuç verdi. Buna karşın TDV safeviler'de şu cümle var: "1709’da Galzay
  Afganlıları, Mîr Veys kumandasında Kandehar’ı işgal etti." Künyenin kendi maddeleri Iranica'yı anıyor.
- Öneri: künye t'si 1738-03-24 olsun (yerleşimle aynı; Iranica KANDAHAR'ın günüyle teyit edilmeli, çekilemedi).
  "bulunamadı" yerine kaynak olarak TDV safeviler ve Iranica GHILZI yazılsın. 1722-11-10 maddesinin kaynağı
  "standart akademik" diye geçiyor; bunun yerine TDV safeviler yazılsın.

### B2.8 — Kandehar el değiştirmelerinin hiçbiri Değişmez-2 evreninde alâkalı bir maddeyle karşılanmıyor  [SESSİZ-DEĞİŞİM]
- Kimlik: Eski Kandehar (Şehr-i Köhne), yerlesimler_asya.js
- Atlasta (d2_yakin): 1622-06-22 MADDESIZ · 1649-02-22 MADDESIZ · 1709-04-21 MADDESIZ · 1595-01-01 ve 1638-01-01
  için gelen maddeler alâkasız (Cesur Mihail, Cetin Kalesi). 1595 ve 1638'in maddeleri yalnız kronoloji_iran'da var,
  o da Değişmez-2 evreninde değil.
- Öneri: olaylar ya da kronoloji_sinir'e beş madde girsin: 1595 Bâbürlü teslim alışı · 1622-06-22 Abbas'ın alışı ·
  1638 Ali Merdan Han'ın Bâbürlülere teslimi · 1649-02-22 II. Abbas'ın geri alışı · 1709-04-21 Mîr Veys ayaklanması
  (TDV safeviler 1709). 1595 ve 1638 yalnız yıl; günü kaynakla bulunmalı.

### B2.9 — Gîlân (1592), Mâzenderân (1596), Şeki (1538) ve Belh (1514) kırılmaları alâkasız maddelerle "karşılanmış" görünüyor  [SESSİZ-DEĞİŞİM]
- Kimlik: kırılma grupları 1592-01-01 gilan-kiya→safevi (Reşt, Lâhîcan, Enzeli) · 1596-01-01 mazenderan-marasi→
  safevi (Sârî, Âmül, Bârfurûş, Eşref) · 1538-01-01 sirvansah→safevi (Şeki) · 1514-08-23 safevi→buhara (Belh)
- Atlasta: d2_yakin "VAR" diyor ama maddeler Drežnik, Belgorod ve Herseknovi; Belh'in maddesi Çaldıran. Belh'in
  Özbeklere geçişini Çaldıran gününe bağlamak tarihî olarak yanlış (Gucdüvan 1512).
- Öneri: kronoloji_iran'daki 1592 Gîlân ilhakı ile 1596 Mar'aşî sonu maddeleri Değişmez-2 evrenine (olaylar ya da
  kronoloji_sinir) taşınsın. Belh'in günü kaynakla yeniden bulunsun (TDV belh); şimdilik "gün Çaldıran'dan alınmış"
  beyanı yazılsın.

### B2.10 — Luristan: künye 1597'de bitiyor, yerleşim 1508'de Safevî'ye geçiyor (Bağdat maddesiyle)  [ÇELİŞKİ]
- Kimlik: lur-i-kucek künyesi t 1597-01-01 (künye maddesi: "1596 Safevî valisi atandı", "1597 Atabeglik sona erdi") ·
  Luristan s: lur-i-kucek → safevi 1508-01-01
- Öneri: Atabegler 1508-1597 arasında Safevî tâbisiyse s: lur-i-kucek 1597'ye uzatılsın ve Safevî tâbiliği v: ile
  gösterilsin. Öbür seçenek künyenin kısaltılması. Karar TDV luristan cümlesine göre verilsin (çekilmedi).

### B2.11 — Kirmanşah için 1590-1603 Osmanlı d: penceresi kaynaksız; bitiş günü Tebriz'den alınmış  [KAYNAKSIZ]
- Kimlik: Kirmanşah d: {f:"1590-03-21", t:"1603-10-21"}, kaynak yok. Komşuları Nihâvend d: ve Luristan v: ise
  1589 → 1603-01-01 ve kaynaklı.
- Atlasta: Ferhad Paşa Antlaşması'nın Kirmanşah'ı bıraktığına dair kaynak yazılmamış. Bitiş günü Tebriz'in geri
  alınışı; bu olay Kirmanşah'la ilgili değil.
- Öneri: TDV kirmansah ve TDV ferhad-pasa-antlasmasi ile sına. Kaynak yoksa pencereyi kaldır ya da Nihâvend'le aynı
  uçlara (1589/1603-01-01) "ABİ MERKEZ: Nihâvend" beyanıyla bağla.

### B2.12 — Safevî künye maddeleri kronoloji_iran ve TDV ile çelişiyor  [TARİH-HATA]
- Kimlik: safevi künyesi kronoloji: "1587-01-01 Şah I. Abbas tahta çıktı" · "1603-01-01 Tebriz ve Revan geri alındı"
- Kaynak: TDV safeviler: "tahta oturdu (Ekim 1587)" (kronoloji_iran'da 1587-10-01 doğru) · TDV tebriz: "21 Ekim 1603
  tarihine kadar". Revan 1604-06-08'de geçiyor (atlas d:).
- Öneri: 1587-01-01 → 1587-10-01. 1603-01-01 → 1603-10-21 ve metin "Tebriz'i geri aldı (Revan 1604)" olsun.

### B2.13 — Tebriz 1585'in kronoloji_iran'daki günü yanlış  [TARİH-HATA]
- Kimlik: kronoloji_iran "1585-09-21 Tebriz'in Osmanlı işgali ve kale inşası". Olaylar maddesi ve d: 1585-09-25.
- Kaynak: TDV tebriz: "Özdemiroğlu Osman Paşa 30 Ramazan 993’te (25 Eylül 1585) şehri ele geçirdi".
- Öneri: kronoloji_iran maddesi 1585-09-25 olsun.

### B2.14 — Reşt Antlaşması maddesi yıl başında, kırılma Gregoryen günde (31 gün açık)  [TAKVİM]
- Kimlik: kronoloji_sinir g6-rus-safevi-…-1732 ve madde "Reşt Antlaşması" t:1732-01-01 · Mahmudâbâd kırılması
  1732-02-01
- Kaynak: Reşt Antlaşması 21 Ocak 1732 Jülyen = 1 Şubat 1732 Gregoryen. Kırılma bunu zaten kullanıyor.
- Öneri: madde 1732-02-01 olsun ve ic_not'a iki gün yazılsın. Şimdiki fark 31 gün; ±30 penceresinin hemen dışında.

### B2.15 — 1732 Ahmed Paşa–Tahmasb antlaşması iki ayrı günle uygulanmış; Urmiye'nin 1731 dönüşü yalnız yıl  [ÇELİŞKİ]
- Kimlik: Tebriz, Hoy ve Kotur d: t 1732-01-08 (madde 1732-01-08) · Sakkız, Bâne, Merîvan ve Senendec d: t
  1732-01-10 · Urmiye ve Rāzhān d: f 1731-01-01 (yıl); Tebriz ve Hoy 1731-11-15'te dönüyor.
- Öneri: tek antlaşma, tek gün. Kaynakla doğrulanan gün beş yerleşime de yazılsın. Urmiye'nin 1731 geri alınışının
  günü TDV urmiye ya da hekimoglu-ali-pasa ile bulunsun.

### B2.16 — Hemedan Antlaşması: madde 1727-10-04, TDV hemedan 22 Eylül 1728 — çelişki veride yazılı ama çözülmemiş  [ÇELİŞKİ]
- Kimlik: olaylar_ek5.js "Hemedan Antlaşması — Batı İran'ın Osmanlı'ya katılması" (gun "4 Ekim 1727") ·
  antlasma_haritalari.js "17 Safer 1141'de (22 Eylül 1728)" · not alanında "KAYNAK ÇELİŞKİSİ … TDV esas" yazıyor.
- Öneri: 4 Ekim 1727 imza (Lockhart/Iranica), 22 Eylül 1728 ise TDV hemedan. İkisi ayrı aşamalar olabilir (imza ile
  tasdik). TDV maddesinin cümlesi okunarak tek gün seçilsin, öteki ic_not'a yazılsın. Kayıtta "TDV esas" deniyor ama
  çekirdek maddede gün hâlâ 1727.

### B2.17 — İsfahan 1722: atlasta şah ilanı teslimden önce; kaynaklar ayrışıyor  [ÇELİŞKİ — düşük öncelik]
- Kimlik: kronoloji_iran 1722-10-25 "Mahmud Hotakî şah ilan edildi" · 1722-11-10 "İsfahan düştü" (TDV)
- Kaynak: TDV 10 Kasım 1722 (30 Muharrem 1135). Yaygın akademik gün (Lockhart/Iranica) 23 Ekim tahttan feragat,
  25 Ekim taç giyme; Iranica çekilemedi.
- Öneri: TDV esas kalsın. 1722-10-25 maddesine "TDV teslimi 10 Kasım veriyor; 25 Ekim kaynağı: …" beyanı eklensin;
  kaynağı yoksa madde 1722-11-10'dan sonraya alınsın.

## Doğrulanan (sorun yok)
Çaldıran 1514-08-23 · Tebriz 1514-09-06/09-15 · Amasya 1555-05-29 · Revan 1583-09-13 · Gence 1588-09-01 ·
Ferhad Paşa 1590-03-21 · Tebriz 1585-09-25 → 1603-10-21 (TDV) · Nasuh Paşa 1612-11-20 · Serav 1618-09-26 ·
Revan 1635-08-08 / 1636-04-01 · Bağdat 1638-12-24 (TDV: kuşatma 15 Kasım + 40 gün) · Kasr-ı Şirin 1639-05-17 ·
Hürmüz 1622-04-23 (TDV) · Tiflis 1723-06-23 (TDV, d:) · Kirmanşah 1723-10-01 · İstanbul Mukāsemenâmesi 1724-06-24 ·
Hemedan 1724-08-31 · Nahçıvan 1724-08-11 · Revan 1724-10-03 / 1735-10-03 · Tebriz 1725-07-28 / 1731-11-15 (TDV) ·
Gence 1725-09-04 / 1735-07-09 · Derbend 1722-09-03 (Jülyen 23 Ağustos) · Bakü 1723-08-06 · Petersburg 1723-09-23 ·
Gence Antlaşması 1735-03-21 · Bağavard 1735-06-19 · Tiflis 1735-08-12 · Safevî t / Nâdir'in tahta çıkışı 1736-03-08.
Not: Tiflis olaylar maddesi 1723-06-15 ("Haziran 1723") d: ile 8 gün farklı; d: TDV'ye göre 23-24 Haziran, madde
1723-06-23'e çekilebilir.

## Sayılar
- Künye: 8 (safevi, galzay, hurmuz-sultanligi, musasa, gilan-kiya, mazenderan-marasi, badusbani, lur-i-kucek)
- Kronoloji maddesi: yaklaşık 75 (olaylar*, kronoloji_iran, kronoloji_sinir; 1501-1736 grep süzgeci)
- Yerleşim: 149 (etkin sahip zinciri 1500-1740, d:/v:/s: birlikte) + 18 iç İran yerleşimi
- Kırılma grubu: 73 (kirilmalar 1501-1737, 485 satır) + d: uçları
- Bulgu: 17
- TDV maddesi çekildi: safeviler, bagdat, tebriz, lahsa, hurmuz--iran (+ arama "Hotekiler" = 0 sonuç)

## Ölçülemedi / bulunamadı
- Encyclopaedia Iranica: 403, çekilemedi (GHILZI). Iranica'ya dayanan her gün teyitsiz.
- Hotakî dönemi için Şiraz, Kirman ve Kum'un Afgan alınış günleri (araştırılmadı) · Abdâlî Herat ve Melik Mahmud
  Sîstânî künyeleri (yok; kaynak taranmadı).
- Tebriz 1535 bitişi (1535-06-01, ay) · Hemedan ve Kirmanşah 1730-08-12'nin Tebriz'den bağımsız günü · Kuba'nın
  1724-1735 durumu (Osmanlı ya da Rus; d: yok).
- TDV luristan, kirmansah, belh, hemedan, ferhad-pasa-antlasmasi bu turda çekilmedi.
- Safevî kuruluş günü 1501-07-01: TDV gün vermiyor ("Tebriz’e girerek tahta oturdu"); beyanı denetlenmedi.


---

# Bölüm 3 — 1736–1925 (Afşar, Zend, Kaçar) denetimi

Ağaç: UMIT, worktree `reverent-allen-bb8c39` (HEAD 7a3659d54), salt-okunur. Hazır çıkarımlar (kunyeler.json,
yerlesimler.json, kirilmalar.tsv, d2_yakin.tsv, hayalet.tsv) + grep/Read. Web: TDV maddeleri GET ile okundu;
Iranica ve Britannica 403 verdi (**çekilemedi**).

---

### B3.1 — 103 yerleşim 1747-06-20'de "zend"e geçiyor: Zend künyesi 1751'de başlıyor, arada Afşar hükümdarları var  [HAYALET]
- Kimlik: `data/yer_yama_zend_kacar.js` (tam `s:` dizileri) → yerlesimler.js, _ek26, _ek_ferhadpasa, _sahne1108 ·
  künye `zend` (f 1751-01-01) · hayalet.tsv'de 103 satır, `1747-06-20 afsar→zend` kırılma grubu (103).
- Atlasta: Isfahan, Şiraz, Tahran, Hemedan, Kazvin, Kirman, Reşt, Sârî… 1747-06-20 → 1794-01-01 `zend`.
- Kaynak: TDV "Zendler" (islamansiklopedisi.org.tr/zendler): Kerim Han "1751 yılının ilk aylarında" iktidara
  geldi, III. İsmâil adına vekil oldu; 1163/1750'de İsfahan'ı alması için Ali Merdan Han'a destek verdi.
  TDV "Avşarlılar": Âdil Şah "şah ilân edildi (6 Temmuz 1747)", gözlerine mil çekildi (Mayıs 1748); İbrahim
  "Tebriz'de şahlığını ilân etti (17 Zilhicce 1161 / 8 Aralık 1748)"; Şâhruh Meşhed'de tahta çıktı (Ekim 1748),
  tahtına döndü (Rebîülevvel 1163 / Şubat 1750). Yani 1747-1750 arasında İran'ın merkezinde hükümdar Afşar'dır.
- Öneri: **künye doğru (1751, TDV), dönem yanlış.** 103 kaydın `zend` dönemini 1751-01-01'de başlat (yalnız yıl
  teyitli; gün teyitsiz); 1747-06-20 → 1751-01-01 `afsar` (Âdil Şah, İbrahim, Şâhruh). Geçiş için kronoloji
  maddesi: "Kerim Han Zend III. İsmâil adına vekil oldu" (1751-01-01, TDV zendler). Kaçarlı Mâzenderan
  (Muhammed Hasan Han) ve Afgan Âzâd Han'ın Azerbaycan'ı için ayrı künye yok → BEYANLI YAKLAŞIKLIK yazılmalı.

### B3.2 — Zend 1794-01-01'de bitiyor; TDV'ye göre Lütf Ali Han 1794 Martında Kirman'ı alıyor, Aralık 1794'te öldürülüyor  [TARİH-HATA]
- Kimlik: künye `zend` t 1794-01-01 ve künyenin kronoloji maddesi "1794-01-01 … Lütf Ali Han'ı Kirman'da yenip
  idam etti" · `kronoloji_iran.js:266` "1794-01-01 Lütf Ali Han'ın yenilgisi" · `kacar` künyesinin maddesi "1794-01-01
  birlesme" · 103 kırılma `1794-01-01 zend→kacar`.
- Kaynak: TDV "Zendler": Lütf Ali "Şâban 1208 / Mart 1794"te Kirman'ı aldı; "Lutf Ali Han'ın öldürülmesiyle
  (Cemâziyelâhir 1209 / Aralık 1794)" hanedan bitti. TDV "Ağa Muhammed Şah": Lütf Ali Tahran'da öldürüldü (1794);
  yani idam Kirman'da değil, Tahran'da.
- Hicrî kural: Cemâziyelâhir 1209 ∩ Aralık 1794 → kesişimin ilk günü **≈ 1794-12-24** (1 Muharrem 1209 = 29 Temmuz
  1794 üzerinden tablo hesabı; ±1 gün, NAOJ/takvim tablosuyla teyit et). Kirman'ın düşüş günü TDV'de yok; Iranica
  "Loṭf-ʿAlī Khan Zand" **çekilemedi** (403).
- Öneri: zend t = Kirman'ın düşüşü (Iranica'dan gün okunmalı; yaklaşık Ekim-Kasım 1794), okunamıyorsa
  1794-12-24 + `ic_not` hicrî beyanı. Madde metni: "… Kirman'da yendi; Lütf Ali Tahran'da öldürüldü".
  1794-01-01, Lütf Ali'nin Kirman'ı almasından da önce olduğu için kesinlikle yanlış.

### B3.3 — Kaçar toprakları 1779-1789'da haritada Zend olarak duruyor  [SINIR]
- Kimlik: Tahran, Sârî, Âmül, Bârfurûş, Ferahâbâd, Eşref, Esterâbâd, Reşt, Lâhîcan, Bender Enzeli, Kazvin, Kum,
  Kâşân, Simnân, Dâmgan, Isfahan, Hemedan, Zencan … — hepsi 1747-06-20..1794-01-01 `zend`, sonra toptan `kacar`.
- Kaynak: TDV "Ağa Muhammed Şah": Gîlân 1782'de alındı, Esterâbâd'a 1782 başında dönüldü; Tahran'da tahta çıkış
  "11 Cemâziyelevvel 1200 (12 Mart 1786)"; Ali Murad Han 1784'te İsfahan yakınında öldü. TDV "Zendler": Ağa
  Muhammed "1 Zilhicce 1207 / 10 Temmuz 1793"te Şiraz'a girdi.
- Öneri: Zend→Kaçar geçişi bölge bölge yazılmalı: Mâzenderan/Esterâbâd 1782-01-01, Gîlân 1782-01-01, Tahran
  1786-03-12, İsfahan ve merkez 1785-1789 arası (gün kaynaktan okunmalı), Şiraz 1793-07-10, Kirman B3.2.
  103 kaydın tek gündeki toptan geçişi, yıllara yayılmış bir fethi tek çizgiye indiriyor.

### B3.4 — Kaçar künyesinin kuruluşu: 1789-03-21 kaynaksız; atlasta üç ayrı kuruluş günü var  [ÇELİŞKİ]
- Kimlik: künye `kacar` f 1789-03-21 + maddesi "1789-03-21 tahta çıktı, Tahran'ı başkent yaptı" ·
  `kronoloji_iran.js:272` "1796-03-21 taç giydi — Kaçar Devleti kuruldu" · yer_yama_zend_kacar.js başlığı:
  TDV kacarlar "(1796) … RESMEN kurulmuş".
- Kaynak: TDV "Ağa Muhammed Şah": Tahran'da tahta çıkış 11 Cemâziyelevvel 1200 = **12 Mart 1786**; hüküm süresi
  "(1786-1797)". 1789-03-21'i destekleyen bir kaynak bulunamadı (bu gün 1789 Nevruz'u, ama hiçbir kaynakta yok).
- Öneri: f = **1786-03-12** (TDV, gün var). Böylece B3.3'teki Tahran geçişiyle aynı gün olur. 1796-03-21
  taç maddesi "taç giydi" olarak kalsın, "Kaçar Devleti kuruldu" ifadesi çıkarılsın; künyenin maddesi 1786'ya alınsın.

### B3.5 — Horasan yerleşimleri Zend'e boyanıyor, oysa Meşhed 1796'ya kadar Afşar  [SINIR]
- Kimlik: Kelât-ı Nâdirî, Serahs, Kûçân, Bocnûrd, Esferâyin, Turşiz, Turbet-i Haydariye, Turbet-i Câm, Kâin,
  Bîrcend, Nesâ, Ebîverd, Göktepe, Dihistan ovası, Zerenc (Sîstan) — hepsi 1747-1794 `zend`, sonra 1794 `kacar`.
  Meşhed, Nîşâbur, Tûs ve Sebzevâr ise 1796'ya kadar `afsar`.
- Kaynak: TDV "Avşarlılar": Şâhruh Meşhed'de, Horasan emîrlerince tahta çıkarıldı; Meşhed'i Dürrânî kuşattı
  (1753-55, 1769-70); Ağa Muhammed "1210'da (1796) Meşhed önünde göründü". TDV "Zendler"de Zend'in Horasan'a
  hükmettiği yazmıyor; tek bağ, kabilenin bir süre Derregez/Ebîverd'de oturmuş olması.
- Öneri: Horasan kümesi 1747/1751 → 1796-01-01 `afsar` (Şâhruh) olsun; Kâin/Bîrcend (Huzeyme emirleri) ve
  Sîstan için Dürrânî himayesi ayrıca araştırılmalı. Bu düzeltme olmazsa Kelât (Meşhed'e 90 km) Zend görünürken
  Meşhed Afşar görünür: ada gibi bir Afşar cebi.

### B3.6 — Tarki (Dağıstan) 1747-1813 Zend ve Kaçar sayılıyor  [SINIR / EKSİK-DEVLET]
- Kimlik: `yer_yama_zend_kacar.js` ilk kayıt, Tarki (Tarku): 1747-06-20..1794 `zend`, 1794..1813-10-24 `kacar`;
  "Ağraham burnu" da aynı. Künye `kumuk-samhalligi` (devletler.js:9607) t 1726-01-01.
- Kaynak: TDV "Zendler"de Dağıstan geçmiyor; TDV "Kumuklar" (künyede alıntılı) şamhal yönetiminin Rus baskısını
  anlatıyor. Zend'in ya da Ağa Muhammed'in Tarki'ye hükmettiğini gösteren bir kaynak bulunamadı.
- Öneri: 1747-06-20..1813-10-24 dönemi Kumuk Şamhallığı'na yazılmalı. Şamhallık 1726'dan sonra da sürdüğü için
  künyenin t'si kaynakla uzatılmalı (Iranica/BRE "Шамхальство Тарковское"). Olmazsa `__BOSLUK__` + beyan;
  bu, Zend boyasından daha iyidir. Gülistan 1813 kırılması (Tarki/Ağraham, kacar→rusya) da buna göre yeniden kurulmalı.

### B3.7 — Iğdır, Gümrü, Eçmiyadzin, Şerur: Revan Hanlığı'ndan ayrı olarak Zend/Kaçar'a boyanıyor  [SINIR]
- Kimlik: yerlesimler_ek26.js (Iğdır, Gümrü, Eçmiyadzin), yerlesimler_kalite4.js (Şerur), Kliçatak: 1747-1794
  `zend`, 1794-1828 `kacar`. Aynı ovadaki Revan, Norapat ve Beri ise 1747-1828 `revan-hanligi`; Nahçıvan da
  1747-1828 `nahcivan-hanligi`.
- Kaynak: Revan künyesinin `ozet`i (Mîr Mehdî'nin müstakil hanlığı, 1828'de ilga) ve künyenin kendi ic_not'u
  ("Harita bugün 1747-1751 arasını künyesi o tarihte olmayan `zend` ile boyuyor"). Eçmiyadzin Revan'a 20 km uzakta.
  Gümrü'nün (Şöregel) Rus işgaline (1804/05 civarı) geçiş günü **kaynakta okunmadı**.
- Öneri: Iğdır, Eçmiyadzin ve Şerur, Revan/Nahçıvan zincirini devralsın ("zincir Revan'dan devralındı");
  Gümrü ayrıca araştırılsın (Şöregel sultanlığı → Rusya 1804-1805; 1828 olmayabilir).

### B3.8 — Azerbaycan 1747-1763 ve 1779-1790 arasında "afsar" (Nâdir'in devleti) boyanıyor  [SINIR / ÇELİŞKİ]
- Kimlik: Tebriz, Erdebil, Urmiye, Hoy, Selmâs, Merend, Ahar, Sarâb, Mâku, Halhâl: 1747-06-20 `afsar→afsar`
  (12 kayıt), 1779-03-01 `zend→afsar` (10 kayıt), 1790/1791 `afsar→kacar`.
- Kaynak: TDV "Avşarlılar" İbrahim'in Tebriz'de şahlığını 8 Aralık 1748'de ilan ettiğini doğruluyor; 1749'dan sonra
  Azerbaycan'da Afşar hanedanı yok. Urmiye Afşarlarını (Fethali Han) TDV bu hanedana **bağlamıyor**. 1779 maddesi
  "Azerbaycan hanlıkları Zend'den fiilen ayrıldı" diyor, ama harita bu toprağı Meşhed'deki Şâhruh'un devletine
  boyuyor: madde ile harita uyuşmuyor.
- Öneri: `afsar` yalnız 1749'a kadar (İbrahim). 1749-1763 ve 1779-1790 için ya yerel han künyeleri (Hoy-Tebriz
  Dünbülîleri, Urmiye Afşarları, Karadağ) açılsın ya da `__BOSLUK__`/beyanlı yaklaşıklık yazılsın; Nâdir'in
  devletinin rengi kullanılmasın.

### B3.9 — 1923-10-29 (Türkiye Cumhuriyeti'nin ilanı) İran sınır yerleşimlerine kopyalanmış  [SESSİZ-DEĞİŞİM / SINIR]
- Kimlik: kirilmalar.tsv: `1923-10-29 sovyet-rusya→kacar` Culfa (yerlesimler.js:2040) ve Astara (:2239);
  `kacar→afganistan` Zerenc (:2197); `tbmm-turkiye→kacar` Bacirge (Esendere) (yerlesimler_sinir_dogu.js:76).
  d2_yakin "VAR" diyor, ama karşılayan madde "Cumhuriyet'in ilanı", yani alâkasız: fiilen maddesiz.
- Atlasta: Astara noktası (38.4292, 48.8728) **İran Astara'sıdır** (Astara çayının güneyi); 1828-1923 arasında
  `rusya`/`sovyet-rusya` sayılıyor. Türkmençay sınırı bu çaydır; güney yakası hep İran'da kaldı.
- Öneri: Astara 1828 sonrası kesintisiz `kacar`. Culfa: noktanın Aras'ın hangi yakasında olduğu ölçülmeli
  (38.955, 45.630 iki Culfa'nın arasına düşüyor); güney yakasıysa kesintisiz `kacar`, kuzey yakasıysa 1923 sonrası
  `sovyet-rusya`. Zerenc (30.958, 61.861 = Afgan Zaranj): Afganistan'a geçiş Goldsmid hakemliği (1872) ya da
  McMahon kararı (1903/1905) ile yazılmalı; 1923 değil. Bacirge: nokta Türkiye tarafındaysa (Esendere) 1923'te
  `kacar`a geçmemeli; İran tarafındaysa (Sero) 1548-1920 Osmanlı dönemi gözden geçirilmeli.

### B3.10 — Türkmençay iki maddede iki günle (Jülyen ikizi)  [TAKVİM]
- Kimlik: `kronoloji_iran.js:296` t "1828-02-10" (Jülyen) · olaylar_ek7 / kronoloji_sinir_komsu "1828-02-22"
  (Gregoryen). Durum ekokuma_rusiran.js:68'de beyan edilmiş, ama düzeltilmemiş.
- Kaynak: Iranica "Boundaries ii", ekokuma_rusiran'da alıntılı: "5 Šaʿbān 1243/10 February 1828" (Jülyen).
- Öneri: kronoloji_iran.js:296 → **1828-02-22** + `ic_not` "Jülyen 10 Şubat". Gülistan (1813-10-24) zaten
  Gregoryen, doğru.

### B3.11 — Herat: 1856-57 Kaçar işgali haritada yok; Herat 1826'dan beri Bârekzâyî boyanıyor  [SINIR / ÇELİŞKİ]
- Kimlik: Herat (yerlesimler_ek16.js): 1747-06-20..1826 `afgan-durrani`, 1826..2000 `afganistan` (Bârekzâyî
  Emirliği) · `kronoloji_iran.js:318` "1856-10-01 Herat Savaşı" (gün belirsiz) · 1857 Paris Antlaşması'nın
  maddesi yok.
- Kaynak: Iranica "Anglo-Persian War 1856-57" (arama özetinden; sayfanın kendisi 403): Herat Ekim 1856 sonunda
  düştü; başka bir kaynak 25 Ekim 1856 diyor. Paris Antlaşması: 4 Mart 1857 (documentsdedroitinternational.fr,
  antlaşma metni). Afgan-durrani künyesinin kendi ic_not'u: "Herat (Sadozay kolu 1863'e dek)". TDV "Herat"
  1856'yı anmıyor.
- Öneri: Herat ~1856-10-25 → tahliye (1857, gün okunmalı) `kacar` + maddeler: "Herat Kaçarlarca alındı" ve
  "Paris Antlaşması (1857-03-04): İran Herat'tan çekildi". 1826-1863 dönemi `afganistan` değil Sadozay/Yâr
  Muhammed Herat'ıdır (künyenin kendi beyanıyla çelişiyor). kronoloji_iran.js:318'in günü de bununla düzelir.

### B3.12 — Kaçar künyesinin bitiş maddesi 1925-01-01, künyenin t'si 1925-10-31  [ÇELİŞKİ]
- Kimlik: künye `kacar` t 1925-10-31, son maddesi t "1925-01-01" "Kaçar hânedanı sona erdi (günü tartışmalı)".
- Kaynak: Meclis'in hal' kararı 9 Âbân 1304 = 31 Ekim 1925 (şemsî çevrim: 1 Ferverdîn 1304 = 21 Mart 1925).
  Harita da 109 kırılmayı 1925-10-31'e koyuyor ve maddesi var.
- Öneri: künye maddesi → 1925-10-31; "31 Ocak 1924" iddiası ic_not'ta beyanlı olarak kalsın.

### B3.13 — Kronoloji_iran'da sıra ve gün hataları (Kaçar dönemi)  [TARİH-HATA]
- `kronoloji_iran.js:495` "1896-01-01 Müzafferüddin Şah tahta çıktı": olay Nâsırüddin'in öldürülmesinden
  (:334, 1896-05-01) sonradır. Öneri: 1896-05-01 (yıl düzeyinde yazılacaksa bile önceki olayın önüne geçmemeli).
- `:310` "1848-01-01 Emîr Kebîr sadrazam oldu": Nâsırüddin'in tahta çıkışından (:306, 1848-09-05) sonradır.
  Gün kaynaktan okunmadı; en az 1848-09-05 sonrası olmalı.
- `:364` "1911-11-24 Rusya'nın ikinci ültimatomu — Meclis kapatıldı": ikinci ültimatom 29 Kasım 1911'de verildi
  (İngiliz FO Handbook no. 80, qdl.qa; Hansard 4 Aralık 1911), Meclis ise Aralık 1911'de kapatıldı (20-24 Aralık).
  İki olay ayrılmalı.
- `:322` "1872-01-01 Reuter İmtiyazı": imtiyaz Temmuz 1872 (gün kaynaktan okunmadı).

### B3.14 — Ahal Türkmen yerleşimleri 1794-1860 Kaçar; 1860 geçişi maddesiz  [SESSİZ-DEĞİŞİM]
- Kimlik: `1860-01-01 kacar→turkmen` (Dihistan, Nesâ, Ebîverd, Göktepe). d2_yakin'deki tek "VAR" maddesi
  "Muhâcirîn Komisyonu" (Osmanlı), yani alâkasız. `1785-01-01 afsar→buhara` Merv: MADDESİZ.
  `1796-01-01 afsar→turkmen` Kızılarvat.
- Öneri: 1860 için Kaçar ordusunun Merv yenilgisi maddesi yazılmalı (gün kaynaktan). Ağa Muhammed'in 1794'te
  Ahal'e hükmettiği kaynakla gösterilemiyorsa bu kayıtlar `turkmen` + beyan olsun. Merv 1785: Buhara Emiri Şah
  Murad'ın Merv'i alışı için madde gerekli.

### B3.15 — 1913 İstanbul Protokolü'nde "4 mü 17 Kasım mı" çelişkisi bir takvim farkıdır  [TAKVİM]
- Kimlik: `kronoloji_sinir_komsu.js:104` ("çelişki çözülmedi") · kronoloji_sinir_turkiye.js:41 (1913-11-17).
- Kaynak: IBS 164'teki iki gün 4 Kasım (Jülyen, Rus imzacının takvimi) ve 17 Kasım'dır (Gregoryen); 1913'te
  iki takvim arasındaki fark 13 gündür.
- Öneri: 1913-11-17 doğru; ic_not'a "4 Kasım = Jülyen" yazılsın, "çözülmedi" ibaresi kaldırılsın.

### B3.16 — Nâdir'in ölüm günü üç biçimde  [ÇELİŞKİ]
- Atlas: `afsar` künye maddesi 1747-06-19 · kronoloji_iran.js:248 ve kırılmalar 1747-06-20.
- Kaynak: TDV "Nâdir Şah (İran)": "11 Cemâziyelâhir 1160 / 20 Haziran 1747" (Muğan: 24 Şevval 1148 / 8 Mart
  1736 ✓; Kerden: 17 Şâban 1159 / 4 Eylül 1746 ✓; Kandehar: Zilkade 1150 / Mart 1738). Buna karşılık TDV
  "Avşarlılar" "21 Mayıs 1747" diyor: TDV'nin kendi içinde bir çelişki.
- Öneri: künye maddesi → 1747-06-20; ic_not'a TDV avşarlılar'daki 21 Mayıs yazılsın, hicrî karşılık gösterilsin.

### B3.17 — Abâdân: Osmanlı `d:` (1701-1847) ile İran `s:` (afsar/zend/kacar) aynı anda  [ÇELİŞKİ]
- yerlesimler.js:2149: `d:` 1701-01-01..1847-05-31 Osmanlı; `s:` 1736'dan itibaren afsar, zend, kacar. Kaynak
  çelişkisi beyan edilmiş (TDV abadan ve Iranica), ama iki sahip üst üste duruyor (Değişmez 3). Muhammere
  1812'den beri `kacar`: Erzurum II'den (1847) önceki Ka'b ve Osmanlı (1837 Ali Rıza Paşa) dönemi kaynaksız.
- Öneri: TDV esas (Osmanlı 1847'ye kadar) → `s:` iran zinciri 1847-05-31'de başlasın.

---

## Haritaya yansımayan, doğru bulunanlar
Muğan 1736-03-08 ✓ · Kerden 1746-09-04 ✓ (olaylar_ek5) · Erzurum I 1823-07-28 ✓ · Erzurum II 1847-05-31 ✓
(olaylar_ok106; gün TDV dışından) · Gülistan 1813-10-24 Gregoryen ✓ · Tahran Sözleşmesi 1893-06-08 (27 Mayıs Jülyen)
✓ · Göktepe 1881-01-24 Gregoryen ✓ · Kerim Han'ın ölümü 1779-03-01 (TDV "Mart 1779") ✓, ama `zend` künye maddesi
1779-01-01 · 1907 nüfuz bölgeleri ve 1911 Rus işgali için kırılma yok: doğru (egemenlik değişmedi) ·
Kaçar t 1925-10-31 ✓.

## Sayılar
- Künye: 4 tam (afsar, zend, kacar, afgan-durrani) + 13 Kafkas/Gürcü künyesine f/t bakışı.
- Kronoloji maddesi: ~45 (kronoloji_iran.js 1736-1925, künye maddeleri, kronoloji_sinir_komsu/turkiye İran maddeleri).
- Yerleşim: ~45'i tek tek okundu; 335'lik evrenin 1736-1925 kırılmaları tabloyla tarandı.
- Kırılma grubu: 1736-1925 arasında 55 grup (kirilmalar.tsv), hepsi gözden geçirildi.
- Bulgu: 17.

## Ölçülemedi / bulunamadı
- Iranica (Loṭf-ʿAlī Khan, Karim Khan, Anglo-Persian War, Herat, Shuragel) ve Britannica: **çekilemedi** (403).
  Kirman'ın düşüş günü, Herat'ın tahliye günü ve Gümrü'nün Rus geçiş günü bu yüzden okunamadı.
- TDV "Herat" ve "Lutf Ali Han": ilgili günler yok. TDV "Ağa Muhammed Şah"ta Tebriz, Kirman ve Meşhed için gün yok.
- Ahal-Horasan Sözleşmesi (1881-12-21 / Jülyen 9 Aralık) ve Goldsmid hakemliği (1872) için çekirdekte madde
  bulunamadı (grep); haritada bu günlerde kırılma da yok. Sınır değişimi gösterilecekse önce madde yazılmalı.
- Kotur'un 1905-1912 Osmanlı işgali araştırılmadı.
- Hicrî kesişim (1794-12-24) tablo hesabıdır, takvim tablosuyla teyit edilmedi.


---

# Bölüm 4 — 1914–bugün (Kaçar sonu, Pehlevî, İran İslâm Cumhuriyeti)

Ağaç: UMIT, worktree `reverent-allen-bb8c39` (HEAD 7a3659d54), salt-okunur. Harita verisi: `yerlesimler.json` çıkarımı + `data/` grep.
Önemli bağlam: İran yerleşimlerinin `s:` zinciri **2000-12-31'e kadar** uzanıyor (89+ yerleşim `kacar →1925-10-31 → iran →2000-12-31`), yani 1923 sonrası harita BOYANIYOR. Künye özetlerindeki "haritada hiç boyanmaz" ifadesi bayattır (B4.2).

### B4.1 — Bacirge (Esendere) 1923'te Türkiye'den İran'a geçiyor: bugünkü Türkiye kasabası 2000'e kadar İran boyanıyor  [SINIR]
- Kimlik: `data/yerlesimler_sinir_dogu.js:76-78`, yerleşim "Bacirge (Esendere)" (37.7114 K / 44.6010 D)
- Atlasta: `s:` tbmm-turkiye 1920-04-23..1923-10-29 → **kacar 1923-10-29..1925-10-31 → iran 1925-10-31..2000-12-31**. Kaydın kendi `neden:` alanı yerleşimi "Bacirge (TR) ↔ Sero (İran)" sınır çiftinin Türk tarafı olarak tanımlıyor; ikizi Sero İran tarafında.
- Kaynak: kaydın kendi GeoNames dayanağı (Türkiye, Yüksekova/Esendere, sınıra 0,4 km). 1923 sonrasında İran'a devir anlatan hiçbir kaynak, kronoloji maddesi ya da antlaşma yok. 1932 Türkiye-İran sınır düzeltmesi Ağrı/Kotur kesimindedir, Hakkâri kesiminde değil.
- Öneri: 1923-10-29 sonrası → `turkiye-cumhuriyeti` 1923-10-29..2000-12-31 (Yüksekova zincirinin aynısı). 1923-10-29'daki `tbmm-turkiye→kacar` kırılması sessiz. Uydurma bir el değiştirme bu.

### B4.2 — `iran` künyesinin t:"2026-08-07" değeri kayıtın yazıldığı gün; ayrıca özet 1923 sonrası haritayı ve hal' tarihini yanlış veriyor  [TARİH-HATA]
- Kimlik: `data/devletler.js:180` (`id:"iran"`), açıklama yorumu `devletler.js:168-178`
- Atlasta: `f:"1925-10-31", t:"2026-08-07"`. Hemen üstteki yorum açıkça şunu söylüyor: "t alanına, hâlâ var olan bir devlet olduğu için keyfî/güncel bir tarih (bu satırın yazıldığı gün) yazıldı… Şema uygun değilse (ör. t alanı boş…) KARAR KOORDİNATÖRÜN". Yani 7 Ağustos 2026 bir rejim değişikliği ya da kapanış değil, Emre'nin "iran = modern ulus-devlet" kararının günü. `devletler.js` içinde `t:"2026-08-07"` taşıyan tek künye bu. Yaşayan öteki devletlerde (`turkiye-cumhuriyeti`, `afganistan`, `suudi-arabistan`) t yok.
- Özet de iki yerde yanlış: (a) "Tamamı atlasın ufkunun DIŞINDA; haritada hiç boyanmaz" diyor. Oysa 100'ü aşkın yerleşimde `d:"iran"` dönemi 1925-10-31..2000-12-31 var ve BOYALAR'da `"iran": #cc1664` (`arac/renkler.py:1417`). (b) "mecliste gıyaben tahttan indirilmesinin (31 Ocak 1924)" diyor (bkz. B4.3).
- Kaynak: künyenin kendi yorumu, `devletler.js:168-178`.
- Öneri: `t` alanını sil ya da boş bırak (yaşayan devlet emsali). Özetteki "haritada hiç boyanmaz" cümlesini kaldır, "31 Ocak 1924"ü B4.3'e göre düzelt. Künye kronolojisindeki 6 maddenin hiçbirinde madde başına `kaynak:` yok, yalnız künyede `kaynak:"iran"` var; madde kaynakları eklenmeli.

### B4.3 — Kaçar'ın hal' günü: kaynak çelişkisi çözülmemiş; künye içindeki "son" maddesi 1925-01-01, t ise 1925-10-31  [ÇELİŞKİ]
- Kimlik: `data/devletler.js:154` (kacar t:"1925-10-31"), `:155` (özet "ÇELİŞKİ ÇÖZÜLMEDİ"), `:163` (`t:"1925-01-01", tur:"son"`); `data/kronoloji_sinir_halef_1923_2000.js:7` (1925-10-31, 109 yerleşimin `kacar→iran` kırılmasını karşılıyor)
- Atlasta: harita ve halef maddesi 1925-10-31 diyor, künyenin kendi "son" maddesi 1925-01-01, `iran` özeti 31 Ocak 1924.
- Kaynak: TDV `riza-sah-pehlevi` (GET, okundu): "31 Ocak 1924 tarihinde meclis, Avrupa'da bulunan Ahmed Şah'ı gıyabında tahttan indirerek Kaçar hânedanına son verdi". TDV `kacarlar` (okundu): yalnız "(1925)". TDV `iran` (okundu): "Aralık 1925'te kendini şah ilân etti". Meclis kararının bilinen günü 9 Âbân 1304 hş. ve çevrimi bizzat yaptım: 1 Ferverdîn 1304 = 21 Mart 1925, 225. gün → **31 Ekim 1925** (atlasla aynı). Iranica 'Pahlavi dynasty' ve 'Ahmad Shah' 403 verdi, çekilemedi. TDV'nin "31 Ocak 1924"ü öteki iki TDV maddesiyle çelişiyor ve 12 Aralık 1925'e 23 aylık boşluk bırakıyor. Büyük olasılıkla "31 Ekim 1925"in yazım hatası, ama bu bir çıkarım.
- Öneri: kacar `:163` maddesini `t:"1925-10-31"` yap. `ic_not`a şunu yaz: "TDV riza-sah-pehlevi 31 Ocak 1924 · TDV kacarlar 1925 (yıl) · 9 Âbân 1304 hş. = 31 Ekim 1925; TDV-içi çelişki". 9 Âbân'ı gösteren ikinci akademik kaynak (Cambridge History of Iran c.7 ya da Iranica) bulunmalı. Haritaya dokunulmasın, 1925-10-31 doğru.

### B4.4 — Culfa ve Astara 1828-1923 arası Rus/Sovyet, 1923-10-29'da kacar'a dönüyor: iki yanlış zincir ve ufuk kesiği kırılması  [SINIR]
- Kimlik: `data/yerlesimler.js:2040` (Culfa 38.955/45.63), `:2239` (Astara 38.4292/48.8728)
- Atlasta: ikisi de rusya 1828-02-22 → rusya-gecici-hukumet → sovyet-rusya ..1923-10-29 → **kacar 1923-10-29..1925-10-31** → iran ..2000. 1923-10-29 kırılmasının kronolojide alâkalı maddesi yok; d2 eşleşmesi "Cumhuriyet'in ilanı", yani alâkasız. Kırılma 1923 ufuk kesiğinin artığı.
- Gözlem: Culfa'nın koordinatı Aras'ın **kuzey** yakasındaki Nahçıvan Culfası'na denk geliyor (İran Culfası ≈38.94/45.64). Nahçıvan'ın kendi zinciri (`yerlesimler.js:792`) sovyet-rusya 1917-11-07..1991-10-18 → azerbaycan-cumhuriyeti. Astara'nın koordinatı ise Astara çayının **güney** yakasındaki İran Astarası'na denk geliyor. Türkmençay sınırı Astara çayıdır, güney yaka İran'da kaldı. Yani Culfa 1923'te İran'a "dönmemeli", Astara ise 1828-1923 arası hiç Rus olmamalı.
- Kaynak: Türkmençay sınır hattı (Aras + Astara çayı). Iranica 'BOUNDARIES' 403, çekilemedi. Koordinat karşılaştırması GeoNames'e değil benim bilgime dayanıyor, Emre'nin ölçmesi gerek.
- Öneri: Culfa → Nahçıvan zinciri: sovyet-rusya 1917-11-07..1991-10-18, sonra azerbaycan-cumhuriyeti. Astara (İran) → 1828-1925 kacar kesintisiz, sonra iran. İkisinde de 1923-10-29 kırılması silinsin.

### B4.5 — Gîlân Sovyet Cumhuriyeti ve Azerbaycan Millî Hükûmeti: künye ve renk var, haritada hiçbir yerleşim yok; Mahabad Kürt Cumhuriyeti'nin künyesi bile yok  [EKSİK-DEVLET / SESSİZ-DEĞİŞİM]
- Kimlik: `devletler.js:18099` (gilan-sovyet-cumhuriyeti), `:28935` (azerbaycan-milli-hukumeti); `renkler.py:874`, `:4911`. "mahabad" grep'i `devletler.js`'te boş.
- Atlasta: 335 yerleşimin hiçbirinin `s:` dizisinde bu iki künye geçmiyor. Reşt, Bender Enzeli, Tebriz, Erdebil, Urmiye ve Mahabad (Sâvücbulak, `yerlesimler_kalite4.js`) noktaları var, ama hepsi `kacar →1925 → iran` kesintisiz gidiyor. Künyeler var ama harita onları hiç göstermiyor.
- Kaynak: Gîlân 1920-06-05 (Iranica 'Rasht', künyede). Azerbaycan 12 Aralık 1945 → 12 Aralık 1946 (TDV 'Tebriz'/'Azerbaycan', künyede; 21 Âzer 1325 = 12 Aralık 1946, çevirdim). Mahabad: TDV `kurtler` (GET, okundu): "İran Kürtleri de 22 Ocak 1946'da Mehâbâd'da Kürdistan Cumhuriyeti'ni ilân ettiler", sonu "aynı yılın sonunda" (gün yok). TDV `iran`: iki yapı Sovyetler Mayıs 1946'da çekildikten sonra çöktü. Mahabad'ın bitiş günü (≈15-17 Aralık 1946) için Iranica 'Kurdish Republic of 1946' 403 verdi, çekilemedi.
- Öneri: (1) Reşt, Enzeli (+Gîlân noktaları) için `s:` gilan-sovyet-cumhuriyeti 1920-06-05..1921-11-01 (t için B4.7). (2) Tebriz, Erdebil, Urmiye, Merâga, Zencan vd. için azerbaycan-milli-hukumeti 1945-12-12..1946-12-12. (3) Yeni künye `mahabad-kurt-cumhuriyeti`: f 1946-01-22 (TDV kurtler), t'yi ikinci kaynakla gün olarak bul, bulunamazsa 1946 + beyan. Yalnız Mahabad noktası. Her kırılmanın maddesi künye kronolojisinde zaten var (Mahabad hariç).

### B4.6 — 1941-1946 İngiliz-Sovyet işgali ve 1980-1988 savaş işgalleri haritada yok  [SESSİZ-DEĞİŞİM / EKSİK]
- Kimlik: `kronoloji_cok_1923_1945.js:5039` (1941-08-25 madde, TDV 'iran' ile doğru gün). Kendi `ic_not_d`'si: "Haritada işgal bölgeleri (`isg:`) bugün YOK". Muhammere ve Fâv noktaları (`yerlesimler.js`).
- Atlasta: madde var, harita değişmiyor. Muhammere (Hürremşehr) 1925-2000 kesintisiz iran. Fâv 1958-2000 kesintisiz irak-cumhuriyeti. Irak'ın Hürremşehr işgali (Ekim 1980 – 24 Mayıs 1982) ve İran'ın Fâv işgali (Şubat 1986 – Nisan 1988) görünmüyor.
- Kaynak: 1941 için TDV `iran` (okundu): "25 Ağustos 1941'de İngiliz ve Rus askerî birlikleri İran'ı işgal ederek…". Hürremşehr ve Fâv günleri için kaynak çekmedim (bulunamadı ≠ yok).
- Öneri: işgalleri egemenlik değil `v:` (işgal katmanı, VERI-YAPISI örneği "Mısır ordusu (işgal)") ile göster: kuzey (Sovyet) / güney (İngiliz) 1941-08-25..1946-05 · Muhammere v: Irak 1980-10..1982-05-24 · Fâv v: İran 1986-02..1988-04. Günler kaynakla doğrulanmadan yazılmasın.

### B4.7 — Gîlân künyesinin içinde bitiş çelişkisi: t 1921-11-01, kronoloji "Eylül 1921 sona erdi"  [ÇELİŞKİ]
- Kimlik: `devletler.js:18099` (t:"1921-11-01", özet "[gun yok] t", "Kasım 1921'de Rıza Han'ın Kazaklarının Reşt'i alması"); son kronoloji maddesi `t:"1921-09-01"` "merkezî hükûmet güçleri Gîlân'a girip cumhuriyeti sona erdirir (Eylül 1921)".
- Atlasta: aynı künyede iki ayrı bitiş, Eylül ve Kasım 1921.
- Kaynak: Iranica 'Caspian Sea ii' (Eylül, künyede alıntılı) ve 'Rasht' (Kasım). Çekilemedi (403). TDV `gilan` maddesine bakılmadı.
- Öneri: Sovyet çekilmesi (Eylül 1921) ile Reşt'in alınması (Kasım 1921) ayrı maddeler olsun. Künye t = Reşt'in düşüş günü, kaynakta bulunursa gün olarak, yoksa 1921-11-01 + beyan. Eylül maddesinin metnindeki "cumhuriyeti sona erdirir" kısmı çıkarılsın.

### B4.8 — 1979: İİC ilanı 1 Nisan, atlas 31 Mart'a "ilan edildi" yazıyor; şahın ayrılış günü TDV ile çelişiyor; 11 Şubat yok  [TARİH-HATA / ÇELİŞKİ / EKSİK-MADDE]
- Kimlik: `devletler.js:189` (`t:"1979-03-31", tur:"bolunme", b:"Referandumla İran İslam Cumhuriyeti ilan edildi"`), `:187` (`t:"1979-01-16"`)
- Atlasta: referandum ve ilan aynı madde, 31 Mart'ta. Şah 16 Ocak. 11 Şubat 1979 (monarşinin fiilen çöküşü, Bahtiyar hükûmetinin düşüşü) maddesi yok.
- Kaynak: TDV `iran` (okundu): "1 Nisan tarihinde İslâm Cumhuriyeti ilân edildi" ve "15 Ocak 1979 tarihinde Şah Muhammed Rızâ'nın ülkeyi terketmesiyle". Çevirdim: 12 Ferverdîn 1358 = 1 Nisan 1979. Yaygın literatürde ayrılış 16 Ocak 1979 (ikinci kaynak çekmedim).
- Öneri: 1979-03-31 maddesini "referandum (30-31 Mart)" yap, ayrı bir madde 1979-04-01 `tur:"kurulus"` "İran İslâm Cumhuriyeti ilan edildi" (TDV iran) ekle. 1979-01-16'da CLAUDE.md kuralı TDV'yi esas aldığı için 1979-01-15 olmalı, `ic_not`ta "TDV iran 15 Ocak · yaygın 16 Ocak" iki kaynakla beyan edilsin. Ya da 16 Ocak'ı gösteren ikinci akademik kaynak bulunup çelişki beyan edilsin. Eklenecek madde: 1979-02-11 (kaynakla).

### B4.9 — Kronoloji maddesi "1922 Şeyh Hazal ve Simko isyanlarının bastırılması": Haz'al'ın sonu 1924, atlas içinde bile çelişkili  [TARİH-HATA]
- Kimlik: `data/kronoloji_iran.js:525` (t:"1922-01-01", odak Muhammere/Urmiye/Selmâs)
- Atlasta: iki olay tek 1922 maddesinde. Oysa `devletler.js:18354` (Müşa'şa' künyesi) "1924 — Rızâ Şah Pehlevî Şeyh Haz'al'ın iktidarına son verip" diyor.
- Kaynak: atlasın kendi Müşa'şa' maddesi (TDV dayanaklı) ile Iranica 'Reza Shah' (künyede alıntılı, çekilemedi). Simko'nun yenilgisi 1922.
- Öneri: madde ikiye bölünsün. Simko 1922 (yıl, TDV/Iranica). Haz'al 1924 (Müşa'şa' maddesinin kaynağıyla). Muhammere odağı 1922 maddesinden çıkarılsın.

### B4.10 — Zerenc (Sîstan) 1923-10-29'a kadar kacar, sonra afganistan: Sîstan taksimi 1872, kırılma ufuk artığı  [SINIR / SESSİZ-DEĞİŞİM]
- Kimlik: `data/yerlesimler.js:2197` (30.9583/61.8611; bugünkü Zerenc, Afganistan Nîmrûz)
- Atlasta: kacar 1794-01-01..**1923-10-29** → afganistan (kaynak "Britannica 'Afghanistan' (surekli egemen devlet)"). 1923-10-29'da madde yok; d2 eşleşmesi "Cumhuriyet'in ilanı", alâkasız.
- Kaynak: Goldsmid hakemliği (1872) ve McMahon hakemliği (1903-1905) Sîstan'ı böldü. Kaynak çekmedim, bu bir dönemin (Bölüm 3) işi.
- Öneri: devir günü 1872/1905 hakemliklerinden kaynakla bulunsun. 1923-10-29 kırılması silinsin.

### B4.11 — Eksik dış sınır maddeleri: 1932 Türkiye-İran, 1937 Irak-İran (4 Temmuz), 1975 Cezayir, 1971 adalar, 1970 Bahreyn, 1935 ad değişikliği, 1988 ateşkes  [EKSİK-MADDE]
- Kimlik: grep sonucu `data/*.js` içinde 1932-01-23, 1937-07-04, 1975-03-06/06-13, 1971-11-30, 1935-03-21, 1988-07-18/08-20 için İran maddesi yok. Sâdâbâd (`kronoloji_cok_1923_1945.js:2968`, 8 Temmuz 1937) **doğru** (TDV 'Sâdâbâd Paktı' alıntılı), ama 4 Temmuz 1937 Irak-İran sınır antlaşmasıyla karıştırılmamalı, o ayrı madde. İran-Irak savaşının yalnız başlangıcı var (`devletler.js:21283`, irak-cumhuriyeti, Britannica), sonu yok.
- Kaynak: TDV `iran` (okundu) savaş için: "22 Eylül 1980'de İran topraklarına girdi" ve "18 Temmuz 1988'de İran'ın … ateşkes teklifini kabul etmesiyle son buldu". Ateşkesin yürürlük günü (20 Ağustos 1988) için ikinci kaynak çekmedim. Öteki günler (1932-01-23, 1937-07-04, 1975-03-06 / 1975-06-13, 1971-11-30) brief'ten. Kaynakta okumadım, yazmadan önce akademik neşirle doğrulanmalı.
- Öneri: ilgili künyelere (iran, irak-cumhuriyeti, turkiye-cumhuriyeti) madde olarak eklensin. Haritaya etkisi: Ebu Musa / Büyük-Küçük Tunb ve Ağrı kesiminde yerleşim noktası yok, Şattülarap'ta talveg değişimi nokta değiştirmez, yani yalnız kronoloji. 1971 adalar konusunda taraf tutulmasın: "İran 30 Kasım 1971'de adalara asker çıkardı; BAE (Şarika/Ras el-Hayme) egemenlik iddiasını sürdürüyor", iki tarafın kaynağıyla.

### B4.12 — Azerbaycan künyesi: "Sovyet çekilmesi" 1946-01-01, TDV ay veriyor  [TARİH-HATA (küçük)]
- Kimlik: `devletler.js:28935` kronoloji 2. madde (`t:"1946-01-01"`, "spring 1946", Iranica arama özeti)
- Kaynak: TDV `iran` (okundu): Sovyetler Mayıs 1946'da çekildi.
- Öneri: kaynak TDV iran'a yükseltilsin, `gun:"Mayıs 1946 (TDV iran)"`. Gün kaynakla bulunursa (çekilmenin tamamlanması, ≈9 Mayıs) o yazılsın. Bulunmazsa yıl hassasiyeti kalır.

## Sayılar
- Künye: 4 denetlendi (iran, kacar-sonu, gilan-sovyet-cumhuriyeti, azerbaycan-milli-hukumeti), 1 eksik künye (Mahabad).
- Kronoloji maddesi: ~30 okundu (iran 6, kacar sonu 2, gilan 6, azerbaycan 4, kronoloji_iran.js 1911-1923 arası 9, 1923-1945 dosyasından 2, halef 1, Irak 1).
- Yerleşim: ~20 tek tek okundu (Bacirge, Sero, Culfa, Astara, Zerenc, Nahçıvan, Tebriz, Reşt, Urmiye, Mahabad, Muhammere, Fâv, Ahvaz, Enzeli, Hürmüz, Kişm, Bender Abbas, Kotur, Manama), ayrıca 335 yerleşimin 1914 sonrası zincir imzaları sayıldı.
- Kırılma grubu (≥1914): 18 grup. 1914-1918 Irak grupları (`safevi→ingiltere`) Bölüm 3/Irak'a ait. Not: `kirilmalar.tsv` liste sırasını izliyor, tarih sırasını değil (Basra'nın `s:` dizisi sırasız), bu yüzden "safevi→ingiltere" bir çıkarım artığı.
- Bulgu: 12.

## Ölçülemedi / bulunamadı
- Iranica (pahlavi-dynasty, kurdish-republic-of-1946, boundaries): **403, çekilemedi**. Britannica 'Mahabad' da 403.
- Mahabad Cumhuriyeti'nin bitiş günü: TDV `kurtler` yalnız "aynı yılın sonunda" diyor. Gün bulunamadı.
- 9 Âbân 1304 = 31 Ekim 1925 için ikinci akademik kaynak çekilmedi. Çevrimi kendim yaptım.
- Hürremşehr (1980-10 / 1982-05-24) ve Fâv (1986-02 / 1988-04) günleri, 1932 / 1937-07-04 / 1975 / 1971 günleri kaynakta okunmadı (brief'ten).
- Culfa ve Astara için yaka tespiti koordinat karşılaştırmasına dayanıyor, GeoNames ile ölçülmedi.
- 1935 ad değişikliği (21 Mart 1935): TDV `iran` ilk 100 bin karakterinde yok, devamı okunmadı.


---

# EK — 12 Kasım 2026 teyit turu (403 yüzünden açık kalanlar)

**Yöntem:** Iranica'nın 403'ü otomatik çekmeye karşı engelmiş; sayfalar uygulamanın tarayıcısında açıldı ve maddeler
aynı köken içinden okundu (`iranicaonline.org/articles/<slug>/`). Okunan maddeler: ZAND DYNASTY, ANGLO-PERSIAN WAR
(1856-57), HERAT vi, AFGHANISTAN x (Political History), AQ QOYUNLŪ, CHOBANIDS, KĀR KIĀ, ĀḠĀ MOḤAMMAD KHAN, JANGALI
MOVEMENT, RASHT, CASPIAN SEA ii, AZERBAIJAN v. Çekilemeyen: KART (sayfa boş döndü), SARBEDARIDS (slug bulunamadı), KANDAHAR
(yalnız künye özeti), ESMĀʿĪL I (yalnız künye özeti). Britannica denenmedi. Ağır komut koşturulmadı.

| Açık soru (bulgu) | Iranica ne diyor | Sonuç / güncellenmiş öneri |
|---|---|---|
| Zend'in sonu (B3.2) | ZAND DYNASTY: Lütf Ali Han 1794'te Kirman'ı aldı, "dört ay tuttu", Kaçarlar ihanetle girdi; Bam'a kaçtı, teslim edildi, **Tahran'da Rebîülâhir 1209 / Kasım 1794**'te öldürüldü. | **ÇELİŞKİ:** TDV "Zendler" Cemâziyelâhir 1209 / Aralık 1794 diyor (Rebîülâhir 1209 ≈ 26 Eki–23 Kas 1794; Cemâziyelâhir ≈ 24 Ara 1794–21 Oca 1795, tablo hesabı). CLAUDE.md gereği TDV esas, Iranica `ic_not`ta beyan. 1794-01-01 her iki kaynağa göre yanlış. |
| **YENİ — Şiraz 1792** | ZAND DYNASTY: Ağa Muhammed Han Şiraz'a **1 Zilhicce 1206 / 21 Temmuz 1792**'de girdi (Kuhmarra'i). | **TARİH-HATA:** Atlasta Şiraz `zend`→`kacar` 1794-01-01. Öneri: Şiraz (ve Fars merkezi) `kacar` 1792-07-21; Zend 1792-1794 yalnız Kirman çevresinde kalır. |
| Herat 1856-57 (B3.11) | ANGLO-PERSIAN WAR: Herat **Ekim 1856 sonunda** İran'a düştü; Paris barışı **4 Mart 1857**; İran çekilmeden önce Sultan Ahmed Han'ı (Dost Muhammed'in yeğeni) bıraktı. HERAT vi: Herat 1842'ye dek Sadozay (Kâmran), 1842'de vezir Yâr Muhammed onu öldürdü; İran'ın Herat üzerindeki iddiası 1857'de bitti. | B3.11 **teyitli**. Herat 1826'dan `afganistan` (Bârekzay) boyanması yanlış: 1826-1842 Sadozay (Kâmran), 1842-1856 Yâr Muhammed ve ardılları (yarı bağımsız). Kaçar dönemi 1856-10-01 (yıl-ay hassasiyeti, beyanlı; "end of October") → çekiliş günü bulunamadı (yalnız "1857"). |
| Galzay sonu / Kandehar 1738 (B2) | AFGHANISTAN x: Mîr Veys ayaklanması **1121/1709**; Kandehar'ın düşüşü **1150/1738**, Kâbil 1151/1738. | Hicrî 1150 = 1 May 1737–19 Nis 1738 → künye t'sinin 1738-03-24'e çekilmesi önerisi bu aralıkla **uyumlu** (gün Iranica'da yok, teyitsiz). f 1709 teyitli. |
| Akkoyunlu sonu / 1503 (B1, B2) | AQ QOYUNLŪ: çöküş **sonbahar 907/1501** yenilgisiyle başladı; Irâk-ı Acem, Fars, Kirman **yaz 908/1503**; Diyarbekir 913-14/1507-08; Irak **sonbahar 914/1508**. | Hicrî 908 25 Haziran 1503'te bitiyor → "yaz 908" ≈ Mayıs–Haziran 1503. İsfahan, Şiraz, Kirman, Tahran, Kâşân'ın 1503-01-01 Safevî başlangıcı **en az 4 ay erken**. Alma-Kulağı günü hâlâ teyitsiz; Iranica'yla en erken 1503-05-01 (beyanlı). |
| Çobânîler (B1.1) | CHOBANIDS: hâkimiyet **30 Kasım 1335 – 758/1357**; Çobânîler Celâyirlileri Maraga yakınında **26 Haziran 1340**'ta YENDİ; Melik Eşref'i Altın Orda hanı Cani Bey 758/1357 baharı sonunda yakalayıp Tebriz'de astı. | B1.1 **teyitli ve güçlendi**: Tebriz'in 1340-01-01'den `celayirli` boyanması iki kaynağa da aykırı. Öneri: Azerbaycan grubu 1338/1340 → 1357 `cobaniler`; 1357 kısa Altın Orda; Celâyirli 1358'den (TDV). |
| Gîlân / Reşt (B1 hayalet) | KĀR KIĀ: Kiyâlar **Doğu Gîlân (Biyepiş, merkez Lâhîcan)** ve Deylem'e hâkimdi; Şah Abbas **1000/1592**'de ilhak etti. Reşt ve Fûmen **Biyepes**'te ayrı emirlerin elindeydi (Reşt emiri Tâcâsbî, Fûmen emiri İshakvend); Fûmen emiri Reşt'i 865-867/1461-63'te aldı. | **SINIR + EKSİK-DEVLET:** Reşt'in 1353-1592 `gilan-kiya` boyanması yanlış; Biyepes (Fûmen/İshakiye emirliği) künyesi yok. Lâhîcan için 1592 teyitli. |
| Kaçar kuruluşu (B3.3) | ĀḠĀ MOḤAMMAD KHAN: merkezini Sârî'den Tahran'a taşıdı; "**1203/1788-89'da Tahran'da tahta çıktı** (henüz taç giymeden)"; taç 1796 (1210). | B3.3'teki "kaynaksız" hükmü **düzeltildi**: künyedeki 1789-03-21 (Nevruz 1203) Iranica'yla uyumlu. TDV ise 12 Mart 1786 (11 Cemâziyelevvel 1200) veriyor. **ÇELİŞKİ**: TDV esas → f 1786-03-12; Iranica 1203 `ic_not`ta. Karar Emre'nin. |
| Gîlân SSC sonu (B4.7) | JANGALI MOVEMENT: kuruluş **5 Haziran 1920**. CASPIAN SEA ii: Sovyet askerleri **Eylül 1921**'de çekildi. RASHT: Rıza Han Reşt'i **Kasım 1921**'de işgal etti; Kûçek Han 2 Aralık 1921'de öldü. | Künyedeki iki bitiş çözüldü: Eylül = Sovyet çekilmesi, cumhuriyetin sonu Kasım 1921 → `t:"1921-11-01"` yıl-ay hassasiyetiyle **doğru**, beyan eklenmeli. f 1920-06-05 teyitli. |
| Azerbaycan Millî Hükûmeti (B4.6) | AZERBAIJAN v: Tebriz **10 Aralık 1945**'te Demokrat Parti'nin elindeydi, "kısa süre sonra" özerk hükûmet ilan edildi; İran ordusu 9 Aralık 1946'da girdi; **21 Âzer 1325 / 13 Aralık 1946**'da Pişeverî Bakü'ye kaçtı, İran kuvvetleri Tebriz'e girdi. | Öneri: t 1946-12-12 → **1946-12-13**. f 1945-12-12 Iranica'yla çelişmiyor (gün teyitsiz). |
| Mahabad (B4.5) | AZERBAIJAN v: Kadı Muhammed Kürt Cumhuriyeti'ni **15 Aralık 1945**'te açtı; **15 Aralık 1946**'da Mahabad'ın teslimini ilan etti. | **ÇELİŞKİ**: TDV "Kürtler" kuruluşu 22 Ocak 1946 veriyor. TDV esas → künye f 1946-01-22, t **1946-12-15** (Iranica); 15 Aralık 1945 `ic_not`ta. Bitiş günü artık bulundu. |
| Astara / Culfa (B4.4) | — (Iranica'da sınır cümlesi okunmadı) | Koordinat okundu: Astara 38.4292/48.8728 (Astara çayının güneyi = İran Astara'sı), Culfa 38.955/45.63 (Aras'ın kuzeyi = Nahçıvan Culfa'sı olasılığı yüksek). Yine **kaynakla ölçülmedi** (GeoNames/harita). |
| Serbedârî / Kert sınırları (B1.5) | KART boş döndü, SARBEDARIDS bulunamadı | Hâlâ yalnız TDV'ye dayanıyor; **ölçülemedi**. |

**Ek turun sayıları:** 12 açık sorudan **10'u kapandı**, ikisi kısmen (Zend sonu, Herat, Çobânî, Reşt/Gîlân, Kaçar kuruluşu,
Gîlân SSC, Azerbaycan, Mahabad tam; Kandehar ve Akkoyunlu 1503 yalnız ay/aralık düzeyinde). **2 yeni bulgu:** Şiraz 1792-07-21
(TARİH-HATA) ve Biyepes emirliği künyesinin yokluğu (EKSİK-DEVLET). **1 bulgu düzeltildi:** B3.3 "kaynaksız" → "ÇELİŞKİ".
**3 yeni TDV–Iranica çelişkisi:** Zend sonu, Kaçar kuruluşu, Mahabad kuruluşu. Açık kalan: Astara/Culfa (kaynakla ölçülmedi),
Serbedârî/Kert sınırları, Herat'ın 1857 tahliye günü, Alma-Kulağı günü. Toplam bulgu 62 → **64**.

**Öteki oturumlara not:** Iranica'nın 403'ü yalnız otomatik çekmeyi engelliyor; uygulamanın tarayıcısında sayfalar açılıyor.

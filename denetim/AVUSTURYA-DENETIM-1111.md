# AVUSTURYA DENETİMİ 1111 — Habsburg Avusturyası → Avusturya-Macaristan → I./II. Cumhuriyet

**Tür:** yalnız denetim. `data/` altında hiçbir dosya değiştirilmedi.
**Ölçüm yeri:** KASA, worktree `inspiring-jemison-35a7a1`, `origin/main` ile eşit (`HEAD..origin/main` = 0), 11 Kasım 2026.
**Aletler (salt okur, scratchpad'de):** `av_kirilma.py` (zincire giren/çıkan her yerleşim kırılması + ±30 gün madde), `av_hayalet.py` (`s:` dönemi ↔ künye ömrü), `av_mukerrer.py` (35 anahtar olayın bütün kronoloji dosyalarındaki günleri). Yükleyici `arac/girdi.py yukle`, madde evreni `denetle.olaylari_yukle()` (olaylar*.js + kronoloji_sinir*.js) + künye `kronoloji:` alanları ayrıca.
**Kaynak teyidi:** üç alt ajan (Sonnet; 1282–1699 · 1700–1815 · 1815–1955) + ikinci tur. ⚠️ Alt ajanlar çoğu yerde **arama özeti** okudu, sayfayı açmadı; aşağıda her bulgunun teyit düzeyi yazılıdır: **[T]** kurumsal/akademik kaynak sayfası ya da özeti alıntılı · **[Z]** yalnız Vikipedi/ikincil ya da tek özet (uygulamadan önce sayfa açılmalı) · **[İ]** yalnız atlasın kendi iç tutarsızlığı (kaynak gerekmez).

Zincir ve harita anahtarları (ölçüldü):

| künye | f → t | harita anahtarı | yerleşimlerde `s:` kimliği |
|---|---|---|---|
| `avusturya-dukaligi` (Babenberg/Ottokar) | 1156-09-17 → 1276-11-21 | `avusturya` | — |
| `habsburg` | 1282-12-27 → 1918-11-12 | `avusturya` | `avusturya` |
| `macaristan-habsburg` | 1526-12-17 → 1918-11-16 | `macaristan` | `macaristan-habsburg` |
| `avusturya-hollandasi` | 1714-01-01 → 1795-10-01 | kendisi | `avusturya-hollandasi` |
| `lombardiya-venedik` | 1815-06-09 → 1866-10-12 | kendisi | **kullanılmıyor** (yerleşimler `avusturya`) |
| `avusturya-cumhuriyet` | 1918-11-12 → 1938-03-13 | kendisi | `avusturya-cumhuriyet` |
| (1938–45) `almanya` | 0962-02-02 → 1945-06-05 | `almanya` | `almanya` |
| `avusturya-ikinci-cumhuriyet` | 1945-04-27 → | `avusturya-cumhuriyet` | `avusturya-ikinci-cumhuriyet` |

---

## A. EN ÖNEMLİ BULGULAR (öncelik sırası)

### A1 · TARİH-HATA · İlirya'nın Avusturya'ya dönüşü 1813-01-01 — savaştan 7 ay önce [T]
- **Atlasta:** 34 yerleşim (Ljubljana, Trieste, Görz, Gradisca, Villach, Tarvis, Karlovac, Gospić, Cetin, Drežnik, Kostayniçe, Split, Sin, Klis, Knin, Nadin, Zadar adası/kıyı, Krk, Cres, Lošinj, Rab, Pag, Brač, Hvar, Korčula, Vis, Lastovo…) `fransa-cumhuriyet → avusturya` (27) ve `→ macaristan-habsburg` (7) **1813-01-01**'de. Madde: `data/olaylar_ilirya_0072.js:73` "Avusturya'nın İlirya Eyaletleri'ni ve Dalmaçya'yı geri alması" 1813-01-01.
- **Kaynak:** Avusturya 12 Ağustos 1813'te savaşa girdi. Austria-Forum *Illyrische Provinzen* (austria-forum.org/af/AustriaWiki/Illyrische_Provinzen): Ağustos 1813'ten sonra Tomassich ilerleyişi, yalnız Zara uzun direndi. *Zgodovina za vse* 2006/2 (sistory.si): Avusturya "17. oktobra 1813 razglasiti prevzem oblasti" (Ljubljana'da yönetimi devraldığını ilan). Trieste: şartlar 29 Ekim 1813, kale 8 Kasım 1813 [Z]. Zadar: Celić, hrcak.srce.hr/file/260408 — "Predaja Zadra potpisana je 5. prosinca. Sutradan je pobjednička vojska ušla u grad" (giriş 6 Aralık 1813); Knin 31 Ekim 1813 (aynı kaynak). Hrvatska enciklopedija *Ilirske pokrajine*: hukukî iade Paris (30 Mayıs 1814) ve Viyana (9 Haziran 1815).
- **Öneri:** tek gün değil, **kale kale**: Ljubljana/Karniyola 1813-10-17 (ikinci kaynak aranmalı) · Trieste 1813-10-29 · Knin 1813-10-31 · Zadar 1813-12-06 · Görz/Villach/Karlovac/Split/adalar: gün bulunamadı → merdiven ⑤ abi merkez (Görz/Villach → Ljubljana; adalar → Zadar ya da Split) + BEYANLI YAKLAŞIKLIK. Madde 1813-01-01 bölünmeli (Ekim ve Aralık 1813 maddeleri).

### A2 · HAYALET · Monarşi bittikten sonra 22 yerleşim hâlâ `avusturya` [İ+T]
- **Atlasta:** `habsburg` künyesi t=1918-11-12; ama `s:{d:"avusturya"}` dönemleri şuralarda sonra bitiyor: **Lvov, Yazlofça → 1919-09-10** (sonra `itilaf-emaneti`) · **Karviná → 1919-09-10** · **Dalmaçya adaları ve iç kesim** (Krk, Cres, Lošinj, Rab, Pag, Uzunada, Hvar, Korčula, Lastovo, Mljet, Knin, Nadin…) **→ 1919-09-10** · **Suçava, Çernovitz → 1918-11-28**. Toplam 22 yerleşim (av_hayalet ölçümü), 20'si Saint-Germain gününe kadar.
- **Kaynak:** Lvov — Batı Ukrayna Halk Cumhuriyeti 1 Kasım 1918'de Lvov'da ilan (Kyiv Post), Polonyalılar 22 Kasım 1918'de şehri aldı (FES *Revolution in der Westukraine 1918*) [Z]; atlasın kendisi Lvov'a 1918-11-22'den `isg:polonya` bindiriyor (dolayısıyla görünürde kısmen örtülü, ama alttaki sahip yanlış). Karviná — 5 Kasım 1918 Ostrava-Těšín ulusal konseyleri geçici anlaşması (Novotný, kba.vkol.cz) [T-özet], Spa kararı 28 Temmuz 1920 [Z]. Dalmaçya — İtalyan işgali Villa Giusti (3 Kasım 1918) hattına dayanır; 4 Kasım 1918 Vis, Lastovo, Korčula; Krk, Rab 26 Kasım; geri kalanı SHS Devleti Ulusal Konseyi [Z]. Bukovina — Romen ordusu Çernovitz'e 11 Kasım 1918'de girdi [Z], Bukovina Kongresi 28 Kasım.
- **Öneri (taraf tutmadan, seçenek Emre'ye):** 1918-11-12'den sonra hiçbir yerleşim `avusturya` kalmamalı. Lvov/Yazlofça: (a) 1918-11-01 `bati-ukrayna-halk-cumhuriyeti`, 1918-11-22 `polonya` (fiilî) ya da (b) 1918-11-12'den `itilaf-emaneti` (hukukî statü 15 Mart 1923'e dek askıda); iki tarafın kaynağı `ic_not`a. Karviná: 1918-11-05 hattına göre yerel yönetim, 1920-07-28 Spa → `cekoslovakya`; Ocak 1919 Çek harekâtı ayrı madde. Dalmaçya: ada ada İtalyan işgali (`isg:` italya) + alt sahip `shs-devleti` (1918-10-29 → 12-01) / `yugoslavya`; günler enciklopedija.hr'dan alınmadan yazılmasın. Bukovina: 1918-11-11 Romen girişi; 11-12 ↔ 11-28 arası `romanya-kralligi` işgali ya da `isg:`.

### A3 · SINIR · Bosna 1918-11-11'de "Sırbistan Krallığı"na veriliyor [İ+Z]
- **Atlasta:** 18 Bosna yerleşimi (Saraybosna, Mostar, Banaluka, Bihaç, Bijeljina, Foça, Livno, Konjic…) `avusturya → sirbistan-kralligi` 1918-11-11; 10 yerleşim (Bosanski Novi, Brač, Dubrovnik, Herceg Novi, Kotor, Ljubljana, Split…) `→ yugoslavya` 1918-11-11; 7 yerleşim `→ shs-devleti` 1918-10-29. Üç ayrı kimlik, iki ayrı gün.
- **Kaynak/iç ölçüm:** `shs-devleti` 1918-10-29 → 1918-12-01; `yugoslavya` künyesi f=**1918-12-01** (yani 11-11'deki `yugoslavya` 20 gün erken); Bosna hiçbir zaman Sırbistan Krallığı'nın parçası olmadı — Bosna Ulusal Konseyi SHS Devleti'ne katıldı (29 Ekim/1 Kasım 1918) [Z, enciklopedija.hr ile teyit edilmeli].
- **Öneri:** Bosna, Dalmaçya, Slovenya ve Hırvatistan'ın bütün kırılmaları 1918-10-29'da `shs-devleti`, 1918-12-01'de `yugoslavya`. Kotor 1918-11-11 → aynı.

### A4 · SINIR / EKSİK · Avusturya'nın İtalya'daki 18. yüzyıl mülkleri haritada yok [T-kısmi]
- **Atlasta:** Napoli 1281–1861 kesintisiz `napoli`; Palermo 1282–1816 `sicilya-aragon`; Parma/Piacenza 1545–1802 `parma`. Milano 1714-03-07'den.
- **Kaynak:** Treccani *Tiberio Carafa* (Dizionario Biografico): Temmuz 1707'de Daun'un Avusturya ordusuyla Napoli'ye dönüş; Treccani *Regno di Napoli*: 1734 Carlo di Borbone (Bitonto 25 Mayıs 1734) [T-özet]; Spagnoletti: Avusturyalılar Napoli'yi "since 1707" yönetti [Z]. Sicilya 1720–1735, Sardinya 1708–1720, Parma 1735/36–1748 Avusturya: **bulunamadı** (genel bilgi, kaynaksız).
- **Öneri:** Napoli için `s:` dönemi 1707-07 → 1734-05 `avusturya` (gün: Treccani/Galasso'dan; bulunamazsa yıl-ay beyanı). Sicilya, Sardinya, Parma için ayrı araştırma turu. Milano 1706-09 Avusturya girişi ↔ 1714-03-07 Rastatt seçimi `ic_not`ta beyan.

### A5 · TARİH-HATA · 1716 savaşı: Lippa, Becskerek, Becse 1716-01-01'de Habsburg [Z]
- **Atlasta:** `data/yerlesimler_ek_macaristan.js` Lippa (Lipova), Becskerek (Zrenjanin), Becse `osmanli → macaristan-habsburg` **1716-01-01**; ±30 günde ilgili madde yok (en yakını "Omsk kalesi kuruldu"). Sessiz kırılma.
- **Kaynak:** Osmanlı savaşı Nisan 1716'da ilan etti, Petervaradin 5 Ağustos, Temeşvar kuşatması 31 Ağustos–13 Ekim 1716 [Z]. Lippa Karlofça'dan sonra Osmanlı (Temeşvar eyaleti).
- **Öneri:** abi merkez Temeşvar → **1716-10-13** (atlasın Temeşvar/Lugos günü) + BEYANLI YAKLAŞIKLIK, ya da Bánlaky (MEK) ile kale kale gün. Madde: "Banat'ın Habsburg eline geçişi" 1716-10-13 kapsamına bu üç yer eklenmeli.

### A6 · ÇELİŞKİ · Bosna ilhakı 5 Ekim / 6 Ekim 1908 [T]
- **Atlasta:** harita ve `data/olaylar_ek.js:91` **1908-10-05**; `data/devletler.js:240` (`habsburg` kronolojisi), `data/kronoloji_habsburg.js:682`, `data/kronoloji_sinir_avrupa_orta.js:47`, `data/kronoloji_sirbistan.js:294` **1908-10-06**. `bosna-isgal` künyesi t=1908-10-06, yerleşim `isg:` t=1908-10-05.
- **Kaynak:** DergiPark (baed 1036920): ilhak 5 Ekim 1908'de ilgili devletlere nota ile bildirildi; 1914-1918-online *Bosnian Crisis*: Babıâli'ye bildirim 6 Ekim; Franz Joseph'in manifestosu 7 Ekim (Austria-Forum) [T-özet]. TDV *Balkan Savaşı* 5 Ekim.
- **Öneri:** tek gün (TDV esas → 1908-10-05); künye kronolojisi, `bosna-isgal` t ve öteki 4 madde 10-05'e; `ic_not`: "5 nota / 6 Babıâli bildirimi / 7 manifesto".

### A7 · TARİH-HATA · Vasvár Antlaşması 1664-08-09 [T]
- **Atlasta:** `data/olaylar_ek5.js:260` ve `data/kronoloji_habsburg.js:265` 1664-08-09; Szatmár kırılması da 08-09.
- **Kaynak:** Magyar Nemzeti Levéltár (mnl.gov.hu/nemet/print/6391): "1664. augusztus 10-én írták alá".
- **Öneri:** 1664-08-10 (iki madde + Szatmár `s:` ucu).

### A8 · TARİH-HATA / KARIŞIK · Estergon 1683 [Z]
- **Atlasta:** `data/olaylar_ek3.js:34` ve `data/kronoloji_habsburg.js:285` 1683-10-09 "Parkan bozgunu ve Estergon'un kaybı"; yerleşim Estergon kırılması **1683-10-27** (madde 18 gün uzakta, ölçütü teknik olarak geçiyor).
- **Kaynak:** Parkány 7 ve 9 Ekim 1683; Esztergom teslimi 27 Ekim 1683 (çağdaş gravür "den 27 dito, glücklich erobert"), bir kaynak 28 Ekim [Z].
- **Öneri:** madde ikiye: 1683-10-09 Parkan · 1683-10-27 Estergon'un teslimi.

### A9 · HAYALET · Tirol, Vorarlberg, Breisgau, Salzburg 1805–1816 `almanya` [T]
- **Atlasta:** Pressburg (1805-12-26) sonrası Innsbruck, Landeck, Lienz, Brixen, Bregenz, Feldkirch, Freiburg, Konstanz `avusturya → almanya` (Trento ise `→ bavyera`); Salzburg 1809-10-14 → `almanya`. `almanya` künyesi Kutsal Roma'yı da kapsadığı için motor hayalet saymıyor, ama 6 Ağustos 1806'dan sonra "Almanya" diye bir devlet yok ve sahip yanlış.
- **Kaynak:** Historisches Lexikon Bayerns *Tiroler Aufstand (1809)*: Bavyera Tirol'ü 22 Ocak 1806 patentiyle devraldı; *Bayerische Herrschaft in Tirol (1806-1813/14)*: 11 Şubat 1806 sivil yönetimin devri; Vorarlberg Besitzergreifungspatent 30 Ocak 1806. Salzburg: Paris Antlaşması 28 Şubat 1810; Austria-Forum: "Am 12. September 1810 wurde die französische Verwaltung aufgelöst", Bavyera valisi 30 Eylül 1810'dan. Breisgau/Konstanz → Baden: gün bulunamadı.
- **Öneri:** Tirol/Vorarlberg → `bavyera` (1805-12-26 hukukî; fiilî 1806-01-22 / 1806-01-30 — seçim `ic_not`ta); Trento ile aynı kimlik. Salzburg 1809-10-14 → Fransız askerî idaresi, 1810-09-30 → `bavyera` (ya da 1810-09 yıl-ay). Freiburg/Konstanz → `baden` (künye varsa; gün araştırılacak).

### A10 · TARİH-HATA · Kotor/Boka 1814-01-01 doğrudan Avusturya [T]
- **Atlasta:** `data/yerlesimler_ek.js` Kotor ve Herseknovi `fransa-cumhuriyet → avusturya` 1814-01-01; ±30 günde ilgili madde yok (en yakın "Emu Plains" yolu, Avustralya).
- **Kaynak:** Hrvatska enciklopedija *Boka kotorska*: "Francuski general Gauthier branio se u Kotoru do 4. I. 1814."; Knežević (hrcak 389401): kapitülasyon 5 Ocak 1814, anahtarlar Karadağ metropoliti Petar I başkanlığındaki komisyona; Ivković (hrcak 102058): Avusturya birlikleri "u Boku kotorsku u srpnju 1814".
- **Öneri:** 1814-01-04/05 → `karadag` (ya da Boka-Karadağ geçici yönetimi; gün çelişkisi `ic_not`), 1814-07 → `avusturya` (yalnız yıl-ay teyitli; gün aranacak). Madde iki tane.

---

## B. ÖTEKİ BULGULAR

### B1 · 1282–1526 çekirdek
| # | kimlik | atlas | kaynak | sınıf | öneri |
|---|---|---|---|---|---|
| B1.1 | `data/yerlesimler_a78_avrupa.js` Linz, Freistadt, Gmünd | 1281-01-01'den `avusturya` (künye f 1282-12-27; `avusturya-dukaligi` t 1276-11-21) — Viyana/Graz ise 1276-11-21→1282-12-27 `almanya` | Austria-Forum *Rheinfelder Hausordnung*; Yukarı ve Aşağı Avusturya aynı Reichsverwaltung altındaydı, ayrı statü bulunamadı [Z] | HAYALET (3) + ÇELİŞKİ | 1281-01-01→1282-12-27 Viyana gibi `almanya` |
| B1.2 | `habsburg` f=1282-12-27 | Augsburg tevcihi 27 Aralık | Atlasın dayanağı **Österreichisches Staatsarchiv HHStA AUR 1792 "27.12.1282"** (birincil belge). Alt ajan 17 Aralık (seçmen onayı) ve "Noel 1282" (Britannica) buldu | DOĞRU (çelişki beyanlı) | 27 Aralık kalsın; `ic_not`a 17 Aralık onay günü eklensin |
| B1.3 | Klagenfurt `yerlesimler_a78_avrupa.js` 1335-05-01 · Ljubljana `yerlesimler.js:1160` 1335-05-02 · `karintiya-dukaligi` t=1335-01-01 | üç farklı gün | Austria-Forum *Otto der Fröhliche*, NDB: "am 2. Mai 1335 in Linz die Herzogtümer Kärnten und Krain als Reichslehen" [T] | TARİH-HATA (Klagenfurt) + ÇELİŞKİ (künye t) | hepsi 1335-05-02 |
| B1.4 | Trieste `yerlesimler_avrupa.js` 1382-09-30 | kırılma doğru günde, **madde yok** | NDB Leopold III (ay+yer), dedizione 30 Eylül 1382 Graz [Z] | EKSİK-MADDE (sessiz değişim) | madde: 1382-09-30 "Trieste Habsburg himayesine girdi (Graz dedizionesi)" |
| B1.5 | Freiburg 1368-01-01 | madde yok (eşleşen ilgisiz) | HLS (hls-dhs-dss.ch 006617): "unterstellte sich 1368 freiwillig Österreich" — yalnız yıl [T] | EKSİK-MADDE | madde 1368-01-01 + yıl beyanı |
| B1.6 | Feldkirch 1379-01-01 | madde var | Monasterium AUR 1375 V 22: satış 22 Mayıs 1375; Habsburg vögtleri 1379 [T-özet] | ÇELİŞKİ (neyi tarihlediği) | `ic_not`: 1375-05-22 satış / 1379 fiilî devralma |
| B1.7 | Görz `yerlesimler_avrupa.js` 1500-01-01 · madde `kronoloji_sinir_avrupa_bati.js:516` 1500-01-01 | Lienz 1500-04-12 | NDB: Leonhard † 12.4.1500 Lienz [T] | TARİH-HATA | Görz kırılması ve madde 1500-04-12; mükerrer madde birleşsin |
| B1.8 | Gradisca, Cortina 1511-01-01 | madde var (yıl) | Botestagno 1511 [Z]; hukukî devir 1516/1521 bulunamadı | — | kalsın, `ic_not` |
| B1.9 | Konstanz `yerlesimler_avrupa.js` 1548-01-01 | **madde yok** | Konstanz "Spaniersturm" 1548 var; Reichsacht/teslim günü **bulunamadı** | EKSİK-MADDE | madde 1548-01-01 (yıl); HLS *Konstanz* ile gün aranmalı |
| B1.10 | Bohemya seçimi | `kronoloji_cok_habsburg.js:59` 1526-10-23, `gun:` "22 Ekim 1526 seçim" | Wien Geschichte Wiki 22 Ekim; HBI *Ferdinand I* (adw-goe) 23 Ekim [T] | ÇELİŞKİ (madde içinde) | `gun:` metni 23 Ekim'le hizalansın ya da iki kaynak beyan |
| B1.11 | Silezya 1526-12-05 | 8 yerleşim | gün **bulunamadı** | KAYNAKSIZ (teyit) | psp.cz diyet kayıtları |
| B1.12 | Čakovec `yerlesimler_p77_avrupa.js` | `macaristan-habsburg` **1526-08-29** (Mohaç) | künye f 1526-12-17; öteki 27 Macar yerleşimi 12-17 | HAYALET (110 gün) [İ] | 1526-12-17 |
| B1.13 | Cetin Meclisi 1527-01-01 (14 Hırvat yerleşimi) | `kaynak:` "YIL" diyor | Cetin belgesi 1 Ocak 1527 (soylular 31 Aralık 1526'da toplandı) [Z, enciklopedija *Cetinski sabor* açılmadı] | — (gün doğru, beyan yanlış) | `kesinlik` gün; `ic_not` düzelt |
| B1.14 | Gospić `yerlesimler_ek29.js` 1527 `avusturya`, 1689'dan `macaristan-habsburg`; Karlovac 1579 `avusturya`, 1813'ten `macaristan-habsburg` | aynı Askerî Sınır için iki kimlik | Hırvat Sınırı 1578'den Graz Hofkriegsrat yönetiminde, hukuken Hırvat tacı [Z] | ÇELİŞKİ [İ] | tek kural: Askerî Sınır ya hep `macaristan-habsburg` (taç) ya hep `avusturya` (idare) — Emre kararı |

### B2 · Osmanlı-Habsburg sınırı 1526–1791
| # | kimlik | atlas | kaynak | sınıf | öneri |
|---|---|---|---|---|---|
| B2.1 | `s:{d:"macaristan"}` 1527-01-01 sonrası | Banaluka, Yayça →1528; Segedin →1530; Klis →1537; Kalocsa →1541; İstolni Belgrad →1543; Hatvan, Vaç, Şimontorna →1544 | `macaristan` künyesi t=1527-01-01 (av_hayalet: `macaristan` anahtarı `macaristan-habsburg` ile birleşik ölçülünce örtülü görünüyor, **ama `s:` kimliği `macaristan`**) | HAYALET [İ] | Szapolyai tarafı `dogu-macar-kralligi` (1526-08-29→1541-08-29), Habsburg tarafı `macaristan-habsburg` — kale kale seçim |
| B2.2 | ilgisiz madde eşleşmesi (fiilen sessiz) | 1530-01-01 Gyula · 1532-01-01 Peçuy · 1538-01-01 Bosna Dubiçası · 1557-01-01 Bosna Novi, Debrecen, Tokaj, Varad · 1561/1564-01-01 Szatmár · 1686-09-23 Şimontorna · 1688-10-01 Semendire · 1689-09-16 Ćuprija · 1693-01-01 Yanova · 1716-01-01 (A5) | ±30 günde yalnız ilgisiz madde (Habeş Eyaleti, Cohor, Bâbürlü…) | SESSİZ-DEĞİŞİM | her biri için yer adlı madde; Değişmez 2'nin teknik geçişi yanıltıcı |
| B2.3 | Vaç `yerlesimler.js:1775` | 1684-06-27'den kalıcı `macaristan-habsburg` | Vác muharebesi 27 Haziran 1684 doğru; Budin kuşatması başarısız olunca Osmanlı Vác'a döndü, kesin kurtuluş 1686 [Z] | ÇELİŞKİ | Macar kaynağıyla (MKL/Hungaricana) 1684 sonbaharı geri dönüş teyit edilirse `d:` 1684-xx → 1686 |
| B2.4 | Lippa 1695-09-08 · Lugos/Karánsebes 1695-09-01 · madde `olaylar_ek3.js:59` 1695-09-22 | | Lippa Osmanlı baskınıyla 7 Eylül 1695; Lugos muharebesi 21 Eylül 1695; Karánsebes muharebeden sonra [Z] | TARİH-HATA | Lippa 1695-09-07; Lugos/Karánsebes ≥1695-09-21; madde 09-21 |
| B2.5 | Yanova (Ineu) 1693-01-01 | | **bulunamadı** | KAYNAKSIZ | Bánlaky |
| B2.6 | Belgrad 1717-08-18 | | Austria-Forum *Venezianisch-Österreichischer Türkenkrieg*: garnizon 18 Ağustos 1717 teslim; *Eugen von Savoyen* maddesi 17 Ağustos [T] | DOĞRU (çelişki beyanı) | `ic_not` 17/18 |
| B2.7 | 1788–91 işgalleri: Belgrad `isg` 1789-10-13, Bükreş `isg` 1789-11-01 | | Belgrad kalesi teslimi 8 Ekim 1789 (Wien Museum *Siegreiche Besitznehmung … Belgrad*: 7/8 Ekim) [T]; Bükreş girişi (10 Kasım?) bulunamadı | TARİH-HATA (Belgrad) | Belgrad `isg` f 1789-10-08 |
| B2.8 | Bukovina 1775-05-07 | | ilk Avusturya birlikleri 31 Ağustos 1774, Çernovitz 25 Ekim 1774'e kadar işgal; sözleşme 7 Mayıs 1775 [Z] | EKSİK (işgal) | 1774-08-31 → 1775-05-07 `isg:avusturya` + madde |
| B2.9 | 1737 Niş seferi | yok | Niş Temmuz 1737'de Avusturya'ya geçti, Ekim'de geri alındı — **bulunamadı** (genel bilgi) | EKSİK-MADDE (aday) | araştırma |
| B2.10 | Karlofça | `olaylar_ek3.js:63` 1698-11-13 "görüşmeler başladı" + 16 madde 1699-01-26 | — | DOĞRU | — |
| B2.11 | Pasarofça kelime çakışması | `olaylar_ek3.js:50` 1689-08-01 "Pasarofça Avusturya'ya düştü" | yer adı, antlaşma değil | — | — |

### B3 · 1700–1815
| # | kimlik | atlas | kaynak | sınıf | öneri |
|---|---|---|---|---|---|
| B3.1 | `avusturya-hollandasi` f=1714-01-01 | harita 1714-03-07 | Rastatt 7 Mart 1714 | ÇELİŞKİ [İ] | künye f 1714-03-07 |
| B3.2 | Mantova 1708-01-01 | madde yok | Gonzaga'nın azli 1708 (30 Haziran?) bulunamadı | EKSİK-MADDE | madde 1708 + gün araştırması |
| B3.3 | Freiburg 1677-01-01 → `fransa`; 1697-10-30 geri | ikisinin de maddesi yok | Freiburg kuşatması 9–16 Kasım 1677 [Z]; Ryswick İmparator-Fransa 30 Ekim 1697 | TARİH-HATA + EKSİK-MADDE | 1677-11-16; iki madde |
| B3.4 | Orsova/Adakale 1717-01-01 | madde yıl | gün bulunamadı | — | araştırma |
| B3.5 | Dalmaçya, İstria 1797-10-17 (Campo Formio) | 21 eski Venedik yerleşimi | Vekić (hrcak 249968): Avusturya askerleri Split'e 12 Haziran 1797; Venedik şehrine 18 Ocak 1798. `venedik` künyesi t=1797-05-12 ⇒ 21 yerleşim 1797-05-12→10-17 **künyesiz** (av_hayalet) | HAYALET + TARİH | Dalmaçya 1797-06 (Split 1797-06-12), İstria gün aranacak; Venedik şehri `fransa-cumhuriyet` → 1798-01-18 `avusturya` (hukukî 10-17 beyanı). Venedik oturumuyla ortak |
| B3.6 | `olaylar_napolyon_italya_1028.js:19` 1800-06-04 "Marengo sonrası Napolyon Cisalpin Cumhuriyeti'ni yeniden kurdu" | | Cisalpin 15 Prairial VIII = 4 Haziran 1800'de yeniden kuruldu; Marengo 14 Haziran [Z] | ÇELİŞKİ (metin) | gün kalsın, metin "Marengo'dan önce, Milano'ya girişle" |
| B3.7 | Kotor 1806-01-01 → `rusya`, 1807-01-01 → `fransa` | yıl | Rus işgali Mart 1806, Tilsit sonrası 1807 Fransa — gün bulunamadı | KAYNAKSIZ | araştırma |
| B3.8 | Tirol 1814-06-03 (`kronoloji_sinir_avrupa_orta.js:37`) | Paris Avusturya-Bavyera antlaşması | 3 Haziran 1814 teyit edilmedi; Ried 8 Ekim 1813, Münih 14 Nisan 1816 | KAYNAKSIZ (teyit) | — |
| B3.9 | Lombardiya-Venedik künyesi | yerleşimler bu kimliği kullanmıyor (`avusturya`) | — | [İ] not | künye ya haritaya bağlansın ya `ozet`te beyan |

### B4 · 1815–1918
| # | kimlik | atlas | kaynak | sınıf | öneri |
|---|---|---|---|---|---|
| B4.1 | Lombardiya 1859-06-04 (Magenta) | 7 yerleşim | Milano'ya giriş 8 Haziran, Villafranca 11 Temmuz, Zürih 10 Kasım 1859 — teyit turu yapılmadı | ÇELİŞKİ (neyi tarihlediği) | gün seçimi `ic_not` |
| B4.2 | `lombardiya-venedik` t=1866-10-12 | harita 1866-10-03 | Viyana Barışı 3 Ekim (DHM LeMO 1866); İtalyan bayrağı Venedik'te 19 Ekim; plebisit 21–22 Ekim; 12 Ekim onay günü olabilir [Z] | ÇELİŞKİ [İ] | künye t 1866-10-03 ya da 10-19, gerekçe `ic_not` |
| B4.3 | Milano 1848 Beş Gün | kırılma yok | 18–22 Mart, geri dönüş 6 Ağustos 1848 — teyit edilmedi | EKSİK (aday) | `isg:` adayı |
| B4.4 | Ausgleich 1867-05-29 | | 8 Haziran taç DOĞRU (tt.com); 29 Mayıs kabul günü bulunamadı; kanun yaptırımı 28 Temmuz? | KAYNAKSIZ (teyit) | ÖAW Ministerratsprotokolle |
| B4.5 | Novi Pazar sancağı garnizonları 1879–1908 | Plevlja/Prijepolje yerleşimi yok | — | EKSİK (aday) | araştırma |
| B4.6 | I. Dünya Savaşı işgalleri | Belgrad 1915–18, Udine/Veneto 1917-10-28→1918-11, İşkodra/Arnavutluk 1916–18 için `isg:` yok (Cetinje var) | Udine 28 Ekim 1917 (turismofvg.it) [Z]; Belgrad 9 Ekim 1915 (bir kaynak 11 Ekim) [Z]; MGG Serbien 1 Ocak 1916 | EKSİK | `isg:` + madde (Belgrad, Udine, İşkodra) |
| B4.7 | 1918-10-30 `olaylar_ok109.js:101` "Avusturya Cumhuriyeti'nin kuruluşu" + 1918-11-12 "ilânı" | | 30 Ekim'de **Alman-Avusturya devleti** kuruldu, cumhuriyet 12 Kasım | ÇELİŞKİ (metin) | 10-30 başlığı "Alman-Avusturya devletinin kuruluşu (Geçici Millî Meclis)" |
| B4.8 | `habsburg` kronolojisi "1918-11-11 son" | künye t 1918-11-12 | Karl'ın bildirisi 11 Kasım | — | kabul edilebilir; `ic_not` |
| B4.9 | `macaristan-naiplik` 3 yerleşimde 1918-11-11 | Dimitrofça, Erdel (Kaloşvar), Zilah | künye f 1918-11-16; öteki 80 yerleşim 11-16 | HAYALET [İ] | 1918-11-16 |

### B5 · 1918–bugün
| # | kimlik | atlas | kaynak | sınıf | öneri |
|---|---|---|---|---|---|
| B5.1 | Burgenland: Eisenstadt `yerlesimler_p77_avrupa.js` `s:` 1920-06-04 → `avusturya-cumhuriyet`, `isg:macaristan-naiplik` 1920-06-04→1921-11-13 | madde `kronoloji_cok_habsburg.js:90` 1921-11-13 | Trianon imza 4 Haziran 1920 ama yürürlük 26 Temmuz 1921; Saint-Germain yürürlük 16 Temmuz 1920; Venedik Protokolü 13 Ekim 1921 (Austria-Forum AEIOU) [T]; jandarma girişi 28 Ağustos 1921 (TRUPPENDIENST), resmî katılım 5 Aralık 1921 (Austrian History Yearbook) [Z]; Sopron plebisiti 14–16 Aralık 1921 [T] | ÇELİŞKİ (hukukî gün) | `s:` 1921-07-26 (Trianon yürürlüğü) ya da 1920-07-16; görünür fiilî devir `isg` ile zaten 1921-11-13 — `ic_not`ta üç günün beyanı |
| B5.2 | Saint-Germain "ülke adı Avusturya oldu" (`devletler.js` `avusturya-cumhuriyet` 1919-09-10) | | Staatsform kanunu 21 Ekim 1919, StGBl. 484, ilan 23 Ekim 1919 (Austria-Forum *Staatsgesetzblatt*) [T-özet] | ÇELİŞKİ (metin) | madde metni: ad değişikliği 1919-10-21/23 ayrı madde |
| B5.3 | 1945–1955 Müttefik işgali | haritada yok; II. Cumhuriyet 1945-04-27'den tam egemen boyanıyor | I. Kontrol Anlaşması 4 Temmuz 1945 (yürürlük 24 Temmuz), II. 28 Haziran 1946 (avalon.law.yale.edu, history.state.gov) [T]; son askerin ayrılışı 25 Ekim 1955 **bulunamadı** | EKSİK | `isg:` dört bölge (Viyana dörtlü) 1945-04/05 → 1955-10-25 + madde 1955-10-25; `ic_not` |
| B5.4 | II. Cumhuriyet künye kronolojisi | 9 madde | 1955-05-15, 07-27, 10-26, 1994-06-12, 1995-01-01: kaynakları kurumsal (hdgoe.at, history.state.gov, EC) | DOĞRU | — |
| B5.5 | I. Cumhuriyet künye kronolojisi | 12 madde | 5 madde Vikipedi'yi ikinci dayanak kullanıyor; `1934-02-12` ve `1934-05-01`'de tek akademik olmayan dayanak (linz.at + Wikipedia) | KAYNAKSIZ (zayıf) | hdgoe.at / Austria-Forum ile değiştir |
| B5.6 | Anschluss 1938-03-13, Renner 1945-04-27 | | atlas kaynakları (Avalon, USHMM, DHM LeMO, TDV) | DOĞRU | — |

---

## C. SAYILAR

- **Künye:** zincir 6 (`habsburg`, `macaristan-habsburg`, `avusturya-hollandasi`, `lombardiya-venedik`, `avusturya-cumhuriyet`, `avusturya-ikinci-cumhuriyet`) + 1281 öncesi ilk halka (`avusturya-dukaligi`) + ömrü ölçülen komşu/ardıl 26 künye.
- **Madde:** künye kronolojileri 34 (13+12+9) · `kronoloji_cok_habsburg.js` 9 · 35 anahtar olayın bütün dosyalardaki 230 kaydı gün karşılaştırması · kırılma eşleşmesinde 225 grubun en yakın maddeleri. `kronoloji_habsburg.js`in 117 maddesi yalnız mükerrer/gün taramasından geçti, tek tek kaynak teyidi yapılmadı.
- **Yerleşim:** zincire dokunan **256 yerleşim**, **878 kırılma (225 gün×geçiş grubu)**, **43 `isg:` dönemi**.
- **Değişmez 2 (±30 gün, benim ölçümüm):** maddesiz 5 grup (Trieste 1382, Konstanz 1548, Freiburg 1677, Freiburg 1697, Mantova 1708) + 2000-12-31 ufuk ucu; **ilgisiz maddeyle geçen ~15 grup** (B2.2, A5, A10, B1.5).
- **Hayalet (`s:` künye ömrünü aşıyor):** 22 (`avusturya` 1918 sonrası) + 3 (Linz grubu 1281) + 1 (Čakovec) + 3 (`macaristan-naiplik` 11-11) + 10 (`macaristan` 1527 sonrası) + 21 (`venedik` 1797, Venedik oturumuyla ortak).
- **Bulgu:** A bölümü 10, B bölümü 47 satır → **57 bulgu** (TARİH-HATA 13 · HAYALET 7 · SESSİZ/EKSİK-MADDE 10 · EKSİK/EKSİK-DEVLET 9 · ÇELİŞKİ 14 · SINIR 2 · KAYNAKSIZ 7; bazı satırlar iki sınıflı).

## D. ÖLÇÜLEMEYENLER

- **`py arac/denetle.py` koşturulamadı:** `coz-c` (devletler_harita/donemler) KASA'da 19 paralel oturum altında sayfa dosyası tükendi (`Win32 error 1455`, fork hataları), süreç ~1 saatte 0 bayt üretti ve durduruldu. Resmî Değişmez 1/2/3/8 sayıları bu rapor için **ölçülmedi**; yukarıdaki ±30 gün sayımı kendi aletimle, aynı evrenle (olaylar*.js + kronoloji_sinir*.js) yapıldı. Push kapısı ayrı worktree'de `denetle`yi koşturacak (rapor veri değiştirmiyor).
- Üretilmiş harita (petek/bölge, Değişmez 8) ölçülmedi — sınır bulguları yerleşim verisi düzeyindedir.
- Alt ajan teyitlerinin çoğu arama özeti düzeyinde ([Z]); uygulama oturumu her [Z] bulgunun sayfasını açmalı.
- Bulunamayanlar: Silezya 1526-12-05, Konstanz 1548 günü, Yanova 1693, Orsova/Adakale 1717, Niş 1737, Bükreş 1789, Kotor 1806/1807, Napoli 1707/1734 günleri, Sicilya/Sardinya/Parma Avusturya dönemleri, Breisgau→Baden günü, Ljubljana 1813 ikinci kaynağı, Görz/Villach/Karlovac/Split 1813, Ausgleich 29 Mayıs, Novi Pazar garnizonları, son işgal askeri 1955-10-25, TDV *avusturya* ve *bosna-hersek* maddelerinin tam metni.

## E. KARAR GEREKEN (önerili)

1. **1918 sonrası tartışmalı topraklar** (A2): Doğu Galiçya (Polonya ↔ Batı Ukrayna), Cieszyn/Karviná (Polonya ↔ Çekoslovakya), Dalmaçya (İtalya ↔ SHS) — fiilî kontrol mü, hukukî askı mı?
   **Öneri:** haritada fiilî kontrol (`s:`, gerekirse `isg:`); hukukî statü ve öteki tarafın iddiası kronoloji maddesinde ve `ic_not`ta beyan. Taraf tutulmaz, yalnız sahada kimin olduğu çizilir. Kontrol günleri kaynakla ayrıca bulunmalı (bu raporda ölçülmedi).
2. **Askerî Sınır kimliği** (B1.14): `macaristan-habsburg` mı `avusturya` mı?
   **Öneri:** `avusturya` — Askerî Sınır Viyana'daki Hofkriegsrat'a bağlıydı, Hırvat-Macar sivil idaresinden ayrıydı; Hırvatistan-Slavonya'ya katılış (1881) günü kaynakla bulunup o gün `macaristan-habsburg`a geçiş + madde yazılmalı.
3. **Burgenland hukukî günü** (B5.1): 1920-07-16, 1921-07-26 ya da 1921-12-05?
   **Öneri:** hukukî Avusturya 1921-07-26 (Trianon yürürlüğü); 1921-11-13'e dek fiilî Macar `isg:`; Sopron ve çevresi 14–16 Aralık 1921 halk oylamasıyla Macaristan'da kalır (madde yoksa eklenir).
4. **1945–55 işgali** (B5.3): haritada `isg:` olarak gösterilsin mi?
   **Öneri:** evet — dört işgal bölgesi `isg:` olarak (Kontrol anlaşmaları 1945-07-04 ve 1946-06-28 maddeleriyle); işgalci künyeler yoksa ardıl künye kuralıyla açılır; bitiş ucu (son asker 1955-10-25) bulunamadı, beyanlı yazılır.

# LEHİSTAN-LİTVANYA — 12 Kasım 2026 ek denetim

Ölçüm: makine UMIT · worktree `reverent-allen-bb8c39` · HEAD 85896cb29 · salt okuma (data/ değişmedi, denetle/paketle koşmadı).
Mevcut rapor: `denetim/LEHISTAN-DENETIM-1111.md` (A1–A17, B1–B12) baştan okundu. Onun kapsadıkları burada **yinelenmedi**:
1340–1387 Kızıl Rutenya, Krewo/Jagiełło, Livonya şehirleri (Riga/Tartu/Pärnu/Cēsis 1581–1625), Kremençuk, Andrusovo günü,
Zuravno, Prusya/Kurland `tabi:` eksiği, Vilnius 1920-07-12/08-27, Orta Litvanya, 1939 Vilnius devri, 1918–1945 Polonya
şehirleri, Krakov Serbest Şehri, PRL. Karar dayanağı: `denetim/KASA-1112-KARARLAR.md` madde 4 (madde = imza günü,
sahiplik = fiilî devir), 5 (harita fiilî denetim), 6 (çelişkide iki bağımsız kaynak; tek kaynak ⇒ beyanlı, değişiklik yok).

## ① Ne ölçtüm (sayılarla)

- **27 yerleşimin** `s:` zinciri satır satır okundu (küçük regex betiği, scratchpad): Vilnius, Kaunas, Šiauliai, Klaipėda,
  Grodno, Minsk, Polotsk, Vitebsk, Mogilev, Gomel, Smolensk, Bryansk, Çernigov, Putivl, Pskov, Kiev, Jitomir, Braslav,
  Lutsk, Kamaniçe, Bar, Hotin, Suçava, Daugavpils, Jelgava, Liepāja, Königsberg.
- **10 künye** okundu: `litvanya-buyuk-dukalik` (devletler.js:805), `lehistan` (:816), `litvanya` (:5077),
  `litvanya-cumhuriyeti-yeniden` (:16162), `memel-bolgesi` (:17257), `orta-litvanya` (:17249), `kurland-dukaligi` (:17307),
  `smolensk-knezligi` (:17855), `kiev-knezligi-litvanya` (:17925), `bogdan` (:1079).
- 1686 Ebedî Barış, 1395/1401/1404/1430/1500/1503/1537/1563/1579/1655/1661 olayları için `devletler.js`, `kronoloji*.js`,
  `olaylar*.js` tarandı.
- Kaynak: VLE 6 madde açıldı (Liublino unija, Lietuvos sovietinė okupacija 1940–1941, ATR–Rusijos karas, LDK–Maskvos
  karai, Livonijos karas, Daugpilis, Klaipėdos kraštas); Encyclopedia of Ukraine 4 madde (Lublin Union, Podilia, Andrusovo,
  Eternal Peace); TDV 2 madde (Boğdan, Hotin); lituanistika.lt kaydı (Meilus 2007) ve ldkistorija.lt (Vilnius Üniv.).
- **13 bulgu** (E1–E13); 5 karar sorusu (④).

## ② Ne bulamadım / ölçemedim

- **PWN, PSB, Kwartalnik Historyczny açılmadı** (PWN 403/kapalı, KARARLAR "Erişilemeyen" satırı). Leh tarafından gün teyidi
  yok. Bazhum'daki Przegląd Historyczny 1974 (inkorporasyon aktları) PDF'i taranmış görüntü, okunamadı; UMK deposundaki
  "Przyłączenie czy przywrócenie" makalesi bağlantıyı kesti (çekilemedi).
- VLE 'Smolensko istorija', 'Klaipėdos krašto sukilimas' (404), 'Lietuvos okupacija 1940' (404) açılamadı.
- Polotsk 1563/1579, Polotsk/Vitebsk/Mogilev 1654, Minsk/Kaunas/Grodno 1655 için **gün** okunamadı (VLE yalnız yıl/ay veriyor).
- Boğdan'ın 1387 Leh metbûluğu (Petru Mușat'ın Lwów biatı): TDV 'Boğdan' anmıyor; başka akademik kaynak okunmadı.
- Değişmez 1/2/3/8 ve üretilmiş harita ölçülmedi (brief yasağı). Petek emilmesi hesaplanmadı.

## ③ Bulgular

### E1 — Vilnius ve LBD şehirleri 1654/1655–1661/1667 Rus işgali haritada yok [SINIR · SESSİZ-DEĞİŞİM]
- Kimlik: `Vilnius` yerlesimler.js:1285; `Kaunas` ek7:147; `Grodno` p0037:107; `Minsk` yerlesimler.js:1286; `Polotsk` ek7:157;
  `Vitebsk` ek7:159; `Mogilev` ek29:1016; `Daugavpils` ek7:143 — hepsi 1569-07-01 → 1772/1793/1795 kesintisiz `lehistan`.
- Atlasta: Smolensk'in 1654-10-03 kaybı var, ama aynı savaşta alınan LBD şehirleri hiç el değiştirmiyor; ±30 günde madde de yok.
- Kaynak: VLE 'Abiejų Tautų Respublikos–Rusijos karas' — "1655 07–08 J. Čerkasskio kariuomenė ir Ivano Zolotarenkos kazokų
  daliniai užėmė Minską, Vilnių, Kauną, Gardiną"; "1661 buvo išvaduotas Vilnius". E. Meilus, "Vilniaus pilių apsiaustis ir
  išvadavimas iš maskvėnų (1660–1661 m.)", *Vilniaus Žemutinė pilis XIV a.–XIX a. pradžioje*, Vilnius 2007, s. 81–99
  (lituanistika.lt/content/17512, özet): 1655-08-08 işgal, 1660-07-11 Pac şehri aldı, 1661-12-03 kale garnizonu teslim.
  Aynı yazar ldkistorija.lt/?p=8966 (Vilnius Üniv.): "occupied by the Russian troops from 8 August 1655 to 11 July 1660".
  VLE 'Daugpilis': "1656–67 užimtas Rusijos".
- Öneri: `Vilnius` 1655-08-08 → 1660-07-11 `rusya` (kale 1661-12-03'e kadar — `ic_not`). İki madde: 1655-08-08 Vilnius'un
  düşüşü, 1660-07-11 geri alınış. Kaunas/Grodno/Minsk: VLE yalnız "1655 07–08" → gün bulunana dek yazılmasın (ay başı yer
  tutucu yasak); Polotsk/Vitebsk/Mogilev 1654 ve Daugavpils 1656 aynı. Gün teyidi ayrı iş (KARAR 5 fiilî ilke gereği).

### E2 — Polotsk 1563–1579 Rus dönemi yok [SINIR · EKSİK-MADDE]
- Kimlik: `Polotsk` yerlesimler_ek7.js:157 — 1307 → 1569 LBD, 1569 → 1772 `lehistan`, kesintisiz.
- Kaynak: VLE 'Livonijos karas' — "1563 Ivano IV Rūsčiojo vedama kariuomenė užėmė Polocką"; "Per 1579 kampaniją buvo
  atsiimtas Polockas". VLE 'Steponas Batoras' aynı (arama özeti).
- Öneri: 1563 → 1579 `rusya` dilimi. Gün okunmadı (yaygın 15 Şubat 1563 / 30 Ağustos 1579 yalnız Vikipedi'de görüldü;
  D. Kupisz, *Połock 1579*, Bellona 2003 okunmalı). 1582-10-15 öncesi → kaynak günü yazılır, çevrilmez.

### E3 — Gomel 1500/1503–1537 Moskova dönemi yok; 1503 maddesinin yer listesi yanlış [SINIR · ÇELİŞKİ]
- Kimlik: `Gomel (Homel)` yerlesimler_ek29.js:1020 — 1281 → 1569 kesintisiz LBD. Madde `olaylar_ek16.js:254` (1503-04-02).
- Kaynak: VLE 'LDK–Maskvos didžiosios kunigaikštystės karai' — 1503 mütarekesiyle Moskova'ya geçen yerler arasında
  Çernigov, Starodub, **Gomel**; "1537 paliaubomis atgavo Gomelį".
- Madde 1503-04-02'nin `yer:` alanı "Kiev, … Poltava" sayıyor; Kiev 1503'te devredilmedi (atlas zinciri de Kiev'i LBD'de
  tutuyor; VLE "Kijevo kunigaikštystės dalis").
- Öneri: Gomel 1503-04-02 → 1537 `moskova` (1537 günü okunmadı → `1537-01-01` + "[yalnız yıl]"); 1537 mütareke maddesi.
  1503 maddesinin `yer:` alanından Kiev ve Poltava çıkarılsın, Gomel eklensin.

### E4 — Kamaniçe/Bar Polonya'ya 1430-01-01'de geçiyor: Vytautas'ın ölümünden önce [TARİH-HATA]
- Kimlik: `Kamaniçe` yerlesimler.js:586, `Bar (Podolya)` :1587 — `litvanya-buyuk-dukalik` t / `polonya-erken` f = 1430-01-01.
- Atlasın kendi maddesi: `kronoloji_cok_rusya.js:759` "1430-10-27 Vytautas öldü".
- Kaynak: Encyclopedia of Ukraine 'Podilia' — "After the duke's death the pro-Polish gentry of middle Podilia declared it
  Polish"; "After 1430 only eastern Podilia, with the towns of Bratslav and Vinnytsia, remained under Lithuania". Arama
  özetinde (Cambridge, *Late Medieval Podillya*, okunmadı) "1430 … seizure of Kamyanets by pro-Crown nobles".
- Öneri: kırılma 1430-10-27'den önce olamaz. Gün bulunana dek `1430-10-27` (ölüm günü, "ölümün ardından" ifadesinin
  en erken ucu) + beyan; ya da en az "[yalnız yıl; 27 Ekim sonrası]" notu. Madde: "Vytautas'ın ölümü üzerine Batı Podolya
  soyluları Kamaniçe'yi Taç'a bağladı".
- Ek (tek kaynak, beyanlı, değişiklik önerilmez): EU aynı maddede "Vytautas ceded middle Podilia to Jagiełło (1395) but
  later reclaimed it (1411)" diyor; atlas 1363–1430 kesintisiz LBD.

### E5 — Smolensk 1395–1401 Litvanya dönemi haritada yok, künyede var [SINIR · SESSİZ-DEĞİŞİM]
- Kimlik: `Smolensk` yerlesimler.js:1291 — 1054 → 1404 `smolensk-knezligi`. Künye `smolensk-knezligi` (devletler.js:17855)
  kronolojisinde 1395-01-01 "Vytautas Smolensk'i ilk kez ele geçirdi" maddesi (Treccani) var.
- Yani madde var, harita kırılması yok. 1401'de Yuri Svyatoslaviç şehri geri aldı.
- Öneri: 1395 → 1401 `litvanya-buyuk-dukalik` (yıl hassasiyeti, beyanlı), 1401 maddesi. Gün kaynağı (VLE 'Smolensko istorija')
  bu turda açılamadı.

### E6 — Volhinya/Kiev/Braslav 1569'da Taç'a Lublin'den önce geçti [TARİH-HATA]
- Kimlik: `Lutsk` p0037:117, `Kiev` yerlesimler.js:1169, `Jitomir` ukrayna_0916:21, `Braslav` ukrayna_0916:19 — LBD → `lehistan`
  1569-07-01.
- Kaynak: VLE 'Liublino unija' — "LDK Kijevo, Podolės (Braclavo), Voluinės, Palenkės vaivadijos … įsakymu 1569 03–06 buvo
  prijungtos prie Lenkijos"; birlik aktı "07 01". EU 'Lublin, Union of' bunları birliğe bağlıyor (gün vermiyor).
- Tek tek günler (Podlasie 5 Mart, Wołyń 26/27 Mayıs, Kijów 5/6 Haziran 1569) yalnız arama özetlerinde görüldü — okunmadı.
- Öneri: bu şehirler 1569-07-01'den önce `polonya-erken`e geçmeli. Volhinya günü (Mayıs sonu) 1569-07-01'e 30 günden uzak
  → ayrı madde gerekir. Gün akademik kaynakla okunana dek değişiklik yapılmasın; `ic_not`a VLE "1569 03–06" beyanı yazılsın.

### E7 — 1686 Ebedî Barış (Grzymułtowski) maddesi atlasta yok [EKSİK-MADDE · ÇELİŞKİ]
- Kimlik: `devletler.js`, `kronoloji*.js`, `olaylar*.js` içinde 1685–1686'da Lehistan-Rusya barışını anan madde **0**.
- Atlasta: `Kiev` 1667-02-09 kalıcı `rusya`. Kaynak: EU 'Andrusovo' — "Kyiv was to remain in Muscovite hands for two years,
  but the Muscovites kept it permanently". Hukukî devir 1686'dır (EU 'Eternal Peace': "Left-Bank Ukraine with Kyiv (for a
  compensation of 146,000 rubles)").
- Gün çelişkisi: EU "signed in Moscow on 16 May 1686"; ejournals.eu'daki makale (arama özeti, okunmadı) "6 maja 1686
  (27 IV st.st.)".
- Öneri: Kiev'in harita kırılması 1667'de kalsın (KARAR 5 fiilî). `lehistan` ve `rusya` künyelerine 1686 maddesi eklensin;
  gün iki bağımsız kaynakla teyit edilene dek EU'nun 16 Mayıs'ı + `ic_not` "6 Mayıs (yeni üslup) diğer kaynakta". Beyanlı.

### E8 — Litvanya'nın SSCB'ye ilhakı 1940-08-06 değil (Estonya günü) [TARİH-HATA]
- Kimlik: künye `litvanya` t=1940-08-06 (devletler.js:5078); `Vilnius`, `Kaunas`, `Šiauliai` 1940-08-06 → `sovyet-rusya`.
  Künyenin kendi `ic_not_t`si "Litvanya'nın kendi günü (3 Ağustos)" diyor.
- Kaynak: VLE 'Lietuvos sovietinė okupacija ir aneksija (1940–1941)' — "1940 06 15 po pietų į Lietuvą įžengė Sovietų
  Sąjungos 15 divizijų"; "06 15 pavakarę … užėmė Vilnių"; "08 03 SSRS Aukščiausiosios Tarybos sesijoje LSSR buvo priimta į
  Sovietų Sąjungą". Atlas Letonya'ya (Jelgava, Liepāja, Daugavpils) doğru olarak 08-05 vermiş; 08-06 Estonya'nındır.
- Öneri: hukukî ölçütte `litvanya` t ve üç şehir **1940-08-03**. KARAR 5 (fiilî) uygulanırsa 1940-06-15 (bkz. ④-2).

### E9 — Klaipėda 1920 ve 1923 günleri üç farklı kayıtta [TARİH-HATA · ÇELİŞKİ]
- Kimlik: `Klaipėda (Memel)` ek7:153 — `itilaf-emaneti` 1920-01-10 → 1923-02-16 → `litvanya`. Künye `memel-bolgesi` f=1920-02-10,
  maddeler 1923-01-10 "Klaipėda'yı ele geçirdi", 1923-02-17 (kaynak yalnız Vikipedi).
- Kaynak: VLE 'Klaipėdos kraštas' — "1920 02 15 krašto valdymą perėmęs Prancūzijos generolas D. J. Odry"; "01 10 į Klaipėdos
  krašto teritoriją įžengusi apie 1500 sukilėlių"; "rinktinė 01 15 užėmė Klaipėdą"; "02 16 Ambasadorių konferencija Klaipėdos
  krašto valdymą … perdavė Lietuvos Respublikai".
- Öneri: madde 1923-01-10 metni "sınırı geçti" olsun, ayrıca **1923-01-15** "şehri ele geçirdi" maddesi; madde 1923-02-17 →
  **1923-02-16** (VLE). Sahiplik: KARAR 4'e göre fiilî devir 1923-01-15 (isyancılar Litvanya hükümetinin kurduğu kuvvet);
  hukukî tercih edilirse 02-16 kalır. 1920: `itilaf-emaneti` f 1920-01-10 (Versay yürürlüğü) ile künye f 02-10 ve VLE 02-15
  ayrışıyor — tek gün seçilmeli (VLE 02-15 tek kaynak → beyanlı).
- Ek: `memel-bolgesi` künyesi hiçbir yerleşimde `s:` sahibi değil (grep 0); harita onu göstermiyor.

### E10 — Klaipėda 1939: harita 03-22, künye 03-23; madde metni yanlış [TARİH-HATA]
- Kimlik: `Klaipėda` → `almanya` 1939-03-22; `memel-bolgesi` t=1939-03-23; madde 1939-03-23 "Litvanya ültimatomu kabul etti"
  (kaynak Vikipedi).
- Kaynak: VLE 'Klaipėdos kraštas' — "Lietuva 03 22 buvo priversta pasirašyti krašto perdavimo Vokietijai sutartį"; "03 23
  kraštą užėmė Vokietijos kariuomenė".
- Öneri: KARAR 4: madde 1939-03-22 (imza), sahiplik 1939-03-23 (Alman ordusunun girişi). Şehir kırılması 03-23'e alınsın;
  1939-03-23 maddesinin metni "Alman ordusu bölgeyi işgal etti" olsun, kaynak VLE.

### E11 — Hotin 1281–1359 Boğdan'a boyalı: künye 1359'da doğuyor [HAYALET]; 1673–1676 Leh dönemi yok [SINIR]
- Kimlik: `Hotin` yerlesimler.js:1557 — 1281-01-01 → 1456-06-01 `bogdan`; `bogdan` f=1359-01-01. Komşu `Suçava` aynı dönemde
  doğru olarak `altinorda` → 1359 `bogdan`.
- Kaynak: TDV 'Hotin' — "Burası hakkında ilk bilgiler XIV. yüzyıla kadar inmektedir"; "1387'de Hotin Kalesi dizdarlarının
  adlarına rastlanması"; "1673'te Leh kuvvetleri Hotin'e girdilerse de … Böylece kale Lehler'in eline geçti"; Zuravno
  sonrası "Osmanlı hâkimiyeti yeniden sağlam bir şekilde kuruldu".
- Öneri: Hotin 1281–1359 Suçava gibi `altinorda` (ya da kayıt 1359'dan başlasın; TDV ilk dizdar 1387). 1673–1676 Leh dilimi:
  TDV yalnız yıl veriyor; gün (Hotin muharebesi 11 Kasım 1673) Leh kaynağıyla okunmadı → gün bulununca yazılsın.
  Not: TDV doğrudan Osmanlı idaresini "1711'den sonra" diyor; atlas 1713-06-24 — çelişki değil, kaynağı ayrıca bakılmalı.

### E12 — Boğdan'ın Osmanlı tâbiliği 1456-06-01: TDV "1455 Eylülü" [ÇELİŞKİ — TDV esas]
- Kimlik: `bogdan` devletler.js:1081 `tabi:[{f:"1456-06-01", ust:"osmanli"}]`; Hotin/Suçava/Yaş kırılmaları aynı günde.
- Kaynak: TDV 'Boğdan' — Petru Aron'un Osmanlılara yılda 2000 altın haracı "1455 Eylülünden itibaren" ödediği.
- Öneri: CLAUDE.md "TDV esas": `tabi` f ay hassasiyetiyle 1455-09-01 + `ic_not` (1456-06-01'in kaynağıyla birlikte, ikisi
  beyan). Yerleşimlerin `k:"Boğdan Voyvodalığı"` statü kırılması da aynı güne. Günü taşımadan önce 1456'yı veren kaynak okunmalı.

### E13 — 1500–1503 Moskova kazanımlarında iki ayrı ölçüt [ÇELİŞKİ]
- Kimlik: `Bryansk` ek17:138 → `moskova` 1500-08-01 (fiilî); `Çernigov` ek17:122 ve `Putivl` ek17:132 → `moskova` 1503-04-02
  (mütareke). Madde `olaylar_ek16.js:254`ün kendi `ic_not_gun`ü: mütareke 25 Mart 1503, "veride 1503-04-02 kesinleşme günü".
- KARAR 4: madde = imza günü (25 Mart 1503, 1582 öncesi kaynak günü), sahiplik = fiilî devir. Çernigov/Putivl 1500'de
  Moskova eline geçmişti (VLE "1500 Ivanas III atnaujino karo veiksmus"; şehir günleri okunmadı).
- Öneri: madde 1503-03-25'e (kaynaktaki gün); Çernigov/Putivl fiilî alınış günü kaynakla bulunup Bryansk'la aynı ölçüte
  getirilsin. Gün yoksa değişiklik yok, beyan.

## ④ Karar gereken — Emre'ye öneriyle

1. **LBD künyesi 1569'da bitiyor.** Lublin bir reel birliktir; Litvanya Büyük Dükalığı ayrı hazine, ordu, hukuk (1588 Statüsü)
   ve memurlarla 1795'e kadar sürdü (VLE 'Lietuvos Didžioji Kunigaikštystė po Liublino unijos (1569–1795)' maddesi bu adla var).
   Atlas 1569'dan sonra Vilnius'u da Krakov'u da `lehistan`a boyuyor. Öneri: harita tek renk kalsın (ortak kral ve Sejm), ama
   `litvanya-buyuk-dukalik` t'si 1795-10-24'e uzatılıp `tabi`/`ust: lehistan` ile bağlanabilir. Karar Emre'nin; iki tarafın
   kaynağı: VLE (devamlılık) / EU 'Lublin' ve atlas `lehistan` künyesi (birleşik devlet).
2. **1940 Litvanya:** KARAR 5 (fiilî) ⇒ 1940-06-15 (VLE: Kızıl Ordu girişi). Hukukî ⇒ 1940-08-03 (VLE: SSCB'ye kabul).
   Bugünkü 08-06 ikisi de değil (E8). Litvanya tarihyazımı ilhakı tanımaz; "Laurinavičius–Nikžentaitis 08-03'ü işgalin şartlı
   sonu sayar" (arama özeti). Öneri: 06-15 işgal maddesi + 08-03 sahiplik; ya da 06-15 sahiplik. Taraf tutulmadı.
3. **1918 Litvanya:** `Vilnius`/`Kaunas`/`Šiauliai` 1918-02-16'da (bildirge günü) `litvanya`ya geçiyor; Alman işgal idaresi
   (Ober Ost) Kasım 1918'e kadar sürdü. KARAR 5 ile Alman dönemi uzar. Bu turda gün kaynağı okunmadı.
4. **1990-03-11 → 1991-09-06:** Yeniden Tesis Yasası 1990-03-11 (künye kaynağı), SSCB tanıması 1991-09-06 (künye maddesi).
   Arada Sovyet ordusu ve abluka sürdü. KARAR 5 ile hangisi "fiilî denetim"dir, Emre seçmeli; bugünkü 03-11 Litvanya
   görüşüdür.
5. **1655–1661 Vilnius (E1):** fiilî ilke uygulanırsa Lehistan-Litvanya'nın en büyük sessiz toprak kaybı haritaya girer
   (Vilnius, Kaunas, Grodno, Minsk + 1654 Polotsk/Vitebsk/Mogilev). Öneri: uygula; günleri E1'deki kaynaklarla, bulunamayanlar
   için madde ve kırılma birlikte bekletilsin.

---
Kısa özet — en önemli 3 bulgu:
- E1: Vilnius 1655-08-08 → 1660-07-11 Rus işgali (ve 1655 Kaunas/Grodno/Minsk) haritada ve kronolojide yok.
- E8: Litvanya'nın ilhakı 08-06 değil, VLE 1940-08-03 (fiilî 06-15); 3 şehir ve künye ucu yanlış.
- E4/E2/E3: Kamaniçe 1430-01-01 Vytautas'ın ölümünden önce; Polotsk 1563–79 ve Gomel 1503–37 Moskova dönemleri yok.

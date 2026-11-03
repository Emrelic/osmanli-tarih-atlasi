# 28 · Altın Orda — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (ölçer: top100_olc.py altinorda; TDV `altin-orda-hanligi` ve `timur` md. WebFetch ile okundu)

## Özet
- Künye: 1 ana (`altinorda`, künyede f 1242-01-01, t 1502-01-01); ardıllar `nogay`, `don-kazak`, `budjak-ordasi`, `kirim` ayrı; **Kazan, Astrahan, Sibir, Kazak, Büyük Orda künyesi yok** (kırım ve nogay var). Yerleşim 157 kayıt; en geniş an 1281 (155).
- Kırılma 28, AÇIK 17. Eksik madde önerisi 9.
- En ağır 3 bulgu:
  1. **Künye ömrü aşımı:** sekiz-on yerleşim dilimi `t:"1502-03-01"` (Kuban, Terek deltası, Astrahan, Bozkır, Kalmuk bozkırı, Ural eteği, Kamışin, Petrovsk, Samara, Syzran) künye `t:"1502-01-01"`'den 2 ay SONRA bitiyor (hayalet devlet kuralı). Neden: evrendeki madde `olaylar_ek5.js:147` `t:"1502-03-01"` yazılmış ama `gun:"1502"` (yalnız yıl) — uydurma ay. Ölçer bu yüzden 1502-01-01 kırılmasını AÇIK sayıyor (en yakın madde 59 gün).
  2. **Künye metni ve içi kronoloji yanlış/eksik tarihli:** `devletler.js` altinorda `kronoloji:` 1441'de "Kırım, Kazan, Astrahan ve Sibir hanlıkları ayrıştı" diyor; TDV'ye göre Kazan 1437-38 (süreç 1437-1445), Kırım 1441, Astrahan 1466-; Sibir'e kaynak yok. Timur "1395-01-01" yazılmış, TDV `timur`: Terek 23 Cemâziyelâhir 797 / 15 Nisan 1395. Kulikovo 8 Eylül 1380 (künye içi, evren dışı) evrende yok.
  3. **Moldova-Karadeniz kayıpları ve Kırım kıyısı için kaynaklı madde yok:** 17 AÇIK kırılmanın 12'si Bender/Akkirman/Yaş (1359), Çernigov/Kiev bölgesi (1362), Sudak (1365), Aluşta-Yalta (1380), Derbend (1382) gibi kaynaksız tarihler — hangi kaynağa dayandığı izlenemiyor.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| altinorda | Altın Orda (Deşt-i Kıpçak Hanlığı) | 1242-01-01 | 1502-01-01 | ana künye; `ozet` 1241'de kuruluşu söyler, f 1242 (beyanlı: `kronoloji_sinir_dogu_500_1281.js:8071-8088`: «TDV Kıpçaklar 1241: 1 yıllık fark künyede; öneri: altinorda f→1241») |
| nogay | Nogay Ordası | 1440-01-01 | 1783-01-01 | ilişki (parçalanma ardılı), bu denetim dışı |
| kirim | Kırım Hanlığı | 1441-01-01 | 1783-04-19 | ilişki; `kronoloji` 1502'de "Büyük Orda'yı ortadan kaldırdı" |
| don-kazak, budjak-ordasi, alas-ozerkligi | — | — | — | yalnız `ara orda` eşleşmesi, Altın Orda'yla doğrudan ilişkisi yok |
**Eksik parça/künye:** Kazan Hanlığı (TDV: 1437-1556), Astrahan Hanlığı (TDV listesi: 1466-1556), Sibir Hanlığı, Kazak Hanlığı (1465), **Büyük Orda** (≈1459/1465-1502, Altın Orda'nın asıl varisi) — atlas Büyük Orda'yı ayrı künye yapmamış, Altın Orda künyesini 1502'ye uzatmış. Bu yaklaşık-doğru ama beyan edilmeli. Künye varlığı (`devletler.js`'te `kazan`, `astrahan`, `sibir`, `kazak` id'leri) bu oturumda grep'lenmedi: **ölçülmedi**.

## b) f/t ve evreler
| uç | atlas değeri | kaynak 1 | kaynak 2 | hüküm | önerilen satır |
|---|---|---|---|---|---|
| f | 1242-01-01 | TDV `altin-orda-hanligi` (okundu): başlık «1241-1502 yılları arasında Deştikıpçak'ta hüküm süren» + «1241 yılında İdil nehrinin aşağı mecrasına dönerek "Orda" merkezini kurdu» | TDV `batu-han` (aktaran `olaylar_ortacag_bozkir.js:22` ic_not_d): «Eflak ve Boğdan üzerinden 1242 yılında yurduna döndü»; TDV `kipcaklar`: «(1241)» | **TDV iç çelişkisi (1241 / 1242)**; ikinci bağımsız akademik kaynak okunamadı (Halperin *Russia and the Golden Horde*; Cambridge History of Inner Asia). Atlas `1242`'yi dönüş/Saray temelli seçmiş ve beyanlı (iki yerde). | Mevcut hâli koru (1242-01-01, yıl) ya da f→1241-01-01: TDV Altın Orda md. esas ise 1241. Çelişki beyanı (`ic_not_f`) künyeye de yazılmalı (şimdi yalnız madde ve sınır kaydında var). Öneri: f 1242-01-01 koru + `ic_not_f` ekle. |
| t | 1502-01-01 | TDV `altin-orda-hanligi`: «Şeyh Ahmed Han (1481-1502)» (Mengli Giray anılmadı, okundu) | Britannica "Golden Horde" (arama özeti: «destroyed by the Crimean khan in 1502»; 403, okunamadı); EBSCO Research Starters (okunmadı) | Yıl 1502 iki kaynakta tutarlı; gün/ay kaynakta yok. Atlas künyesi 01-01 (doğru, yıl), ama evren maddesi `t:"1502-03-01"` (`olaylar_ek5.js:147`) ve yerleşim `t`'leri 1502-03-01 ile tutarsız. | `olaylar_ek5.js:147` t `1502-03-01`→`1502-01-01`, ek: `kesinlik:"yil"`; tüm yerleşim dilimlerindeki `t:"1502-03-01"` → `"1502-01-01"` (üretim betiğiyle yapılmalı) — künye aşımı (hayalet 2 ay) ortadan kalkar ve ölçerin 1502-01-01 AÇIK'ı kapanır. |
| Evre: Batu→Berke (1256) | evrende yok | TDV (okundu): Batu'nun 1256'da ölümü, Berke'nin han oluşu, Berke'nin «1266 yılı başlarında» ölümü | — | Evrende `olaylar_ortacag_anadolu_kafkasya.js:125` `1266-01-01 Berke Tiflis'e kadar geldi` doğru yönde ama Berke'nin ölümü madde değil. | Öneri c)'de. |
| Evre: Özbek Han | — | TDV: «Özbek Han (1315-1341)» ilgili-maddelerde «1313-1340» (iç tutarsızlık) | — | Hüküm süresi TDV'de bile iki aralık; madde yazılmadan önce üçüncü kaynak şart. | yazma, önce ara (TDV `ozbek-han`) |
| Evre: Toktamış–Timur | künye kron. (evren dışı) 1395-01-01 | TDV `timur` (okundu): Kondurça «Receb 793 (Haziran 1391)», Terek «23 Cemâziyelâhir 797 (15 Nisan 1395)», Azak/Hacıtarhan/Berke Sarayı yağma-yangını tarihsiz | TDV `altin-orda`: «Toktamış Han'ı 1391'de Kondurca'da, Nisan 1395'te de Terek'te…» (aynı yönde) | Kondurça hicrî ∩ Haziran 1391: tabloya göre Receb 793 = Jülyen 1391-06-04 → 07-02, ∩ Haziran → ilk gün **1391-06-04** (ay hassasiyeti); Terek tablosu: 23 Cemâziyelâhir 797 = Jülyen 1395-04-15 ✓ (TDV'nin 15 Nisan'ı ile tutarlı, hesap bu ajanın). Atlas künye kronolojisi `1395-01-01` yanlış gün. | `devletler.js` altinorda kronoloji `t:"1395-01-01"` → `"1395-04-15"`, b: "Timur Terek'te Toktamış'ı yendi; Hacıtarhan, Azak ve Berke Sarayı (Saray) yakıldı". |
| Evre: Kulikovo | künye kron. `1380-09-08` | Rus kaynak geleneği 8 Eylül 1380 (Britannica arama özeti; okunamadı) | TDV `altin-orda`: «Dimitri Donskoy… 1380'de ilk defa Altın Orda kuvvetlerine karşı başarıyla mücadele ettiler.» (yalnız yıl, okundu) | Gün tek kaynakta; TDV yıl verir. Halperin: Kulikovo galibi Toktamış'tır, savaş Tatar egemenliğini bitirmemiştir (arama özeti: "the real victor at Kulikovo was Tokhtamysh") — künyedeki "Rus bağımsızlığının başlangıcı" ifadesi tartışmalı. | `devletler.js` altinorda kronoloji madde b'sini "Kulikovo'da Moskova Knezliği Mamay ordusunu yendi (bağımsızlık değil)" diye düzelt; gün için ikinci kaynak lazım (TDV `kulikovo`/`dimitri-donskoy`). |
| Evre: bölünme | künye kron. `1441-01-01` | TDV `altin-orda`: Kazan «1437-1556»; Astrahan «1466-1556» | TDV `kirim` (aktaran `olaylar_ek16.js:111`): 1441 | Birleşik satır yanlış (Kazan 1437-38, Kırım 1441, Astrahan 1466, Sibir ?). | b: "Kazan (1437-38), Kırım (1441), Astrahan (1466) hanlıkları ayrıştı" ya da üç ayrı satır; Sibir kaldırılsın veya kaynaklansın. |
| Evre: Büyük Orda'nın sonu | `1502-01-01` | TDV `altin-orda`: Şeyh Ahmed (1481-1502) | Britannica/EBSCO özeti: 1502 | Yıl tamam; "Kırım Hanlığı tarafından dağıtıldı" ifadesi künye kron.'da, evrende `olaylar_ek5.js:147` Mengli Giray'ı anıyor ama TDV Altın Orda maddesi Mengli'yi anmıyor (okundu); TDV Kırım maddesi okunmadı. | Mengli Giray adı TDV `kirim` ile teyit edilmeli. |
İkinci bağımsız akademik kaynak (Cambridge, Halperin, Ostrowski, Vásáry) bu denetimde **hiç okunamadı**; hükümler TDV'ye dayanır, "iki bağımsız kaynak" şartı sağlanmadı.

## c) Kronoloji
Var olanlar (evren): Batu Kiev'i aldı 1240-12-01 (`olaylar_ortacag_bekleyen_acik.js:164`); Moskova 1238 (`olaylar_ortacag_bozkir.js:19`); Çernigov 1239-10-18 (`:20`); Kiev 1240 (`:21`); **Saray/Altın Orda kuruluşu 1242-01-01** (`:22`); Bulgar'ın alınışı (`kronoloji_sinir_dogu_500_1281.js:4322`); Berke Tiflis 1266 (`olaylar_ortacag_anadolu_kafkasya.js:125`); Kefe Cenova'ya 1266 (`kronoloji_sinir_once1281_geriye.js:52`); Sudak 1249 başlangıcı (`:256`); Podolya 1363 Mavi Sular (`kronoloji_sinir_lehistan_ukrayna_1028.js:8`); Kiev Litvanya'ya 1362 (`:52`); Nijni Novgorod yarlığı (`olaylar_ek16.js:653`, Toktamış); Timur–Toktamış Azerbaycan 1386 (`olaylar_ek5.js:16`); Kazan 1438-01-01 (`olaylar_ek16.js:103`); Kırım 1441-01-01 (`:111`); Altın Orda yıkılışı 1502-03-01 (`olaylar_ek5.js:147`, tarih hatalı yukarıda).
Evren dışı (var ama sayılmaz): künye içi 1242, 1380-09-08 Kulikovo, 1395, 1441, 1502.
Eksik/öneri:
1. Kondurça: `{ t:"1391-06-04", b:"Timur Kondurça'da Toktamış'ı yendi", yer_id:"Saray (Selitrennoye)", kesinlik:"ay", kaynak:"TDV timur: «Receb 793'te (Haziran 1391) Kundurca (Kunduzca) mevkiinde Toktamış Han'ı yenilgiye uğrattı»", ic_not_d:"Receb 793 ∩ Haziran 1391 ilk gün 1391-06-04 (tablo, ±1 gün; doğrulanmadı)" }`
2. Terek: `{ t:"1395-04-15", b:"Terek Savaşı: Timur Toktamış'ı yendi; Azak, Hacıtarhan ve Berke Sarayı (Saray) tahrip edildi", yer_id:"Saray (Selitrennoye)", kesinlik:"gun", kaynak:"TDV timur: «23 Cemâziyelâhir 797 (15 Nisan 1395)»" }` — yağma günü tarihsiz, yıl 1395.
3. Kulikovo 1380: `{ t:"1380-01-01", kesinlik:"yil", b:"Moskova Dimitri Donskoy Kulikovo'da Mamay ordusunu yendi", yer_id:"Moskova", kaynak:"TDV altin-orda-hanligi: «1380'de ilk defa Altın Orda kuvvetlerine karşı başarıyla mücadele ettiler»" }` — gün (08-09-1380) ikinci kaynakla eklenebilir.
4. Moskova'nın yakılışı (Toktamış, 1382): kaynak (Britannica özeti) «1382» ama TDV Altın Orda maddesinde yok → `kesinlik:"yil"` `1382-01-01`; kaynak TDV `moskova`/`toktamis` okunmadı.
5. Berke'nin ölümü / Cuci ulusu ayrılığı: TDV: «1266 yılı başlarında öldü» → `1266-01-01 yıl`; İlhanlı–Altın Orda çatışması bağlamı (`olaylar_ortacag_anadolu_kafkasya.js:125` ile aynı sayfa) ek tarih okuması gerek.
6. Kazak Hanlığı kuruluşu 1465 (Cânibek–Giray); TDV `kazak` okunmadı; **kaynak yok** → 1465-01-01 yıl aday. İlgili yerleşimler: Suzak, Sığnak (1465 AÇIK).
7. Astrahan Hanlığı 1466 (TDV `altin-orda` ilgili-maddeler listesi: «1466-1556»): `{ t:"1466-01-01", kesinlik:"yil", b:"Astrahan Hanlığı Büyük Orda'dan ayrıldı", yer_id:"Astrahan" }` — gün yok; bu 1466 AÇIK kırılmasını (Saray (Selitrennoye), Yeni Saray...) kapatır; ancak Saray/Yeni Saray'ın 1466'da **kime** geçtiği (Astrahan mı, Büyük Orda mı) kaynaksız → tabloya "beyanlı yaklaşıklık".
8. Uğra Nehri (Ahmed Han–Moskova, 1480): TDV `altin-orda`: «Ruslar Moskova'yı terkettiler» yalnız yıl 1480 bağlamıyla anılıyor; evrende yok. Yıl: `1480-01-01` yıl.
9. Boğdan'ın Altın Orda'dan kopuşu (1359; Yaş, Suceava, Roman, Akkirman, Bender, Kili, Birlad, Babadağ, Tulça, Mangalya, Konstanta, İsmail, Soroca, Orhei, Çernovitz): `kaynak` aranacak (TDV `bogdan`, `kili`, `akkirman`); şu an atlas `1359-01-01` kırılmalarını hangi kaynağa dayandırdığı yazılmamış → "kaynak:" alanı doldurulmalı.

## d) Harita uyumu
- Kırılma 28, AÇIK 17 (dökümü):
  | gün | yerleşimler | öneri |
  |---|---|---|
  | 1320-01-01 | Jitomir | Litvanya genişlemesi (Gediminas, ~1320s): kaynak yok; bölge kronolojisi `...lehistan_ukrayna_1028.js` taranmalı |
  | 1349-01-01 | Mankup, İnkirman (Kalamita) | Theodoro/Gothia; Altın Orda→? kaynak aranmalı |
  | 1357-01-01 | Balaklava (Cembalo) | Cenova Cembalo'sunu 1357'de kurdu (genel anlatı; TDV `balaklava`/`kefe`? okunmadı) |
  | 1359-01-01 | Akkirman, Babadağ, Bender, Bîrlad... (15 yerleşim) | Boğdan'ın kuruluşu; "1359 TDV `bogdan`" kontrol; ay/gün BULUNMADI |
  | 1362-01-01 | Baturin, Bila Tserkva, Fastov, Hluhiv | Kiev Litvanya'ya (1362) maddesi VAR (`...lehistan_ukrayna_1028.js:52`); ölçer 31 gün diyor → `yer`/`odak_yer` eşleşmesi (maddede yalnız Kiev). Maddeye bu yerleşimleri `odak_yer` olarak ekle. Doğrulanmadı. |
  | 1365-01-01 | Sudak | Cenova Soldaia'yı 1365'te aldı (genel anlatı); madde yok (en yakın 365 gün); TDV `sudak` aranmalı |
  | 1379-01-01 | Küngrat | Hârizm'in Timur'a geçişi (1379); Gürgenç/Küngrat kaynak: TDV `harezm`; Timur'un Hârizm seferleri 1379-88 |
  | 1380-01-01 | Aluşta, Yalta | Kırım kıyısı Cenova/Theodoro; kaynak yok |
  | 1382-01-01 | Derbend | Altın Orda'dan Timur/Şirvanşah? Toktamış–Timur çatışmasının Derbend fazı (TDV `timur`: 1387 baharı Derbend'i Toktamış geçti) → 1382 hangi olaya bağlı bilinmiyor |
  | 1430-01-01 | Abalak, Baraba, Kızıl-Tura, Tobolsk (İsker) | Sibir/Taybuga; kaynak aranmalı |
  | 1438-01-01 | Bulgar (Bolgar), Simbirsk | Kazan maddesi (`olaylar_ek16.js:103`) VAR; `yer` listesinde bu ikisi yok → `yer` listesine ekle |
  | 1441-01-01 | Arabat, Belgorod, Borisoglebsk, Hacıbey (Odessa) | Kırım maddesi (`olaylar_ek16.js:111`) VAR; `yer` listesine ekle (Kırım kapsamına Arabat/Hacıbey dahil mi: TDV Kırım okunmadı) |
  | 1465-01-01 | Suzak, Sığnak | Kazak Hanlığı kuruluşu — madde yok |
  | 1466-01-01 | Beldjamen, Saray (Selitrennoye), Ukek, Yeni Saray | Astrahan 1466 (TDV listesi) — madde yok |
  | 1500-01-01 | Ak-Meçit, Akmola, Aral kuzeyi, Ayagöz... | Şeybânî Han Buhara/Semerkant'ı aldı (madde başkası); Kazak/Şeybânî ilişkisi |
  | 1501-07-01 | Ağraham burnu, Tarki | Safevî/Kuzey Kafkasya; Şah İsmail Tebriz maddesi 31 gün; kaynak yok |
  | 1502-01-01 | Başkurt toprakları, Garabogaz, Güney Başkurt... | yukarıda b): künye t / madde t tutarsızlığı |
- Yerleşim sayısı (yıl:sayı): 1242:11 · 1255:12 · 1268:11 · **1281:155** · 1307:153 · 1333:136 · 1359:110 · 1372:91 · 1398:86 · 1437:79 · 1450:51 · 1476:45 · 1489:45 · 1502:0. 1242-1281 arası yalnız ~11 yerleşim (1281 ufuk sınırı: veri 1281'den başlıyor), 1281'de 155'e sıçrıyor.
- **En geniş yıl (1281) sahiplik uyumu:** Moskova 1281-1283 ve Kiev 1281-1362; Moskova s: `1281-01-01→1283-01-01`, ardından başka künye; Rus knezlikleri (Moskova, Tula, Kursk, Çernigov, Putivl...) doğrudan Altın Orda toprağı değil, vasal knezliklerdir (yarlık sistemi); Çernigov/Kursk 1281-1362 Altın Orda olarak boyanıyor → bu bir "vasal=sahip" yorumu; kaynak: (TDV `altin-orda`: 1238'de Rusya'nın kuzeyi Batu'nun eline geçti — TDV `kipcaklar` okunmadı). `tabi:` ilişkisi (Rus knezlikleri `ust:"altinorda"`) mevcut artmış olabilir; bu oturumda `tabi:` verisi okunmadı. **Tarihsel olarak kuzey Rus knezlikleri (Moskova, Tver, Vladimir) doğrudan sahiplik değil vergi/yarlık ilişkisidir** — doğrulanmadı.
- Sınır dışı görünen/şüpheli: Gürgenç/Küngrat (Hârizm) 1242-1379 Altın Orda — Hârizm'in Aq Orda/Jochid vilayeti; Timur 1379 Hârizm'i aldı (kronolojik, kaynak okunmadı). Kabartay 1281-1427 Altın Orda; Soçi/Tuapse/Anapa/Maykop 1281-1441 — Çerkez toprakları gerçekte Altın Orda'ya bağımlıydı ama nominal; sahipliğin `tabi` değil `s:` olarak yazılması beyan gerektirir.
- 1502 sonrası yerleşim 0: ardıl künyeler (Kırım, Kazan→1552, Astrahan, Nogay, Sibir) 1502'de toprağı almıyorsa harita boşalır; kontrol: yukarıdaki künye aşımı + ardıl künye eksikliği.

## Önerilen düzeltmeler (KASA için)
- `data/olaylar_ek5.js:147` `t:"1502-03-01"` → `"1502-01-01"` (+`kesinlik:"yil"`); yerleşim dilimlerindeki `t:"1502-03-01"` → `"1502-01-01"`.
- `data/devletler.js` altinorda: `kronoloji` 1395 → 1395-04-15; 1441 satırı bölünmeli (Kazan 1437-38, Kırım 1441, Astrahan 1466); Kulikovo b'si düzeltilmeli; `ic_not_f` (1241/1242 TDV çelişkisi) eklensin.
- Yeni evren maddeleri: Kondurça (1391-06-04, ay), Terek (1395-04-15), Kulikovo (1380, yıl), Moskova 1382 (yıl), Berke ölümü 1266 (yıl), Kazak 1465 (yıl), Astrahan 1466 (yıl), Uğra 1480 (yıl).
- Kazan (`olaylar_ek16.js:103`) `yer:` listesine Bulgar (Bolgar), Simbirsk; Kırım (`:111`) `yer:` listesine Arabat, Belgorod, Borisoglebsk, Hacıbey (Odessa); Kiev 1362 maddesi (`kronoloji_sinir_lehistan_ukrayna_1028.js:52`) `odak_yer`'ine Baturin, Bila Tserkva, Fastov, Hluhiv ekle (ölçer alaka eşlemesi; doğrulanmadı).
- Büyük Orda künyesi (ya da Altın Orda künyesinde "1459/1465-1502 Büyük Orda evresi" beyanı) ve Kazan/Astrahan/Sibir/Kazak künyeleri — varlıkları ölçülmedi, KASA grep'lesin.
- 1359 (Boğdan), 1365 (Sudak), 1357 (Cembalo), 1349 (Mankup) kırılmalarına kaynak yaz ya da dilimleri `__BOSLUK__`/beyanlı yaklaşıklığa çevir.

## Erişilemeyen kaynaklar
- Britannica "Golden Horde" (HTTP 403) — soru: 1502 yıkılışı ve Kulikovo günü.
- Halperin, Charles J., *Russia and the Golden Horde* (Indiana UP, 1985) ve "Kulikovo: Who Won?" (Project MUSE: https://muse.jhu.edu/article/525445) — soru: Kulikovo'nun sonuçları; yarlık sistemi (vasal vs sahip).
- Ostrowski, D., *Muscovy and the Mongols* (Cambridge UP, 1998); *The Cambridge History of Russia* vol. 1 (2006) — soru: Moskova yakılışı 1382, Saray'ın 1395 yıkımı.
- Vásáry, I., *Cumans and Tatars* (Cambridge UP, 2005) — soru: Altın Orda'nın kuruluş yılı (1241/1242/1243), Boğdan'ın kopuşu 1359.
- TDV `ozbek-han`, `toktamis`, `kazak-hanligi`, `astarhan-hanligi`, `sibir-hanligi`, `bogdan`, `kirim` (Mengli Giray cümlesi), `sudak`, `moskova`, `dimitri-donskoy` — çekilmedi.
- Encyclopaedia of Islam², "Ḏj̲ūčī Ulus"/"Ṭoḳtamish" — soru: Büyük Zamyatnya (1359-1380), Berke'nin ölüm günü.

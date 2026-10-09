# TEBRIZ-1388-KARAKOYUNLU-1006 — Tebriz ve Azerbaycan zincirinin 1386-1406 timurlu penceresi

**Temel:** origin/makine/umit `b2d4c2ff` · worktree `C:\atlas-p84-tebriz` · ölçüm günü 6 Ekim 2026.
**Yetki:** YALNIZ ÖLÇÜM VE ÖNERİ (GOREV-ORTAK §2, OLCUM-KITA-SARTLARI §1).

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı)
- **Sayı:** atlas Tebriz için YANLIŞ — `timurlu` penceresi 1386→1406 kesintisiz, oysa kaynak
  1388'de Karakoyunlu girişi, ardından Timur'un 1393 dönüşü ile yeniden Timurlu (Mîrânşah)
  idaresini verecek. Aynı kesintisiz zinciri paylaşan Azerbaycan noktası: **5-8** (Tebriz,
  Merend, Hoy, Ahar, Erdebil, Merâga, Nahçıvan, Ucan gibi). Kaynakla ADIYLA düzeltilebilecek
  nokta: **yalnız 1 (Tebriz)**; ötekiler D208 gereği bölge cümlesinden şehre taşınamaz.
- **Mekanizma:** zincir iki uçtan kurulmuş — 1386 Timur girişi (TDV `tebriz`) ve 1406/1408
  Karakoyunlu kazancı — aradaki "üç yıllık sefer"in (1386-88) Timur'un Mâverâünnehir'e
  dönüşüyle bittiği, Azerbaycan'ın 1388-1393 arası Karakoyunlu/Celâyirli elinde kaldığı ve
  "beş yıllık sefer"le (1392-96) yeniden alındığı ara adım yazılmamış. Komşular aynı
  `YYYY-01-01` adımlarını Tebriz'den kopyalamış (kaynaksız komşu zinciri).
- Ek öngörü: 1388 için kaynak GÜN vermeyecek (yalnız H. 790 ⇒ `1388-01-01`); 1393 dönüşü
  için TDV `timur` yıl verecek, Tebriz adıyla gün vermeyecek.

## 1. MÜKERRER KAPISI
`denetim/` altında içerik taraması: `tebriz` ∧ `1388` geçen 14 dosya. Hükme bakıldı (§9):
`GENCE-1386-KAYNAK-1006.md §3` bu kalemi AÇAN yan bulgudur ("Tebriz'in kaydı bu görevde
ÖLÇÜLMEDİ") · `P84-TIMUR-SAHIPLIK-1006.md:116` Tebriz'in yalnız **1386 girişini** onaylıyor ·
`KRONO-CELISKI-1006.md:57` / `KRONO-DIFF-1006.md:51` yalnız künyenin 1406 maddesini (→1408
Serdrûd) ele alıyor. ⇒ 1388-1406 penceresi için **hüküm yok**, mükerrer DEĞİL.
`P84-TIMUR-SAHIPLIK-1006-KOORD.diff` Tebriz zincirine dokunmuyor (grep: 0 satır) — çakışma yok.

## 2. ÖLÇÜM — ATLAS (aracı: `denetim/ARAC-TEBRIZ-1388-OLC-1006.py`, salt okur)
Kutu 36,0–41,6K × 43,0–50,5D: 80 nokta. **37 nokta aynı zinciri taşıyor:**
`celayirli 1340-01-01 → timurlu 1386-01-01 → karakoyunlu 1406-10-21` (hepsi kaynaksız
`-01-01` başlangıç; tek kaynaklı uç Tebriz'in 1386'sı). 1388/1390/1392/1394/1400/1405
günlerinin hepsinde kutuda `timurlu` 39 nokta (37 + Zencan + Kazvin) — **1386→1406 arası
TEK BİR kırılma yok.** `d:`/`v:`/`isg:` katmanında 1380-1410'a dokunan dönem: **0.**

| dosya:satır | nokta |
|---|---|
| `yerlesimler.js:649` | **Tebriz** — `{f:"1386-01-01",t:"1406-10-21",d:"timurlu"}` |
| `yerlesimler.js` :653 Nahçıvan · :664 Revan · :1025 Erdebil · :1139 Urmiye · :1823 Sultâniye · :1827 Merâga · :1828 Hoy · :1829 Selmâs · :1830 Merend · :1831 Culfa · :1832 Ahar · :1833 Sarâb · :1834 Miyâne · :1835 Mâku · :1836 Halhâl · :1837 Mîyandoab · :1838 Sakkız · :2030 Astara · :2033 Lenkeran · :2045 Berde · :2049 Ordubad | 22 |
| `yerlesimler_ek26.js` :48 Arpaçay · :52 Digor · :56 Iğdır · :87 Gümrü · :91 Eçmiyadzin | 5 |
| `yerlesimler_sinir_kuzey.js` :29 Norapat · :30 Beri · :31 Kliçatak · :32 Küçükperveli | 4 |
| `yerlesimler_sinir_dogu.js` :84 Sero · :107 Rāzhān · :136 Şeyh Salû-yi Ulyâ | 3 |
| `yerlesimler_kalite4.js` :30 Meşkinşehr · :56 Şerur · `yerlesimler.js:244` Kars | 3 |
Ayrık: Gence `:665` celayirli→karakoyunlu 1406-10-21 (GENCE kalemi) · Zencan `:1138`
timurlu 1383→1410 · Kazvin `:1136` timurlu 1387-11-01→1452.

Kronoloji katmanı (harita DEĞİL):
- `kronoloji_karakoyunlu.js:158` **1388-01-01 "Kara Mehmed Tebriz'e girdi"** `tur:"fetih"`,
  `onem:5`, `yer_id:"Tebriz"` — **madde haritada karşılıksız** (Tebriz o gün timurlu kalıyor).
- `kronoloji_karakoyunlu.js:178` 1392-01-01 "Kara Yûsuf bir yıl içinde iki kez Tebriz'e ulaştı".
- `olaylar_ek7.js:205` **1406-10-21** "Kara Yusuf'un Tebriz ve Azerbaycan'ı Timurlulardan geri
  alması" — `gun:"1406"` ama `t:` GÜN taşıyor; `kaynak:"karakoyunlular"`. Bu, 37 noktanın
  1406-10-21 kırılmasının Değişmez 2 dayanağı.
- `kronoloji_karakoyunlu.js:246` 1406-10-15 Aras (Tebriz yok) · `:252` 1408-04-13 Serdrûd.

## 3. ÖLÇÜM — KAYNAK (6 Ekim 2026; gövdeler `TEBRIZ-1388-KARAKOYUNLU-1006-tdv/`, GENCE ve
P84-TIMUR önbellekleri okundu, yeniden çekilmedi — yalnız `tebriz`/`karakoyunlular`/
`celayirliler` HTML'i doğrulama için yeniden alındı, 200)

| yıl | kaynak | birebir cümle |
|---|---|---|
| 1386 | TDV `tebriz` | "1386’da Tebriz’i savaşsız ele geçiren Timur şehrin idaresini ertesi yıl oğlu Mîrân Şah’a, 1404’te torunu Ömer’e verdi." |
| 1386 | Iranica JALAYERIDS (Jackson) | "In the spring of 1386 his forces entered Tabriz and installed ʿĀdel Āqā there" |
| 1387 | Iranica JALAYERIDS | "since when Timur withdrew to Khorasan in 1387, he left his son Mirānšāh as viceroy of the province." |
| **1388** | TDV `karakoyunlular` | "Kara Mehmed Bey çok az bir kuvvetle Timur’a karşı koydu ve onun Mâverâünnehir’e dönmesinden sonra bir fâtih olarak Tebriz’e girdi (790/1388). Şehirde bir süre kalıp bir muhafız birliği bırakarak ülkesine döndü." |
| 1392 | TDV `karakoyunlular` | "Kara Yûsuf, beyliğin nüfuzunu yeniden kuvvetlendirmek için Celâyir beyleri arasındaki anlaşmazlıklardan yararlanarak Tebriz’e geldi (794/1392). Aynı yıl içinde iki defa şehre gelen Yûsuf Bey, …" |
| 1393-96 | TDV `timur` | "1392 yılı Haziran ayında “beş yıllık sefer” denilen (1392-1396) sefere çıktı." · "1394 yılı güzünde Kuzey Azerbaycan’da Şeki’de iken …" — **Tebriz adıyla cümle YOK** |
| 1406 | TDV `karakoyunlular` | "Aras nehri kenarında cereyan eden savaşta Yûsuf Bey, Ebû Bekir Mirza’yı yendi (2 Cemâziyelevvel 809 / 15 Ekim 1406)." — **Tebriz'in alındığını SÖYLEMİYOR** |
| 1408 | TDV `karakoyunlular` | "Tebriz yakınlarındaki Serdrûd’da yapılan ikinci savaşı da Yûsuf Bey kazandı (16 Zilkade 810 / 13 Nisan 1408). Serdrûd zaferi Kara Yûsuf’a Azerbaycan’ı kazandırdı." |
| 1408 · 1410 | TDV `tebriz` | "Şehir, 1408’de Timurlu Ebû Bekir Mirza’nın ve 1410’da Ahmed Celâyir’i yenen Karakoyunlu Yûsuf’un eline geçti." |
| 1410 | Iranica JALAYERIDS | "In an attempt to wrest Tabriz from Qarā Yusof in 1410, he was captured and executed;" |
| 1399 | Iranica JALAYERIDS | "In 1399 the thirteen- (or fifteen-)year siege of Alenjaq by Mirānšāh’s troops was raised by the Georgian King Giorgi VII" (Alıncak noktası atlasta YOK) |

**Denenen ve tutmayan yollar (adıyla, 6 Ekim 2026):** TDV `kara-yusuf` · `kara-mehmed` ·
`kara-mehmed-bey` · `miransah` · `miran-sah` · `miransah-mirza` · `ebu-bekir-mirza` → **302**
(ölü). TDV arama `p=m` (madde başlığı): "kara yûsuf" → 2 başlık, ikisi de Rize müftüsü Yusuf
Karali (ilgisiz) · "mîrânşah" → 0 başlık, 1 içerik (Ebû Said Mirza) · "mîrân şah" → 0 başlık,
83 içerik (ilk sayfa ilgisiz; liste sayfalanmadı, **tükenmiş sayılmaz** §7). Iranica
"QARA QOYUNLU", "MIRĀNŠĀH", "TABRIZ ii" (1500 öncesi tarih) → 404 / yayında yok
(denenen slug listesi `-tdv/ir-jalayerids-cumleler.txt`). Celâyirli maddesi (TDV)
Tebriz'i 1384-1410 arasında adıyla tarihlemiyor.

## 4. HÜKÜM (ölçümden AYRI)
**H1 — 1388 Karakoyunlu girişi: KAYNAK KENDİYLE ÇELİŞİYOR, atlas düzeltilemez (bugün).**
- TDV `karakoyunlular`: 1388 fâtih girişi + **muhafız birliği** ⇒ Tebriz Karakoyunlu elinde,
  **SÜRESİ YOK** ("bir süre"); 1392'de Tebriz Celâyir beylerinin çekişme alanı.
- TDV `tebriz` + Iranica: idare 1387 Mîrân Şah → 1404 Ömer, ARA KESİNTİ ANMIYOR.
  Iranica'nın "almost permanent loss" ifadesi kesintiye yer bırakır ama onu tarihlemez.
- §4: iki TDV maddesi farklı ayrıntı veriyor — **taraf seçilmedi.** Seçilseydi bile
  Karakoyunlu döneminin BİTİŞ günü hiçbir kaynakta yok ⇒ `s:` ya da `isg:` yazmak bitiş
  tarihi UYDURMAK olur (§6). **Atlas bu noktada "yanlış" ilan edilmedi.**
- Ama BİR TUTARSIZLIK ölçüldü ve o kaynak-bağımsız: `kronoloji_karakoyunlu.js:158`
  `tur:"fetih"` `onem:5` `yer_id:"Tebriz"` diyor, harita aynı gün Tebriz'i `timurlu`
  boyuyor ⇒ okuyucu "fetih" okur, haritada değişim görmez (CLAUDE.md §1'in amacı).

**H2 — 1406-10-21 kırılması: GÜNÜ KAYNAKSIZ, YILI ŞÜPHELİ (Tebriz için).**
- `olaylar_ek7.js:205` `t:"1406-10-21"` ama `gun:"1406"` ⇒ **sahte kesinlik** (§6); dayandığı
  TDV `karakoyunlular` 1406'da yalnız Aras zaferini (15 Ekim) veriyor, Tebriz'i değil.
- Tebriz'i Karakoyunlu'ya bağlayan en erken kaynaklı cümle: **1408-04-13 Serdrûd**
  ("Tebriz yakınlarında", "Azerbaycan'ı kazandırdı" — bölge cümlesi) ve Iranica'nın 1410'da
  Tebriz'i Kara Yûsuf'un elinde göstermesi. TDV `tebriz` ise **1408'i Ebû Bekir'e** (Timurlu)
  veriyor ⇒ 1406-10-21 → 1408 arası Tebriz için kaynak Timurlu'yu gösteriyor, atlas
  Karakoyunlu'yu.
- 36 komşu nokta 1406-10-21'i Tebriz/olay maddesinden devralmış; kendi kaynakları yok (D207).

**H3 — 1386 başlangıcı:** TDV `tebriz` yıl ✓, Iranica "spring 1386" ⇒ `1386-01-01` yıl
hassasiyeti DOĞRU (atlas DOĞRU — negatif bulgu).

## 5. ÖNGÖRÜ ↔ ÖLÇÜM
- Sayı "5-8 nokta zinciri paylaşıyor": **ÇÜRÜDÜ — 37.** Kopyalama Azerbaycan'ı aşıp Arrân,
  Ermenistan (Revan, Gümrü), Kars ve Gîlan kıyısına (Astara, Lenkeran) kadar yayılmış.
- "Atlas Tebriz için yanlış (1388 kesintisi)": **ÇÜRÜDÜ** — kaynak çelişkili, bitiş yok; hüküm
  "düzeltilemez, beyan edilmeli". Yanlışlık beklenmedik yerde çıktı: **1406-10-21 ucu.**
- Mekanizma "zincir iki kaynaklı uçtan kuruldu": **YARI TUTTU** — 1386 ucu kaynaklı, 1406 ucu
  değil (yalnız yılı olan bir olay maddesine gün eklenmiş).
- "1388 için gün yok, H. 790": **TUTTU.** "1393 için Tebriz adıyla cümle yok": **TUTTU.**

## 6. ÖNERİ (UYGULANMADI · KOORD.diff YAZILMADI — sebep aşağıda)
1. **1388 için harita DEĞİŞMESİN.** `kronoloji_karakoyunlu.js:158`'e (UMIT partisi) çelişki
   notu: *"TDV `tebriz` aynı dönemi kesintisiz Mîrân Şah idaresi olarak anlatır; Karakoyunlu
   muhafızının süresi kaynakta yok ⇒ harita Tebriz'i timurlu gösterir"* + `tur:"fetih"` →
   `tur:"askeri"` düşünülsün (fetih beklentisi haritada karşılıksız). Hüküm UMIT İRTİBAT'ta.
2. **1406-10-21 için koordinatöre iki seçenek** (ben **A**'yı öneriyorum, ama diff yazmadım
   çünkü 37 noktalık zincir değişimi bir HÜKÜMDÜR, ölçüm değil):
   - **A (öneri):** `olaylar_ek7.js:205` maddesinin `t:`'si `1406-01-01`e (gün uydurmayı
     kaldır) ve metni "Aras zaferi — Tebriz'i değil Azerbaycan yolunu açtı" diye düzelt; 37
     noktanın `timurlu→karakoyunlu` adımı **1408-04-13**e (Serdrûd, TDV `karakoyunlular`,
     gün KAYNAKLI) taşınsın. Değişmez 2 dayanağı: `kronoloji_karakoyunlu.js:252` KUYRUKta,
     ÇEKİRDEKTE değil ⇒ çekirdeğe 1408-04-13 maddesi gerekir (ya da `olaylar_ek7:205`
     1408-04-13'e taşınır). ⚠️ Tebriz dışı 36 nokta için dayanak bölge cümlesidir —
     "kaynaklı halka" sayılmaz (D208), yalnız zincir tutarlılığı.
     Bedel: 37 kırılma 18 ay kayar ⇒ veri koşusu (§9.1 ①) + Gence ile birlikte ele alınmalı.
   - **B:** zincire dokunma; `olaylar_ek7:205`'e `gun:"1406"` ↔ `t:` gün çelişkisi ve TDV
     `tebriz` 1408/1410 beyanı yazılsın (sessiz borç olmasın).
3. Kaynak için sıradaki yollar (denenmedi): Şerefeddin Ali Yezdî *Zafernâme* · Nizâmeddin Şâmî
   *Zafernâme* (1388-1393 Tebriz valilerini adıyla verir) · Faruk Sümer, *Kara Koyunlular*
   I (TTK 1967) — TDV `karakoyunlular`ın müellifi; 1388 muhafızının süresi orada olabilir ·
   EI² "Ḳara Ḳoyunlu" (Minorsky).

## 7. HÜKÜM (A) SONRASI — DİFFLER (6 Ekim 2026, temel origin/makine/umit `9b55348c`, UYGULANMADI)
UMIT İRTİBAT hükmü: (A). Üç diff, hepsi `git apply --cached --check` temiz, LF (CR 0):
- `TEBRIZ-1388-KARAKOYUNLU-1006-KOORD.diff` — **istenen 37 nokta**: `timurlu` bitişi ve
  `karakoyunlu` başlangıcı `1406-10-21 → 1408-04-13`; karakoyunlu dönemine `kaynak:` yazıldı
  (Tebriz: TDV `karakoyunlular` Serdrûd + Iranica; öteki 36: "BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI
  DEĞİL (D208)"). Önceden `kaynak:` taşıyan 9 timurlu dönemine (ek26 ×5, sinir_kuzey ×4)
  " · BİTİŞ 1406-10-21→1408-04-13" eki yapıldı; eski karakoyunlu `kaynak:`ı ("gün komşudan …
  1406-10-21 çekirdek madde") yenisiyle değişti.
- `TEBRIZ-1388-KARAKOYUNLU-1006-KOORD-40.diff` — **ÖNERİLEN** alternatif: 37 + Ardahan ·
  Merîvan · Sarıkamış (aynı zincir, kutu dışında kaldıkları için ilk listeye girmemişti).
  Gence DAHİL DEĞİL (celayirli→karakoyunlu, ayrı kalem). İkisinden yalnız BİRİ uygulanır.
- `TEBRIZ-1388-KARAKOYUNLU-1006.diff` (UMIT tarafı): `olaylar_ek7.js:205` → **1406-10-15
  Aras zaferi** (gün TDV'den; Tebriz iddiası çıkarıldı; `yer_id:""` + `odak_kimlik:"karakoyunlu"`;
  eski hâli `ic_not_d`de) + çekirdeğe yeni **1408-04-13 Serdrûd** maddesi (`yer_id:"Tebriz"`,
  TDV + Iranica birebir) · `kronoloji_karakoyunlu.js:158`e `ic_not_d` çelişki notu.
  Niçin düzeltme + YENİ madde (yalnız taşıma değil): 1406-10-21'de kalan Gence (her iki
  varyantta) ve 37'lik varyantta Ardahan/Merîvan/Sarıkamış kırılmalarının Değişmez 2
  dayanağı Aras maddesidir (±6 gün); taşınsaydı açık doğardı.

### denetle.py önce / sonra (kendi ağacımda iki diff birlikte uygulandı)
| | önce | 37 (KOORD) | 40 (KOORD-40) + odak |
|---|---|---|---|
| Değişmez 2 | 623 · 0 açık | 623 · 0 | 623 · 0 |
| 2s | 1720 · 186 AÇIK | 1721 · 186 | 1721 · 186 |
| 2t | 13 (tavan 13) | 13 | 13 |
| 2i | 171 · 1 | 171 · 1 | 171 · 1 |
| 2sk yalnız-taraf (tavan 2247) | 2247 | **2248 ⚠️** | **2248 ⚠️** |
| 7 sorgusuz enklav (beklenen 731) | 733 | **736** (Gence · Merîvan · Ardahan+Sarıkamış 1406-1408 karakoyunlu adası) | 733 |
| kaynaksız `s:` (tavan 1930) | 1929 | 1913 | 1912 |
| çıkış | 2 (yalnız D8 ölçülemedi: taze ağaçta `devletler_harita.js` yok) | 2 | 2 |
Odak (`odak_olc.py`): `olaylar_ek7` ODAKSIZ 0 → 1 (yer_id boşalınca) → `odak_kimlik` ile **0**.
⚠️ **2sk +1** her iki varyantta: ihlal değil ("SINIFI istenir"). Sınıfı ÖLÇÜLMEDİ; aday
sebep: 1406-10 kovası artık Tebriz'i anan maddeye değil yer anmayan Aras maddesine kapanıyor.
Tavan + sabit aynı commit'te iner (CLAUDE.md §3.4 ②) — koordinatör kararı.

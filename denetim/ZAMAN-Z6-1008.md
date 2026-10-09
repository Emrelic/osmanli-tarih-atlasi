# ZAMAN-Z6-1008 — yerleşimlerin 1000-1281 sahipliği (YER-ONCE1281)

*Oturum: ZAMAN-Z6-YER-ONCE1281-1008 · makine UMIT · 8 Ekim 2026 · ağaç `C:\atlas-z6`
(`origin/makine/umit` `e28edfdc`). `data/` ve `arac/`a yazılmadı; öneri `ZAMAN-Z6-1008-KOORD.diff`.*

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı (2026-10-08 22:13)

| Soru | Öngörü | Mekanizma |
|---|---|---|
| Bugünkü duvar (ilk sahiplik dönemi `f:"1281-01-01"`) | **2.530 ± 20** nokta | 0930'da 2526; arada eklenen noktalar çoğunlukla 1281 sonrası tarihli |
| Duvarın Anadolu kovasındaki payı (0930 kutusu) | **~300** | 0930'da Anadolu 309 nokta (tur≠bolge), çoğu duvarda |
| Anadolu ① 1281'den sonra kurulmuş (dokunma) | **~30** (%10) | Osmanlı dönemi kasaba/kaleleri, `kur:` taşıyanlar |
| Anadolu ② 1000-1281 sahibi TDV'de OKUNAN | **~70-90** (%25-30) | 0930 `var-aday` 98 idi; yöreyi tarihleyen cümleler ayıklanınca düşer |
| Anadolu ③ kaynak yok | **~190** | TDV maddesi yok (379/593 oranı) ya da madde var, tarihli sahiplik cümlesi yok |
| ② içinde künyesi `devletler.js`te OLMAYAN sahip | **~10** | Bizans/Selçuklu/Danişmendli/Artuklu var; küçük beylikler (Çaka, İnaloğulları vb.) kısmen yok |

> ⚠️ Öngörü yalnız ANADOLU dilimi ve duvar için yazıldı (22:13, ölçümden önce). Koordinatörün sonradan istediği
> "bütün duvarın üç kovası" sorusu için ölçümden önce yazılmış bir öngörü YOK — aşağıdaki tüm-duvar satırları
> öngörüsüz ölçümdür.

## §0 Önceki ölçümlerin özeti (mükerrer kapısı)
- `ONCE1281-YERLESIM-0930`: duvar 2526 nokta (ilk sahiplik `f:1281-01-01`, %100 "doğan", 0 el değiştiren);
  f<1281 tek nokta (Lapaha). Çekirdek 6 kova 593 nokta: TDV yer maddesi 214, **var-aday 162** (ilk tarihli
  cümle — 15'lik örneklemde 2'si YÖREYİ tarihliyordu ⇒ hüküm değil teyit kuyruğu). Anadolu var-aday 98.
- `KASA-ONCE1281-1003`: kronoloji maddelerinin %77'sinin yeri havuzda VAR, %23'ü YOK (~150 ad: Ahlat, Harran,
  Malazgirt, Ani, Dvin, Rey, Silvan…) — yeni nokta işi Z6 kapsamında DEĞİL, listede duruyor. 135 tamamen-önce künye
  o gün boyasızdı.
- `ONCE1281-ANADOLU-BIZANS-0930`: Anadolu künye ve kronoloji önerisi (175 madde); Harput çelişkisi koordinatörde.
- `SABAH-1004 H1`: "58 → 2" — bu küme **191 `kur:1281` noktasıydı** (Arktik/Amerika ağırlıklı, `kur` kampanyası),
  ŞEHİR duvarı değil. Bugün `kur:"1281-01-01"` taşıyan duvar noktası **0** (194 silinmiş). İki küme karıştırılmamalı.
- **Bu turda farklı olan:** 0930 aracı her noktada İLK tarihli cümleyi alıyordu; Z6 1000-1280 tarihli BÜTÜN
  cümleleri döker, elle okur ve yalnız 1281'deki mevcut sahibe **kesintisiz bağlanan** zinciri kabul eder.

## ② Ne ölçtüm

### Duvar bugün (`origin/makine/umit` e28edfdc, `girdi.yukle()`, 93 dosya, 4300 nokta)
| Ölçüm | Sayı |
|---|---|
| ilk sahiplik dönemi `f:1281-01-01` (s/d/v) | **2527** (öngörü 2530±20 ✅) |
| bunun `tur:bolge` dolgusu | 76 |
| f<1281 dönem | 1 (Lapaha) |
| duvarda `kur:` > 1281 | 1 (Uzunköprü 1443) · `kur:1281` 0 · `koy_kur` 0 |
| 0930 kutusuyla Anadolu (tur≠bolge) | **301** (öngörü ~300 ✅) · Suriye 24 · İran 93 · Irak 60 · Mısır 47 · Mâverâünnehir 33 · kutu dışı 1893 |

### Anadolu — üç kova, 301 noktanın TAMAMI okundu
| Kova | Sayı | Öngörü |
|---|---|---|
| **① 1281'den sonra kurulmuş** (kaynakta) | **2** — Uzunköprü (`kur:1443`), Çanakkale (TDV: "XV. yüzyıl şehri") | ~30 ❌ (kaynakta OKUNAN kuruluş az; kalanı ③'te) |
| **② 1000-1281 sahibi kaynakta OKUNAN, 1281'e kesintisiz bağlı** | **35** → diff'te | 70-90 ❌ |
| ②z tanık var, süreklilik ÇÜRÜK (diff'e alınmadı) | 2 — Sivrihisar, Uşak | — |
| **③ kaynak yok** | **262** | ~190 ❌ |
| ↳ TDV yer maddesi bulunamadı | 182 | |
| ↳ madde var, 1000-1280 tarihli cümle yok | 24 | |
| ↳ tarihli tanık VAR ama zincir KOPUK (araya tarihsiz el değiştirme) | 25 | |
| ↳ yalnız bölge/yöre/ihtimal/saltanat-aralığı cümlesi (D208) | 25 | |
| ↳ yanlış madde (slug başka şeyi anlatıyor) | 6 | |

**Ölçüt (sıkı):** ② = her dönem TDV gövdesinden BİREBİR alıntıyla (alt dizgi sınavı, 62/62 bulundu) · her dönem
künye penceresi içinde (0 aşım) · zincir 1281'deki MEVCUT sahibe ya aynı kimlikle birleşir (21 nokta: f geriye çekilir)
ya da Selçuklu→ardıl/alt yapı geçişiyle (14 nokta: ilhanli/pervane/cobanogullari/ahiler) `t:1281-01-01` SINIR
işaretiyle bağlanır. Selçuklu→Bizans/Karaman/Artuklu gibi gerçek kayıp anlamına gelen 1281 geçişleri ③k'ye düştü
(geçiş günü uydurulmadı).
⇒ **Anadolu'nun %11,6'sı** (35/301) bugün sıkı kuralla geriye uzar. 0930'un 98 var-adayının 35'i tuttu.

### Mekanizma — öngörü niye ıskaladı
② beklenenin yarısı: TDV yer maddesi el değiştirmeleri yazar ama **çoğu ara adımı tarihsiz** bırakır ("bir süre sonra",
"Manuel'in ölümünden sonra", "Kılıcarslan (1155-1192) tarafından"). 25 noktada zengin tanıklık var ama 1281'e bağlanan
son halka tarihsiz (Bursa, Elbistan'ın 1085-1156 zinciri, Besni'nin 1084-1266 zinciri…).

### Kullanılan künyeler ve boya
17 kimlik; **15'i boyalı**, 2'si BOYASIZ: `eyyubi` (Bitlis 1209-1231) · `mogol-imparatorlugu` (Bitlis 1231-1232,
Kars 1239-1256) ⇒ uygulanırsa ufuk açılınca bu dilimler boyanmaz — Z3'e bildirilecek.

### Yeni 1281 öncesi kırılma günleri (Değişmez 2 evreni — Z7 için)
45 (gün, kimlik) çifti; en kalabalık **1261-07-25 bizans ×7** (İstanbul'un geri alınışı, İznik→Bizans ardıllığı).

## Yan bulgular (1281 SONRASI — DOKUNULMADI, bildirilir)
- **Alaşehir:** TDV 1098'den sonra Bizans'ın "Batı Anadolu'nun en müstahkem mevkii" der; atlas 1281-1300'de SELÇUKLU
  boyuyor (D206 ters-yön adayı).
- **Alanya:** TDV 1221 Selçuklu fethi; atlas 1281'de KARAMAN — Karaman'a geçiş günü bulunmalı ya da 1281 dönemi sorgulanmalı.
- **Harput:** TDV 1234 Selçuklu, sonra İlhanlı; atlas 1281 artuklu. **Koordinatör talimatıyla DOKUNULMADI** (Artuklu teslimi).
- **Diyarbakır:** TDV 1259 Hülâgû şehri Selçuklu'ya verdi; atlas 1281 artuklu.
- **Çanakkale:** XV. yy kuruluşu, atlas 1281'den boyuyor (`kur` yok). **Uzunköprü:** `kur:1443` ama ilk dönemi 1281.
- **Karaman/Lârende:** TDV karaman (1165 Selçuklu) ile TDV silifke (1210 Levon Lârende'yi Saint Jean'a bıraktı) çelişiyor.
- `ahlatsahlar` künyesi 1208-01-01'de bitiyor; TDV bitlis Ahlatşah hâkimiyetini 1209'a dek sürdürüyor (Z3).

## ① ÖNGÖRÜ — BALKAN dilimi (ölçümden ÖNCE, 2026-10-09, TDV çekimi başlamadan)
Kutu: lat 36.0-48.5 · lon 13.0-29.9, Anadolu/çekirdek kutuları dışı · duvar (tur≠bolge) **276** nokta (sayım, öngörü değil).
| Soru | Öngörü | Mekanizma |
|---|---|---|
| TDV yer maddesi bulunan | ~90 (%33) | TDV Balkan büyük şehirlerini kapsar, kasaba/kale azdır |
| ② sıkı zincir | **15-25** | Bizans/Bulgar/Sırp/Latin el değiştirmeleri sık ve çoğu tarihsiz ⇒ Anadolu'dan düşük oran |
| ① kaynakta 1281 sonrası kuruluş | ~5 | Osmanlı kuruluşu kasabalar (Tatarpazarcık vb.) |
| künyesi olmayan sahip | sık | Sırp (Nemanjić), II. Bulgar, Macar, Latin dukalıkları — `devletler.js`te kısmen var |

## ① ÖNGÖRÜ — ORTADOĞU dilimi (Suriye+Irak+Mısır kutuları, ölçümden ÖNCE, 2026-10-09)
Duvar (tur≠bolge): Suriye 24 · Irak 60 · Mısır 47 = **131** (sayım). 0930 var-aday: Suriye 15 · Irak 14 · Mısır 5.
| Soru | Öngörü | Mekanizma |
|---|---|---|
| ② sıkı zincir | **12-20** | Suriye büyük şehirleri TDV'de ayrıntılı (Halep, Şam, Hama, Humus) ama Haçlı/Zengî/Eyyûbî/Memlük el değiştirmeleri sık; Mısır'da Fâtımî→Eyyûbî→Memlük düz zinciri birkaç şehirde tutar |
| ① 1281 sonrası kuruluş | ~2 | |
| boyasız künye kullanımı | `eyyubi` ve haçlı künyeleri sık | Anadolu'da `eyyubi` boyasız çıktı |

## ② BALKAN — ölçüm (276 noktanın TAMAMI okundu)
| Kova | Sayı | Öngörü |
|---|---|---|
| TDV yer maddesi bulunan | 105 | ~90 ✅ |
| **① 1281 sonrası kuruluş (kaynakta)** | **0** | ~5 ❌ |
| **② sıkı zincir → diff** | **7** — Kavala · Modon · Atina · İstefe · Livadya · Nakşa · Vodina | 15-25 ❌ |
| **③ kaynak yok** | **269** | |
| ↳ TDV maddesi yok | 171 | |
| ↳ madde var, 1000-1280 tarihli cümle yok | 53 | |
| ↳ tarihli tanık var, zincir kopuk | 23 | |
| ↳ bölge / akın / hicrî / sahiplik demeyen cümle | 21 | |
| ↳ yanlış madde | 1 (Yenişehir-Larissa → Bursa Yenişehir'i) | |
⇒ Balkan'ın **%2,5'i** (7/276) sıkı kuralla geriye uzar — Anadolu'nun beşte biri. Mekanizma: TDV Balkan
şehir maddeleri 1000-1281'i çoğu kez tek cümleyle geçer (Bizans-Bulgar-Latin-Epir-İznik el değiştirmeleri tarihsiz),
Macaristan/Bosna/Sırbistan maddelerinde 1281 öncesine dair tarihli sahiplik cümlesi neredeyse yok (Moğol 1241 yağması dışında).
**Mevcut 1281 kimlikleri `harita:` anahtarıdır** (`atinadukaligi`, `bulgaristan`, `sirbistan`…); künye sınavı anahtarı
künyeye çözerek yapıldı (`atinadukaligi`→`atina-dukaligi` 1205).

### Balkan yan bulguları (1281 SONRASI — dokunulmadı)
- **Korfu:** atlas 1281-1797 VENEDİK; TDV 1267 Napoli (Anjou), Venedik 1386.
- **Draç:** atlas 1281'den VENEDİK; TDV 1273'te Anjou elinde.
- **Balyabadra (Patras):** atlas 1281-1430 BİZANS; TDV 1205'te Franklar Bizans'tan aldı.
- **Köprülü (Veles):** atlas 1281 sirbistan; TDV 1246 Vatatzis aldı — Sırp'a geçiş tarihsiz.

## Yamam uygulayıcıda nasıl davranıyor — ÖLÇÜLDÜ (`py arac/_sahiplik_uygula.py` KURU koşu, yazmaz)
- **`girdi.py`'ye satır GEREKMİYOR:** uygulayıcı `data/` altında `^yer_yama.*\.js$` glob'unu okuyor (satır 73);
  `yer_yama_once1281_z6.js` okundu (42 kayıt sayıma girdi). Z5'in ölçümüyle aynı.
- **Çıkış 2 benden ÖNCE de var:** dosyam yokken de kuru koşu çıkış 2 (bayat yama kapısı, inmiş yamalar glob'da).
- **42 kaydın 36'sı ÇAKIŞMA** (dosyamla: 55 çakışma · dosyamsız: 20 ⇒ +35 ad; Karaman/Konya/Kütahya üçlü): karşı taraf
  çoğunlukla `yer_yama_tbmm_1920_0905.js` (Anadolu şehirlerinin 1920 dönemini taşıyan, ZATEN İNMİŞ yama); öteki
  `dogumakedonya` · `balkan_trakya` · `isg_yunan_kaynak`/`yunananakara` · `ada_*`/`onikiada` · `vassal_kid_0906`.
  **Sebep:** yamam `s:` dizisinin TAMAMINI bugünkü veriden kopyalayıp önüne ekliyor; inmiş eski yamalar aynı adın daha
  eski `s:` dizisini taşıyor ⇒ "içerik farklı". Yamam bugünkü hâlin ÜST KÜMESİdir; çakışma inmiş yamaların glob dışına
  taşınmasıyla (koordinatörün ayrı işi, aracın kendi önerisi `data/yer_yama_arsiv/`) çözülür.
- **6 kayıt bugün temiz uygulanır:** Atina · İstefe · Livadya · Nakşa · Modon · Bayburt.
- Kaynak alanı: alıntı her ÖN-DÖNEMİN kendi `kaynak:`ına yazıldı (uygulayıcı `once1281` alanını taşımaz — ölçüldü,
  yalnız d/s/v/isg/m/kaynak/bos/neden/not iner). Birleşen dönemde mevcut `kaynak:` EZİLMEZ: yeni dayanak başına
  "f 1281-01-01'den geri çekildi — …" diye eklenir, eskisi "‖ önceki:" ile korunur.
- Pre-1281 kırılma günleri uygulayıcının "gün-maddesiz" kovasına DÜŞMEDİ (6 temiz kayıt "uygulandi"da).

## ② ORTADOĞU — ölçüm (Suriye 24 + Irak 60 + Mısır 47 = 131, TAMAMI okundu)
| Kova | Sayı | Öngörü |
|---|---|---|
| TDV yer maddesi bulunan | 47 | — |
| **① 1281 sonrası kuruluş** | **0** | ~2 ❌ |
| **② sıkı zincir → diff** | **11** — Antakya · İskenderun · Halep · Ba'lebek · Rakka · Kahire · Dimyat · Bağdat · Şehrizor · Tikrit · Vâsıt | 12-20 ❌ (bir eksik) |
| **③ kaynak yok** | **120** (84 madde yok · 16 madde var cümle yok · 15 zincir kopuk · 5 bölge/sahiplik demeyen) | |
⇒ %8,4. Zincirlerin çoğu **1258-1260 düğümünde** başlıyor (Bağdat'ın düşüşü, Hülâgû'nun Suriye seferi, Aynicâlût):
öncesindeki Eyyûbî/Zengî zincirleri zengin ama Eyyûbî **kol** künyeleri (eyyubi · eyyubi-halep · eyyubi-hama ·
eyyubi-meyyafarikin) ile şehir arasındaki eşleme kaynakta tarihli değil.
- **Aynicâlût günü (3 Eylül 1260)** Halep · Ba'lebek · Rakka'da Memlük başlangıcı olarak KOMŞU kuralıyla alındı
  (TDV aynicalut-savasi kendi günü · şehir maddeleri yalnız yıl · aynı süreç) — ALT SINIR, "gün komşudan" yazılı.
- **Kahire künye çelişkisi:** TDV kahire Memlük iktidarını 650/1252'ye koyar; `memluk` künyesi 1250, `eyyubi` 1250-04-30'da
  biter ⇒ Eyyûbî dönemi yazılsa 1250-1252 aşımı doğardı; yazılmadı, Z3'e.

### Ortadoğu yan bulguları — 🔴 D206 sınıfı, AĞIR (1281 SONRASI, dokunulmadı)
Atlas 1281'de **MEMLÜK** boyuyor, oysa:
- **Trablusşam** — TDV 1109 Haçlı kontluğu; `trablus-kontlugu` künyesi **1289-04-26**'ya dek sürer.
- **Akkâ** — TDV 1191 Haçlı, 1229 sonrası Saint Jean karargâhı; `kudus-kralligi` künyesi **1291-05-18**.
- **Sayda** — TDV 1261 Templier'lere teslim, 1271'de sahil onlarda.
- **Beyrut** — TDV 1197 Haçlılar tekrar zaptetti.
- **Hama** — `eyyubi-hama` künyesi **1342**'ye dek sürer.
⇒ Künyeler VAR ama noktalara hiç yazılmamış: atlas 1281-1291 Haçlı Levant'ını ve Eyyûbî Hama'yı Memlük gösteriyor.
Bu bir 1281 SONRASI düzeltmesidir (0085 gruplarının dilimi) — koordinatöre.

## ① ÖNGÖRÜ — İRAN · MÂVERÂÜNNEHİR · KAFKAS (ölçümden ÖNCE, 2026-10-09)
Duvar: İran 93 · Mâverâünnehir 33 · Kafkas (yeni kutu lat 38.5-44.5, lon 44.8-50.5) 12 = 138. 0930 var-aday İran 19, Mâverâünnehir 11.
| Soru | Öngörü | Mekanizma |
|---|---|---|
| ② sıkı zincir | **8-15** | Moğol istilâsı (1220-1221) birçok şehirde tarihli bir halka verir; İlhanlı (1256) ile birleşme kolay. Ama Hârizmşah→Moğol→İlhanlı arası boşluk (1231-1256) mogol-imparatorlugu künyesine düşer (künye 1260'ta biter, boyasız) |
| ① 1281 sonrası kuruluş | ~2 | Safevî/Kaçar dönemi şehirleri (ör. Tebriz değil; küçük kasabalar) |
| boyasız künye kullanımı | `mogol-imparatorlugu` sık | |

## ② İRAN · MÂVERÂÜNNEHİR · KAFKAS — ölçüm (93 + 33 + 12 = 138, TAMAMI okundu)
| Kova | Sayı | Öngörü |
|---|---|---|
| TDV yer maddesi bulunan | 44 | — |
| **① 1281 sonrası kuruluş** | **0** | ~2 ❌ |
| **② sıkı zincir → diff** | **14** — Tebriz · Merâga · Isfahan · Gence · Herat · Serahs · Merv · Simnân · Semerkant · Taşkent · Hucend · Kaşgar · Belh · Derbend | 8-15 ✅ |
| ②z süreklilik çürük | 1 — Nahçıvan (1221 Moğol, ama 1225 Celâleddin Azerbaycan'da) | |
| **③ kaynak yok** | **123** (94 madde yok · 17 madde var cümle yok · 6 kopuk · 5 bölge/saltanat · 1 yanlış madde: Ahar→Karadağ/Montenegro) | |
⇒ %10,1. Mekanizma öngörüldüğü gibi: Moğol istilâsı (1218-1239) şehir maddelerinde TARİHLİ bir halka veriyor;
İlhanlı (1256) / Çağatay (1227) / Altın Orda (1242) ile birleşme **ARDIL YAPI** geçişidir ve kaynak geçiş günü
vermez ⇒ **künye f'si devralındı, her kayıtta "kaynaksız gün" beyanlı** (12 nokta). Hârizmşah→Moğol arasında
`harizmsah` künyesinin 1231'de bitmesi Isfahan ve Gence'de 1231-1235 boşluğu açıyor ⇒ o zincirler 1235'ten başlar.

### 🔴 Boya borcu artık ağır — `mogol-imparatorlugu` BOYASIZ
Yamanın 122 ön-1281 döneminin **20'si boyasız künyede**: `mogol-imparatorlugu` 16 · `antakya-prinkipsligi` 2 ·
`eyyubi` 1 · `abbasi` 1 — **19 nokta**. Ufuk açılırsa bu dilimler boyanmaz (harita deliği). Z3/Z4'e: en az
`mogol-imparatorlugu` boyası (Moğol 1206-1260 İran/Mâverâünnehir/Kafkas dilimi tümüyle ona düşüyor).

### İran yan bulguları (🟡 modelleme sorusu — 1281 SONRASI, dokunulmadı)
Atlas 1281'de İLHANLI boyuyor; künyeler var ve İlhanlı'ya TÂBİ yerel hânedanları gösteriyor:
**Şiraz** `salgurlu` (→1286-12-29) · **Kirman** `kutlughanli` (→1306) · **Herat** `kert` (1244→1389).
Tâbi hânedanı `v:` mi `s:` mi göstermeli — koordinatör kararı.

## ③ KALAN — DIŞA (ölçülmedi, LİSTE ve SAYI)
Çekirdek + komşu dilimler bitti (846 nokta okundu). Duvarın **1605** noktası hiçbir kutuda değil:
| Bölge (kaba koordinat bölmesi) | Nokta | TDV ile ölçülebilir mi |
|---|---|---|
| Batı/Orta Avrupa + İber + Batı İtalya | 342 | Endülüs/Sicilya kısmen; çoğu TDV DIŞI — akademik kaynak gerekir |
| Kuzey/Doğu Avrupa + Rus | 191 | Altın Orda/İdil kısmen; çoğu TDV dışı |
| Sahra-altı Afrika | 170 | Sahel İslâm şehirleri kısmen (TDV) |
| GD Asya + Okyanusya | 146 | Endonezya İslâm şehirleri kısmen |
| Amerika | 145 | TDV dışı (0930 ⑤: yoğunluk YETERSİZ — pencere açılmamalı) |
| Hint + Afganistan güney | 133 | Delhi Sultanlığı şehirleri — TDV İYİ kapsar |
| Çin + Kore + Japonya | 126 | TDV dışı |
| **Kuzey Afrika + Sahra** | **122** | **TDV İYİ kapsar** (Murâbıt/Muvahhid/Hafsî/Fâtımî) |
| öteki (Kızıldeniz kıyısı, Kafkas kuzeyi vb.) | 96 | karışık |
| **Arabistan + Körfez** | **84** | **TDV İYİ kapsar** |
| İç Asya + Sibirya | 50 | kısmen |
Önerim: aynı yöntemle sıradaki dilim **Kuzey Afrika (122) + Arabistan (84) + Hint (133)** — TDV'nin güçlü olduğu
ve İslâm dünyası olduğu için CLAUDE.md §4 birincil kaynağı geçerli. Avrupa/Doğu Asya/Amerika için TDV yöntemi
UYGUN DEĞİL (kaynak türü farklı) — ayrı karar.

## Toplam (şu ana dek)
| Dilim | Nokta | ① | ② diff | ②z | ③ | ② oranı |
|---|---|---|---|---|---|---|
| Anadolu | 301 | 2 | 35 | 2 | 262 | %11,6 |
| Balkan | 276 | 0 | 7 | 0 | 269 | %2,5 |
| Ortadoğu | 131 | 0 | 11 | 0 | 120 | %8,4 |
| İran-Mâverâünnehir-Kafkas | 138 | 0 | 14 | 1 | 123 | %10,1 |
| **Toplam** | **846** | **2** | **67** | **3** | **774** | **%7,9** |
Yama: `data/yer_yama_once1281_z6.js` · 67 kayıt · 122 ön-1281 dönem · 0 alıntı hatası · 0 künye aşımı.
- Uygulayıcı kuru koşusu (67 kayıtla, yeniden): **51 ÇAKIŞMA** (inmiş eski yamalarla) · 16 temiz · çıkış 2 (önceden de vardı).

## ① ÖNGÖRÜ — KUZEY AFRİKA (ölçümden ÖNCE, 2026-10-09)
Kutu lat 12-37.5 · lon -18…24.5 (Mısır kutusu hariç). TDV Mağrib şehirlerini (Tunus, Kayrevan, Fas, Merakeş, Tilimsan,
Bicâye…) ayrıntılı kapsar; hânedan zinciri Zîrî/Hammâdî → Murâbıt (1060-1147) → Muvahhid (1147-1269) → Hafsî/Merînî/Zeyyânî.
| Soru | Öngörü | Mekanizma |
|---|---|---|
| ② sıkı zincir | **15-25** | Muvahhid→ardıl geçişleri (Hafsî 1229, Zeyyânî 1236, Merînî 1269) şehir maddelerinde tarihli; künyeler var mı belirsiz |
| künyesi olmayan sahip | sık | Murâbıt/Muvahhid/Hammâdî künyesi `devletler.js`te yoksa zincir orada kesilir |
| ① 1281 sonrası kuruluş | ~3 | |

## ② KUZEY AFRİKA — ölçüm (kutu 200 nokta — Sahra/Sahel kuzeyi dahil, TAMAMI okundu)
| Kova | Sayı | Öngörü |
|---|---|---|
| TDV yer maddesi bulunan | 31 | — |
| **① 1281 sonrası kuruluş** | **0** | ~3 ❌ |
| **② sıkı zincir → diff** | **9** — Girit(Resmo) · Tunus · Tilimsan · Fas · Merakeş · Rabat · Tanca · Sebte · Sicilmâse | 15-25 ❌ |
| **③ kaynak yok** | **191** (169 madde yok · 14 madde var cümle yok · 5 kopuk · 3 bölge/ihtimal) | |
⇒ %4,5. Öngörü niye ıskaladı: kutunun 200 noktasının yalnız **31'inin** TDV yer maddesi var (Sahra/Libya iç kesim ve
küçük kasabalar); zincir ise **Muvahhid künyesinin 1269'da bitmesiyle** Tanca/Sebte'de kopuyor (1269-1273 sahibi yok).
### Künye/kaynak farkları (Z3'e)
- `hafsi` künyesi 1229-01-01 · TDV tunus Hafsî'nin Tunus'a girişini **625/1228**'e koyar (1 yıl).
- `zeyyani` künyesi 1236-01-01 · TDV tilimsan hânedanın kuruluşunu **632/1235**'e koyar (1 yıl).
  ⇒ İki kayıtta da künye günü devralındı (kaynaksız gün, fark beyanlı).
- **Malta:** atlas 1281'de `napoli`, oysa `napoli` künyesi **1282-03-30**'da başlar — mevcut veride künye aşımı (yan bulgu).

## ① ÖNGÖRÜ — ARABİSTAN (84) + HİNT (133) (ölçümden ÖNCE, 2026-10-09)
| Soru | Öngörü | Mekanizma |
|---|---|---|
| Arabistan ② | **3-8** | Hicaz/Yemen şehirleri TDV'de var; Eyyûbî Yemen (1174) → Resûlî (1229) zinciri tarihli olabilir, ama Necd/Körfez kasabaları yok |
| Hint ② | **5-12** | Delhi Sultanlığı fetihleri (1192-1206 Gurlu/Kutbüddin Aybeg, 1290 öncesi) şehir maddelerinde tarihli; Güney Hint (Çola/Pandya) TDV'de zayıf |
| TDV maddesi bulunan | Arabistan ~25 · Hint ~35 | |

## ② ARABİSTAN (84) + HİNT (133) — ölçüm (TAMAMI okundu)
| Kova | Arabistan | Hint | Öngörü |
|---|---|---|---|
| TDV yer maddesi bulunan | 17 | 22 | ~25 · ~35 ❌ |
| **② → diff** | **0** | **4** — Delhi · Koil (Aligarh) · Ecmîr (Ajmer) · Lahor | 3-8 ❌ · 5-12 ❌ |
| ③ | 84 | 129 | |
Arabistan'da ② 0'ın sebebi bir YAN BULGU: Yemen zincirleri (Zebîd 1174 Eyyûbî · Sana 1229 Resûlî) 1281'deki mevcut
sahibe bağlanmıyor, çünkü atlas Tihâme ve Aden'i 1281'de `yemen` = **yemen-zeydi** (Zeydî imamlık) boyuyor; oysa
`resuli` künyesi (1229-1454) VAR ve hiç kullanılmamış. Hicaz şehirleri (Mekke/Medine) tâbiiyet cümleleri — sahiplik değil.
Hint'te Gurlu → Delhi Sultanlığı ARDIL geçişi künye günüyle (1206-01-01) devralındı (beyanlı).

---
# 🟢 TESLİM ÖZETİ (Z6, 9 Ekim 2026)

## Toplam — 1263 nokta, TAMAMI okundu
| Dilim | Nokta | ① | **②** | ②z | ③k | ③b | ③y | ③ (madde yok/cümle yok) | ② % |
|---|---|---|---|---|---|---|---|---|---|
| Anadolu | 301 | 2 | **35** | 2 | 25 | 25 | 6 | 206 | 11,6 |
| Balkan | 276 | 0 | **7** | 0 | 23 | 21 | 1 | 224 | 2,5 |
| Ortadoğu | 131 | 0 | **11** | 0 | 15 | 5 | 0 | 100 | 8,4 |
| İran-Mâverâünnehir-Kafkas | 138 | 0 | **14** | 1 | 6 | 5 | 1 | 111 | 10,1 |
| Kuzey Afrika | 200 | 0 | **9** | 0 | 5 | 3 | 0 | 183 | 4,5 |
| Arabistan + Hint | 217 | 0 | **4** | 0 | 8 | 4 | 0 | 201 | 1,8 |
| **TOPLAM** | **1263** | **2** | **80** | **3** | **82** | **63** | **8** | **1025** | **6,3** |
Kova anahtarı: ① kaynakta 1281 sonrası kuruluş · ② kaynakta okunan 1000-1281 sahibi, 1281'e KESİNTİSİZ bağlı (diff'te) ·
②z tanık var, süreklilik çürük (diff'te DEĞİL) · ③k tarihli tanık var, zincir kopuk · ③b bölge/yöre/ihtimal/saltanat
aralığı/sahiplik demeyen cümle (D208) · ③y yanlış madde · ③ TDV yer maddesi yok ya da 1000-1280 tarihli cümle yok.

## Ölçek cevabı (koordinatörün ilk sorusu)
**Geri yönün işi 2526 nokta DEĞİL.** Sıkı kuralla TDV'nin güçlü olduğu coğrafyada (İslâm dünyası + komşuları) okunan
1263 noktanın **80'i (%6,3)** geriye uzar. Duvarın kalan **1188** noktası (Batı/Kuzey/Doğu Avrupa · Çin-Kore-Japonya ·
Amerika · Sahra-altı · GD Asya · İç Asya) ölçülmedi ve TDV yöntemiyle ÖLÇÜLEMEZ (kaynak türü farklı).
⇒ Ufuk 1000'e açılırsa bugünkü veriyle duvar noktalarının ~%95'i 1000-1281 arasında **sahipsiz** kalır (Değişmez 1).

## Yama
`data/yer_yama_once1281_z6.js` · `window.YER_YAMA_ONCE1281_Z6` · **80 kayıt · 142 ön-1281 dönem**
- Alıntılar 142/142 TDV gövdesinde birebir (alt dizgi sınavı) · künye aşımı 0 · `git apply --check` temiz · CR 0.
- **24 dönem "kaynaksız gün"** (künye günü devralındı, her birinde beyan): Moğol→İlhanlı/Çağatay/Altın Orda ve
  Gurlu→Delhi ardıl geçişleri, İznik/Latin/Atina 1204-1205, Hafsî/Zeyyânî 1 yıl farkları.
- Kuru koşu: 80 kaydın **51'i ÇAKIŞMA** (inmiş eski yamalarla — glob dışına taşıma koordinatörde) · çıkış 2 önceden de var.
- **Boya borcu:** 20 dönem / 19 nokta boyasız künyede — `mogol-imparatorlugu` 16 · `antakya-prinkipsligi` 2 · `eyyubi` 1 · `abbasi` 1.

## ③ Ne bulamadım
- 1025 noktanın TDV yer maddesi yok ya da 1000-1280 tarihli cümlesi yok. İkinci ad varyantı / kapsayıcı madde (§4
  "olay değil yer-kişi") denenmedi — bir sonraki tur bunu yapabilir (0930'un önerisi: Ani→kars, Otrar→farab).
- 82 kopuk zincirin eksik halkası (tarihsiz el değiştirme) — başka kaynak (akademik) gerektirir.
- 1188 kutu dışı nokta ölçülmedi.

## ④ Ne istiyorum
1. **Yamayı uygula** — önce inmiş eski yamaların glob dışına taşınması (51 çakışma onu bekliyor). 29 kayıt bugün temiz.
2. **Z3'e:** `mogol-imparatorlugu` boyası (16 dönem) · Kahire künye çelişkisi (TDV 650/1252 ↔ memluk 1250/eyyubi 1250-04-30) ·
   `hafsi` 1228↔1229 · `zeyyani` 1235↔1236 · `ahlatsahlar` t 1208 ↔ TDV bitlis 1209.
3. **1281 SONRASI düzeltmeleri (0085 gruplarına)** — en ağırdan: Levant Haçlı şehirleri (Trablusşam · Akkâ · Sayda ·
   Beyrut) ve Hama 1281'de MEMLÜK yazılı, künyeleri var · Tihâme/Aden 1281'de Zeydî (`resuli` kullanılmamış) ·
   Korfu/Draç Venedik (TDV Anjou) · Patras Bizans (TDV Frank) · Alaşehir Selçuklu (TDV Bizans) · Alanya Karaman ·
   Diyarbakır · Malta napoli (künye 1282'de başlar) · Çanakkale/Uzunköprü kuruluş öncesi boyanıyor.
4. **Ufuk kararı için (Z1):** 1000'e açmak bugünkü veriyle ölçülmüş olarak yetersiz; 1281 öncesi boyalı alan yalnız
   80 noktanın petekleri olur. Ufuk ancak (a) ③'ün ikinci tur aramaları ve (b) TDV dışı bölgeler için kaynak kararı
   sonrasında anlamlıdır.

## Dosyalar (`C:\atlas-umit\denetim\`)
ZAMAN-Z6-1008.md (bu rapor) · ZAMAN-Z6-1008-KOORD.diff (yeni dosya data/yer_yama_once1281_z6.js) ·
ZAMAN-Z6-KARAR-{anadolu,balkan,ortadogu,irankafkas,kuzeyafrika,arabhint}.json (elle kararlar) ·
ZAMAN-Z6-{…}-sinif.json (1263 noktanın sınıfı) · ZAMAN-Z6-{…}-tablo.md (kaynak + gerekçe tabloları) ·
ZAMAN-Z6-{anadolu,balkan,suriye,irak,misir,ortadogu,iran,maveraunnehir,kafkas,irankafkas,kuzeyafrika,arabistan,hint,arabhint}-ham.json ·
ARAC-ZAMAN-Z6-1008.py (ölçüm + TDV çekme) · ARAC-ZAMAN-Z6-URET-1008.py (yama üretimi + sınav) · ARAC-ZAMAN-Z6-TABLO-1008.py ·
ZAMAN-Z6-tdv/ (TDV önbelleği).

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

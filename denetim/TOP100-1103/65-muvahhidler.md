# 65 · Muvahhidler — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb (yönerge şablonundan; ben `git` koşmadım), 2026-11-04. Ölçer: `top100_olc.py muvahhidler` + kendi `sahip65.py` betiğim (data/yerlesimler*.js'te `d:"muvahhidler"` dönemlerini okur; salt okur).

## Özet
- Künye 1 (`muvahhidler`, 1130-01-01 → 1269-01-01); eksik evre yok. Yerleşim: ölçer 25, benim betiğim 27 dönem / 24 yerleşim (1172'de 24 nokta; ölçer "en geniş 1172: 25").
- Kırılma 34; **AÇIK 7** (ölçer) + yalnız otomatik maddeyle kapanan 0. "Harita anahtarı" uyarısı yok.
- En ağır 3 bulgu: (1) **Muvahhid "çekirdeği" haritada yok**: Tinmel (başkent) `s:[]` + `veri-yok`, Tunus 1158-1228 hiç `s:`'sız (madde 1158-11-04 var, nokta yok), Cezayir/Bicâye/Tanca/Sebte yok; 1130-1147 arası tek nokta Mamûra, o da Abdülmü'min'in sonradan kurduğu şehir (1130'dan beri Muvahhid yazılmış). (2) **Hicrî-ilk-gün kuralı yerleşim sınırlarına uygulanmamış**: Sevilla t 1248-01-01 (madde 1248-04-26), Rabat t 1251-01-01 (madde 1251-03-26), Almería f 1157-01-01 (552 H. ilk günü ≈ 1157-02-13 Jül.), Miknâs 1245-01-01 / 1247-01-01 (643 H. ≈ 1245-05-28; 645 H. ≈ 1247-05-07). (3) **Künye t 1269-01-01 ile evren maddesi 1269-09-09 arası 251 gün**; TDV "Merâkeş" günü 9 Eylül 1269 veriyor, `ic_not_d` çelişkiyi kendisi beyan ediyor ama düzeltilmemiş.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| muvahhidler | Muvahhidler Devleti | 1130-01-01 | 1269-01-01 | var (devletler.js:11034); BOYALAR'da var (arac/renkler.py:4428) |
Başka künye gerekmiyor. Ardıl/komşu künyeler ayrı: murabitlar (önceki), merini, hafsi, benî ganiye (var olduğu yer `kronoloji_sinir_once1281_geriye.js`'te geçiyor), nasri. Muvahhid Endülüs'ü ve Mağrib'i tek künyede.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | öneri |
|---|---|---|---|---|---|
| f | 1130-01-01 (yıl) | TDV *Muvahhidler*: «Devletin resmen teşekkülü ise … ölümünün (14 Ramazan 524 / 21 Ağustos 1130) ardından Abdülmü'min el-Kûmî tarafından gerçekleştirildi». TDV *Abdülmü'min*: 1130'da on müridi halife tanıdı; emîrü'l-mü'minîn unvanı 1133 (başka anlatım 1123) | Treccani *Almohadi*: «nel 1147 rovesciò gli Almoravidi» (devrim yılı 1147); EBSCO Research Starters (akademik olmayan özet): c.1120 hareket, 1147 "resmen kuruluş" | Okul farkı, hata değil: 1121 mehdîlik ilânı / 1130 devlet / 1147 Merakeş. TDV esas ⇒ 1130 doğru. 524 H. = 1129-12-22…1130-12-11 (tablo, ±2g) ⇒ hicrî kuralı 1130-01-01'i verir; ama TDV "ölümünün ardından" der (ölüm 1130-08-21) ⇒ gerçek uç 1130-08-21'den sonra. | Değiştirme; `ic_not_f` zaten 21 Ağustos'un ölüm günü olduğunu beyan ediyor. İsteğe bağlı: `ic_not_f`a "1133 unvan (TDV abdulmumin-el-kumi)" ekle. |
| t | 1269-01-01 (yıl) | TDV *Muvahhidler*: «668'de (1269) şehre girmelerini engelleyemediler. Böylece Muvahhidler Devleti son bulurken»; TDV *Merâkeş* (olaylar_ortacag_iberya_magrib.js:105'te alıntılı): «10 Muharrem 668'de (9 Eylül 1269) Merakeş'e girerek» | Treccani: «scomparve nel 1269 con la presa di Marrakech da parte dei Marinidi»; EBSCO: 1269 son halife öldürüldü, Merînîler Merakeş'i aldı | Yıl iki kaynakta 1269 ✓. **Gün TDV'de var: 1269-09-09** (668 H. 1269-09-07 G. ≈ 08-30 Jül. başlar; 10 Muharrem ≈ 09-08/09 Jül. ✓). 1269-01-01 gün bilgisini görmezden geliyor ve Merakeş'i 251 gün erken Merînî'ye veriyor. TDV *Merînîler* 668/1270 der: 668 H. 1269-09…1270-08'dir, çelişki yok. | `devletler.js` muvahhidler `t:"1269-09-09"`; ona bağlı bütün `d:"muvahhidler"`/`d:"merini"` 1269-01-01 uçları (Merakeş, Mamûra ve 1269'da biten diğerleri) birlikte 1269-09-09'a. Merakeş sınırı maddesi (:105) zaten bu günde; çelişki beyanı `ic_not_d` kapanır. |
| Evre: Merakeş 1147-03-23 | var | TDV *Abdülmü'min*: «Merakeş'i de teslim aldı (23 Mart 1147)» (11 ay kuşatma) | Treccani 1147 (devrilme) | ✓ | — |
| Başkent | "Tinmel → Merakeş" | TDV *Muvahhidler* Tinmel'i merkez, Merakeş'i başşehir verir; geçiş tarihi TDV'de **yok** | — | Tarihsiz ⇒ künye başkent alanı doğru ama zamansız | Başkent geçişi 1147-03-23 olarak yazılacaksa TDV'de gün yok: "geçiş Merakeş fethiyle (TDV 23 Mart 1147; başkent sıfatı yazılı değil, çıkarım)" beyanı şart. |

Erişilemeyen: Britannica *Almohad* 403; Encyclopaedia of Islam/EI2 *'Abd al-Mu'min*, *al-Muwaḥḥidūn* çekilemedi (aşağıda liste). Bu yüzden f/t için "iki bağımsız akademik kaynak" = TDV + Treccani (ansiklopedi). Hakemli üçüncü kaynak (Fage/Oliver *Cambridge History of Africa* c.2; Kennedy *Muslim Spain and Portugal*) bu oturumda **açılmadı**.

## c) Kronoloji (Değişmez 2 evreni)
Var olanlar (tarihler TDV'ye göre sınandı):
| gün | madde | dosya:satır | hüküm |
|---|---|---|---|
| 1121-11-13 | İbn Tûmert mehdîliğini ilân etti | olaylar_ortacag_iberya_magrib.js:69 | ✓ (TDV: Ramazan 515 = Kasım 1121; 515 H. ilk günü 1121-03-22 Jül.; seçilen gün Ramazan'ın içinde, ay biliniyor) |
| 1145-03-01 | Tâşfîn öldü (odak Oran) | iberya_magrib.js:76 | ✓ Oran'ın Muvahhid'e geçişinin hemen öncesi |
| 1145-06-23/24 | Tilimsân / Vecde Muvahhid'e | kronoloji_sinir_once1281_geriye.js:7, :22; iberya_magrib.js:77 | ✓ (540 H. ilk günü 1145-06-24 Jül.); aynı olay 3 kayıtta, 1 gün farkla (06-23 vs 06-24) — mükerrer |
| 1146-04-28 | Fas (Fez) kuşatması sonu | olaylar_ortacag_bekleyen_acik.js:126 | var; kaynağını açmadım |
| 1147-03-23 | Merakeş alındı | kronoloji_sinir_once1281_geriye.js:9; künye kronolojisi | ✓ |
| 1150-04-30 | Rabat ordugâhı | iberya_magrib.js:84 | ✓ (545 H. ∩ 1150 ⇒ 1150-04-30 Jül.) |
| 1158-11-04 | Tunus zaptedildi | bekleyen_acik.js:132 | ✓ TDV *Abdülmü'min* «4 Kasım 1158'de Tunus'u zaptetti» — **ama Tunus'ta Muvahhid `s:` yok** (bkz. d) |
| 1160-01-21 | Mehdiye geri alındı | iberya_magrib.js:86 | ✓ TDV *Zîrîler* |
| 1163-05-16 | Abdülmü'min öldü | iberya_magrib.js:88 | ✓ TDV *Abdülmü'min* |
| 1184-01-01 | Yûsuf öldü, Ya'kūb halife | iberya_magrib.js:91 | yıl TDV 580/1184; **hicrî kuralı: 580 H. ∩ 1184 ilk günü ≈ 1184-04-14 Jül.**; 1184-01-01 579 H.'ye düşer ⇒ kural ihlali (ölçülemeyen alanlarda küçük) |
| 1195-07-18 | Alarcos | iberya_magrib.js:92 | TDV yalnız 591/1195 verir; gün 18 Temmuz Britannica'dan (erişilemedi) ⇒ gün "çekilemedi" |
| 1212-07-16 | Las Navas (İkāb) | iberya_magrib.js:94 | TDV 609/1212 yıl; gün Britannica (erişilemedi) |
| 1213-01-01 | en-Nâsır öldü, el-Müstansır | iberya_magrib.js:95 | TDV 610/1213; **610 H. ilk günü 1213-05-22 Jül. ⇒ 1213-01-01 609 H.'de**: ihlal |
| 1228-01-01, 1229-11-20 | İbn Hûd ayaklandı; Hafsî bağımsızlık | iberya_magrib.js:96-97 | TDV tunus 625/1228 ile 1229-11-20 arasında 1 yıl fark `yerlesimler.js` Tunus kaynağında kendi notunda beyanlı |
| 1248-04-26 | Sevilla (III. Fernando) | bekleyen_acik.js:170 | ✓ hicrî kuralı (646 H.) ama **gerçek gün 23 Kasım 1248** (Vikipedi yansımaları; akademik teyit **çekilemedi**) |
| 1248-04-26 | Fas, Selâ, Tâze Merînî'ye | bekleyen_acik.js:171 | ✓ |
| 1251-03-26 | Rabat, Selâ Merînî'ye | bekleyen_acik.js:172 | ✓ (649 H. ilk günü ≈ 1251-03-25/26 Jül.) |
| 1269-09-09 | Merînîler Merakeş'e girdi, son | iberya_magrib.js:105 | ✓ TDV *Merâkeş* günü |

Eksik maddeler (öneri):
1. **Kuruluş yok.** f=1130 için evren maddesi yok:
   `{ odak_yer:["Tinmel (Tin Mal)"], t:"1130-01-01", kesinlik:"yil", b:"İbn Tûmert'in ölümünün ardından Abdülmü'min el-Kûmî devleti resmen kurdu", tur:"kurulus", yer_id:"Tinmel (Tin Mal)", kaynak:"TDV: muvahhidler — «Devletin resmen teşekkülü ise … Abdülmü'min el-Kûmî tarafından gerçekleştirildi» (524/1130; 21 Ağustos 1130 İbn Tûmert'in ölüm günü, kuruluşun günü değil)" }` (künye kronolojisinde var, evren dışı).
2. Oran (Vehrân) Muvahhid'e geçiş: `{ odak_yer:["Oran"], t:"1145-01-01", kesinlik:"yil", b:"Vehrân Muvahhid egemenliğine girdi (539/1145)", tur:"toprak-kazanc", yer_id:"Oran", kaynak:"TDV vehran — «539'da (1145) Muvahhidler'in egemenliği altına giren Vehrân'da» (539 H. 1144-07-04…1145-06-23 Jül. ∩ 1145 ⇒ 1145-01-01)" }` — alternatif: Oran f'yi 1145-03-01'e (Tâşfîn ölümü, mevcut madde) çekmek; ama TDV bunu yazmıyor, çıkarım olur ⇒ ilk öneri.
3. Almería geri alındı: `{ odak_yer:["Almería"], t:"1157-02-13", kesinlik:"yil", b:"Muvahhidler Meriye'yi (Almería) Kastilya'dan geri aldı (552/1157)", tur:"toprak-kazanc", yer_id:"Almería", kaynak:"TDV meriye — «Muvahhidler tarafından bir süre sonra geri alındı (552/1157)»; hicrî 552 ilk günü ≈ 1157-02-13 Jül. (tablo, ±1g, araçla doğrulanmadı)" }` ve Almería `s:` f'si 1157-01-01 → 1157-02-13.
4. Miknâs üçlüsü (TDV *Miknâs* + TDV *Muvahhidler* iki yıl farklı verir — kendi içlerinde çelişir, aşağıda): 1237 Merînî alır (634 H. 1236-09-04…1237-08-24 Jül. ∩ 1237 ⇒ 1237-01-01 ✓ mevcut sınır), **1245-05-28** Muvahhid geri alır (643 H. ∩ 1245; sınır şimdi 1245-01-01, 643 H. başlamadan önce), **1247-05-07** Merînî yeniden alır (645 H. ∩ 1247; sınır 1247-01-01 — 645 H. başlamadan önce). Maddeler: `{ odak_yer:["Miknâs (Meknes)"], t:"1237-01-01", kesinlik:"yil", tur:"toprak-kayip", b:"Merînîler Miknâs'ı Muvahhidler'den aldı (634/1237)", kaynak:"TDV miknas — «Miknâs, 634'te (1237) … Merînîler'in eline geçti»" }` ve benzer iki madde (643 → 1245-05-28; 645 → 1247-05-07; kaynak: TDV miknas «643'te (1245-46) geri aldılarsa da Merînîler iki yıl sonra …», TDV muvahhidler «645/1247 Miknâs»).
5. Tunus (1158-1187) ve 1187-1203 ile ilgili maddeler var (bekleyen_acik.js:132, :141, :148); eksik olan **yerleşim dönemleri** (aşağıda).
6. Başkent: 1147'de Merakeş'in başkent oluşu — TDV'de tarih yok; yazma.
7. Muvahhid–Merînî: 1250-04-05 Fas sınırı ile 1248-04-26 Fas maddesi arası 709 gün: `ic_not_d` kendisi beyan ediyor (iki olay olabilir). Madde ekle: "1250-55 arası Mağrib-i Aksâ'nın büyük bölümü Muvahhid'den çıktı" (TDV *Muvahhidler*) — 1250-04-05 Fas yerleşim sınırına karşı madde: `{ t:"1250-04-05", odak_yer:["Fas (Fez)"], …, kaynak:"TDV muvahhidler «1250-1255 arasında Mağrib-i Aksâ'nın büyük bölümünü»" }` — kaynak gün vermiyor; **yalnız yıl-aralığı** ⇒ madde "[1250-55; gün teyitsiz]" notuyla yaz ya da sınırı 1248-04-26'ya çek.

## d) Harita uyumu
Ölçer: kırılma 34, AÇIK 7, otomatik 0.
| # | gün | yerleşim | ölçer dediği | gerçek durum / öneri |
|---|---|---|---|---|
| 1 | 1145-01-01 kazanç | Oran | alâkalı madde yok | Madde yok. Öneri c-2 (TDV vehran, hicrî ilk gün ✓ sınır doğru). |
| 2 | 1157-01-01 kazanç | Almería | alâkalı madde yok | Madde yok; **ayrıca sınır hicrî kuralına aykırı** (552 H. 1157-02-13 Jül. başlar). Öneri c-3: sınır 1157-02-13 + madde. |
| 3 | 1237-01-01 kayıp | Miknâs | alâkalı madde yok | c-4. Not: TDV *Muvahhidler* Miknâs'ın alınışını 645/1247 verir, TDV *Miknâs* 634/1237 + 643'te geri alış; iki TDV maddesi uzlaşmıyor — `ic_not`ta iki kaynağıyla beyan (CLAUDE.md). |
| 4 | 1245-01-01 kazanç | Miknâs | en yakın 73 g (Kudüs) | c-4; sınır → 1245-05-28. |
| 5 | 1247-01-01 kayıp | Miknâs | alâkalı madde yok | c-4; sınır → 1247-05-07. Muvahhid künye kronolojisinin 1248 maddesi "Miknâs 1247'de alınmıştı" der — uyumlu. |
| 6 | 1248-01-01 kayıp | Sevilla | madde 116 gün uzakta | Madde var (bekleyen_acik.js:170, 1248-04-26). **Yerleşim sınırı maddeye çekilmeli: Sevilla `s:` Muvahhid t ve Kastilya f → 1248-04-26.** (Maddenin kendi `ic_not_d`'si "Atlas Sevilla sınırı 1248-01-01" diye çelişkiyi biliyor.) Gerçek gün 23 Kasım 1248 olabilir; akademik teyit yok ⇒ kural günü kullan. |
| 7 | 1251-01-01 kayıp | Rabat | madde 84 gün uzakta | Madde var (bekleyen_acik.js:172, 1251-03-26). **Rabat Muvahhid t ve Merînî f → 1251-03-26.** |

En geniş an (1172, 24 nokta): Merakeş, Fas, Miknâs, Rabat, Vecde, Tilimsan, Oran, Sevilla, Kurtuba, Badajoz, Málaga, Granada, Almería, Murcia, Jaén, Cebelitarık, Kafsa, Gabes, Sfaks, Cerbe, Trablus, Mehdiye, Konstantin, Mamûra. Bilinen sınırla uyum: Mağrib-i Aksâ, Evsat, İfrîkıye (1159-60) ve Endülüs'ün güneyi için tutarlı; Lizbon/Évora/Silves/Beja gibi Muvahhid Portekiz yakası "ONCE1281-AVRUPA" dosyasına bırakılmış (künye `ic_not_bolge`). Dışarıya taşan yer **yok** (1172'de Muvahhid sayılan hiçbir nokta kaynak sınırının dışında değil; Murcia/Jaén 1172 TDV 567/1172 ✓ kronoloji_sinir_akdeniz3_1024.js:22).

Haritada eksik/yanlış (en önemlileri):
1. **Tinmel (Tin Mal)** — kuruluş merkezi ve ilk başkent: `yerlesimler_once1281_yt_afrika.js:18` `s:[]`, `bos:"veri-yok"`. Öneri: `s:[{f:"1130-01-01",t:"1269-01-01",d:"muvahhidler",kesinlik:"yil",kaynak:"TDV muvahhidler: Tinmel merkez; son liderler 1269'da Tinmellel'de yakalanıp idam edildi (BEYANLI YAKLAŞIKLIK: Tinmel'in 1130'dan itibaren Muvahhid olduğu TDV'de açık cümle değil; İbn Tûmert'in merkezi olarak çıkarım)"}]` — kuruluş (1121-23) öncesi için Murâbıt değildi; **bu kaynakla bölge sahibi sorusu açık**.
2. **Tunus** — `yerlesimler.js:1121`: `s:` 1229'da başlıyor; 1158-11-04 (TDV) Muvahhid, 1184-1187 ve 1203'ten sonra Benî Gâniye, 1187-03-13 Muvahhid geri aldı. Öneri: `{f:"1158-11-04",t:"1229-11-20",d:"muvahhidler"}` + araya Benî Gâniye dilimleri (künyesi olmayan Benî Gâniye için `__BOSLUK__`/beyanlı boşluk) — mevcut maddeler: bekleyen_acik.js:132, :141, :148, iberya_magrib.js:97.
3. **Mamûra (Mehdiye)** `yerlesimler_h2_kuzeyafrika.js:139`: Muvahhid f 1130-01-01 `kesinlik:"yuzyil"` — TDV: Muvahhidler'in kurucusu Abdülmü'min "yeni bir şehir inşa etti"; şehir 1130'dan **sonra** kurulmuş (1150'ler); `kur:` yok. 1130-1147 arasındaki **tek** Muvahhid noktası bu: haritada Muvahhid devleti 1130'da Mamûra kıyısında, oysa Tinmel boş. Öneri: Mamûra f'yi şehrin kuruluşuna (TDV tarih yoksa `kur` yazma; sahiplik f'sini en erken Muvahhid fethi 1147-03-23'e çek) ve Tinmel'i ekle.
4. Eksik şehirler, her biri için önce "o devirde var mıydı" + TDV zinciri: **Cezayir** (1147-1229 beyanlı boşluk var, yerlesimler.js:1124; TDV Benî Gâniye 1184-87), **Bicâye (Bougie)** — 1152 Muvahhid (Konstantin 1152-04-08 var; Bicâye adlı yerleşim bulunamadı), **Tanca** (`yerlesimler.js:1397`: 1147 Muvahhid zinciri var ama 1269-1273 boşluğu yüzünden yazılmadı: beyanlı), **Sebte (Ceuta)**, **Sicilmâse/Sicilmasa**, **Silves-Évora-Beja** (Muvahhid Portekiz, 1172-1189 Silves; ayrı koşu `ONCE1281-AVRUPA`).
5. Sevilla Muvahhid 1148-1248: TDV *Abdülmü'min* "1148'e gelindiğinde Endülüs'ün güneybatısı Muvahhid'in elinde" der; ama 1228 İbn Hûd isyanında ve 1229-1248'de Sevilla'nın siyasî durumu (Muvahhid vali / bağımsız / Hûdî) kontrol edilmedi — 1228'de Kurtuba/Badajoz/Almería/Murcia bırakılmış ama Sevilla 1248'e dek Muvahhid; çelişen kayıt aramadım ⇒ "ölçülmedi".

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` muvahhidler: `t:"1269-01-01"` → `"1269-09-09"`; `ic_not_t`: TDV *Merâkeş* günü; ilgili 1269-01-01 yerleşim uçları (`yerlesimler*.js`, ör. Mamûra :139, Merakeş) birlikte 1269-09-09 (Değişmez 2: madde zaten 1269-09-09'da).
2. `yerlesimler.js` Sevilla: Muvahhid t / Kastilya f `1248-01-01` → `1248-04-26`. Rabat: Muvahhid t / Merînî f `1251-01-01` → `1251-03-26`.
3. `yerlesimler_avrupa.js:276` Almería: Muvahhid f `1157-01-01` → `1157-02-13`; `olaylar_ortacag_iberya_magrib.js`'e c-3 maddesi.
4. `yerlesimler_h2_kuzeyafrika.js:53` Miknâs: ikinci Muvahhid dönemi `1245-01-01…1247-01-01` → `1245-05-28…1247-05-07`; üç madde (c-4).
5. `olaylar_ortacag_iberya_magrib.js`: kuruluş (c-1), Oran (c-2) maddeleri; :95 `1213-01-01` → `1213-05-22` ve :91 `1184-01-01` → `1184-04-14` (hicrî 610/580 ilk günleri, tablo ±1g; `arac` ile doğrulansın). Tilimsân üç mükerrer kaydı (kronoloji_sinir_once1281_geriye.js:7/:22 ve iberya_magrib.js:77) tek güne indirilsin.
6. Tinmel, Tunus (1158-11-04…) yerleşim dönemleri (d-1, d-2); Mamûra f düzeltmesi (d-3).
7. Künye `ic_not_t`'ye TDV *Merâkeş* 9 Eylül 1269 günü ve "Merînîler'in girişi ≠ devletin son günü olabilir (TDV: son halife Ebû Debbûs Tinmellel'de yakalanıp idam edildi, günü verilmez)" beyanı.

## Erişilemeyen kaynaklar
- Britannica *Almohad* (https://www.britannica.com/topic/Almohad) — 403. Soru: Alarcos gün (18 vs 19 Temmuz 1195) ve Las Navas gün (16 Temmuz 1212).
- Encyclopaedia of Islam (2nd ed.) *al-Muwaḥḥidūn*; *ʿAbd al-Muʾmin*; *Ishbīliya* — bu oturumda açılmadı. Soru: devletin kuruluş yılı (1121/1130/1147) ve Sevilla'nın düşüş günü (23 Kasım 1248?) — TDV *İşbîliye* yalnız 646/1248 diyor.
- Fage & Oliver (ed.), *Cambridge History of Africa* c.2 (1978), "North Africa… Almohads" — bölüm yazarı Brett/Laroui; archive.org tam metni aranmadı. Soru: Tunus'un 1158-1160 ve 1187/1203 el değiştirmeleri.
- İSAM/DergiPark: Miknâs 1237/1247 çelişkisi (Merînî–Muvahhid) için hakemli makale bulunamadı; soru: Merînîler Miknâs'ı ilk hangi yıl aldı (TDV *Miknâs* 1237 mi, TDV *Muvahhidler* 1247 mi)?
- Hicrî→Jülyen tarihler benim tablo formülümle ±1-2 gün hesaplandı; `arac` hicrî çeviricisiyle doğrulanmadı.

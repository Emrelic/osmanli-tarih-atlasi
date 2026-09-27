# DUNYA-0079 — "devlet var, yeri yanlış" (D204) · 3 coğrafya

27 Eylül 2026 · şartname `oturumlar/DUNYA-0079.md` · yama `denetim/DUNYA-0079-yama.txt`
Ölçüm aleti: `girdi.yukle()` (92 dosya) + nokta zinciri taraması · `denetle.py` (27 Eyl koşusu, rc=0).
⚠️ Öngörü ölçümden ÖNCE yazılmadı (§11 ihlali) — aşağıdakiler öngörü sınavı değil, düz ölçümdür.

## Hükümler

| madde | hüküm | özet |
|---|---|---|
| H-79:7 | **sirada** (yama A) | Eksklavlar GERÇEK DEĞİL, noktasızlık artefaktı da değil: **16 nokta** `yerlesimler_kamerika.js`te "yeni-ispanya → meksika → 1923" kalıbıyla yazılmış |
| H-79:10+11 | **sirada** (yama B) + B2 doğu kenarı / B3 bitiş günü **senin-kararin** | 1281'de ne Boğdan ne Eflak: Bucak/Moldavya **Altın Orda**, Eflak toprağı **Macar hâkimiyeti** (TDV) |
| H-79:13 | **sirada** (yama C) | Künye dar (sınıf ②): Moskova appanajı **en geç 1283** (ESBE); künye 1325'ten başlıyor, nokta 1281-1325 `altinorda` |

## H-79:7 — ABD içinde Meksika eksklavı

**Soru: gerçek mi, artefakt mı?** İkisi de değil. Veri hatası. 1873-01-01'de ABD toprağında `s: meksika` taşıyan **16 nokta**
(`lat > 25.5` taraması, meksika/yeni-ispanya/teksas zinciri taşıyan 53 noktanın içinden):

| grup | noktalar | doğru devir |
|---|---|---|
| Kaliforniya | San José · Monterey · Santa Bárbara · Los Ángeles · Yuma geçidi | 1848 Guadalupe Hidalgo |
| Yeni Meksika / Utah | Las Vegas NM · Albuquerque · Santa Rita del Cobre · Fort Robidoux | 1848 |
| Teksas | Laredo (Nueces şeridi) · Nacogdoches | 1848 · 1836 Teksas → 1845 ABD |
| Gadsden | Tucson · Tubac | 1854-06-30 |
| **hiç Meksika olmadı** | Los Adaes (Sabine doğusu) · St. Louis (Louisiana) · Mission San Luis (Florida) | 1821-02-22 · 1803-12-20 · Florida zinciri |

Görseldeki üç yeşil leke: Doğu Teksas = Nacogdoches + Los Adaes · Florida = Mission San Luis · kuzeydeki etiketsiz = St. Louis.
Aynı kalıbın Kaliforniya/NM/Arizona kopyaları görselin dışında kalıyor ama aynı hatayı taşıyor.
**Ters yön (D206):** 16 noktanın hepsinde komşu ABD noktası var (Natchitoches, Mobile, San Francisco, Santa Fe, San Antonio…);
düzeltme delik açmaz. Sınır boyundaki Meksika noktaları (Matamoros, Camargo, Ciudad Acuña, Múzquiz) ölçüldü, güney yakada, dokunulmuyor.
İki koordinat yanlış yakada: El Paso del Norte (TX merkezinde, Juárez olmalı) · La Junta/Presidio (TX Presidio, Ojinaga olmalı). Bunlar **olculecek**.
**Denetim niye görmedi:** `meksika` künyesi 1821-1923 → her dönem künye penceresinde; 4c/4d "oraya ait miydi" sormaz.

Yan bulgu (yama DIŞI, ölçülmedi): Mobile ve Biloxi 1803-12-20'den `abd`. Oysa Batı Florida 1803 satışına girmedi (ABD Mobile'ı 1813'te aldı).
Kaynakla doğrulanmadı, **olculecek**.

## H-79:10 + H-79:11 — Tuna 1281

Ölçüm (1281-01-01, kutu 43.6-48.5K / 22-30.5D): `bogdan` 14 nokta · `eflak` 13 nokta · `bulgaristan` 7 · `macaristan` 7.
`denetle.py` 4d bunu zaten sayıyor: **bogdan 14 dönem 78 yıl, eflak 13 dönem 49 yıl künyeden önce.** Sınıf: künye GENİŞLETİLMEZ
(Boğdan 1359, Eflak 1330 öncesi devlet yok — `D203` hayalet). Doğru olan: ilk dönemi önceki hâkime vermek.

| bölge | 1281 hâkimi | TDV dayanağı |
|---|---|---|
| Bucak (Kili · İsmail · Akkirman) | **altinorda** | `bucak`: "1241'den sonra Moğollar ve onların halefleri olan Altın Orda Hanlığı Bucak'a hâkim olmuşlardır" · `akkirman`: "1241 yılında Moğollar'ın hâkimiyetine geçen" |
| Moldavya geri kalanı (Kalas · Kahul · Birlad · Yaş · Suçava …) | **altinorda** (çıkarım) | `bogdan`: "XIII. yüzyıldan itibaren de Tatarlar'la Gagauzlar'ın istilâsına uğrayan Moldavya". İstilâ, hâkimiyet değil. |
| Eflak toprağı (İbrail · Buzău · Bükreş …) | **macaristan** | `eflak`: "Eflak bu tarihlerde Macar hâkimiyetindeydi" · 1310 Basarab · 1330 Posada |
| Kuzey Dobruca (İshakçı · Babadağı) | **altinorda** (şu an `bulgaristan`) | `dobruca`: II. Bulgar devleti "Dobruca'nın 1241'de Moğollar tarafından istilâsına kadar" · "Moğol hâkimiyetine giren Dobruca" |

Kronoloji tarafı: Tuna ağzında Osman Bey maddesinin (H-79:11) yanında ayrı madde gerekmiyor. Madde haritayı sorguluyor, kronolojiyi değil.
Düzeltilecek şey veri.
**Bulunamadı:** 1345-1359 Macar markı (Dragoş), TDV `bogdan`da yıl yok · Dobruca'da Moğol hâkimiyetinin bitişi (Balık'a yıl yok) ·
TDV `isakci`, `nogay` 302/yok (Nogay'ın İsakçı merkezi TDV'de bulunamadı).
**Senin kararın:** B2 İbrail/Buzău/Rimnik-i Sârat Bărăgan kenarı (TDV Macar der, ayırmaz) · B3 Dobruca'nın bitiş günü.

## H-79:13 — Moskova Knezliği 1283

- Künye `moskova` f **1325-01-01**. TDV `rusya`: "I. İvan Daniloviç (1325-1341) 'büyük knez' unvanını edindi". Yani 1325 büyük knezliğin tarihi, knezliğin kuruluşu değil.
- ESBE «Даниил Александрович»: "получил в удел Москву **не позднее 1283 г.**". TDV'de Daniil yok (**bulunamadı**).
- Nokta: `Moskova` 1281→1325 `altinorda`. Aynı görselde **Tver** ve **Ryazan** kendi knezlikleriyle çiziliyor (onlar da Altın Orda tâbisi).
  Tutarsızlık bu: Moskova'nın temsili yok.
- Sınıf ② (aynı polity, Daniloviç hanedanı kesintisiz) → **künyeyi GENİŞLET** 1283'e, noktayı böl. `moskova` boyası `renkler.py`de VAR, motora dokunulmuyor.

Yan bulgu (yama DIŞI, **olculecek**): 260 km içindeki 14 nokta (Vladimir · Suzdal · Rostov · Yaroslavl · Uglich · Kolomna · Mojaysk · Kasimov …)
**aynı gün, 1325-01-01'de** altinorda→moskova atlıyor. Bu bir blok kopya. Gerçekte parça parça geçtiler: Kolomna 1301 Ryazan'dan, Mojaysk 1303,
Yaroslavl 1463, Kasimov 1452'den Kasım Hanlığı. Bu yıllar kaynakla doğrulanmadı. 1281-1325'te bunları `altinorda` gösteriyoruz,
oysa Vladimir/Rostov/Yaroslavl kendi knezlikleriydi (Tver/Ryazan gibi). Aynı D204 sınıfından ayrı bir iş.

## Değişen dosyalar
`denetim/DUNYA-0079.md` · `denetim/DUNYA-0079-yama.txt`. Veriye dokunulmadı.

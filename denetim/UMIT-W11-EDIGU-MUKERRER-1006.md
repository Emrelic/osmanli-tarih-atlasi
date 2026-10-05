# UMIT-W11-EDIGU-MUKERRER-1006 — K3 `edigu` sınıfı · PL-7 mükerrer madde

Oturum: UMIT-W11-EDIGU-MUKERRER-1006 (alt koordinatör UMIT İRTİBAT) · 5 Ekim 2026
Ağaç: `C:\atlas-w11` (detached `origin/main` = `8552686e`) · **YALNIZ ÖLÇÜM**, düzeltme/diff yok.

## 0. Mühürlü öngörü (ölçümden ÖNCE yazıldı)
```
K3: Edigü Altın Orda'nın beylerbeyi/emiri (Mangıt); Nogay Ordası onun ölümünden sonra
    (TDV ~1440'lar) kurulur. Sınıf = ③ ardıl yapı -> devlet:"altinorda" doğru,
    nogay künyesi genişletilmemeli.
PL-7: mükerrer sayısı 113-116 arası; 4 çift bugün de üyede; hepsi ayrı olay.
```
Tutan: K3 sınıfı. **Tutmayan:** PL-7 sayısı (112 çıktı, aralığın altında) ve "4 çift bugün
de üyede": üyede değiller, 3'ü `BILINEN_AYRI`ya girmiş, 4.'sü hiç ötmüyor.

---

## İŞ 1 · K3 `edigu`

### 1.1 Kayıt ve atıflar (ölçüldü)
| yer | içerik |
|---|---|
| `data/kisiler.js:270` | `{ id:"edigu", tur:"yabanci-hukumdar", ad:"Edigü", devlet:"nogay", t:"1420", donem:"ö. 1420", not:"Nogay Ordası'nın çekirdeğini oluşturan Mangıt beyi" }` |
| `data/paket_12.js:13791` | aynı kaydın PAKET kopyası (`arac/paketle.py` üretir, elle düzenlenmez → kaynak düzelince `paketle.py yenile`) |

`edigu` kimliğine **başka atıf yok** (`grep -w edigu` → `data/` + `arac/` + `js/`):
`vefat_id` 0 · `kisiler:` atfı 0 · `odak_kimlik` 0 · kronolojide `edigu` id'si 0.
Yalnız denetim belgeleri (`DENETIMSIZ-ELLE-VERI-1005.md`, `UMIT-TASNIF-1006.md`) ve
`gemini/KAYNAK-DENETIM-0919*.json` anıyor. **Uygulamada tüketici:** `js/app.js` KISILER'i
kişi dizini ve id araması (`:9150`, `:9976`, `:10131`) için okuyor; kişi kaydının
`devlet` alanını okuyan satır **bulunamadı** (`k.devlet` geçen satırlar `:8734-8867`
kaynaklı halka kayıtları, kişi değil). ⇒ Çare yalnız **tek alanı** (`kisiler.js:270`
`devlet`) ve paket kopyasını etkiler; harita, odak, kronoloji senkronu etkilenmez.

Edigü'yü METİNLE anan kronoloji maddeleri (id atfı değil, sadece bağlam):
`kronoloji_altinorda.js:239` (1399 Vorskla) · `:251` (1419 idarenin sonu) · `:257` (1420
ölüm) · `kronoloji_orta_asya.js:341` (1420-06-01 ölüm, `kurulus`) · `devletler.js:2263`
(`nogay` künyesinin kendi kronolojisinde 1420 maddesi).

### 1.2 `devletler.js` taraması (tahmin edilen id değil, tarama)
`id:` içinde `nogay|altinorda|altin-orda|mangit|kucuk-nogay|buyuk-nogay` ve `mangıt/nogay`
geçen künye satırları:
| id | satır | f → t |
|---|---|---|
| `altinorda` | `devletler.js:193` | **1242-01-01 → 1502-01-01** (Edigü'nün 1419/1420 ölümünü KAPSAR) |
| `nogay` | `devletler.js:2258` | **1440-01-01 → 1783-01-01** |
| `mangit` / Mangıt yurdu | — | **bulunamadı** (künye yok) |

Ek bulgu (aynı sınıftan): `nogay` künyesinin **kendi** `kronoloji` dizisinin ilk maddesi
`{ t:"1420-01-01", … "Mangıt beyi Edigü öldü" }` (`devletler.js:2263`) künye penceresinin
(1440) 20 yıl ÖNCESİNDE. Künyenin `ozet`i de "Edigü'nün **mirasından doğan**" diyor, yani
künye kendi metninde Edigü'yü kurucu değil ÖNCÜL sayıyor.

### 1.3 Kaynak (TDV)
`arama/?q=edigü` → 4 sonuç, hiçbiri Edigü maddesi değil (`barak-han--altin-orda`,
`sahib-giray`, `schiltberger-hans-johannes`, `baba-tukles`). `arama/?q=edige` → 13 eşleşme,
`altin-orda-hanligi`, `mangitlar`, `nogaylar`, `toktamis-han` vb. **TDV'de müstakil Edigü
maddesi yok** (bulunamadı), bilgi bu üç maddeden okundu (gövdeler gerçek içerik):

- **`nogaylar`**: "Cuci ulusunda söz sahibi beylerden biri olan Edige'nin (Edigü/İdigü)
  823'te (1420) ölümünden sonra oğulları Deştikıpçak'taki siyasî faaliyetler içinde yer
  almışlar…" · "…Mangıt boyundan **Altın Orda emîri** olan Edige'nin Nogay beylerinin
  **atası** sayıldığına…" → Edigü bir Altın Orda (Cuci ulusu) emiri, Nogayların atası.
  Cümle 1420'yi **ölüme** bağlıyor, kuruluşa değil. **Nogay Ordası'nın kuruluş tarihi
  bu maddede VERİLMİYOR** (bulunamadı).
- **`altin-orda-hanligi`**: "Edige Mirza yönetimi ele geçirerek 1419'a kadar devleti idare
  etti." → Altın Orda'nın fiilî idarecisi.
- **`mangitlar`**: "Emîr Edige sadece Mangıtlar'ın değil Altın Orda Hanlığı'nın tarihinde de
  çok etkili olmuş bir şahsiyettir." · "…Edige'nin (İdigu, **ö. 1419**)…" · "XV. yüzyıl
  ortalarında Mangıtlar, Edige'nin torunu Vakkas Bey'in yönetimi altında Ebülhayr Han'ın
  saltanatında önemli rol oynadılar." → ayrı bir siyasî yapı olarak kuruluş tarihi **yok**;
  "XV. yüzyıl ortası" Vakkas'ı tarihliyor, Nogay Ordası'nın kuruluşunu değil.

⚠️ **TDV kendi içinde çelişiyor (tuzak ⑥):** ölüm `nogaylar` 823/1420 · `mangitlar`
"ö. 1419". `altin-orda-hanligi` 1419'u **idarenin sonu** için veriyor (ölüm değil).
Atlas `t:"1420"` (`nogaylar`ın hicrî+milâdî açık cümlesi). Bildirilir, hüküm koordinatörde.
⚠️ `nogay` künyesinin `f:"1440-01-01"`ının TDV'de dayanağı **bulunamadı** (üç maddenin
hiçbiri 1440 demiyor). Bu ayrı bir kalem (künye günü kaynak değildir, §4/D210).

### 1.4 D205 sınıflandırması
| sınıf | uyuyor mu | gerekçe |
|---|---|---|
| ① devlet öldü → kısalt | ✗ | kısaltılacak bir dönem yok; sorun kişinin bağı |
| ② aynı polity sürüyor → künyeyi genişlet | ✗ | Edigü'nün polity'si `nogay` değil: TDV onu "Altın Orda emîri" ve Altın Orda'yı 1419'a kadar "idare eden" diye anıyor; Nogaylar onun **ölümünden sonra** oğulları üzerinden doğuyor. Künyeyi 1420'ye (ya da 1396'ya) genişletmek, Nogay Ordası'nı TDV'nin kurmadığı bir tarihte haritaya ve dizine sokmak olur |
| ③ ardıl yapı geçti → ardıl künye | **✓** | Nogay Ordası Altın Orda'nın ARDIL yapısı; Edigü ardıla değil **öncüle** (`altinorda`, 1242–1502) aittir. Ardıl künye zaten var (`nogay`); kişinin bağı öncüle dönmeli |

**Sınıf: ③. Çare önerisi (yazılmadı):** `kisiler.js:270` `devlet:"nogay"` → `devlet:"altinorda"`
(pencere 1242–1502 ölümü kapsar); `not` "Altın Orda emîri; Nogay beylerinin atası (Mangıt)"
gibi TDV'nin iki cümlesini taşır. Ardından `py arac/paketle.py yenile` (paket_12 kopyası).
Künye penceresi (`nogay` f:1440) bu çareyle **değişmez** — kapsam kararı istemez.
İkincil öneri: `devletler.js:2263` (nogay künye kronolojisinde 1420 maddesi) aynı sınıfta;
madde öncülün olayı, `altinorda` künye kronolojisine taşınması ya da "önce" bağlamı olarak
işaretlenmesi değerlendirilmeli (koordinatör, `devletler.js` sahibi).

---

## İŞ 2 · PL-7 mükerrer madde

### 2.1 Bugünkü sayı (`py arac/denetle.py`, `C:\atlas-w11`, `8552686e`)
```
Ek denetim  ✓  mükerrer madde: 112 şüpheli çift (beklenen ≤113 — BORÇ, hedef 0)
```
Çıkış kodu 2: tek sebep `Değişmez 8 ! ÖLÇÜLEMEDİ — devletler_harita.js YOK` (taze ağaç,
tuzak 2; bulgu değil). **Mükerrer: 112 · tavan (`BEKLENEN_MUKERRER`, `denetle.py`) 113.**
Tasnifteki "112 → 115 (tavan 113)" bugün geçerli değil: Polonya çiftleri zaten
`BILINEN_AYRI`ya girmiş (`denetle.py:3442-3467`, "KASA-POLONYA-1005" başlıklı blok, **3 çift**).

### 2.2 `BILINEN_AYRI` BOŞKEN (ek şart · geçici ağaçta, dosya değişmedi)
Yöntem: `denetle.main()` koşturuldu, `mukerrer_maddeler`in aldığı evren (2187 madde) yakalandı,
aynı işlev `BILINEN_AYRI` dolu ve boş iki kez çağrıldı (`başlık` + `kişi!` = kesin kademe).
```
evren 2187 madde · BILINEN_AYRI 60 çift
dolu: 112 · BOŞ: 165   (+53 = listenin bastırdığı çiftler; 60 girdi − 53 = 7 fark ölü kural OLABİLİR — ÇIKARIM, girdi girdi ölçülmedi)
```
Polonya maddeleri, BOŞ listede öten çiftler:
| # | çift | dosya:satır | J | ölçüt | BOŞ'ta öter | dolu'da |
|---|---|---|---|---|---|---|
| 1 | 1914-08-12 "Piłsudski'nin strzelcy birlikleri Kielce'ye girdi" ↔ 1914-08-19 "Polonya birlikleri Kielce'ye yeniden girdi" | `kronoloji_sinir_polonya_1915.js:10` ↔ `:12` | 0,429 | başlık | ✓ | susturulmuş (`BILINEN_AYRI`) |
| 2 | 1914-09-30 "Alman ordusu Kielce'yi aldı" ↔ 1914-12-06 "Alman ordusu Łódź'u aldı" | `:14` ↔ `:16` | 0,600 | başlık | ✓ | susturulmuş |
| 3 | 1915-07-01 "Mackensen'in birlikleri Zamość'u aldı" ↔ 1915-07-01 "Radom Avusturya birliklerince işgal edildi (Temmuz 1915)" | `:18` ↔ `:19` | 0,111 | **kişi!birlik** | ✓ | susturulmuş |
| 4 | 1914-08-12 "Piłsudski'nin … Kielce'ye girdi" ↔ 1914-08-13 "Ruslar Kielce'yi geri aldı" | `:10` ↔ `:11` | **0,125** | — | **✗** | — |

**4. çift DOĞRULANDI (W7 ölçümü değişmedi):** BOŞ listede bile ötmüyor. J = 0,125 < 0,34
(`MUKERRER_ESIK`); fark 1 gün ≤ 3 ama ortak "kişi" kümesi boş (`kisiler` alanı yok,
başlıkta ortak 4+ harfli kelime yalnız "kielce", o da yalnız `_kelimeler`de). ⇒ KASA'nın
"4 çift" sayımında 4. çift ölçüt dışı; `BILINEN_AYRI`ya yazılması **ölü kural** olur
(`denetle.py:3449` yorumunun ölçümüyle aynı).

### 2.3 Her çift: ayrı olay mı? (tarih · yer · metin · kaynak)
| # | tarih | `yer_id` | fail (`devlet`) | kaynak | sınıf |
|---|---|---|---|---|---|
| 1 | 08-12 ↔ 08-19 (7 gün) | Kielce = Kielce | avusturya = avusturya | aynı (Kosińska–Kosiński) | **AYRI**: arada 08-13 Rus geri alışı (`:11`) var; iki ayrı giriş |
| 2 | 09-30 ↔ 12-06 (67 gün) | Kielce ≠ Łódź | almanya = almanya | farklı | **AYRI**: ayrı şehir |
| 3 | 07-01 ↔ 07-01 | Zamość ≠ Radom (Polonya) | almanya ≠ avusturya | farklı | **AYRI**: ayrı şehir, ayrı işgalci |
| 4 | 08-12 ↔ 08-13 | Kielce = Kielce | avusturya ≠ rusya | aynı | **AYRI** (ters yön) — ama ölçüt zaten ötmüyor |

Gerçek mükerrer: **0.**

### 2.4 Öneriler (yazılmadı, `denetle.py` koordinatörün)
1. **`BILINEN_AYRI`ya ekleme gerekmiyor:** 1-3 zaten içeride ve gerçekten ayrı; 4 eklenmemeli
   (ölü kural).
2. **Tavan:** sayı 112, tavan 113 ⇒ tavan bir kademe aşağıda değil (`denetle.py:6131` "tavan aşağı
   da takip edilir" ilkesi). 113 → **112**'ye indirilmesi önerilir; yoksa yarın doğacak bir
   gerçek mükerrer "113 ≤ 113" diye geçer.
3. **Ölçüt kusuru (çift 3):** `_kisiler_kumesi` `kisiler` alanı boşken başlık kelimelerini
   "kişi" sayıyor (`denetle.py:3860-3875`); "birlikleri"/"birliklerince" → `birlik` ortak kişi
   olarak okunup aynı gün + J 0,111 ≥ `KESIN_JACCARD` 0,10 ile **kesin** kademe veriyor.
   İşgal kronolojisinde "birlik/ordu/kuvvet" kalıbı sistematik → aile büyür. Çare adayı:
   `kisiler` alanı yokken başlıktan kişi türetmeyi kapatmak ya da genel askerî kelimeleri
   (`birlik`, `ordusu`, `kuvvet`) dışlama kümesine almak. **İki yönde sınanmadan** uygulanmamalı.
4. Dolu–boş farkı 53, liste 60 girdi: 7'lik fark ölü kural OLABİLİR (çıkarım; bir girdi
   kesin olmayan kademeyi de bastırabilir). Girdi girdi ölçüm ayrı kalem önerisi.

---

## Ne bulamadım
- TDV'de müstakil Edigü maddesi (yok; 3 madde üzerinden okundu).
- TDV'de Nogay Ordası'nın kuruluş yılı (`nogaylar`, `mangitlar`, `altin-orda-hanligi` vermiyor)
  ⇒ `nogay` künyesi `f:1440`ın kaynağı **bulunamadı**.
- `kisiler.js` `devlet` alanının uygulamada tüketicisi (bulunamadı; harita/odak etkisi yok).

Ağaç temiz (`git status` boş), commit yok. Geçici betik scratchpad'de.

# LAB-KONUM-ONERI-1010-v3 · koordinat düzeltme önerisi (revizyon v3b)

## 🔁 REVİZYON v3b (10 Ekim, koordinatör kararları)

1. **Balasagun v3.diff'ten ÇIKTI.** Önceki v3'teki Balasagun maddesi (kalem 10, karar ⑥, "Ak-Beşim'e taşı") **bu revizyonla GEÇERSİZDİR.** Gerekçe (HUKUM §6.5): tanık iki ayrı soru için çağrılır. ① **Kimlik** (hangi nesne): TDV "Ak-Peşin harabelerinin bulunduğu yerde" der, yani Ak-Beşim. Bu sağlam. ② **Koordinat**: TGN 8711887 tek tanık, hata dağılımı ölçülmedi. Bu zayıf. 6,02 km'lik taşıma ②'den gelir, bu yüzden §6.1'in ≥5 km eşiği ona da uygulanır ve ikinci tanık gerekir. LAB ikinci tanığı aradı: Pleiades tam dökümünde ve al-Ṯurayyā'da Ak-Beşim/Suyab için **kayıt yok.** Aranan terimler: suyab, ak-beshim, beshim, besim, balasag, burana, navekat, tokmak. Çıkan eşleşmeler ilgisiz; Pleiades 884869 "Balasagan" Kafkasya'daki Balasakan'dır (geç antik, koordinatsız). ⇒ İkinci tanık **ÖLÇÜLEMEDİ** ⇒ nokta **yerinde kalır.** Çelişki yine de `not:`'ta beyan edilir. Beyan taşımanın şartı değildir; taşımadan bağımsız bir borçtur.
   - `LAB-KONUM-ONERI-1010-v3-balasagun-not.diff`: **yalnız** `not:` satırı, koordinat değişmez. **Uygulanacak.**
   - `LAB-KONUM-ONERI-1010-v3-balasagun-tasima-BEKLER.diff`: taşıma + `not:`. **PARK: ikinci tanık bulunursa** uygulanır. `not:` içinde `[İKİNCİ TANIK BURAYA …]` yer tutucusu var; o doldurulmadan uygulanmaz. balasagun-not.diff ile **birbirini dışlar**, çünkü ikisi de aynı satıra dokunuyor.
2. **v3.diff yeniden üretildi:** 9 TAŞIMA (7 v1 + Pantelerya + Van). 4 dosya, 10 satır. `v3.json` buna göre güncellendi.
3. **İKAME diff'i:** bölme günleri (Kandehar 1738-03-24, Angkor 1431-01-01) kaydın kendi sınırından alındı, kaynakla teyit edilmedi (§4: "künyenin `f:`/`t:` günü bir KAYNAK DEĞİLDİR"). Bu, bölme sınırındaki iki `s:` künyesinin **`kaynak:`** alanına yazıldı: eski kaydın son künyesi (`t:`) ve modern kaydın ilk künyesi (`f:`). `yerlesimler_asya.js`'in yerleşik geleneği budur: kaynak künyede durur, kayıt düzeyinde `kaynak:` yoktur. Yazılan metin: *"bölme günü kaydın kendi sınırından, kaynakla teyit edilmedi"*. **Yeni alan açılmadı.** Aynı beyan `not:` metinlerinden çıkarıldı, böylece tek yerde duruyor. Angkor için "yalnız YIL" ayrıca yazıldı. `kesinlik:` eklenmedi, çünkü §4'e göre bu alan yanlış günü tek başına düzeltmez.
4. **İniş sırasına iki iniş sonrası adım eklendi** (ⓐ ⓑ, aşağıda).

> **Taban (v3b):** `origin/main` @ `9e9e5abe8ae7524c60a70b921e1bbfe79e4406fe`. `1896b8ecd..9e9e5abe8` arasında `data/` değişmedi (`git diff --stat` boş), bu yüzden aşağıdaki satır numaraları geçerli. Doğrulama ayrık worktree `C:tlas-v3b`'de yapıldı; worktree iş sonunda kaldırıldı.

| sınav (taban 9e9e5abe8) | sonuç |
|---|---|
| v3 tek başına | **GEÇTİ** |
| v3-ikame tek başına | **GEÇTİ** |
| v3-balasagun-not tek başına | **GEÇTİ** |
| v3-balasagun-tasima-BEKLER tek başına | **GEÇTİ** |
| yığın v3 → ikame → balasagun-not (her adımda `--check`, sonra apply) | **GEÇTİ** |
| BEKLER, balasagun-not uygulandıktan sonra | uymaz. Beklenen sonuç: iki diff birbirini dışlıyor |
| node v22.17.1 ayrıştırma, yığın sonrası değişen 5 dosya | **OK**. Balasagun 42.76/75.24'te kaldı ve `not:` taşıyor |

*Aşağıdaki v3 metni tarihçe olarak duruyor. Çelişki olan yerde yukarıdaki v3b bölümü geçerlidir.*

---

> **Yalnız öneri.** Hiçbir gerçek checkout'un `data/` klasörüne yazılmadı. Commit ve push yapılmadı. `paketle.py` ve değişmez kontrolleri ÇALIŞTIRILMADI (KOŞU 22 boyunca `data/` donduruldu).
> **Taban:** `origin/main` @ `1896b8ecd38f9561f8dc49e955cf878178fee20d`. `46ebbc3c6..1896b8ecd` arasında `data/` hiç değişmedi (`git diff --stat` boş), bu yüzden satır numaraları v2 ile aynı.
> **Doğrulama:** ayrık worktree `C:\atlas-v3` (iş sonunda kaldırıldı).

## ⛔ v2'nin YERİNE GEÇER

Aşağıdaki dosyalar **artık geçersiz.** Silinmedi, yalnız tarihçe için duruyor. Uygulamayın:

- `LAB-KONUM-ONERI-1010-v2.json`
- `LAB-KONUM-ONERI-1010-v2.diff`
- `LAB-KONUM-ONERI-1010-v2-tasima-secenegi.diff`
- `LAB-KONUM-ONERI-1010-v2-ikame-secenegi.diff`
- `LAB-KONUM-ADAY-1010-pantelerya.diff`

Bunlardaki içerik koordinatör kararlarına göre aşağıdaki iki diff'e toplandı. v1 dosyaları (`LAB-KONUM-ONERI-1010.diff/.json`) zaten v2'yle geçersiz olmuştu.

## Ürünler

| dosya | içerik | kalem |
|---|---|---|
| `LAB-KONUM-ONERI-1010-v3.diff` | TAŞIMA. ~~5 dosya, 11 satır, 10 kalem~~ → **v3b: 4 dosya, 10 satır** | **9** |
| `LAB-KONUM-ONERI-1010-v3-balasagun-not.diff` | v3b: yalnız `not:` satırı | 1 |
| `LAB-KONUM-ONERI-1010-v3-balasagun-tasima-BEKLER.diff` | v3b: PARK, ikinci tanık bulunursa | (1) |
| `LAB-KONUM-ONERI-1010-v3-ikame.diff` | İKAME. Yalnız `data/yerlesimler_asya.js` | **2** |
| `LAB-KONUM-ONERI-1010-v3.json` | iki diff'in makine okunur dökümü | 10 + 2 |

## `git apply --check` (taban 1896b8ecd)

| sınav | sonuç |
|---|---|
| v3 tek başına | **GEÇTİ** |
| v3-ikame tek başına | **GEÇTİ** |
| v3 uygulandı → v3-ikame `--check` → uygulandı | **GEÇTİ** |
| ters sıra: v3-ikame uygulandı → v3 `--check` | **GEÇTİ** |

İki diff aynı dosyada çakışmıyor. v3 `yerlesimler_asya.js`'te yalnız 2430. satıra (Turfan) dokunuyor; İKAME hunk'ları 561-575 ve 3285-3297 aralığında.

**node ayrıştırma** (node v22.17.1): iki diff birlikte uygulandıktan sonra değişen 5 dosya `new Function('window', …)` ile çalıştırıldı. Sonuç: `sehirler.js`, `yerlesimler.js`, `yerlesimler_asya.js`, `yerlesimler_h2_kuzeyafrika.js` ve `yerlesimler_ortaasya3.js` **OK**.

Ayrıştırılan değerler okundu:
- Van 38.5019/43.3401. `sehirler.js` Van da aynı değeri taşıyor.
- Pantelerya 36.8315/11.945.
- Balasagun 42.805/75.199.
- Kandehar (Eski Şehir) `bit` 1738-03-24. Kandehar `kur` 1738-03-24, `s` afsar ile başlıyor.
- Angkor Thom `bit` 1431. Angkor (Siem Reap) `kur` 1431, `s` kamboc-kralligi ile başlıyor.

## Tablo 1 · v3.diff (TAŞIMA; v3b'de 9 kalem, 10. kalem çıktı)

| # | ad | dosya:satır | eski | yeni | tanıklar (yeni noktaya km) | km | karar |
|---|---|---|---|---|---|---|---|
| 1 | Merv (Mari) | `yerlesimler.js:2274` | 37.5936, 61.8333 | 37.6767, 62.1620 | Pleiades 990688484 Sultan Kala 0,00 · TGN 7012244 3,11 · Ṯ MARW 5,15 | 30,42 | v1 |
| 2 | Turfan | `yerlesimler_asya.js:2430` | 42.9510, 89.1900 | 42.8550, 89.5286 | Pleiades 999273476 Gaochang 0,01 · TGN 6003062 0,34 | 29,61 | v1 |
| 3 | Maskat | `yerlesimler.js:1042` | 23.588, 58.408 | 23.6147, 58.5938 | TGN 7018048 4,04 · Ṯ MASQAT 9,01 · GeoNames 11669735 Old Muscat (konumlandırıcı) 0,00 | 19,18 | v1 |
| 4 | Tâif | `yerlesimler.js:1463` | 21.437, 40.513 | 21.2700, 40.4160 | Pleiades 869702585 0,00 · TGN 1084782 0,37 · GeoNames 107968 0,04 · Ṯ 6,07 | 21,14 | v1 |
| 5 | Hürmüz Adası | `yerlesimler.js:1712` | 26.861, 56.366 | 27.0673, 56.4603 | Pleiades 30251 0,00 · TGN 8891531 0,49 · TGN 7017464 4,67 | 24,80 | v1 |
| 6 | Silifke | `yerlesimler.js:215` | 36.309, 33.938 | 36.3793, 33.9215 | Pleiades 648771 Seleucia 0,00 · GeoNames 300808 1,17 | 7,96 | v1 |
| 7 | Tırgan (Traghan) | `yerlesimler_h2_kuzeyafrika.js:457` | 26.130, 14.470 | 25.9610, 14.4339 | Pleiades 354161 Traghen 0,00 · GeoNames 2210242 4,4 | 19,16 | v1 |
| 8 | Pantelerya | `yerlesimler.js:1696` | 36.792, 11.990 | 36.8315, 11.9450 | Pleiades 462167 Cossyra (eskiye 5,94) · TGN 1045872 (eskiye 5,81; Pleiades'e 0,49) | 5,94 | **④** |
| 9 | Van | `yerlesimler.js:246` **+** `sehirler.js:190` | 38.502, 43.393 | 38.5019, 43.3401 | Pleiades 964673805 Van Fortress (eskiye 4,60) · Pleiades 874771 Tušpa (eskiye 4,74). TGN 7695076 yanlış nesne, sayılmadı | 4,60 | **①** |
| ~~10~~ | ~~Balasagun (Ak-Beşim)~~ **v3b: ÇIKTI, yalnız not:** | `yerlesimler_ortaasya3.js:131` (+ yeni `not:` satırı) | 42.7600, 75.2400 | 42.805, 75.199 | TGN 8711887 Ak-Beshim 0,00 · TDV `balasagun` metin tanığı ("Ak-Peşin harabelerinin bulunduğu yerde"). Karşı tanık: TGN 8724271 Burana / 8711886 Balasagun, eskiye 1,69, yeniye 7,68 | 6,02 | **⑥** |

**Kalem 9 (Van).**
- `tur:"kale"`, aynı kaya: bu bir koordinat hatası, zamana bağlı bir durum değil.
- Kayıt **bölünmedi.**
- `sehirler.js:190` aynı commit'te taşındı. İki dosya tutarlı kalıyor.

**Kalem 10 (Balasagun).** ⛔ **GEÇERSİZ (v3b ile değişti):** taşıma yapılmıyor, yalnız `not:` ekleniyor. Bkz. en üstteki REVİZYON v3b bölümü. Aşağıdaki metin tarihçe olarak duruyor.
- Ad **değişmedi.** "Balasagun (Burana)" yapılmadı. `paket_12.js` içindeki `odak_yer` referansları bu yüzden bozulmuyor.
- Koordinat TGN'nin 3 haneli değeri. Yapay 4. hane eklenmedi.
- `not:` alanı **yeni bir alan değil.** `yerlesimler.js`'te 18 kayıtta (Kars, Ardahan …), `yerlesimler_afrika.js`'te 44 kayıtta kullanılıyor. v2 İKAME taslağı da kullanıyordu. `VERI-YAPISI.md`'nin alan tablosunda yazılı değil, ama veride yerleşik.
- Kayıtta daha önce `not:` yoktu. Eklenen metin:

  > KONUM ÇELİŞKİSİ (iki rakip özdeşleştirme): TDV `balasagun` Balasagun'un 'bugünkü Ak-Peşin harabelerinin bulunduğu yerde kurulmuş olduğu kabul edilmektedir' der; TGN ise Balasagun'u (8711886) Burana ile (8724271, aynı koordinat) özdeşleştirir ve Ak-Beşim'i (8711887) Suyab sayar. Nokta TDV'ye göre (CLAUDE.md §4 birincil) Ak-Beşim'e, TGN 8711887 42.805/75.199'a taşındı; eski nokta 42.7600/75.2400 Burana'daydı (6,02 km). Ak-Beşim tek tanıklı (TGN, 3 hane) · LAB-KONUM-ONERI-1010-v3 ⑥

- ⚠️ Ak-Beşim'in tek tanığı TGN. Hata dağılımı ölçülmedi. Karar mesafeyle değil, §4 (TDV birincil) ile verildi.

## Tablo 2 · v3-ikame.diff (İKAME, 2 kalem)

| # | ad | dosya:satır | eski | yeni (eski dönem kaydı) | tanıklar (eskiye km) | km | bölme günü | karar |
|---|---|---|---|---|---|---|---|---|
| 11 | Kandehar | `yerlesimler_asya.js:564` | 31.6100, 65.7100 | **"Kandehar (Eski Şehir)"** 31.6026, 65.6589 · `bit:"1738-03-24"` · `s:` 1281→1738-03-24 | Pleiades 630721027 Old Kandahar citadel 4,91 · Pleiades 59669 4,87. TGN 7002248 modern şehir 0,98 | 4,91 | **1738-03-24** | **②** |
| 12 | Angkor (Siem Reap) | `yerlesimler_asya.js:3288` | 13.4120, 103.8670 | **"Angkor Thom (Yaşodharapura)"** 13.4413, 103.8590 · `k:1` · `bit:"1431-01-01"` · `s:` 1281→1431 angkor-kmer | Pleiades 364279264 Angkor Thom 3,37 · TGN 7004075 Prasat Angkor Thom 3,30 | 3,37 | **1431-01-01** | **③** |

**Kalem 11.** Modern "Kandehar" 31.6100/65.7100'de kalıyor. `kur:"1738-03-24"` ekleniyor ve `s:` afsar 1738→1747 ile başlıyor.

**Kalem 12.**
- Mevcut kayıt Angkor Wat'ta kalıyor (Pleiades 835369289 / TGN 6000279, 0,06 km). `kur:"1431-01-01"` ekleniyor.
- `kd` mevcut kayıttan kaldırılıyor. Başkentlik `k:1` olarak yeni kayda geçiyor.
- İki nokta 3,37 km arayla duruyor ve zamanda çakışmıyorlar.

### ⚠️ Bölme günleri kaynakla teyit EDİLMEDİ

İki gün de kaydın **kendi** sınırından alındı:
- **Kandehar 1738-03-24:** kaydın galzay→afsar sınırı, yani Nâdir Şah'ın fethi. Eski şehrin yıkım günü kaynakla teyit edilmedi. 1738–1761 arasındaki Nâdirâbâd üçüncü bir yerdir ve tanığı yok; bu taslakta modern noktaya bırakıldı.
- **Angkor 1431-01-01:** kaydın `kd` ve angkor-kmer sınırı. Pleiades "abandoned by 1609" diyor. Terk günü kaynakla teyit edilmedi.

### İKAME için henüz BAĞLANMAMIŞ ad referansları (1896b8ecd'de yeniden ölçüldü)

Yöntem: `data/ js/ arac/` altındaki `*.js|*.json|*.py` dosyalarında tam adın tırnak içindeki geçişleri sayıldı. Üretilmiş `data/paket_NN.js` dosyaları ve kaydın kendisi sayılmadı.

**Kandehar (`"Kandehar"`): 12 dosya, 20 satır.** Önceki ölçümle aynı. 1738 öncesini anlatanlar `yer_id`/`ad` ile eski kayda bağlanmalı:

| dosya:satır | alan | dönem | bağlanmalı mı |
|---|---|---|---|
| `kademe_4ff22b.js:56` | `ad` (k:2, Zünnûn Argun merkezliği) | 16. yy + 1839 | ⚠️ ikisi de geçerli. Kademe hangi kayda gider, karar gerekir |
| `devletler.js:2196` | galzay `baskent:"Kandehar"` | 1709–1738 | evet (eski şehir) |
| `kaynakli_halka_kronoloji.js:65` · `:81` | `yer` | 1622 · 1545 | evet |
| `kronoloji_hindistan.js:294` | `yer_id` | 1622 | evet |
| `kronoloji_iran.js:215` · `:439` · `:457` | `yer_id` | 1709 · 1649 · 1738-03-24 | evet · evet · sınır günü (fetih eski şehirde) |
| `kronoloji_safevi.js:150` · `:182` · `:350` · `:398` | `yer_id` | 1545 · 1595 · 1649 · 1719 | evet |
| `yer_yama.js:620` · `:627` · `:628` | `yer_id` (kronoloji_iran yaması) | 1709 · 1649 · 1738 | evet |
| `yer_yama_hayalet.js:2426` | `yerlesim` | 1709–1747 | uygulanmış tarihçe; s: zaten iki kayda bölündü |
| `yer_yama_1923_1945.js:1575` | `ad` + 1281'den başlayan tam `s:` | — | 🔴 KARANTİNADA (dosya başlığı "AKTIVE EDILMEZ"). Etkinleştirilirse 1281–1738 zincirini modern kayda GERİ YAZAR |
| `kronoloji_cok_1923_1945.js:928` | `yer`/`yer_id` | 1929 | hayır (modern) |
| `kronoloji_sinir_asya.js:78` | `odak_yer` | 1893 | hayır (modern) |
| `donemler_on.js:14` | PETEKLER `a` | üretilmiş | yenile ile gelir |

**Angkor: 6 dosya, 9 satır.**
- Önceki ölçüm 5 dosya, 8 satırdı.
- Fark `devletler.js:6014` `baskent:"Angkor (Yasodharapura)"` satırı. Bu serbest metin; kayıt adına eşleşmiyor, ama eski kayıt adı "Angkor Thom (Yaşodharapura)" ile uyumlu hâle getirilebilir.
- Ölçülen desen: `"Angkor (Siem Reap)"`, `"Angkor (Yasodharapura)"`, `yer:"Angkor"`.

| dosya:satır | alan | dönem | bağlanmalı mı |
|---|---|---|---|
| `kademe_f5c9a5.js:81` | `ad` + `kd:[1281–1431 k:1 m:"Angkor (Siem Reap)"]` | 1281–1431 | 🔴 **evet.** İKAME `kd`'yi kayıttan kaldırıyor; bu kademe yaması onu geri yazabilir. Yeni kayda taşınmalı |
| `kronoloji_cok_once1281_dogu_asya.js:399` · `:405` · `:418` | `yer_id:"Angkor (Siem Reap)"` | 1010 · 1113 · 1177 | evet (Yaşodharapura; 1281 öncesi, ama nesne eski başkent) |
| `devletler.js:6014` | angkor-kmer `baskent:"Angkor (Yasodharapura)"` | 802–1431 | serbest metin. İsteğe bağlı ad uyumu |
| `kronoloji_sinir_asya.js:90` · `:92` | `odak_yer` | 1904 · 1907 | hayır (modern kayıt doğru) |
| `yer_yama_1923_1945.js:7729` | `ad` + 1281'den başlayan tam `s:` | — | 🔴 KARANTİNADA. Kandehar'la aynı risk |
| `donemler_on.js:14` | PETEKLER `a` | üretilmiş | yenile ile gelir |

Bu bağlamaların hiçbiri v3-ikame.diff'te **yapılmadı.** Bağlama ayrı bir iştir.

## Değişmeyenler

- **Şiraz**: ⑦, değişiklik yok.
- **Erciş · İmroz · Ayamavra**: ⑧, değişiklik yok.
- **Kusayr** (`yerlesimler_afrika.js:308`, v1'den karar bekleyen): koordinatör kararlarında yer almıyor, v3'e **girmedi.** `LAB-KONUM-ONERI-1010-kusayr-secenekA.diff` hâlâ karar bekliyor.

## İniş sırası

1. `git apply denetim/LAB-KONUM-ONERI-1010-v3.diff` (v3b: 9 kalem)
2. `git apply denetim/LAB-KONUM-ONERI-1010-v3-ikame.diff`
3. `git apply denetim/LAB-KONUM-ONERI-1010-v3-balasagun-not.diff` (v3b). `…-tasima-BEKLER.diff` **uygulanmaz.**
4. **ⓐ (v3b, iniş sonrası, commit'ten ÖNCE):** `kademe_f5c9a5.js:81` yeniden ölçülür. Bu kademe yaması `ad:"Angkor (Siem Reap)"` ile `kd:[{f:"1281-01-01",t:"1431-01-01",k:1,…}]` taşıyor. İKAME bu `kd`'yi modern kayıttan kaldırıyor, ama yama onu modern kayda geri yazabilir. Geri yazıyorsa düzeltme **aynı diff/commit'te** yapılır (§3.4②): ya yama yeni "Angkor Thom (Yaşodharapura)" kaydına bağlanır, ya `kd` oradan kaldırılır. Sonraki bir commit'e bırakılmaz.
5. **ⓑ (v3b, karantina şerhi):** karantinadaki `yer_yama_1923_1945.js` iki kayıt için de (`:1575` Kandehar, `:7729` Angkor) 1281'den başlayan tam `s:` zinciri taşıyor. Etkinleştirilirse iki zinciri de modern kayda geri yazar ve İKAME'yi sessizce geri alır. ⇒ Dosya karantinadan çıkmadan önce bu iki kayıt **adıyla** denetlenmeli. Karantina listesine bu yönde bir şerh düşülmesi önerilir. **LAB karantina listesini düzenlemez; bu koordinatörün kalemidir.**
6. `py arac/paketle.py yenile`
7. sına (değişmez kontrolleri)

İsteğe göre 1 ve 2 ayrı commit olabilir. Her biri kendi başına da uygulanabiliyor.

**Bağlanmamış ad referansları (v3b'de AYNEN korunuyor, ADIYLA):** İKAME'den sonra aşağıdaki referanslar hâlâ eski adlara bakıyor. Koşu sonrası paket kayması bunlardan sürpriz çıkmasın diye adlarıyla burada tekrarlanıyor. Tam tablolar yukarıda.
- **Kandehar: 12 dosya, 20 satır.** `kademe_4ff22b.js:56` · `devletler.js:2196` · `kaynakli_halka_kronoloji.js:65,81` · `kronoloji_hindistan.js:294` · `kronoloji_iran.js:215,439,457` · `kronoloji_safevi.js:150,182,350,398` · `yer_yama.js:620,627,628` · `yer_yama_hayalet.js:2426` · `yer_yama_1923_1945.js:1575` (karantina) · `kronoloji_cok_1923_1945.js:928` · `kronoloji_sinir_asya.js:78` · `donemler_on.js:14`
- **Angkor: 6 dosya, 9 satır.** `kademe_f5c9a5.js:81` (ⓐ) · `kronoloji_cok_once1281_dogu_asya.js:399,405,418` · `devletler.js:6014` serbest metin `baskent:"Angkor (Yasodharapura)"` · `kronoloji_sinir_asya.js:90,92` · `yer_yama_1923_1945.js:7729` (karantina, ⓑ) · `donemler_on.js:14`

**`yenile`'nin getireceği paket kayması:** `yenile`, bu diff'lerin `paket_NN.js` yansımasının yanında, tabanda zaten var olan paket kaymasını da getirecek. Örnekler: `paket_13.js:1701` Pantelerya'nın eski değeri, `paket_22.js:960` Balasagun. v3b'de Balasagun'un koordinatı değişmiyor; bu satırda yalnız tabandaki kayma görülecek; paketleyici `not:`'u taşıyorsa onun yansıması da gelecek. `paketle.py` bu koşuda çalıştırılmadığı ve `data/`ya yazılamadığı için kaymanın boyutu **koşu sonrası ölçülecek.**

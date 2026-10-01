# KASA-KUNYESIZ-1001 — Değişmez 2t'nin altındaki "1131 dönem KÜNYESİZ" satırı kapatıldı

*YAZICI KASA PC (DENETLEME rolü) · 1 Ekim 2026 · koordinatör görevi (YILDIRIM BAYEZIT). Yalnız ÖLÇÜM; `data/` dosyalarına dokunulmadı.*
Makine okur sürüm: `denetim/KASA-KUNYESIZ-1001.json`. Her kimlik için şu alanlar: dosyalar · alanlar · tarih aralığı · `devletler.js` tarama sonucu · tarihe göre çözüm.

## 0 · Öngörü — ölçümden ÖNCE yazıldı (§11)
`2026-10-01 16:30:27`, ölçüm başlamadan:

| Kova | Öngörü | Ölçüm |
|---|---|---|
| A — künye gerçekten eksik | 8 | **0** |
| B — künye var, yazım farklı | 10 | **22** (hepsi `harita:` takma adı) |
| C — kasıtlı/teknik kimlik | 5 | **1** (`__BOSLUK__`) |

**Öngörü TUTMADI.** Yazım ekseninin (D215 `aceh`) karışık bir dağılım üreteceğini sanmıştım. Ölçüm tek bir kök çıkardı: 23 kimliğin 22'si `harita:` boya anahtarı.

## 1 · Evren
- **Satırı üreten kod:** `arac/denetle.py` `degismez4()`, 2324-2331. satırlar. Ölçümde aynı işlev doğrudan çağrıldı: 4296 yerleşim → **1131 dönem / 23 kimlik**. Bu, `denetle.py`nin bastığı sayının birebir aynısı.
- **Ölçtüğü şey:** yalnız yerleşimlerin `s:[].d` alanı. Bu alanı `devletler.js`teki künyelerin yalnız **`id`** kümesiyle karşılaştırıyor (`_devletler_yukle`, 2105. satır: `{d["id"]: …}`).
- ⚠️ Görevdeki öteki alanlar (`v:` · `isg:` · `taraflar:`) bu satırın evreninde **yok**. Yine de sayıldılar:
  - `avusturya`: `isg:d` alanında 26 kullanım.
  - Kronoloji `taraflar` alanında bu 23 kimlikten hiçbiri geçmiyor.

## 2 · Sonuç — kök neden: denetim `harita:` takma adını görmüyor
`devletler.js` künyeleri iki anahtar taşır:
- **`id`:** künyenin kimliği.
- **`harita:`:** boya anahtarı. `renkler.py` `BOYALAR` ve yerleşim `s:d` alanı bu anahtarı kullanır.

Yerleşim verisi `s:d`'ye `harita:` anahtarını yazıyor. Bu, `CLAUDE.md §8`in istediği şey: `d:` `BOYALAR`'da olmalı. Ama `degismez4` yalnız `id` okuduğu için bu dönemleri "künyesiz" sayıyor.

- 📌 **Uygulama bu körlüğü 8 Ağustos'ta kapatmış:** `js/app.js` 60-75. satırlar (`_DEVLET_ADI[d.harita] = d.ad`). Kayıttaki cümle: *"Kimlik eşleşmesi soran her yer `id:` ∪ `harita:` okumalı."* `denetle.py degismez4` bu kuralın **dışında kalmış.**
- ⇒ Koordinatörün sorduğu **"tıklayınca boş kart" riski YOK.** Sayfa takma adı çözüyor. Körlük yalnız denetim aracında.

### Kimlikler (23)
| Kimlik | Dönem | Tarih aralığı | `harita:` → künye | Tarihe göre çözüm |
|---|---|---|---|---|
| avusturya | 245 (+ `isg:` 26) | 1281 → 1918-11-28 | habsburg | 245 tek künye |
| suleyman-celebi | 236 | 1402-07-28 → 1411-02-17 | fetret-suleyman | 236 tek |
| musa-celebi | 172 | 1410-02-13 → 1413-07-05 | fetret-musa | 172 tek |
| mehmed-celebi | 127 | 1402-07-28 → 1413-07-05 | fetret-mehmed | 127 tek |
| **`__BOSLUK__`** | **79** | 1281 → 1920-10-08 | — | **C: teknik.** `§3.5.1`in kasıtlı boşluk kimliği; `§1.5`'te beyanlı |
| isa-celebi | 59 | 1402-07-28 → 1403-09-01 | fetret-isa | 59 tek |
| sirbistan | 29 | 1281 → 1457 | sirbistan-nemanjic · sirp-despotlugu · sirbistan-prensligi · sirbistan-kralligi | **19 tek · 10 çoklu** (§3) |
| yemen | 29 | 1281 → 1923-10-29 | yemen-zeydi | 29 tek |
| ceneviz | 24 | 1281 → 1797-06-14 | cenova | 24 tek |
| bulgaristan | 22 | 1281 → 1396-10-01 | bulgar-carligi · bulgaristan-prensligi · bulgaristan-kralligi | 22 tek |
| sardinya | 21 | 1281 → 1861-03-17 | sardinya-piyemonte | 21 tek |
| suud | 19 | 1744 → 1818-09-09 | suud-birinci · suud-ikinci · suud-ucuncu · suudi-arabistan | 19 tek |
| sovalye | 16 | 1310-08-15 → 1798-06-12 | rodos-sovalyeleri | 16 tek |
| bosna | 15 | 1281 → 1482 | bosna-kralligi | 15 tek |
| hicaz | 15 | 1916-06-10 → 1923-10-29 | hicaz-kralligi | 15 tek |
| lusignan | 6 | 1281 → 1489-02-26 | kibris-krallik | 6 tek |
| milanoduka | 6 | 1281 → 1535-11-01 | milano-dukaligi | 6 tek |
| atinadukaligi | 4 | 1281 → 1456-06-04 | atina-dukaligi | 4 tek |
| arnavutluk | 2 | 1281 → 1478-06-16 | arnavutluk-iskenderbey (+2 modern) | 2 tek |
| kaffa | 2 | 1281 → 1897-10-01 | kaffa-kralligi | 2 tek |
| cimma | 1 | 1830 → 1923-10-29 | cimma-sultanligi | 1 tek |
| sidamo | 1 | 1281 → 1897 | sidamo-kralliklari | 1 tek |
| vollayta | 1 | 1281 → 1894 | vollayta-kralligi | 1 tek |

- **Ayrı tarama (D205, `devletler.js`'in tamamı):** 22 kimliğin her biri en az bir künyenin `harita:` alanında birebir geçiyor. 22'sinin hepsi `BOYALAR`'da da var.
- **`__BOSLUK__`:** hiçbir künyede ve `BOYALAR`'da yok. Bu tasarım gereği.
- **Yazım farkı (B'nin klasik biçimi):** yalnız `atinadukaligi` → `atina-dukaligi` ve `milanoduka` → `milano-dukaligi` normalleştirmede id'ye yakın. Bunlar da zaten `harita:` takma adı; ayrıca düzeltme gerektirmiyor.

## 3 · Tarihe göre çözüm: 1131 dönem
| | Dönem |
|---|---|
| Tek bir künyeye çözülüyor (künye penceresiyle ±400 gün tolerans içinde örtüşüyor) | **1042** |
| **Birden çok künyeye** çözülüyor | **10**, hepsi `sirbistan` |
| `__BOSLUK__` | 79 |

- **Sırbistan'ın 10 dönemi:** hepsi `1281 → 1427…1457` aralığında. Tek bir dönem, 1402'deki **Nemanjić → Sırp Despotluğu** ardıllığını kapsıyor (Priştine · Semendire · Belgrad · Yenipazar · Kragujevac · Çaçak · Podgorica · Yagodina · Alacahisar · Prizren).
  - Bu, `§3.5`in ③ sınıfı: ardıl yapı geçti, toprak dolu.
  - `harita:` tek boya verdiği için **harita doğru boyanıyor.** Ama künyeyi tek tek soran bir denetim için dönem bölünmeli ya da bilerek tek bırakılmalı. **Bu bir TARİH KARARI.**

## 4 · Takma ad çözülürse ömür denetimi (4c/4d) ne görür
Bu 1052 dönem bugün `degismez4`ün 4 · 4c · 4d · 4s sorularından **hiç geçmiyor.** `continue` ile künyesiz kovasına düşüyorlar. Takma ad çözülürse **YENİ** görünecek olanlar (aynı tolerans 400 gün; aynı ATLAS_BASI/SONU muafiyetleri):

| Değişmez | Yeni | Kalemler |
|---|---|---|
| 4c — devletin ölümünü aşıyor | **3** | `bosna` → bosna-kralligi (künye 1463-05-01): Foça → 1465 · Livno → 1469 · Herseknovi → 1482 |
| 4d — doğumundan önce başlıyor | **7** | `sardinya` → sardinya-piyemonte (künye 1720): Torino 1281… · Nice 1388… (3) · `arnavutluk` → arnavutluk-iskenderbey (1443): Akçahisar 1281… (2) · `kaffa` → kaffa-kralligi (1390): Bonga · Cimma 1281… (2) |
| 4s | 0 | — |
| 4 (hayalet: tamamen pencere dışı) | 0 | — |

🔴 **Uygulamadan önce:**
- `BEKLENEN_ONCE` (317) ve 4c tavanı (`BEKLENEN_ASAN` 124) bu 10 kalem kadar **artar.** Tavanı yükseltmeden düzeltme yapılırsa `denetle.py` ✗ verir.
- 4d'deki 7 kalem `§3.5`in *"künye DAR olabilir — çare çoğu zaman künyeyi GENİŞLETMEK"* uyarısının tam vakası:
  - `sardinya-piyemonte` 1720'de başlıyor, ama veri 1281'den beri "Sardinya" diyor ⇒ büyük olasılıkla `harita:"sardinya"` **iki ayrı polity'yi** (Aragon/İspanya dönemi Sardinya'sı ile Savoya Sardinya'sı) tek boyaya bağlıyor.
  - **Hüküm bende değil.**

## 5 · Öneri (hüküm koordinatörde; `arac/` ve `data/` bana kapalı)
1. **`degismez4`:** `K` sözlüğü `id ∪ harita:` ile kurulmalı. `harita:` birden çok künyeye işaret ediyorsa dönemin tarihine göre seçilmeli. `js/app.js:60-75`'in kuralı burada da geçerli.
   - `__BOSLUK__` künyesiz kovasından açıkça muaf tutulmalı; `§1.5`'te zaten ayrı satırda beyanlı.
   - ⇒ "ölçülemedi" satırı **1131 → 10 (sirbistan çoklu) + 0** olur.
2. Düzeltmeyle aynı commit'te 4c ve 4d tavanları ölçülen **+3 / +7** kadar beyanla yükseltilir. Ya da 10 kalem önce sınıflandırılır (`§3.5`: kısalt / genişlet / ardıl künye).
3. **`sirbistan`ın 10 dönemi** 1402 sınırında bölünür ya da bilerek tek bırakılır. Bu bir tarih kararı.

## 6 · Ölçülemeyen / beyan
- Koordinatörün güncellemek için verdiği `75662fc5` · `f07a6be9` commit'leri `origin`'de **YOK.** `git fetch` + ff merge `5920918d`'de durdu. Ölçüm bu HEAD üzerinde yapıldı. O iki commit `denetle.py`'yi değiştiriyorsa sayılar kayabilir.
- `girdi.yukle` bir şema uyarısı basıyor (`yerlesimler_ek29.js` Deyrülkamer `dogrulanmadi` alanı). Ölçümü etkilemiyor, not düşüldü.

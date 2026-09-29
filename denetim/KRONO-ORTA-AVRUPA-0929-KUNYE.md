# KRONO-ORTA-AVRUPA-0929 — KÜNYE ÖNERİLERİ

29 Eylül 2026. `data/devletler.js`e **DOKUNULMADI** (M-5416). Önerilerin kaynağı yanlarında yazılı.
Madde başına tam atıf tablosu: `denetim/KRONO-ORTA-AVRUPA-0929-ATIF.json`.

## K1 — `almanya` künyesi: şartnamedeki örnek bu künyede geçerli değil

`almanya` = "Kutsal Roma / Almanya", f `962-02-02`, t `1923-10-29`. **1618 Prag maddesini bu künyeye bağlamak 4c/4d'yi bozmaz**, çünkü madde pencere içindedir. Asıl sorun başka: künye üç ayrı yapıyı tek kayıtta topluyor (Kutsal Roma → Alman İmparatorluğu → Weimar). Arada **1806-08-06 → 1871-01-18** var ve o yıllarda "Almanya" adlı bir devlet yoktu. KUNYE-DUNYA `supheli_omur[18]` de aynı sınıfı (③) söylüyor.
Ölçüm: `kronoloji_almanya.js`te bu aralığa düşüp `devlet:"almanya"` taşıyan madde **0**. Dosyanın yazarı o dönemi zaten `brandenburg-prusya`, `alman-konfederasyonu`, `bavyera`, `hannover`, `baden` id'lerine dağıtmış. Yani künyenin anakronizmi bugün yalnız künyenin kendi maddelerinde ve haritada yaşıyor.
**Öneri (hüküm KUNYE-BIRLESTIR / koordinatör):**

| id önerisi | f → t | Dayanak |
|---|---|---|
| `kutsal-roma` (ya da `almanya` penceresi daraltılır) | 962 → **1806-08-06** | `kronoloji_habsburg.js` 1806-08-06 (Die Welt der Habsburger) |
| `alman-konfederasyonu` | **1815-06-08** → 1866-08-23 | `kronoloji_almanya.js` 1815-06-08 ve 1866-08-23 Prag Barışı (Blackbourn; sayfa bu oturumda okunmadı) |
| `kuzey-alman-konfederasyonu` | 1867 → 1871-01-18 | aynı dosya 1867-04-16 anayasa |
| `almanya` (Alman İmparatorluğu + Weimar) | **1871-01-18** → | aynı dosya |

Ren Konfederasyonu (1806-1813) boşluğu ayrıca düşünülmeli. Harita anahtarı (`harita:"almanya"`) ortak kalabilir.
📌 **Denetim notu:** `denetle.py _2s_kunye_adlari` taraf adı olarak künyenin `ad:` alanını kullanıyor. "Kutsal Roma / Almanya" adının ilk kelimesi "kutsal". ⇒ 1884 sonrası bir Alman maddesi, başlığında "Almanya" geçse bile `almanya` tarafını ANMIŞ SAYILMAZ. Ad ayrılırsa bu yan etki de düzelir.

## K2 — `kronoloji_almanya.js`in kullandığı künyesiz id'ler (M-5416 kural 3)

| id (dosyada) | madde | var olan künye | öneri |
|---|---|---|---|
| `brandenburg-prusya` | 47 | `prusya` (1701-01-18→1871-01-18) · `prusya-dukaligi` (1525-04-08→1701-01-18) | 1701 sonrası 42 madde → `prusya`; Königsberg'deki 2 madde → `prusya-dukaligi`; 1415/1640/1672/1685 Brandenburg maddeleri (4) → `almanya` + **`brandenburg`** (künye öneri: Brandenburg Elektörlüğü, 1415-04-30 Hohenzollern devri → 1701-01-18) |
| `saksonya` | 10 | yok | `almanya` + `saksonya` (Saksonya Elektörlüğü / Krallığı) |
| `pfalz` | 4 | yok | `almanya` + `pfalz` |
| `hansa` | 4 | — | `almanya` (Hansa bir devlet değil, ticaret birliği) |
| `alman-konfederasyonu` | 4 | yok | K1 |
| `teuton-sovalyeleri` | 2 | yok (`prusya-dukaligi` ardıl) | 1410 Grunwald → `teuton-sovalyeleri` (künye öneri: Cermen Şövalyeleri devleti → 1525-04-08). 1525 maddesi → `prusya-dukaligi` |
| `hannover` | 2 | yok | 1714 → `almanya`+`hannover`; 1837 → `hannover` |
| `wurttemberg` · `baden` | 1 + 1 | yok | künye öneri |
| `dini-elektorlukler` | 1 | — | `almanya` |
| `bavyera` | 3 | `bavyera` ✓ | — |

**Sonuç (ATIF.json'da ölçüldü):** atıf uygulanırsa dosya COK_ yoluna geçtiğinde 132 maddenin 125'i görünür kalır, **7'si künye açılana kadar görünmez**: alman-konfederasyonu 4, teuton 1, hannover 1, baden 1. Bugün hepsi `almanya` altında görünüyor. ⇒ Künyeler açılmadan COK_ geçişi 7 madde kaybettirir.

## K3 — `kronoloji_macaristan.js` (atıf dosyaya YAZILDI, global değişmedi)

| künye | madde | not |
|---|---|---|
| `macaristan` | 43 (+1 geçiş günü) | 1526-08-29'a kadar |
| `macaristan-habsburg` | 68 (+3 ortak) | bugün bu künyenin panelinde yalnız 7 kendi maddesi + 3 dış madde görünüyor (KUNYE-DUNYA `sitede_gorunen: 10`) |
| `erdel` | 8 (+1 `habsburg` ile ortak) | KRONO-TUNA-0929 ile iş bölümü M-5434 |
| `orta-macar-kralligi` | 2 | Tököli |
| `macaristan-naiplik` | 1 ortak (1918-11-16) | |
| **`dogu-macar-kralligi`** | **2 (künyesiz)** | Szapolyai'nin krallığı 1526-11-10 → 1540/1541. KUNYE-DUNYA `eksik[0]` bunu `erdel` genişletmesi olarak da tartışıyor, ama TUNA'nın genişletme önerisi 1541'den başlıyor. **1526-1540 arası iki önerinin de dışında kalıyor.** |

## K4 — Gün düzeltmeleri (künye kronolojisi · kaynaklar DUZELTME.md B1'de)

- `habsburg` **f: 1282-01-01 → 1282-12-27.** Künyenin günü yıl başı damgası. Staatsarchiv AUR 1792 (sayfa okundu) belehnung günü 27.12.1282.
- `erdel` 1690-12-04 Diploma → 1691-12-04 ya da 1690-10-16 · 1711-04-30 → 1711-04-29
- `almanya` 1918-11-11 cumhuriyet → 1918-11-09
- `macaristan` 1308-06-15 ve 1443-11-01 şüpheli (ölçülemedi)

## K5 — `bohemya` künyesi boyanmıyor

`bohemya` (1198→1526-08-29) künyesi `harita:null`. Bu yüzden Prag ve Bohemya 1526'ya kadar `almanya` renginde. Bu "Bohemya Kutsal Roma'nın parçasıydı" diye savunulabilir, ama künyenin kendi haritası yok. YERLESIM-ONERI Y1 ile birlikte düşünülmeli: kırılma 1526-10-22'ye taşınırsa `bohemya` künyesi de o güne uzatılmalı.

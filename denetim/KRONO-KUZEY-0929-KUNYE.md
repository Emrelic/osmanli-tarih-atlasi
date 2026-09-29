# KRONO-KUZEY-0929 — KÜNYE bulguları (`data/devletler.js`e DOKUNULMADI)

29 Eylül 2026. Temel: `denetim/KUNYE-DUNYA-0929.json` (künye penceresi) + bu paketin
sınavı `node denetim/ARAC-KRONO-KUZEY-0929-SINA.js` (pencere dışı madde listesi).
Sınıflama `CLAUDE.md §3.5`: ① devlet öldü → dönemi kısalt · ② aynı polity sürüyor →
künyeyi genişlet · ③ ardıl yapı → ardıl künye.

## 1. Taşımadan sonra kalan pencere dışı maddeler — 7 (önce 90)
| künye | pencere | madde | sınıf önerisi |
|---|---|---|---|
| `polonya-erken` | f=1320-01-20 | 1295-06-26 II. Przemysł taç · 1296-02-08 suikast · 1300 II. Vaclav · 1306 · 1308-11-13 Gdańsk (5 madde, cok_lehistan) | ② aday: Piast krallığı 1295'te yeniden taç giydi — f → 1295-06-26? Ara dönem (1296-1300, 1306-1320 dükler) tartışmalı. **Hüküm**: genişlet ya da maddeler künyesiz bırakılsın. KUNYE-DUNYA şüpheli ömür listesinde de var |
| `varsova-dukaligi` | f=1807-07-22 | 1807-07-07 "Varşova Düklüğü kuruldu (Tilsit)" | kuruluş günü seçimi: Tilsit (Rusya 7 Temmuz / Prusya 9 Temmuz) mı, anayasa (22 Temmuz) mı — kaynakla seçilmeli; KUNYE-DUNYA şüpheli ömür ile aynı bulgu |
| `lehistan` | t=1795-10-24 | 1797-01-09 Dąbrowski Lejyonları (lehistan.js'te kaldı) | künye yok ve açılmamalı (devlet değil, sürgün askerî birlik). Öneri: madde lehistan.js'ten çıkarılsın ya da `italya-napolyon`a bağlansın — hüküm koordinatörde |

## 2. Harita tarafında künye/pencere kusurları (senkron defterinden)
- **`kongre-polonyasi` t=1917-03-15** 🟢 TDV `polonya`: Merkezî Devletler 1915'te bölgeyi aldı, 5 Kasım 1916'da "müstakil bir Polonya krallığı" ilan etti. ⇒ künye t: 1915 (Varşova'nın düşüşü, gün kaynakla) olmalı; 1916-11-05 → 1918-11-11 için **YENİ künye önerisi: `polonya-kralligi-1916`** ("Polonya Krallığı (Naiplik, Merkezî Devletler himayesi)"). Sınıf ③ (ardıl yapı). Harita önerisi `-YERLESIM-ONERI.md` §1.1.
- **`varsova-dukaligi` f** — harita 1806-11-28'den boyuyor (Varşova, Łódź, Częstochowa, Kielce, Radom): 4d sınıfı (doğumdan önce). Aradaki 8 ay Fransız işgalidir. `-YERLESIM-ONERI.md` §1.3.
- **`rusya` t=1917-03-15 / `hokand` t=1876-02-19**: Hokand'ın ilhak günü Rus eski üslubuyla (19 Şubat Jülyen = 2 Mart Gregoryen). Künye ile kronoloji maddesi aynı Jülyen günde — tutarlı; yalnız takvim beyanı eksik.
- **`moskova` f=1283-01-01**: yıl-temsilî; Daniil'in Moskova'yı alışı 1260-1270'ler — kaynak gerekli (DUZELTME B2).

## 3. Eksik künye — bu paketin kapsamında gördüklerim (KUNYE-DUNYA listesiyle KESİŞİMİ)
| önerilen id | ad | niçin | KUNYE-DUNYA'da |
|---|---|---|---|
| `kurland-dukaligi` | Kurland Dukalığı (1561-1795) | 1795 Üçüncü Taksim'de Rusya'ya geçti — yeni rusya başlığı "Kurlandiya" anıyor | ✓ var (öncelik 4) |
| `kazak-hetmanligi` | Kazak Hetmanlığı | 1654 Pereyaslav, 1667 Andrusovo, 1699 Karlofça'da "Sağ Yaka hatmanlığı" — harita `tabi:Sağ Yaka Ukrayna` etiketiyle çiziyor | ✓ var (öncelik 2) |
| `kalmuk-hanligi` | Kalmuk (İdil) Hanlığı | Sibirya/İdil kırılmalarında taraf | ✓ var (öncelik 1) |
| `polonya-kralligi-1916` | Polonya Krallığı (1916-1918) | §2 | ✗ YENİ |
| `livonya` (Livonya Konfederasyonu / Ordu) | 1561 öncesi Baltık | Narva/Pärnu/Cēsis `s:` 1561-11-28'de başlıyor; öncesi? ölçülmedi | ✗ ölçülmedi |

## 4. Bağlama notu (KRONO-BAGLAMA ile uyum)
- Yeni COK dosyalarındaki bütün `devlet`/`devletler` id'leri `devletler.js`te VAR (sınav: künyesiz 0).
  Kullanılan id'ler: moskova · rusya · sovyet-rusya · rusya-gecici-hukumet · litvanya-buyuk-dukalik ·
  polonya-erken · varsova-dukaligi · kongre-polonyasi · polonya · isvec-birlik-oncesi · danimarka ·
  norvec-kralligi · zaporojye · safevi · qing-hanedani · hokand · abd · meiji-japonya · turkmen ·
  kazak-hanligi · litvanya · estonya · prusya · fransa-cumhuriyet · almanya.
- ⚠️ `fransa` künyesi 1792-09-22'de bitiyor; 1806 maddesi `fransa-cumhuriyet`e bağlandı ("Cumhuriyet/İmparatorluk/Restorasyon" — adı imparatorluk dönemi için yanıltıcı ama pencere doğru).

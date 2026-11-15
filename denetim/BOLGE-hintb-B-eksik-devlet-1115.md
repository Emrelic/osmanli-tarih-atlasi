# BOLGE hint 2. dalga — (B) Eksik devletler (15 Kasım 2026, UMIT, dal umit-1115b-hint)

## 1. Delhi Sultanlığı hanedanları
**Mevcut ilişki ölçüldü:** `delhi-sultanligi` (f 1206-01-01, t 1526-04-21, harita:"delhi-sultanligi") tek künye, ~70 yerleşimde penceresi var; künye-içi kronolojide beş hanedan yalnız YYYY-01-01 satırlarıydı. **Düzeltme:** künyenin `kaynak:` alanı «TDV'de müstakil maddesi yok» diyordu — YANLIŞ: TDV'de `/delhi-sultanligi`, `/seyyidler`, `/ludiler`, `/hizir-han`, `/firuz-sah-halaci`, `/giyaseddin-tugluk`, `/aybeg-kutbuddin` var ve okundu; künye `kaynak`/`ic_not` düzeltildi.

**Yeni künyeler** (hepsi `harita:"delhi-sultanligi"` → renk değişmez; `delhi-sultanligi`nin alt kümesi):
| id | f | t | Kaynak (TDV, okundu) |
|---|---|---|---|
| delhi-memluk | 1206-01-01 (yıl) | 1290-06-13 | Aybeg: 25 Haziran 1206 Lahor; Fîrûz Şah Halacî: 3 Cemâziyelâhir 689 / 13 Haziran 1290 |
| delhi-halaci | 1290-06-13 | 1320-09-06 | Giyâseddin Tuğluk: «6 Eylül 1320» (Hüsrev Han öldürüldü) |
| delhi-tugluk | 1320-09-06 | 1414-05-28 | Hızır Han: 28 Mayıs 1414; Delhi Sultanlığı: son Tuğluk sultanı ölümü 1412 |
| delhi-seyyid | 1414-05-28 | 1451-01-01 | Hızır Han 28 Mayıs 1414 / Seyyidler 4 Haziran 1414 (= 15 Rebîülevvel 817); Behlül-i Lûdî 855/1451 |
| delhi-ludi | 1451-01-01 | 1526-04-21 | Lûdîler: 1451 (yıl); Delhi Sultanlığı: 21 Nisan 1526 |

**Çelişki/beyanlar (ic_not'lara yazıldı):**
1. Seyyid başlangıcı TDV'nin kendi içinde çelişir: 28 Mayıs 1414 («Hızır Han») ↔ 4 Haziran 1414 («Seyyidler»). Üçüncü bağımsız akademik kaynak (Jackson 1999, Cambridge History of India III) okunamadı ⇒ hakemli karar kurulamadı; TDV'nin biyografi günü (atlasta zaten olan 28 Mayıs) kaldı, alternatif beyanlı.
2. Lûdî başlangıcı: TDV yalnız yıl (1451). 19 Nisan 1451 günü yalnız `kronoloji_hindistan.js`te (Jackson atfı, okunmadı) ve Vikipedi aynalarında ⇒ «yalnız yıl teyitli; gün teyitsiz», 1451-01-01.
3. Tuğluk bitişi: TDV iki uç verir (1412 son sultanın ölümü; Hızır Han'ın Delhi'yi alışı 1414). 1412-1414 arası Delhi'nin sahibi TDV'de adlandırılmaz; pencere Tuğluk künyesinde tutuldu — BEYANLI yaklaşıklık.
4. Memlûk bitişi: TDV hanedanın bitiş gününü ayrıca vermez; Halacî ilân günü alındı (fiilî Delhi'ye giriş sonra).

**Harita bağı:** yalnız **Delhi şehri** pencereleri hanedan künyelerine bölündü (`yerlesimler_asya.js`: 1206-01-01..1290-06-13 memluk · ..1320-09-06 halaci · ..1398-12-17 tugluk · Timur 1398-12-17..1399-01-01 (değişmedi) · 1399-01-01..1414-05-28 tugluk · ..1451-01-01 seyyid · ..1526-04-21 ludi). Öteki ~70 yerleşim `delhi-sultanligi`nde kaldı (hanedan başına pencere ayrımı için kaynaklı gün gerekir). Yeni Delhi kırılmaları için Değişmez 2 maddeleri `data/kronoloji_sinir_hint_1115b.js`te (yer_id:"Delhi"). Not: `kronoloji_hindistan.js`te 1290-06-13 / 1320-09-06 / 1414-05-28 / 1451-04-19 satırları zaten var ama o dosya Değişmez 2 evreninde değildir — yeni maddeler zaman çizelgesinde yinelenir (KASA: kronoloji_hindistan satırlarını sınır dosyasına bağlama/ayıklama kararı).

## 2. Avrupa enklavları
| Yer | Künye | Durum |
|---|---|---|
| Daman | portekiz-hindistani-goa | **Yazıldı.** IGI XI «Daman»: «Daman proper … conquered … on February 2, 1559» (iki OCR kopyası karşılaştırıldı: «a» ↔ «2»); aynı madde 1558'de «retaken» (yıl, varyant beyanlı); bitiş TDV «Diû» 19 Aralık 1961. Önceki turun «1559 doğrulanamadı» notu artık kaynaklı. |
| Karaikal, Mahé, Yanam | fransiz-hindistani | **Yazıldı** (iade günleri IGI XII). Pondişeri/Çandernagor pencereleri fransa-cumhuriyet'te kaldığından renk uyuşmazlığı: bkz. RENK-ONERI. |
| Serampore | danimarka-hindistani | **Yazıldı** (1755 Nationalmuseet; 1845 IGI XXII). Önceki turun «başlangıç KAYNAK BULUNAMADI» notu kapandı (yıl hassasiyeti). |
| Goa, Diu | portekiz-hindistani-goa | Zaten vardı (Goa 1510-11-25..1961-12-19; Diu 1535/1961). |
| Chinsura (Hollanda) | — | **Bulunamadı:** IGI'de (taranan 8 cilt) Chinsura'nın Hollanda dönemine ait tarih okunmadı; hollanda künyesi ve pencere yazılmadı. |

## 3. Kronoloji maddeleri (Değişmez 2)
`data/kronoloji_sinir_hint_1115b.js` — 14 madde: Delhi 4, Koç Bihar 2, Agartala 2, Daman 1, Karaikal/Mahé/Yanam 3, Serampore 2. Çeviri anahtarları (`ceviri_*`, `olay_taraf.js`) bu turda yazılmadı; KASA çeviri yenilemesinde alır. `index.html`e script satırı eklendi (?v= damgası YOK).

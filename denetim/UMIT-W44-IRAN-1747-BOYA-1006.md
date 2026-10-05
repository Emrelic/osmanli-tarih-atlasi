# UMIT-W44-IRAN-1747-BOYA-1006 — 1747-1796 "genel iran" dönemi niye DEVLET_HARITA'da yok

- **Ölçülen commit:** `origin/main` `d0877829`. Ağaç `C:\atlas-w44` (detached); iş bitince kaldırıldı.
- **Ölçülen DEVLET_HARITA:** `data/devlet_harita_ust.js`, son commit `09cdd1d9` (YAYIN r11351, koşu 19 gövdeleri). `URETIM_IZI` 95 girdi.
- **Dokunulmayanlar:** `renkler.py`, `data/` ve `devletler.js` değişmedi. Diff yazılmadı, çünkü gerek yok (§4).

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (scratchpad `ongoru.txt`)
| # | öngörü | ölçüm | hüküm |
|---|---|---|---|
| O1 | İran yerleşimleri `afsar`/`zend` (+`kacar`), genel `iran` 0 ya da az | `zend` 118 · `kacar` 116 · `afsar` 2 · `iran` **0** | ✓ (ağırlık zend'de, afsar'da değil) |
| O2 | `iran`/`zend`/`afsar` BOYALAR'da ve künyeli | ✓ hepsi | ✓ |
| O3 | Sınıf BAŞKA: kusur değil, `renkler.py:278` notu bayat | ✓ | ✓ |
| O4 | §1.5 "renksiz künye" satırı saymaz, çünkü boya var | ✓ | ✓ |

## 1. 1747-1796 penceresinde İran toprağı — kimlikler
- **Kutu:** kaba İran kutusu (boylam 44–63,5 · enlem 25–40) içinde **170 yerleşim**. Sayım, 1747-06-20 → 1796-01-01 ile kesişen `s:` dönemleri üzerinden.
- **Kaynak:** `girdi.yukle()`, GIRDI_DOSYALARI evreni, 4299 nokta.

| kimlik | dönem | BOYALAR | künye `f`→`t` | `harita:` |
|---|---|---|---|---|
| `zend` | 118 | ✓ `#691569` (`renkler.py:335`) | 1751-01-01 → 1794-01-01 | `zend` |
| `kacar` | 116 | ✓ `#c840a8` (`:343`) | 1789-03-21 → 1925-01-01 | `kacar` |
| `afsar` | 2 (Merv, Kızılarvat — Horasan kolu) | ✓ `#f488fc` (`:342`) | 1736-03-08 → 1796-01-01 | `afsar` |
| `iran` | **0** | ✓ `#cc1664` (`:273`) | 1925-12-12 → 2026-08-07 (Pehlevi) | yok |
| diğer (kenar) | suud 6 · benihalid 5 · umman 3 · bahreyn 1 · turkmen 1 · buhara 1 · afgan-durrani 1 | ✓ hepsi | — | — |

- **Bütün veri:** `d:"iran"` **0** dönem, hiçbir pencerede. Ham grep'le de doğrulandı: motorun 95 girdi dosyasında `d:"iran"` 0.
- **İç boşluk:** pencerede sahipsiz aralık yok.
  - Basra 1747→1776: OSMANLI `d:` (vassal), boşluk değil.
  - Karakum ve Uzboy: `s:` yok. Bunlar beklenen çöl noktalarıdır; Değişmez 1'in 309 beklenen sahipsizi arasında oldukları ölçülmedi.
- **DEVLET_HARITA (koşu 19 çıktısı):**
  - `zend`: 6 dönem, **1747-06-20 → 1794-01-01, kesintisiz**.
  - `afsar`: 8 dönem, 1736-03-08 → 1796-01-01.
  - `kacar`: 1794-01-01 → 1923-10-29.
  - ⇒ **1747-1796 aralığı haritada BOŞ DEĞİL.** Zend, Afşar ve Kaçar ile dolu.

## 2. Niçin "genel iran" yok — kök sebep
- **`renkler.py:278-285`:** 1747-06-20 → 1796-01-01 aralığında `iran`ı "MEŞRU genel etiket" sayıyor. Bu, 3 Ağustos 2026 tarihli **tarihî bir nottur**.
- **Hemen altında, `renkler.py:296-304`:** "🟢 `zend` YAZILDI — 7 Ağustos 2026, RENK 2". Emre'nin hükmü: *"diğer iranları hanedanı ile anmak … kaçarlar zend safeviler afşarlar gibi"*. Bu hükümle `iran`ın 1747-1796 penceresi (126 nokta) **`zend`e taşındı**.
- **Sonraki adım:** `yer_yama_zend_kacar.js` (M-2873) `zend`in bitişini 1796'dan 1794'e çekti, `kacar` 1794'te başladı.
- **W13'ün dayanağı:** W13 `:278`i okudu ama `:296`yı okumadı. "1747-1796 genel iran meşru" önermesi geçersiz bir nota dayanıyor.

## 3. Sınıf
**BAŞKA — kusur değil.** Ayrıntı:
- **BOYA BORCU değil.** Pencereyi taşıyan kimliklerin hepsi boyalı.
- **KÜNYE BORCU değil.** `zend`, `afsar` ve `kacar` künyelerinin hepsinde `harita:` anahtarı kendi id'leri.
- **VERİ BORCU (`s:` boş/yanlış) değil.** Pencere dolu, 0 iç boşluk.
- **Tek "borç" belge bayatlığıdır:** `renkler.py:278-285` notu `:296`'daki sonraki kararla geçersiz. Not, motor tuzunda olduğu için şimdi yazılamaz (§9.1). Tam inşa koşusunda bir satırlık "→ 7 Ağu'da zend'e taşındı, bkz. :296" işareti önerilir. Diff yazmadım: yorum-yalnız değişiklik tuzu boşuna değiştirir; tek başına diff'e değmez, B kuyruğuna başka yama ile girerse eklensin.

### Bilinen, AYRI ve BEYANLI borç (bu işin konusu değil, karışmasın diye)
- **Ne:** `zend` verisi **1747-06-20**'de başlıyor, künyesi **1751-01-01**'de. Künye penceresi 3,5 yıl aşılıyor.
- **Daha önce bulundu:** `denetim/BULGU-ZEND-FETRET-0905.md` (hüküm verilmedi, üç kova).
- **`denetle.py`'de beyanlı:** `:1497` "1747 afsar→zend 127", `:2397` ve devamı.
- **Durum:** Bitiş ucu (1796 → 1794) M-2873 ile kapandı; başlangıç ucu açık. Sınıflandırması (§3.5 ①/②/③) koordinatörde.

## 4. §1.5 "renksiz künye" satırı bu kimliği sayıyor mu?
- **Sayma kuralı:** Satırın evreni "künye `id` ∪ veride kullanılan − BOYALAR(`harita:` varsa o)". `zend`, `afsar` ve `kacar` BOYALAR'da olduğu için evrenden düşer.
- **`iran`:** `harita:` yok. Kendi id'si BOYALAR'da (`#cc1664`), dolayısıyla o da düşer.
- ⇒ **Saymıyor, doğru olarak saymıyor.** Sayılacak bir delik yok.

## 5. Yan bulgu — DEVLET_HARITA'daki `iran` 1281→1510 bayattır
- **W13 ölçümü:** DEVLET_HARITA'da `iran` 4 dönem, 1281-01-01 → 1510-12-02. Bu ölçüm hâlâ doğru (koşu 19 çıktısı).
- **Bugünkü girdi:** girdide `d:"iran"` **0**.
- **Sebep:** `3c4eb790` (2026-10-05 19:10, "HAYALET BORCU KAPANDI: 5 → 0 · `iran` künyesi 644 yıl geriden kullanılıyormuş") `iran`ı veriden kaldırdı. Yayın `09cdd1d9` ise 16:53'te, yani koşu 19 girdileriyle çıktı.
- ⇒ Bir sonraki koşuda `iran` gövdesi DEVLET_HARITA'dan **tamamen düşmeli**. Öngörü, bu koşuda sınanmak üzere buraya yazıldı.
- **Sonuç:** `iran` artık yalnız Pehlevi künyesinin (1925+) kimliği; atlas penceresi (≤1923) içinde haritada `iran` olmayacak.
- **W13 §2 BAĞLAMA kusuruna etkisi:** `KRONOLOJI_IRAN`'ın 107 maddesi künyeye uymuyor. Bu kusur bu sonuçla DEĞİŞMEZ, daha da belirginleşir.

## 6. Bulunamadı / ölçülmedi
- Karakum ve Uzboy'un 309 beklenen sahipsiz listesinde olup olmadığı. `denetle.py` koşturulmadı, koşu 20 sürüyor.
- Koşu 20'nin girdi damgasının `3c4eb790`'ı içerip içermediği. İçeriyorsa §5 öngörüsü koşu 20'de sınanır.

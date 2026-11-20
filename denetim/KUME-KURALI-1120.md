# Mükerrer KÜME kuralı (LAB 19, 20 Kasım 2026)

**Karar:** EMRELİC 19 KASIM. **Amaç:** gürültü azaltma — tavan gevşetmesi değildir (tavan zaten `inf`, yalnız bilgi).

## Kural

`arac/denetle.py` ana bölümünde `mk` (sıkı mükerrer: `başlık` + `kişi!`) hesaplandıktan sonra: bir kayıt **≥ 3 FARKLI kayıtla** (`KUME_ESIK = 3`) çift oluşturuyorsa, o kaydın bütün çiftleri **küme ikizi** sayılır ve `mk`ya girmez; ayrı satırda sayısı basılır (`mükerrer KÜME ikizi (sayılmadı…)`).

Gerekçe: gerçek mükerrer ikilidir; bir kaydın aynı gün aynı kişileri paylaşan üç ayrı kayıtla çift olması parçalı anlatımın (tek genel olay × şehir/sınır-parça kayıtları) belirtisidir.

## Ölçüm

- Bu dalda (main 431ecba8e, tam `denetle` exit 0): sıkı çift **252 → 162**, kural **90 çifti** düşürür (denetle çıktısı: «mükerrer KÜME ikizi … 90 çift»). Mükerrer 1. partiyle (2 birleştirme) birlikte 250 → 160.
- Düşenlerde başlık benzerliği ≥ 0,6 olan TEK çift: Milletler Cemiyeti Konseyi Kamerun × Togo B-mandası (farklı topraklar; bilinçli ikiz).

## Elle okunan 5 örnek küme (kural doğru ikizi düşürüyor)

| # | Küme | Dosyalar | Çift | Neden ikiz |
|---|---|---|---|---|
| 1 | I. Theodosius'un ölümü, 395-01-17 | `olaylar_antik_misir_nubya` × `kronoloji_sinir_antik_roma` | 61 | Tek genel olay × her biri bir şehrin Doğu/Batı Roma payına düşmesini yazan sınır kaydı (İzmit, Bergama, Sinop, Atina, Şam, Kudüs, Marsilya…) |
| 2 | Versay (1920-01-10) / Saint-Germain (1920-07-16) / Trianon (1921-07-26) | `kronoloji_sinir_avrupa_bati` × `_orta` | ~20 | Aynı antlaşmanın sınır parçaları (Alsas-Loren, Eupen-Malmedy, Almanya–Polonya, –Çekoslovakya; Avusturya–SHS…) |
| 3 | Rusya gezgin ayakları, 1820-01-01 | `olaylar_gezginler` | 5 | Bir yolculuğun ardışık ayakları (Kazan–Tobolsk, Tobolsk–Semipalatinsk, Tomsk–İrkutsk…) |
| 4 | Milletler Cemiyeti mandaları, 1922-07-20 | `kronoloji_sinir_afrika` | 6 | Kamerun/Togo/Tanganyika/Ruanda-Urundi ayrı toprak, aynı gün aynı karar |
| 5 | Lozan Antlaşması, 1923-07-24 | `olaylar` × `olaylar_2s_1114_d5` / `kronoloji_sinir_turkiye` | 3 | Genel Lozan maddesi × Patmos/Meriç sınırı/Türk-Bulgar sınırı parça kayıtları |

## Sınır (bilinen risk)

Bir kümede sahici bir mükerrer gizlenebilir; `KUME_ESIK`in altında kalan ikililer görünmeye devam eder. Kural gevşetilirse (eşik 4+) küme çiftleri geri gelir.

## Ölçüm yeniden üretimi

`denetim/` dışında geçici betik: `denetle.py` gövdesinin ilk 6864 satırı `exec` edilip `olaylari_yukle` + `mukerrer_maddeler` çağrılır, `başlık`/`kişi!` süzgeci uygulanır, her çift için `len(komsu[id]) ≥ 3` sayılır (scratchpad `kume_test.py`).

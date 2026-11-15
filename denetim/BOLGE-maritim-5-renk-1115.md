# BOLGE maritim — Adım 5: Renk (15 Kasım 2026)

Ölçüm: `arac/renkler.py` BOYALAR (2246 anahtar) ve `devletler.js` `harita:` alanı, bölgede pencereli 69 künye. `py arac/renk_olc.py` bu oturumda KOŞTURULMADI (ölçülmedi) — aşağıdakiler hex karşılaştırmasıdır. `renkler.py` değişmedi; öneriler yalnız belgede.

## A. Tanım eksikliği
Bölge künyelerinin hepsi BOYALAR'da çözülüyor (0 `BOYA YOK`); `harita:` alanı boş olanlar kendi kimliğiyle boyanır (ör. srivijaya, singhasari, medang, kediri, kahuripan, sunda-pajajaran, yogyakarta, surakarta, kedah-kadaram, langkasuka…). `d:` kimliği devletler.js'te olmayan yalnız `birlesik-krallik` (bölgeye ait değil, Britanya oturumu).

## B. Paylaşılan / aynı hex (aynı anda komşu olursa ayırt edilemez)
| renk | kimlikler | bölgede eşzamanlı komşuluk? |
|---|---|---|
| `#20d820` | ingiliz-malaya, malaya-birligi, malezya, singapur-kolonisi (harita: ingiliz-malaya) | **EVET** — 1946-04-01→1959-06-03 Singapur Kolonisi ile Malaya Birliği/İngiliz Malaya (Johor, Malaka) komşu, aynı yeşil. Öneri: singapur-kolonisi'ne ayrı `harita:` (Singapur künyesi #245acc zaten ayrı: `singapur-kolonisi`ni `singapur` boyasına bağlamak) |
| `#a828d8` | siyam-chakri, ayutthaya, abd (+ amerikan-filipinleri, filipin-commonwealth) | Siyam (Pattani/Songkhla) ↔ Filipinler: komşu değil; Malezya sınırı Siyam–Kedah: ABD yok. Sorun yok. |
| `#00695c` | majapahit = hollanda-dogu-hint | Cava: Majapahit(1293–1527) VOC(1605+) eşzamanlı değil; fakat 1527 sonrası Cava'da Demak (`#9072c0`) / VOC — OK |
| `#34fcfc` | portekiz = portekiz-timor | aynı devletin kolu: beklenen |
| `#78e090` | sarawak-brooke = sarawak-tac-kolonisi | ardıl, beklenen |
| `#eab463` | cohor-sultanligi = federe-olmayan-malay-devletleri | ardıl, beklenen |
| `#24d836 / #24d83c / #24d842` | medang / kahuripan / kediri | **ardıl kuşağı, üçü birbirinden ΔE<3 (gözle ayırt edilemez)**; Doğu Cava'da 929–1222 arası ardışık, ama komşu küçük yerleşimlerle (Surabaya/Malang) birlikte görünür: aynı yerde ardıl olduğundan sınır bile yok, boya "aynı devlet gibi" görünür. Öneri: ardıl kimlikleri ≥ΔE 10 ayır |
| `#a85718` | samudra-pasai | Açe `#2d8f4a`, Pagaruyung `#907820`: komşu ayırt edilebilir |
| `#00695c` / `#2ad854/2ad88a` | tondo `#2ad854`, butuan `#2ad88a`, filipin-racaliklari `#58a028` | Luzon–Mindanao komşu: tondo–filipin-racaliklari ΔE küçük (yeşiller); Tondo 900–1281 tek yerleşimde |

## C. Ölü / çakışan
- `harita:` ile başka künyeye bağlı ama kendi künyesi olan: malezya, singapur-kolonisi, malaya-birligi → ingiliz-malaya (bilinçli ardıl).
- Majapahit `harita: majapahit` / VOC `#00695c` — aynı hex iki ayrı devlet.
- **Öneri (renkler.py'ye YAZILMADI):** (1) singapur-kolonisi→`singapur`; (2) kediri/kahuripan/medang farklı ton; (3) majapahit ile hollanda-dogu-hint ayrı hex.
- renk_olc: ölçülmedi.

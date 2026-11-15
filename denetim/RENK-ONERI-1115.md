# RENK ÖNERİLERİ — 8 bölge denetimi, toplu (UMIT, 15 Kasım 2026)

`arac/renkler.py` (tuz) hiçbir bölge oturumunda DEĞİŞTİRİLMEDİ. Bu belge yalnız öneri toplar; karar ve uygulama KASA/HAVVA'nındır (EMRELİC paleti koşu 39 tuz39 paketiyle birleştirilecek). Ayrıntı ve ölçüm yöntemi her bölgenin `denetim/BOLGE-<bolge>-5-renk-1115.md` belgesindedir (ilgili `umit-1115-bolge-<bolge>` dalında). `py arac/renk_olc.py` yalnız Çin ve Orta Asya oturumlarında koşturuldu; öteki bölgelerde ölçüm hex/ΔE hesabıdır, "renk_olc: ölçülmedi".

## A. Öncelikli (aynı anda komşu ve zayıf ayrışma) — gerçek görsel sorun

| # | Künyeler | Ölçüm | Bölge | Öneri |
|---|---|---|---|---|
| A1 | `singapur-kolonisi` ↔ `malaya-birligi` ↔ `ingiliz-malaya` | aynı `#20d820`, 1946-04-01→1959-06-03 eşzamanlı komşu | Maritim | `singapur-kolonisi`ni mevcut ayrı `singapur` boyasına (#245acc) bağla |
| A2 | `hong-kong-ingiliz` ↔ deniz | `#8ec2ff`, ΔE 3,67 (görünmez) | Çin | `harita:"ingiltere"` bağla (Makao→portekiz örneği) ya da deniz ΔE ≥ 18 hex |
| A3 | `konbaung` ↔ `ayutthaya`/`siyam-chakri` | `#7b1fa2` ↔ `#a828d8`, ΔE 23,1; 1752-1782 ortak sınır | Çinhindi | Ayutthaya/Chakri'yi kırmızı-turuncu ya da turkuaz-yeşil yöne çek; ya da Konbaung L* ≥ 12 düşür |
| A4 | `babur-imparatorlugu` ↔ `bengal-nevabligi` | RGB 32,6; 1717-1757 komşu | Hint | Bengal Nevablığı için daha ayrık ton |
| A5 | `mantua` ↔ `ferrara`/`modena` | ΔE 19,6; Po vadisi 1598-1708 üç petek yan yana | İtalya | `mantua` ya da `ferrara/modena` tonu kaydır |
| A6 | `medang` / `kahuripan` / `kediri` | `#24d836/3c/42`, ΔE < 3; Doğu Cava ardıl kuşağı | Maritim | ardıl kimlikleri en az ΔE 10 ayır |
| A7 | `kuzey-yuan` ↔ `cungar` | `#306c78` ↔ `#3fb4a2`, aynı camgöbeği-yeşil ailesi; Altay/Karakurum komşuluğu | Moğolistan | ölçüm gerekir (renk_olc koşmadı); gerekirse biri ayrılsın |
| A8 | `guney-ming` ↔ deniz | `#d8d060`, ΔE 41,3 (sınırda) | Çin | harita ölçümü olmadan değişiklik önerilmez |

## B. Rejim/hanedan sürekliliği aynı renkte (kasıtlı olabilir, karar KASA'da)
- `yuan-hanedani` ve `qing-hanedani` aynı `#636f03` (Moğolistan): zamanda çakışmıyor; "süreklilik" izlenimi veriyor. Öneri: Qing'e ayrı ton (örn. #8f4a1a).
- Khmer rejimleri (`angkor-kmer`, `kamboc-kralligi`, `khmer-cumhuriyeti`, `demokratik-kampucya`, `kampucya-halk-cumhuriyeti`) hepsi `#8d6e63`; Nguyễn Lordları/Hanedanı `#b34da5`; MHC ile Bogd Hanlık `mogolistan`. 1802/1970/1975/1979/1924 geçişleri renkte görünmez, yalnız etiket/kronoloji. Karar: kasıtlıysa `PAYLASIM`'a yaz.
- `ayutthaya`→`tonburi`(#1b54e4)→`siyam-chakri`: mor-mavi-mor (1767-1782); `ingiliz-burma`→`ingiliz-hindistani` aynı yeşil (1937 ayrılığı görünmez).

## C. PAYLASIM'a yazılması önerilenler (zamanca ayrık, renkler.py "beyansız paylaşım" uyarısı)
- `turkistan-muhtariyeti-hokand` ↔ `turkistan-ossc` (aynı toprak, ardıl) ve `kirgiz-yenisey` ↔ `xueyantuo-kaganligi` (`#889f5c`, aynı coğrafya) — kasıtlı olabilir (Orta Asya).
- Montferrat/Roma-1798/Korsika/Megara `#4d82a8`; Malta üçlüsü `#d4adf9` (İtalya).
- `#b0a503` 11 Çin/Kore künyesi (hepsi 1281 öncesi), `#7579ab` tuyuhun/wei (Çin).
- `delhi-sultanligi`↔`ingiliz-hindistani` `#20d820`, `meysur`↔`meysur-racaligi`, `bhopal`↔`bhopal-eyaleti-1949` (ardıl), `butan`↔`danimarka-hindistani` (Hint).
- Orta Asya: #73e1fc, #03a6ff, #8fe878, #0397c8, #85dee8, #62bed0, #1ca4f3 grupları zamanca ayrık; tesadüfse ayrılmalı. `bosna-isgal`'i #73e1fc'den ayırmak tesadüfü kapatır.
- Maritim: `majapahit` = `hollanda-dogu-hint` `#00695c`, `siyam-chakri`/`ayutthaya`/`abd` `#a828d8` (zamansal ayrık).

## D. Yeni künye açılırsa BOYALAR girdisi gerekir (tuz, ayrı onay)
- Almanya: Köln/Mainz/Trier elektör başpiskoposlukları, Hamburg/Lübeck/Bremen, imparatorluk şehirleri. Alman kutusunda %47 nokta `almanya` tek renktir (renkten değil sahipten ayrışır).
- Moğolistan: Oyrat, Çahar, Halha, Tümed/Altan Han künyeleri.
- Çin: Weihaiwei, Guangzhouwan, Kwantung, Şanghay yerleşimi (enklav: ana devlet rengi + eksklav deseni).
- Maritim: Jayakatwang/Kadiri künyesi (BOYALAR kararı KASA'nın).
- İtalya: Malatesta, Manfredi, Polenta, Varano, Pico, Pio, Gorizia, Treviso, Vicenza, Montalcino.
- Hint: Koch Bihar ↔ Tripura Manikya (d=6,0, ikisi de yerleşimsiz; pencere verilirse biri değişmeli).

## E. İkiz künye birleştirilirse renk anahtarı da birleşir
`bhutan`/`butan`, `della-scala`/`verona-scaliger`, `carrara`/`padova-carrara`, `visconti`/`visconti-signoria`, `sardinya-aragon`, `lihtenstayn`/`liechtenstein`, Orta Asya 5 çift: birleştirme KASA tarafından koşu 39 öncesi yapılacaksa BOYALAR/`harita:` bağları aynı anda gözden geçirilmeli.

## Ölçülmedi
`py arac/renk_olc.py`: Almanya, Çinhindi, Hint, İtalya, Maritim, Moğolistan oturumlarında koşturulmadı. Harita üzerinde görsel doğrulama yapılmadı. Hiçbir öneri uygulanmadı.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>

# BOLGE hint — Adım 2: Kronoloji teyidi (15 Kasım 2026)

## 0. Dürüst sınır
1967 maddenin tek tek akademik teyidi bu oturumda yapılamadı. Web araması (WebSearch) yalnız ders-notu, sınav sitesi ve Vikipedi düzeyi sonuç verdi; CLAUDE.md'ye göre bunlar kaynak değildir. TDV (Cloudflare) ve DergiPark/İSAM tam metinleri bu oturumda okunmadı. Bu yüzden: **mekanik kaynak denetimi tam, anlamsal gün teyidi KISMİ ve yalnız "şüpheli" işaretleme.** Hiçbir madde tarihi değiştirilmedi (hakemli karar için ≥2 bağımsız akademik kaynak okunamadı).

## 1. Madde evreni (ölçüldü)
Hint künyelerine (`bolge=guney-asya`) `taraflar:` ile bağlı veya `yer_id`/`yer_kon`'u kutuda olan `olaylar*/kronoloji*` maddeleri + künye-içi `kronoloji:` öğeleri:
| Ölçü | Değer |
|---|---|
| Toplam madde | **1967** (olaylar/kronoloji 1142 + künye-içi 825) |
| `kaynak:` dolu | 1790; **boş 177 — hepsi künye-içi `kronoloji:`'da**, olaylar/kronoloji dosyalarında 0 |
| Gün hassasiyetli (YYYY-AA-GG) | 579 (1281+ : 500); yıl-01-01: 1388 |
| TDV adı geçen `kaynak:` | 545 |
| `kaynak:`ında yalnız Vikipedi/Wikipedia | 59 (ayrıca "TEK kaynaklı" beyanlı 2: Bharatpur 1947-08-15, 1948-03-18) |
| "çift teyit" `ic_not`'u | 0 |
Not: künye-içi `kronoloji:` Değişmez 2 evreninde değildir (CLAUDE.md); bu yüzden kaynaksızlığı denetleyiciyi düşürmez, ama `kaynak:` kuralıdır.

### 1a. Kaynaksız 177 madde — dağılım
En yoğun: delhi-sultanligi 7, babur-imparatorlugu 6, maratha 5, meysur 5, ingiliz-hindistani 5, manipur 5, yadava 5, pandya 5, madurai-sultanligi 5, behmeni 4, sih-imparatorlugu 4, sur-hanedani 4, gucerat-sultanligi 4, racput 4, nayak-devletleri 4. Bunların 54'ü 1281+ ve gün hassasiyetli (Panipat 1526-04-21, Şivâcî tacı 1674-06-06, Plasi 1757-06-23, Tipu 1799-05-04, Ranjit Singh 1801-04-12…). Tam liste: `py` yerine node betik (scratchpad `ev2.js nosrc`); bu raporun sonundaki §3'e özet.

## 2. Gün şüpheleri (kaynak okunamadı → karar YOK)
Bilinen standart tarihle atlas günü arasında fark olabilecek maddeler. Her biri için "teyit için gereken": ≥2 bağımsız akademik kaynak.
| # | Madde (kayıt) | Atlas günü | Olası farklı gün | Not |
|---|---|---|---|---|
| S1 | avad#1 Buxar | 1764-10-23 | 22 Ekim 1764 | iki ders-notu sitesi 22 Ekim diyor (kaynak sayılmaz); akademik okunmadı |
| S2 | bengal-nevabligi#1 Sirâceddevle nevab | 1756-04-01 | Alîverdi Han'ın ölümü Nisan 1756'nın ortasında (≈9–10 Nisan) | atlas günü büyük olasılıkla fazla erken; kaynak okunmadı |
| S3 | bicapur#3 Bîcâpûr teslim | 1686-09-22 | 12 Eylül 1686 (İskender'in teslimi) ya da 26 Eylül (saltanat sonu) diyen kayıtlar var | kaynaklar tutarsız; hakem gerekir. Etkisi: künye t=1686-09-22 ve Bangalor/Vellore/Arcot pencereleri (Adım 3) |
| S4 | golkonda#3 teslim | 1687-09-21 | 22 Eylül 1687 (Vikipedi aralığı) | gün tutarsız; okunmadı |
| S5 | maratha#0 Şivâcî tacı | 1674-06-06 | Jülyen 6 Haziran = Gregoryen 16 Haziran; kaynakların hangi takvimi verdiği belirsiz | 1582 sonrası kural: Gregoryen yaz, geç geçen yerde çevir; Hindistan'da Jülyen/Gregoryen ayrımı için Gordon/Sarkar okunmalı |
| S6 | nepal#1 Sugauli | 1816-03-04 | imza 2 Aralık 1815, onay 4 Mart 1816 | madde "ile toprak verildi" der; imza günü mü onay günü mü beyan edilmeli |
| S7 | bharatpur-cat#2 | 1805-01-02 | kuşatma 3 Ocak 1805 | gün karıştırılmış olabilir |
| S8 | nepal#2 Kot katliamı | 1846-09-15 | gece 14/15 Eylül 1846 | iki günlük belirsizlik |
| S9 | karnatik#1 | 1751-08-31 | Clive Arcot'u 1751 sonu Ağustos/Eylül'de aldı; kuşatma 23 Eylül | madde tek günde iki olayı birleştiriyor olabilir |
Diğer standart günler (Plasi 1757-06-23, Panipat I 1526-04-21, Panipat III 1761-01-14, Tipu 1799-05-04, Ranjit Singh 1801-04-12/1839-06-27, Lahor Antlaşması 1846-03-09, Avad ilhakı 1856-02-07, Allahabad 1765-08-16, Kandy 1815-03-02, Colachel 1741-08-10, Gama 1498-05-20, Diu 1509-02-03, Danture 1594-10-08, Kolhapur…) bilinen standart günlerle uyumlu görünüyor; **"görünüyor" = yazarın bilgisi, kaynak okunmadı, teyit sayılmaz.**

## 3. Sonuç
Teyit edilen (≥1 akademik kaynak okunup eşleşen): **0** · çelişen (iki kaynak okunup farklı çıkan): **0** · şüpheli işaretlenen: **9** (S1–S9) · kaynaksız künye-içi madde: **177** (54'ü 1281+ günlü) · veri düzeltmesi: **yok** (karar için gereken kaynak okunamadı).
**Öneri:** KASA/EMRELİC gerçek web erişimli oturumda S1–S9'u TDV (Pânîpet, Plasi/Bengal, Bîcâpûr, Golkonda, Şivâcî, Nepal maddeleri), Eaton, *The New Cambridge History of India*, Sarkar, Gordon, Habib/Nizami ile teyit etsin; 177 künye-içi maddeye `kaynak:` eklensin.

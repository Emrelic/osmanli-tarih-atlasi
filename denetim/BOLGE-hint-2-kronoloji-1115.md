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


---

# İKİNCİ TUR (15 Kasım 2026, koordinatör talebi) — gerçek kaynak okumaları

Birinci turdaki "kaynak okunamadı" hükmü yanlıştı: TDV `islamansiklopedisi.org.tr` doğrudan GET ile çekilebildi (arama + madde), archive.org tam metinleri `curl` ile indirilip yerelde arandı. Okunan kaynaklar: TDV «Hindistan», «Bengal», «Bîcâpûr», «Âdilşâhîler», «Gûlkünde», «Tîpû Sultan», «Haydar Ali Han», «Nepal», «Kalküta», «Mürşidâbâd», «Diû», «Sri Lanka», «Seylan»; archive.org: K. K. Datta *Alivardi and His Times* (dli.2015.279485), «How the British Occupied Bengal» (dli.2015.131347), C. E. A. W. Oldham, JBORS 1926 (dli.2015.277158), A. L. Srivastava *Shuja-ud-daulah* (Calcutta 1939; dli.2015.52383), J. Sarkar *Shivaji and His Times* (dli.2015.281923), *English Records on Shivaji 1659-1682* (dli.2015.101593).

## Hakemli kararlar (9 şüpheli gün)
| # | Madde | Atlas günü | Karar | Kaynaklar ve gerekçe |
|---|---|---|---|---|
| S1 | Buxar (avad#1) | 1764-10-23 | **atlas doğru, değişmedi** (koordinatörün 22 Ekim önerisi reddedildi) | **Çift teyit 23 Ekim 1764:** Oldham, JBORS 1926: Munro'nun savaş alanından notu «23rd October», Champion planı «Octr. 23, 1764»; Srivastava (1939) bölüm başlığı «The Battle of Buxar, 23rd October, 1764». 22 Ekim ordunun ovaya girdiği gün. |
| S2 | Sirâceddevle nevab (bengal-nevabligi#1) | 1756-04-01 (kaynaksız) | **DÜZELTİLDİ → 1756-04-10** | Datta: Alîverdi «5 A. M. on the 10th April, 1756»; «How the British Occupied Bengal»: «passed away on 10 April» (dipnot «Or 9 April»). TDV «Sirâcüddevle/Bengal»: yalnız 1756. Sirâceddevle'nin ayrı cülus günü okunan kaynaklarda yok; madde halefiyet = ölüm günüyle tarihlendi, `ic_not_t`'de beyan. |
| S3 | Bîcâpûr teslim (bicapur#3) | 1686-09-22 | **atlas doğru** | TDV «Âdilşâhîler»: 22 Eylül 1686 = 4 Zilkade 1097. Tabülâr hicrî çevrim (kendi betiğim): 4 Zilkade 1097 = 22 Eylül 1686 Gregoryen = **12 Eylül Jülyen** → kaynaklardaki «12 Eylül» aynı günün Jülyen karşılığı; çelişki yok. |
| S4 | Golkonda teslim (golkonda#3) | 1687-09-21 | **atlas doğru** | TDV «Gûlkünde»: «14 Zilkade 1098'de (21 Eylül 1687)»; tabülâr çevrim Gregoryen 21 Eylül (Jülyen 11 Eylül). Vikipedi 22 Eylül aralığı TDV'ye karşı geçmez. |
| S5 | Şivâcî tacı (maratha#0, kronoloji_hindistan.js:560) | 1674-06-06 | **Jülyen; Gregoryen karşılığı 1674-06-16** — uygulanmadı, KASA kuyruğunda zaten var (arac/kronoloji_kuyruk.py L2-1111, EMRELİC TAKVİM-OS-TUR1) | Sarkar, *Shivaji and His Times*, Chronology: «All the dates in this book are given in the Old Style … New Style dates (usually ten days later for Shivaji's lifetime)»; coronation «Next day (6th June, 1674)»; Oxinden (EIC, O.S.): 5 Haziran «tomorrow 7 or 8 in the morning». Zincir `devletler.js` f, `kimlikler.js`, `kronoloji_hindistan.js`, `yerlesimler_asya.js` (Pune/Raygad/Satara pencereleri) → KASA PAZAR'ın tek elden uygulaması gerekir; bu yüzden çakışma çıkarmamak için dokunmadım. |
| S6 | Sugauli (nepal#1) | 1816-03-04 | **atlas doğru (yürürlük/onay günü)** | Aitchison koleksiyonu (archive.org dli.2015.49932, OCR zayıf): imza 2 Aralık 1815; atlasın `kronoloji_guney_asya.js` maddesi «onaylandı» der ve sınır kayıtları Aitchison'a dayanır. TDV «Nepal»: gün yok. |
| S7 | Bharatpur kuşatma (bharatpur-cat#2) | 1805-01-02 | **karar yok: bulunamadı** | Arşiv metinleri yalnız «early in 1805» diyor; 3 Ocak doğrulanmadı. |
| S8 | Kot katliamı (nepal#2) | 1846-09-15 | **karar yok: bulunamadı** | Cambridge/ Satish Kumar 1962: yalnız Eylül 1846; gün okunmadı (Whelpton okunmalı). |
| S9 | Arcot (karnatik#1) | 1751-08-31 | **karar yok** | Neill (CUP): Clive Arcot'a «31 August 1751» girdi (İngiliz O.S. olabilir → Gregoryen 11 Eylül); O.S. beyanı yok → KASA'nın İngiliz O.S. taramasına (TAKVİM-OS) bırakıldı. |

## Kaynak eklenen künye-içi maddeler (devletler.js, 14 satır)
Delhi: Halacî 1290, Tuğluk 1320, Seyyid 1414, Lûdî 1451 (TDV «Hindistan»; yalnız yıl); Panipat I 1526-04-21 ×2 (TDV «Hindistan»: «21 Nisan 1526'da Pânîpet zaferini kazanarak»); Haydar Ali 1782-12-07 (TDV: yalnız Aralık 1782 → «[yalnız ay teyitli; gün teyitsiz]»); Tipu/Seringapatam 1799-05-04 ×2 (TDV: «29 Zilkade 1213/4 Mayıs 1799»); Bîcâpûr, Golkonda (yukarıda); Avad/Buxar `ic_not` çift teyit; Diu/Goa ilhakı 1961-12-19 (TDV «Diû»: «19 Aralık 1961 tarihine kadar Portekiz yönetiminde»; hukukî katılma 14 Mart 1962). Ek (son commit): Evrengzîb cülusu (babur#2, 1658): **TDV iç çelişkisi** — «Bâbürlüler» 21 Temmuz 1658 (Agra), «Evrengzîb» 31 Temmuz 1658 (Delhi), ikinci cülus 5 Haziran 1659; üçüncü kaynak okunmadı → gün SEÇİLMEDİ, 1658-01-01 kaldı, çelişki `kaynak:`ta beyanlı; Bahadır Şah II 1857-09-21 (TDV «Bahadır Şah II»: 20 Eylül sığınma doğrulandı; 21 Eylül teslim günü birebir doğrulanmadı — beyanlı). Ham sayı: kaynaksız künye-içi 177 → **163**.

## Ek TDV doğrulamaları (atlas penceresi ile uyumlu bulunanlar, değişiklik yok)
Diû: Bahadır Şah 1535 anlaşması yıl ✓ (pencere 1535-10-25), Bahadır Şah öldürülmesi 13 Şubat 1537, Diû kuşatması 20 Nisan 1546; Sri Lanka bağımsızlığı 4 Şubat 1948 ✓ (pencere); TDV «Seylan/Sri Lanka»: Portekiz 1505, Hollanda 1656, İngiliz 1795/1802, Kandy 1815 (yıl) ✓. TDV'de Plasi günü yok (yalnız 1757); Kalküta 1690/1756; Tuğluklar 1320.

## Kalan (bu turda bitmeyen)
177→165 kaynaksız künye-içi madde, 59 yalnız-Vikipedi madde: kalanı için TDV'de ilgili madde yok (Maratha, Sih, Racput, Vijayanagara, Plasi günü, Panipat III) → bu maddeler ikinci tam metin kaynağı (Sarkar *Fall of the Mughal Empire*, Gordon, Grewal) ister; **bu turda okunmadı**. Sistematik risk: 1582–1752 arası İngiliz/EIC kaynaklı Hint günleri O.S. olabilir (Madras 1639, Bombay 1665, Arcot 1751…) — KASA'nın TAKVİM-OS taraması bu kümeyi de kapsamalı.

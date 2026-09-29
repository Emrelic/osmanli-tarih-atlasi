# KUNYE-BIRLESTIR-0929 — paketlerin künye önerileri, tek yamada (29 Eylül 2026)

**Uygulayıcı:** `denetim/ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py`

- Kuru koşu VARSAYILAN; `--kosullu` · `--uygula` bayrakları var.
- 🔴 Bu oturum `--uygula` KOŞTURMADI. `data/devletler.js`e dokunulmadı (`git status` temiz).
- Uygulandıktan sonra: `py arac/denetle.py` · `py arac/durum_tablosu.py` (§1.5 "⚪ yalnız kronoloji" kovası büyüyecek, beklenen).

## ① TOPLANAN

| Kaynak | Ne |
|---|---|
| `denetim/KRONO-BALKAN-B-0929-KUNYE.md` | bosna-eyaleti · iskodra-pasaligi · arnavutluk-osmanli (+ karadag f kaynaksız notu) |
| `denetim/KRONO-BALKAN-D-0929-KUNYE.md` | vidin-carligi · epir-despotlugu · bulgar-carligi t (②) · Bulgar 1396-1878 ve Yunan 1821 öncesi için künye ÖNERMİYOR |
| `denetim/KRONO-KAFKAS-0929-KUNYE.md` | kartli-kralligi · samtshe-atabegligi · megrelya · guria · abhazya · revan-hanligi · cenub-i-garbi-kafkas · kaheti ② |
| `denetim/KRONO-TUNA-0929-KUNYE.md` | erdel f ② + tabi.t ① · kazak-hetmanligi · ukrayna-halk-cumhuriyeti · ukrayna-devleti-1918 |
| `denetim/KRONO-MAGRIB-0929-KUNYE.md` | trablus-cumhuriyeti (t bulunamadı) · künye gün düzeltmeleri (DUZELTME B3-B6) |
| `denetim/KUNYE-DUNYA-0929.json` | eksik 46 · supheli_omur 26 |
| **VERİ** (144 dosya, node+vm) | künyesi olmayan `devlet:`/`devletler:`/`taraflar:` id'leri |

**Veriden ölçülen (uygulayıcının son koşusu):** bağlayıcının gördüğü (`KRONOLOJI_COK_*`/`SINIR_*`)
künyesiz taraf **22 id / 96 madde**. Bunun dışında:

- `kronoloji_almanya.js`: **10 id / 76 madde** (brandenburg-prusya 47 · saksonya 10 · hansa · pfalz · alman-konfederasyonu 4'er · teuton-sovalyeleri · hannover 2'şer · dini-elektorlukler · wurttemberg · baden 1'er). Dosya `KRONOLOJI_ALMANYA` → `almanya` olarak bağlandığı için bağlayıcı `devlet:`i **OKUMUYOR**. Künye açılsa bile bu 76 madde bağlanmaz, dosya COK_'a çevrilmedikçe. (M-5428)
- İlk ölçümde 16 id vardı. Sonradan 6 id daha geldi (ATLANTIK/AMERİKA dosyaları): batav-cumhuriyeti 5 · rio-de-la-plata-valiligi 4 · yeni-granada-valiligi 3 · habsburg-hollandasi 3 · hollanda-brezilyasi 2 · venezuela-genel-kaptanligi 1. **Öneri dosyaları YOK**; uygulayıcı bunları her koşuda yeniden sayar.

**Yanlış alarmlar (künye GEREKMEZ):**
- Defterdeki `?kunyesiz:` suud 12 · yemen 12 · hicaz 10 · cimma 2. Dördünün de künyesi `harita:` alanıyla VAR: suud-birinci/ikinci/ucuncu · yemen-zeydi · hicaz-kralligi · cimma-sultanligi. Yerleşim `s:` pencereleri (suud 1744-1818 · hicaz 1916-1923 · yemen 1281-1923 · cimma 1830-1923) künye pencerelerinin içinde. `SENKRON-DEFTER` `harita:`yı çözmüyor.
- `osmanli` 15 madde (sinir_ortadogu 8 · sinir_turkiye 6 · sinir_komsu 1). Osmanlı bilerek künyesiz; künye açılmamalı.
- `misir-eyaleti` (koordinatörün listesinde): künye ZATEN VAR (1517-04-13 → 1805-07-03).

## ② SINIFLANDIRMA ve yama

| Grup | id | İş | D205 | Madde | Haritada kullanılacak mı |
|---|---|---|---|---|---|
| kesin | `erdel` | f 1570→**1541-08-29**; tabi.t 1711→**1699-01-26**; özet cümlesi güncellenir | ② + tabi ① | pencere dışı 4→0 | yerleşim `v:` zaten 1541'de başlıyor (TUNA) |
| kesin | `mekke-serifligi` | t 1919-01-10→**1919-05-08** (TDV `mekke`) | gün | — | pencere uzuyor, risk yok |
| kesin | `karakoyunlu` | t 1469-01-01→**1469-04-01** (TDV Şevval 873) | ② | — | uzuyor |
| kesin | `katalan` | t 1388-01-01→**1388-05-02** (TDV `atina`) | ② | — | ⚠️ aşağı bak |
| kesin | `kaheti-kralligi` | t 1606→**1762** (TDV yıl) | ② | — | uzuyor |
| kesin | `bosna-eyaleti` 🆕 | 1463-06-01 → 1878-07-29 | ③ | 14 | HAYIR (OSMANLI toprağı) |
| kesin | `iskodra-pasaligi` 🆕 | 1756 → 1831-04-21 | yeni polity | 3 | HAYIR |
| kesin | `samtshe-atabegligi` 🆕 | 1268 → 1578-08-09 | yeni | 2 | aday: Ahıska 1500'de `gurcistan` boyasıyla |
| kesin | `revan-hanligi` 🆕 | 1747 → 1828-04-02 | ③ | 5 | **EVET:** Revan 1760'ta künyesi o tarihte olmayan `zend` ile boyanıyor. Renk (`renkler.py`) + yerleşim `s:` (Oturum 0) ayrı iş |
| kesin | `cenub-i-garbi-kafkas` 🆕 | 1918-11-05 → 1919-04-12 | yeni | 1 (⚠️ pencere dışı) | HAYIR |
| kesin | `ukrayna-devleti-1918` 🆕 | 1918-04-29 → 1918-12-14 (EoU) | yeni | 3 | bugün HAYIR: Kiev 1918'i `sovyet-rusya` boyuyor, ayrı sorun |
| koşullu | `kaheti-kralligi` | f 1578→1490 | ② | — | f KAYNAKSIZ yıl |
| koşullu | `arnavutluk-osmanli` 🆕 | 1537-08-25 → 1912-11-28 | ③ | 7 | HAYIR · f kaynaksız (Ç7) |
| koşullu | `epir-despotlugu` 🆕 | 1205 → 1430-10-09 | yeni | 4 | aday: Yanya 1380'de `bizans` boyasıyla · f kaynaksız |
| koşullu | `vidin-carligi` 🆕 | 1360 → 1396-10-01 | ③ | 2 | aday: Vidin 1370'te `bulgaristan` boyasıyla · f muhafazakâr, t atlastan (Ç2) |
| koşullu | `kartli-kralligi` 🆕 | 1490 → 1801-09-12 | yeni (ayrıştırma) | 10 | aday: Tiflis 1600'de `gurcistan` boyasıyla · f kaynaksız |
| koşullu | `kazak-hetmanligi` 🆕 | 1648 → 1764 | ③ eşzamanlı | 0 bugün | HAYIR · Ç3 |

**Kuru koşu sonuçları** (her değişiklik `count==1` kanıtlı, 0 ret; yamalı metin node+vm ile çalıştırıldı):

| | kesin | kesin + koşullu |
|---|---|---|
| DEVLETLER | 678 → 684 | 678 → 689 |
| künyesiz taraf | 22 id / 96 madde → 16 / 68 | → 12 / 45 |
| **BAĞLANAN** | **28 madde** | **51 madde** |
| bağlanan ama künye penceresi dışında | 1 (cenub-i-garbi-kafkas 1919-04-13, t'den 1 gün sonra) | 1 |

**"Haritada kullanılacak mı" — ölçüm yöntemi:** o yerin o tarihteki `s:` kimliği okundu
(`girdi.yukle`). Yeni künyelerin HİÇBİRİ bugün haritada kullanılmıyor; dizinsiz harita kimliği
0 kalır. **Renk isteyen tek kesin aday `revan-hanligi`.** Samtshe, Epir, Vidin ve Kartli ancak
yerleşim `s:` değişirse renk ister; o ayrı bir Oturum 0 işi.

## ③ ÇAKIŞMALAR — seçilmedi, hüküm koordinatörde

- **Ç1 POLİTİKA.** BALKAN-B "Osmanlı eyaleti" künyesi açıyor (bosna-eyaleti, arnavutluk-osmanli, iskodra-pasaligi). BALKAN-D aynı sınıfı Bulgaristan 1396-1878 için reddediyor: beş olay dört ayrı eyalette geçiyor, tek künye toplamaz, madde çekirdeğe aittir.
- **Ç2 Vidin / Bulgar 1396.** `vidin-carligi` ayrı künye olursa `bulgar-carligi` Tırnova 1393'te KISALIR (①). BALKAN-D ise aynı dosyada `bulgar-carligi` t'sini Vidin'in düşüşüne GENİŞLETMEYİ (②) de öneriyor. İkisi birlikte olmaz.
- **Ç3 Hetmanlık.** M-5416 `zaporojye` dedi (26 madde bağlandı). TUNA Ö-3 ve KUNYE-DUNYA ayrı `kazak-hetmanligi` öneriyor.
- **Ç4 Ukrayna 1918.** Tek künye mi iki künye mi? Veride iki id de kullanılıyor (3 + 3). `ukrayna-halk-cumhuriyeti` t: bulunamadı, BEKLEYEN.
- **Ç5 Erdel.** Çakışma değil, uzlaşma: KUNYE-DUNYA'nın `dogu-macar-kralligi` önerisi GERİ ÇEKİLDİ, erdel genişletmesi yeterli. 1526-1541 Budin dönemi künyesiz kalıyor (ORTA-AVRUPA).
- **Ç6 Bosna uçları.** `bosna-kralligi` t 1463-05-01 ↔ `bosna-eyaleti` f 1463-06-01: 1 ay boşluk. `bosna-isgal` f 1878-07-13 ↔ `bosna-eyaleti` t 1878-07-29: 16 gün örtüşme.
- **Ç7 Arnavutluk f.** 1537-08-25 (kaynaksız uca yaslı) mı, 1479-01-25 (arvanid-sancagi ile örtüşür) mü?
- **Ç8 Katalan haritası** (yeni bulgu). Yenişehir ve Tırhala `s:katalan` 1390'a, İzdin 1281-1394'e uzanıyor. Künye t ister 1388-01-01 ister 1388-05-02 olsun, bu dönemler dışarıda kalıyor. Bu yamanın doğurduğu bir kusur değil; genişletme açığı 4 ay küçültüyor. Neopatras tarafının ayrı sonu olabilir; ölçülmedi.

## ④ BEKLEYEN — yamaya girmez

| Konu | Neden | Madde |
|---|---|---|
| `ukrayna-halk-cumhuriyeti` | t bulunamadı | 3 |
| `megrelya-prensligi` · `guria-prensligi` · `abhazya-prensligi` | f bulunamadı | 2 · 2 · 4 |
| `trablus-cumhuriyeti` | t bulunamadı | 1 |
| ATLANTIK/AMERİKA'nın 6 id'si | öneri dosyası yok | 18 |
| `trablusgarp-ocagi` t→1835 | önce yerleşim `v:kid` (39 dönem) değişmeli | — |
| `bulgar-carligi` t | Ç2 | — |
| `sirbistan-nemanjic` | ③ ad mı ardıl mı | — |
| Mükerrerler: kuveyt↔sabah · katar↔sani · sadi↔fas · zeta↔crnojevic-zetasi | birleştirme kararı | — |
| `almanya` ③ | + 76 madde bağlama sorunu | 76 |
| MAGRIB gün düzeltmeleri (B3-B6) | künye iç maddeleri; harita etkisi ölçülmedi | — |

⇒ **Kesin yama bugün 28 maddeyi bağlar.** Koşullu grup onaylanırsa 51.
Bekleyenlerin tamamı çözülürse (öneri dosyası gelen ATLANTIK dahil) bir 30 madde daha bağlanabilir.
`osmanli` 15 ve almanya 76 bu yolla bağlanmaz.

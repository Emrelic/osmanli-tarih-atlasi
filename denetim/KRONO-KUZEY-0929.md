# KRONO-KUZEY-0929 — Rusya · Lehistan · İsveç kronolojisi (Dalga 2) — RAPOR

29 Eylül 2026 · şartname `oturumlar/KRONO-KUZEY-0929.md` · ortak doktrin §1/§4.1 + DALGA2.
Ekler: `-DUZELTME.md` · `-YERLESIM-ONERI.md` · `-KUNYE.md` · `-SIBIRYA-KAYNAK.md` (ham kanıt).
Aletler: `denetim/ARAC-KRONO-KUZEY-0929-{YAZ,YENI}.py` · `-SINA.js` · `-TDV.py` (+ `-tdv-onbellek/`).

## ① ÖLÇTÜM

### Envanter (başlangıç)
| dosya | madde | yüzyıl (13/14/15/16/17/18/19/20) | eksik zorunlu alan | künye penceresi dışı |
|---|---|---|---|---|
| kronoloji_rusya.js | 173 | 1·4·7·19·23·44·58·17 (+1200'ler 1) | 0 | **15** (14 × 1547 öncesi + Ekim Devrimi) |
| kronoloji_lehistan.js | 140 | 2·16·27·27·36·26·5·1 | 0 | **69** (1569 öncesi 61 · 1795 sonrası 8) |
| kronoloji_isvec.js | 101 | 1·3·14·24·41·15·3 | **yer_id 62** | **6** (1523 öncesi) |

Senkron defteri `paket["KRONO-KUZEY-0929"]` (başlangıç): 1132 yer-kırılması · 158 gün ·
**134 net olay adayı** (açık 19 · kapsam dışı 86 · yıl-temsilî 29) · net açık yer 625.
Aday dökümü: 70'i Sibirya/Uzak Doğu/Alaska kale kuruluşu (`—→rusya`), 11'i Orta Asya fethi,
kalanı Avrupa/Kafkas devirleri; tek büyük kalem 1917-11-07 (377 yer, TEK madde).

### Denetim bulguları (ayrıntı `-DUZELTME.md`)
- **Takvim**: rusya.js başlığı "t: alanları Gregoryen" diyor; **~23 madde Jülyen** (1825 Dekabrist, 1861 serflik, 1905 Kanlı Pazar…). Poltava rusya'da 06-27 (J), isvec/lehistan'da 07-08 (G) — aynı olay 11 gün arayla iki maddede. Andrusovo lehistan.js'te Rus üslubuyla (01-30), çekirdekte Gregoryen (02-09).
- **Olgu/gün şüphesi** 10 madde (1762-01-05 barış günü = Elizaveta'nın ölümü · 1881 "Mayıs Kanunları" aslında 1882 · 1741-11-04 Bering · 1756 Yedi Yıl · …) — kaynak açılmadan DÜZELTİLMEDİ.
- **Künye**: 90 madde yanlış künyeye bağlıydı (ardıla geriye bağlama, M-5416).
- lehistan: 1484 Kili/Akkirman "toprak-kayip" — Boğdan'ın toprağıydı.

### Yapılan
| iş | sayı |
|---|---|
| Pencere dışı madde doğru künyeye TAŞINDI (metin aynı, `devlet`+`tasindi`) | **83** (rusya 15 → moskova/sovyet · lehistan 62 → polonya-erken/litvanya-bd/varsova/kongre/polonya · isvec 6 → isvec-birlik-oncesi±danimarka/norveç) |
| isvec.js `yer_id:""` eklendi (zorunlu alan) | 62 |
| Başlık/gövde düzeltmesi (kaynaklı) | 4 (1795 · 1878 Ayastefanos · Ekim Devrimi · Karlofça) |
| **YENİ madde** (kaynaklı) | **80** — cok_rusya 77 · cok_lehistan 3 |

Yeni maddelerin dağılımı (etiketten sayıldı): cok_rusya 77 = Sibirya/Uzak Doğu kale-kışlak
kuruluşu **39** · sınır hattı ve maden/fabrika kuruluşu **15** (Tambov, Ostrogojsk, İrtiş hattı,
Ural fabrikaları, Çelyabinsk, Transbaykal karakolları, Pamir Postu…) · Alaska kuruluşları **7** ·
devir/savaş/antlaşma **16** (1500 Vedroşa · 1514 Smolensk · 1722 Ağrahan · 1775 Zaporojye Seçi ·
1824 Karkaralı · 1858 Aigun · 1864 Türkistan · 1864 Çimkent · 1866 Hucend · 1867 Alaska devri ·
1869 Krasnovodsk · 1871 Kulca · 1875 Sahalin · 1892 Onor · 1918 Litvanya · 1918 Estonya);
cok_lehistan 3 (1806 Varşova'ya Fransız girişi · 1918 Wielkopolska · 1922 Katowice).
Her maddede `gun:` alanı — takvim beyanı (Jülyen/Gregoryen/"takvim belirtilmemiş").

### Sınavlar
- `node --check` altı dosya ✓ · `node denetim/ARAC-KRONO-KUZEY-0929-SINA.js`: **494 madde** (414 eski + 80 yeni), eksik zorunlu alan 0, künyesiz id 0, t+b mükerrer 0, pencere dışı **7** (hepsi künye kusuru, `-KUNYE.md` §1).
- `py arac/odak_olc.py`: yeni kırık atıf **0** (tek çözülmeyen `kronoloji_dogu_afrika.js` Ogaden — benim değil). cok_rusya 91/91 konumlu (Vedroşa sonradan Bryansk'a bağlandı) · cok_lehistan 64/65 (1 beyanlı) · cok_isvec 4/6 (2 beyanlı, taşınan eski maddeler).
- `py arac/denetle.py`: **SONUÇ: temiz** (rc=0; 2s 180 AÇIK / tavan 195 — değişmedi, beklenen: COK dosyaları 2s evreninde değil). Tek koşu (M-5457).
- **Senkron defteri (son koşu, `ARAC-SENKRON-DEFTER-0929.py`)**: kuyrukta kapalı yer 485 → **1016** · net açık yer **625 → 116** · net açık gün 127 → **71** · net olay adayı **134 → 74**. Kalan 74'ün çoğu kaynaksız Sibirya kuruluşu, gün düzeyinde harita uyumsuzluğu (`-YERLESIM-ONERI.md` §3) ve bilerek yazılmayan yanlış kırılmalardır (1621 Livonya, 1917-03-15 Kongre Polonyası, Iğdır).

## ② BULAMADIM
- **BRE (bigenc.ru) ve Britannica sayfaları bu makineden AÇILMIYOR** (401/403, tarayıcıda da). Sibirya tarihleri ve pek çok gün **arama motoru özetinden** okundu; her maddede "[özet]" damgası ve sayfa adresi var. "[özet]" = sayfa okunarak doğrulandı DEĞİLDİR.
- 19 Sibirya/Alaska yerleşiminde kuruluş yılı için kabul edilebilir kaynak **bulunamadı**; 14'ünde yıl tutuyor ama kaynak zayıf (turizm/haber) — madde YAZILMADI (liste `-YERLESIM-ONERI.md` §3).
- 1882 İli iadesi günü · 1905 Pamir (Buhara→Rusya) · 1363 Vinnitsa · 1400 Braslav · 1545 Berdiçev · 1571 Kostantinov · 1430 Sibir · 1500 Kazak bozkırı · 1555 Başkurt · 1379 Küngrat · 1721 Don Kazak · 1723 Astara/Lenkeran · 1869 Garabogaz/Çeleken — **madde yazılmadı** (kaynak gün/yıl vermiyor ya da olay başka paketin/çekirdeğin).
- Iğdır'ın Revan Hanlığı'na bağlılığını söyleyen kaynak cümlesi (TDV'de ığdır maddesi yok).

## ③ İSTİYORUM / ÖNERİYORUM
1. **index.html + `arac/paketle.py`** (koordinatör): üç yeni dosya — `data/kronoloji_cok_rusya.js` (`KRONOLOJI_COK_RUSYA`, 92 madde) · `_cok_lehistan.js` (`KRONOLOJI_COK_LEHISTAN`, 65) · `_cok_isvec.js` (`KRONOLOJI_COK_ISVEC`, 6). **Bağlanana kadar sitede görünmez; ayrıca 83 madde eski dosyadan çıktığı için bağlanmadan yayın, bu maddeleri siteden KALDIRIR** — üç dosya birlikte yayına girmeli.
2. `data/paket_06.js` / `paket_11.js` eski metni taşıyor — `paketle.py` yeniden koşmalı.
3. `-YERLESIM-ONERI.md` §1 (Kongre Polonyası 1915-18 işgali 🟢 · Kielce/Radom Avusturya 🟡 · Baltık 1918 Alman işgali 🟡 · Tartu/Pärnu 1621 🟡 · Iğdır ⚪) koşuya biriktirilsin.
4. `-DUZELTME.md` §B7: çekirdek (`olaylar*.js`) başlıklarına taraf adı eklenirse 2s AÇIK kovasından 1795 · 1878 · 1917-11-07 · 1699 kalemleri düşer — benim COK dosyalarım 2s evreninde değil.
5. `-KUNYE.md`: `polonya-kralligi-1916` yeni künye · `kongre-polonyasi` t: düzeltmesi · `polonya-erken` f: hükmü.
6. `data/yer_yama.js`: 34 anahtar eski dosyayı gösteriyor (yama zaten uygulanmış; yeniden uygulanırsa "bulunamadı").
7. VERI-YAPISI §59 "atlasın tarihleri Jülyen" cümlesi 1582 sonrası Batı olaylarında tutmuyor (Küçük Kaynarca, Karlofça, 1917 — hepsi Gregoryen). Şartnamedeki "atlas geleneği Jülyen" bu yüzden eksik; kuralı "kaynağın takvimi, çevirmeden, `gun:`da beyanlı" diye okudum ve öyle uyguladım.

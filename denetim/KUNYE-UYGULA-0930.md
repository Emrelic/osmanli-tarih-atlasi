# KUNYE-UYGULA-0930 — 29 Eylül künye kalemleri `data/devletler.js`e uygulandı

30 Eylül 2026 · uygulayıcı `denetim/ARAC-KUNYE-UYGULA-0930.py` (güvenlik kapıları
`ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py`den import edilir: her dizgi blokta tam 1 kez · yamalı
metin node+vm ile koşar · harita s:/isg:/v:kid penceresi taranır; tek ret ya da YENİ harita
aşımı varsa hiç yazmaz). Uygulanmayanlar sebepleriyle: `denetim/KUNYE-UYGULA-0930-RED.md`.

## ① Ölçüm — sonuç

| | önce | sonra |
|---|---|---|
| DEVLETLER | 678 | **704** (+26) |
| bağlayıcının gördüğü (COK_/SINIR_) künyesiz taraf | 30 id / 106 madde | **4 id / 18 madde** (osmanli 15 bilinçli + 3 red) |
| YETIM-KRONO-0930'un 12 sorunlu dosyasında künyesiz kimlik | 25 id | **0** — 12 dosyanın 12'si bağlanabilir |
| canlı konsoldaki 4 id | 0/4 | 1/4 (nagpur-bhonsle) · 3 red |
| değişen künyelerde pencere dışı COK_ maddesi | 4 | **0** |
| yeni künyeye bağlanıp penceresi dışında kalan madde | — | 2 (aşağıda) |
| haritada YENİ doğan künye-pencere aşımı | — | **0** (önceden var olan 87 aşım aynen sürüyor) |
| `node --check data/devletler.js` | | ✓ |
| `py arac/denetle.py` | | ✓ bütün değişmezler (1 · 1b · 1c · 2 · 2s · 2i · 2t · 4 · 4c · 4d · 4s · 5 · 8a · 8b) |

`denetle.py` notları: 2s "YIL-TEMSİLÎ BORÇ 158 > tavan 151" uyarısı bu yamadan DEĞİL — §1.5'te
(r10122) zaten 155 idi; artış yerleşim kırılmalarından (1657 → 1666, başka oturumlar).
Künye yaması kırılma doğurmaz. 4 hayalet 6 (beklenen 9) · 4c 128 (132) · 4d 331 (409) —
tavanların altında. İlk koşuda `devletler.js ayrıştırılamadı (Invalid \escape)` çıktı: yamanın
6 kaynak dizgisinde `\'` kaçışı vardı (JS'te geçerli, denetimin okuyucusunda değil); düzeltildi,
dosyada `\'` sayısı HEAD ile aynı (0).

## ② Uygulananlar — sınıflarıyla

**YENİ künye — 26**
- 0929 kesin (6): `bosna-eyaleti` ③ · `iskodra-pasaligi` · `samtshe-atabegligi` · `revan-hanligi` ③ · `cenub-i-garbi-kafkas` · `ukrayna-devleti-1918`
- 0929 koşullu → kabul (1): `arnavutluk-osmanli` ③ — f 1537-08-25 arvanid-sancagi ile ardışık (Ç7: 1479 alternatifi seçilmedi, örtüşme doğardı)
- 0929 koşullu → uçları bu oturumda KAYNAKLANDI (3): `epir-despotlugu` (TDV yanya + Britannica) · `vidin-carligi` (TDV vidin + nigbolu-savasi) · `kartli-kralligi` (Iranica 1484 + TDV gurcistan)
- 0929 "bekleyen / öneri dosyası yok" → kaynaklandı (16): `megrelya-prensligi` · `guria-prensligi` · `abhazya-prensligi` · `ukrayna-halk-cumhuriyeti` · `tahiri` (TDV `tahiriler--yemen`) · `yeni-granada-valiligi` · `rio-de-la-plata-valiligi` · `venezuela-genel-kaptanligi` · `hollanda-brezilyasi` · `habsburg-hollandasi` · `batav-cumhuriyeti` · `mayorka` · `arborea` · `orta-amerika-federasyonu` · `yeni-ispanya-ilk-donem` · `nagpur-bhonsle`

🟡 **TANIKLIK SINIRI** (kuruluş/yıkılış günü bulunamadı; uç, kaynağın devleti VAR gösterdiği
en uç gündür — `not:` alanında beyanlı, uydurma yok): `epir-despotlugu` f · `vidin-carligi` f+t ·
`megrelya-prensligi` f · `guria-prensligi` f · `arborea` f. **Gün komşudan** (CLAUDE.md §4
şartlı serbest, kayıtta beyanlı): `rio-de-la-plata-valiligi` t ← arjantin-cumhuriyeti f ·
`nagpur-bhonsle` t ← 1853-12-11 maddesi.

**GENİŞLETİLEN (②) — 5:** `erdel` f 1570 → 1541-08-29 · `karakoyunlu` t → 1469-12-19 (TDV Bağdat kolu; son madde ikiye ayrıldı: 1469-04-01 Hasan Ali + 1469-12-19 son) · `katalan` t → 1388-05-02 · `kaheti-kralligi` t 1606 → 1762 · `mekke-serifligi` t → 1919-05-08 (artık gün kaynaklı)

**KISALTILAN (①) — 3 künye:** `erdel` tabi.t 1711 → 1699-01-26 (Karlofça) + t 1711-04-30 → 04-29 (MNL Szatmár) · `zeyyani` t 1554 → 1553 (TDV tilimsan) · `rif-cumhuriyeti` f 1921-09-18 → 09-19 (TDV fas). Üçünde de harita taraması YENİ aşım göstermedi.

**AD — 1:** `hollanda` "Hollanda Cumhuriyeti" → "Hollanda (Birleşik Eyaletler Cumhuriyeti → 1815 Krallık)" (ilk kelime aynı; `denetle.py _2s_kunye_adlari` etkilenmez).

**KÜNYE İÇİ madde günü / metni — 20 madde, 14 künye (hepsi TDV ya da kaynağı adıyla):**
erdel 1690-12-04 → 1691-12-04, 1711-04-30 → 04-29 · katalan son → 1388-05-02 · trablusgarp-ocagi
1711 → 07-29, 1835 → 05-27 · tunus-ocagi 1705 → 07-12 · abdulkadir 1839-11-01 → 11-19 ·
fas 1549 → 01-31, 1664 → 08-02, 1672 → 04-13 · zeyyani son → 1553 · bogdan Vaslui 1476 → 1475 ·
sirp-despotlugu 1439-08-18 → 08-27 · sirbistan-prensligi 1830-08-30 → 10-17 · arnavutluk-bagimsiz
"Ekim'de" → "3 Eylül 1914'te" · girit-devleti 1898-12-09 → 12-22 · paraguay 1870 → 03-01 (kendi alıntısı) ·
ispanyol-peru 1780 "bastırıldı" → "başladı (1781-83'te bastırıldı)".

## ③ Bulamadıklarım / açık kalanlar
- **Açılmadı (kaynak yetmedi):** `trablus-cumhuriyeti` (t bulunamadı) · `kunduz-hanligi` (f bulunamadı; t cümlesi Kunduz'u adıyla anmıyor) · `kuca-hocalari` (iki uç bulunamadı). Üçünün dosyası ZATEN bağlı; madde konsolda "künyesiz taraf" kalır, kaybolmaz.
- **Pencere dışı 2 madde:** `rio-de-la-plata-valiligi` 1811-05-18 Las Piedras (Britannica valiliği 1810'da bitirir; Montevideo 1814'e dek kralcı — GEC 1814 der) · `cenub-i-garbi-kafkas` 1919-04-13 (künye t 1919-04-12 TDV; madde 1 gün sonra).
- **Çelişkiler (kayıtta beyanlı):** Batav 19/20 Ocak 1795 (Canon / Nationaal Archief) · UNR sonu 21 Kasım / 21 Ekim 1920 (EoU iki madde) · Orta Amerika sonu 1838 (CEPC) / 1840 (Britannica) · Río de la Plata 1776/1810 (Britannica) / 1777/1814 (GEC) · Epir: Britannica 1204-1337.
- **Harita:** yeni künyelerin HİÇBİRİ bugün haritada boyanmıyor (renk `arac/renkler.py`de, dokunulmadı). Renk/yerleşim adayları (0929 BIRLESTIR ölçümü): `revan-hanligi` (Revan 1747-1751 `zend` boyasıyla) · `samtshe` · `epir` · `vidin` · `kartli` — Oturum 0 işi.

## ④ Değişen dosyalar
- `data/devletler.js` — 🔴 COMMİT EDİLMEDİ (paylaşılan veri; koordinatör commitler)
- `denetim/ARAC-KUNYE-UYGULA-0930.py` · `denetim/KUNYE-UYGULA-0930.md` · `denetim/KUNYE-UYGULA-0930-RED.md` — adıyla commitlendi

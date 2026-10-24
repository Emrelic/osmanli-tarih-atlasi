# ÖNERİ — monte-alban-zapotek / zapotek-monte-alban mükerrer künyeleri (KAYNAK-DOGRULA, 24 Ekim 2026)

Durum: YALNIZ ÖNERİ. Künyeler BİRLEŞTİRİLMEDİ; `data/` ve `arac/` bu iş için değiştirilmedi.
Ölçüm ağacı: worktree `agent-a5cbe491172c2b362`, `kosu30-hazirlik` ucu (b97aab751).

## 1. Ölçülen durum

| | `zapotek-monte-alban` | `monte-alban-zapotek` |
|---|---|---|
| devletler.js satırı | 21108 | 20708 |
| ad / başkent | "Zapotek Devleti (Monte Alban)" / "Monte Alban" (aksansız) | "Monte Albán Zapotek Devleti" / "Monte Albán" |
| f / t | -0499-01-01 / 0700-01-01 | aynı |
| kronoloji maddesi | 2 (Monte Albán I'in başlangıcı ve 0700 sonu) | 8 (kuruluş, saray, 100 MÖ, 100, 200 Teotihuacan teması, 500, 600, 700) |
| kaynak | Marcus & Flannery / Fulcrum monografisi, UNAM Históricas, EBSCO | EBSCO Research Starters, INAH |
| `data/yerlesimler_mo_amerika.js` `s:` kullanımı | EVET — "Monte Albán" yerleşiminin tek sahibi (`s:[{f:-0499,t:0700,d:"zapotek-monte-alban"}]`) | YOK (0 yerleşim) |
| `data/devlet_harita_ust.js` (üretilmiş) | VAR, renk `#5a8563` | YOK |
| `data/ufuk_bantlari_ust.js` (üretilmiş) | VAR (3 dilim: -0499/-0399/-0099, g=[95] vb.) | YOK |
| `data/olaylar_arkeoloji_gecis.js` | "künye zapotek-monte-alban" (0700 dönem ucu) | YOK |
| `arac/renkler.py` BOYALAR | satır 1196, `#5a8563` | satır 260, `#fc6c4d` |
| `data/paket_kunye.json` | 0 eşleşme | 0 eşleşme (ikisi de `paket_05.js`te, üretilmiş paket) |

Yani haritada görünen, boyayı alan, ufuk bantlarını doğuran künye `zapotek-monte-alban`dır.
`monte-alban-zapotek` haritada hiçbir noktaya bağlı değildir (yalnız metin zengin künye + atıl BOYALAR satırı).
Önceki "kalmalı" önerisi (`denetim/once1281/dilimler/AMERIKA_REF.json`: `monte-alban-zapotek` kalsın) imla gerekçeliydi; bağlantı maliyeti ölçülmemişti.

## 2. Öneri

**`zapotek-monte-alban` KALSIN (id olarak), `monte-alban-zapotek` künyesi ondan sonra SİLİNSİN; zengin içerik taşınsın.**

Neden:
1. Bağlı olan taraf bu: yerleşim `s:`, üretilmiş harita/ufuk dosyaları, olay tablosu, boya hepsi bunu kullanır. Öteki id'yi tutmak, yerleşimin `d:`'sini ve üç üretilmiş dosyayı (HAVVA koşusu) değiştirmeyi gerektirir.
2. `monte-alban-zapotek`i silmek haritayı DEĞİŞTİRMEZ (kullanan nokta yok) — Değişmez 1/2/3/8 etkisi sıfır.
3. Boya sürekliliği: yeşil `#5a8563` korunur, `renk_olc.py` paletinin yeni ihlal üretme riski doğmaz. Öteki yoldaki turuncu `#fc6c4d` (komşu Orta Amerika boyalarıyla yakınlığı ölçülmedi) yeniden ölçüm ister.

Taşınacaklar (tek commit, tek dosya `data/devletler.js`):
- `zapotek-monte-alban`in `ad`ı "Monte Albán Zapotek Devleti", `baskent`i "Monte Albán" olsun (imla; `ad` değişimi boya anahtarını ve id'yi etkilemez, BOYALAR görünen adı `renkler.py`de ayrı — oraya DOKUNMA, motor önbelleği tuzudur).
- `monte-alban-zapotek`in 6 ek kronoloji maddesi (saray MÖ ~300, MÖ 100, MS 100, MS 200, MS 500, MS 600) `zapotek-monte-alban`e eklensin; `taraflar`/`odak_yer` alanları bu id'ye çevrilsin.
- `kaynak:`a EBSCO/INAH ve Seshat satırları eklensin (kayıp yok). EBSCO ve Seshat CLAUDE.md'ye göre akademik değildir; aşağıdaki §3 akademik kaynaklarla değiştirilmeli.
- `arac/renkler.py` satır 260'taki atıl `monte-alban-zapotek` BOYALAR satırı: SİLİNMESİ ancak bir sonraki zaten planlı motor değişikliğiyle birlikte yapılsın (renkler.py değişirse 7-8 saatlik tam yeniden inşa; atıl satır zararsızdır).

## 3. Künye içeriğinde kalan zayıflık (bu önerinin parçası değil; ayrı karar)

- f=-0499 BİR DEVLET KURULUŞU değil: yerleşme/şehir başlangıcı (Monte Albán I). Önceki ölçüm (AMERIKA_REF.json; Redmond & Spencer 1992, "The Prehistoric City and State of Monte Albán", UNAM) devleti MÖ ~100 civarına (Faz II) koyar. Önerilen: f'yi koru ama `ic_not`ta "yerleşme başlangıcı, devlet yükselişi Faz II" beyan et; ya da iki dönem (şeflik/devlet) — Emre kararı.
- Akademik dayanak adayları (okunmadı, burada YAZILMAMIŞ tarih yok): Marcus & Flannery, "Zapotec Civilization" (Thames & Hudson 1996); Blanton, "Monte Albán" (Academic Press 1978); Spencer & Redmond, "Late Monte Albán I Phase (300-100 B.C.) Palace in the Valley of Oaxaca", Latin American Antiquity (künyede zaten anılıyor); Redmond & Spencer 1992 (UNAM).
- `ufuk_bantlari_ust.js` bu künye için 0550'ye kadar dilim üretmiş görünüyor, künye t=0700: üretilmiş dosya, bu turda ölçülmedi; HAVVA koşusunda kendiliğinden eşitlenir.

## 4. Sonuç özeti

Kalacak: `zapotek-monte-alban`. Silinecek: `monte-alban-zapotek` (içeriği önce taşınır). Etki: harita DEĞİŞMEZ, boya DEĞİŞMEZ, yerleşim `s:` DEĞİŞMEZ; motor dondurma ihlali yok (renkler.py'ye dokunulmaz). Birleştirme Emre onayıyla ayrı bir işte yapılmalıdır.

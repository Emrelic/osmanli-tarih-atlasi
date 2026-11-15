# BOLGE-ISKANDINAV — Adım 7: Düzeltme ve ölçüm (1115c)

## Dalda yazılanlar (`data/devletler.js`, commit b9e482655)
1. `livonya-tarikati` 'son' maddesi 1561-01-01 → **1561-11-28**.
2. `riga-baspiskoposlugu` f **1255-01-01 → 1201-01-01** (+ 1201 'kurulus' maddesi; 1255 maddesi tür 'siyaset').
3. `danimarka` + **1376-05-03** hükümdar maddesi (SNL).
Yazılan künye: 0 yeni; yeni yerleşim: 0; yeni olay/sınır maddesi: 0 (künye-içi madde +2 yeni, 1 tarih düzeltme). A/B/C yazımı yok (neden: Adım 1 ve 4, kaynak okunamadı).

## Ölçüm (taban: KASA commit mesajı → bu dal)
`py arac/denetle.py` — **ÇIKIŞ KODU 0 ("SONUÇ: temiz")**, ağaç = bu dal, worktree'de `coz-c` sonrası, `denetle-umit` kilidiyle:
| | taban (KASA) | bu dal |
|---|---|---|
| D1 sahipsiz | 306 | 306 (beklenen 306) |
| D2 açık | 0 | 0 (760 kırılma) |
| D4c | 0 | 0 |
| D2s açık | 154 | 154 |
| D2t kırılmasız madde | 167 | **166** |
| D8a | 283 | 283 (tavan 283) |
| D2sk yalnız-taraf | 5927 (tavan) | **5938 (tavan 5927) — ⚠️ uyarı; denetle çıkış 0'ı bozmadı.** Bu dalın 3 değişikliği yerleşim/olay verisi değil künye kronolojisidir; fark taban commit'in kendisinden de gelebilir — taban `origin/kasa-1115-umit-birlesim` ayrıca ölçülmedi. Tavan KASA'nın (açılmadı). |
`py arac/odak_olc.py`: ÇÖZÜLMEYEN ODAK ATFI 0 (düzeltmeden sonra). `py arac/renk_olc.py`: bölgeyle ilgili 'AYIRT EDİLEMEZ' yok; 'AYNI HEX + eşzamanlı + 600 km' 0 çift. `node --check data/devletler.js`: OK.

## İKİNCİ TUR (koordinatör talimatı; commit cea300069 + bu belge)
Uygulananlar: Riga 1621-09-15 → **09-25** (kronoloji_isvec.js + kronoloji_cok_senkron_0930.js; yerlesimler.js/ek7 Cēsis/ek11 Pärnu tarafı kuyrukta K2 tek paket); Teuton 1309/1343/1346 mükerrerleri çözüldü (3 satır silindi, kaynaklar birleştirildi); üç düzeltmenin **iki bağımsız kaynağı**: Livonya 1561-11-28 (VLE + Dybaś 2025, okundu), Olav IV 1376-05-03 (SNL + lex.dk «Oluf 2.», ikincisi arama özeti), Riga 1201/1255 ayrımı ic_not_f'ta (iki kaynak: VLE + leksikon nakli; yıl çelişkisi 1201/1202 beyanlı, tam metin okunmadı). Yeni yerleşim: **Lund, Sigtuna** (`data/yerlesimler_iskandinav_1115c.js`, girdi_listesi.py + index.html paket_26'dan önce düz script). B (piskopos devletleri/Livonya Konfederasyonu künyeleri) YAZILMADI: lex.dk/VLE gövdeleri kuruluş/bitiş günlerini vermedi. A: Svalbard (K15 mevcut `Svalbard` kaydı `kasitli_bosluk`, düzeltme önerisi kuyrukta), Hedeby/SH-1848/Kraliyet Prusyası/Hanse: kuyrukta gerekçeli, yazılmadı.
**Ölçüm (2. tur): `odak_olc.py` ÇÖZÜLMEYEN ODAK ATFI: 0** (Lund/Sigtuna dahil, `node --check` OK, `girdi.yukle()` 5646 nokta, mükerrer yok). **`denetle` ÖLÇÜLMEDİ (2. tur):** `denetle-umit` kilidinde `okyanusya` oturumu 46+ dk tutuyor (son yazma sürekli 0-1 dk — canlı tazeliyor), iskandinav sırada 1 saati aştı; kuyruk betiği (scratchpad isk-denetle.sh, çıktı isk-denetle-cikti.txt) hâlâ bekliyor. D2/D4c/D1 için Lund/Sigtuna etkisi (özellikle Lund 1658-03-08 ve Sigtuna 1523-06-06 kırılmalarının D2 kapanışı) bu yüzden **ölçülmedi**; ilk tur sonucu (çıkış 0) yalnız 1. tur commit'ine aittir. KASA push kapısında ayrı worktree'de ölçecek.

## Çeviri beyanı
Künye-kronoloji maddelerinin çevirisi bu depoda yok (`ceviri_*_devlet.js` yalnız ad/özet hash'i taşıyor; ad/özet DEĞİŞMEDİ). `ceviri_*_olay_*.js` ve `olay_taraf.js` anahtarlarına dokunulmadı. Riga 1621 (K2) taşınırsa üç dosya + anahtarlar birlikte taşınmalı.

## Açık kararlar (Emre / KASA)
1. **K2 Riga 1621-09-15 → 09-25** (Jülyen→Gregoryen; tek akademik kaynak Andersson + takvim kuralı).
2. **K7 1704/1710 mu 1721 mi** (Rus fethi vs Nystad): bölge genelinde politika.
3. **K3/K13 Tallinn 1219-06-15 ve 1238-06-07** (lex.dk; ikinci akademik kaynağa (Tamm, *Tuna* 2001) erişilemedi: ECONNREFUSED).
4. K1 Riga 1201-1255 `__BOSLUK__` → `riga-baspiskoposlugu` (künye genişletmesi bu dalda hazır; `yerlesimler.js` satırı kuyrukta).
5. Teuton künyesinde 3 mükerrer satır çifti (1309/1343/1346) ve 1346-11-01'in TEYIT-KARAR-1014'e aykırılığı: hangi satır kalacak.
6. `teuton-sovalyeleri` yetim çeviri anahtarı (`ceviri_*_devlet.js`).
7. Grönland 1450-1814 künye boşluğu (kaynak okunmadı).
8. C dilimi (1000-1199): Lund, Sigtuna, Roskilde, Birka, Hedeby için akademik kaynaklı yerleşim ekleme — bu dalda kaynak okunamadığı için yapılmadı.

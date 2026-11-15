# BOLGE maritim — Adım 7: Düzeltme (15 Kasım 2026)

## Yazılan veri düzeltmesi: 0
Hiçbir `data/*.js` değişmedi. Gerekçe: bulunan her tutarsızlığın bir ucu `data/yerlesimler*.js` pencerelerinde (yasak: YAYIN BAYAT duvarı); kronoloji maddesi tarihini tek başına kaydırmak pencere ile ±30 günü bozar (yeni Değişmez 2 ihlali), künye (`devletler.js`) uçlarını tek başına kaydırmak yeni D4c ihlali üretir. Ek olarak ikinci kaynak okunmadan gün yazmak "tarih uydurma"dır. Ayrıca bulunan eksik maddeler (Majapahit 1293, Mataram→VOC 1743-11-11, İngiliz ara dönem 1811, Hollanda teslimi 1942-03-09, Manila 1898-08-13) için **bu oturumda ikinci akademik kaynak okunamadı**; tek-kaynaklı (veya kaynaksız) madde yazılmadı.

## Kuyruk
Bütün düzeltmeler `denetim/YERLESIMLER-JS-KUYRUK-1115-maritim.md` içinde (A: künye/pencere uçları TDV'li ve TDV'siz; B: D4c; C: madde–pencere gün hizası; D: eksik yerleşim; E: eksklav bayrakları).

## Öncelik önerisi (KASA/EMRELİC için, kaynakla kapanabilecek olanlar)
1. **A1 Brunei künye f 1368→1405** (TDV bruney açık; 5 yerleşim penceresi + `__BOSLUK__`): kaynak hazır, tek karar.
2. **A3 Sunda-Pajajaran ömrü** (TDV: Pajajaran'ı Yûsuf yıktı, 1570–1580): iç Sunda 1579'a uzar; Pakuan Pajajaran yerleşiminin `s:` penceresi yok.
3. **A5/A6 Majapahit tutarlılığı** (15 yerleşimde tek başlangıç, tek bitiş; TDV 1300–1525, 1520'ler Demak): Coedès/Ricklefs okunup hakemli karar gerekir.
4. **C: İngiliz ara dönemi (Cava, 1811-08-18→1816-08-19, ≈40 geçiş)**: kronoloji maddesi yok; Ricklefs/TDV cava (1811–1816 TDV'de var) ile iki maddeye bağlanabilir.
5. **Kronoloji eksik 1293, 1743, 1942-03-09, 1898-08-13**: ikinci akademik kaynakla yeni madde.

## Ölçümler
- `odak_olc.py` (bu ağaç): ÇÖZÜLMEYEN ODAK ATFI **0**, çıkış 0.
- `denetle.py`: aşağıya eklenecek (ağır; bu ağaçta Değişmez 8 ölçülemez → çıkış 2 olabilir, temiz sayılmaz). Veri değişmediği için önce = sonra.
- `renk_olc.py`, `node --check`: veri/JS değişmediği için koşturulmadı.

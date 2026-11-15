# BOLGE maritim — Adım 7: Düzeltme (15 Kasım 2026, 2. tur)

## Yazılan veri düzeltmeleri (hepsi dalda; `data/yerlesimler.js` ve üretilmiş dosyalara dokunulmadı)
| # | dosya | değişiklik | kaynak (tam metin) |
|---|---|---|---|
| 1 | kronoloji_cok_dogu_500_1281.js (Cebu maddesi) | t 1565-01-01 → **1565-04-27**, gun/kesinlik "gun", ic_not | Blair & Robertson cilt 2 (Gutenberg #13280): Legazpi raporu «Friday, April 27, 1565» + aynı ciltteki sefer anlatısı «twenty-seventh and thirtieth of April» (2 ayrı belge) |
| 2 | kronoloji_sinir_asya.js (Manila maddesi) | t 1571-01-01 → **1571-06-24**, metinde gün açıklaması, kaynak + ic_not | B&R cilt 3 (Gutenberg #13616): Riquel noter belgesi — unvan 3 Haziran 1571, alcalde/regidor 24 Haziran 1571 (tek birincil belge; TDV yalnız 1571, çelişmez) |
| 3 | devletler.js brunei-sultanligi | f 1368-01-01 → **1405-01-01**, ic_not_f; künye içi kuruluş maddesi 1368 → 1405 | TDV bruney (1405–1415); 1368 için kaynak bulunamadı |
| 4 | yerlesimler_a78_asya.js (Bintulu, Baram, Limbang, Labuan, Niah) | `__BOSLUK__` ucu ve Brunei başı 1368-01-01 → 1405-01-01 (8 satır; kaynak metni güncellendi) | aynı |
| 4b | yerlesimler_gdasya.js (Berau, Tarakan, Sukadana) | ilk pencere `brunei-sultanligi` başı 1400-01-01 → 1405-01-01 (künye f 1405'e çekilince Değişmez 4d: 3 dönem doğumdan önce başlıyordu; ara denetle ✗ → düzeltildi) | aynı (TDV bruney); `kur:` 1400 olduğu gibi |
| 5 | devletler.js sunda-pajajaran | t 1527-06-22 → **1579-01-01**, ic_not_t | TDV bentem (Yûsuf 1570-1580 Pajajaran'ı yıktı) + Ricklefs 3. bs. «conqueror of Pajajaran c.1579» (iki bağımsız kaynak) |
| 6 | kronoloji_sinir_asya.js (Malaka kuruluşu 1396) | ic_not (hakem beyanı) | TDV 1396[?]/1390'lar/1402, Ricklefs c.1400, Coedès 1403: aynı yıl yok → değişmedi |
| 7 | kronoloji_portekiz.js (Malaka 1511-08-10) | ic_not: çift teyit | TDV malaka + malezya, Coedès «August 10, 1511» (Vikipedi 15 Ağu dayanak sayılmadı) |
| 8 | kronoloji_cok_ince_gd_asya.js | **yeni madde 1811-08-04** (İngiliz donanması Batavia önünde) | Ricklefs 3. bs. (tek tam metin; günler 4 Ağu/26 Ağu/18 Eyl) |
| 9 | kronoloji_cok_ince_gd_asya.js | **yeni madde 1942-03-08** (Cava'da Hollanda teslimi) | Ricklefs 3. bs. «On 8 March 1942 the Dutch in Java surrendered» |

Çeviri: Cebu, Manila, Malaka maddelerinin `b` metni değişmedi → çeviri hash'i bayatlamadı; olay_taraf anahtarı bu maddeler için yoktu (grep 0). Yeni 2 madde (8, 9) çevirisiz: çeviri yenilemesi KASA'nın. Yeni arayüz metni yalnız bu iki maddenin Türkçe `b`/`d` metnidir.

## Yapılmayanlar (neden)
- **Sulu f 1457/1450:** değişmedi. TDV «1450 [?]» (soru işaretli); ikinci akademik tam metin (Majul vb.) bulunamadı/okunmadı; Ricklefs yalnız «legendary sources». Hakemli karar koşulu (bağımsız ≥2 aynı gün) sağlanmadı → atlas değeri korundu, TDV değeri ic_not'a taşınmadı (künye `f` yıl hassasiyeti 1457 TDV'de yok, "bulunamadı").
- **Majapahit tutarlılığı:** künye 1293–1527 Ricklefs/Coedès ile uyumlu, Demak çekirdeği 1478 TDV ile uyumlu → modeli değiştirmedim; kaynaksız 1293-11-10 (Trowulan) yerleşimi kuyrukta.
- **Pencere gün düzeltmeleri** (Banten/Cirebon/Purwokerto/Lampung 1527-06-22, Singhasari 1292, 1811-08-18, 1942-03-09, 1743-11-11): yerleşim pencereleri hem `yerlesimler_*.js`'te hem `yer_yama_*`/`kd:`/üretilmiş kademe dosyalarında bulunuyor ve bunların yeniden üretimi (paketle/kademe) KASA'nındır; kuyruğa tam liste yazıldı.
- **1743-11-11 Mataram→VOC, 1898-08-13 Manila madde:** Ricklefs yalnız «November 1743» (gün yok); 1898-08-13 için B&R kapsamı (1803'e kadar) dışında, ikinci kaynak okunmadı → madde yazılmadı (tarih uydurma olur).

## Ölçümler
- `node --check`: devletler.js, kronoloji_cok_dogu_500_1281.js, kronoloji_sinir_asya.js, kronoloji_portekiz.js, kronoloji_cok_ince_gd_asya.js, yerlesimler_a78_asya.js → hepsi 0.
- `odak_olc.py` (2. tur veri sonrası, taze): ÇÖZÜLMEYEN ODAK ATFI **0**, çıkış 0.
- `denetle.py` önce (1. tur taban): D1/1b/2/2i/4/4c/4d/4s/5/8a/8b/8k/8m/R ✓ (bkz. adım 3 A); sonra: aşağıdaki satır.

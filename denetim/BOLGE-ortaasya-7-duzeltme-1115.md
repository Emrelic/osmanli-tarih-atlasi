# BOLGE-ortaasya-7-duzeltme-1115 — Orta Asya düzeltmeleri (UMIT, 15 Kasım 2026)

Dal: `umit-1115-bolge-ortaasya`. Düzeltme ölçütü: **yalnız bu oturumda doğrudan OKUNAN kaynakla kesinleşen** değer yazıldı; atlas kaynak sayılmadı; yerleşim dosyalarına, üretilmiş dosyalara, `renkler.py`'ye, `?v=` damgasına dokunulmadı.

## 2. TUR — düzeltme özeti (bu bölüm 1. turdaki D1'i GEÇERSİZ kılar)
| # | dosya | değişiklik | kaynak (okundu) |
|---|---|---|---|
| E0 | `kronoloji_orta_asya.js` Sibirya nizamnamesi | **D1 GERİ ALINDI**: 1822-06-22 geri geldi (TDV «kazakistan» «22 Haziran 1822» der, okundu); karşı 22 Temmuz Jülyen makalesi tek kaynak → TDV kalır | TDV kazakistan |
| E1 | `kronoloji_cok_orta_asya2.js` Yâkub Bey ölümü | `t` 1877-05-01 → **1877-05-29**; `gun`, `ic_not_gun` (tüm kaynak günleri beyanlı: 1/16/22/25/29/30 Mayıs) | TDV yakub-beg «29 Mayıs 1877» + Kuropatkin *Kashgaria* s. 248-249 (17/29 Mayıs, 02:00); Boulger okundu (1 Mayıs Türkistan Gazetesi, çelişkili); Qing shi gao 25 Mayıs ganzhi doğrulandı, metin okunmadı |
| E2 | `devletler.js` hive + turkmen künye-içi (2 madde) | `t` 1873-05-29 → **1873-06-10** + `ic_not_t` | TDV hive-hanligi 29 Mayıs (Jülyen) + Schuyler II «June 10» (Gregoryen) çift teyit |
| E3 | `yerlesimler_ek15.js` Taşkent | pencere 1865-06-17 → **1865-06-29** | Schuyler I (hücum 27 Haziran, teslim 29 Haziran) |
| E4 | `kronoloji_ozbek.js` Taşkent maddesi + Hive 1873 madde metni | kaynak Schuyler'e bağlandı (`ic_not_t`), `d` metni 10 Haziran | Schuyler I/II |
| E5 | `kronoloji_cok_rusya.js` + `yerlesimler_ek15.js` + `yerlesimler_ok107.js` (×2) | Çimkent 1864-09-22 → **1864-10-04** | Schuyler I «October» (22 Eylül Jülyen = 4 Ekim) |
| E6 | `kronoloji_cok_rusya.js` + `yerlesimler_ek15.js` | Hucend 1866-05-24 → **1866-06-05** | Schuyler I «June 5, 1866» |
| E7 | `kronoloji_ozbek.js` (7 madde) | jenerik «Cambridge History…» kaynak → Schuyler I Appendix I (s. 337-345) | Schuyler I |
Çeviri/olay_taraf: E1, E5, E6'daki maddeler için `ceviri_*_olay_*.js` ve `olay_taraf.js`'te `1877-05-01`, `1864-09-22`, `1866-05-24` anahtarı **yok** (grep) → taşınacak anahtar yok; E4'te Hive 1873-08-24 maddesinin `d` metni değişti, `KRONOLOJI_OZBEK:1873-08-24` çeviri anahtarı da yok → bayat hash yok. Üretilmiş `paket_*.js` ve `paket_kunye.json` KASA'nın yenilemesini bekler.
Karar bekleyen: Merv 1510-12-01/02 (hakem: 1 Aralık, atomik taşıma K13'te), ikiz künye birleştirme (K12), Kunduz Hanlığı / Âfâkî Hocalar / Turfan-Kumul künye ekleme: TDV `kunduz` ve `hoca-ailesi` sayfalarında f/t YOK («Kunduz (1859)» yalnız Dost Muhammed maddesinden) → **kaynaksız künye yazılmadı**; `kunduz-hanligi` tanımsız taraf id'si bu yüzden açık (öneri: künye için Mîr Murad Beg / Kataghan kaynağı okunana kadar maddeden `kunduz-hanligi` çıkarılabilir; KASA).

### 2. tur ölçümü
`py arac/denetle.py` (kilit `denetle-umit-ortaasya` alındı/bırakıldı; çıktı `*>` ile dosyaya, sonra `CIKIS` satırı): **SONUÇ: temiz · CIKIS 0** (sayısal çıkış kodu 0). D1 306 sahipsiz (=beklenen), D2 760 kırılma 0 açık, D4/4c 0, D8a 270 (tavan 270), D8b 0; `2sk` 5927>5892 uyarısı tabanda da vardı. `node --check` 6 değişen dosyada exit 0 (devletler.js, kronoloji_orta_asya/ozbek/cok_rusya/cok_orta_asya2, yerlesimler_ek15/ok107). `odak_olc` ÇÖZÜLMEYEN: 1. turda 0 (2. turda yer_id/odak_yer değişmedi).

## Yazılan düzeltmeler (1. tur: 3 madde/künye; 3 dosya)
| # | dosya | değişiklik | kaynak (okundu) |
|---|---|---|---|
| D1 (GERİ ALINDI, bkz. E0) | `data/kronoloji_orta_asya.js` (Sibirya Kazakları nizamnamesi, `taraflar:["kazak-hanligi"]`) | `t` 1822-06-22 → **1822-08-03**; `d` metni «22 Temmuz 1822 (Jülyen; Gregoryen 3 Ağustos)»; `kaynak` ve `ic_not_t` eklendi | Мырзатаева З.Б., Каримова А.Е., Абдрахманов Б.Н., *Вестник КазНПУ им. Абая*, 2024, №83(4), DOI 10.51889/2959-6017.2024.83.4.005: «22 июля 1822 года был введен «Устав о сибирских киргизах»». TDV `kazaklar` yalnız 1822 yılı. |
| D2 | `data/devletler.js` `transkaspi-hukumeti` | `f` 1918-01-01 → **1918-07-14**; `t` boş (güncel gibi) → **1920-01-01** (yalnız yıl); `ic_not_f`/`ic_not_t`, `kaynak`, `ozet` | M. Sargent, *British Military Involvement in Transcaspia (1918-1919)*, ARAG Caucasus Series 04/02, 2004, s. 10 («12 July 1918 … Two days later a government was formed in Ashkhabad») ve s. 33 («occupied by the Bolshevik forces in 1920») |
| D3 | `data/kronoloji_ozbek.js` (Hive, 1920-02-02) | yalnız `kaynak:` jenerik «standart akademik kaynak (Cambridge…)» → TDV `hive-hanligi` (gövde okundu: «2 Şubat 1920») | TDV Hîve Hanlığı |
| D4 | `data/devletler.js` `buhara-halk-cumhuriyeti`, `harezm-halk-cumhuriyeti` | boş `tur:` → `sovyet-cumhuriyeti` (turkistan-ossc ile aynı değer) | künye adları |

### Etki ve beyan
- **Çeviri**: D1'de madde metni (`d`) değişti. `KRONOLOJI_ORTA_ASYA:1822-06-22:<idx>` anahtarı hiçbir `ceviri_*_olay_*.js`'te yok ve `olay_taraf.js`'te `1822-06-22|…` anahtarı yok (grep: yalnız kaynak ve `paket_12.js`) → taşınacak anahtar yok; çeviri hash'i bayatlaması yok. Çeviri yenilemesi KASA'nın.
- **Üretilmiş dosyalar**: `paket_12.js` (kronoloji) ve `paket_kunye.json` (künye) **eski kalır**; KASA `py arac/paketle.py yenile` + `surum_damgala` koşturacak (bu oturum koşturmadı: brif yasağı).
- **D2 (Değişmez 2)**: D1 maddesi yer ve devletle D2 kırılması taşımıyor (kazak-hanligi pencerelerinde 1822 kırılması yok); transkaspi-hukumeti hiçbir yerleşim penceresinde sahip değil, D4/D4c için konu yok.
- **D4c**: `transkaspi-hukumeti` `t` artık 1920-01-01 ⇒ künye ömrü sonlu; yerleşim penceresi bu künyeye yazılmadığından aşım yok.

## Ölçüm: önce / sonra
| denetim | önce (origin/main tabanı) | sonra (bu dal) |
|---|---|---|
| `py arac/odak_olc.py` ÇÖZÜLMEYEN ODAK ATFI | 0 | 0 |
| `py arac/denetle.py` SONUÇ | «SONUÇ: temiz» (5927>5892 `2sk` uyarısı tabanda mevcut, ihlal değil) | «SONUÇ: temiz» (aynı uyarı) |
| `node --check` değişen 3 dosya | — | 3/3 exit 0 |
| Değişmez 2 | 760 kırılma, 0 açık | 760 kırılma, 0 açık |
| Değişmez 4c / 4 | 0 / 0 | 0 / 0 |
| Değişmez 8a/8b | 270 (tavan 270) / 0 | 270 / 0 |
Not: `denetle` iki koşuda da `py arac/denetle.py` çıktısının son satırı «SONUÇ: temiz»; Windows'ta arka plan sürecinin **çıkış kodu doğrudan yakalanmadı** (dosyaya yönlendirilen süreç; ilk koşunun python alt süreci çıktıdan sonra kapanmadığı için `taskkill /F` ile sonlandırıldı) → çıkış kodu "ölçülmedi", hüküm çıktının SONUÇ satırından. Ana checkout'ta Değişmez 8 ölçülemez; bu worktree'de ölçüldü.

## Karar bekleyen (yazılmadı; gerekçeleri adım 2-3)
| no | konu | neden yazılmadı | gereken |
|---|---|---|---|
| C1 | Merv 1510-12-01/02 (TDV: ölüm 1 Aralık 1510) | 1510-12-02 kırılması `yerlesimler.js` + yama dosyalarında ~60 pencerede; çelişki `savas_kunye_3.js`'te beyanlı; TDV savaş günü vermiyor; ikinci okunmuş kaynak yok | KASA/koşu sonrası, ≥2 okunmuş kaynak (Savory-Iranica, Savory *Iran under the Safavids*) |
| T1 | Hive düşüşü 1873-05-29 (Jülyen?) ↔ antlaşma 24 Ağustos (Gregoryen) | çevirmek ≥2 okunmuş kaynak ister; TDV tarihi okundu ama takvimini belirtmiyor; Rusça kaynaklar okunmadı | Gródekov/Becker veya Rus akademik kaynak okuması |
| T2 | Perovsky 1839 (14 Kasım / 5 Aralık) | aynı | aynı |
| T3 | Taşkent 1865-06-17 ↔ madde 06-29; Rusça 15 Haziran | yerleşim dosyası kuyruğu K6 | kaynak + KASA |
| T5/K11 | Hokand 1876-02-19; Andican 8 Ocak; Taşkent hokand 1808/1809 | TDV gün vermiyor; kuyruk | kaynak |
| T7 | Çandavar 1193/1194 | Hint bölgesi; okunmadı | ilgili bölge ajanı |
| K1-K5 | yakub-beg 1864-06-04, cungar 1759, durrani 1747-06-20, altinorda 1502-03-01, Semerkant 1500/1501 | yerleşim dosyaları; kaynak okunmadı | koşu sonrası kaynakla (kuyruk dosyası) |
| T9 | 12 atlas-içi + 26 jenerik kaynaklı madde | kaynağı adlandırmak için cilt/sayfa okuması şart | Orta Asya akademik literatür (CHCA, Bartold) okuması |
| B | Mükerrer künye çiftleri (kerait/kerayit, nayman/naiman, xueyantuo, afrigid) | kimlik değiştirilmez; kararı KASA verir | `selef/halef` ya da bk notu |
| D | Eksik künye adayları (Yüeçi, Wusun, Kangju, Sûfî Hârizm, Turfan/Kumul Hanlığı, Âfâkî Hocalar, Kunduz Hanlığı) | kaynaklı f/t yok | TDV + akademik okuma; `kunduz-hanligi` tanımsız taraf id'si ayrı düzeltme (künye ekle ya da taraf kaldır) |
| E | Eksik 12+ yerleşim, Fergana enklavları | kaynaksız koordinat/pencere yazılmaz | kuyruk K7 |

## Dürüst sınırlar (özet)
- 881 maddenin **tamamı** bağımsız ikinci kaynakla teyit EDİLMEDİ: kaynak alanı sınıflandı (TDV adıyla 721, diğer akademik 122, atlas-içi 12, jenerik 26); okunan TDV sayfaları: seybani-han, seybaniler, hive-hanligi, hokand-hanligi, buhara-hanligi (kısmî), yakub-bey (yanlış madde, Germiyan Yâkub Bey; `yakub-beg` slug'ı ayrıca aranmadı). TDV `kasgar`, `turkistan`, `altin-orda`, `kazaklar`, `kazakistan`, `turkmenler` bu oturumda okunmadı.
- Web arama özetleri (Wikipedia yansıları, bigenc.ru, booksite.ru) kaynak sayılmadı, yalnız ipucu.
- Boşluk doldurma merdiveni (Pamir/Bedahşan/Hârizm Sûfîler/Kaşgar 1211-1218 vb.) uygulanmadı: kaynak okunmadı.

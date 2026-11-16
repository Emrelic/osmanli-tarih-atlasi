# BOLGE-ISKANDINAV — Adım 1: Künye envanteri (UMIT, 15 Kasım 2026, dal umit-1115c-iskandinav)

Taban: `origin/kasa-1115-umit-birlesim` (418349d70). Ölçüm: `node` ile `data/devletler.js` + `girdi.yukle()` (5644 nokta), ağaç = bu dal.

## Ölçülen
- Bölgeyle ilişkili künye: **~50** (kuzey-avrupa 19 + Baltık/Livonya + Prusya/Kuzey Almanya kıyısı + dış kolonyal kollar).
- Bölge kutusunda (lat 54.3-71.5, lon 4-32.5) yerleşim: **128** (İsveç 41, Norveç 22, Danimarka 21, Finlandiya 24, Baltık+Livonya ~20).
- Kronoloji madde sayıları (künye içi): İsveç-öncesi 12, İsveç 8, Danimarka 10→11 (bu dalda +1), Norveç-Krallığı 5, Teuton 20, Livonya Tarikatı 10, Kurland 11, Fin Büyük Dükalığı 8, Riga Başpiskoposluğu 4→5.

## Künye listesi (id · f · t · harita · yerleşimli mi)
| id | f | t | boya | `s:` penceresi taşıyan yerleşim |
|---|---|---|---|---|
| isvec-birlik-oncesi | 1000-01-01 | 1523-06-06 | isvec | 44 |
| isvec | 1523-06-06 | (açık) | isvec | 65 |
| danimarka-erken | 0804-01-01 | 0950-01-01 | — | **0** |
| danimarka | 0950-01-01 | (açık) | danimarka | 58 |
| norvec-kralligi | 0872-01-01 | 1537-01-01 | BOYALAR | 23 |
| norvec-1814 / -isvec-birligi / norvec | 1814-02-19 / 1814-11-04 / 1905-06-07 | | norvec | 20 / 20 / 21 |
| izlanda-serbest-devleti, izlanda-norvec-danimarka, izlanda | 0930 / 1262 / 1918-12-01 | | | 4 / 4 / 4 |
| finlandiya-buyuk-dukaligi, finlandiya | 1809-09-17 / 1917-12-06 | | | 21 / 24 |
| livonya-tarikati | 1202-01-01 | 1561-11-28 | BOYALAR | 15 |
| teuton-devleti | 1230-01-01 | 1525-04-08 | BOYALAR | 6 |
| riga-baspiskoposlugu | **1201-01-01 (bu dalda; eski 1255-01-01)** | 1562-01-01 | BOYALAR | 2 |
| riga-hur-sehri | 1561-11-28 | 1581-01-01 | BOYALAR | 1 |
| kurland-dukaligi | 1561-11-28 | 1795-03-28 | BOYALAR | 3 |
| estonya / letonya / litvanya (+ -yeniden) | 1918 / 1991 | | | 5/8/6 (+4/7/4) |
| litvanya-buyuk-dukalik | 1236-01-01 | 1569-07-01 | BOYALAR | 53 |
| schleswig-holstein | 1460-03-05 | 1864-10-30 | BOYALAR | 6 |
| schleswig-holstein-1848 | 1848-03-24 | 1851-01-15 | — | **0** |
| hanse-birligi | 1358 | 1669 | — | **0** (federasyon; toprak boyası yok) |
| svalbard | 1925-08-14 | (açık) | — | **0** |
| kraliyet-prusyasi | 1466-10-19 | 1772-09-13 | BOYALAR (paylaşımlı #f04766) | **0** |
| orkney-kontlugu, feroe-adalari | | | | 4 / 3 |

`arac/renkler.py BOYALAR`da tanımsız `d:` kimliği: **0** (bölge künyelerinin hepsi kontrol edildi).

## (A) Yerleşimsiz künyeler — neden YAZILMADI
- **danimarka-erken (804-950):** tek aday Hedeby (54.491, 9.565) `yerlesimler_once1281_yt_avrupa.js`te `s:`siz (önce-1281 geriye zincir mekanizması). Pencere eklemek o dosyanın tasarımına karışır; 804-950 sınır günleri için bu dalda kaynak okunmadı → **bulunamadı/yazılmadı**.
- **schleswig-holstein-1848 (1848-03-24→1851-01-15):** Geçici hükûmetin fiilî toprağı (Holstein + Schleswig'in hangi ilçeleri, hangi gün) kaynakta okunmadı; Kiel/Flensburg pencerelerini kesmek ilk yerleşimlerin Değişmez 2 borcunu açar. Yazılmadı.
- **hanse-birligi:** toprak devleti değil, şehirler birliği; boyasız, yerleşim penceresi yazılmaz (Lübeck/Hamburg künyeleri Almanya bölgesinin).
- **svalbard (1925-08-14):** öncesi sahipsiz arazi (terra nullius); yerleşim kaydı yok; yazılmadı.
- **kraliyet-prusyasi (1466-10-19→1772-09-13):** Elbing/Toruń/Gdańsk atlasta `polonya-erken`/`lehistan`/`teuton-devleti` zinciriyle gidiyor; künye ile yerleşim zinciri çelişiyor (bkz. Adım 6, `YERLESIMLER-JS-KUYRUK-1115c-iskandinav.md` K9).

## (B) Eksik devlet adayları (kaynak gerekli; bu dalda künye YAZILMADI)
| aday | f/t (aday) | atlasta karşılığı | hüküm |
|---|---|---|---|
| Kalmar Birliği | 1397-06-17 → 1523-06-06 | kronolojide birleşme/ayrılma maddeleri var (isvec-birlik-oncesi, norvec-kralligi); harita her üç krallığı ayrı boyar | künye gerekmez (kişisel birlik); mevcut yaklaşım doğru |
| Livonya Konfederasyonu | 1435 → 1561 | livonya-tarikati içine yutulmuş (madde 1435-01-01) | boya aynı; ayrı künye talebi yok |
| Danimarka Estonya'sı (Estonya Dükalığı) | 1219 → 1346-11-01 | Tallinn/Narva `s:` d:"danimarka" | künye yok, yerleşim zincirleri danimarka'ya bağlı — kabul |
| Ösel-Wiek / Kuronya / Dorpat piskoposlukları | 1228-1560 | yerleşim yok (Kuressaare, Haapsalu, Tartu piskoposluğu) | **boşluk**: Tartu 1224-1558 livonya-tarikati yazılı; piskoposluk ayrımı yapılmamış (lex.dk: 'piskoposluk') |
| İsveç Livonyası / İsveç Estonyası | 1561 → 1721-09-10 | `d:"isvec"` zinciri | ayrı künye gerekmez |
| Finlandiya (İsveç dönemi) | — | isvec-birlik-oncesi + isvec | doğru modellenmiş |
| Memel/Klaipėda Bölgesi | 1920-01-10 → 1923-02-16 | `d:"itilaf-emaneti"` + `devletler.js` kaydı `Memel (Klaipėda) Bölgesi` mevcut | tamam |
| Grönland 1450-1814 arası | norse-gronland t 1450-01-01, gronland-dan f 1814-01-14 | **~364 yıllık sahipsiz künye aralığı** (Grönland yerleşimleri Bölge dışı) | Emre/KASA kararı: Danimarka-Norveç tacı 1537'den, Egede 1721 — kaynak okunmadı |

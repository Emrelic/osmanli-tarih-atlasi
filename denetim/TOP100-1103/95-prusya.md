# 95 · Prusya / Alman İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (ölçer: top100_olc.py; salt okuma)

## Özet
- Künye: 4 asıl (`brandenburg-prusya`, `prusya-dukaligi`, `prusya`, `almanya`'nın 1871-1918 dilimi) + ilişkili 5 (`brandenburg-markgrafligi`, `kraliyet-prusyasi`, `alman-konfederasyonu` 0 yerleşim, `elsass-lothringen` 0 yerleşim, `teuton-devleti`/`teuton-sovalyeleri`). **Alman İmparatorluğu (1871-1918) için AYRI KÜNYE YOK**; `almanya` künyesinin içinde (32 numaralı dosyadaki bölünme önerisiyle aynı konu; burada çelişki yaratılmadı).
- Açık kırılma: `prusya` 2 · `brandenburg-prusya` 3 · `prusya-dukaligi` 0 · `almanya` 57 (bunların 18'i 1871-1918 Alman İmparatorluğu dilimi; ayrıntı 32'de). "Yalnız otomatik maddeyle kapanan": 0.
- Eksik kronoloji maddesi (Değişmez 2 evreninde): 9 öneri (Stockholm 1720, Hannover/Kurhessen/Nassau/Frankfurt 1866, Silezya savaşları 3 uç, Magdeburg 1680, Brandenburg Kur 1417, Prusya'nın sonu 1918/1947).
- En ağır 3 bulgu: (1) **MÜKERRER**: `brandenburg-markgrafligi` (1157→1701-01-01) ile `brandenburg-prusya` (1415→1701-01-18) aynı polity/aynı toprakta çakışıyor; `teuton-devleti` ile `teuton-sovalyeleri` aynı f/t'li ikiz. (2) 1866 ilhakları eksik: yalnız Hannover `prusya`ya geçiyor; Kassel (Kurhessen) ve Frankfurt `almanya`da kalıyor, Schleswig-Holstein 1864'ten `almanya`; ilgili madde yok. (3) `prusya` künyesi 1871'de bitiyor ama Prusya devleti 1918'e (krallık) ve 25 Şubat 1947'ye (Hür Devlet) dek sürdü — "künye t = harita sahipliği devri" olduğu beyan edilmemiş.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| teuton-devleti | Töton Şövalyeleri Devleti (Prusya) | 1230-01-01 | 1525-04-08 | öncül; **MÜKERRER** `teuton-sovalyeleri` ile |
| teuton-sovalyeleri | Töton Tarikatı Devleti (Prusya'da) | 1230-01-01 | 1525-04-08 | **MÜKERRER** (aynı f/t, aynı polity, farklı id) |
| brandenburg-markgrafligi | Brandenburg Markgraflığı (Askanier, Elektörlük) | 1157-01-01 | 1701-01-01 | **MÜKERRER/çakışma** `brandenburg-prusya` ile 1415-1701 (t'ler de farklı: 01-01 vs 01-18) |
| brandenburg-prusya | Brandenburg Elektörlüğü (Hohenzollern) | 1415-01-01 | 1701-01-18 | var; 2 yerleşim (Berlin, Magdeburg) |
| prusya-dukaligi | Prusya Dükalığı | 1525-04-08 | 1701-01-18 | var; 2 yerleşim |
| kraliyet-prusyasi | Kraliyet (Polonya) Prusyası | 1466-10-19 | 1772-09-13 | ilişkili, kapsam dışı |
| prusya | Prusya Krallığı | 1701-01-18 | 1871-01-18 | var; en geniş 1869: 27 yerleşim |
| alman-konfederasyonu | Alman Konfederasyonu | (bkz. devletler.js:14042) | 1866 | 0 yerleşim — haritada görünmüyor (çatı `almanya`) |
| almanya | Almanya (Kutsal Roma 962-1806) — içinde Alman İmparatorluğu | 0962-02-02 | 1945-06-05 | **Alman İmparatorluğu AYRI KÜNYE YOK**; 1871-01-18 → 1918-11-09 dilimi `almanya` s:'lerinde |
| elsass-lothringen | Alsas-Loren İmparatorluk Bölgesi | 1871-05-10 | 1918-11-11 | 0 yerleşim; Colmar/Metz/Mulhouse/Strazburg 1871-05-10 → 1918-11-17..21 `almanya` sahibi (4 dilim) — künye t (11-11) ile yerleşim ucu (11-17..21) uyuşmuyor |
Eksik evre: Prusya Hür Devleti (1918-11-09 → 1947-02-25) künyesiz (`almanya` içinde; haritada ayrı boyanması gerekmiyor, yalnız beyan). Ren Konfederasyonu ve Alman Konfederasyonu künyeleri 0 yerleşimli.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| prusya f | 1701-01-18 | TDV `prusya`: «Friedrich III took the royal title in Königsberg on 18 January 1701» (WebFetch özeti; 4 Kas 2026) | Treccani «Prussia»: yalnız yıl — «prese il titolo di Federico I re di Prussia» (1701). Gün için NDB 'Friedrich I.' (Oestreich 1961, gnd118535730) sayfası gün vermedi; EB1911 künyede anılıyor | DOĞRU (gün tek akademik kaynakta TDV; ikinci kaynak yalnız yıl). Takvim: Brandenburg Protestan devlet, 1700-03-01'de Gregoryene geçti → 1701 Gregoryen, hata yok | f değişmez; `ic_not_f`: "çift teyit değil: TDV gün + Treccani yıl" |
| prusya t | 1871-01-18 | TDV `prusya`: «Wilhelm I was proclaimed German Emperor at Versailles on 18 January 1871» | Treccani «Prussia»: «incoronazione a imperatore di Guglielmo I (18 genn. 1871)» | **ÇİFT TEYİT** gün doğru. AMA: bu "Prusya devletinin sonu" değil, harita sahipliğinin Alman İmparatorluğu çatısına devri | `ic_not_t` ekle: "t = sahiplik devri; Prusya Krallığı 1871'den sonra Reich içinde sürdü: TDV — monarşi Kasım 1918'de çöktü (9 Kasım cumhuriyet), 25 Şubat 1947'de Müttefik Kontrol Konseyi ile ilga; DHM LeMO: Wilhelm II feragat belgesi 28 Kasım 1918, Prusya tacını da bıraktı; Control Council Law 46 (25 Şub 1947)". Alternatif (CLAUDE.md 'aynı polity sürüyorsa künyeyi GENİŞLET'): `prusya` t = 1918-11-09; karar Emre'de, yerleşim sahipliği etkisi büyük (Berlin vb. 1871-1918 `prusya` olur, `almanya` 32'deki bölünmeyle çelişir) — **ÖNERİLMEZ**, beyan yeter |
| prusya-dukaligi f | 1525-04-08 | NDB 'Albrecht': «am 8.4.1525 … den Frieden zu Krakau» (künye alıntısı; bu turda yeniden okunmadı) | ADB aynı (künye alıntısı); EB1911 1526 (çelişki künyede beyanlı) | künye kaynaklarını bu turda yeniden OKUMADIM ("çekilemedi" değil, yapılmadı); iç tutarlılık iyi (öncül künye 1525-04-08 kronolojide) | değişmez; ikinci bağımsız kaynak (NDB+ADB aynı kaynak zinciri) için bkz. Erişilemeyen |
| prusya-dukaligi t | 1701-01-18 | = prusya f | | doğru (ardıl, boşluk yok) | — |
| brandenburg-prusya f | 1415-01-01 (yıl hassasiyeti) | NDB sfz52985 (WebFetch, 4 Kas): «Am 18.4.1417 belehnte ihn Sigmund auf dem Konzil von Konstanz» + «allgemeine Huldigung auf dem Landtag zu Berlin (1415)» | ADB (aynı sayfa): 8 Temmuz 1411 yönetim yetkisi «mit alleinigem Vorbehalt der kurfürstlichen Würde»; «am 30. April vollzog der König eine Urkunde» (Markgraf unvanı + Erzkämmerer; yıl bağlamdan 1415; Kur oyu yok) | **KÜNYE ADI "Elektörlük" ama 1415 Kur'u vermiyor**: Kur belehnung 1417-04-18. 1415-01-01 yıl-only → gün uydurma değil ama kaynakla güçlendirilebilir | f = `1417-04-18` (Kur = künye kimliği; `ic_not_f`: 1411-07-08 yönetim / 1415-04-30 Markgraf unvanı / 1417-04-18 Kur) VEYA f=`1415-04-30` + beyan. Berlin/Magdeburg'un sahipliği ayrıca `brandenburg-markgrafligi` ile çakıştığı için önce MÜKERRER çözülmeli |
| brandenburg-prusya t | 1701-01-18 | = prusya f | | doğru; `brandenburg-markgrafligi` t=1701-01-01 ⇒ 17 gün tutarsız | markgraflığı künyesinin t'sini 1701-01-18'e çek veya künyeyi birleştir |

## c) Kronoloji
Var olanlar (Değişmez 2 evreni):
- 1701-01-18 Prusya Krallığı — `data/olaylar_ek20.js:321` (yer_id Königsberg; TDV ile aynı gün ✔).
- 1742-06-11 Breslau ön barışı — `data/kronoloji_sinir_avrupa_orta.js:30` (Silezya; tarih doğru: Breslau ön barışı 11 Haziran 1742, Berlin kesin barışı 28 Temmuz 1742 — ikincisi YOK).
- 1772-08-05 I. Paylaşım — `data/olaylar_ek16.js:190`; 1793-01-23 II. Paylaşım — `olaylar_ek16.js:198` (takvim notu künyede); 1795-10-24 III. Paylaşım — `olaylar_ek16.js:206`; 1797-01-26 — `kronoloji_sinir_avrupa_orta.js:34`.
- 1790-01-31 Osmanlı-Prusya İttifakı — `data/olaylar_ek5.js:317` (TDV: «31 Ocak 1790» ✔).
- 1807-07-09 Tilsit — `data/olaylar_ek20.js:332` (TDV ve Treccani yıl; TDV 9 Temmuz ✔).
- 1815-06-09 Viyana Nihai Senedi — `olaylar_ek16.js:304`; 1871-01-18 Alman İmparatorluğu — `kronoloji_sinir_avrupa_bati.js:606-610` (yer_id Köln; Berlin/Breslau/Gdansk/Elbing yerleşimlerini kapsamıyor — 32'deki öneri geçerli).
- 1866-07-03 Königgrätz `olaylar_avmac_final_1029.js:5`; 1866-08-23 Prag Barışı `olaylar_avmac_final_1029.js:6`.
- Evren DIŞI (yalnız künye içi): `prusya` künyesinin 6 maddesi (devletler.js:5008-5013), `prusya-dukaligi` 1525-04-08/04-10/1568/1618-08-27/1656-01-17/1656-11-20 (devletler.js:10079-10084).

Eksikler — önerilen satırlar (kaynak "ARANACAK" = dayanak bu turda okunmadı; gün atlas verisinden değil, aşağıdaki not edilen kaynaktan):
```
{ t:"1720-02-01", b:"Stockholm Antlaşması (İsveç-Prusya): Stettin ve Güney Pomeranya Prusya'ya geçti", tur:"antlasma", yer_id:"Stettin (Szczecin)",
  kaynak:"Camden Third Series (Cambridge Core): «21 January/1 February 1720» (Jülyen/Gregoryen çift tarih; İsveç 1720'de Jülyen) · TAKVİM: kaynak 21 Ocak Jülyen yazıyorsa HATA, Gregoryen karşılığı 1 Şubat; atlas s: 1720-02-01 ile uyumlu. Yürürlük 29 Mayıs 1720 Prusya patenti (aynı kaynak). ARANACAK: ikinci akademik" }
{ t:"1866-10-01", b:"Hannover Krallığı Prusya'ya ilhak edildi (Hannover Eyaleti); Kurhessen, Nassau, Frankfurt aynı ilhak dalgası", tur:"toprak-kazanc", yer_id:"Hannover",
  kaynak:"DHM LeMO 'Die preußischen Annexionen 1866': «am 1. Oktober 1866 … Provinz Hannover» (Prusya anayasası getirildi); Nassau için Wiesbaden Stadtlexikon: ilhak patenti 3 Ekim 1866 (Babelsberg), ilan 9 Ekim; Prag Barışı 23 Ağustos 1866. İki kaynak 1-3 Ekim arasında; Hannover için DHM esas" }
{ t:"1740-12-16", b:"I. Silezya Savaşı: II. Friedrich Silezya'ya girdi", yer_id:"Breslau (Wrocław)", kaynak:"ARANACAK (gün bu turda doğrulanmadı)" }
{ t:"1742-07-28", b:"Berlin Barışı: Silezya (Glatz dahil) Prusya'ya kesinleşti", yer_id:"Breslau (Wrocław)", kaynak:"ARANACAK" }
{ t:"1763-02-15", b:"Hubertusburg Barışı: Yedi Yıl Savaşları bitti, Silezya Prusya'da kaldı", yer_id:"Breslau (Wrocław)", kaynak:"ARANACAK" }
{ t:"1417-04-18", b:"Sigismund Konstanz'da Friedrich VI'yı Brandenburg Elektörü olarak tımarlandırdı", yer_id:"Berlin", kaynak:"NDB sfz52985: «Am 18.4.1417 belehnte ihn Sigmund auf dem Konzil von Konstanz»; ADB: Kurfürstenthum Belehnung" }
{ t:"1680-06-04", b:"Magdeburg Dükalığı Brandenburg'a geçti (Vestfalya 1648 hükmü; August'un ölümü)", yer_id:"Magdeburg", kaynak:"ARANACAK (atlas s: yalnız 1680-01-01 yıl; gün/yıl doğrulanmadı — bu satırdaki 06-04 de hafızadandır, DOĞRULANMADI)" }
{ t:"1918-11-09", b:"Prusya'da monarşi çöktü; Wilhelm II'nin Prusya tahtından feragat belgesi 28 Kasım 1918", tur:"son", yer_id:"Berlin", kaynak:"TDV prusya: «monarchy fell in November 1918, republic declared 9 November»; DHM LeMO: feragat belgesi 28 Kasım (Prusya tacı dahil)" }
{ t:"1947-02-25", b:"Müttefik Kontrol Konseyi 46 sayılı Kanunla Prusya Devleti'ni ilga etti", tur:"son", yer_id:"Berlin", kaynak:"TDV prusya: 25 Şubat 1947; Control Council Law 46 (FRUS 1947 v.2 d327 anıyor; metin Germany 1947-49 s.151)" }
```
Not: Silezya (3 satır) ve Magdeburg 1680 günleri hafızadandır, "ARANACAK" işaretlidir; kaynak bulunmadan uygulanmamalı. Hiçbir tarih atlasın kendi künyesine dayandırılmadı.

## d) Harita uyumu
`prusya`: 14 kırılma, **açık 2** (+0 otomatik): 
| gün | yerleşim | öneri |
|---|---|---|
| 1720-02-01 | Stettin (Szczecin) | Stockholm Antlaşması maddesi (yukarıda). Ölçer en yakını "Sardinya" gösterdi (31 g) — alâkasız |
| 1866-10-01 | Hannover | Hannover ilhak maddesi (yukarıda) |
`brandenburg-prusya`: 3 kırılma, **açık 3**: 1415-01-01 Berlin (madde yok → 1417-04-18 önerisi ve f değişikliği), 1680-01-01 Magdeburg (madde yok; gün "yıl" hassasiyetinde, doğrulanmadı), 1701-01-18 Berlin+Magdeburg kaybı (madde var `olaylar_ek20.js:321` ama yer_id Königsberg ⇒ `odak_yer:["Königsberg","Berlin","Magdeburg"]` ekle).
`prusya-dukaligi`: 2 kırılma, açık 0.
`almanya` içindeki Alman İmparatorluğu dilimi (18 açık, ayrıntı ve 57'nin tamamı 32-almanya-kutsal-roma.md'de): 1871-01-18 Berlin/Breslau/Elbing/Gdansk (madde var, yer_id Köln: `odak_yer` ekle) · 1871-05-10 Colmar/Metz/Mulhouse/Strazburg (**madde YOK**: Frankfurt Barışı 10 Mayıs 1871; kaynak ARANACAK) · 1883-05-01 / 1884-08-07 Lüderitz · 1884-11-03 Finschhafen vb. · 1885-10-15 Jaluit · 1888-10-01 Nauru · 1898-03-06 Qingdao (Kiautschou kira sözleşmesi 6 Mart 1898 — doğrulanmadı) · 1899-10-12 Kolonia/Koror · 1899-11-17 Saipan/Tinian · 1900-01-01 Kavieng · 1900-03-01 Apia · 1905-01-01 Kieta · 1906-01-01 Aitape · 1911-01-01 Lorengau · 1914-08-29 Apia kaybı · 1914-12-09 Kieta · 1918-02-16 Kaunas/Vilnius. Çoğu sömürge maddesi atlasın evreninde yok; bunların günleri yerleşim s: kaydındaki kaynaklardan okunup madde yapılmalı (kendi bulduğum kaynak YOK).
En geniş dönem sahiplik uyumu (`prusya` 1869, 27 yerleşim): Köln, Aachen (1815-06-09'dan) ✔; Königsberg, Berlin, Magdeburg, Gdansk (1793-01-23/1814-02-04) ✔; Breslau 1742-06-11 ✔; Hannover 1866-10-01 ✔. **Eksik/uyumsuz:** Kassel ve Frankfurt `almanya` s:'inde pre-1945 boyunca `almanya` (Kurhessen/Hessen-Kassel ve Frankfurt Hür Şehri 1866 Prusya ilhakı yansımıyor; Frankfurt TDV/DHM: Prusya sivil idaresi 28 Temmuz 1866, Hessen-Nassau'ya Mart 1867); Schleswig-Holstein (Kiel/Flensburg/Haderslev/Aabenraa) 1864-10-30'dan `almanya` (Avusturya-Prusya ortak idaresi 1864-1866, Prusya ilhakı 1866 sonrası) — doğrulanmadı. Öneri: bu yerleşimlere 1866-10-01 (Kassel, Frankfurt; kaynak DHM + Wiesbaden Stadtlexikon) ve Prusya eyaleti kuruluşu için ARANACAK kaynaklı `prusya` dilimleri.
**1923-10-29 eski ufuk izi:** `prusya`/`almanya`/`brandenburg-*` yerleşimlerinde 1923-10-29 sahiplik kırılması BULUNMADI (grep `yerlesimler*.js`).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js`: `brandenburg-markgrafligi` ile `brandenburg-prusya` birleştirme/çakışma kararı (MÜKERRER); `teuton-devleti`/`teuton-sovalyeleri` birleştir (MÜKERRER) — Emre/KASA kararı, tavan ve renk (tuz) işi.
2. `devletler.js` `prusya`: `ic_not_t` ekle (sahiplik devri beyanı, TDV + DHM + Control Council Law 46). `brandenburg-prusya` f için 1417-04-18 (veya 1415-04-30 + beyan).
3. `data/olaylar_ek20.js:321` 1701 maddesine `odak_yer:["Königsberg","Berlin","Magdeburg"]`; `kronoloji_sinir_avrupa_bati.js:606` 1871 maddesine `odak_yer:["Berlin","Breslau (Wrocław)","Gdansk","Elbing (Elbląg)"]` (32 ile aynı; çift yazma).
4. Yeni madde dosyası (ör. `data/olaylar_prusya_1104.js`): 1720-02-01, 1866-10-01, 1417-04-18, 1918-11-09, 1947-02-25 (kaynaklı olanlar); Silezya uçları ve Magdeburg 1680 için önce kaynak.
5. Yerleşim: Kassel, Frankfurt `s:` 1866-10-01 → 1871-01-18 `prusya`; Schleswig-Holstein yerleşimleri için gün kaynağı bulunmadan dokunma.
6. 32 ile koordinasyon: `almanya` bölünürse `alman-imparatorlugu` künyesi 1871-01-18 başlar = `prusya` t ile bitişik (çelişki yok); `elsass-lothringen` (0 yerleşim) ya silinir ya da Alsas-Loren yerleşimleri ona taşınır (künye t 1918-11-11 ≠ yerleşim ucu 11-17..21).

## Erişilemeyen kaynaklar
- NDB 'Friedrich I.' (Oestreich 1961) tam metni — https://www.deutsche-biographie.de/gnd118535730.html — soru: kralık töreni gün/ay (18.1.1701)? Sayfa bu turda gün vermedi.
- NDB/ADB 'Albrecht (Preußen)' — soru: Krakov Barışı 8 Nisan 1525 günü ikinci bağımsız kaynakta (örn. Cambridge New Modern History vol. II / Treccani 'Alberto di Brandeburgo').
- Silezya savaşları günleri (1740-12-16, 1742-07-28, 1763-02-15): Cambridge Modern History / Treccani 'Slesia, Guerre di' — çekilemedi.
- Frankfurt Barışı 10 Mayıs 1871 metni (Avalon/Digithèque MJP) — soru: Alsas-Loren devir günü.
- Preußische Gesetzsammlung 1866: 20 Eylül 1866 ilhak kanunu ve 3 Ekim patent; soru: Hannover/Kurhessen/Nassau/Frankfurt için yürürlük günü (DHM: 1 Ekim yalnız Hannover).
- Control Council Law 46 metni (Germany 1947-1949, s.151; Ruhm von Oppen s.210-211) — soru: yürürlük 25 Şubat 1947 (arama özeti: "effective on the day of signature").
- JSTOR: Peter H. Wilson / Christopher Clark'ın Prusya monografileri (Clark, *Iron Kingdom*, 2006) — soru: 1701-01-18 ve 1815/1866 devir günleri.

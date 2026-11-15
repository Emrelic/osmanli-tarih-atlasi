# BOLGE-almanya · İkinci tur (UMIT, 15 Kasım 2026) — çelişki çözümü, çift teyit, yeni maddeler

Bu belge adım 7'deki "0 düzeltme" hükmünü geçersiz kılar. Okunan = tam metin (sayfa gövdesi) okundu; "özet" = arama özeti (sayılmadı).

## A. Çözülen çelişkiler (veri dosyasına yazıldı)
| Konu | Eski | Yeni | Kaynak (okundu) | Karar |
|---|---|---|---|---|
| Hanse künyesi `f` ve künye-içi ilk Hansetag | 1356-02-02 (Wikipedia) | **1358-01-01** | HGV Lexikon «Hansetag, Erster» + «Hansetage» (hansischergeschichtsverein.de/lexikon?buchstabe=h): iki aday toplantı (Şubat 1356 yalnız Wend şehirleri; Ocak 1358 Wend+Sakson+Prusya, Flandern ablukası, ilk «stede van der dudeschen hense»); baskın görüş 1358; gün YOK | gün kaynakta olmadığı için YYYY-01-01 (yıl/ay teyitli, gün teyitsiz). İkinci bağımsız akademik kaynak okunamadı (Hanserecesse I archive.org tam metni açılmadı; bir seminer ödevi 20 Ocak 1358 diyor — akademik sayılmadı). |
| KRONOLOJI_ALMANYA «ilk genel Hansetag» | 1356-11-24 (Schulze, "gün belirsiz") | **1358-01-01** | aynı | Kasım 1356 hiçbir akademik kaynakta yoktu; Lexikon Şubat 1356 ya da Ocak 1358 der. |
| Tirol Kontluğu sonu (devletler.js `tirol-kontlugu` künye-içi) | 1363-01-01 (onyıl/yıl) | **1363-01-26** | Tiroler Landesarchiv «Margarethe Maultasch übergibt die Grafschaft Tirol an die Habsburger (1363)» (PDF, okundu): «26. Jänner 1363 in Bozen … Urkunde ausgefertigt»; ADB «Margaretha Maultasch» (okundu): «Am 26. Januar 1363 übergab M. den Herzogen von Oesterreich» | ÇİFT TEYİT; künye `t` zaten 1363-01-26 idi, madde ile uyuştu. (Bozen'de ayrıca 2 Eylül 1363 vâliliğin bırakılması, 29 Eylül 1363 başka kaynak.) |
| Luther Worms reddi | 1521-04-17 | **1521-04-18** | ADB «Luther, Martin» (okundu): ilk gün (17) bedenkzeit, «Tags darauf erklärte er in einer längeren Rede, daß er … widerrufen könne» nein; MKL1888 «Luther»: «zweimaliges Erscheinen … 17. und 18. April, endigend mit … Ablehnung des geforderten Widerrufs» | Çift teyit (iki ansiklopedik/akademik 19. yy.); Reichstagsakten (RTA JR II) tam metni açılamadı → "okunmadı". |

Çeviri/OLAY_TARAF anahtarı: bu dört madde KRONOLOJI_ALMANYA/devletler.js künye-içi olduğundan ceviri_*_olay_*.js anahtarı ve olay_taraf.js girdisi YOKTU (grep 0); taşınacak anahtar yok. Madde `b` metni değişmedi → çeviri hash'i bayatlamadı. Hanse künyesinin yalnız `f` günü değişti (çeviri yalnız ad).

## B. Çift teyit yazılan (kaynak alanına eklendi)
1. 1486-02-16 / 1486-04-09 / 1508-02-04 — YENİ 3 madde (bkz. C).
2. 1356-01-10 Altın Ferman — ADB + MKL1888 (10 Ocak Nürnberg ilk 23 madde; 25 Aralık Metz tam metin).
3. 1410-09-20 Sigismund'un seçilmesi (kronoloji_macaristan.js) — NDB + ADB.
4. 1363-01-26, 1521-04-18 (yukarıda).
Toplam çift teyit: 7 gün (4 mevcut + 3 yeni). Hedef ~30: ulaşılamadı; engeller: HLS 403, RI 403, Heidelberg dergileri bot koruması, archive.org PDF'leri WebFetch ile okunamıyor.

## C. Yeni maddeler (kronoloji_almanya.js, `devlet:"almanya"`, yer_id atlas adına birebir: Frankfurt, Aachen, Trento)
- 1486-02-16 Maximilian Roma Kralı seçildi (Frankfurt) — NDB «am 16.2.1486 … in Frankfurt einstimmig gewählt» + ADB «Am 16. Februar 1486 wählten zu Frankfurt …».
- 1486-04-09 Aachen'da taç — NDB «am 9. April in Aachen gekrönt» + ADB.
- 1508-02-04 Trient'te «Erwählter Römischer Kaiser» — NDB «am 4.2.1508 im Trienter Dom» + ADB (Trient 4 Şubat 1508).
(1300-1500 çukuru: 1400s 49 → 52 madde.)

## D. Çözülemeyen / okunmadı (değiştirilmedi)
- **Bern ittifakı 1353**: gün 6 mı 7 Mart mı belirsiz (Düsseldorf Lessing OCR "6. 7. März"); HLS 403. Madde 1353-01-01 kaldı.
- **Aargau fethi 1415** (2 madde, -01-01): HLS okunamadı.
- **Konstanz Konsili açılışı 1414-11-05** (KRONOLOJI_MACARISTAN): ADB yalnız ilan edilen tarih 1 Kasım 1414; NDB gün vermez; 5 Kasım yalnız 19. yy. Heilsbronn tarihi (akademik sayılmadı). Hakemli karar: mevcut kalır; 1 Kasım "planlanan", 5 Kasım "fiilen açılış" olarak literatürde yer alır (okunmadı).
- **Friedrich III imparatorluk tacı Roma 1452**: kaynaklar 16 (nişan/evlilik), 17, 19 Mart arasında çelişir (NDB yalnız yıl; evlilik 16.3.1452). Atlasta bu madde yok; eklenmedi.
- **Friedrich III kral seçimi 1440-02-02** (ADB okundu; RI Chmel özeti «Dinstag Purificationis» okunamadı, 403) ve **Aachen 1442-06-17** (ADB): tek tam metin → eklenmedi.
- **Mainz 1462-10-28** (Adolf von Nassau): ADB yalnız «Oktober 1462»; gün yalnız Wikipedia'da → eklenmedi (aday).
- **Köln Verbundbrief 1396-09-14** (Francia/Heidelberg dergisi erişim engeli, Zenodo PDF okunamadı) → aday, eklenmedi.
- **Nürnberg/Augsburg/Trier imparatorluk şehri** maddeleri: ADB/NDB'de gün hassasiyetli okunabilir kaynak bu oturumda bulunamadı → "bulunamadı".
- 97 yıl-hassasiyetli (-01-01) maddenin gün karşılığı: tek tek aranmadı (HLS/RI engeli); yalnız Bern 1353, Aargau 1415, Hansetag, Tirol incelendi.

## E. KASA'ya sorulan (silinmedi)
`lihtenstayn` (f 1719-01-23, t 2026-12-31, tur ?) ile `liechtenstein` (f 1719-01-23, t boş; 1 yerleşim) aynı polity. Hangisi kalacak? Soru: yerleşimli olan `liechtenstein` kalıp `lihtenstayn` mı silinecek, yoksa tersi mi? `lihtenstayn`'ın 8, `liechtenstein`'ın 5 künye-içi maddesi var (birleştirme ve çeviri/olay_taraf anahtar taşıması KASA'nın kararı).

## F. Ölçüm (ikinci tur sonu)
- node --check: devletler.js, kronoloji_almanya.js, kronoloji_macaristan.js temiz. odak_olc: ÇÖZÜLMEYEN ODAK ATFI 0 (yeni 3 madde sonrası).
- denetle (worktree, coz-c sonrası): çıktı ek-denetim bölümünde kesildi, ÇIKIŞ KODU OKUNAMADI -> genel hüküm OLCULMEDI. Okunan satırlar: Değişmez 1 ✓ (306 sahipsiz = beklenen), 1b ✓ 0, 2 ✓ 760 kırılma 0 açık, 2i ✓, 4/4c/4d/4s ✓ 0, 5 ✓ 0. Değişmez 8 ölçülemez (ana ağaç kuralı).

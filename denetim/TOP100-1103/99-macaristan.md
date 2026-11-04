# 99 · Macaristan Krallığı (1000-1526) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer `top100_olc.py macaristan macar-prensligi dogu-macar-kralligi`; s: dökümü `denetle.yerlesimleri_yukle`)

## Özet
- Künye 3 bu denetimin konusu: `macar-prensligi` (895-1000), `macaristan` (1000-1527), `dogu-macar-kralligi` (1526-1541; yalnız sınır). Habsburg/orta-macar yalnız sınır.
- Yerleşim: macaristan 121, macar-prensligi 1, dogu-macar **0 (haritada görünmüyor)**. Açık kırılma: macaristan **15/45**, macar-prensligi 0/2, dogu-macar ölçülemedi (0 yerleşim). Yalnız otomatik maddeyle kapanan: 0.
- **MÜKERRER/çakışma:** `macaristan` (t=1527-01-01) ile `macaristan-habsburg` (f=1526-12-17) künye düzeyinde 15 gün çakışır; `dogu-macar-kralligi` f=1526-08-29 (Mohaç günü) `macaristan` ile 3 ay çakışır.
- En ağır 3 bulgu: (1) 1526-11-10'da Erdel, Temeşvar, Peşte, Varad, Brassó, Gyulafehérvár, Haram vb. `macaristan` dönemi bitiyor ama devralan **yok** (dogu-macar-kralligi'nde 0 yerleşim; sonraki sahip 1551-1552 / 1686+) — 25 yıllık delik ya da Szapolyai toprakları kayıp. (2) `macaristan` s: dönemleri künye t'sini aşıyor (Hatvan, Vaç, Şimontorna 1544-09-01; İstolni Belgrad 1543-08-10; Kalocsa 1541; Klis 1537; Estergon, Segedin 1530; Banaluka, Yayça 1528): hayalet devlet. (3) 1000-1281 arası krallık haritada yalnız 9-12 nokta (1297: 95); Estergon, İstolni Belgrad, Peçuy, Zagreb, Eğri, Kalocsa vb. s: 1281'den başlıyor; kuruluş yılı (1000) için başkentin kendisi eksik.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| macar-prensligi | Macar Prensliği | 0895-01-01 | 1000-01-01 | 1 yerleşim ("Macaristan" noktası); t = macaristan f |
| macaristan | Macaristan Krallığı | 1000-01-01 | 1527-01-01 | ana; harita:"macaristan"; kaynak:"macaristan" (**kaynak alanı kaynak değil, id** — künyede gerçek kaynak yok; kunye ic_not/kaynak boş) |
| dogu-macar-kralligi | Doğu Macar Krallığı (Szapolyai) | 1526-08-29 | 1541-08-29 | 0 yerleşim; f Mohaç günü |
| macaristan-habsburg | (1526-1918) | 1526-12-17 | 1918-11-16 | sıra 48, yalnız sınır; harita:"macaristan" ortak |
| orta-macar-kralligi | Tököli | 1682-09-16 | 1688-01-17 | kapsam dışı |
Eksik evre: (i) Slavonya/Hırvatistan personel birliği (1091/1102) künyesiz — bu yerler `macaristan` s: içinde; (ii) Erdel Prensliği ayrı künye (`erdel`) mevcut. Habsburg `macaristan` anahtarı s:'de de kullanılıyor ama anahtar = id olduğundan ölçerde ⚠ yok.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| macaristan f | 1000-01-01 | TDV «Macaristan»: «1000-1001'de taç giyen ilk kral» (István; okundu) | Treccani «Ungheria»: taç yılı verilmez (Silvestro II'nin tacı gönderişi; okundu) | **Gün yanlış olabilir:** gelenek 25 Aralık 1000 (Noel) ya da 1 Ocak 1001. `1000-01-01` iki adaydan hiçbiri. Öneri: `1000-12-25` + ic_not "TDV 1000-1001; Noel 1000 geleneği; 1001-01-01 alternatif" (Engel 2001 / Kristó vb. okunmadı: DOĞRULA). Takvim: Jülyen kaynaktaki gibi. |
| macaristan t | 1527-01-01 | TDV «Hırvatistan» (künye alıntısı): Hırvatlar Ferdinand'ı 1527 | Treccani «Ungheria»: Mohaç «29 agosto 1526» (okundu) | 1527-01-01 = Cetin'de Hırvat soylularının Ferdinand'ı seçmesi (1 Ocak 1527; gün okunmadı, DOĞRULA). Macar kısmı için bu uç yanlış: Szapolyai 1526-11-10/11, Ferdinand 1526-12-17. Mohaç gün-bağı (BALKAN-MACAR-0081) bilinçli kaldırılmış; **öneri:** künye t = `1526-12-17` (Ferdinand seçimi, macaristan-habsburg f ile bitişik) ve Hırvat yerler s:'de ayrı `1527-01-01` ile kapansın. |
| dogu-macar f | 1526-08-29 | TDV «Macaristan»: Szapolyai 1526'da seçildi (gün yok) | künyenin kendi maddesi 1526-11-10 (olaylar/devletler:macaristan kronoloji) | f = Mohaç günü → "bir savaşın gününe bağlanmış devlet" kalıbı. Öneri f=`1526-11-10` (seçim; taç 1526-11-11, DOĞRULA). |
| dogu-macar t | 1541-08-29 | TDV «Erdel»/«Macaristan»: 1540 ölüm, 1541'de Budin | künye: Budin 1541-08-29 | kabul (Budin'in ilhakı 1541-08-29 — olaylar.js:90 yıl düzeyi `1541-08-29`); atlas dışı ikinci kaynak (Kanunî tarihleri: Budin 29 Ağustos 1541 yaygın) okunmadı. |
| macar-prensligi f/t | 0895 / 1000 | NWE «Árpád dynasty» (Vikipedi-sınıfı) | Szeged Üniv. | Honfoglalás 895-896 (evren italya_dogu_avrupa.js:18). Yıl kabul; TDV «Macaristan» f için kullanılmamış. |
Not: `macaristan` künyesinin `kaynak:"macaristan"` alanı bir kaynak değil — kuralı ihlal ("her f/t için 2 kaynak"). Önerilen kaynak: TDV «Macaristan» (okundu) + Treccani «Ungheria».

## c) Kronoloji
Var olanlar (evren): 1000 István `olaylar_ortacag_italya_dogu_avrupa.js:36`; 1038 İstván ölümü :52; 1091 Slavonya `olaylar_ortacag_bizans_balkan.js:55`; 1102 Hırvatistan/Dalmaçya :76; 1133/1164/1180 Split `kronoloji_sinir_once1281_geriye.js:264-266`; 1222 Altın Boğa :130; 1254-04-03/1260-07-12 Graz `olaylar_avmac_a_1029.js:22-23`; 1257/1272 Vidin `…geriye.js:166-167`, `bizans_balkan.js:102,111`; 1358-02-18 Zadar `olaylar_2s_0918.js:164`; 1396 Niğbolu `olaylar.js:28`; 1427 Tata `olaylar_ek5.js:552`; 1443-1444 `olaylar_ek.js:130-132`; 1456 Belgrad `ek5.js:129`; 1476-02-01 Böğürdelen `olaylar_ek10.js:529`; 1494-02-06 Banaluka `olaylar_sehir_ilk.js:19`; 1512 Srebrenik `ek10.js:593`; 1521-08-29 Belgrad `olaylar.js:77`; 1526-08-29 Mohaç `olaylar.js:81`; 1527-11-03 Ferdinand taç `olaylar_avmac_b_1029.js:21`; 1540-07-22 `…b_1029.js:27`; 1541-08-29 Budin `olaylar.js:90`. Evren dışı: künye `kronoloji:` 1301, 1387, 1458, 1490, 1514 Dózsa, 1526-11-10, 1527-01-01.
Eksik maddeler (Değişmez 2 evreninde bulunamadı; kaynak okunmadan yazmayın — hepsi DOĞRULA):
```
{ t:"1301-01-14", b:"III. András öldü; Árpád hanedanı sona erdi", yer_id:"Estergon", kaynak:"künye kronolojisinde var; evrene taşı" }
{ t:"1330-11-09", b:"Posada: I. Károly Róbert Basarab'a yenildi; Eflak Macar egemenliğinden çıktı", yer_id:"Bükreş", kaynak:"Engel 2001 / Britannica 'Wallachia' — gün (9-12 Kasım) DOĞRULA" }
{ t:"1365-01-01", b:"Nagy Lajos Vidin'i aldı, çar İvan Sratsimir tutsak", yer_id:"Vidin", kaynak:"Engel 2001; yalnız yıl DOĞRULA" }
{ t:"1369-01-01", b:"İvan Sratsimir Vidin'e döndü; Macar yönetimi sona erdi", yer_id:"Vidin", kaynak:"DOĞRULA" }
{ t:"1403-01-01", b:"Sigismund Belgrad'ı Stefan Lazareviç'e bıraktı", yer_id:"Belgrad", kaynak:"DOĞRULA (Tata 1427 ile ters yön)" }
{ t:"1409-07-31", b:"Napoli Kralı Ladislaus Dalmaçya haklarını Venedik'e sattı (Zadar vb.)", yer_id:"Zadar", kaynak:"gün DOĞRULA" }
{ t:"1420-01-01", b:"Venedik Dalmaçya kıyı ve adalarını tamamladı (Brač, Hvar, Korčula, Kotor)", yer_id:"Hvar", kaynak:"DOĞRULA" }
{ t:"1480-01-01", b:"Krk (Veglia) Frankopan'dan Venedik'e geçti", yer_id:"Krk", kaynak:"DOĞRULA" }
{ t:"1526-11-10", b:"Szapolyai seçildi: Erdel/Doğu Macaristan toprakları Szapolyai'ya", yer_id:"Erdel", kaynak:"yer_id mevcut madde 1526-11-10'a ekle" }
```

## d) Harita uyumu
Yerleşim sayısı: 1000:9, 1081:9, 1270:12, 1297:95, 1378:97 (en geniş), 1513:79, 1540:5. Açık kırılma **15** (aşağı), tümü Dalmaçya/Eflak/Sırbistan/Hırvatistan sınırında veya 1526 sonrasında:
| gün | yerleşimler | öneri |
|---|---|---|
| 1330-01-01 kayıp | Buzău, Bükreş, Calafat, Călărași | Posada madde (c); ayrıca bu yerlerin 1281-1330 `macaristan` sahipliği şüpheli (Eflak'ın Macar nominal üstünlüğü; Bükreş ilk anılış 1459) → kaynak ya da dönemi sil. gün 1330-11-09 |
| 1355-12-20 kazanç | Belgrad | 20 Aralık 1355 = Dušan'ın ölüm günü; Belgrad Macaristan'a o gün geçmiş olamaz (gün kaynaksız). Aynı yerleşim "Belgrad Kalesi" 1427'ye dek `sirbistan` — kendi içinde çelişki. Kaynak ara; yoksa `1355-01-01`+beyan |
| 1365-01-01 / 1369-01-01 | Vidin | madde (c) |
| 1371-01-01 kazanç / 1420-01-01 kayıp | Kotor | madde (c); 1371 gün uydurma olabilir |
| 1403-01-01 kayıp | Belgrad | madde (c) |
| 1409-01-01 | Cres, Lošinj, Nadin, Pag … (12 yer) | 1409-07-31 satış (c) |
| 1412-10-30 | Şibenik | madde: Venedik Šibenik'i 1412'de aldı — gün DOĞRULA |
| 1420-01-01 | Brač, Hvar, Korčula, Kotor | madde (c) |
| 1471-01-01 kayıp | Böğürdelen | s: 1281→1471 sonra 1476-02-01'den tekrar (Osmanlı 1471-1476?) — kayıp günü kaynaksız; evren yalnız 1476 geri alış |
| 1480-01-01 | Krk | madde (c) |
| 1524-01-01 | Orsova | evren 1420 "Orşova ilhakı" Osmanlı diyor; s: Macaristan 1524 — **çelişki**, kaynak ara |
| 1526-07-27 | Dimitrofça | Varadin fethi 1526-07-27 maddesi var ama yer şartı Dimitrofça'yı kapsamıyor; Mitrovica'nın sahipliği DOĞRULA |
| 1526-08-29 | Čakovec | s: bu gün `macaristan-habsburg`'a geçiyor, ama habsburg f=1526-12-17 → 109 günlük hayalet; `1526-12-17` yap |
| 1526-11-10 | Brassó, Gyulafehérvár, Haram … (7) | bkz. özet (1): devralan `dogu-macar-kralligi` olmalı |
En geniş yılda (1378) büyük şehirler: Peşte/Buda bölgesi, Estergon, Zagreb, Erdel, Varad, Temeşvar, Eğri sahipli; ancak 1526-11-10 sonrası bu şehirlerin **hiç sahibi yok** (Peşte 1527-09-23'e, Varad/Erdel/Temeşvar/Haram 1551'e kadar; Estergon 1530'a macaristan). Szapolyai'nın fiilen elinde tuttuğu topraklar `dogu-macar-kralligi` olarak boyanmadığı için haritada "Doğu Macar" hiç görünmüyor (**0 yerleşim**). Önerilen s: Erdel (Kaloşvar), Gyulafehérvár, Brassó, Temeşvar, Varad, Peşte→`dogu-macar-kralligi` 1526-11-10→1541-08-29 (Peşte 1527-09-23 sonrası Ferdinand; Budin ayrıca sorgulanacak).
1000-1281 kapsama: Aquincum-Óbuda-Pest, Mohaç, Zigetvar, Subotica, Murska Sobota, Lendava, Eisenstadt 1000'den; Estergon, Peçuy, Kalocsa, İstolni Belgrad, Zagreb, Eğri vb. **1281'den** → 1000-1281 haritası boş; "noktası olmayan bölge en yakın peteğe emilir" kuralıyla Macar toprağı Aquincum ve Mohaç'a çekiliyor. Öneri: Estergon (başkent), İstolni Belgrad, Peçuy, Kalocsa, Eğri, Varad, Erdel (Gyula 1003 sonrası; DOĞRULA) için `f` 1000/kuruluş yıllarına çekmek.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` macaristan: f `1000-01-01`→`1000-12-25` (ic_not: TDV 1000-1001; alternatif 1001-01-01); `kaynak:"macaristan"` yerine gerçek kaynak (TDV «Macaristan», Treccani «Ungheria»); t `1527-01-01`→`1526-12-17` (Hırvat yerler s:'de 1527-01-01 ile kalır).
2. dogu-macar-kralligi f `1526-08-29`→`1526-11-10`; ona Erdel, Gyulafehérvár, Brassó, Temeşvar, Varad, Haram s: dönemi `1526-11-10→1541-08-29` ekle (sonrası `erdel`/Osmanlı).
3. s: künye aşımı: Hatvan, Vaç, Şimontorna (1544-09-01), İstolni Belgrad (1543-08-10), Kalocsa (1541), Klis (1537), Estergon/Segedin (1530), Banaluka/Yayça (1528) `macaristan` dönemlerini `1526-12-17`'de kes, devamı `macaristan-habsburg`/`dogu-macar-kralligi`'ne (bölgeye göre) ver.
4. Čakovec `macaristan` t: `1526-08-29`→`1526-12-17`.
5. Yukarıdaki 9 eksik madde (doğrulama sonrası); 1301-01-14 künye kronolojisinden evrene taşı.
6. Orsova 1420 vs 1524 çelişkisi, Belgrad/Belgrad Kalesi 1355-1427 çelişkisi, Bükreş/Buzău 1281-1330 sahipliği için kaynak tara; yoksa dönemi kırp.

## Erişilemeyen kaynaklar
- Engel, *Realm of St Stephen* (2001) / Kristó: István tacı 25.12.1000 mü 1.1.1001 mi; Posada günü; Vidin 1365; Dalmaçya 1409.
- TDV «Macaristan» md.: 1102 Hırvatistan birliği ve Budin 1541 günü metinde yok (yalnız 1091 László, 1540 ölüm). TDV «Budin»/«Kanunî Sultan Süleyman» maddelerinde 1541-08-29 teyidi okunmadı.
- Treccani «Ungheria»: yalnız ilk 200 000 karakter okundu; Zápolya/Ferdinand seçim tarihleri son bölümde olabilir.
- Britannica «Hungary» (403). Cambridge History of Medieval Hungary: Hrvat/Dalmaçya devri (1102, 1409).

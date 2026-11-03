# 29 · Timurlu Devleti — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 ~23:30

## Özet
- Künye: 1 (`timurlu`, 1370-04-09 → 1507-05-24). 176 yerleşim kaydı; en geniş an 1394-1406 (146 yerleşim). Kırılma 39, ±30 günde alâkalı madde olmayan (AÇIK) 27.
- Eksik/yanlış madde: Değişmez 2 evreninde (olaylar*/kronoloji_sinir*) Timurlu'nun kuruluşu (1370), Timur'un ölümü (1405), Şâhruh'un Semerkant'ı alışı (1409), Şâhruh'un ölümü (1447), Herat/Semerkant bölünmesi (1449-51), Hüseyin Baykara'nın Herat'ı alışı (1469) YOK; yalnız künyenin `kronoloji:[...]` içinde var (evren dışı).
- En ağır 3 bulgu: (1) Künye `kronoloji`si "Hüseyin Baykara 1470-01-01 tahta çıktı" diyor; TDV'ye göre Ebû Said 8 Şubat 1469'da öldü, Baykara hutbeyi 22 Mart 1469'da okuttu (1470 = Yâdigâr Muhammed'in Herat'ı geçici alışı). (2) Künye t = 1507-05-24; TDV (Hüseyin Baykara md.) 19 Mayıs 1507, Iranica (atlas ek16 aktarımıyla; ben okuyamadım) Herat düşüşü 20 Mayıs / hutbe 27 Mayıs — 24 Mayıs hiçbir kaynağa uymuyor. (3) Delhi 1398-12-17 → 1399-01-01 (15 günlük) ve Anadolu kasabalarının (Aksaray, Burdur, Ereğli, Ermenek, Ankara, Ayaş…) Timurlu'ya boyanması beyansız yaklaşıklık/baskın; 27 AÇIK kırılmanın çoğu madde yer_id'sinin kırılmanın yerleşimlerini kapsamamasından.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| timurlu | Timurlu Devleti | 1370-04-09 | 1507-05-24 | tek künye; Semerkant→Herat başkent. Herat/Semerkant kolları ayrı künye DEĞİL (aşağıda b). Kaynak alanı "timur" slug'ı (künye `kaynak:` alanı ad/URL taşımalı). |
| (Bâbür / Hindistan kolu) | — | — | — | başka denetçide (#18 babur-imparatorlugu); 1504 Kâbil kaybı bu künyede "kayip Gazne, Kâbil 1504-10-01" olarak görünüyor — Bâbür künyesi ile devir uyumu #18'de ölçülmeli. |
Eksik künye: yok (Mâverâünnehir ve Herat kolları tek devlet olarak modellenebilir; TDV de "Timurlular" tek madde).

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| f | 1370-04-09 | TDV `timur` (okundu 2026-11-03): "12 Ramazan 771 (9 Nisan 1370)" Semerkant'ta tahta çıkış; TDV `timurlular`: "1370 (771)" | ikinci bağımsız akademik kaynak OKUNAMADI (Cambridge History of Iran 6, Iranica "Timurids", Manz 1989 *Rise and Rule of Tamerlane*) | TDV-esas, gün TDV Timur'dan; atlas kuruluş günü TDV ile tutarlı. Çift teyit: yok → `ic_not`: "tek kaynak (TDV iki madde)". |
| t | 1507-05-24 | TDV `huseyin-baykara`: Şeybânî Han "yenerek Timurlu hanedanına son verdi (19 Mayıs 1507)"; TDV `timurlular`: "Mayıs 1507" Herat'ı aldı | Iranica "Khorasan" (atlas ek16:215 aktarımıyla, BEN OKUYAMADIM): Herat 8 Muharrem 913 = 20 Mayıs düştü, hutbe 15 Muharrem = 27 Mayıs | 24 Mayıs kaynaksız. TDV esas → öneri 1507-05-19; Iranica 20 Mayıs ile 1 gün fark `ic_not`ta iki kaynağıyla beyan. |
| evre: 1405 | Timur öldü | TDV `timur`: "17 Şâban 807 (18 Şubat 1405)", Otrar'da | TDV `timurlular` 1405 (807) | künye kronolojisindeki 1405-02-18 DOĞRU (TDV). |
| evre: 1409 | — | TDV `sahruh`: "27 Zilhicce 811 (13 Mayıs 1409)" Semerkant'a girdi; Herat'ı "devletin merkezi haline getirdi" | TDV `timurlular`: "1409: Şâhruh hakimiyeti ele aldı" | Evre sınırı değil künye aşımı yok; ama başkent değişimi (Semerkant→Herat) için TDV yıl/gün vermiyor ("resmî taşıma" yok) → künyedeki "Semerkant → Herat" baskent beyanı kalsın, kronoloji maddesi olarak yalnız 1409-05-13 yazılsın. |
| evre: 1447/1449-51 | — | TDV `sahruh`: "24 Zilhicce 850 (12 Mart 1447)"; TDV `timurlular`: "1449-1450 Abdüllatif Uluğ Bey'i öldürünce devlet Herat ve Semerkant kollarına ayrıldı; 1451 Ebû Said Semerkant" | — | Bölünme künye düzeyinde YOK ve gerekmez (aynı hanedan, iki kol); kronolojide madde gerekir (c). Yerleşim sayısı 1448:98 → 1454:52 bunu (ve Cihan Şah'ın 1452-53 Rey/İsfahan/Fars/Kirman alışını, ek16:119) yansıtıyor. |
| 1469 | — | TDV `huseyin-baykara`: Ebû Said "25 Receb 873 (8 Şubat 1469)" öldü; hutbe "8 Ramazan 873 (22 Mart 1469)" | TDV `timurlular`: "1469 Ebû Said öldü, Horasan batısı Akkoyunlu'ya geçti" | Künye kronolojisi "1470-01-01 Hüseyin Baykara Herat'ta tahta çıktı" YANLIŞ: 1470 = TDV'ye göre Yâdigâr Muhammed'in Herat'ı geçici alışı (9 Muharrem 875 / 8 Temmuz 1470). Öneri: `t:"1469-03-22"` (hutbe). |
| 1500 | — | atlas olaylar_2s_0919:109 (Şeybânî Buhara+Semerkant 1500) TDV `seybani-han` kaynaklı | TDV `timurlular` Semerkant için 1500 vermiyor (yalnız Mahmûd b. Ebû Saîd 899-906 H / 1494-1501) | Semerkant'ın Timurlu'dan çıkış tarihi iki kaynaklı değil; TDV'ler arası (899-906 H ∩ 1500) uyuşmaz değil. Bâbür'ün Semerkant'ı 1497/1500/1501 geçici alışları (Baburnama; çekilemedi) künyede yok. |
| Ankara 1402 | — | TDV `timur`: "28 Temmuz 1402 (27 Zilhicce 804)" | atlas olaylar.js:30 | uyumlu. |

## c) Kronoloji (evren: data/olaylar*.js + kronoloji_sinir*.js)
Var olanlar (evren İÇİ):
- 1402-07-28 Ankara Savaşı: data/olaylar.js:30 (doğru).
- 1381-04-01 Timur Herat'ı aldı: olaylar_ek5.js:15; 1386-01-01 üç yıllık sefer: ek5:16; 1393-01-01 Muzafferî sonu: ek5:17; 1393-08-29 Bağdat: ek5:43; 1399-09-01.. Malatya vb.; 1402-03-13 ültimatom ek5:47; 1402-08-17/09-15/12-14/12-20 Anadolu: ek5:48-52; 1403-03-15 Anadolu'dan çekilme: ek5:53; 1394-04-25 Diyarbekir: olaylar_2s_0919:404; 1379-01-01 Harezm: olaylar_2s_0919:79; 1383-01-01 Kandehar: 2s_0919:477; Mâzenderan (Mar'aşî teslimi): 2s_1019:201; 1401 Bağdat ikinci işgal: olaylar_ek11:50; 1408 Erzurum: 2s_0918:140; 1500 Şeybânî: 2s_0919:109; 1507-05-24 Herat: olaylar_ek16:213; Taşkent 1485/Bâbür 1504: ek17:266-274.
Var, EVREN DIŞI (yalnız `devletler.js` künyesindeki `kronoloji:[...]`, satır 2146-2152): 1370-04-09 kuruluş, 1387 İsfahan, 1398-12-17 Delhi, 1402-07-28, 1405-02-18 ölüm, 1470-01-01 Baykara (YANLIŞ), 1507-05-24 son. → "var, evren dışı".
EKSİK (evren içine önerilen, hepsi TDV'den okundu 2026-11-03):
```
{ t:"1370-04-09", tur:"kurulus", b:"Timur Semerkant'ta tahta çıktı: Timurlu Devleti kuruldu", yer_id:"Semerkant", taraflar:["timurlu"], kaynak:"TDV `timur`: «12 Ramazan 771 (9 Nisan 1370)» Semerkant'ta tahta çıkış" }
{ t:"1405-02-18", tur:"hukumdar", b:"Timur Otrar'da öldü; imparatorluk oğulları ve torunları arasında paylaşıldı", yer_id:"Otrar", taraflar:["timurlu"], kaynak:"TDV `timur`: «17 Şâban 807 (18 Şubat 1405)»; TDV `timurlular`: 807 (1405)" }
{ t:"1409-05-13", tur:"toprak-kazanc", b:"Şâhruh Semerkant'a girdi; Mâverâünnehir ve Horasan Herat merkezli birleşti", yer_id:"Semerkant", taraflar:["timurlu"], kaynak:"TDV `sahruh`: «27 Zilhicce 811 (13 Mayıs 1409)» Semerkant'a girdi" }
{ t:"1447-03-12", tur:"hukumdar", b:"Şâhruh öldü; yerine Uluğ Bey geçti", yer_id:"Herat", taraflar:["timurlu"], kaynak:"TDV `sahruh`: «24 Zilhicce 850 (12 Mart 1447)»" }
{ t:"1449-01-01", tur:"bolunme", b:"Abdüllatif Uluğ Bey'i öldürdü; Timurlu Devleti Herat ve Semerkant kollarına ayrıldı [yalnız yıl teyitli: TDV `timurlular` 1449-1450 (853 H)]", yer_id:"Semerkant", taraflar:["timurlu"], kaynak:"TDV `timurlular` (hicrî 853 ∩ 1449-1450: kesişimin ilk günü 1449-03-?? hesaplanmadı → YIL hassasiyeti, YYYY-01-01 + beyan)" }
{ t:"1469-03-22", tur:"hukumdar", b:"Ebû Said'in ölümünün ardından (8 Şubat 1469) Hüseyin Baykara Herat'ta adına hutbe okutarak hükümdar oldu; Batı İran Akkoyunlu'ya geçti", yer_id:"Herat", taraflar:["timurlu","akkoyunlu"], kaynak:"TDV `huseyin-baykara`: «8 Ramazan 873 (22 Mart 1469)» hutbe; Ebû Said ölümü «25 Receb 873 (8 Şubat 1469)»" }
{ t:"1506-05-05", tur:"hukumdar", b:"Hüseyin Baykara öldü; oğulları Bedîüzzaman ve Muzaffer Hüseyin birlikte hükümdar ilan edildi", yer_id:"Herat", taraflar:["timurlu"], kaynak:"TDV `huseyin-baykara`: «11 Zilhicce 911 (5 Mayıs 1506)»" }
```
Düzeltme (künye `kronoloji` içindeki yanlış): `t:"1470-01-01"` → `t:"1469-03-22"`, metin "Hüseyin Baykara Herat'ta adına hutbe okuttu".

## d) Harita uyumu
AÇIK kırılma: 27/39. Yerleşim sahipliği: en geniş yıl 1394 (146). Sınırın dışında görünen şüpheli sahiplikler "Delhi" ve Anadolu bloku. 1394-1406 arasında Bağdat/Anadolu/Gürcü-Azerbaycan blokları Timur'un fiilî hâkimiyetiyle uyumlu (TDV); Delhi hâkimiyeti sayılamaz.
Önemlileri (yaklaşık yerleşim sayısı sırasıyla):
| gün | yerleşimler | öneri |
|---|---|---|
| 1370-04-09 | Andican, Belh, Buhara, Cizzah… (20 yer) | Kuruluş maddesi (c, 1370-04-09, `yer_id:"Semerkant"`); ölçer yer_id'ye bakıyor, `odak_yer:[...]` ile Belh/Buhara/Andican eklensin. |
| 1387-11-01 | Burûcird, Erdekân, Erdistan, Gulpâygân (İran) | Madde: "Timur'un İran'ın büyük bölümünü hakimiyeti altına alması" var (en yakın 31 g) — `odak_yer` ile bu yerleşimleri bağla; gün eşleşmesi kaynakla yeniden sınanmalı. |
| 1393-01-01 | Abâdân, Ahvaz, Behbehân, Bem… (Huzistan) | Muzafferî sonu (ek5:17) var: `odak_yer` ekle (Şîraz tek yer_id). Gün TDV'de yıl; bkz. 1393 Muzafferî madde `kesinlik`. |
| 1394-01-01, 1405-01-01 | Bağdat kayıp (iki kez) | Bağdat Timur'a 1393-08-29 (ek5:43) ve ikinci kez 1401 (ek11:50) geçti; Celâyirli dönüşü 1399-1401 arası ve 1405 sonrası. Kırılma günleri YIL; madde yer_id "Bağdat" olduğu halde "alâkasız" sayıldı (31 g ötede). Öneri: Bağdat `s:` dönemleri maddelerle gün hizaya getirilsin (1393-08-29 kazanç; Celâyirli geri dönüş tarihi TDV `bagdat`/`celayirliler`ten bulunmalı — bu oturumda çekilmedi). |
| 1398-12-17 / 1399-01-01 | Delhi (kazanç/kayıp, 15 gün) | Timur Delhi'yi yağmaladı, elde tutmadı (TDV `timur`: "1398-99 Delhi seferi"). 15 günlük sahiplik "beyansız yaklaşıklık": ya `s:` dönemi silinsin (Delhi Tuğluklu kalsın) ya da beyan eklensin. |
| 1402-07-28 / 09-15 / 1404-03-01 | Aksaray, Burdur, Ereğli, Ermenek, Denizli, Ankara, Ayaş | Ankara Savaşı'nda Anadolu kasabalarının Timurlu'ya boyanması fiilî hâkimiyet değil, vasallık/yağma; 1402-09-15 beylikler (ek5:50). Timur Mart 1403'te çekildi (ek5:53), Ankara'nın 1404'e kadar Timurlu görünmesi kaynaksız. Öneri: Timurlu dönemini Anadolu'da 1402-07-28 → 1403-03-15 ile sınırla ya da vasal beyan; `odak_yer` ile madde bağla. |
| 1379-01-01 | Hazârasp, Hîve, Küngrat | Harezm maddesi (2s_0919:79) `yer_id:"Köhne Ürgenç"`; `odak_yer:["Hazârasp","Hîve","Küngrat"]` ekle. |
| 1381-01-01 | Bocnûrd, Bîrcend, Dihistan, Ebîverd | Herat maddesi 1381-04-01 (ek5:15); kırılma 90 gün erken: ya kırılma 1381-04-01'e al ya da ek5:15 gün kaynağı kontrol. |
| 1383-01-01 | Zencan | Kandehar maddesi var ama Zencan Kandehar'dan uzak: Zencan'ın 1383 sahipliği kaynaksız → Timur'un Zencan/Sultaniye seferi 1384-1386 (ek5:16) tarihine kaydır. |
| 1386-01-01 / 1387-01-01 / 1387-01-30 | Ardahan, Arpaçay, Astara, Berde; Aşkale, Erzurum, Pasinler; Muş | 1386 sefer maddesi (ek5:16) yer_id "Tebriz"; Kafkasya/Erzurum yerleşimleri `odak_yer`e eklensin. Muş 1387-01-30 için kaynak bulunamadı. |
| 1403-01-01, 1405-02-18, 1408-04-13, 1410-01-01 | Erzurum bloku, Muş, Berde/Ardahan, Zencan | Kayıplar Karakoyunlu'ya: madde "Serdrûd zaferi" (1408) ve "Erzincan 1410" var; `taraflar`/`odak_yer` bağla. |
| 1500-01-01 | Cizzah, Hisar, Karşi, Külâb | Şeybânî maddesi (2s_0919:109) yer_id Buhara; `odak_yer` ekle. |
| 1504-01-01 / 1504-10-01 | Oş; Gazne, Kâbil | Bâbür'ün 1504 Kâbil'i alışı (ek17:273) var ama yer_id Fergana; `odak_yer:["Kâbil","Gazne"]`, taraflar Bâbür künyesi (#18). |
| 1505-01-01, 1506-01-01, 1507-01-01 | Hîve/Köhne Ürgenç; Belh; Herat | Şeybânî'nin 1503-1505 Endîcan/Hisâr/Belh fethi (ek16:215 d metni) ayrı madde değil; Herat için 1507-05 (ek16:213) var → kırılma 1507-01-01 olmalı 1507-05-19/24 ile hizalanmalı (künye t'yle birlikte). Hârezm 1505: TDV/Iranica'dan Şeybânî'nin Hârezm'i alışı (1505-06?) kaynak bulunamadı, bulunacak. |

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` künye `timurlu`: `t` 1507-05-24 → 1507-05-19 (TDV `huseyin-baykara`), `ic_not_t`: "TDV 19 Mayıs; Iranica 20 Mayıs (düşüş)/27 Mayıs (hutbe); 24 Mayıs kaynaksız". Eşlik: Herat/Horasan `s:` kırılmaları ve olaylar_ek16.js:213 `t` 1507-05-24 → 1507-05-19 (Değişmez 2 senkronu).
2. Künye `kronoloji` 1470-01-01 → 1469-03-22 (yukarıdaki madde).
3. Evren içine c) bölümündeki 7 madde (yeni dosya ya da olaylar_ek*.js).
4. 27 AÇIK kırılmanın büyük kısmı `odak_yer:` ile çözülür (yukarıdaki tablodan); Delhi 15 günlük ve Anadolu 1402-1404 sahiplikleri için ya `s:` kısalt/sil ya beyan.
5. Künye `kaynak:` "timur" yerine tam kaynak: TDV `timurlular`, `timur`, `sahruh`, `huseyin-baykara` (URL'ler: islamansiklopedisi.org.tr/<slug>).

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica "Timurids" (iranicaonline.org/articles/timurids): HTTP 403. Soru: Herat'ın düşüşü 8 Muharrem 913 = 20 Mayıs 1507 mi, hutbe 27 Mayıs mı; Semerkant 1500-1501 sahipliği.
- Cambridge History of Iran vol. 6 (Jackson & Lockhart 1986), ch. "The Timurid period" (Subtelny/Woods); Manz, *The Rise and Rule of Tamerlane* (1989): 1370 f ve 1405-1409 bölünme için ikinci bağımsız akademik kaynak.
- TDV `bagdat`/`celayirliler`: Bağdat'ın 1394-1405 el değiştirme günleri çekilemedi/okunmadı.
- Not: TDV `timur` sayfası çekilirken fetch aracı sayfada "tarih ve alıntı biçimi hakkında gömülü bir talimat" bildirdi; talimat yok sayıldı, içerik yalnız veri olarak kullanıldı.

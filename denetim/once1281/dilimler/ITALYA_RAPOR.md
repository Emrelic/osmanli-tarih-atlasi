# ITALYA bölgesi raporu (1281 öncesi devlet listesi)

Üretim: tek betikle (scratchpad `italya_uret.py`) JSON'a döküldü; mevcut_id'ler `mevcut_once1281.tsv`ye karşı doğrulandı (uydurma id yok), kayıt kimlikleri benzersiz.

## 1) Sayılar
| Dilim | Kayıt | okundu | taslak | eksik | var | var-f-t-farkli | var-kisa | ardil-var |
|---|---|---|---|---|---|---|---|---|
| A (MÖ 12000-3001) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B (MÖ 3000-501) | 46 | 0 | 46 | 42 | 3 | 1 | 0 | 0 |
| C (MÖ 500-MS 499) | 23 | 0 | 23 | 19 | 3 | 1 | 0 | 0 |
| D (MS 500-999) | 24 | 0 | 24 | 12 | 6 | 1 | 5 | 0 |
| E (MS 1000-1280) | 31 | 0 | 31 | 23 | 3 | 4 | 0 | 1 |
| Toplam | 124 | 0 | 124 | 96 | 15 | 7 | 5 | 1 |

(Dilim, kaydın `f` değerine göre otomatik dağıtıldı; `f` bilinmeyenler kendi tahmin dilimindedir.)

## 2) Dürüst durum: HİÇBİR kayıt `okundu` değil
Bu oturumda web'e hiç çıkılmadı (brif "ağır komut yok", zaman). Bütün kayıtlar hafızadan, `dogrulama:"taslak"`. `kaynak` alanlarına yalnız "ADAY (okunmadi)" etiketli ansiklopedi/monografi adları yazıldı; sayfa/cilt künyesi uydurulmadı. Dönem oturumları yeniden doğrulamalıdır. Özellikle zayıf tarihler:
- Etrüsk bireysel şehirlerin bitişleri (Tarquinia, Caere, Vulci, Clusium, Populonia, Volaterrae): "Roma'ya tabi olma" tarihleri yüzyıl/onyıl hassasiyetli, tartışmalı.
- Yunan kolonileri: geleneksel kuruluş yılları (Eusebius/Thukydides sistemi) yazıldı; yıkım/düşüş yılları ±1-5.
- Orta çağ: Spoleto 576, Benevento 571, Capua 900, Napoli 763, Sorrento, Torino/Ivrea/Toskana markizlikleri, Gallura 1288, komünlerin "ilk konsül" yılları (Bologna 1116, Padova 1138, Verona 1136, Pavia, Cremona, Parma, Piacenza, Modena, Perugia, Asti, Vercelli, Ancona) -- onyıl düzeyi tahmin, mutlaka kontrol.
- Batı Roma bitişi: atlas 0476-08-28 ile geleneksel 0476-09-04 (Romulus'un devrilmesi) / 0476-08-23 (Odoakar ilanı) çelişkisi `ic_not`ta.

## 3) Eşleme bulguları (atlas düzeltme önerileri)
- var-kisa (künyeyi genişlet): benevento-papalik (1000-1053 → 571-1077), salerno-prensligi (1000 → 849), napoli-dukaligi (1000-1137 → ~763-1139), amalfi-cumhuriyeti (1000 → 839), sicilya-emirligi (0947 → 827/831; Aglebî ve Fâtımî evresi eksik).
- var-f-t-farkli: etrusk-sehir-devletleri (f=-0574 şüpheli), cenova (1005 vs Compagna 1099), savoya (1032 vs 1003), arborea (1070 vs ~1000), sicilya-kralligi (kontluk 1072 vs krallık 1130-12-25), san-marino (1000 vs belgeli 885; t yok).
- ardil-var / bölünme: milano-dukaligi f=1097 aslında komün (1097-1277) + Visconti senyörlüğü (1277-1395) + dukalık (1395). İlk ikisi yeni kayıt.
- Mevcut listede mükerrer görünen: `verona-scaliger` (1262) ve `della-scala` (1277) aynı polity; `bonacolsi`/`della-scala` `devlet` türü. Temizlenmeli.
- bati-roma atlasta `bati-avrupa`; İtalya merkezli olduğundan `italya` önerilir. `kartaca` `kuzey-afrika`; Sicilya/Sardinya Kartaca parçaları ayrı kayıt olarak eklendi (kartaca-sicilya, kartaca-sardinya, mozia) -- ayrı künye mi, Kartaca'nın dilimi mi, karar gerekir.
- Roma İmparatorluğu TEK künye (roma-imp) var; Prinkipat/Dominat sınırı ic_not'ta (-0026-01-16 / 0284). Galya, Palmira, Carausius kayıtları ardıl/ayrılıkçı olarak eklendi (Galya ve Britanya bolge=bati-avrupa, Palmira suriye-filistin önerisi).

## 4) Bulamadığım / sığ kalan yerler
- A dilimi: İtalya'da MÖ 3000 öncesi belgeli siyasî birim yok (Ötzi, Remedello, Malta Ġgantija zaten `kultur` -- boş bırakıldı).
- B dilimi: Etrüsk şehirleri yalnız ana 10 kadar; Arretium, Perusia, Cortona, Vetulonia, Rusellae, Fiesole, Spina yok/eksik. Kampanya (Nola, Nuceria, Pompei), Latium şehirleri (Tibur, Praeneste, Ardea), Marsi/Paeligni/Vestini/Marrucini, Daunia/Peucetia, Sikan, Sicilya Yunan şehirleri (Kamarina, Messana'dan başka) ve Hipponion/Kaulonia/Siris yazılmadı. Malta (Fenike), Korsika yerlileri, Nuragik kabile birimleri yüzeysel.
- C dilimi: Roma müttefik (socii) şehirleri ve Hellenistik Sicilya (Hieron II'nin Syracuse'u ayrı kayıt değil; sirakuza'nın içinde). Roma eyaletleri (Sicilya, Sardinya-Korsika, Cisalpina) devlet değil, yazılmadı. Vandal Sicilyası/Sardinya'sı, Doğu Roma Ravenna dönemleri ve Julius Nepos'un Dalmaçya devleti başka oturumlara bırakıldı.
- D dilimi: Lombard dukalıkları (Trento, Tuscia/Lucca, Pavia dışı), Bizans Sicilya/Kalabria themaları, Roma Dukalığı, Pentapolis, Comacchio, Monte Cassino manastır devleti, Malta Müslüman dönemi, Korsika yok.
- E dilimi: komünlerde yalnız seçilmiş 14 kadarı; Vicenza, Treviso, Mantova komünü, Cremona dışı Lombard komünleri, Genova'nın altı, Lucca/Siena erken dönemi, Malaspina/Este/Guidi/Aldobrandeschi/Alberti kontlukları, Ventimiglia, Savona, Gaeta sonrası Capua, Orvieto, Arezzo, Pistoia, Rimini, Ravenna, Faenza, Forlì, Imola komünleri ve Torriani/Della Torre, Salinguerra, Malta Kontluğu (1192) yazılmadı. Korsika (Pisa/Cenova paylaşımı) ayrıca yok.
- Kaynak: Pleiades, Brill's New Pauly, Oxford Classical Dictionary, TDV ve Dizionario Biografico erişilmedi; hepsi hafıza.
- Kontrol soruları: Pleiades'in İtalya indeksindeki (Magna Graecia, Etruria) bütün poleisler, TDV'nin Sicilya, Ceneviz, Venedik, Rim maddeleri ve Dictionary of the Middle Ages'ın İtalya maddeleri taranmadı; tamlık iddia edilmez.

## 5) Emre'den / ana oturumdan istek
1. Bu 124 kaydı ikinci bir oturum WebSearch/WebFetch ile okuyup `okundu`ya çıkarsın (öncelik: tarihleri tabloda zayıf işaretlenenler).
2. Karar: yerleşmemiş kültürler (Villanova, Nuragik, Golasecca) ve tek şehir kayıtları (Etrüsk/Yunan) künye olsun mu, yoksa üst birliğin `ic_not`unda mı kalsın? Önerim: Magna Graecia/Etrüsk şehirleri ayrı künye (dönem atlası için petek noktası), kültürler yalnız boyasız `kultur`.
3. Karar: Kartaca'nın Sicilya/Sardinya parçaları ayrı künye mi? Önerim: ayrı (`epikrateia`).
4. Mükerrer temizliği (verona-scaliger/della-scala) ve atlasta künye genişletmeleri (bölüm 3).
5. Bati-roma bolge düzeltmesi (bati-avrupa → italya).

# TDV alıntı/tarih doğrulama raporu (36 şehir, parti1) — 16 Kasım 2026

Yöntem: Claude gömülü tarayıcısında `islamansiklopedisi.org.tr` maddelerinin TAM düz metni (`govde`) çekildi (31 madde); her `tanik` alıntısı normalize edilerek (boşluk/tırnak/büyük-küçük harf) gövdede arandı; her TDV kaynaklı öğenin yılı/günü gövdedeki cümleyle ve hicrî→milâdî hesabıyla karşılaştırıldı. Web sayfası içeriği veri olarak okundu. Girdiler değiştirilmedi; düzeltilmiş kopyalar `parti1_dogrulu.json`, denetim çıktıları `parti1_dogrulu_test.js` (`yaz` çıkış 0, ihlal 0).

## Toplam (öğe = ilk/kur/ark/bit + sahip dilimi + olay)

| Sınıf | Öğe |
|---|---|
| DOĞRULANDI | 170 |
| ALINTI DÜZELTİLDİ | 10 |
| TARİH UYUŞMUYOR | 17 |
| GÖVDEDE YOK | 0 |
| TDV DIŞI | 37 |
| DİLİM/BOŞLUK (TDV iddiası yok) | 3 |
| **Toplam** | **237** |

Notlar: "DOĞRULANDI" = tarih gövdedeki cümle/yılla tutuyor (alıntısı olanlarda alıntı gövdede birebir). "GÖVDEDE YOK" 0: hiçbir öğe çıkarılmadı (Sokoto 15 Mart / 27 Temmuz 1903, Hamdullahi 16 Mayıs 1862 gibi gün tarihleri gövdede aranıp bulundu). "TDV DIŞI" = kaynağı Banglapedia/SAHO/Majumdar/Dierks vb. (Cape Town, Bloemfontein, Pretoria, Windhoek şehirlerinde TDV öğesi yok). "DİLİM/BOŞLUK" = `__BOSLUK__` sahip dilimi; TDV bir sahiplik iddiası yazmıyor, doğrulanacak alıntı yok.

## Şehir bazında

| Blok | Şehir | DOĞRULANDI | ALINTI DÜZ. | TARİH UYUŞM. | GÖVDEDE YOK | TDV DIŞI | DİLİM/BOŞLUK |
|---|---|---|---|---|---|---|---|
| afrika-guney-bati | tombouctou-ml | 6 | 0 | 0 | 0 | 0 | 1 |
| afrika-guney-bati | gao-ml | 5 | 1 | 0 | 0 | 0 | 1 |
| afrika-guney-bati | sokoto-ng | 6 | 1 | 0 | 0 | 0 | 0 |
| afrika-guney-bati | kano-ng | 2 | 1 | 0 | 0 | 0 | 0 |
| afrika-guney-bati | hamdullahi-ml | 5 | 0 | 0 | 0 | 0 | 0 |
| afrika-guney-bati | monrovia-lr | 4 | 1 | 0 | 0 | 0 | 0 |
| afrika-guney-bati | cape-town-za | 0 | 0 | 0 | 0 | 7 | 0 |
| afrika-guney-bati | bloemfontein-za | 0 | 0 | 0 | 0 | 5 | 0 |
| afrika-guney-bati | pretoria-za | 0 | 0 | 0 | 0 | 7 | 0 |
| afrika-guney-bati | windhoek-na | 0 | 0 | 0 | 0 | 5 | 0 |
| afrika-guney-bati | yola-ng | 4 | 0 | 0 | 0 | 0 | 0 |
| hint | delhi-in | 4 | 0 | 0 | 0 | 3 | 0 |
| hint | lahor-pk | 3 | 1 | 1 | 0 | 0 | 0 |
| hint | multan-pk | 4 | 1 | 2 | 0 | 1 | 0 |
| hint | ecmir-in | 5 | 0 | 0 | 0 | 0 | 0 |
| hint | kalkuta-in | 5 | 0 | 0 | 0 | 1 | 0 |
| hint | mursidabad-in | 1 | 0 | 0 | 0 | 4 | 0 |
| hint | bahavelpur-pk | 7 | 0 | 0 | 0 | 0 | 0 |
| hint | amritsar-in | 3 | 1 | 0 | 0 | 0 | 0 |
| hint | agra-in | 4 | 1 | 0 | 0 | 1 | 0 |
| hint | dakka-bd | 3 | 0 | 0 | 0 | 1 | 0 |
| hint | haydarabad-dekken-in | 4 | 1 | 0 | 0 | 0 | 0 |
| hint | ahmedabad-in | 5 | 1 | 0 | 0 | 0 | 0 |
| orta-asya-mogolistan | buhara-uz | 6 | 0 | 3 | 0 | 0 | 0 |
| orta-asya-mogolistan | semerkant-uz | 5 | 0 | 4 | 0 | 1 | 0 |
| orta-asya-mogolistan | taskent-uz | 6 | 0 | 0 | 0 | 0 | 0 |
| orta-asya-mogolistan | hokand-uz | 3 | 0 | 0 | 0 | 0 | 0 |
| orta-asya-mogolistan | hive-uz | 3 | 0 | 0 | 0 | 1 | 0 |
| orta-asya-mogolistan | serahs-tm | 2 | 0 | 2 | 0 | 0 | 0 |
| orta-asya-mogolistan | herat-af | 12 | 0 | 2 | 0 | 0 | 0 |
| orta-asya-mogolistan | belh-af | 14 | 0 | 0 | 0 | 0 | 1 |
| orta-asya-mogolistan | gazne-af | 11 | 0 | 0 | 0 | 0 | 0 |
| orta-asya-mogolistan | kabil-af | 4 | 0 | 3 | 0 | 0 | 0 |
| orta-asya-mogolistan | kasgar-cn | 14 | 0 | 0 | 0 | 0 | 0 |
| orta-asya-mogolistan | karakurum-mn | 8 | 0 | 0 | 0 | 0 | 0 |
| orta-asya-mogolistan | almalik-cn | 2 | 0 | 0 | 0 | 0 | 0 |

## ALINTI DÜZELTİLDİ (10) — olgu doğru, alıntı özet/paraphrase idi; gövdedeki gerçek cümle yazıldı

- gao-ml.kur
- sokoto-ng.ilk
- kano-ng.ilk
- monrovia-lr.ilk
- lahor-pk.ilk
- multan-pk.ilk
- amritsar-in.ilk
- agra-in.ilk
- haydarabad-dekken-in.ilk
- ahmedabad-in.ilk
- (ek) buhara-uz.olay4: "Aynı yıl ..." belirsizdi; "Burhan ailesi 604 (1207) yılında ... Aynı yıl ..." olarak genişletildi (tarih düzeltmesiyle birlikte).
- Not: lahor-pk.ilk için fark yalnız yazım (Ḥudûdü’l-ʿâlem diyakritikleri); Kano.ilk tek cümleyi iki parçalı "..." alıntıya çevirdi.

## TARİH UYUŞMUYOR (17) — hicrî yıl ∩ milâdî yıl kesişiminin ilk günü kuralı (CLAUDE.md "Hicrî yıl")

Eski değer `YYYY-01-01` ilgili hicrî yılın dışına düşüyordu (bir önceki hicrî yıla). Hesap: aritmetik sivil takvim, ±2 gün; 1582 öncesi Jülyen, sonrası Gregoryen (Herat/Gazne/Kâbil/Kâşgar öğelerindeki mevcut kesişim günleriyle aynı yöntem).

| Şehir.alan | Eski | Yeni | Neden |
|---|---|---|---|
| lahor-pk.olay1 | 1186-01-01 | 1186-03-24 | 582 h. = 1186-03-24..1187-03-12 |
| multan-pk.olay2 | 1175-01-01 | 1175-07-22 | 571 h. (TDV 1175-76) 1175-07-22 başlar |
| multan-pk.olay3 | 1228-01-01 | 1228-11-30 | 626 h. 1228-11-30 başlar |
| buhara-uz.olay1 | 0992-01-01 | 0992-03-09 | 382 h. (992) |
| buhara-uz.olay3 | 1141-01-01 | 1141-09-09 | TDV: "5 Safer 536 (9 Eylül 1141) ... Katvân savaşından sonra şehir Karahıtaylar’ın idaresine geçti"; geçiş savaştan sonra, eski tarih savaştan önceydi; kesinlik yil→gun |
| buhara-uz.olay4 | 1207-01-01 | 1207-07-28 | 604 h. (1207) — "Aynı yıl" |
| semerkant-uz.olay1 | 0711-01-01 | 0711-10-19 | 93/711 |
| semerkant-uz.olay2 | 0992-01-01 | 0992-03-09 | 382 (992) |
| semerkant-uz.olay4 | 1220-01-01 | 1220-03-08 | 617 (1220) |
| semerkant-uz.olay5 | 1369-01-01 | 1369-08-05 | 771/1369 |
| serahs-tm.olay0 | 1157-01-01 | 1157-02-13 | 552 (1157); Herat olay4 ile aynı |
| serahs-tm.olay2 | 1221-01-01 | 1221-02-25 | 618 (1221); Herat olay7 ile aynı |
| herat-af.olay10 | 1507-01-01 | 1507-05-13 | 913 (1507) |
| herat-af.olay11 | 1510-01-01 | 1510-04-10 | 916 (1510) |
| kabil-af.olay1 | 1504-01-01 | 1504-06-14 | 910 (1504) |
| kabil-af.olay2 | 1738-01-01 | 1738-04-21 | 1151 (1738) |
| kabil-af.olay3 | 1747-01-01 | 1747-01-13 | 1160 (1747) |

Sahip/olay zinciri: bu 17 öğe olay; hiçbir `sahip` sınırı değişmedi (Değişmez 2 olay-şartı bozulmadı; ilgili şehirlerde sahip zinciri yok ya da `__BOSLUK__`). Kâbil olay3 (1160 h. kesişimi 1747-01-13) kuralın ürünüdür; fiilî olay (Nâdir Şah'ın ölümü, Haziran 1747) daha sonradır — gün hassasiyeti yoktur, kesinlik `yil` kaldı.

## Çıkarılan öğe

Yok (GÖVDEDE YOK = 0).

## Açık notlar (düzeltme gerektirmeyen, ic_not'a yazıldı)

- delhi-in.olay1: TDV 1192'yi Kuvvetü’l-İslâm Mescidi’nin yapımı ve Lâlkot'a bağlar; Aybeg'in fethinin yılı metinde ayrıca verilmez (yıl hassasiyetinde bırakıldı).
- amritsar-in.olay1: TDV katliamı "14 Nisan 1919" verir (tarihsel kayıtlarda 13 Nisan); olay yıl hassasiyetinde kaldı, gün yazılmadı.
- kalkuta-in.ilk: tanik Banglapedia (TDV DIŞI); TDV yalnız 1690 yılını verir. kalkuta-in.olay3 1912 (TDV Kalküta) ile delhi-in.olay3 1911 (TDV Delhi) kaynakta çelişir; mevcut beyan korundu.
- kano-ng: TDV "Efsanelere göre ... IX. yüzyılda ... Gaya" ifadesi doğrulandı (ic_not'taki "efsane" nitelemesi tutuyor). gao-ml: "VII. yüzyılın son yıllarında" gövdede var; 0700 yüzyıl-sonu güvenli ucu korundu.
- sokoto-ng: TDV "askerî bir karargâh" der (olay0.b'deki "askerî üs" anlam olarak aynı; alanlar değiştirilmedi).
- Her TDV içeren şehrin `ic_not` alanına "TDV alıntıları tam metne karşı doğrulandı (tarayıcı, 16 Kasım 2026)" cümlesi + uyuşmayanlar eklendi; önceki "WebFetch özeti/özet okuma/paraphrase" ifadelerinin giderildiği yazıldı. Banglapedia/Majumdar/SAHO/Dierks kaynaklı öğelere dokunulmadı.
- Sınırlama: kaynak başına yalnız TDV gövdesi okundu; "Mali" gibi 57 bin karakterlik maddede tek-tek tüm cümleler değil, öğenin yılı + bağlam penceresi (±100 karakter) göz ile karşılaştırıldı. Gün hassasiyetli tüm öğeler (Sokoto, Hamdullahi, Monrovia olay1, Gazne olay0/1, Buhara olay5, Semerkant olay7, Hive, Hokand, Taşkent) cümleyle birebir karşılaştırıldı.

## yaz çıkış kodları

- afrika-guney-bati: çıkış 0, 11 şehir, ihlal 0, uyarı 7
- hint: çıkış 0, 12 şehir, ihlal 0, uyarı 9
- orta-asya-mogolistan: çıkış 0, 13 şehir, ihlal 0 (uyarılar atlas başlangıcı/BOŞLUK dikişi; önceki sürümle aynı sınıf)

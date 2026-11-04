# 77 · Joseon (Kore) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer top100_olc.py; kaynaklar WebFetch/archive.org, aynı gün)

## Özet
- Künye: **1** (joseon, 1392-08-05 → 1910-08-29). Komşu/öncül-ardıl: goryeo (918-07-25 → 1392-08-05), japon-kore (1910-08-29 → 1945-09-09) — bunlar başka sıraların; yalnız sınır kontrolü yapıldı. **Kore İmparatorluğu (1897-10-12 → 1910-08-29) ayrı künye DEĞİL**, joseon künyesinin içinde (ozet'te anılıyor).
- joseon yerleşim sayısı: 20 (1417'den 1910'a sabit 19-20) — harita görünür. Kırılma 5; **AÇIK 4** (1434 Kyongsong, 1592-05-23 Pusan, 1598-11-24 Pusan, 1910-08-29 dört yerleşim); otomatik-madde-ile-kapanan 0.
- MÜKERRER: yok (`--ara joseon/kore/chosun`: gojoseon, wiman-joseon, goryeo, japon-kore, kore-gecici-hukumeti vb. ayrı polity'ler; nkore = ilgisiz Ankole).
- En ağır 3 bulgu: (1) Pusan 1592/1598 kırılmalarının kronoloji karşılığı yok — Imjin maddesi yalnız künyenin `kronoloji:[...]` içinde (evren dışı) ve 1598 dönüş günü (1598-11-24) kaynağa uymuyor (Japon geri çekilişi 1598-12-21..24); (2) 1392-08-05 ve 1910-08-29 toprak-değişimi maddelerinin `yer:` alanı Jeju/Jeonju/Ganghwa/Hamhung'u saymıyor → 2 açık kırılma sırf yer listesi eksikliği; (3) 1897-10-12 Kore İmparatorluğu evren içi kronolojide yok, Hamhung'un 1356 dönüşü ve Jeju'nun 1356 "kazancı" Goryeo tarafında yanlış/maddesiz.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| joseon | Joseon Hanedanı (Kore) | 1392-08-05 | 1910-08-29 | Var; harita:"joseon". Kore İmparatorluğu evresi (1897-10-12→) künye içinde |
| (yok) | Kore İmparatorluğu / Daehan Jeguk | 1897-10-12 | 1910-08-29 | EKSİK ayrı künye — gerekmiyor (aynı polity sürüyor, sınıf ②: künye adı/ozet'te beyan; hanedan aynı, devlet ünvanı değişti). İstenirse harita rengi aynı kalır; öneri: künye değişmesin, evren içi madde eklensin |
| goryeo | (komşu, başka sıra) | 0918-07-25 | 1392-08-05 | uç Joseon f ile aynı gün — tutarlı |
| japon-kore | (komşu) | 1910-08-29 | 1945-09-09 | uç tutarlı |

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f 1392-08-05 | künye + `ic_not_takvim`: ay-güneş 1392/7/17, gan-zhi 丙申 = Jülyen 1392-08-05 | Joseon Wangjo Sillok, Taejo 1/7/17 (sillok.history.go.kr/id/kaa_10107017_001) — birincil, atlasta alıntılı; okumadım bu oturumda | BİRİNCİ UYGULAMA ZATEN BEYANLI; bağımsız ikinci akademik kaynak yazılmamış | Gün doğru: ben gan-zhi'yi kendim hesapladım: Jülyen 1392-08-05 = 丙申 (kendi formülüm, doğrulandı, aşağıya bkz.). TAKVİM KURALI: 1582 öncesi Jülyen kalır. İkinci kaynak (Duncan, *The Origins of the Chosŏn Dynasty*, U Washington Press 2000; Lee Ki-baik, *A New History of Korea*) ERİŞİLEMEDİ |
| Kore İmparatorluğu 1897-10-12 | künye içi madde (evren dışı) | Google Arts & Culture «On October 12, he held a coronation ceremony as emperor at Hwangudan» (derleme sayfa, akademik DEĞİL) | Vikipedi 13 Ekim yazar (dayanak değil) | 12 Ekim 1897 en çok kaynakta; takvim 1896-01-01'den Gregoryen (Korea güneş takvimine geçti — doğrulanmadı). Akademik teyit ERİŞİLEMEDİ → "yalnız yıl+ay teyitli; gün teyitsiz" notuyla |
| t 1910-08-29 | künye | Japonya–Kore İlhak Antlaşması md.1; ilan/yürürlük 1910-08-29 (atlas `kronoloji_sinir_dogu_500_1281.js` ~8966: Japon hükûmet yanıtı, ic_not: imza 1910-08-22) | ikinci akademik kaynak yazılmamış | Hüküm: 29 Ağustos = ilan/yürürlük, 22 Ağustos = imza (antlaşma metni, birincil). Kaynak 2 ERİŞİLEMEDİ (Duus, *The Abacus and the Sword*, UC Press 1995, s. ~?) |

Hesap (kendi, Jülyen JDN formülü, `scratchpad/gz78.py`): 丙申 → 1392-08-05 ✓ (yöntem doğrulandı). Aynı yöntemle 睿宗 2/12/丙申 → 1108-01-29, 恭愍王 5/7/丁亥 → 1356-08-05 (aşağıda kullanıldı). Ay-güneş ay çevirisi şüpheli olabilir — "doğrulanmadı".

## c) Kronoloji (Değişmez 2 evreni: data/olaylar*.js + data/kronoloji_sinir*.js)
Var olanlar:
- 1392-08-05 Joseon'un kuruluşu — `data/kronoloji_sinir_dogu_500_1281.js` ~8920-8941 (toprak-kazanc; kaynak Sillok Taejo 1/7/17) ✓ DOĞRU gün.
- 1888-08-20 Kore–Rusya Tumen Antlaşması — `data/kronoloji_sinir_asya.js:73`; 1909-09-04 Gando Anlaşması — `:95`.
- 1910-08-29 ilhak — `data/kronoloji_sinir_dogu_500_1281.js` ~8955-8975 (kaynak İlhak Antlaşması md.1) ✓.
- Künye içi (EVREN DIŞI): 1392-08-05 kuruluş; 1444-01-19 hangıl (takvim notlu); **1592-05-23 Imjin** (odak_yer yalnız Seul); 1897-10-12 İmparatorluk; 1910-08-29 son. Yani 1592 ve 1897 maddeleri sayılmıyor.

Eksik / düzeltilecek (öneri satırları; hiçbiri uygulanmadı):
```
{ t:"1592-05-24", b:"Busanjin düştü; Japon Konishi Yukinaga ordusu Pusan'a çıkıp kaleyi aldı (Imjin Savaşı)", yer_id:"Pusan", kaynak:"Britannica 'Siege of Busanjin' (24 Mayıs 1592); Turnbull, The Samurai Invasion of Korea 1592-98, Osprey 2008, s.23-24; çıkarma 23 Mayıs = ay-güneş 4/13 (Gregoryen)" }
{ t:"1598-12-24", b:"Son Japon gemileri Pusan'dan ayrıldı; Imjin Savaşı sona erdi, Pusan Joseon'a döndü", yer_id:"Pusan", kaynak:"Turnbull 2008 (son gemiler 24 Aralık; generaller 21 Aralık; Noryang 16 Aralık 1598) — gün kesin teyit EDİLEMEDİ, derleme kaynaklarda 21-24 Aralık aralığı" }
{ t:"1897-10-12", b:"Kral Gojong Hwangudan'da imparator tahtına oturdu; Joseon Kore (Daehan) İmparatorluğu adını aldı", yer_id:"Seul", kaynak:"(akademik kaynak aranacak; bkz. ERİŞİLEMEYEN)" }
```
Diğer eksik adaylar (gün doğrulanmadı, araştırılsın): 1636-37 Mançu (Qing) istilası ve Samjeondo teslimi (1637-02, Joseon'un Qing'e tabi oluşu); 1876 Ganghwa Antlaşması; 1894-95 Çin-Japon Savaşı; 1905 Eulsa (himaye) antlaşması; Kyongsong/Altı Garnizon (aşağıda). Bunların harita etkisi sınırlı (toprak devri yok); yalnız anlatı.

## d) Harita uyumu
En geniş an: 1442 (20 yerleşim; tüm dönem 19-20). Haritada görünüyor. Yerleşimler: Seul, Pusan, Pyongyang? — ölçer sahip dökümü vermedi ("ölçülmedi: hangi 20 yerleşim"); en geniş yılda Jeju/Ganghwa/Hamhung/Jeonju joseon'da.

AÇIK = 4 (1 önemli dışı yok):
| gün | yerleşimler | durum | öneri |
|---|---|---|---|
| 1434-01-01 | Kyongsong (Gyeongseong) kazanç | madde yok (en yakın alâkasız, 264 gün) | Altı Garnizon 1434'te başladı: kaynakta Hoeryong, Jongseong, Gyeongwon, Gyeongheung 1434, Onseong 1440-41, Buryeong 1449 (Korece kaynak, WebSearch sonucu; akademik kaynak aranacak). **Kyongsong (Gyeongseong, 41.575N 129.598E, Kuzey Hamgyŏng)** bu listede YOK; kuruluş 1434 desteklenmiyor → yerleşim `kur:"1434-01-01"` ve s: başlangıcı doğrulanmalı. Öneri: gün kazanmadan önce Sillok'tan Gyeongseong kuruluşu; kanıtlanamazsa s: f'sini 1434 yerine kaynaklı tarihe çek veya `__BOSLUK__`/Goryeo-Jurchen sahibi. Madde ancak kaynak bulununca yazılsın |
| 1592-05-23 | Pusan kayıp | madde yok (31 g yanlış ilgisiz) | 1592-05-24 Busanjin düştü maddesi (yukarıda) ve s: kırılmasını 1592-05-24'e çek (bkz. `data/yerlesimler_asya.js` Pusan satırı — Pusan'ın s: f'si ölçülmedi) |
| 1598-11-24 | Pusan kazanç | madde yok | Japon boşaltması 1598-12-21..24; s: 1598-11-24'ü 1598-12-24'e çek, madde yukarıda |
| 1910-08-29 | Ceccu(Jeju), Concu(Jeonju), Ganghwa, Hamhung kayıp | 1910 maddesi VAR ama `yer:` alanı yalnız Goryeong·Gimhae·Jindo·Sabi (~8955) | **Düzeltme: o maddenin `yer:` ve `d:` alanına Jeju, Jeonju, Ganghwa, Hamhung eklensin.** Karşılığı zaten aynı gün/aynı antlaşma |

Not: goryeo tarafında (başka sıra) 1392-08-05 kayıp açığı AYNI neden: madde yer listesi (Goryeong, Gimhae, Jindo, Sabi) Jeju/Jeonju/Ganghwa/Hamhung'u saymıyor → ~8928-8940 maddesinin `yer:`ına eklenmeli (bunlar joseon `kazanç`ı olarak 1392-08-05 de açık görünmüyor çünkü joseon'un 1392 kazanç satırı 0 yerleşim sayıyor — yerleşimler 1417'den başlıyor: `1392:0`).
Joseon 1392'de 0 yerleşim, 1417'de 19: ilk 25 yıl harita sahibi? ölçülmedi (muhtemelen 1392-08-05 → 1417 arası s: dönemleri başka devlette).

Goryeo tarafı komşu açıkları (başka ajana bilgi, kaynak okundu):
- **Hamhung/Wonsan 1356-08-05 kazanç**: Goryeosa 恭愍王 5年 7月 丁亥 «東北面兵馬使柳仁雨攻雙城…收復和、登、定、長、預、高、文、宜州» (zh.wikisource.org/wiki/高麗史/卷三十九, okundu); 丁亥 = Jülyen 1356-08-05 (kendi hesabım) → atlas günü DOĞRU, yalnız madde yok. Öneri: `{ t:"1356-08-05", b:"Yu In-u Ssangseong'u aldı; Hwaju (Hamhung) çevresi Yuan'dan geri alındı", yer_id:"Hamhung" … }` (ikinci kaynak aranacak).
- **Hamhung 1107-01-01 kazanç**: Goryeosa 睿宗 2/12/丙申 «築雄、英、福、吉四州城» (卷十二) = 1108-01-29 (kendi hesabım, doğrulanmadı); 咸州 (Hamju) 3/2/甲午 1108 büyük dükalık; 1109-07 geri verildi (卷十三, 秋七月 丙午 «許還九城»; 咸雄二州 撤 乙丑). Atlas 1107-01-01 → yıl 1107 yanlışsa 1108-01-29; "1109-01-01" kayıp ise 1109-07 olmalı.
- **Jeju 1356-01-01 kazanç**: kaynak YANLIŞ okuma — Goryeosa 忠烈王 20/5 (1294) Yuan yanıtı «耽羅還隷高麗» (卷三十一): Jeju 1294'te Goryeo'ya döndü; 1356'da Jeju zaten Goryeo (6. ay Yoon Si-u 濟州都巡問使 atandı; 10. ay Jeju'da 加乙赤/忽古托 isyanı). Öneri: Jeju Yuan→Goryeo 1294-05 (gün: ay 5, gün çevrilmedi; "1294-05-01" ay hassasiyeti), 1356-01-01 kaldır.

## Önerilen düzeltmeler (KASA için)
1. `data/kronoloji_sinir_dogu_500_1281.js` ~8928-8932 (1392-08-05) `yer:` + `d:`ya Ceccu (Jeju), Concu (Jeonju), Ganghwa, Hamhung ekle; ~8955-8960 (1910-08-29) aynı dört yerleşimi ekle.
2. Yeni maddeler: 1592-05-24 Busanjin; 1598-12-24 Pusan geri; 1897-10-12 İmparatorluk (kaynak bulununca).
3. Pusan s: 1592-05-24 / 1598-12-24 olarak güncelle; Kyongsong kuruluşunu kaynakla doğrula.
4. Joseon künyesi `ic_not`: "1897-10-12 'Kore İmparatorluğu' adı — aynı polity, künye bölünmedi" beyanı (sınıf ② GENİŞLET kararı; kayıt altına).
5. Goryeo (başka ajan): Hamhung/Wonsan 1356-08-05 maddesi, Jeju 1356 satırını 1294'e çek.

## Erişilemeyen kaynaklar
- Joseon Wangjo Sillok Taejo 1/7/17 (sillok.history.go.kr) — bu oturumda açmadım, atlas alıntısına güvenildi.
- 2. akademik kaynak (hepsi için): J. B. Duncan, *The Origins of the Chosŏn Dynasty* (U Washington Press, 2000) — 1392 tahta çıkış günü; Lee Ki-baik, *A New History of Korea* (Harvard, 1984) — kuruluş + Altı Garnizon.
- Imjin dönemi gün: Turnbull, *The Samurai Invasion of Korea 1592–98* (Osprey 2008) s.23-24 (Busanjin), son bölüm (geri çekilme) — sorulacak: "Pusan'dan son Japon gemisi hangi gün ayrıldı?"
- Seonjo Sujeong Sillok 25/4/13 (Busanjin) — gün teyidi.
- Gojong Sillok 34/9/17 (Hwangudan tahta çıkış) ve Gregoryen karşılığı: Eckert, *Korea Old and New* (Harvard 1990) veya Palais, *Politics and Policy in Traditional Korea*: "Gojong'un imparator ilanı 12 mi 13 Ekim 1897?"
- Altı Garnizon / Gyeongseong kuruluş yılı: Sejong Sillok (sillok.history.go.kr) — "Gyeongseong bölgesi hangi yıl Joseon'a katıldı?"
- 恭愍王 5年 Ssangseong dönüşü için ikinci kaynak: Yuanshi / Henthorn, *Korea: The Mongol Invasions* (Brill 1963).
- Britannica/Iranica 403; TDV'de Joseon/Kore maddesi arandı: `islamansiklopedisi.org.tr/arama/?q=kambo%C3%A7ya` sorgusunda yalnız Kamboçya sonuç verdi; Kore (Joseon) için ayrı arama YAPILMADI ("TDV'de yok" demiyorum — çekilemedi/yapılmadı).

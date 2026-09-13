// ============================================================================
// EK OKUMA KARTLARI — MİMARİ YAPILAR (pilot, 6 yapı)
// ============================================================================
// Yazan: KITA 23, 13 Eylül 2026. Şartname: `oturumlar/KITA-23-MIMARI-0045.md`
// (paket 0045, H-0002 · H-0011). Emre: H-0002 "imar ile ilgili maddelere
// mimari yapının görselini koyalım" · H-0011 "mimari yapıların mimari
// özellikleri, etkilendiği sanatsal akımlar (barok, romanesk, gotik gibi)
// ve teknik özellikleri ek okuma olarak."
//
// 🔴 KENDİ AD ALANIM — CLAUDE.md §7 "ayrı dosya vermek ayrı ad alanı vermek
// değildir" kuralı gereği bu dosya window.EKOKUMA değil window.EKOKUMA_MIMARI
// tanımlıyor. Ana window.EKOKUMA dizisine KATILMADI ve KATILAMAZ:
// ölçüldü — `js/app.js:6505` (`ekOkumaMerakYukle`) yalnız İKİ dosyayı
// dinamik yükler: `data/ekokuma.js` (→ window.EKOKUMA) ve `data/merak.js`
// (→ window.MERAK). Bu dosya o listede DEĞİL, yani bugün hiçbir buton
// bu kartları göstermiyor — `data/ekokuma_sh104.js`nin (1 Eylül 2026)
// düştüğü aynı bekleme durumu. Koordinatöre bildirildi (tahta M-3646
// sonrası ayrı mesaj), gereken app.js satırını KITA 12 verecek.
//
// ── TÜR SEÇİMİ (şartname madde ①: "teknik-bilimsel tür mimari özellikleri
// taşır mı? Ölç, öner.") ────────────────────────────────────────────────
// ÖLÇTÜM: `EKOKUMA_TUR` (app.js:6524) "teknik-bilimsel" değerini ZATEN
// tanıyor ve butona çeviriyor (etiket "🔬 Teknik / Bilimsel"), kaynağı
// window.EKOKUMA — yani bugün TEK bir kart taşıyor (hukum-alani-mesafe,
// ekokuma.js:153, imparatorluğun coğrafi menzili). O kart da mimari
// DEĞİL ama aynı "teknik ölçülebilir özellik" ailesinden.
// ÖNERİM: bu altı kart da "teknik-bilimsel" türünü kullansın — yeni bir
// `tur` değeri (ör. "mimari") EKOKUMA_TUR'a KAYITLI DEĞİL ve kayıtsız
// bir tür SESSİZCE hiçbir buton üretmez (CLAUDE.md §7, "süzgeç tanımadığını
// sayıp basmaz, siler" — app.js:6597 `Object.keys(EKOKUMA_TUR).forEach`).
// Yani "teknik-bilimsel" kullanmak app.js'e HİÇ dokunmadan (zaten KİLİTLİ
// dosya, KITA 12'nin) altı kartın ileride buton üretmesini sağlıyor; yeni
// bir "mimari" türü ise KITA 12'nin EKOKUMA_TUR'a satır eklemesini
// GEREKTİRİR. Karar koordinatörün — burada uygulanan "teknik-bilimsel"dir,
// ama `tur:` alanı tek satırda değişebilir, geri dönüşü ucuz.
// ⚠️ Tek dezavantaj: mimari kartlar "🔬 Teknik / Bilimsel" etiketi altında
// menzil-ölçüm kartıyla karışacak — kullanıcı ikisini de aynı buton
// altında görecek. Kart sayısı arttıkça (373 imar maddesinin bir kısmı
// yapıya bağlanabilirse) bu karışıklık büyür; o zaman ayrı "mimari" türü
// gerekçesi güçlenir.
//
// ── OLAY BAĞLANTISI — her karta GERÇEK kronoloji tarihi ────────────────────
// `olay:[...]` alanındaki her tarih `data/olaylar_ek*.js`de BİREBİR var
// olan bir `t:` değeridir (dosyalar okunarak doğrulandı, uydurulmadı; her
// kayıt için hangi dosya/satır aşağıdaki `kaynak:` yorumunda).
//
// ── KAYNAK — TDV, HTTP kodu ve gövde okunarak sınandı (CLAUDE.md §4) ───────
//   sultan-ahmed-camii-ve-kulliyesi        → 200, gövde okundu
//   suleymaniye-camii-ve-kulliyesi         → 200, gövde okundu
//   selimiye-camii-ve-kulliyesi--edirne    → 200, gövde okundu
//     ⚠️ dikkat: "selimiye-camii-ve-kulliyesi" (soneksiz) 302 ÖLÜ —
//        CLAUDE.md'de zaten kayıtlı tuzak, bu slug --edirne soneklisi
//   mostar-koprusu                         → 200, gövde okundu
//   edirnekapi-camii-ve-kulliyesi          → 200, gövde okundu
//     ⚠️ "mihrimah-sultan-camii" ve türevleri (4 varyant denendi) 302 ÖLÜ;
//        doğru adres bu değil, "edirnekapi-camii-ve-kulliyesi" — TDV'nin
//        kendi "mihrimah-sultan" (kişi) maddesi de bunu doğruluyor:
//        "Mimari detaylar için EDİRNEKAPI CAMİİ ve KÜLLİYESİ maddesine
//        başvurun" diyor.
//   nuruosmaniye-kulliyesi                 → 200, gövde okundu
//     ⚠️ "nuruosmaniye-camii-ve-kulliyesi", "nuruosmaniye-camii", "nuruosmaniye"
//        üçü de 302 ÖLÜ; doğru slug arama sayfasından bulundu.
//
// ── GÖRSEL — AYRI DOSYADA, AYRI OTURUMDA ────────────────────────────────
// Görsel şeması KITA 24'ün (tahta M-3650, 13 Eylül 04:50): kendi dosyam
// `data/gorsel_mimari.js` → `window.GORSEL_MIMARI`, `tur:"mimari"`. Bu
// dosyada görsel alanı YOK — iki katman ayrı tutuluyor (D175).

window.EKOKUMA_MIMARI = [

{ id:"mimari-sultanahmet", tur:"teknik-bilimsel",
  olay:["1609-08-09"],
  kisa:"Altı minareli ilk selâtin camii — ve hazineden, fetih zaferi olmadan yapılan ilki.",
  metin:"Sultan Ahmed Camii, I. Ahmed'in emriyle 1609'da Atmeydanı'nda başlanıp 1620'de tamamlandı; mimarı, Mimar Sinan'ın yanında yetişmiş Sedefkâr Mehmed Ağa'dır. Yapı, klasik Osmanlı cami şemasının revaklı avlulu düzenini izler: yaklaşık 22,4 metre çapındaki merkezî kubbe dört büyük payeye oturur, dört yönde birer yarım kubbeyle desteklenir ve bu yarım kubbeler üçer eksedrayla genişletilir. Döneme kadar denenmemiş bir düzenlemeyle altı minare yapılmıştır — TDV, bunun Kâbe'yle 'eşitlik' iddiasına yol açtığına dair yaygın rivayeti doğrulamaz, yalnız 'o zamana kadar denenmemiş bir düzenleme' olduğunu kaydeder.\n\nYapıda kesme küfeki taşı ağırlıklı malzeme olarak kullanılmış; iç mekân 21.000'i aşkın İznik ve Kütahya çinisiyle, mermer, ahşap ve maden süslemelerle donatılmıştır. 17. yüzyılın ilk çeyreğine ait olan cami, klasik Osmanlı mimarisinin son evresini temsil ederken bazı bölümlerinde barok motiflerle de karşılaşılır — yaklaşan üslup değişiminin ilk izleri.\n\nAyrı bir not: caminin banisi I. Ahmed, camiyi bir fetih zaferine dayanmadan doğrudan hazineden yaptırmıştır; bu, dönemin bazı çevrelerince eleştiri konusu olmuştur, çünkü büyük selâtin camileri geleneksel olarak bir zaferin anısına yapılırdı.",
  kesinlik:"kesin",
  kaynak:"TDV: sultan-ahmed-camii-ve-kulliyesi (gövde okundu, HTTP 200). Tarih: data/olaylar_ek7.js:67 (t:1609-08-09, temel atma) ve data/olaylar_ek17.js:23 (Sedefkâr Mehmed Ağa'nın başmimarlığa atanması, 1606)." },

{ id:"mimari-suleymaniye", tur:"teknik-bilimsel",
  olay:["1550-06-01","1557-10-16"],
  kisa:"Mimar Sinan'ın kendi 'kalfalık eserim' dediği yapı — akustik için kubbeye gömülü 64 boş küp.",
  metin:"Süleymaniye Camii ve Külliyesi, Kanûnî Sultan Süleyman adına Mimar Sinan'ın baş mimarlığında inşa edildi; temeli 13 Haziran 1550'de (27 Cemâziyelevvel 957) atılmış, yapı 15 Ekim 1557'de (21 Zilhicce 964) tamamlanmıştır. Kareye yakın dikdörtgen planlı (yaklaşık 69×62,3 m) camide merkezî kubbe 27,40 metre çapındadır ve iki yarım kubbeyle desteklenir. İç mekânı aydınlatan çok sayıda pencerenin yanında, kubbe içine sesi düzenlemek amacıyla yerleştirilmiş 64 adet boş küp bulunur — dönemin akustik mühendisliğine dair somut bir kanıttır.\n\nYapı düzgün kesme taştan inşa edilmiş, kubbeler ise tuğla örgü tekniğiyle örülmüştür. Tezyinatta 16. yüzyıl İznik çinileri ve renkli taş kakmalar kullanılmıştır. Külliye yalnız camiden ibaret değildir: medreseler, dârüşşifa (hastane) ve kütüphaneyi de içeren, klasik dönemin en büyük eğitim-hayır kompleksidir.\n\nTDV, yapıyı Osmanlı klasik mimarisinin 'zirve noktalarından biri' ve 'Sinan okulunun' en önemli örneklerinden biri olarak tanımlar; Sinan'ın kendisi bu eseri 'kalfalık eserim' diye nitelendirmiştir — asıl 'ustalık eserim' dediği Selimiye'den önceki büyük aşama.",
  kesinlik:"kesin",
  kaynak:"TDV: suleymaniye-camii-ve-kulliyesi (gövde okundu, HTTP 200). Tarih: data/olaylar_ek7.js:35 (t:1550-06-01, inşaat başlangıcı) ve data/olaylar_ek2.js:24 (t:1557-10-16, açılış)." },

{ id:"mimari-selimiye", tur:"teknik-bilimsel",
  olay:["1568-01-01","1575-03-01"],
  kisa:"Sinan'ın 'ustalık eserim' dediği yapı — 31,3 metrelik kubbesiyle Ayasofya'yı geçmeyi hedefledi.",
  metin:"Selimiye Camii ve Külliyesi (Edirne), II. Selim adına Mimar Sinan tarafından 1568'de başlanıp altı yıl süren bir inşaatla 1574'te tamamlandı; arastanın batı dükkânları, tonozlu örtü, dua kubbesi ve sıbyan mektebi ise II. Selim'in ölümünden sonra III. Murad döneminde Dâvud Ağa tarafından tamamlandı. Sekiz destekli merkezî kubbeli plan üzerine kurulu caminin kubbe çapı 31,30 metre, yüksekliği 42,25 metredir — Sinan'ın bu ölçüyle Ayasofya'nın kubbesini geçmeyi hedeflediği kabul edilir. Dört köşedeki minareler 70,89 metre yüksekliğinde ve üçer şerefelidir.\n\nYapıda sarımtırak renkte kesme taş kullanılmış, pencere ve kemerlerde iki renkli taş malzemeyle zenginleştirilmiştir. TDV, iç mekân tasarımını 'geniş ve ferah bir mekân bütünlüğü' olarak tanımlar; merkezî kubbeden kademeli yarım kubbeler ve kemerlerin birleşimi Osmanlı klasik mimarisinin en yüksek düzeyini temsil eder. Yapı UNESCO Dünya Mirası listesindedir.\n\nMimar Sinan'ın kendi tabiriyle bu yapı onun 'ustalık eserim' dediği eseridir — Süleymaniye'yi (kendi tabiriyle 'kalfalık eserim') aşan, meslek hayatının doruk noktası sayılan çalışması.",
  kesinlik:"kesin",
  kaynak:"TDV: selimiye-camii-ve-kulliyesi--edirne (gövde okundu, HTTP 200; ⚠️ soneksiz 'selimiye-camii-ve-kulliyesi' 302 ÖLÜ). Tarih: data/olaylar_ek14.js:51 (t:1568-01-01, inşaat başlangıcı) ve data/olaylar_ek2.js:25 (t:1575-03-01, tamamlanma)." },

{ id:"mimari-mostar-koprusu", tur:"teknik-bilimsel",
  olay:["1566-01-01"],
  kisa:"28,59 metrelik tek kemer — 1993'te yıkıldı, 2004'te aslına uygun yeniden yapıldı.",
  metin:"Mostar Köprüsü, Neretva nehri üzerinde, Mimar Sinan'ın öğrencisi Mimar Hayreddin tarafından Kanûnî Sultan Süleyman döneminde inşa edildi. İnşaata Muharrem 965 başında (Ekim 1557) girişilmiş, 974'te (1566-67) tamamlanmıştır; 1568 tarihli resmî bir belgede köprüden söz edilmesi bu tarihi doğrular. Tek gözlü, sivri kemerli, kesme taştan yapılan köprünün kemer açıklığı 28,59 metre, kemer kavisinin yüksekliği 12,02 metredir; su seviyesine göre nehirden yaklaşık 21 metre yükseklikte durur. Köprü üstünün genişliği 4,50 metre, iki yandaki korkuluklar 25 santimetre kalınlık ve 95 santimetre yükseklikte, döşeme kademeli olarak düzenlenmiştir.\n\nTDV bu yapıyı 'mimari dehânın terkibiyle taştan yapılmış değil de muhayyilenin cisim halini almasıyla meydana gelmiş gibi efsanevî bir mâna ve ruh kazanmıştır' diye tanımlar; köprü UNESCO tarafından korunan bir dünya mimarlık anıtıdır.\n\n⚠️ TARİHÇE NOTU (kaynak dışı, genel bilgi): köprü 1993'te Bosna Savaşı sırasında yıkılmış, 2004'te özgün taş ocağından getirilen malzeme ve tarihî yöntemlerle yeniden inşa edilmiştir. Bugün ayakta olan yapı bir REKONSTRÜKSİYONdur; yukarıdaki ölçüler ve tarihler özgün (1566-67) yapıya aittir. Görsel seçilirken bu ayrım (özgün dönem mi, 2004 rekonstrüksiyonu mu) açıkça belirtilmelidir.",
  kesinlik:"kesin",
  kaynak:"TDV: mostar-koprusu (gövde okundu, HTTP 200). Tarih: data/olaylar_ek14.js:36 (t:1566-01-01, tamamlanma). 1993/2004 rekonstrüksiyon notu TDV maddesinde değil — güncel/genel bilgi, ayrıca doğrulanmalı (ölçmedim)." },

{ id:"mimari-mihrimah-edirnekapi", tur:"teknik-bilimsel",
  olay:["1566-01-01"],
  kisa:"Sinan'ın tek kubbeli camiler tipinin en büyük örneği — üç sıra pencereyle aydınlık bir iç mekân.",
  metin:"Edirnekapı'daki cami ve külliye, Kanûnî Sultan Süleyman'ın kızı Mihrimah Sultan için Mimar Sinan tarafından yapıldı; inşaya dair izin 1563'te (970 h.) teyit edilmiş, yapı 1566'da (973 h.) tamamlanmıştır. Dikdörtgen planlı, tek kubbeli caminin ana namaz mekânı 20,25 metre çapında bir kubbeyle örtülüdür; kubbe dört büyük kemere oturur ve yan kanatlardan ayrılır. Yan kanatlar alçak, kubbeli üçer bölümden oluşur.\n\nYapıda mermer ve granit sütunlar, mermer minber, tuğla ve taş yapı malzemesi kullanılmıştır. TDV bu camiyi Sinan'ın tek kubbeli camiler tipinde oluşturduğu en büyük örnek olarak tanımlar; medreseyle birleştirilmesi ve yan kanatlar tasarımı zenginleştirmiştir. Kubbe kasnağında ve büyük kemerlerde üç sıra hâlinde pencere bulunması, harimi bolca aydınlatan bir özelliktir — Sinan'ın İstanbul surlarına en yakın büyük eserlerinden birinde uyguladığı bu aydınlık iç mekân, döneminin diğer selâtin camilerinden ayırt edici bir yanıdır.\n\nMihrimah Sultan'ın Mimar Sinan'a yaptırdığı iki büyük camiden ikincisidir; ilki (Üsküdar İskele Külliyesi) 1547'de tamamlanmıştı, Edirnekapı'daki yaklaşık yirmi yıl sonra bitmiştir.",
  kesinlik:"kesin",
  kaynak:"TDV: edirnekapi-camii-ve-kulliyesi (gövde okundu, HTTP 200; ⚠️ 'mihrimah-sultan-camii' ve dört türevi 302 ÖLÜ — doğru madde adı bu değil). Tarih: data/olaylar_ek14.js:45 (t:1566-01-01, tamamlanma)." },

{ id:"mimari-nuruosmaniye", tur:"teknik-bilimsel",
  olay:["1749-01-19","1755-12-05"],
  kisa:"Osmanlı mimarisinde Avrupa barok üslubunun ilk büyük uygulaması — klasik külliye şemasından kopuş.",
  metin:"Nuruosmaniye Külliyesi'nin mimarı Simeon (Simon) Kalfa'dır. Temeli I. Mahmud tarafından 19 Ocak 1749'da (29 Muharrem 1162) atılmış, ancak I. Mahmud tamamlanmasını görememiş; yapı kardeşi III. Osman döneminde 5 Aralık 1755'te (1 Rebîülevvel 1169) açılmıştır — caminin adı da açılışı gerçekleştiren III. Osman'a atfen 'Osman'ın Nuru' anlamına gelir. Kare planlı harimin ağırlığı dört büyük kemere dağılan tek ve büyük bir kubbe örter; kubbenin çapı 25,50 metredir. Külliyenin kütüphane ve diğer birimlerinde de kubbe ve tonoz sistemleri kullanılmıştır.\n\nYapıda mermer (mihrap ve işçilikte), taş (minarelerde), tuğla (kubbede) ve tunç (sebil şebekelerinde) malzemeler kullanılmıştır. Külliye; cami, medrese, kütüphane, türbe, sebil, çeşme, imaret ve dükkânlardan oluşan geniş bir kompleks olarak tasarlanmıştır.\n\nÜslup açısından Nuruosmaniye, TDV'nin tabiriyle 18. yüzyılda 'Türk sanatına sızan Avrupa'nın barok üslûbu'nu güçlü biçimde taşır: pencere profilleri, nişler, renkli camlı pencerelerin desenleri ve mermer mihrap barok motifleriyle süslenmiştir. Bu yönüyle klasik Osmanlı külliye şemasından belirgin biçimde ayrılan yapı, Osmanlı barok üslubunun İstanbul'daki ilk büyük ve olgun örneği kabul edilir.",
  kesinlik:"kesin",
  kaynak:"TDV: nuruosmaniye-kulliyesi (gövde okundu, HTTP 200; ⚠️ 'nuruosmaniye-camii-ve-kulliyesi', 'nuruosmaniye-camii', 'nuruosmaniye' üçü de 302 ÖLÜ). Tarih: data/olaylar_ek14.js:52 (t:1749-01-19, temel) ve data/olaylar_ek14.js:53 (t:1755-12-05, açılış)." }

];

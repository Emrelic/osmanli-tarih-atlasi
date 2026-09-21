// =====================================================================
// OLAYLAR_KRONOEKSIK0921 — eksik kronoloji maddeleri · 21 Eylül 2026
// KRONO-EKSIK-0921 oturumu · görevlendiren 1.MURAT (M-4873)
// =====================================================================
// NİÇİN VAR: Şartname (oturumlar/GECE-0921.md) altı olayın atlasta
// maddesi OLMADIĞINI söylüyordu. Ölçüldü: ALTIDAN İKİSİ ZATEN VARDI —
//   · Mühendishâne-i Berrî-i Hümâyun → olaylar_ek5.js:304 (açılış,
//     t:"1795-09-01" — 21 Eyl 2026'da 1795-06-15'ten düzeltildi, M-4911a)
//     + olaylar_ek14.js:65 (inşaat başlangıcı, 1793-07-14)
//   · Kilitbahir Kalesi             → olaylar_p0036.js:15 (t:"1463-01-01")
// O ikisi BURAYA YAZILMADI (mükerrer olurdu); durumları teslim mesajında.
//
// Kalan dördü TDV'den doğrulanarak yazıldı. Şartnamedeki "aday gün"ler
// dayanak sayılmadı; her biri kaynağa karşı sınandı (CLAUDE.md §4, D210):
//   aday 1603-06-07 → TDV TUTTU  (27 Zilhicce 1011 / 7 Haziran 1603)
//   aday 1621-01-24 → TDV TUTMADI: `osman-ii` donmayı anlatır ama GÜN VERMEZ
//   aday 1883 (gün?)→ TDV GÜN VERDİ: 3 Kasım 1883
//   aday 1826-04-08 → TDV TUTTU ama BAŞKA OLAYI tarihliyor: "açılış" değil,
//                     "inşaatın bitirilmesi". Başlık ona göre yazıldı.
//
// ⚠️ HENÜZ CANLI DEĞİL sayılmaz: `index.html` satırı bu oturumda eklendi
// (paylaşılan dosya — yazıldı, COMMİTLENMEDİ; 1.MURAT commitler).
// `denetle.py` `data/olaylar*.js`i glob'la okur, dosya adı yeter.
// 🔴 Değişken adı TEK altçizgi kuralına uyar: js/app.js:6225 süzgeci
// /^OLAYLAR(_[A-Za-z0-9]+)?$/ — `OLAYLAR_KRONO_EKSIK_0921` OKUNMAZDI.
// =====================================================================

window.OLAYLAR_KRONOEKSIK0921 = [

{ t:"1603-06-07", kesinlik:"gun", k:"siyaset",
  etiket:["siyaset","konu-siyasi","konu-kisiler","konu-hanedan"],
  b:"Şehzade Mahmud'un boğdurulması",
  gun:"27 Zilhicce 1011 / 7 Haziran 1603",
  yer:"İstanbul", yer_id:"İstanbul",
  kisiler:"III. Mehmed, Şehzade Mahmud, Safiye Sultan",
  d:"III. Mehmed, büyük oğlu Şehzade Mahmud'un tahta göz diktiğinden ve kendisini tahttan indirebileceğinden şüphelenerek onu boğdurttu; şehzadenin annesi ve otuz kadar hizmetçisi denize atıldı. Celâlî isyanlarının ve Anadolu'daki huzursuzluğun ortasında padişah, askerin şehzadeye meylettiğini görmüştü; vâlide sultanın da şehzadenin annesinden rahatsız olduğu kaydedilir. Bu infaz, altı ay sonra III. Mehmed'in ölümüyle tahta yalnız on üç yaşındaki I. Ahmed'in kalmasına ve kardeş katli geleneğinin fiilen sona ermesine giden yolun son halkalarındandır.",
  kaynak:"mehmed-iii", duygu:["😢"] },

{ t:"1621-01-01", kesinlik:"yil", k:"diger",
  etiket:["siyaset","konu-siyasi","konu-iktisadi"],
  b:"Görülmemiş kış — İstanbul Boğazı'nın donması",
  gun:"1621 kışı (TDV gün/ay vermez)",
  yer:"İstanbul, İstanbul Boğazı", yer_id:"İstanbul",
  kisiler:"II. Osman, Güzelce Ali Paşa, Ohrili Hüseyin Paşa",
  d:"Lehistan seferinin hazırlıkları sürerken İstanbul görülmemiş bir kış yaşadı: boğaz dondu, şehirde yiyecek içecek bulunamaz oldu. Piyasadaki sıkıntı yüzünden hayatından endişe eden Sadrazam Güzelce Ali Paşa, hava düzelip durum normale döndükten kısa süre sonra 15 Rebîülâhirde (9 Mart) öldü ve yerine Ohrili Hüseyin Paşa getirildi. Otağ 7 Cemâziyelâhirde (29 Nisan) Dâvud Paşa sahrasında kuruldu; II. Osman'ı Hotin'e götürecek sefer bu kışın ardından başladı.",
  ic_not_gun:"🔴 ŞARTNAMEDEKİ ADAY GÜN 1621-01-24 KAYNAKSIZ ÇIKTI. TDV `osman-ii` donmayı anlatır (\"Sefer hazırlıkları sürerken görülmemiş bir kış yaşanmış, boğaz donmuş, yiyecek içecek bulunamaz olmuştu.\") ama ne gün ne ay verir; `bogazici` maddesinde don/buz hiç geçmez (gövde okundu). ⇒ D210: gün yok → YYYY-01-01. YIL ise kaynaktan çıkar, tahmin değil: aynı paragrafta Ali Paşa'nın ölümü 15 Rebîülâhir (9 Mart) ve otağın kuruluşu 7 Cemâziyelâhir (29 Nisan) veriliyor; 15 Rebîülâhir 1030 = 9 Mart 1621, sefer de 1621 Hotin seferidir ⇒ kış 1620-21 kışıdır. `kesinlik:\"yil\"` bu yüzden.",
  kaynak:"osman-ii", duygu:["🥶"] },

{ t:"1826-04-08", kesinlik:"gun", k:"kultur",
  etiket:["kultur-sanat","konu-imar","konu-din"],
  b:"Nusretiye Camii inşaatının tamamlanması",
  gun:"8 Nisan 1826",
  yer:"Tophane, İstanbul", yer_id:"İstanbul",
  kisiler:"II. Mahmud, Krikor Amira Balyan",
  d:"II. Mahmud'un Tophane'de yaptırdığı selâtin camisinin inşaatı 8 Nisan 1826'da bitirildi; yapı, 24 Şubat 1823 büyük yangınında kül olan Tophane Kışlası mescidinin yerini aldı ve inşaatına Haziran 1823'te başlanmıştı. Mimarı Balyan ailesinden Krikor Amira Kalfa'dır; empire üslûbunun Osmanlı cami mimarisindeki en gösterişli örneklerinden sayılır. 14 Mayıs 1826'da minareler alt şerefeye kadar yıktırılıp daha yüksek olacak şekilde yeniden yapıldı; caminin \"Nusretiye\" (zafer) adı, aynı yılın haziranında Yeniçeri Ocağı'nın kaldırılmasının anısına verilmiştir, halk arasında ise Tophane Camii diye bilinir.",
  ic_not_b:"🔴 ŞARTNAME bu maddeyi \"Nusretiye Camii'nin açılışı\" diye istiyordu ve aday gün 1826-04-08'di. TDV `nusretiye-camii` gövdesinde 1826 geçen cümleler: \"inşaat 8 Nisan 1826'da bitirilmiştir\" ve \"14 Mayıs 1826 tarihinde minareler alt şerefeye kadar yıktırılıp yeniden inşa edilmiş\". ⇒ Gün DOĞRU ama AÇILIŞI değil İNŞAATIN BİTİŞİNİ tarihliyor (D211 tuzak ⑧: rakamı taşıyan cümlenin neyi tarihlediği okunur). Madde başlığı kaynağın dediğine çevrildi; küşâd/açılış töreni günü TDV'de BULUNAMADI.",
  kaynak:"nusretiye-camii", duygu:["🕌"] },

{ t:"1883-11-03", kesinlik:"gun", k:"bilim",
  etiket:["bilim","konu-bilim","konu-egitim"],
  b:"Hendese-i Mülkiyye Mektebi'nin kuruluşu",
  gun:"3 Kasım 1883",
  yer:"İstanbul", yer_id:"İstanbul",
  kisiler:"II. Abdülhamid",
  d:"1877-78 Osmanlı-Rus Savaşı'ndan sonra Türk ve müslüman kesimden mühendis yetiştirilmesi amacıyla II. Abdülhamid tarafından 3 Kasım 1883'te Hendese-i Mülkiyye Mektebi kuruldu. Mektep sivil mühendislik eğitimini askerî mühendishânelerin yanında ayrı bir kurum olarak kurumsallaştırdı; kendi binasının açılış töreni 29 Ekim 1884'te yapıldı. 1909'da askerî idareden alınıp Nâfia Nezâreti'ne bağlandı ve Mühendis Mekteb-i Âlîsi adını aldı.",
  ic_not_gun:"Şartnamedeki aday \"1883 (gün?)\" idi; TDV `hendese-i-mulkiyye-mektebi` GÜN VERİYOR: \"II. Abdülhamid tarafından 3 Kasım 1883'te kuruldu.\" Madde KURULUŞU tarihler; bina açılış töreni ayrı ve 29 Ekim 1884'tür (aynı gövde). Hicrî karşılık TDV'de YOK.",
  kaynak:"hendese-i-mulkiyye-mektebi", duygu:["🔬"] }

];

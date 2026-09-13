// ============================================================================
// EK OKUMA — MAGAZİN / İLGİNÇ HİKÂYE KARTLARI · PİLOT (5 padişah, 13 kart)
// ============================================================================
// Yazan: KITA 22 (local_4c91797a), 13 Eylül 2026 · paket 0045 H-0010.
// Şartname: oturumlar/KITA-22-PADISAH-0045.md · sözleşme: EK-OKUMA.md §②.
//
// 🔴 BU DOSYA BUGÜN EKRANA GELMEZ — ÖLÇÜLDÜ (D099):
//    js/app.js ekOkumaMerakYukle YALNIZ data/ekokuma.js + data/merak.js
//    yüklüyor; EKOKUMA_TUR["magazin"].kaynak() YALNIZ window.EKOKUMA okuyor.
//    İstek KITA 12'de: M-3656 (KITA 21, genel yükleyici + havuz) · M-3665 (bu dosya).
//    Ad alanı ayrı (§7): window.EKOKUMA_MAGAZIN — window.EKOKUMA'ya KATILMADI.
//
// 🔑 BAĞLAMA ALANI `t:` — `olay:` DEĞİL (js/app.js:6520):
//      if (kart.tur === "magazin" || !kart.tur) return kart.t === o.t;
//    `t:` kronoloji maddesinin `t:` değeriyle BİREBİR aynı olmalı; tutmazsa
//    buton HİÇ çıkmaz ve hiçbir yerde hata vermez. `olay:[t]` yalnız ileride
//    birleşik havuzun olay-deseniyle okunabilmesi için ayrıca konuldu.
//    ⚠️ D181 riski: bağlanan maddenin `t:`si düzeltilirse kart SESSİZCE kopar.
//       Özellikle `1481-05` (Fatih'in ölümü, olaylar.js) AY hassasiyetli —
//       TDV 3 Mayıs 1481 diyor; o madde güne çekilirse bu kartın `t:`si de
//       aynı turda güncellenmeli.
//
// ── KAYNAK — her kart TDV gövdesi OKUNARAK yazıldı (HTTP kodu yetmedi) ─────
//   mehmed-ii (METİN 90.875) · selim-i (63.623) · bayezid-ii (33.853) ·
//   suleyman-i (111.529) · hurrem-sultan (12.590) · mustafa-celebi (15.783) ·
//   murad-iv (51.477) · bagdat-kosku (11.826) · abdulhamid-ii (62.722) ·
//   yildiz-camii (10.335)
//   ⚠️ `sehzade-mustafa` 200 dönüyor ama bir YÖNLENDİRME KÜTÜĞÜ ("bk. MUSTAFA
//      ÇELEBİ") — gerçek madde `mustafa-celebi` (D109, tarayıcıyla doğrulandı).
//
// ── TELİF — metinler kendi cümlelerimle; TDV'den en çok 2-3 kelimelik
//    tırnaklı ifade. Kaynak `kaynak:` alanında.
//
// ── KESİNLİK (EK-OKUMA.md): kesin · tartismali · iddia · rivayet
//    "iddia"/"rivayet" kartları iddiayı AKTARIR, doğrulamaz; kaynağın kendi
//    değerlendirmesi metnin içinde yazılı.
//
// ── BULUNAMAYAN / BİLEREK YAZILMAYAN ────────────────────────────────────────
//   "şirpençe" (Yavuz)          selim-i gövdesinde YOK — kart TDV'nin kendi
//                               teşhisiyle ("muhtemelen veba yumrusu") yazıldı
//   IV. Murad "siroz"/"nikris"  murad-iv gövdesinde İKİSİ DE YOK — hastalık adı
//                               verilmedi
//   Fatih zehir iddiasının      TDV kimseyi adıyla anmıyor — ayrıntı yazılmadı
//   faili/ayrıntısı
//
// ── ŞEMA (EK-OKUMA.md §② + app.js ekKartHtml magazin dalı) ──────────────────
//   { id, tur:"magazin", kisi:[padişah id], t, olay:[t], soru, baslik,
//     metin (2-4 cümle, ≤900), not, kesinlik, kaynak }
//   `soru` yalnız BUTON İPUCU içindir (app.js _s.soru||_s.kisa, ≤52 karakter);
//   ekKartHtml magazin dalı onu kartın içine basmaz — kasıtlı.
// ============================================================================

window.EKOKUMA_MAGAZIN = [

// ---------- II. Mehmed (Fâtih) ----------
{ id:"fatih-gizli-mektup-1451", tur:"magazin", kisi:["mehmed2"],
  t:"1451-02-18", olay:["1451-02-18"],
  soru:"Hangi gizli mektup onu tahta çağırdı?",
  baslik:"Düğünden tahta: Çandarlı'nın gizli mektubu",
  metin:"Babası II. Murad onu 1444'te henüz on iki yaşındayken tahta oturtmuş, ancak genç padişah iki yıl sonra tahtı yeniden babasına bırakmak zorunda kalmıştı. 1450'nin sonunda Edirne'de Dulkadıroğlu Süleyman Bey'in kızı Sitti Hatun'la görkemli bir düğün yapıldı ve Mehmed gelinle birlikte Manisa'ya döndü. TDV'ye göre çok geçmeden Çandarlı Halil Paşa'nın gönderdiği gizli bir mektup babasının öldüğünü haber verip onu acele başkente çağırdı (10 Şubat 1451). Mehmed Gelibolu üzerinden süratle Edirne'ye ulaştı ve 18 Şubat 1451'de, on dokuz yaşında, ikinci kez tahta çıktı.",
  not:"",
  kesinlik:"kesin",
  kaynak:"TDV: mehmed-ii" },

{ id:"fatih-zehir-iddiasi", tur:"magazin", kisi:["mehmed2"],
  t:"1481-05", olay:["1481-05"],
  soru:"Fatih zehirlenerek mi öldü?",
  baslik:"Fâtih'in ölümü: nikris mi, zehir mi?",
  metin:"Fâtih Sultan Mehmed, yeni bir sefere çıkmak üzere Anadolu yakasına geçmişken 3 Mayıs 1481'de Üsküdar ile Gebze arasındaki Hünkârçayırı'nda öldü. TDV İslâm Ansiklopedisi ölümü nikris (gut) hastalığına bağlar. Padişahın zehirlendiği yolundaki iddialar ise ansiklopediye göre Âşıkpaşazâde'nin kroniğindeki bir bilginin yorumlanmasından doğar ve başka kaynaklarla doğrulanmaz.",
  not:"Kart iddiayı aktarır, doğrulamaz. İddianın kimi suçladığına dair ayrıntılar TDV maddesinde yer almadığı için buraya yazılmadı.",
  kesinlik:"iddia",
  kaynak:"TDV: mehmed-ii" },

// ---------- I. Selim (Yavuz) ----------
{ id:"yavuz-baba-zehir-soylentisi", tur:"magazin", kisi:["selim1", "bayezid2"],
  t:"1512-04-24", olay:["1512-04-24"],
  soru:"Yavuz babasını zehirletti mi?",
  baslik:"Tahttan inen II. Bayezid'in şüpheli ölümü",
  metin:"II. Bayezid, yeniçerilerin baskısıyla 24 Nisan 1512'de tahtı oğlu Selim'e bıraktı ve Dimetoka'ya gitmek üzere İstanbul'dan ayrıldı. TDV'nin Bayezid maddesine göre yolda, Çorlu yakınındaki Abalar köyünde fenalaştı ve 10 Haziran 1512'de öldü; ansiklopedi ölümün sebebini son derece şüpheli bulur ve bazı yerli ve yabancı kayıtlara dayanan zehirlenme ihtimalinin tartışıldığını belirtir. Aynı ansiklopedinin Yavuz maddesi ise Selim'in babasını zehirlettiği yolundaki söylentilerin özellikle Batı kaynaklarında yer aldığını, fakat başka kaynaklarla doğrulanamadığını yazar.",
  not:"İki TDV maddesi vurguda ayrışır: biri zehirlenme ihtimalini açık bırakır, öteki bunun Selim'e yüklenmesinin doğrulanamadığını söyler. Kart taraf tutmaz.",
  kesinlik:"tartismali",
  kaynak:"TDV: bayezid-ii · selim-i" },

{ id:"yavuz-olum-ur", tur:"magazin", kisi:["selim1"],
  t:"1520-09-21", olay:["1520-09-21"],
  soru:"Yavuz'u hangi hastalık öldürdü?",
  baslik:"Sırttaki ur: Yavuz'un son iki ayı",
  metin:"I. Selim 1520 yazında İstanbul'dan Edirne'ye doğru yola çıktı; TDV bu yolculuğun bozulan sağlığı ve şehirdeki veba salgınıyla ilgili olmasını kuvvetle muhtemel sayar. Sırtında çıkan büyük bir ur yüzünden Çorlu'dan öteye gidemedi, iki ay süren tedavi sonuç vermedi ve 21-22 Eylül 1520 gecesi öldü. Ansiklopedi urun 'muhtemelen veba yumrusu' olduğunu yazar; yani teşhis bir ihtimaldir, kesin değildir. Yakın adamı Hasan Can'ın oğlu Hoca Sâdeddin'e anlattığına göre padişah, Hasan Can'ın okuduğu Yâsîn suresini tekrarlarken son nefesini verdi.",
  not:"Son anlara dair anlatı tek bir tanığa, Hasan Can'a dayanır ve oğlunun eseri aracılığıyla bize ulaşır.",
  kesinlik:"tartismali",
  kaynak:"TDV: selim-i" },

// ---------- I. Süleyman (Kanûnî) ----------
{ id:"hurrem-nikah-buyu-soylentisi", tur:"magazin", kisi:["suleyman1"],
  t:"1558-04-15", olay:["1558-04-15"],
  soru:"Hürrem padişahı büyüyle mi bağladı?",
  baslik:"Teamülü bozan nikâh ve 'büyü' söylentisi",
  metin:"Osmanlı sarayında padişahın câriyeleriyle nikâhlanması bir zorunluluk değildi. TDV'ye göre Kanûnî, annesi Hafsa Sultan'ın 1534'teki ölümünün ardından Mâhidevran'ı Manisa'daki oğlu Mustafa'nın yanına gönderdi ve bu teamüle aykırı biçimde Hürrem'le resmen evlendi; bir Venedik kaynağı kararın halka duyurulduğunu ve hoşnutsuzlukla karşılandığını yazar. Busbecq gibi bazı çağdaş Avrupalı yazarlar ise Hürrem'in padişahın gönlünü büyüyle kazandığını nakleder — ansiklopedi bunu yalnızca bir nakil olarak aktarır.",
  not:"Nikâhın kendisi belgelidir; 'büyü' bir iddiadır ve doğruluğu ileri sürülmez.",
  kesinlik:"iddia",
  kaynak:"TDV: hurrem-sultan · suleyman-i" },

{ id:"sehzade-mustafa-katli-entrika", tur:"magazin", kisi:["suleyman1"],
  t:"1553-10-05", olay:["1553-10-05"],
  soru:"Mustafa'nın katlinde Hürrem'in payı ne?",
  baslik:"Şehzade Mustafa'nın katli: bir saray entrikası mı?",
  metin:"Kanûnî, ordunun ve halkın sevdiği büyük oğlu Mustafa'yı İran seferi yolunda, Konya Ereğlisi yakınındaki ordugâhında boğdurttu; kararın öncesinde Rüstem Paşa, şehzadenin tahtı ele geçirmeye hazırlandığını padişaha bildirmişti. TDV'nin Hürrem maddesi, tarihçi Âlî'ye dayanarak olayda Hürrem, kızı Mihrimah ve damadı Rüstem Paşa'nın büyük payı olduğundan şüphe etmez. Aynı ansiklopedinin Mustafa Çelebi maddesi ise Osmanlı kaynaklarının olayı bu isimlerin başrolde olduğu bir saray entrikasına bağladığını, ama bu anlatının sipahilerin ve topraksız köylülerin neden şehzadenin etrafında toplandığını açıklamaktan uzak kaldığını vurgular.",
  not:"İdamın kendisi kesindir; tartışmalı olan Hürrem'in payıdır. İdam gününü TDV'nin iki maddesi farklı verir: Kanûnî maddesine göre 5 Ekim, Mustafa Çelebi maddesine göre 6 Ekim 1553 Cuma.",
  kesinlik:"tartismali",
  kaynak:"TDV: hurrem-sultan · mustafa-celebi · suleyman-i" },

{ id:"kanuni-olumu-gizlendi", tur:"magazin", kisi:["suleyman1"],
  t:"1566-09-07", olay:["1566-09-07"],
  soru:"Kanunî'nin ölümü nasıl gizlendi?",
  baslik:"Tahtın altındaki tabut",
  metin:"Kanûnî 7 Eylül 1566'da Zigetvar kuşatması sürerken öldü, fakat ölümü büyük bir ustalıkla gizlendi. Sırrı bilen birkaç kişiden biri olan Feridun Bey'e göre iç organları alınıp amber ve miskle hazırlanan naaşı bir tabuta konarak geçici olarak tahtın altına gömüldü. Kırk iki gün sonra ceset gizlice bir arabaya yerleştirildi ve yol boyunca padişah hâlâ yaşıyormuş gibi davranıldı; ölüm ancak II. Selim Belgrad'a gelince resmen ilân edildi. Cenaze töreni üçüncü kez 23 Kasım'da İstanbul'da, Süleymaniye Camii'nde yapıldı ve padişah caminin yanındaki türbesine defnedildi.",
  not:"Gizleme ayrıntıları olayın içinde bulunan Feridun Bey'in anlatısına dayanır.",
  kesinlik:"kesin",
  kaynak:"TDV: suleyman-i" },

// ---------- IV. Murad ----------
{ id:"murad4-tebdil-machiavelli-rivayeti", tur:"magazin", kisi:["murad4"],
  t:"1623-09-10", olay:["1623-09-10"],
  soru:"IV. Murad Machiavelli okudu mu?",
  baslik:"Kılık değiştiren padişah ve Machiavelli rivayeti",
  metin:"IV. Murad, annesi Kösem Sultan'ın nüfuzu altında geçen vesayet yıllarında devlet işleriyle yakından ilgilendi; TDV'ye göre tebdil-i kıyafetle dolaşarak memleketin durumunu kendi gözüyle görmeye çalıştı. Bazı Batı kaynakları daha ileri gider: padişahın her yerde hafiyeler bulundurduğunu ve Müslüman olmuş birine çevirttiği Machiavelli'yi okuduğunu anlatır. Ansiklopedi bu son iki bilgiyi yalnızca bir rivayet olarak aktarır.",
  not:"",
  kesinlik:"rivayet",
  kaynak:"TDV: murad-iv" },

{ id:"murad4-revan-senligi-gecesi", tur:"magazin", kisi:["murad4"],
  t:"1635-08-08", olay:["1635-08-08"],
  soru:"Revan zaferi şenliğinde ne oldu?",
  baslik:"Zafer şenliğinin ilk gecesi",
  metin:"Revan'ın fethi haberi İstanbul'a ulaşınca dört gece sürecek şenlikler başladı. TDV'ye göre annesinin kendisine karşı entrikalar çevirmesinden kaygılanan IV. Murad, zaferin yarattığı havayı fırsat bilerek İstanbul'daki kardeşleri Şehzade Bayezid ile Süleyman'ı öldürttü (27 Ağustos 1635). Yirmi beşer yaşlarındaki iki şehzadenin şenliklerin başladığı gece öldürülmesi halkta derin bir üzüntü ve öfke uyandırdı.",
  not:"Kart fethin kronoloji maddesine bağlıdır; anlatılan olay, haberin İstanbul'a ulaştığı geceye aittir.",
  kesinlik:"kesin",
  kaynak:"TDV: murad-iv" },

{ id:"murad4-son-gunleri", tur:"magazin", kisi:["murad4"],
  t:"1640-02-09", olay:["1640-02-09"],
  soru:"IV. Murad nerede ve nasıl öldü?",
  baslik:"Kardeşini boğdurduğu odada son nefes",
  metin:"Bağdat'ı geri alıp İstanbul'a dönen IV. Murad, TDV'ye göre bir akşam yakınlarının teklifiyle eskisi gibi yiyip içtikten sonra ertesi gün hastalandı ve bütün tedavilere rağmen günden güne ağırlaştı. Yanındaki imam Şâmî Yûsuf Efendi onun zaman zaman bilincini yitirdiğini anlatır. Padişah, Şubat 1640'ta bir perşembe akşamı yatsıdan sonra, Bağdat seferine çıkmadan önce kardeşi Şehzade Kasım'ı boğdurttuğu odada öldü; yerine kardeşi İbrahim geçti.",
  not:"Bilinç kaybı ayrıntısı tek tanığa dayanır. Ölüm günü kaynaklarda bir gün oynar: TDV '15 Şevval 1049 (8 Şubat 1640) Perşembe' der, oysa 8 Şubat 1640 çarşambaya, 9 Şubat perşembeye denk gelir.",
  kesinlik:"kesin",
  kaynak:"TDV: murad-iv · bagdat-kosku" },

// ---------- II. Abdülhamid ----------
{ id:"abdulhamid-hal-korkusu-hafiye", tur:"magazin", kisi:["abdulhamid2"],
  t:"1876-08-31", olay:["1876-08-31"],
  soru:"Abdülhamid neyden korkuyordu?",
  baslik:"Tahttan indirilme korkusu: hafiyeler ve saraya yapışık cami",
  metin:"II. Abdülhamid, kendisinden önceki iki padişahın, Abdülaziz ile V. Murad'ın, art arda tahttan indirildiği bir ortamda tahta çıktı. TDV'ye göre bu yaşananlar vehimli mizacındaki şüpheciliği, kendisinin de indirileceği yolunda sabit bir fikre dönüştürdü; Çırağan vak'aları bu kaygıyı artırdı. Olup biteni öğrenmek için güçlü bir hafiye teşkilatı kurdu; jurnalciliği kötü saysa da vazgeçilmez bulduğunu söylerdi. Aynı endişe mimariye de yansıdı: V. Murad'ın yeniden tahta çıkarılmasından çekindiği için cuma selamlığında saraydan uzaklaşmamak amacıyla 1881-1885'te Yıldız Sarayı'nın önüne Yıldız Camii'ni yaptırdı.",
  not:"",
  kesinlik:"kesin",
  kaynak:"TDV: abdulhamid-ii · yildiz-camii" },

{ id:"abdulhamid-yildiz-suikasti-sohbet", tur:"magazin", kisi:["abdulhamid2"],
  t:"1905-07-21", olay:["1905-07-21"],
  soru:"Abdülhamid 1905 suikastından nasıl kurtuldu?",
  baslik:"Uzayan bir sohbet ve patlayan bomba",
  metin:"21 Temmuz 1905 cuma günü Yıldız Camii'ndeki cuma selamlığı töreninde Ermeni komitacılar II. Abdülhamid'e karşı bombalı bir suikast düzenledi. TDV'ye göre patlamada tören alanındaki yirmi altı kişi hayatını kaybetti, elli sekiz kişi yaralandı. Padişahı kurtaran şey, camiden çıkışta Şeyhülislâm Cemâleddin Efendi ile ayaküstü beklenenden biraz uzun konuşması oldu.",
  not:"",
  kesinlik:"kesin",
  kaynak:"TDV: yildiz-camii" },

{ id:"abdulhamid-selanik-marangoz", tur:"magazin", kisi:["abdulhamid2"],
  t:"1909-04-27", olay:["1909-04-27"],
  soru:"Tahttan inen Abdülhamid Selanik'te ne yaptı?",
  baslik:"Gece yarısı sürgün ve marangoz padişah",
  metin:"31 Mart Vak'ası'nın ardından tahttan indirilen II. Abdülhamid, Çırağan Sarayı'nda oturmak istediğini bildirmişti; ancak TDV'ye göre Hareket Ordusu komutanı Mahmud Şevket Paşa onu aynı gece Selanik'e gönderdi. Eşyasını bile alamadan birkaç bavulla gece yarısı Yıldız Sarayı'ndan çıkarılan eski padişah, ailesi ve maiyetinden 38 kişiyle Sirkeci'den özel bir trenle yola çıktı. Selanik'te Alâtini Köşkü'ne yerleştirildi ve vaktini marangozluk ve demircilikle geçirdi.",
  not:"TDV'deki bir görsel altyazısı, Yıldız Hamidiye Camii'ndeki gül ağacından bir cumba kafesinin Abdülhamid'in kendi el işi olduğunu belirtir.",
  kesinlik:"kesin",
  kaynak:"TDV: abdulhamid-ii" }

];

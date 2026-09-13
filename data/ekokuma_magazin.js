// ============================================================================
// EK OKUMA — MAGAZİN / İLGİNÇ HİKÂYE KARTLARI · PİLOT (5 padişah, 13 kart)
// ============================================================================
// Yazan: KITA 22 (local_4c91797a), 13 Eylül 2026 · paket 0045 H-0010.
// Şartname: oturumlar/KITA-22-PADISAH-0045.md · sözleşme: EK-OKUMA.md §②.
//
// 🟢 YÜKLENİYOR — 14 Eylül 2026 ölçümü (PAKET-EK-B): js/app.js `_EKOKUMA_DOSYA_ADLARI`
//    dizisinde "ekokuma_magazin" var; `_ekHavuz()` window.EKOKUMA_MAGAZIN'ı toplar.
//    ~~Eski hâli: 'BU DOSYA BUGÜN EKRANA GELMEZ' — BAYATTI (13 Eylül ölçümüydü).~~
//    İstek KITA 12'de: M-3656 (KITA 21, genel yükleyici + havuz) · M-3665 (bu dosya).
//    Ad alanı ayrı (§7): window.EKOKUMA_MAGAZIN — window.EKOKUMA'ya KATILMADI.
//
// 🔑 BAĞLAMA ALANI `t:` + `olay:` — 13 Eylül'den beri app.js ekKartBagliMi İKİSİNİ de okur;
//    `olay` listesi aynı günü taşıyorsa `t` listeye devreder. (Eski başlık: '`t:` — `olay:` DEĞİL'):
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

// 13 Eylül 2026 · EKOKUMA-DAGITIM-0913: bağ alanları (olay/baglanti/t) içerik okunarak yeniden dağıtıldı —
// gerekçe ve çakışma listesi denetim/EKOKUMA-DAGITIM-0913.md. Kart METİNLERİNE dokunulmadı.
// 14 Eylül 2026 · PAKET-EK-B (kutu parti-emrelic-0050 H-0003 + H-0007): okura görünen
// `not` ve `kaynak` alanlarındaki üretim notları (HTTP kodları, 'bulunamadı', bağlama
// açıklamaları, ⚠️ uyarıları) `ic_not`a taşındı — eski metinler ic_not içinde AYNEN duruyor
// (app.js _icNotAyikla ic_not'u çizmeden önce ayıklar). Kart METİNLERİNE dokunulmadı; TEK
// istisna bayezid1-esaret-aksehir-1403 (olgular aynı, kişinin akıbetine göre yeniden sıralandı).
// Yeni kart: mustafa1-kizlar-agasi-cikaran-indiren-1618. Sultan İbrahim dönemi kartları ayrı
// dosyada: data/ekokuma_ibrahim.js. Rapor: denetim/PAKET-EK-B-0914.md

window.EKOKUMA_MAGAZIN = [

{
  "id": "fatih-gizli-mektup-1451",
  "tur": "magazin",
  "kisi": [
    "mehmed2"
  ],
  "t": "1451-02-18",
  "olay": [
    "1451-02-18"
  ],
  "soru": "Hangi gizli mektup onu tahta çağırdı?",
  "baslik": "Düğünden tahta: Çandarlı'nın gizli mektubu",
  "metin": "Babası II. Murad onu 1444'te henüz on iki yaşındayken tahta oturtmuş, ancak genç padişah iki yıl sonra tahtı yeniden babasına bırakmak zorunda kalmıştı. 1450'nin sonunda Edirne'de Dulkadıroğlu Süleyman Bey'in kızı Sitti Hatun'la görkemli bir düğün yapıldı ve Mehmed gelinle birlikte Manisa'ya döndü. TDV'ye göre çok geçmeden Çandarlı Halil Paşa'nın gönderdiği gizli bir mektup babasının öldüğünü haber verip onu acele başkente çağırdı (10 Şubat 1451). Mehmed Gelibolu üzerinden süratle Edirne'ye ulaştı ve 18 Şubat 1451'de, on dokuz yaşında, ikinci kez tahta çıktı.",
  "not": "",
  "kesinlik": "kesin",
  "kaynak": "TDV: mehmed-ii"
},

{
  "id": "fatih-zehir-iddiasi",
  "tur": "magazin",
  "kisi": [
    "mehmed2"
  ],
  "t": "1481-05",
  "olay": [
    "1481-05"
  ],
  "soru": "Fatih zehirlenerek mi öldü?",
  "baslik": "Fâtih'in ölümü: nikris mi, zehir mi?",
  "metin": "Fâtih Sultan Mehmed, yeni bir sefere çıkmak üzere Anadolu yakasına geçmişken 3 Mayıs 1481'de Üsküdar ile Gebze arasındaki Hünkârçayırı'nda öldü. TDV İslâm Ansiklopedisi ölümü nikris (gut) hastalığına bağlar. Padişahın zehirlendiği yolundaki iddialar ise ansiklopediye göre Âşıkpaşazâde'nin kroniğindeki bir bilginin yorumlanmasından doğar ve başka kaynaklarla doğrulanmaz.",
  "not": "Kart iddiayı aktarır, doğrulamaz.",
  "kesinlik": "iddia",
  "kaynak": "TDV: mehmed-ii",
  "ic_not": "(PAKET-EK-B) Eski `not`un ikinci cümlesi üretim notuydu: 'İddianın kimi suçladığına dair ayrıntılar TDV maddesinde yer almadığı için buraya yazılmadı.'"
},

{
  "id": "yavuz-baba-zehir-soylentisi",
  "tur": "magazin",
  "kisi": [
    "selim1",
    "bayezid2"
  ],
  "t": "1512-06-10",
  "olay": [
    "1512-06-10",
    "1512-04-24"
  ],
  "soru": "Yavuz babasını zehirletti mi?",
  "baslik": "Tahttan inen II. Bayezid'in şüpheli ölümü",
  "metin": "II. Bayezid, yeniçerilerin baskısıyla 24 Nisan 1512'de tahtı oğlu Selim'e bıraktı ve Dimetoka'ya gitmek üzere İstanbul'dan ayrıldı. TDV'nin Bayezid maddesine göre yolda, Çorlu yakınındaki Abalar köyünde fenalaştı ve 10 Haziran 1512'de öldü; ansiklopedi ölümün sebebini son derece şüpheli bulur ve bazı yerli ve yabancı kayıtlara dayanan zehirlenme ihtimalinin tartışıldığını belirtir. Aynı ansiklopedinin Yavuz maddesi ise Selim'in babasını zehirlettiği yolundaki söylentilerin özellikle Batı kaynaklarında yer aldığını, fakat başka kaynaklarla doğrulanamadığını yazar.",
  "not": "Kaynaklar vurguda ayrışır: biri zehirlenme ihtimalini açık bırakır, öteki bunun Selim'e yüklenmesini başka kaynaklarla desteklenmiş saymaz. Kart taraf tutmaz.",
  "kesinlik": "tartismali",
  "kaynak": "TDV: bayezid-ii · selim-i",
  "ic_not": "(PAKET-EK-B) Eski `not`: 'İki TDV maddesi vurguda ayrışır…' — ayrışan maddeler TDV bayezid-ii ve selim-i."
},

{
  "id": "yavuz-olum-ur",
  "tur": "magazin",
  "kisi": [
    "selim1"
  ],
  "t": "1520-09-21",
  "olay": [
    "1520-09-21"
  ],
  "soru": "Yavuz'u hangi hastalık öldürdü?",
  "baslik": "Sırttaki ur: Yavuz'un son iki ayı",
  "metin": "I. Selim 1520 yazında İstanbul'dan Edirne'ye doğru yola çıktı; TDV bu yolculuğun bozulan sağlığı ve şehirdeki veba salgınıyla ilgili olmasını kuvvetle muhtemel sayar. Sırtında çıkan büyük bir ur yüzünden Çorlu'dan öteye gidemedi, iki ay süren tedavi sonuç vermedi ve 21-22 Eylül 1520 gecesi öldü. Ansiklopedi urun 'muhtemelen veba yumrusu' olduğunu yazar; yani teşhis bir ihtimaldir, kesin değildir. Yakın adamı Hasan Can'ın oğlu Hoca Sâdeddin'e anlattığına göre padişah, Hasan Can'ın okuduğu Yâsîn suresini tekrarlarken son nefesini verdi.",
  "not": "Son anlara dair anlatı tek bir tanığa, Hasan Can'a dayanır ve oğlunun eseri aracılığıyla bize ulaşır.",
  "kesinlik": "tartismali",
  "kaynak": "TDV: selim-i"
},

{
  "id": "hurrem-nikah-buyu-soylentisi",
  "tur": "magazin",
  "kisi": [
    "suleyman1"
  ],
  "t": "1534-01-01",
  "olay": [
    "1534-01-01|Hürrem"
  ],
  "soru": "Hürrem padişahı büyüyle mi bağladı?",
  "baslik": "Teamülü bozan nikâh ve 'büyü' söylentisi",
  "metin": "Osmanlı sarayında padişahın câriyeleriyle nikâhlanması bir zorunluluk değildi. TDV'ye göre Kanûnî, annesi Hafsa Sultan'ın 1534'teki ölümünün ardından Mâhidevran'ı Manisa'daki oğlu Mustafa'nın yanına gönderdi ve bu teamüle aykırı biçimde Hürrem'le resmen evlendi; bir Venedik kaynağı kararın halka duyurulduğunu ve hoşnutsuzlukla karşılandığını yazar. Busbecq gibi bazı çağdaş Avrupalı yazarlar ise Hürrem'in padişahın gönlünü büyüyle kazandığını nakleder — ansiklopedi bunu yalnızca bir nakil olarak aktarır.",
  "not": "Nikâhın kendisi belgelidir; 'büyü' bir iddiadır ve doğruluğu ileri sürülmez.",
  "kesinlik": "iddia",
  "kaynak": "TDV: hurrem-sultan · suleyman-i"
},

{
  "id": "sehzade-mustafa-katli-entrika",
  "tur": "magazin",
  "kisi": [
    "suleyman1"
  ],
  "t": "1553-10-05",
  "olay": [
    "1553-10-05|Mustafa"
  ],
  "soru": "Mustafa'nın katlinde Hürrem'in payı ne?",
  "baslik": "Şehzade Mustafa'nın katli: bir saray entrikası mı?",
  "metin": "Kanûnî, ordunun ve halkın sevdiği büyük oğlu Mustafa'yı İran seferi yolunda, Konya Ereğlisi yakınındaki ordugâhında boğdurttu; kararın öncesinde Rüstem Paşa, şehzadenin tahtı ele geçirmeye hazırlandığını padişaha bildirmişti. TDV'nin Hürrem maddesi, tarihçi Âlî'ye dayanarak olayda Hürrem, kızı Mihrimah ve damadı Rüstem Paşa'nın büyük payı olduğundan şüphe etmez. Aynı ansiklopedinin Mustafa Çelebi maddesi ise Osmanlı kaynaklarının olayı bu isimlerin başrolde olduğu bir saray entrikasına bağladığını, ama bu anlatının sipahilerin ve topraksız köylülerin neden şehzadenin etrafında toplandığını açıklamaktan uzak kaldığını vurgular.",
  "not": "İdamın kendisi kesindir; tartışmalı olan Hürrem'in payıdır. Kaynaklar idam gününü 5 ya da 6 Ekim 1553 olarak verir.",
  "kesinlik": "tartismali",
  "kaynak": "TDV: hurrem-sultan · mustafa-celebi · suleyman-i",
  "ic_not": "(PAKET-EK-B) Gün ayrışması: TDV suleyman-i 5 Ekim, TDV mustafa-celebi 6 Ekim 1553 Cuma. ekokuma_hanedan.js liste-hanedan-ici-katl-1 '6 Ekim 1553' kullanır; kronoloji maddesi 1553-10-05."
},

{
  "id": "kanuni-olumu-gizlendi",
  "tur": "magazin",
  "kisi": [
    "suleyman1"
  ],
  "t": "1566-09-07",
  "olay": [
    "1566-09-07"
  ],
  "soru": "Kanunî'nin ölümü nasıl gizlendi?",
  "baslik": "Tahtın altındaki tabut",
  "metin": "Kanûnî 7 Eylül 1566'da Zigetvar kuşatması sürerken öldü, fakat ölümü büyük bir ustalıkla gizlendi. Sırrı bilen birkaç kişiden biri olan Feridun Bey'e göre iç organları alınıp amber ve miskle hazırlanan naaşı bir tabuta konarak geçici olarak tahtın altına gömüldü. Kırk iki gün sonra ceset gizlice bir arabaya yerleştirildi ve yol boyunca padişah hâlâ yaşıyormuş gibi davranıldı; ölüm ancak II. Selim Belgrad'a gelince resmen ilân edildi. Cenaze töreni üçüncü kez 23 Kasım'da İstanbul'da, Süleymaniye Camii'nde yapıldı ve padişah caminin yanındaki türbesine defnedildi.",
  "not": "Gizleme ayrıntıları olayın içinde bulunan Feridun Bey'in anlatısına dayanır.",
  "kesinlik": "kesin",
  "kaynak": "TDV: suleyman-i"
},

{
  "id": "murad4-tebdil-machiavelli-rivayeti",
  "tur": "magazin",
  "kisi": [
    "murad4"
  ],
  "t": "1623-09-10",
  "olay": [
    "1623-09-10"
  ],
  "soru": "IV. Murad Machiavelli okudu mu?",
  "baslik": "Kılık değiştiren padişah ve Machiavelli rivayeti",
  "metin": "IV. Murad, annesi Kösem Sultan'ın nüfuzu altında geçen vesayet yıllarında devlet işleriyle yakından ilgilendi; TDV'ye göre tebdil-i kıyafetle dolaşarak memleketin durumunu kendi gözüyle görmeye çalıştı. Bazı Batı kaynakları daha ileri gider: padişahın her yerde hafiyeler bulundurduğunu ve Müslüman olmuş birine çevirttiği Machiavelli'yi okuduğunu anlatır. Ansiklopedi bu son iki bilgiyi yalnızca bir rivayet olarak aktarır.",
  "not": "",
  "kesinlik": "rivayet",
  "kaynak": "TDV: murad-iv"
},

{
  "id": "murad4-revan-senligi-gecesi",
  "tur": "magazin",
  "kisi": [
    "murad4"
  ],
  "t": "1635-08-08",
  "olay": [
    "1635-08-08"
  ],
  "soru": "Revan zaferi şenliğinde ne oldu?",
  "baslik": "Zafer şenliğinin ilk gecesi",
  "metin": "Revan'ın fethi haberi İstanbul'a ulaşınca dört gece sürecek şenlikler başladı. TDV'ye göre annesinin kendisine karşı entrikalar çevirmesinden kaygılanan IV. Murad, zaferin yarattığı havayı fırsat bilerek İstanbul'daki kardeşleri Şehzade Bayezid ile Süleyman'ı öldürttü (27 Ağustos 1635). Yirmi beşer yaşlarındaki iki şehzadenin şenliklerin başladığı gece öldürülmesi halkta derin bir üzüntü ve öfke uyandırdı.",
  "not": "Anlatılan cinayetler, fetih haberinin İstanbul'a ulaşmasıyla başlayan şenliklerin ilk gecesine aittir.",
  "kesinlik": "kesin",
  "kaynak": "TDV: murad-iv",
  "ic_not": "(PAKET-EK-B) Eski `not` bağlama notuydu: kart fethin kronoloji maddesine (1635-08-08) bağlı; şehzadelerin katli 27 Ağustos 1635, kendi maddesi yok."
},

{
  "id": "murad4-son-gunleri",
  "tur": "magazin",
  "kisi": [
    "murad4"
  ],
  "t": "1640-02-09",
  "olay": [
    "1640-02-09"
  ],
  "soru": "IV. Murad nerede ve nasıl öldü?",
  "baslik": "Kardeşini boğdurduğu odada son nefes",
  "metin": "Bağdat'ı geri alıp İstanbul'a dönen IV. Murad, TDV'ye göre bir akşam yakınlarının teklifiyle eskisi gibi yiyip içtikten sonra ertesi gün hastalandı ve bütün tedavilere rağmen günden güne ağırlaştı. Yanındaki imam Şâmî Yûsuf Efendi onun zaman zaman bilincini yitirdiğini anlatır. Padişah, Şubat 1640'ta bir perşembe akşamı yatsıdan sonra, Bağdat seferine çıkmadan önce kardeşi Şehzade Kasım'ı boğdurttuğu odada öldü; yerine kardeşi İbrahim geçti.",
  "not": "Bilinç kaybı ayrıntısı tek bir tanığa dayanır. Ölüm günü kaynaklarda 8 ya da 9 Şubat 1640 olarak geçer.",
  "kesinlik": "kesin",
  "kaynak": "TDV: murad-iv · bagdat-kosku",
  "ic_not": "(PAKET-EK-B) Eski `not`: TDV '15 Şevval 1049 (8 Şubat 1640) Perşembe' der, oysa 8 Şubat 1640 çarşambaya denk gelir. TDV ibrahim--padisah biat törenini 16 Şevval / 9 Şubat Perşembe verir; Gökpınar 2020 (Topçular Kâtibi) ölümü 9 Şubat verir. data/padisahlar.js murad4 olum '1640-02-08' — TUTARSIZLIK, padisahlar.js sahibine raporlandı (denetim/PAKET-EK-B-0914.md)."
},

{
  "id": "abdulhamid-hal-korkusu-hafiye",
  "tur": "magazin",
  "kisi": [
    "abdulhamid2"
  ],
  "t": "1876-08-31",
  "olay": [
    "1876-08-31",
    "1878-05-20"
  ],
  "soru": "Abdülhamid neyden korkuyordu?",
  "baslik": "Tahttan indirilme korkusu: hafiyeler ve saraya yapışık cami",
  "metin": "II. Abdülhamid, kendisinden önceki iki padişahın, Abdülaziz ile V. Murad'ın, art arda tahttan indirildiği bir ortamda tahta çıktı. TDV'ye göre bu yaşananlar vehimli mizacındaki şüpheciliği, kendisinin de indirileceği yolunda sabit bir fikre dönüştürdü; Çırağan vak'aları bu kaygıyı artırdı. Olup biteni öğrenmek için güçlü bir hafiye teşkilatı kurdu; jurnalciliği kötü saysa da vazgeçilmez bulduğunu söylerdi. Aynı endişe mimariye de yansıdı: V. Murad'ın yeniden tahta çıkarılmasından çekindiği için cuma selamlığında saraydan uzaklaşmamak amacıyla 1881-1885'te Yıldız Sarayı'nın önüne Yıldız Camii'ni yaptırdı.",
  "not": "",
  "kesinlik": "kesin",
  "kaynak": "TDV: abdulhamid-ii · yildiz-camii"
},

{
  "id": "abdulhamid-yildiz-suikasti-sohbet",
  "tur": "magazin",
  "kisi": [
    "abdulhamid2"
  ],
  "t": "1905-07-21",
  "olay": [
    "1905-07-21"
  ],
  "soru": "Abdülhamid 1905 suikastından nasıl kurtuldu?",
  "baslik": "Uzayan bir sohbet ve patlayan bomba",
  "metin": "21 Temmuz 1905 cuma günü Yıldız Camii'ndeki cuma selamlığı töreninde Ermeni komitacılar II. Abdülhamid'e karşı bombalı bir suikast düzenledi. TDV'ye göre patlamada tören alanındaki yirmi altı kişi hayatını kaybetti, elli sekiz kişi yaralandı. Padişahı kurtaran şey, camiden çıkışta Şeyhülislâm Cemâleddin Efendi ile ayaküstü beklenenden biraz uzun konuşması oldu.",
  "not": "",
  "kesinlik": "kesin",
  "kaynak": "TDV: yildiz-camii"
},

{
  "id": "abdulhamid-selanik-marangoz",
  "tur": "magazin",
  "kisi": [
    "abdulhamid2"
  ],
  "t": "1909-04-27",
  "olay": [
    "1909-04-27"
  ],
  "soru": "Tahttan inen Abdülhamid Selanik'te ne yaptı?",
  "baslik": "Gece yarısı sürgün ve marangoz padişah",
  "metin": "31 Mart Vak'ası'nın ardından tahttan indirilen II. Abdülhamid, Çırağan Sarayı'nda oturmak istediğini bildirmişti; ancak TDV'ye göre Hareket Ordusu komutanı Mahmud Şevket Paşa onu aynı gece Selanik'e gönderdi. Eşyasını bile alamadan birkaç bavulla gece yarısı Yıldız Sarayı'ndan çıkarılan eski padişah, ailesi ve maiyetinden 38 kişiyle Sirkeci'den özel bir trenle yola çıktı. Selanik'te Alâtini Köşkü'ne yerleştirildi ve vaktini marangozluk ve demircilikle geçirdi.",
  "not": "Yıldız Hamidiye Camii'ndeki gül ağacından bir cumba kafesinin onun kendi el işi olduğu belirtilir.",
  "kesinlik": "kesin",
  "kaynak": "TDV: abdulhamid-ii",
  "ic_not": "(PAKET-EK-B) Bilgi TDV abdulhamid-ii'deki bir görsel altyazısından."
},

{
  "id": "bayezid1-esaret-aksehir-1403",
  "tur": "magazin",
  "kisi": [
    "bayezid1"
  ],
  "t": "1403-03-09",
  "olay": [
    "1403-03-09",
    "1402-07-28|Fetret Devri başladı"
  ],
  "soru": "Timur'a esir düşen padişahın sonu ne oldu?",
  "baslik": "Çubuk Ovası'nda yalnız kalan padişah",
  "metin": "Ankara Savaşı'nın sonunda (28 Temmuz 1402) Bayezid savaş alanında neredeyse yalnız kaldı: Timur'un kendi safına çektiği Kara Tatarlar ve eski beylerinin yanına geçen beylik askerleri onu bıraktı, devlet ileri gelenleri de birer şehzadeyi yanlarına alıp kaçtı. Yaklaşık 3000 kişiyle çarpışmayı sürdüren padişah sonunda esir düştü. Timur, Avrupalı hükümdarların baş edemediği Osmanlı sultanını yendiğini Fransa ve İngiltere krallarına yazdığı zafer mektuplarıyla duyurdu. Bayezid esaret altında götürüldüğü Akşehir'de, 8 Mart 1403'te öldü; Timur ölüm haberini Denizli'den Akşehir'e doğru yola çıkmışken aldı.",
  "not": "",
  "kesinlik": "kesin",
  "kaynak": "TDV: bayezid-i · ankara-savasi · timur",
  "ic_not": "(PAKET-EK-B) Metin kişinin akıbetine odaklanacak biçimde yeniden sıralandı (olgular aynı, yeni bilgi eklenmedi). Eski `not`: \"Popüler 'demir kafes' rivayeti okunan üç TDV maddesinde (bayezid-i, ankara-savasi, timur) GEÇMİYOR; akademik dayanağı da bulunamadı, bu yüzden karta yazılmadı. Bağlı madde günü '8-9 Mart' diyor, TDV bayezid-i 8 Mart 1403 veriyor.\" Eski `kaynak`: 'TDV: bayezid-i (gövde okundu, HTTP 200) · ankara-savasi (gövde okundu, HTTP 200) · timur (gövde okundu, HTTP 200) · demir kafes rivayeti: bulunamadı'."
},

{
  "id": "mehmed3-culus-gecesi-1595",
  "tur": "magazin",
  "kisi": [
    "mehmed3"
  ],
  "t": "1595-01-27",
  "olay": [
    "1595-01-27"
  ],
  "soru": "Tahta çıktığı gece kardeşlerine ne dedi?",
  "baslik": "Cülus gecesi: cevap veremeyen padişah",
  "metin": "III. Murad'ın ölümü on bir gün gizlendi; Şehzade Mehmed ağır kış şartlarında Manisa'dan Mudanya'ya gelip kadırgayla 27 Ocak 1595 Cuma günü İstanbul'a ulaştı ve hemen tahta çıktı. O gece dördü yetişkin on dokuz şehzade boğularak öldürüldü. TDV'nin aktardığı, bir yabancı gözlemciye ait rivayete göre yetişkin şehzadeler ağabeylerini tebrike gelmiş, en büyükleri canlarına dokunulmamasını isteyince padişah cevap verememiş, üzüntüyle başını çevirmiş, fakat atalarının kanununa karşı çıkacak cesareti de gösterememişti. Ertesi gün saraydan çıkan on dokuz cenaze her kesimde büyük tepki doğurdu.",
  "not": "Tebrik ve af isteği sahnesi yalnız adı verilmeyen bir yabancı gözlemcinin anlatısıdır. Bu katlin ağırlığını padişahın saltanatı boyunca üzerinden muhtemelen atamadığı da yazılır.",
  "kesinlik": "rivayet",
  "kaynak": "TDV: mehmed-iii",
  "ic_not": "(PAKET-EK-B) Eski `not` son cümlesi: \"Aynı güne bağlı 'kardes-katli-karsilastirmali' merak kartı uygulamanın kurumsal yanını anlatır; bu kart yalnız cülus gecesinin sahnesini taşır.\" Eski `kaynak`: 'TDV: mehmed-iii (gövde okundu, HTTP 200)'."
},

{
  "id": "mehmed3-sehzade-mahmud-fal-1603",
  "tur": "magazin",
  "kisi": [
    "mehmed3"
  ],
  "t": "1603-12-22",
  "olay": [
    "1603-12-22"
  ],
  "soru": "Bir fal kâğıdı şehzadenin sonunu mu getirdi?",
  "baslik": "Falcının kâğıdı: Şehzade Mahmud'un sonu",
  "metin": "Hastalığı yüzünden sefere çıkamayan ve askerin büyük oğlu Mahmud'u desteklediğini bilen III. Mehmed, şehzadenin tahtına göz diktiğinden şüpheleniyordu; Safiye Sultan da şehzadenin annesini sevmiyor, onu izletiyordu. İngiliz elçisi Lello'nun anlattığına göre şehzade iki gün falakaya yatırılıp sorgulandı, annesinin girişimlerinden habersiz olduğu için bir şey söyleyemedi. Anne ise oğlunun tahta çıkıp çıkmayacağını merak edip bir şeyhe fal baktırdığını, gelen kâğıtta yalnız tahta geçeceğinin yazdığını, bunun babanın ölümüyle mi yoksa tahttan inmesiyle mi olacağının belirtilmediğini anlattı. Sonuç değişmedi: Mahmud 7 Haziran 1603'te boğduruldu, annesi ve otuz kadar hizmetçisi denize atıldı.",
  "not": "Falaka ve fal ayrıntıları İngiliz elçisi Lello'nun raporuna dayanır. Bu olayın padişahın ömrünün sonunda iyice içine kapanmasına yol açtığı belirtilir.",
  "kesinlik": "rivayet",
  "kaynak": "TDV: mehmed-iii",
  "ic_not": "(PAKET-EK-B) Eski `not`: 'Katlin kendi günü (7 Haziran 1603) için kronolojide madde bulunamadı; kart padişahın altı ay sonraki vefat maddesine bağlandı.' Eski `kaynak`: 'TDV: mehmed-iii (gövde okundu, HTTP 200) · 1603-06-07 kronoloji maddesi: bulunamadı'."
},

{
  "id": "ahmed1-kardesi-mustafayi-oldurtmemesi",
  "tur": "magazin",
  "kisi": [
    "ahmed1",
    "mustafa1"
  ],
  "t": "1603-12-23",
  "olay": [
    "1603-12-23"
  ],
  "soru": "I. Ahmed kardeşini neden öldürtmedi?",
  "baslik": "Bir hastalık, bir fırtına: Şehzade Mustafa'nın kurtuluşu",
  "metin": "On dört yaşında tahta çıkan I. Ahmed'in henüz oğlu yoktu; kardeşi Mustafa hânedanın geride kalan tek erkek üyesiydi ve bu yüzden canına dokunulmadı. TDV'ye göre babaları III. Mehmed'in on dokuz kardeşini öldürtmesinin halkta uyandırdığı nefret de kararda etkiliydi. Padişahın oğulları doğunca Mustafa'nın hayatı yeniden tehlikeye girdi. Bazı yabancı kaynaklar Ahmed'in onu birkaç kez öldürtmeye kalkıp vazgeçtiğini yazar: Venedik elçisi Contarini'nin 1612 raporuna göre padişah ilk seferinde birden rahatsızlandığı, ikincisinde büyük bir fırtına koptuğu için işi erteledi. Sıkı gözetim altında geçen bu yıllar Mustafa'nın zaten zayıf olan akıl dengesini büsbütün bozdu; 1617'de ağabeyinin yerine o tahta çıkarıldı.",
  "not": "Ani rahatsızlık ve fırtına ayrıntıları yalnız Venedik elçisi Contarini'nin raporuna dayanır. Bu padişahtan itibaren hanedanın en büyüğünün tahta geçmesi (ekberiyet) benimsendi ve öteki şehzadeler sarayda kafes arkasında tutulmaya başladı.",
  "kesinlik": "rivayet",
  "kaynak": "TDV: mustafa-i · ahmed-i",
  "ic_not": "(PAKET-EK-B) Eski `not`: 'Osmanlı kaynaklarından bir karşılığı TDV'de bulunamadı.' Eski `kaynak` HTTP notları taşıyordu. TEKRAR: aynı Contarini rivayeti ekokuma_hanedan.js 'tartisma-ahmed1-kardes-katli-terki' GÖRÜŞ 1'de de geçer — tür farklı (magazin sahne / tartışma açıklama), bilinçli bırakıldı."
},

{
  "id": "mustafa1-kizlar-agasi-cikaran-indiren-1618",
  "tur": "magazin",
  "kisi": [
    "mustafa1"
  ],
  "t": "1618-02-26",
  "olay": [
    "1618-02-26",
    "1617-11-22|ekberiyet"
  ],
  "soru": "Kızlar Ağası Mustafa'yı neden tahta çıkarıp indirdi?",
  "baslik": "Doksan altı gün arayla: tahta çıkaran da indiren de aynı ağa",
  "metin": "I. Ahmed 1617'de genç yaşta ölünce yerine büyük oğlu Osman değil, aklî dengesi çoktan sarsılmış kardeşi Mustafa geçirildi. Dönemin tarihçisi Peçuylu İbrâhim'e göre bu kararda Kızlar Ağası Mustafa Ağa'nın parmağı vardı: kendi çıkarını gözeten ağa, zayıf akıllı şehzadenin ileride düzelebileceğini telkin ederek cülus kararını etkiledi. Umulan iyileşme gelmedi. Peçuylu ile Kâtib Çelebi, yeni padişahın yerli yersiz deniz gezilerine çıktığını, yanındaki altınları balıklara yem diye attığını, rastgele para dağıttığını, huzura giren vezirlerin tülbentlerini çekip başlarını açtığını anlatır. Tarihçi Hasanbeyzâde'ye göre bu kez aynı Mustafa Ağa harekete geçti: padişahın durumunu kaymakam paşaya ve şeyhülislâma bildirdi, önü alınmazsa hazineyi boşaltıp şehzadeleri öldürteceği ve hanedanın soyunu kurutacağı haberlerini yaydı. 26 Şubat 1618'de, doksan altı günlük saltanatın sonunda Mustafa oturduğu odaya kapatıldı, tahta yeğeni II. Osman çıktı. Aynı günleri yazan Topçular Kâtibi ise tahttan indirilmeyi hiç anmaz ve padişahın kendi isteğiyle çekildiğini söyler.",
  "not": "Ağanın iki kararda da rol oynadığı, farklı tarihçilerin anlatıları yan yana konunca ortaya çıkar; ağanın niyetine dair yorumlar o tarihçilere aittir.",
  "kesinlik": "tartismali",
  "kaynak": "TDV: mustafa-i",
  "ic_not": "(PAKET-EK-B · kutu parti-emrelic-0050 H-0003) Kaynak TDV mustafa-i gövdesi (26.705 kr sayfa, okundu): Peçuylu Târih II, 360-361 (cülus telkini); Hasanbeyzâde (hal' haberi); Peçuylu + Fezleke I, 385-390 (garip haller); Topçular Kâtibi I, 666-670 (kendi isteğiyle çekildi); 'odanın kapıları üstüne kapanarak hapsedildikten sonra'. 'Doksan altı gün' = 22 Kasım 1617 → 26 Şubat 1618 (sayıldı: 96). Halk arasında anlatılan 'kızlarağasının onu odaya kilitlemesi' hikâyesi TDV'de YOK ⇒ yazılmadı. data/olaylar_ek17.js 1639-01-20 maddesinin OKURA GÖRÜNEN `d:` metninde '⚠️ RİVAYET DOĞRULANAMADI' geliştirici damgası duruyor — kronoloji sahibine raporlandı. Emre kartı hal' maddesine istedi ⇒ 1618-02-26 (tek madde); cülus maddesi 1617-11-22 iki madde taşır ⇒ '|ekberiyet'. data/padisahlar.js mustafa1 `skandal` 'Kızlar Ağası'nın … desteklediği rivayet edilir' der; TDV bunu Peçuylu'nun beyanı olarak verir — raporda."
},

{
  "id": "osman2-hac-niyeti-katl-1622",
  "tur": "magazin",
  "kisi": [
    "osman2"
  ],
  "t": "1622-05-20",
  "olay": [
    "1622-05-20|Genç Osman"
  ],
  "soru": "Genç Osman'ın hac niyeti neden ölümü oldu?",
  "baslik": "Yırtılan fetva ve Yedikule",
  "metin": "II. Osman Hotin'den döndükten beş ay sonra hac hazırlığı başlatınca Anadolu'dan asker toplayıp yeniçerileri ortadan kaldıracağı, başşehri taşıyacağı gibi dedikodular yayıldı; TDV bunları büyük ölçüde karşıtlarının propagandası sayar. Venedik raporlarındaki bir rivayete göre Şeyhülislâm Esad Efendi onu hac yerine cami yaptırmaya ikna edemeyince padişahın adaletle hükmetmesinin hacdan evlâ olduğuna fetva verdi; padişahın bir rüya üzerine yeniden harekete geçip fetvayı yırttığı da ileri sürülür. Çadırların Üsküdar'a geçirildiği haberiyle patlayan isyanda yakalanan padişah 20 Mayıs 1622'de Yedikule'de boğuldu. Bazı tarihçiler, öldüğüne kanıt olarak kulak ve burnunun kesilip Sultan Mustafa'nın annesine gösterildiğini yazar.",
  "not": "Fetvanın yırtılması ve kulak-burun ayrıntısı kaynaklarda \"ileri sürülür\" ya da \"bazı tarihçilere göre\" kaydıyla geçer; katlin kendisi kesindir.",
  "kesinlik": "tartismali",
  "kaynak": "TDV: osman-ii",
  "ic_not": "(PAKET-EK-B) Eski `not` son cümlesi: \"Aynı olayın ay hassasiyetli '1622-05' maddesi (olaylar.js) de var; kart günlü maddeye (olaylar_ek7) bağlandı.\""
},

{
  "id": "mustafa1-kubbeyi-delen-asiler-1622",
  "tur": "magazin",
  "kisi": [
    "mustafa1"
  ],
  "t": "1622-05-20",
  "olay": [
    "1622-05-20|I. Mustafa'nın ikinci"
  ],
  "soru": "Âsiler Mustafa'yı kilitli odadan nasıl çıkardı?",
  "baslik": "Kubbeyi delip padişah çıkaran âsiler",
  "metin": "19 Mayıs 1622'de saraya giren âsilerden biri I. Mustafa'nın adını anınca kalabalık onu padişah ilân edip aramaya koştu. Kapısını açamadıkları odanın içinden Mustafa'nın, adını duydukça 'Siz beni isterseniz ben de sizi isterim' diye seslendiği belirtilir. Âsiler kubbeye çıkıp kurşun kaplamayı baltayla kesti, açılan delikten iple sarkan üç kişi onu bir minderde oturur buldu. Olayların tanığı Hüseyin Tûgī'ye göre halsizlikten atta duramayan eski padişah iç giysileriyle bekletildi. Peçuylu İbrâhim'in bir tanıktan naklettiğine göre yeniçeri ortalarının camisinde mihraba oturtulan Mustafa dışarıdan ses geldikçe pencereye koşuyor, annesi ellerini parmaklıktan çözüp onu yerine oturtuyordu. Ertesi gün öğle vakti ikinci kez tahta çıkarıldı.",
  "not": "Sahne ayrıntıları görgü tanığı Hüseyin Tûgī ile dönem tarihçisi Peçuylu İbrâhim'in anlatısıdır.",
  "kesinlik": "rivayet",
  "kaynak": "TDV: mustafa-i",
  "ic_not": "(PAKET-EK-B) Eski `not` son cümlesi: 'Aynı güne düşen II. Osman'ın katli ayrı karta bağlıdır.' Eski `kaynak` HTTP notu taşıyordu."
},

{
  "id": "ibrahim-katli-kim-emretti-1648",
  "tur": "magazin",
  "kisi": [
    "ibrahim"
  ],
  "t": "1648-08-18",
  "olay": [
    "1648-08-18"
  ],
  "soru": "Kapatılan Sultan İbrahim'i kim boğdurttu?",
  "baslik": "Kilidine kurşun akıtılan oda",
  "metin": "Tahttan indirilen Sultan İbrâhim iki câriyesiyle iki kubbeli bir odaya kapatıldı; Karaçelebizâde'ye göre kapının kilidine kurşun akıtıldı. On gün sonra boğduruldu, ama kaynaklar sebep ve sorumlu konusunda ayrışır. Mehmed Halîfe, cülus bahşişi yüzünden yeniçerilerle çekişen sipahilerin onu yeniden tahta çıkarmak istediğini, bunun üzerine sadrazam, şeyhülislâm ve nakîbüleşrafın idamını sağladığını yazar. Olayların içindeki Karaçelebizâde ise bazı bostancıların onu odadan çıkarmaya yeltendiğini, haberi Kösem Sultan'ın ulaştırdığını, kendisinin karardan bilerek uzak tutulduğunu anlatır ve sorumluluğu Kösem Sultan'la devlet ricaline yükler. TDV, Kösem'i suçlayan bu ifadelerin başka kaynakla teyit edilemediğini, Naîmâ'nın dramatik anlatısının ise inandırıcılıktan uzak olduğunu belirtir.",
  "not": "Kâtib Çelebi idamın cellat Kara Ali eliyle yapıldığını yazar. Tahttan indirildiği günün anlatısı ayrı bir kartta, \"Deli\" lakabının tartışması ise 1644 tarihli maddede yer alır.",
  "kesinlik": "tartismali",
  "kaynak": "TDV: ibrahim--padisah",
  "ic_not": "(PAKET-EK-B) Eski `not`: \"TDV, Fezleke'deki günün 18 Ağustos olması gerektiğini not eder. Bağlı madde hal ve katli birlikte taşır (8-18 Ağustos). TDV ayrıca XX. yüzyılda yaygınlaşan 'Deli' lakabını reddeder (ayrı madde: 1644-01-01).\" Eski `kaynak`: 'TDV: ibrahim--padisah (gövde okundu, HTTP 200) · ölü: ibrahim (302), ibrahim--osmanli-padisahi (302) · ibrahim-i (200 ama YANLIŞ MADDE: Ağlebî İbrâhim b. el-Ağleb)'. Hal' günü kartı: data/ekokuma_ibrahim.js 'ibrahim-hal-gunu-yumruk-ve-oda-1648'."
},

{
  "id": "mehmed4-avci-sultan-hal-1687",
  "tur": "magazin",
  "kisi": [
    "mehmed4"
  ],
  "t": "1687-11-08",
  "olay": [
    "1687-11-08",
    "1687-08-01"
  ],
  "soru": "Avcı Mehmed'i tahttan eden bir tutku muydu?",
  "baslik": "Tazılarını dağıtan padişah",
  "metin": "IV. Mehmed ava tutkusu yüzünden 'Avcı' lakabıyla anılır. Merakı on yaşlarında saray bahçeleri ve Kâğıthane'deki av eğlenceleriyle başladı; Köprülüler devrinde saltanatının çoğunu av sahalarıyla çevrili Edirne'de geçirdi, 1678 Çehrin Seferi'nde Tuna'yı geçmeyip Silistre'de avlanmayı seçti. Viyana bozgunundan sonra kayıplar artarken av dedikoduları yayıldı; vaizlerin yüzüne söylediği ağır sözlere kulak asmadı. Budin'in düşüşü (2 Eylül 1686) üzerine avı bıraktığını ilân etti. 1687'de isyan eden ordu İstanbul'a yürürken av takımlarını ve tazılarını dağıtıp tövbe ettiğini duyurdu, ama iş işten geçmişti; 8 Kasım 1687'de tahttan indirildi. TDV, tutku hâline gelen av merakını hal'inin başlıca sebebi sayar.",
  "not": "Kamaniçe kuşatmasında kılık değiştirip muhasaraya katıldığı ve oğulları doğunca kardeşlerini öldürtmek isteyip annesinin engel olduğu da rivayet edilir.",
  "kesinlik": "kesin",
  "kaynak": "TDV: mehmed-iv",
  "ic_not": "(PAKET-EK-B) Eski `not` ikinci cümlesi: \"Bağlı 1687-08-01 maddesi 'avdan vazgeçme'yi anlatır; TDV'nin verdiği ilk vazgeçme ilânı Budin sonrasıdır (1686).\""
},

{
  "id": "selim3-mahmud2-28-temmuz-1808",
  "tur": "magazin",
  "kisi": [
    "selim3",
    "mahmud2"
  ],
  "t": "1808-07-28",
  "olay": [
    "1808-07-28|III. Selim öldürüldü",
    "1808-07-28|II. Mahmud tahta çıktı"
  ],
  "soru": "Top sesleri kimin tahta çıktığını haber verdi?",
  "baslik": "Kapıyı kırıp cesetle karşılaşan Alemdar",
  "metin": "Alemdar Mustafa Paşa 28 Temmuz 1808'de Bâbıâli'yi basıp III. Selim'i yeniden tahta çıkarmak için saraya yürüyünce IV. Mustafa kapıları kapattırdı ve amcası Selim ile kardeşi Mahmud'un öldürülmesine izin verdi. Kafeste yeğeni Mahmud'la yakın günler geçirmiş olan Selim yirmi kadar katille boğuştu. Kethüda Ebe Selim'in onu etkisiz bırakıp cellâdın boğduğu nakledilir; fakat Cevdet Paşa'nın tasvir ettiği darp izleri kanlı bir ölüme işaret eder. Kapıları kırıp giren Alemdar, Arz Odası önündeki sofada bir şilteye konmuş cesetle karşılaştı. Sarayburnu'ndan top sesleri gelince elçilikler dahil herkes Selim'in tahtına döndüğünü sandı; bir saat sonra münadiler yeni padişahın, zorlukla kaçırılıp kurtarılan Mahmud olduğunu ilân etti.",
  "not": "Selim'in öldürülüş biçimi kaynaklarda iki farklı anlatıyla verilir.",
  "kesinlik": "tartismali",
  "kaynak": "TDV: selim-iii · alemdar-mustafa-pasa · mahmud-ii--osmanli · mustafa-iv",
  "ic_not": "(PAKET-EK-B) Eski `not` ikinci cümlesi: \"Mahmud'un nerede saklandığı ve nasıl kurtarıldığına dair yaygın ayrıntılar okunan TDV maddelerinde bulunamadı, yazılmadı.\" Eski `kaynak`: HTTP notları + 'ölü: mahmud-ii (302)'."
},

{
  "id": "abdulaziz-olumu-intihar-cinayet-1876",
  "tur": "magazin",
  "kisi": [
    "abdulaziz"
  ],
  "t": "1876-06-04",
  "olay": [
    "1876-06-04",
    "1876-05-30"
  ],
  "soru": "Abdülaziz intihar mı etti, öldürüldü mü?",
  "baslik": "Makas, yarım muayene ve Yıldız Mahkemesi",
  "metin": "30 Mayıs 1876'da tahttan indirilen Abdülaziz, Topkapı'da kendisine III. Selim'in dairesinin ayrıldığını görünce onun gibi burada bitirilmek istendiğinden yakındı, sonra kendi isteğiyle Fer'iye Sarayı'na geçti. 4 Haziran'da odasında bilek damarları kesilmiş hâlde bulundu. On dokuz kişilik hekim heyetinin bir kısmı muayeneye fiilen katılmadı, Serasker Hüseyin Avni Paşa naaşın etraflıca incelenmesini engelledi; heyet gösterilen makasın yaraları açabileceği kaydıyla müphem bir rapor yazdı, gazeteler ölümü intihar diye duyurdu. 1881'de II. Abdülhamid'in açtırdığı soruşturma cinayet kanaatine vardı; Yıldız Mahkemesi Midhat Paşa dahil sanıkları idama mahkûm etti, padişah cezaları ömür boyu küreğe çevirdi.",
  "not": "Yıldız Mahkemesi kararı bir yargı hükmüdür, ama mesele günümüze kadar tartışılır; kart taraf tutmaz. Mahkûmlar cezalarını Tâif'te çekti.",
  "kesinlik": "tartismali",
  "kaynak": "TDV: abdulaziz",
  "ic_not": "(PAKET-EK-B) Eski `not`tan taşındı: \"⚠️ Bağlı madde (olaylar_ek7, 1876-06-04) ölüm yerini 'Çırağan Sarayı' ve soruşturma sonucunu 'intihar' diye veriyor; TDV abdulaziz ölümün Fer'iye Sarayı'nda olduğunu ve 1881 soruşturmasının cinayet kanaatine vardığını yazıyor — madde koordinatörce sınanmalı.\" (hâlâ AÇIK — raporda)"
},

{
  "id": "murad5-kisa-saltanat-kacirma-1876",
  "tur": "magazin",
  "kisi": [
    "murad5"
  ],
  "t": "1876-08-31",
  "olay": [
    "1876-08-31",
    "1878-05-20"
  ],
  "soru": "V. Murad'ın saltanatı neden bu kadar kısa sürdü?",
  "baslik": "Havuza atlayan padişah, kadın kılığındaki kurtarıcılar",
  "metin": "Rahatsızlığı eskiden beri bilinen V. Murad, cülus günü Serasker Kapısı'na götürülürken yaşadıklarıyla öyle sarsıldı ki biat töreni kısa kesildi. Amcası Abdülaziz'in esrarengiz ölümü onu büsbütün çökertti: Yıldız Sarayı'nda kendini havuza attı, bir cuma selâmlığı dönüşü sabah camları kırarak canına kıymak istedi. Hükümet durumu gizlemek için padişahın yüzünde ve sırtında çıban çıktığı söylentisini yaydı; kılıç kuşanma töreni yapılamadı, elçiler itimatnamelerini sunamadı. Hekim heyeti iyileşme ihtimalinin çok az olduğunu bildirince 31 Ağustos 1876'da tahttan indirildi. Çırağan'daki 28 yıllık göz hapsinde onu kaçırmak için üç girişim oldu: birinde dört kişi kadın kılığında saraya girmeye çalışırken yakalandı, sonuncusu Ali Suâvi'nin öldürülmesiyle bitti (20 Mayıs 1878).",
  "not": "Tahtta en az kalan Osmanlı padişahı olarak anılır; 1872'de masonluğa girdiği, içkiye düşkünlüğü ve 1904'te şeker hastalığından öldüğü kaydedilir.",
  "kesinlik": "kesin",
  "kaynak": "TDV: murad-v",
  "ic_not": "(PAKET-EK-B) Eski `not` son cümlesi: 'Saltanat süresi gün sayısıyla TDV'de verilmiyor, karta konmadı.'"
}

];

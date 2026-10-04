// =====================================================================
// 1281 ÖNCESİ AFRİKA — ÇOK KÜNYELİ KRONOLOJİ (ONCE1281-AFRIKA, 30 Eylül 2026)
// Oturum: ONCE1281-AFRIKA · koordinatör: YILDIRIM BAYEZIT
// Şartname: oturumlar/ONCE1281-KAMPANYA-ORTAK.md · kuşak 1000-01-01 → 1281-01-01
// =====================================================================
// ⚠️ index.html'e BAĞLANMADI — bağlamak koordinatörün işi. Motor ufku 1281'de
//    başladığı için 1281 öncesi maddeler bugün haritada GÖRÜNMEZ (ORTAK §0).
//
// ── BAĞLAMA YOLU ─────────────────────────────────────────────────────
// window.KRONOLOJI_COK_ONCE1281_AFRIKA → app.js cokTarafliKronolojiEkle:
// her madde `taraflar:[...]` listesindeki künyelere EKLENİR (ezmez).
// Taraf kimliklerinin bir kısmı YENİ künye önerisidir ve devletler.js'e
// girene kadar EŞLENEMEZ: denetim/ONCE1281-AFRIKA-KUNYE.json (islem:"yeni").
//
// ── MÜKERRER DİSİPLİNİ ───────────────────────────────────────────────
// ① Künye-içi iskelet maddeleri (devletler.js'teki VE bu oturumun künye
//    önerisindeki) burada TEKRARLANMADI.
// ② data/ altındaki 900-1289 maddeli 417 kaydın Afrika'ya değenleri tarandı.
//    Bir künyeye BAĞLI olanlar (KRONOLOJI_COK_FAS 1248 merini, _TUNUS 1252
//    hafsi) yazılmadı. BAĞLI OLMAYAN KRONOLOJI_KUZEYAFRIKA maddeleri (Tâze
//    1216, Fas 1255, 1258, Tanca-Sebte 1274) da ileride bağlanırsa mükerrer
//    olmasın diye YAZILMADI.
// ③ Endülüs olayları (Zellâka 1086, Alarcos 1195, İkāb 1212, İsticce 1275)
//    ONCE1281-AVRUPA'nındır (M-5559/M-5560) — burada yok.
//
// ── KAYNAK DÜRÜSTLÜĞÜ ────────────────────────────────────────────────
// TDV birincil (Mağrib, Sahel, Nûbe, Habeşistan). TDV'den birebir alınan
// ifadeler `kaynak:` içinde tırnakla verildi; ham metin
// denetim/ONCE1281-AFRIKA-tdv-onbellek/<slug>.txt. Sahra altı güneyi için
// UNESCO Dünya Mirası kayıtları (denetim/ONCE1281-AFRIKA-url-onbellek/).
// TDV çoğunlukla YIL verir: gün kaynakta yoksa t:"YYYY-01-01" + `gun:`
// açıklaması; ay biliniyor gün bilinmiyorsa da YYYY-01-01 (CLAUDE.md §8).
// Hicrî yıl iki milâdî yıla düşüyorsa İLK yıl yazıldı ve `gun:`de beyan
// edildi — gün uydurulmadı.
//
// ── ODAK (M-5662 DURDURUCU üzerine eklendi) ──────────────────────────
// Her maddede odak VAR: `yer_id` (sehirler havuzunda TARANMIŞ ad — çözüm
// tarihten bağımsız, yalnız adla) · `odak_yer` (bölgesel olaylarda kutu) ·
// `yer_kon` [lat,lon] yalnız havuzda adı olmayan dört yer için: Tinmel
// (30.985,-8.228) · Kal'atü Benî Hammâd (35.81,4.79) · Zellâka/Sagrajas
// (38.87,-6.93) · Mapungubwe (-22.19,29.24). `odak_kimlik` KULLANILMADI:
// o gün ≥2 yerleşim ister, 1281 öncesinde çözülmez. `kapsam_genis` YOK.
// Ölçüm: py arac/odak_olc.py --dosya kronoloji_cok_once1281_afrika.js →
// 52 madde · KONUMLU 40 · KUTULU 12 · ODAKSIZ 0 · çözülmeyen atıf 0.
// =====================================================================

window.KRONOLOJI_COK_ONCE1281_AFRIKA = [

// ─── MAĞRİB: Murâbıtlar ─────────────────────────────────────────────

{ t:"1061-01-01", b:"Ebû Bekir b. Ömer, Fas bölgesinin yönetimini amcazadesi Yûsuf b. Tâşfîn'e bırakıp Sahrâ'ya döndü", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Mağrib-i Aksâ", taraflar:["murabitlar"],
  odak_yer:["Fas","Merakeş"],
  d:"Bergavâta'yı itaat altına alan Murâbıt emîri Ebû Bekir b. Ömer, Sahrâ'daki Lemtûne ile Cüdâle kabileleri arasında çıkan ihtilâfı çözmek için güneye gitti. Kuzeydeki toprakların yönetimini amcazadesi Yûsuf b. Tâşfîn'e bıraktı; bu devir, Yûsuf'un yükselişinin başlangıcı oldu.",
  kaynak:"TDV: murabitlar (MURÂBITLAR) — 'Fas bölgesinin yönetimini amcazadesi Yûsuf b. Tâşfîn’e bırakıp bu ihtilâfı çözmek için Sahrâ’ya gitti (453/1061)'",
  gun:"453 (1061) — TDV yıl verir" },

{ t:"1073-01-01", b:"Ebû Bekir b. Ömer, Merakeş yakınlarında tahtını Yûsuf b. Tâşfîn'e devretti", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Merakeş", taraflar:["murabitlar"],
  yer_id:"Merakeş",
  d:"Sudan seferinden dönen Ebû Bekir, Merakeş yakınlarında Yûsuf b. Tâşfîn'in kalabalık ordusuyla karşılaştı. Devlet ricâli önünde tahtını Yûsuf'a devrettiğini açıkladı ve ordusunun başında yeniden Sahrâ'ya döndü; Murâbıt devletinin kuzey kanadı böylece Yûsuf'un eline geçti.",
  kaynak:"TDV: murabitlar — 'Dönüşte Merakeş yakınlarında Yûsuf b. Tâşfîn ve kalabalık ordusu tarafından karşılandı (465/1073)'",
  gun:"465 (1072-73) — TDV '1073' verir; gün yok" },

{ t:"1077-01-01", b:"Yûsuf b. Tâşfîn, Mağrib-i Aksâ'nın sahil şehri Tanca'yı ele geçirdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Tanca", taraflar:["murabitlar"],
  yer_id:"Tanca",
  d:"Merakeş'te hâkimiyetini sağlamlaştıran Yûsuf b. Tâşfîn kuzeye yönelerek Mağrib-i Aksâ'nın önemli liman şehri Tanca'yı aldı. Bu fetih Murâbıtlar'ın Cebelitârık Boğazı'na ulaşmasının ilk adımıydı.",
  kaynak:"TDV: murabitlar — 'Mağrib-i Aksâ’nın önemli sahil şehri Tanca’yı ele geçirdi (470/1077-78)'",
  gun:"470 (1077-78) — TDV yıl verir; ilk milâdî yıl yazıldı" },

{ t:"1080-01-01", b:"Murâbıtlar Vecde, Tilimsân ve Vehrân'ı alıp Cezayir şehrine kadar ulaştı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Tilimsân · Vehrân · Cezayir", taraflar:["murabitlar"],
  yer_id:"Cezayir", odak_yer:["Tilimsan","Oran","Cezayir"],
  d:"Yûsuf b. Tâşfîn Mağrib-i Evsat'a yönelerek Vecde, Tilimsân ve Vehrân'ı zaptetti ve Cezayir şehrine kadar ilerledi. Cezayir'de yaptırdığı Câmiu'l-kebîr günümüze ulaştı. Murâbıt sınırı böylece doğuda Hammâdî topraklarına dayandı.",
  kaynak:"TDV: murabitlar — 'Mağrib-i Evsat’a yönelerek Vecde (Vücde), Tilimsân ve Vehrân’ı alıp Cezayir şehrine kadar ulaştı (1080)'",
  gun:"1080 — TDV yıl verir" },

{ t:"1084-01-01", b:"Murâbıtlar Sebte'yi (Ceuta) ele geçirdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Sebte", taraflar:["murabitlar"],
  yer_id:"Sebte (Ceuta)",
  d:"Boğazın Afrika yakasındaki son önemli kale Sebte'nin alınmasıyla Murâbıtlar Mağrib-i Aksâ kıyısının tamamına hâkim oldu. İki yıl sonraki Endülüs geçişinin üssü bu kıyı oldu.",
  kaynak:"TDV: murabitlar — 'Daha sonra Sebte’ye (Ceuta) hâkim oldu (477/1084)'",
  gun:"477 (1084) — TDV yıl verir" },

{ t:"1087-01-01", b:"Ebû Bekir b. Ömer öldü; Murâbıtlar'ın Batı Sudan'daki nüfuzu zayıfladı", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","toprak-kayip","konu-siyasi"], yer:"Batı Sudan (Sahrâ)", taraflar:["murabitlar"],
  odak_yer:["Tişît","Nema","Timbuktu"],
  d:"Gāne'yi fethederek Batı Sudan'ı ve altın madenlerini Murâbıt hâkimiyetine sokan Ebû Bekir b. Ömer, mahallî çatışmalardan birinde öldü. Ölümüyle Murâbıtlar'ın güneydeki kuvvet ve nüfuzu zayıfladı ve bölgeye istikrarsızlık hâkim oldu.",
  kaynak:"TDV: murabitlar — 'Ebû Bekir 480’de (1087) öldü'; TDV: gane — 'Murâbıt lideri Ebû Bekir b. Ömer mahallî çatışmaların birinde öldürülünce (1087) Gāne toprakları üzerindeki kuvvet ve nüfuzları zayıfladı'",
  gun:"480 (1087) — TDV yıl verir" },

{ t:"1139-01-01", b:"Murâbıtlar Muvahhidler'e karşı büyük bir zafer kazandı", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer:"Mağrib-i Aksâ", taraflar:["murabitlar","muvahhidler"],
  odak_yer:["Merakeş","Fas"],
  d:"İbn Tûmert'in Sûs'ta başlattığı ve Merakeş'e baskınlarla süren Muvahhid hareketine karşı Ali b. Yûsuf'un orduları büyük bir zafer kazandı. Ancak bu başarı kalıcı olmadı; Ali'nin son yıllarında Mağrib'deki merkezlerin çoğu Muvahhidler'e geçti.",
  kaynak:"TDV: murabitlar — 'Murâbıtlar 534’te (1139-40) Muvahhidler’e karşı büyük bir zafer kazandılar'",
  gun:"534 (1139-40) — TDV yıl verir; ilk milâdî yıl yazıldı" },

{ t:"1143-01-01", b:"Ali b. Yûsuf öldü; yerine oğlu Tâşfîn b. Ali geçti", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Merakeş", taraflar:["murabitlar"],
  yer_id:"Merakeş",
  d:"Otuz yedi yıl hüküm süren ve Merakeş'i büyük bir başşehre dönüştüren Ali b. Yûsuf öldü. Yerine geçen oğlu Tâşfîn iki yıl kadar süren saltanatını Muvahhidler'le savaşarak geçirdi.",
  kaynak:"TDV: murabitlar — '537’de (1143) ölen Ali b. Yûsuf’un yerine tahta çıkan oğlu Tâşfîn iki yıl kadar süren hükümdarlık dönemini Muvahhidler’le savaşarak geçirdi'",
  gun:"537 (1142-43) — TDV '1143' verir" },

{ t:"1144-01-01", b:"Abdülmü'min el-Kûmî komutasındaki Muvahhidler Murâbıtlar'a ağır bir darbe vurdu", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","toprak-kayip","konu-askeri"], yer:"Merakeş güneyi (Atlas dağları)", taraflar:["murabitlar","muvahhidler"],
  odak_yer:["Merakeş","Tilimsan"],
  d:"Merakeş'in güneyindeki dağlık bölgeyi ele geçiren Muvahhidler, Abdülmü'min el-Kûmî liderliğinde kazandıkları zaferle Murâbıtlar'ı ağır yenilgiye uğrattı. Tâşfîn b. Ali Tilimsân yakınlarında iki ay direndikten sonra Vehrân'a çekilmek zorunda kaldı.",
  kaynak:"TDV: murabitlar — 'Abdülmü’min el-Kûmî liderliğindeki Muvahhidler 538 (1144) yılında kazandıkları zaferle Murâbıtlar’a ağır bir darbe vurdular'",
  gun:"538 (1143-44) — TDV '1144' verir" },

{ t:"1145-01-01", b:"Tâşfîn b. Ali Vehrân'da kaçarken uçurumdan düşerek öldü; Merakeş'te taht kavgası başladı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Vehrân (Oran)", taraflar:["murabitlar","muvahhidler"],
  yer_id:"Oran",
  d:"Vehrân sahilindeki müstahkem kalesinde Muvahhid kuvvetlerince sıkıştırılan Tâşfîn b. Ali, geceleyin tek başına kaçmaya çalışırken bir uçurumdan düşerek öldü. Merakeş'te küçük oğlu İbrâhim'e biat edildiyse de amcası İshak b. Ali onu tanımadı ve iç savaş başladı.",
  kaynak:"TDV: murabitlar — 'geceleyin tek başına kaçmaya çalışırken bir uçurumdan düşerek öldü (Ramazan 539 / Mart 1145)'",
  gun:"Mart 1145 (gün bilinmiyor) — TDV 'Ramazan 539 / Mart 1145'" },

// ─── MAĞRİB: Muvahhidler ────────────────────────────────────────────

{ t:"1130-08-21", b:"Muvahhid hareketinin kurucusu İbn Tûmert öldü", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-dini","konu-siyasi"], yer:"Tinmel (Deren dağları)", taraflar:["muvahhidler"],
  yer_kon:[30.985,-8.228],
  d:"Murâbıtlar'ın dinî uygulamalarına karşı bir ıslah hareketi başlatan ve 1121'de mehdîliğini ilân eden İbn Tûmert öldü. Devletin resmen teşekkülü, ölümünün ardından öğrencisi Abdülmü'min el-Kûmî tarafından gerçekleştirildi.",
  kaynak:"TDV: muvahhidler (MUVAHHİDLER) — 'onun ölümünün (14 Ramazan 524 / 21 Ağustos 1130) ardından Abdülmü’min el-Kûmî tarafından gerçekleştirildi'",
  gun:"14 Ramazan 524 / 21 Ağustos 1130 — GÜN kaynaktan" },

{ t:"1160-01-21", b:"Muvahhidler Mehdiye'yi Normanlar'dan geri aldı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Mehdiye", taraflar:["muvahhidler"],
  yer_id:"Mehdiye",
  d:"Son Zîrî emîri Hasan b. Ali'nin teşvikiyle İfrîkıye'ye yönelen Abdülmü'min el-Kûmî, 1148'den beri Normanlar'ın elinde bulunan Mehdiye'yi geri aldı. Şehre bir Muvahhid valisi yerleştirildi, Hasan b. Ali'nin de Zevîle'de oturmasına izin verildi. Böylece Mağrib-i Aksâ'dan Trablus'a kadar bütün Kuzey Afrika tek devletin elinde birleşti.",
  kaynak:"TDV: ziriler — '10 Muharrem 555 (21 Ocak 1160) tarihinde Mehdiye geri alınınca şehre bir Muvahhid valisi yerleştirildi'",
  gun:"10 Muharrem 555 / 21 Ocak 1160 — GÜN kaynaktan",
  ic_not_t:"Norman tarafı (Sicilya Krallığı) devletler.js'te künye olarak YOK (ölçüldü) — ONCE1281-AVRUPA açarsa taraflara eklenebilir." },

{ t:"1163-01-01", b:"Abdülmü'min el-Kûmî'nin yerine oğlu Ebû Ya'kūb Yûsuf geçti", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Merakeş", taraflar:["muvahhidler"],
  yer_id:"Merakeş",
  d:"Muvahhidler'i dinî-siyasî bir hareketten Mağrib ve Endülüs'ü kapsayan bir imparatorluğa dönüştüren Abdülmü'min el-Kûmî'nin ardından Ebû Ya'kūb Yûsuf tahta geçti. Onun döneminde sınırlar genişlemese de iç isyanlar bastırıldı ve siyasî istikrar korundu.",
  kaynak:"TDV: muvahhidler — 'Ebû Ya‘kūb Yûsuf b. Abdülmü’min (1163-1184)'; TDV: hafsiler — Abdülmü'min dönemi '(1130-1163)'",
  gun:"1163 — TDV yalnız saltanat aralığı verir; gün yok" },

{ t:"1184-01-01", b:"Benî Gāniye Mağrib'e geçip Bicâye, Cezayir, Milyâne ve Tunus'u istilâ etti", tur:"toprak-kayip", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kayip","konu-askeri"], yer:"Bicâye · Cezayir · Tunus", taraflar:["muvahhidler"],
  yer_id:"Bicâye", odak_yer:["Bicâye","Cezayir","Tunus"],
  d:"Murâbıtlar'ın devamı olarak Balear adalarını elinde tutan Benî Gāniye, Ebû Ya'kūb Yûsuf'un Portekiz seferinde aldığı yarayla ölmesinden cesaret aldı. Abbâsîler'e bağlandıktan sonra Mağrib'e geçerek Bicâye, Cezayir, Milyâne ve Tunus'u ele geçirdi; İfrîkıye'deki mücadele yarım asır sürdü.",
  kaynak:"TDV: muvahhidler — 'Benî Gāniye, Abbâsîler’e bağlandıktan sonra Mağrib’e geçerek Bicâye, Cezayir, Milyâne ve Tunus’u istilâ etti (580/1184)'",
  gun:"580 (1184-85) — TDV '1184' verir",
  ic_not_t:"Benî Gāniye künyesi YOK; merkezi Balear ⇒ ONCE1281-AVRUPA kapsamı. Açılırsa taraflara eklenmeli." },

{ t:"1184-01-01", b:"Ebû Yûsuf el-Mansûr Muvahhid tahtına çıktı", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Merakeş", taraflar:["muvahhidler"],
  yer_id:"Merakeş",
  d:"Ebû Ya'kūb Yûsuf'un Portekiz seferinde aldığı yaralarla ölmesi üzerine oğlu Ebû Yûsuf el-Mansûr tahta geçti. Onun on beş yıllık saltanatı devletin gücünün doruğa çıktığı dönem oldu.",
  kaynak:"TDV: muvahhidler — 'Ebû Yûsuf el-Mansûr (1184-1199)'",
  gun:"1184 — TDV yalnız saltanat aralığı verir; gün yok" },

{ t:"1187-01-01", b:"Ebû Yûsuf el-Mansûr Tunus'u Benî Gāniye'den geri aldı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Tunus", taraflar:["muvahhidler"],
  yer_id:"Tunus",
  d:"Muvahhid halifesi el-Mansûr Tunus'u yeniden hâkimiyeti altına aldı, ancak Benî Gāniye'yi İfrîkıye'den tamamen çıkaramadı. Bu meşguliyet Kastilya'nın Endülüs'e yeni akınlar düzenlemesine fırsat verdi.",
  kaynak:"TDV: muvahhidler — 'Ebû Yûsuf el-Mansûr, 583’te (1187) Tunus’u geri aldıysa da Benî Gāniye’yi bölgeden tamamen çıkaramadı'",
  gun:"583 (1187) — TDV yıl verir" },

{ t:"1199-01-01", b:"Muhammed Nâsır-Lidînillâh Muvahhid tahtına çıktı", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Merakeş", taraflar:["muvahhidler"],
  yer_id:"Merakeş",
  d:"el-Mansûr'un yerine geçen Muhammed Nâsır-Lidînillâh, babasından gücünün zirvesinde bir devlet devraldı. İfrîkıye'ye gönderdiği Abdülvâhid b. Ebû Hafs el-Hintâtî bölgede hâkimiyeti sağladı; bu atama bir süre sonra Hafsîler'in kuruluşuyla sonuçlandı.",
  kaynak:"TDV: muvahhidler — 'Muhammed Nâsır-Lidînillâh (1199-1213) babasından gücünün zirvesinde bir devlet teslim aldı'",
  gun:"1199 — TDV yalnız saltanat aralığı verir; gün yok" },

{ t:"1228-06-29", b:"Ebû Zekeriyyâ Yahyâ el-Hafsî Muvahhidler adına Tunus'a girip İfrîkıye'nin tamamına hâkim oldu", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-siyasi"], yer:"Tunus", taraflar:["muvahhidler"],
  yer_id:"Tunus",
  d:"Kābis valisi Ebû Zekeriyyâ Tunus üzerine yürüyerek kardeşi Ebû Muhammed Abdullah'ı şehirden uzaklaştırdı ve İfrîkıye'nin tamamına hâkim oldu. Henüz Muvahhidler adına hareket ediyordu; bir buçuk yıl sonra bağlılığı koparıp Hafsî hânedanını kuracaktı.",
  kaynak:"TDV: hafsiler (HAFSÎLER) — '24 Receb 625 (29 Haziran 1228) tarihinde şehre girip … İfrîkıye’nin tamamına hâkim oldu'",
  gun:"24 Receb 625 / 29 Haziran 1228 — GÜN kaynaktan",
  ic_not_t:"hafsi künyesi f:1229-01-01 ⇒ bu madde hafsi'ye BAĞLANMADI (pencere öncesi); bağımsızlık 1229 künye iskeletinde." },

// ─── MAĞRİB: Merînîler — Muvahhid tasfiyesi ─────────────────────────

{ t:"1217-01-01", b:"Merînî beyi Ebû Saîd Osman, Muvahhidler'in kışkırttığı Benî Riyâh'ı bozguna uğrattı", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer:"Mağrib-i Aksâ", taraflar:["merini","muvahhidler"],
  odak_yer:["Fas","Tâze","Miknâs"],
  d:"Abdülhakk'ın ölümünden sonra başa geçen Ebû Saîd Osman, Muvahhidler'in Merînîler'e karşı tahrik ettiği bedevî Benî Riyâh kabilesini yendi. Ardından onlarla ihtilâfı gidererek bölgedeki pek çok kabileyi ve şehri hâkimiyeti altına aldı.",
  kaynak:"TDV: meriniler (MERÎNÎLER) — 'Muvahhidler’in kendilerine karşı tahrik ettiği Benî Riyâh’ı bozguna uğrattıktan sonra (614/1217)'",
  gun:"614 (1217-18) — TDV '1217' verir" },

{ t:"1223-01-01", b:"Merînîler Fâzâz bölgesini ele geçirdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Fâzâz (Orta Atlas)", taraflar:["merini","muvahhidler"],
  odak_yer:["Miknâs","Sefrû"],
  d:"Ebû Saîd Osman, Muvahhid devletinin iç çalkantılarından yararlanarak Orta Atlas'taki Fâzâz bölgesini Merînî hâkimiyetine kattı.",
  kaynak:"TDV: meriniler — '620’de (1223) Fâzâz’ı ele geçirdi'",
  gun:"620 (1223) — TDV yıl verir" },

{ t:"1262-01-01", b:"Ebû Yûsuf Ya'kūb Muvahhidler'i yenip Tâmesnâ ve Rif'i Merînî topraklarına kattı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","savas","konu-askeri"], yer:"Tâmesnâ · Rif", taraflar:["merini","muvahhidler"],
  odak_yer:["Rabat","Tanca"],
  d:"Merînî Sultanı Ebû Yûsuf Ya'kūb Muvahhidler'le mücadelesini sürdürerek onları mağlûp etti ve Tâmesnâ ile Rif'i topraklarına katıp hâkimiyetini Vâdîümmürrebî'ye kadar genişletti. Muvahhid devleti artık Merakeş ve çevresine sıkışmıştı.",
  kaynak:"TDV: meriniler — '660’ta (1262) onları mağlûp eden Ebû Yûsuf, Tâmesnâ ve Rif’i topraklarına katıp hâkimiyetini Vâdîümmürrebî’ye kadar genişletti'",
  gun:"660 (1261-62) — TDV '1262' verir" },

{ t:"1263-01-01", b:"Merînîler Muvahhid başşehri Merakeş'i kuşattı ama alamadı", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer:"Merakeş", taraflar:["merini","muvahhidler"],
  yer_id:"Merakeş",
  d:"Ebû Yûsuf Ya'kūb büyük bir ordunun başında Merakeş'i kuşattı. Şehirlilerin şiddetli direnci ve zaman zaman Kastilya ile Abdülvâdîler'in desteği sayesinde Muvahhidler şehri birkaç yıl daha ellerinde tutabildi.",
  kaynak:"TDV: meriniler — 'büyük bir ordunun başında Muvahhidler’in başşehri Merakeş’i kuşattı (661/1263), ancak ele geçiremedi'",
  gun:"661 (1262-63) — TDV '1263' verir" },

{ t:"1268-01-01", b:"Merînîler, Muvahhidler'e yardım eden Abdülvâdîler'i Vâdîtelâğ'da bozguna uğrattı", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer:"Vâdîtelâğ", taraflar:["merini","zeyyani","muvahhidler"],
  odak_yer:["Tilimsan","Tâze"],
  d:"Muvahhid halifesine destek veren Tilimsân'ın Abdülvâdî (Zeyyânî) hânedanı Vâdîtelâğ'da Merînîler'e yenildi. Bu zafer, Merînîler'in Merakeş'e son hamlesinin önünü açtı.",
  kaynak:"TDV: meriniler — '666’da (1268) Muvahhidler’e yardım eden Abdülvâdîler’i Vâdîtelâğ’da bozguna uğrattıktan sonra'",
  gun:"666 (1267-68) — TDV '1268' verir" },

{ t:"1271-01-01", b:"Merînîler Tâze Geçidi'nde Abdülvâdîler'e karşı büyük bir zafer kazandı", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer:"Tâze Geçidi", taraflar:["merini","zeyyani"],
  yer_id:"Tâze (Taza)",
  d:"Muvahhidler'in yıkılışından sonra bölgedeki isyanları bastıran Merînîler, doğudaki rakipleri Abdülvâdîler'i Tâze Geçidi'nde ağır bir yenilgiye uğrattı ve iki hânedan arasındaki sınır mücadelesinde üstünlüğü ele geçirdi.",
  kaynak:"TDV: meriniler — '670 (1271-72) yılında Tâze Geçidi’nde Abdülvâdîler’e karşı büyük bir zafer kazandılar'",
  gun:"670 (1271-72) — TDV yıl verir; ilk milâdî yıl yazıldı" },

{ t:"1274-01-01", b:"Merînîler Sicilmâse'yi Abdülvâdîler'den geri alıp Mağrib-i Aksâ'nın tamamına hâkim oldu", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Sicilmâse", taraflar:["merini","zeyyani"],
  yer_id:"Sicilmâse (Tâfilelt)",
  d:"Sahrâ ticaretinin kapısı Sicilmâse, bir ara Abdülvâdîler'in eline geçmişti. Ebû Yûsuf Ya'kūb şehri geri alarak Mağrib-i Aksâ'nın her tarafına hâkim oldu; Sicilmâse bu tarihten sonra kesin biçimde Merînî idaresinde kaldı.",
  kaynak:"TDV: meriniler — 'Abdülvâdîler’in eline geçen Sicilmâse’yi geri alıp (673/1274-75) Mağrib-i Aksâ’nın her tarafına hâkim oldu'; TDV: sicilmase — '673 (1274-75) yılında kesin biçimde Merînî hâkimiyeti altına girdi'",
  gun:"673 (1274-75) — TDV yıl verir; ilk milâdî yıl yazıldı" },

// ─── MAĞRİB: Hafsîler (İfrîkıye) ────────────────────────────────────

{ t:"1230-01-01", b:"Ebû Zekeriyyâ Kosantîne ve Bicâye'yi zaptetti", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Kosantîne · Bicâye", taraflar:["hafsi","muvahhidler"],
  odak_yer:["Konstantin","Bicâye"],
  d:"Muvahhidler'den bağımsızlığını ilân eden Ebû Zekeriyyâ, İfrîkıye'nin sınırlarını batıya genişletmek amacıyla Kosantîne ve Bicâye'yi aldı. Eski Hammâdî toprakları böylece Hafsî devletine katıldı.",
  kaynak:"TDV: hafsiler — 'Kosantîne (Kostantîne) ve Bicâye’yi zaptetti (628/1230-31)'",
  gun:"628 (1230-31) — TDV yıl verir; ilk milâdî yıl yazıldı" },

{ t:"1233-01-01", b:"Hafsîler Benî Gāniye'nin Kosantîne güneyindeki topraklarını alıp İfrîkıye'nin tek hâkimi oldu", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Kosantîne güneyi", taraflar:["hafsi"],
  yer_id:"Konstantin",
  d:"Ebû Zekeriyyâ, yarım asırdır İfrîkıye'de Muvahhidler'le çekişen Yahyâ b. Gāniye'nin elindeki toprakları ele geçirip onu ortadan kaldırdı. Böylece İfrîkıye'nin yegâne hâkimi durumuna geldi.",
  kaynak:"TDV: hafsiler — 'Gāniye’nin elinde bulunan Kosantîne’nin güneyindeki toprakları ele geçirip onu ortadan kaldırdı (631/1233-34) ve böylece İfrîkıye’nin yegâne hâkimi durumuna geldi'",
  gun:"631 (1233-34) — TDV yıl verir; ilk milâdî yıl yazıldı" },

{ t:"1249-01-01", b:"Ebû Zekeriyyâ öldü; yerine oğlu Muhammed el-Müstansır geçti", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Tunus", taraflar:["hafsi"],
  yer_id:"Tunus",
  d:"Nüfuzunu Cezayir'den Trablus'a kadar yayan, Provence, Venedik, Pisa ve Cenova ile ticaret antlaşmaları imzalayan Hafsî devletinin kurucusu Ebû Zekeriyyâ öldü. Yerine geçen oğlu Muhammed, babasının farklı unsurları bir arada tutan siyasetini sürdürmekte zorlandı.",
  kaynak:"TDV: hafsiler — 'Ebû Zekeriyyâ 647 (1249) yılında öldüğünde yerine oğlu Muhammed el-Müstansır geçti'",
  gun:"647 (1249-50) — TDV '1249' verir" },

{ t:"1277-01-01", b:"Muhammed el-Müstansır öldü; yerine oğlu Yahyâ el-Vâsık geçti", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Tunus", taraflar:["hafsi"],
  yer_id:"Tunus",
  d:"Sekizinci Haçlı Seferi'ni atlatan ve emîrü'l-mü'minîn unvanını kullanan el-Müstansır öldü. Oğlu Ebû Zekeriyyâ Yahyâ el-Vâsık tahta geçtiyse de iki yıl sonra amcası tarafından tahttan indirildi.",
  kaynak:"TDV: hafsiler — '675 (1277) yılında ölen Müstansır’ın yerine oğlu Ebû Zekeriyyâ Yahyâ el-Vâsiḳ geçti'",
  gun:"675 (1276-77) — TDV '1277' verir" },

{ t:"1279-08-13", b:"Ebû İshak İbrâhim, yeğeni el-Vâsık'ı tahttan indirip Hafsî tahtına geçti", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Tunus", taraflar:["hafsi"],
  yer_id:"Tunus",
  d:"el-Müstansır'ın kardeşi Ebû İshak İbrâhim, yeğeni Yahyâ el-Vâsık'ı hal' ederek tahtı ele geçirdi. Bu darbe, Hafsî ailesi içinde on yıllarca sürecek taht çekişmelerini başlattı.",
  kaynak:"TDV: hafsiler — '3 Rebîülâhir 678’de (13 Ağustos 1279) amcası Ebû İshak İbrâhim tarafından hal‘edildi'",
  gun:"3 Rebîülâhir 678 / 13 Ağustos 1279 — GÜN kaynaktan" },

// ─── MAĞRİB: Zîrîler ve Hammâdîler ──────────────────────────────────

{ t:"1016-01-01", b:"Bâdîs b. Mansûr, Kal'atü Benî Hammâd kuşatmasında öldü; yerine oğlu Muiz b. Bâdîs geçti", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","savas","konu-siyasi"], yer:"Kal'atü Benî Hammâd", taraflar:["ziriler","hammadiler"],
  yer_kon:[35.81,4.79],
  d:"Amcası Hammâd'ın bağımsızlık ilânı üzerine onun merkezi Kal'a'yı kuşatan Zîrî hükümdarı Bâdîs kuşatma sırasında öldü. Yerine geçen oğlu Muiz döneminde (1016-1062) Zîrîler Kuzey Afrika'daki en güçlü devirlerini yaşadı.",
  kaynak:"TDV: ziriler (ZÎRÎLER) — 'Bâdîs b. Mansûr 406 (1016) yılında Hammâdîler’in merkezi Kal‘atü Benî Hammâd’ın kuşatılması esnasında öldü'",
  gun:"406 (1015-16) — TDV '1016' verir" },

{ t:"1028-01-01", b:"Hammâd b. Bulukkîn öldü; yerine oğlu Kāid geçti", tur:"hukumdar", onem:1, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Kal'atü Benî Hammâd", taraflar:["hammadiler"],
  yer_kon:[35.81,4.79],
  d:"Zîrî Sultanı Muiz ile antlaşma yapıp bütün Merkezî Mağrib'in hükümdarı olarak tanınan Hammâd'ın ardından oğlu Kāid tahta geçti. Kāid babasının antlaşmasını bozdu; iki yıllık mücadeleden sonra taraflar yeniden uzlaştı.",
  kaynak:"TDV: hammadiler (HAMMÂDÎLER) — emîr listesi 'Kāid 419 (1028)'; 'Hammâd el-Berberî (1015-1028)'",
  gun:"419 (1028) — TDV yıl verir" },

{ t:"1049-01-01", b:"Muiz b. Bâdîs hutbeyi Abbâsî halifesi adına okutup Fâtımîler'den koptu", tur:"bolunme", onem:3, dunya:2, kapsam:"ic",
  etiket:["bolunme","konu-dini","konu-siyasi"], yer:"Kayrevan", taraflar:["ziriler"],
  yer_id:"Kayrevan",
  d:"Zîrî hükümdarı Muiz b. Bâdîs, hutbeyi Fâtımî halifesi yerine Abbâsî Halifesi Kāim-Biemrillâh adına okutmaya ve sikkelerden Fâtımî halifesinin adını çıkarmaya başladı. Bu kopuş, Fâtımîler'in Benî Hilâl ve Benî Süleym kabilelerini Mağrib'e salmasına yol açtı ve Zîrîler'in düşüşünü başlattı.",
  kaynak:"TDV: ziriler — 'Muiz b. Bâdîs’in hutbeyi Fâtımî halifesi yerine Abbâsî Halifesi Kāim-Biemrillâh adına okutmaya başlaması … Zîrîler’in düşüşünün başlangıcı oldu (441/1049 veya 443/1051)'",
  gun:"441/1049 veya 443/1051 — TDV İKİ yıl verir; erken olan yazıldı",
  ic_not_t:"Kaynak yıl konusunda ikircikli; t erken seçenektir, kesin değildir." },

{ t:"1052-04-14", b:"Hayderan Savaşı — Muiz b. Bâdîs Benî Hilâl karşısında ağır yenilgiye uğradı", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","toprak-kayip","konu-askeri"], yer:"Hayderan (Kābis ile Kayrevan arası)", taraflar:["ziriler"],
  odak_yer:["Kayrevan"],
  d:"Fâtımî Halifesi Müstansır-Billâh'ın Mağrib'e göç ettirdiği Benî Hilâl kabilesi, Kābis ile Kayrevan arasındaki Hayderan'da Zîrî ordusunu bozguna uğrattı. Yenilgi, Kayrevan'ın kuşatılmasına ve iç bölgelerin bedevî kabilelerin eline geçmesine giden yolu açtı.",
  kaynak:"TDV: ziriler — '11 Zilhicce 443’te (14 Nisan 1052) Kābis ile Kayrevan arasındaki Hayderan’da meydana gelen savaşta Muiz ağır bir yenilgiye uğradı'",
  gun:"11 Zilhicce 443 / 14 Nisan 1052 — GÜN kaynaktan" },

{ t:"1062-01-01", b:"Hammâdî hükümdarı Bulukkîn b. Muhammed Fas şehrini ele geçirdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Fas", taraflar:["hammadiler"],
  yer_id:"Fas (Fez)",
  d:"Biskre reislerini itaat altına alan Bulukkîn b. Muhammed, Fas'taki Zenâte kabilesi üzerine yürüyerek Fas şehrini zaptetti. Hammâdîler bu mücadelede Mağrib'e yeni yerleşen Benî Hilâl'in Esbec ve Adî kollarından destek gördü, ama zamanla onların kuklası hâline geldi.",
  kaynak:"TDV: hammadiler — 'Fas’taki Zenâte kabilesi üzerine yürüyüp Fas şehrini de ele geçirdi (454/1062)'",
  gun:"454 (1062) — TDV yıl verir" },

{ t:"1087-01-01", b:"Ceneviz-Piza donanması Zîrî başşehri Mehdiye'yi ve Zevîle'yi işgal etti", tur:"isgal", onem:3, dunya:2, kapsam:"ic",
  etiket:["isgal","konu-askeri"], yer:"Mehdiye · Zevîle", taraflar:["ziriler"],
  yer_id:"Mehdiye",
  d:"Zîrî donanmasının İtalya kıyılarına akınlarına misilleme olarak Ceneviz ile Piza'nın ortak donanması Mehdiye ve Zevîle'yi işgal etti. Temîm b. Muiz saldırıyı durdurmak için büyük bir fidye ödemek zorunda kaldı.",
  kaynak:"TDV: ziriler — '480’de (1087) Ceneviz-Piza müttefik donanması Mehdiye ve Zevîle’yi işgal etti. Temîm bu saldırıyı durdurmak için 100.000 (veya 30.000, 80.000) dinar ödemek zorunda kaldı'",
  gun:"480 (1087) — TDV yıl verir" },

{ t:"1089-01-01", b:"Nâsır b. Alennâs öldü; yerine oğlu Mansûr geçti", tur:"hukumdar", onem:1, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Bicâye", taraflar:["hammadiler"],
  yer_id:"Bicâye",
  d:"Bicâye'yi kurup başşehir yapan Nâsır b. Alennâs'ın ardından oğlu Mansûr tahta çıktı. Mansûr Hammâdîler'in ilk sikke bastıran hükümdarı oldu, isyanları bastırdı ve batıdaki Murâbıtlar'la mücadele etti.",
  kaynak:"TDV: hammadiler — emîr listesi 'Mansûr 481 (1089)'; 'Nâsır’ın halefi Mansûr (1089-1105), Hammâdîler’den ilk sikke darbettiren … hükümdardır'",
  gun:"481 (1088-89) — TDV '1089' verir" },

{ t:"1135-01-01", b:"Hammâdîler'in Mehdiye'ye karşı kara ve deniz harekâtı başarısız oldu", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer:"Mehdiye", taraflar:["hammadiler","ziriler"],
  yer_id:"Mehdiye",
  d:"Hammâdî hükümdarı Yahyâ, Tevzer Kalesi'ni aldıktan sonra kuzenlerinin elindeki Zîrî başşehri Mehdiye'ye karadan ve denizden saldırdı, ancak başarı sağlayamadı. İki Sanhâce hânedanının çekişmesi, ikisini de Norman ve Muvahhid tehdidi karşısında zayıf bıraktı.",
  kaynak:"TDV: hammadiler — 'Mehdiye’ye karşı kara ve deniz harekâtı başlatıldıysa da başarı sağlanamadı (529/1135)'",
  gun:"529 (1134-35) — TDV '1135' verir" },

{ t:"1136-01-01", b:"Sicilya Kralı II. Ruggero Zîrîler'in elindeki Cerbe adasını ele geçirdi", tur:"toprak-kayip", onem:2, dunya:1, kapsam:"ic",
  etiket:["toprak-kayip","konu-askeri"], yer:"Cerbe", taraflar:["ziriler"],
  yer_id:"Cerbe (Djerba)",
  d:"Zîrî donanmasının akınlarına karşı Kuzey Afrika kıyılarına yönelen Sicilya Kralı II. Ruggero, Cerbe adasını aldı; Zîrî Emîri Hasan b. Ali bunu engelleyemedi. Adanın kaybı, 1148'de Mehdiye'nin düşüşüyle sonuçlanacak Norman ilerleyişinin ilk halkasıydı.",
  kaynak:"TDV: ziriler — 'Zîrîler, II. Ruggero’nun 530 (1136) veya 531 (1137) yılında Cerbe’yi ele geçirmesini de engelleyemediler'",
  gun:"530 (1136) veya 531 (1137) — TDV İKİ yıl verir; erken olan yazıldı",
  ic_not_t:"Sicilya/Norman künyesi devletler.js'te YOK (ölçüldü)." },

// ─── BATI SUDAN: Tekrûr · Gāne · Mali ───────────────────────────────

{ t:"1086-10-23", b:"Tekrûr birlikleri Murâbıt ordusuyla birlikte Zellâka Savaşı'na katıldı", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri","konu-diplomasi"], yer:"Zellâka (Endülüs)", taraflar:["tekrur-kralligi"],
  yer_kon:[38.87,-6.93],
  d:"Murâbıtlar'ın ilk müttefiki olan Tekrûr Krallığı'nın birlikleri, Yûsuf b. Tâşfîn'in Kastilya kralına karşı Endülüs'te kazandığı Zellâka Savaşı'nda yer aldı. Bu, Batı Afrika'nın ilk müslüman devletinin Akdeniz dünyasındaki olaylara katıldığını gösterir.",
  kaynak:"TDV: tekrur (TEKRÛR) — 'Tekrûr birlikleri Endülüs’te Kastilya kralıyla yapılan Zellâka Savaşı’na da katıldı (479/1086)'",
  gun:"gün komşudan: murabitlar (TDV murabitlar '12 Receb 479 / 23 Ekim 1086') · TDV tekrur yalnız yıl verir",
  ic_not_t:"Savaşın kendisi ONCE1281-AVRUPA dosyasında (murabitlar tarafıyla); bu madde yalnız TEKRÛR'un katılımıdır, taraf olarak yalnız tekrur-kralligi verildi — mükerrer olmasın." },

{ t:"1240-01-01", b:"Mali İmparatorluğu Gāne'nin son bakiyelerini ele geçirdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], yer:"Batı Sudan (eski Gāne toprakları)", taraflar:["mali-imparatorlugu"],
  odak_yer:["Nema","Tişît"],
  d:"Murâbıt fethinden sonra Mema Tunkara, Susu Kante, Hingui Niakhaté ve Diara adlı dört küçük krallığa ayrılmış olan eski Gāne toprakları, Kirina zaferinden beş yıl sonra tamamen Mali İmparatorluğu'nun eline geçti.",
  kaynak:"TDV: mali (MALİ) — 'Gāne, 1240 yılında Mali İmparatorluğu tarafından topraklarının tamamının ele geçirilmesiyle tarih sahnesinden silindi'",
  gun:"1240 — TDV yıl verir",
  ic_not_t:"gane künyesi t:1076 (başşehrin Murâbıtlarca alınışı = devletin sonu) ⇒ bu madde gane'ye BAĞLANMADI. 1076 ile 1240 İKİ AYRI OLAYDIR (KUNYE.json gane ic_not_t)." },

{ t:"1255-01-01", b:"Suncata Keita öldü; Mali tahtına oğlu Mense Vâli geçti", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Niani", taraflar:["mali-imparatorlugu"],
  yer_id:"Niani",
  d:"Kirina zaferiyle Mali İmparatorluğu'nu kuran Suncata Keita öldü. Yerine oğulları sırasıyla Mense Vâli (1255-1270), Mense Vâti (1270-1271) ve Halîfe (1274-1275) geçti.",
  kaynak:"TDV: mali — 'Suncata Keita 1255 yılında ölünce yerine oğullarından Mense Vâli (1255-1270), Mense Vâti (1270-1271) ve Halîfe (1274-1275) geçti'",
  gun:"1255 — TDV yıl verir" },

{ t:"1275-01-01", b:"Mali'de âzatlı köleler Halîfe'yi tahttan indirip yeğeni Ebû Bekir'i başa getirdi", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Niani", taraflar:["mali-imparatorlugu"],
  yer_id:"Niani",
  d:"Suncata'nın oğlu Halîfe, hânedanın âzatlı kölelerince tahttan indirildi ve yerine yeğeni Ebû Bekir (1275-1285) getirildi. Bu çalkantı, 1285'te âzatlı kölelerden Sakura'nın iktidarı bizzat ele geçirmesine giden yolu açtı.",
  kaynak:"TDV: mali — 'bu sonuncusu hânedanın âzatlı köleleri tarafından tahttan indirilerek yerine yeğeni Ebû Bekir (1275-1285) getirildi'",
  gun:"1275 — TDV yalnız saltanat aralığı verir; gün yok" },

// ─── ÇAD HAVZASI: Kânim ─────────────────────────────────────────────

{ t:"1068-01-01", b:"Kânim hükümdarı Hava İslâm'ı kabul etti (Dîvân rivayeti)", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-dini"], yer:"Kânim (Çad gölü kuzeydoğusu)", taraflar:["kanem-bornu"],
  yer_id:"Mao (Kanem)",
  d:"Kaynakların çoğu İslâm'ı ilk kabul eden Kânim sultanının Hummay olduğunu söylerken, Kânim-Bornu tarihinin en önemli kaynağı olan Dîvân Benî Dûkū hükümdarı Hava'nın 1068'de bu dine girdiğini kaydeder.",
  kaynak:"TDV: kanim (KÂNİM) — 'Dîvân ’da Hava’nın 1068’de bu dine girdiğinden bahsedilmektedir'",
  gun:"1068 — TDV (Dîvân'a dayanarak) yıl verir",
  ic_not_t:"kanem-bornu iskeletinde '1075 Hanedan İslâmiyet'i kabul etti' var; bu madde FARKLI rivayettir, iki kaynak çelişir — TDV ikisini de anar." },

{ t:"1075-01-01", b:"Benî Dûkū'nun yerine Hummay ile Seyfiyye (Benî Seyf) hânedanı başladı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer:"Kânim", taraflar:["kanem-bornu"],
  yer_id:"Mao (Kanem)",
  d:"Zegāveler'in kurduğu Benî Dûkū Krallığı'nın son hâkimi Abdülcelîl'in (1071-1075) ardından oğlu Hummay tahta geçti ve bölge tarihinde yeni bir devir açtı. Devlet ona nisbetle Benî Hummay, soy efsanesine göre Seyfiyye hânedanı diye anıldı; Fizan'daki İbâzî Benî Hattâb Emirliği ile ilk ilişkiler bu dönemde kuruldu.",
  kaynak:"TDV: kanim — 'Benî Dûkū’nun son hâkimi Abdülcelîl olup (1071-1075) bölge tarihinde yeni bir devir açan bunun oğlu Hummay’dır (1075-1086)'",
  gun:"1075 — TDV yalnız saltanat aralığı verir",
  ic_not_t:"Aynı yıl kanem-bornu iskeletinde 'Hanedan İslâmiyet'i kabul etti' maddesi var; bu madde HANEDAN DEĞİŞİMİDİR (b farklı)." },

{ t:"1086-01-01", b:"Dûneme b. Hummay Kânim tahtına geçti", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-askeri"], yer:"Kânim", taraflar:["kanem-bornu"],
  yer_id:"Mao (Kanem)",
  d:"Seyfiyye hânedanının en güçlülerinden sayılan Dûneme b. Hummay (1086-1140) uzun yıllar Sahrâ'nın güçlü kavmi Tîbûlar'la savaştı. Son hac dönüşünde Mısırlılar tarafından bindiği gemiden denize atılarak öldürüldü; halefleri döneminde Çad gölü havzasının tamamı ele geçirildi.",
  kaynak:"TDV: kanim — 'Dûneme b. Hummay (1086-1140), sahip olduğu ordusuyla Seyfiyye hânedanının en güçlülerinden kabul edilmektedir'",
  gun:"1086 — TDV yalnız saltanat aralığı verir" },

{ t:"1210-01-01", b:"Dûneme Diabalami Kânim tahtına geçti; Fizan'dan Nijer'e uzanan genişleme başladı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","hukumdar","konu-askeri"], yer:"Kânim · Fizan", taraflar:["kanem-bornu"],
  odak_yer:["Mao","Murzuk"],
  d:"Selmeme'nin (1182-1210) oğlu Dûneme Diabalami (1210-1248) saltanatı boyunca kuzeyde Fizan bölgesi dahil bütün toprakları Kânim hâkimiyetine aldı, batıda sınırları Nijer nehrine kadar genişletti. Kânim bu dönemde Kuzey Afrika hânedanlarıyla yeni ilişkiler kurdu.",
  kaynak:"TDV: kanim — 'Oğlu Dûneme Diabalami (1210-1248), kuzeyde Fizan bölgesi dahil bütün toprakları Kânim’in hâkimiyeti altına alırken batıdaki sınırlarını Nijer nehrine kadar genişletti'",
  gun:"1210 — TDV yalnız saltanat aralığı verir; fetihlerin yılı YOK (saltanat başı yazıldı)",
  ic_not_t:"Toprak kazancı 1210-1248 aralığına yayılır; t saltanat başlangıcıdır, fethin günü değil." },

// ─── NÛBE (Makurya) ──────────────────────────────────────────────────

{ t:"1172-01-01", b:"Nûbe kralı ve Yukarı Mısır'a kaçan Sudanlılar Mısır'a karşı askerî harekâta girişti", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer:"Yukarı Mısır · Asvan", taraflar:["nube"],
  yer_id:"Asvan",
  d:"Fâtımîler'e bağlı Nûbe kralı, Yukarı Mısır'a kaçmış Sudanlı askerlerle birleşerek Mısır'ın yeni hâkimi Selâhaddîn-i Eyyûbî'ye karşı harekete geçti. Bunun üzerine Selâhaddin ağabeyi Turan Şah'ı Nûbe üzerine gönderdi.",
  kaynak:"TDV: nube (NÛBE) — 'Fâtımîler’e bağlı olan Nûbe kralıyla Yukarı Mısır’a kaçan Sudanlılar’ın birleşip 568 yılı başlarında (Ağustos 1172) askerî bir harekâta girişmeleri üzerine Selâhaddîn-i Eyyûbî ağabeyi Turan Şah’ı Nûbe üzerine göndermek zorunda kaldı (568/1173)'",
  gun:"Ağustos 1172 (gün bilinmiyor) — TDV '568 yılı başlarında (Ağustos 1172)'; Turan Şah seferi 568/1173",
  ic_not_t:"Eyyûbî künyesi bu turda ONCE1281-ORTADOGU'nun; açılırsa taraflara eklenebilir." },

{ t:"1265-01-01", b:"Memlûk Sultanı Baybars Nûbe kralını tanıdı ama vergi ödemesinde ısrar etti", tur:"antlasma", onem:2, dunya:1, kapsam:"ic",
  etiket:["antlasma","konu-diplomasi"], yer:"Dongola", taraflar:["nube","memluk"],
  yer_id:"Dongola",
  d:"Makurya kralı ile Memlûk Sultanı Baybars arasında bir düzen kuruldu: Baybars onu kral olarak tanıdı, ancak Bakt geleneğinden gelen verginin düzenli ödenmesini şart koştu.",
  kaynak:"TDV: nube — 'Baybars onu kral olarak tanımakla beraber verginin ödenmesi konusunda ısrar etti (664/1265-66)'",
  gun:"664 (1265-66) — TDV yıl verir; ilk milâdî yıl yazıldı" },

{ t:"1272-01-01", b:"Nûbe Kralı David Memlûk vergisini kesip Asvan'a saldırdı", tur:"savas", onem:2, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer:"Asvan", taraflar:["nube","memluk"],
  yer_id:"Asvan",
  d:"İki devlet arasındaki iyi ilişkiler bozuldu. Vergi ödemeyi bırakan Makurya Kralı David, Mısır'ın güney kapısı Asvan'a saldırıp yağmaladı. Bu saldırı, 1276'da Memlûk ordusunun Dongola'ya yürümesine yol açtı.",
  kaynak:"TDV: nube — '671’den (1272-73) beri vergi ödemeyen Kral David, Asvan’a saldırıp yağma ve tahribatta bulundu'",
  gun:"671 (1272-73) — TDV vergi kesintisinin başlangıcını verir; saldırının yılı YOK (başlangıç yazıldı)",
  ic_not_t:"Saldırının kendi yılı kaynakta yok; t vergi kesintisinin başladığı yıldır. nube iskeletindeki 1276-01-01 Dongola maddesinin günü TDV'de '13 Şevval 674 (31 Mart 1276)' — iskelet maddesi gün hassasiyetine yükseltilebilir (koordinatör kararı, dokunmadım)." },

// ─── GÜNEY AFRİKA ────────────────────────────────────────────────────

{ t:"900-01-01", b:"Limpopo-Shashe birleşiminde Mapungubwe krallığının yükselişi başladı", tur:"kurulus", onem:2, dunya:1, kapsam:"ic",
  etiket:["kurulus","konu-siyasi"], yer:"Mapungubwe (Limpopo-Shashe birleşimi)", taraflar:["mapungubwe"],
  yer_kon:[-22.19,29.24],
  d:"Kuzey-güney ve doğu-batı ticaret yollarının kesiştiği Limpopo ile Shashe nehirlerinin birleşiminde, Güney Afrika'nın ilk yerli krallığı yükselmeye başladı. Mapungubwe dağılana kadar alt kıtanın en önemli iç yerleşimi oldu.",
  kaynak:"UNESCO Dünya Mirası, Mapungubwe Cultural Landscape (whc.unesco.org/en/list/1099) — 'the rise and fall of the first indigenous kingdom in Southern Africa between 900 and 1,300 AD'",
  gun:"900 — kaynağın ARALIK UCU; olay yılı değil",
  ic_not_t:"Kuşak (1000) öncesi ama künye penceresi içinde; kuruluş iskeleti künyede yok, bu madde onu karşılar." },

{ t:"1100-01-01", b:"Büyük Zimbabve'de taş yapıların inşası başladı", tur:"kurulus", onem:3, dunya:2, kapsam:"ic",
  etiket:["kurulus","konu-siyasi"], yer:"Büyük Zimbabve (Masvingo yakını)", taraflar:["zimbabve-kralligi"],
  yer_id:"Büyük Zimbabve",
  d:"Demir Çağı Bantu halkı Shona, daha önce seyrek yerleşilmiş bir alanda Büyük Zimbabve'yi kurdu. Tepe Harabeleri XI-XV. yüzyıllar boyunca kesintisiz iskân edildi; yerleşim XIV. yüzyılda altınca zengin platoya yayılan büyük bir devletin merkezi hâline gelecekti.",
  kaynak:"UNESCO Dünya Mirası, Great Zimbabwe National Monument (whc.unesco.org/en/list/364) — 'The property, built between 1100 and 1450 AD' · 'Great Zimbabwe was founded in the 11th century'",
  gun:"1100 — kaynağın ARALIK UCU ('built between 1100 and 1450 AD'); aynı sayfa 'founded in the 11th century' da der",
  ic_not_t:"zimbabve-kralligi f 1281→1100 GENİŞLETME önerisine bağlı (KUNYE.json). Genişletme kabul edilmezse bu madde künye penceresi dışına düşer." }

];

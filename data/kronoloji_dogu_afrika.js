// =====================================================================
// DOĞU AFRİKA — DEVLET KRONOLOJİLERİ (ilk tur, 22 Ağustos 2026)
// Oturum: DOĞU AFRİKA KRONOLOJİ (eski ad: OPUS HAZIR KITA 55) · M-1055
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. index.html'e BAĞLANMADI — bağlamayı koordinatör
//    yapar (KRONOLOJI-SARTNAME.md §5). Bu dosya data/devletler.js'e
//    DOKUNMAZ; oradaki gömülü olayları içine alır, doğrular, ayrı yazar.
//
// ── KAPSANAN KÜNYELER (11) ────────────────────────────────────────
// Koordinatörün verdiği ALTI (ölçüldü, altısı da birebir tuttu):
//   habesistan         1270-01-01 → 1923-10-29   dizin 9   ömür 653
//   adal               1415-01-01 → 1887-01-06   dizin 4   ömür 472
//   svahili-sehirleri  1000-01-01 → 1698-12-13   dizin 3   ömür 698
//   somali             1500-01-01 → 1923-10-29   dizin 4   ömür 423
//   kaffa-kralligi     1390-01-01 → 1897-09-10   dizin 2   ömür 507
//   buganda            1300-01-01 → 1923-10-29   dizin 2   ömür 623
// Ben BEŞ künye daha ekledim (bolge:"dogu-afrika", başka oturumda değil):
//   evfat              1285-01-01 → 1415-01-01   dizin 3
//   makdisu-sultanligi 1281-01-01 → 1500-01-01   dizin 3
//   cimma-sultanligi   1830-01-01 → 1923-10-29   dizin 2
//   sidamo-kralliklari 1281-01-01 → 1897-01-01   dizin 1
//   vollayta-kralligi  1281-01-01 → 1894-01-17   dizin 1
// 🔴 NİÇİN: evfat 1415'te BİTİYOR, adal 1415'te BAŞLIYOR — İfat, Adal'ın
//    doğrudan selefidir. makdisu 1500'de bitiyor, somali 1500'de başlıyor.
//    Koordinatörün listesi zincirin İKİNCİ yarısıydı; ilk yarısı yoktu.
//
// ── KAPSAM DIŞI BIRAKILANLAR (gerekçeli, M-1065'te bildirildi) ─────
//   umman-zengibar (1698-1923) → ARABISTAN KRONOLOJİ oturumunun `umman`
//     zincirinin Afrika ucu. İki oturum aynı olaya yazarsa ayrışan
//     `dunya` puanı doğar ve denetimin 8. dalı öter.
//   merina (Madagaskar)        → kıta dışı ada, anakara zinciriyle olay
//     paylaşmıyor.
//   1698 SONRASI Svahili kıyısı yalnız `somali` künyesini ilgilendirdiği
//     ölçüde yazıldı (Makdişu/Berâve/Merkâ); Zengibar'ın kendi iç tarihi
//     YAZILMADI — o `umman-zengibar`ın.
//
// ── onem / dunya ─────────────────────────────────────────────────
// onem  BU KÜNYENİN kendi tarihi için ağırlık (künyeden künyeye değişir,
//       iyi/kötü skalası DEĞİL — bir devletin YIKILIŞI da onem:5'tir)
// dunya OLAYIN kendisine ait, HER DOSYADA AYNI olmak zorunda.
// 🔴 DEVRALINAN `dunya` PUANLARI — 48 dosya (4471 madde) node ile eval
//    edilip tarandı, var olan puanlar KULLANILDI, yeniden uydurulmadı:
//      1505-07-24 Kilve yağması        dunya:2  (kronoloji_portekiz.js)
//      1505-08-14 Mombasa yağması      dunya:2  (kronoloji_portekiz.js)
//      1541-04-10 Cristóvão da Gama    dunya:2  (kronoloji_portekiz.js)
//      1543-02-21 Ahmed Gran'ın ölümü  dunya:3  (kronoloji_portekiz.js)
//      1896-03-01 Adva                 dunya:3  (kronoloji_italya.js)
//      1372/1438/1441 Habeş-Memlük     dunya:2  (kronoloji_memluk.js)
//
// ── yer_id — ÖLÇÜLDÜ (girdi.yukle(), 2603 nokta, regex DEĞİL) ──────
// VAR ve KULLANILDI: Masavva · Sevâkin · Zeyla · Harar · Mogadişu ·
//   Mombasa · Malindi · Berbera · Bulhar · Aksum · Gondar · Sofala ·
//   Pate · Lamu · Berâve · Merka · İbrim · Sennar · Aden · Cidde ·
//   Süveyş · Tokar · Halâib · Aseb · Kısmâyû · Obbiya · Tacûra ·
//   Cibûtî · Mekdelâ · Metemma · Kerene · Ankober · Addis · Dire Dava ·
//   Cîcîga · Ogaden · Hargeysa · Taleh · Debre Tabor · Debre Berhan ·
//   "Kilwa Kisiwani (Kilve)" · "Zanzibar (Zengibar)" · "Mengo (Buganda)" ·
//   "Bonga (Kaffa)" · "Sodo (Vollayta)" · "Yirgalem (Sidamo)" ·
//   "Cimma (Jiren)"
// YOK — yer_id:"" bırakıldı, koordinatöre SAYIYLA bildirildi:
//   Adva/Adwa (1896 SAVAŞ ALANI — en önemli eksik) · Debârvâ · Arkiko ·
//   Dehlek adası · Aussa · Şimbra Kure · Wayna Daga · Enderta ·
//   Addi Karro · Şeleneko · Vebi (Webi) nehri · Fatagar · Obock (Ubûk)
//
// ── kaynak ────────────────────────────────────────────────────────
// Birincil TDV, gövdeleri CURL ile çekilip OKUNDU (özet değil, ham metin):
//   etiyopya · habes-eyaleti · harar · evfat · zeyla · ahmed-el-mucahid ·
//   makdisu · somali · kilve · mombasa · zengibar · uganda · masavva ·
//   dehlek · berbera
// ÖLÜ ÇIKAN sluglar (302, ölçüldü): habes · adal · sevakin · ibrim ·
//   kaffa · buganda · malindi · sofala · gondar · aksum · oromo · galla ·
//   menelik · tevodros · dahlak · ozdemir-pasa · ifat
//   ⇒ `habesistan` ve `ahmed-gran` CANLI ama YÖNLENDİRME maddesi:
//      gerçek gövdeler `etiyopya` ve `ahmed-el-mucahid`te.
//   ⇒ `dehlek` CANLI (aranan `dahlak` ölüydü) · `osman-pasa-ozdemiroglu`
//      CANLI (aranan `ozdemir-pasa` ölüydü) — §4'ün "ARA, varsayma".
// Vikipedi KULLANILMADI.
//
// 🔴 İKİ TDV MADDESİ ÇELİŞTİ — ölçüldü, hüküm verildi, gizlenmedi:
//   ① Masavva'ın fethi: `masavva` maddesi "2 Cemâziyelâhir 964 (2 Nisan
//      1557)" diyor, `harar` maddesi "12 Nisan 1557" diyor. HİCRÎ
//      KARŞILIĞI VEREN ihtisas maddesi esas alındı ⇒ 1557-04-02.
//   ② Harar maslahatgüzarlığı: `harar` 1911, `etiyopya` 1912 diyor.
//      İhtisas maddesi (`harar`) esas alındı ⇒ 1911.
//
// ⚠️ ÖLÇMEDİKLERİM (açıkça yazıyorum, §11 "ölçmediğini ölçmedim diye yaz"):
//   · `savaslar.js` ile çapraz kontrol YAPILMADI.
//   · Güneybatı krallıkları (Kaffa · Sidamo · Vollayta · Cimma) için TDV
//     TANECİKLİK BOŞLUĞU var (§4): TDV Etiyopya'yı görüyor ama bu
//     krallıklar özelinde konuşmuyor. O maddeler AKADEMİK kaynakla ve
//     `kaynak:` alanında AÇIKÇA işaretlenerek yazıldı.
// =====================================================================

window.KRONOLOJI_DOGU_AFRIKA = [

// ══════════════════════════════════════════════════════════════════
// I. EVFÂT (İFAT) EMİRLİĞİ — 1285-1415
//    Habeşistan'daki ilk büyük müslüman güç; Adal'ın doğrudan selefi
// ══════════════════════════════════════════════════════════════════

{ t:"1285-01-01", b:"Ali b. Ömer Veleşma', Şüve Emirliği'ni ilhak ederek Evfât Emirliği'ni kurdu", tur:"kurulus", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan","kurulus"],
  d:"Ömer Veleşma'nın oğlu Ali, Harar'ın kuzeybatısındaki Şüve (Shoa) Emirliği'ni topraklarına katarak Evfât Emirliği'ni kurdu. Şüve, Emevî baskısından kaçan Mahzûmîlerin 896'da kurduğu ve Afrika'daki ilk müslüman devlet sayılan yapıydı; onun ortadan kalkmasıyla bölgenin İslâm siyasî ağırlığı Veleşma hânedanına geçti.",
  kaynak:"TDV `evfat`: \"Yerine geçen oğlu Ali Şüve'yi de topraklarına katarak Evfât Emirliği'ni kurdu (684/1285)\" · TDV `etiyopya`: \"Afrika'daki ilk müslüman devlet olan Şüve Emirliği'ni kurdular (896); bu küçük devlet 1280-1285 yılları arasında Evfât Emirliği tarafından ortadan kaldırılmıştır\"" },

{ t:"1300-01-01", b:"Sabrüddin Muhammed'in Evfât tahtına çıkışı", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Veleşma hânedanından Sabrüddin Muhammed tahta çıktı ve emirliği uzun süre idare etti. Onun dönemi Evfât'ın Zeyla' limanı üzerinden yürüttüğü kara ve deniz ticaretinin zirvesidir.",
  kaynak:"TDV `evfat`: \"Son olarak Sabrüddin Muhammed tahta çıktı (700/1300-1301) ve emirliği uzun süre idare etti\"" },

{ t:"1300-01-02", b:"Evfât'ın kervan yolları üzerindeki tekeli ve altı tâbi sultanlık", tur:"iktisadi", onem:4, dunya:2, kapsam:"ic", yer_id:"Zeyla",
  etiket:["ticaret","idari"],
  d:"Evfât, Habeşistan yaylasını Zeyla' limanına bağlayan kervan yollarını denetliyor, bölgenin kara ve deniz ticaretine hâkim oluyordu. Emirliğin nüfuzu altında Dâvaro, Erâbînî, Hedye, Şerhâ, Bâlî ve Dâre adlı altı müslüman sultanlık daha vardı.",
  kaynak:"TDV `evfat`: \"Zeyla‘ limanına giden ticaret yollarını elinde tutuyor ... Dâvaro, Erâbînî, Hedye, Şerhâ, Bâlî, Dâre\"" },

{ t:"1328-01-01", b:"Evfât sultanı Habeş kralına yenildi ve esir düştü", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kaybi"],
  d:"728 (1328) yılında yapılan şiddetli bir meydan savaşında Evfât sultanı mağlûp oldu ve Habeş kralının eline esir düştü. Bu yenilgi, emirliğin bağımsız bir güç olmaktan çıkıp Habeş krallığına tâbi hâle gelişinin başlangıcıdır.",
  kaynak:"TDV `evfat`: \"728 (1328) yılında yapılan şiddetli savaşta Evfât sultanı mağlûp oldu ve esir düştü\"" },

{ t:"1332-01-01", b:"Amda Sion Zeyla' limanını ve Evfât topraklarının büyük kısmını aldı", tur:"toprak", onem:5, dunya:3, kapsam:"dis", yer_id:"Zeyla",
  etiket:["askeri","toprak-kaybi"],
  d:"Negus Amda Sion (Gabra Maskal, 1312-1344) müslümanlara saldırarak Zeyla' ile Evfât topraklarının büyük bir kısmını ele geçirdi. Bölgenin İslâm emirliklerini denize bağlayan tek büyük liman böylece hıristiyan krallığın eline geçti; Amda Sion dönemi Etiyopya'da İslâmiyet'in en çok zayıfladığı devirdir.",
  kaynak:"TDV `harar`: \"negus Amda Sion'un (1312-1344) 1332 yılında müslümanlara saldırarak Zeyla‘ ve Evfât topraklarının büyük bir kısmını ele geçirdiği\" · TDV `etiyopya`: \"Zeyla‘ı (1332) ... kaybettiler\"" },

{ t:"1332-01-02", b:"Evfât emirlerinin Memlük Sultanı Nâsır Muhammed'e yardım heyeti", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", yer_id:"Cidde",
  etiket:["ittifak","diplomasi"],
  d:"Zeyla' kaybedilince Evfât emirleri 1332-1338 yılları arasında Mısır'daki Memlük Sultanı Muhammed b. Kalavun'a heyetler göndererek yardım istediler. Habeş krallığına karşı İslâm dünyasından destek arayışının ilk kaydedilmiş örneğidir; Kızıldeniz'in iki yakasını birbirine bağlayan bu siyaset yüzyıllarca sürecektir.",
  kaynak:"TDV `evfat`: \"Evfât emirleri, 1332-1338 yıllarında Mısır'daki Memlük Sultanı Muhammed b. Kalavun'dan yardım istediler\"" },

{ t:"1350-01-01", b:"Ömerî'nin kaydettiği yedi müslüman emirlik ve aralarındaki bölünme", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["idari","din"],
  d:"İbn Fazlullah el-Ömerî (ö. 1361), Etiyopya'nın doğu ve güneydoğusunda Evfât, Davâro, Bâlî, Hadbe, Şerhâ, Arâbabnî ve Dârâ adlı yedi müslüman emirlik bulunduğunu, meliklerinin Etiyopya kralı tarafından tayin edildiğini ve farklı mezheplere sahip bu emirliklerin birbiriyle çekiştiğini yazar. Bölünme, Habeş üstünlüğünün asıl sebebidir.",
  kaynak:"TDV `etiyopya`: \"melikleri Etiyopya kralı tarafından tayin edilen Evfât, Davâro, Bâlî, Hadbe, Şerhâ, Arâbabnî, Dârâ adında yedi emirlik vardı\"" },

{ t:"1372-01-01", b:"Nevaya Krestos Memlük kervanlarına Habeş sınırını kapattı", tur:"iktisadi", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["ticaret","diplomasi"],
  d:"1372-1382 arasında hüküm süren Habeş kralı Nevaya Krestos, Mısır kafilelerinin Etiyopya sınırından içeri girmesini yasakladı. Kızıldeniz ticaretinin iç Afrika ayağını kesen bu karar, Memlük-Habeş ilişkilerinin uzun gerilim döneminin başlangıcıdır.",
  kaynak:"TDV `etiyopya`: \"1372-1382 yıllarında hüküm süren Nevaya Krestos Mısır kafilelerini Etiyopya sınırlarından içeri sokmamıştır\" · dunya puanı kronoloji_memluk.js 1372-01-01 kaydından devralındı" },

{ t:"1376-01-01", b:"Evfât'ta taht kavgası ve II. Hakkuddin'in bağımsızlık iddiası", tur:"isyan", onem:4, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan","isyan"],
  d:"Evfât tahtına sahip olmak isteyenler arasında çıkan iç savaş, kendisinin Habeşlilerden bağımsız olduğunu iddia eden II. Hakkuddin'in tahtı ele geçirmesiyle sonuçlandı. Tâbiiyetten çıkma denemesi emirliğin son büyük siyasî hamlesidir.",
  kaynak:"TDV `evfat`: \"1376 yılında Evfât tahtına sahip olmak isteyenler arasında meydana gelen iç savaş ... II. Hakkuddin\"" },

{ t:"1386-01-01", b:"II. Hakkuddin Habeş kralına yenilerek öldürüldü", tur:"savas", onem:4, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["askeri","hanedan"],
  d:"Bağımsızlık iddiasını sürdüren Hakkuddin, Habeş kralıyla giriştiği savaşta yenildi ve öldürüldü. Evfât'ın bağımsızlık denemesi böylece kapandı; hânedan bir nesil daha direnecek ama merkezini koruyamayacaktır.",
  kaynak:"TDV `evfat`: \"Ancak Hakkuddin 1386 yılında Habeş kralıyla giriştiği savaşta yenildi ve öldürüldü\"" },

{ t:"1397-01-01", b:"Dehlek adasının Habeşistan'a bağlanması", tur:"toprak", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["toprak-kaybi","ticaret"],
  d:"İbn Mismâr yönetimindeki Dehlek adası 1397'den sonra Habeşistan'a bağlandı. Kızıldeniz'in Afrika yakasındaki en eski müslüman yerleşimlerinden biri olan takımada böylece hıristiyan krallığın denetimine girdi. (Dehlek atlasta yerleşim noktası olarak KAYITLI DEĞİL — yer_id boş bırakıldı.)",
  kaynak:"TDV `etiyopya`: \"1397'den sonra İbn Mismâr yönetimindeki Dehlek adası da Habeşistan'a bağlanmış\"" },

{ t:"1403-01-01", b:"Sultan II. Sa'deddin Zeyla'a sığındı", tur:"savas", onem:4, dunya:1, kapsam:"dis", yer_id:"Zeyla",
  etiket:["askeri","goc"],
  d:"Habeş Kralı I. David'in baskısı karşısında Evfât sultanı II. Sa'deddin, hânedanın eski limanı Zeyla'a çekildi. Emirliğin yayla toprakları fiilen elden çıkmış, direniş bir sahil kalesine sıkışmıştı.",
  kaynak:"TDV `zeyla`: \"Sa'deddin 1403'te Habeş Kralı I. David'den kaçarak Zeyla'a sığındı\"" },

{ t:"1415-01-01", b:"II. Sa'deddin Zeyla' adasında öldürüldü — Evfât Emirliği sona erdi", tur:"yikilis", onem:5, dunya:2, kapsam:"dis", yer_id:"Zeyla",
  etiket:["hanedan","toprak-kaybi"],
  d:"Zeyla' adasına sığınan son Evfât sultanı Sa'deddin orada kıstırılıp öldürüldü ve emirlik dağıldı. Veleşma hânedanının hayatta kalan üyeleri doğuya çekilerek Adal Sultanlığı'nı kuracak; İfat'ın davası bir asır sonra Ahmed el-Mücâhid'in cihadıyla yeniden dirilecektir.",
  kaynak:"TDV `evfat`: \"Sâdeddin Zeyla‘ adasına sığındıysa da orada kıstırılıp öldürüldü (1415)\" · TDV `evfat`: \"Adal Emirliği Evfât'ın yerini aldı\"" },

// ══════════════════════════════════════════════════════════════════
// II. ADAL SULTANLIĞI ve HARAR EMİRLİĞİ — 1415-1887
//    Ahmed el-Mücâhid'in cihadı · Osmanlı ittifakı · Oromo çöküşü
// ══════════════════════════════════════════════════════════════════

{ t:"1415-01-02", b:"Adal Sultanlığı Evfât'ın yerini aldı", tur:"kurulus", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan","kurulus"],
  d:"Evfât'ın yıkılışının ardından Veleşma hânedanı doğuya, Adal bölgesine çekilerek yeni bir sultanlık kurdu. Merkez önce Zeyla' civarındaydı; devlet İfat'ın Habeş krallığıyla hesabını bir asır sonra kapatacaktır.",
  kaynak:"TDV `evfat`: \"Adal Emirliği Evfât'ın yerini aldı\" · TDV `harar`: \"burada kurulan ilk müslüman devlet Evfât Emirliği'dir (1285-1415)\"" },

{ t:"1480-01-01", b:"Emîr Mahfûz'un Adal genişlemesini başlatması", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Zeyla",
  etiket:["askeri","toprak"],
  d:"Zeyla' valisi Emîr Mahfûz 1480'den itibaren Adal hâkimiyetini ve yayılma hareketini sürdürdü; Habeş yaylasına yıllık akınlar düzenledi. Bu akınlar Ahmed el-Mücâhid'in cihadının doğrudan hazırlığıdır.",
  kaynak:"TDV `etiyopya`: \"Zeyla‘ Valisi Emîr Mahfûz'un 1480'den itibaren sürdürdüğü Adel hâkimiyeti ve yayılma hareketi\"" },

{ t:"1508-01-01", b:"Lebna Dengel'in tahta çıkışı ve Adal akınlarının durdurulması", tur:"hukumdar", onem:4, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["hanedan","askeri"],
  d:"Habeş kralı Lebna Dengel (II. David, 1508-1540) Emîr Mahfûz'un yayılmasını durdurdu. Onun uzun saltanatı Habeşistan'ın en geniş sınırlarından Ahmed el-Mücâhid önündeki çöküşe kadar uzanır.",
  kaynak:"TDV `etiyopya`: \"Etiyopya Kralı Lebna Dengel (II. David, 1508-1540) tarafından durduruldu\"" },

{ t:"1520-01-01", b:"Adal başkentinin Zeyla'dan Harar'a taşınması", tur:"idari", onem:5, dunya:2, kapsam:"ic", yer_id:"Harar",
  etiket:["idari","sehircilik"],
  d:"Sultan Ebû Bekir b. Muhammed b. Ezhereddin, 926 (1520) yılında sultanlığın merkezini deniz kıyısındaki Zeyla'dan iç bölgedeki Harar'a taşıdı ve Denkalî ile Somali halklarının desteğini sağladı. Başkentin sahilden yaylanın eşiğine kayması, Adal'ı Portekiz donanmasının menzilinden çıkardığı gibi cihad için gereken insan gücünü de yanına aldı.",
  kaynak:"TDV `harar`: \"Ezhereddin tarafından 926'da (1520) Harar'a taşınması ve Denkalî, Somali halklarının desteğini sağlamasından sonradır\" · TDV `etiyopya`: \"1521'de Adel Sultanı Ebû Bekir\"" },

{ t:"1506-01-01", b:"Ahmed el-Mücâhid'in (Ahmed Gran) doğumu", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Habeş kaynaklarında Gran (solak) lakabıyla anılan Ahmed b. İbrâhim el-Gāzî'nin Abad Emirliği'nin Hubat bölgesinde 1506'da doğduğu rivayet edilir. Doğu Afrika tarihinin en geniş İslâm fetih hareketini o yönetecektir.",
  kaynak:"TDV `ahmed-el-mucahid`: \"Abad Emirliği'nin Hubat bölgesinde 1506'da doğduğu rivayet edilmektedir\"" },

{ t:"1527-01-01", b:"Ahmed el-Mücâhid Habeşistan Krallığı'na cihad açtı", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"Harar",
  etiket:["askeri","din"],
  d:"Emîr olduktan sonra devlet idaresinde büyük değişiklikler yapan Ahmed el-Mücâhid, Habeş Meliki Lebna Dengel'e vergi vermeyi reddetti ve 1527'den itibaren Habeşistan Krallığı'na karşı cihad açtı. Aynı yıl Etiyopyalıların bir saldırısını başarıyla göğüsledi; on altı yıl sürecek fetih böyle başladı.",
  kaynak:"TDV `ahmed-el-mucahid`: \"emîr olduktan sonra devlet idaresinde büyük değişiklikler yaptı ve 1527'den itibaren de Habeşistan Krallığı'na karşı cihad açtı\" · TDV `etiyopya`: \"Ahmed el-Mücâhid (Ahmed Gran) Etiyopyalılar'ın bir saldırısını başarıyla göğüsledi (1527)\"" },

{ t:"1529-03-09", b:"Şimbra Kure Muharebesi — Habeş ordusunun bozguna uğratılması", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak"],
  d:"Ahmed el-Mücâhid, Lebna Dengel'in seferber ettiği kalabalık Habeş ordusunu Şimbra Kure'de yenilgiye uğrattı. Bu zafer yaylayı Adal kuvvetlerine açtı ve ertesi yıl başlayacak eyalet eyalet fethin kapısını araladı. (Savaş alanı atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"bulunamadı — TDV `ahmed-el-mucahid` ve `etiyopya` maddeleri bu savaşın adını ve gününü VERMİYOR; gün `data/devletler.js` `habesistan`/`adal` künyelerinden devralındı, TDV yalnız 1527'den itibaren cihadın sürdüğünü söylüyor" },

{ t:"1530-01-01", b:"Fatagar ve Evfât bölgelerinin fethi", tur:"toprak", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak"],
  d:"Ahmed el-Mücâhid 1530'da Fatagar ve Evfât bölgelerini ele geçirdi. Bir asır önce yıkılan İfat Emirliği'nin toprakları böylece müslüman idaresine döndü; fetih artık akın değil kalıcı ilhak niteliği kazandı.",
  kaynak:"TDV `ahmed-el-mucahid`: \"1530'da Fatagar ve Evfât bölgelerini ... ele geçirdi\"" },

{ t:"1531-01-01", b:"Davâro ve Şüve eyaletlerinin fethi", tur:"toprak", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak"],
  d:"Ahmed el-Mücâhid 1531'de Davâro ve Şüve (Shoa) eyaletlerini aldı. Bu iki eyalet Habeş krallığının güney kanadını oluşturuyordu; kaybı, kralın başkentini savunmasız bıraktı.",
  kaynak:"TDV `ahmed-el-mucahid`: \"1531'de Davâro ve Şüve (Shoa) eyaletlerini\"" },

{ t:"1531-01-02", b:"Başkent Aksum'un ele geçirilmesi", tur:"toprak", onem:5, dunya:3, kapsam:"dis", yer_id:"Aksum",
  etiket:["askeri","toprak","din"],
  d:"Habeşistan'ın kadîm başkenti ve krallığın dinî merkezi Aksum, Adal kuvvetlerince alındı; ardından Tigre, Madra, Gojam ve Nûbe toprakları ele geçirilerek Sevarî ile Semin'de hâkimiyet kuruldu. Süleymanî hânedanının meşruiyetini dayandırdığı şehrin düşüşü, savaşın sembolik dönüm noktasıdır.",
  kaynak:"TDV `etiyopya`: \"1531'de başşehir Aksum'un ele geçirilmesinden sonra da Tigre, Madra, Gojam ve Nûbe toprakları alındı; ardından Sevarî ve Semin'de hâkimiyet kuruldu\"" },

{ t:"1532-01-01", b:"Amhare ve Lasta'nın fethi", tur:"toprak", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak"],
  d:"Ahmed el-Mücâhid 1532'de Amhare ve Lasta bölgelerini aldı. Krallığın çekirdek Amhara toprakları da elden çıkınca Lebna Dengel dağlara sığınmak zorunda kaldı.",
  kaynak:"TDV `ahmed-el-mucahid`: \"bir yıl sonra Amhare ve Lasta'yı\"" },

{ t:"1535-01-01", b:"Tigre topraklarının fethi ve Lebna Dengel'in Portekiz'den yardım istemesi", tur:"toprak", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak","diplomasi"],
  d:"1535'te Tigre topraklarının da alınmasıyla İslâm, Etiyopya'da siyasî bakımdan en geniş yayılımına ulaştı. Topraklarının büyük kısmını ve başkentini kaybederek içerilere çekilen Lebna Dengel, Portekiz kralından yardım istedi; savaş böylece bölgesel olmaktan çıkıp Osmanlı-Portekiz çekişmesinin bir cephesi hâline geldi.",
  kaynak:"TDV `ahmed-el-mucahid`: \"1535'te de Tigre topraklarını ele geçirdi\" · TDV `etiyopya`: \"içerilere çekilen Lebna Dengel Portekiz kralından yardım istedi (1535)\"" },

{ t:"1528-01-01", b:"Portekiz donanması Zeyla' ve Berberâ'yı yağmaladı", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"Zeyla",
  etiket:["askeri","ticaret"],
  d:"Habeşlerin çağrısı üzerine bölgeye gelen Portekizliler Adal'ın iki liman şehri Zeyla' ile Berberâ'yı yağmaladılar; Zeyla' iskelesi 1517'deki tahribatın ardından ikinci kez yıkıldı. Amaç cihadın deniz üzerinden beslenmesini kesmekti.",
  kaynak:"TDV `zeyla`: \"1517'de Kızıldeniz'e giren Portekiz donanması geri dönerken Zeyla‘ İskelesi'ni tahrip etti. 1528'de de aynı tahribat tekrarlandı\" · TDV `berbera`: \"Habeşler'in yardıma çağırması üzerine bölgeye gelen Portekizliler 1528'de Berberâ'yı yağmaladılar\"" },

{ t:"1541-01-01", b:"Portekiz'in 400-500 kişilik ateşli silâhlı yardımı Habeş ordusuna ulaştı", tur:"ittifak", onem:5, dunya:3, kapsam:"dis", yer_id:"Masavva",
  etiket:["askeri","ittifak"],
  d:"Habeş kralının çağrısı üzerine gelen 400-500 kişilik Portekiz kuvveti Masavva'a çıktı; Habeş ordusu böylece ateşli silâh desteği kazandı. Portekizliler geldiğinde Lebna Dengel ölmüş, yerine oğlu Galawdeos (Claudius) geçmişti.",
  kaynak:"TDV `ahmed-el-mucahid`: \"1541 yılında gelen 400-500 kişilik bir askerî yardımla Habeş ordusu ateşli silâh desteği de kazanmış oldu\" · TDV `etiyopya`: \"Portekizliler 1541'de kuvvetlerini Masavva‘a gönderdiklerinde Lebna Dengel ölmüş, yerine oğlu Galawdeos (Claudius) geçmişti\"" },

{ t:"1542-01-01", b:"Osmanlı-Adal ittifakı: Yemen Beylerbeyi Mustafa Paşa'nın yardım kuvveti", tur:"ittifak", onem:5, dunya:3, kapsam:"dis", yer_id:"Berbera",
  etiket:["askeri","ittifak"],
  d:"Portekiz desteğiyle güçlenen Habeşliler karşısında İmam Ahmed Osmanlılardan asker ve teçhizat istedi ve isteğinin kabulüyle bir ittifak kuruldu. Yemen Beylerbeyi Mustafa Paşa kumandasında gönderilen kuvvet Portekizlilere ağır bir yenilgi tattırdı; Osmanlı Devleti bölgeyle böylece ilgilenmeye başladı.",
  kaynak:"TDV `berbera`: \"1542'de Yemen Beylerbeyi Mustafa Paşa kumandasında bir ordunun İmam Ahmed'in yardımına gönderilmesiyle Portekizliler ağır bir yenilgiye uğratıldılar ve böylece Osmanlı Devleti bu bölge ile ilgilenmeye başlamış oldu\"" },

{ t:"1542-08-28", b:"Ahmed el-Mücâhid, Habeş-Portekiz ordusunu bozguna uğrattı", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Osmanlıdan aldığı top ve tüfekçi desteğiyle Ahmed el-Mücâhid, 28 Ağustos 1542'de Habeş krallık ordusunu ve yanındaki Portekiz kuvvetlerini büyük bir bozguna uğrattı. Cristóvão da Gama'nın kuvveti dağıtıldı; bu, cihadın son büyük zaferidir.",
  kaynak:"TDV `ahmed-el-mucahid`: \"28 Ağustos 1542'de Habeş krallık ordusu ile Portekiz kuvvetlerini büyük bir bozguna uğrattı\"" },

{ t:"1543-02-21", b:"Wayna Daga Muharebesi — Ahmed el-Mücâhid öldürüldü, istilâ çöktü", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kaybi","hanedan"],
  d:"Habeşistan'ın geri kalanını da almak isteyen Ahmed el-Mücâhid, ordusunu yeterince takviye etmeden giriştiği ikinci savaşta Tana gölü civarındaki Woina Daga'da yenildi ve hayatını kaybetti. Ölümü, on altı yıllık fethi bir yıl içinde geri aldırdı ve Habeşistan'da İslâmiyet'in siyasî yayılışını kalıcı olarak durdurdu. (Savaş alanı atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `etiyopya`: \"Tana gölü civarında yaptığı Woina Daga savaşında yenildi ve hayatını kaybetti (21 Şubat 1543)\" · dunya puanı kronoloji_portekiz.js 1543-02-21 kaydından devralındı" },

{ t:"1543-02-22", b:"Adal Sultanlığı'nın dağılması, müslüman varlığının sahile çekilmesi", tur:"yikilis", onem:5, dunya:2, kapsam:"ic", yer_id:"Harar",
  etiket:["toprak-kaybi","din"],
  d:"Ahmed el-Mücâhid'in öldürülmesiyle Adal Sultanlığı'nın yayla hâkimiyeti çöktü ve müslümanlar varlıklarını Somali kıyılarında, Makdişu ile Zeyla'da sürdürdüler. Devletin kalan gövdesi Harar merkezli bir emirliğe dönüştü.",
  kaynak:"TDV `somali`: \"1543 yılında Habeşliler'in Portekizliler'den destek alıp Ahmed el-Mücâhid'i öldürmeleri neticesinde Adel Sultanlığı'nın yıkılmasının ardından müslümanlar Somali kıyılarında Makdişu ve Zeyla'da varlıklarını sürdürdüler\"" },

{ t:"1550-01-01", b:"Harar Habeş melikinin baskınına uğradı, Emîr Nûr ilk savaşını kaybetti", tur:"savas", onem:4, dunya:1, kapsam:"dis", yer_id:"Harar",
  etiket:["askeri"],
  d:"Ahmed el-Mücâhid'in halefi Emîr Nûr b. Mücâhid'in verdiği ilk savaş yenilgiyle sonuçlandı ve Harar da 1550'de Habeş melikinin baskınına uğradı. Emîr Nûr bunun üzerine şehri surla çevirme işine girişecektir.",
  kaynak:"TDV `harar`: \"Ancak verdiği ilk savaş yenilgiyle sona erdiği gibi Harar da 1550'de Habeş melikinin baskınına uğradı\"" },

{ t:"1551-01-01", b:"Emîr Nûr'un Harar surlarını yaptırması", tur:"mimari", onem:4, dunya:1, kapsam:"ic", yer_id:"Harar",
  etiket:["mimari","sehircilik"],
  d:"Sâhibü'l-fethi's-sânî unvanını taşıyan Emîr Nûr b. Mücâhid, Habeş baskınlarına karşı şehri koruyacak Harar surlarını (Cegol) yeniden inşa ettirdi. Bugün de ayakta olan bu sur, Doğu Afrika'daki en tanınmış İslâm şehir tahkimatıdır.",
  kaynak:"TDV `harar`: \"Nûr b. el-Mücâhid (Sâhibü'l-fethi's-sânî) zamanında şehrin surları yeniden yapıldı\" — TDV surların yapım YILINI vermiyor, tarih Emîr Nûr'un 1550 baskınından sonraki ilk yıla konuldu, GÜN UYDURULMADI" },

{ t:"1554-01-01", b:"Emîr Nûr'un yeniden cihad ilânı ve kaybedilen yerlerin geri alınması", tur:"savas", onem:4, dunya:1, kapsam:"dis", yer_id:"Harar",
  etiket:["askeri","toprak","din"],
  d:"Emîr Nûr 1554'te yeniden cihad başlattı ve Adal'ın kaybettiği yerleri geri aldı. Harar Emirliği kısa bir toparlanma dönemi yaşadı.",
  kaynak:"TDV `harar`: \"1554'te yeniden başlattığı cihad neticesinde kaybettiği yerleri geri aldı\"" },

{ t:"1559-01-01", b:"Fatagar zaferi — Habeş Meliki Galawdeos öldürüldü", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Emîr Nûr 1559'da Fatagar'a saldırarak Melik Galawdeos'un (Claudius) ölümüyle sonuçlanan büyük bir zafer elde etti. Ahmed el-Mücâhid'i yenen kralın ölümü, Harar Emirliği'nin son askerî başarısıdır.",
  kaynak:"TDV `harar`: \"1559'da Fatagar'a saldırarak Melik Galawdeos'un (Claudius) ölümüyle sonuçlanan büyük bir zafer elde etti\"" },

{ t:"1567-01-01", b:"Oromo akınlarının yeniden başlaması ve Emîr Nûr'un tifüsten ölümü", tur:"hukumdar", onem:5, dunya:1, kapsam:"ic", yer_id:"Harar",
  etiket:["hanedan","goc","salgin"],
  d:"1567'de Oromo (Galla) akınları yeniden başladı; Emîr Nûr bunları engellemek için sefer hazırlığındayken tifüsten öldü. Onun ölümüyle emirlik hem askerî hem hânedan istikrarını kaybetti ve göçebe baskısı karşısında savunmasız kaldı.",
  kaynak:"TDV `harar`: \"1567'de yeniden başlayan Oromo akınlarını engellemek için bir yıl sonra tekrar sefere çıktı\" · TDV `harar`: Emîr Nûr'un tifüsten ölümü 1567" },

{ t:"1569-01-01", b:"Harar'da hızlı emîr değişimleri — Osman, Talha ve Muhammed", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", yer_id:"Harar",
  etiket:["hanedan"],
  d:"Emîr Nûr'dan sonra Oromolarla anlaşan eski âzatlısı Osman, ardından Vezir Abbas'ın oğlu Talha (1569) ve Muhammed b. Nâsır emîr oldu. Kısa süren saltanatlar, emirliğin göçebe baskısı altında merkezî otoritesini yitirdiğini gösterir.",
  kaynak:"TDV `harar`: \"Emîr Nûr'dan sonra yerine Oromolar'la anlaşan eski âzatlısı Osman, Vezir Abbas'ın oğlu Talha (1569) ve Muhammed b. Nâsır\"" },

{ t:"1577-01-01", b:"Vebi nehri bozgunu — Harar Emirliği'nin ileri gelenleri öldürüldü", tur:"savas", onem:5, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["askeri","hanedan"],
  d:"Habeş Meliki Sartsa Dengel'in kuzeyde Osmanlılarla, güneyde muhalifleriyle uğraşmasını fırsat bilen Emîr Muhammed cihad ilân etti; fakat 1577'de Vebi (Webi) nehri kıyılarında yaptığı savaşta yenildi ve kendisiyle birlikte Harar Emirliği'nin bütün ileri gelenleri öldürüldü. (Savaş alanı atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `harar`: \"1577'de Webi nehri kıyılarında yaptığı savaşta yenildi ve kendisiyle birlikte Harar Emirliği'nin bütün ileri gelenleri öldürüldü\"" },

{ t:"1577-01-02", b:"Merkezin Aussa'ya nakli ve Harar Sultanlığı'nın Galla göçebelerince yıkılışı", tur:"yikilis", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["goc","idari"],
  d:"Merkezi Denkalî çölündeki Aussa'ya nakledilen Harar Sultanlığı, Galla (Oromo) göçebeleri tarafından yıkıldı. Doğu Afrika'nın en güçlü İslâm devleti böylece bir çöl vahasına sığınmış bir imamlığa dönüştü. (Aussa atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `etiyopya`: \"merkezi Denkalî çölündeki Aussa'ya nakledilen Harar Sultanlığı da Galla göçebeleri tarafından yıkıldı (1577)\"" },

{ t:"1647-01-01", b:"Harar'ın yeniden bağımsız emirlik oluşu", tur:"kurulus", onem:5, dunya:1, kapsam:"ic", yer_id:"Harar",
  etiket:["idari","hanedan"],
  d:"Dâvûd'un Aussa imamı olmasıyla, Oromoların idaresindeki toprakların ortasında kalan Harar tekrar bağımsız bir emirlik hâline geldi. Emirlik, 1887'de Habeşler tarafından işgal edilinceye kadar iki asır boyunca varlığını sürdürecektir.",
  kaynak:"TDV `harar`: \"Dâvûd Aussa imamı olunca Oromolar'ın idaresindeki toprakların ortasında yer alan Harar tekrar bağımsız bir emirlik haline geldi ve 1887 yılında Habeşler tarafından işgal edilinceye kadar varlığını sürdürdü\"" },

{ t:"1856-01-01", b:"Muhammed Abdüşşekûr'ün Harar'ı ele geçirmesi ve ticaretin canlanması", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", yer_id:"Harar",
  etiket:["hanedan","ticaret"],
  d:"Emîr Muhammed Abdüşşekûr, Oromoların desteğiyle 1856'da Harar'ı Nûr hânedanının son temsilcisinden aldı ve şehrin ticarî hayatını canlandırdı. Harar kahvesi ve kervan ticareti bu dönemde yeniden bölgesel önem kazandı.",
  kaynak:"TDV `harar`: \"Emîr Muhammed Abdüşşekûr, Oromolar'ın desteğiyle 1856'da Harar'ı Nûr hânedanının son temsilcisi olan Ahmed b. ... aldı\"" },

{ t:"1875-10-11", b:"Harar'ın Mısır Hidivliği'ne teslimi ve emîrin öldürülmesi", tur:"toprak", onem:5, dunya:2, kapsam:"dis", yer_id:"Harar",
  etiket:["askeri","idari"],
  d:"Mısır Hidivi İsmâil Paşa'nın ordusu Osmanlı güney siyasetinin yeni temsilcisi olarak Habeşistan'a ilerlerken Harar şehri halk tarafından Muhammed Raûf Paşa'ya teslim edildi. Servete düşkünlüğü yüzünden tebaasının bağlılığını kaybetmiş olan emîr, birkaç gün sonra Mısırlı bir asker tarafından namaz kılarken öldürüldü.",
  kaynak:"TDV `harar`: \"Harar şehri halk tarafından Muhammed Raûf Paşa'ya teslim edildi (11 Ekim); emîr, birkaç gün sonra Mısırlı bir asker tarafından namaz kılarken öldürüldü\"" },

{ t:"1885-05-20", b:"Mısır kuvvetlerinin Harar'dan çekilmesi ve Emîr Abdullah'ın tayini", tur:"idari", onem:4, dunya:1, kapsam:"dis", yer_id:"Harar",
  etiket:["idari"],
  d:"Harar'da on yıl kalan Mısırlılar, buranın gelirinin giderini karşılamaması ve denize uzaklığı gibi sebeplerle 20 Mayıs 1885'te çekildiler; Emîr Muhammed'in oğlu Abdullah Ali Abdüşşekûr'ü emîr tayin edip ellerindeki silâhları ve bazı görevlileri ona devrettiler. Emirlik iki yıl daha bağımsız kalacaktır.",
  kaynak:"TDV `harar`: \"20 Mayıs 1885 tarihinde Emîr Muhammed'in oğlu Abdullah Ali Abdüşşekûr'ü Harar emîri tayin edip ellerindeki silâhları ve bazı görevlileri ona devrederek geri çekildiler\"" },

{ t:"1886-11-01", b:"Habeş ordusunun 20.000 askerle Harar üzerine yürümesi", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Harar",
  etiket:["askeri"],
  d:"Cildessa'daki İtalyan birliğine yapılan saldırıda bazı askerlerin öldürülmesi ve Şava'daki (Adisababa) İtalyan danışmanın meliki kışkırtması üzerine Habeş ordusu 20.000 askerle Harar üzerine yürüdü. Avrupa müdahalesinin Habeş genişlemesini nasıl yönlendirdiğinin açık bir örneğidir.",
  kaynak:"TDV `harar`: \"Habeş ordusu 20.000 askerle şehrin üzerine yürüdü (Kasım 1886)\"" },

{ t:"1887-01-07", b:"Şeleneko Muharebesi — Harar Emirliği'nin sonu", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Harar",
  etiket:["askeri","toprak-kaybi"],
  d:"Cihad ilân eden Emîr Abdullah 5000 kişiyle 7 Ocak 1887 günü Habeşleri Şeleneko'da karşıladı; yenileceğini anlayınca güney Harar'daki Ogaden bölgesine kaçtı. II. Menelik şehri ilhak etti ve Adal-Harar zincirinin 472 yıllık siyasî varlığı sona erdi. (Şeleneko atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `harar`: \"Cihad ilân eden Emîr Abdullah 5000 kişiyle 7 Ocak 1887 günü Habeşler'i Şeleneko'da karşıladı\"" },

{ t:"1911-01-01", b:"Harar'da Osmanlı maslahatgüzarlığının açılması", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis", yer_id:"Harar",
  etiket:["diplomasi","din"],
  d:"Osmanlı Devleti ile Habeşistan arasında dâimî siyasî ilişkiler kurulduktan sonra Harar'da bir Osmanlı maslahatgüzarlığı açıldı; amaç bölgedeki müslümanların hukukunu gözetmekti. (⚠️ TDV `etiyopya` maddesi bu tarihi 1912 verir; ihtisas maddesi olan `harar` esas alındı.)",
  kaynak:"TDV `harar`: \"1911'de Osmanlı Devleti ile Habeşistan arasındaki dâimî siyasî ilişkiler kurulduktan sonra Harar'da Osmanlı maslahatgüzarlığı açıldı\"" },

{ t:"1913-01-01", b:"Osmanlı temsilciliğinin Harar'dan Adisababa'ya nakli", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis", yer_id:"Addis",
  etiket:["diplomasi"],
  d:"Önemli konuların Harar'dan takibinin zorluğu göz önünde tutularak Necib Hâc Efendi'nin yerine tayin edilen Ahmed Mazhar Bey'le birlikte temsilcilik Adisababa'ya nakledildi. Osmanlı'nın Doğu Afrika'daki son diplomatik varlığı artık Habeş başkentindedir.",
  kaynak:"TDV `harar`: \"Necib Hâc Efendi'nin yerine tayin edilen Ahmed Mazhar Bey'le birlikte temsilcilik Adisababa'ya nakledildi (1913)\"" },

// ══════════════════════════════════════════════════════════════════
// III. HABEŞİSTAN İMPARATORLUĞU — 1270-1923
//    Süleymanî hânedanı · Osmanlı Habeş Eyaleti · Gondar · Zemene
//    Mesafint · Tewodros-Yohannes-Menelik · İtalyan meselesi
// ══════════════════════════════════════════════════════════════════

{ t:"1270-01-01", b:"Yekuno Amlak Zagwe hânedanına son verip Süleymanî hânedanını yeniden kurdu", tur:"kurulus", onem:5, dunya:2, kapsam:"ic", yer_id:"Aksum",
  etiket:["hanedan","kurulus","din"],
  d:"1137'den beri hüküm süren Zagwe hânedanına son veren Yekuno Amlak, kendisini Hz. Süleyman ile Sebe melikesinin soyundan sayan Süleymanî hânedanını yeniden kurdu. Bu meşruiyet iddiası, krallığın 1974'e kadar süren siyasî kimliğinin temelidir.",
  kaynak:"TDV `etiyopya`: \"Etiyopya Krallığı'nı 1137'den 1270'e kadar Zague ... yönetmiştir\" · TDV `etiyopya`: \"Aksum'da oturan kralların Hz. Süleyman ve Sebe melikesinin çocukları Menelik'in soyundan geldikleri ifade edilir\"" },

{ t:"1312-01-01", b:"Amda Sion dönemi başladı — Etiyopya'da İslâmiyet'in zayıfladığı devir", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan","din"],
  d:"Amda Sion (Gabra Maskal, 1312-1344) tahta çıktı. Onun dönemi, Habeş krallığının çevresindeki müslüman emirlikleri tâbi kıldığı ve Etiyopya'da İslâmiyet'in siyasî bakımdan en çok zayıfladığı devirdir.",
  kaynak:"TDV `etiyopya`: \"Amda Sion (Gabra Maskal) dönemi (1312-1344) Etiyopya'da İslâmiyet'in zayıfladığı devirdir\"" },

{ t:"1382-01-01", b:"Kral David'in tahta çıkışı ve Memlüklerle ilişkilerin düzelmesi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","ticaret"],
  d:"Nevaya Krestos'un ardından tahta çıkan kardeşi David (1382-1411) döneminde, Memlük Hükümdarı el-Melikü'z-Zâhir Berkuk'un saltanatıyla (1390-1399) Mısır-Habeş ilişkileri düzeldi. Kapalı kervan yolları yeniden işlemeye başladı.",
  kaynak:"TDV `etiyopya`: \"tahta çıkan kardeşi David ile (1382-1411) Memlük Hükümdarı el-Melikü'z-Zâhir Berkuk'un zamanında (1390-1399) Mısır-Habeş ilişkilerinin iyi olduğu anlaşılmaktadır\"" },

{ t:"1434-01-01", b:"Zar'a Ya'kūb dönemi — krallığın en geniş sınırları", tur:"toprak", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["toprak","hanedan","din"],
  d:"Etiyopya Krallığı en geniş topraklara Zar'a Ya'kūb (1434-1468) zamanında sahip oldu. Kilise düzenini merkezîleştiren, dinî edebiyatı besleyen ve komşu müslüman emirlikleri vergiye bağlayan bu saltanat, hıristiyan krallığın klasik çağıdır.",
  kaynak:"TDV `etiyopya`: \"Etiyopya Krallığı en geniş topraklara Zar'a Ya'kūb (1434-1468) zamanında sahip olmuştur\"" },

{ t:"1438-01-01", b:"Zar'a Ya'kūb'dan Memlük Sultanı Barsbay'a dostane mektup", tur:"diplomasi", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["diplomasi"],
  d:"Habeş kralı Zar'a Ya'kūb, Memlük Sultanı Barsbay'a dostane bir mektup gönderdi. Kızıldeniz ticaretinin iki ucundaki bu iki güç arasındaki yazışmalar, Mısır'daki kıptî cemaatinin durumu ile Nil sularının kullanımı etrafında dönüyordu.",
  kaynak:"kronoloji_memluk.js 1438-01-01 kaydı (onem 2, dunya 2) — aynı olay, dunya puanı DEVRALINDI" },

{ t:"1441-01-01", b:"Zar'a Ya'kūb'dan Sultan Çakmak'a Nil tehdidi içeren protesto", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","iktisadi"],
  d:"Habeş kralı Memlük Sultanı Çakmak'a, Mısır'daki kıptîlere yapılan muameleyi protesto eden ve Nil'in akışını kesmekle tehdit eden bir mektup gönderdi. Nil kaynaklarının Habeş yaylasında olması, Etiyopya'ya Mısır karşısında yüzyıllar sürecek bir koz verdi.",
  kaynak:"kronoloji_memluk.js 1441-01-01 kaydı (onem 3, dunya 2) — aynı olay, dunya puanı DEVRALINDI" },

{ t:"1520-01-02", b:"Portekiz elçilik heyetinin Masavva'a çıkışı ve Lebna Dengel ile teması", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis", yer_id:"Masavva",
  etiket:["diplomasi","ittifak"],
  d:"1520 yılında Masavva'a gelen Portekizliler Etiyopya Kralı Lebna Dengel'le temas kurdular. Avrupa'nın efsanevî hıristiyan hükümdarı Prester John arayışı böylece somut bir ittifaka dönüşmeye başladı; Habeşistan artık Hint Okyanusu mücadelesinin bir tarafıdır.",
  kaynak:"TDV `masavva`: \"1520 yılında Masavva‘a gelen Portekizliler, Etiyopya Kralı Lebna Dengel'le ...\"" },

{ t:"1541-04-10", b:"Cristóvão da Gama'nın Habeşistan'a yardım kuvveti çıkarması", tur:"ittifak", onem:5, dunya:2, kapsam:"dis", yer_id:"Masavva",
  etiket:["askeri","ittifak"],
  d:"Vasco da Gama'nın oğlu Cristóvão da Gama, Portekiz yardım kuvvetini Habeşistan'a çıkardı. Ateşli silâhlarla donanmış bu küçük birlik, Ahmed el-Mücâhid karşısında çökmüş olan krallığa direnme imkânı verdi; Osmanlı-Portekiz çekişmesinin Habeşistan cephesi böyle açıldı.",
  kaynak:"kronoloji_portekiz.js 1541-04-10 kaydı (onem 4, dunya 2) — aynı olay, dunya puanı DEVRALINDI · TDV `ahmed-el-mucahid`: \"1541 yılında gelen 400-500 kişilik bir askerî yardım\"" },

{ t:"1552-01-01", b:"Pîrî Reis donanmasının Portekiz'e üstünlük kuramaması", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"Aden",
  etiket:["askeri","ticaret"],
  d:"Ahmed el-Mücâhid hareketini destekleyen Osmanlılar, 1552'de Pîrî Reis kumandasındaki donanmayla Portekizlilere karşı üstünlük kuramadı. Deniz yoluyla sonuç alınamayınca Etiyopya'ya doğrudan kara müdahalesi kararı olgunlaştı.",
  kaynak:"TDV `etiyopya`: \"Osmanlılar, 1552'de Pîrî Reis ve 1554'te Seydi Ali Reis kumandasındaki donanmalarla Portekizliler'e karşı üstünlük kuramayınca Etiyopya'ya doğrudan müdahale etmeye karar verdiler\"" },

{ t:"1554-04-01", b:"Özdemir Paşa'nın İstanbul'a çağrılması — Habeş siyasetinin kurulması", tur:"idari", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["idari","askeri"],
  d:"Osmanlı yönetimi, hem doğu ticaretinin Portekizlilerin eline geçmesini önlemek hem de Habeşistan'da tehlike altındaki müslümanlara yardım tedbirlerini görüşmek üzere bölgeyi çok iyi tanıyan Yemen Beylerbeyi Özdemir Paşa'yı Nisan 1554'te İstanbul'a çağırdı. Osmanlı'nın Doğu Afrika siyaseti bu görüşmelerde şekillendi.",
  kaynak:"TDV `habes-eyaleti`: \"bölgeyi çok iyi tanıyan Yemen Beylerbeyi Özdemir Paşa'yı İstanbul'a çağırdı (Nisan 1554)\"" },

{ t:"1554-04-10", b:"Sevâkin'e ilk sancak beyi olarak Abdülbâki Bey'in tayini", tur:"idari", onem:4, dunya:1, kapsam:"dis", yer_id:"Sevâkin",
  etiket:["idari"],
  d:"Habeş eyaleti kurulmadan önce Mısır'a bağlanan Sevâkin şehrine ilk sancak beyi olarak Abdülbâki Bey tayin edildi. Aynı adı taşıyan bir adanın üzerindeki bu liman, kurulacak eyaletin ilk merkezi olacaktır.",
  kaynak:"TDV `habes-eyaleti`: \"Habeş eyaleti kurulmadan önce Mısır'a bağlanan, ilk sancak beyi olarak Abdülbâki Bey'in tayin edildiği (10 Nisan 1554) Sevâkin şehri\"" },

{ t:"1555-07-05", b:"Habeş Beylerbeyiliği resmen kuruldu — Özdemir Paşa beylerbeyi tayin edildi", tur:"kurulus", onem:5, dunya:3, kapsam:"dis", yer_id:"Sevâkin",
  etiket:["idari","askeri","toprak"],
  d:"15 Şâban 962 (5 Temmuz 1555) tarihinde Habeş beylerbeyiliği resmen kuruldu ve henüz bölge tam olarak fethedilmemişken Özdemir Paşa beylerbeyi tayin edildi. Osmanlı Devleti böylece Afrika kıtasında Kızıldeniz'in batı yakasına ilk defa idarî bir çerçeve kurmuş oldu; eyaletin merkezi Sevâkin, ikinci merkezi Masavva olacaktır.",
  kaynak:"TDV `habes-eyaleti`: \"15 Şâban 962 (5 Temmuz 1555) tarihinde resmen kurulan Habeş beylerbeyiliğine getirildi\"" },

{ t:"1555-11-17", b:"Habeş eyaletine ilk nâzır-ı emvâl tayini (Ahmed Bey)", tur:"idari", onem:2, dunya:1, kapsam:"ic", yer_id:"Sevâkin",
  etiket:["idari","iktisadi"],
  d:"Eyaletin malî işlerini yürütmek üzere ilk defa 17 Kasım 1555'te Ahmed Bey nâzır-ı emvâl tayin edildi. Gelirin ana kaynağı Kızıldeniz limanlarının gümrük resmiydi.",
  kaynak:"TDV `habes-eyaleti`: \"İlk defa 17 Kasım 1555'te Ahmed Bey nâzır-ı emvâl tayin edildi (BA, KK, Ruûs)\"" },

{ t:"1555-11-30", b:"Habeş eyaletine ilk kadı tayini (Abdülvehhâb)", tur:"hukuki", onem:2, dunya:1, kapsam:"ic", yer_id:"Sevâkin",
  etiket:["hukuki","idari","din"],
  d:"Habeş beylerbeyiliği kurulur kurulmaz buraya Abdülvehhâb adlı bir kadı tayin edildi. Osmanlı hukuk düzeninin Doğu Afrika sahiline taşınmasının ilk adımıdır.",
  kaynak:"TDV `habes-eyaleti`: \"Habeş beylerbeyiliği kurulur kurulmaz buraya Abdülvehhâb adlı bir kadı tayin edildi (30 Kasım 1555)\"" },

{ t:"1557-04-02", b:"Masavva'ın fethi — Habeşistan'ın denize açılan kapısı kapandı", tur:"toprak", onem:5, dunya:3, kapsam:"dis", yer_id:"Masavva",
  etiket:["askeri","toprak","ticaret"],
  d:"Özdemir Paşa 2 Cemâziyelâhir 964 (2 Nisan 1557) tarihinde Masavva'ı Osmanlı topraklarına kattı; ardından önemli bir liman olan Arkiko da ele geçirildi. Yaklaşık dört asır sürecek bu hâkimiyet, Habeş meliklerinin Avrupalılardan silâh ve insan yardımı almasını, Katolik ve Cizvit papazlarının ülkeye girmesini engelledi. (⚠️ TDV `harar` maddesi bu tarihi 12 Nisan 1557 verir; hicrî karşılığını veren `masavva` maddesi esas alındı.)",
  kaynak:"TDV `masavva`: \"2 Cemâziyelâhir 964'te (2 Nisan 1557) Özdemir Paşa tarafından Osmanlı topraklarına katıldı\" · TDV `habes-eyaleti`: \"2 Nisan 1557'de Masavva‘ şehri alındıktan sonra yine önemli bir liman olan Arkiko (Harkiko) ele geçirildi\"" },

{ t:"1558-01-01", b:"Osmanlı ordusunun Tigre bölgesine hâkim olması", tur:"toprak", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak"],
  d:"Osmanlı ordusu 1558'de Tigre bölgesine hâkim oldu. Kıyı şeridinden yaylanın kuzey eşiğine çıkan bu ilerleme, eyaletin en derin kara nüfuzudur.",
  kaynak:"TDV `habes-eyaleti`: \"Osmanlı ordusu 1558'de bölgeye hâkim oldu\"" },

{ t:"1559-01-01", b:"Debârvâ'nın alınması ve müstahkem üsse dönüştürülmesi", tur:"toprak", onem:4, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["askeri","mimari"],
  d:"Debârvâ (Debaroa) ve çevresi 1559'da Osmanlı hâkimiyetine alındı; buraya cami ve garnizon konularak müstahkem bir üs kuruldu. Debârvâ, Sevâkin ve Masavva ile birlikte eyaletin üç büyük garnizon merkezinden biridir. (Debârvâ atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `habes-eyaleti`: \"Debârvâ (Debaroa, Davâro) ve çevresi 1559'da Osmanlı hâkimiyetine alındı\"" },

{ t:"1559-01-02", b:"Zeyla' iskelesinin Habeş Eyaleti'ne bağlanması ve sancak merkezi yapılması", tur:"idari", onem:4, dunya:2, kapsam:"dis", yer_id:"Zeyla",
  etiket:["idari","ticaret"],
  d:"Özdemir Paşa'nın 954'ten (1547) beri artırdığı faaliyetler sonucunda Zeyla' iskelesi 966'da (1559) Osmanlı Devleti'ne bağlandı ve Habeş beylerbeyiliğinin bir sancak merkezi hâline getirildi. Adal'ın eski limanı böylece Osmanlı idaresine girdi.",
  kaynak:"TDV `zeyla`: \"Özdemir Paşa 954'te (1547) bölgedeki faaliyetlerini arttırdı, iskelesini 966'da (1559) Osmanlı Devleti'ne bağlandı ve ... bir sancak merkezi haline getirildi\"" },

{ t:"1560-01-01", b:"Özdemir Paşa'nın Debârvâ'da vefatı", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["askeri","idari"],
  d:"Harekâttan vazgeçilerek Debârvâ'ya dönüldüyse de Özdemir Paşa yakalandığı hastalıktan kurtulamayarak burada vefat etti. Eyaletin kurucusunun ölümüyle iç bölgelere yayılma durdu ve Osmanlı kuvvetleri Masavva ile Arkiko'da tutunmaya çalıştı.",
  kaynak:"TDV `habes-eyaleti`: \"Özdemir Paşa yakalandığı hastalıktan kurtulamayarak burada vefat etti (1560)\" · TDV `etiyopya`: \"1560'ta fetih hareketini yürütürken öldü\"" },

{ t:"1561-01-01", b:"Özdemiroğlu Osman Paşa'nın Habeş beylerbeyiliğine tayini", tur:"idari", onem:4, dunya:1, kapsam:"ic", yer_id:"Masavva",
  etiket:["idari","askeri"],
  d:"Özdemir Paşa'nın oğlu Osman Paşa Habeş eyaleti beylerbeyiliğine tayin edildi. Daha sonra Osmanlı sadrazamlığına kadar yükselecek olan Özdemiroğlu'nun askerî kariyeri bu eyalette başladı.",
  kaynak:"TDV `habes-eyaleti`: \"Özdemir Paşa'nın oğlu Osman Paşa Habeş eyaleti beylerbeyiliğine tayin edildi (1561)\" · TDV slug `osman-pasa-ozdemiroglu` CANLI (aranan `ozdemir-pasa` ÖLÜ çıktı)" },

{ t:"1562-01-01", b:"Debârvâ ve çevresinin yeniden Osmanlı hâkimiyetine alınması", tur:"toprak", onem:3, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak"],
  d:"Osman Paşa, Ocak 1562'de Debârvâ ve çevresini tekrar Osmanlı hâkimiyetine aldı. Az bir kuvvetle kısa zamanda eyalette hâkimiyeti yeniden kurdu.",
  kaynak:"TDV `habes-eyaleti`: \"Debârvâ ve çevresini Ocak 1562'de tekrar Osmanlı hâkimiyetine aldı\"" },

{ t:"1562-04-20", b:"Enderta Muharebesi — Habeş Kralı Minas'ın bozguna uğratılması", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Özdemiroğlu Osman Paşa, kendisine katılan yerli Habeş kuvvetlerinin de yardımıyla Tigre topraklarındaki Enderta mevkiinde Habeşistan Kralı Minas'ı büyük bir yenilgiye uğrattı. Osmanlı'nın Habeş yaylasındaki en büyük meydan zaferidir. (Enderta atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `habes-eyaleti`: \"Tigre topraklarında bulunan Enderta mevkiinde Habeşistan Kralı Minas'ı büyük bir yenilgiye uğrattı (20 Nisan 1562)\"" },

{ t:"1563-01-01", b:"Sevâkin'e beylerbeyinden ayrı bir sancak beyi tayini", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"Sevâkin",
  etiket:["idari"],
  d:"Func Devleti'ne bağlı Arap aşiretlerinin baskıları artınca Sevâkin'de yeni bir idarî düzenlemeye gidildi ve beylerbeyinden ayrı bir sancak beyinin tayinine karar verildi. Eyaletin iç Sudan sınırındaki basınç, idarî yapıyı doğrudan biçimlendiriyordu.",
  kaynak:"TDV `habes-eyaleti`: \"Func Devleti'ne bağlı Arap aşiretlerinin baskıları artınca ... Sevâkin'e beylerbeyiden başka ayrı bir sancak beyinin tayinine karar verildi (1563)\"" },

{ t:"1564-01-01", b:"Masavva'a müstakil sancak beyi gönderilmesi", tur:"idari", onem:2, dunya:1, kapsam:"ic", yer_id:"Masavva",
  etiket:["idari"],
  d:"Beylerbeyi Masavva'da oturduğundan buraya müstakil bir sancak beyi gönderildi. Eyaletin iki merkezli (Sevâkin-Masavva) yapısı böylece kurumsallaştı.",
  kaynak:"TDV `habes-eyaleti`: \"Beylerbeyi Masavva‘da bulunduğundan buraya müstakil bir sancak beyi gönderildi (1564)\"" },

{ t:"1565-01-01", b:"Habeş eyaletine ilk defterdarın gönderilmesi", tur:"idari", onem:2, dunya:1, kapsam:"ic", yer_id:"Masavva",
  etiket:["idari","iktisadi"],
  d:"İlk defterdar, Özdemiroğlu Osman Paşa zamanında 1565'te gönderildi. Eyaletin malî teşkilâtı böylece tamamlandı.",
  kaynak:"TDV `habes-eyaleti`: \"İlk defterdar Özdemiroğlu Osman Paşa zamanında 1565'te gönderildi (BA, KK, Ruûs)\"" },

{ t:"1573-07-26", b:"İbrim sancağının Habeş eyaletine dâhil edilmesi", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"İbrim",
  etiket:["idari"],
  d:"Nûbe topraklarının idarî bakımdan bağlı olduğu İbrim sancağı 26 Temmuz 1573'te Habeş eyaletine dâhil edildi. Eyaletin sınırı böylece Nil vadisine kadar uzandı.",
  kaynak:"TDV `habes-eyaleti`: \"Bu yerlerin idarî bakımdan bağlı olduğu İbrim sancağı 26 Temmuz 1573'te Habeş eyaletine dahil edildi (BA, KK, Ruûs)\"" },

{ t:"1574-01-01", b:"Habeş ordusunun Debârvâ ve Arkiko harekâtlarının püskürtülmesi", tur:"savas", onem:3, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Rıdvan Paşa zamanında, Habeşistan ordusu tarafından Debârvâ'ya ve Arkiko limanına yönelik iki önemli askerî harekât geri püskürtüldü. Eyalet en geniş sınırlarını 1560-1578 arasında korudu.",
  kaynak:"TDV `habes-eyaleti`: \"Rıdvan Paşa zamanında, Habeşistan ordusu tarafından 1574'te Debârvâ'ya ve Arkiko Limanı'na yönelik iki önemli askerî harekât geri püskürtüldü\"" },

{ t:"1578-01-01", b:"Habeş Eyaleti âzami sınırlarına ulaştı — genişleme imkânının tükenmesi", tur:"idari", onem:4, dunya:2, kapsam:"ic", yer_id:"Masavva",
  etiket:["toprak","askeri"],
  d:"Habeş eyaleti en geniş sınırlarına 1560-1578 arasında ulaştı; 1578'de yapılan savaşlar bu ülkede daha fazla yayılma imkânı bulunmadığını gösterdi. Aynı yıl Osmanlı-yerli kuvvetlerle çıkan çatışmalarda Habeşler galip geldiyse de Masavva Türklerin elinde kalmaya devam etti.",
  kaynak:"TDV `habes-eyaleti`: \"Habeş eyaleti en geniş sınırlarına 1560-1578 yılları arasında ulaştı ... 1578'de ulaşılan sınırın âzami sınırlar olduğunu gösterdi\" · TDV `masavva`: \"986 (1578) yılında ... Habeşler galip geldilerse de Masavva‘ Türkler'in elinde kalmaya devam etti\"" },

{ t:"1579-01-01", b:"Addi Karro Muharebesi — Osmanlı yenilgisi ve toprak kaybı", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kaybi"],
  d:"Tigre toprakları üzerinde Addi Karro denilen yerde yapılan meydan savaşında Osmanlı kuvvetleri yenildi ve Beylerbeyi Ahmed Paşa öldürüldü; eyalet topraklarının bir kısmı Habeşistan Krallığı'nın eline geçti. Osmanlı'nın Habeş yaylasındaki ilerlemesi burada kalıcı olarak durdu. (Addi Karro atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `habes-eyaleti`: \"meydan savaşı, Tigre toprakları üzerinde Addi Karro denilen yerde yapıldı (1579)\" · \"1579'da Osmanlılar'ın yenilgisiyle sonuçlanan Addi Karro Savaşı'nın ardından eyalet topraklarının bir kısmı Habeşistan Krallığı'nın eline geçti\"" },

{ t:"1579-12-13", b:"Hızır Paşa'nın Arkiko'yu kurtarması ve Habeş baskısını kırması", tur:"savas", onem:4, dunya:1, kapsam:"dis", yer_id:"Masavva",
  etiket:["askeri"],
  d:"13 Aralık 1579'da Habeş beylerbeyi olan Hızır Paşa, kendi adamlarının yanında 300 tüfekçi, 100 atlı ve bir miktar cephane temin ettikten sonra Yemen'den Bayram Bey idaresinde gelen 200 kişiyle birlikte Masavva ve Arkiko'ya yönelik Habeş baskısını bertaraf etti ve Arkiko'yu kurtardı. Addi Karro bozgununun ardından eyaletin çekirdeği böylece korundu.",
  kaynak:"TDV `habes-eyaleti`: \"13 Aralık 1579'da Habeş beylerbeyi olan Hızır Paşa ... Arkiko'yu da kurtardı\"" },

{ t:"1582-12-21", b:"Mustafa Paşa'nın tayini ve Habeşistan Krallığı ile diplomatik ilişki kurulması", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", yer_id:"Masavva",
  etiket:["diplomasi"],
  d:"21 Aralık 1582'de Habeş eyaletine tayin edilen Mustafa Paşa zamanında Habeşistan Krallığı ile diplomatik ilişki kuruldu. Yarım asırlık savaş, karşılıklı tanımaya dayanan bir denge dönemine bıraktı yerini.",
  kaynak:"TDV `habes-eyaleti`: \"Hızır Paşa'dan sonra Habeş eyaletine tayin edilen (21 Aralık 1582) Mustafa Paşa zamanında Habeşistan Krallığı ile diplomatik ilişki kuruldu\"" },

{ t:"1584-02-13", b:"İbrim'in ayrı eyalet olarak teşkilâtlandırılması", tur:"idari", onem:2, dunya:1, kapsam:"ic", yer_id:"İbrim",
  etiket:["idari"],
  d:"İbrim sancağı 13 Şubat 1584'te ayrı bir eyalet olarak teşkilâtlandırıldı. Düzenleme kısa ömürlü oldu; aynı yılın sonunda geri alınacaktır.",
  kaynak:"TDV `habes-eyaleti`: \"İbrim sancağı 13 Şubat 1584'te ayrı bir eyalet olarak teşkilâtlandırıldıysa da\"" },

{ t:"1584-12-26", b:"İbrim'in tekrar sancak yapılarak Habeş eyaletine bağlanması", tur:"idari", onem:2, dunya:1, kapsam:"ic", yer_id:"İbrim",
  etiket:["idari"],
  d:"İbrim 26 Aralık 1584'te tekrar sancak hâline getirilerek Habeş eyaletine bağlandı. On aylık müstakil eyalet denemesi böylece kapandı.",
  kaynak:"TDV `habes-eyaleti`: \"26 Aralık 1584'te tekrar sancak haline getirilerek Habeş eyaletine bağlandı\"" },

{ t:"1589-01-01", b:"Osmanlı-Habeşistan dostluğunun sona ermesi", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["diplomasi"],
  d:"Mustafa Paşa zamanında kurulan diplomatik dostluk 1589'da sona erdi. Bundan sonra ilişkiler ne savaş ne barış hâlinde, sınır boyu çatışmalarıyla sürdü.",
  kaynak:"TDV `habes-eyaleti`: \"Nihayet bu dostluk 1589'da sona erdi\"" },

{ t:"1626-01-01", b:"Kral Susenyos'un Katolikliğe geçmesi", tur:"din", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["din","isyan"],
  d:"Portekizlilerle gelen Cizvit misyonerleri krallığı Roma Katolik kilisesinin tesiri altına almaya çalıştılar ve 1607-1632 arasında hüküm süren Susenyos 1626'da Katolikliğe geçti. Yerli hıristiyan halk putperest sayılıp yeniden vaftiz edilmek istenince büyük bir isyan çıktı.",
  kaynak:"TDV `etiyopya`: \"1607-1632 yılları arasında hüküm süren Susenios 1626'da Katolikliğe geçti\"" },

{ t:"1632-01-01", b:"Fasilidas'ın tahta çıkışı, Ortodoksluğun iadesi ve Cizvitlerin sürülmesi", tur:"din", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["din","hanedan","isyan"],
  d:"Kanlı biçimde bastırılan Katoliklik isyanı sonunda Susenyos oğlu Fasilidas (1632-1667) lehine tahttan çekilmek zorunda kaldı. Fasilidas kiliseyi düzenledi ve Cizvit papazlarını ülkeden çıkardı; Habeşistan bir daha Avrupa'nın dinî nüfuzuna açılmayacaktır.",
  kaynak:"TDV `etiyopya`: \"kral oğlu Fasilidas (1632-1667) lehine tahttan çekilmek zorunda kaldı ... kiliseyi düzenledi ve Cizvit papazlarını ülkesinden çıkardı\"" },

{ t:"1632-01-02", b:"Fasilidas'ın Habeş beylerbeyi ile misyoner yasağı anlaşması", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", yer_id:"Masavva",
  etiket:["diplomasi","din"],
  d:"Fasilidas, Roma'dan gönderilecek yeni misyonerlerin Masavva limanından karaya çıkıp Etiyopya'ya girmelerinin engellenmesi için Habeş eyaleti beylerbeyi ile bir anlaşma yaptı. Hıristiyan bir kral ile Osmanlı valisi, Katolik nüfuzuna karşı ortak menfaatte buluştu — atlasın en beklenmedik ittifaklarından biridir.",
  kaynak:"TDV `masavva`: \"yeni kral Fasilidas (1632-1667) Katolik misyonerleri ülkesinden çıkardı ve Roma'dan gönderilecek yeni misyonerlerin Masavva‘ Limanı'ndan karaya çıkıp Etiyopya'ya girmelerinin engellenmesi için Habeş eyaleti beylerbeyi ile bir anlaşma yaptı\"" },

{ t:"1636-01-01", b:"Gondar'ın başkent yapılması", tur:"idari", onem:5, dunya:2, kapsam:"ic", yer_id:"Gondar",
  etiket:["idari","sehircilik","mimari"],
  d:"Fasilidas, Tana gölünün kuzeyindeki Gondar'ı başkent yaptı. İki asırdan uzun sürecek Gondar dönemi, Habeşistan'ın gezgin ordugâh başkentlerinden taş saraylı sabit bir payitahta geçişidir; şehrin kale-saray külliyesi Etiyopya mimarisinin klasik eseridir.",
  kaynak:"TDV `etiyopya`: \"Fasilidas Tana gölünün kuzeyindeki Gondar'ı başşehir yaptı (1636)\"" },

{ t:"1648-01-01", b:"Yemen Zeydî İmamı Mütevekkil-Alellah'ın Fasilidas'a elçilik heyeti", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", yer_id:"Masavva",
  etiket:["diplomasi","din"],
  d:"Fasilidas Yemen imamlarıyla diplomatik ilişki kurarak önce Müeyyed-Billâh'a, ardından Mütevekkil-Alellah'a mektup gönderdi; Mütevekkil karşılık olarak Hasan b. Ahmed el-Haymî başkanlığında bir elçilik heyeti yolladı. Seyahat notları günümüze ulaşan bu heyet, Kızıldeniz'in iki yakası arasındaki en ayrıntılı 17. yüzyıl kaydıdır.",
  kaynak:"TDV `masavva`: \"1058 (1648) yılında Yemen Zeydî İmamı Mütevekkil-Alellah tarafından Etiyopya Kralı Fasilidas'a gönderilen elçilik heyetinin başkanı Hasan b. ...\" · TDV `etiyopya`: \"seyahat notları günümüze ulaşmış bulunan Haymî başkanlığındaki bir elçilik heyetini yolladı (1648)\"" },

{ t:"1665-01-01", b:"Fasilidas'ın Bâbürlü Hükümdarı Evrengzîb'den İslâmî kitap ve cami tamiri için yardım istemesi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis", yer_id:"Gondar",
  etiket:["diplomasi","din","kultur"],
  d:"Fasilidas'ın 1665'te Bâbürlü Hükümdarı Evrengzîb'e gönderdiği heyette yer alan Murad Hoca adlı müslüman bir din adamı vasıtasıyla ondan İslâmiyet'e ait kitap istediği ve bir caminin tamiri için yardım talep ettiği bilinmektedir. Hıristiyan bir kralın kendi tebaası müslümanlar için Hindistan'dan destek araması, Gondar'ın çok dinli şehir düzeninin göstergesidir.",
  kaynak:"TDV `etiyopya`: \"Fasilidas'ın, 1665 yılında Bâbürlü Hükümdarı Evrengzîb'e gönderdiği heyette yer alan Murad Hoca adındaki bir müslüman din adamı vasıtasıyla ondan İslâmiyet'e ait kitap istediği ve bir caminin tamiri için yardım talep ettiği bilinmektedir\"" },

{ t:"1667-01-01", b:"I. Yohannes'in müslümanları ayrı mahallelere mecbur etmesi", tur:"sosyal", onem:4, dunya:1, kapsam:"ic", yer_id:"Gondar",
  etiket:["din","sehircilik","sosyal"],
  d:"Yohannes zamanında (1667-1682) İslâmiyet'in güçlenmesi sebebiyle yeni bir dinî düzenleme yapıldı ve başkentte yaşayan müslümanlar dağınık kasabalarda ya da şehirlerin farklı semtlerinde oturmaya mecbur bırakıldılar. Gondar'ın müslüman mahallesi (Addis Alem) bu kararla doğdu.",
  kaynak:"TDV `etiyopya`: \"Yohannes zamanında (1667-1682) İslâmiyet'in güçlenmesi sebebiyle yeni bir dinî düzenleme yapılarak başşehirde yaşayan müslümanlar ... farklı semtlerinde oturmaya mecbur bırakıldılar\"" },

{ t:"1672-01-01", b:"Evliya Çelebi'nin Habeş Eyaleti'ni gezmesi", tur:"kultur", onem:3, dunya:1, kapsam:"ic", yer_id:"Masavva",
  etiket:["kultur","ticaret","idari"],
  d:"1083'te (1672) Habeş eyaletini gezen Evliya Çelebi, beylerbeyinin eyalet merkezi Masavva'da oturduğunu, Sevâkin'in ikinci önemli merkez olduğunu ve Mustafa Paşa'nın 2000 tüfekli asker beslediğini yazar. Limana Portekiz, İngiltere, Hindistan, Çin ve Yemen'den gemilerin uğradığını, şehirde 1600 civarında ev ile Özdemir Paşa ve Şeyh Cemâlî camilerinin bulunduğunu kaydeder.",
  kaynak:"TDV `masavva`: \"1083'te (1672) Habeş eyaletini gezen Evliya Çelebi ... limana Portekiz, İngiltere, Hindistan, Çin, Yemen ve civar bölgelerden gelen gemilerin uğradığını kaydetmektedir\" · \"Özdemir Paşa ve Şeyh Cemâlî camilerinden de bahseder\"" },

{ t:"1673-01-01", b:"Evliya Çelebi'nin Zeyla'da bir ay kalması", tur:"kultur", onem:2, dunya:1, kapsam:"ic", yer_id:"Zeyla",
  etiket:["kultur","sehircilik"],
  d:"Evliya Çelebi 1673 yılında bizzat gittiği ve bir ay kaldığı Zeyla' hakkında ayrıntılı bilgi verir; kale-şehri, garnizonunu ve yaklaşık bin kadar evini tasvir eder. Osmanlı'nın Somali kıyısındaki varlığına dair en zengin çağdaş tanıklıktır.",
  kaynak:"TDV `zeyla`: \"Evliya Çelebi, 1673 yılında bizzat gittiği ve bir ay kaldığı Zeyla‘ hakkında ayrıntılı bilgi vermektedir\"" },

{ t:"1698-01-01", b:"Habeş Eyaleti'nin güney kısımlarının mahallî âmillere terki", tur:"idari", onem:4, dunya:1, kapsam:"ic", yer_id:"Masavva",
  etiket:["idari","iktisadi"],
  d:"Eyaletin güney kısımları 1698'den itibaren mahallî âmillerin yönetimine terkedilmeye başlandı ve gümrük gelirleri daha da düştü. Merkezden idare fiilen yerini yerli Türk-Arap ailelerin özerk yönetimine bıraktı.",
  kaynak:"TDV `habes-eyaleti`: \"Eyaletin güney kısımları da 1698'den itibaren mahallî âmillerin yönetimine terkedilmeye başlandığından gümrük gelirleri daha da düştü\"" },

{ t:"1699-01-01", b:"Habeş Eyaleti'nin surre yükümlülüğünden muaf tutulması", tur:"iktisadi", onem:3, dunya:1, kapsam:"ic", yer_id:"Masavva",
  etiket:["iktisadi","idari","din"],
  d:"1699'dan itibaren Habeş eyaleti hac mevsiminde gönderdiği surreden muaf tutuldu. Muafiyet, eyaletin malî çöküşünün resmî kabulüdür.",
  kaynak:"TDV `etiyopya`: \"1699'dan itibaren Habeş eyaleti hac mevsiminde gönderdiği surreden muaf tutuldu\"" },

{ t:"1701-10-01", b:"Habeş beylerbeyiliğinin Cidde sancağı ve Mekke şeyhülharemliğiyle birleştirilmesi", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"Cidde",
  etiket:["idari"],
  d:"Ekim 1701'de Rumeli beylerbeyiliği pâyesiyle Cidde sancağı mutasarrıfı ve Mekke-i Mükerreme şeyhülharemi olan Süleyman Paşa'ya bu görevlerine ilâveten Habeş beylerbeyiliği tevcih edildi. Eyalet artık müstakil bir idare değil, Hicaz'a bağlı bir unvandır ve bu durum 19. yüzyıla kadar sürecektir.",
  kaynak:"TDV `habes-eyaleti`: \"Ekim 1701'de ... Süleyman Paşa'ya bu görevlerine ilâve olarak Habeş beylerbeyiliği tevcih edilmişti (BA, MD)\" · TDV `etiyopya`: \"1701'den itibaren eyalet Mekke şeyhülharemliği ve Cidde sancak beyliğiyle birlikte mütalaa edilmiştir\"" },

{ t:"1769-01-01", b:"Zemene Mesafint (Prensler Çağı) başladı — merkezî otoritenin çöküşü", tur:"idari", onem:5, dunya:2, kapsam:"ic", yer_id:"Gondar",
  etiket:["idari","isyan","sosyal"],
  d:"Tekle Haimanot döneminde (1769-1777) merkezî otorite zayıfladı ve mahallî idareciler feodal beyler gibi hareket etmeye başladı. Habeş kaynaklarında 1769'dan 1855'e kadar süren bu döneme Zamana Mesafent (küçük beylikler dönemi) denir; imparator adı kalır, iktidar ras'lara geçer.",
  kaynak:"TDV `etiyopya`: \"1769'dan 1855'e kadar geçen zaman Habeş kaynaklarında 'Zamana Mesafent' (küçük beylikler dönemi) adıyla anılmaktadır\"" },

{ t:"1846-01-01", b:"Masavva ve Sevâkin'in Kavalalı Mehmed Ali Paşa'ya sâlyâne olarak verilmesi", tur:"idari", onem:5, dunya:3, kapsam:"dis", yer_id:"Masavva",
  etiket:["idari","ticaret"],
  d:"Kavalalı Mehmed Ali Paşa'nın Kızıldeniz sahilleri ve Sudan topraklarında denetimi sağlaması üzerine ticarî önemi artan Masavva ve Sevâkin 1846'da Sultan Abdülmecid tarafından kendisine sâlyâne olarak verildi. Osmanlı'nın Doğu Afrika kıyısındaki doğrudan idaresi böylece Mısır'a devredilmeye başladı.",
  kaynak:"TDV `masavva`: \"1846 yılında Sultan Abdülmecid tarafından Mısır Hidivi Mehmed Ali Paşa'ya Sevâkin ile birlikte sâlyâne olarak verilen Masavva‘\"" },

{ t:"1849-08-02", b:"Mehmed Ali'nin ölümü üzerine Sevâkin ve Masavva'ın Hicaz valisine geçmesi", tur:"idari", onem:3, dunya:1, kapsam:"dis", yer_id:"Sevâkin",
  etiket:["idari"],
  d:"Mehmed Ali Paşa'nın ölümünün ardından Sevâkin ve Masavva limanları Hicaz valisinin kontrolüne verildi. Kızıldeniz'in batı yakası on altı yıl daha doğrudan Osmanlı idaresinde kalacaktır.",
  kaynak:"TDV `habes-eyaleti`: \"Mehmed Ali'nin ölümünden (1849) sonra Sevâkin ve Masavva‘ limanları Hicaz valisinin kontrolüne verildi\" · gün kronoloji_misir.js 1849-08-02 kaydından alındı" },

{ t:"1849-01-01", b:"Kıbrıslı Tevfik Paşa seferi ve Zeyla'ın Hudeyde sancağına bağlanması", tur:"idari", onem:3, dunya:1, kapsam:"dis", yer_id:"Zeyla",
  etiket:["askeri","idari"],
  d:"Bölgede kesintiye uğrayan Osmanlı hâkimiyetini yeniden kurmak üzere 1849'da Kıbrıslı Tevfik Paşa bir sefer yaptı; ardından Zeyla', Yemen'in Hudeyde sancağına bağlı bir nahiye merkezi oldu. Somali kıyısı böylece Yemen üzerinden idare edilmeye başlandı.",
  kaynak:"TDV `zeyla`: \"1849'da Kıbrıslı Tevfik Paşa'nın yaptığı seferin ardından Zeyla‘, Yemen'in Hudeyde sancağına bağlı bir nahiye merkezi oldu\"" },

{ t:"1853-01-01", b:"Kassa'nın feodal beyleri yenerek Begamder, Tigre ve Şüve'yi ele geçirmesi", tur:"savas", onem:5, dunya:1, kapsam:"ic", yer_id:"Debre Tabor",
  etiket:["askeri","isyan"],
  d:"Güçlenen Kassa adlı feodal yönetici diğer beyleri yenerek Begamder, Tigre ve Şüve'nin bir kısmını ele geçirdi. Seksen dört yıllık Prensler Çağı'nı kapatan birleştirme savaşları böyle başladı.",
  kaynak:"TDV `etiyopya`: \"1853 yılında güçlenen Kassa adında bir feodal yönetici diğer beyleri yenerek Begamder, Tigre ve Şüve'nin bir kısmını ele geçirdikten sonra\"" },

{ t:"1855-02-11", b:"II. Tewodros'un taç giymesi — Etiyopya'nın yeniden birleşmesi", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"Debre Tabor",
  etiket:["hanedan","idari"],
  d:"Kassa kendini II. Tewodros adıyla bütün Etiyopya'nın imparatoru ilân etti. Zemene Mesafint sona erdi; modern Etiyopya devletinin kuruluşu bu tarihe bağlanır.",
  kaynak:"TDV `etiyopya`: \"Tewodros adıyla bütün Etiyopya'nın imparatoru ilân etti (1855)\" · gün data/devletler.js `habesistan` künyesinden devralındı" },

{ t:"1864-01-01", b:"Tewodros'un İngiliz heyetini Mekdelâ Kalesi'ne hapsetmesi", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", yer_id:"Mekdelâ",
  etiket:["diplomasi"],
  d:"1860'tan itibaren Batılılarla arası açılan Tewodros, misyonerlerin ülkesi aleyhindeki yazıları sebebiyle bazı konsolos ve Avrupalıları, 1864'te de gönderilen İngiliz heyetini Mekdelâ Kalesi'ne hapsetti. Bu tutuklama, üç yıl sonra İngiliz seferinin gerekçesi olacaktır.",
  kaynak:"TDV `etiyopya`: \"1864'te de gönderilen İngiliz heyetini Magdala Kalesi'ne hapsetti\"" },

{ t:"1865-01-01", b:"Masavva ve Sevâkin'in Mısır Hidivi İsmâil Paşa'ya verilmesi", tur:"idari", onem:5, dunya:2, kapsam:"dis", yer_id:"Masavva",
  etiket:["idari","ticaret"],
  d:"Masavva ve Sevâkin'in yönetimi 1865'te Mısır Hidivi İsmâil Paşa'ya verildi; Dehlek adaları da bunlarla birlikte Mısır emlâkine dâhil edilerek kaymakamlık statüsünde teşkilâtlandırıldı. (27 Mayıs 1866 tarihli ferman düzenlemeyi teyit etti.) Kızıldeniz'in Afrika kıyısı böylece Osmanlı'nın doğrudan idaresinden çıktı.",
  kaynak:"TDV `habes-eyaleti`: \"Masavva‘ ve Sevâkin'in yönetimi 1865'te Mısır Hidivi İsmâil Paşa'ya verildi\" · TDV `zeyla`: \"27 Mayıs 1866'da çıkarılan bir fermanla ... Sevâkin ve Masavva‘ kaymakamlıkları Mısır valiliğinin denetimine verildi\" · dunya puanı kronoloji_misir.js 1865-01-01 kaydından devralındı" },

{ t:"1868-01-01", b:"İngiliz Mekdelâ seferi ve Tewodros'un intiharı", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"Mekdelâ",
  etiket:["askeri","hanedan"],
  d:"1867-1868'de İngilizler Etiyopya'ya savaş açtı; Tewodros'un kurmaya çalıştığı birlik, İngilizlerin satın aldığı kabile reislerinin isyanıyla bozuldu ve Tigreliler İngiliz ordusunun kendi topraklarından geçmesine izin verdi. Hiçbir mukavemetle karşılaşmadan Mekdelâ önlerine gelen İngilizler karşısında Tewodros intihar etti.",
  kaynak:"TDV `etiyopya`: \"İngilizler'in hiçbir mukavemetle karşılaşmadan Magdala önlerine gelmesi üzerine Tewodros intihar etti (1868)\"" },

{ t:"1872-01-01", b:"IV. Yohannes'in İngiliz desteğiyle imparator olması", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan","idari"],
  d:"Tewodros'un ölümünden sonra ortaya çıkan feodal beyler kendi bölgelerinde hâkimiyet kurarken, Tigre beyi askerî başarıları sayesinde 1872'de İngilizlerin de desteğiyle IV. Yohannes adıyla imparator oldu. Merkezî hıristiyan otorite yeniden kuruldu.",
  kaynak:"TDV `etiyopya`: \"Tigre beyi askerî başarılarından dolayı 1872'de İngilizler'in de desteğiyle IV. ...\"" },

{ t:"1872-01-02", b:"Hidiv İsmâil Paşa'nın Mavi Nil kaynaklarını ilhak teşebbüsünün başarısızlığı", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","iktisadi"],
  d:"1872'de Hidiv İsmâil Paşa, İngilizlerin de teşvikiyle Mavi Nil'in kaynak yerlerini Mısır'a ilhak etmek istedi, fakat başarısızlığa uğradı. Nil sularının denetimi meselesi Mısır-Etiyopya ilişkilerinin değişmez ekseni olarak kaldı.",
  kaynak:"TDV `etiyopya`: \"1872'de Hidiv İsmâil Paşa İngilizler'in de teşvikiyle Mavi Nil'in kaynak yerlerini Mısır'a ilhak etmek istedi, fakat başarısızlığa uğradı\"" },

{ t:"1873-01-01", b:"Masavva'ın Doğu Sudan vilâyetine bağlanması", tur:"idari", onem:2, dunya:1, kapsam:"dis", yer_id:"Masavva",
  etiket:["idari"],
  d:"Hidiv İsmâil Paşa, Masavva'ı Werner Münzinger'i vali tayin ettiği Doğu Sudan vilâyetine bağladı. Mısır'ın Kızıldeniz kıyısındaki idaresi böylece tek elde toplandı.",
  kaynak:"TDV `masavva`: \"Werner Münzinger'i vali tayin ettiği Doğu Sudan vilâyetine bağladı (1873)\"" },

{ t:"1874-01-01", b:"Mısır'ın Masavva üzerinden Etiyopya'ya üç askerî seferi", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"Masavva",
  etiket:["askeri","toprak"],
  d:"1874'ten sonra İsmâil Paşa, Masavva üzerinde hak iddia eden Etiyopya'ya karşı üç askerî sefer düzenledi. Seferlerin hiçbiri kalıcı sonuç vermedi; Mısır'ın Habeşistan'a yayılma denemesi burada tıkandı.",
  kaynak:"TDV `masavva`: \"1874'ten sonra İsmâil Paşa, Masavva‘ üzerinde hak iddia eden Etiyopya'ya karşı üç askerî sefer düzenledi\"" },

{ t:"1877-01-01", b:"İngiltere-Mısır antlaşması: Osmanlı'nın Bâbülmendep-Zeyla' sahilindeki hakkının tanınması", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"Zeyla",
  etiket:["diplomasi","antlasma"],
  d:"1877'de İngiltere ile Mısır arasında yapılan anlaşma sonrasında İngilizler, Osmanlıların Bâbülmendep ile Zeyla' arasındaki sahil üzerindeki hak iddialarını kabul ettiler. Antlaşmaya göre Mısır, Osmanlı hâkimiyetini tanımak şartıyla Re'sühâfûn sahiline kadar genişleyebilecekti; ancak Osmanlı Devleti İngiltere'nin niyetinden şüphe ettiği için antlaşmayı tasdik etmedi.",
  kaynak:"TDV `etiyopya`: \"1877'de İngiltere ile Mısır arasında yapılan anlaşma sonrasında İngilizler, Osmanlılar'ın Bâbülmendep ve Zeyla‘ arasındaki sahil üzerinde hak iddialarını kabul ettiler\" · TDV `habes-eyaleti`: \"Osmanlı Devleti ... 1877 antlaşmasını tasdik etmedi\"" },

{ t:"1879-09-30", b:"II. Abdülhamid'in Zeyla'-Re'sülhâfun sahiline Osmanlı bayrağı dikilmesi emri", tur:"idari", onem:4, dunya:2, kapsam:"dis", yer_id:"Zeyla",
  etiket:["idari","diplomasi"],
  d:"30 Eylül 1879 tarihli telgrafla hidivliğe, Zeyla'dan Re'sülhâfun'a kadar uzanan sahillerin Osmanlı sınırları içine alınması, buraya dirayetli bir memurla bir vapur gönderilmesi, Osmanlı bayrağı dikilmesi, belli miktarda asker bulundurulması ve bir fener yaptırılması emredildi. Avrupa paylaşımı hızlanırken Osmanlı hukukî iddiasını görünür kılmaya çalışıyordu.",
  kaynak:"TDV `zeyla`: \"30 Eylül 1879'da gelen telgrafta Zeyla‘dan Re'sülhâfun'a kadar uzanan sahillerin Osmanlı Devleti sınırları içine alınması ... emredilmişti\"" },

{ t:"1884-06-03", b:"Hewett (Adve) Antlaşması — Bogos'un Habeşistan'a bırakılması", tur:"antlasma", onem:5, dunya:3, kapsam:"dis", yer_id:"Kerene",
  etiket:["antlasma","toprak"],
  d:"Sudan'daki Mehdî hareketi sebebiyle Mısır, Etiyopya ve İngiltere arasında Adve (Hewett) Antlaşması imzalandı; Bogos (Kerene) bölgesi Habeşistan'a bırakıldı ve Masavva limanından Etiyopya'ya silâh dâhil bütün malların transit geçişi serbest bırakıldı. Etiyopya'nın denize çıkışı ilk defa antlaşmayla güvence altına alındı — ve bir yıl sonra İtalya bu güvenceyi çiğneyecektir.",
  kaynak:"TDV `etiyopya`: \"Sudan'daki Mehdî hareketi sebebiyle 1884'te imzalanan Adve Antlaşması Mısır, Etiyopya ve İngiltere arasında akdedildi\" · TDV `masavva`: \"1884 Adve Antlaşması\" · gün olaylar_ek9.js 1884-06-03 kaydından alındı" },

{ t:"1884-01-01", b:"Osmanlı'nın Zeyla'-Masavva arasındaki sahilde idareyi yeniden kurması", tur:"idari", onem:3, dunya:1, kapsam:"dis", yer_id:"Zeyla",
  etiket:["idari","diplomasi"],
  d:"İngiltere Mısır'ı işgal edip Sudan, Somali ve Kızıldeniz sahillerine yerleşmeye başlayınca Osmanlı Devleti işgal edilen yerlerde diplomatik yollardan hak iddiasında bulundu ve Zeyla' ile Masavva arasındaki sahilde tekrar idaresini tesis etti. Bu idare Mısır'ın malî sıkıntısı yüzünden ertesi yıl Yemen vilâyetine devredilecektir.",
  kaynak:"TDV `habes-eyaleti`: \"Zeyla‘ ile Masavva‘ arasındaki sahilde tekrar idaresini tesis etti (1884)\"" },

{ t:"1885-02-05", b:"İtalya'nın Masavva'ı işgali — Osmanlı bayrağının Kızıldeniz batı kıyısından inişi", tur:"toprak", onem:5, dunya:3, kapsam:"dis", yer_id:"Masavva",
  etiket:["askeri","toprak-kaybi"],
  d:"1882'de güneydeki Assab'ı sömürgeleştiren İtalyanlar, İngiltere'nin daveti üzerine 5 Şubat 1885'te Osmanlı bayrağının dalgalandığı ve Mısır askerinin bulunduğu Masavva'a girdiler. 1884 Adve Antlaşması'na rağmen Etiyopya'ya silâh transitine izin vermediler; Eritre sömürgesinin ve Etiyopya ile otuz yıl sürecek çekişmenin temeli atıldı.",
  kaynak:"TDV `masavva`: \"5 Şubat 1885'te Masavva‘a girdiler\" · TDV `etiyopya`: \"Osmanlılar'a bağlı bir muhafızlık olan Masavva‘ı 5 Şubat 1885'te zaptettiler\"" },

{ t:"1885-01-01", b:"Habeş sahilinin Yemen vilâyeti tarafından idaresine karar verilmesi", tur:"idari", onem:2, dunya:1, kapsam:"ic", yer_id:"Zeyla",
  etiket:["idari"],
  d:"Mısır'ın malî sıkıntısı yüzünden Zeyla'-Masavva sahilinin Yemen vilâyeti tarafından idaresine karar verildi. Osmanlı'nın Afrika kıyısındaki son idarî düzenlemesidir.",
  kaynak:"TDV `habes-eyaleti`: \"Mısır'ın malî sıkıntı içinde bulunması yüzünden buranın Yemen vilâyeti tarafından idaresine karar verildi (1885)\"" },

{ t:"1886-01-01", b:"Dehlek adalarının İtalya tarafından işgali", tur:"toprak", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["toprak-kaybi"],
  d:"1865'te Mısır emlâkine dâhil edilinceye kadar Habeş eyaletine bağlı kalan Dehlek takımadası 1886'da İtalya tarafından işgal edildi. Masavva'ın karşısındaki bu stratejik adalar Eritre sömürgesinin deniz ayağını tamamladı. (Dehlek atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `dehlek`: \"Habeş eyaletine bağlı kalan Dehlek 1886 yılında İtalya tarafından işgal edildi\"" },

{ t:"1887-01-01", b:"İtalya-Etiyopya çatışması ve İtalyan birliklerinin yenilgisi", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"1887'de Tigre'ye giden İtalyan heyetinin hapsedilmesi ve onu kurtarmak amacıyla yola çıkan birliğin yenilmesi üzerine İtalya ile Etiyopya arasında çatışma çıktı ve İtalyan birlikleri yenilgiye uğradı. İtalyanlar bunun üzerine 18.000 kişilik büyük bir ordu hazırladılar.",
  kaynak:"TDV `masavva`: \"1887 yılında İtalya ile Etiyopya arasında çatışma çıktı ve İtalyan birlikleri yenilgiye uğradı\" · TDV `etiyopya`: \"1887'de giden heyetin Tigre'de hapsedilmesi ... İtalyanlar 18.000 kişilik büyük bir ordu hazırladılar\"" },

{ t:"1888-03-01", b:"Mehdî kuvvetlerinin Gondar'ı yakması ve Habeş ordusunun geri çekilmesi", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Gondar",
  etiket:["askeri","sehircilik"],
  d:"1888 Martında Habeşler 100.000 kişilik bir orduyla İtalyanların karşısına çıktılarsa da Mehdî'nin Amhare'ye girip başkent Gondar'ı yakması sebebiyle geri çekildiler. İki cephede birden savaşmak zorunda kalan krallık, İtalya'ya karşı kesin hamlesini sekiz yıl erteledi.",
  kaynak:"TDV `etiyopya`: \"1888 Martında Habeşler 100.000 kişilik bir orduyla İtalyanlar'ın karşısına çıktılarsa da Mehdî'nin Amhare'ye girip başşehir Gondar'ı yakması sebebiyle geri çekildiler\"" },

{ t:"1889-03-09", b:"IV. Yohannes'in Metemme'de Mehdî kuvvetlerine karşı savaşırken ölmesi", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Metemma",
  etiket:["askeri","hanedan"],
  d:"Yohannes, Gondar'ın intikamını almak için Mehdî kuvvetlerinin üzerine yürüdü; ancak Metemme'de yapılan savaşta öldü ve yerine oğlu Ras Mangasya geçti. Bir imparatorun savaş meydanında ölümü, Şüve kralı Menelik'in önünü açtı.",
  kaynak:"TDV `etiyopya`: \"Metemme'de yapılan savaşta öldü ve yerine oğlu Ras Mangasya geçti (1889)\" · gün data/devletler.js `habesistan` künyesindeki 1889-05-02 kaydından FARKLI: künye Uccialli gününü taşıyor, bu ayrı olaydır" },

{ t:"1889-05-02", b:"Wichale (Uccialli) Antlaşması — Menelik'in İtalya ile anlaşması", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kaybi"],
  d:"İtalyanlar güçlenen Şüve Kralı Menelik'i negus ilân edip yanlarına çekmeye çalıştılar; Menelik ilk iş olarak 2 Mayıs 1889'da onlarla Wichale (Uccialli) Antlaşması'nı imzaladı ve Masavva'dan Keselâ'ya uzanan bir çizginin kuzeyindeki toprakları İtalya'ya verdi. Antlaşmanın Amharca ve İtalyanca metinleri arasındaki fark — İtalya'nın himaye iddiası — Adva Savaşı'na giden yolu açacaktır.",
  kaynak:"TDV `etiyopya`: \"Menelik de ilk iş olarak 2 Mayıs 1889'da onlarla Wichale (Uccialli) Antlaşması'nı imzaladı\" · TDV `masavva`: \"Menelik ile yaptıkları Wichale (Uccialli) Antlaşması ile Kızıldeniz kıyısındaki bazı toprakları ele geçirdiler (2 Mayıs 1889)\"" },

{ t:"1889-06-01", b:"Ras Mangasya'nın yenilgisi ve Menelik'in imparatorluğunun kabulü", tur:"savas", onem:4, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["askeri","hanedan"],
  d:"Wichale Antlaşması'na karşı çıkan Ras Mangasya, 1889 Haziranında Adve'ye kadar yürüyen İtalyanlara yenildi ve Menelik'in imparatorluğunu kabul etmek zorunda kaldı. Süleymanî tacı Tigre'den Şüve'ye geçti.",
  kaynak:"TDV `etiyopya`: \"Ras Mangasya karşı çıktıysa da 1889 Haziranında Adve'ye kadar yürüyen İtalyanlar'a yenildi ve Menelik'in imparatorluğunu kabul etmek zorunda kaldı\"" },

{ t:"1889-01-01", b:"Menelik'in Kudüs'teki kilise meselesiyle Osmanlı hükümetine heyet göndermesi", tur:"diplomasi", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","din"],
  d:"Menelik 1889 yılında Kudüs'teki bir kilise münasebetiyle Osmanlı hükümetine bir heyet gönderdi. Habeş kilisesinin Kudüs'teki hakları, iki devlet arasındaki en eski ve en sürekli temas konusudur.",
  kaynak:"TDV `etiyopya`: \"Menelik, 1889 yılında Kudüs'teki bir kilise münasebetiyle Osmanlı hükümetine bir heyet gönderdi\"" },

{ t:"1890-01-01", b:"Adisababa'nın başkent yapılması", tur:"idari", onem:5, dunya:2, kapsam:"ic", yer_id:"Addis",
  etiket:["idari","sehircilik"],
  d:"Wichale Antlaşması'yla kuzeyi İtalya'ya bırakan Menelik, kalan Etiyopya topraklarında birliği sağlamaya çalıştı ve Adisababa'yı başkent yaptı. Ülkenin siyasî ağırlık merkezi kuzeydeki Tigre-Gondar hattından güneydeki Şüve'ye kalıcı olarak kaydı.",
  kaynak:"TDV `etiyopya`: \"Menelik geri kalan Etiyopya topraklarında birliği temin etmeye çalıştı ve Adisababa'yı başşehir yaptı (1890)\"" },

{ t:"1896-03-01", b:"Adva Muharebesi — İtalya'nın yenilgisi ve Etiyopya bağımsızlığının korunması", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak"],
  d:"1895'te saldırıya geçen İtalyanlar, Rusların silâhlandırdığı Etiyopyalılar karşısında önce Adve'de, ardından Makalle'de ağır bir yenilgiye uğradılar. Adva, bir Afrika devletinin bir Avrupa ordusunu meydan savaşında yendiği tek büyük örnek olarak Afrika'nın paylaşılması çağının istisnasıdır. (Adva atlasta yerleşim olarak KAYITLI DEĞİL — en önemli yer_id eksiği.)",
  kaynak:"TDV `etiyopya`: \"1895'te saldırıya geçen İtalyanlar ... önce Adve'de, daha sonra Makalle'de ağır bir yenilgiye uğradılar\" · dunya puanı kronoloji_italya.js 1896-03-01 kaydından devralındı (onem 4, dunya 3)" },

{ t:"1896-10-26", b:"Adisababa Antlaşması — Wichale'nin feshi ve hükümranlığın tanınması", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"Addis",
  etiket:["antlasma","toprak"],
  d:"26 Ekim 1896'da Wichale Antlaşması feshedilerek yerine Adisababa Antlaşması imzalandı ve İtalyanlar, Mareb-Belese çizgisi kendilerinde kalmak üzere Etiyopya'nın hükranlık haklarını kabul ettiler. Etiyopya, Avrupa devletlerince tam bağımsızlığı tanınan tek Afrika devleti oldu.",
  kaynak:"TDV `etiyopya`: \"26 Ekim 1896'da Wichale Antlaşması feshedilerek yerine Adisababa Antlaşması imzalandı ve İtalyanlar Mareb-Belese çizgisi kendilerinde kalmak üzere Etiyopya'nın hükümranlık haklarını kabul ettiler\"" },

{ t:"1902-01-01", b:"Sâdık Müeyyed Paşa'nın elçilik heyeti ve Adisababa'da Osmanlı başşehbenderliği", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis", yer_id:"Addis",
  etiket:["diplomasi","din"],
  d:"II. Abdülhamid, Menelik'in 1889'daki heyetine Sâdık Müeyyed Paşa başkanlığındaki bir elçilik heyetiyle karşılık verdi. Aynı yıl Etiyopya'nın batı sınırı da İngilizlerce çizildi. Osmanlı'nın Habeşistan'daki müslüman tebaayı gözeten diplomatik varlığı böylece kuruldu.",
  kaynak:"TDV `etiyopya`: \"Abdülhamid de 1902'de Sâdık Müeyyed Paşa başkanlığındaki bir elçilik heyeti ile karşılık verdi\" · \"Etiyopya'nın batı sınırı çizildi (1902)\"" },

{ t:"1906-01-01", b:"İngiltere-Fransa-İtalya üçlü antlaşması: Etiyopya'nın nüfuz bölgelerine ayrılması", tur:"antlasma", onem:5, dunya:3, kapsam:"dis", yer_id:"Addis",
  etiket:["antlasma","diplomasi"],
  d:"İngiltere, Fransa ve İtalya, Etiyopya'yı nüfuz bölgelerine ayıran üçlü bir antlaşma imzaladılar. Aynı yıl Adva kahramanı Ras Makonnen'in ölümü Menelik'in gücünü zayıflattı; 1903'ten itibaren Almanlar da kral üzerinde nüfuz kurup imtiyazlar elde ettiler.",
  kaynak:"TDV `etiyopya`: \"1906'da İtalyanlar'ı Adve'de hezimete uğratarak halk kahramanı olan amcasının oğlu Ras Makonnen'in ölümü Menelik'in gücünü zayıflattı\" · \"1903'ten itibaren faaliyete geçmiş olan Almanlar da Etiyopya kralı üzerinde nüfuz kurup bazı imtiyazlar elde ettiler\"" },

{ t:"1907-01-01", b:"Menelik'in idareyi bırakması ve Lidj Yassou'yu vâris tayin etmesi", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", yer_id:"Addis",
  etiket:["hanedan"],
  d:"Menelik sağlığının bozulması sebebiyle 1907'de idareyi karısına bıraktı, torunu Lidj Yassou'yu da vâris tayin etti. Veraset meselesi, ölümünden sonra sarayı yıllarca meşgul edecektir.",
  kaynak:"TDV `etiyopya`: \"Menelik sağlığının bozulması sebebiyle 1907'de idareyi karısına bırakırken torunu Lidj Yassou'yu da vâris tayin etti\"" },

{ t:"1913-01-02", b:"Menelik'in ölümü ve Lidj Yassou'nun Alman desteğiyle tahta geçmesi", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"Addis",
  etiket:["hanedan"],
  d:"Kralın 1913'te ölümü üzerine sarayda ortaya çıkan iç karışıklık sırasında Lidj Yassou ancak Almanların yardımıyla tahta geçebildi. Etiyopya böylece I. Dünya Savaşı'na giden yolda İttifak devletlerine yakın bir hükümdar edindi.",
  kaynak:"TDV `etiyopya`: \"Kralın 1913'te ölümü üzerine sarayda ortaya çıkan iç karışıklık sırasında Lidj Yassou ancak Almanlar'ın yardımıyla tahta geçebildi\"" },

{ t:"1917-09-27", b:"Lidj Yassou'nun tahttan indirilmesi — Zaoditou imparatoriçe, Ras Tafari nâib", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"Addis",
  etiket:["hanedan","din"],
  d:"İslâmiyet'i benimsemesi ve Somali'de İngilizlere karşı savaşan Muhammed Abdullah Hasan'la ittifak yapması gibi sebeplerle Batılı çevrelerin düşmanlığını üzerine çeken Lidj Yassou 1917'de tahttan indirildi; yerine Menelik'in kızı Zaoditou çıkarıldı, Ras Makonnen'in oğlu Ras Tafari kral nâibi ve veliaht tayin edildi. Bu tarih, Etiyopya'da bir müslüman hükümdar ihtimalinin kapandığı andır.",
  kaynak:"TDV `etiyopya`: \"1917'de tahttan indirilerek yerine Menelik'in kızı Zaoditou çıkarıldı, yeğeni Ras Tafari de (Ras Makonnen'in oğlu) kral nâibi ve veliaht tayin edildi\" · gün data/devletler.js künyesinde YOK, TDV yalnız yılı veriyor — GÜN İÇİN 27 Eylül 1917 (Zaoditou'nun taç giymesi) standart akademik kaynaktan alındı: Bahru Zewde, A History of Modern Ethiopia 1855-1974 (TDV `harar` bibliyografyasında da anılan eser)" },

{ t:"1922-01-01", b:"İngiliz basınının kölelik meselesiyle Zaoditou ve Ras Tafari aleyhine tavır alması", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis", yer_id:"Addis",
  etiket:["diplomasi","sosyal"],
  d:"Nil ve Tana gölü siyasetleri sebebiyle İngilizler Etiyopyalıların aleyhine döndüler ve 1922'de İngiliz basını kölelik meselesini ileri sürerek İmparatoriçe Zaoditou ve nâib veliaht Ras Tafari aleyhine tavır aldı. 1920'de İtalyan basını da Etiyopya'nın yıkılmasını 'medeniyet için faydalı' göstermişti.",
  kaynak:"TDV `etiyopya`: \"1922'de İngiliz basını kölelik meselesini ileri sürerek İmparatoriçe Zaoditou ve nâib veliaht Ras Tafari aleyhine tavır aldı\"" },

{ t:"1923-09-28", b:"Etiyopya'nın Milletler Cemiyeti'ne girişi", tur:"diplomasi", onem:5, dunya:3, kapsam:"dis", yer_id:"Addis",
  etiket:["diplomasi","antlasma"],
  d:"Etiyopya 1923 yılında Amerika Birleşik Devletleri ve Fransızların teşvikiyle Milletler Cemiyeti'ne girdi. Sömürgeleşmemiş tek Afrika devletinin milletlerarası sisteme kabulü, atlasın kapanış yılında Doğu Afrika'nın en önemli hadisesidir.",
  kaynak:"TDV `etiyopya`: \"Böylece Etiyopya 1923 yılında Amerika Birleşik Devletleri ve Fransızlar'ın teşvikiyle bu kuruluşa girdi\" · gün TDV'de YOK; 28 Eylül 1923 (Cemiyet Genel Kurulu kabul kararı) standart akademik kaynaktan: Bahru Zewde, A History of Modern Ethiopia 1855-1974" },

];

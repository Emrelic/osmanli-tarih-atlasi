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

// ══════════════════════════════════════════════════════════════════
// IV. SVAHİLİ ŞEHİR DEVLETLERİ — 1281-1698
//    Kilve · Mombasa · Melindi · Pate · Lamu · Sofala
//    Şîrâzî hânedanları · Portekiz işgali · Osmanlı seferleri · Umman
// ⚠️ 1698 SONRASI Zengibar'ın kendi iç tarihi BU DOSYADA YOK —
//    `umman-zengibar` künyesi ARABISTAN KRONOLOJİ oturumunun alanıdır.
// ══════════════════════════════════════════════════════════════════

{ t:"1310-01-01", b:"Husuni Kubwa Sarayı'nın Sultan Hasan b. Süleyman adına yapımı", tur:"mimari", onem:5, dunya:2, kapsam:"ic", yer_id:"Kilwa Kisiwani (Kilve)",
  etiket:["mimari","kultur","ticaret"],
  d:"Sultan Hasan b. Süleyman (1310-1333) adına yaptırılan Husuni Kubwa Sarayı, Doğu Afrika Sevâhilî mimarisinin en büyük eseridir: mercan taşından yüz odalı bir saray-ambar külliyesi. Yapı, Kilve'nin Sofala altınından gelen servetinin somut kanıtıdır.",
  kaynak:"TDV `kilve`: \"Sultan Hasan b. Süleyman (1310-1333) adına yaptırılan Husuni Kebva Sarayı başlıca tarihî eserler arasındadır\"" },

{ t:"1331-01-01", b:"İbn Battûta'nın Kilve, Mombasa ve Makdişu'yu ziyareti", tur:"kultur", onem:5, dunya:2, kapsam:"ic", yer_id:"Kilwa Kisiwani (Kilve)",
  etiket:["kultur","ticaret","din"],
  d:"İbn Battûta 731 (1331) yılında önce Makdişu'yu, ardından Mombasa'yı ve Kilve'yi ziyaret etti ve Kilve için 'dünyanın en güzel ve mâmur şehirlerinden biridir' dedi. Mombasa'da muz, portakal ve 'cemûn' ağaçları gördüğünü, halkın tarımla uğraşmayıp tahılını sahilin başka yerleşimlerinden aldığını kaydeder. Svahili kıyısının altın çağına dair en ayrıntılı çağdaş tanıklıktır.",
  kaynak:"TDV `kilve`: \"1331 yılında buraya gelen İbn Battûta'ya göre Kilve dünyanın en güzel ve mâmur şehirlerinden biridir\" · TDV `mombasa`: \"İbn Battûta, 731 (1331) yılında Makdişu'yu ziyaret ettikten sonra Kilve'ye gitmek üzere bindiği gemiyle ... Mombasa (Membessâ) adasına uğradığını\"" },

{ t:"1412-01-01", b:"Kilve Büyük Camii'nin Sultan Süleyman zamanında tamamlanması", tur:"mimari", onem:5, dunya:2, kapsam:"ic", yer_id:"Kilwa Kisiwani (Kilve)",
  etiket:["mimari","din","kultur"],
  d:"XIV. yüzyılda inşasına başlanan Kilve Büyük Camii (Cuma Camii), Sultan Süleyman (1412-1442) zamanında tamamlandı. Kubbeli ve sütunlu mekân düzeniyle Doğu Afrika Sevâhilî mimarisinin başyapıtı sayılır; Gereza Kalesi ile birlikte adanın en önemli tarihî eseridir.",
  kaynak:"TDV `kilve`: \"XIV. yüzyılda inşasına başlanan ve Sultan Süleyman (1412-1442) zamanında tamamlanan Doğu Afrika Sevâhilî mimarisinin en önemli eserlerinden Kilve Büyük Camii\"" },

{ t:"1498-04-07", b:"Vasco da Gama'nın Mombasa önüne gelmesi — Portekiz çağının başlangıcı", tur:"deniz", onem:5, dunya:4, kapsam:"dis", yer_id:"Mombasa",
  etiket:["ticaret","askeri"],
  d:"Vasco da Gama'nın 7 Nisan 1498'de Mombasa önüne gelmesi, bölge tarihini değiştirecek hadiselerin başlangıcı oldu. Beş asırdır Hint Okyanusu ticaretini müslüman tüccarlarla paylaşan Svahili şehir devletleri, ilk defa denizden gelen bir Avrupa gücüyle karşılaştı.",
  kaynak:"TDV `mombasa`: \"Vasco da Gama'nın 7 Nisan 1498'de Mombasa önüne gelmesi bölge tarihini değiştirecek hadiselere sebep oldu\"" },

{ t:"1499-01-01", b:"Vasco da Gama'nın Makdişu saldırısının başarısızlığı", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["askeri"],
  d:"Vasco da Gama, Hindistan'dan dönüşünde donanmasıyla Makdişu'ya bir saldırı düzenlediyse de şehri işgal edemedi. Somali kıyısının en büyük limanı, Portekiz'in eline hiçbir zaman geçmedi.",
  kaynak:"TDV `makdisu`: \"Her ne kadar 1499'da Hindistan'dan dönüşünde Vasco da Gama donanmasıyla Makdişu'ya bir saldırı düzenlemişse de şehri işgal edememişti\"" },

{ t:"1500-01-01", b:"Pedro Alvares Cabral'ın Kilve ve Mombasa'ya gelişi", tur:"deniz", onem:3, dunya:2, kapsam:"dis", yer_id:"Mombasa",
  etiket:["ticaret"],
  d:"Pedro Alvares Cabral kumandasındaki Portekiz donanması Kilve'yi ziyaret etti ve Mombasa önüne kadar geldi. Portekiz, işgalden önce kıyıyı iki yıl boyunca keşfetti ve şehirlerin birbirine düşmanlığını ölçtü.",
  kaynak:"TDV `kilve`: \"1498 ve 1502 yıllarında Vasco da Gama, 1500 yılında Pedro Alvares Cabral burayı ziyaret etti\" · TDV `mombasa`: \"1500'de Pedro Alvarès Cabral kumandasındaki Portekiz donanması Mombasa önüne kadar geldi\"" },

{ t:"1505-07-24", b:"Francisco d'Almeida'nın Kilve'yi işgali ve yağmalaması", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Kilwa Kisiwani (Kilve)",
  etiket:["askeri","ticaret","toprak-kaybi"],
  d:"Etiyopya-Arabistan bölgesi valisi tayin edilen kral nâibi Francisco d'Almeida 500 kişilik bir kuvvetle Kilve adasına çıktı ve şehri yağmaladı. Sofala altın ticaretinin merkezi olan sultanlık, Doğu Afrika kıyısındaki Portekiz üs zincirinin ilk halkası oldu.",
  kaynak:"TDV `kilve`: \"kral nâibi Francisco d'Almeida 1505'te 500 kişilik bir kuvvetle adaya çıktı\" · gün ve dunya puanı kronoloji_portekiz.js 1505-07-24 kaydından devralındı (onem 3, dunya 2)" },

{ t:"1505-08-14", b:"Mombasa'nın top ateşiyle yağmalanması", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Mombasa",
  etiket:["askeri","toprak-kaybi"],
  d:"Yirmi gemiden oluşan Portekiz donanması Sofala ve Kilve'nin ardından Mombasa'yı da ele geçirdi ve şehri top ateşiyle yağmaladı. Kıyının en zengin üç limanı bir yaz içinde düştü.",
  kaynak:"TDV `mombasa`: \"Francisco d'Almeida kumandasındaki yirmi gemiden meydana gelen Portekiz donanması Süfâle ve Kilve'nin ardından 1505'te Mombasa'yı da ele geçirdi\" · gün ve dunya puanı kronoloji_portekiz.js 1505-08-14 kaydından devralındı (onem 2, dunya 2)" },

{ t:"1506-01-01", b:"Kilve Sultanlığı'nın Mombasa gemilerinden vergi aldığının kaydedilmesi", tur:"iktisadi", onem:2, dunya:1, kapsam:"ic", yer_id:"Kilwa Kisiwani (Kilve)",
  etiket:["ticaret","idari"],
  d:"1506'da Portekiz kralına yazılan bir rapordan, Mombasa ile Kilve Sultanlığı arasında münasebet bulunduğu ve Kilve'nin Mombasa'ya ait gemilerden vergi aldığı anlaşılmaktadır. Svahili şehirleri arasındaki hiyerarşiyi gösteren nadir kayıtlardan biridir.",
  kaynak:"TDV `mombasa`: \"Mombasa ile Kilve Sultanlığı arasında münasebetlerin bulunduğu, 1506'da Portekiz kralına yazılan bir rapordan anlaşılmakta ve Kilve Sultanlığı'nın Mombasa'ya ait gemilerden vergi aldığı belirtilmektedir\"" },

{ t:"1507-01-01", b:"İkinci Portekiz Makdişu saldırısının başarısızlığı", tur:"savas", onem:3, dunya:1, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["askeri"],
  d:"1507'de Makdişu'ya karşı gerçekleştirilen saldırılar da başarısızlıkla sonuçlandı. Şehrin sur ve mercan taşı yapıları ile iç kabile desteği, Portekiz çıkarma kuvvetlerini iki kez geri çevirdi.",
  kaynak:"TDV `makdisu`: \"1507'de gerçekleştirilen saldırılar da başarısızlıkla sonuçlandı\"" },

{ t:"1508-01-01", b:"Doğu Afrika Portekiz sömürgesinin üç eyalete bölünmesi", tur:"idari", onem:4, dunya:2, kapsam:"dis", yer_id:"Mombasa",
  etiket:["idari","ticaret"],
  d:"Mozambik merkezli Etiyopya, Arabistan ve Mombasa adlı üç eyaletten oluşan Doğu Afrika'daki Portekiz sömürgesinin idaresi 1508'de kral tarafından Duarte da Lemos'a verildi. Svahili kıyısı ilk defa tek bir Avrupa idarî çerçevesi altında toplandı.",
  kaynak:"TDV `mombasa`: \"Mozambik merkezli Etiyopya, Arabistan ve Mombasa adlı üç eyaletten oluşan Doğu Afrika'daki Portekiz sömürgesinin idaresi kral tarafından 1508 yılında Duarte da Lemos'a verildi\"" },

{ t:"1513-01-01", b:"Portekizlilerin Kilve'yi tamamen harabeye çevirmesi", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Kilwa Kisiwani (Kilve)",
  etiket:["askeri","sehircilik","ticaret"],
  d:"Portekizliler 1513'te Kilve adasını tamamen harabe hâline getirdiler. Beş asırlık Sofala altın ticareti ağının başkenti bir daha eski konumuna dönemedi; Svahili kıyısının ağırlık merkezi kuzeye, Mombasa ve Pate'ye kaydı.",
  kaynak:"TDV `kilve`: \"Portekizliler 1513 yılında adayı tamamen harabe haline getirdiler\"" },

{ t:"1513-01-02", b:"Portekizlilerin Dehlek'e çıkışı", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","ticaret"],
  d:"Dünya deniz ticaretini ele geçirmek ve bunun için Kızıldeniz'de hâkimiyet kurmak isteyen Portekizliler 1513'te Dehlek'e çıktılar ve Melik Ahmed b. İsmâil'i tâbi kılmaya çalıştılar; 1520'de Diego Lopes de Sequeira kumandasındaki kuvvetler adayı işgal edip yaktılar. (Dehlek atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `dehlek`: \"Portekizliler 1513 yılında Dehlek'e çıktılar\" · \"geri dönen Diego Lopes de Sequeira kumandasındaki Portekiz kuvvetleri Dehlek'i işgal edip yaktılar (1520)\"" },

{ t:"1516-01-01", b:"Duarte Barbosa'nın Mombasa tasviri — taş evler, bal, bal mumu ve fildişi ihracı", tur:"iktisadi", onem:3, dunya:1, kapsam:"ic", yer_id:"Mombasa",
  etiket:["ticaret","kultur","sehircilik"],
  d:"Portekiz kraliyet ticareti memuru Duarte Barbosa 1516'da Mombasa'ya uğradı; şehrin taştan yapılmış badanalı evleri, güzel caddeleri ve gösterişli meydanları bulunduğunu, ahalisinin bal, bal mumu ve fildişi ihraç ettiğini yazdı. Svahili şehir kültürünün işgal öncesi hâline dair en somut Avrupa kaydıdır.",
  kaynak:"TDV `mombasa`: \"Mombasa'ya uğrayarak (1516) burası hakkında bilgi veren Duarte Barbosa şehrin taştan yapılmış badanalı evleri, güzel caddeleri ve gösterişli meydanları bulunduğunu, ahalisinin bal, bal mumu ve fildişi ihraç ettiğini belirtmekte\"" },

{ t:"1528-01-02", b:"Mombasa sultanının Nuno da Cunha'ya karşı 5000 yerli okçuyla savunması", tur:"savas", onem:4, dunya:1, kapsam:"dis", yer_id:"Mombasa",
  etiket:["askeri"],
  d:"Portekiz'in Hindistan valisi Nuno da Cunha 1528'de Mombasa'ya saldırdı; sultan buna karşı 5000 Afrikalı yerli okçuyu şehre getirdiği gibi bir Portekiz gemisinden aldığı topu kaleye yerleştirerek şehri savunmaya çalıştı. Svahili şehirlerinin iç Afrika ile kurduğu askerî ittifakın ilk kayıtlı örneğidir.",
  kaynak:"TDV `mombasa`: \"1528'de Mombasa'ya saldıran Portekiz'in Hindistan valisi Nuno da Cunha'ya karşı kullanmak üzere Mombasa sultanı Afrikalı 5000 yerli okçuyu şehre getirdiği gibi bir Portekiz gemisinden aldığı topu kaleye yerleştirerek şehri savunmaya çalıştı\"" },

{ t:"1530-01-01", b:"Kilve tarihinin João de Barros tarafından tercümesi — 'Kilve Kroniği'", tur:"kultur", onem:3, dunya:1, kapsam:"ic", yer_id:"Kilwa Kisiwani (Kilve)",
  etiket:["kultur","edebiyat"],
  d:"Portekizlilerin Kilve'de ele geçirdikleri Kilve tarihi bu alandaki ilk yazılı kaynak olup 1530'da João de Barros tarafından tercüme edildi. Eser 1862'de Şeyh Muhyiddin tarafından yeniden kaleme alınacak, 1877'de Zengibar Sultanı Bergaş bir nüshasını İngiliz konsolosuna hediye edecek ve 'es-Selve fî ahbâri Kilve' adıyla basılacaktır — Doğu Afrika'nın kendi kaleminden yazılmış en eski tarih metnidir.",
  kaynak:"TDV `kilve`: \"Portekizliler'in Kilve tarihi hakkında ele geçirdikleri eser bu alanda ilk yazılı kaynak olup 1530'da João de Barros tarafından tercüme edildi\" · \"Uman Kültür Bakanlığı ise aynı nüshayı es-Selve fî aḫbâri Kilve adıyla bastırdı (1985)\"" },

{ t:"1532-01-01", b:"Estevão da Gama'nın gemi satın almak üzere Makdişu'ya gelişi", tur:"iktisadi", onem:2, dunya:1, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["ticaret"],
  d:"Vasco da Gama'nın oğlu Estevão da Gama 1532'de gemi satın almak amacıyla Makdişu'ya geldi. İşgal edilemeyen şehirle Portekiz'in ilişkisi savaştan ticarete dönmüştü.",
  kaynak:"TDV `makdisu`: \"1532'de Vasco da Gama'nın oğlu Estevāo da Gama gemi satın almak amacıyla buraya gelmişti\"" },

{ t:"1570-01-01", b:"Mombasa'da Mandhry Camii'nin yapımı", tur:"mimari", onem:3, dunya:1, kapsam:"ic", yer_id:"Mombasa",
  etiket:["mimari","din"],
  d:"1570'te yaptırılan Mandhry Camii, Mombasa'daki tarihî eserlerin en eskisidir. Portekiz işgali altında bile şehrin müslüman hayatının sürdüğünün somut kanıtıdır.",
  kaynak:"TDV `mombasa`: \"Mombasa'daki tarihî eserlerin en eskisi 1570'te yaptırılan Mandhry Camii'dir\"" },

{ t:"1585-01-01", b:"Emîr Ali Bey'in ilk Doğu Afrika seferi — Makdişu'dan Mombasa'ya sahil şehirlerinin Osmanlı'ya bağlanması", tur:"deniz", onem:5, dunya:3, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["askeri","ticaret"],
  d:"Emîr Ali Bey iki kadırga ile Hint Okyanusu sahillerini dolaşarak önce Makdişu'yu, ardından Mombasa'ya kadar diğer sahil şehirlerini Portekiz saldırılarından kurtarıp Osmanlı Devleti'ne bağladı. Osmanlı bayrağının ekvatorun güneyine indiği tek seferdir; iki kadırgayla bir kıyının kurtarılması, Portekiz hâkimiyetinin ne kadar ince olduğunu gösterdi.",
  kaynak:"TDV `makdisu`: \"1585'te Emîr Ali Bey, Hint Okyanusu sahillerini iki kadırga ile dolaşarak önce Makdişu'yu, ardından Mombasa'ya kadar diğer sahil şehirlerini Portekiz saldırılarından kurtarıp Osmanlı Devleti'ne bağladı\" · TDV `kilve`: \"Osmanlı İmparatorluğu ... 1585 ve 1588 yıllarında iki defa donanma göndermişse de\"" },

{ t:"1588-01-01", b:"Zimba kabilesinin Kilve'ye çıkması ve binlerce müslümanın öldürülmesi", tur:"sosyal", onem:5, dunya:2, kapsam:"ic", yer_id:"Kilwa Kisiwani (Kilve)",
  etiket:["askeri","goc","sosyal"],
  d:"Kilve'deki tüccarlardan birinin putperest Zimba kabilesinin 1588'de adaya çıkmasına yardım etmesi yüzünden binlerce müslüman öldürüldü. İç Afrika'dan gelen göçebe baskısı, Portekiz saldırılarının yanında Svahili şehirlerini yıpratan ikinci kuvvetti.",
  kaynak:"TDV `kilve`: \"Kilve'deki tüccarlardan birinin putperest Zimba kabilesinin 1588'de adaya çıkmasına yardım etmesi yüzünden binlerce müslüman öldürüldü\"" },

{ t:"1589-01-01", b:"Emîr Ali Bey'in ikinci seferi — sahil sultanlarının Osmanlı'ya biat etmesi", tur:"deniz", onem:5, dunya:3, kapsam:"dis", yer_id:"Mombasa",
  etiket:["askeri","ittifak"],
  d:"Emrindeki dört kadırga ve bir yelkenliyle yeniden Doğu Afrika sahillerine gönderilen Ali Bey'e, Portekiz işgali altındaki Melindi sultanı hariç sahil şehirlerindeki bütün müslüman sultanlar bağlılıklarını bildirerek yardımcı oldular. Ali Bey bu sahillerin Osmanlı hâkimiyetinde olduğunu ilân etti.",
  kaynak:"TDV `mombasa`: \"1589'da emrindeki dört kadırga ve bir yelkenliyle yeniden Doğu Afrika sahillerine gönderilen Ali Bey'e, Portekiz işgali altındaki Melindi sultanı hariç sahil şehirlerindeki bütün müslüman sultanlar bağlılıklarını bildirerek yardımcı oldular\" · TDV `makdisu`: \"Ali Bey beş gemiyle tekrar bölgeye gelip bu sahillerin Osmanlı hâkimiyetinde olduğunu ilân etti (1589)\"" },

{ t:"1589-03-05", b:"Portekiz donanmasının Mombasa'da Osmanlı filosunu yakması", tur:"deniz", onem:5, dunya:3, kapsam:"dis", yer_id:"Mombasa",
  etiket:["askeri","toprak-kaybi"],
  d:"5 Mart 1589'da adanın girişini kapatan Portekiz donanması şehri bombalayıp limandaki Türk donanmasını yaktı. Osmanlı'nın ekvator altı Afrika'daki varlığı bu tek gecede sona erdi; Portekiz bunun üzerine Melindi'deki deniz üssünü Mombasa'ya nakletti.",
  kaynak:"TDV `mombasa`: \"5 Mart 1589'da adanın girişini kapatan Portekiz donanması şehri bombalayıp limandaki Türk donanmasını yaktı\"" },

{ t:"1592-01-01", b:"Fort Jesus'un (Îsâ Kalesi) inşasına başlanması", tur:"mimari", onem:5, dunya:3, kapsam:"dis", yer_id:"Mombasa",
  etiket:["mimari","askeri"],
  d:"Türklerin Mombasa'ya yardım filosu göndermesinin kendi aleyhlerine sonuçlandığını gören Portekizliler, Melindi'deki deniz üssünü Mombasa'ya naklettiler ve burada Sevâhilî dilinde Ngome denilen, kendilerinin Fort Jesus adını verdikleri kaleyi inşa ettiler (1592-1596). Doğu Afrika'da Avrupalılar tarafından yapılan ilk kale olduğu ileri sürülür; kalenin 1698'de düşüşü Portekiz çağının sonu olacaktır.",
  kaynak:"TDV `mombasa`: \"kendilerinin Fort Jesus (Îsâ Kalesi) adını verdikleri, Doğu Afrika'da Avrupalılar tarafından yapılan ilk kale olduğu ileri sürülen küçük bir kale inşa ettiler (1592-1596)\"" },

{ t:"1594-01-01", b:"Mombasa adasının Portekiz ile sultan arasında ikiye bölünmesi", tur:"antlasma", onem:4, dunya:1, kapsam:"dis", yer_id:"Mombasa",
  etiket:["antlasma","idari"],
  d:"1594'te Portekizlilerle yeni sultan arasında yapılan antlaşma ile ada iki eşit parçaya ayrıldı; 1596'da sultana adanın batısında Kilindini Limanı yakınındaki arazinin bir kısmıyla gümrük gelirlerinin üçte birinden yararlanma imkânı tanındı. Doğrudan yönetim yerine paylaşımlı bir düzen kurulmuştu.",
  kaynak:"TDV `mombasa`: \"1594'te Portekizliler'le yeni sultan arasında yapılan antlaşma ile ada iki eşit parçaya ayrıldı\" · \"1596'da sultana ... gümrük gelirlerinin üçte birinden yararlanma imkânı tanındı\"" },

{ t:"1597-01-01", b:"Mombasa'da Augustin manastırının kurulması", tur:"din", onem:3, dunya:1, kapsam:"dis", yer_id:"Mombasa",
  etiket:["din","mimari"],
  d:"Augustin hıristiyan cemaati 1597'de Mombasa'da bir manastır inşa etti. Portekiz idaresi askerî üssün yanına misyoner kurumunu da yerleştirdi; bu manastır 1631'de adadaki bütün Portekizlilerin hapsedileceği yer olacaktır.",
  kaynak:"TDV `mombasa`: \"Bu arada Augustin hıristiyan cemaati 1597'de Mombasa'da bir manastır inşa etti\"" },

{ t:"1609-01-01", b:"Mombasa sultanının ölümü ve Pemba anlaşmazlığı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic", yer_id:"Mombasa",
  etiket:["hanedan"],
  d:"1609'da Mombasa sultanının ölümüyle yerine geçen oğlu Hasan, Pemba adası konusunda Portekizlilerle anlaşmazlığa düşüp bir süre Mombasa'yı terketti; daha sonra öldürülerek yerine kardeşi Ahmed sultan ilân edildi. Paylaşımlı düzen ilk on beş yılında çöktü.",
  kaynak:"TDV `mombasa`: \"1609'da Mombasa sultanının ölümüyle yerine geçen oğlu Hasan, Pemba adası konusunda Portekizliler'le anlaşmazlığa düşüp bir süre Mombasa'yı terkettiyse de daha sonra öldürülerek yerine kardeşi Ahmed sultan ilân edildi\"" },

{ t:"1631-01-01", b:"Muhammed Yûsuf'un isyanı — Portekiz kaptanının öldürülmesi ve İslâm'a dönüşü", tur:"isyan", onem:5, dunya:2, kapsam:"dis", yer_id:"Mombasa",
  etiket:["isyan","din","askeri"],
  d:"Hıristiyanlaştırılarak Goa'ya gönderilen Sultan Ahmed'in oğlu Muhammed Yûsuf 1630'da Mombasa'ya dönüp bir süre Portekiz donanmasında çalıştı; 1631'de putperest Mozungulos kabilesinden 300 kişinin desteğini alarak Portekiz kaptanı Leitao da Gamboa'yı ailesiyle birlikte öldürdü, müslüman olduğunu ilân etti ve adadaki bütün Portekizlileri Augustinlerin manastırına kapattı. Svahili kıyısındaki en büyük yerli ayaklanmadır.",
  kaynak:"TDV `mombasa`: \"Muhammed Yûsuf, 1631'de putperest Mozungulos kabilesinden 300 kişinin desteğini alıp Mombasa'da bulunan Portekiz kaptanı Leitao da Gamboa'yı ailesiyle birlikte öldürdü ve müslüman olduğunu ilân ederek adadaki bütün Portekizliler'i Augustinler'in manastırına kapattı\"" },

{ t:"1632-01-03", b:"Mombasa'nın Goa'daki Portekiz idarî merkezine bağlanması", tur:"idari", onem:3, dunya:1, kapsam:"dis", yer_id:"Mombasa",
  etiket:["idari"],
  d:"İsyanın bastırılmasının ardından Portekizliler 1632'de Mombasa'yı Hindistan'ın Goa şehrindeki idarî merkezlerine bağladılar. Doğu Afrika artık müstakil bir eyalet değil, Estado da Índia'nın bir uç karakoludur.",
  kaynak:"TDV `mombasa`: \"Portekizliler 1632'de Mombasa'yı Hindistan'ın Goa şehrindeki idarî merkezlerine bağladılar\"" },

{ t:"1650-01-01", b:"Ya'rubî hânedanının Maskat'ı Portekizlilerden alması ve Svahili kıyısının umut kapısı", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"Mombasa",
  etiket:["askeri","ittifak"],
  d:"1650'de Maskat'ı Portekizlilerin elinden alan Ummanlı Ya'rubî hânedanı Mombasalılar için bir ümit kaynağı oldu; Mombasalılar yardım istemek üzere Umman'a bir heyet yolladılar. Umman, 1652-1688 ve 1696-1698 yıllarında Doğu Afrika sahilini kurtarmak için savaşlar yapacaktır.",
  kaynak:"TDV `mombasa`: \"1650'de Maskat'ı Portekizliler'in elinden alan Umanlı Ya'rubî hânedanı Mombasalılar için bir ümit kaynağı oldu\" · TDV `kilve`: \"Ya'rubî hânedanı 1652-1688 ve 1696-1698 yılları arasında Doğu Afrika sahilini Portekizliler'den kurtarmak için savaşlar yaptı\"" },

{ t:"1698-12-13", b:"Fort Jesus'un düşüşü — Portekiz çağının sonu, Svahili kıyısının Umman nüfuzuna girmesi", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"Mombasa",
  etiket:["askeri","toprak"],
  d:"Umman Sultanı Seyf b. Sultân'ın saldırısıyla Mombasa'daki Fort Jesus düştü ve şehir devletlerinden Mozambik hariç tamamı ele geçirildi; Makdişu da Ummanlılara geçti. İki asırlık Portekiz hâkimiyeti sona erdi ve kıyı Umman nüfuzuna girdi — Svahili şehir devletlerinin müstakil siyasî varlığı da bu tarihte kapanır.",
  kaynak:"TDV `kilve`: \"Sultan, 1698'de yaptığı saldırı ile şehir devletlerinden Mozambik hariç tamamını ele geçirdi\" · TDV `makdisu`: \"1698 yılında Uman Sultanı Seyf b. Sultân Mombasa'yı alınca Makdişu da Umanlılara geçti\" · gün data/devletler.js `svahili-sehirleri` künyesinden devralındı" },

// ══════════════════════════════════════════════════════════════════
// V. MAKDİŞU SULTANLIĞI (1281-1500) ve SOMALİ SULTANLIKLARI (1500-1923)
//    Ebû Bekir b. Fahreddin hânedanı · Ecuran · Geledi · Hobyo ·
//    Mecertin · Osmanlı-Mısır idaresi · Avrupa paylaşımı · Derviş Devleti
// ══════════════════════════════════════════════════════════════════

{ t:"1281-01-01", b:"Makdişu'nun Ebû Bekir b. Fahreddin hânedanı altında ticaret merkezi olması", tur:"iktisadi", onem:5, dunya:2, kapsam:"ic", yer_id:"Mogadişu",
  etiket:["ticaret","hanedan","din"],
  d:"VII/XIII. yüzyılda Ebû Bekir b. Fahreddin, Makdişu'da bir sultanlık kurdu ve şehir refah seviyesi yüksek bir ticaret merkezi hâline geldi. Mescid-i Cum'a'nın 636 (1238), Erbaa Rükûn Camii'nin 667 (1268) ve Fahreddin Camii'nin 27 Şâban 667 (1 Mayıs 1269) tarihli kitâbeleri şehrin bu dönemdeki imar faaliyetini belgeler.",
  kaynak:"TDV `somali`: \"VII/XIII. yüzyıl: Ebû Bekir b. Fahreddin Makdişu'da sultanlık kurdu\" · TDV `makdisu`: \"Mescid-i Cum'a ve diğer iki büyük caminin 636 (1238), 667 (1268) ve Şâban 667 (Nisan 1269) tarihli kitâbeleri\"" },

{ t:"1329-01-01", b:"İbn Battûta'nın Somali kıyısı tasviri — Berber halkı, deve ve balıkçılık", tur:"kultur", onem:3, dunya:1, kapsam:"ic", yer_id:"Zeyla",
  etiket:["kultur","ticaret","sosyal"],
  d:"1329-1331 yılları arasında bölgeyi ziyaret eden İbn Battûta, buranın Berber denilen Somali soylu siyahî bir halkı olduğunu, ticarî faaliyetinin deve ve koyun yetiştiriciliği ile balıkçılıktan ibaret bulunduğunu yazar. Berberâlıların Şâfiî mezhebine bağlı olduklarını da kaydeder.",
  kaynak:"TDV `zeyla`: \"1329-1331 yılları arasında bölgeyi ziyaret eden İbn Battûta, bölgenin Berber denilen Somali soylu siyahî bir halkı olduğunu ... yazar\" · TDV `berbera`: \"İbn Battûta ... Berberâlar'ın Şâfiî mezhebine bağlı olduklarını haber verir\"" },

{ t:"1331-01-02", b:"İbn Battûta'nın Sultan Ebû Bekir b. Ömer dönemindeki Makdişu'yu ziyareti", tur:"kultur", onem:4, dunya:1, kapsam:"ic", yer_id:"Mogadişu",
  etiket:["kultur","ticaret"],
  d:"İbn Battûta 1331 yılında Sultan Ebû Bekir b. Ömer dönemini ziyaret ederek şehrin büyük gelişme gösterdiğini kaydetti. XIV-XV. yüzyıl Makdişu tarihinin en müreffeh dönemidir.",
  kaynak:"TDV `makdisu`: \"1331 yılında Sultan Ebû Bekir b. Ömer ... şehrin büyük gelişme gösterdiğini kaydetmiştir\" · \"XIV-XV. yüzyıl: Makdişu tarihinin en refah bulduğu zaman dilimi\"" },

{ t:"1500-01-01", b:"Ecuran (Ajuran) Sultanlığı'nın güney Somali'de hâkimiyet kurması", tur:"kurulus", onem:5, dunya:2, kapsam:"ic", yer_id:"Berâve",
  etiket:["kurulus","idari","iktisadi"],
  d:"Ecuran (Ajuran) Sultanlığı, güney Somali kıyısında ve Şebelle vadisinde hâkimiyet kurdu. Kuyu ve sulama düzeniyle iç bölgeleri örgütleyen bu yapı, Makdişu şehir sultanlığının yerini alan ilk büyük kara devletidir.",
  kaynak:"data/devletler.js `somali` künyesi: \"Ecuran (Ajuran) Sultanlığı, güney Somali kıyısında ve Şebelle vadisinde hâkimiyet kurdu\" — TDV `somali` maddesi Ecuran'ı ADIYLA anıyor ama KURULUŞ GÜNÜ vermiyor, künyenin yuvarlak yılı korundu" },

{ t:"1585-01-02", b:"Makdişu'nun Emîr Ali Bey eliyle Osmanlı Devleti'ne bağlanması", tur:"toprak", onem:5, dunya:3, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["askeri","idari"],
  d:"Emîr Ali Bey iki kadırga ile gelerek Makdişu'yu Portekiz saldırılarından kurtardı ve Osmanlı Devleti'ne bağladı. Somali kıyısının en büyük limanı böylece kısa bir süre için Osmanlı hâkimiyetine girdi; XVI. yüzyılda şehrin yönetimi Muzaffer sülâlesinin elindeydi.",
  kaynak:"TDV `makdisu`: \"1585'te Emîr Ali Bey ... önce Makdişu'yu ... Osmanlı Devleti'ne bağladı\" · \"XVI. yüzyıl: Muzaffer Sülâlesi — yönetim bu hanedan eline geçmiştir\"" },

{ t:"1700-01-01", b:"Ecuran Sultanlığı'nın dağılması ve Geledi ile yerel sultanlıkların doğuşu", tur:"yikilis", onem:5, dunya:1, kapsam:"ic", yer_id:"Berâve",
  etiket:["hanedan","idari"],
  d:"Ecuran Sultanlığı dağıldı; yerine Geledi ve diğer yerel sultanlıklar kuruldu. Somali siyasî coğrafyası tek merkezli bir yapıdan kabile temelli çok sayıda sultanlığa bölündü ve bu durum sömürge çağına kadar sürdü.",
  kaynak:"data/devletler.js `somali` künyesi: \"Ecuran Sultanlığı dağıldı, yerine Geledi ve diğer yerel sultanlıklar kuruldu\" · TDV `somali` Geledi'yi ADIYLA anıyor: \"Geledi, Hobyo (Obbia), Mecertin sultanlıkları\"" },

{ t:"1700-01-02", b:"İngiliz deniz filosunun Makdişu önünde asker çıkaramadan geri dönmesi", tur:"deniz", onem:2, dunya:1, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["askeri"],
  d:"1700'de bir İngiliz deniz filosu günlerce Makdişu önünde bekledi, karaya asker çıkaramadan geri dönmek zorunda kaldı. Şehir, Portekiz'den sonra İngiltere'yi de geri çevirmiş oldu.",
  kaynak:"TDV `makdisu`: \"1700'de bir İngiliz deniz filosu günlerce Makdişu önünde karaya asker çıkaramadan bekledi ve sonunda geri dönmek zorunda kaldı\"" },

{ t:"1752-01-01", b:"Makdişu-Cap Delgado arasının Umman adına 'Arap bölgesi' ilân edilmesi", tur:"toprak", onem:4, dunya:2, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["idari","ticaret"],
  d:"1752'de Umman Sultanlığı adına Makdişu'dan Afrika'nın güneyindeki Cap Delgado'ya kadar olan sahiller Arap bölgesi ilân edildi ve Portekiz hâkimiyetine son verildi. Doğu Afrika kıyısının siyasî çerçevesi iki asır boyunca bu ilân üzerine kurulacaktır.",
  kaynak:"TDV `makdisu`: \"1752'de Uman Sultanlığı adına Makdişu'dan Afrika'nın güneyindeki Cap Delgado'ya kadar olan sahiller Arap bölgesi ilân edildi ve Portekiz hâkimiyetine son verildi\"" },

{ t:"1823-01-01", b:"Makdişu'nun ismen Seyyid Saîd b. Sultân'a bağlanması", tur:"idari", onem:3, dunya:1, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["idari"],
  d:"1823 yılında Makdişu ismen Umman Sultanı Seyyid Saîd b. Sultân'a bağlandı, fakat yerli reisler yönetimi fiilen sürdürdüler. Bu ikili yapı — nominal Umman hâkimiyeti, fiilî yerel idare — yüzyıl boyunca Somali kıyısının kuralı oldu.",
  kaynak:"TDV `makdisu`: \"1823 yılında Makdişu ismen Uman Sultanı Seyyid Saîd b. ... bağlanmış fakat yerli reisler yönetim devam ettirmiştir\"" },

{ t:"1828-01-01", b:"Umman Sultanlığı'nın ikiye bölünmesi ve güney Somali limanlarının Zengibar'a tâbi olması", tur:"idari", onem:4, dunya:2, kapsam:"dis", yer_id:"Merka",
  etiket:["idari","ticaret"],
  d:"Umman Sultanlığı'nın ikiye bölünmesinin ardından Berâve, Merkâ ve Makdişu, Zengibar adasında hüküm süren Bû Saîd hânedanına tâbi oldu. Somali kıyısının iktisadî ekseni Maskat'tan Zengibar'a kaydı.",
  kaynak:"TDV `somali`: \"Berâve, Merkâ ve Makdişu 1828 yılında Uman Sultanlığı'nın ikiye bölünmesinin ardından Zengibar adasında hüküm süren Bû Saîd hânedanına tâbi oldu\"" },

{ t:"1840-01-01", b:"İngiltere ile Zeyla' idarecisi arasında Berberâ demirleme antlaşması", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Berbera",
  etiket:["antlasma","ticaret"],
  d:"1840'ta İngiltere, Zeyla' idarecisiyle Doğu Hindistan Şirketi'ne ait gemilerin Berberâ sahillerinde demirleme haklarını garanti altına alan bir antlaşma imzaladı. 1827'deki ilk İngiliz-Somali antlaşmasının ardından gelen bu adım, Britanya'nın kıyıya kalıcı yerleşmesinin ilk hukukî basamağıdır.",
  kaynak:"TDV `berbera`: \"1840'ta İngiltere Zeyla‘ idarecisi ile, Doğu Hindistan Şirketi'ne ait gemilerin Berberâ sahillerinde demirleme haklarını garanti altına alan bir antlaşma imzaladı\"" },

{ t:"1843-01-01", b:"Makdişu'ya ilk Somali asıllı valinin tayin edilmesi", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"Mogadişu",
  etiket:["idari"],
  d:"1843'te Makdişu'ya ilk defa Ummanlılar tarafından Somali asıllı bir vali tayin edildi. Arap hânedanı ile yerli halk arasındaki idarî uzlaşmanın ifadesidir.",
  kaynak:"TDV `makdisu`: \"1843'te Makdişu'ya ilk defa Umanlılar tarafından Somali asıllı bir vali tayin edildi\"" },

{ t:"1848-01-01", b:"Zeyla'ın Yemen'in Muhâ İskelesi'ne bağlanması", tur:"idari", onem:2, dunya:1, kapsam:"ic", yer_id:"Zeyla",
  etiket:["idari","ticaret"],
  d:"1848'de Zeyla' Yemen'in Muhâ İskelesi'ne bağlandığında müdürü el-Hac Ali Şârmârkī idi. Somali'nin en eski limanı, Osmanlı idarî düzeninde Yemen üzerinden yönetilmeye başlandı.",
  kaynak:"TDV `zeyla`: \"1848'de Yemen'in Muhâ İskelesi'ne bağlandığında Zeyla‘ın müdürü el-Hac Ali Şârmârkī idi\"" },

{ t:"1854-10-01", b:"Richard Burton'un Zeyla'a gelişi", tur:"kultur", onem:2, dunya:1, kapsam:"dis", yer_id:"Zeyla",
  etiket:["kultur"],
  d:"İngiliz seyyahı Sir Richard Francis Burton 1854 Ekiminde geldiği Zeyla'da nahiye müdürü el-Hac Ali Şârmârkī tarafından karşılandı. Burton'un Harar yolculuğu, Avrupa'nın iç Somali'yi keşfinin başlangıcıdır.",
  kaynak:"TDV `zeyla`: \"İngiliz seyyahı Sir Richard Francis Burton 1854 Ekiminde geldiği Zeyla‘da nahiye müdürü el-Hac Ali Şârmârkī tarafından karşılandı\"" },

{ t:"1859-01-01", b:"Fransa'nın Ubûk'u (Obock) sömürge ilân etmesi", tur:"toprak", onem:4, dunya:2, kapsam:"dis", yer_id:"Tacûra",
  etiket:["toprak-kaybi"],
  d:"Fransa 1859'da mahallî idarecisinden kiraladığı Somali'nin kuzey ucundaki Ubûk'u (Obock) sömürgesi ilân etti ve Osmanlıların bütün engelleme çabalarına rağmen burada Fransız Somalisi adıyla bir sömürge yönetimi kurdu. Bugünkü Cibuti'nin temeli budur. (Obock atlasta yerleşim olarak KAYITLI DEĞİL; en yakın kayıtlı nokta Tacûra kullanıldı.)",
  kaynak:"TDV `somali`: \"Fransa 1859'da mahallî idarecisinden kiraladığı Somali'nin kuzey ucundaki Ubûk'u (Obock) sömürgesi ilân edip Osmanlılar'ın bütün engelleme çabalarına rağmen burada Fransız Somalisi adıyla bir sömürge yönetimi kurdu\"" },

{ t:"1864-01-01", b:"Zeyla'da Osmanlı idaresinin yeniden kurulması ve Ebû Bekir Şüheymî'nin tayini", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"Zeyla",
  etiket:["idari"],
  d:"Fransa'nın Aden konsolosunun 1860'ta Tâcûre ile Zeyla' arasında öldürüldüğü şâyiasından nahiye müdürü sorumlu tutulmuş, idare kesintiye uğramıştı; 1864'te idare yeniden kuruldu ve vekâleten müdür yapılan Ebû Bekir Şüheymî aynı yıl asaleten tayin edildi. 1868'de Yemen eyaletinden yardım istediğinde kendisine 100 başıbozuk asker yollandı.",
  kaynak:"TDV `zeyla`: \"1864'te idare yeniden kuruldu, vekâleten müdür yapılan Ebû Bekir Şüheymî aynı yıl asaleten tayin edildi\" · \"Şüheymî 1868'de Yemen eyaletinden yardım isteyince kendisine başıbozuk 100 asker yollandı\"" },

{ t:"1865-01-02", b:"Somali kıyılarının Mısır vilâyetine bağlandığına dair Osmanlı fermanı", tur:"idari", onem:4, dunya:2, kapsam:"dis", yer_id:"Berbera",
  etiket:["idari"],
  d:"Osmanlı Devleti 1865'te Somali kıyılarının Mısır vilâyetine bağlandığına dair bir ferman yayımladı; Sevâkin, Masavva ve Zeyla' ile birlikte Berberâ'nın idaresi de Mısır'a bırakıldı. Osmanlı'nın Afrika Boynuzu'ndaki hukukî iddiası korunurken fiilî idare Kahire'ye geçti.",
  kaynak:"TDV `somali`: \"Osmanlı Devleti 1865'te Somali kıyılarının Mısır vilâyetine bağlandığına dair bir ferman yayımladı\" · TDV `berbera`: \"Sevâkin (Suakin), Masavva‘ ve Zeyla‘ ile birlikte Berberâ'nın idaresi Osmanlı Devleti tarafından bir fermanla Mısır'a bırakılmıştı (1865)\"" },

{ t:"1875-06-01", b:"Zeyla' ve civarının fermanla Mısır Hidivliği'ne devri", tur:"idari", onem:3, dunya:1, kapsam:"dis", yer_id:"Zeyla",
  etiket:["idari"],
  d:"1 Haziran 1875 tarihli bir fermanla Zeyla' ve civarı da Sevâkin ile Masavva'ın ardından Mısır valiliğinin denetimine verildi. Somali kıyısının tamamı böylece Kahire'nin Kızıldeniz tahkimat sistemine dâhil oldu.",
  kaynak:"TDV `zeyla`: \"Bunu 1 Haziran 1875 tarihli bir başka fermanla Zeyla‘ ve civarı takip etti\"" },

{ t:"1875-01-01", b:"Mısır'ın İngiliz teşvikiyle Berberâ'yı işgali", tur:"toprak", onem:4, dunya:2, kapsam:"dis", yer_id:"Berbera",
  etiket:["askeri","ticaret"],
  d:"Süveyş Kanalı'nın açılmasıyla önemi artan Kızıldeniz ve Aden körfezinin rakip bir devletin eline geçmesini istemeyen İngiltere, Mısır'ı teşvik ederek Berberâ'yı işgal ettirdi. 1874-1875'te Hidiv İsmâil Paşa, Osmanlı Devleti adına Somali'nin bütün kıyı bölgelerini ele geçirdi.",
  kaynak:"TDV `berbera`: \"İngiltere Mısır'ı teşvik ederek Berberâ'yı işgal ettirdi (1875)\" · TDV `somali`: \"1874-1875'te Mısır Hidivi İsmâil Paşa, Osmanlı Devleti adına Somali'nin kıyı bölgelerini ele geçirdi\"" },

{ t:"1877-01-02", b:"Berberâ'nın serbest liman ilân edilmesi ve Osmanlı hâkimiyet iddiasının tanınması", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"Berbera",
  etiket:["antlasma","ticaret"],
  d:"1877'de İngiltere ile Mısır arasında yapılan bir antlaşmaya göre Berberâ serbest liman hâline getirildi ve böylece İngiltere burada Osmanlıların hâkimiyet iddiasını kabul etmiş oldu. Bu tanıma yedi yıl sonra Mehdî isyanı bahane edilerek çiğnenecektir.",
  kaynak:"TDV `berbera`: \"1877'de İngiltere ile Mısır arasında yapılan bir antlaşmaya göre Berberâ serbest liman haline getirildi ve böylece İngiltere burada Osmanlılar'ın hâkimiyet iddiasını kabul etmiş oldu\"" },

{ t:"1883-01-01", b:"Mısır birliklerinin Mehdî isyanı sebebiyle Somali'den çekilmesi", tur:"idari", onem:4, dunya:2, kapsam:"dis", yer_id:"Berbera",
  etiket:["askeri","idari"],
  d:"Mısır birlikleri, Sudan'daki Muhammed Ahmed el-Mehdî isyanları sebebiyle 1883'te Somali'den çekildi. Kıyı bir yıl idaresiz kaldı ve doğan boşluğu İngiltere ile İtalya dolduracaktır.",
  kaynak:"TDV `somali`: \"Mısır birlikleri Sudan'daki Muhammed Ahmed el-Mehdî isyanları sebebiyle 1883'te Somali'den çekildi\"" },

{ t:"1884-07-18", b:"İngiltere'nin Zeyla' ve Berberâ'yı işgali — İngiliz Somalisi'nin başlangıcı", tur:"toprak", onem:5, dunya:3, kapsam:"dis", yer_id:"Berbera",
  etiket:["toprak-kaybi","antlasma"],
  d:"Mehdî hadisesini fırsat bilen İngiltere Zeyla' ile beraber Berberâ'yı da işgal etti ve buradaki kabilelerle anlaşmalar yaparak şehre yerleşti. Osmanlı'nın 1877'de tanınmış hakları fiilen ortadan kalktı; üç yıl sonra Berberâ merkez olmak üzere İngiliz Somalisi himaye idaresi kurulacaktır.",
  kaynak:"TDV `berbera`: \"Fakat mehdî hadisesini fırsat bilen İngiltere Zeyla‘ ile beraber Berberâ'yı da işgal etti ve buradaki kabilelerle anlaşmalar yaparak şehre yerleşti (1884)\" · gün olaylar_ek16.js 1884-07-18 kaydından alındı" },

{ t:"1887-01-02", b:"Berberâ merkezli İngiliz Somalisi himaye idaresinin kurulması", tur:"idari", onem:5, dunya:3, kapsam:"dis", yer_id:"Berbera",
  etiket:["idari","toprak-kaybi"],
  d:"İngiltere, Berberâ merkez olmak üzere İngiliz Somalisi adıyla bir himaye idaresi kurdu. Bu idare 1941'e kadar sürecek ve Somali'nin kuzeyi ile güneyi arasındaki bugüne uzanan siyasî ayrımın temelini atacaktır.",
  kaynak:"TDV `berbera`: \"bölgede Berberâ merkez olmak üzere İngiliz Somalisi adıyla bir himaye idaresi kurdu (1887)\"" },

{ t:"1888-01-01", b:"Fransa'nın Zeyla' yöresini işgali ve Osmanlı idaresinin sona ermesi", tur:"toprak", onem:4, dunya:2, kapsam:"dis", yer_id:"Zeyla",
  etiket:["toprak-kaybi"],
  d:"Osmanlı'nın 1884'te yeniden kurduğu ve Mısır Hidivliği'nin üstleneceği Zeyla'-Masavva sahil idaresi, Fransa'nın Zeyla' yöresini işgaliyle son buldu. Aynı yıl İngiltere Sudan'da, İtalya da Kızıldeniz'in Habeşistan sahillerinde himaye idareleri kurdular.",
  kaynak:"TDV `zeyla`: \"Bu idareyi Mısır Hidivliği üstlenecekti, ancak Fransa'nın Zeyla‘ yöresini işgali bu yönetime de son verdi (1888)\" · TDV `habes-eyaleti`: \"İngiltere Sudan'da, İtalya da Kızıldeniz'in Habeşistan sahillerinde himaye idaresi kurdular (1888)\"" },

{ t:"1889-01-02", b:"Muhammed b. Abdullah Hasan hareketinin başlaması — Derviş direnişi", tur:"isyan", onem:5, dunya:3, kapsam:"ic", yer_id:"Taleh",
  etiket:["isyan","din","askeri"],
  d:"1889'da Somali'de İmam Muhammed b. Abdullah Hasan'ın önderliğinde büyük bir sömürgecilik karşıtı direniş hareketi başladı. Salihiyye tarikatına dayanan Derviş hareketi, 1910'da İngilizleri sahil bölgelerine çekilmek zorunda bıraktı ve 1920'de imamın ölümüne kadar sürdü — Afrika'daki en uzun ömürlü silâhlı sömürge karşıtı direniştir.",
  kaynak:"TDV `somali`: \"1889'da Somali'de İmam Muhammed b. Abdullah Hasan ...\" · \"İngilizler 1910'da sahil bölgelerinden çekilmek zorunda kaldılar\" · \"Onun 1920 yılında ölümünün ardından İtalya bölgede güç kazandı\"" },

{ t:"1891-03-02", b:"İngiliz-İtalyan antlaşması — Berâve ve Merkâ'nın İtalya'da kalması", tur:"antlasma", onem:5, dunya:3, kapsam:"dis", yer_id:"Berâve",
  etiket:["antlasma","toprak-kaybi"],
  d:"2 Mart 1891'de İngilizlerin İtalyanlarla anlaşmasının ardından Somali'nin güney sahilindeki Berâve ve Merkâ gibi şehirler İtalyanların elinde kaldı. Somali toprakları böylece İngiliz, İtalyan ve Fransız payları arasında bölündü.",
  kaynak:"TDV `somali`: \"2 Mart 1891'de İngilizler'in İtalyanlar'la anlaşmasının ardından Somali'nin güney sahilindeki Berâve ve Merkâ gibi şehirler İtalyanlar'ın elinde kaldı\"" },

{ t:"1892-01-01", b:"Makdişu'nun 160.000 rupi karşılığında İtalya'ya kiralanması", tur:"iktisadi", onem:5, dunya:2, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["toprak-kaybi","ticaret"],
  d:"Zengibar Sultanı Halîfe b. Saîd'in 1889'da limanı İtalya'ya kiraya vermesinin ardından Makdişu, Berâve, Merkâ ve Varşeyh şehirleriyle beraber 1892'de 160.000 rupi karşılığında İtalya tarafından kiralandı ve buralar İtalyan himayesindeki kıyılar ilân edildi. Bir sultanlığın kendi limanlarını kiraya vermesi, dolaylı sömürgeleşmenin tipik yoludur.",
  kaynak:"TDV `makdisu`: \"Makdişu 1892 yılında 160.000 rupi karşılığında aynı ülke tarafından kiralandı ve buraları İtalyan himayesindeki kıyılar olarak ilân edildi\"" },

{ t:"1897-01-01", b:"Somali-Habeşistan sınırını çizme teşebbüsü", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"Ogaden",
  etiket:["antlasma","toprak"],
  d:"Yayılmacı bir politika izleyen İtalyanlar, gözlerini Habeşistan'a diktiklerinden 1897'de Somali-Habeşistan sınırını çizmek için bir antlaşma yapmaya teşebbüs ettiler. Bu sınır meselesi, nüfusunun tamamına yakınını Somalili müslümanların oluşturduğu Ogaden yüzünden bir asır boyunca çözülemeyecektir.",
  kaynak:"TDV `makdisu`: \"1897'de Somali-Habeşistan sınırını çizmek için bir antlaşma yapmaya teşebbüs ettiler\"" },

{ t:"1902-01-02", b:"Zengibar Sultanlığı'nın İtalya'nın Benâdir hâkimiyetini kabulü", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["antlasma","toprak-kaybi"],
  d:"Zengibar Sultanlığı, İtalya'nın Benâdir bölgesindeki hâkimiyetini 1902'de kabul etti. Kira ilişkisi böylece egemenlik devrine dönüştü.",
  kaynak:"TDV `makdisu`: \"Zengibar Sultanlığı, İtalya'nın Benâdir bölgesindeki hâkimiyetini 1902'de kabul etti\"" },

{ t:"1905-01-01", b:"Makdişu'nun İtalya'ya satılması ve İngiliz Somalisi'nin Aden'e bağlanması", tur:"toprak", onem:5, dunya:2, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["toprak-kaybi","idari"],
  d:"Zengibar Sultanı Seyyid Ali b. Hamûd 1905'te Makdişu'yu, 1906'da Somali sahilinde Zengibar'a ait bütün toprakları İtalya'ya sattı. Aynı yıl İngiltere de Somaliland'ı Aden'deki sömürgesiyle birleştirdi; Somali kıyısında Afrika-Arap siyasî bağı tamamen koptu.",
  kaynak:"TDV `makdisu`: \"Hamûd 1905'te Makdişu'yu, 1906'da Somali sahilinde Zengibar'a ait bulunan bütün toprakları İtalya'ya sattı\" · TDV `somali`: \"İngiltere 1905 yılında Somaliland'ı Aden'deki sömürgesiyle birleştirdi\"" },

{ t:"1911-01-02", b:"İtalya'nın Somali'yi sömürge ilân etmesi ve Makdişu'yu başşehir yapması", tur:"idari", onem:5, dunya:3, kapsam:"dis", yer_id:"Mogadişu",
  etiket:["idari","toprak-kaybi"],
  d:"1911 yılında İtalya Somali'yi sömürge ilân ederek Makdişu'yu başşehir yaptı. Aynı yıl Trablusgarp'a da saldıran İtalya, Osmanlı'nın Afrika'daki son iki dayanağını aynı anda hedef almış oldu.",
  kaynak:"TDV `makdisu`: \"1911 yılında İtalya Somali'yi sömürge ilân ederek Makdişu'yu başşehir yaptı\"" },

{ t:"1916-01-01", b:"Osmanlı'nın Zeyla'daki hâkimiyetinin fiilen sona ermesi", tur:"idari", onem:5, dunya:2, kapsam:"dis", yer_id:"Zeyla",
  etiket:["toprak-kaybi","idari"],
  d:"I. Dünya Savaşı sırasında Osmanlı Devleti'nin Zeyla'daki hâkimiyeti fiilen sona erdi. 1559'da Özdemir Paşa'nın bağladığı liman üzerindeki 357 yıllık Osmanlı iddiası böylece kapandı; bu, Osmanlı'nın Doğu Afrika'daki son toprak bağıdır.",
  kaynak:"TDV `zeyla`: \"Böylece Osmanlı Devleti'nin Zeyla‘daki hâkimiyeti fiili olarak 1916 yılında sona erdi\"" },

{ t:"1920-01-01", b:"Muhammed Abdullah Hasan'ın ölümü — Derviş Devleti'nin sonu", tur:"isyan", onem:5, dunya:2, kapsam:"ic", yer_id:"Taleh",
  etiket:["isyan","din"],
  d:"Otuz yıldır İngiliz, İtalyan ve Habeş kuvvetlerine karşı direnen İmam Muhammed Abdullah Hasan'ın 1920'de ölümünün ardından hareket dağıldı ve İtalya bölgede güç kazandı. Taleh'teki taş kalelerden yönetilen Derviş Devleti, sömürge çağında Somali'nin kurduğu tek merkezî siyasî yapıydı.",
  kaynak:"TDV `somali`: \"Onun 1920 yılında ölümünün ardından İtalya bölgede güç kazandı\"" },

// ══════════════════════════════════════════════════════════════════
// VI. GÜNEYBATI KRALLIKLARI — KAFFA · SİDAMO · VOLLAYTA · CİMMA
// 🔴 TDV TANECİKLİK BOŞLUĞU (`CLAUDE.md §4`): TDV Etiyopya'yı GÖRÜYOR
//    ama bu krallıklar özelinde KONUŞMUYOR — `kaffa` ve `buganda`
//    slugları 302 döndü, `etiyopya` gövdesi bu adları HİÇ anmıyor
//    (ölçüldü: grep, sıfır sonuç). Bu bölümün maddeleri bu yüzden
//    AKADEMİK kaynağa dayanır ve her biri AÇIKÇA işaretlenmiştir.
//    Bölüm KASTEN KISA: kaynağın verdiği kadar madde yazıldı, sayıya
//    ulaşmak için dolgu üretilmedi (KRONOLOJI-SARTNAME §1).
// ══════════════════════════════════════════════════════════════════

{ t:"1390-01-01", b:"Minjo hânedanının Kaffa Krallığı'nı kurması", tur:"kurulus", onem:5, dunya:1, kapsam:"ic", yer_id:"Bonga (Kaffa)",
  etiket:["kurulus","hanedan"],
  d:"Kaffa Krallığı, geleneğe göre Minjo hânedanı tarafından kuruldu. Gibe nehri havzasının güneyindeki bu krallık, kendi kralını (tato) ve yedi kişilik danışma meclisini (mikrecho) taşıyan, Habeş yaylasından bağımsız gelişmiş bir siyasî yapıydı; adını dünyaya veren kahve bitkisinin anavatanıdır.",
  kaynak:"data/devletler.js `kaffa-kralligi` künyesi: \"Minjo hanedanı tarafından kuruldu (gelenek)\" · TDV'de MÜSTAKİL MADDE YOK (`kaffa` slug'ı 302 döndü, `etiyopya` gövdesi Kaffa'yı anmıyor — ölçüldü) · dayanak: Richard Pankhurst, The Ethiopian Borderlands (Red Sea Press, 1997), Kaffa bölümü" },

{ t:"1830-01-01", b:"Cimma (Jimma) Sultanlığı'nın kurulması", tur:"kurulus", onem:5, dunya:1, kapsam:"ic", yer_id:"Cimma (Jiren)",
  etiket:["kurulus","din","ticaret"],
  d:"Gibe havzasındaki Oromo krallıklarından Cimma (Jimma) Abba Jifar önderliğinde kuruldu ve kısa sürede İslâmlaşarak bölgenin en zengin ticaret devleti hâline geldi. Kahve ve köle ticaretinin kavşağında bulunan Cimma, güneybatı Etiyopya'da İslâm'ın yayılmasının merkeziydi.",
  kaynak:"data/devletler.js `cimma-sultanligi` künyesi (1830-01-01 → 1923-10-29) · TDV'de MÜSTAKİL MADDE YOK · dayanak: Richard Pankhurst, The Ethiopian Borderlands (Red Sea Press, 1997), Gibe krallıkları bölümü" },

{ t:"1894-01-17", b:"Vollayta (Wolaita) Krallığı'nın Menelik tarafından ilhakı", tur:"toprak", onem:5, dunya:2, kapsam:"dis", yer_id:"Sodo (Vollayta)",
  etiket:["askeri","toprak-kaybi"],
  d:"Menelik'in güney seferlerinde Vollayta Krallığı ağır bir savaşın ardından ilhak edildi ve kralı Tona Gaga esir alındı. Adva zaferinden iki yıl önce yapılan bu güney genişlemesi, Etiyopya'nın bugünkü sınırlarının büyük kısmını çizen hareketin parçasıdır.",
  kaynak:"data/devletler.js `vollayta-kralligi` künyesi (t: 1894-01-17) · TDV'de MÜSTAKİL MADDE YOK · dayanak: Bahru Zewde, A History of Modern Ethiopia 1855-1974 (Menelik'in güney fetihleri bölümü; eser TDV `harar` maddesinin bibliyografyasında da anılıyor)" },

{ t:"1897-01-01", b:"Sidamo krallıklarının Etiyopya'ya katılması", tur:"toprak", onem:5, dunya:2, kapsam:"dis", yer_id:"Yirgalem (Sidamo)",
  etiket:["askeri","toprak-kaybi"],
  d:"Menelik'in güney seferleri sırasında Sidamo bölgesindeki krallıklar Etiyopya'ya katıldı. Bu genişleme, imparatorluğun nüfusunu ve tarım kaynaklarını iki katına çıkardı ve Adva'da Avrupa'ya direnecek malî gücü sağladı.",
  kaynak:"data/devletler.js `sidamo-kralliklari` künyesi (t: 1897-01-01) · TDV'de MÜSTAKİL MADDE YOK · dayanak: Bahru Zewde, A History of Modern Ethiopia 1855-1974" },

{ t:"1897-09-10", b:"Kaffa Krallığı'nın düşüşü — son kral Gaki Şeroço'nun esir alınması", tur:"yikilis", onem:5, dunya:2, kapsam:"dis", yer_id:"Bonga (Kaffa)",
  etiket:["askeri","toprak-kaybi","hanedan"],
  d:"Ras Wolde Giyorgis komutasındaki Habeş ordusu, beş asırlık Kaffa Krallığı'nın son kralı Gaki Şeroço'yu esir aldı ve ülke Etiyopya'ya katıldı. Güneybatı krallıklarının bağımsız varlığı böylece sona erdi; Menelik'in güney fetihleri tamamlandı.",
  kaynak:"data/devletler.js `kaffa-kralligi` künyesi: \"Ras Wolde Giyorgis komutasındaki Habeş ordusu son kral Gaki Şeroço'yu esir aldı\" · TDV'de MÜSTAKİL MADDE YOK · dayanak: Richard Pankhurst, The Ethiopian Borderlands (Red Sea Press, 1997)" },

// ══════════════════════════════════════════════════════════════════
// VII. BUGANDA KRALLIĞI — 1300-1923
//    Büyük Göller · Zengibar ticareti · üç din yarışı · İngiliz himayesi
//    (komşu Bunyoro ve Toro krallıkları da bu bölümde anılır)
// ══════════════════════════════════════════════════════════════════

{ t:"1300-01-01", b:"Kintu hânedanının Buganda Krallığı'nı kurması", tur:"kurulus", onem:5, dunya:1, kapsam:"ic", yer_id:"Mengo (Buganda)",
  etiket:["kurulus","hanedan"],
  d:"Geleneğe göre Kintu hânedanı Buganda Krallığı'nı kurdu. Viktorya gölünün kuzeybatı kıyısındaki bu krallık, kabaka adlı hükümdarı ve klan temelli idarî düzeniyle Büyük Göller bölgesinin en örgütlü siyasî yapısı hâline gelecektir.",
  kaynak:"data/devletler.js `buganda` künyesi: \"Kintu hanedanı Buganda Krallığı'nı kurdu\" · TDV `uganda` maddesi krallığın kuruluş efsanesini anıyor, GÜN VERMİYOR — künyenin yuvarlak yılı korundu, gün UYDURULMADI" },

{ t:"1822-01-01", b:"Toro Krallığı'nın Bunyoro'dan ayrılması", tur:"kurulus", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan","idari"],
  d:"Omukama Kyebambe'nin oğlu Prens Kaboyo, 1822 yılında kendi sorumluluğundaki bölgede Toro Krallığı'nı kurarak Bunyoro'dan ayrıldı. Büyük Göller bölgesinin en büyük krallığı olan Bunyoro'nun parçalanması, Buganda'nın yükselişinin önünü açtı. (Toro atlasta yerleşim olarak KAYITLI DEĞİL.)",
  kaynak:"TDV `uganda`: \"Omukama Kyebambe'nın oğlu Prens Kaboyo'nun 1822 yılında kendi sorumluluğundaki bölgede tesis ettiği Toro Krallığı\"" },

{ t:"1836-01-01", b:"Suna Kalema Kansinge dönemi — Zengibarlı Arap tüccarların Buganda'ya gelişi", tur:"iktisadi", onem:5, dunya:2, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["ticaret","din"],
  d:"Suna Kalema Kansinge (1836-1854) Doğu Afrika sahilleriyle ilişkileri geliştirince Zengibar Sultanlığı'ndan Arap asıllı tüccarlar fildişi ve köle ticareti için Buganda topraklarına gelmeye başladılar. 1840'lardan itibaren başlayan bu ticaret ülkede refahı artırdı ve İslâmiyet'i Büyük Göller bölgesine taşıdı.",
  kaynak:"TDV `uganda`: \"Suna Kalema Kansinge (1836-1854) Doğu Afrika sahilleriyle ilişkileri geliştirince Zengibar Sultanlığı'ndan Arap asıllı tüccarlar fildişi ve köle ticareti için Buganda Krallığı topraklarına gelmeye başladılar\"" },

{ t:"1854-01-01", b:"I. Mutasa'nın (Mutesa) tahta çıkışı ve Kur'an'dan sûreler ezberlemesi", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic", yer_id:"Mengo (Buganda)",
  etiket:["hanedan","din"],
  d:"Suna'nın ardından tahta geçen I. Mutasa (1854-1884), Zengibarlı tüccarların etkisiyle İslâmiyet'e ilgi duydu ve bazı sûreleri ezberlediği bildirilmektedir. 1854-1856 yıllarında Buganda topraklarına üç defa sefer yapan Ahmed b. İbrâhim, kabakaya İslâm'ı anlatan ilk müslüman tüccardır.",
  kaynak:"TDV `uganda`: \"Mutasa'ya (1854-1884) bıraktığı ve bazı sûreleri ezberlediği bildirilmektedir\" · \"1854-1856 yıllarında Buganda topraklarına üç defa sefer yapan Ahmed b. ...\"" },

{ t:"1867-01-01", b:"I. Mutasa'nın müslümanlara karşı iyi davranmaya başlaması", tur:"din", onem:4, dunya:1, kapsam:"ic", yer_id:"Mengo (Buganda)",
  etiket:["din"],
  d:"1867'de I. Mutasa müslümanlara karşı iyi davranmaya başladı; sarayda oruç tutulması ve namaz kılınması serbestleşti. Buganda, hıristiyan misyonerler gelmeden önce İslâm'a en yakın olduğu dönemi yaşadı.",
  kaynak:"TDV `uganda`: \"1867'de müslümanlara karşı iyi davranmaya başlayan I. ...\"" },

{ t:"1869-01-01", b:"Kabarega'nın Bunyoro tahtına çıkışı ve krallığı toparlaması", tur:"hukumdar", onem:4, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan","askeri","idari"],
  d:"1869'da Kral Mukama Kamurasi'nin ölümünden sonra yerine geçen oğlu Kabarega, ekonomik bakımdan çökmüş olan Bunyoro Krallığı'nı idarî ve askerî düzenlemelerle kısa zamanda toparladı ve kaybedilen yerleri geri aldı; 1876'da 1822'de ayrılan Toro Krallığı'nı da tekrar kendi idaresine soktu. Bunyoro, İngiliz yayılmasına en uzun direnen Büyük Göller devleti olacaktır.",
  kaynak:"TDV `uganda`: \"1869'da Kral Mukama Kamurasi'nin ölümünden sonra yerine geçen oğlu Kabarega ... kaybedilen yerleri geri aldı\" · \"Kabarega 1822'de Bunyoro'dan ayrılan Toro Krallığı'nı 1876'da tekrar kendi idaresine soktu\"" },

{ t:"1872-01-03", b:"Hidiv İsmâil Paşa'nın Samuel Baker eliyle Buganda'ya asker göndermesi", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["askeri","toprak"],
  d:"Doğu Afrika'nın Büyük Göller bölgesini hâkimiyeti altına almayı planlayan Hidiv İsmâil Paşa'nın 1872'de İngiliz asıllı Sir Samuel Baker kumandasında gönderdiği askerler, Ankoli ve Lango'yu ele geçirdikten sonra Buganda topraklarına girdiler. Osmanlı-Mısır nüfuzu böylece Nil'in kaynaklarına kadar uzandı.",
  kaynak:"TDV `uganda`: \"Hidiv İsmâil Paşa'nın 1872'de İngiliz asıllı Sir Samuel Baker kumandasında gönderdiği askerler Ankoli ve Lango'yu ele geçirdikten sonra Buganda topraklarına girdiler\"" },

{ t:"1874-06-20", b:"Gordon Paşa'nın elçisi Chaille-Long'un I. Mutasa'ya ulaşması", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["diplomasi"],
  d:"1874'te Samuel Baker'in istifa edip İngiltere'ye dönmesi üzerine İsmâil Paşa'nın Hartum'a vali tayin ettiği Charles Gordon, kaymakam Chaille-Long'u hediyelerle I. Mutasa'ya gönderdi ve 20 Haziran 1874'te kabakayla görüştü. Mısır Hidivliği ile Buganda arasında diplomatik ilişki böyle kuruldu.",
  kaynak:"TDV `uganda`: \"1874'te Samuel Baker'in istifa edip İngiltere'ye dönmesi üzerine İsmâil Paşa'nın Hartum'a vali tayin ettiği Charles Gordon kaymakam Chaille-Long'u hediyelerle I. ...\" · \"20 Haziran 1874 tarihinde I. ...\"" },

{ t:"1875-04-12", b:"Ernest de Bellefonds'un Hidiv adına Buganda'ya elçiliği", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["diplomasi"],
  d:"Olumlu gelişmeler üzerine Hidiv İsmâil Paşa'nın ertesi yıl Buganda'ya yolladığı Ernest de Bellefonds 12 Nisan 1875'te I. Mutasa'ya ulaştı. Mısır'ın Büyük Göller siyaseti zirvesindeydi; aynı yıl gelen Stanley bu dengeyi bozacaktır.",
  kaynak:"TDV `uganda`: \"Hidiv İsmâil Paşa'nın ertesi yıl Buganda'ya yolladığı Ernest de Bellefonds 12 Nisan 1875'te I. ...\"" },

{ t:"1875-10-01", b:"Stanley'in İslâm aleyhtarı propagandası ve yetmiş müslümanın diri diri yakılması", tur:"din", onem:5, dunya:2, kapsam:"ic", yer_id:"Mengo (Buganda)",
  etiket:["din","sosyal"],
  d:"İngiliz seyyahı Henry Morton Stanley'in 1875'te saraya gelip İslâmiyet aleyhine propaganda yapmasından etkilenen I. Mutasa bir defa daha tavır değiştirdi ve 1875 Ekiminden 1876 Martına kadar yetmiş kadar müslümanı diri diri yaktırdı. Buganda'nın din siyasetindeki bu dönüş, ülkeyi İslâm'dan hıristiyanlığa çeviren kırılma noktasıdır.",
  kaynak:"TDV `uganda`: \"Henry Morton Stanley'in 1875'te sarayına gelip İslâmiyet aleyhine propaganda yapmasından etkilenerek bir defa daha tavır değiştirdi. 1875 yılı Ekiminden 1876 Martına kadar yetmiş kadar müslümanı diri diri yaktırdı\"" },

{ t:"1877-01-02", b:"İngiliz Protestan misyonerlerinin Büyük Göller bölgesine gelişi", tur:"din", onem:5, dunya:2, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["din"],
  d:"1877'de İngiliz Protestanları Büyük Göller bölgesine gelip faaliyete başladılar; iki yıl sonra Fransız Katolikleri adına Beyaz Babalar (Pères Blancs) grubu onları izledi. Buganda sarayı böylece üç dinin — İslâm, Protestanlık, Katoliklik — yarıştığı bir alana dönüştü ve bu yarış on beş yıl sonra iç savaşa varacaktır.",
  kaynak:"TDV `uganda`: \"1877'de İngiliz Protestanları ve 1879'da Fransız Katolikleri adına Beyaz Babalar adlı misyoner grupları Büyük Göller bölgesine gelip faaliyete başladılar\"" },

{ t:"1877-01-03", b:"Emin Paşa'nın Gordon Paşa adına Buganda ziyaretleri", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["diplomasi","askeri"],
  d:"Emin Paşa, Gordon Paşa'nın siyasî memuru sıfatıyla 1877 ve 1878'de Nur Efendi Muhammed kumandasındaki askerlerle birlikte I. Mutasa'yı ziyaret etti. Mısır Hidivliği 1880'de Bunyoro Krallığı'nı da kendi hâkimiyeti altında kabul etmekteydi; ancak 1880'lerin başında Hartum'da Mehdî hareketinin ortaya çıkmasıyla hidivlikle Uganda arasındaki ticaret kesildi.",
  kaynak:"TDV `uganda`: \"Emin Paşa, Gordon Paşa'nın siyasî memuru sıfatıyla 1877 ve 1878'de Nur Efendi Muhammed kumandasındaki askerlerle birlikte I. ...\" · \"1880'li yılların başında Hartum'da Mehdî hareketi ortaya çıkınca hidivlikle Uganda arasındaki ticaret kesildi\"" },

{ t:"1884-01-02", b:"I. Mutasa'nın ölümü, Muvanga'nın kral ilân edilmesi ve himaye antlaşması", tur:"hukumdar", onem:5, dunya:2, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["hanedan","antlasma"],
  d:"Mutasa 1884'te ölünce misyonerler on sekiz yaşındaki oğlu Muvanga'yı (Mwanga) kral ilân ettiler ve bölgeyi sömürgeleştirmek için kendisine bir himaye antlaşması imzalattılar. Krallık artık kendi hükümdarını kendi seçmemektedir.",
  kaynak:"TDV `uganda`: \"Mutasa 1884'te ölünce misyonerler on sekiz yaşındaki oğlu Muvanga'yı (Mwanga) kral ilân ettiler ve bölgeyi sömürgeleştirmek için kendisine bir himaye antlaşması imzalattılar\"" },

{ t:"1888-01-02", b:"Muvanga'nın tahttan indirilip sürgüne gönderilmesi", tur:"isyan", onem:4, dunya:1, kapsam:"ic", yer_id:"Mengo (Buganda)",
  etiket:["isyan","hanedan","din"],
  d:"1888'de tahttan indirilip sürgüne gönderilen Muvanga, iki yıl sonra hıristiyanların desteğiyle tekrar tahta oturdu. Bu darbe ve karşı darbe dizisi, sarayda müslüman, Protestan ve Katolik hizipleri arasındaki iktidar mücadelesinin doğrudan sonucudur.",
  kaynak:"TDV `uganda`: \"1888'de tahttan indirilip sürgüne gönderilen Muvanga iki yıl sonra hıristiyanların desteğiyle tekrar tahta oturdu\"" },

{ t:"1890-01-02", b:"Almanya-İngiltere antlaşması ile Doğu Afrika'nın paylaşılması", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"Zanzibar (Zengibar)",
  etiket:["antlasma","toprak-kaybi"],
  d:"Almanya ile İngiltere, Afrika'nın doğu sahillerini aralarında paylaşma konusunu ilk defa 1890 yılında bir anlaşma ile gündeme getirdiler. Helgoland-Zengibar Antlaşması olarak bilinen bu düzenleme, Uganda'yı İngiliz, Tanganyika'yı Alman nüfuz bölgesine bıraktı ve Zengibar'ı İngiliz himayesine soktu.",
  kaynak:"TDV `uganda`: \"Almanya ile İngiltere, Afrika'nın doğu sahillerini aralarında paylaşma konusunu ilk defa 1890 yılında bir anlaşma ile gündeme getirdiler\" · TDV `zengibar`: \"1890: Helgoland-Zanzibar Antlaşması İngiliz himayesini kurar\"" },

{ t:"1892-01-01", b:"Buganda'da Katolik-Protestan iç savaşı ve İngiliz sömürgeciliğinin başlaması", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["din","askeri","isyan"],
  d:"Muvanga Katolikleri, İngiliz sömürge şirketi adına burada bulunan Lugard ise Protestanları destekleyince 1892 Ocak ayında aralarında başlayan mücadeleyi silâh bakımından üstün olan Protestanlar kazandı. Uganda topraklarında 1892'de başlayan İngiliz sömürgeciliği 1962 yılına kadar sürecektir.",
  kaynak:"TDV `uganda`: \"1892 yılı Ocak ayında aralarında başlayan mücadeleyi silâh bakımından üstün olan Protestanlar kazandı\" · \"Uganda topraklarında 1892'de başlayan İngiliz sömürgeciliği 1962 yılına kadar devam etti\"" },

{ t:"1894-06-18", b:"İngiltere ile himaye antlaşmasının imzalanması", tur:"antlasma", onem:5, dunya:3, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["antlasma","toprak-kaybi"],
  d:"Buganda Krallığı, İngiltere ile bir himaye antlaşması imzaladı ve Uganda Protektorası resmen kuruldu. Altı asırlık krallık, iç yapısını koruyarak fakat dış egemenliğini kaybederek İngiliz idaresine girdi.",
  kaynak:"data/devletler.js `buganda` künyesi: \"İngiltere ile himaye antlaşması imzalandı\" (t: 1894-06-18) · TDV `uganda` maddesi himaye idaresini anlatıyor, GÜN VERMİYOR — gün künyeden devralındı" },

{ t:"1900-01-01", b:"Buganda Antlaşması — toprakların resmen sömürgeleştirilmesi", tur:"antlasma", onem:5, dunya:2, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["antlasma","idari","toprak-kaybi"],
  d:"1900 yılında İngilizlerle yapılan antlaşmayla Buganda toprakları resmen sömürgeleştirildi. Antlaşma toprağı şeflere özel mülk olarak dağıttı (mailo) ve krallığın geleneksel toprak düzenini kalıcı olarak değiştirdi.",
  kaynak:"TDV `uganda`: \"1900 yılında İngilizler'le yapılan antlaşmayla Buganda toprakları resmen sömürgeleştirildi\"" },

{ t:"1903-01-01", b:"Muvanga'nın Seyşeller'de sürgünde ölmesi ve II. Daudi Chwa'nın tahta çıkışı", tur:"hukumdar", onem:4, dunya:1, kapsam:"dis", yer_id:"Mengo (Buganda)",
  etiket:["hanedan"],
  d:"Muvanga'nın 1903'te Seyşeller (Seychelles) adasında sürgündeyken ölmesi üzerine oğullarının en büyüğü II. Daudi Chwa tahta çıktı. Onun krallığı 1939'daki ölümüne kadar tamamen İngiliz sömürge idaresi altında geçti.",
  kaynak:"TDV `uganda`: \"Muvanga'nın 1903'te Seyşeller (Seychelles) adasında sürgünde iken ölmesi üzerine oğullarının en büyüğü II. ...\" · \"Daudi Chwa'nın krallığı 1939'da ölümüne kadar İngiliz sömürge idaresi altında geçti\"" },

{ t:"1903-01-02", b:"Uganda'da pamuk tarımının başlaması", tur:"iktisadi", onem:4, dunya:2, kapsam:"ic", yer_id:"Mengo (Buganda)",
  etiket:["ticaret","iktisadi"],
  d:"Kahve ve çaydan sonra ülkenin üçüncü ihraç ürünü olan pamuk, Uganda'da ilk defa 1903 yılında yetiştirilmeye başlandı ve demiryollarının gelişmesiyle Kenya üzerinden pazarlandı. Sömürge iktisadının Büyük Göller bölgesini dünya pazarına bağlaması bu ürünle oldu.",
  kaynak:"TDV `uganda`: \"Kahve ve çaydan sonra üçüncü ihraç ürünü pamuk ülkede ilk defa 1903 yılında yetiştirilmeye başlanmış ve demiryollarının gelişmesiyle Kenya üzerinden pazarlanmıştır\"" },

{ t:"1913-01-03", b:"Nuhu Mbogo'nun 600 cami ve okul için arazi tahsisi talebi", tur:"din", onem:4, dunya:1, kapsam:"ic", yer_id:"Mengo (Buganda)",
  etiket:["din","kultur","sosyal"],
  d:"Farklı etnik yapılara ve inançlara sahip müslümanların güvenini kazanan Nuhu Mbogo, 1913 yılında İngilizlere başvurarak başta Buganda'da, ayrıca Bulemezi, Kyadondo, Buddu, Kyagve ve Toro'da toplam 600 cami ve okul yapılması için arazi tahsis edilmesini istedi. 1875-76 katliamından sonra dağılan Uganda müslümanlarının kurumsal olarak yeniden örgütlenmesidir.",
  kaynak:"TDV `uganda`: \"Nuhu Mbogo 1913 yılında İngilizler'e başvurarak başta Buganda'da, ayrıca Bulemezi, Kyadondo, Buddu, Kyagve ve Toro'da toplam 600 cami ve okul yapılması için arazi tahsis edilmesini istedi\"" },

];

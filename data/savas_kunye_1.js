// ============================================================================
// SAVAŞ KÜNYESİ — pilot parti (20 muharebe)
// ============================================================================
// Yazan: SAVAS-KUNYE (Sonnet 1013) · 17 Eylül 2026 · koordinatör 1.MURAT
// Şartname: oturumlar/DALGA-0065.md satır "🕢 KOSU13-YAMA (19:30 sonrası,
//   yeni ad SAVAS-KUNYE)", madde 16: "Savaş künyesi şeması + ilk parti:
//   taraflar, komutanlar, piyade/süvari, top, tüfek, gemi (modern: tank, uçak,
//   makineli tüfek); kaynaksızsa 'bilinmiyor'. Önce data/savaslar.js
//   alanlarını ölç, şema öner, sonra en önemli 20 muharebe."
//
// ── ① data/savaslar.js ÖLÇÜMÜ (bu oturum yaptı) ─────────────────────────────
// window.SAVASLAR: 205 muharebe kaydı. Gözlenen alanlar:
//   t (ISO tarih) · tur ("meydan"|"kusatma"|"isyan", bazı deniz kayıtlarında
//   tur alanı YOK — yalnız yorumda "(deniz)" yazıyor) · ad (serbest metin) ·
//   taraf_metin (serbest metin, ekranda "ad — taraf" gösterimi için) ·
//   sonuc ("zafer"|"yenilgi"|"belirsiz", Osmanlı açısından) · seri (opsiyonel,
//   SERILER id'si) · lat/lon (muharebe yeri) · taraf (devletler.js id dizisi)
//   · galip (opsiyonel, yalnız açık galibi olan kayıtlarda) · bitis (opsiyonel,
//   çok aylık kuşatma/harekâtın SONUÇ tarihi — nadiren dolu).
// 🔴 ÖLÇÜLEN BOŞLUK: SAVASLAR kayıtlarının HİÇBİRİNDE stabil bir `id` alanı
//   yok. Bu yüzden aşağıdaki künye kayıtları savaslar.js'e `savas_ad` + `savas_t`
//   ile (o kaydın `ad:` ve `t:` değerleriyle BİREBİR string eşleşmesi) bağlanıyor
//   — EKOKUMA_SAVAS'ın kronoloji maddelerine `olay:[...]` ile bağlandığı
//   yöntemin (t eşleşmesi) aynısı, farklı hedef diziye uygulanmış hâli.
//
// ── ② ÖNERİLEN ŞEMA ──────────────────────────────────────────────────────
//   id            "kunye-<slug>-<yil>" — bu dosyanın kendi anahtarı
//   savas_ad      data/savaslar.js kaydının ad: alanıyla BİREBİR (bağ alanı)
//   savas_t       data/savaslar.js kaydının t: alanıyla BİREBİR (bağ alanı)
//   tur           "meydan" | "kusatma" | "deniz"
//   baslik        okunaklı başlık (tarih parantezli)
//   tarih_metin   TDV'nin verdiği tam tarih ifadesi (Hicrî varsa dahil)
//   taraflar:[ {
//     ad            serbest metin ("Osmanlı ordusu" vb.)
//     devlet_id     data/devletler.js id'si, biliniyorsa (yoksa alan konmaz)
//     komutan       serbest metin, birden fazla komutan "·" ile ayrılır
//     mevcut_toplam sayı | "bilinmiyor" | kaynağın verdiği aralık metni
//     piyade        sayı | "bilinmiyor" | "yok" (yok = deniz muharebesi gibi
//                   piyade/süvari ayrımının ANLAMSIZ olduğu durum)
//     suvari        sayı | "bilinmiyor" | "yok"
//     top           sayı | "bilinmiyor" | "yok" (yok = dönemde/tarafta ateşli
//                   topçu silahı henüz YOK — 1370 öncesi Balkan meydanları)
//     tufek         sayı | "bilinmiyor" | "yok"
//     gemi          sayı | "bilinmiyor" | "yok"
//     kayip         serbest metin, kaynak veriyorsa (opsiyonel)
//     notlar        serbest metin: silah/taktik özel unsuru (fil, savaş
//                   arabası, kuma gömülü top vb.) ya da sayının güvenilirlik
//                   kaydı (opsiyonel)
//   } ]
//   // MODERN DÖNEM ALANLARI (bu partide HİÇBİRİ kullanılmadı — 20 kaydın
//   // hepsi 1302-1683 arası, ateşli silah öncesi ya da erken dönem):
//   //   tank | ucak | makineli_tufek — aynı taraflar[] nesnesine, ileri
//   //   dönem (1911 sonrası) künyeleri yazılırken eklenecek.
//   kaynak        "TDV: <slug> (DİA <cilt>, <yıl>, s. <sayfa>)" — birden
//                 fazla maddeye dayanıyorsa " · " ile ayrılır
//   bag_ekokuma   varsa EKOKUMA_SAVAS/EKOKUMA_SAVAS3 kartının id'si (çapraz
//                 referans, aynı TDV okumasının tekrar taranmasını önler)
//   uyari         bu kaydın savaslar.js ile eşleşmesinde ÖLÇÜLEN bir tutarsızlık
//                 varsa (opsiyonel) — aşağıda dört kayıtta var, ③'te listelendi
//
// ── ③ BU OTURUMUN ÖLÇTÜĞÜ, KAPSAM DIŞI DÖRT BULGU (düzeltme BU dosyanın işi
//    değil — 1.MURAT'a teslim mesajında ayrıca bildirildi) ─────────────────
//   (a) data/olaylar.js kaynak:"istanbulun-fethi" ÖLÜ SLUG — HTTP 200 ama
//       <title> "Arama - TDV İslâm Ansiklopedisi" (arama sonucu, madde DEĞİL).
//       Aynı biçimde data/olaylar*.js içindeki kaynak:"zenta-savasi" de ÖLÜ.
//       İkisi de §4② tuzağı (canlı kod, arama sayfası).
//   (b) data/savaslar.js: "Mercidâbık" VE "Mercidabık" aynı t:"1516-08-24" için
//       iki ayrı kayıt; aynı şekilde "Ridâniye" VE "Ridaniye" aynı
//       t:"1517-01-22" için iki ayrı kayıt (yalnız aksan farkı, muhtemelen
//       mükerrer). Bu künye dosyası aksanlı yazımı esas aldı.
//   (c) data/savaslar.js: "Sırpsındığı" (t:"1364-07-01") ile "Çirmen"
//       (t:"1371-09-26") muhtemelen AYNI olayın iki kaydı — TDV bu savaşı
//       "Çirmen (Sırp Sındığı)" adıyla tek olay sayıyor ve tarihi 1371 alıyor,
//       766 (1364-65) tarihini Osmanlı kaynaklarının hatası sayıyor
//       (EKOKUMA_SAVAS3, "savas-cirmen-1371"). Bu künye 1371 kaydına bağlandı.
//   (d) "Pelekanon (Maltepe)" savaslar.js'te t:"1329-06-10", EKOKUMA_SAVAS3
//       kartı "1 Haziran 1329 ve ertesi gün" diyor (t:"1329-06-01" civarı) —
//       9 günlük fark, hangisinin kaynağa dayandığı bu oturumda ÖLÇÜLMEDİ.
//   (e) "Kandiye kuşatması" savaslar.js'te yalnız t:"1648-05-01" (21 yıllık
//       kuşatmanın BAŞLANGICI) taşıyor, `bitis:` alanı YOK. Bu künye 1669'daki
//       teslim sayılarını (garnizon, tabya) taşıdığı için savas_t alanına
//       1648-05-01 yazıldı ama uyari alanında bu fark açıkça belirtildi.
//
// ── YÖNTEM ──────────────────────────────────────────────────────────────
// 19/20 kayıt EKOKUMA_SAVAS (data/ekokuma_savas.js) ve EKOKUMA_SAVAS3
// (data/ekokuma_savas3.js) kartlarının TDV'den ZATEN okunmuş "taraflar"
// alanlarından türetildi — aynı TDV gövdesi ikinci kez taranmadı, yalnız
// bu şemaya göre yeniden yapılandırıldı (§4: aynı kaynağın tekrar tekrar
// aranması değil, doğru biçimde kullanılması). 1 kayıt (II. Viyana Kuşatması)
// için bu oturum TDV `merzifonlu-kara-mustafa-pasa` maddesini (HTTP 200,
// doğrulandı) yeniden okudu. Kaynakların KENDİ verdiği abartı uyarıları
// (ör. Niğbolu'da Batı kaynaklarının 200-400 bin rakamı, Viyana'da 500 bin
// rakamı) "notlar" alanına taşındı, sayı SEÇİLMEDİ.
// ============================================================================
window.SAVAS_KUNYE_1 = [

{ id:"kunye-koyunhisar-1302", savas_ad:"Koyunhisar (Bapheus)", savas_t:"1302-07-27", tur:"meydan",
  baslik:"Koyunhisar (Bapheus) Savaşı (27 Temmuz 1302)",
  tarih_metin:"27 Temmuz 1302 (Bizanslı Pachymeres) · Osmanlı kaynaklarında 701 (1301-1302)",
  taraflar:[
    { ad:"Osmanlı Beyliği ve katılan uç gazileri", devlet_id:"osmanli", komutan:"Osman Bey", mevcut_toplam:5000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Pachymeres'e göre yaklaşık sayı; TDV iki farklı anlatı aktarır (meydan savaşı mı, denizden çıkarmaya pusu mu)." },
    { ad:"Bizans İmparatorluğu", devlet_id:"bizans", komutan:"Léon Mouzalôn", mevcut_toplam:2000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Bizanslı, Alan ve yabancı ücretli asker karışımı; atları ve paraları kısa süre önce Alanlara verilmişti (moral düşüklüğü, TDV notu)." }
  ],
  kaynak:"TDV: osman-i (DİA)", bag_ekokuma:"savas-koyunhisar-bapheus-1302" },

{ id:"kunye-pelekanon-1329", savas_ad:"Pelekanon (Maltepe)", savas_t:"1329-06-10", tur:"meydan",
  baslik:"Pelekanon Savaşı (1329)",
  tarih_metin:"1 Haziran 1329 ve ertesi gün (Kantakuzenos'un hatıratına göre)",
  uyari:"savaslar.js kaydı t:1329-06-10 taşıyor; EKOKUMA_SAVAS3 kartı '1 Haziran ve ertesi gün' diyor — 9 günlük fark bu oturumda çözülmedi, bkz. dosya başı ③(d).",
  taraflar:[
    { ad:"Osmanlı Beyliği", devlet_id:"osmanli", komutan:"Orhan Bey · kardeşi Pazarlu", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"İlk gün yalnız 300 kişilik akıncı öncüsü kaynakta sayılı; ordunun toplamı verilmiyor." },
    { ad:"Bizans İmparatorluğu", devlet_id:"bizans", komutan:"III. Andronikos · Grandomestikos Yuannis Kantakuzenos", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"TDV Orhan maddesindeki '2000 askerden ibaretti' parantezinin hangi tarafa ait olduğu metinden kesin çıkmıyor; bu yüzden tarafa yazılmadı (EKOKUMA_SAVAS3'ün kendi tartışma notu)." }
  ],
  kaynak:"TDV: orhan · TDV: iznik", bag_ekokuma:"savas-pelekanon-1329" },

{ id:"kunye-cirmen-1371", savas_ad:"Çirmen", savas_t:"1371-09-26", tur:"meydan",
  baslik:"Çirmen (Sırp Sındığı) Savaşı (26 Eylül 1371)",
  tarih_metin:"15 Rebîülevvel 773 · 26 Eylül 1371 (Osmanlı kaynaklarındaki 766/1364-65 tarihini TDV yanlış sayar)",
  uyari:"savaslar.js'te ayrıca t:1364-07-01 ile 'Sırpsındığı' adında ayrı bir kayıt var — TDV'ye göre aynı olay, bkz. dosya başı ③(c).",
  taraflar:[
    { ad:"Osmanlı Beyliği (Rumeli kuvvetleri)", devlet_id:"osmanli", komutan:"öncü: Hacı İlbeği · Rumeli'de Lala Şâhin (I. Murad o sırada Anadolu'da, Biga kuşatmasında)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" },
    { ad:"Sırp despotluğu ve krallığı (Bizans ile ittifak)", komutan:"Serez Despotu Jovan Uglyeşa · kardeşi Kral Vulkaşin", mevcut_toplam:60000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"60.000 rakamı yalnız bir Sırp keşişinin (İsaiya) tanıklığına dayanır, TDV başka doğrulama vermez." }
  ],
  kaynak:"TDV: murad-i · TDV: cirmen", bag_ekokuma:"savas-cirmen-1371" },

{ id:"kunye-rovine-1395", savas_ad:"Rovine", savas_t:"1395-05-17", tur:"meydan",
  baslik:"Rovine (Argeş) Savaşı (17 Mayıs 1395)",
  tarih_metin:"17 Mayıs 1395 (TDV I. Bayezid maddesi) · TDV Eflak maddesi 1394 der",
  uyari:"iki TDV maddesi (bayezid-i · eflak) savaşın yılında ayrılıyor (1395/1394); taraf seçilmedi (EKOKUMA_SAVAS3'ün kendi notu).",
  taraflar:[
    { ad:"Osmanlı Devleti", devlet_id:"osmanli", komutan:"Yıldırım Bayezid", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" },
    { ad:"Eflak Voyvodalığı", devlet_id:"eflak", komutan:"Voyvoda Mircea ('Koca Mircea'; Osmanlı kaynaklarında 'Mirci', 1386-1418)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: bayezid-i · TDV: eflak", bag_ekokuma:"savas-rovine-1395" },

{ id:"kunye-nigbolu-1396", savas_ad:"Niğbolu", savas_t:"1396-09-25", tur:"meydan",
  baslik:"Niğbolu Savaşı (25 Eylül 1396)",
  tarih_metin:"25 Eylül 1396 · 21 Zilhicce 798",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Yıldırım Bayezid · Şehzade Süleyman · Şehzade Mustafa · Anadolu beylerbeyi Timurtaş Paşa · Evrenos Bey · Sırp vasalı Stefan Lazareviç", mevcut_toplam:"60.000-80.000", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"tahminen 30.000 dolayında (kesin rakam yok)", notlar:"Batı kaynaklarının verdiği 200-400 bin rakamını TDV doğru bulmaz; mevcudun 80.000'e ulaşmamış olabileceğini yazar." },
    { ad:"Haçlı ordusu", komutan:"Macar Kralı Sigismund · Jean de Nevers (Fransız) · Eflak voyvodası Mircea", mevcut_toplam:100000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"yok", kayip:"Osmanlı tahmininden daha fazla (kesin rakam yok)", notlar:"Macar, Fransız, Alman, İngiliz, Leh, Çek, İtalyan, İspanyol ve Eflak askerlerinden oluşuyordu." }
  ],
  kaynak:"TDV: nigbolu-savasi (DİA 33, 2007, s. 89-92)", bag_ekokuma:"savas-nigbolu-1396" },

{ id:"kunye-kosova1-1389", savas_ad:"I. Kosova", savas_t:"1389-06-15", tur:"meydan",
  baslik:"I. Kosova Savaşı (15 Haziran 1389)",
  tarih_metin:"15 Haziran 1389 (Batı kaynakları) · 19 Cemâziyelâhir 791",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"I. Murad · Şehzade Bayezid (sağ kanat) · Şehzade Yâkub (sol kanat)", mevcut_toplam:"30.000'i biraz aşan", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Bağlı Anadolu beyliklerinin ve Balkan beylerinin askerleri dahil." },
    { ad:"Müttefik Balkan ordusu", komutan:"Sırp Knezi Lazar · Vuk Brankoviç · Bosna Kralı Tvrtko'nun birlikleri", mevcut_toplam:"Osmanlı ordusuna denk", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Sırp, Boşnak, Hırvat, Arnavut, Bulgar, Macar ve Çek savaşçılardan oluşuyordu." }
  ],
  kaynak:"TDV: kosova-savaslari (DİA 26, 2002, s. 221-224) · TDV: bayezid-i", bag_ekokuma:"savas-kosova-1389" },

{ id:"kunye-ankara-1402", savas_ad:"Ankara", savas_t:"1402-07-28", tur:"meydan",
  baslik:"Ankara Savaşı (28 Temmuz 1402)",
  tarih_metin:"büyük ihtimalle 28 Temmuz 1402, cuma (TDV: kesin çıkmaz)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Yıldırım Bayezid", mevcut_toplam:"Timur'un fetihnâmesine göre 70.000, Behiştî'ye göre 90.000", piyade:"çoğunluk (kaynakta oran yok)", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Safında 20.000 kişilik Sırp birliği vardı." },
    { ad:"Timur'un ordusu", komutan:"Timur", mevcut_toplam:160000, piyade:"bilinmiyor", suvari:"çoğunluk (kaynakta oran yok)", top:"yok", tufek:"yok", gemi:"yok", notlar:"Otuzdan fazla savaş fili vardı." }
  ],
  kaynak:"TDV: ankara-savasi (DİA 3, 1991, s. 210-211) · TDV: bayezid-i", bag_ekokuma:"savas-ankara-1402" },

{ id:"kunye-varna-1444", savas_ad:"Varna", savas_t:"1444-11-10", tur:"meydan",
  baslik:"Varna Muharebesi (10 Kasım 1444)",
  tarih_metin:"10 Kasım 1444 · 28 Receb 848",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"II. Murad · Anadolu beylerbeyi Karaca Bey · Rumeli beylerbeyi Şehâbeddin Şahin Paşa", mevcut_toplam:"40.000 civarı", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"7-8.000 civarı" },
    { ad:"Haçlı ordusu", komutan:"Macar/Leh Kralı I. Ulászló (Vladislav) · János Hunyadi · Kardinal Cesarini · Eflak prensi Vlad Drakul", mevcut_toplam:"bilinmiyor", piyade:"15.000 atlıdan biraz az", suvari:15000, top:"yok", tufek:"yok", gemi:"yok", kayip:"7-8.000 civarı", notlar:"2000 savaş arabası; Eflak'tan ayrıca 4000 asker." }
  ],
  kaynak:"TDV: varna-muharebesi (DİA 42, 2012, s. 527-530)", bag_ekokuma:"savas-varna-1444" },

{ id:"kunye-kosova2-1448", savas_ad:"II. Kosova", savas_t:"1448-10-17", tur:"meydan",
  baslik:"II. Kosova Savaşı (17-19 Ekim 1448)",
  tarih_metin:"17 Ekim 1448'de başladı, üç gün sürdü · 18 Şâban 852",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"II. Murad", mevcut_toplam:"en iyimser tahminle 50.000 dolayında", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"TDV: kaynaklardaki rakamlar abartılı, en iyimser tahmin 50.000." },
    { ad:"Macar ordusu", komutan:"János Hunyadi (Osmanlı kaynaklarında Yanko)", mevcut_toplam:"30.000-35.000", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"800-2.000 (savaş arabalarında, kaynağa göre değişir)", tufek:"bilinmiyor", gemi:"yok", notlar:"8000 Eflak askeri, Alman ve Çek paralı asker dahil." }
  ],
  kaynak:"TDV: kosova-savaslari (DİA 26, 2002, s. 221-224)", bag_ekokuma:"savas-kosova-1448" },

{ id:"kunye-otranto-1480", savas_ad:"Otranto çıkarması", savas_t:"1480-08-11", tur:"kusatma",
  baslik:"Otranto: çıkarma, on üç aylık işgal ve tahliye (1480-1481)",
  tarih_metin:"Apulia'ya çıkarma 28 Temmuz 1480 · Otranto'nun alınışı 11 Ağustos 1480 · şehrin boşaltılması 10 Eylül 1481",
  taraflar:[
    { ad:"Osmanlı kuvvetleri", devlet_id:"osmanli", komutan:"Gedik Ahmed Paşa (1480 çıkarması) · Hayreddin Bey (1481 garnizonu)", mevcut_toplam:"çıkarma ordusunun toplamı bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Şehirde bırakılan garnizon 8000 kişiydi (tek kesin sayı)." },
    { ad:"Napoli Krallığı", devlet_id:"napoli", komutan:"Kral I. Ferdinand (Ferrante) · oğlu Calabria Dükü Alfonso", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"40 (Aragon donanması, 1481 kuşatmasında)", notlar:"Alfonso'ya 1480'de verilen ordu 20.000 kişiydi." }
  ],
  kaynak:"TDV: gedik-ahmed-pasa · TDV: ii-bayezid · TDV: otranto-seferi", bag_ekokuma:"savas-otranto-1480-1481" },

{ id:"kunye-caldiran-1514", savas_ad:"Çaldıran", savas_t:"1514-08-23", tur:"meydan",
  baslik:"Çaldıran Savaşı (23 Ağustos 1514)",
  tarih_metin:"23 Ağustos 1514",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Yavuz Sultan Selim · Anadolu beylerbeyi Hadım Sinan Paşa · Rumeli beylerbeyi Hasan Paşa", mevcut_toplam:"yaklaşık 100.000 (uzun yürüyüşten yorgun)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Toplar zincirlenmiş, önlerinde araba/deve siperi kurulmuştu; sayı verilmiyor." },
    { ad:"Safevî ordusu", komutan:"Şah İsmâil · Ustaclu Muhammed Han", mevcut_toplam:"en az Osmanlı ordusu kadar (süvari ağırlıklı, dinç)", piyade:"yok (ağırlıklı süvari)", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok" }
  ],
  kaynak:"TDV: caldiran-savasi (DİA 8, 1993, s. 193-195)", bag_ekokuma:"savas-caldiran-1514" },

{ id:"kunye-mercidabik-1516", savas_ad:"Mercidâbık", savas_t:"1516-08-24", tur:"meydan",
  baslik:"Mercidâbık Muharebesi (24 Ağustos 1516)",
  tarih_metin:"24 Ağustos 1516, pazar · 25 Receb 922",
  uyari:"savaslar.js'te aynı t için 'Mercidabık' (aksansız) adıyla ikinci bir kayıt daha var, bkz. dosya başı ③(b).",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Yavuz Sultan Selim · Vezîriâzam Hadım Sinan Paşa · Anadolu beylerbeyi Zeynel Paşa · Rumeli beylerbeyi Yûsuf (Küçük Sinan) Paşa · Şehsuvaroğlu Ali Bey", mevcut_toplam:"80.000 dolayında", piyade:"bilinmiyor", suvari:"bilinmiyor", top:300, tufek:12000, gemi:"yok", notlar:"300 top arabası; 12.000 tüfekli yeniçeri. Bazı kaynaklar 120.000'e varan rakam verir, TDV 80.000 civarını daha olası bulur." },
    { ad:"Memlük ordusu", komutan:"Sultan Kansu Gavri · Şam nâibi Sıbay · Halep nâibi Hayır Bey", mevcut_toplam:"70.000-80.000 dolayında", piyade:"bilinmiyor", suvari:"ağırlıklı (oran bilinmiyor)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"yaklaşık 2000 asker öldürüldü", notlar:"TDV: ateşli silahlarını savaş düzeninin parçası saymayıp etkili kullanmadılar." }
  ],
  kaynak:"TDV: mercidabik-muharebesi (DİA 29, 2004, s. 174-176)", bag_ekokuma:"savas-mercidabik-1516" },

{ id:"kunye-ridaniye-1517", savas_ad:"Ridâniye", savas_t:"1517-01-22", tur:"meydan",
  baslik:"Ridâniye Savaşı (22 Ocak 1517)",
  tarih_metin:"22 Ocak 1517 · 28 Zilhicce 922",
  uyari:"savaslar.js'te aynı t için 'Ridaniye' (aksansız) adıyla ikinci bir kayıt daha var, bkz. dosya başı ③(b).",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Yavuz Sultan Selim · Vezîriâzam Hadım Sinan Paşa · Mustafa Paşa · Küçük Sinan Paşa · yeniçeri ağası Ayas Ağa", mevcut_toplam:"son yoklamada 20.000", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Topçu ve tüfekçi ateşinin Memlük sol kanadını dağıttığı yazılır, sayı verilmiyor." },
    { ad:"Memlük ordusu", komutan:"Sultan Tomanbay · Canbirdi Gazâlî", mevcut_toplam:"yaklaşık 20.000", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"yok", kayip:"yaklaşık 4000", notlar:"Toplarının bir kısmı kuma gömülmüştü, hattın dışına çıkınca kullanılamadı." }
  ],
  kaynak:"TDV: ridaniye-savasi (DİA 35, 2008, s. 87-88)", bag_ekokuma:"savas-ridaniye-1517" },

{ id:"kunye-mohac-1526", savas_ad:"Mohaç", savas_t:"1526-08-29", tur:"meydan",
  baslik:"Mohaç Meydan Muharebesi (29 Ağustos 1526)",
  tarih_metin:"29 Ağustos 1526 · 20 Zilkade 932",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Kanûnî Sultan Süleyman · Vezîriâzam İbrâhim Paşa · Semendire beyi Bâlî Bey · Bosna beyi Hüsrev Bey", mevcut_toplam:"yaklaşık 80.000", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor (zincirlenmiş)", tufek:"bilinmiyor (tüfekli yeniçeri var)", gemi:"yok", kayip:"sefer rûznâmesi 50-60, Celâlzâde 150 der; TDV gerçek sayının daha yüksek olduğunu düşünür" },
    { ad:"Macar Krallığı ordusu", komutan:"Kral II. Layoş (Lajos) · Pál Tomori", mevcut_toplam:"savaş anında 40.000-50.000", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"yok", kayip:"20.000 piyade + 4.000 süvari cesedi sayıldı, 10.000 esir", notlar:"Leh, Çek ve Alman birlikleriyle." }
  ],
  kaynak:"TDV: mohac-muharebesi (DİA 30, 2020, s. 232-235)", bag_ekokuma:"savas-mohac-1526" },

{ id:"kunye-preveze-1538", savas_ad:"Preveze", savas_t:"1538-09-28", tur:"deniz",
  baslik:"Preveze Deniz Muharebesi (27-28 Eylül 1538)",
  tarih_metin:"27-28 Eylül 1538 · asıl çarpışma 4 Cemâziyelevvel 945 (28 Eylül)",
  taraflar:[
    { ad:"Osmanlı donanması", devlet_id:"osmanli", komutan:"Kaptanıderyâ Barbaros Hayreddin Paşa · Turgut Reis · Sâlih Reis · Seydi Ali Reis", mevcut_toplam:"yaklaşık 20.000 asker", piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:122, notlar:"122 kadırga." },
    { ad:"Haçlı ittifakı donanması (İspanya · Papalık · Venedik · Portekiz · Malta · Ceneviz)", komutan:"Andrea Doria · Vincenzo Cappello (Venedik) · Marco Grimani (Papalık)", mevcut_toplam:"yaklaşık 55.000 asker", piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yaklaşık 140 kalyon + 168 kadırga", kayip:"kaynaklara göre 128 kalyon", notlar:"Gemi/asker sayıları kaynaklara göre değişir (TDV'nin yaklaşık değerleri)." }
  ],
  kaynak:"TDV: preveze-deniz-muharebesi (DİA 34, 2007, s. 343-345)", bag_ekokuma:"savas-preveze-1538" },

{ id:"kunye-cerbe-1560", savas_ad:"Cerbe", savas_t:"1560-05-14", tur:"deniz",
  baslik:"Cerbe Deniz Savaşı (11-14 Mayıs 1560)",
  tarih_metin:"11-14 Mayıs 1560 deniz savaşı · 30 Temmuz 1560 kalenin fethi",
  taraflar:[
    { ad:"Osmanlı donanması ve Trablusgarp kuvvetleri", devlet_id:"osmanli", komutan:"Kaptanıderyâ Piyâle Paşa · Trablusgarp beylerbeyi Turgut Paşa (Reis) · Uluç Ali Reis", mevcut_toplam:"bilinmiyor", piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:120, notlar:"120 kadırga." },
    { ad:"İspanya yönetiminde müttefik Hıristiyan donanması", komutan:"bulunamadı — okunan iki TDV maddesi komutan adı vermiyor", mevcut_toplam:"Osmanlı donanmasından kalabalık (kaynakta sayı yok)", piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"'Cerbe' maddesi ~70 gemi batırıldı/~20 ele geçirildi der; 'Piyâle Paşa' maddesi 19 kadırga + 26 barça der — iki TDV maddesi arasında ayrılık, taraf seçilmedi." }
  ],
  kaynak:"TDV: cerbe (DİA 7, 1993, s. 391-392) · TDV: piyale-pasa (DİA 34, 2007, s. 296-297)", bag_ekokuma:"savas-cerbe-1560" },

{ id:"kunye-inebahti-1571", savas_ad:"İnebahtı (Lepanto)", savas_t:"1571-10-07", tur:"deniz",
  baslik:"İnebahtı Deniz Savaşı (7 Ekim 1571)",
  tarih_metin:"7 Ekim 1571 · 17 Cemâziyelevvel 979",
  taraflar:[
    { ad:"Osmanlı donanması", devlet_id:"osmanli", komutan:"Kaptanıderyâ Müezzinzâde Ali Paşa · donanma serdarı Pertev Paşa · Cezayir beylerbeyi Uluç Ali Paşa", mevcut_toplam:25000, piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:230, kayip:"yaklaşık 20.000 ölü, ~190 gemi battı ya da ele geçti" },
    { ad:"Kutsal İttifak donanması (Papalık · Venedik · İspanya)", komutan:"Don Juan (İspanya) · Sebastiano Veniero (Venedik) · Marcantonio Colonna (Papalık)", mevcut_toplam:37000, piyade:"yok (deniz muharebesi)", suvari:"yok (deniz muharebesi)", top:"bilinmiyor", tufek:"bilinmiyor", gemi:243, notlar:"İki donanmanın gemi/asker sayıları kaynaklarda oldukça farklı verilir; buradaki TDV'nin yaklaşık değerleridir." }
  ],
  kaynak:"TDV: inebahti-deniz-savasi (DİA 22, 2000, s. 287-289)", bag_ekokuma:"savas-inebahti-1571" },

{ id:"kunye-kandiye-girit-1669", savas_ad:"Kandiye kuşatması", savas_t:"1648-05-01", tur:"kusatma",
  baslik:"Kandiye'nin teslimi ve Girit Savaşı'nın sonu (6 Eylül 1669)",
  tarih_metin:"9 Rebîülâhir 1080 · 6 Eylül 1669 (teslim anlaşmasının imzası)",
  uyari:"savaslar.js kaydı t:1648-05-01 taşıyor (21 yıllık kuşatmanın BAŞLANGICI, 'bitis:' alanı yok); bu künyedeki sayılar 1669'daki TESLİM anına ait, bkz. dosya başı ③(e).",
  taraflar:[
    { ad:"Osmanlı Devleti", devlet_id:"osmanli", komutan:"Sadrazam Köprülüzâde Fâzıl Ahmed Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor" },
    { ad:"Venedik Cumhuriyeti (Kandiye garnizonu)", komutan:"okunan TDV maddelerinde adı geçmiyor", devlet_id:"venedik", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor (kalenin her tabyasında 'çok sayıda top' vardı, sayı verilmiyor)", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Teslim sırasında şehirde neredeyse kimse kalmamıştı: Paul Rycaut'a göre 5 Venedikli + yaşlı Yahudi/Rumlarla otuz kadar kişi." }
  ],
  kaynak:"TDV: girit · TDV: kandiye", bag_ekokuma:"savas-kandiye-girit-1669" },

{ id:"kunye-kamanice-1672", savas_ad:"Kamaniçe'nin fethi", savas_t:"1672-08-27", tur:"kusatma",
  baslik:"Kamaniçe'nin fethi (27 Ağustos 1672)",
  tarih_metin:"3 Cemâziyelevvel 1083 · 27 Ağustos 1672",
  uyari:"ÖLÇÜLDÜ: data/savaslar.js içinde bu muharebe için HİÇBİR kayıt yok (ad/t araması sıfır sonuç verdi) — yalnız 'topraklar:' alanında (Bucaş antlaşması) dolaylı geçiyor. savas_ad/savas_t burada BULUNAMAYAN bir hedefi işaret ediyor; savaslar.js'e bu kaydın eklenmesi ayrı bir iştir (bu dosyanın kapsamı dışı, 1.MURAT'a bildirildi).",
  taraflar:[
    { ad:"Osmanlı Devleti", devlet_id:"osmanli", komutan:"IV. Mehmed (ordunun başında) · Sadrazam Merzifonlu/Fâzıl Ahmed Paşa hattı", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor (kuşatma sırasında) — fetih SONRASI garnizonda 200'den fazla top vardı", tufek:"bilinmiyor", gemi:"yok", notlar:"Kuşatma 9 gün sürdü. Fetih sonrası: dört sancaklı Kamaniçe eyaletinde 500'den fazla tımar, garnizon ~6000 — bunlar SAVAŞ ANI değil sonrası kuvvetidir." },
    { ad:"Lehistan", devlet_id:"lehistan", komutan:"okunan TDV maddesinde adı geçmiyor", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: kamanice (Dariusz Kolodziejczyk)", bag_ekokuma:"savas-kamanice-1672" },

{ id:"kunye-ii-viyana-1683", savas_ad:"II. Viyana Kuşatması", savas_t:"1683-09-12", tur:"meydan",
  baslik:"İkinci Viyana Kuşatması ve Kahlenberg Bozgunu (14 Temmuz - 12 Eylül 1683)",
  tarih_metin:"Kuşatma 14 Temmuz 1683'te başladı, karar savaşı 12 Eylül 1683",
  uyari:"ÖLÇÜLDÜ: savaslar.js'te bu savaş İKİ AYRI kayıtla geçiyor ve adlar yalnız BÜYÜK/KÜÇÜK HARFLE ayrılıyor — t:1683-07-14 ad:'II. Viyana kuşatması' (küçük k, tur:kusatma, yalnız Habsburg tarafı) ve t:1683-09-12 ad:'II. Viyana Kuşatması' (büyük K, tur:meydan, taraf:[osmanli,habsburg,lehistan], galip:habsburg). Bu künye ikincisine (kararı veren muharebe) bağlandı; ad alanındaki büyük/küçük harf farkı kod açısından İKİ FARKLI STRING'dir (bkz. D054/D064 ailesi — büyük/küçük harf duyarlı arama aynı savaşı ayrı ayrı kaydedebilir).",
  taraflar:[
    { ad:"Osmanlı ordusu (kuşatma + Kahlenberg savunması)", devlet_id:"osmanli", komutan:"Sadrazam Merzifonlu Kara Mustafa Paşa", mevcut_toplam:"TDV'nin verdiği rakam 500.000 (350.000 muharip + 150.000 geri hizmet) — TDV bunun ABARTILI olduğunu belirtir, güvenilir bir alt sınır verilmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"19 kolunburna + yaklaşık 120 şâhî darbzen (kuşatma topçusu)", tufek:"bilinmiyor", gemi:"yok", kayip:"geri çekilirken yaklaşık 300 top ve 15.000'e yakın çadır terk edildi", notlar:"Terk edilen 300 top RAKAMI, savaş öncesi kullanılan topçu mevcuduyla AYNI SAYI DEĞİL — TDV ikisini ayrı verir." },
    { ad:"Kutsal İttifak kurtarma ordusu (Leh · Avusturya · Alman)", komutan:"Leh Kralı Jan (III.) Sobieski · Dük Charles von Lothringen", mevcut_toplam:"Leh kuvveti 100.000; Avusturya/Alman takviyesiyle birlikte 100.000'i aştı", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"Leh ordusunda yaklaşık 200 (irili ufaklı)", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: merzifonlu-kara-mustafa-pasa", bag_ekokuma:null }

];

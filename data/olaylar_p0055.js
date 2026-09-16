// =====================================================================
// PAKET P04 · BALKAN — kronoloji maddeleri (14 Eylül 2026, 1.MURAT sevki)
// Oturum: P04-BALKAN · plan denetim/PAKET-SINIF2-0914.md §P04
// Rapor: denetim/P04-BALKAN-0914.md · Trakya önerisi: denetim/YAMA-TRAKYA-0914.json
//
// AD ALANI (§7): data/olaylar_p0055.js → window.OLAYLAR_P0055
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//    DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
//
// Bu dosya YALNIZ bu partide veriye İNEN geçişlerin maddelerini taşır:
//   ① 0042/H-0021           Dejanoviç vasallığı 1371 — `v:` zaten veride
//                           (Köprülü · İştip · Ustrumca · Doyran), maddesi
//                           yoktu (D147: kırılma "Çirmen Savaşı" maddesine
//                           düşüyor ama o madde prensliği adıyla anmıyor)
//   ② 0042/H-0034 · H-0042  Şehirköy 1412 — yerlesimler_serhat.js
//   ③ 0035/H-0063           Herseknovi 1538 işgali + 10 Ağustos 1539 geri
//                           alınışı — yerlesimler_ek.js isg[0].t
//
// Trakya fetih sırası (0025/H-0009 · 0030/H-0009 · 0042/H-0018/19) maddeleri
// BURADA DEĞİL: yerleşim kayıtları kilitli dosyalarda (yerlesimler.js ·
// ek24 · ek29) ⇒ maddeler YAMA-TRAKYA-0914.json'da, yamayla AYNI partide
// inecek. Erken inen bir fetih maddesi haritayla çelişirdi (D059).
//
// TARİH KAYNAKTAN (§4 "ATLAS REFERANS DEĞİLDİR"). Gün yoksa YYYY-01-01 +
// kesinlik:"yil"; pencere şartı gereken yerde kırılma günü devralındı ve
// ic_not_gun'da bildirildi.
// =====================================================================

window.OLAYLAR_P0055 = [

// ── ① 1371 · Dejanoviç Prensliği Osmanlı vasalı ─────────────────────────
{ t:"1371-09-26", kesinlik:"yil", k:"vassal", kapsam:"ic", etiket:["siyaset","konu-siyasi"],
  b:"Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu",
  gun:"1371 — Meriç (Çirmen) Savaşı'nın ardından; kaynak gün vermiyor",
  yer:"Köstendil (Velbujd), Ustrumca, İştip, Doyran, Köprülü (Veles)", yer_id:"Ustrumca (Strumica)",
  kisiler:"Konstantin Dejanoviç, Jovan Dejanoviç, I. Murad",
  d:"Meriç (Çirmen) yenilgisiyle Sırp devleti parçalanınca Jovan ve Konstantin Dejanoviç kardeşler, merkezi Velbujd (sonraki adıyla Köstendil) olan ve İştip, Ustrumca, Doyran ile Köprülü yöresini içine alan kendi prensliklerini kurdu. Jovan'ın kısa süre sonra ölmesiyle Konstantin I. Murad'ın hükümdarlığını tanıyarak Osmanlı vasalı oldu; prenslik bu bağla yarı bağımsız yaşadı. Konstantin 1395'te Rovine'de Yıldırım Bayezid'in saflarında ölünce ülkesi savaşsız Osmanlı idaresine geçti ve Kostadin-ili adıyla sancak oldu.",
  ic_not_gun:"TDV kostendil (M. Kiel): «Konstantin Dejanović 1371'de I. Murad'ın hükümdarlığını tanıyarak» — YIL. 1371-01-01 yazılsaydı madde savaştan önce düşerdi, veride v: 1371-09-26'da başlıyor ⇒ §4 pencere şartı: Çirmen Savaşı günü devralındı (TDV murad-i: 15 Rebîülevvel 773 / 26 Eylül 1371). Bu gün SAVAŞIN günüdür, vasallığın kendi günü DEĞİL.",
  ic_not_d:"TDV ustrumca: «Jovan'ın kısa bir süre sonra ölümüyle Konstantin bir Osmanlı vasalı haline geldi» · TDV doyran: «Bu prenslik Osmanlılar'a bağlı bir beylik haline geldi» · TDV koprulu: «1371'den beri Osmanlı vasalı olan». 🟡 İnce fark (çelişki değil): ustrumca vasallığı Jovan'ın ölümüne bağlıyor ve yıl vermiyor; kostendil 1371 diyor. 🔴 AYRI BULGU: Köstendil kaydı (yerlesimler.js, kilitli) 1371-1374 bulgaristan · 1374-1383 d:vassal gösteriyor; TDV kostendil onu prensliğin merkezi sayıyor ⇒ öneri YAMA-TRAKYA-0914.json.",
  kaynak:"kostendil · ustrumca · doyran · koprulu", duygu:["📋"] },

// ── ② 1412 · Şehirköy Sırp Despotluğu'na geçti ──────────────────────────
{ t:"1412-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","konu-askeri"],
  b:"Sırp Despotu Stefan Lazareviç Şehirköy'ü (Pirot) aldı",
  gun:"1412 — kaynak gün vermiyor",
  yer:"Şehirköy (Pirot)", yer_id:"Şehirköy (Pirot)",
  kisiler:"Stefan Lazareviç, Mûsâ Çelebi, Çelebi Mehmed",
  d:"Fetret Devri'nde Rumeli'ye hâkim olan Mûsâ Çelebi ile kardeşi Çelebi Mehmed arasındaki mücadele sürerken Sırp Despotu Stefan Lazareviç, Niş ile Sofya arasındaki yol üzerinde bulunan Şehirköy kalesini ele geçirdi ve Mûsâ Çelebi'nin saldırısına karşı elinde tuttu. Ertesi yıl Mûsâ'nın ölümüyle Çelebi Mehmed kaleyi resmen vasalı Stefan'a bıraktı; Osmanlılar Şehirköy'ü ancak 1428'de Lazareviç'in ölümünden sonra geri aldı.",
  ic_not_gun:"TDV sehirkoy: «1412'de Sırp Despotu Stefan Lazareviç tarafından alındı» — YIL. Gün yok ⇒ 1412-01-01 + kesinlik:'yil' (§4). Önceki veri devri 1413-07-05'e koymuştu çünkü 1412-01-01'de madde yoktu; bu madde o boşluğu kapatıyor ve veri kaynağın yılına çekildi.",
  ic_not_d:"1402-1412 arası Şehirköy'ün Fetret dönemleri (Emîr Süleyman / Mûsâ Çelebi) §4 ŞARTLI KOMŞU GÜNÜ ile yazıldı: ① günler TDV musa-celebi'nin kendi günleri (13 Şubat 1410 Yanbolu · 15 Haziran 1410 Kosmidion · 17 Şubat 1411 Emîr Süleyman'ın ölümü) ② Şehirköy için kaynakta Fetret günü YOK ③ aynı süreç (Rumeli'de şehzade mücadelesi), aynı günleri taşıyan en yakın kayıt Niş 59 km ④ burada ve yerleşim notunda yazılı. TDV sehirkoy 1389'da Sırpların kaleyi yakıp boşalttığını, kalenin sonra yeniden yapıldığını ve 1412'de Stefan'ın aldığını anlatıyor ⇒ 1402-1412 Osmanlı Rumelisi içinde. 🔴 H-0042 ENKLAVI BU DOSYAYLA TAM KAPANMAZ: TDV nis «816'da (1413) Çelebi Sultan Mehmed, Niş'i vasalı Stefan Lazareviç'e verdi»; Niş kaydı (yerlesimler.js, kilitli) 1413-1428 Osmanlı ⇒ öneri YAMA-TRAKYA-0914.json. 🟡 1412-1413 arası Şehirköy tek başına Sırp görünür (Niş Mûsâ Çelebi'de) — kaynak bu arada Niş için bir şey söylemiyor.",
  kaynak:"sehirkoy · musa-celebi · nis", duygu:["⚔️"] },

// ── ③a 1538 · Herseknovi (Castelnuovo) zaptedildi ───────────────────────
{ t:"1538-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Herseknovi (Castelnuovo) Andrea Doria tarafından zaptedildi",
  gun:"1538 — kaynak ay ve gün vermiyor",
  yer:"Herseknovi (Nova / Castelnuovo, bugünkü Herceg Novi)", yer_id:"Herseknovi (Herceg Novi)",
  kisiler:"Andrea Doria",
  d:"Osmanlı'ya karşı birleşen müttefik donanmanın kumandanı Andrea Doria, Adriyatik kıyısında Dalmaçya'nın güneyindeki Herseknovi (Castelnuovo) kalesini ele geçirdi. Aynı yıl Dalmaçya'da Venedikliler de Osmanlı elindeki bazı kasabaları almış, Osmanlı kuvvetleri başka kalelerle karşılık vermişti. Kale bir yıl sonra geri alındı; Osmanlı hükümranlığı hukuken sürdüğü için bu ara dönem haritada taralı işgal örtüsüyle gösterilir.",
  ic_not_gun:"TDV dalmacya: «Castelnuovo Kalesi ise aynı yıl Andrea Doria tarafından zaptedilmiş» — «aynı yıl» cümleden önce anlatılan 1538 Venedik taarruzunun yılı. Ay/gün BULUNAMADI (aranacak: C. H. Imber, Archivum Ottomanicum IV, 1972, s. 203-216 — okunmadı). Veride isg f:1538-01-01 zaten vardı.",
  ic_not_d:"YAMA-A6C M-0063-2 taslağındaki «Preveze Savaşı'ndan sonra düştü» yan cümlesi YAZILMADI: TDV barbaros-hayreddin-pasa yalnız «daha önce ele geçirilen» diyor, Preveze'ye göre sırayı vermiyor. Taslaktaki «İspanyol garnizonu» ifadesi de bu oturumun okuduğu TDV gövdelerinde yok — yazılmadı (isg d:'ispanya' önceki oturumun kaydı, dokunulmadı).",
  kaynak:"dalmacya · barbaros-hayreddin-pasa", duygu:["⚔️"] },

// ── ③b 10 Ağustos 1539 · Herseknovi geri alındı ─────────────────────────
{ t:"1539-08-10", kesinlik:"gun", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Herseknovi'nin (Castelnuovo) Barbaros Hayreddin Paşa tarafından geri alınması",
  gun:"10 Ağustos 1539",
  yer:"Herseknovi (Nova / Castelnuovo)", yer_id:"Herseknovi (Herceg Novi)",
  kisiler:"Barbaros Hayreddin Paşa, Gazi Hüsrev Bey",
  d:"Preveze zaferinin ardından Orta Akdeniz'de de üstünlüğü ele geçiren Osmanlılar, bir yıl önce Andrea Doria'nın aldığı Adriyatik kıyısındaki Nova (Castelnuovo) kalesine yöneldi. Barbaros Hayreddin Paşa ile Bosna Beyi Gazi Hüsrev Bey'in birlikte yürüttüğü harekât sonunda kale geri alındı ve işgal sona erdi.",
  ic_not_gun:"TDV barbaros-hayreddin-pasa: «Nova da (Castelnuova) kolaylıkla geri alındı (10 Ağustos 1539)». TDV dalmacya: «bir yıl sonra Barbaros Hayreddin Paşa ve Bosna Beyi Gazi Hüsrev Bey'in gayretiyle». 🟡 FARK: YAMA-A6C Museo del Ejército'nun son saldırıyı 7 Ağustos 1539'a koyduğunu bildiriyor — §4 TDV esas; bu oturum o sayfayı yeniden OKUMADI.",
  kaynak:"barbaros-hayreddin-pasa · dalmacya", duygu:["🎉"] },

// ── ④ YAMA-TRAKYA-0914 MT-6 · 1369 · Timurtaş Tunca vadisi (UYGULA 16 Eylül 2026) ──
{ t:"1369-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Timurtaş Bey Tunca vadisinde Kızılcaağaç Yenicesi (Elhova) ve Yanbolu'yu aldı",
  gun:"1369 — kaynak «herhalde 1369 bahar ve yazı» diyor",
  yer:"Elhova (Kızılcaağaç Yenicesi), Yanbolu", yer_id:"Elhova (Elhovo)",
  kisiler:"Kara Timurtaş Bey, I. Murad",
  d:"I. Murad'ın Bulgaristan ve Bizans'a karşı yürüttüğü harekât sırasında Kara Timurtaş Bey Tunca vadisine gönderildi; Kızılcaağaç Yenicesi ile Yanbolu'yu ele geçirip çok miktarda ganimetle Edirne'ye döndü.",
  ic_not_gun:"TDV murad-i «herhalde 1369 bahar ve yazı»; TDV timurtas-pasa «1367-1369 arası»; TDV yanbolu eski görüş 1365, yeni görüş 1373 (çelişki bildirildi, veride Yanbolu noktası YOK).",
  kaynak:"murad-i · timurtas-pasa", duygu:["🎉"] },

];

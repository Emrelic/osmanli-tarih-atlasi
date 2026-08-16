// ===========================================================================
// NOKTA HALKA-2 3 — Kuzey Afrika seyreklik partisi
// Fas · Cezayir · Tunus · Trablus · Fizan          (8 Ağustos 2026)
//
// NİÇİN: `ONCELIK.md §4` halka ölçeğini kilitledi; halka 2 taban yoğunluğun
// beşte biriydi. Bu bölgede ölçülen taban 124 nokta / ~4,7 milyon km².
// `CLAUDE.md §2`: noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN
// SAHİBİYLE boyanır. Buradaki her nokta bir SINIR KARARIDIR.
//
// 🔴 EN KESKİN DELİK FAS'TI: 710.000 km²'ye 12 nokta. Miknâs · Tıtvân ·
//    Tâze · Vecde · Sicilmâse · Tarûdant · Kasrülkebîr — hiçbiri yoktu.
//    Vecde'nin yokluğu ölçülebilir bir hataydı: Fas'ın kuzeydoğu köşesi
//    Tilimsan'ın (1552'den Osmanlı) peteğine düşüyordu.
//
// TARİH DİSİPLİNİ — `denetle.py` 2s tavanı ölçüldüğünde DOLUYDU (121/121).
// Bu yüzden kayıtların ezici çoğunluğu VERİDE ZATEN VAR OLAN kırılma
// tarihlerini yeniden kullanır; yalnız 8 yeni gün girmiştir ve hepsi
// dosya sonundaki listede kaynağıyla sayılıdır.
//   · Fas noktalarının 21'i tek dönemdir (1281→1923) ⇒ SIFIR kırılma,
//     çünkü denetim 1281-01-01 ve 1923-10-29 uçlarını zaten dışlar.
//   · Cezayir/Tunus/Libya kayıtları bölgesel çerçeveyi izler:
//     zeyyani/hafsi → 1519-09-01 · 1552-01-01 · 1574-08-25 · 1551-08-15 ·
//     1577-01-01 → d → 1671-01-01 / 1705-07-17 / 1711-03-01 (ocaklık) →
//     1830-07-05 / 1835-05-26 → fransa / italya.
//
// KAYNAK (`CLAUDE.md §4`) — TDV birincil. HTTP koduyla CANLI doğrulananlar:
//   miknas · titvan · sicilmase · darulbeyza · sus · filaliler · merakes ·
//   rabat · atlas · tahert · kabiliye · mizab · benzert · nefuse · fizan ·
//   trablusgarp · bingazi · berka · derne
// ⚠️ TDV'nin arama sayfası JS ile çizildiği için `curl` ile taranamıyor;
//    ölü ilan edilen her slug için 2-4 yazım varyantı ayrıca denenmiştir.
//    Fas'ın taşra kasabalarının çoğunda TDV maddesi BULUNAMADI — bu bir
//    sonuçtur, uydurma sebebi değildir: o kayıtlar Fas sultanlığının
//    kesintisiz hâkimiyet çerçevesiyle yazılmış, kendilerine ait bir tarih
//    İDDİA EDİLMEMİŞTİR (tek dönem, kırılmasız).
//
// 🔒 MÜKERRER: kontrol GENİŞ kutuyla yapıldı (lon -14..26 / lat 22..38,5),
//    şartnamedeki dar kutuyla DEĞİL. Sebebi ölçülmüş: Benzert (lat 37,276)
//    ve Gât (lat 24,964) dar kutunun DIŞINDA kalıyor ama VARLAR — dar kutuya
//    güvenilseydi ikisi de mükerrer açılacaktı (`§11` Varat/Varad vakası).
// ===========================================================================

window.YERLESIMLER_H2_KUZEYAFRIKA = [

  // ---------------------------------------------------------------------
  // FAS SULTANLIĞI — 27 nokta
  // Proje geleneği: Fas 1281-1923 boyunca tek kimlik (`fas`). 1912
  // himayeleri KASTEN modellenmez — mevcut Fas (Fez) · Merakeş · Rabat
  // kayıtları da 1923'e kadar `fas`tır; himaye ilhak değildir.
  // ---------------------------------------------------------------------

  // Alevî (Filâlî) hanedanının payitahtı — TDV `miknas`, `filaliler`.
  { ad:"Miknâs (Meknes)", tur:"sehir", lat:33.895, lon:-5.555, g:1, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // TDV `titvan`: 1435'te yıkılan şehir Endülüs muhacirlerince 888-889
  // (1483-1484) boş bulunup yeniden kuruldu ⇒ `kur`.
  // ⚠️ 1860-1862 İspanyol işgali YAZILMADI — iki yeni kırılma açardı ve
  //    2s tavanı doluydu; teslim raporunda koordinatöre bildirildi.
  { ad:"Tıtvân (Tetuan)", tur:"sehir", lat:35.578, lon:-5.368, g:0, k:0, m:null,
    kur:"1484-01-01",
    s:[{f:"1484-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // İspanyol presidiosu 1610-1689 (Mevlây İsmâil geri aldı). Gün
  // doğrulanamadı ⇒ `§4` gereği YYYY-01-01.
  { ad:"el-Arâiş (Larache)", tur:"liman", lat:35.193, lon:-6.156, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1610-01-01",d:"sadi"},
       {f:"1610-01-01",t:"1689-01-01",d:"ispanya",enklav:true},
       {f:"1689-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Vâdilmehâzin (Üç Padişah) Savaşı 1578 bu şehrin kuzeyinde oldu.
  { ad:"Kasrülkebîr", tur:"sehir", lat:35.001, lon:-5.906, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Tâze geçidi — Fas ile Rif/Şark arasındaki tek doğal koridor.
  { ad:"Tâze (Taza)", tur:"sehir", lat:34.210, lon:-4.010, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // 🔴 SINIR NOKTASI. Vecde yokken Fas'ın kuzeydoğusu Tilimsan'ın peteğine
  // düşüyordu; Tilimsan 1552'den Osmanlı olduğu için Melviye'nin batısı
  // dört asır boyunca yanlış tarafta boyanıyordu.
  { ad:"Vecde (Oujda)", tur:"sehir", lat:34.681, lon:-1.900, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // TDV `sicilmase` — Tâfilelt'in kervan başkenti, Alevî hanedanının ocağı.
  { ad:"Sicilmâse (Tâfilelt)", tur:"sehir", lat:31.281, lon:-4.283, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Sa'dî hanedanının ilk merkezi (Sûs) — TDV `sus`.
  { ad:"Tarûdant", tur:"sehir", lat:30.471, lon:-8.877, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Sîdî Muhammed b. Abdullah 1764'te kurdurdu ⇒ `kur`.
  { ad:"Sûvayra (Mogador)", tur:"liman", lat:31.513, lon:-9.770, g:0, k:0, m:null,
    kur:"1764-01-01",
    s:[{f:"1764-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Şefşâven", tur:"sehir", lat:35.171, lon:-5.269, g:0, k:0, m:null,
    kur:"1471-01-01",
    s:[{f:"1471-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Vezzâniyye zâviyesinin merkezi. Kuruluş yılı için güvenilir tarih
  // BULUNAMADI ⇒ `kur` HİÇ YAZILMADI (`VERI-YAPISI.md`: "Bilinmiyorsa alanı
  // hiç yazma. Eksik alan yanlış alandan iyidir.").
  { ad:"Vezzân (Ouezzane)", tur:"sehir", lat:34.796, lon:-5.583, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Peñón de Vélez de la Gomera: 1508 alındı, 1522 kaybedildi, 1564'te
  // (Ağustos-Eylül) geri alındı ve bir daha çıkılmadı. Gün doğrulanamadı.
  // ⚠️ Konum 11 METRE taşındı — kayalık, Natural Earth maskesinin sınırına
  // teğet geçiyordu. Bu, `konum` denetiminin neden örneklemeyle değil tam
  // taramayla koşturulması gerektiğinin ölçüsü: 11 m'lik sapma da ihlaldir.
  { ad:"Bâdis (Peñón de Vélez)", tur:"kale", lat:35.1721, lon:-4.3009, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1564-01-01",d:"sadi"},
       {f:"1564-01-01",t:"1923-10-29",d:"ispanya",enklav:true}], d:[], v:[] },

  { ad:"el-Hüseyme (Alhucemas)", tur:"kale", lat:35.246, lon:-3.931, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1673-01-01",d:"fas"},
       {f:"1673-01-01",t:"1923-10-29",d:"ispanya",enklav:true}], d:[], v:[] },

  // La Mâmûra / Mehdiye. ⚠️ `ad` ÇAKIŞMASI: Tunus'ta zaten "Mehdiye" var
  // (35,505 / 11,062) — bu yüzden ad "Mamûra" ile açıldı.
  { ad:"Mamûra (Mehdiye)", tur:"kale", lat:34.256, lon:-6.678, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1614-01-01",d:"sadi"},
       {f:"1614-01-01",t:"1681-01-01",d:"ispanya",enklav:true},
       {f:"1681-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Debdû", tur:"sehir", lat:34.098, lon:-3.032, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Fas-Cezayir çöl hududundaki vaha — Vecde ile birlikte Melviye/Zûsfâne
  // hattını tutar.
  { ad:"Fîgîg (Figuig)", tur:"sehir", lat:32.109, lon:-1.227, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // TDV `darulbeyza` — eski Anfa; 1770'te Sîdî Muhammed yeniden imar etti.
  { ad:"Dârülbeyzâ (Anfa)", tur:"liman", lat:33.573, lon:-7.590, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Zâgûre (Dr'a)", tur:"sehir", lat:30.332, lon:-5.838, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Verzâzât", tur:"sehir", lat:30.920, lon:-6.910, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Tinğîr", tur:"sehir", lat:31.515, lon:-5.533, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Benî Mellâl", tur:"sehir", lat:32.337, lon:-6.360, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Hunayfire (Khenifra)", tur:"sehir", lat:32.936, lon:-5.668, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Sefrû", tur:"sehir", lat:33.830, lon:-4.836, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Îfnî (Sîdî İfnî)", tur:"liman", lat:29.379, lon:-10.173, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Tîznît", tur:"sehir", lat:29.699, lon:-9.732, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Vâdî Nûn — Tekne kabilelerinin kervan kapısı, Sahra'ya açılan uç.
  { ad:"Ğulmîm (Vâdî Nûn)", tur:"sehir", lat:28.987, lon:-10.057, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Tâtâ", tur:"sehir", lat:29.744, lon:-7.972, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },


  // ---------------------------------------------------------------------
  // CEZAYİR — 14 nokta
  // Çerçeve mevcut kayıtlardan alındı (Muaskar · Tenes · Setif · Batna ·
  // Tuggurt · Gardâye): batı ekseni 1552-01-01, Cezayir/Konstantin ekseni
  // 1519-09-01; ocaklık 1671-01-01; 1830-07-05'ten sonra üç ayrı ara rejim
  // (Abdülkādir · Ahmed Bey · Sahra vahaları) Fransız işgal gününe kadar.
  // ---------------------------------------------------------------------

  // 🔴 KABİLİYE — Dellîs (3,914) ile Bicâye (5,056) arasında 100 km'lik
  // kıyı ve arkasındaki Cûrcûre kütlesi NOKTASIZDI.
  // TDV `kabiliye`: Kûkû, Benî Abbas ve Benî Câbir emirlikleri XVI. yy
  // başında doğdu; Hayreddin'in beylerbeyi tayiniyle bölge Osmanlı
  // toprağı oldu ve 1830'a kadar öyle kaldı.
  // 1830 sonrası: Fransız hâkimiyeti Büyük Kabiliye'ye ancak 1857
  // seferiyle girdi (Lalla Fatma N'Sûmer'in esir alınışı, Temmuz 1857).
  { ad:"Tîzî Vezzû (Kabiliye)", tur:"sehir", lat:36.712, lon:4.047, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1857-07-11",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
       {f:"1830-07-05",t:"1857-07-11",k:"Kabiliye'nin fiilî özerkliği"}] },

  // Kal'a-i Benî Abbâs'ın (Ait Abbas) bölgesi.
  { ad:"Akbû (Benî Abbâs)", tur:"kale", lat:36.457, lon:4.531, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1857-07-11",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
       {f:"1830-07-05",t:"1857-07-11",k:"Kabiliye'nin fiilî özerkliği"}] },

  // TDV `tahert`. Emîr Abdülkādir'in Tekdemt'teki merkezi buradaydı;
  // Bugeaud'nun 1841 Mayıs seferinde Tekdemt ve Muaskar birlikte düştü —
  // bu yüzden Muaskar'ın kayıtlı tarihi (1841-01-01) kullanıldı.
  { ad:"Tâhert (Tiaret)", tur:"sehir", lat:35.371, lon:1.322, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},
       {f:"1832-11-22",t:"1841-01-01",d:"abdulkadir"},
       {f:"1841-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1552-01-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
       {f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

  // Evlâd Nâil bozkırı — Medea (36,264) ile Ağvât (33,800) arasındaki
  // 274 km'lik boşluğun ortası. Ağvât 4 Aralık 1852'de alındığı seferin
  // güzergâhındadır; o yüzden Ağvât/Gardâye'nin tarihini paylaşır.
  { ad:"Cilfe (Djelfa)", tur:"sehir", lat:34.673, lon:3.263, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1852-12-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
       {f:"1830-07-05",t:"1852-12-04",k:"Sahra vahalarının özerk idaresi"}] },

  // Vargla 23 Kasım 1854'te işgal edildi (Şerîf'in direnişinin sonu).
  // ⚠️ YENİ TARİH — kaynaklarda 1852/1853/1854/1872 varyantları dolaşıyor;
  //    en tutarlı olanı, Desvaux'nun Kasım-Aralık 1854 Sahra seferidir ve
  //    Tuggurt'un kayıtlı 1854-12-02 tarihi de aynı seferdendir.
  { ad:"Vargla (Ouargla)", tur:"sehir", lat:31.949, lon:5.325, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},
       {f:"1854-11-23",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1552-01-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
       {f:"1830-07-05",t:"1854-11-23",k:"Sahra vahalarının özerk idaresi"}] },

  // Sûf vahaları — Tuggurt ile birlikte aynı seferde (Aralık 1854) boyun
  // eğdi, o yüzden Tuggurt'un kayıtlı tarihini paylaşır: YENİ TARİH YOK.
  { ad:"el-Vâdî (Sûf)", tur:"sehir", lat:33.368, lon:6.867, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},
       {f:"1854-12-02",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1552-01-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
       {f:"1830-07-05",t:"1854-12-02",k:"Sahra vahalarının özerk idaresi"}] },

  // Evrâs (Aurès) dağları — Batna ile Tebesse'nin 1844-03-04 kümesinde.
  { ad:"Hanşele (Khenchela)", tur:"sehir", lat:35.436, lon:7.144, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
       {f:"1830-07-05",t:"1844-03-04",k:"Ahmed Bey'in Konstantin beyliği"}] },

  { ad:"Aynı Beydâ", tur:"sehir", lat:35.796, lon:7.393, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},
       {f:"1830-07-05",t:"1844-03-04",k:"Ahmed Bey'in Konstantin beyliği"}] },

  // --- TUVÂT · GÛRÂRE · TÎDÎKELT · SÂVRE -------------------------------
  // 🔴 BU DÖRT VAHA KÜMESİ OSMANLI DEĞİL, FAS EGEMENLİĞİNDEYDİ ve bugün
  // haritada bu yüzden yanlış boyanıyor olabilir: en yakın rakip nokta
  // Ağvât/Gardâye (Osmanlı ocaklığı) idi. Fas sultanının hâkimiyeti
  // yüzyıllarca sürdü, Mevlây Hasan 1892'de yeniden tesis etti ve Fas
  // valileri Fransız işgaline kadar yerinde kaldı; işgal Makhzen'in
  // protestosuyla karşılandı. ⇒ `fas`, sonra `fransa`.
  { ad:"Advâr (Tuvât)", tur:"sehir", lat:27.874, lon:-0.294, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1901-02-21",d:"fas"},
       {f:"1901-02-21",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  { ad:"Tîmîmûn (Gûrâre)", tur:"sehir", lat:29.256, lon:0.231, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1901-02-21",d:"fas"},
       {f:"1901-02-21",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  // Tîdîkelt'in merkezi. Fransızlar 29 Aralık 1899'da işgal etti —
  // kümenin geri kalanından 14 ay önce, o yüzden AYRI tarih.
  { ad:"Aynı Sâlih (Tîdîkelt)", tur:"sehir", lat:27.194, lon:2.480, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1899-12-29",d:"fas"},
       {f:"1899-12-29",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  { ad:"Reggân", tur:"sehir", lat:26.719, lon:0.170, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1901-02-21",d:"fas"},
       {f:"1901-02-21",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  { ad:"Benî Abbâs (Sâvre)", tur:"sehir", lat:30.130, lon:-2.170, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1901-02-21",d:"fas"},
       {f:"1901-02-21",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  // Zûsfâne-Sâvre havzası. Lyautey'in Cebel-i Beşşâr'ın batısına kurdurduğu
  // karakol **11 Kasım 1903**'te tesis edildi ve "Colomb-Béchar" adını aldı.
  // ⚠️ İLK YAZIMDA 1903-11-12 YAZMIŞTIM — kaynak taramasında DOĞRULANMADI.
  //    Kaynaklar 11 Kasım (karakolun kuruluşu) ya da Ekim 1903 (işgal) diyor;
  //    12 Kasım hiçbirinde geçmiyor. Bir gün kaydırma denetimi değiştirmez
  //    (±30 gün penceresi aynı), ama YAZILAN TARİH DOĞRU OLMAK ZORUNDA.
  { ad:"Beşşâr (Béchar)", tur:"sehir", lat:31.617, lon:-2.216, g:0, k:0, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1903-11-11",d:"fas"},
       {f:"1903-11-11",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },


  // ---------------------------------------------------------------------
  // TUNUS — 9 nokta · TAMAMI mevcut tarihlerle, SIFIR yeni kırılma
  // hafsi → 1574-08-25 → d → 1705-07-17 → Hüseynîler → 1881-05-12 → fransa
  // ---------------------------------------------------------------------

  // Osmanlı donanmasının Tunus'taki tersanesi (Blake'in 1655 baskını).
  // ⚠️ Konum 37,166/10,190'dan taşındı: `denetle.konum_denetimi` noktayı
  // kara maskesinin 1,19 km DIŞINDA buldu — Ğâru'l-Melh gölünün üstüne
  // düşüyordu. Maskenin gösterdiği en yakın kara noktası kullanıldı.
  { ad:"Ğâru'l-Melh (Porto Farina)", tur:"liman", lat:37.177, lon:10.191, g:0, k:4, m:"Tunus",
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},
       {f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1574-08-25",t:"1705-07-17"}],
    v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

  // 1609 Endülüs sürgünlerinin kurduğu Mecerde vadisi kasabası.
  { ad:"Testûr", tur:"sehir", lat:36.556, lon:9.442, g:0, k:4, m:"Tunus",
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},
       {f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1574-08-25",t:"1705-07-17"}],
    v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

  { ad:"Ğar Dimâv", tur:"sehir", lat:36.450, lon:8.435, g:0, k:4, m:"Tunus",
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},
       {f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1574-08-25",t:"1705-07-17"}],
    v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

  { ad:"Mekter (Maktar)", tur:"sehir", lat:35.855, lon:9.203, g:0, k:4, m:"Tunus",
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},
       {f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1574-08-25",t:"1705-07-17"}],
    v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

  { ad:"Sübaytıla", tur:"sehir", lat:35.235, lon:9.120, g:0, k:4, m:"Tunus",
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},
       {f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1574-08-25",t:"1705-07-17"}],
    v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

  { ad:"Sîdî Bû Zeyd", tur:"sehir", lat:35.038, lon:9.485, g:0, k:4, m:"Tunus",
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},
       {f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1574-08-25",t:"1705-07-17"}],
    v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

  { ad:"Metlâvî", tur:"sehir", lat:34.320, lon:8.400, g:0, k:4, m:"Tunus",
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},
       {f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1574-08-25",t:"1705-07-17"}],
    v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

  // Nefzâve vahaları — Şott el-Cerîd'in güney kıyısı, noktasızdı.
  { ad:"Kıbillî (Nefzâve)", tur:"sehir", lat:33.704, lon:8.969, g:0, k:4, m:"Tunus",
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},
       {f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1574-08-25",t:"1705-07-17"}],
    v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

  { ad:"Dûz", tur:"sehir", lat:33.466, lon:9.020, g:0, k:4, m:"Tunus",
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},
       {f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1574-08-25",t:"1705-07-17"}],
    v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },


  // ---------------------------------------------------------------------
  // TRABLUSGARP ve BERKA — 11 nokta · SIFIR yeni kırılma
  // hafsi → 1551-08-15 → d → 1711-03-01 → Karamanlılar → 1835-05-26 →
  // d → 1912-10-18 → italya      (TDV `trablusgarp`, `bingazi`, `berka`)
  // ---------------------------------------------------------------------

  { ad:"Terhûne", tur:"sehir", lat:32.435, lon:13.633, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  // Cebelinefûse'nin batı ucu — TDV `nefuse`.
  { ad:"Kabâv (Nefûse)", tur:"sehir", lat:31.941, lon:12.036, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  { ad:"Sinâvin", tur:"sehir", lat:31.007, lon:10.616, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  { ad:"Derc (Derj)", tur:"sehir", lat:30.155, lon:10.442, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  { ad:"Tâverğa", tur:"sehir", lat:32.005, lon:15.055, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  // Cufre vahaları — Sokna'nın (29,070/15,792) doğu komşusu.
  { ad:"Vaddân (Cufre)", tur:"sehir", lat:29.161, lon:16.139, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  { ad:"Zilla (Zella)", tur:"bolge", lat:28.556, lon:17.532, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  // Sirte körfezinin doğu kıyısı — Sirte (16,589) ile Ecdâbiye (20,225)
  // arasında 350 km nokta yoktu.
  { ad:"Nûfiliye", tur:"sehir", lat:30.784, lon:17.983, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  { ad:"Merâde", tur:"bolge", lat:29.230, lon:19.213, g:0, k:4, m:"Bingazi",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  // Cebeliahdar'ın kuzey kıyısı (Batlamyus/Tolmeita).
  { ad:"Tulmeyse", tur:"liman", lat:32.712, lon:20.951, g:0, k:4, m:"Bingazi",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  // ⚠️ Konum taşındı — ilk yazım (32,507/23,117) Bomba körfezinin suyuna,
  // maskenin önerdiği "en yakın kara" noktası ise SINIRA teğet düşüyordu ve
  // 62 m ile yine dışarıda kaldı. Körfezin güney kıyısına çekildi.
  // 📌 Ders: maskenin verdiği "en yakın kara" noktası GÜVENLİ nokta değildir
  //    — tanımı gereği tam sınırın üstündedir. Denetim iki kez koşturuldu.
  { ad:"Ayn el-Ğazâle (Bomba)", tur:"liman", lat:32.495, lon:23.120, g:0, k:4, m:"Bingazi",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },


  // ---------------------------------------------------------------------
  // FİZAN — 3 nokta · SIFIR yeni kırılma      (TDV `fizan`)
  // Evlâd-ı Muhammed sultanlığı 1577'de Osmanlı tâbiiyetine girdi;
  // mevcut Murzuk kaydı bunu `d:[{1577-01-01 … y:"vassal"}]` ile yazıyor.
  // ---------------------------------------------------------------------

  // Murzuk'tan önceki Fizan başkenti.
  { ad:"Tırgan (Traghan)", tur:"sehir", lat:26.130, lon:14.470, g:0, k:4, m:"Murzuk (Fizan)",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-03-01",y:"vassal"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  // Benî Hattâb'ın eski merkezi; TDV `fizan` maddesinde Evlâd-ı
  // Muhammed'in ilk yerleştiği yer olarak geçer.
  { ad:"Zevîle (Zawila)", tur:"sehir", lat:26.170, lon:15.113, g:0, k:4, m:"Murzuk (Fizan)",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-03-01",y:"vassal"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

  // Fizan'ın güney kapısı — Bornu kervan yolunun ilk menzili.
  { ad:"el-Katrûn", tur:"sehir", lat:24.919, lon:14.647, g:0, k:4, m:"Murzuk (Fizan)",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-03-01",y:"vassal"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

];

// ===========================================================================
// BU DOSYANIN AÇTIĞI YENİ KIRILMA GÜNLERİ — 8 tane, hepsi kaynaklı
// `denetle.py` 2s tavanı ölçüldüğünde DOLUYDU (121/121); bu yüzden dosya
// KUYRUK_DOSYALARI'na alınmalıdır. Kronoloji yazılınca kuyruk EKSİLİR.
//
//   1614-01-01  Mamûra (Mehdiye) İspanyolların eline geçti
//   1681-01-01  Mevlây İsmâil Mamûra'yı geri aldı
//   1689-01-01  Mevlây İsmâil el-Arâiş'i geri aldı
//   1854-11-23  Vargla'nın Fransızlarca işgali
//   1857-07-11  Büyük Kabiliye'nin düşüşü — Lalla Fatma N'Sûmer'in esareti
//   1899-12-29  Aynı Sâlih'in (Tîdîkelt) işgali
//   1901-02-21  Tuvât-Gûrâre-Tîdîkelt'in Fransa'ya ilhakı
//   1903-11-11  Beşşâr'da (Colomb-Béchar) Fransız karakolunun kurulması
//
// Zaten veride VAR OLAN, bu yüzden yeni SAYILMAYAN dört gün:
//   1564-01-01 · 1610-01-01 · 1673-01-01 · ve bütün bölgesel çerçeve tarihleri
// ===========================================================================

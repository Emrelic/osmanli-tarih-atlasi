// ============================================================================
// SAVAŞ KÜNYESİ — 3. parti · KUTU-H3-1015 · 15 Ekim 2026 (0065/H-0016)
// ============================================================================
// Şema: data/savas_kunye_1.js başlığındaki ② (aynı alanlar) + savas_kunye_2.js'in
// `celiski` (okura gösterilen kaynak çelişkisi) alanı. js/app.js 'savas-kunye' ek okuma
// türü SAVAS_KUNYE_1 + _2 + _3'ü birlikte okur; kayıt kronoloji maddesinin `t` günüyle
// (savas_t) bağlanır. `savas_ad` = data/savaslar.js'te AYNI günde kayıt varsa onun adı, yoksa null.
//
// KURALLAR (bu partide uygulanan):
//  · Komutan ve kuvvet YALNIZ kaynak gövdesinde (TDV birincil) okunan ad/rakamdır; yoksa
//    "bilinmiyor". "yok" = o kalem o savaşta anlamsız (ör. 1450 öncesi tüfek, kara savaşında gemi).
//  · Bir sayının neyi tarihlediği (savaş öncesi haber, yeniçeri sayısı, destan rivayeti) notlar'da.
//  · Kaynak günü atlas kronolojisinin gününden ayrılıyorsa `celiski`de açıkça yazıldı; atlas
//    günü bu dosyada DEĞİŞTİRİLMEDİ (bağ alanı olduğu için savas_t = kronoloji günü).
//  · Fetret devri gibi iki tarafı da Osmanlı şehzadesi olan savaşlarda devlet_id konmadı.
// Seçim: kronolojideki k:"savas"/"kusatma" maddelerinden künyesi olmayanlar, Osmanlı'nın
// taraf olduğu meydan savaşı ve kuşatmalar önce, kronolojik sırayla.
// ============================================================================
window.SAVAS_KUNYE_3 = [

{ id:"kunye-savra-1385", savas_ad:"Savra (Saurian) Ovası", savas_t:"1385-09-18", tur:"meydan",
  baslik:"Savra Savaşı (18 Eylül 1385)",
  tarih_metin:"18 Eylül 1385 (TDV arnavutluk); 787/1385 (TDV murad-i, timurtas-pasa)",
  taraflar:[
    { ad:"Osmanlı ordusu (Rumeli kuvvetleri)", devlet_id:"osmanli", komutan:"Rumeli Beylerbeyi Timurtaş (Paşa)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"TDV arnavutluk'a göre Osmanlılar, Balşalar'ın tehdit ettiği Draç beyi Karlo Topya'nın yardım çağrısı üzerine geldi. Timurtaş Devol vadisinden Savra (Muzakiye) ovasına indi (murad-i). Kavala Şâhin de bu seferde en ileri uçlarda bulunuyordu (murad-i)." },
    { ad:"II. Balşa kuvvetleri (Zeta / Balşalar)", devlet_id:"zeta", komutan:"II. Balşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", kayip:"II. Balşa savaşta öldü (TDV arnavutluk); sayı bilinmiyor", notlar:"TDV murad-i ve timurtas-pasa ağır bir yenilgi diyor; rakam vermiyor. Savaştan sonra Topya, Araniti gibi Arnavut senyörleri ve Kastriyotalar Osmanlı tâbiliğine girdi; Balşa'nın halefi II. Curac Balšić Güney Arnavutluk'u bırakıp Zeta'ya çekildi." }
  ],
  kaynak:"TDV: arnavutluk (DİA 3, 1991, s. 383-390) · TDV: murad-i (DİA 31, 2020, s. 156-164) · TDV: timurtas-pasa (DİA 41, 2012, s. 185-186)" },

{ id:"kunye-bileca-1388", savas_ad:"Bileća", savas_t:"1388-08-27", tur:"meydan",
  baslik:"Bileća Savaşı (26/27 Ağustos 1388)",
  tarih_metin:"26 veya 27 Ağustos 1388 (TDV murad-i); 1388 (TDV bosna-hersek)",
  celiski:"TDV murad-i günü kesinleştirmiyor: '26 veya 27 Ağustos 1388'; atlas kronolojisi: 1388-08-27 (iki aday günden biri).",
  taraflar:[
    { ad:"Osmanlı akıncı ordusu", devlet_id:"osmanli", komutan:"Kavala Şâhin (Kuzey Arnavutluk uç beyi)", mevcut_toplam:20000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", kayip:"Akından dönenler pusuya düşürülüp tutsak edildi; Şâhin yaklaşık 5000 erle çekildi (Gazânâme rivayeti, Neşrî üzerinden)", notlar:"20.000 er, akının toplam gücü olarak Osmanlı Gazânâme rivayetinde geçer (TDV murad-i, Neşrî I, 238-242'ye dayanarak); askerin çoğu yağmaya dağıldığından baskın anında Şâhin'in yanında 1000 kadar er kalmıştı. Destansı kaynak; abartı payı olabilir. TDV lala-sahin-pasa: Lala Şâhin 1386 civarında ölmüştü ve Bosna/Arnavutluk'taki Kavala Şâhin ile karıştırılır — komutan Lala Şâhin değildir." },
    { ad:"Bosna Krallığı ordusu", devlet_id:"bosna-kralligi", komutan:"Vlatko Vuković", mevcut_toplam:30000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"30.000 rakamı Osmanlı Gazânâme'sindeki '30.000 gök demirli kâfir' ifadesidir (TDV murad-i, Neşrî'den); bağımsız sayım değil, destansı abartı olabilir. Kral I. Tvrtko dönemi (TDV bosna-hersek). Osmanlı rivayetine göre Curac Balšić akını Bosna kralına haber vermişti." }
  ],
  kaynak:"TDV: murad-i (DİA 31, 2020, s. 156-164) · TDV: bosna-hersek (DİA 6, 1992, s. 297-305) · TDV: lala-sahin-pasa (DİA 27, 2003, s. 77-78)" },

{ id:"kunye-yanbolu-1410", savas_ad:null, savas_t:"1410-02-13", tur:"meydan",
  baslik:"Yanbolu Savaşı (13 Şubat 1410)",
  tarih_metin:"8 Şevval 812 / 13 Şubat 1410 (TDV musa-celebi, mehmed-i); 13 Şubat 1410 (TDV suleyman-celebi-emir)",
  taraflar:[
    { ad:"Mûsâ Çelebi kuvvetleri", komutan:"Mûsâ Çelebi", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Rumeli beyleri ve timarlı sipahilerle, Eflak (Voyvoda Mircea) kuvvetlerinin yardımıyla (TDV musa-celebi); fetret-devri Sırp desteğini de anar. Galip taraf; ardından Edirne'yi aldı." },
    { ad:"Emîr Süleyman Çelebi kuvvetleri", komutan:"Emîr Süleyman'a tâbi Rumeli beylerbeyi (adı TDV musa-celebi'de geçmiyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"TDV musa-celebi: Süleyman o sırada Anadolu'daydı, Mûsâ onun Rumeli beylerbeyini yendi. TDV suleyman-celebi-emir ise Süleyman'ın kendisinin Yanbolu'da yenildiğini yazar — iki madde arasında komuta farkı." }
  ],
  kaynak:"TDV: musa-celebi (DİA 31, 2020, s. 216-217) · TDV: suleyman-celebi-emir (DİA 38, 2010, s. 82-85) · TDV: mehmed-i (DİA 28, 2003, s. 391-394) · TDV: fetret-devri (DİA 12, 1995, s. 480-482)" },

{ id:"kunye-kosmidion-1410", savas_ad:"Kosmidion Savaşı", savas_t:"1410-06-15", tur:"meydan",
  baslik:"Kosmidion Savaşı (15 Haziran 1410)",
  tarih_metin:"15 Haziran 1410 (TDV musa-celebi, fetret-devri); Safer 813 / Haziran 1410 (TDV mehmed-i)",
  taraflar:[
    { ad:"Emîr Süleyman Çelebi kuvvetleri", komutan:"Emîr Süleyman Çelebi", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"bilinmiyor", notlar:"Bizans İmparatoru II. Manuel'in yardımıyla boğazı geçti (musa-celebi). fetret-devri: Mûsâ'nın yanındaki Sırp kuvvetleri son anda Süleyman tarafına geçti. Galip taraf." },
    { ad:"Mûsâ Çelebi kuvvetleri", komutan:"Mûsâ Çelebi", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Eflak ve Sırp kuvvetlerince destekleniyordu (fetret-devri); müttefiki Sırp Despotu Stefan Lazareviç. Yenilince Sırp despotunun yanına (musa-celebi) / Eflak'a (fetret-devri) çekildi." }
  ],
  kaynak:"TDV: musa-celebi (DİA 31, 2020, s. 216-217) · TDV: fetret-devri (DİA 12, 1995, s. 480-482) · TDV: suleyman-celebi-emir (DİA 38, 2010, s. 82-85) · TDV: mehmed-i (DİA 28, 2003, s. 391-394)" },

{ id:"kunye-incegiz-1412", savas_ad:"İnceğiz Savaşı", savas_t:"1412-10-01", tur:"meydan",
  baslik:"İnceğiz Savaşı (Ekim 1412)",
  tarih_metin:"Ekim 1412 (TDV fetret-devri); 815/1412 baharı (TDV musa-celebi)",
  celiski:"TDV fetret-devri: Ekim 1412 (gün yok); TDV musa-celebi: 815/1412 baharı; TDV mehmed-i: Mûsâ'ya karşı 814'te (1411) iki başarısız teşebbüs; atlas kronolojisi: 1412-10-01. Atlas ayı fetret-devri ile uyuşuyor, günü kaynakta yok.",
  taraflar:[
    { ad:"Mûsâ Çelebi kuvvetleri", komutan:"Mûsâ Çelebi", mevcut_toplam:"bilinmiyor", piyade:7000, suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"7000 rakamı Mûsâ'nın emrindeki yeniçeri sayısıdır (TDV fetret-devri); ordunun toplamı değildir. Galip taraf." },
    { ad:"Çelebi Mehmed kuvvetleri", komutan:"Çelebi Mehmed", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"bilinmiyor", notlar:"Bizans İmparatoru II. Manuel ile anlaşarak İstanbul üzerinden Rumeli'ye geçti (Gebze Kadısı Fazlullah aracılığıyla, fetret-devri). Yenilince az bir kuvvetle İstanbul'a kaçıp Bizans gemileriyle Anadolu'ya geçti. Savaştan sonra Mûsâ'nın beylerinden Paşa Yiğit ve Mihaloğlu Sırp despotunun yanına kaçtı (musa-celebi)." }
  ],
  kaynak:"TDV: fetret-devri (DİA 12, 1995, s. 480-482) · TDV: musa-celebi (DİA 31, 2020, s. 216-217) · TDV: mehmed-i (DİA 28, 2003, s. 391-394)" },

{ id:"kunye-camurlu-1413", savas_ad:"Çamurlu Savaşı", savas_t:"1413-07-05", tur:"meydan",
  baslik:"Çamurlu Savaşı (5 Temmuz 1413)",
  tarih_metin:"5 Rebîülâhir 816 / 5 Temmuz 1413 (TDV musa-celebi, mehmed-i); 5 Temmuz 1413 (TDV fetret-devri)",
  taraflar:[
    { ad:"Çelebi Mehmed kuvvetleri ve müttefikleri", komutan:"Çelebi Mehmed · Gazi Evrenos Bey · Paşa Yiğit · Barak Bey · Sinan Bey · Bayezid Paşa · Mihaloğlu Yahşi Bey · Burak Bey", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Paşa Yiğit, Evrenos, Barak ve Sinan beyler Rumeli'de katıldı (musa-celebi). Dulkadıroğlu Nâsırüddin Bey'den yardımcı kuvvet ve bir miktar Rum askeri vardı; Evrenos Sırplar'ı Mehmed safına çekti (fetret-devri). Sırp despotu Sırp, Macar ve Bosna güçleriyle Mûsâ'ya karşı yürümeyi önermişti (musa-celebi). Yanında Tatar ve Türkmen tümenleri vardı (mehmed-i, Neşrî'ye dayanarak). Bayezid Paşa, Mihaloğlu Yahşi ve Burak beyler kaçan Mûsâ'yı yakaladı (fetret-devri). Galip taraf." },
    { ad:"Mûsâ Çelebi kuvvetleri", komutan:"Mûsâ Çelebi", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", kayip:"Kuvvetleri dağıldı; Mûsâ yaralı kaçarken yakalanıp boğduruldu", notlar:"Yanında 'az sayıda yeniçeri' kalmıştı (musa-celebi, fetret-devri) — sayı verilmiyor. Savaştan önce yanında büyük emîrlerden yalnız Beylerbeyi Mihaloğlu Mehmed Bey ile Timurtaş Paşaoğlu Umur Bey kalmıştı (fetret-devri)." }
  ],
  kaynak:"TDV: musa-celebi (DİA 31, 2020, s. 216-217) · TDV: fetret-devri (DİA 12, 1995, s. 480-482) · TDV: mehmed-i (DİA 28, 2003, s. 391-394)" },

{ id:"kunye-belgrad-1456", savas_ad:null, savas_t:"1456-07-22", tur:"kusatma",
  baslik:"Belgrad Kuşatması (1456)",
  tarih_metin:"860 (1456) (TDV mehmed-ii); gün verilmiyor",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"II. Mehmed (Fâtih) · Vezîriâzam Zağanos Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"Padişah alnından yaralandı (TDV mehmed-ii); başka kayıp bilgisi yok", notlar:"Zağanos Paşa'nın kuşatmaya vezîriâzam olarak katıldığı İbn Kemal'e dayanılarak TDV zaganos-pasa'da geçer; madde bu bilgiyle İnalcık'ın 1455'te azledildiği görüşünün çeliştiğini de anar. Fâtih bozgunu önlemek için savaşa atıldı ama kuşatmayı kaldırıp çekildi. TDV mehmed-ii'ye göre Belgrad seferi için top dökerken bir bakır heykel eritilmiş olabilir; top sayısı verilmiyor." },
    { ad:"Macar savunması (Belgrad)", devlet_id:"macaristan", komutan:"János Hunyadi", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"TDV macaristan: Hunyadi Belgrad'ı başarıyla savundu ve kuşatmadan az sonra öldü. Papalık 1456 Belgrad savunması için büyük çaba harcadı (mehmed-ii)." }
  ],
  kaynak:"TDV: mehmed-ii (DİA 28, 2003, s. 395-407) · TDV: belgrad (DİA 5, 1992, s. 407-409) · TDV: macaristan (DİA 27, 2003, s. 286-295) · TDV: zaganos-pasa (DİA 44, 2013, s. 72-73)" },

{ id:"kunye-racova-1475", savas_ad:"Racova (Vaslui) bozgunu", savas_t:"1475-01-10", tur:"meydan",
  baslik:"Racova (Vaslui) Savaşı (Ocak 1475)",
  tarih_metin:"Ramazan 879 / Ocak 1475 (TDV mehmed-ii); 1475 (TDV bogdan)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Rumeli Beylerbeyi Hadım Süleyman Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"Ordu bozguna uğradı; sayı bilinmiyor", notlar:"Fâtih, voyvodayı itaate çağırdıktan sonra bu orduyu gönderdi (mehmed-ii)." },
    { ad:"Boğdan ordusu", devlet_id:"bogdan", komutan:"Voyvoda Stefan cel Mare (Büyük Stefan)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Galip taraf; bu zaferden dolayı papa Stefan'a 'Îsâ'nın pehlivanı' unvanını verdi (bogdan)." }
  ],
  kaynak:"TDV: mehmed-ii (DİA 28, 2003, s. 395-407) · TDV: bogdan (DİA 6, 1992, s. 269-271)" },

{ id:"kunye-akdere-1476", savas_ad:"Akdere (Valea Albă) zaferi", savas_t:"1476-07-26", tur:"meydan",
  baslik:"Akdere (Valea Albă) Savaşı (1476)",
  tarih_metin:"1476 (TDV bogdan: 'ertesi yıl' = 1476); 1476 Temmuz başında İsakça'dan Boğdan'a giriş (TDV mehmed-ii)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"II. Mehmed (Fâtih)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Orduda Eflak kuvvetleri de vardı (bogdan). Eminek idaresindeki Kırım kuvvetleri geriden Boğdan'a girdi (mehmed-ii). Galip taraf; Suceava yakıldı ama kalesi alınamadı, Stefan ele geçmedi. Sonrasında kıtlık ve yeniçeriler arasında veba yüzünden geri çekilme (bogdan)." },
    { ad:"Boğdan ordusu", devlet_id:"bogdan", komutan:"Voyvoda Stefan cel Mare (Büyük Stefan)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"Büyük hezimet (bogdan); sayı bilinmiyor" }
  ],
  kaynak:"TDV: bogdan (DİA 6, 1992, s. 269-271) · TDV: mehmed-ii (DİA 28, 2003, s. 395-407)" },

{ id:"kunye-yenisehir-1481", savas_ad:"Yenişehir Muharebesi (1481)", savas_t:"1481-06-20", tur:"meydan",
  baslik:"Yenişehir Savaşı (22 Haziran 1481)",
  tarih_metin:"22 Haziran (1481) (TDV bayezid-ii); 1481 Haziranı (TDV cem-sultan, gedik-ahmed-pasa)",
  celiski:"TDV bayezid-ii: Yenişehir Savaşı 22 Haziran 1481; atlas kronolojisi: 1481-06-20.",
  taraflar:[
    { ad:"II. Bayezid ordusu", devlet_id:"osmanli", komutan:"II. Bayezid · Gedik Ahmed Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Gedik Ahmed Paşa savaşa son anda yetişti; Hanivaldanus'a göre zaferde büyük payı oldu (TDV gedik-ahmed-pasa). Galip taraf." },
    { ad:"Cem Sultan kuvvetleri", komutan:"Cem Sultan", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Cem Bursa'da kendini padişah ilân etmişti; yenilince Konya'ya, sonra Mısır'a çekildi (cem-sultan, bayezid-ii). Gedik Ahmed Paşa onu Ereğli'ye kadar kovaladı." }
  ],
  kaynak:"TDV: bayezid-ii (DİA 5, 1992, s. 234-238) · TDV: cem-sultan (DİA 7, 1993, s. 283-286) · TDV: gedik-ahmed-pasa (DİA 13, 1996, s. 543-544)" },

{ id:"kunye-gazze-1516", savas_ad:"Gazze (Han Yûnus) Muharebesi", savas_t:"1516-12-21", tur:"meydan",
  baslik:"Gazze (Han Yûnus) Savaşı (21 Aralık 1516)",
  tarih_metin:"21 Aralık 1516 (TDV canbirdi-gazali, hadim-sinan-pasa)",
  taraflar:[
    { ad:"Osmanlı öncü ordusu", devlet_id:"osmanli", komutan:"Vezîriâzam Hadım Sinan Paşa", mevcut_toplam:4000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"4000 kişi, Yavuz Sultan Selim'in Sinan Paşa'yı Şam'dan Gazze'ye gönderirken verdiği kuvvettir (TDV selim-i); hadim-sinan-pasa yalnız 'bir miktar asker' diyor. Sinan Paşa 1 Aralık 1516'da Şam'dan yola çıktı. Galip taraf." },
    { ad:"Memlük kuvvetleri", devlet_id:"memluk", komutan:"Canbirdi Gazâlî (Şam nâibi)", mevcut_toplam:5000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"Memlük beylerinden birçoğu öldürüldü (hadim-sinan-pasa); Canbirdi çok az kuvvetle Kahire'ye kaçtı (canbirdi-gazali)", notlar:"5000 kişi, Canbirdi Gazâlî liderliğinde Kahire'den Gazze'ye yola çıktığı haber alınan Memlük birliğinin büyüklüğüdür (TDV selim-i) — savaş öncesi istihbarat rakamı, savaş günündeki sayı değil." }
  ],
  kaynak:"TDV: canbirdi-gazali (DİA 7, 1993, s. 141-143) · TDV: hadim-sinan-pasa (DİA 15, 1997, s. 7-8) · TDV: selim-i (DİA 36, 2009, s. 407-414)" },

{ id:"kunye-guns-1532", savas_ad:"Güns (Kőszeg) kuşatması", savas_t:"1532-08-05", tur:"kusatma",
  baslik:"Güns (Kőszeg) Kuşatması (Ağustos 1532)",
  tarih_metin:"19 Ramazan 938 (25 Nisan 1532) İstanbul'dan hareket; Güns kuşatılıp alındıktan sonra ordu Gratz'a yöneldi (Eylül 1532). Güns kuşatmasının günü TDV'de verilmiyor.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Kanûnî Sultan Süleyman · Vezîriâzam Makbul İbrâhim Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Osmanlı kaynaklarında 'Alaman seferi'; asıl hedef V. Karl ile meydan savaşıydı, imparatorluk ordusu çıkmadı. İbrâhim Paşa'nın seferde bulunduğu ibrahim-pasa-makbul maddesinde." },
    { ad:"Güns kalesi savunucuları (Ferdinand'a bağlı Habsburg kuvvetleri)", devlet_id:"habsburg", komutan:"bulunamadı (TDV suleyman-i ve ibrahim-pasa-makbul kale kumandanını anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Asıl imparatorluk ordusu Viyana yakınında Brigittenau'da bekledi, Güns'e yardıma gelmedi." }
  ],
  kaynak:"TDV: suleyman-i (DİA 38, 2010, s. 62-74) · TDV: ibrahim-pasa-makbul (DİA 21, 2000, s. 333-335)" },

{ id:"kunye-korfu-1537", savas_ad:"Korfu kuşatması", savas_t:"1537-08-25", tur:"kusatma",
  baslik:"Korfu Kuşatması (25 Ağustos - 6 Eylül 1537)",
  tarih_metin:"Donanma 7 Zilhicce 943 (17 Mayıs 1537) denize açıldı; 18 Rebîülevvel 944 (25 Ağustos 1537) Korfu'ya asker ve top çıkarıldı; kuşatma 30 Rebîülevvel (6 Eylül) kaldırıldı; çekilme dokuz gün sürdü.",
  taraflar:[
    { ad:"Osmanlı ordusu ve donanması", devlet_id:"osmanli", komutan:"Kanûnî Sultan Süleyman · Kaptanıderyâ Barbaros Hayreddin Paşa · serdar üçüncü vezir Lutfi Paşa · Sadrazam Ayas Paşa (ikinci çıkarma)", mevcut_toplam:"50.000 dolayında", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"elli civarında", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"50.000 ve ~50 top kuşatmaya katılan Osmanlı mevcudu için TDV korfu'da (Pulya/Korfu Seferi Rûznâmesi ve Danişmend'e dayanarak). suleyman-i: seferde ilk kez Fransız ve Osmanlı askerleri denizde ortak harekât yaptı; bir kısım kuvvet Otranto yöresine çıktı." },
    { ad:"Venedik (Korfu kalesi)", devlet_id:"venedik", komutan:"bulunamadı (TDV korfu anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Kale alınamadı; kuşatma hava şartları ve siyasî sebeplerle kaldırıldı. Ada nüfusu kuşatmadan önce ~40.000 (TDV korfu)." }
  ],
  kaynak:"TDV: korfu (DİA 26, 2002, s. 201-202) · TDV: suleyman-i (DİA 38, 2010, s. 62-74) · TDV: barbaros-hayreddin-pasa (DİA 5, 1992, s. 65-67)" },

{ id:"kunye-konya-sehzadeler-1559", savas_ad:"Konya Şehzâdeler Muharebesi", savas_t:"1559-05-30", tur:"meydan",
  baslik:"Konya Şehzadeler Muharebesi (30-31 Mayıs 1559)",
  tarih_metin:"bayezid-sehzade: 29 Mayıs 1559'da Konya önlerine varış, 30 Mayıs'ta başlayan iki günlük savaş; suleyman-i: 22 Şâban 966 (30 Mayıs 1559); selim-ii ve sokullu-mehmed-pasa: 21 Şâban 966 (29 Mayıs 1559), iki gün süren çatışma.",
  celiski:"TDV maddeleri arasında bir günlük fark: TDV bayezid-sehzade ve suleyman-i savaşın başlangıcını 30 Mayıs 1559 (22 Şâban 966) verir; TDV selim-ii ve sokullu-mehmed-pasa 21 Şâban 966 (29 Mayıs 1559) verir. Atlas kronolojisi: 1559-05-30.",
  taraflar:[
    { ad:"Şehzade Selim kuvvetleri (padişahın desteğiyle)", devlet_id:"osmanli", komutan:"Şehzade Selim · Lala Mustafa Paşa · Sokullu Mehmed Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Kanûnî, Sokullu'yu bir miktar kuvvetle Selim'e yardıma yolladı (sokullu-mehmed-pasa). Selim'in Venedik'ten 500 arkebüz/tüfek istediği, isteğin reddedildiği bir Venedik raporuna dayanarak selim-ii'de geçer — bu rakam Selim ordusunun tüfek mevcudu DEĞİLDİR. Lala Mustafa Paşa'nın ikinci gün bozgunda rolü selim-ii'de." },
    { ad:"Şehzade Bayezid kuvvetleri", devlet_id:"osmanli", komutan:"Şehzade Bayezid", mevcut_toplam:30000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"30.000 TDV bayezid-sehzade'de ('30.000'i bulan kuvvetleri'); düzenli kuvvetlere göre eğitimce yetersiz. suleyman-i: Bayezid 'yevmlü' denilen tüfekli asker topladı (sayı yok). Yenilgiden sonra Amasya'ya, oradan İran'a kaçtı." }
  ],
  kaynak:"TDV: bayezid-sehzade (DİA 5, 1992, s. 230-231) · TDV: selim-ii (DİA 36, 2009, s. 414-418) · TDV: sokullu-mehmed-pasa (DİA 37, 2009, s. 354-357) · TDV: suleyman-i (DİA 38, 2010, s. 62-74)" },

{ id:"kunye-cerbe-deniz-ve-1560", savas_ad:null, savas_t:"1560-03-12", tur:"deniz",
  baslik:"Cerbe Deniz Savaşı ve Kuşatması (Mayıs-Temmuz 1560)",
  tarih_metin:"piyale-pasa: Haçlı donanması 14 Cemâziyelâhir 967 (12 Mart 1560) Cerbe'yi işgal etti; 15 Şâban (11 Mayıs) başlayan üç günlük deniz çatışması; kale 7 Zilkade (30 Temmuz 1560) fethedildi. cerbe: Haçlı donanması dağıtıldı (14 Mayıs 1560); kale ~iki aylık kuşatmadan sonra 30 Temmuz 1560'ta alındı.",
  celiski:"Atlas kronolojisi günü (1560-03-12) TDV piyale-pasa'da Haçlı donanmasının Cerbe'yi işgal günüdür, savaş günü değildir. Deniz savaşı: TDV piyale-pasa 11 Mayıs'ta başlayıp üç gün; TDV cerbe 14 Mayıs 1560. Kale fethi: 30 Temmuz 1560 (ikisi de).",
  taraflar:[
    { ad:"Osmanlı donanması ve Trablusgarp kuvvetleri", devlet_id:"osmanli", komutan:"Kaptanıderyâ Piyâle Paşa · Trablusgarp Beylerbeyi Turgut Paşa (Reis) · Uluç Ali Reis (Kılıç Ali Paşa)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"120 kadırga (İstanbul'dan çıkan donanma)", notlar:"120 gemi/kadırga cerbe ve piyale-pasa'da İstanbul'dan çıkan donanma için; Modon, Rodos, Midilli'den katılan gemiler sayısız. Turgut Reis 16 Mayıs'ta kendi kadırgalarıyla katıldı; yanında Trablus, Kayrevan, Sefâkus askerleri, atlı ve piyade tüfekçiler (sayısız; turgut-reis)." },
    { ad:"Haçlı müttefik donanması (İspanya yönetiminde)", devlet_id:"ispanya", komutan:"bulunamadı (TDV cerbe, piyale-pasa, turgut-reis kumandanın adını anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"piyale-pasa: 19 kadırgaya el konuldu, 26 barça tahrip edildi, 11 kadırga Cerbe Kalesi'ne sığındı. cerbe: ~70 geminin batırıldığı, ~20'sinin ele geçirildiği 'rivayet edilir'. Piyâle Paşa ~4000 esirle İstanbul'a döndü.", notlar:"Kaleyi İspanyol, İtalyan, Alman ve Malta askerleri savundu (cerbe). İki TDV maddesindeki kayıp rakamları farklı; cerbe'deki rakam rivayet olarak verilmiş." }
  ],
  kaynak:"TDV: piyale-pasa (DİA 34, 2007, s. 296-297) · TDV: cerbe (DİA 7, 1993, s. 391-392) · TDV: turgut-reis (DİA 41, 2012, s. 417-418)" },

{ id:"kunye-vadilmehazin-1578", savas_ad:"Vâdisseyl (Kasrülkebir)", savas_t:"1578-08-04", tur:"meydan",
  baslik:"Vâdilmehâzin (Vâdisseyl / Kasrülkebîr) Savaşı (4 Ağustos 1578)",
  tarih_metin:"30 Cemâziyelevvel 986 / 4 Ağustos 1578 (sadiler); 4 Ağustos 1578 (fas, abdulmelik-b-muhammed-el-mehdi).",
  taraflar:[
    { ad:"Sa'dî Sultanı Abdülmelik ordusu (Osmanlı destekli; Türkler ve Araplar)", devlet_id:"sadi", komutan:"Sultan Ebû Mervân Abdülmelik · kardeşi Ebü'l-Abbas Ahmed (el-Mansûr)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"Abdülmelik savaş sırasında hastalığı yüzünden öldü (sadiler); abdulmelik maddesi her iki tarafın ağır kayıp verdiğini yazar.", notlar:"murad-iii savaşı 'Osmanlı-Fas müşterek kuvvetleri' zaferi olarak anar; ordu Türkler ve Araplar'dan oluşuyordu (abdulmelik-b-muhammed-el-mehdi). Osmanlı birliklerinin sayısı verilmiyor." },
    { ad:"Portekiz ordusu ve Haçlı müttefikleri (Muhammed el-Mütevekkil ile)", devlet_id:"portekiz", komutan:"Portekiz Kralı Don Sebastian · eski Sa'dî sultanı Muhammed el-Mütevekkil", mevcut_toplam:80000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"Ordunun hemen tamamı imha edildi; Sebastian ve el-Mütevekkil öldü (fas).", notlar:"80.000 kişilik ordu TDV fas'ta (Fas sahillerine çıkan ordu). sadiler: papalık, İspanya, İtalyan, Alman ve Fransız birlikleri katıldı." }
  ],
  kaynak:"TDV: fas (DİA 12, 1995, s. 190-192) · TDV: sadiler (DİA 35, 2008, s. 407-410) · TDV: abdulmelik-b-muhammed-el-mehdi (DİA 1, 1988, s. 271) · TDV: murad-iii (DİA 31, 2020, s. 172-176)" },

{ id:"kunye-mesale-1583", savas_ad:"Meşaleler Savaşı", savas_t:"1583-05-09", tur:"meydan",
  baslik:"Meşale Savaşı (7-11 Mayıs 1583)",
  tarih_metin:"14-18 Rebîülâhir 991 / 7-11 Mayıs 1583; dört gün dört gece sürdüğü rivayet edilir (osman-pasa-ozdemiroglu). sirvan: 1583.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Özdemiroğlu Osman Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Kırım üzerinden Silistre sancak beyi Yâkub Bey kumandasında gelen Rumeli ordusu takviyesi; Yâkub Bey Nisan 1583'te bir akında öldü. Zaferden sonra Şamahı'ya girildi; Şirvan muhafızlığı Câfer Paşa'ya verildi (sirvan)." },
    { ad:"Safevî ordusu", devlet_id:"safevi", komutan:"bulunamadı (TDV osman-pasa-ozdemiroglu ve sirvan bu savaşta Safevî kumandanını anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: osman-pasa-ozdemiroglu (DİA 33, 2007, s. 471-473) · TDV: sirvan (DİA 39, 2010, s. 204-206)" },

{ id:"kunye-kalugeran-1595", savas_ad:"Kalûgerân (Călugăreni) muharebesi", savas_t:"1595-08-23", tur:"meydan",
  baslik:"Kalûgerân (Călugăreni) Muharebesi (1595)",
  tarih_metin:"1595 (bukres); TDV maddelerinde gün yok.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Vezîriâzam ve Serdârıekrem Koca Sinan Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Sonrasında Bükreş'e girildi, Eflak eyalet yapılıp beylerbeyiliğine Satırcı Mehmed Paşa getirildi, Târgovişte alındı (bukres). koca-sinan-pasa: Eflak seferi başarısız oldu; Sinan Paşa 19 Kasım 1595'te azledildi." },
    { ad:"Eflak ordusu", devlet_id:"eflak", komutan:"Voyvoda Mihai Viteazul (Cesur Mihai / Mihal)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Sonuç TDV maddelerinde farklı vurgulanır: bukres 'yenilen Eflaklılar' çekilirken Bükreş'i yaktı der; eflak Mihai'nin Kalûgerân'da Sinan Paşa ordusuna baskın yapıp geri çekildiğini, sonra Erdel Prensi Báthory'nin yardımıyla Eflak'ı geri aldığını yazar." }
  ],
  kaynak:"TDV: bukres (DİA 6, 1992, s. 484-485) · TDV: eflak (DİA 10, 1994, s. 466-469) · TDV: koca-sinan-pasa (DİA 26, 2002, s. 137-139) · TDV: mehmed-iii (DİA 28, 2003, s. 407-413)" },

{ id:"kunye-parkan-1683", savas_ad:"Parkan bozgunu", savas_t:"1683-10-09", tur:"meydan",
  baslik:"Parkan (Ciğerdelen) Muharebesi (7 ve 9 Ekim 1683)",
  tarih_metin:"7 Ekim 1683 Leh kuvvetleri bozuldu; 9 Ekim 1683 Charles de Lorraine'in saldırısıyla Osmanlı fırkası ağır yenildi (cigerdelen). Estergon 27 Ekim 1683'te Sobieski ve müttefiklerince alındı (estergon).",
  taraflar:[
    { ad:"Osmanlı fırkası (Uyvar ve Estergon müdafaası)", devlet_id:"osmanli", komutan:"Kara Mehmed Paşa (Vezîriâzam Merzifonlu Kara Mustafa Paşa'nın gönderdiği)", mevcut_toplam:"30.000 (5 Ekim 1683'te sevk edilen kuvvet); 9 Ekim'de karşı tarafın 'yarı sayısı' denir", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"Ağır yenilgi; Ciğerdelen ve Estergon düştü, Ciğerdelen parkanı yerle bir edildi; pek çok kumandan şehid oldu (merzifonlu-kara-mustafa-pasa). Sayı yok.", notlar:"30.000 rakamı cigerdelen ve merzifonlu-kara-mustafa-pasa'da 5 Ekim'deki sevkiyat içindir, savaş günü mevcudu değil; cigerdelen 9 Ekim'de saldırıya uğrayan Osmanlı fırkasını Lorraine'in 30.000'inin 'yarı sayısında' tarif eder." },
    { ad:"Habsburg ve Leh müttefik kuvvetleri", devlet_id:"habsburg", komutan:"Charles de Lorraine (9 Ekim) · Leh Kralı Jan Sobieski (7 Ekim ve Estergon)", mevcut_toplam:"30.000 (9 Ekim'de saldıran Charles de Lorraine kuvveti)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"7 Ekim çarpışmasında Leh kaybı: Osmanlı kaynaklarına göre 8-10.000, Leh kaynaklarına göre ~1000 (cigerdelen).", notlar:"Lehistan için listede devlet_id yok; Leh kuvvetleri bu tarafın müttefiki. 7 Ekim'de Lehliler bozguna uğradı, 9 Ekim'de müttefikler kazandı. Kayıp rakamlarında kaynak farkı TDV'de beyan edilmiş." }
  ],
  kaynak:"TDV: cigerdelen (DİA 7, 1993, s. 526-527) · TDV: estergon (DİA 11, 1995, s. 438-440) · TDV: merzifonlu-kara-mustafa-pasa (DİA 29, 2004, s. 246-249)" },

{ id:"kunye-banaluka-1737", savas_ad:"Banaluka zaferi", savas_t:"1737-08-04", tur:"meydan",
  baslik:"Banaluka Muharebesi (4 Ağustos 1737)",
  tarih_metin:"Banaluka 1737'de Avusturya saldırısına uğradı, Hekimoğlu Ali Paşa tarafından aynı yılın 4 Ağustos'unda kurtarıldı (banaluka).",
  taraflar:[
    { ad:"Osmanlı Bosna ordusu", devlet_id:"osmanli", komutan:"Bosna Valisi Hekimoğlu Ali Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"bosna-hersek: salgın ve kötü hasat sonucu Bosna sipahilerinin ağır kayıplarına rağmen Hekimoğlu idaresinde kesin zafer. mahmud-i--osmanli Banaluka'yı Sadrazam (Muhsinzâde) Abdullah Paşa ile anar; ancak abdullah-pasa-muhsinzade'ye göre o sadarete 5 Ağustos 1737'de geldi — Banaluka'daki komutan banaluka ve bosna-hersek'e göre Hekimoğlu." },
    { ad:"Avusturya kuvvetleri", devlet_id:"habsburg", komutan:"bulunamadı (TDV banaluka, hekimoglu-ali-pasa, bosna-hersek anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: banaluka (DİA 5, 1992, s. 49-51) · TDV: bosna-hersek (DİA 6, 1992, s. 297-305) · TDV: hekimoglu-ali-pasa (DİA 17, 1998, s. 166-168) · TDV: mahmud-i--osmanli (DİA 27, 2003, s. 348-352)" },

{ id:"kunye-hisarcik-1739", savas_ad:"Hisarcık (Grocka) zaferi", savas_t:"1739-07-22", tur:"meydan",
  baslik:"Hisarcık (Grocka) Muharebesi (22 Temmuz 1739)",
  tarih_metin:"Hisarcık Boğazı'nda 22 Temmuz'da (1739) büyük çarpışma (haci-ivaz-pasa--sadrazam); mahmud-i--osmanli: Belgrad-Hisarcık arasında şiddetli muharebeler.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sadrazam Hacı İvaz (Mehmed) Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Oğlu İvazzâde Halil Paşa seferde babasıyla bulundu (ivazzade-halil-pasa). Hekimoğlu Ali Paşa sonraki Belgrad kuşatmasına katıldı (kuşatma, Hisarcık değil). Ardından Belgrad kuşatması; 1 Eylül 1739 ön mukavele, 7 Eylül Belgrad teslim." },
    { ad:"Avusturya kuvvetleri", devlet_id:"habsburg", komutan:"bulunamadı (TDV haci-ivaz-pasa--sadrazam ve mahmud-i--osmanli anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"Bozguna uğradı (sayı yok)." }
  ],
  kaynak:"TDV: haci-ivaz-pasa--sadrazam (DİA 14, 1996, s. 487-488) · TDV: mahmud-i--osmanli (DİA 27, 2003, s. 348-352) · TDV: ivazzade-halil-pasa (DİA 23, 2001, s. 494-496)" },

{ id:"kunye-kulaca-hisari-baskini-1285", savas_ad:"Kulacahisar baskını", savas_t:"1285-01-01", tur:"meydan",
  baslik:"Kulaca Hisarı baskını (684/1285)",
  tarih_metin:"683/1284 Kulaca fethi (osman-i, bir yerde) · 684/1285 (osman-i, olayın anlatıldığı yerde)",
  celiski:"TDV osman-i aynı maddede iki tarih verir: 683/1284 ve 684/1285; 684 hicrî yılı 9 Mart 1285'te başlar. Atlas kronolojisi: 1285-01-01 (684'ün başından önce, 683 içinde kalır).",
  taraflar:[
    { ad:"Osman Bey'in gazileri", devlet_id:"osmanli", komutan:"Osman Bey", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Gece baskını; Kulaca Hisarı yağmalanıp ateşe verildi (osman-i)." },
    { ad:"İnegöl Rumları (Kulaca Hisarı)", komutan:"bulunamadı (TDV osman-i anmıyor; İnegöl tekfuru bölgenin hâkimi)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"osman-i'ye göre bu uçtaki yerli tekfurlar Selçuklu sultanını tanıyordu; bu yüzden devlet_id bizans konmadı. Baskının ardından İnegöl Rumları Karacahisar tekfurundan yardım istedi; asıl ilk savaş Domaniç belinde 685/1286'dadır." }
  ],
  kaynak:"TDV: osman-i (DİA 33, 2007, s. 443-453)" },

{ id:"kunye-dimbos-1303", savas_ad:"Dimbos zaferi", savas_t:"1303-01-01", tur:"meydan",
  baslik:"Dimbos Savaşı (702/1303)",
  tarih_metin:"Âşıkpaşazâde 702 (1303) tarihini verir; 702 yılı 26 Ağustos 1302'de başlar, baharı 1303'ün ilk yedi ayına düşer · Kite Kalesi'nin teslimi (1303)",
  taraflar:[
    { ad:"Osman Bey'in kuvvetleri", devlet_id:"osmanli", komutan:"Osman Bey", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", kayip:"şehidler arasında Gündüz Alp'in oğlu Aydoğdu (sayı yok)", notlar:"osman-i'deki '5000 kişi' rakamı Bapheus ve Dimbos'tan SONRAKİ sefer mevcudunu tarifler, bu savaşın mevcudu değildir; kullanılmadı." },
    { ad:"Bursa ovası tekfurları ittifakı (Adranos, Bidnos, Kestel, Kite; Bursa)", devlet_id:"bizans", komutan:"Kestel, Kite, Bursa ve Adranos tekfurları (adları anılmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", kayip:"Kestel tekfuru savaşta öldü; Kite tekfuru kaçtı, Ulubat'ta teslim alınıp Kite önünde idam edildi", notlar:"osman-i: ittifak İstanbul'dan gelen emir üzerine yapıldı; tekfurlar Bizans tekfurlarıdır. Ardından Kite (Ürünlü) teslim oldu; Ulubat tekfuruyla köprüyü geçmeme anlaşması yapıldı." }
  ],
  kaynak:"TDV: osman-i (DİA 33, 2007, s. 443-453)" },

{ id:"kunye-adranos-1323", savas_ad:null, savas_t:"1323-09-01", tur:"kusatma",
  baslik:"Adranos (Atranos) seferi (1323/1324)",
  tarih_metin:"orhan: babasının zamanındaki son seferi Adranos üzerine; Asporça vakfiyesi 723 Ramazan başı (Eylül 1323) Osman'ı hayatta gösterir · orhan (başka yerde): 724'te (1324) Adranos Kalesi'nin fethedilmesi",
  celiski:"TDV orhan maddesi seferi Osman hayattayken (en geç 1323-24) sayar, fakat aynı maddede fethi 724 (1324) yılına koyar; atlas kronolojisi: 1323-09-01 (Eylül 1323 tarihi aslında Asporça vakfiyesinin tarihidir, seferin değil).",
  taraflar:[
    { ad:"Osmanlı kuvvetleri (Orhan kumandasında)", devlet_id:"osmanli", komutan:"Orhan Bey · Köse Mihal · Turgut Alp", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok" },
    { ad:"Adranos (Orhaneli) tekfuru", devlet_id:"bizans", komutan:"bulunamadı (TDV orhan, osman-i anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"yok", tufek:"yok", gemi:"yok", notlar:"Adranos tekfuru 1303 Dimbos'ta Osman'a karşı ittifaktaydı (osman-i). orhan: Adranos'un alınması Karesi Beyliği ile anlaşmazlığın kaynağı olmalı." }
  ],
  kaynak:"TDV: orhan (DİA 33, 2007, s. 375-386) · TDV: osman-i (DİA 33, 2007, s. 443-453)" },

{ id:"kunye-frenkyazisi-ve-konya-kusatmasi-1386", savas_ad:"Frenkyazısı Savaşı", savas_t:"1386-06-01", tur:"meydan",
  baslik:"Frenkyazısı Savaşı ve Konya kuşatması (788/1386)",
  tarih_metin:"Bursa'da kışlayıp 788 (1386) baharında sefere çıktı (murad-i) · İfrenk (Frenk) Yazısı ... (788/1386) (karamanogullari)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"I. Murad", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"yok", notlar:"Orduda Sırp (vasal) askerleri vardı; yağmaya kalkışanlar Konya önünde idamla cezalandırıldı (murad-i). Savaşın ayrıntılı tasviri Ahmedî'nin Gazânâme'sinde (Neşrî'de iktibas)." },
    { ad:"Karamanoğulları kuvvetleri", devlet_id:"karaman", komutan:"Karamanoğlu Alâeddin Bey", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"yok", notlar:"Yenilip Konya Kalesi'ne çekildi; I. Murad Konya'yı kuşattı, eşi Nefîse Hatun'un aracılığıyla barış yapıldı; Beyşehir/Hamîd-ili Osmanlı'ya geçti. murad-i: aşiret kuvvetlerinin düzenli orduya karşı yetersizliğini göstermesiyle önemli." }
  ],
  kaynak:"TDV: murad-i (DİA 31, 2020, s. 156-164) · TDV: karamanogullari (DİA 24, 2001, s. 454-460)" },

{ id:"kunye-ulubat-1403", savas_ad:"Ulubat çarpışması", savas_t:"1403-09-01", tur:"meydan",
  baslik:"Ulubat Savaşı (1403)",
  tarih_metin:"isa-celebi: Timur'un Anadolu'yu terkinden (1403 baharı) sonra; İsa Çelebi yenilip İstanbul'a kaçtı ve 1403 yılının yaz aylarında Edirne'ye gitti · fetret-devri: savaştan sonra Bursa'ya giren Mehmed Çelebi hükümdarlığını ilan etti (1404) · mehmed-i: 806/1403-1404",
  celiski:"TDV isa-celebi'ye göre savaş 1403 baharı ile 1403 yazı arasında olmalı (İsa yazın Edirne'deydi); fetret-devri Bursa'daki ilanı 1404'e koyar. Atlas kronolojisi: 1403-09-01.",
  taraflar:[
    { ad:"Mehmed Çelebi'nin kuvvetleri", komutan:"Mehmed Çelebi", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"yok", notlar:"isa-celebi: daha donanımlı, daha deneyimli kumandanlar idaresinde. Ulubat'tan önce Domaniç Geçidi'nde de İsa'nın kuvvetlerini bozdu." },
    { ad:"İsa Çelebi'nin kuvvetleri", komutan:"İsa Çelebi · Sarı Timurtaş Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"yok", kayip:"Sarı Timurtaş Paşa savaştan sonra Mehmed Çelebi tarafından idam ettirildi", notlar:"Fetret devri iç savaşı: iki taraf da Osmanlı şehzadesi. İsa Yalova'dan gemiyle İstanbul'a kaçtı." }
  ],
  kaynak:"TDV: isa-celebi (DİA EK-1, 2020, s. 645-647) · TDV: fetret-devri (DİA 12, 1995, s. 480-482) · TDV: mehmed-i (DİA 28, 2003, s. 391-394)" },

{ id:"kunye-yenisehir-ovasi-1405", savas_ad:"Yenişehir Ovası savaşı", savas_t:"1405-01-01", tur:"meydan",
  baslik:"Yenişehir Ovası Savaşı (1405)",
  tarih_metin:"fetret-devri: (Süleyman'ın 1404'te Bursa'yı almasının) ertesi yıl Yenişehir ovasında · suleyman-celebi-emir: Anadolu'ya ikinci gelişi 808 (1405) yaz mevsiminde",
  celiski:"TDV suleyman-celebi-emir Süleyman Çelebi'nin Anadolu'ya ikinci gelişini 808 (1405) yazına koyar; atlas kronolojisi 1405-01-01 (yalnız yıl).",
  taraflar:[
    { ad:"Emîr Süleyman Çelebi'nin kuvvetleri", komutan:"Süleyman Çelebi", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"yok", notlar:"fetret-devri Süleyman'ın 1404'te Çandarlı Ali Paşa ile Anadolu'ya geçtiğini yazar; Ali Paşa'nın Yenişehir'de bulunduğu ayrıca yazılmaz." },
    { ad:"Mehmed Çelebi'nin kuvvetleri", komutan:"Mehmed Çelebi", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"yok", notlar:"Yenilip Amasya'ya döndü; ardından Musa Çelebi'yi Rumeli'ye gönderdi (fetret-devri)." }
  ],
  kaynak:"TDV: fetret-devri (DİA 12, 1995, s. 480-482) · TDV: suleyman-celebi-emir (DİA 38, 2010, s. 82-85) · TDV: mehmed-i (DİA 28, 2003, s. 391-394)" },

{ id:"kunye-musa-celebi-nin-istanbul-kusatmasi-1411", savas_ad:"Mûsâ Çelebi'nin İstanbul kuşatması", savas_t:"1411-01-01", tur:"kusatma",
  baslik:"Musa Çelebi'nin İstanbul kuşatması (1411 sonbaharı)",
  tarih_metin:"1411 sonbaharında ansızın İstanbul önlerine gelip şehri kuşattı (musa-celebi) · 1411 yılında Musa Çelebi (istanbul)",
  celiski:"TDV musa-celebi: 1411 sonbaharı; atlas kronolojisi: 1411-01-01.",
  taraflar:[
    { ad:"Musa Çelebi'nin kuvvetleri", devlet_id:"osmanli", komutan:"Musa Çelebi", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"bilinmiyor", notlar:"Yanındaki vasal Curac Brankoviç Bizans tarafına geçti; Mihaloğlu ve Çandarlı İbrâhim gibi Rumeli beyleri Çelebi Mehmed'e kaçtı. Osmanlı filosu Yassıada yakınında Bizans donanmasına yenildi (gemi sayısı yok)." },
    { ad:"Bizans (İstanbul)", devlet_id:"bizans", komutan:"bulunamadı (TDV musa-celebi, istanbul savunma komutanını anmıyor; imparator II. Manuel)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"yok", gemi:"bilinmiyor", notlar:"Kuşatma sonuçsuz kaldı." }
  ],
  kaynak:"TDV: musa-celebi (DİA 31, 2020, s. 216-217) · TDV: istanbul (DİA 23, 2001, s. 205-212)" },

{ id:"kunye-gelibolu-deniz-1416", savas_ad:"Gelibolu (deniz)", savas_t:"1416-05-29", tur:"deniz",
  baslik:"Gelibolu Deniz Savaşı (29 Mayıs 1416)",
  tarih_metin:"1 Rebîülâhir 819 / 29 Mayıs 1416 (mehmed-i) · Mayıs 1416 (gelibolu)",
  taraflar:[
    { ad:"Osmanlı donanması (Gelibolu)", devlet_id:"osmanli", komutan:"Çalı Bey (1415 Kiklad seferinin kumandanı; savaş günündeki komutası metinde ayrıca belirtilmez)", mevcut_toplam:"bilinmiyor", piyade:"yok", suvari:"yok", top:"bilinmiyor", tufek:"yok", gemi:"bilinmiyor", kayip:"Venedik kaynaklarına göre 12 gemi zaptedildi, 4000 kişi öldürüldü", notlar:"mehmed-i'deki '112 gemi (13 kadırga)' 1415'te Çalı Bey'le Kiklad adalarına gönderilen Gelibolu donanmasının mevcududur, baskın anındaki sayı değildir. Kayıp rakamı Venedik kaynaklarına dayanır (gelibolu maddesi)." },
    { ad:"Venedik donanması", devlet_id:"venedik", komutan:"Pietro Loredano", mevcut_toplam:"bilinmiyor", piyade:"yok", suvari:"yok", top:"bilinmiyor", tufek:"yok", gemi:"bilinmiyor", notlar:"Sürpriz saldırıyla limandaki Osmanlı donanmasını tahrip etti; ancak Boğaz'ın kontrolünü tutamadı (gelibolu)." }
  ],
  kaynak:"TDV: mehmed-i (DİA 28, 2003, s. 391-394) · TDV: gelibolu (DİA 14, 1996, s. 1-6)" },

{ id:"kunye-ii-murad-in-istanbul-kusatmasi-1422", savas_ad:"İstanbul kuşatması", savas_t:"1422-06-10", tur:"kusatma",
  baslik:"II. Murad'ın İstanbul kuşatması (Haziran-Ağustos 1422)",
  tarih_metin:"15 Haziran 1422'deki muhasara teşebbüsü; Ağustos ayındaki genel hücum (istanbul) · Receb 825 / Haziran 1422; elli günden fazla süren kuşatma (murad-ii)",
  celiski:"TDV istanbul: 15 Haziran 1422; atlas kronolojisi: 1422-06-10.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"II. Murad", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Kuşatma bütün kara surları boyunca (Bizans kaynakları, istanbul). Küçük Mustafa'nın Karaman, Germiyan ve Candaroğulları desteğiyle Bursa'yı kuşatması (Ramazan 825 / Ağustos 1422) üzerine kaldırıldı. murad-ii'deki 12.000 sipahi + 5000 piyade rakamı Düzme Mustafa'nın Ocak 1422'de Anadolu'ya geçen ordusudur, bu kuşatmaya ait değildir." },
    { ad:"Bizans (İstanbul)", devlet_id:"bizans", komutan:"bulunamadı (TDV istanbul, murad-ii anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Kuşatma Bizans'ın Düzme Mustafa'yı desteklemesine karşılıktır (istanbul)." }
  ],
  kaynak:"TDV: istanbul (DİA 23, 2001, s. 212-220) · TDV: murad-ii (DİA 31, 2020, s. 164-172)" },

{ id:"kunye-belgrad-kusatmasi-1440", savas_ad:null, savas_t:"1440-04-01", tur:"kusatma",
  baslik:"Belgrad kuşatması (844/1440)",
  tarih_metin:"844 (1440); altı ay süren kuşatma (murad-ii) · 1440 yılında karadan ve Tuna nehrinden başlatılan ve altı ay süren kuşatma (belgrad)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"II. Murad", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Kuşatma karadan ve Tuna'dan yapıldı (nehir gemileri ima edilir, sayı yok). Orduda salgın hastalık görüldü (belgrad)." },
    { ad:"Macar garnizonu (Belgrad)", devlet_id:"macaristan", komutan:"bulunamadı (TDV murad-ii, belgrad anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor (kullanıldı)", gemi:"bilinmiyor", notlar:"murad-ii: Türkler'e karşı ilk defa kullanılan tüfek ateşi başarısızlığın âmillerinden biri gibi görünmektedir. Belgrad, Curac Brankoviç tarafından Macarlar'a terkedilmişti (belgrad)." }
  ],
  kaynak:"TDV: murad-ii (DİA 31, 2020, s. 164-172) · TDV: belgrad (DİA 5, 1992, s. 407-409)" },

{ id:"kunye-izladi-derbendi-1443", savas_ad:"İzladi", savas_t:"1443-11-01", tur:"meydan",
  baslik:"İzladi Derbendi Savaşı (24 Kasım 1443)",
  tarih_metin:"1 Şâban 847 / 24 Kasım 1443 (murad-ii) · 1443 (izladi)",
  celiski:"TDV murad-ii: 1 Şâban 847 / 24 Kasım 1443; atlas kronolojisi: 1443-11-01. Ayrıca sonuçta çelişki: murad-ii II. Murad'ın Haçlıları geçitte durdurduğunu, varna-muharebesi 'zorlukla başardığını' yazar; izladi ise II. Murad'ın kuvvetlerinin bozguna uğrayıp çekildiğini, Haçlıların derbendi aşıp Filibe ovasına indiğini, sonra kış yüzünden döndüğünü yazar.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"II. Murad · Kasım Paşa · Turahan Bey", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"murad-ii: uç beyleri İzladi savaşında Kasım Paşa'ya gerektiği gibi yardım etmedikleri için Turahan Bey yakalanıp Tokat'a hapsedildi." },
    { ad:"Haçlı ordusu (Macar Kralı Vladislav, Hunyadi; Sırp despotu müttefik)", devlet_id:"macaristan", komutan:"Kral Vladislav (I. Ulászló) · János Hunyadi (Yanko) · Sırp Despotu Curac Brankoviç", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Ekim 1443'te Tuna'yı aşıp Niş ve Sofya'yı aldılar ('Uzun Sefer'). Sırp despotunun katılımı murad-ii ve varna-muharebesi'nde." }
  ],
  kaynak:"TDV: murad-ii (DİA 31, 2020, s. 164-172) · TDV: izladi (DİA 23, 2001, s. 513-515) · TDV: varna-muharebesi (DİA 42, 2012, s. 527-530)" },

{ id:"kunye-kefe-kusatmasi-1454", savas_ad:null, savas_t:"1454-07-14", tur:"kusatma",
  baslik:"Kefe kuşatması (14 Temmuz 1454)",
  tarih_metin:"Haziran 1454'te anlaşma; Hacı Giray 14 Temmuz 1454'te şehri karadan kuşattı (haci-giray-i) · 858 (1454) yazında (mehmed-ii)",
  taraflar:[
    { ad:"Osmanlı donanması ve Kırım Hanlığı kuvvetleri (müttefik)", devlet_id:"osmanli", komutan:"Hacı Giray Han (Kırım kara kuvvetleri); Osmanlı donanma komutanı bulunamadı (TDV haci-giray-i, mehmed-ii, kefe anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:7000, top:"bilinmiyor", tufek:"bilinmiyor", gemi:"50-60 kadırga", notlar:"7000 atlı Hacı Giray'ın Kırım kuvvetidir (devlet: kirim); 50-60 kadırga Osmanlı donanmasıdır (haci-giray-i). Ceneviz'in Osmanlı'ya 3000, hana 1200 altın vergi teklifi kabul edilerek kuşatma kaldırıldı." },
    { ad:"Kefe Cenevizlileri", komutan:"bulunamadı (TDV haci-giray-i, kefe anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Ceneviz için listede devlet_id yok." }
  ],
  kaynak:"TDV: haci-giray-i (DİA 14, 1996, s. 474-475) · TDV: mehmed-ii (DİA 28, 2003, s. 395-407) · TDV: kefe (DİA 25, 2022, s. 182-184)" },

{ id:"kunye-ii-arnavutluk-seferi-ve-akcahisar-1466", savas_ad:null, savas_t:"1466-06-01", tur:"kusatma",
  baslik:"II. Arnavutluk seferi ve Akçahisar (Kruya) kuşatması (871/1466)",
  tarih_metin:"1466 baharında (iskender-bey) · 871 (1466) yılında büyük bir orduyla Arnavutluk'a girdi (kruya) · ertesi yılın baharında (1466) (mehmed-ii)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"II. Mehmed · Balaban Paşa (Ohri sancak beyi; kuşatma ona bırakıldı)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Kaynak yalnız 'büyük bir ordu' der. Akçahisar alınamadı; İlbasan Kalesi yirmi beş günde inşa ettirildi (iskender-bey, Tursun Bey'e dayanarak)." },
    { ad:"İskender Bey ve Arnavut kuvvetleri (Akçahisar'da Venedik kuvvetleri)", komutan:"İskender Bey", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"1463'ten beri Akçahisar'a Venedik kuvvetleri yerleşmişti (iskender-bey). İskender Bey sonra yardım için Roma ve Napoli'ye gitti." }
  ],
  kaynak:"TDV: iskender-bey (DİA 22, 2000, s. 561-563) · TDV: kruya (DİA 26, 2002, s. 293-295) · TDV: mehmed-ii (DİA 28, 2003, s. 395-407)" },

{ id:"kunye-rodos-kusatmasi-1480", savas_ad:null, savas_t:"1480-07-28", tur:"kusatma",
  baslik:"Rodos kuşatması (23 Mayıs - 28 Temmuz 1480)",
  tarih_metin:"885 (1480) ilkbaharı; 20 Cemâziyelevvel 885 (28 Temmuz 1480) son büyük hücum; donanma 3 Ağustos'ta ayrıldı (rodos) · muhasara 13 Rebîülevvel 885 / 23 Mayıs 1480'de başladı; doksan günlük muhasara (mehmed-ii)",
  taraflar:[
    { ad:"Osmanlı donanması ve ordusu", devlet_id:"osmanli", komutan:"Vezir Mesih Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:160, kayip:"büyük kayıplar (sayı yok; mehmed-ii)", notlar:"160 gemi rodos maddesinden. Başarısızlık üzerine Mesih Paşa vezaretten azledildi (mesih-pasa)." },
    { ad:"Rodos (Saint-Jean) şövalyeleri", komutan:"Büyük Üstat Pierre d'Aubusson", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"ağır kayıplar (sayı yok; rodos)" }
  ],
  kaynak:"TDV: rodos (DİA 35, 2008, s. 155-158) · TDV: mehmed-ii (DİA 28, 2003, s. 395-407) · TDV: mesih-pasa (DİA 29, 2004, s. 309-310)" },
];

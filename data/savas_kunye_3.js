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

{ id:"kunye-kartal-1770", savas_ad:"Kartal (Kagul) Ovası", savas_t:"1770-08-01", tur:"meydan",
  baslik:"Kartal (Kagul) Savaşı (1 Ağustos 1770)",
  tarih_metin:"Kartal (Larga) Muharebesi (2 Ağustos 1770); hezimet ordugâhtan 20 Rebîülâhir 1184 (13 Ağustos 1770) tarihli mahzarla İstanbul'a bildirildi",
  celiski:"TDV ivazzade-halil-pasa: 2 Ağustos 1770 (ve muharebeyi 'Kartal (Larga)' diye adlandırıyor); atlas kronolojisi: 1770-08-01.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Serdâr-ı ekrem Sadrazam İvazzâde Halil Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"bilinmiyor (TDV zayiattan söz eder, rakam vermez; ordugâh terk edildi)", notlar:"TDV: taşkın Tuna'da köprü kurulamadan karşıya geçilmesi taktik hata sayılır; çağdaş tarihçiler 'Halil Paşa inhizamı' der. Sadrazam padişaha bu askerle iş görülemeyeceğini yazıp barış istedi." },
    { ad:"Rus ordusu", devlet_id:"rusya", komutan:"bulunamadı (TDV ivazzade-halil-pasa anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: ivazzade-halil-pasa (DİA 23, 2001, s. 494-496)" },

{ id:"kunye-kozluca-1774", savas_ad:"Kozluca", savas_t:"1774-06-25", tur:"meydan",
  baslik:"Kozluca Savaşı (25 Haziran 1774)",
  tarih_metin:"Kozluca'da Osmanlı kuvvetleri ağır bir yenilgiye uğratıldı (25 Haziran 1774)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"bulunamadı (TDV kucuk-kaynarca-antlasmasi, abdulhamid-i, muhsinzade-mehmed-pasa Kozluca'daki komutanı anmıyor; serdâr-ı ekrem Sadrazam Muhsinzâde Mehmed Paşa Şumnu ordugâhındaydı)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"bilinmiyor", notlar:"TDV: bozgunun ardından ordu dağıldı, tercümanlar bile Karînâbâd ve Edirne'ye kaçtı; Ruslar 1 Temmuz'da Şumnu karargâhını kuşattı; sonuç Küçük Kaynarca Antlaşması." },
    { ad:"Rus ordusu", devlet_id:"rusya", komutan:"bulunamadı (TDV yalnız Mareşal Rumyantsov'un bozgun sonrası barış mektubunu anıyor, muharebedeki komutanı yazmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: kucuk-kaynarca-antlasmasi (DİA 26, 2002, s. 524-527) · TDV: abdulhamid-i (DİA 1, 1988, s. 213-216) · TDV: muhsinzade-mehmed-pasa (DİA 31, 2020, s. 48-50)" },

{ id:"kunye-rimnik-1789", savas_ad:null, savas_t:"1789-09-22", tur:"meydan",
  baslik:"Rimnik (Boza) Savaşı (22 Eylül 1789)",
  tarih_metin:"22 Eylül'de Remnik nehrini geçerken ve ardından Boza suyu kıyısında uğranılan ağır bozgun (1789)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sadrazam Kethüdâ (Cenaze) Hasan Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"bilinmiyor (TDV: Boza suyunu geçerken büyük zayiat; rakam yok)", notlar:"TDV hasan-pasa-kethuda: Fokşan yenilgisinin intikamı ve Bender-Akkirman'ı kurtarmak için girişilen harekâtta Rimnik nehri yakınında Martineşti'de bozguna uğradı; çekilen kuvvetlerin Boza suyunda kayıp vermesi yüzünden 'Boza bozgunu' denildi. Hasan Paşa hastalığı ve yetersizliği yüzünden başarısız sayılır." },
    { ad:"Rus ordusu", devlet_id:"rusya", komutan:"bulunamadı (TDV yusuf-pasa-koca ve hasan-pasa-kethuda anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"TDV maddeleri Avusturya kuvvetlerinin muharebeye katılımını anmıyor; müttefik yazılmadı." }
  ],
  kaynak:"TDV: yusuf-pasa-koca (DİA 44, 2013, s. 23-25) · TDV: hasan-pasa-kethuda (DİA 16, 1997, s. 337-338)" },

{ id:"kunye-macin-1791", savas_ad:null, savas_t:"1791-07-09", tur:"meydan",
  baslik:"Maçin Savaşı (9 Temmuz 1791)",
  tarih_metin:"Maçin'de yaşanan genel bozgun ve büyük perişanlık (8 Zilkade 1205 / 9 Temmuz 1791)",
  celiski:"TDV yas-antlasmasi: 8 Zilkade 1205 / 9 Temmuz 1791 (atlasla aynı); TDV yusuf-pasa-koca: Maçin'de Ruslar karşısındaki son bozgun 6 Ağustos 1791. Atlas kronolojisi: 1791-07-09.",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sadrazam ve serdâr-ı ekrem Koca Yûsuf Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"bilinmiyor", notlar:"TDV: ordu ancak Hırsova'da toparlanabildi; ordu ricâli galebenin artık mümkün olmadığına karar verip barış mahzarı yolladı, ardından Kalas'ta mütareke ve Yaş Antlaşması. Yûsuf Paşa'nın muharebede bizzat bulunduğu açıkça yazılmamış, ordunun başındaki sadrazam olarak verildi." },
    { ad:"Rus ordusu", devlet_id:"rusya", komutan:"Prens Repnin (TDV: Kalas'taki Boğdan ordusu kumandanı; muharebedeki rolü açıkça yazılmamış)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: yas-antlasmasi (DİA 43, 2013, s. 343-347) · TDV: yusuf-pasa-koca (DİA 44, 2013, s. 23-25)" },

{ id:"kunye-akka-1799", savas_ad:"Akkâ Savunması", savas_t:"1799-05-20", tur:"kusatma",
  baslik:"Akkâ Kuşatması (18 Mart - 20 Mayıs 1799)",
  tarih_metin:"Napolyon Bonapart Akkâ'yı kuşattı (18 Mart 1799) [akka]; 19 ve 20 Mart 1799 hücumlarıyla başlayan muhasara, 20 Mayıs'ta kuşatmanın kaldırılmasıyla bitti [cezzar-ahmed-pasa]",
  taraflar:[
    { ad:"Osmanlı (Akkâ müdafileri)", devlet_id:"osmanli", komutan:"Cezzâr Ahmed Paşa (Sayda ve Şam valisi, Mısır seraskeri)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"bilinmiyor", notlar:"TDV: İngiliz donanmasından yardım gördü; şehirde Nizâm-ı Cedîd'e mensup bir kuvvet vardı, İstanbul'dan donanma ile ek kuvvet gönderildi. Müttefik: İngiltere (donanma). Atlas günü kuşatmanın kaldırıldığı gündür." },
    { ad:"Fransız ordusu", devlet_id:"fransa", komutan:"Napolyon Bonapart", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"TDV: birbiri ardınca saldırılardan sonuç alamayınca 20 Mayıs'ta kuşatmayı kaldırıp çekildi." }
  ],
  kaynak:"TDV: cezzar-ahmed-pasa (DİA 7, 1993, s. 516-518) · TDV: akka (DİA 2, 1989, s. 265-267)" },

{ id:"kunye-konya-1832", savas_ad:"Konya Meydan Muharebesi", savas_t:"1832-12-21", tur:"meydan",
  baslik:"Konya Savaşı (21 Aralık 1832)",
  tarih_metin:"21 Aralık 1832'de yapılan meydan savaşında Osmanlı ordusu dağıldı; sadrazam yaralı olarak esir düştü",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Sadrazam ve serdar Reşid Mehmed Paşa", mevcut_toplam:80000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"bilinmiyor (ordu dağıldı; sadrazam yaralı esir)", notlar:"80.000: TDV resid-mehmed-pasa'ya göre sadrazamın 20 Kasım 1832'de Konya'ya ulaştığındaki toplam asker (Rumeli'den 30.000 kişiyle gelmiş, eğitimli topçu birlikleriyle takviye edilmişti). Savaş öncesinde 5-600 kişilik düzensiz Arnavut kuvveti İbrâhim Paşa tarafına geçti. Reşid Paşa meydan savaşı istemiyordu; Serasker Hüsrev Paşa'nın etkisiyle saldırı emri verildi." },
    { ad:"Mısır ordusu", devlet_id:"misir-kavalali", komutan:"Kavalalı İbrâhim Paşa", mevcut_toplam:"bilinmiyor (TDV: Osmanlı kuvvetlerinden daha az)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"TDV: disiplin ve eğitimde üstün. Zaferle İstanbul yolu açıldı; İbrâhim Paşa Kütahya'ya kadar ilerledi." }
  ],
  kaynak:"TDV: resid-mehmed-pasa (DİA 35, 2008, s. 12-14) · TDV: ibrahim-pasa-kavalali (DİA 21, 2000, s. 330-333) · TDV: kavalali-mehmed-ali-pasa (DİA 25, s. 62-65) · TDV: konya (DİA 26, 2002, s. 182-187)" },

{ id:"kunye-nizip-1839", savas_ad:"Nizip", savas_t:"1839-06-24", tur:"meydan",
  baslik:"Nizip Savaşı (24 Haziran 1839)",
  tarih_metin:"Hâfız Paşa kumandasındaki Osmanlı ordusu ile Mısır kuvvetleri arasında Nizip'te meydana gelen muharebe Osmanlı yenilgisiyle sonuçlandı (24 Haziran 1839)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Hâfız Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"bilinmiyor", notlar:"TDV ibrahim-pasa-kavalali: kurmay heyetinde Helmuth von Moltke gibi Prusyalı subaylar vardı. Yenilgi haberi İstanbul'a varmadan II. Mahmud öldü; donanma Kaptanıderyâ Ahmed Fevzi Paşa'nın ihanetiyle Mısır'a teslim edildi." },
    { ad:"Mısır ordusu", devlet_id:"misir-kavalali", komutan:"Kavalalı İbrâhim Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: ibrahim-pasa-kavalali (DİA 21, 2000, s. 330-333) · TDV: kavalali-mehmed-ali-pasa (DİA 25, s. 62-65)" },

{ id:"kunye-plevne-savunmasi-1877", savas_ad:null, savas_t:"1877-07-19", tur:"kusatma",
  baslik:"Plevne Savunması (8 Temmuz - 10 Aralık 1877)",
  tarih_metin:"Osman Paşa 7 Temmuz 1877'de Plevne'ye ulaştı; I. Plevne Muharebesi 8 Temmuz; savunma savaşları 8 Temmuz-10 Aralık 1877 [plevne-muharebeleri]; 'Osman Paşa 18 Temmuz'da Plevne'ye gelerek bu müstahkem mevkii geri aldı' [doksanuc-harbi]",
  celiski:"TDV plevne-muharebeleri ve gazi-osman-pasa: Plevne'ye varış 7 Temmuz, I. Plevne Muharebesi 8 Temmuz 1877; TDV doksanuc-harbi: Plevne'ye geliş 18 Temmuz; atlas kronolojisi: 1877-07-19. (TDV günleri Rumî/Jülyen takvimde olabilir — 7 Temmuz Jülyen = 19 Temmuz Gregoryen — ama maddeler takvimi belirtmiyor; bu bir çıkarımdır.)",
  taraflar:[
    { ad:"Osmanlı Plevne kolordusu", devlet_id:"osmanli", komutan:"Osman Paşa (sonra Gazi) · üst komuta: Tuna cephesi başkumandanı Serdâr-ı ekrem Abdülkerim Nâdir Paşa", mevcut_toplam:25000, piyade:"25 tabur", suvari:"6 bölük", top:"bilinmiyor", tufek:"bilinmiyor (TDV: Martini-Henri tüfekleri)", gemi:"yok", kayip:"bilinmiyor (I. muharebe için)", notlar:"25.000: Osman Paşa'nın Vidin'den 1 Temmuz'da yola çıktığı kuvvet; 25 tabur piyade ve 6 süvari bölüğü Plevne'ye varıştaki emrindeki güçler (TDV plevne-muharebeleri). Sonraki evreler için TDV rakamları bu künyeye değil kendi muharebelerine aittir: II. Plevne öncesi 33.000 muharip ve 58 top; huruç günü (10 Aralık) 40.000 nefer." },
    { ad:"Rus ordusu", devlet_id:"rusya", komutan:"Grandük Nikola (başkumandan) · General Krüdener (Batı Ordusu) · General Schilder (8 Temmuz saldırısı)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"I. Plevne'de yaklaşık 3000 ölü, bunların 74'ü subay (TDV: muharebeye katılan kuvvetlerinin yarısını kaybetti)", notlar:"Sonraki evreler: II. Plevne öncesi Rus mevcudu yaklaşık 60.000 ve 40-50 top; III. Plevne'de Rumen katılımıyla 100.000'i aşan mevcut ve 432 top; kuşatma sonunda 125.000 (doksanuc-harbi). Rumenler Eylül'den itibaren katıldı." }
  ],
  kaynak:"TDV: plevne-muharebeleri (DİA 34, 2007, s. 304-305) · TDV: gazi-osman-pasa (DİA 13, 1996, s. 464-465) · TDV: doksanuc-harbi (DİA 9, 1994, s. 498-499)" },

{ id:"kunye-domeke-1897", savas_ad:"Dömeke", savas_t:"1897-05-17", tur:"meydan",
  baslik:"Dömeke Savaşı (17 Mayıs 1897)",
  tarih_metin:"17 Mayıs'ta Dömeke Meydan Muharebesi'nde Yunanlılar'ı büyük bir bozguna uğrattı (1897)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Başkumandan Müşir Edhem Paşa (sonra Gazi)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"bilinmiyor", notlar:"TDV gazi-edhem-pasa: Edhem Paşa Alasonya ordu kumandanlığından başkumandanlığa getirildi; 18 Nisan Milona, 25 Nisan Yenişehir, 12 Mayıs Tırhala, 17 Mayıs Dömeke. TDV tesalya ise savaşta Osmanlı ordusunu 'Hâfız Abdülezel Paşa kumandasında' gösterir ve savaşı 7 Nisan-18 Mayıs 1897 diye tarihler — komutan adında maddeler arası çelişki." },
    { ad:"Yunan ordusu", devlet_id:"yunanistan", komutan:"bulunamadı (TDV gazi-edhem-pasa, tesalya, yunanistan anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: gazi-edhem-pasa (DİA 13, 1996, s. 449) · TDV: tesalya (DİA 40, 2011, s. 522-526) · TDV: yunanistan (DİA 43, 2013, s. 583-586)" },

{ id:"kunye-birinci-inonu-1921", savas_ad:"Birinci İnönü", savas_t:"1921-01-10", tur:"meydan",
  baslik:"Birinci İnönü Savaşı (10 Ocak 1921)",
  tarih_metin:"İsmet Bey kumandasındaki düzenli ordu birlikleri ... Yunan kuvvetlerini 10 Ocak'ta İnönü'de mağlûp etti [TDV milli-mucadele]; Birinci İnönü Muharebesi 6-11 Ocak 1921 [Atatürk Ansiklopedisi]",
  taraflar:[
    { ad:"TBMM Batı Cephesi kuvvetleri", komutan:"Batı Cephesi Komutanı Albay İsmet Bey (İnönü) · Genelkurmay Başkanı Vekili Fevzi Paşa", mevcut_toplam:8500, piyade:"bilinmiyor", suvari:"bilinmiyor", top:28, tufek:5500, gemi:"yok", kayip:"bilinmiyor", notlar:"10 Ocak günündeki mevcut (Atatürk Ansiklopedisi, Özlü): 24., 4., 11. Tümen ve Depo Alayları toplam 8500 asker, 5500 tüfek, 47 makineli tüfek, 28 top. TDV'de rakam yok." },
    { ad:"Yunan ordusu (Bursa grubu)", devlet_id:"yunanistan", komutan:"bulunamadı (TDV ve Atatürk Ansiklopedisi bu muharebe için anmıyor)", mevcut_toplam:"15.816 er + 427 subay", piyade:"yaklaşık iki piyade tümeni", suvari:"bir süvari tugayı", top:72, tufek:12500, gemi:"yok", kayip:"bilinmiyor (İsmet Bey'in 11 Ocak raporu: önemli kayıp)", notlar:"Atatürk Ansiklopedisi (Özlü): 427 subay, 15.816 er, 12.500 tüfek, 270 makineli tüfek, 120 ağır makineli tüfek, 72 top. Yunan taarruzu 10-11 Ocak gecesi durdu ve kuvvetler çekildi." }
  ],
  kaynak:"TDV: milli-mucadele (DİA 30, 2020, s. 76-83) · TDV: mustafa-kemal-ataturk (DİA 31, 2020, s. 310-331) · TDV: inonu-mustafa-ismet (DİA 22, 2000, s. 316-319) · Hüsnü Özlü, \"İnönü Muharebeleri\", Atatürk Ansiklopedisi, Atatürk Araştırma Merkezi (ATAM), çevrimiçi madde nr. 748 (https://apiko.ayk.gov.tr/v1/1/itemPublic/byId/748) (yayın 2021), sayfa numarası yok — dayandığı eserler: Türk İstiklal Harbi Batı Cephesi, Genelkurmay Harp Tarihi Dairesi, C.2 Kısım 3, Ankara 1966; Selışık, Türk İstiklal Savaşı'nda Birinci İnönü Muharebesi, ATASE 2006" },

{ id:"kunye-ikinci-inonu-1921", savas_ad:"İkinci İnönü", savas_t:"1921-04-01", tur:"meydan",
  baslik:"İkinci İnönü Savaşı (1 Nisan 1921)",
  tarih_metin:"Düşman 1 Nisan'da yine İnönü sırtlarında durduruldu [TDV milli-mucadele]; Yunanlılar İnönü'de ikinci defa yenilgiye uğratıldı (1 Nisan 1921) [TDV mustafa-kemal-ataturk]; İkinci İnönü Muharebesi 26-31 Mart 1921 [Atatürk Ansiklopedisi]",
  celiski:"TDV milli-mucadele ve mustafa-kemal-ataturk: 1 Nisan 1921 (atlasla aynı); Atatürk Ansiklopedisi (Özlü): 26-31 Mart 1921, en şiddetli çarpışmalar 28-30 Mart. Atlas kronolojisi: 1921-04-01.",
  taraflar:[
    { ad:"TBMM Batı Cephesi kuvvetleri", komutan:"Batı Cephesi Komutanı İsmet Bey (İnönü) · sağ cenah İzzettin Bey · sol cenah Arif Bey tümeni", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"3500 kılıç", top:104, tufek:34175, gemi:"yok", kayip:"bilinmiyor", notlar:"Muharebe öncesi silah mevcudu (Atatürk Ansiklopedisi, Özlü): 34.175 tüfek, 235 ağır makineli tüfek, 55 hafif makineli tüfek, 3500 kılıç, 104 top. 29 Mart'ta TBMM Muhafız Taburu cepheye katıldı (TDV de anar)." },
    { ad:"Yunan ordusu", devlet_id:"yunanistan", komutan:"General Papulas", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"3100 kılıç", top:220, tufek:41550, gemi:"yok", kayip:"bilinmiyor", notlar:"Muharebe öncesi silah mevcudu (Atatürk Ansiklopedisi, Özlü): 41.550 tüfek, 720 ağır makineli tüfek, 3134 hafif makineli tüfek, 3100 kılıç, 220 top. Uşak grubu aynı harekâtta Dumlupınar'ı ve Afyon'u aldı." }
  ],
  kaynak:"TDV: milli-mucadele (DİA 30, 2020, s. 76-83) · TDV: mustafa-kemal-ataturk (DİA 31, 2020, s. 310-331) · TDV: inonu-mustafa-ismet (DİA 22, 2000, s. 316-319) · TDV: cakmak-fevzi (DİA 8, 1993, s. 190-192) · Hüsnü Özlü, \"İnönü Muharebeleri\", Atatürk Ansiklopedisi, ATAM, çevrimiçi madde nr. 748 (https://apiko.ayk.gov.tr/v1/1/itemPublic/byId/748), sayfa yok" },

{ id:"kunye-sakarya-meydan-1921", savas_ad:"Sakarya", savas_t:"1921-09-13", tur:"meydan",
  baslik:"Sakarya Meydan Savaşı (23 Ağustos - 13 Eylül 1921)",
  tarih_metin:"Yunanlılar 23 Ağustos'ta saldırıya geçti; yirmi bir gün yirmi bir gece süren savaş; Yunanlılar Sakarya'nın batısına püskürtüldü (12 Eylül) [TDV mustafa-kemal-ataturk]; 'Sakarya Muharebesi'nin sonuçlanması 12-13 Eylül 1921' [TDV atatürk kronolojisi]; aralıksız 22 gün, 13 Eylül'de sona erdi [Atatürk Ansiklopedisi]",
  celiski:"TDV milli-mucadele ve mustafa-kemal-ataturk: 12 Eylül (aynı maddenin kronoloji bölümü: 12-13 Eylül 1921); Atatürk Ansiklopedisi (Yöney): 13 Eylül. Atlas kronolojisi: 1921-09-13.",
  taraflar:[
    { ad:"TBMM ordusu", komutan:"Başkomutan Mustafa Kemal Paşa · Genelkurmay Başkanı Fevzi Paşa (Çakmak) · Batı Cephesi Komutanı İsmet Paşa (İnönü)", mevcut_toplam:"96.326 er + 5.401 subay", piyade:"bilinmiyor", suvari:"1.309 kılıç", top:196, tufek:54572, gemi:"yok", kayip:"5.713 şehit, 18.480 yaralı, 828 esir, 14.268 kayıp", notlar:"Savaşın hemen öncesindeki mevcut (Atatürk Ansiklopedisi, Yöney): ayrıca 825 makineli tüfek, 32.137 hayvan, 1.284 araba, 2 uçak. Kayıplar aynı maddeden. TDV'de rakam yok." },
    { ad:"Yunan ordusu", devlet_id:"yunanistan", komutan:"bulunamadı (TDV milli-mucadele yalnız Kral Konstantin'in Haziran 1921'de ordunun başına geçmek üzere İzmir'e geldiğini yazar; muharebedeki komutayı yazmaz)", mevcut_toplam:"120.000 er + 3.780 subay", piyade:"bilinmiyor", suvari:"1.350 kılıç", top:386, tufek:57000, gemi:"yok", kayip:"3.758 can kaybı, 18.955 yaralı, 354 kayıp", notlar:"Atatürk Ansiklopedisi (Yöney): ayrıca 2.768 makineli tüfek, 3.800 hayvan, 600 adet 3 tonluk ve 240 adet 1 tonluk kamyon, 18 uçak." }
  ],
  kaynak:"TDV: milli-mucadele (DİA 30, 2020, s. 76-83) · TDV: mustafa-kemal-ataturk (DİA 31, 2020, s. 310-331; kronoloji DİA 31, s. 340-341) · TDV: cakmak-fevzi (DİA 8, 1993, s. 190-192) · Orhan Yöney, \"Sakarya Meydan Muharebesi (23 Ağustos-13 Eylül 1921)\", Atatürk Ansiklopedisi, ATAM, çevrimiçi madde nr. 216 (https://apiko.ayk.gov.tr/v1/1/itemPublic/byId/216) (yayın 2021), sayfa yok — dayandığı eserler: Türk İstiklal Harbi Batı Cephesi Sakarya Meydan Muharebesi ve Sonraki Harekât, C.II Kısım 5 Kitap 2, Genelkurmay, Ankara 1995; Sakarya Meydan Muharebesi Harp Tarihi Broşürü, Genelkurmay 1997" },

{ id:"kunye-baskumandanlik-meydan-1922", savas_ad:"Büyük Taarruz (Dumlupınar)", savas_t:"1922-08-30", tur:"meydan",
  baslik:"Başkumandanlık Meydan Savaşı (30 Ağustos 1922)",
  tarih_metin:"Büyük Taarruz 26 Ağustos 1922 günü başladı; kuşatma harekâtı 30 Ağustos'ta Başkumandan Mustafa Kemal Paşa'nın yönettiği Başkumandanlık Muharebesi ile tamamlandı [TDV milli-mucadele]; 30 Ağustos günü bir süvari tümeni Kütahya'yı kurtardı [TDV kutahya]",
  taraflar:[
    { ad:"TBMM ordusu (Batı Cephesi)", komutan:"Başkomutan Mustafa Kemal Paşa · Genelkurmay Başkanı Fevzi Paşa (savaş planlarını hazırladı) · Batı Cephesi Komutanı İsmet Paşa · 1. Ordu Nûreddin Paşa · 2. Ordu Yakup Şevki Paşa", mevcut_toplam:"199.283 er + 8.658 subay", piyade:"bilinmiyor", suvari:"5.282 kılıç", top:323, tufek:100352, gemi:"yok", kayip:"bilinmiyor", notlar:"Rakamlar Büyük Taarruz başlangıcındaki (26 Ağustos öncesi) bütün Batı Cephesi mevcududur, yalnız 30 Ağustos muharebesine katılanlar değil (Atatürk Ansiklopedisi, Koylu): ayrıca 2.025 hafif ve 839 ağır makineli tüfek, 10 uçak, 198 kamyon, 33 otomobil/ambulans. Kütahya'yı kurtaran süvari tümeni TDV kutahya'da adsız geçer." },
    { ad:"Yunan ordusu", devlet_id:"yunanistan", komutan:"General Trikopis (cephede; esir alındı) · Başkomutan Hacı Anesti (karargâhı İzmir'de) · General Digenis (esir)", mevcut_toplam:"218.205 er + 6.418 subay", piyade:"bilinmiyor", suvari:"1.280 kılıç", top:450, tufek:90000, gemi:"yok", kayip:"bilinmiyor (TDV: iki günde kuvvetlerinin yarısı savaş dışı kaldı; Trikopis başta olmak üzere çok sayıda subay ve er esir)", notlar:"Büyük Taarruz başlangıcındaki mevcut (Atatürk Ansiklopedisi, Koylu): ayrıca 3.139 hafif ve 128 ağır makineli tüfek, 50 uçak, 4.036 kamyon, 1.776 otomobil/ambulans. 30 Ağustos'ta 5 Yunan tümeni Aslıhanlar'da çevrildi. Trikopis TDV milli-mucadele'de 'Yunan başkumandan vekili' olarak geçer; Hacı Anesti ve Digenis yalnız Atatürk Ansiklopedisi'nde." }
  ],
  kaynak:"TDV: milli-mucadele (DİA 30, 2020, s. 76-83) · TDV: mustafa-kemal-ataturk (DİA 31, 2020, s. 310-331) · TDV: cakmak-fevzi (DİA 8, 1993, s. 190-192) · TDV: kutahya (DİA 26, 2002, s. 580-584) · TDV: afyonkarahisar (DİA 1, 1988, s. 443-446) · Zafer Koylu, \"Büyük Taarruz\", Atatürk Ansiklopedisi, ATAM, çevrimiçi madde nr. 4929 (https://apiko.ayk.gov.tr/v1/1/itemPublic/byId/4929) (yayın 2025), sayfa yok — dayandığı kaynaklar: Genkur ATASE Arşivi (Kutu 1786 Gömlek 154; Kutu 1784 Gömlek 118 vb.)" },

{ id:"kunye-kahire-sokak-savaslari-1517", savas_ad:"Tomanbay'ın Kahire baskını", savas_t:"1517-01-27", tur:"meydan",
  baslik:"Kahire Sokak Savaşları (27-30 Ocak 1517)",
  tarih_metin:"4-5 Muharrem 923 (27-28 Ocak 1517) gecesi Tomanbay Kahire'ye girdi; üç gün sokak çarpışması (ridaniye-savasi). selim-i: 27-28 Ocak gecesi; tomanbay: 28 Ocak gecesi",
  celiski:"TDV tomanbay baskını '28 Ocak gecesi' diye verir; ridaniye-savasi ve selim-i 27-28 Ocak gecesi der; atlas kronolojisi: 1517-01-27 (gece başlangıcıyla uyumlu)",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"Yavuz Sultan Selim · Yûnus Paşa (ilk gün şehre gönderildi)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Selim ilk gün kontrolü sağlayamayınca ikinci gün ikindi vakti bizzat şehre girdi, üçüncü gün direnişi kırdı (selim-i). Ridaniye öncesi Birketülhac yoklamasında ordu 20.000 idi (ridaniye-savasi) — bu sokak savaşına ait sayı değildir." },
    { ad:"Memlük kuvvetleri (Tomanbay) ve Kahire halkı", devlet_id:"memluk", komutan:"Tomanbay", mevcut_toplam:"7000 (tomanbay maddesi: 10.000 veya 7000)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"ridaniye-savasi: Tomanbay 7000 kişiyle şehre girdi; tomanbay maddesi 10.000 (veya 7000) der. Halk Tomanbay'a destek verdi. Tomanbay üç gün sonra Nil'i geçip Saîd'e çekildi." }
  ],
  kaynak:"TDV: ridaniye-savasi (DİA 35, 2008, s. 87-88) · TDV: tomanbay (DİA 41, 2012, s. 236-237) · TDV: selim-i (DİA 36, 2009, s. 407-414)" },

{ id:"kunye-cidde-savunmasi-1517", savas_ad:"Cidde savunması", savas_t:"1517-04-18", tur:"deniz",
  baslik:"Cidde Savunması (18 Nisan 1517)",
  tarih_metin:"26 Rebîülevvel 923 (18 Nisan 1517) tarihli raporda Portekiz donanmasının Cidde'yi kuşattığı bildirildi (selman-reis)",
  taraflar:[
    { ad:"Cidde müdafileri (Selman Reis)", devlet_id:"osmanli", komutan:"Selman Reis", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"birkaç kadırga (sayı yok)", kayip:"ilk anda Selman Reis'e ait 4 gemi yandı", notlar:"Selman Reis birkaç kadırga ile hücum edip top ateşiyle 2-3 Portekiz gemisini batırdı (Bâ Mahreme'ye dayanarak selman-reis). Portekizlilerin karaya çıkmasına izin verilmedi. Selman Reis bu sırada Yavuz Selim tarafından Mısır'a çağrılmıştı; halkın isteğiyle Cidde'de kaldı." },
    { ad:"Portekiz donanması", devlet_id:"portekiz", komutan:"bulunamadı (TDV selman-reis ve cidde anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"yok", top:"bilinmiyor", tufek:"bilinmiyor", gemi:30, kayip:"2-3 gemi batırıldı (Bâ Mahreme, TDV selman-reis aktarımı)", notlar:"Otuz barça ve kadırga (Selman Reis'in raporu, TSMA E. 8337 / E. 5902)." }
  ],
  kaynak:"TDV: selman-reis (DİA 36, 2009, s. 444-446) · TDV: cidde (bakıldı; 1517 saldırısını anmıyor, 1541 hücumunu anar)" },

{ id:"kunye-yergogu-baskini-1595", savas_ad:null, savas_t:"1595-10-01", tur:"meydan",
  baslik:"Yergöğü Baskını (Ekim 1595)",
  tarih_metin:"1595 Ekiminde Eflak'tan dönen orduyu takip eden akıncılar Yergöğü'nde Eflak Voyvodası Mihal'in baskınına uğradı (yergogu)",
  taraflar:[
    { ad:"Osmanlı ordusu (çekilen ordu ve akıncılar)", devlet_id:"osmanli", komutan:"Koca Sinan Paşa (seferin serdarı/sadrazam; baskındaki birliğin komutanı TDV'de adıyla yok)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"koca-sinan-pasa: Eflak üzerine yürüdüyse de başarılı olamadı; bu başarısızlıklar yüzünden 19 Kasım 1595'te azledildi." },
    { ad:"Eflak kuvvetleri", devlet_id:"eflak", komutan:"Eflak Voyvodası Mihal", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: yergogu (DİA 43, 2013, s. 483-484) · TDV: koca-sinan-pasa (DİA 26, 2002, s. 137-139)" },

{ id:"kunye-birinci-budin-savunmasi-1684", savas_ad:null, savas_t:"1684-07-14", tur:"kusatma",
  baslik:"Birinci Budin Savunması (Temmuz-Ekim 1684)",
  tarih_metin:"Avusturyalılar 20 Zilkade 1095 (29 Ekim 1684) gününden itibaren Budin muhasarasını kaldırıp çekildi; kale üç aya yakın savunuldu (ibrahim-pasa-melek)",
  taraflar:[
    { ad:"Budin garnizonu", devlet_id:"osmanli", komutan:"Kara Mehmed Paşa (Budin valisi; kuşatmada öldü) · Şeytan/Melek İbrâhim Paşa (muhafız, sonra vali)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"TDV: az sayıda asker ve mühimmatla savunuldu; huruç hareketleriyle Avusturya ordugâhından barut alındı. İbrâhim Paşa'nın elçiye söylediği 'kalede 100.000 asker, beş yıllık yiyecek' sözü bir savaş hilesidir, gerçek mevcut DEĞİLDİR. Kurtarmaya 40.000 kadar Kırım askerinin geldiği haberi çekilmede rol oynadı. Başarı üzerine IV. Mehmed 'Şeytan' lakabını 'Melek'e çevirdi." },
    { ad:"Avusturya (Kutsal İttifak) ordusu", devlet_id:"habsburg", komutan:"bulunamadı (TDV ibrahim-pasa-melek 1684 için adını vermiyor)", mevcut_toplam:"bilinmiyor ('çok kalabalık' denir)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", kayip:"büyük kayıplar (sayı yok)", notlar:"Çekilirken cephane ve top bıraktılar; bunlar kaleye alındı." }
  ],
  kaynak:"TDV: ibrahim-pasa-melek (DİA 21, 2000, s. 335-337) · TDV: budin (bakıldı; 1684'ü anmıyor)" },

{ id:"kunye-egriboz-1688", savas_ad:"Eğriboz savunması", savas_t:"1688-10-20", tur:"kusatma",
  baslik:"Eğriboz Kuşatması (1688)",
  tarih_metin:"1687-1688 kışında tahkim; Venedik kuşatması üç aydan fazla sürdü (egriboz). Gün verilmiyor",
  taraflar:[
    { ad:"Eğriboz garnizonu", devlet_id:"osmanli", komutan:"bulunamadı (TDV egriboz anmıyor)", mevcut_toplam:6000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"en az 40 (yalnız Karababa tepesindeki yeni istihkâm)", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"6000 savunma askeri ve Karababa tabyasındaki 40 top TDV egriboz'da kuşatma öncesi hazırlık olarak verilir; kale toplarının toplamı bilinmiyor." },
    { ad:"Venedik ordusu", devlet_id:"venedik", komutan:"bulunamadı (TDV egriboz anmıyor)", mevcut_toplam:15000, piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"ağır kayıplar (sayı yok)", notlar:"15.000 kişilik Venedik ordusu (egriboz)." }
  ],
  kaynak:"TDV: egriboz (DİA 10, 1994, s. 491-493)" },

{ id:"kunye-korfu-1716", savas_ad:"Korfu kuşatması", savas_t:"1716-08-20", tur:"kusatma",
  baslik:"Korfu Kuşatması (1716)",
  tarih_metin:"1128 (1716), Mora seferinin sonlarında (korfu)",
  taraflar:[
    { ad:"Osmanlı ordusu ve donanması", devlet_id:"osmanli", komutan:"Mora Seraskeri Kara Mustafa Paşa (karadan) · Kaptanıderyâ Canım Hoca Mehmed Paşa (denizden)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Kuşatma gücü yetersiz kaldı; Venedik donanmasının takviyesi ve Petervaradin yenilgisi (Damad Ali Paşa'nın şehadeti) haberi üzerine kuşatma kaldırıldı (korfu, ahmed-iii)." },
    { ad:"Korfu Venedik garnizonu", devlet_id:"venedik", komutan:"bulunamadı (TDV korfu anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Evliya Çelebi'nin kalede 700 balyemez top bildirdiği bilgi 17. yüzyıla aittir, 1716 kuşatmasının sayısı değildir." }
  ],
  kaynak:"TDV: korfu (DİA 26, 2002, s. 201-202) · TDV: ahmed-iii (DİA 2, 1989, s. 34-38)" },

{ id:"kunye-musul-savunmasi-1743", savas_ad:"Musul savunması", savas_t:"1743-10-23", tur:"kusatma",
  baslik:"Musul Savunması (Eylül-Ekim 1743)",
  tarih_metin:"nadir-sah--iran: 8 Şâban 1156 (27 Eylül 1743) başlayan kuşatma bir hafta sonra kaldırıldı. musul--irak: Şâban 1156 (Ekim 1743); en şiddetli hücum 15 Şâban (4 Ekim 1743), ertesi gün kuşatma kaldırıldı",
  celiski:"TDV nadir-sah--iran ve musul--irak kuşatmanın 5 Ekim 1743 dolayında kaldırıldığını verir; atlas kronolojisi: 1743-10-23",
  taraflar:[
    { ad:"Musul müdafileri", devlet_id:"osmanli", komutan:"Musul Valisi Hüseyin Celil Paşa (Baştabya Kalesi'ni karargâh yaptı)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" },
    { ad:"Nâdir Şah ordusu (Afşar İran)", komutan:"Nâdir Şah", mevcut_toplam:"400.000 (rivayet)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:390, tufek:"bilinmiyor", gemi:"yok", notlar:"400.000 TDV nadir-sah--iran'da 'olduğu rivayet edilen' ordu, sefere çıkan bütün ordu için; abartılı olabilir. 390 top on dört bataryada (musul--irak). On iki tabya kuruldu, on iki hücum yapıldı. devlet_id listesinde Afşar İran yok." }
  ],
  kaynak:"TDV: musul--irak (DİA 31, s. 361-363) · TDV: nadir-sah--iran (DİA 32, 2006, s. 276-277)" },

{ id:"kunye-yilan-adasi-deniz-1788", savas_ad:null, savas_t:"1788-01-01", tur:"deniz",
  baslik:"Yılan Adası Deniz Muharebesi (Ağustos 1788)",
  tarih_metin:"Ağustos 1788'de yapılan Yılan Adası Muharebesi (cezayirli-gazi-hasan-pasa)",
  celiski:"TDV cezayirli-gazi-hasan-pasa: Ağustos 1788; atlas kronolojisi: 1788-01-01 (yıl başı). Ayrıca TDV muharebeyi Hasan Paşa'nın Rus donanmasını mağlûp ettiği bir savaş olarak anar",
  taraflar:[
    { ad:"Osmanlı donanması", devlet_id:"osmanli", komutan:"Kaptanıderyâ Cezayirli Gazi Hasan Paşa", mevcut_toplam:"bilinmiyor", piyade:"yok", suvari:"yok", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"TDV'ye göre Hasan Paşa Rus donanmasını mağlûp etti ama Özü'nün düşmesine engel olamadı." },
    { ad:"Rus donanması", devlet_id:"rusya", komutan:"bulunamadı (TDV cezayirli-gazi-hasan-pasa anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"yok", suvari:"yok", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor" }
  ],
  kaynak:"TDV: cezayirli-gazi-hasan-pasa (DİA 7, 1993, s. 501-503)" },

{ id:"kunye-foksan-bozgunu-1789", savas_ad:null, savas_t:"1789-08-01", tur:"meydan",
  baslik:"Fokşan Bozgunu (1 Ağustos 1789)",
  tarih_metin:"1 Ağustos 1789'da Fokşan'da (yusuf-pasa-koca; cezayirli-gazi-hasan-pasa); 'ağustos başında' (hasan-pasa-kethuda)",
  taraflar:[
    { ad:"Osmanlı kuvvetleri", devlet_id:"osmanli", komutan:"Kemankeş Mustafa Paşa (Sadrazam Kethüdâ Hasan Paşa'nın ileri sürdüğü kuvvetler)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" },
    { ad:"Karşı taraf (TDV adını vermiyor)", komutan:"bulunamadı (TDV hasan-pasa-kethuda, yusuf-pasa-koca anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok" }
  ],
  kaynak:"TDV: hasan-pasa-kethuda (DİA 16, 1997, s. 337-338) · TDV: yusuf-pasa-koca (DİA 44, 2013, s. 23-25) · TDV: cezayirli-gazi-hasan-pasa (DİA 7, 1993, s. 501-503)" },

{ id:"kunye-kalafat-cikarmasi-1790", savas_ad:null, savas_t:"1790-01-01", tur:"meydan",
  baslik:"Kalafat Çıkarması (Nisan 1790)",
  tarih_metin:"Nisan sonlarında Vidin'den hareketle Tuna üzerinden Kalafat'a çıkan Osmanlı kuvvetleri hızla geri püskürtüldü (zistovi-antlasmasi, 1790 olayları)",
  celiski:"TDV zistovi-antlasmasi: Nisan 1790 sonları; atlas kronolojisi: 1790-01-01 (yıl başı)",
  taraflar:[
    { ad:"Osmanlı kuvvetleri (Vidin'den)", devlet_id:"osmanli", komutan:"bulunamadı (TDV zistovi-antlasmasi anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor" },
    { ad:"Avusturya kuvvetleri", devlet_id:"habsburg", komutan:"bulunamadı (TDV zistovi-antlasmasi anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Karşı tarafın Avusturya olduğu paragraf bağlamından (Avusturya cephesi 1790 harekâtı) çıkar." }
  ],
  kaynak:"TDV: zistovi-antlasmasi (DİA 44, 2013, s. 467-472)" },

{ id:"kunye-yergogu-savunmasi-1790", savas_ad:null, savas_t:"1790-06-08", tur:"kusatma",
  baslik:"Yergöğü Savunması (8 Haziran 1790)",
  tarih_metin:"Avusturya kuvvetleri 8 Haziran 1790'da Yergöğü'ne kadar indilerse de geri püskürtüldü (yergogu)",
  taraflar:[
    { ad:"Yergöğü müdafileri", devlet_id:"osmanli", komutan:"bulunamadı (TDV yergogu, zistovi-antlasmasi anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"zistovi-antlasmasi: Yergöğü iyi bir savunma ortaya koydu. Kale 1789-1790'da esaslı tamir görmüştü." },
    { ad:"Avusturya kuvvetleri", devlet_id:"habsburg", komutan:"Prens Coburg", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"ağır kayıplar (sayı yok)", notlar:"Coburg Yergöğü'nü boşuna sıkıştırıp ağır kayıplarla Bükreş'e döndü (zistovi-antlasmasi)." }
  ],
  kaynak:"TDV: yergogu (DİA 43, 2013, s. 483-484) · TDV: zistovi-antlasmasi (DİA 44, 2013, s. 467-472)" },

{ id:"kunye-ibrail-1791", savas_ad:null, savas_t:"1791-01-01", tur:"kusatma",
  baslik:"İbrâil Kuşatması (Haziran 1791)",
  tarih_metin:"Kalesi ertesi yılın (1791) haziranında Ruslar tarafından kuşatıldıysa da alınamadı (ibrail)",
  celiski:"TDV ibrail: Haziran 1791; atlas kronolojisi: 1791-01-01 (yıl başı)",
  taraflar:[
    { ad:"İbrâil garnizonu", devlet_id:"osmanli", komutan:"bulunamadı (TDV ibrail anmıyor)", mevcut_toplam:"2000 (1790 garnizonu)", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"2000 kişi TDV'de 1790 yılı muhafız mevcudu olarak verilir; 1791 kuşatması anındaki sayı değildir." },
    { ad:"Rus kuvvetleri", devlet_id:"rusya", komutan:"bulunamadı (TDV ibrail anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor" }
  ],
  kaynak:"TDV: ibrail (DİA 21, 2000, s. 363-366)" },

{ id:"kunye-ebukir-1798", savas_ad:null, savas_t:"1798-08-01", tur:"deniz",
  baslik:"Ebûkīr (Nil) Deniz Muharebesi (1 Ağustos 1798)",
  tarih_metin:"1 Ağustos 1798 (ebukir)",
  taraflar:[
    { ad:"İngiliz donanması", devlet_id:"ingiltere", komutan:"Amiral Nelson", mevcut_toplam:"bilinmiyor", piyade:"yok", suvari:"yok", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor" },
    { ad:"Fransız donanması", devlet_id:"fransa", komutan:"bulunamadı (TDV ebukir anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"yok", suvari:"yok", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", kayip:"donanma imha edildi (sayı yok)", notlar:"Fransız kara ordusu deniz desteğinden mahrum kaldı." }
  ],
  kaynak:"TDV: ebukir (DİA 10, 1994, s. 279-280)" },

{ id:"kunye-ebukir-kara-1799", savas_ad:null, savas_t:"1799-07-25", tur:"meydan",
  baslik:"Ebûkīr Kara Muharebesi (25 Temmuz 1799)",
  tarih_metin:"25 Temmuz 1799 (ebukir)",
  taraflar:[
    { ad:"Osmanlı kuvvetleri", devlet_id:"osmanli", komutan:"Köse Mustafa Paşa", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Yenildi; Ebûkīr Kalesi Fransızlar'ın eline geçti." },
    { ad:"Fransız ordusu", devlet_id:"fransa", komutan:"Napolyon Bonapart", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"yok", notlar:"Akkâ'dan mağlup dönen ordu (ebukir)." }
  ],
  kaynak:"TDV: ebukir (DİA 10, 1994, s. 279-280)" },

{ id:"kunye-ingiliz-donanmasinin-istanbul-onlerine-g-1807", savas_ad:null, savas_t:"1807-02-20", tur:"deniz",
  baslik:"İngiliz Donanmasının İstanbul Önlerine Gelişi (Şubat 1807)",
  tarih_metin:"1807 yılının 19 Şubatında İngiliz donanması Çanakkale Boğazı'ndan geçti (canakkale-bogazi); İstanbul önlerine geldi (Şubat 1807), şubat sonunda çekildi (selim-iii)",
  celiski:"TDV canakkale-bogazi Boğaz geçişini 19 Şubat 1807 verir; İstanbul önlerine varış günü TDV'de yok; atlas kronolojisi: 1807-02-20",
  taraflar:[
    { ad:"Osmanlı (Boğaz kaleleri ve İstanbul)", devlet_id:"osmanli", komutan:"Sultan III. Selim (TDV sahadaki komutanı anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Filo Boğaz'dan fazla zorlukla karşılaşmadan geçti; blokaj şehirde kıtlık ve pahalılığa yol açtı." },
    { ad:"İngiliz filosu", devlet_id:"ingiltere", komutan:"bulunamadı (TDV selim-iii ve canakkale-bogazi Duckworth'u anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"yok", suvari:"yok", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor" }
  ],
  kaynak:"TDV: selim-iii (DİA 36, 2009, s. 420-425) · TDV: canakkale-bogazi (DİA 8, 1993, s. 199-203)" },

{ id:"kunye-ibrail-in-dususu-1809", savas_ad:null, savas_t:"1809-12-02", tur:"kusatma",
  baslik:"İbrâil'in Düşüşü (2 Aralık 1809)",
  tarih_metin:"1809'da Kaminski kumandasındaki Rus kuvvetlerince kuşatılıp topa tutuldu; yiyecek sıkıntısı yüzünden 2 Aralık'ta General Essen'e teslim edildi (ibrail)",
  taraflar:[
    { ad:"İbrâil garnizonu", devlet_id:"osmanli", komutan:"bulunamadı (TDV ibrail anmıyor)", mevcut_toplam:5200, piyade:4100, suvari:1100, top:260, tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"4100 piyade + 1100 atlı ve 260 top teslim anında kalede bulunan mevcuttur (ibrail); toplam 5200 bu ikisinin toplamıdır. Teslim sebebi yiyecek sıkıntısı." },
    { ad:"Rus kuvvetleri", devlet_id:"rusya", komutan:"Kaminski · General Essen (teslimi alan)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor" }
  ],
  kaynak:"TDV: ibrail (DİA 21, 2000, s. 363-366)" },

{ id:"kunye-ruscuk-un-teslimi-1810", savas_ad:null, savas_t:"1810-09-26", tur:"kusatma",
  baslik:"Rusçuk'un Teslimi (26 Eylül 1810)",
  tarih_metin:"26 Eylül 1810'da garnizonun ve sivillerin güvenle çıkması karşılığında teslim oldu (ruscuk); üç ay muhasaradan sonra 25 Eylül 1810'da ele geçirildi (yusuf-ziya-pasa)",
  celiski:"TDV yusuf-ziya-pasa: 25 Eylül 1810; TDV ruscuk: 26 Eylül 1810; atlas kronolojisi: 1810-09-26",
  taraflar:[
    { ad:"Rusçuk garnizonu", devlet_id:"osmanli", komutan:"bulunamadı (TDV ruscuk, yusuf-ziya-pasa anmıyor)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Uzun ve kanlı kuşatmaya direndi; garnizon ve siviller güvenle çıkma şartıyla teslim oldu. Sadrazam Yûsuf Ziyâ Paşa dönemi." },
    { ad:"Rus ordusu", devlet_id:"rusya", komutan:"Kont Kaminski", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor" }
  ],
  kaynak:"TDV: ruscuk (DİA 35, 2008, s. 246-250) · TDV: yusuf-ziya-pasa (DİA 44, 2013, s. 34-37)" },

{ id:"kunye-ruscuk-1811", savas_ad:null, savas_t:"1811-07-04", tur:"meydan",
  baslik:"Rusçuk Muharebesi (1811)",
  tarih_metin:"1811 Haziranında alınan ağır yenilgiler ve tersliklerden sonra Ruslar geri çekilmeye zorlandı (ruscuk)",
  celiski:"TDV ruscuk: Haziran 1811 (takvim belirtilmemiş; Jülyen olabilir); atlas kronolojisi: 1811-07-04",
  taraflar:[
    { ad:"Osmanlı ordusu", devlet_id:"osmanli", komutan:"bulunamadı (TDV ruscuk anmıyor; ahmed-pasa-laz slug'ı ölü)", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor" },
    { ad:"Rus ordusu", devlet_id:"rusya", komutan:"Başkumandan Kutuzov", mevcut_toplam:"bilinmiyor", piyade:"bilinmiyor", suvari:"bilinmiyor", top:"bilinmiyor", tufek:"bilinmiyor", gemi:"bilinmiyor", notlar:"Çekilmeden önce Kutuzov şehrin istihkâmını ve kaleyi havaya uçurttu; şehir yangından büyük zarar gördü (ruscuk). TDV 'ağır yenilgiler' der ama muharebenin adını ve sonucunu ayrıca anlatmaz." }
  ],
  kaynak:"TDV: ruscuk (DİA 35, 2008, s. 246-250)" },
];

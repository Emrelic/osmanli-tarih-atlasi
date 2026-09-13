// =====================================================================
// PAKET 0057 — P09-ISGAL1919 (14 Eylül 2026, 1.MURAT sevki,
// denetim/PAKET-SINIF2-0914.md "### P09")
// Oturum: P09-ISGAL1919 · rapor denetim/P09-ISGAL1919-0914.md
//
// KALEMLER (Emre parti-emrelic-0039)
//   H-0003  Yunan ilerleyişi ve Türk kurtarışı gün be gün (1919-1922)
//   H-0004  doğu/güney cephesi: İtalyan gelişi-gidişi · İngiliz · Rus (Batum, Nahçıvan)
//   H-0005  işgal taraması — yerleşim `isg:` inişleri denetim/YAMA-ISGAL1919-0914.json'da
//           (yerlesimler.js KİLİTLİ; bu maddeler o yamanın kırılma günlerini karşılar)
//
// KAYNAK: hepsi TDV, gövdeleri okundu (denetim/ARAC-A6A-TDV-0913.py ile çekildi):
//   izmir · manisa · aydin · bursa · usak · kutahya · afyonkarahisar · eskisehir ·
//   bilecik · alasehir · izmit · adapazari · isparta · mugla · bodrum · kirklareli ·
//   tekirdag · edirne · batum · nahcivan · milli-mucadele · sevr-antlasmasi
//   Ölü (302) ölçülen: sakarya-meydan-muharebesi · buyuk-taarruz · kutahya-eskisehir-
//   muharebeleri · inonu-muharebeleri · ayvalik · bandirma · soke · kusadasi · marmaris ·
//   fethiye · odemis · nazilli · salihli · simav · edremit · yunan-isgali · trakya
//   Atlas dönemleri DAYANAK DEĞİLDİR (§4). Kaynağın gün vermediği yerde gün yazılmadı.
//
// ETİKET: işgal maddeleri `toprak-kazanc`/`toprak-kaybi` TAŞIMAZ — haritadaki değişim
//   taban sahipliği değil `isg:` örtüsüdür (taralı desen). Değişmez 2t'yi şişirmez.
//
// 🔴 D147 HER GÜN İÇİN ÖNCEDEN ÖLÇÜLDÜ (denetim/ARAC-A3-KIRILMA-0913.py ③):
//   25 günün 22'sinde sahte kapanış 0. 1921-06-28 · 1921-07-05 · 1921-07-20 ±30
//   gününde 1921-07-11 Moğolistan (cin-cumhuriyeti → mogolistan, 12 nokta) maddesiz
//   kırılması var; bu maddeler onu "maddeli" gösterir. O kırılma 2s KAPSAM DIŞI
//   kovasındadır (Osmanlı küresine >2014 km) — AÇIK borç gizlenmez; rapor ediliyor.
// AD ALANI (§7): data/olaylar_p0057.js → window.OLAYLAR_P0057
// 🔴 index.html satırı BAĞLI DEĞİL — koordinatör bağlar (D099). denetle.py
//   olaylar*.js glob'uyla okur, Değişmez 2 evrenine BUGÜN girer.
// =====================================================================

window.OLAYLAR_P0057 = [

// ── 1919 ───────────────────────────────────────────────────────────
{ t:"1919-01-23", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Eskişehir'in İngilizlerce işgali",
  gun:"23 Ocak 1919",
  yer:"Eskişehir", yer_id:"Eskişehir", kisiler:"",
  d:"Mondros Mütarekesi'nin ardından İtilaf devletleri Anadolu'nun demiryolu kavşaklarını denetim altına almaya başladı. TDV'nin Eskişehir maddesine göre şehir 23 Ocak 1919'da İngilizler tarafından işgal edildi. İngiliz birlikleri Eskişehir'i 20 Mart 1920'de boşalttı.",
  kaynak:"eskisehir" },

{ t:"1919-05-11", k:"kayip", etiket:["isgal","konu-askeri","konu-diplomasi"],
  b:"İtalyanların Güneybatı Anadolu kıyılarına çıkışı — Marmaris, Bodrum, Kuşadası",
  gun:"5-13 Mayıs 1919",
  ic_not_gun:"Madde günü Bodrum'un işgal günüdür (TDV bodrum: 11 Mayıs 1919). Marmaris 5 Mayıs ve Kuşadası 13 Mayıs günleri TDV sevr-antlasmasi. Üç yerin İtalyan tahliye günü bu kaynaklarda YOK — yerleşim isg dönemleri yazılmadı (YAMA-ISGAL1919 KARAR kovası).",
  yer:"Bodrum, Marmaris, Kuşadası, Fethiye", yer_id:"Bodrum", kisiler:"",
  d:"Paris Barış Konferansı'nda müttefiklerinin Yunan yanlısı tutumunu protesto ederek konferanstan çekilen İtalya, Antalya'dan sonra güneybatı kıyılarına asker çıkardı. TDV'ye göre 5 Mayıs'ta Marmaris, 11 Mayıs'ta Bodrum, 13 Mayıs'ta Kuşadası İtalyan işgaline uğradı. Aynı günlerde Yunanlılar da Fethiye'ye çıktı; iki devletin Batı Anadolu üzerindeki rekabeti İzmir'in işgaline giden yolu hazırladı.",
  kaynak:"bodrum · sevr-antlasmasi" },

{ t:"1919-05-26", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Yunan kuvvetlerinin Manisa ve Aydın'a girişi",
  gun:"26-27 Mayıs 1919",
  ic_not_gun:"Manisa 26 Mayıs (TDV manisa), Aydın 27 Mayıs (TDV aydin). Atlas Aydın'ı İzmir'le aynı gün (1919-05-15) Yunan gösteriyordu — yerleşim düzeltmesi YAMA-ISGAL1919'da.",
  yer:"Manisa, Aydın", yer_id:"Manisa", kisiler:"",
  d:"İzmir'e 15 Mayıs'ta çıkan Yunan ordusu kısa sürede iç kesimlere yayıldı. TDV'nin Manisa maddesine göre Yunan kuvvetleri 26 Mayıs 1919'da şehre girdi; Aydın maddesine göre Aydın ertesi gün, 27 Mayıs'ta işgal edildi. Manisa işgali 1922 Eylülüne kadar sürecekti.",
  kaynak:"manisa · aydin" },

{ t:"1919-06-28", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Burdur'un İtalyan işgali — Isparta'ya yönelen bölüğün geri çekilişi",
  gun:"28 Haziran 1919",
  ic_not_gun:"Gün TDV isparta (paragraf 1919 olaylarını anlatıyor: 20 Haziran 1919 mitingi → 28 Haziran Burdur). TDV burdur işgali yalnız '1919-1921' diye yıl aralığıyla veriyor; tahliye günü yok.",
  yer:"Burdur, Isparta", yer_id:"Burdur", kisiler:"",
  d:"Antalya'yı işgal eden İtalyanlar iç bölgelere doğru ilerledi. TDV'nin Isparta maddesine göre İtalyan birlikleri 28 Haziran'da Burdur'u işgal etti ve 15 Ağustos'ta bir bölük askerle Isparta'ya yöneldi. Isparta halkının silahları teslim teklifini reddedip direneceğini bildirmesi üzerine İtalyanlar ertesi gün geri çekildi.",
  kaynak:"isparta · burdur" },

{ t:"1919-06-30", k:"savas", etiket:["savas","kurtulus","isgal","konu-askeri"],
  b:"Aydın'ın kısa süreli kurtarılışı ve 4 Temmuz'da yeniden işgali",
  gun:"30 Haziran – 4 Temmuz 1919",
  yer:"Aydın", yer_id:"Aydın", kisiler:"",
  d:"Yunan işgaline karşı Ödemiş, Nazilli ve Aydın çevresinde millî kuvvetler teşkilatlandı. TDV'nin Aydın maddesine göre 27 Mayıs 1919'da işgal edilen şehir 30 Haziran'da kısa bir süre için kurtarıldı, ancak 4 Temmuz'da yeniden Yunan işgaline uğradı. Şehir bundan sonra 7 Eylül 1922'ye kadar işgal altında kaldı.",
  kaynak:"aydin · milli-mucadele" },

{ t:"1919-07-23", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Muğla'nın İtalyan işgali",
  gun:"23 Temmuz 1919",
  yer:"Muğla", yer_id:"Muğla", kisiler:"",
  d:"İtalya, güneybatı kıyılarındaki işgalini iç kesimlere doğru genişletti. TDV'nin Muğla maddesine göre şehir 23 Temmuz 1919'da İtalyan işgaline uğradı. Muğla'nın işgali 5 Temmuz 1921'e kadar sürdü.",
  kaynak:"mugla" },

// ── 1920 ───────────────────────────────────────────────────────────
{ t:"1920-03-20", k:"siyaset", etiket:["isgal","konu-askeri"],
  b:"İngilizlerin Eskişehir'i boşaltması",
  gun:"20 Mart 1920",
  yer:"Eskişehir", yer_id:"Eskişehir", kisiler:"",
  d:"Ocak 1919'dan beri İngiliz işgalinde bulunan Eskişehir, TDV'nin Eskişehir maddesine göre 20 Mart 1920'de İngilizler tarafından boşaltıldı. Şehir birkaç ay sonra, Haziran 1920'de, TBMM'nin kurduğu Garp Cephesi'nin merkezi oldu.",
  kaynak:"eskisehir" },

{ t:"1920-06-22", k:"savas", etiket:["savas","isgal","konu-askeri"],
  b:"Yunan yaz taarruzu — Akhisar, Soma, Balıkesir ve Alaşehir'in işgali",
  gun:"22 Haziran – 3 Temmuz 1920",
  ic_not_gun:"Taarruzun başlangıç günü ve Alaşehir (26 Haziran) · Nazilli (3 Temmuz) günleri TDV milli-mucadele; Alaşehir'in 26 Haziran 1920 günü TDV alasehir ile de örtüşüyor. Akhisar, Kırkağaç, Soma ve Balıkesir'in tek tek işgal günleri TDV'de YOK (yalnız sıra veriliyor).",
  yer:"Akhisar, Kırkağaç, Soma, Balıkesir, Alaşehir, Nazilli", yer_id:"Balıkesir", kisiler:"",
  d:"Müttefiklerin Yunan ordusuna Milne hattını aşarak ilerleme izni vermesiyle Batı Anadolu'da büyük bir Yunan taarruzu başladı. TDV'nin Millî Mücadele maddesine göre 22 Haziran'da üç koldan harekete geçen Yunan birlikleri Akhisar, Kırkağaç, Soma ve Balıkesir'i ele geçirdi. Güneyde 26 Haziran'da Alaşehir, 3 Temmuz'da Nazilli işgal edildi.",
  kaynak:"milli-mucadele · alasehir" },

{ t:"1920-07-08", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Bursa'nın Yunan işgali",
  gun:"8 Temmuz 1920",
  yer:"Bursa", yer_id:"Bursa", kisiler:"",
  d:"Yaz taarruzunun kuzey kolu Balıkesir'den sonra Marmara'ya yöneldi. TDV'nin Bursa ve Millî Mücadele maddelerine göre Bursa 8 Temmuz 1920'de Yunan işgaline uğradı. İlk Osmanlı hükümdarlarının türbelerine yapılan saygısızlıklar ülke çapında büyük tepki doğurdu.",
  kaynak:"bursa · milli-mucadele" },

{ t:"1920-07-20", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırklareli",
  gun:"20-26 Temmuz 1920",
  ic_not_gun:"20 Temmuz TDV milli-mucadele ('bütün Trakya'). Kırklareli 26 Temmuz 1920 TDV kirklareli; Edirne yalnız 'Temmuz 1920' TDV edirne. 🔴 ÇELİŞKİ: TDV tekirdag Yunanlıların Tekirdağ'a girişini 20 HAZİRAN 1920 diye veriyor — Tekirdağ isg dönemi yazılmadı, koordinatöre soruldu.",
  yer:"Edirne, Kırklareli, Tekirdağ", yer_id:"Edirne", kisiler:"",
  d:"Yunanistan, Sevr Antlaşması imzalanmadan önce Doğu Trakya'yı da fiilen ele geçirmeye girişti. TDV'nin Millî Mücadele maddesine göre Yunan ordusu 20 Temmuz'da bütün Trakya'yı ele geçirdi; bu gelişme İstanbul'da padişahı iki gün sonra Saltanat Şûrası'nı toplamaya yöneltti. Kırklareli 26 Temmuz'da işgale uğradı, Edirne de aynı ay Yunan idaresine girdi.",
  kaynak:"milli-mucadele · kirklareli · edirne" },

{ t:"1920-07-28", k:"siyaset", etiket:["isgal","konu-askeri","konu-siyasi"],
  b:"Kızılordu'nun Nahçıvan'a girişi",
  gun:"28 Temmuz 1920",
  yer:"Nahçıvan", yer_id:"Nahçıvan", kisiler:"",
  d:"1919 başlarında bölgeye giren İngilizler Aras Cumhuriyeti'ni feshetmiş, aynı yılın yazında Nahçıvan'dan ayrılmıştı. TDV'nin Nahçıvan maddesine göre Kızılordu 28 Temmuz 1920'de Nahçıvan'a girerek yönetimi komünistlere verdi ve Nahçıvan Sovyet Sosyalist Cumhuriyeti kuruldu. Bölgenin statüsü 1921'de Kars'ta imzalanan antlaşmayla Azerbaycan'a bağlı özerk bir birim olarak belirlendi.",
  kaynak:"nahcivan" },

{ t:"1920-08-29", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Uşak'ın Yunan işgali",
  gun:"29 Ağustos 1920",
  yer:"Uşak, Gediz", yer_id:"Uşak", kisiler:"",
  d:"Yunan ordusu, Ankara'nın tanımadığı Sevr Antlaşması'nı kabul ettirmek amacıyla ilerleyişini sürdürdü. TDV'nin Uşak ve Millî Mücadele maddelerine göre Gediz'den sonra 29 Ağustos 1920'de Uşak da işgal edildi. Mustafa Kemal Paşa şehirdeki Kuvâ-yi Milliye birliklerini bu işgalden yaklaşık bir ay önce denetlemişti.",
  kaynak:"usak · milli-mucadele" },

{ t:"1920-10-25", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"İnegöl ve Yenişehir'in Yunan işgali",
  gun:"25 Ekim 1920",
  yer:"İnegöl, Yenişehir", yer_id:"İnegöl", kisiler:"",
  d:"Bursa'daki Yunan birlikleri doğuya, Eskişehir yönüne doğru ilerlemeye başladı. TDV'nin Millî Mücadele maddesine göre 25 Ekim 1920'de İnegöl ve Yenişehir ele geçirildi. Yunan ilerleyişinin milis güçleriyle durdurulamayacağı anlaşılınca batı cephesi düzenli ordu esasına göre yeniden örgütlendi.",
  kaynak:"milli-mucadele" },

// ── 1921 ───────────────────────────────────────────────────────────
{ t:"1921-03-23", k:"savas", etiket:["savas","isgal","konu-askeri"],
  b:"Yunan ordusunun ikinci taarruzu — Bilecik, Afyon ve Adapazarı'nın işgali",
  gun:"23-25 Mart 1921",
  ic_not_gun:"23 Mart TDV milli-mucadele (Bilecik ve Afyon); Adapazarı 25 Mart 1921 TDV adapazari. 🔴 TDV bilecik bu Mart işgalini SAYMIYOR (8 Ocak · 13 Temmuz · 22 Temmuz 1921) — iki madde ayrışıyor, Bilecik'in 1921 ilk yarısı yerleşime yazılmadı.",
  yer:"Bilecik, Afyon, Adapazarı", yer_id:"Karahisâr-ı Sâhib (Afyon)", kisiler:"",
  d:"Birinci İnönü yenilgisinden sonra İzmir'e yeni kuvvetler çıkaran Yunan ordusu, Londra Konferansı'nın tanıdığı süre dolmadan yeniden taarruza geçti. TDV'nin Millî Mücadele maddesine göre Yunanlılar 23 Mart'ta Bilecik ve Afyon'u işgal etti. Kuzeyde Adapazarı da 25 Mart'ta Yunan işgaline uğradı.",
  kaynak:"milli-mucadele · adapazari" },

{ t:"1921-03-28", k:"siyaset", etiket:["diplomasi","konu-askeri","konu-diplomasi"],
  b:"Türk kuvvetlerinin Batum'u boşaltması",
  gun:"28 Mart 1921",
  yer:"Batum", yer_id:"Batum", kisiler:"",
  d:"İngilizler Temmuz 1920'de Kafkasya'dan çekilirken Batum'u boşaltmış, şehre Gürcistan hükümeti el koymuştu. TDV'nin Batum maddesine göre 16 Mart 1921'de Sovyet Rusya ile imzalanan Moskova Antlaşması Batum'u Gürcistan'a bıraktı. Türk kuvvetleri şehri 28 Mart 1921'de boşalttı ve Batum, Gürcistan içinde kurulan Özerk Acara Cumhuriyeti'nin merkezi oldu.",
  kaynak:"batum" },

{ t:"1921-04-07", k:"savas", etiket:["savas","kurtulus","konu-askeri"],
  b:"Aslıhanlar'da Yunan yenilgisi — Afyon'un geri alınışı",
  gun:"7 Nisan 1921",
  yer:"Afyon, Aslıhanlar", yer_id:"Karahisâr-ı Sâhib (Afyon)", kisiler:"",
  d:"İkinci İnönü'de 1 Nisan'da durdurulan Yunan taarruzunun güney kolu da geri püskürtüldü. TDV'nin Millî Mücadele maddesine göre Aslıhanlar'da ağır yenilgiye uğratılan Yunan kuvvetlerinin elinden 7 Nisan'da Afyon geri alındı. İnönü zaferi başta İstanbul olmak üzere bütün ülkede mitinglerle kutlandı.",
  kaynak:"milli-mucadele" },

{ t:"1921-06-28", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"İzmit'in kurtuluşu — Adapazarı'nın ardından",
  gun:"28 Haziran 1921",
  ic_not_gun:"İzmit TDV izmit (6 Temmuz 1920'de önce İngiliz, sonra Yunan işgali; İngiliz→Yunan devir günü TDV'de YOK). Adapazarı'nın geri alınışı 21 Haziran 1921 TDV adapazari. D147: ±30 günde 1921-07-11 Moğolistan kırılması (2s KAPSAM DIŞI) bu maddeyle eşleşir.",
  yer:"İzmit, Adapazarı", yer_id:"İzmit", kisiler:"",
  d:"Mart 1921'de Yunan işgaline uğrayan Adapazarı, TDV'nin Adapazarı maddesine göre 21 Haziran'da geri alındı. TDV'nin İzmit maddesine göre 6 Temmuz 1920'de önce İngilizler, ardından Yunanlılar tarafından işgal edilen İzmit de 28 Haziran 1921'de kurtarıldı. Yunanlılar şehri terk ederken çarşı kesimini yaktı.",
  kaynak:"izmit · adapazari" },

{ t:"1921-07-05", k:"kazanc", etiket:["kurtulus","isgal","konu-askeri"],
  b:"Muğla'nın İtalyan işgalinden kurtuluşu",
  gun:"5 Temmuz 1921",
  ic_not_gun:"D147: ±30 günde 1921-07-11 Moğolistan kırılması (2s KAPSAM DIŞI) bu maddeyle eşleşir.",
  yer:"Muğla", yer_id:"Muğla", kisiler:"",
  d:"İtalya, Anadolu'daki işgal bölgesinden 1921 yazında çekilmeye başladı; Antalya'nın boşaltılması 1 Haziran'da başlamıştı. TDV'nin Muğla maddesine göre 23 Temmuz 1919'dan beri İtalyan işgalinde bulunan Muğla 5 Temmuz 1921'de kurtarıldı.",
  kaynak:"mugla" },

{ t:"1921-07-20", k:"kayip", etiket:["savas","isgal","konu-askeri"],
  b:"Eskişehir'in boşaltılması — Yunan ordusu Eskişehir, Kütahya ve Bilecik'e girdi",
  gun:"20-22 Temmuz 1921",
  ic_not_gun:"Eskişehir 20 Temmuz TDV eskisehir; Kütahya 21 Temmuz TDV kutahya; Bilecik 22 Temmuz TDV bilecik (üçüncü işgal). Afyon'un bu yazdaki işgal günü okunan TDV maddelerinde YOK. D147: ±30 günde 1921-07-11 Moğolistan kırılması (2s KAPSAM DIŞI) bu maddeyle eşleşir.",
  yer:"Eskişehir, Kütahya, Bilecik", yer_id:"Eskişehir", kisiler:"Mustafa Kemal Paşa",
  d:"Kütahya-Eskişehir savaşlarında hazırlıksız yakalanan Türk ordusu, Mustafa Kemal Paşa'nın emriyle Sakarya'nın doğusuna çekildi. TDV maddelerine göre Yunanlılar 20 Temmuz 1921'de Eskişehir'e, 21 Temmuz'da Kütahya'ya, 22 Temmuz'da Bilecik'e girdi. Yunan Kralı Konstantinos 28 Temmuz'da Kütahya'da savaş konseyine başkanlık etti ve ordu Ankara yönünde taarruza hazırlandı.",
  kaynak:"eskisehir · kutahya · bilecik · milli-mucadele" },

// ── 1922 — BÜYÜK TAARRUZ GÜN GÜN ───────────────────────────────────
{ t:"1922-08-26", k:"savas", etiket:["savas","konu-askeri"],
  b:"Büyük Taarruz başladı",
  gun:"26 Ağustos 1922",
  yer:"Afyon, Kocatepe", yer_id:"Karahisâr-ı Sâhib (Afyon)", kisiler:"Mustafa Kemal Paşa",
  d:"Sakarya'dan sonra bir yıl süren hazırlığın ardından Türk ordusu Afyon cephesinde genel taarruza geçti. TDV'nin Millî Mücadele ve Kütahya maddelerine göre Büyük Taarruz 26 Ağustos 1922 sabahı Afyon'dan başladı ve Yunan ordusunun direnişi kısa sürede kırıldı.",
  kaynak:"milli-mucadele · kutahya · usak" },

{ t:"1922-08-27", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Afyon'un kurtuluşu",
  gun:"27 Ağustos 1922",
  yer:"Afyon", yer_id:"Karahisâr-ı Sâhib (Afyon)", kisiler:"Mustafa Kemal Paşa",
  d:"Taarruzun ikinci gününde Yunan cephesi Afyon önlerinde yarıldı. TDV'nin Afyonkarahisar maddesine göre bizzat Atatürk'ün kumanda ettiği Büyük Taarruz sonunda Yunan kuvvetleri bozguna uğratıldı ve şehir 27 Ağustos 1922'de kurtarıldı. Bu gün Afyon'un kurtuluş günü olarak kutlanır.",
  kaynak:"afyonkarahisar" },

{ t:"1922-08-30", k:"savas", etiket:["savas","kurtulus","konu-askeri"],
  b:"Başkumandanlık Meydan Muharebesi — Kütahya'nın kurtuluşu",
  gun:"30 Ağustos 1922",
  yer:"Dumlupınar, Kütahya", yer_id:"Kütahya", kisiler:"Mustafa Kemal Paşa",
  d:"Yunan ordusunun ana kuvvetleri Afyon ile Dumlupınar arasında kuşatıldı. TDV'nin Millî Mücadele maddesine göre kuşatma harekâtı 30 Ağustos'ta Başkumandan Mustafa Kemal Paşa'nın bizzat yönettiği Başkumandanlık Muharebesi ile tamamlandı. TDV'nin Kütahya maddesine göre aynı gün bir süvari tümeni, çekilen Yunan kuvvetlerinin yakıp yıktığı Kütahya'yı kurtardı.",
  kaynak:"milli-mucadele · kutahya" },

{ t:"1922-09-01", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Uşak'ın kurtuluşu",
  gun:"1 Eylül 1922",
  yer:"Uşak", yer_id:"Uşak", kisiler:"",
  d:"Başkumandanlık Muharebesi'nden sonra Yunan ordusunun artıkları batıya, İzmir yönüne çekildi. TDV'nin Uşak maddesine göre 29 Ağustos 1920'den beri işgalde bulunan Uşak, millî kuvvetlerin şehre girişiyle 1 Eylül 1922'de kurtuldu. Çekilen işgal kuvvetlerinin çıkardığı yangında şehrin yaklaşık dörtte üçü yandı.",
  kaynak:"usak" },

{ t:"1922-09-02", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Eskişehir'in kurtuluşu",
  gun:"2 Eylül 1922",
  yer:"Eskişehir", yer_id:"Eskişehir", kisiler:"",
  d:"Büyük Taarruz'un kuzey kanadında Yunan kuvvetleri Eskişehir'i de bırakmak zorunda kaldı. TDV'nin Eskişehir maddesine göre 20 Temmuz 1921'den beri işgal altındaki şehir 30 Ağustos zaferinin ardından 2 Eylül 1922'de kurtarıldı. On üç aylık işgal sonunda çarşı kesimi yakılmış, şehir yarı yarıya harap olmuştu.",
  kaynak:"eskisehir" },

{ t:"1922-09-06", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Bilecik'in kurtuluşu",
  gun:"6 Eylül 1922",
  yer:"Bilecik", yer_id:"Bilecik", kisiler:"",
  d:"TDV'nin Bilecik maddesine göre şehir Millî Mücadele sırasında üç kez Yunan işgaline uğradı; 22 Temmuz 1921'de başlayan üçüncü işgal 6 Eylül 1922'de sona erdi. Yunan kuvvetleri şehri boşaltırken çıkardıkları yangında evlerin, dükkânların ve hükümet konağının büyük kısmı yandı.",
  kaynak:"bilecik" },

{ t:"1922-09-07", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Aydın'ın kurtuluşu",
  gun:"7 Eylül 1922",
  yer:"Aydın", yer_id:"Aydın", kisiler:"",
  d:"Türk ordusunun İzmir'e yaklaşmasıyla Menderes vadisindeki Yunan kuvvetleri de çekildi. TDV'nin Aydın maddesine göre şehir 7 Eylül 1922'de kısmen yıkılmış ve nüfusu çok azalmış hâlde Türk kuvvetleri tarafından kurtarıldı. Geri çekilen Yunanlılar şehrin büyük kısmını yakmıştı.",
  kaynak:"aydin" },

{ t:"1922-09-11", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Bursa'nın geri alınışı",
  gun:"10-11 Eylül 1922",
  ic_not_gun:"TDV bursa günü '10-11 Eylül 1922' diye iki günlük aralıkla veriyor; madde aralığın son gününe yazıldı.",
  yer:"Bursa", yer_id:"Bursa", kisiler:"",
  d:"İzmir'in kurtuluşundan sonra Türk ordusu kuzeyde Marmara kıyılarına doğru ilerledi. TDV'nin Bursa maddesine göre 8 Temmuz 1920'den beri Yunan işgalinde bulunan şehir 10-11 Eylül 1922'de geri alındı. Ordunun buradan Çanakkale'ye yürümesi İngilizleri telaşlandırdı ve Mudanya görüşmelerinin yolunu açtı.",
  kaynak:"bursa · milli-mucadele" },

{ t:"1922-11-10", k:"kazanc", etiket:["kurtulus","antlasma","konu-askeri"],
  b:"Doğu Trakya'nın teslim alınması — Kırklareli ve Tekirdağ",
  gun:"10-13 Kasım 1922",
  ic_not_gun:"Kırklareli 10 Kasım 1922 TDV kirklareli; Tekirdağ 13 Kasım 1922 TDV tekirdag. Edirne'nin teslim günü TDV edirne'de yok (yalnız '1922').",
  yer:"Kırklareli, Tekirdağ, Edirne", yer_id:"Kırklareli", kisiler:"Refet Paşa",
  d:"Mudanya Mütarekesi Doğu Trakya'nın Yunan ordusunca boşaltılıp Türkiye'ye teslimini öngörüyordu; Trakya'yı teslim almakla görevli Refet Paşa 19 Ekim'de İstanbul'a geldi. TDV'ye göre 26 Temmuz 1920'den beri işgal altındaki Kırklareli 10 Kasım 1922'de geri alındı, Tekirdağ da mütareke uyarınca 13 Kasım'da Türklere iade edildi. Böylece Doğu Trakya savaşılmadan Türk topraklarına katıldı.",
  kaynak:"kirklareli · tekirdag · milli-mucadele" },

];

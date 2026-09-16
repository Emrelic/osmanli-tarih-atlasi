// =====================================================================
// SINIR KRONOLOJİSİ — D2-KOMSU (Türkiye'nin komşularının öteki sınırları)
// =====================================================================
// window.KRONOLOJI_SINIR_KOMSU — oturumlar/GERIYE-SARMA-0916.md ADIM 3.
// Her madde data/d_sinirlar_komsu.js'teki bir E/F/D hat değişikliğine bağlıdır
// (`sinir_id`). Biçim data/kronoloji_almanya.js ile aynı; EK alanlar:
//   devletler : ilgili İKİ devletin kimliği (şartname: "iki devletin kimliği de maddede")
//   sinir_id  : d_sinirlar_komsu.js kayıt kimliği (önek eşleşmesi: -1/-2 parçaları dahil)
// index.html'e BAĞLANMADI (koordinatör yapacak).
//
// KAPSAM: GERİYE SARMA G1 penceresi (1918-11-11 → 1923-10-29). C ve YOK
// değişiklikleri (Lozan Meriç kesimi · Büyükelçiler Konferansı 1921 · Ukayr ·
// Irak–Kuveyt notası · Sovyet-İran 1921) şartname gereği madde ALMADI.
//
// KAYNAK (§4): IBS = ABD Dışişleri International Boundary Study
// (library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibsNNN.pdf, metin
// katmanı okundu) · TDV maddeleri bu oturumda çekildi ve gövdesi okundu
// (yugoslavya · bulgaristan · bati-trakya · irak--ulke, dördü de HTTP 200).
// Neuilly Antlaşması'nın YÜRÜRLÜK GÜNÜ okunabilir bir akademik kaynakta
// bulunamadı (Oxford PIL · Britannica · AustLII 403) ⇒ ilgili madde YIL düzeyinde.

window.KRONOLOJI_SINIR_KOMSU = [

{ t:"1918-12-01", devlet:"yugoslavya", devletler:["yugoslavya","yunanistan"], sinir_id:"d1923-gr-shs",
  b:"Sırp-Hırvat-Sloven Krallığı kuruldu — Yunanistan'ın kuzey sınırı yeni devlete geçti", tur:"kurulus", onem:4, dunya:4, kapsam:"dis", yer_id:"Belgrad",
  etiket:["sinir","konu-siyasi","yunanistan","yugoslavya","sirbistan-kralligi"],
  d:"Sırbistan ile Habsburg'dan ayrılan Güney Slav toprakları 1 Aralık 1918'de Sırp-Hırvat-Sloven Krallığı adıyla birleşti. Sırbistan'ın 1913 Bükreş Antlaşması ile çizilip aynı yıl işaretlenen Yunanistan sınırı değişmeden yeni devletin sınırı oldu. Gevgeli çevresindeki kısa kesimin yorum anlaşmazlığı 1927'ye kadar sürdü.",
  kaynak:"TDV yugoslavya (1 Aralık 1918) · IBS No. 79 Greece–Yugoslavia (1913 komisyonu; Gevgeli 1927)" },

{ t:"1920-01-01", devlet:"bulgaristan-kralligi", devletler:["bulgaristan-kralligi","yugoslavya"], sinir_id:"d1923-bg-shs",
  b:"Neuilly Antlaşması'nın Bulgaristan–SHS sınırı: Çariçin, Bosilegrad ve Ustrumca SHS'ye", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"Ustrumca (Strumica)",
  etiket:["sinir","antlasma","konu-siyasi","bulgaristan-kralligi","yugoslavya"],
  d:"27 Kasım 1919'da imzalanan Neuilly Antlaşması (md. 27(1), 37, 38) Bulgaristan'ın batı sınırını su bölümü çizgisinden ayırarak Çariçin, Bosilegrad ve Ustrumca bölgelerini SHS'ye bıraktı. Hattı uluslararası bir komisyon 1920–1922'de 1:25.000 ölçekli 29 paftayla işaretledi. Tarih yalnız YIL düzeyindedir: antlaşmanın yürürlük günü okunabilir bir akademik kaynakta bulunamadı.",
  kaynak:"TDV bulgaristan (Neuilly 27 Kasım 1919) · IBS No. 130 Bulgaria–Yugoslavia (komisyon 1920–22; 'as it is today, was defined by the Treaty') · Neuilly metni md. 27-38 (wwi.lib.byu.edu)" },

{ t:"1921-01-01", devlet:"yunanistan", devletler:["yunanistan","bulgaristan-kralligi"], sinir_id:"d1923-gr-bg-dogu",
  b:"Batı Trakya'da Yunan–Bulgar sınırı işaretlendi (fiilî hat)", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Gümülcine",
  etiket:["sinir","konu-siyasi","yunanistan","bulgaristan-kralligi","bati-trakya"],
  d:"Yunan-Bulgar Sınır Tahdit Komisyonu 1921'de Neuilly Antlaşması'nın (md. 27(3)) çizdiği Rodoplar su bölümü hattını taşlarla işaretledi. Batı Trakya 15 Ekim 1919'da Fransız, 22 Mayıs 1920'de Yunan işgaline girmişti. Ancak Neuilly (md. 48) bölgeyi Müttefiklere bıraktığı ve Yunanistan'a devreden 10 Ağustos 1920 Trakya Antlaşması Lozan'a bağlandığı için 1923 sonuna kadar Yunan tarafının hukukî dayanağı yürürlükte değildi. Bu yüzden hat fiilî (D) sayıldı. Gün bilinmiyor.",
  kaynak:"IBS No. 56 Bulgaria–Greece s.11-12 (1921 komisyonu) · TDV bati-trakya (15 Ekim 1919, 22 Mayıs 1920) · Trakya Antlaşması, UK Treaty Series 1921 No. 13 · Lozan XVI. Protokolü (mfa.gov.tr)" },

{ t:"1921-08-23", devlet:"irak-kralligi", devletler:["irak-kralligi","kacar"], sinir_id:"d1923-iq-ir",
  b:"Irak Krallığı kuruldu — 1913/14 Osmanlı-İran sınırı Irak'a geçti", tur:"kurulus", onem:4, dunya:3, kapsam:"dis", yer_id:"Bağdat",
  etiket:["sinir","konu-siyasi","irak-kralligi","kacar","osmanli"],
  d:"Faysal 23 Ağustos 1921'de İngiliz desteğiyle Irak tahtına çıktı. İran ile sınır, 1913 İstanbul Protokolü ve 1914 komisyonunun direklerle işaretlediği Osmanlı-İran hattı olarak kaldı. İran bu hattın geçerliliğine sonradan (1934–35) itiraz etti. Şattülarap kesimi 1937 ve 1975'te değişti.",
  kaynak:"TDV irak--ulke ve faysal-i (23 Ağustos 1921) · IBS No. 164 Iran–Iraq (1914 işaretlemesi; 1934–35 itirazı; 1937 ve 1975 değişiklikleri)" },

{ t:"1923-03-07", devlet:"filistin-mandasi", devletler:["filistin-mandasi","suriye-lubnan-mandasi"], sinir_id:"d1923-fi-lb",
  b:"Paulet–Newcombe sınır raporu imzalandı — Filistin ile Suriye-Lübnan arasındaki hat", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","filistin-mandasi","suriye-lubnan-mandasi"],
  d:"23 Aralık 1920 Fransız-İngiliz Sözleşmesi'ne dayanan karma komisyonun 3 Şubat 1922 tarihli nihai raporu Akdeniz'den el-Hamme'ye uzanan hattı üç paftayla çizdi ve 7 Mart 1923'te Paris'te imzalandı. Lübnan kesiminde 38 kalıcı direk 1922'de dikilmişti. Yürürlük ve toprak devri günü bulunamadı. Hattın yerleşim kaydı yok: sınır boyunda (Nakura–Hasbani) atlasta nokta bulunamadı.",
  kaynak:"IBS No. 75 Israel–Lebanon (Cmd. 1910; 22 LNTS 364; 'erected in 1922 by a mixed Anglo-French commission') · PalQuest 'Palestine-Lebanon border'" },

];

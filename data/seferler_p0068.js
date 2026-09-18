// -*- coding: utf-8 -*-
// SEFERLER_P0068 — SEFER-1768 oturumu, 18 Eylül 2026 · DALGA-0068 H-0027 · H-0028 · H-0029 (sevk M-4453)
// Konu: Napolyon'un Mısır seferi — denizden geliş, Mısır'ın işgali adım adım, Celile harekâtı ve Osmanlı karşı harekâtı.
//
// OKUYUCU: js/app.js seferKayitlariniTopla() — /^SEFERLER(_[A-Za-z0-9_]+)?$/ deseni. index.html satırı UI'nin.
// ŞEMA: data/seferler_p0065.js ile aynı (id · ad · tur · sonuc · taraf · devlet · renk · f · t · tarih_hassasiyet ·
//   kaynak · kesinlik · yol[[lon,lat]…]). sonuc Osmanlı gözünden.
// RENK (Emre kuralı 0065/H-0010, karar M-4500): Fransız okları devlet:"fransa-cumhuriyet" + renkler.py'deki kendi
//   rengi #09095a (zaten koyu lacivert; ayrıca koyulaştırılmadı). Osmanlı okları taraf:"osmanli" (app.js varsayılanı).
// 🔴 MÜKERRER YAZILMAYANLAR: Kahire → El-Ariş → Gazze → Yafa → Akkâ yürüyüşü ve Akkâ'dan Kahire'ye çekiliş ZATEN VAR —
//   data/savaslar.js a4-napolyon-akka-yuruyus-1799 · a4-napolyon-akka-cekilis-1799 VE data/seferler_ok103.js'te
//   aynı iki yolun ikinci kopyası (ikisi de index.html'e bağlı ⇒ harita aynı oku İKİ KEZ çiziyor; teslimde bildirildi).
// TARİHLER GREGORYEN (kaynaklar Gregoryen + Cumhuriyet takvimi veriyor).
// İSTASYONLAR yalnız kaynakta ADI GEÇEN yerler; "geometri" diye işaretli deniz noktaları yalnız okun karadan geçmemesi içindir.
// KOORDİNAT: GeoNames allCountries (yerel kopya) — atlas yerleşim noktası KULLANILMADI:
//   Toulon 2972328 · Valletta 2562305 · Alexandria 361058 · Damanhur 358448 · Ar Rahmaniyah 360150 · Imbabah 355549 ·
//   Cairo 360630 · Al Khankah 360928 · Bilbeis 358840 · As Salihiyah 359872 (Şarkiye; kaynağın "nord-est du Caire,
//   région de Chawkieh" tarifine uyan tek aday) · Sidmant al Jabal 347978 · Tahta 347634 · Samhud 349696 · Aswan 359792 ·
//   Arish 361546 · Acre 295721 · Nazareth 294098 · Mount Tabor 293418
//
// KAYNAKLAR
//   [NAPO-2] Fondation Napoléon, «Chronologie de la Correspondance générale de Napoléon Bonaparte, tome 2 —
//            La campagne d'Égypte et l'avènement, 1798-1799» (Fayard 2005 cildinin kronolojisi) — napoleon.org
//   [NAPO-3] aynı, tome 3 «Pacifications, 1800-1802» — napoleon.org
//   TDV: iskenderiye · aris · gazze · hayfa · safed · akka · ebukir · malta · misir · yusuf-ziya-pasa
//
// YAZILMAYANLAR (bulunamadı / kaynak adsız)
//   · Bon'un Süveyş'e yürüyüşü (8 Kasım 1798) — çıkış noktası ve günü kaynakta yok (yalnız Süveyş'in teslimi)
//   · Belliard'ın Kusayr'a yürüyüşü (29 Mayıs 1799'da limana girdi) — Kına'dan çıkış günü yok
//   · Osmanlı donanmasının Ebukır çıkarması (Temmuz 1799) — çıkış limanı ve çıkarma günü okunan kaynaklarda yok;
//     yalnız 25 Temmuz 1799 yenilgisi (TDV ebukir · NAPO-2)
//   · Napolyon'un Mısır'dan ayrılışı (23 Ağustos 1799, La Muiron) — varış noktası okunan kaynaklarda yok
//   · İngiliz ordusunun 8 Mart 1801 Ebukır çıkarması (TDV ebukir) — İngiliz harekâtı bu paketin konusu değil
//   · Celile'de Safed'e giriş (TDV safed "Akkâ muhasarasından önce") — gün yok
window.SEFERLER_P0068 = [
{ id:"p0068-fransiz-filosu-misir-1798", ad:"Fransız filosunun Toulon'dan Malta üzerinden İskenderiye'ye yolu (1798)", tur:"deniz", sonuc:"yenilgi", taraf:"dusman", devlet:"fransa-cumhuriyet", renk:"#09095a",
  f:"1798-05-19", t:"1798-07-01",
  tarih_hassasiyet:"f: GÜN (Toulon'dan çıkış) · Malta çıkarması 10 Haziran, teslimi 12 Haziran, ayrılış 18 Haziran · t: GÜN (Marabout koyuna çıkarma)",
  kaynak:"NAPO-2: \"19 MAI … Le gros de l'armée d'Orient … embarquent sur 150 bâtiments et quittent Toulon\" · \"10 JUIN … Les troupes françaises débarquent à Malte\" · \"12 JUIN … Capitulation de Malte\" · \"18 JUIN … La flotte quitte Malte\" · \"1er JUILLET … Débarquement des troupes françaises dans l'anse de Marabout près du port d'Alexandrie\" · malta (TDV): \"1798'de Napolyon … adayı ele geçirdi\"",
  kesinlik:"istasyonlar Toulon · Valletta · İskenderiye; öteki noktalar yalnız deniz geometrisi (Korsika Burnu'nun kuzeyi, Sardinya doğusu, Sicilya boğazı, Girit güneyi; ne_10m_land ile sınandı, karada kalan kısım yalnız liman uçları). Cenova ve Civitavecchia kolları çizilmedi",
  yol:[[5.92836,43.12442],[6.0,42.95],[7.5,42.85],[9.4,43.25],[9.9,42.6],[9.9,42.3],[10.3,40.8],[11.2,38.6],[12.0,37.2],[13.6,36.2],[14.5148,35.89968],
       [18.0,35.0],[23.5,34.2],[27.5,32.4],[29.91582,31.20176]] },
{ id:"p0068-napolyon-iskenderiye-kahire-1798", ad:"Napolyon'un İskenderiye'den Kahire'ye yürüyüşü — Piramitler (1798)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"fransa-cumhuriyet", renk:"#09095a",
  f:"1798-07-02", t:"1798-07-24",
  tarih_hassasiyet:"f: BAĞLI UÇ (İskenderiye'nin alınışı; şehirden çıkış günü kaynakta yok) · Damanhur 8 Temmuz · Rahmaniye 10 Temmuz · Piramitler (İmbabe) 21 Temmuz · t: GÜN (Kahire'ye giriş)",
  kaynak:"NAPO-2: \"2 JUILLET … Napoléon prend Alexandrie\" · \"8 JUILLET … Parti pour Le Caire, Napoléon arrive à Damanhour\" · \"10 JUILLET … Napoléon arrive à El-Rahmânieh sur le Nil\" · \"21 JUILLET … Victoire des Pyramides\" · \"22 JUILLET … Capitulation du Caire\" · \"24 JUILLET … Napoléon entre au Caire\" — ÇELİŞKİ: iskenderiye (TDV) \"30 Haziran 1798'de Fransızlar İskenderiye'yi kuşatıp ele geçirdiler\" (NAPO-2'ye göre çıkarma 1 Temmuz, alınış 2 Temmuz)",
  kesinlik:"Piramitler muharebesi NAPO-2'de ayrıca 'Embabeh' diye anılıyor; istasyon İmbabe",
  yol:[[29.91582,31.20176],[30.46823,31.03408],[30.64135,31.10483],[31.20666,30.07625],[31.24967,30.06263]] },
{ id:"p0068-napolyon-salihiye-1798", ad:"Napolyon'un İbrahim Bey'i Salihiye'ye kadar kovalaması (1798)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"fransa-cumhuriyet", renk:"#09095a",
  f:"1798-08-08", t:"1798-08-11",
  tarih_hassasiyet:"f: GÜN (Hanka'dan geçiş) · Bilbîs 9 Ağustos · t: GÜN (Salihiye muharebesi)",
  kaynak:"NAPO-2: \"8 AOÛT … Napoléon passe à El-Khanqah, puis à Belbeis le 9, enfin à Koraïm le 10\" · \"11 AOÛT … Combat de Salheyeh (nord-est du Caire, région de Chawkieh) : Ibrahim-Bey est refoulé vers Gaza\" · gazze (TDV): \"Kahire'deki Memlük Emîri İbrâhim Bey ve adamları fazla direnemediler ve Suriye'ye geçmek üzere Gazze'ye kaçtılar\"",
  kesinlik:"Koraïm GeoNames'te tekil bulunamadı, yola konmadı; ok Kahire'den başlar",
  yol:[[31.24967,30.06263],[31.36812,30.21035],[31.56223,30.42039],[31.99117,30.77983]] },
{ id:"p0068-desaix-yukari-misir-1798", ad:"Desaix'nin Yukarı Mısır seferi — Kahire'den Asvan'a (1798-99)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"fransa-cumhuriyet", renk:"#09095a",
  f:"1798-08-25", t:"1799-02-01",
  tarih_hassasiyet:"f: GÜN (Desaix'nin Kahire'den ayrılışı) · Sediman 7 Ekim 1798 · Tahta 8 Ocak 1799 (Davout) · Semhud 22 Ocak · t: GÜN (Asvan)",
  kaynak:"NAPO-2: \"25 AOÛT … Départ de Desaix en Haute-Égypte à la poursuite de Mourad-Bey\" · \"7 OCTOBRE … Victoire de Desaix sur Mourad-Bey à Sediman : les Français maîtrisent le Fayoum\" · \"8 JANVIER 1799 … Victoire de Davout à Tahtah (sud de Siout, Haute-Égypte)\" · \"22 JANVIER … Grande victoire de Desaix à Samhoud\" · \"1er FÉVRIER … Victoire de Desaix à Assouan\"",
  kesinlik:"Sediman = Sidmant el-Cebel (GeoNames); Tahta'da Davout'un kolu, ok tek kol gibi çizildi. Asyut ve öteki Nil kasabaları adıyla anılmıyor, yola konmadı",
  yol:[[31.24967,30.06263],[30.9031,29.14133],[31.50198,26.76866],[32.03021,26.13353],[32.89942,24.09082]] },
{ id:"p0068-celile-tabor-1799", ad:"Akkâ kuşatması sırasında Fransız kollarının Nâsıra ve Tabor dağına harekâtı (1799)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"fransa-cumhuriyet", renk:"#09095a",
  f:"1799-04-08", t:"1799-04-16",
  tarih_hassasiyet:"f: GÜN (Junot'nun Nâsıra yolundaki Lubya çarpışması) · Kana 11 Nisan (Kléber Nâsıra'ya çekildi) · t: GÜN (Tabor dağı muharebesi)",
  kaynak:"NAPO-2: \"8 AVRIL … Victoire du général Andoche Junot à Loubia, sur la route de Nazareth (Galilée)\" · \"11 AVRIL … Bataille de Cana, au nord de Nazareth : Kléber doit se replier à Nazareth\" · \"15 AVRIL … Murat … dégage la garnison de Safed\" · \"16 AVRIL … Victoire de Napoléon au Mont-Thabor et de Kléber à Fouleh\" · safed (TDV): \"Napolyon Bonapart 1799'daki Akkâ muhasarasından önce Safed'e girdi\" · hayfa (TDV): \"Hayfa 1799'da Fransızlar tarafından alındıysa da Akkâ kuşatmasının başarısızlıkla sonuçlanması üzerine terkedildi\"",
  kesinlik:"Akkâ'daki kuşatma ordugâhından çıkış (Napolyon 16 Nisan'da kendisi yürüdü); Lubya ve Fule noktaya çevrilmedi. Safed kolu (Murat) ayrıca çizilmedi",
  yol:[[35.07647,32.92814],[35.29719,32.70087],[35.39065,32.68728]] },
{ id:"p0068-yusuf-ziya-heliopolis-1800", ad:"Sadrazam Yûsuf Ziyâ Paşa ordusunun El-Ariş'ten Hanka'ya (Heliopolis) ilerleyişi (1800)", tur:"sefer", sonuc:"yenilgi", taraf:"osmanli",
  f:"1799-12-28", t:"1800-03-20",
  tarih_hassasiyet:"f: BAĞLI UÇ (El-Ariş'in geri alınışı; ordunun El-Ariş'ten çıkış günü kaynakta yok) · t: GÜN (Heliopolis/Hanka bozgunu)",
  kaynak:"yusuf-ziya-pasa (TDV): \"sadrazam 28 Aralık 1799'da Arîş'in muhasarasını zaferle sonuçlandırdı\" · \"Fransızlar, Heliopolis'te (Hammer-Purgstall … el-Chanka'da) sadrazamın kuvvetlerini hazırlıksız yakalayarak bozguna uğrattı (20 Mart 1800)\" · NAPO-3: \"20 mars 1800 … Victoire du général Jean-Baptiste Kléber contre les Turcs à Héliopolis\"",
  kesinlik:"iki uç arası düz hat; Sina geçişinin menzilleri kaynakta yok",
  yol:[[33.79844,31.13159],[31.36812,30.21035]] },
{ id:"p0068-yusuf-ziya-kahire-1801", ad:"Yûsuf Ziyâ Paşa'nın Hanka'dan Kahire'ye girişi — Fransız işgalinin sonu (1801)", tur:"sefer", sonuc:"zafer", taraf:"osmanli",
  f:"1801-05-31", t:"1801-07-17",
  tarih_hassasiyet:"f: GÜN (Hanka yakınında Müneyyer muharebesi) · Belliard'ın Kahire kapitülasyonu 27 Haziran 1801 · t: GÜN (sadrazamın Kahire'ye merasimle girişi)",
  kaynak:"yusuf-ziya-pasa (TDV): \"Haneke yakınlarında Müneyyer köyü civarında meydana gelen savaşta bu defa Fransız kuvvetleri yenilgiye uğradı (31 Mayıs 1801)\" · \"Sadrazam 17 Temmuz 1801'de merasimle Kahire'ye girerek askerî harekâtı başarıyla sona erdirmiş oldu\" · NAPO-3: \"27 juin 1801 … Le général Belliard signe la capitulation des troupes françaises en Égypte\"",
  kesinlik:"Müneyyer köyü noktaya çevrilemedi; ok Hanka'dan başlar. Osmanlı ordusunun 1801'de Suriye'den Hanka'ya yolu kaynakta yok",
  yol:[[31.36812,30.21035],[31.24967,30.06263]] }
];

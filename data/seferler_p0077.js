// -*- coding: utf-8 -*-
// SEFERLER_P0077 — SEFER-OK-0077 oturumu, 27 Eylül 2026 · PAKET-0077
// Konu: Birinci Dünya Savaşı harekât okları — H-0016 Karadeniz Baskını · H-0018
// Sarıkamış · H-0019 Birinci Kanal Harekâtı · H-0044 Kafkasya 1918 ilerleyişi.
// (H-0047 Mondros sonrası: OK YAZILMADI — gerekçesi denetim/SEFER-OK-0077.md.)
//
// OKUYUCU: js/app.js seferKayitlariniTopla() — /^SEFERLER(_[A-Za-z0-9_]+)?$/ deseni.
// AD ALANI (§7): data/seferler_p0077.js → window.SEFERLER_P0077.
//
// YENİ ALAN `vurus:[{lon,lat,ad,t,kaynak}]` — ARAYUZ-0077 ile kararlaştırıldı
// (tahta M-5210 → M-5212): okun üstünde bombardıman noktası, 💥 ile çizilir;
// `t` vuruş günü, işaret t'den kaydın t'sine kadar görünür. Çizim ARAYUZ-0077'de.
//
// KAYNAKLAR (hepsi gövdesi okunarak):
//  · TDV birinci-dunya-savasi · sarikamis-harekati · cemal-pasa · kars · erzurum ·
//    erzincan · azerbaycan
//  · Ozan Tuna, "Amiral Souchon'un Donanma Komutanı Olması ve Rus Limanlarının
//    Bombalanması 29 Ekim 1914", OTAM 36 (Güz 2014), s. 201-228 (ATASE/DMA
//    seyir defteri dayanaklı) — TDV gemi-liman eşleşmesini ve Odesa/Kefe'yi VERMİYOR.
//  · Murat Özgan, "Taarruz, Savunma ve Ricat: I. Dünya Savaşı'nda Sina-Filistin
//    Cephesi (1914-1918)", İnönü Üni. Uluslararası Sosyal Bilimler Dergisi 5/2
//    (2016), s. 141-170.
//  · Zekeriya Türkmen, "Birinci Dünya Harbi'nde Osmanlı Ordusu'nun Son Savaşı:
//    Gence'den Bakü'ye Zafer Yürüyüşü", Türk Dünyası Araştırmaları 119/235
//    (2018), s. 23-48 (ATASE dayanaklı). TDV `kafkas-islam-ordusu` 302 ÖLÜ;
//    TDV `azerbaycan` yalnız varışı (Bakü, 15 Eylül 1918) veriyor.
//
// KOORDİNAT: atlasın yerleşim noktası varsa o (Kefe, Odesa=Hacıbey, Erzincan,
// Erzurum, Kars, Sarıkamış, Gence, Şamahı, Bakü). Atlasta nokta YOKSA
// OpenStreetMap/Nominatim yer adı koordinatı (Narman, Oltu, Bardız=Gaziler,
// Göyçay, Ağsu, Novorossiysk, Sivastopol, Birüssebi). Deniz uçları (Boğaz ağzı,
// Kerç Boğazı önü, Zonguldak/Amasra açığı) ŞEMATİKTİR — kıyıdan açığa alınmış
// çizim noktasıdır, ölçüm değildir. Ok bir ölçüm değil gösterimdir.
//
// `rota` (SEFER-OK-0075 sözleşmesi): `yol` kaynaklı istasyonlardır, `rota` kıyıyı
// dolanan TÜRETİLMİŞ çizim hattıdır, iddia değil. Üretici:
// `py denetim/ARAC-SEFER-OK-DENIZ-ROTA-0075.py` (ne_10m_land, liman muafiyeti
// 0.15°). Düz hali karayı kesen üç kayda yazıldı: Odesa (liman yaklaşımı),
// Novorossiysk (20 km → 0), Kefe (16 km → 0). Yavuz'un bacakları zaten temiz.

window.SEFERLER_P0077 = [

// ───────── H-0016 · KARADENİZ BASKINI (27-30 Ekim 1914) ─────────
// Tuna 2014, s. 212-216: 27 Ekim 1914'te 11 gemi Karadeniz'e açıldı; dört kol
// ayrı limanlara gitti. Dört kayıt = dört kol. Hepsinin `f`i 27 Ekim (açılış),
// `t`si 30 Ekim (muhripler "30 Ekim 1914 sabahı Haydarpaşa'ya gelmişlerdir" —
// kaynağın verdiği tek dönüş günü; öteki kolların dönüş günü bulunamadı).

{ id:"p0077-karadeniz-yavuz-sivastopol-1914",
  ad:"Karadeniz Baskını — Yavuz'un Sivastopol bombardımanı (1914)",
  tur:"deniz", sonuc:"zafer", taraf:"osmanli", devlet:"osmanli",
  f:"1914-10-27", t:"1914-10-30",
  tarih_hassasiyet:"f: GÜN — donanmanın Karadeniz'e açılışı (Tuna s. 212-213; TDV birinci-dunya-savasi da '27 Ekim'de Karadeniz'e açılıp' der) · vuruş: GÜN+SAAT — 29 Ekim 1914 05.00 (Tuna s. 216) · t: GÜN — kaynakta Yavuz'un dönüş günü YOK; kolların ortak sonu olarak muhriplerin Haydarpaşa'ya dönüşü (30 Ekim) alındı",
  kaynak:"Tuna 2014 (OTAM 36), s. 216: \"Doğrudan Souchon'un komutasında olan Yavuz dretnotu ile Taşoz muhribi ve Samsun mayın gemisi Sivastopol'e yönelmişlerdir. Gemiler İstanbul Boğazı'ndan ayrıldıktan sonra Zonguldak ve Amasra istikametine gitmişler\" · \"Yavuz dretnotu, 29 Ekim 1914 sabahı saat 05.00'de\" · TDV birinci-dunya-savasi: \"Sivastopol ve Novorossiysk limanlarını topa tutması\"",
  kesinlik:"İSTASYON: İstanbul Boğazı → Zonguldak açığı → Amasra açığı → Sivastopol. Zonguldak ve Amasra kaynakta 'istikamet' olarak ADIYLA geçiyor; kıyıdan ~5 km açığa alınmış çizim noktalarıdır. Amasra'dan Sivastopol'e ara nokta kaynakta yok (düz bacak).",
  yol:[[29.15,41.25],[31.78,41.50],[32.39,41.80],[33.522,44.605]],
  vurus:[{ lon:33.522, lat:44.605, ad:"Sivastopol bombardımanı — Yavuz (29 Ekim 1914)", t:"1914-10-29",
           kaynak:"Tuna 2014, s. 216-217: Konstantin tabyası, tersane ve liman hedef alındı" }] },

{ id:"p0077-karadeniz-muhripler-odesa-1914",
  ad:"Karadeniz Baskını — Gayret-i Vataniye ve Muavenet-i Milliye'nin Odesa baskını (1914)",
  tur:"deniz", sonuc:"zafer", taraf:"osmanli", devlet:"osmanli",
  f:"1914-10-27", t:"1914-10-30",
  tarih_hassasiyet:"f: GÜN — açılış (Tuna s. 213) · vuruş: GÜN+SAAT — 29 Ekim 1914 04.15, Odesa'nın bombalandığının Sivastopol'e bildirildiği saat (Tuna s. 216, Monastırev'e dayanarak) · t: GÜN — \"30 Ekim 1914 sabahı Haydarpaşa'ya gelmişlerdir\" (Tuna s. 214)",
  kaynak:"Tuna 2014 (OTAM 36), s. 213: \"Binbaşı Madlung ve Yüzbaşı Firle komutasındaki Gayret-i Vataniye ve Muavenet-i Milliye muhripleri Odessa'ya doğru yola çıktılar\" · s. 214: \"Muavenet-i Milliye'nin attığı torpido Kubanetz gambotunu hasara uğratmış daha sonra petrol sarnıçları da topa tutularak beş petrol deposu havaya uçurulmuştur\"",
  kesinlik:"İSTASYON yalnız iki uç: İstanbul Boğazı ve Odesa. Kaynak ara durak vermiyor ('direkt Odessa'ya gelindi', s. 213). Dönüş (Odesa → Haydarpaşa) ayrı ok olarak ÇİZİLMEDİ.",
  yol:[[29.15,41.25],[30.733,46.485]],
  rota:[[29.15,41.25],[30.845,46.485],[30.733,46.485]],
  vurus:[{ lon:30.733, lat:46.485, ad:"Odesa baskını — Gayret-i Vataniye ve Muavenet-i Milliye (29 Ekim 1914)", t:"1914-10-29",
           kaynak:"Tuna 2014, s. 213-214, 216" }] },

{ id:"p0077-karadeniz-midilli-novorossiysk-1914",
  ad:"Karadeniz Baskını — Midilli ve Berk-i Satvet'in Kerç ve Novorossiysk harekâtı (1914)",
  tur:"deniz", sonuc:"zafer", taraf:"osmanli", devlet:"osmanli",
  f:"1914-10-27", t:"1914-10-30",
  tarih_hassasiyet:"f: GÜN — açılış (Tuna s. 213) · Kerç mayını: GÜN+SAAT 29 Ekim 06.00 · Novorossiysk vuruşu: GÜN+SAAT 29 Ekim 10.00 (Tuna s. 214-215) · t: GÜN — Midilli'nin İstanbul'a dönüş günü kaynakta YOK; kolların ortak sonu (30 Ekim) alındı",
  kaynak:"Tuna 2014 (OTAM 36), s. 214: \"Midilli kruvazörü, 29 Ekim 1914 sabahı saat 06.00'da Kerç Boğazı önüne ... 60 mayın dökmüştür\" · s. 215: \"saat 10.00 itibari ile limanı bombalamaya başladı. Midilli kruvazörü ise Kerç Boğazı'nı mayınladıktan sonra Novorosski'ye gelip bombardımanı devraldı\" · TDV birinci-dunya-savasi: \"Sivastopol ve Novorossiysk limanlarını topa tutması\"",
  kesinlik:"İSTASYON: İstanbul Boğazı → Kerç Boğazı önü (mayın dökülen yer; boğazın güney ağzının ~10 km açığı, ŞEMATİK) → Novorossiysk. Kerç'e vuruş işareti KONMADI: orada bombardıman değil mayın dökümü var.",
  yol:[[29.15,41.25],[36.52,45.02],[37.769,44.724]],
  rota:[[29.15,41.25],[36.52,45.02],[37.735,44.559],[37.769,44.724]],
  vurus:[{ lon:37.769, lat:44.724, ad:"Novorossiysk bombardımanı — Berk-i Satvet ve Midilli (29 Ekim 1914)", t:"1914-10-29",
           kaynak:"Tuna 2014, s. 214-215: 50 petrol deposu, hububat depoları ve telsiz istasyonu" }] },

{ id:"p0077-karadeniz-hamidiye-kefe-1914",
  ad:"Karadeniz Baskını — Hamidiye'nin Kefe (Feodosiya) bombardımanı (1914)",
  tur:"deniz", sonuc:"zafer", taraf:"osmanli", devlet:"osmanli",
  f:"1914-10-27", t:"1914-10-30",
  tarih_hassasiyet:"f: GÜN — açılış (Tuna s. 213) · vuruş: GÜN+SAAT — 29 Ekim 1914 09.00 (Tuna s. 215, Hamidiye seyir defteri) · t: GÜN — Hamidiye'nin dönüş günü kaynakta YOK; kolların ortak sonu (30 Ekim) alındı",
  kaynak:"Tuna 2014 (OTAM 36), s. 215: \"Binbaşı Vasıf ve Binbaşı V. Kottwiz komutasındaki Hamidiye kruvazörü Büyükdere limanından hareketle Kefe'ye (Feodessa) gelmiştir\" · \"saat 09.00'dan itibaren liman bombalanmaya başlamış\"",
  kesinlik:"İSTASYON: Büyükdere → İstanbul Boğazı ağzı → Kefe. Tuna s. 214'e göre Hamidiye 'ilk başta' Midilli ile aynı rotayı izledi; ayrılma noktası kaynakta YOK, bu yüzden Boğaz'dan Kefe'ye düz bacak çizildi. Bombardıman sonrası Batı Karadeniz keşfi (s. 216) çizilmedi.",
  yol:[[29.055,41.165],[29.15,41.25],[35.382,45.032]],
  rota:[[29.055,41.165],[29.15,41.25],[35.435,44.955],[35.382,45.032]],
  vurus:[{ lon:35.382, lat:45.032, ad:"Kefe (Feodosiya) bombardımanı — Hamidiye (29 Ekim 1914)", t:"1914-10-29",
           kaynak:"Tuna 2014, s. 215" }] },

// ───────── H-0018 · SARIKAMIŞ HAREKÂTI (22 Aralık 1914 – 4 Ocak 1915) ─────────
// TDV sarikamis-harekati (gövde okundu). Harekât planı: "10. Kolordu İd
// (Narman)-Oltu-Bardız (Gaziler) istikametinde, 9. Kolordu ise Pitgir-Çatak-
// Kötek yönünde" — 9. Kolordu "harekâtın ikinci günü istikametini değiştirerek
// doğrudan Sarıkamış'a yöneldi". 11. Kolordu cepheden (Aras vadisi) taarruz etti;
// onun güzergâhı kaynakta istasyonla verilmediği için OK YAZILMADI.

{ id:"p0077-sarikamis-kusatma-kolu-1914",
  ad:"Sarıkamış Harekâtı — kuşatma kolu (10. Kolordu, İd–Oltu–Bardız–Sarıkamış) (1914)",
  tur:"sefer", sonuc:"yenilgi", taraf:"osmanli", devlet:"osmanli",
  f:"1914-12-22", t:"1915-01-04",
  kademe:[["1914-12-25",2],["1914-12-26",3]],
  tarih_hassasiyet:"f: GÜN — \"Harekât 22 Aralık sabahı başlayacaktı\" · kademe 2 (Bardız): GÜN — 25 Aralık akşamı 9. Kolordu öncüleri Bardız Geçidi'nde (TDV; köy değil geçit — bkz. kesinlik) · kademe 3 (Sarıkamış): GÜN — \"Sarıkamış'a yapılan ilk taarruz 26 Aralık sabahı\" · t: GÜN — 4 Ocak ricat emri",
  kaynak:"sarikamis-harekati (TDV): \"10. Kolordu İd (Narman)-Oltu-Bardız (Gaziler) istikametinde ... ilerleyerek\" · \"Oltu ve Bardız'da zaptedilen külliyetli erzak\" · \"9. Kolordu'nun öncüleri, 25 Aralık akşamı Sarıkamış'a 4-5 km. mesafede bulunan ... Bardız Geçidi'ne ulaştıklarında\" · \"28 Aralık'ta 10. Kolordu'nun da Sarıkamış civarına ulaşmasıyla kuşatma harekâtı sadece teorik olarak gerçekleşti\" · \"Hâfız Hakkı Paşa ... 4 Ocak'ta Sol Cenah Ordusu'na ricat emri verdi\"",
  kesinlik:"İSTASYON: İd (Narman) → Oltu → Bardız (Gaziler köyü) → Sarıkamış — TDV'nin ADIYLA verdiği 10. Kolordu istikameti. ⚠️ Kademe günleri İKİ kolordudan derlendi: 25/26 Aralık 9. Kolordu'nun Bardız Geçidi'ne ve Sarıkamış'a varışıdır; 10. Kolordu Sarıkamış civarına ancak 28 Aralık'ta ulaştı ve bir kısmı Allahüekber dağlarına saptı. Ok iki kolordunun ORTAK kuşatma istikametini gösterir. Bardız Geçidi (Sarıkamış'a 4-5 km) Bardız köyüyle AYNI YER DEĞİL; köy koordinatı yolda duruyor. 9. Kolordu'nun çıkış yeri kaynakta YOK — ayrı ok yazılmadı.",
  yol:[[41.871,40.345],[41.996,40.546],[42.348,40.429],[42.578,40.328]] },

{ id:"p0077-sarikamis-ricat-1915",
  ad:"Sarıkamış Harekâtı — Sol Cenah Ordusu'nun Erzurum'a ricatı (1915)",
  tur:"cekilme", sonuc:"yenilgi", taraf:"osmanli", devlet:"osmanli",
  f:"1915-01-04", t:"1915-01-04",
  tarih_hassasiyet:"f: GÜN — ricat emri (4 Ocak 1915) · t: ricatın bitiş günü kaynakta YOK ⇒ uydurulmadı, t = f (ok yalnız emrin gününde görünür)",
  kaynak:"sarikamis-harekati (TDV): \"Hâfız Hakkı Paşa, elde kalan kuvvetleri Rus kuşatmasından kurtarmak düşüncesiyle 4 Ocak'ta Sol Cenah Ordusu'na ricat emri verdi. Bu emir üzerine ... birlikler dağ yollarını takip ederek Erzurum'a doğru çekilmeye başladı\"",
  kesinlik:"İSTASYON yalnız iki uç: Sarıkamış ve Erzurum. 'Dağ yolları' adıyla verilmiyor — ara nokta YOK.",
  yol:[[42.578,40.328],[41.266,39.905]] },

// ───────── H-0019 · BİRİNCİ KANAL HAREKÂTI (14 Ocak – 15 Şubat 1915) ─────────

{ id:"p0077-birinci-kanal-harekati-1915",
  ad:"Birinci Kanal Harekâtı — Birüssebi'den Süveyş Kanalı'na (1915)",
  tur:"sefer", sonuc:"yenilgi", taraf:"osmanli", devlet:"osmanli",
  f:"1915-01-14", t:"1915-02-03",
  tarih_hassasiyet:"f: GÜN — \"14 Ocak 1915'ten itibaren gece yürüyüşleriyle\" · t: GÜN — \"3 Şubat'ta kanalı geçmeye giriştiler\" (TDV birinci-dunya-savasi); Özgan: taarruz 2'yi 3 Şubat'a bağlayan gece",
  kaynak:"birinci-dunya-savasi (TDV): \"Osmanlı Ordusu 14 Ocak 1915'ten itibaren gece yürüyüşleriyle Bi'rüssebi'den Süveyş Kanalı'na doğru yöneldi. Bahriye Nâzırı Cemal Paşa kumandasındaki Türk kuvvetleri 3 Şubat'ta kanalı geçmeye giriştiler; fakat başarısızlığa uğrayarak 15 Şubat'ta geldikleri yere döndüler\" · Özgan 2016, s. 147 (Münim Mustafa hatıratından): \"Kanal üzerinde, taarruz mıntıkasının iki uçlarında bulunan Acı ve Timsah göllerine gelen İngiliz filosu ... İsmailiye önünde müthiş bir harp oluyordu\"",
  kesinlik:"İSTASYON yalnız iki uç: Birüssebi ve kanal geçiş kesimi. Geçiş kesimi kaynakta Timsah Gölü ile Acı Göller ARASI olarak veriliyor; uç o kesimin ortasına konan ŞEMATİK noktadır. Sina çölündeki menzil noktaları kaynakta ADIYLA yok — ara nokta YAZILMADI.",
  yol:[[34.793,31.246],[32.34,30.49]] },

{ id:"p0077-birinci-kanal-cekilis-1915",
  ad:"Birinci Kanal Harekâtı — Birüssebi'ye çekiliş (1915)",
  tur:"cekilme", sonuc:"yenilgi", taraf:"osmanli", devlet:"osmanli",
  f:"1915-02-03", t:"1915-02-15",
  tarih_hassasiyet:"f: GÜN — taarruzun başarısızlığı (3 Şubat) · t: GÜN — \"15 Şubat'ta geldikleri yere döndüler\" (TDV)",
  kaynak:"birinci-dunya-savasi (TDV): \"başarısızlığa uğrayarak 15 Şubat'ta geldikleri yere döndüler\" · Özgan 2016, s. 147 (Ali Fuat Erden'e dayanarak): İngilizler çekilen birlikleri takip etmedi, yalnız uçakla keşif ve bombardıman yaptı",
  kesinlik:"Harekâtın tersi: kanal kesiminden Birüssebi'ye. 'Geldikleri yer' = Birüssebi okuması TDV'nin aynı cümlesindeki çıkış noktasından; ara nokta YOK.",
  yol:[[32.34,30.49],[34.793,31.246]] },

// ───────── H-0044 · OSMANLI ORDUSUNUN KAFKASYA'DA İLERLEYİŞİ (1918) ─────────

{ id:"p0077-dogu-ileri-harekati-1918",
  ad:"1918 Doğu ileri harekâtı — Erzincan–Erzurum–Kars",
  tur:"sefer", sonuc:"zafer", taraf:"osmanli", devlet:"osmanli",
  f:"1918-03-12", t:"1918-04-23",
  kademe:[["1918-04-23",2]],
  tarih_hassasiyet:"yol[0] Erzincan: GÜN — 26 Şubat 1918'de kurtarıldı (TDV erzincan) · f / kademe 1 (Erzurum): GÜN — 12 Mart 1918 (TDV erzurum) · kademe 2 / t (Kars): GÜN — 23 Nisan 1918 (TDV kars); ⚠️ bu gün TDV cümlesinde İLERİ HAREKÂTIN BAŞLANGICIdır, Kars'ın alınış günü ayrıca verilmiyor",
  kaynak:"erzincan (TDV): \"Erzincan 26 Şubat 1918'de kurtarıldı\" · erzurum (TDV): \"Kâzım Karabekir Paşa kumandasındaki Türk birlikleri harekete geçerek 12 Mart 1918'de Erzurum'u Ermeniler'den kurtardılar\" · kars (TDV): \"Türk ordusu 23 Nisan 1918'de ileri harekâta geçerek Kars'ı Ermeniler'den aldı\"",
  kesinlik:"İSTASYON: Erzincan → Erzurum → Kars (üç şehrin geri alınışı, TDV'nin kendi şehir maddelerinden). Ok 12 Mart'ta Erzincan'dan Erzurum'a uzanmış başlar, çünkü şema en az iki nokta ister ve Erzincan'ın öncesi (çıkış hattı) kaynakta YOK. Kars ucu 23 Nisan'da çizilir — kaynağın tek günü odur, alınış günü değil. Batum (Nisan 1918) ve Trabzon (24 Şubat 1918, Rus çekilişi) ayrı eksende; güzergâhları kaynakta yok, ok YAZILMADI.",
  yol:[[39.492,39.750],[41.266,39.905],[43.095,40.602]] },

{ id:"p0077-kafkas-islam-ordusu-gence-baku-1918",
  ad:"Kafkas İslâm Ordusu'nun Gence'den Bakü'ye yürüyüşü (1918)",
  tur:"sefer", sonuc:"zafer", taraf:"osmanli", devlet:"osmanli",
  f:"1918-06-17", t:"1918-09-15",
  kademe:[["1918-07-21",3],["1918-09-15",4]],
  tarih_hassasiyet:"f / kademe 1 (Göyçay): GÜN — Göyçay muharebeleri 17-30 Haziran 1918 (Türkmen s. 32) · Ağsu: gün YOK (muharebe adıyla geçiyor) ⇒ kademe verilmedi, ok Şamahı'ya atlarken üzerinden geçer · kademe 3 (Şamahı): GÜN — 21 Temmuz 1918 (Türkmen s. 33) · kademe 4 / t (Bakü): GÜN — 15 Eylül 1918 (TDV azerbaycan; Türkmen)",
  kaynak:"azerbaycan (TDV): \"Nûri Paşa kumandasındaki Kafkasya İslâm Ordusu Ruslar'ın elindeki Bakü'yü ele geçirdi (15 Eylül 1918)\" · Türkmen 2018 (TDA 235), s. 32: \"Gence'den Bakü'ye uzanan yol üzerindeki Gökçay yakınlarında 17 Haziran tarihinden 30 Haziran 1918'e kadar süren muharebelerde\" · s. 33: \"önce ilk istikamet olarak Gökçay-Şamahı-Bakü karayolu, ikinci istikamet olarak Gence-Bakü demiryolu boyunca ilerlemeye devam etmiştir. Aksu'da cereyan eden muharebelerde\" · \"21 Temmuz 1918 tarihinde ordu birlikleri Şamahı'nın denetimini ele almış\"",
  kesinlik:"İSTASYON: Gence → Göyçay → Ağsu → Şamahı → Bakü — kaynağın 'ilk istikamet' dediği KARAYOLU ekseni. İkinci eksen (Gence-Bakü demiryolu, Kürdemir) ve Salyan kolu AYRI OK OLARAK YAZILMADI: istasyon günleri bu makalede verilmiyor. 23 Temmuz'da 'Bakü'nün 70 kilometre kadar yakınına' varış noktası adıyla verilmediği için kademe olmadı.",
  yol:[[46.360,40.683],[47.741,40.649],[48.394,40.568],[48.641,40.632],[49.867,40.372]] }

];

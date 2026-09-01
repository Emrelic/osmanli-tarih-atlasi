// -*- coding: utf-8 -*-
// YERLESIMLER_P0037 — PAKET-0037 oturumu (Fable), 2 Eylül 2026, 1.MURAT sevki (tahta M-1903/M-1910/M-1923)
//
// 🔴 BU DOSYA HENÜZ girdi.py'ye VE index.html'e BAĞLI DEĞİLDİR (M-1901: koşu sürerken
//    bağlama koordinatörün işi). Bağlanınca `window.YERLESIMLER_P0037` girdi.oku_dosya
//    tarafından kendiliğinden bulunur. Ad alanı dosya adından türetildi (§7 kuralı).
//
// ÜÇ KÜME, ÜÇ MADDE:
//   H-0001  Kahul · Bolgrad     Cenûbî Besarabya'nın İsmail'le birlikte 1856-1878 Boğdan'a
//                               dönen üç kazasından ikisi. İsmail yer_yama_uyg1.js'te düzeltildi,
//                               bu ikisi VERİDE HİÇ YOKTU (_yer_ara: 0 eşleşme, 2 Eylül'de yeniden
//                               sınandı). Sahiplik zinciri İsmail'in (yerlesimler.js) deseniyle
//                               birebir; tek fark: Kahul 1538'de Osmanlı rayası olmadı (Bucak
//                               sınırının kuzeyinde, Boğdan toprağı kaldı), Bolgrad 1821'de kuruldu.
//   H-0005  Lovozero · Varzuga  Emre'nin görselindeki kutu 67,10-69,12K / 34,29-39,25D 1864'te
//                               0 NOKTA (_yer_ara). Kola yarımadasının içi Kola·Kandalakşa (batı)
//                               ile Ponoy (doğu) arasında yarıçap tavanı yüzünden boş kalıyor —
//                               emilme değil, boşluk. Zincir Kola'nın (yerlesimler_ek8.js) aynısı.
//   H-0007  Lublin · Chełm · Zamość · Brest-Litovsk · Kovel · Lutsk · Volodymyr · Rivne ·
//           Pinsk · Białystok · Grodno
//                               Emre'nin görselindeki kutu 50,62-52,57K / 21,84-25,93D 1867'de
//                               0 NOKTA; geniş kutu 49-54,5K / 19-29,5D'de yalnız 6 nokta
//                               (Krakov · Lvov · Varşova · Minsk · Bar · Meciboj). Lvov'un
//                               (avusturya) peteği Lublin-Volhinya'yı kuzeye doğru boyuyor,
//                               Varşova/Minsk ile arasında tavan şeridi açık kalıyor — görseldeki
//                               "boşluk" ve yanlış sarı bu. Zincirler komşuların desenine oturtuldu:
//                               Varşova (almanya 1795-1806 · lehistan 1806-1815 · rusya 1815),
//                               Krakov/Lvov (avusturya 1795/1772), Minsk/Kamaniçe (rusya 1793/1795).
//
// KAYNAK DİSİPLİNİ (§4): TDV `bogdan` gövdesi okundu ve Kahul·Bolgrad·İsmail'in 1856/1878
// hareketini AÇIKÇA veriyor. TDV `lehistan` 200 döndü ama gövde BOİLERPLATE (§4 ④: 11 paragraf,
// hiçbiri madde metni) — "TDV'de yok" DENMİYOR, "çekilemedi" deniyor; `lublin`·`brest`·`bolgrad`·
// `kahul` 302 (ölü). Kola/Volhinya için TDV kapsam dışı; dayanak projede kabul görmüş genel
// akademik kaynaklar (kronoloji_lehistan.js'in Norman Davies dayanağı) ve coğrafî bilgi.
// Doğrulanamayan tek şey Bolgrad'ın kuruluş yılı (1821): Encyclopedia of Ukraine sayfası
// bulunamadı — kaynak alanında AÇIKÇA yazılı, gizlenmedi.
//
// DEĞİŞMEZ-2 NOTU: Osmanlı (`d:`/`v:`) kırılma günleri 1456-06-01 · 1812-05-28 · 1856-03-30 ·
// 1878-07-13 — dördü de İsmail'in kullandığı, çekirdekte maddeli günler. Yabancı (`s:`)
// günlerinden İKİSİ külliyatta YENİ: 1809-10-14 (Schönbrunn — Lublin·Chełm·Zamość Avusturya'dan
// Varşova Dukalığı'na) ve 1921-03-18 (Riga — Volhinya/Polesye/Grodno Sovyet Rusya'dan Polonya'ya).
// İkisi de gerçek ve savunulur; 2s sayacına en çok +2 gün ekler (tavan 121, bugün 70).

window.YERLESIMLER_P0037 = [

// ───── H-0001 · Cenûbî Besarabya ─────
{ ad:"Kahul (Cahul)", tur:"sehir", lat:45.905, lon:28.198, g:0, k:4, m:"Yaş",
  s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1812-05-28",t:"1856-03-30",d:"rusya"},{f:"1878-07-13",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  v:[{f:"1456-06-01",t:"1812-05-28",k:"Boğdan Voyvodalığı"},{f:"1856-03-30",t:"1878-07-13",k:"Boğdan Voyvodalığı (Cenûbî Besarabya — Paris Antlaşması'yla Boğdan'a geri verildi, Berlin Antlaşması'yla tekrar Rusya'ya)"}],
  d:[],
  kaynak:"TDV `bogdan` (gövdesi okundu): '1812 Bükreş Antlaşması gereğince Boğdan'ın doğu kısmı ... Rusya'ya bırakıldı' · 'Paris Antlaşması ile sonuçlanan Kırım Harbi'nden sonra Rusya Kahul (Cahul), İsmâil Kalesi ve Bolgrad'ı Boğdan'a geri verdi' · 'Berlin Antlaşması ile Besarabya'nın üç vilâyeti tekrar Rusya'ya verilmiş'. 1456-1812 Boğdan tâbiliği: İsmail kaydının deseni; Kahul Bucak rayasına girmedi (Bucak sınırının kuzeyi), bu kısım genel akademik/coğrafî bilgi. Koordinat: coğrafî bilgi. TDV `kahul` 302 (müstakil madde yok)." },

{ ad:"Bolgrad (Bolhrad)", tur:"sehir", lat:45.681, lon:28.613, g:0, k:4, m:"Yaş", kur:"1821-01-01",
  s:[{f:"1821-01-01",t:"1856-03-30",d:"rusya"},{f:"1878-07-13",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  v:[{f:"1856-03-30",t:"1878-07-13",k:"Boğdan Voyvodalığı (Cenûbî Besarabya — Paris Antlaşması'yla Boğdan'a geri verildi, Berlin Antlaşması'yla tekrar Rusya'ya)"}],
  d:[],
  kaynak:"TDV `bogdan` (gövdesi okundu): 1856 iadesi ve 1878 geri alınışı Bolgrad'ı ADIYLA sayıyor. Kuruluş 1821 (Rus idaresinde Bulgar göçmen kolonisi): TDV `bolgrad` 302, Encyclopedia of Ukraine sayfası BULUNAMADI — yıl genel akademik/coğrafî bilgi, DOĞRULANMADI; `kur:` alanı bu yüzden yuvarlak (1821-01-01). Koordinat: coğrafî bilgi." },

// ───── H-0005 · Kola yarımadasının içi ─────
{ ad:"Lovozero (Luyavr)", tur:"sehir", lat:68.005, lon:35.015, g:0, k:4,
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[],
  kaynak:"bulunamadı — TDV bu coğrafyayı kapsamıyor. Sami (Lapon) pogostu; ilk anılışı XVI. yüzyıl (1574 Loyyavrsiyt / 1608 vakayinâme) — genel akademik/coğrafî bilgi. Sahiplik zinciri Kola'nın (yerlesimler_ek8.js) zinciriyle birebir: yarımadanın içi Kola uyezdinin parçası. Koordinat: coğrafî bilgi. Amaç: H-0005 görselindeki tavan boşluğunu doldurmak (kutuda 0 nokta ölçüldü)." },

{ ad:"Varzuga", tur:"sehir", lat:66.397, lon:36.620, g:0, k:4,
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[],
  kaynak:"bulunamadı — TDV bu coğrafyayı kapsamıyor. Terskiy kıyısının en eski Rus (Novgorod) yerleşimi, ilk anılışı 1466 — genel akademik/coğrafî bilgi. Zincir Kola'nın aynısı. Koordinat: coğrafî bilgi." },

// ───── H-0007 · Lublin — Volhinya — Polesye ─────
// Kongre Lehistanı parçası (1795 Avusturya · 1809 Varşova Dukalığı · 1815 Rusya · 1918 Polonya)
{ ad:"Lublin", tur:"sehir", lat:51.2465, lon:22.5684, g:1, k:3,
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1809-10-14",d:"avusturya"},{f:"1809-10-14",t:"1815-06-09",d:"lehistan"},{f:"1815-06-09",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"TDV `lehistan` gövdesi çekilemedi (§4 ④ boilerplate), `lublin` 302. Dayanak: Norman Davies, God's Playground: A History of Poland (Oxford UP) — üçüncü taksim 24 Ekim 1795 (Batı Galiçya, Avusturya), Schönbrunn 14 Ekim 1809 (Varşova Dukalığı'na), Viyana Nihaî Senedi 9 Haziran 1815 (Kongre Lehistanı, Rusya). Koordinat: kronoloji_lehistan.js'teki eksik_nokta kaydıyla aynı. 1917-1918 kuyruğu Varşova kaydının deseni." },

{ ad:"Chełm (Kholm)", tur:"sehir", lat:51.1431, lon:23.4716, g:0, k:4, m:"Lublin",
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1809-10-14",d:"avusturya"},{f:"1809-10-14",t:"1815-06-09",d:"lehistan"},{f:"1815-06-09",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Lublin kaydıyla aynı dayanak (N. Davies, God's Playground); 1281-1340 Halic-Volhinya dönemi külliyatın deseni gereği (Lvov kaydı gibi) `lehistan` altında sadeleştirildi. Koordinat: coğrafî bilgi." },

{ ad:"Zamość", tur:"kale", lat:50.7178, lon:23.2478, g:0, k:4, m:"Lublin", kur:"1580-04-10",
  s:[{f:"1580-04-10",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1809-10-14",d:"avusturya"},{f:"1809-10-14",t:"1815-06-09",d:"lehistan"},{f:"1815-06-09",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Kuruluş 10 Nisan 1580 ve koordinat: kronoloji_lehistan.js'teki iki eksik_nokta kaydı (N. Davies, God's Playground). Taksim/1809/1815 günleri Lublin kaydıyla aynı dayanak." },

// Prusya payı → Tilsit'le Rusya (1807)
{ ad:"Białystok", tur:"sehir", lat:53.1325, lon:23.1688, g:0, k:4,
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1807-07-09",d:"almanya"},{f:"1807-07-09",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"N. Davies, God's Playground: üçüncü taksimde Prusya'ya (Yeni Doğu Prusya), Tilsit (9 Temmuz 1807 — kronoloji_almanya.js'te maddeli) ile Rusya'ya (Belostok oblastı). Prusya külliyatta Varşova kaydının deseniyle `almanya` kimliğinde. 1918-11-11 Polonya günü Varşova'nın deseni (fiilî Polonya girişi Şubat 1919 — ay farkı bilinçli, külliyat günü tercih edildi). Koordinat: coğrafî bilgi." },

// Litvanya Büyük Dukalığı / Volhinya payı → 1795 Rusya → Riga 1921 Polonya
{ ad:"Brest-Litovsk", tur:"kale", lat:52.0975, lon:23.6877, g:1, k:3,
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"N. Davies, God's Playground: üçüncü taksim (24 Ekim 1795) ile Rusya; Riga Antlaşması (18 Mart 1921) ile Polonya. TDV `brest` 302. 1918 Brest-Litovsk Antlaşması'nın Alman işgali (1915-1918) `isg:` olarak YAZILMADI — bu partinin kapsamı dışı, kayda geçiyor. Koordinat: coğrafî bilgi. Ad `Brest-Litovsk` seçildi çünkü külliyatta Fransa'daki `Brest` var (ad çakışması girdi.py'de HATA)." },

{ ad:"Pinsk", tur:"sehir", lat:52.1150, lon:26.1030, g:0, k:4,
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Brest-Litovsk kaydıyla aynı dayanak (N. Davies): Polesye 1795 Rusya, 1921 Riga ile Polonya. Koordinat: coğrafî bilgi." },

{ ad:"Grodno", tur:"sehir", lat:53.6778, lon:23.8297, g:0, k:3,
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"N. Davies, God's Playground: 1795 üçüncü taksimde Rusya (son Seym Grodno'da toplandı), 1921 Riga ile Polonya. Koordinat: coğrafî bilgi." },

{ ad:"Kovel", tur:"sehir", lat:51.2153, lon:24.7086, g:0, k:4, m:"Lutsk",
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Volhinya: N. Davies, God's Playground — 1569 Lublin Birliği'yle Taç'a, 1795 Rusya, 1921 Riga ile Polonya. 1281-1340 Halic-Volhinya dönemi külliyat deseni gereği `lehistan` altında sadeleştirildi (Lvov kaydı gibi). Koordinat: coğrafî bilgi." },

{ ad:"Lutsk (Łuck)", tur:"kale", lat:50.7472, lon:25.3254, g:1, k:3,
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Kovel kaydıyla aynı dayanak (Volhinya voyvodalığının merkezi). Koordinat: coğrafî bilgi." },

{ ad:"Volodymyr-Volynskyi (Włodzimierz)", tur:"sehir", lat:50.8480, lon:24.3226, g:0, k:4, m:"Lutsk",
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Kovel kaydıyla aynı dayanak. Koordinat: coğrafî bilgi." },

{ ad:"Rivne (Równe)", tur:"sehir", lat:50.6199, lon:26.2516, g:0, k:4, m:"Lutsk",
  s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-03-18",d:"sovyet-rusya"},{f:"1921-03-18",t:"1923-10-29",d:"polonya"}],
  d:[],
  kaynak:"Kovel kaydıyla aynı dayanak. Koordinat: coğrafî bilgi." }

];

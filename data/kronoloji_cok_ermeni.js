// -*- coding: utf-8 -*-
// =====================================================================
// ERMENİ COĞRAFYASI — çok künyeli kronoloji (KRONO-KAFKAS-0929, 29 Eylül 2026)
// =====================================================================
// window.KRONOLOJI_COK_ERMENI — şartname oturumlar/KRONO-KAFKAS-0929.md
// + oturumlar/KRONO-DUNYA-0929-ORTAK.md §4.1 (M-5396: COK yolu).
//
// 🔴 BU BİR DEVLET KRONOLOJİSİ DEĞİLDİR — COĞRAFYA/TOPLULUK KRONOLOJİSİDİR.
// Ermenistan 1281-1923 arasında bağımsız bir devlet olarak yalnız iki kez
// vardır: Kilikya Ermeni Krallığı (künye `kilikya-ermeni`, 1199 → Memlûk
// fethi 1375) ve Ermenistan Demokratik Cumhuriyeti (künye
// `ermenistan-demokratik-cumhuriyeti`, 1918 → 1920). Aradaki beş yüz yıl
// boyunca Ermeni yurdu (Revan/Erivan, Eçmiyadzin, Nahçıvan, Kars) Karakoyunlu,
// Akkoyunlu, Safevî, Osmanlı, Afşar, Kaçar ve Rus idareleri arasında el
// değiştirdi. Bu dosyadaki maddeler o yüzden olayın o gün AİT OLDUĞU
// SİYASİ YAPIYA (`devlet:`) bağlanır; "Ermeni devleti" diye bir künye
// uydurulmadı. Revan (Erivan) Hanlığı'nın (1747-1828) künyesi BUGÜN YOKTUR —
// M-5416 kuralı (3) gereği hanlık maddeleri ÖNERİLEN id `revan-hanligi` ile
// yazıldı (KUNYE-DUNYA-0929 eksik listesindeki id); künye açılınca kendiliğinden
// bağlanır, o güne dek cokTarafliKronolojiEkle onu sayıp konsola basar (düşürmez).
// Öneri ve gerekçe: denetim/KRONO-KAFKAS-0929-KUNYE.md.
//
// 🔴 YAZILMAYANLAR ve NİÇİN (M-5397 önerisi (a)):
//   · Kilikya 1281-1375: data/kronoloji_anadolu.js + kronoloji_memluk.js'te
//     zaten 20'yi aşkın madde var — tekrar edilmedi.
//   · Osmanlı İÇİ Ermeni topluluğu olayları (1461 İstanbul patrikliği, 1830
//     Ermeni Katolik milleti, 1863 Nizamname, 1878 Berlin 61. md, 1890'lar,
//     1909, 1915): bunlar Osmanlı'nın kendi olaylarıdır (ORTAK §5.2) ve
//     Osmanlı-dışı bir künyeye bağlanamaz. Koordinatör hükmü (M-5416): bunlar
//     polity değil KONU maddesidir; 8. boyut (CLAUDE.md §1.6) yalnız Emre'nin
//     açtığı iki konuyla sınırlı ⇒ YAZILMADI. Liste ve gerekçe
//     denetim/KRONO-KAFKAS-0929-KUNYE.md'de; Emre'ye koordinatör soracak.
//   · 20. yüzyılın tartışmalı olayları için bu dosyada nitelendirme YAPILMADI;
//     yalnız TDV'nin tarihlediği diplomatik olgular yazıldı.
//
// KAYNAK: TDV İslâm Ansiklopedisi; gövdeler denetim/KRONO-KAFKAS-0929-tdv-onbellek/
// (revan, kars, sevr-antlasmasi, millet, kazim-karabekir). TDV'de "Ermeniler",
// "Ermenistan", "Eçmiyazin", "Kilikya" müstakil maddesi YOK (302, bu turda sınandı).
// Değişmez 2 notu: bu dosya denetle.py evreninde DEĞİLDİR.

window.KRONOLOJI_COK_ERMENI = [

// === 15. YÜZYIL ===========================================================
{ t:"1441-01-01", devlet:"karakoyunlu", devletler:["karakoyunlu"],
  b:"Ermeni katogikosluğu Kilikya'dan Eçmiyadzin'e taşındı", tur:"din", onem:5, dunya:2, kapsam:"ic",
  etiket:["din","konu-din"],
  yer_id:"Eçmiyadzin", gun:"1441 (TDV revan gün vermez)",
  d:"Kilikya Ermeni Krallığı'nın 1375'te Memlûklere düşmesinden sonra Sis'te kalan Ermeni katogikosluğunun merkezi, 1441'de Revan yakınındaki Eçmiyadzin'e (Üçkilise) taşındı. Eçmiyadzin bundan sonra Ermeni kilisesinin ruhani merkezi oldu; bölge o sırada Karakoyunlu idaresindeydi.",
  ic_not_d:"TDV revan cümlesi: 'Kilikya'dan sürülen Ermeni katogikosları … Eçmiadzin'i kendilerine ikametgâh seçmişlerdi'. Sis'te ayrı bir katogikosluk sürdü (TDV millet: 'Eçmiyazin, Sîs ve Ahtamar katolikoslukları'). Harita Eçmiyadzin'i 1406-10-21→1469 karakoyunlu boyuyor ⇒ taraf karakoyunlu.",
  kaynak:"TDV revan ('1441'de Kilikya'dan sürülen Ermeni katogikosları, Revan şehrine yakın Eçmiadzin'i (Üçkilise) kendilerine ikametgâh seçmişlerdi (Hacieva, VII, 64)') + TDV millet (üç katolikosluk)" },

// === 17-18. YÜZYIL ========================================================
{ t:"1616-09-11", devlet:"safevi", devletler:["safevi"],
  b:"Osmanlı ordusunun Revan kuşatması başarısız kaldı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Revan", gun:"29 Şâban 1025 / 11 Eylül 1616 (TDV revan)",
  d:"Osmanlı kuvvetleri 11 Eylül 1616'da Emirgûne Han'ın savunduğu Revan Kalesi'ni kuşattı, fakat elli beş gün sonra kuşatmayı kaldırdı. Revan 1604'ten beri Safevî elindeydi ve 1635'teki IV. Murad seferine kadar orada kaldı.",
  kaynak:"TDV revan ('Osmanlılar, 29 Şâban 1025'te (11 Eylül 1616) Emirgūne Han'ın savunduğu Revan Kalesi'ni kuşattıysa da elli beş gün sonra muhasarayı kaldırdı')" },

{ t:"1731-03-01", devlet:"safevi", devletler:["safevi"],
  b:"Şah Tahmasb'ın Revan kuşatması başarısız kaldı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Revan", gun:"Mart 1731 (TDV revan gün vermez)",
  d:"1724'ten beri Osmanlı elindeki Revan'ı Safevî Şahı II. Tahmasb Mart 1731'de kuşattı ama alamadı. 1732'de imzalanan kısa ömürlü antlaşma Revan'ın Osmanlı toprağı içinde kaldığını tescil etti; şehir ancak 1735'te Nâdir'e geçecekti.",
  kaynak:"TDV revan (Şah Tahmasb 1731 Martında Revan'ı kuşattıysa da alamadı. 1732'de imzalanan, ancak kısa süren anlaşma ile Revan'ın Osmanlı toprağı içinde kaldığı tescil edildi)" },

{ t:"1747-01-01", devlet:"revan-hanligi", devletler:["revan-hanligi"],
  b:"Revan Hanlığı müstakil hâle geldi", tur:"kurulus", onem:4, dunya:1, kapsam:"ic",
  etiket:["siyaset","kurulus","konu-siyasi"],
  yer_id:"Revan", gun:"1747 (TDV revan gün vermez)",
  d:"Nâdir Şah'ın atadığı Revan hanı Pîr Mahmud Han 1747'de öldürülünce Mîr Mehdî müstakil bir Revan Hanlığı kurdu. Hanlık 1828'e kadar yaşayacak; bu süre içinde Karabağ hanı, Gürcü krallığı ve Kaçar hanedanı arasında sıkışacaktı.",
  ic_not_d:"Revan Hanlığı künyesi bugün YOK; M-5416 (3) gereği önerilen id `revan-hanligi` yazıldı (denetim/KRONO-KAFKAS-0929-KUNYE.md). Harita Revan'ı 1747-06-20'den itibaren zend boyuyor, zend künyesi ise 1751-01-01'de başlıyor (denetle.py künye aşımı listesinde −3,5 yıl) — DUZELTME dosyasında.",
  kaynak:"TDV revan ('Pîr Mahmud Han, Revan hanı tayin edilmişti; 1747'de öldürülünce Mîr Mehdî müstakil bir Revan Hanlığı oluşturdu')" },

// === 19. YÜZYIL ===========================================================
{ t:"1808-01-01", devlet:"revan-hanligi", devletler:["revan-hanligi","kacar","rusya"],
  b:"Rusların ikinci Revan kuşatması başarısız kaldı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Revan", gun:"1808 (TDV revan gün vermez)",
  d:"Birinci Rus-İran savaşı sırasında General Gudoviç kumandasındaki 6000 kişilik Rus birliği Revan Kalesi'ni ikinci kez kuşattı, ama 1804'teki Tsitsianov kuşatması gibi bu da sonuç vermedi. Revan hanlığı Kaçar hâkimiyetinde yirmi yıl daha kalacaktı.",
  ic_not_d:"1804 Tsitsianov kuşatması data/kronoloji_iran.js 1804-06-10 (Birinci Rus-İran Savaşı, yer Revan) maddesinde.",
  kaynak:"TDV revan ('Ruslar, General Gudoviç kumandasında kaleyi 6000 kişilik bir birlik ve on iki topla 1808'de ikinci defa muhasara altına aldılarsa da yine başarılı olamadılar')" },

{ t:"1827-10-13", devlet:"rusya", devletler:["rusya","revan-hanligi","kacar"],
  b:"Paskeviç Revan Kalesi'ni aldı", tur:"savas", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","toprak-kazanc","konu-askeri"],
  yer_id:"Revan", gun:"13 Ekim 1827 (TDV revan) — takvim TDV'de belirtilmemiş",
  d:"1826'da yeniden başlayan Rus-İran savaşında Paskeviç kumandasındaki Rus ordusu ilk saldırıda sonuç alamadı, ikinci saldırıda 13 Ekim 1827'de Revan Kalesi'ni ele geçirdi. Dört ay sonraki Türkmençay Antlaşması (Şubat 1828) bu fethi hukuken tescil etti.",
  ic_not_d:"Harita Revan'ın Kaçar→Rusya geçişini 1828-02-22'ye (Türkmençay) koyuyor; fiilî Rus işgali 13 Ekim 1827'de başladı — öneri dosyasında (isg:). Türkmençay data/olaylar_ek7.js, kronoloji_iran.js (1828-02-10!) ve kronoloji_sinir_komsu.js'te üç ayrı günde duruyor — DUZELTME'de.",
  kaynak:"TDV revan ('Savaş yeniden başlayınca (1826) Ruslar, Paskieviç kumandasındaki ilk Revan saldırısından sonuç alamamakla birlikte ikinci saldırıda kaleyi ele geçirdiler (13 Ekim 1827)')" },

{ t:"1828-04-02", devlet:"rusya", devletler:["rusya","revan-hanligi"],
  b:"Revan ve Nahçıvan hanlıkları kaldırıldı — Ermeni vilayeti kuruldu", tur:"idari", onem:5, dunya:2, kapsam:"ic",
  etiket:["idari","konu-idari","konu-sosyal"],
  yer_id:"Revan", gun:"2 Nisan 1828 (TDV revan: 'çarın 2 Nisan 1828 tarihli emri') — takvim belirtilmemiş",
  d:"Türkmençay'dan hemen sonra çarın emriyle Revan ve Nahçıvan hanlıkları kaldırıldı, Ordubad da eklenerek 'Ermeni vilayeti' adıyla yeni bir idari birim oluşturuldu. Bu vilayete hem Osmanlı'dan hem İran'dan önemli sayıda Ermeni göç etti; bölgenin nüfus dengesi bu göçle kalıcı olarak değişmeye başladı. Vilayet 1840'a kadar bu adla anıldı.",
  ic_not_d:"Göç konusunda TDV'nin dayandığı çalışma: Kemal Beydilli, '1828-1829 Osmanlı-Rus Savaşında Doğu Anadolu'dan Rusya'ya Göçürülen Ermeniler' [TDV: belgeler], TTK Belgeler XIII/17 (1988). Rus sayımına göre 1829-1832'de Revan şehrinde 7331 Müslüman, 3937 Ermeni (TDV revan).",
  kaynak:"TDV revan ('çarın 2 Nisan 1828 tarihli emriyle Nahcıvan ve Revan hanlıkları ilga edildi, Ordubâd bu iki hanlığın topraklarına eklenerek Ermeni vilâyeti oluşturuldu. Bölge 1840 yılına kadar bu adla anıldı')" },

{ t:"1850-01-01", devlet:"rusya", devletler:["rusya"],
  b:"Revan (Erivan) guberniyası Kafkasya Genel Valiliği'ne katıldı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"],
  yer_id:"Revan", gun:"1850 (TDV revan gün vermez)",
  d:"Çarlık idaresi Kafkasya'yı yeniden örgütlerken 1844'te kurduğu Kafkasya Genel Valiliği'ne 1850'de Nahçıvan ve Ordubad kazalarıyla birlikte Revan vilayetini de dahil etti. 1868 düzenlemesinde vilayet Erivan, Gümrü, Nahçıvan, Yeni Beyazıt ve Eçmiyadzin gibi kazalardan oluşuyordu.",
  kaynak:"TDV revan ('1844'te oluşturulan Kafkasya Genel Valiliği'ne Nahcıvan ve Ordubâd kazalarıyla birlikte 1850'de Revan vilâyeti dahil edildi (Aslan, VII/38 [2001])'; 1868 düzenlemesi)" },

// === 1918-1920 — ERMENİSTAN CUMHURİYETİ ===================================
{ t:"1918-05-28", devlet:"ermenistan-demokratik-cumhuriyeti", devletler:["ermenistan-demokratik-cumhuriyeti"],
  b:"Ermenistan Cumhuriyeti kuruldu — başşehir Erivan", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyaset","kurulus","konu-siyasi"],
  yer_id:"Revan", gun:"Mayıs 1918 (TDV sevr-antlasmasi) — GÜN KAYNAKTA YOK; kaba tarih künye penceresinin dışına düştüğü için künyenin günü (28 Mayıs) devralındı. Künye günü bir kaynak DEĞİLDİR",
  d:"Transkafkasya federasyonunun Mayıs 1918'de dağılmasıyla Gürcistan ve Azerbaycan gibi Ermenistan da bağımsız bir cumhuriyet olarak ortaya çıktı ve Erivan başşehir oldu. Osmanlı Devleti Haziran 1918'de başşehri Revan olan Ermenistan'ı tanıdı.",
  ic_not_d:"Bağımsızlığın günü TDV'de yok (sevr: 'Mayıs 1918'de Erivan'da kurulan Ermenistan Cumhuriyeti' [TDV: sevr-antlasmasi]); künyede de kaynak 'bulunamadı'. Osmanlı tanıması Batum Antlaşması'dır (data/kronoloji_cok_1dunya_B.js 1918-06-04) — tekrar yazılmadı.",
  kaynak:"TDV sevr-antlasmasi ('Mayıs 1918'de Erivan'da kurulan Ermenistan Cumhuriyeti') + TDV revan ('1918 Haziranında başşehri Revan olan Ermenistan'ı tanıdı')" },

{ t:"1919-04-12", devlet:"ermenistan-demokratik-cumhuriyeti", devletler:["ermenistan-demokratik-cumhuriyeti","ingiltere"],
  b:"İngilizler Kars'ın denetimini Ermenistan'a bıraktı", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","toprak-kazanc","konu-siyasi"],
  yer_id:"Kars", gun:"Nisan 1919 (TDV kazim-karabekir) — devir günü kaynakta YOK; gün komşudan: Kars'ın İngiliz işgali · TDV kars (12 Nisan 1919). Değer EN ERKEN sınırdır",
  d:"12 Nisan 1919'da Kars'ı işgal eden İngilizler, Mondros'tan sonra kurulan yerli Cenûb-ı Garbî Kafkas hükümetini dağıttı ve şehrin denetimini Ermenistan'a bıraktı. Kars, Kâzım Karabekir Paşa'nın 30 Ekim 1920'de şehre girişine kadar Ermenistan idaresinde kaldı.",
  ic_not_d:"İngiliz işgali data/olaylar_p0049.js 1919-04-12 maddesinde; bu madde yalnız Ermeni idaresine devri anlatır. Harita Kars'ı 1918-05-25→1920-04-23 Osmanlı, ardından tbmm-turkiye boyuyor; 1919-1920 Ermeni idaresi YOK — öneri dosyasında.",
  kaynak:"TDV kars ('12 Nisan 1919'da Kars İngiliz işgaline uğradı … İngilizler Kars'ın denetimini Ermeniler'e bıraktılar … Kâzım Karabekir Paşa 30 Ekim 1920'de Kars'a girdi') + TDV kazim-karabekir ('İngilizler tarafından Ermenistan'a ve Gürcistan'a verilen (Nisan 1919) elviye-i selâse')" },

{ t:"1920-01-19", devlet:"ermenistan-demokratik-cumhuriyeti", devletler:["ermenistan-demokratik-cumhuriyeti","ingiltere","fransa-cumhuriyet","italya"],
  b:"İngiltere, Fransa ve İtalya Ermenistan Cumhuriyeti'ni resmen tanıdı", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"Revan", gun:"19 Ocak 1920 (TDV sevr-antlasmasi)",
  d:"Paris Barış Konferansı sürerken İngiltere, Fransa ve İtalya Erivan'daki Ermenistan Cumhuriyeti'ni 19 Ocak 1920'de resmen tanıdı. TDV'ye göre müttefikler Ermenistan'a gerekli malî ve askerî destekten kaçındı; tanıma bu yüzden büyük ölçüde diplomatik kaldı.",
  kaynak:"TDV sevr-antlasmasi ('Mayıs 1918'de Erivan'da kurulan Ermenistan Cumhuriyeti'ni İngiltere, Fransa ve İtalya 19 Ocak 1920 tarihinde, Amerika 23 Nisan 1920'de resmen tanıdı'; İngiltere'nin 15 Ağustos 1919'da bölgeden çekilmesi)" },

{ t:"1920-04-23", devlet:"ermenistan-demokratik-cumhuriyeti", devletler:["ermenistan-demokratik-cumhuriyeti","abd"],
  b:"ABD Ermenistan Cumhuriyeti'ni tanıdı", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"Revan", gun:"23 Nisan 1920 (TDV sevr-antlasmasi)",
  d:"Amerika Birleşik Devletleri Ermenistan Cumhuriyeti'ni 23 Nisan 1920'de resmen tanıdı. Aynı günlerde Paris'te ABD'nin bir Ermenistan mandası üstlenmesi tartışılıyordu.",
  kaynak:"TDV sevr-antlasmasi ('Amerika 23 Nisan 1920'de resmen tanıdı')" },

{ t:"1920-06-01", devlet:"ermenistan-demokratik-cumhuriyeti", devletler:["ermenistan-demokratik-cumhuriyeti","abd"],
  b:"ABD Senatosu Ermenistan mandasını reddetti", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","konu-diplomasi"],
  yer_id:"Revan", gun:"1 Haziran 1920 (TDV sevr-antlasmasi)",
  d:"Amerikan Senatosu 1 Haziran 1920'de ABD'nin Ermenistan üzerinde manda üstlenmesini reddetti. Böylece iki ay sonra imzalanacak Sevr Antlaşması'nın Doğu Anadolu hükümlerini uygulayacak bir büyük güç kalmadı.",
  kaynak:"TDV sevr-antlasmasi ('Amerikan Senatosu, Ermenistan mandasını 1 Haziran 1920'de reddetti')" }

];

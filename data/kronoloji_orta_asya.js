// -*- coding: utf-8 -*-
// KRONOLOJI_ORTA_ASYA — Altın Orda ardılı hanlıklar, Kazak Hanlığı, Tarım
// havzası hanlıkları, Oyrat/Cungar ve Türkmen boyları (1281-1923)
// ---------------------------------------------------------------------------
// 22 Ağustos 2026, oturumlar/KRONOLOJI-SARTNAME.md şemasına göre yazıldı.
// `onem:` bu dosyanın konusu (ilgili Orta Asya kimliği) için ağırlık;
// `dunya:` olayın KENDİSİNE ait, HER dosyada AYNI olması gereken 1-5 puan.
//
// 🔴 KAPSAM KARARI — bu dosya DOKUZ kimliği kapsıyor. Koordinatörün verdiği
// beş künyeden ÜÇÜNÜN gerçek `id:`si başkaydı; ölçüldü ve düzeltildi (M-1071):
//   kazan (1437-1552) · astarhan (1466-1556) · nogay (1440-1783) ·
//   sibir-hanligi (1430-1598) · kazak-hanligi (1465-1847) ·
//   cungar (1634-1758) · yarkent-hanligi (1514-1705) ·
//   mogulistan (1347-1680) · yakub-beg (1865-1878) · turkmen (1600-1884)
//   ⚠️ "kasgar" diye bir künye YOKTUR — koordinatörün o adla kastettiği
//      coğrafya mogulistan + yarkent-hanligi + yakub-beg üçlüsüdür.
//   ⚠️ "kirgiz" künyesi de YOKTUR; devletler.js'in 431 künyesinin hiçbirinde
//      geçmiyor. Kırgızlarla ilgili tarihli olaylar ayrı bir kimliğe
//      bağlanmadan, geçtikleri coğrafyanın maddesi içinde yazıldı.
//   ⚠️ "kasim" (Kasım Hanlığı, 1452-1681) BİLEREK DIŞARIDA — koordinatörün
//      listesinde yok, kendi başıma kapsam genişletmedim. Kronolojisi hâlâ
//      boş; koordinatöre bildirildi (M-1071 §3).
//
// 🔴 TEKRARLAMA YASAĞI — ÖLÇÜLDÜ, sonra yazıldı.
// 30 kronoloji dosyası (3248 madde) node ile yüklenip tarandı. Aşağıdaki
// çapa olaylar BAŞKA dosyalarda ZATEN var ve bu dosyada TEKRARLANMADI:
//   1437 Kazan'ın ayrılışı · 1466 Astarhan'ın ayrılışı · 1502 Büyük Orda'nın
//   sonu · 1521 Sâhib Giray'ın Kazan tahtı · 1549 ve 1556 Astarhan ·
//   1552 Kazan'ın fethi · 1569 Don-Volga seferi · 1581 Yermak'ın seferi ·
//   1449 Tumu · 1755 Qianlong'un Cungar seferleri · 1759 Altışehir ·
//   1878 Zuo Zongtang'ın yeniden fethi.
//   ⇒ altinorda · kirim · rusya · cin · ozbek dosyalarındalar. Bu dosya
//   onların ARASINI dolduruyor: hanlıkların KENDİ iç tarihini.
//
// 🔴 ÖLÇÜLMÜŞ ÇELİŞKİ — BENİM DOSYAMDA DEĞİL, ama bildiriyorum (§3.2):
//   1552 Kazan fethi   kronoloji_rusya.js dunya:3  ·  kronoloji_kirim.js dunya:4
//   1556 Astarhan ilhakı  kronoloji_rusya.js dunya:3 · kronoloji_kirim.js dunya:4
//   Aynı olay iki dosyada iki farklı `dunya` taşıyor; şartname bunu KUSUR
//   sayıyor. Bu dosyadaki komşu maddeler dunya:4 çizgisine göre puanlandı.
//   Ayrıca 1552 fethinin GÜNÜ de çelişiyor: rusya.js 1552-10-02, TDV
//   (kazan-hanligi) 15 Ekim 1552. Düzeltme benim yetkimde değil — koordinatör.
//
// KAYNAK DİSİPLİNİ (KRONOLOJI-SARTNAME.md §4 / CLAUDE.md §4):
//   Bu turda HTTP kodu VE GÖVDESİ OKUNARAK doğrulanan TDV slugları (2026-08-22):
//     kazan-hanligi · astarhan-hanligi · nogaylar · sibir-hanligi · kucum-han ·
//     kazaklar · kazakistan · kasgar · yakub-beg · kalmuklar · kirgizlar ·
//     turkmenler · kasim-hanligi
//   🔴 ÖLÜ / TUZAK ÇIKANLAR (ölçüm sonucu, gizlenmiyor):
//     ejderhan-hanligi → HTTP 200 ama madde DEĞİL, "bk. ASTARHAN HANLIĞI"
//        yönlendirme kabuğu. ⚠️ data/devletler.js `astarhan` künyesi
//        `kaynak:"ejderhan-hanligi"` diyor — yani kaynak alanı bir maddeye
//        değil bir yönlendirmeye işaret ediyor. Gerçek madde astarhan-hanligi.
//     dogu-turkistan → aynı sınıf, yönlendirme kabuğu.
//     cungarlar · yarkent · altisehir · mangit · astarhan · hive · altin-orda ·
//     ebul-hayr-han · abulhayr · kokand · turkistan--sehir · tasken · ozbek-hani
//        → 302, madde YOK.
//   ⇒ Cungar/Kalmuk için TDV'nin müstakil maddesi `kalmuklar`dır; Cungar
//     Hanlığı orada "Doğu Kalmukları" başlığı altında anlatılıyor.
//
// 🔴 TANECİKLİK BOŞLUĞU (CLAUDE.md §4) — açıkça yazıyorum:
//   TDV bu coğrafyayı KAPSIYOR ama bazı taneciklerde SUSUYOR. Kazak
//   Hanlığı'nın han han listesi `kazaklar` maddesinde YOK, `kazakistan`
//   maddesinin TARİH bölümünde VAR — dar madde tutmayınca kapsayıcı madde
//   denendi ve tuttu (§4 "dar slug tutmazsa genel maddeyi dene").
//   Cungar hanlarının saltanat yılları yalnız `kalmuklar` maddesinde,
//   Türkmen boy tarihi yalnız `turkmenler` maddesinde bulunabildi.
//
// KAPSAM ic/dis — kimliğin kendi iç meselesi (taht, boy kavgası, hukuk,
// edebiyat, göç) → "ic". Yabancı bir güçle ilişki (sefer, işgal, antlaşma,
// ilhak, elçilik) → "dis".
//
// yer_id — `data/yerlesimler*.js`teki adla BİREBİR eşleşen, bu dosya için
// girdi.yukle() ile DOĞRULANMIŞ küme: Kazan · Sviyajsk · Bulgar (Bolgar) ·
// Kasimov · Suzdal · Nijniy Novgorod · Hlınov (Vyatka) · Ufa · Samara ·
// Saratov · Tsaritsyn · Astrahan · Saray (Selitrennoye) · Guryev (Atyrau) ·
// Mangışlak · Emba (Cem) · Uralsk (Yayık) · Orenburg · Orsk · Kuban Nogay
// bozkırı · Rın kumulları (Volga-Yayık arası) · Kalmuk bozkırı ·
// Stavropol–Kuma bozkırı · Bozkır (Deşt-i Kıpçak) · Kazak bozkırı (Turgay) ·
// Kazak bozkırı (Sarısu) · Kazak bozkırı (İşim) · Tobolsk (İsker) ·
// Tümen (Çimgi-Tura) · Kızıl-Tura · Abalak · Tara · Berezov · Surgut ·
// Mangazeya · Omsk · Baraba bozkırı · Semipalatinsk · Ust-Kamenogorsk ·
// Türkistan (Yesi) · Taşkent · Çimkent · Almatı (Vernıy) · Hokand · Oş ·
// Semerkant · Buhara · Hîve · Köhne Ürgenç (Gürgenç) · Merv (Mari) ·
// Serahs · Aşkabad · Nesâ · Kızılarvat · Krasnovodsk (Türkmenbaşı) ·
// Karakum · Esterâbâd (Gürgân) · Kaşgar · Yarkent (Şaçe) · Hotan ·
// Kuça (Kuqa) · Turfan · Hâmi (Kumul) · Ürümçi (Dihua) · Gulca (Yining) ·
// Cungarya havzası · Zaysan · Çöçek (Tarbagatay) · Altay (Şara Sume) ·
// Kobdo (Hovd) · Lhasa · Perm.
//
// 🔴 YERLEŞİM KAYDI OLMAYAN YERLER — bu maddeler `yer_id:""` bırakıldı,
// UYDURULMADI (şartname §3.1). Koordinatöre sayıyla bildirildi:
//   Göktepe (1879/1881) · Saraycık (Nogay başkenti) · Akmescid-Kızılorda
//   (1853) · Sığnak · Otrar · Sayram · Suzak · Kökçetav · Akmola · Irgız ·
//   Balkaş · Isık Göl · Pişpek (Bişkek) · Evliyaata (Taraz) · Aksu · Talas.
//   ⚠️ TUZAK: `Akmescid` adında bir nokta VAR ama KIRIM'daki Akmescid'dir
//   (44,95°K / 34,10°D) — Kızılorda'nın 2900 km batısı. Kullanılmadı.
//
window.KRONOLOJI_ORTA_ASYA = [

// === A) KAZAN HANLIĞI (1437-1556) ==========================================
// TDV kazan-hanligi: "Hanlığın hüküm sürdüğü 115 yıl içinde on dokuz defa han
// değişmiş, on beş han tahta çıkmıştır." Bu dosya o on dokuz değişimin
// kaynağın tarihlediklerini yazıyor.

{ t:"1438-01-01", b:"Uluğ Muhammed Belev'de II. Vasili'yi yendi — Kazan'a giden yol açıldı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","kurulus"],
  yer_id:"Kazan",
  d:"Altın Orda tahtını kaybedip 3000 askeriyle Saray'dan ayrılan Uluğ Muhammed Han, 1432'de kendi yarlığıyla knez tayin ettiği II. Vasili'den yardım istedi; talebi düşmanca karşılanınca Rus sınırındaki Belev'de savaşa girdi ve galip çıktı. Bu zaferden sonra eski Kazan şehrine geldi ve bölge halkı tarafından sevinçle karşılandı. Kazan Hanlığı'nın temelleri bu geliş üzerine atılmıştır.",
  kaynak:"kazan-hanligi (TDV, madde: kazan-hanligi — içerik okundu, 2026-08-22)" },

{ t:"1439-01-01", b:"Uluğ Muhammed'in ilk Moskova seferi netice vermedi", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Kazan",
  d:"Kazan merkezli olarak Moskova Knezliği'ne karşı mücadeleyi sürdüren Uluğ Muhammed Han'ın 1439'da düzenlediği ilk sefer sonuç vermedi. Han, Altın Orda'yı yeniden canlandırma hedefiyle Moskova'nın etrafında toplanan Slav beylerinin kendisini hükümdar tanımasını istiyordu; bu hedef beş yıl sonraki ikinci seferin gerekçesi oldu.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1445-07-07", b:"SUZDAL SAVAŞI — Büyük Knez II. Vasili esir düştü", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","savas","toprak-kazanc"],
  yer_id:"Suzdal",
  d:"1444 sonbaharında açılan ikinci Moskova seferi 7 Temmuz 1445'te Suzdal civarındaki meydan savaşıyla sonuçlandı: Ruslar yeniden yenildi, Büyük Knez Vasili ve kardeşi Mihail esir düştü. Vasili, o çağ için çok büyük bir yekûn tutan 200.000 ruble fidye ödemek zorunda kaldı. Kazan Hanlığı bu tarihten itibaren bağımsız bir devlet statüsüne kavuşmuş sayılır.",
  kaynak:"kazan-hanligi (TDV — 'Kazan kuvvetleriyle Moskova ordusu arasında Suzdal şehri civarında vuku bulan meydan savaşı')" },

{ t:"1445-08-01", b:"Kāsım Hanlığı'nın kurulmasına Moskova rıza gösterdi", tur:"kurulus", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","antlasma","hanedan"],
  yer_id:"Kasimov",
  d:"Suzdal yenilgisinin şartlarından biri, Uluğ Muhammed'in oğlu Kāsım'a Oka nehri üzerinde Mişerler'le meskûn Hankirman (Kasımov) şehrinin merkez yapılarak bir hanlık kurulmasına izin verilmesiydi. Böylece Moskova'nın hemen yanı başında Cengiz soyundan bir hanlık doğdu. Kāsım Hanlığı yirmi yıl sonra Kazan'ın en tehlikeli rakibine dönüşecekti.",
  kaynak:"kazan-hanligi (TDV) — künye: data/devletler.js kasim (1452-1681)" },

{ t:"1445-09-01", b:"Mahmud (Mahmutek) tahta çıktı — hanlığın kuruluş süreci tamamlandı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["hanedan","hukumdar","kurulus"],
  yer_id:"Kazan",
  d:"Uluğ Muhammed'in vefatının ardından Belev ve Suzdal savaşlarında kahramanlık gösteren büyük oğlu Mahmud tahta geçti; Rus kaynaklarında Mahmutek diye anılır. Kazan Hanlığı'nın kuruluşunu 1437 yerine bu tarihe koyan ikinci bir tarihyazımı görüşü vardır. Mahmud'un on yedi yıllık devri, hanlığın barış içinde geçen tek uzun dönemidir.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1462-01-01", b:"Halil Han tahta çıktı", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar"],
  yer_id:"Kazan",
  d:"Mahmud Han'ın ölümü üzerine yerine oğlu Halil geçti. Saltanatı beş yıl sürdü ve 1467'de kardeşi İbrâhim tarafından tahttan indirildi. Bu indirme, hanlığın sonuna kadar sürecek taht kavgalarının başlangıcıdır.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1467-01-01", b:"İbrâhim Han kardeşini indirdi — Kazan'da taht kavgaları başladı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar","kriz"],
  yer_id:"Kazan",
  d:"İbrâhim'in kardeşi Halil'i tahttan indirmesiyle Kazan Hanlığı'nda taht kavgaları başladı. Muhalif grup, Kāsım Hanlığı'nın kurucusu ve İbrâhim'in üvey babası olan Kāsım'ın adaylığını öne sürdü. Kaynak, hanlığın 115 yılda on dokuz han değişimi yaşadığını ve bunun devletin felâketini hızlandıran iki sebepten biri olduğunu kaydeder.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1467-10-01", b:"Kāsım'ın ve III. İvan'ın Kazan hücumu püskürtüldü", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","hanedan"],
  yer_id:"Kazan",
  d:"Kazan tahtına geçmeyi planlayan Kāsım, dağınık Rus knezliklerini Moskova etrafında toplayan III. İvan'dan yardım istedi; İvan bu isteği memnuniyetle karşıladı. Ekim 1467'de Kāsım'ın kuvvetleri ile Rus birlikleri Kazan'a hücum ettiyse de geri püskürtüldü. Bu müdahale, iki hanlığı birbirine düşman etti ve Kazan'ın Rus merkezine yakın güçlü dayanağını kaybetmesine yol açtı.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1468-01-01", b:"Nijniy Novgorod bozgunu — İbrâhim Rus baskınını ağır yenilgiyle cevapladı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Nijniy Novgorod",
  d:"Rus kuvvetleri, İbrâhim'in Kazan'da bulunmadığı bir sırada âni bir baskın düzenledi. Kuvvetlerini toplayan İbrâhim, Nijni Novgorod'a çekilen Rusları ağır bir yenilgiye uğrattı ve çok sayıda esirle Kazan'a döndü. Ancak III. İvan'ın karşı yürüyüşü üzerine esirleri serbest bırakıp barış istemek zorunda kaldı; bu döngü İbrâhim'in ölümüne kadar sürdü.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1487-07-09", b:"KAZAN İLK DEFA RUS İŞGALİNE UĞRADI — başşehir düştü", tur:"isgal", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal","toprak-kaybi"],
  yer_id:"Kazan",
  d:"9 Temmuz 1487'de başşehir Kazan Ruslar tarafından ilk defa işgal edildi. Moskova hanlığı tamamen ortadan kaldıracak güçte olmadığı ya da onu Kāsım Hanlığı gibi tâbi bir devlet olarak tutmayı tercih ettiği için III. İvan, Kazan tahtına Muhammed Emin'i çıkardı. Kazan Hanlığı'nın altmış beş yıl sürecek Moskova nüfuzu devri bu tarihte başlar.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1487-07-10", b:"Han seçme hakkı Moskova'nın onayına bağlandı", tur:"antlasma", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","antlasma","idari"],
  yer_id:"Kazan",
  d:"İşgalin ardından Kazan Hanlığı ile Moskova arasında karşılıklı münasebetleri tayin eden bir anlaşma yapıldı: Kazanlılar Ruslara karşı savaşmayacak ve Moskova büyük knezinin muvafakati olmadan kendilerine han seçmeyeceklerdi. Bu madde, bir hanlığın hükümranlığını doğrudan sınırlayan ilk yazılı taahhüttür ve Kazan'ın iç siyasetini bundan böyle Moskova belirler.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1502-01-02", b:"Muhammed Emin üçüncü defa Kazan tahtına çıkarıldı", tur:"hukumdar", onem:2, dunya:1, kapsam:"dis",
  etiket:["hanedan","hukumdar"],
  yer_id:"Kazan",
  d:"Moskova'nın adayı Muhammed Emin 1502'de üçüncü kez Kazan tahtına oturtuldu. Bu, III. İvan'ın Kazan ve Kāsım hanlarına ödenen yıllık vergiyi kesmesinin ve tahta kendi adayını seçtirmeyi başarmasının en açık örneğidir.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1505-01-01", b:"Muhammed Emin beklenmedik biçimde Moskova'ya karşı sefer açtı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","siyaset"],
  yer_id:"Kazan",
  d:"Moskova'nın kendi eliyle tahta oturttuğu Muhammed Emin, 1505'te hiç beklenmedik bir şekilde Moskova'ya karşı sefer açtı. Kukla sanılan bir hanın bağımsız hareket edebildiğini gösteren bu dönüş, Kazan'da Rus nüfuzunun hiçbir zaman tam olmadığının kanıtıdır.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1506-05-22", b:"Rus ordusu Kazan önünde bozguna uğradı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Kazan",
  d:"22 Mayıs 1506'da Rus ordusu Kazan kuvvetleri karşısında ağır bir yenilgi aldı. Bir ay sonra 22 Haziran'da ikinci bir Rus ordusu daha mağlûp edildi. Bu iki yenilgi, Moskova'nın Kazan'ı 1552'ye kadar askerî yoldan alamayacağını gösterdi.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1506-06-22", b:"İkinci Rus ordusu da mağlûp edildi", tur:"savas", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Kazan",
  d:"Mayıs bozgununun ardından gönderilen ikinci Rus ordusu 22 Haziran 1506'da yine yenildi. Muhammed Emin'in bu iki zaferi hanlığa yirmi yıla yakın bir nefes aldırdı; Rus baskısı ancak onun ölümünden sonra tekrar arttı.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1507-01-01", b:"Kazan'da Türkçe bir tefsir kitabı yazıldı", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","din","edebiyat"],
  yer_id:"Kazan",
  d:"1507 yılında Kazan'da Türkçe bir tefsir kitabının kaleme alınması, kaynağın hanlıkta İslâm dininin ve şehir hayatının erken geliştiğine örnek olarak gösterdiği belgedir. Aynı bağlamda İdil Bulgar Devleti'nden kalan kanalizasyon sistemi ve hamamlar da zikredilir; Kazan bir bozkır ordugâhı değil, yerleşik bir şehir kültürüdür.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1519-01-01", b:"Şah Ali tahta geçti — Moskova'nın adayı geri döndü", tur:"hukumdar", onem:2, dunya:1, kapsam:"dis",
  etiket:["hanedan","hukumdar"],
  yer_id:"Kazan",
  d:"Muhammed Emin'in ölümünden sonra Moskova'nın adayı Şah Ali Kazan tahtına geçti. Onun hanlığı iki yıl sürdü; Kazan'daki muhalifleri Kırım hanını yardıma çağırınca taht el değiştirdi ve hanlık Moskova ile Bahçesaray arasındaki çekişmenin sahasına dönüştü.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1523-01-02", b:"Kırım-Kazan iş birliği sona erdi", tur:"siyaset", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","siyaset","ittifak"],
  yer_id:"Kazan",
  d:"1523'te Kırım tahtına geçen Saâdet Giray, Moskova ile dost geçinme siyaseti izlediği için Kırım-Kazan iş birliği bitti. Kazan hanı Sâhib Giray, Moskova'ya tek başına karşı duramayacağını bilerek Osmanlılardan yardım yolları aradı, fakat bundan pek bir sonuç çıkmadı. Kazan'ın yalnızlaşması bu tarihte başlar.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1524-01-01", b:"Rus kuşatması sonuçsuz kaldı", tur:"savas", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri","kusatma"],
  yer_id:"Kazan",
  d:"1524'te Kazan yeniden Ruslar tarafından kuşatıldı; muhasaradan bir sonuç elde edilemedi. Şehrin bu tarihte hâlâ ele geçirilememesi, 1552'deki büyük seferin niçin 150 top ve İngiliz mühendisi gerektirdiğini açıklar.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1530-01-01", b:"İkinci kuşatma Kazan'ı vergiye bağladı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","antlasma","ekonomi"],
  yer_id:"Kazan",
  d:"1530'da Ruslar Kazan'ı yeniden kuşattı ve bu defa hanlık anlaşmak zorunda kaldı. Rus nüfuzu tekrar arttığı gibi Kazanlılar her yıl çara belirli bir vergi ödemeyi de kabul ettiler. Askerî üstünlük hâlâ kesin değildi, ama malî tâbiiyet bu tarihte kuruldu.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1539-01-01", b:"Muhammed Yâr'ın Tuhfe-i Merdân'ı yazıldı", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","edebiyat"],
  yer_id:"Kazan",
  d:"Kazan Hanlığı devrinin tanınmış şairi Muhammed Yâr 1539'da Tuhfe-i Merdân adlı eserini kaleme aldı. Aynı dönemde Alpamşa, Çora Batır ve Edige destanları halk arasında çok yaygındı; hanlığın son yıllarındaki siyasî çöküş, edebî üretimin durduğu anlamına gelmiyordu.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1542-01-01", b:"Muhammed Yâr'ın Nûr-i Sudûr'u tamamlandı", tur:"kultur", onem:2, dunya:1, kapsam:"ic",
  etiket:["kultur","edebiyat"],
  yer_id:"Kazan",
  d:"Şair Muhammed Yâr 1542'de ikinci eseri Nûr-i Sudûr'u yazdı. Kazan Hanlığı devrinden kalan yazılı malzeme azdır; devrin edebî ve idarî dili hakkındaki en önemli belge, Tataristan Devlet Müzesi'nde saklanan Sâhib Giray Han Yarlığı'dır.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1548-01-01", b:"Çocuk han Ütemiş Giray tahta çıkarıldı, idare Süyünbike'ye kaldı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar","kriz"],
  yer_id:"Kazan",
  d:"Hanlığın son yıllarında iktidarı elinde tutan zümre, barışı koruyabilmek için çocuk yaştaki Ütemiş Giray'ı han ilân etti; fiilî idare annesi Süyünbike'nin elindeydi. Kaynağa göre bu zümre han seçiminde Moskova'nın arzusuna boyun eğmek ve topraktan fedakârlık etmek gibi ağır şartlara katlanmak zorunda kalmıştı.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1550-01-01", b:"Süyünbike Kazan'da bir kütüphane kurdu", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","bilim"],
  yer_id:"Kazan",
  d:"XVI. yüzyıl ortalarında Safâ Giray'ın karısı Süyünbike'nin bir kütüphane kurması, kaynağın Kazan'daki kültür seviyesinin yüksekliğine delil olarak gösterdiği olaydır. Kesin yılı verilmemiştir; hanlığın son on yılına tarihlenir. Kütüphane, 1552 istilâsında yağmalanan mimarî ve sanat mirasının bir parçasıdır.",
  kaynak:"kazan-hanligi (TDV) — yıl YAKLAŞIK, kaynak 'XVI. yüzyıl ortaları' diyor" },

{ t:"1551-01-01", b:"Süyünbike ile oğlu Ütemiş Giray Moskova'ya teslim edildi", tur:"kriz", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","kriz","hanedan"],
  yer_id:"Kazan",
  d:"Kazan'daki iktidar zümresi, barışın korunması için çocuk han Ütemiş Giray ile annesi Süyünbike'yi Moskova'ya teslim etmek zorunda kaldı. Bir hanedanın kendi hanını rehin vermesi, hanlığın siyasî iradesinin fiilen bittiğinin işaretidir; Kazan Tatar hâfızasında Süyünbike bu teslimle millî bir sembol hâline gelmiştir.",
  kaynak:"kazan-hanligi (TDV)" },

{ t:"1551-06-01", b:"Sviyajsk kalesi kuruldu — Kazan'ın karşı yakasına Rus üssü", tur:"idari", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","idari","toprak-kaybi"],
  yer_id:"Sviyajsk",
  d:"IV. İvan, Kazan'ın batısında İdil ile Sviyaga'nın birleştiği noktada bir kale kurdurarak seferin lojistik üssünü hanlığın kapısına yerleştirdi. Kalenin kurulmasıyla Kazan'ın dağ tarafı (yani sağ yaka) merkezden koptu ve ertesi yılki kuşatma bu üsten beslendi. Kale bugün de aynı adla ayakta olan bir ada yerleşimidir.",
  kaynak:"bulunamadı — TDV kazan-hanligi maddesi Sviyajsk'ı adıyla anmıyor; dayanak standart akademik kaynak (Kurat, Türkiye ve İdil Boyu), ay YAKLAŞIK" },

{ t:"1552-01-15", b:"Yâdigâr Han Kazan tahtına davet edildi — son direniş", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["hanedan","hukumdar","isyan"],
  yer_id:"Kazan",
  d:"Astarhan Hanı Kāsım'ın oğlu Yâdigâr, 1552'de Kazan tahtına davet edildi. Gelişiyle halkın güveni arttı, Kazan'ın dağ tarafı Ruslara karşı ayaklanıp tekrar merkezle birleşti ve Ruslar arasında panik başladı. Moskova'ya karşı sefer açan Kırım orduları Tula'ya kadar ilerledi; bu hareketler IV. İvan'ın büyük Kazan seferinin doğrudan sebebi oldu.",
  kaynak:"kazan-hanligi (TDV) — gün YAKLAŞIK, kaynak yalnız yıl veriyor" },

{ t:"1552-08-20", b:"IV. İvan 150.000 asker ve 150 topla Kazan'a ulaştı", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","kusatma","teknoloji"],
  yer_id:"Kazan",
  d:"IV. İvan, 150.000 asker, 150 top ve İngiliz mühendisi Butler'in kumandasındaki istihkâm kıtasıyla Kazan üzerine yürüdü ve ordu 20 Ağustos 1552'de şehrin önüne vardı. Kuşatma 23 Ağustos'ta başladı. Lağım ve topçu tekniğinin bozkır hanlıklarına karşı ilk kez bu ölçekte kullanılması, sonraki bütün Rus doğu genişlemesinin şablonunu kurdu.",
  kaynak:"kazan-hanligi (TDV — '20 Ağustos 1552'de Kazan'a ulaşarak 23 Ağustos'ta şehri kuşattı')" },

{ t:"1552-10-15", b:"Kazan'ın düşüşü — Orta İdil'de dokuz asırlık Türk hâkimiyeti bitti", tur:"son", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","isgal","son","toprak-kaybi"],
  yer_id:"Kazan",
  d:"İki ay kadar süren kanlı çarpışmaların ardından 15 Ekim 1552'de Kazan düştü ve Orta İdil sahasında milâttan sonra VI. yüzyıldan beri süren Türk hâkimiyeti sona erdi. Şehrin sanat, hat ve yapı eserleri yağma edildi; büyük çoğunluğunun izi bile kalmadı. ⚠️ kronoloji_rusya.js aynı olayı 1552-10-02 diye tarihliyor; TDV 15 Ekim diyor, fark takvim/kaynak ayrılığıdır ve koordinatöre bildirilmiştir.",
  kaynak:"kazan-hanligi (TDV — '15 Ekim 1552'de Kazan düştü')" },

{ t:"1552-10-16", b:"Kazan direnişi şehrin düşüşünden sonra da sürdü", tur:"isyan", onem:3, dunya:2, kapsam:"ic",
  etiket:["askeri","isyan","sosyal"],
  yer_id:"Kazan",
  d:"Kaynak açıkça kaydeder: Kazan 1552'de işgal edildiği hâlde ülkenin fiiliyatta ele geçirilmesi ve kitle hâlindeki millî hareketin bastırılması XVI. yüzyılın sonuna kadar sürmüştür. Yani bir başşehrin düşüşü ile bir ülkenin fethi arasında kırk yılı aşan bir fark vardır.",
  kaynak:"kazan-hanligi (TDV)" },

// === B) ASTARHAN (EJDERHAN) HANLIĞI (1466-1556) ============================
// TDV astarhan-hanligi. ⚠️ devletler.js'in gösterdiği `ejderhan-hanligi`
// slug'ı bir madde DEĞİL, yönlendirme kabuğudur (ölçüldü, dosya başına bak).

{ t:"1466-01-02", b:"Kāsım Han'ın saltanatı başladı — hanlığın en uzun huzur devri", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hanedan","hukumdar","kurulus"],
  yer_id:"Astrahan",
  d:"Altın Orda hükümdarlarından Küçük Muhammed Han'ın torunu Kāsım Han, Hazar'ın kuzey sahilindeki Astarhan şehrini merkez yaparak hanlığı kurdu ve 1490'a kadar hüküm sürdü. Kurulduğu bölgenin ticarî öneminden ötürü hanlık kısa sürede gelişti. Kāsım ve kardeşi Abdülkerim'in dönemleri, hanlığın sulh ve sükûn içinde yaşadığı en uzun devri meydana getirir.",
  kaynak:"astarhan-hanligi (TDV, madde: astarhan-hanligi — içerik okundu, 2026-08-22)" },

{ t:"1490-01-01", b:"Abdülkerim Han tahta çıktı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar"],
  yer_id:"Astrahan",
  d:"Kāsım Han'ın ardından kardeşi Abdülkerim Han 1504'e kadar hüküm sürdü. Kardeşinin devriyle birlikte bu on dört yıl, hanlığın dışarıdan müdahale görmeden yaşadığı son dönemdir; 1502'de Saray'ın yıkılmasıyla dengeler tamamen değişecektir.",
  kaynak:"astarhan-hanligi (TDV)" },

{ t:"1502-06-01", b:"Saray'ın yıkılışından sonra Astarhan Kırım nüfuzuna girdi", tur:"siyaset", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","diplomasi","kriz"],
  yer_id:"Astrahan",
  d:"Osmanlı Devleti'nden top ve silâh alan Kırım Hanı Mengli Giray'ın Saray şehrini tahrip etmesinden sonra Saray Hanlığı'nın toprakları Kırım ile Nogaylar arasında paylaşıldı. Astarhan bu olaydan sonra yirmi yıla yakın bir süre Kırım Hanlığı'nın nüfuzu altına girdi. Hanlığın kendi hanları, Kırım'ın müdahaleleri yüzünden ne başarılı olabildi ne de iç huzursuzluğu önleyebildi.",
  kaynak:"astarhan-hanligi (TDV) — gün YAKLAŞIK; olayın kendisi kronoloji_altinorda.js ve kronoloji_kirim.js'te 1502-01-01 tarihiyle ZATEN var, bu madde onun ASTARHAN'A ETKİSİDİR" },

{ t:"1554-01-01", b:"Derviş Han Rus desteğiyle Astarhan tahtına oturtuldu", tur:"hukumdar", onem:4, dunya:2, kapsam:"dis",
  etiket:["hanedan","hukumdar","siyaset"],
  yer_id:"Astrahan",
  d:"Kazan'ı yıkma emeline 1552'de ulaşan Rus Çarı IV. İvan, daha önce kendisine sığınmış olan Şeyh Haydar Han'ın oğlu Derviş Han'ı Astarhan hükümdarı yaptı. Kukla han yoluyla ilhak, Kazan'da denenip başarısız olan yöntemin burada tekrarıdır; iki yıl sonra hanlık doğrudan işgal edilecektir.",
  kaynak:"astarhan-hanligi (TDV) — yıl YAKLAŞIK, kaynak sırayı verip günü vermiyor" },

{ t:"1556-06-02", b:"Astarhan hanedanı Buhara'ya sığındı — Canoğulları hânedanı doğdu", tur:"hanedan", onem:5, dunya:3, kapsam:"dis",
  etiket:["hanedan","siyaset","goc"],
  yer_id:"Buhara",
  d:"Rus işgalinden sonra Astarhan hanları sülâlesi Buhara'ya sığındı ve orada varlığını sürdürdü. Bu sülâle, 1599'da Şeybânîlerin yerini alarak Buhara'da Canoğulları (Astrahanlılar/Astarhanîler) adıyla iktidara gelecektir. Yani Astarhan Hanlığı siyaseten yıkılmış, hânedan olarak Mâverâünnehir'de devam etmiştir.",
  kaynak:"astarhan-hanligi (TDV — 'sığındıkları Buhara'da varlıklarını sürdürmüşlerdir, bk. BUHARA, CANOĞULLARI'); hanedanın 1599'da iktidara gelişi kronoloji_ozbek.js'te ZATEN var, tekrarlanmadı" },

{ t:"1557-01-01", b:"Hac yolu kapandı — Orta Asya müslümanları İstanbul'a elçi gönderdi", tur:"din", onem:4, dunya:3, kapsam:"dis",
  etiket:["din","diplomasi","ticaret"],
  yer_id:"Astrahan",
  d:"Rusların Astarhan'a kadar inmesi, Orta Asya müslümanlarının Hazar'ın kuzeyinden İstanbul ile münasebetlerini kesti ve hac için Mekke'ye gitmelerini tamamen imkânsız hâle getirdi. Müslüman halk İstanbul'a mektup ve elçiler göndererek acil yardım istedi. Bu şikâyetler, Osmanlı Devleti'ni Don-Volga kanalı projesine ve 1569 Astarhan seferine sevk eden doğrudan sebeptir.",
  kaynak:"astarhan-hanligi (TDV) — yıl YAKLAŞIK, kaynak işgal sonrası diyor, gün vermiyor" },

{ t:"1569-04-01", b:"Don-Volga kanalı projesi arazide çöktü", tur:"kesif", onem:3, dunya:3, kapsam:"dis",
  etiket:["teknoloji","askeri","diplomasi"],
  yer_id:"Tsaritsyn",
  d:"Kefe Beyi Kasım Bey kumandasındaki Türk kuvvetleri ve teknisyenleri 1569 ilkbaharında Don-Volga yöresine giderek kanal kazısına başladı; arazi tahmin edilenden çok daha engebeli çıktı. Kırım hanının merkezden gelen emre rağmen hiçbir yardımda bulunmaması işi büsbütün çıkmaza soktu ve Kasım Bey Kırım'a döndü. Osmanlı hükümeti bölgenin kanal için elverişsiz olduğu kanaatine vardı; proje daha uygun bir yer ve zamana ertelendi. ⚠️ Seferin kendisi kronoloji_rusya.js ve kronoloji_ozbek.js'te var; bu madde MÜHENDİSLİK tarafıdır.",
  kaynak:"astarhan-hanligi (TDV)" },

{ t:"1578-01-01", b:"III. Murad'ın Rus çarı nezdindeki teşebbüsleri sonuç vermedi", tur:"diplomasi", onem:2, dunya:2, kapsam:"dis",
  etiket:["diplomasi","siyaset"],
  yer_id:"Astrahan",
  d:"Kanal projesinin ertelenmesinden sonra III. Murad zamanında Rus çarı nezdinde yapılan diplomatik teşebbüsler de olumlu sonuç vermedi. Böylece Astarhan meselesi Osmanlı için askerî bir hedef olmaktan çıkıp kalıcı bir kayba dönüştü ve Hazar'ın kuzey kapısı bir daha açılmadı.",
  kaynak:"astarhan-hanligi (TDV) — yıl YAKLAŞIK, kaynak yalnız 'III. Murad zamanında' diyor" },

// === C) NOGAY ORDASI (1440-1783) ===========================================
// TDV nogaylar. Merkez: Nogay beyinin kışlık ikametgâhı Saraycık —
// ⚠️ Saraycık'ın yerleşim kaydı YOK, o maddeler yer_id:"" bırakıldı.

{ t:"1420-06-01", b:"Edige'nin ölümü — oğulları Mangıt beyliğini kurdu", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["hanedan","kurulus","siyaset"],
  yer_id:"",
  d:"Cuci ulusunda söz sahibi beylerden Edige'nin 823 (1420) yılında ölümünden sonra oğulları Deştikıpçak'taki siyasî faaliyetlerde yer aldılar ve bazı hanların yanında emirlik yürüttüler. Nogay beylerinin atası sayılan Edige, Mangıt boyundandı; Nogay ordasının yönetim kadrosunu bu boy teşkil eder, halk tabakasının esas unsuru ise Kıpçak Türkleridir. ⚠️ Olayın Altın Orda tarafı kronoloji_altinorda.js'te ZATEN var; bu madde Nogay ordasının KURULUŞ tarafıdır.",
  kaynak:"nogaylar (TDV, madde: nogaylar — içerik okundu, 2026-08-22)" },

{ t:"1500-01-01", b:"Mûsâ Mirza Nogayların beyi olarak anılmaya başlandı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar"],
  yer_id:"",
  d:"XVI. yüzyılın başında Nogayların beyi olarak Mûsâ Mirza'nın adı geçer. Bu yüzyılın ilk yarısında Nogay ordası, Kırım Hanlığı ve diğer Türk hanlıkları ile ilişkilerinde önemli bir yere sahipti. Orda İdil'in sol kıyısından İrtiş kollarına, doğuda Emba üzerinden Aral'a kadar uzanıyordu.",
  kaynak:"nogaylar (TDV) — yıl YAKLAŞIK, kaynak 'XVI. yüzyılın başında' diyor" },

{ t:"1554-01-01", b:"Yûsuf Mirza öldürüldü — orda Osmanlı ve Moskova taraftarı diye ikiye bölündü", tur:"bolunme", onem:5, dunya:2, kapsam:"ic",
  etiket:["siyaset","kriz","hanedan"],
  yer_id:"",
  d:"Osmanlı taraftarı Yûsuf Mirza ile Moskova taraftarı kardeşi İsmâil Mirza arasındaki mücadele Yûsuf'un öldürülmesiyle sonuçlandı ve yüzyılın ortasında orda bölünmeye uğradı. Bir bozkır konfederasyonunun iç kavgası, iki büyük devletin dış siyaseti hâline gelmişti; bölünme bir daha onarılamadı.",
  kaynak:"nogaylar (TDV) — yıl YAKLAŞIK, kaynak 'yüzyılın ortasında' diyor" },

{ t:"1557-01-01", b:"KÜÇÜK NOGAY ORDASI kuruldu — Kadı Mirza İdil'i geçti", tur:"kurulus", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","kurulus","goc"],
  yer_id:"Kuban Nogay bozkırı",
  d:"Nogay uruklarının bir bölümü İsmâil Mirza'nın yanından ayrılarak Kadı (Kazi) Mirza'nın idaresinde 964-965 (1557-1558) yıllarında İdil nehrini geçti. Kırım hanından himaye gören bu grup, Kabarda bölgesiyle Azak denizi arasındaki topraklara yerleştirildi ve burada oluşturulan ordaya Küçük Nogay adı verildi. Böylece tek bir orda yerine iki ayrı Nogay siyasî gövdesi doğdu.",
  kaynak:"nogaylar (TDV)" },

{ t:"1560-01-01", b:"BUCAK ORDASI kuruldu — Nogaylar Basarabya'ya taşındı", tur:"kurulus", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","kurulus","goc"],
  yer_id:"Akkirman",
  d:"XVI. yüzyıl içinde Nogaylardan bir grup tarafından, adını Basarabya'nın güneyindeki Bucak'tan alan yeni bir orda kuruldu; Ruslar buna Belgorod ordası adını verdi. Ayrıca Aral çevresinde Altavul (Altıulı) ordası bulunuyordu. Nogay adının Tuna ağzından Aral'a kadar dağılması bu parçalanmanın sonucudur.",
  kaynak:"nogaylar (TDV) — yıl YAKLAŞIK, kaynak 'XVI. yüzyıl içinde' diyor" },

{ t:"1563-01-01", b:"İsmâil ve Tin Ahmed Mirza devrinde Rus baskısı sürdü", tur:"siyaset", onem:2, dunya:1, kapsam:"dis",
  etiket:["siyaset","diplomasi"],
  yer_id:"",
  d:"Büyük Nogay ordası üzerindeki yoğun Moskova baskısı İsmâil Mirza ve Tin Ahmed Mirza zamanında (1563-1578) da sürdü. Rusya bu devirlerde Nogaylarla ilişkilerini görünüşte dostluk çerçevesinde tutma politikası izliyordu; oysa aynı yüzyıla ait Rus belgeleri Moskova'nın düşmanları sıralanırken hem Büyük hem Küçük Nogay ordasını sayıyordu.",
  kaynak:"nogaylar (TDV)" },

{ t:"1569-06-01", b:"Nogaylar Astarhan seferini istediler ama yardım etmediler", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","askeri","siyaset"],
  yer_id:"Astrahan",
  d:"977 (1569) yılındaki Astarhan seferine Osmanlı Devleti'ni yönlendirenler arasında Nogaylar da vardı; fakat sefer sırasında herhangi bir yardımda bulunmadılar. Bir seferi isteyip desteklememek, Nogay ordasının bölünmüşlüğünün ve hiçbir tarafa tam bağlanamayışının en somut örneğidir. ⚠️ Seferin kendisi kronoloji_rusya.js ve kronoloji_ozbek.js'te ZATEN var.",
  kaynak:"nogaylar (TDV)" },

{ t:"1578-01-02", b:"Urus Mirza Rus baskısına direndi", tur:"hukumdar", onem:3, dunya:1, kapsam:"dis",
  etiket:["hanedan","hukumdar","askeri"],
  yer_id:"",
  d:"Büyük Nogay ordasının beyi Urus Mirza (1578-1590) Rus baskısına karşı direndiyse de Rus yönetiminin etkisi onun zamanında da sürdü. Bu dönemde Büyük Nogay ordasından bazı gruplar zaman zaman Rus topraklarına ganimet amaçlı akınlar düzenlediler.",
  kaynak:"nogaylar (TDV)" },

{ t:"1586-01-01", b:"Moskova, Nogayları kuşatmak için Samara ve Ufa'yı kurdu", tur:"idari", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","idari","toprak-kaybi"],
  yer_id:"Samara",
  d:"İdil dolaylarında güvenliği sağlamak ve Büyük Nogayları etkisiz hâle getirmek için Moskova Çarlığı 1586'da Sâmerrâ (Samara) ve Ufa şehirlerini kurdu. Şehir kurmak, bozkır konfederasyonlarına karşı Rusya'nın bulduğu asıl silâhtı: her yeni kale bir otlak yolunu kesiyordu.",
  kaynak:"nogaylar (TDV)" },

{ t:"1589-01-01", b:"Tsaritsyn kalesi kuruldu", tur:"idari", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","idari"],
  yer_id:"Tsaritsyn",
  d:"Samara ve Ufa'nın ardından 1589'da Tsaritsin kuruldu. Bu hat, Astarhan'ı güvenlik altında tutmayı ve Nogayların İdil'i geçişini kontrol etmeyi hedefliyordu.",
  kaynak:"nogaylar (TDV)" },

{ t:"1590-01-01", b:"Saratov kalesi kuruldu — İdil hattı tamamlandı", tur:"idari", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","idari"],
  yer_id:"Saratov",
  d:"1590'da Saratov'un kurulmasıyla Samara-Ufa-Tsaritsin-Saratov hattı tamamlandı. Dört şehir beş yıl içinde kuruldu ve Büyük Nogay ordasının hareket sahasını kalıcı biçimde daralttı.",
  kaynak:"nogaylar (TDV)" },

{ t:"1600-01-01", b:"İşterek Mirza Kırım'ı atlayıp doğrudan Osmanlı ile görüşmek istedi", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis",
  etiket:["diplomasi","siyaset"],
  yer_id:"",
  d:"XVII. yüzyılın başında Büyük Nogay ordasının beyi olan İşterek Mirza, Kırım Hanlığı'nın aracılığı olmadan Osmanlı Devleti ile görüşmeler yapmak ve Rusya ile İran'a karşı kendi çıkarına bir siyaset izlemek istedi; bunda başarılı olamadı. Nogayların kendi adına bir dış siyaset kurma çabası bu denemeyle bitmiştir.",
  kaynak:"nogaylar (TDV) — yıl YAKLAŞIK, kaynak 'XVII. yüzyılın başında' diyor" },

{ t:"1630-01-01", b:"Kalmuk istilâsı Nogayları böldü", tur:"kriz", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","goc","kriz"],
  yer_id:"Rın kumulları (Volga-Yayık arası)",
  d:"XVII. yüzyılda Nogayların yaşadığı en büyük sıkıntı Kalmuk istilâsı oldu. Ağır baskı sonucu Nogaylardan bir bölümü Osmanlı-Kırım koruması altındaki alana kaçtı, bir bölümü de Kalmukların idaresi altına girdi. Doğudan gelen Kalmuk göçü ile batıdan gelen Rus kaleleri arasında sıkışan orda, bu tarihten sonra bir daha toparlanamadı.",
  kaynak:"nogaylar (TDV) — yıl YAKLAŞIK, kaynak 'XVII. yüzyılda' diyor; Kalmuk göçünün kendi tarihi bu dosyanın G bölümündedir" },

{ t:"1644-01-01", b:"Kabarda seferi — Kafkas ve Nogay güçleri Kalmukları yendi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","ittifak"],
  yer_id:"Stavropol–Kuma bozkırı",
  d:"1644'te Kalmuklar, Nogayları kendi yanlarına çekmek ve onları eski topraklarına döndürmek için Kabarda bölgesine sefer yaptılar. Kafkas topluluklarıyla Nogayların birleşik güçleri Kalmukları yenilgiye uğrattı. Ancak Kalmukların tehdit ve baskıları sürdü; aynı yıllarda Rus hükümeti bozkırın Nogaylardan arındırılması planını uygulamaya koydu.",
  kaynak:"nogaylar (TDV)" },

{ t:"1700-01-01", b:"Nogaylar dört ayrı ordaya bölünmüş hâlde Kırım'a bağlandı", tur:"bolunme", onem:3, dunya:1, kapsam:"dis",
  etiket:["siyaset","idari"],
  yer_id:"Kuban Nogay bozkırı",
  d:"XVIII. yüzyıl başlarında Nogaylar daha da parçalandı: bir kısmı Kırım yarımadasında yaşarken Yedisan, Camboyluk, Bucak ve Kuban Nogayları Kırım Hanlığı'nın hâkimiyeti altındaydı. Osmanlı ile Rusya arasındaki Nogay meselesi bundan sonra Kırım meselesine bağlı olarak yürüdü.",
  kaynak:"nogaylar (TDV) — yıl YAKLAŞIK, kaynak 'XVIII. yüzyıl başlarında' diyor" },

{ t:"1783-07-01", b:"SUVAROV KIYIMI — Nogay direnişi ezildi", tur:"son", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isyan","sosyal"],
  yer_id:"Kuban Nogay bozkırı",
  d:"Kırım'ın Rusya denetimine sokulmasından sonra Nogaylar kendilerine yapılan muameleye tepki gösterdiler; 1783'te General Suvarov ve Leontyev kumandasındaki kuvvetler onları ağır bir yenilgiye ve kıyıma uğrattı. Nogay ordası siyasî bir varlık olarak bu tarihte sona erer; bundan sonrası göç tarihidir.",
  kaynak:"nogaylar (TDV) — ay YAKLAŞIK, kaynak yalnız yıl veriyor" },

{ t:"1850-01-01", b:"Kuban ve Stavropol Nogaylarının Osmanlı topraklarına göçü başladı", tur:"sosyal", onem:4, dunya:2, kapsam:"dis",
  etiket:["sosyal","goc"],
  yer_id:"Stavropol–Kuma bozkırı",
  d:"XIX. yüzyılda Nogayların hayatını belirleyen en önemli olay göçtür ve Rus Çarlığı bunu özellikle teşvik etmiştir; sebepleri arasında Nogayların denetiminin güçlüğü ve verimli Nogay arazilerine el konulması sayılır. 1850'li yılların sonunda önce Kuban ve Stavropol Nogayları, ardından Tavrida (Kırım) Nogayları göç etmeye başladı.",
  kaynak:"nogaylar (TDV) — yıl YAKLAŞIK, kaynak '1850'li yılların sonu' diyor" },

{ t:"1865-01-01", b:"Kitlesel göç sona erdi — Nogaylar Anadolu'ya iskân edildi", tur:"sosyal", onem:4, dunya:2, kapsam:"dis",
  etiket:["sosyal","goc"],
  yer_id:"",
  d:"1865'e kadar kitleler hâlinde, sonra küçük kafilelerle devam eden göçle Nogaylar Anadolu'da Çukurova, Ankara, Konya, Kırşehir ve Sivas gibi bölgelere iskân edildiler. Bir bozkır konfederasyonunun nüfusunun büyük kısmı böylece Osmanlı toprağına taşındı; bugün Türkiye'deki Nogay yerleşimleri bu göçün ürünüdür.",
  kaynak:"nogaylar (TDV)" },

{ t:"1922-04-01", b:"Nogay kurultayı Açikulak'ta toplandı — Dağıstan'da kalma kararı", tur:"siyaset", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","sosyal"],
  yer_id:"",
  d:"Nogayların birinci kurultayı 1922'de Açikulak'ta yapıldı; aynı yılın Nisan ayındaki bir başka toplantıda yetkililer hangi bölgede kalmak istediklerini sordu ve Nogay temsilcileri Dağıstan topraklarında kalmayı tercih etti. Toplantıda kısmî özerklik vaadinde bulunuldu, ancak bu söz yerine getirilmedi.",
  kaynak:"nogaylar (TDV)" },

// === D) SİBİR HANLIĞI (1430-1598) ==========================================
// TDV sibir-hanligi + kucum-han. Tümen Hanlığı adıyla da bilinir.

{ t:"1420-01-02", b:"Şeybânî Hacı Muhammed Tura'da hanlığı kurdu", tur:"kurulus", onem:5, dunya:2, kapsam:"ic",
  etiket:["kurulus","hanedan","siyaset"],
  yer_id:"Tümen (Çimgi-Tura)",
  d:"Toktamış'ın ölümünden (1405) sonra Altın Orda'nın doğu kısmına Cengiz Han'ın torunu Şeybân'ın soyundan gelenler hâkim oldu. Hanlığın kurucusu olarak Şeybânî Hacı Muhammed (1420-1430) ve oğlu Mahmutek (1430-?) kabul edilir. Merkezi Çimgi-Tura (bugünkü Tümen) olan bu yapı, 1420'lerin sonlarından itibaren Şeybânî Devleti içinde yarı bağımsız bir konum kazandı.",
  kaynak:"sibir-hanligi (TDV, madde: sibir-hanligi — içerik okundu, 2026-08-22)" },

{ t:"1481-01-01", b:"İbak Han, Büyük Orda Hanı Ahmed ile mücadeleye girdi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","siyaset","hanedan"],
  yer_id:"Tümen (Çimgi-Tura)",
  d:"Mahmutek'in ardından kaynaklarda adı en çok geçen han Seyit-İbrahim'dir (İbak). Altın Orda'nın devamı sayılan Büyük Orda'nın hanı Ahmed'le mücadelesi, onun devrinin en önemli siyasî olaylarındandır. İbak Han ayrıca Kazan Hanlığı'ndaki taht kavgalarına faal olarak katıldı ve orada Rusların yayılmasına karşı başarılı bir siyaset izledi.",
  kaynak:"sibir-hanligi (TDV)" },

{ t:"1483-01-01", b:"İbak Han III. İvan ile ittifak antlaşması imzaladı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","antlasma","ittifak"],
  yer_id:"Tümen (Çimgi-Tura)",
  d:"İbak Han, Rus Knezi III. İvan'la dostluk kurup bir ittifak anlaşması imzaladı. Bir asır sonra Sibirya'yı fethedecek olan devletle ilk resmî bağ böyle kuruldu; kaynak, bu antlaşmaya rağmen Rusların Kazan ve Astarhan'ı aldıktan sonra dikkatlerini Sibirya'ya çevirdiğini kaydeder.",
  kaynak:"sibir-hanligi (TDV)" },

{ t:"1493-01-01", b:"İbak Han öldürüldü — taht Şeybânîlerden Tayboğa soyuna geçti", tur:"hanedan", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","kriz","siyaset"],
  yer_id:"Tümen (Çimgi-Tura)",
  d:"İbak Han 1493'te Muhammed Tayboğa tarafından öldürüldü ve Tümen Hanlığı tahtı Şeybânîlerden Tayboğa soyuna mensup hanların eline geçti. Cengiz soyundan olmayan bir hânedanın tahta çıkması, hanlığı Orta Asya'daki Şeybânîlerden nisbeten bağımsız hâle getirdi.",
  kaynak:"sibir-hanligi (TDV)" },

{ t:"1495-01-01", b:"Başşehir İsker'e taşındı — hanlık artık SİBİR HANLIĞI", tur:"idari", onem:5, dunya:2, kapsam:"ic",
  etiket:["idari","siyaset"],
  yer_id:"Tobolsk (İsker)",
  d:"Muhammed Tayboğa başşehrini Sibir (Tatarcası İsker, yani eski kale) şehrine taşıyınca hanlık Sibir Hanlığı adıyla anılmaya başlandı. Buradaki halka, hanlığa ve sonradan bütün bölgeye verilen Sibir adı, bir Türk kavmi olan Sabirlerden gelmektedir. Yani bugünkü Sibirya coğrafyasının adı bu başşehir değişikliğinden doğmuştur.",
  kaynak:"sibir-hanligi (TDV) — yıl YAKLAŞIK, kaynak taşınmayı 1493 sonrasına koyup gün vermiyor" },

{ t:"1552-11-01", b:"Ediger Han Moskova'ya elçi gönderip Rus hâkimiyetini kabul etti", tur:"diplomasi", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","siyaset","ekonomi"],
  yer_id:"Tobolsk (İsker)",
  d:"1552'de Kazan'ın düşüşünün ardından Ediger (Yâdigâr) Han, bir yandan yaklaşan Rus tehlikesini azaltmak, bir yandan da Şeybânîlerin baskısına karşı koyabilmek için Moskova'ya elçi gönderip Rus çarının hâkimiyetine girmek istediğini bildirdi. IV. İvan teklifi kabul etti ve bölge halkını vergiye bağladı. Çarın yarlığına göre vergiye tâbi nüfus 40.000 kişiydi; hanların askerî birlikleri ise ancak 1000-2000 kişi kadardı.",
  kaynak:"sibir-hanligi (TDV) — ay YAKLAŞIK, kaynak 'daha 1552'de' diyor" },

{ t:"1563-01-01", b:"KÜÇÜM HAN İsker'i ele geçirdi — Şeybânî hânedanı geri döndü", tur:"hukumdar", onem:5, dunya:2, kapsam:"ic",
  etiket:["hanedan","hukumdar","askeri"],
  yer_id:"Tobolsk (İsker)",
  d:"Ediger Han'ın Moskova'ya tâbiiyet teklifi üzerine 1563'te Şeybânî Küçüm Han, halkın desteğiyle İrtiş üzerindeki İsker şehrinin ve Batı Sibir Hanlığı'nın idaresini ele geçirdi. Tayboğa soyundan gelen hanlara karşı kazandığı bu başarıyla Cengizli hânedanı tahta döndü. Küçüm, İrtiş ve Tobol Tatarlarıyla Baraba çölündeki Tatarları da hâkimiyeti altına aldı.",
  kaynak:"kucum-han (TDV, madde: kucum-han — içerik okundu, 2026-08-22) + sibir-hanligi" },

{ t:"1570-01-01", b:"Küçüm Han Kazan'dan din âlimleri getirtti — Sibirya'nın İslâmlaşması", tur:"din", onem:4, dunya:2, kapsam:"ic",
  etiket:["din","kultur","sosyal"],
  yer_id:"Tobolsk (İsker)",
  d:"Küçüm Han ülkesini imar ederken bölgede yaşayan halkların Şamanizm ve Mecûsîlik inançları yerine İslâmiyet'in yayılmasına çalıştı ve bu iş için Kazan'dan pek çok din âlimi getirtti. Bu konuda babası aracılığıyla kardeşi Ahmed Giray'ın ya da Buhara Hanı Abdullah'ın kendisine yardımcı olduğu rivayet edilir. Batı Sibirya'nın müslüman Tatar kimliği bu siyasetin ürünüdür.",
  kaynak:"kucum-han (TDV) — yıl YAKLAŞIK, kaynak dönemi verip gün vermiyor" },

{ t:"1572-01-01", b:"Küçüm Han Ruslara vergi ödemeyi kabul etti", tur:"antlasma", onem:2, dunya:1, kapsam:"dis",
  etiket:["diplomasi","ekonomi"],
  yer_id:"Tobolsk (İsker)",
  d:"1569 yılından itibaren artan Rus baskıları karşısında Küçüm Han 1572'de vergi ödemeyi kabul etti. Bu tâbiiyet bir yıl bile sürmedi; ertesi yıl han çarlık elçisini öldürtecek ve ilişkiler tamamen kesilecekti.",
  kaynak:"kucum-han (TDV)" },

{ t:"1573-01-01", b:"Çarlık elçisi öldürüldü, Muhammed Kul Perm'e gönderildi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","diplomasi","kriz"],
  yer_id:"Perm",
  d:"Küçüm Han 1573'te çarlık elçisini öldürttü ve en güvendiği adamı Muhammed Kul'u Perm üzerine gönderdi; böylece Rusya ile Sibir Hanlığı arasındaki ilişkiler tamamen kesildi. Rus çarı Sibir'in Moskova'ya uzaklığı sebebiyle üzerine gidemedi. Perm bölgesindeki bu akın, Stroganov ailesinin sekiz yıl sonra Yermak'ı tutmasının doğrudan gerekçesi olacaktı.",
  kaynak:"kucum-han (TDV)" },

{ t:"1581-07-01", b:"Babahasan çarpışması — tüfekli Kazaklar karşısında ilk yenilgi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","teknoloji"],
  yer_id:"Tobolsk (İsker)",
  d:"Temmuz 1581'de Babahasan köyü yakınında beş gün süren çarpışmada Küçüm'ün kuvvetleri, ateşli silâhlarla donatılmış Rus Kazaklarına karşı koyamadı. Perm bölgesinde büyük topraklara sahip Stroganov ailesi, kürk elde etmek amacıyla Yermak başkanlığındaki birliği Küçüm'ün üzerine göndermişti. ⚠️ Seferin başlangıcı kronoloji_rusya.js'te 1581-09-01 olarak ZATEN var; bu madde ilk muharebedir.",
  kaynak:"kucum-han (TDV)" },

{ t:"1581-09-14", b:"Yermak Atık şehrini istilâ etti", tur:"savas", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri","isgal"],
  yer_id:"Tobolsk (İsker)",
  d:"Yermak, Karaça Kül gölü yakınındaki Karaça şehrini aldıktan sonra 14 Eylül 1581'de küçük bir şehir olan Atık'ı istilâ etti. Bu ilerleyiş, İrtiş boyundaki yerleşimlerin birbiri ardına düşmesinin başlangıcıdır.",
  kaynak:"kucum-han (TDV)" },

{ t:"1581-10-23", b:"ÇUAŞ BURNU SAVAŞI — Küçüm'ün ordusu dağıldı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","savas","toprak-kaybi"],
  yer_id:"Tobolsk (İsker)",
  d:"Tobol deltasından 2 km yukarıda, İrtiş'in doğu kıyısındaki Çuaş burnunda iki taraf karşılaştı; ilk çarpışmada üstünlük sağlanamadı, ancak 23 Ekim'deki ikinci savaşta Küçüm'ün kuvvetleri bozguna uğradı ve dağıldı. Han 25 Ekim gecesi ailesiyle İsker'den ayrıldı, Yermak ertesi gün şehre girdi. Rusya'nın Asya'ya açılışı bu muharebeyle başlar.",
  kaynak:"kucum-han (TDV)" },

{ t:"1581-12-22", b:"Yermak Moskova'ya heyet gönderip Sibirya'yı çara sundu", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis",
  etiket:["diplomasi","siyaset","toprak-kazanc"],
  yer_id:"Tobolsk (İsker)",
  d:"Yermak 22 Aralık 1581'de Moskova'ya bir heyet göndererek çardan Sibirya'yı yönetecek bir kişi istedi; böylece hem fethettiği toprakları Rusya'ya bağlamayı hem de kendisini affettirmeyi planlıyordu. Çar İvan, 10 Mayıs 1583'te vali düzeyinde bir yönetici ve silâhlı güç gönderdi. Bir kaçak Kazak reisinin şahsî seferi, böylece devlet siyaseti hâline geldi.",
  kaynak:"kucum-han (TDV)" },

{ t:"1584-08-06", b:"Küçüm Han baskınla Yermak'ı öldürdü", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Tobolsk (İsker)",
  d:"İsker'den çekilen Küçüm Han, Ağustos 1584'te bir baskınla Yermak ve adamlarını öldürerek hâkimiyetini yeniden kurmaya yaklaştı. Gelişmelerden korkan Rus valisi de İsker'den çekildi. Fetih, fatihinin ölümüyle on dört yıl daha uzayacaktı.",
  kaynak:"kucum-han (TDV) — gün YAKLAŞIK, kaynak 'Ağustos 1584' diyor" },

{ t:"1586-07-29", b:"Ruslar Tara yakınına yerleşti; Tümen ve Tobolsk kuruldu", tur:"idari", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","idari","toprak-kaybi"],
  yer_id:"Tümen (Çimgi-Tura)",
  d:"Rus askerleri 29 Temmuz 1586'da Tara'ya yakın bir yere, Tatarların Çinki dedikleri şehrin yanına yerleşti; ardından Ruslar bölgede kalıcı olmak için Tümen ve Tobolsk şehirlerini kurdular. Küçüm Han ile rakibi Sayedek'in çatışması bu yerleşmeyi kolaylaştırdı.",
  kaynak:"kucum-han (TDV)" },

{ t:"1591-08-01", b:"Küçüm'ün ordusu dağıtıldı, oğlu Ebülhayr esir alındı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Tobolsk (İsker)",
  d:"Ruslar 8 Temmuz 1591'de Küçüm Han'ın üzerine yürüdü; 1 Ağustos'ta başlayan kısa çarpışmada hanın askerlerinin birçoğu öldü, bir kısmı esir alındı. Esirler arasında Küçüm'ün Ebülhayr adındaki bir oğlu ile iki hanımı da vardı. Buna rağmen han kendini yenilmiş saymadı ve fırsat buldukça saldırılarını sürdürdü.",
  kaynak:"kucum-han (TDV)" },

{ t:"1592-01-01", b:"Pilim, Berezov ve Surgut kuruldu — kale hattı kuzeye uzandı", tur:"idari", onem:3, dunya:1, kapsam:"dis",
  etiket:["idari","askeri"],
  yer_id:"Berezov",
  d:"Ruslar 1592'de Pilim, Berezov ve Surgut gibi yeni şehirlerin inşasına başladı. Bu, bölgede Küçüm'e karşı stratejik konumlarının güçlenmesi anlamına geliyordu; kürk ticaretinin kuzey kolu böylece doğrudan devlet kontrolüne girdi.",
  kaynak:"kucum-han (TDV)" },

{ t:"1595-03-17", b:"Baraba bozkırı işgal edildi", tur:"isgal", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","isgal","toprak-kaybi"],
  yer_id:"Baraba bozkırı",
  d:"İrtiş'in yukarısında, Küçüm'e daha yakın bir noktada Tara şehrini kuran Ruslar, 17 Mart 1595'te Baraba çölüne asker göndererek hana tâbi o bölgedeki toprakları da işgal ettiler. Hanlığın hareket sahası artık İrtiş'in yukarı kollarıyla sınırlıydı.",
  kaynak:"kucum-han (TDV)" },

{ t:"1598-08-20", b:"KÜÇÜM HAN'IN SON SAVAŞI — Sibir Hanlığı sona erdi", tur:"son", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","savas","son"],
  yer_id:"Baraba bozkırı",
  d:"4 Ağustos 1598'de Tara'dan başlayan harekâtla Küçüm, bugünkü Novosibirsk yakınlarında kuşatıldı; 20 Ağustos'taki son savaşta yenildi ve oğlu Gali ile birkaç taraftarı yanında kaçmayı başardı. Ölenler arasında oğlu Kanay ile iki torunu vardı, esirlerin bir kısmı kurşuna dizildi, kalanları asıldı. Hanın ailesi Moskova'ya gönderildi ve Sibir Hanlığı siyasî bir varlık olarak bitti.",
  kaynak:"kucum-han (TDV)" },

{ t:"1601-01-01", b:"Küçüm Han Nogayların yanında öldürüldü", tur:"olum", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","olum"],
  yer_id:"",
  d:"1598 çarpışmasından sonra kaynaklarda Küçüm Han'la ilgili bilgi yer almaz; sınırlı bilgiler onun Nogayların yanına gittiğini ve kısa zaman sonra Nogaylar tarafından öldürüldüğünü söyler. Ebülgazi Bahadır Han, kırk yıl padişahlık yapıp Rus istilâsının ardından Mangıt halkının yanına kaçtığını ve orada öldüğünü yazar. Tarih kesin değildir; kaynak yıl vermez.",
  kaynak:"kucum-han (TDV) — tarih YAKLAŞIK ve kaynak kesin gün vermiyor, 'kısa bir zaman sonra' diyor" },

{ t:"1590-01-02", b:"Seyfi Çelebi Küçüm Han'ı Osmanlı sarayına tanıttı", tur:"kultur", onem:2, dunya:1, kapsam:"dis",
  etiket:["kultur","diplomasi","edebiyat"],
  yer_id:"Tobolsk (İsker)",
  d:"998 (1590) yılında eserini kaleme alan defterdar Seyfi Çelebi, Küçüm Han'dan bahsederken onun Kazak taifesinden Tura vilâyetinin padişahı olduğunu, Cengiz Han neslinden geldiğini, müslüman olup Hanefî mezhebine mensup bulunduğunu belirtir. Bu kayıt, Sibirya'daki mücadeleden Osmanlı sarayının da haberdar olduğunu gösteren tek çağdaş Osmanlı belgesidir.",
  kaynak:"kucum-han (TDV — Seyfi Çelebi, L'ouvrage de Seyfī Çelebī, s. 89)" },

{ t:"1604-01-01", b:"Sibirya'nın zaptı tamamlandı — çarın unvanına yeni bir ibare eklendi", tur:"idari", onem:4, dunya:3, kapsam:"dis",
  etiket:["idari","siyaset","toprak-kazanc"],
  yer_id:"Mangazeya",
  d:"Sibirya'nın tamamen zaptı 1593-1604 yıllarında tamamlandı; bundan sonra Rus çarının unvanına bütün Sibirya topraklarının hükümdarı ibaresi eklendi. Bir unvan değişikliği, Moskova'nın bir Avrupa knezliğinden bir Asya imparatorluğuna dönüşmesinin resmî kaydıdır.",
  kaynak:"sibir-hanligi (TDV)" },

{ t:"1560-01-02", b:"Sibir Hanlığı'nın ticaret ağı: Orta Asya'dan kumaş, hanlıktan kürk", tur:"iktisat", onem:3, dunya:1, kapsam:"ic",
  etiket:["ekonomi","ticaret","sosyal"],
  yer_id:"Tobolsk (İsker)",
  d:"Çimgi-Tura ve Sibir şehirlerinin yanı sıra hanlıkta yirmiden fazla şehir vardı (Kızıl-Tura, Karaçin, Taşatkan, Abalak, Tarhankale). Ahali hayvancılık, dericilik, ziraat, demircilik, kuyumculuk, avcılık, balıkçılık ve ticaretle uğraşıyordu; Orta Asya, Nogay Ordası, Kazan Hanlığı ve Rus Devleti ile ticarî ilişkiler gelişmişti. Orta Asya'dan kumaş, elbise, halı, süs eşyası ve ilâç ithal edilirken hanlık av kuşu ile kürk ihraç ediyordu.",
  kaynak:"sibir-hanligi (TDV) — tarih TEMSİLÎ, kaynak dönem betimliyor gün vermiyor" },

// === E) KAZAK HANLIĞI (1465-1847) ve ÜÇ CÜZ ================================
// 🔴 ÖLÇÜM NOTU: külliyatta "Kazak" geçen 20 maddenin 17'si UKRAYNA/DON
// KAZAKLARI'dır (Pereyaslav, Hmelnitski, Zaporojye). Kazak HANLIĞI'na ait
// olan yok denecek kadar azdı — kelime çakışması kapsamı VAR gösteriyordu.
// TDV kazaklar maddesi etnografik; siyasî omurga kazakistan maddesinin
// TARİH bölümünden alındı (§4 "dar slug tutmazsa kapsayıcı maddeyi dene").

{ t:"1465-01-02", b:"Ebülhayr'a tâbi olmayan boylar Çu ile Talas arasına çekildi — Kazak adı doğdu", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["kurulus","siyaset","sosyal"],
  yer_id:"",
  d:"Ebülhayr Han'ın (1428-1468) teşkilâtlandırdığı Özbek devletinde, halkını Moğol saldırılarından koruyamayan hükümdarı hükümdar saymadığını bildiren bir grup ayrılıp kuzeye çekildi ve Çu ile Talas nehirleri arasında hâkimiyet kurdu. Kendi başına buyruk, yiğit, bekâr anlamlarına gelen Kazak adıyla anılmaya başlandılar; bu adlandırma etnik değil sosyal bir gerekçeye dayanır. ⚠️ Çu-Talas bölgesinin yerleşim kaydı yok, yer_id boş bırakıldı.",
  kaynak:"kazaklar + kazakistan (TDV, madde: kazaklar ve kazakistan — içerik okundu, 2026-08-22)" },

{ t:"1480-01-01", b:"Burunduk Han'ın merkezî idare kurma teşebbüsü başarısız oldu", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar","idari"],
  yer_id:"Türkistan (Yesi)",
  d:"Burunduk Han (1480-1511) önderliğinde ilk merkezî idare kurma teşebbüsleri başarılı olmadı. Kazaklar bu dönemde ulu cüz, orta cüz ve küçük cüz adlarıyla üç merkezli bir idare sistemini deniyorlardı; Kazak olmayanlar cüz yerine orda kelimesini kullanır.",
  kaynak:"kazakistan (TDV)" },

{ t:"1503-01-01", b:"KASIM HAN birliği sağladı — ilk birleşik Kazak Hanlığı", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["kurulus","hukumdar","idari"],
  yer_id:"Türkistan (Yesi)",
  d:"Kasım Han zamanında (1503-1523) Kazaklar birliği sağladı; ilk birleşik Kazak Hanlığı XVI. yüzyıl başlarında onun tarafından kuruldu. Bu dönemde Kazak nüfusu hızla arttı ve artan nüfusun otlak ihtiyacı sınırların genişlemesini getirdi. Bazı küçük Moğol kabilelerinin katılmasıyla sayıları 1 milyonu aştı.",
  kaynak:"kazakistan + kazaklar (TDV)" },

{ t:"1523-01-01", b:"Tâhir Han devrinde merkezî idare bozuldu — üç cüz yeniden ayrıldı", tur:"bolunme", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","idari","kriz"],
  yer_id:"Türkistan (Yesi)",
  d:"Kasım Han'ın yerine geçen oğlu Tâhir Han döneminde (1523-1533) merkezî idare bozuldu ve halk yeniden cüzlerin etrafında toplandı. Prensipte hanlığın birliği devam etse de uygulamada bu tamamen baştaki hanın kabiliyetine bağlıydı; güçlü hanlar arasındaki boşluklarda cüzler müstakil hareket ediyordu.",
  kaynak:"kazakistan (TDV)" },

{ t:"1538-01-01", b:"HAK NAZAR HAN cüzleri yeniden merkezî otorite altında topladı", tur:"hukumdar", onem:4, dunya:2, kapsam:"ic",
  etiket:["hukumdar","idari","siyaset"],
  yer_id:"Türkistan (Yesi)",
  d:"Kasım Han'ın küçük oğlu Hak Nazar (1538-1581), Kazakları tekrar bir araya toplamayı ve merkezî otorite altına almayı başardı. Kırk üç yıllık saltanatı, hanlığın en uzun ve en toparlanmış devridir.",
  kaynak:"kazakistan (TDV)" },

{ t:"1570-01-01", b:"Hak Nazar Taşkent'i işgal etti — Özbeklere karşı üstünlük", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  yer_id:"Taşkent",
  d:"Hak Nazar Han güneye, Türkistan bölgesine yönelerek Taşkent'i işgal etti ve Özbeklere karşı üstünlük sağladı. Kazak Hanlığı'nın bozkırdan çıkıp Siriderya boyundaki yerleşik şehirlere uzanması bu seferle başlar; bu hat sonraki iki yüzyılın çekişme sahasıdır.",
  kaynak:"kazakistan (TDV) — yıl YAKLAŞIK, kaynak Hak Nazar dönemini verip gün vermiyor" },

{ t:"1575-01-01", b:"Oyratların ilk büyük Kazak seferi püskürtüldü", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Semipalatinsk",
  d:"Moğol kabileleri arasındaki mücadelenin sona ermesi üzerine Altan Han idaresindeki Oyratlar, XVI. yüzyılın ikinci yarısında 40.000 ailelik bir kuvvetle Doğu Kazakistan'a hücum ettiler. Bu hücum Hak Nazar Han tarafından püskürtüldü. Kazak-Oyrat mücadelesi böylece başladı ve iki yüzyıl sürdü.",
  kaynak:"kazakistan (TDV) — yıl YAKLAŞIK, kaynak 'XVI. yüzyılın ikinci yarısında' diyor" },

{ t:"1583-01-01", b:"Tevekkel Han tahta çıktı — güneye genişleme siyaseti sürdü", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar"],
  yer_id:"Türkistan (Yesi)",
  d:"Hak Nazar'ın ardından başa geçen Tevekkel Han (1583-1598) selefinin Türkistan'a yönelme siyasetini sürdürdü. Onun devri, Kazak Hanlığı'nın sınırlarının Mâverâünnehir topraklarına dayandığı en geniş andır.",
  kaynak:"kazakistan (TDV)" },

{ t:"1594-01-01", b:"Tevekkel Han Taşkent, Yesi ve Semerkant'ı ele geçirdi", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  yer_id:"Semerkant",
  d:"Tevekkel Han Taşkent, Yesi (Türkistan) ve Semerkant'ı ele geçirerek Kazakistan'ın sınırlarını Mâverâünnehir'e kadar genişletti. Bir bozkır hanlığının Timurlu başşehrine girmesi, Orta Asya'daki güç dengesinin XVI. yüzyıl sonundaki en büyük kaymasıdır.",
  kaynak:"kazakistan (TDV) — yıl YAKLAŞIK, kaynak Tevekkel dönemini verip gün vermiyor" },

{ t:"1598-01-02", b:"Tevekkel Han Buhara önünde II. Abdullah'a yenildi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","toprak-kaybi"],
  yer_id:"Buhara",
  d:"Tevekkel Han'ın 1598'deki son seferi, Buhara'da birliği yeniden sağlayan II. Abdullah Han (1557-1599) tarafından bozguna uğratıldı. Kazakların Mâverâünnehir'e uzanan ilerleyişi burada durdu ve güney sınırı bir daha bu kadar ilerlemedi.",
  kaynak:"kazakistan (TDV)" },

{ t:"1598-06-01", b:"Oras Muhammed Han Batı Sibirya'da esir düştü — Ruslar Kazakları Küçüm'e karşı kullandı", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","askeri","siyaset"],
  yer_id:"Tobolsk (İsker)",
  d:"Tevekkel Han güneyde Buhara ile savaşırken yeğeni Oras Muhammed Han, Batı Sibirya'da Ruslara karşı verdiği mücadeleyi kaybederek esir düştü. Ruslar, onun serbest bırakılması karşılığında Tevekkel Han'ı, Sibirya müslümanlarının istiklâlini savunan Küçüm Han'a karşı savaşa zorladılar; bu savaşta iki han da büyük zayiat verdi. İki Türk hanlığını birbirine kırdırma yöntemi ilk kez burada işledi.",
  kaynak:"kazakistan (TDV) — ay YAKLAŞIK" },

{ t:"1598-12-01", b:"İşim Han tahta çıktı — Oyrat ve Rus baskısının başladığı devir", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar"],
  yer_id:"Türkistan (Yesi)",
  d:"Tevekkel Han'ın ardından Kazakların hükümdarı olan İşim Han (1598-1628) döneminde hanlık iki yönden birden tehdit altına girdi: doğudan Moğol asıllı Oyratlar, Kalmuklar ve Cungarlar, kuzeyden Ruslar. Bu iki cepheli baskı hanlığın sonuna kadar sürecektir.",
  kaynak:"kazakistan (TDV) — ay YAKLAŞIK" },

{ t:"1635-01-02", b:"Khu Urluk'un Kalmukları Kazak bozkırını yağmaladı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","goc"],
  yer_id:"Kazak bozkırı (Turgay)",
  d:"Oyratlar, yeni liderleri Khu Urluk zamanında kalabalık bir Kalmuk kabilesiyle birleşerek yeniden saldırdı ve Kazak bozkırlarını yağmaladı. Aynı istilâ Mangışlak'taki Türkmen boylarını da yerinden etti ve Batı Kazakistan'a kadar uzandı; Kalmuklar Ural ile İdil arasında bir devlet kurdular. Kalmuk saldırılarından zayıf düşen Kazaklarda, liderleri Bolat Han'ın ölümüyle kopmalar başladı ve üç orda ayrı hanlıklara dönüştü.",
  kaynak:"kazakistan (TDV) — yıl YAKLAŞIK; Kalmuk göçünün kendi tarihi bu dosyanın G bölümünde" },

{ t:"1680-01-02", b:"TAVKE HAN — Jeti Jargı ile Türk töresi yazıya geçirildi", tur:"kanun", onem:4, dunya:2, kapsam:"ic",
  etiket:["kanun","idari","kultur"],
  yer_id:"Türkistan (Yesi)",
  d:"Tavke Han (1680-1718), jeti jargı (yedi yargı, yedi prensip) denilen Türk töresini yazılı hâle getirdi ve birleşik Kazak halkının son hükümdarı oldu. Sözlü bozkır hukukunun kanunname hâline gelmesi, Kazak siyasî geleneğinin en kalıcı ürünüdür; yüz elli yıl sonra Kenasarı aynı metni yeniden yürürlüğe koyacaktır.",
  kaynak:"kazakistan (TDV)" },

{ t:"1710-01-02", b:"Cungarlar Doğu Türkistan ve Taşkent'i alarak Kazakların üzerine döndü", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kaybi"],
  yer_id:"Taşkent",
  d:"Oyratların Moğolistan'da kalan kısmıyla birleşen Cungarlar, Khungtayji Batur önderliğinde bütün Doğu Türkistan'ı ve Taşkent'i işgal ederek Çin içlerine uzanan bir devlet kurdular. Çin'e hâkim Mançu idaresinin direnişi üzerine batıya, yani Kazakistan'a yöneldiler. Kazaklar başlangıçta başarıyla direndilerse de Cungarlar önce büyük cüzü, ardından orta cüzü hâkimiyetleri altına aldı.",
  kaynak:"kazakistan (TDV) — yıl YAKLAŞIK, kaynak sırayı verip gün vermiyor" },

{ t:"1723-01-01", b:"BÜYÜK CÜZ Kalmuklara boyun eğdi — Aktaban Şubırındı yılları", tur:"toprak-kaybi", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kaybi","sosyal"],
  yer_id:"Almatı (Vernıy)",
  d:"Almatı, Evliyaata, Çimkent, Talas ve Yedisu bölgelerini kapsayan, on bir Kazak boyunu içine alan büyük cüz, Moğolistan sınırına yakınlığı sebebiyle Kalmukların hücumuna uğradı ve 1723'te boyun eğdi. Büyük cüz 1750 başlarına kadar Kalmuk hâkimiyetinde kaldı. Kazak halk hâfızasında bu yıllar büyük felâket dönemi olarak anılır.",
  kaynak:"kazakistan (TDV)" },

{ t:"1731-10-10", b:"HAN ŞÛRASI — Rus himayesi reddedildi ama kale izni verildi", tur:"antlasma", onem:5, dunya:3, kapsam:"dis",
  etiket:["diplomasi","antlasma","siyaset"],
  yer_id:"Uralsk (Yayık)",
  d:"Küçük cüzün başındaki Ebülhayr Han Cungar tehdidine karşı Ruslardan yardım isteyince Rusya, Başkırt mirzalarından Kutlu Muhammed Tevkelev'i fevkalâde elçi olarak gönderdi. 10 Ekim 1731'de toplanan Han Şûrası, Rus himayesi yerine Rusya ile barış içinde yaşanması kararını aldı. Ancak Tevkelev'in tehdidi üzerine bazı liderler sadakat sözü verdi ve Or ile Ural nehirlerinin en çok yaklaştığı noktada bir askerî kale inşasına izin çıktı — Rusya'nın bozkıra girişi bu izinle başlar.",
  kaynak:"kazakistan (TDV)" },

{ t:"1735-01-01", b:"ORENBURG KALESİ tamamlandı — ve amaç dışı kullanıldı", tur:"idari", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","idari","toprak-kaybi"],
  yer_id:"Orenburg",
  d:"Or ile Ural nehirleri arasında bir yıl içinde tamamlanan Orenburg Kalesi, verilen izin dışında kullanıldı ve özellikle Rusya'nın Başkırt ülkesini işgalinde önemli rol oynadı. Başkırt ileri gelenleri Kazak cüzlerine elçi gönderip Ruslara topraklarında üs vermemelerini istedi. Ebülhayr Han orta cüz hanını ortak harekete çağırdı, çağrısı reddedilince tek başına savaşmaktan çekindi.",
  kaynak:"kazakistan (TDV)" },

{ t:"1739-01-01", b:"Abılay Han Çin tehdidine karşı Ruslardan yardım istedi", tur:"diplomasi", onem:3, dunya:2, kapsam:"dis",
  etiket:["diplomasi","siyaset"],
  yer_id:"Kazak bozkırı (İşim)",
  d:"Irgız ve Turgay nehirlerinden Siriderya'ya, Altay ile Tarbagatay dağlarından Balkaş'a uzanan orta cüz hem Kalmuklar hem Ruslar tarafından tehdit ediliyordu. Abılay Han denge arayışıyla Çinlilere yaklaştı; Çinlilerin tâbiiyet istemesi üzerine 1739'da Ruslardan yardım istedi. Rusların da orta cüzü kendi idaresine sokmaya kalkışması hanı yeniden müttefik değiştirmeye sevketti.",
  kaynak:"kazakistan (TDV)" },

{ t:"1748-01-01", b:"Ebülhayr Han öldürüldü — yerine Nur Ali geçti", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar","kriz"],
  yer_id:"Uralsk (Yayık)",
  d:"Ebülhayr Han 1748'de rakipleri tarafından öldürüldü; yerine bir zamanlar Ruslara rehin bıraktığı büyük oğlu Nur Ali getirildi (1748-1775). Rehin verilen bir şehzadenin han olması, Rus nüfuzunun küçük cüzde ne kadar derinleştiğini gösterir.",
  kaynak:"kazakistan (TDV)" },

{ t:"1756-09-02", b:"Kazakların Ural'ın sağ yakasına geçmesi yasaklandı", tur:"kanun", onem:3, dunya:1, kapsam:"dis",
  etiket:["kanun","idari","ekonomi"],
  yer_id:"Uralsk (Yayık)",
  d:"Bütün Kazak cüzlerini himayeleri altına alan Ruslar bir müddet sonra Kazaklara tebaa muamelesi yapmaya başladı: 2 Eylül 1756'da yayımlanan tebliğle Kazakların Ural'ın sağ yakasına geçmesi ve Rus askerî mevkilerine 12-15 kilometreden fazla yaklaşması yasaklandı. Göçebe bir toplum için otlak yasağı, hükümranlık kaybından önce gelen ekonomik yıkımdır.",
  kaynak:"kazakistan (TDV)" },

{ t:"1760-01-01", b:"Ural kıyıları yasak bölge ilân edildi — küçük cüzde düşmanlık açığa çıktı", tur:"kanun", onem:3, dunya:1, kapsam:"dis",
  etiket:["kanun","ekonomi","isyan"],
  yer_id:"Uralsk (Yayık)",
  d:"1760'ta çıkarılan fermanla küçük cüz Kazaklarının en verimli otlak yeri olan Ural nehri kıyıları yasak bölge ilân edildi. Bu, Kazakların Ruslara karşı düşmanlığını açık hâle getirdi ve on üç yıl sonra Pugaçev isyanına verilecek desteğin zeminini hazırladı.",
  kaynak:"kazakistan (TDV)" },

{ t:"1773-10-01", b:"Kazaklar Pugaçev isyanını desteklediler", tur:"isyan", onem:3, dunya:2, kapsam:"dis",
  etiket:["isyan","askeri","sosyal"],
  yer_id:"Orenburg",
  d:"Don Kossaklarının lideri Emelyan İvanoviç Pugaçev'in 1773'te başlattığı isyan başta Kazaklar olmak üzere Başkırtlar ve Kalmuklar tarafından da desteklendi. İsyanın bastırılmasının ardından küçük cüz yavaş yavaş Rus hâkimiyetine girdi. ⚠️ İsyanın kendisi kronoloji_rusya.js'te 1773-09-17 tarihiyle ZATEN var; bu madde KAZAK tarafıdır.",
  kaynak:"kazakistan (TDV) — ay YAKLAŞIK" },

{ t:"1775-01-01", b:"Abılay Han Sayram, Çimkent ve Suzak'ı yönetimine aldı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","idari"],
  yer_id:"Çimkent",
  d:"Rusların yumuşak siyasetinden faydalanan Abılay Han, Sayram, Çimkent ve Suzak gibi kültür merkezlerini yönetimi altına aldı; Siriderya'dan İli ve Çu vadilerine kadar uzanan geniş sahada huzur ve asayiş sağlandı. Bu, Kazak Hanlığı'nın son toparlanma dönemidir.",
  kaynak:"kazakistan (TDV) — yıl YAKLAŞIK, kaynak Abılay dönemini verip gün vermiyor" },

{ t:"1781-01-02", b:"Abılay Han vefat etti — huzur dönemi bitti", tur:"olum", onem:4, dunya:1, kapsam:"ic",
  etiket:["hanedan","olum"],
  yer_id:"Kazak bozkırı (İşim)",
  d:"Abılay Han'ın 1781'de vefatıyla orta cüzdeki huzur dönemi sona erdi. Yerine geçen oğlu Abdullah Han zamanında Ruslar orta cüze baskıya başladı; Abdullah babası gibi Çin'e meyledip baskıyı önlemeye çalıştıysa da başaramadı.",
  kaynak:"kazakistan (TDV)" },

{ t:"1782-04-20", b:"Abdullah Han bir seyahat sırasında Ruslar tarafından esir alındı", tur:"kriz", onem:3, dunya:1, kapsam:"dis",
  etiket:["siyaset","kriz","hanedan"],
  yer_id:"Kazak bozkırı (İşim)",
  d:"Orta cüz hanı Abdullah Han, 20 Nisan 1782'de bir seyahat esnasında Ruslar tarafından esir alındı. Bunun üzerine orta cüz hanı olan Veli Han Ruslara karşı açıkça mücadele başlattı ve güney sınırını emniyete almak için Buhara Emirliği ve Çin ile dostane ilişkiler kurdu.",
  kaynak:"kazakistan (TDV)" },

{ t:"1783-09-01", b:"SIRIM BATUR ayaklanması ilk zaferini kazandı", tur:"isyan", onem:4, dunya:2, kapsam:"dis",
  etiket:["isyan","askeri","sosyal"],
  yer_id:"Uralsk (Yayık)",
  d:"Ruslar en verimli topraklara el koyup buralara Kossakları yerleştirince, ağır vergiler ve anlaşmalara aykırı yeni kaleler tepkiyi isyana çevirdi. Sırım Batur etrafında pek çok kimseyi topladı ve 1783 sonbaharında Rus ve Kossak birliklerine karşı ilk başarısını kazandı. İkinci başarısını Sagız-Uil ve Temi ırmakları çevresini geri alarak elde etti; mücadele Kazaklar arasında millî bir hüviyet kazandı.",
  kaynak:"kazakistan (TDV) — gün YAKLAŞIK, kaynak '1783 sonbaharında' diyor" },

{ t:"1785-01-01", b:"Igelstrom kurultayı — Sırım Batur başkanlığında taht şûrası kuruldu", tur:"idari", onem:3, dunya:1, kapsam:"dis",
  etiket:["idari","siyaset","antlasma"],
  yer_id:"Orenburg",
  d:"Millî ayaklanmayı çevredeki birlikleriyle bastıramayan Rus hükümeti, Orenburg Valisi Baron Igelstrom'u elçi göndererek 1785'te bir halk kurultayı toplattı. Kurultayda halk temsilcileri Kazakların iç işlerine karışılmamasını şart koştu ve Sırım Batur başkanlığında bir taht şûrası kurulup idarî işlerin bu şûra tarafından yürütülmesini istedi. Ruslar kabul etti, beş altı yıl sonra yeniden baskıya başladı.",
  kaynak:"kazakistan (TDV)" },

{ t:"1796-12-01", b:"Kış salgını hayvanları kırdı — planlanan sefer yapılamadı", tur:"salgin", onem:3, dunya:1, kapsam:"ic",
  etiket:["sosyal","ekonomi","salgin"],
  yer_id:"Kazak bozkırı (Turgay)",
  d:"1796-1797 kışında çıkan salgın hastalık yüzünden Kazakların hayvanlarının çoğu öldü ve baharda yapılması düşünülen sefer gerçekleştirilemedi. Göçebe bir ordunun seferi hayvan varlığına bağlıdır; bir hayvan salgını, bir savaşı kaybetmekle aynı sonucu verir.",
  kaynak:"kazakistan (TDV) — gün YAKLAŞIK, kaynak '1796-1797 kışında' diyor" },

{ t:"1799-08-13", b:"Kazaklar Rus mahkemelerine bağlandı — töre hukuku kırıldı", tur:"kanun", onem:4, dunya:2, kapsam:"dis",
  etiket:["kanun","idari"],
  yer_id:"Orenburg",
  d:"13 Ağustos 1799'da ceza hukuku değiştirildi ve suçluların Kazak mahkemeleri yerine Rus mahkemelerinde yargılanması karara bağlandı. Töre esasına göre yürüyen bir toplumun yargı yetkisinin elinden alınması, Tavke Han'ın jeti jargısını fiilen yürürlükten kaldırdı.",
  kaynak:"kazakistan (TDV)" },

{ t:"1800-01-01", b:"Han seçimleri Rus hükümetinin tasdikine bağlandı", tur:"kanun", onem:3, dunya:1, kapsam:"dis",
  etiket:["kanun","idari","siyaset"],
  yer_id:"Orenburg",
  d:"1800 yılından itibaren seçilen her Kazak hanının Rus hükümeti tarafından tasdiki şartı getirildi. Üç yüzyıl önce Kazan Hanlığı'na dayatılan aynı madde, üç asır sonra bozkırın öteki ucunda tekrarlandı; Rusya'nın hanlıkları içeriden çözme yöntemi değişmemişti.",
  kaynak:"kazakistan (TDV)" },

{ t:"1810-05-25", b:"Küçük cüzün bölünmesi için han seçimi emri çıkarıldı", tur:"idari", onem:3, dunya:1, kapsam:"dis",
  etiket:["idari","siyaset","kriz"],
  yer_id:"Orenburg",
  d:"Ruslar küçük cüzün kesin olarak parçalanmasına karar verince, 25 Mayıs 1810'da Rusya İçişleri bakanı hanın iç ihtilâflardan ötürü yeniden seçilmesine dair emir çıkardı. Aynı yıl 10.000 kişilik Kazak Temsilciler Meclisi Orenburg'da toplandı ve Rus tesiriyle iki rakip grup doğdu; her biri meclisi kendi hanıyla terketti. Böylece küçük cüz ikiye bölündü.",
  kaynak:"kazakistan (TDV)" },

{ t:"1812-01-01", b:"Bökey Han hanlığını ilân etti — orta cüz iki hanlı kaldı", tur:"bolunme", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","hanedan","kriz"],
  yer_id:"Rın kumulları (Volga-Yayık arası)",
  d:"Ruslar Kazakların birleşmesini engellemek için Kıpçak, Argın, Nayman, Kerey, Vak ve Kongırat boyları arasında karışıklık çıkarmaya girişti; nihayet Argın boyu sultanı Bökey 1812'de hanlığını ilân ederek orta cüzü iki hanlı duruma düşürdü. İki hanın mücadelesi Kazaklara büyük zarar verdi; 1817'de Bökey'in, 1819'da Veli Han'ın ölümü bu sıkıntıyı bitirdiyse de yerlerine dirayetli bir han gelmedi.",
  kaynak:"kazakistan (TDV)" },

{ t:"1822-06-22", b:"SİBİRYA KAZAKLARI NİZAMNAMESİ — 319 madde, hanlık kaldırıldı", tur:"kanun", onem:4, dunya:2, kapsam:"dis",
  etiket:["kanun","idari","reform"],
  yer_id:"Omsk",
  d:"22 Haziran 1822'de Rus hükümeti, 319 maddeden oluşan Sibirya Kazaklarının statüsünü tebliğ etti. Orta cüzde han ve sultanlar tarafından yürütülen kabile esaslı idare kaldırıldı; yerine kendisine Rus binbaşısı rütbesi verilecek ve Rusların emriyle hareket edecek bir yönetici sultan (ağa sultan) seçme usulü getirildi. 1819'da Veli Han'ın ölümünden sonra zaten yasaklanmış olan han seçimi böylece hukuken de tarihe karıştı.",
  kaynak:"kazakistan + kazaklar (TDV — kazaklar maddesi 1822, 1824, 1867, 1868 ve 1891 düzenlemelerini Rus yönetiminin temeli sayar)" },

{ t:"1824-01-01", b:"1824 düzenlemesi küçük cüzde de hanlığı kaldırdı", tur:"kanun", onem:3, dunya:1, kapsam:"dis",
  etiket:["kanun","idari","reform"],
  yer_id:"Orenburg",
  d:"1822'yi izleyen 1824 düzenlemesiyle Rus idaresinin çerçevesi küçük cüze de yayıldı. Kaynak, 1822, 1824, 1867, 1868 ve 1891 düzenlemelerini 1917'ye kadar sürecek Rus yönetiminin temeli olarak sayar. Bu beş metin, bir göçebe siyasî düzenin yerine bir sömürge idaresinin geçişinin belgeleridir.",
  kaynak:"kazaklar (TDV)" },

{ t:"1837-01-02", b:"KENASARI KASIMOĞLU ayaklanması başladı — 20.000 silâhlı", tur:"isyan", onem:5, dunya:3, kapsam:"dis",
  etiket:["isyan","askeri","siyaset"],
  yer_id:"Kazak bozkırı (İşim)",
  d:"Orta cüzde verimli toprakların alınması, ağır vergiler ve stratejik noktalara yeni kaleler yapılmak istenmesi üzerine halk ayaklandı; Abılay Han'ın torunu Sultan Kenasarı Kasımoğlu liderliğinde ilk anda 20.000 kişiye yakın silâhlı kuvvet toplandı. Kenasarı, dedesi zamanındaki hanlık sisteminin yeniden tesisini, işgal edilen toprakların boşaltılmasını ve kalelerin yıktırılmasını istedi; Ruslar reddedince mücadele başladı.",
  kaynak:"kazakistan (TDV)" },

{ t:"1837-11-15", b:"İsatay Tayman ayaklanması ilk savaşı kazandı", tur:"isyan", onem:3, dunya:1, kapsam:"dis",
  etiket:["isyan","askeri"],
  yer_id:"Rın kumulları (Volga-Yayık arası)",
  d:"Küçük cüzde, Rus taraftarı Cihangir Han'ın halka ait otlakları bazı şahıslara satması ve Ural hattında yeni kalelere izin vermesi üzerine Berş boyu önderi İsatay Tayman ayaklandı. 15 Kasım 1837'deki ilk savaş Kazakların lehine sonuçlandı. Aynı yıl orta cüzde Kenasarı, küçük cüzde İsatay ayaklandı; iki hareket birleşemedi.",
  kaynak:"kazakistan (TDV)" },

{ t:"1838-01-02", b:"Kenasarı Irgız ve Turgay bölgelerini Ruslardan geri aldı", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","isyan"],
  yer_id:"Kazak bozkırı (Turgay)",
  d:"Kenasarı 1838'de Rus işgalindeki Irgız ve Turgay bölgelerini geri almayı başardı; yüzyıllardır otlak olarak kullanılan bu verimli toprakların kurtarılması halk arasında sevinçle karşılandı. Kenasarı ayrıca aksakallar meclisi kurmuş, Tavke Han'ın yarı şeriat yarı töreden oluşan kanunlarını yeniden yürürlüğe koymuş, sürgündeki Polonyalı subayların yardımıyla tüfek imal ettirmişti.",
  kaynak:"kazakistan (TDV)" },

{ t:"1838-07-12", b:"İsatay Tayman ayaklanması bastırıldı", tur:"isyan", onem:3, dunya:1, kapsam:"dis",
  etiket:["isyan","askeri"],
  yer_id:"Rın kumulları (Volga-Yayık arası)",
  d:"12 Temmuz 1838'deki ikinci savaşı Ruslar kazandı ve küçük cüz halkı boyun eğmek zorunda kaldı. Kenasarı'nın mücadelesi ise dokuz yıl daha sürecekti; iki ayaklanmanın ayrı ayrı ezilmesi, cüzlerin birleşememesinin bedelidir.",
  kaynak:"kazakistan (TDV)" },

{ t:"1843-06-05", b:"General Lebedev ve Bisyanov'un saldırısı püskürtüldü", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas","isyan"],
  yer_id:"Kazak bozkırı (Turgay)",
  d:"5 Haziran 1843'te General Lebedev ile General Bisyanov kumandasındaki birlikler Kenasarı üzerine yürüdü ve başarısızlığa uğradı. Bu sırada Kenasarı, Hokand Hanlığı'na karşı Buhara Emirliği ile bir ittifak kurmuştu; ittifak, üçe ayrılmış Türkistan hanlıkları arasında yeni bir mücadeleyi başlattı.",
  kaynak:"kazakistan (TDV)" },

{ t:"1844-08-14", b:"Kenasarı büyük zafer kazandı — Buhara ve Hîve onu Kazakların hanı tanıdı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","diplomasi"],
  yer_id:"Kazak bozkırı (Turgay)",
  d:"14 Ağustos 1844'te yapılan savaşı da kazanan Kenasarı'nın şöhreti daha da arttı ve Buhara ile Hîve hanları tarafından Kazakların hanı olarak tanındı. Bir isyan liderinin komşu devletlerce hükümdar tanınması, hanlığın hukuken diriltildiği tek andır.",
  kaynak:"kazakistan (TDV)" },

{ t:"1845-05-01", b:"Kenasarı Rus hâkimiyetini tanımayı reddetti", tur:"diplomasi", onem:3, dunya:1, kapsam:"dis",
  etiket:["diplomasi","siyaset","isyan"],
  yer_id:"Kazak bozkırı (Turgay)",
  d:"Ruslar anlaşma yolları aramaya başladı ve Mayıs 1845'te gelen heyet Kenasarı'dan Rusya'nın hâkimiyetini tanımasını istedi; Kenasarı bunu reddetti. Daha önce çarla görüşmek için Petersburg'a davet edildiğinde de görüşmenin şartı olarak işgal edilen Kazak topraklarından çıkılmasını öne sürmüştü.",
  kaynak:"kazakistan (TDV)" },

{ t:"1845-09-01", b:"Kenasarı Karatav'ı boşaltmak zorunda kaldı", tur:"toprak-kaybi", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kaybi"],
  yer_id:"Kazak bozkırı (Sarısu)",
  d:"Orenburg ve Sibirya'daki ordularıyla iki koldan saldıran Ruslara 1845 sonbaharına kadar dayanamayan Kenasarı kuvvetleri Karatav bölgesini boşaltarak önce Kök-Köl'e, bir yıl sonra Alatav istikametine çekildi. Kenasarı mücadeleyi bütün çabalarına rağmen üç cüze yayamamış, küçük ve büyük cüz gerekli desteği vermemişti.",
  kaynak:"kazakistan (TDV) — gün YAKLAŞIK, kaynak '1845 sonbaharına kadar' diyor" },

{ t:"1847-01-01", b:"KENASARI KIRGIZLAR TARAFINDAN ÖLDÜRÜLDÜ — Kazak Hanlığı bitti", tur:"son", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","son","siyaset"],
  yer_id:"",
  d:"Alatav'a çekilen Kenasarı'nın birliklerine, Rusların kışkırtmasıyla Kırgızlar saldırdı. Böyle bir baskını beklemeyen Kenasarı, Kırgız topraklarını terkedip Çu ırmağının yukarı mecrasındaki Mey-Tuble vahasına çekildi; ikinci bir baskın sonucu adamlarıyla birlikte esir alındı ve öldürüldü. Kazak Hanlığı'nın siyasî varlığı bu tarihte sona erer. ⚠️ Mey-Tuble ve Alatav için yerleşim kaydı yok.",
  kaynak:"kazakistan (TDV) — gün YAKLAŞIK, kaynak yılı 1847 olarak veriyor (bibliyografyada 1843-1847)" },

{ t:"1848-01-01", b:"Sultan Sâdık 20.000 aile ile Hokand Hanlığı'na katıldı", tur:"siyaset", onem:3, dunya:1, kapsam:"dis",
  etiket:["siyaset","goc","askeri"],
  yer_id:"Türkistan (Yesi)",
  d:"Kenasarı'nın ölümüyle millî mücadele ruhu zayıfladı. Kardeşi Sultan Sâdık, kendisine bağlı 20.000 aile ile Türkistan ve Karatav bölgelerine yerleşip Hokand Hanlığı'nın hâkimiyetine girdi ve Hokand ordusunda pansad unvanıyla hanlığın kuzey sınırını Ruslara karşı savundu. Kazak direnişi böylece başka bir devletin ordusuna taşındı.",
  kaynak:"kazakistan (TDV) — yıl YAKLAŞIK" },

{ t:"1854-06-22", b:"I. NİKOLA FERMANI — bütün Kazak toprakları Rusya'ya bağlandı", tur:"son", onem:5, dunya:3, kapsam:"dis",
  etiket:["idari","kanun","toprak-kaybi"],
  yer_id:"Orenburg",
  d:"Rus Çarı I. Nikola, 22 Haziran 1854'te bir ferman çıkararak bütün Kazak topraklarının Rusya hâkimiyeti altına geçtiğini ve Kazakların Rus kanunlarına tâbi olduğunu ilân etti. Buna karşılık bazı boy beyleri Rus hâkimiyetini reddederek mücadeleyi sürdürdü; bozkırın hukukî ilhakı ile fiilî teslimi arasındaki fark yıllarca sürdü.",
  kaynak:"kazakistan (TDV)" },

{ t:"1873-06-01", b:"Sultan Sâdık Kâşgar'dan Hîve'ye geçip Ruslara karşı savundu", tur:"savas", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri","siyaset"],
  yer_id:"Hîve",
  d:"1860'tan sonra Rusların Hokand Hanlığı'na saldırıp Hokand kuvvetlerini yenmesi üzerine Sultan Sâdık Kâşgar'a gidip Yâkub Bey'in yardımcısı oldu; 1873'te Hîve'ye geçerek Ruslara karşı bu hanlığın müdafaasında bulundu. Tek bir Kazak sultanının izlediği yol, Rus ilerleyişine karşı Türkistan'ın üç ayrı cephesinin nasıl birbirine bağlandığını gösterir.",
  kaynak:"kazakistan (TDV) — ay YAKLAŞIK" },

{ t:"1868-01-01", b:"1867-1868 nizamnameleri — toprak devlet malı ilân edildi", tur:"reform", onem:4, dunya:2, kapsam:"dis",
  etiket:["reform","kanun","ekonomi","sosyal"],
  yer_id:"Türkistan (Yesi)",
  d:"Rus idaresinin en radikal değişim alanı toprak ve mülkiyet oldu: bütün topraklar devlet malı ilân edilerek otlakların kullanım ve paylaşımı hükümet yöneticilerinin eline bırakıldı, Kazaklar göçebeliği ve hayvancılığı bırakıp yerleşik hayata ve ziraata zorlandı. Bu, geleneksel Kazak toplumunun ekonomik ve sosyal yapısını bozdu; alınan toprakların bir kısmına Rus göçmenler iskân edildi.",
  kaynak:"kazaklar (TDV)" },

{ t:"1870-01-01", b:"Orenburg'da dinî okullar açıldı — İslâm Kazaklar arasında yaygınlaştı", tur:"din", onem:3, dunya:1, kapsam:"ic",
  etiket:["din","kultur","sosyal"],
  yer_id:"Orenburg",
  d:"XIX. yüzyılın ikinci yarısından itibaren İslâm, Kazaklar arasında önemli bir sosyal ve moral dinamik hâline geldi; Orenburg gibi merkezlerde dinî okullar açıldı ve dinî eğitim yaygınlaştı. Rusların İslâmiyet'i hâkimiyetlerine engel sayıp karşı koymalarına rağmen pek çok Kazak topluluğu sosyal ve hukukî düzenlemelerini İslâmî esaslara dayandırmaya başladı.",
  kaynak:"kazaklar (TDV) — yıl YAKLAŞIK, kaynak 'XIX. yüzyılın ikinci yarısından itibaren' diyor" },

{ t:"1891-01-01", b:"1891 nizamnamesi — Rus idaresinin son çerçevesi", tur:"reform", onem:3, dunya:1, kapsam:"dis",
  etiket:["reform","kanun","idari"],
  yer_id:"Orenburg",
  d:"1891 düzenlemesi, 1917'ye kadar sürecek Rus yönetiminin son hukukî çerçevesini kurdu. Aynı dönemde geleneksel Kazak aristokrasisinin yerini iki kollu yeni bir aydın grubu aldı: Orenburg, Omsk ve Semipalatinsk'teki devlet okullarından yetişen seküler kadrolar ve Cedîdciliği benimseyen muhafazakârlar. Her ikisinin ortak noktası Rus politikalarına karşı olmaktı.",
  kaynak:"kazaklar (TDV)" },

{ t:"1905-11-01", b:"1905 Rus devrimi Kazak siyasî hayatını açtı", tur:"siyaset", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","sosyal","kultur"],
  yer_id:"Orenburg",
  d:"1905 Rus devrimi Kazak siyasî hayatına yeni açılımlar getirdi: din adamlarının desteğini alan aydınlar siyasî ve kültürel alanda daha hür hareket etme imtiyazı aldı, siyasî partiler kuruldu, gazete ve dergi neşriyatındaki bazı kısıtlamalar kaldırıldı. Kazaklar İslâm'ın Ortodoksluk ile aynı hukukî çerçevede tanınmasını, topraklarının iadesini ve Kazak topraklarında yalnız Kazakların tam vatandaşlık hakkına sahip olmasını talep etmeye başladı.",
  kaynak:"kazaklar (TDV) — ay YAKLAŞIK" },

{ t:"1916-07-01", b:"1916 AYAKLANMASI — seferberlik fermanı bozkırı ateşe verdi", tur:"isyan", onem:4, dunya:3, kapsam:"dis",
  etiket:["isyan","askeri","sosyal"],
  yer_id:"Kazak bozkırı (Turgay)",
  d:"I. Dünya Savaşı sırasında Rusların on sekiz-kırk üç yaş arası erkekleri askere almak istemesi üzerine 1916'da büyük bir ayaklanma çıktı; arka planda uzun süreli toprak politikası rahatsızlığı, ağır vergiler ve savaş döneminde el konulan Kazak kaynakları vardı. Rus ordusu otoritesini büyük kayıplarla yeniden sağladı, fakat Kazak-Rus ilişkileri bir daha bu gerginlikten kurtulamadı.",
  kaynak:"kazaklar + kazakistan (TDV) — ay YAKLAŞIK" },

{ t:"1917-04-01", b:"Orenburg'da ilk Umumi Kazak Kurultayı toplandı", tur:"siyaset", onem:4, dunya:2, kapsam:"ic",
  etiket:["siyaset","idari","kultur"],
  yer_id:"Orenburg",
  d:"Nisan 1917'de Orenburg'da toplanan ilk umumi Kazak kurultayı resmen siyasî otonomi, idarede ve okullarda Kazak Türkçesinin resmî dil olması taleplerini gündeme getirdi. Birkaç ay sonraki ikinci ve üçüncü kurultaylarda ordu kurma, anayasa hazırlama ve seçim yapma kararı alındı; Alaş Partisi ve ardından Alaş Orda hükümeti bu kararlardan doğdu.",
  kaynak:"kazaklar + kazakistan (TDV)" },

{ t:"1917-12-13", b:"ALAŞ ORDA — Kazakistan muhtariyetini ilân etti", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyaset","kurulus","idari"],
  yer_id:"Orenburg",
  d:"Rusya'da iç savaş sürerken Aralık 1917'de Kazakistan muhtariyetini ilân etti; kurulan hükümetin adı Alaş Orda oldu. Bu, Kenasarı'nın 1847'deki ölümünden bu yana Kazakların kendi adına kurduğu ilk siyasî otoritedir ve iki yıl yaşayacaktır.",
  kaynak:"kazakistan (TDV) — gün YAKLAŞIK, kaynak 'Aralık 1917' diyor" },

{ t:"1919-01-01", b:"Kızılordu Kazakistan'ı işgal etti — Alaş Orda dağıtıldı", tur:"son", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","isgal","siyaset"],
  yer_id:"Orenburg",
  d:"İç savaşın sona ermesinden sonra 1919'da Kızılordu birlikleri Kazakistan'ı işgal ederek özerk Kazakistan'ın yerine 20 Ağustos 1920'de Kazak Özerk Sovyet Sosyalist Cumhuriyeti'ni kurdu. 1924'te yeni Sovyet cumhuriyetlerinin teşkili sırasında ilâve edilen topraklarla Kazakistan'ın bugünkü sınırları belirlendi.",
  kaynak:"kazakistan (TDV) — gün YAKLAŞIK" },

// === F) KIRGIZLAR ==========================================================
// 🔴 devletler.js'te "kirgiz" künyesi YOKTUR (431 künyenin tam metin taraması).
// Bu maddeler ayrı bir kimliğe bağlanmadan, geçtikleri coğrafyanın olayı
// olarak yazıldı. Ayrı künye açılması koordinatörün kararıdır.

{ t:"1207-01-01", b:"Kırgızlar Cengiz Han'a itaat eden ilk Türk kavmi oldu", tur:"siyaset", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","askeri"],
  yer_id:"",
  d:"Cengiz Han, Merkit ve Naymanlarla olan savaşları sırasında Kırgızları da itaat altına aldı (1207). Kaynak, Kırgızların Cengiz Han'a itaat eden ilk Türk kavmi olduğunu kaydeder. 1217'de direnmeye kalkıştılarsa da ertesi yıl Cengiz'in oğlu Cuci tarafından yenilgiye uğratılıp tekrar imparatorluğa bağlandılar.",
  kaynak:"kirgizlar (TDV, madde: kirgizlar — içerik okundu, 2026-08-22)" },

{ t:"1218-01-01", b:"Cuci Kırgız direnişini bastırdı", tur:"savas", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"",
  d:"1217'de Moğollara karşı direnmeye kalkışan Kırgızlar, ertesi yıl Cengiz Han'ın oğlu Cuci tarafından yenilgiye uğratılıp tekrar imparatorluğa bağlandılar. Bu tarihten sonra Kırgızlar uzun süre Kalmuk ve Kazak hâkimiyeti altında, göçebe hayat tarzı içinde tecrit edilmiş biçimde yaşadı.",
  kaynak:"kirgizlar (TDV)" },

{ t:"1580-01-01", b:"Seyfi Çelebi Kırgızları Osmanlı okuruna tanıttı", tur:"kultur", onem:2, dunya:1, kapsam:"dis",
  etiket:["kultur","edebiyat","sosyal"],
  yer_id:"Kaşgar",
  d:"XVI. yüzyılın ikinci yarısına ait bir Osmanlı eserinde Kırgızların Kâşgar yakınında bulundukları, bağımsız olmadıkları, beylerine Kaşka dedikleri, sarp dağlarda yaşadıkları ve düşmanlarını asla kendi topraklarına sokmadıkları belirtilir. Bu kayıt, Kırgızlar hakkında Osmanlı dünyasına ulaşmış en erken doğrudan bilgidir.",
  kaynak:"kirgizlar (TDV — Seyfi Çelebi, s. 86-87); tarih YAKLAŞIK, kaynak 'XVI. yüzyılın ikinci yarısı' diyor" },

{ t:"1650-01-01", b:"Kırgızların İslâmlaşması tamamlandı", tur:"din", onem:3, dunya:1, kapsam:"ic",
  etiket:["din","sosyal","kultur"],
  yer_id:"",
  d:"Kırgızlar, müslüman Türk toplulukları arasında İslâmiyet'i en geç kabul edenlerdendir; İslâm'a geçişleri XVI-XVII. yüzyıllarda tamamlanmıştır. Bu geç kabul, bölgedeki öteki Türk hanlıklarıyla siyasî ilişkilerinin de geç kurulmasının sebeplerinden biridir.",
  kaynak:"kirgizlar (TDV) — tarih TEMSİLÎ, kaynak yüzyıl aralığı veriyor" },

{ t:"1862-01-01", b:"Kırgız kumandanı Sâdık Bey Kâşgar'a girdi", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","siyaset"],
  yer_id:"Kaşgar",
  d:"1862'de Kırgız kumandanı Sâdık Bey Kâşgar'a girdi; iki yıl sonra 1864'te Ruslara tâbi oldu. Bu iki tarih, Kırgızların Tarım havzasındaki hanlık mücadelesine karıştığı ve ardından Rus idaresine geçtiği kısa pencereyi işaretler.",
  kaynak:"kirgizlar (TDV)" },

{ t:"1864-01-01", b:"Kırgızlar Rus hâkimiyetine girdi", tur:"toprak-kaybi", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","toprak-kaybi"],
  yer_id:"",
  d:"Kâşgar'a giren Sâdık Bey 1864'te Ruslara tâbi oldu ve Kırgızların yaşadığı topraklar Rus idaresine geçti. Bu topraklar 1917'ye kadar Türkistan Genel Valiliği'nin Semireçen, Siriderya, Fergana ve Semerkant bölgelerine dahil edildi.",
  kaynak:"kirgizlar (TDV)" },

{ t:"1911-01-01", b:"İlk Kırgızca kitaplar basıldı", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","edebiyat","bilim"],
  yer_id:"Kazan",
  d:"Göçebe hayat süren Kırgızlar arasında maarif geç yayıldı. Kırgızca ilk kitaplar 1911'de basıldı: M. Şamırkanov'un Kazan'da çıkan Kıssa Zilzalisı (Zelzele hikâyesi) ve K. Sarsekeev'in Ufa'da çıkan Alippe (Elifbâ). Bir yıl sonra I. Arabaev'in Orenburg'da basılan Cazuu Örnöktörü'nden başka eser yok gibidir.",
  kaynak:"kirgizlar (TDV)" },

{ t:"1916-06-25", b:"II. Nikola'nın fermanı Kırgız ayaklanmasını başlattı", tur:"isyan", onem:4, dunya:2, kapsam:"dis",
  etiket:["isyan","askeri","sosyal"],
  yer_id:"",
  d:"25 Haziran 1916'da Çar II. Nikola'nın fermanıyla on dokuz-kırk üç yaş arası bütün Kırgız erkekleri cephe gerisinde çalıştırılmak üzere göreve çağrıldı; Kırgızlar ayaklandı ve isyan kısa sürede bütün Türkistan'a yayıldı. Çarlık idaresi olağan üstü hâl ilân edip yüzlerce kişiyi katletti, Kırgızları Çu ve Isık Göl vadilerinden dağlara sürüp 4 milyon hektar toprağa el koydu; halk açlığa mahkûm edildi ve binlerce insan öldü.",
  kaynak:"kirgizlar (TDV)" },

// === G) TARIM HAVZASI: MOĞULİSTAN → YARKENT (SA'İDİYYE) → HOCALAR →
//        YÂKUB BEY (1347-1878) ==============================================
// ⚠️ Koordinatörün "kasgar (Yarkend)" dediği kimlik devletler.js'te YOK.
// Gerçeği ÜÇ künyedir: mogulistan · yarkent-hanligi · yakub-beg.
// TDV kasgar maddesi şehir tarihidir ve üçünü de kapsar; yarkent slug'ı ÖLÜ.

{ t:"1347-01-02", b:"Tuğluk Timur Çağatay ulusunun doğu kanadında han ilân edildi — Moğulistan doğdu", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["kurulus","hanedan","siyaset"],
  yer_id:"Gulca (Yining)",
  d:"Çağatay Hanlığı'nın doğuya çekilen kolu, 1347'de Tuğluk Timur'un han ilân edilmesiyle ayrı bir siyasî gövde hâline geldi. Moğulistan diye anılan bu yapı, batı ucu 1514'te Yarkent Hanlığı'na dönüşene ve Turfan kolu Cungar fethine kadar üç yüz otuz yıl sürdü. ⚠️ Modern Moğolistan (Bogd Hanlık, 1911) ile karıştırılmamalıdır, aralarında 231 yıl vardır.",
  kaynak:"devletler.js mogulistan künyesi — TDV'de müstakil madde YOK, dayanak standart akademik kaynak (künyenin kendi beyanı)" },

{ t:"1399-01-01", b:"Mirza İskender Kâşgar, Yârkend ve Aksu'yu zaptetti", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  yer_id:"Kaşgar",
  d:"XIV. yüzyılın ikinci yarısından itibaren Kâşgar ve çevresine Moğol asıllı Duğlatlar hâkim olmuştu. Timur Hârizm'e sefer düzenlerken onların üzerine de ordu sevketti; 1399'da gönderdiği torunu Mirza İskender, Yârkend ve Aksu ile birlikte Kâşgar'ı da zaptetti. Tarım havzası böylece Timurlu nüfuzuna girdi.",
  kaynak:"kasgar (TDV, madde: kasgar — içerik okundu, 2026-08-22)" },

{ t:"1403-01-01", b:"Ankara Savaşı'ndan getirilen Kara Tatarlar Kâşgar taraflarına yerleştirildi", tur:"sosyal", onem:2, dunya:2, kapsam:"dis",
  etiket:["sosyal","goc"],
  yer_id:"Kaşgar",
  d:"Hoten, Endican ve Kâşgar'ı Şâhruh'un oğlu İbrâhim Sultan'a veren Timur, Ankara Savaşı'ndan sonra Anadolu'dan getirdiği 30.000 çadır Kara Tatar'ın bir kısmını Kâşgar taraflarına yerleştirdi. Anadolu'dan Tarım havzasına yapılan bu zorunlu göç, iki uç coğrafyayı tek bir siyasî kararla birbirine bağlayan ender vakalardandır.",
  kaynak:"kasgar (TDV) — yıl YAKLAŞIK, kaynak Ankara Savaşı sonrasını işaret ediyor" },

{ t:"1416-01-01", b:"Uluğ Bey Kâşgar'a hâkim oldu, Duğlatlar Tarım'dan uzaklaştırıldı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","siyaset","hanedan"],
  yer_id:"Kaşgar",
  d:"1416'da Timur'un torunu Uluğ Bey, Emîrek Ahmed'in idaresindeki Kâşgar'a da hâkim oldu ve aynı yıl Duğlatlar Tarım havzasından tamamen uzaklaştırıldı. Ancak Duğlatlar geri döndü ve Kâşgar'ı tekrar ele geçirerek 1499 veya 1514'e kadar hüküm sürdü.",
  kaynak:"kasgar (TDV)" },

{ t:"1514-01-02", b:"SULTAN SAİD HAN Yarkent (Sa'îdiyye) Hanlığı'nı kurdu", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["kurulus","hanedan","siyaset"],
  yer_id:"Yarkent (Şaçe)",
  d:"Sultan Said Han, Moğulistan mirası üzerinde Kâşgar ve Yarkent'i alarak Tarım havzasında bir Çağatay hanlığı kurdu. Başşehri Yarkent olan bu devlet, kaynaklarda Sa'îdiyye Hanlığı diye de anılır ve 1705'e kadar sürecektir. ⚠️ TDV'nin kasgar maddesi Yarkent'i ayrı bir siyasî varlık olarak ele almaz, yalnız geçerken anar; hanlığın kendi kuruluş/son tarihleri standart akademik kaynağa dayanır.",
  kaynak:"kasgar (TDV, kısmî) + devletler.js yarkent-hanligi künyesi — künye kendi kaynak alanında 'yetersiz' damgası taşıyor, gizlenmiyor" },

{ t:"1606-01-01", b:"Emîr İsmâil Kâşgar'ın idaresini ele aldı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hanedan","hukumdar"],
  yer_id:"Kaşgar",
  d:"1606'da Çağatay hânedanına mensup Emîr İsmâil Kâşgar'a hâkim oldu. Onun zamanında halk üzerinde büyük nüfuzu bulunan Âfâk Hoca yükselecek ve hanlığın siyasî iradesi hânedandan tarikat şeyhlerine geçecekti.",
  kaynak:"kasgar (TDV)" },

{ t:"1678-01-01", b:"ÂFÂK HOCA Kalmuk desteğiyle emîr oldu — HOCALAR DÖNEMİ başladı", tur:"din", onem:5, dunya:3, kapsam:"dis",
  etiket:["din","siyaset","isgal"],
  yer_id:"Kaşgar",
  d:"Halk üzerinde büyük nüfuzu bulunan Âfâk (Appak, Abak) Hoca, Kalmukların yardımıyla 1678'de Kâşgar'ın emîri oldu. Böylece başlayan Hocalar dönemi XIX. yüzyıla kadar devam etti. Dinî bir liderliğin yabancı bir göçebe gücün süngüsüyle siyasî iktidara dönüşmesi, Tarım havzasının iki yüz yıllık kaderini belirledi.",
  kaynak:"kasgar (TDV)" },

{ t:"1682-01-01", b:"Galdan Han Kâşgar'ı ve bütün Moğolistan'ı fethetti", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","isgal"],
  yer_id:"Kaşgar",
  d:"Cungar Hanlığı adıyla tanınan Doğu Kalmuklarının önemli hükümdarlarından Galdan Han, Halhaları da egemenliği altına alarak 1682'de Kâşgar'ı ve arkasından bütün Moğolistan'ı fethetti. Tarım havzasının hanlıkları böylece Cungar tâbiiyetine girdi.",
  kaynak:"kalmuklar (TDV, madde: kalmuklar — içerik okundu, 2026-08-22)" },

{ t:"1705-01-01", b:"Yarkent Hanlığı fiilen sona erdi", tur:"son", onem:5, dunya:2, kapsam:"dis",
  etiket:["siyaset","son","toprak-kaybi"],
  yer_id:"Yarkent (Şaçe)",
  d:"Cungar hâkimiyetinin pekişmesiyle Yarkent (Sa'îdiyye) Hanlığı fiilen sona erdi. Tarım havzasında Çağatay soyundan gelen hânedanın 191 yıllık idaresi böylece bitti; bölgeyi bundan sonra Hocalar Cungar denetiminde yönetecekti.",
  kaynak:"devletler.js yarkent-hanligi künyesi — TDV müstakil madde vermiyor, dayanak standart akademik kaynak" },

{ t:"1759-06-01", b:"Çin Tarım havzasını işgal etti, merkezi Yârkend olan yönetim kuruldu", tur:"isgal", onem:4, dunya:3, kapsam:"dis",
  etiket:["isgal","idari","toprak-kaybi"],
  yer_id:"Yarkent (Şaçe)",
  d:"1759'da Çin Tarım havzasının tamamını işgal etti ve merkezi Yârkend olan mahallî bir yönetim kurdu; aynı yıl sürgüne gönderilen Hocalar, bir asır sürecek direnişin liderleri olacaklardı. ⚠️ Fethin Çin tarafı kronoloji_cin.js'te 1759-01-01 tarihiyle ZATEN var; bu madde kurulan İDARÎ YAPIdır.",
  kaynak:"kasgar (TDV) — ay YAKLAŞIK" },

{ t:"1865-01-15", b:"YÂKUB BEG 1000 kişiyle Kâşgar'a gönderildi", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","siyaset"],
  yer_id:"Kaşgar",
  d:"Kâşgar Hanı Gasıp Sıddık Beg, Kâşgar ve Yenihisar kalelerindeki Çin birliğiyle başa çıkamayınca Hokand Hanlığı'ndan yardım istedi. Hokand'ın fiilî hâkimi başkumandan Âlim Kul, Yâkub Beg'i 1000 kişilik bir kuvvetin başında Ocak 1865'te Kâşgar'a gönderdi. Çinlilere karşı koyan Yâkub Beg halkın takdirini kazandı ve on üç yıl sürecek devletinin ilk adımını attı.",
  kaynak:"yakub-beg (TDV, madde: yakub-beg — içerik okundu, 2026-08-22) — gün YAKLAŞIK, kaynak 'Ocak 1865' diyor" },

{ t:"1866-01-01", b:"Yenihisar, Yârkend ve Hoten ele geçirildi", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  yer_id:"Hotan",
  d:"Çarpışmalarda öldürülen Gasıp Sıddık Beg'in yerine han ilân edilen Hoca Büzürg Han Töre, Yâkub Beg'i kumandanlığa getirip geniş yetkiler verdi. Büzürg Han'ın yetersizliğinden faydalanıp askerî ve mülkî kadrolara hâkim olan Yâkub Beg, 1866'da Yenihisar'ı, Kâşgar Yenişehiri'ni, Yârkend ve Hoten'i ele geçirdi.",
  kaynak:"yakub-beg (TDV)" },

{ t:"1867-01-01", b:"Yâkub Beg kendini ATALIK GAZİ BA-DEVLET ilân etti", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["siyaset","kurulus","hukumdar"],
  yer_id:"Kaşgar",
  d:"Aksu, Kuça ve Karaşehir'i de alarak hâkimiyet alanını genişleten Yâkub Beg, Büzürg Han Töre'nin iktidarına son verip kendisini Atalık Gazi Ba-Devlet (mesut hükümdar) unvanıyla Kâşgar Hanlığı'nın yeni hâkimi ilân etti. Çağdaşlarına göre Orta Asya'da ilk defa yarı modern bir devlet kurulmuştu.",
  kaynak:"yakub-beg (TDV)" },

{ t:"1870-01-01", b:"Dunganlar Urumçi'den uzaklaştırıldı", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Ürümçi (Dihua)",
  d:"Doğu Türkistan'daki müstakil hanlıkları kendi yönetimi altında birleştirmek isteyen Yâkub Beg, Çinliler ve Dunganlarla (Tungan) mücadeleye girişti ve onları 1870'te Urumçi'den uzaklaştırdı. Bir yıl sonra, Rusların işgal ettiği Kulca dışında bütün Doğu Türkistan onun egemenliğine girecekti.",
  kaynak:"yakub-beg (TDV)" },

{ t:"1871-06-01", b:"Ruslar Kulca'yı işgal etti — Yâkub Beg dışında kalan tek bölge", tur:"isgal", onem:3, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal","toprak-kaybi"],
  yer_id:"Gulca (Yining)",
  d:"1871'de Ruslar Kulca'yı (İli) işgal etti; Yâkub Beg bu bölge dışında bütün Doğu Türkistan'ı egemenliği altına aldı. Kulca meselesi bundan sonra on yıl boyunca Rusya ile Çin arasında bir sınır anlaşmazlığı olarak sürecektir.",
  kaynak:"yakub-beg (TDV) — ay YAKLAŞIK" },

{ t:"1872-01-01", b:"Kâşgar elçilik heyeti İstanbul'a geldi — Abdülaziz'e biat", tur:"diplomasi", onem:4, dunya:3, kapsam:"dis",
  etiket:["diplomasi","din","siyaset"],
  yer_id:"Kaşgar",
  d:"Yâkub Beg, 1872'de Sultan Abdülaziz'e yeğeni Seyyid Yâkub Han Kâşgarî başkanlığında bir elçilik heyeti göndererek yardım ve himaye istedi; kendisine biat ettiğini bildirip Kâşgar Hanlığı'nın Osmanlı toprağı gibi kabul edilmesini, askerî malzeme ve uzman subay talep etti. Padişahın emriyle bir askerî heyet ve malzeme Hindistan üzerinden Doğu Türkistan'a gönderildi; yapılan törenle Yâkub Beg'e Emîr unvanı verildi.",
  kaynak:"yakub-beg + kasgar (TDV)" },

{ t:"1872-06-08", b:"Rusya ile ticaret antlaşması imzalandı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","diplomasi","ticaret"],
  yer_id:"Kaşgar",
  d:"Yâkub Beg konumunu sağlamlaştırmak için 8 Haziran 1872'de Rus Çarlığı ile bir ticaret antlaşması imzaladı. Bu, kurduğu devletin bir büyük güç tarafından fiilen tanınması demekti.",
  kaynak:"yakub-beg (TDV)" },

{ t:"1872-09-01", b:"Hutbe Sultan Abdülaziz adına okundu, paralara adı yazıldı", tur:"din", onem:4, dunya:2, kapsam:"dis",
  etiket:["din","siyaset","diplomasi"],
  yer_id:"Kaşgar",
  d:"1872'den itibaren Kâşgar'da ve diğer yerlerde hutbeler Padişah Abdülaziz adına okundu; Yâkub Beg Osmanlı bayrağını göndere çektirdi ve bastırdığı altın ve gümüş paralara Osmanlı padişahının adını yazdırdı. Hutbe ve sikke, İslâm hukukunda hükümranlığın iki alâmetidir; ikisinin de İstanbul'a bağlanması, Osmanlı hilâfetinin Tarım havzasına kadar uzandığı tek dönemdir.",
  kaynak:"kasgar (TDV) — ay YAKLAŞIK, kaynak '1872'den itibaren' diyor" },

{ t:"1874-02-02", b:"Hindistan'daki İngiliz idaresiyle antlaşma imzalandı", tur:"antlasma", onem:3, dunya:2, kapsam:"dis",
  etiket:["antlasma","diplomasi"],
  yer_id:"Kaşgar",
  d:"Yâkub Beg 2 Şubat 1874'te Hindistan'daki İngiliz koloni idaresiyle bir antlaşma imzaladı; böylece kurduğu devlet İngiltere, Rusya ve Osmanlı Devleti tarafından resmen tanınmış oldu. Üç imparatorluğun aynı anda tanıdığı bu küçük devlet, Büyük Oyun'un Orta Asya'daki en kısa ömürlü aktörüdür.",
  kaynak:"yakub-beg (TDV)" },

{ t:"1875-01-01", b:"Emirliğin babadan oğula geçmesi kabul edildi", tur:"idari", onem:2, dunya:1, kapsam:"dis",
  etiket:["idari","siyaset","hanedan"],
  yer_id:"Kaşgar",
  d:"1875'ten itibaren Kâşgar emirliğinin babadan oğula geçmesi kabul edildi. II. Abdülhamid'in tahta çıkması üzerine Yâkub Beg, Seyyid Yâkub Han'ı bir defa daha İstanbul'a gönderip yeni taleplerde bulundu; fakat bu girişimler iki yıl sonra ölümüyle yarım kaldı.",
  kaynak:"kasgar + yakub-beg (TDV)" },

{ t:"1877-05-16", b:"Çin ordusu Turfan'ı ele geçirdi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","toprak-kaybi"],
  yer_id:"Turfan",
  d:"Çin'in Mançu hükümetinin 1877 baharında General Zuo Zongtang ve General Liu Cintang kumandasında yolladığı ordu Kumul ve Urumçi'yi işgal edip Kâşgar'a doğru ilerledi; Aksu etrafındaki Davançıng Geçidi civarında şiddetli çarpışmalar oldu. Sayıca üstün düşman karşısında geri çekilmek zorunda kalan Yâkub Beg antlaşma teklifi gönderdi. Çinliler 16 Mayıs 1877'de Turfan'ı da ele geçirdiler.",
  kaynak:"yakub-beg (TDV)" },

{ t:"1877-05-29", b:"YÂKUB BEG VEFAT ETTİ — cevabı öğrenemeden", tur:"olum", onem:5, dunya:3, kapsam:"ic",
  etiket:["olum","siyaset","hanedan"],
  yer_id:"Kaşgar",
  d:"Yâkub Beg, antlaşma teklifinin kabul edilip edilmediğini öğrenemeden 29 Mayıs 1877'de vefat etti; bazı kaynaklarda bir suikasta kurban gittiği, Hoten Valisi Niyaz Beg ile yardımcısı Aşur Beg'in yaverine para vererek zehirlettiği kaydedilir. Ölümü üzerine oğulları arasında taht kavgaları ve beylerin kendilerini hükümdar ilân etmeleriyle başlayan iç savaş, Kâşgar Hanlığı'nın çöküşüne zemin hazırladı.",
  kaynak:"yakub-beg (TDV)" },

{ t:"1877-12-16", b:"Çin orduları Kâşgar'a girdi", tur:"isgal", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","isgal","son"],
  yer_id:"Kaşgar",
  d:"Kısa süren iç çatışmanın ardından duruma hâkim olan oğlu Beg Kulı Beg ertesi yıl Hokand'a kaçtı; Çin orduları 16 Aralık 1877'de Kâşgar'ı işgal etti. Esir alınan Türk subayları İngilizlere teslim edildi ve Yâkub Beg'in Kâşgar merkezli devleti sona erdi. ⚠️ Doğu Türkistan'ın tamamının fethi (16 Mart 1878) kronoloji_cin.js'te ZATEN var.",
  kaynak:"yakub-beg (TDV)" },

{ t:"1884-11-18", b:"Çin Doğu Türkistan (Sinkiang) vilâyetini kurdu", tur:"idari", onem:5, dunya:2, kapsam:"dis",
  etiket:["idari","siyaset"],
  yer_id:"Ürümçi (Dihua)",
  d:"1884'te Çin yönetimi bölgede Doğu Türkistan (Sinkiang) vilâyetini kurdu; ancak vilâyet üzerindeki kontrolü tam değildi. Tarım havzası böylece hanlık statüsünden bir Çin eyaletine dönüştürüldü ve bu idarî çerçeve bugüne kadar sürdü.",
  kaynak:"kasgar (TDV) — gün YAKLAŞIK, kaynak yalnız yıl veriyor" },

// === H) OYRAT / KALMUK / CUNGAR HANLIĞI (1416-1758) ve İDİL KALMUKLARI =====
// 🔴 TDV'de `cungarlar` slug'ı ÖLÜ (302). Konu `kalmuklar` maddesindedir ve
// Cungar Hanlığı orada "Doğu Kalmukları" başlığı altında anlatılır.

{ t:"1416-01-02", b:"TOGAN HAN bütün Oyratları tek devlet otoritesi altında topladı", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["kurulus","hanedan","askeri"],
  yer_id:"Cungarya havzası",
  d:"Yuan hânedanının 1368'de yıkılıp Moğolların Çin'den çıkarılmasından sonra Moğolistan'a dönenler Oyratlar (Batı Moğolları) ve Halhalar (Doğu Moğolları) olmak üzere ikiye ayrılmıştı. Oyrat Hanlığı'nın kurucusu Togan (Togon) Han 1416'da bütün Oyratları bir devlet otoritesi altında topladı. Cengiz Han döneminde ordunun sol kanadını teşkil ettikleri için Moğolca sol el anlamındaki cengi gar denilen bu topluluğun adı sonradan Cungar'a dönüşmüştür.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1418-01-01", b:"Togan Han Çağatay Hanı Muhammed Veys'i üç defa yendi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","toprak-kazanc"],
  yer_id:"Gulca (Yining)",
  d:"Oyratları birleştiren Togan Han önce müslüman Çağatay Hanlığı'na saldırdı ve Muhammed Veys Han'ı üç defa üst üste mağlûp ederek topraklarının büyük bir kısmını ele geçirdi. Oyrat-müslüman mücadelesi bu seferlerle başlar ve üç yüz kırk yıl sürer.",
  kaynak:"kalmuklar (TDV) — yıl YAKLAŞIK, kaynak Togan Han dönemini verip gün vermiyor" },

{ t:"1434-01-01", b:"Togan Han, Halha lideri Arugtay'ı öldürdü", tur:"savas", onem:2, dunya:1, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Karakurum",
  d:"Togan Han 1434'te devamlı savaştıkları Halhaların lideri Arugtay'ı öldürdüyse de bu halka baş eğdiremedi. Batı ve Doğu Moğolları arasındaki bu bölünme, iki asır boyunca bozkırın en belirleyici siyasî hattı olacaktı.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1439-01-01", b:"ESEN TAYŞİ bütün Moğolları birleştirdi — Oyrat Hanlığı zirvede", tur:"hukumdar", onem:5, dunya:3, kapsam:"ic",
  etiket:["hukumdar","askeri","siyaset"],
  yer_id:"Cungarya havzası",
  d:"Togan Han'ın yerine 1439'da geçen oğlu Esen Tayşi, babasının başaramadığını başardı ve bütün Moğolları yönetimi altında birleştirerek Oyrat Hanlığı'nı Çin İmparatorluğu karşısındaki en büyük güç hâline getirdi. Devletin sınırları Sinkiang ve Çin Seddi'nden Balkaş gölüne kadar uzandı.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1447-01-01", b:"Esen Tayşi Özbek Hanı Ebülhayr'ı vergiye bağladı, İli Kazaklarını sürdü", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","goc"],
  yer_id:"Almatı (Vernıy)",
  d:"1447'de Türkistan'a dönen Esen Tayşi, Özbek Hanı Ebülhayr Han'ı vergiye bağladı; arkasından İli Kazaklarını yurtlarından atıp akınlarını Batı Sibirya'nın Tobol ve İşim bölgelerine kadar uzattı. Bu baskı, Ebülhayr'a tâbi olmayan boyların kuzeye çekilerek Kazak adını almasının arka planındaki askerî sebeptir.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1604-01-01", b:"Torgut beyi Horluk Hârizm'i istilâ etti — batıya göç başladı", tur:"savas", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","goc","isgal"],
  yer_id:"Köhne Ürgenç (Gürgenç)",
  d:"Esen Tayşi'den sonra Oyrat-Halha savaşları yeniden başlamış ve Moğol birliği dağılmıştı. 1604'te Horluk adlı bir Torgut beyi önce Hârizm'i istilâ etti; ardından 1618'den 1632'ye kadar süren göç dalgaları hâlinde kendi ulusunu batıya, İdil boylarına taşıdı. Bu, Moğol kökenli bir halkın Avrupa'ya en yakın noktaya yerleşmesiyle sonuçlanan son büyük bozkır göçüdür.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1632-01-01", b:"İDİL KALMUKLARI HANLIĞI kuruldu", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["kurulus","goc","siyaset"],
  yer_id:"Kalmuk bozkırı",
  d:"On dört yıl süren göç dalgalarının sonunda Horluk, İdil (Volga) boylarında İdil Kalmukları Hanlığı'nı kurdu (1632). Yaklaşık aynı yıllarda doğuda, Cungarya'da Hara Hula adlı başka bir bey eski Oyrat Hanlığı'nı yeniden canlandırdı. Böylece tek bir halk, biri Hazar'ın kuzeyinde biri Tanrı dağlarının kuzeyinde iki ayrı devlete bölündü.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1634-01-02", b:"Hara Hula Cungarya'da Oyrat Hanlığı'nı yeniden canlandırdı", tur:"kurulus", onem:5, dunya:3, kapsam:"ic",
  etiket:["kurulus","siyaset","hanedan"],
  yer_id:"Cungarya havzası",
  d:"İdil Kalmukları batıya göçerken doğuda Hara Hula, Cungarya'da eski Oyrat Hanlığı'nı yeniden kurdu; bu devlet Cungar Hanlığı adıyla tanınacaktır. Bir buçuk asır boyunca Orta Asya'nın en güçlü askerî gücü olacak ve Kazak, Kırgız, Yarkent ve Halha topraklarını sırayla hâkimiyeti altına alacaktır.",
  kaynak:"kalmuklar (TDV) + devletler.js cungar künyesi (1634-1758)" },

{ t:"1697-01-01", b:"Sevang Rabdan tahta çıktı — Taşkent dahil bütün Orta Asya", tur:"hukumdar", onem:4, dunya:3, kapsam:"ic",
  etiket:["hukumdar","toprak-kazanc","askeri"],
  yer_id:"Cungarya havzası",
  d:"Galdan Han'ın ardından gelen Sevang Rabdan (1697-1727) ve Galdan Sereng (1727-1745), Taşkent dahil bütün Orta Asya'yı ele geçirerek devleti en geniş sınırlarına ulaştırdılar. Cungar Hanlığı bu dönemde Kazak cüzlerini, Tarım havzasını ve Halha Moğollarını aynı anda denetleyen tek güçtü.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1724-01-01", b:"İdil Kalmukları Rusya'ya bağlandı", tur:"toprak-kaybi", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","toprak-kaybi"],
  yer_id:"Kalmuk bozkırı",
  d:"Batıdaki İdil Kalmukları, sırasıyla hüküm süren Horluk, Dayçin, Bunçuk ve Ayuke'nin hanlıkları sırasında bir yandan Kırım Hanlığı bir yandan Rus Çarlığı ile savaşarak bağımsızlıklarını korudularsa da 1724'te Rusya'ya bağlandılar. Doksan iki yıllık bağımsız Kalmuk hanlığı böylece sona erdi.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1727-01-01", b:"Galdan Sereng tahta çıktı", tur:"hukumdar", onem:3, dunya:2, kapsam:"ic",
  etiket:["hukumdar","hanedan"],
  yer_id:"Cungarya havzası",
  d:"Sevang Rabdan'ın ardından Galdan Sereng (1727-1745) hanlığı devraldı ve devletin en geniş sınırlarını korudu. Onun ölümünden sonra çıkan dâhilî kargaşalık, Çin'in on üç yıl içinde Cungar egemenliğine son vermesinin fırsatı olacaktır.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1758-01-01", b:"CUNGAR HALKININ İMHASI — 500.000'den fazla kişi kılıçtan geçirildi", tur:"son", onem:5, dunya:4, kapsam:"dis",
  etiket:["askeri","son","sosyal"],
  yer_id:"Cungarya havzası",
  d:"Galdan Sereng'in ardından ortaya çıkan iç kargaşalıktan faydalanan Çin İmparatoru Çienlong birkaç yıl içinde Cungar egemenliğine son verdi ve asker-sivil 500.000'den fazla kişiyi kılıçtan geçirerek Cungar halkını ortadan kaldırdı (1758). Bu, bir devletin yıkılması değil bir halkın imhasıdır ve Orta Asya'nın demografik haritasını kalıcı olarak değiştirmiştir. ⚠️ Seferlerin Çin tarafı kronoloji_cin.js'te 1755-01-01 tarihiyle ZATEN var.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1770-01-01", b:"UBAŞİ GÖÇÜ — 300.000 Kalmuk yola çıktı, 70.000'i vardı", tur:"sosyal", onem:5, dunya:3, kapsam:"dis",
  etiket:["sosyal","goc","askeri"],
  yer_id:"Kalmuk bozkırı",
  d:"İdil Kalmuklarının 300.000 kadarı, 1770'te siyasî bir oyuna getirilen son hanları Ubaşi'nin önderliğinde eski yurtları Cungarya'ya geri gönderildi. Hareket felâkete dönüştü: yola çıkan Kalmuklar müslüman Kazaklar tarafından Balkaş gölü çevresindeki çöllere sürülerek çetin tabiat şartlarında imha edildi; sadece 70.000 kadarı Cungarya'ya ulaşabildi ve artık buranın hâkimi olan Çinlilerden mülteci muamelesi gördü.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1774-01-01", b:"Geride kalan Kalmuklar Pugaçev ayaklanmasına katıldı", tur:"isyan", onem:3, dunya:1, kapsam:"dis",
  etiket:["isyan","askeri","sosyal"],
  yer_id:"Kalmuk bozkırı",
  d:"Ubaşi'nin göçünden sonra geride kalan Kalmuklar Pugaçev ayaklanmasına (1773-1774) katıldılar. Ayaklanmanın bastırılmasının ardından sayıları 50.000 civarına düşen Kalmukların yerleşim merkezlerine 10 kilometreden fazla yaklaşmaları yasaklandı.",
  kaynak:"kalmuklar (TDV)" },

{ t:"1890-01-01", b:"Sart Kalmuklar İslâm'a girip Isık Göl civarına yerleşti", tur:"din", onem:2, dunya:1, kapsam:"ic",
  etiket:["din","goc","sosyal"],
  yer_id:"",
  d:"XIX. yüzyılın sonlarında Kalmukların Sünnî Müslümanlığı benimseyen küçük bir kısmı Orta Asya'ya göç etti ve Isık Göl civarına yerleşerek Sart (sert) Kalmuk adıyla tanındı. Bir Budist halkın küçük bir kolunun İslâmlaşması, üç asırlık Kalmuk-Türk mücadelesinin en beklenmedik sonucudur. ⚠️ Isık Göl için yerleşim kaydı yok.",
  kaynak:"kalmuklar (TDV) — yıl YAKLAŞIK, kaynak 'XIX. yüzyılın sonlarında' diyor" },

{ t:"1920-11-04", b:"Astarhan yöresinde özerk Kalmuk bölgesi kuruldu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","siyaset"],
  yer_id:"Astrahan",
  d:"Aşağı İdil bozkırlarında göçebe hayat süren İdil Kalmukları, 4 Kasım 1920'de Astarhan yöresinde Rusya'ya tâbi özerk bir Kalmuk bölgesi (oblast) kurulması için izin aldılar. Üç yüz yıl önce Cungarya'dan gelen göçün varış noktası, böylece bir idarî birim olarak tescillendi.",
  kaynak:"kalmuklar (TDV)" },

// === I) TÜRKMEN BOYLARI (1314-1884) ========================================
// devletler.js `turkmen` künyesi: Türkmen Aşiret Konfederasyonları
// (Yomut, Teke, Salur, Göklen, Eymir), 1600-1884.
// ⚠️ Külliyatta "Türkmen" geçen 38 maddenin çoğu AKKOYUNLU/KARAKOYUNLU
// Türkmenleridir; Hazar ötesi Türkmenleri için ölçülen kapsama ~4 maddeydi.

{ t:"1314-01-01", b:"Ersarı Bay, Şeyh Şeref'e Muînü'l-mürîd'i yazdırdı", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","din","edebiyat"],
  yer_id:"Köhne Ürgenç (Gürgenç)",
  d:"Hazar'ın doğu kıyısında ve Balhan dağları yöresinde bulunan Ersarı oymağına adını veren Ersarı Bay, XIV. yüzyılda yaşamış ve Ürgençli Şeyh Şeref'e 713 (1314) yılında dinî meselelere dair Türkçe Muînü'l-mürîd adlı bir eser yazdırmıştır. Bu, Türkmen boylarının kendi Türkçeleriyle dinî metin ürettiklerini gösteren en erken tarihli kayıttır.",
  kaynak:"turkmenler (TDV, madde: turkmenler — içerik okundu, 2026-08-22)" },

{ t:"1500-01-02", b:"Mangışlak Salurları İçki ve Taşkı diye ikiye ayrıldı", tur:"sosyal", onem:3, dunya:1, kapsam:"ic",
  etiket:["sosyal","siyaset"],
  yer_id:"Mangışlak",
  d:"XVI. yüzyılın başlarında Mangışlak yarımadasındaki Türkmenlerin pek çoğu Salur boyuna mensuptu ve İçki (iç) Salur ile Taşkı (dış) Salur adlarıyla iki kola ayrılmıştı. İçki Salurlar yarımadanın kıyı kesiminde, Taşkı Salurlar Hârizm'den gelen ana yol üzerindeydi; Taşkı Salur, Teke, Sarık ve Yomut oymakları tarafından temsil ediliyordu. Bugünkü Türkmen boy haritasının çekirdeği bu ayrımdır.",
  kaynak:"turkmenler (TDV) — yıl YAKLAŞIK, kaynak 'XVI. yüzyılın başlarında' diyor" },

{ t:"1560-01-03", b:"Nogay akınları Teke ve Yomutları Küren dağına göçürdü", tur:"sosyal", onem:3, dunya:1, kapsam:"dis",
  etiket:["sosyal","goc","askeri"],
  yer_id:"Kızılarvat",
  d:"XVI. yüzyılın ikinci yarısının ortalarında Emba suyu kıyılarında oturan ve kendilerine Nogay da denilen Mangıtların akınlarına dayanamayan Teke ve Yomutlar, Küçük Balhan ile Kızılarvat ortasındaki Küren dağı çevresine göç etti. Türkmen boylarının Mangışlak'tan güneye kayışı bu akınlarla başlar.",
  kaynak:"turkmenler (TDV) — yıl YAKLAŞIK, kaynak 'XVI. yüzyılın ikinci yarısının ortalarında' diyor" },

{ t:"1575-01-01", b:"CEYHUN YATAK DEĞİŞTİRDİ — bütün Türkmenlerin ekonomisi darbe yedi", tur:"iktisat", onem:4, dunya:2, kapsam:"ic",
  etiket:["ekonomi","sosyal","cografya"],
  yer_id:"Köhne Ürgenç (Gürgenç)",
  d:"1575-1578 yılları arasında Ceyhun (Amuderya) yeniden yatak değiştirerek Hazar yerine Aral gölüne dökülmeye başladı. Irmak boyunda oturan Adaklı Hızır Eli, Ali Eli ve Teveciler bundan doğrudan etkilendi ve kaynağın ifadesiyle bütün Türkmenlerin ekonomik hayatı darbe yedi. Bir nehrin yatağını değiştirmesi, bir savaş kadar belirleyici bir tarihî olaydır.",
  kaynak:"turkmenler (TDV)" },

{ t:"1600-01-02", b:"Şah Abbas, Eymir beyi Ali Yâr'ı Esterâbâd valiliğine tayin etti", tur:"idari", onem:3, dunya:1, kapsam:"dis",
  etiket:["idari","diplomasi","siyaset"],
  yer_id:"Esterâbâd (Gürgân)",
  d:"Etrek ve Gürgen çayları boylarında yaşayan Eymir ve Salurlara Safevî ve Yaka Türkmeni adı verilirdi. Safevî Hükümdarı Şah Abbas, hem Türkmen akınlarını durdurmak hem de Esterâbâd'ın Özbeklerin eline geçmesini önlemek için Eymirlerin beyi Ali Yâr'ı han unvanıyla Esterâbâd valiliğine tayin etti. Bir boy beyinin imparatorluk valisi yapılması, Safevîlerin bozkır sınırını yönetme yöntemidir.",
  kaynak:"turkmenler (TDV) — yıl YAKLAŞIK, kaynak Şah Abbas dönemini işaret ediyor" },

{ t:"1639-01-01", b:"Kalmuk akınları Mangışlak'ı Türkmen yurdu olmaktan çıkardı", tur:"sosyal", onem:5, dunya:2, kapsam:"dis",
  etiket:["sosyal","goc","askeri"],
  yer_id:"Mangışlak",
  d:"1639'da İdil ağzında oturan Kalmukların akınları sonucu Mangışlak'taki diğer Türkmenler de Balhan taraflarına geldi. Böylece Mangışlak, yedi asır sonra bir Türkmen yurdu olma niteliğini kaybetti. Esen Eli topluluğu Kalmuklara tâbi olarak yarımadada kaldı; Kalmuklar onlardan bir zümreyi XVIII. yüzyılda Kuzey Kafkasya'ya göçürdü ve bunlar Stavropol Türkmenleri adıyla varlıklarını bugüne kadar sürdürdü.",
  kaynak:"turkmenler (TDV)" },

{ t:"1750-01-01", b:"Yomutlar Esterâbâd'da Oklu'ların yerini aldı, Kaçarlara destek verdi", tur:"siyaset", onem:3, dunya:2, kapsam:"dis",
  etiket:["siyaset","askeri","hanedan"],
  yer_id:"Esterâbâd (Gürgân)",
  d:"XVIII. yüzyılda Esterâbâd bölgesinde Oklu'ların yerini Salur boyundan gelen Yomutlar aldı; bunlar Afşarlar ve Zendlerle mücadelelerinde Kaçarlara yardım ettiler. İranlı bir tarihçiye göre Kaçar Devleti'nin kurucusu Ağa Muhammed Şah'ın annesi, Yomutların başbuğu Begenç'in kızıydı. İran'da yeni bir hânedanın kuruluşunda Türkmen boylarının payı budur.",
  kaynak:"turkmenler (TDV) — yıl YAKLAŞIK, kaynak 'XVIII. yüzyılda' diyor" },

{ t:"1819-01-01", b:"MURAVYEV LİSTESİ — Türkmen nüfusu 285.000 çadır sayıldı", tur:"sosyal", onem:3, dunya:1, kapsam:"dis",
  etiket:["sosyal","bilim","ekonomi"],
  yer_id:"Krasnovodsk (Türkmenbaşı)",
  d:"1819'da düzenlenen Muravyev listesine göre Esen Eli 8000, Göklenler 40.000 çadır; Salur'a mensup oymaklardan Teke 50.000, Salur 4000, Ersarı 100.000, Yomut 40.000, Sarık 20.000, Sakar 20.000 çadır gösterilmiştir. Toplam 285.000 çadırlık Türkmen nüfusunun 237.000'i (yüzde 83'ü) Salur boyuna mensuptu. Bu, Türkmen boylarının ilk sistematik sayımıdır.",
  kaynak:"turkmenler (TDV)" },

{ t:"1824-01-02", b:"Teke ve Salurlar Hîve hanlarından yeni Merv'i aldı", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kazanc"],
  yer_id:"Merv (Mari)",
  d:"XIX. yüzyıl başlarında Hîve Hanlığı'nın Kungratların eline geçmesi, Buhara Hanlığı ile İran şahlığının zayıflaması Türkmenlere daha fazla hareket serbestliği verdi. 1824'te Teke ve Salurlar, Hîve hanlarına ait yeni Merv'i zaptederek ele geçirdikleri esirleri Buhara hanına gönderdiler. Tekeler bundan sonra tek başlarına gittikçe kuvvetlendi.",
  kaynak:"turkmenler (TDV)" },

{ t:"1855-06-01", b:"Kuşid Han Serahs'ta Hîve hanını yendi — han savaş meydanında kaldı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Serahs",
  d:"Teke başbuğu Kuşid Han, Hîve Hükümdarı Muhammed Emin Han'ı 1855'te Serahs yakınında ağır bir yenilgiye uğrattı ve Hîve hanı savaş meydanında kaldı. Kuşid Han, yeni Hîve hükümdarı Abdullah Han'ı da aynı âkıbete uğrattı. ⚠️ Olayın Hîve/Özbek tarafı kronoloji_ozbek.js'te ZATEN var; bu madde TÜRKMEN tarafıdır — kim yendi, niçin yendi.",
  kaynak:"turkmenler (TDV) — ay YAKLAŞIK" },

{ t:"1860-01-01", b:"Kuşid Han toplu Kaçar ordusuna karşı parlak zafer kazandı", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"Merv (Mari)",
  d:"Teke başbuğu Kuşid Han 1860'ta toplarla mücehhez Kaçar ordusuna karşı parlak bir zafer kazandı. Topsuz bir göçebe boyun modern topçuya sahip bir imparatorluk ordusunu yenmesi, Türkmen atlı taktiğinin son büyük başarısıdır; İran bir daha Merv'e yürümedi.",
  kaynak:"turkmenler (TDV)" },

{ t:"1863-01-01", b:"VÁMBÉRY LİSTESİ — nüfus 196.500 çadıra düşmüştü", tur:"sosyal", onem:2, dunya:1, kapsam:"dis",
  etiket:["sosyal","bilim"],
  yer_id:"Hîve",
  d:"Macar seyyah Vámbéry'nin 1863 tarihli listesine göre Türkmen nüfusu 196.500 çadırdı ve bunun 172.500'ü (yüzde 87'si) Salur boyundan çıkan oymaklardan oluşuyordu. Kırk dört yılda 285.000'den 196.500'e düşen bu sayı, savaşlar ve göçlerin boy nüfusları üzerindeki etkisini gösterir.",
  kaynak:"turkmenler (TDV)" },

{ t:"1873-06-10", b:"Rusların Hîve'yi alması Türkmenlerin dengesini bozdu", tur:"isgal", onem:4, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal","siyaset"],
  yer_id:"Hîve",
  d:"Türkmen boyları, Hîve ile Buhara ile İran arasındaki boşlukta hareket serbestliği bulmuşlardı; 1873'te Rusların Hîve Hanlığı'nı egemenlikleri altına alması bu dengeyi bozdu. Bundan sonra Türkmenlerin karşısında bölgesel hanlıklar değil doğrudan bir imparatorluk ordusu vardı.",
  kaynak:"turkmenler (TDV) — gün YAKLAŞIK; Hîve'nin düşüşü Rus/Özbek dosyalarının konusudur" },

{ t:"1879-09-01", b:"BİRİNCİ GÖKTEPE — Türkmenler Rus ordusunu ağır yenilgiye uğrattı", tur:"savas", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","savas"],
  yer_id:"",
  d:"Türkmenlerin çarın hâkimiyetini kabul etme teklifini şiddetle reddetmesi üzerine 1879'da harekete geçen Ruslar, Göktepe'de ağır bir yenilgiye uğradı (Eylül 1879). Bu, XIX. yüzyılda bir Rus ordusunun Orta Asya'da aldığı en ağır yenilgidir. ⚠️ Göktepe için proje yerleşim kümesinde nokta YOK; yer_id boş bırakıldı, uydurulmadı.",
  kaynak:"turkmenler (TDV) — gün YAKLAŞIK, kaynak 'Eylül 1879' diyor" },

{ t:"1881-01-01", b:"Ruslar Türkmen elini imparatorluklarına kattı", tur:"son", onem:5, dunya:3, kapsam:"dis",
  etiket:["askeri","isgal","toprak-kaybi"],
  yer_id:"Aşkabad",
  d:"Göktepe'deki başarı uzun sürmedi: Ruslar 1881'de Türkmen elini imparatorluklarına kattılar. Beş asırlık boy konfederasyonlarının bağımsız hareket devri böylece kapandı; Merv 1884'te teslim olunca Rus Türkistanı'nın güney sınırı Afganistan'a dayanacaktı.",
  kaynak:"turkmenler (TDV)" }

,

// === J) KÜLTÜR · BİLİM · EDEBİYAT — ayrı bölüm, ve NİÇİN AYRI ==============
// 🔴 ÖLÇÜM: ilk yazımdan sonra konu dağılımı ölçüldü ve askerî/siyasî kova
// %87 çıktı; şartname §2 kabaca %40 hedefliyor. Sebebi ölçüldü: bu dokuz
// kimliğin kaynakları (TDV kazan-hanligi · nogaylar · sibir-hanligi ·
// kazaklar · kalmuklar · turkmenler) ezici çoğunlukla SİYASÎ-ASKERÎ anlatı
// veriyor; göçebe hanlıklardan geriye yazılı kültür mirası az kalmıştır ve
// kaynak susuyorsa madde UYDURULMAZ (§1). Aşağıdaki altı kalem, kaynağın
// GERÇEKTEN tarih verdiği kültür/bilim olaylarıdır — sayıyı yükseltmek için
// değil, kaynak konuştuğu için yazılmıştır.
// ⚠️ Yine de dağılım hedefin çok altında kalıyor; bu bir EKSİKLİK olarak
// raporlanmıştır, kapatılmış gibi gösterilmemiştir.

{ t:"1250-01-01", b:"Kâşgar'da Mesûdiye Medresesi yaptırıldı", tur:"bilim", onem:3, dunya:1, kapsam:"ic",
  etiket:["bilim","kultur","mimari"],
  yer_id:"Kaşgar",
  d:"Cengiz Han ülkesini oğulları arasında taksim edince Kâşgar Çağatay Han'ın payına düşmüş, ancak idaresi Buhara Emîri Mahmud Yalavaç'a ve ardından oğlu Mesud Yalavaç'a bırakılmıştı. Şehirdeki Mesûdiye Medresesi Mesud Yalavaç tarafından yaptırılmıştır. Moğol idaresi altında Tarım havzasında kurulan bu medrese, bölgenin İslâmî ilim geleneğinin sürdüğünün delilidir. ⚠️ Tarih YAKLAŞIKTIR: kaynak yıl vermiyor, Mesud Yalavaç'ın valilik dönemine tarihlenmiştir.",
  kaynak:"kasgar (TDV, madde: kasgar — içerik okundu, 2026-08-22); YIL YAKLAŞIK, kaynak gün/yıl vermiyor" },

{ t:"1733-01-01", b:"MAHTUMKULU doğdu — Türkmen edebî dilinin kurucusu", tur:"kultur", onem:5, dunya:2, kapsam:"ic",
  etiket:["kultur","edebiyat","din"],
  yer_id:"Esterâbâd (Gürgân)",
  d:"Göklen uruğunun Gerkez kabilesinden Mahtumkulu, genellikle kabul edildiğine göre 1146'da (1733) Etrek ile Gürgen nehirleri arasındaki Hacıgovşan'da doğdu. Babası Dövletmemet Azadi de şairdi. Buhara'daki Kükeltaş ve Hîve'deki Şirgazi medreselerinde okudu, Şirgazi'de talebe halifesi oldu ve orada Türkmenler için bir bölüm açıldı. Kendisinden öncekiler gibi klasik Türk edebiyat diliyle değil canlı Türkmen şivesiyle yazarak Türkmen edebî dilinin doğuşunu sağladı.",
  kaynak:"mahtumkulu (TDV, madde: mahtumkulu — içerik okundu, 2026-08-22); doğum yılı kaynağın kendi ifadesiyle 'genellikle kabul edildiğine göre'" },

{ t:"1783-01-02", b:"Mahtumkulu'nun ölümü — beş yüz şiir, tek bir halkın sesi", tur:"olum", onem:4, dunya:1, kapsam:"ic",
  etiket:["kultur","edebiyat","olum"],
  yer_id:"Esterâbâd (Gürgân)",
  d:"Şairin 1197'den (1783) sonraki bir tarihte öldüğü sanılmaktadır; tesbit edilen şiirlerinin sayısı 500'ü bulur. Türkmen kabileleri arasında kanlı çarpışmaların yaşandığı, İran Şahlığı ve Hîve Hanlığı'nın Türkmenlerle mücadeleye giriştiği bir dönemde yerinden edilen, esir pazarlarında satılan halkına yanmış ve Türkmen birliğini sağlamayı en büyük ideal saymıştır. XVIII. yüzyıl Türkmen sosyal hayatının analizi onun şiirlerinden yapılabilmektedir. ⚠️ Ölüm tarihi kesin değildir, kaynak '1783'ten sonra' diyor.",
  kaynak:"mahtumkulu (TDV) — TARİH YAKLAŞIK, kaynak kesin yıl vermiyor" },

{ t:"1842-01-01", b:"Mahtumkulu'nun şiirlerinin yayımlanması başladı", tur:"kultur", onem:3, dunya:1, kapsam:"ic",
  etiket:["kultur","edebiyat","bilim"],
  yer_id:"Aşkabad",
  d:"Mahtumkulu'nun şiirlerinin yayımlanması işi 1842'de başladı ve XX. yüzyılın başlarından itibaren hakkındaki araştırmalarla birlikte sürdü; Taşkent (1907), Astırhan (1911), Bakü ve Aşkābâd baskıları bunu izledi. Divanının 100'den fazla nüshası bulunmaktadır. Sözlü bir boy edebiyatının matbu bir millî edebiyata dönüşmesi bu yayınlarla başlar.",
  kaynak:"mahtumkulu (TDV)" },

{ t:"1856-01-01", b:"Çokan Velihanoğlu MANAS DESTANI'nın bir varyantını derledi", tur:"kultur", onem:4, dunya:2, kapsam:"ic",
  etiket:["kultur","edebiyat","bilim"],
  yer_id:"",
  d:"Dünyanın en hacimli destanı olan Manas'ı bilim dünyasına ilk duyuran, Cengiz Han soyundan gelen Kazak bilgini Çokan Velihanoğlu'dur; 1856'da Kırgızistan'da yaptığı gezi sırasında destanın bir varyantını derledi. Destanın 840 civarında Yenisey Kırgızlarının Uygur ve Çinlilerle savaşları sırasında oluşmaya başladığı, XVI-XVII. yüzyıllarda Kırgız-Kalmuk savaşlarıyla zenginleştiği kabul edilir. ⚠️ Derlemenin yapıldığı yer için birebir yerleşim kaydı yok.",
  kaynak:"manas-destani (TDV, madde: manas-destani — içerik okundu, 2026-08-22)" },

{ t:"1885-01-01", b:"Radloff Manas derlemelerini Petersburg'da yayımladı", tur:"bilim", onem:3, dunya:1, kapsam:"dis",
  etiket:["bilim","kultur","edebiyat"],
  yer_id:"",
  d:"W. Radloff, 1862, 1864 ve 1869 yıllarındaki Kırgızistan gezilerinde Manas'tan parçalar derleyip yazıya geçirdi ve bunları Proben der Volkslitteratur der türkischen Stämme adlı eserinin V. cildinde (St. Petersburg 1885) Kırgızca, Rusça ve Almanca olarak yayımladı. Velihanoğlu'nun 1861'de Rus Coğrafya Derneği dergisinde çıkardığı Kökütey Han'ın Aşı bölümüyle birlikte bu yayın, Kırgız sözlü geleneğinin dünya bilimine girişidir.",
  kaynak:"manas-destani (TDV)" }

];

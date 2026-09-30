// =====================================================================
// İNGİLTERE — ÇOK KÜNYELİ KRONOLOJİ (KRONO-ATLANTIK-B-0929, 29 Eylül 2026)
// Oturum: KRONO-ATLANTIK-B-0929 · koordinatör: YILDIRIM BAYEZIT
// =====================================================================
// ⚠️ index.html'e ve arac/paketle.py'ye BAĞLANMADI — bağlamak koordinatörün işi.
//    Bağlanana kadar sitede görünmez (normal).
//
// ── BAĞLAMA YOLU (ORTAK §4.1) ─────────────────────────────────────
// window.KRONOLOJI_COK_INGILTERE → app.js cokTarafliKronolojiEkle: her madde
// `devlet:` / `devletler:[...]` künyelerine EKLENİR (ezmez; t+b tekrarı atlanır).
// Mevcut kronoloji_ingiltere.js'e (270 madde) madde EKLENMEDİ.
//
// ── KAPSAM: YALNIZ BOŞLUK ─────────────────────────────────────────
// Bu dosya Osmanlı-İngiltere ekseninin (şartname §④) veride HİÇ bulunmayan
// kalemlerini taşır. Taranıp YAZILMAYANLAR (zaten var — denetim/ARAC-KRONO-
// ATLANTIK-B-0929-MUKERRER.py):
//   Kal'a-i Sultâniyye 1809 (olaylar_ek5) · St. Petersburg Protokolü 1826
//   (kronoloji_cok_yunanistan) · 1914-1918 cephe olayları: Basra, Kûtülamâre,
//   Sykes-Picot, Bağdat, Kudüs, Hayfa, Şam (kronoloji_cok_1dunya_B) · İstanbul
//   işgali 1918/1920 ve Mudanya 1922 (olaylar_ek, olaylar_ek5) · Tanca'nın
//   tahliyesi 1684 (kronoloji_cok_fas).
// Çekirdekte (olaylar_ek2) Osmanlı gözünden duran Balta Limanı burada İNGİLİZ
// gözünden yazıldı (ORTAK §5.2: o devletin gözünden, kapsam:"dis").
//
// ── KÜNYE ─────────────────────────────────────────────────────────
//   ingiltere  1066-01-01 → 1923-10-29 · hollanda 1581-07-26 → 1923-10-29
//   rusya      1547-01-16 → 1917-03-15   (devletler.js'ten okundu)
//
// ── KAYNAK ────────────────────────────────────────────────────────
// TDV İslâm Ansiklopedisi (gövdeleri okundu, önbellek
//   denetim/KRONO-ATLANTIK-B-0929-tdv-onbellek/): ingiltere · hollanda ·
//   pasarofca-antlasmasi · ebukir · misir · baltalimani-muahedesi ·
//   akabe-meselesi
// TDV'nin kapsamadığı tek gün: Britanya'nın Rusya'ya savaş ilânı (Britannica).
// 🔴 OKUMADIĞIM ESERE ATIF YAZMADIM. Wikipedia kullanılmadı.
//
// ── TAKVİM ────────────────────────────────────────────────────────
// İngiltere 1752'ye kadar Jülyen takvimdeydi. TDV'den gelen günler OLDUĞU GİBİ
// yazıldı (VERI-YAPISI §TAKVİM); `gun:` alanı takvimi söyler. Çevrilmedi.
// =====================================================================

window.KRONOLOJI_COK_INGILTERE = [

{ t:"1601-01-01", b:"Barton ahidnâmeyi yenilettirdi — Felemenk gemileri İngiliz bayrağı altında", tur:"antlasma",
  onem:3, dunya:1, kapsam:"dis", etiket:["antlasma","ekonomi","diplomasi","konu-diplomasi","konu-ekonomi"],
  devlet:"ingiltere", devletler:["ingiltere","hollanda"], yer_id:"İstanbul",
  gun:"Aralık 1601 (TDV `hollanda` ay verir, gün yok)",
  d:"Türkçeyi iyi bilen ve sarayın güvenini kazanmış İngiliz elçisi Edward Barton, İngilizlere verilen ahidnâmeyi yenilettirdi. Yeni metne, dört Felemenk eyaletine ait gemilerin İngiliz bayrağı ve konsoloslarının himayesinde Osmanlı limanlarına girip çıkması maddesi de kondu; böylece Hollanda ticareti Fransız bayrağından İngiliz bayrağına geçti.",
  kaynak:"TDV `ingiltere`: Barton'un ahidnâmeyi \"1601 yılında yeniletmeyi başarmıştır\" · TDV `hollanda`: Felemenk gemilerinin İngiliz bayrağı altında girip çıkması hükmünü \"Aralık 1601 tarihli ahidnâmeye koydurmaya muvaffak oldular\"",
  ic_not_d:"Tek belge, iki tanıklık: TDV `ingiltere` yıl, TDV `hollanda` ay verir. Aralık 1601 İngiltere için Jülyen, Osmanlı kaydı hicrîdir; gün yazılmadı." },

{ t:"1718-07-21", b:"Pasarofça Antlaşması — İngiltere ve Hollanda elçileri arabuluculuk yaptı", tur:"diplomasi",
  onem:3, dunya:3, kapsam:"dis", etiket:["diplomasi","antlasma","konu-diplomasi"],
  devlet:"ingiltere", devletler:["ingiltere","hollanda"], yer_id:"",
  gun:"21 Temmuz 1718 = 22 Şâban 1130 (TDV `pasarofca-antlasmasi`)",
  yer_kon:[44.62,21.19],
  d:"Osmanlı Devleti'nin Avusturya ve Venedik ile barış görüşmelerinde İngiltere'yi fevkalâde elçi Robert Sutton ile İstanbul elçisi Stanyan, Hollanda'yı Jacobus Colyer aracı devlet olarak temsil etti. Antlaşmayla Belgrad ve Banat Avusturya'ya geçti. Karlofça'dan sonra iki deniz devletinin ikinci büyük arabuluculuğudur.",
  kaynak:"TDV `pasarofca-antlasmasi`: \"Aracı devletlerden İngiltere’yi fevkalâde elçi Robert Sutton ile İstanbul’daki İngiliz elçisi Stanyan, Hollanda’yı elçi Jacobus Colyer\" temsil etti; imza \"22 Şâban 1130 (21 Temmuz 1718)\" · TDV `ingiltere`: 1718 Pasarofça'da İngiliz elçilerinin ara buluculuğu",
  ic_not_d:"dunya:3 — Pasarofça'nın öteki kronoloji dosyalarındaki değeriyle AYNI. İngiltere 1718'de Jülyen takvimdeydi (İngiliz kaydında 10 Temmuz 1718); gün TDV'den, hicrî karşılığıyla." },

{ t:"1801-03-08", b:"Abercromby'nin ordusu Ebûkīr'e çıktı — Mısır'daki Fransız işgaline karşı", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas","ittifak","konu-askeri"],
  devlet:"ingiltere", yer_id:"",
  gun:"8 Mart 1801 çıkarma · 21 Mart 1801 Menou'nun yenilgisi (TDV `ebukir`)",
  yer_kon:[31.3167,30.0667],
  d:"Osmanlı Devleti ile Ocak 1799'da kurulan ittifak çerçevesinde Amiral Abercromby komutasındaki İngiliz ordusu Ebûkīr'e çıktı ve 21 Mart'ta Fransız komutan Menou'yu yendi. Osmanlı-İngiliz ortak harekâtı karşısında Fransızlar Ağustos 1801'de Mısır'ı terk etmek zorunda kaldı.",
  kaynak:"TDV `ebukir`: \"Amiral Abercromby idaresindeki İngiliz ordusu, 8 Mart 1801’de buradan karaya çıktıktan sonra 21 Mart’ta Fransız kumandanı Menou’yu mağlûp etti\" · TDV `misir`: Fransızların \"Ağustos 1801’de Mısır’ı terketmek zorunda kaldılar\"",
  ic_not_d:"Ebûkīr yerleşim listesinde YOK (yer_yama.js'te eksik_nokta olarak zaten istenmiş) — yer_id boş. Aynı gün çekirdekte 'Kavalalı Mehmed Ali Mısır'a çıktı' maddesi var (olaylar_ek4, kronoloji_misir); bu madde İngiliz ordusunun kendisidir, tekrarı değil." },

{ t:"1825-01-01", b:"Levant Company lağvedildi — Osmanlı pazarı bütün İngiliz tüccarlarına açıldı", tur:"ekonomi",
  onem:3, dunya:1, kapsam:"dis", etiket:["ekonomi","son","konu-ekonomi"],
  devlet:"ingiltere", yer_id:"Londra",
  gun:"1825 (TDV yıl verir)",
  d:"1581'den beri Osmanlı ticaretini tekelinde tutan ve İstanbul elçilerini de uzun süre besleyen Levant Company, serbest ticaret eğiliminin güçlenmesiyle kaldırıldı; Osmanlı pazarı bütün İngiliz tüccarlarına açıldı. Bu, 1838 Balta Limanı'na giden yolun ilk adımıdır.",
  kaynak:"TDV `ingiltere`: \"ekonomide beliren liberal eğilimler çerçevesinde 1825’te Levant Şirketi lağvedilmiş ve Osmanlı pazarının bütün İngiliz tüccarlara açılması öngörülmüştü\"" },

{ t:"1838-08-16", b:"Balta Limanı Ticaret Antlaşması — İngiltere'ye tekelsiz serbest ticaret", tur:"antlasma",
  onem:4, dunya:3, kapsam:"dis", etiket:["antlasma","ekonomi","konu-ekonomi","konu-diplomasi"],
  devlet:"ingiltere", yer_id:"İstanbul",
  gun:"16 Ağustos 1838 (TDV `baltalimani-muahedesi`)",
  d:"Mehmed Ali Paşa'ya karşı İngiliz desteğine muhtaç olan Bâbıâli, Reşid Paşa'nın Baltalimanı'ndaki yalısında gizlice yürütülen görüşmelerden sonra İngiltere ile ticaret antlaşması imzaladı. Yed-i vâhid denen devlet tekelleri kaldırıldı ve İngiliz tüccarı iç ticarette ayrıcalıklı konuma geldi; aynı şartlar Kasım'da Fransa'ya da tanındı. Antlaşma İngiltere'nin Osmanlı pazarındaki üstünlüğünün hukukî temeli oldu.",
  kaynak:"TDV `baltalimani-muahedesi`: \"16 Ağustos 1838 tarihinde yapılan Osmanlı-İngiliz ticaret muahedesi\"; İngiliz tarafında Bulwer ve Başkonsolos Cartwright; Fransızların \"25 Kasım 1838’de\" aynı şartlarla imzası; 1828'den beri yed-i vâhid tekelleri · TDV `ingiltere`: \"İngilizler’i bile şaşırtan acele bir kararla 1838’de\"",
  ic_not_d:"Çekirdekte Osmanlı gözünden aynı gün madde var (olaylar_ek2 'Balta Limanı Ticaret Antlaşması') — bu madde İngiltere künyesi içindir. dunya:3 önerim; çekirdek maddede dunya alanı yok, çapraz sınanamadı." },

{ t:"1854-03-28", b:"Britanya Rusya'ya savaş ilân etti — Kırım Savaşı'na Osmanlı'nın yanında girdi", tur:"savas",
  onem:5, dunya:3, kapsam:"dis", etiket:["savas","ittifak","konu-askeri","konu-diplomasi"],
  devlet:"ingiltere", devletler:["ingiltere","rusya"], yer_id:"Londra",
  gun:"28 Mart 1854 (Britannica 'Crimean War')",
  d:"Rusya'nın Tuna prensliklerinden çekilmesini isteyen İngiliz-Fransız ültimatomu cevapsız kalınca Britanya ve Fransa Rusya'ya savaş ilân etti. Osmanlı-Rus savaşı böylece bir Avrupa savaşına dönüştü; Britanya 1815'ten sonra bir Avrupa devletiyle girdiği tek doğrudan savaşa Osmanlı'nın müttefiki olarak girdi.",
  kaynak:"Britannica, 'Crimean War': \"On March 28 Britain and France declared war on Russia\" · TDV `ingiltere`: İngiltere'nin 1815'ten beri \"Kırım Savaşı hariç\" bir Avrupa devletiyle doğrudan savaşmadığı; İngiltere ve Fransa'nın bu savaşta Osmanlı ile beraber hareket ettiği",
  ic_not_d:"kronoloji_ingiltere.js'teki 1853-10-04 maddesi 'Britanya Osmanlı'nın yanında yer aldı' diyordu; Britanya'nın savaşa FİİLEN girdiği gün budur (DUZELTME.md İ-18). Çekirdekte 1854-03-12 İngiltere-Fransa-Osmanlı ittifak antlaşması (olaylar_ek5) ayrı olaydır." },

{ t:"1906-05-03", b:"Akabe meselesi — İngiltere Sînâ'nın boşaltılması için ültimatom verdi", tur:"kriz",
  onem:3, dunya:1, kapsam:"dis", etiket:["kriz","diplomasi","konu-diplomasi","konu-askeri"],
  devlet:"ingiltere", yer_id:"",
  gun:"3 Mayıs 1906 ültimatom · 1 Ekim 1906 sınır itilâfnâmesi (TDV `akabe-meselesi`)",
  yer_kon:[29.527,35.008],
  d:"II. Abdülhamid döneminde Osmanlı birliklerinin Akabe'den sonra Sînâ yarımadasındaki Tâbe'yi de alması üzerine İngiltere, Avrupa'nın desteğini de alarak on gün içinde Sînâ'nın boşaltılmasını isteyen bir ültimatom verdi. Bâbıâli geri adım attı; 1 Ekim 1906 itilâfnâmesiyle Tâbe Mısır'a, Akabe Osmanlı Devleti'ne bırakıldı ve sınır Refah'ta son bulan düz bir hatla çizildi.",
  kaynak:"TDV `akabe-meselesi`: İngiltere'nin \"3 Mayıs 1906’da verdiği ültimatomla, on gün içinde Sînâ yarımadasının boşaltılmasını istedi\"; \"1 Ekim 1906’da imzalanan ve sekiz maddeden meydana gelen itilâfnâmeyle yeni sınır tesbit edildi\"",
  ic_not_d:"Akabe yerleşim listesinde YOK — yer_id boş. 1906-10-01 Refah sınır maddesi kronoloji_sinir_ortadogu.js'te zaten var; bu madde krizin İngiliz tarafıdır." },

];

// =====================================================================
// PAKET 0069 — BIHAC-NOKTA KRONOLOJİSİ (19 Eylül 2026, 1.MURAT sevki,
// işçi BIHAC-ENKLAV-0069)
// Yama: denetim/YAMA-BIHAC-NOKTA-0919.json · rapor: denetim/BIHAC-ENKLAV-0919.md
//
// NİÇİN: yerlesimler_ek29.js'e eklenen beş Una/Lika/Kordun noktasının
// (Ostrovica · Udbina · Gospić · Cetin · Drežnik) Osmanlı kırılmaları
// Değişmez 2 gereği ±30 günde KENDİ maddelerini ister. Ziştovi (1791-08-04)
// ve Cetin seçimi (1527-01-01) maddeleri zaten var, burada yazılmadı.
//
// 🔴 TARİH KAYNAKTAN, ÇOĞU YIL HASSASİYETİNDE: kaynak gün vermiyor →
//   YYYY-01-01 + kesinlik:"yil"; Udbina 1527 'potkraj svibnja' → AY.
// TAKVİM: yalnız yıl/ay — takvim sorunu doğmaz.
// AD ALANI (§7): data/olaylar_p0069.js → window.OLAYLAR_P0069
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// =====================================================================

window.OLAYLAR_P0069 = [

{ t:"1523-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Una vadisinde Ostrovica Kalesi'nin fethi",
  gun:"1523",
  yer:"Ostrovica (Kulen Vakuf yakını), Una vadisi", yer_id:"Ostrovica (Stara Ostrovica, Kulen Vakuf)",
  kisiler:"",
  d:"Frankapan ve öteki Hırvat soylularının elindeki Ostrovica, Una vadisinin kuzey ve güney kesimlerini bağlayan sarp bir sırtın üzerindeydi. 1523'te Osmanlı idaresine geçti ve 1878'e dek Osmanlı garnizonu taşıdı. Kale asıl önemini Karlofça'dan (1699) sonra kazandı: Venedik ve Avusturya sınırına yakınlığı yüzünden genişletildi, Stara Ostrovica kapetanlığının merkezi oldu; Kulen Vakuf kasabası XVIII. yüzyıl başında onun eteğinde kuruldu.",
  ic_not_gun:"USK Kültür Mirasını Koruma Enstitüsü yalnız yıl veriyor ('Pod osmansku vlast je došao 1523. godine') → 1523-01-01 + kesinlik:'yil'. Aralık 1523 günü yalnız ansiklopedik olmayan sitelerde görüldü, yazılmadı.",
  kaynak:"Zavod za zaštitu kulturnog naslijeđa USK, 'Ostrovica – stari grad' · HE kulen-vakuf",
  duygu:["⚔️"] },

{ t:"1527-05-01", kesinlik:"ay", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Udbina ve Krbava kalelerinin fethi — Lika Osmanlı idaresine giriyor",
  gun:"Mayıs 1527 sonu",
  yer:"Udbina, Krbava ovası (Lika)", yer_id:"Udbina",
  kisiler:"Bosna paşası · İvan Karlović",
  d:"Krbava ovası 1524'te boşalmış, Udbina'da yalnız Karlović'in garnizonu kalmıştı. Karlović Nisan 1527'de kale önünde son bir zafer kazandı, ama Mayıs sonunda Udbina, Mrsinj ve Komić kaleleriyle birlikte Bosna paşasının eline geçti. Aynı yıl Gospić yöresi Senković ağalarına verildi. Lika ve Krbava bundan sonra Obrovac merkezli, 1580'de Kırka adını alan sancağın parçası oldu.",
  ic_not_gun:"HE udbina: 'već potkraj svibnja grad je … postao plijenom bosanskoga paše' — AY (Mayıs sonu), gün yok → 1527-05-01 + kesinlik:'ay'. Gospić kaydı HE gospic'e göre yalnız '1527' (YIL) → 1527-01-01; iki kırılma 120 gün ayrık, bu kaynak hassasiyetinin sonucudur.",
  kaynak:"HE udbina · HE gospic · kirka",
  duygu:["⚔️"] },

{ t:"1592-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Drežnik ve Drežnik županiyasının kesin olarak Osmanlı idaresine geçişi",
  gun:"1592",
  yer:"Drežnik (Korana vadisi, Bihaç'ın batısı)", yer_id:"Drežnik (Drežnik Grad)",
  kisiler:"",
  d:"1323'ten beri Frankapanların elindeki Drežnik 1578'de geçici olarak Osmanlılarca tutulmuştu. 1592'de kale ve bütün Drežnik županiyası kesin olarak Osmanlı idaresine girdi; aynı yıl Bihaç da düştü. Drežnik XVIII. yüzyılda Ostrožac kapetanlığına bağlıydı.",
  ic_not_gun:"HE dreznik-grad: 'konačno došli 1592.' — YIL → 1592-01-01 + kesinlik:'yil'.",
  kaynak:"HE dreznik-grad",
  duygu:["⚔️"] },

{ t:"1636-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Cetin Kalesi'nin Osmanlılarca alınması",
  gun:"1636",
  yer:"Cetin (Cetingrad), Kordun", yer_id:"Cetin (Cetingrad)",
  kisiler:"",
  d:"XVI. yüzyıl ortasından beri Slunj yöresinin Osmanlı'ya karşı savunmasında kilit kale olan Cetin, defalarca kuşatıldıktan sonra 1636'da Osmanlı idaresine geçti. Bu ilk Osmanlı dönemi iki yıl sürdü.",
  ic_not_gun:"HE cetingrad: 'pod njihovom vlašću bio je 1636–38.' — YIL → 1636-01-01 + kesinlik:'yil'.",
  kaynak:"HE cetingrad",
  duygu:["⚔️"] },

{ t:"1638-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","konu-askeri"],
  b:"Cetin Kalesi'nin Habsburg tarafına geri geçmesi",
  gun:"1638",
  yer:"Cetin (Cetingrad), Kordun", yer_id:"Cetin (Cetingrad)",
  kisiler:"",
  d:"1636'da Osmanlı eline geçen Cetin 1638'de yeniden Hırvat-Habsburg sınır savunmasına döndü ve 1670'e dek öyle kaldı.",
  ic_not_gun:"HE cetingrad 1636–38 aralığının bitişi — YIL → 1638-01-01 + kesinlik:'yil'.",
  kaynak:"HE cetingrad",
  duygu:["😔"] },

{ t:"1670-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Cetin'in yeniden Osmanlı kalesi olması",
  gun:"1670",
  yer:"Cetin (Cetingrad), Kordun", yer_id:"Cetin (Cetingrad)",
  kisiler:"",
  d:"Cetin 1670'te yeniden Osmanlı kalesi oldu ve XVIII. yüzyılda esaslı biçimde tahkim edildi: ortaçağ kalesi burçlu surlarla kuşatıldı. Kale 1790'a dek Bosna serhaddinin kuzeybatı ucunu tuttu.",
  ic_not_gun:"HE cetingrad: 'te od 1670. kada ponovno postaje osmanska utvrda' — YIL → 1670-01-01 + kesinlik:'yil'.",
  kaynak:"HE cetingrad",
  duygu:["⚔️"] },

{ t:"1689-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","konu-askeri"],
  b:"Lika ve Krbava'nın kaybı — Udbina ve Gospić Habsburg sınır kuvvetlerinin eline geçti",
  gun:"1689",
  yer:"Udbina, Gospić (Lika)", yer_id:"Udbina",
  kisiler:"Karlovac generali I. J. Herberstein",
  d:"Viyana bozgununun ardından süren savaşta Hırvat sınır birlikleri Karlovac generali Herberstein komutasında 1689'da Udbina'yı aldı; Gospić de aynı yıl Osmanlı idaresinden çıktı. 160 yıldan uzun süren Osmanlı Lika'sı sona erdi, boşalan yerler yeni Hırvat nüfusla iskân edildi ve Udbina Ziştovi barışına (1791) dek Osmanlı'ya karşı sınır savunmasının önemli bir kalesi oldu.",
  ic_not_gun:"HE udbina: 'Grad su 1689. oslobodile' · HE gospic: 'do 1689. bio pod osmanskom vlašću' — YIL → 1689-01-01 + kesinlik:'yil'.",
  kaynak:"HE udbina · HE gospic",
  duygu:["😔"] },

{ t:"1788-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","konu-askeri"],
  b:"Drežnik'in Avusturya'ca zaptı — Dubica Savaşı'nın batı cephesi",
  gun:"1788",
  yer:"Drežnik (Korana vadisi, Bihaç'ın batısı)", yer_id:"Drežnik (Drežnik Grad)",
  kisiler:"",
  d:"1788-1791 Osmanlı-Avusturya savaşında Habsburg kuvvetleri Bihaç'ın batısındaki Drežnik'i aldı. Ziştovi Antlaşması'nın 4. maddesiyle Drežnik ve Cetin Habsburg idaresinde kaldı ve bir daha Bosna'ya dönmedi.",
  ic_not_gun:"HE dreznik-grad: Osmanlı idaresi 'do 1788.' — YIL → 1788-01-01 + kesinlik:'yil'. ⚠️ ÇELİŞKİ: Korić 2016 (Prilozi za orijentalnu filologiju 65, n.104) Muvekkit'e dayanarak Cetingrad ve Drežnik'in zaptını 1790 olayları içinde anar. Yere özgü HE maddesi esas alındı.",
  kaynak:"HE dreznik-grad · Korić 2016 (Prilozi za orijentalnu filologiju 65)",
  duygu:["😔"] },

{ t:"1790-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","konu-askeri"],
  b:"Cetin Kalesi'nin Avusturya'ca zaptı",
  gun:"1790",
  yer:"Cetin (Cetingrad), Kordun", yer_id:"Cetin (Cetingrad)",
  kisiler:"",
  d:"1790'da Habsburg ordusu Cetin'e, Bužim ve Velika Kladuša'ya saldırdı ve Cetin'i aldı. Bosna valisinin ilan ettiği seferberlik ve karşı taarruz kaleyi geri alamadı; Ziştovi Antlaşması'nın 4. maddesi Cetin'i Habsburg'a bıraktı. Bosnalı serhadliler kaleyi 1809'da ve 1813'te kısa baskınlarla yeniden ele geçirdiler.",
  ic_not_gun:"HE cetingrad: 'Habsburška vojska zauzima ga 1790.' · Korić 2016 n.102 (Bašeskija, Ljetopis: 'U ovoj godini (1790) su Austrijanci zauzeli tvrđavu Cetin') — YIL → 1790-01-01 + kesinlik:'yil'.",
  kaynak:"HE cetingrad · Korić 2016 (Prilozi za orijentalnu filologiju 65) · zistovi-antlasmasi",
  duygu:["😔"] }

];

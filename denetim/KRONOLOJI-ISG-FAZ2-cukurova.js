// denetim/KRONOLOJI-ISG-FAZ2-cukurova.js — FAZ 2 ③④ Çukurova + Güneydoğu
// ---------------------------------------------------------------------------
// Oturum: NEHİR SÜRTÜNME · 6 Eylül 2026 · sevk: oturumlar/FAZ2-MILLI-MUCADELE.md
// 🔴 BU DOSYA `data/olaylar_ek23.js`E İNECEK — `kronoloji*.js`E DEĞİL.
//    Sebep ölçüldü (denetim/OLCUM-ISG-FAZ2-0905.md ③): `Değişmez 2i`nin
//    evreni `glob('data/olaylar*.js')`; kuyruğa yazılan madde denetime
//    GÖRÜNMEZ ve açığı KAPATMAZ.
// 🔴 ALTI MADDE BİR AÇIK KIRILMAYI KAPATIYOR (simülasyonda ölçüldü,
//    `2i` 9 → 3): 1919-02-22 · 1921-12-23 · 1921-12-25 · 1921-12-27 ·
//    1922-01-03 · 1922-01-05.
// 🟢 TAKVİM: TDV bu maddelerde Milâdî; bilinen çapalarla sınandı
//    (20 Ekim 1921 · 11 Şubat 1920 · 5 Kasım 1919), 13 günlük sapma YOK.
// ---------------------------------------------------------------------------
window.OLAYLAR_ISG_FAZ2_CUKUROVA = [

  { t: "1918-12-06",
    b: "Kilis'in İngilizler tarafından işgali",
    k: "savas", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Kilis", yer_id: "Kilis",
    kaynak: "kilis",
    d: "Mondros Mütarekesi'nin ardından İtilâf kuvvetleri Güneydoğu'ya girdi ve Kilis İngiliz işgaline uğradı. İşgal bir yıldan fazla sürdü; İngilizler şehri 29 Ekim 1919'da Fransızlara devretti. TDV'nin kaydı şöyledir: \"Kilis, Mondros Mütarekesi'nin ardından 6 Aralık 1918 tarihinde İngilizler tarafından işgal edildi.\"" },

  { t: "1918-12-17",
    b: "Fransız kuvvetlerinin Mersin'e çıkarma yapması",
    k: "savas", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Mersin", yer_id: "Mersin",
    kaynak: "mersin",
    d: "Fransız askerleri Çukurova işgalini denizden başlattı; Mersin limanına yapılan çıkarma, bölgenin iç kesimlerine yürüyüşün de başlangıcı oldu. TDV'nin kaydı şöyledir: \"I. Dünya Savaşı sonunda 17 Aralık 1918'de Fransız askerleri denizden Mersin'e çıkarma yapmaya başladı.\"" },

  { t: "1918-12-17",
    b: "Tarsus'un Fransız işgaline uğraması",
    k: "savas", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Tarsus", yer_id: "Tarsus",
    kaynak: "tarsus",
    d: "Mersin'e çıkan Fransız kuvvetleri aynı gün Tarsus'a ulaştı. TDV'nin kaydı şöyledir: \"Tarsus … 17 Aralık 1918'de Fransız işgaline ve Ermeni çetelerinin zulmüne uğradı.\"" },

  { t: "1918-12-17",
    b: "Antep'e İngiliz kuvvetlerinin girmesi",
    k: "savas", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Antep", yer_id: "Antep",
    kaynak: "gaziantep",
    d: "Güneydoğu'da işgalin ilk safhası İngiliz safhasıdır; Antep bir yıla yakın İngiliz idaresinde kaldı ve 5 Kasım 1919'da Fransızlara devredildi. TDV'nin kaydı şöyledir: \"I. Dünya Savaşı'ndan sonra ilk olarak 17 Aralık 1918'de İngilizler şehre girdiler.\"" },

  { t: "1918-12-24",
    b: "Adana'nın Fransızlar tarafından işgali",
    k: "savas", onem: 3, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Adana", yer_id: "Adana",
    kaynak: "adana",
    d: "Çukurova'nın merkezi olan Adana, Mersin ve Tarsus'un ardından işgal edildi ve Fransız idaresinin merkezi oldu. TDV'nin kaydı şöyledir: \"I. Dünya Savaşı sonunda 24 Aralık 1918'de Fransızlar tarafından işgal edilen Adana, halkın şiddetli mukavemeti neticesinde iki yıllık Fransız hâkimiyetinden sonra, 1921'de Ankara İtilâfnâmesi ile Türkiye'ye teslim edilmiş…\"" },

  { t: "1919-01-01",
    b: "Urfa'nın İngilizler tarafından işgali",
    k: "savas", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Urfa", yer_id: "Urfa",
    gun: "Mart 1919",
    kesinlik: "ay",
    kaynak: "sanliurfa",
    d: "Kaynak ay veriyor, gün vermiyor; tarih alanı `§4` gereği yıl hassasiyetinde yazıldı ve ay bu metinde duruyor. TDV'nin kaydı şöyledir: \"Urfa Mart 1919'da İngilizler, yedi ay kadar sonra da Fransızlar tarafından işgal edildi.\"" },

  { t: "1919-02-22",
    b: "Maraş'ın İngilizler tarafından işgali",
    k: "savas", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kayip"],
    yer: "Maraş", yer_id: "Maraş",
    kaynak: "kahramanmaras",
    d: "Maraş, I. Dünya Savaşı sonrası Fransız nüfuz bölgesinde bırakılmıştı; buna rağmen şehre önce İngiliz kuvvetleri girdi ve sekiz ay sonra idareyi Fransızlara devretti. TDV'nin kaydı şöyledir: \"Mondros Mütarekesi'nin ardından İngilizler 22 Şubat 1919'da şehri işgal ettiler.\"" },

  { t: "1919-10-29",
    b: "Maraş'ın İngilizlerden Fransızlara devredilmesi",
    k: "siyaset", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal"],
    yer: "Maraş", yer_id: "Maraş",
    kaynak: "kahramanmaras",
    d: "İngiltere ile Fransa arasındaki anlaşma gereği Güneydoğu'nun işgal idaresi el değiştirdi. TDV'nin kaydı şöyledir: \"İngiltere ile Fransa arasında yapılan antlaşma neticesinde Maraş ve çevresi Fransa'ya devredilince 29 Ekim 1919'da Fransızlar Maraş'a girdiler.\"" },

  { t: "1919-10-29",
    b: "Kilis'in İngilizlerden Fransızlara devredilmesi",
    k: "siyaset", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal"],
    yer: "Kilis", yer_id: "Kilis",
    kaynak: "kilis",
    d: "Aynı devir Kilis'te de gerçekleşti. TDV'nin kaydı şöyledir: \"Bir yıldan fazla bir süre devam eden bu işgalden sonra İngilizler burayı 29 Ekim 1919'da Fransız kuvvetlerine terkettiler.\"" },

  { t: "1919-11-05",
    b: "Antep'in İngilizlerden Fransızlara devredilmesi",
    k: "siyaset", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal"],
    yer: "Antep", yer_id: "Antep",
    kaynak: "gaziantep",
    d: "Antep'in devri Maraş ve Kilis'ten bir hafta sonra oldu. TDV'nin kaydı şöyledir: \"Yaklaşık bir yıl süren işgalin ardından Fransızlar ile yaptıkları anlaşma gereği burayı onlara terkettiler (5 Kasım 1919).\"" },

  { t: "1920-02-11",
    b: "Maraş'ın kurtuluşu — Fransızların şehri boşaltması",
    k: "savas", onem: 3, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Maraş", yer_id: "Maraş",
    kaynak: "kahramanmaras",
    d: "Yirmi iki gün süren şehir savaşının ardından Fransız kuvvetleri Maraş'ı boşalttı. Bu, Millî Mücadele'de bir şehrin halkın direnişiyle kurtarıldığı ilk vakadır; TBMM 5 Nisan 1925'te şehre kahramanlık unvanı verdi. TDV'nin kaydı şöyledir: \"Fransızlar 11 Şubat 1920'de şehri boşaltarak İslâhiye tarafına doğru çekilmeye başladılar.\"" },

  { t: "1920-04-10",
    b: "Urfa'nın kurtuluşu — Fransızların antlaşmayla çekilmesi",
    k: "savas", onem: 3, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Urfa", yer_id: "Urfa",
    kaynak: "sanliurfa",
    d: "7 Şubat 1920'de başlayan halk ayaklanması iki ay süren çarpışmalarla sonuçlandı ve Fransız kuvvetleri şehri antlaşma şartlarıyla boşalttı. TDV'nin kaydı şöyledir: \"7 Şubat 1920'de işgal güçlerine karşı halk ayaklandı. Çarpışmalar neticesinde 10 Nisan 1920'de Fransızlar antlaşma şartlarıyla Urfa'yı boşalttı.\"" },

  { t: "1921-12-23",
    b: "Kilis'in kurtuluşu",
    k: "savas", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Kilis", yer_id: "Kilis",
    kaynak: "kilis",
    d: "20 Ekim 1921 tarihli Ankara İtilâfnâmesi'nin ardından Fransızlar 7 Aralık'tan itibaren tahliyeye başladı ve tahliye 23 Aralık'ta tamamlandı. TDV'nin kaydı şöyledir: \"7 Aralık 1921'den itibaren Fransızlar Kilis'i tahliye etmeye başladılar. Nihayet 23 Aralık 1921'de Kilis'in kurtuluşu gerçekleşmiş oldu.\"" },

  { t: "1921-12-25",
    b: "Antep'in kurtuluşu — iki yıllık işgalin sonu",
    k: "savas", onem: 3, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Antep", yer_id: "Antep",
    kaynak: "gaziantep",
    d: "Antep halkı 1 Nisan 1920'den 7 Şubat 1921'e kadar Fransız kuvvetlerine karşı on ay direndi; TBMM 6 Şubat 1921'de şehre gazilik unvanı verdi ve şehir Gaziantep adıyla anılmaya başlandı. TDV'nin kaydı şöyledir: \"Fransızlar Ankara Antlaşması'nın ardından 25 Aralık 1921'de şehri boşalttılar ve Gaziantep iki yıl süren işgalden kurtuldu.\"" },

  { t: "1921-12-27",
    b: "Tarsus'un kurtuluşu",
    k: "savas", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Tarsus", yer_id: "Tarsus",
    kaynak: "tarsus",
    d: "Ankara İtilâfnâmesi'nin ardından Fransızlar Çukurova'yı şehir şehir boşalttı; Tarsus tahliye edilen ilk büyük merkezlerdendi. TDV'nin kaydı şöyledir: \"Fransızlar, Ankara Antlaşması'yla 27 Aralık 1921'de şehri boşalttılar.\"" },

  { t: "1922-01-03",
    b: "Mersin'in kurtuluşu",
    k: "savas", onem: 2, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Mersin", yer_id: "Mersin",
    kaynak: "mersin",
    d: "İşgalin denizden başladığı şehir, üç yıl bir ay sonra millî kuvvetlerin girmesiyle kurtuldu; son Fransız birliği ertesi gün ayrıldı. TDV'nin kaydı şöyledir: \"3 Ocak 1922'de millî kuvvetler Mersin'e girerek şehri kurtardı ve son Fransız kuvvetleri ertesi gün şehri terketti.\"" },

  { t: "1922-01-05",
    b: "Adana'nın kurtuluşu — Çukurova işgalinin sonu",
    k: "savas", onem: 3, dunya: 0, kapsam: "ic",
    etiket: ["isgal", "toprak-kazanc"],
    yer: "Adana", yer_id: "Adana",
    kaynak: "adana",
    d: "Ankara İtilâfnâmesi'nden iki buçuk ay sonra tamamlanan tahliyeyle Çukurova'daki Fransız işgali sona erdi. TDV'nin kaydı şöyledir: \"…1921'de Ankara İtilâfnâmesi ile Türkiye'ye teslim edilmiş ve 5 Ocak 1922'de Fransızlar, şehri, kendilerine yardımcı olan Ermeniler'le birlikte terketmişlerdir.\"" }

];

// ============================================================================
// KİŞİ KAYITLARI — VENEDİK (örnek: 2 kayıt)
// ============================================================================
// Şema: data/kisiler.js (KISILER) + her kayıtta `devlet`. Şartname gereği
// KISILER'e eklenmez. Henüz siteye bağlanmadı.
// Aynı iki kişinin KISILER'de eski, kısa kayıtları var (id: enrico-dandolo,
// caterina-cornaro); bu dosya onlara dokunmaz.
// ============================================================================
window.KISI_VENEDIK = [
  { id: "venedik-kisi-enrico-dandolo", devlet: "venedik", tur: "yabanci-hukumdar",
    ad: "Enrico Dandolo",
    f: "1107", ic_not_f: "dolayı (DBI 'intorno al 1107'; Barker 'around 1107')",
    t: "1205",
    donem: "yaklaşık 1107–1205 (dogelik 1192–1205)",
    dogum_yer: "Venedik",
    not: "Yaklaşık 85 yaşında Venedik dogesi seçildi. Görme yetisini seçilmeden yıllar önce yitirmişti; onu tanıyan Villehardouin bunu başından aldığı bir yaraya bağlar. Dördüncü Haçlı Seferi'nde Venedik filosunun başında İstanbul'a gitti. 1205'te hastalanıp öldü ve Ayasofya'ya gömüldü.",
    tartisma: "Bir Bizans imparatorunun onu kör ettirdiği rivayeti Novgorod anlatısında ve XIV. yüzyıl Venedik vakanüvisliğinde görülür; kanıtlanmış değildir. Dördüncü Haçlı Seferi'nin İstanbul'a dönmesindeki payı da tarihçiler arasında tartışmalıdır.",
    tarihciler: "Giorgio Cracco belgelere dayanarak 1172'de kör edildiği haberini reddeder ve görme kaybını 1178 ile 1183 arasına koyar; nedeni bilinmiyor.",
    kaynak: "G. Cracco, \"Dandolo, Enrico\", Dizionario Biografico degli Italiani c. 32 (1986) · Villehardouin, İng. çev. F. T. Marzials (1908) · J. W. Barker, The Medieval Review 04.08.03 (2004)" },

  { id: "venedik-kisi-caterina-cornaro", devlet: "venedik", tur: "yabanci-hukumdar",
    ad: "Caterina Cornaro (Corner)",
    f: "1454", ic_not_f: "ilk biyografı Colbertaldo'ya göre (DBI aktarımı)",
    t: "1510",
    donem: "1454–1510 (Kıbrıs kraliçesi 1472–1489)",
    dogum_yer: "Venedik",
    olum: "1510-07-10", ic_not_olum: "DBI: 9-10 Temmuz 1510 gecesi",
    olum_yer: "Venedik",
    olum_sebep: "günlükçü Sanudo'ya göre mide rahatsızlığı",
    baba: "Marco Corner",
    esler: ["II. Jacques (Giacomo) de Lusignan (1468'de vekâletle nikâh; 1472'de Kıbrıs'a gidiş)"],
    not: "Venedikli bir soylu ailenin kızıydı; Kıbrıs kralıyla evlendi, 1473'te dul kaldı. Taç onda kalsa da yönetim giderek Venedik görevlilerine geçti. 26 Şubat 1489'da adada San Marco sancağı çekildi; kendisine Asolo verildi.",
    tartisma: "Feragat resmen bir bağış olarak sunuldu. Oysa Venedik amiraline verilen 28 Ekim 1488 tarihli emir, ikna olmazsa kraliçenin zorla gemiye bindirilmesini söylüyordu.",
    kaynak: "F. Colasanti, \"Caterina Corner, regina di Cipro\", Dizionario Biografico degli Italiani c. 22 (1979) · TDV İslâm Ansiklopedisi, \"Kıbrıs\" (Işın Demirkent)" }
];

// YER YAMASI — KUZEY AFRİKA KRONOLOJİ oturumuna özel (M-1154, 23 Ağustos 2026)
// arac/yama_uygula.js OKUR. Anahtar: dosya + t + b (üçü birden).
// Kaynak dosya: data/kronoloji_kuzeyafrika.js (24 boş yer_id, 83 maddenin).
//
// ⚠️ 11/24 kayıt BİLEREK atlandı — kaynak (TDV) metninde konum hiç
// geçmiyor ve "kolayca başkent" tuzağına düşmemek için tahmin edilmedi
// (M-1154'ün kendi uyarısı). "Yeri gerçekten bilinmiyor" bir sonuçtur,
// koordinat uydurmaktan değerlidir.
// 🔴 ÖZEL UYARI: "Mansûre şehri kuruldu" maddesi (Tilimsan kuşatması
// karargâhı, Fas'ta) İÇİN havuzda "Mansûre" adında bir kayıt VAR ama o
// Mısır'daki el-Mansûra (31.04°K 31.38°D) — AYNI AD, FARKLI YER. Onun
// yerine en yakın gerçek nokta olan Tilimsan kullanıldı.

window.YER_YAMA_KUZAFR = [

// ---- (1) yer_id — havuzda VAR ----
{ dosya:"kronoloji_kuzeyafrika.js", t:"1216-01-01", b:"Tâze'de Muvahhid ordusuna zafer",
  yer_id:"Tâze (Taza)", kaynak:"girdi.py havuzu — Tâze (Taza) 34.21, -4.01" },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1255-01-01", b:"Fas yakınlarında ikinci büyük Muvahhid zaferi",
  yer_id:"Fas (Fez)", kaynak:"TDV metninde 'Fas yakınları' diye anılıyor — kaynak metninde açıkça anlatılan yer" },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1299-01-01", b:"Mansûre şehri kuruldu (Tilimsan kuşatması karargâhı)",
  yer_id:"Tilimsan", kaynak:"⚠️ havuzdaki 'Mansûre' (31.04,31.38) MISIR'daki el-Mansûra — FARKLI YER, kullanılmadı. Bu Mansûre Tilimsan kuşatma karargâhı, en yakın gerçek nokta Tilimsan (34.88,-1.32)" },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1564-01-01", b:"İspanyollar Bâdis'i ele geçirdi",
  yer_id:"Bâdis (Peñón de Vélez)", kaynak:"girdi.py havuzu — Bâdis (Peñón de Vélez) 35.1721, -4.3009" },

// ---- (2) eksik_nokta — yer BELLİ, havuzda YOK ----
{ dosya:"kronoloji_kuzeyafrika.js", t:"1275-09-08", b:"İsticce'de Kastilya ordusuna zafer (Endülüs seferi)",
  eksik_nokta:{ ad:"İsticce (Ecija)", enlem:37.5417, boylam:-5.0819,
    kaynak:"genel coğrafi bilgi (Ecija, İspanya şehir merkezi) — TDV `meriniler` yalnız isim veriyor, koordinat vermiyor; havuzda kayıt yok" } },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1340-10-30", b:"Rio Salado'da (Tarîf) Kastilya-Portekiz ittifakına yenilgi",
  eksik_nokta:{ ad:"Tarîf (Tarifa)", enlem:36.0128, boylam:-5.6076,
    kaynak:"genel coğrafi bilgi (Tarifa, İspanya — Rio Salado savaş alanı kasabanın hemen dışında) — TDV `meriniler` yalnız isim veriyor; havuzda kayıt yok" } },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1458-01-01", b:"Kasrüssagīr Portekizlilerin eline geçti",
  eksik_nokta:{ ad:"Kasrüssagīr (Ksar es-Seghir)", enlem:35.8494, boylam:-5.5667,
    kaynak:"genel coğrafi bilgi (Ksar es-Seghir, Fas kıyısı) — TDV `meriniler` yalnız isim veriyor; havuzda kayıt yok" } },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1578-08-04", b:"Vâdilmehâzin (Üç Kral) Savaşı — Portekiz Haçlı ordusu imha edildi",
  eksik_nokta:{ ad:"Vâdilmehâzin (Ksar el-Kebir / Alcácer Quibir)", enlem:35.0060, boylam:-5.9040,
    kaynak:"genel coğrafi bilgi (Ksar el-Kebir, Fas) — 1578'in kendi savaş alanı, bu coğrafyanın en önemli tek olayı; TDV `sadiler` koordinat vermiyor, havuzda kayıt yok. M-1048'de 'önemli eksik' diye zaten bildirilmişti" } },

// ---- (3) kapsam_genis — tek noktaya sığmaz ----
{ dosya:"kronoloji_kuzeyafrika.js", t:"1511-01-01", b:"Muhammed b. Abdurrahman es-Sa'dî Sûs'ta cihad emîri ilân edildi",
  kapsam_genis:true, not:"Sûs bir bölge (güney Fas), TDV hangi yerleşimde biat alındığını belirtmiyor; bölgesel olay, tek noktaya sığmıyor" },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1610-01-01", b:"Ülke Fas ve Merakeş emirlikleri olarak fiilen ikiye bölündü",
  kapsam_genis:true, not:"Bütün ülkenin ikiye bölünmesi — kuzey (Fas) ve güney (Merakeş) iki ayrı merkez, tek nokta yanlış olur" },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1580-01-01", b:"Osmanlı ordu teşkilâtı örnek alınarak reform",
  kapsam_genis:true, not:"Ülke çapında idari/askeri reform, tek yerleşime bağlı değil" },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1595-01-01", b:"Fransa, İngiltere, Hollanda ile ticarî ilişkiler kuruldu",
  kapsam_genis:true, not:"Üç ayrı Avrupa devletiyle çok limanlı ticari ilişki, tek noktaya sığmıyor" },

{ dosya:"kronoloji_kuzeyafrika.js", t:"1911-12-01", b:"Enver Bey direniş karargâhını üstlendi",
  kapsam_genis:true, not:"Kendi d: metnimiz 'Bingazi-Derne hattında karargâh' diyor — iki nokta arası bir cephe hattı, tek yerleşime indirgemek yanlış olur" },

];

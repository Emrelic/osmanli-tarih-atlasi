// ETİKET SÖZLÜĞÜ — KRONOLOJİ ŞEMASI oturumu, 2026-08-20.
//
// NİÇİN VAR: Emre büyük bir genişleme istedi — yabancı devletlerin
// kronolojileri Osmanlı derinliğinde, akademik kaynaklı, ÖNEM (1-5) ve
// KAPSAM (iç/dış) ekseniyle. Üç pilot oturum (HABSBURG · RUSYA · LEHİSTAN)
// bu şemayı kullanarak data/devletler.js'in `kronoloji:` dizilerini
// dolduracak. Bu dosya onların ortak sözlüğüdür — her biri kendi kafasına
// göre etiket/tur/önem üretirse dört ayrı taksonomi doğar ve hiçbiri
// aranabilir olmaz (CLAUDE.md §7 "ayrı dosya vermek ayrı ad alanı vermek
// değildir" dersinin sözlük tarafı).
//
// NE ÖLÇTÜM (2026-08-20, salt okuma, hiçbir data/*.js dosyası değiştirilmedi):
//   OLAYLAR (Osmanlı, 18 dosya, index.html'e bağlı) — 1223 madde
//     etiket:  ÇOK DEĞERLİ dizi · 1220/1223 dolu · 26 farklı değer
//     k:       TEK DEĞERLİ  · 1220/1223 dolu · 29 farklı değer — BAŞKA ALAN,
//              js/suzgec.js bunu gruplayıp süzüyor (KONU_GRUPLARI), etiket:'i
//              DEĞİL. İkisi karıştırılmasın (aşağıda §0).
//   DEVLETLER (data/devletler.js) — 431 devlet, 392'sinde kronoloji dolu,
//     toplam 1636 madde, alanlar YALNIZ {t, tur, b} — onem/kapsam/etiket/
//     kaynak/d alanlarının HİÇBİRİ bugün yok, pilotlar bunları YENİ ekleyecek.
//     tur: TEK DEĞERLİ, 17 farklı değer.
//
// NE ÖLÇMEDİM: coğrafya ve kişi eksenleri (ETIKETLEME.md §2'nin 3. ve 4.
// maddeleri) bu turun kapsamı dışında — koordinatörün görev tanımı yalnız
// konu (etiket), tur, önem, kapsam istedi.
//
// Ayrıntılı ölçüm ve normalize önerileri: denetim/BULGULAR-ETIKET.md
"use strict";

var ETIKET_SOZLUK = {

  // =========================================================================
  // §0 — İKİ AYRI EKSEN VAR, KARIŞTIRMA
  // =========================================================================
  // `k:` (OLAYLAR'da) ve `tur:` (DEVLETLER'de) AYNI İŞİ görür: bir maddeyi
  // TEK bir kutuya koyan BÖLÜNTÜ alanı. `etiket:` ise bir maddeye BİRDEN ÇOK
  // konu etiketi takan KESİŞİM alanı. Pilotlar DEVLETLER.kronoloji yazacağı
  // için ikisini de dolduracaklar: `tur:` (tek değer, aşağıdaki TUR sözlüğü)
  // + `etiket:` (dizi, aşağıdaki KONU/ŞEMSİYE sözlüğü).
  aciklama_ekseni: {
    tur:    "TEK DEĞER — bölüntü. Bu maddeyi HANGİ TÜRE koyarsın (bir tane).",
    etiket: "DİZİ — kesişim. Bu maddeye HANGİ ETİKETLER uyar (birden çok)."
  },

  // =========================================================================
  // §1 — TUR (bölüntü, DEVLETLER.kronoloji[].tur) — devletler.js'teki
  // 17 değerin GERÇEK dağılımı üzerine kuruldu, icat edilmedi.
  // =========================================================================
  tur: {
    "kurulus":       { ad: "Kuruluş",              kullanim: 358 },
    "son":           { ad: "Devletin sonu",         kullanim: 311 },
    "savas":         { ad: "Savaş",                 kullanim: 201 },
    "hukumdar":      { ad: "Hükümdar değişimi",     kullanim: 180 },
    "antlasma":      { ad: "Antlaşma",              kullanim: 141 },
    "toprak-kazanc": { ad: "Toprak kazancı",        kullanim: 94 },
    "toprak-kayip":  { ad: "Toprak kaybı",          kullanim: 92,
                        esanlam: ["kayip"] },  // 🔴 bkz §4 — 4 kayıt "kayip" yazıyor
    "bolunme":       { ad: "Bölünme",               kullanim: 70 },
    "isyan":         { ad: "İsyan / iç savaş",      kullanim: 48 },
    "isgal":         { ad: "İşgal",                 kullanim: 47 },
    "ittifak":       { ad: "İttifak",               kullanim: 35 },
    "birlesme":      { ad: "Birleşme",              kullanim: 25 },
    "vassal":        { ad: "Tâbiiyet başlangıcı/sonu", kullanim: 24 },
    "siyaset":       { ad: "Siyasî olay (genel)",   kullanim: 3 },
    "baskent":       { ad: "Başkent kuruluşu/taşınması", kullanim: 1 },
    // 🟡 "toprak" (2 kayıt) NORMALİZE EDİLMEDİ — bkz §4③, karar koordinatörde.
    "toprak-belirsiz": { ad: "Toprak/egemenlik statü değişimi (belirsiz yön)",
                          kullanim: 2, not: "eski değer: toprak — bkz BULGULAR-ETIKET.md §3" }
  },

  // =========================================================================
  // §2 — KONU (kesişim, DEVLETLER.kronoloji[].etiket VE OLAYLAR.etiket AYNI
  // SÖZLÜK) — OLAYLAR'daki 26 gerçek değer + Emre'nin istediği ama eksik
  // olan değerler (bkz BULGULAR-ETIKET.md §2 tablosu).
  // Her leaf'in TEK bir şemsiyesi var. YAZARKEN LEAF YAZILIR, şemsiye
  // ARANIRKEN türetilir (ETIKETLEME.md §3'teki coğrafya ağacıyla AYNI kural:
  // yaprak elle yazılır, ata otomatik eklenir — burada da öyle).
  // =========================================================================
  konu: {
    "savas":          { ad: "Savaş",                 semsiye: "askeri",  kullanim: 346 },
    "fetih":          { ad: "Fetih",                 semsiye: "askeri",  kullanim: 1 },
    "denizcilik":     { ad: "Denizcilik/donanma",    semsiye: "askeri",  kullanim: 11 },

    "siyaset":        { ad: "Siyaset",               semsiye: "siyasi",  kullanim: 284 },
    "diplomasi":      { ad: "Diplomasi",             semsiye: "siyasi",  kullanim: 151 },
    "antlasma":       { ad: "Antlaşma",              semsiye: "siyasi",  kullanim: 106 },
    "ittifak":        { ad: "İttifak",               semsiye: "siyasi",  kullanim: 37 },
    "saray":          { ad: "Saray/hanedan içi",     semsiye: "siyasi",  kullanim: 7 },

    "toprak-kazanc":  { ad: "Toprak kazancı",        semsiye: "toprak",  kullanim: 348,
                         esanlam: ["toprak-kazanci"] }, // 🔴 bkz §4① — 1 kayıt yazım hatası
    "toprak-kaybi":   { ad: "Toprak kaybı",          semsiye: "toprak",  kullanim: 204 },

    "ayaklanma":      { ad: "Ayaklanma/isyan",       semsiye: "icduzen", kullanim: 89,
                         esanlam: ["isyan"] },  // 🔴 bkz §4② — 3 kayıt "isyan" yazıyor,
                                                 // standart kullanım HEP "ayaklanma"
    "idari":          { ad: "İdarî düzenleme",       semsiye: "icduzen", kullanim: 11,
                         esanlam: ["idare"] },  // 🔴 bkz §4③ — 5 kayıt "idare" yazıyor
    "imar":           { ad: "İmar",                  semsiye: "icduzen", kullanim: 2 },
    "kanun":          { ad: "Kanun/hukuk",           semsiye: "icduzen", kullanim: 1 },
    "darbe":          { ad: "Darbe/tahttan indirme", semsiye: "icduzen", kullanim: 0,
                         not: "k: ekseninde VAR (9 kayıt) ama etiket: ekseninde YOK — "
                            + "bkz BULGULAR-ETIKET.md §5. Yeni maddelerde KULLANILABİLİR." },
    "ic-savas":       { ad: "İç savaş",              semsiye: "icduzen", kullanim: 0,
                         not: "HİÇ YOK — Emre'nin istediği ama sözlükte karşılığı olmayan "
                            + "TEK değer, bkz BULGULAR-ETIKET.md §2. YENİ." },

    "kultur-sanat":   { ad: "Kültür-sanat",          semsiye: "kultur",  kullanim: 77 },
    "mimari":         { ad: "Mimari",                semsiye: "kultur",  kullanim: 26 },
    "bilim":          { ad: "Bilim",                 semsiye: "kultur",  kullanim: 55 },
    "felsefe":        { ad: "Felsefe",               semsiye: "kultur",  kullanim: 1 },

    "ekonomi":        { ad: "Ekonomi",               semsiye: "iktisat", kullanim: 102 },

    "sosyoloji":      { ad: "Sosyal yapı",           semsiye: "sosyal",  kullanim: 13 },
    "spor":           { ad: "Spor",                  semsiye: "sosyal",  kullanim: 5 },

    "diger":          { ad: "Sınıflandırılmamış",    semsiye: "diger",   kullanim: 25 },
    "yikim":          { ad: "Yıkım/tahribat",         semsiye: "diger",   kullanim: 1,
                         not: "tek örnek, hangi şemsiyeye ait belirsiz — koordinatör kararı "
                            + "bekliyor, bkz BULGULAR-ETIKET.md §3" }
  },

  // =========================================================================
  // §3 — ŞEMSİYELER — Emre'nin "ana şemsiyeler" isteğinin karşılığı.
  // js/suzgec.js'teki KONU_GRUPLARI ile AYNI 7 kimliği (askeri, siyasi,
  // icduzen, kultur, iktisat, diger) kasten kullanıyorum + iki YENİ şemsiye
  // (toprak, sosyal) — kullanıcının kendi dictesinde ayrı ayrı saydığı için.
  // ⚠️ AMA bu, suzgec.js'in gruplarıyla AYNI ŞEY DEĞİL: suzgec.js `k:`
  // eksenini gruplar (29 değer), burası `etiket:` eksenini gruplar (26+3
  // yeni değer). Aynı isim, FARKLI eksen — bkz BULGULAR-ETIKET.md §5.
  // "hanedan" şemsiyesi buraya EKLENMEDİ: etiket: ekseninde taht/sadrazam/
  // evlilik/kurulus gibi leaf'ler yok (bunlar yalnız k:/tur: ekseninde var).
  // =========================================================================
  semsiye: {
    "askeri":  { ad: "Askerî",       leafler: ["savas", "fetih", "denizcilik"] },
    "siyasi":  { ad: "Siyasî",       leafler: ["siyaset", "diplomasi", "antlasma", "ittifak", "saray"] },
    "toprak":  { ad: "Toprak kazanç/kayıp", leafler: ["toprak-kazanc", "toprak-kaybi"] },
    "icduzen": { ad: "İç düzen",     leafler: ["ayaklanma", "idari", "imar", "kanun", "darbe", "ic-savas"] },
    "kultur":  { ad: "Kültür-bilim", leafler: ["kultur-sanat", "mimari", "bilim", "felsefe"] },
    "iktisat": { ad: "İktisat",      leafler: ["ekonomi"] },
    "sosyal":  { ad: "Sosyal",       leafler: ["sosyoloji", "spor"] },
    "diger":   { ad: "Sınıflandırılmamış", leafler: ["diger", "yikim"] }
  },

  // =========================================================================
  // §4 — ÖNEM (1-5) — Emre'nin kuralı: "o devletin o milletin ÖNEM VERDİĞİ
  // olaylara göre" — yani önem YAZARIN yargısı değil, KAYNAĞIN o olayı nasıl
  // çerçevelediği. Her seviye SINANABİLİR bir ölçütle: "5 verdim" diyen,
  // kaynağın bunu neden dönüm noktası saydığını GÖSTEREBİLMELİ.
  // =========================================================================
  onem: {
    5: {
      ad: "Dönüm noktası",
      olcut: "O devletin/milletin kendi tarihyazımında bağımsızlık günü, "
           + "kuruluş, hanedan yıkılışı/kuruluşu, başkent değişimi gibi — "
           + "ders kitabı / ulusal anma günü / anıt düzeyinde anılan olay.",
      dogrulama: "Kaynak metninde 'dönüm noktası', 'turning point', "
               + "'decisive', 'founding', 'watershed' gibi bir çerçeveleme "
               + "VAR MI? Yoksa 5 verilmez, bir kademe aşağı inilir."
    },
    4: {
      ad: "Kalıcı yapısal değişim",
      olcut: "Devletin sınırını, hanedanını veya rejimini KALICI biçimde "
           + "değiştiren: büyük savaş sonucu, önemli toprak kazanım/kaybı, "
           + "hanedan değişimi, büyük antlaşma (Karlofça tipi)."
    },
    3: {
      ad: "Bölgesel/orta vadeli etki",
      olcut: "Sınırlı savaş, önemli isyan/bastırma, ikinci derece antlaşma, "
           + "önemli reform, önemli kişinin tahta çıkışı/ölümü."
    },
    2: {
      ad: "Yerel/kısa vadeli",
      olcut: "Sınır çatışması, küçük toprak değişimi, sıradan atama, "
           + "küçük ölçekli isyan."
    },
    1: {
      ad: "Referans ayrıntısı",
      olcut: "İdari düzenleme, protokol maddesi, doğrudan sonuç doğurmayan "
           + "arka plan bilgisi."
    },
    genel_kural: "1-3 için ölçüt kaynağın olayı NASIL ÇERÇEVELEDİĞİDİR "
               + "(kısa bir cümle mi, ayrı bir bölüm mü). 4-5 için kaynakta "
               + "AÇIKÇA bir dönüm noktası/kalıcı değişim ifadesi aranır. "
               + "Emin olunamayan her durumda BİR KADEME AŞAĞI inilir "
               + "(CLAUDE.md §8, k:2/k:3 kademe kuralının aynısı)."
  },

  // =========================================================================
  // §5 — KAPSAM (iç/dış)
  // =========================================================================
  kapsam: {
    "ic": {
      ad: "İç mesele",
      olcut: "Olay yalnız bu devletin KENDİ içinde kalıyor: taht kavgası, "
           + "iç isyan, idari reform, hanedan içi olay. Başka bir devletle "
           + "DOĞRUDAN taraf ilişkisi yok."
    },
    "dis": {
      ad: "Dış mesele",
      olcut: "Olay en az bir BAŞKA devleti doğrudan ilgilendiriyor: savaş, "
           + "antlaşma, ittifak, karşılıklı toprak değişimi, işgal."
    },
    sinir_durum: "Bir iç isyanı BASTIRMAK için yabancı asker çağrılırsa "
               + "(örn. bir güç başka bir devletten müdahale isterse) o "
               + "olay `dis` sayılır — üçüncü taraf fiilen sahneye girmiştir."
  },

  // =========================================================================
  // §6 — KAYNAK — zorunlu alan, CLAUDE.md §4 kırmızı çizgisinin karşılığı
  // =========================================================================
  kaynak: {
    zorunlu: true,
    format: "Osmanlı/İslâm dünyası dışı devletler için TDV slug'ı GENELDE "
          + "YOK — CLAUDE.md §4 kırmızı çizgisi: akademik/güvenilir/bilimsel "
          + "kaynak. Alan bir TDV slug'ı DEĞİLSE tam bir gönderme yazılır: "
          + "'Yazar Soyadı, Kitap/Makale Adı, Yıl' biçiminde, mümkünse "
          + "sayfa/bölüm ile.",
      bulunamadi_durumu: "Kaynak aranıp bulunamadıysa alan BOŞ bırakılmaz: "
          + "'bulunamadı — <ne arandığı, hangi kaynaklarda>' yazılır "
          + "(CLAUDE.md §4③④)."
  },

  // =========================================================================
  // §7 — TAM ŞEMA — bir DEVLETLER.kronoloji[] maddesinin alan seti
  // =========================================================================
  tam_sema_ornek: {
    t: "1683-09-12",              // ZORUNLU — gün hassasiyeti varsa gün yazılır
    tur: "savas",                 // ZORUNLU — §1 sözlüğünden TEK değer
    b: "Viyana Kuşatması'nın bozgunla sonuçlanması",  // ZORUNLU — başlık
    onem: 4,                      // ZORUNLU — §4 ölçütüyle
    kapsam: "dis",                // ZORUNLU — §5 ölçütüyle
    etiket: ["savas", "toprak-kaybi", "ittifak"],  // ZORUNLU — §2'den LEAF'ler,
                                   // şemsiye ELLE YAZILMAZ (§3, türetilir)
    d: "2-4 cümlelik anlatım, kaynağa dayalı.",     // ZORUNLU
    kaynak: "John Stoye, The Siege of Vienna, 1964" // ZORUNLU — §6
  }
};

if (typeof window !== "undefined") window.ETIKET_SOZLUK = ETIKET_SOZLUK;
if (typeof module !== "undefined" && module.exports) module.exports = ETIKET_SOZLUK;

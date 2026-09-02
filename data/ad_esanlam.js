// ═══════════════════════════════════════════════════════════════════════
// AD EŞANLAM SÖZLÜĞÜ                                    OPUS HAZIR KITA 106
// ═══════════════════════════════════════════════════════════════════════
//
// NİÇİN VAR
//   Bir kaynak "Buda" der, atlas "Budin" yazar. Bir kaynak "Eğridir" der,
//   atlas "Eğirdir" yazar. Kaynaktan gelen adı atlasın adına çeviremeyen
//   her araç — `bk:` nöbetçisi, koridor eşlemesi, künye denetimi — o kaydı
//   "atlasta YOK" diye eler. Eleme SESSİZDİR.
//
// YÖN
//   🔴 ANAHTAR ATLASIN ADIDIR. Değerler, o adın öteki yazımlarıdır.
//   Ters yön (eşanlam → atlas) `coz()` içinde kurulur, elle yazılmaz —
//   iki yönü elle tutmak, `§11`in "bir bilgi iki yerde durursa ayrışır"
//   dersinin davetidir.
//
// NASIL KURULDU — HER ÇİFT ÖLÇÜLDÜ, HİÇBİRİ TAHMİN DEĞİL
//   ① atlas adı gerçekten var mı?          (`girdi.yukle()` ile sorulur)
//   ② eşanlam zaten bir atlas adı mı?       (öyleyse sözlüğe GEREK YOK)
//   ③ eşanlam BAŞKA bir atlas adıyla da tutuyor mu?  (tutuyorsa EŞANLAM DEĞİL)
//   25 çiftin 25'i bu üç kapıdan geçti · sorunlu 0.
//
// 🔴 SÖZLÜĞÜN KENDİ SINIRI — `belirsiz` KOVASI
//   Normalleştirme tek başına eşanlamlılığa KARAR VEREMEZ, ve bunun kanıtı
//   sözlüğün içindedir:
//       Kudüs (31,78 / 35,23)  ile  Kudus (-6,81 / 110,84)  →  9065 km
//       Sire (Syros)           ile  Şire (Etiyopya)         →  2912 km
//   İkisi de normalleştirince AYNI dizeye düşüyor (ü→u, ş→s) ama AYNI YER
//   DEĞİL. Yani kusur veride değil, NORMALLEŞTİRİCİDE — ve kapatılamaz,
//   çünkü aynı katlama `Eğridir → Eğirdir`i doğru çözen katlamadır.
//   ⇒ Çare katlamayı zayıflatmak değil, ÇARPIŞMAYI KAYDETMEK: aşağıdaki
//     `belirsiz` kovasına düşen bir ad ÇÖZÜLMEZ, UYARIR. Susmak yerine
//     "karar veremiyorum" demek, yanlış karardan iyidir.
//   Kova ölçümle kuruldu: çıplak adı (parantezli açıklayıcı atılmış hâli)
//   birden çok atlas kaydına düşen ve aralarında >50 km olan bütün adlar.
//
// KULLANIM — TEK NORMALLEŞTİRİCİ
//   Python : arac/ad_esanlam.py  →  sadelestir() · coz() · yukle()
//   🔴 Kendi normalleştiricini YAZMA. Üç ayrı normalleştirici, üç ayrı
//      kör nokta demektir; bu sözlüğün varlık sebebi tam olarak odur.
// ═══════════════════════════════════════════════════════════════════════

window.AD_ESANLAM = {
  "surum": "ok106-1",
  "olcum_tarihi": "2026-09-02",

  // ─── ÇÖZÜLEBİLİR: atlas adı ← öteki yazımlar ───────────────────────
  "esanlam": {
    "Budin":                  ["Buda"],
    "Semendire":              ["Smederevo"],
    "Üsküp":                  ["Skopje"],
    "Yaş":                    ["Iaşi", "Jassy"],
    "Karaman":                ["Larende"],
    "Diyarbakır":             ["Diyarbekir"],
    "Eğirdir":                ["Eğridir"],
    "Çerkask (Razdory)":      ["Çerkassk"],
    "Pegu (Bago)":            ["Pegu", "Peygu"],
    "Edinburg":               ["Edinburgh"],
    "İstefe (Tebai)":         ["Thebai", "Thebes"],
    "St. Petersburg":         ["Sankt-Peterburg", "Petrograd"],
    "Cetinje":                ["Cetine"],
    "Anabolu (Nauplion)":     ["Nafplion"],
    "Birni N'gazargamu":      ["Ngazargamu"],
    "Köhne Ürgenç (Gürgenç)": ["Gürgenç"],
    "Merâga":                 ["Meraga"],
    "Sultâniye":              ["Sultaniye"],
    "Bîdar":                  ["Bidar"],
    "Isfahan":                ["İsfahan"],
    "Suçava (Suceava)":       ["Suceava"]
  },

  // ─── ÇÖZÜLMEZ: çıplak ad birden çok yere düşüyor ───────────────────
  // Bir arama bu adlardan birine düşerse araç DURUR ve adayları bildirir.
  // "en_uzak_km" ikisinin/üçünün birbirine uzaklığıdır — 50 km eşiği.
  "belirsiz": {
    "Haydarâbâd":              { "adaylar": ["Haydarâbâd (Sind)", "Haydarâbâd (Dekken)"], "en_uzak_km": 1373 },
    "Kudüs":                   { "adaylar": ["Kudüs", "Kudus"], "en_uzak_km": 9065, "not": "NORMALLEŞTİRİCİ ÇARPIŞMASI — Filistin ile Java, ü/u katlaması" },
    "Sire":                    { "adaylar": ["Sire (Syros)", "Şire"], "en_uzak_km": 2912, "not": "NORMALLEŞTİRİCİ ÇARPIŞMASI — Ege adası ile Etiyopya, ş/s katlaması" },
    "Perth":                   { "adaylar": ["Perth (İskoçya)", "Perth"], "en_uzak_km": 14690 },
    "Santa Fe":                { "adaylar": ["Santa Fe", "Santa Fe (Arjantin)"], "en_uzak_km": 8848 },
    "Plymouth":                { "adaylar": ["Plymouth", "Plymouth (Massachusetts)"], "en_uzak_km": 5033 },
    "New Amsterdam":           { "adaylar": ["New Amsterdam (New York)", "New Amsterdam (Berbice)"], "en_uzak_km": 4168 },
    "Port Royal":              { "adaylar": ["Port Royal (Acadia)", "Port Royal"], "en_uzak_km": 3162 },
    "Mora":                    { "adaylar": ["Mora (Tripoliçe)", "Mora"], "en_uzak_km": 2669, "not": "Yunanistan Mora'sı ile İsveç Mora'sı" },
    "Mérida":                  { "adaylar": ["Mérida", "Mérida (Venezuela)"], "en_uzak_km": 2407 },
    "Tuzla":                   { "adaylar": ["Tuzla (Larnaka)", "Tuzla (Bosna)"], "en_uzak_km": 1663 },
    "Yenişehir":               { "adaylar": ["Yenişehir (Bursa)", "Yenişehir (Larissa)"], "en_uzak_km": 619 },
    "Kordofan":                { "adaylar": ["Kordofan (Ubeyyid)", "Kordofan"], "en_uzak_km": 80 },
    "Kazak bozkırı":           { "adaylar": ["Kazak bozkırı (İşim)", "Kazak bozkırı (Turgay)", "Kazak bozkırı (Sarısu)"], "en_uzak_km": 616 },
    "Üstyurt platosu":         { "adaylar": ["Üstyurt platosu (batı)", "Üstyurt platosu (doğu)"], "en_uzak_km": 244 },
    "Avustralya İç Kesimi":    { "adaylar": ["Avustralya İç Kesimi (Orta — Arrernte bölgesi)", "Avustralya İç Kesimi (Kuzeybatı — Kimberley)", "Avustralya İç Kesimi (Kuzey — Arnhem Land)", "Avustralya İç Kesimi (Kuzeydoğu — Cape York)", "Avustralya İç Kesimi (Güney — Nullarbor/Güneybatı)"], "en_uzak_km": 2398 },
    "Yeni Gine İç Kesimi":     { "adaylar": ["Yeni Gine İç Kesimi (Kuzey — Sepik Havzası)", "Yeni Gine İç Kesimi (Güney — Fly Nehri Bataklıkları)"], "en_uzak_km": 448 },
    "Yeni Gine İç Yaylaları":  { "adaylar": ["Yeni Gine İç Yaylaları (Merkez — Mount Hagen)", "Yeni Gine İç Yaylaları (Batı — Baliem Vadisi)"], "en_uzak_km": 618 }
  }
};

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
    "Aquincum-Óbuda-Pest":    ["Budin", "Buda"],
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
    "Suçava (Suceava)":       ["Suceava"],

    // ─── YERLESIM-SAHNE-1108 (9-10 Kasım 2026, Emre kararı: alias VERİDE, diger_ad alanı YOK) ───
    // Her çift için atlas adı atlasta VAR (ölçüldü), eşanlam atlasta AYRI ad olarak YOK. Dayanak: aşağıda "kaynak".
    "Hemedan":                ["Ekbatana", "Ecbatana"],
    "Bergama":                ["Pergamon"],
    "Marsilya":               ["Massalia"],
    "Sart":                   ["Sardes"],
    "Ktesiphon":              ["Ktesifon"],
    "Cerablus":               ["Karkemiş"],
    "Feremâ":                 ["Pelusium"],
    "Uksur (Luksor)":         ["Teb"],
    "Ayasuluk (Selçuk)":      ["Efes"],
    "Berde (Karabağ)":        ["Berdea"],
    "Kannauc":                ["Kannauj"],
    "Pyongyang":              ["Seogyeong"],
    "Pekin (Hanbalık)":       ["Youzhou"],
    "Sonepur (Subarnapur)":   ["Suvarnapura"],
    "Meyyâfârikīn":           ["Silvan"],
    "Kyoto":                  ["Heian-kyō"],
    "Yangzhou":               ["Jiangdu"],
    "Addis":                  ["Addis Ababa"],
    "Urga (Ulan Batur)":      ["Ulanbator"],
    "Polonnaruwa":            ["Polonnaruva"]
  },

  // ─── DAYANAK: yeni çiftlerin kaynağı (anahtar = atlas adı) ─────────
  // denetim/YERLESIM-SAHNE-1108/cikti/arastirma/arastirma_A,B,C.json ("notlar": mevcut kayıt, ad eşleşmesi).
  // 🔴 TDV TEYİDİ BEKLİYOR: araştırma ajanları TDV'yi okumadı; çiftler atlasın kendi kaydıyla KOORDİNAT
  //    eşleşmesiyle ölçüldü (yer aynı), ad-tarih dayanağı tek tek TDV/akademik teyit ister (kaynak sırası ①).
  "kaynak": {
    "_genel": "ALIAS-VERI 11 Kasım 2026: 3 araştırma ajanı + TDV okuması. Karar: AYNI ve AYNI-YAKLAŞIK çiftler kaldı; FARKLI/BELİRSİZ olan 3 çift (Weizhou=Daming, Shuofang=Xiazhou, Vyadhapura=Angkor Borei) SÖZLÜKTEN ÇIKARILDI. Zayıf (yalnız ikincil kaynaklı) çiftler aşağıda 'ZAYIF' damgalı.",
    "Bergama": "TDV bergama: 'Bugünkü adı, antik dönemdeki ismi olan Pergamon'dan gelir.' (okundu)",
    "Meyyâfârikīn": "TDV meyyafarikin ve silvan (okundu): Meyyâfârikīn Silvan ilçe merkezinin eski adı.",
    "Berde (Karabağ)": "TDV arran (okundu): 'Arrân'ın eski merkezi Berdea'nın harabeleri bugün Berde köyü yakınlarındadır'; Iranica 'Bardaʿa' (yalnız özet). YAKLAŞIK: harabe ile köy örtüşmüyor.",
    "Ktesiphon": "TDV medain (okundu): 'genellikle de doğrudan Medâin adıyla zikredilen Ktesiphon'. Ktesifon yalnız yazım farkı. (Medâin = Ktesiphon çevresi şehirler grubu, eş anlam DEĞİL, eklenmedi.)",
    "Sart": "Sardis Expedition: harabe Sart köyü yanında; TDV anadolu 'Sardes' yazar, Sart-Sardes bağını açıkça kurmaz — ZAYIF.",
    "Uksur (Luksor)": "TDV misir: 'Teb' Fir'avun şehri; Uksur'u anmıyor. Karnak/Luxor tapınakları Thebai'nin doğu yakası — YAKLAŞIK (antik Thebai Luksor'dan büyüktü). Yunan Thebai için ayrı kayıt İstefe (Tebai) — çakışmaz.",
    "Feremâ": "TDV misir: Feremâ, Amr b. Âs'ın 640'ta aldığı ilk kent; Pelusium=Tell el-Farama ikincil kaynak — ZAYIF (Brill EI 'Faramā' okunamadı).",
    "Cerablus": "Karkemiş/Cerablus tek antik höyük, sınırın iki yanında (Land of Carchemish projesi özeti) — YAKLAŞIK, TDV 'Karkamış' aranmadı — ZAYIF.",
    "Hemedan": "Britannica 'Ecbatana': antik şehrin yeri modern Hamadan'ın bulunduğu yer. TDV hemedan: ilk şehir bugünkü Hemedan'ın güneydoğusunda, Ptolemaios'un adı 'Ekbatana' — YAKLAŞIK (örtüşme tam değil). Iranica okunamadı (403).",
    "Marsilya": "Massalia=Marsilya yerleşme sürekliliği tartışmasız; TDV'de antik Massalia maddesi yok, Pleiades/Brill okunamadı — ZAYIF.",
    "Ayasuluk (Selçuk)": "TDV ayasuluk (okundu): ortaçağ yerleşmesi antik Efes'in bulunduğu yerde; 1914'te Selçuk adı. Antik liman kenti ile Ayasuluk tepesi komşu/ardıl, aynı nokta DEĞİL — YAKLAŞIK.",
    "Kannauc": "Kannauj klasik Kanyakubja'dan; İslâm kaynaklarında Ḳanawj (JRAS 'The History of the City of Kanauj'); atlasın 'Kannauc' yazımı TDV'de bulunamadı (arama 0) — ZAYIF.",
    "Pyongyang": "Wang Geon Pyongyang'ı Daedohobu yapıp Seogyeong'e yükseltti (KCI hakemli dergi özeti, Kim Chang-hyeon 2005); tam metin okunamadı — ZAYIF. Ad yalnız Goryeo dönemi.",
    "Pekin (Hanbalık)": "Aynı yerleşme zinciri Youzhou/Ji (Tang) → Nanjing/Yanjing (Liao) → Zhongdu (Jin) → Dadu/Hanbalık (Yuan); Yuan Dadu eski kentin KD'sinde, birebir örtüşmez — YAKLAŞIK; yalnız Vikipedi türevi okundu — ZAYIF.",
    "Sonepur (Subarnapur)": "Epigraphia Indica / ASI-IGNCA raporu: Suvarnapura, Sonpur'un Sanskritleşmiş biçimi (özet) — ZAYIF.",
    "Yangzhou": "Jiangdu MÖ 153 ilçe, 616-618 Sui İmparatoru Yang'ın başkenti; Britannica/Vikipedi özeti — YAKLAŞIK (Jiangdu bugün Yangzhou'nun ilçesi) — ZAYIF.",
    "Urga (Ulan Batur)": "Örgöö 1639, Ikh Khüree 1706-1911, Ulaanbaatar 1924; Khüree gezici manastır kampıydı, bugünkü yere 1778'de yerleşti — YAKLAŞIK, ikincil kaynak — ZAYIF.",
    "Kyoto": "Heian-kyō 794, Kammu; 11. yy'dan Kyōto — modern yaygın eşitlik, hakemsiz kaynak — ZAYIF.",
    "Addis": "Addis Ababa kısaltması — modern yaygın eşitlik.",
    "Polonnaruwa": "Aynı yer, Romanizasyon farkı (UNESCO yazımı Polonnaruwa)."
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

// ============================================================================
// SINIR-CIZGI-0076 · YAMA · data/olaylar*.js  (kronoloji ÇEKİRDEĞİ)
// UYGULAYAN: koordinatör. İki madde: ① H-0037'nin zorunlu eşi ② H-0080'in cevabı
// ============================================================================
"use strict";

// ───────────────────────────────────────────────────────────────────────────
// ① H-0037'NİN ZORUNLU EŞİ — Romanya'nın bağımsızlık ilânı
// `denetim/SINIR-CIZGI-0076-YAMA-yerlesimler.js` §① 15 yerleşimin tâbilik
// penceresini 1877-05-09'a çekiyor. ÖLÇÜLDÜ: bugün kronolojide 1877-04/05'te
// Romanya bağımsızlığına dair HİÇBİR madde yok (1877-04-24 "93 Harbi başladı"
// var, 1877-06-27 ve 1877-07-19 Tuna/Plevne var). Yani yama tek başına
// uygulanırsa 15 kırılma AÇIK kalır (Değişmez 2).
var H0037_OLAY = {
  t: "1877-05-09", k: "kayip",
  etiket: ["toprak-kayip", "siyaset", "konu-siyasi", "konu-askeri"],
  b: "Romanya'nın bağımsızlığını ilân etmesi — Eflak-Boğdan tâbiliğinin sonu",
  gun: "9 Mayıs 1877",
  yer: "Bükreş",
  kisiler: "Prens I. Carol",
  d: "93 Harbi'nin ilânından iki hafta sonra Romanya Prensliği bağımsızlığını ilân " +
     "etti ve savaşa Rusya'nın yanında girdi; Plevne kuşatmasındaki payı Osmanlı " +
     "yenilgisinde belirleyici oldu. Dört yüz yılı aşkın Eflak ve Boğdan tâbiliği " +
     "böylece fiilen ve hukuken sona erdi; bağımsızlık Berlin Kongresi'nde (1878) " +
     "uluslararası tanıma kazandı. Harita bu tarihten itibaren Romanya'yı artık " +
     "tâbi değil kendi rengiyle bağımsız devlet olarak gösterir.",
  kaynak: "romanya",
  duygu: ["😔"],
  yer_id: "Bükreş"
};
// KAYNAK CÜMLESİ (TDV `romanya`): "9 Mayıs 1877 tarihinde bağımsızlığını ilân etti" ·
// "1877-1878 Osmanlı-Rus Savaşı'na katılan ve özellikle Plevne'de Osmanlılar'ın
// yenilgisine çok önemli katkıda bulunan" · "Berlin Kongresi'nde (1878) tanındı".

// ───────────────────────────────────────────────────────────────────────────
// ② H-0080 — "Masavva İtalya tarafından işgal edilirken Sevâkin, Sinkat, Hayya,
//    Derudeb, Muhammed Kol gibi şehirlerde Britanya'ya geçmiş görünüyor ama
//    bununla alâkalı bir kronoloji maddesi konulmamış"
//
// ÖLÇÜLDÜ — Emre HAKLI, ve ölçüm onun listesinden daha geniş:
//   1885-02-05'te 10 yerleşim kırılıyor:
//     İtalya'ya   : Masavva · Dahlak · Arkîko                       (3)
//     İngiltere'ye: Halâib · Akīk · Sinkat · Hayyâ · Trinkitât ·
//                   Muhammed Kol · Derûdeb                          (7)
//   Bu 7'sinin 7'si de o güne kadar OSMANLI DOĞRUDAN (`d:`) idi.
//   O günün TEK kronoloji maddesi: "Masavva'nın İtalyan işgali — Kızıldeniz'in
//   batı kıyısının kaybı" (data/olaylar_ek6.js). Metni Sevâkin ve Dahlak'ı anıyor,
//   İNGİLTERE'Yİ HİÇ ANMIYOR. Değişmez 2 ±30 gün ölçütünü teknik olarak
//   geçiyor (aynı gün bir madde var), ama 7 yerleşimin İNGİLTERE'ye geçişi
//   ayrı bir hükümdür ve ayrı maddeyi hak eder (CLAUDE.md §10).
//   AYRICA bir tutarsızlık: Sevâkin'in kendi kaydı `ingiltere`ye 1884-02-01'de
//   geçiyor (o günün maddesi ise "Sevâkin — Mehdî'ye düşmeyen tek liman", yani
//   devri ANLATMIYOR); 1885-02-05 maddesi ise Sevâkin'in "aynı süreçte elden
//   çıktığını" söylüyor. İKİ KATMAN İKİ FARKLI GÜN SÖYLÜYOR.
//
// 🔴 MADDE YAZILMADI — GEREKÇE: tarihin KAYNAĞI YOK.
//   TDV tarandı: `sudan` (Dârfûr ve Bahrülgazâl Aralık 1883/Nisan 1884, Hartum
//   26 Ocak 1885 — Kızıldeniz kıyısı YOK) · `habes-eyaleti` (İtalya "1884'te
//   Assab'ı, 1885'te … Masavva'ı ele geçirdi" — Sinkat/Hayya/Derudeb YOK) ·
//   `sevakin` (slug arama sayfasına düşüyor — TDV tuzağı ①).
//   ⇒ 7 yerleşimin "1885-02-05'te İngiltere'ye geçtiği" bilgisinin tek dayanağı
//   ATLASIN KENDİ KAYDIDIR ve o bir dayanak değildir (CLAUDE.md §4). Tarih,
//   Masavva'nın gününün yanına yazılmış bir TOPLU GÜN görünümündedir.
//   Kaynaksız bir madde yazmak, uydurma bir devir tarihini kronolojiye
//   YERLEŞTİRMEK olurdu. Bu yüzden madde taslağı AŞAĞIDA ama `t` alanı BOŞ
//   bırakıldı; kaynak bulununca doldurulur.
var H0080_TASLAK = {
  t: null,                       // 🔴 KAYNAK BULUNANA KADAR BOŞ — uydurulmadı
  k: "kayip",
  etiket: ["toprak-kayip", "konu-askeri", "konu-diplomasi"],
  b: "Doğu Sudan sahilinin İngiliz idaresine geçişi — Sevâkin ardındaki kasabalar",
  gun: null,                     // 🔴 aynı sebep
  yer: "Sevâkin, Sinkat, Hayyâ, Derûdeb, Muhammed Kol, Trinkitât, Akīk, Halâib",
  kisiler: "İngiltere",
  d: "(gövde, kaynak bulununca yazılacak — Mehdî ayaklanmasının Sudan'ı kaplaması " +
     "üzerine Kızıldeniz sahilindeki Osmanlı-Mısır kasabalarının İngiliz idaresine " +
     "geçişi)",
  kaynak: "bulunamadı",
  yer_id: "Sevâkin"
};
// NE İSTİYORUM (koordinatörden): bu kalem bir KAYNAK işidir, ölçüm işi değil.
//   ① 7 yerleşimin devir tarihi için akademik kaynak (TDV kapsamıyor) bulunana
//      kadar madde yazılmasın; VEYA
//   ② kaynak bulunana kadar 1885-02-05 maddesinin gövdesine İngiltere cümlesi
//      eklensin (tarih iddiası YENİ değil, var olan maddeyi doğru anlatır) — en
//      ucuz ve en dürüst ara çözüm, ÖNERİM BUDUR:
var H0080_ARA_COZUM = {
  hedef: "data/olaylar_ek6.js · t:\"1885-02-05\" · b:\"Masavva'nın İtalyan işgali…\"",
  d_ekle: " Aynı günün kaydında Sevâkin gerisindeki Sinkat, Hayyâ, Derûdeb, " +
          "Trinkitât, Muhammed Kol, Akīk ve Halâib kasabaları da İngiliz idaresine " +
          "geçmiş görünür; bu kasabaların devir günü için kaynak bulunamadı, " +
          "atlas onları Masavva'nın günüyle birlikte göstermektedir.",
  uyari: "🔴 SON CÜMLE OKURA GİDECEK METİNDİR — 'atlas' kelimesi geliştirici sesi " +
         "sayılırsa (M-5024 ③) şöyle kısaltılır: '…devir günü kaynaklarda ayrışır.'"
};

// ⚠️ SEVÂKİN ÇELİŞKİSİ (ayrı kalem, hüküm koordinatörün): Sevâkin `s:ingiltere`
//   1884-02-01'de başlıyor; 1885-02-05 maddesi ise onu 1885'te elden çıkmış
//   sayıyor. İkisinden biri yanlış. Kaynak işi.

if (typeof module !== "undefined") module.exports = { H0037_OLAY, H0080_TASLAK, H0080_ARA_COZUM };

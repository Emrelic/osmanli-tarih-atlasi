// ============================================================================
// YAMA ÖNERİSİ — kronoloji GÜNÜ DEĞİŞMİYOR, yalnız ÇELİŞKİ BEYAN EDİLİYOR
// ============================================================================
// Konu: II. Balkan Savaşı'nın başlangıç günü (1913-06-29 ↔ 23 Haziran 1913).
// Uygulayan: koordinatör. Bu dosya VERİ DEĞİL, uygulanacak değişikliğin tarifidir.
//
// 🔴 TARİHE DOKUNULMASI ÖNERİLMİYOR. Değişmez 2 gereği kronoloji günü kırılmayla
//    birlikte hareket eder; gün değişirse `bulgaristan-kralligi` künyesi ve
//    Edirne'nin 1913-07-21 kırılması da birlikte ölçülmek zorunda kalır.
//    Önerilen tek şey, ölçülmüş bir kaynak ayrışmasının kayda geçirilmesidir.
//
// ─── ÖLÇÜM ────────────────────────────────────────────────────────────────
// ① Veri (iki ayrı dosya, AYNI gün — çelişki veri İÇİNDE değil):
//      data/olaylar_ek5.js       t:"1913-06-29"  gun:"29 Haziran 1913"
//                                b:"II. Balkan Savaşı'nın başlaması: müttefiklerin
//                                   paylaşım kavgası"   kaynak:"osmanlilar"
//      data/kronoloji_balkan.js  t:"1913-06-29"
//                                b:"İkinci Balkan Savaşı başladı — Bulgaristan eski
//                                   müttefiklerine saldırdı"
//                                kaynak: … "Gün: akademik (Crampton, 2005)."
// ② TDV `balkan-savasi` gövdesi, rakamı taşıyan CÜMLE birebir:
//      "Bulgaristan 23 Haziran 1913'te Sırbistan, Karadağ ve Yunanistan'a karşı
//       savaşa başladı."
//    ⇒ Cümlenin tarihlediği şey SAVAŞIN BAŞLAMASIDIR; başka bir olayın (emir,
//      seferberlik, savaş ilânı) günü değildir. Yani iki tarih AYNI soruyu
//      cevaplıyor — D5'in "ayrı soruların cevabı" dalı burada TUTMADI, sınandı.
// ③ Encyclopædia Britannica, "Balkan Wars" (Britannica Editors), erişim
//    23 Eylül 2026: olay kutusu "Second Balkan War · June 29, 1913 - August 10,
//    1913"; gövde: savaş 29-30 Haziran 1913 GECESİ, Kral Ferdinand'ın Makedonya'daki
//    Sırp ve Yunan kuvvetlerine saldırı emriyle başladı.
// ④ 23 Haziran 1913'e karşılık gelen ayrı bir olay ARANDI, BULUNAMADI.
//    Taranan: TDV `balkan-savasi` tam gövde · TDV `bulgaristan` (Balkan Harbi
//    kesimi bu bölümde YOK) · TDV `bukres-antlasmasi` slug'ı 302 (müstakil madde
//    yok) · Britannica "Balkan Wars" tam gövde.
//    ⇒ `ölçülemedi` DEĞİL, `bulunamadı`: arandı ve çıkmadı.
//
// ─── HÜKÜM ────────────────────────────────────────────────────────────────
// Gün 1913-06-29 KALSIN. Gerekçe: iki bağımsız ölçüm (Britannica'nın olay kutusu
// ve gövdesi) 29 Haziran'ı hem gün hem mekanizmayla veriyor; TDV'nin 23 Haziran'ı
// tek cümlelik ve mekanizmasız. TDV birincilliği (CLAUDE.md §4) burada da
// geçerlidir — bu yüzden TDV'nin günü SİLİNMİYOR, ÇELİŞKİ olarak kayda giriyor
// (TDV tuzağı ⑥: "kaynak kendiyle çelişebilir — bildir").
//
// ─── UYGULANACAK DEĞİŞİKLİK (tek kayıt, tek alan) ─────────────────────────
// data/olaylar_ek5.js · t:"1913-06-29" kaydına AŞAĞIDAKİ alan EKLENİR.
// Başka hiçbir alan değişmez; `t:` ve `gun:` AYNEN kalır.
//
//   ic_not_gun:"KAYNAK ÇELİŞKİSİ BEYANI — 23 Eylül 2026. TDV `balkan-savasi`
//   AYNEN: 'Bulgaristan 23 Haziran 1913'te Sırbistan, Karadağ ve Yunanistan'a
//   karşı savaşa başladı.' Britannica 'Balkan Wars' ise savaşı 29-30 Haziran 1913
//   gecesine, Kral Ferdinand'ın saldırı emrine bağlar ve olay kutusunda
//   'June 29, 1913 - August 10, 1913' yazar. İki kaynak AYNI soruya (savaş hangi
//   gün başladı) farklı gün veriyor; 23 Haziran'a karşılık gelen ayrı bir olay
//   arandı, bulunamadı. Gün 1913-06-29'da BIRAKILDI (mekanizmayla birlikte verilen
//   tarih tercih edildi); TDV'nin günü silinmedi, burada kayıtlıdır."
//
// ─── UYGULANMAZSA NE OLUR ────────────────────────────────────────────────
// Hiçbir denetim ötmez, harita değişmez, Değişmez 2 bozulmaz. Kaybolan tek şey,
// bir sonraki oturumun aynı altı günlük farkı sıfırdan yeniden ölçmesidir.
// ============================================================================

window.EKOKUMA_0076_B_YAMA_OLAYLAR = [
  { dosya:"data/olaylar_ek5.js",
    kayit:{ t:"1913-06-29", b:"II. Balkan Savaşı'nın başlaması: müttefiklerin paylaşım kavgası" },
    islem:"ALAN EKLE",
    alan:"ic_not_gun",
    deger:"KAYNAK ÇELİŞKİSİ BEYANI — 23 Eylül 2026. TDV `balkan-savasi` AYNEN: \"Bulgaristan 23 Haziran 1913'te Sırbistan, Karadağ ve Yunanistan'a karşı savaşa başladı.\" Britannica \"Balkan Wars\" ise savaşı 29-30 Haziran 1913 gecesine, Kral Ferdinand'ın Makedonya'daki Sırp ve Yunan kuvvetlerine saldırı emrine bağlar ve olay kutusunda \"June 29, 1913 - August 10, 1913\" yazar. İki kaynak AYNI soruya farklı gün veriyor; 23 Haziran'a karşılık gelen ayrı bir olay arandı, bulunamadı. Gün 1913-06-29'da BIRAKILDI (mekanizmayla birlikte verilen tarih tercih edildi); TDV'nin günü silinmedi, burada kayıtlıdır.",
    tarih_degisikligi:"YOK — t: ve gun: aynen kalır" }
];

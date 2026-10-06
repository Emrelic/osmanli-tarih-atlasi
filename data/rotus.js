// data/rotus.js — RÖTUŞ KAYITLARI (window.ROTUS)
//
// Şartname: denetim/P84-ROTUS-TASARIM-1006b.md (Emre'nin üç kararı: ① tek tür
// "baglanti" · ② kullanıcı çizer, Claude dokuz soruyla kontrol eder · ③ Claude uygular).
//
// 🔴 BU DOSYA YALNIZ "uygun" HÜKMÜ ALMIŞ KAYITLARI TAŞIR.
//    Reddedilen / askıda / veri kusuru çıkan teklif data/ya GİRMEZ — ölü girdi yasağı
//    (§3.4(5)). Reddedilenlerin yeri: denetim/ROTUS-DEFTERI.md (id · teklif · hüküm ·
//    gerekçe). Aynı teklif ikinci kez gelirse önce oraya bakılır (mükerrer kapısı).
//
// 🔴 geo KULLANICININ ÇİZİMİDİR, AYNEN DURUR. Claude onu daraltmaz/genişletmez;
//    değişiklik önerisi kullanıcıya döner, kullanıcı yeniden çizer. Poligonun sahibi
//    her zaman kullanıcıdır.
//
// ŞEMA — her alan zorunludur (Değişmez R / R1 şema sorusu):
//   { id:"R-0001",
//     ad:"İbrail–Eflak bağlantısı",
//     tur:"baglanti",                        // tek tür (Emre kararı ①)
//     kime:"eflak",                          // birleştirilen gövdenin kimliği
//     kimden:[{d:"bogdan", km2:19.6}],       // poligonun altındaki sahipler, ÖLÇÜLMÜŞ
//     f:"1359-01-01", t:"1420-01-01",        // kopukluk penceresi — gövde dönem
//                                            // sınırları. Claude ÖLÇER (K2), kullanıcı
//                                            // yazmaz.
//     geo:[[27.80,44.83],[27.89,44.83],[27.89,44.80],[27.80,44.80]],   // [lon,lat]
//     teklif:{kim:"Emre", h:"0084/H-0018", gun:"2026-10-06",
//             dosya:"rotus-teklif-….json"},
//     kontrol:{kim:"<Claude oturumu>", gun:"…", hukum:"uygun",
//              sorular:{K1:"…", K2:"…", K3:"…", K4:"…", K5:"…",
//                       K6:"…", K7:"…", K8:"…", K9:"…"}},   // her sorunun ÖLÇÜMÜ + sonucu
//     kaynak:"TDV ibrail · TDV eflak · TDV bogdan — sınır cümlesi YOK (aranan: …)" }
//
// §3.4(5)'in üçlüsü alan oldu: NE DEĞİŞTİ (kime/kimden/geo/f/t) · NİÇİN (teklif +
// kontrol.sorular) · KİM KARAR VERDİ (teklif.kim + kontrol.kim).
//
// ⚠️ Rötuş ARAYÜZDE uygulanır; yeniden üretilen geometri rötuşun altını her koşuda
//    değiştirebilir. Bu yüzden kontrol bir kez değil SÜREKLİDİR — Değişmez R dokuz
//    soruyu (R1-R9) her koşuda ve her yayında yeniden sorar.
//
// 📌 Dosya BOŞ başlar ve bu bir kusur DEĞİLDİR: rötuşun sayısı kullanıcıya aittir
//    (Emre kararı ③), kapının işi her birinin hâlâ geçerli olduğunu sormaktır.
//    Sayı tavanı YOKTUR.
window.ROTUS = [];

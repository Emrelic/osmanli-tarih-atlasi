// ============================================================================
// SENKRON BORCU — 30 Eylül 2026 · YILDIRIM BAYEZIT (koordinatör)
//
// YERLESIM-BIRLESTIR-0930'un 125 yerleşim düzeltmesi uygulandığında
// `denetle.py` Değişmez 2'de İKİ AÇIK KIRILMA bildirdi:
//
//   1398-01-01  kazanç  Divriği
//               en yakın madde 181 gün uzakta, o da bu yerden bahsetmiyor
//   1556-03-12  kazanç  Brassó (Braşov) · Erdel (Kaloşvar) ·
//               Erdel Belgradı (Gyulafehérvár) · Segesvár (Sighişoara)
//               en yakın madde 71 gün uzakta, o da bu yerlerden bahsetmiyor
//
// Değişmez 2'nin kuralı açık: "Her `d:`/`v:` kırılmasının ±30 gün içinde
// kronoloji maddesi olmalı. ÖLÇÜTÜ GEVŞETME." Ölçüt gevşetilmedi; eksik
// olan iki madde YAZILDI. Sınıfı bu dosyanın adında duruyor: bunlar yeni
// bir araştırmanın ürünü değil, uygulanan bir toprak değişikliğinin
// kronolojideki karşılığıdır.
//
// 🔴 GÜN HASSASİYETİ (CLAUDE.md §4 · D210 · D213):
//   · Divriği: TDV YIL verir, gün ve ay VERMEZ → `1398-01-01`, `gun:`
//     alanında açıkça yazılı. Uydurulmadı.
//   · Erdel: TDV olayı ANLATIR ama TARİHLEMEZ. 12 Mart 1556 günü
//     YERLESIM-BIRLESTIR-0930 kabulünün kendi kaynağından (History of
//     Transylvania I, MTA, s. 102) DEVRALINDI ve devralındığı `gun:`
//     alanında yazılıdır — atlasın kendi kaydı dayanak sayılmadı.
//
// window.OLAYLAR_SENKRON_0930 — `data/olaylar*.js` kalıbına girdiği için
// Değişmez 2 evrenindedir (arac/denetle.py:1047 glob).
// ============================================================================
window.OLAYLAR_SENKRON_0930 = [

{ t:"1398-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri","memluk"],
  b:"Yıldırım Bayezid Sivas, Malatya, Besni, Darende ve Divriği'yi Osmanlı topraklarına kattı",
  gun:"1398 (TDV yıl verir, ay ve gün vermez)",
  yer:"Divriği, Sivas, Malatya, Besni (Behisni), Darende",
  kisiler:"Yıldırım Bayezid, Memlük Sultanı Berkuk, Ferec",
  d:"Memlük Devleti'nin idarî işleri bozulunca Yıldırım Bayezid iki ay süren bir muhasaranın ardından Sivas, Malatya, Besni (Behisni), Darende ve Divriği'yi Osmanlı topraklarına kattı. Divriği 1391'den beri Memlük hâkimiyetindeydi ve Halep eyaletine bağlı bir ileri karakol durumundaydı. Osmanlı idaresi burada uzun sürmedi: yaklaşan Timur tehlikesi yüzünden Divriği 1401'de yeniden Memlükler'e verildi, şehrin kesin olarak Osmanlı idaresine girişi 1516 Mercidâbık'tan sonra oldu.",
  kaynak:"divrigi", duygu:["🙂"], yer_id:"Divriği",
  ic_not_d:"🔴 KAYNAK KENDİYLE ÇELİŞİYOR, BİLDİRİLİYOR (D211 ⑥): TDV `divrigi` fethi 'Sultan Berkuk'un ölümünden sonra ... Yıldırım Bayezid 1398'de' diye anlatıyor, ama Berkuk Haziran 1399'da öldü (TDV `berkuk`; atlasın kendi kaydı da kronoloji_memluk.js 1399 'Berkuk'un ölümü'). Yani TDV'nin SIRALAMASI ile YILI birbirini tutmuyor. Maddeye YIL yazıldı (1398), çünkü ölçülen toprak kırılması o gündedir ve TDV fethi açıkça 1398'e koyuyor; Berkuk cümlesi maddeye TAŞINMADI. Çelişkinin çözümü (fetih 1398 mi 1399 mu) ayrı kalem — Memlük iç karışıklığı Berkuk'un ölümünden ÖNCE de vardı.",
  ic_not_kaynak:"TDV `divrigi` (Abdülkadir Balgalmış, 1994) gövdesi okundu, birebir: \"Sultan Berkuk'un ölümünden sonra yerine küçük yaştaki oğlu Ferec'in geçmesiyle Memlük Devleti'nin idarî işleri bozulunca Yıldırım Bayezid 1398'de Sivas, Malatya, Besni (Behisni), Darende ve Divriği'yi iki ay muhasaradan sonra Osmanlı topraklarına kattı. Ancak Divriği yaklaşan Timur tehlikesinden dolayı 1401'de tekrar Memlükler'e verildi.\" · 1391 Memlük zaptı aynı gövdede: \"Kadı Burhâneddin ile Amasya Emîri Hacı Şadgeldi Paşa arasındaki mücadelelerden faydalanan Memlükler tarafından zaptedildi (1391).\"" },

{ t:"1556-03-12", k:"fetih", etiket:["toprak-kazanc","konu-siyasi","erdel","habsburg"],
  b:"Habsburg idaresi Erdel'de sona erdi: Erdel yeniden Osmanlı'ya bağlı voyvodalık oldu",
  gun:"12 Mart 1556 — gün YERLESIM-BIRLESTIR-0930 kabulünün kaynağından devralındı (History of Transylvania I, MTA, s. 102); TDV `erdel` olayı anlatır ama TARİHLEMEZ",
  yer:"Erdel (Kaloşvar), Erdel Belgradı (Gyulafehérvár), Brassó (Braşov), Segesvár (Sighişoara)",
  kisiler:"János Zsigmond, İzabella, Martinuzzi (Fráter György), Ferdinand",
  d:"János Zsigmond'un küçük yaşta olması sebebiyle ona vasî tayin edilen Hırvat asıllı papaz Martinuzzi (Fráter György) eliyle Habsburglar 1551'de Erdel'e hâkim olmaya çalıştı; Erdel Belgradı (Gyulafehérvár), Kaloşvar, Brassó ve Segesvár beş yıl Habsburg idaresinde kaldı. Osmanlılar bu durumu önledi ve Erdel yeniden kendisine bağlı haraçgüzâr voyvodalık hâline geldi. Erdel bundan sonra XVI ve XVII. yüzyıllarda yaklaşık 150 yıl boyunca iç işlerinde geniş muhtariyete, dış işlerinde İstanbul'a bağlılığa dayanan statüsünü korudu.",
  kaynak:"erdel", duygu:["🙂"], yer_id:"Erdel (Kaloşvar)",
  ic_not_d:"Bu madde 1551-07-26 → 1556-03-12 Habsburg penceresinin KAPANIŞ kırılmasını kapatır. Açılış kırılması (1551-07-26) atlasta zaten maddeli; `denetle.py` yalnız kapanışı açık bildirdi. ⚠️ AYNI DÜZELTMENİN İKİNCİ KUSURU AYRICA GİDERİLDİ: pencere `d:\"macaristan\"` yazılmıştı, o künye 1526-08-29'da bitiyor ⇒ Değişmez 4 hayaleti. Doğru kimlik `macaristan-habsburg` (f 1526-08-29, t 1918-11-16) ve `harita:` anahtarı ikisinde de `macaristan` olduğu için BOYA DEĞİŞMEDİ. Önerinin kendi `kaynak:` notu da 'künye macaristan-habsburg' diyordu; gövdeye yanlış yazılmış.",
  ic_not_kaynak:"TDV `erdel` (Kemal Karpat) gövdesi okundu, birebir: \"XVI. yüzyılın ortalarında bu yoldaki en önemli faaliyet, Hırvat asıllı bir papaz olan ve Kral János Zsigmond'un küçük yaşta olması sebebiyle ona vasî tayin edilen Martinuzzi (Fráter György) vasıtasıyla gerçekleştirilmiş, Habsburglar onun gayretleriyle Erdel'e hâkim olmaya çalışmışlarsa da bu durum Osmanlılar tarafından önlenmişti.\" · \"Erdel XVI ve XVII. yüzyıllarda yaklaşık 150 yıl süre ile, iç işlerinde sahip olduğu geniş muhtariyete karşılık dış işlerinde İstanbul'a bağlı olarak hareket etti.\" 🔴 TDV bu geri dönüşe GÜN ya da YIL vermiyor; 1551 ve 1556 günleri kabul listesinin kaynağından gelir." }

];

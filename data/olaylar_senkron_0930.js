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

{ t:"1401-01-01", k:"kayip", etiket:["toprak-kayip","diplomasi","konu-siyasi","memluk"],
  b:"Divriği, Timur tehlikesi yüzünden yeniden Memlükler'e verildi",
  gun:"1401 (TDV yıl verir, ay ve gün vermez — 01-01 yalnız yıl işaretidir)",
  yer:"Divriği", yer_id:"Divriği",
  kisiler:"Yıldırım Bayezid, Memlük Sultanı Ferec, Timur",
  d:"Yıldırım Bayezid'in 1398'de Memlükler'den aldığı Divriği, Timur'un Anadolu'ya yaklaşması üzerine 1401'de yeniden Memlükler'e bırakıldı. Bu yüzden Timur'un Sivas'ı yıkmasından (1400) sonra Divriği haritada Memlük renginde görünür; aynı aylarda Bayezid doğuda Erzincan ve Kemah'ı alıyordu, yani Memlük toprağı Osmanlı'nın batıdaki (Sivas) ve kuzeydoğudaki (Kemah) toprakları arasında kaldı. Divriği ancak 1516 Mercidâbık'tan sonra kesin olarak Osmanlı'ya geçti.",
  kaynak:"divrigi", duygu:["😔"],
  ic_not_kaynak:"TDV `divrigi` (Abdülkadir Balgalmış, 1994) gövdesi okundu (9 Ekim 2026, DIVRIGI-MEMLUK-1008), birebir: \"Ancak Divriği yaklaşan Timur tehlikesinden dolayı 1401'de tekrar Memlükler'e verildi.\" · \"Divriği'nin kesin olarak Osmanlı idaresine girişi, Yavuz Sultan Selim'in 24 Ağustos 1516 Mercidâbık Zaferi'nden sonradır.\"",
  ic_not_d:"0085/H-0005 · H-0009 · H-0010 (Emre: 'Timur Sivas'ı yerle bir ettikten sonra neden Divriği Memlük görünmeye başlıyor?'). Kırılma 1401-01-01'de VARDI ama bu yeri anan madde YOKTU: Değişmez 2 yer şartı aramadığı için ±30 gündeki ilgisiz bir madde (Diyarbekir 1401-01-01) kırılmayı kapatıyordu. 'Verildi' fiilinin öznesi kaynakta yok; Bayezid'in bırakması diye okunması TDV cümlesinin yorumu değil, 1398 maddesinin kendi anlatımıyla tutarlıdır." },

{ t:"1400-08-01", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri","memluk"],
  b:"Besni, Timur'un Sivas ve Malatya seferi sırasında Memlükler'e geçti",
  gun:"1400 (TDV yıl verir) — gün komşudan: Sivas (olaylar_ek5 1400-08-01 'Ağustos 1400', kaynak TDV sivas)",
  yer:"Besni (Behisni)", yer_id:"Behisni (Besni)",
  kisiler:"Yıldırım Bayezid",
  d:"Yıldırım Bayezid'in 1398'de Sivas, Darende ve Malatya ile birlikte aldığı Besni, 1400'de Timur Sivas ve Malatya'yı alırken Memlükler'in eline geçti. Timur 27 Eylül 1400'de şiddetli bir kuşatmadan sonra Besni'yi de zaptetti; o bölgeden çekilince Besni yeniden Memlük hâkimiyetine girdi ve 1516 Ağustosunda Yavuz Sultan Selim alana dek (Dulkadırlı bir ara dönem dışında) Memlük'te kaldı.",
  kaynak:"besni", duygu:["😔"],
  ic_not_kaynak:"TDV `besni` gövdesi okundu (9 Ekim 2026, DIVRIGI-MEMLUK-1008-EK), birebir: \"Bu arada 1398’de Sivas, Dârende ve Malatya ile birlikte Osmanlı topraklarına katıldıysa da 1400’de Timur’un Sivas ve Malatya’yı zaptı sırasında Memlükler’in eline geçti. Ancak Timur 27 Eylül 1400’de şiddetli bir muhasaradan sonra burayı zaptetti. Onun bu yöreden çekilmesinden sonra tekrar Memlükler’in hâkimiyetine girdi.\"",
  ic_not_d:"Timur'un 27 Eylül 1400 zaptı haritaya YAZILMADI: çekilişin günü kaynakta yok. Kırılma günü 1400-08-01 yalnız yıl+komşu günüdür." },

{ t:"1414-01-01", k:"savas", etiket:["savas","konu-askeri","memluk","dulkadir"],
  b:"Memlük Sultanı Şeyh, Antep ile Darende'yi Dulkadırlılar'dan geri aldı",
  gun:"1414 (TDV yıl verir, ay ve gün vermez — 01-01 yalnız yıl işaretidir)",
  yer:"Darende, Antep", yer_id:"Darende",
  kisiler:"Memlük Sultanı Şeyh el-Mahmûdî, Dulkadıroğlu Nâsırüddin Mehmed Bey",
  d:"Dulkadırlılar'ın Osmanlılar'la dostluğundan endişelenen Memlük Sultanı Şeyh 1414'te sefere çıktı; daha önce kendi rızasıyla Dulkadırlılar'a verdiği Antep ile Darende'yi geri aldı.",
  kaynak:"dulkadirogullari", duygu:["⚔️"],
  ic_not_kaynak:"TDV `dulkadirogullari` gövdesi okundu (9 Ekim 2026, DIVRIGI-MEMLUK-1008-EK), birebir: \"Dulkadırlılar’ın Osmanlılar’la dostluk münasebetleri Memlükler’i endişelendirmeye başladı. Sultan Şeyh 1414 yılında sefere çıkarak daha önce kendi rızası ile verdiği Antep şehriyle Dârende’yi Dulkadırlılar’dan geri aldı.\"" },

{ t:"1418-01-01", k:"savas", etiket:["savas","konu-askeri","memluk","dulkadir"],
  b:"Dulkadıroğlu Mehmed Bey Darende'yi geri aldı, Besni'yi de topraklarına kattı",
  gun:"1418 (TDV yıl verir, ay ve gün vermez — 01-01 yalnız yıl işaretidir)",
  yer:"Darende, Besni", yer_id:"Darende",
  kisiler:"Dulkadıroğlu Nâsırüddin Mehmed Bey",
  d:"Memlükler'in 1414'te aldığı Darende'yi Dulkadıroğlu Mehmed Bey 1418'de geri aldı ve Besni'yi de topraklarına kattı.",
  kaynak:"dulkadirogullari", duygu:["⚔️"],
  ic_not_kaynak:"TDV `dulkadirogullari` gövdesi okundu (9 Ekim 2026), birebir: \"Fakat Mehmed Bey 1418’de Dârende’yi tekrar aldığı gibi Besni’yi de ülkesine kattı.\"",
  ic_not_d:"⚠️ Besni'nin 1418 Dulkadır dönemi haritaya YAZILMADI: TDV besni yalnız 'Bir ara Dulkadıroğulları’nın idaresine tâbi oldu ise de XV. yüzyılın sonlarına doğru yeniden Memlükler’in eline geçti' der, BİTİŞ yılı yok. Madde Besni için kırılmasız kalır (Değişmez 2t ailesi) — bu bilinçli bir beyandır." },

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

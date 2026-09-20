// -*- coding: utf-8 -*-
// SEFERLER_P0071 — SEFER-OK-0070 oturumu, 20 Eylül 2026 · DALGA-0071 H-0003 · H-0007 (sevk M-4739)
// Konu: ① 1807 Duckworth deniz harekâtı (kesikli çizgi ile gösterilecek deniz güzergâhı)
//       ② YURT İÇİ HAREKÂT okları — Emre: "bu tip yurt içi hareket ve eylemlerde okları
//          gösterelim ... bunun gibi maddelerde bu standart olmalı" (H-0007)
//
// OKUYUCU: js/app.js seferKayitlariniTopla() — /^SEFERLER(_[A-Za-z0-9_]+)?$/ deseni.
// AD ALANI (§7): data/seferler_p0071.js → window.SEFERLER_P0071. index.html satırı UI'nin
// (koordinatör ekler); bağlanmadan CANLI DEĞİLDİR (D099).
// ŞEMA: data/seferler_p0068.js ile aynı (ad · tur · sonuc · taraf · devlet · renk · f · t ·
//   tarih_hassasiyet · kaynak · kesinlik · yol[[lon,lat]…]). sonuc Osmanlı gözünden.
//
// 🔴 KOORDİNAT — BİLİNÇLİ VE P0068'İN TERSİ BİR TERCİH, teslimde koordinatöre soruldu:
//   p0068 "atlas yerleşim noktası KULLANILMADI, GeoNames yerel kopyası" diyor. O kopya bu
//   makinede YOK (arandı: veri-kaynak/ altında GeoNames dosyası bulunmuyor). İki seçenek
//   kaldı: (a) koordinatı dışarıdan tek tek çekmek, (b) atlasın KENDİ yerleşim noktalarını
//   kullanmak. (b) seçildi, çünkü bu oklar ŞEHİR İŞARETLERİYLE ÇAKIŞMALI — ok Edirne'ye
//   varıyorsa haritadaki Edirne işaretinin üstünde bitmeli. ⚠️ BEDELİ AÇIKÇA YAZILIYOR:
//   atlas noktası bir KAYNAK DEĞİLDİR (D207); nokta yanlışsa ok da yanlış olur ve hata
//   görünmez kalır. Yalnız YER adları kaynaktan, KONUMLARI atlastan.
//
// TARİHLER: gün kaynaktan; kaynağın vermediği uçlar `tarih_hassasiyet`te BAĞLI UÇ diye
// işaretli (§4 — sahte kesinlik yok).
//
// KAYNAKLAR
//   TDV `canakkale-bogazi` · TDV `hareket-ordusu` · TDV `edirne-vakasi`
//   (üçü de 20 Eylül 2026'da açıldı; alıntılar gövdeden birebir)

window.SEFERLER_P0071 = [

// ═══ ① H-0003 — DUCKWORTH HAREKÂTI (deniz) ═══════════════════════════════
{ id:"p0071-duckworth-1807", ad:"İngiliz donanmasının Çanakkale'den İstanbul önlerine gelişi (1807)",
  tur:"deniz", sonuc:"belirsiz", taraf:"dusman", devlet:"ingiltere",
  f:"1807-02-19", t:"1807-02-20",
  tarih_hassasiyet:"f: GÜN (Boğaz'dan geçiş — TDV) · t: GÜN (İstanbul önlerine geliş; kronoloji maddesi 1807-02-20). Donanmanın Ege'den yola çıkış günü ve 3 Mart'taki geri çekilişi OKUNAN KAYNAKTA YOK — ok yalnız Boğaz'dan İstanbul önüne kadar çizildi, çekiliş kolu ÇİZİLMEDİ.",
  kaynak:"canakkale-bogazi (TDV): \"Nitekim 1807 yılının 19 Şubatında bir İngiliz donanmasının Çanakkale Boğazı'ndan fazla bir zorlukla karşılaşmadan geçmesi\" · kronoloji maddesi (data/olaylar_ek5.js, 1807-02-20): \"İngiliz donanmasının İstanbul önlerine gelmesi (Duckworth harekâtı)\"",
  kesinlik:"İSTASYON yalnız iki uç: Çanakkale Boğazı ve İstanbul önü. Aradaki üç nokta YALNIZ DENİZ GEOMETRİSİDİR (Boğaz ekseni ve Marmara); kaynakta uğrak yeri adı geçmiyor. Rota Marmara'nın ortasından geçirildi ki ok karaya girmesin.",
  yol:[[26.17,40.02],[26.409,40.147],[26.68,40.42],[27.60,40.72],[28.90,40.87]] },

// ═══ ② H-0007 — YURT İÇİ HAREKÂT OKLARI ══════════════════════════════════
// Emre'nin adıyla andığı iki örnek. Üçüncüsü (Alemdar'ın Rusçuk→İstanbul yürüyüşü)
// ZATEN VAR ve İKİ KEZ: data/savaslar.js (SEFERLER) ve data/seferler_ok103.js
// (SEFERLER_OK103) — mükerrer, teslimde hüküm verildi, buraya KOPYALANMADI.
{ id:"p0071-hareket-ordusu-1909", ad:"Hareket Ordusu'nun Selanik'ten İstanbul'a yürüyüşü (1909)",
  tur:"sefer", sonuc:"belirsiz", taraf:"osmanli",
  f:"1909-04-14", t:"1909-04-24",
  tarih_hassasiyet:"f: GÜN (Selanik'ten yola çıkış) · Çatalca 16 Nisan (öncü) · Yeşilköy 19 Nisan · Bakırköy 20 Nisan · İstanbul'a giriş 22-23 Nisan gecesi · t: GÜN (Yıldız Sarayı'nın teslimi, 24 Nisan)",
  kaynak:"hareket-ordusu (TDV): \"14 Nisan 1909 günü Hareket Ordusu'nun Arnavut, Bulgar, Rum, Sırp, Makedon vb. milletlerden oluşan gönüllü birlikleri yola çıktı\" · \"19 Nisan 1909 günü Yeşilköy'e hâkim oldu. 20 Nisan'da Bakırköy'e girildi\" · \"22 Nisan gecesi Dâvud Paşa Kışlası'nı işgal etti\" · \"Kuşatılan Yıldız Sarayı karşı koymaksızın 24 Nisan'da teslim oldu\" · Çatalca'ya öncü birliğin 16 Nisan'da ulaştığı aynı gövdede yazılı",
  kesinlik:"Selanik-Çatalca arası Rumeli demiryoluyla katedildi; ARA İSTASYON kaynakta adıyla geçmiyor, bu yüzden iki nokta arası düz hat. Bakırköy ve Yeşilköy atlasın yerleşim havuzunda AYRI kayıt olarak yok — Yeşilköy için atlasın kendi kaydındaki nokta kullanıldı (data/savaslar.js, \"Rus ordusunun Yeşilköy'e gelişi (1878)\" okunun ucu), Bakırköy ayrı nokta olarak KONULMADI (Yeşilköy ile İstanbul arasında kalıyor).",
  yol:[[22.944,40.64],[28.4611,41.1436],[28.82,40.96],[28.98,41.008]] },

{ id:"p0071-edirne-vakasi-1703", ad:"Edirne Vak'ası — âsilerin İstanbul'dan Edirne'ye yürüyüşü (1703)",
  tur:"isyan", sonuc:"belirsiz",
  f:"1703-07-17", t:"1703-08-22",
  tarih_hassasiyet:"f: BAĞLI UÇ — 17 Temmuz 1703 İSYANIN BAŞLADIĞI gündür (cebecilerin ulûfe talebi); âsilerin İstanbul'dan yola çıkış günü kaynakta YOK. Silivri, Çorlu ve Havsa uğrakları kaynakta ADIYLA geçiyor ama GÜNSÜZ. t: GÜN (II. Mustafa'nın hal'i, kronoloji maddesi 1703-08-22).",
  kaynak:"edirne-vakasi (TDV): \"İstanbul'dan yola çıkanlar Silivri'ye gelince II. Mustafa'nın küçük kardeşi Ahmed'i tahta geçirmeye karar verdiler\" — Çorlu ve Havsa aynı gövdede uğrak olarak anılıyor; kaynak bu üç yere GÜN vermiyor · kronoloji maddeleri: 1703-07-17 \"Edirne Vak'ası'nın başlaması\", 1703-08-22 \"Edirne Vakası — II. Mustafa'nın hal'i\"",
  kesinlik:"İSTASYONLAR yalnız kaynakta adı geçen yerler: İstanbul · Silivri · Çorlu · Havsa · Edirne. Gövdede anılan \"Eğridere\" atlasın yerleşim havuzunda bulunamadı, yola KONULMADI.",
  yol:[[28.98,41.008],[28.2493,41.0791],[27.80,41.158],[26.821,41.552],[26.556,41.677]] }

];

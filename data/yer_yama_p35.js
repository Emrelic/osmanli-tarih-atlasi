// data/yer_yama_p35.js — UYGULAMA-0035
// Kaynak: parti-emrelic-0035/H-0005 — Çaçak/Kragujevac/Yagodina'nın
// 1689-1690 Avusturya dönemi (Habsburg'un Belgrad sonrası ilerleyişi,
// Fazıl Mustafa Köprülü'nün 1690 geri alınışı) veride hiç yoktu; üçü de
// 1459-1717 arasını KESİNTİSİZ Osmanlı gösteriyordu (py arac/_yer_ara.py
// ile doğrulandı, 28 Ağustos 2026).
// ⚠️ KESİN GÜN TDV'DE ÜÇ ŞEHRE ÖZEL BULUNAMADI — tarihler, veride ZATEN
// kayıtlı komşu olay maddeleriyle ("Niş ve Vidin'in kaybı" 1689-09-24,
// "Niş, Vidin ve Belgrad geri alındı" 1690-09-09; data/olaylar.js) HİZALANDI,
// çünkü üçü de aynı 1689 Habsburg seferinin (Piccolomini/Baden) ve aynı 1690
// Köprülü karşı taarruzunun parçası. Bu bir ÇIKARIMDIR, TDV alıntısı DEĞİL.
// 🔴 29 Ağustos DÜZELTME 1 (M-1518, koordinatörün gün-maddesiz taraması):
// dönüş günü ilk yazımda 1690-09-08 idi (mevcut maddeden BİR GÜN önce,
// çakışmayı önlemek için) — bu, külliyatta karşılığı olmayan bir kırılma
// günü üretiyordu. (b) yolu seçildi: gün, külliyatta VAR OLAN 1690-09-09'a
// kaydırıldı.
// 🔴🔴 29 Ağustos DÜZELTME 2 (M-1580, `arac/_sahiplik_uygula.py` yazımı
// GERİ ALINDI): `s:` dizisini yalnız YENİ 1689-1690 dönemiyle yazmıştım;
// uygulayıcı bunu "var olan diziNİN YERİNE" okudu ve Çaçak'ta 1717-1830
// arası 113 YIL sahipsiz kaldı (Değişmez 1 215→217, 1b 0→2 — denetim
// yakaladı, yazım geri alındı). Düzeltme: `s:`/`d:` dizileri artık TAM —
// orijinal altı `s:` dönemi (git show 3cf33e9~1 ile doğrulandı) KORUNDU,
// yalnız araya 1689-09-24→1690-09-09 Avusturya dönemi EKLENDİ; `d:` bloğu
// (1459-06-20→1717-08-18) buna göre ikiye BÖLÜNDÜ.
window.YER_YAMA_P35 = [

 {ad:"Çaçak",
  d:[{f:"1439-08-27",t:"1444-08-01"}, {f:"1459-06-20",t:"1689-09-24"}, {f:"1690-09-09",t:"1717-08-18"}, {f:"1739-09-18",t:"1830-11-08"}],
  s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"}, {f:"1444-08-01",t:"1459-06-20",d:"sirp-despotlugu"}, {f:"1689-09-24",t:"1690-09-09",d:"avusturya"}, {f:"1717-08-18",t:"1739-09-18",d:"avusturya"}, {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"}, {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"}, {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  v:[{f:"1830-11-08",t:"1878-07-13",k:"Sırbistan Prensliği"}],
  kaynak:"bulunamadı — TDV'de Çaçak'a özel gün yok; tarih komşu Niş/Vidin kaydıyla (data/olaylar.js, 1689-09-24 / 1690-09-09) hizalandı, aynı 1689 Habsburg seferi/1690 Köprülü taarruzu",
  neden:"1689-1690 Avusturya dönemi (H-0005) hiç yoktu; DÜZELTME 2: dizi TAM yazıldı (bkz. yukarı), önceki kısmi yazım 1717-1830 arasını 113 yıl sahipsiz bırakmıştı"},

 {ad:"Kragujevac",
  d:[{f:"1439-08-27",t:"1444-08-01"}, {f:"1459-06-20",t:"1689-09-24"}, {f:"1690-09-09",t:"1717-08-18"}, {f:"1739-09-18",t:"1830-11-08"}],
  s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"}, {f:"1444-08-01",t:"1459-06-20",d:"sirp-despotlugu"}, {f:"1689-09-24",t:"1690-09-09",d:"avusturya"}, {f:"1717-08-18",t:"1739-09-18",d:"avusturya"}, {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"}, {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"}, {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  v:[{f:"1830-11-08",t:"1878-07-13",k:"Sırbistan Prensliği"}],
  kaynak:"bulunamadı — TDV'de Kragujevac'a özel gün yok; tarih komşu Niş/Vidin kaydıyla (data/olaylar.js, 1689-09-24 / 1690-09-09) hizalandı, aynı 1689 Habsburg seferi/1690 Köprülü taarruzu",
  neden:"1689-1690 Avusturya dönemi (H-0005) hiç yoktu; DÜZELTME 2: dizi TAM yazıldı, önceki kısmi yazım 1717-1830 arasını 113 yıl sahipsiz bırakmıştı"},

 {ad:"Yagodina (Jagodina)",
  d:[{f:"1439-08-27",t:"1444-08-01"}, {f:"1459-06-20",t:"1689-09-24"}, {f:"1690-09-09",t:"1717-08-18"}, {f:"1739-09-18",t:"1830-11-08"}],
  s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"}, {f:"1444-08-01",t:"1459-06-20",d:"sirp-despotlugu"}, {f:"1689-09-24",t:"1690-09-09",d:"avusturya"}, {f:"1717-08-18",t:"1739-09-18",d:"avusturya"}, {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"}, {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"}, {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  v:[{f:"1830-11-08",t:"1878-07-13"}],
  kaynak:"bulunamadı — TDV'de Yagodina'ya özel gün yok; tarih komşu Niş/Vidin kaydıyla (data/olaylar.js, 1689-09-24 / 1690-09-09) hizalandı, aynı 1689 Habsburg seferi/1690 Köprülü taarruzu",
  neden:"1689-1690 Avusturya dönemi (H-0005) hiç yoktu; DÜZELTME 2: dizi TAM yazıldı, önceki kısmi yazım 1717-1830 arasını 113 yıl sahipsiz bırakmıştı"},

 // H-0060 — üç BAĞIMSIZ ölçümle doğrulanmış veri hatası (bugün erken BAYAT
 // AVCISI turu + bu oturumun node sorgusu + alt-oturum taraması, hepsi aynı
 // sonuca vardı, güven YÜKSEK). py arac/_yer_ara.py ile doğrulandı: Mersin'in
 // d: dizisi 1352-01-01'de başlıyor — komşuları Tarsus/Adana ile aynı desende
 // olması gerekirken (1352 kilikya-ermeni→ramazanoğlu, 1516-08-24 Mercidabık'ta
 // Osmanlı) aradaki ramazanoglu dönemi (164 yıl) atlanmış, muhtemelen
 // kopyala-yapıştır hatası. Orhan Gazi döneminde (1326-1362) Osmanlı Mersin'e
 // hiç ulaşmamıştı — pkg 0031/H-0007'nin de bağımsız bulduğu aynı kusur.
 {ad:"Mersin",
  d:[{f:"1516-08-24",t:"1918-10-30"}, {f:"1921-10-20",t:"1923-10-29"}],
  s:[{f:"1281-01-01",t:"1352-01-01",d:"kilikya-ermeni"}, {f:"1352-01-01",t:"1516-08-24",d:"ramazanoglu"}, {f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
  kaynak:"BULGU-BAYAT-TARAMA.md + bu oturumun node sorgusu + alt-oturum taraması (üç bağımsız ölçüm) — Tarsus/Adana'nın aynı desenine göre",
  neden:"d: 1352-01-01'den başlıyordu (Orhan Gazi döneminde Osmanlı Mersin'e hiç ulaşmamıştı); komşu Tarsus/Adana deseninde eksik olan ramazanoglu dönemi (1352->1516-08-24) eklendi, d: başlangıcı Mercidabık'a (1516-08-24) çekildi"},

];

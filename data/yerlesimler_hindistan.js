// =====================================================================
// NOKTA A · HİNDİSTAN İÇİ — Sonnet hazır kıta 22
// Görev: tahta M-0638 (Kol A · nokta · Hindistan içi)
// Şartname: BES-ALTYAPI.md ③ ve M-0624 (Kol A tarifi)
//
// ═══════════ KAPSAM VE İLK TUR SONUCU ═══════════
// Mevcut veri (girdi.py, 2589 nokta) taranıp Hindistan kutusunda
// (6-36°K, 66-93°D) 128 nokta bulundu — bunların ezici çoğunluğu KIYI/
// LİMAN şehirleri (Bombay, Kalküta, Madras, Surat, Goa...) ve büyük
// başkentler (Delhi, Agra, Haydarâbâd, Leknev...). İÇ Hindistan'daki
// ikincil hanedan/bölge merkezlerinin çoğu EKSİK (Gond krallıkları,
// Bundelkhand, ikincil Rajput devletleri, Kuzeydoğu Hindistan
// krallıkları, Himalaya krallıkları — 25 aday araştırıldı).
//
// 🔴 25 ADAYDAN YALNIZ 2'Sİ BU TURDA YAZILDI — sebebi kaynak disiplini,
// eksiklik değil. CLAUDE.md §4 kırmızı çizgisi gereği (TDV yoksa
// AKADEMİK/GÜVENİLİR/BİLİMSEL kaynak şart, Vikipedi TEK DAYANAK OLAMAZ):
// 23 adayın kaynağı ya yalnızca Wikipedia/turizm sitesi/sınav-hazırlık
// sitesiydi (Bundi, Panna, Alwar, Sirohi, Banswara, Garha-Mandla,
// Deogarh, Chanda/Chandrapur, Charaideo-Ahom, Manipur, Tripura-Udaipur,
// Cooch Behar, Srinagar-Garhwal, Almora, Rabdentse-Sikkim, Madikeri-
// Coorg, Ratanpur, Jagdalpur-Bastar) ya da Britannica maddesi VARDI ama
// bu turda HTTP 403 ile erişilemedi ve doğrudan alıntı ALINAMADI (Kota,
// Orchha, Dungarpur, Kherla, Gorkha) — bunlar "bulunamadı" DEĞİL,
// "araştırıldı, doğrudan alıntı bu turda alınamadı" diye işaretli.
// Uydurmadım, yazmadım. Devamı bir sonraki turda (Imperial Gazetteer of
// India taranmış hâli / archive.org tam metin / Britannica'ya farklı
// yoldan erişim denenecek).
//
// ═══════════ YAZILAN İKİ KAYIT — KAYNAK ═══════════
// TDV İslâm Ansiklopedisi, "FÂRÛKÎLER" md. — https://islamansiklopedisi.org.tr/farukiler
//   (canlı, içerik okundu, tam metin)
// TDV İslâm Ansiklopedisi, "BURHÂNPÛR" md. — https://islamansiklopedisi.org.tr/burhanpur
//   (canlı, içerik okundu, tam metin)
//
// Alıntılar:
//  "Melik Ahmed daha sonra merkezî idarenin zayıflaması üzerine
//   istiklâlini ilân ederek Fârûkīler hânedanını kurmuştur (772/1370)."
//  "Başşehirleri Asîrgarh ve Burhânpûr'dur."
//  "[Burhanpur] Nasîr Han el-Fârûkī tarafından 801 (1398-99) yılı
//   civarında devletin yeni merkezi olarak kurulmuş[tur]."
//  "Bâbürlü ordusu 1601'de Handeş'i istilâ edip Asîrgarh'ı kuşattı;
//   muhasara sonunda şehir Bâbürlüler'in eline geçti." · "Handeş
//   Bâbürlüler'e bağlı eyalet haline getirildi (1009/1601)."
//  "Burhânpûr Maratalar tarafından yağmalandı (1685)." · "Maratalar
//   tarafından işgal edilen şehir sonraları birkaç defa el değiştirdi."
//  "[Burhanpur] nihayet 1860'ta İngilizler'in eline geçti. Hindistan'ın
//   bağımsızlığını kazandığı 1947 yılına kadar İngiliz yönetiminde
//   kaldı."
//
// 🔴 YENİ KÜNYE BORCU — `farukiler` (Fârûkîler / Handeş Sultanlığı)
//   devletler.js'te YOK. id:"farukiler", bolge:"guney-asya",
//   f:"1370-01-01", t:"1601-01-01", baskent:"Asîrgarh / Burhânpûr",
//   kaynak: TDV "farukiler" md. Ben devletler.js'e yazmıyorum (dosya
//   benim değil), tahtaya bildiriyorum.
//   ⚠️ `uret_petek.py` BOYALAR sözlüğünde de "farukiler" için renk
//   YOK — künye eklenmeden bu iki kayıt boyanmaz (bilinen gecikme,
//   §11 "çıktı girdinin bir tur gerisinde" — kayıtlı).
//
// ⚠️ 1601-1860 ARASI BASİTLEŞTİRME, AÇIKÇA İŞARETLİ: TDV Burhanpur'un
//   1685'te Marathalarca yağmalandığını ve sonra "birkaç defa el
//   değiştirdi"ğini yazıyor ama ARA DÖNEMLERİN hiçbirine tarih
//   vermiyor. Ayrı bir Maratha kaydı açmak UYDURMA tarih gerektirirdi;
//   bunun yerine TDV'nin verdiği tek kesin sonraki tarihe (1860,
//   İngiliz kontrolü) kadar `babur-imparatorlugu` SÜRDÜRÜLDÜ — bu
//   Panama/Quito örneğindeki "viceroyalty geçişi ayrı künyeye
//   dönüştürülmedi" basitleştirmesiyle AYNI mantık (bilinen ama kabul
//   edilmiş sadeleştirme, TDV'nin kendi metninin boşluğu).
//
// ⚠️ ASÎRGARH'IN 1281-1370 ARASI SAHİBİ TDV'DE AÇIKÇA YAZMIYOR —
//   ÇIKARIM: "Melik Ahmed ... merkezî idarenin zayıflaması üzerine
//   istiklâlini ilân ederek" cümlesi, önceden bir MERKEZE (Delhi
//   Sultanlığı) bağlı olduğunu İMA EDİYOR; bu, Handeş'in 1370 öncesi
//   Delhi Sultanlığı'nın bir valiliği olduğu yönündeki genel akademik
//   konsensüsle DE uyumlu. Ama bu satır AYRI bir birincil kaynakla
//   doğrudan alıntılanarak DOĞRULANMADI — çıkarım olduğu açıkça
//   yazılıyor, gizlenmiyor.
//
// 3 KM KURALI: Asîrgarh → en yakın mevcut kayıt Elicpûr (Achalpur),
//   ~130 km · Burhânpûr → aynı, ~133 km. İhlal yok (py ile ölçüldü,
//   2589 noktanın tamamına karşı).

window.YERLESIMLER_HINDISTAN = [

{ ad:"Asîrgarh", tur:"kale", lat:21.43, lon:76.27, g:1, k:2, d:[],
  s:[{f:"1281-01-01", t:"1370-01-01", d:"delhi-sultanligi"},
     {f:"1370-01-01", t:"1601-01-01", d:"farukiler",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin kapanış kırılmasını anlatan kronoloji maddesi «Ekber Şah Asîrgarh'ı aldı, Handeş Bâbürlü eyaleti oldu ve Fârûkîler sona erdi» (1601-01-01, yer kolu) kaynağı — TDV: farukiler (Enver Konukçu, 1995) · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},
     {f:"1601-01-01", t:"1857-09-21", d:"babur-imparatorlugu","kaynak":"[P4-KUME3 (13 Kasım 2026, Değişmez 4c künye ölümünü aşma): dönem sonu 1860-01-01 → 1857-09-21 kısaltıldı; aşağıdaki eski kaynak yalnız eski bitişi anlatır. babur-imparatorlugu künyesi t=1857-09-21.]"},{"f":"1857-09-21","t":"1860-01-01","d":"__BOSLUK__","kaynak":"BOŞLUK BEYANI (arandı, bulunamadı): babur-imparatorlugu künyesi t=1857-09-21 (Delhi'nin düşüşü). 1857-1860 Asîrgarh/Burhânpûr sahibi (Scindia/İngiliz idaresi) kaynakla bulunamadı; TDV'de bu iki yer için madde okunmadı. Dönem sonu (1860-01-01, İngiliz Hindistanı başlangıcı) korunur. | P4-KUME3 (13 Kasım 2026, Değişmez 4c künye ölümünü aşma)"},
     {f:"1860-01-01", t:"1947-08-15", d:"ingiliz-hindistani",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin kapanış kırılmasını anlatan kronoloji maddesi «Hindistan (Dominyon 1947; Cumhuriyet 1950-01-26) egemenliğine geçti — Banavasi» (1947-08-15, taraf kolu) kaynağı — Indian Independence Act 1947, md.1(1) (en.wikisource.org/wiki/Indian_Independence_Act_1947; açıldı, okundu): «As from the fifteenth day of August, nineteen hundred and forty-seven, two independent Dominions shall be set up in India, to be known respectively as India and Pakistan.» ‖ V. P. Menon, The Story of the Integration of the Indian States, 1956 (archive.org dli.ernet.527198): “The States in … · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"DEVRALMA (DUNYA-1102 D adımı, 2 Kasım 2026): künye hindistan-cumhuriyeti f ucunun kaynağı — Indian Independence Act 1947, s.1 (legislation.gov.uk/ukpga/Geo6/10-11/30/enacted) — «As from the fifteenth day of August, nineteen hundred and forty-seven, two independent Dominions shall be set up in India» · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil · önceki kaynak yasak listede, değiştirildi: Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },
// kaynak: TDV "farukiler" md. — Fârûkîler hanedanının iki başşehrinden
//   biri ("Başşehirleri Asîrgarh ve Burhânpûr'dur"), 772/1370'te
//   kuruldu, 1601'de Bâbürlü kuşatmasıyla düştü.
// 1281-1370 sahibi: ÇIKARIM (yukarıya bak), doğrudan alıntı DEĞİL.
// 1601-1860 sahibi: TDV'nin kendi boşluğu nedeniyle basitleştirildi
//   (yukarıya bak).
// k gerekçesi: bağımsız bir sultanlığın (Handeş) BAŞŞEHRİ — Bicapur/
//   Golkonda/Ahmednagar gibi komşu Dekken sultanlıklarıyla AYNI tier,
//   k:2.

{ ad:"Burhânpûr", tur:"sehir", lat:21.30, lon:76.23, g:1, k:2, kur:"1398-01-01", d:[],
  s:[{f:"1398-01-01", t:"1601-01-01", d:"farukiler",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin kapanış kırılmasını anlatan kronoloji maddesi «Ekber Şah Asîrgarh'ı aldı, Handeş Bâbürlü eyaleti oldu ve Fârûkîler sona erdi» (1601-01-01, taraf kolu) kaynağı — TDV: farukiler (Enver Konukçu, 1995) · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},
     {f:"1601-01-01", t:"1857-09-21", d:"babur-imparatorlugu","kaynak":"[P4-KUME3 (13 Kasım 2026, Değişmez 4c künye ölümünü aşma): dönem sonu 1860-01-01 → 1857-09-21 kısaltıldı; aşağıdaki eski kaynak yalnız eski bitişi anlatır. babur-imparatorlugu künyesi t=1857-09-21.]"},{"f":"1857-09-21","t":"1860-01-01","d":"__BOSLUK__","kaynak":"BOŞLUK BEYANI (arandı, bulunamadı): babur-imparatorlugu künyesi t=1857-09-21 (Delhi'nin düşüşü). 1857-1860 Asîrgarh/Burhânpûr sahibi (Scindia/İngiliz idaresi) kaynakla bulunamadı; TDV'de bu iki yer için madde okunmadı. Dönem sonu (1860-01-01, İngiliz Hindistanı başlangıcı) korunur. | P4-KUME3 (13 Kasım 2026, Değişmez 4c künye ölümünü aşma)"},
     {f:"1860-01-01", t:"1947-08-15", d:"ingiliz-hindistani",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin kapanış kırılmasını anlatan kronoloji maddesi «Hindistan (Dominyon 1947; Cumhuriyet 1950-01-26) egemenliğine geçti — Banavasi» (1947-08-15, taraf kolu) kaynağı — Indian Independence Act 1947, md.1(1) (en.wikisource.org/wiki/Indian_Independence_Act_1947; açıldı, okundu): «As from the fifteenth day of August, nineteen hundred and forty-seven, two independent Dominions shall be set up in India, to be known respectively as India and Pakistan.» ‖ V. P. Menon, The Story of the Integration of the Indian States, 1956 (archive.org dli.ernet.527198): “The States in … · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"DEVRALMA (DUNYA-1102 D adımı, 2 Kasım 2026): künye hindistan-cumhuriyeti f ucunun kaynağı — Indian Independence Act 1947, s.1 (legislation.gov.uk/ukpga/Geo6/10-11/30/enacted) — «As from the fifteenth day of August, nineteen hundred and forty-seven, two independent Dominions shall be set up in India» · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil · önceki kaynak yasak listede, değiştirildi: Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] }
// kaynak: TDV "burhanpur" md. — Nâsır Han el-Fârûkî tarafından
//   801/1398-99'da hanedanın yeni merkezi olarak kuruldu, Fârûkîler'in
//   başşehri olarak kaldı, 1601'de Bâbürlüler'e geçti, 1685'te
//   Marathalarca yağmalandı, "birkaç defa el değiştir"dikten sonra
//   1860'ta kesin olarak İngilizler'in eline geçti (1947'ye kadar
//   İngiliz yönetiminde kaldı).
// k gerekçesi: Asîrgarh ile aynı — bağımsız sultanlığın ikinci/asıl
//   başşehri, sonra önemli bir Bâbürlü eyalet merkezi — k:2.

];

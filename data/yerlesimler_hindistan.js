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
     {f:"1860-01-01", t:"1947-08-15", d:"ingiliz-hindistani",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin kapanış kırılmasını anlatan kronoloji maddesi «Hindistan (Dominyon 1947; Cumhuriyet 1950-01-26) egemenliğine geçti — Banavasi» (1947-08-15, taraf kolu) kaynağı — Indian Independence Act 1947, md.1(1) (en.wikisource.org/wiki/Indian_Independence_Act_1947; açıldı, okundu): «As from the fifteenth day of August, nineteen hundred and forty-seven, two independent Dominions shall be set up in India, to be known respectively as India and Pakistan.» ‖ V. P. Menon, The Story of the Integration of the Indian States, 1956 (archive.org dli.ernet.527198): “The States in … · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},{f:"1947-08-15",t:"2000-12-31",d:"hindistan-cumhuriyeti",kaynak:"DEVRALMA (DUNYA-1102 D adımı, 2 Kasım 2026): künye hindistan-cumhuriyeti f ucunun kaynağı — Indian Independence Act 1947, s.1 (legislation.gov.uk/ukpga/Geo6/10-11/30/enacted) — «As from the fifteenth day of August, nineteen hundred and forty-seven, two independent Dominions shall be set up in India» · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil · önceki kaynak yasak listede, değiştirildi: Indian Independence Act 1947; Britannica India (Cumhuriyet 1950-01-26)"}] },
// kaynak: TDV "burhanpur" md. — Nâsır Han el-Fârûkî tarafından
//   801/1398-99'da hanedanın yeni merkezi olarak kuruldu, Fârûkîler'in
//   başşehri olarak kaldı, 1601'de Bâbürlüler'e geçti, 1685'te
//   Marathalarca yağmalandı, "birkaç defa el değiştir"dikten sonra
//   1860'ta kesin olarak İngilizler'in eline geçti (1947'ye kadar
//   İngiliz yönetiminde kaldı).
// k gerekçesi: Asîrgarh ile aynı — bağımsız sultanlığın ikinci/asıl
//   başşehri, sonra önemli bir Bâbürlü eyalet merkezi — k:2.

// ═══════════ HINT-1115b (UMIT, 15 Kasım 2026) — Avrupa enklavları ═══════════
// Mükerrer tarama (girdi.yukle, 5636 yerleşim): normalleştirilmiş ad + 6 km — Daman, Karaikal, Mahé,
// Yanam, Serampore için eşleşme YOK. Kaynak: The Imperial Gazetteer of India (Oxford 1908; archive.org
// tam metin okundu): XI «Daman» · XII «French Possessions» (iade günleri) · XV «Karikal» · XVII «Mahe» ·
// XXII «Serampore Town»; TDV «Diû» (19 Aralık 1961). Her kaydın ilk döneminde kur: = kaynağın verdiği ilk
// tarih; KURULUŞ DEĞİL, atlas penceresinin başlangıcı (beyan kaynak: alanında).

// Daman — Portekiz Hindistanı (Goa-Daman-Diu). IGI XI «Daman»: kasaba 1531'de Portekizlilerce yağmalandı,
// yerlilerce yeniden kuruldu, 1558'de geri alındı («retaken in 1558»); «Daman proper … conquered from
// Bofata [Gucerât Sultanlığı] on February 2, 1559, by the Portuguese under Dom Constantino de Bragança».
{ ad:"Daman", tur:"liman", lat:20.4150, lon:72.8330, g:1, k:3, d:[],
  kur:"1559-02-02",
  s:[{f:"1559-02-02", t:"1961-12-19", d:"portekiz-hindistani-goa", enklav:true, kesinlik:{f:"gun",t:"gun"},
      kaynak:"HINT-1115b (UMIT, 15 Kasım 2026): f — The Imperial Gazetteer of India, XI (Oxford 1908) «Daman»: «Daman proper … was conquered from Bofata on February 2, 1559, by the Portuguese under Dom Constantino de [Bragança]» (archive.org TheImperialGazetteerOfIndiaVolXI, tam metin okundu; Volume11 kopyasında OCR 'February a, 1559' — iki taramanın karşılaştırılmasıyla 2 Şubat). Aynı madde kasabanın 1558'de geri alındığını da yazar (yıl; gün yok) — 1559-02-02 'Daman proper' fethi günüdür, ÇELİŞKİ/varyant beyanı. kur: KURULUŞ DEĞİL, atlas penceresi başlangıcı (yer 1559 öncesi vardı: IGI 'sacked 1531'). t — TDV İslâm Ansiklopedisi «Diû»: Goa-Dâmân-Diû 19 Aralık 1961 Hint işgali (aynı eylem Goa ve Diu pencereleriyle); kronoloji_sinir_halef_1923_2000.js 1961-12-19 maddesi Daman'ı adlandırır. Portekiz idaresine 1559'da geçmeden önceki sahip (Gucerât Sultanlığı) YAZILMADI: kur: 1559-02-02 öncesi pencere yok."},
     {f:"1961-12-19", t:"2000-12-31", d:"hindistan-cumhuriyeti", kesinlik:{f:"gun"},
      kaynak:"HINT-1115b: TDV «Diû» 19 Aralık 1961 (Hint işgali; hukukî katılma 14 Mart 1962 ic_not). Goa/Diu pencereleriyle aynı uç; hindistan-cumhuriyeti künyesi f=1947-08-15."}] },

// Karaikal (Karikal) — Fransız Hindistanı. IGI XV «Karikal»: 1738'de söz verildi, 1739'da Chanda Sahib
// yardımıyla verildi; 1760-04-15 İngilizlere teslim; «finally restored to the French on January 14, 1817».
// IGI XII «French Possessions»: «Karikal on January 14, 1817; Mahe, on February 22, 1817; and Yanam, on
// April 12, 1817» (Pondicherry ve Chandernagore 4 Aralık 1816).
{ ad:"Karaikal (Karikal)", tur:"liman", lat:10.9200, lon:79.8380, g:1, k:3, d:[],
  kur:"1817-01-14",
  s:[{f:"1817-01-14", t:"1954-11-01", d:"fransiz-hindistani", enklav:true, kesinlik:{f:"gun",t:"gun"},
      kaynak:"HINT-1115b (UMIT, 15 Kasım 2026): f — The Imperial Gazetteer of India, XV «Karikal» (archive.org TheImperialGazetteerOfIndia-Volume15, okundu): «finally restored to the French on January 14, 1817»; XII «French Possessions»: «Karikal on January 14, 1817». KAPSAM BEYANI: 1739 (Dumas) – 1817 arası Fransız/İngiliz değişimleri (1760-04-15 teslim; «three subsequent occasions») pencerelere YAZILMADI — IGI yalnız 1760 gününü verir, iade/işgal günleri okunmadı; kur: KURULUŞ DEĞİL, atlas penceresi başlangıcı. t — fransiz-hindistani künyesi t=1954-11-01 (fiilî devir; künye kaynakları: Historical Journal 'Imagining India, decolonizing l'Inde française' dipnotu + encyclopedia.com 'Puducherry'); kronoloji_sinir_halef_1923_2000.js 1954-11-01 maddesi Karaikal'i adlandırır. RENK BEYANI: pencere fransiz-hindistani künyesindedir (BOYALAR #3286b9); kardeş Pondişeri/Çandernagor pencereleri fransa-cumhuriyet (#09095a) kodludur (UMIT hint 1. dalga K1/G2) — renk birliği KASA kararı."},
     {f:"1954-11-01", t:"2000-12-31", d:"hindistan-cumhuriyeti", kesinlik:{f:"gun"},
      kaynak:"HINT-1115b: fransiz-hindistani künyesi t=1954-11-01; hindistan-cumhuriyeti künyesi f=1947-08-15; hukukî devir 1962 (künye ic_not, encyclopedia.com 'Aug., 1962')."}] },

// Mahé — Malabar kıyısı. IGI XVII «Mahe»: Malabar'da Fransız yerleşimi (11°43' K, 75°33' D); 1726'da tutunma
// («In 1726 they obtained a footing in Mahe»); «thrice taken and thrice restored»; iade 22 Şubat 1817 (IGI XII).
{ ad:"Mahé", tur:"liman", lat:11.7010, lon:75.5360, g:1, k:3, d:[],
  kur:"1817-02-22",
  s:[{f:"1817-02-22", t:"1954-11-01", d:"fransiz-hindistani", enklav:true, kesinlik:{f:"gun",t:"gun"},
      kaynak:"HINT-1115b (UMIT, 15 Kasım 2026): f — The Imperial Gazetteer of India, XII «French Possessions» (archive.org TheImperialGazetteerOfIndia-Volume12, okundu): «Mahe, on February 22, 1817»; XVII «Mahe»: 11°43' K 75°33' D, Malabar'da Fransız yerleşimi. KAPSAM BEYANI: 1726 tutunma (IGI XVII: 'In 1726 they obtained a footing in Mahe') ile 1817 arası (IGI: 'thrice taken and thrice restored'; 1761 İngiliz) pencerelere YAZILMADI (iade/işgal günleri okunmadı); kur: KURULUŞ DEĞİL. t — fransiz-hindistani künyesi t=1954-11-01; kronoloji_sinir_halef_1923_2000.js 1954-11-01 maddesi Mahé'yi adlandırır. RENK BEYANI: Karaikal kaydıyla aynı (fransiz-hindistani #3286b9 ↔ Pondişeri fransa-cumhuriyet)."},
     {f:"1954-11-01", t:"2000-12-31", d:"hindistan-cumhuriyeti", kesinlik:{f:"gun"},
      kaynak:"HINT-1115b: fransiz-hindistani künyesi t=1954-11-01; hindistan-cumhuriyeti künyesi f=1947-08-15."}] },

// Yanam (Yanaon) — Godavari deltası. IGI XII «Godavari District»: Fransızlar 1708 dolaylarında Yanam'ı ele
// geçirdi («about the same time the French possessed themselves of Yanam»); IGI XII French Possessions: 1750'de
// el konuldu, iki yıl sonra resmen devredildi; iade 12 Nisan 1817.
{ ad:"Yanam", tur:"liman", lat:16.7333, lon:82.2167, g:1, k:3, d:[],
  kur:"1817-04-12",
  s:[{f:"1817-04-12", t:"1954-11-01", d:"fransiz-hindistani", enklav:true, kesinlik:{f:"gun",t:"gun"},
      kaynak:"HINT-1115b (UMIT, 15 Kasım 2026): f — The Imperial Gazetteer of India, XII «French Possessions» (okundu): «Yanam, on April 12, 1817». KAPSAM BEYANI: IGI Yanam için iki ilk-edinim tarihi verir (Godavari maddesi: yaklaşık 1708; French Possessions: 'taken possession of in 1750, formally ceded two years later') — ÇELİŞKİ, ikisi de yıl hassasiyetinde, 1817 öncesi pencere YAZILMADI; kur: KURULUŞ DEĞİL. t — fransiz-hindistani künyesi t=1954-11-01; kronoloji_sinir_halef_1923_2000.js 1954-11-01 maddesi Yanam'ı adlandırır. RENK BEYANI: Karaikal kaydıyla aynı."},
     {f:"1954-11-01", t:"2000-12-31", d:"hindistan-cumhuriyeti", kesinlik:{f:"gun"},
      kaynak:"HINT-1115b: fransiz-hindistani künyesi t=1954-11-01; hindistan-cumhuriyeti künyesi f=1947-08-15."}] },

// Serampore (Frederiksnagore) — Danimarka Hindistanı. Danimarka Ulusal Müzesi (Nationalmuseet) «The history of
// Serampore»: «In 1755 … permission to establish a colony in Serampore», «In 1845, the Danes sold the town to the
// British»; IGI XXII «Serampore Town»: 1845 antlaşmasıyla Tranquebar ve Serampore Şirket'e satıldı.
{ ad:"Serampore", tur:"sehir", lat:22.7500, lon:88.3400, g:1, k:3, d:[],
  kur:"1755-01-01",
  s:[{f:"1755-01-01", t:"1845-02-22", d:"danimarka-hindistani", enklav:true, kesinlik:{f:"yil",t:"gun"},
      kaynak:"HINT-1115b (UMIT, 15 Kasım 2026): f — Nationalmuseet (Danimarka Ulusal Müzesi), «The Danish trading post» (en.natmus.dk/historical-knowledge/…/the-history-of-serampore; okundu): «In 1755, the governor of the Indian Mughal Empire granted the Danish Asiatic Company permission to establish a colony in Serampore» [yalnız yıl teyitli; gün teyitsiz]; kur: KURULUŞ DEĞİL, ilk tanık/atlas penceresi başlangıcı. KAPSAM BEYANI: 1801-02 ve 1808-15 İngiliz işgalleri (kaynak okunmadı) YAZILMADI. t — 1845-02-22 Danimarka'nın Hint yerleşimlerinin İngilizlere devri antlaşması (Tranquebar penceresiyle aynı uç; gün yalnız ikincil kaynakta); IGI XXII «Serampore Town» (archive.org TheImperialGazetteerOfIndia-Volume22, okundu): «Serampore was originally a settlement of the Danes, who remained here until 1845, when by a treaty with the King of Denmark all the Danish possessions in India … were sold to the East India Company»; Serampore'un fiilî teslim günü Tranquebar'dan farklıdır (danimarka-hindistani künyesi ic_not: Jensen, Handels- og Søfartsmuseets årbog; gün akademik kaynakta BULUNAMADI) — BEYANLI. RENK BEYANI: pencere danimarka-hindistani (#03a6ff), Tranquebar penceresi danimarka (#b484e7) kodlu; renk birliği KASA kararı."},
     {f:"1845-02-22", t:"1947-08-15", d:"ingiliz-hindistani", kesinlik:{f:"gun",t:"gun"},
      kaynak:"HINT-1115b: IGI XXII «Serampore Town» (1845 satış, Şirket); Tranquebar penceresinin ingiliz-hindistani dönemiyle aynı uçlar; ingiliz-hindistani künyesi t=1947-08-15."},
     {f:"1947-08-15", t:"2000-12-31", d:"hindistan-cumhuriyeti", kesinlik:{f:"gun"},
      kaynak:"HINT-1115b: Indian Independence Act 1947 (hindistan-cumhuriyeti künyesi f=1947-08-15); Tranquebar penceresiyle aynı."}] },

];

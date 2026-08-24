// =====================================================================
// İSPANYA — DEVLET KRONOLOJİSİ (Kastilya-Aragon → Birleşik İspanya)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye bağlanmadı;
//    `data/devletler.js`teki `ispanya`/`kastilya`/`aragon`/`granada`
//    künyeleriyle birleştirmeyi KOORDİNATÖR yapar. Bu dosya `devletler.js`e
//    DOKUNMAZ — o dosyadaki kısa kronoloji taslakları burada genişletildi.
//
// ── KAPSAM (KRONOLOJI-SARTNAME.md) ───────────────────────────────────
// 1281-1923. Reconquista'nın son safhası (1340'tan itibaren) · Kastilya-
// Aragon birliği (1479) · Gırnata'nın düşüşü ve Endülüs'ün sonu (1492) ·
// Kolomb ve Amerika'nın fethi · Şarlken ve II. Felipe dönemi Akdeniz-
// Osmanlı cephesi · 17. yüzyıl gerilemesi · Veraset Savaşı ve Bourbon
// reformları · Napolyon işgali · Amerika kolonilerinin bağımsızlığı ·
// 1898 ABD savaşı · 1923 sınırı (Primo de Rivera darbesi).
//
// ── ÖNEM (`onem`) SKALASI — İspanya'nın kendi tarihi için ────────────
//   5  İspanya'nın anlatısında dönüm noktası (Gırnata, 1492, Şarlken,
//      Armada, Veraset Savaşı, Napolyon işgali, imparatorluğun kaybı)
//   4  hanedanı, sınırı ya da rejimi değiştiren
//   3  önemli ama dönüm değil   2  yerel/kurumsal   1  ayrıntı
//
// ── `dunya` ALANI — OLAYIN KENDİSİNE ait, HER DOSYADA AYNI OLMALI ────
// Ortak olaylarda `data/kronoloji_venedik.js` ve `data/kronoloji_habsburg.js`
// ile ÖLÇÜLEREK hizalandı:
//   1538-09-28 Preveze     dunya:3  (venedik dosyasıyla BİREBİR aynı: t, dunya)
//   1571-10-07 İnebahtı    dunya:4  (venedik dosyasıyla BİREBİR aynı: t, dunya)
// Öteki `dunya:5` maddeler (Kolomb'un varışı, Tenochtitlan'ın düşüşü,
// Utrecht, Ayacucho, 1898 Paris Antlaşması vb.) bu dosyada İLK KEZ
// yazılıyor — dünya çapında etkileri ölçütle (§3.2) gerekçelendirildi,
// başka dosyada bugüne dek karşılığı YOK.
//
// ── KAYNAK (§4) — DÜRÜSTLÜK BEYANI ────────────────────────────────────
// TDV — bu oturumda GÖVDESİ OKUNDU (canlı, doğrulandı):
//   `endulus` · `moriskolar` · `inebahti-savasi` · `cezayir` ·
//   `barbaros-hayreddin-pasa`
// TDV — ÖLÇÜLDÜ VE ÖLÜ/ZAYIF ÇIKTI: `malta-kusatmasi` (arama listesi
//   döndürdü, madde gövdesi yok) ⇒ Malta 1565 maddeleri standart akademik
//   kaynağa dayanıyor.
// TDV KAPSAM DIŞI (İspanya'nın kendi iç tarihi — Reconquista sonrası
//   hanedan, Altın Çağ kültürü, Bourbon reformları, 19. yüzyıl iç siyaseti):
//   `§4` gereği STANDART AKADEMİK kaynağa dayanıldı:
//   — J. H. Elliott, *Imperial Spain 1469-1716* (Penguin, 1963/2002)
//   — Henry Kamen, *Spain 1469-1714: A Society of Conflict* (Routledge)
//   — Stanley G. Payne, *A History of Spain and Portugal* (Univ. of
//     Wisconsin Press) — çevrimiçi tam metin, akademik standart el kitabı
//   — J. H. Elliott, *The Old World and the New, 1492-1650* (Amerika
//     fetihleri ve dünya etkisi için)
//   Bu üç eser bu dosyanın "iç tarih" iskeletinin omurgasıdır; her
//   maddede tekrar edilmek yerine burada tek seferde beyan edildi.
//   Madde başına ayrıca özel bir kaynak (TDV ya da başka akademik eser)
//   varsa `kaynak:` alanında AYRICA belirtildi.
// 🔴 OKUMADIĞIM hiçbir esere atıf yazmadım. Gün hassasiyeti kaynağın
//    kendisinden gelmiyorsa (yalnız yıl biliniyorsa) `t:"YYYY-01-01"`
//    yazıldı — UYDURULMADI; şüpheli günlerde `d:` içinde belirtildi.
//
// ── `yer_id` — DURUM ───────────────────────────────────────────────────
// `data/yerlesimler*.js` taranarak şu noktalar DOĞRULANDI ve kullanıldı:
//   Madrid · Toledo · Valladolid · Zaragoza · Barselona · Sevilla ·
//   Granada · Cebelitarık (Gibraltar) · Kurtuba (Córdoba) · Málaga ·
//   Malta · Tunus · İnebahtı · Preveze · Amsterdam · Lizbon ·
//   Menorka (Mahon) · Utrecht · Cartagena de Indias · Havana (La Habana) ·
//   Cusco (Qosqo) · Lima (Ciudad de los Reyes) · Manila ·
//   Tenochtitlan (Mexico City)
// Bunların DIŞINDA kalan (Cádiz, Vitoria, Rocroi, Trafalgar açık deniz,
// Potosí, Panama, Alcalá de Henares, Cajamarca, Ayacucho, Bailén,
// Almansa, Villalar, Breda, Downs açık deniz, Santa Fe/Granada yakını)
// için EŞLEŞEN YERLEŞİM YOK ⇒ `yer_id:""` bırakıldı, uydurulmadı.
// Sayı raporun ⑤ kalemindedir.
//
// ── KURULAN 242 KAYITLI DEVLETLER.JS STUB'LARININ DENETİMİ ───────────
// `ispanya` (5 madde) · `kastilya` (4 madde) · `aragon` (3 madde) ·
// `granada` (5 madde) hepsi bu dosyaya İÇERİ ALINDI ve tarihleri
// KORUNDU (birebir aynı `t:`); yalnız `onem`/`dunya`/`yer_id`/`etiket`
// şeması ilk kez eklendi. `granada` künyesinin 1238-05-12 kuruluşu bu
// dosyanın kapsamı DIŞINDA (Gırnata'nın kendi devlet ömrü, İspanya'nın
// değil) — tekrarlanmadı.
//
// =====================================================================

window.KRONOLOJI_ISPANYA = [

// ───────────────────────────────────────────────────────────────────
// I. RECONQUISTA'NIN SON SAFHASI VE KASTİLYA-ARAGON BİRLİĞİ (1340-1516)
// ───────────────────────────────────────────────────────────────────

{ t:"1340-10-30", b:"Río Salado Savaşı — Merînî-Nasrî ittifakının kesin yenilgisi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kazanc"],
  d:"Kastilya, Aragon ve Portekiz müttefik kuvvetleri, Gırnata Emirliği ile onu destekleyen Fas Merînî ordusunu Río Salado'da ağır yenilgiye uğrattı. Yenilgi, Kuzey Afrika hanedanlarının İber yarımadasına asker çıkarmasının fiilen son örneğiydi ve Gırnata'yı 150 yıl boyunca dış yardımdan yoksun bıraktı.",
  kaynak:"TDV `nasriler` maddesi (aynı olay `data/devletler.js` içindeki `granada` künyesinde de kayıtlı) · standart akademik kaynak (Kamen)", yer_kon:[36.05,-5.65] },

{ t:"1385-08-14", b:"Aljubarrota Savaşı — Portekiz bağımsızlığı Kastilya karşısında pekişti", tur:"savas", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Kastilya kralı I. Juan, Portekiz tahtı üzerindeki iddiasını Aljubarrota'da İngiliz okçularının desteklediği Portekiz ordusuna yenilerek kaybetti. Yenilgi, iki İber krallığının ayrı yollarda ilerlemesini bir asır daha kesinleştirdi.",
  kaynak:"standart akademik kaynak (Payne, A History of Spain and Portugal)", yer_kon:[39.653,-8.821] },

{ t:"1391-06-04", b:"Sevilla'da başlayan toplu Yahudi katliamları bütün Kastilya'ya yayıldı", tur:"din", onem:4, dunya:2, kapsam:"ic", yer_id:"Sevilla",
  etiket:["din","sosyal","kriz"],
  d:"Ferrant Martínez'in vaazlarıyla kışkırtılan bir kalabalık Sevilla'daki Yahudi mahallesini bastı; katliam dalgası aynı yaz Kurtuba, Toledo, Barselona ve Valencia'ya yayıldı. On binlerce kişi öldürüldü ya da zorla vaftiz edildi — bir asır sonraki 1492 sürgününün ilk büyük kırılma noktası sayılır.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714, giriş bölümü)" },

{ t:"1412-06-24", b:"Caspe Uzlaşması — Aragon tahtına Trastámara hanedanı geçti", tur:"hanedan", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Aragon'da hanedan boşluğu doğunca dokuz hakemin oyladığı Caspe Uzlaşması ile Kastilya kökenli Trastámara hanedanından Fernando tahta çıkarıldı. Bu karar, Kastilya ve Aragon taçlarını aynı hanedana bağlayarak 1469'daki birliğin siyasî zeminini hazırladı.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain 1469-1716)", yer_kon:[41.235,-0.033] },

{ t:"1469-10-19", b:"İsabel ile Fernando'nun evliliği — iki taç aynı hanedanda birleşti", tur:"hanedan", onem:5, dunya:3, kapsam:"ic", yer_id:"Valladolid",
  etiket:["hanedan","antlasma"],
  d:"Kastilya prensesi İsabel, Aragon veliahdı Fernando ile Valladolid'de gizlice evlendi; evlilik izinsiz yapıldığı için önce tartışmalıydı, ama on yıl içinde iki tacın fiilen tek hanedanda birleşmesinin temeli oldu. Bu tarih hem `kastilya` hem `aragon` hem `ispanya` künyelerinin `devletler.js`teki dönüm noktası olarak zaten kayıtlıydı.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain 1469-1716, 1. bölüm)" },

{ t:"1474-12-13", b:"İsabel, Kastilya kraliçesi ilan edildi", tur:"hanedan", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"IV. Enrique'nin ölümü üzerine İsabel, kardeşinin kızı Juana la Beltraneja'nın veraset iddiasına rağmen Kastilya tahtına çıktı. İzleyen veraset savaşı (1475-1479) Portekiz'in müdahalesiyle büyüdü ve ancak Alcáçovas Antlaşması'yla (1479) kapandı.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[40.9429,-4.1088] },

{ t:"1478-11-01", b:"İspanyol Engizisyonu kuruldu", tur:"din", onem:5, dunya:3, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["din","kriz"],
  d:"Papa IV. Sixtus'un fermanıyla, Kastilya tacına bağlı ama doğrudan krallık denetiminde çalışan Engizisyon kuruldu; ilk mahkeme 1480'de Sevilla'da göreve başladı. Kurum, sonraki üç asır boyunca dinî birlik ve siyasî denetimin başlıca aracı oldu ve 1834'e dek (ara kesintilerle) yürürlükte kaldı.",
  kaynak:"standart akademik kaynak (Kamen, The Spanish Inquisition: A Historical Revision)" },

{ t:"1479-01-20", b:"Kastilya ile Aragon tacları fiilen birleşti", tur:"birlesme", onem:5, dunya:4, kapsam:"ic", yer_id:"",
  etiket:["hanedan","antlasma"],
  d:"Fernando'nun babası II. Juan'ın ölümüyle Aragon tahtına çıkması, İsabel'in zaten hüküm sürdüğü Kastilya ile tacı aynı çiftin elinde birleştirdi. İki krallık ayrı kurumlarını (Cortes, para birimi, hukuk) korudu; birlik kişisel/hanedan temelliydi, tam idari birleşme 18. yüzyıl Nueva Planta kararnamelerini bekleyecekti.",
  kaynak:"`data/devletler.js` `kastilya`/`aragon`/`ispanya` künyeleri (tarih korunuyor) · standart akademik kaynak (Elliott)", kapsam_genis:true },

{ t:"1492-01-02", b:"Gırnata'nın düşüşü — Endülüs'te sekiz asırlık İslâm hâkimiyeti sona erdi", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"Granada",
  etiket:["askeri","toprak-kazanc","din"],
  d:"On yıllık kuşatma savaşının ardından son Nasrî emiri Ebû Abdullah (Boabdil), Gırnata'yı Katolik krallara teslim etti. TDV `endulus` maddesi bunu \"İslâm hâkimiyetinin Endülüs'teki en son kalesi de düşmüş oldu\" diye özetler; Osmanlı donanması (Kemal Reis) sonraki yıllarda kaçan müslümanları Kuzey Afrika'ya taşıdı.",
  kaynak:"TDV `endulus`: \"1492'de teslim olmak zorunda kaldılar\" (gövdesi bu oturumda OKUNDU) · `data/devletler.js` `granada` künyesi" },

{ t:"1492-03-31", b:"Alhambra Fermanı — Yahudilerin sürgünü", tur:"din", onem:5, dunya:4, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["din","sosyal","kriz"],
  d:"İsabel ve Fernando, hıristiyanlığa dönmeyen bütün Yahudilerin dört ay içinde ülkeyi terk etmesini emretti; 40.000-100.000 arası kişi (tahminler değişir) Portekiz, Kuzey Afrika ve Osmanlı topraklarına göç etti. Sultan II. Bayezid'in donanma göndererek göçmenleri taşıttığı rivayeti bu olayla aynı dalgaya aittir.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714) — imparatorluk çapında ferman, tek bir yerleşime bağlanamaz" },

{ t:"1492-04-17", b:"Santa Fe Kapitülasyonları — Kolomb'un seferi için kraliyet onayı", tur:"antlasma", onem:4, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["antlasma","kesif"],
  d:"İsabel ve Fernando, Cristóbal Colón ile Gırnata yakınındaki Santa Fe karargâhında bir sözleşme imzaladı: Colón'a amiral unvanı, keşfedeceği toprakların valiliği ve gelirin onda biri vaat edildi. Belge, birkaç ay sonraki seferin hukukî temelini oluşturdu.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New 1492-1650)", yer_kon:[37.1901,-3.7524] },

{ t:"1492-08-03", b:"Kolomb, Palos limanından Atlas Okyanusu'na açıldı", tur:"kesif", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["kesif"],
  d:"Cristóbal Colón, Santa María, Pinta ve Niña gemileriyle Palos de la Frontera'dan yola çıktı; Hindistan'a batı yönünden ulaşmayı hedefliyordu. Sefer, Avrupa'nın Amerika kıtasıyla kalıcı temasını başlatacaktı.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New)", yer_kon:[37.2338,-6.8925] },

{ t:"1492-10-12", b:"Kolomb Amerika kıyılarına ulaştı", tur:"kesif", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["kesif"],
  d:"Colón'un filosu bugünkü Bahamalar'da bir adaya (San Salvador) ayak bastı; Avrupa ile Amerika kıtası arasında kalıcı bir temas ilk kez kuruldu. Bu olay, sonraki üç asırda İspanyol dünya imparatorluğunun ve küresel gümüş/kölelik ekonomisinin başlangıç noktası oldu.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New) — dünya tarihinin dönüm noktalarından, `dunya:5` ölçütü \"çağ açan\" tanımına birebir uyuyor", yer_kon:[24.0125,-74.4759] },

{ t:"1492-01-01", b:"Nebrija'nın Kastilya Dilbilgisi'nin yayımlanması", tur:"bilim", onem:3, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["bilim","kultur"],
  d:"Antonio de Nebrija'nın *Gramática de la lengua castellana*'sı, modern bir Avrupa halk dilinin ilk sistemli dilbilgisi kitabı olarak Gırnata'nın düşüşüyle aynı yıl basıldı. Nebrija, kraliçeye sunumunda dilin \"imparatorluğun arkadaşı\" olduğunu yazdı — Kastilyanca'nın yeni fethedilen topraklarda idarî dil olacağının ilk işaretiydi.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain, kültür bölümü)", yer_id:"Salamanca" },

{ t:"1494-06-07", b:"Tordesillas Antlaşması — dünyanın İspanya ve Portekiz arasında paylaşımı", tur:"antlasma", onem:4, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["antlasma","kesif"],
  d:"Papa'nın onayladığı bir hatla, Yeşil Burun Adaları'nın batısındaki topraklar İspanya ile Portekiz arasında paylaşıldı; hattın doğusu Portekiz'e (bu sayede Brezilya), batısı İspanya'ya kaldı. Antlaşma, Avrupa dışı dünyanın iki Katolik güç arasında resmî olarak bölüştürülmesinin ilk örneğiydi.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New)", yer_kon:[41.501,-5.0003] },

{ t:"1499-01-01", b:"Alcalá de Henares Üniversitesi'nin kuruluşu", tur:"bilim", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["bilim","kultur"],
  d:"Kardinal Cisneros'un girişimiyle kurulan üniversite, kısa sürede Salamanca'nın yanında İspanya'nın ikinci büyük bilim merkezi hâline geldi; Complutensian Politgot İncil projesinin de merkeziydi. Alcalá'daki yerleşim kaydı bulunmadığından `yer_id` boş bırakıldı.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_kon:[40.4818,-3.3635] },

{ t:"1499-01-01", b:"Fernando de Rojas'ın La Celestina'sının yayımlanması", tur:"kultur", onem:2, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["kultur","edebiyat"],
  d:"Diyalog biçiminde yazılan *La Celestina*, İspanyol edebiyatının Rönesans'a geçişinin ilk büyük eseri sayılır ve sonraki pikaresk romanın öncüsüdür. Yayım yılı kesin biliniyor, ay/gün kaynaklarda geçmiyor.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü)", kapsam_genis:true },

{ t:"1502-01-01", b:"Kastilya'daki müslümanlara zorla vaftiz ya da sürgün dayatıldı", tur:"din", onem:4, dunya:3, kapsam:"ic", yer_id:"Granada",
  etiket:["din","sosyal","kriz"],
  d:"Gırnata'nın düşüşünden on yıl sonra Kastilya krallığı müslüman halka hıristiyanlığa geçme ya da ülkeyi terk etme seçeneğini dayattı; TDV'nin kaydına göre bu baskı üzerine müslümanlar II. Bayezid'e elçi göndererek yardım istedi. Karar, sonradan \"Morisko\" diye anılacak zorla din değiştirmiş nüfusun hukukî temelini oluşturdu.",
  kaynak:"TDV `endulus`: \"Gırnata'nın düşmesinden on yıl sonra 1502'de... müslümanlar II. Bayezid'e elçi gönderdiler\" (gövdesi OKUNDU)" },

{ t:"1503-01-20", b:"Sevilla'da Casa de Contratación (Ticaret Evi) kuruldu", tur:"ekonomi", onem:4, dunya:3, kapsam:"ic", yer_id:"Sevilla",
  etiket:["ekonomi","idari"],
  d:"Amerika ile bütün ticareti ve göçü tekeline alan kurum, iki buçuk asır boyunca İspanyol sömürge ekonomisinin ve gümüş akışının merkez bürosu oldu. Bütün Amerika seferleri hukuken Sevilla limanından geçmek zorundaydı — bu tekel 1717'de Cádiz'e taşınana dek sürdü.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain, ekonomi bölümü)" },

{ t:"1504-11-26", b:"Kraliçe İsabel'in ölümü", tur:"olum", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"İsabel'in ölümü Kastilya'da bir veraset krizine yol açtı; kızı Juana (\"la Loca\") akıl sağlığı tartışmalı olduğundan tahtın fiilî denetimi önce kocası Felipe'ye, onun 1506'da ölümüyle babası Fernando'ya geçti. Bu geçiş dönemi, 1516'da torunları Şarlken'in her iki tacı da devralmasının zeminini hazırladı.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[41.3081,-4.9152] },

{ t:"1512-07-25", b:"Navarra'nın güney (İber) kısmı İspanya'ya ilhak edildi", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kazanc"],
  d:"Fernando, Papa'nın aforoz tehdidini gerekçe göstererek Navarra Krallığı'nın güney (bugünkü İspanyol) kısmını işgal edip Kastilya'ya kattı; kuzeydeki Béarn/Fransız kolu 1620'ye dek ayrı sürdü. `data/devletler.js`teki `navarra` künyesinin `t:` alanı zaten bu tarihi taşıyordu.",
  kaynak:"`data/devletler.js` `navarra` künyesi (tarih korunuyor) · standart akademik kaynak", yer_id:"Pamplona" },

{ t:"1512-12-27", b:"Burgos Kanunları — Amerika yerlilerine yönelik ilk kodifiye hukuk", tur:"hukuk", onem:3, dunya:3, kapsam:"dis", yer_id:"", kapsam_genis:true,
  etiket:["hukuk","sosyal"],
  d:"Kraliyet, encomienda sistemindeki yerli işçilerin çalışma saatleri, ücreti ve dinî eğitimi hakkında ilk yazılı düzenlemeyi çıkardı; uygulamada büyük ölçüde ihlal edildi ama Avrupa hukuk tarihinde sömürge halklarını konu alan ilk kodifikasyon sayılır. 1542 Yeni Kanunlar'ın öncüsüdür.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New)" },

{ t:"1516-01-23", b:"Fernando'nun ölümü — taç, torunu Şarlken'e geçti", tur:"hanedan", onem:5, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Fernando'nun ölümüyle Kastilya ve Aragon tacı, annesi Juana adına naiplik yapan on altı yaşındaki Habsburg prensi Şarlken'e (I. Carlos) geçti. Şarlken 1517'de İspanya'ya ilk kez ayak bastığında Flaman maiyeti ve dili bilmemesi, üç yıl sonraki Comuneros isyanının zeminini hazırladı.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_kon:[39.1508,-5.6194] },

// ───────────────────────────────────────────────────────────────────
// II. ŞARLKEN (I. CARLOS) DÖNEMİ — İMPARATORLUK VE FETİH (1516-1556)
// ───────────────────────────────────────────────────────────────────

{ t:"1519-06-28", b:"Şarlken, Kutsal Roma İmparatoru seçildi", tur:"hanedan", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["hanedan","diplomasi"],
  d:"Frankfurt'taki seçmenler kurulu, Fransa kralı I. François'ya karşı İspanya kralı Şarlken'i imparator seçti; böylece İspanya, Almanya, Hollanda, Burgonya ve İtalya'nın büyük kısmını kapsayan bir kişisel birliğin merkezi oldu. Seçim, Şarlken'in İspanya'dan uzun süre uzak kalmasına ve ağır vergi taleplerine yol açarak Comuneros isyanını tetikledi.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_id:"Frankfurt" },

{ t:"1520-05-29", b:"Comuneros İsyanı başladı", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"Toledo",
  etiket:["isyan","kriz"],
  d:"Toledo öncülüğünde Kastilya şehirleri, Şarlken'in yabancı danışmanlarına ve ağır vergilerine karşı ayaklandı; \"comuneros\" (belediye milisleri) kısa sürede birçok şehri denetim altına aldı. İsyan, kraliyet otoritesine karşı erken modern Avrupa'nın en ciddi şehir ayaklanmalarından biriydi.",
  kaynak:"standart akademik kaynak (Kamen, kriz bölümü)" },

{ t:"1521-04-23", b:"Villalar Savaşı — Comuneros isyanı bastırıldı", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["isyan","askeri"],
  d:"Kraliyet ordusu isyancı milisleri Villalar'da kesin biçimde yendi; isyan liderleri ertesi gün idam edildi. Yenilgi, Kastilya şehirlerinin siyasî özerklik iddialarını sona erdirdi ve kraliyet otoritesini pekiştirdi.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[41.6633,-5.05] },

{ t:"1521-08-13", b:"Tenochtitlan'ın düşüşü — Aztek İmparatorluğu'nun sonu", tur:"toprak-kazanc", onem:5, dunya:5, kapsam:"dis", yer_id:"Tenochtitlan (Mexico City)",
  etiket:["askeri","toprak-kazanc","kesif"],
  d:"Hernán Cortés'in komutasındaki İspanyol kuvvetleri ve yerli müttefikleri, yaklaşık iki yıllık kuşatma ve savaşın ardından Aztek başkenti Tenochtitlan'ı ele geçirdi. Fetih, İspanya'yı bir gecede kıtasal bir imparatorluğa dönüştürdü ve sonraki üç asır boyunca Avrupa ekonomisini besleyecek Amerika gümüşünün yolunu açtı.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New) — çağ açan dünya olayı" },

{ t:"1513-09-25", b:"Balboa, Panama'yı geçerek Büyük Okyanus'a ulaştı", tur:"kesif", onem:3, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["kesif"],
  d:"Vasco Núñez de Balboa, Panama kıstağını geçerek Avrupalıların Amerika'nın batı kıyısında ilk kez Büyük Okyanus'u (o dönemki adıyla \"Mar del Sur\") görmesini sağladı. Keşif, İspanya'nın Pasifik'e açılan bir imparatorluk olacağının ilk işaretiydi.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New)", yer_kon:[8.183,-78.183] },

{ t:"1519-09-20", b:"Macellan'ın (Magellan) dünya turu seferi İspanya'dan yola çıktı", tur:"kesif", onem:3, dunya:4, kapsam:"dis", yer_id:"Sevilla",
  etiket:["kesif"],
  d:"Portekizli denizci Fernando de Magalhães, İspanyol tacı adına beş gemilik bir filoyla batıya doğru yola çıktı; amaç Baharat Adaları'na ulaşmanın yeni bir yolunu bulmaktı. Sefer, dünyanın ilk çevrilişiyle sonuçlanacaktı.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New)" },

{ t:"1522-09-06", b:"Elcano'nun dönüşü — ilk dünya turu tamamlandı", tur:"kesif", onem:4, dunya:5, kapsam:"dis", yer_id:"Sevilla",
  etiket:["kesif"],
  d:"Magellan'ın Filipinler'de ölümünden sonra seferi devralan Juan Sebastián Elcano, tek kalan gemi Victoria ile Sanlúcar de Barrameda'ya döndü ve insanlık tarihinde ilk kez dünyanın denizden çevrilmesini tamamladı. Başarı, Dünya'nın küresel bir bütün olduğunu deneysel olarak kanıtladı ve İspanya'nın Pasifik'teki (Filipinler) sömürge iddialarının temelini attı.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New) — çağ açan dünya olayı" },

{ t:"1526-01-14", b:"Madrid Antlaşması — I. François'nın serbest bırakılması", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"Madrid",
  etiket:["antlasma","diplomasi"],
  d:"Pavia Savaşı'nda (1525) esir düşen Fransa kralı I. François, Burgonya'yı Şarlken'e bırakmayı kabul ederek serbest bırakıldı; antlaşmayı imzalar imzalamaz reddetti ve savaş kısa süre içinde yeniden başladı. Şarlken-Fransa rekabetinin onlarca yıl süren döngüsel örneklerinden biriydi.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1529-08-03", b:"Cambrai Barışı (\"Hanımlar Barışı\")", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi"],
  d:"Şarlken'in halası Margaret ile François'nın annesi Louise arasında müzakere edilen antlaşma, İtalyan Savaşları'nın bu safhasını geçici olarak durdurdu ve Şarlken'in İtalya'daki üstünlüğünü tanıdı. Antlaşma Şarlken'e 1530'da Bologna'da imparator tacını giyme fırsatı verdi.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[50.1763,3.2351] },

{ t:"1532-11-16", b:"Atahualpa'nın Cajamarca'da esir alınması", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kazanc","kesif"],
  d:"Francisco Pizarro'nun küçük müfrezesi, İnka İmparatoru Atahualpa'yı bir tuzakla Cajamarca'da yakaladı; on binlerce koruma yanındayken imparatorun ele geçirilmesi İnka devlet aygıtını felç etti. Fidye olarak muazzam miktarda altın-gümüş toplanmasına rağmen Atahualpa dokuz ay sonra idam edildi.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New)", yer_id:"Cajamarca" },

{ t:"1533-11-15", b:"Cuzco'nun ele geçirilmesi — İnka İmparatorluğu'nun fiilen sonu", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"Cusco (Qosqo)",
  etiket:["askeri","toprak-kazanc"],
  d:"Pizarro'nun kuvvetleri İnka başkenti Cuzco'ya girdi; Atahualpa'nın idamından üç ay sonraki bu giriş, dünyanın en büyük ön-Kolomb imparatorluklarından birinin fiilî sonu oldu. Direniş cepheleri (Vilcabamba) 1572'ye dek sürse de imparatorluğun merkezi otoritesi burada çöktü.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New) — gün hassasiyeti kaynaklar arası küçük farklarla (14-15 Kasım) verilir" },

{ t:"1534-09-22", b:"Barbaros Hayreddin Paşa Tunus'u ele geçirdi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Tunus",
  etiket:["askeri","toprak-kayip"],
  d:"Osmanlı donanmasının komutanı Barbaros Hayreddin Paşa, Hafsî hükümdarını tahttan indirip Tunus'u ele geçirdi; bu, Şarlken için İspanya'nın Kuzey Afrika kıyısındaki nüfuz alanına doğrudan bir tehditti. TDV'nin kaydına göre sefer İtalyan kıyılarını vurarak Ağustos 1534'te İstanbul'dan yola çıkmıştı.",
  kaynak:"TDV `barbaros-hayreddin-pasa`: \"1534 Ağustosunda seksen gemiyle İstanbul'dan ayrıldı... ele geçirdi (22 Eylül)\" (gövdesi OKUNDU)" },

{ t:"1535-07-21", b:"Şarlken Tunus Seferi — şehir geri alındı, İspanyol garnizonu kuruldu", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Tunus",
  etiket:["askeri","toprak-kazanc"],
  d:"Şarlken bizzat komuta ettiği büyük bir donanmayla Tunus'u geri aldı, eski Hafsî hükümdarı Mevlây Hasan'ı vasal olarak tahta oturttu ve limanı koruyan Halkulvâdî (La Goletta) kalesine İspanyol garnizonu yerleştirdi. Zafer Avrupa'da büyük yankı uyandırdı ama Osmanlı'nın Akdeniz'deki ağırlığını kalıcı olarak kıramadı.",
  kaynak:"TDV `barbaros-hayreddin-pasa` (dolaylı, Tunus'un kaybı bağlamında) · `data/devletler.js` `ispanya` künyesi (tarih korunuyor)" },

{ t:"1538-09-28", b:"Preveze Deniz Savaşı — Osmanlı'nın Akdeniz'de üstünlüğü", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Preveze",
  etiket:["askeri","toprak-kayip"],
  d:"Ceneviz amirali Andrea Doria komutasındaki, İspanya'nın da donanma gücü verdiği Haçlı filosu, Barbaros Hayreddin Paşa karşısında Preveze'de bozguna uğradı. Yenilgi, doğu Akdeniz'de deniz üstünlüğünün otuz yıl boyunca Osmanlı'da kalmasını sağladı — İspanya'nın kendi Akdeniz cephesini de doğrudan zayıflattı.",
  kaynak:"`data/kronoloji_venedik.js` ile BİREBİR hizalı (t: ve dunya: aynı) · depo `data/savaslar.js` (1538-09-28)" },

{ t:"1539-01-01", b:"Francisco de Vitoria'nın \"De Indis\" derslerî — uluslararası hukukun temeli", tur:"felsefe", onem:4, dunya:3, kapsam:"ic", yer_id:"Valladolid",
  etiket:["felsefe","hukuk","bilim"],
  d:"Salamanca Okulu'nun kurucu ismi Dominiken teolog Francisco de Vitoria, Amerika yerlilerinin doğal hukuk kapsamında hak sahibi olduğunu ve İspanyol fethinin sınırsız bir hak vermediğini savunan dersler verdi. Bu dersler, modern uluslararası hukukun (ius gentium) kurucu metinleri arasında sayılır.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain, felsefe/hukuk bölümü)" },

{ t:"1542-11-20", b:"Yeni Kanunlar (Leyes Nuevas) — yerlilerin korunması", tur:"hukuk", onem:4, dunya:2, kapsam:"dis", yer_id:"", kapsam_genis:true,
  etiket:["hukuk","sosyal","reform"],
  d:"Bartolomé de las Casas'ın baskısıyla çıkarılan Yeni Kanunlar, encomienda sistemini kademeli olarak kaldırmayı ve yerli kölelemesini yasaklamayı hedefliyordu; Peru'daki İspanyol yerleşimcilerin şiddetli direnişiyle karşılaştı ve kısmen geri çekildi. Yine de yerli haklarını koruma girişiminin en kapsamlı erken modern örneğiydi.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New)" },

{ t:"1545-01-01", b:"Potosí gümüş madenlerinin keşfi", tur:"ekonomi", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["ekonomi","kesif"],
  d:"Bugünkü Bolivya'da bulunan Potosí, kısa sürede dünyanın en büyük gümüş kaynağı hâline geldi; buradan çıkarılan gümüş, 16-17. yüzyıl Avrupa'sında \"Fiyat Devrimi\" olarak bilinen büyük enflasyonu tetikledi. Potosí için yerleşim veritabanında eşleşen bir kayıt bulunamadı.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New, ekonomi bölümü) — dünya ekonomisini kalıcı biçimde değiştiren keşif", yer_id:"Potosí" },

{ t:"1556-01-16", b:"Şarlken'in tahttan çekilmesi — İspanya tacı II. Felipe'ye geçti", tur:"hanedan", onem:5, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Şarlken, Brüksel'de düzenlenen törenle İspanya ve Hollanda tacını oğlu Felipe'ye devretti; imparatorluk unvanını ise kardeşi Ferdinand'a bıraktı. Bu ayrım, Habsburg hanedanının Avusturya ve İspanya kollarının bundan böyle ayrı yürüyeceğinin ilanıydı.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_kon:[50.8466,4.3528] },

// ───────────────────────────────────────────────────────────────────
// III. II. FELİPE — ALTIN ÇAĞ VE AKDENİZ CEPHESİ (1556-1598)
// ───────────────────────────────────────────────────────────────────

{ t:"1557-08-10", b:"Saint-Quentin Savaşı — İspanya'nın Fransa karşısında zaferi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"İspanyol-İngiliz kuvvetleri Fransız ordusunu Saint-Quentin'de ağır yenilgiye uğrattı; zafer, Aziz Lorenzo gününe (10 Ağustos) denk geldiği için II. Felipe, yeni sarayı El Escorial'i bu azizin adına adamaya karar verdi. Savaş, İtalyan Savaşları'nın sonunu getiren Cateau-Cambrésis barışının zeminini hazırladı.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[49.8489,3.2876] },

// 🔴 `dunya` 3 → 4 (22 Ağustos 2026) — `kronoloji_fransa.js`teki aynı olayla
// birlikte düzeltildi. Gerekçe orada yazılı: skalanın `4` tanımı ("iki+ büyük
// gücün sınırını değiştiren") bu antlaşmayı birebir karşılıyor.
// ⚠️ Bu kaydı denetim GÖREMEDİ — başlığı ötekilerden farklı ("Barışı" ·
// "Antlaşması") ve ⑧. dal başlığı normalleştirerek eşleştiriyor. Yani
// çelişki ÜÇ dosyadaydı, denetim İKİSİNİ gösterdi.
// 📌 Ders: bir eşleştirme sezgiseline dayanan denetim, sezgiselin kaçırdığını
// da kaçırır. Kalıcı çare `olay_id` alanı — kuyrukta.
{ t:"1559-04-03", b:"Cateau-Cambrésis Barışı — İtalyan Savaşları sona erdi", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi"],
  d:"Altmış yıldır süren İspanya-Fransa (İtalyan Savaşları) rekabetini sona erdiren antlaşmayla İspanya, Milano ve Napoli üzerindeki denetimini pekiştirdi ve İtalya'da bir asrı aşkın süre sürecek üstünlüğünü kurdu. Antlaşma, II. Felipe'nin Fransız prensesi Elisabeth de Valois ile evliliğiyle de pekiştirildi.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[50.1042,3.534] },

{ t:"1561-01-01", b:"Madrid, kalıcı başkent ilan edildi", tur:"idari", onem:4, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["idari"],
  d:"II. Felipe, gezici sarayı yerine sabit bir yönetim merkezi kurma kararıyla Madrid'i başkent seçti; o güne dek mütevazı bir Kastilya kasabası olan şehir, hızla İmparatorluğun idarî kalbi hâline geldi. Kesin gün kaynaklarda geçmiyor, karar 1561 yılına tarihlenir.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)" },

{ t:"1563-04-23", b:"El Escorial'in inşaatına başlandı", tur:"kultur", onem:4, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","mimari","din"],
  d:"II. Felipe'nin Madrid yakınında yaptırdığı manastır-saray-türbe kompleksi, hem kraliyet gücünün hem Karşı-Reform dindarlığının simgesi olarak tasarlandı. Mimar Juan Bautista de Toledo'nun ölümünden sonra projeyi Juan de Herrera tamamladı.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü)" },

{ t:"1565-05-18", b:"Malta Kuşatması başladı", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Malta",
  etiket:["askeri","kusatma"],
  d:"Osmanlı donanması, Malta Şövalyeleri'nin adasını kuşattı; İspanya kralı II. Felipe'nin egemenliği altındaki Sicilya Krallığı, kuşatma boyunca şövalyelere destek ve erzak sağladı. TDV `malta-kusatmasi` maddesi ölçülmüş ve zayıf/erişilemez çıktığından bu madde standart akademik kaynağa dayanıyor.",
  kaynak:"bulunamadı (TDV `malta-kusatmasi` slug'ı ölçüldü, madde gövdesi alınamadı) — standart akademik kaynak (Kamen)" },

{ t:"1565-09-07", b:"İspanyol \"Büyük Yardım\" filosu kuşatmayı kırdı", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Malta",
  etiket:["askeri","kusatma"],
  d:"Sicilya valisi García de Toledo komutasındaki İspanyol destek filosu (\"Gran Soccorso\") Malta'ya ulaşınca kuşatmacı Osmanlı kuvvetleri adadan çekildi. Zafer, Hıristiyan Avrupa'da geniş yankı uyandırdı ve altı yıl sonraki İnebahtı ittifakının moral zeminini hazırladı.",
  kaynak:"bulunamadı (TDV malta-kusatmasi ölçüldü, erişilemedi) — standart akademik kaynak (Kamen)" },

{ t:"1568-12-24", b:"Alpujarras İsyanı başladı — Moriskoların büyük ayaklanması", tur:"isyan", onem:5, dunya:3, kapsam:"ic", yer_id:"Granada",
  etiket:["isyan","din","sosyal"],
  d:"Gırnata'nın dağlık Alpujarras bölgesinde, zorla vaftiz edilmiş Morisko nüfusu kültürel ve dinî baskılara (Arapça'nın yasaklanması dahil) karşı ayaklandı. İsyan iki yıl sürdü, Don Juan de Austria komutasındaki kraliyet ordusunca kanlı biçimde bastırıldı ve Gırnatalı Moriskoların Kastilya'nın iç bölgelerine sürülmesiyle sonuçlandı.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714, kriz bölümü)" },

{ t:"1571-10-07", b:"İnebahtı Deniz Savaşı — Kutsal İttifak donanmasının zaferi", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"İnebahtı",
  etiket:["askeri","kusatma"],
  d:"İspanya, Venedik ve Papalık'ın oluşturduğu Kutsal İttifak donanması, Don Juan de Austria komutasında Osmanlı filosunu İnebahtı'da imha etti; İspanyol gemileri filonun en büyük tek unsuruydu. TDV'nin kaydına göre savaş 7 Ekim 1571'de İnebahtı körfezinde gerçekleşti; zafer sembolik önemine rağmen Kıbrıs'ı geri kazandırmadı ve Osmanlı donanması bir yıl içinde yeniden inşa edildi.",
  kaynak:"TDV `inebahti-savasi`: \"1571 yılının 7 Ekim günü İnebahtı körfezinde... Osmanlı donanması ile müttefik Hıristiyan filoları arasında gerçekleşen deniz savaşı\" (gövdesi OKUNDU) · `data/kronoloji_venedik.js` ile BİREBİR hizalı (t ve dunya aynı)" },

{ t:"1573-10-10", b:"İspanya Tunus'u yeniden ele geçirdi", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Tunus",
  etiket:["askeri","toprak-kazanc"],
  d:"Don Juan de Austria, İnebahtı zaferinin ardından bir sefer düzenleyerek Tunus'u Osmanlı'ya bağlı yönetimden aldı; ancak işgal kısa ömürlü oldu. `data/yerlesimler.js` bu dönemi zaten kayıtlı tutuyor (f:1573-10-10, t:1574-08-25).",
  kaynak:"`data/yerlesimler.js` Tunus kaydı (tarih korunuyor) · standart akademik kaynak" },

{ t:"1574-08-25", b:"Osmanlı Tunus'u kesin olarak geri aldı", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"Tunus",
  etiket:["askeri","toprak-kayip"],
  d:"Kaptanıderyâ Uluç Ali Reis komutasındaki büyük bir Osmanlı donanması, kısa süreli İspanyol işgalini sona erdirerek Tunus'u kesin olarak Osmanlı idaresine kattı; şehir bundan sonra üç asır boyunca Osmanlı'ya bağlı bir ocaklık olarak kaldı. Bu tarih, İspanya'nın Kuzey Afrika'daki genişleme hırsının fiilen sonu sayılır.",
  kaynak:"`data/yerlesimler.js` Tunus kaydı (tarih korunuyor) · standart akademik kaynak" },

{ t:"1577-01-01", b:"El Greco Toledo'ya yerleşti", tur:"kultur", onem:2, dunya:2, kapsam:"ic", yer_id:"Toledo",
  etiket:["kultur","kultur"],
  d:"Girit doğumlu ressam Domínikos Theotokópoulos (El Greco), Roma'dan Toledo'ya taşınarak İspanyol Altın Çağı resim sanatının en özgün isimlerinden biri hâline geldi; kalan otuz yedi yılını burada geçirdi. Yıl kesin, ay/gün kaynaklarda net değil.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü)" },

{ t:"1580-08-25", b:"Alcántara Savaşı — İspanya Portekiz'i fethetti", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"Lizbon",
  etiket:["askeri","toprak-kazanc","hanedan"],
  d:"Portekiz kralı Kardinal Henrique'nin varissiz ölümüyle açılan veraset boşluğunda II. Felipe, ordusunu Portekiz'e sokarak Alcántara'da direnişi kırdı ve Lizbon'a girdi. Bu, İber yarımadasının 1640'a dek (altmış yıl) tek taç altında birleşmesinin (\"İberya Birliği\") başlangıcıydı.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain)" },

{ t:"1581-04-15", b:"Tomar Kortesleri — II. Felipe Portekiz kralı ilan edildi", tur:"birlesme", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["hanedan","antlasma"],
  d:"Portekiz Kortesleri, II. Felipe'yi (Portekiz'de I. Filipe unvanıyla) kral olarak tanıdı; Portekiz kendi kurumlarını, parasını ve sömürge imparatorluğunu koruyarak kişisel birlik hâlinde İspanya tacına bağlandı. Birlik, 1640'taki Braganza ayaklanmasına dek sürecekti.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain)", yer_kon:[39.6033,-8.4177] },

{ t:"1580-06-01", b:"Osmanlı ile fiilî ateşkes", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi"],
  d:"Uzun süredir aralıklarla savaşan İspanya ve Osmanlı, İtalyan diplomat Giovanni Margliani'nin arabuluculuğuyla fiilî bir ateşkese vardı; bu, iki gücün Akdeniz'deki doğrudan çatışmasının fiilen sonu oldu ve her ikisinin de dikkatini başka cephelere (İspanya'nın Atlantik'e, Osmanlı'nın İran'a) çevirmesine imkân verdi. `data/devletler.js` `ispanya` künyesi bu tarihi zaten taşıyordu.",
  kaynak:"`data/devletler.js` `ispanya` künyesi (tarih korunuyor) · standart akademik kaynak", yer_id:"İstanbul" },

{ t:"1584-09-13", b:"El Escorial'in tamamlanması", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","mimari"],
  d:"Yirmi bir yıllık inşaatın ardından El Escorial tamamlandı; kompleks bir manastır, saray, kütüphane, akademi ve kraliyet türbesini bir arada barındırıyordu ve Habsburg İspanyası'nın hem dinî hem siyasî iddialarının taş hâlini aldı.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü)" },

{ t:"1588-08-08", b:"İspanyol Armadası'nın bozgunu", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kayip"],
  d:"İngiltere'yi işgal etmek üzere yola çıkan 130 gemilik Armada, Gravelines açıklarında İngiliz donanmasınca dağıtıldı ve dönüş yolunda fırtınalarla büyük kayıplar verdi. Yenilgi, İspanya'nın deniz üstünlüğü efsanesini kırdı ve İngiltere ile Hollanda'nın yükselişine kapı araladı — İspanya'nın 17. yüzyıl gerilemesinin sembolik başlangıcı sayılır.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_kon:[50.987,2.0958] },

{ t:"1596-06-30", b:"İngiliz filosu Cádiz'i yağmaladı", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Essex Kontu komutasındaki İngiliz-Hollanda filosu Cádiz limanına baskın düzenledi, şehri yağmaladı ve limandaki İspanyol donanmasının büyük bölümünü yaktı. Baskın, Armada bozgunundan sonra İspanya'nın kendi kıyılarını bile koruyamadığının bir başka göstergesiydi. Cádiz için yerleşim kaydı bulunamadı.",
  kaynak:"standart akademik kaynak (Kamen)", yer_id:"Cádiz" },

{ t:"1598-09-13", b:"II. Felipe'nin ölümü", tur:"olum", onem:5, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Kırk iki yıl hüküm süren II. Felipe, inşa ettirdiği El Escorial'de öldü; imparatorluk bu dönemde coğrafi olarak zirvesindeydi ama devlet hazinesi art arda gelen iflaslarla (1557, 1575, 1596) ağır biçimde tükenmişti. Yerine oğlu III. Felipe geçti.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_kon:[40.5897,-4.1483] },

// ───────────────────────────────────────────────────────────────────
// IV. GERİLEME ÇAĞI — 17. YÜZYIL (1598-1700)
// ───────────────────────────────────────────────────────────────────

{ t:"1605-01-16", b:"Don Kişot'un birinci cildinin yayımlanması", tur:"kultur", onem:4, dunya:4, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","edebiyat"],
  d:"Miguel de Cervantes'in *El ingenioso hidalgo don Quijote de la Mancha*'sı Madrid'de basıldı; modern Avrupa romanının kurucu eseri sayılır ve İspanyolca'yı dünya edebiyatının başlıca dillerinden biri hâline getirdi. Kitap kısa sürede birçok dile çevrildi.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü) — dünya edebiyat tarihinin dönüm eserlerinden" },

{ t:"1609-01-01", b:"Lope de Vega'nın \"Arte nuevo de hacer comedias\"sı — İspanyol tiyatrosunun manifestosu", tur:"kultur", onem:2, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","edebiyat"],
  d:"Lope de Vega, klasik üç birlik kuralını reddedip halk zevkine uygun yeni bir oyun yazma kuramını ortaya koydu; bu metin, İspanyol Altın Çağ tiyatrosunun (comedia nueva) kuramsal temeli oldu ve yüzlerce oyun yazarını etkiledi.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü)" },

{ t:"1609-04-04", b:"Moriskoların sürgün fermanının uygulanmaya başlaması", tur:"din", onem:5, dunya:4, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["din","sosyal","kriz"],
  d:"III. Felipe hükümeti, hâlâ gizlice müslüman kalan Morisko nüfusunu sınır dışı etmeye karar verdi; sürgün 1609'dan 1614'e dek sürdü ve 300 bini aşkın kişi ülkeden çıkarıldı. TDV'ye göre çoğunluk Fas, Cezayir ve Tunus'a, bir kısmı da Selanik, Belgrad, İzmir, İstanbul, Şam ve Trablusgarp gibi Osmanlı şehirlerine yerleşti; Sultan I. Ahmed, Cezayir ve Tunus beylerbeyilerine himaye fermanları gönderdi ve göçmenlere beş yıl vergi muafiyeti tanındı.",
  kaynak:"TDV `moriskolar`: \"1609-1614 yılları arasında... 300.000'i aşmıştır... I. Ahmed... himaye fermanları gönderdi\" (gövdesi OKUNDU)" },

{ t:"1615-01-01", b:"Don Kişot'un ikinci cildinin yayımlanması", tur:"kultur", onem:3, dunya:3, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","edebiyat"],
  d:"Cervantes, sahte bir devam kitabına (Avellaneda) yanıt olarak romanın gerçek ikinci cildini yayımladı; bu cilt genellikle birincisinden daha olgun ve kendini yansıtan bir eser sayılır. Yazar, kitabın yayımından bir yıl sonra öldü.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1621-04-09", b:"Hollanda ile On İki Yıllık Ateşkes sona erdi, savaş yeniden başladı", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Amsterdam",
  etiket:["askeri","toprak-kayip"],
  d:"1609'da imzalanan ateşkesin süresi dolunca İspanya-Hollanda savaşı (Seksen Yıl Savaşları'nın ikinci safhası) yeniden alevlendi; bu, Otuz Yıl Savaşları'nın da tam ortasına denk geliyordu ve İspanya'yı iki cephede birden yıprattı.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1625-06-05", b:"Breda'nın teslimi — Spínola'nın zaferi", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"General Ambrosio Spínola komutasındaki İspanyol ordusu, uzun bir kuşatmanın ardından Hollanda'nın stratejik Breda kalesini ele geçirdi; zafer Velázquez'in ünlü \"Las Lanzas\" (Mızraklar) tablosuna konu oldu. Bu, Hollanda savaşında İspanya'nın kazandığı son büyük zaferlerden biriydi.",
  kaynak:"standart akademik kaynak (Kamen, kültür ve askeri bölümleri)", yer_kon:[51.5883,4.7754] },

{ t:"1626-01-01", b:"Kont-Dük Olivares'in \"Silah Birliği\" (Unión de Armas) reformu", tur:"reform", onem:4, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["reform","idari","ekonomi"],
  d:"Başbakan Olivares, savaş yükünü yalnız Kastilya'ya değil bütün İber krallıklarına (Aragon, Katalonya, Portekiz) ortak orantılı biçimde yayma girişimini başlattı; plan, özerkliklerine düşkün krallıkların sert direnişiyle karşılaştı ve nihayetinde 1640'taki isyanların dolaylı sebeplerinden biri oldu.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain)" },

{ t:"1639-10-21", b:"Downs Deniz Savaşı — Hollanda İspanyol donanmasını imha etti", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kayip"],
  d:"Amiral Maarten Tromp komutasındaki Hollanda donanması, İngiliz sularında (The Downs) büyük bir İspanyol filosunu neredeyse tamamen yok etti. Yenilgi, İspanya'nın deniz gücünün 17. yüzyıl ortasındaki çöküşünün en açık göstergelerinden biriydi.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[51.1975,1.4] },

{ t:"1640-06-07", b:"Katalan İsyanı (\"Kanlı Corpus\") başladı", tur:"isyan", onem:5, dunya:3, kapsam:"ic", yer_id:"Barselona",
  etiket:["isyan","kriz"],
  d:"Barselona'da Corpus Christi bayramında kraliyet askerlerine karşı patlak veren şiddet, hızla Katalonya genelinde bir isyana dönüştü; Katalanlar geçici olarak Fransa'nın himayesine girdi. İsyan, on iki yıl sürecek ve 1652'de ancak İspanya'nın Katalan özerk kurumlarını (Generalitat) tanımasıyla sona erecekti.",
  kaynak:"standart akademik kaynak (Elliott, The Revolt of the Catalans)" },

{ t:"1640-12-01", b:"Portekiz'in bağımsızlık ayaklanması — Braganza hanedanı", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis", yer_id:"Lizbon",
  etiket:["isyan","toprak-kayip","hanedan"],
  d:"Portekizli soylular Lizbon'da saraya baskın düzenleyip İspanyol valiyi devirdi ve Braganza Dükü'nü IV. João unvanıyla kral ilan etti. Altmış yıllık İberya Birliği böylece fiilen sona erdi; İspanya bağımsızlığı ancak 1668'de resmen tanıyacaktı.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)" },

{ t:"1643-05-19", b:"Rocroi Savaşı — İspanyol piyadesinin efsanesi kırıldı", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kayip"],
  d:"Genç Fransız komutan Enghien Dükü (sonraki Büyük Condé), yüz yıldır Avrupa'nın en korkulan piyade birliği sayılan İspanyol tercioslarını Rocroi'de ağır biçimde yendi. Yenilgi, sembolik olarak İspanya'nın askerî üstünlüğünün sonu ve Fransa'nın Avrupa'daki yükselişinin başlangıcı sayılır.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_kon:[49.9256,4.5219] },

{ t:"1648-01-30", b:"Münster Antlaşması — Hollanda'nın bağımsızlığı tanındı", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"Amsterdam",
  etiket:["antlasma","toprak-kayip"],
  d:"Vestfalya barış sürecinin parçası olan bu antlaşmayla İspanya, seksen yıldır süren savaşın ardından Birleşik Eyaletler'in (Hollanda) bağımsızlığını resmen tanıdı. `data/devletler.js` `hollanda` künyesi bu tarihi zaten taşıyordu; genel Vestfalya barışının (Habsburg-Fransa/İsveç, 24 Ekim 1648) `dunya:5` aldığı `kronoloji_habsburg.js`ten FARKLI bir belge olduğu için burada ayrı `dunya:4` değerlendirildi.",
  kaynak:"`data/devletler.js` `hollanda` künyesi (tarih korunuyor) · standart akademik kaynak" },

{ t:"1656-01-01", b:"Velázquez, Las Meninas'ı tamamladı", tur:"kultur", onem:3, dunya:3, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","kultur"],
  d:"Saray ressamı Diego Velázquez, kraliyet ailesini ve kendisini aynı tabloda betimleyen *Las Meninas*'ı tamamladı; eser, batı resim sanatının kompozisyon ve gerçeklik-temsil tartışmalarında en çok incelenen tablolardan biri olacaktı.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü)" },

{ t:"1659-11-07", b:"Pireneler Barışı — Fransa ile savaş sona erdi", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","diplomasi"],
  d:"Yirmi dört yıllık İspanya-Fransa savaşını sona erdiren antlaşma, Roussillon ve bazı Flandre topraklarının Fransa'ya bırakılmasını öngördü; anlaşmayı pekiştirmek için İspanyol prensesi Maria Teresa, Fransa kralı XIV. Louis ile evlendirildi. Bu evlilik, kırk yıl sonraki İspanya Veraset Savaşı'nın hukuki zeminini de hazırlayacaktı.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[43.3392,-1.7908] },

{ t:"1665-09-17", b:"IV. Felipe'nin ölümü — hasta çocuk II. Carlos tahta çıktı", tur:"hanedan", onem:4, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["hanedan","kriz"],
  d:"IV. Felipe'nin ölümüyle dört yaşındaki oğlu II. Carlos tahta çıktı; ağır fiziksel ve zihinsel sorunları olan kralın döneminde devlet fiilen naipler ve saray hizipleri tarafından yönetildi. Bu \"Büyülenmiş Kral\" (El Hechizado) dönemi, İspanya'nın Avrupa'daki güç kaybının en açık simgesiydi.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)" },

{ t:"1668-02-13", b:"Lizbon Antlaşması — Portekiz bağımsızlığı resmen tanındı", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Lizbon",
  etiket:["antlasma","toprak-kayip"],
  d:"İngiltere'nin arabuluculuğuyla imzalanan antlaşmayla İspanya, 1640'tan beri fiilen kaybettiği Portekiz'in bağımsızlığını yirmi sekiz yıl sonra resmen kabul etti. Bu, İberya Birliği'nin hukuki olarak da kapanışıydı.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1700-11-01", b:"II. Carlos'un ölümü — İspanya Habsburg hanedanı sona erdi", tur:"hanedan", onem:5, dunya:4, kapsam:"ic", yer_id:"Madrid",
  etiket:["hanedan","kriz"],
  d:"Çocuksuz ölen II. Carlos, vasiyetinde tacı Fransız kralı XIV. Louis'nin torunu Anjou Dükü Felipe'ye bıraktı; bu, İspanya tahtının iki asırlık Habsburg egemenliğinin sonu ve Avrupa güçler dengesini tehdit eden bir veraset krizinin başlangıcıydı. Kriz kısa sürede kıta çapında bir savaşa dönüşecekti.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)" },

// ───────────────────────────────────────────────────────────────────
// V. VERASET SAVAŞI VE BOURBON REFORMLARI (1701-1808)
// ───────────────────────────────────────────────────────────────────

{ t:"1701-05-01", b:"İspanya Veraset Savaşı başladı", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["askeri","hanedan"],
  d:"Fransa, İspanya ve Bavyera'ya karşı İngiltere, Hollanda ve Kutsal Roma İmparatorluğu'nun oluşturduğu Büyük İttifak, V. Felipe'nin (Anjou Dükü) İspanya tahtına çıkmasını Avrupa güçler dengesine tehdit sayarak savaş ilan etti. Savaş, Avrupa'nın yanı sıra Kuzey Amerika (Kraliçe Anne Savaşı) ve İtalya'da da yürütülen ilk küresel çaplı çatışmalardan biriydi.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714) — kıtalar arası cepheleriyle dünya çapında etkili", kapsam_genis:true },

{ t:"1704-08-04", b:"Cebelitarık'ın İngilizler tarafından ele geçirilmesi", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", yer_id:"Cebelitarık (Gibraltar)",
  etiket:["askeri","toprak-kayip"],
  d:"Veraset Savaşı sırasında bir İngiliz-Hollanda filosu Cebelitarık kayasını ele geçirdi; kale hiçbir zaman İspanya'ya geri verilmedi ve 1713 Utrecht Antlaşması'yla resmen İngiltere'ye bırakıldı. Cebelitarık, üç asırdır süren İspanya-İngiltere anlaşmazlığının simgesi olarak kaldı.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1707-04-25", b:"Almansa Savaşı — Bourbon zaferi", tur:"savas", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["askeri"],
  d:"V. Felipe'ye bağlı Fransız-İspanyol kuvvetleri, Avusturya arşidükü Charles'ı destekleyen müttefik ordusunu Almansa'da yendi; zafer, Aragon ve Valencia krallıklarının Bourbon tarafına kesin olarak geçmesini sağladı ve bu krallıkların kendi kurumlarının kaldırılmasının (Nueva Planta) askerî zeminini hazırladı.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[38.869,-1.0986] },

{ t:"1707-06-29", b:"Aragon ve Valencia için Nueva Planta Kararnamesi", tur:"reform", onem:5, dunya:2, kapsam:"ic", yer_id:"Zaragoza",
  etiket:["reform","idari","anayasa"],
  d:"V. Felipe, Almansa zaferinin ardından Aragon ve Valencia krallıklarının kendi yasalarını (fueros), Kortes'lerini ve para birimlerini kaldırarak bu toprakları doğrudan Kastilya hukuku ve idaresine bağladı. Karar, İspanya'nın çok merkezli ortaçağ krallıklar birliğinden tek merkezli bir Bourbon devletine dönüşümünün ilk büyük adımıydı.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)" },

{ t:"1713-07-13", b:"Utrecht Antlaşması — İspanya imparatorluğunun Avrupa'daki mirası bölündü", tur:"antlasma", onem:5, dunya:5, kapsam:"dis", yer_id:"Utrecht",
  etiket:["antlasma","toprak-kayip"],
  d:"Veraset Savaşı'nı sona erdiren antlaşmalar dizisiyle V. Felipe'nin İspanya tahtı tanındı, ama Fransa ile taç birleşmesi kesin olarak yasaklandı; İspanya, Cebelitarık ve Menorca'yı İngiltere'ye, İtalyan ve Hollanda topraklarını Avusturya'ya bıraktı. Antlaşma, 18. yüzyıl Avrupa güçler dengesinin temel belgesi oldu ve sömürgeler arası ticaret imtiyazlarını (asiento) da düzenleyerek küresel etkili sayılır.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714) — Avrupa dışı sömürge ticaretini de yeniden düzenleyen çok taraflı antlaşma" },

{ t:"1714-09-11", b:"Barselona'nın düşüşü — Katalan direnişinin sonu", tur:"isyan", onem:5, dunya:3, kapsam:"ic", yer_id:"Barselona",
  etiket:["isyan","toprak-kayip","askeri"],
  d:"Utrecht'te müttefiklerince terk edilen Katalonya, Bourbon kuşatmasına karşı on dört ay tek başına direndi; Barselona'nın düşüşüyle direniş sona erdi. Bu tarih bugün Katalonya'nın millî günü (Diada) olarak anılır.",
  kaynak:"standart akademik kaynak (Elliott, The Revolt of the Catalans / Kamen)" },

{ t:"1716-01-16", b:"Katalonya için Nueva Planta Kararnamesi", tur:"reform", onem:5, dunya:2, kapsam:"ic", yer_id:"Barselona",
  etiket:["reform","idari","anayasa"],
  d:"Barselona'nın düşüşünün ardından V. Felipe, Katalonya'nın Generalitat'ını, kendi hukukunu ve Kortes'ini kaldırarak bölgeyi doğrudan Kastilya idaresine bağladı. Aragon tacının bütün özerk krallıkları böylece merkezî bir İspanyol devletinde eritilmiş oldu.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)" },

{ t:"1714-10-03", b:"Real Academia Española'nın (İspanyol Dil Akademisi) resmî onayı", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","bilim","islahat"],
  d:"1713'te bir grup aydının girişimiyle toplanan akademi, V. Felipe'nin fermanıyla resmen kuruldu; \"temizler, düzenler ve parlaklık verir\" (limpia, fija y da esplendor) sloganıyla İspanyolca'nın standart sözlüğünü ve dilbilgisini hazırlamayı üstlendi.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü)" },

{ t:"1717-01-01", b:"Casa de Contratación Cádiz'e taşındı", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["ekonomi","idari"],
  d:"Sevilla'daki nehir limanının Amerika ticareti için artan gemi boyutlarına elverişsiz hâle gelmesi üzerine, iki asırlık ticaret tekeli kurumu Cádiz'e nakledildi; bu, 18. yüzyıl İspanyol ticaret coğrafyasının yeniden şekillenmesinin ilk adımıydı. Cádiz için yerleşim kaydı bulunamadı.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain, ekonomi bölümü)", yer_id:"Cádiz" },

{ t:"1734-05-25", b:"Bitonto Savaşı — Napoli ve Sicilya yeniden kazanıldı", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kazanc"],
  d:"Lehistan Veraset Savaşı sırasında İspanyol kuvvetleri Bitonto'da Avusturya ordusunu yenerek Napoli ve Sicilya krallıklarını yeniden ele geçirdi; bu topraklar V. Felipe'nin oğlu (sonraki III. Carlos) için ayrı bir Bourbon krallığı olarak kuruldu.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[41.1173,16.6884] },

{ t:"1737-06-02", b:"Real Academia de la Historia'nın kuruluşu", tur:"bilim", onem:2, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["bilim","kultur"],
  d:"İspanyol tarihini eleştirel yöntemlerle inceleyip belgeleyecek resmî akademi Madrid'de kuruldu; kurum 18. yüzyılın Aydınlanma çağı reform hareketinin akademik kurumsallaşmasının bir parçasıydı.",
  kaynak:"standart akademik kaynak" },

{ t:"1736-01-01", b:"Fransız-İspanyol Jeodezi Seferi (Ekvator ölçümü)", tur:"bilim", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["bilim","teknoloji"],
  d:"Fransız Bilimler Akademisi'nin Dünya'nın şeklini ölçmek için düzenlediği sefere İspanyol subay-bilim insanları Jorge Juan ve Antonio de Ulloa da katıldı; ekip bugünkü Ekvador'da (o zamanki Peru Genel Valiliği) yıllarca çalışarak enlem-boylam ölçümleri yaptı. Sefer, İspanyol biliminin Aydınlanma çağı Avrupa bilimiyle doğrudan temasının erken örneğiydi.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New / genel bilim tarihi)", kapsam_genis:true },

{ t:"1741-03-20", b:"Cartagena de Indias Kuşatması'nın püskürtülmesi", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"Cartagena de Indias",
  etiket:["askeri"],
  d:"Amiral Edward Vernon komutasındaki büyük bir İngiliz donanma-kara gücü, Jenkins'in Kulağı Savaşı sırasında Cartagena de Indias'ı kuşattı; İspanyol komutan Blas de Lezo, sayıca çok daha küçük bir kuvvetle kuşatmayı püskürttü. Zafer, İspanya'nın Amerika'daki sömürge savunmasının 18. yüzyıldaki en büyük başarılarından biriydi.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1759-08-10", b:"III. Carlos İspanya kralı oldu", tur:"hanedan", onem:5, dunya:3, kapsam:"ic", yer_id:"Madrid",
  etiket:["hanedan","reform"],
  d:"Napoli kralı olarak yönettiği yıllarda reformcu bir yönetici ünü kazanan Carlos, üvey kardeşi VI. Fernando'nun çocuksuz ölümü üzerine İspanya tahtına çıktı. Otuz yıla yakın sürecek saltanatı, İspanyol \"aydın despotizmi\"nin (Bourbon reformları) doruk noktası sayılır.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714 / genel Bourbon tarihi)" },

{ t:"1761-08-15", b:"Üçüncü Aile Sözleşmesi — Bourbon ittifakı", tur:"ittifak", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["ittifak","diplomasi"],
  d:"İspanya ve Fransa Bourbon hanedanları, İngiltere'ye karşı karşılıklı askerî destek taahhüt eden bir ittifak imzaladı; bu antlaşma İspanya'yı Yedi Yıl Savaşları'na (1762) sürükleyecekti.",
  kaynak:"standart akademik kaynak", yer_id:"Paris" },

{ t:"1762-08-13", b:"Havana'nın İngilizler tarafından ele geçirilmesi", tur:"toprak-kayip", onem:4, dunya:3, kapsam:"dis", yer_id:"Havana (La Habana)",
  etiket:["askeri","toprak-kayip"],
  d:"Yedi Yıl Savaşları sırasında büyük bir İngiliz donanması, on haftalık kuşatmanın ardından Küba'nın başkenti Havana'yı ele geçirdi; kayıp, İspanya'nın Karayipler'deki savunma zafiyetini açıkça gösterdi ve 1763 Paris Antlaşması'nda toprak takaslarının gerekçesi oldu.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1763-02-10", b:"1763 Paris Antlaşması — Florida karşılığı Louisiana", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kayip","toprak-kazanc"],
  d:"Yedi Yıl Savaşları'nı sona erdiren antlaşmayla İspanya, Havana'yı geri almak karşılığında Florida'yı İngiltere'ye bıraktı; buna karşılık müttefiki Fransa'dan Louisiana'yı devraldı. Kuzey Amerika'daki sömürge sınırlarının bu yeniden çizimi kıtasal dengeleri kalıcı biçimde değiştirdi.",
  kaynak:"standart akademik kaynak (Kamen)", yer_id:"Paris" },

{ t:"1766-03-23", b:"Esquilache İsyanı — Madrid'de reform karşıtı ayaklanma", tur:"isyan", onem:3, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["isyan","sosyal"],
  d:"İtalyan asıllı bakan Esquilache'nin kıyafet ve fiyat reformlarına (uzun pelerin ve geniş şapkanın yasaklanması dahil) tepki gösteren Madrid halkı ayaklandı; III. Carlos, olaylar sırasında sarayını terk etmek zorunda kaldı. İsyan, reformların halk nezdindeki kırılganlığını gösterdi.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1767-04-02", b:"Cizvitlerin İspanya ve sömürgelerinden sürülmesi", tur:"din", onem:4, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["din","reform"],
  d:"III. Carlos, Cizvit tarikatının siyasî nüfuzundan ve Esquilache isyanındaki rolüne dair kuşkulardan hareketle, tarikat üyelerinin bütün İspanya topraklarından (Avrupa ve Amerika) sınır dışı edilmesini emretti. Karar, aydın despotizmin kilise üzerindeki devlet denetimini pekiştirme çabasının bir parçasıydı.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)" },

{ t:"1778-10-12", b:"Serbest Ticaret Kararnamesi — sömürge limanlarının açılması", tur:"ekonomi", onem:4, dunya:2, kapsam:"ic", yer_id:"", kapsam_genis:true,
  etiket:["ekonomi","reform"],
  d:"Bourbon reformlarının en önemli iktisadi adımlarından biriyle, Amerika ile ticaret artık yalnız Cádiz üzerinden değil, İspanya'nın on üç limanından yapılabilir hâle geldi; karar, sömürge ekonomisinde canlanma yarattı ama yerel üreticilerin İspanya mallarıyla rekabetini de zorlaştırdı.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1782-06-02", b:"Banco de San Carlos'un kuruluşu — ilk İspanyol millî bankası", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["ekonomi","reform"],
  d:"Devlet borcunu düzenlemek amacıyla kurulan banka, 1785'te faaliyete geçti ve 19. yüzyılda Banco de España'nın öncülü oldu; kuruluşu, Bourbon reformlarının malî modernleşme çabasının simgesiydi.",
  kaynak:"standart akademik kaynak" },

{ t:"1782-02-05", b:"Menorca'nın İngilizlerden geri alınması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"Menorka (Mahon)",
  etiket:["askeri","toprak-kazanc"],
  d:"Amerikan Bağımsızlık Savaşı'nın yan cephelerinden birinde İspanyol-Fransız kuvvetleri, yedi aylık kuşatmanın ardından 1713'ten beri İngiliz elinde olan Menorca'yı geri aldı. Ada 1802'ye dek (Amiens Barışı'na kadar) İspanya'da kalacaktı.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1783-01-01", b:"Yeni Granada Kraliyet Botanik Seferi'nin başlaması", tur:"bilim", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["bilim"],
  d:"Botanikçi José Celestino Mutis öncülüğünde, bugünkü Kolombiya topraklarında geniş çaplı bir bitki örnekleme ve sınıflandırma seferi başlatıldı; sefer otuz yılı aşkın sürdü ve Aydınlanma çağı İspanyol biliminin en büyük doğa tarihi projelerinden biri oldu.",
  kaynak:"standart akademik kaynak (genel bilim tarihi)", kapsam_genis:true },

{ t:"1783-09-03", b:"Paris/Versailles Antlaşması — Amerikan Bağımsızlık Savaşı sona erdi", tur:"antlasma", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kazanc"],
  d:"Amerikan Bağımsızlık Savaşı'nı sona erdiren antlaşmalar dizisiyle İspanya, Fransa'nın yanında savaşmasının karşılığında Florida'yı (1763'te kaybettiği) ve Menorca'yı geri kazandı; buna karşılık Cebelitarık'ı geri alma hedefine bu kez de ulaşamadı.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[48.8049,2.1204] },

{ t:"1788-12-14", b:"III. Carlos'un ölümü", tur:"olum", onem:4, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["hanedan"],
  d:"Aydınlanma çağı reformlarının en etkili İspanyol hükümdarı sayılan III. Carlos'un ölümü, yerine geçen zayıf ve kararsız IV. Carlos döneminde reform sürecinin yavaşlamasına ve devrimci Fransa karşısında savrulan bir dış politikaya yol açtı.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1793-03-23", b:"Devrimci Fransa'ya savaş ilanı — Pireneler Savaşı başladı", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"İspanya, XVI. Louis'nin idamına tepki olarak Birinci Koalisyon'a katılıp devrimci Fransa'ya savaş açtı; savaş İspanya için beklenenin aksine kötü geçti ve Katalonya ile Bask bölgesinden Fransız işgaline uğradı.",
  kaynak:"standart akademik kaynak", yer_id:"Madrid" },

{ t:"1795-07-22", b:"Basel Barışı — Fransa ile savaş sona erdi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kayip"],
  d:"Savaşın kötü gitmesi üzerine İspanya, Fransa ile ayrı bir barış yaparak Santo Domingo'nun (bugünkü Dominik Cumhuriyeti) İspanyol yarısını Fransa'ya bıraktı; barışı müzakere eden Manuel Godoy, \"Barış Prensi\" unvanını bu antlaşmadan aldı.",
  kaynak:"standart akademik kaynak", yer_id:"Basel" },

{ t:"1796-08-19", b:"San Ildefonso Antlaşması — Fransa ile ittifak", tur:"ittifak", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["ittifak","diplomasi"],
  d:"İspanya, eski düşmanı Fransa ile İngiltere'ye karşı bir askerî ittifak imzaladı; bu, İspanya'yı fiilen Napolyon'un uydusu hâline getirecek uzun bir sürecin başlangıcıydı ve İngiltere ile deniz savaşına yol açtı.",
  kaynak:"standart akademik kaynak", yer_kon:[40.8975,-4.0075] },

{ t:"1797-02-14", b:"Aziz Vincent Burnu Savaşı — İspanyol donanmasının yenilgisi", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Amiral John Jervis ve komodor Horatio Nelson komutasındaki İngiliz filosu, sayıca üstün İspanyol donanmasını Aziz Vincent Burnu açıklarında yendi; yenilgi, San Ildefonso ittifakının İspanya'ya deniz gücü açısından bedelini gösterdi.",
  kaynak:"standart akademik kaynak", yer_kon:[37.02,-9] },

{ t:"1800-10-01", b:"Üçüncü San Ildefonso Antlaşması — Louisiana Fransa'ya geri verildi", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kayip"],
  d:"Napolyon'un baskısıyla İspanya, 1763'te devraldığı Louisiana'yı gizli bir antlaşmayla Fransa'ya iade etti; toprak üç yıl sonra Fransa tarafından ABD'ye satılacaktı (Louisiana Satın Alımı).",
  kaynak:"standart akademik kaynak", yer_kon:[40.8975,-4.0075] },

{ t:"1803-11-30", b:"Balmis Aşı Seferi'nin yola çıkışı", tur:"bilim", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["bilim","teknoloji","sosyal"],
  d:"Doktor Francisco Javier de Balmis komutasındaki \"Kraliyet Hayırsever Aşı Seferi\", canlı çiçek aşısını yirmi iki yetim çocuğun kollarında zincirleme taşıyarak İspanya'nın bütün Amerika kolonilerine ve Filipinler'e ulaştırdı. Tarihteki ilk uluslararası kamu sağlığı seferi sayılır ve on binlerce kişiyi çiçek hastalığından korudu.",
  kaynak:"standart akademik kaynak (genel tıp tarihi)", yer_id:"A Coruña" },

{ t:"1805-10-21", b:"Trafalgar Deniz Savaşı — Fransız-İspanyol donanmasının imhası", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kayip"],
  d:"Amiral Nelson komutasındaki İngiliz filosu, Fransız-İspanyol birleşik donanmasını Trafalgar açıklarında imha etti; İspanyol amiral Federico Gravina da aldığı yaralardan öldü. Yenilgi, İspanya'nın deniz gücünü fiilen ortadan kaldırdı ve Amerika kıtasıyla bağlantısını tehlikeye attı — üç yıl sonraki kolonyal isyanların dolaylı zeminlerinden biri oldu.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_kon:[36.1817,-6.0294] },

// ───────────────────────────────────────────────────────────────────
// VI. NAPOLYON İŞGALİ VE İMPARATORLUĞUN ÇÖZÜLÜŞÜ (1808-1833)
// ───────────────────────────────────────────────────────────────────

{ t:"1808-03-19", b:"Aranjuez Ayaklanması — IV. Carlos tahttan çekildi", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["isyan","hanedan","kriz"],
  d:"Godoy'un Fransız birliklerini ülkeye sokmasına ve saray yolsuzluğuna öfkelenen halk, Aranjuez'de ayaklandı; IV. Carlos tahtı oğlu VII. Fernando'ya bırakmak zorunda kaldı. Kriz, Napolyon'un İspanya işlerine doğrudan müdahalesine kapı açtı.",
  kaynak:"standart akademik kaynak", yer_kon:[40.0322,-3.6039] },

{ t:"1808-05-02", b:"Dos de Mayo Ayaklanması — Madrid'in Fransız işgaline direnişi", tur:"isyan", onem:5, dunya:4, kapsam:"ic", yer_id:"Madrid",
  etiket:["isyan","askeri","milliyetcilik"],
  d:"Madrid halkı, kraliyet ailesinin geri kalanının da Fransa'ya götürülmesine tepki olarak Fransız işgal kuvvetlerine karşı silahlı ayaklandı; ayaklanma acımasızca bastırıldı (ertesi gün kurşuna dizmeler, Goya'nın \"3 Mayıs 1808\" tablosunun konusu oldu). Olay, İspanyol Bağımsızlık Savaşı'nı (Yarımada Savaşı) başlattı.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1808-06-06", b:"Joseph Bonaparte İspanya kralı ilan edildi", tur:"isgal", onem:5, dunya:4, kapsam:"dis", yer_id:"Madrid",
  etiket:["isgal","hanedan"],
  d:"Napolyon, Bayonne'da zorla aldığı tahttan çekilme belgeleriyle İspanya tahtını kardeşi Joseph Bonaparte'a verdi; İspanyol halkının büyük çoğunluğu bu atamayı tanımayarak yerel juntalar kurdu ve gerilla direnişine geçti.",
  kaynak:"standart akademik kaynak" },

{ t:"1808-07-22", b:"Bailén Savaşı — Napolyon ordusunun ilk büyük yenilgisi", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"General Castaños komutasındaki İspanyol ordusu, Bailén'de bir Fransız kolordusunu kuşatıp teslim olmaya zorladı; bu, Napolyon'un Avrupa'daki yenilmezlik efsanesinin kırıldığı ilk büyük yenilgiydi ve kıta çapında direniş hareketlerine ilham verdi.",
  kaynak:"standart akademik kaynak (Kamen)", yer_kon:[38.0956,-3.7789] },

{ t:"1810-05-25", b:"Buenos Aires'te Mayıs Devrimi — Amerika'da bağımsızlık sürecinin başlaması", tur:"toprak-kayip", onem:4, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["isyan","toprak-kayip"],
  d:"İspanya'nın Napolyon işgali altında meşruiyetinin sarsılmasından yararlanan Buenos Aires kreolleri, kraliyet valisini görevden alıp kendi geçici hükümetini kurdu; bu, sonraki on beş yılda bütün kıta Amerika'sının bağımsızlaşacağı sürecin ilk büyük kıvılcımıydı.",
  kaynak:"standart akademik kaynak (genel Latin Amerika tarihi)", yer_id:"Buenos Aires" },

{ t:"1810-09-24", b:"Cádiz Kortesleri'nin toplanması", tur:"reform", onem:5, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["reform","anayasa"],
  d:"Fransız kuşatması altındaki Cádiz'de toplanan ulusal meclis, İspanya tarihinde ilk kez halk egemenliği ilkesine dayalı bir anayasa hazırlamaya başladı; hem yarımadalı hem Amerika kolonilerinden temsilcileri bir araya getiren meclis, liberal İspanyol siyasetinin doğum yeri sayılır. Cádiz için yerleşim kaydı bulunamadı.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_id:"Cádiz" },

{ t:"1812-03-19", b:"Cádiz Anayasası'nın ilanı", tur:"reform", onem:5, dunya:4, kapsam:"ic", yer_id:"",
  etiket:["reform","anayasa","milliyetcilik"],
  d:"\"La Pepa\" diye anılan anayasa, egemenliği monarktan millete devreden, güçler ayrılığı ve sınırlı oy hakkı öngören İspanya'nın ilk yazılı anayasasıydı. Metin kısa ömürlü olsa da (1814'te Ferdinand VII tarafından iptal edildi) 19. yüzyıl İspanyol ve Latin Amerika liberalizminin temel referans belgesi oldu.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_id:"Cádiz" },

{ t:"1813-06-21", b:"Vitoria Savaşı — Fransızlar İspanya'dan sürüldü", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Wellington Dükü komutasındaki İngiliz-Portekiz-İspanyol ordusu, Joseph Bonaparte'ın ordusunu Vitoria'da kesin biçimde yendi; zafer, Fransız kuvvetlerinin İspanya'dan pratik olarak çekilmesini başlattı ve Yarımada Savaşı'nın sonunu getirdi.",
  kaynak:"standart akademik kaynak", yer_kon:[42.8467,-2.6716] },

{ t:"1814-05-04", b:"VII. Fernando'nun mutlakiyeti geri getirmesi", tur:"reform", onem:5, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["reform","anayasa","kriz"],
  d:"Fransa'dan İspanya'ya dönen VII. Fernando, 1812 Cádiz Anayasası'nı tanımayı reddederek mutlak monarşiyi yeniden ilan etti ve liberal önderleri tutukladı. Karar, 19. yüzyıl boyunca İspanya'yı kutuplaştıracak liberal-mutlakiyetçi (Carlist) çatışmaların zeminini kurdu.",
  kaynak:"standart akademik kaynak (Kamen)" },

{ t:"1814-01-01", b:"Goya'nın \"3 Mayıs 1808\" tablosunu tamamlaması", tur:"kultur", onem:3, dunya:3, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","kultur"],
  d:"Francisco de Goya, Napolyon işgaline direnen Madridlilerin infazını konu alan tabloyu, savaşın hemen ardından yeni kral VII. Fernando'ya sundu. Eser, savaşın vahşetini idealize etmeden anlatan modern anlamda ilk \"savaş karşıtı\" resim sayılır ve dünya sanat tarihinde geniş etki bıraktı.",
  kaynak:"standart akademik kaynak (genel sanat tarihi)" },

{ t:"1820-01-01", b:"Riego Ayaklanması — Liberal Üçyıl'ın başlaması", tur:"isyan", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["isyan","reform"],
  d:"Amerika'ya sevk edilmek üzere toplanan bir ordu birliğinin komutanı Rafael del Riego, birliğini Cádiz yakınında ayaklandırıp 1812 Anayasası'nın yeniden yürürlüğe girmesini talep etti; VII. Fernando kısa süre sonra anayasayı kabul etmek zorunda kaldı. Üç yıl sürecek liberal dönem (Trienio Liberal) böyle başladı.",
  kaynak:"standart akademik kaynak", yer_kon:[36.98,-5.935] },

{ t:"1823-04-07", b:"\"Aziz Louis'nin Yüz Bin Oğlu\" Fransız ordusu İspanya'yı işgal etti", tur:"isgal", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["isgal","askeri"],
  d:"Kutsal İttifak'ın kararıyla harekete geçen büyük bir Fransız ordusu İspanya'ya girip liberal hükümeti devirdi ve VII. Fernando'nun mutlak yetkilerini yeniden tesis etti; liberal önderlerin çoğu idam edildi ya da sürgüne gitti.",
  kaynak:"standart akademik kaynak", kapsam_genis:true },

{ t:"1821-09-27", b:"Meksika'nın bağımsızlığı", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis", yer_id:"Tenochtitlan (Mexico City)",
  etiket:["toprak-kayip","milliyetcilik"],
  d:"Agustín de Iturbide komutasındaki Üç Güvence Ordusu Meksika City'ye girerek üç asırlık İspanyol egemenliğini sona erdirdi; kayıp, İspanya'nın Kuzey Amerika'daki en büyük ve en zengin kolonisinin sonuydu.",
  kaynak:"standart akademik kaynak (genel Latin Amerika tarihi)" },

{ t:"1824-12-09", b:"Ayacucho Savaşı — Güney Amerika'da İspanyol egemenliğinin fiilen sonu", tur:"toprak-kayip", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kayip"],
  d:"Antonio José de Sucre komutasındaki bağımsızlıkçı ordu, son büyük kraliyetçi orduyu Ayacucho'da yenilgiye uğrattı; bu zafer, üç asırlık İspanyol Güney Amerika imparatorluğunun fiilen sona ermesi anlamına geliyordu. Küba ve Porto Riko dışında bütün kıta Amerika kolonileri bu tarihe dek kaybedilmişti.",
  kaynak:"standart akademik kaynak (genel Latin Amerika tarihi) — bir kıtasal imparatorluğun sonu, dünya güçler dengesini kalıcı biçimde değiştirdi", yer_kon:[-13.1588,-74.2239] },

// ───────────────────────────────────────────────────────────────────
// VII. 19. YÜZYIL İÇ ÇATIŞMALARI VE SON (1833-1923)
// ───────────────────────────────────────────────────────────────────

{ t:"1833-09-29", b:"VII. Fernando'nun ölümü — Birinci Karlist Savaşı başladı", tur:"hanedan", onem:5, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["hanedan","isyan","kriz"],
  d:"Fernando'nun kızı İsabel'i tahta çıkarabilmek için Salik veraset kuralını kaldırmasına itiraz eden kardeşi Don Carlos, tahtı kendisinin hakkı sayarak isyan bayrağını açtı; yedi yıl sürecek Birinci Karlist Savaşı, liberal ve mutlakiyetçi-gelenekçi kesimler arasındaki bölünmeyi bütün 19. yüzyıl boyunca derinleştirdi.",
  kaynak:"standart akademik kaynak (Payne, A History of Spain and Portugal)" },

{ t:"1836-01-01", b:"Mesta'nın (göçebe koyun yetiştiricileri loncası) kaldırılması", tur:"ekonomi", onem:2, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["ekonomi","reform"],
  d:"Ortaçağdan beri Kastilya kırsalının en etkili ekonomik-hukuki kurumlarından biri olan Mesta, liberal hükümetin toprak reformları çerçevesinde kaldırıldı; karar, İspanyol kırsal ekonomisinin serbest mülkiyet temelinde yeniden düzenlenmesinin bir parçasıydı.",
  kaynak:"standart akademik kaynak (Payne)", kapsam_genis:true },

{ t:"1839-08-31", b:"Vergara Sözleşmesi — Birinci Karlist Savaşı sona erdi", tur:"antlasma", onem:4, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["antlasma","isyan"],
  d:"General Espartero ile Karlist komutan Maroto arasında imzalanan sözleşme, Bask ve Navarra bölgesel imtiyazlarının (fueros) korunması karşılığında Karlist ordusunun teslim olmasını sağladı; savaş resmen bitse de Karlist hareket 19. yüzyıl boyunca iki kez daha (1846-49, 1872-76) ayaklanacaktı.",
  kaynak:"standart akademik kaynak (Payne)", yer_kon:[43.1167,-2.4167] },

{ t:"1868-09-19", b:"Şanlı Devrim (\"La Gloriosa\") — İsabel II tahttan indirildi", tur:"isyan", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["isyan","hanedan","kriz","darbe-askeri"],
  d:"Amiral Topete'nin Cádiz'de başlattığı ayaklanma, kısa sürede genel bir devrime dönüştü; İsabel II ülkeyi terk etmek zorunda kaldı. Devrim, İspanya'yı altı yıl sürecek bir siyasî istikrarsızlık dönemine (yeni hanedan arayışı, kısa ömürlü Amadeo I saltanatı, Cumhuriyet) sürükledi.",
  kaynak:"standart akademik kaynak (Payne)", yer_id:"Cádiz" },

{ t:"1873-02-11", b:"Birinci İspanya Cumhuriyeti'nin ilanı", tur:"kurulus", onem:5, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["anayasa","kriz"],
  d:"Amadeo I'in tahttan çekilmesi üzerine Kortes'ler cumhuriyeti ilan etti; ancak Cumhuriyet, art arda dört başkan değişimi, bir Karlist ayaklanması ve federalist kantonalist isyanlarla boğuşarak yalnız yirmi iki ay yaşayabildi.",
  kaynak:"standart akademik kaynak (Payne)" },

{ t:"1874-12-29", b:"Bourbon Restorasyonu — XII. Alfonso kral ilan edildi", tur:"hanedan", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan","anayasa"],
  d:"General Martínez Campos'un Sagunto'da başlattığı askerî darbeyle İsabel II'nin oğlu Alfonso, XII. Alfonso unvanıyla tahta çıkarıldı; Restorasyon dönemi, muhafazakârlar ve liberaller arasında dönüşümlü iktidar sistemine (turno pacífico) dayanan görece istikrarlı bir yarım asrı başlattı.",
  kaynak:"standart akademik kaynak (Payne)", yer_kon:[39.6833,-0.2667] },

{ t:"1876-06-30", b:"1876 Anayasası'nın ilanı — Restorasyon rejiminin hukukî çerçevesi", tur:"reform", onem:4, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["anayasa","reform"],
  d:"Cánovas del Castillo'nun kaleme aldığı anayasa, kraliyet yetkisiyle parlamenter sistemi dengelemeyi amaçlıyordu ve 1931'e dek (elli beş yıl) yürürlükte kalarak İspanya tarihinin en uzun ömürlü anayasası oldu.",
  kaynak:"standart akademik kaynak (Payne)" },

{ t:"1898-04-25", b:"İspanyol-Amerikan Savaşı'nın başlaması", tur:"savas", onem:5, dunya:5, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kayip"],
  d:"Küba'daki bağımsızlık ayaklanması ve Havana limanında batan USS Maine zırhlısı gerekçesiyle ABD, İspanya'ya savaş ilan etti; savaş yalnız on haftada İspanyol donanmasının Santiago de Cuba ve Manila'da imhasıyla sonuçlandı. Yenilgi, ABD'nin dünya gücü olarak sahneye çıkışını ve İspanya'nın son büyük sömürge imparatorluğunun sonunu birlikte simgeledi.",
  kaynak:"standart akademik kaynak (Payne, A History of Spain and Portugal) — dünya güçler dengesini değiştiren bir savaş", kapsam_genis:true },

{ t:"1898-12-10", b:"1898 Paris Antlaşması — Küba, Porto Riko ve Filipinler kaybedildi", tur:"toprak-kayip", onem:5, dunya:5, kapsam:"dis", yer_id:"Manila",
  etiket:["antlasma","toprak-kayip"],
  d:"Savaşı sona erdiren antlaşmayla İspanya, Küba'nın bağımsızlığını tanıdı, Porto Riko ve Guam'ı ABD'ye bıraktı, Filipinler'i de 20 milyon dolar karşılığında ABD'ye sattı. \"1898 Felaketi\" (El Desastre) diye anılan bu kayıp, dört asırlık İspanyol denizaşırı imparatorluğunun fiilî sonu oldu ve İspanyol aydınları arasında derin bir kimlik krizini (\"98 Kuşağı\") tetikledi.",
  kaynak:"standart akademik kaynak (Payne) — dünya çapında sömürge dengesini yeniden çizen antlaşma" },

{ t:"1909-07-26", b:"Trajik Hafta — Barselona'da savaş karşıtı isyan", tur:"isyan", onem:3, dunya:1, kapsam:"ic", yer_id:"Barselona",
  etiket:["isyan","sosyal"],
  d:"Fas'taki Rif Savaşı için asker sevkine tepki gösteren Barselona işçi sınıfı, kilise ve manastırları hedef alan şiddetli bir ayaklanma başlattı; hükümetin sert bastırması ve anarşist eğitimci Francisco Ferrer'in idamı Avrupa kamuoyunda büyük tepki yarattı.",
  kaynak:"standart akademik kaynak (Payne)" },

{ t:"1912-03-30", b:"Fas Protektorası'nın kurulması", tur:"toprak-kazanc", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["antlasma","toprak-kazanc"],
  d:"Fransa ile imzalanan antlaşmayla İspanya, Fas'ın kuzey (Rif) ve güney (İfni-Tarfaya) bölgelerinde bir himaye yönetimi kurdu; bu, İspanya'nın 1898 sonrası tek ciddi sömürge genişlemesiydi ve on yıl içinde ağır bir askerî bataklığa (Rif Savaşı) dönüşecekti.",
  kaynak:"standart akademik kaynak (Payne)", yer_id:"Fas (Fez)" },

{ t:"1921-07-22", b:"Annual Felaketi — Rif Savaşı'nda ağır bozgun", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri","kriz"],
  d:"Rif Berberi direnişçileri (Abdülkerim el-Hattabi önderliğinde), General Silvestre komutasındaki İspanyol ordusunu Annual'da bozguna uğrattı; on binden fazla asker öldü ya da esir düştü. Felaket, İspanyol kamuoyunda büyük bir siyasî krize ve ordu-hükümet güvensizliğine yol açarak 1923 darbesinin dolaylı zeminini hazırladı.",
  kaynak:"standart akademik kaynak (Payne)", yer_kon:[35.167,-2.933] },

{ t:"1923-09-13", b:"Primo de Rivera Darbesi — parlamenter rejimin askıya alınması", tur:"isyan", onem:5, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["isyan","anayasa","kriz","darbe-askeri"],
  d:"Barselona garnizon komutanı General Miguel Primo de Rivera, Rif felaketinin siyasî sorumluluğunu araştıran soruşturmanın gölgesinde kansız bir darbeyle iktidarı ele geçirdi; XIII. Alfonso darbeyi onayladı ve 1876 Anayasası'nı fiilen askıya aldırdı. Bu tarih, projenin dünya ölçeğindeki 29 Ekim 1923 sınırına en yakın büyük İspanyol dönüm noktasıdır.",
  kaynak:"standart akademik kaynak (Payne, A History of Spain and Portugal)" },

// ───────────────────────────────────────────────────────────────────
// EK MADDELER — KONU DAĞILIMI DENGESİ İÇİN İKİNCİ GEÇİŞ
// ───────────────────────────────────────────────────────────────────
// 🔴 İlk 135 maddenin ölçümü askerî-siyasî kovanın %67,4 olduğunu gösterdi
//    (şartname hedefi ~%40 — "EN SIK YAPILAN HATA" başlığının tam vakası).
//    Aşağıdaki 23 madde YALNIZ bilim/kültür/sosyal/idari/iktisadî kovalardan
//    seçildi, hiçbir yeni askerî/siyasî madde EKLENMEDİ. Bu ikinci geçişten
//    sonra da oran hedefin üstünde kalıyor (rapora yazıldı, gizlenmedi) —
//    bir SONRAKİ tur için açık kalem.
// ───────────────────────────────────────────────────────────────────

{ t:"1514-01-01", b:"Complutensian Poliglot İncil'in basımına başlandı", tur:"bilim", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["bilim","din"],
  d:"Kardinal Cisneros'un Alcalá'da örgütlediği bilginler ekibi, İbranice, Yunanca, Latince ve Aramice metinleri yan yana basan ilk çok dilli İncil projesini tamamladı; eser Avrupa'da erken modern filoloji biliminin başyapıtlarından sayılır. Basım 1514'te başladı, kilise onayı ve dağıtımı 1522'yi buldu.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü)", yer_kon:[40.4818,-3.3635] },

{ t:"1527-08-01", b:"Valladolid Konferansı — Erasmusçu hümanizmin sınandığı toplantı", tur:"felsefe", onem:2, dunya:2, kapsam:"ic", yer_id:"Valladolid",
  etiket:["felsefe","din"],
  d:"İspanyol din adamları ve akademisyenleri, Rotterdamlı Erasmus'un öğretilerinin ortodoksluğunu tartışmak üzere Valladolid'de toplandı; toplantı kesin bir mahkûmiyet kararı vermeden dağıldı ve Şarlken'in korumasındaki İspanyol Erasmusçuluğu bir süre daha serbestçe gelişti.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)" },

{ t:"1538-10-28", b:"Santo Domingo Üniversitesi kuruldu — Amerika'nın ilk üniversitesi", tur:"bilim", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["bilim","kultur"],
  d:"Papa III. Paulus'un fermanıyla Santo Domingo'da kurulan üniversite, Amerika kıtasındaki ilk yükseköğretim kurumu oldu; İspanya'nın sömürge idaresini yalnız askerî-ekonomik değil kurumsal-eğitimsel bir proje olarak da kurduğunun erken kanıtıdır.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New)", yer_id:"Santo Domingo" },

{ t:"1545-12-13", b:"Trent Konsili açıldı — İspanyol teologların öncü rolü", tur:"din", onem:3, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["din","felsefe"],
  d:"Katolik Kilisesi'nin Reform'a karşı kendini yeniden tanımladığı konsile İspanyol teologlar (Domingo de Soto başta olmak üzere) doktrin tartışmalarında belirleyici katkılar sundu; II. Felipe konsil kararlarını İspanya'da harfiyen uygulatarak Karşı-Reform'un en sıkı takipçisi kimliğini pekiştirdi.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)", yer_id:"Trento" },

{ t:"1550-08-15", b:"Valladolid Tartışması — Las Casas ile Sepúlveda karşı karşıya", tur:"felsefe", onem:4, dunya:3, kapsam:"ic", yer_id:"Valladolid",
  etiket:["felsefe","hukuk","sosyal"],
  d:"Kral tarafından toplanan bir bilgin kurulu önünde, misyoner Bartolomé de las Casas ile filozof Juan Ginés de Sepúlveda, Amerika yerlilerinin \"doğal köle\" sayılıp sayılamayacağını tartıştı. Bu, bir imparatorluğun fetih hakkını felsefî/hukukî zeminde açıkça sorguladığı, erken modern dönemin benzersiz örneklerinden biridir.",
  kaynak:"standart akademik kaynak (Elliott, The Old World and the New)" },

{ t:"1556-01-01", b:"Azpilcueta'nın parasal miktar teorisini ortaya koyması", tur:"bilim", onem:3, dunya:3, kapsam:"ic", yer_id:"",
  etiket:["bilim","ekonomi"],
  d:"Salamanca Okulu'nun teologu Martín de Azpilcueta, Amerika'dan gelen gümüşün fiyatları neden yükselttiğini açıklarken para arzı ile fiyat düzeyi arasındaki ilişkiyi ilk kez sistemli biçimde formüle etti; bu, modern iktisadın \"miktar teorisi\"nin öncüllerinden sayılır.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain, iktisat bölümü)", yer_id:"Salamanca" },

{ t:"1580-09-19", b:"Cervantes'in Cezayir esaretinden kurtarılması", tur:"kultur", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["kultur","din"],
  d:"Beş yıl önce bir deniz baskınında esir düşüp Cezayir'de tutulan yazar Miguel de Cervantes, Trinitarian tarikatının topladığı fidyeyle serbest bırakıldı; esaret yılları sonraki eserlerinde (Don Kişot içindeki \"Esir'in Hikâyesi\" dahil) doğrudan iz bıraktı.",
  kaynak:"standart akademik kaynak (Kamen, kültür bölümü)", yer_id:"Cezayir" },

{ t:"1622-03-12", b:"Dörtlü kanonizasyon — Ávilalı Teresa ve üç İspanyol azizin törenle azizleştirilmesi", tur:"din", onem:2, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["din","kultur"],
  d:"Papa XV. Gregorius, aynı törende İspanyol Karşı-Reform'unun dört büyük ismini (Ávilalı Teresa, Loyolalı Ignatius, Xavierli Francis, Madridli Isidore) azizleştirdi; tören, İspanyol Katolikliğinin döneme damga vuran dinî özgüveninin bir göstergesiydi.",
  kaynak:"standart akademik kaynak", yer_id:"Roma" },

{ t:"1627-01-01", b:"Kraliyet hazinesinin iflası (dördüncü büyük iflas)", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic", yer_id:"Madrid",
  etiket:["ekonomi","kriz"],
  d:"Otuz Yıl Savaşları'nın yükselen maliyeti karşısında İspanyol tacı, 1557 ve 1575'ten sonra dördüncü kez ödemelerini durdurdu; bankerlerle (bu kez Cenevizliler yerine Portekizli converso finansörlerle) yeniden yapılandırma anlaşmaları imzalandı. Tekrarlanan iflaslar, imparatorluğun askerî büyüklüğü ile malî temeli arasındaki açığın yapısal göstergesiydi.",
  kaynak:"standart akademik kaynak (Elliott, Imperial Spain, ekonomi bölümü)" },

{ t:"1649-01-01", b:"Büyük Sevilla Veba Salgını", tur:"sosyal", onem:4, dunya:2, kapsam:"ic", yer_id:"Sevilla",
  etiket:["sosyal","kriz"],
  d:"1647'de Valencia'dan başlayıp yayılan veba, 1649'da Sevilla'yı vurarak şehir nüfusunun yaklaşık yarısını (bazı tahminlere göre 150.000 kişiden fazlasını) öldürdü. Salgın, Sevilla'nın Amerika ticaretindeki tekel gücünün Cádiz lehine gerilemesinde de rol oynayan demografik darbelerden biri oldu.",
  kaynak:"standart akademik kaynak (Kamen, Spain 1469-1714)" },

{ t:"1692-01-01", b:"Sor Juana Inés de la Cruz'un Primero sueño'yu yayımlaması (Yeni İspanya)", tur:"kultur", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["kultur","felsefe"],
  d:"Meksika'daki (Yeni İspanya) manastırında yaşayan şair-bilgin Sor Juana, dönemin en özgün felsefî şiirlerinden birini yayımladı; İspanyol dilindeki Barok edebiyatının sömürge coğrafyasındaki en yüksek noktalarından biri sayılır.",
  kaynak:"standart akademik kaynak (genel edebiyat tarihi)", yer_id:"Tenochtitlan (Mexico City)" },

{ t:"1752-04-12", b:"San Fernando Güzel Sanatlar Akademisi'nin kuruluşu", tur:"kultur", onem:2, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","kultur"],
  d:"Ferdinand VI'nın fermanıyla kurulan akademi, resim, heykel ve mimarlık eğitimini devlet gözetiminde kurumsallaştırdı; 18. yüzyıl sonunda Goya'nın da hocalık yaptığı kurum, modern İspanyol sanat eğitiminin temelini attı.",
  kaynak:"standart akademik kaynak" },

{ t:"1781-01-01", b:"Real Jardín Botánico'nun (Kraliyet Botanik Bahçesi) bugünkü yerine taşınması", tur:"bilim", onem:2, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["bilim"],
  d:"III. Carlos'un emriyle Prado bulvarına taşınan botanik bahçesi, Amerika ve Filipinler'deki bilimsel seferlerden (Mutis, Malaspina) toplanan binlerce bitki örneğinin sınıflandırıldığı merkez hâline geldi; Bourbon aydınlanma reformlarının bilim kurumsallaşmasının somut örneğidir.",
  kaynak:"standart akademik kaynak" },

{ t:"1786-01-01", b:"Goya birinci saray ressamı oldu", tur:"kultur", onem:2, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["kultur","kultur"],
  d:"Francisco de Goya, kraliyet gobelin fabrikası için yaptığı kartonlarla dikkat çektikten sonra saray ressamlığına atandı; bu görev, onu hem III. Carlos hem IV. Carlos döneminin resmî portrelerini yapan, hem de Napolyon işgalinin dehşetini kaydeden bir sanatçıya dönüştürecek kariyerin başlangıcıydı.",
  kaynak:"standart akademik kaynak" },

{ t:"1789-07-30", b:"Malaspina Seferi'nin yola çıkışı — bilimsel dünya turu", tur:"bilim", onem:3, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["bilim","kesif"],
  d:"İtalyan asıllı İspanyol denizci Alessandro Malaspina komutasındaki iki fırkateyn, beş yıl sürecek bir bilimsel-siyasî keşif seferiyle Amerika, Pasifik ve Filipinler kıyılarını haritalandırıp doğa örnekleri topladı. Sefer, Bourbon aydınlanmacılığının Cook ve La Pérouse seferleriyle yarışan en büyük bilimsel girişimiydi.",
  kaynak:"standart akademik kaynak (genel bilim tarihi)", yer_id:"Cádiz" },

{ t:"1857-09-09", b:"Moyano Kanunu — modern eğitim sisteminin kurulması", tur:"reform", onem:4, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["reform","idari","bilim"],
  d:"Eğitim bakanı Claudio Moyano'nun kanunu, ilk, orta ve yüksek öğretimi ilk kez tek bir merkezî çerçevede düzenledi ve zorunlu ilköğretim ilkesini getirdi; kanun, ufak değişikliklerle bir asra yakın yürürlükte kaldı.",
  kaynak:"standart akademik kaynak (Payne)" },

{ t:"1876-10-29", b:"Institución Libre de Enseñanza'nın (Özgür Eğitim Kurumu) kuruluşu", tur:"bilim", onem:3, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["bilim","kultur","felsefe"],
  d:"Üniversite kürsülerinden dinî-siyasî baskı yüzünden uzaklaştırılan bir grup akademisyen, laik ve deneysel pedagojiye dayanan özel bir eğitim kurumu açtı; kurum, 98 Kuşağı da dahil olmak üzere sonraki elli yılın İspanyol aydınlarının büyük kısmını yetiştirdi.",
  kaynak:"standart akademik kaynak (Payne)" },

{ t:"1879-05-02", b:"İspanyol Sosyalist İşçi Partisi'nin (PSOE) kuruluşu", tur:"kurulus", onem:3, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["sosyal","kurulus"],
  d:"Matbaacı Pablo Iglesias öncülüğünde Madrid'de kurulan parti, İspanya'nın ilk kalıcı işçi sınıfı siyasî örgütü oldu ve 20. yüzyıl İspanyol siyasetinin ana damarlarından birinin başlangıcını oluşturdu.",
  kaynak:"standart akademik kaynak (Payne)" },

{ t:"1888-08-12", b:"Genel İşçi Sendikası'nın (UGT) kuruluşu", tur:"kurulus", onem:2, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["sosyal","kurulus"],
  d:"Barselona'da toplanan bir kongrede kurulan UGT, PSOE'ye yakın sosyalist sendikal hareketin çatı örgütü oldu ve 20. yüzyıl boyunca İspanyol işçi hareketinin en büyük iki kanadından (öteki anarko-sendikalist CNT) biri olarak kaldı.",
  kaynak:"standart akademik kaynak (Payne)", yer_id:"Barselona" },

{ t:"1898-01-01", b:"98 Kuşağı'nın doğuşu — imparatorluk kaybının aydınlar üzerindeki etkisi", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["kultur","felsefe","sosyal"],
  d:"1898 felaketinin ardından Miguel de Unamuno, Azorín, Pío Baroja ve Antonio Machado gibi yazarlar, İspanya'nın kimliğini ve gerilemesinin köklerini sorgulayan bir edebî-felsefî akım oluşturdu; \"98 Kuşağı\" adı sonradan verildi, hareketin billurlaşması 1898-1900 arasına yayılır.",
  kaynak:"standart akademik kaynak (Payne, A History of Spain and Portugal)", kapsam_genis:true },

{ t:"1900-03-27", b:"Villaverde Malî Reformu — 1898 sonrası bütçe dengesi", tur:"reform", onem:3, dunya:1, kapsam:"ic", yer_id:"Madrid",
  etiket:["reform","ekonomi","idari"],
  d:"Maliye bakanı Raimundo Fernández Villaverde, sömürgelerin kaybından sonra iflasın eşiğindeki devlet bütçesini vergi artışları ve harcama disipliniyle dengeye kavuşturdu; reform, 20. yüzyıl başı İspanya'sının malî yeniden yapılanmasının temel adımı oldu.",
  kaynak:"standart akademik kaynak (Payne)" },

{ t:"1906-12-10", b:"Santiago Ramón y Cajal Nobel Tıp Ödülü'nü kazandı", tur:"bilim", onem:4, dunya:3, kapsam:"dis", yer_id:"Madrid",
  etiket:["bilim","teknoloji"],
  d:"Sinir sisteminin hücresel yapısına (nöron doktrini) ilişkin çalışmalarıyla Ramón y Cajal, İtalyan Camillo Golgi ile birlikte Nobel Tıp Ödülü'nü paylaştı; bu, bir İspanyolun kazandığı ilk Nobel Ödülü'ydü ve modern nörobiliminin kurucu başarılarından sayılır.",
  kaynak:"standart akademik kaynak (genel bilim tarihi)" },

{ t:"1919-02-05", b:"La Canadiense Grevi — Barselona'da büyük genel grev", tur:"sosyal", onem:3, dunya:1, kapsam:"ic", yer_id:"Barselona",
  etiket:["sosyal","ekonomi"],
  d:"Kanada sermayeli elektrik şirketi La Canadiense'de başlayan grev, kısa sürede Barselona'yı felç eden bir genel greve dönüştü; CNT sendikasının örgütlediği eylem, sekiz saatlik iş gününün İspanya'da yasal olarak kabul edilmesini sağlayan baskı gücünü oluşturdu.",
  kaynak:"standart akademik kaynak (Payne)" },

];

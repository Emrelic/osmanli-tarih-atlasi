// =====================================================================
// KUZEY AFRİKA — DEVLET KRONOLOJİLERİ (ilk tur, 22 Ağustos 2026)
// Beş künye: merini · sadi (+ fas'ın Alevî devamı) · hafsi · zeyyani ·
// trablusgarp-ocagi
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. index.html'e ve arac/girdi.py'ye bağlanmadı;
//    devletler.js'teki künyelerle birleştirmeyi koordinatör yapar.
//    Bu dosya devletler.js'e DOKUNMAZ.
//
// ── NİÇİN VAR ──────────────────────────────────────────────────────
// Fas, Osmanlı'nın hiçbir dönemde alamadığı tek Kuzey Afrika devleti
// (Vâdilmehâzin 1578). Hafsî (Tunus) ve Zeyyânî (Tilimsan) ise
// Osmanlı-İspanya çekişmesinin sahnesi; Trablusgarp Ocağı üçüncü ocak.
// Bugüne dek atlasta bu coğrafya yalnız "Barbaros şunu aldı" diye
// görünüyordu.
//
// ── onem / dunya ─────────────────────────────────────────────────
// onem  BU KÜNYENİN kendi tarihi için ağırlık (künyeden künyeye değişir,
//       "kötü/iyi" skalası DEĞİL — bir hanedanın SONU da onem:5'tir)
// dunya OLAYIN kendisine ait, HER DOSYADA AYNI olmak zorunda
//   5 çağ kapatan/açan, bölge dışını değiştiren
//   4 iki+ büyük gücün sınırını değiştiren (Vâdilmehâzin, Rio Salado,
//     Tunus'un el değiştirmeleri, ABD-Trablus savaşları)
//   3 iki devlet arası kalıcı etkili savaş/antlaşma
//   2 bölgesel etki (Merini-Zeyyani sınır çekişmeleri)
//   1 yalnız iç mesele
// ⚠️ Bu dosya dunya değerlerini İLK KEZ atıyor; data/olaylar*.js ve
//    savaslar.js ile ÇAPRAZ KONTROL EDİLMEDİ — ölçmedim, yazıyorum.
//
// ── yer_id — ÖLÇÜLEN BOŞLUKLAR (rapora da yazıldı) ──────────────────
// VAR: Fas (Fez) · Merakeş · Rabat · Agadir · Tanca · Sebte (Ceuta) ·
//      Tunus · Sûse · Mehdiye · Cerbe (Djerba) · Cezayir · Oran ·
//      Tilimsan · Trablus · Bingazi · Derne · Tobruk · Murzuk (Fizan) ·
//      Gao · Timbuktu
// YOK (yer_id:"" bırakıldı, koordinatöre bildirildi):
//      Sûs bölgesi (Sâdî doğuş yeri) · Sicilmâse · Selâ · Fâzâz ·
//      Vâdilmehâzin/Ksar el-Kebir (1578 SAVAŞ ALANI — önemli eksik) ·
//      Meknas/Miknas (Mevlây İsmâil başkenti) · Safi · Azemmûr · Bâdis ·
//      Kasrüssagīr
//
// ── kaynak ────────────────────────────────────────────────────────
// Birincil TDV: meriniler · sadiler · tunus · tilimsan · trablusgarp ·
// fas. Vikipedi kullanılmadı.
// =====================================================================

window.KRONOLOJI_KUZEYAFRIKA = [

// ══════════════════════════════════════════════════════════════════
// I. MERÎNÎLER (1196-1549)
// ══════════════════════════════════════════════════════════════════

{ t:"1196-01-01", b:"Abdülhak b. Mahyû, Zenâte Merînî boyunun beyliğini kurdu", tur:"kurulus", onem:5, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Abdülhak, henüz Muvahhid hizmetindeyken Zenâte Berberî boyu Merînîlerin beyliğini kurdu; hanedanın kuruluşu olarak kabul edilir. Bağımsızlaşma bir asrı bulacak bir sürece yayıldı.",
  kaynak:"TDV `meriniler`: \"592/1196'da Abdülhak tahta geçti, hanedanın kurucusu olarak kabul edildi\"" },

{ t:"1216-01-01", b:"Tâze'de Muvahhid ordusuna zafer", tur:"savas", onem:3, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Merînîler 20.000 kişilik bir Muvahhid ordusunu Tâze'de yenilgiye uğrattı; bağımsızlaşma sürecinin ilk büyük askerî başarısı.",
  kaynak:"TDV `meriniler`: \"613/1216'da 20.000 kişilik Muvahhid ordusunu yenilgiye uğrattı\"", yer_id:"Tâze (Taza)" },

{ t:"1255-01-01", b:"Fas yakınlarında ikinci büyük Muvahhid zaferi", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"80.000 kişilik bir Muvahhid ordusu Fas yakınlarında mağlûp edildi; Merînîlerin kuzey Fas'taki üstünlüğü perçinlendi.",
  kaynak:"TDV `meriniler`: \"653/1255'te 80.000 kişilik Muvahhid ordusunu mağlûp etti\"", yer_id:"Fas (Fez)" },

{ t:"1258-01-01", b:"Ebû Yûsuf Ya'kūb saltanata geçti", tur:"hanedan", onem:4, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Hanedanın en güçlü hükümdarlarından Ebû Yûsuf Ya'kūb saltanata geçti; onun döneminde Muvahhid Devleti kesin olarak sona erdirilecek ve Endülüs'e büyük seferler düzenlenecekti.",
  kaynak:"TDV `meriniler`: \"656/1258'de Ebû Yûsuf Ya'kūb saltanata geçti\"" },

{ t:"1270-01-01", b:"Merakeş alınarak Muvahhidler Devleti sona erdirildi", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis", yer_id:"Merakeş",
  etiket:["askeri","toprak-kazanc"],
  d:"Ebû Yûsuf Ya'kūb Merakeş'i ele geçirerek bir asırdır Kuzey Afrika ve Endülüs'e hükmeden Muvahhidler Devleti'ni tarihe gömdü; Merînîler artık bölgenin tek hâkimiydi.",
  kaynak:"TDV `meriniler`: \"668/1270'te Merakeş ele geçirilerek Muvahhidler Devleti sona erdirildi\"" },

{ t:"1274-01-01", b:"Tanca ve Sebte zaptedildi", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis", yer_id:"Tanca",
  etiket:["askeri","toprak-kazanc"],
  d:"Merînîler, Cebelitârık Boğazı'na hâkim iki liman şehri Tanca ve Sebte'yi ele geçirerek Endülüs'e geçiş kapısını denetim altına aldı.",
  kaynak:"TDV `meriniler`: \"672/1273-74'te Tanca ve Sebte zaptedildi\"" },

{ t:"1275-09-08", b:"İsticce'de Kastilya ordusuna zafer (Endülüs seferi)", tur:"savas", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Ebû Yûsuf Ya'kūb'un Endülüs'teki Nasrîlere yardıma çıkan ilk büyük seferi, İsticce (Ecija) yakınlarında Kastilya ordusunu bozguna uğrattı.",
  kaynak:"TDV `meriniler`: \"15 Rebîülevvel 674/8 Eylül 1275'te İsticce savaşında Kastilya ordusunu mağlûp etti\"", yer_kon:[37.5417,-5.0819] },

{ t:"1340-10-30", b:"Rio Salado'da (Tarîf) Kastilya-Portekiz ittifakına yenilgi", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kayip"],
  d:"Ebü'l-Hasan'ın büyük Endülüs ordusu, Tarîf yakınında XI. Alfonso (Kastilya) ile IV. Alfonso'nun (Portekiz) birleşik kuvvetlerine yenildi. Yenilgi Merînîlerin Endülüs'e askerî müdahale kapasitesini kalıcı olarak kırdı ve Reconquista'nın önündeki son büyük Müslüman deniz aşırı ordusunu tasfiye etti.",
  kaynak:"TDV `meriniler`: \"8 Cemâziyelevvel 741/30 Ekim 1340'ta Tarîf yakınında XI. Alfonso ve IV. Alfonso'nun birleşik kuvvetlerine yenildi\"", yer_kon:[36.0128,-5.6076] },

{ t:"1270-01-01", b:"Abdülvâdîler (Zeyyânîler) bağımsızlaşarak Tilimsan'ı kurdu", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["toprak-kayip"],
  d:"Merînîler Abdülvâdîlere yenilerek Tilimsan çevresindeki denetimini kaybetti; bölgede üçüncü büyük Berberî hanedanı (Zeyyânîler) bağımsızlaştı.",
  kaynak:"TDV `meriniler`: \"668/1270'te Abdülvâdîlere yenilip onlar bağımsız hale geldi\" · bkz. [[zeyyani]]" },

{ t:"1307-01-01", b:"Sekiz yıllık Tilimsan kuşatması ve sultanın suikastle ölümü", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri","kusatma"],
  d:"Ebû Ya'kūb Yûsuf'un Tilimsan kuşatması sekiz yıl üç ay sürdü, şehir teslim edilmedi; kuşatma sırasında sultan suikaste kurban gitti.",
  kaynak:"TDV `meriniler`: \"706/1306-1307'de Tilimsan kuşatması 8 yıl 3 ay sürdü; suikasta uğrayıp öldü\"" },

{ t:"1337-01-01", b:"Tilimsan ele geçirilerek Abdülvâdîler hâkimiyeti (geçici) sona erdi", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri","toprak-kazanc"],
  d:"Ebü'l-Hasan Ali, Tilimsan'ı ele geçirerek Abdülvâdî hâkimiyetine son verdi; on yıl sürecek bir Merînî ilhak dönemi başladı. Şehir 1348'de yine Abdülvâdîlere dönecekti (bkz. [[zeyyani]]).",
  kaynak:"TDV `meriniler`: \"737/1337'de Tilimsan ele geçirilerek Abdülvâdîler hâkimiyeti sona erdirildi\"" },

{ t:"1347-01-01", b:"Tunus'a girilip Hafsî toprakları alındı", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"Tunus",
  etiket:["askeri","toprak-kazanc"],
  d:"Ebü'l-Hasan Ali'nin ordusu Tunus'a girerek Hafsîlerin topraklarını (Tunus, Bicâye, Kostantîne) ele geçirdi; Merînî gücü kısa süreliğine bütün Mağrib'e yayıldı.",
  kaynak:"TDV `meriniler`: \"748/1347'de Tunus şehrine girerek Hafsîlerin topraklarını aldı\"" },

{ t:"1348-01-01", b:"Merînîler on yıllık Tilimsan hâkimiyetini kaybetti", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["toprak-kayip"],
  d:"Abdülvâdîler Tilimsan'ı geri alarak on yıllık Merînî hâkimiyetine son verdi.",
  kaynak:"TDV `meriniler`: \"749/1348'de Abdülvâdîler Tilimsân'ı geri aldı; on yıllık Merînî hâkimiyeti sona erdi\"" },

{ t:"1358-01-01", b:"Ebû İnân Tilimsan'a girdi, Abdülvâdîlerin ikinci hükümranlığı sona erdi", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri","toprak-kazanc"],
  d:"Ebû İnân, babası Ebü'l-Hasan'ın işini tamamlayıp Tilimsan'ı yeniden ilhak etti; aynı yıl Kostantîne'yi zaptedip Tunus'a girerek Hafsî hâkimiyetine de son verdi — Merînî gücünün son zirvesi.",
  kaynak:"TDV `meriniler`: \"759/1358'de Ebû İnân Tilimsân'a girdi\" · \"758/1357'de Kostantîne zaptedilerek Tunus'a girilerek Hafsîler hâkimiyeti sona erdi\"" },

{ t:"1350-01-01", b:"Ebû İnân babasını tahttan feragate zorladı", tur:"isyan", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["isyan","hanedan"],
  d:"Ebû İnân, Medgūsa'da (Ümmürrebî vadisi) babası Ebü'l-Hasan'ı tahttan feragate mecbur ederek iktidarı ele geçirdi.",
  kaynak:"TDV `meriniler`: \"751/1350'de Ebû İnân babasını tahttan feragate mecbur etti\"" },

{ t:"1358-01-01", b:"Ebû İnân boğularak öldürüldü", tur:"olum", onem:4, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Merînî gücünün zirvesindeki hükümdar Ebû İnân sarayında boğularak öldürüldü; ölümünün ardından hanedan on yıllar sürecek bir taht kavgaları dönemine girdi.",
  kaynak:"TDV `meriniler`: \"759/1358'de Ebû İnân boğularak öldü\"" },

{ t:"1409-01-01", b:"Hafsî sultanının Fas'a yürüyüşü, Merînîler istiklâlini kaybetti", tur:"toprak-kayip", onem:5, dunya:2, kapsam:"dis", yer_id:"Fas (Fez)",
  etiket:["toprak-kayip"],
  d:"Hafsî sultanının Fas üzerine yürümesiyle Merînîler fiilî bağımsızlığını kaybetti; hanedan artık bir Hafsî nüfuz alanına dönüştü. On yıllar süren taht kavgaları ve vezir saltanatları döneminin (Vattâsîler) zemini burada atıldı.",
  kaynak:"TDV `meriniler`: \"812/1409'da Hafsî sultanının Fas üzerine yürüyüşü; Merînîler istiklâlini kaybetti\"" },

{ t:"1415-01-01", b:"Portekiz Sebte'yi işgal etti", tur:"toprak-kayip", onem:4, dunya:4, kapsam:"dis", yer_id:"Sebte (Ceuta)",
  etiket:["toprak-kayip"],
  d:"Portekiz Kralı I. Jean, Sebte'yi işgal ederek Fas kıyısındaki ilk Avrupa kolonizasyon hamlesini başlattı — Portekiz'in Fas sahillerini adım adım ele geçireceği bir asrın ilk halkası ve Avrupa'nın deniz aşırı yayılma çağının erken işaretlerinden biri.",
  kaynak:"TDV `meriniler`: \"818/1415'te Portekiz Kralı I. Jean tarafından işgal edildi\"" },

{ t:"1458-01-01", b:"Kasrüssagīr Portekizlilerin eline geçti", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["toprak-kayip"],
  d:"Portekiz kıyı işgallerini sürdürerek Kasrüssagīr'i ele geçirdi.",
  kaynak:"TDV `meriniler`: \"862/1458'de Kasrüssagīr şehri Portekizlilerin eline geçti\"", yer_kon:[35.8494,-5.5667] },

{ t:"1465-01-01", b:"Tanca Portekiz'e düştü, son Merînî sultanı öldürülerek hanedan sona erdi", tur:"son", onem:5, dunya:3, kapsam:"dis", yer_id:"Fas (Fez)",
  etiket:["toprak-kayip","hanedan"],
  d:"Tanca'nın da Portekiz'in eline geçmesiyle aynı yıl son Merînî sultanı Abdülhak öldürüldü ve iki buçuk asırlık hanedan sona erdi; iktidar fiilen eski Merînî vezirleri Vattâsîlere geçti.",
  kaynak:"TDV `meriniler`: \"869/1465'te Tanca Portekizliler tarafından işgal edildi\" · \"869/1465'te Merînî Sultanı Abdülhak öldürülerek Merînîler Devleti sona erdi\"" },

{ t:"1299-01-01", b:"Mansûre şehri kuruldu (Tilimsan kuşatması karargâhı)", tur:"kultur", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["mimari","kurum"],
  d:"Sekiz yıl süren Tilimsan kuşatması sırasında ordugâh olarak Mansûre şehri kuruldu; köşkler, resmî binalar ve hamamlar inşa edildi — bir kuşatma karargâhının kalıcı şehre dönüşümü.",
  kaynak:"TDV `meriniler`: \"698/1299'da Mansûre şehri kuruldu; bu sırada köşkler, binalar, hamamlar yapıldı\"", yer_id:"Tilimsan" },

{ t:"1323-01-01", b:"Medresetü'l-Attârîn inşa edildi", tur:"bilim", onem:2, dunya:1, kapsam:"ic", yer_id:"Fas (Fez)",
  etiket:["bilim","mimari"],
  d:"Fas'ta, Merînî medrese mimarisinin özgün örneklerinden Medresetü'l-Attârîn inşa edildi; hanedan, başkentini bir ilim merkezine dönüştürme siyasetini bu tür kurumlarla sürdürdü.",
  kaynak:"TDV `meriniler`: \"723/1323'e ait kaynaklar Medresetü'l-Attârîn'in inşasını gösterir\"" },

{ t:"1304-01-01", b:"İlk resmî hac kafilesi yola çıktı", tur:"din", onem:2, dunya:1, kapsam:"dis", yer_id:"",
  etiket:["dini"],
  d:"Merînî hükümdarlığı himayesinde ilk resmî hac kafilesi Mekke'ye yola çıktı; hanedanın dinî meşruiyet ve hac yolu güvenliği siyasetinin erken bir göstergesi.",
  kaynak:"TDV `meriniler`: \"703/1303-1304'te ilk hac kafilesi yola çıktı\"" },

// ══════════════════════════════════════════════════════════════════
// II. SÂDÎLER (1511-1659) — bkz. devletler.js id:"sadi"
// ══════════════════════════════════════════════════════════════════

{ t:"1511-01-01", b:"Muhammed b. Abdurrahman es-Sa'dî Sûs'ta cihad emîri ilân edildi", tur:"kurulus", onem:5, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Muhammed b. Abdurrahman es-Sa'dî, Sûs bölgesinde elli kadar kabile reisinden biat alarak cihad emîri oldu — İber yarımadası ve Portekiz'in kıyı işgallerine karşı direniş söylemiyle yükselen Sâdî hanedanının başlangıcı.",
  kaynak:"TDV `sadiler`: \"916/1511'de Muhammed b. Abdurrahman es-Sa'dî, Sûs bölgesinde cihad emîri olarak atandı\"", kapsam_genis:true },

{ t:"1517-01-01", b:"Kurucunun vefatı, Ahmed el-A'rec tahta geçti", tur:"hanedan", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["hanedan"],
  d:"Hanedanın kurucusu Muhammed'in vefatının ardından oğlu Ahmed el-A'rec tahta geçti.",
  kaynak:"TDV `sadiler`: \"923/1517'de Muhammed'in vefatı; Ahmed el-A'rec'in tahta geçmesi\"" },

{ t:"1524-01-01", b:"Merakeş'e girilip başşehir yapıldı", tur:"toprak-kazanc", onem:5, dunya:2, kapsam:"dis", yer_id:"Merakeş",
  etiket:["askeri","toprak-kazanc"],
  d:"Sâdîler Merakeş'e girerek şehri başşehir yaptı; Sûs'taki yerel bir cihad hareketi artık bölgesel bir devletin merkezine sahipti.",
  kaynak:"TDV `sadiler`: \"930/1524'te Merakeş'e girerek başşehir yapılması\"" },

{ t:"1536-01-01", b:"Ukbâ savaşı sonrası Vattâsîlerle sınır antlaşması", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","antlasma"],
  d:"Ukbâ savaşının ardından Sâdîler ile eski Merînî vezirleri Vattâsîler arasında egemenlik alanlarını belirleyen bir antlaşma yapıldı — ülke fiilen ikiye bölünmüş durumdaydı.",
  kaynak:"TDV `sadiler`: \"943/1536'da Ukbâ savaşından sonra Vattâsîler ile egemenlik alanları belirleme antlaşması\"" },

{ t:"1537-01-01", b:"Portekiz ile üç yıllık antlaşma", tur:"antlasma", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["diplomasi","antlasma"],
  d:"Sâdîler, kıyı kalelerini elinde tutan Portekiz ile üç yıllık bir antlaşma imzaladı.",
  kaynak:"TDV `sadiler`: \"1537'de Portekiz ile 3 yıllık antlaşma imzalanması\"" },

{ t:"1541-01-01", b:"Agadir ele geçirildi, Safî ve Azemmûr Portekiz'ce boşaltıldı", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"Agadir",
  etiket:["askeri","toprak-kazanc"],
  d:"Sâdîler Agadir'i ele geçirdi ve Safî kalesini kuşattı; baskı altındaki Portekiz, Safî ve Azemmûr limanlarını tahliye etti — Fas kıyısındaki bir asırlık Portekiz varlığının geri çekilişi başladı.",
  kaynak:"TDV `sadiler`: \"1541'de Agādîr'in ele geçirilmesi\" · \"1541'de Safî Kalesi kuşatılması; Portekizlilerin Safî ve Azemmûr'u terketmesi\"" },

{ t:"1549-01-01", b:"Fas şehrine girilip Vattâsî hâkimiyetine son verildi", tur:"toprak-kazanc", onem:5, dunya:3, kapsam:"dis", yer_id:"Fas (Fez)",
  etiket:["askeri","toprak-kazanc"],
  d:"Muhammed eş-Şeyh, Fas şehrine girerek Vattâsî hâkimiyetine son verdi; Sâdîler artık bütün Fas'ın tek hâkimiydi. bkz. [[fas]] (ülke şemsiye kimliği bu tarihte başlıyor).",
  kaynak:"TDV `sadiler`: \"956/1549'da Fas şehrine giriş; Vattâsî hâkimiyetine son verilmesi\"" },

{ t:"1554-01-01", b:"Osmanlı ordusu Sâdîleri Fas'tan çıkardı, Ebû Hassûn'u tahta oturttu", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"Fas (Fez)",
  etiket:["askeri","toprak-kayip"],
  d:"Osmanlı-destekli bir sefer Fas şehrini ele geçirip Sâdîleri geçici olarak çıkardı ve eski Vattâsî hanedanından Ebû Hassûn'u tahta oturttu — Osmanlı'nın Fas'a ilk ve tek doğrudan askerî müdahalesi. Aynı yıl Muhammed eş-Şeyh Ebû Hassûn'u yenip öldürerek Fas'ı geri aldı.",
  kaynak:"TDV `sadiler`: \"961/1554'te Osmanlı ordusu tarafından Fas'tan çıkarılması; Ebû Hassûn'un iktidarı\" · \"Aynı yıl Muhammed eş-Şeyh tarafından Ebû Hassûn'un yenilgisi ve ölümü\"" },

{ t:"1557-01-01", b:"Muhammed eş-Şeyh Osmanlı ordusunca öldürüldü, Abdullah tahta geçti", tur:"olum", onem:5, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["hanedan"],
  d:"1554'te Osmanlıları Fas'tan çıkaran Muhammed eş-Şeyh, üç yıl sonra bir Osmanlı harekâtı sırasında öldürüldü; yerine oğlu Abdullah (Gālib-Billâh) geçti. Osmanlı-Sâdî çekişmesi bir kuşak daha sürecekti. ⚠️ Kaynağın verdiği yer adı ('Derna dağları') Trablusgarp'taki Derne ile KARIŞTIRILMASIN — Fas içinde bir yerdir, atlasın Derne noktasıyla eşleştirilmedi.",
  kaynak:"TDV `sadiler`: \"964/1557'de Muhammed eş-Şeyh'in Osmanlı ordusu tarafından Derna dağlarında öldürülmesi\" · \"964/1557'de Abdullah (Gālib-Billâh) tahta geçişi\"" },

{ t:"1564-01-01", b:"İspanyollar Bâdis'i ele geçirdi", tur:"toprak-kayip", onem:2, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["toprak-kayip"],
  d:"İspanya, Akdeniz kıyısındaki Bâdis adasını ele geçirdi. (Bâdis'in TDV'de müstakil maddesi yok; bilgi `sadiler` maddesinden alındı.)",
  kaynak:"TDV `sadiler`: \"1564'te İspanyolların Bâdis adasını ele geçirmesi\"", yer_id:"Bâdis (Peñón de Vélez)" },

{ t:"1576-01-01", b:"Osmanlı desteğiyle Abdülmelik Fas'a girdi", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"Fas (Fez)",
  etiket:["askeri","hanedan"],
  d:"Osmanlı kuvvetlerinin desteğiyle Abdülmelik Fas'a girdi; kısa süre sonra Mu'tasım unvanıyla tahta oturdu. Osmanlı-Sâdî ilişkisi bu kez bir düşmanlık değil ittifak biçimini aldı.",
  kaynak:"TDV `sadiler`: \"983/1576'da Osmanlı kuvvetleriyle Abdülmelik'in Fas'a girişi\" · \"19 Rebîülâhir 984/16 Temmuz 1576'da Abdülmelik'in Mu'tasım unvanıyla tahta oturması\"" },

{ t:"1578-08-04", b:"Vâdilmehâzin (Üç Kral) Savaşı — Portekiz Haçlı ordusu imha edildi", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["askeri","toprak-kaybi"],
  d:"Portekiz Kralı Sebastião'nun bizzat başında bulunduğu Haçlı ordusu Vâdilmehâzin'de (Alcácer Quibir) bozguna uğratıldı; kral savaş alanında öldü, Abdülmelik de aynı gün hastalıktan öldü, Ahmed el-Mansûr tahta geçti. Portekiz tahtı vâris bırakmadan boşaldı ve iki yıl sonra İspanya Kralı II. Felipe Portekiz tacını ele geçirdi (1580 İber Birliği) — savaş, Fas sınırları dışında bir Avrupa hanedan krizini doğrudan tetikledi. ⚠️ Savaş alanı (Ksar el-Kebir/Alcácer Quibir) atlasın yerleşim veri tabanında YOK, yer_id boş bırakıldı.",
  kaynak:"TDV `sadiler`: \"30 Cemâziyelevvel 986/4 Ağustos 1578'de Vâdilmehâzin (Üç Kral) savaşında Portekiz Haçlı ordusunun mağlûbiyeti\" · \"Abdülmelik'in hastalıktan savaş alanında ölümü\" · \"Ahmed el-Mansûr'un tahta geçişi\" — İber Birliği bağlantısı genel akademik bilgi, TDV maddesinde işlenmiyor", yer_kon:[35.006,-5.904] },

{ t:"1588-01-01", b:"Ahmed el-Mansûr Osmanlı'ya vergiyi kesti", tur:"idari", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["diplomasi"],
  d:"Ahmed el-Mansûr, İstanbul'a gönderdiği vergiyi kesti; ardından yumuşatıcı bir elçilik heyeti gönderdi. Sâdîlerin Osmanlı'ya karşı fiilî bağımsızlığının bir göstergesi.",
  kaynak:"TDV `sadiler`: \"1588'de Ahmed el-Mansûr'un Osmanlıya vergi göndermemesi; ardından elçilik heyeti gönderilmesi\"" },

{ t:"1591-04-13", b:"Tondibi zaferiyle Songhay İmparatorluğu yıkıldı, Sudan fethedildi", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"Timbuktu",
  etiket:["askeri","toprak-kazanc"],
  d:"Ahmed el-Mansûr'un ateşli silahlarla donanmış ordusu Tondibi'de Batı Afrika'nın en büyük gücü Songhay İmparatorluğu'nu yıktı ve Timbuktu dahil Sudan bölgesini fethetti; trans-Sahra altın ve köle ticaretinin denetimi el değiştirdi, Songhay'ın çöküşü bölgenin siyasi haritasını yeniden çizdi.",
  kaynak:"TDV `sadiler`: \"999/1591'de Tondibi savaşıyla Songay Sultanlığının yıkılması; Sudan'ın fethi\"" },

{ t:"1591-06-01", b:"Sudan seferinden ganimet: 20.000 köle, altın, fildişi", tur:"ekonomi", onem:3, dunya:2, kapsam:"dis", yer_id:"Timbuktu",
  etiket:["iktisadi"],
  d:"Tondibi zaferinin ardından Sâdî ordusu yaklaşık 20.000 köle ile büyük miktarda altın ve fildişi ganimeti Fas'a taşıdı; Sâdî hazinesi Sudan altınıyla dolduğu için Ahmed el-Mansûr'a 'ez-Zeheb' (Altınlı) lakabı yakıştırıldı.",
  kaynak:"TDV `sadiler`: \"Sudan seferi sonrası 20.000 civarında köle, bol altın ve fildişi elde edilmesi\"" },

{ t:"1602-01-01", b:"Veliahtın isyanı bastırıldı", tur:"isyan", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["isyan"],
  d:"Veliaht Muhammed eş-Şeyh el-Me'mûn'un isyanı bastırılıp kendisi hapsedildi; hanedanın taht kavgaları döneminin habercisiydi.",
  kaynak:"TDV `sadiler`: \"1011/1602'de veliaht Muhammed eş-Şeyh el-Me'mûn'un isyanının bastırılması; hapsedilmesi\"" },

{ t:"1603-01-01", b:"Ahmed el-Mansûr vebadan öldü, taht kavgaları başladı", tur:"olum", onem:5, dunya:2, kapsam:"ic", yer_id:"Merakeş",
  etiket:["hanedan"],
  d:"Sâdîlerin en güçlü hükümdarı Ahmed el-Mansûr vebadan öldü; ardından yarım asra yakın sürecek, ülkeyi paramparça edecek bir taht kavgaları dönemi başladı.",
  kaynak:"TDV `sadiler`: \"1012/1603'te Ahmed el-Mansûr'un vebadan ölümü\"" },

{ t:"1610-01-01", b:"Ülke Fas ve Merakeş emirlikleri olarak fiilen ikiye bölündü", tur:"bolunme", onem:5, dunya:2, kapsam:"ic", yer_id:"",
  etiket:["hanedan","toprak-kayip"],
  d:"On yıla yakın süren taht kavgalarının ardından ülke kuzeyde Fas, güneyde Merakeş merkezli iki ayrı emirliğe bölündü; bu bölünme hanedanın 1659'daki sonuna kadar sürdü.",
  kaynak:"TDV `sadiler`: \"Ülkenin Merakeş (güney) ve Fas (kuzey) emirlikleri olarak bölünmesi\" (1019/1610 dolayları)", kapsam_genis:true },

{ t:"1659-01-01", b:"Ahmed el-Abbas öldürülerek Sâdî hanedanı sona erdi", tur:"son", onem:5, dunya:3, kapsam:"ic", yer_id:"Merakeş",
  etiket:["hanedan"],
  d:"Son Sâdî hükümdarı Ahmed el-Abbas, Şebbâne liderleri tarafından öldürüldü; bir buçuk asırlık hanedan sona erdi. İktidar, Sûs'tan yükselen yeni bir şerif ailesine, Alevîlere (Filalîlere) geçecekti — bkz. [[fas]].",
  kaynak:"TDV `sadiler`: \"1069/1659'da Ahmed el-Abbas'ın Şebbâne liderleri tarafından öldürülmesi; Sâdîler hânedanının sona ermesi\"" },

{ t:"1580-01-01", b:"Osmanlı ordu teşkilâtı örnek alınarak reform", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"",
  etiket:["reform"],
  d:"Abdülmelik ve Ahmed el-Mansûr döneminde Osmanlı'da tanınan idari deneyim örnek alınarak devlet teşkilâtlanması ve ordu (özellikle ateşli silah birlikleri) reformları yapıldı — ironik biçimde Osmanlı'ya karşı bağımsızlığını koruyan bir devlet, gücünü kısmen Osmanlı modelinden aldı. ⚠️ TDV yalnız \"Abdülmelik ve Ahmed el-Mansûr devrinde\" diyor, kesin yıl vermiyor; saltanat başlangıcı (1578) yaklaşık tarih olarak kullanıldı.",
  kaynak:"TDV `sadiler`: \"Abdülmelik ve Ahmed el-Mansûr devrinde Osmanlı sistemi örnek alınarak devlet teşkilâtlanması ve ordu reformları\"", kapsam_genis:true },

{ t:"1593-01-01", b:"Kasrü'l-bedî' Sarayı inşa edildi", tur:"kultur", onem:3, dunya:2, kapsam:"ic", yer_id:"Merakeş",
  etiket:["mimari"],
  d:"Ahmed el-Mansûr, Tondibi zaferinin Sudan altınıyla finanse edilen görkemli Kasrü'l-bedî' Sarayı'nı Merakeş'te inşa ettirdi; saray, dönemin İber ve Osmanlı saraylarıyla rekabet eden bir güç gösterisiydi. ⚠️ TDV yalnız \"Ahmed el-Mansûr devrinde\" diyor; saltanatının ortası (1593) yaklaşık tarih olarak kullanıldı, gün doğrulanmadı.",
  kaynak:"TDV `sadiler`: \"Ahmed el-Mansûr devrinde Kasrü'l-bedî' Sarayı'nın Merakeş'te inşası\"" },

{ t:"1595-01-01", b:"Fransa, İngiltere, Hollanda ile ticarî ilişkiler kuruldu", tur:"ekonomi", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["iktisadi","diplomasi"],
  d:"Ahmed el-Mansûr döneminde Sâdîler, şeker ve Sudan altını ticareti üzerinden Fransa, İngiltere ve Hollanda ile doğrudan ticarî ilişkiler kurdu — Fas'ın Avrupa devletleriyle Osmanlı arabuluculuğu olmaksızın kurduğu ilk düzenli ilişkiler. ⚠️ TDV kesin yıl vermiyor, saltanatının sonu yaklaşık tarih olarak kullanıldı.",
  kaynak:"TDV `sadiler`: \"Ahmed el-Mansûr devrinde Fransa, İngiltere, Hollanda gibi Avrupa devletleriyle ticarî ilişkiler kurulması\"", kapsam_genis:true },

// ══════════════════════════════════════════════════════════════════
// III. HAFSÎLER (TUNUS, 1229-1574)
// ══════════════════════════════════════════════════════════════════

{ t:"1229-01-01", b:"Ebû Zekeriyyâ Tunus'u fethetti, Hafsî hanedanı kuruldu", tur:"kurulus", onem:5, dunya:2, kapsam:"ic", yer_id:"Tunus",
  etiket:["hanedan","toprak-kazanc"],
  d:"Kābis valisi Ebû Zekeriyyâ, Muvahhidler'den bağımsızlaşarak Tunus üzerine yürüdü ve şehre girip bütün İfrîkıye'ye hâkim oldu; Hafsî hanedanının kuruluşu.",
  kaynak:"TDV `tunus`: Ebû Zekeriyyâ el-Hafsî'nin Tunus'u fethi ve Hafsî hânedanının kurulması" },

{ t:"1249-01-01", b:"Şemmâiyye Medresesi inşa edildi", tur:"bilim", onem:2, dunya:1, kapsam:"ic", yer_id:"Tunus",
  etiket:["bilim","mimari"],
  d:"Hafsîler, Tunus'ta sonraki medrese mimarisine örnek teşkil edecek Şemmâiyye Medresesi'ni inşa ettirdi.",
  kaynak:"TDV `tunus`: Şemmâiyye Medresesinin inşası (1249)" },

{ t:"1270-07-18", b:"Sekizinci Haçlı Seferi püskürtüldü", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"Tunus",
  etiket:["askeri"],
  d:"Fransa Kralı IX. Louis'nin başında bulunduğu büyük bir Haçlı ordusu Tunus sahillerine saldırdı; veba salgını kralın ve askerlerinin büyük bölümünü telef etti, sefer Tunus surlarına ulaşamadan dağıldı. Ortaçağ Haçlı seferleri döneminin son büyük deniz aşırı seferlerinden biriydi.",
  kaynak:"TDV `tunus`: \"büyük bir Haçlı ordusunun başında Tunus sahillerine saldırdı… veba salgını yüzünden kral ve askerlerin büyük bölümü telef oldu\" (1270)" },

{ t:"1287-01-01", b:"Mehdiye Pizalı-Cenevizli korsanlarca yağmalandı", tur:"savas", onem:2, dunya:2, kapsam:"dis", yer_id:"Mehdiye",
  etiket:["askeri"],
  d:"İtalyan korsan filoları Mehdiye'yi baskınla tahrip etti; Hafsî sahillerinin Akdeniz korsanlığına açık kırılganlığının erken bir örneği.",
  kaynak:"TDV `tunus`: \"Pizalı ve Cenevizli korsanlar Mehdiye'yi tahrip etti\" (1287)" },

{ t:"1334-01-01", b:"Cerbe adası geri alındı", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"dis", yer_id:"Cerbe (Djerba)",
  etiket:["askeri","toprak-kazanc"],
  d:"1284'te Hıristiyanların eline geçen Cerbe adası Hafsîler tarafından yeniden fethedildi.",
  kaynak:"TDV `tunus`: \"1284'te hıristiyanların eline geçen Cerbe adasının Hafsîler tarafından tekrar fethilmesi\" (1334)" },

{ t:"1370-01-01", b:"I. Ebü'l-Abbas Ahmed el-Müstansır Hafsîlere yeniden itibar kazandırdı", tur:"hanedan", onem:4, dunya:1, kapsam:"ic", yer_id:"Tunus",
  etiket:["hanedan"],
  d:"I. Ebü'l-Abbas Ahmed el-Müstansır'ın uzun hükümdarlığı (1370-1394) Hafsîler devletine yeniden itibar kazandırdı; hanedanın ikinci parlak dönemi.",
  kaynak:"TDV `tunus`: \"'yeniden itibar kazandırdı'\" (I. Ebü'l-Abbas Ahmed el-Müstansır'ın hükümdarlığı, 1370-1394)" },

{ t:"1437-01-01", b:"Müntasıriyye Medresesi inşa edildi", tur:"bilim", onem:2, dunya:1, kapsam:"ic", yer_id:"Tunus",
  etiket:["bilim","mimari"],
  d:"Hafsîlerin ikinci parlak döneminde Tunus'ta Müntasıriyye Medresesi inşa edildi.",
  kaynak:"TDV `tunus`: Müntasıriyye Medresesinin inşası (1437)" },

{ t:"1488-01-01", b:"Ebû Amr Osman'ın ölümü ve ikinci parlak dönemin sonu", tur:"olum", onem:4, dunya:1, kapsam:"ic", yer_id:"Tunus",
  etiket:["hanedan"],
  d:"Sultan Ebû Amr Osman'ın ölümünün ardından devlet karışıklığa girdi ve Avrupa devletlerinin sahil saldırıları yoğunlaştı — hanedanın çöküş sürecinin başlangıcı.",
  kaynak:"TDV `tunus`: \"Sultan ölümünün ardından devlet karışıklığa girdi; Avrupa devletlerinin saldırıları yoğunlaştı\" (1488)" },

{ t:"1534-08-16", b:"Barbaros Hayreddin Paşa Tunus'u fethetti", tur:"savas", onem:5, dunya:4, kapsam:"dis", yer_id:"Tunus",
  etiket:["askeri","toprak-kayip"],
  d:"Osmanlı kaptan-ı deryası Barbaros Hayreddin Paşa, Tunus şehri ile Halkulvâdî (La Goletta) kalesini ele geçirdi; Hafsî hanedanı fiilen bağımlı hâle geldi. Osmanlı-İspanya Akdeniz rekabetinin dönüm noktalarından biri.",
  kaynak:"TDV `tunus`: Barbaros Hayreddin Paşa'nın Tunus ve Halkulvâdî'nin fethi (1534)" },

{ t:"1535-07-21", b:"V. Karl (Şarlken) donanmasıyla Tunus'u geri aldı", tur:"toprak-kayip", onem:5, dunya:4, kapsam:"dis", yer_id:"Tunus",
  etiket:["askeri","toprak-kazanc"],
  d:"Kutsal Roma-Cermen İmparatoru V. Karl'ın büyük donanması Tunus'u geri aldı ve İspanyol askerlerinin şehre yerleşmesini sağladı; Hafsî hanedanı artık bir İspanyol koruması altındaydı. Habsburg-Osmanlı Akdeniz rekabetinin doğrudan bir cephesiydi.",
  kaynak:"TDV `tunus`: \"İspanyol askerlerinin yerleşmesini uygun buldu\" (V. Karl'ın donanmasıyla Tunus'un geri alınması, 1535)" },

{ t:"1574-08-24", b:"Sinan Paşa ve Kılıç Ali Paşa Tunus'u kesin olarak fethetti", tur:"son", onem:5, dunya:4, kapsam:"dis", yer_id:"Tunus",
  etiket:["askeri","toprak-kazanc"],
  d:"Osmanlı vezirleri Koca Sinan Paşa ve Kılıç Ali Paşa, altı günlük kuşatmanın ardından 12 Eylül 1574'te Tunus'u kesin olarak fethetti; Halkulvâdî (Goletta) kalesi otuz üç gün direndikten sonra 24 Ağustos 1574'te düştü. Hafsî hanedanı sona erdi, Tunus doğrudan Osmanlı eyaleti oldu.",
  kaynak:"TDV `tunus`: \"altı günlük bir muhasaranın ardından 12 Eylül 1574'te Tunus'u geri aldı… Halkulvâdî Kalesi de otuz üç gün direndiyse de… 24 Ağustos 1574 ele geçirildi\"" },

// ══════════════════════════════════════════════════════════════════
// IV. ZEYYÂNÎLER (TİLİMSAN/ABDÜLVÂDÎLER, 1236-1554)
// ══════════════════════════════════════════════════════════════════

{ t:"1235-01-01", b:"Yağmurasen b. Zeyyân Tilimsan'da hanedanını kurdu", tur:"kurulus", onem:5, dunya:1, kapsam:"ic", yer_id:"Tilimsan",
  etiket:["hanedan"],
  d:"Yağmurasen b. Zeyyân, Abdülvâdî Berberîlerinin reisliğinde Tilimsan merkezli hanedanını kurdu; Merînî ve Hafsî hanedanları arasına sıkışmış üçüncü büyük Mağrib devleti doğdu.",
  kaynak:"TDV `tilimsan`: Zeyyânîler'in kuruluşu (Yağmurasen b. Zeyyân, 632/1235)" },

{ t:"1299-01-01", b:"Merînî kuşatması — şehir 120.000 can pahasına düşmedi", tur:"savas", onem:5, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri","kusatma"],
  d:"Merînîlerin sekiz yıl üç ay süren kuşatması Tilimsan'ı düşüremedi; kaynağa göre kuşatma boyunca 120.000 Tilimsanlı hayatını kaybetti — Mağrib tarihinin en uzun ve en kanlı kuşatmalarından biri.",
  kaynak:"TDV `tilimsan`: \"120.000 Tilimsânlı'nın ölmesi pahasına şehir teslim edilmedi\" (1299-1307) · bkz. [[merini]]" },

{ t:"1307-01-01", b:"Kuşatma sonrası yeniden imar", tur:"idari", onem:3, dunya:1, kapsam:"ic", yer_id:"Tilimsan",
  etiket:["reform"],
  d:"Sekiz yıllık kuşatmanın kaldırılmasının ardından I. Ebû Zeyyân Muhammed, şehrin yıkıntılarını tamir ettirdi.",
  kaynak:"TDV `tilimsan`: \"I. Ebû Zeyyân Muhammed yıkıntıları tamir etti\" (1304-1308)" },

{ t:"1318-01-01", b:"I. Ebû Taşfin döneminde mimari gelişme", tur:"kultur", onem:3, dunya:1, kapsam:"ic", yer_id:"Tilimsan",
  etiket:["mimari"],
  d:"I. Ebû Taşfin'in hükümdarlığı (1318-1337) döneminde beş saray inşa edildi; Zeyyânî mimarisinin altın çağı.",
  kaynak:"TDV `tilimsan`: \"I. Ebû Tâşfîn Dönemi — beş saray ve mimari gelişme\" (1318-1337)" },

{ t:"1337-01-01", b:"Merînîler Tilimsan'ı ele geçirdi", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["toprak-kayip"],
  d:"Merînî hükümdarı Ebü'l-Hasan Ali, Tilimsan'ı ele geçirerek Abdülvâdî hâkimiyetine on yıl sürecek bir ara verdi. bkz. [[merini]] — aynı olay, dunya değeri o dosyayla tutarlı.",
  kaynak:"TDV `tilimsan`: Merînî fethi (1337) · bkz. TDV `meriniler`" },

{ t:"1348-01-01", b:"Abdülvâdîler Tilimsan'ı geri aldı", tur:"toprak-kazanc", onem:4, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri","toprak-kazanc"],
  d:"On yıllık Merînî ilhakının ardından Abdülvâdîler Tilimsan'ı geri aldı. bkz. [[merini]].",
  kaynak:"TDV `tilimsan` · TDV `meriniler`: \"749/1348'de Abdülvâdîler Tilimsân'ı geri aldı\"" },

{ t:"1358-01-01", b:"Merînîler Tilimsan'ı ikinci kez aldı", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["toprak-kayip"],
  d:"Merînî hükümdarı Ebû İnân, Tilimsan'ı ikinci kez ele geçirerek Abdülvâdîlerin ikinci hükümranlık dönemine son verdi. bkz. [[merini]].",
  kaynak:"TDV `tilimsan` · TDV `meriniler`: \"759/1358'de Ebû İnân Tilimsân'a girdi\"" },

{ t:"1360-01-01", b:"Merînî harekâtı başarısız kaldı, Abdülvâdîler kalıcı bağımsızlığını kazandı", tur:"toprak-kazanc", onem:5, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri","toprak-kazanc"],
  d:"Ebû İnân'ın ölümünden sonra Merînîlerin Mağrib-i Evsat'taki (Orta Mağrib) yeni harekâtından sonuç alınamadı; Abdülvâdîler bu kez kalıcı olarak bağımsızlığını kazandı ve hanedan bir asır daha (1554'e kadar) sürecekti. bkz. [[merini]].",
  kaynak:"TDV `tilimsan` · TDV `meriniler`: \"761/1360'ta Mağrib-i Evsat'ta harekâttan sonuç alınamadı; Abdülvâdîler bağımsız oldu\"" },

{ t:"1430-01-01", b:"İç kale surları yeniden yaptırıldı", tur:"kultur", onem:2, dunya:1, kapsam:"ic", yer_id:"Tilimsan",
  etiket:["mimari"],
  d:"Ebü'l-Abbas Ahmed, Tilimsan'ın iç kale surlarını yeniden yaptırdı.",
  kaynak:"TDV `tilimsan`: Surların onarımı (1430-1431)" },

{ t:"1511-01-01", b:"Şehir İspanyollar tarafından ele geçirildi", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri","toprak-kayip"],
  d:"İspanya, Reconquista sonrası Kuzey Afrika kıyılarına yayılma siyasetinin bir parçası olarak Tilimsan'ı ele geçirdi; Zeyyânî hanedanı fiilen İspanyol vesayetine girdi.",
  kaynak:"TDV `tilimsan`: İspanyol işgali (1511)" },

{ t:"1517-01-01", b:"Oruç Reis şehri İspanyol işgalinden kurtardı", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri"],
  d:"Osmanlı hizmetindeki denizci Oruç Reis (Barbaros'un ağabeyi), Tilimsan'ı İspanyol işgalinden kurtardı — Osmanlı korsan-denizcilerinin Orta Mağrib'e ilk büyük müdahalesi ve Cezayir Ocaklığı'nın doğuşuna giden sürecin bir parçası.",
  kaynak:"TDV `tilimsan`: \"923'te (1517) şehri İspanyol işgalinden kurtardı\"" },

{ t:"1529-01-01", b:"Hızır Reis (Barbaros) şehri zaptedip yerel hanedana bıraktı", tur:"savas", onem:3, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri"],
  d:"Barbaros Hayreddin Paşa (Hızır Reis) şehri zaptedip II. Ebû Muhammed Abdullah'a bıraktı; Zeyyânîler artık fiilen Osmanlı-İspanya çekişmesinin bir tampon bölgesiydi.",
  kaynak:"TDV `tilimsan`: Hızır Reis'in müdahalesi (1529)" },

{ t:"1541-01-01", b:"Taht kavgası, İspanya müdahale etti", tur:"isyan", onem:3, dunya:2, kapsam:"ic", yer_id:"Tilimsan",
  etiket:["isyan"],
  d:"Ebû Abdullah ile Ebû Ahmed arasındaki taht kavgasına İspanya müdahale etti; Zeyyânî içindeki hizipler artık dışarıdan yönlendiriliyordu.",
  kaynak:"TDV `tilimsan`: Taht kavgası (1541)" },

{ t:"1543-01-01", b:"İspanyollar şehri yirmi gün yağmaladı", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri"],
  d:"İspanyol kuvvetleri Tilimsan'ı yirmi gün boyunca yağmaladı ve halka büyük işkenceler uyguladı — hanedanın son on yılının en yıkıcı olayı.",
  kaynak:"TDV `tilimsan`: \"Yirmi gün boyunca şehri yağmalayan İspanyollar halka büyük işkenceler uyguladılar\" (1543)" },

{ t:"1554-01-01", b:"Sâlih Reis Tilimsan'ı kesin olarak fethetti, hanedan sona erdi", tur:"son", onem:5, dunya:3, kapsam:"dis", yer_id:"Tilimsan",
  etiket:["askeri","hanedan"],
  d:"Osmanlı beylerbeyi Sâlih Reis, Tilimsan'ı kesin biçimde ele geçirerek üç asırlık Zeyyânî hanedanına son verdi; şehir Cezayir Ocaklığı'na bağlandı.",
  kaynak:"TDV `tilimsan`: \"Sâlih Reis kumandasında kesin biçimde ele geçirildi\" (1553)" },

// ══════════════════════════════════════════════════════════════════
// V. TRABLUSGARP OCAĞI (KARAMANLI HANEDANI, 1551-1911)
// ══════════════════════════════════════════════════════════════════

{ t:"1551-08-15", b:"Sinan Paşa'nın donanması Trablus'u fethetti", tur:"kurulus", onem:5, dunya:3, kapsam:"dis", yer_id:"Trablus",
  etiket:["askeri","toprak-kazanc"],
  d:"Kaptan-ı derya Sinan Paşa kumandasındaki Osmanlı donanması, Malta Şövalyeleri'nin elindeki Trablus'u ele geçirdi; sefere katılan Turgut Reis, fetih sonrası bölgenin ilk yerel gücü oldu. Kuzey Afrika'daki üçüncü ve en doğudaki Osmanlı ocağının kuruluşu.",
  kaynak:"TDV `trablusgarp`: \"Kaptanıderyâ Sinan Paşa kumandasındaki Osmanlı donanması şehri ele geçirdi (12 Şâban 958/15 Ağustos 1551)\" · devletler.js'teki mevcut kayıt Turgut Reis'i öne çıkarıyordu, TDV'nin asıl kumandanı (Sinan Paşa) ile birlikte verildi" },

{ t:"1556-01-01", b:"Turgut Reis beylerbeyi atandı", tur:"idari", onem:4, dunya:1, kapsam:"ic", yer_id:"Trablus",
  etiket:["reform"],
  d:"Turgut Reis, Trablusgarp beylerbeyi olarak atandı; dokuz yıl sürecek yönetimi boyunca Osmanlı hâkimiyetini Fizan'a kadar genişletti.",
  kaynak:"TDV `trablusgarp`: \"Turgut Reis beylerbeyilikle atandı; dokuz yıllık yönetim dönemi başladı (Fizan'a kadar)\" (1556)" },

{ t:"1711-01-01", b:"Ahmed Karamanlı özerk hanedanlığını kurdu", tur:"bolunme", onem:5, dunya:2, kapsam:"ic", yer_id:"Trablus",
  etiket:["hanedan"],
  d:"Ahmed Karamanlı, merkezî Osmanlı idaresinden fiilen bağımsız bir hanedan kurarak Trablusgarp'ı yarı bağımsız bir eyalete dönüştürdü; hanedan 1835'e kadar sürecekti.",
  kaynak:"TDV `trablusgarp`: \"Yarı bağımsız eyalet konumuna geçiş; Karamanlı ailesinin yönetimi başladı\" (1711)" },

{ t:"1801-05-14", b:"ABD ile Birinci Barbary Savaşı başladı", tur:"savas", onem:4, dunya:4, kapsam:"dis", yer_id:"Trablus",
  etiket:["askeri"],
  d:"Yusuf Karamanlı'nın ticaret gemilerinden haraç talebini reddeden genç Amerika Birleşik Devletleri ile Trablusgarp arasında çatışmalar başladı; ABD donanması limanı abluka altına aldı, gemiler karşılıklı el değiştirdi. ABD'nin kıtası dışında verdiği ilk savaş olarak Amerikan deniz tarihinde dönüm noktasıdır.",
  kaynak:"TDV `trablusgarp`: \"Ticaret gemilerinden vergi alınması nedeniyle çatışmalar; gemi kaçırılması ve liman ablukası\" (1796-1805)" },

{ t:"1805-06-10", b:"Barbary Savaşı Trablus lehine sona erdi", tur:"antlasma", onem:3, dunya:3, kapsam:"dis", yer_id:"Trablus",
  etiket:["diplomasi"],
  d:"ABD ile Trablusgarp arasındaki savaş bir antlaşmayla sona erdi; Yusuf Karamanlı bağımsız bir güç olarak Batı'yla doğrudan savaşıp masaya oturabildiğini göstermiş oldu.",
  kaynak:"TDV `trablusgarp`: Barbary savaşlarının 1805'te sona ermesi — gün TDV maddesinde verilmiyor, ABD tarihyazımından (Trablusgarp Antlaşması, 10 Haziran 1805) alındı, ayrıca doğrulanmalı" },

{ t:"1835-01-01", b:"Osmanlı doğrudan idareyi yeniden tesis etti", tur:"toprak-kazanc", onem:5, dunya:2, kapsam:"ic", yer_id:"Trablus",
  etiket:["reform"],
  d:"Osmanlı, Karamanlı hanedanına son vererek Trablusgarp'ta doğrudan idareyi yeniden kurdu; vilayette Tanzimat ve yeni teşkilat (teşkîlât-ı cedîde) uygulamaya konuldu.",
  kaynak:"TDV `trablusgarp`: \"Tekrar merkeze bağlanan Trablusgarp'ta Tanzimat ve teşkîlât-ı cedîde\" (1835)" },

{ t:"1911-09-29", b:"İtalya Osmanlı'ya savaş ilan etti", tur:"savas", onem:5, dunya:3, kapsam:"dis", yer_id:"Trablus",
  etiket:["askeri"],
  d:"İtalya, Trablusgarp ve Bingazi'yi ilhak amacıyla Osmanlı Devleti'ne savaş ilan etti; Trablusgarp Savaşı başladı.",
  kaynak:"TDV `trablusgarp-savasi`: savaş ilânı (29 Eylül 1911)" },

{ t:"1911-10-09", b:"Trablus şehri İtalyan işgaline düştü", tur:"toprak-kayip", onem:5, dunya:3, kapsam:"dis", yer_id:"Trablus",
  etiket:["askeri","toprak-kayip"],
  d:"İtalyan ablukasının ardından Trablus şehri teslim oldu; kısa sürede Tobruk (8 Ekim), Derne (16 Ekim) ve Bingazi (21 Ekim) de işgal edildi.",
  kaynak:"TDV `trablusgarp-savasi`: \"9 Ekim 1911 Trablusgarp şehrinin teslimi\" · \"8 Ekim 1911 Tobruk işgali\" · \"16 Ekim 1911 Derne işgali\" · \"21 Ekim 1911 Bingazi işgali\"" },

{ t:"1911-10-16", b:"Derne İtalyan işgaline girdi", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Derne",
  etiket:["askeri","toprak-kayip"],
  d:"İtalyan kuvvetleri Derne'yi işgal etti; şehir kısa süre sonra Enver Bey'in örgütlediği yerel direnişin cephe hatlarından biri olacaktı.",
  kaynak:"TDV `trablusgarp-savasi`: Derne işgali (16 Ekim 1911)" },

{ t:"1911-10-21", b:"Bingazi İtalyan işgaline girdi", tur:"toprak-kayip", onem:3, dunya:2, kapsam:"dis", yer_id:"Bingazi",
  etiket:["askeri","toprak-kayip"],
  d:"İtalyan kuvvetleri Bingazi'yi işgal ederek Trablusgarp vilayetinin ikinci büyük limanını da ele geçirdi.",
  kaynak:"TDV `trablusgarp-savasi`: Bingazi işgali (21 Ekim 1911)" },

{ t:"1911-12-01", b:"Enver Bey direniş karargâhını üstlendi", tur:"savas", onem:4, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["askeri"],
  d:"Gönüllü subay olarak Kuzey Afrika'ya geçen Enver Bey (sonraki Enver Paşa), yerel Arap ve Berberî direnişçilerle birlikte Bingazi-Derne hattında karargâh kurup düzenli bir direniş örgütledi.",
  kaynak:"TDV `trablusgarp-savasi`: \"1 Aralık 1911 Enver Bey'in karargâhı üstlenmesi\"", kapsam_genis:true },

{ t:"1912-10-18", b:"Uşi Antlaşması — Osmanlı hâkimiyeti resmen sona erdi", tur:"son", onem:5, dunya:3, kapsam:"dis", yer_id:"Trablus",
  etiket:["diplomasi","toprak-kayip"],
  d:"Uşi (Ouchy) Antlaşması ile Osmanlı Devleti Trablusgarp ve Bingazi üzerindeki egemenlik hakkından fiilen çekildi; 361 yıllık Osmanlı hâkimiyeti (Sinan Paşa'nın 1551 fethinden bu yana) sona erdi. Antlaşma aynı zamanda Balkan Savaşı arifesinde Osmanlı'nın Avrupa'daki konumunu da zayıflattı.",
  kaynak:"TDV `trablusgarp-savasi`: \"18 Ekim 1912 Uşi Barış Antlaşması\"" },

];

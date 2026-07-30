// ============================================================================
// DERİNLEŞTİRME PARTİSİ 11 — hatalar 13, ANADOLU BLOĞU
// ============================================================================
// Oturum 13. Kullanıcının hatalar 13'te bildirdiği yedi maddenin kronoloji
// karşılığı. Ölçüm ve düzeltme listesi: `oturumlar/OTURUM-13-ANADOLU.md`.
//
// ---------------------------------------------------------------------------
// 🔴 index.html'e SATIR EKLENMELİ — bu dosya bugün tarayıcıya YÜKLENMİYOR
// ---------------------------------------------------------------------------
// `OGRENILENLER.md §15`: `olaylar_ek9.js` tam bu sebeple 13 madde boyunca
// görünmez kaldı — `denetle.py` `data/olaylar*.js` desenini okuyup SAYIYOR ve
// TEMİZ diyor, tarayıcı ise dosyayı hiç yüklemiyor. index.html Oturum 13'ün
// dosyası değildir; satırı sahibi ekleyecek:
//     <script src="data/olaylar_ek11.js?v=rNN"></script>
// (olaylar_ek9.js satırının hemen altına; ?v damgası da yükseltilmeli.)
//
// ---------------------------------------------------------------------------
// TARİH HASSASİYETİ — üç maddenin de günü kaynakta YOK
// ---------------------------------------------------------------------------
// Üçü de yıl hassasiyetinde; `CLAUDE.md §4` gereği `YYYY-01-01` yazıldı ve
// gerçek belirsizlik `gun` alanında duruyor. Uydurma gün yazılmadı.
//   1401 — TDV `bagdat` yalnız "803 (1401)" diyor, ay/gün vermiyor.
//   1422 — TDV `aydinogullari` yalnız "(1422)" diyor.
//   1426 — TDV `aydinogullari` "829 (1425-26)", `cuneyd-bey` "1426" diyor.
//          İki madde arasındaki farkın kendisi kayda geçirildi.
//
// ---------------------------------------------------------------------------
// KAYNAK — kullanılan üç slug da `<title>` ile doğrulandı (2026-07-30)
// ---------------------------------------------------------------------------
//   bagdat          → "BAĞDAT - TDV İslâm Ansiklopedisi"          ✓
//   aydinogullari   → "AYDINOĞULLARI - TDV İslâm Ansiklopedisi"   ✓
//   cuneyd-bey      → "CÜNEYD BEY - TDV İslâm Ansiklopedisi"      ✓
// Ölü olduğu ölçülen ve KULLANILMAYAN: `duzmece-mustafa` (arama sayfası).
// Doğrusu `mustafa-celebi` ✓ CANLI.
// ============================================================================

window.OLAYLAR_EK11 = [

// ---------------------------------------------------------------------------
// A) hatalar 13 md.4 — Timur'un Bağdat'ı ikinci işgali
// ---------------------------------------------------------------------------
// Kronolojide 1393-08-29 maddesi zaten vardı (olaylar_ek5.js); 1401'deki
// ikinci ve asıl yıkıcı işgalin maddesi YOKTU.
// ⚠️ Bu madde tek başına haritayı değiştirmez: `yerlesimler.js`'te Bağdat
// 1281-1508 arası TEK bir `iran` dönemi taşıyor ve bu blok Celâyirli,
// Timurlu, Karakoyunlu ve Akkoyunlu devirlerinin dördünü birden siliyor.
// Ölçüm ve önerilen zincir: OTURUM-13-ANADOLU.md §2.

{ t:"1401-01-01", k:"savas", etiket:["yikim"],
  b:"Timur Bağdat'ı ikinci defa işgal etti — şehrin Abbâsî mahalleleri yıkıldı",
  gun:"1401 (803 h.; ay ve gün kaynakta yok)", yer:"Bağdat, Irâk-ı Arab",
  kisiler:"Timur, Ahmed Celâyir",
  d:"Timur Bağdat'ı sekiz yıl arayla iki defa aldı. 1393'teki ilk işgalde şehir fazla zarar görmemişti; 1401'deki ikincisi ise Bağdat'ın kültür hayatına indirilen ikinci ağır darbe sayılır — halk kılıçtan geçirildi, Abbâsî devrinden kalma mahalle ve binaların çoğu tahrip edildi. Celâyirli hükümdarı Ahmed 1405'te şehre dönüp yıkılan surları ve çarşıları onarmaya çalıştıysa da vakit bulamadı; Bağdat 1410'da Karakoyunlu Türkmenleri'nin eline geçti. Bu iki işgal, Ankara Savaşı'na giden yolda Timur'un Osmanlı ve Memlûk sınırlarına ne kadar yaklaştığını gösteren en somut adımlardan biridir.",
  kaynak:"bagdat" },

// ---------------------------------------------------------------------------
// B) hatalar 13 md.9-10 — Aydınoğulları'nın son müstakil devri
// ---------------------------------------------------------------------------
// Kullanıcı haritada Aydınoğulları'nın Düzmece Mustafa ayaklanması sırasında
// Osmanlı idaresinden çıktığını gördü ve "eğer gerçekse kronolojide görünmesi
// lazım" dedi. Ölçüm doğruladı: `yerlesimler.js` sekiz kayıtta `aydin`
// dönemini geri açıyor, ama o kırılmayı açıklayan tek madde "Düzmece Mustafa
// ayaklanması" ve içinde Aydınoğulları HİÇ geçmiyor. İki madde o boşluğu
// kapatır.

{ t:"1422-01-01", k:"kayip", etiket:["toprak-kaybi","siyaset"],
  b:"Cüneyd Bey Aydın-ili'nin başına döndü — Aydınoğulları yeniden müstakil",
  gun:"1422 (ay ve gün kaynakta yok)", yer:"İzmir, Ayasuluk, Tire, Birgi — Aydın-ili",
  kisiler:"Aydınoğlu Cüneyd Bey, II. Murad, Mustafa Çelebi (Düzmece Mustafa)",
  d:"Çelebi Mehmed 1414-15'te İzmir'i alıp Cüneyd Bey'i Niğbolu sancak beyliğine göndererek Aydın-ili'ni Osmanlı idaresine bağlamıştı. Cüneyd, Çelebi Mehmed'in ölümünden sonra Bizans'ın taht iddiacısı olarak öne sürdüğü Mustafa Çelebi'nin yanında yeniden sahneye çıktı ve ona vezirlik dahi yaptı. II. Murad, eski beyliğini geri vereceği vaadiyle onu bu ittifaktan ayırdı; Cüneyd de İzmir'e dönüp Ayasuluk'u ele geçirdi ve Aydınoğlu Mustafa Bey'i öldürerek beyliğin başına geçti. Böylece Aydın-ili, Düzmece Mustafa buhranının içinden Osmanlı idaresinden çıkmış olarak doğdu. Yılın ayı ve günü kaynakta bulunmadığı için tarih yıl hassasiyetinde yazılmıştır.",
  kaynak:"aydinogullari" },

{ t:"1426-01-01", k:"fetih", etiket:["toprak-kazanc","siyaset"],
  b:"Cüneyd Bey ve ailesinin idamı — Aydınoğulları Beyliği'nin sonu",
  gun:"1426 (829 h.; TDV iki maddede 1425-26 ve 1426 diyor, gün yok)",
  yer:"İpsili (Sisam karşısı), Aydın-ili", kisiler:"Aydınoğlu Cüneyd Bey, II. Murad, Anadolu Beylerbeyi Hamza Bey",
  d:"Aydın-ili'ne yeniden hâkim olan Cüneyd Bey'in Anadolu beylerini kışkırtması ve Venedik ile temas araması üzerine II. Murad, Anadolu Beylerbeyi Hamza Bey'i onun üzerine gönderdi. Oğlu Kurd Hasan Akhisar yakınlarında yenilip esir düşünce Sisam adası karşısındaki İpsili'ye çekilen Cüneyd, Karamanoğlu'ndan beklediği yardım gelmeyince ve Osmanlı ile birlikte hareket eden Cenevizliler onu denizden ablukaya alınca teslim olmak zorunda kaldı; bütün soyuyla birlikte ortadan kaldırıldı. Aydınoğulları toprakları böylece tamamıyla Osmanlı idaresine girdi. ⚠️ Tarihte TDV kendi içinde ayrışıyor: `aydinogullari` maddesi 829 (1425-26), `cuneyd-bey` maddesi 1426 veriyor; haritadaki 1425-06-01 kırılması ikisinden de erkendir (bkz. OTURUM-13-ANADOLU.md §4).",
  kaynak:"cuneyd-bey" }

];

// KORİDOR YAMASI — koridor.js'in KOORDİNATSIZ DÜĞÜMLERİ
//
// İŞÇİ oturum: KORIDOR HALKA2B · KOL D (tahta M-0638) · 16 Ağustos 2026
// 🔴 BU BİR YAMA DOSYASIDIR. `data/koridor.js` BENİM DEĞİL, DOKUNULMADI.
//    Uygulamayı sahibi ya da koordinatör yapar (`M-0539`in ruhu).
//
// ═══════════════ NİÇİN — ve iş tarifi YOLDA DEĞİŞTİ ═══════════════
//   Önce *"tek bir kenar ekle (istanbul↔uskudar)"* sanılıyordu. `js/app.js`
//   oturumu ÇİZİLEN tarafı ölçtü ve çürüttü:
//     künye tarafı  2 parça
//     ÇİZİLEN taraf 17 PARÇA  ← kullanıcının gördüğü
//   107 kenarın 43'ü çizilemiyor çünkü BİR UCU KOORDİNATSIZ, ve o 26 düğüm
//   ağın uçlarında değil EKLEM YERLERİNDE (`uskudar` iki ana kolun BAŞI).
//   ⇒ İş: 26 düğüme koordinat bulmak. Bir kenar eklemek onu KAPATMAZDI.
//
// ═══════════════ KAYNAK — hiçbir koordinat UYDURULMADI ═══════════════
//   Hepsi `girdi.yukle()`den, yani mevcut yerleşim verisinden ALINDI.
//   Tek bir yeni nokta yaratılmadı; bu bir EŞLEME yamasıdır.
//   Eşlemeler iki bağımsız ölçümün çakıştırılmasıyla kesinleşti:
//     M-0277 (bu oturum) · M-0100 (NOKTA MENZİL) · M-0558 (çakıştırma)
//   📌 Ve çakıştırma İKİ TARAFI DA düzeltti: o beni `Firecik`te, ben onu
//     `Yenişehir`de. Tek ölçüm ikisini de bulamazdı.
// =====================================================================

// 🔴 DEĞİŞKEN ADI `KORIDOR_YAMA` DEĞİL `KORIDOR_YAMA_F5C9A5` — tahta M-0671.
//   İki oturum aynı kola verilmişti ve ikisi de `window.KORIDOR_YAMA` yazdı;
//   biri DİZİ öteki NESNE. index.html ikisini de yüklerse ikincisi birincisini
//   SESSİZCE EZER ⇒ 23 düğüm + 1 kenar → ya 23 ya 1, ASLA 24.
//   Kural: data/<tur>_yama_<kısaltma>.js → window.<TUR>_YAMA_<KISALTMA>
window.KORIDOR_YAMA_F5C9A5 = [

{id:"uskudar",ad:"Üsküdar",y:"Üsküdar",lat:41.0227,lon:29.0153,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"ishakli",ad:"İshaklı",y:"İshaklı",lat:38.5439,lon:31.2447,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"ilgin",ad:"Ilgın",y:"Ilgın",lat:38.2792,lon:31.9139,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"karapinar",ad:"Karapınar",y:"Karapınar",lat:37.7156,lon:33.5514,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"ulukisla",ad:"Ulukışla",y:"Ulukışla",lat:37.5461,lon:34.4869,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"tosya",ad:"Tosya",y:"Tosya",lat:41.0161,lon:34.0397,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"harput",ad:"Harput",y:"Harput (Elazığ)",lat:38.714,lon:39.245,kaynak:"data/yerlesimler.js (girdi.yukle)",neden:"parantezli ad: veride `Harput (Elazığ)`"},
{id:"ladik",ad:"Lâdik",y:"Ladik (Amasya)",lat:40.912,lon:35.898,kaynak:"data/yerlesimler.js (girdi.yukle)",neden:"parantezli ad: veride `Ladik (Amasya)` — ⚠️ Vladikavkaz DEGIL (M-0100'un ilk surumu oraya dusmustu)"},
{id:"karahisar-i-sarki",ad:"Karahisar-ı Şarkî",y:"Karahisâr-ı Şarkî (Şebinkarahisar)",lat:40.2886,lon:38.4247,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"kelkit",ad:"Kelkit",y:"Kelkit",lat:40.1281,lon:39.4381,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"askale",ad:"Aşkale",y:"Aşkale",lat:39.9214,lon:40.6939,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"vize",ad:"Vize",y:"Vize",lat:41.5714,lon:27.7658,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"prevadi",ad:"Prevadi",y:"Prevadi (Provadia)",lat:43.1789,lon:27.4331,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"babadagi",ad:"Babadağı",y:"Babadağı (Babadag)",lat:44.8917,lon:28.7169,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"ishakci",ad:"İshakçı",y:"İshakçı (Isaccea)",lat:45.2736,lon:28.46,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"silivri",ad:"Silivri",y:"Silivri",lat:41.0791,lon:28.2493,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"yagodina",ad:"Yagodina",y:"Yagodina (Jagodina)",lat:43.9772,lon:21.2617,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"firecik",ad:"Firecik",y:"Ferecik (Feres)",lat:40.897,lon:26.172,kaynak:"data/yerlesimler.js (girdi.yukle)",neden:"M-0100 (NOKTA MENZIL) beni duzeltti: ben 'veride YOK' demistim, veride `Ferecik (Feres)` olarak VAR — tek harf farki (i/e)."},
{id:"praviste",ad:"Pravişte",y:"Praviște (Eleftheroupoli)",lat:40.9167,lon:24.25,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"lanzaka",ad:"Lanzaka",y:"Lanzaka (Lagkadas)",lat:40.75,lon:23.0667,kaynak:"data/yerlesimler_ek29.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"yenisehir",ad:"Yenişehir",y:"Yenişehir (Larissa)",lat:39.639,lon:22.418,kaynak:"data/yerlesimler.js (girdi.yukle)",neden:"veride UC aday var (Bursa · Kopruhisar · Larissa). Zincir lanzaka(#8) -> yenisehir(#9) -> izdin(#10) -> istefe(#11); Izdin=Lamia (38,90/22,43) ve Istefe=Tebai (38,32/23,32) TESELYA'da. Larissa secildi: Lanzaka'ya 135 km, Lamia'ya 84 km — zincir TUTUYOR. Bursa secilseydi 560 km ve 620 km olurdu, kol Rumeli'den Anadolu'ya sicrardi. ⚠️ M-0100 Bursa demisti; komsulari koordinat kazaninca SINANABILIR oldu ve Larissa cikti."},
{id:"izdin",ad:"İzdin",y:"İzdin (Lamia)",lat:38.9,lon:22.434,kaynak:"data/yerlesimler.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},
{id:"istefe",ad:"İstefe",y:"İstefe (Tebai)",lat:38.322,lon:23.319,kaynak:"data/yerlesimler.js (girdi.yukle)",neden:"birebir ad eşleşmesi; coğrafî sınav geçildi (koridor komşusuna ≤250 km)"},

];

// 🔴 VERİDE HİÇ OLMAYAN ÜÇ DÜĞÜM — "aranmadı" DEĞİL, "ARANDI, YOK".
//   Bunlara koordinat YAZILAMAZ; önce yerleşim kaydı gerekir (KOL A işi).
window.KORIDOR_YAMA_F5C9A5_EKSIK = [
{id:"hasan-celebi",ad:"Hasan Çelebi",durum:"veride-yok",neden:"aranan: hasan · hacilar — veride YOK"},
{id:"hasankale",ad:"Hasankale",durum:"veride-yok",neden:"aranan: hasankale · pasinler — veride YOK"},
{id:"karasu",ad:"Karasu",durum:"veride-yok",neden:"aranan: karasu · cernavoda · medgidia · bogazkoy — veride YOK. ⚠️ Veride `Karasubazar` VAR ama o KIRIM'da (45,06/34,60); koridordaki Karasu DOBRUCA'da, prevadi(#4) ile babadagi(#6) arasinda. Arada ~1000 km — ad esler, YER ESLEMEZ."},
];

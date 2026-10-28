// data/olaylar_ok104.js — OPUS HAZIR KITA 104 · parti-emrelic-0019
// ===========================================================================
// 1 Eylül 2026 · görevi veren: 1.MURAT HÜDAVENDİGAR (koordinatör), tahta M-1903
//
// AD ALANI DOSYA ADINDAN TÜRETİLDİ (`CLAUDE.md §7`):
//     data/olaylar_ok104.js  ->  window.OLAYLAR_OK104
//
// NİÇİN VAR: `data/yerlesimler_ok104.js` içindeki Leş (Alessio) kaydı
// 1393-05-01'de bir kırılma açıyor (Dukagjin -> Venedik). O gün külliyatta
// ÖLÇÜLDÜ ve YOKTU:
//     6115 madde · 1393-05-01 için ±30 gün penceresinde 0 madde  🔴
// ⇒ Nokta maddesiz inseydi `Değişmez 2s` (yabancı senkron) bir kırılma daha
//   açacaktı. `CLAUDE.md §10`: "kullanıcı 'eğer doğru ise ayrı madde ile
//   gösterilmeli, ismi ile zikredilmeli' derse bu Değişmez 2'nin ihlali
//   demektir — kırılmayı bul, maddesini yaz."
//
// ⚠️ ÖLÇÜM EVRENİ: elle dosya listesi DEĞİL — `index.html`in yüklediği 67
//    kronoloji dosyası okundu ve node ile ayrıştırıldı. (`CLAUDE.md §5`:
//    "ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da
//    doğrulamak gerekiyor.")
//
// ⚠️ BAĞLAMAYI BEN YAPMADIM — `index.html` koordinatörde ve koşu kilitli.
// ---------------------------------------------------------------------------

window.OLAYLAR_OK104 = [

// ── 1393 Mayısı · Leş'in Venedik'e bırakılması ─────────────────────────────
// KAYNAK: TDV `les` (HTTP 200, gövdesi okundu):
//   "1387'de Paul ve Lek Dukagjin adlı Arnavut asilzadeleri, Balšić
//    hânedanının kontrolünden çıkarak burayı Arnavut Dukagjin (Dukakin)
//    Prensliği'nin merkezi haline getirdiler ve 1393 MAYISINA KADAR LEŞ'İ
//    İDARE ETTİLER. Ancak OSMANLI BASKISI KARŞISINDA KALEYİ VENEDİKLİLER'E
//    BIRAKTILAR ve şehrin doğusunda yer alan dağlık bölgeye çekildiler."
// ⚠️ GÜN KESİN DEĞİL: TDV ay veriyor ("1393 Mayısı"), gün vermiyor.
//    `§4`in kuralı "gün bilinmiyorsa YYYY-01-01" — ama burada AY biliniyor,
//    ve Ocak yazmak bilineni de silerdi. Ayın ilk günü seçildi ve seçim
//    burada AÇIKÇA yazıldı; yıl ve ay TDV'den, gün bizim.
{ t:"1393-05-01", k:"siyaset", etiket:["toprak-kayip","diplomasi","konu-askeri","konu-siyasi","konu-diplomasi"],
  b:"Leş'in (Alessio) Dukagjinler tarafından Venedik'e bırakılması",
  gun:"1393", yer:"Leş (Alessio)", yer_id:"Leş (Alessio)",
  kisiler:"Paul Dukagjin, Lek Dukagjin",
  d:"1387'den beri Leş'i (Alessio) Arnavut Dukagjin Prensliği'nin merkezi olarak elinde tutan Paul ve Lek Dukagjin, Osmanlı baskısı karşısında Drin ağzındaki bu limanı savunamayacaklarını görüp kaleyi Venedik'e bıraktılar ve şehrin doğusundaki dağlık bölgeye çekildiler. Şehir bundan sonra 1478'de Fâtih'in İşkodra seferi sırasında Rumeli Beylerbeyi Dâvud Paşa tarafından alınıncaya kadar Venedik'in elinde kaldı — İskender Bey'in 1 Mart 1444'te Osmanlı karşıtı ittifakı (Lidhja e Lezhës) burada toplaması da, 17 Ocak 1468'de burada ölmesi de bir Venedik kalesinde gerçekleşti.",
  kaynak:"les", duygu:["😐"] },

// ── POST-IT #4 · Kruja (Akçahisar) 1284 · 1344 · 1443 — KAYNAK: TDV `kruya`
// Tarihler yalnız YIL veriyor ("1284", "1344", "1443") → YYYY-01-01 (gün teyitsiz).
{ t:"1284-01-01", k:"siyaset", etiket:["toprak-kayip","savas","konu-askeri","konu-siyasi"],
  b:"Bizans, Anjou'dan Kruja'yı (Akçahisar), Draç'ı ve Avlonya'yı geri aldı",
  gun:"1284", yer:"Akçahisar (Kruja)", yer_id:"Akçahisar (Kruja)",
  kisiler:"II. Andronikos",
  d:"1271-1272'de Anjou'lu Charles'ın aldığı Draç ve Kruja, Charles'ın ölümünün ardından Bizans İmparatoru II. Andronikos tarafından yeniden alındı (TDV Kruya: 'Avlonya, Draç ve Kruya'yı yeniden aldı'). Yalnız yıl bilinir; gün teyitsizdir.",
  kaynak:"kruya", duygu:["😐"] },
{ t:"1344-01-01", k:"siyaset", etiket:["toprak-kazanc","savas","konu-askeri","konu-siyasi"],
  b:"Sırplar Kruja'yı (Akçahisar), Berat'ı ve Avlonya'yı ele geçirdi",
  gun:"1344", yer:"Akçahisar (Kruja)", yer_id:"Akçahisar (Kruja)",
  kisiler:"Stefan Duşan",
  d:"TDV Kruya: '1344'te Sırplar Kruya, Berat ve Avlonya'yı ele geçirdi'. TDV Arnavutluk, Duşan'ın Arnavutluk'u 1343-1346 arasında işgal ettiğini, 1355'te imparatorluğunun çöküşüyle yerel beylerin güçlendiğini söyler. Yalnız yıl bilinir; gün teyitsizdir.",
  kaynak:"kruya", duygu:["😐"] },
{ t:"1443-01-01", k:"siyaset", etiket:["toprak-kazanc","savas","konu-askeri","konu-siyasi"],
  b:"İskender Bey Kruja'yı (Akçahisar) ele geçirdi — Arnavut direnişi başlıyor",
  gun:"1443 (847)", yer:"Akçahisar (Kruja)", yer_id:"Akçahisar (Kruja)",
  kisiler:"İskender Bey",
  d:"İzladi yenilgisinin ardından (TDV Kruya: 847/1443) İskender Bey Kruja'yı işgal etti. 1437'de babası Gjon Kastrioti'nin ölümünden sonra Osmanlılar şehri ona değil atadıkları Hasan Bey'e vermişti. Yalnız yıl bilinir; gün teyitsizdir.",
  kaynak:"kruya", duygu:["😐"] },

// ── POST-IT #4 · Draç 1392 — Venedik. Yıl: Sufflay (Medieval Albania) + Men of Empire (Venedik tarafı);
// TDV drac yılsız. Gün teyitsiz → 1392-01-01.
{ t:"1392-01-01", k:"siyaset", etiket:["toprak-kazanc","diplomasi","konu-siyasi"],
  b:"Draç (Durrës) Thopia'dan Venedik'e geçti",
  gun:"1392", yer:"Draç", yer_id:"Draç",
  kisiler:"George Thopia",
  d:"Charles Thopia'nın 1368'de aldığı Draç'ı oğlu George Thopia 1392'de Venedik'e bıraktı (TDV Draç: 'Thopia’nın oğlu George tarafından Venedik’e bırakıldı', yılsız); Venedik şehrin statülerini Ağustos 1392'de onayladı. Venedik, Draç'ı 1501'de Osmanlılar alana kadar elinde tuttu. Yalnız yıl bilinir; gün teyitsizdir.",
  kaynak:"drac", duygu:["😐"] },

];

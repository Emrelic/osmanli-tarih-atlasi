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
{ t:"1393-05-01", k:"siyaset", etiket:["toprak-kayip","diplomasi"],
  b:"Leş'in (Alessio) Dukagjinler tarafından Venedik'e bırakılması",
  gun:"1393", yer:"Leş (Alessio)", yer_id:"Leş (Alessio)",
  kisiler:"Paul Dukagjin, Lek Dukagjin",
  d:"1387'den beri Leş'i (Alessio) Arnavut Dukagjin Prensliği'nin merkezi olarak elinde tutan Paul ve Lek Dukagjin, Osmanlı baskısı karşısında Drin ağzındaki bu limanı savunamayacaklarını görüp kaleyi Venedik'e bıraktılar ve şehrin doğusundaki dağlık bölgeye çekildiler. Şehir bundan sonra 1478'de Fâtih'in İşkodra seferi sırasında Rumeli Beylerbeyi Dâvud Paşa tarafından alınıncaya kadar Venedik'in elinde kaldı — İskender Bey'in 1 Mart 1444'te Osmanlı karşıtı ittifakı (Lidhja e Lezhës) burada toplaması da, 17 Ocak 1468'de burada ölmesi de bir Venedik kalesinde gerçekleşti.",
  kaynak:"les", duygu:["😐"] },

];

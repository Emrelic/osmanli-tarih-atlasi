// data/savaslar_ok104.js — OPUS HAZIR KITA 104 · parti-emrelic-0019 · H-0058
// ===========================================================================
// 1-2 Eylül 2026 · görevi veren: 1.MURAT HÜDAVENDİGAR (koordinatör), M-1903
//
// AD ALANI DOSYA ADINDAN TÜRETİLDİ (`CLAUDE.md §7`):
//     data/savaslar_ok104.js  ->  window.SAVASLAR_OK104
//
// H-0058 — Emre: "Böğürdelen'in fethi maddesinde haritada gösterim yeri yok,
//                 uçuşta imparatorluk görünümüne geçiyor. 7 Temmuz 1521"
//
// ÖLÇTÜM (devraldığım TASNIF ölçümünü DOĞRULAMADAN AKTARMADIM, kendim saydım):
//     data/savaslar.js  ·  "delen" geçen satır: 0
//     data/savaslar.js  ·  "1521-07"  geçen satır: 0
//   ⇒ Böğürdelen kuşatmasının savaş kaydı gerçekten YOK. Kronolojide madde
//     VAR (1521-07-07, yer_id: Böğürdelen) ama `js/app.js` uçuşta gösterim
//     yeri üretmek için `lat` taşıyan bir SAVAŞ kaydı arıyor; o olmayınca
//     kamera imparatorluk görünümüne düşüyor — Emre'nin tarif ettiği tam bu.
//
// KAYNAK: TDV `bogurdelen` (HTTP 200, gövdesi okundu — `§4`in "kod 200 doğru
// madde demek değildir" şartı için başlık ve gövde ayrı ayrı sınandı):
//   "Kanûnî'nin birinci Macaristan seferi sırasında, bölgeye gönderilen
//    RUMELİ BEYLERBEYİ AHMED PAŞA'nın kuvvetleri tarafından şiddetli bir
//    kuşatma neticesinde FETHEDİLDİ (7 TEMMUZ 1521). Burası aynı zamanda
//    KANÛNÎ SULTAN SÜLEYMAN'IN İLK FETHETTİĞİ KALE olma özelliğine de
//    sahipti. Kanûnî fetihten sonra kaleye girdi ve şehrin imarını emretti.
//    BELGRAD'IN FETHİYLE İLGİLİ KARARLAR DA BURADA ALINDI."
// ⇒ Gün TDV'den TAM geliyor; uydurma yok, `YYYY-01-01` kaçamağına gerek yok.
//
// KOORDİNAT: 44,755 / 19,690 (Šabac, Sava'nın sağ kıyısı). TDV: "Sava
// nehrinin kenarında stratejik bakımdan önemli bir yerde kurulmuştur."
// ⚠️ ÖLÇMEDİM: `data/yerlesimler*.js` içinde "Böğürdelen" adlı bir yerleşim
//    kaydı olup olmadığını — kronoloji maddesinin `yer_id`si onu gösteriyor
//    ama kaydın kendi koordinatını okumadım, koordinatı bağımsız yazdım.
//
// ŞEMA: `data/savaslar.js` içindeki komşu kayıtlardan birebir kopyalandı
// (bkz. satır 321, "Belgrad kuşatması" 1521-06-25). `seri:"habsburg"` seçimi
// de oradan: SERILER künyesi habsburg serisini "1526-1791" diye tarif ediyor
// ama 1521 Belgrad kuşatması da bu seriye yazılmış; komşu koda uyduruldu,
// yeni bir seri icat edilmedi.
//
// ⚠️ BAĞLAMAYI BEN YAPMADIM — `index.html` koordinatörde ve koşu kilitli.
// 📌 VE BİR SINIR: bu dosya `js/app.js`in okuduğu `window.SAVASLAR` dizisine
//    KENDİLİĞİNDEN katılmaz. Bağlanırken ya app.js `SAVASLAR_*` önekini
//    taramalı ya da bu dizi `window.SAVASLAR`a push edilmeli. Hangisi
//    olacağı `js/app.js` sahibinin kararı — ben ORAYA DOKUNMADIM.
//    (`CLAUDE.md §7`: "app.js süzgeci ada değil BİÇİME bağlıydı — yeni
//     yamaların biçimi tanınmadı, ikisi de ELENDİ.")
// ---------------------------------------------------------------------------

window.SAVASLAR_OK104 = [

{ t:"1521-07-07", tur:"kusatma", ad:"Böğürdelen (Şabac) kuşatması",
  taraf_metin:"Macaristan", sonuc:"zafer", seri:"habsburg",
  lat:44.755, lon:19.690, taraf:["osmanli","macaristan"],
  kaynak:"bogurdelen" },

];

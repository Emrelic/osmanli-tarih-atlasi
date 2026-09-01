// ============================================================================
// SONNET HAZIR KITA 105 — parti-emrelic-0036 / H-0012
//
// Ad alani SK105 (CLAUDE.md §7 "ayri dosya vermek ayri ad alani vermek
// degildir" kurali geregi, degisken adi da dosya adindan turetildi).
//
// H-0012: "bu sammar hail yapilanmasinin hikayesini kronolojide gormedim,
// bunun olayini bir kronoloji maddesi ile anlatmali." Devletler dizininde
// (data/devletler.js id:"sammar") kunye ve kendi ic kronolojisi VARDI ama
// ana kronoloji akisinda (kullanicinin sag panelde gordugu liste) hic
// madde yoktu.
//
// KAYNAK: TDV `residiler` maddesi — devletler.js'te zaten alintilanmis ve
// 10 Agustos 2026'da f: 1836 -> 1835 duzeltilmis ayni alinti kullanildi:
// "Abdullah b. Resid, kardesi Ubeyd ile Ibn Ali ailesine karsi mucadeleyi
// kazanip Hail emirligini ele gecirdi, Residi hanedaninin hakimiyetini
// kurdu." Gun verilmiyor -> YYYY-01-01 (CLAUDE.md §4).
//
// 🔴 SENKRON BULGUSU (duzeltmedim, dosya kilitli/paylasilan, sadece
// kayda geciyorum — tahtaya da bildiriyorum):
//   devletler.js  sammar f: 1835-01-01  (duzeltilmis, dogru)
//   yerlesimler.js Hail   s:[{f:"1836-01-01", ... d:"sammar"}]  (HALA 1836)
//   ⇒ 1 yillik tutarsizlik. Bu maddeyi 1835-01-01'e yazarsam Degismez 2
//   (kirilma ±30 gun icinde madde) SAGLANMAZ, cunku yerlesimler.js'teki
//   kirilma hala 1836-01-01'de duruyor ve o dosyaya YAZAMIYORUM (paylasilan
//   dosya, M-1903 kurali). Tarihi kirilmaya uydurmak yerine doguyu (TDV)
//   yazdim — CLAUDE.md §11 "yuvarlak tarih" dersi: hassasiyet dogruluk
//   kadar gorunurluk meselesi, dogru tarihi gizleyip kirilmaya uydurmak
//   yanlis taraf. Dosya sahibi (Oturum 0) yerlesimler.js'teki Hail
//   kirilmasini 1835-01-01'e cekmeli.
// ============================================================================
window.OLAYLAR_SK105 = [

{ t:"1835-01-01", k:"kurulus", etiket:["siyaset"], b:"Şammar (Reşîdî) Emirliği'nin kuruluşu — Hâil", gun:"1835", yer:"Hâil, Cebel Şammar", yer_id:"Hâil", kisiler:"Abdullah b. Reşîd",
  d:"Cebel Şammar bölgesinde nüfuzlu bir aşiret reisi olan Abdullah b. Reşîd, kardeşi Ubeyd ile birlikte bölgeye o zamana kadar hâkim olan İbn Ali ailesine karşı verdiği mücadeleyi kazanarak Hâil emirliğini ele geçirdi ve Reşîdî hânedanının hâkimiyetini kurdu. Necid'in kuzeyinde, o sırada merkezî bir otoriteden yoksun Hâil bölgesinde doğan bu emirlik, kısa sürede Osmanlı'ya yakın durarak Suûdîlerin tarihî rakibi hâline geldi; 1891'de Müleyde zaferiyle Riyad'ı da ele geçirip Necid'e hâkim oldu, nihayet 1921'de İbn Suûd'a teslim olarak tarihe karıştı. Bkz. [[suud-ikinci]], [[suud-ucuncu]].",
  kaynak:"residiler", duygu:["🏛"] }

];

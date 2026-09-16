// -*- coding: utf-8 -*-
// data/antlasma_haritalari.js — ANTLAŞMA HARİTASI (Emre, paket 0054 H-0020):
// "tüm barış anlaşmaları ... kronolojik maddesinde ... haritada alınan verilen
// bölgelerin boyanması taranması ve üstlerine ... etiketler koyalım ... bu
// harita sadece o kronoloji maddesinde geçerli olacaktır"
//
// window.ANTLASMA_HARITALARI. Her kayıt BİR barış antlaşması kronoloji maddesine
// (data/olaylar*.js, k:"antlasma") bağlanır — eşleştirme js/antlasma_harita.js'te,
// app.js'in mevcut ANTLASMALAR eşleştirme deseniyle AYNI (o.b.indexOf(antlasma_ad)
// + tarih yakınlığı).
//
// 🔴 GEOMETRİ KENDİ BAŞINA ÜRETİLMEZ — data/hukuki_sinirlar.js (C katmanı)
// kayıtlarından TÜRETİLİR (D023: var olan ayrıştırıcıyı tekrar yazma). Her
// `bolgeler[].sinir_id`, o dosyadaki gerçek `id`lere işaret eder; oradaki
// `kaynak`/`dayanak` metni BURADA TEKRARLANMAZ, tıklanınca oradan okunur.
//
// ALANLAR:
//   id             benzersiz
//   antlasma_ad    kronoloji maddesinin `b` alanında ARANACAK alt dizgi
//                  (app.js'teki mevcut desenle aynı: o.b.indexOf(antlasma_ad)>=0)
//   tarih          madde tarihiyle eşleşme kontrolü için (±60 gün)
//   bolgeler[]     { taraf: devletler.js kimliği, etiket: haritada gösterilecek
//                    metin, sinir_id: [data/hukuki_sinirlar.js id'leri] }
//   not            KAPSAM DIŞI bırakılan bir tarafın gerekçesi (varsa)

window.ANTLASMA_HARITALARI = [
{
  id: "karlofca-1699",
  antlasma_ad: "Karlofça",
  tarih: "1699-01-26",
  bolgeler: [
    { taraf: "habsburg", etiket: "Avusturya'ya bırakılan",
      sinir_id: ["karlofca-bosna-sava-1699", "karlofca-bosna-kaleler-1699"] },
    { taraf: "lehistan", etiket: "Lehistan'a bırakılan",
      sinir_id: ["karlofca-lehistan-1699"] },
    { taraf: "venedik", etiket: "Venedik'e bırakılan",
      sinir_id: ["karlofca-venedik-1699"] }
  ],
  not: "Rusya Karlofça'da BARIŞ değil İKİ YILLIK MÜTAREKE imzaladı; Azak'ın devri 1700 " +
       "İstanbul Antlaşması'nda çözüldü — bkz. data/olaylar_ek5.js:260 (kronoloji maddesi, " +
       "kaynak: karlofca·rusya·mustafa-ii, TDV'ye dayanıyor: \"Karlofça'da Rusya ile " +
       "yalnızca iki yıllık mütareke yapılabilmişti\"). Kaynaksız olacağı için Rusya " +
       "bölgesi bu kayda EKLENMEDİ — İstanbul 1700 kendi antlaşma haritası kaydını " +
       "gerektirir (bu pilotta YOK)."
}
];

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
//                    metin,
//                    sinir_id: [data/hukuki_sinirlar.js id'leri]  (VARSA — TERCİH EDİLEN yol,
//                       C katmanının kendi geometrisinden türer, D023)
//                    noktalar: [{ad, lat, lon, kaynak}]  (hukuki_sinirlar'da kayıt YOKSA —
//                       🆕 DALGA-0058 md.3b, Pasarofça: HUKUKI_SINIRLAR bu antlaşmayı hiç
//                       kapsamıyor, noktalar doğrudan data/yerlesimler*.js'teki GERÇEK
//                       koordinatlardan ve ilgili kronoloji maddesinin `kaynak:` alanından
//                       kuruldu — her noktanın KENDİ `kaynak` metni ZORUNLU, uydurma yok) }
//   not            KAPSAM DIŞI bırakılan bir tarafın ya da veri kalitesi bulgusunun gerekçesi

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
},
{
  // 🆕 DALGA-0058 md.3b (1.MURAT, 17 Eylül) — "Karlofça'dan sonra ikinci antlaşma
  // haritası Pasarofça 1718 olsun". data/hukuki_sinirlar.js bu antlaşmayı HİÇ
  // kapsamıyor (0 kayıt) — noktalar bu yüzden `sinir_id` değil `noktalar` kullanıyor.
  id: "pasarofca-1718",
  antlasma_ad: "Pasarofça",
  tarih: "1718-07-21",
  bolgeler: [
    { taraf: "habsburg", etiket: "Avusturya'ya bırakılan", noktalar: [
        { ad: "Belgrad", lat: 44.818, lon: 20.457,
          kaynak: "data/olaylar_ek5.js:517 (kaynak: pasarofca-antlasmasi, TDV): " +
                  "\"Belgrad ile birlikte Kuzey Sırbistan, Banat ve Küçük Eflak Avusturya'ya terk edildi\"" },
        { ad: "Semendire (Kuzey Sırbistan)", lat: 44.663, lon: 20.93,
          kaynak: "aynı madde; ayrıca data/olaylar_ek17.js:218 (TDV Semendire maddesi): " +
                  "\"1717'de Pasarofça'yla Avusturya'ya bırakılan kale\"" },
        { ad: "Temeşvar (Banat — TEMSİLÎ nokta)", lat: 45.76, lon: 21.23,
          kaynak: "aynı madde \"Banat\" der, tek şehir ADLANDIRMAZ — Temeşvar Banat'ın " +
                  "bilinen idarî merkezi olarak TEMSİLÎ seçildi, antlaşma metninin doğrudan " +
                  "andığı bir yerleşim DEĞİL (bu ayrım kasten belirtiliyor)" },
        { ad: "Krayova / Craiova (Küçük Eflak — TEMSİLÎ nokta)", lat: 44.33, lon: 23.795,
          kaynak: "aynı madde \"Küçük Eflak\" der, tek şehir ADLANDIRMAZ — Krayova Küçük " +
                  "Eflak'ın (Oltenya) bilinen idarî merkezi olarak TEMSİLÎ seçildi, aynı ayrım" }
    ] },
    { taraf: "osmanli", etiket: "Osmanlı'da kalan", noktalar: [
        { ad: "Koron (Mora — TEMSİLÎ nokta)", lat: 36.796, lon: 21.955,
          kaynak: "data/olaylar_ek5.js:517: \"antlaşma Mora'yı Osmanlı'da bıraktı\"; Koron, " +
                  "Mora'nın 1715 seferinde son fethedilen kalesi (data/olaylar_ek5.js:515), " +
                  "yarımadanın TEMSİLÎ noktası olarak seçildi — metin başka bir şehir andırmıyor" }
    ] },
    { taraf: "venedik", etiket: "Venedik'te kalan", noktalar: [
        { ad: "Preveze", lat: 38.9607, lon: 20.7469,
          kaynak: "data/olaylar_ek5.js:517: \"Venedik ise İyon kıyısındaki Preveze ve Çuha " +
                  "gibi mevzilerini korudu\"; teyit data/olaylar_ek6.js:60: \"Preveze ve " +
                  "Vonitsa Pasarofça'da da Venedik'te bırakıldı\"" },
        { ad: "Çuha Adası (Kythira)", lat: 36.24, lon: 22.99,
          kaynak: "aynı madde; teyit data/olaylar_ek5.js:516: \"[Çuha] üç yıl sonra " +
                  "Pasarofça'da Venedik'e geri verildi\"" },
        { ad: "Vonitsa", lat: 38.917, lon: 20.888,
          kaynak: "data/olaylar_ek6.js:60: \"Preveze ve Vonitsa Pasarofça'da da Venedik'te " +
                  "bırakıldı; Osmanlı idaresine ancak 1798'de dönecekti\"" }
    ] }
  ],
  not: "D-GEOARAC'ın otomatik yerleşim-fark aleti (denetim/_ANTLASMA-HARITA-CIKTI-0916.json) " +
       "bu antlaşma için YALNIZ Çuha Adası VE Ayamavra'yı (ikisi de osmanli→venedik yönünde) " +
       "eşleştirdi — Ayamavra YANLIŞ/BELİRSİZ ÇIKTI: kronoloji maddeleri Ayamavra'nın 1699 " +
       "Karlofça'da Venedik'e verildiğini, 1715'te Osmanlı'nın GERİ ALDIĞINI söylüyor " +
       "(data/olaylar_ek5.js:515) ama Pasarofça'daki (1718) akıbetini AÇIKÇA belirtmiyor — bu " +
       "yüzden Ayamavra bu kayda EKLENMEDİ (D107: bulunamadı, uydurulmadı). Çuha doğrulandı ve " +
       "eklendi. Vonitsa da metinde geçiyor (data/olaylar_ek6.js:60) ve koordinatı VAR — eklendi."
}
];

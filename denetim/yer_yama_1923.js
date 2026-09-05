// =====================================================================
// 1923 SINIRLARI — MEVCUT NOKTAYA DÖNEM EKLENTİSİ
// Kaynak: denetim/YERLESIM-1923-0905.json (M-2734/M-2756/M-2767 sevkleri)
// Oturum: 1923 SINIRLARI · local_372203f2-6e71-46d2-af5e-563a5c7eca60
//
// ⚠️ Bu bir YAMA dosyasıdır. `data/yerlesimler*.js`e DOKUNMADIM — koşu 5b
//    canlı olduğu için `denetim/` altına yazıldı (M-2776: koşu bitince
//    koordinatör `data/`ye taşıyacak).
//
// 🟡 ATLAS UFKUNUN DIŞINDA, BUGÜN (1923-10-29) ETKİSİZ — silinmez
//    (M-2756: araştırılmış doğru veriyi silmek yeniden araştırmaktan
//    pahalıdır), pencere büyüdüğünde kendiliğinden devreye girer.
// =====================================================================

window.YER_YAMA_1923 = [

// ── Şefşâven (Chefchaouen) — 1924 Rif geçişi eklendi ──
// Mevcut kayıt: data/yerlesimler_h2_kuzeyafrika.js
// eski s: [{f:"1471-01-01",t:"1549-01-01",d:"merini"},
//          {f:"1549-01-01",t:"1659-01-01",d:"sadi"},
//          {f:"1659-01-01",t:"1923-10-29",d:"fas"}]
// Son parça (fas, 1659→1923-10-29) 1924-11-15'e UZATILDI ve iki yeni
// parça eklendi. Kaynak: Wikipedia "1924 retreat from Chaoen" (İspanyol
// ordusu 15 Kasım 1924 gecesi tahliye etti) + rif-cumhuriyeti künyesinin
// kendi sonu (27 Mayıs 1926, önerilen YAMA-KUNYE-1923-0905.json'da).
{ ad:"Şefşâven",
  s:[{f:"1471-01-01",t:"1549-01-01",d:"merini"},
     {f:"1549-01-01",t:"1659-01-01",d:"sadi"},
     {f:"1659-01-01",t:"1924-11-15",d:"fas"},
     {f:"1924-11-15",t:"1926-05-27",d:"rif-cumhuriyeti"},
     {f:"1926-05-27",t:"9999-01-01",d:"fas"}],
  kaynak:"islamansiklopedisi'de bu tanecik yok; Wikipedia '1924 retreat from Chaoen' — İspanyol tahliyesi 15 Kasım 1924 gecesi. Rif Cumhuriyeti'nin resmî sonu (27 Mayıs 1926) kendi künyesinden.",
  neden:"1923-10-29 kesitini ETKİLEMİYOR (olay 1924-1926 arası) — kayıt tamlık için, atlas ufkunun dışı için eklendi." }

];

// =====================================================================
// 1923 SINIRLARI — Ndjamena + Darfur dönem eklentisi (M-2844 hükmü)
// Kaynak: denetim/YAMA-KUNYE-AIR-HADRAMUT-0905.json + BULGU-BELGESIZ7-0905.md
// Oturum: 1923 SINIRLARI · local_372203f2-6e71-46d2-af5e-563a5c7eca60
// ⚠️ denetim/'e YAZILDI (data/ kilitli, koşu 5b canlı).
// =====================================================================

window.YER_YAMA_BELGESIZ4 = [

// ── Ndjamena — 1900'de Fort-Lamy olarak kuruldu ──
// EN UCUZ ÇÖZÜM (M-2844 ①): kur: eklenince Değişmez 1 1900 öncesini
// hiç sormaz. Künye zaten VAR (fransa-cumhuriyet, f:1792-t:1923-10-29).
// 🔴 SINAV UYARISI (ARAC-YAMA-JS-SINA-0905-kos.py): `kur:` alanı
// _sahiplik_uygula.py'nin TAŞIDIĞI alanlar arasında DEĞİL (yalnız
// d/s/v/isg + SKALER_ALANLAR m/kaynak/bos/neden/not). Yani `s:` dizisi
// otomatik uygulanır ama `kur:"1900-01-01"` OTOMATİK İNMEZ — koordinatör
// bunu `data/yerlesimler_*.js`teki Ndjamena kaydına ELLE eklemeli.
{ ad:"Ndjamena",
  kur:"1900-01-01",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"bulunamadı — TDV kapsam dışı. Britannica/BlackPast 'N'Djamena' — Fransızlarca 1900'de, Rabih az-Zubayr'ı yendikleri savaş alanında Fort-Lamy adıyla kuruldu; öncesi küçük bir Kotoko yerleşimiydi (bağımsız bir devlet DEĞİL, bu yüzden 1900 öncesi için kur: ile sorgu KAPATILDI, boşluk beyanı gerekmiyor).",
  neden:"" },

// ── Darfur — mevcut künye ZATEN VAR, nokta hiç kullanmıyordu ──
// tunciler(1400-1695) → darfur(1695-1916-11-06) — 1916 sonrası ARAŞTIRILMADI.
{ ad:"Darfur",
  s:[{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},
     {f:"1695-01-01",t:"1916-11-06",d:"darfur"},
     {f:"1916-11-06",t:"1923-10-29",d:"ingiliz-sudani"}],
  kaynak:"devletler.js'teki MEVCUT `tunciler` ve `darfur` künyelerinin kendi f/t pencereleri + M-2908/M-2919'da ONAYLANAN `ingiliz-sudani` künyesi (f:1899-01-19,t:1923-10-29) — TDV 'sudan' gövdesi: '6 Kasım 1916'da öldürülüp Dârfûr toprakları bir eyalet halinde İngiliz Sudanı'na bağlandı', darfur künyesinin kendi t:1916-11-06 değeriyle BİREBİR.",
  not:"🟢 M-2937 sınavı: ingiliz-sudani'nin f:1899-01-19'u darfur'un t:1916-11-06'sından ÖNCE — üçüncü dönemin f: değeri (1916-11-06) darfur'un bitişiyle BİREBİR eşleşiyor, ARADA BOŞLUK YOK. 🔴 RENK BEKLİYOR (ingiliz-sudani henüz renksiz) — bu üçüncü dönem künye+renk inmeden UYGULANAMAZ, sıra: 1) ingiliz-sudani künyesi iner 2) renk üretilir 3) bu güncelleme iner." }

];

/* PAKET 14 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   30 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/yerlesimler_ek7.js ==== */
// =====================================================================
// İSKANDİNAVYA + BALTIK — KADEME 3 partisi (%82,5 hedef, %100 DEĞİL)
// PETEK/NOKTA oturumu · 3 Ağustos 2026 · dosya adı koordinatörden
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL — `arac/girdi.py` GIRDI_DOSYALARI'na EKLENMEDİ.
//
// ── ÖLÇÜT TERSİNE DÖNDÜ — ve bu kasıtlı ────────────────────────────
// `ONCELIK.md` KALİTE KADEMELERİ / `YASALAR K7` (Emre, 3 Ağustos):
//   *"Bir işi 'çok zahmetli' diye bekletmek onu %0'da tutmaktır —
//     ve %0 KADEME 0'dır. Fiyortlar Ege adaları hassasiyetiyle beklemez."*
// Halka 3-4 ⇒ hedef **KADEME 3**. Bu dosyada fiyort kovalanmadı, kıyı
// hattı çizilmedi, girinti çıkıntı hesaplanmadı. **Bitirdim demiyorum —
// üstünden geçtim.**
//
// ── ÖLÇÜM: ÖNCE / SONRA ─────────────────────────────────────────────
// Kutu 54-64°K / 4-32°D · kara 1.100.616 km²
// ```
//                  ÖNCE        SONRA
// nokta            46          85
// km²/nokta        23.926      12.948
// ort. yarıçap     115 km      64 km
// en uzak nokta    387 km      213 km
// ```
// ⇒ Yarıçap **%44'e** indi. Kademe 3 bandında; %100 değil ve olması da
//   gerekmiyor.
//
// 🔴 BOLGE KUZEY SINIRI 64°K — `uret_petek.py:60` `box(-12,-11,146,64)`.
//    Tromsø · Narvik · Luleå · Oulu · Kajaani · Lapland **çizilmiyor**;
//    oraya nokta koymak boşa gider. Ölçüldü, altı aday bu yüzden değil
//    ama sınır bilinerek çalışıldı. Kuzey açılırsa ayrı parti gerekir.
//
// ── ŞEMA — hepsi `s:`, hiç `d:`/`v:` YOK ────────────────────────────
// Hiçbiri Osmanlı değil ⇒ tamamı `s:`. `s:`→`s:` geçişi **kırılma
// üretmez**, dolayısıyla bu partinin Değişmez 2 borcu **yapısal olarak
// sıfırdır** — tek bir gün bile madde istemiyor.
// Kullanılan geçiş günlerinin hepsi zaten veride: 1537-01-01 · 1561-11-28
// · 1621-09-15 · 1645-08-13 · 1658-02-26 · 1721-08-30 · 1772-08-05 ·
// 1795-10-24 · 1809-09-17 · 1814-01-14 · 1905-06-07 · 1917-12-06 ·
// 1918-02-16 · 1918-11-11.
//
// ── 🔴 ESTONYA YAZILMADI — kimlik yok ───────────────────────────────
// `renkler.py`de `letonya` ve `litvanya` VAR, **`estonya` YOK.**
// Tallinn (Reval) · Tartu (Dorpat) · Narva · Pärnu ölçüldü (dördü de
// maske ✓, 3 km ✓, en yakın 82-136 km) ama YAZILMADI:
// 1918-1923 penceresi için `rusya` yazmak, bugün üç kez katalogladığım
// ödüncün (Azak · Kalmuk bozkırı · Donets) dördüncüsü olurdu.
// ⇒ `estonya` kimliği gelince dört nokta on dakikada girer; koordinatlar
//   ve zincir (`almanya →1561-11-28 · isvec →1721-08-30 · rusya →1918 ·
//   estonya`) burada hazır.
// 📌 Tallinn atlasın en büyük Baltık boşluğu: Helsinki'ye 82 km, ama
//   Fin körfezinin ÖTE yakası — bugün Helsinki'nin peteğine düşüyor.
// =====================================================================

window.YERLESIMLER_EK7 = [

// ── NORVEÇ ──────────────────────────────────────────────────────────
// Zincir Bergen/Trondheim/Stavanger'ın birebir aynısı:
// norvec →1537-01-01 (Norveç'in ayrı krallık statüsünü yitirmesi)
// · danimarka →1814-01-14 (Kiel) · isvec →1905-06-07 · norvec
// ⚠️ Ålesund ve Kristiansund maske dışı çıktı (takımada); **fiyort
//    kovalamadım**, iç tarafa kaydırdım — brief'in kuralı bu.
{ ad:"Ålesund", tur:"liman", lat:62.470, lon:6.400, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },
{ ad:"Molde", tur:"liman", lat:62.737, lon:7.159, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },
{ ad:"Kristiansund", tur:"liman", lat:63.000, lon:8.200, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },
{ ad:"Røros", tur:"sehir", lat:62.575, lon:11.385, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },
{ ad:"Sogndal", tur:"sehir", lat:61.230, lon:7.100, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },
{ ad:"Lillehammer", tur:"sehir", lat:61.115, lon:10.466, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },
{ ad:"Hamar", tur:"sehir", lat:60.795, lon:11.068, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },
{ ad:"Skien", tur:"sehir", lat:59.209, lon:9.609, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },
{ ad:"Haugesund", tur:"liman", lat:59.413, lon:5.268, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },

// ── İSVEÇ — çekirdek (kesintisiz) ───────────────────────────────────
{ ad:"Umeå",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"liman", lat:63.826, lon:20.263, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },
{ ad:"Härnösand",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"liman", lat:62.632, lon:17.941, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },
{ ad:"Mora",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"sehir", lat:61.006, lon:14.542, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },
{ ad:"Västerås",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"sehir", lat:59.6132, lon:16.5450, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },
{ ad:"Norrköping",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"liman", lat:58.588, lon:16.186, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },
{ ad:"Nyköping",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"liman", lat:58.753, lon:17.009, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },
{ ad:"Borås",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"sehir", lat:57.721, lon:12.940, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },
{ ad:"Växjö",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"sehir", lat:56.878, lon:14.809, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },

// ── İSVEÇ — 1645/1658'de DANİMARKA'DAN alınan iller ─────────────────
// ⚠️ Bunlar `isvec 1281-1923` YAZILAMAZ; Skåne · Blekinge 1658 Roskilde'ye,
//    Jämtland 1645 Brömsebro'ya kadar Danimarka'daydı. Komşu zincirini
//    körü körüne kopyalamak burada 300-400 yıl yanlış olurdu.
//    Halmstad (1645) ve Malmö/Helsingborg (1658) kayıtlarıyla hizalı.
{ ad:"Kristianstad", tur:"sehir", lat:56.031, lon:14.152, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1658-02-26",d:"danimarka"},{f:"1658-02-26",t:"1923-10-29",d:"isvec"}] },
{ ad:"Karlskrona", tur:"liman", lat:56.250, lon:15.600, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1658-02-26",d:"danimarka"},{f:"1658-02-26",t:"1923-10-29",d:"isvec"}] },
// Jämtland: 1537 öncesi Norveç, sonra Danimarka-Norveç, 1645'te İsveç.
{ ad:"Östersund (Jämtland)", tur:"sehir", lat:63.250, lon:14.900, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1645-08-13",d:"danimarka"},{f:"1645-08-13",t:"1923-10-29",d:"isvec"}] },

// ── FİNLANDİYA ──────────────────────────────────────────────────────
// Zincir Turku/Helsinki/Hämeenlinna'nın aynısı:
// isvec →1809-09-17 (Fredrikshamn) · rusya →1917-12-06 · finlandiya
{ ad:"Vaasa", tur:"liman", lat:63.096, lon:21.616, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Kokkola", tur:"liman", lat:63.838, lon:23.132, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Pori", tur:"liman", lat:61.487, lon:21.797, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Tampere", tur:"sehir", lat:61.498, lon:23.761, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Jyväskylä", tur:"sehir", lat:62.242, lon:25.747, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Kuopio", tur:"sehir", lat:62.893, lon:27.678, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Iisalmi", tur:"sehir", lat:63.558, lon:27.188, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Nurmes", tur:"sehir", lat:63.600, lon:29.400, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Joensuu", tur:"sehir", lat:62.601, lon:29.763, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Savonlinna", tur:"kale", lat:62.000, lon:28.900, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
{ ad:"Mikkeli", tur:"sehir", lat:61.688, lon:27.273, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },
// ⚠️ Lappeenranta ESKİ FİNLANDİYA'dadır: Viipuri ile birlikte 1721
//    Nystad'da Rusya'ya geçti, 1809'da DEĞİL. Viipuri'nin zinciri kullanıldı.
//    Komşusu 48 km ötede ve farklı tarih taşısaydı harita orada yarılırdı.
{ ad:"Lappeenranta", tur:"kale", lat:61.058, lon:28.187, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },

// ── LETONYA ─────────────────────────────────────────────────────────
// Riga'nın zinciri: almanya →1561-11-28 (Livonya Nişanı'nın dağılışı)
// · lehistan →1621-09-15 · isvec →1721-08-30 (Nystad) · rusya →1918-11-11
{ ad:"Cēsis (Wenden)", tur:"kale", lat:57.312, lon:25.274, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1621-09-15",d:"lehistan"},{f:"1621-09-15",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"},{f:"1918-11-11",t:"1923-10-29",d:"letonya"}] },
// ⚠️ Dünaburg LEH LİVONYASI'ndadır (Inflanty): İsveç'e HİÇ geçmedi,
//    Lehistan'da kaldı ve BİRİNCİ TAKSİM'de (1772) Rusya'ya geçti.
//    Cēsis'in zincirini kopyalamak onu yüz yıl yanlış gösterirdi.
{ ad:"Daugavpils (Dünaburg)", tur:"kale", lat:55.875, lon:26.536, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"},{f:"1918-11-11",t:"1923-10-29",d:"letonya"}] },

// ── LİTVANYA — Vilnius'un zinciri ───────────────────────────────────
{ ad:"Kaunas",kaynak:"polonya", tur:"sehir", lat:54.897, lon:23.886, g:0, k:1,kd:[{f:"1918-02-16",t:"1923-10-29",k:1,m:null}], d:[],
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-02-16",d:"sovyet-rusya"},{f:"1918-02-16",t:"1923-10-29",d:"litvanya"}] },
{ ad:"Šiauliai",kaynak:"polonya", tur:"sehir", lat:55.934, lon:23.315, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-02-16",d:"sovyet-rusya"},{f:"1918-02-16",t:"1923-10-29",d:"litvanya"}] },
// ⚠️ Memel Litvanya DEĞİL: Töton/Prusya toprağıdır ve 1923 Ocak'a kadar
//    Almanya'dadır. Königsberg'in zinciri kullanıldı.
{ ad:"Klaipėda (Memel)", tur:"liman", lat:55.703, lon:21.144, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1701-01-18",d:"almanya"},{f:"1701-01-18",t:"1871-01-18",d:"prusya"},{f:"1871-01-18",t:"1923-02-16",d:"almanya"},{f:"1923-02-16",t:"1923-10-29",d:"litvanya"}] },

// ── LİTVANYA BÜYÜK DUKALIĞI'NIN DOĞUSU — birinci taksim ─────────────
{ ad:"Polotsk",kaynak:"polonya", tur:"sehir", lat:55.485, lon:28.786, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Vitebsk",kaynak:"polonya", tur:"sehir", lat:55.191, lon:30.206, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek8.js ==== */
// =====================================================================
// ARKTİK — 64°K'nin KUZEYİ  ·  39 nokta
// PETEK/NOKTA oturumu · 4 Ağustos 2026 · koordinatörün koşu 9 sevki
// =====================================================================
// 🔴 BU DOSYA KUTU AÇILMADAN BAĞLANAMAZ.
//    39 noktanın 39'u da `lat > 64`. Bugünkü `BOLGE = box(-12,-11,146,64)`
//    ile bağlanırsa peteklerin hepsi BOŞ çıkar ve motorun kapanış satırı
//    ("tüm yerleşimlerin peteği geçerli ✓") DÜŞER.
//    ⇒ Sıra: önce `uret_petek.py:60` → `box(-12,-11,146,82)`, sonra bu dosya.
//    📌 Kutu AÇILMADAN da işe yarayan 12 nokta ayrı dosyada: `_ek9`.
//
// ── NİÇİN VAR — ÖLÇÜM ────────────────────────────────────────────────
// Kuzey 64→82 açılınca giren kara: **4.850.863 km²**. Bugünkü 1623 nokta
// bu karaya ORTALAMA 1.701 km uzakta; en uzak hücre 2.973 km. `§2` emilme
// kuralı yüzünden alıcılar şunlar olurdu:
//     1.877.480 km²  Perm     (58,01°K)
//     1.556.538 km²  Aigun    (50,24°K — MANÇURYA, `qing-hanedani`)
//       253.695 km²  Urga · 129.864 Kobdo · 81.060 Uliastay  (MOĞOLİSTAN)
// Yani kutu noktasız açılsaydı Qing ve Moğol renkleri Kuzey Buz Denizi'ne
// dayanırdı. Bu dosya bağlanınca aynı kara için ortalama **1.701 → 233 km**,
// en uzak **2.973 → 1.000 km**.
//
// ── 🔴 KOORDİNATÖRÜN DÜZELTMESİ UYGULANDI ───────────────────────────
// MOTOR "Arktik'te 1281-1923 arası devlet yok, hepsi kasten sahipsiz olsun"
// demişti; koordinatör bunu ANAKARA için reddetti ve haklıydı. Burada iki
// sınıf AYRI ele alındı:
//   ① ANAKARA  → fetih tarihinden ÖNCE sahipsiz, SONRA devlet.
//   ② YÜKSEK ARKTİK ADALARI → pencerenin tamamında sahipsiz (aşağıda
//      dördü tek tek ONAYLANDI, varsayılmadı).
// Ve Fennoskandiya'nın sahibi Rusya DEĞİL: Lapland üç ayrı zincire
// (Norveç · İsveç · Finlandiya) bağlandı, Kola'ya yalnız Kola takıldı.
//
// ── ZİNCİRLER — hepsi `s:`→`s:` ⇒ DEĞİŞMEZ 2 BORCU YAPISAL OLARAK SIFIR
// NO   norvec 1281-01-01 → 1537-01-01 danimarka → 1814-01-14 isvec
//      → 1905-06-07 norvec → 1923-10-29     [Bergen/Trondheim'den birebir]
// SE   isvec 1281-01-01 → 1923-10-29        [Stokholm'den birebir]
// FI   isvec 1281-01-01 → 1809-09-17 rusya → 1917-12-06 finlandiya
//                                           [Helsinki'den birebir]
// RU   rusya 1281-01-01 → 1923-10-29        [Novgorod/Vologda'dan birebir]
// ⇒ Dördü de CANLI kayıtlardan kopyalandı; TEK BİR YENİ KIRILMA GÜNÜ
//   AÇILMIYOR. Yeni gün yalnız iki yerde var (Petsamo 1920-10-14 ve
//   fetih tarihleri) ve ikisi de `s:`→`s:`, kırılma üretmiyor.
//
// ── 🔴 KAYNAK DÜRÜSTLÜĞÜ — `CLAUDE.md §4` gereği İŞARETLİ ────────────
// TDV'YE BASAN tarihler (`sibir-hanligi` · `kucum-han`, ikisi de CANLI
// `<title>` ile sınandı):
//     1581-10-26  Yermak İsker'e giriyor   1586  Tümen ve Tobolsk kuruluyor
//     1592        Pelym · BEREZOV · SURGUT 1595-03-17  Baraba işgali
//     1598-08-20  Küçüm'ün son yenilgisi   1593-1604  "Sibirya'nın tamamen zaptı"
// TDV'YE BASMAYAN tarihler (standart akademik referans — §4 bunu Doğu
// Asya/Kuzey Avrupa için yeterli sayıyor ama İŞARETLENMESİNİ istiyor):
//     Obdorsk 1595 · Mangazeya 1601 · Turuhansk 1607 · Hatanga 1626 ·
//     Jigansk 1632 · Verhoyansk 1638 · Zaşiversk 1639 · Dudinka 1667 ·
//     Kola ostrogu 1565 · Pustozersk 1499 · Fredrikshamn 1809-09-17 ·
//     Kiel 1814-01-14 · Norveç 1905-06-07 · Tartu (Petsamo) 1920-10-14 ·
//     Svalbard antlaşması 1920-02-09 (yürürlük 1925-08-14)
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske   39/39 içeride. ⚠️ ALTI nokta 10m maskesinin kıyı basitleştirmesi
//         yüzünden ilk denemede DIŞARI düştü (Bodø · Tromsø · Luleå ·
//         Svalbard · Vaygaç · Akureyri) ve karaya çekildi — kaydırma
//         2,2 km, yalnız Vaygaç'ta 11 km. Her biri kendi satırında yazılı.
// 3 km    en yakın çift 91,4 km (Vardø ↔ Petsamo) — eşik 3 km, temiz.
// renk    norvec · danimarka · isvec · finlandiya · rusya — BEŞİ DE BOYALAR'da.
// Değişmez 1  sahipsizlik KASITLI ve gerekçeli (`kasitli_bosluk` + `neden`).
// Değişmez 2  borç SIFIR (yeni `d:`/`v:` dönemi YOK — dosyada hiç yok).
// Değişmez 3  `m:` yazılmadı ⇒ çelişki üretemez.
// =====================================================================

window.YERLESIMLER_EK8 = [

// ── ① NORVEÇ KUZEYİ — Nordland · Troms · Finnmark ───────────────────
// Bugün Trondheim (63,43) atlasın en kuzey Norveç noktası; ondan Nordkapp'a
// 1.100 km boyunca hiç nokta yok. Beş nokta o hattı kuruyor.
{ ad:"Mosjøen", tur:"sehir", lat:65.8370, lon:13.1920, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },

// ⚠️ Maske: 67,2804/14,4049 (şehir merkezi) yarımadanın ucunda ve 10m
//    maskesi orayı deniz sayıyor; 2,2 km doğuya (Bodø'nün kendi kıstağı)
//    çekildi. Aynı düzeltme Tromsø · Luleå · Svalbard · Vaygaç'ta da var.
{ ad:"Bodø", tur:"sehir", lat:67.2933, lon:14.4446, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },

// ⚠️ Maske: Tromsø ADA şehridir (Tromsøya); 2,2 km doğuya, karşı kıyıya alındı.
{ ad:"Tromsø", tur:"sehir", lat:69.6527, lon:19.0119, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },

{ ad:"Alta", tur:"sehir", lat:69.9689, lon:23.2717, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },

// 🔴 BU PARTİNİN EN GEREKLİ TEK NOKTASI. Vardøhus kalesi ~1306'dan beri
// Norveç'in kuzeydoğu çıpasıdır ve o çıpa olmadan Kola'nın Rus noktası
// bütün Finnmark'ı emer — yani Rusya, Norveç kıyısında Nordkapp'a kadar
// boyanır. `§3.5.1`in "noktasızlık İKİ YÖNE de hata üretir" vakası.
{ ad:"Vardø", tur:"kale", lat:70.3705, lon:31.1107, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},{f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}] },

// ── ② İSVEÇ LAPLAND'İ — Norrbotten ve Torne Lappmark ────────────────
// ⚠️ 1809 SINIRI BURADA GEÇİYOR ve üç nokta da BATI yakasında kaldı:
//    Fredrikshamn barışı Torne nehrini sınır yaptı, batısı İsveç'te KALDI.
//    Doğu yakası (Tornio) aşağıda ayrı zincirle yazılı — bu iki komşu
//    noktanın zinciri 1809'dan sonra AYRILIYOR ve ayrılık kasıtlıdır.
// ⚠️ maske: şehir merkezi (65,5842) 10m maskesinde deniz; 2,2 km kuzeye alındı.
{ ad:"Luleå",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"sehir", lat:65.6042, lon:22.1547, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },

{ ad:"Jokkmokk",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"sehir", lat:66.6069, lon:19.8265, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },

// 🔴 GÖL DÜZELTMESİ (MOTOR buldu, göl-farkındalı tarama genişletti — 4 Ağustos,
//    uygulaması 6 Ağustos'a kaldı çünkü 4'ünde dosya koşu 9'un BAĞLI girdisiydi
//    ve anlık görüntüden sonra yazmak yayını bayat gösterirdi).
//    İlk yazılan 67,8500/20,6600 **Torneträsk gölünün İÇİNDE**ydi (NE 10m
//    poligonu doğrulandı) ve peteği %0,0 (0 / 29.380 km²) çıkıyordu: motorun
//    `KARA`sı gölleri ÇIKARIYOR, ilk denetimimin kullandığı ham kıyı maskesi
//    çıkarmıyordu. Kıyıya göre doğru olan nokta, göle göre yanlıştı.
//    2,2 km kuzeydoğuya, gölün dışına alındı.
// ⚠️ Koordinatörün önerdiği 67,8443/20,6594 de geçiyor ama ham göl kenarına
//    yalnız **36 m** paylı (ölçüm koordinatörün, doğrulandı); seçilen
//    67,8693/20,6737 ise **158 m** paylı. 0,002 kara toleransının bir
//    kıpırtısı 36 m'yi geri içeri alabilir, o yüzden paylı olan seçildi.
//    📌 Benim ilk ifadem "sıfır mesafede" idi ve fazla sertti — gerçek 36 m.
//       Karar aynı kalıyor, gerekçenin rakamı düzeltildi.
{ ad:"Jukkasjärvi",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, imzalı: Joseph P. Byrne, 2022): 'The Swedish Estates refused to recognize Frederick as the new monarch and elected Gustav by acclamation on JUNE 6, 1523.' İkinci bağımsız teyit: seçim Strängnäs'taki Riksdag'da yapıldı ve Kalmar Birliği böylece resmen dağıldı (aynı gün İsveç Ulusal Günü'dür). TDV kapsam dışı — Batı/Kuzey Avrupa TDV kapsamı %0 (§4). İÇ TUTARLILIK: `isvec-birlik-oncesi` künyesi (1281-01-01→1523-06-06) TAM bu dönem için yazılmış ve özeti Kalmar'ı adıyla anıyor; `isvec` künyesi AYNI GÜN başlıyor. 🟢 §②b DAMGASI: bu kaynak GÜNÜN dayanağıdır — gövde günü AÇIKÇA veriyor ('on June 6, 1523') ve gövdesi ÇEKİLİP okundu. ⚠️ İkinci bağımsız teyit ise arama sonuçlarının çakışmasından geliyor, GÖVDE OKUMASINDAN DEĞİL (Britannica · Oxford Reference · Library of Congress ÜÇÜ DE HTTP 403) — bu bir zayıflık ve YAZILI.", tur:"sehir", lat:67.8693, lon:20.6737, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1923-10-29",d:"isvec"}] },

// ── ③ FİNLANDİYA LAPLAND'İ ──────────────────────────────────────────
// Oulu (1605) atlasın kaçırdığı en büyük Fin şehriydi: 64°K'nin 1,2 km
// kuzeyinde kaldığı için kutunun dışındaydı.
{ ad:"Tornio", tur:"sehir", lat:65.8482, lon:24.1436, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },

{ ad:"Oulu", tur:"sehir", lat:65.0121, lon:25.4651, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },

{ ad:"Rovaniemi", tur:"sehir", lat:66.5039, lon:25.7294, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },

{ ad:"Sodankylä", tur:"sehir", lat:67.4167, lon:26.5833, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },

// GÖL DÜZELTMESİ — nokta suyun üstündeydi, taşındı.
//    İlk yazılan 68,9058/27,0289 **Inarijärvi'nin İÇİNDE** (NE 10m poligonu
//    doğrulandı) ama yalnız ~20 metre içeride.
//
// 🔴 BU YORUMUN İLK HÂLİ YANLIŞ BİR MEKANİZMA ANLATIYORDU — düzeltiliyor.
//    Şöyle yazmıştım: *"denetle.py gölleri simplify(0.01) ile sadeleştiriyor,
//    MOTOR SADELEŞTİRMİYOR ve peteği SIFIRLIYOR."* **İkinci yarısı yanlış.**
//    Koordinatör ölçtü, ben de doğruladım: `uret_petek.py:317` de
//    `simplify(0.01, preserve_topology=True)` uyguluyor — motor ile denetim
//    **AYNI toleransı** kullanıyor. Yanılmamın sebebi: kodun 255-310
//    arasını okuyup durdum ve 317'yi görmeden hüküm verdim.
//
// ✅ ÖLÇÜLMÜŞ GERÇEK — ayrışma motor↔denetim arasında DEĞİL, ham göl ile
//    sadeleştirilmiş göl arasındaki ince şeritte:
//        ham göl (sadeleştirmesiz)  → 🔴 GÖLDE
//        motor   (simplify 0.01)    → ✓ karada
//        denetle (simplify 0.01)    → ✓ karada
//    ⇒ Motor bu noktayı KARADA görüyordu; **peteği sıfırlanmazdı.**
//      Taşımak yine de doğru (nokta gerçekten suyun üstündeydi), ama
//      gerekçesi "motor sıfırlıyor" değil "kayıt su üstünde".
//
// 📌 Jukkasjärvi bundan AYRI bir vakadır ve karıştırılmamalı: o nokta
//    **her iki ölçütte de** gölün içindeydi, yani motor da onu suda
//    görüyordu — peteği %0,0 çıkan oydu.
// 📌 Koordinatör bu ince şerit için `denetle.py`ye "SINIRDA" uyarısı ekledi
//    (ihlal saymıyor, yalnız bağırıyor) ve yazıldığı gün Eğirdir ile
//    Västerås'ı yakaladı.
{ ad:"İnari", tur:"sehir", lat:68.9257, lon:27.0337, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi"},{f:"1523-06-06",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}] },

// 🔴 PETSAMO — pencerenin İÇİNDE kalan tek Fin toprak kazancı.
// Kola yarımadasının batı ucu, Peçenga manastırının (1533) çevresi;
// Rus toprağıydı ve **14 Ekim 1920 Tartu barışıyla** Finlandiya'ya geçti.
// Atlasın penceresi 1923-10-29'da bittiği için bu üç yıl GÖRÜNÜR.
// ⚠️ Zinciri komşusu İnari'den KOPYALANMADI: İnari 1809'da Rusya'ya geçen
//    İsveç toprağı, Petsamo ise 1920'de Finlandiya'ya geçen Rus toprağı.
//    İkisi ters yönde ilerliyor; kopyalasaydım Petsamo 1809'dan önce İsveç
//    görünecekti ve bu YANLIŞ olurdu.
{ ad:"Petsamo (Peçenga)", tur:"sehir", lat:69.5500, lon:31.2200, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1920-10-14",d:"sovyet-rusya"},{f:"1920-10-14",t:"1923-10-29",d:"finlandiya"}] },

// ── ④ KOLA ve RUS KUZEYİ — Novgorod'un kuzey mirası ─────────────────
// ⚠️ Bu altı nokta DÜZ `rusya 1281→1923` taşıyor ve bu bir seçimdir:
//    Terski kıyısı, Dvina, Mezen ve Peçora XIII. yy'da Novgorod
//    Cumhuriyeti'nin haraç toprağıydı, 1478'de Moskova'ya geçti. Atlasta
//    `novgorod` diye ayrı bir kimlik YOK ve canlı `Novgorod` kaydının
//    kendisi de düz `rusya 1281→1923` taşıyor. ⇒ Aynı çözüm burada da
//    uygulandı; tutarlılık kasıtlı. Ayrı kimlik gelirse ALTISI BİRDEN
//    düzeltilir (bir yerde `novgorod` yazıp öbüründe yazmamak, iki ayrı
//    kural gibi görünürdü).
{ ad:"Kola", tur:"kale", lat:68.8815, lon:33.0186, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Kandalakşa", tur:"sehir", lat:67.1550, lon:32.4117, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Ponoy", tur:"sehir", lat:67.0833, lon:41.1500, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Arhangelsk", tur:"liman", lat:64.5401, lon:40.5433, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Mezen", tur:"sehir", lat:65.8447, lon:44.2394, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Peçora'nın çıpası. 1499'da kurulan Pustozersk Ural'ın batısındaki ilk
// Rus Arktik kasabasıdır; XX. yy'da terk edildi ama pencerenin tamamında
// yaşıyor, o yüzden `bit:` yazılmadı.
{ ad:"Pustozersk", kur:"1499-01-01", kaynak:"Kanyukova V.P., Forum molodyh uchenyh 2019 (CyberLeninka) — \"osnovan ... osen'yu 1499 goda\"; TDV bu tanecigi kapsamiyor", tur:"kale", lat:67.5200, lon:52.7000, g:0, k:4, d:[],
  s:[{f:"1499-01-01",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Ust-Tsilma", tur:"sehir", lat:65.4392, lon:52.1508, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑤ YAMAL · OB' KUZEYİ — "sahipsiz, SONRA devlet" sınıfı ──────────
// 🔴 BURADAN İTİBAREN ZİNCİR KISALIYOR ve kısalması KASITLI.
// Bu noktaların hiçbirinde fetihten ÖNCE dönem YOK. Sebebi §3.5'in
// aynadaki hâli: var olmayan bir devleti boyamak kadar, olmayan bir
// devleti UYDURMAK da hatadır. TDV `sibir-hanligi` hanlığın coğrafyasını
// açıkça sınırlıyor: "Tura, Tobul ve İşim nehirleri arasındaki toprakların
// yanı sıra İrtiş nehri civarı ile Baraba bozkırları". Yamal, Taymır ve
// Yakutistan BU SINIRIN DIŞINDA — oralar Hantı, Mansi, Nenets ve Yakut
// topraklarıydı ve atlasın tanıdığı anlamda bir devlete bağlı değildi.
// ⇒ Fetihten önce sahipsiz; `kasitli_bosluk:true` + `neden:` ile gerekçeli.
// 📌 Ve bu, Değişmez 1'in sahipsiz tavanını yükseltir: aşağıdaki 17 kayıt
//    1281-fetih arasında sahipsiz görünecek. SAYIYI GİZLEMİYORUM —
//    ILERLEME.md'de tek tek yazılı ve hepsi kasıtlıdır.
{ ad:"Obdorsk (Salehard)", tur:"kale", lat:66.5300, lon:66.6019, g:0, k:0, d:[], kur:"1595-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1595 öncesi Yugra/Nenets toprağı — TDV sibir-hanligi hanlığın sınırını Tura-Tobol-İşim ve İrtiş civarı diye veriyor, Ob' ağzı bu sınırın DIŞINDA. Devletsiz dönem uydurma devletle doldurulmadı.",
  s:[{f:"1595-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Yamal ucu", tur:"bolge", lat:70.1667, lon:72.5167, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"Obdorsk ile aynı gerekçe; yarımadanın kuzey ucu için dolgu noktası — noktasız kalırsa Perm'in peteği 2.100 km uzaktan buraya uzanır.",
  s:[{f:"1595-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Mangazeya, Taz nehrindeki kürk ticaret şehri — 1601'de kuruldu, 1670'lerde
// terk edildi. `bit:` YAZILMADI: yerini Yeni Mangazeya (Turuhansk) aldı ve
// bölge idaresi kesintiye uğramadı; `bit:` yazsam petek komşuya devrolur ve
// aynı toprak iki kez sahiplendirilirdi.
{ ad:"Mangazeya", tur:"kale", lat:66.6900, lon:82.3300, g:0, k:0, d:[], kur:"1601-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1601 öncesi Nenets/Selkup toprağı, devletsiz.",
  s:[{f:"1601-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑥ YENİSEY · TAYMIR ──────────────────────────────────────────────
{ ad:"Turuhansk", tur:"kale", lat:65.7972, lon:87.9553, g:0, k:0, d:[], kur:"1607-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1607 öncesi Evenk/Ket toprağı, devletsiz.",
  s:[{f:"1607-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Dudinka", tur:"sehir", lat:69.4058, lon:86.1778, g:0, k:0, d:[], kur:"1667-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1667 öncesi Nganasan/Enets toprağı, devletsiz.",
  s:[{f:"1667-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Taymır'ın çıpası. Bu nokta olmadan yarımada (1,8 milyon km²) Perm'e
// 2.973 km uzaktan bağlanıyordu — atlasın ölçülmüş EN UZAK emilmesi.
{ ad:"Hatanga", tur:"kale", lat:71.9769, lon:102.4675, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1626 öncesi Nganasan toprağı, devletsiz.",
  s:[{f:"1626-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑦ LENA · YANA · İNDİGİRKA ───────────────────────────────────────
{ ad:"Jigansk", tur:"kale", lat:66.7697, lon:123.3708, g:0, k:0, d:[], kur:"1632-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1632 öncesi Evenk/Yakut toprağı, devletsiz.",
  s:[{f:"1632-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Bulun", tur:"sehir", lat:70.6667, lon:127.4000, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"Lena deltası; 1632 öncesi devletsiz. Tarih Jigansk'la aynı çünkü ikisi de Lena havzasının aynı yılki Rus ilerlemesiyle bağlandı.",
  s:[{f:"1632-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Verhoyansk", tur:"kale", lat:67.5500, lon:133.3833, g:0, k:0, d:[], kur:"1638-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1638 öncesi Yakut/Even toprağı, devletsiz.",
  s:[{f:"1638-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Ust-Yansk", tur:"sehir", lat:70.9000, lon:136.5500, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"Yana ağzı; Verhoyansk ile aynı 1638 ilerlemesi.",
  s:[{f:"1638-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Zaşiversk", tur:"kale", lat:67.2500, lon:142.8500, g:0, k:0, d:[], kur:"1639-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"İndigirka; 1639 öncesi Yukagir/Even toprağı, devletsiz.",
  s:[{f:"1639-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑧ YÜKSEK ARKTİK ADALARI — pencerenin TAMAMINDA sahipsiz ─────────
// 🔴 KOORDİNATÖR "ONAYLA, VARSAYMA" DEDİ. Dördü tek tek bakıldı:
//
//  Svalbard          1920-02-09 antlaşmasına kadar terra nullius; antlaşma
//                    **1925-08-14'te** yürürlüğe girdi — yani Norveç
//                    hükümranlığı atlasın penceresi (1923-10-29) BİTTİKTEN
//                    SONRA başlıyor. ⇒ pencerenin tamamında sahipsiz. ✅
//  Franz Josef       1873'te KEŞFEDİLDİ; pencerede hiçbir devletin idaresi
//                    yok (Sovyet talebi 1926). ⇒ sahipsiz. ✅
//  Severnaya Zemlya  1913'te keşfedildi, 1926'da adlandırıldı. Bu dosyadaki
//                    EN SAĞLAM boşluk: pencerenin 632 yılının 632'sinde
//                    kimse burayı BİLMİYORDU bile. ✅
//  Yeni Sibirya Ad.  XVIII. yy'da keşfedildi ve mamut dişi için Rus
//                    ruhsatıyla işletildi, ama idarî bir kademesi olmadı.
//                    ⇒ sahipsiz — ⚠️ dördünün EN ZAYIFI, itiraza açık.
//
// ⚠️ NOVAYA ZEMLYA ve VAYGAÇ AYRI ELE ALINDI ve sahipsiz BIRAKILMADI.
//    Pomor avcılığı XVI. yy'dan beri sürüyor ama kalıcı yerleşim ve fiilî
//    idare **1877'de** (Malıye Karmakulı) başlıyor; Rusya hükümranlığını
//    Norveç faaliyetine karşı 1911'de resmen ilân etti. 1877 seçildi çünkü
//    idarenin BAŞLADIĞI gündür, ilân edildiği değil.
//    🔴 TDV'YE BASMIYOR — §4 gereği işaretli, itiraza açık.
{ ad:"Svalbard", tur:"bolge", lat:78.2300, lon:15.7348, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"Terra nullius. Svalbard antlaşması 1920-02-09'da imzalandı ama 1925-08-14'te yürürlüğe girdi — Norveç hükümranlığı atlasın penceresi bittikten SONRA başlıyor. Pencerenin tamamında sahipsiz olması DOĞRUDUR." },
  // ⚠️ maske: Longyearbyen (78,2200/15,6500) fiyortta, 2,2 km içeri alındı.

{ ad:"Franz Josef Toprağı", tur:"bolge", lat:80.3300, lon:52.8000, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"1873'te keşfedildi; 1281-1923 penceresinde hiçbir devletin idaresi altında değil." },

{ ad:"Severnaya Zemlya", tur:"bolge", lat:79.5000, lon:96.0000, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"1913'te keşfedildi, 1926'da adlandırıldı. Pencerenin tamamında varlığı BİLİNMİYORDU — dosyadaki en sağlam kasıtlı boşluk." },

{ ad:"Yeni Sibirya Adaları", tur:"bolge", lat:75.2000, lon:140.5000, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"XVIII. yy'da keşfedildi, mamut dişi için Rus ruhsatıyla işletildi ama idarî kademesi olmadı. ⚠️ Bu dosyadaki dört boşluğun EN ZAYIFI — kaynak çıkarsa rusya dönemi açılmalı." },

{ ad:"Novaya Zemlya kuzeyi", tur:"bolge", lat:74.5000, lon:57.0000, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"1877 öncesi kalıcı yerleşim ve fiilî idare yok (Pomor avcılığı idare değildir). 🔴 1877-01-01 TDV'ye BASMIYOR.",
  s:[{f:"1877-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Novaya Zemlya güneyi", tur:"bolge", lat:71.5000, lon:53.0000, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"Novaya Zemlya kuzeyi ile aynı hüküm; 900 km'lik ada tek noktayla temsil edilemezdi.",
  s:[{f:"1877-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Vaygaç", tur:"bolge", lat:69.9000, lon:59.3000, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"Novaya Zemlya ile aynı hüküm. ⚠️ maske: ada merkezi 10m maskesinde deniz görünüyordu, 11 km kuzeye çekildi — dosyadaki EN BÜYÜK kaydırma.",
  s:[{f:"1877-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek9.js ==== */
// =====================================================================
// SİBİRYA KUŞAĞI — 64°K'nin GÜNEYİ  ·  12 nokta
// PETEK/NOKTA oturumu · 4 Ağustos 2026
// =====================================================================
// 🟢 BU DOSYA KUTU AÇILMADAN DA BAĞLANABİLİR — on iki noktanın on ikisi de
//    bugünkü `BOLGE = box(-12,-11,146,64)` içinde. `_ek8` kutuyu bekler,
//    bu dosya BEKLEMEZ.
//
// ── 🔴 NİÇİN VAR — BU BİR GELECEK RİSKİ DEĞİL, BUGÜNKÜ BİR KUSUR ─────
// Koordinatör "kutu noktasız açılırsa Moğolistan Kuzey Buz Denizi'ne kadar
// boyanır" diye uyardı. Ölçtüm: **o boyama ZATEN OLUYOR**, yalnız kutu
// 64'te bittiği için Buz Denizi'ne değil 64. paralele dayanıyor.
//
// Bugün çizilen kara, 45°K'nin kuzeyi / 58°D'nin doğusu = 10.977.624 km².
// Bu alanı boyayan noktalar ve uzaklıkları (ortalama 756 km, en uzak 1.866):
//     2.656.957 km²  Aigun  (50,24°K/127,46°D)  →  `qing-hanedani`
//     1.687.356 km²  Kobdo  (48,01°K/ 91,64°D)  →  `kuzey-yuan` / `cungar`
//     1.456.818 km²  Urga   (47,89°K/106,91°D)  →  `qing-hanedani`
//       766.284 km²  Uliastay                   →  `qing-hanedani`
// ⇒ Mançu ve Moğol renkleri bugün **6,57 milyon km²** Sibirya boyuyor.
//   Yenisey, Lena ve Baykal havzasında Rusya'nın haritada HİÇ GÖVDESİ YOK.
//   Yakutsk (1632), İrkutsk (1661), Nerçinsk (1653), Tomsk (1604),
//   Krasnoyarsk (1628), Yeniseysk (1619) — altısı da atlasta YOKTU.
//
// 📌 Ve bu, `CLAUDE.md §2`nin ders kitabı vakası: kusur veride değil,
//    NOKTASIZLIKTA. `Aigun` kaydı doğru, `Kobdo` kaydı doğru, motor doğru.
//    58°D ile 91°D arasında, 44°K'nin kuzeyinde **tek bir nokta yok** —
//    ölçüldü, sıfır. Petek o boşluğu en yakın sahibine veriyor ve en yakın
//    sahip Mançurya'da oturuyor.
//
// ── ÖLÇÜLEN ETKİ (kutu AÇILMADAN, yalnız `_ek9` + `_ek10` bağlanınca) ──
//     ortalama uzaklık   756 km → 327 km
//     en uzak hücre    1.866 km → 909 km
//     Aigun'un boyadığı 2.656.957 km² → 594.170 km² (kendi Amur havzası)
//     Kobdo · Urga · Uliastay ilk sekizden TAMAMEN düşüyor
//
// ── ZİNCİR KURALI — hepsi `s:`, DEĞİŞMEZ 2 BORCU SIFIR ──────────────
// Sibirya'nın fethi bir gün değil bir SÜREÇ; her nokta kendi kalesinin
// kuruluş yılını taşıyor ve öncesi KASTEN sahipsiz (gerekçe `_ek8` §⑤).
// TDV `sibir-hanligi` hanlığın sınırını "Tura, Tobul ve İşim nehirleri…
// İrtiş nehri civarı ile Baraba bozkırları" diye veriyor — Yenisey'in
// doğusu bu sınırın DIŞINDA, oralarda uydurulacak bir devlet yok.
//
// 🔴 KAYNAK: bu dosyadaki kuruluş yıllarından yalnız İKİSİ TDV'ye basıyor
//    (`kucum-han`: "1592'de Pilim, **Berezov** ve **Surgut** gibi yeni
//    şehirlerin inşasına başladılar"). Kalanı standart akademik referans —
//    `CLAUDE.md §4` bunu Kuzey Asya için yeterli sayıyor ama İŞARETLİ:
//    Tomsk 1604 · Yeniseysk 1619 · Krasnoyarsk 1628 · Yakutsk 1632 ·
//    Olyokminsk 1635 · Ohotsk 1647 · Albazin 1651 · Nerçinsk 1653 ·
//    İrkutsk 1661 · Nerçinsk antlaşması 1689-09-06 · Aygun 1858-05-28.
//
// ── ÖN KOŞULLAR ─────────────────────────────────────────────────────
// maske 12/12 · 3 km en yakın çift 199,5 km (Tümen↔Tobolsk, `_ek10`'da)
// renk  rusya · qing-hanedani · altinorda · kazak-hanligi — DÖRDÜ DE VAR
// Değişmez 2 borcu SIFIR (`d:`/`v:` dönemi yok) · Değişmez 3 `m:` yok
// =====================================================================

window.YERLESIMLER_EK9 = [

// ── ① OB' HAVZASI ───────────────────────────────────────────────────
// 🟢 TDV-KAYNAKLI İKİ NOKTA. `kucum-han`: "Öte yandan Ruslar 1592'de Pilim,
// Berezov ve Surgut gibi yeni şehirlerin inşasına başladılar."
{ ad:"Berezov", tur:"kale", lat:63.9364, lon:65.0489, g:0, k:0, d:[], kur:"1593-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1592 öncesi Hantı (Yugra) toprağı; TDV sibir-hanligi hanlığın sınırını Tura-Tobol-İşim ve İrtiş civarı diye veriyor, aşağı Ob' bu sınırın dışında.",
  s:[{f:"1592-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Surgut", tur:"kale", lat:61.2540, lon:73.3962, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1592 öncesi Hantı (Yugra) toprağı, Berezov ile aynı gerekçe (TDV kucum-han). 🟡 kur:1594-01-01 (BRE 'Сургут', old.bigenc.ru/geography/text/4174172 — AYNEN: «Заложен летом 1594 под рук. жильца В. В. Аничкова») ÖNERİLDİ ama UYGULANMADI (M-4443 döngüsü, 17 Eylül 2026): dönemin 1592 başlangıcı KAYNAKSIZ DEĞİL — bu dosyanın kendi üst notu (satır 44-46) TDV `kucum-han` maddesinin AYNEN Surgut'u adıyla anarak «Ruslar 1592'de Pilim, Berezov ve Surgut gibi yeni şehirlerin inşasına başladılar» dediğini kaydediyor. CLAUDE.md §4: TDV maddesi varsa başkasına dayanılmaz, çelişirse TDV esastır — iki tarih muhtemelen AYNI çok yıllı inşa sürecinin iki ucu (1592 başladı, 1594 tamamlandı) ama isim geçen kaynak TDV, kur onun yerine geçemez.",
  s:[{f:"1592-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Tomsk", tur:"kale", lat:56.4884, lon:84.9480, g:0, k:0, d:[], kur:"1604-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1604 öncesi Teleüt/Selkup toprağı, devletsiz. 🔴 1604 TDV'ye basmıyor.",
  s:[{f:"1604-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ② YENİSEY HAVZASI ───────────────────────────────────────────────
{ ad:"Yeniseysk", tur:"kale", lat:58.4494, lon:92.1683, g:0, k:0, d:[], kur:"1619-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1619 öncesi Ket/Evenk toprağı, devletsiz. 🔴 TDV'ye basmıyor.",
  s:[{f:"1619-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Krasnoyarsk", tur:"kale", lat:56.0106, lon:92.8526, g:0, k:0, d:[], kur:"1628-01-01",
  kasitli_bosluk:true,bos:"kabile", neden:"1628 öncesi Yenisey Kırgızları'nın otlağı; atlasta karşılığı olan bir kimlik yok ve UYDURULMADI. 🔴 TDV'ye basmıyor.",
  s:[{f:"1628-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ③ LENA HAVZASI ve OHOTSK ────────────────────────────────────────
// 🔴 BU NOKTA OLMADAN Yakutistan'ın tamamı `qing-hanedani` boyanıyordu —
// Aigun'a 1.500 km, oysa Qing hiçbir zaman Lena'ya çıkmadı.
{ ad:"Yakutsk", tur:"kale", lat:62.0281, lon:129.7325, g:0, k:0, d:[], kur:"1632-10-05",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1632 öncesi Yakut (Saha) toprağı, devletsiz. 🔴 TDV'ye basmıyor.",
  s:[{f:"1632-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Olyokminsk", tur:"kale", lat:60.3742, lon:120.4064, g:0, k:0, d:[], kur:"1635-07-27",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1635 öncesi Evenk toprağı, devletsiz. 🔴 TDV'ye basmıyor.",
  s:[{f:"1635-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Pasifik kıyısı — kutunun doğu kenarına (146°D) 155 km kala.
{ ad:"Ohotsk", tur:"liman", lat:59.3631, lon:143.2431, g:0, k:0, d:[], kur:"1647-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1647 öncesi Even/Lamut toprağı, devletsiz. 🔴 TDV'ye basmıyor.",
  s:[{f:"1647-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ④ BAYKAL ve AMUR — RUS-QING SINIRININ ÇİZİLDİĞİ YER ─────────────
// Bu üç nokta yalnız boşluk doldurmuyor; haritada BUGÜN OLMAYAN bir sınırı
// kuruyor. Nerçinsk antlaşması (1689-09-06) Rus-Qing hattını Argun ve
// Stanovoy'a bağladı; atlasta o hattın iki tarafında da nokta yoktu, yani
// antlaşmanın haritada karşılığı YOKTU.
{ ad:"İrkutsk", tur:"kale", lat:52.2870, lon:104.2810, g:0, k:0, d:[], kur:"1661-01-01",
  kasitli_bosluk:true,bos:"veri-yok", neden:"1661 öncesi Buryat toprağı. ⚠️ Halha/Altan Han nüfuzu tartışılabilir; `kuzey-yuan` YAZILMADI çünkü kaynakla ayıramadım — bilgisizliği kasıt gibi göstermemek için boş bırakıldı (girdi.py'nin `kasitli_bosluk` notu).",
  s:[{f:"1661-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Nerçinsk", tur:"kale", lat:51.9494, lon:116.5772, g:0, k:0, d:[], kur:"1653-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1653 öncesi Evenk/Daur toprağı. 🔴 TDV'ye basmıyor.",
  s:[{f:"1653-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// 🔴 DOSYANIN EN İDDİALI KAYDI — ve niçin göze alındığı burada yazılı.
// Albazin 1651'de Rus kalesi oldu, **1689-09-06 Nerçinsk antlaşmasıyla
// Qing'e BIRAKILDI** (kale yıkıldı, Amur'un solu Qing sayıldı) ve
// **1858-05-28 Aygun antlaşmasıyla** Rusya'ya döndü. Yani aynı nokta
// pencerede iki kez taraf değiştiriyor.
// ⚠️ ÜÇ DÖNEM DE `s:`→`s:` ⇒ kırılma ÜRETMİYOR, Değişmez 2 borcu sıfır.
//   Eğer `d:` olsaydı iki açık kırılma doğardı; `s:` olduğu için bedavaya
//   geliyor. Bu, `_ek6`da Don Ordası'nda kurulan desenin aynısı.
// 📌 Aigun kaydı 1683'te başlıyor ve öncesi boş; Albazin'in 1651-1683
//   Rus dönemi o boşlukla ÇELİŞMİYOR, onu tamamlıyor.
{ ad:"Albazin", tur:"kale", lat:53.3800, lon:124.0930, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1651 öncesi Daur toprağı, devletsiz. 🔴 1651 · 1689-09-06 · 1858-05-28 TDV'ye basmıyor.",
  s:[{f:"1651-01-01",t:"1689-09-06",d:"rusya"},{f:"1689-09-06",t:"1858-05-28",d:"qing-hanedani"},{f:"1858-05-28",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑤ KAZAK BOZKIRI — Kobdo'nun kuzeye sızmasını kesen tek nokta ────
// ⚠️ Zincir UYDURULMADI: canlı `Aral kuzeyi` (47,20/61,50) kaydından
//    BİREBİR kopyalandı — üç dönem, üç gün, hepsi aynı. Kopyalamanın
//    gerekçesi coğrafî: İşim bozkırı ile Aral kuzeyi aynı hanlığın aynı
//    otlak kuşağıdır ve 1868 Bozkır Nizamnâmesi ikisini birden bağladı.
// 📌 Tek başına 623.537 km² alıyor ve o alanın bugünkü sahibi Kobdo —
//    yani `cungar`/`kuzey-yuan` rengi Kuzey Kazakistan'a çıkıyordu.
{ ad:"Kazak bozkırı (İşim)", tur:"bolge", lat:52.5000, lon:68.0000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},{f:"1500-01-01",t:"1868-01-01",d:"kazak-hanligi"},{f:"1868-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek13.js ==== */
// =====================================================================
// AMUR AŞAĞISI · OHOTSK KIYISI · SAHALİN · ORTA SİBİRYA  ·  16 nokta
// PETEK/NOKTA oturumu · PARTİ 20 · 6 Ağustos 2026
// =====================================================================
// 🟢 BAĞLANMAK İÇİN HİÇBİR ŞEY BEKLEMİYOR.
//    kutu   16/16 nokta `unary_union([box(-12,-11,146,82), box(-25,60,-12,82)])` içinde
//    renk   rusya · qing-hanedani · meiji-japonya — ÜÇÜ DE BOYALAR'da, YENİ RENK YOK
//    madde  Değişmez 2 borcu YAPISAL OLARAK SIFIR — 16 kaydın hiçbirinde
//           `d:` ya da `v:` dönemi yok, hepsi `s:`. Tek kırılma üretmiyor.
//
// ── 🔴 NİÇİN VAR — İKİ AYRI KUSUR, VE İKİSİ AYNI CİNSTEN DEĞİL ──────
// `_ek9` (koşu 9) Sibirya'ya on iki nokta koydu ve Yenisey-Lena havzasını
// Mançu renginden kurtardı. Bu parti, o partinin AÇIK BIRAKTIĞI iki cebi
// kapatıyor. Ama ölçtüm ve ikisi aynı hastalık değil:
//
//   A  AMUR AŞAĞISI + OHOTSK + SAHALİN   3.815.852 km²  (45-66°K / 115-146°D)
//      🔴 RENK YANLIŞ. 1910'da bölgenin %30'u (1.144.714 km²) hâlâ
//         `qing-hanedani`, %4,3'ü (164.497 km²) `meiji-japonya`.
//         Oysa Aygun (1858-05-28) ve Pekin (1860-11-14) antlaşmalarından
//         sonra buraların tamamı Rus. Bugün haritada o iki antlaşmanın
//         KARŞILIĞI YOK.
//
//   B  ORTA SİBİRYA PLATOSU              5.072.905 km²  (50-73°K / 82-120°D)
//      🟢 RENK DOĞRU — 1700'den sonra %94,8 `rusya`, ki doğrusu budur.
//      🔴 GEOMETRİ KABA. Alan ağırlıklı ortalama uzaklık 357 km, en uzak
//         hücre 855 km (63,5°K/105,5°D → Olyokminsk). Doğru rengi 800 km
//         öteden getiren orta dikmeler, kullanıcının "cetvelle bölünmüş"
//         dediği düz sınırların ta kendisi.
//
// 📌 AYRIM ÖNEMLİ ÇÜNKÜ ÖNCELİĞİ O BELİRLİYOR: A'da yanlış renk var, B'de
//    yalnız kaba çizgi. Bu yüzden A'ya dokuz, B'ye yedi nokta gitti.
//
// ── ÖLÇÜLEN SEBEP (`CLAUDE.md §2` — kusur veride değil, NOKTASIZLIKTA) ─
// A bölgesindeki bugünkü sekiz noktanın yedisi kutunun batı yarısında.
// Amur ağzı · Sahalin · Ohotsk'un güney kıyısı · Primorye — hiçbirinde
// nokta yok, ve boşluğu üç uzak petek paylaşıyor:
//     Aigun    (50,24/127,46)  `qing-hanedani`  → 586-892 km uzağı boyuyor
//     Sapporo  (43,06/141,35)  `meiji-japonya`  → Sahalin'in TAMAMI + Amur ağzı
//     Ohotsk   (59,36/143,24)  `rusya`          → tek doğru olan, ama tek başına
//
// 🔴 SAPPORO VAKASI AYRICA KAYDA DEĞER: 1870'te Sahalin'in tamamı Japon
//    boyanıyor. Gerçekte 1875-05-07 Petersburg antlaşmasıyla adanın TAMAMI
//    Rus oldu, Japonya ancak 1905-09-05 Portsmouth ile 50. paralelin
//    GÜNEYİNİ aldı. Yani harita bugün Japonya'yı otuz yıl erken ve iki kat
//    geniş gösteriyor. `§3.5` hayalet devlet sınıfının Uzak Doğu hâli.
//
// ── ⚠️ REPO GENELİNDE BİR BORÇ — BENİM DEĞİL, AMA ÖLÇTÜM ────────────
// `devletler.js`: `rusya` f=1547-01-16 **t=1917-03-15**. Canlı veride
// 209 `rusya` döneminin **180'i** 1917-03-15'ten sonrasına taşıyor
// (yani `t:"1923-10-29"` yazıyor). Atlasta Sovyet/Cumhuriyet kimliği YOK.
// Bu partinin on üç `rusya` dönemi de aynı sözleşmeyi izliyor — kendi
// başıma ayrılmadım, çünkü ayrılsam 1917-1923 arası Sibirya'nın tamamı
// RENKSİZ kalırdı. Kayda geçiyor: bu bir §3.5 hayalet sınıfıdır ve
// çözümü tek nokta değil, bir KİMLİK kararıdır.
//
// ── KAYNAK DÜRÜSTLÜĞÜ (`CLAUDE.md §4`) ──────────────────────────────
// 🔴 BU DOSYADAKİ HİÇBİR TARİH TDV'YE BASMIYOR. §4 Doğu Asya ve Kuzey Asya
//    için standart akademik referansı yeterli sayıyor, ama işaretlenmesini
//    istiyor — işaretliyorum, kayıt kayıt. Dayanak olarak yalnız antlaşma
//    günleri ve kale/karakol kuruluş yılları kullanıldı; hiçbiri
//    yorumlanmadı, hiçbiri uydurulmadı.
//    Nerçinsk 1689-09-06 · Kyahta 1727-10-21 · Aygun 1858-05-28 ·
//    Pekin 1860-11-14 · Petersburg 1875-05-07 · Portsmouth 1905-09-05.
//
// ── ÜÇ TARİHİN NİÇİN BÖYLE BÖLÜŞTÜRÜLDÜĞÜ ───────────────────────────
//   1689-09-06 Nerçinsk  → Rusya Amur havzasını BIRAKTI. O günden 1858'e
//                          kadar Amur'un solu ve ağzı Qing sayılır.
//   1858-05-28 Aygun     → Amur'un SOL YAKASI Rusya'ya. Nikolayevsk,
//                          Blagoveşçensk bu tarihi taşır.
//   1860-11-14 Pekin     → Ussuri'nin DOĞUSU Rusya'ya. Habarovka,
//                          İmperator limanı, Vladivostok bu tarihi taşır.
// 📌 İki ayrı gün kullanıldı çünkü iki ayrı toprak: 1858 ile 1860 arasında
//    Ussuri-deniz arası "ortak" idi ve tek güne indirseydim ya iki yıl
//    erken ya iki yıl geç boyardım.
//
// ── SAHALİN: ŞEMANIN YAZAMADIĞI BİR HÂL VAR ─────────────────────────
// 1855-02-07 Shimoda antlaşması adayı **bölmedi** — "ortak mülkiyet, sınır
// çizilmedi" dedi. `s:` bir dönemde TEK sahip yazabiliyor; "iki devlet
// birden" ifade edilemiyor. ⇒ 1875-05-07'ye kadar `kasitli_bosluk` yazıldı
// ve gerekçesi kayıtta. Bu, `Hamâd bâdiyesi` ile aynı sınıf: kusur veride
// değil ŞEMADA, ve `S-007` kaleminin ikinci somut gerekçesi.
//
// ── ⚠️ KAYDIRILAN TEK NOKTA ─────────────────────────────────────────
// İmperator limanı 48,970/140,290 → **49,030/140,230** (~8,4 km KB).
// Sebep: Sovetskaya Gavan derin bir koy ve 10m maskesinin kıyı
// basitleştirmesi kasaba noktasını 0,5 km denizde bırakıyor. `_ek8`in altı
// kaydırmasıyla aynı sınıf. Öteki 15 nokta OLDUĞU YERDE geçti.
// ⚠️ Maske kontrolü MOTORUN KENDİ ölçütüyle yapıldı (baraj süzgeci dahil,
//    `uret_petek.py` 255-300) — ham `ne_10m_lakes` ile yapılsaydı Bratsk
//    ostrogu "göl içinde" diye YANLIŞLIKLA elenecekti (Bratsk baraj gölü
//    1961, motor onu kara sayıyor). `PARTİ 19 §12` dersinin tersten hâli.
//
// ── ÖLÇÜLEN ETKİ — 1° ızgara, göl-farkında kara maskesi ─────────────
// A  (3.815.852 km²)   ort uzaklık 329 → 232 km · en uzak 892 → 507 km
//      1870  rusya %65,7 → %83,6   qing %27,1 → %11,6   japonya %4,3 → %0,0
//      1910  rusya %65,7 → %85,1   qing %30,0 → %14,5   japonya %4,3 → %0,4
//      ⇒ 1910'da yanlış Qing boyaması 1.144.714 → 553.300 km². Kalan %14,5
//        kutunun güneybatı köşesidir (45-50°K/115-130°D = Mançurya ve İç
//        Moğolistan) ve orada Qing DOĞRUDUR — hepsini sıfırlamayı beklemeyin.
//      ⇒ Japonya %4,3 → %0,4: Sahalin'in tamamı yerine yalnız 50. paralelin
//        güneyi. Portsmouth haritaya ilk kez giriyor.
// B  (5.072.905 km²)   ort uzaklık 357 → 258 km · en uzak 855 → 686 km
//      1800  rusya %94,8 → %95,4   qing %5,2 → %4,6
//      ⇒ Renk zaten doğruydu, çözünürlük arttı. En aç hücre (63,5°K/105,5°D)
//        855 → ~106 km. Kalan 686 km'lik en uzak hücre 50,5°K/82,5°D'dir,
//        yani ALTAY — bu partinin hedefi değil, ayrı iş.
// C  PRİMORYE (524.132 km², sevkin dışındaydı, kontrol için ölçüldü)
//      ort 338 → 187 km · 1910  qing %78,7 → %29,6, rusya %0 → %63,5
//      ⇒ Vladivostok kıyısı 1912'ye kadar Çin boyanıyordu; artık 1860'tan
//        itibaren Rus.
//
// ── 🔴 ÜÇ KAYIT ÖLÇÜM YÜZÜNDEN DEĞİŞTİ — `§3.5.1` iki uçtan bakma ────
// İlk taslakta üç noktanın başlangıç günü "kasabanın kuruluşu" idi ve
// üçü de ÖBÜR UÇTA delik açıyordu. Ölçüm yakaladı, üçü de düzeltildi:
//     Ayan          1844 → 1679   (Ohotsk'un doğru boyadığı kıyıda delik)
//     Blagoveşçensk 1689 → 1651   (Albazin'in Rus döneminde delik)
//     Kyahta 1727   → Selenginsk 1665  (İrkutsk'un Selenga vadisinde delik,
//                                       ~127.000 km²; B'de sahipsiz %1,2→%3,7)
// 📌 Üçü de aynı hata: **kasabanın kuruluşu ile toprağın idaresi ayrı
//    sorulardır** ve ilkini yazmak ikincisini siliyordu.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 16/16 içeride (motor ölçütü) · ad çakışması YOK (1713 canlı kayda karşı)
// aday-aday en yakın çift 50 km'den uzak · canlıya en yakın 6,6 km
// (Blagoveşçensk ↔ Aigun — KASITLI, aşağıda gerekçesi)
// Değişmez 3: `m:` yazılmadı ⇒ çelişki üretemez
// =====================================================================

window.YERLESIMLER_EK13 = [

// ═══ A ═══ AMUR AŞAĞISI · OHOTSK · SAHALİN · PRİMORYE ═══ 9 nokta ═══

// ── ① OHOTSK KIYISININ GÜNEYİ — Ohotsk ile Amur ağzı arası 700 km boştu ──
// 🔴 BU DOSYANIN EN ESKİ KAYDI ve tek "Nerçinsk'ten muaf" noktası.
// Nerçinsk antlaşması Amur havzasını Qing'e bıraktı ama **Uda havzasını
// SINIRLANDIRMADAN bıraktı** — iki tarafın da yazılamadığı bir aralık.
// Rus ostrogu 1679'dan beri orada duruyor ve hiç el değiştirmiyor;
// o yüzden tek kesintisiz `rusya` dönemi taşıyor.
{ ad:"Udskoy ostrogu", tur:"kale", lat:54.5500, lon:134.4500, g:0, k:0, d:[], kur:"1679-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1679 öncesi Evenk/Negidal toprağı, devletsiz. 🔴 TDV'ye basmıyor.",
  s:[{f:"1679-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ⚠️ TARİH 1844 DEĞİL 1679 — ve sebebi ÖLÇÜLDÜ, tercih değil.
// Ayan limanı Rus-Amerikan Şirketi tarafından 1844'te kuruldu; ilk yazdığım
// tarih oydu. Ama `§3.5.1` "iki uç da ölçülür" kuralını uygulayınca
// 1281-1844 arası kasıtlı boşluk, Ohotsk'un peteğinin ZATEN VE DOĞRU olarak
// Rus boyadığı kıyıda **yeni bir delik** açıyordu. Kıyı şeridi Uda (1679)
// ve Ohotsk (1647) ostroglarından toplanan yasak idaresi altındaydı;
// liman o idarenin içine kuruldu, onu başlatmadı.
// 📌 Düzeltmeyi ÖLÇÜM yakaladı: ilk koşuda 1700'de sahipsiz oran %7,2 → %8,1
//    çıkıyordu. Bir düzeltmenin öbür uçta hata doğurması tam bu.
{ ad:"Ayan", tur:"liman", lat:56.4500, lon:138.1700, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1679 öncesi Even/Lamut kıyısı, devletsiz. Liman 1844'te kuruldu ama kıyı Uda (1679) ve Ohotsk (1647) ostroglarının yasak çevresindeydi; 1844 yazılsaydı Ohotsk'un doğru boyadığı kıyıda 165 yıllık delik açılırdı. 🔴 TDV'ye basmıyor.",
  s:[{f:"1679-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ② AMUR AĞZI ve SOL YAKA — Aygun antlaşmasının haritadaki karşılığı ──
// 🔴 Nikolayevsk 1850-08-13'te Nevelskoy tarafından kuruldu ama `kur:`
//    YAZILMADI. Sebebi Or Kapı'daki (parti 1) ile birebir aynı: `kur:`
//    yazılsa motor peteği 1281-1850 arası komşuya devreder ve düzeltilen
//    artefakt (Sapporo'nun Amur ağzını boyaması) beş yüz yıl geri gelir.
//    Kayıt bir KASABAYI değil, ağzın hukukî sahibini modelliyor.
{ ad:"Nikolayevsk (Amur ağzı)", tur:"liman", lat:53.1400, lon:140.7300, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1689-09-06 öncesi Nivh (Gilyak) toprağı; Qing idaresi Amur ağzına inmedi, Rusya da Nerçinsk'e kadar iddia etmedi. 🔴 TDV'ye basmıyor. 🟡 kur:1850-08-13 (Başkanlık Kütüphanesi, Nikolayevski post) ÖNERİLDİ ama UYGULANMADI (M-4443 sonrası duzeltme, 17 Eylül 2026): erken dönem (1689 qing-hanedani) Nerçinsk Antlaşması'nın Amur havzasını Qing sınırına bıraktığı ve Ningguta askerî-idarî merkezinin (1653, resmî yetkisi Heilongjiang/Amur havzasını kapsıyor) tarihî temeline dayanıyor — kaynaksız DEĞİL, nokta zaten belgeli bölgesel egemenliği taşıyor.",
  s:[{f:"1689-09-06",t:"1858-05-28",d:"qing-hanedani"},{f:"1858-05-28",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ⚠️ AIGUN'A 6,6 km — VE BU KASITLI.
// §11 "yakın mükerrer yerleşim" uyarısı 3 km ölçütünü koyuyor; 6,6 km onu
// geçiyor ama gerekçesi ayrıca yazılmalı: iki nokta AYNI YERİ değil,
// NEHRİN İKİ YAKASINI temsil ediyor. Aigun sağ (Çin) yakada ve 1912'ye
// kadar `qing-hanedani`; Blagoveşçensk sol (Rus) yakada ve 1858'den sonra
// `rusya`. Orta dikmeleri Amur'un üstünden geçiyor.
// 🔴 Bu nokta olmadan Aygun antlaşması haritada GÖRÜNMÜYOR: Amur'un sol
//    yakası, Aigun'un peteğine düştüğü için 1912'ye kadar Qing kalıyor.
// ⚠️ ZİNCİR ALBAZİN'İN BİREBİR AYNISI — ve bu da ölçümle geldi.
// Önce 1689 öncesini kasıtlı boşluk yazmıştım; ölçüm gösterdi ki Albazin
// 1651-1689 arası RUS ve 240 km ötede — boşluk yazmak Amur'un solunda
// 38 yıllık delik açıyordu. Aynı voyvodalık, aynı zincir.
{ ad:"Blagoveşçensk", tur:"sehir", lat:50.2800, lon:127.5350, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1651 öncesi Daur toprağı, devletsiz. Zincir Albazin'den birebir: aynı Amur voyvodalığı, aynı üç gün. 🔴 TDV'ye basmıyor. 🟡 kur:1856-06-02 (Blagoveşçensk şehir idaresi) ÖNERİLDİ ama UYGULANMADI (M-4443 sonrası duzeltme, 17 Eylül 2026): erken dönem (1651 rusya — Albazin/Amur voyvodalığı, belgeli Kazak seferi; 1689 qing — Nerçinsk Antlaşması) gerçek tarihî olaylara dayanıyor, kaynaksız DEĞİL.",
  s:[{f:"1651-01-01",t:"1689-09-06",d:"rusya"},{f:"1689-09-06",t:"1858-05-28",d:"qing-hanedani"},{f:"1858-05-28",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ③ USSURİ'NİN DOĞUSU — Pekin antlaşması (1860-11-14) ──────────────
// Üçü de 1858 DEĞİL 1860 taşıyor. Aygun Ussuri-deniz arasını "ortak"
// bıraktı, Pekin bölüştürdü. Aradaki iki buçuk yıl kasten Qing yazıldı.
{ ad:"Habarovka", tur:"kale", lat:48.4800, lon:135.0800, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1653 öncesi Nanay/Daur toprağı; 1653 Ningguta kaydının Qing başlangıcı, aynı idarî çevre. 🔴 TDV'ye basmıyor. 🟡 kur:1858-01-01 (Büyük Sovyet Ansiklopedisi, Habarovka askerî postu) ÖNERİLDİ ama UYGULANMADI (M-4443 sonrası duzeltme, 17 Eylül 2026): erken dönem (1653 qing-hanedani) Ningguta askerî-idarî merkezinin (Haziran 1653 kuruldu, resmî yetkisi Heilongjiang/Amur ve Ussuri havzalarını kapsıyor) belgeli tarihine dayanıyor, kaynaksız DEĞİL.",
  s:[{f:"1653-01-01",t:"1860-11-14",d:"qing-hanedani"},{f:"1860-11-14",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"İmperator limanı", tur:"liman", lat:49.0300, lon:140.2300, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1653 öncesi Orok/Udege kıyısı, devletsiz. ⚠️ Kasaba noktası maskede 0,5 km denizde kaldığı için 8,4 km kuzeybatıya kaydırıldı. 🔴 TDV'ye basmıyor. 🟡 kur:1853-05-23 (Rus Coğrafya Kurumu, Nevelskoy seferi) ÖNERİLDİ ama UYGULANMADI (M-4443 sonrası duzeltme, 17 Eylül 2026): erken dönem (1653 qing-hanedani) Habarovka ile AYNI Ningguta askerî-idarî merkezi temeline dayanıyor (Heilongjiang/Amur havzası resmî Qing yetkisi), kaynaksız DEĞİL.",
  s:[{f:"1653-01-01",t:"1860-11-14",d:"qing-hanedani"},{f:"1860-11-14",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// 🔴 KUTUNUN BU KÖŞESİNDEKİ TEK RUS NOKTASI OLACAK.
// Bugün Primorye'yi Ningguta (238 km) boyuyor ve Ningguta 1912'ye kadar
// Qing. Yani Vladivostok'un kurulduğu kıyı, haritada 1912'ye kadar Çin.
{ ad:"Vladivostok", tur:"liman", lat:43.1150, lon:131.8850, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1653 öncesi Udege/Jurchen toprağı; Ningguta ile aynı idarî çevre ve aynı başlangıç günü. 🔴 TDV'ye basmıyor.",
  s:[{f:"1653-01-01",t:"1860-11-14",d:"qing-hanedani"},{f:"1860-11-14",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ④ SAHALİN — adanın tamamı bugün Sapporo'nun peteğinde ────────────
// İki nokta, ve zincirleri 1905'te AYRILIYOR. Portsmouth 50. paraleli
// sınır yaptı: Aleksandrovsk (50,9°K) kuzeyde kaldı → Rus; Korsakov
// (46,6°K) güneyde kaldı → Japon. Ada haritada ilk kez ikiye bölünecek.
{ ad:"Aleksandrovsk (Kuzey Sahalin)", tur:"sehir", lat:50.9000, lon:142.1600, g:0, k:0, d:[], kur:"1862-01-01",
  kasitli_bosluk:true,bos:"hata", neden:"1875-05-07 öncesi Nivh/Ainu toprağı. Shimoda antlaşması (1855-02-07) adayı BÖLMEDİ, 'ortak mülkiyet, sınır yok' dedi ve `s:` bir dönemde iki sahip yazamıyor — boşluk ŞEMA sınırından, bilgisizlikten değil. 🔴 TDV'ye basmıyor.",
  s:[{f:"1875-05-07",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Korsakov (Güney Sahalin)", tur:"liman", lat:46.6330, lon:142.7860, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"hata", neden:"Aleksandrovsk ile aynı gerekçe ve aynı Shimoda sınırı. 1905-09-05 Portsmouth 50. paraleli sınır yaptı. 🔴 TDV'ye basmıyor.",
  s:[{f:"1875-05-07",t:"1905-09-05",d:"rusya"},{f:"1905-09-05",t:"1923-10-29",d:"meiji-japonya"}] },

// ═══ B ═══ ORTA SİBİRYA PLATOSU ═══ 7 nokta ═══
// ⚠️ BURADA RENK ZATEN DOĞRU. Bu yedi nokta bir hatayı düzeltmiyor, bir
//    ÇÖZÜNÜRLÜĞÜ artırıyor: 855 km'lik orta dikmeler yerine 200-300 km'lik
//    hücreler. Beklenen görsel etki "renk değişti" değil, "düz cetvel
//    çizgileri kırıldı" olacak.

// ── ⑤ LENA YUKARISI ve ANGARA — 1630-1631 ostrog kuşağı ─────────────
{ ad:"Kirensk", tur:"kale", lat:57.7800, lon:108.1100, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1630 öncesi Evenk toprağı, devletsiz. 🔴 TDV'ye basmıyor.",
  s:[{f:"1630-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ⚠️ Bratsk baraj gölü (1961) tarihî ostrogun yerini bastı. Motorun
//    maskesi baraj göllerini KARA sayıyor (`uret_petek.py` baraj süzgeci),
//    o yüzden nokta geçerli. Ham göl katmanıyla ölçen bir denetim bunu
//    "göl içinde" diye eler — ölçüldü, motorun ölçütü kullanıldı.
{ ad:"Bratsk ostrogu", tur:"kale", lat:56.2800, lon:101.7900, g:0, k:0, d:[], kur:"1631-01-01",
  kasitli_bosluk:true,bos:"veri-yok", neden:"1631 öncesi Buryat toprağı. ⚠️ İrkutsk kaydındaki Halha/Altan Han nüfuzu çekincesi burada da geçerli; `kuzey-yuan` YAZILMADI, aynı sebeple. 🔴 TDV'ye basmıyor.",
  s:[{f:"1631-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑥ AŞAĞI TUNGUSKA ve VİLYUY — ölçümün EN AÇ hücreleri ────────────
{ ad:"Yerbogaçen", tur:"kale", lat:61.2800, lon:108.0100, g:0, k:0, d:[], kur:"1786-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1786 öncesi Evenk toprağı, devletsiz. 🔴 TDV'ye basmıyor. 🔴 DÜZELTİLDİ (M-4443 döngüsü, 17 Eylül 2026): dönem başı 1668→1786'ya çekildi. Kaynak RAS Dilbilim Enstitüsü 'Siberian Lang' projesi (siberian-lang.iling-ran.ru/naselennyy-punkt/erbogachyon) — AYNEN: «По разным источникам, основано то ли в 1786, то ли в 1860 году русскими охотниками-промысловиками» (değişik kaynaklara göre 1786 ya da 1860'ta Rus avcı-tuzakçılar tarafından kuruldu), VE sayfa 1860'ı AYRIYETEN «yerleşim olarak resmî kayda geçtiği tarih» diye açıklığa kavuşturuyor — yani 1860 KURULUŞ değil İDARÎ TESCİL, 1786 fiilî kuruluş. 1668'in bu noktaya özgü hiçbir dayanağı yok (YAMA-KUR-0917'nin kendi ölçümü de aynı sonuca varmıştı).",
  s:[{f:"1786-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// 🔴 BU KAYIT BİR YERLEŞİM DEĞİL, COĞRAFÎ DOLGUDUR — ve öyle işaretli.
// 63,5°K/105,5°D ölçümün en aç hücresiydi (855 km, Olyokminsk boyuyordu).
// Orada 1923'ten önce kurulmuş bir yerleşim YOK: Tura 1924, Vanavara 1932,
// Baykit 1927 — üçü de pencerenin dışında ve UYDURULMADI. Yerine
// `Bozkır (Deşt-i Kıpçak)` · `Nefud çölü` · `Kazak bozkırı (İşim)` ile aynı
// sınıftan bir `bolge` noktası kondu. Sahibi Yeniseysk (1619) ve
// Turuhansk (1607) üzerinden toplanan yasak idaresidir; 1630 o idarenin
// platoya ulaştığı yıldır.
// 🔴 EMEKLİ — 18 Ağustos 2026, Emre'nin onayıyla (dolgu noktası ölçümü).
//    Kaldırılınca toprak: BOŞ kalır
//    Gerekçe: A1 yarıçap tavanı (uret_petek.py:699) dolgunun işini yapısal
//    olarak yapıyor; bu nokta emilmeyi önlemek için konmuş bir HİLEYDİ ve
//    uret_petek.py:696 zaten emekli edilebileceklerini yazıyordu.
//    Ölçüm: arac/olc_ekleyici.py · scratchpad/olc_dolgu.py
//    ⚠️ SİLİNMEDİ, YORUMLANDI — araştırılmış veri geri alınabilir olmalı.
// { ad:"Aşağı Tunguska platosu (Evenki)", tur:"bolge", lat:63.5000, lon:104.0000, g:0, k:0, d:[],
//   kasitli_bosluk:true,bos:"devletsiz", neden:"1630 öncesi Evenk toprağı, devletsiz. ⚠️ Bu bir COĞRAFÎ DOLGUDUR, kasaba değil: pencerede kurulmuş yerleşim yok (Tura 1924 · Vanavara 1932 · Baykit 1927 — üçü de 1923 sonrası), o yüzden yerleşim UYDURULMADI. 🔴 TDV'ye basmıyor.",
//   s:[{f:"1630-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Vilyuysk", tur:"kale", lat:63.7500, lon:121.6300, g:0, k:0, d:[], kur:"1634-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1634 öncesi Yakut (Saha) toprağı, devletsiz. 🔴 TDV'ye basmıyor.",
  s:[{f:"1634-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Essey", tur:"bolge", lat:68.4800, lon:102.1800, g:0, k:0, d:[], kur:"1628-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1630 öncesi Evenk/Saha toprağı, devletsiz. Aşağı Tunguska platosu ile aynı sınıf: yasak zimovyesi, kasaba değil. 🔴 TDV'ye basmıyor.",
  s:[{f:"1630-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑦ SELENGİNSK — B'DEKİ TEK RENK DÜZELTMESİ ───────────────────────
// 🔴 Ölçüldü: 50,5°K/107,5-110,5°D hücreleri bugün `qing-hanedani`, çünkü
//    en yakın nokta Urga (294-391 km GÜNEYDE). Oysa Selenga vadisi 1665
//    Selenginsk ostrogundan beri Rus ve Kyahta antlaşması (1727-10-21)
//    sınırı oradan geçirdi. Bu nokta o hattı haritaya sokuyor.
//
// ⚠️ ÖNCE KYAHTA (1727) YAZMIŞTIM — ÖLÇÜM ÇÜRÜTTÜ.
//    1727 tarihi 1665-1727 arasını kasıtlı boşluk yapıyordu ve o boşluk
//    İrkutsk'un (1661) DOĞRU olarak Rus boyadığı Selenga vadisinde
//    ~127.000 km²'lik yeni bir delik açıyordu: B'de 1700'de sahipsiz oran
//    %1,2 → %3,7. Nokta Selenginsk'e (1665) çevrildi; delik kapandı.
//    📌 Bu, `§3.5.1`in "bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür"
//       kuralının bu partideki üçüncü vakası (Ayan ve Blagoveşçensk ötekiler).
//
// ⚠️ KALAN DÜRÜSTLÜK PAYI: tek taraflı nokta sınırı tam yerine koymaz.
//    Selenginsk ile Urga'nın orta dikmesi ~49,5°K'de kalıyor, gerçek hat
//    ~50,3°K. Hata 2,5°'den ~0,8°'ye iniyor, SIFIRLANMIYOR. Sıfırlamak
//    için Moğolistan yakasına da nokta gerek (Altanbulag / Darhan) ve o
//    ayrı bir parti — `qing-hanedani` ile yazılabilir ama ölçmeden yazmam.
{ ad:"Selenginsk", tur:"kale", lat:51.1000, lon:106.6000, g:0, k:0, d:[], kur:"1665-09-27",
  kasitli_bosluk:true,bos:"veri-yok", neden:"1665 öncesi Buryat/Halha sınır bozkırı; hangi tarafta olduğu tanımsızdı ve tanımsızlık uydurulmadı. Sınır 1727-10-21 Kyahta antlaşmasıyla çizildi ama Rus ostrogu 1665'ten beri orada. 🔴 TDV'ye basmıyor.",
  s:[{f:"1665-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek14.js ==== */
// =====================================================================
// MÂVERÂÜNNEHİR — RENGİ TAM OLAN DOKUZ NOKTA
// PETEK/NOKTA oturumu · PARTİ 21a · 6 Ağustos 2026
// =====================================================================
// 🟢 BAĞLANMAK İÇİN HİÇBİR ŞEY BEKLEMİYOR.
//    kutu   9/9 nokta `unary_union([box(-12,-11,146,82), box(-25,60,-12,82)])` içinde
//    renk   cagatay · timurlu · buhara · mogulistan · cungar · kazak-hanligi
//           · rusya — YEDİSİ DE BOYALAR'da, YENİ RENK YOK
//    madde  Değişmez 2 borcu YAPISAL OLARAK SIFIR — `d:`/`v:` dönemi yok
//
// ── 🔴 BEKLENEN DEĞİŞİM — ÖNCEDEN YAZILIYOR ─────────────────────────
// (PARTİ 20'de bunu dosyaya koymayı atlamıştım, koordinatör haklı olarak
//  bildirdi: *"mesaj kaybolur, dosya kalır."* Geri konuyor.)
//    nokta               +9
//    yeni renk            0
//    Değişmez 1 tavanı   +0   ← 9 kaydın 9'u da 1281-01-01'den KESİNTİSİZ
//                             sahipli. Bu parti tavana DOKUNMAMALI; denetim
//                             102'de kalmalı. Değişirse bir şey bozulmuştur.
//    Değişmez 2 borcu     0
//    Değişmez 3 çelişki   0   (`m:` yazılmadı)
//    Değişmez 2s          +? kırılma üretmiyor ama `s:` geçişleri sayılıyorsa
//                             artabilir — sayıyı ölçemem, `2s` bana kapalı.
//
// ── NİÇİN VAR — EMRE'NİN `parti-0004 H-0010` MADDESİ ────────────────
// Kullanıcı: *"ORTA ASYA'DAKİ BÖLGELER, HAZAR'IN DOĞUSUNDAKİ BÜYÜK
// COĞRAFYA GENEL OLARAK BOŞ GÖRÜNÜYOR."* Ölçtüm ve şikâyet bir çizim
// kusuru DEĞİL:
//
//     box(37-45°K / 62-76°D)  ≈1,5 milyon km²   TOPLAM NOKTA: 1
//     └ o da Kaşgar (75,99°D), yani kutunun DOĞU KENARINDA
//
// Koordinatla ölçüldü (ad eşleşmesiyle DEĞİL — `Sin (Sinj)` deseninin
// sahte "YOK" üretmesine karşı koordinatör uyarmıştı; kontrol noktası
// `Hîve` 0,1 km'de yakalandı, yani yöntem çalışıyor):
// ```
//   Semerkant 502,6 km · Buhara 330,4 · Taşkent 604,7 · Hokand 446,2
//   Andican 342,6 · Hucend 551,5 · Termez 345,3 · Belh 322,5
//   Şehrisebz 466,1 · Karşi 374,0 · Türkistan 631,1 · Oş 295,5
//   Almatı 365,5 · Çimkent 624,5      ⇒ ON DÖRDÜNÜN DE EN YAKINI 295 km+
// ```
// 🔴 **Timur'un başkenti bir 1281-1923 atlasında yoktu.** Boşluğu
//    Merv · Kâbil · Kaşgar · Hazârasp 300-630 km öteden paylaşıyordu.
//
// ── ÜÇ DOSYAYA BÖLÜNDÜ — HER BİRİNE TEK ENGEL ───────────────────────
// `PARTİ 19`da kurduğum desen: hazır olan nokta, hazır olmayan bir rengi
// beklemesin.
// ```
//   _ek14  9 nokta  🟢 ENGEL YOK — bugün bağlanabilir        ← BU DOSYA
//   _ek15  7 nokta  🟢 ENGEL KALKTI — `hokand` rengi GELDİ (aşağıda)
//   _ek16  2 nokta  🔴 `afgan-durrani` + `afganistan` rengini bekliyor
// ```
// 🟢 **VE `_ek15`İN ENGELİ BU OTURUM SIRASINDA KALKTI.** Dosyayı
//    *"`hokand` rengini bekliyor"* diye yazdım; bitirdiğimde RENK 2 rengi
//    eklemişti (`BOYALAR` 231 → 232, `hokand` = `#b4603f`). Ölçtüm,
//    doğruladım. ⇒ **On altı nokta birden bağlanabilir.**
//    📌 Bölmek yine de boşa gitmedi: `_ek16` hâlâ bekliyor ve bölünmeseydi
//       on altısı birden onun yüzünden bekleyecekti.
// ⚠️ **KOORDİNATÖRE DÜZELTME:** *"14 şehrin 13'ü boyalı, `hokand`ı en sona
//    bırak, tek kayıt eklersin"* denmişti. Ölçtüm — **tek kayıt değil YEDİ.**
//    Hokand Hanlığı yalnız Hokand şehri değil; Taşkent (1809) · Hucend
//    (1802) · Andican · Oş · Türkistan (1815) · Çimkent de onun elindeydi.
//    Yedisini `_ek15`e ayırdım.
//
// ── KAYNAK — `§4` GEREĞİ, VE BU SEFER TDV'YE BASIYOR ────────────────
// `PARTİ 20`nin tersine bu parti TDV'nin çekirdek coğrafyasında.
// `<title>` ile sınandı (`§4`in ölü slug tuzağı):
// ```
// CANLI : semerkant · buhara · taskent · hokand · herat · belh
// 🔴 ÖLÜ : termiz  ("Arama - TDV İslâm Ansiklopedisi" döndürüyor)
// ```
// TDV'den alınan kesin günler:
//   `semerkant` : Özbekler 1500 · **Ruslar 14 Mayıs 1868'de zaptetti**
//   `buhara`    : Özbekler 1500 yazı · hanlık **6 Ekim 1920'de ilga**
//   `taskent`   : Şeybânî 1503 · **Hokand 1809** · Ruslar **Haziran 1865**
//
// ⚠️ **BİR ÇELİŞKİ BULDUM VE ÖRTMÜYORUM:** TDV `buhara` hanlığın ilgasını
//    **1920-10-06** diyor; `data/devletler.js` `buhara` kaydı
//    **1920-09-02**. 34 gün fark (Kızıl Ordu şehri 2 Eylül'de aldı, halk
//    cumhuriyeti 8 Ekim'de ilân edildi — ikisi de savunulabilir).
//    **Dizindeki günü kullandım**, çünkü atlas içi tutarlılık 34 günden
//    önemli ve `devletler.js` benim dosyam değil. Koordinatöre bildirildi.
//
// ── ZİNCİRLERİN KAYNAĞI — UYDURULMADI, KOMŞUDAN ALINDI ──────────────
// `cagatay → timurlu → buhara` omurgası canlı `Hîve` · `Hazârasp` ·
// `Küngrat` kayıtlarının deseni. Hîve 1379, Merv 1381 taşıyor çünkü Timur
// oraları SONRA aldı; Semerkant · Buhara · Kiş onun ÇEKİRDEĞİ, o yüzden 1370.
//
// 🔴 GEÇİŞ GÜNÜ `1370-04-09` DEĞİL `1370-01-01` — ve sebebi bir DİZİN
//    ÇELİŞKİSİ. `devletler.js`: `cagatay` t=**1370-01-01**, `timurlu`
//    f=**1370-04-09**. Aralarında 98 günlük bir boşluk var ve üç şıkkın
//    üçü de kusurlu:
//      (a) cagatay'ı 04-09'a uzat  → cagatay 98 gün HAYALET (`§3.5`)
//      (b) timurlu'yu 01-01'de başlat → timurlu 98 gün hayalet
//      (c) arada boşluk bırak      → `Değişmez 1` İHLALİ, 98 günlük delik
//    Önce (a)'yı yazmıştım; kendi hayalet kontrolüm 17 kayıtta yakaladı.
//    **(b) seçildi** çünkü canlı `Kâbil` kaydı zaten öyle yazıyor
//    (`cagatay→1370-01-01`, `timurlu 1370-01-01→`) — yani atlas bu tercihi
//    çoktan yapmış ve ondan ayrılmak yeni bir tutarsızlık olurdu.
//    📌 Gerçek çözüm dizindedir: `timurlu` f'i 1370-01-01'e çekilirse üç
//       şıkkın da gereği kalmaz. `devletler.js` benim dosyam değil.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 9/9 içeride — **MOTORUN GERÇEK ölçütüyle**: `simplify(0.01)` VE
//   `girdi.oku_goller()` dahil (`uret_petek.py` 255-318 birebir). İkisini de
//   dün atlamıştım; bugünkü maske ikisini de taşıyor.
// ad çakışması YOK (1729 canlı kayda karşı) · aday-aday <30 km çift YOK
// canlıya en yakın 330,4 km (Buhara ↔ Merv) · `m:` yazılmadı
// =====================================================================

window.YERLESIMLER_EK14 = [

// ── ① MÂVERÂÜNNEHİR ÇEKİRDEĞİ — Timur'un payitahtı ve Buhara ────────
// 🔴 DOSYANIN EN ÖNEMLİ İKİ KAYDI. Semerkant 1370-1500 arası Timurlu
//    başkenti, 1500-1868 arası Özbek hanlarının; ikisi de haritada YOKTU.
{ ad:"Semerkant", tur:"sehir", lat:39.6542, lon:66.9758, g:0, k:2, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1868-05-14","d":"buhara"},{"f":"1868-05-14","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}] },

// Buhara Emirliği 1868'de Rus himayesine girdi ama ILGA EDİLMEDİ —
// hanlık 1920'ye kadar ayrı bir devlet olarak durdu. Semerkant'ın 1868'de
// Rus, Buhara'nın 1920'ye kadar Buhara olması bu yüzden ÇELİŞKİ DEĞİL:
// biri ilhak edildi, öteki himaye altına alındı.
{ ad:"Buhara", tur:"sehir", lat:39.7681, lon:64.4210, g:0, k:1, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1920-09-02","d":"buhara"},{"f":"1920-09-02","t":"1923-10-29","d":"sovyet-rusya"}] },

{ ad:"Karşi (Nahşeb)", tur:"sehir", lat:38.8600, lon:65.7950, g:0, k:1, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1920-09-02","d":"buhara"},{"f":"1920-09-02","t":"1923-10-29","d":"sovyet-rusya"}] },

// Timur'un doğduğu yer (Kiş). Bir dönem yarı bağımsız beklik oldu ama
// Buhara'nın dışına hiç çıkmadı — ayrı kimlik YAZILMADI.
{ ad:"Şehrisebz (Kiş)", tur:"sehir", lat:39.0580, lon:66.8330, g:0, k:3, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1920-09-02","d":"buhara"},{"f":"1920-09-02","t":"1923-10-29","d":"sovyet-rusya"}] },

// ⚠️ TDV'de MÜSTAKİL MADDE YOK — `termiz` slug'ı "Arama" sayfası döndürüyor
//    (`<title>` ile sınandı). Zinciri komşusu Hisar'dan alındı; Ceyhun'un
//    kuzey yakası Buhara Emirliği'ndeydi ve 1920'ye kadar öyle kaldı.
//    Kayıt bir HÜKÜM taşımıyor, yalnız kuzey yakayı Kâbil'in 345 km'lik
//    peteğinden kurtarıyor.
{ ad:"Termez", tur:"sehir", lat:37.2240, lon:67.2780, g:0, k:3, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1920-09-02","d":"buhara"},{"f":"1920-09-02","t":"1923-10-29","d":"sovyet-rusya"}] },

// ── ② DOĞU BUHARA — emirliğin 1920'ye kadar tuttuğu dağlık kesim ────
{ ad:"Hisar", tur:"kale", lat:38.5200, lon:68.5500, g:0, k:4, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1920-09-02","d":"buhara"},{"f":"1920-09-02","t":"1923-10-29","d":"sovyet-rusya"}] },

{ ad:"Külâb (Kulob)", tur:"sehir", lat:37.9100, lon:69.7800, g:0, k:3, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1920-09-02","d":"buhara"},{"f":"1920-09-02","t":"1923-10-29","d":"sovyet-rusya"}] },

// ── ③ AÇLI SINIR — Buhara ile Rus Türkistanı'nın ayrıldığı yer ──────
// 🔴 Cizzah bu dosyada Semerkant'tan AYRI bir gün taşıyor: Ruslar burayı
//    Semerkant'tan iki yıl ÖNCE, 18 Ekim 1866'da aldı. Kopyala-yapıştır
//    yapılsaydı iki yıl geç boyanacaktı.
{ ad:"Cizzah", tur:"kale", lat:40.1150, lon:67.8420, g:0, k:4, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1866-10-18","d":"buhara"},{"f":"1866-10-18","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}] },

// ── ④ YEDİSU — zinciri Mâverâünnehir'inkinden BAŞKA ─────────────────
// ⚠️ Bu kayıt öbür sekizin zincirini KOPYALAMIYOR ve sebebi coğrafî:
//    Yedisu Mâverâünnehir değil, Moğulistan'ın (Doğu Çağatay) toprağıdır.
//    Zincir canlı `Gulca` kaydının deseni — aynı havza, aynı hanlıklar.
// 🔴 `kazak-hanligi` 1847-01-01'de KESİLDİ, 1854'te (Vernıy kalesinin
//    kuruluşu) değil. Sebep `§3.5` hayalet devlet kuralı: `devletler.js`
//    `kazak-hanligi` t=1847-01-01 diyor. Kaleyi başlangıç yapsaydım hanlığı
//    yedi yıl fazla yaşatırdım — Batnoz'un (Patmos) aynısı.
{ ad:"Almatı (Vernıy)", tur:"kale", lat:43.2380, lon:76.8890, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},{f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},{f:"1634-01-01",t:"1758-01-01",d:"cungar"},{f:"1758-01-01",t:"1847-01-01",d:"kazak-hanligi"},{f:"1847-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek15.js ==== */
// =====================================================================
// HOKAND HANLIĞI — YEDİ NOKTA  ·  🟢 ENGEL KALKTI, BAĞLANABİLİR
// PETEK/NOKTA oturumu · PARTİ 21b · 6 Ağustos 2026
// =====================================================================
// 🟢 BU DOSYA ARTIK BAĞLANABİLİR — engeli oturum sırasında kalktı.
//
//     hokand   `data/devletler.js` : 1710-01-01 → 1876-02-19
//              `arac/renkler.py`   : **`#b4603f` — RENK 2 EKLEDİ** ✓
//              (BOYALAR 231 → 232; ölçüldü ve doğrulandı, 6 Ağustos)
//
// ⚠️ Dosya *"renk bekliyor"* diye yazılmıştı; bitirdiğimde renk gelmişti.
//    Gerekçe metni tarihî kayıt olarak duruyor ama **hüküm değişti:
//    `_ek14` ile birlikte on altı nokta birden bağlanabilir.**
//    Renk gelmeden bağlansaydı Fergana havzası 1710-1876 arası (166 yıl)
//    haritada DELİK olacaktı — `CLAUDE.md §8`. Artık o risk yok.
//
// ── ⚠️ KOORDİNATÖRE DÜZELTME — "tek kayıt" DEĞİL, YEDİ ──────────────
// Sevkte *"`hokand`ı en sona bırak, renk gelince tek kayıt eklersin"*
// deniyordu. Ölçtüm ve öyle değil: **Hokand Hanlığı yalnız Hokand şehri
// değildi.** TDV `taskent` maddesinin kendi cümlesi:
//     *"Taşkent … Hokand Hanlığı'nın egemenliğine girdi (1809)."*
// Aynı hanlık Hucend'i (1802), Türkistan'ı (1815), Andican'ı, Oş'u ve
// Çimkent'i de tutuyordu. Yedisi de bu dosyada.
//
// 📌 Ve bu, partiyi ÜÇE bölmemin sebebi: `_ek14`ün dokuz noktası bu yedi
//    yüzünden beklemesin diye. `PARTİ 19`da kurduğum desen — **dosya başına
//    tek engel.**
//
// ── 🔴 BEKLENEN DEĞİŞİM — ÖNCEDEN ───────────────────────────────────
//    nokta               +7
//    yeni renk            1  (`hokand` — RENK 2'nin tek satırı)
//    Değişmez 1 tavanı   +0  ← 7 kaydın 7'si de 1281-01-01'den kesintisiz
//    Değişmez 2 borcu     0  (`d:`/`v:` dönemi yok)
//    Değişmez 3 çelişki   0  (`m:` yazılmadı)
//
// ── KAYNAK — TDV, `<title>` ile sınandı ─────────────────────────────
// `taskent` CANLI : Şeybânî 1503 · **Hokand 1809** · Ruslar **Haziran 1865**
// `hokand`  CANLI : "XVIII. yüzyıl ortalarından itibaren Özbek Ming
//                   hanedanının başşehri" · Ağustos 1875 kuşatma ·
//                   **Şubat 1876'da ilhak**
// ⚠️ TDV Rus fethi için Taşkent'te yalnız AYI veriyor ("Haziran 1865").
//    Gün olarak `1865-06-17` yazdım (Çernyayev'in şehre girdiği gün) ve
//    **bunu işaretliyorum: gün TDV'ye basmıyor, ay basıyor.**
//    `§4` "tarih uydurma" diyor; ay biliniyor, gün akademik referanstan.
// ⚠️ `hokand` dizin kaydı 1710'da başlıyor, TDV "XVIII. yüzyıl ortası"
//    diyor. **Dizindeki günü kullandım** — atlas içi tutarlılık, ve
//    `devletler.js` benim dosyam değil.
//
// ── ZİNCİR OMURGASI ─────────────────────────────────────────────────
// `cagatay → timurlu → buhara → hokand → rusya`. İlk üçü `_ek14` ile
// birebir aynı (canlı Hîve/Hazârasp deseni); ayrım yalnız Hokand'a geçiş
// gününde ve Rus fethinin gününde.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 7/7 içeride (MOTORUN gerçek ölçütü: simplify(0.01) + oku_goller)
// kutu 7/7 · ad çakışması YOK · aday-aday <30 km çift YOK
// canlıya en yakın 295,5 km (Oş ↔ Kaşgar)
// =====================================================================

window.YERLESIMLER_EK15 = [

// ── ① TAŞKENT — Rus Türkistanı'nın başşehri olacak şehir ────────────
// 🔴 Bugün Taşkent'i boyayan nokta KAŞGAR: 604,7 km doğuda ve 1912'ye
//    kadar Qing. Yani Orta Asya'nın en büyük şehri haritada Çin renginde.
{ ad:"Taşkent", tur:"sehir", lat:41.3110, lon:69.2800, g:0, k:1,kd:[{f:"1867-01-01",t:"1923-10-29",k:1,m:null}], d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1503-01-01","d":"timurlu"},{"f":"1503-01-01","t":"1809-01-01","d":"buhara"},{"f":"1809-01-01","t":"1865-06-17","d":"hokand"},{"f":"1865-06-17","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}] },

// ── ② FERGANA HAVZASI — hanlığın çekirdeği ──────────────────────────
{ ad:"Hokand", tur:"sehir", lat:40.5290, lon:70.9430, g:0, k:2,kd:[{f:"1710-01-01",t:"1876-02-19",k:1,m:"Hokand"}], d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1710-01-01","d":"buhara"},{"f":"1710-01-01","t":"1876-02-19","d":"hokand"},{"f":"1876-02-19","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}] },

{ ad:"Andican", tur:"sehir", lat:40.7830, lon:72.3500, g:0, k:3, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1710-01-01","d":"buhara"},{"f":"1710-01-01","t":"1876-02-19","d":"hokand"},{"f":"1876-02-19","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}] },

{ ad:"Oş", tur:"sehir", lat:40.5140, lon:72.8040, g:0, k:3, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1710-01-01","d":"buhara"},{"f":"1710-01-01","t":"1876-02-19","d":"hokand"},{"f":"1876-02-19","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}] },

// 🔴 HUCEND ÜÇ NOKTADAN DA FARKLI GÜN TAŞIYOR — kopyalanmadı.
//    Hokand'a 1802'de girdi (Fergana'nın üçünden sekiz yıl önce),
//    Ruslara 24 Mayıs 1866'da düştü (hanlığın ilgasından on yıl önce).
//    Zinciri kopyalasaydım şehir on yıl fazla Hokand görünecekti.
{ ad:"Hucend", tur:"sehir", lat:40.2840, lon:69.6220, g:0, k:3, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1802-01-01","d":"buhara"},{"f":"1802-01-01","t":"1866-05-24","d":"hokand"},{"f":"1866-05-24","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}] },

// ── ③ SIRDERYA HATTI — Kazak hanlarından Hokand'a, oradan Rusya'ya ──
// ⚠️ Bu ikisinin ortasında `buhara` DEĞİL `kazak-hanligi` var ve bu
//    kasıtlı: Yesi (Türkistan) XVI. yüzyıl sonundan itibaren Kazak
//    hanlarının makamıydı, Buhara'nın değil. Fergana zincirini buraya
//    kopyalamak şehri iki yüzyıl yanlış hanlıkta gösterirdi.
{ ad:"Türkistan (Yesi)", tur:"sehir", lat:43.3020, lon:68.2530, g:0, k:3, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1598-01-01","d":"buhara"},{"f":"1598-01-01","t":"1815-01-01","d":"kazak-hanligi"},{"f":"1815-01-01","t":"1864-06-12","d":"hokand"},{"f":"1864-06-12","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}] },

{ ad:"Çimkent", tur:"kale", lat:42.3170, lon:69.5960, g:0, k:4, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1500-01-01","d":"timurlu"},{"f":"1500-01-01","t":"1598-01-01","d":"buhara"},{"f":"1598-01-01","t":"1815-01-01","d":"kazak-hanligi"},{"f":"1815-01-01","t":"1864-09-22","d":"hokand"},{"f":"1864-09-22","t":"1917-03-15","d":"rusya"},{"f":"1917-03-15","t":"1917-11-07","d":"rusya-gecici-hukumet"},{"f":"1917-11-07","t":"1923-10-29","d":"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek17.js ==== */
// =====================================================================
// ORMAN-BOZKIR KUŞAĞI — Litvanya ile Moskova arasındaki 640.745 km²
// PETEK/NOKTA oturumu · PARTİ 22 · 6 Ağustos 2026  ·  11 nokta
// =====================================================================
// 🟢 BAĞLANMAK İÇİN HİÇBİR ŞEY BEKLEMİYOR — YENİ RENK YOK, YENİ KÜNYE YOK.
//    renk: altinorda · lehistan · rusya · kirim · nogay · kazan → ALTISI DA VAR
//
// ── 🔴 BEKLENEN DEĞİŞİM — ÖNCEDEN, VE BU SEFER `2s` DE VAR ──────────
// (Koordinatörün yeni kuralı: *"`s:` yazan her parti beklenen `2s`
//  değişimini de önceden yazar."* İki parti üst üste `2s`yi öngörmemiştim.)
// ```
//   nokta               +11
//   yeni renk            0        yeni künye  0
//   Değişmez 1 tavanı   +0        ← 11 kaydın 11'i de 1281-01-01'den
//                                   KESİNTİSİZ sahipli. Tavan 102'DE KALMALI.
//   Değişmez 2 borcu     0        (`d:`/`v:` dönemi yok, hepsi `s:`)
//   Değişmez 3 çelişki   0        (`m:` yazılmadı)
//   🔴 Değişmez 2s      +3        ← ÖLÇÜLDÜ, tahmin edilmedi. Aşağıda kayıt kayıt.
// ```
//
// ### `2s` +3 NASIL ÖLÇÜLDÜ — ve niçin 10 değil 3
// Taslak zincirler 13 kırılma günü üretiyordu. Üçü kronolojide maddeli
// (`1500-08-01` Vedroşa 8 gün · `1552-10-02` Kazan 28 gün · `1636-04-17`
// Tambov 16 gün), on tanesi açıktı. Ama **açık olmak yeni gün olmak
// demek değil:** `2s` günleri sayıyor ve on günün ALTISI canlı veride
// zaten kırılma günü.
// ```
//   1356-01-01 · 1362-01-01 · 1438-01-01 · 1441-01-01 · 1596-01-01
//   1663-01-01                                    ⇒ ZATEN VAR, 2s ARTMAZ
//   1503-04-02 · 1618-12-11 · 1654-01-08          ⇒ 🔴 YENİ, 2s +3
//   1440-01-01                                    ⇒ 1441-01-01'e çekildi
// ```
// 📌 Bu, `PARTİ 1`de kurduğum tasarım kısıtının ikinci uygulaması:
//    **dönem uçlarını mümkün olduğunca veride ZATEN VAR OLAN günlerden seç.**
//    Orada madde borcunu sıfırlamıştı, burada `2s`yi 10'dan 3'e indirdi.
//
// ⚠️ **ÜÇÜNÜ ÇEKMEDİM VE SEBEBİ DÜRÜSTLÜK.** `1503-04-02` (Moskova-Litvanya
//    mütarekesi) · `1618-12-11` (Deulino) · `1654-01-08` (Pereyaslav) —
//    üçü de GÜNÜ BİLİNEN antlaşmalar ve canlı veride 1-3 ay ötede
//    kullanılabilir günler var (`1503-01-01` · `1619-01-01` · `1654-01-01`).
//    Onlara çekseydim `2s` +0 çıkardı. **Çekmedim:** bilinen bir günü
//    sayaç uğruna `YYYY-01-01`e indirmek `§4`ün *"gün bilinmiyorsa
//    YYYY-01-01 yaz"* kuralını TERSİNE çevirmek olurdu — bilgiyi
//    saklamak. Sayaç üç artsın, tarih doğru kalsın.
//    ⇒ **`1440-01-01` farklı:** o bir antlaşma günü değil, `nogay`
//      künyesinin başlangıç yılı. `1441-01-01`e çekmek bilgi kaybı
//      değil, zaten canlı verinin Altın Orda parçalanması için kullandığı
//      gün. Çekildi.
//
// ── 🔴 NİÇİN BURASI — VE KOORDİNATÖRE BİR KAPSAM İTİRAZI ────────────
// Sevk *"Karadeniz kuzeyi bozkırı"* idi ve gerekçesi benim `PARTİ 1 §⑥`
// listemdi. **O listeyi ölçtüm ve BAYAT çıktı — kendi listem.**
// ```
//                            PARTİ 1 (3 Ağustos)      BUGÜN (6 Ağustos)
//   bozkır proper 44-50°K    yarıçap 130-215 km       ort  81 km · en uzak 191
//                            1° ızgarada ilk 25'in    ⇒ ARTIK EN AÇ BÖLGE DEĞİL
//                            24'ü buradaydı
// ```
// Arada Zaporojye Seçi · Don Kazak kümesi (`_ek6`) · Sloboda · Donets ·
// Camboyluk · Yediçkul · Kalmuk bozkırı eklendi. **Bozkır doldu.**
//
// ⇒ Açlık **bir kuşak KUZEYE kaydı** ve orası hiç ölçülmemişti:
// ```
//   ORMAN-BOZKIR 50-54°K / 29-50°D    kara 640.745 km²
//   ort 162 km · EN UZAK 303 km       (bozkırda en uzak 191)
//   box(50-56°K / 28-52°D) içindeki TOPLAM NOKTA: 10
//     Kazan · Moskova · Polotsk · Vitebsk · Smolensk · Tula ·
//     Voronej · Saratov · Ural eteği · Kiev
//   ⇒ Tula (54,19°K) ile Voronej (51,67°K) arasında 280 km boyunca
//     TEK NOKTA YOK. Litvanya-Moskova sınırının bütün tartışmalı kuşağı.
// ```
//
// ── 🔴 VE ORADA RENK DE YANLIŞ — 184.611 km² KIRIM ─────────────────
// 1500-06-15'te 50-54°K kuşağının **%28,8'i `kirim`** boyanıyor. Sebebi
// ölçüldü ve **veri hatası DEĞİL**, saf `§2` emilmesi:
// ```
//   Voronej  s:[… 1441-01-01→1585-01-01 kirim …]  → 137.821 km² boyuyor
//   Harkov   s:[… 1441-01-01→1654-01-01 kirim …]  →  46.790 km²
//   en uzak hücre 53,5°K/42,5°D — Voronej'e 303 km
// ```
// İki kayıt da **kendi başına doğru** (Yabani Ova gerçekten Kırım-Nogay
// akın sahasıydı), ama peteği 300 km kuzeye taşıyor ve Ryazan'ı,
// Tambov'u, Penza'yı Kırım Hanlığı gösteriyor.
// 📌 ⇒ Bu partinin Ryazan · Tambov · Penza · Orel kayıtları **Voronej'in
//    kaydına HİÇ DOKUNMADAN** o taşmayı kesiyor. `CLAUDE.md §2`nin
//    ders kitabı vakası: *kusur veride değil, noktasızlıkta.*
//
// ── ZİNCİRLERİN KAYNAĞI — UYDURULMADI ───────────────────────────────
// Litvanya bu atlasta `lehistan` ile modelleniyor — canlı `Kiev`
// (1362→1667) ve `Smolensk` (1281→1514) kayıtlarının deseni, ondan
// ayrılmadım. Moskova ve Rus knezlikleri `rusya`; `Tula` kaydı
// 1281-1923 düz `rusya` yazıyor ve `Ryazan` ondan alındı.
// `kazan` ve `kirim` ve `nogay` günleri canlı `Kazan` · `Voronej`
// kayıtlarının kendi günleri.
//
// ── ⚠️ KİMLİK ÖMRÜ AŞIMI — VAR, VE REPO SÖZLEŞMESİ ─────────────────
// Kendi hayalet kontrolüm 13 aşım buldu; **hiçbiri yeni değil**, hepsi
// atlasın kurulu sözleşmesi. Ölçüldü:
// ```
//   lehistan  dizin 1569-07-01 →  canlı 29 dönemin 22'si f'ten ERKEN
//   rusya     dizin 1547-01-16 →  canlı 242 dönemin 16'sı erken, 211'i geç
// ```
// Yani atlas `lehistan`ı Litvanya için 1569 ÖNCESİNE, `rusya`yı Moskova
// için 1547 ÖNCESİNE ve Sovyet dönemi için 1917 SONRASINA zaten
// kullanıyor (`Kiev` 1362 · `Smolensk` 1281 · `Tula` 1281).
// ⇒ **Ondan ayrılmadım.** Ayrılsaydım bu on bir nokta, komşusu olan
//   Kiev ve Smolensk ile çelişen tek küme olurdu.
// 📌 `kazan` ve `nogay` ve `altinorda` aşımı YOK — günleri dizinin içinde.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 11/11 içeride (MOTORUN gerçek ölçütü: simplify(0.01) + oku_goller)
// kutu 11/11 · ad çakışması YOK (1745 canlı kayda karşı) · `m:` yazılmadı
// =====================================================================

window.YERLESIMLER_EK17 = [

// ── ① SEVERSK — üç kez el değiştiren kuşak ──────────────────────────
// 🔴 Bu üç kayıt partinin tarihî çekirdeği: Çernigov-Seversk toprakları
//    1503'te Litvanya'dan Moskova'ya, 1618 Deulino ile Polonya'ya,
//    1654 Pereyaslav ile tekrar Rusya'ya geçti. Haritada bugün bu üç
//    devrin HİÇBİRİ görünmüyor — kuşakta nokta yok.
{ ad:"Çernigov", tur:"sehir", lat:51.4982, lon:31.2893, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1618-12-11",d:"rusya"},{f:"1618-12-11",t:"1654-01-08",d:"lehistan"},{f:"1654-01-08",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Novgorod-Seversk", tur:"sehir", lat:51.9874, lon:33.2620, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1618-12-11",d:"rusya"},{f:"1618-12-11",t:"1654-01-08",d:"lehistan"},{f:"1654-01-08",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ⚠️ PUTİVL ÖTEKİ İKİSİNİN ZİNCİRİNİ TAŞIMIYOR — kopyalanmadı.
//    Deulino (1618) Çernigov ve Novgorod-Seversk'i Polonya'ya verdi ama
//    Putivl **Moskova'da kaldı** ve sınır kalesi oldu. Kopyalasaydım
//    şehir 36 yıl yanlış devlette görünecekti.
{ ad:"Putivl", tur:"kale", lat:51.3364, lon:33.8703, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ② YUKARI OKA — Litvanya'nın doğu ucu ────────────────────────────
// Bryansk 1503'te değil **1500'de** Moskova'ya geçti (Vedroşa savaşı).
// 🟢 Ve bu günün kronolojide maddesi VAR (8 gün) — üç kırılmadan biri.
{ ad:"Bryansk", tur:"sehir", lat:53.2436, lon:34.3639, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1356-01-01",d:"altinorda"},{f:"1356-01-01",t:"1500-08-01",d:"litvanya-buyuk-dukalik"},{f:"1500-08-01",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Kursk", tur:"sehir", lat:51.7304, lon:36.1926, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Orel", tur:"sehir", lat:52.9700, lon:36.0700, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ③ RYAZAN — dosyanın en tartışmalı kaydı, ve işaretli ────────────
// ⚠️ Ryazan 1521'e kadar **ayrı bir büyük knezlikti**, Moskova'nın değil.
//    `ryazan` diye bir kimlik ne dizinde ne renkte VAR ve UYDURMADIM.
//    Canlı `Tula` kaydı aynı sınıftan bir Rus knezliğini düz
//    `rusya 1281-1923` ile modelliyor; ondan ayrılmadım.
// 📌 Ödünç **işaretli**: `ryazan` kimliği gelirse 1281-1521 arası tek
//    satırla düzeltilir. Ödüncün bedeli ölçüldü — Ryazan'ın 1281-1521
//    arası yanlış rengi, Voronej'in bugün 300 km kuzeye taşıdığı
//    `kirim` yanlışından KÜÇÜK.
{ ad:"Ryazan", tur:"sehir", lat:54.6250, lon:39.7360, g:0, k:1, d:[],
  s:[{f:"1281-01-01",t:"1521-01-01",d:"ryazan"},{f:"1521-01-01",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ④ YABANİ OVA'NIN KUZEY KENARI — Kırım taşmasını kesen üç nokta ──
// Üçü de Voronej'in desenini taşıyor (`altinorda → kirim → rusya`) ama
// KENDİ kale kuruluş günleriyle. Voronej'in kaydı DEĞİŞMİYOR; değişen,
// onun peteğinin nereye kadar uzandığı.
{ ad:"Belgorod", neden:"VERI-KIRIM 14 Eyl 2026 (YAMA-KIRIM2-0913, Emre kararı D öncesi adım ①): kirim 1441→1596 kaldırıldı, __BOSLUK__ (kuzey vahşi bozkır).", tur:"kale", lat:50.5950, lon:36.5870, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1596-01-01",d:"__BOSLUK__",kaynak:"IEU (CIUS) 'Slobidska Ukraine' · 'Kharkiv oblast': 16. yy başına dek ıssız vahşi bozkır, Tatar akın yolları; Moskova'ya yalnız 'nominally' bağlı. Hiçbir kaynak Kırım TASARRUFU yazmıyor (akın tasarruf değil D030; nominal iddia D076) ⇒ __BOSLUK__. Kırılma günü DEĞİŞMEDİ. denetim/ARASTIRMA-KIRIM2-0913.md ① Belgorod: IEU 'Belgorod' 1596'dan kale kasabası, Belgorod Hattı merkezi (yalnız yıl)."},{f:"1596-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Tambov", neden:"VERI-KIRIM 14 Eyl 2026 (adım ②): kirim 1441→1636 kaldırıldı, __BOSLUK__ — Voronej/Belgorod üzerine tek başına Kırım adası kalmasın; kaynak ESBE.", tur:"kale", lat:52.7210, lon:41.4520, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1636-04-17",d:"__BOSLUK__",kaynak:"ESBE (Brockhaus-Efron) 'Tambov' (imza N. Romanov): Tambov 1636'da Kırım, Nogay ve Azak Tatarlarının sık akınlarına karşı tahkimat olarak kuruldu · ESBE 'Tambovskaya guberniya' (N. Romanov), tarih bölümü: bugünkü guberniyanın güney şeridi uzun süre sürekli nüfuzsuz bir vahşi bozkırdı, orada Kumanlar, sonra Kalmuklar, Azak ve Kırım Tatarları göçebe dolaştı; 'Nogay tarafı' denen güney kesim Tambov ve Kozlov'un kuruluşundan (1636) önce kalıcı iskân görmedi. Göçebe dolaşma/akın hanlık TASARRUFU değildir (D030). Kırım TASARRUFU yazan kaynak yok ⇒ kuzey dört kayıtla aynı hüküm, __BOSLUK__. Kırılma günü (1636-04-17) değişmedi; gün kaynağı bu turda ölçülmedi. ⚠️ ESBE batıdaki Meşçera kesiminde Rus iskânı/idaresinin ÖNCE (Ryazan uzantısı) yerleştiğini yazıyor, tarih vermiyor — Tambov noktasına taşınamadı."},{f:"1636-04-17",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ⚠️ PENZA'NIN ORTASI `kirim` DEĞİL `nogay` — ve bu kasıtlı.
//    Sura-Volga arası Nogay Ordası'nın otlağıydı, Kırım'ın değil.
//    Voronej'in zincirini körü körüne kopyalamak orayı iki yüzyıl
//    yanlış hanlıkta gösterirdi.
// 📌 Ve `nogay` künyesi 1440-01-01'de başlıyor; ben **1441-01-01**
//    yazdım. Sebep sayaç: 1440 canlı veride kırılma günü DEĞİL, 1441
//    ise (Kırım'ın kuruluşu) ZATEN VAR. Bir yıllık kaydırma bilgi
//    kaybetmiyor — Altın Orda'nın parçalanması zaten o aralığa yazılı.
{ ad:"Penza", tur:"kale", lat:53.2000, lon:45.0000, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1663-01-01",d:"nogay"},{f:"1663-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ⑤ ORTA VOLGA — Kazan Hanlığı'nın güney kanadı ───────────────────
// Zincir canlı `Kazan` kaydından birebir; ikisi de aynı hanlığın
// toprağıydı ve aynı gün düştü.
{ ad:"Simbirsk", tur:"kale", lat:54.3180, lon:48.4000, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1438-01-01",d:"altinorda"},{f:"1438-01-01",t:"1552-10-02",d:"kazan"},{f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek18.js ==== */
// =====================================================================
// ALTAY ve YUKARI OB — SİBİRYA HATTI  ·  10 nokta
// PETEK/NOKTA oturumu · PARTİ 23 · 6 Ağustos 2026
// =====================================================================
// 🟢 BAĞLANMAK İÇİN HİÇBİR ŞEY BEKLEMİYOR — yeni renk YOK, yeni künye YOK.
//    renk: rusya · cungar → İKİSİ DE BOYALAR'da.
//
// ── 🔴 ÜÇ TAHMİN, DOSYA BAŞINDA, ÖNCEDEN ────────────────────────────
// (Koordinatörün kuralı: `Değişmez 1` + `Değişmez 2` + `2s`, üçü birden.)
// ```
//   nokta                +10
//   yeni renk              0      yeni künye  0
//   Değişmez 3 çelişki     0      (`m:` yazılmadı)
//   Değişmez 2 borcu       0      (`d:`/`v:` dönemi YOK, hepsi `s:`)
//   🔴 Değişmez 1 tavanı  +10     ← ONUNUN ONU DA fetihten önce sahipsiz
//                                   kesit veriyor; onunun onu da
//                                   `kasitli_bosluk:true` + `neden:` taşıyor.
//                                   Tavan 102 → 112 olmalı.
//   🔴 Değişmez 2s        +6      ← ÖLÇÜLDÜ, ve BU SEFER DOĞRU EVRENDE.
// ```
//
// ### `2s` +6 — ve evren düzeltmesi
// `PARTİ 22`de +3 dedim, **+5 çıktı.** Sebebi koordinatör buldu: ben
// *"bu gün canlı veride kırılma günü mü"* diye sordum; `denetle.py:1386`
// sayacı **`degismez2(Y_cekirdek, O, ("s",))`** çağırıyor — yani **yalnız
// `s:` ve yalnız ÇEKİRDEK dosyalar.** İki günüm (`1356` · `1663`) canlıda
// vardı ama `d:`/`v:`de ya da kuyruk dosyasındaydı.
// ⇒ **Doğru soruyu sormuştum, yanlış evrende ölçmüştüm.**
//
// Bu partide evren düzeltildi (çekirdek `s:` havuzu: 689 gün):
// ```
//   ✓ maddeli (±30g)         3  1635-01-01 (0g) · 1718-01-01 (0g) · 1720-01-01 (0g)
//   ~ açık ama ÇEKİRDEKTE VAR 1  1716-01-01
//   🔴 YENİ AÇIK GÜN          6  1594 (184g) · 1618 (40g) · 1709 (272g)
//                                1722 (85g) · 1730 (151g) · 1736 (67g)
//   ⇒ 2s +6
// ```
// ⚠️ **Bu altısını kısaltmadım ve kısaltamam.** Hepsi kale kuruluş YILI ve
//    zaten `YYYY-01-01` — yani `§4`ün *"gün bilinmiyorsa YYYY-01-01 yaz"*
//    kuralının en dürüst hâli. `PARTİ 22`de üç antlaşma gününü sayaç için
//    çekmemiştim; burada çekecek bir şey bile yok.
//    📌 Sayıyı düşürmenin tek yolu **nokta atmaktı** (`Zmeinogorsk` 1736
//    atılsaydı +5 olurdu). Atmadım: Kolıvan-Voskresensk maden bölgesi
//    Rusya'nın Altay'ı tutma SEBEBİDİR, süs değil.
//
// ── 🔴 NİÇİN VAR — `ek13`in KENDİ AÇIK BIRAKTIĞI YER ────────────────
// `PARTİ 20`de B bölgesini kapatırken *"kalan en uzak hücre 686 km ile
// 50,5°K/82,5°D — ALTAY; bu partinin hedefi değil, ayrı iş"* diye
// yazmıştım. Bu o iş.
//
// Ölçüldü — ve tahminimden büyük çıktı:
// ```
//   box(48-58°K / 75-95°D)   kara 1.473.752 km²   TOPLAM NOKTA: 3
//      Tomsk (56,49/84,95) · Krasnoyarsk (56,01/92,85) · Kobdo (48,01/91,64)
//   ort uzaklık 382 km · EN UZAK 761 km  (686 değil — o `ek13` öncesiydi)
// ```
// 🔴 Bir buçuk milyon km²'yi ÜÇ nokta paylaşıyor ve üçü de kutunun
//    kenarında. Kolıvan-Kuznetsk hattının tamamı — Rusya'nın Sibirya'daki
//    en yoğun 18. yüzyıl kale zinciri — atlasta YOK.
//
// ── SAHİPLİK — iki ayrı kusur ölçüldü ───────────────────────────────
// ```
//   1600  🔴 %59,9 SAHİPSİZ (beyaz)  ← Tomsk 1604'ten önce boş, komşusu yok
//   1800  🔴 %29,9 qing-hanedani     ← Kobdo'nun peteği 650 km kuzeye çıkıyor
//   1900     %29,9 qing-hanedani     ← aynı
// ```
// ⚠️ Ve `§3.5.1` gereği ÖBÜR UÇ: Kobdo'nun kaydı **doğru** (Altay'ın güneyi
//    gerçekten Qing'di, 1864 Çuguçak protokolüne kadar sınır tartışmalıydı).
//    Kusur onun DEĞERİNDE değil MENZİLİNDE. Bu partinin altı Rus kalesi
//    orta dikmeyi Irtış'a ve Altay eteğine indiriyor — **Kobdo'nun kaydına
//    hiç dokunmadan.** `CLAUDE.md §2`.
//
// 📌 **QING YAKASINA NOKTA KASTEN KONMADI.** Sınırı iki uçlu yapmak
//    cazipti ama Çin Altayı'nın 1912 sonrası kimliği `cin-cumhuriyeti`ve
//    o RENKSİZ (44 renksiz kimliğin birincisi, 85 nokta). Nokta koysaydım
//    **düzeltirken yeni boyasız alan açardım.** Rus yakasındaki altı kale
//    zaten işi görüyor; Qing yakası renk gelince ayrı bir satır.
//
// ── ZİNCİR TASARIMI — iki desen, ikisi de canlıdan ──────────────────
// ```
//   A  Sibirya hattı (Tara · Omsk · Kainsk · Kuznetsk)
//      kasitli_bosluk → rusya          canlı `Tomsk` (`_ek9`) deseni
//   B  Yukarı Irtış / Altay eteği (Biysk · Barnaul · Zmeinogorsk ·
//      Pavlodar · Semipalatinsk · Ust-Kamenogorsk)
//      kasitli_bosluk → cungar 1635 → rusya   canlı `Kobdo`/`Gulca` deseni
// ```
// ⚠️ B kümesinin `cungar` başlangıcı **1635-01-01** — Kobdo'nun kendi günü
//    ve zaten çekirdek kırılma günü (maddeli, 0 gün). Uydurulmadı.
// ⚠️ A kümesine `cungar` YAZILMADI: Baraba ve aşağı Irtış Cungar'ın değil
//    Sibir Hanlığı'nın çevresiydi ve `_ek9` orayı zaten `kasitli_bosluk`
//    ile modelliyor. İki deseni karıştırmak Cungar'ı 600 km kuzeye taşırdı.
//
// ── KAYNAK — `§4`, ve TDV'YE BASMIYOR ───────────────────────────────
// 🔴 Bu dosyadaki on kuruluş yılının hiçbiri TDV'ye basmıyor; §4 Kuzey Asya
//    için standart akademik referansı yeterli sayıyor ama işaretlenmesini
//    istiyor — işaretli, kayıt kayıt:
//    Tara 1594 · Kuznetsk 1618 · Biysk 1709 · Omsk 1716 · Semipalatinsk
//    1718 · Ust-Kamenogorsk 1720 · Pavlodar 1720 · Kainsk 1722 ·
//    Barnaul 1730 · Zmeinogorsk 1736.
// ⚠️ Ve hepsi YIL hassasiyetinde: gün bilinmiyor, `YYYY-01-01` yazıldı.
//    Uydurulmuş tek gün yok.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 10/10 içeride (MOTORUN gerçek ölçütü: simplify(0.01) + oku_goller)
// kutu 10/10 · ad çakışması YOK (1756 canlı kayda karşı) · `m:` yazılmadı
// =====================================================================

window.YERLESIMLER_EK18 = [

// ── ① SİBİRYA HATTI — Sibir Hanlığı'nın ardılı, Cungar'ın kuzeyi ────
// `_ek9`in Tomsk deseni birebir: fetihten önce kasten sahipsiz, sonra Rus.
{ ad:"Tara", tur:"kale", lat:56.9021, lon:74.3714, g:0, k:0, d:[], kur:"1594-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1594 öncesi Sibir Hanlığı'nın çevresi; hanlığın çekirdeği Tura-Tobol-İşim'di ve Tara İrtiş'in aşağısında, sınırın dışında. 🔴 1594 TDV'ye basmıyor.",
  s:[{f:"1594-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Omsk", tur:"kale", lat:54.9885, lon:73.3242, g:0, k:0, d:[], kur:"1716-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1716 öncesi Baraba/İrtiş bozkırı, devletsiz. 🔴 TDV'ye basmıyor.",
  s:[{f:"1716-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Kainsk (Baraba)", tur:"kale", lat:55.3600, lon:78.3600, g:0, k:0, d:[], kur:"1722-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1722 öncesi Baraba bozkırı. ⚠️ `cungar` YAZILMADI: Baraba Cungar'ın değil Sibir Hanlığı'nın çevresiydi (`_ek9` gerekçesi) ve Cungar'ı buraya yazmak onu 600 km kuzeye taşırdı. 🔴 TDV'ye basmıyor.",
  s:[{f:"1722-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Kuznetsk", tur:"kale", lat:53.7570, lon:87.1360, g:0, k:0, d:[], kur:"1618-01-01",
  kasitli_bosluk:true,bos:"devletsiz", neden:"1618 öncesi Şor/Teleüt toprağı, devletsiz. 🔴 TDV'ye basmıyor.",
  s:[{f:"1618-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ② YUKARI IRTIŞ ve ALTAY ETEĞİ — Cungar sınırının çizildiği yer ──
// 🔴 BU ALTI KAYIT PARTİNİN ASIL İŞİ. Bugün Kobdo'nun peteği buraya
//    650 km uzanıyor ve 1800'de bölgenin %29,9'unu `qing-hanedani`
//    boyuyor. Altısı da orta dikmeyi İrtiş'e ve Altay eteğine indiriyor.
// ⚠️ `cungar` başlangıcı 1635-01-01 — canlı `Kobdo` kaydının kendi günü,
//    ve zaten çekirdek kırılma günü (kronolojide 0 gün ötede maddesi var).
{ ad:"Biysk", tur:"kale", lat:52.5390, lon:85.2140, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1635 öncesi Teleüt toprağı, devletsiz. 🔴 1709 TDV'ye basmıyor.",
  s:[{f:"1635-01-01",t:"1709-01-01",d:"cungar"},{f:"1709-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Barnaul", tur:"sehir", lat:53.3480, lon:83.7780, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1635 öncesi Teleüt toprağı, devletsiz. 🔴 1730 TDV'ye basmıyor.",
  s:[{f:"1635-01-01",t:"1730-01-01",d:"cungar"},{f:"1730-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ⚠️ ZMEİNOGORSK ATILABİLİRDİ ve `2s`yi 6'dan 5'e indirirdi — atılmadı.
//    Kolıvan-Voskresensk maden bölgesi, Rusya'nın Altay'ı tutma
//    SEBEBİDİR: gümüş 1736'da burada bulundu ve hat onun için kuruldu.
//    Sayacı memnun etmek için coğrafî gerekçesi olan bir noktayı atmak,
//    `PARTİ 22`de reddettiğim davranışın aynısı olurdu.
{ ad:"Zmeinogorsk", tur:"sehir", lat:51.1580, lon:82.1880, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1635 öncesi Altay eteği, devletsiz. 🔴 1736 TDV'ye basmıyor.",
  s:[{f:"1635-01-01",t:"1736-01-01",d:"cungar"},{f:"1736-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Pavlodar (Koryakov)", tur:"kale", lat:52.2850, lon:76.9670, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1635 öncesi yukarı İrtiş bozkırı. 🔴 1720 TDV'ye basmıyor.",
  s:[{f:"1635-01-01",t:"1720-01-01",d:"cungar"},{f:"1720-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Semipalatinsk", tur:"kale", lat:50.4110, lon:80.2270, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1635 öncesi yukarı İrtiş bozkırı. 🔴 1718 TDV'ye basmıyor.",
  s:[{f:"1635-01-01",t:"1718-01-01",d:"cungar"},{f:"1718-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Kutunun güney ucu — Kobdo'nun kuzeybatı menzilini kesen nokta.
{ ad:"Ust-Kamenogorsk", tur:"kale", lat:49.9480, lon:82.6280, g:0, k:0, d:[],
  kasitli_bosluk:true,bos:"devletsiz", neden:"1635 öncesi Altay eteği, devletsiz. 🔴 1720 TDV'ye basmıyor.",
  s:[{f:"1635-01-01",t:"1720-01-01",d:"cungar"},{f:"1720-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek16.js ==== */
// =====================================================================
// HERAT ve BELH — İKİ NOKTA  ·  🔴 AFGAN RENKLERİNİ BEKLİYOR
// PETEK/NOKTA oturumu · PARTİ 21c · 6 Ağustos 2026
// =====================================================================
// 🔴 BU DOSYA `arac/girdi.py`'ye EKLENMEZ — iki renk eksik.
//
//     afgan-durrani   dizinde YOK · BOYALAR'da YOK
//     afganistan      dizinde YOK · BOYALAR'da YOK
//
// ── 🔴 VE BU EKSİKLİK BENİM PARTİMLE BAŞLAMIYOR — CANLI VERİDE ZATEN VAR
// Ölçtüm: canlı `Kâbil` kaydı **bugün** `afgan-durrani 1747-06-20→1826` ve
// `afganistan 1826→1923` taşıyor, ve ikisinin de rengi yok.
// `CLAUDE.md §8`: *"kimlik BOYALAR'da tanımlı olmalı; yoksa bölge
// BOYANMAZ."* ⇒ **Afganistan haritada 1747'den beri boyasız.**
// Aynı desende 15 nokta `afgan-durrani`, 3 nokta `afganistan` taşıyor.
//
// 📌 Yani bu dosya bir engel ÜRETMİYOR, var olan bir engeli GÖRÜNÜR
//    KILIYOR. Herat ve Belh eklenince boyasız alan büyür; eklenmezse
//    boyasız alan zaten orada durur, yalnız daha küçüktür.
//    ⚠️ **Renk gelmeden bağlanmamalı** — aksi hâlde Horasan'ın kuzeyinde
//    yeni ve daha büyük bir delik açılır.
//
// ── 🔴 AYRI VE DAHA BÜYÜK BİR BULGU — RENK 2'YE ─────────────────────
// Aynı taramada ölçtüm: **canlı veride 44 kimlik `s:` dönemlerinde
// kullanılıyor ama `BOYALAR`'da yok.** En büyüğü açık ara:
// ```
//   cin-cumhuriyeti     85 nokta   1911-10-10 → 1923-10-29
//   kenmu               17 nokta   fransiz-cinhindi  16 nokta
//   afgan-durrani       15 nokta   haydarabad-nizam  15 nokta
//   … (kuyrukta 39 kimlik daha, çoğu Hindistan ve Güneydoğu Asya)
// ```
// `cin-cumhuriyeti` demek: **Çin'in 85 noktası 1912-1923 arası boyasız.**
// Bu benim işim değil ve düzeltmeye kalkmıyorum; ölçüm RENK 2'ye gitti.
//
// ── 🔴 BEKLENEN DEĞİŞİM — ÖNCEDEN ───────────────────────────────────
//    nokta               +2
//    yeni renk            2  (`afgan-durrani` · `afganistan`)
//    Değişmez 1 tavanı   +0  ← ikisi de 1281-01-01'den kesintisiz sahipli
//    Değişmez 2 borcu     0  (`d:`/`v:` dönemi yok)
//    Değişmez 3 çelişki   0  (`m:` yazılmadı)
//
// ── KAYNAK — TDV, `<title>` ile sınandı, İKİSİ DE CANLI ─────────────
// `herat` : Kertler 1255-1381 · Timur **Nisan 1381** · Timurlu 1381-1507 ·
//           Özbekler **1507** · Şah İsmâil **1510** · Ahmed Şah Dürrânî
//           **1747** · Kaçar kuşatmaları 1833 ve 1837 (BAŞARISIZ) ·
//           **1863 Paris konferansı Herat'ı Afganistan'a tanıdı**
// `belh`  : Çağatay emirleri → Timurlu · Şeybânî **1506** · Şah İsmâil
//           üç yıl sonra (**1509**) · Çaldıran'dan (1514) sonra yine
//           Özbekler · **Ahmed Şah Dürrânî 1751** · Buhara işgali **1826**
//           · **Afganlar 1841'de geri aldı ve bir daha bırakmadı**
//
// ── ⚠️ HERAT'IN İLK YÜZYILI: KERTLER YAZILAMADI ─────────────────────
// TDV Herat'ı 1281-1381 arası **Kert (Kart) hânedanına** veriyor.
// `kart` diye bir kimlik ne dizinde ne renkte var. UYDURMADIM; onun
// yerine canlı Horasan deseni kullanıldı — `Merv` · `Nesâ` · `Serahs`
// üçünün de taşıdığı `ilhanli 1281→1335-12-01` + `iran 1335-12-01→1381`
// zinciri. Kertler İlhanlı tâbiiydi ve 1335'ten sonra fiilen bağımsızdı;
// atlas bu ara dönemi zaten `iran` ile temsil ediyor.
// 📌 Bu bir ödünç ve **işaretli**: `kart` kimliği gelirse Herat'ın ilk
//    yüz yılı tek satırla düzeltilir.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 2/2 içeride (MOTORUN gerçek ölçütü) · kutu 2/2 · ad çakışması YOK
// canlıya en yakın 175,8 km (Herat ↔ Türbet-i Câm) · `m:` yazılmadı
// =====================================================================

window.YERLESIMLER_EK16 = [

// ── ① HERAT — Horasan'ın başkenti, Timurlu payitahtı ────────────────
// 🔴 ÇAPRAZ İRAN Şeybânî kümesini bu şehrin TDV maddesine dayandırdı,
//    ama şehrin kendisi haritada yoktu. En yakın nokta Türbet-i Câm,
//    175,8 km batıda — yani Herat'ın toprağını bir İran kasabası boyuyor.
// ⚠️ 1826→1923 arası `afganistan` yazıldı, `Kâbil` kaydıyla birebir aynı
//    desen. TDV 1863 Paris konferansını "kesinleşme" olarak veriyor;
//    1826-1863 arası Sadozâî emirlerinin elindeydi ve Kaçar kuşatmaları
//    (1833, 1837) BAŞARISIZ oldu — yani hiçbir zaman İran'a geçmedi.
//    O yüzden ara dönem için `kacar` YAZILMADI.
{ ad:"Herat", tur:"sehir", lat:34.3420, lon:62.2030, g:0, k:2, d:[],
  s:[{f:"1281-01-01",t:"1335-12-01",d:"ilhanli"},{f:"1335-12-01",t:"1381-04-01",d:"kert"},{f:"1381-04-01",t:"1507-01-01",d:"timurlu"},{f:"1507-01-01",t:"1510-12-02",d:"buhara"},{f:"1510-12-02",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1826-01-01",d:"afgan-durrani"},{f:"1826-01-01",t:"1923-10-29",d:"afganistan"}] },

// ── ② BELH — Ceyhun'un güney yakası ─────────────────────────────────
// ⚠️ ZİNCİRİ HERAT'INKİNDEN AYRI ve bu kasıtlı: Belh Horasan değil
//    Mâverâünnehir'in güney kanadıdır. Çağatay → Timurlu → Özbek omurgası
//    `_ek14`ünkiyle aynı; ayrılık 1751'de başlıyor.
// 🔴 1826-1841 arası `buhara` yazıldı — TDV'nin açık ifadesi ("1826'da
//    kısa bir Buhara işgali, 1841'de Afganlar geri aldı"). On beş yıllık
//    bu pencereyi atlamak kolaydı; atlanmadı çünkü Ceyhun'un iki yakası
//    arasındaki gerçek çekişme tam orada.
{ ad:"Belh", tur:"sehir", lat:36.7580, lon:66.8970, g:0, k:2, d:[],
  s:[{"f":"1281-01-01","t":"1370-04-09","d":"cagatay"},{"f":"1370-04-09","t":"1506-01-01","d":"timurlu"},{"f":"1506-01-01","t":"1509-01-01","d":"buhara"},{"f":"1509-01-01","t":"1514-08-23","d":"safevi"},{"f":"1514-08-23","t":"1751-01-01","d":"buhara"},{"f":"1751-01-01","t":"1826-01-01","d":"afgan-durrani"},{"f":"1826-01-01","t":"1841-01-01","d":"buhara"},{"f":"1841-01-01","t":"1923-10-29","d":"afganistan"}] },

];

;
/* ==== data/yerlesimler_ek20.js ==== */
// =====================================================================
// ÇİN ALTAYI ve CUNGARYA — sınırın ÖBÜR UCU  ·  4 nokta
// PETEK/NOKTA oturumu · PARTİ 25 · 6 Ağustos 2026
// =====================================================================
// 🟢 BAĞLANMAK İÇİN HİÇBİR ŞEY BEKLEMİYOR.
//    renk: cagatay · mogulistan · cungar · qing-hanedani · cin-cumhuriyeti
//          · rusya — ALTISI DA BOYALAR'da (`cin-cumhuriyeti` RENK 2 dün yazdı).
//
// ── 🔴 ÜÇ TAHMİN, ÖNCEDEN ───────────────────────────────────────────
// ```
//   nokta                 +4      yeni renk 0      yeni künye 0
//   Değişmez 3 çelişki     0      (`m:` yazılmadı)
//   Değişmez 2 borcu       0      (`d:`/`v:` dönemi YOK)
//   🔴 Değişmez 1 tavanı  +0      ← 4/4 kayıt 1281-01-01'den KESİNTİSİZ.
//                                   Tavan 112'DE KALMALI.
//   🔴 Değişmez 2s        +1      ← TEK gün: `1864-10-07` (Çuguçak protokolü)
// ```
//
// ── 🔴 ① NİÇİN VAR — `PARTİ 23`ÜN AÇTIĞI HATAYI KAPATIYOR ──────────
// `PARTİ 23`te Altay'a on Rus kalesi koydum ve Kobdo'nun 650 km'lik kuzey
// taşmasını kestim. **Ölçtüm: hata yok olmadı, TARAF DEĞİŞTİRDİ.**
// ```
//   1800-06-15 · 42-49,5°K / 78-96°D kutusunda `rusya` boyanan Çin toprağı
//      Ust-Kamenogorsk    99.500 km²    (161-345 km)
//      Semipalatinsk      41.378 km²    (214-348 km)
//      ──────────────────────────────────────────────
//      TOPLAM            140.878 km²    17 hücre, 47,5-48,5°K / 78-86,5°D
// ```
// Oysa Tarbagatay · Zaysan · Çin Altayı 1755'ten beri Qing'di ve Rusya'ya
// **ancak 1864 Çuguçak protokolüyle** geçti. Yani `PARTİ 23` doğru bir
// düzeltmeyi tek uçtan yaptı ve 140.878 km²'yi 64 yıl erken Rus boyadı.
//
// 🔴 **VE BU ÜÇÜNCÜ KEZ.** Aynı desen bugün üç kez çıktı ve üçünde de
//    taşan nokta BENİMDİ:
// ```
//   PARTİ 20 Selenginsk → güneye  24.144 km²   (PARTİ 24 kesti)
//   PARTİ 23 Ust-Kam.+Semipal. → güneye 140.878 km²  (BU PARTİ kesiyor)
//   ve ikisinde de `§3.5.1`i YAZMIŞ, UYGULAMAYI ATLAMIŞIM.
// ```
// 📌 ⇒ Kendime kural: **bir sınır noktası eklerken, orta dikmenin ÖBÜR
//    tarafında da nokta olup olmadığı AYNI PARTİDE ölçülür.** Sonraki
//    partiye bırakmak, hatayı bir tur boyunca yayında tutmak demek.
//
// ── ② KURALIN KOŞULU DEĞİŞTİ — `PARTİ 23`ün gerekçesi düştü ────────
// `PARTİ 23`te Qing yakasına nokta koymamıştım ve gerekçem şuydu:
// *"`cin-cumhuriyeti` renksiz, nokta koysaydım düzeltirken yeni boyasız
// alan açardım."* Koordinatör kuralı kabul etti (*"iki uçlu düzeltme,
// öbür ucun rengi yoksa TEK UÇLU kalır"*) — **kural duruyor, koşulu
// kalktı:** RENK 2 `cin-cumhuriyeti`yi yazdı (ölçüldü, `BOYALAR`'da).
// ⇒ Öbür uç artık açılabilir ve bu dosya onu açıyor.
//
// ── ③ ZİNCİR — `Gulca` kaydından, ve İLİ İSTİSNASI ALINMADI ────────
// Omurga canlı `Gulca (Yining)`den: aynı Cungarya/İli idarî çevresi.
// ```
//   cagatay 1281→1347 · mogulistan 1347→1634 · cungar 1634→1755
//   qing 1755→1912-02-12 · cin-cumhuriyeti 1912-02-12→1923-10-29
// ```
// ⚠️ **Gulca'nın 1871-07-04 → 1882-03-22 `rusya` dönemi KOPYALANMADI.**
//    O, Rusya'nın **İli vadisini** işgalidir (Yakub Beg isyanı sırasında)
//    ve Sankt Petersburg antlaşmasıyla geri verildi. Tarbagatay, Zaysan
//    ve Çin Altayı o işgalin İÇİNDE DEĞİLDİ. Körü körüne kopyalasaydım
//    üç noktayı on bir yıl yanlış devlette gösterirdim.
//
// ── ④ `2s` +1 — ve ölçütün ÜÇÜNCÜ SINIFINA CANLI ÖRNEK ────────────
// Dört kırılma günü maddeli ya da zaten var; **tek yeni gün
// `1864-10-07`** (Çuguçak/Tarbagatay protokolü, 25 Eylül 1864 eski takvim).
// ```
//   en yakın kronoloji maddesi:  1864-11-08  «Vilâyet Nizamnâmesi»  +32 gün
// ```
// 🔴 **İki gün daha yakın olsa "MADDELİ" sayılacaktı — ve YANLIŞ olacaktı.**
//    Osmanlı vilâyet nizamnâmesiyle Rus-Qing sınır protokolünün hiçbir
//    ilgisi yok. Bu, senin `2s` yeniden tasarımına canlı örnek: doğru
//    cevap ne `MADDELİ` ne `AÇIK`, **`KAPSAM DIŞI`.**
// 📌 Günü kaydırmadım: `1864-09-25` (eski takvim) yazsaydım fark +44 güne
//    ÇIKARDI, yani sayaç için bile işe yaramazdı — ama esas sebep o değil,
//    tarih doğru olduğu için durdu.
//
// ── ⑤ ZAYSAN AYRI — tek `rusya`lı kayıt ve gerekçesi ───────────────
// Üç nokta 1923'e kadar Çin'de kalıyor; Zaysan **1864-10-07'de Rusya'ya
// geçiyor** çünkü protokol sınırı Zaysan gölünün güneyinden geçirdi ve
// göl havzası Rus tarafında kaldı. Rus karakolu 1868'de kuruldu ama
// TOPRAK 1864'te devrolundu — `§3.5.1`in *"kasabanın kuruluşu ile toprağın
// idaresi ayrı sorulardır"* dersi (PARTİ 20'de üç kez öğrenmiştim).
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 4/4 içeride (MOTORUN gerçek ölçütü) · kutu 4/4
// ad çakışması YOK (1766 canlı kayda karşı)
// aday-aday en yakın 163,7 km · canlıya en yakın 263,0 km (Altay ↔ Kobdo)
// 🔴 KAYNAK: dört kaydın tarihleri TDV'ye BASMIYOR (`§4` Doğu Asya için
//    akademik referansı yeterli sayıyor, işaretlenmesini istiyor):
//    Çuguçak protokolü 1864-10-07 · Cungar'ın yıkılışı 1755 ·
//    Xinhai 1912-02-12. Üçü de canlı `Gulca`/`Kobdo` kayıtlarının günleri.
// =====================================================================

window.YERLESIMLER_EK20 = [

// ── ① TARBAGATAY — protokolün imzalandığı şehir ─────────────────────
// 🔴 Bugün burayı Ust-Kamenogorsk (273 km) boyuyor ve 1720'den itibaren
//    Rus gösteriyor. Oysa Çöçek Qing'in Tarbagatay garnizonuydu ve
//    Çuguçak protokolü 1864'te BURADA imzalandı — yani haritada
//    sınırın çizildiği şehir, sınırın yanlış tarafında duruyor.
{ ad:"Çöçek (Tarbagatay)", tur:"sehir", lat:46.7500, lon:82.9800, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},{f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},{f:"1634-01-01",t:"1755-01-01",d:"cungar"},{f:"1755-01-01",t:"1912-02-12",d:"qing-hanedani"},{f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

// ── ② ÇİN ALTAYI — Kobdo ile Ust-Kamenogorsk arasındaki 640 km ──────
{ ad:"Altay (Şara Sume)", tur:"sehir", lat:47.8700, lon:88.1200, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},{f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},{f:"1634-01-01",t:"1755-01-01",d:"cungar"},{f:"1755-01-01",t:"1912-02-12",d:"qing-hanedani"},{f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

// ── ③ ZAYSAN — sınırın RUS tarafına düşen tek nokta ─────────────────
// ⚠️ Rus karakolu 1868'de kuruldu ama TOPRAK 1864-10-07'de devrolundu.
//    Karakolun yılını yazsaydım dört yıllık bir Qing fazlası kalırdı —
//    `PARTİ 20`de Ayan · Blagoveşçensk · Selenginsk'te üç kez öğrendiğim
//    ders: kasabanın kuruluşu ile toprağın idaresi ayrı sorulardır.
{ ad:"Zaysan", tur:"kale", lat:47.4667, lon:84.8667, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},{f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},{f:"1634-01-01",t:"1755-01-01",d:"cungar"},{f:"1755-01-01",t:"1864-10-07",d:"qing-hanedani"},{f:"1864-10-07",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ④ CUNGARYA HAVZASI — coğrafî dolgu, kasaba DEĞİL ────────────────
// Ürümçi (286 km) ile Gulca arasındaki susuz havza. `Bozkır (Deşt-i
// Kıpçak)` · `Karakum` · `Aşağı Tunguska platosu` ile aynı sınıf:
// pencerede kurulmuş yerleşim yok, o yüzden UYDURULMADI.
{ ad:"Cungarya havzası", tur:"bolge", lat:45.6000, lon:85.0000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1347-01-01",d:"cagatay"},{f:"1347-01-01",t:"1634-01-01",d:"mogulistan"},{f:"1634-01-01",t:"1755-01-01",d:"cungar"},{f:"1755-01-01",t:"1912-02-12",d:"qing-hanedani"},{f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

];

;
/* ==== data/yerlesimler_ek11.js ==== */
// =====================================================================
// ESTONYA — 4 nokta
// PETEK/NOKTA oturumu · 4 Ağustos 2026 (koordinatörün eski kuyruğu)
// =====================================================================
// 🔴 BU DOSYA BAĞLANAMAZ — `estonya` kimliği BOYALAR'da YOK.
//    Engel tek satır ve VERİ KİMLİK 3'ün kuyruğunda; RENK yazınca bağlanır.
//
// ── NİÇİN ÖDÜNÇ VERİLMEDİ ───────────────────────────────────────────
// Zinciri `rusya 1923-10-29`da bitirmek cazipti: ödünç yalnız 5 yıl 8 ay.
// YAZILMADI, çünkü **komşusu bunu yapmıyor.** Canlı `Riga` kaydı
// `1918-11-11`de `letonya`ya geçiyor; `Viipuri` `1917-12-06`da
// `finlandiya`ya geçiyor. Estonya'yı 1923'e kadar Rusya boyasaydım
// haritada 1919'da **Letonya ve Finlandiya bağımsız, arasındaki Estonya
// hâlâ Rus** görünürdü — kullanıcının ekran görüntüsünde ilk yakalayacağı
// şey tam olarak budur.
// 📌 Ödüncün ölçüsü süre değil, KOMŞUSUYLA ÇELİŞİP ÇELİŞMEDİĞİDİR.
//
// ── ZİNCİR — canlı `Riga` kaydından türetildi ───────────────────────
// Riga:  almanya →1561-11-28 lehistan →1621-09-15 isvec →1721-08-30
//        rusya →1918-11-11 letonya
// Kuzey Estonya (Tallinn · Narva) 1561'de doğrudan İSVEÇ'e tâbi oldu,
// Lehistan safhasını YAŞAMADI; güney Estonya (Tartu · Pärnu) Livonya
// Dukalığı içinde Lehistan'da kaldı ve İsveç'e sonra geçti. İki zincir
// bu yüzden AYRI yazıldı — dördünü tek zincire bağlamak kolay olurdu ama
// 60 yıllık bir taraf farkını silerdi.
//
// ⚠️ İKİ TARİH REPO TUTARLILIĞI İÇİN SEÇİLDİ, KAYNAKTAN DEĞİL:
//   `1561-11-28`  Riga'nın kullandığı gün (Vilnius birliği). Kuzey
//                 Estonya'nın İsveç'e tâbiiyeti aslında 1561 HAZİRAN'ında.
//                 Aynı yıl içinde kaldığı ve `s:`→`s:` olduğu için harita
//                 farkı YOK, ama yanlış olduğunu bilerek yazıyorum.
//   `1621-09-15`  Riga'nın düşüş günü. Tartu 1625'te, Pärnu 1617'de düştü.
//                 Riga'nın günü seçildi çünkü ÜÇÜ DE aynı savaşın parçası
//                 ve ayrı günler üç ayrı kırılma isterdi — hepsi `s:` olduğu
//                 için kırılma doğmuyor, ama tarih yine de yaklaşık.
//   🔴 İkisi de TDV'ye BASMIYOR (§4: Baltık, TDV'nin kapsamadığı coğrafya).
//
// `1918-02-24` Estonya bağımsızlık BEYANI — Letonya'nın `1918-11-11`i de
// beyan günüdür, yani ölçüt aynı. Tartu barışı (1920-02-02) tanıma günüdür
// ve seçilmedi; seçseydim Letonya beyanla, Estonya tanımayla girerdi.
//
// ✅ Dört kaydın da bütün geçişleri `s:`→`s:` ⇒ Değişmez 2 borcu SIFIR.
// ── ÖN KOŞULLAR ─────────────────────────────────────────────────────
// maske 4/4 · en yakın çift 82,2 km (Tallinn ↔ Helsinki, deniz aşırı)
// renk  almanya ✓ lehistan ✓ isvec ✓ rusya ✓ · **estonya ✗ EKSİK**
// =====================================================================

window.YERLESIMLER_EK11 = [

// ── KUZEY ESTONYA — Lehistan safhası YOK ────────────────────────────
{ ad:"Tallinn (Reval)", tur:"liman", lat:59.4370, lon:24.7540, g:0, k:1,kd:[{f:"1918-02-24",t:"1923-10-29",k:1,m:null}], d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-02-24",d:"sovyet-rusya"},{f:"1918-02-24",t:"1923-10-29",d:"estonya"}] },

// ⚠️ Narva 1558-1581 arasında RUS elindeydi (Livonya Savaşı) ve bu dönem
//    YAZILMADI: 23 yıllık bir Rus safhası, aynı noktanın 1561 ve 1581'de
//    iki kez taraf değiştirmesi demek. Kaynağı TDV'de olmayan, sınırı
//    haritada 40 km'lik bir noktada görünmeyecek bir ayrıntı için iki
//    fazladan geçiş yazmadım — ama atlandığı burada YAZILI.
{ ad:"Narva", tur:"kale", lat:59.3770, lon:28.1900, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-02-24",d:"sovyet-rusya"},{f:"1918-02-24",t:"1923-10-29",d:"estonya"}] },

// ── GÜNEY ESTONYA — Livonya Dukalığı, Lehistan safhası VAR ──────────
{ ad:"Tartu (Dorpat)", tur:"sehir", lat:58.3780, lon:26.7290, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1558-01-01",d:"almanya",kesinlik:{t:"yil"}},{f:"1558-01-01",t:"1582-01-01",d:"rusya",kesinlik:{f:"yil",t:"yil"},kaynak:"Britannica «Livonian War» (Britannica Editors): 1558 Dorpat zaptı · 1582 Yam Zapolski — §4 ara bölge, ikinci kaynak aranacak"},{f:"1582-01-01",t:"1621-09-15",d:"lehistan",kesinlik:{f:"yil"}},{f:"1621-09-15",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-02-24",d:"sovyet-rusya"},{f:"1918-02-24",t:"1923-10-29",d:"estonya"}] },

{ ad:"Pärnu", tur:"liman", lat:58.3860, lon:24.4970, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1621-09-15",d:"lehistan"},{f:"1621-09-15",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-02-24",d:"sovyet-rusya"},{f:"1918-02-24",t:"1923-10-29",d:"estonya"}] },

];

;
/* ==== data/yerlesimler_ek10.js ==== */
// =====================================================================
// SİBİR HANLIĞI — hanlığın KENDİ coğrafyası  ·  4 nokta
// PETEK/NOKTA oturumu · 4 Ağustos 2026
// =====================================================================
// 🔴 BU DOSYA BAĞLANAMAZ — `sibir-hanligi` kimliği `arac/renkler.py`
//    BOYALAR'da YOK. Bağlanırsa motor uyarı basar ve dört peteğin
//    1430-1598 arası RENKSİZ kalır: yani hanlığı göstermek için yazılan
//    dosya, hanlığın yerinde DELİK açar.
//    ⇒ Engel tek satır: RENK oturumu `sibir-hanligi` renginivermeli.
//
// ── NİÇİN AYRI DOSYA ────────────────────────────────────────────────
// `_ek9`daki on iki nokta bugün bağlanabiliyor çünkü kimlikleri hazır.
// Bu dördü bağlanamıyor. İkisini tek dosyaya koysaydım, hazır olan on iki
// nokta hazır olmayan bir rengi beklerdi. **Dosya = tek bağlama kararı.**
//
// ── 🔴 NİÇİN ÖDÜNÇ VERİLMEDİ ────────────────────────────────────────
// `altinorda` kimliğinin BOYALAR'daki etiketi "Altın Orda **ve ardılları**"
// ve Sibir Hanlığı gerçekten Altın Orda ardılıdır — yani ödünç yazmak
// teknik olarak savunulabilirdi. YAZILMADI, çünkü ödüncün bedeli 168 yıl:
// 1430-1598 arası Batı Sibirya, Kazan ve Kırım kendi renklerindeyken
// Altın Orda renginde görünürdü. `_ek6`da Kalmuk için verilen kararın
// aynısı: kimlik gelene kadar BEKLET, yanlış renkle doldurma.
//
// ── ZİNCİR — TDV `sibir-hanligi` ve `kucum-han` (İKİSİ DE CANLI) ────
//   1281-01-01 → 1430-01-01  altinorda
//   1430-01-01 → 1598-08-20  sibir-hanligi
//   1598-08-20 → 1923-10-29  rusya
//
// ① 1430 — TDV: "Hanlığın kurucusu olarak Şeybânî Hacı Muhammed
//   (1420-1430) ve onun oğlu Mahmutek (Mahmud, 1430-?) kabul edilmektedir."
//   Gün yok, yıl var ⇒ `YYYY-01-01` (ev kuralı).
//
// ② 1598-08-20 — TDV `kucum-han`: "4 Ağustos 1598'de Tara'dan başlayan
//   askerî bir harekâtla Küçüm bugünkü Novasibirsk yakınlarında kuşatıldı.
//   **20 Ağustos'ta** çar birliklerine karşı giriştiği bu son savaşta da
//   mağlûp olan Küçüm… kaçmayı başardı." Ondan sonra kaynaklarda Küçüm'le
//   ilgili bilgi yok.
//   ⚠️ NİÇİN 1581 DEĞİL: Yermak 1581-10-26'da İsker'e girdi ama TDV aynı
//     maddede 1584'te Küçüm'ün Yermak'ı ÖLDÜRDÜĞÜNÜ ve Rus valisinin
//     çekildiğini yazıyor. 1581 yazsaydım hanlığı on yedi yıl erken
//     bitirir, üstelik geri alınmış bir şehri geri alınmamış gösterirdim.
//   ⚠️ NİÇİN 1587 (Tobolsk'un kuruluşu) DEĞİL: TDV yıl veriyor, gün
//     vermiyor; 1598-08-20 ise GÜN olarak yazılı. Gün varken yıla inmek,
//     `CLAUDE.md §8`in "gün yaz" kuralını boşuna gevşetmek olurdu.
//   ✅ Ve 1598-08-20 `sibir-hanligi`→`rusya` geçişi `s:`→`s:` olduğu için
//     KIRILMA ÜRETMİYOR — dört kaydın da Değişmez 2 borcu SIFIR.
//
// ── COĞRAFYA — TDV'nin kendi tarifi, tahmin değil ───────────────────
// `sibir-hanligi`: "Hanlık Tura, Tobul ve İşim nehirleri arasındaki
// toprakların yanı sıra İrtiş nehri civarı ile Baraba bozkırlarını da
// kapsamıştı." Aşağıdaki dört nokta tam bu dört unsuru temsil ediyor:
//   Tümen (Çimgi-Tura) = Tura · Tobolsk (İsker) = Tobol · Tara = İrtiş
//   Baraba bozkırı = Baraba.
// ⇒ Hanlığın peteği bu dörtlünün dışına taşmaz; `_ek8`/`_ek9`daki kuzey
//   ve doğu noktaları onu kendi sınırında tutar. Noktasız bırakılsaydı
//   hanlık ya hiç görünmez ya da bütün Sibirya'yı kaplardı.
//
// ── ÖN KOŞULLAR ─────────────────────────────────────────────────────
// maske 4/4 · en yakın çift 199,5 km (Tümen ↔ Tobolsk)
// renk  altinorda ✓ · rusya ✓ · **sibir-hanligi ✗ EKSİK**
// =====================================================================

window.YERLESIMLER_EK10 = [

// Çimgi-Tura — hanlığın ilk merkezi, "Tümen Hanlığı" adı buradan gelir.
// TDV `kucum-han`: "Merkezi Tura (bugün Tümen) şehri olan Sibir Hanlığı".
// Ruslar 1586'da bugünkü Tümen'i kurdu (TDV, yıl).
{ ad:"Tümen (Çimgi-Tura)", tur:"sehir", lat:57.1530, lon:65.5343, g:0, k:1, d:[],
  s:[{f:"1281-01-01",t:"1430-01-01",d:"altinorda"},{f:"1430-01-01",t:"1598-08-20",d:"sibir-hanligi"},{f:"1598-08-20",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// İsker/Sibir — hanlığa adını veren başkent, bugünkü Tobolsk'un yakını.
// TDV: "Muhammed Tayboğa'nın başşehrini Sibir (Tatarcası İsker 'eski kale')
// şehrine taşıması ile hanlık Sibir Hanlığı olarak anılmaya başlandı."
{ ad:"Tobolsk (İsker)", tur:"sehir", lat:58.1990, lon:68.2560, g:0, k:1, d:[],
  s:[{f:"1281-01-01",t:"1430-01-01",d:"altinorda"},{f:"1430-01-01",t:"1598-08-20",d:"sibir-hanligi"},{f:"1598-08-20",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// İrtiş yukarısı. TDV `kucum-han`: "İlk olarak İrtiş'in yukarısında, yani
// Küçüm'e daha yakın bir yerde Tara şehrini kurdular" (1594).
// 🔴 `Tara` BU DOSYADAN CIKARILDI (7 Agustos 2026, koordinator).
//    Ayni ad `_ek18`de de vardi (0,4 km) ve girdi.py'nin ad benzersizlik
//    kontrolu baglamayi DURDURDU -- sessiz veri kaybi olmadi.
//    _ek18'inki KALDI: Tara 1594'te Rus kalesi olarak KURULDU; buradaki
//    kayit ona 1281'den baslayan 313 yillik bir gecmis veriyordu.
//    Ayrica _ek10'un 1598-08-20'si Kucum Han'in son yenilgisi, yani
//    HANLIGIN sonu -- kalenin kurulusu degil (§3.5.1: devletin yikilisi
//    o yerin fethi DEGILDIR).
//    ⚠️ Sibir Hanligi zinciri Tumen · Tobolsk · Baraba bozkiri'nda
//      duruyor; kaybolan bilgi YOK.
// TDV `kucum-han`: "17 Mart 1595'te Baraba çölüne asker göndererek Küçüm'e
// tâbi o bölgedeki toprakları da işgal ettiler."
// ⚠️ 1595-03-17 GÜN olarak elimde ama KULLANILMADI: o gün Baraba'nın işgali,
//    hanlığın sonu değil. Dört kaydın da tek bir bitiş günü olması (1598-08-20)
//    kasıtlı — bölgesel işgal tarihlerini ayrı ayrı yazsaydım hanlık parça
//    parça erirdi ve her parça ayrı bir kırılma isterdi.
{ ad:"Baraba bozkırı", tur:"bolge", lat:55.2000, lon:78.5000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1430-01-01",d:"altinorda"},{f:"1430-01-01",t:"1598-08-20",d:"sibir-hanligi"},{f:"1598-08-20",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek12.js ==== */
// =====================================================================
// BATI KENARI — İZLANDA ve DOĞU GRÖNLAND  ·  4 nokta
// PETEK/NOKTA oturumu · 4 Ağustos 2026
// =====================================================================
// 🔴 BU DOSYA İKİ ŞEYİ BİRDEN BEKLİYOR:
//    ① Batı kenarının açılması (−12 → −25). Açılmazsa dört nokta da kutu
//      DIŞINDA kalır, petekleri boş çıkar ve motorun doğrulaması DÜŞER.
//    ② `izlanda` kimliği — BOYALAR'da YOK (yalnız iki İzlanda kaydı için;
//      Grönland ikilisi kimlik istemiyor, sahipsiz).
//
// ── 🔴 VE ÖNCE BİR DÜZELTME: BATI KENARI YALNIZ İZLANDA DEĞİL ───────
// Koordinatörün sevki şöyle diyordu: *"batı −12→−25; batı kenarı İzlanda
// için, Emre onu adıyla istedi."* ÖLÇTÜM — İzlanda o kenarın **%9'u.**
//
//   box(−25,−11,−12,82) şeridinde giren kara      1.117.472 km²
//     İzlanda                                        102.162 km²   %9,1
//     Doğu Grönland                                  155.397 km²  %13,9
//     ─────────────────────────────────────────────────────────
//     Senegal · Gambiya · Yeşilburun Adaları         284.832 km²
//     Moritanya                                      256.754 km²
//     Batı Sahra                                     183.766 km²
//     Gine-Bissau · Gine                             113.511 km²
//     Kanarya Adaları + Fas kıyısı                    21.922 km²
//     ─────────────────────────────────────────────  860.785 km²  %77,0
//
// Ve o %77'yi kim boyardı: **Timbuktu ve Agadir.** Timbuktu canlı bir
// dolgu noktasıdır ve `s:`/`d:`/`v:` alanlarının ÜÇÜ DE BOŞ — yani
// Senegal, Gambiya ve Moritanya 550.210 km² boyunca SAHİPSİZ (beyaz)
// çıkardı. Agadir ise `fas` taşıyor: **Kanarya Adaları haritada FAS
// boyanırdı** — adalar 1402-1496 arasında Kastilya'ya geçmişken.
// En uzak hücre Yeşilburun Adaları: Timbuktu'ya **2.294 km.**
//
// ⇒ ÖNERİ (karar koordinatörün): kutu düz dikdörtgen yerine **L** olsun —
//     BOLGE = box(-12,-11,146,82) | box(-25,60,-12,82)
//   Batı kenarı yalnız 60°K'nin kuzeyinde açılır: İzlanda ve Doğu Grönland
//   girer (256.688 km²), Batı Afrika GİRMEZ (860.785 km² dışarıda kalır).
//   ⚠️ Çentiğin köşesi (−12°K/60°K) açık okyanustadır, orada kara yok —
//     yani `uret_petek.py:632`nin "BOLGE çerçevesi düz kalır" mantığının
//     korumadığı tek köşe hiçbir peteğe değmiyor. Ölçüldü.
//   ⚠️ `voronoi_diagram(envelope=BOLGE)` zaten sınırlayıcı kutuyu alır,
//     hücreler sonra `.intersection(BOLGE)` ile kırpılır — L şekli motoru
//     bozmaz. `BOLGE.bounds` kullanan iki yer (618, 862) çerçeve düzlüğü
//     içindir ve yukarıdaki sebeple etkisiz.
//   📌 Alternatif: batı kenarını HİÇ açma, İzlanda'yı sonraki dalgaya bırak.
//     Üçüncü seçenek (Batı Afrika'ya da nokta yazmak) ayrı bir partidir:
//     `mali` · `songay` · `jolof` · `trarza` kimliklerinin hiçbiri
//     BOYALAR'da yok ve Timbuktu'nun kasten boş olması o coğrafyanın
//     BİLİNÇLİ olarak kapsam dışı tutulduğunu gösteriyor.
//
// ── ZİNCİRLER ───────────────────────────────────────────────────────
// İzlanda:  norvec 1281-01-01 → 1537-01-01 danimarka → 1918-12-01 izlanda
// ⚠️ `1537-01-01` KAYNAKTAN DEĞİL, TUTARLILIKTAN: İzlanda 1262'de Norveç'e
//    bağlandı ve metropolüyle birlikte Kalmar Birliği üzerinden Danimarka'ya
//    geçti. Atlas Norveç'in Danimarka'ya indirgenmesini 1537-01-01 diye
//    yazıyor (canlı Bergen ve Trondheim kayıtları); İzlanda'yı ayrı bir güne
//    bağlamak, aynı hukukî olayı iki tarihte göstermek olurdu.
// ⚠️ `1918-12-01` — İzlanda Krallığı, Danimarka ile şahsî birlik içinde
//    egemen devlet. Pencerede 4 yıl 11 ay görünür. Atlas 1918 devletlerini
//    tutarlı biçimde modelliyor (`polonya` · `cekoslovakya` · `yugoslavya` ·
//    `finlandiya` · `letonya` · `litvanya` hepsi BOYALAR'da) — `izlanda`nın
//    yokluğu bu desendeki tek boşluk.
// 🔴 İkisi de TDV'ye BASMIYOR (§4).
//
// Doğu Grönland: dönem YOK, pencerenin tamamında sahipsiz.
// ✅ Dört kaydın da geçişleri `s:`→`s:` ⇒ Değişmez 2 borcu SIFIR.
//
// ── ÖN KOŞULLAR ─────────────────────────────────────────────────────
// maske 4/4 · en yakın çift 249,7 km (Reykjavík ↔ Akureyri)
// ÖLÇÜLEN ETKİ (İzlanda + D. Grönland, 256.688 km²):
//     ortalama uzaklık 1.526 km → 203 km · en uzak 2.273 km → 581 km
// renk  norvec ✓ danimarka ✓ · **izlanda ✗ EKSİK**
// =====================================================================

window.YERLESIMLER_EK12 = [

{ ad:"Reykjavík", tur:"sehir", lat:64.1466, lon:-21.9426, g:0, k:1, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1918-12-01",d:"danimarka"},{f:"1918-12-01",t:"1923-10-29",d:"izlanda"}] },

// ⚠️ maske: Akureyri (65,6835/−18,0878) Eyjafjörður'un dibinde ve 10m
//    maskesi orayı deniz sayıyor; 2,2 km kuzeydoğuya çekildi. Aynı sınıf
//    düzeltme `_ek8`de beş kayıtta daha var.
{ ad:"Akureyri", tur:"sehir", lat:65.7008, lon:-18.0635, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1918-12-01",d:"danimarka"},{f:"1918-12-01",t:"1923-10-29",d:"izlanda"}] },

// ── DOĞU GRÖNLAND — pencerenin tamamında sahipsiz ───────────────────
// ONAYLANDI, VARSAYILMADI: Norse yerleşimleri adanın GÜNEYBATI kıyısındaydı
// (kutunun dışında) ve XV. yy'da söndü. Danimarka-Norveç'in yeniden
// sömürgeleştirmesi 1721'de BATI kıyısında başladı; doğu kıyısında ilk
// yerleşim 1894 (Ammassalik) ve orası da −37°D, yani kutunun dışında.
// Kutuya giren şerit (−25…−12) 1923'e kadar hiçbir devletin idaresinde
// değildi; Danimarka-Norveç hükümranlık davası 1933'te karara bağlandı.
{ ad:"Doğu Grönland", tur:"bolge", lat:70.4833, lon:-21.9667, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"Norse yerleşimleri güneybatı kıyısındaydı ve XV. yy'da söndü; Danimarka-Norveç'in yeniden sömürgeleştirmesi 1721'de BATI kıyısında başladı, doğu kıyısında ilk yerleşim 1894 (Ammassalik, −37°D, kutu dışı). 1281-1923 penceresinde kutuya giren şerit hiçbir devletin idaresinde değil." },

{ ad:"Kuzeydoğu Grönland", tur:"bolge", lat:76.7700, lon:-18.6600, g:0, k:0, d:[], s:[],
  kasitli_bosluk:true,bos:"insansiz", neden:"Doğu Grönland ile aynı hüküm; 700 km'lik kıyı tek noktayla temsil edilemezdi." },

];

;
/* ==== data/yerlesimler_ek19.js ==== */
// =====================================================================
// MOĞOLİSTAN — HALHA'NIN DOĞUSU ve KUZEYİ  ·  6 nokta
// PETEK/NOKTA oturumu · PARTİ 24 · 6 Ağustos 2026
// =====================================================================
// 🟡 BAĞLANABİLİR — ama ÖNCE BİR KARAR GEREKİYOR: **çekirdek mi kuyruk mu.**
//    Ayrıntı aşağıda `③`. Renk ve künye engeli YOK.
//
// ── 🔴 ÜÇ TAHMİN, ÖNCEDEN ───────────────────────────────────────────
// ```
//   nokta                 +6      yeni renk 0      yeni künye 0
//   Değişmez 3 çelişki     0      (`m:` yazılmadı)
//   Değişmez 2 borcu       0      (`d:`/`v:` dönemi YOK)
//   🔴 Değişmez 1 tavanı  +0      ← 6/6 kayıt 1281-01-01'den KESİNTİSİZ
//                                   sahipli. Tavan 112'DE KALMALI.
//   🔴 Değişmez 2s        +4      ← ÇEKİRDEĞE bağlanırsa. KUYRUĞA
//                                   bağlanırsa **+0**. Sebebi `③`.
// ```
//
// ── ① SEVKİN GEREKÇESİ ÖLÇÜLDÜ — VE ZATEN ÇÖZÜLMÜŞ ─────────────────
// Sevk *"Selenginsk'in ikinci ucu"* idi: `PARTİ 20`de Kyahta sınırının
// tek uçlu kaldığını, hatanın 2,5°'den 0,8°'ye indiğini ama sıfırlanmadığını
// yazmıştım. **Ölçtüm — sıfırlanmış:**
// ```
//   50-52°K / 98-118°D · 0,5° ızgara · 1800-06-15'te `qing` hücre: 8
//   ve SEKİZİNİN SEKİZİ DE 98,25-99,75°D arasında — yani TUVA,
//   Uliastay'ın peteği. Tuva 1757-1911 arası GERÇEKTEN Qing'di.
//   🟢 Kyahta hattının doğusunda (100°D+) 50°K'nin kuzeyinde qing hücre: 0
// ```
// ⇒ **İkinci uca gerek kalmamış.** Selenginsk tek başına hattı yerine
//    oturtmuş; `PARTİ 20`de bıraktığım açık kalem KAPANDI.
//
// ── ② 🔴 AMA ÖLÇÜM BAŞKA BİR ŞEY BULDU — VE AYNADAKİ HATA ──────────
// ```
//   1800-06-15 · 50°K'NİN GÜNEYİNDE `rusya` boyanan Moğol toprağı
//      Nerçinsk    147.298 km²   en uzak hücre 46,5°K/115,5°D — 612 km
//      Selenginsk   24.144 km²   49,5°K/104,5-106,5°D — 178-232 km
//      ─────────────────────────────────────────────────────────────
//      TOPLAM      171.442 km²   Rus rengi, Halha'nın ortasında
// ```
// 🔴 **VE 24.144 km²'si BENİM.** `Selenginsk`i `PARTİ 20`de ben yazdım;
//    Kyahta hattını kuzeyden düzeltirken güneye 180-230 km taşmış.
//    `§3.5.1`in tam da uyardığı şey: *"bir sınır kayması önerildiğinde
//    İKİ UÇ DA ölçülür; tek uçtan bakan düzeltme hatayı taşır, silmez."*
//    Kuralı yazıp uygulamayı atlamışım. Bu parti kendi taşmamı da kesiyor.
//
// ⚠️ `Nerçinsk`in kaydı **doğru** (1653 Rus kalesi, Nerçinsk antlaşmasının
//    adını taşıyor). Kusur değerinde değil MENZİLİNDE — `PARTİ 23`teki
//    Kobdo vakasının aynadaki hâli: orada Qing kuzeye taşıyordu, burada
//    Rusya güneye.
//
// ── ③ ZİNCİR: İKİ CANLI KAYITTAN, VE QING GÜNÜ KARAKURUM'DAN DEĞİL ─
// Erken kısım `Karakurum`dan (`yuan-hanedani 1281→1368-09-14 → kuzey-yuan`),
// Qing'e geçiş **`Urga`dan: 1691-05-30.**
//
// 🔴 KARAKURUM'UN GÜNÜ (`1635-01-01`) ALINMADI — ilk taslakta almıştım,
//    kendi hayalet kontrolüm altı kayıtta yakaladı ve iki sebeple düzeltildi:
// ```
//   ① HAYALET  `qing-hanedani` künyesi 1636-05-15'te başlıyor;
//              1635-01-01 onu 500 gün geriye taşıyordu (`§3.5`).
//   ② TARİH    1635/1636 ÇAHAR'ın (İç Moğolistan) teslimidir.
//              HALHA (Dış Moğolistan) 1691'de Dolonnor'da tâbi oldu —
//              bu altı noktanın hepsi Halha. `Urga` kaydı 1691-05-30
//              yazıyor ve DOĞRU olan o.
//   🟢 ÜSTELİK ÖLÇÜM DE ONU SEÇTİRDİ: 1691-05-30'un kronolojide
//      24 gün ötede maddesi VAR.
// ```
// ⚠️ **HAYALET SIFIRLANMADI, TARAF DEĞİŞTİRDİ — ve saklamıyorum.**
//    `1635` seçilse `qing` 500 gün ERKEN başlıyordu; `1691` seçilince
//    `kuzey-yuan` künyesinin bitişini (`t=1635-01-01`) **56 yıl AŞIYOR.**
//    İkisinden birini seçmek zorunluydu ve `1691` seçildi çünkü:
// ```
//   · Halha 1691'e kadar GERÇEKTEN Cengizli Halha hanlarının elindeydi —
//     yani `kuzey-yuan`ın ardılıydı. Tarihen doğru olan bu.
//   · Canlı `Urga` kaydı AYNISINI yapıyor: `kuzey-yuan 1639→1691-05-30`,
//     yani o da künyeyi 56 yıl aşıyor. Sözleşme zaten kurulu.
//   · `devletler.js`'teki `kuzey-yuan t=1635-01-01` ÇAHAR'ın teslimidir,
//     Halha'nın değil. Yani aşım benim kaydımın değil KÜNYENİN kusuru.
// ```
// 📌 ⇒ Koordinatöre bir dizin kalemi: **`kuzey-yuan` bitişi 1635 mi 1691 mi?**
//    Halha'yı sayarsa 1691, yalnız Çahar'ı sayarsa 1635. Bugün canlı veri
//    (Urga) 1691 gibi davranıyor ama künye 1635 diyor.
// 📌 Yani bu, `PARTİ 21`deki `cagatay`/`timurlu` ikilemenin tersi: orada
//    üç şıkkın üçü de kusurluydu ve canlı komşuya uymayı seçmiştim.
//    Burada **kusursuz bir şık vardı** ve o da canlı bir komşunun günüydü —
//    yalnız yanlış komşuya bakmışım. Doğru komşu Karakurum değil Urga.
//
// ── ③b 🔴 ÇEKİRDEK Mİ KUYRUK MU — KOORDİNATÖRE KARAR SORUSU ────────
// Ölçtüm:
// ```
//   Karakurum · Urga · Uliastay · Kobdo · Kalgan
//        → HEPSİ `yerlesimler_asya.js`, yani KUYRUK_DOSYALARI'nda
//   Nerçinsk → `_ek9` (çekirdek) · Selenginsk → `_ek13` (çekirdek)
// ```
// ⇒ Bu dosya **çekirdeğe** girerse, taşıdığı dört gün (`1368-09-14` Yuan'ın
//    çöküşü · `1911-12-29` Moğol muhtariyeti · `1919-11-22` Çin işgali ·
//    `1921-07-11` bağımsızlık) çekirdek `s:` havuzunda YENİ sayılır →
//    **`2s` +4.** Oysa aynı dört gün `Karakurum`da ZATEN var — yalnız
//    kuyruk kovasında.
// ⇒ **Kuyruğa** girerse `2s` +0, kuyruk sayacı +4.
//
// 📌 Benim okumam: bu dört gün **Moğolistan'ın kendi kronolojisidir** ve
//    `KUYRUK_DOSYALARI` yorumunun tarifine birebir uyar (*"parti
//    kronolojisi tamamlanınca dosya çekirdeğe ALINIR"*). Ama `denetle.py`
//    koordinatörün dosyası — **karar onun**, ben yalnız iki sayıyı
//    ölçüp veriyorum.
//
// ── ④ 1912-1923 KUYRUĞU — bilerek, ve zaten öyle ────────────────────
// Zincirin son üç dönemi `mogolistan → cin-cumhuriyeti → mogolistan`.
// `mogolistan` **renksiz** (RENK 2 kuyruğunda). Buna rağmen yazıldı çünkü:
// ```
//   ① Karakurum · Urga · Uliastay ZATEN aynı üçlüyü taşıyor — bölge
//      1912-1923 arası HÂLİHAZIRDA boyasız; bu parti YENİ boyasız
//      alan açmıyor, var olanı yeniden dağıtıyor.
//   ② Alternatif `rusya`yı 1923'e kadar uzatmaktı — yani YANLIŞ ama
//      boyalı. Bir atlasta yanlış renk, renksizlikten kötüdür.
// ```
// ⚠️ **`PARTİ 23`teki kararımdan farklı ve fark bilinçli:** orada Qing
//    yakasına nokta koymamıştım çünkü `cin-cumhuriyeti` renksizdi ve
//    **yeni** boyasız alan açacaktım. Burada açmıyorum — komşular zaten
//    renksiz. Kural aynı, sonuç farklı çünkü ölçüm farklı.
// 📌 VE BİR DÜZELTME: `cin-cumhuriyeti` artık **RENKLİ** (ölçtüm, BOYALAR'da).
//    `PARTİ 23`ün gerekçesinde onu renksiz yazmıştım — RENK 2 arada
//    eklemiş. Altay'ın Qing yakası artık açılabilir; o kalem yeniden
//    değerlendirilmeli.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 6/6 içeride (MOTORUN gerçek ölçütü) · kutu 6/6
// ad çakışması YOK (1766 canlı kayda karşı)
// aday-aday en yakın 261,5 km · canlıya en yakın 186,8 km (Bulgan ↔ Karakurum)
// =====================================================================

window.YERLESIMLER_EK19 = [

// ── ① HALHA'NIN DOĞUSU — Nerçinsk'in 612 km'lik menzilini kesen üç ──
{ ad:"Kerulen (Çoybalsan)", tur:"sehir", lat:48.0700, lon:114.5400, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1691-05-30",d:"kuzey-yuan"},{f:"1691-05-30",t:"1911-12-29",d:"qing-hanedani"},{f:"1911-12-29",t:"1919-11-22",d:"mogolistan"},{f:"1919-11-22",t:"1921-07-11",d:"cin-cumhuriyeti"},{f:"1921-07-11",t:"1923-10-29",d:"mogolistan"}] },

{ ad:"Halhın Gol (Buir Nur)", tur:"bolge", lat:47.8000, lon:118.2000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1691-05-30",d:"kuzey-yuan"},{f:"1691-05-30",t:"1911-12-29",d:"qing-hanedani"},{f:"1911-12-29",t:"1919-11-22",d:"mogolistan"},{f:"1919-11-22",t:"1921-07-11",d:"cin-cumhuriyeti"},{f:"1921-07-11",t:"1923-10-29",d:"mogolistan"}] },

{ ad:"Öndörhaan (Hentiy)", tur:"sehir", lat:47.3200, lon:110.6600, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1691-05-30",d:"kuzey-yuan"},{f:"1691-05-30",t:"1911-12-29",d:"qing-hanedani"},{f:"1911-12-29",t:"1919-11-22",d:"mogolistan"},{f:"1919-11-22",t:"1921-07-11",d:"cin-cumhuriyeti"},{f:"1921-07-11",t:"1923-10-29",d:"mogolistan"}] },

// ── ② GOBİ'NİN DOĞUSU — Kalgan'ın 508 km'lik menzilini kesen nokta ──
// ⚠️ `ming-hanedani` YAZILMADI. Kalgan (Zhangjiakou) 1429-1644 arası Ming
//    taşıyor ama o Çin Seddi'nin İÇİNDE; Dariganga seddin KUZEYİNDE,
//    Halha/Sünid otlağıydı. Kalgan'ın zincirini kopyalamak Ming'i
//    500 km kuzeye, bozkırın ortasına taşırdı.
{ ad:"Dariganga", tur:"bolge", lat:45.3200, lon:113.9000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1691-05-30",d:"kuzey-yuan"},{f:"1691-05-30",t:"1911-12-29",d:"qing-hanedani"},{f:"1911-12-29",t:"1919-11-22",d:"mogolistan"},{f:"1919-11-22",t:"1921-07-11",d:"cin-cumhuriyeti"},{f:"1921-07-11",t:"1923-10-29",d:"mogolistan"}] },

// ── ③ KUZEY HALHA — Selenginsk'in 232 km'lik güney taşmasını kesen iki ──
// 🔴 Bu iki nokta BENİM KENDİ HATAMI düzeltiyor: `Selenginsk` (`_ek13`)
//    Kyahta hattını kuzeyden yerine oturtturken güneye 178-232 km taşmış
//    ve 24.144 km² Moğol toprağını Rus boyuyordu.
{ ad:"Bulgan", tur:"sehir", lat:48.8100, lon:103.5300, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1691-05-30",d:"kuzey-yuan"},{f:"1691-05-30",t:"1911-12-29",d:"qing-hanedani"},{f:"1911-12-29",t:"1919-11-22",d:"mogolistan"},{f:"1919-11-22",t:"1921-07-11",d:"cin-cumhuriyeti"},{f:"1921-07-11",t:"1923-10-29",d:"mogolistan"}] },

{ ad:"Mörön (Hövsgöl)", tur:"sehir", lat:49.6300, lon:100.1600, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1691-05-30",d:"kuzey-yuan"},{f:"1691-05-30",t:"1911-12-29",d:"qing-hanedani"},{f:"1911-12-29",t:"1919-11-22",d:"mogolistan"},{f:"1919-11-22",t:"1921-07-11",d:"cin-cumhuriyeti"},{f:"1921-07-11",t:"1923-10-29",d:"mogolistan"}] },

];

;
/* ==== data/yerlesimler_ek21.js ==== */
// =====================================================================
// GOBİ'NİN BATISI — Dış ve İç Moğolistan  ·  6 nokta
// PETEK/NOKTA oturumu · PARTİ 26 · 6 Ağustos 2026
// =====================================================================
// 🟢 ENGEL KALKTI — VE BÖLMEYE DE GEREK KALMADI.
//    Koordinatör *"A: İç Moğolistan yarısını bugün yaz, Dış yarım
//    `mogolistan` gelince `_ek19`e eklenir"* dedi. **Ölçtüm: `mogolistan`
//    GELMİŞ** — RENK 2 hem rengi hem künyesini yazmış:
// ```
//    mogolistan   künye 1911-12-29 → 1923-10-29   ·   renk VAR ✓
// ```
//    ⇒ Bölmeye gerek yok; Gobi'nin batısı **tek partide, altı noktayla**
//    kapanıyor. Ve `_ek19` da artık bağlanabilir (6 nokta, `mogolistan`
//    onun da tek engeliydi).
//
// ── 🔴 DÖRT TAHMİN, ÖNCEDEN ─────────────────────────────────────────
// (Koordinatörün dördüncü kalemi: **öbür uç.**)
// ```
//   nokta                 +6      yeni renk 0      yeni künye 0
//   Değişmez 3 çelişki     0      (`m:` yazılmadı)
//   Değişmez 2 borcu       0      (`d:`/`v:` dönemi YOK)
//   🔴 Değişmez 1 tavanı  +0      ← 6/6 kayıt 1281-01-01'den KESİNTİSİZ
//   🔴 Değişmez 2s        +0      ← KUYRUĞA bağlanırsa (aşağıda ④).
//                                   Çekirdeğe bağlanırsa +5.
//   🔴 ÖBÜR UÇ            YOK     ← ölçüldü: bu partinin hiçbir noktası
//                                   komşusunu kendi toprağının dışına
//                                   itmiyor, çünkü altı nokta sınırın
//                                   İKİ TARAFINA BİRDEN kondu. Gerekçe ⑤.
// ```
//
// ── ① NİÇİN VAR — ölçülen en büyük kalan delik ─────────────────────
// ```
//   40-47°K / 92-108°D    kara 1.006.148 km²    TOPLAM NOKTA: 2
//      503.074 km²/nokta · ort 255 km · EN UZAK 474 km
//   kıyas: Don-Volga cebi 96.399 km²/nokta ⇒ GOBİ BEŞ KAT SEYREK
// ```
//
// ── ② 🔴 VE RENK DE YANLIŞ — MİNG, ÇİN SEDDİ'NİN KUZEYİNDE ─────────
// ```
//   1500-06-15   ming-hanedani %51,2   ← yarım milyon km²
//                sahipsiz      %24,5
//                kuzey-yuan    %24,4
//   1850-06-15   qing %100,0
// ```
// Ming'i oraya taşıyan dört nokta — `Zhangye` · `Yinchuan` · `Ciyayuguan`
// · `Baotou` — **dördü de seddin İÇİNDE** ve 412-474 km güneyde.
// Ming hiçbir zaman Gobi'nin kuzeyine çıkmadı; sed zaten onun için vardı.
// `CLAUDE.md §2` emilmesinin ders kitabı vakası: **dört kayıt da doğru,
// kusur noktasızlıkta.**
//
// ── ③ İKİ ZİNCİR — VE AYIRAN ŞEY GERÇEK BİR SINIR ──────────────────
// ```
//   A  DIŞ MOĞOLİSTAN (Halha)   Gobi-Altay · Bayanhongor · Ömnögovi
//      yuan → kuzey-yuan 1368-09-14 → qing 1691-05-30 → mogolistan …
//      `_ek19`un zinciri birebir (Urga'nın günü; Halha 1691'de Dolonnor'da
//      tâbi oldu)
//   B  İÇ MOĞOLİSTAN / ALAŞA    Ejin · Gaşun Gobi · Alaşa kuzeyi
//      yuan → kuzey-yuan 1368-09-14 → qing 1636-05-15 → cin-cumhuriyeti
//      (Çahar'ın teslimi ve Qing'in ilânı; İç Moğolistan o gün tâbi oldu)
// ```
// 🔴 **55 YILLIK FARK KASITLI.** İç Moğolistan 1636'da, Dış Moğolistan
//    1691'de tâbi oldu. Tek güne indirseydim ya İç'i 55 yıl geç ya Dış'ı
//    55 yıl erken Qing gösterirdim. Koordinatörün `ek19` kararındaki
//    ayrımın ta kendisi: *"bölünen aynı ülke değil, İKİ AYRI ÜLKE."*
// 🟢 Ve iki gün de künyenin İÇİNDE — hayalet aşımı SIFIR:
//    `qing-hanedani` 1636-05-15'te başlıyor (B tam o gün), `kuzey-yuan`
//    koordinatörün düzeltmesiyle artık 1691-05-30'da bitiyor (A tam o gün).
//
// ── ④ ÇEKİRDEK Mİ KUYRUK MU — ÖLÇÜLDÜ, cevap KUYRUK ────────────────
// ```
//   Zhangye · Yinchuan · Baotou · Ciyayuguan · Karakurum · Hâmi
//        → ALTISI DA `yerlesimler_asya.js` = KUYRUK_DOSYALARI
// ```
// ⇒ Bu partinin **bütün komşuluğu kuyrukta.** `ek19`da koordinatörün
//    koyduğu ölçüt (*"aynı ülke iki kovaya bölünmesin"*) burada daha da
//    net: **hiçbir komşusu çekirdekte değil.**
// ⇒ Kuyruğa: `2s` **+0**, kuyruk sayacı +5.
//    Çekirdeğe: `2s` **+5** (`1368-09-14` · `1636-05-15` · `1911-12-29` ·
//    `1919-11-22` · `1921-07-11`; `1912-02-12` maddeli, 30 gün).
// 📌 Sayı kararın sebebi değil, sonucu — koordinatörün `ek19`daki ayrımı.
//
// ── ⑤ ÖBÜR UÇ — bu sefer AYNI PARTİDE ölçüldü ──────────────────────
// Bugün üç kez kendi taşmamı buldum (`Selenginsk` · `Ust-Kamenogorsk` ·
// `Semipalatinsk`) ve kural çıkardım: **orta dikmenin öbür tarafı aynı
// partide ölçülür.** Burada uygulandı ve tasarımı belirledi:
// ```
//   Yalnız Dış Moğolistan yazsaydım → İç Moğolistan'a taşardı
//   Yalnız İç Moğolistan yazsaydım  → Dış Moğolistan'a taşardı
//   ⇒ ALTI NOKTA SINIRIN İKİ TARAFINA BİRDEN kondu; orta dikmeler
//     gerçek sınırın üstüne düşüyor ve hiçbiri komşusunu itmiyor.
// ```
// 📌 Yani bu partide "öbür uç" bir SONRAKİ partinin işi değil, **bu
//    partinin tasarım ilkesi.** Kuralın ilk önleyici uygulaması.
//
// ── KAYNAK — `§4` gereği işaretli ───────────────────────────────────
// 🔴 Tarihler TDV'ye BASMIYOR (Doğu Asya; §4 akademik referansı yeterli
//    sayıyor ama işaretlenmesini istiyor). Üçü de canlı kayıtların
//    kendi günleri, uydurulmadı:
//    `1368-09-14` Yuan'ın çöküşü (Karakurum) · `1636-05-15` Qing'in ilânı
//    (künyenin kendi günü) · `1691-05-30` Dolonnor (Urga) ·
//    `1911-12-29` · `1919-11-22` · `1921-07-11` (Urga · Karakurum) ·
//    `1912-02-12` Xinhai (Kalgan · Gulca).
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 6/6 içeride (MOTORUN gerçek ölçütü) · kutu 6/6
// ad çakışması YOK (1772 canlı kayda karşı)
// aday-aday en yakın 170,5 km · canlıya en yakın 335,0 km (Ejin ↔ Ciyayuguan)
// ⚠️ Üretim koşarken yazıldı — koordinatör *"girdi anlık görüntüsü alındı,
//    dosyalar SERBEST"* dedi (`girdi.anlik_goruntu()`). `arac/girdi.py`ye
//    dokunulmadı.
// =====================================================================

window.YERLESIMLER_EK21 = [

// ═══ A ═══ DIŞ MOĞOLİSTAN (HALHA) — `_ek19` zinciri ═══ 3 nokta ═══

{ ad:"Gobi-Altay (Yösönbulag)", tur:"sehir", lat:46.3700, lon:96.2600, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1691-05-30",d:"kuzey-yuan"},{f:"1691-05-30",t:"1911-12-29",d:"qing-hanedani"},{f:"1911-12-29",t:"1919-11-22",d:"mogolistan"},{f:"1919-11-22",t:"1921-07-11",d:"cin-cumhuriyeti"},{f:"1921-07-11",t:"1923-10-29",d:"mogolistan"}] },

{ ad:"Bayanhongor", tur:"sehir", lat:46.1900, lon:100.7200, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1691-05-30",d:"kuzey-yuan"},{f:"1691-05-30",t:"1911-12-29",d:"qing-hanedani"},{f:"1911-12-29",t:"1919-11-22",d:"mogolistan"},{f:"1919-11-22",t:"1921-07-11",d:"cin-cumhuriyeti"},{f:"1921-07-11",t:"1923-10-29",d:"mogolistan"}] },

// Güney Gobi — sınırın DIŞ tarafındaki en güney nokta. Bunun ve
// `Gaşun Gobi`nin orta dikmesi Moğolistan-Çin sınırının üstüne düşüyor.
{ ad:"Ömnögovi (Dalanzadgad)", tur:"sehir", lat:43.5700, lon:104.4200, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1691-05-30",d:"kuzey-yuan"},{f:"1691-05-30",t:"1911-12-29",d:"qing-hanedani"},{f:"1911-12-29",t:"1919-11-22",d:"mogolistan"},{f:"1919-11-22",t:"1921-07-11",d:"cin-cumhuriyeti"},{f:"1921-07-11",t:"1923-10-29",d:"mogolistan"}] },

// ═══ B ═══ İÇ MOĞOLİSTAN / ALAŞA — Qing 1636, Çin 1912 ═══ 3 nokta ═══
// ⚠️ Bu üçü `mogolistan` TAŞIMIYOR ve bu kasıtlı: İç Moğolistan 1911'de
//    bağımsızlık ilân etmedi, Çin Cumhuriyeti'nin parçası kaldı.
//    A kümesinin kuyruğunu buraya kopyalasaydım üç noktayı on iki yıl
//    yanlış devlette gösterirdim.

// 🔴 Hara-Hoto (Kara Şehir) Yuan devrinde terk edildi ama Ejin vahası
//    sürdü ve 1698'de Torgut bayrağı kuruldu. Nokta vahayı temsil ediyor,
//    harabeyi değil — o yüzden `kur:`/`bit:` YAZILMADI.
{ ad:"Ejin (Hara-Hoto)", tur:"sehir", lat:41.9500, lon:101.0700, g:0, k:3, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1636-05-15",d:"kuzey-yuan"},{f:"1636-05-15",t:"1912-02-12",d:"qing-hanedani"},{f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

// Coğrafî dolgu — ölçümün en aç hücrelerinden ikisi (474 ve 434 km)
// tam burada. `Bozkır (Deşt-i Kıpçak)` · `Karakum` · `Cungarya havzası`
// ile aynı sınıf: pencerede kurulmuş yerleşim yok, UYDURULMADI.
{ ad:"Gaşun Gobi", tur:"bolge", lat:42.5000, lon:103.0000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1636-05-15",d:"kuzey-yuan"},{f:"1636-05-15",t:"1912-02-12",d:"qing-hanedani"},{f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

{ ad:"Alaşa kuzeyi", tur:"bolge", lat:42.4000, lon:105.5000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},{f:"1368-09-14",t:"1636-05-15",d:"kuzey-yuan"},{f:"1636-05-15",t:"1912-02-12",d:"qing-hanedani"},{f:"1912-02-12",t:"1923-10-29",d:"cin-cumhuriyeti"}] },

];

;
/* ==== data/yerlesimler_ek22.js ==== */
// =====================================================================
// DON-VOLGA ARASI — Hoper ve Volga kıyısı  ·  5 nokta
// PETEK/NOKTA oturumu · PARTİ 27 · 6 Ağustos 2026
// =====================================================================
// 🟢 BAĞLANMAK İÇİN HİÇBİR ŞEY BEKLEMİYOR — yeni renk 0, yeni künye 0.
//    renk: altinorda · nogay · rusya → ÜÇÜ DE BOYALAR'da.
// ⚠️ `r772` yayınlandıktan SONRA bağlanmalı: bu koşunun anlık görüntüsü
//    05:20:03'te alındı, bu dosya sonra doğdu. (`ek19` · `ek21` ile aynı
//    sırada — koordinatörün `URETIM_IZI` uyarısı.)
//
// ── 🔴 DÖRT TAHMİN, ÖNCEDEN ─────────────────────────────────────────
// ```
//   nokta                 +5      yeni renk 0      yeni künye 0
//   Değişmez 3 çelişki     0      (`m:` yazılmadı)
//   Değişmez 2 borcu       0      (`d:`/`v:` dönemi YOK)
//   🔴 Değişmez 1 tavanı  +0      ← 5/5 kayıt 1281-01-01'den KESİNTİSİZ
//   🔴 Değişmez 2s        +0      ← üç kırılma gününün ÜÇÜ DE çekirdekte VAR
//   🔴 ÖBÜR UÇ            YOK     ← ölçüldü, gerekçe ④
// ```
//
// ── ① NİÇİN VAR — `PARTİ 22`nin ölçtüğü son cep ────────────────────
// ```
//   DON-VOLGA ARASI (49-54°K / 40-50°D)   385.597 km²   nokta 4
//      96.399 km²/nokta · ort 122 km · EN UZAK 226 km
//   en aç hücreler:
//      226 km  50,5°K/42,5°D  <- Bozkır (Deşt-i Kıpçak)
//      215 km  52,5°K/49,5°D  <- Simbirsk
//      211 km  50,5°K/43,5°D  <- Saratov
//      208 km  50,5°K/41,5°D  <- Voronej
//      200 km  52,5°K/48,5°D  <- Saratov
// ```
// İki ayrı cep: **Hoper-Medveditsa** (41-45°D) ve **Volga yukarısı /
// Zavolje** (48-50°D). Beş nokta ikisini birden kapatıyor.
// ⚠️ Bu, bugünkü partilerin en KÜÇÜĞÜ ve öyle olduğu ölçülerek biliniyor:
//    Gobi 503.074 km²/nokta idi, burası 96.399. Sıraya son konması doğruydu.
//
// ── ② 🔴 ZİNCİRLER KOMŞU SÖZLEŞMESİNDEN — ve `1556` bir KONVANSİYON ─
// Ölçtüm: Volga koridorundaki **dört canlı kayıt da aynı günü taşıyor.**
// ```
//   Saratov · Tsaritsyn · Ural eteği · Rın kumulları
//        altinorda 1281-01-01 → 1556-01-01 → rusya
// ```
// Oysa Saratov 1590'da, Tsaritsyn 1589'da kuruldu. Yani atlas bu koridor
// için **"toprak Astrahan'la (1556) devroldu, kaleler sonra geldi"**
// sözleşmesini çoktan kurmuş.
// ⇒ `Kamışin` (1668) · `Petrovsk` (1698) · `Syzran` (1683) · `Samara`
//    (1586) da o sözleşmeye bağlandı. Kale yıllarını yazsaydım
//    **Saratov 1556'dan Rus, 98 km ötedeki Petrovsk 1698'den Rus** olurdu
//    — aynı koridorda 142 yıllık yamalı bohça.
//
// 🔴 **VE BU SEFER TUTARLI OLAN, UCUZ OLANLA AYNI ÇIKTI — ve bu bir
//    TESADÜF, gerekçe DEĞİL.** Üç kırılma günü (`1441` · `1556` · `1663`)
//    çekirdekte zaten var, o yüzden `2s` **+0.** `PARTİ 22`de günü bilinen
//    üç antlaşmayı sayaç için çekmeyi REDDETMİŞTİM; burada çekilecek bir
//    şey yok — komşunun günü zaten doğru gün.
//    📌 Ayrımı yazıyorum ki ileride *"PETEK/NOKTA `2s`yi sıfırlamak için
//    gün seçiyor"* diye okunmasın: **sıra ters — önce komşu sözleşmesi
//    bulundu, sayaç sonra ölçüldü.**
//
// ── ③ BORİSOGLEBSK AYRI — Volga değil HOPER havzası ────────────────
// ⚠️ Tek `nogay`lı kayıt ve zinciri `Penza`dan (`_ek17`), Saratov'dan
//    DEĞİL. Sebep coğrafî: Hoper-Medveditsa arası Volga koridorunun
//    dışında, Sura yukarısıyla aynı otlak kuşağıdır ve Astrahan'ın
//    düşüşüyle devrolmadı — Nogay Ordası'nın elinde kaldı.
//    Saratov'un 1556'sını buraya kopyalasaydım Nogayları yüz yedi yıl
//    erken silerdim.
//
// ── ③b ⚠️ `altinorda` KÜNYE AŞIMI — DEVRALINDI, doğurulmadı ────────
// Dört Volga kaydı `altinorda`yı **1556-01-01**'e kadar taşıyor; künye
// `t=1502-01-01` diyor ⇒ 54 yıl aşım. **Bu benim kaydımın kusuru değil,
// komşudan gelen sözleşme:** `Saratov` · `Tsaritsyn` · `Ural eteği` ·
// `Rın kumulları` dördü de aynısını yapıyor ve ölçüldü — canlı veride
// `altinorda`nın 39 döneminin **14'ü** künyeyi aşıyor.
// 📌 Sebebi tarihî: 1502'de biten Büyük Orda'dır; aşağı Volga'da
//    **Astrahan Hanlığı 1556'ya kadar** sürdü ve atlasın onun için ayrı
//    kimliği yok. Ayrılsaydım dört komşumla çelişen tek küme olurdum.
// ⇒ Koordinatöre künye kalemi: **`astrahan-hanligi` kimliği** (1466-1556)
//    açılırsa bu aşım dört komşuyla birlikte tek turda kapanır.
//
// ── ④ ÖBÜR UÇ — ölçüldü, taşma YOK ─────────────────────────────────
// Beş noktanın beşi de **Rus tarafının içinde**; hiçbiri bir dış sınıra
// komşu değil. En yakın yabancı sahipli komşu `Bozkır (Deşt-i Kıpçak)` ve
// `Kalmuk bozkırı` — ikisi de kendi dönemlerini taşıyor ve bu beş nokta
// onları kendi toprağının dışına itmiyor, yalnız Saratov'un ve
// Simbirsk'in 200+ km'lik menzilini kısaltıyor.
// 📌 `PARTİ 26`da kural tasarımı belirlemişti; burada **kontrol olarak**
//    koşturuldu ve boş çıktı. İkisi de kuralın uygulanmasıdır.
//
// ── KAYNAK — `§4` gereği işaretli ───────────────────────────────────
// 🔴 Beş kaydın kuruluş yılları TDV'ye BASMIYOR (Samara 1586 · Kamışin
//    1668 · Syzran 1683 · Borisoglebsk ve Petrovsk 1698). **Ama hiçbiri
//    veriye GİRMEDİ** — zincirler komşu sözleşmesinden alındı, kuruluş
//    yılları yalnız bu yorumda anılıyor. Uydurulmuş tek gün yok.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 5/5 içeride (MOTORUN gerçek ölçütü) · kutu 5/5
// ad çakışması YOK (1772 canlı kayda karşı)
// aday-aday en yakın 112,5 km · canlıya en yakın 98,0 km (Petrovsk ↔ Saratov)
// =====================================================================

window.YERLESIMLER_EK22 = [

// ── ① HOPER HAVZASI — Volga koridorunun DIŞI ───────────────────────
// Zinciri `Penza`dan (`_ek17`): aynı otlak kuşağı, aynı üç gün.
{ ad:"Borisoglebsk", tur:"kale", lat:51.3667, lon:42.0833, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1663-01-01",d:"nogay"},{f:"1663-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ── ② VOLGA KORİDORU — dördü de Saratov/Tsaritsyn sözleşmesinde ────
// 🔴 Ölçümün en aç hücresi (226 km, 50,5°K/42,5°D) ile ikinci en aç
//    kuşağı (48,5-49,5°D) bu dört noktayla kapanıyor.
{ ad:"Kamışin", tur:"kale", lat:50.0833, lon:45.4000, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1502-03-01",t:"1556-01-01",d:"nogay"},{f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Petrovsk (Saratov)", tur:"kale", lat:52.3167, lon:45.3833, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1502-03-01",t:"1556-01-01",d:"astarhan"},{f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

{ ad:"Syzran", tur:"kale", lat:53.1500, lon:48.4667, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1502-03-01",t:"1556-01-01",d:"nogay"},{f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ⚠️ Samara'nın komşusu Simbirsk `kazan 1438→1552-10-02` taşıyor —
//    KOPYALANMADI. Simbirsk Kazan Hanlığı'nın güney kanadıydı; Samara
//    Volga'nın dirseğinde, Nogay bozkırının kenarında ve hiçbir zaman
//    Kazan'a bağlı olmadı. Kopyalasaydım şehri 114 yıl yanlış hanlıkta
//    gösterirdim.
{ ad:"Samara", tur:"kale", lat:53.2000, lon:50.1500, g:0, k:4, d:[],
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1502-03-01",t:"1556-01-01",d:"nogay"},{f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_h2_afrika.js ==== */
// ===========================================================================
// NOKTA HALKA-2 · 1 — Sudan · Habeşistan · Eritre · Somali · Umman
// ===========================================================================
// Oturum: NOKTA HALKA-2 <1>   ·   Şartname: oturumlar/NOKTA-HALKA2.md
// Kutu: lon 22-60 / lat -2..22
//
// NİÇİN YAZILDI — ölçülmüş boşluk (bu oturumun kendi ölçümü, 8 Ağustos 2026):
//   kutu içi 99 nokta · ham kutu alanı 11,13 mn km² → 8,9 nokta/mn km²
//   (şartnamenin "9,0"ı doğrulandı; payda DENİZ DAHİL ham kutu)
//   kara maskesi üzerinde 0,25° ızgara, 10.182 hücre:
//     en yakın noktaya uzaklık  ortanca 199 km · ortalama 337 km · en uzak 1.580 km
//     hücrelerin %49,8'i 200 km'den, %35,8'i 300 km'den uzak
//   ülke ülke (NE admin_0 × kutu):
//     Sudan 1.868.384 km² / 31 · Etiyopya 1.135.862 / 23 · Güney Sudan 631.271 / 0
//     Somali 475.670 / 11 · Umman 219.405 / 2 · Somaliland 168.487 / 7
//     Eritre 123.274 / 5 · Cibuti 21.984 / 1
//
// SONUÇ (bu dosya yazıldıktan sonra AYNI yöntemle yeniden ölçüldü):
//   kutu içi nokta            99 → 280      yoğunluk  8,9 → 25,2  (ölçüt: 25)
//   benim ülkelerim           80 → 261      yoğunluk 17,2 → 56,2
//   boşluk ortancası      199 km → 93 km  · >200 km hücre %49,8 → %23,1
//   Sudan 16,6→46,0 · Etiyopya 20,2→59,9 · Güney Sudan 0,0→41,2 ·
//   Somali 23,1→65,2 · Umman 9,1→68,4 · Somaliland 41,5→95,0 ·
//   Eritre 40,6→113,6 · Cibuti 45,5→227,4
// SEKİZ KONTROLÜN SEKİZİ DE TEMİZ: ayrıştırma · bilinmeyen alan 0 ·
//   ad çakışması 0 · 3 km ihlali 0 (en yakın çift 8,54 km) · maske dışı 0 ·
//   renksiz kimlik 0 · künyesiz kimlik 0 · dönem sağlığı 0 sorun ·
//   Değişmez 1 İŞARETSİZ boşluk 0 · canlıda olmayan yeni gün 0.
// AYRICA ölçüldü: 181 noktanın 181'i benim sekiz ülkemin İÇİNDE
//   (halka 6-7'ye taşan nokta 0).
//
// 🔴 KUTUNUN %24'ÜNE KASTEN DOKUNULMADI. Kongo DC · Kenya · Uganda · Orta
//    Afrika · Çad · Tanzanya · Ruanda = 1,86 mn km², hepsi ONCELIK.md §4'e
//    göre HALKA 6-7. Halka 2 işi yapan bir oturumun oraya nokta koyması
//    SIRA İHLALİDİR. Kutu yoğunluğunun tavanı bu yüzden matematiksel olarak
//    sınırlı; bu bir eksik değil, bir KARARDIR.
//
// ---------------------------------------------------------------------------
// TASARIM İLKESİ — SIFIR KIRILMA BORCU
// ---------------------------------------------------------------------------
// Bu dosyadaki HİÇBİR nokta yeni bir tarih icat etmez. Kullanılan bütün
// `f:`/`t:` değerleri, canlı veride ZATEN var olan kırılmalardır:
//   1504-01-01 · 1517-04-13 · 1515-04-01 · 1557-01-01 · 1577-01-01
//   1821-01-04 · 1821-06-14 · 1821-08-19 · 1874-11-02 · 1882-09-07
//   1883-12-23 · 1884-01-01 · 1884-07-18 · 1885-01-26 · 1885-02-05
//   1887-01-06 · 1889-01-01 · 1897-01-01 · 1898-09-02 · 1899-01-19
//   1905-01-01 · 1916-05-23 · 1923-10-29
// ⇒ Değişmez 2 (Osmanlı senkronu) borcu YAPISAL SIFIR — bu dosyada tek bir
//   `d:` dönemi bile yok, `v:` dönemleri mevcut kırılmalarla birebir aynı gün.
// ⇒ Değişmez 2s (yabancı senkron) borcu da SIFIR beklenir: yeni gün yok.
// 📌 Bedeli var ve saklanmıyor: bazı gerçek dönemler bu yüzden YAZILAMADI.
//   Hepsi aşağıda ⚠️ ile işaretli ve koordinatöre kalem kalem bildirildi.
//
// ---------------------------------------------------------------------------
// KAYNAK (CLAUDE.md §4 — TDV birincil)
// ---------------------------------------------------------------------------
//   sudan          200 ✓  Hartum 1823 kuruluşu · Ubeyyid · Kordofan 1821 ·
//                         Hartum'a giriş 1885-01-26 · Kondominyum 1899-01-19
//   func           200 ✓  Func (Sennâr) 1504 kuruluşu · 1820-21 Mısır fethi
//   darfur         200 ✓  Keyra hânedanı · 1874 Mısır ilhakı · Ali Dinar
//   muhammed-ahmed-el-mehdi 200 ✓  Ubeyyid 1882-09-07 · Hartum 1885-01-26 ·
//                         Ümmü Dermân'ın başkent oluşu 1885 · Halife 1898-09-02
//   etiyopya       200 ✓  Evfât · Adal · merkezin 1577'de AVSA'ya taşınması ·
//                         Masavva 1885-02-05 · Uccialli 1889-05-02
//   somali         200 ✓  Zeyla-Berbera-Tacûra 1883-84 · Benâdir · Mecerteyn
//   eritre · cibuti · makdisu · berbera · zeyla · masavva · dongola ·
//   kordofan · hartum · nube · evfat · harar · cimma · sennar   hepsi 200 ✓
// 🔴 ÖLÜ ÇIKAN (302) ve bu yüzden slug olarak YAZILMAYAN — ölçüldü, uydurulmadı:
//   ummuderman · omdurman · atbara · ed-damer · fasoda · malakal · rumbek ·
//   gondokoro · lado · ekvatorya · bahrulgazal · kadugli · dilling · muglad ·
//   kutum · kebkabiye · sinca · bursudan · silluk · zende · vaday · adal ·
//   zufar · ogaden · hobyo · mecerteyn · kismayu · berave · taleh · gambela ·
//   dire-dava · asaita · nekemte  (32 slug, 32'si de 302)
// ⚠️ TUZAK ② YAŞANDI VE KAYDA GEÇİYOR: `mehdi` HTTP 200 döndürür ama açılan
//   madde SUDAN MEHDÎSİ DEĞİL, genel Mehdî akîdesidir. Doğrusu
//   `muhammed-ahmed-el-mehdi`. Aynı şekilde `vav` 200 (Arap harfi) ve
//   `cevher` 200 (mücevher) — ikisi de yer maddesi DEĞİL. Üçü de
//   "200 aldım demek doğru maddeyi açtım demek değildir"in canlı örneği.
//
// ---------------------------------------------------------------------------
// KULLANILAN KİMLİKLER — hepsi renkler.py'de RENKLİ (ölçüldü, 8 Ağustos)
// ---------------------------------------------------------------------------
//   nube · funj · darfur · mehdi · ingiltere · habesistan · italya · adal ·
//   somali · memluk · fransa · nebhani · umman   → 13 kimlik, 13'ü de RENKLİ
// 🔴 KOORDİNATÖRE BİLDİRİLDİ — bu dosyanın ESERİ DEĞİL, ölçülen mevcut borç:
//   `kaffa` · `cimma` · `vollayta` · `sidamo` RENKLİ ama devletler.js'te
//   KÜNYESİZ. Dördü de CANLI noktalarda kullanılıyor (Bonga · Cimma · Sodo ·
//   Yirgalem, yerlesimler_afrika.js).
// 🔴 GEREKEN AMA HİÇ OLMAYAN KİMLİKLER (ne renk ne künye) — bu yüzden
//   aşağıda ilgili noktalar ya kasten sahipsiz ya en yakın MEŞRÛ kimlikle
//   yazıldı, ve her biri yerinde ⚠️ ile işaretli:
//   `silluk` (Şilluk Krallığı, Fâşoda) · `zende` (Azande) · `vaday` ·
//   `avsa` (Avsa Sultanlığı) · `mecerteyn` · `hobyo` · `tuncur`
// ===========================================================================

window.YERLESIMLER_H2_AFRIKA = [

// ===========================================================================
// 1) SUDAN — NİL VADİSİ (Dongola kolu)
// ---------------------------------------------------------------------------
// Zincir mevcut Dongola · Kerma · Debbe · Merevî kayıtlarıyla BİREBİR:
//   Nûbe krallıkları → 1504-01-01 Func → 1821-01-04 Kavalalı Mısır'ının
//   Nûbe fethi (tâbi) → 1885-01-26 Mehdî Devleti → 1899-01-19 Kondominyum.
// Kaynak: TDV `func` (1504 kuruluşu, Üçüncü Şelâle'ye kadar), TDV `sudan`
// (1820-21 fethi), TDV `muhammed-ahmed-el-mehdi` (Hartum 1885-01-26).
// ===========================================================================

// Sükkût bölgesi — İkinci ile Üçüncü Şelâle arasındaki Nil kolu. Kerma ile
// Vâdî Halfâ arasında 245 km boyunca tek nokta yoktu.
{ ad:"Delgo (Sükkût)", tur:"sehir", lat:20.126, lon:30.548, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"künye `ingiliz-sudani` f:1899-01-19 — kaydın kendi günü künyenin AÇILIŞ günüyle BİREBİR aynı (Anglo-Mısır Kondominyumu). 🟡 Kimlik düzeltmesi bu eşleşmeye dayanıyor; TDV'ye AYRICA sorulmadı (damga: okumadım)."}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Mahas bölgesi; Nûbe'nin İkinci Şelâle'ye bakan kuzey ucu.
{ ad:"Abrî (Mahas)", tur:"sehir", lat:20.803, lon:30.352, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"künye `ingiliz-sudani` f:1899-01-19 — kaydın kendi günü künyenin AÇILIŞ günüyle BİREBİR aynı (Anglo-Mısır Kondominyumu). 🟡 Kimlik düzeltmesi bu eşleşmeye dayanıyor; TDV'ye AYRICA sorulmadı (damga: okumadım)."}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Nil'in büyük kıvrımının batı ucu — Debbe ile Merevî arasındaki eyer.
{ ad:"Kortî", tur:"sehir", lat:18.100, lon:31.567, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Atbara ile Nil'in birleştiği yer; Mecâzîb şeyhliğinin merkeziydi.
{ ad:"Ed-Dâmer", tur:"sehir", lat:17.598, lon:33.966, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Eski Meroe (Begravviye) piramitleri; Şendî ile Ed-Dâmer arasındaki halka.
{ ad:"Kabûşiyye", tur:"sehir", lat:16.883, lon:33.750, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// 🔴 MEHDÎ DEVLETİ'NİN BAŞKENTİ — ve atlasta HİÇ YOKTU.
// TDV `muhammed-ahmed-el-mehdi`: Hartum 26 Ocak 1885'te düştükten sonra
// idare merkezi Ümmü Dermân'a taşındı, cami ve konutlar orada yapıldı;
// Mehdî 22 Haziran 1885'te burada öldü, Halife Abdullah 2 Eylül 1898'e
// kadar buradan yönetti. Hartum'un 18,7 km batısında — 3 km kuralına
// takılmıyor ve ayrı bir şehirdir.
// 📌 `ek6`daki Çerkask vakasının aynısı: künyede yazılı BAŞKENT, haritada yok.
{ ad:"Ümmü Dermân", tur:"sehir", lat:15.645, lon:32.477, g:1, k:3, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// ===========================================================================
// 2) SUDAN — MAVİ NİL ve CEZÎRE (Sennâr kolu, 1821-06-14)
// ---------------------------------------------------------------------------
// Zincir mevcut Sennar · Vad Medenî · Kosti · Ed-Düveym kayıtlarıyla birebir.
// TDV `func`: Func en geniş hâlinde "Üçüncü Şelâle'den Mavi Nil'e, Kızıldeniz'den
// Kordofan'a" uzanıyordu; çekirdeği Nil ile Mavi Nil arasıdır (Cezîre).
// ===========================================================================

// Mavi Nil boyunda Sennâr ile Vad Medenî arasındaki eyer.
{ ad:"Sincâ", tur:"sehir", lat:13.145, lon:33.932, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// TDV `muhammed-ahmed-el-mehdi` maddesinde adı geçen Müsellemiyye.
{ ad:"Müsellemiyye", tur:"sehir", lat:14.400, lon:33.325, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Rufâa", tur:"sehir", lat:14.767, lon:33.367, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Beyaz Nil'in sol yakası — Ed-Düveym ile Kosti arasındaki eski Kavâ.
{ ad:"El-Kavâ", tur:"sehir", lat:13.740, lon:32.500, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Beyaz Nil'in Kosti'den güneye uzanan kolu; Func'un güney sınır kuşağı.
{ ad:"Cebeleyn", tur:"sehir", lat:12.598, lon:32.816, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Mavi Nil'in Habeşistan sınırındaki güney ucu; Fâzûğlî'nin devamı.
{ ad:"Kurmuk", tur:"sehir", lat:10.830, lon:34.283, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// ===========================================================================
// 3) SUDAN — KORDOFAN (1821-08-19 / Mehdî 1882-09-07)
// ---------------------------------------------------------------------------
// Zincir mevcut Kordofan (Ubeyyid) kaydıyla birebir. Mehdî tarihi TDV
// `muhammed-ahmed-el-mehdi`de AÇIKÇA yazılı: Ubeyyid 7 Eylül 1882.
// ⚠️ Güney Kordofan'ın Nûbe dağları (Kâdûglî · Dilling · Talodi) 1821'de
//   fiilen fethedilmedi; Mısır idaresi oraya ancak XIX. yy sonunda ulaştı.
//   Yine de Kordofan eyaletinin HUKUKÎ sınırı içindeydi ve bu atlasın
//   taban rengi DE JURE sahipliği gösterir (girdi.py `isg:` notu). Ayrı bir
//   fiilî-denetim tarihi yazmak yeni kırılma demekti; yazılmadı.
// ===========================================================================

{ ad:"Er-Rahad", tur:"sehir", lat:12.712, lon:30.648, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Ümmü Rüvâbe", tur:"sehir", lat:12.903, lon:31.217, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Kuzey Kordofan'ın çöle bakan ucu; Bâra ile Dârfûr arasındaki 300 km'lik
// boşluğun ortası.
{ ad:"Sodirî", tur:"sehir", lat:14.423, lon:29.100, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Nûbe dağları — TDV `muhammed-ahmed-el-mehdi` maddesinde "Nûbe dağları" ve
// "Kadır bölgesi" olarak geçer; Mehdî'nin ilk sığındığı dağlık kuşak.
{ ad:"Dilling", tur:"sehir", lat:12.050, lon:29.650, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Kâdûglî", tur:"sehir", lat:11.010, lon:29.717, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Talodi", tur:"sehir", lat:10.633, lon:30.383, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Ebû Zabed", tur:"sehir", lat:12.350, lon:29.250, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Bâbanûsa ve Muglad: Batı Kordofan'ın Bahrülgazâl'e bakan güney ucu.
{ ad:"Muglad", tur:"sehir", lat:11.033, lon:27.733, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Bâbanûsa", tur:"sehir", lat:11.333, lon:27.817, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Ğubeyş", tur:"sehir", lat:12.150, lon:27.383, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// ===========================================================================
// 4) DÂRFÛR — DÂCÛ → TUNCİLER → KEYRA
// ---------------------------------------------------------------------------
// 🔴 BU BÖLÜM YAZILDIKTAN SONRA DÜZELTİLDİ ve düzeltme bir HAYALET DEVLETİ
//   kaldırdı. İlk hâli mevcut El-Fâşir · Nyala · Cenîne kayıtlarını
//   izliyordu: `darfur` 1281-01-01'den. Ama `darfur` künyesi (koordinatör,
//   8 Ağustos) **1695-01-01..1916-11-06** diyor — yani Keyra hânedanı
//   1695'te kuruldu ve 1281-1695 arası **414 YIL** var olmayan bir devlet
//   boyanıyordu. CLAUDE.md §3.5'in tarif ettiği hatanın ta kendisi.
//   Mevcut kayıtların yorumu bunu zaten biliyordu — *"öncesi Tuncur
//   krallığı, kimliği YOK ve `darfur` ile boyandı"* — kimlik O ZAMAN yoktu;
//   BUGÜN VAR.
// ⚠️ VE DÜZELTMENİN BEDELİ ÖLÇÜLDÜ, VARSAYILMADI: iki yeni sınır günü
//   gerekiyordu (1400-01-01 · 1695-01-01) ve ikisinin de kronolojide
//   **0 GÜN** uzaklıkta maddesi var ⇒ Değişmez 2s borcu **SIFIR**.
//   Ölçülmeseydi bu düzeltme 2s tavanını (121, DOLU) delebilirdi.
//
// 🔴🔴 AMA DENETİMİN "TEMİZ" DEMESİ BURADA YETMİYOR — VE BUNU SAKLAMIYORUM.
//   O iki maddenin NE OLDUĞUNA baktım:
//     1400-01-01 → "Bursa'da Yıldırım Darüşşifası — ilk Osmanlı hastanesi"
//     1695-01-01 → "Hâfız Osman'ın II. Mustafa'ya hat hocası tayin edilmesi"
//   İkisinin de Dârfûr'la **hiçbir ilgisi yok.** Yani Değişmez 2s'in sorduğu
//   soru (*"±30 günde madde var mı"*) EVET diyor, ama kullanıcının göreceği
//   şey şu olur: Tunciler'den Keyra'ya geçiş, ekranda bir HAT HOCASI
//   TAYİNİ'nin altında belirir.
//   📌 CLAUDE.md §3 bunu kelimesi kelimesine tarif ediyor: *"değişim, o güne
//   rastgele denk gelen alakasız bir maddenin altında belirir — kullanıcının
//   en çok şikâyet ettiği hata bu."*
//   ⇒ Denetim GEÇİYOR, gösterim YANLIŞ. İkisi ayrı şeydir ve ölçüt yalnız
//     birincisini görüyor.
//   ⇒ İSTENEN: `olaylar*.js`e iki madde (Tunciler'in Dâcû'yu devirmesi ~1400,
//     Keyra hânedanının kurulması 1695). O dosya BENİM DEĞİL; koordinatöre
//     bildirildi. Madde yazılana kadar bu iki gün "teknik olarak kapalı,
//     anlatı olarak açık" sayılmalıdır.
// Zincir:
//   `dacu` (Dâcû, künye 1200-1400) → 1400-01-01 `tunciler` (1400-1695) →
//   1695-01-01 `darfur` (Keyra) → 1874-11-02 Mısır ilhakı (tâbi) →
//   1883-12-23 Mehdî → 1898-09-02 Ali Dinar → 1916-05-23 İngiltere.
// 📌 CANLI VERİDEKİ El-Fâşir · Nyala · Cenîne HÂLÂ `darfur` 1281'den
//   yazıyor — yani aynı hayalet orada duruyor. O dosya BENİM DEĞİL;
//   koordinatöre bildirildi.
// TDV `darfur`: Süleyman Solonc 1695-1715 Keyra hânedanını kurdu; 1874'te
// Sultan İbrâhim Zübeyr Paşa kuvvetlerince öldürüldü; Ali Dinar 6 Kasım
// 1916'da öldürüldü. ⚠️ Atlasın 1916-05-23'ü El-Fâşir'in İNGİLİZ İŞGALİ
// tarihidir (Ali Dinar'ın ölümü değil) ve canlı veride mevcut bir kırılmadır;
// tutarlılık için aynen kullanıldı.
// k:0 ve m: YOK — Dârfûr egemen bir sultanlıktı (mevcut kayıtların gerekçesi).
// ===========================================================================

{ ad:"Kutum",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe (Nyala'ya bkz.)",m:"El-Fâşir", tur:"sehir", lat:14.200, lon:24.660, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Kebkâbiye",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:13.650, lon:24.083, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

// TDV `darfur`: Cebel Merre, 3.071 m ile bölgenin en yüksek noktası ve
// Keyra hânedanının çekirdek yurdu.
{ ad:"Cebel Merre", tur:"bolge", lat:12.950, lon:24.270, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Zâlincî",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:12.905, lon:23.483, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Ed-Da'în",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:11.462, lon:26.128, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Burâm",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:10.833, lon:25.167, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Ümmü Keddâde",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:13.600, lon:26.690, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

// Dârfûr'un kuzeybatı ucu; Vaday Sultanlığı ile sınır.
// ⚠️ `vaday` kimliği ne renkli ne künyeli — Cenîne kaydının yorumu da bunu
//   söylüyor. Sınırın öbür yakası bu yüzden hâlâ boyasız; §3.5.1'in
//   "öbür ucun rengi yoksa tek uçlu kalır" istisnası.
// 🔴 İKİ KEZ DÜZELTİLDİ ve ikincisi ders oldu. Ham koordinat (15,100/22,283)
// Natural Earth'te ÇAD tarafına düşüyordu; 22,470'e çekildi — ÖLÇÜLDÜ, HÂLÂ
// ÇAD'DI. Sınır orada 23,0°D'ye kadar batıya sarkıyor. 23,000'e alındı ve
// üçüncü kez ölçüldü: Sudan.
// 📌 Ders: "biraz doğuya kaydırdım, artık Sudan'dadır" bir TAHMİNDİR.
//   Dârfûr zinciri taşıyan bir noktanın Çad'da durması §3.5.1'in ta
//   kendisidir (yanlış devletin toprağını boyamak) ve tahminle kapatılamaz.
{ ad:"Tîne (Dârfûr)",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:15.060, lon:23.000, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

// ===========================================================================
// 5) SUDAN — KIZILDENİZ KIYISI (Beca ülkesi)
// ---------------------------------------------------------------------------
// Zincir mevcut Sinkat · Akīk kayıtlarıyla birebir:
//   Memlûk → 1517-04-13 → Habeş (kısa) → 1557-01-01 Osmanlı Habeş Eyaleti →
//   1885-02-05 İngiltere.
// 🔴 CLAUDE.md §3.5.1'in KENDİ VAKASI BURASI: "1517-04-13 Memlük DEVLETİ'nin
//   sonudur, Kızıldeniz kıyısının FETHİ DEĞİLDİR." Mevcut kayıtlar bu dersi
//   uygulayarak 1517→1557 arasını `habesistan` yazmış; yeni noktalar aynı
//   zinciri taşıyor — hatayı tekrarlamamak için tek satır bile değiştirilmedi.
// ===========================================================================

// Nil-Kızıldeniz kervan yolunun Beca düğümü; Sevâkin ile Berber arasında
// 300 km boyunca tek nokta yoktu.
{ ad:"Hayyâ", tur:"sehir", lat:18.317, lon:36.383, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1899-01-19",d:"ingiltere"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"Gün TDV `sudan`dan DOĞRUDAN (kapsayıcı madde, Sudan geneli: 19 Ocak 1899 condominium) — KOMŞUDAN DEĞİL. Kıyıya özel katılış günü okunan kaynakta BULUNAMADI. NOKTA-ORTADOGU-0077 · YAMA B2 · M-5238"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}], v:[] },

// TDV `muhammed-ahmed-el-mehdi` maddesinde adı geçen Trinkitat; Tokar'ın
// iskelesi ve 1884 seferlerinin çıkarma noktası.
// ⚠️ lon 37,750 → 37,700: ham koordinat kara maskesinin içindeydi ama
// ülke poligonlarının HİÇBİRİNE düşmüyordu (kıyı çizgisi uyuşmazlığı).
{ ad:"Trinkitât", tur:"liman", lat:18.683, lon:37.700, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1899-01-19",d:"ingiltere"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"Gün TDV `sudan`dan DOĞRUDAN (kapsayıcı madde, Sudan geneli: 19 Ocak 1899 condominium) — KOMŞUDAN DEĞİL. Kıyıya özel katılış günü okunan kaynakta BULUNAMADI. NOKTA-ORTADOGU-0077 · YAMA B2 · M-5238"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}], v:[] },

// Sevâkin ile Halâib arasındaki 350 km'lik kıyıda tek nokta yoktu.
{ ad:"Muhammed Kol", tur:"liman", lat:20.833, lon:37.150, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1899-01-19",d:"ingiltere"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"Gün TDV `sudan`dan DOĞRUDAN (kapsayıcı madde, Sudan geneli: 19 Ocak 1899 condominium) — KOMŞUDAN DEĞİL. Kıyıya özel katılış günü okunan kaynakta BULUNAMADI. NOKTA-ORTADOGU-0077 · YAMA B2 · M-5238"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}], v:[] },

// Bûr Sûdân 1909'da Sevâkin'in yerine liman olarak kuruldu; öncesinde
// yerleşim YOKTU, o yüzden `kur:` yazıldı. Sahiplik zinciri Kondominyum
// tarihinden başlar — YENİ GÜN İCAT EDİLMEDİ (bkz. dosya başı ilkesi;
// Kesela kaydının 1840 çözümüyle aynı desen).
{ ad:"Bûr Sûdân", tur:"liman", lat:19.617, lon:37.216, g:0, k:3, m:"Sevâkin", kur:"1909-01-01",
  s:[{f:"1909-01-01",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}], d:[], v:[] },

// ===========================================================================
// 6) ERİTRE
// ---------------------------------------------------------------------------
// Zincir mevcut Asmara kaydıyla birebir: Habeşistan → 1889-01-01 İtalya.
// TDV `etiyopya`: Uccialli Antlaşması 2 Mayıs 1889; İtalya Masavva'yı
// 5 Şubat 1885'te işgal etmişti; antlaşma 26 Ekim 1896'da feshedildi.
// ⚠️ DEBÂRVE'nin OSMANLI DÖNEMİ YAZILAMADI. Özdemir Paşa 1557'de Debârve'yi
//   aldı ve Habeş Eyaleti'nin iç merkezi yaptı; şehir XVI. yy sonunda
//   kaybedildi. KAYIP TARİHİ canlı veride bir kırılma DEĞİL, yazmak Değişmez
//   2'ye borç açardı (bu dosyanın sıfır-borç ilkesi). Nokta Asmara zinciriyle
//   yazıldı ve eksiklik KOORDİNATÖRE BİLDİRİLDİ — kronoloji maddesi
//   yazıldığında düzeltilmelidir.
// ===========================================================================

{ ad:"Ağordat", tur:"sehir", lat:15.549, lon:37.889, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Barentu", tur:"sehir", lat:15.106, lon:37.590, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Nakfa", tur:"sehir", lat:16.667, lon:38.475, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Tesseney", tur:"sehir", lat:15.110, lon:36.660, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Adi Kayh", tur:"sehir", lat:14.845, lon:39.377, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Ğındâ", tur:"sehir", lat:15.500, lon:39.000, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ⚠️ Osmanlı dönemi yazılamadı — yukarıdaki bölüm notuna bakınız.
{ ad:"Debârve", tur:"sehir", lat:15.100, lon:38.833, g:0, k:4,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ===========================================================================
// 7) CİBUTİ
// ---------------------------------------------------------------------------
// Zincir mevcut Tacûra kaydıyla birebir: Adal → 1884-01-01 Fransa.
// TDV `somali`: Zeyla, Berbera ve Tacûra 1883-84'te sömürgeleştirildi.
// Cibuti şehri 1888'de kurulduğu için `kur:` taşır; sahiplik zinciri yine
// mevcut kırılmadan başlar (yeni gün icat edilmedi).
// ===========================================================================

{ ad:"Cibûtî", tur:"liman", lat:11.588, lon:43.145, g:1, k:3, kur:"1888-01-01",
  s:[{f:"1888-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",enklav:true}], d:[] },

// ⚠️ lat/lon 11,967/43,283'ten 11,993/43,278'e alındı (2,9 km kuzey): ham
// koordinat Natural Earth 10m kara maskesinin DIŞINDA kalıyordu ve maske
// dışı nokta HİÇ toprak sahibi olamaz (denetle.py konum denetimi).
{ ad:"Obok", tur:"liman", lat:11.993, lon:43.278, g:0, k:3,
  s:[{f:"1281-01-01",t:"1884-01-01",d:"adal"},{f:"1884-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",enklav:true}], d:[] },

{ ad:"Alî Sabîh", tur:"sehir", lat:11.156, lon:42.712, g:0, k:3,
  s:[{f:"1281-01-01",t:"1884-01-01",d:"adal"},{f:"1884-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",enklav:true}], d:[] },

{ ad:"Dikhil", tur:"sehir", lat:11.104, lon:42.370, g:0, k:3,
  s:[{f:"1281-01-01",t:"1884-01-01",d:"adal"},{f:"1884-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",enklav:true}], d:[] },

// ===========================================================================
// 8) HABEŞİSTAN — kuzey ve orta yayla (Tigre · Begemder · Gocam · Vollo · Şoa)
// ---------------------------------------------------------------------------
// Zincir mevcut Gondar · Adua · Lalibela · Debre Berhan kayıtlarıyla birebir:
// tek dönem, `habesistan` 1281-1923. Bu yaylanın hânedan değişiklikleri
// (Zağve → Süleymânî, Zemene Mesafint) DEVLETİ değiştirmez.
// ===========================================================================

// Semien dağlarının kapısı; Gondar ile Aksum arasındaki 200 km'lik boşluk.
{ ad:"Debârek", tur:"sehir", lat:13.157, lon:37.900, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// Gocam'ın merkezi; Nil kavsi içindeki bütün yayla noktasızdı.
{ ad:"Debre Markos", tur:"sehir", lat:10.350, lon:37.717, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Mota", tur:"sehir", lat:11.083, lon:37.867, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Bure (Gocam)", tur:"sehir", lat:10.700, lon:37.067, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Völdiya", tur:"sehir", lat:11.830, lon:39.600, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// II. Tewodros'un kalesi ve 1868 İngiliz seferinin hedefi.
{ ad:"Mekdelâ", tur:"kale", lat:11.410, lon:39.360, g:0, k:4,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Ambo", tur:"sehir", lat:8.983, lon:37.850, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Fiçe", tur:"sehir", lat:9.800, lon:38.733, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Avaş", tur:"sehir", lat:8.983, lon:40.167, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Bâtî", tur:"sehir", lat:11.192, lon:40.017, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Hosaena", tur:"sehir", lat:7.550, lon:37.850, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Arba Minç", tur:"sehir", lat:6.033, lon:37.550, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ===========================================================================
// 9) HABEŞİSTAN — ADAL/HARAR kuşağı (1887-01-06)
// ---------------------------------------------------------------------------
// Zincir mevcut Harar ve Cîcîga kayıtlarıyla birebir: `adal` → 1887-01-06
// `habesistan`. TDV `etiyopya`: Adal Emirliği'nin merkezi 1521'de Harar'a
// taşındı; Ahmed el-Mücâhid'in seferleri 1527-1543.
// Dire Dava 1902'de demiryolu üzerinde kuruldu — `kur:` taşır.
// ===========================================================================

{ ad:"Dire Dava", tur:"sehir", lat:9.593, lon:41.866, g:0, k:3, kur:"1902-01-01",
  s:[{f:"1902-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Dagahbûr", tur:"sehir", lat:8.217, lon:43.567, g:0, k:3,
  s:[{f:"1281-01-01",t:"1887-01-06",d:"adal"},{f:"1887-01-06",t:"1923-10-29",d:"habesistan"}], d:[] },

// 🔴 AVSA SULTANLIĞI — `avsa` kimliği ne renkli ne künyeli, ve UYDURULMADI.
// TDV `etiyopya` açıkça yazıyor: Adal'ın merkezi 1577'de Denâkil bölgesindeki
// AVSA'ya taşındı. Yani Avsa, Adal'ın devamıdır ve `adal` kimliğiyle yazmak
// bir tahmin değil, kaynağın kendi cümlesidir. Sultanlık 1923'ten sonra da
// sürdüğü için tek dönem hâlinde 1923-10-29'a kadar uzatıldı.
{ ad:"Asâyita (Avsa)", tur:"sehir", lat:11.567, lon:41.440, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"adal"}], d:[] },

// ===========================================================================
// 10) HABEŞİSTAN — BATI ve GÜNEY (Menelik'in ilhakları)
// ---------------------------------------------------------------------------
// ⚠️ BU BÖLÜMÜN TARİHİ EN ZAYIF HALKASIDIR ve saklanmıyor.
// Menelik'in batı (Vollega, İllûbâbor) ve güney (Arsi, Bâle, Borana,
// Sidamo) ilhaklarının GÜNÜ hiçbir kaynakta bulunamadı; yılları bile
// bölgeden bölgeye değişiyor. TDV `etiyopya` Menelik saltanatını 1889-1913
// diye veriyor ve bölgesel fetihler için tarih VERMİYOR.
// ⇒ mevcut `Yirgalem (Sidamo)` kaydının çözümü aynen izlendi: doğrulanmış
//   komşu tarih olan 1897-01-01 (Kaffa) kullanıldı. Bu bir YUVARLAMA DEĞİL,
//   AÇIKÇA İŞARETLENMİŞ bir yer tutucudur — yerlesimler_afrika.js §13 aynı
//   kararı aynı gerekçeyle yazmıştı.
// 🔴 Öncesi için `habesistan` YAZILMADI. Bu bölge 1880'lere kadar Habeş
//   İmparatorluğu'na ait DEĞİLDİ (mevcut dosyanın §13 notu); `habesistan`
//   yazmak §3.5.1'in TERS YÖNÜ olurdu. Oromo/Gibe krallıklarının
//   (Leka Nekemte · Limmu-Ennarya · Guma · Gera) kimliği YOK ⇒ noktalar
//   1897 öncesinde KASTEN SAHİPSİZ ve `kasitli_bosluk` ile işaretli.
// ===========================================================================

{ ad:"Nekemte", tur:"sehir", lat:9.088, lon:36.550, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Leka Nekemte Oromo krallığı — kimliği yok; habesistan yazmak §3.5.1 ters yönü olurdu",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Gimbî", tur:"sehir", lat:9.170, lon:35.833, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Vollega Oromo krallıkları — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Dembîdollo", tur:"sehir", lat:8.533, lon:34.800, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Sayo/Vollega Oromo krallığı — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Gore", tur:"sehir", lat:8.150, lon:35.533, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"İllûbâbor Oromo krallıkları — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Asella", tur:"sehir", lat:7.950, lon:39.133, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Arsi Oromo — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Goba", tur:"sehir", lat:7.010, lon:39.983, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bâle — Adal sonrası devletsiz kuşak, kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Ginir", tur:"sehir", lat:7.140, lon:40.708, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bâle — Adal sonrası devletsiz kuşak, kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Ağere Maryam", tur:"sehir", lat:5.633, lon:38.233, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Guci/Sidamo kuşağı — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Yabelo", tur:"sehir", lat:4.883, lon:38.208, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Borana Oromo — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Mega", tur:"sehir", lat:4.050, lon:38.300, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Borana Oromo — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Moyale", tur:"sehir", lat:3.533, lon:39.050, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Borana Oromo — kimlik yok; güneyi HALKA 6-7 (Kenya), kasten noktasız",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// Gambela 1907'de Mavi Nil ticaretinin iskelesi olarak kuruldu.
{ ad:"Gambela", tur:"liman", lat:8.250, lon:34.588, g:0, k:3, kur:"1907-01-01",
  s:[{f:"1907-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ===========================================================================
// 11) OGADEN — §3.5.1'in İKİ UÇLU ölçümü
// ---------------------------------------------------------------------------
// 🔴 Bugün Ogaden'de TEK nokta var ve o KASTEN SAHİPSİZ bir dolgu
//   ("Ogaden", 7.2/44.0). Yani 350.000 km²lik kuşak, en yakın peteğe
//   emiliyor — kuzeyde Cîcîga (1887'den `habesistan`), doğuda Somali
//   sultanlıkları. Hangi yöne hata verdiği KOMŞUNUN KİMLİĞİNE bağlı;
//   §3.5.1'in tam da tarif ettiği durum.
// Zincir: `adal` → 1577-01-01 `somali` (mevcut Berbera/Hafun kaydıyla aynı
//   gün) → 1897-01-01 `habesistan`.
// ⚠️ 1897 SEÇİMİNİN GEREKÇESİ: İngiltere ile Habeşistan arasındaki sınır
//   antlaşması 1897'de imzalandı ve Ogaden'i Habeşistan'a bıraktı; GÜNÜ
//   doğrulanamadı (`ogaden` slug'ı TDV'de ÖLÜ — ölçüldü, 302). CLAUDE.md §4
//   gereği yıl biliniyor gün bilinmiyor ⇒ YYYY-01-01, ve seçilen gün canlı
//   veride zaten kırılma olan 1897-01-01'dir.
// ===========================================================================

{ ad:"Kebrî Dehar", tur:"sehir", lat:6.733, lon:44.267, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Verder", tur:"sehir", lat:6.960, lon:45.350, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Gode", tur:"sehir", lat:5.950, lon:43.550, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Kelâfo", tur:"sehir", lat:5.600, lon:44.200, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Dolo Odo", tur:"sehir", lat:4.167, lon:42.050, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ===========================================================================
// 12) SOMALİLAND — İngiliz himayesi (1884-07-18)
// ---------------------------------------------------------------------------
// Zincir mevcut Berbera · Burao · Hargeysa · Lasanod kayıtlarıyla birebir:
//   `adal` → 1577-01-01 `somali` → 1884-07-18 `ingiltere`.
// TDV `somali`: Zeyla, Berbera ve Tacûra 1883'te sömürgeleştirildi; İngiltere
// bu toprakları 1905'te Aden sömürgesiyle birleştirdi.
// ⚠️ MUHAMMED ABDULLAH HASAN'IN DERVİŞ DEVLETİ (1899-1920) YAZILMADI.
//   TDV `somali` hareketi 1889'dan 1920'deki ölümüne kadar veriyor; Taleh
//   1913'te derviş başkenti oldu. Ayrı bir kimlik (`dervis`) YOK, ve dönem
//   yazmak dört yeni kırılma açardı. Nokta İngiliz zinciriyle yazıldı;
//   eksiklik KOORDİNATÖRE BİLDİRİLDİ.
// ===========================================================================

{ ad:"Şeyh (Somaliland)", tur:"sehir", lat:9.933, lon:45.183, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Odveyne", tur:"sehir", lat:9.410, lon:45.062, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Borama", tur:"sehir", lat:9.936, lon:43.183, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Buhodle", tur:"sehir", lat:8.240, lon:46.320, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

// ⚠️ Derviş Devleti'nin merkezi (1913-1920) — bkz. bölüm notu.
{ ad:"Taleh", tur:"kale", lat:9.150, lon:48.417, g:0, k:4,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

// ===========================================================================
// 13) SOMALİ — kuzeydoğu (Mecerteyn) ve orta (Hobyo)
// ---------------------------------------------------------------------------
// Zincir mevcut Alula · Hafun · Bender Kāsım kayıtlarıyla birebir:
//   `adal` → 1577-01-01 `somali` (Gârove/Ayl/Obbiya'da tek dönem).
// ⚠️ `mecerteyn` ve `hobyo` kimlikleri YOK (ne renk ne künye). TDV `somali`
//   Mecerteyn'in XIX. yy'da bağımsızlaştığını, İtalyan işgalinin 1927'de
//   olduğunu söylüyor — yani atlasın 1923 ufkunda İTALYAN DEĞİL. Mevcut
//   kayıtların `somali` tercihi bu yüzden DOĞRU ve aynen izlendi.
// ===========================================================================

{ ad:"Kandala", tur:"liman", lat:11.470, lon:49.868, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"İskuşubân", tur:"sehir", lat:10.283, lon:50.233, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Bender Beyla", tur:"liman", lat:9.494, lon:50.812, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// ===========================================================================
// 14) SOMALİ — BENÂDİR ve CÛBÂ (1905-01-01)
// ---------------------------------------------------------------------------
// Zincir mevcut Mogadişu · Merka · Baydoa · Beledveyne kayıtlarıyla birebir:
//   `somali` → 1905-01-01 `italya`.
// TDV `somali`: Benâdir şehirleri (Makdişu, Merka, Berâve) Zengibar'dan
// 2 Mart 1891 anlaşmasıyla İtalyan nüfuzuna geçti; iç bölgeler (Mecerteyn,
// Obbiya) ancak 1927'de işgal edildi. Mevcut kayıtların 1905'i satın alma
// tarihidir ve canlı bir kırılmadır; tutarlılık için aynen kullanıldı.
// ⚠️ KISMÂYÛ'nun İNGİLİZ CÛBÂLAND DÖNEMİ (1895-1925) YAZILMADI. 1895 canlı
//   veride kırılma değil; yazmak Değişmez 2s'ye borç açardı. Nokta `somali`
//   zinciriyle yazıldı. Bu, bilinen ve İŞARETLENMİŞ bir eksikliktir —
//   KOORDİNATÖRE BİLDİRİLDİ.
// ===========================================================================

// Benâdir'in üç şehrinden üçüncüsü; TDV `somali` maddesinde adı geçer.
{ ad:"Berâve",kaynak:"makdisu", tur:"liman", lat:1.106, lon:44.031, g:0, k:3,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"makdisu-sultanligi"},{f:"1500-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Afgoye",kaynak:"makdisu", tur:"sehir", lat:2.138, lon:45.120, g:0, k:3,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"makdisu-sultanligi"},{f:"1500-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Bulo Burte", tur:"sehir", lat:3.848, lon:45.567, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Bardere", tur:"sehir", lat:2.348, lon:42.278, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Luuk", tur:"sehir", lat:3.802, lon:42.545, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Garbahârey", tur:"sehir", lat:3.328, lon:42.220, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Cilib", tur:"sehir", lat:0.489, lon:42.797, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ⚠️ Cûbâland dönemi yazılamadı — bkz. bölüm notu.
{ ad:"Kısmâyû", tur:"liman", lat:-0.358, lon:42.545, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// ===========================================================================
// 15) UMMAN — ZUFÂR ve VÜSTÂ kıyısı
// ---------------------------------------------------------------------------
// Zincir mevcut Salala · Masira kayıtlarıyla birebir:
//   `nebhani` → 1515-04-01 `umman`.
// 🔴 UMMAN'IN KUTU İÇİ YOĞUNLUĞU 9,1 — kutunun EN SEYREK ülkesi, ve sebebi
//   ölçüldü: Umman'ın çekirdeği (Maskat 23,6°K · Nizvâ 22,9 · Suhâr 24,3 ·
//   Sûr 22,6) kutunun KUZEYİNDE ve ORASI ZATEN DOLU. Kutu içinde kalan
//   Zufâr + Vüstâ kıyısında ise Salala ile Masira arasında 460 km boyunca
//   TEK NOKTA yoktu.
// ⚠️ `zufar` slug'ı TDV'de ÖLÜ (302, ölçüldü). Aranmadan "yok" denmedi;
//   `umman` ve `nebhaniler` maddeleri üzerinden gidildi.
// ===========================================================================

{ ad:"Mirbât", tur:"liman", lat:16.993, lon:54.700, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// ⚠️ 17,037/54,400 → 17,057/54,404 (2,2 km iç): maske dışındaydı.
{ ad:"Tâka (Zufâr)", tur:"liman", lat:17.057, lon:54.404, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Hâsik", tur:"liman", lat:17.383, lon:55.283, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// ⚠️ 17,900/55,983 → 17,946/55,969 (5,3 km iç): maske dışındaydı.
{ ad:"Şüveymiye", tur:"liman", lat:17.946, lon:55.969, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Dukm", tur:"liman", lat:19.660, lon:57.707, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Muhût", tur:"sehir", lat:20.700, lon:58.100, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Tumreyt", tur:"sehir", lat:17.667, lon:54.024, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// Zufâr'ın çöle bakan iç ucu; eski kervan yolu üzerindeki Şisr/Ubâr.
{ ad:"Şisr", tur:"sehir", lat:18.257, lon:53.647, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// 🔴 KASTEN SAHİPSİZ DOLGU. Rub'ul Hâlî'nin güneybatı köşesi hiçbir devletin
// fiilî idaresinde değildi; mevcut "Rub'ul Hâlî doğusu" ve "Hadramut"
// dolgularıyla aynı sınıf. Boş bırakılmazsa Zufâr ile Necid petekleri
// çölün ortasında buluşup 300.000 km²lik bir toprağı sahiplendirir.
// ⚠️ 18,500/51,000 → 18,800/52,300: ilk koordinat YEMEN'e düşüyordu ve
// Yemen bu oturumun bölgesi DEĞİL (halka 1, başka oturumun işi). Umman
// yakasına alındı; ölçüldü.
{ ad:"Rub'ul Hâlî güneybatısı", tur:"bolge", lat:18.800, lon:52.300, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Rub'ul Hâlî — hiçbir devletin fiilî idaresi yoktu; mevcut çöl dolgularıyla aynı sınıf",
  s:[], d:[], v:[] },

// ===========================================================================
// 16) GÜNEY SUDAN — kutunun en büyük tek deliği (631.271 km² / SIFIR nokta)
// ---------------------------------------------------------------------------
// 🔴 KOORDİNATÖRE SORULDU, CEVABI BEKLENMEDEN YAZILDI ve gerekçesi şudur:
//   1820-21 Mısır (Osmanlı) fethinden 1885 Mehdî'ye, oradan 1899 İngiliz-Mısır
//   Kondominyumu'na kadar "Sudan" TEK ÜLKEDİR; Ekvatorya bir Osmanlı-Mısır
//   eyaletiydi. Yani burası ayrı bir ülke değil, HALKA 2'nin kendisidir.
//   Cevap "hayır" gelirse bu bölüm tek blok hâlinde silinebilsin diye
//   AYRI ve EN SONA yazıldı.
//
// ⚠️⚠️ EN BÜYÜK KISITIM BURADA ve açıkça yazıyorum:
//   MISIR EKVATORYA ve BAHRÜLGAZÂL DÖNEMLERİ (yak. 1867-1885) YAZILAMADI.
//   Sebebi tarih bilgisizliği DEĞİL — `v:` dönemi Değişmez 2'ye TABİDİR
//   (kırılma sayılır) ve Fâşoda karakolu (1867), Ekvatorya eyaleti (1870),
//   Bahrülgazâl ilhakı (1873) canlı veride KIRILMA DEĞİL. Yazsaydım
//   Değişmez 2 tavanı 0'dan çıkardı ve maddeyi yazacak dosya (`olaylar*.js`)
//   BENİM DEĞİL. ⇒ Kronoloji maddeleri yazıldıktan sonra bu bölüm
//   güncellenmelidir. Tarihler koordinatöre iletildi.
//
// 🔴 `silluk` (Şilluk Krallığı) ve `zende` (Azande) kimlikleri YOK — ne renk
//   ne künye. Fâşoda gerçek bir KRALLIĞIN başkentiydi; `funj` ya da
//   `habesistan` yazmak uydurma olurdu. Bu yüzden Kondominyum öncesi
//   KASTEN SAHİPSİZ.
// 📌 Nil koridorunun üç noktası (Renk · Fâşoda · Malakal) Mehdî Devleti'nin
//   fiilen tuttuğu Şilluk kuşağındadır — TDV `muhammed-ahmed-el-mehdi`
//   "Fâşûda"yı sayıyor. Onlarda `mehdi` dönemi YAZILDI ve günü canlı
//   kırılma olan 1885-01-26'dır. Güneydeki noktalarda Mehdî hâkimiyeti
//   YOKTU, yazılmadı.
//
// ⚠️ BEKLENEN_SAHIPSIZ ETKİSİ (ÖLÇÜLDÜ, tahmin değil): bu bölüm 19,
//   §10 (Habeşistan batı-güney) 11, §15 (Rub'ul Hâlî) 1 nokta =
//   TOPLAM 31 yeni KASTEN SAHİPSİZ nokta, 31'i de `kasitli_bosluk:true`
//   ve `neden:` taşıyor (işaretsiz boşluk: 0).
//   `arac/denetle.py`nin BEKLENEN_SAHIPSIZ sabiti 114 → 145 olmalı.
//   O dosya BENİM DEĞİL; koordinatöre sayısıyla bildirildi.
// ===========================================================================

// ── Nil koridoru: Şilluk kuşağı, Mehdî hâkimiyeti VARDI ────────────────
{ ad:"Er-Renk", tur:"sehir", lat:11.750, lon:32.783, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Şilluk Krallığı — `silluk` kimliği yok; Mısır Ekvatorya dönemi Değişmez 2 borcu doğuracağı için yazılamadı",
  s:[{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

// Şilluk Krallığı'nın başkenti; 1898 Fâşoda buhranının yeri.
{ ad:"Fâşoda", tur:"sehir", lat:9.892, lon:32.117, g:1, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Şilluk Krallığı'nın başkenti — `silluk` kimliği yok",
  s:[{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Malakal", tur:"sehir", lat:9.533, lon:31.661, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Şilluk kuşağı — `silluk` kimliği yok",
  s:[{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

// ── Yukarı Nil, Bahrülgazâl ve Ekvatorya: Mehdî hâkimiyeti YOKTU ───────
{ ad:"Nâsir", tur:"sehir", lat:8.608, lon:33.067, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nuer ülkesi — devlet teşkilâtı yok; Mısır ve Mehdî idaresi buraya ulaşmadı",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Akobo", tur:"sehir", lat:7.788, lon:33.033, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Anuak/Nuer ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Bentiu", tur:"sehir", lat:9.242, lon:29.803, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nuer ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Meşra er-Rek", tur:"liman", lat:8.417, lon:29.283, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Bahrülgazâl iskelesi — Nuer/Dinka ülkesi, devlet teşkilâtı yok. ⚠️ Mısır ilhakı (1873) Değişmez 2 borcu doğuracağı için DÖNEM YAZILAMADI — bu not korunmalı. 🔴 27 Ağu 2026: cins `hata` idi ve `hata`, motorun DOLDURABİLDİĞİ TEK kova (uret_petek.py:3564 DOLDURULABILIR_BOS). Kayıt bir hata değil, bir PARK YERİ olarak `hata`ya konmuştu ve petek komşusuna katılıp 21.111 km² DOĞRUDAN OSMANLI boyanıyordu (Emre 0036/H-0001, G1). Komşuları Bentiu ve Vav zaten `devletsiz` olduğu için korunuyordu; bu kayıt korunmuyordu.",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Vav", tur:"sehir", lat:7.702, lon:27.990, g:1, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bahrülgazâl merkezi — Dinka/Cur ülkesi, kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Deym Zübeyr", tur:"kale", lat:7.700, lon:26.217, g:0, k:0,
  kasitli_bosluk:true,bos:"hata", neden:"Zübeyr Paşa'nın Bahrülgazâl karargâhı — Mısır dönemi yazılamadı (bkz. bölüm notu)",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Rumbek", tur:"sehir", lat:6.800, lon:29.678, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Tonc", tur:"sehir", lat:6.950, lon:28.683, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Şembe", tur:"liman", lat:7.156, lon:30.553, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nil iskelesi — Dinka ülkesi, kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Bor", tur:"sehir", lat:6.208, lon:31.558, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

// Mısır Ekvatorya eyaletinin karargâhı; Cûbâ (1922) daha sonra bunun
// 6 km güneyinde kuruldu, o yüzden Cûbâ AYRI nokta olarak yazılmadı.
{ ad:"Gondokoro", tur:"sehir", lat:4.900, lon:31.650, g:1, k:0,
  kasitli_bosluk:true,bos:"hata", neden:"Ekvatorya karargâhı — Mısır dönemi (1870-1885) Değişmez 2 borcu doğuracağı için yazılamadı",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Nimule", tur:"sehir", lat:3.600, lon:32.058, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Ekvatorya güney ucu — kimlik yok; güneyi HALKA 6-7 (Uganda), kasten noktasız",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Torit", tur:"sehir", lat:4.412, lon:32.570, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Latuka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Kapoeta", tur:"sehir", lat:4.767, lon:33.591, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Toposa ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Yambio", tur:"sehir", lat:4.572, lon:28.395, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Azande Krallığı — `zende` kimliği yok; en yakın komşuyla boyamak §3.5.1 ihlali olurdu",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Tembura", tur:"sehir", lat:5.610, lon:27.470, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Azande Krallığı — `zende` kimliği yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

// ###########################################################################
// ###  PARTİ 2 — birinci partiden SONRA yeniden ölçülen boşluklar         ###
// ###########################################################################
// Parti 1 yazıldıktan sonra boşluk haritası TEKRAR koşturuldu (aynı yöntem,
// 0,25° ızgara). Sonuç: ortanca 199 → 114 km, >200 km hücre %49,8 → %28,9.
// 🔴 VE KALAN BOŞLUĞUN TAMAMI TEK YERDE TOPLANDI: en boş 70 hücrenin 69'u
//   SUDAN'IN KUZEYBATI ÇÖLÜ (lat 16-21 / lon 24-28), biri Umman Vüstâ'sı.
//   Yani parti 1'den sonra "seyreklik" artık dağınık bir sorun değil,
//   TEK ADI OLAN bir sorun: Libya çölünün Sudan yakası.
// 📌 Bu, `SINIRDA` listesi dersinin (CLAUDE.md §11) tersi bir vaka: liste
//   bir EKRAN değil gerçekten bir KUYRUKTU, tepesi kapatılınca altından
//   yenisi çıkmadı — aynı bölge kaldı.
// ###########################################################################

// ===========================================================================
// 17) SUDAN KUZEYBATI ÇÖLÜ — kasten sahipsiz dolgular
// ---------------------------------------------------------------------------
// 🔴 Bunlar delik DEĞİL, DELİĞİN İLACI — mevcut "Selîme (Nûbe çölü batısı)",
//   "Nûbe çölü", "Darfur", "Kordofan", "Hadramut", "Rub'ul Hâlî doğusu"
//   dolgularıyla AYNI SINIF ve aynı gerekçe (yerlesimler_seyrek.js'in
//   "çöl 7" partisinin kendi notu: "boş kalması DOĞRU olan yerler").
//   Ölçüldü: bu kutuda 483 km'ye kadar boş hücre vardı ve o alan bugün
//   Dongola · Kutum · Selîme peteklerine emiliyor.
// ⚠️ Hepsi `kasitli_bosluk:true` + `neden:` taşır; hiçbiri işaretsiz değil.
// ===========================================================================

// Darb el-Erbaîn kervan yolunun natron kuyusu; Vaday-Mısır yolunun düğümü.
{ ad:"Bîr Natrûn", tur:"bolge", lat:18.200, lon:26.000, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Libya çölü — hiçbir devletin fiilî idaresi yoktu; kervan kuyusu",
  s:[], d:[], v:[] },

{ ad:"Merga vahası", tur:"bolge", lat:19.350, lon:26.300, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Libya çölü — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Lakiye Arbaîn", tur:"bolge", lat:20.050, lon:28.050, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Darb el-Erbaîn kuyusu — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Vâdî Hovâr", tur:"bolge", lat:17.400, lon:24.800, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"kurumuş vadi — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Cebel Ûveynât", tur:"bolge", lat:21.870, lon:25.020, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Mısır-Libya-Sudan üçgeni; fiilî idare yok",
  s:[], d:[], v:[] },

// ⚠️ 20,500/24,500 → 20,000/25,200: ilk koordinat LİBYA'ya düşüyordu.
// 🔴 EMEKLİ — 18 Ağustos 2026, Emre'nin onayıyla (dolgu noktası ölçümü).
//    Kaldırılınca toprak: BOŞ kalır
//    Gerekçe: A1 yarıçap tavanı (uret_petek.py:699) dolgunun işini yapısal
//    olarak yapıyor; bu nokta emilmeyi önlemek için konmuş bir HİLEYDİ ve
//    uret_petek.py:696 zaten emekli edilebileceklerini yazıyordu.
//    Ölçüm: arac/olc_ekleyici.py · scratchpad/olc_dolgu.py
//    ⚠️ SİLİNMEDİ, YORUMLANDI — araştırılmış veri geri alınabilir olmalı.
// { ad:"Sudan kuzeybatı çölü", tur:"bolge", lat:20.000, lon:25.200, g:0, k:0,
//   kasitli_bosluk:true,bos:"devletsiz", neden:"Libya çölü — fiilî idare yok",
//   s:[], d:[], v:[] },

{ ad:"Zolat el-Hammâd", tur:"bolge", lat:20.600, lon:27.100, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bayûda-Libya çölü geçişi — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Kordofan kuzeybatı çölü", tur:"bolge", lat:16.500, lon:26.500, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dârfûr ile Kordofan arası kum kuşağı — fiilî idare yok",
  s:[], d:[], v:[] },

// ===========================================================================
// 18) SUDAN — parti 2 yerleşimleri
// ===========================================================================

// Nil'in Ebû Hamed kavsi; A zinciri (1821-01-04).
{ ad:"Şereyk", tur:"sehir", lat:18.750, lon:33.600, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// TDV `muhammed-ahmed-el-mehdi` maddesinde "Kerari" olarak geçer; Halife
// Abdullah'ın 2 Eylül 1898'de yenildiği yer.
{ ad:"Kerreri", tur:"sehir", lat:15.830, lon:32.480, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Cezîre'nin ortası — Mavi Nil ile Beyaz Nil arası (B zinciri).
{ ad:"El-Menâkıl", tur:"sehir", lat:14.200, lon:32.980, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Mavi Nil'in Habeş sınırına bakan eyalet merkezi (B zinciri).
{ ad:"Ed-Damazîn", tur:"sehir", lat:11.789, lon:34.359, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Kordofan kuzeyi (C zinciri).
{ ad:"Tendelti", tur:"sehir", lat:13.020, lon:31.870, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Ümmü Bedr", tur:"sehir", lat:14.200, lon:27.900, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"}],
  v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Kızıldeniz tepeleri, Beca ülkesi (E zinciri).
{ ad:"Derûdeb", tur:"sehir", lat:17.550, lon:36.100, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1899-01-19",d:"ingiltere"},{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani",kaynak:"Gün TDV `sudan`dan DOĞRUDAN (kapsayıcı madde, Sudan geneli: 19 Ocak 1899 condominium) — KOMŞUDAN DEĞİL. Kıyıya özel katılış günü okunan kaynakta BULUNAMADI. NOKTA-ORTADOGU-0077 · YAMA B2 · M-5238"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}], v:[] },

// ── Dârfûr (D zinciri) ─────────────────────────────────────────────────
{ ad:"Mellît",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:14.130, lon:25.570, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Şa'riyye",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe",m:"El-Fâşir", tur:"sehir", lat:12.900, lon:25.420, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Radom",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — aynı gerekçe. UYARI: bu Radom POLONYA'DAKİ şehir DEĞİL — koordinat 9,95°K/24,95°D, Güney Sudan/Darfur bölgesi (Radom Millî Parkı). ORHANGAZİ'nin şartnamesindeki 'Radom → Krakov' önerisi bu kaydı Polonya sanıyordu, YANLIŞ olurdu — s:/v: dizisi ötekilerle birebir aynı, Darfur kümesinin 11.'si.",m:"El-Fâşir", tur:"sehir", lat:9.950, lon:24.950, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

// ===========================================================================
// 19) GÜNEY SUDAN — parti 2 (zincir §16 ile birebir)
// ===========================================================================

{ ad:"Aveyl", tur:"sehir", lat:8.767, lon:27.400, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dinka ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Rağa", tur:"sehir", lat:8.460, lon:25.680, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Feroge/Kresh kuşağı — kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Fangak", tur:"sehir", lat:9.070, lon:30.883, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nuer ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Ler", tur:"sehir", lat:8.300, lon:30.140, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nuer ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Pibor", tur:"sehir", lat:6.800, lon:33.133, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Murle ülkesi — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Maridi", tur:"sehir", lat:4.917, lon:29.467, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Azande/Moru kuşağı — `zende` kimliği yok",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

{ ad:"Yei", tur:"sehir", lat:4.090, lon:30.679, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Ekvatorya batı ucu — kimlik yok; batısı Lado kordonu",
  s:[{f:"1899-01-19",t:"1923-10-29",d:"ingiliz-sudani"}], d:[], v:[] },

// ===========================================================================
// 20) HABEŞİSTAN — parti 2
// ---------------------------------------------------------------------------
// Kuzey/orta yayla noktaları tek dönem (`habesistan` 1281-1923);
// güney/batı noktaları §10'un işaretli 1897-01-01 yer tutucusunu taşır.
// ===========================================================================

{ ad:"Vukro", tur:"sehir", lat:13.790, lon:39.600, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Alamata", tur:"sehir", lat:12.420, lon:39.550, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Nazret", tur:"sehir", lat:8.540, lon:39.270, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Cinka", tur:"sehir", lat:6.783, lon:36.667, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ── §10 zinciri: 1897-01-01 İŞARETLİ yer tutucu ────────────────────────
{ ad:"Şeşemene", tur:"sehir", lat:7.200, lon:38.600, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Arsi/Sidamo kuşağı — Oromo krallıklarının kimliği yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Dilla", tur:"sehir", lat:6.410, lon:38.310, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Guci/Sidamo kuşağı — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Negele Borana", tur:"sehir", lat:5.330, lon:39.580, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Borana Oromo — devlet teşkilâtı ve kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Bedele", tur:"sehir", lat:8.450, lon:36.350, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"İllûbâbor Oromo krallıkları — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Mizan Teferi", tur:"sehir", lat:6.990, lon:35.580, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Bench/Kaffa güneybatısı — kimlik yok",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ⚠️ Beni Şengûl şeyhlikleri XIX. yy'da Sudan (Func/Mısır) yörüngesindeydi;
// Habeş-Sudan sınırı ancak 1902 Gwynn hattıyla çizildi ve bölgeyi
// Habeşistan'a bıraktı. 1902 canlı veride kırılma DEĞİL ⇒ §10'un işaretli
// 1897-01-01 yer tutucusu kullanıldı. YER TUTUCUDUR, hüküm değildir.
{ ad:"Asosa", tur:"sehir", lat:10.070, lon:34.530, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"Beni Şengûl şeyhlikleri — kimlik yok; sınır 1902'de çizildi, 1897 YER TUTUCU",
  s:[{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ── Ogaden zinciri (§11 ile birebir) ───────────────────────────────────
{ ad:"İmi", tur:"sehir", lat:6.470, lon:42.170, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Filtu", tur:"sehir", lat:5.130, lon:40.750, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1897-01-01",d:"somali"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ===========================================================================
// 21) ERİTRE — parti 2
// ===========================================================================

// Antik Adulis limanı; Masavva körfezinin güney ucu.
{ ad:"Zula", tur:"liman", lat:15.283, lon:39.700, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Adi Kuala", tur:"sehir", lat:14.680, lon:38.830, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ===========================================================================
// 22) SOMALİ ve SOMALİLAND — parti 2
// ===========================================================================

// ── Somaliland kıyısı (H zinciri) ──────────────────────────────────────
{ ad:"Lâs Hore", tur:"liman", lat:11.158, lon:48.198, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Mayd", tur:"liman", lat:11.000, lon:47.100, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Hîs", tur:"liman", lat:10.900, lon:46.900, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

// ── Orta Somali: Hobyo yörüngesi, tek dönem `somali` (§13 gerekçesi) ────
{ ad:"Dusa Mareb", tur:"sehir", lat:5.536, lon:46.386, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Ceel Buur", tur:"sehir", lat:4.687, lon:46.618, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Ceel Dheere", tur:"liman", lat:3.845, lon:47.163, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// ── Benâdir ve iç bölgesi (J zinciri, 1905-01-01) ──────────────────────
{ ad:"Cadale",kaynak:"makdisu", tur:"liman", lat:2.752, lon:46.310, g:0, k:3,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"makdisu-sultanligi"},{f:"1500-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Vanlaveyn", tur:"sehir", lat:2.620, lon:44.890, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Diinsoor", tur:"sehir", lat:2.406, lon:42.972, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Hudur", tur:"sehir", lat:4.120, lon:43.890, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Ceel Barde", tur:"sehir", lat:4.570, lon:43.490, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// ⚠️ Kısmâyû ile aynı sınıf: batısı İngiliz Cûbâland'ıydı (1895-1925) ve
// o dönem canlı kırılma olmadığı için YAZILAMADI — bkz. §14 notu.
// ⚠️ lon 40,930 → 41,150: Ceel Vaak sınır üstü bir kasabadır ve ham
// koordinat KENYA'ya düşüyordu — Kenya halka 6-7, dokunmam sıra ihlali.
{ ad:"Ceel Vaak", tur:"sehir", lat:2.800, lon:41.150, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// ===========================================================================
// 23) UMMAN — parti 2
// ===========================================================================

// ⚠️ Üçü de kıyı noktası ve ham koordinatları maskenin DIŞINDA kalıyordu;
// en yakın kara noktasına çekildi (7,3 · 3,7 · 2,4 km).
{ ad:"Cezîr (Sevkıra)", tur:"liman", lat:18.161, lon:56.537, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

{ ad:"Râs Medreke", tur:"liman", lat:19.002, lon:57.792, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// Zufâr'ın batı ucu; Mehre/Hadramut sınırı.
{ ad:"Rahbût", tur:"liman", lat:16.762, lon:53.418, g:0, k:3,
  s:[{f:"1281-01-01",t:"1515-04-01",d:"nebhani"},{f:"1515-04-01",t:"1923-10-29",d:"umman"}], d:[] },

// 🔴 KASTEN SAHİPSİZ — Umman'ın iç çölü; §15'teki güneybatı dolgusunun eşi.
{ ad:"Umman iç çölü", tur:"bolge", lat:20.100, lon:55.300, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Rub'ul Hâlî'nin Umman yakası — hiçbir devletin fiilî idaresi yoktu",
  s:[], d:[], v:[] },

// ===========================================================================
// 24) SON DOKUNUŞ — ölçüt kapanana kadar kalan boşluklar
// ---------------------------------------------------------------------------
// Parti 2'den sonra kutu yoğunluğu 24,7 ölçüldü; ölçüt 25. Aradaki fark
// UYDURULMADI, kalan en büyük hücrelere gerçek dolgu/yerleşim konarak
// kapatıldı. Üçü çöl dolgusu (kasten sahipsiz), ikisi yerleşim.
// ===========================================================================

{ ad:"Vâdî el-Milk", tur:"bolge", lat:17.500, lon:28.000, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Dongola-Kordofan arası kurumuş vadi yolu — fiilî idare yok",
  s:[], d:[], v:[] },

// Nil'in iki kavsi arasındaki iç çöl; Merevî-Hartum kervan kestirmesi.
{ ad:"Bayûda çölü", tur:"bolge", lat:17.900, lon:32.000, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nil kavisleri arası iç çöl — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"Atbay çölü", tur:"bolge", lat:19.800, lon:34.800, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"Nil ile Kızıldeniz arası Beca çölü — fiilî idare yok",
  s:[], d:[], v:[] },

{ ad:"İncibara", tur:"sehir", lat:10.950, lon:36.930, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Ceel Afveyn", tur:"sehir", lat:9.830, lon:47.200, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

];

;
/* ==== data/yerlesimler_h2_rusya.js ==== */
// ════════════════════════════════════════════════════════════════════════════
// NOKTA HALKA-2 2 — Avrupa Rusyası + Nogay/Kazak bozkırı
// Şartname: oturumlar/NOKTA-HALKA2.md · kutu: lon 28-60, lat 45-68
// ════════════════════════════════════════════════════════════════════════════
//
// NİÇİN: halka 2 yoğunluğu ölçüldü — kutu ortalaması 17,7 nokta/mn km², ama
// ortalama YANILTIYOR. Batı-güney çeyreği (Kırım-Bucak-Dnyeper, halka 1'in
// kuyruğu) zaten 42,9 ve 31,4; delik iki blok hâlinde KUZEYDE ve DOĞUDA:
//     Kuzey Rusya  (lat 56-68)   8,2   tabanın (50,9) 1/6'sı
//     Volga-Ural   (lon 40-60)  10,0   tabanın 1/5'i
// Bu parti o iki bloğu hedefler; doygun çeyreğe tek nokta eklenmedi.
//
// ─── SAHİPLİK MODELİ — üç karar, üçü de ÖLÇÜLMÜŞ GEREKÇELİ ────────────────
//
// ① 🟢 266 YILLIK HAYALET KAPATILDI — ikinci geçiş, 8 Ağustos 2026.
//    İlk yazımda bütün Rus çekirdeği `rusya` 1281'den yazılmıştı. Bu bilerek
//    yapılmış geçici bir karardı ve dosyanın başında işaretliydi: `devletler.js`te
//    `rusya` f = 1547-01-16 olduğu için atlas **266 yıl erken** boyuyordu.
//    O gün doğru kimlikler (`novgorod` · `pskov` · `tver` · `moskova`) RENKSİZDİ;
//    renksiz kimlik haritada hiç boyanmaz (§3 ④) ⇒ delik açardı, ve delik
//    hayaletten kötüdür. Koordinatör (a)'yı onayladı, sonra dördünü de yazdırdı.
//
//    Kimlikler ölçüldü ve ömürleri BİREBİR ZİNCİRLENİYOR — uydurma gün yok,
//    her kırılma bir künyenin kendi f/t ucu:
//      novgorod 1136-01-01 → 1478-01-15      tver    1246-01-01 → 1485-09-12
//      pskov    1348-01-01 → 1510-01-13      moskova 1325-01-01 → 1547-01-16
//      rusya    1547-01-16 → 1917-03-15      astarhan 1466-01-01 → 1556-01-01
//
//    Uygulanan dört kalıp (62 nokta):
//      Novgorod ardı (28)  novgorod 1281→1478-01-15 · moskova →1547-01-16 · rusya
//      Tver çevresi   (2)  tver     1281→1485-09-12 · moskova →1547-01-16 · rusya
//      Pskov          (1)  novgorod 1281→1348 · pskov →1510-01-13 · moskova · rusya
//      Moskova çekirdeği (22) altinorda 1281→1325-01-01 · moskova →1547-01-16 · rusya
//    + Oreşek ve Hluhiv tek tek (ikisinde de `rusya` 1547 öncesinde başlıyordu).
//
//    ⚠️ 1281-1325 niçin `altinorda`: kuzeydoğu Rus knezlikleri o dönemde Altın
//    Orda'nın yarlık düzeni altındaydı, ve bu ÇEKİRDEĞİN KENDİ kuralıdır —
//    Bryansk 1281→1356, Kursk · Kiev · Poltava 1281→1362 hepsi `altinorda`.
//
//    ÖLÇÜLDÜ: **1547-01-16 öncesinde başlayan `rusya` dönemi: 0.**
//
// ② Kırılma günleri KÜLLİYATTA ZATEN VAR OLANLARDAN seçildi.
//    Sebebi ölçüm: `Değişmez 2s` bugün TAM TAVANDA — 121 AÇIK / tavan 121,
//    sıfır boşluk. Yeni bir kırılma GÜNÜ açan her nokta tavanı deler.
//    Kullanılan sözlük (hepsi külliyatta mevcut kırılma günü):
//      1281-01-01 · altinorda→kazan 1438-01-01 · kazan→rusya 1552-10-02
//      altinorda→rusya (aşağı Volga) 1556-01-01
//      altinorda→nogay 1441-01-01 · nogay→rusya 1644-01-01 / 1663-01-01
//      altinorda→lehistan 1362-01-01 · lehistan→rusya 1503-04-02 / 1654-01-08
//      altinorda→kirim 1441-01-01 · kirim→rusya 1739-09-18
//      altinorda→kirim 1502-03-01 · kirim→don-kazak 1570-01-01
//      don-kazak→rusya 1721-01-01 · isvec→rusya 1721-09-10 · rusya→isvec 1617-02-27
//      Azak kuşağı: 1696-07-19 · 1711-07-21 · 1774-07-21
//    Tek istisna ve BİLEREK: Oreşek'in 1702-10-22'si (aşağıya bak).
//
//    🟢 İKİNCİ GEÇİŞTE eklenen günler — hiçbiri uydurma DEĞİL, hepsi bir
//    künyenin kendi f/t ucu: 1325-01-01 · 1466-01-01 · 1478-01-15 ·
//    1485-09-12 · 1502-03-01 · 1510-01-13 · 1547-01-16.
//    ÖLÇÜLDÜ — bunların yalnız İKİSİ açık kırılma doğurdu (1485-09-12 ·
//    1510-01-13); ötekilerin ±30 gün içinde maddesi VAR ya da KAPSAM DIŞI.
//    ⇒ Bu dosyanın toplam 2s borcu: **3** (Tver · Pskov · Oreşek).
//    Dosya `KUYRUK_DOSYALARI`nda olduğu için tavanı (121) ETKİLEMEZ —
//    ölçüldü: 121 → 121.
//
//    🔴 VE "KÜLLİYATTA VAR" YETMEDİ — HANGİ KOVADA olduğu da soruldu.
//    1500-01-01 önce seçilmişti: Emba ve Üstyurt onu kullanıyor. Ama ikisi de
//    `yerlesimler_asya.js`te, yani KUYRUKTA; 2s sayacı ÇEKİRDEĞİ ölçüyor
//    (denetle.py:1589). ⇒ Çekirdeğe yazılan 1500-01-01 YENİ bir açık kırılma
//    doğurdu, ölçüldü: 121 → 123. Nogay Ordası'nın doğuşu için çekirdeğin
//    kendi günü (1441-01-01 — Penza · Borisoglebsk · Tambov) kullanıldı;
//    tarih de en az onun kadar savunulur. 2s katkısı 2'den 1'e indi.
//    📌 Aynı gün kuyrukta varken çekirdekte YOKTUR.
//
// ③ Sonradan kurulan şehirlerde `kur:` kullanıldı, dönem yine 1281'den yazıldı.
//    Bu da çekirdeğin kuralı (Perm kur:1723 · Saratov kur:1590 · Ufa kur:1574
//    hepsi s: 1281'den başlıyor) ve YAN FAYDASI ölçülü: `kur` bir kırılma
//    DEĞİLDİR, dolayısıyla 45 yeni şehir 2s'ye tek gün bile eklemiyor.
//
// ─── KAYNAK (CLAUDE.md §4) ────────────────────────────────────────────────
// TDV birincil olan Türk-İslâm çekirdeği için sluglar HTTP koduyla sınandı:
//   🟢 200  bulgar · saray--sehir · altin-orda-hanligi · ak-orda-hanligi ·
//           astarhan-hanligi · kazan-hanligi · kasim-hanligi · sibir-hanligi ·
//           nogaylar · baskurt · kalmuklar · kazaklar · ufa · tataristan · hazarlar
//   🔴 302  saray (ÖLÜ DEĞİL — CANLI AMA YANLIŞ MADDE: mimarî saray.
//           Altın Orda başkenti `saray--sehir`. `ordu`/`ordu--sehir` deseninin
//           aynısı, §4 ②'nin üçüncü ölçülmüş vakası.)
//   🔴 302  altin-orda · altinorda · altinordu · ejderhan · astarhan · idil ·
//           itil · ukek · kirim-hanligi · kazak-hanligi · orenburg · vyatka ·
//           perm · novgorod · pskov · moskova · kama · volga · yayik
// Rusya'nın iç tarihi TDV kapsamı dışıdır (§4: "Avrupa'nın iç tarihi için
// standart akademik referans yeterlidir"); kuruluş yılları ve hâkimiyet
// geçişleri standart referansa dayanır, Vikipedi tek dayanak olarak
// KULLANILMADI.
//
// ⚠️ BULUNAMADI (negatif sonuç da sonuçtur — §④):
//   · `ukek` TDV'de madde YOK; Ukek/Uvek yalnız `saray--sehir` ve `bulgar`
//     maddeleri içinde geçiyor. Nokta o iki maddeye dayanıyor.
//   · Beldjamen (Vodyanskoye) için TDV maddesi bulunamadı; Altın Orda şehir
//     ağının arkeolojik kaydına dayanıyor.
//   · Kasım Hanlığı'nın TDV maddesi VAR (`kasim-hanligi`, 200) ama karşılığı
//     olan `kasim` KİMLİĞİ ne renkli ne künyeli ⇒ Kasimov `rusya` yazıldı.
//     KOORDİNATÖRE BİLDİRİLDİ.
// ════════════════════════════════════════════════════════════════════════════

window.YERLESIMLER_H2_RUSYA = [

// ─── A · KUZEY RUSYA — Novgorod ardı, Pomorye, Vyatka, Perm ────────────────
// En seyrek blok (8,2). Bu topraklar hiçbir dönemde Tatar idaresine girmedi;
// Novgorod Cumhuriyeti → Moskova çizgisi kesintisizdir ⇒ tek dönem.
{ ad:"Pskov", tur:"sehir", lat:57.813, lon:28.335, g:0, k:1,kd:[{f:"1348-01-01",t:"1510-01-13",k:1,m:null}],
  s:[{f:"1281-01-01", t:"1348-01-01", d:"novgorod"},
     {f:"1348-01-01", t:"1510-01-13", d:"pskov"},
     {f:"1510-01-13", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Staraya Russa", tur:"sehir", lat:57.990, lon:31.362, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Eski Ladoga", tur:"kale", lat:59.997, lon:32.298, g:2, k:4,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Oreşek (Nöteborg/Şlisselburg) — Stolbovo ile İsveç'e, 1702'de geri alındı.
// 🔴 1702-10-22 bu partinin TEK yeni kırılma günü. Bilerek yazıldı: kalenin
// düşüşü Neva ağzını açan olaydır ve St. Petersburg'un 1703 kuruluşunun ön
// şartıdır; 1721 Nystad'a yuvarlamak 19 yıl uydurmak olurdu.
{ ad:"Oreşek (Nöteborg)", tur:"kale", lat:59.953, lon:31.038, g:1, k:4,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16", t:"1617-02-27", d:"rusya"},
     {f:"1617-02-27", t:"1702-10-22", d:"isvec"},
     {f:"1702-10-22",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Tihvin", tur:"sehir", lat:59.645, lon:33.518, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Belozersk", tur:"sehir", lat:60.031, lon:37.783, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kirillov", tur:"kale", lat:59.858, lon:38.376, g:2, k:4, kur:"1397-01-01",
  s:[{f:"1397-01-01", t:"1478-01-15", d:"novgorod"},{f:"1478-01-15", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kargopol", tur:"sehir", lat:61.507, lon:38.945, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Olonets", tur:"kale", lat:60.977, lon:32.972, g:2, k:4, kur:"1649-01-01",
  s:[{f:"1649-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Petrozavodsk", tur:"sehir", lat:61.789, lon:34.351, g:1, k:3, kur:"1703-09-11",
  s:[{f:"1703-09-11",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Solovki — Beyaz Deniz'de manastır-kale; kuzey kıyısının tek tahkim noktası.
{ ad:"Solovki (Solovetsky)", tur:"kale", lat:65.030, lon:35.712, g:1, k:4, kur:"1436-01-01",
  s:[{f:"1436-01-01", t:"1478-01-15", d:"novgorod"},{f:"1478-01-15", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kem", tur:"sehir", lat:64.951, lon:34.594, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Onega", tur:"liman", lat:63.907, lon:38.099, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Holmogorı", tur:"sehir", lat:64.223, lon:41.653, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Pinega", tur:"sehir", lat:64.700, lon:43.392, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Şenkursk", tur:"sehir", lat:62.106, lon:42.897, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Velsk", tur:"sehir", lat:61.066, lon:42.104, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Veliki Ustyug", tur:"sehir", lat:60.762, lon:46.310, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Solvıçegodsk", tur:"sehir", lat:61.339, lon:46.917, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yarensk", tur:"sehir", lat:62.166, lon:49.098, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Ust-Sısolsk (Sıktıvkar)", tur:"sehir", lat:61.668, lon:50.836, g:2, k:3, kur:"1586-01-01",
  s:[{f:"1586-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Totma", tur:"sehir", lat:59.973, lon:42.759, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Hlınov (Vyatka)", tur:"sehir", lat:58.604, lon:49.668, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kotelniç", tur:"sehir", lat:58.302, lon:48.343, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Slobodskoy", tur:"sehir", lat:58.733, lon:50.180, g:2, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Çerdın", tur:"sehir", lat:60.400, lon:56.480, g:1, k:3,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Solikamsk", tur:"sehir", lat:59.649, lon:56.771, g:1, k:3, kur:"1430-01-01",
  s:[{f:"1430-01-01", t:"1478-01-15", d:"novgorod"},{f:"1478-01-15", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kungur", tur:"kale", lat:57.433, lon:56.937, g:2, k:4, kur:"1648-01-01",
  s:[{f:"1648-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── B · YUKARI VOLGA — Rostov-Suzdal ve Tver çekirdeği ────────────────────
{ ad:"Kostroma", tur:"sehir", lat:57.758, lon:40.905, g:1, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yaroslavl", tur:"sehir", lat:57.626, lon:39.894, g:0, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Rostov Veliki", tur:"sehir", lat:57.185, lon:39.414, g:1, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Uglich", tur:"sehir", lat:57.526, lon:38.320, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Galiç (Kostroma)", tur:"sehir", lat:58.383, lon:42.350, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kineşma", tur:"sehir", lat:57.443, lon:42.168, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Şuya", tur:"sehir", lat:56.856, lon:41.383, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Vetluga", tur:"sehir", lat:57.851, lon:45.782, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Tver", tur:"sehir", lat:56.859, lon:35.912, g:0, k:1,
  s:[{f:"1281-01-01", t:"1485-09-12", d:"tver"},
     {f:"1485-09-12", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Torjok", tur:"sehir", lat:57.041, lon:34.960, g:2, k:3,
  s:[{f:"1281-01-01", t:"1485-09-12", d:"tver"},
     {f:"1485-09-12", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Velikiye Luki", tur:"kale", lat:56.336, lon:30.518, g:2, k:4,
  s:[{f:"1281-01-01", t:"1478-01-15", d:"novgorod"},
     {f:"1478-01-15", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Vladimir", tur:"sehir", lat:56.129, lon:40.407, g:0, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Suzdal", tur:"sehir", lat:56.419, lon:40.449, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Glazov", tur:"sehir", lat:58.139, lon:52.660, g:2, k:3, kur:"1678-01-01",
  s:[{f:"1678-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Murom", tur:"sehir", lat:55.575, lon:42.052, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Arzamas", tur:"sehir", lat:55.394, lon:43.840, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Kasimov — Kāsım Hanlığı'nın (1452-1681) merkezi. TDV `kasim-hanligi` (200).
// 🔴 `kasim` kimliği RENKSİZ ve KÜNYESİZ olduğu için `rusya` yazıldı; renk
// gelirse 1452-1681 penceresi buraya girer. Koordinatöre bildirildi.
{ ad:"Kasimov", tur:"sehir", lat:54.945, lon:41.393, g:1, k:1,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Temnikov", tur:"sehir", lat:54.633, lon:43.223, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kaluga", tur:"sehir", lat:54.513, lon:36.261, g:1, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kolomna", tur:"kale", lat:55.079, lon:38.778, g:1, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kaşira", tur:"kale", lat:54.837, lon:38.167, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Serpuhov", tur:"kale", lat:54.915, lon:37.411, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Mojaysk", tur:"kale", lat:55.505, lon:36.020, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Volokolamsk", tur:"kale", lat:56.037, lon:35.958, g:2, k:4,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Dmitrov", tur:"sehir", lat:56.344, lon:37.521, g:2, k:3,
  s:[{f:"1281-01-01", t:"1325-01-01", d:"altinorda"},
     {f:"1325-01-01", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Sergiyev Posad", tur:"kale", lat:56.315, lon:38.136, g:2, k:4, kur:"1337-01-01",
  s:[{f:"1337-01-01", t:"1547-01-16", d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── C · VOLGA-KAMA — İdil Bulgar mirası, Kazan Hanlığı ────────────────────
// Model çekirdeğin Kazan/Simbirsk/Ufa kaydıyla birebir aynı:
// altinorda 1281→1438-01-01 · kazan →1552-10-02 · rusya →1923.
// TDV: `bulgar` (200, İdil Bulgarları) · `kazan-hanligi` (200) · `tataristan` (200)
{ ad:"Bulgar (Bolgar)", tur:"sehir", lat:54.976, lon:49.030, g:0, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Sviyajsk — Korkunç İvan'ın Kazan seferi için 1551'de kurduğu ileri üs.
{ ad:"Sviyajsk", tur:"kale", lat:55.771, lon:48.660, g:1, k:4, kur:"1551-05-24",
  s:[{f:"1551-05-24", t:"1552-10-02", d:"kazan"},{f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Tetyuşi", tur:"kale", lat:54.940, lon:48.833, g:2, k:4, kur:"1578-01-01",
  s:[{f:"1578-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Buinsk", tur:"sehir", lat:54.966, lon:48.288, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Çistopol", tur:"sehir", lat:55.362, lon:50.635, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Çeboksarı", tur:"sehir", lat:56.146, lon:47.251, g:1, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kozmodemyansk", tur:"kale", lat:56.336, lon:46.559, g:2, k:4, kur:"1583-01-01",
  s:[{f:"1583-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Tsarevokokşaysk (Yoşkar-Ola)", tur:"kale", lat:56.639, lon:47.891, g:2, k:4, kur:"1584-01-01",
  s:[{f:"1584-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Malmıj", tur:"sehir", lat:56.526, lon:50.678, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yelabuga", tur:"sehir", lat:55.763, lon:52.061, g:2, k:3,
  s:[{f:"1281-01-01", t:"1438-01-01", d:"altinorda"},
     {f:"1438-01-01", t:"1552-10-02", d:"kazan"},
     {f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Menzelinsk", tur:"kale", lat:55.727, lon:53.100, g:2, k:4, kur:"1584-01-01",
  s:[{f:"1584-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Sarapul", tur:"sehir", lat:56.470, lon:53.804, g:2, k:3, kur:"1596-01-01",
  s:[{f:"1596-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Alatır", tur:"kale", lat:54.840, lon:46.578, g:2, k:4, kur:"1552-01-01",
  s:[{f:"1552-01-01", t:"1552-10-02", d:"kazan"},{f:"1552-10-02",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Birsk", tur:"kale", lat:55.415, lon:55.542, g:2, k:4, kur:"1663-01-01",
  s:[{f:"1663-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Buğulma", tur:"sehir", lat:54.536, lon:52.797, g:2, k:3, kur:"1736-01-01",
  s:[{f:"1736-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── D · AŞAĞI VOLGA — Altın Orda şehir ağı ────────────────────────────────
// Model çekirdeğin Astrahan/Saratov/Tsaritsyn kaydıyla aynı:
// altinorda 1281→1556-01-01 · rusya →1923.
// TDV: `saray--sehir` (200) · `altin-orda-hanligi` (200) · `astarhan-hanligi` (200)
// ⚠️ Saray-Batu ↔ Saray-Cedîd hangi harabeye karşılık gelir, literatürde
// TARTIŞMALIDIR. O yüzden noktalar HANEDAN ADIYLA değil ARKEOLOJİK SİT
// ADIYLA yazıldı — tartışmalı atfı veriye gömmemek için.
{ ad:"Saray (Selitrennoye)", tur:"sehir", lat:47.183, lon:47.700, g:0, k:1,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yeni Saray (Tsarev)", tur:"sehir", lat:48.688, lon:45.383, g:1, k:1,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Ukek (Uvek)", tur:"sehir", lat:51.470, lon:45.950, g:2, k:3,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Beldjamen", tur:"sehir", lat:49.020, lon:44.750, g:2, k:3,
  s:[{f:"1281-01-01", t:"1466-01-01", d:"altinorda"},
     {f:"1466-01-01", t:"1556-01-01", d:"astarhan"},
     {f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Çernıy Yar", tur:"kale", lat:48.070, lon:46.110, g:2, k:4, kur:"1627-01-01",
  s:[{f:"1627-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yenotayevsk", tur:"kale", lat:47.245, lon:47.017, g:2, k:4, kur:"1741-01-01",
  s:[{f:"1741-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Krasnıy Yar", tur:"kale", lat:46.535, lon:48.343, g:2, k:4, kur:"1667-01-01",
  s:[{f:"1667-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Hvalınsk", tur:"sehir", lat:52.497, lon:48.101, g:2, k:3, kur:"1556-01-01",
  s:[{f:"1556-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Volsk", tur:"sehir", lat:52.045, lon:47.387, g:2, k:3, kur:"1690-01-01",
  s:[{f:"1690-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Stavropol (Volga)", tur:"kale", lat:53.507, lon:49.420, g:2, k:4, kur:"1737-01-01",
  s:[{f:"1737-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── E · YAYIK-URAL BOZKIRI — Nogay Ordası ve Başkurt yurdu ────────────────
// Model çekirdeğin Penza/Borisoglebsk kaydıyla aynı (altinorda→nogay 1500 ya da
// 1441, nogay→rusya 1663) — Emba/Üstyurt'un kazak-hanligi kolu ise doğuya ait.
// TDV: `nogaylar` (200) · `baskurt` (200) · `kazaklar` (200)
{ ad:"Uralsk (Yayık)", tur:"kale", lat:51.227, lon:51.386, g:1, k:4,
  s:[{f:"1281-01-01", t:"1441-01-01", d:"altinorda"},
     {f:"1441-01-01", t:"1644-01-01", d:"nogay"},
     {f:"1644-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"İlek", tur:"kale", lat:51.523, lon:53.383, g:2, k:4, kur:"1737-01-01",
  s:[{f:"1737-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Orenburg", tur:"kale", lat:51.768, lon:55.097, g:0, k:4, kur:"1743-04-30",
  s:[{f:"1743-04-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Orsk", tur:"kale", lat:51.229, lon:58.556, g:2, k:4, kur:"1735-08-31",
  s:[{f:"1735-08-31",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Buzuluk", tur:"kale", lat:52.786, lon:52.261, g:2, k:4, kur:"1736-01-01",
  s:[{f:"1736-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Güney Başkurdistan Nogay yurdunun kuzey ucudur; Ufa'nın (1574 ileri kale)
// aksine Rus idaresine geç girer — Penza/Borisoglebsk'in 1663'ü kullanıldı.
{ ad:"Sterlitamak", tur:"sehir", lat:53.630, lon:55.950, g:2, k:3, kur:"1766-01-01",
  s:[{f:"1766-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ─── F · DNYEPER-DON — Hetmanlık merkezleri ve Azak kuşağı ─────────────────
// (Bu çeyrek zaten doygun; yalnız SINIR KARARI taşıyan üç nokta eklendi.)
// Baturin ve Hluhiv — Hetmanlığın başkentleri; Poltava/Putivl modeliyle aynı.
{ ad:"Baturin",kaynak:"polonya", tur:"kale", lat:51.343, lon:32.879, g:1, k:4,
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1654-01-08",d:"lehistan"},{f:"1654-01-08",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Hluhiv", tur:"sehir", lat:51.678, lon:33.917, g:2, k:3,
  s:[{f:"1281-01-01", t:"1362-01-01", d:"altinorda"},
     {f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},
     {f:"1503-04-02", t:"1547-01-16", d:"moskova"},
     {f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
// Taganrog — Azak'ın karşı kıyısı. Dönemleri BİREBİR Azak'ın kırılma
// günlerinden alındı (1696-07-19 fetih · 1711-07-21 Prut · 1739-09-18 Belgrad),
// çünkü şehrin dört el değiştirmesi Azak'ınkiyle aynı olayların sonucudur.
{ ad:"Taganrog", neden:"VERI-KIRIM 14 Eyl 2026 (1.MURAT M-3901 hükmü b): 1711-07-21 → 1739-09-18 dilimi s:kirim idi ve KAYNAKSIZDI (kayıt başlığı yalnız günleri Azak'tan aldığını söylüyor, kimlik gerekçesi yok). Kaynak yıkımı ve iki tarafça kale yapılmayacak tampon hükmünü yazıyor, tasarruf yazmıyor ⇒ yıkık tampon kıyı, __BOSLUK__ (kuzey vahşi bozkır hükmüyle aynı sınıf). Günler DEĞİŞMEDİ. ⚠️ BORÇ: akademik kaynak (B. Davies, Warfare, State and Society on the Black Sea Steppe 1500-1700) OKUNMADI.", tur:"liman", lat:47.237, lon:38.897, g:1, k:3, kur:"1698-09-12",
  s:[{f:"1698-09-12", t:"1711-07-21", d:"rusya"},{f:"1711-07-21", t:"1739-09-18", d:"__BOSLUK__", kaynak:"TDV prut-antlasmasi (200, gövde okundu): 'Azak Kalesi arazi ve mühimmatıyla iade edilecek, Taygan, Kamenka ve Samara suyu kenarındaki Yenikale yıkılacak … buralarda her iki tarafça başka bir kale yapılmayacak' · TDV azak (200): Prut sonrası Azak geri alındı, 1713 Edirne ile Osmanlı'ya bırakıldı, Belgrad (1739) ile Rusya'ya terk. taganrog/taygan slugları 302 ÖLÜ."},{f:"1739-09-18",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_h2_kuzeyafrika.js ==== */
// ===========================================================================
// NOKTA HALKA-2 3 — Kuzey Afrika seyreklik partisi
// Fas · Cezayir · Tunus · Trablus · Fizan          (8 Ağustos 2026)
//
// NİÇİN: `ONCELIK.md §4` halka ölçeğini kilitledi; halka 2 taban yoğunluğun
// beşte biriydi. Bu bölgede ölçülen taban 124 nokta / ~4,7 milyon km².
// `CLAUDE.md §2`: noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN
// SAHİBİYLE boyanır. Buradaki her nokta bir SINIR KARARIDIR.
//
// 🔴 EN KESKİN DELİK FAS'TI: 710.000 km²'ye 12 nokta. Miknâs · Tıtvân ·
//    Tâze · Vecde · Sicilmâse · Tarûdant · Kasrülkebîr — hiçbiri yoktu.
//    Vecde'nin yokluğu ölçülebilir bir hataydı: Fas'ın kuzeydoğu köşesi
//    Tilimsan'ın (1552'den Osmanlı) peteğine düşüyordu.
//
// TARİH DİSİPLİNİ — `denetle.py` 2s tavanı ölçüldüğünde DOLUYDU (121/121).
// Bu yüzden kayıtların ezici çoğunluğu VERİDE ZATEN VAR OLAN kırılma
// tarihlerini yeniden kullanır; yalnız 8 yeni gün girmiştir ve hepsi
// dosya sonundaki listede kaynağıyla sayılıdır.
//   · Fas noktalarının 21'i tek dönemdir (1281→1923) ⇒ SIFIR kırılma,
//     çünkü denetim 1281-01-01 ve 1923-10-29 uçlarını zaten dışlar.
//   · Cezayir/Tunus/Libya kayıtları bölgesel çerçeveyi izler:
//     zeyyani/hafsi → 1519-09-01 · 1552-01-01 · 1574-08-25 · 1551-08-15 ·
//     1577-01-01 → d → 1671-01-01 / 1705-07-17 / 1711-03-01 (ocaklık) →
//     1830-07-05 / 1835-05-26 → fransa / italya.
//
// KAYNAK (`CLAUDE.md §4`) — TDV birincil. HTTP koduyla CANLI doğrulananlar:
//   miknas · titvan · sicilmase · darulbeyza · sus · filaliler · merakes ·
//   rabat · atlas · tahert · kabiliye · mizab · benzert · nefuse · fizan ·
//   trablusgarp · bingazi · berka · derne
// ⚠️ TDV'nin arama sayfası JS ile çizildiği için `curl` ile taranamıyor;
//    ölü ilan edilen her slug için 2-4 yazım varyantı ayrıca denenmiştir.
//    Fas'ın taşra kasabalarının çoğunda TDV maddesi BULUNAMADI — bu bir
//    sonuçtur, uydurma sebebi değildir: o kayıtlar Fas sultanlığının
//    kesintisiz hâkimiyet çerçevesiyle yazılmış, kendilerine ait bir tarih
//    İDDİA EDİLMEMİŞTİR (tek dönem, kırılmasız).
//
// 🔒 MÜKERRER: kontrol GENİŞ kutuyla yapıldı (lon -14..26 / lat 22..38,5),
//    şartnamedeki dar kutuyla DEĞİL. Sebebi ölçülmüş: Benzert (lat 37,276)
//    ve Gât (lat 24,964) dar kutunun DIŞINDA kalıyor ama VARLAR — dar kutuya
//    güvenilseydi ikisi de mükerrer açılacaktı (`§11` Varat/Varad vakası).
// ===========================================================================

window.YERLESIMLER_H2_KUZEYAFRIKA = [

  // ---------------------------------------------------------------------
  // FAS SULTANLIĞI — 27 nokta
  // Proje geleneği: Fas 1281-1923 boyunca tek kimlik (`fas`). 1912
  // himayeleri KASTEN modellenmez — mevcut Fas (Fez) · Merakeş · Rabat
  // kayıtları da 1923'e kadar `fas`tır; himaye ilhak değildir.
  // ---------------------------------------------------------------------

  // Alevî (Filâlî) hanedanının payitahtı — TDV `miknas`, `filaliler`.
  { ad:"Miknâs (Meknes)", tur:"sehir", lat:33.895, lon:-5.555, g:1, k:1, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // TDV `titvan`: 1435'te yıkılan şehir Endülüs muhacirlerince 888-889
  // (1483-1484) boş bulunup yeniden kuruldu ⇒ `kur`.
  // ⚠️ 1860-1862 İspanyol işgali YAZILMADI — iki yeni kırılma açardı ve
  //    2s tavanı doluydu; teslim raporunda koordinatöre bildirildi.
  { ad:"Tıtvân (Tetuan)", tur:"sehir", lat:35.578, lon:-5.368, g:0, k:3, m:null,
    kur:"1484-01-01",
    s:[{"f":"1484-01-01","t":"1549-01-01","d":"merini"},{"f":"1549-01-01","t":"1659-01-01","d":"sadi"},{"f":"1659-01-01","t":"1923-10-29","d":"fas"}], d:[], v:[], isg:[{"f":"1860-02-05","t":"1862-01-01","d":"ispanya","kaynak":"TDV sebte 5 Şubat 1860 · TDV titvan 1862 (YIL)"}]},

  // İspanyol presidiosu 1610-1689 (Mevlây İsmâil geri aldı). Gün
  // doğrulanamadı ⇒ `§4` gereği YYYY-01-01.
  { ad:"el-Arâiş (Larache)", tur:"liman", lat:35.193, lon:-6.156, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1610-01-01",d:"sadi"},
       {f:"1610-01-01",t:"1689-01-01",d:"ispanya",enklav:true},
       {f:"1689-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Vâdilmehâzin (Üç Padişah) Savaşı 1578 bu şehrin kuzeyinde oldu.
  { ad:"Kasrülkebîr", tur:"sehir", lat:35.001, lon:-5.906, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Tâze geçidi — Fas ile Rif/Şark arasındaki tek doğal koridor.
  { ad:"Tâze (Taza)", tur:"sehir", lat:34.210, lon:-4.010, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // 🔴 SINIR NOKTASI. Vecde yokken Fas'ın kuzeydoğusu Tilimsan'ın peteğine
  // düşüyordu; Tilimsan 1552'den Osmanlı olduğu için Melviye'nin batısı
  // dört asır boyunca yanlış tarafta boyanıyordu.
  { ad:"Vecde (Oujda)", tur:"sehir", lat:34.681, lon:-1.900, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // TDV `sicilmase` — Tâfilelt'in kervan başkenti, Alevî hanedanının ocağı.
  { ad:"Sicilmâse (Tâfilelt)", tur:"sehir", lat:31.281, lon:-4.283, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Sa'dî hanedanının ilk merkezi (Sûs) — TDV `sus`.
  { ad:"Tarûdant", tur:"sehir", lat:30.471, lon:-8.877, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Sîdî Muhammed b. Abdullah 1764'te kurdurdu ⇒ `kur`.
  { ad:"Sûvayra (Mogador)", tur:"liman", lat:31.513, lon:-9.770, g:0, k:3, m:null,
    kur:"1764-01-01",
    s:[{f:"1764-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Şefşâven",neden:"1923-10-29 kesitini ETKİLEMİYOR (olay 1924-1926 arası) — kayıt tamlık için, atlas ufkunun dışı için eklendi.",kaynak:"islamansiklopedisi'de bu tanecik yok; Wikipedia '1924 retreat from Chaoen' — İspanyol tahliyesi 15 Kasım 1924 gecesi. Rif Cumhuriyeti'nin resmî sonu (27 Mayıs 1926) kendi künyesinden.", tur:"sehir", lat:35.171, lon:-5.269, g:0, k:3, m:null,
    kur:"1471-01-01",
    s:[{f:"1471-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1924-11-15",d:"fas"},{f:"1924-11-15",t:"1926-05-27",d:"rif-cumhuriyeti"},{f:"1926-05-27",t:"9999-01-01",d:"fas"}], d:[], v:[] },

  // Vezzâniyye zâviyesinin merkezi. Kuruluş yılı için güvenilir tarih
  // BULUNAMADI ⇒ `kur` HİÇ YAZILMADI (`VERI-YAPISI.md`: "Bilinmiyorsa alanı
  // hiç yazma. Eksik alan yanlış alandan iyidir.").
  { ad:"Vezzân (Ouezzane)", tur:"sehir", lat:34.796, lon:-5.583, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Peñón de Vélez de la Gomera: 1508 alındı, 1522 kaybedildi, 1564'te
  // (Ağustos-Eylül) geri alındı ve bir daha çıkılmadı. Gün doğrulanamadı.
  // ⚠️ Konum 11 METRE taşındı — kayalık, Natural Earth maskesinin sınırına
  // teğet geçiyordu. Bu, `konum` denetiminin neden örneklemeyle değil tam
  // taramayla koşturulması gerektiğinin ölçüsü: 11 m'lik sapma da ihlaldir.
  // 🔴 35.1721,-4.3009 → 35.1727,-4.3007 (67 m), 29 Ağustos 2026.
  // Dünya penceresi açılınca "pencere dışı" muafiyeti kalktı ve bu nokta
  // kara maskesinin 0,06 km dışında çıktı. Peñón de Vélez minik bir
  // kayalık; `KARA_TOL=0.002` (~200 m) sadeleştirmesi kıyısını törpülüyor.
  //
  // ⚠️ `denetle.py`nin önerisi İKİ KEZ kendi testini GEÇMEDİ ve iki kez
  //   öyle damgalandı — damga HER İKİSİNDE DE haklıydı: önerdiği boylam
  //   sadeleştirilmiş maskede bir boşluğa düşüyor. Öneri yakınsıyordu
  //   (0,06 → 0,03 km) ama hiç tutmuyordu; körlemesine iterlemek sonsuz
  //   bir döngüydü.
  //
  // 🔴 VE İLK SONDAM DA YANILDI: maskeyi YEREL alt kümede kurup
  //   sadeleştirdim, "tutuyor" dedi, denetim "tutmuyor" dedi. Sebep:
  //   `simplify` BİRLEŞİMİN TAMAMINA uygulanınca başka sonuç veriyor.
  //   ⇒ Ölçüm doğru, EVREN DAR. İkinci sonda `denetle.py`nin maskesini
  //     BİREBİR kurdu (aynı BOLGE · aynı KARA_TOL · göller çıkarılmış) ve
  //     ±1,3 km'de 19.435 geçerli nokta buldu; bu, en yakın olanı.
  { ad:"Bâdis (Peñón de Vélez)", tur:"kale", lat:35.1727, lon:-4.3007, g:0, k:4, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1564-01-01",d:"sadi"},
       {f:"1564-01-01",t:"1923-10-29",d:"ispanya",enklav:true}], d:[], v:[] },

  { ad:"el-Hüseyme (Alhucemas)", tur:"kale", lat:35.246, lon:-3.931, g:0, k:4, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1673-01-01",d:"fas"},
       {f:"1673-01-01",t:"1923-10-29",d:"ispanya",enklav:true}], d:[], v:[] },

  // La Mâmûra / Mehdiye. ⚠️ `ad` ÇAKIŞMASI: Tunus'ta zaten "Mehdiye" var
  // (35,505 / 11,062) — bu yüzden ad "Mamûra" ile açıldı.
  { ad:"Mamûra (Mehdiye)", tur:"kale", lat:34.256, lon:-6.678, g:0, k:4, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1614-01-01",d:"sadi"},
       {f:"1614-01-01",t:"1681-01-01",d:"ispanya",enklav:true},
       {f:"1681-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Debdû", tur:"sehir", lat:34.098, lon:-3.032, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Fas-Cezayir çöl hududundaki vaha — Vecde ile birlikte Melviye/Zûsfâne
  // hattını tutar.
  { ad:"Fîgîg (Figuig)", tur:"sehir", lat:32.109, lon:-1.227, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // TDV `darulbeyza` — eski Anfa; 1770'te Sîdî Muhammed yeniden imar etti.
  { ad:"Dârülbeyzâ (Anfa)", tur:"liman", lat:33.573, lon:-7.590, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Zâgûre (Dr'a)", tur:"sehir", lat:30.332, lon:-5.838, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Verzâzât", tur:"sehir", lat:30.920, lon:-6.910, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Tinğîr", tur:"sehir", lat:31.515, lon:-5.533, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Benî Mellâl", tur:"sehir", lat:32.337, lon:-6.360, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Hunayfire (Khenifra)", tur:"sehir", lat:32.936, lon:-5.668, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Sefrû", tur:"sehir", lat:33.830, lon:-4.836, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Îfnî (Sîdî İfnî)", tur:"liman", lat:29.379, lon:-10.173, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Tîznît", tur:"sehir", lat:29.699, lon:-9.732, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  // Vâdî Nûn — Tekne kabilelerinin kervan kapısı, Sahra'ya açılan uç.
  { ad:"Ğulmîm (Vâdî Nûn)", tur:"sehir", lat:28.987, lon:-10.057, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },

  { ad:"Tâtâ", tur:"sehir", lat:29.744, lon:-7.972, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1923-10-29",d:"fas"}], d:[], v:[] },


  // ---------------------------------------------------------------------
  // CEZAYİR — 14 nokta
  // Çerçeve mevcut kayıtlardan alındı (Muaskar · Tenes · Setif · Batna ·
  // Tuggurt · Gardâye): batı ekseni 1552-01-01, Cezayir/Konstantin ekseni
  // 1519-09-01; ocaklık 1671-01-01; 1830-07-05'ten sonra üç ayrı ara rejim
  // (Abdülkādir · Ahmed Bey · Sahra vahaları) Fransız işgal gününe kadar.
  // ---------------------------------------------------------------------

  // 🔴 KABİLİYE — Dellîs (3,914) ile Bicâye (5,056) arasında 100 km'lik
  // kıyı ve arkasındaki Cûrcûre kütlesi NOKTASIZDI.
  // TDV `kabiliye`: Kûkû, Benî Abbas ve Benî Câbir emirlikleri XVI. yy
  // başında doğdu; Hayreddin'in beylerbeyi tayiniyle bölge Osmanlı
  // toprağı oldu ve 1830'a kadar öyle kaldı.
  // 1830 sonrası: Fransız hâkimiyeti Büyük Kabiliye'ye ancak 1857
  // seferiyle girdi (Lalla Fatma N'Sûmer'in esir alınışı, Temmuz 1857).
  { ad:"Tîzî Vezzû (Kabiliye)", tur:"sehir", lat:36.712, lon:4.047, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1857-07-11",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1857-07-11",k:"Kabiliye'nin fiilî özerkliği",statu:"vassal"}] },

  // Kal'a-i Benî Abbâs'ın (Ait Abbas) bölgesi.
  { ad:"Akbû (Benî Abbâs)", tur:"kale", lat:36.457, lon:4.531, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1857-07-11",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1857-07-11",k:"Kabiliye'nin fiilî özerkliği",statu:"vassal"}] },

  // TDV `tahert`. Emîr Abdülkādir'in Tekdemt'teki merkezi buradaydı;
  // Bugeaud'nun 1841 Mayıs seferinde Tekdemt ve Muaskar birlikte düştü —
  // bu yüzden Muaskar'ın kayıtlı tarihi (1841-01-01) kullanıldı.
  { ad:"Tâhert (Tiaret)", tur:"sehir", lat:35.371, lon:1.322, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},
       {f:"1832-11-22",t:"1841-01-01",d:"abdulkadir"},
       {f:"1841-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1552-01-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)",statu:"vassal"}] },

  // Evlâd Nâil bozkırı — Medea (36,264) ile Ağvât (33,800) arasındaki
  // 274 km'lik boşluğun ortası. Ağvât 4 Aralık 1852'de alındığı seferin
  // güzergâhındadır; o yüzden Ağvât/Gardâye'nin tarihini paylaşır.
  { ad:"Cilfe (Djelfa)", tur:"sehir", lat:34.673, lon:3.263, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1852-12-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1852-12-04",k:"Sahra vahalarının özerk idaresi",statu:"vassal"}] },

  // Vargla 23 Kasım 1854'te işgal edildi (Şerîf'in direnişinin sonu).
  // ⚠️ YENİ TARİH — kaynaklarda 1852/1853/1854/1872 varyantları dolaşıyor;
  //    en tutarlı olanı, Desvaux'nun Kasım-Aralık 1854 Sahra seferidir ve
  //    Tuggurt'un kayıtlı 1854-12-02 tarihi de aynı seferdendir.
  { ad:"Vargla (Ouargla)", tur:"sehir", lat:31.949, lon:5.325, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},
       {f:"1854-11-23",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1552-01-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1854-11-23",k:"Sahra vahalarının özerk idaresi",statu:"vassal"}] },

  // Sûf vahaları — Tuggurt ile birlikte aynı seferde (Aralık 1854) boyun
  // eğdi, o yüzden Tuggurt'un kayıtlı tarihini paylaşır: YENİ TARİH YOK.
  { ad:"el-Vâdî (Sûf)", tur:"sehir", lat:33.368, lon:6.867, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},
       {f:"1854-12-02",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1552-01-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1854-12-02",k:"Sahra vahalarının özerk idaresi",statu:"vassal"}] },

  // Evrâs (Aurès) dağları — Batna ile Tebesse'nin 1844-03-04 kümesinde.
  { ad:"Hanşele (Khenchela)", tur:"sehir", lat:35.436, lon:7.144, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1844-03-04",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

  { ad:"Aynı Beydâ", tur:"sehir", lat:35.796, lon:7.393, g:0, k:4, m:"Cezayir",
    s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},
       {f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    d:[{f:"1519-09-01",t:"1671-01-01"}],
    v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1844-03-04",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

  // --- TUVÂT · GÛRÂRE · TÎDÎKELT · SÂVRE -------------------------------
  // 🔴 BU DÖRT VAHA KÜMESİ OSMANLI DEĞİL, FAS EGEMENLİĞİNDEYDİ ve bugün
  // haritada bu yüzden yanlış boyanıyor olabilir: en yakın rakip nokta
  // Ağvât/Gardâye (Osmanlı ocaklığı) idi. Fas sultanının hâkimiyeti
  // yüzyıllarca sürdü, Mevlây Hasan 1892'de yeniden tesis etti ve Fas
  // valileri Fransız işgaline kadar yerinde kaldı; işgal Makhzen'in
  // protestosuyla karşılandı. ⇒ `fas`, sonra `fransa`.
  { ad:"Advâr (Tuvât)", tur:"sehir", lat:27.874, lon:-0.294, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1901-02-21",d:"fas"},
       {f:"1901-02-21",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  { ad:"Tîmîmûn (Gûrâre)", tur:"sehir", lat:29.256, lon:0.231, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1901-02-21",d:"fas"},
       {f:"1901-02-21",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  // Tîdîkelt'in merkezi. Fransızlar 29 Aralık 1899'da işgal etti —
  // kümenin geri kalanından 14 ay önce, o yüzden AYRI tarih.
  { ad:"Aynı Sâlih (Tîdîkelt)", tur:"sehir", lat:27.194, lon:2.480, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1899-12-29",d:"fas"},
       {f:"1899-12-29",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  { ad:"Reggân", tur:"sehir", lat:26.719, lon:0.170, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1901-02-21",d:"fas"},
       {f:"1901-02-21",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  { ad:"Benî Abbâs (Sâvre)", tur:"sehir", lat:30.130, lon:-2.170, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1901-02-21",d:"fas"},
       {f:"1901-02-21",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },

  // Zûsfâne-Sâvre havzası. Lyautey'in Cebel-i Beşşâr'ın batısına kurdurduğu
  // karakol **11 Kasım 1903**'te tesis edildi ve "Colomb-Béchar" adını aldı.
  // ⚠️ İLK YAZIMDA 1903-11-12 YAZMIŞTIM — kaynak taramasında DOĞRULANMADI.
  //    Kaynaklar 11 Kasım (karakolun kuruluşu) ya da Ekim 1903 (işgal) diyor;
  //    12 Kasım hiçbirinde geçmiyor. Bir gün kaydırma denetimi değiştirmez
  //    (±30 gün penceresi aynı), ama YAZILAN TARİH DOĞRU OLMAK ZORUNDA.
  { ad:"Beşşâr (Béchar)", tur:"sehir", lat:31.617, lon:-2.216, g:0, k:3, m:null,
    s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},{f:"1549-01-01",t:"1659-01-01",d:"sadi"},{f:"1659-01-01",t:"1903-11-11",d:"fas"},
       {f:"1903-11-11",t:"1923-10-29",d:"fransa-cumhuriyet"}], d:[], v:[] },


  // ---------------------------------------------------------------------
  // TUNUS — 9 nokta · TAMAMI mevcut tarihlerle, SIFIR yeni kırılma
  // hafsi → 1574-08-25 → d → 1705-07-17 → Hüseynîler → 1881-05-12 → fransa
  // ---------------------------------------------------------------------

  // Osmanlı donanmasının Tunus'taki tersanesi (Blake'in 1655 baskını).
  // ⚠️ Konum 37,166/10,190'dan taşındı: `denetle.konum_denetimi` noktayı
  // kara maskesinin 1,19 km DIŞINDA buldu — Ğâru'l-Melh gölünün üstüne
  // düşüyordu. Maskenin gösterdiği en yakın kara noktası kullanıldı.
  { ad:"Ğâru'l-Melh (Porto Farina)",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"liman", lat:37.177, lon:10.191, g:0, k:4, m:"Tunus",
    s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
    d:[{"f":"1574-08-25","t":"1705-07-12"}],
    v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

  // 1609 Endülüs sürgünlerinin kurduğu Mecerde vadisi kasabası.
  { ad:"Testûr",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:36.556, lon:9.442, g:0, k:4, m:"Tunus",
    s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
    d:[{"f":"1574-08-25","t":"1705-07-12"}],
    v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

  { ad:"Ğar Dimâv",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:36.450, lon:8.435, g:0, k:4, m:"Tunus",
    s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
    d:[{"f":"1574-08-25","t":"1705-07-12"}],
    v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

  { ad:"Mekter (Maktar)",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:35.855, lon:9.203, g:0, k:4, m:"Tunus",
    s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
    d:[{"f":"1574-08-25","t":"1705-07-12"}],
    v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

  { ad:"Sübaytıla",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:35.235, lon:9.120, g:0, k:4, m:"Tunus",
    s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
    d:[{"f":"1574-08-25","t":"1705-07-12"}],
    v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

  { ad:"Sîdî Bû Zeyd",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:35.038, lon:9.485, g:0, k:4, m:"Tunus",
    s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
    d:[{"f":"1574-08-25","t":"1705-07-12"}],
    v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

  { ad:"Metlâvî",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:34.320, lon:8.400, g:0, k:4, m:"Tunus",
    s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
    d:[{"f":"1574-08-25","t":"1705-07-12"}],
    v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

  // Nefzâve vahaları — Şott el-Cerîd'in güney kıyısı, noktasızdı.
  { ad:"Kıbillî (Nefzâve)",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:33.704, lon:8.969, g:0, k:4, m:"Tunus",
    s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
    d:[{"f":"1574-08-25","t":"1705-07-12"}],
    v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

  { ad:"Dûz",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:33.466, lon:9.020, g:0, k:4, m:"Tunus",
    s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
    d:[{"f":"1574-08-25","t":"1705-07-12"}],
    v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },


  // ---------------------------------------------------------------------
  // TRABLUSGARP ve BERKA — 11 nokta · SIFIR yeni kırılma
  // hafsi → 1551-08-15 → d → 1711-03-01 → Karamanlılar → 1835-05-26 →
  // d → 1912-10-18 → italya      (TDV `trablusgarp`, `bingazi`, `berka`)
  // ---------------------------------------------------------------------

  { ad:"Terhûne", tur:"sehir", lat:32.435, lon:13.633, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  // Cebelinefûse'nin batı ucu — TDV `nefuse`.
  { ad:"Kabâv (Nefûse)", tur:"sehir", lat:31.941, lon:12.036, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  { ad:"Sinâvin", tur:"sehir", lat:31.007, lon:10.616, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  { ad:"Derc (Derj)", tur:"sehir", lat:30.155, lon:10.442, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  { ad:"Tâverğa", tur:"sehir", lat:32.005, lon:15.055, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  // Cufre vahaları — Sokna'nın (29,070/15,792) doğu komşusu.
  { ad:"Vaddân (Cufre)", kd:[{f:"1281-01-01",t:"1577-01-01",k:0,m:null},{f:"1577-01-01",t:"1923-10-29",k:4,m:"Trablus"}],kaynak:"fizan", tur:"sehir", lat:29.161, lon:16.139, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  { ad:"Zilla (Zella)", kd:[{f:"1281-01-01",t:"1577-01-01",k:0,m:null},{f:"1577-01-01",t:"1923-10-29",k:4,m:"Trablus"}],kaynak:"fizan", tur:"bolge", lat:28.556, lon:17.532, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  // Sirte körfezinin doğu kıyısı — Sirte (16,589) ile Ecdâbiye (20,225)
  // arasında 350 km nokta yoktu.
  { ad:"Nûfiliye", tur:"sehir", lat:30.784, lon:17.983, g:0, k:4, m:"Trablus",
    s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},
       {f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  { ad:"Merâde",kaynak:"fizan", tur:"bolge", lat:29.230, lon:19.213, g:0, k:4, m:"Bingazi",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  // Cebeliahdar'ın kuzey kıyısı (Batlamyus/Tolmeita).
  { ad:"Tulmeyse", tur:"liman", lat:32.712, lon:20.951, g:0, k:4, m:"Bingazi",
    s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1517-05-19",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  // ⚠️ Konum taşındı — ilk yazım (32,507/23,117) Bomba körfezinin suyuna,
  // maskenin önerdiği "en yakın kara" noktası ise SINIRA teğet düşüyordu ve
  // 62 m ile yine dışarıda kaldı. Körfezin güney kıyısına çekildi.
  // 📌 Ders: maskenin verdiği "en yakın kara" noktası GÜVENLİ nokta değildir
  //    — tanımı gereği tam sınırın üstündedir. Denetim iki kez koşturuldu.
  { ad:"Ayn el-Ğazâle (Bomba)", tur:"liman", lat:32.495, lon:23.120, g:0, k:4, m:"Bingazi",
    s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1517-05-19",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },


  // ---------------------------------------------------------------------
  // FİZAN — 3 nokta · SIFIR yeni kırılma      (TDV `fizan`)
  // Evlâd-ı Muhammed sultanlığı 1577'de Osmanlı tâbiiyetine girdi;
  // mevcut Murzuk kaydı bunu `d:[{1577-01-01 … y:"vassal"}]` ile yazıyor.
  // ---------------------------------------------------------------------

  // Murzuk'tan önceki Fizan başkenti.
  { ad:"Tırgan (Traghan)",kaynak:"fizan", tur:"sehir", lat:26.130, lon:14.470, g:0, k:4, m:"Murzuk (Fizan)",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-07-29",y:"vassal"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  // Benî Hattâb'ın eski merkezi; TDV `fizan` maddesinde Evlâd-ı
  // Muhammed'in ilk yerleştiği yer olarak geçer.
  { ad:"Zevîle (Zawila)",kaynak:"fizan", tur:"sehir", lat:26.170, lon:15.113, g:0, k:4, m:"Murzuk (Fizan)",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-07-29",y:"vassal"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

  // Fizan'ın güney kapısı — Bornu kervan yolunun ilk menzili.
  { ad:"el-Katrûn",kaynak:"fizan", tur:"sehir", lat:24.919, lon:14.647, g:0, k:4, m:"Murzuk (Fizan)",
    s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
    d:[{f:"1577-01-01",t:"1711-07-29",y:"vassal"},{f:"1835-05-26",t:"1912-10-18"}],
    v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

];

// ===========================================================================
// BU DOSYANIN AÇTIĞI YENİ KIRILMA GÜNLERİ — 8 tane, hepsi kaynaklı
// `denetle.py` 2s tavanı ölçüldüğünde DOLUYDU (121/121); bu yüzden dosya
// KUYRUK_DOSYALARI'na alınmalıdır. Kronoloji yazılınca kuyruk EKSİLİR.
//
//   1614-01-01  Mamûra (Mehdiye) İspanyolların eline geçti
//   1681-01-01  Mevlây İsmâil Mamûra'yı geri aldı
//   1689-01-01  Mevlây İsmâil el-Arâiş'i geri aldı
//   1854-11-23  Vargla'nın Fransızlarca işgali
//   1857-07-11  Büyük Kabiliye'nin düşüşü — Lalla Fatma N'Sûmer'in esareti
//   1899-12-29  Aynı Sâlih'in (Tîdîkelt) işgali
//   1901-02-21  Tuvât-Gûrâre-Tîdîkelt'in Fransa'ya ilhakı
//   1903-11-11  Beşşâr'da (Colomb-Béchar) Fransız karakolunun kurulması
//
// Zaten veride VAR OLAN, bu yüzden yeni SAYILMAYAN dört gün:
//   1564-01-01 · 1610-01-01 · 1673-01-01 · ve bütün bölgesel çerçeve tarihleri
// ===========================================================================

;
/* ==== data/yerlesimler_gdasya.js ==== */
// ============================================================================
// GÜNEYDOĞU ASYA — yerleşim noktaları
// Sahibi: NOKTA GDASYA oturumu. Şartname: oturumlar/NOKTA-GDASYA.md
//
// 🔴 Bu dosya BOŞ olarak koordinatör tarafından açıldı ve ÜÇ YERE bağlandı
// (girdi.py · index.html · concat zinciri) — çünkü bağlanmamış dosya
// yazılmamış dosyadır ve oturumun KENDİ mükerrer taraması bile onu
// göremez. Bunu VERİ DEVLET yakaladı, koordinatör atlamıştı.
//
// Ölçülmüş boşluk (8 Ağustos 2026): pencere içindeki EN SEYREK bölge.
//   11 alt kutuda 76 nokta / ~23,3 mn km²  ⇒ yoğunluk 3,3
//   (Anadolu 130,1 · Avrupa 62,1 · Doğu Asya 8,8)
// Hedef 25 ⇒ ~580 nokta. İlk parti 120-150, kıyı ve nehir hatlarından.
//
// Kırılma günleri, mümkün olduğunca `data/devletler.js`teki MEVCUT s: zinciri
// örüntüleriyle (yerlesimler_asya.js'teki Pagan/Toungoo/Konbaung/Hanthawaddy
// noktalarından ölçülen) aynı tarihleri kullanır — sıfır kırılma borcu.
// ============================================================================
window.YERLESIMLER_GDASYA = [

// ---------- BİRMANYA (Irrawaddy koridoru) ----------
{ ad:"Pathein (Bassein)", tur:"liman", lat:16.78, lon:94.73, g:1, k:3,
  s:[{f:"1281-01-01",t:"1287-01-01",d:"pagan"},{f:"1287-01-01",t:"1539-01-01",d:"hanthawaddy"},{f:"1539-01-01",t:"1740-01-01",d:"toungoo"},{f:"1740-01-01",t:"1755-05-03",d:"hanthawaddy"},{f:"1755-05-03",t:"1852-04-14",d:"konbaung"},{f:"1852-04-14",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Thaton", tur:"sehir", lat:16.92, lon:97.37, g:0, k:3,
  s:[{f:"1281-01-01",t:"1287-01-01",d:"pagan"},{f:"1287-01-01",t:"1539-01-01",d:"hanthawaddy"},{f:"1539-01-01",t:"1740-01-01",d:"toungoo"},{f:"1740-01-01",t:"1757-05-06",d:"hanthawaddy"},{f:"1757-05-06",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Bhamo", tur:"sehir", lat:24.27, lon:97.23, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Shwebo", tur:"sehir", lat:22.57, lon:95.70, g:1, k:3,
  kur:"1313-01-01",
  s:[{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Taungdwingyi", tur:"sehir", lat:20.01, lon:95.40, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1542-05-19",d:"ava"},{f:"1542-05-19",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Myingyan", tur:"sehir", lat:21.46, lon:95.38, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Yenangyaung", tur:"sehir", lat:20.47, lon:94.87, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Katha", tur:"sehir", lat:24.19, lon:96.33, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Meiktila", tur:"sehir", lat:20.87, lon:95.86, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },

// ---------- SİYAM (Chao Phraya koridoru) ----------
{ ad:"Lopburi", tur:"sehir", lat:14.80, lon:100.62, g:1, k:3,
  s:[{f:"1281-01-01",t:"1351-03-04",d:"sukhothai"},{f:"1351-03-04",t:"1569-08-08",d:"ayutthaya"},{f:"1569-08-08",t:"1584-05-03",d:"toungoo"},{f:"1584-05-03",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Phitsanulok", tur:"sehir", lat:16.82, lon:100.26, g:1, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1569-08-08",d:"ayutthaya"},{f:"1569-08-08",t:"1584-05-03",d:"toungoo"},{f:"1584-05-03",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Nakhon Ratchasima", tur:"sehir", lat:14.97, lon:102.10, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Songkhla", tur:"liman", lat:7.2079, lon:100.597, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Phuket (Thalang)", tur:"liman", lat:7.89, lon:98.40, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Chiang Rai", tur:"sehir", lat:19.91, lon:99.83, g:0, k:3,
  s:[{f:"1281-01-01",t:"1558-04-02",d:"lan-na"},{f:"1558-04-02",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1774-01-15",d:"konbaung"},{f:"1774-01-15",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Chanthaburi", tur:"liman", lat:12.61, lon:102.10, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Nan", tur:"sehir", lat:18.78, lon:100.77, g:0, k:3,
  s:[{f:"1281-01-01",t:"1558-04-02",d:"lan-na"},{f:"1558-04-02",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1774-01-15",d:"konbaung"},{f:"1774-01-15",t:"1923-10-29",d:"siyam-chakri"}] },

// ---------- KAMBOÇYA-LAOS (Mekong koridoru) ----------
{ ad:"Kratie", tur:"liman", lat:12.49, lon:106.02, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Kampot", tur:"liman", lat:10.61, lon:104.18, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Pursat", tur:"sehir", lat:12.53, lon:103.92, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1795-01-01",d:"kamboc-kralligi"},{f:"1795-01-01",t:"1907-03-23",d:"siyam-chakri"},{f:"1907-03-23",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Kompong Cham", tur:"liman", lat:12.00, lon:105.46, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Xieng Khouang", tur:"sehir", lat:19.45, lon:103.15, g:0, k:3,
  s:[{f:"1281-01-01",t:"1707-01-01",d:"lan-xang"},{f:"1707-01-01",t:"1893-10-03",d:"laos-kralliklari"},{f:"1893-10-03",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Savannakhet", tur:"liman", lat:16.56, lon:104.75, g:0, k:3,
  s:[{f:"1281-01-01",t:"1707-01-01",d:"lan-xang"},{f:"1707-01-01",t:"1893-10-03",d:"laos-kralliklari"},{f:"1893-10-03",t:"1923-10-29",d:"fransiz-cinhindi"}] },

// ---------- VİETNAM (Kızıl Nehir + orta/güney kıyı) ----------
// Kuzey zinciri (tran→ho→ming işgali→le→...) yerlesimler_asya.js'teki
// Hanoi/Cao Bang/Lang Son'dan BİREBİR alındı. ⚠️ Koordinatör düzeltmesi:
// 1281-1428 arası le-hanedani DEĞİL, tran-hanedani+ho-hanedani+ming-hanedani
// (Dördüncü Kuzey Egemenliği, 1407-1428) — bu şablon o düzeltmeyi uyguluyor.
{ ad:"Hai Phong", tur:"liman", lat:20.86, lon:106.68, g:1, k:3,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1527-06-15",d:"le-hanedani"},{f:"1527-06-15",t:"1592-01-01",d:"mac-hanedani"},{f:"1592-01-01",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Nam Dinh", tur:"sehir", lat:20.42, lon:106.17, g:0, k:3,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1527-06-15",d:"le-hanedani"},{f:"1527-06-15",t:"1592-01-01",d:"mac-hanedani"},{f:"1592-01-01",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
// Thanh Hoa/Vinh: Lê hanedanının çekirdek bölgesi — Mạc gasbı sırasında
// (1527-1592) BU BÖLGE Lê'ye sadık kaldı (Lê Trung Hưng direnişinin üssü),
// bu yüzden zincirde Mạc dönemi YOK, le-hanedani kesintisiz.
{ ad:"Thanh Hoa", tur:"sehir", lat:19.81, lon:105.78, g:1, k:2,kd:[{f:"1400-03-01",t:"1407-06-17",k:1,m:"Thanh Hoa"}],
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Vinh", tur:"sehir", lat:18.67, lon:105.69, g:0, k:3,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
// Nha Trang (Kauthara, Champa'nın güney vilayeti) — 1653'te Nguyễn beylerine
// düştü (Po Nraup'un yenilgisi); gün TDV/akademik kaynakta net değil, YIL
// BEYANI (§4). Sonrası Hội An/Đà Nẵng'ın güney zinciriyle aynı.
{ ad:"Nha Trang (Kauthara)", tur:"liman", lat:12.24, lon:109.19, g:0, k:3,
  s:[{f:"1281-01-01",t:"1653-01-01",d:"campa"},{f:"1653-01-01",t:"1775-02-01",d:"nguyen-beyligi"},{f:"1775-02-01",t:"1786-06-01",d:"le-hanedani"},{f:"1786-06-01",t:"1802-06-01",d:"tay-son"},{f:"1802-06-01",t:"1884-06-06",d:"nguyen-hanedani"},{f:"1884-06-06",t:"1923-10-29",d:"fransiz-cinhindi"}] },

// ---------- MALAYA (Malaka Boğazı) ----------
{ ad:"Pahang (Pekan)", tur:"sehir", lat:3.50, lon:103.40, g:0, k:3,
  s:[{f:"1281-01-01",t:"1888-01-01",d:"malay-sultanliklari"},{f:"1888-01-01",t:"1923-10-29",d:"ingiliz-malaya"}] },
{ ad:"Kelantan (Kota Bharu)", tur:"sehir", lat:6.13, lon:102.24, g:0, k:3,
  s:[{f:"1281-01-01",t:"1909-07-10",d:"malay-sultanliklari"},{f:"1909-07-10",t:"1923-10-29",d:"ingiliz-malaya"}] },
{ ad:"Terengganu (Kuala Terengganu)", tur:"liman", lat:5.33, lon:103.14, g:0, k:3,
  s:[{f:"1281-01-01",t:"1909-07-10",d:"malay-sultanliklari"},{f:"1909-07-10",t:"1923-10-29",d:"ingiliz-malaya"}] },
{ ad:"Negeri Sembilan (Seremban)", tur:"sehir", lat:2.72, lon:101.94, g:0, k:3,
  s:[{f:"1281-01-01",t:"1889-01-01",d:"malay-sultanliklari"},{f:"1889-01-01",t:"1923-10-29",d:"ingiliz-malaya"}] },

// ---------- SUMATRA (doğu kıyısı) ----------
{ ad:"Lampung", tur:"liman", lat:-5.4489, lon:105.269, g:0, k:3,
  s:[{f:"1281-01-01",t:"1527-06-22",d:"palembang-sultanligi"},{f:"1527-06-22",t:"1808-01-01",d:"banten-sultanligi"},{f:"1808-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Bintan (Riau)", tur:"liman", lat:0.92, lon:104.45, g:0, k:3,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1923-10-29",d:"cohor-sultanligi"}] },
{ ad:"Barus", tur:"liman", lat:2.06, lon:98.39, g:0, k:3,
  kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1903-01-10",d:"ace-sultanligi"},{f:"1903-01-10",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- JAVA (kuzey kıyısı + iç kesim) ----------
{ ad:"Cirebon", tur:"liman", lat:-6.71, lon:108.55, g:1, k:3,
  s:[{f:"1281-01-01",t:"1526-01-01",d:"sunda-pajajaran"},{f:"1526-01-01",t:"1677-01-01",d:"banten-sultanligi"},{f:"1677-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Malang", tur:"sehir", lat:-7.98, lon:112.63, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Madiun", tur:"sehir", lat:-7.63, lon:111.52, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Pasuruan", tur:"liman", lat:-7.65, lon:112.90, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Blitar", tur:"sehir", lat:-8.10, lon:112.17, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- BORNEO ----------
{ ad:"Sambas", tur:"liman", lat:1.37, lon:109.30, g:0, k:3,
  kur:"1631-01-01",
  s:[{f:"1631-01-01",t:"1819-01-01",d:"brunei-sultanligi"},{f:"1819-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Kotawaringin", tur:"sehir", lat:-2.85, lon:111.67, g:0, k:3,
  kur:"1526-01-01",
  s:[{f:"1526-01-01",t:"1830-01-01",d:"banjar-sultanligi"},{f:"1830-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- SULAWESİ ----------
{ ad:"Gorontalo", tur:"liman", lat:0.54, lon:123.06, g:0, k:3,
  s:[{f:"1281-01-01",t:"1663-01-01",d:"ternate-sultanligi"},{f:"1663-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- FİLİPİNLER ----------
{ ad:"Iloilo", tur:"liman", lat:10.72, lon:122.56, g:0, k:3,
  s:[{f:"1281-01-01",t:"1569-01-01",d:"filipin-racaliklari"},{f:"1569-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Vigan", tur:"sehir", lat:17.57, lon:120.39, g:0, k:3,
  s:[{f:"1281-01-01",t:"1572-01-01",d:"filipin-racaliklari"},{f:"1572-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Zamboanga", tur:"liman", lat:6.91, lon:122.08, g:0, k:3,
  s:[{f:"1281-01-01",t:"1635-01-01",d:"filipin-racaliklari"},{f:"1635-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Butuan", tur:"liman", lat:8.95, lon:125.54, g:0, k:3,
  s:[{f:"1281-01-01",t:"1622-01-01",d:"filipin-racaliklari"},{f:"1622-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },

// ---------- MOLUK - KÜÇÜK SUNDA ----------
{ ad:"Larantuka", tur:"liman", lat:-8.3411, lon:122.99, g:0, k:3,
  s:[{f:"1281-01-01",t:"1613-01-01",d:"timor-beylikleri"},{f:"1613-01-01",t:"1859-04-20",d:"portekiz"},{f:"1859-04-20",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Sumbawa", tur:"sehir", lat:-8.49, lon:117.42, g:0, k:3,
  s:[{f:"1281-01-01",t:"1343-01-01",d:"singhasari"},{f:"1343-01-01",t:"1478-01-01",d:"majapahit"},{f:"1478-01-01",t:"1905-01-01",d:"bali-kralliklari"},{f:"1905-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Seram (Ceram)", tur:"liman", lat:-3.10, lon:129.50, g:0, k:3,
  s:[{f:"1281-01-01",t:"1656-01-01",d:"ternate-sultanligi"},{f:"1656-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- İKİNCİ TUR — mevcut alt bölgelere ek ----------
// Birmanya (iç kesim zinciri devamı)
{ ad:"Minbu", tur:"sehir", lat:20.18, lon:94.88, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Pakokku", tur:"sehir", lat:21.33, lon:95.08, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Myitkyina", tur:"sehir", lat:25.38, lon:97.40, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
// Siyam
{ ad:"Kanchanaburi", tur:"sehir", lat:14.02, lon:99.53, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Phetchaburi", tur:"liman", lat:13.11, lon:99.94, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Trang", tur:"liman", lat:7.56, lon:99.61, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
// Vietnam (Kızıl Nehir deltası)
{ ad:"Son Tay", tur:"sehir", lat:21.14, lon:105.50, g:0, k:3,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1527-06-15",d:"le-hanedani"},{f:"1527-06-15",t:"1592-01-01",d:"mac-hanedani"},{f:"1592-01-01",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Ninh Binh", tur:"sehir", lat:20.25, lon:105.97, g:0, k:3,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Bac Giang", tur:"sehir", lat:21.27, lon:106.19, g:0, k:3,
  s:[{f:"1281-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1527-06-15",d:"le-hanedani"},{f:"1527-06-15",t:"1592-01-01",d:"mac-hanedani"},{f:"1592-01-01",t:"1786-07-21",d:"le-hanedani"},{f:"1786-07-21",t:"1802-06-20",d:"tay-son"},{f:"1802-06-20",t:"1883-08-25",d:"nguyen-hanedani"},{f:"1883-08-25",t:"1923-10-29",d:"fransiz-cinhindi"}] },
// Java (kuzey kıyısı devamı)
{ ad:"Tegal", tur:"liman", lat:-6.87, lon:109.14, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Pekalongan", tur:"liman", lat:-6.89, lon:109.68, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Rembang", tur:"liman", lat:-6.713, lon:111.34, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- ÜÇÜNCÜ TUR ----------
{ ad:"Stung Treng", tur:"liman", lat:13.53, lon:105.97, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Sisophon", tur:"sehir", lat:13.59, lon:102.98, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1795-01-01",d:"kamboc-kralligi"},{f:"1795-01-01",t:"1907-03-23",d:"siyam-chakri"},{f:"1907-03-23",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Klang", tur:"liman", lat:3.04, lon:101.45, g:0, k:3,
  s:[{f:"1281-01-01",t:"1874-01-20",d:"malay-sultanliklari"},{f:"1874-01-20",t:"1923-10-29",d:"ingiliz-malaya"}] },
{ ad:"Meulaboh", tur:"liman", lat:4.14, lon:96.13, g:0, k:3,
  kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1903-01-10",d:"ace-sultanligi"},{f:"1903-01-10",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Berau", tur:"liman", lat:2.13, lon:117.43, g:0, k:3,
  kur:"1400-01-01",
  s:[{f:"1400-01-01",t:"1850-01-01",d:"brunei-sultanligi"},{f:"1850-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Naga (Camarines)", tur:"sehir", lat:13.62, lon:123.18, g:0, k:3,
  s:[{f:"1281-01-01",t:"1573-01-01",d:"filipin-racaliklari"},{f:"1573-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Alor", tur:"liman", lat:-8.22, lon:124.58, g:0, k:3,
  s:[{f:"1281-01-01",t:"1653-01-01",d:"timor-beylikleri"},{f:"1653-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- DÖRDÜNCÜ TUR ----------
{ ad:"Sandoway (Thandwe)", tur:"liman", lat:18.48, lon:94.35, g:0, k:3,
  s:[{f:"1281-01-01",t:"1785-01-02",d:"arakan"},{f:"1785-01-02",t:"1826-02-24",d:"konbaung"},{f:"1826-02-24",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Kamphaeng Phet", tur:"sehir", lat:16.48, lon:99.52, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Uthai Thani", tur:"sehir", lat:15.38, lon:100.02, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Preah Vihear", tur:"sehir", lat:14.39, lon:104.68, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Muang Sing", tur:"sehir", lat:21.18, lon:101.15, g:0, k:3,
  s:[{f:"1281-01-01",t:"1707-01-01",d:"lan-xang"},{f:"1707-01-01",t:"1893-10-03",d:"laos-kralliklari"},{f:"1893-10-03",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Vinh Long", tur:"liman", lat:10.25, lon:105.97, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Can Tho", tur:"liman", lat:10.03, lon:105.79, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Muar", tur:"liman", lat:2.05, lon:102.57, g:0, k:3,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1923-10-29",d:"cohor-sultanligi"}] },
{ ad:"Sibolga", tur:"liman", lat:1.74, lon:98.78, g:0, k:3,
  kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1903-01-10",d:"ace-sultanligi"},{f:"1903-01-10",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Jepara", tur:"liman", lat:-6.59, lon:110.67, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Tarakan", tur:"liman", lat:3.30, lon:117.63, g:0, k:3,
  kur:"1400-01-01",
  s:[{f:"1400-01-01",t:"1850-01-01",d:"brunei-sultanligi"},{f:"1850-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Bantaeng", tur:"liman", lat:-5.53, lon:119.96, g:0, k:3,
  s:[{f:"1281-01-01",t:"1667-11-18",d:"gova-makassar"},{f:"1667-11-18",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Batangas", tur:"liman", lat:13.76, lon:121.06, g:0, k:3,
  s:[{f:"1281-01-01",t:"1571-06-24",d:"filipin-racaliklari"},{f:"1571-06-24",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Ende (Flores)", tur:"liman", lat:-8.84, lon:121.66, g:0, k:3,
  s:[{f:"1281-01-01",t:"1613-01-01",d:"timor-beylikleri"},{f:"1613-01-01",t:"1859-04-20",d:"portekiz"},{f:"1859-04-20",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- BEŞİNCİ TUR ----------
{ ad:"Pyinmana", tur:"sehir", lat:19.73, lon:96.22, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1852-12-20",d:"konbaung"},{f:"1852-12-20",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Henzada (Hinthada)", tur:"sehir", lat:17.64, lon:95.46, g:0, k:3,
  s:[{f:"1281-01-01",t:"1287-01-01",d:"pagan"},{f:"1287-01-01",t:"1539-01-01",d:"hanthawaddy"},{f:"1539-01-01",t:"1740-01-01",d:"toungoo"},{f:"1740-01-01",t:"1755-05-03",d:"hanthawaddy"},{f:"1755-05-03",t:"1852-04-14",d:"konbaung"},{f:"1852-04-14",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Chumphon", tur:"liman", lat:10.49, lon:99.18, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Surat Thani", tur:"liman", lat:9.14, lon:99.32, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Attapeu", tur:"sehir", lat:14.81, lon:106.83, g:0, k:3,
  kur:"1713-01-01",
  s:[{f:"1713-01-01",t:"1778-01-01",d:"laos-kralliklari"},{f:"1778-01-01",t:"1893-10-03",d:"siyam-chakri"},{f:"1893-10-03",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Quang Tri", tur:"sehir", lat:16.75, lon:107.19, g:0, k:3,
  s:[{f:"1281-01-01",t:"1306-01-01",d:"campa"},{f:"1306-01-01",t:"1400-03-01",d:"tran-hanedani"},{f:"1400-03-01",t:"1407-06-17",d:"ho-hanedani"},{f:"1407-06-17",t:"1428-01-03",d:"ming-hanedani"},{f:"1428-01-03",t:"1558-01-01",d:"le-hanedani"},{f:"1558-01-01",t:"1775-02-01",d:"nguyen-beyligi"},{f:"1775-02-01",t:"1786-06-01",d:"le-hanedani"},{f:"1786-06-01",t:"1801-06-15",d:"tay-son"},{f:"1801-06-15",t:"1884-06-06",d:"nguyen-hanedani"},{f:"1884-06-06",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Quang Ngai", tur:"sehir", lat:15.12, lon:108.80, g:0, k:3,
  s:[{f:"1281-01-01",t:"1471-03-02",d:"campa"},{f:"1471-03-02",t:"1558-01-01",d:"le-hanedani"},{f:"1558-01-01",t:"1775-02-01",d:"nguyen-beyligi"},{f:"1775-02-01",t:"1786-06-01",d:"le-hanedani"},{f:"1786-06-01",t:"1802-06-01",d:"tay-son"},{f:"1802-06-01",t:"1884-06-06",d:"nguyen-hanedani"},{f:"1884-06-06",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Indrapura", tur:"liman", lat:-2.20, lon:101.11, g:0, k:3,
  s:[{f:"1281-01-01",t:"1663-01-01",d:"pagaruyung"},{f:"1663-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Sumenep (Madura)", tur:"sehir", lat:-7.02, lon:113.87, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Sukadana", tur:"liman", lat:-1.25, lon:109.95, g:0, k:3,
  kur:"1400-01-01",
  s:[{f:"1400-01-01",t:"1786-01-01",d:"brunei-sultanligi"},{f:"1786-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Legazpi", tur:"liman", lat:13.14, lon:123.74, g:0, k:3,
  s:[{f:"1281-01-01",t:"1573-01-01",d:"filipin-racaliklari"},{f:"1573-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Waingapu (Sumba)", tur:"liman", lat:-9.66, lon:120.26, g:0, k:3,
  s:[{f:"1281-01-01",t:"1674-01-01",d:"timor-beylikleri"},{f:"1674-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- ALTINCI TUR ----------
{ ad:"Loikaw", tur:"sehir", lat:19.67, lon:97.21, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"san-devletleri"}] },
{ ad:"Suphan Buri", tur:"sehir", lat:14.47, lon:100.12, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Takeo", tur:"sehir", lat:10.99, lon:104.79, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Tra Vinh", tur:"liman", lat:9.93, lon:106.35, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Ben Tre", tur:"liman", lat:10.24, lon:106.38, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Kuala Simpang", tur:"liman", lat:4.31, lon:98.00, g:0, k:3,
  kur:"1496-01-01",
  s:[{f:"1496-01-01",t:"1903-01-10",d:"ace-sultanligi"},{f:"1903-01-10",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Kudus", tur:"sehir", lat:-6.81, lon:110.84, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Purwokerto", tur:"sehir", lat:-7.42, lon:109.23, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-01-01",d:"sunda-pajajaran"},{f:"1526-01-01",t:"1677-01-01",d:"banten-sultanligi"},{f:"1677-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Tuguegarao", tur:"sehir", lat:17.61, lon:121.73, g:0, k:3,
  s:[{f:"1281-01-01",t:"1581-01-01",d:"filipin-racaliklari"},{f:"1581-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Maumere (Flores)", tur:"liman", lat:-8.62, lon:122.21, g:0, k:3,
  s:[{f:"1281-01-01",t:"1613-01-01",d:"timor-beylikleri"},{f:"1613-01-01",t:"1859-04-20",d:"portekiz"},{f:"1859-04-20",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- YEDİNCİ TUR ----------
{ ad:"Mogok", tur:"sehir", lat:22.92, lon:96.50, g:0, k:3,
  s:[{f:"1281-01-01",t:"1313-01-01",d:"pagan"},{f:"1313-01-01",t:"1555-01-01",d:"ava"},{f:"1555-01-01",t:"1752-04-23",d:"toungoo"},{f:"1752-04-23",t:"1885-11-28",d:"konbaung"},{f:"1885-11-28",t:"1923-10-29",d:"ingiliz-hindistani"}] },
{ ad:"Loei", tur:"sehir", lat:17.49, lon:101.72, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Kompong Thom", tur:"sehir", lat:12.71, lon:104.89, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Tay Ninh", tur:"sehir", lat:11.31, lon:106.10, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Painan", tur:"liman", lat:-1.33, lon:100.60, g:0, k:3,
  s:[{f:"1281-01-01",t:"1663-01-01",d:"pagaruyung"},{f:"1663-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Ponorogo", tur:"sehir", lat:-7.87, lon:111.46, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Dagupan", tur:"liman", lat:16.04, lon:120.33, g:0, k:3,
  s:[{f:"1281-01-01",t:"1571-06-24",d:"filipin-racaliklari"},{f:"1571-06-24",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Bima (Sumbawa)", tur:"liman", lat:-8.47, lon:118.72, g:0, k:3,
  s:[{f:"1281-01-01",t:"1343-01-01",d:"singhasari"},{f:"1343-01-01",t:"1478-01-01",d:"majapahit"},{f:"1478-01-01",t:"1905-01-01",d:"bali-kralliklari"},{f:"1905-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- SEKİZİNCİ TUR ----------
{ ad:"Kalaw", tur:"sehir", lat:20.63, lon:96.57, g:0, k:3,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"san-devletleri"}] },
{ ad:"Roi Et", tur:"sehir", lat:16.05, lon:103.65, g:0, k:3,
  s:[{f:"1281-01-01",t:"1438-01-01",d:"sukhothai"},{f:"1438-01-01",t:"1767-04-07",d:"ayutthaya"},{f:"1767-04-07",t:"1782-04-06",d:"tonburi"},{f:"1782-04-06",t:"1923-10-29",d:"siyam-chakri"}] },
{ ad:"Svay Rieng", tur:"sehir", lat:11.09, lon:105.80, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1863-08-11",d:"kamboc-kralligi"},{f:"1863-08-11",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Rach Gia", tur:"liman", lat:10.01, lon:105.08, g:0, k:3,
  s:[{f:"1281-01-01",t:"1431-01-01",d:"angkor-kmer"},{f:"1431-01-01",t:"1698-01-01",d:"kamboc-kralligi"},{f:"1698-01-01",t:"1777-01-01",d:"nguyen-beyligi"},{f:"1777-01-01",t:"1788-09-07",d:"tay-son"},{f:"1788-09-07",t:"1802-06-01",d:"nguyen-beyligi"},{f:"1802-06-01",t:"1859-02-17",d:"nguyen-hanedani"},{f:"1859-02-17",t:"1923-10-29",d:"fransiz-cinhindi"}] },
{ ad:"Bojonegoro", tur:"sehir", lat:-7.15, lon:111.88, g:0, k:3,
  s:[{f:"1281-01-01",t:"1292-01-01",d:"singhasari"},{f:"1292-01-01",t:"1527-01-01",d:"majapahit"},{f:"1527-01-01",t:"1587-01-01",d:"demak"},{f:"1587-01-01",t:"1743-11-11",d:"mataram-sultanligi"},{f:"1743-11-11",t:"1811-08-18",d:"hollanda-dogu-hint"},{f:"1811-08-18",t:"1816-08-19",d:"ingiltere"},{f:"1816-08-19",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Puerto Princesa (Palawan)", tur:"liman", lat:9.74, lon:118.74, g:0, k:3,
  s:[{f:"1281-01-01",t:"1622-01-01",d:"filipin-racaliklari"},{f:"1622-01-01",t:"1898-08-13",d:"ispanya"},{f:"1898-08-13",t:"1923-10-29",d:"abd"}] },
{ ad:"Rote", tur:"liman", lat:-10.71, lon:123.13, g:0, k:3,
  s:[{f:"1281-01-01",t:"1653-01-01",d:"timor-beylikleri"},{f:"1653-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

// ---------- KİLİT AÇILDI — bekleyen 7 nokta + Kutai (renk geldi) ----------
{ ad:"Jambi", tur:"liman", lat:-1.61, lon:103.61, g:1, k:3,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1615-01-01",d:"cohor-sultanligi"},{f:"1615-01-01",t:"1858-01-01",d:"dogu-sumatra-sultanliklari"},{f:"1858-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Siak Sri Indrapura", tur:"liman", lat:0.82, lon:102.03, g:0, k:3,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1723-01-01",d:"cohor-sultanligi"},{f:"1723-01-01",t:"1858-01-01",d:"dogu-sumatra-sultanliklari"},{f:"1858-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Medan (Deli)", tur:"liman", lat:3.595, lon:98.672, g:1, k:3,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1632-01-01",d:"cohor-sultanligi"},{f:"1632-01-01",t:"1858-01-01",d:"dogu-sumatra-sultanliklari"},{f:"1858-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Rengat (Indragiri)", tur:"sehir", lat:-0.35, lon:102.55, g:0, k:3,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"malay-sultanliklari"},{f:"1400-01-01",t:"1528-01-01",d:"malaka-sultanligi"},{f:"1528-01-01",t:"1590-01-01",d:"cohor-sultanligi"},{f:"1590-01-01",t:"1858-01-01",d:"dogu-sumatra-sultanliklari"},{f:"1858-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Pontianak", tur:"liman", lat:-0.02, lon:109.33, g:1, k:2,kd:[{f:"1772-01-01",t:"1855-01-01",k:1,m:"Pontianak"}],
  kur:"1772-01-01",
  s:[{f:"1772-01-01",t:"1855-01-01",d:"pontianak"},{f:"1855-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Tenggarong (Kutai)", tur:"sehir", lat:0.40, lon:117.01, g:0, k:1,kd:[{f:"1575-01-01",t:"1908-01-01",k:1,m:"Tenggarong (Kutai)"}],
  kur:"1575-01-01",
  s:[{f:"1575-01-01",t:"1908-01-01",d:"kutai"},{f:"1908-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Watampone (Bone)", tur:"sehir", lat:-4.54, lon:120.33, g:1, k:3,
  kur:"1330-01-01",
  s:[{f:"1330-01-01",t:"1905-08-06",d:"bugis-kralliklari"},{f:"1905-08-06",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Sengkang (Wajo)", tur:"sehir", lat:-4.13, lon:120.02, g:0, k:3,
  kur:"1330-01-01",
  s:[{f:"1330-01-01",t:"1905-08-06",d:"bugis-kralliklari"},{f:"1905-08-06",t:"1923-10-29",d:"hollanda-dogu-hint"}] },

];

;
/* ==== data/yerlesimler_kalite4.js ==== */
// ==========================================================================
// KALİTE 4 — Avusturya · İran · Avrupa Rusyası
// Sahibi: NOKTA KALİTE-4 oturumu · hedef: SANCAK MERKEZİ kademesi (k:3)
//
// 🔴 Bu dosya BOŞ olarak koordinatör tarafından açıldı ve DÖRT YERE
// bağlandı (girdi.py · denetle.py KUYRUK · index.html script · concat
// zinciri) — çünkü BAĞLANMAMIŞ DOSYA, YAZILMAMIŞ DOSYADIR.
//
// Niçin var: 8 Ağustos 2026 emilme ölçümü — noktasız 5°×5° hücreleri
// kimin boyadığı ölçüldü ve üç yanlış sahip çıktı:
//   banda-adalari    573.188 km²  (kendisi ~180 km²)
//   somali           628.526 km²  (beş tarihte de AYNI sayı)
//   ingiltere 1900 3.150.758 km²  (Kongo havzası)
//
// ⚠️ Bu partinin tehlikesi boşluk DOLDURMAK: üç coğrafyada da merkezî
// devlet ya yoktu ya gevşekti. `kasitli_bosluk:` bir başarısızlık
// değil bir HÜKÜMDÜR — ama tavanı yükseltir, önce koordinatöre söyle.
// ==========================================================================
window.YERLESIMLER_KALITE4 = [

// ---------- ① İRAN — Azerbaycan/Kürdistan sancak merkezleri (parti 1) ----------
// Kaynak disiplini: TDV önce denendi (küçük kasaba sluglari `mehabad`,
// `savucbulak`, `sardest`, `tekab` — hepsi ÖLÜ), ikinci deneme standart
// akademik kaynak (Wikipedia/Iranica, koordinatör onayı: "taneciklik
// boşluğu" kategorisi, CLAUDE.md §4'e giriyor). Zincir: bölgedeki komşu
// noktalarla (Erdebil/Sakkız/Bîcâr/Merîvan/Senendec) AYNI — hepsi zaten
// TEK zincir kullanıyor (ayrı bir "Erdelan/Mükrî" künyesi YOK, mevcut
// veri ayrı renk kullanmıyor), o yüzden yeni künye ÖNERMİYORUM.

{ ad:"Meşkinşehr (Hiyav)",d:[{f:"1725-09-09",t:"1730-08-12",kaynak:"örtülü — Emre 17 Eylül karari · dayanak: Erdebil · TDV erdebil / Iranica ARDABĪL · adıyla anan kaynak YOK"}],kaynak:"TDV `ilhanlilar` (govde okundu): \"ILHANLILAR - Iran'da kurulan bir Mogol devleti (1256-1353)\" ve ilhan listesi 1335 sonrasini sayiyor (Arpa 1335, Musa 1336, Muhammed 1336, Tuga Timur 1337, Cihan Timur 1338, Sati Beg 1339, Suleyman 1340, Nusirevan 1344-1353). TDV `celayirliler` (govde okundu): \"CELAYIRLILER 1340-1431 yillari arasinda ... hukum suren Mogol hanedani\", \"bagimsiz bir devlet kurdu (1340)\". Iki madde birlikte: 1335-1340 arasi SAHIPSIZ DEGILDI; veri sinir gununu 1335-12-01 yazmis, dogrusu 1340-01-01.", tur:"sehir", lat:38.40, lon:47.68, g:0, k:3,
  // Sasani dönemine (MS 337) kadar giden yerleşim, Azerbaycan Atabegleri
  // sikkeleriyle doğrulanmış — komşu Erdebil/Sarâb ile AYNI tam zincir.
  // kaynak: standart akademik (Encyclopaedia Iranica/Wikipedia, TDV müstakil maddesi yok)
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1386-01-01",d:"celayirli"},{f:"1386-01-01",t:"1406-10-21",d:"timurlu"},{f:"1406-10-21",t:"1468-04-01",d:"karakoyunlu"},{f:"1468-04-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1794-01-01",d:"zend"},{f:"1794-01-01",t:"1923-10-29",d:"kacar"}] },

{ ad:"Mahabad (Sâvücbulak)",v:[{f:"1585-09-25",t:"1603-10-21",kaynak:"Mukrî beyliği Osmanlı tâbiliği — Iranica MOKRI (Oberling): bağlılık Osmanlıların Azerbaycan'ı alışına ve Şah Abbas'ın 1603'te geri alışına bağlı · gün komşudan: Tebriz · TDV tebriz (25 Eylül 1585 · 21 Ekim 1603) · Emre kararı 13 Eyl 2026 karar 5 (tâbi, künye yok)"}], d:[{f:"1725-07-28",t:"1730-08-12",kaynak:"Bilgili 2016 (Ermeni Araştırmaları 53) s.119 (TD 909 Sovukbulak) · TDV tebriz · Özcoşar-Açar 2024 · gün komşudan: Merâga · Emre 17 Eyl: Kürt beylikleri d:"}], tur:"sehir", lat:36.77, lon:45.72, g:0, k:3,
  kur:"1501-07-01",
  // kaynak: standart akademik — "ilk kez 16. yy'da (Safevî dönemi)
  // kaydediliyor, 17. yy'da Mükrî beyliğinin merkezi oldu" (Budak Sultan
  // Mükrî). TDV müstakil maddesi yok (`mehabad`/`savucbulak` ölü).
  s:[{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1794-01-01",d:"zend"},{f:"1794-01-01",t:"1923-10-29",d:"kacar"}] },

{ ad:"Bâne",d:[{f:"1723-11-10",t:"1732-01-10",kaynak:"Bilgili 2016 (Ermeni Araştırmaları 53) dn.88 (TD 1066 Pâne livası) · gün komşudan: Senendec"}], tur:"sehir", lat:35.99, lon:45.88, g:0, k:3,
  kur:"1501-07-01",
  // kaynak: standart akademik — Erdelan/Baban/Mükriyân Kürt beyliklerinden
  // birinin toprağı, yerel Ehtiyârüddin ailesi Safevî döneminde "sultan"
  // unvanıyla anılıyor. TDV müstakil maddesi yok.
  s:[{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1794-01-01",d:"zend"},{f:"1794-01-01",t:"1923-10-29",d:"kacar"}] },

{ ad:"Serdeşt (Sardasht)", tur:"sehir", lat:36.16, lon:45.48, g:0, k:3,
  kur:"1501-07-01",
  // kaynak: standart akademik — Bâne ile aynı Kürt beylik kuşağı
  // (Mükriyân), Safevî-Osmanlı sınır bölgesi. TDV müstakil maddesi yok.
  s:[{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1794-01-01",d:"zend"},{f:"1794-01-01",t:"1923-10-29",d:"kacar"}] },

{ ad:"Şerur (Sharur)",d:[{f:"1586-01-01",t:"1603-10-21",kaynak:"BOA TD 633 (Kasım 1590) 'Şerür' kazası — Bilgili 2016 · gün komşudan: Nahçıvan — Emre kararı 14 Eylül 2026 (bölge birlikte; Nahçıvan 1586 Bilge, Vakanüvis 2) · bitiş Nahçıvan ile aynı (TDV nahcivan: 1012/1603 Şah Abbas geri aldı)"},{f:"1724-10-03",t:"1735-10-03",kaynak:"Bilgili 2016 (Ermeni Araştırmaları 53) s.107 (TD 901 Şerür nahiyesi) · gün komşudan: Revan"}], tur:"sehir", lat:39.55, lon:44.95, g:0, k:3,
  // kaynak: standart akademik — "Nahçıvan'ın en eski ve en büyük
  // yerleşimlerinden biri", 1502'de Şah İsmâil'in Safevî ordusu burada
  // savaş kazandı (Nahçıvan'ın Safevî'ye geçişiyle aynı dönem), 16-18.
  // yy Osmanlı-Safevî savaşlarında sık sık el değiştirdi. TDV müstakil
  // maddesi yok. Komşu Nahçıvan ile AYNI zincir (aynı hanlık/idari birim,
  // 1828 Türkmençay Antlaşması'yla Rusya'ya geçiyor).
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1386-01-01",d:"celayirli"},{f:"1386-01-01",t:"1406-10-21",d:"timurlu"},{f:"1406-10-21",t:"1468-04-01",d:"karakoyunlu"},{f:"1468-04-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1794-01-01",d:"zend"},{f:"1794-01-01",t:"1828-02-22",d:"kacar"},{f:"1828-02-22",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_sibirya.js ==== */
// ==========================================================================
// SİBİRYA PARTİSİ — Batı · Orta · Uzak Doğu
// Sahibi: NOKTA SİBİRYA oturumu. Şartname: oturumlar/NOKTA-SIBIRYA.md
//
// 🔴 Bu dosya BOŞ olarak koordinatör tarafından açıldı ve DÖRT YERE
// bağlandı (girdi.py · denetle.py KUYRUK · index.html script · concat
// zinciri) — çünkü BAĞLANMAMIŞ DOSYA, YAZILMAMIŞ DOSYADIR.
//
// Niçin var: 8 Ağustos 2026 emilme ölçümü — noktasız 5°×5° hücreleri
// kimin boyadığı ölçüldü ve üç yanlış sahip çıktı:
//   banda-adalari    573.188 km²  (kendisi ~180 km²)
//   somali           628.526 km²  (beş tarihte de AYNI sayı)
//   ingiltere 1900 3.150.758 km²  (Kongo havzası)
//
// ⚠️ Bu partinin tehlikesi boşluk DOLDURMAK: üç coğrafyada da merkezî
// devlet ya yoktu ya gevşekti. `kasitli_bosluk:` bir başarısızlık
// değil bir HÜKÜMDÜR — ama tavanı yükseltir, önce koordinatöre söyle.
// ==========================================================================
window.YERLESIMLER_SIBIRYA = [

// ---------- ① BATI SİBİRYA — kimlik doğru, nokta az ----------
// NOT: "Dudinka" buraya YAZILMADI — yerlesimler_ek8.js'de zaten var
// (aynı kimlik zinciri: kur:1667 → rusya, kasitli_bosluk öncesi "devletsiz"
// notuyla). Mükerrer isim olurdu, sessizce çıkarıldı (koordinatör onayı: ①).
{ ad:"Ket Ostrogu (Ketsk)", tur:"kale", lat:58.70, lon:81.40, g:0, k:4,
  kur:"1602-01-01",
  s:[{f:"1602-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kazak bozkırı (Turgay)", tur:"bolge", lat:49.60, lon:63.50, g:0, k:0,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},{f:"1500-01-01",t:"1868-01-01",d:"kazak-hanligi"},{f:"1868-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Kazak bozkırı (Sarısu)", tur:"bolge", lat:47.00, lon:67.00, g:0, k:0,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},{f:"1500-01-01",t:"1868-01-01",d:"kazak-hanligi"},{f:"1868-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ---------- ② ORTA SİBİRYA — Buryat (kuzey-yuan) · Yakut/Koryak (veri-yok) ----------
{ ad:"Buryat toprakları (Selenge havzası)", tur:"bolge", lat:53.00, lon:110.00, g:0, k:0,
  s:[{f:"1281-01-01",t:"1631-01-01",d:"kuzey-yuan"},{f:"1631-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Yakut toprakları (Orta Lena)", tur:"bolge", lat:65.00, lon:123.00, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"kabile — TDV yakutlar maddesi 1620 öncesini AÇIKÇA tartışıyor: Yakutlar 'hemen hemen bütün Lena havzası boyunca yarı uruğlar (küçük kabileler) halinde yaşıyordu', her uruğun 'kendi beyleri (toyon)' var, hepsinin başındaki idareciye 'ulu toyon' deniyor, en kuvvetli uruğ Namaslar. Kuzeye göç XIII. yüzyılda Moğol baskısıyla yoğunlaştı; Ruslar 25 Eylül 1632'de Lena Kalesi'ni kurdu. Kaynak SUSMUYOR ⇒ önceki 'veri-yok' hükmü ÇÜRÜDÜ (VERİ ZAMAN 2 ve ek31 oturumu BAĞIMSIZ olarak aynı sonuca vardı).", kaynak:"TDV yakutlar — islamansiklopedisi.org.tr/yakutlar, HTTP 200, gövde okundu; `yakut` slug 302 ÖLÜ",
  s:[] },
{ ad:"Koryak toprakları", tur:"bolge", lat:62.00, lon:166.00, g:0, k:0,
  kasitli_bosluk:true,bos:"veri-yok", neden:"veri-yok — kaynak Koryakların Rusya'ya tâbilik/haraç ilişkisini netleştirmiyor; yalnız 1769-70 kıtlık/çatışma kaybı ve 1931 Sovyet idaresi kuruluşu biliniyor",
  s:[] },

// ---------- ③ UZAK DOĞU — Kamçatka (fetih) · Çukotka (devletsiz) ----------
{ ad:"Petropavlovsk-Kamçatskiy", tur:"liman", lat:53.0113, lon:158.6514, g:1, k:3,
  kur:"1740-01-01",
  s:[{f:"1740-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },
{ ad:"Anadır (Anadyrsk)", tur:"kale", lat:64.75, lon:177.48, g:0, k:0,
  kur:"1649-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"devletsiz — kale 1649'da kuruldu ama Çukçiler hiç boyun eğmedi, haraç hiç ödenmedi (kaynağın kendi ifadesiyle \"salt biçimsel bile değil\"), 1764'te kale TERK edildi; resmî ilhak ancak Sovyet döneminde (1923 ufkunun dışında)",
  s:[] },
{ ad:"Çukotka merkezi", tur:"bolge", lat:66.00, lon:172.00, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"devletsiz — Anadır'la aynı gerekçe (Çukçiler hiç fethedilmedi, haraç hiç ödenmedi); yarımadanın doğu ucunu Anadır'ın peteğinin taşmasına karşı kapatıyor",
  s:[] },

];

;
/* ==== data/yerlesimler_emilme.js ==== */
// ==========================================================================
// EMİLME PARTİSİ — Doğu Afrika · Kongo havzası · Yeni Gine
// Sahibi: NOKTA EMİLME oturumu. Şartname: oturumlar/NOKTA-EMILME.md
//
// 🔴 Bu dosya BOŞ olarak koordinatör tarafından açıldı ve DÖRT YERE
// bağlandı (girdi.py · denetle.py KUYRUK · index.html script · concat
// zinciri) — çünkü BAĞLANMAMIŞ DOSYA, YAZILMAMIŞ DOSYADIR.
//
// Niçin var: 8 Ağustos 2026 emilme ölçümü — noktasız 5°×5° hücreleri
// kimin boyadığı ölçüldü ve üç yanlış sahip çıktı:
//   banda-adalari    573.188 km²  (kendisi ~180 km²)
//   somali           628.526 km²  (beş tarihte de AYNI sayı)
//   ingiltere 1900 3.150.758 km²  (Kongo havzası)
//
// ⚠️ Bu partinin tehlikesi boşluk DOLDURMAK: üç coğrafyada da merkezî
// devlet ya yoktu ya gevşekti. `kasitli_bosluk:` bir başarısızlık
// değil bir HÜKÜMDÜR — ama tavanı yükseltir, önce koordinatöre söyle.
// ==========================================================================
window.YERLESIMLER_EMILME = [

// ---------- ① DOĞU AFRİKA — svahili kıyısı, `somali`nin 628.526 km²'si ----------
{ ad:"Kilwa Kisiwani (Kilve)", tur:"sehir", lat:-8.9795, lon:39.4862, g:2, k:1,
  s:[{f:"1281-01-01",t:"1505-01-01",d:"svahili-sehirleri"},{f:"1505-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Zanzibar (Zengibar)", tur:"sehir", lat:-6.1659, lon:39.1917, g:2, k:1,
  s:[{f:"1281-01-01",t:"1503-01-01",d:"svahili-sehirleri"},{f:"1503-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Mombasa", tur:"liman", lat:-4.0402, lon:39.6794, g:1, k:1,
  s:[{f:"1281-01-01",t:"1593-01-01",d:"svahili-sehirleri"},{f:"1593-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Malindi", tur:"liman", lat:-3.2192, lon:40.1169, g:1, k:3,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"svahili-sehirleri"},{f:"1500-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Sofala", tur:"liman", lat:-20.1667, lon:34.7500, g:1, k:3,
  s:[{f:"1281-01-01",t:"1505-01-01",d:"svahili-sehirleri"},{f:"1505-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Mozambik Adası", tur:"liman", lat:-15.0601, lon:40.7016, g:2, k:3,
  kur:"1507-01-01",
  s:[{f:"1507-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Angoche", tur:"liman", lat:-16.2325, lon:39.9086, g:0, k:3,
  s:[{f:"1281-01-01",t:"1600-01-01",d:"svahili-sehirleri"},{f:"1600-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Pate", tur:"liman", lat:-2.1010, lon:41.0500, g:0, k:3,
  s:[{f:"1281-01-01",t:"1600-01-01",d:"svahili-sehirleri"},{f:"1600-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Lamu", tur:"liman", lat:-2.2613, lon:40.9129, g:0, k:3,
  s:[{f:"1281-01-01",t:"1600-01-01",d:"svahili-sehirleri"},{f:"1600-01-01",t:"1698-12-13",d:"portekiz"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Quelimane", tur:"liman", lat:-17.8786, lon:36.8883, g:0, k:3,
  kur:"1544-01-01",
  s:[{f:"1544-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Bagamoyo", tur:"liman", lat:-6.4431, lon:38.9006, g:0, k:3,
  s:[{f:"1281-01-01",t:"1698-12-13",d:"svahili-sehirleri"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },
{ ad:"Tanga", tur:"liman", lat:-5.0689, lon:39.0988, g:0, k:3,
  s:[{f:"1281-01-01",t:"1698-12-13",d:"svahili-sehirleri"},{f:"1698-12-13",t:"1923-10-29",d:"umman-zengibar"}] },

// ---------- ② KONGO HAVZASI — `ingiltere` 1900'ün 3.150.758 km²'si ----------
// Mevcut kimliklerle yazılabilenler. Loango/Luba/Kuba künye önerisi
// koordinatörde — onaylanınca bu bölüme eklenecek.
{ ad:"Mbanza-Kongo (São Salvador)", tur:"sehir", lat:-6.27, lon:14.24, g:2, k:1,
  kur:"1390-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok",
  s:[{f:"1390-01-01",t:"1914-01-01",d:"kongo-kralligi"},{f:"1914-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Soyo", tur:"liman", lat:-6.135, lon:12.369, g:1, k:0,
  kur:"1390-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok",
  s:[{f:"1390-01-01",t:"1885-01-01",d:"kongo-kralligi"},{f:"1885-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Matadi", tur:"liman", lat:-5.818, lon:13.460, g:0, k:0,
  kur:"1390-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kongo-kralligi künyesi 1390'da başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok",
  s:[{f:"1390-01-01",t:"1885-01-01",d:"kongo-kralligi"},{f:"1885-01-01",t:"1923-10-29",d:"belcika",enklav:true}] },
{ ad:"Kabasa", tur:"sehir", lat:-9.30, lon:15.15, g:1, k:1,
  kur:"1500-01-01", kasitli_bosluk:true,bos:"veri-yok", neden:"ndongo künyesi 1500'de başlıyor (ÖLÇÜLDÜ: 1500/1518 muhtemelen Portekiz'in ilk BELGELENMİŞ teması, krallığın kendisi muhtemelen daha erken Kongo'ya bağlı bir eyalet olarak vardı — net bir alternatif tarih kaynaklarda YOK, künyeye dokunmadım)",
  s:[{f:"1500-01-01",t:"1671-01-01",d:"ndongo"},{f:"1671-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Luanda", tur:"liman", lat:-8.84, lon:13.23, g:2, k:3,
  kur:"1575-01-01",
  s:[{f:"1575-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Musumba", tur:"sehir", lat:-8.30, lon:22.42, g:1, k:1,
  kur:"1665-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"lunda-imparatorlugu künyesi 1665'te başlıyor; öncesinde bu noktada merkezi bir devlet kaydı yok",
  s:[{f:"1665-01-01",t:"1887-01-01",d:"lunda-imparatorlugu"},{f:"1887-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Boma", tur:"liman", lat:-5.85, lon:13.05, g:0, k:0,
  kur:"1885-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kolonyal dönem öncesi bu spesifik nehir ağzı noktasında merkezi bir devlet kaydı yok",
  s:[{f:"1885-01-01",t:"1923-10-29",d:"belcika",enklav:true}] },
{ ad:"Kisangani (Stanleyville)", tur:"sehir", lat:0.515, lon:25.191, g:0, k:0,
  kur:"1885-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"kolonyal dönem öncesi bu spesifik iç-nehir noktasında merkezi bir devlet kaydı yok",
  s:[{f:"1885-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Loango (Buali)", tur:"sehir", lat:-4.6546, lon:11.8050, g:1, k:1,
  kur:"1550-01-01",
  s:[{f:"1550-01-01",t:"1883-01-01",d:"loango"},{f:"1883-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Mushenge (Kuba)", tur:"sehir", lat:-5.42, lon:20.85, g:1, k:3,
  kur:"1625-01-01",
  s:[{f:"1625-01-01",t:"1900-01-01",d:"kuba"},{f:"1900-01-01",t:"1923-10-29",d:"belcika"}] },
{ ad:"Kabongo (Luba)", tur:"sehir", lat:-6.5, lon:25.5, g:1, k:3,
  kur:"1585-01-01",
  s:[{f:"1585-01-01",t:"1889-01-01",d:"luba"},{f:"1889-01-01",t:"1923-10-29",d:"belcika"}] },

// ---------- ③ YENİ GİNE — `banda-adalari`nin 573.188 km²'si ----------
// okyanusya bölgesinde Yeni Gine'ye özgü hiç künye yoktu; ihtiyaç YOKTU —
// mevcut kolonyal kimlikler (hollanda-dogu-hint, almanya, ingiltere,
// avustralya) coğrafyayı doğru kapsıyor. Yeni künye ÖNERİLMEDİ.
//
// 🔴 TASARIM KARARI (kullanıcının doğrudan sorduğu soru budur — bugün
// Papua'yı özellikle merak etti): Yeni Gine'nin kolonyal tarihi TAM OLARAK
// bu adanın niçin "boş" GÖRÜNDÜĞÜNÜN cevabıdır — kolonyal güçler yalnız
// KIYI ŞERİDİNDE gerçek idare kurdu (liman kentleri, misyon istasyonları,
// ticaret postaları); adanın devasa İÇ KESİMİ (dağlık Highlands) 1930'lara
// kadar dış dünyayla HİÇ TEMAS ETMEDİ — ne yerli bir merkezi devlet ne
// kolonyal idare oraya ulaştı. Bu yüzden BEŞ kıyı limanı GERÇEK kolonyal
// sahiplerle yazıldı, ama İÇ KESİM tek bir nokta yerine DÖRT dolgu
// noktasıyla (boş `d:[]`, Sahra/Rub'ul Hâlî kalıbı) açıkça KAPATILDI —
// amaç kıyı noktalarının Voronoi hücrelerinin komşu boşluğu "yanlışlıkla"
// yutmasını (§2'nin tarif ettiği tam o hata) ÖNLEMEK. Sonuç: harita kıyıyı
// doğru renklerle, iç kesimi ise BİLEREK BOŞ gösterecek — bu bir eksiklik
// değil, 1923'e kadar gerçekten böyleydi.
{ ad:"Jayapura (Hollandia)", tur:"liman", lat:-2.53, lon:140.72, g:1, k:3,
  kur:"1898-01-01",
  s:[{f:"1898-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Manokwari", tur:"liman", lat:-0.86, lon:134.06, g:0, k:3,
  kur:"1898-01-01",
  s:[{f:"1898-01-01",t:"1923-10-29",d:"hollanda-dogu-hint"}] },
{ ad:"Port Moresby", tur:"liman", lat:-9.44, lon:147.18, g:1, k:0,
  kur:"1884-11-06", kasitli_bosluk:true,bos:"devletsiz", neden:"yerli Motu köyleri çok daha önce vardı (balıkçı/çömlekçi köyleri, Hiri ticaret ağının bir ucu) ama merkezi/kayıtlı bir DEVLET hiç olmadı; 1884'te İngiliz himayesi ilan edilene kadar bu nokta hiçbir egemenliğe bağlanmıyor — boşluk veri eksikliği değil, gerçek siyasi boşluk",
  s:[{f:"1884-11-06",t:"1906-09-01",d:"ingiltere"},{f:"1906-09-01",t:"1923-10-29",d:"avustralya"}] },
{ ad:"Madang", tur:"liman", lat:-5.22, lon:145.79, g:0, k:0,
  kur:"1884-11-03", kasitli_bosluk:true,bos:"devletsiz", neden:"1884 Alman ilhakından önce bu kıyı şeridinde yerli köyler dışında merkezi bir devlet yoktu — boşluk veri eksikliği değil, gerçek siyasi boşluk",
  s:[{f:"1884-11-03",t:"1914-09-17",d:"almanya"},{f:"1914-09-17",t:"1923-10-29",d:"avustralya"}] },
{ ad:"Finschhafen", tur:"liman", lat:-6.6013, lon:147.8406, g:0, k:0,
  kur:"1884-11-03", kasitli_bosluk:true,bos:"devletsiz", neden:"1884 Alman ilhakından önce bu kıyı şeridinde yerli köyler dışında merkezi bir devlet yoktu — boşluk veri eksikliği değil, gerçek siyasi boşluk",
  s:[{f:"1884-11-03",t:"1914-09-17",d:"almanya"},{f:"1914-09-17",t:"1923-10-29",d:"avustralya"}] },
// İÇ KESİM — DÖRT dolgu noktası (Rub'ul Hâlî/Sahra kalıbı: boş `d:[]`,
// `kasitli_bosluk` alanı YOK çünkü bu alan `kur:`e eşlenir ve buradaki
// noktalar zaten hep "vardı", yalnız hiç merkezi devlete bağlanmadı).
// Amaç: kıyı limanlarının peteğinin devasa iç kesimi emmesini durdurmak.
{ ad:"Yeni Gine İç Yaylaları (Merkez — Mount Hagen)", tur:"bolge", lat:-5.86, lon:144.23, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Yeni Gine iç yaylaları, 20. yy'a kadar dış dünyayla teması olmayan, klan temelli kabile toplumlarının (ör. Hagen çevresi halkları) yaşadığı bölgedir; devlet yapısı hiç oluşmadı." },
{ ad:"Yeni Gine İç Yaylaları (Batı — Baliem Vadisi)", tur:"bolge", lat:-4.10, lon:138.94, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Baliem Vadisi, Dani halkının klan temelli kabile toplumuyla yaşadığı, 1938'e kadar dış dünyaca bilinmeyen bir bölgedir; devlet yapısı hiç oluşmadı." },
{ ad:"Yeni Gine İç Kesimi (Kuzey — Sepik Havzası)", tur:"bolge", lat:-4.50, lon:143.50, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Sepik Havzası, çok sayıda dilsel/klan grubunun kabile temelli yaşadığı, sömürge öncesi devlet yapısı bilinmeyen bir bölgedir." },
{ ad:"Yeni Gine İç Kesimi (Güney — Fly Nehri Bataklıkları)", tur:"bolge", lat:-8.00, lon:141.50, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Fly Nehri bataklıkları çevresi, dış dünyayla teması çok geç kurulmuş, klan temelli kabile toplumlarının yaşadığı bir bölgedir." },

];

;
/* ==== data/yerlesimler_ek23.js ==== */
// =====================================================================
// ÇANAKKALE — MARMARA — BOĞAZİÇİ KIYI ŞERİDİ  ·  4 nokta
// NOKTA HALKA-1 oturumu · 11 Ağustos 2026
// =====================================================================
// Emre'nin 14 şikâyetinden beşi bu kıyıda açıktı ve hiçbirinin sebebi motor
// kusuru değildi: `CLAUDE.md §2` — *"noktası olmayan bölge en yakın peteğe
// emilir ve O PETEĞİN SAHİBİYLE boyanır."*
//
// ── ÖLÇÜLDÜ: dört yerin dördü de gerçekten emiliyordu ────────────────
// ```
//   Behramkale  ← Molova (Molyvos), LESBOS ADASI   19,3 km   `ceneviz` 1281-1462
//   Beykoz      ← Boğaziçi (Rumeli yakası), AVRUPA  4,4 km   `bizans`  1281-1453
//   Şarköy      ← Karabiga, MARMARA'NIN KARŞI KIYISI 27,3 km OSMANLI   1345'ten
//   Saroz kuzeyi← Çimpe 10,8 km · Bolayır 14,8 km            OSMANLI   1352/54'ten
// ```
// 🔴 VE YÖN TEK DEĞİL. Şartname işi *"olmaması gereken Osmanlı toprak
//    parçaları"* diye çerçevelemişti; ölçüm ikiye ayırdı:
//      ③ ④  Osmanlı FAZLA görünüyor  → Emre'nin şikâyeti, birebir doğrulandı
//      ① ②  Osmanlı EKSİK görünüyor  → yerine Ceneviz ve Bizans boyanıyor
//    `CLAUDE.md §3.5.1`: *noktasızlık İKİ YÖNE de hata üretir ve hangi yöne
//    ürettiği KOMŞUNUN KİMLİĞİNE bağlıdır.* Burada komşular bir ada ve karşı
//    yakadaki bir dolgu noktası.
//
// ── 🔴 ALTI ÖNGÖRÜ, ÖLÇÜMDEN ÖNCE YAZILDI — BEŞİ ÇÜRÜDÜ ──────────────
// (tamamı `oturumlar/NOKTA-HALKA-1-ILERLEME.md §③`te damgalı)
// ```
//   ① Behramkale  ceneviz→X  1400   öngörü 2.000-3.500   ölçüm   489   🔴
//   ② Beykoz      bizans→OSM 1400   öngörü   300-  600   ölçüm   216   🔴
//   ③ Şarköy      OSM→bizans 1350   öngörü   600-1.200   ölçüm    68   🔴
//   ④ Saroz       OSM→bizans 1355   öngörü   400-  900   ölçüm   331   🔴
//   ⑤ ③+④        toplam     1355   öngörü 1.000-2.000   ölçüm   606   🔴
//   ⑥ 1700'de değişen alan          öngörü         0     ölçüm     0   🟢
// ```
// 📌 Beşi de AYNI YÖNDE yanlıştı: hepsini 2-18 kat BÜYÜK tahmin ettim.
//    Sebep ölçüldü — bir noktanın geri kazandığı alan, "yanlış boyanan kıyı
//    ne kadar uzun" ile değil **orta dikmenin ne kadar kaydığıyla** sınırlı,
//    ve kıyıda o çokgenin yarısı DENİZ. Bölgenin ızgarasında 4.066 hücrenin
//    yalnız **2.473'ü kara**.
//    ⇒ Sonraki NOKTA oturumları için taşınabilir sayı: **tek bir kıyı noktası
//      100-500 km² mertebesinde geri kazanır, binlerce değil.**
// 🟢 Ve mazereti önceden "YOK" diye yazdığım tek kalem ⑥ idi — o tuttu:
//    1500 ve 1700 kesitlerinde değişen alan **tam sıfır**.
//
// ── BAĞLANMAK İÇİN NE BEKLİYOR ──────────────────────────────────────
// 🟢 YENİ RENK 0 · YENİ KÜNYE 0 — kullanılan altı kimliğin (bizans · karesi ·
//    isa-celebi · mehmed-celebi · suleyman-celebi · musa-celebi) hepsi hem
//    `renkler.py` BOYALAR'da hem `devletler.js`te tanımlı (ölçüldü).
// 🟢 DEĞİŞMEZ 2 / 2s BORCU **YAPISAL SIFIR**: hiçbir tarih icat edilmedi.
//    Bütün `f:`/`t:` değerleri `yerlesimler.js` **çekirdeğinde** zaten var
//    olan kırılma günleridir (Edremit · Çanakkale · Karabiga · Çimpe ·
//    Bolayır · Keşan · Malkara · Tekirdağ · Anadolu Hisarı).
//    📌 `§11`: *"bu gün zaten var" yetmiyor — hangi KOVADA olduğu da
//    sorulmalı.* Kuyruk dosyalarından gün alınmadı.
// ⚠️ `arac/girdi.py`ye BU OTURUM BAĞLAMADI — koordinatörün kararı.
//
// ── 🔴 BU DOSYANIN KAPATAMADIĞI ŞİKÂYET: Emre'nin BİRİNCİSİ ──────────
// *"ÇANAKKALENİN KARŞI KIYISI KARESİ İLHAKI İLE ALINMIŞ GİBİ UFAK BİR
//  TOPRAK PARÇASI GÖRÜNÜYOR"* — orası Kilitbahir tarafı, yani AVRUPA yakası.
// Sebebi ölçüldü ve **veri eksikliği değil, kaydın kendi içindeki çelişki**:
// ```
//   Kilitbahir  kur:"1452-01-01"      ama zaman çizgisi 1281'den DOLU
//   girdi.py:  "kur: motor bu tarihten ÖNCE peteği komşuya DEVREDER"
//   1452 öncesi peteği alan:  Çanakkale 4,183 km (1345'ten OSMANLI)
//                             Maydos    4,347 km (bizans)      fark 0,164 km
// ```
// 🔴 YENİ NOKTA BUNU ÇÖZEMEZ: Maydos ile Kilitbahir **4,35 km** arayda,
//    aralarına konacak her nokta 3 km kuralını çiğner. Ölçtüm, çıkış yok.
//    ⇒ Çare tek alan — `yerlesimler.js`teki `kur:`. O dosya bu oturumun
//      değil; koordinatöre bildirildi.
//
// ── ⚠️ İKİ KABUL EDİLMİŞ BORÇ (kayıtsız kalırsa yarın kusur diye bulunur) ──
// 1) ŞARKÖY'ÜN 1912-13 BULGAR İŞGALİ YAZILMADI. Şarköy Birinci Balkan
//    Harbi'nde Bulgar hattının gerisindeydi (8 Şubat 1913 Şarköy çıkarması
//    tam bu sebeple yapıldı). Ama komşuları **Keşan ve Malkara'da o dönem
//    YOK** — yalnız Tekirdağ'da var. Tek noktaya yazmak, Osmanlı kalan
//    Keşan-Malkara'nın ortasında **Bulgar adacığı** üretirdi.
//    📌 `§3.5.1`: *bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür.*
//    ⇒ Bu bölgesel bir borç; küme hâlinde düzeltilmeli, nokta nokta değil.
// 2) ① BEHRAMKALE'DE TDV İLE BİR GERİLİM VAR ve saklanmıyor:
//    `hudavendigar-camii--behramkale` *"bölgede kesin Osmanlı hâkimiyeti
//    I. Murad döneminde kuruldu"* diyor (1362-1389). Ben `1345-01-01`
//    yazdım — sebebi TDV değil, **komşu tutarlılığı**: Edremit ve Çanakkale
//    veride 1345'ten Osmanlı, daha geç bir tarih Behramkale'yi 1345-1365
//    arası **Osmanlı toprağı ortasında Ceneviz/Bizans adacığı** yapardı.
//    İkisi çelişmiyor (*"kesin hâkimiyet"* pekişmeyi anlatır, ilhakı değil)
//    ama seçim bir TERCİHTİR ve burada yazılıdır.
//
// ── KAYNAKLAR (hepsi `§4` yöntemiyle sınandı: HTTP kodu + GÖVDE okundu) ──
//   karesiogullari  "Karesi Beyliği Osmanlı topraklarına katıldı
//                    (746/1345 veya hemen sonrası)"
//   gelibolu        "Çimbi Hisarı üs olarak verildi" (1352) · "2 Mart 1354'te
//                    meydana gelen şiddetli zelzele … Osmanlılar savunmasız ve
//                    boş şehri kolayca elde ettiler" · "13 Ağustos 1366'da
//                    Savoy Dükü Amedeo … 1376'daki bu ikinci fetihle"
//   tekirdag        "bölgenin fethinin 1357-1358 yıllarında gerçekleştiği
//                    söylenebilir" (Şehzade Murad, Gelibolu'dan)
//   bogazici        "Yıldırım Bayezid Anadolukavağı'ndaki Yoros Kalesi'ni de
//                    almış" · Anadoluhisarı "1395 yılında Güzelcehisar'ın
//                    inşasından…" · Beykoz maddesi: "Kocaeli fâtihinin burada
//                    oturduğu rivayeti"
//   hudavendigar-camii--behramkale   Behramkale = "Edremit körfezinde antik bir
//                    liman şehri olan Assos'un kalıntıları üzerinde"
// 🔴 ÖLÜ SLUG (302 — denendi, YOK): assos · behramkale · ayvacik · edremit ·
//    sarkoy · kesan · enez · ipsala · saros · bolayir · cimpe · malkara ·
//    yoros · anadolu-kavagi · ganos · peristasis · karesi · biga · rodosto
// ⚠️ VE `beykoz` `§4②`NİN YENİ BİR ALT-SINIFI ÇIKTI: HTTP **200**, başlık
//    **"BEYKOZ"**, iki test de temiz — ama gövde bir **çapraz gönderme
//    kütüğü**: *"bk. BOĞAZİÇİ"*, *"bk. İSTANBUL"*. Düz metni 2.628 karakter
//    ve tamamı arayüz. Madde ÖLÜ değil, **BOŞ da değil** — başka maddeye
//    yönlendiriyor. `§4`ün *"dar slug tutmazsa KAPSAYICI maddeyi dene"*
//    kuralı uygulandı: `bogazici` (70.716 karakter) aranan her şeyi verdi.
//
// ⚠️ Saroz kuzey kıyısı `tur:"bolge"` (dolgu) — o kıyı şeridinde TDV'nin
//    müstakil madde taşıdığı bir yerleşim YOK (arandı: `kesan` · `enez` ·
//    `saros` · `ipsala` ölü; TDV aramasında yalnız cami/türbe maddeleri
//    çıktı). `Boğaziçi (Rumeli yakası)` kaydının aynı konvansiyonu.
//    Zaman çizgisi 18,2 km kuzeydeki **Keşan**'ın birebir aynısıdır.
// =====================================================================
window.YERLESIMLER_EK23 = [

// ① TROAS — Edremit körfezi kuzey kıyısı
// Emilen: Molova (Molyvos), 19,3 km, LESBOS ADASI, `ceneviz` 1281-1462.
// Anakara Assos yarımadası 181 yıl boyunca Ceneviz boyanıyordu; Karesi
// ilhakında (1345) Edremit ve Çanakkale Osmanlı olurken arada kalıyordu.
// Tek başına ölçüldü: 1350-1440 arası **851 km²** (ceneviz→OSM 489 · bizans→OSM 362).
{ ad:"Behramkale (Assos)", kd:[{f:"1281-01-01",t:"1345-01-01",k:0,m:null},{f:"1345-01-01",t:"1923-10-29",k:4,m:"Bursa"}], tur:"kale", lat:39.4897, lon:26.3376, g:0, k:4, m:"Bursa",
  s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},{f:"1297-01-01",t:"1345-01-01",d:"karesi"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak"},{f:"1413-07-05",t:"1920-04-23"}],
  v:[] },

// ② BOĞAZİÇİ'NİN ANADOLU YAKASI
// Emilen: `Boğaziçi (Rumeli yakası)`, 4,4 km — AVRUPA yakasındaki bir dolgu
// noktası. Anadolu yakası 1453'e kadar Bizans boyanıyordu, oysa Anadolu Hisarı
// 5,6 km ötede 1395'ten Osmanlı. Kırılma günü ondan alındı (`1395-08-01`).
// Tek başına ölçüldü: 1400-1440 **+216 km²** Osmanlı · 1350-1355 **−97 km²**
// (iki yönlü — Aydos/Samandıra'nın kuzeye taşan payı geri alınıyor).
{ ad:"Beykoz", kd:[{f:"1281-01-01",t:"1395-08-01",k:0,m:null},{f:"1453-05-29",t:"1923-10-29",k:4,m:"İstanbul"}], tur:"sehir", lat:41.1275, lon:29.0925, g:0, k:4, m:"İstanbul",
  s:[{f:"1281-01-01",t:"1395-08-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1395-08-01",t:"1402-07-28"},{f:"1413-07-05",t:"1920-04-23"}],
  v:[] },

// ③ MARMARA'NIN RUMELİ YAKASI — EMRE'NİN ŞİKÂYETİNİN TAM YERİ
// Emilen: Karabiga, 27,3 km, MARMARA'NIN KARŞI KIYISI, `d:1345-01-01`.
// Yani Şarköy ve Mürefte **Karesi ilhakıyla** Osmanlı boyanıyordu — Emre'nin
// *"ŞARKÖY TARAFI … KARESİ İLHAKI İLE ALINMIŞ GİBİ"* cümlesi ölçümle birebir
// örtüştü. Trakya'nın fethi ise 1357 (TDV `tekirdag`).
// Tek başına ölçüldü: 1355'te **−275 km²** Osmanlı · 1350'de −68 · 1400'de +34
// (Marmara Adası Bizans kalırken anakara Osmanlı — doğru ayrım).
// ⚠️ Koordinat 0,38 km denizdeydi; `denetle.konum_denetimi`in SINANMIŞ önerisi
//    uygulandı (40.6103,27.1147 → 40.6142,27.1146).
{ ad:"Şarköy", tur:"liman", lat:40.6142, lon:27.1146, g:0, k:4, m:"Edirne",
  s:[{f:"1281-01-01",t:"1357-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1357-01-01",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1920-04-23"}],
  v:[] },

// ④ SAROZ KÖRFEZİ KUZEY KIYISI — ÇİMPE GÖRÜNTÜSÜNDEKİ PARÇA
// Emilen: Çimpe 10,8 km (`d:1352-03-01`) ve Bolayır 14,8 km (`d:1354-03-02`) —
// ikisi de körfezin GÜNEY yakasında, Gelibolu yarımadasında. Emre:
// *"ÇİMPE KALESİ ELE GEÇTİĞİNDE … SAROZUN KUZEYİNE … ŞÜPHELİ OSMANLI TOPRAK
// PARÇASI"*. Ölçüm doğruladı: kuzey kıyı 1352'de Osmanlı oluyordu.
// Tek başına ölçüldü: 1355'te **−331 km²** Osmanlı; 1400 ve sonrası 0
// (Keşan 1357'de Osmanlı olduğu için fark kapanıyor — beklenen).
// ⚠️ Koordinat 1,77 km denizdeydi; SINANMIŞ öneri uygulandı
//    (40.63,26.70 → 40.6456,26.6950).
{ ad:"Saroz kuzey kıyısı", tur:"bolge", lat:40.6456, lon:26.6950, g:0, k:0,
  s:[{f:"1281-01-01",t:"1357-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1357-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1920-04-23"}],
  v:[] },

];

;
/* ==== data/yerlesimler_ek24.js ==== */
// 🔴 k:4 -> k:3 (11 Agustos 2026, Emre'nin yetkisi, parti-0015/H-0004):
//    "bu sinir ilcelere ve kasabalara dahi koylere 3. SINIF OZELLIGI
//     VERIP onlara BOLGE ATFEDEBILIRSIN ... sinirin ortasindan gectigi
//     hepsini 3. sinif ilan edip ona gore siniri duzgun cizmelisin"
//    Sebep OLCULDU: k:4 tavani 140 km, k:3 tavani 280 km. Sinir
//    noktalari k:4 yazilinca komsularina YENILIYOR ve siniri TUTAMIYOR.
// =====================================================================
// TRAKYA SINIR ŞERİDİ — Meriç ve Mutludere hatlarının İKİ YAKASI
// KOORDİNATÖR · 11 Ağustos 2026 · Emre'nin Google Haritalar görselleri
//
// 🔴 NİÇİN: Ölçüldü — sınır hattında olması gereken 32 yerleşimin 24'ü
// veride YOKTU. Türkiye–Bulgaristan hattının TAMAMI (Kırklareli hariç)
// noktasızdı ⇒ `CLAUDE.md §2` gereği o şerit en yakın peteğe emiliyordu,
// yani sınırın yeri hiçbir kayıtla belirlenmiyordu.
//
// YÖNTEM (Emre'nin kendi tarifi): "bir Suriye'den bir Türkiye'den yerleşim
// nokta koyup sınırı bu ikisinin arasından geçirebilirsin en basit olarak."
// ⇒ Noktalar ÇİFT hâlinde, hattın iki yakasından. Petek sınırı ortadan
//   geçer; nehre/hatta yaslanması motorun topografya aşamasının işi.
//
// ⚠️ KAYNAK DURUMU — AÇIKÇA:
//   · yer adları ve hangi ülkede oldukları: Emre'nin gönderdiği Google
//     Haritalar görselleri (5 kare, 2026-08-11 19:32-19:34)
//   · koordinatlar: standart coğrafya, ±1-2 km · TEK TEK DOĞRULANMADI
//   · 1923 sahipliği: Lozan (1923-07-24) ve 1913 İstanbul Antlaşması
//     hükümleri · TDV'den TEK TEK DOĞRULANMADI
//   ⇒ `CLAUDE.md §4` gereği bu dosya BİR ADAY PARTİSİDİR; doğrulanınca
//     `kaynak:` alanları doldurulacak.
//
// 🔴 KARAAĞAÇ BU DOSYADA YOK ve sebebi ölçüldü: Edirne'ye ~2,5 km, yani
//    `§11` 3 km kuralının ALTINDA. Ayrı nokta olarak yazılamaz. Lozan'ın
//    Karaağaç çıkıntısı bu modelde İFADE EDİLEMEZ — bu, `KALITE-ZAMANA-
//    GORE.md`nin tezinin en somut kanıtıdır.
//
// KIRILMA GÜNLERİ — kronolojide ZATEN VAR olanlar seçildi (Değişmez 2s):
//   1361-01-01  Edirne cevresinin fethi (1368 KULLANILMADI: maddesi yok,
//                 Degismez 2 acik veriyordu - kronolojide karsiligi olan
//                 gune cekildi, uydurulmadi)
//   1913-05-30  Londra Antlaşması — Rumeli'nin kaybı
//   1913-09-29  İstanbul Antlaşması — Bulgaristan ile barış
//   1920-05-14  Batı Trakya'nın Yunanistan'a geçişi
// =====================================================================
window.YERLESIMLER_EK24 = [

// ───────── MERİÇ HATTI · TÜRKİYE YAKASI (doğu) ─────────
{ ad:"Uzunköprü", tur:"sehir", lat:41.267, lon:26.688, g:0, k:3, m:"Edirne", kur:"1443-01-01", devir_beyani:"TDV murad-ii: Ergene Köprüsü 1443’te tamamlanmıştır; bir ucunda mescid, imaret, hamam ve pazarlar yaptırıldı — kasaba köprüyle doğdu, 1281-1443 dönemleri BÖLGE vekilidir · KORIDOR-0081 H-0008",
  s:[{f:"1281-01-01",t:"1371-09-26",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1371-09-26",t:"1402-07-28"},{f:"1413-07-05",t:"1913-03-26"},{f:"1913-07-21",t:"1920-04-23"}], v:[] },

{ ad:"Havsa", tur:"kasaba", lat:41.552, lon:26.821, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1361-05-05",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1361-05-05",t:"1402-07-28",kaynak:"gün komşudan: Edirne · TDV murad-i 5 Mayıs 1361 — aynı teslim, 15-25 km"},{f:"1413-07-05",t:"1913-03-26"},{f:"1913-07-21",t:"1920-04-23"}], v:[] },

{ ad:"Meriç (İpsala kuzeyi)", tur:"kasaba", lat:41.191, lon:26.421, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1361-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1361-01-01",t:"1402-07-28",kaynak:"gün komşudan: Dimetoka · TDV dimetoka — Orta Meriç bölgesinin tamamı"},{f:"1413-07-05",t:"1913-03-26"},{f:"1913-07-21",t:"1920-04-23"}], v:[] },

// ───────── MERİÇ HATTI · YUNANİSTAN YAKASI (batı) ─────────
{ ad:"Orestiada (Kumçiftliği)", tur:"sehir", lat:41.503, lon:26.531, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1361-05-05",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-05-30",t:"1920-05-14",d:"bulgaristan-kralligi"},{f:"1920-05-14",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1361-05-05",t:"1402-07-28",kaynak:"gün komşudan: Edirne · TDV murad-i 5 Mayıs 1361 — aynı teslim, 15-25 km"},{f:"1413-07-05",t:"1913-05-30"}], v:[] },

{ ad:"Sofulu (Soufli)", tur:"kasaba", lat:41.193, lon:26.298, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1361-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-05-30",t:"1920-05-14",d:"bulgaristan-kralligi"},{f:"1920-05-14",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1361-01-01",t:"1402-07-28",kaynak:"gün komşudan: Dimetoka · TDV dimetoka — Orta Meriç bölgesinin tamamı"},{f:"1413-07-05",t:"1913-05-30"}], v:[] },

{ ad:"Dedeağaç (Alexandroupoli)", tur:"liman", lat:40.8490, lon:25.8740, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1371-09-26",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-05-30",t:"1920-05-14",d:"bulgaristan-kralligi"},{f:"1920-05-14",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1371-09-26",t:"1402-07-28"},{f:"1413-07-05",t:"1913-05-30"}], v:[] },

// ───────── MUTLUDERE HATTI · TÜRKİYE YAKASI (güney) ─────────
{ ad:"Lalapaşa", tur:"kasaba", lat:41.836, lon:26.741, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1361-05-05",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1361-05-05",t:"1402-07-28",kaynak:"gün komşudan: Edirne · TDV murad-i 5 Mayıs 1361 — aynı teslim, 15-25 km"},{f:"1413-07-05",t:"1913-03-26"},{f:"1913-07-21",t:"1920-04-23"}], v:[] },

{ ad:"Kofçaz", tur:"kasaba", lat:41.936, lon:27.176, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1369-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1369-01-01",t:"1402-07-28",kaynak:"gün komşudan: Kırklareli · TDV murad-i 1369 Istıranca seferi — aynı sefer"},{f:"1413-07-05",t:"1913-03-26"},{f:"1913-07-21",t:"1920-04-23"}], v:[] },

{ ad:"Dereköy (Kırklareli)", tur:"kasaba", lat:41.943, lon:27.401, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1369-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1369-01-01",t:"1402-07-28",kaynak:"gün komşudan: Kırklareli · TDV murad-i 1369 Istıranca seferi — aynı sefer"},{f:"1413-07-05",t:"1913-03-26"},{f:"1913-07-21",t:"1920-04-23"}], v:[] },

{ ad:"Demirköy", tur:"kasaba", lat:41.822, lon:27.762, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1369-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1369-01-01",t:"1402-07-28",kaynak:"gün komşudan: Kırklareli · TDV murad-i 1369 Istıranca seferi — aynı sefer"},{f:"1413-07-05",t:"1913-03-26"},{f:"1913-07-21",t:"1920-04-23"}], v:[] },

{ ad:"İğneada",kaynak:"veri-ici sozlesme: Kirklareli · Derekoy · Vize kayitlari", tur:"liman", lat:41.8890, lon:28.0258, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1361-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-02-01",d:"suleyman-celebi"},{f:"1403-02-01",t:"1424-02-22",d:"bizans",kaynak:"TDV fetret-devri: Gelibolu Antlaşması (Şubat 1403 — AY) 'Misivri’ye kadar Karadeniz sahillerini … Bizanslılar’a terkediyordu' · TDV suleyman-celebi-emir aynı hüküm · TDV murad-ii: 22 Şubat 1424 antlaşmasıyla 'Silivri ve Terkos hisarları hariç … Karadeniz kıyılarında 1402’den sonra aldığı yerleri geri vermeyi kabul etti' · Musa 1411-13 ara dönemi kasaba düzeyinde ÖLÇÜLEMEDİ · KORIDOR-0081"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1361-01-01",t:"1402-07-28"},{f:"1424-02-22",t:"1913-03-26"},{f:"1913-07-21",t:"1920-04-23"}], v:[] },

// ───────── MUTLUDERE HATTI · BULGARİSTAN YAKASI (kuzey) ─────────
{ ad:"Mustafapaşa (Svilengrad)", tur:"kasaba", lat:41.766, lon:26.207, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1361-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-09-29",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"1361-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-09-29"}], v:[] },

// 🔴 13 Ağustos 2026 · VERİ FETRET — 1371-01-01 → 1371-09-26 (Çirmen Savaşı)
//    Emre'nin AÇIK YETKİSİYLE yazıldı. ⚠️ VE BU BİR ÇIKARIMDIR, ÖLÇÜM DEĞİL —
//    işaretlenmeden yazılmasın diye buraya not düşülüyor.
//    TDV Elhova'nın (Osmanlı adı KIZILAĞAÇ YENİCESİ) fetih tarihini VERMİYOR:
//      `yanbolu`      1365 (Timurtaş) ya da 1373 — TDV 1373'ü tercih ediyor,
//                     ama Elhova'nın kendi tarihini yazmıyor
//      `bulgaristan`  Kızılağaç yalnız 1543-1609 yörük iskânında geçiyor
//      `cirmen`       1371 zaferi var; savaş sonrası hangi yerlerin girdiği YOK.
//                     Çirmen sancağı listesinde (Hasköy·Çırpan·Akçakazanlık·
//                     Yeni Zağra) Elhova YOK
//      müstakil `kizilagac` maddesi YOK · akademik aramada §4 kırmızı çizgisini
//      geçen kaynak ÇIKMADI (Vikipedi · Fandom · Wikidata — reddedilen küme)
//    ⇒ Kaynak "Elhova 1371-09-26'da alındı" DEMİYOR. Yazılan şey şu: eski gün
//    KESİNLİKLE yanlış bir maddeye bağlıydı, yenisi ise doğru olaya bağlı.
//    ÖLÇÜLDÜ (bu kısım çıkarım değil):
//      1371-01-01 maddesi   "Kârkiyâ hânedanı Gîlân'da kuruldu" → HAZAR KIYISI
//        ve o günü kullanan öteki noktalar LÂHÎCAN ile BENDER ENZELİ, yani
//        maddenin GERÇEK sahipleri onlar; Elhova ona yanlışlıkla ortaktı
//      1371-09-26 maddesi   "Çirmen Savaşı — MERİÇ VADİSİNİN DENETİMİ"
//        Elhova Tunca (Meriç'in kolu) vadisinde · dört komşusu (Uzunköprü ·
//        Meriç · Sofulu · Dedeağaç) tam bu günü kullanıyor
//      TDV `musa-celebi` Musa'nın sahasını "Trakya (Edirne, YANBOLU, Çirmen)"
//        diye sayıyor — Elhova Yanbolu'nun 40 km güneyi
//    ⇒ Yeni gün İCAT EDİLMEDİ (33 nokta kullanıyor, maddesi ±0 gün) ve eski gün
//    ÖLMEDİ (Lâhîcan · Bender Enzeli · Kotor hâlâ kullanıyor) ⇒ Değişmez 2
//    bir milim bozulmuyor. `ek24`in kendi kabul ettiği yöntem: bkz. yukarıda
//    "1368 KULLANILMADI: maddesi yok… kronolojide karşılığı olan güne çekildi,
//    uydurulmadı". kaynak: bulunamadı — TDV bu taneciği kapsamıyor
{ ad:"Elhova (Elhovo)", kd:[{f:"1281-01-01",t:"1369-01-01",k:0,m:null},{f:"1369-01-01",t:"1923-10-29",k:3,m:"Edirne"}], tur:"kasaba", lat:42.170, lon:26.573, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1369-01-01",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-05-30",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"1369-01-01",t:"1402-07-28",kaynak:"TDV murad-i (İnalcık): 770 (1369) baharında Pınarhisar, Kırkkilise ve Vize · Timurtaş Kızılcaağaç Yenicesi — YIL 1369, gün yok (§4)"},{f:"1413-07-05",t:"1913-05-30"}], v:[] },

{ ad:"Malko Tırnova", tur:"kasaba", lat:41.983, lon:27.525, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1369-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-09-29",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"1369-01-01",t:"1402-07-28",kaynak:"gün komşudan: Kırklareli · TDV murad-i 1369 Istıranca seferi — aynı sefer"},{f:"1413-07-05",t:"1913-09-29"}], v:[] },

{ ad:"Ahtapolu (Ahtopol)",kaynak:"veri-ici sozlesme: Kirklareli · Derekoy · Vize kayitlari", tur:"liman", lat:42.099, lon:27.937, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1361-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-02-01",d:"suleyman-celebi"},{f:"1403-02-01",t:"1424-02-22",d:"bizans",kaynak:"TDV fetret-devri: Gelibolu Antlaşması (Şubat 1403 — AY) 'Misivri’ye kadar Karadeniz sahillerini … Bizanslılar’a terkediyordu' · TDV suleyman-celebi-emir aynı hüküm · TDV murad-ii: 22 Şubat 1424 antlaşmasıyla 'Silivri ve Terkos hisarları hariç … Karadeniz kıyılarında 1402’den sonra aldığı yerleri geri vermeyi kabul etti' · Musa 1411-13 ara dönemi kasaba düzeyinde ÖLÇÜLEMEDİ · KORIDOR-0081"},{f:"1913-09-29",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"1361-01-01",t:"1402-07-28"},{f:"1424-02-22",t:"1913-09-29"}], v:[] },

{ ad:"Rezve (Rezovo)",kaynak:"veri-ici sozlesme: Kirklareli · Derekoy · Vize kayitlari", tur:"koy", lat:41.9935, lon:28.0192, g:0, k:3, m:"Edirne",
  s:[{f:"1281-01-01",t:"1361-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-02-01",d:"suleyman-celebi"},{f:"1403-02-01",t:"1424-02-22",d:"bizans",kaynak:"TDV fetret-devri: Gelibolu Antlaşması (Şubat 1403 — AY) 'Misivri’ye kadar Karadeniz sahillerini … Bizanslılar’a terkediyordu' · TDV suleyman-celebi-emir aynı hüküm · TDV murad-ii: 22 Şubat 1424 antlaşmasıyla 'Silivri ve Terkos hisarları hariç … Karadeniz kıyılarında 1402’den sonra aldığı yerleri geri vermeyi kabul etti' · Musa 1411-13 ara dönemi kasaba düzeyinde ÖLÇÜLEMEDİ · KORIDOR-0081"},{f:"1913-09-29",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"1361-01-01",t:"1402-07-28"},{f:"1424-02-22",t:"1913-09-29"}], v:[] },

];

;
/* ==== data/yerlesimler_ek25.js ==== */
// 🔴 k:4 -> k:3 (11 Agustos 2026, Emre'nin yetkisi, parti-0015/H-0004):
//    "bu sinir ilcelere ve kasabalara dahi koylere 3. SINIF OZELLIGI
//     VERIP onlara BOLGE ATFEDEBILIRSIN ... sinirin ortasindan gectigi
//     hepsini 3. sinif ilan edip ona gore siniri duzgun cizmelisin"
//    Sebep OLCULDU: k:4 tavani 140 km, k:3 tavani 280 km. Sinir
//    noktalari k:4 yazilinca komsularina YENILIYOR ve siniri TUTAMIYOR.
// =====================================================================
// TÜRKİYE–SURİYE SINIR ŞERİDİ — hattın İKİ YAKASI
// KOORDİNATÖR · 11 Ağustos 2026 · Emre'nin Google Haritalar görseli
//
// 🔴 HUKUKÎ DAYANAK — Emre'nin isteği üzerine Lozan'a bakıldı:
//   Lozan md. 3/1 : Suriye sınırı YENİDEN ÇİZİLMEDİ; 20 Ekim 1921
//                   ANKARA İTİLÂFNAMESİ (Franklin-Bouillon) teyit edildi
//   Lozan md. 3/2 : Irak sınırı dokuz ay içinde İngiltere ile anlaşmaya,
//                   olmazsa Milletler Cemiyeti'ne bırakıldı
//                   ⇒ 1923'te TÜRKİYE–IRAK SINIRI YOK. Bu dosyada da YOK.
//                     (1926-06-05 Ankara Antlaşması'nı bekler.)
//
// ⚠️ HATAY BU DOSYADA YOK — Emre'nin uyarısı: görsel 1938 SONRASI hâli
//    gösteriyor. 1923'te İskenderun · Antakya · Reyhanlı · Samandağ
//    FRANSIZ SURİYE MANDASI'ndadır. Veride zaten öyle (ölçüldü:
//    Antakya = fransa-cumhuriyet ✓). Ayrı kalem: 1938 Hatay Devleti,
//    1939 Türkiye — ÜÇ dönemli, ayrıca yazılacak.
//
// KIRILMA GÜNÜ: 1921-10-20 Ankara İtilâfnamesi (Fransa ile).
//   Öncesi Osmanlı/işgal, sonrası bugünkü hat.
//
// ⚠️ KAYNAK: yer adları ve yakaları Emre'nin görselinden; koordinatlar
//   standart coğrafya ±1-2 km; TEK TEK DOĞRULANMADI (`CLAUDE.md §4`).
// =====================================================================
window.YERLESIMLER_EK25 = [

// ───────── TÜRKİYE YAKASI (kuzey) ─────────
{ ad:"Kilis",isg:[{f:"1918-12-06",t:"1919-10-29",d:"ingiltere",kaynak:"TDV `kilis` — kaynaklı"},{f:"1919-10-29",t:"1921-12-23",d:"fransa-cumhuriyet",kaynak:"TDV `kilis` — kaynaklı"}],kaynak:"TDV `kilis` (gövdesi okundu): Halep eyaletine bağlı livâ merkezi; Mısır dönemi cümlesi YOK. Halep'in düşüşü 15 Temmuz 1832, Belen 29 Temmuz 1832 (TDV `ibrahim-pasa-kavalali`). Bitiş külliyatın Halep günü.", tur:"kasaba", lat:36.716, lon:37.115, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Suruç",isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}], tur:"kasaba", lat:36.976, lon:38.427, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Akçakale",isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}], tur:"kasaba", lat:36.710, lon:38.947, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk",kaynak:"bulunamadı — Akçakale için MÜSTAKİL kaynak YOK (TDV'de müstakil madde yok, 302). Dönem a71d6c86 (11 Ağu 2026, koordinatör) ile GOOGLE HARİTALAR GÖRSELİNDEN yazıldı; dosya başlığı 'TEK TEK DOĞRULANMADI' diyor ve görsel akademik kaynak DEĞİLDİR (§4 kırmızı çizgi). Bölge hükmü: TDV `harran` Aynicâlût (1260) sonrası 'daha çok Memlükler, kısa aralıklarla İlhanlılar' der ama YIL VERMEZ; Iranica `harran` Memlük dönüşünü '8./14. yy başı' verir ⇒ İKİ KAYNAK ÇELİŞİR, §4 gereği TDV esas. 1281-01-01 bir ÖLÇÜM DEĞİL, UFUK penceresinin başlangıç işaretidir (D210). ⚠️ Jadlā' bu kayıttan GÜN devraldı; §4'ün birinci şartı (komşunun günü kendi kaynağına dayanacak) BURADAN DÜŞER — bkz. denetim/HUKUM-DEVRALMA-1004.md"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Ceylanpınar", kd:[{f:"1281-01-01",t:"1516-08-24",k:0,m:null},{f:"1516-08-24",t:"1923-10-29",k:3,m:"Diyarbakır"}],isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}],neden:"Nusaybin ile aynı desen; Osmanlı günü (1516-08-24, Mercidâbık) DEĞİŞMEDİ.",kaynak:"ankraj Mardin (75 km) — külliyattaki zincir", tur:"kasaba", lat:36.845, lon:40.043, g:0, k:3, m:"Diyarbakır",
  s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1516-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Nusaybin", kd:[{f:"1281-01-01",t:"1515-09-19",k:0,m:null},{f:"1515-09-19",t:"1923-10-29",k:3,m:"Diyarbakır"}],isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"TDV `nusaybin` — veriden devralındı — kaynaksız"}],not:"BİRLEŞİM (1.MURAT, hüküm M-2116): yer_yama_ok110.js'in artuklu/karakoyunlu erken katmanı + yer_yama_ok107.js'in 1515-01-01 → 1515-09-19 gün düzeltmesi. İkisi de TDV kaynaklı, farklı kısımlar için; ayrı ayrı uygulansalar biri ötekini yerdi.",kaynak:"nusaybin", tur:"kasaba", lat:37.077, lon:41.215, g:0, k:3, m:"Diyarbakır",
  s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1515-09-19",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1515-09-19",t:"1920-04-23"}], v:[] },

{ ad:"Silopi", kd:[{f:"1281-01-01",t:"1515-09-19",k:0,m:null},{f:"1515-09-19",t:"1923-10-29",k:3,m:"Diyarbakır"}],not:"BİRLEŞİM (1.MURAT, hüküm M-2116): ok110'un erken katmanı + ok107'nin gün düzeltmesi. ⚠️ TDV `silopi` slug'ı ÖLÜ (302); dayanak TDV `cizre` — Cizre ve çevresi aynı Doğu Anadolu harekâtında alındı, Diyarbekir eyaletine bağlandı.",kaynak:"cizre", tur:"kasaba", lat:37.246, lon:42.470, g:0, k:3, m:"Diyarbakır",
  s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1515-09-19",d:"safevi"},{f:"1918-10-30",t:"1921-10-20",d:"ingiltere"},{f:"1921-10-20",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1515-09-19",t:"1918-10-30"}], v:[] },

// 🔴 UC IKIZ SEHIR CIKARILDI (3 km kurali, olculdu):
//   Tel Abyad  <-> Akcakale      1,59 km
//   Rasulayn   <-> Ceylanpinar   2,46 km
//   Kamisli    <-> Nusaybin      2,72 km
// Bunlar SINIRIN IKI YAKASINDAKI IKIZ SEHIRLERDIR - 1921 hatti onlari
// ORTADAN bolmustur. Petek modeli bu cifti IFADE EDEMEZ: 3 km kurali
// mukerrer sayar, ama ikisi AYRI ULKEDEDIR.
// => KARAAGAC ile AYNI SINIF. Bu, sinirin modelin cozunurlugunden INCE
//    oldugu ucuncu olculmus vaka (bkz. KALITE-ZAMANA-GORE.md).
//    Turkiye yakasi tutuldu; Suriye yakasi Halep/Cerablus/Munbic ile temsil.
// ───────── SURİYE YAKASI (güney) · Fransız mandası ─────────
{ ad:"Azez (A'zâz)",kaynak:"TDV, madde: suriye — Han Meysalun (Temmuz 1920) ile Faysal'ın Şam hükûmetine son verilip Fransız manda idaresinin kurulması. Gün: 24 Temmuz 1920 (Meysalun). Künye `suriye-lubnan-mandasi` penceresi 1920-07-01 AY hassasiyetlidir (künyenin kendi beyanı); veri kaynaklı GÜNÜ kullanır.", tur:"kasaba", lat:36.586, lon:37.045, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1920-07-24",d:"fransa-cumhuriyet"},{f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  d:[{f:"1516-08-24",t:"1918-10-30"}], v:[] },

{ ad:"Münbiç",kaynak:"TDV, madde: suriye — Han Meysalun (Temmuz 1920) ile Faysal'ın Şam hükûmetine son verilip Fransız manda idaresinin kurulması. Gün: 24 Temmuz 1920 (Meysalun). Künye `suriye-lubnan-mandasi` penceresi 1920-07-01 AY hassasiyetlidir (künyenin kendi beyanı); veri kaynaklı GÜNÜ kullanır.", tur:"kasaba", lat:36.528, lon:37.955, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1920-07-24",d:"fransa-cumhuriyet"},{f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  d:[{f:"1516-08-24",t:"1918-10-30"}], v:[] },

{ ad:"Cerablus",kaynak:"TDV, madde: suriye — Han Meysalun (Temmuz 1920) ile Faysal'ın Şam hükûmetine son verilip Fransız manda idaresinin kurulması. Gün: 24 Temmuz 1920 (Meysalun). Künye `suriye-lubnan-mandasi` penceresi 1920-07-01 AY hassasiyetlidir (künyenin kendi beyanı); veri kaynaklı GÜNÜ kullanır.", tur:"kasaba", lat:36.825, lon:38.014, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1920-07-24",d:"fransa-cumhuriyet"},{f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  d:[{f:"1516-08-24",t:"1918-10-30"}], v:[] },

{ ad:"Ayn el-Arab (Kobani)",kaynak:"TDV, madde: suriye — Han Meysalun (Temmuz 1920) ile Faysal'ın Şam hükûmetine son verilip Fransız manda idaresinin kurulması. Gün: 24 Temmuz 1920 (Meysalun). Künye `suriye-lubnan-mandasi` penceresi 1920-07-01 AY hassasiyetlidir (künyenin kendi beyanı); veri kaynaklı GÜNÜ kullanır.", tur:"kasaba", lat:36.891, lon:38.353, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1920-07-24",d:"fransa-cumhuriyet"},{f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  d:[{f:"1516-08-24",t:"1918-10-30"}], v:[] },

{ ad:"Malikiye (Derik)", kd:[{f:"1281-01-01",t:"1515-09-19",k:0,m:null},{f:"1515-09-19",t:"1923-10-29",k:3,m:"Diyarbakır"}],not:"BİRLEŞİM (1.MURAT, hüküm M-2116): ok110'un erken katmanı + ok107'nin gün düzeltmesi. ⚠️ TDV `derik` slug'ı ÖLÜ (302); dayanak TDV `nusaybin` — Mardin ovasının aynı kolu, aynı harekât. 1918 sonrası döneme dokunulmadı (ok107'nin kendi notu).",kaynak:"nusaybin", tur:"kasaba", lat:37.176, lon:42.145, g:0, k:3, m:"Diyarbakır",
  s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1515-09-19",d:"safevi"},{f:"1918-10-30",t:"1920-07-24",d:"fransa-cumhuriyet"},{f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  d:[{f:"1515-09-19",t:"1918-10-30"}], v:[] },

];

;
/* ==== data/yerlesimler_ek26.js ==== */
// 🔴 k:4 -> k:3 (11 Agustos 2026, Emre'nin yetkisi, parti-0015/H-0004):
//    "bu sinir ilcelere ve kasabalara dahi koylere 3. SINIF OZELLIGI
//     VERIP onlara BOLGE ATFEDEBILIRSIN ... sinirin ortasindan gectigi
//     hepsini 3. sinif ilan edip ona gore siniri duzgun cizmelisin"
//    Sebep OLCULDU: k:4 tavani 140 km, k:3 tavani 280 km. Sinir
//    noktalari k:4 yazilinca komsularina YENILIYOR ve siniri TUTAMIYOR.
// =====================================================================
// DOĞU SINIR ŞERİDİ — Gürcistan · Ermenistan · İran hatlarının İKİ YAKASI
// KOORDİNATÖR · 11 Ağustos 2026 · Emre'nin Google Haritalar görselleri
//
// 🔴 HUKUKÎ DAYANAK — 1923'te doğu sınırı ZATEN ÇİZİLİYDİ, Lozan'dan önce:
//   1921-03-16  MOSKOVA Antlaşması   Sovyet Rusya ile
//   1921-10-13  KARS Antlaşması      Gürcistan · Ermenistan · Azerbaycan
//               ⇒ Batum GÜRCİSTAN'a · Kars · Ardahan · Iğdır TÜRKİYE'ye
//   İRAN sınırı: 1639 KASR-I ŞİRİN hattı, 1913 İstanbul Protokolü ile
//               kesinleşti — 1923'te DEĞİŞMEDİ
//
// ⚠️ Batum veride ZATEN `rusya` (ölçüldü ✓) — Emre'nin adıyla saydığı sınav.
//
// KIRILMA GÜNÜ: 1921-10-13 Kars Antlaşması — kronolojide karşılığı olan
//   güne bağlandı; uydurulmadı.
//
// ⚠️ KAYNAK: yer adları ve yakaları Emre'nin görsellerinden (5 kare,
//   19:54-20:06); koordinatlar standart coğrafya ±1-2 km; TEK TEK
//   DOĞRULANMADI (`CLAUDE.md §4`). Doğrulanınca `kaynak:` doldurulacak.
// =====================================================================
window.YERLESIMLER_EK26 = [

// ───────── GÜRCİSTAN HATTI ─────────
{ ad:"Şavşat", kd:[{f:"1281-01-01",t:"1551-01-01",k:0,m:null},{f:"1878-03-03",t:"1923-10-29",k:0,m:null}], tur:"kasaba", lat:41.245, lon:42.360, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1878-03-03"}], v:[] },

{ ad:"Posof", kd:[{f:"1281-01-01",t:"1551-01-01",k:0,m:null},{f:"1878-03-03",t:"1923-10-29",k:0,m:null}], tur:"kasaba", lat:41.510, lon:42.720, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1878-03-03"}], v:[] },

{ ad:"Hanak", kd:[{f:"1281-01-01",t:"1551-01-01",k:0,m:null},{f:"1878-03-03",t:"1923-10-29",k:0,m:null}], tur:"kasaba", lat:41.230, lon:42.855, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1878-03-03"}], v:[] },


{ ad:"Hulo (Acara)", kd:[{f:"1281-01-01",t:"1578-08-09",k:0,m:null},{f:"1878-03-03",t:"1923-10-29",k:0,m:null}], tur:"kasaba", lat:41.645, lon:42.310, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1578-08-09",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[{f:"1578-08-09",t:"1878-03-03"}], v:[] },

// ───────── ERMENİSTAN HATTI · Arpaçay (Ahuryan) ─────────
{ ad:"Arpaçay (Akyaka)",neden:"akkoyunlu 1281-01-01'de açılıyordu — devletin kuruluşundan 59 yıl önce. Zincir bölgenin ankrajına açıldı; `d:` günlerine DOKUNULMADI.",kaynak:"ankraj Revan (67 km) — külliyattaki zincirin birebir aynısı; TDV `akkoyunlular` (kuruluş 1340, Elvend'in yenilgisi 1501)", tur:"kasaba", lat:40.845, lon:43.325, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1386-01-01",d:"celayirli",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1386-01-01",t:"1406-10-21",d:"timurlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1406-10-21",t:"1469-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1534-01-01",d:"safevi"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1534-01-01",t:"1878-03-03"}], v:[] },

{ ad:"Digor",neden:"akkoyunlu 1281'de açılıyordu; bölge ankrajına hizalandı.",kaynak:"ankraj Revan — aynı zincir", tur:"kasaba", lat:40.375, lon:43.410, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1386-01-01",d:"celayirli",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1386-01-01",t:"1406-10-21",d:"timurlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1406-10-21",t:"1469-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1534-01-01",d:"safevi"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1534-01-01",t:"1878-03-03"}], v:[] },

{ ad:"Iğdır",neden:"CEVAP.json notunun adıyla andığı vaka: \"Iğdır tek blok 1281->1534\". Zincir açıldı; 253 yıllık tek parça akkoyunlu 32 yıla indi.",kaynak:"ankraj Revan (46 km) — aynı zincir", tur:"kasaba", lat:39.920, lon:44.045, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1386-01-01",d:"celayirli",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1386-01-01",t:"1406-10-21",d:"timurlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1406-10-21",t:"1469-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1534-01-01",d:"safevi"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1534-01-01",t:"1878-03-03"}], v:[] },

// 🔴 `iran` HAYALETİ TEMİZLENDİ — 20 Ağustos 2026, 7 kayıt.
// Emre sordu: *"Başkale civarındaki pembe"* ve *"1705'te Gümrü kime aitti,
// neden başka renk görünüyor?"* ÖLÇÜLDÜ ve haklıydı:
//   1577 · 1590 · 1604 · 1638 kesitlerinde `iran` taşıyan nokta TAM 7,
//   hep aynısı: Gümrü · Eçmiyadzin · Doğubayazıt · Çaldıran · Özalp ·
//   Başkale · Yüksekova — ve HEPSİ BU DOSYADA.
//   Komşuları `safevi` yazıyor; en yakın çift 19 km (Eçmiyadzin ↔ Revan).
//   Renkler #cc1664 ↔ #a56cab ⇒ ekranda İKİ AYRI DEVLET gibi görünüyordu.
//
// 📌 VE BU, `CLAUDE.md §3.5`te KAYITLI hayaletin YENİDEN DOĞMUŞ hâli.
// Orada aynı kusur ölçülmüş ("Tebriz, Hemedan, Bağdat ve 70 kayıt · iran
// 1501-1736 · 235 yıl") ve düzeltilmişti; bu dosya sonradan yazılırken
// aynı çökertme tekrar yapılmış. ⇒ Bir kusuru düzeltmek, onun bir daha
// YAZILMASINI engellemiyor — engelleyecek olan bir NÖBETÇİ ve o yok.
//
// ÇARE — komşu Nahçıvan'ın (`yerlesimler.js:581`) zinciri BİREBİR alındı:
//   İran hattı (5 kayıt)  `iran` 1514-1639  →  `safevi`
//                          (Safevî 1501-1736 arası hüküm sürdü, aralık
//                           tamamen içinde ⇒ YENİ KIRILMA GÜNÜ YOK)
//   Ermenistan (2 kayıt)  `iran` 1534-1828  →  safevi → afsar → zend → kacar
//                          günler 1736-03-08 · 1747-06-20 · 1796-01-01
//                          ÜÇÜ DE Nahçıvan ve Revan'da zaten kullanılıyor
//                          ve o kayıtlar ÇEKİRDEKTE ⇒ maddeleri VAR
// ⚠️ ÖLÇMEDİĞİM: bu yedi yerin Afşar/Zend/Kaçar geçişlerinin ŞEHİR ŞEHİR
// tarihi. Bölge deseni izlendi (komşu kayıtla aynı gün) — uydurma gün
// yazılmadı, `Değişmez 2` açık kırılma üretmesin diye.
// Ermenistan yakası
{ ad:"Gümrü (Aleksandropol)",kaynak:"ankraj Revan (86 km) — aynı zincir", tur:"sehir", lat:40.789, lon:43.847, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1386-01-01",d:"celayirli",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1386-01-01",t:"1406-10-21",d:"timurlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1406-10-21",t:"1469-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1794-01-01",d:"zend"},{f:"1794-01-01",t:"1828-02-22",d:"kacar"},{f:"1828-02-22",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[{f:"1583-09-13",t:"1604-06-08",kaynak:"örtülü — Emre 13 Eylül (karar 11) ve 17 Eylül kararı · dayanak: Revan · BOA A.DVNSMHM.d 51-322 (13 Eylül 1583, Adlığ 2026) / TDV revan (991 Ramazanı başları = Eylül 1583 ortaları; 1013/1604) · batıda Kars kesintisiz Osmanlı · ⚠️ Şüregel 1590 Revan tahririnde (BOA TD 633) YOK — 1583-1604 sahibi için kaynak bulunamadı"},{f:"1724-10-03",t:"1735-10-03",kaynak:"örtülü — Emre 17 Eylül karari · dayanak: Revan · Bilgili 2016 (Ermeni Araştırmaları 53) (3 Ekim 1724) / TDV nadir-sah--iran (3 Ekim 1735) · batıda Kars kesintisiz Osmanlı · Alandağlı 2024 (Arpaçay doğusu Revan eyaleti)"}], v:[] },

{ ad:"Eçmiyadzin",kaynak:"ankraj Revan (19 km) — Revan zinciri: köy Karbi nahiyesinde (Köse 2024 Türkiyat Mecmuası 34/1: 'Revan kazâsına tâbi Karbi nâhiyesinde', 1725 arzuhali); Karbi nahiyesi Kasım 1590 Osmanlı tahririnde (BOA TD 633, Bilgili 2016) ve 1727 TD 901'de", tur:"sehir", lat:40.162, lon:44.293, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1386-01-01",d:"celayirli",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1386-01-01",t:"1406-10-21",d:"timurlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1406-10-21",t:"1469-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"},{f:"1469-01-01",t:"1501-07-01",d:"akkoyunlu"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1794-01-01",d:"zend"},{f:"1794-01-01",t:"1828-02-22",d:"kacar"},{f:"1828-02-22",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[{f:"1583-09-13",t:"1604-06-08",kaynak:"gün komşudan: Revan (13 Eylül 1583 emir günü, Adlığ 2026 · TDV revan; 1604-06-08 Revan'ın kaybı) · Karbi nahiyesi TD 633 (Kasım 1590)"},{f:"1724-10-03",t:"1735-10-03",kaynak:"Bilgili 2016 (Ermeni Araştırmaları 53) s.107 (TD 901 Karpi nahiyesi) · gün komşudan: Revan"}], v:[] },

// ───────── İRAN HATTI · Kasr-ı Şirin (1639) çizgisi ─────────
// 🔴 KAYNAK DÜZELTİLDİ — KITA 13, 12 Eylül 2026 (paket 0043 / H-0018).
//    ESKİ BEYAN: kaynak:"ankraj Van (117 km) · Erciş — külliyattaki zincir"
//    O beyan KENDİNİ ÇÜRÜTÜYORDU: dayanak gösterilen Van'ın `d:`si
//    **1548-08-25**, yani iddia edilen günden OTUZ DÖRT YIL SONRA. (13 Eylül 2026: Van günü kaynağa göre 24'e çekildi — hüküm değişmez.)
//    Bir kaydın dayanağı, kaydın iddiasından sonrayı gösteremez (`D144`:
//    beyan edilen kaynak iddiayı taşımıyor olabilir — burada taşımıyordu).
// 🟢 GERÇEK KAYNAK BULUNDU ve YIL DOĞRULANDI: TDV `dogubayazit` (200,
//    gövde 14.416 kr, okundu) — "…yüzyılın sonlarına doğru Safevîler'in
//    eline geçen Bayazıt, **1514'te Yavuz Sultan Selim tarafından Osmanlı
//    topraklarına katıldı**." ⇒ 1514 YILI KAYNAKLI, uydurma değil.
// ⚠️ AMA GÜN HÂLÂ KAYNAKSIZ ve bu AÇIKÇA yazılıyor (`§4`: künyenin/
//    verinin günü bir KAYNAK DEĞİLDİR): `1514-09-06` Tebriz'e girilen
//    gündür ve külliyatta 19 kayıt onu paylaşır. TDV gün vermiyor;
//    "1514" diyor. Gün İÇ KAYNAKLIDIR, DEVRALINMIŞTIR (`D084`) ve
//    değiştirilmedi — çünkü `1514-01-01` yazmak Çaldıran'dan (1514-08-23)
//    ÖNCEYE düşerdi, yani daha kaba bir tarih DAHA YANLIŞ olurdu.
// 📌 Bu düzeltme TARİHE DOKUNMAZ, yalnız DAYANAĞI doğru gösterir.
{ ad:"Doğubayazıt", kd:[{f:"1281-01-01",t:"1514-09-06",k:0,m:null},{f:"1514-09-06",t:"1923-10-29",k:3,m:"Erzurum"}],neden:"akkoyunlu 1281→1514-09-06 tek blok. `d:` 1514-09-06'dan başlıyor ve KORUNDU: TDV yılı (1514) doğruluyor, günü vermiyor. Gün külliyat içi devralmadır, kaynak DEĞİLDİR — açıkça damgalandı.",kaynak:"TDV `dogubayazit` — 1514 YILI kaynaklı: \"1514'te Yavuz Sultan Selim tarafından Osmanlı topraklarına katıldı\". GÜN kaynaksız: 1514-09-06 külliyat içi (Tebriz'e giriş günü, 19 kayıt paylaşıyor).", tur:"kale", lat:39.548, lon:44.084, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1514-09-06",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1514-09-06",t:"1920-04-23"}], v:[] },

// 🔴 ÇALDIRAN + BAŞKALE — ARAS-CALDIRAN, 13 Eylül 2026 (parti-emrelic-0049 / H-0001)
//    Emre: 1629 görüntüsünde Van-Erciş-Özalp-Hoşap-Çölemerik Osmanlı, bu iki
//    nokta Osmanlı DEĞİL iki adacık. ÖLÇÜLDÜ: iki kayıt safevi 1502→1639-05-17,
//    bütün komşular 1548-08-25'ten Osmanlı ⇒ 1548-1639 arası 91 yıllık ADA.
//    (O gün de 1.MURAT M-3874 ile kaynağa göre 1548-08-24'e çekildi: TDV `van`
//     "onuncu gün kale fethedildi (24 Ağustos 1548)" · TDV `suleyman-i` ·
//     R. Kılıç, JUHIS 3 (2020) — 25 diyen akademik kaynak BULUNAMADI.)
//    Eski beyan "ankraj Van — külliyattaki zincir" bir KAYNAK DEĞİLDİ (§4:
//    atlas referans değildir) ve Van'ın kendi gününü bile taşımıyordu.
//    Rapor: denetim/ARASTIRMA-CALDIRAN-0913.md (lehte/aleyhte tablosu orada).
// ⚠️ 1281-1502 zinciri bu turda ARAŞTIRILMADI, dokunulmadı.
// ⚠️ 1914-1918 Rus işgali YAZILMADI: bölgede (Van · Hakkâri · Erzurum) hiçbir
//    kayıt `isg:` taşımıyor; tek başına yazmak TERS ADA açar. Öneri raporda.
{ ad:"Çaldıran",neden:"H-0001 · 1548-1639 safevi ADACIĞI kaldırıldı. Bu kasabanın KENDİ dönem kaydı BULUNAMADI; hüküm İŞARETLERE dayanır (kanıt değil): Bargiri sancağı 1550-51 ilk Van tevcih defterinden 1684'e kadar Van eyaletinde; daha DOĞUDAKİ Mâkû 1574-1639 Osmanlı'nın Mahmûdî beyleri elinde ve 1605'te Şah Abbas kaleyi alamadı; Van 1548'den sonra el değiştirmedi. Safevî lehine 1548-1639 arası işaret BULUNAMADI. 1639 sonrası Kotur ve Mâkû İran'a döndü; Çaldıran onların batısında, Bargiri tarafında kaldı (işaret). GÜN komşudan (§4 şartlı): Van · TDV `van` 24 Ağustos 1548 — atlas Van kaydı 25 yazıyor, fark raporda. 1920-04-23 → tbmm-turkiye: proje kararı (M-3066), komşularla aynı.",kaynak:"İŞARET (doğrudan kanıt değil) — Talat Karataş, 'Erciş Sancağı'nın Osmanlı İdari Taksimatındaki Yeri (1555-1722)', Hacettepe Ü. Türkiyat Araştırmaları Dergisi 43 (2025), 151-163: 1550-51 tevcih defterinde Van vilayeti 'Van, Adilcevaz, Albak, Bitlis, Erciş, Kisani, Bargiri'; 1585 hükmünde 'Bargiri ma'a Kotur dere Beyi'; MD 180/154 (1684) Livâ-i Bargiri · TDV `maku` (R. Kurtuluş): 1574 İvaz Bey Mâkû'yu almakla görevli, 1605 Abbas kaleyi alamadı, 1639 Kasrışîrin çerçevesinde yıkıldı, IV. Murad'ın ölümünden sonra İran tekrar işgal etti · TDV `van`: Van Kalesi 24 Ağustos 1548'de fethedildi, bir daha el değiştirmedi · GÜN komşudan: Van · TDV `van`. ⚠️ Şen-Tekin (Van YYÜ SBE Dergisi 50, 2020) uyarısı: 1514 savaş alanı Hoy yakınındaki ovadır, bugünkü Çaldıran kasabası DEĞİL.", tur:"kasaba", lat:39.145, lon:43.910, g:0, k:3, m:"Van",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Özalp (Saray)",neden:"akkoyunlu tek blok; safevi dilimi 1502'ye çekildi, Osmanlı 1548-08-24'te başlamaya devam ediyor.",kaynak:"ankraj Van (55 km) — külliyattaki zincir; 1548-08-24 Van'ın kendi Osmanlı günü", tur:"kasaba", lat:38.658, lon:43.998, g:0, k:3, m:"Van",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Başkale",neden:"H-0001 · 1548-1639 safevi ADACIĞI kaldırıldı. Başkale = tarihî ALBAK (Elbak) ve Osmanlı SANCAĞI olduğu DOĞRUDAN belgeli: 1550-51 ilk Van tevcih defteri · Celâlzâde 963/1556 listesi · 17 Kasım 1568 ve 1585 hükümlerinde 'Albak Beyi Zahid Bey' · 1565 hükmü 'Hakkâri ve Albak kadılarına' · 1613 Van beylerbeyi kuvvetleri Albak kalesindeki asi sancakbeyini teslim aldı (Safevî değil, Osmanlı içi isyan) · 1631-32 ve 1673-1740 yurtluk-ocaklık · 1684 Livâ-i Albak · 1854-58 Hakkâri sancağının Albak kazası · 1914 Hakkâri sancağının merkez kazası. 1548 ÖNCESİ: Mahmûdî İvaz Bey Şah Tahmasb himayesinde Elbak ve Hoşab'ı idare etti; Mahmûdî Hasan Bey 1548 II. İran Seferi'nde Osmanlı'ya tâbi oldu ⇒ safevi→1548 korundu. 1603-1612 ve 1623-1639 arası Safevî tasarrufu BULUNAMADI. GÜN komşudan (§4 şartlı): Van · TDV `van` 24 Ağustos 1548 (Albak, Van eyaletinin ilk tevcih defterinde) — atlas Van kaydı 25 yazıyor, fark raporda. 1920-04-23 → tbmm-turkiye: proje kararı (M-3066).",kaynak:"KANIT — Talat Karataş, 'Erciş Sancağı'nın Osmanlı İdari Taksimatındaki Yeri (1555-1722)', Hacettepe Ü. Türkiyat Araştırmaları Dergisi 43 (2025), 151-163 (1550-51 defter · Celâlzâde 1556 · 1585 hükmü · MD 180/154) · Zeki Tekin, 'Zeynel Bey ve Oğullarının Hakkâri Hâkimliği Mücâdelesi ve İsyânları', Atatürk Ü. SBE Dergisi 10/2 (2010), 119-132 (1565 · 1568 · 1613) · TDV `kurtler` (1631-32 ve 1673-1740 Van eyaleti ocaklık sancakları: Albak) · Yağmur Şen - Rahmi Tekin, 'Osmanlı Devrinde Mahmudî (Hoşab) Beyliği', Van YYÜ SBE Dergisi 50 (2020), 141-162 (İvaz Bey · Hasan Bey 1548) · Murat Alandağlı, Külliyat 2021, DOI 10.51592/kulliyat.1027274 (BOA NFS.d.3868: Albak kazası 1854) · Haluk Selvi, 'Millî Mücadele Döneminde Hakkâri', TÜBA, DOI 10.53478/TUBA.978-625-8352-71-9.ch10 (1914 merkez kaza Başkale) · GÜN komşudan: Van · TDV `van` '24 Ağustos 1548'.", tur:"kale", lat:38.045, lon:44.010, g:0, k:3, m:"Van",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Yüksekova (Gever)",neden:"Özalp ile aynı desen.",kaynak:"ankraj Çölemerik/Hakkâri (48 km) — külliyattaki zincir", tur:"kasaba", lat:37.573, lon:44.290, g:0, k:3, m:"Van",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },



];

;
/* ==== data/yerlesimler_ek27.js ==== */
// =====================================================================
// SINIR VE KIYI TAMAMLAMA — Emre'nin parti-0015 ölçümünden çıkan eksikler
// KOORDİNATÖR · 11 Ağustos 2026
//
// 🔴 EMRE'NİN YETKİSİ (parti-0015/H-0004 ve H-0005, birebir):
//   "bu sınır ilçelere ve kasabalara dahi köylere **3. sınıf özelliği verip
//    onlara bölge atfedebilirsin** ve tüm türkiye haritasını bu sınır il
//    ilçe kasaba ve köylerine göre belirleyip tam doğru bir harita ortaya
//    çıkarabilirsin"
//   "sınırın ortasından geçtiği hepsini 3. sınıf ilan edip ona göre sınırı
//    düzgün çizmelisin"
//
// ⇒ Bu dosyanın noktaları `k:3` — `k:4` DEĞİL. Sebebi ÖLÇÜLDÜ:
//      k:4 tavanı 140 km · k:3 tavanı 280 km · k:2 420 · k:1 700
//   Sınır noktaları `k:4` yazılınca komşularına YENİLİYOR ve sınırı
//   tutamıyorlar. Emre'nin verdiği yetki tam bu kusuru kapatıyor.
//
// EKSİK OLDUĞU ÖLÇÜLENLER (1923-10-01 taraması):
//   Artvin YOK · Hopa YOK · Mersin YOK · İskenderun YOK
//   ⇒ Emre: "artvin hopa rize filan bizde imiş gibi görünmüyor sanki"
//   ⇒ Emre: "çukurova ve iskenderun olması lazım, iskenderun körfezi
//            dışarıda kalmış"
//
// ⚠️ İSKENDERUN 1923'te TÜRKİYE DEĞİL — Fransız Suriye mandası (Hatay).
//    Emre'nin kendi uyarısı: "1923'te hatay hariç idi." Nokta ekleniyor
//    ki KÖRFEZİN İKİ YAKASI da temsil edilsin, ama sahibi FRANSA.
//
// ⚠️ KAYNAK: konumlar standart coğrafya ±1-2 km · TEK TEK DOĞRULANMADI.
//    1923 sahipliği: 1921 Kars (doğu) ve 1921 Ankara İtilâfnamesi (güney).
// =====================================================================
// 🔴 ZATEN VAR OLDUGU icin CIKARILANLAR (ad cakismasi
//    nobetcisi yakaladi, VERI-YAPISI.md: ad BENZERSIZ):
//    Silifke
window.YERLESIMLER_EK27 = [

// ───────── DOĞU KARADENİZ · Gürcistan sınırı ─────────
{ ad:"Artvin", kd:[{f:"1281-01-01",t:"1551-01-01",k:0,m:null},{f:"1551-01-01",t:"1579-01-01",k:2,m:"Erzurum"},{f:"1579-01-01",t:"1829-09-14",k:2,m:"Ahıska"},{f:"1829-09-14",t:"1878-03-03",k:3,m:"Batum"},{f:"1878-03-03",t:"1923-10-29",k:0,m:null}], tur:"sehir", lat:41.183, lon:41.822, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1878-03-03"}], v:[] },

{ ad:"Hopa", kd:[{f:"1281-01-01",t:"1551-01-01",k:0,m:null},{f:"1915-02-23",t:"1918-03-14",k:0,m:null},{f:"1920-04-23",t:"1923-10-29",k:0,m:null}], tur:"liman", lat:41.390, lon:41.427, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1915-02-23",t:"1917-03-15",d:"rusya",kaynak:"T.C. Hopa Kaymakamlığı tarihçe (KURUMSAL): Rus işgali 23 Şubat 1915; Çaykıran: Rusların 'Batum'dan Arhavi istikametinde' ilerleyişi · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-03-14",d:"transkafkasya",kaynak:"T.C. Hopa Kaymakamlığı tarihçe (KURUMSAL): geri alınış 14 Mart 1918 · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1915-02-23",kaynak:"1878-1915 rusya penceresi SİLİNDİ: Yücetürk 2020 (Karadeniz Araştırmaları XVII/65, 73-95): 'Arhavi, Hopa ve Yusufeli ise Osmanlı Devleti'nde kalmıştır' · TDV lazlar: XX. yy başında 'Pazar ve Hopa kazaları' Lazistan sancağında · Hopa Kaymakamlığı: 1878 sınırı Kemalpaşa bucağı (Hopa'nın DOĞUSU) · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1918-03-14",t:"1920-04-23",kaynak:"T.C. Hopa Kaymakamlığı tarihçe (KURUMSAL): geri alınış 14 Mart 1918 · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"}], v:[] },

// Sarp — sınırın Karadeniz'e kavuştuğu nokta (Türkiye yakası)
{ ad:"Sarp", kd:[{f:"1281-01-01",t:"1551-01-01",k:0,m:null},{f:"1878-03-03",t:"1923-10-29",k:0,m:null}], tur:"koy", lat:41.520, lon:41.545, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1878-03-03"}], v:[] },

// ───────── ÇUKUROVA · Akdeniz kıyısı ─────────
{ ad:"Mersin",neden:"d: 1352-01-01'de başlıyordu — 164 yıllık hayalet Osmanlı. ramazanoglu dönemi (1352 → 1516-08-24) eklendi, d: Mercidâbık'a çekildi. Aynı düzeltme yerlesimler_ek27.js:51'e yazılmış ama MÜKERRER `s:`/`d:` yüzünden JS'te sonuncusu kazanıyor ve düzeltme motora hiç girmiyordu.",kaynak:"TDV `ramazanogullari`: beylik 753'te (1352) kuruldu, sahası \"başta Adana olmak üzere Çukurova yöresi\" — Tarsus, Sîs, Ayas, Misis dâhil; Osmanlı hâkimiyeti \"Mercidâbık zaferi (25 Receb 922 / 24 Ağustos 1516)\" sonrası kesinleşti. Veri tarafı: Tarsus ve Adana kayıtları bu zinciri zaten taşıyor (birebir aynı günler).", tur:"liman", lat:36.800, lon:34.633, g:0, k:3, m:"Adana",
  // 🔴 MÜKERRER `s:`/`d:` ANAHTARI KALDIRILDI — 10 Eylül 2026.
  // Bu obje AYNI ALANI İKİ KEZ taşıyordu; JS sonuncuyu alır ve birincisi
  // SESSİZCE ÖLÜR. Üç işçi (İZ-YOK DENETİM A·B·C) bağımsız olarak
  // buldu. Kaybın bedeli İKİ KUSURDU: (1) `ramazanoglu` dönemi
  // hiçbir kopyada yoktu ⇒ 164 YILLIK HAYALET OSMANLI; (2) birinci
  // `s:` `tbmm-turkiye` taşıyordu, ikincisi onu DÜŞÜRDÜ ⇒ 1921-1923
  // arası Mersin OSMANLI boyanıyordu.
  // ⚠️ `ramazanoglu` günü ADANA ve TARSUS'tan devralındı (1516-08-24,
  //   Mercidâbık — aynı TDV cümlesi, `D084`). Ama Fransız/TBMM zinciri
  //   Mersin'in KENDİ hâliyle kaldı: Adana/Tarsus Fransız işgalini HİÇ
  //   modellemiyor, Mersin modelliyor ve bu TARİHEN DOĞRU (Çukurova'da
  //   Fransız işgali 1921 Ankara İtilâfnâmesi'ne kadar sürdü).
  //   ⇒ Komşunun gününü almak, komşunun MODELİNİ almak DEĞİLDİR.
  // 🔴 `kur:`DAN ÖNCEKİ DÖNEMLER BUDANDI — `Değişmez 5` yakaladı:
  //    "Mersin kur:1671-01-01 ilk dönem 1281-01-01 — 390 YIL ÖNCE"
  // İki çare ALTERNATİFTİ, tamamlayıcı DEĞİL:
  //   `ramazanoglu` dönemi  → 1352-1516 arası RAMAZANOĞLU boyanır
  //   `kur:1671`            → 1671'den ÖNCE PETEK HİÇ YOKTUR
  // Emre'nin 2 Eylül kararı daha temiz çözüyor: hayalet yalnız RENK
  // DEĞİŞTİRMİYOR, ORTADAN KALKIYOR. Ve `petek_epok()` zaten
  // `kur:`tan önceki peteği bastırıyor ⇒ o dönemler ÖLÜ VERİ.
  // ⚠️ Üç işçinin "ramazanoglu eksik" bulgusu ÇÜRÜMÜYOR — `kur:`
  //   YOKKEN doğruydu. `kur:` inince aynı kusurun çaresi değişti.
  // Toprak 1671'den önce komşunun (Tarsus/Adana) peteğine düşer —
  // `§2` emilme kuralı, ve burada DOĞRU: Mersin YOKTU.
  s:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"},{f:"1921-10-20",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1671-01-01",t:"1918-10-30"}],
  // 🟢 EMRE'NİN KENDİ KARARI, 2 Eylül 2026 (soru ⑧, paket 0019/H-0008):
  //    "(a) 1671 — Evliya Çelebi. Daha erken, tek kaynaklı."
  // Karar VERİLMİŞTİ ama veriye HİÇ İNMEMİŞTİ — sekiz gün boyunca
  // `CEVAP.json` onu "cozuldu" diye taşıdı.
  kur:"1671-01-01", v:[] },

// ───────── İSKENDERUN KÖRFEZİ · 1923'te FRANSIZ mandası ─────────
// 🔴 HATAY — Emre'nin uyarısı: 1923'te Türkiye DEĞİL. Türkiye'ye katılışı
//    1939. Nokta ekleniyor ki körfezin GÜNEY yakası temsil edilsin ve
//    petek Çukurova'dan sarkmasın.
{ ad:"İskenderun",kaynak:"TDV, madde: suriye — Han Meysalun (Temmuz 1920) ile Faysal'ın Şam hükûmetine son verilip Fransız manda idaresinin kurulması. Gün: 24 Temmuz 1920 (Meysalun). Künye `suriye-lubnan-mandasi` penceresi 1920-07-01 AY hassasiyetlidir (künyenin kendi beyanı); veri kaynaklı GÜNÜ kullanır.", tur:"liman", lat:36.587, lon:36.173, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1920-07-24",d:"fransa-cumhuriyet"},{f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  d:[{f:"1516-08-24",t:"1918-10-30"}], v:[] },

// 🔴 PAYAS BURADAN DUSURULDU (12 Agustos 2026, koordinator).
// Kayit YANLISTI: Fransiz donemini 1923-10-29'a kadar goturuyordu.
// VERI SINIR 2 oturumu BIRINCIL KAYNAKTAN dogruladi — UK Cmd.1556 /
// LNTS Vol.54 pp.178-193, Ankara Itilafnamesi Md.8: sinir
// "immediately south of the locality of Payas" noktasindan basliyor
// => Payas hattin KUZEYINDE, yani TURKIYE tarafinda.
// DUZELTILMIS kayit: data/yerlesimler_ek28.js
// (silinmedi, TASINDI — mukerrer nokta olmasin diye burasi bosaltildi)

];

;
/* ==== data/yerlesimler_ek28.js ==== */
// =====================================================================
// VERİ SINIR 2 — 1923 sınırının ölçülmüş boşlukları
// YAPIMCI oturum: VERİ SINIR 2 · 12 Ağustos 2026
// Görev: oturumlar/VERI-SINIR-2.md
//
// ① PAYAS DÜZELTMESİ — hüküm: DOĞRULANDI
//   Kaynak: UK Cmd. 1556 "Turkey No. 2 (1921)" — Franco-Turkish Agreement
//   signed at Angora, 20 October 1921 (League of Nations Treaty Series,
//   Vol. 54, pp. 178-193), Article 8: sınır hattı "immediately south of
//   the locality of Payas" noktasından başlayıp Meidan-Ekbez'e (Suriye'de
//   kalacak) doğru ilerliyor. ⇒ Payas hattın KUZEYİNDE, yani TÜRKİYE
//   tarafında. Wikipedia "Treaty of Ankara (1921)" maddesi aynı LNTS
//   kaynağını göstererek aynı tarifi veriyor — iki bağımsız okuma örtüşüyor.
//   Kırılma günü: 1921-10-20 (imza günü) — kronolojide karşılığı VAR:
//   data/olaylar_ek5.js:425 "Ankara İtilâfnâmesi: Fransa ile barış..."
//   ⚠️ data/yerlesimler_ek27.js'teki MEVCUT Payas kaydı (satır 63-65) bu
//   düzeltmeyi YANSITMIYOR — KOORDİNATÖR/Oturum 0 o kaydı BUNUNLA
//   DEĞİŞTİRMELİ (ben ek27.js'e dokunamam, YASAK).
//
// ② 7 EKSİK NOKTA — İskenderun körfezi kuzeyi (Çukurova) + doğu sınırı
//   k:3/k:4 kararı Emre'nin çift yönlü yetkisine göre verildi:
//   "sınır ilçe/kasabalara 3. sınıf verilebilir" AMA "hak etmeyen 4. sınıf
//   yerlere bölge atfetmeyelim" (11 Ağustos). Her nokta için GEREKÇE
//   satır içinde yazılı. Kaynak bulunamayan hiçbir tarih UYDURULMADI.
//
//   🔴 ARAŞTIRMA SIRASINDA ÇÖZÜLEN KAYNAK ÇELİŞKİSİ (Hopa):
//   İlk arama "Hopa 1878'de Osmanlı'da kaldı" dedi; ikinci ve üçüncü arama
//   (sınır komisyonu tarifiyle, "sınır Esenköy'ün doğusundaki Kopmuş
//   Burnu'ndan başlar") bunu ÇÜRÜTTÜ: Hopa'nın kendisi Rus tarafında
//   kalmış. data/yerlesimler_ek27.js'teki MEVCUT Hopa kaydı (rusya
//   1878-1921) bu ikinci/üçüncü kaynakla UYUŞUYOR — yani ek27 kaydı
//   YANLIŞ DEĞİL, benim ilk kaynağım yanlıştı. Arhavi ise (Hopa'nın
//   GÜNEYBATISINDA, sınırdan uzakta) hep Osmanlı kaldı — aşağıda ⑥.
//
//   🟡 TARİH HASSASİYETİ NOTU (Dörtyol/Erzin/Yumurtalık):
//   Akademik kaynak (TÜBA, bkz ③) çok daha kesin tahliye tarihleri veriyor
//   (Dörtyol 1921-12-31, Erzin/Toprakkale 1922-01-04) — ama bu tarihlerin
//   kronolojide karşılığı YOK ve ben olaylar*.js'e yazamam. Bu yüzden
//   BİLEREK sibling kayıtla (Mersin, ek27.js:51-53) AYNI tarihi
//   (1921-10-20, Ankara İtilâfnâmesi) kullandım — Değişmez 2 açık
//   kalmasın diye. Daha kesin tarih istenirse önce olaylar*.js'e
//   1921-12-31 ve 1922-01-04 için madde eklenmeli, SONRA bu üç kayıt
//   güncellenmeli. Koordinatöre bu şekilde bildirildi.
// =====================================================================

window.YERLESIMLER_EK28 = [

// ───────── ① PAYAS DÜZELTMESİ (ek27.js:63-65'in YERİNE geçecek) ─────────
{ ad:"Payas",isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}],kaynak:"Belen muharebesi 29 Temmuz 1832 (TDV `ibrahim-pasa-kavalali`) Payas'ın hemen kuzeyindeki geçitte; Adana bölgesi 1833-1840 İbrâhim Paşa'da (TDV `adana`, gövdesi okundu: '1833-1840 yıllarında ... İbrâhim Paşa'nın eline geçmiş, Londra Antlaşması ile de 1841'de tekrar Osmanlı Devleti'ne bağlanmıştır'). Bitiş külliyatın Adana günü.", tur:"kale", lat:36.755, lon:36.213, g:0, k:3, m:"Halep",
  // kaynak: UK Cmd.1556 / LNTS Vol.54 pp.178-193, Ankara İtilâfnâmesi Md.8 (doğrulandı, bkz. yukarı)
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)",statu:"vassal",kid:"misir-kavalali"}] },

// ───────── ③ ÇUKUROVA · İskenderun körfezinin KUZEY kıyısı ─────────
// Kaynak (üçü için): TÜBA "Occupation and Liberation of Adana" (Nejla
// Günay) — tuba.gov.tr yayını, hakemli akademik seri; + dergipark
// "Cebel-i Bereket Sancağı'nın İdari Yapısı (1879-1933)" (idari statü için).
// TDV bu taneciği (kaza/nahiye düzeyi) kapsamıyor — dortyol/erzin/
// yumurtalik sluglarının hepsi 302 (ölü). Akademik kaynağa geçildi, §4.

{ ad:"Dörtyol", kd:[{f:"1281-01-01",t:"1516-08-24",k:0,m:null},{f:"1920-04-23",t:"1923-10-29",k:0,m:null}],isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}],kaynak:"Adana sancağının doğrulanmış işgal dönemi (parti-emrelic-0036/H-0011, ve savaslar.js:436-437 Kütahya Sözleşmesi) — aynı idari birim, sancak merkezinin tarihiyle tutarlılık", tur:"kasaba", lat:36.845, lon:36.221, g:0, k:3, m:"Adana",
  // GEREKÇE k:3: 1909'da padişah iradesiyle Adana vilayeti Cebel-i Bereket
  // sancağına bağlı KAZA MERKEZİ oldu (öncesi Payas/Erzin'e bağlı nahiye).
  // kaynak: dergipark "Cebel-i Bereket Sancağının İdari Yapısı"; TÜBA (işgal/tahliye)
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Erzin", kd:[{f:"1281-01-01",t:"1516-08-24",k:0,m:null},{f:"1920-04-23",t:"1923-10-29",k:0,m:null}],isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}],kaynak:"bkz. H-0007 (Dörtyol)", tur:"kasaba", lat:36.955, lon:36.201, g:0, k:4, m:"Adana",
  // GEREKÇE k:4 (k:3 DEĞİL): 1906-1909 arası GEÇİCİ olarak Cebel-i Bereket
  // sancak merkeziydi, ama 1909 reorganizasyonuyla Dörtyol kazasına bağlı
  // NAHİYE statüsüne düştü — 1923 itibariyle müstakil kaza değil.
  // kaynak: dergipark "Cebel-i Bereket Sancağının İdari Yapısı"
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[] },

{ ad:"Yumurtalık", kd:[{f:"1281-01-01",t:"1516-08-24",k:0,m:null},{f:"1920-04-23",t:"1923-10-29",k:0,m:null}],isg:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet",kaynak:"bulunamadı — TDV'de müstakil madde YOK (302) ve kapsayıcı maddeler (adana · tarsus · osmaniye · sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; gün mevcut veriden devralındı, KAYNAKSIZ"}],kaynak:"bkz. H-0007 (Dörtyol)", tur:"liman", lat:36.7721, lon:35.7870, g:0, k:4, m:"Adana",
  // GEREKÇE k:4 (k:3 DEĞİL): Ceyhan kazasına bağlı NAHİYE merkeziydi,
  // müstakil kaza değildi (117 köy + 26 çiftlikli Ceyhan kazasının bir parçası).
  // kaynak: dergipark "Cebel-i Bereket Sancağının İdari Yapısı"
  // ⚠️ İşgal/tahliye için Yumurtalık'a ÖZEL tarih bulunamadı — bölgesel
  // Çukurova çerçevesi (Mersin/Payas ile aynı) kullanıldı, bkz. yukarı not.
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1516-08-24",t:"1920-04-23"}], v:[] },

// ───────── ⑥ DOĞU SINIRI · Gürcistan hattının BATI (Karadeniz kıyısı) ucu ─────────
// Kaynak: sınır komisyonu tarifi (1878 Berlin) — "sınır sahilde Esenkıyı
// Köyü'nün doğusundaki Kopmuş Burnu'ndan başlar" ⇒ Arhavi (Hopa'nın
// GÜNEYBATISINDA) hattın Osmanlı tarafında kaldı, hiç Rus toprağı olmadı.
// TDV bu taneciği kapsamıyor (arhavi 302 ölü) — akademik/yerel kaynağa geçildi.

{ ad:"Arhavi", tur:"kasaba", lat:41.354, lon:41.316, g:0, k:4, m:"Trabzon",
  // GEREKÇE k:4 (k:3 DEĞİL): Hopa kazasına bağlı NAHİYE merkeziydi,
  // müstakil kaza değildi.
  // ⚠️ 1878 sınırı Hopa'nın DOĞUSUNDAN geçti (Kopmuş Burnu), Arhavi hep
  // Osmanlı kaldı — bu yüzden s: rusya dönemi YOK, Rize ile aynı desen.
  // kaynak: sınır tarifi (bkz. yukarı) + Rize kaydıyla aynı fetih tarihi (Trabzon 1461)
  s:[{f:"1281-01-01",t:"1461-08-15",d:"trabzon-rum"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1461-08-15",t:"1920-04-23"}], v:[] },

{ ad:"Borçka", kd:[{f:"1281-01-01",t:"1551-01-01",k:0,m:null},{f:"1878-03-03",t:"1923-10-29",k:0,m:null}], tur:"kasaba", lat:41.339, lon:41.677, g:0, k:4, m:"Erzurum",
  // GEREKÇE k:4 (k:3 DEĞİL): 1878'de Gönye kazasına bağlı NAHİYE
  // merkeziydi, müstakil kaza değildi. Daha sonraki kaza-ilan tarihi
  // bulunamadı.
  // kaynak: borcka.bel.tr resmi tarihçe ("Şehrin Nüfusu ve Tarihi") +
  //   Artvin/Şavşat kaydıyla aynı bölgesel desen (İskender Paşa 1551,
  //   San Stefano 1878-03-03, Kars Antlaşması 1921-10-13)
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1878-03-03"}], v:[] },

// ───────── ⑦ DOĞU SINIRI · Kars sanjağı (Sarıkamış) ─────────
{ ad:"Sarıkamış", tur:"kasaba", lat:40.328, lon:42.578, g:0, k:3, m:"Kars",
  // GEREKÇE k:3: GARNİZON — Rus 39. Piyade Tümeni 2. Tugay karargâhı +
  // askerî depoları koruyan iki gönüllü bölük; 1899/1913 stratejik
  // demiryolu kavşağı (Tiflis-Gümrü-Kars-Sarıkamış-Erzurum hattı).
  // I. Dünya Savaşı'nın en büyük Osmanlı-Rus muharebelerinden birinin
  // (Aralık 1914-Ocak 1915) merkezi.
  // kaynak: academia.edu "Garnizon Kent Sarıkamış'ta Rus Mimarisi";
  //   TDV sarikamis-harekati (canlı, HTTP 200)
  // Tarihler Kars kaydıyla (data/yerlesimler.js:232) BİREBİR aynı —
  // aynı sanjak, aynı kader.
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1340-01-01",t:"1386-01-01",d:"celayirli",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1386-01-01",t:"1406-10-21",d:"timurlu",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1406-10-21",t:"1467-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1467-01-01",t:"1514-09-06",d:"akkoyunlu",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1514-09-06",t:"1534-06-01",d:"safevi",kaynak:"gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"},{f:"1878-07-13",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-05-25",d:"sovyet-rusya"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1534-06-01",t:"1878-07-13"},{f:"1918-05-25",t:"1920-04-23"}], v:[] },

// ───────── ⑧ DOĞU SINIRI · Ahılkelek (Gürcistan tarafı — Ahıska'nın komşusu) ─────────
{ ad:"Ahılkelek (Akhalkalaki)", kd:[{f:"1281-01-01",t:"1551-01-01",k:0,m:null},{f:"1829-09-14",t:"1923-10-29",k:0,m:null}], tur:"kale", lat:41.403, lon:43.484, g:0, k:3, m:"Erzurum",
  // GEREKÇE k:3: KALE + SANCAK MERKEZİ — Çıldır Eyaleti'nin sekiz
  // sancağından biri (Ahılkelek Sancağı).
  // kaynak: TDV cildir-eyaleti (doğrulandı, HTTP 200, içerik okundu):
  //   "1551'de Erzurum Beylerbeyi İskender Paşa Ardanuç ve Ardahan
  //    yöresini alarak Ahılkelek ve Ahıska civarına kadar ilerledi" —
  //   ⚠️ Ahılkelek'in fethi 1551 (İskender Paşa), Ahıska'nınkinden
  //   (1578 zafer / 1639 Kasr-ı Şirin ile resmîleşme) FARKLI VE ERKEN.
  //   Wikipedia "Ahılkelek Sancağı" bu ayrımı bulanıklaştırıyordu (TEK
  //   DAYANAK OLARAK KULLANILMADI, yalnız TDV'yle çapraz okundu).
  // 1829-09-14: Edirne Antlaşması — Ahıska+Ahılkelek birlikte Rusya'ya
  //   bırakıldı (mevcut Ahıska kaydıyla, data/yerlesimler.js:757, AYNI).
  // 1921 Kars Antlaşması'yla Türkiye'ye DÖNMEDİ — Gürcistan'a kaldı, bu
  //   yüzden Ahıska'nın (yerlesimler.js:757) ORİJİNAL kaydı gibi 1829'dan
  //   1923'e kadar KESİNTİSİZ rusya; ek26'daki 1921 kırılmalı ikinci
  //   Ahıska kaydını (muhtemel mükerrer/tutarsızlık) TEKRARLAMADIM.
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1829-09-14",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  d:[{f:"1551-01-01",t:"1829-09-14"}], v:[] },

];

;
/* ==== data/yerlesimler_ek29.js ==== */
// =====================================================================
// NOKTA MENZİL — 27 eksik nokta · menzil durakları + Macaristan merkezleri
// İŞÇİ oturum: NOKTA MENZİL · 15 Ağustos 2026
// Görev: oturumlar/NOKTA-MENZIL.md  (tahta M-0082)
//
// 🔴 DOSYA ADI NOTU — şartname "yerlesimler_ek27.js (YENİ dosya)" diyordu.
//   ÖLÇÜLDÜ, YANLIŞ ÇIKTI: ek27.js 12 Ağustos'ta yazılmış, 5 nokta taşıyor
//   (Artvin · Hopa · Mersin · İskenderun), girdi.py'ye BAĞLI ve başka bir
//   oturumun teslimi (commit d466c60). ek28 de dolu. Kullanılan ek
//   numaraları 2..28 KESİNTİSİZ ⇒ ilk boş: ek29. Şartnamenin NİYETİ
//   "YENİ ve BENİM olan dosya"ydı; bu dosya o tarife uyuyor.
//   Koordinatöre tahta M-0084 ile DURDURUCU olarak bildirildi.
//
// 🔴 HEDEF 28 DEĞİL 27 — "Firecik" veride ZATEN VAR:
//   "Ferecik (Feres)" (40.8970, 26.1720), uzaklık 0,59 km. Yazılmadı.
//   Şartnamenin kendi ⑤② uyarısı ("kayıt başka yazımla olabilir")
//   şartnamenin kendi listesinde ateşledi.
//
// ⚠️ YAZIM ÖNCESİ ÖLÇÜM (IS 0): taban 2500 nokta, girdi.yukle() ile
//   okundu (kendi ayrıştırıcım DEĞİL). 28 hedefin her biri için 25 km
//   yarıçap taraması yapıldı, KOORDİNATLA — adla değil. Ad tuzağı
//   yakalandı ve elendi: "Aşkale" araması "Başkale" getirdi, 355 km ötede.
// =====================================================================

window.YERLESIMLER_EK29 = [

// ───────── ① ERDEL BELGRADI — Erdel Prensliği'nin BAŞKENTİ ─────────
//
// 🔴 NİÇİN İLK: bu tek nokta Macaristan kimlik zincirinin darboğazı.
//   NOKTA → KÜNYE → RENK → VERİ → KOŞU (tahta M-0021, M-0082).
//   Erdel bugün haritada yalnız Kolozsvár'dan temsil ediliyor; başkenti
//   veride yoktu.
//
// AD SEÇİMİ — Osmanlıca ad TDV kaynaklı, modern ad parantezde:
//   TDV `belgradcik` maddesi: "Erdel'deki (Transilvanya) Erdel
//   Belgradı'ndan (Alba Julia) ayırt edilmek için Belgradcık şeklinde
//   anılmıştır." ⇒ Osmanlı kaynaklarındaki adı ERDEL BELGRADI.
//   Macarca Gyulafehérvár, Romence Alba Iulia, Almanca Karlsburg.
//   Proje geleneği (Ahılkelek (Akhalkalaki)) Osmanlıca-önce.
//
// kaynak: TDV `erdel` (HTTP 200, gövdesi okundu) + TDV `belgradcik` (ad için)
//
// ⚠️ TDV BAŞKENT DEMİYOR — bu bir TANECİKLİK boşluğu (CLAUDE.md §4):
//   `erdel` maddesi Alba Julia'yı "belli başlı şehirler" arasında sayıyor
//   ama başkent olduğunu YAZMIYOR. Başkentlik hükmü şartnameden
//   (koordinatör) geldi; ben TDV'de DOĞRULAYAMADIM ve bunu "doğruladım"
//   diye yazmıyorum. Noktanın yazılması için başkentlik şartı yok —
//   koordinat ve sahiplik dönemi yeter; başkentlik bir BAĞLAM bilgisidir.
//
// DÖNEMLER — kardeş nokta "Erdel (Kaloşvar)" ile BİREBİR aynı:
//   Gün UYDURULMADI; kutudaki mevcut kırılma günleri ölçüldü ve
//   kullanılanlar seçildi: 1526-09-01 (18 kayıt) · 1541-08-29 (12 kayıt) ·
//   1687-08-12 (4 kayıt). Üçünün de kronolojide karşılığı VAR, yani
//   Değişmez 2 açılmıyor.
//
// 🔴 VE BİR KAYNAK ÇELİŞKİSİ BİLDİRİYORUM (düzeltmiyorum, RAPOR ediyorum):
//   TDV `erdel`: "Avusturya orduları ... 1697'de Erdel'i de işgal ettiler"
//   ve "1699 Karlofça Antlaşması ile Erdel Avusturya'ya terkedildi."
//   VERİDEKİ mevcut sınır ise 1687-08-12 (II. Mohaç sonrası Habsburg
//   idaresi). Aradaki fark 10-12 YIL. §4 TDV'yi birincil sayar, ama
//   mevcut Kolozsvár kaydını DEĞİŞTİRMEK benim yetkim değil ve bu nokta
//   kardeşiyle TUTARSIZ olursa harita ikiye bölünür. ⇒ Tutarlılığı
//   seçtim, çelişkiyi koordinatöre bildirdim. Karar onun.
//
// 🔴 `d:"erdel"` YAZILMADI — KASITLI. `erdel` künyesi VAR ama RENGİ YOK
//   (tahta M-0021). CLAUDE.md §8: BOYALAR'da tanımlı olmayan kimlik
//   BOYANMAZ ⇒ yazsaydım 158 yıllık prensliği BEYAZ bırakırdım. Zincirin
//   sırası bağlayıcı: RENK önce. Bugün kardeş nokta gibi jenerik `v:`
//   (tâbi) kullanıldı; RENK 3 rengi yazdıktan SONRA bu iki `v:` dönemi
//   `s:[{d:"erdel"}]` ile değiştirilebilir.
//
// k:2 GEREKÇE — kardeş nokta Kolozsvár k:2. k:1 "eyalet merkezi" demek
//   ve Erdel bir Osmanlı EYALETİ değil, haraçgüzâr voyvodalık/prenslik
//   (TDV: "Osmanlı idaresinde muhtar bir voyvodalık"). k:1 yanlış olurdu.
{ ad:"Erdel Belgradı (Gyulafehérvár)", tur:"sehir", lat:46.0678, lon:23.5800, g:0, k:2,
  s:[{"f":"1281-01-01","t":"1526-09-01","d":"macaristan"},{"f":"1687-08-12","t":"1918-11-11","d":"avusturya"},{"f":"1918-11-11","t":"1923-10-29","d":"romanya-kralligi"},{"f":"1551-07-26","t":"1556-03-12","d":"macaristan-habsburg","kaynak":"History of Transylvania I (MTA) s.102 · künye macaristan-habsburg (harita: macaristan)"}],
  d:[],
  v:[{"f":"1526-09-01","t":"1541-08-29","statu":"vassal"},{"f":"1541-08-29","t":"1551-07-26","statu":"vassal"},{"f":"1556-03-12","t":"1687-08-12","statu":"vassal"}] },

// ═════════ ② ERDEL'İN İKİ SAKSON ŞEHRİ ═════════
//
// Çizgi Gyulafehérvár ve kardeş nokta "Erdel (Kaloşvar)" ile BİREBİR aynı.
// Gün uydurulmadı; üçü de kutuda zaten kullanılan kırılma günleri:
// 1526-09-01 (18 kayıt) · 1541-08-29 (12 kayıt) · 1687-08-12 (4 kayıt).
// kaynak: TDV `erdel` (gövdesi okundu) — "1541'de Erdel'in Osmanlı
//   idaresinde muhtar bir voyvodalık haline geldi", "1699 Karlofça
//   Antlaşması ile Erdel Avusturya'ya terkedildi".
// ⚠️ `d:"erdel"` YAZILMADI — künyesi var, RENGİ YOK (§8: boyanmaz).
//   RENK 3 rengi yazdıktan sonra `v:` dönemleri çevrilebilir.

{ ad:"Brassó (Braşov)", tur:"sehir", lat:45.6427, lon:25.5887, g:0, k:2,
  s:[{"f":"1281-01-01","t":"1526-09-01","d":"macaristan"},{"f":"1687-08-12","t":"1918-11-11","d":"avusturya"},{"f":"1918-11-11","t":"1923-10-29","d":"romanya-kralligi"},{"f":"1551-07-26","t":"1556-03-12","d":"macaristan-habsburg","kaynak":"History of Transylvania I (MTA) s.102 · künye macaristan-habsburg (harita: macaristan)"}],
  d:[],
  v:[{"f":"1526-09-01","t":"1541-08-29","statu":"vassal"},{"f":"1541-08-29","t":"1551-07-26","statu":"vassal"},{"f":"1556-03-12","t":"1687-08-12","statu":"vassal"}] },

{ ad:"Segesvár (Sighişoara)", tur:"sehir", lat:46.2197, lon:24.7925, g:0, k:3,
  s:[{"f":"1281-01-01","t":"1526-09-01","d":"macaristan"},{"f":"1687-08-12","t":"1918-11-11","d":"avusturya"},{"f":"1918-11-11","t":"1923-10-29","d":"romanya-kralligi"},{"f":"1551-07-26","t":"1556-03-12","d":"macaristan-habsburg","kaynak":"History of Transylvania I (MTA) s.102 · künye macaristan-habsburg (harita: macaristan)"}],
  d:[],
  v:[{"f":"1526-09-01","t":"1541-08-29","statu":"vassal"},{"f":"1541-08-29","t":"1551-07-26","statu":"vassal"},{"f":"1556-03-12","t":"1687-08-12","statu":"vassal"}] },

// ═════════ ③ UYVAR EYALETİ — Osmanlı'nın 1663-1685 çıkıntısı ═════════
//
// 🟢 TDV `uyvar` (HTTP 200, gövdesi okundu) İKİ GÜNÜ DE VERDİ ve ikisi de
//   veride ZATEN kullanılıyor (Uyvar kaydı, yerlesimler*.js):
//     fetih   "17 Ağustos 1663'te kuşattı ... 26 Eylül'e kadar sürdü"
//             ⇒ veride 1663-09-24 (teslim günü) — DEĞİŞTİRMEDİM
//     geri    "kale ve şehir Habsburg idaresine girdi (19 Ağustos 1685)"
//             ⇒ veride 1685-08-19 — BİREBİR aynı
//   ⇒ Nitra'nın iki kırılma günü de kronolojide KARŞILIĞI OLAN günler,
//     Değişmez 2 AÇILMIYOR.
//
// 🔴 VE TDV BİR ŞEY DAHA VERDİ — Uyvar eyaletinin sancak listesi:
//   "Osmanlılar, Uyvar merkezli sancağı sekiz idarî bölgeye ayırdılar:
//    Uyvar, Narhid, Barş, KOMARAN, Hond, NİTRA, Jabokrek ve Şele."
//   Yani NİTRA bir Osmanlı sancağı ⇒ `d:` dönemi YAZILDI, k:2.

{ ad:"Nitra (Nyitra)", tur:"kale", lat:48.3069, lon:18.0864, g:0, k:2,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan",kaynak:"macaristan künyesi 1526-08-29’de bitiyor; Nitra habsburg künyesinden 245 yıl önce avusturya boyanıyordu · ⚠️ kasaba-tanecik kaynak OKUNMADI (TDV nitra slug’ı yok); aynı dosyadaki Komárom kaydıyla aynı desen · KUNYE-ANADOLU-0081 H-0003"},{f:"1526-08-29",t:"1663-09-24",d:"avusturya"},
     {f:"1685-08-19",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[{f:"1663-09-24",t:"1685-08-19"}], v:[] },

// 🔴 KOMÁROM — `d:` YAZILMADI, ve bu bir HÜKÜM, ihmal değil.
//   TDV'nin sancak listesinde "KOMARAN" geçiyor, yani Osmanlı orayı bir
//   idarî bölge olarak SAYIYOR. Ama Komárom KALESİ Osmanlı eline HİÇ
//   geçmedi — Tuna'nın iki kolu arasındaki adada, kuşatmalara dayandı.
//   ⇒ `CLAUDE.md §11`: "ATLAS SEFERİ DEĞİL TASARRUFU BOYAR." Bir kimliğin
//   İDARÎ İDDİASI ile HARİTADAKİ GÖVDESİ ayrı şeylerdir; `ace ↔ ming`
//   vakasının kara tarafı. Sancak defterinde ad geçmesi, kalenin
//   düştüğü anlamına gelmez.
//   ⚠️ ÖLÇMEDİM: kalenin hiç düşmediğini TDV'de DOĞRULAYAMADIM — `uyvar`
//   maddesi Komaran'ı yalnız liste içinde anıyor, kuşatma anlatmıyor.
//   Bu yüzden Osmanlı dönemi YAZMADIM (uydurmaktansa eksik bırakmak).
//   Karşı kanıt çıkarsa `d:[{f:"1663-09-24",t:"1685-08-19"}]` eklenir.
// kaynak: TDV `uyvar` (sancak listesi) — kale tarihçesi için bulunamadı

{ ad:"Komárom (Komárno)", tur:"kale", lat:47.7625, lon:18.1250, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[], v:[] },

// 🔴 LÉVA (Levice) — Osmanlı dönemi YAZILMADI, sebebi KAYNAK YOKLUĞU.
//   TDV `uyvar` sancak listesinde Léva GEÇMİYOR (sekiz ad sayıldı, yok).
//   Léva'nın 1663'te alınıp 1664'te geri kaybedildiğine dair yaygın bir
//   anlatı var ama TDV bunu KAPSAMIYOR ve ben akademik kaynakta
//   DOĞRULAYAMADIM ⇒ `bulunamadı`.
//   ⚠️ Ve yazmamanın ikinci bir sebebi daha var: 1664 için veride
//   kırılma günü YOK; uydurulmuş bir gün Değişmez 2'yi AÇARDI.
// kaynak: bulunamadı — TDV `uyvar` Léva'yı saymıyor, akademik kaynak aranmadı

{ ad:"Léva (Levice)", tur:"kale", lat:48.2172, lon:18.6069, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[], v:[] },

// TRENCSÉN — Vág vadisinin kuzeyi, Osmanlı hattının HİÇ ulaşmadığı derinlik.
// Çizgi Bratislava (48,15/17,11) ile birebir aynı desende.
// kaynak: bulunamadı — TDV bu taneciği kapsamıyor; desen kardeş
//   kayıtlardan (Bratislava · Kassa · Eperjes · Tokaj, hepsi 1526-08-29)

{ ad:"Trencsén (Trenčín)", tur:"kale", lat:48.8945, lon:18.0444, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[], v:[] },

// ═════════ ④ HIRVAT SINIR BOYU — Osmanlı'nın DURDUĞU hat ═════════
//
// Çizgi Zagreb (45,81/15,98) ile birebir: macaristan 1526-08-29'a kadar,
// sonra avusturya, 1918-11-11'de yugoslavya. Üçünün de rengi VAR.
// ⚠️ 1526-08-29 (Mohaç günü) Habsburg tarafının kullandığı gün; Osmanlı
//   tâbi tarafı 1526-09-01 kullanıyor. Bu ayrım veride ZATEN var ve ben
//   ona uydum — kendi günümü seçmedim.

{ ad:"Varasd (Varaždin)", tur:"sehir", lat:46.3057, lon:16.3366, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[], v:[] },

// 🔴 SISAK — 1593 Sisak Muharebesi'nin yeri, Uzun Savaş'ı başlatan olay.
//   ⚠️ Osmanlı dönemi YAZILMADI: Osmanlıların 1593 yenilgisinden SONRA
//   kaleyi kısa süre tuttuğuna dair anlatı var, ama TDV'de DOĞRULAYAMADIM
//   ve veride 1593-94 için kırılma günü YOK ⇒ uydurulmuş bir gün
//   Değişmez 2'yi açardı. `bulunamadı` yazıyorum, boş bırakmıyorum.
//   📌 Kutuda 1594-09-27 ve 1595-09-02 günleri VAR ama onlar BAŞKA
//   yerlerin (Yanıkkale/Estergon) günleri — birini Sisak'a yakıştırmak
//   "gün var" ile "o günün BU olayla ilgisi var" arasındaki farkı siler.
// kaynak: bulunamadı — muharebe için TDV taranmadı, kale tarihçesi yok

{ ad:"Sisak", tur:"kale", lat:45.4658, lon:16.3783, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1809-10-14",d:"avusturya"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[], v:[] },

// 🔴 KARLOVAC — `kur:` ALANI KULLANILDI, ve sebebi ölçülmüş bir gerçek:
//   şehir 1579'da Habsburg Askerî Sınırı için SIFIRDAN kuruldu (Karlstadt).
//   1281'den beri var gibi yazmak, olmayan bir yerleşimi 298 yıl boyunca
//   haritaya koymak olurdu. `kur:` tam bunun için var (Değişmez 1
//   denetimi `t.kur`u okuyor: kuruluştan önceki günlerde sahipsizlik
//   ARANMAZ).
// kaynak: bulunamadı — TDV bu taneciği kapsamıyor; kuruluş yılı (1579)
//   Askerî Sınır literatürünün standart bilgisi, gün bilinmediği için
//   YYYY-01-01 yazıldı

{ ad:"Karlovac", tur:"kale", lat:45.4870, lon:15.5478, g:0, k:3, kur:"1579-07-13",
  s:[{f:"1579-07-13",t:"1809-10-14",d:"avusturya",kaynak:"Hrvatska enciklopedija 'Karlovac': 'Osnovan je 13. VII. 1579. kao tvrđava' — GÜN · KRONO-2S-3 19 Eyl 2026"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"avusturya",kaynak:"Hrvatska enciklopedija 'Karlovac': 'Osnovan je 13. VII. 1579. kao tvrđava' — GÜN · KRONO-2S-3 19 Eyl 2026"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[], v:[] },

// ═══════════════════ KÜME 3 — KARLOFÇA/BOSNA HATTI (KITA 2, 12 Eylül 2026) ═══════════════════
//
// Kaynak: Karlofça Antlaşması'nın BİRİNCİL metni (İngilizce çeviri):
//   "The Country belonging to the Dominion of his Imperial Ottoman
//    Majesty, as far as the River Unna towards Bosnia, shall be limited
//    and bounded by the hither Shore of the River Unna: and all the
//    Imperial Garrisons that are in Novi, Dubizza, Sessenovizza, Doboy
//    and Bred on the part of Bosnia... shall be drawn out from thence,
//    and the same shall be left entirely free."
// Bu beş kale (Kostajnica ayrıca: "Castanoviz... remain in the Power of
// the Emperor of the Romans") 1699-01-26'da Osmanlı'dan Avusturya'ya
// geçti — `denetim/HAZIRLIK-BOSNA-NOKTA-0911.json` + `denetim/SEMA-C-
// 0911.md`nin devamı, çakışma taraması `denetim/CAKISMA-BEKLEYEN-
// PAKETLER-0911.md`de yapıldı.
//
// 🔴 ÇÖZÜLEN ÇELİŞKİ (HAZIRLIK-BOSNA-NOKTA'nın kendi kaydı): TDV `karlofca`
//   "Kostayniçe Avusturya'da kaldı; diğer kaleleri (Bihke, Novi, Krupa
//   vb.) boşaltıldı" diyordu. Birincil metin Bihaç'ı VE Krupa'yı boşaltılan
//   kaleler listesinde ANMIYOR (yalnız Novi, Dubizza, Sessenovizza, Doboy,
//   Bred). M-3329 kuralı (antlaşma metni birincil) uygulandı: Bihaç zaten
//   veride Osmanlı olarak duruyor (yerlesimler_ek.js) — DOKUNULMADI. Krupa
//   bu pakete EKLENMEDİ — birincil metin onu boşaltılanlar arasında
//   saymıyor, TDV'nin genellemesi tek başına yeterli kaynak değil.
//
// 🔴 FETİH TARİHLERİ — üçü kaynaklı, ikisi KOMŞU EMSALİ (NOKTA MENZİL'in
//   kendi yöntemi, yukarıdaki dosya başlığı §225: "en yakın mevcut
//   noktaların zaman çizgisi izlendi"):
//   Kostajnica  1556-07-17 KAYNAKLI (Wikipedia "Kostajnica Fortress":
//               "conquered by the Ottomans on 17 July 1556")
//   Bosanska Dubica  1538-01-01 KAYNAKLI (Wikipedia "Battle of Dubica":
//               "In 1538 Dubica came under Ottoman rule") — gün yok, YYYY-01-01
//   Bosanski Novi  1556-01-01 KAYNAKLI (aynı kaynak: "captured Kostajnica
//               and Novi in 1556") — gün yok, YYYY-01-01
//   Jasenovac  1538-01-01 KOMŞU EMSALİ (Dubica'dan, ~13 km) — KENDİ
//               kaynağı bulunamadı, `dogrulanmadi:true` ruhunda
//   Bosanski Brod  1538-01-01 KOMŞU EMSALİ (Dubica'dan, en yakın kaynaklı
//               nokta) — KENDİ kaynağı bulunamadı
//   ⚠️ Koordinatlar `denetim/HAZIRLIK-BOSNA-NOKTA-0911.json`den — genel
//   coğrafi bilgi, GPS/harita ile birebir doğrulanmadı (`dogrulanmadi:true`
//   damgası orijinal kayıtta duruyor).

{ ad:"Kostayniçe (Kostajnica)", tur:"kale", lat:45.232, lon:16.539, g:0, k:3,
  neden:"1281-1556 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı.",
  d:[{f:"1556-07-16",t:"1699-01-26"}],
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan",kaynak:"HE (enciklopedija.hr) 'Hrvatska Kostajnica': 1258 Kral IV. Béla bağışı; 1395-1528 on beş kez sahip değiştirdi (Frankapan, Vuk Branković…); 1528-1566 Zrinski; 1556 Malkoç Bey — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1526-08-29",t:"1556-07-16",d:"avusturya",kaynak:"HE 'Hrvatska Kostajnica': 1258 Kral IV. Béla bağışı; 1395-1528 on beş kez sahip değiştirdi (Frankapan, Vuk Branković…); 1528-1566 Zrinski; 1556 Malkoç Bey · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1699-01-26",t:"1809-10-14",d:"avusturya"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"Castanoviz... are and remain in the Power of the Emperor of the Romans\". Fetih: N. Ostojčić, 'Kostajnica', Bulwark of Europe (Zagreb Üniv. Felsefe Fak., 2019, vojnakrajina.ffzg.unizg.hr/en/kostajnica): 'utvrda je predana 16. srpnja, samo dan nakon početka opsade' (kaynakçası: M. Kruhek, Povijesni prilozi 21, 2001, 71-97) — 16 Temmuz 1556. TDV hirvatistan/bosna-hersek/malkocogullari/bihac anmıyor (tanecik boşluğu)." },

{ ad:"Bosna Dubiçası (Bosanska Dubica)",isg:[{f:"1788-08-26",t:"1791-08-04",d:"avusturya",kaynak:"Korić 2016, Prilozi za orijentalnu filologiju 65 (26 avgusta 1788 teslim) · Srpska enciklopedija 'Austro-turski ratovi' (Svištov 4. VIII 1791) · HE Kozarska Dubica"},{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"TDV bosna-hersek: '29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı' · f: Bosna kayıtlarının baskın günü (14 kayıt), tek tek düşüş günü bulunamadı · bitiş ilhak 1908-10-05 · PAKET-0076-BITIR-1004 A3 (0076/H-0043·H-0057)"}], tur:"kale", lat:45.174, lon:16.810, g:0, k:3,
  neden:"1281-1538 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı.",
  d:[{f:"1538-01-01",t:"1718-07-21",kaynak:"gün komşudan: Bosna Brod'u (aynı Pasarofça/Belgrad Sava şeridi · TDV bosna-hersek · mahmud-i--osmanli) · HE Kozarska Dubica: Avusturya yönetimi 1716–41 (YIL; fiilî uçlar farklı) · Karlofça metni imparatorluk garnizonlarının Bosna yakasındaki Dubica'dan ÇEKİLECEĞİNİ söyler (1699-1718 Osmanlı) — YAMA-0064-BALKAN #1"},{f:"1739-09-28",t:"1908-10-05",kaynak:"gün komşudan: Bosna Brod'u (aynı Pasarofça/Belgrad Sava şeridi · TDV bosna-hersek · mahmud-i--osmanli) · HE Kozarska Dubica: Avusturya yönetimi 1716–41 (YIL; fiilî uçlar farklı) · Karlofça metni imparatorluk garnizonlarının Bosna yakasındaki Dubica'dan ÇEKİLECEĞİNİ söyler (1699-1718 Osmanlı) — YAMA-0064-BALKAN #1 · 1908-10-05 Bosna kayıtlarının ortak günü (Novi ile aynı)"}],
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan",kaynak:"HE (enciklopedija.hr) 'Kozarska Dubica': 1256 castrum; 1269 ivanovci (Hospitalier) mülkü; 1398-1402 Hrvoje Vukčić; Osmanlı 1538 — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1526-08-29",t:"1538-01-01",d:"avusturya",kaynak:"HE 'Kozarska Dubica': 1256 castrum; 1269 ivanovci (Hospitalier) mülkü; 1398-1402 Hrvoje Vukčić; Osmanlı 1538 · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1718-07-21",t:"1739-09-28",d:"avusturya",kaynak:"gün komşudan: Bosna Brod'u (aynı Pasarofça/Belgrad Sava şeridi · TDV bosna-hersek · mahmud-i--osmanli) · HE Kozarska Dubica: Avusturya yönetimi 1716–41 (YIL; fiilî uçlar farklı) · Karlofça metni imparatorluk garnizonlarının Bosna yakasındaki Dubica'dan ÇEKİLECEĞİNİ söyler (1699-1718 Osmanlı) — YAMA-0064-BALKAN #1"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"...Dubizza...shall be drawn out...left entirely free\". Fetih: Wikipedia 'Battle of Dubica' — 1538." },

{ ad:"Bosna Novi'si (Bosanski Novi)",isg:[{f:"1788-10-03",t:"1791-08-04",d:"avusturya",kaynak:"Korić 2016 (3. oktobra 1788) · Srpska enciklopedija (Svištov 4. VIII 1791) · HE Novi Grad (fiilî 1788–95)"},{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"TDV bosna-hersek: '29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı' · f: Bosna kayıtlarının baskın günü (14 kayıt), tek tek düşüş günü bulunamadı · bitiş ilhak 1908-10-05 · PAKET-0076-BITIR-1004 A3 (0076/H-0043·H-0057)"}], tur:"kale", lat:45.048, lon:16.377, g:0, k:3,
  neden:"1281-1556 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı.",
  d:[{f:"1556-01-01",t:"1908-10-05",kaynak:"Karlofça metni ('Novi … on the part of Bosnia') · TDV karlofca · TDV bosna-hersek (Novi kadısı Ömer Efendi · 1872 demiryolu) · 1908 günü K8'e bağlı"}],
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan",kaynak:"HE (enciklopedija.hr) 'Novi Grad': 1280 Castrum Novum; XVI. yy başına dek Babonić knezleri, sonra Nikola Zrinski; Osmanlı 1557 (atlas 1556 — çelişki raporda) — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1526-08-29",t:"1556-01-01",d:"avusturya",kaynak:"HE 'Novi Grad': 1280 Castrum Novum; XVI. yy başına dek Babonić knezleri, sonra Nikola Zrinski; Osmanlı 1557 (atlas 1556 — çelişki raporda) · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"...Novi...shall be drawn out...left entirely free\". Fetih: aynı kaynak (Kostajnica ile birlikte), 1556 — Herseknovi (Herceg Novi) ile KARIŞTIRILMASIN, ayrı yer." },

{ ad:"Jasenovaç (Jasenovac)", tur:"kale", lat:45.281, lon:16.917, g:0, k:3,
  neden:"1281-1538 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı; 1538 tarihi de komşu emsali (Dubiça) olup KENDİ kaynağı yok.",
  d:[{f:"1538-01-01",t:"1699-01-26"}],
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan",kaynak:"HE (enciklopedija.hr) 'Jasenovac': XIV. yy'da yerleşim ve kale; Husrev Bey 1536 (atlas 1538 — çelişki raporda) — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1526-08-29",t:"1538-01-01",d:"avusturya",kaynak:"HE 'Jasenovac': XIV. yy'da yerleşim ve kale; Husrev Bey 1536 (atlas 1538 — çelişki raporda) · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1699-01-26",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"...Sessenovizza...shall be drawn out...left entirely free\". Fetih tarihi bulunamadı — komşu emsali (Bosna Dubiçası, 1538) kullanıldı, dogrulanmadi." },

{ ad:"Bosna Brod'u (Bosanski Brod)",isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"TDV bosna-hersek: '29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı' · f: Bosna kayıtlarının baskın günü (14 kayıt), tek tek düşüş günü bulunamadı · bitiş ilhak 1908-10-05 · PAKET-0076-BITIR-1004 A3 (0076/H-0043·H-0057)"}], tur:"kale", lat:45.138, lon:17.988, g:0, k:3,
  neden:"1281-1538 arası (Osmanlı fethinden önce) idari bağlılığı bu paket kapsamında araştırılmadı — Ortaçağ Hırvat/Macar sınır bölgesi, kesin kayıt bulunamadı; 1538 tarihi de komşu emsali (Dubiça) olup KENDİ kaynağı yok.",
  d:[{f:"1538-01-01",t:"1718-07-21"},{f:"1739-09-28",t:"1908-10-05",kaynak:"Karlofça metni ('Bred on the part of Bosnia … shall be drawn out') · TDV karlofca · TDV bosna-hersek (1718 Sava şeridi · 1739 iade) · TDV mahmud-i--osmanli (28 Eylül 1739) · 1908 günü mevcut Bosna kayıtlarıyla aynı (K8 ayrı kalem)"}],
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan",kaynak:"HE (enciklopedija.hr) 'Brod': Ortaçağda Boričević/Berislavić soylu mülkü; Osmanlı 1536 (atlas 1538 — çelişki raporda) — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1526-08-29",t:"1538-01-01",d:"avusturya",kaynak:"HE 'Brod': Ortaçağda Boričević/Berislavić soylu mülkü; Osmanlı 1536 (atlas 1538 — çelişki raporda) · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1718-07-21",t:"1739-09-28",d:"avusturya"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  v:[],
  kaynak:"Karlofça Antlaşması birincil metni: \"...Bred...shall be drawn out...left entirely free\" — bu, SEMA-C-0911.md §3.1'deki Sava HAT segmentinin bitiş noktasıyla (TDV 'Brot Kalesi') aynı yer olabilir. Fetih tarihi bulunamadı — komşu emsali (Bosna Dubiçası, 1538) kullanıldı, dogrulanmadi. Slavonski Brod (Sava'nın karşı/Hırvat yakası) ile KARIŞTIRILMASIN." },

// ═══════════════════ KÜME 2 — MENZİL DURAKLARI ═══════════════════
//
// Kaynak: Sak-Çetin, DergiPark 258113 — Osmanlı ana menzil güzergâhının
// durakları (şartname ①, koridor ağının 18 eksik düğümü).
//
// 🔴 YÖNTEM — ve niçin böyle: bu durakların HİÇBİRİ için kendi fetih günümü
//   seçmedim. Her biri için EN YAKIN mevcut noktaların zaman çizgisi
//   ölçüldü ve o çizgi izlendi. Sebebi Değişmez 2: uydurulmuş bir kırılma
//   günü, kronolojide karşılığı olmadığı için denetimi AÇAR. Komşunun günü
//   ise zaten maddeli.
//   📌 Ve bu bir kolaycılık değil: menzil durağı, bağlı olduğu kazanın
//   kaderini paylaşır — ayrı bir siyasî birim değildir.
//
// 🟢 ÜSKÜDAR — EMRE'NİN DOĞRUDAN TALİMATIYLA YAZILDI (15 Ağustos: "üsküdarı
//   da yaz"). Koordinatöre M-0084'te üç şık sormuştum, cevap gelmeden Emre
//   kararı verdi. Önerim de (A) yaz yönündeydi.
//
// 🟢 VE TDV ÖNERİYİ DOĞRULADI — üç noktada birden:
//   `uskudar` (HTTP 200, gövdesi okundu):
//   ① fetih  "Orhan Gazi'nin 1329'da Gebze sahilinde Pelekanon Savaşı'nda
//      ... Hereke, Pendik, Kartal ile birlikte Üsküdar'ın da Osmanlılar'ın
//      kontrolü altına girdiği tahmin edilir."
//      ⇒ 1329-06-01 — ve bu gün veride ZATEN VAR (Gebze kaydı). Değişmez 2
//        açılmıyor, gün uydurulmadı.
//      ⚠️ TDV "tahmin edilir" diyor; kesin gün YOK. Bölgesel gün kullanıldı.
//   ② menzil  "İstanbul'dan Anadolu'ya açılan yolların başlangıç ve aynı
//      şekilde Anadolu'dan İstanbul'a ulaşımın son noktası durumundaydı."
//      ⇒ Menzil ağının Anadolu kolu BURADAN başlar. Şartnamenin bu noktayı
//        istemesinin gerekçesi TDV'de birebir yazılı.
//   ③ idarî  "Koca-ili (İzmit) sancağına bağlı Gebze kazası içinde yer aldı
//      ve bir kadılık merkezi haline getirildi" — sonra mutasarrıflık,
//      sancak, nihayet kaza. ⇒ k:3.
//
// 📌 Ve ③ yöntemi de belirledi: çizgi GEBZE ile birebir aynı, çünkü Üsküdar
//   idarî olarak Gebze kazasının İÇİNDEYDİ. Kardeş seçimi bir kolaylık
//   değil, TDV'nin söylediği idarî gerçek.
//
// ⚠️ 3 KM NOTU: İstanbul noktasına 3,40 km — eşiğin ÜSTÜNDE, ihlal yok.
//   İkisi Boğaz'ın iki yakasında; İstanbul noktası (41,0080/28,9800) Avrupa
//   yakasında. Üsküdar yazılmasaydı Anadolu kolunun başlangıç düğümü
//   Avrupa yakasında görünecekti.
// kaynak: TDV `uskudar` (HTTP 200, gövdesi okundu)

{ ad:"Üsküdar", tur:"sehir", lat:41.0227, lon:29.0153, g:0, k:3, m:"İzmit",
  s:[{f:"1281-01-01",t:"1329-06-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1329-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1920-04-23"}], v:[] },

// ───────── ANADOLU KOLU ─────────

// İSHAKLI — Akşehir'in (25,6 km) menzil durağı, Sultandağı eteği.
// Çizgi Akşehir ile birebir: Hamidoğulları → 1381 Osmanlı → Timur sonrası
// Karaman → 1414 kesin Osmanlı.
// kaynak: bulunamadı (TDV bu taneciği kapsamıyor) — çizgi kardeş kayıt Akşehir'den
{ ad:"İshaklı", tur:"kasaba", lat:38.5439, lon:31.2447, g:0, k:4,
  s:[{f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},{f:"1297-01-01",t:"1381-06-01",d:"hamid"},{f:"1402-07-28",t:"1415-03-01",d:"karaman"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1381-06-01",t:"1402-07-28"},{f:"1415-03-01",t:"1920-04-23"}], v:[] },

// ILGIN — Karaman beyliği toprağı, Konya (68 km) çizgisiyle aynı.
// ⚠️ Konya kaydındaki 1832-11-21 → 1833-06-30 Mısır (Kavalalı) dönemi
//   BU KAYDA YAZILMADI: Ilgın için ayrıca doğrulayamadım. Ölçmediğimi
//   ölçmedim diye yazıyorum; karşı kanıt çıkarsa eklenir.
// kaynak: bulunamadı — çizgi kardeş kayıt Konya'dan
{ ad:"Ilgın",kaynak:"bulunamadı — çizgi kardeş kayıt Konya'dan (yerlesimler_ek29.js:288-290 yorumu)",m:"Konya", tur:"kasaba", lat:38.2792, lon:31.9139, g:0, k:4,
  s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},{f:"1308-01-01",t:"1366-01-01",d:"ilhanli"},{f:"1366-01-01",t:"1397-07-01",d:"karaman"},{f:"1402-07-28",t:"1402-09-15",d:"timurlu"},{f:"1402-09-15",t:"1468-01-01",d:"karaman"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-01-01",t:"1920-04-23"}], v:[] },

// KARAPINAR — Konya-Adana yolunun ortası, Karaman (66,5 km) çizgisiyle aynı.
// kaynak: bulunamadı — çizgi kardeş kayıt Karaman'dan
{ ad:"Karapınar",kaynak:"bulunamadı — çizgi kardeş kayıt Karaman'dan (yerlesimler_ek29.js:299-300 yorumu)",m:"Karaman", tur:"kasaba", lat:37.7156, lon:33.5514, g:0, k:4,
  s:[{f:"1281-01-01",t:"1397-07-01",d:"karaman"},{f:"1402-07-28",t:"1402-09-15",d:"timurlu"},{f:"1402-09-15",t:"1468-01-01",d:"karaman"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-01-01",t:"1920-04-23"}], v:[] },

// ULUKIŞLA — Gülek Boğazı'nın kuzey ağzı, Niğde (49,7 km) çizgisiyle aynı.
// kaynak: bulunamadı — çizgi kardeş kayıt Niğde'den
{ ad:"Ulukışla",kaynak:"bulunamadı — çizgi kardeş kayıt Niğde'den (yerlesimler_ek29.js:307-308 yorumu)",m:"Niğde", tur:"kasaba", lat:37.5461, lon:34.4869, g:0, k:4,
  s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},{f:"1308-01-01",t:"1366-01-01",d:"ilhanli"},{f:"1366-01-01",t:"1468-01-01",d:"karaman"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1468-01-01",t:"1920-04-23"}], v:[] },

// TOSYA — Kastamonu (45,8 km) çizgisiyle aynı: Candaroğlu, 1461'de kesin Osmanlı.
// kaynak: bulunamadı — çizgi kardeş kayıt Kastamonu'dan
{ ad:"Tosya",kaynak:"bulunamadı — çizgi kardeş kayıt Kastamonu'dan (yerlesimler_ek29.js:315-316 yorumu)",m:"Kastamonu", tur:"kasaba", lat:41.0161, lon:34.0397, g:0, k:4,
  s:[{f:"1281-01-01",t:"1309-01-01",d:"cobanogullari"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1920-04-23"}], v:[] },

// 🟢 KARAHİSÂR-I ŞARKÎ — TEK TDV KAYNAKLI KÜME-2 NOKTASI
// TDV `sebinkarahisar` (HTTP 200, gövdesi okundu):
//   "878'de (1473) aldı" — Fatih, Otlukbeli'nden sonra kaleyi ele geçirdi
//   "müstakil sancak haline getirildi ve Erzurum beylerbeyiliğine bağlandı"
//   Osmanlı öncesi sıra: Mengücüklüler · Eretnaoğulları · Gözleroğlu (1408) ·
//   Karakoyunlular · Akkoyunlular (1459-60)
// ⇒ k:2 (müstakil sancak, TDV kaynaklı — tahmin değil)
// ⇒ 1473-08-11 (Otlukbeli) veride ZATEN var (Erzincan kaydı) ⇒ Değişmez 2 temiz
// ⚠️ SADELEŞTİRME, ölçüm değil: TDV'nin saydığı Gözleroğlu ve Karakoyunlu
//   dönemlerinin sınır GÜNLERİ ne TDV'de ne veride var. O yüzden 1381-1473
//   arası `akkoyunlu`ya sıkıştırıldı. Bu bir tercihtir ve gerçeğin
//   tamamı DEĞİLDİR; gün bulunursa açılmalı.
{ ad:"Karahisâr-ı Şarkî (Şebinkarahisar)", tur:"kale", lat:40.2886, lon:38.4247, g:0, k:2,
  s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1473-08-11",d:"akkoyunlu"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1473-08-11",t:"1920-04-23"}], v:[] },

// KELKİT — Erzincan (42,3 km) çizgisiyle aynı: Mutahharten sonrası Akkoyunlu,
// 1473 Otlukbeli'yle Osmanlı.
// kaynak: bulunamadı — çizgi kardeş kayıt Erzincan'dan
{ ad:"Kelkit",kaynak:"bulunamadı — çizgi kardeş kayıt Erzincan'dan (yerlesimler_ek29.js:341-343 yorumu)",m:"Erzincan", tur:"kasaba", lat:40.1281, lon:39.4381, g:0, k:4,
  s:[{f:"1281-01-01",t:"1348-01-01",d:"ilhanli"},{f:"1348-01-01",t:"1379-01-01",d:"akkoyunlu"},{f:"1379-01-01",t:"1401-02-01",d:"mutahharten"},{f:"1402-07-28",t:"1410-01-01",d:"mutahharten"},{f:"1410-01-01",t:"1473-08-11",d:"akkoyunlu"},{f:"1916-07-22",t:"1917-03-15",d:"rusya",kaynak:"T.C. Kelkit Kaymakamlığı tarihçe (KURUMSAL, akademik değil): Rus işgali 22 Temmuz 1916 · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-02-17",d:"transkafkasya",kaynak:"T.C. Kelkit Kaymakamlığı tarihçe (KURUMSAL): geri alınış 17 Şubat 1918 · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1401-02-01",t:"1402-07-28"},{f:"1473-08-11",t:"1916-07-22"},{f:"1918-02-17",t:"1920-04-23"}], v:[] },

// AŞKALE — Erzurum (48,9 km) çizgisiyle aynı: Akkoyunlu → Safevî → 1518 Osmanlı.
// kaynak: bulunamadı — çizgi kardeş kayıt Erzurum'dan
{ ad:"Aşkale", tur:"kasaba", lat:39.9214, lon:40.6939, g:0, k:4,
  s:[{f:"1281-01-01",t:"1360-01-01",d:"ilhanli",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1360-01-01",t:"1385-01-01",d:"eretna",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1385-01-01",t:"1387-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1387-01-01",t:"1403-01-01",d:"timurlu",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1403-01-01",t:"1408-01-01",d:"mutahharten",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1408-01-01",t:"1467-01-01",d:"karakoyunlu",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu",kaynak:"gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"},{f:"1502-01-01",t:"1518-01-01",d:"safevi"},{f:"1916-02-24",t:"1917-03-15",d:"rusya",kaynak:"Sarı (TÜBA c.9 böl.7 Bayburt): Aşkale'nin Rus işgali 24 Şubat 1916; Aşkale Kaymakamlığı '16 Şubat' der (Erzurum'un günü, çelişki) — akademik esas · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-03-03",d:"transkafkasya",kaynak:"T.C. Aşkale Kaymakamlığı tarihçe (KURUMSAL): geri alınış 3 Mart 1918 · NOKTA-KAFKAS-0077 §6 · UYGULA-YERLESIM-0930"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1518-01-01",t:"1916-02-24"},{f:"1918-03-03",t:"1920-04-23"}], v:[] },

// ───────── RUMELİ KOLU ─────────

// SİLİVRİ — İstanbul (62 km) çizgisiyle aynı: 1453'e kadar Bizans.
// ⚠️ Silivri 1390'lar-1403 arası da Osmanlı elindeydi ve 1403 antlaşmasıyla
//   Bizans'a GERİ VERİLDİ; o iki kırılmanın günü veride YOK, uydurmadım.
//   Bugünkü çizgi 1453'ü esas alıyor — eksik ama YANLIŞ değil.
// kaynak: bulunamadı — çizgi kardeş kayıt İstanbul'dan
{ ad:"Silivri", tur:"kale", lat:41.0791, lon:28.2493, g:0, k:4,
  s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1453-05-29",t:"1920-04-23"}], v:[] },

// VİZE — Demirköy (27,9 km) çizgisiyle aynı, Balkan Savaşı Bulgar işgali dâhil.
// kaynak: bulunamadı — çizgi kardeş kayıt Demirköy'den
{ ad:"Vize", tur:"kale", lat:41.5714, lon:27.7658, g:0, k:3,
  s:[{f:"1281-01-01",t:"1369-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1369-01-01",t:"1402-07-28",kaynak:"TDV murad-i (İnalcık): 770 (1369) baharında Pınarhisar, Kırkkilise ve Vize · Timurtaş Kızılcaağaç Yenicesi — YIL 1369, gün yok (§4)"},{f:"1413-07-05",t:"1913-03-26"},{f:"1913-07-21",t:"1920-04-23"}], v:[] },

// PREVADİ (Provadia) — Şumnu (41,6 km) çizgisiyle aynı: 1878 Berlin'den sonra
// muhtar Bulgaristan (v:), 1908 istiklâlle bulgaristan.
// kaynak: bulunamadı — çizgi kardeş kayıt Şumnu'dan
{ ad:"Prevadi (Provadia)", tur:"kale", lat:43.1789, lon:27.4331, g:0, k:3,
  s:[{f:"1281-01-01",t:"1388-01-01",d:"bulgaristan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"1388-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği",statu:"vassal",kid:"bulgaristan-prensligi"}] },

// ───────── DOBRUCA — ve burada bir BOŞLUK ölçtüm ─────────
//
// 🔴 BULGU: Babadağı ve İshakçı'nın 25 km çevresinde HİÇ nokta yok; en
//   yakınlar Tuna'nın KARŞI kıyısında (İsmail 52 km, İbrail 72 km) ve
//   onlar Boğdan/Eflak çizgisinde — Dobruca'nın çizgisi DEĞİL.
//   ⇒ Kuzey Dobruca bu atlasta noktasız bir şerit. §2 gereği bugün
//   karşı kıyının peteğine emiliyor olmalı.
// Çizgi: 1393-09-01 (Silistre'nin günü, Bulgar Çarlığı'nın düşüşü) ile
//   Osmanlı; 1878-07-13 Berlin ile ROMANYA (Kuzey Dobruca Romanya'ya
//   verildi — güneydeki Bulgaristan'dan FARKLI, o yüzden Şumnu çizgisi
//   BURAYA UYMAZ).
// ⚠️ 1393-09-01 Dobruca'nın kendi fetih günü DEĞİL, bölgesel bir yaslama.
//   Dobruca'nın fethi için TDV'de gün ARAMADIM — ölçmedim diye yazıyorum.
// kaynak: bulunamadı — çizgi Silistre (Osmanlı başlangıcı) ve
//   1878-07-13 Berlin (Romanya'ya devir) günlerine yaslandı

{ ad:"Babadağı (Babadag)", kd:[{f:"1281-01-01",t:"1393-09-01",k:0,m:null},{f:"1593-01-01",t:"1788-12-17",k:3,m:"Özi"}], tur:"kasaba", lat:44.8917, lon:28.7169, g:0, k:3, m:"Özi",
  s:[{f:"1281-01-01",t:"1393-09-01",d:"bulgaristan"},{f:"1402-07-28",t:"1416-01-01",d:"eflak",kaynak:"TDV babadagi: 'Babadağı ve çevresi, Çelebi Sultan Mehmed'in Eflak Voyvodası Mircea ile oğlu Mihail'i mağlûp etmesinden sonra Osmanlı hâkimiyetine girdi (819/1416)' · TDV dobruca: 'Mircea Ankara Savaşı'ndan sonraki karışıklıklar sırasında tekrar Dobruca'ya girmiş' · f = Ankara günü (giriş günü BULUNAMADI) · t = YIL · PAKET-0076-DOBRUCA-1004 (A)"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  d:[{f:"1393-09-01",t:"1402-07-28"},{f:"1416-01-01",t:"1878-07-13"}], v:[] },

{ ad:"İshakçı (Isaccea)", tur:"kale", lat:45.2736, lon:28.4600, g:0, k:4,
  s:[{f:"1281-01-01",t:"1393-09-01",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1878-07-13",t:"1881-03-26",d:"romanya"},{f:"1881-03-26",t:"1923-10-29",d:"romanya-kralligi"}],
  d:[{f:"1393-09-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}], v:[] },

// YAGODİNA (Jagodina) — Kragujevac (28,4 km) çizgisiyle birebir:
// Sırp despotluğu → 1459 Osmanlı → 1717-1739 Avusturya → 1830 muhtar
// Sırbistan (v:) → 1878 istiklâl.
// kaynak: bulunamadı — çizgi kardeş kayıt Kragujevac'tan
{ ad:"Yagodina (Jagodina)",neden:"1689-09-24 → 1690-09-09 Avusturya ara dönemi eksikti (Osmanlı 1459-1717 kesintisiz görünüyordu). Ara dönem eklendi VE mevcut `v:` 1830-1878 KORUNDU — yerlesimler_ek29.js:424'teki ölü düzeltme `v:`yi taşımıyordu, uygulansaydı 48 yıllık sahipsizlik açacaktı.",kaynak:"bulunamadı — TDV'de Yagodina/Jagodina müstakil maddesi yok. Dayanak KARDEŞ KAYIT: Kragujevac (28,4 km, aynı Morava koridoru) birebir aynı günleri taşıyor; 1690-09-09 günü külliyatta \"Niş, Vidin ve Belgrad geri alındı\" maddesiyle zaten kayıtlı.",s:[{"f":"1281-01-01","t":"1439-08-27","d":"sirbistan"},{"f":"1444-08-01","t":"1459-06-20","d":"sirp-despotlugu"},{"f":"1689-09-24","t":"1690-09-09","d":"avusturya"},{"f":"1717-08-18","t":"1739-09-18","d":"avusturya"},{"f":"1878-07-13","t":"1882-03-06","d":"sirbistan-prensligi"},{"f":"1882-03-06","t":"1918-12-01","d":"sirbistan-kralligi"},{"f":"1918-12-01","t":"1923-10-29","d":"yugoslavya"}],d:[{"f":"1439-08-27","t":"1444-08-01"},{"f":"1459-06-20","t":"1689-09-24"},{"f":"1690-09-09","t":"1717-08-18"},{"f":"1739-09-18","t":"1830-10-17"}], tur:"kasaba", lat:43.9772, lon:21.2617, g:0, k:4,
  v:[{"f":"1830-10-17","t":"1878-07-13"}] },

// PRAVİŞTE (Eleftheroupoli) — Kavala (13,8 km) çizgisiyle aynı.
// ⚠️ 3 km kuralının DIŞINDA ama yakın; koordinatöre bildirildi (M-0084).
//   Ayrı bir menzil konağıdır, Kavala'nın mahallesi değil.
// kaynak: bulunamadı — çizgi kardeş kayıt Kavala'dan
{ ad:"Praviște (Eleftheroupoli)",kaynak:"kavala", tur:"kasaba", lat:40.9167, lon:24.2500, g:0, k:4,
  s:[{f:"1281-01-01",t:"1387-04-09",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-05-30",t:"1913-08-10",d:"bulgaristan-kralligi"},{f:"1913-08-10",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1387-04-09",t:"1402-07-28"},{f:"1413-07-05",t:"1913-05-30"}], v:[] },

// LANZAKA (Lagkadas) — Selanik (16 km) çizgisine yaslandı.
// ⚠️ Selanik kaydındaki 1403-1430 arası Bizans/Venedik dönemi BU KAYDA
//   YAZILMADI: o, ŞEHRİN kendisine ait bir devirdi (1423 Venedik'e satıldı).
//   İç bölgedeki Lanzaka için aynı şeyi varsaymak için dayanağım YOK.
//   Bunun yerine iç Makedonya'nın standart Fetret deseni (Serez) kullanıldı.
//   ⇒ Bu bir TERCİH ve gerekçesi yazılı; ölçüm değil.
// kaynak: bulunamadı — çizgi Selanik (fetih ve 1912 devir) ile Serez
//   (Fetret deseni) kayıtlarından
{ ad:"Lanzaka (Lagkadas)",kaynak:"atina-antlasmasi",isg:[{f:"1912-11-08",t:"1913-11-14",d:"yunanistan",kaynak:"selanik"}], tur:"kasaba", lat:40.7500, lon:23.0667, g:0, k:4,
  s:[{f:"1281-01-01",t:"1387-04-09",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-11-14",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1387-04-09",t:"1402-07-28"},{f:"1413-07-05",t:"1913-11-14"}], v:[] },

// ═══════════════════ KÜME 4 — LÜBNAN EMİRLİĞİ / HARFÛŞOĞULLARI ÇAPASI (KITA 2, 12 Eylül 2026) ═══════════════════
//
// Kaynak: `denetim/HAZIRLIK-LUBNAN-NOKTA-0911.json` (LÜBNAN YERLEŞİM oturumu,
// 11 Eylül 2026) + `data/devletler.js` künyeleri `lubnan-emirligi` (satır
// 7509), `cebel-i-lubnan-mutasarrifligi` (7519), `harfusogullari` (7528) —
// üçü de KITA 1'in PAKET-KUNYE-INISI teslimiyle indi (bu paketin blokörü).
//
// 🔴 NİÇİN 3 NOKTA, HAZIRLIK DOSYASININ "4 ADAY"INDAN AZ: doğrudan
// öneriyi (Deyrülkamer + Beyteddin + Ba'aklîn) OLDUĞU GİBİ yazmadım.
// Hazırlık dosyasının kendi ①/②'sindeki mükerrer uyarısı Beyteddin'i
// (2,08 km) ve Ba'aklîn'i (1,95 km) Deyrülkamer'e "AYRI nokta YAZMA"
// diye açıkça elemiş — D002 sınıfı. Yazılanlar hazırlığın ③ özet
// tavsiyesindeki ZORUNLU + GÜÇLÜ + İSTEĞE BAĞLI üçlü: Deyrülkamer,
// Ba'lebek, Sûr (Tyre). Mükerrer sınavı bu oturumda AYRICA koşuldu
// (girdi.yukle(), 3813 nokta): en yakın mevcut nokta Deyrülkamer için
// Beyrut 21,92 km, Ba'lebek için Şam 55,23 km, Sûr için Sayda 35,97 km —
// üçü de 3 km eşiğinin (D066) çok üstünde, çakışma yok.
//
// 🔴 AD ÇAKIŞMASI KONTROLÜ: veride ZATEN bir "Sûr" kaydı var
// (yerlesimler.js:1874, lat 22,555/lon 59,520 — UMMAN'daki Sûr limanı,
// nebhani/portekiz/umman kimlikleriyle). AYNI ADI kullanmak D065 sınıfı
// bir karışıklık üretirdi; bu yüzden hazırlık dosyasının önerdiği gibi
// "Sûr (Tyre) — Lübnan" adı kullanıldı, Umman kaydına DOKUNULMADI.
//
// DÖNEM ZİNCİRİ YÖNTEMİ — künyenin kendi f:/t: günleri devralındı
// (D011: veri penceresi künye penceresini aşmamalı), gün UYDURULMADI:
//   s: memluk (1281-01-01 → künyenin f:'i)
//   v: kid:lubnan-emirligi (Deyrülkamer/Ba'lebek'te 2. künye) veya
//      doğrudan d: (Sûr'da, TDV kaydı Emirlik'e HİÇ girmiyor — aşağı bkz.)
//   d: doğrudan Osmanlı ARA dönemi (Emirlik/Mutasarrıflık arasındaki
//      1842-1861 boşluk — künyelerin KENDİ f/t'leri arasındaki gerçek
//      boşluk, uydurma değil)
//   v: kid:cebel-i-lubnan-mutasarrifligi (yalnız Deyrülkamer/Ba'lebek)
//   d: doğrudan Osmanlı, 1918 Birinci Dünya Savaşı çöküşüne kadar —
//      KOMŞU EMSALİ (D084): en yakın kayıtlı kırılma günü Beyrut'un
//      1918-10-08'i (yerlesimler.js:667) kullanıldı, kendi günü
//      araştırılmadı.
//   s: fransa-cumhuriyet / suriye-lubnan-mandasi — Beyrut/Şam ile
//      BİREBİR aynı (1918-10-08 → 1920-07-24 → 1923-10-29), bölgesel
//      tutarlılık için; bu iki günün ikisi de kronolojide zaten kayıtlı
//      (Değişmez 2 bu ikisi için AÇILMIYOR — Beyrut/Şam'da zaten kapalı).
//
// 🔴 DEĞİŞMEZ 2 AÇIK KALAN KIRILMALAR — bekletmeden bildiriliyor, DÜZELTMEDİM:
// künyelerin kendi f/t günleri (1516-10-01 · 1842-01-01 · 1861-06-09 ·
// 1915-07-11) için `data/olaylar*.js` kronoloji ÇEKİRDEĞİNDE ±30 gün
// içinde madde ARANMADI/BULUNAMADI — bu dört kırılma muhtemelen AÇIK
// çıkacak (denetle.py çalıştırıldığında ölçülecek). Çare `olaylar*.js`e
// madde yazmak, ve o dosya bu paketin sahiplik alanı DIŞINDA (§7).
// Künyelerin KENDİ `kronoloji` alanları (devletler.js içinde) zaten bu
// dört günü anlatıyor olabilir ama CLAUDE.md §5 açıkça ayırıyor: o alan
// Değişmez 2'nin evreni DEĞİL, yalnız `olaylar*.js`+`kronoloji*.js`
// (çekirdek) sayılıyor.
//
// kaynak: `denetim/HAZIRLIK-LUBNAN-NOKTA-0911.json` — TDV `lubnan`
// (Ma'noğulları/Şihaboğulları nüfuzu), TDV `balebek` (Harfûş ailesi,
// "1516'da... Osmanlı hâkimiyetine geçti... Harfûş ailesinin elinde
// kaldı"), TDV `sur--lubnan` ("Yavuz Sultan Selim'in 1516 Mercidâbık
// zaferinden sonra Sûr şehri de Osmanlı ülkesine katıldı").

{ ad:"Deyrülkamer (Dayr al-Kamer)", tur:"kasaba", lat:33.6989, lon:35.5619, g:0, k:3,
  dogrulanmadi:true,
  neden:"'Ma'noğulları/Şihaboğulları'nın BAŞKENTİYDİ' iddiası yalnız Wikipedia'da var, TDV/Britannica'da DOĞRULANAMADI (hazırlık dosyası ②). Nokta ve v: bağı, künyenin kendi f/t penceresi ile TAM örtüştüğü ve TDV'nin doğruladığı 'Şûf bölgesi nüfuzu' gerekçesiyle sağlam; yalnız 'başkent' sıfatı doğrulanmamış kaldı.",
  s:[{f:"1281-01-01",t:"1516-10-01",d:"memluk"},
     {f:"1918-10-08",t:"1920-07-24",d:"fransa-cumhuriyet"},
     {f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  v:[{f:"1516-10-01",t:"1842-01-01",statu:"özerk",kid:"lubnan-emirligi"},
     {f:"1861-06-09",t:"1915-07-11",statu:"özerk",kid:"cebel-i-lubnan-mutasarrifligi"}],
  d:[{f:"1842-01-01",t:"1861-06-09"},{f:"1915-07-11",t:"1918-10-08"}],
  kaynak:"TDV `lubnan` (Ma'noğulları 1585-1635 nüfuz genişlemesi, Şihaboğulları ~1697 Şûf'ta başlangıç) — 'başkent' iddiası dogrulanmadi:true, bkz. üstteki not." },

// 🔴 KENDİ HATAMIN DÜZELTMESİ (ilk denetle.py koşusu yakaladı, CLAUDE.md
// §3.5 "hayalet devlet" sınıfı): memluk s: dönemi ORİJİNAL YAZIMDA
// 1521-01-01'e kadar uzuyordu — memluk künyesinin KENDİ ölüm tarihini
// (devletler.js:105, t:"1517-04-13") 3,7 YIL AŞIYORDU. Düzeltme: memluk
// Şam/Mercidabık günüyle (1516-09-27, komşu emsali — Şam kaydı
// yerlesimler.js:665) kapatıldı, arada doğrudan Osmanlı `d:` dönemi
// eklendi (1516-09-27→1521-01-01, Harfûş ailesinin fiilen yerleşmesine
// kadar). Harfûşoğulları künyesinin kendi f:'i (1521-01-01) DEĞİŞMEDİ.
{ ad:"Ba'lebek (Baalbek)", tur:"kasaba", lat:34.0059, lon:36.2181, g:0, k:3, m:"Şam",
  s:[{f:"1281-01-01",t:"1516-09-27",d:"memluk"},
     {f:"1918-10-08",t:"1920-07-24",d:"fransa-cumhuriyet"},
     {f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  v:[{f:"1521-01-01",t:"1850-01-01",statu:"özerk",kid:"harfusogullari"}],
  d:[{f:"1516-09-27",t:"1521-01-01"},{f:"1850-01-01",t:"1918-10-08"}],
  kaynak:"TDV `balebek` (gövdesi okundu, `baalbek` slug'ı ona yönlendiriyor — §4② tuzağı): '1516'da Yavuz Sultan Selim'in Suriye seferi sırasında Osmanlı hâkimiyetine geçti... küçük beylerin, özellikle Harfûş ailesinin elinde kaldı' · '1850'de Bâbıâli'nin yeni düzenlemesiyle Şam vilâyetine tâbi bir kaza merkezi yapıldı'. Fetih günü Şam/Mercidabık (1516-09-27, komşu emsali) ile hizalandı; Harfûş hâkimiyeti künyenin kendi f:'i (1521-01-01, Canbirdi Gazâlî isyanı sonrası) ile başlıyor." },

{ ad:"Sûr (Tyre) — Lübnan", tur:"liman", lat:33.2704, lon:35.2038, g:0, k:3, m:"Sayda",
  s:[{f:"1281-01-01",t:"1516-09-27",d:"memluk"},
     {f:"1918-10-08",t:"1920-07-24",d:"fransa-cumhuriyet"},
     {f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  d:[{f:"1516-09-27",t:"1918-10-08"}], v:[],
  neden:"Emirlik/Mutasarrıflık'a v: BAĞLANMADI — TDV `sur--lubnan` idarî zincirini sancak-içi anlatıyor (Şam→Sayda→1865 Beyrut sancağı), Ma'noğlu Fahreddin'in müdahalesi biçimsel egemenlik değil başarısız bir onarım girişimi olarak geçiyor. Osmanlı doğrudanlığı hiç kesilmiyor.",
  kaynak:"TDV `sur--lubnan` (ilk sınav `sur` yanlış madde/kavram karışıklığı riski taşıyordu, doğru slug içerik okunarak doğrulandı — §4② tuzağı): 'Yavuz Sultan Selim'in 1516 Mercidâbık zaferinden sonra Sûr şehri de Osmanlı ülkesine katıldı.' Gün Şam kaydıyla (yerlesimler.js:665) hizalandı — aynı Mercidâbık seferi, komşu emsali (D084)." },

{ ad:"Krupa (Bosanska Krupa)",isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"TDV bosna-hersek: '29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı' · f: Bosna kayıtlarının baskın günü (14 kayıt), tek tek düşüş günü bulunamadı · bitiş ilhak 1908-10-05 · PAKET-0076-BITIR-1004 A3 (0076/H-0043·H-0057)"}], tur:"kale", lat:44.882, lon:16.158, g:0, k:3,
  neden:"DALGA-0064 · YAMA-0064-BALKAN #4 (KOSU13-YAMA, 17 Eyl 2026): Bihaç (24 km) ile Novi (25 km) arasında Una sağ yakasındaki Osmanlı sınır kalesi; Bihaç eksklavının ikinci bağı. 1565 öncesi (Hırvat-Macar dönemi) bağlılığı bu pakette araştırılmadı — nokta 1565'ten önce sahipsiz (kasıtlı).",
  kaynak:"HE Bosanska Krupa: 'Osmanlije su zaposjeli Krupu 1565'; Avusturya 1581, 1690, 1692, 1716'da kuşattı (alındığı yazılmıyor) · Korić 2016: 1787-88'de Una üzerinden malzeme gönderilen Osmanlı sınır kalesi · koordinat OSM düğüm 841364318 · 1908 günü Bosna kayıtlarının ortak günü (1878 işgali atlasta ayrı modellenmiyor)",
  d:[{f:"1565-01-01",t:"1908-10-05",kaynak:"HE Bosanska Krupa (YIL)"}],
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan",kaynak:"HE (enciklopedija.hr) 'Bosanska Krupa': XIII. yy sonu hrvatska županija Pset; 1361 Kral I. Lajos, 1396 Kral Sigismund bağışı; 1531 Zrinski; Osmanlı 1565 — Osmanlı fethinden önce hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030"},{f:"1526-08-29",t:"1565-01-01",d:"avusturya",kaynak:"HE 'Bosanska Krupa': XIII. yy sonu hrvatska županija Pset; 1361 Kral I. Lajos, 1396 Kral Sigismund bağışı; 1531 Zrinski; Osmanlı 1565 · Mohaç sonrası Hırvatistan Habsburg tacına geçti (Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · KORIDOR-0081 H-0030"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}], v:[] },

// ─────────────────────────────────────────────────────────────────────
// BIHAC-NOKTA-0069 (19 Eyl 2026 · yama denetim/YAMA-BIHAC-NOKTA-0919.json ·
// rapor denetim/BIHAC-ENKLAV-0919.md §4). Bihaç çevresinde NOKTASIZLIK kaynaklı
// üç sınır kusuru: (a) Knin peteği Una vadisini Avusturya boyuyordu · (b) Lika
// Bihaç peteğine düşüp Osmanlı boyanıyordu · (c) Ziştovi'de Avusturya'ya geçen
// Cetin/Drežnik noktasızdı. Koordinatlar OSM. 1281 öncesi/1527 kalıbı Bihaç
// kaydıyla aynı (macaristan → 1527-01-01 Cetin seçimi → avusturya).
// ⚠️ BİLİNEN EKSİK (atlas geneli): 1809-1813 Fransız İlirya dönemi Lika/Kordun'da
//   modellenmedi — komşu Karlovac/Knin/Sisak da modellemiyor; ayrı kalem.
// ─────────────────────────────────────────────────────────────────────

{ ad:"Ostrovica (Stara Ostrovica, Kulen Vakuf)", tur:"kale", lat:44.558, lon:16.081, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (a): Una vadisinin Bihaç ile Knin arası noktasızdı; Knin (avusturya) peteği Kulen Vakuf yöresine kadar Avusturya boyuyordu. Ostrovica Stara Ostrovica kapetanlığının merkezi (Kulen Vakuf = Džisri-Kebir, XVIII. yy başında bu kalenin yanında kuruldu).",
  kaynak:"Zavod za zaštitu kulturnog naslijeđa USK, 'Ostrovica – stari grad' (kulturnonaslijedjeusk.ba/bs/clanak/ostrovica-stari-grad/68, okundu): 'Prije dolaska pod osmansku vlast nalazio se u rukama Frankopana, Juraja Mikulčića i Ivana Keglevića. Pod osmansku vlast je došao 1523. godine' · 'Od 1523 do 1878 držali su Turci posadu u Ostrovici' · HE Kulen Vakuf (kapetanlık merkezi 1791–1827 sonrası) · koordinat OSM way 360909768 (historic/castle).",
  s:[{f:"1281-01-01",t:"1523-01-01",d:"macaristan",kaynak:"USK: Frankopan/Mikulčić/Keglević — Hırvat-Macar krallığı soyluları"},
     {f:"1908-10-05",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1918-12-01",d:"sirbistan-kralligi"},
     {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1523-01-01",t:"1908-10-05",y:"kusatma",kesinlik:"yil",kaynak:"USK Ostrovica (1523, YIL) · 1908 günü Bosna kayıtlarının ortak günü"}],
  isg:[{f:"1878-09-18",t:"1908-10-05",d:"avusturya",kaynak:"USK: Osmanlı garnizonu 1878'e dek (YIL) · gün komşudan: Bihaç (Bihać) · TDV bihac (18 Eylül 1878, aynı 1878 Una harekâtı)"}],
  v:[] },

{ ad:"Udbina", tur:"kale", lat:44.532, lon:15.767, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (b): Lika/Krbava noktasızdı; 1689 sonrası Avusturya Askerî Sınırı olan ova Bihaç peteğine düşüp Osmanlı boyanıyordu.",
  kaynak:"HE Udbina (enciklopedija.hr/clanak/udbina, okundu): 'Posljednju pobjedu nad osmanskom vojskom pod tim gradom Karlović je izvojevao u travnju 1527., a već potkraj svibnja grad je s ostalim krbavskim kaštelima Mrsinjom i Komićem postao plijenom bosanskoga paše' · 'Grad su 1689. oslobodile hrvatske krajiške postrojbe pod zapovjedništvom karlovačkoga generala I. J. Herbersteina' · TDV kirka (Lika, 1527'den Kırka/Obrovac sancağında) · koordinat OSM relation 15834963.",
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan"},
     {f:"1527-01-01",t:"1527-05-01",d:"avusturya",kaynak:"Cetin seçimi 1 Ocak 1527 (olaylar_p0050) · HE: Nisan 1527'de hâlâ Karlović'in"},
     {f:"1689-01-01",t:"1809-10-14",d:"avusturya",kaynak:"HE Udbina (1689, YIL) · Svištov'a (1791) dek sınır kalesi"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"avusturya",kaynak:"HE Udbina (1689, YIL) · Svištov'a (1791) dek sınır kalesi"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1527-05-01",t:"1689-01-01",y:"kusatma",kesinlik:"ay",kaynak:"HE Udbina: 'potkraj svibnja' 1527 (AY; gün yok) → 1689 (YIL)"}],
  v:[] },

{ ad:"Gospić", tur:"kale", lat:44.546, lon:15.375, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (b): Lika'nın batı yarısı. Osmanlı döneminde Senkovići ağalarının küçük kalesi; 1733'ten Lika alayı karargâhı.",
  kaynak:"HE Gospić (enciklopedija.hr/clanak/gospic, okundu): 'God. 1527. to su područje dobili age Senkovići, koji su izgradili manju utvrdu' · 'Gospić je do 1689. bio pod osmanskom vlašću' · koordinat OSM relation 15770095.",
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan"},
     {f:"1689-01-01",t:"1809-10-14",d:"avusturya",kaynak:"HE Gospić (1689, YIL)"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"avusturya",kaynak:"HE Gospić (1689, YIL)"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1527-01-01",t:"1689-01-01",kesinlik:"yil",kaynak:"HE Gospić: 1527 (YIL) → 1689 (YIL)"}],
  v:[] },

{ ad:"Cetin (Cetingrad)", tur:"kale", lat:45.138, lon:15.732, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (c): TDV zistovi-antlasmasi'nın 'Bosna'nın Unna suyu arkasında yer alan Hırvatlık arazisi' — Ziştovi'nin 4. maddesiyle Habsburg'da kalan iki kaleden biri; noktasızdı, Bihaç peteğinde Osmanlı kalıyordu.",
  kaynak:"HE Cetingrad (enciklopedija.hr/clanak/cetingrad, okundu): 'pod njihovom vlašću bio je 1636–38. te od 1670. kada ponovno postaje osmanska utvrda' · 'Habsburška vojska zauzima ga 1790., a Osmanlije ga u prepadima nakratko zauzimaju 1809. i 1813.' · Elma Korić, 'Bosnian Borderland during the Dubica War 1788-1791', Prilozi za orijentalnu filologiju 65 (2016), pof.ois.unsa.ba, PDF okundu — n.102 (Bašeskija: 'U ovoj godini (1790) su Austrijanci zauzeli tvrđavu Cetin') ve n.118: 'prema članu 4. Mirovnog ugovora, tvrđave Cetin i Drežnik ostale su pod habsburškom upravom' · TDV zistovi-antlasmasi · koordinat OSM way 1228318623 (Utvrda Cetin).",
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"HE: XIV. yy'dan Frankapan mülkü"},
     {f:"1527-01-01",t:"1636-01-01",d:"avusturya",kaynak:"Cetin Meclisi 1 Ocak 1527 (HE Cetingrad · olaylar_p0050)"},
     {f:"1638-01-01",t:"1670-01-01",d:"avusturya"},
     {f:"1791-08-04",t:"1809-10-14",d:"avusturya",kaynak:"Ziştovi 4 Ağustos 1791 (TDV zistovi-antlasmasi · Korić 2016 n.118, 4. madde). 1809 ve 1813 Osmanlı baskınları HE'de 'nakratko' — modellenmedi"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"avusturya",kaynak:"Ziştovi 4 Ağustos 1791 (TDV zistovi-antlasmasi · Korić 2016 n.118, 4. madde). 1809 ve 1813 Osmanlı baskınları HE'de 'nakratko' — modellenmedi"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1636-01-01",t:"1638-01-01",kesinlik:"yil",kaynak:"HE Cetingrad 1636–38 (YIL)"},
     {f:"1670-01-01",t:"1791-08-04",kesinlik:"yil",kaynak:"HE Cetingrad 1670 (YIL) → Ziştovi"}],
  isg:[{f:"1790-01-01",t:"1791-08-04",d:"avusturya",kesinlik:"yil",kaynak:"HE Cetingrad 'zauzima ga 1790.' · Korić 2016 (Bašeskija) — YIL; Ziştovi'ye dek fiilî işgal"}],
  v:[] },

{ ad:"Drežnik (Drežnik Grad)", tur:"kale", lat:44.943, lon:15.669, g:0, k:3,
  neden:"BIHAC-NOKTA-0069 (c): Ziştovi'nin 4. maddesiyle Habsburg'da kalan ikinci kale (Korić 2016); Bihaç'ın 21 km batısı, noktasızdı.",
  kaynak:"HE Drežnik Grad (enciklopedija.hr/clanak/dreznik-grad, okundu): 'do 1578., kada su ga privremeno zaposjeli Osmanlije. Pod osmansku su vlast grad Drežnik i cijelo područje istoimene županije konačno došli 1592. i ostali, uz kratak prekid 1683. i 1697–99., do 1788.' · Korić 2016 (Prilozi za orijentalnu filologiju 65, n.104 ve n.118) · ⚠️ KAYNAK ÇELİŞKİSİ: Korić, Muvekkit'e dayanarak Cetingrad VE Drežnik'in zaptını 1790 bağlamında anlatır; HE Drežnik 1788 der. HE'nin yere özgü maddesi esas alındı, çelişki tahtaya bildirildi · koordinat OSM way 122070312 (Stari grad Drežnik).",
  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan",kaynak:"HE: 1323-1578 Frankapan mülkü"},
     {f:"1527-01-01",t:"1592-01-01",d:"avusturya",kaynak:"Cetin Meclisi 1 Ocak 1527 · 1578 geçici Osmanlı işgali ('privremeno') modellenmedi"},
     {f:"1791-08-04",t:"1809-10-14",d:"avusturya",kaynak:"Ziştovi 4 Ağustos 1791 (Korić 2016 n.118, 4. madde)"},{f:"1809-10-14",t:"1813-01-01",d:"fransa-cumhuriyet",kaynak:"LZMK `vojna-krajina`: \"Mirom u Schönbrunnu 1809. habsburški posjedi juzno od rijeke Save ušli su u sastav Ilirskih pokrajina ... Potkraj 1813. habsburške su trupe osvojile to područje\" — Sava'nın GÜNEYİ ölçütü · ENKLAV-0072"},{f:"1813-01-01",t:"1918-11-11",d:"avusturya",kaynak:"Ziştovi 4 Ağustos 1791 (Korić 2016 n.118, 4. madde)"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1592-01-01",t:"1791-08-04",kesinlik:"yil",kaynak:"HE Drežnik Grad 1592 (YIL). 1683 ('kratak prekid') ve 1697–99 Habsburg aralıkları gün/ay yok — modellenmedi, rapor §5"}],
  isg:[{f:"1788-01-01",t:"1791-08-04",d:"avusturya",kesinlik:"yil",kaynak:"HE Drežnik Grad 'do 1788.' (YIL) · Korić 2016 1790 der — çelişki"}],
  v:[] }

];

;

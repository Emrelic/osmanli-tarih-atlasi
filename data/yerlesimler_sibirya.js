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
  s:[{f:"1602-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Kazak bozkırı (Turgay)", tur:"bolge", lat:49.60, lon:63.50, g:0, k:0,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},{f:"1500-01-01",t:"1868-01-01",d:"kazak-hanligi"},{f:"1868-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Kazak bozkırı (Sarısu)", tur:"bolge", lat:47.00, lon:67.00, g:0, k:0,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"altinorda"},{f:"1500-01-01",t:"1868-01-01",d:"kazak-hanligi"},{f:"1868-01-01",t:"1923-10-29",d:"rusya"}] },

// ---------- ② ORTA SİBİRYA — Buryat (kuzey-yuan) · Yakut/Koryak (veri-yok) ----------
{ ad:"Buryat toprakları (Selenge havzası)", tur:"bolge", lat:53.00, lon:110.00, g:0, k:0,
  s:[{f:"1281-01-01",t:"1631-01-01",d:"kuzey-yuan"},{f:"1631-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Yakut toprakları (Orta Lena)", tur:"bolge", lat:65.00, lon:123.00, g:0, k:0,
  kasitli_bosluk:true,bos:"kabile", neden:"kabile — TDV yakutlar maddesi 1620 öncesini AÇIKÇA tartışıyor: Yakutlar 'hemen hemen bütün Lena havzası boyunca yarı uruğlar (küçük kabileler) halinde yaşıyordu', her uruğun 'kendi beyleri (toyon)' var, hepsinin başındaki idareciye 'ulu toyon' deniyor, en kuvvetli uruğ Namaslar. Kuzeye göç XIII. yüzyılda Moğol baskısıyla yoğunlaştı; Ruslar 25 Eylül 1632'de Lena Kalesi'ni kurdu. Kaynak SUSMUYOR ⇒ önceki 'veri-yok' hükmü ÇÜRÜDÜ (VERİ ZAMAN 2 ve ek31 oturumu BAĞIMSIZ olarak aynı sonuca vardı).", kaynak:"TDV yakutlar — islamansiklopedisi.org.tr/yakutlar, HTTP 200, gövde okundu; `yakut` slug 302 ÖLÜ",
  s:[] },
{ ad:"Koryak toprakları", tur:"bolge", lat:62.00, lon:166.00, g:0, k:0,
  kasitli_bosluk:true,bos:"veri-yok", neden:"veri-yok — kaynak Koryakların Rusya'ya tâbilik/haraç ilişkisini netleştirmiyor; yalnız 1769-70 kıtlık/çatışma kaybı ve 1931 Sovyet idaresi kuruluşu biliniyor",
  s:[] },

// ---------- ③ UZAK DOĞU — Kamçatka (fetih) · Çukotka (devletsiz) ----------
{ ad:"Petropavlovsk-Kamçatskiy", tur:"liman", lat:53.0113, lon:158.6514, g:1, k:3,
  kur:"1740-01-01",
  s:[{f:"1740-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Anadır (Anadyrsk)", tur:"kale", lat:64.75, lon:177.48, g:0, k:0,
  kur:"1649-01-01", kasitli_bosluk:true,bos:"devletsiz", neden:"devletsiz — kale 1649'da kuruldu ama Çukçiler hiç boyun eğmedi, haraç hiç ödenmedi (kaynağın kendi ifadesiyle \"salt biçimsel bile değil\"), 1764'te kale TERK edildi; resmî ilhak ancak Sovyet döneminde (1923 ufkunun dışında)",
  s:[] },
{ ad:"Çukotka merkezi", tur:"bolge", lat:66.00, lon:172.00, g:0, k:0,
  kasitli_bosluk:true,bos:"devletsiz", neden:"devletsiz — Anadır'la aynı gerekçe (Çukçiler hiç fethedilmedi, haraç hiç ödenmedi); yarımadanın doğu ucunu Anadır'ın peteğinin taşmasına karşı kapatıyor",
  s:[] },

];

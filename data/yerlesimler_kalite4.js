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

{ ad:"Meşkinşehr (Hiyav)", tur:"sehir", lat:38.40, lon:47.68, g:0, k:3,
  // Sasani dönemine (MS 337) kadar giden yerleşim, Azerbaycan Atabegleri
  // sikkeleriyle doğrulanmış — komşu Erdebil/Sarâb ile AYNI tam zincir.
  // kaynak: standart akademik (Encyclopaedia Iranica/Wikipedia, TDV müstakil maddesi yok)
  s:[{f:"1281-01-01",t:"1335-12-01",d:"ilhanli"},
     {f:"1335-12-01",t:"1386-01-01",d:"celayirli"},
     {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
     {f:"1406-10-21",t:"1468-04-01",d:"karakoyunlu"},
     {f:"1468-04-01",t:"1501-07-01",d:"akkoyunlu"},
     {f:"1501-07-01",t:"1736-03-08",d:"safevi"},
     {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
     {f:"1747-06-20",t:"1796-01-01",d:"zend"},
     {f:"1796-01-01",t:"1923-10-29",d:"kacar"}] },

{ ad:"Mahabad (Sâvücbulak)", tur:"sehir", lat:36.77, lon:45.72, g:0, k:3,
  kur:"1501-07-01",
  // kaynak: standart akademik — "ilk kez 16. yy'da (Safevî dönemi)
  // kaydediliyor, 17. yy'da Mükrî beyliğinin merkezi oldu" (Budak Sultan
  // Mükrî). TDV müstakil maddesi yok (`mehabad`/`savucbulak` ölü).
  s:[{f:"1501-07-01",t:"1736-03-08",d:"safevi"},
     {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
     {f:"1747-06-20",t:"1796-01-01",d:"zend"},
     {f:"1796-01-01",t:"1923-10-29",d:"kacar"}] },

{ ad:"Bâne", tur:"sehir", lat:35.99, lon:45.88, g:0, k:3,
  kur:"1501-07-01",
  // kaynak: standart akademik — Erdelan/Baban/Mükriyân Kürt beyliklerinden
  // birinin toprağı, yerel Ehtiyârüddin ailesi Safevî döneminde "sultan"
  // unvanıyla anılıyor. TDV müstakil maddesi yok.
  s:[{f:"1501-07-01",t:"1736-03-08",d:"safevi"},
     {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
     {f:"1747-06-20",t:"1796-01-01",d:"zend"},
     {f:"1796-01-01",t:"1923-10-29",d:"kacar"}] },

{ ad:"Serdeşt (Sardasht)", tur:"sehir", lat:36.16, lon:45.48, g:0, k:3,
  kur:"1501-07-01",
  // kaynak: standart akademik — Bâne ile aynı Kürt beylik kuşağı
  // (Mükriyân), Safevî-Osmanlı sınır bölgesi. TDV müstakil maddesi yok.
  s:[{f:"1501-07-01",t:"1736-03-08",d:"safevi"},
     {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
     {f:"1747-06-20",t:"1796-01-01",d:"zend"},
     {f:"1796-01-01",t:"1923-10-29",d:"kacar"}] },

{ ad:"Şerur (Sharur)", tur:"sehir", lat:39.55, lon:44.95, g:0, k:3,
  // kaynak: standart akademik — "Nahçıvan'ın en eski ve en büyük
  // yerleşimlerinden biri", 1502'de Şah İsmâil'in Safevî ordusu burada
  // savaş kazandı (Nahçıvan'ın Safevî'ye geçişiyle aynı dönem), 16-18.
  // yy Osmanlı-Safevî savaşlarında sık sık el değiştirdi. TDV müstakil
  // maddesi yok. Komşu Nahçıvan ile AYNI zincir (aynı hanlık/idari birim,
  // 1828 Türkmençay Antlaşması'yla Rusya'ya geçiyor).
  s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},
     {f:"1340-01-01",t:"1386-01-01",d:"celayirli"},
     {f:"1386-01-01",t:"1406-10-21",d:"timurlu"},
     {f:"1406-10-21",t:"1468-04-01",d:"karakoyunlu"},
     {f:"1468-04-01",t:"1501-07-01",d:"akkoyunlu"},
     {f:"1501-07-01",t:"1736-03-08",d:"safevi"},
     {f:"1736-03-08",t:"1747-06-20",d:"afsar"},
     {f:"1747-06-20",t:"1796-01-01",d:"zend"},
     {f:"1796-01-01",t:"1828-02-22",d:"kacar"},
     {f:"1828-02-22",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

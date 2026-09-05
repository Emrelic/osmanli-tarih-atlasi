// =====================================================================
// 1923 SINIRLARI — YENİ NOKTA ÖNERİLERİ (mevcut kayıt YOK)
// Kaynak: denetim/YERLESIM-1923-0905.json (M-2734/M-2756/M-2767 sevkleri)
// Oturum: 1923 SINIRLARI · local_372203f2-6e71-46d2-af5e-563a5c7eca60
//
// 🔴 YENİ NOKTA — mevcut kayıt YOK. `_sahiplik_uygula.py` bunları
//    GÜNCELLEYEMEZ (mevcut olmayan `ad:`i bulamaz) — koordinatör bunları
//    ELLE `data/yerlesimler_*.js`e ekleyecek (M-2776).
//
// Hepsi 3 km mükerrer sınavından geçti (en yakın mevcut nokta 5,27 km
// ile 264,89 km arası, girdi.yukle() ile TAM veri kümesine karşı ölçüldü).
// Tutarlılık sınavı: 6/6 — her `s:` segmenti kendi kimliğinin künye
// penceresi İÇİNDE (ayrıntı: YERLESIM-1923-0905.json `tutarlilik_sinavi`).
// =====================================================================

window.YER_YAMA_1923_YENI = [

// ── Acdîr (Ajdir) — Rif Cumhuriyeti'nin merkezi (1922-1926) ──
// Rif dönemi: TDV 'abdulkerim-el-hattabi' (CANLI, raw HTML doğrulandı) +
// Wikipedia 'Ajdir'. 1281-1921 arası BÖLGESEL ÇIKARIM (komşu el-Hüseyme
// noktasının doğrulanmış zincirinden — iç Rif köyü, hiç işgal edilmedi).
{ ad:"Acdîr (Ajdir)", tur:"koy", lat:35.200, lon:-3.917, g:0, k:2, m:null,
  s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},
     {f:"1549-01-01",t:"1659-01-01",d:"sadi"},
     {f:"1659-01-01",t:"1921-09-18",d:"fas"},
     {f:"1921-09-18",t:"1923-10-29",d:"rif-cumhuriyeti"}],
  d:[], v:[],
  kaynak:"Rif dönemi: TDV abdulkerim-el-hattabi + Wikipedia Ajdir. 1281-1921 arası: bölgesel çıkarım, doğrudan kaynak DEĞİL — komşu el-Hüseyme noktasının zincirinden.",
  neden:"" },

// ── Enval (Annual) — 22 Haziran 1921 Annual Savaşı'nın (Rif zaferi) yeri ──
// 🔴 TDV 22 Haziran diyor (raw HTML doğrulandı); Wikipedia/ICRC/HistoryNet
// 22 Temmuz diyor. §4 gereği TDV esas alındı (çelişirse TDV esastır).
{ ad:"Enval (Annual)", tur:"koy", lat:35.133, lon:-3.583, g:0, k:3, m:null,
  s:[{f:"1281-01-01",t:"1549-01-01",d:"merini"},
     {f:"1549-01-01",t:"1659-01-01",d:"sadi"},
     {f:"1659-01-01",t:"1921-09-18",d:"fas"},
     {f:"1921-09-18",t:"1923-10-29",d:"rif-cumhuriyeti"}],
  d:[], v:[],
  kaynak:"TDV abdulkerim-el-hattabi (\"22 Haziran 1921'de Annoual'da İspanyol ordusunu yenilgiye uğratması\") — ÇELİŞKİ: Wikipedia/ICRC/HistoryNet \"22 Temmuz 1921\" diyor, TDV esas alındı (§4). 1281-1921 arası: bölgesel çıkarım.",
  neden:"" },

// ── Kızıl (Belotsarsk) — Tannu Tuva'nın başkenti, 1914'te kuruldu ──
{ ad:"Kızıl (Belotsarsk)", tur:"sehir", lat:51.717, lon:94.450, g:0, k:1, m:null,
  kur:"1914-01-01",
  s:[{f:"1914-01-01",t:"1921-08-14",d:"cin-cumhuriyeti"},
     {f:"1921-08-14",t:"1923-10-29",d:"tannu-tuva"}],
  d:[], v:[],
  kaynak:"Britannica 'Tannu-Tuva' + Wikipedia 'Kyzyl'/'Tuvan People's Republic', 14 Ağustos 1921 kuruluş. 1914-1921 arası (Rusya himayesi ↔ Çin yeniden işgali) BASİTLEŞTİRİLDİ — iç geçiş kronolojisi ölçülemedi, tek blok cin-cumhuriyeti yazıldı.",
  neden:"" },

// ── Çaa-Höl — Tuva köyü, Chaa-Kholsky District ──
{ ad:"Çaa-Höl", tur:"koy", lat:51.518, lon:92.334, g:0, k:3, m:null,
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},
     {f:"1368-09-14",t:"1636-05-15",d:"kuzey-yuan"},
     {f:"1636-05-15",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1921-08-14",d:"cin-cumhuriyeti"},
     {f:"1921-08-14",t:"1923-10-29",d:"tannu-tuva"}],
  d:[], v:[],
  kaynak:"Wikipedia 'Tuva' (Moğol İmp. 1206-1271, Yuan 1271-1368) + Paul D. Buell, 'Early Mongol Expansion in Western Siberia and Turkestan (1207-1219)' — iki bağımsız kaynak. TDV denendi (mogollar+cengiz-han), konuyu kapsamıyor.",
  neden:"" },

// ── Turan — Tuva köyü, Çaa-Höl ile aynı zincir ──
{ ad:"Turan", tur:"koy", lat:52.133, lon:93.900, g:0, k:3, m:null,
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},
     {f:"1368-09-14",t:"1636-05-15",d:"kuzey-yuan"},
     {f:"1636-05-15",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1921-08-14",d:"cin-cumhuriyeti"},
     {f:"1921-08-14",t:"1923-10-29",d:"tannu-tuva"}],
  d:[], v:[],
  kaynak:"Çaa-Höl ile aynı — bkz. o kaydın kaynak notu.",
  neden:"" },

// ── Sağlı — Tuva köyü, Ovyursky District, Çaa-Höl ile aynı zincir ──
{ ad:"Sağlı", tur:"koy", lat:50.494, lon:91.331, g:0, k:4, m:null,
  s:[{f:"1281-01-01",t:"1368-09-14",d:"yuan-hanedani"},
     {f:"1368-09-14",t:"1636-05-15",d:"kuzey-yuan"},
     {f:"1636-05-15",t:"1912-02-12",d:"qing-hanedani"},
     {f:"1912-02-12",t:"1921-08-14",d:"cin-cumhuriyeti"},
     {f:"1921-08-14",t:"1923-10-29",d:"tannu-tuva"}],
  d:[], v:[],
  kaynak:"Çaa-Höl ile aynı — bkz. o kaydın kaynak notu.",
  neden:"" }

];

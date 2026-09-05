// =====================================================================
// 1923 SINIRLARI — NEPAL + ORTA AMERİKA/KARAYİP nokta yoğunlaştırma
// Kaynak: denetim/YERLESIM-NEPAL-KARAYIP-0905.json (M-2804 sevki)
// Oturum: 1923 SINIRLARI · local_372203f2-6e71-46d2-af5e-563a5c7eca60
//
// 🔴 YENİ NOKTA — mevcut kayıt YOK. `_sahiplik_uygula.py` bunları
//    GÜNCELLEYEMEZ — koordinatör ELLE `data/yerlesimler_*.js`e ekleyecek.
//
// Hepsi 3 km mükerrer sınavından geçti (girdi.yukle() ile TAM veri
// kümesine karşı ölçüldü, en yakın mevcut nokta 5,56 km ile 145,86 km
// arası). KUTU KULLANILMADI — her yer adıyla arandı.
// =====================================================================

window.YER_YAMA_1923_NEPAL_KARAYIP = [

// ── Patan (Lalitpur) — Katmandu Vadisi'nin üç Malla krallığından biri ──
// TDV 'nepal' (CANLI, raw HTML): "Nepal XV. yüzyılda Katmandu, Bhaktapur
// ve Patan adlı üç bağımsız krallığa bölündü." Mevcut `nepal` künyesi
// (f:1281, t:1923-10-29) zaten HEM üç-krallık dönemini HEM Gorkha
// birleşmesini (1768-69) TEK kimlik altında topluyor — ayrı bir dönem
// bölmeye gerek YOK.
{ ad:"Patan (Lalitpur)", tur:"sehir", lat:27.667, lon:85.325, g:0, k:2, m:null,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"nepal"}],
  d:[], v:[],
  kaynak:"TDV, madde: nepal — \"Nepal XV. yüzyılda Katmandu, Bhaktapur ve Patan adlı üç bağımsız krallığa bölündü.\" İKİNCİ kaynak: Britannica 'Prithvi Narayan Shah' — 1768'de Gorkha fethi. Mevcut `nepal` künyesi zaten bu bütünü kapsıyor.",
  neden:"" },

// ── Bhaktapur — üçüncü Malla krallığı ──
{ ad:"Bhaktapur", tur:"sehir", lat:27.671, lon:85.428, g:0, k:2, m:null,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"nepal"}],
  d:[], v:[],
  kaynak:"Patan ile aynı — bkz. o kaydın kaynak notu. Bhaktapur'un fethi (1769) Wikipedia 'Battle of Bhaktapur' ile ayrıca doğrulandı.",
  neden:"" },

// ── Cap-Haïtien (Cap-Français) — Fransız Saint-Domingue'ün ilk başkenti ──
// 1670'te kuruldu, 1770'e dek koloninin başkentiydi ("Antiller'in Parisi").
{ ad:"Cap-Haïtien (Cap-Français)", tur:"sehir", lat:19.7592, lon:-72.2074, g:0, k:1, m:null,
  kur:"1670-01-01",
  s:[{f:"1670-01-01",t:"1792-09-22",d:"fransa"},
     {f:"1792-09-22",t:"1804-01-01",d:"fransa-cumhuriyet"},
     {f:"1804-01-01",t:"1923-10-29",d:"haiti"}],
  d:[], v:[],
  kaynak:"bulunamadı — TDV kapsam dışı (haiti/dominik/guatemala hiçbiri TDV'de yok, doğrulandı). Britannica 'Cap-Haïtien' — 1670'te kuruldu, 1770'e dek Saint-Domingue başkenti. Zincir Santo Domingo'nun (data/yerlesimler_amerika.js) ZATEN VAR OLAN fransa→fransa-cumhuriyet→haiti örüntüsünü izliyor.",
  neden:"" },

// ── Port-au-Prince — 1770'ten itibaren koloni başkenti, bugünkü Haiti başkenti ──
{ ad:"Port-au-Prince", tur:"sehir", lat:18.5944, lon:-72.3074, g:0, k:1, m:null,
  kur:"1749-01-01",
  s:[{f:"1749-01-01",t:"1792-09-22",d:"fransa"},
     {f:"1792-09-22",t:"1804-01-01",d:"fransa-cumhuriyet"},
     {f:"1804-01-01",t:"1923-10-29",d:"haiti"}],
  d:[], v:[],
  kaynak:"bulunamadı — TDV kapsam dışı. Britannica/Encyclopedia.com 'Port-au-Prince' — 1749'da kuruldu, 1770'te başkent oldu (Cap-Français'den devraldı).",
  neden:"" },

// ── Santiago de los Caballeros — Dominik Cumhuriyeti'nin ikinci büyük şehri ──
// Zincir Santo Domingo'nunkiyle (aynı adanın doğu/İspanyol yakası, aynı
// siyasi tarih) BİREBİR aynı — bölgesel çıkarım değil, AYNI OLAYLARIN
// aynı adada geçtiğinin doğrudan sonucu.
{ ad:"Santiago de los Caballeros", tur:"sehir", lat:19.4517, lon:-70.6970, g:0, k:2, m:null,
  kur:"1495-01-01",
  s:[{f:"1495-01-01",t:"1795-07-22",d:"ispanya"},
     {f:"1795-07-22",t:"1809-07-09",d:"fransa-cumhuriyet"},
     {f:"1809-07-09",t:"1822-02-09",d:"ispanya"},
     {f:"1822-02-09",t:"1844-02-27",d:"haiti"},
     {f:"1844-02-27",t:"1923-10-29",d:"dominik-cumhuriyeti"}],
  d:[], v:[],
  kaynak:"bulunamadı — TDV kapsam dışı. Britannica 'Santiago de los Caballeros' — 1495'te (bazı kaynaklarda 1494) kuruldu, Kolomb'un ikinci seferinde. Zincir data/yerlesimler_amerika.js'teki 'Santo Domingo' kaydının BİREBİR aynısı — aynı adanın doğu yakası, aynı siyasi tarih.",
  neden:"" },

// ── Guatemala City (Nueva Guatemala de la Asunción) — 1776'da kurulan yeni başkent ──
{ ad:"Guatemala City (Nueva Guatemala)", tur:"sehir", lat:14.6349, lon:-90.5069, g:0, k:1, m:null,
  kur:"1776-01-02",
  s:[{f:"1776-01-02",t:"1821-09-15",d:"ispanya"},
     {f:"1821-09-15",t:"1923-10-29",d:"guatemala"}],
  d:[], v:[],
  kaynak:"bulunamadı — TDV kapsam dışı. Wikipedia + New World Encyclopedia — 2 Ocak 1776'da Ermita Vadisi'nde, 1773 depreminde yıkılan Antigua'nın yerine kuruldu.",
  neden:"" }

];

// ======================================================================
// ISKANDINAV-1115c — C dilimi (1000-1199 seyrek): Lund ve Sigtuna (UMIT, 15 Kasım 2026, üçüncü dalga)
// AD ALANI: data/yerlesimler_iskandinav_1115c.js → window.YERLESIMLER_ISKANDINAV_1115C
// BAĞLAMA: arac/girdi_listesi.py GIRDI_DOSYALARI (veri listesi, motor tuzu DEĞİL) + index.html düz <script> (paket_26'dan ÖNCE, ?v= YOK)
// Mükerrer taraması: girdi.yukle() ile normalleştirilmiş ad + 3 km — çakışma YOK (en yakın: Lund→Malmö ~17 km; Sigtuna→Uppsala ~27 km).
//
// Yazılanlar (yalnız kaynakta KESİN okunan; çıkarım yazılmadı):
//  • Lund — lex.dk «Lunds historie»: 'Fra ca. 1000 var Lund et vigtigt dansk kirkeligt og kongeligt magtcentrum';
//    'Omkring 1060 blev byen bispesæde'; 'i 1103 blev et ærkebispedømme for hele Norden oprettet med sæde i Lund'.
//    Skåne 1658 Roskilde'de İsveç'e geçti (aynı madde: 'Skåne tilfaldt Sverige'); atlas Malmö/Helsingborg/Kristianstad gibi
//    1658-03-08 (Gregoryen; Jülyen 26 Şubat) — Lund bu zincire eklendi (kayıt `Malmö` ile aynı gün).
//  • Sigtuna — Store norske leksikon «Sigtuna»: 'Sigtuna ble anlagt cirka 970'; 'Sveriges første mynter' orada basıldı;
//    'cirka 1060–1130 var byen sete for den første bispestolen'; 1187'de Baltık denizcileri tarafından yağmalandı.
//    Atlasta İsveç künyesi `isvec-birlik-oncesi` f=1000-01-01 olduğundan pencere 1000-01-01'den başlar (künye ömrü D4c).
//  • Lund 1676-12-04 Lund Savaşı (kronoloji_isvec.js) için nokta eksikti (data/yer_yama_isvec.js: 'Lund nokta havuzunda yok').
// YAZILMADI (kaynak yetmedi): Roskilde (lex.dk Roskilde/ Roskildes historie gövdesi krallık-sahipliğini vermedi),
//   Birka (terk 10. yy sonu; künye penceresi yok), Hedeby (once1281 mekanizması), Uppsala 1164 (mevcut kayıt var; ayrı iş).
// ======================================================================

window.YERLESIMLER_ISKANDINAV_1115C = [
{ ad:"Lund", tur:"sehir", lat:55.7047, lon:13.1910, g:1, k:3, d:[],
  s:[{f:"1000-01-01",t:"1658-03-08",d:"danimarka",kesinlik:{f:"yil",t:"gun"},kaynak:"Den Store Danske (lex.dk), «Lunds historie» https://lex.dk/Lunds_historie (15.11.2026 okundu): «Fra ca. 1000 var Lund et vigtigt dansk kirkeligt og kongeligt magtcentrum» · «Omkring 1060 blev byen bispesæde» · «i 1103 blev et ærkebispedømme for hele Norden oprettet med sæde i Lund» (f: 'ca. 1000' YIL). t: Roskilde Barışı — aynı madde: 'Skåne tilfaldt Sverige'; gün atlasın Roskilde günü (1658-03-08 Gregoryen = 26 Şubat 1658 Jülyen; danmarkshistorien.lex.dk 'Roskildefreden, 26. februar 1658')."},{f:"1658-03-08",t:"2000-12-31",d:"isvec",kesinlik:{f:"gun"},kaynak:"lex.dk «Lunds historie»: Roskilde 1658 'Skåne tilfaldt Sverige'; gün atlas Roskilde günü (Malmö/Helsingborg/Kristianstad ile aynı)."}],
  kaynak:"koordinat: 55,7047 K; 13,1910 D (data/yer_yama_isvec.js: Lund Savaşı noktası; standart coğrafî) · pencere kaynakları s: alanlarında · ISKANDINAV-1115c C dilimi" },
{ ad:"Sigtuna", tur:"sehir", lat:59.6174, lon:17.7233, g:0, k:3, d:[],
  s:[{f:"1000-01-01",t:"1523-06-06",d:"isvec-birlik-oncesi",kesinlik:{f:"yil",t:"gun"},kaynak:"Store norske leksikon, «Sigtuna» https://snl.no/Sigtuna (15.11.2026 okundu): «Sigtuna ble anlagt cirka 970» · Sveriges første mynter orada basıldı · «I perioden cirka 1060–1130 var byen sete for den første bispestolen» · 1187 Baltık denizcileri yağması. Pencere 1000-01-01: `isvec-birlik-oncesi` künyesi f=1000-01-01 (D4c); t=1523-06-06 künye ucu (Gustav Vasa seçimi — Uppsala/Mora ile aynı zincir)."},{f:"1523-06-06",t:"2000-12-31",d:"isvec",kesinlik:{f:"gun"},kaynak:"İsveç künyesi (isvec f=1523-06-06); Uppsala/Mora kayıtlarındaki zincirle aynı (EBSCO Research Starters 'Gustav Vasa': 6 Haziran 1523)."}],
  kaynak:"koordinat: 59,6174 K; 17,7233 D (standart coğrafî) · pencere kaynakları s: alanlarında · ISKANDINAV-1115c C dilimi" },
];

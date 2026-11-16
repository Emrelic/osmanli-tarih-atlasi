// KASA UYGULAMA LİSTESİ üretici — F3 çözümünden tam yama alanları (dosya, id/madde, yol, eski değer, yeni değer, kaynak+alıntı, gün/kesinlik). SALT OKUR; hiçbir veri dosyasına yazmaz.
// Eski değerler data/ dosyalarından okunur (çalışma ağacı = origin/main + LAB). Çıktı: F3/UYGULAMA-LISTESI.tsv
var fs = require('fs'), vm = require('vm'), path = require('path');
var KOK = path.resolve(__dirname, '..', '..', '..'); var DATA = path.join(KOK, 'data') + path.sep;
function run(f) { var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } }); try { vm.runInContext(fs.readFileSync(DATA + f, 'utf8'), ctx, { timeout: 120000 }); } catch (e) {} return win; }
var cache = {}; function yukle(f) { return cache[f] || (cache[f] = run(f)); }
function kisa(v, n) { return String(v == null ? '' : v).replace(/\s+/g, ' ').replace(/\t/g, ' ').slice(0, n || 160); }
var satir = ['tur\tdosya\tid_ya_da_madde\tyol\talan\teski\tyeni\tkaynak_ve_tam_gozde_alinti\tgun_kesinlik\tdurum'];
// ---- A) şehir tarihçesi (osm): olay t yaması
var SEHIR = [
  ['acre-akko', '1191-01-01', '1191-07-11', '11 Temmuz 1191', 'TDV «Haçlılar» md. (tam gövde, tarayıcı, 16 Kasım 2026): «Akkâ’nın müslüman garnizonu 11 Temmuz 1191’de Selâhaddin’in izni olmadan şehri Haçlılar’a teslime mecbur kaldı»', 'gun', 'TDV tam gövdede doğrulandı'],
  ['aleppo', '1146-06-13', '1146-09-14', '5 Rebîülâhir 541 / 14 Eylül 1146', 'TDV «Nûreddin Zengî, Mahmud» md. (tam gövde): «kölesi tarafından öldürülünce (5 Rebîülâhir 541 / 14 Eylül 1146)»', 'gun', 'TDV tam gövdede doğrulandı'],
  ['asyut', '0868-01-01', '0868-09-15', '15 Eylül 868', 'TDV «Ahmed b. Tolun» md. (tam gövde): «15 Eylül 868’de Mısır’a gitti» (not: «gitti» = yola çıkış/varış ayrımı kaynakta yok; olay başlığı «girdi» ise gün «ayrılış» olabilir)', 'gun', 'TDV tam gövdede doğrulandı (fiil farkı notlu)'],
  ['banha', '0868-01-01', '0868-09-15', '15 Eylül 868', 'aynı (TDV «Ahmed b. Tolun» md.)', 'gun', 'TDV tam gövdede doğrulandı (fiil farkı notlu)'],
  ['damanhur', '0868-01-01', '0868-09-15', '15 Eylül 868', 'aynı (TDV «Ahmed b. Tolun» md.)', 'gun', 'TDV tam gövdede doğrulandı (fiil farkı notlu)'],
  ['baghdad', '1055-12-01', '1055-12-18', '25 Ramazan 447 / 18 Aralık 1055', 'TDV «Kāim-Biemrillâh» md. (tam gövde): «Tuğrul Bey 25 Ramazan 447’de (18 Aralık 1055) Bağdat’a girdi»', 'gun', 'TDV tam gövdede doğrulandı (Büveyhî hâkimiyetinin sonu 21 Aralık 1055 ayrı olay olabilir)'],
  ['damanhur', '0905-01-01', '0905-01-11', '1 Rebîülevvel 292 / 11 Ocak 905', 'TDV «Muktefî-Billâh» md. (tam gövde): «Hutbeyi Halife Müktefî adına okuttu (1 Rebîülevvel 292 / 11 Ocak 905)»', 'gun', 'TDV tam gövdede doğrulandı'],
  ['damanhur', '1171-09-04', '1171-09-13', '10 Muharrem 567 / 13 Eylül 1171', 'TDV «Eyyûbîler» md. (tam gövde): «Mısır’da Abbâsîler adına hutbe okuttu (10 Muharrem 567 / 13 Eylül 1171)»', 'gun', 'TDV tam gövdede doğrulandı']
];
var osm = yukle('sehir_tarihce_osm.js'); var osmL = []; Object.keys(osm).forEach(function (k) { if (Array.isArray(osm[k])) osm[k].forEach(function (c) { if (c && c.id) osmL.push(c); }); });
SEHIR.forEach(function (p) { var c = osmL.filter(function (x) { return x.id === p[0]; })[0]; if (!c) { satir.push(['sehir', 'sehir_tarihce_osm.js', p[0], '', '', 'BULUNAMADI', '', '', '', 'KAYIT YOK']); return; }
  var i = -1; (c.olay || []).forEach(function (o, j) { if (o.t === p[1]) i = j; });
  if (i < 0) { satir.push(['sehir', 'sehir_tarihce_osm.js', p[0], '', '', 'olay ' + p[1] + ' YOK', '', '', '', 'KAYIT YOK']); return; }
  var o = c.olay[i]; var yol = 'olay[' + i + ']';
  satir.push(['sehir', 'data/sehir_tarihce_osm.js', p[0], yol, 't', o.t, p[2], p[4], p[5], p[6]]);
  satir.push(['sehir', 'data/sehir_tarihce_osm.js', p[0], yol, 'gun', kisa(o.gun), p[3], '', p[5], '']);
  satir.push(['sehir', 'data/sehir_tarihce_osm.js', p[0], yol, 'kesinlik', kisa(o.kesinlik), p[5], '', '', 'olay başlığı: ' + kisa(o.b, 80)]); });
// ---- B) devlet kronolojisi: hicrî yıl kuralı / gün ekleme yamaları (madde t yaması)
var KRON = [
  ['kronoloji_cok_once1281_ortadogu.js', '1110-01-01', 'Aden Zürey', '1110-07-20', 'TDV «Zürey‘îler» md.: «504 (1110) yılında»; 504 H = 1110-07-20…1111-07-08 (hicrî ∩ milâdî ilk gün kuralı)'],
  ['olaylar_ortacag_ortadogu.js', '1146-01-01', 'İmâdüddin Zengî Ca', '1146-09-14', 'TDV «Nûreddin Zengî, Mahmud» md. (tam gövde): «(5 Rebîülâhir 541 / 14 Eylül 1146)»'],
  ['olaylar_ortacag_ortadogu.js', '1186-01-01', 'el-Melikü', '1186-03-24', 'TDV «Halep» md. 582; 582 H = 1186-03-24…1187-03-12 (hicrî kuralı)'],
  ['kronoloji_cok_once1281_afrika.js', '1184-01-01', 'Benî', '1184-04-14', 'TDV «Muvahhidler» md.: «(580/1184)»; 580 H = 1184-04-14…1185-04-02'],
  ['olaylar_t5_1000a.js', '1152-01-01', 'Sultan Mesud', '1152-04-08', 'TDV «Muktefî-Liemrillâh» md.: «(547/1152)»; 547 H = 1152-04-08…1153-03-27'],
  ['kronoloji_cok_once1281_afrika.js', '1230-01-01', 'Ebû Zekeriyy', '1230-11-09', 'TDV «Hafsîler» md.: «(628/1230-31)»; 628 H = 1230-11-09…1231-10-28'],
  ['kronoloji_sinir_once1281_yerlesim_asya_iran.js', '1175-01-01', 'Gurlu Muizz', '1175-07-22', 'TDV «Mültan» md.: «571’de (1175-76)»; 571 H = 1175-07-22…1176-07-09'],
  ['kronoloji_cok_once1281_hint_amerika.js', '1228-01-01', 'İltutm', '1228-11-30', 'TDV «Mültan» md.: «626 (1228)»; 626 H = 1228-11-30…1229-11-19'],
  ['kronoloji_sinir_once1281_yerlesim_asya_iran.js', '1228-01-01', 'İltutm', '1228-11-30', 'TDV «Mültan» md.: «626 (1228)»'],
  ['kronoloji_sinir_once1281_yerlesim_asya_iran.js', '1207-01-01', 'Buhara Karah', '1207-07-28', 'TDV «Buhara» md.: «604 (1207)»; 604 H = 1207-07-28…1208-07-15'],
  ['kronoloji_sinir_dogu_500_1281.js', '0711-01-01', 'Kuteybe', '0711-10-19', 'TDV «Semerkant» md.: «(93/711)»; 93 H = 0711-10-19…0712-10-06'],
  ['kronoloji_cok_once1281_hint_amerika.js', '1018-01-01', 'Gazneli Mahmud son önemli', '1018-12-20', 'TDV «Mahmûd-ı Gaznevî» md.: «8 Şâban 409’da (20 Aralık 1018)» (gün ekle; kesinlik gun)'],
  ['kronoloji_cok_ms1_1000_ortadogu.js', '0992-01-01', 'Karahanlı Hârun', '0992-05-07', 'TDV «Sâmânîler» md. (tam gövde): «Buhara’yı ele geçirdi (Rebîülevvel 382 / Mayıs 992)» (ay hassasiyeti: kesinlik ay)']
];
KRON.forEach(function (p) { var w = yukle(p[0]); var bulundu = null;
  Object.keys(w).forEach(function (k) { if (Array.isArray(w[k])) w[k].forEach(function (m, i) { if (!bulundu && m && m.t === p[1] && String(m.b || '').indexOf(p[2]) === 0) bulundu = [k, i, m]; }); });
  if (!bulundu) { satir.push(['kronoloji', 'data/' + p[0], p[2], '', 't', p[1], p[3], p[4], '', 'MADDE BULUNAMADI (b öneki eşleşmedi)']); return; }
  var m = bulundu[2]; satir.push(['kronoloji', 'data/' + p[0], bulundu[0] + '[' + bulundu[1] + ']', 'madde', 't', m.t, p[3], p[4], 'kesinlik: ' + kisa(m.kesinlik) + ' / gun: ' + kisa(m.gun, 60), 'b: ' + kisa(m.b, 90)]); });
fs.writeFileSync(path.join(__dirname, 'UYGULAMA-LISTESI.tsv'), satir.join('\n') + '\n');
console.log(satir.length - 1, 'satır'); console.log(satir.filter(function (s) { return /MADDE BULUNAMADI|KAYIT YOK/.test(String(s)); }).length, 'bulunamayan');

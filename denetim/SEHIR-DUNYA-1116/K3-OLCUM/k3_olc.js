// K3 ÖLÇÜMÜ — tarihçesiz/kronolojisiz 3. derece (k:3) yerleşimler. LAB, 16 Kasım 2026.
// Kullanım:  node denetim/SEHIR-DUNYA-1116/K3-OLCUM/k3_olc.js [veri_dizini=data] [çıktı=denetim/SEHIR-DUNYA-1116/K3-OLCUM/K3-TARIHCESIZ-TUM.tsv]
// Veri dizini: reponun data/ klasörü ya da `git archive origin/main data | tar -x -C <dizin>` ile çıkarılmış kopya.
// Girdi : arac/girdi_listesi.py GIRDI_DOSYALARI (yerleşim), data/devletler.js (bölge), data/sehir_tarihce_*.js,
//         data/kaynakli_halka_*.js, data/yer_kat.js, data/olaylar*.js + kronoloji*.js (yer_id).
// k3 tanımı: yerleşimde k===3 ya da kd[] içinde herhangi bir k===3 dilimi (VERI-YAPISI: 1-2 eyalet/sancak merkezi, 3-4 alt kademe).
// KAYIT EŞLEŞMESİ (çift yönlü): tarihçe/tanık/kronoloji kaydı yerleşime
//   (a) KOORDİNATLA ≤ 3 km içindeyse (ad aranmaz), YA DA
//   (b) normalize adı aynı ve koordinatla ≤ 30 km içindeyse, YA DA
//   (c) normalize adı aynı ve kaydın koordinatı YOKSA (koordinatsız kayıt 'yok' sayılmaz — HAVVA hatası) ;
//   kronolojide yer_id yalnız ad üzerinden (koordinat taşımaz) → 'kron' ayrı sütun.
// Çıktı sütunları: id(dosya:sıra) ad lat lon bolge sahip_devlet tarihce kronoloji kat varlik
var fs = require('fs'), vm = require('vm'), path = require('path');
var KOK = path.resolve(__dirname, '..', '..', '..');
var DATA = path.resolve(process.argv[2] || path.join(KOK, 'data')) + path.sep;
var CIKTI = process.argv[3] || path.join(KOK, 'denetim', 'SEHIR-DUNYA-1116', 'K3-OLCUM', 'K3-TARIHCESIZ-TUM.tsv');
function norm(s) { return String(s || '').replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, ' ').trim(); }
function yukle(dosyalar) {
  var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } }), keys = {};
  dosyalar.forEach(function (f) {
    var yol = DATA + f; if (!fs.existsSync(yol)) return;
    var k0 = {}; Object.keys(win).forEach(function (k) { k0[k] = 1; });
    try { vm.runInContext(fs.readFileSync(yol, 'utf8'), ctx, { timeout: 120000 }); } catch (e) { return; }
    keys[f] = Object.keys(win).filter(function (k) { return !k0[k]; });
  });
  return { win: win, keys: keys };
}
function km(a, b, c, d) { var p = Math.PI / 180, x = Math.sin((c - a) * p / 2); x *= x; var y = Math.sin((d - b) * p / 2); y *= y; return 12742 * Math.asin(Math.sqrt(x + Math.cos(a * p) * Math.cos(c * p) * y)); }
var py = fs.readFileSync(path.join(KOK, 'arac', 'girdi_listesi.py'), 'utf8');
var yf = []; py.replace(/^\s*"(yerlesimler[^"]*\.js)"/gm, function (m, f) { yf.push(f); });
var ls = fs.readdirSync(DATA);
var tf = ls.filter(function (f) { return /^(sehir_tarihce|kaynakli_halka|yer_kat)/.test(f); });
var kf = ls.filter(function (f) { return /^(olaylar|kronoloji)\w*\.js$/.test(f) && !/parca/.test(f); });
var Y = yukle(yf), K = yukle(['devletler.js'].concat(tf, kf));
var DEV = {}; (K.win.DEVLETLER || []).forEach(function (d) { DEV[d.id] = d; });
// tarihçe/tanık kayıtları
var kayit = [];
tf.forEach(function (f) {
  (K.keys[f] || []).forEach(function (k) {
    var a = K.win[k]; if (!Array.isArray(a)) return;
    a.forEach(function (e) {
      var adlar = [e.ad, e.atlas_ad, e.yer].filter(Boolean);
      var kaynak = f.replace(/\.js$/, '');
      adlar.forEach(function (ad) { kayit.push({ n: norm(ad), lat: e.lat == null ? null : +e.lat, lon: e.lon == null ? null : +e.lon, f: kaynak }); });
    });
  });
});
var byName = {}; kayit.forEach(function (r) { (byName[r.n] = byName[r.n] || []).push(r); });
var koordlu = kayit.filter(function (r) { return r.lat != null && !isNaN(r.lat); });
// kronoloji yer_id'leri
var kron = {};
kf.forEach(function (f) {
  (K.keys[f] || []).forEach(function (k) {
    var a = K.win[k]; if (!Array.isArray(a)) return;
    a.forEach(function (m) { if (m.yer_id) { var n = norm(m.yer_id); kron[n] = (kron[n] || 0) + 1; } });
  });
});
// yerleşimler
var satirlar = [], toplam = 0, k3 = 0;
yf.forEach(function (f) {
  (Y.keys[f] || []).forEach(function (k) {
    var a = Y.win[k]; if (!Array.isArray(a)) return;
    a.forEach(function (y, i) {
      toplam++;
      var is3 = y.k === 3 || (y.kd || []).some(function (e) { return e.k === 3; });
      if (!is3) return; k3++;
      var cnt = {}, ilk = null;
      (y.s || []).forEach(function (s) { if (s.d && s.d !== '__BOSLUK__') cnt[s.d] = (cnt[s.d] || 0) + 1; });
      if (y.d) cnt[y.d] = (cnt[y.d] || 0) + 1;
      var e = Object.keys(cnt).sort(function (p, q) { return cnt[q] - cnt[p]; });
      var sahip = e[0] || '', bolge = sahip && DEV[sahip] ? DEV[sahip].bolge : '';
      var n = norm(y.ad), kanit = [];
      if (y.lat != null) {
        koordlu.forEach(function (r) { var d = km(y.lat, y.lon, r.lat, r.lon); if (d <= 3) kanit.push(r.f + ':3km'); else if (d <= 30 && r.n === n) kanit.push(r.f + ':ad+30km'); });
      }
      (byName[n] || []).forEach(function (r) { if (r.lat == null || isNaN(r.lat)) kanit.push(r.f + ':ad(koordinatsiz)'); });
      var uniq = {}; kanit.forEach(function (x) { uniq[x] = 1; }); kanit = Object.keys(uniq);
      var tar = kanit.length ? 'var' : 'yok';
      var kr = kron[n] ? 'var(' + kron[n] + ')' : 'yok';
      satirlar.push([f + ':' + i, y.ad, y.lat == null ? '' : y.lat, y.lon == null ? '' : y.lon, bolge, sahip, tar, kr, y.k === 3 ? '3' : 'kd3', tar === 'var' ? kanit.slice(0, 3).join(' ') : ''].join('\t'));
    });
  });
});
var bas = 'id\tad\tlat\tlon\tbolge\tsahip_devlet\ttarihce_tanik\tkronoloji_yer_id\tkat\tkanit';
fs.writeFileSync(CIKTI, bas + '\n' + satirlar.join('\n') + '\n');
var yok = satirlar.filter(function (l) { var c = l.split('\t'); return c[6] === 'yok' && c[7] === 'yok'; }).length;
var yokTar = satirlar.filter(function (l) { return l.split('\t')[6] === 'yok'; }).length;
console.log('yerleşim', toplam, 'k3', k3, 'tarihçe/tanık YOK', yokTar, 'tarihçe YOK ve kronoloji YOK', yok, '->', CIKTI);

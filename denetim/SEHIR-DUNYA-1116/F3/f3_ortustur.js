// F3 ÖRTÜŞTÜRME ÖLÇÜMÜ — şehir tarihçesi ↔ devlet kronolojisi. SALT OKUR. LAB, 16 Kasım 2026.
// Kullanım: node denetim/SEHIR-DUNYA-1116/F3/f3_ortustur.js [çıktı_dizini]
// Girdi (şehir tarafı): data/sehir_tarihce_*.js (çalışma ağacı) + origin/sehir-*-1116 dallarında origin/main'e göre YENİ/DEĞİŞEN
//   data/sehir_tarihce_*.js dosyaları (git show ile bellekte okunur; çalışma ağacında aynı adlı dosya varsa ağaçtaki esas).
// Girdi (devlet tarafı): data/olaylar*.js, kronoloji*.js (kronoloji_sinir* dahil): t, b, yer_id, yer, d/devlet/devletler/taraflar.
// ÇIKTI: ① f3_olay.tsv     şehir olayı → devlet kronolojisinde AYNI şehir ±30 gün madde: EŞLEŞTİ / ZAMAN_FARKI(gün) / YOK
//        ② f3_sahip.tsv    sahip[] değişimi (her dönemin t'si, son dönem hariç) → ±30 gün madde: YER (şehir anılıyor) / TARAF (taraf anılıyor) / YOK
//        ③ f3_ters.tsv     devlet kronolojisinde şehir adı geçen (yer_id) maddede şehir tarihçesinde ±30 gün olay yok → KARŞILIK_YOK
//        ④ f3_celiski.tsv  aynı şehir, aynı olay (başlıkta ≥2 ortak anlamlı sözcük), tarihler 1 gün – 5 yıl farklı → çelişki adayı
//        ⑤ OZET.tsv        dosya/blok bazında sayı ve oran
// Eşleşme kuralı: şehir adı = normalize(ad, atlas_ad, adlar[]) parantez içi atılır; kronoloji tarafında yer_id veya yer alanının normalize hâli.
// Tarih: YYYY-AA-GG (MÖ astronomik, negatif); ay/gün '00' ya da eksikse 01. Gün farkı ~ yıl*365.2425 + ay*30.44 + gün (yalnız ±30 gün için).
var fs = require('fs'), vm = require('vm'), path = require('path'), cp = require('child_process');
var KOK = path.resolve(__dirname, '..', '..', '..');
var DATA = path.join(KOK, 'data') + path.sep;
var OUT = path.resolve(process.argv[2] || __dirname);
function norm(s) { return String(s || '').replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, ' ').trim(); }
function gun(t) {
  var m = /^(-?)(\d{1,6})(?:-(\d{1,2}))?(?:-(\d{1,2}))?/.exec(String(t || '')); if (!m) return null;
  var y = (m[1] ? -1 : 1) * parseInt(m[2], 10), mo = parseInt(m[3] || '1', 10) || 1, d = parseInt(m[4] || '1', 10) || 1;
  return y * 365.2425 + (mo - 1) * 30.44 + d;
}
function yil(t) { var m = /^(-?)(\d{1,6})/.exec(String(t || '')); return m ? (m[1] ? -1 : 1) * parseInt(m[2], 10) : null; }
function run(kod, ad) {
  var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } });
  try { vm.runInContext(kod, ctx, { timeout: 120000 }); } catch (e) { return {}; }
  return win;
}
// ---- şehir tarafı
var sehirDosyalari = []; // {kaynak, kod}
fs.readdirSync(DATA).filter(function (f) { return /^sehir_tarihce_.*\.js$/.test(f); }).forEach(function (f) {
  sehirDosyalari.push({ kaynak: 'ağaç:' + f, ad: f, kod: fs.readFileSync(DATA + f, 'utf8') });
});
var ad0 = {}; sehirDosyalari.forEach(function (x) { ad0[x.ad] = 1; });
var dallar = [];
try { dallar = cp.execSync('git -C "' + KOK + '" branch -r', { encoding: 'utf8' }).split('\n').map(function (s) { return s.trim(); }).filter(function (s) { return /^origin\/sehir-.*-1116$/.test(s); }); } catch (e) {}
dallar.forEach(function (br) {
  var dosyalar = [];
  try { dosyalar = cp.execSync('git -C "' + KOK + '" diff --name-only origin/main...' + br + ' -- data', { encoding: 'utf8' }).split('\n').filter(function (s) { return /^data\/sehir_tarihce_.*\.js$/.test(s); }); } catch (e) {}
  dosyalar.forEach(function (d) {
    var ad = d.replace(/^data\//, '');
    if (ad0[ad]) return;
    try { var kod = cp.execSync('git -C "' + KOK + '" show ' + br + ':' + d, { encoding: 'utf8', maxBuffer: 80 * 1024 * 1024 }); sehirDosyalari.push({ kaynak: br + ':' + ad, ad: ad, kod: kod }); ad0[ad] = 1; } catch (e) {}
  });
});
var sehirler = [];
sehirDosyalari.forEach(function (x) {
  var win = run(x.kod, x.ad);
  Object.keys(win).forEach(function (k) {
    var a = win[k]; if (!Array.isArray(a)) return;
    a.forEach(function (c) {
      if (!c || !c.id) return;
      var adlar = {}; [c.ad, c.atlas_ad].concat(c.adlar || []).forEach(function (n) { var z = norm(n); if (z && z.length > 2) adlar[z] = 1; });
      sehirler.push({ dosya: x.ad, kaynak: x.kaynak, id: c.id, ad: c.ad, adlar: Object.keys(adlar), olay: c.olay || [], sahip: c.sahip || [] });
    });
  });
});
// ---- devlet tarafı
var kdosya = fs.readdirSync(DATA).filter(function (f) { return /^(olaylar|kronoloji)\w*\.js$/.test(f) && !/parca/.test(f); });
var K = []; // {f,t,g,b,yer:[norm...],taraf:[...]}
kdosya.forEach(function (f) {
  var win = run(fs.readFileSync(DATA + f, 'utf8'), f);
  Object.keys(win).forEach(function (k) {
    var a = win[k]; if (!Array.isArray(a)) return;
    a.forEach(function (m) {
      if (!m || !m.t) return; var g = gun(m.t); if (g == null) return;
      var yer = []; [m.yer_id, m.yer].forEach(function (v) { if (v) String(v).split(/[\/,;]/).forEach(function (p) { var z = norm(p); if (z && z.length > 2) yer.push(z); }); });
      [].concat(m.odak_yer || []).forEach(function (v) { var z = norm(v); if (z && z.length > 2) yer.push(z); });
      var taraf = [].concat(m.taraflar || [], m.devletler || [], m.devlet ? [m.devlet] : []);
      K.push({ f: f, t: String(m.t), g: g, b: String(m.b || ''), yer: yer, taraf: taraf });
    });
  });
});
var byYer = {}; K.forEach(function (m, i) { m.yer.forEach(function (z) { (byYer[z] = byYer[z] || []).push(i); }); });
var byTaraf = {}; K.forEach(function (m, i) { m.taraf.forEach(function (z) { (byTaraf[z] = byTaraf[z] || []).push(i); }); });
// ---- yardımcılar
var STOP = {}; 'ile ve bir bu icin olarak sonra once kadar daha en da de ki mi gibi ancak fakat veya yani oldu etti edildi yapti basladi sona erdi'.split(' ').forEach(function (w) { STOP[w] = 1; });
function tok(b) { var o = {}; norm(b).split(' ').forEach(function (w) { if (w.length >= 5 && !STOP[w]) o[w] = 1; }); return o; }
function ortak(a, b, adSkip) { var n = 0; Object.keys(a).forEach(function (w) { if (b[w] && !adSkip[w]) n++; }); return n; }
function sehirKronolojisi(s) { var idx = {}; s.adlar.forEach(function (z) { (byYer[z] || []).forEach(function (i) { idx[i] = 1; }); }); return Object.keys(idx).map(Number); }
// ---- ölçüm
var L1 = ['dosya', 'id', 'sehir', 'olay_t', 'olay_b', 'sonuc', 'gun_farki', 'kronoloji_t', 'kronoloji_b', 'kronoloji_dosya'];
var O1 = [L1.join('\t')], O2 = ['dosya\tid\tsehir\tdonem_sonu_t\tsahip_d\tsonuc\tkronoloji_t\tkronoloji_b'], O3 = ['dosya\tid\tsehir\tkronoloji_t\tkronoloji_b\tkronoloji_dosya\tsonuc'], O4 = ['dosya\tid\tsehir\tolay_t\tolay_b\tkronoloji_t\tkronoloji_b\tfark_gun\tortak_sozcuk'];
var OZ = {}; function oz(d) { return OZ[d] || (OZ[d] = { sehir: 0, olay: 0, esl: 0, zf: 0, yok: 0, sah: 0, sah_yer: 0, sah_taraf: 0, sah_yok: 0, ters_kron: 0, ters_yok: 0, cel: 0, kron_yok: 0 }); }
sehirler.forEach(function (s) {
  var o = oz(s.dosya); o.sehir++;
  var kidx = sehirKronolojisi(s); if (!kidx.length) o.kron_yok++;
  var adSkip = {}; s.adlar.forEach(function (z) { z.split(' ').forEach(function (w) { adSkip[w] = 1; }); });
  var kullanilan = {};
  s.olay.forEach(function (e) {
    var g = gun(e.t); if (g == null) return; o.olay++;
    var best = null, bd = 1e9;
    kidx.forEach(function (i) { var d = Math.abs(K[i].g - g); if (d < bd) { bd = d; best = i; } });
    var sonuc, fark = '';
    if (best != null && bd <= 30) { sonuc = 'EŞLEŞTİ'; o.esl++; kullanilan[best] = 1; }
    else if (best != null && bd <= 400) { sonuc = 'ZAMAN_FARKI'; o.zf++; fark = Math.round(K[best].g - g); }
    else { sonuc = 'YOK'; o.yok++; }
    O1.push([s.dosya, s.id, s.ad, e.t, String(e.b || '').slice(0, 90).replace(/\t/g, ' '), sonuc, fark, best != null && bd <= 400 ? K[best].t : '', best != null && bd <= 400 ? K[best].b.slice(0, 80) : '', best != null && bd <= 400 ? K[best].f : ''].join('\t'));
    // çelişki adayı: yakın yıl, ortak anlamlı sözcük
    var et = tok(e.b);
    kidx.forEach(function (i) { var d = K[i].g - g; var ad = Math.abs(d); if (ad >= 1 && ad <= 5 * 365.25) { var n = ortak(et, tok(K[i].b), adSkip); if (n >= 2) { o.cel++; O4.push([s.dosya, s.id, s.ad, e.t, String(e.b || '').slice(0, 70), K[i].t, K[i].b.slice(0, 70), Math.round(d), n].join('\t')); } } });
  });
  // sahip[] değişimi: son dönem hariç her dönemin t'si
  s.sahip.forEach(function (p, i) {
    if (i === s.sahip.length - 1 || !p.t) return; var g = gun(p.t); if (g == null) return; o.sah++;
    var sonuc = 'YOK', kt = '', kb = '';
    for (var j = 0; j < kidx.length; j++) { if (Math.abs(K[kidx[j]].g - g) <= 30) { sonuc = 'YER'; kt = K[kidx[j]].t; kb = K[kidx[j]].b; break; } }
    if (sonuc === 'YOK') {
      var nxt = s.sahip[i + 1] ? s.sahip[i + 1].d : null; var adaylar = [].concat(byTaraf[p.d] || [], byTaraf[nxt] || []);
      for (var q = 0; q < adaylar.length; q++) { if (Math.abs(K[adaylar[q]].g - g) <= 30) { sonuc = 'TARAF'; kt = K[adaylar[q]].t; kb = K[adaylar[q]].b; break; } }
    }
    if (sonuc === 'YER') o.sah_yer++; else if (sonuc === 'TARAF') o.sah_taraf++; else o.sah_yok++;
    O2.push([s.dosya, s.id, s.ad, p.t, p.d, sonuc, kt, kb.slice(0, 80)].join('\t'));
  });
  // ters yön
  var sg = s.olay.map(function (e) { return gun(e.t); }).filter(function (v) { return v != null; });
  kidx.forEach(function (i) {
    var m = K[i]; o.ters_kron++; var var_ = false;
    for (var j = 0; j < sg.length; j++) { if (Math.abs(sg[j] - m.g) <= 30) { var_ = true; break; } }
    if (!var_) { o.ters_yok++; O3.push([s.dosya, s.id, s.ad, m.t, m.b.slice(0, 90), m.f, 'KARŞILIK_YOK'].join('\t')); }
  });
});
fs.writeFileSync(path.join(OUT, 'f3_olay.tsv'), O1.join('\n') + '\n'); fs.writeFileSync(path.join(OUT, 'f3_sahip.tsv'), O2.join('\n') + '\n');
fs.writeFileSync(path.join(OUT, 'f3_ters.tsv'), O3.join('\n') + '\n'); fs.writeFileSync(path.join(OUT, 'f3_celiski.tsv'), O4.join('\n') + '\n');
var OZL = ['dosya\tsehir\tsehirde_kronoloji_yok\tolay\tESLESTI\tZAMAN_FARKI\tYOK\tesl_oran%\tsahip_degisim\tYER\tTARAF\tYOK\tters_madde\tters_karsilik_yok\tcelisk_aday'];
var T = oz('TOPLAM');
Object.keys(OZ).filter(function (k) { return k !== 'TOPLAM'; }).sort().forEach(function (d) { var o = OZ[d]; Object.keys(o).forEach(function (k) { T[k] += o[k]; });
  OZL.push([d, o.sehir, o.kron_yok, o.olay, o.esl, o.zf, o.yok, o.olay ? Math.round(100 * o.esl / o.olay) : 0, o.sah, o.sah_yer, o.sah_taraf, o.sah_yok, o.ters_kron, o.ters_yok, o.cel].join('\t')); });
OZL.push(['TOPLAM', T.sehir, T.kron_yok, T.olay, T.esl, T.zf, T.yok, T.olay ? Math.round(100 * T.esl / T.olay) : 0, T.sah, T.sah_yer, T.sah_taraf, T.sah_yok, T.ters_kron, T.ters_yok, T.cel].join('\t'));
fs.writeFileSync(path.join(OUT, 'OZET.tsv'), OZL.join('\n') + '\n');
console.log('şehir dosyası', sehirDosyalari.length, '(dal:', dallar.length + ')', 'şehir', sehirler.length, 'kronoloji maddesi', K.length);
console.log(OZL.join('\n'));

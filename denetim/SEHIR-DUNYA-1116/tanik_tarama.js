// TANIK TARAMASI (LAB, 16 Kasım 2026) — HAVVA'nın TANIK-YIL-SEHIR-TARAMA-HAVVA.tsv kolonlarıyla aynı şema; salt okur.
// Kural (koordinatör, 16 Kasım): ilk tanığı şehir adı + yıl AYNI cümlede, tam gövdeden birebir; özet/paraphrase kabul edilmez. Olay/sahip tanığında yıl+olay aynı cümlede.
// Kolonlar: dosya, id, yol (.ilk/.kur/.ark/.olay[i]/.sahip[i]), yil_eksik ('yil' = tanıkta 3-4 haneli yıl/yüzyıl/hicrî yok), yer_eksik ('yer' = tanıkta şehir adı yok; yalnız .ilk/.kur/.ark için zorunlu), ozet_isaretli ('ozet' = kaynak/tanıkta özet/paraphrase/WebFetch işareti), tanik
// Kullanım: node tanik_tarama.js [veri_dizini=data] [cikti]
var fs = require('fs'), vm = require('vm'), path = require('path');
var KOK = path.resolve(__dirname, '..', '..'); var DATA = path.resolve(process.argv[2] || path.join(KOK, 'data')) + path.sep;
var OUT = process.argv[3] || path.join(__dirname, 'TANIK-YIL-SEHIR-TARAMA-LAB.tsv');
function norm(s) { return String(s || '').replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/[’'`´]/g, '').replace(/[^a-z0-9]+/g, ' ').trim(); }
function run(kod) { var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } }); try { vm.runInContext(kod, ctx, { timeout: 120000 }); } catch (e) {} return win; }
var YIL = /\b(\d{3,4})\b|[IVXL]+\.\s*y[uü]zy[ıi]l|\d{1,2}(st|nd|rd|th)[- ]century|\d{1,2}\.\s*y[uü]zy[ıi]l|\b\d{1,2}(th|st|nd|rd)\b/i;
var OZET = /özet|ozet|paraphrase|webfetch|parafraz/i;
var satir = ['dosya\tid\tyol\tyil_eksik\tyer_eksik\tozet_isaretli\ttanik']; var s = { oge: 0, yil: 0, yer: 0, ozet: 0, tanikSiz: 0 }; var perDosya = {};
fs.readdirSync(DATA).filter(function (f) { return /^sehir_tarihce_.*\.js$/.test(f); }).forEach(function (f) {
  var win = run(fs.readFileSync(DATA + f, 'utf8')); var d = perDosya[f] = { oge: 0, yil: 0, yer: 0, ozet: 0, tanikSiz: 0, ilkYer: 0, ilk: 0 };
  Object.keys(win).forEach(function (k) { if (!Array.isArray(win[k])) return; win[k].forEach(function (c) { if (!c || !c.id) return;
    var adlar = {}; [c.ad, c.atlas_ad].concat(c.adlar || []).forEach(function (n) { n = norm(n); if (n.length > 2) adlar[n] = 1; });
    function ogeler() { var L = []; ['ilk', 'kur', 'ark'].forEach(function (a) { if (c[a]) L.push(['.' + a, c[a], true]); }); (c.olay || []).forEach(function (o, i) { L.push(['.olay[' + i + ']', o, false]); }); (c.sahip || []).forEach(function (o, i) { L.push(['.sahip[' + i + ']', o, false]); }); return L; }
    ogeler().forEach(function (x) { var o = x[1]; var tn = o.tanik || ''; var kay = typeof o.kaynak === 'string' ? o.kaynak : JSON.stringify(o.kaynak || ''); if (!tn && !kay) return;
      d.oge++; s.oge++; if (!tn) { d.tanikSiz++; s.tanikSiz++; }
      var yilEksik = tn && !YIL.test(tn) ? 'yil' : ''; var yerEksik = ''; if (x[2] && tn) { var t = norm(tn); var var_ = Object.keys(adlar).some(function (n) { return t.indexOf(n) >= 0; }); if (!var_) yerEksik = 'yer'; }
      var ozet = OZET.test(tn) || OZET.test(kay) ? 'ozet' : '';
      if (yilEksik) { d.yil++; s.yil++; } if (yerEksik) { d.yer++; s.yer++; } if (ozet) { d.ozet++; s.ozet++; } if (x[2] && x[0] === '.ilk') { d.ilk++; if (yerEksik || yilEksik || ozet) d.ilkYer++; }
      if (yilEksik || yerEksik || ozet || !tn) satir.push([f, c.id, x[0], yilEksik, yerEksik, ozet, (tn || '(tanık yok)').replace(/\s+/g, ' ').slice(0, 170)].join('\t')); }); }); });
});
fs.writeFileSync(OUT, satir.join('\n') + '\n');
console.log('öğe(kaynaklı/tanıklı)', s.oge, '| tanıksız', s.tanikSiz, '| yıl eksik', s.yil, '| yer eksik (ilk/kur/ark)', s.yer, '| özet işaretli', s.ozet);
var benim = ['sehir_tarihce_afrika_gb.js', 'sehir_tarihce_hint.js', 'sehir_tarihce_orta_asya.js'];
benim.forEach(function (f) { var d = perDosya[f]; console.log(f, JSON.stringify(d)); });

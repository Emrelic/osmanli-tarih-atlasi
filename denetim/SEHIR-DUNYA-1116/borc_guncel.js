// BORC ENVANTERİ GÜNCELLEME — LAB BORC.md/tsv listelerini güncel şehir tarihçesi envanteriyle (37 dosya + 5 dal) karşılaştırır. SALT OKUR.
// Çıktı: BORC-GUNCEL.tsv (şehir, blok, durum[ZATEN_KAYITLI:<dosya>|BOS], neden, arama_kaynagi, kaynak_durumu)
var fs = require('fs'), vm = require('vm'), path = require('path'), cp = require('child_process');
var KOK = path.resolve(__dirname, '..', '..'); var DATA = path.join(KOK, 'data') + path.sep; var D = __dirname;
function norm(s) { return String(s || '').replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, ' ').trim(); }
function run(kod) { var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } }); try { vm.runInContext(kod, ctx, { timeout: 120000 }); } catch (e) {} return win; }
var dosyalar = []; fs.readdirSync(DATA).filter(function (f) { return /^sehir_tarihce_.*\.js$/.test(f); }).forEach(function (f) { dosyalar.push([f, fs.readFileSync(DATA + f, 'utf8')]); });
var var0 = {}; dosyalar.forEach(function (x) { var0[x[0]] = 1; });
var dallar = []; try { dallar = cp.execSync('git -C "' + KOK + '" branch -r', { encoding: 'utf8' }).split('\n').map(function (s) { return s.trim(); }).filter(function (s) { return /^origin\/sehir-.*-1116$/.test(s); }); } catch (e) {}
dallar.forEach(function (br) { var ds = []; try { ds = cp.execSync('git -C "' + KOK + '" diff --name-only origin/main...' + br + ' -- data', { encoding: 'utf8' }).split('\n').filter(function (s) { return /^data\/sehir_tarihce_.*\.js$/.test(s); }); } catch (e) {}
  ds.forEach(function (d) { var ad = d.replace(/^data\//, ''); if (var0[ad]) return; try { dosyalar.push([ad + ' (' + br + ')', cp.execSync('git -C "' + KOK + '" show ' + br + ':' + d, { encoding: 'utf8', maxBuffer: 80 * 1024 * 1024 })]); var0[ad] = 1; } catch (e) {} }); });
var idx = {}; // norm ad -> [dosya:id]
dosyalar.forEach(function (x) { var win = run(x[1]); Object.keys(win).forEach(function (k) { if (!Array.isArray(win[k])) return; win[k].forEach(function (c) { if (!c || !c.id) return; var ns = {}; [c.ad, c.atlas_ad].concat(c.adlar || []).forEach(function (n) { var z = norm(n); if (z.length > 2) ns[z] = 1; }); Object.keys(ns).forEach(function (z) { (idx[z] = idx[z] || []).push(x[0] + ':' + c.id); }); }); }); });
// BORC kaynakları
var satirlar = []; // [ad, blok, neden, arama]
function mdTablo(dosya, blok) {
  var t = fs.readFileSync(path.join(D, dosya), 'utf8').split('\n');
  t.forEach(function (l) { if (!/^\|/.test(l) || /^\|[- |]+\|?$/.test(l) || /^\| şehir/.test(l)) return; var c = l.split('|').map(function (s) { return s.trim(); }).filter(function (s, i) { return i > 0; });
    if (c.length < 3) return; c[0].split(/,|\+| ve /).forEach(function (n) { n = n.trim(); if (n) satirlar.push([n, blok, c[1] || '', c[2] || '']); }); }); }
mdTablo('afrika-guney-bati/BORC.md', 'afrika-guney-bati'); mdTablo('hint/BORC.md', 'hint'); mdTablo('orta-asya-mogolistan/BORC.md', 'orta-asya-mogolistan');
function tsv(dosya, blok, adCol, nedenCol) { var yol = path.join(D, dosya); if (!fs.existsSync(yol)) return; var t = fs.readFileSync(yol, 'utf8').split('\n'); var b = t[0].split('\t'); var ai = b.indexOf(adCol), ni = b.indexOf(nedenCol);
  t.slice(1).filter(Boolean).forEach(function (l) { var c = l.split('\t'); if (c[ai]) satirlar.push([c[ai], blok, c[ni] || '', 'TDV dışı akademik']); }); }
function tsvTahmin(dosya, blok) { var yol = path.join(D, dosya); if (!fs.existsSync(yol)) return; var t = fs.readFileSync(yol, 'utf8').split('\n'); t.slice(1).filter(Boolean).forEach(function (l) { var c = l.split('\t'); if (c[0]) satirlar.push([c[0], blok, c.slice(1).join(' | ').slice(0, 200), 'TDV dışı akademik']); }); }
tsvTahmin('K3-OLCUM/parti3/A_BORC.tsv', 'hint(k3)'); tsvTahmin('K3-OLCUM/parti3/B_BORC.tsv', 'orta-asya(k3)'); tsvTahmin('hint/parti4/A_BORC.tsv', 'hint(parti4)'); tsvTahmin('afrika-guney-bati/parti4/B_BORC.tsv', 'afrika(parti4)'); tsvTahmin('orta-asya-mogolistan/parti4/B_BORC.tsv', 'orta-asya(parti4)');
var gor = {}; var cikti = ['sehir\tblok\tdurum\tneden\tarama_kaynagi\tkaynak_durumu'];
var sayi = { toplam: 0, kayitli: 0, bos: 0 };
satirlar.forEach(function (s) { var ad = s[0].replace(/^\*+|\*+$/g, ''); var key = norm(ad) + '|' + s[1]; if (gor[key]) return; gor[key] = 1; var z = norm(ad); var h = idx[z] || [];
  var durum = h.length ? 'ZATEN_KAYITLI:' + h.slice(0, 2).join(',') : 'BOS'; sayi.toplam++; if (h.length) sayi.kayitli++; else sayi.bos++;
  var kd = /Iranica|Britannica|archive|Sewell|Majumdar|UNESCO/i.test(s[3]) ? 'acik (tarayici)' : (/Millward|Hooja|de Silva|Epigraphia|Tillotson|Barthold|Bosworth|İSAM|JSTOR|Cambridge History|JAH|Journal/i.test(s[3]) ? 'kapali/kısmi (erişim testi: JSTOR giriş ister, Cambridge makale ölçülmedi, kitaplar yok)' : 'belirsiz');
  cikti.push([ad, s[1], durum, s[2].replace(/\t/g, ' '), s[3].replace(/\t/g, ' '), kd].join('\t')); });
fs.writeFileSync(path.join(D, 'BORC-GUNCEL.tsv'), cikti.join('\n') + '\n');
console.log('envanter dosyası', dosyalar.length, 'sehir adı anahtarı', Object.keys(idx).length, '| BORC satırı', sayi.toplam, 'ZATEN_KAYITLI', sayi.kayitli, 'BOS', sayi.bos);

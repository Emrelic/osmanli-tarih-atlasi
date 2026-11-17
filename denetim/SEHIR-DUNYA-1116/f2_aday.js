// F2 aday listesi: LAB LISTE.tsv satırlarından tarihçesi olmayanlar (data + origin/main + origin/sehir-*-1116 dalları). SALT OKUR.
// Çıktı: F2-ADAY.tsv (oncelik P1: giris atlas-k3/kronoloji ya da kronoloji_madde dolu; P2: britannica-eksik; P3: diğer)
var fs = require('fs'), vm = require('vm'), path = require('path'), cp = require('child_process');
var KOK = path.resolve(__dirname, '..', '..'), D = __dirname;
function norm(s) { return String(s || '').replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, ' ').trim(); }
function run(kod) { var win = {}, ctx = vm.createContext({ window: win, console: { log: function () {}, warn: function () {}, error: function () {} } }); try { vm.runInContext(kod, ctx, { timeout: 120000 }); } catch (e) {} return win; }
function git(a) { return cp.execSync('git -C "' + KOK + '" ' + a, { encoding: 'utf8', maxBuffer: 90 * 1024 * 1024 }); }
var kaynaklar = {}; // dosya adı -> metin (ilk gelen kazanır; yerel öncelikli)
fs.readdirSync(path.join(KOK, 'data')).filter(function (f) { return /^sehir_tarihce_.*\.js$/.test(f); }).forEach(function (f) { kaynaklar[f] = fs.readFileSync(path.join(KOK, 'data', f), 'utf8'); });
var refs = ['origin/main'].concat(git('branch -r').split('\n').map(function (s) { return s.trim(); }).filter(function (s) { return /^origin\/sehir-.*-1116$/.test(s); }));
refs.forEach(function (br) { try { git('ls-tree -r --name-only ' + br + ' data').split('\n').filter(function (s) { return /^data\/sehir_tarihce_.*\.js$/.test(s); }).forEach(function (d) { var ad = d.replace('data/', ''); if (!kaynaklar[ad]) { try { kaynaklar[ad] = git('show ' + br + ':' + d); } catch (e) {} } }); } catch (e) {} });
var idx = {};
Object.keys(kaynaklar).forEach(function (f) { var win = run(kaynaklar[f]); Object.keys(win).forEach(function (k) { if (!Array.isArray(win[k])) return; win[k].forEach(function (c) { if (!c || !c.id) return; [c.ad, c.atlas_ad].concat(c.adlar || []).forEach(function (n) { var z = norm(n); if (z.length > 2) (idx[z] = idx[z] || []).push(f); }); }); }); });
function tsv(dosya) { var t = fs.readFileSync(dosya, 'utf8').replace(/\r/g, '').split('\n'); var h = t[0].split('\t'); return t.slice(1).filter(Boolean).map(function (l) { var p = l.split('\t'), o = {}; h.forEach(function (k, i) { o[k] = p[i] || ''; }); return o; }); }
var cikti = ['blok\toncelik\tad_modern\tad_1900\tmodern_ulke\tlat\tlon\tgiris\tkat\tkronoloji_madde\tnot_'], say = {};
['afrika-guney-bati', 'hint', 'orta-asya-mogolistan'].forEach(function (b) {
  tsv(path.join(D, b, 'LISTE.tsv')).forEach(function (x) {
    var adlar = [x.ad_1900, x.ad_modern, x.atlas_en_yakin].concat((x.adlar || '').split(/[;|]/)).map(norm).filter(function (z) { return z.length > 2; });
    var var_ = adlar.some(function (z) { return idx[z]; }); if (var_) return;
    var p = (x.giris === 'atlas-k3' || x.giris === 'kronoloji' || x.kronoloji_madde) ? 'P1' : (x.giris === 'britannica-eksik' ? 'P2' : 'P3');
    say[b + ' ' + p] = (say[b + ' ' + p] || 0) + 1;
    cikti.push([b, p, x.ad_modern || x.atlas_en_yakin + ' (atlas)', x.ad_1900, x.modern_ulke, x.lat, x.lon, x.giris, x.kat, x.kronoloji_madde.slice(0, 120), x.not_.slice(0, 100)].join('\t'));
  });
});
fs.writeFileSync(path.join(D, 'F2-ADAY.tsv'), cikti.join('\n') + '\n');
console.log(JSON.stringify(say), 'toplam', cikti.length - 1, '| dosya', Object.keys(kaynaklar).length);

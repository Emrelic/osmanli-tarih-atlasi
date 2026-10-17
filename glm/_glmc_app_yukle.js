// GLM-C · APP GERÇEĞİ yükleyici — tarayıcının tembel yükleme sonrası belleğini
// birebir kurar: index.html'in eager yüklediği paket_12 (ANTLASMALAR) + app.js
// _EKOKUMA_DOSYA_ADLARI listesindeki dosyalar, TEK sandbox'ta, liste sırasıyla.
// Böylece "hangi kart GERÇEKTE görünür" sorusu dosya bazında ölçülebilir.
// Dump: glm/_glmc_app.json
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const KOK = path.resolve(__dirname, '..');

const app = fs.readFileSync(path.join(KOK, 'js', 'app.js'), 'utf8');
// 🔴 dizi gövdesinde YORUMLAR da var; ']' yorum içinde geçebilir → uç '\n];'
// ve satır başı '//' temizliği ŞART (ilk denemede 43 çıktı, doğrusu 75)
const i0 = app.indexOf('var _EKOKUMA_DOSYA_ADLARI');
const i1 = app.indexOf('[', i0), i2 = app.indexOf('\n];', i1);
const blok = app.slice(i1, i2).split('\n').map(l => l.split('//')[0]).join('\n');
const liste = [...blok.matchAll(/"([a-z0-9_]+)"/g)].map(m => m[1]);

const kume = {};
const sb = { window: kume, console: { log() {}, warn() {}, error() {} } };
sb.globalThis = kume; sb.self = kume;
vm.createContext(sb);
const sorun = [];
function kos(f) {
  const p = path.join(KOK, 'data', f);
  if (!fs.existsSync(p)) { sorun.push({ dosya: f, hata: 'YOK' }); return; }
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), sb, { filename: f }); }
  catch (e) { sorun.push({ dosya: f, hata: String(e) }); }
}
kos('paket_12.js');            // ANTLASMALAR burada — index.html eager yükler
for (const ad of liste) kos(ad + '.js');   // tembel yükleme, liste sırasıyla

const topla = re => Object.keys(kume).filter(k => re.test(k) && Array.isArray(kume[k]));
const cikti = { liste, sorun, ham: {} };
cikti.ekokuma_global = topla(/^EKOKUMA(_[A-Z0-9]+)?$/);
cikti.merak_global = topla(/^MERAK(_[A-Z0-9]+)?$/);
cikti.gorsel_global = topla(/^GORSEL_MADDE(_[A-Z0-9]+)?$/);
for (const k of Object.keys(kume)) {
  if (/^(EKOKUMA|MERAK|GORSEL_MADDE)/.test(k) || k === 'ANTLASMALAR' || k === 'EKOBAG_ONERI') {
    cikti.ham[k] = kume[k];
  }
}
fs.writeFileSync(path.join(__dirname, '_glmc_app.json'), JSON.stringify(cikti), 'utf8');
console.log(JSON.stringify({
  liste: liste.length, sorun: sorun.length,
  ekokuma_global: cikti.ekokuma_global.length,
  ekokuma_kart: cikti.ekokuma_global.reduce((t, k) => t + kume[k].length, 0),
  merak: cikti.merak_global.map(k => k + ':' + kume[k].length).join(','),
  gorsel: cikti.gorsel_global.map(k => k + ':' + kume[k].length).join(','),
  antlasma: (kume.ANTLASMALAR || []).length,
  ekobag: kume.EKOBAG_ONERI ? Object.keys(kume.EKOBAG_ONERI).length : 0,
}));

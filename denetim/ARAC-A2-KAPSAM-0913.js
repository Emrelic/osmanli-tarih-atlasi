// ============================================================================
// ARAC-A2-KAPSAM-0913 — ÇEKİRDEK kronolojide EK OKUMA kapsaması (0032/H-0013 planı)
// ============================================================================
//   node denetim/ARAC-A2-KAPSAM-0913.js            → özet + sonraki dalga listesi (ilk 40)
//   node denetim/ARAC-A2-KAPSAM-0913.js --json F   → tam listeyi F dosyasına yaz
//
// EVREN: index.html'in <script src> ile yüklediği data/olaylar*.js (ÇEKİRDEK, Değişmez 2
// evreni). Kuyruk (kronoloji*.js) BİLEREK dışarıda: H-0013 "tüm maddeler" diyor ama
// bir plan önce çekirdeği ölçer; kuyruk sayısı ayrıca basılır, listeye girmez.
// KART HAVUZU: data/ekokuma*.js + merak*.js (window.EKOKUMA* / MERAK*) + savaslar.js
// ANTLASMALAR (antlaşma türü onları da gösterir). Görsel (GORSEL_MADDE) ayrı sayılır.
// EŞLEŞME: app.js ekKartBagliMi/_ekBagEslesir'in kopyası (app.js:7497-7524).
// ⚠️ ÖLÇMEDİĞİ: bir kartın o maddede GERÇEKTEN görünüp görünmediği (app.js tür
//    süzgeci, lazy-load); "bağlı" = veri düzeyinde bağ.
// ============================================================================
const fs = require('fs');
const path = require('path');
const KOK = path.join(__dirname, '..');
const DATA = path.join(KOK, 'data');

function _ekNorm(s) {
  s = String(s == null ? "" : s)
    .replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
    .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c")
    .replace(/[Ââ]/g, "a").replace(/[Îî]/g, "i").replace(/[Ûû]/g, "u");
  if (s.normalize) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return s.toLowerCase().replace(/['‘’`ʼ]/g, "").replace(/\s+/g, " ").trim();
}
function _ekBagEslesir(v, o) {
  if (v == null) return false;
  var s = String(v), i = s.indexOf("|");
  if (i < 0) return s === o.t;
  if (s.slice(0, i) !== o.t) return false;
  var ayirt = _ekNorm(s.slice(i + 1));
  return !ayirt || _ekNorm(o.b).indexOf(ayirt) >= 0;
}
function _ekBagGun(v) { var s = String(v == null ? "" : v), i = s.indexOf("|"); return i < 0 ? s : s.slice(0, i); }
function ekKartBagliMi(kart, o) {
  var liste = kart.olay || kart.baglanti || [];
  for (var i = 0; i < liste.length; i++) if (_ekBagEslesir(liste[i], o)) return true;
  if (kart.tur === "magazin" || !kart.tur) {
    if (!_ekBagEslesir(kart.t, o)) return false;
    for (var j = 0; j < liste.length; j++) if (_ekBagGun(liste[j]) === o.t) return false;
    return true;
  }
  return false;
}
function yukle(dosya) {
  global.window = {};
  eval(fs.readFileSync(path.join(DATA, dosya), 'utf8'));
  return window;
}

const html = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
const src = [...html.matchAll(/<script[^>]*src=["']data\/([^"'?*]+\.js)/g)].map(m => m[1]);
const cekirdekDosya = [...new Set(src.filter(f => /^olaylar/.test(f)))];
const kuyrukDosya = [...new Set(src.filter(f => /^kronoloji/.test(f)))];

const MADDE = [];
for (const f of cekirdekDosya) {
  const w = yukle(f);
  for (const k of Object.keys(w)) if (Array.isArray(w[k])) for (const o of w[k]) if (o && o.t && o.b) MADDE.push(Object.assign({ _f: f }, o));
}
let kuyrukSay = 0;
for (const f of kuyrukDosya) {
  const w = yukle(f);
  for (const k of Object.keys(w)) if (Array.isArray(w[k])) kuyrukSay += w[k].filter(o => o && o.t && o.b).length;
}

const KART = [];
for (const f of fs.readdirSync(DATA).filter(f => /^(ekokuma|merak).*\.js$/.test(f))) {
  const w = yukle(f);
  for (const k of Object.keys(w)) if (Array.isArray(w[k])) for (const c of w[k]) if (c) KART.push(Object.assign({ _f: f }, c));
}
const ANT = (yukle('savaslar.js').ANTLASMALAR || []).map(a => Object.assign({ _f: 'savaslar.js', tur: 'antlasma-temel' }, a));
const GORSEL = [];
for (const f of fs.readdirSync(DATA).filter(f => /^gorsel_madde.*\.js$/.test(f))) {
  const w = yukle(f);
  for (const k of Object.keys(w)) if (/^GORSEL_MADDE/.test(k) && Array.isArray(w[k])) GORSEL.push(...w[k]);
}

// madde cinsi — H-0013'ün istediği tür eşlemesi için kaba sınıf (başlık + k alanı)
function cins(o) {
  const b = _ekNorm(o.b), k = String(o.k || '');
  if (/antlasma|muahede|sulh|baris/.test(b)) return 'antlasma';
  if (k === 'savas' || /savas|muharebe|kusatma|zafer|bozgun|yenilgi|baskin|fethi|seferi/.test(b)) return 'savas';
  if (k === 'taht' || /culus|tahta cik|vefat|olumu|idami|katli|hal edil|tahttan/.test(b)) return 'taht-olum';
  if (/cami|kulliye|saray|kopru|medrese|kutuphane|hisar|cesme|insa/.test(b)) return 'mimari';
  return 'diger';
}

const satirlar = MADDE.map(o => {
  const kartlar = KART.filter(c => ekKartBagliMi(c, o));
  const antTemel = ANT.filter(a => _ekBagEslesir(a.t, o)).length;
  const gorsel = GORSEL.some(g => (g.olay || []).some(v => _ekBagEslesir(v, o)));
  return { t: o.t, b: o.b, f: o._f, k: o.k || '', onem: o.onem || null, cins: cins(o),
           kart: kartlar.length, turler: [...new Set(kartlar.map(c => c.tur))], antTemel, gorsel };
});

const toplam = satirlar.length;
const kartli = satirlar.filter(s => s.kart > 0).length;
const gorselli = satirlar.filter(s => s.gorsel).length;
console.log(`ÇEKİRDEK evren: ${cekirdekDosya.length} dosya · ${toplam} madde (kuyruk ayrıca: ${kuyrukDosya.length} dosya · ${kuyrukSay} madde — listeye girmedi)`);
console.log(`kart havuzu: ${KART.length} ek okuma kartı + ${ANT.length} ANTLASMALAR temel kaydı · ${GORSEL.length} görsel kaydı`);
console.log(`en az 1 ek okuma kartı bağlı madde: ${kartli}/${toplam} (%${(100 * kartli / toplam).toFixed(1)}) · görselli: ${gorselli}/${toplam}`);

const cinsler = {};
for (const s of satirlar) {
  const c = cinsler[s.cins] = cinsler[s.cins] || { n: 0, kartli: 0 };
  c.n++; if (s.kart > 0) c.kartli++;
}
console.log('\ncins            madde   kartlı   kartsız');
for (const [c, v] of Object.entries(cinsler).sort((a, b) => b[1].n - a[1].n))
  console.log(`${c.padEnd(15)} ${String(v.n).padStart(5)}   ${String(v.kartli).padStart(6)}   ${String(v.n - v.kartli).padStart(7)}`);

// sonraki dalga: kartsız, cinsi H-0013/H-0007/H-0009/H-0010/H-0011 türlerinden birine denk düşen
// maddeler — önce savaş/antlaşma/taht-ölüm/mimari, içinde tarih sırası
const oncelik = { savas: 1, antlasma: 2, 'taht-olum': 3, mimari: 4, diger: 9 };
const aday = satirlar.filter(s => s.kart === 0 && s.cins !== 'diger')
  .sort((a, b) => (oncelik[a.cins] - oncelik[b.cins]) || a.t.localeCompare(b.t));
console.log(`\nSONRAKİ DALGA ADAYLARI (kartsız, sınıflanabilen): ${aday.length} — ilk 40:`);
for (const s of aday.slice(0, 40)) console.log(`  [${s.cins}] ${s.t} | ${s.b} | ${s.f}${s.antTemel ? ' (ANTLASMALAR temel kaydı var)' : ''}`);

const i = process.argv.indexOf('--json');
if (i > 0 && process.argv[i + 1]) {
  fs.writeFileSync(process.argv[i + 1], JSON.stringify({ toplam, kartli, gorselli, cinsler, aday }, null, 1), 'utf8');
  console.log('\ntam liste yazıldı:', process.argv[i + 1]);
}

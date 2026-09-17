// 1DUNYA-A sınavı — data/kronoloji_cok_1dunya_A.js
// Kullanım:  node denetim/ARAC-1DUNYA-A-SINA-0917.js [--etkin <id,id,...>]
//
// ① index.html'in yüklediği bütün data/*.js dosyalarını okur
// ② app.js'in iki bindiricisini TAKLİT eder:
//      derinKronolojiBindir  KRONOLOJI_<ID>  → künye.kronoloji  (= ile EZER)
//      cokTarafliKronolojiEkle KRONOLOJI_(SINIR|COK)_* → taraflar[] her künyeye EKLER
//    ⇒ "künye ekranda NE gösteriyor" sorusunun cevabı (etkin kronoloji)
// ③ 1DUNYA-A dosyasını index.html'de OLMASA da ayrıca yükler
// ④ her madde için: alan şeması · taraflar id'si künyede var mı · `osmanli` yasak ·
//    her taraf için etkin kronolojide ±3 gün içinde AYNI OLAYIN maddesi var mı
//    (anahtar kelime kesişimi) — varsa MÜKERRER ŞÜPHESİ basar, exit 1
// ⑤ taraf künyesinin penceresi dışına düşen madde uyarısı
const fs = require('fs');
global.window = {}; global.document = {};
const html = fs.readFileSync('index.html', 'utf8');
const src = [...html.matchAll(/<script src="(data\/[^"?]+)/g)].map(m => m[1]);
const HEDEF = 'data/kronoloji_cok_1dunya_A.js';
for (const f of src) {
  if (f === HEDEF) continue;
  try { eval(fs.readFileSync(f, 'utf8')); } catch (e) { console.error('YUKLEME HATASI', f, e.message); }
}
const D = window.DEVLETLER, ix = {};
for (const d of D) { ix[d.id] = d; d._etkin = (d.kronoloji || []).slice(); }
// ② derin bindirici
const bagli = {};
for (const k of Object.keys(window)) {
  if (!k.startsWith('KRONOLOJI_') || /^KRONOLOJI_(SINIR|COK)_/.test(k)) continue;
  const v = window[k]; if (!Array.isArray(v) || !v.length) continue;
  const a = [k.slice(10).toLowerCase()]; if (a[0].includes('_')) a.push(a[0].replace(/_/g, '-'));
  const id = a.find(x => ix[x]);
  if (id) { ix[id]._etkin = v.slice(); bagli[id] = k; }
}
// çok taraflı (benimki HARİÇ)
function cokEkle(arr, etiket) {
  for (const m of arr) for (const id of (m.taraflar || m.devletler || (m.devlet ? [m.devlet] : []))) {
    const d = ix[id]; if (!d) continue;
    if (d._etkin.some(o => o.t === m.t && o.b === m.b)) continue;
    d._etkin.push(Object.assign({ _kaynak: etiket }, m));
  }
}
for (const k of Object.keys(window))
  if (/^KRONOLOJI_(SINIR|COK)_/.test(k) && k !== 'KRONOLOJI_COK_1DUNYA_A') cokEkle(window[k] || [], k);

const argv = process.argv.slice(2);
if (argv[0] === '--etkin') {
  for (const id of argv[1].split(',')) {
    const d = ix[id];
    if (!d) { console.log('YOK', id); continue; }
    console.log('== ' + id + ' | ' + d.ad + ' | ' + d.f + '→' + d.t + ' | bagli: ' + (bagli[id] || 'kunye'));
    for (const o of d._etkin.filter(o => String(o.t) >= '1914-06' && String(o.t) < '1924').sort((a, b) => String(a.t) < String(b.t) ? -1 : 1))
      console.log('   ' + o.t + '  ' + String(o.b).slice(0, 100) + (o._kaynak ? '  [' + o._kaynak + ']' : ''));
  }
  process.exit(0);
}

// ③ hedef
global.window.KRONOLOJI_COK_1DUNYA_A = undefined;
eval(fs.readFileSync(HEDEF, 'utf8'));
const A = window.KRONOLOJI_COK_1DUNYA_A.slice();
// --oz-sinav: bilinen bir mükerrer (KRONOLOJI_RUSYA 1914-08-26 Tannenberg) enjekte edilir; alet onu YAKALAMALI
if (argv[0] === '--oz-sinav')
  A.push({ t: '1914-08-27', taraflar: ['rusya'], devletler: ['rusya'], b: 'Tannenberg yenilgisi', d: 'x', tur: 'savas',
           onem: 1, dunya: 1, kapsam: 'dis', etiket: ['1-dunya-savasi'], kaynak: 'SINAV' });
// BEYANLI AYRIM — kelime örtüşse de AYRI olay (şüphe basılır ama sayılmaz)
const AYRI = new Set([
  'almanya|1914-08-02|1914-08-04',   // Lüksemburg işgali ≠ Belçika işgali (LUX makalesi: 2 Ağustos sabahı)
]);
if (!Array.isArray(A)) { console.log('🔴 KRONOLOJI_COK_1DUNYA_A dizi değil'); process.exit(1); }
const TUR = new Set(['savas', 'isgal', 'antlasma', 'toprak-kazanc', 'toprak-kayip', 'ittifak', 'son', 'kurulus', 'isyan',
  'muhasara', 'fetih', 'mutareke', 'ilhak', 'bagimsizlik', 'darbe', 'devrim', 'siyasi', 'tahta-cikis', 'diplomasi', 'plebisit', 'cekilme', 'iktidar']);
const gun = s => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5);
const DUR = new Set(['ve', 'ile', 'bir', 'the', 'savaş', 'savaşı', 'ilan', 'etti', 'i.', 'dünya', 'savaşı\'na', '—', '-', 'antlaşması', 'imzalandı', 'başladı', 'muharebesi']);
// ülke/halk kökleri ORTAK SÖZCÜK SAYILMAZ — "alman" her Alman maddesinde geçer (ilk koşuda 10 sahte şüphe)
const ULKE = new Set(['alman', 'almanl', 'frans', 'ingil', 'brita', 'rusya', 'rusla', 'avust', 'macar', 'belçi', 'bulga',
  'sırbi', 'sırpl', 'itaya', 'italy', 'roman', 'karad', 'yunan', 'portek', 'polon', 'sovye', 'ukray', 'letto', 'eston', 'litva', 'merke', 'devle', 'itilâ', 'itila']);
const pad = s => String(s).replace(/^(\d{1,3})-/, (m, y) => y.padStart(4, '0') + '-');   // üç haneli yıl tuzağı (CLAUDE.md §3.5.0)
const kel = s => new Set(String(s).toLocaleLowerCase('tr').replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(w => w.length > 3 && !DUR.has(w)).map(w => w.slice(0, 5)).filter(w => !ULKE.has(w)));
let hata = 0, supheli = 0, uyari = 0, eslenmeyen = {};
const tb = new Set();
A.forEach((m, i) => {
  const ad = '#' + i + ' ' + m.t + ' ' + String(m.b).slice(0, 60);
  for (const f of ['t', 'taraflar', 'devletler', 'b', 'd', 'tur', 'onem', 'dunya', 'kapsam', 'etiket', 'kaynak'])
    if (m[f] === undefined || m[f] === '') { console.log('🔴 ALAN YOK', f, ad); hata++; }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(m.t)) { console.log('🔴 TARİH BİÇİMİ', ad); hata++; return; }
  if (!TUR.has(m.tur)) { console.log('🟡 tur sözlükte yok:', m.tur, ad); uyari++; }
  if (!(m.etiket || []).includes('1-dunya-savasi')) { console.log('🔴 etiket 1-dunya-savasi yok', ad); hata++; }
  if (tb.has(m.t + m.b)) { console.log('🔴 DOSYA İÇİ MÜKERRER', ad); hata++; } tb.add(m.t + m.b);
  if ((m.taraflar || []).includes('osmanli')) { console.log('🔴 taraflar osmanli içeriyor', ad); hata++; }
  const k1 = kel(m.b + ' ' + (m.anahtar || ''));
  for (const id of (m.taraflar || [])) {
    const d = ix[id];
    if (!d) { (eslenmeyen[id] = eslenmeyen[id] || []).push(m.t); continue; }
    if (m.t < pad(d.f) || m.t > pad(d.t)) { console.log('🟡 künye penceresi dışı', id, d.f + '→' + d.t, ad); uyari++; }
    for (const o of d._etkin) {
      const ot = String(o.t || ''); if (ot.length < 10) continue;
      if (Math.abs(gun(ot) - gun(m.t)) > 3) continue;
      const k2 = kel(o.b);
      const ort = [...k1].filter(w => k2.has(w));
      if (ort.length) {
        const beyan = AYRI.has(id + '|' + m.t + '|' + ot);
        console.log(beyan ? '⚪ beyanlı ayrı olay' : '🟠 MÜKERRER ŞÜPHESİ', id, '|', ad, '<>', ot, String(o.b).slice(0, 60), '| ortak:', ort.join(','));
        if (!beyan) supheli++;
      }
    }
  }
});
console.log('\nmadde', A.length, '| taraf-bağı', A.reduce((s, m) => s + (m.taraflar || []).length, 0),
  '| hata', hata, '| mükerrer şüphesi', supheli, '| uyarı', uyari);
const e = Object.keys(eslenmeyen);
console.log('künyesi olmayan taraf:', e.length ? e.map(k => k + ' (' + eslenmeyen[k].length + ')').join(', ') : 'yok');
process.exit(hata || supheli ? 1 : 0);

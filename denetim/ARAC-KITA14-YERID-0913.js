// KITA 14 · 13 Eylül 2026 · YAMA-YER-ID-0913.json (KITA 25) 36 önerisinin SINAVI
// Salt okur. Her öneri için:
//   tek-yer   : öneri koordinatı ↔ yerlesimler*.js'te aynı adlı nokta (normalleştirilmiş ad, parantez içi alternatif ad)
//               sapma km · 5 km eşiği (1.MURAT M-3747)
//   çok-yer   : yer metnindeki adların noktaları · en büyük çift arası mesafe · orta nokta
//   yazım     : yer_id_yeni adıyla nokta var mı
// Ayrıca hedef maddenin bugünkü yer / yer_id / yer_kon / kapsam_genis alanları.
// Kullanım: node denetim/ARAC-KITA14-YERID-0913.js
const fs = require('fs'), path = require('path');
const D = 'data';
const norm = s => String(s || '')
  .replace(/[İIı]/g, 'i').replace(/[Şş]/g, 's').replace(/[Ğğ]/g, 'g').replace(/[Üü]/g, 'u')
  .replace(/[Öö]/g, 'o').replace(/[Çç]/g, 'c').replace(/[ʻʼ’'`‘]/g, '')
  .normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

// ── yerleşimler: bütün yerlesimler*.js (girdi.py kümesinden GENİŞ — ad araması için yeterli)
const noktalar = [];
for (const f of fs.readdirSync(D).filter(f => /^yerlesimler.*\.js$/.test(f))) {
  global.window = {};
  try { eval(fs.readFileSync(path.join(D, f), 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(window)) {
    const v = window[k]; if (!Array.isArray(v)) continue;
    for (const y of v) if (y && y.ad && typeof y.lat === 'number') noktalar.push({ ...y, _dosya: f });
  }
}
const adlar = y => {
  const a = [y.ad]; const m = String(y.ad).match(/^(.*?)\s*\((.*)\)\s*$/);
  if (m) { a.push(m[1]); for (const p of m[2].split(/[\/,;]/)) a.push(p); }
  return a.map(norm).filter(Boolean);
};
const indeks = {};
for (const y of noktalar) for (const a of adlar(y)) (indeks[a] = indeks[a] || []).push(y);
const bul = ad => indeks[norm(ad)] || [];

const km = (a, b) => {
  const R = 6371, r = x => x * Math.PI / 180;
  const dLa = r(b[0] - a[0]), dLo = r(b[1] - a[1]);
  const h = Math.sin(dLa / 2) ** 2 + Math.cos(r(a[0])) * Math.cos(r(b[0])) * Math.sin(dLo / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

// ── olaylar: hedef madde
const olaylar = {};
const oku = f => {
  if (olaylar[f]) return olaylar[f];
  global.window = {}; eval(fs.readFileSync(path.join(D, f), 'utf8'));
  return (olaylar[f] = Object.keys(window).flatMap(k => window[k]));
};

const J = JSON.parse(fs.readFileSync('denetim/YAMA-YER-ID-0913.json', 'utf8'));
const O = J.kayitlar.filter(x => x.oneri != null);
console.log('nokta:', noktalar.length, '· öneri:', O.length, '\n');
let i = 0;
for (const x of O) {
  i++;
  const f = x.dosya.replace(/^data[\\\/]/, '');
  const m = oku(f).find(o => o.t === x.t && o.b === x.b);
  const simdi = m ? `yer_id=${JSON.stringify(m.yer_id)} yer_kon=${JSON.stringify(m.yer_kon)} kapsam_genis=${JSON.stringify(m.kapsam_genis)}` : '🔴 MADDE BULUNAMADI';
  let sonuc = '';
  if (x.kova === 'tek-yer-yerkon-onerisi') {
    const ad = String(x.yer).split(',')[0].trim();
    const es = bul(ad);
    if (!es.length) sonuc = `nokta YOK ("${ad}")`;
    else sonuc = es.map(y => `${y.ad} [${y.lat},${y.lon}] ${y._dosya} sapma ${km(x.oneri.yer_kon, [y.lat, y.lon]).toFixed(1)} km`).join(' ; ');
  } else if (x.kova === 'cok-yer-kapsamgenis-onerisi') {
    const parca = String(x.yer).split(/\s*(?:,|\/| ve )\s*/).map(s => s.replace(/\(.*?\)/g, '').trim()).filter(Boolean);
    const bulunan = [], yok = [];
    for (const p of parca) { const es = bul(p); if (es.length) bulunan.push([p, es[0]]); else yok.push(p); }
    let enb = 0;
    for (let a = 0; a < bulunan.length; a++) for (let b = a + 1; b < bulunan.length; b++)
      enb = Math.max(enb, km([bulunan[a][1].lat, bulunan[a][1].lon], [bulunan[b][1].lat, bulunan[b][1].lon]));
    const orta = bulunan.length ? [bulunan.reduce((s, q) => s + q[1].lat, 0) / bulunan.length, bulunan.reduce((s, q) => s + q[1].lon, 0) / bulunan.length].map(v => +v.toFixed(4)) : null;
    sonuc = `bulunan ${bulunan.map(q => q[0] + '→' + q[1].ad).join(' · ') || '—'} | yok: ${yok.join(' · ') || '—'} | en büyük çift ${enb.toFixed(0)} km | orta ${JSON.stringify(orta)}`;
  } else {
    const es = bul(x.oneri.yer_id_yeni);
    sonuc = `yer_id_yeni "${x.oneri.yer_id_yeni}" → ${es.length ? es.map(y => y.ad + ' (' + y._dosya + ')').join(' ; ') : 'nokta YOK'} · tam ad eşleşmesi: ${noktalar.some(y => y.ad === x.oneri.yer_id_yeni)}`;
  }
  console.log(`${i}. ${f} ${x.t} | ${x.b.slice(0, 60)} | ${x.kova}\n   yer: ${x.yer} | öneri ${JSON.stringify(x.oneri)}\n   şimdi: ${simdi}\n   ⇒ ${sonuc}`);
}

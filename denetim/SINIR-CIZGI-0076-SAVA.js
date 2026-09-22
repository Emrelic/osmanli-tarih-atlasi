// -*- coding: utf-8 -*-
// H-0116 — `karlofca-bosna-sava-1699` DUZ KIRIS mi, SAVA mi?
// Kayit `hat.tur:"dogal-tanimsiz"`: app.js iki ucu DUZ CIZGIYLE baglar (js/app.js:7422).
// Karlofca'nin Bosna siniri ise SAVA NEHRIDIR. Bu alet ikisi arasindaki sapmayi olcer
// ve gercek Sava govdesini (Natural Earth 10m, data/altlik.js ALTLIK.nehir) cikarir.
'use strict';
global.window = global;
const fs = require('fs');
eval(fs.readFileSync('C:/atlas/data/altlik.js', 'utf8'));
const A = window.ALTLIK || {};
const UC1 = [17.988, 45.138];     // Brod Kalesi
const UC2 = [19.3706, 44.9411];   // Bosut'un Sava'ya dokuldugu yer

const R = 6371;
const rad = d => d * Math.PI / 180;
function km(a, b) {
  const dLat = rad(b[1] - a[1]), dLon = rad(a[0] - b[0]) * Math.cos(rad((a[1] + b[1]) / 2));
  return R * Math.sqrt(dLat * dLat + dLon * dLon);
}
function kirisaUzaklik(p) {          // noktanin UC1-UC2 kirisine dik uzakligi (km, duzlemsel yaklasim)
  const k = Math.cos(rad((UC1[1] + UC2[1]) / 2));
  const ax = UC1[0] * k, ay = UC1[1], bx = UC2[0] * k, by = UC2[1], px = p[0] * k, py = p[1];
  const dx = bx - ax, dy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  const cx = ax + t * dx, cy = ay + t * dy;
  return R * Math.sqrt(rad(px - cx) ** 2 + rad(py - cy) ** 2);
}

// Sava'yi bul: iki ucun ikisine de yakin gecen nehir cizgisi
const kaynaklar = ['nehir', 'nehir_motorun'];
let enIyi = null;
kaynaklar.forEach(ad => {
  const g = A[ad]; if (!g || !g.features) return;
  g.features.forEach((f, i) => {
    const hatlar = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
    hatlar.forEach(h => {
      let d1 = 1e9, d2 = 1e9;
      h.forEach(p => { d1 = Math.min(d1, km(p, UC1)); d2 = Math.min(d2, km(p, UC2)); });
      if (d1 < 30 && d2 < 30) {
        const puan = d1 + d2;
        if (!enIyi || puan < enIyi.puan)
          enIyi = { puan, ad, i, h, d1, d2, isim: JSON.stringify(f.properties || {}).slice(0, 160) };
      }
    });
  });
});

if (!enIyi) { console.log('⚪ Iki uca da 30 km icinde gecen nehir BULUNAMADI (altlik.js).'); process.exit(0); }
console.log('Sava adayi: ' + enIyi.ad + '[' + enIyi.i + '] · uc1e ' + enIyi.d1.toFixed(1) +
  ' km · uc2ye ' + enIyi.d2.toFixed(1) + ' km · ' + enIyi.h.length + ' nokta');
console.log('ozellikler: ' + enIyi.isim);

// iki uc arasindaki parcayi kes
function enYakinIndeks(h, p) { let en = 1e9, ix = 0; h.forEach((q, j) => { const d = km(q, p); if (d < en) { en = d; ix = j; } }); return ix; }
let i1 = enYakinIndeks(enIyi.h, UC1), i2 = enYakinIndeks(enIyi.h, UC2);
const ters = i1 > i2; if (ters) { const t = i1; i1 = i2; i2 = t; }
let parca = enIyi.h.slice(i1, i2 + 1);
if (ters) parca = parca.slice().reverse();

let uzun = 0; for (let j = 1; j < parca.length; j++) uzun += km(parca[j - 1], parca[j]);
const kirisUzun = km(UC1, UC2);
let enSapma = 0, toplam = 0;
parca.forEach(p => { const d = kirisaUzaklik(p); enSapma = Math.max(enSapma, d); toplam += d; });

console.log('\n== OLCUM ==');
console.log('  duz kiris (bugun cizilen) : ' + kirisUzun.toFixed(1) + ' km, 2 nokta');
console.log('  Sava govdesi (ayni iki uc): ' + uzun.toFixed(1) + ' km, ' + parca.length + ' nokta');
console.log('  kirisin nehirden EN COK sapmasi : ' + enSapma.toFixed(1) + ' km');
console.log('  ortalama sapma                  : ' + (toplam / parca.length).toFixed(1) + ' km');
console.log('  uzunluk farki                   : ' + (uzun - kirisUzun).toFixed(1) + ' km (%' + (100 * (uzun - kirisUzun) / kirisUzun).toFixed(0) + ')');

fs.writeFileSync('C:/atlas/denetim/SINIR-CIZGI-0076-sava-hat.json',
  JSON.stringify({ kaynak: 'data/altlik.js ALTLIK.' + enIyi.ad + '[' + enIyi.i + '] (Natural Earth 10m)',
    uc1: UC1, uc2: UC2, nokta: parca.length, uzunluk_km: +uzun.toFixed(1), hat: parca.map(p => [+p[0].toFixed(4), +p[1].toFixed(4)]) }, null, 0));
console.log('\n  govde yazildi: denetim/SINIR-CIZGI-0076-sava-hat.json');

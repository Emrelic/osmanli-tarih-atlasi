// -*- coding: utf-8 -*-
// HUKUKI_SINIRLAR (C gosterimi) kayitlarini gun + kutu ile suzer.
// {lat,lon} NESNESI kullandigi icin genel tarayici (KATMAN-AVI) bunlari KACIRIR — bu
// aletin varlik sebebi odur.
// Kullanim: node denetim/SINIR-CIZGI-0076-HUKUKI.js [gun] [G K B D]
'use strict';
global.window = global;
const fs = require('fs');
eval(fs.readFileSync('C:/atlas/data/hukuki_sinirlar.js', 'utf8'));
const H = window.HUKUKI_SINIRLAR || [];
const GUN = process.argv[2] || null;
const kutu = process.argv.length > 6 ? {
  G: +process.argv[3], K: +process.argv[4], B: +process.argv[5], D: +process.argv[6]
} : null;
const pad = s => { if (s == null) return null; const m = String(s).match(/^(\d{1,4})(-\d{2})?(-\d{2})?/); return m ? ('0000' + m[1]).slice(-4) + (m[2] || '-01') + (m[3] || '-01') : null; };

function noktalar(k) {
  const out = [];
  (function gez(n) {
    if (!n || typeof n !== 'object') return;
    if (typeof n.lat === 'number' && typeof n.lon === 'number') { out.push([n.lon, n.lat, n.ad || '']); return; }
    if (Array.isArray(n)) { n.forEach(gez); return; }
    Object.keys(n).forEach(a => gez(n[a]));
  })(k.hat);
  return out;
}

console.log('HUKUKI_SINIRLAR kaydi:', H.length, GUN ? ('· gun ' + GUN) : '', kutu ? ('· kutu ' + JSON.stringify(kutu)) : '');
H.forEach(k => {
  const np = noktalar(k);
  let gunTamam = true, kutuTamam = true;
  if (GUN) {
    const g = pad(GUN), f = pad(k.f), t = pad(k.t);
    gunTamam = (!f || g >= f) && (!t || g < t);
  }
  if (kutu) kutuTamam = np.some(p => p[0] >= kutu.B && p[0] <= kutu.D && p[1] >= kutu.G && p[1] <= kutu.K);
  if (!gunTamam || !kutuTamam) return;
  console.log('\n· ' + k.id + ' · f=' + k.f + ' t=' + k.t + ' · hat.tur=' + (k.hat && k.hat.tur) +
    ' · hassasiyet=' + k.hassasiyet + ' · taraflar=' + JSON.stringify(k.taraflar));
  np.forEach(p => console.log('     [' + p[0] + ', ' + p[1] + '] ' + p[2]));
});

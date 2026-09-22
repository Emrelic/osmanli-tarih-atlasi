// -*- coding: utf-8 -*-
// SINIR-CIZGI-0076 — "BU CIZGI NEYIN NESI" ALETI (genel).
// Verilen kutuda GECEN her cizgi/koordinat dizisini, HANGI data dosyasinda ve
// hangi degiskende oldugunu soyler. D katmani disindaki katmanlari da tarar.
// Kullanim: node denetim/SINIR-CIZGI-0076-KATMAN-AVI.js <G> <K> <B> <D> [gun]
//   ornek : node denetim/SINIR-CIZGI-0076-KATMAN-AVI.js 44.80 45.20 17.86 19.35 1909-04-27
// 🔴 donemler.js / devletler_harita.js (59+72 MB, PETEK GOVDESI) KASTEN TARANMAZ:
//    onlar cizgi degil DOLGU; dolgunun konturu js/app.js:2129'da ayri cizilir
//    (D-RENK-0073-OLCUM-0920.md §0 bunu bir kez olcmustu).
'use strict';
global.window = global;
const fs = require('fs');
const P = 'C:/atlas/data/';

const G = parseFloat(process.argv[2]), K = parseFloat(process.argv[3]);
const B = parseFloat(process.argv[4]), D = parseFloat(process.argv[5]);
const GUN = process.argv[6] || null;
const ATLA = /^(donemler|devletler_harita)\.js$/;      // dev dolgu dosyalari
const icinde = (x, y) => x >= B && x <= D && y >= G && y <= K;

const pad = s => {
  if (s == null) return null;
  const m = String(s).match(/^(\d{1,4})(-\d{2})?(-\d{2})?/);
  return m ? ('0000' + m[1]).slice(-4) + (m[2] || '-01') + (m[3] || '-01') : null;
};

const dosyalar = fs.readdirSync(P).filter(f => f.endsWith('.js') && !ATLA.test(f));
console.log('kutu: ' + G + '-' + K + 'K · ' + B + '-' + D + 'D' + (GUN ? ' · gun ' + GUN : ' · gun suzgeci YOK'));
console.log('taranan dosya: ' + dosyalar.length + ' (donemler.js + devletler_harita.js HARIC)');

const gorulen = {};
dosyalar.forEach(f => {
  let onceki = new Set(Object.keys(global));
  try { eval(fs.readFileSync(P + f, 'utf8')); } catch (e) { return; }
  const yeni = Object.keys(global).filter(k => !onceki.has(k));
  yeni.forEach(degisken => {
    const v = global[degisken];
    gez(v, [], f, degisken, 0);
  });
});

function gez(node, yol, dosya, degisken, derinlik) {
  if (node == null || derinlik > 8) return;
  if (Array.isArray(node)) {
    // [lon,lat] cifti mi?
    if (node.length === 2 && typeof node[0] === 'number' && typeof node[1] === 'number') {
      if (icinde(node[0], node[1])) kaydet(dosya, degisken, yol, node);
      return;
    }
    for (let i = 0; i < node.length; i++) gez(node[i], yol.concat(i), dosya, degisken, derinlik + 1);
    return;
  }
  if (typeof node === 'object') {
    for (const k in node) {
      if (!Object.prototype.hasOwnProperty.call(node, k)) continue;
      const v = node[k];
      if (typeof v === 'object' && v !== null) gez(v, yol.concat(k), dosya, degisken, derinlik + 1);
    }
  }
}

function kaydet(dosya, degisken, yol, nokta) {
  // kaydin kokunu (dizideki ust seviye ogeyi) bul: yol[0] sayi ise o indeks
  const anahtar = dosya + '|' + degisken + '|' + (typeof yol[0] === 'number' ? yol[0] : yol[0]);
  if (!gorulen[anahtar]) gorulen[anahtar] = { dosya, degisken, kok: yol[0], n: 0, ornek: nokta, yol: yol };
  gorulen[anahtar].n++;
}

const satirlar = Object.values(gorulen);
if (!satirlar.length) { console.log('\n⚪ KUTUDA HICBIR CIZGI/NOKTA YOK (taranan dosyalarda).'); }
satirlar.sort((a, b) => b.n - a.n).forEach(s => {
  const kok = global[s.degisken] && Array.isArray(global[s.degisken]) ? global[s.degisken][s.kok] : null;
  let kimlik = '';
  if (kok && typeof kok === 'object') {
    kimlik = ' · ' + JSON.stringify({ id: kok.id, ad: kok.ad, f: kok.f, t: kok.t, tur: kok.tur, sinif: kok.sinif, kategori: kok.kategori,
      taraflar: kok.taraflar, d: kok.d, baslik: kok.baslik }).replace(/,?"[a-z_]+":(null|undefined)/g, '');
  }
  let gunNotu = '';
  if (GUN && kok && typeof kok === 'object' && (kok.f || kok.t)) {
    const g = pad(GUN), f = pad(kok.f), t = pad(kok.t);
    gunNotu = (f && g < f) ? '  ⚪ O GUN YURURLUKTE DEGIL (f sonra)' :
      (t && g >= t) ? '  ⚪ O GUN YURURLUKTE DEGIL (t once)' : '  ✅ O GUN YURURLUKTE';
  }
  console.log('\n· ' + s.dosya + ' → window.' + s.degisken + '[' + s.kok + '] · kutuda ' + s.n + ' nokta' + gunNotu);
  console.log('    yol ornegi: ' + JSON.stringify(s.yol.slice(0, 4)) + kimlik.slice(0, 400));
});

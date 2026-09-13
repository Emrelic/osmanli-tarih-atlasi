// denetim/ARAC-KPS-UYGULA-0913.js — PAKET-KAPSAM · `kapsam:"dis"` UYGULAYICI
// ---------------------------------------------------------------------------
// Varsayılan KURU koşu; yazmak için --yaz.
// Yalnız `kapsam:"dis", ` metnini hedef maddenin `b:` alanının ÖNÜNE ekler.
// Biçim korunur (başka hiçbir bayt değişmez).
//
// GÜVENLİK (her biri tutmazsa ÇÖKER, dosya YAZILMAZ — D117/D068: çökmek
// sessiz yanlıştan iyidir):
//   ① dosya#sıra maddesinin t'si ve b başı listedekiyle aynı
//   ② madde kapsam TAŞIMIYOR (mevcut değer ezilmez)
//   ③ kaynakta o b değerini taşıyan `b:` sabiti; birden çoksa en yakın önceki
//      t: sabiti eşleşen TEK aday
//   ④ yazım SONRASI dosya yeniden yüklenir: dizi uzunlukları aynı; hedefler
//      kapsam:"dis"; hedef dışı HER madde JSON olarak birebir aynı; hedeflerin
//      kapsam dışındaki alanları birebir aynı
// ---------------------------------------------------------------------------
const fs = require('fs'), path = require('path'), vm = require('vm');
const DATA = path.join(__dirname, '..', 'data');
const LISTE = require('./ARAC-KPS-LISTE-0913.js');
const YAZ = process.argv.includes('--yaz');

function yukle(code, f) {
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx, { filename: f });
  const anahtarlar = Object.keys(ctx.window).filter(k => k.startsWith('OLAYLAR') && Array.isArray(ctx.window[k]));
  return { anahtarlar, dizi: anahtarlar.flatMap(k => ctx.window[k]), uzun: anahtarlar.map(k => ctx.window[k].length) };
}
function sabit(ham, tirnak) { return vm.runInNewContext(tirnak + ham + tirnak); }

const dosyaHedef = {};
for (const [anahtar, t, bBas, kademe] of LISTE) {
  const [f, i] = anahtar.split('#');
  (dosyaHedef[f] = dosyaHedef[f] || []).push({ i: +i, t, bBas, kademe, anahtar });
}
const tekrar = LISTE.map(x => x[0]).filter((x, j, a) => a.indexOf(x) !== j);
if (tekrar.length) throw new Error('listede mükerrer anahtar: ' + tekrar.join(', '));

let toplam = 0, zatenToplam = 0;
const rapor = {};
for (let [f, hedefler] of Object.entries(dosyaHedef)) {
  const yol = path.join(DATA, f);
  const once = fs.readFileSync(yol, 'utf8');
  const Y = yukle(once, f);
  // kaynaktaki bütün b: ve t: sabitleri (çift ya da tek tırnak, boşluklu ya da boşluksuz — D125)
  const bSab = [...once.matchAll(/\bb\s*:\s*(["'])((?:(?!\1)[^\\]|\\.)*)\1/g)].map(m => ({ ix: m.index, deger: sabit(m[2], m[1]) }));
  const tSab = [...once.matchAll(/\bt\s*:\s*(["'])((?:(?!\1)[^\\]|\\.)*)\1/g)].map(m => ({ ix: m.index, deger: sabit(m[2], m[1]) }));
  const ekle = [];
  // İDEMPOTENT: zaten kapsam:"dis" taşıyan hedef ATLANIR (sayılır); başka bir değer ÇÖKERTİR.
  const zaten = hedefler.filter(h => Y.dizi[h.i] && Y.dizi[h.i].kapsam === 'dis' && Y.dizi[h.i].t === h.t && String(Y.dizi[h.i].b).startsWith(h.bBas));
  hedefler = hedefler.filter(h => !zaten.includes(h));
  zatenToplam += zaten.length;
  if (!hedefler.length) { rapor[f] = '0 yeni · ' + zaten.length + ' zaten'; continue; }
  for (const h of hedefler) {
    const m = Y.dizi[h.i];
    if (!m) throw new Error(h.anahtar + ': madde YOK');
    if (m.t !== h.t || !String(m.b).startsWith(h.bBas)) throw new Error(h.anahtar + ': t/b TUTMUYOR → ' + m.t + ' | ' + m.b);
    if (m.kapsam !== undefined) throw new Error(h.anahtar + ': zaten kapsam=' + m.kapsam);
    let aday = bSab.filter(x => x.deger === m.b);
    if (aday.length > 1) aday = aday.filter(x => { const onceT = tSab.filter(tt => tt.ix < x.ix).pop(); return onceT && onceT.deger === m.t; });
    if (aday.length !== 1) throw new Error(h.anahtar + ': kaynakta b sabiti ' + aday.length + ' aday');
    ekle.push(aday[0].ix);
  }
  if (new Set(ekle).size !== ekle.length) throw new Error(f + ': iki hedef aynı b sabitine düştü');
  let sonra = once;
  for (const ix of ekle.sort((a, b) => b - a)) sonra = sonra.slice(0, ix) + 'kapsam:"dis", ' + sonra.slice(ix);
  // ④ doğrulama
  const S = yukle(sonra, f);
  if (JSON.stringify(S.uzun) !== JSON.stringify(Y.uzun)) throw new Error(f + ': dizi uzunluğu değişti');
  const hi = new Set(hedefler.map(h => h.i));
  for (let j = 0; j < Y.dizi.length; j++) {
    const a = Y.dizi[j], b = S.dizi[j];
    if (hi.has(j)) {
      if (b.kapsam !== 'dis') throw new Error(f + '#' + j + ': kapsam inmedi');
      const kopya = Object.assign({}, b); delete kopya.kapsam;
      if (JSON.stringify(kopya) !== JSON.stringify(a)) throw new Error(f + '#' + j + ': başka alan değişti');
    } else if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(f + '#' + j + ': hedef DIŞI madde değişti');
  }
  if (sonra.length - once.length !== hedefler.length * 'kapsam:"dis", '.length) throw new Error(f + ': bayt farkı beklenmedik');
  rapor[f] = hedefler.length + ' yeni · ' + zaten.length + ' zaten'; toplam += hedefler.length;
  if (YAZ) fs.writeFileSync(yol, sonra, 'utf8');
}
console.log((YAZ ? 'YAZILDI' : 'KURU KOŞU (yazmak için --yaz)') + ' · yeni ' + toplam + ' · zaten dis ' + zatenToplam + ' · ' + Object.keys(rapor).length + ' dosya');
for (const [f, n] of Object.entries(rapor)) console.log('  ' + f.padEnd(22) + n);

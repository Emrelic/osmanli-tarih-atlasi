// ÖLÇÜM 3 (kademe, bağlı yerleşim) + 4 (künye kuruluşu). Kullanım: node olc_3_4.js <veri.json> <cikti-dizini>
const fs = require('fs'), path = require('path');
const o = require('./ortak.js');
const { Y } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const CIK = process.argv[3] || '.';
fs.mkdirSync(CIK, { recursive: true });
const DEV = o.yukle('devletler.js').DEVLETLER;
const KAT = (o.yukle('yer_kat.js').YER_KAT) || [];

const tam = new Map(), onP = new Map();
for (const y of Y) {
  if (!tam.has(y.ad)) tam.set(y.ad, []); tam.get(y.ad).push(y);
  const p = y.ad.split(' (')[0]; if (p !== y.ad) { if (!onP.has(p)) onP.set(p, []); onP.get(p).push(y); }
}
const bul = (ad) => (tam.get(ad) || onP.get(ad) || null);
const dayn = (k) => { const y = Math.trunc(k / 10000), r = Math.abs(k % 10000), m = Math.trunc(r / 100), d = r % 100; return y * 365.2425 + (m - 1) * 30.44 + d; };
const donemVar = (y) => (y.s && y.s.length) || (y.d && y.d.length) || (y.v && y.v.length);

// ---------- ③ ----------
const kDag = {}, kTur = {}, kG = {};
for (const y of Y) {
  const k = y.k === undefined ? 'yok' : String(y.k);
  kDag[k] = (kDag[k] || 0) + 1;
  kTur[k + '|' + (y.tur || '?')] = (kTur[k + '|' + (y.tur || '?')] || 0) + 1;
  kG[k + '|g' + (y.g === undefined ? 'yok' : y.g)] = (kG[k + '|g' + (y.g === undefined ? 'yok' : y.g)] || 0) + 1;
}
const mli = Y.filter(y => y.m);
const mCoz = [], mCozmeyen = new Map(), mHedefK = {}, mKDag = {};
for (const y of mli) {
  mKDag[String(y.k === undefined ? 'yok' : y.k)] = (mKDag[String(y.k === undefined ? 'yok' : y.k)] || 0) + 1;
  const b = bul(y.m);
  if (b) { mCoz.push([y, b[0]]); const kk = String(b[0].k === undefined ? 'yok' : b[0].k); mHedefK[kk] = (mHedefK[kk] || 0) + 1; }
  else mCozmeyen.set(y.m, (mCozmeyen.get(y.m) || 0) + 1);
}
const k4 = Y.filter(y => y.k === 4), k4m = k4.filter(y => y.m), k4mCoz = k4m.filter(y => bul(y.m));
const k3 = Y.filter(y => y.k === 3), k3m = k3.filter(y => y.m);

// kırılma günleri: dönemler arası geçiş (ilk dönemin başı hariç) — yalnız s/d/v
function kirilmalar(y) {
  const set = new Set();
  const hepsi = [].concat((y.s || []).map(r => [r.f, r.t, 's:' + r.d]), (y.d || []).map(r => [r.f, r.t, 'd']), (y.v || []).map(r => [r.f, r.t, 'v']));
  hepsi.sort((a, b) => o.gk(a[0]) - o.gk(b[0]));
  for (let i = 0; i < hepsi.length; i++) {
    if (i > 0) set.add(o.gk(hepsi[i][0]));
    if (hepsi[i][1]) set.add(o.gk(hepsi[i][1]));
  }
  return [...set].filter(x => x !== null);
}
const KES = [10000, 13000, 14000, 15000, 16000, 17000, 18000, 18500, 19000, 19200].map(x => x + 101);
function sahip(y, k) { const d = o.ilkDevlet(y, k); return d; }
const pairs = [];
for (const [c, p] of mCoz) {
  if (c === p) continue;
  if (!donemVar(c) || !donemVar(p)) continue;
  const ck = kirilmalar(c), pk = kirilmalar(p).map(dayn);
  let esl = 0; for (const x of ck) { const dx = dayn(x); if (pk.some(q => Math.abs(q - dx) <= 30)) esl++; }
  let both = 0, same = 0;
  for (const k of KES) { const a = sahip(c, k), b = sahip(p, k); if (a && b) { both++; if (a === b) same++; } }
  // çocuğun tüm kırılma günlerinde (ve ±0) sahip eşitliği
  let bothK = 0, sameK = 0, farkli = null;
  for (const k of ck) { const a = sahip(c, k), b = sahip(p, k); if (a && b) { bothK++; if (a === b) sameK++; else if (!farkli) farkli = k + ':' + a + '≠' + b; } }
  pairs.push({ c: c.ad, ck: c.k, p: p.ad, pk: p.k, nKir: ck.length, kirEsl: esl, kesOrtak: both, kesAyni: same, kirOrtak: bothK, kirAyni: sameK, farkli });
}
const kirOlan = pairs.filter(x => x.nKir > 0);
const topKir = kirOlan.reduce((a, x) => a + x.nKir, 0), topEsl = kirOlan.reduce((a, x) => a + x.kirEsl, 0);
const topKes = pairs.reduce((a, x) => a + x.kesOrtak, 0), topKesA = pairs.reduce((a, x) => a + x.kesAyni, 0);
const topKirO = pairs.reduce((a, x) => a + x.kirOrtak, 0), topKirA = pairs.reduce((a, x) => a + x.kirAyni, 0);
// 300 çift: k>=3 bağlı, deterministik (her n'inci), çocuğun ≥2 dönemi olanlar
const aday = pairs.filter(x => x.ck >= 3 && x.nKir >= 2).sort((a, b) => (a.c + a.p).localeCompare(b.c + b.p, 'tr'));
const adim = Math.max(1, Math.floor(aday.length / 300));
const orn300 = aday.filter((_, i) => i % adim === 0).slice(0, 300);
const e300 = orn300.reduce((a, x) => a + x.kirEsl, 0), n300 = orn300.reduce((a, x) => a + x.nKir, 0);
const s300a = orn300.reduce((a, x) => a + x.kirAyni, 0), s300o = orn300.reduce((a, x) => a + x.kirOrtak, 0);
const tamUyum300 = orn300.filter(x => x.kirOrtak > 0 && x.kirAyni === x.kirOrtak).length;
fs.writeFileSync(path.join(CIK, 'm3_bagli_300cift.tsv'),
  'cocuk\tcocuk_k\tmerkez\tmerkez_k\tcocuk_kirilma\tmerkezle_30gun_eslesen\tortak_kirilma_gunu\tayni_sahip\tilk_fark\n' +
  orn300.map(x => [x.c, x.ck, x.p, x.pk, x.nKir, x.kirEsl, x.kirOrtak, x.kirAyni, x.farkli || ''].join('\t')).join('\n'));

// bölge dolgu
const bolge = Y.filter(y => y.tur === 'bolge'), bolgeDonemsiz = bolge.filter(y => !donemVar(y));
// m döngü / kendine bağ
let kendi = 0, dongu = 0; for (const [c, p] of mCoz) { if (c === p) kendi++; else if (p.m && bul(p.m) && bul(p.m)[0] === c) dongu++; }

// yer_kat çapraz tablo (ad + 3 km)
const katCapraz = {};
for (const t of KAT) {
  const ad = t.ad, adaylar = (tam.get(ad) || []).concat(onP.get(ad) || []);
  let y = adaylar.find(a => o.haversine(a.lat, a.lon, t.lat, t.lon) <= 3);
  if (!y) { for (const a of Y) if (Math.abs(a.lat - t.lat) < 0.04 && Math.abs(a.lon - t.lon) < 0.06 && o.haversine(a.lat, a.lon, t.lat, t.lon) <= 3) { y = a; break; } }
  const tk = (t.tanik && t.tanik[0] && t.tanik[0].k) || '?';
  const key = 'tanik_kat' + tk + ' → yerlesim_k' + (y ? (y.k === undefined ? 'yok' : y.k) : 'ESLESMEDI');
  katCapraz[key] = (katCapraz[key] || 0) + 1;
}

// tip1 işareti: devletler.baskent
const baskentAd = new Map();   // ad -> [devlet id...]
for (const d of DEV) if (d.baskent) { const a = String(d.baskent).split(/[,\/(]/)[0].trim(); if (!baskentAd.has(a)) baskentAd.set(a, []); baskentAd.get(a).push(d.id); }
let bkVar = 0, bkYok = [], bkK = {};
for (const [a, ids] of baskentAd) { const b = bul(a); if (b) { bkVar++; const kk = String(b[0].k === undefined ? 'yok' : b[0].k); bkK[kk] = (bkK[kk] || 0) + 1; } else bkYok.push(a + '(' + ids.length + ')'); }

// ---------- ④ ----------
// devlet id -> yerleşim sayısı (herhangi zamanda) / künye f günü
const idOsmanli = (DEV.find(d => d.id === 'osmanli') || DEV.find(d => /osmanl/.test(d.id)) || {}).id;
const enAz = new Map(), fGunu = new Map();   // id -> sayı
function idOf(r, tip) { return tip === 'd' ? idOsmanli : r.d; }
const KIMLIK_EVRENI = new Set(DEV.map(d => d.id));
const DEVID = new Map(DEV.map(d => [d.id, d])), HARITA_ID = new Map();
for (const d of DEV) if (d.harita && d.harita !== d.id) { if (!HARITA_ID.has(d.harita)) HARITA_ID.set(d.harita, []); HARITA_ID.get(d.harita).push(d.id); }
for (const y of Y) {
  for (const [a, tip] of [['s', 's'], ['d', 'd'], ['v', 'v'], ['isg', 'isg']]) for (const r of (y[a] || [])) {
    const id0 = tip === 'd' ? idOsmanli : r.d; if (!id0) continue;
    const f = o.gk(r.f), t = r.t ? o.gk(r.t) : o.SON;
    // kimlik künyede yoksa ama bir künyenin `harita:` boya anahtarıysa o künyelere de say
    const hedefler = DEVID.has(id0) ? [id0] : (HARITA_ID.get(id0) || [id0]);
    for (const id of hedefler) {
      enAz.set(id, (enAz.get(id) || 0) + 1);
      const dv = DEVID.get(id);
      if (dv && dv.f) { const kf = o.gk(dv.f); if (f !== null && kf >= f && kf < t) fGunu.set(id, (fGunu.get(id) || 0) + 1); }
    }
  }
}
const UFUK = o.gk('1923-10-29');
const satir = [];
for (const d of DEV) {
  const kf = d.f ? o.gk(d.f) : null, kt = d.t ? o.gk(d.t) : null;
  const sure = (kf !== null && kt !== null) ? Math.round(dayn(kt) - dayn(kf)) : null;
  satir.push({ id: d.id, ad: d.ad, tur: d.tur, bolge: d.bolge, f: d.f, t: d.t, sure, hic: !(enAz.get(d.id) > 0), fde: fGunu.get(d.id) || 0, baskent: d.baskent || '', ufukDisi: kf !== null && kf > UFUK, boyaGerekli: d.boya_gerekli });
}
const hicYok = satir.filter(x => x.hic), fdeYok = satir.filter(x => !x.fde);
const hicYokUfuk = hicYok.filter(x => !x.ufukDisi);
const fdeYokUfuk = fdeYok.filter(x => !x.ufukDisi);
hicYokUfuk.sort((a, b) => (b.sure || 0) - (a.sure || 0));
fdeYokUfuk.sort((a, b) => (b.sure || 0) - (a.sure || 0));
const turDag = {}; for (const x of hicYokUfuk) turDag[x.tur || '?'] = (turDag[x.tur || '?'] || 0) + 1;
// yerleşimlerin s:d kimliği künyede yok mu
const kimliksiz = new Map(); for (const [id] of enAz) if (!KIMLIK_EVRENI.has(id)) kimliksiz.set(id, enAz.get(id));
fs.writeFileSync(path.join(CIK, 'm4_kunye_yerlesimsiz.tsv'),
  'id\tad\ttur\tbolge\tf\tt\tsure_gun\tbaskent\tufuk_disi(f>1923-10-29)\n' +
  satir.filter(x => x.hic).sort((a, b) => (b.sure || 0) - (a.sure || 0)).map(x => [x.id, (x.ad || '').slice(0, 60), x.tur, x.bolge, x.f, x.t, x.sure, x.baskent, x.ufukDisi].join('\t')).join('\n'));
fs.writeFileSync(path.join(CIK, 'm4_kunye_f_gununde_yerlesimsiz.tsv'),
  'id\tad\ttur\tbolge\tf\tt\tsure_gun\tbaskent\ttoplam_yerlesim_referansi\n' +
  fdeYokUfuk.map(x => [x.id, (x.ad || '').slice(0, 60), x.tur, x.bolge, x.f, x.t, x.sure, x.baskent, enAz.get(x.id) || 0].join('\t')).join('\n'));

const ozet = {
  yerlesimToplam: Y.length, k: kDag, kTur, kG,
  m: { mliToplam: mli.length, cozulen: mCoz.length, cozulmeyen: mli.length - mCoz.length, cozulmeyenAd: mCozmeyen.size, kendineBag: kendi, ikiliDongu: dongu, mliKDag: mKDag, hedefKDag: mHedefK },
  k4: { toplam: k4.length, mli: k4m.length, mCozulen: k4mCoz.length }, k3: { toplam: k3.length, mli: k3m.length },
  bagliCiftTumu: { cift: pairs.length, cocukKirilmaToplam: topKir, merkezle30gunEsleşen: topEsl, ortakGunKesit: topKes, ayniSahipKesit: topKesA, ortakKirilmaGunu: topKirO, ayniSahipKirilmaGunu: topKirA },
  cift300: { n: orn300.length, cocukKirilma: n300, merkezle30gunEslesen: e300, kirilmaGunuOrtak: s300o, kirilmaGunuAyniSahip: s300a, tamUyumluCift: tamUyum300 },
  bolgeDolgu: { bolge: bolge.length, donemsiz: bolgeDonemsiz.length, donemli: bolge.length - bolgeDonemsiz.length },
  katCapraz,
  tip1_baskent: { benzersizBaskentAdi: baskentAd.size, atlastaVar: bkVar, yok: bkYok.length, varOlanlarinK: bkK, yokOrnek: bkYok.slice(0, 25) },
  kunye: { toplam: DEV.length, hicYerlesimi_yok: hicYok.length, hicYok_ufukIci: hicYokUfuk.length, f_gununde_yerlesimsiz: fdeYok.length, f_gununde_yerlesimsiz_ufukIci: fdeYokUfuk.length,
    hicYokTurDag_ufukIci: turDag, yerlesimdeOlupKunyesiOlmayanKimlik: kimliksiz.size, kimliksizOrnek: [...kimliksiz.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15) },
  ilk30HicYok: hicYokUfuk.slice(0, 30).map(x => `${x.id} | ${x.tur} | ${x.f}→${x.t} | ${x.sure}g | ${x.baskent}`),
  ilk30FdeYok: fdeYokUfuk.slice(0, 30).map(x => `${x.id} | ${x.tur} | ${x.f}→${x.t} | ${x.sure}g | ref=${enAz.get(x.id) || 0}`),
  mCozulmeyenOrnek: [...mCozmeyen.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15),
  cift300Farkli: orn300.filter(x => x.farkli).slice(0, 8).map(x => `${x.c}(k${x.ck}) ↔ ${x.p}(k${x.pk}): ${x.farkli}`),
};
fs.writeFileSync(path.join(CIK, 'm3_4_ozet.json'), JSON.stringify(ozet, null, 1));
console.log(JSON.stringify(ozet, null, 1));

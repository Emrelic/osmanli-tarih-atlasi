// ÖLÇÜM 1 (madde→yerleşim) + 2 (sahneye çıkış). Kullanım: node olc_1_2.js <veri.json> <cikti-dizini>
const fs = require('fs'), path = require('path');
const o = require('./ortak.js');
const { Y, M } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const CIK = process.argv[3] || '.';

// ---- atlas ad havuzu (uygulamanın adKonumBul kuralı: birebir ya da " (" öncesi) ----
const tam = new Map(), onParen = new Map(), normMap = new Map();
function ekle(m, k, y) { if (!m.has(k)) m.set(k, []); m.get(k).push(y); }
for (const y of Y) {
  ekle(tam, y.ad, y);
  const p = y.ad.split(' (')[0];
  if (p !== y.ad) ekle(onParen, p, y);
  ekle(normMap, o.norm(y.ad), y);
  if (p !== y.ad) ekle(normMap, o.norm(p), y);
  const ic = /\(([^)]+)\)/.exec(y.ad);           // parantez içi modern ad da norm havuzuna (yalnız bilgi)
  if (ic) for (const s of ic[1].split(/[\/,;]/)) ekle(normMap, o.norm(s), y);
}
function bulUygulama(ad) {                         // app.js adKonumBul eşdeğeri
  if (tam.has(ad)) return tam.get(ad);
  if (onParen.has(ad)) return onParen.get(ad);
  return null;
}
const say = (x) => (x === 0 || x) ? x : 0;
const yuz = (a, b) => (100 * a / b).toFixed(1) + '%';

// ---------- ① ----------
const N = M.length;
let yerIdDolu = 0, yerKonDolu = 0, odakYerDolu = 0, herhangi = 0, yerMetinDolu = 0;
let yerIdEslesen = 0, yerIdEslesmeyen = 0, yerIdNormKurtarilir = 0, yerIdBelirsiz = 0;
const eslesmeyen = new Map();              // ad -> {n, ilk, dosyalar, normKarsilik}
const adaySay = new Map();                 // yer_id'siz yer metninden çıkan jeton
let yerMetinsizYerIdsiz = 0, yerKonlu_yerIdsiz = 0;
const odakCoz = { ok: 0, yok: 0 };
const odakYok = new Map();
for (const m of M) {
  const yid = m.yer_id, yk = m.yer_kon && m.yer_kon.length === 2, oy = m.odak_yer;
  if (yid) yerIdDolu++;
  if (yk) yerKonDolu++;
  if (oy && (!Array.isArray(oy) || oy.length)) odakYerDolu++;
  if (yid || yk || (oy && (!Array.isArray(oy) || oy.length))) herhangi++;
  if (m.yer) yerMetinDolu++;
  if (oy) for (const ad of (Array.isArray(oy) ? oy : [oy])) {
    if (bulUygulama(ad)) odakCoz.ok++; else { odakCoz.yok++; odakYok.set(ad, (odakYok.get(ad) || 0) + 1); }
  }
  if (yid) {
    const b = bulUygulama(yid);
    if (b) { yerIdEslesen++; if (b.length > 1) yerIdBelirsiz++; }
    else {
      yerIdEslesmeyen++;
      const nk = normMap.get(o.norm(yid.split(' (')[0]));
      if (nk) yerIdNormKurtarilir++;
      const e = eslesmeyen.get(yid) || { n: 0, ilk: m.t, dosyalar: new Set(), norm: nk ? nk.map(y => y.ad).slice(0, 3) : null };
      e.n++; if (o.gk(m.t) < o.gk(e.ilk)) e.ilk = m.t; e.dosyalar.add(m._dosya); eslesmeyen.set(yid, e);
    }
  } else {
    if (yk) yerKonlu_yerIdsiz++;
    if (!m.yer && !yk && !oy) yerMetinsizYerIdsiz++;
  }
  // yer_id boş, yer metni dolu → aday jetonlar
  if (!yid && m.yer) {
    const ham = String(m.yer);
    const jet = new Set();
    for (const p of ham.split(/\s*(?:,|;|\/|\bve\b| ile | - | – )\s*/)) {
      let a = p.replace(/\(.*?\)/g, '').trim();
      a = a.replace(/^(?:ve|ile)\s+/i, '').replace(/[.]+$/, '').trim();
      if (a.length >= 3 && a.length <= 40) jet.add(a);
      const ic = /\(([^)]+)\)/.exec(p);
      if (ic) { /* parantez içi ad: yalnız eşleşme denemesinde kullanılır */ jet.add('§' + ic[1].trim() + '§' + a); }
    }
    for (const j of jet) {
      let ad = j, alt = null;
      if (j.startsWith('§')) { const k = j.split('§'); alt = k[1]; ad = k[2]; if (!ad) continue; }
      if (alt) continue;                              // parantez içi sayımı atla (çift sayım)
      const var_ = !!(bulUygulama(ad) || normMap.get(o.norm(ad)));
      const e = adaySay.get(ad) || { n: 0, ilk: m.t, dosyalar: new Set(), var: var_ };
      e.n++; if (o.gk(m.t) < o.gk(e.ilk)) e.ilk = m.t; e.dosyalar.add(m._dosya); adaySay.set(ad, e);
    }
  }
}
// jeton düzeyinde: yer-metni olup yer_id'si boş maddelerin sayısı ve jetonların atlasta var/yok dağılımı
let yerMetniYerIdsiz = 0; for (const m of M) if (!m.yer_id && m.yer) yerMetniYerIdsiz++;
const jetonVar = [...adaySay.values()].filter(e => e.var).length, jetonYok = adaySay.size - jetonVar;
const yokListe = [...adaySay.entries()].filter(([a, e]) => !e.var).sort((a, b) => b[1].n - a[1].n);

// ---------- ② ----------
let sa_ok = 0, sa_kurOnce = 0, sa_sahipsiz = 0, sa_donemsiz = 0, sa_kurYok_ilkOnce = 0, sa_arada = 0, sa_sonra = 0, sa_toplam = 0, sa_gunYok = 0;
const ihlal = [], dosyaD = {}, yDosyaD = {}, tipD = {}, devD = {};
for (const m of M) {
  if (!m.yer_id) continue;
  const b = bulUygulama(m.yer_id);
  if (!b) continue;
  const k = o.gk(m.t); if (k === null) { sa_gunYok++; continue; }
  sa_toplam++;
  // belirsiz ad: herhangi biri sahnedeyse iyi say (uygulama ilkini alır; bunu ayrı işaretle)
  const durumlar = b.map(y => {
    const dönemVar = (y.s && y.s.length) || (y.d && y.d.length) || (y.v && y.v.length);
    const kur = y.kur ? o.gk(y.kur) : null;
    if (kur !== null && k < kur) return 'kur_oncesi';
    if (!dönemVar) return 'donemsiz';
    const sahipDev = o.ilkDevlet(y, k);
    if (sahipDev && sahipDev !== 's:__BOSLUK__') return 'ok';
    if (sahipDev === 's:__BOSLUK__') return 'bosluk_sahipsiz';
    const baslar = [].concat(y.s || [], y.d || [], y.v || []).map(r => o.gk(r.f)).filter(x => x !== null);
    const bitisler = [].concat(y.s || [], y.d || [], y.v || []).map(r => r.t ? o.gk(r.t) : o.SON);
    if (k < Math.min(...baslar)) return 'ilk_donem_oncesi';
    if (k === Math.max(...bitisler)) return 'son_donem_bitis_gunu(sinir)';
    if (k > Math.max(...bitisler)) return 'son_donem_sonrasi';
    return 'donemler_arasi_bosluk';
  });
  const d = durumlar.includes('ok') ? 'ok' : durumlar[0];
  tipD[d] = (tipD[d] || 0) + 1;
  if (d === 'ok') { sa_ok++; continue; }
  dosyaD[m._dosya] = (dosyaD[m._dosya] || 0) + 1;
  const y0 = b[0]; yDosyaD[y0._dosya] = (yDosyaD[y0._dosya] || 0) + 1;
  ihlal.push({ t: m.t, b: m.b.slice(0, 80), yer_id: m.yer_id, durum: d, kur: y0.kur || null, yerlesim_dosya: y0._dosya, madde_dosya: m._dosya,
    donemler: [].concat((y0.s || []).map(r => 's ' + r.f + '→' + (r.t || '') + ' ' + r.d), (y0.d || []).map(r => 'd ' + r.f + '→' + (r.t || '')), (y0.v || []).map(r => 'v ' + r.f + '→' + (r.t || ''))).slice(0, 4) });
}
// kur alanı doluluğu
const kurDolu = Y.filter(y => y.kur).length;
const donemsiz = Y.filter(y => !((y.s && y.s.length) || (y.d && y.d.length) || (y.v && y.v.length)));
const donemsizTur = {}; for (const y of donemsiz) donemsizTur[y.tur || '?'] = (donemsizTur[y.tur || '?'] || 0) + 1;

const ozet = {
  maddeToplam: N, yerIdDolu, yerKonDolu, odakYerDolu, herhangiYerBilgisi: herhangi, yerMetinDolu,
  yerMetniAmaYerIdBos: yerMetniYerIdsiz, yerBilgisiHicYok: N - herhangi,
  yerId: { eslesen: yerIdEslesen, eslesmeyen: yerIdEslesmeyen, eslesmeyenAmaNormalizeKarsilikVar: yerIdNormKurtarilir, belirsizAd_birdenCokKayit: yerIdBelirsiz },
  odakYer: odakCoz,
  yerMetinJeton: { benzersiz: adaySay.size, atlastaVar: jetonVar, atlastaYok: jetonYok },
  sahne: { degerlendirilen: sa_toplam, tarihYok: sa_gunYok, dagilim: tipD },
  yerlesim: { toplam: Y.length, kurDolu, donemsiz: donemsiz.length, donemsizTur },
};
fs.mkdirSync(CIK, { recursive: true });
fs.writeFileSync(path.join(CIK, 'm1_2_ozet.json'), JSON.stringify(ozet, null, 1));
const topla = (e) => [...e.entries()].sort((a, b) => b[1].n - a[1].n);
fs.writeFileSync(path.join(CIK, 'm1_yer_id_eslesmeyen.tsv'),
  'ad\tmadde_say\tilk_tarih\tnorm_karsilik\tdosyalar\n' +
  topla(eslesmeyen).map(([a, e]) => [a, e.n, e.ilk, (e.norm || []).join('|'), [...e.dosyalar].slice(0, 3).join('|')].join('\t')).join('\n'));
fs.writeFileSync(path.join(CIK, 'm1_EKSIK_YERLESIM_ADAY.tsv'),
  'ad\tmadde_say\tilk_tarih\tdosyalar\n' +
  yokListe.slice(0, 1500).map(([a, e]) => [a, e.n, e.ilk, [...e.dosyalar].slice(0, 3).join('|')].join('\t')).join('\n'));
fs.writeFileSync(path.join(CIK, 'm2_ihlaller.tsv'),
  't\tyer_id\tdurum\tkur\tyerlesim_dosya\tmadde_dosya\tbaslik\tdonemler\n' +
  ihlal.sort((a, b) => o.gk(a.t) - o.gk(b.t)).map(i => [i.t, i.yer_id, i.durum, i.kur || '', i.yerlesim_dosya, i.madde_dosya, i.b, i.donemler.join(' ; ')].join('\t')).join('\n'));
const ilk = (x, n) => Object.entries(x).sort((a, b) => b[1] - a[1]).slice(0, n);
console.log(JSON.stringify(ozet, null, 1));
console.log('\nm1 eşleşmeyen yer_id benzersiz:', eslesmeyen.size, '— ilk 12:'); topla(eslesmeyen).slice(0, 12).forEach(([a, e]) => console.log(' ', a, e.n, e.ilk, e.norm ? '→norm:' + e.norm.join('|') : ''));
console.log('\nm1 yer_id boş/yer dolu — atlasta YOK jeton ilk 25:'); yokListe.slice(0, 25).forEach(([a, e]) => console.log(' ', a, e.n, e.ilk, [...e.dosyalar][0]));
console.log('\nm2 ihlal madde dosyası ilk 12:', JSON.stringify(ilk(dosyaD, 12)));
console.log('m2 ihlal yerleşim dosyası ilk 12:', JSON.stringify(ilk(yDosyaD, 12)));
console.log('m2 ihlal örnekleri:'); ihlal.slice(0, 20).forEach(i => console.log(' ', i.t, i.yer_id, i.durum, i.kur || '', '|', i.donemler[0] || '(dönemsiz)'));

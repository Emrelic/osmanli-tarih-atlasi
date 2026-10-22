// node denetim/dogu/afrika1/uret.js  → çıktı dosyalarını (aynı dizin) yazar. Yalnız bu dizine yazar.
const fs = require('fs'), path = require('path');
const { H, AD } = require('./ortak.js');
const { KUNYE, ANLATI } = require('./veri_a.js');
const { YENI, YAMA } = require('./veri_b.js');
const OUT = __dirname;
const J = (o) => JSON.stringify(o, null, 1).replace(/\n/g, '\n');
const ay = ['', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

function gunMetni(f, kes) {
  const [y, m, d] = f.split('-').map(Number);
  if (kes === 'gun') return `${d} ${ay[m]} ${y} (gün)`;
  if (kes === 'ay') return `${ay[m]} ${y} (ay)`;
  if (kes === 'yuzyil') return `${y}. yıl işareti (yüzyıl hassasiyeti)`;
  return `${y} (yıl)`;
}
// bir yerleşimin dilimlerini çöz: f/t doldur, kaynak metnini kur
function coz(y) {
  const sl = y.s.map((s) => {
    const o = { ...s };
    if (s.h) { const r = H(s.h[0], s.h[1]); o.f = r.t; o.hnot = r.not; }
    return o;
  });
  for (let i = 0; i < sl.length; i++) {
    sl[i].t = sl[i].t || (sl[i + 1] ? sl[i + 1].f : null);
    if (!sl[i].t) throw new Error('son dilim t eksik: ' + y.ad);
    if (!(sl[i].f < sl[i].t)) throw new Error(`sıra hatası ${y.ad} ${sl[i].f} !< ${sl[i].t}`);
    if (i > 0 && sl[i - 1].t !== sl[i].f) throw new Error(`süreksiz ${y.ad} ${sl[i - 1].t} ≠ ${sl[i].f}`);
  }
  return sl;
}
function kaynakKur(s) {
  let k = '';
  if (s.hnot) k += `ic_not_takvim: ${s.hnot} | `;
  k += s.k;
  if (s.ic) k += ` | İÇ NOT: ${s.ic}`;
  return k;
}
function donemler(y, sl) {
  return sl.map((s) => ({ f: s.f, t: s.t, d: s.d, kesinlik: s.kes, kaynak: kaynakKur(s) }));
}
function sinirMaddeleri(y, sl) {
  const out = [];
  for (let i = 1; i < sl.length; i++) {
    const s = sl[i], p = sl[i - 1];
    const yeniBos = s.d === '__BOSLUK__', eskiBos = p.d === '__BOSLUK__';
    const taraflar = yeniBos ? [p.d] : (eskiBos ? [s.d] : [s.d, p.d]);
    const tur = yeniBos ? 'toprak-kayip' : 'toprak-kazanc';
    out.push({
      t: s.f, devlet: yeniBos ? p.d : s.d, taraflar, b: s.b, tur, onem: 2, dunya: 1, kapsam: 'dis', yer: y.ad, yer_id: y.ad,
      etiket: ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281'], d: s.a, kaynak: kaynakKur(s).replace(/^ic_not_takvim: [^|]*\| /, ''),
      gun: gunMetni(s.f, s.kes), kesinlik: s.kes, sinir_id: [],
      ic_not: [s.ic, s.hnot ? 'ic_not_takvim: ' + s.hnot : ''].filter(Boolean).join(' || ') || undefined
    });
  }
  return out;
}

// ── künye + künye iskeleti ──
const kunyeOut = KUNYE.map((k) => ({
  id: k.id, ad: k.ad, tur: k.tur, bolge: k.bolge, f: k.f, t: k.t, baskent: k.baskent, ozet: k.ozet, kaynak: k.kaynak, kesinlik: k.kesinlik, boya_gerekli: true, ic_not: k.ic_not,
  kronoloji: k.kron.map(([t, tur, b, kaynak, kes]) => ({ t: t === 'KUNYE_F' ? k.f : t, tur, b, kaynak, kesinlik: kes }))
}));
fs.writeFileSync(path.join(OUT, 'kunye_yeni.js'), '// kunye_yeni.js — DOGU AFRIKA-1 yeni künyeler (KUNYE_YOK 7 kayıt). uret.js ile üretildi.\nwindow.DOGU_KUNYE_AFRIKA1 = ' + J(kunyeOut) + ';\n');

// ── anlatı kronolojisi ──
const anlatiOut = ANLATI.map((a) => {
  const o = {
    t: a.t, b: a.b, tur: a.tur, onem: a.onem || 3, dunya: a.dunya || 1,
    kapsam: ['savas', 'isgal', 'toprak-kazanc', 'toprak-kayip', 'ittifak', 'son'].includes(a.tur) ? 'dis' : 'ic',
    etiket: [['savas', 'isgal', 'isyan'].includes(a.tur) ? 'konu-askeri' : 'konu-siyasi', 'dogu-500-1281'],
    ...(a.yer ? { yer: a.yer } : {}), ...(a.yer_id ? { yer_id: a.yer_id } : {}),
    taraflar: a.taraflar, d: a.d, kaynak: a.kaynak, gun: a.gun, kesinlik: a.kesinlik, ic_not: a.ic_not
  };
  if (a.ic_not_takvim) o.ic_not_takvim = a.ic_not_takvim;
  return o;
});
fs.writeFileSync(path.join(OUT, 'kronoloji_cok_dogu_afrika1.js'), '// kronoloji_cok_dogu_afrika1.js — DOGU AFRIKA-1 anlatı maddeleri (TDV okundu; zayıf kaynaklar ic_not’ta beyanlı). uret.js ile üretildi.\nwindow.KRONOLOJI_COK_DOGU_AFRIKA1 = ' + J(anlatiOut) + ';\n');

// ── yerleşimler + sınır maddeleri + yama ──
const sinir = [], yerOut = [], yamaOut = [];
for (const y of YENI) {
  const sl = coz(y);
  yerOut.push({ ad: y.ad, tur: y.tur, lat: y.lat, lon: y.lon, g: y.g, k: y.k, ...(y.kur ? { kur: y.kur } : {}), kesinlik: y.kesinlik, s: donemler(y, sl), not: y.not, kaynak: y.kaynak, ...(y.kuyruk_gerekli ? { kuyruk_gerekli: y.kuyruk_gerekli } : {}) });
  sinir.push(...sinirMaddeleri(y, sl));
}
for (const y of YAMA) {
  const sl = coz(y);
  const rec = { ad: y.ad, mevcut_zincir_basi: y.mevcut_zincir_basi, s_onek: donemler(y, sl) };
  if (y.kur) rec.kur = y.kur;
  if (y.not) rec.not = y.not;
  yamaOut.push(rec);
  sinir.push(...sinirMaddeleri(y, sl));
}
sinir.sort((a, b) => (a.t < b.t ? -1 : a.t > b.t ? 1 : 0));
fs.writeFileSync(path.join(OUT, 'yerlesimler_dogu_afrika1.js'), '// yerlesimler_dogu_afrika1.js — DOGU AFRIKA-1 yeni yerleşimler (4). Mevcut yerleşimler için yama_afrika1.js. uret.js ile üretildi.\nwindow.YERLESIMLER_DOGU_AFRIKA1 = ' + J(yerOut) + ';\n');
fs.writeFileSync(path.join(OUT, 'kronoloji_sinir_dogu_afrika1.js'), '// kronoloji_sinir_dogu_afrika1.js — yerleşim sahip devir günleri (Değişmez 2 evreni). uret.js ile üretildi.\nwindow.KRONOLOJI_SINIR_DOGU_AFRIKA1 = ' + J(sinir) + ';\n');
fs.writeFileSync(path.join(OUT, 'yama_afrika1.js'), '// yama_afrika1.js — mevcut yerleşimlere s: öneki (yerleşim dosyası DEĞİLDİR). uret.js ile üretildi.\nwindow.YAMA_DOGU_AFRIKA1 = ' + J(yamaOut) + ';\n');
const dilim = (a) => a.reduce((n, y) => n + (y.s ? y.s.length : y.s_onek.length), 0);
console.log(JSON.stringify({ kunye: kunyeOut.length, anlati: anlatiOut.length, sinir: sinir.length, yeniYer: yerOut.length, yeniDilim: dilim(yerOut), yama: yamaOut.length, yamaDilim: dilim(yamaOut) }));

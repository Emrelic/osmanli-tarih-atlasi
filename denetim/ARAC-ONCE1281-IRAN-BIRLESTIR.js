// ONCE1281-IRAN-TURKISTAN — dört parça dosyasını birleştirir, sınar, iki ürünü yazar.
//   node denetim/ARAC-ONCE1281-IRAN-BIRLESTIR.js            → yalnız sına (yazmaz)
//   node denetim/ARAC-ONCE1281-IRAN-BIRLESTIR.js --yaz      → KUNYE.json + kronoloji dosyası
// Kapılar: alıntı önbellekte birebir · taraf kimliği eşlenir · künye-içi maddeyle mükerrer yok ·
//          tarih biçimi YYYY-MM-DD · kuşak (1000-01-01 ≤ t < 1281-01-01)
const fs = require('fs'), path = require('path');
const KOK = path.join(__dirname, '..');
const ONB = path.join(__dirname, 'ONCE1281-IRAN-tdv-onbellek');
const YAZ = process.argv.includes('--yaz');
global.window = {};
eval(fs.readFileSync(path.join(KOK, 'data/devletler.js'), 'utf8'));
const DEV = window.DEVLETLER, DEVID = new Map(DEV.map(d => [d.id, d]));

const norm = s => String(s || '').replace(/[‘’“”"'`]/g, '').replace(/\s+/g, ' ').trim();
const govdeler = {};
const govde = slug => {
  if (!(slug in govdeler)) {
    const p = path.join(ONB, slug + '.txt');
    govdeler[slug] = fs.existsSync(p) ? norm(fs.readFileSync(p, 'utf8')) : null;
  }
  return govdeler[slug];
};
const alintiVar = (a, slugIpucu) => {
  const n = norm(a); if (n.length < 20) return null;
  const adaylar = slugIpucu ? [slugIpucu] : [];
  for (const f of fs.readdirSync(ONB)) adaylar.push(f.replace(/\.txt$/, ''));
  for (const s of adaylar) { const g = govde(s); if (g && g.includes(n)) return s; }
  return null;
};

const parcalar = ['A', 'B', 'C', 'D', 'E'].map(h => path.join(__dirname, `ONCE1281-IRAN-PARCA-${h}.json`))
  .filter(p => fs.existsSync(p)).map(p => ({ p, j: JSON.parse(fs.readFileSync(p, 'utf8')) }));
console.log('parça dosyası:', parcalar.map(x => path.basename(x.p)).join(', ') || '0');

const kunyeler = [], maddeler = [], bulunamadi = [], red = [];
for (const { j } of parcalar) {
  for (const k of j.kunyeler || []) kunyeler.push({ ...k, _grup: j.grup });
  for (const m of j.maddeler || []) maddeler.push({ ...m, _grup: j.grup });
  for (const b of j.bulunamadi || []) bulunamadi.push(`[${j.grup}] ${b}`);
}
const ONERI = new Map(kunyeler.map(k => [k.id, k]));
const TARIH = /^\d{3,4}-\d{2}-\d{2}$/;   // devletler.js 3 haneli yılı pad'siz yazar (sirvansah "861-01-01")
const pad = x => /^\d{3}-/.test(String(x)) ? '0' + x : String(x);

// --- künye sınavı
const kSorun = [];
const idSay = {};
for (const k of kunyeler) {
  idSay[k.id] = (idSay[k.id] || 0) + 1;
  if (!['yeni', 'genislet', 'dokunmadim'].includes(k.islem)) kSorun.push(`${k.id}: islem=${k.islem}`);
  if (k.islem === 'yeni' && DEVID.has(k.id)) kSorun.push(`${k.id}: 'yeni' ama devletler.js'te VAR`);
  if (k.islem !== 'yeni' && !DEVID.has(k.id)) kSorun.push(`${k.id}: '${k.islem}' ama devletler.js'te YOK`);
  if (k.islem === 'yeni') {
    for (const a of ['ad', 'f', 't', 'bolge', 'kaynak']) if (!k[a]) kSorun.push(`${k.id}: ${a} eksik`);
    if (k.f && !TARIH.test(k.f)) kSorun.push(`${k.id}: f biçimi ${k.f}`);
    if (k.t && !TARIH.test(k.t)) kSorun.push(`${k.id}: t biçimi ${k.t}`);
    if (k.f && k.t && pad(k.f) >= pad(k.t)) kSorun.push(`${k.id}: f>=t`);
    if (k.t && pad(k.t) <= '1000-01-01') kSorun.push(`${k.id}: kuşak dışı t=${k.t}`);
    if (k.f && pad(k.f) >= '1281-01-01') kSorun.push(`${k.id}: kuşak dışı f=${k.f}`);
    for (const a of ['alinti_f', 'alinti_t']) if (k[a] && !alintiVar(k[a])) kSorun.push(`${k.id}: ${a} önbellekte YOK`);
  }
}
for (const [i, n] of Object.entries(idSay)) if (n > 1) kSorun.push(`${i}: ${n} parçada önerildi`);

// --- madde sınavı
const kab = [], anahtar = new Set();
const yilIc = new Map(); // künye-içi (var olan + önerilen) {t yılı, başlık} kümesi
const icEkle = (id, arr) => { for (const x of arr || []) { if (!yilIc.has(id)) yilIc.set(id, []); yilIc.get(id).push(x); } };
for (const d of DEV) icEkle(d.id, d.kronoloji);
for (const k of kunyeler) if (k.islem === 'yeni') icEkle(k.id, k.kronoloji);
// yüklü kronoloji/olay dosyaları (kendi dosyam hariç) — gruplar dışı mükerrer için
const disMadde = [];
for (const f of fs.readdirSync(path.join(KOK, 'data'))) {
  if (!/^(kronoloji|olaylar).*\.js$/.test(f) || f === 'kronoloji_cok_once1281_iran.js') continue;
  const w = {}; global.window = w;
  try { eval(fs.readFileSync(path.join(KOK, 'data', f), 'utf8')); } catch (e) { console.log('  okunamadı', f, e.message); continue; }
  for (const [ad, v] of Object.entries(w)) if (Array.isArray(v)) for (const x of v)
    if (x && x.t && (x.b || x.baslik)) disMadde.push({ f, ad, t: String(x.t), b: x.b || x.baslik,
      tr: [].concat(x.taraflar || x.devletler || (x.devlet ? [x.devlet] : [])) });
}
global.window = { DEVLETLER: DEV };
console.log('dış madde evreni:', disMadde.length);
const ELLE = JSON.parse(fs.readFileSync(path.join(__dirname, 'ONCE1281-IRAN-ELLE.json'), 'utf8')).zorla_kabul;
const zorKabul = [];
const dusenTaraf = [];   // {m, ortak, o}
const taraflaDusen = [];
const dusuk = [];   // aynı gün, ortak kelime yok — elle bakılır, reddedilmez
const kel = s => new Set(norm(s).toLocaleLowerCase('tr').split(/[^a-zçğıöşüâîû0-9]+/).filter(w => w.length > 3));
for (const m of maddeler) {
  const s = [];
  if (!TARIH.test(m.t || '')) s.push(`t biçimi '${m.t}'`);
  if (m.t && (m.t < '1000-01-01' || m.t >= '1281-01-01')) s.push(`kuşak dışı ${m.t}`);
  if (!m.b || !m.d || !m.kaynak) s.push('b/d/kaynak eksik');
  const tr = m.taraflar || [];
  if (!tr.length) s.push('taraflar boş');
  for (const x of tr) if (!DEVID.has(x) && !ONERI.has(x)) s.push(`eşlenemeyen taraf '${x}'`);
  const bul = m.alinti ? alintiVar(m.alinti, m.alinti_slug) : null;
  if (!bul) s.push('alıntı önbellekte YOK');
  const a = m.t + '|' + m.b;
  if (anahtar.has(a)) s.push('dosya içi mükerrer'); anahtar.add(a);
  // künye-içi mükerrer: aynı yıl + başlıkta ≥2 ortak anlamlı kelime
  for (const x of tr) for (const ic of yilIc.get(x) || []) {
    if (String(ic.t).slice(0, 4) !== String(m.t).slice(0, 4)) continue;
    const o = [...kel(ic.b)].filter(w => kel(m.b).has(w));
    if (o.length >= 2) s.push(`künye-içi mükerrer? ${x}: "${ic.b}"`);
  }
  for (const o of disMadde) {
    if (o.t.slice(0, 4) !== String(m.t).slice(0, 4)) continue;
    const ok = [...kel(o.b)].filter(w => kel(m.b).has(w));
    const tamGun = o.t === m.t && !m.t.endsWith('-01-01');   // aynı kesin gün: tek ortak kelime yeter
    if (ok.length >= 2 || (tamGun && ok.length >= 1)) {
      // ÇOK taraflı dosyada çift ancak AYNI künyede görünür (app.js t+b ile ayıklar, farklı b ⇒ iki kez).
      // Ortak taraf varsa: o tarafı BENDEN düş (öteki dosya o künyeyi zaten taşıyor); hiç taraf kalmazsa madde düşer.
      if (/^kronoloji_(cok|sinir)_/.test(o.f)) {
        const ortak = o.tr.filter(x => tr.includes(x));
        if (ortak.length) dusenTaraf.push({ m, ortak, o });
        else dusuk.push(`${m.t} "${m.b}" ~ ${o.f}: "${o.b}" (ortak taraf YOK — çift görünmez)`);
      } else s.push(`dış mükerrer? ${o.f}: "${o.b}"`);
    }
    else if (tamGun) dusuk.push(`${m.t} "${m.b}" ~ ${o.f}: "${o.b}"`);
  }
  for (const o of kab) {   // gruplar arası mükerrer: aynı yıl + ortak taraf + başlıkta ≥2 ortak kelime
    if (o._grup === m._grup || String(o.t).slice(0, 4) !== String(m.t).slice(0, 4)) continue;
    if (!(o.taraflar || []).some(x => tr.includes(x))) continue;
    const ok = [...kel(o.b)].filter(w => kel(m.b).has(w));
    if (ok.length >= 2) s.push(`gruplar arası mükerrer? [${o._grup}] "${o.b}"`);
    // aynı yıl + aynı tür + aynı taraf kümesi (kelime ortak olmasa da) — 1059 barışı böyle kaçtı
    else if (o.k === m.k && o.t === m.t && [...(o.taraflar || [])].sort().join() === [...tr].sort().join())
      s.push(`gruplar arası mükerrer? (yıl+tür+taraf) [${o._grup}] "${o.b}"`);
  }
  const bununki = dusenTaraf.filter(d => d.m === m);
  if (bununki.length) {
    const dus = new Set(bununki.flatMap(d => d.ortak));
    const kalan = tr.filter(x => !dus.has(x));
    const nerede = [...new Set(bununki.map(d => `${d.o.f}: "${d.o.b}"`))].join(' ; ');
    if (!kalan.length) s.push(`dış mükerrer (bütün taraflar öteki dosyada) — ${nerede}`);
    else if (!s.length) {
      m.taraflar = kalan;
      m.ic_not = ((m.ic_not || '') + ` · taraf düşürüldü [${[...dus].join(',')}]: aynı olay ${nerede} ile o künyede zaten var.`).replace(/^ · /, '');
      taraflaDusen.push(`${m.t} ${m.b} — düşen [${[...dus].join(',')}] kalan [${kalan.join(',')}]`);
    }
  }
  const zk = ELLE.find(z => z.t === m.t && String(m.b).startsWith(z.b_bas));
  if (zk && s.length && s.every(x => /mükerrer\?/.test(x))) { zorKabul.push(`${m.t} ${m.b}`); s.length = 0; }
  if (s.length) red.push({ grup: m._grup, t: m.t, b: m.b, sorun: s }); else kab.push(m);
}

console.log(`künye: ${kunyeler.length} (yeni ${kunyeler.filter(k => k.islem === 'yeni').length} · genislet ${kunyeler.filter(k => k.islem === 'genislet').length} · dokunmadim ${kunyeler.filter(k => k.islem === 'dokunmadim').length}) · künye sorunu ${kSorun.length}`);
kSorun.forEach(x => console.log('  K✗', x));
console.log(`madde: evren ${maddeler.length} · kabul ${kab.length} · red ${red.length}`);
red.forEach(r => console.log(`  M✗ [${r.grup}] ${r.t} ${r.b} — ${r.sorun.join(' ; ')}`));
console.log(`taraf düşürülerek tutulan: ${taraflaDusen.length}`); taraflaDusen.forEach(x => console.log('  ↘', x));
console.log(`elle kabul (ONCE1281-IRAN-ELLE.json): ${zorKabul.length}`); zorKabul.forEach(x => console.log('  ✓', x));
console.log(`aynı gün, ortak kelimesiz (elle bak): ${dusuk.length}`);
[...new Set(dusuk)].forEach(x => console.log('  ~', x));
const kapsam = {};
for (const m of kab) for (const x of m.taraflar) kapsam[x] = (kapsam[x] || 0) + 1;
console.log('künye başına kabul edilen madde:');
for (const k of kunyeler) console.log(`  ${k.id.padEnd(22)} ${String(kapsam[k.id] || 0).padStart(3)}  (${k.islem})`);

if (!YAZ) process.exit(0);
const BOY = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'ONCE1281-IRAN-BOYALAR.json'), 'utf8')));
const kunyeCikti = kunyeler.map(k => {
  const { _grup, ...r } = k;
  // yıl yazımı devletler.js ile aynı: 3 haneli yıl pad'SİZ ("963-01-01", sirvansah "861-01-01" gibi)
  for (const a of ['f', 't']) if (typeof r[a] === 'string') r[a] = r[a].replace(/^0(\d{3}-)/, '$1');
  if (k.islem !== 'dokunmadim') {
    const var_ = DEVID.get(k.id);
    const h = var_ && var_.harita;
    if (h && BOY.has(h)) r.harita = h;
    else if (BOY.has(k.id)) { r.harita = k.id; r.harita_not = 'BOYALAR\'da aynı adla VAR (künyede harita alanı eksikti)'; }
    else if (!('harita' in r) || !BOY.has(r.harita)) { r.harita = null; r.boya_gerekli = true; }
  }
  return r;
});
fs.writeFileSync(path.join(__dirname, 'ONCE1281-IRAN-KUNYE.json'), JSON.stringify({
  oturum: 'ONCE1281-IRAN-TURKISTAN', tarih: '2026-09-30',
  kusak: ['1000-01-01', '1281-01-01'],
  not: 'ÖNERİ — devletler.js\'e koordinatör birleştirir. alinti_* alanları denetim/ONCE1281-IRAN-tdv-onbellek/ gövdelerinde birebir sınandı.',
  kunyeler: kunyeCikti, bulunamadi
}, null, 1), 'utf8');
// ODAK (M-5662): önce elle eşleme (ONCE1281-IRAN-ODAK-ELLE.json), yoksa `yer` alanının havuz eşlemesi.
// kapsam_genis YAZILMAZ; eşlenemeyen madde odaksız kalır ve sayılır.
const { oto } = require('./ARAC-ONCE1281-IRAN-ODAK.js');
const ELLEODAK = JSON.parse(fs.readFileSync(path.join(__dirname, 'ONCE1281-IRAN-ODAK-ELLE.json'), 'utf8')).esle;
const odakSay = { elle: 0, oto: 0, yok: 0 }, elleKullanilan = new Set();
for (const m of kab) {
  const i = ELLEODAK.findIndex(([t, b]) => t === m.t && m.b.startsWith(b));
  const o = i >= 0 ? ELLEODAK[i][2] : oto(m);
  if (i >= 0) { odakSay.elle++; elleKullanilan.add(i); } else if (o) odakSay.oto++; else odakSay.yok++;
  if (o) Object.assign(m, o);
}
console.log(`odak: elle ${odakSay.elle} · otomatik ${odakSay.oto} · ODAKSIZ ${odakSay.yok} · kullanılmayan elle satırı ${ELLEODAK.length - elleKullanilan.size}`);
ELLEODAK.forEach((e, i) => { if (!elleKullanilan.has(i)) console.log('  ? kullanılmadı', e[0], e[1]); });
kab.filter(m => !m.yer_id && !m.odak_yer).forEach(m => console.log('  ∅ odaksız', m.t, m.b));
const ALAN = ['t', 'k', 'b', 'gun', 'yer', 'yer_id', 'odak_yer', 'kisiler', 'd', 'kaynak', 'taraflar', 'etiket', 'ic_not'];
const js = kab.sort((a, b) => a.t < b.t ? -1 : a.t > b.t ? 1 : 0).map(m => {
  const o = {}; for (const a of ALAN) if (m[a] !== undefined && m[a] !== '') o[a] = m[a];
  return '  ' + JSON.stringify(o) + ',';
}).join('\n');
fs.writeFileSync(path.join(KOK, 'data/kronoloji_cok_once1281_iran.js'),
  `// 1281 ÖNCESİ KAMPANYASI — İRAN · HORASAN · MÂVERÂÜNNEHİR · KIPÇAK SAHASI (kuşak 1000-01-01 → 1281-01-01)
// Oturum: ONCE1281-IRAN-TURKISTAN · 30 Eylül 2026 · şartname oturumlar/ONCE1281-KAMPANYA-ORTAK.md
// Desen KRONOLOJI_COK_*: her madde taraflar[]'daki HER künyeye eklenir (js/app.js cokTarafliKronolojiEkle).
// Künye önerisi: denetim/ONCE1281-IRAN-KUNYE.json — yeni künyeler devletler.js'e girmeden bu maddeler görünmez.
// Kaynak: TDV İslâm Ansiklopedisi (birincil); her maddenin dayandığı cümle üretim sırasında
// denetim/ONCE1281-IRAN-tdv-onbellek/ gövdesinde birebir sınandı (denetim/ARAC-ONCE1281-IRAN-BIRLESTIR.js).
// ic_not alanları editör notudur, kullanıcıya gösterilmez.
window.KRONOLOJI_COK_ONCE1281_IRAN = [
${js}
];
`, 'utf8');
fs.writeFileSync(path.join(__dirname, 'ONCE1281-IRAN-RED.json'), JSON.stringify(red, null, 1), 'utf8');
console.log('yazıldı: KUNYE.json · data/kronoloji_cok_once1281_iran.js · RED.json');

// ARAC-HICRI-GUN-TARAMA-1010.js — YALNIZ TARAMA (veri değiştirmez)
// Kullanım: node ARAC-HICRI-GUN-TARAMA-1010.js <atlas_kok> <cikti.json>
// Evren: index.html'in <script src="data/..."> sırası. paket_*.js dosyaları
// "/* ==== data/X.js ==== */" işaretleriyle parçalanır; her parça tarayıcıdaki
// sırayla, ORTAK bir window üzerinde vm ile koşturulur. Yeni görülen nesneler
// (kimlik Set'i ile — push edilenler de yakalanır) kaynak dosyaya atfedilir.
// Ayrıca her kaynak dosyanın DİSKTEKİ kopyası ayrıca yüklenir ve paket kopyasıyla
// kayıt kayıt karşılaştırılır (kopyalar ayrı sayılır, çift sayılmaz).
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = process.argv[2], CIKTI = process.argv[3];
if (!KOK || !CIKTI) { console.error('kullanım: node ... <kok> <cikti.json>'); process.exit(2); }

const html = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
const srcler = [...html.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map(m => m[1].replace(/\?.*$/, ''))
  .filter(s => s.startsWith('data/'));

// ---- parçaları kur
const parcalar = []; // {kaynak, paket|null, kod, ofset_satir}
for (const s of srcler) {
  const metin = fs.readFileSync(path.join(KOK, s), 'utf8');
  if (/^data\/paket_\d+\.js$/.test(s)) {
    const re = /^\/\* ==== (data\/[^ ]+) ==== \*\/\s*$/gm;
    const isaret = [...metin.matchAll(re)];
    for (let i = 0; i < isaret.length; i++) {
      const bas = isaret[i].index + isaret[i][0].length;
      const son = i + 1 < isaret.length ? isaret[i + 1].index : metin.length;
      parcalar.push({ kaynak: isaret[i][1], paket: s, kod: metin.slice(bas, son) });
    }
  } else parcalar.push({ kaynak: s, paket: null, kod: metin });
}

function yeniPencere() {
  const w = {};
  const stub = new Proxy(function () { return stub; }, { get: (t, k) => (k === Symbol.toPrimitive ? () => '' : stub), apply: () => stub, construct: () => stub });
  w.window = w; w.self = w; w.globalThis = w;
  w.document = stub; w.navigator = { userAgent: 'node' }; w.location = { search: '', hash: '', href: '' };
  w.console = { log() {}, warn() {}, error() {}, info() {} };
  w.localStorage = { getItem: () => null, setItem() {} };
  w.addEventListener = () => {}; w.setTimeout = () => 0; w.requestAnimationFrame = () => 0;
  return vm.createContext(w);
}

// Bir değerdeki "olay benzeri" nesneleri topla: t alanı olan ve (gun|b) taşıyan düz nesneler
function topla(deger, gor, cik, derin = 0) {
  if (!deger || typeof deger !== 'object' || derin > 3) return;
  if (gor.has(deger)) return;
  gor.add(deger);
  if (Array.isArray(deger)) { for (const x of deger) topla(x, gor, cik, derin + 1); return; }
  if (('t' in deger) && (('gun' in deger) || ('b' in deger))) cik.push(deger);
  else for (const k of Object.keys(deger)) { const v = deger[k]; if (v && typeof v === 'object') topla(v, gor, cik, derin + 1); }
}

function kos(parcaListesi) {
  const ctx = yeniPencere(); const gor = new Set(); const sonuc = []; const hatalar = [];
  for (const p of parcaListesi) {
    try { vm.runInContext(p.kod, ctx, { filename: p.kaynak, timeout: 60000 }); }
    catch (e) { hatalar.push({ kaynak: p.kaynak, paket: p.paket, hata: String(e).slice(0, 200) }); }
    const yeni = [];
    for (const k of Object.keys(ctx)) {
      if (['window', 'self', 'globalThis', 'document'].includes(k)) continue;
      topla(ctx[k], gor, yeni);
    }
    for (const r of yeni) sonuc.push({ kaynak: p.kaynak, paket: p.paket, r });
  }
  return { sonuc, hatalar };
}

const ana = kos(parcalar);

// Disk kopyaları: paket içindeki her kaynak dosya diskte ayrıca var mı, kayıtları aynı mı?
const kopya = { paket_ici_kaynak: 0, diskte_var: 0, diskte_yok: [], kayit_esit: 0, kayit_farkli: [] };
const kaynakKayit = {};
for (const x of ana.sonuc) (kaynakKayit[x.kaynak] ||= []).push(x.r);
for (const p of parcalar.filter(p => p.paket)) {
  kopya.paket_ici_kaynak++;
  const yol = path.join(KOK, p.kaynak);
  if (!fs.existsSync(yol)) { kopya.diskte_yok.push(p.kaynak); continue; }
  kopya.diskte_var++;
  const pk = (kaynakKayit[p.kaynak] || []).map(r => `${r.t}|${r.gun ?? ''}`);
  // disk kopyası: tek başına ve kendinden önceki tüm parçalarla aynı bağlamda değil — yalnız gun/t imzası karşılaştırılır
  const dk = kos([{ kaynak: p.kaynak + ' (disk)', paket: null, kod: fs.readFileSync(yol, 'utf8') }]).sonuc.map(x => `${x.r.t}|${x.r.gun ?? ''}`);
  const a = pk.slice().sort().join('\n'), b = dk.slice().sort().join('\n');
  if (a === b) kopya.kayit_esit++; else kopya.kayit_farkli.push({ kaynak: p.kaynak, paket_kayit: pk.length, disk_kayit: dk.length });
}

// ---- alan adı ölçümü: olay kayıtlarında tarih metni taşıyan string alanlar
const alanSay = {};
for (const { r } of ana.sonuc) for (const [k, v] of Object.entries(r)) {
  if (typeof v !== 'string' || ['t', 'f', 'b', 'd'].includes(k)) continue;
  if (v.length <= 90 && /\b\d{3,4}\b/.test(v)) alanSay[k] = (alanSay[k] || 0) + 1;
}

// ---- sınıflama
const AYLAR_H = ['muharrem', 'safer', 'sefer', 'rebiulevvel', 'rebiulahir', 'rebiulahir', 'rebiyulevvel', 'rebiyulahir', 'cemaziyelevvel', 'cemaziyelahir', 'cumadelula', 'cemaziyelula', 'receb', 'recep', 'saban', 'ramazan', 'sevval', 'zilkade', 'zilkaade', 'zilhicce', 'zilhicca', 'rebi'];
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/İ/g, 'i').toLowerCase()
  .replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/[’'`]/g, '');
const hYil = T => (T - 622) * 1.0307 + 0.5;            // yaklaşık hicrî yıl (yılın ortası)
const mYil = H => Math.round(H / 1.0307 + 622 - 0.5);   // hicrî → mîlâdî (yaklaşık başlangıç)
const yakinH = (Y, T) => Math.abs(Y - hYil(T)) <= 2;

function sayilar(g) {
  // yıl adayları: sıra, değer, gün mü, yüzyıl mı, MÖ mü, aralık ikinci ucu
  const n = norm(g); const out = [];
  const re = /(\d{1,4})(?:\s*[-–]\s*(\d{1,4}))?/g; let m;
  while ((m = re.exec(n))) {
    const v = +m[1]; const sonra = n.slice(m.index + m[0].length, m.index + m[0].length + 30); const once = n.slice(Math.max(0, m.index - 6), m.index);
    let tur = 'yil';
    if (/^\.?\s*(yuzyil|yy|asir)/.test(sonra)) tur = 'yuzyil';
    else if (v <= 31 && new RegExp('^\\.?\\s*(' + AYLAR_H.join('|') + '|ocak|subat|mart|nisan|mayis|haziran|temmuz|agustos|eylul|ekim|kasim|aralik|january|february|march|april|may|june|july|august|september|october|november|december)').test(sonra)) tur = 'gun';
    else if (v <= 31 && /(ocak|subat|mart|nisan|mayis|haziran|temmuz|agustos|eylul|ekim|kasim|aralik|muharrem|safer|receb|saban|ramazan|sevval|zilkade|zilhicce)\s*$/.test(once) === false && m[1].length <= 2 && !m[2] && out.length === 0 && /^\s*[/.]/.test(sonra)) tur = 'gun';
    const mo = /m\.?\s?o\.?\s*$/.test(n.slice(Math.max(0, m.index - 6), m.index)) || /^\s*(m\.?\s?o\b|bc)/.test(sonra.replace(/^\s*[-–]\s*\d+/, ''));
    let v2 = m[2] ? +m[2] : null;
    if (v2 !== null && m[2].length < m[1].length) v2 = +(m[1].slice(0, m[1].length - m[2].length) + m[2]);
    out.push({ v, v2, tur, mo, i: m.index });
  }
  return out;
}

function sinifla(g, T) {
  const n = norm(g);
  const hIsaret = /(^|[\s(\/])h\.\s*\d|hicri|(^|\s)h\s*\d{3,4}\b/.test(n);
  const ayH = new RegExp('(' + AYLAR_H.join('|') + ')').test(n);
  const ys = sayilar(g).filter(x => x.tur === 'yil' || x.tur === 'yuzyil');
  if (!ys.length) return { sinif: 'SAYI-YOK' };
  const ilk = ys[0];
  const Tm = Math.abs(T);
  const tutarT = x => { if (x.tur === 'yuzyil') return Math.ceil(Tm / 100) === x.v; const lo = x.v, hi = x.v2 ?? x.v; const s = (x.mo || T < 0) ? Tm : T; return s >= Math.min(lo, hi) - 1 && s <= Math.max(lo, hi) + 1; };
  const tutarH = x => x.tur === 'yil' && T > 622 && !x.mo && (yakinH(x.v, T) || (x.v2 !== null && yakinH(x.v2, T)));
  // metindeki başka bir mîlâdî yılın hicrîsi mi? (ör. "906 – … 911 (1500 – 13 Ekim 1505)")
  const tutarHmetin = x => x.tur === 'yil' && !x.mo && x.v > 0 && ys.some(o => o !== x && o.tur === 'yil' && o.v > 622 && yakinH(x.v, o.v));
  // hicrî işareti metnin BAŞINDA mı?
  const basH = /^\s*(h\.|hicri|h\s*\d)/.test(n) || new RegExp('^\\s*(\\d{1,2}\\s+)?(evail|evahir|evasit|gurre|selh)?\\s*(' + AYLAR_H.join('|') + ')').test(n);
  let sinif, alt = '';
  if (tutarT(ilk)) { sinif = 'MILADI-ONDE'; }
  else if (tutarH(ilk) || tutarHmetin(ilk) || (basH && ilk.tur === 'yil')) {
    sinif = 'HICRI-ONDE';
    const sonrakiM = ys.slice(1).find(tutarT);
    alt = sonrakiM ? (g.slice(0, ys[1] ? ys[1].i : 0).includes('(') ? 'parantezde-miladi' : 'ardindan-miladi(/ veya bosluk)') : 'miladi-yok';
    if (!tutarH(ilk)) alt += tutarHmetin(ilk) ? ' · Y≉H(T), metindeki mîlâdîye uyar' : ' · Y≉H(T) ama baş işaretli';
  } else {
    sinif = 'BELIRSIZ';
    alt = ilk.tur === 'yuzyil' ? 'yuzyil-uyusmaz' : (T <= 622 && ilk.v < 700 ? 'erken-donem' : 'ilk-yil-ne-T-ne-H');
  }
  // 2. soru: mîlâdî yıl / T çelişkisi
  const miladiAday = ys.filter(x => !(tutarH(x) && !tutarT(x)) && x.tur === 'yil' && (x.v >= 100 || x.mo || T < 100));
  const celiski = miladiAday.length > 0 && !miladiAday.some(tutarT) && !ys.some(x => x.tur === 'yuzyil' && tutarT(x));
  const hicriTceliski = sinif === 'HICRI-ONDE' && !tutarH(ilk);
  return { sinif, alt, hIsaret, ayH, ilk: ilk.v, celiski, hicriTceliski, miladiAday: miladiAday.map(x => x.v2 ? `${x.v}-${x.v2}` : String(x.v)) };
}

// ---- satır bulma (kaynak dosyada; yoksa paket)
const dosyaSatir = {}, satirKullanilan = {};
function satirBul(dosya, r) {
  const yol = path.join(KOK, dosya);
  if (!fs.existsSync(yol)) return null;
  const s = (dosyaSatir[dosya] ||= fs.readFileSync(yol, 'utf8').split('\n'));
  const gs = JSON.stringify(r.gun); const tt = `"${r.t}"`;
  // aynı t+gun iki kayıtta geçebilir ⇒ b parçası da aranır, kullanılan satır bir daha verilmez
  const bs = JSON.stringify(String(r.b || '').slice(0, 25)).slice(1, -1);
  const kul = (satirKullanilan[dosya] ||= new Set());
  let enIyi = null;
  for (let i = 0; i < s.length; i++) if (s[i].includes(gs.slice(1, -1)) && s[i].includes('gun')) {
    let d = 1e9, bvar = false;
    for (let j = Math.max(0, i - 8); j <= Math.min(s.length - 1, i + 2); j++) { if (s[j].includes(tt)) d = Math.min(d, Math.abs(i - j)); if (bs && s[j].includes(bs)) bvar = true; }
    const puan = d + (bvar ? 0 : 1000) + (kul.has(i) ? 100000 : 0);
    if (enIyi === null || puan < enIyi.puan) enIyi = { i, puan };
  }
  if (!enIyi) return null;
  kul.add(enIyi.i);
  return enIyi.i + 1;
}

function oneriKur(g, karsilik) {
  // YALNIZ ÖNERİ. "H (M) kuyruk" · "H / M kuyruk" · "H" → "M (H. H) kuyruk"
  const kuyrukAyir = x => { const m = x.match(/^(.*?)(\s+[—–-]\s+.*|\s*[,;·].*|\s+\(.*)?$/); return [m[1].trim(), (m[2] || '')]; };
  const hTemiz = h => h.replace(/^\s*(H\.|hicr[iî])\s*/i, '').replace(/[\s/,(-]+$/, '').trim();
  let m = g.match(/^([^(/]*?)\s*\(([^()]*)\)(.*)$/);
  if (m && /\d{3,4}/.test(m[2])) return `${m[2].trim()} (H. ${hTemiz(m[1])})${m[3]}`;
  m = g.match(/^([^/]*?)\s*\/\s*(.*)$/);
  if (m) { const [mil, kuyruk] = kuyrukAyir(m[2]); return `${mil} (H. ${hTemiz(m[1])})${kuyruk}`; }
  return `${karsilik} (H. ${hTemiz(g)})`;
}
const kayitlar = [];
const gunIdxSapma = [];
const dagilim = {};
let gunlu = 0, tamGunDegil = 0;
for (const { kaynak, paket, r } of ana.sonuc) {
  const T = parseInt(String(r.t).replace(/^-/, '-'), 10) * (String(r.t).startsWith('-') ? 1 : 1);
  const Tyil = /^-/.test(String(r.t)) ? -parseInt(String(r.t).slice(1), 10) : parseInt(String(r.t), 10);
  const d = (dagilim[kaynak] ||= { kayit: 0, gun_var: 0, 'HICRI-ONDE': 0, 'MILADI-ONDE': 0, BELIRSIZ: 0, 'SAYI-YOK': 0, CELISKI: 0, paket: paket || '-' });
  d.kayit++;
  if (typeof r.gun !== 'string' || !r.gun.trim()) continue;
  gunlu++; d.gun_var++;
  const c = sinifla(r.gun, Tyil);
  d[c.sinif]++; if (c.celiski) d.CELISKI++;
  // YAN SORU: app.js gunMetniIdx (t tam gün DEĞİLSE gun metninden sıralama günü çıkarır;
  // ilk \d{4}'ü YIL sayar). Hicrî 4 haneli yıl önde ise yanlış yıl okunur.
  if (!/^[+-]?\d+-\d{2}-\d{2}$/.test(String(r.t))) {
    const gm = r.gun.match(/(\d{1,2})\s+(Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık)/);
    const mo = r.gun.match(/M\.?\s?Ö\.?\s*(\d{1,4})/); const y4 = mo ? null : r.gun.match(/(\d{4})/);
    if (gm && (y4 || mo)) { const yil = mo ? 1 - (+mo[1]) : +y4[1]; if (Math.abs(yil - Tyil) > 1) gunIdxSapma.push({ kaynak, satir: satirBul(kaynak, r), t: r.t, gun: r.gun.slice(0, 80), okunan_yil: yil }); }
  }
  if (c.sinif === 'SAYI-YOK' || (c.sinif === 'MILADI-ONDE' && !c.celiski)) continue;
  const e = { kaynak, paket, satir: satirBul(kaynak, r), t: r.t, gun: r.gun.slice(0, 80), b: String(r.b || '').slice(0, 70), ...c };
  if (c.sinif === 'HICRI-ONDE') {
    const ys = sayilar(r.gun).filter(x => x.tur === 'yil');
    const H = ys[0].v; const m1 = mYil(H), m2 = mYil(H + 1);
    e.karsilik = m1 === m2 ? `${m1}` : `${m1}-${String(m2).slice(-2)}`;
    e.oneri = oneriKur(r.gun, e.karsilik);
  }
  kayitlar.push(e);
}

const say = s => kayitlar.filter(k => k.sinif === s).length;
const ozet = {
  taban: process.env.TABAN || null,
  index_data_script: srcler.length,
  paket: srcler.filter(s => /paket_/.test(s)).length,
  parca_toplam: parcalar.length,
  yukleme_hatasi: ana.hatalar,
  olay_benzeri_kayit: ana.sonuc.length,
  kayit_iceren_kaynak: Object.keys(dagilim).length,
  gun_dolu: gunlu,
  sinif: Object.fromEntries(['HICRI-ONDE', 'MILADI-ONDE', 'BELIRSIZ', 'SAYI-YOK', 'CELISKI'].map(s => [s, Object.values(dagilim).reduce((a, d) => a + d[s], 0)])),
  tarih_metni_alanlari: alanSay,
  kopya,
};
ozet.gunMetniIdx_sapma = gunIdxSapma.length;
fs.writeFileSync(CIKTI, JSON.stringify({ ozet, dagilim, kayitlar, gunIdxSapma }, null, 1));
console.log(JSON.stringify(ozet, null, 1));

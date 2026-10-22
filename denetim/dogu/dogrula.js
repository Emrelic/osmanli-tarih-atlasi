// node denetim/dogu/dogrula.js <kume> [<kume> ...]
// İşçi çıktılarını (denetim/dogu/<kume>/) YÜKLER ve şema/tutarlılık sınar. Yazmaz.
// Çıkış: 0 temiz · 1 ihlal · 2 ölçülemedi (dosya yok / yüklenemedi)
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..', '..');
const kumeler = process.argv.slice(2);
if (!kumeler.length) { console.error('kume adi ver'); process.exit(2); }

function yukle(dosyalar) {
  const sb = { window: {} }; vm.createContext(sb);
  for (const f of dosyalar) {
    if (!fs.existsSync(f)) continue;
    try { vm.runInContext(fs.readFileSync(f, 'utf8'), sb, { filename: f }); }
    catch (e) { console.error('YUKLENEMEDI', f, e.message.slice(0, 100)); process.exitCode = 2; }
  }
  return sb.window;
}
const GUN = require(path.join(KOK, 'js/gun.js'));
const gunNo = (s) => GUN.gun(s);
const kimlikler = new Set();
// mevcut devlet kimlikleri (main) + ms1 dalı (varsa denetim/_gecici_devletler_ms1.js)
const win0 = yukle([path.join(KOK, 'data/devletler.js')]);
for (const d of win0.DEVLETLER || []) kimlikler.add(d.id);
const ms1 = path.join(KOK, 'denetim/_gecici_devletler_ms1.js');
let ms1Say = 0;
if (fs.existsSync(ms1)) { const w = yukle([ms1]); for (const d of w.DEVLETLER || []) { if (!kimlikler.has(d.id)) ms1Say++; kimlikler.add(d.id); } }
const yeniKimlik = new Set();
const ihlal = [], uyari = [];
const say = { kunye: 0, kron: 0, yer: 0, s: 0, bosluk: 0, toprak: 0 };
const yerAdlari = new Set();
const veriler = [];
for (const k of kumeler) {
  const dir = path.join(KOK, 'denetim/dogu', k);
  const K = k.toUpperCase();
  const w = yukle([path.join(dir, 'kunye_yeni.js'), path.join(dir, 'kronoloji_cok_dogu_' + k + '.js'), path.join(dir, 'kronoloji_sinir_dogu_' + k + '.js'), path.join(dir, 'yerlesimler_dogu_' + k + '.js')]);
  const kun = w['DOGU_KUNYE_' + K] || [], yer = w['YERLESIMLER_DOGU_' + K] || [];
  const kro = (w['KRONOLOJI_COK_DOGU_' + K] || []).concat(w['KRONOLOJI_SINIR_DOGU_' + K] || []);
  if (!Object.keys(w).length) { console.error('OLCULEMEDI: ' + k + ' icin hicbir dosya yuklenmedi'); process.exitCode = 2; }
  veriler.push({ k, kun, kro, yer });
  for (const d of kun) { if (kimlikler.has(d.id)) ihlal.push(`${k}: kunye id zaten var: ${d.id}`); yeniKimlik.add(d.id); }
}
for (const id of yeniKimlik) kimlikler.add(id);
const tumYerAd = new Set();
for (const v of veriler) {
  const { k, kun, kro, yer } = v;
  for (const d of kun) {
    say.kunye++;
    if (!d.id || !/^[a-z0-9-]+$/.test(d.id)) ihlal.push(`${k}: kunye id bicimi: ${d.id}`);
    for (const a of ['ad', 'tur', 'bolge', 'f', 't']) if (!d[a]) ihlal.push(`${k}: ${d.id} ${a} yok`);
    try { if (gunNo(d.f) >= gunNo(d.t)) ihlal.push(`${k}: ${d.id} f>=t (${d.f} ${d.t})`); } catch (e) { ihlal.push(`${k}: ${d.id} tarih: ${e.message}`); }
    if (!d.kaynak) ihlal.push(`${k}: ${d.id} kaynak yok`);
    if (d.boya_gerekli !== true) uyari.push(`${k}: ${d.id} boya_gerekli:true yok`);
  }
  for (const m of kro) {
    say.kron++;
    if (!/^-?\d{4,6}-\d{2}-\d{2}$/.test(m.t || '')) { ihlal.push(`${k}: kron tarih biciminde ${m.t} (${m.b})`); continue; }
    try { gunNo(m.t); } catch (e) { ihlal.push(`${k}: kron tarih gecersiz ${m.t}`); }
    if (!m.b) ihlal.push(`${k}: kron b yok (${m.t})`);
    if (!m.kaynak) ihlal.push(`${k}: kron kaynak yok (${m.t} ${m.b})`);
    if (!Array.isArray(m.taraflar) || !m.taraflar.length) ihlal.push(`${k}: kron taraflar yok (${m.t} ${m.b})`);
    else for (const id of m.taraflar) if (!kimlikler.has(id)) ihlal.push(`${k}: kron taraf kimligi yok: ${id} (${m.t})`);
    if (m.tur === 'toprak-kazanc' || m.tur === 'toprak-kayip') say.toprak++;
  }
  for (const y of yer) {
    say.yer++;
    if (tumYerAd.has(y.ad)) ihlal.push(`${k}: yerlesim ad tekrar: ${y.ad}`);
    tumYerAd.add(y.ad);
    if (typeof y.lat !== 'number' || typeof y.lon !== 'number') ihlal.push(`${k}: ${y.ad} koordinat`);
    let onceki = null;
    for (const p of y.s || []) {
      say.s++;
      if (p.d === '__BOSLUK__') say.bosluk++;
      else if (!kimlikler.has(p.d)) ihlal.push(`${k}: ${y.ad} s: devlet kimligi yok: ${p.d}`);
      try {
        const a = gunNo(p.f), b = gunNo(p.t);
        if (a >= b) ihlal.push(`${k}: ${y.ad} s: f>=t (${p.f} ${p.t})`);
        if (onceki !== null && a < onceki) ihlal.push(`${k}: ${y.ad} s: ters/cakisan (${p.f})`);
        onceki = b;
      } catch (e) { ihlal.push(`${k}: ${y.ad} s: tarih: ${e.message} (${p.f} ${p.t})`); }
      if (!p.kaynak) ihlal.push(`${k}: ${y.ad} s: kaynak yok (${p.f})`);
    }
    if (!(y.s || []).length) ihlal.push(`${k}: ${y.ad} s: bos`);
  }
}
// ── DEĞİŞMEZ 1 (kuyruk) + DEĞİŞMEZ 2 (±30 gün devir maddesi) ──
const SON = gunNo('2000-12-31');
const sinirGunleri = {};      // yer_id -> [gün]
for (const v of veriler) for (const m of v.kro) {
  if (!m.yer_id || !/^-?\d{4,6}-\d{2}-\d{2}$/.test(m.t || '')) continue;
  if (m.tur !== 'toprak-kazanc' && m.tur !== 'toprak-kayip') continue;
  (sinirGunleri[m.yer_id] = sinirGunleri[m.yer_id] || []).push(gunNo(m.t));
}
function sinirVarMi(ad, f) {
  const l = sinirGunleri[ad] || [];
  return l.some(g => Math.abs(g - f) <= 30);
}
let kuyruk = 0, eslesen = 0, eslesmeyen = 0;
for (const v of veriler) for (const y of v.yer) {
  const s = y.s || [];
  if (s.length) {
    const son = gunNo(s[s.length - 1].t);
    if (son < SON && !y.bit && !y.kuyruk_gerekli) ihlal.push(`${v.k}: ${y.ad} zincir ${s[s.length - 1].t}'de bitiyor (2000-12-31'e kadar sürmeli ya da bit:/kuyruk_gerekli)`);
    if (y.kuyruk_gerekli) kuyruk++;
    for (let i = 1; i < s.length; i++) {
      const g = gunNo(s[i].f);
      if (sinirVarMi(y.ad, g)) eslesen++; else { eslesmeyen++; ihlal.push(`${v.k}: ${y.ad} s: devir ${s[i].f} (${s[i - 1].d}→${s[i].d}) için ±30 gün sınır maddesi yok`); }
    }
  }
}
// yama dosyaları
const yamaKayit = [];
for (const k of kumeler) {
  const dir = path.join(KOK, 'denetim/dogu', k);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (/^yama.*\.json$/.test(f)) { for (const y of JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))) yamaKayit.push({ k, y }); }
    else if (/^yama.*\.js$/.test(f)) { const w = yukle([path.join(dir, f)]); for (const g of Object.keys(w)) for (const y of w[g]) yamaKayit.push({ k, y }); }
  }
}
let yamaDilim = 0;
for (const { k, y } of yamaKayit) {
  const s = y.s_onek || y.s || [];
  for (let i = 0; i < s.length; i++) {
    yamaDilim++;
    if (s[i].d !== '__BOSLUK__' && !kimlikler.has(s[i].d)) ihlal.push(`${k}: YAMA ${y.ad} devlet kimligi yok: ${s[i].d}`);
    if (i === 0) continue;
    const g = gunNo(s[i].f);
    if (sinirVarMi(y.ad, g) || s[i].f === '1281-01-01' || s[i].f === '1000-01-01') eslesen++;
    else { eslesmeyen++; ihlal.push(`${k}: YAMA ${y.ad} devir ${s[i].f} (${s[i - 1].d}→${s[i].d}) için ±30 gün sınır maddesi yok`); }
  }
}
say.kuyruk_gerekli = kuyruk; say.yama = yamaKayit.length; say.yama_dilim = yamaDilim; say.devir_eslesen = eslesen; say.devir_eslesmeyen = eslesmeyen;
console.log(JSON.stringify({ kumeler, ms1_kimlik_eklenen: ms1Say, say, ihlal: ihlal.length, uyari: uyari.length }));
for (const x of ihlal.slice(0, 80)) console.log('IHLAL', x);
if (ihlal.length > 80) console.log('... +' + (ihlal.length - 80));
for (const x of uyari.slice(0, 20)) console.log('uyari', x);
process.exit(ihlal.length ? 1 : (process.exitCode || 0));

// node denetim/dogu/birlestir.js [--yaz] <kume> [<kume> ...]
// Kümelerin çıktılarını birleştirir (tekrarsız) ve data/ altına yazar:
//   data/kronoloji_cok_dogu_500_1281.js    window.KRONOLOJI_COK_DOGU_500_1281
//   data/kronoloji_sinir_dogu_500_1281.js  window.KRONOLOJI_SINIR_DOGU_500_1281
//   data/yerlesimler_dogu_500_1281.js      window.YERLESIMLER_DOGU_500_1281 (yeni yerleşimler; kuyruk_ek + bit + sil uygulanmış)
//   data/devletler.js                      künyeler `];`den önce eklenir (id zaten varsa atlanır; CRLF korunur)
// Yama (mevcut yerleşime önek) AYRI: py denetim/dogu/yama_uygula.py --yaz
// Tekrar koşturulabilir (idempotent): künye ve dosyalar yeniden üretilir.
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..', '..');
const YAZ = process.argv.includes('--yaz');
const GUNM = require(path.join(KOK, 'js/gun.js'));
const kumeler = process.argv.slice(2).filter(a => !a.startsWith('--'));
function yukle(f) {
  const sb = { window: {} }; vm.createContext(sb);
  if (!fs.existsSync(f)) return sb.window;
  vm.runInContext(fs.readFileSync(f, 'utf8'), sb, { filename: f });
  return sb.window;
}
// denetle.py mukerrer_maddeler() 'kişi!' ölçütünün portu (mukerrer_olc.js ile aynı): aynı gün + ortak kişi + (aynı kaynak | J>=0.10 | >=3 ortak kişi)
const KATLA = { 'ı': 'i', 'İ': 'i', 'ç': 'c', 'ğ': 'g', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u', 'Â': 'a', 'Î': 'i', 'Û': 'u' };
const katla = (s) => Array.from(s).map(c => KATLA[c] || c).join('');
const DURAK = new Set(['osmanl', 'sultan', 'kalesi', 'pasan', 'seferi']);
const GENEL = new Set(['sultan', 'pasa', 'pasanin', 'bey', 'han', 'hanin', 'efendi', 'gazi', 'sah', 'kral']);
function kelimelerKumesi(b) {
  const t = Array.from(katla(String(b).toLowerCase())).map(c => (/\p{L}/u.test(c) || c === ' ') ? c : ' ').join('');
  const k = new Set(t.split(/\s+/).filter(w => w.length > 3).map(w => w.slice(0, 6)));
  for (const d of DURAK) k.delete(d);
  return k;
}
function kisilerKumesi(o) {
  const k = new Set();
  for (const [ham, yalnizOzel] of [[o.kisiler || '', false], [o.b || '', true]]) {
    for (const p of String(ham).split(/[,;()]/)) for (let w of p.split(/\s+/).filter(Boolean)) {
      w = w.replace(/^['’."]+|['’."]+$/g, '');
      if (yalnizOzel && !/^\p{Lu}/u.test(w)) continue;
      w = katla(w).toLowerCase();
      if (w.length < 4 || GENEL.has(w) || /^[ivxlcdm]+$/.test(w)) continue;
      k.add(w.slice(0, 6));
    }
  }
  return k;
}
function mukerrerKisi(a, b) {
  const ka = kisilerKumesi(a), kb = kisilerKumesi(b), ortak = [...ka].filter(x => kb.has(x));
  if (!ortak.length) return false;
  const A = kelimelerKumesi(a.b), B = kelimelerKumesi(b.b);
  let oy = 0; if (A.size && B.size) { let o = 0; for (const x of A) if (B.has(x)) o++; oy = o / (A.size + B.size - o); }
  return (a.kaynak || '\0') === (b.kaynak || '\1') || oy >= 0.10 || ortak.length >= 3;
}
const cok = [], sinir = [], yerAdlari = new Map(), kunyeler = [];
const sayac = { cok_tekrar: 0, sinir_tekrar: 0, yer_tekrar: 0 };
const cokAnahtar = new Set(), sinirAnahtar = new Set();
for (const k of kumeler) {
  const dir = path.join(KOK, 'denetim/dogu', k), K = k.toUpperCase();
  const w = {};
  for (const f of ['kunye_yeni.js', 'kronoloji_cok_dogu_' + k + '.js', 'kronoloji_sinir_dogu_' + k + '.js', 'yerlesimler_dogu_' + k + '.js']) Object.assign(w, yukle(path.join(dir, f)));
  for (const d of w['DOGU_KUNYE_' + K] || []) kunyeler.push(d);
  for (const m of w['KRONOLOJI_COK_DOGU_' + K] || []) {
    const a = [m.t, m.b, (m.taraflar || []).join(',')].join('|');
    if (cokAnahtar.has(a)) { sayac.cok_tekrar++; continue; } cokAnahtar.add(a); cok.push(m);
  }
  for (const m of w['KRONOLOJI_SINIR_DOGU_' + K] || []) {
    const a = [m.t, m.yer_id, m.b].join('|');
    if (sinirAnahtar.has(a)) { sayac.sinir_tekrar++; continue; } sinirAnahtar.add(a); sinir.push(m);
  }
  for (const y of w['YERLESIMLER_DOGU_' + K] || []) {
    if (yerAdlari.has(y.ad)) { sayac.yer_tekrar++; continue; }
    yerAdlari.set(y.ad, { y, k });
  }
}
// ZİNCİR BAŞI MADDESİ: yamanın ilk diliminin f'i UFUK işareti (0500-01-01) DEĞİLSE bu gün bir "kazanç" kırılmasıdır
// (Değişmez 2s); ±30 gün içinde o yeri anan madde yoksa dilimin kendi kaynağından bir madde türetilir.
{
  const yamalar = new Map();
  for (const k of fs.readdirSync(__dirname)) {
    const dir = path.join(__dirname, k);
    if (!fs.statSync(dir).isDirectory() || !kumeler.includes(k)) continue;
    for (const f of fs.readdirSync(dir)) {
      let L = [];
      if (/^yama.*\.json$/.test(f)) L = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      else if (/^yama.*\.js$/.test(f)) { const w = yukle(path.join(dir, f)); for (const g of Object.keys(w)) L = L.concat(w[g]); }
      for (const y of L) { if (!yamalar.has(y.ad)) yamalar.set(y.ad, []); yamalar.get(y.ad).push({ k, s: y.s_onek || y.s || [] }); }
    }
  }
  const gunNo = (s) => GUNM.gun(s);
  // YETİM MADDE: yaması sonradan birleşik (kuyruk*) yamayla DEĞİŞTİRİLEN şehirde, eski parçanın devir maddesi
  // (örn. Hangzhou 0978-01-01) son zincirin hiçbir devir gününe ±30 gün yakın değilse düşer (bayat çift).
  const sinirGunSet = new Map();
  for (const [ad, L] of yamalar) {
    const ozel = L.filter(x => x.k.startsWith('kuyruk'));
    if (!ozel.length) continue;
    const gunler = ozel.flatMap(x => x.s).flatMap(z => [gunNo(z.f), gunNo(z.t)]);
    sinirGunSet.set(ad, gunler);
  }
  let yetim = 0;
  for (let i = sinir.length - 1; i >= 0; i--) {
    const m = sinir[i];
    if (!m.yer_id || String(m.yer || m.yer_id).includes(' · ')) continue;
    const gunler = sinirGunSet.get(m.yer_id);
    if (!gunler) continue;
    const g = gunNo(m.t);
    if (!gunler.some(x => Math.abs(x - g) <= 30)) { sinir.splice(i, 1); yetim++; }
  }
  sayac.sinir_yetim_dusen = yetim;
  // MEVCUT EVREN ÇAKIŞMASI: aynı yer_id + aynı gün (±1) başka bir dosyada (ör. VERI-MS1-1281) zaten varsa benimki düşer
  // (aynı devir iki kez yazılmaz; mevcut madde kırılmayı zaten kapatır). Evren: data/olaylar*.js + data/kronoloji_sinir*.js.
  {
    const mevcutGun = new Map();
    for (const f of fs.readdirSync(path.join(KOK, 'data'))) {
      if (!(/^olaylar.*\.js$/.test(f) || /^kronoloji_sinir.*\.js$/.test(f)) || f === 'kronoloji_sinir_dogu_500_1281.js') continue;
      const w = yukle(path.join(KOK, 'data', f));
      for (const g of Object.keys(w)) if (/^(OLAYLAR\w*|KRONOLOJI_SINIR\w*)$/.test(g) && Array.isArray(w[g])) for (const m of w[g]) {
        if (!m.yer_id || !m.t) continue;
        try { const x = gunNo(String(m.t).slice(0, m.t[0] === '-' ? 11 : 10)); if (!mevcutGun.has(m.yer_id)) mevcutGun.set(m.yer_id, []); mevcutGun.get(m.yer_id).push(x); } catch (e) { /* bozuk tarih */ }
      }
    }
    let dusen = 0;
    for (let i = sinir.length - 1; i >= 0; i--) {
      const m = sinir[i];
      if (!m.yer_id || String(m.yer || m.yer_id).includes(' · ')) continue;
      const L = mevcutGun.get(m.yer_id);
      if (L && L.some(x => Math.abs(x - gunNo(m.t)) <= 1)) { sinir.splice(i, 1); dusen++; }
    }
    sayac.sinir_mevcutla_cakisan_dusen = dusen;
  }
  let uretilen = 0;
  for (const [ad, L] of yamalar) {
    const ozel = L.filter(x => x.k.startsWith('kuyruk'));
    const s = (ozel.length ? ozel : L).flatMap(x => x.s).sort((a, b) => gunNo(a.f) - gunNo(b.f));
    if (!s.length || s[0].f === '0500-01-01' || s[0].d === '__BOSLUK__') continue;
    const g0 = gunNo(s[0].f);
    const var_ = sinir.some(m => m.yer_id && String(m.yer || m.yer_id).split(' · ').some(y => y === ad || y.startsWith(ad.split(' (')[0])) && Math.abs(gunNo(m.t) - g0) <= 30);
    if (var_) continue;
    sinir.push({ t: s[0].f, devlet: s[0].d, taraflar: [s[0].d], b: ad.replace(/\s*\(.*\)\s*$/, '') + ': ' + s[0].d + ' egemenliği başladı',
      tur: 'toprak-kazanc', onem: 2, dunya: 1, kapsam: 'dis', yer: ad, yer_id: ad, etiket: ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281', 'zincir-basi'],
      d: 'Yerleşimin kaynaklı sahiplik zincirinin başlangıç günü (yama diliminin kaynağından türetildi; atlasta bu günden önce sahiplik kaydı yoktur).', kaynak: s[0].kaynak, sinir_id: [] });
    uretilen++;
  }
  sayac.zincir_basi_madde = uretilen;
}
// AYNI OLAY, birçok şehir: denetle mükerrer-madde ölçütü (başlık benzerliği ±400 gün) şehir başına ayrı maddeyi mükerrer sayar.
// (t, taraflar, olay metni) aynıysa TEK madde: yer = "A · B · C", yer_id ilk şehir (ms1 'Dimyat · Asvan' kalıbı).
{
  // (1) AYNI GÜN + ORTAK TARAF (union-find): farklı işçilerin aynı olay için yazdığı maddeler tek madde olur.
  const gunler = new Map();
  for (const m of sinir) { if (!gunler.has(m.t)) gunler.set(m.t, []); gunler.get(m.t).push(m); }
  const bos = (m) => /: sahip |sahipsiz \(bo/.test(m.b || '');   // otomatik "sahip A → B" maddeleri: anlatı varsa o önde
  const birlesik = [];
  for (const [, L] of gunler) {
    const p = L.map((_, i) => i);
    const bul = (x) => (p[x] === x ? x : (p[x] = bul(p[x])));
    for (let i = 0; i < L.length; i++) for (let j = i + 1; j < L.length; j++) {
      const a = new Set([...(L[i].taraflar || []), L[i].devlet].filter(Boolean));
      const ortak = [...(L[j].taraflar || []), L[j].devlet].filter(x => x && a.has(x));
      if (ortak.length || (L[i].yer_id && L[i].yer_id === L[j].yer_id) || mukerrerKisi(L[i], L[j])) p[bul(i)] = bul(j);
    }
    const kumeler = new Map();
    L.forEach((m, i) => { const r = bul(i); if (!kumeler.has(r)) kumeler.set(r, []); kumeler.get(r).push(m); });
    for (const K of kumeler.values()) {
      if (K.length === 1) { birlesik.push(K[0]); continue; }
      K.sort((x, y) => (bos(x) - bos(y)) || ((y.d || '').length - (x.d || '').length));   // anlatı önde, uzun açıklama önde
      const m = Object.assign({}, K[0]);
      const yerler = [], tarafl = [], etik = [], dler = [], kays = [];
      for (const k of K) {
        for (const y of String(k.yer || k.yer_id || '').split(' · ').concat(k.yer_ekler || [], [k.yer_id])) { if (y && !yerler.includes(y)) yerler.push(y); }
        for (const x of k.taraflar || []) if (!tarafl.includes(x)) tarafl.push(x);
        for (const x of k.etiket || []) if (!etik.includes(x)) etik.push(x);
        if (k.d && !dler.includes(k.d)) dler.push(k.d);
        if (k.kaynak && !kays.includes(k.kaynak)) kays.push(k.kaynak);
      }
      m.yer_id = K[0].yer_id; m.yer = yerler.join(' · '); m.taraflar = tarafl; m.etiket = etik;
      m.d = dler.join(' ‖ '); m.kaynak = kays.join(' ‖ ');
      m.onem = Math.max(...K.map(k => k.onem || 0)) || undefined; m.dunya = Math.max(...K.map(k => k.dunya || 0)) || undefined;
      delete m.yer_ekler;
      birlesik.push(m);
      sayac.sinir_ayni_gun_birlesen = (sayac.sinir_ayni_gun_birlesen || 0) + K.length - 1;
    }
  }
  sinir.length = 0; for (const m of birlesik) sinir.push(m);
}
{
  const grup = new Map(), cikis = [];
  for (const m of sinir) {
    const b = String(m.b || ''), i = b.indexOf(': ');
    const olay = i > 0 && i < 60 ? b.slice(i + 2) : b;
    const a = [m.t, (m.taraflar || []).join(','), m.tur, olay].join('|');
    if (!grup.has(a)) { const kopya = Object.assign({}, m); kopya._yerler = [m.yer_id]; kopya._olay = olay; grup.set(a, kopya); cikis.push(kopya); }
    else { const g = grup.get(a); if (m.yer_id && !g._yerler.includes(m.yer_id)) g._yerler.push(m.yer_id); }
  }
  let birlesen = 0;
  for (const g of cikis) {
    if (g._yerler.length > 1) {
      birlesen += g._yerler.length - 1;
      g.yer = g._yerler.join(' · ');
      g.b = g._yerler.map(x => String(x).replace(/\s*\(.*\)\s*$/, '')).join(' · ') + ': ' + g._olay;
    }
    g.yer_ekler = g._yerler.length > 1 ? g._yerler : undefined;   // (yer_id yalnız ilk; tam adlar burada)
    delete g._yerler; delete g._olay;
  }
  sinir.length = 0; for (const g of cikis) sinir.push(g);
  sayac.sinir_birlestirilen = birlesen;
}
// kuyruk (yeni yerleşim zincir uzatma): denetim/dogu/*/zincir_kuyruk.js → window.ZINCIR_DOGU_*
const sil = new Set();
let kuyrukUygulanan = 0;
for (const k of fs.readdirSync(__dirname)) {
  const f = path.join(__dirname, k, 'zincir_kuyruk.js');
  if (!fs.existsSync(f)) continue;
  const w = yukle(f);
  for (const g of Object.keys(w)) for (const z of w[g]) {
    const rec = yerAdlari.get(z.ad);
    if (!rec) continue;
    if (z.sil) { sil.add(z.ad); continue; }
    const y = rec.y;
    if (z.s_ek && z.s_ek.length) { y.s = (y.s || []).concat(z.s_ek); kuyrukUygulanan++; }
    if (z.bit) y.bit = z.bit;
    if (z.kuyruk_gerekli) y.kuyruk_gerekli = z.kuyruk_gerekli; else if (y.kuyruk_gerekli && z.s_ek && z.s_ek.length) delete y.kuyruk_gerekli;
  }
}
// ardışık AYNI sahip dilimlerini birleştir (devam:true kuyruk parçaları): t == sonraki f ve d aynı
for (const { y } of yerAdlari.values()) {
  const s = y.s || [], m = [];
  for (const p of s) {
    const o = m[m.length - 1];
    if (o && o.d === p.d && o.t === p.f) { o.t = p.t; if (p.kesinlik) o.kesinlik = p.kesinlik; o.kaynak = (o.kaynak || '') + ' ‖ ' + (p.kaynak || ''); }
    else m.push(Object.assign({}, p));
  }
  for (const p of m) for (const a of ['ic_not', 'ic_not_takvim', 'ic_not_kaynak']) if (p[a]) { p.kaynak = (p.kaynak || '') + ' ‖ ' + a.replace(/_/g, ' ') + ': ' + p[a]; delete p[a]; }
  y.s = m;
}
const yerler = [], disarida = [];
for (const [ad, { y }] of yerAdlari) {
  if (sil.has(ad)) continue;
  if (y.kuyruk_gerekli) { disarida.push(ad + ' (kuyruk_gerekli: ' + y.kuyruk_gerekli + ')'); continue; }
  { const s = y.s || [], son = s.length ? s[s.length - 1].t : null;       // kuyruğu hiç beyan edilmemiş erken biten zincir = delik
    if (!y.bit && son && son < '2000-12-31') { disarida.push(ad + ' (zincir ' + son + "'de bitiyor, bit:/kuyruk beyanı yok)"); continue; } }
  delete y.kuyruk_gerekli;
  // bit: son diliminden ÖNCEYSE zinciri bit'te kes (ör. Pueblo Bonito bit 1250 < ham son t 1300)
  if (y.bit && y.s && y.s.length) {
    const kes = [];
    for (const p of y.s) { if (p.f >= y.bit) break; kes.push(p.t > y.bit ? Object.assign({}, p, { t: y.bit }) : p); }
    y.s = kes;
  }
  if (y.bit_kaynak) { y.not = (y.not ? y.not + ' · ' : '') + 'bit kaynağı: ' + y.bit_kaynak + (y.bit_kesinlik ? ' (kesinlik: ' + JSON.stringify(y.bit_kesinlik) + ')' : ''); }
  if (y.kuyruk_neden) { y.not = (y.not ? y.not + ' · ' : '') + 'kuyruk: ' + y.kuyruk_neden; }
  if (y.ic_not) y.not = (y.not ? y.not + ' · ' : '') + y.ic_not;
  for (const a of ['bit_kaynak', 'bit_kesinlik', 'bit_aralik', 'kisalt_gerekli', 'kuyruk_neden', 'ic_not', 'ic_not_takvim', 'kume']) delete y[a];
  yerler.push(y);
}
// BOYA SÜZGECİ (proje kuralı: boyası olmayan sahip = __BOSLUK__ + BOŞLUK BEYANI; yayın kapısı 'harita deliği' tavanı 0):
// BOYALAR'da (ya da harita: takma adıyla boyalı künyede) olmayan `d:` kimliği dilimde __BOSLUK__ olur, gerçek kimlik kaynak metninde
// kalır (boya eklenince geri yazılır: kaynak 'BOŞLUK BEYANI: sahip <id> (renkler.py BOYALAR'da yok').
const BOYALI = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, '_log', 'boyalar.json'), 'utf8')));
function boyaSuz(z) {
  if (z.d === '__BOSLUK__' || BOYALI.has(z.d)) return z;
  return Object.assign({}, z, { d: '__BOSLUK__', kaynak: "BOŞLUK BEYANI: sahip " + z.d + " (renkler.py BOYALAR'da yok → boya gerekli; boya eklenince d:\"" + z.d + "\" geri yazılır) · " + (z.kaynak || '') });
}
let boyasizDilim = 0;
for (const y of yerler) y.s = (y.s || []).map(z => { const r = boyaSuz(z); if (r !== z) boyasizDilim++; return r; });
sayac.boyasiz_dilim_bosluga = boyasizDilim;
// YENİ yerleşimlerin zincir başı (kur) = "kazanç" kırılması: ±30 gün içinde o yeri anan madde yoksa dilimin kaynağından madde türet
{
  let u = 0;
  for (const y of yerler) {
    const s = y.s || []; if (!s.length) continue;
    const p0 = s[0]; if (p0.f === '0500-01-01') continue;
    const sahip = p0.d !== '__BOSLUK__' ? p0.d : ((String(p0.kaynak || '').match(/sahip ([a-z0-9-]+)/) || [])[1] || null);   // boyasız sahip kaynak metninde
    const g0 = GUNM.gun(p0.f), kisa = y.ad.split(' (')[0];
    if (sinir.some(m => m.yer_id && String(m.yer || m.yer_id).split(' · ').some(x => x === y.ad || x.startsWith(kisa)) && Math.abs(GUNM.gun(m.t) - g0) <= 30)) continue;
    sinir.push({ t: p0.f, devlet: sahip || undefined, taraflar: sahip ? [sahip] : [], b: kisa + ': ' + (sahip ? sahip + ' egemenliğinde ' : '') + 'ilk kaynaklı kayıt (kuruluş/ilk tanık)',
      tur: 'toprak-kazanc', onem: 2, dunya: 1, kapsam: 'dis', yer: y.ad, yer_id: y.ad, etiket: ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281', 'zincir-basi'],
      d: 'Yeni yerleşimin kaynaklı sahiplik zincirinin başlangıç günü (kur; ilk dilimin kaynağından türetildi).', kaynak: p0.kaynak, sinir_id: [] });
    u++;
  }
  sayac.yeni_yerlesim_zincir_basi_madde = u;
}
// ODAK ATFI: sınır maddesinin yer_id'si atlasta (taban ∪ yeni yerleşimlerimiz) bulunmayan bir yerleşimse düşer
// (yayın kapısı 'çözülmeyen odak atfı'; dışarıda bırakılan kuyruk_gerekli yerleşimlerin maddeleri bu yüzden beklemeye).
{
  const taban = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, '_log', 'yer_indeks_taban.json'), 'utf8')).map(x => x.ad));
  for (const y of yerler) taban.add(y.ad);
  const kalan = [], dusen = [];
  for (const m of sinir) (m.yer_id && !taban.has(m.yer_id) ? dusen : kalan).push(m);
  sinir.length = 0; for (const m of kalan) sinir.push(m);
  sayac.sinir_yeri_olmayan_dusen = dusen.length;
  fs.writeFileSync(path.join(__dirname, '_log', 'sinir_bekleyen.json'), JSON.stringify(dusen));
}
// künye: mevcut id'leri atla
const devPath = path.join(KOK, 'data/devletler.js');
let dev = fs.readFileSync(devPath, 'utf8');
const BLOK_BAS = '// ==== DOGU-500-1281 KÜNYE BLOĞU BAŞI ====\r\n', BLOK_SON = '// ==== DOGU-500-1281 KÜNYE BLOĞU SONU ====\r\n';
{ const a = dev.indexOf(BLOK_BAS), b = dev.indexOf(BLOK_SON); if (a >= 0 && b > a) dev = dev.slice(0, a) + dev.slice(b + BLOK_SON.length); }   // idempotent: önceki bloğu çıkar
const mevcutId = new Set([...dev.matchAll(/\bid\s*:\s*"([^"]+)"/g)].map(m => m[1]));
const yeniK = [], atlanan = [], gorulen = new Set();
for (const d of kunyeler) {
  if (mevcutId.has(d.id)) { atlanan.push(d.id + ' (mevcut)'); continue; }
  if (gorulen.has(d.id)) { atlanan.push(d.id + ' (kume tekrari)'); continue; }
  gorulen.add(d.id); yeniK.push(d);
}
function bas(adi) { return '// DOGU-500-1281 · otomatik üretildi (denetim/dogu/birlestir.js) · ' + adi + '\n'; }
function jsDosya(ad, dizi, aciklama) {
  return '// -*- coding: utf-8 -*-\n// ' + aciklama + '\n// Kaynak: denetim/dogu/<küme>/ (DOĞU 500-1281 işçileri) · ' + new Date().toISOString().slice(0, 10) + '\nwindow.' + ad + ' = ' + JSON.stringify(dizi, null, 1) + ';\n';
}
console.log(JSON.stringify({ kumeler, yaz: YAZ, kunye_yeni: yeniK.length, kunye_atlanan: atlanan, kronoloji_cok: cok.length, kronoloji_sinir: sinir.length, yerlesim: yerler.length, yerlesim_disarida: disarida, kuyruk_uygulanan: kuyrukUygulanan, sil: [...sil], ...sayac }, null, 1));
if (!YAZ) process.exit(0);
// künyeleri ekle (önceki DOGU bloğu varsa önce çıkar: idempotent)
const son = dev.lastIndexOf('];');
const blok = BLOK_BAS + yeniK.map(d => JSON.stringify(d, null, 2).replace(/^(\s*)"([A-Za-z_][A-Za-z0-9_]*)":/gm, '$1$2:').replace(/\n/g, '\r\n') + ',\r\n').join('') + BLOK_SON;
dev = dev.slice(0, son) + blok + dev.slice(son);
fs.writeFileSync(devPath, dev);
fs.writeFileSync(path.join(KOK, 'data/kronoloji_cok_dogu_500_1281.js'), jsDosya('KRONOLOJI_COK_DOGU_500_1281', cok, 'DOĞU 500-1281 anlatı kronolojisi (künyelere taraflar: ile eklenir)'));
fs.writeFileSync(path.join(KOK, 'data/kronoloji_sinir_dogu_500_1281.js'), jsDosya('KRONOLOJI_SINIR_DOGU_500_1281', sinir, 'DOĞU 500-1281 sınır/devir maddeleri (Değişmez 2 evreni)'));
fs.writeFileSync(path.join(KOK, 'data/yerlesimler_dogu_500_1281.js'), jsDosya('YERLESIMLER_DOGU_500_1281', yerler, 'DOĞU 500-1281 yeni yerleşimler (s: zincirleri kur:dan 2000-12-31e)'));
console.log('YAZILDI');

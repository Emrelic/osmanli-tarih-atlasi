// denetim/ARAC-KPS-ADAY-0913.js — PAKET-KAPSAM · aday ölçümü (YALNIZ OKUR)
// ---------------------------------------------------------------------------
// Emre kararı 0035/H-0062 (13 Eylül 2026): çekirdek kronolojide Osmanlı
// devletiyle ilgisi olmayan maddeler `kapsam:"dis"` işaretlenir.
//
// Evren: data/olaylar*.js (ÇEKİRDEK, `denetle.py olaylari_yukle` ile aynı glob)
//        data/kronoloji*.js yalnız SAYILIR (kuyruk — kapsam anlamı orada
//        "sahibi devlete göre iç/dış", dokunulmaz).
//
// KADEMELER (muhafazakâr):
//   C  işaretlenmez  — Osmanlı sinyali GÜÇLÜ alanda (b · yer · yer_id · kisiler
//                      · taraf · kaynak · etiket · gun) YA DA yer/yer_id bir
//                      "Osmanlı'nın hiç sahip olduğu" (d:/v: taşıyan) yerleşim
//   B  sınırda       — Osmanlı sinyali yalnız ZAYIF alanda (d · ic_not_* …) YA DA
//                      bir Osmanlı KOMŞUSU/bağlam adı herhangi bir alanda
//                      ⇒ TEK TEK OKUNUR
//   A  açık aday     — hiçbir sinyal yok
// Normalleştirici: D159/ARAC-NORMAL-0903 — Türkçe eşleme lower()'dan ÖNCE,
// eşleşme KELİME SINIRIYLA (alt-dizgi tuzağı: "ahar" ↔ "baharatı").
//
// Kullanım: node denetim/ARAC-KPS-ADAY-0913.js [--json çıktı.json]
// ---------------------------------------------------------------------------
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.join(__dirname, '..'), DATA = path.join(KOK, 'data');

const ESLEME = { 'İ':'i','I':'i','ı':'i','Ş':'s','ş':'s','Ğ':'g','ğ':'g','Ü':'u','ü':'u',
  'Ö':'o','ö':'o','Ç':'c','ç':'c','Â':'a','â':'a','Î':'i','î':'i','Û':'u','û':'u',
  '’':"'",'‘':"'",'”':'"','“':'"','–':'-','—':'-' };
function norm(s) {
  if (s == null) return '';
  s = String(s).replace(/[İIıŞşĞğÜüÖöÇçÂâÎîÛû’‘”“–—]/g, c => ESLEME[c]);
  s = s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  return s.toLowerCase();
}

// Osmanlı sinyali (normalleştirilmiş metinde, kelime sınırlı)
const OSM = [
  ['osmanli', /\bosmanli\w*/], ['padisah', /\bpadisah\w*/], ['sadrazam', /\bsadrazam\w*/],
  ['vezir', /\bvezir\w*/], ['pasa', /\bpasa(?:s\w*|y\w*|n\w*|l\w*|d\w*)?\b/],
  ['yeniceri', /\byeniceri\w*/], ['sipahi', /\bsipahi\w*/], ['beylerbey', /\bbeylerbey\w*/],
  ['sancak', /\bsancag?\w*/], ['eyalet', /\beyalet\w*/], ['kapudan', /\bkapudan\w*/],
  ['babiali', /\bbab-?i ?ali\b|\bbabiali\b/], ['porte', /\bporte\b/], ['dersaadet', /\bdersaadet\b/],
  ['istanbul', /\bistanbul\w*/], ['konstantiniyye', /\bkonstantiniyye\b/],
  ['rumeli', /\brumeli\w*/], ['anadolu', /\banadolu\w*/], ['tabi', /\btabi(?:iyet\w*|\b|l\w*)/],
  ['turk', /\bturk(?!men|istan|estan|mence)\w*/],
  ['padisah-adi', /\b(orhan|murad|murat|bayezid|bayezit|beyazit|beyazid|mehmed|mehmet|selim|suleyman|ibrahim|mustafa|ahmed|ahmet|abdulhamid|mahmud|abdulmecid|abdulaziz|resad|vahdeddin|vahideddin|fatih|kanuni|yavuz|yildirim|cem sultan)\b/],
  ['kaynak-padisah-slug', /\b(murad-i+v?|mehmed-i+v?|bayezid-i+|selim-i+|suleyman-i+|ahmed-i+|mustafa-i+v?)\b/],
];
// Komşu / bağlam (Mohaç-Habsburg türü) — SINIRDA'ya iter, işaretlemez
const KOMSU = [
  'habsburg\\w*','avusturya\\w*','macar\\w*','venedik\\w*','ceneviz\\w*','cenova\\w*','safevi\\w*',
  'iran\\w*','rus\\w*','rusya\\w*','leh\\w*','lehistan\\w*','polonya\\w*','memluk\\w*','bizans\\w*',
  'kirim\\w*','eflak\\w*','bogdan\\w*','erdel\\w*','sirp\\w*','bulgar\\w*','arnavut\\w*','bosna\\w*',
  'hirvat\\w*','karaman\\w*','germiyan\\w*','aydinog\\w*','beylig?\\w*','dulkadir\\w*','akkoyunlu\\w*',
  'karakoyunlu\\w*','timur\\w*','hacli\\w*','sovalye\\w*','rodos\\w*','kibris\\w*','girit\\w*','misir\\w*',
  'halep\\w*','bagdat\\w*','tebriz\\w*','kafkas\\w*','gurcu\\w*','gurcistan\\w*','ermeni\\w*','kazak\\w*',
  'ukrayna\\w*','cezayir\\w*','tunus\\w*','trablus\\w*','fas\\b','mohac\\w*','papa\\b','papalik\\w*',
  'kutsal roma\\w*','ispanya\\w*','portekiz\\w*','hint okyanusu','kizildeniz\\w*','basra\\w*','hicaz\\w*',
  'yemen\\w*','habes\\w*','ace\\b','ace sultanlig\\w*','aceh\\w*','uzbek\\w*','ozbek\\w*','sam\\b',
].map(k => [k.replace(/\\w\*|\\b|\?/g, ''), new RegExp('\\b' + k)]);

const GUCLU = new Set(['b','yer','yer_id','kisiler','taraf','kaynak','etiket','gun','tur','k']);

// ---- yükleme ----
function yukleDosya(yol, onek) {
  const code = fs.readFileSync(yol, 'utf8');
  const ctx = { window: {} };
  try { vm.runInNewContext(code, ctx, { filename: yol }); }
  catch (e) { return { hata: e.message, diziler: {} }; }
  const diziler = {};
  for (const k of Object.keys(ctx.window)) if (k.startsWith(onek) && Array.isArray(ctx.window[k])) diziler[k] = ctx.window[k];
  return { diziler };
}
function maddeleriTopla(glob, onek) {
  const out = [], hatalar = [];
  const dosyalar = fs.readdirSync(DATA).filter(f => glob.test(f)).sort();
  for (const f of dosyalar) {
    const r = yukleDosya(path.join(DATA, f), onek);
    if (r.hata) { hatalar.push([f, r.hata]); continue; }
    for (const [k, arr] of Object.entries(r.diziler))
      arr.forEach((m, i) => { if (m && typeof m === 'object') out.push({ dosya: f, anahtar: k, i, m }); });
  }
  return { out, hatalar, dosyalar };
}

// Osmanlı'nın hiç sahip olduğu yerleşimler (d:/v:) — girdi.py izin listesinden
function osmanliYerleri() {
  const g = fs.readFileSync(path.join(KOK, 'arac', 'girdi.py'), 'utf8');
  const blok = g.slice(g.indexOf('GIRDI_DOSYALARI = ['));
  const son = blok.indexOf('\n]');
  const liste = [...blok.slice(0, son).matchAll(/^\s*"([^"]+\.js)"/gm)].map(x => x[1]);
  const ad = new Set();
  let n = 0;
  for (const f of liste) {
    const yol = path.join(DATA, f);
    if (!fs.existsSync(yol)) continue;
    const ctx = { window: {} };
    try { vm.runInNewContext(fs.readFileSync(yol, 'utf8'), ctx); } catch (e) { continue; }
    for (const v of Object.values(ctx.window)) if (Array.isArray(v)) for (const y of v) {
      if (!y || !y.ad) continue;
      n++;
      if ((y.d && y.d.length) || (y.v && y.v.length)) ad.add(norm(y.ad).trim());
    }
  }
  return { ad, dosya: liste.length, nokta: n };
}

function yerParcalari(s) {
  if (!s) return [];
  const p = new Set();
  const n = norm(s);
  p.add(n.trim());
  for (const x of n.split(/[,;·/]/)) {
    const t = x.trim(); if (!t) continue;
    p.add(t);
    p.add(t.replace(/\s*\(.*?\)\s*/g, ' ').trim());
    for (const ic of t.matchAll(/\(([^)]*)\)/g)) p.add(ic[1].trim());
  }
  return [...p].filter(Boolean);
}

function siniflandir(m, OY) {
  const isaret = [];
  let guclu = false, zayifOsm = false, komsu = false, yerOsm = null;
  for (const [alan, deger] of Object.entries(m)) {
    if (alan === 'kapsam') continue;
    const metin = Array.isArray(deger) ? deger.join(' ') : (typeof deger === 'string' ? deger : '');
    if (!metin) continue;
    const n = norm(metin);
    for (const [ad, re] of OSM) {
      const e = n.match(re);
      if (e) {
        const g = GUCLU.has(alan);
        if (g) guclu = true; else zayifOsm = true;
        const ix = e.index;
        isaret.push({ tur: g ? 'OSM-guclu' : 'OSM-zayif', ad, alan, baglam: n.slice(Math.max(0, ix - 40), ix + 40) });
      }
    }
    for (const [ad, re] of KOMSU) {
      const e = n.match(re);
      if (e) { komsu = true; const ix = e.index; isaret.push({ tur: 'KOMSU', ad, alan, baglam: n.slice(Math.max(0, ix - 40), ix + 40) }); }
    }
  }
  for (const s of [m.yer_id, m.yer]) for (const p of yerParcalari(s)) if (OY.ad.has(p)) { yerOsm = p; break; }
  if (yerOsm) isaret.push({ tur: 'YER-osmanli-hic', ad: yerOsm, alan: 'yer/yer_id' });
  const kademe = (guclu || yerOsm) ? 'C' : (zayifOsm || komsu) ? 'B' : 'A';
  return { kademe, isaret };
}

// ---- ana ----
const OY = osmanliYerleri();
const cek = maddeleriTopla(/^olaylar.*\.js$/, 'OLAYLAR');
const kuy = maddeleriTopla(/^kronoloji.*\.js$/, 'KRONOLOJI');

const sonuc = { olcum: {}, dosya: {}, aday: [], mevcut: [], kuyruk: {} };
sonuc.olcum = { osmanliHicYer: OY.ad.size, girdiDosya: OY.dosya, girdiNokta: OY.nokta,
  cekirdekDosya: cek.dosyalar.length, cekirdekMadde: cek.out.length, cekirdekHata: cek.hatalar,
  kuyrukDosya: kuy.dosyalar.length, kuyrukMadde: kuy.out.length, kuyrukHata: kuy.hatalar };

for (const r of cek.out) {
  const d = sonuc.dosya[r.dosya] = sonuc.dosya[r.dosya] || { madde: 0, kapsam: {}, A: 0, B: 0, C: 0 };
  d.madde++;
  const k = r.m.kapsam;
  const kl = siniflandir(r.m, OY);
  if (k !== undefined) {
    d.kapsam[k] = (d.kapsam[k] || 0) + 1;
    sonuc.mevcut.push({ dosya: r.dosya, anahtar: r.anahtar, i: r.i, t: r.m.t, b: r.m.b, kapsam: k, kademe: kl.kademe,
      isaret: kl.isaret.filter(x => x.tur !== 'KOMSU').slice(0, 4) });
    continue;
  }
  d.kapsam['(yok)'] = (d.kapsam['(yok)'] || 0) + 1;
  d[kl.kademe]++;
  sonuc.aday.push({ dosya: r.dosya, anahtar: r.anahtar, i: r.i, t: r.m.t, b: r.m.b,
    kademe: kl.kademe, yer_id: r.m.yer_id, isaret: kl.isaret });
}
for (const r of kuy.out) {
  const d = sonuc.kuyruk[r.dosya] = sonuc.kuyruk[r.dosya] || {};
  const k = r.m.kapsam === undefined ? '(yok)' : r.m.kapsam;
  d[k] = (d[k] || 0) + 1;
}

const argJ = process.argv.indexOf('--json');
if (argJ > 0) fs.writeFileSync(process.argv[argJ + 1], JSON.stringify(sonuc, null, 1), 'utf8');

let top = { A: 0, B: 0, C: 0 };
for (const d of Object.values(sonuc.dosya)) for (const k of 'ABC') top[k] += d[k];
const mevDeger = {}; for (const x of sonuc.mevcut) mevDeger[x.kapsam] = (mevDeger[x.kapsam] || 0) + 1;
const kuyDeger = {}; for (const d of Object.values(sonuc.kuyruk)) for (const [k, v] of Object.entries(d)) kuyDeger[k] = (kuyDeger[k] || 0) + v;
console.log('girdi dosya', OY.dosya, '· nokta', OY.nokta, '· Osmanli-hic yer adi', OY.ad.size);
console.log('cekirdek dosya', cek.dosyalar.length, '· madde', cek.out.length, '· yukleme hatasi', cek.hatalar.length, JSON.stringify(cek.hatalar));
console.log('  mevcut kapsam', JSON.stringify(mevDeger), '· kapsamsiz', top.A + top.B + top.C, '→ A', top.A, '· B', top.B, '· C', top.C);
console.log('  mevcut kapsam × kademe:', JSON.stringify(sonuc.mevcut.reduce((a, x) => { const k = x.kapsam + '/' + x.kademe; a[k] = (a[k] || 0) + 1; return a; }, {})));
console.log('kuyruk dosya', kuy.dosyalar.length, '· madde', kuy.out.length, '· hata', kuy.hatalar.length, '· kapsam', JSON.stringify(kuyDeger));

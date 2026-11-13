// ============================================================================
// uret_antlasma.js — ham metinden çıkarılmış madde özetlerini oynatıcı verisine çevirir.
// Kullanım (repo kökünden):
//   node denetim/ANTLASMA-ARAC/uret_antlasma.js <config.json>
// Çıktı: config.cikti (ör. data/antlasma_madde_karlofca.js) — window.ANTLASMA_MADDELERI.push(...)
//
// config.json alanları (zorunlu: id ad t kadraj kaynak cikti girdiler):
//   id            "karlofca-1699"                  (kebab-case + yıl; benzersiz)
//   ad            "Karlofça Antlaşması"            (kronoloji maddesinin `b` alanında GEÇEN dize — eşleşme bununla)
//   t             "1699-01-26"                     (antlaşmanın günü; kronoloji `t` ile ±60 gün içinde olmalı)
//   kadraj        [bati, guney, dogu, kuzey]       (ilk adım/yer yokken kamera bbox'ı, derece)
//   kaynak        "Ham metin: ... ; BEYAN: ..."    (okunan/okunmayan kaynak, kopya DEĞİL özet beyanı)
//   cikti         "data/antlasma_madde_karlofca.js"
//   girdiler      ["a.json", "b.json"]             (her biri dizi VEYA {maddeler:[...], ekler:[...]})
//   yerler_ek     {"Ad":[boylam,enlem]}            (ortak tabloda olmayan yerler; opsiyonel)
//   gruplama      {tekTek:[[27,139]], azamiGrup:6} (opsiyonel; verilmezse her madde ayrı adım; gruplama taraf başınadır)
//   madde_sayisi  433 | {"Habsburg":20,"Venedik":16}  (opsiyonel; eksik madde denetimi. Sayı = taraf yok;
//                                                      nesne = TARAF BAŞINA 1..N, yalnız sayısal `no` kontrol edilir)
//   taraflar      ["Habsburg","Venedik","Lehistan","Rusya"] (opsiyonel; çok taraflı antlaşmada adım SIRASI; yoksa ilk görülme)
//   anahtarlar    ["Karlofça Antlaşması","Karlofça"]  (opsiyonel; oynatıcı eşleşmesi `ad` yerine bunlardan herhangi biri)
//   onceki_t      "1683-07-14"                     (opsiyonel; bilgi alanı olarak çıktıya geçer)
//
// Girdi madde nesnesi: {no:<sayı|metin>, taraf:"Venedik" (opsiyonel), bolum:"<Türkçe başlık>", ozet:"<Türkçe ≤35 kelime, kendi cümlen>",
//                       yer:["Ad",...], konu:"sinir|bogazlar|...", belirsiz:false, sira:<sayı, opsiyonel>}
//  - ÇOK TARAFLI antlaşma: her taraf kendi madde dizisini taşır, numaralandırma TARAF BAŞINADIR (Habsburg md.1-20, Venedik md.1-16…).
//    Tekrar `no` yalnız (taraf, no) çiftine göre reddedilir. Adım başlığı «<Taraf> md. <no>» olur (taraf yoksa yalnız <no>).
//    `no` metinse («giriş», «onay», «ateşkes») başlık «<Taraf> <metin>» olur ve sıra: `sira` varsa ona, yoksa dosyadaki sıraya göre.
//  - belirsiz:true  => adımda dogrulanmadi:true (oynatıcıda sarı «⚠ İÇERİK DOĞRULANMADI»)
//  - ekler[]: {ad, ozet, okundu:true|false, yer, madde_say} => 'Ek N' adımları; okundu:false => dogrulanmadi
// yer: YALNIZ yerler tablosunda (yerler-ortak.json + yerler_ek) bulunan adlar haritada işaretlenir;
//      tabloda olmayan adlar sessizce atılır (aşağıda uyarı basılır).
// ============================================================================
const fs = require('fs');
const path = require('path');

const cfgYol = process.argv[2];
if (!cfgYol) { console.error('kullanım: node denetim/ANTLASMA-ARAC/uret_antlasma.js <config.json>'); process.exit(2); }
const cfg = JSON.parse(fs.readFileSync(cfgYol, 'utf8'));
for (const k of ['id', 'ad', 't', 'kadraj', 'kaynak', 'cikti', 'girdiler']) {
  if (!cfg[k]) { console.error('config alanı eksik:', k); process.exit(2); }
}
const ortak = JSON.parse(fs.readFileSync(path.join(__dirname, 'yerler-ortak.json'), 'utf8'));
const yerler = Object.assign({}, ortak, cfg.yerler_ek || {});

let maddeler = [], ekler = [];
for (const g of cfg.girdiler) {
  const j = JSON.parse(fs.readFileSync(g, 'utf8'));
  if (Array.isArray(j)) maddeler = maddeler.concat(j);
  else { maddeler = maddeler.concat(j.maddeler || []); ekler = ekler.concat(j.ekler || []); }
}
maddeler.forEach((m, i) => { m._i = i; });

// 1) sıralama: taraf sırası (config.taraflar ya da ilk görülme) → sira → sayısal no → dosya sırası
const tarafSirasi = (cfg.taraflar || []).slice();
maddeler.forEach(m => { if (m.taraf && !tarafSirasi.includes(m.taraf)) tarafSirasi.push(m.taraf); });
const sayisalMi = n => typeof n === 'number' || /^\d+$/.test(String(n));
const anahtar = m => [
  m.taraf ? tarafSirasi.indexOf(m.taraf) : -1,
  m.sira != null ? m.sira : (sayisalMi(m.no) ? Number(m.no) : 1e6 + m._i)
];
maddeler.sort((a, b) => { const x = anahtar(a), y = anahtar(b); return x[0] - y[0] || x[1] - y[1] || a._i - b._i; });

// 2) bütünlük: tekrar (taraf, no) çifti reddedilir
const gorulen = new Map(); const tekrar = [];
maddeler.forEach(m => { const k = (m.taraf || '') + '|' + m.no; if (gorulen.has(k)) tekrar.push((m.taraf ? m.taraf + ' ' : '') + m.no); gorulen.set(k, 1); });
if (tekrar.length) { console.error('TEKRAR (taraf,no):', tekrar.join(', ')); process.exit(1); }
if (cfg.madde_sayisi) {
  const eksik = [];
  const kontrol = (taraf, n) => {
    const liste = maddeler.filter(m => (m.taraf || '') === taraf && sayisalMi(m.no));
    for (let i = 1; i <= n; i++) if (!liste.find(m => Number(m.no) === i)) eksik.push((taraf ? taraf + ' ' : '') + 'md.' + i);
  };
  if (typeof cfg.madde_sayisi === 'number') {
    kontrol('', cfg.madde_sayisi);
    if (maddeler.filter(m => !m.taraf && sayisalMi(m.no)).length !== cfg.madde_sayisi) eksik.push('(sayı farkı)');
  } else for (const [t, n] of Object.entries(cfg.madde_sayisi)) kontrol(t, n);
  if (eksik.length) { console.error('EKSİK madde:', eksik.join(', ')); process.exit(1); }
}

// 3) yer süzgeci (tabloda olmayanı raporla)
const bilinmeyen = new Set();
const yf = (liste) => (liste || []).filter(y => { if (yerler[y]) return true; bilinmeyen.add(y); return false; });

// 4) adımlar — başlık: «<Taraf> md. <no>» (sayısal) | «<Taraf> <metin>» (metin no) | «<no>» (taraf yok)
const baslik = m => m.taraf ? (sayisalMi(m.no) ? m.taraf + ' md. ' + m.no : m.taraf + ' ' + m.no) : String(m.no);
const tek = (cfg.gruplama && cfg.gruplama.tekTek) || [];
const tekMi = m => !cfg.gruplama || (sayisalMi(m.no) && tek.some(([a, b]) => Number(m.no) >= a && Number(m.no) <= b)) || !sayisalMi(m.no);
const azami = (cfg.gruplama && cfg.gruplama.azamiGrup) || 1;
const adimlar = [];
let i = 0;
while (i < maddeler.length) {
  const x = maddeler[i];
  if (tekMi(x) || azami <= 1) {
    adimlar.push({ no: baslik(x), taraf: x.taraf || undefined, bolum: x.bolum, ozet: x.ozet, yer: yf(x.yer), konu: x.konu, dogrulanmadi: !!x.belirsiz });
    i++; continue;
  }
  const grup = [x];
  while (grup.length < azami && i + grup.length < maddeler.length) {
    const y = maddeler[i + grup.length];
    if (tekMi(y) || y.bolum !== x.bolum || (y.taraf || '') !== (x.taraf || '') || !!y.belirsiz !== !!x.belirsiz) break;
    grup.push(y);
  }
  const yer = [];
  grup.forEach(g => yf(g.yer).forEach(p => { if (!yer.includes(p)) yer.push(p); }));
  const son = grup[grup.length - 1];
  adimlar.push({
    no: grup.length === 1 ? baslik(x) : (x.taraf ? x.taraf + ' md. ' : '') + x.no + '-' + son.no, taraf: x.taraf || undefined, bolum: x.bolum,
    ozet: grup.map(g => (grup.length > 1 ? 'md. ' + g.no + ': ' : '') + g.ozet).join(' '),
    yer, konu: x.konu, dogrulanmadi: !!x.belirsiz
  });
  i += grup.length;
}
ekler.forEach((e, k) => {
  adimlar.push({
    no: 'Ek ' + (k + 1), bolum: 'Antlaşmaya ekli belge',
    ozet: e.ad + ' — ' + (e.okundu ? (e.ozet || '') + (e.madde_say ? ' (' + e.madde_say + ' madde)' : '') : 'içeriği OKUNMADI (ölçülmedi); yalnız belge adı kayda geçti.'),
    yer: yf(e.yer), konu: 'ek', dogrulanmadi: !e.okundu
  });
});
// adım başlıkları kayıt içinde benzersiz olmalı
const basliklar = new Set(); const cift = [];
adimlar.forEach(a => { if (basliklar.has(a.no)) cift.push(a.no); basliklar.add(a.no); });
if (cift.length) { console.error('Yinelenen adım başlığı:', cift.join(', ')); process.exit(1); }

// 5) yalnız kullanılan yerleri çıktıya koy (dosya küçük kalsın)
const kullanilan = {};
adimlar.forEach(a => a.yer.forEach(y => { kullanilan[y] = yerler[y]; }));

const kayit = { id: cfg.id, ad: cfg.ad, t: cfg.t, kadraj: cfg.kadraj };
if (cfg.anahtarlar) kayit.anahtarlar = cfg.anahtarlar;
if (cfg.onceki_t) kayit.onceki_t = cfg.onceki_t;
if (tarafSirasi.length) kayit.taraflar = tarafSirasi;
Object.assign(kayit, { kaynak: cfg.kaynak, yerler: kullanilan, adimlar });
const kod =
  '// ============================================================================\n' +
  '// ANTLAŞMA MADDELERİ — ' + cfg.ad.toUpperCase() + ' (' + cfg.t + ') · ' + adimlar.length + ' adım' + (tarafSirasi.length ? ' · taraflar: ' + tarafSirasi.join(', ') : '') + '\n' +
  '// Üretildi: denetim/ANTLASMA-ARAC/uret_antlasma.js · tüketici: js/antlasma_oynatici.js\n' +
  '// Özetler ham metinden, kendi cümlemizle (kopya yok). Kaynak/beyan: kayıt.kaynak.\n' +
  '// `yerler`: ad → [boylam, enlem] YAKLAŞIK odak noktası (sınır çizgisi değil).\n' +
  '// ============================================================================\n' +
  'window.ANTLASMA_MADDELERI = window.ANTLASMA_MADDELERI || [];\n' +
  'window.ANTLASMA_MADDELERI.push(' + JSON.stringify(kayit, null, 1) + ');\n';
fs.writeFileSync(cfg.cikti, kod);
console.log('yazıldı', cfg.cikti, '| adım', adimlar.length, '| doğrulanmadı adım', adimlar.filter(a => a.dogrulanmadi).length, '| bayt', kod.length);
if (bilinmeyen.size) console.log('UYARI — yerler tablosunda OLMAYAN adlar (haritada işaretlenmez; yerler_ek ile ekle):', [...bilinmeyen].join(', '));

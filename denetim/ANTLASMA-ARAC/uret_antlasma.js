// ============================================================================
// uret_antlasma.js — ham metinden çıkarılmış madde özetlerini oynatıcı verisine çevirir.
// Kullanım (repo kökünden):
//   node denetim/ANTLASMA-ARAC/uret_antlasma.js <config.json>
// Çıktı: config.cikti (ör. data/antlasma_madde_karlofca.js) — window.ANTLASMA_MADDELERI.push(...)
//
// config.json alanları (hepsi zorunlu, ek/gruplama hariç):
//   id            "karlofca-1699"                  (kebab-case + yıl; benzersiz)
//   ad            "Karlofça Antlaşması"            (kronoloji maddesinin `b` alanında GEÇEN dize — eşleşme bununla)
//   t             "1699-01-26"                     (antlaşmanın günü; kronoloji `t` ile ±60 gün içinde olmalı)
//   kadraj        [bati, guney, dogu, kuzey]       (ilk adım/yer yokken kamera bbox'ı, derece)
//   kaynak        "Ham metin: ... ; BEYAN: ..."    (okunan/okunmayan kaynak, kopya DEĞİL özet beyanı)
//   cikti         "data/antlasma_madde_karlofca.js"
//   girdiler      ["a.json", "b.json"]             (her biri dizi VEYA {maddeler:[...], ekler:[...]})
//   yerler_ek     {"Ad":[boylam,enlem]}            (ortak tabloda olmayan yerler; opsiyonel)
//   gruplama      {tekTek:[[27,139]], azamiGrup:6} (opsiyonel; verilmezse her madde ayrı adım)
//   madde_sayisi  433                              (opsiyonel; eksik madde denetimi: 1..N hepsi var mı)
//
// Girdi madde nesnesi: {no:<sayı>, bolum:"<Türkçe başlık>", ozet:"<Türkçe ≤35 kelime, kendi cümlen>",
//                       yer:["Ad",...], konu:"sinir|bogazlar|...", belirsiz:false}
//  - belirsiz:true  => adımda dogrulanmadi:true (oynatıcıda sarı «⚠ İÇERİK DOĞRULANMADI»)
//  - ekler[]: {ad, ozet, okundu:true|false, yer:[...], madde_say} => 'Ek N' adımları; okundu:false => dogrulanmadi
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
maddeler.sort((a, b) => a.no - b.no);

// 1) bütünlük
const tekrar = maddeler.filter((m, i) => i && m.no === maddeler[i - 1].no).map(m => m.no);
if (tekrar.length) { console.error('TEKRAR madde no:', tekrar.join(',')); process.exit(1); }
if (cfg.madde_sayisi) {
  const eksik = [];
  for (let i = 1; i <= cfg.madde_sayisi; i++) if (!maddeler.find(m => m.no === i)) eksik.push(i);
  if (eksik.length || maddeler.length !== cfg.madde_sayisi) { console.error('EKSİK madde:', eksik.join(',')); process.exit(1); }
}

// 2) yer süzgeci (tabloda olmayanı raporla)
const bilinmeyen = new Set();
const yf = (liste) => (liste || []).filter(y => { if (yerler[y]) return true; bilinmeyen.add(y); return false; });

// 3) adımlar
const adimlar = [];
const tek = (cfg.gruplama && cfg.gruplama.tekTek) || [];
const tekMi = no => !cfg.gruplama || tek.some(([a, b]) => no >= a && no <= b);
const azami = (cfg.gruplama && cfg.gruplama.azamiGrup) || 1;
let i = 0;
while (i < maddeler.length) {
  const x = maddeler[i];
  if (tekMi(x.no) || azami <= 1) {
    adimlar.push({ no: String(x.no), bolum: x.bolum, ozet: x.ozet, yer: yf(x.yer), konu: x.konu, dogrulanmadi: !!x.belirsiz });
    i++; continue;
  }
  const grup = [x];
  while (grup.length < azami && i + grup.length < maddeler.length) {
    const y = maddeler[i + grup.length];
    if (tekMi(y.no) || y.bolum !== x.bolum || !!y.belirsiz !== !!x.belirsiz) break;
    grup.push(y);
  }
  const yer = [];
  grup.forEach(g => yf(g.yer).forEach(p => { if (!yer.includes(p)) yer.push(p); }));
  adimlar.push({
    no: grup.length === 1 ? String(x.no) : x.no + '-' + grup[grup.length - 1].no, bolum: x.bolum,
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

// 4) yalnız kullanılan yerleri çıktıya koy (dosya küçük kalsın)
const kullanilan = {};
adimlar.forEach(a => a.yer.forEach(y => { kullanilan[y] = yerler[y]; }));

const kayit = { id: cfg.id, ad: cfg.ad, t: cfg.t, kadraj: cfg.kadraj, kaynak: cfg.kaynak, yerler: kullanilan, adimlar };
const kod =
  '// ============================================================================\n' +
  '// ANTLAŞMA MADDELERİ — ' + cfg.ad.toUpperCase() + ' (' + cfg.t + ') · ' + adimlar.length + ' adım\n' +
  '// Üretildi: denetim/ANTLASMA-ARAC/uret_antlasma.js · tüketici: js/antlasma_oynatici.js\n' +
  '// Özetler ham metinden, kendi cümlemizle (kopya yok). Kaynak/beyan: kayıt.kaynak.\n' +
  '// `yerler`: ad → [boylam, enlem] YAKLAŞIK odak noktası (sınır çizgisi değil).\n' +
  '// ============================================================================\n' +
  'window.ANTLASMA_MADDELERI = window.ANTLASMA_MADDELERI || [];\n' +
  'window.ANTLASMA_MADDELERI.push(' + JSON.stringify(kayit, null, 1) + ');\n';
fs.writeFileSync(cfg.cikti, kod);
console.log('yazıldı', cfg.cikti, '| adım', adimlar.length, '| doğrulanmadı adım', adimlar.filter(a => a.dogrulanmadi).length, '| bayt', kod.length);
if (bilinmeyen.size) console.log('UYARI — yerler tablosunda OLMAYAN adlar (haritada işaretlenmez; yerler_ek ile ekle):', [...bilinmeyen].join(', '));

// ══════════════════════════════════════════════════════════════════════
// DİKİŞ NÖBETÇİSİ — ① GÖVDE ÇIKARICI  (R13/R15, `BULGU-GEOMETRI-0904.md`)
// ══════════════════════════════════════════════════════════════════════
// Kullanım:  node denetim/ARAC-DIKIS-0904-govde.js 1281-01-01 <cikti.geojson>
//
// 🔴 NİÇİN İKİ PARÇA (js + py): gövdeleri çözmek projenin KENDİ mantığıdır
//    (`parcaCoz`, iki kademeli havuz) — onu Python'da yeniden yazmak
//    `§11`in "kendi yazdığın ayrıştırıcı her zaman kötüdür" tuzağıdır.
//    Geometri işlemleri ise shapely ister. ⇒ Her dil kendi işini yapıyor:
//    JS gövdeyi ÇÖZER, Python BOŞLUĞU ÖLÇER.
//
// 🔴 `parcaCoz` BURAYA KOPYALANMADI — `js/app.js`ten METİN OLARAK kesilip
//    çalıştırılıyor. Kopyalasaydım iki tanım doğar ve bir gün ayrışırlardı
//    (`§11`: "bir bilgi iki yerde duruyorsa biri güncellenince öteki bayatlar").
'use strict';
const fs = require('fs');
const path = require('path');

const KOK = path.dirname(__dirname);
const GUN = process.argv[2] || '1281-01-01';
const CIKTI = process.argv[3] || path.join(KOK, 'denetim', '_dikis_govde.geojson');

global.window = {};
for (const f of ['donemler.js', 'devletler_harita.js']) {
  eval(fs.readFileSync(path.join(KOK, 'data', f), 'utf8'));
}

// --- app.js'ten `parcaCoz`u OLDUĞU GİBİ al ---
const appjs = fs.readFileSync(path.join(KOK, 'js', 'app.js'), 'utf8');
const m = appjs.match(/function parcaCoz\([\s\S]*?\n\}/);
if (!m) { console.error('parcaCoz BULUNAMADI — app.js değişmiş olabilir. DURDUM.'); process.exit(1); }
// ⚠️ `eval(m[0])` YETMİYOR: 'use strict' altında eval içindeki fonksiyon
//    BİLDİRİMİ dış kapsama sızmaz. İfadeye çevirip ATIYORUZ.
const parcaCoz = eval('(' + m[0] + ')');
if (typeof parcaCoz !== 'function') {
  console.error('parcaCoz alınamadı. DURDUM.'); process.exit(1);
}

const PARCALAR = window.PARCALAR || [];
const PARCA_HALKA = window.PARCA_HALKA || [];
const DP = window.DEVLET_PARCALAR || [];
const DPH = window.DEVLET_PARCA_HALKA || [];

const ozellikler = [];
function ekle(id, ad, geo) {
  if (!geo || !geo.coordinates || !geo.coordinates.length) return;
  ozellikler.push({ type: 'Feature', properties: { id, ad }, geometry: geo });
}

// --- Osmanlı (doğrudan + tâbi) ---
let osm = 0;
for (const d of window.DONEMLER || []) {
  if (!(d.f <= GUN && GUN < d.t)) continue;
  ekle('OSMANLI', d.ad || 'Osmanlı', parcaCoz(d.o, PARCALAR, PARCA_HALKA));
  ekle('tabi', d.ad || 'tâbi', parcaCoz(d.v, PARCALAR, PARCA_HALKA));
  osm++;
}

// --- yabancı devletler ---
let yab = 0;
for (const D of window.DEVLET_HARITA || []) {
  for (const dn of D.dnm || []) {
    if (!(dn.f <= GUN && GUN < dn.t)) continue;
    ekle(D.id, D.ad, parcaCoz(dn.g, DP, DPH));
    yab++;
  }
}

fs.writeFileSync(CIKTI, JSON.stringify(
  { type: 'FeatureCollection', gun: GUN,
    features: ozellikler }));
console.error(`gün ${GUN}: Osmanlı dönemi ${osm} · yabancı gövde ${yab} · ` +
              `toplam öznitelik ${ozellikler.length}`);
console.error('→ ' + CIKTI);

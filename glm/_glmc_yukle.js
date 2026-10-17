// GLM-C yardımcı yükleyici — iki evreni ölçer:
//  U1 KAYNAK: data/olaylar*.js + data/kronoloji*.js (koordinatörün regex evreni; her dosya
//     AYRI sandbox'ta koşar ki aynı globali tanımlayan dosyalar birbirini ezmesin)
//  U2 YÜKLEME: index.html'deki <script src> sırasıyla TEK sandbox (tarayıcının gerçekte
//     yüklediği son durum — paket birleştirmesi sonrası kaynak dosyalar bağlı olmayabilir)
// Kartlar (ekokuma) ayrıca tazelenir. Dump: glm/_glmc_veri.json
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const KOK = path.resolve(__dirname, '..');
const cikti = { U1: [], U2: { etiketler: [], globals: {} }, sorunlar: [] };

function kumeyi_kos(icerik, ad) {
  const kume = {};
  const sb = { window: kume, console: { log(){}, warn(){}, error(){} } };
  sb.globalThis = kume; sb.self = kume;
  vm.createContext(sb);
  vm.runInContext(icerik, sb, { filename: ad });
  return kume;
}

// ---- U1: kaynak dosyalar, her biri ayrı sandbox
const kaynaklar = fs.readdirSync(path.join(KOK, 'data'))
  .filter(f => /^(olaylar|kronoloji)/i.test(f) && f.endsWith('.js'))
  .sort();
for (const f of kaynaklar) {
  const icerik = fs.readFileSync(path.join(KOK, 'data', f), 'utf8');
  try {
    const kume = kumeyi_kos(icerik, f);
    for (const g of Object.keys(kume)) {
      const d = kume[g];
      if (Array.isArray(d)) {
        cikti.U1.push({ dosya: 'data/' + f, global: g, madde_sayisi: d.length, maddeler: d });
      }
    }
  } catch (e) {
    cikti.sorunlar.push({ evren: 'U1', dosya: f, hata: String(e) });
  }
}

// ---- U2: index.html script zinciri, TEK sandbox (yükleme sırası)
const index = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
const etiketler = [...index.matchAll(/<script[^>]*?\bsrc=["']([^"']+)["']/gi)].map(m => m[1]);
cikti.U2.etiketler = etiketler;
const kume = {};
const sb = { window: kume, console: { log(){}, warn(){}, error(){} } };
sb.globalThis = kume; sb.self = kume;
vm.createContext(sb);
for (const src of etiketler) {
  if (/^https?:/.test(src)) continue;
  const p = path.join(KOK, src.split('?')[0]);
  if (!fs.existsSync(p)) { cikti.sorunlar.push({ evren: 'U2', dosya: src, hata: 'YOK' }); continue; }
  try {
    vm.runInContext(fs.readFileSync(p, 'utf8'), sb, { filename: path.basename(src) });
  } catch (e) {
    cikti.sorunlar.push({ evren: 'U2', dosya: src, hata: String(e) });
  }
}
for (const g of Object.keys(kume)) {
  const d = kume[g];
  if (Array.isArray(d) && /^(OLAYLAR|KRONOLOJI)/i.test(g)) {
    cikti.U2.globals[g] = { madde_sayisi: d.length, maddeler: d };
  }
}

fs.writeFileSync(path.join(__dirname, '_glmc_veri.json'), JSON.stringify(cikti), 'utf8');
console.log(JSON.stringify({
  U1_dosya: kaynaklar.length,
  U1_global: cikti.U1.length,
  U1_madde: cikti.U1.reduce((t, x) => t + x.madde_sayisi, 0),
  U2_olay_krono_global: Object.keys(cikti.U2.globals).length,
  U2_madde: Object.values(cikti.U2.globals).reduce((t, x) => t + x.madde_sayisi, 0),
  sorun: cikti.sorunlar.length,
}));

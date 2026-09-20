// -*- coding: utf-8 -*-
// SEFER-OK-0070 · paket 0072 H-0010 ölçümü — "ok rengi = harekâtı yapan ülkenin
// renginin DAHA KOYU TONU" (Emre, 20 Eylül 2026) · 20 Eylül 2026
//
// İKİ SORU:
//   ① BUGÜN oklar hangi kaynaktan renk alıyor (elle yazılmış renk · devlet ·
//     taraf · varsayılan)? Kuralın kaç kayıtta fiilen uygulandığını ölç.
//   ② KOYULAŞTIRMA OKUNURLUĞU ARTIRIYOR MU? Emre'nin 0071 sınır şartı: ok
//     taralı alanla ve öteki öğelerle BİRBİRİNE GİRMEYECEK. Koyu ton, kendi
//     devletinin dolgusu üzerine düştüğünde kontrast ölçülür (WCAG oranı).
//
// Kullanım: node denetim/ARAC-OK-RENK-0072.js [--json denetim/OLCUM-OK-RENK-0072.json]
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const KOK = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
const src = [...html.matchAll(/<script src="(data\/[^"?]+)(\?[^"]*)?"><\/script>/g)].map(m => m[1]);
global.window = global;
for (const f of src) {
  const p = path.join(KOK, f);
  if (fs.existsSync(p)) { try { vm.runInThisContext(fs.readFileSync(p, 'utf8'), { filename: f }); } catch (e) { } }
}

// app.js:8534 `koyuTon` ile BİREBİR aynı hesap (kopya değil, sınav için taklit —
// ölçümün uygulamadan ayrışmaması için formül buraya yazıldı ve farkı olursa
// sınav bunu gösterir).
function koyuTon(renk, oran) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(renk || '').trim());
  if (!m) return renk;
  const o = (oran === undefined ? 0.45 : oran), n = parseInt(m[1], 16);
  const r = Math.round(((n >> 16) & 255) * (1 - o));
  const g = Math.round(((n >> 8) & 255) * (1 - o));
  const b = Math.round((n & 255) * (1 - o));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(h) { const n = parseInt(String(h).replace('#', ''), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function lum(h) {
  const c = rgb(h).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function kontrast(a, b) { const l1 = lum(a), l2 = lum(b); const [x, y] = l1 > l2 ? [l1, l2] : [l2, l1]; return +((x + 0.05) / (y + 0.05)).toFixed(2); }

const DR = {};
(global.DEVLET_HARITA || []).forEach(d => { if (d && d.id) DR[d.id] = d.renk; });
const OSMANLI = '#8e0b22';

const oklar = [];
for (const k of Object.keys(global)) {
  if (!/^SEFERLER(_[A-Za-z0-9_]+)?$/.test(k) || !Array.isArray(global[k])) continue;
  for (const s of global[k]) oklar.push(Object.assign({ _kova: k }, s));
}

// ---- ① bugünkü renk kaynağı (app.js `_seferRengiCoz` mantığı)
const kaynakDagilim = {};
const satir = oklar.map(s => {
  let kaynak, renk;
  if (s.renk) { kaynak = 'elle-renk'; renk = s.renk; }
  else if (s.hal === 'planlanan') { kaynak = 'planlanan'; renk = '#c98a00'; }
  else if (s.devlet && DR[s.devlet]) { kaynak = 'devlet'; renk = koyuTon(DR[s.devlet], 0.35); }
  else if (s.taraf === 'osmanli') { kaynak = 'taraf-osmanli'; renk = koyuTon(OSMANLI, 0.35); }
  else if (s.taraf === 'dusman') { kaynak = 'taraf-dusman'; renk = '#1b7a3f'; }
  else { kaynak = 'varsayilan'; renk = '#2b1006'; }
  kaynakDagilim[kaynak] = (kaynakDagilim[kaynak] || 0) + 1;
  return { ad: (s.ad || '').slice(0, 55), kova: s._kova, tur: s.tur || 'sefer',
           devlet: s.devlet || null, taraf: s.taraf || null, renk_alani: s.renk || null,
           kaynak, bugunku_renk: renk };
});

// ---- ② okunurluk: koyu ton kendi devletinin dolgusu üstünde
// Ölçüt: WCAG kontrast oranı. 3:1 grafik öğeler için asgari kabul (WCAG 1.4.11).
const zeminler = { osmanli: OSMANLI, 'deniz(altlık)': '#a9d3e8', 'kara(altlık)': '#e8dfc8' };
const devletOrnek = Object.keys(DR).slice(0, 0);   // aşağıda kullanılan devletlerle doldurulur
for (const s of oklar) if (s.devlet && DR[s.devlet]) devletOrnek.push(s.devlet);
const kullanilan = [...new Set(devletOrnek)];

const okunurluk = [];
for (const oranAdi of [0.25, 0.35, 0.45]) {
  const olcum = { oran: oranAdi, devlet: [], osmanli: null };
  for (const id of kullanilan) {
    const taban = DR[id], koyu = koyuTon(taban, oranAdi);
    olcum.devlet.push({ id, taban, koyu, kendi_dolgusu_uzerinde: kontrast(koyu, taban),
                        deniz_uzerinde: kontrast(koyu, zeminler['deniz(altlık)']),
                        kara_uzerinde: kontrast(koyu, zeminler['kara(altlık)']) });
  }
  const ok = koyuTon(OSMANLI, oranAdi);
  olcum.osmanli = { taban: OSMANLI, koyu: ok, kendi_dolgusu_uzerinde: kontrast(ok, OSMANLI),
                    deniz_uzerinde: kontrast(ok, zeminler['deniz(altlık)']),
                    kara_uzerinde: kontrast(ok, zeminler['kara(altlık)']) };
  okunurluk.push(olcum);
}

// ---- sahipsiz kayıtlar (devlet/taraf/renk yok) — "harekâtı yapan ülke" belirsiz
const sahipsiz = oklar.filter(s => !s.renk && !s.devlet && !s.taraf)
  .map(s => ({ ad: (s.ad || '').slice(0, 60), f: s.f, kova: s._kova }));

const cikti = {
  olcum: 'OK-RENK-0072', tarih: new Date().toISOString().slice(0, 10),
  ok: oklar.length, renk_kaynagi_dagilimi: kaynakDagilim,
  kural_bugun_kac_kayitta: kaynakDagilim['devlet'] || 0,
  kullanilan_devletler: kullanilan.map(id => ({ id, renk: DR[id], koyu_035: koyuTon(DR[id], 0.35) })),
  okunurluk, sahipsiz_kayit: sahipsiz.length, sahipsiz: sahipsiz,
  satirlar: satir
};
const ji = process.argv.indexOf('--json');
if (ji > 0 && process.argv[ji + 1]) fs.writeFileSync(path.join(KOK, process.argv[ji + 1]), JSON.stringify(cikti, null, 1), 'utf8');
const ozet = Object.assign({}, cikti); delete ozet.satirlar; delete ozet.sahipsiz;
console.log(JSON.stringify(ozet, null, 1));

// -*- coding: utf-8 -*-
// SEFER-OK-0070 · ölçüm aracı — 20 Eylül 2026
// NİÇİN NODE: app.js'in gördüğü evreni TAKLİT ETMEK yerine BİREBİR yüklüyoruz.
// index.html'deki <script src="data/..."> satırları SIRAYLA çalıştırılır; böylece
// "bağlı mı" sorusu ile "okunuyor mu" sorusu aynı ölçümde cevaplanır (D099).
// Kullanım: node denetim/ARAC-SEFER-OK-0070.js [--json denetim/OLCUM-SEFER-OK-0070.json]
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const KOK = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
const src = [...html.matchAll(/<script src="(data\/[^"?]+)(\?[^"]*)?"><\/script>/g)].map(m => m[1]);

global.window = global;
const yuklenemeyen = [];
for (const f of src) {
  const p = path.join(KOK, f);
  if (!fs.existsSync(p)) { yuklenemeyen.push([f, 'DOSYA YOK']); continue; }
  try { vm.runInThisContext(fs.readFileSync(p, 'utf8'), { filename: f }); }
  catch (e) { yuklenemeyen.push([f, String(e.message).slice(0, 120)]); }
}

// ---- A. SEFER (ok) evreni — app.js:4050 deseninin BİREBİR kopyası
const seferAdlari = Object.keys(global).filter(k => /^SEFERLER(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(global[k]));
const benzeyen = Object.keys(global).filter(k => k.indexOf('SEFERLER') === 0 && !/^SEFERLER(_[A-Za-z0-9_]+)?$/.test(k));
const okKayit = [];
for (const ad of seferAdlari) for (const s of global[ad]) okKayit.push(Object.assign({ _ad_alani: ad }, s));

const gun = t => (t || '').slice(0, 10);
const yil = t => parseInt((t || '0').slice(0, 4), 10) || 0;

const ok = {
  ad_alani: seferAdlari, benzeyen_elenen: benzeyen, kayit: okKayit.length,
  yolsuz: okKayit.filter(s => !Array.isArray(s.yol) || s.yol.length < 2).length,
  tur: {}, taraf: {}, renk_yazili: okKayit.filter(s => !!s.renk).length,
  devlet_yazili: okKayit.filter(s => !!s.devlet).length,
  nokta_dagilimi: { iki: 0, uc_bes: 0, alti_arti: 0 },
  yil_araligi: [Math.min(...okKayit.map(s => yil(s.f))), Math.max(...okKayit.map(s => yil(s.t || s.f)))],
  mukerrer_yol: []
};
const yolAnahtar = new Map();
for (const s of okKayit) {
  ok.tur[s.tur || '(yok)'] = (ok.tur[s.tur || '(yok)'] || 0) + 1;
  ok.taraf[s.taraf || '(yok)'] = (ok.taraf[s.taraf || '(yok)'] || 0) + 1;
  const n = Array.isArray(s.yol) ? s.yol.length : 0;
  if (n === 2) ok.nokta_dagilimi.iki++; else if (n <= 5) ok.nokta_dagilimi.uc_bes++; else if (n > 5) ok.nokta_dagilimi.alti_arti++;
  if (n >= 2) {
    const a = JSON.stringify([s.yol[0], s.yol[n - 1], gun(s.f)]);
    if (yolAnahtar.has(a)) ok.mukerrer_yol.push([yolAnahtar.get(a), (s.ad || s.id) + ' @' + s._ad_alani]);
    else yolAnahtar.set(a, (s.ad || s.id) + ' @' + s._ad_alani);
  }
}

// ---- B. Kronoloji evreni — app.js:5345 deseni + KRONOLOJI kuyruğu
const olayAdlari = Object.keys(global).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(global[k]));
const kronoAdlari = Object.keys(global).filter(k => /^KRONOLOJI(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(global[k]));
const maddeler = [];
for (const ad of olayAdlari) for (const m of global[ad]) maddeler.push(Object.assign({ _kova: 'olaylar', _ad_alani: ad }, m));
for (const ad of kronoAdlari) for (const m of global[ad]) maddeler.push(Object.assign({ _kova: 'kronoloji', _ad_alani: ad }, m));

// HAREKÂT MADDESİ TANIMI — Emre'nin metni: "savaş · sefer · işgal · harekât".
// Ölçüt VERİDEN: k: alanı ve etiket kümesi. Tanım kodun içinde AÇIK dursun ki
// sayı tartışılınca evren de tartışılabilsin.
const HAREKET_K = new Set(['savas', 'fetih', 'kusatma', 'sefer', 'isyan', 'isgal', 'akin']);
const HAREKET_ETIKET = new Set(['savas', 'toprak-kazanc', 'toprak-kayip', 'isyan', 'isgal']);
const hareketMi = m => HAREKET_K.has(m.k) || (Array.isArray(m.etiket) && m.etiket.some(e => HAREKET_ETIKET.has(e)));
const hareket = maddeler.filter(hareketMi);
const kDagilim = {};
for (const m of maddeler) kDagilim[m.k || '(yok)'] = (kDagilim[m.k || '(yok)'] || 0) + 1;

// ---- C. Eşleşme: maddenin gününde ok VERİSİ var mı (app.js kırpması HARİÇ,
// yalnız kaydın kendi [f,t] aralığı ±15 gün — "veri var mı" sorusu, "görünür mü" değil)
const gunSayi = t => { const d = Date.parse((t || '').slice(0, 10) + 'T00:00:00Z'); return isNaN(d) ? null : Math.floor(d / 86400000); };
const araliklar = okKayit.filter(s => Array.isArray(s.yol) && s.yol.length >= 2)
  .map(s => ({ a: gunSayi(s.f), b: gunSayi(s.t || s.f), ad: s.ad || s.id }))
  .filter(s => s.a !== null && s.b !== null);
let okluMadde = 0; const oksuz = []; let tarihsiz = 0;
for (const m of hareket) {
  const g = gunSayi(m.t);
  if (g === null) { tarihsiz++; continue; }
  const v = araliklar.find(s => g >= s.a - 15 && g <= s.b + 15);
  if (v) okluMadde++; else oksuz.push({ t: m.t, k: m.k, b: (m.b || '').slice(0, 70), kova: m._kova });
}

// yüzyıl dağılımı — "güzergâh yok" kovası nerede yoğun
const yuzyil = {};
for (const o of oksuz) { const y = Math.floor(yil(o.t) / 100) + 1; yuzyil[y] = (yuzyil[y] || 0) + 1; }

const cikti = {
  olcum: 'SEFER-OK-0070', tarih: new Date().toISOString().slice(0, 10),
  yuklenemeyen, bagli_data_dosyasi: src.length,
  ok, madde_toplam: maddeler.length, madde_k_dagilim: kDagilim,
  hareket_maddesi: hareket.length, hareket_tarihsiz: tarihsiz,
  oklu_madde: okluMadde, oksuz_madde: oksuz.length,
  oksuz_yuzde: +(100 * oksuz.length / Math.max(1, hareket.length)).toFixed(1),
  oksuz_yuzyil: yuzyil,
  oksuz_ornek: oksuz.slice(0, 20), oksuz_tamami: oksuz
};
const ji = process.argv.indexOf('--json');
if (ji > 0 && process.argv[ji + 1]) fs.writeFileSync(path.join(KOK, process.argv[ji + 1]), JSON.stringify(cikti, null, 1), 'utf8');
const ozet = Object.assign({}, cikti); delete ozet.oksuz_tamami;
console.log(JSON.stringify(ozet, null, 1));

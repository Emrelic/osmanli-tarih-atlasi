// -*- coding: utf-8 -*-
// SEFER-OK-0070 · ATIF ÖLÇÜMÜ — "bu maddeye çizilen ok gerçekten o maddenin mi?"
// 20 Eylül 2026. Sebep: ELE-GECIRME-ANIM-0070 (M-4718 §4b) "Vehhâbîlerin
// Mekke'yi ele geçirmesi" (1803-04-30) maddesinde ok fazının koştuğunu ölçtü;
// o madde bir ordu güzergâhı anlatmıyor. Emre'nin M-4714 §4 kuralı: "bir
// maddede en çok BİR ok, TEK ANLATI" — ALAKASIZ ok, oksuzluktan kötüdür.
//
// Bu alet js/sefer_ok.js'teki `okSec()` ölçütlerini (tarih ±15 gün · ucun
// maddeye uzaklığı ≤400 km) BİREBİR taklit eder ve bütün kronoloji üzerinde
// koşturur: kaç madde ok alıyor, mesafe dağılımı nedir, eşik daraltılırsa ne
// kaybedilir. Tarayıcı gerekmez.
// Kullanım: node denetim/ARAC-SEFER-OK-ATIF-0070.js [--json <yol>]
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

const gun = t => { const d = Date.parse(String(t || '').slice(0, 10) + 'T00:00:00Z'); return isNaN(d) ? null : Math.floor(d / 86400000); };
function km(la1, lo1, la2, lo2) {
  const R = 6371, r = Math.PI / 180;
  const dla = (la2 - la1) * r, dlo = (lo2 - lo1) * r;
  const a = Math.sin(dla / 2) ** 2 + Math.cos(la1 * r) * Math.cos(la2 * r) * Math.sin(dlo / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
}

// şehir tablosu — app.js `olayKonumu()` ile aynı çözüm (birebir eşleşme +
// parantezli lakabın öncesi), skor YOK
const sehir = [];
for (const s of (global.SEHIRLER || [])) if (s && s.lat !== undefined) sehir.push(s);
function olayKonumu(o) {
  if (o.yer_kon && o.yer_kon.length === 2) return { lat: o.yer_kon[0], lon: o.yer_kon[1] };
  if (!o.yer_id) return null;
  for (const s of sehir) if (s.ad === o.yer_id || String(s.ad).split(' (')[0] === o.yer_id) return { lat: s.lat, lon: s.lon };
  return null;
}

const oklar = [];
for (const k of Object.keys(global)) {
  if (!/^SEFERLER(_[A-Za-z0-9_]+)?$/.test(k) || !Array.isArray(global[k])) continue;
  for (const s of global[k]) {
    if (!Array.isArray(s.yol) || s.yol.length < 2) continue;
    const a = gun(s.f), b = gun(s.t || s.f);
    if (a === null || b === null) continue;
    oklar.push({ ad: s.ad || s.id, tur: s.tur || 'sefer', a, b, uc: s.yol[s.yol.length - 1], bas: s.yol[0], yol: s.yol });
  }
}

const maddeler = [];
for (const k of Object.keys(global)) {
  if (!Array.isArray(global[k])) continue;
  if (/^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k)) for (const m of global[k]) maddeler.push(m);
}

const TOLERANS = 15, TAVAN = 400;
const esler = [];
for (const m of maddeler) {
  const g = gun(m.t);
  if (g === null) continue;
  const kon = olayKonumu(m);
  let en = null, enPuan = Infinity, enKm = null;
  for (const o of oklar) {
    if (g < o.a - TOLERANS || g > o.b + TOLERANS) continue;
    let puan, d = null;
    // 🔴 MESAFE OKUN UCUNA DEĞİL GÜZERGÂHIN TAMAMINA ölçülüyor. İlk ölçüm uca
    // bakıyordu ve "Medine geri alındı" ↔ "Tosun Paşa'nın Hicaz seferi"
    // çiftini 340 km diye şüpheli göstermişti; oysa sefer Medine'den GEÇİYOR.
    // Okun ucu seferin EN İLERİ noktasıdır, anlattığı olayın yeri değil.
    if (kon) {
      d = Infinity;
      for (const p of o.yol) { const x = km(kon.lat, kon.lon, p[1], p[0]); if (x < d) d = x; }
      if (d > TAVAN) continue; puan = d;
    }
    else puan = TAVAN + Math.abs(g - o.b);
    if (puan < enPuan) { enPuan = puan; en = o; enKm = d; }
  }
  if (en) esler.push({ madde: (m.b || '').slice(0, 60), t: m.t, k: m.k, yer: m.yer_id || null,
                       konum_var: !!kon, ok: en.ad.slice(0, 60), tur: en.tur,
                       km: enKm === null ? null : Math.round(enKm),
                       gun_disi: (g < en.a || g > en.b) ? Math.min(Math.abs(g - en.a), Math.abs(g - en.b)) : 0 });
}

const konumsuz = esler.filter(e => !e.konum_var);
const uzak = esler.filter(e => e.km !== null && e.km > 150);
const yakin = esler.filter(e => e.km !== null && e.km <= 150);
const esikler = {};
for (const t of [50, 100, 150, 200, 300, 400])
  esikler[t + ' km'] = esler.filter(e => e.km !== null && e.km <= t).length;

const cikti = {
  olcum: 'SEFER-OK-ATIF-0070', tarih: new Date().toISOString().slice(0, 10),
  ok: oklar.length, madde: maddeler.length,
  ok_alan_madde: esler.length,
  konumu_cozulemeyen_madde_eslesmesi: konumsuz.length,   // yalnız tarihle eşleşenler — en riskli kova
  uc_150km_ustu: uzak.length, uc_150km_alti: yakin.length,
  gun_penceresi_disinda_eslesen: esler.filter(e => e.gun_disi > 0).length,
  esige_gore_kalan: esikler,
  mekke_1803: esler.filter(e => /Mekke/i.test(e.madde) && e.t.indexOf('1803') === 0),
  en_uzak_20: esler.filter(e => e.km !== null).sort((a, b) => b.km - a.km).slice(0, 20),
  konumsuz_ornek: konumsuz.slice(0, 15),
  tamami: esler
};
const ji = process.argv.indexOf('--json');
if (ji > 0 && process.argv[ji + 1]) fs.writeFileSync(path.join(KOK, process.argv[ji + 1]), JSON.stringify(cikti, null, 1), 'utf8');
const ozet = Object.assign({}, cikti); delete ozet.tamami;
console.log(JSON.stringify(ozet, null, 1));

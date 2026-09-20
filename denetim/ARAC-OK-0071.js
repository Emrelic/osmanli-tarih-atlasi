// -*- coding: utf-8 -*-
// SEFER-OK-0070 · paket 0071 ölçümü (H-0003 · H-0004 · H-0007) — 20 Eylül 2026
//
// ÜÇ SORU:
//   ① MÜKERRER — 0070'te kullandığım ölçüt (aynı uçlar + AYNI GÜN) dardı ve
//     bunu ölçüm kendisi gösterdi: "Alemdar Mustafa Paşa'nın Rusçuk'tan
//     İstanbul'a yürüyüşü" SEFERLER'de 1808-01-01, SEFERLER_OK103'te
//     1808-07-01 başlıyor — aynı yürüyüş, AYRI gün, ölçüt yakalamıyordu.
//     Yeni ölçüt: uçlar 25 km içinde + zaman pencereleri ÖRTÜŞÜYOR.
//   ② İÇ HAREKÂT — Emre (H-0007): "yurt içi harekât ve eylemlerde de ok
//     gösterelim, standart olsun". Kaç madde bu sınıfa giriyor, kaçında
//     güzergâh verisi var?
//   ③ OLAY ALANI — bir maddenin yeri haritada gösterilebiliyor mu? Ölçüt
//     `yer_id`nin ŞEHİR HAVUZUNDA çözülmesi (app.js olayKonumu ile aynı).
//
// Kullanım: node denetim/ARAC-OK-0071.js [--json denetim/OLCUM-OK-0071.json]
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
  const a = Math.sin((la2 - la1) * r / 2) ** 2 + Math.cos(la1 * r) * Math.cos(la2 * r) * Math.sin((lo2 - lo1) * r / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
}

// ---- evrenler
const oklar = [];
for (const k of Object.keys(global)) {
  if (!/^SEFERLER(_[A-Za-z0-9_]+)?$/.test(k) || !Array.isArray(global[k])) continue;
  for (const s of global[k]) {
    if (!Array.isArray(s.yol) || s.yol.length < 2) continue;
    oklar.push({ ad: s.ad || s.id, tur: s.tur || 'sefer', kova: k,
                 a: gun(s.f), b: gun(s.t || s.f), f: s.f, t: s.t,
                 bas: s.yol[0], uc: s.yol[s.yol.length - 1], n: s.yol.length });
  }
}
const maddeler = [];
for (const k of Object.keys(global)) {
  if (/^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(global[k]))
    for (const m of global[k]) maddeler.push(Object.assign({ _kova: k }, m));
}

// 🔴 YERLEŞİM HAVUZU — index.html'in İÇ İÇE (inline) birleştirmesi burada da
// yapılmalı. İlk ölçümde yalnız `<script src=…>` satırları çalıştırılmıştı ve
// `window.YERLESIMLER` 797 kayıt görünüyordu; buradan "86 ad alanı app.js'e
// hiç ulaşmıyor" gibi bir ALARM çıkacaktı. index.html:1280'de
// `YERLESIMLER_` önekli her global ana diziye KATILIYOR — yani kusur atlasta
// değil ölçümdeydi. (Ölçüm doğru, çıkarım yanlış ailesi: eksik evrende ölçüp
// hüküm vermek.)
{
  const ek = Object.keys(global).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(global[k]));
  let toplam = (global.YERLESIMLER || []).slice();
  for (const k of ek) toplam = toplam.concat(global[k]);
  global.YERLESIMLER = toplam;
}
// app.js `olayKonumu()` şehir havuzunu ISARET_KAYNAK'tan kurar: YERLESIMLER
// varsa d/v/s dönemi olanlar, yoksa eski SEHIRLER tablosu.
const sehir = ((global.YERLESIMLER && global.YERLESIMLER.length)
  ? global.YERLESIMLER.filter(y => (y.d && y.d.length) || (y.v && y.v.length) || (y.s && y.s.length))
  : (global.SEHIRLER || [])).filter(s => s && s.lat !== undefined);
function konum(o) {
  if (o.yer_kon && o.yer_kon.length === 2) return { lat: o.yer_kon[0], lon: o.yer_kon[1] };
  if (!o.yer_id) return null;
  for (const s of sehir) if (s.ad === o.yer_id || String(s.ad).split(' (')[0] === o.yer_id) return { lat: s.lat, lon: s.lon };
  return null;
}

// ---- ① MÜKERRER: uçlar yakın + pencereler örtüşüyor
const UC_KM = 25;
const mukerrer = [];
for (let i = 0; i < oklar.length; i++) for (let j = i + 1; j < oklar.length; j++) {
  const A = oklar[i], B = oklar[j];
  if (A.a === null || B.a === null) continue;
  if (Math.max(A.a, B.a) > Math.min(A.b, B.b)) continue;           // pencere örtüşmüyor
  const d1 = km(A.bas[1], A.bas[0], B.bas[1], B.bas[0]);
  const d2 = km(A.uc[1], A.uc[0], B.uc[1], B.uc[0]);
  if (d1 > UC_KM || d2 > UC_KM) continue;
  mukerrer.push({ a: A.ad, a_kova: A.kova, a_f: A.f, a_t: A.t, a_nokta: A.n,
                  b: B.ad, b_kova: B.kova, b_f: B.f, b_t: B.t, b_nokta: B.n,
                  bas_km: +d1.toFixed(1), uc_km: +d2.toFixed(1) });
}

// ---- ② İÇ HAREKÂT evreni
// Tanım AÇIK yazılıyor ki sayı tartışılınca evren tartışılabilsin:
// gövdesinde ya da başlığında ORDU HAREKETİ fiili geçen ve OSMANLI İÇİ bir
// yerde geçen madde. Dış sefer/savaş maddeleri ayıklanmıyor — kesişim ayrıca
// raporlanıyor (bir madde hem iç hem dış olabilir: Rumeli'ye yürüyüş).
// 🔴 EVREN DAR TUTULUYOR ve sebebi ölçüldü: ilk süzgeç ("geldi", "sevk edil"
// gibi geniş fiiller) 78 aday verdi ama içinde "I. Murad tahta çıktı",
// "Sadrazam Âlî Paşa'nın vefatı" gibi HAREKÂT OLMAYAN maddeler vardı. Emre'nin
// tarif ettiği sınıf dar ve belirli: BİR KUVVETİN BİR ŞEHRE YÜRÜYÜŞÜ
// (Alemdar'ın Rusçuk→İstanbul'u, Hareket Ordusu, Edirne Vak'ası).
const HAREKET_FIIL = /(yürüyüş|yürüyüşü|yürüdü|yürüyerek|üzerine yürü|ordusuyla .{0,40}(gir|gel|yürü)|kuvvetleriyle .{0,40}(gir|gel|yürü)|ordusunu .{0,30}sevk|ordusuyla harekete|harekât ordusu|hareket ordusu)/i;
const IC_K = new Set(['isyan', 'darbe', 'siyaset', 'sadrazam', 'taht', 'idari', 'savas', 'fetih']);
const icAday = maddeler.filter(m => {
  const metin = (m.b || '') + ' ' + (m.d || '');
  return HAREKET_FIIL.test(metin) && IC_K.has(m.k);
});
// Emre'nin adıyla andığı örnekler ayrıca aranıyor (evren doğru mu sınavı)
const ANILAN = ['Hareket Ordusu', 'Edirne Vak', 'Alemdar', 'Kabakçı', 'Patrona', '31 Mart'];
const anilanBulgu = ANILAN.map(ad => {
  const bulunan = maddeler.filter(m => new RegExp(ad, 'i').test((m.b || '') + ' ' + (m.d || '')));
  return { ad, madde: bulunan.length,
           ornek: bulunan.slice(0, 3).map(m => ({ t: m.t, b: (m.b || '').slice(0, 55), yer_id: m.yer_id || null })) };
});
// güzergâh verisi var mı: maddenin gününde ve yerine 150 km içinde ok
const ESLESME_GUN = 15, ESLESME_KM = 150;
function okuVar(m) {
  const g = gun(m.t); if (g === null) return null;
  const kon = konum(m); if (!kon) return null;
  for (const o of oklar) {
    if (g < o.a - ESLESME_GUN || g > o.b + ESLESME_GUN) continue;
    for (const p of [o.bas, o.uc]) if (km(kon.lat, kon.lon, p[1], p[0]) <= ESLESME_KM) return o.ad;
  }
  return null;
}
const icOlculen = icAday.map(m => ({ t: m.t, k: m.k, b: (m.b || '').slice(0, 62),
                                     yer_id: m.yer_id || null, konum: !!konum(m), ok: okuVar(m) }));

// ---- ③ OLAY ALANI: yer_id çözülemeyen maddeler (olay yeri gösterilemez)
const yersiz = maddeler.filter(m => !konum(m));
const yerIdsiz = maddeler.filter(m => !m.yer_id && !m.yer_kon);
const yerIdVarCozulemeyen = maddeler.filter(m => m.yer_id && !konum(m));

const cikti = {
  olcum: 'OK-0071', tarih: new Date().toISOString().slice(0, 10),
  ok: oklar.length, madde: maddeler.length, sehir_havuzu: sehir.length,
  mukerrer_cift: mukerrer.length, mukerrer: mukerrer,
  ic_harekat_aday: icAday.length,
  ic_harekat_oku_olan: icOlculen.filter(x => x.ok).length,
  ic_harekat_oksuz: icOlculen.filter(x => !x.ok).length,
  ic_harekat_konumsuz: icOlculen.filter(x => !x.konum).length,
  ic_harekat_ornek: icOlculen.slice(0, 40),
  anilan_ornekler: anilanBulgu,
  ic_harekat_tamami: icOlculen,
  olay_alani_gosterilemeyen: yersiz.length,
  yer_id_hic_yok: yerIdsiz.length,
  yer_id_var_ama_havuzda_yok: yerIdVarCozulemeyen.length,
  yer_id_var_ama_havuzda_yok_ornek: yerIdVarCozulemeyen.slice(0, 20).map(m => ({ t: m.t, b: (m.b || '').slice(0, 50), yer_id: m.yer_id })),
  hedef_maddeler: ['1807-02-20', '1807-04-21', '1808-07-19'].map(t => {
    const m = maddeler.find(x => x.t === t);
    return m ? { t, b: (m.b || '').slice(0, 60), k: m.k, yer_id: m.yer_id || null,
                 konum_cozuldu: !!konum(m), ok: okuVar(m), kova: m._kova } : { t, durum: 'MADDE YOK' };
  })
};
const ji = process.argv.indexOf('--json');
if (ji > 0 && process.argv[ji + 1]) fs.writeFileSync(path.join(KOK, process.argv[ji + 1]), JSON.stringify(cikti, null, 1), 'utf8');
const ozet = Object.assign({}, cikti); delete ozet.ic_harekat_tamami;
console.log(JSON.stringify(ozet, null, 1));

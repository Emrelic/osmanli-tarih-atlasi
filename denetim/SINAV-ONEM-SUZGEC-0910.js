// ÖNEM SÜZGECİ SINAVI — GERÇEK VERİYLE, node'da. 10 Eylül 2026
//
// 🔴 `D010`: yeni yazılan bir denetim/süzgeç, İKİ YÖNDE DE sınanmadan
//    "çalışıyor" sayılmaz. Aşağıdaki her sınav bir ÖNGÖRÜ taşıyor ve
//    öngörü ölçümden ÖNCE yazıldı (`D022`).
//
//   py yerine:  node denetim/SINAV-ONEM-SUZGEC-0910.js
"use strict";
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const S = require(path.join(KOK, "js", "suzgec.js"));

// ---- gerçek veriyi yükle -------------------------------------------------
global.window = {};
for (const f of fs.readdirSync(path.join(KOK, "data")))
  if (/^(olaylar|kronoloji).*\.js$/.test(f)) {
    try { eval(fs.readFileSync(path.join(KOK, "data", f), "utf8")); } catch (e) {}
  }
const ODAK = Object.keys(global.window)
  .filter(k => /^KRONOLOJI_/.test(k))
  .reduce((a, k) => a.concat(global.window[k] || []), []);
const OSMANLI = Object.keys(global.window)
  .filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k))
  .reduce((a, k) => a.concat(global.window[k] || []), []);

let hata = 0;
function sina(ad, ongoru, gercek, gecti) {
  const ok = gecti === undefined ? (ongoru === gercek) : gecti;
  if (!ok) hata++;
  console.log(`   ${ok ? "🟢" : "🔴"} ${ad}`);
  console.log(`      öngörü: ${ongoru}   ölçüm: ${gercek}`);
}

console.log("═".repeat(66));
console.log(`ODAK kronolojisi ${ODAK.length} madde · Osmanlı ${OSMANLI.length} madde`);
console.log("═".repeat(66));

// ── ① KAPALI DAL HİÇBİR ŞEY GEÇİRMEZ ─────────────────────────────────────
console.log("\n① üç dal da KAPALI ⇒ sonuç BOŞ olmalı");
sina("kapalı süzgeç", 0,
     S.onemSuz(ODAK, { ic: 0, bolge: 0, dunya: 0, puansiz: true }).length);

// ── ② HEPSİ AÇIK, EŞİK 1 ⇒ HİÇBİR MADDE DÜŞMEZ ───────────────────────────
console.log("\n② ic=1 bolge=1 dunya=1 ⇒ TAMAMI geçmeli (eşik tabanı)");
sina("taban eşik", ODAK.length,
     S.onemSuz(ODAK, { ic: 1, bolge: 1, dunya: 1, puansiz: true }).length);

// ── ③ EŞİK YÜKSELDİKÇE SONUÇ KÜÇÜLMELİ — TEK YÖNLÜ ───────────────────────
console.log("\n③ eşik yükseldikçe sonuç KÜÇÜLMELİ (monotonluk)");
const dizi = [1, 2, 3, 4, 5].map(
  e => S.onemSuz(ODAK, { ic: e, bolge: e, dunya: e, puansiz: false }).length);
let monoton = true;
for (let i = 1; i < dizi.length; i++) if (dizi[i] > dizi[i - 1]) monoton = false;
sina("monotonluk", "azalan", dizi.join(" ≥ "), monoton);

// ── ④ 🔴 PUANSIZ MADDE SESSİZCE ELENMEMELİ (D015) ────────────────────────
console.log("\n④ D015 — puansız madde 'önemsiz' sayılmamalı");
const acik = S.onemSuz(OSMANLI, { ic: 5, bolge: 0, dunya: 0, puansiz: true }).length;
const kapali = S.onemSuz(OSMANLI, { ic: 5, bolge: 0, dunya: 0, puansiz: false }).length;
const say = S.onemSay(OSMANLI);
console.log(`      Osmanlı puansız madde: ${say.puansiz} / ${say.toplam}`);
sina("puansiz:true bunları TUTAR", true, acik > kapali, acik > kapali);
// 🔴 BU ÖNGÖRÜ BİR KEZ ÇÜRÜDÜ VE KAYDI DURUYOR (10 Eylül 2026).
// İlk hâli `say.puansiz` (1264) diyordu; ölçüm 1253 verdi. Sebep kodda
// değil ÖNGÖRÜDEYDİ: `ic` dalı yalnız İÇ maddeleri görüyor ve puansız
// 1264'ün 11'i `kapsam:"dis"` (Fort Laramie · Fontainebleau · Yeni
// İspanya Genel Valiliği…). Beklenti "ayarlanmadı" — sayaç AYRIŞTIRILDI
// (`puansizIc`/`puansizDis`), çünkü tek sayı iki ayrı davranışı gizliyordu.
console.log(`      · iç ${say.puansizIc} · dış ${say.puansizDis}`);
sina("fark tam olarak PUANSIZ-İÇ sayısı kadar",
     say.puansizIc, acik - kapali);

// ── ⑤ DÜNYA DALI KAPSAMDAN BAĞIMSIZ ──────────────────────────────────────
console.log("\n⑤ dünya dalı, iç/dış AYRIMINDAN bağımsız çalışmalı");
const yalnizDunya = S.onemSuz(ODAK, { ic: 0, bolge: 0, dunya: 5, puansiz: false });
const icOlan = yalnizDunya.filter(m => m.kapsam !== "dis").length;
sina("dunya:5 hem iç hem dış madde getirmeli", true,
     `${icOlan} iç · ${yalnizDunya.length - icOlan} dış`,
     icOlan > 0 && (yalnizDunya.length - icOlan) > 0);

// ── ⑥ KONU EKSENİ — `tur:` geri düşüşü ÇALIŞIYOR MU ──────────────────────
console.log("\n⑥ maddeGrubu: KRONOLOJI maddeleri artık 'diger'e DÜŞMEMELİ");
const grup = S.grupSayilari(ODAK);
const digerOran = grup.diger / ODAK.length;
console.log("      " + Object.entries(grup)
  .map(([k, v]) => `${k}:${v}`).join(" · "));
sina("'diger' oranı %5'in ALTINDA", "<%5",
     `%${(digerOran * 100).toFixed(1)}`, digerOran < 0.05);

// ── ⑦ 🔴 GERİLEME — Osmanlı zaman çizgisi DEĞİŞMEMELİ ────────────────────
console.log("\n⑦ GERİLEME SINAVI — `k:` taşıyan maddelerin grubu DEĞİŞMEMELİ");
const ix = {};
S.KONU_GRUPLARI.forEach(g => g.k.forEach(k => { ix[k] = g.id; }));
let kayan = 0;
for (const m of OSMANLI) if (m.k && ix[m.k] && S.maddeGrubu(m) !== ix[m.k]) kayan++;
sina("k: taşıyan maddede grup kayması", 0, kayan);

// ── ⑧ BÖLGE VEKİLİ BEYAN EDİLİYOR MU ─────────────────────────────────────
console.log("\n⑧ `bolge` alanı veride yok — geri düşüş BEYAN edilmeli");
const s2 = S.onemSay(ODAK);
console.log(`      dış madde ${s2.dis} · bunların ${s2.bolgeVekil}'i ` +
            `\`bolge\` yerine \`onem\` vekiliyle karar görüyor`);
sina("vekil sayısı BİLDİRİLİYOR", true, s2.bolgeVekil > 0, s2.bolgeVekil > 0);

// ── ⑨ EMRE'NİN HAZIR AYARI — "standart" ──────────────────────────────────
console.log("\n⑨ hazır ayar 'standart' (ic≥3 · bolge≥4 · dunya≥4)");
const std = S.onemSuz(ODAK, { ic: 3, bolge: 4, dunya: 4, puansiz: true });
console.log(`      ${ODAK.length} → ${std.length} madde ` +
            `(%${(100 * std.length / ODAK.length).toFixed(0)} kalıyor)`);
sina("anlamlı bir kırpma yapıyor (%20-%90 arası)", "%20-90",
     `%${(100 * std.length / ODAK.length).toFixed(0)}`,
     std.length > ODAK.length * 0.2 && std.length < ODAK.length * 0.9);

console.log("\n" + "═".repeat(66));
console.log(hata ? `🔴 ${hata} SINAV ÇÖKTÜ` : "🟢 SONUÇ: dokuz sınavın dokuzu geçti");
process.exit(hata ? 1 : 0);

// OK-RENK-KAPI-SINAV-1006 — ARAC-OK-RENK-0072'nin T1 kapısı + OLCU-KAPISI-1006.girdi,
// İKİ YÖNDE (salt okuma; her dal ayrı süreç çünkü ölçülemedi dalı process.exit(2)).
//   node denetim/OK-RENK-KAPI-SINAV-1006.js      çıkış 0 geçti · 1 kaldı
"use strict";
const cp = require("child_process"), path = require("path");
const KOK = path.join(__dirname, "..");
const BETIK = path.join(__dirname, "ARAC-OK-RENK-0072.js");
let gecti = 0, kaldi = 0;
const sina = (ad, sart, detay) => {
  if (sart) { gecti++; console.log("  ✓ " + ad); }
  else { kaldi++; console.log("  ✗ " + ad + (detay ? "  — " + detay : "")); }
};
const kos = (args, env) => cp.spawnSync(process.execPath, args,
  { cwd: KOK, encoding: "utf8", env: Object.assign({}, process.env, env || {}) });

console.log("① POZİTİF — gerçek girdi");
const p = kos([BETIK]);
let j = null; try { j = JSON.parse(p.stdout); } catch (e) {}
sina("çıkış 0", p.status === 0, "çıkış " + p.status + " " + (p.stdout + p.stderr).slice(0, 160));
sina("renk kaynağı 'devlet' sınıfı hâlâ var (> 0)", !!j && (j.renk_kaynagi_dagilimi.devlet || 0) > 0,
  j && JSON.stringify(j.renk_kaynagi_dagilimi));
sina("ok evreni boş değil", !!j && j.ok > 0, j && ("ok " + j.ok));

console.log("\n② NEGATİF — DEVLET_HARITA yapay olarak eksik (OLCU_KAPISI_YAPAY_EKSIK)");
const n = kos([BETIK], { OLCU_KAPISI_YAPAY_EKSIK: "DEVLET_HARITA" });
sina("çıkış 2 (eski hâli: çıkış 0 + 'devlet' oklar sessizce 'varsayilan')", n.status === 2,
  "çıkış " + n.status);
sina("sebep adıyla basılıyor", /T1 girdi yok\/boş: DEVLET_HARITA .*\[YAPAY\]/.test(n.stdout), n.stdout.slice(0, 160));
sina("JSON/sayı BASILMADI", !/renk_kaynagi_dagilimi/.test(n.stdout));

console.log("\n③ YARDIMCININ KENDİSİ — OLCU-KAPISI-1006.girdi / oran / api");
const IK = JSON.stringify(path.join(__dirname, "OLCU-KAPISI-1006.js"));
const birim = (ad, govde, beklenen) => {
  const r = kos(["-e", "const K=require(" + IK + ");" + govde]);
  sina(ad + " → çıkış " + beklenen, r.status === beklenen, "çıkış " + r.status + " " + r.stdout.slice(0, 100));
};
birim("+ dolu dizi geçer", "K.girdi({A:[1,2]},{A:'a.js'})", 0);
birim("− boş dizi", "K.girdi({A:[]},{A:'a.js'})", 2);
birim("− tanımsız", "K.girdi({},{A:'a.js'})", 2);
birim("+ oran 1/2", "K.oran(1,2,'x')", 0);
birim("− oran payda 0 (NaN yolu)", "K.oran(0,0,'x')", 2);
birim("+ api var", "K.api({f(){}},['f'],'m')", 0);
birim("− api yok", "K.api({},['f'],'m')", 2);

console.log("\nSONUÇ: " + gecti + " geçti · " + kaldi + " kaldı");
process.exit(kaldi ? 1 : 0);

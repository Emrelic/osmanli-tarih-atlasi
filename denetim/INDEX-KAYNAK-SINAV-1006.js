// INDEX-KAYNAK-SINAV-1006 — INDEX-KAYNAK-1006.js'in iki yönlü sınavı (salt okuma).
//   node denetim/INDEX-KAYNAK-SINAV-1006.js        çıkış 0 geçti · 1 kaldı
// POZİTİF gerçek index.html'de, YAPAY + NEGATİF geçici bir kökte koşar
// (ÖLÇÜLEMEDİ dalı process.exit(2) yaptığı için her negatif ayrı süreçtir).
"use strict";
const fs = require("fs"), path = require("path"), os = require("os");
const cp = require("child_process");
const IK = require("./INDEX-KAYNAK-1006.js");
const KOK = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
let gecti = 0, kaldi = 0;
const sina = (ad, sart, detay) => {
  if (sart) { gecti++; console.log("  ✓ " + ad); }
  else { kaldi++; console.log("  ✗ " + ad + (detay ? "  — " + detay : "")); }
};

console.log("① POZİTİF — gerçek index.html");
const ham = [...html.matchAll(/<script\b[^>]*\bsrc="(data\/[^"?]+\.js)/g)].map(m => m[1]);
const paket = ham.filter(s => /(^|\/)paket_\d+\.js$/.test(s));
const acik = IK.acikListe(html);
const isaret = paket.reduce((n, s) =>
  n + [...fs.readFileSync(path.join(KOK, s), "utf8").matchAll(/^\/\* ==== data\/[^ ]+\.js ==== \*\//gm)].length, 0);
console.log("  index " + ham.length + " src (" + paket.length + " paket) · açık " + acik.length);
sina("açık = paketsiz src + paket işaretleri (" + (ham.length - paket.length) + " + " + isaret + ")",
  acik.length === ham.length - paket.length + isaret, "açık " + acik.length);
sina("açık listede paket kalmadı", !acik.some(s => /paket_\d+\.js$/.test(s)));
sina("paket dışı src'ler aynen ve aynı sırada", JSON.stringify(ham.filter(s => !paket.includes(s))) ===
  JSON.stringify(acik.filter(s => ham.includes(s))));
const yer = IK.kaynaklar(html, /src="(data\/yerlesimler[^"?]*\.js)/);
const ctx = {}; ctx.window = ctx; require("vm").createContext(ctx);
yer.forEach(f => require("vm").runInContext(fs.readFileSync(path.join(KOK, f), "utf8"), ctx));
const Y = Object.keys(ctx).filter(k => /^YERLESIMLER(_|$)/.test(k) && Array.isArray(ctx[k]))
  .reduce((n, k) => n + ctx[k].length, 0);
const motor = IK.motorYerlesim();
sina("yerleşim süzgeci motor evrenini görüyor (" + Y + " = girdi.py " + motor + ")", Y === motor);

console.log("\n② YAPAY — geçici kök: paket_1 = {a.js, yerlesimler_x.js} + çıplak olaylar_y.js");
const T = fs.mkdtempSync(path.join(os.tmpdir(), "ik1006-"));
fs.mkdirSync(path.join(T, "data"));
const yaz = (r, s) => fs.writeFileSync(path.join(T, r), s);
yaz("data/a.js", "window.A=[1];\n");
yaz("data/yerlesimler_x.js", "window.YERLESIMLER_X=[{ad:'x'}];\n");
yaz("data/olaylar_y.js", "window.OLAYLAR_Y=[];\n");
yaz("data/paket_1.js", "/* ==== data/a.js ==== */\nwindow.A=[1];\n/* ==== data/yerlesimler_x.js ==== */\nwindow.YERLESIMLER_X=[{ad:'x'}];\n");
yaz("data/paket_2.js", "window.ISARETSIZ=1;\n");
const H = (...s) => s.map(x => '<script src="' + x + '?v=r1"></script>').join("\n");
yaz("index.html", H("data/paket_1.js", "data/olaylar_y.js"));
const h1 = fs.readFileSync(path.join(T, "index.html"), "utf8");
sina("+ yerleşim süzgeci paketin İÇİNDEKİ dosyayı buluyor",
  JSON.stringify(IK.kaynaklar(h1, /src="(data\/yerlesimler[^"?]*\.js)/, T)) === '["data/yerlesimler_x.js"]');
sina("+ çıplak src paketle yan yana çalışıyor (olaylar)",
  JSON.stringify(IK.kaynaklar(h1, /src="(data\/(?:olaylar|kronoloji)[^"?]*\.js)/, T)) === '["data/olaylar_y.js"]');
sina("+ `<script src=…\"><\\/script>` biçimli dar regex de tutuyor",
  IK.kaynaklar(h1, /<script src="(data\/[^"?]+)(\?[^"]*)?"><\/script>/, T).length === 3);

console.log("\n③ NEGATİF — her biri ÇIKIŞ 2 (ÖLÇÜLEMEDİ) vermeli, 'temiz' değil");
const kos = js => cp.spawnSync(process.execPath, ["-e", js], { cwd: KOK, encoding: "utf8" });
const IKY = JSON.stringify(path.join(__dirname, "INDEX-KAYNAK-1006.js"));
const TY = JSON.stringify(T);
const neg = (ad, govde) => {
  const r = kos("const IK=require(" + IKY + "),fs=require('fs'),path=require('path');" + govde);
  sina(ad + " → çıkış 2", r.status === 2, "çıkış " + r.status + " " + (r.stdout + r.stderr).slice(0, 120));
};
yaz("index2.html", H("data/paket_2.js"));
neg("− işaretsiz paket", "IK.acikListe(fs.readFileSync(path.join(" + TY + ",'index2.html'),'utf8')," + TY + ")");
yaz("index3.html", H("data/yok.js"));
neg("− diskte olmayan src", "IK.acikListe(fs.readFileSync(path.join(" + TY + ",'index3.html'),'utf8')," + TY + ")");
neg("− süzgeçten sıfır dosya", "IK.kaynaklar(fs.readFileSync(path.join(" + TY + ",'index.html'),'utf8'),/src=\"(data\\/kronoloji_zzz)/," + TY + ")");
neg("− yerleşim kapısı (10 kayıt, motor " + motor + ")", "IK.yerlesimKapisi(new Array(10).fill({}))");
fs.rmSync(T, { recursive: true, force: true });

console.log("\nSONUÇ: " + gecti + " geçti · " + kaldi + " kaldı");
process.exit(kaldi ? 1 : 0);

// SUDAN KALEMİ · ④ ÖN KOŞUL + ⑤ 2s KAPISI
//
// TDV `sudan` gövdesi (okundu, KESİLMEDEN):
//   "19 Ocak 1899'da Sudan'ın kontrolü fiilen İngiltere'nin eline geçmiş
//    oldu" · condominium
//   Ali Dinar "6 Kasım 1916'da öldürüldü" ⇒ "Dârfûr toprakları bir
//    eyalet halinde İngiliz Sudanı'na bağlandı"
//   "2 Eylül 1898 tarihinde Kerkeri savaşında" ⇒ Mehdî Devleti çöktü
//
// ⑤ 2s KAPISI: "bu gün zaten var" YETMEZ — HANGİ KOVADA olduğu ve
//   maddenin KONUSU İLGİLİ Mİ sorulur.
//   ÇEKİRDEK = data/olaylar*.js  ·  KUYRUK = data/kronoloji*.js
const fs = require("fs"), vm = require("vm");

// ÇEKİRDEK ve KUYRUK AYRI yüklenir — kova karışmasın
function yukle(desen) {
  const O = [];
  for (const f of fs.readdirSync("data")) {
    if (!desen.test(f)) continue;
    const d = { window: {} }; vm.createContext(d);
    try { vm.runInContext(fs.readFileSync("data/" + f, "utf8"), d); }
    catch (e) { continue; }
    for (const k of Object.keys(d.window)) {
      const A = d.window[k];
      if (Array.isArray(A)) for (const o of A)
        if (o && o.t) O.push({ ...o, _dosya: f });
    }
  }
  return O;
}
const CEK = yukle(/^olaylar.*\.js$/);
const KUY = yukle(/^kronoloji.*\.js$/);
console.log("ÇEKİRDEK madde " + CEK.length + " · KUYRUK madde " + KUY.length);

const gun = (s) => Math.round(Date.UTC(
  +s.slice(0, 4), +s.slice(5, 7) - 1, +(s.slice(8, 10) || 1)) / 864e5);

function kapi(hedef, etiket) {
  console.log("\n=== " + hedef + "   (" + etiket + ") ===");
  for (const [ad, kova] of [["ÇEKİRDEK", CEK], ["KUYRUK", KUY]]) {
    const yakin = kova
      .map(o => ({ o, d: Math.abs(gun(o.t) - gun(hedef)) }))
      .filter(x => x.d <= 30)
      .sort((a, b) => a.d - b.d);
    if (!yakin.length) {
      console.log("  " + ad.padEnd(9) + " 🔴 ±30 GÜNDE MADDE YOK");
      const en = kova.map(o => ({ o, d: Math.abs(gun(o.t) - gun(hedef)) }))
        .sort((a, b) => a.d - b.d)[0];
      if (en) console.log("             en yakın " + en.d + " gün: " +
        en.o.t + "  " + String(en.o.b).slice(0, 74));
      continue;
    }
    console.log("  " + ad.padEnd(9) + " 🟢 " + yakin.length + " madde:");
    for (const x of yakin.slice(0, 4))
      console.log("             " + String(x.d).padStart(3) + "g  " +
        x.o.t + "  " + String(x.o.b).slice(0, 74) +
        "   [" + x.o._dosya + "]");
  }
}

kapi("1899-01-19", "kondominyum — TDV: 19 Ocak 1899");
kapi("1916-05-23", "veride duran gün — KAYNAKSIZ");
kapi("1916-11-06", "TDV: Ali Dinar öldürüldü, Dârfûr bağlandı");
kapi("1898-09-02", "Kerkeri/Omdurman — Mehdî sonu");

// ④ ÖN KOŞUL — künye pencereleri
console.log("\n\n=== ④ ÖN KOŞUL — künye pencereleri ===");
const dev = { window: {} }; vm.createContext(dev);
vm.runInContext(fs.readFileSync("data/devletler.js", "utf8"), dev);
const D = dev.window.DEVLETLER || [];
for (const id of ["ingiliz-sudani", "darfur", "mehdi", "ingiltere", "funj"]) {
  const k = D.find(x => x.id === id);
  if (!k) { console.log("  🔴 " + id + " KÜNYE YOK"); continue; }
  console.log("  " + id.padEnd(16) + k.f + " → " + k.t +
    "   harita:" + (k.harita || "(yok)"));
  if (k.kaynak) console.log("      kaynak: " + String(k.kaynak).slice(0, 150));
}

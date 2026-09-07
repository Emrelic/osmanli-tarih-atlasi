// Bozuk yeri bul — vm.Script hatayi SATIR:SUTUN ile verir.
// (Ilk surum satir bazliydi ve YANLIS SONUC verdi: kayitlarin %66'si
//  COK SATIRLI, yani tek satir zaten gecerli bir nesne DEGIL. §11:
//  "kendi yazdigin ayristirici her zaman kotudur".)
const fs = require("fs"), vm = require("vm");
const yol = process.argv[2];
const metin = fs.readFileSync(yol, "utf8");
try {
  new vm.Script(metin, { filename: yol });
  console.log("AYRISTIRMA TEMIZ");
} catch (e) {
  const yig = e.stack.split("\n");
  console.log(yig.slice(0, 5).join("\n"));
  const m = /:(\d+)\s*$/.exec(yig[0]) || /:(\d+)$/.exec(yig[0]);
  // vm hata satirini stack'in ilk satirinda "yol:SATIR" olarak verir
  const sat = parseInt((yig[0].match(/:(\d+)$/) || [])[1], 10);
  if (sat) {
    const satirlar = metin.split("\n");
    const s = satirlar[sat - 1] || "";
    const ad = (/ad:\s*"([^"]*)"/.exec(s) || [])[1] || "(ad yok)";
    console.log("\nSATIR %d · ad=%s · uzunluk %d", sat, ad, s.length);
    // hatali sutunu isaret eden ^ satiri yigininda olabilir
    const isaret = yig.findIndex(x => /^\s*\^/.test(x));
    if (isaret > 0) {
      const sut = yig[isaret].indexOf("^");
      console.log("SUTUN ~%d: …%s…", sut, s.slice(Math.max(0, sut - 100), sut + 60));
    } else {
      console.log(s.slice(0, 200));
    }
  }
}

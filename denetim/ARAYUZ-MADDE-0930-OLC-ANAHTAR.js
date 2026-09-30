// ARAYUZ-MADDE-0930 — verilen yerleşimlerin iki gündeki sahiplik anahtarı (suzgec.js sahipAnahtari)
// Kullanım: node denetim/ARAYUZ-MADDE-0930-OLC-ANAHTAR.js <yerlesim.json> <gun1> <gun2> <ad-parçası>...
const fs = require("fs");
const [, , yJson, g1, g2, ...adlar] = process.argv;
global.window = {};
eval(fs.readFileSync("js/suzgec.js", "utf8"));
const SG = window.SUZGEC;
const Y = JSON.parse(fs.readFileSync(yJson, "utf8"));
for (const a of adlar) {
  const bul = Y.filter(y => String(y.ad).indexOf(a) === 0);
  if (!bul.length) console.log(a, "→ bulunamadı");
  bul.forEach(y => console.log(y.ad, "|", g1, SG.sahipAnahtari(y, g1) || "(sahipsiz)", "→", g2, SG.sahipAnahtari(y, g2) || "(sahipsiz)", "| kaynak:", y._dosya || y.dosya || "?"));
}

// PAKET-KRON2 — META-TARA çıktısını okunur hâle getirir: yalnız eşleşen CÜMLELER.
//   node denetim/ARAC-KRON2-META-GOSTER-0913.js ADAY.json [bas] [son]
const fs = require("fs");
const A = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const bas = +(process.argv[3] || 0), son = +(process.argv[4] || A.length);
const RE = /TDV|gün|ay\/gün|haritada|veri|atlas|bulunamad|ölçül|D[01]\d\d|§|yama|koşu|⚠️|🔴|🟢|🟡|📌|\.js|\.py|\.json|\.md|oturum|KITA|PAKET|koordinat|denetle|Değişmez|künye|yerleşim|petek|kırılma|renk|kaynak|slug|temsil|yıl kodu|-01-01/i;
A.slice(bas, son).forEach((o, i) => {
  const cumle = o.metin.split(/(?<=[.!?;])\s+|\n/).filter((c) => RE.test(c));
  console.log(`#${bas + i} ${o.dosya} ${o.t} [${o.alan}] {${o.desen.join(",")}} ${o.ic_not_var.length ? "IC:" + o.ic_not_var.join("/") : ""}`);
  console.log("   B: " + o.b.slice(0, 90));
  cumle.forEach((c) => console.log("   » " + c.slice(0, 400)));
});

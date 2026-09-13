// PAKET-KRON2 — META-TARA adaylarının TAM alan metnini basar (karar için).
//   node denetim/ARAC-KRON2-META-TAM-0913.js ADAY.json 0,6,11-15,...
const fs = require("fs");
const A = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const sec = new Set();
for (const p of (process.argv[3] || "").split(",")) {
  if (!p) continue;
  const [a, b] = p.split("-").map(Number);
  for (let i = a; i <= (isNaN(b) ? a : b); i++) sec.add(i);
}
[...sec].sort((x, y) => x - y).forEach((i) => {
  const o = A[i]; if (!o) return;
  console.log(`#${i} ${o.dosya} ${o.t} [${o.alan}] ${o.ic_not_var.join("/")}\n   B: ${o.b}\n   ${JSON.stringify(o.metin)}`);
});

// petek_govde.js -> NDJSON (satir basina bir yerlesim: {i, parts})
// Parca havuzunu cozer. Hicbir seyi DEGISTIRMEZ.
const fs = require('fs');
const KOK = 'C:/Users/emrem/OneDrive/Desktop/TAR\u0130H CO\u011ERAFYA S\u0130TES\u0130';
const CIK = process.argv[2];

global.window = {};
eval(fs.readFileSync(KOK + '/data/petek_govde.js', 'utf8'));
const G = window.PETEK_GOVDE, P = window.PETEK_GOVDE_PARCA;

const out = fs.createWriteStream(CIK);
let bos = 0, coklu = 0;
for (let i = 0; i < G.length; i++) {
  const idx = G[i] || [];
  if (!idx.length) { bos++; }
  if (idx.length > 1) { coklu++; }
  const parts = idx.map(j => P[j]);
  out.write(JSON.stringify({ i: i, parts: parts }) + '\n');
}
out.end();
out.on('finish', () => {
  console.error('yerlesim: ' + G.length + ' | parca havuzu: ' + P.length +
                ' | govdesiz: ' + bos + ' | cok parcali: ' + coklu);
});

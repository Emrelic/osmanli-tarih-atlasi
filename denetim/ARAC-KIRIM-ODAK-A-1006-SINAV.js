// KIRIM-ODAK-A-1006 sınavı — app.js'in GERÇEK metninden iki kesit koşar:
//  ① `devletiYay` (sahte devletler2/harita): gövde var → true + fitBounds · dönem yok → false · id yok → false
//  ② devlet sekmesi dalının geri düşüş bloğu (`var _dsGovde` … ): gövde yok + kutu var → kutuya uçar ·
//     gövde yok + kutu yok → SAYILIR + konsola basılır + panele yazılır · gövde var → geri düşüş ÇAĞRILMAZ
// Kullanım: node ARAC-KIRIM-ODAK-A-1006-SINAV.js <app.js>   · çıkış 0 = geçti
const fs = require("fs"), vm = require("vm");
const src = fs.readFileSync(process.argv[2], "utf8");
function fonk(ad) {
  const a = src.indexOf("function " + ad + "(");
  if (a < 0) return null;
  let i = src.indexOf("{", a), d = 0;
  for (; i < src.length; i++) { if (src[i] === "{") d++; else if (src[i] === "}" && --d === 0) return src.slice(a, i + 1); }
}
const S = [];
// ① devletiYay
{
  const fit = [];
  const ctx = { suanki: 50, aktifAralik: (f, t, x) => f <= x && x < t,
    harita: { fitBounds: (b) => fit.push(b) },
    document: { getElementById: () => null },
    devletler2: [{ id: "aa", dnm: [{ fi: 0, ti: 100, ft: { geometry: { coordinates: [[[[10, 20], [12, 22]]]] } } }] },
                 { id: "bb", dnm: [{ fi: 0, ti: 10, ft: { geometry: { coordinates: [[[[1, 1], [2, 2]]]] } } }] }] };
  vm.createContext(ctx); vm.runInContext(fonk("devletiYay"), ctx);
  const r1 = vm.runInContext("devletiYay('aa')", ctx), n1 = fit.length;
  const r2 = vm.runInContext("devletiYay('bb')", ctx);
  const r3 = vm.runInContext("devletiYay('yok')", ctx);
  S.push(["S1 gövde var → true ve fitBounds", r1 === true && n1 === 1]);
  S.push(["S2 o gün dönem yok → false, fitBounds YOK", r2 === false && fit.length === 1]);
  S.push(["S3 künye harita'da yok → false", r3 === false]);
}
// ② sekme dalı geri düşüş bloğu
{
  const a = src.indexOf("var _dsGovde = false;");
  const b0 = src.indexOf("if (!_dsGovde) {", a);
  let i = src.indexOf("{", b0), d = 0, b = -1;
  for (; i < src.length; i++) { if (src[i] === "{") d++; else if (src[i] === "}" && --d === 0) { b = i + 1; break; } }
  const blok = a >= 0 && b > 0 ? src.slice(a, b) : null;
  S.push(["S4 geri düşüş bloğu app.js'te var", !!blok]);
  function kos(govde, kutu) {
    const c = { fit: [], uyari: [], cagri: [], SEKME_ODAK_DUSEN: 0, obYerYokEl: { textContent: "" },
      d: { id: "kirim", ad: "Kırım Hanlığı" }, m: { t: "1534-01-01" }, gi: 99,
      devletiYay: () => govde, ucusAcik: () => true };
    c.maddeOdakKutusu = (o) => { c.cagri.push(o); return kutu ? { kutu: [30, 44, 36, 47] } : null; };
    c.harita = { fitBounds: (x) => c.fit.push(x) };
    c.console = { warn: (s) => c.uyari.push(s) };
    vm.createContext(c); vm.runInContext(blok, c); return c;
  }
  if (blok) {
    const t1 = kos(false, true);
    S.push(["S5 gövde yok + kutu var → kutuya uçar, sayaç 0",
            t1.fit.length === 1 && t1.SEKME_ODAK_DUSEN === 0 && t1.cagri[0].odak_kimlik[0] === "kirim" && t1.cagri[0].gi === 99]);
    const t2 = kos(false, false);
    S.push(["S6 gövde yok + kutu yok → sayılır, konsola ve panele yazılır",
            t2.fit.length === 0 && t2.SEKME_ODAK_DUSEN === 1 && /kirim 1534-01-01/.test(t2.uyari[0] || "") && /çizili değil/.test(t2.obYerYokEl.textContent)]);
    const t3 = kos(true, true);
    S.push(["S7 gövde var → geri düşüş ÇAĞRILMAZ", t3.cagri.length === 0 && t3.fit.length === 0]);
  }
}
let ok = 0; S.forEach(([a, v]) => { console.log((v ? "✓ " : "✗ ") + a); if (v) ok++; });
console.log(ok + "/" + S.length); process.exit(ok === S.length ? 0 : 1);

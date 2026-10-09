// GUN-SAYACI-TASARIM-1009 — ÖLÇÜM (üretim kodu DEĞİL): tasarımın referans algoritması
// (Hinnant days_from_civil, proleptik Gregoryen, astronomik yıl) bugünkü app.js gunIdx ile
// ve Python toordinal() ile birebir mi? Yamasız kolun üç kusuru gerçekten var mı?
// Kullanım: node denetim/ARAC-GUN-SAYACI-OLCUM-1009.js js/app.js
const fs = require("fs");
const app = fs.readFileSync(process.argv[2], "utf8");
eval(app.slice(app.indexOf("function gunIdx(s)"), app.indexOf("function idxYazi(i)")));   // GERÇEK gunIdx/idxTarih

// --- referans: tam sayı, Date kullanmaz, işaretli yıl (0 = MÖ 1) ---
function fdiv(a, b) { return Math.floor(a / b); }
function gunSay(y, m, d) {                       // 1970-01-01 = 0
  y -= m <= 2 ? 1 : 0;
  const era = fdiv(y, 400), yoe = y - era * 400;
  const doy = fdiv(153 * (m + (m > 2 ? -3 : 9)) + 2, 5) + d - 1;
  const doe = yoe * 365 + fdiv(yoe, 4) - fdiv(yoe, 100) + doy;
  return era * 146097 + doe - 719468;
}
function gunCoz(z) {
  z += 719468;
  const era = fdiv(z, 146097), doe = z - era * 146097;
  const yoe = fdiv(doe - fdiv(doe, 1460) + fdiv(doe, 36524) - fdiv(doe, 146096), 365);
  const doy = doe - (365 * yoe + fdiv(yoe, 4) - fdiv(yoe, 100));
  const mp = fdiv(5 * doy + 2, 153), d = doy - fdiv(153 * mp + 2, 5) + 1, m = mp + (mp < 10 ? 3 : -9);
  return { y: era * 400 + yoe + (m <= 2 ? 1 : 0), a: m, g: d };
}
const RX = /^([+-]?)(\d{1,6})(?:-(\d{2})(?:-(\d{2}))?)?$/;    // sözleşme taslağı
function ayrisstir(s) {
  const m = RX.exec(String(s));
  if (!m) throw new Error("tarih değil: " + s);
  return gunSay((m[1] === "-" ? -1 : 1) * +m[2], +(m[3] || 1), +(m[4] || 1));
}

// ① gerileme: 0100-01-01 … 9999-12-31 her gün — gunIdx(4 hane) == referans; gunCoz ters çevirir
let n = 0, fark = 0, ters = 0, ilk = null;
const bas = gunSay(100, 1, 1), son = gunSay(9999, 12, 31);
for (let z = bas; z <= son; z++) {
  const t = gunCoz(z);
  const s = String(t.y).padStart(4, "0") + "-" + String(t.a).padStart(2, "0") + "-" + String(t.g).padStart(2, "0");
  if (gunIdx(s) !== z) { fark++; if (!ilk) ilk = s; }
  if (ayrisstir(s) !== z) ters++;
  n++;
}
console.log(`① gerileme 0100-9999: ${n} gün · gunIdx ≠ referans ${fark}${ilk ? " (ilk " + ilk + ")" : ""} · ayrıştır∘çöz ≠ kimlik ${ters}`);
// ② 0001-0099: gunIdx'in Date.UTC tuzağı — referans doğru, gunIdx 1900+
let tuzak = 0;
for (let z = gunSay(1, 1, 1); z < gunSay(100, 1, 1); z++) {
  const t = gunCoz(z);
  const s = String(t.y).padStart(4, "0") + "-" + String(t.a).padStart(2, "0") + "-" + String(t.g).padStart(2, "0");
  if (gunIdx(s) !== z) tuzak++;
}
console.log(`② 0001-0099: gunIdx YANLIŞ gün ${tuzak} / ${gunSay(100,1,1) - gunSay(1,1,1)} (Date.UTC 0-99 → 1900+)`);
// ③ yamasız kol: negatif yıllar gunIdx'te
for (const s of ["-2999-01-01", "-0499-03-01", "0000-01-01"]) {
  const g = gunIdx(s), r = ayrisstir(s);
  console.log(`③ ${s}: gunIdx ${g} → y=${idxTarih(g).y} · referans ${r} → y=${gunCoz(r).y}`);
}
// ④ biçim denkliği (referans): 908 / 0908 / +0908 / 908-01 / 908 aynı gün
console.log("④ 908-03-01 · 0908-03-01 · +000908-03-01:", ayrisstir("908-03-01"), ayrisstir("0908-03-01"), ayrisstir("+000908-03-01"),
            "· '1453' ·'1453-05' ·'1453-05-01':", ayrisstir("1453"), ayrisstir("1453-05"), ayrisstir("1453-05-01"));
// ⑤ sıralama: sayıyla
const L = ["-2999-01-01", "-1199-06-15", "-0499-01-01", "0000-01-01", "330-05-11", "1281-01-01"];
console.log("⑤ sayıyla sıra:", JSON.stringify([...L].sort((a, b) => ayrisstir(a) - ayrisstir(b))), "· dizgiyle:", JSON.stringify([...L].sort()));
// ⑥ Jülyen-Gregoryen farkı (bilgi): proleptik Gregoryen seçilirse Jülyen kaynak tarihi şu kadar kayar
function julyenGun(y, m, d) { const a = fdiv(14 - m, 12), yy = y + 4800 - a, mm = m + 12 * a - 3;
  return d + fdiv(153 * mm + 2, 5) + 365 * yy + fdiv(yy, 4) - 32083 - 2440588; }
for (const y of [-2999, -1199, 1, 1000, 1281, 1582]) console.log(`⑥ yıl ${y}: Jülyen 1 Mart − Gregoryen 1 Mart = ${julyenGun(y,3,1) - gunSay(y,3,1)} gün`);

// KAYNAK DENETİMİ · İKİNCİ TUR — birinci turun MANŞETİ YANILTICIYDI.
//
// 🔴 İlk turum "`kaynak:` alanı VAR: 570 (%69)" dedi ve bu İYİ HABER gibi
//   okunuyor. Oysa 570'in 378'i literal olarak `bulunamadı` ile başlıyor —
//   yani bir ATIF değil, BEYAN EDİLMİŞ BİR YOKLUK. §4 onu bir SONUÇ sayar
//   ve uydurmaktan kat kat değerlidir, ama "kaynaklı" DEMEK DEĞİLDİR.
//   ⇒ Dolu bir alan, dolu olduğu için doğrulanmış sayılmaz.
//   (§11'in "doğru bilgi, ölü adres" dersinin kardeşi: orada alan dolu
//    ama adres ölüydü; burada alan dolu ama içerik bir YOKLUK BEYANI.)
//
// 🟢 VE `bulunamadı` İKİ CİNS: kimi TDV yokluğunu bildirip AKADEMİK
//   DAYANAĞI ADIYLA veriyor (§4'ün istediği biçim), kimi ÇIPLAK.
//   İkisi aynı kovaya konursa çare yanlış yere gider.
//
// kullanım: node denetim/ARAC-AMERIKA-KAYNAK-DENETIM2.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const BENIM = ["KUZEY-AMERIKA", "GUNEY-ORTA-AMERIKA", "OKYANUSYA"];

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.push([y, f]);
}
const benim = K.filter(([y]) => BENIM.includes(bolge(y)));

const kova = { atif: [], bul_dayanakli: [], bul_ciplak: [], notta: [], hic: [] };
for (const [y, f] of benim) {
  const s = String(y.kaynak || "").trim();
  const n = String(y.not || "").trim();
  const govde = s + " " + n;
  // 🔴 İLK DETEKTÖRÜM YAYIN ADI ARIYORDU ve YANILDI: `Naske & Slotnick,
  //   Alaska: A History` ile `Gulløv (ed.), Grønlands forhistorie` desene
  //   uymadığı için 199 KAMERIKA kaydı "çıplak" sayıldı. Ölçtüm —
  //   377'sinin 377'sinde `dayanak:` VAR.
  //   ⇒ Bir dayanağı TANIMAK için yayın adını TAHMİN ETME; projenin
  //     KENDİ SÖZLEŞMESİNİ ara. Burada sözleşme `dayanak:` öneki.
  //   (§11: "bir alan adı, kullanıldığı yerden değil TANIMLANDIĞI yerden
  //    okunur" — burada tanım bir alan değil bir YAZIM KALIBI, ama kural aynı.)
  const dayanakli = /dayanak\s*:/i.test(govde)
    || /HSAI|Handbook|Dictionary|University|Press|Bulletin|Atlas|Encyclop|Survey|Council|Library|Archives|Museum|Journal/.test(govde);
  if (!s && !n) kova.hic.push([y, f]);
  else if (!s) kova.notta.push([y, f]);
  else if (/^bulunamad/i.test(s)) (dayanakli ? kova.bul_dayanakli : kova.bul_ciplak).push([y, f]);
  else kova.atif.push([y, f]);
}
const T = benim.length;
const yaz = (im, ad, a) => console.log("  " + im + " " + String(a.length).padStart(4)
  + "  (%" + String(Math.round(100 * a.length / T)).padStart(2) + ")  " + ad);

console.log("kutum: " + T + " nokta\n=== DAYANAK KOVALARI ===");
yaz("🟢", "ATIF — `kaynak:` bir kaynağı ADIYLA veriyor", kova.atif);
yaz("🟢", "`bulunamadı` + AKADEMİK DAYANAK adıyla yazılı (§4 biçimi)", kova.bul_dayanakli);
yaz("🟡", "`bulunamadı` ÇIPLAK — TDV yok deniyor, dayanak ADSIZ", kova.bul_ciplak);
yaz("🟡", "`kaynak:` YOK ama `not:` VAR — dayanak METİNDE olabilir", kova.notta);
yaz("🔴", "HİÇBİR BEYAN YOK", kova.hic);
console.log("  " + "-".repeat(62));
console.log("  🟢 DAYANAĞI ADIYLA YAZILI toplam: "
  + (kova.atif.length + kova.bul_dayanakli.length)
  + "  (%" + Math.round(100 * (kova.atif.length + kova.bul_dayanakli.length) / T) + ")");
console.log("  🔴 DAYANAKSIZ ya da ADSIZ toplam : "
  + (kova.bul_ciplak.length + kova.notta.length + kova.hic.length)
  + "  (%" + Math.round(100 * (kova.bul_ciplak.length + kova.notta.length + kova.hic.length) / T) + ")");

for (const [ad, a] of [["`bulunamadı` ÇIPLAK", kova.bul_ciplak], ["HİÇBİR BEYAN YOK", kova.hic]]) {
  if (!a.length) continue;
  console.log("\n=== " + ad + " — DOSYA kırılımı (" + a.length + ") ===");
  const d = {};
  for (const [, f] of a) d[f] = (d[f] || 0) + 1;
  for (const [f, n] of Object.entries(d).sort((x, y) => y[1] - x[1]))
    console.log("   " + String(n).padStart(4) + "  " + f);
  console.log("   örnek: " + a.slice(0, 6).map(x => x[0].ad).join(" · "));
}

console.log("\n=== `not:` KOVASI GERÇEKTEN DAYANAK TAŞIYOR MU (örneklem) ===");
for (const [y, f] of kova.notta.slice(0, 5))
  console.log("   " + y.ad.padEnd(26) + "[" + f + "]\n      not: "
    + String(y.not).slice(0, 130));

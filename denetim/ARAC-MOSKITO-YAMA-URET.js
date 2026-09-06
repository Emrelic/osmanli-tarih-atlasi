// 🔴 MOSKİTO DÜZELTMESİ — VE KUSUR BENİM.
//
// `Río Tinto (Black River, Moskito kıyısı)` benim KAMERIKA partimin kaydı ve
// `ingiltere 1732-01-01 → 1923-10-29` taşıyor. Ölçüldü: İngilizler oradan
// 1786 Londra Konvansiyonu'yla ÇEKİLDİ. ⇒ ~137 yıllık yanlış kimlik.
//
// KAYNAK — hakemli, künyesi tam, ALINTI GÖVDEDEN:
//   Frank Griffith Dawson, "The Evacuation of the Mosquito Shore and the
//   English Who Stayed Behind, 1786-1800", The Americas 55/1 (Temmuz 1998),
//   s. 63-89:
//     «On 14 July 1786, representatives of the Kings of Spain and England
//      signed the Convention of London by which His Britannick Majesty
//      undertook to evacuate all British subjects from the northern coast
//      of Central America.»
//   İkinci bağımsız kaynak (başlık düzeyinde): Hispanic American Historical
//   Review 63/4, "William Pitt's Settlement at Black River on the Mosquito
//   Shore: A Challenge to Spain in Central America, **1732-87**" — yerleşimin
//   ömrünü başlığında veriyor ve atlasın `kur:1732`siyle birebir uyuşuyor.
//
// 🔴 GÜN SEÇİMİ AÇIKÇA BEYAN EDİLİYOR: 1786-07-14 KONVANSİYON günü; fiilî
//   tahliye 1787'ye sarktı. Atlas hukukî devir günlerini kullanıyor (aynı
//   dosyada 1763-02-10 Paris · 1667-07-31 Breda) ⇒ konvansiyon günü seçildi
//   ve SEÇİM OLDUĞU yazıldı.
//
// 🔴 ARDIL KİMLİK ICAT EDİLMEDİ, KOMŞUDAN ALINDI: en yakın komşu Trujillo
//   (118 km, aynı kıyı) `yeni-ispanya → 1821-09-27 · meksika → 1923-10-29`
//   taşıyor; Omoa (342 km) aynı. Atlas Honduras'ı bu ikisiyle boyuyor.
//
// kullanım: node denetim/ARAC-MOSKITO-YAMA-URET.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const AD = "Río Tinto (Black River, Moskito kıyısı)";
const KOMSU = "Trujillo (Honduras)";
const KESIM = "1786-07-14";

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = new Map();
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (y && y.ad) K.set(y.ad, [y, f]);
}
const [y, dosya] = K.get(AD) || [];
const [kom] = K.get(KOMSU) || [];
if (!y || !kom) { console.log("🔴 kayıt/komşu bulunamadı"); process.exit(1); }

// ardıl zinciri KOMŞUDAN türet: kesimden sonraki dönemleri al
const ardil = [];
for (const p of kom.s) {
  if (p.t <= KESIM) continue;
  ardil.push({ f: ardil.length === 0 ? KESIM : p.f, t: p.t, d: p.d });
}
const yeni = [{ f: y.s[0].f, t: KESIM, d: y.s[0].d }].concat(ardil);

// ---- SINAVLAR ----
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const OMUR = {};
for (const d of Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k])) if (d && d.id) OMUR[d.id] = [d.f, d.t];
const g = s => s.split("-").map(Number);
const kE = (a, b) => { const [p, q] = [g(a), g(b)];
  for (let i = 0; i < 3; i++) if (p[i] !== q[i]) return p[i] < q[i]; return true; };
const sorun = [];
if (y.s.length !== 1) sorun.push("beklenen tek dönem, gerçek " + y.s.length);
if (yeni.some(p => p.f >= p.t)) sorun.push("ters/sıfır dönem");
if (yeni.slice(1).some((p, i) => yeni[i].t !== p.f)) sorun.push("süreksiz");
if (yeni[0].f !== y.s[0].f) sorun.push("zincir başı kaydı");
if (yeni[yeni.length - 1].t !== y.s[y.s.length - 1].t) sorun.push("zincir sonu kaydı");
for (const p of yeni) {
  if (!OMUR[p.d]) { sorun.push("künyesiz: " + p.d); continue; }
  if (!(kE(OMUR[p.d][0], p.f) && kE(p.t, OMUR[p.d][1])))
    sorun.push("künye DIŞI: " + p.d + " " + p.f + ".." + p.t
      + " (künye " + OMUR[p.d].join("..") + ")");
}
if (sorun.length) { console.log("🔴 " + sorun.join(" · ")); process.exit(1); }

console.log("🟢 " + AD + "   [" + dosya + "]");
console.log("   ESKİ: " + y.s.map(p => p.d + " " + p.f + "→" + p.t).join(" · "));
console.log("   YENİ:");
for (const p of yeni) console.log("      " + p.f + " → " + p.t + "  " + p.d);
console.log("   ⇒ yanlış kimlik penceresi kapanıyor: " + KESIM + " → 1923-10-29 ("
  + Math.round((Date.parse("1923-10-29") - Date.parse(KESIM)) / 864e5 / 365.2425)
  + " yıl)");

const L = [];
L.push("// " + "=".repeat(69));
L.push("// MOSKİTO KIYISI — `ingiltere` 1786'da BİTİYOR (KİMLİK DÜZELTMESİ)");
L.push("// Oturum: AMERİKA-OKYANUSYA · koordinatör 1.MURAT HÜDAVENDİGAR");
L.push("//");
L.push("// 🔴 KUSUR BENİM: bu kayıt DUNYA-KAMERIKA-0903 partisinde yazıldı ve");
L.push("//   `ingiltere 1732-01-01 → 1923-10-29` taşıyor. İngilizler Moskito");
L.push("//   Sahili'nden 1786 Londra Konvansiyonu'yla ÇEKİLDİ ⇒ 137 yıl");
L.push("//   yanlış kimlik. Yerleşimin KURULUŞU (1732) doğru, SONU yanlıştı.");
L.push("//");
L.push("// KAYNAK — hakemli, künyesi tam, alıntı GÖVDEDEN alındı:");
L.push("//   Frank Griffith Dawson, \"The Evacuation of the Mosquito Shore and");
L.push("//   the English Who Stayed Behind, 1786-1800\", The Americas 55/1");
L.push("//   (Temmuz 1998), s. 63-89:");
L.push("//     «On 14 July 1786, representatives of the Kings of Spain and");
L.push("//      England signed the Convention of London by which His");
L.push("//      Britannick Majesty undertook to evacuate all British subjects");
L.push("//      from the northern coast of Central America.»");
L.push("//   İKİNCİ BAĞIMSIZ (başlık düzeyinde): Hispanic American Historical");
L.push("//   Review 63/4, \"William Pitt's Settlement at Black River on the");
L.push("//   Mosquito Shore ... 1732-87\" — yerleşimin ömrünü başlığında veriyor");
L.push("//   ve atlasın `kur:1732`siyle BİREBİR uyuşuyor.");
L.push("//   ⚪ Dawson makalesinin TAM METNİ okunmadı (Cambridge Core, yalnız");
L.push("//     özet erişilebildi). Alıntı ÖZETTEN, ve künye tam.");
L.push("//");
L.push("// 🔴 GÜN BİR SEÇİMDİR, BİR ÖLÇÜM DEĞİL: 1786-07-14 KONVANSİYON günü;");
L.push("//   fiilî tahliye 1787'ye sarktı (makalenin başlığı 1786-1800 diyor).");
L.push("//   Atlas hukukî devir günlerini kullanıyor — aynı dosyada");
L.push("//   1763-02-10 (Paris) ve 1667-07-31 (Breda) — o yüzden konvansiyon");
L.push("//   günü seçildi. Seçim olduğu BURADA YAZILI.");
L.push("//");
L.push("// 🔴 ARDIL ICAT EDİLMEDİ, KOMŞUDAN ALINDI: Trujillo (118 km, aynı kıyı)");
L.push("//   `yeni-ispanya → 1821-09-27 · meksika → 1923-10-29`; Omoa (342 km)");
L.push("//   aynı. Atlas Honduras'ı bu ikisiyle boyuyor.");
L.push("//");
L.push("// ⚠️ AYRI KALEM — `Belize Town` DOKUNULMADI: o da `ingiltere 1716→1923`");
L.push("//   taşıyor ama 1923'te Belize GERÇEKTEN İngiliz'di (British Honduras).");
L.push("//   Erken dönemin hukukî durumu (İspanyol egemenliği + İngiliz kesim");
L.push("//   hakkı) ayrıca ölçülmeli; bu yama onu KAPSAMIYOR.");
L.push("// " + "=".repeat(69));
L.push("");
L.push("window.YER_YAMA_MOSKITO = [");
L.push("");
L.push("// eski: " + y.s.map(p => p.d + " " + p.f + "→" + p.t).join(" · "));
L.push("{ ad:" + JSON.stringify(AD) + ",");
L.push("  s:[" + yeni.map(p => "{f:" + JSON.stringify(p.f) + ",t:" + JSON.stringify(p.t)
  + ",d:" + JSON.stringify(p.d) + "}").join(",\n     ") + "] },");
L.push("");
L.push("];");
L.push("");
fs.writeFileSync("denetim/yer_yama_moskito.js", L.join("\n"), "utf8");
console.log("\n-> denetim/yer_yama_moskito.js");

// YAMA ÜRETİCİ — `ingiliz-kuzey-amerika` 1867 kesimi.
//
// 🔴 ELLE YAZMIYORUM (YONTEM §⑥). Silistre elle yazıldı ve yama
//   6 dönemin 5'ini SİLİYORDU — uygulayıcı `s:` dizisinin TAMAMINI
//   değiştiriyor, yani eksik yazılan her dönem KAYBOLUR.
//   Bu üretici zinciri CANLI VERİDEN okur, yalnız son dönemi BÖLER,
//   ve kaybolan/eklenen dönem sayısını SINAR.
//
// TEŞHİS (KAMERIKA turumda konmuştu, KUNYE-KAMERIKA-0903-DUZELTME.json):
//   `kanada` künyesi f:1867-07-01 ile indi ama `ingiliz-kuzey-amerika`
//   t: hâlâ 1923-10-29 ⇒ 1867-1923 arası İKİ künye aynı toprağı boyuyor.
//   Benim 377 KAMERIKA noktam doğru davranıyor (1867'de kanada'ya geçer);
//   bu üçü ESKİ dosyadan (yerlesimler_amerika.js) ve kesilmemiş.
//
// kullanım:  node denetim/ARAC-AMERIKA-1923-YAMA-URET.js
const fs = require("fs");
const path = require("path");
process.chdir(path.dirname(__dirname));

const KESIM = "1867-07-01";          // British North America Act
const ESKI = "ingiliz-kuzey-amerika";
const YENI = "kanada";
const HEDEF = ["Quebec", "Montreal (Ville-Marie)", "Port Royal (Acadia)"];

global.window = {};
eval(fs.readFileSync("data/yerlesimler_amerika.js", "utf8"));
const Y = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]);

const cikti = [];
let hata = 0;
for (const ad of HEDEF) {
  const y = Y.find(x => x.ad === ad);
  if (!y) { console.log("🔴 BULUNAMADI: " + ad); hata++; continue; }
  const eski = y.s;
  const yeni = [];
  for (const p of eski) {
    if (p.d === ESKI && p.f < KESIM && KESIM < p.t) {
      yeni.push({ f: p.f, t: KESIM, d: ESKI });
      yeni.push({ f: KESIM, t: p.t, d: YENI });
    } else yeni.push({ f: p.f, t: p.t, d: p.d });
  }
  // ---- SINAV: hiçbir dönem KAYBOLMADI mı, zincir SÜREKLİ mi ----
  const kayip = eski.filter(a =>
    !yeni.some(b => b.d === a.d && b.f === a.f)).map(a => a.d + " " + a.f);
  const sureksiz = yeni.slice(1).filter((p, i) => yeni[i].t !== p.f);
  const ters = yeni.filter(p => p.f >= p.t);
  if (kayip.length || sureksiz.length || ters.length) {
    console.log("🔴 " + ad + " — kayıp:" + kayip.length
      + " süreksiz:" + sureksiz.length + " ters:" + ters.length, kayip);
    hata++;
  }
  if (eski[0].f !== yeni[0].f || eski[eski.length - 1].t !== yeni[yeni.length - 1].t) {
    console.log("🔴 " + ad + " — zincirin UÇLARI değişti"); hata++;
  }
  cikti.push({ ad, eski, yeni });
  console.log("🟢 " + ad.padEnd(26) + eski.length + " → " + yeni.length + " dönem");
}

if (hata) { console.log("\n🔴 " + hata + " kusur — YAMA YAZILMADI"); process.exit(1); }

const L = [];
L.push("// " + "=".repeat(69));
L.push("// AMERİKA 1923 — `ingiliz-kuzey-amerika` 1867 KESİMİ");
L.push("// Oturum: AMERİKA-OKYANUSYA · koordinatör 1.MURAT HÜDAVENDİGAR");
L.push("//");
L.push("// 🔴🔴 BU DOSYA TEK BAŞINA UYGULANMAZ — İKİSİ BİRLİKTE İNER:");
L.push("//     ① denetim/yer_yama_amerika_1923.js          (bu dosya · 3 nokta)");
L.push("//     ② denetim/ONERI-KUNYE-AMERIKA-1923.json     (künye `t:` kesimi)");
L.push("//   Yalnız NOKTA inerse : `4c` temiz kalır ama künye 56 YIL FAZLA durur.");
L.push("//   Yalnız KÜNYE inerse : ÜÇ HAYALET doğar (künye 1867'de biter,");
L.push("//                          noktalar 1923'e kadar onu kullanmaya devam eder).");
L.push("//");
L.push("// TEŞHİS: `kanada` künyesi f:1867-07-01 ile indi; `ingiliz-kuzey-amerika`");
L.push("// t: hâlâ 1923-10-29 ⇒ 1867-1923 arası aynı toprak İKİ kimlikle boyanıyor");
L.push("// (`kanada` 185 nokta · `ingiliz-kuzey-amerika` 3 nokta — ölçüldü).");
L.push("//");
L.push("// 🟢 DEĞİŞMEZ 2 BORCU YOK — ve gerekçe İKİ AYRI ÖLÇÜM:");
L.push("//    ① GÜN ZATEN KIRILIYOR: 1867-07-01'de canlı veride 254 dönem ucu");
L.push("//       kırılıyor. Yamanın eklediği 3 uç YENİ BİR GÜN AÇMIYOR.");
L.push("//    ② KAPSAM DIŞI: `2s` küresi `d:`/`v:` taşıyan 929 nokta; üçünün");
L.push("//       en yakın Osmanlı noktasına uzaklığı 5406-6000 km (eşik 2014).");
L.push("//    🔴 İLK YAZIMDA \"bu gün çekirdekte ZATEN maddeli\" DEMİŞTİM —");
L.push("//       ÖLÇTÜM, YANLIŞ: ±30 gündeki iki madde de Osmanlı (Abdülaziz'in");
L.push("//       seyahati · hidiv unvanı); Kanada maddesi çekirdekte YOK.");
L.push("//       Hafızadan gelen bir cümleyi ölçmeden başlığa yazmıştım.");
L.push("//       Ölçüm: denetim/ARAC-AMERIKA-1923-KAPSAM.js");
L.push("// 🟢 BAŞKA BÖLGE ETKİLENMİYOR — ve bu KÜRESEL ölçüldü, 1923'e bakarak DEĞİL:");
L.push("//    künyeyi kullanan 130 dönemin yalnız BU ÜÇÜ kesim gününü aşıyor;");
L.push("//    kalan 127 zaten 1867-07-01'de bitiyor. (1923 kesitine bakan bir");
L.push("//    ölçüm, 1900'de biten bir hayalet dönemi GÖREMEZDİ.)");
L.push("//    Ölçüm: denetim/ARAC-AMERIKA-1923-KUNYE-SINA.js");
L.push("// 🔴 GÜN KAYNAKLI: 1867-07-01 British North America Act'in yürürlük günü —");
L.push("//    künyenin `f:`inden DEVRALINMADI, belgenin kendi günü.");
L.push("//");
L.push("// ÜRETİM: denetim/ARAC-AMERIKA-1923-YAMA-URET.js — CANLI veriden,");
L.push("// elle YAZILMADI. Üretici dönem kaybını · süreksizliği · ters dönemi sınar.");
L.push("// " + "=".repeat(69));
L.push("");
L.push("window.YER_YAMA_AMERIKA_1923 = [");
for (const c of cikti) {
  L.push("");
  L.push("// ── " + c.ad + " ──  (kaynak kayıt: data/yerlesimler_amerika.js)");
  L.push("// eski: " + c.eski.map(p => p.d + " " + p.f + "→" + p.t).join(" · "));
  L.push("{ ad:" + JSON.stringify(c.ad) + ",");
  L.push("  s:[" + c.yeni.map(p =>
    "{f:" + JSON.stringify(p.f) + ",t:" + JSON.stringify(p.t)
    + ",d:" + JSON.stringify(p.d) + "}").join(",\n     ") + "] },");
}
L.push("");
L.push("];");
L.push("");
fs.writeFileSync("denetim/yer_yama_amerika_1923.js", L.join("\n"), "utf8");
console.log("\n-> denetim/yer_yama_amerika_1923.js (" + cikti.length + " nokta)");

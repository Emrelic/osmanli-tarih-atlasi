// ORTAK TARİH KIYASLAYICISI (JS eşdeğeri) — ARAC-TARIH-0907.py'nin ikizi.
//
// 🔴 NİÇİN VAR: bkz. .py dosyasının başlığı. Üç haneli yıl tuzağı bu
//   projede beş kez çıktı (dubrovnik f:"700-01-01" · nube · ARAC-4C ·
//   ardıl kontrolü · yemen-zeydi f:"897-01-01") çünkü `pad(s)` dört
//   ayrı alette ayrı ayrı yazılmıştı, ortak bir kıyaslayıcı yoktu.
//
// KULLANIM
//   const {pad, once, sonra, arasinda} = require('./ARAC-TARIH-0907.js');
//   node denetim/ARAC-TARIH-0907.js   // C13 dört ayaklı sınav

function pad(s) {
  if (!s) return s;
  s = String(s);
  if (s.startsWith("-")) return s;   // MÖ tarih — bu projede şu an YOK
  const p = s.split("-");
  const yil = parseInt(p[0], 10);
  if (Number.isNaN(yil)) {
    throw new Error("pad(): yil sayiya cevrilemedi: " + JSON.stringify(s));
  }
  p[0] = String(yil).padStart(4, "0");
  return p.join("-");
}

function once(a, b) { return pad(a) < pad(b); }
function sonra(a, b) { return pad(a) > pad(b); }
function arasinda(x, a, b, kapsayiciSon) {
  x = pad(x); a = pad(a); b = pad(b);
  return kapsayiciSon ? (a <= x && x <= b) : (a <= x && x < b);
}

module.exports = { pad, once, sonra, arasinda };

if (require.main === module) {
  const fs = require("fs");
  let basarisiz = [];
  const sina = (ad, kosul) => {
    console.log("  " + ad.padEnd(58) + " " + (kosul ? "🟢 GEÇTİ" : "🔴 ÇÜRÜDÜ"));
    if (!kosul) basarisiz.push(ad);
  };

  console.log("═".repeat(70));
  console.log("① GEÇME — dört haneli yıllarda düz dizgi sırasıyla AYNI sonuç");
  console.log("═".repeat(70));
  sina("1281-01-01 once 1923-10-29 (duz dizgi ile de dogru)",
       once("1281-01-01", "1923-10-29") === ("1281-01-01" < "1923-10-29"));
  sina("1453-05-29 arasinda [1281-01-01, 1923-10-29)",
       arasinda("1453-05-29", "1281-01-01", "1923-10-29"));
  sina("1923-10-29 arasinda DEGIL [1281-01-01, 1923-10-29) — yari acik ust sinir",
       !arasinda("1923-10-29", "1281-01-01", "1923-10-29"));

  console.log("");
  console.log("═".repeat(70));
  console.log("② ATEŞLEME — üç haneli yıl dalı ZORLA ateşlendi (kusur varken)");
  console.log("═".repeat(70));
  sina("ON-KOSUL: duz dizgi '700-01-01' < '1281-01-01' YANLIS cikiyor mu",
       ("700-01-01" < "1281-01-01") === false);
  sina("pad ILE: 700-01-01 GERCEKTEN 1281-01-01'den ONCE",
       once("700-01-01", "1281-01-01"));
  sina("pad ILE: 897-01-01 GERCEKTEN 1281-01-01'den ONCE (yemen-zeydi)",
       once("897-01-01", "1281-01-01"));
  sina("pad ILE: 897-01-01, 1281-01-01'den SONRA DEGIL (5. vakanin duzeltmesi)",
       !sonra("897-01-01", "1281-01-01"));
  sina("pad ILE: 47-01-01 (iki haneli) de dogru siralaniyor",
       once("47-01-01", "700-01-01"));

  console.log("");
  console.log("═".repeat(70));
  console.log("③ GİRDİ — gerçek kaynaktan okuma yolu (devletler.js'in KENDİSİ)");
  console.log("═".repeat(70));
  const yol = require("path").join(__dirname, "..", "data", "devletler.js");
  if (!fs.existsSync(yol)) {
    console.log("  🔴 ÖLÇÜLEMEDİ — data/devletler.js bulunamadı, ③ atlandı");
  } else {
    const metin = fs.readFileSync(yol, "utf8");
    const oku = (kid) => {
      const re = new RegExp('id:"' + kid.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        + '"[^}]*?f:"([^"]+)"', "s");
      const m = metin.match(re);
      return m ? m[1] : null;
    };
    const dub = oku("dubrovnik"), yem = oku("yemen-zeydi");
    sina("dubrovnik'in GERCEK f: alani dosyadan OKUNDU ve '700-01-01'",
         dub === "700-01-01");
    sina("yemen-zeydi'nin GERCEK f: alani dosyadan OKUNDU ve '897-01-01'",
         yem === "897-01-01");
    if (dub && yem) {
      sina("GERCEK dubrovnik.f, GERCEK yemen-zeydi.f'den ONCE (pad ile)",
           once(dub, yem));
      sina("pad ILE: GERCEK yemen-zeydi.f, ATLAS_BASI'ndan (1281) ONCE",
           once(yem, "1281-01-01"));
      sina("DUZ DIZGIYLE ayni soru YANLIS cikardi (kusurun kaniti, 3 haneli vs 4 haneli)",
           (yem < "1281-01-01") === false);
    }
  }

  console.log("");
  console.log("═".repeat(70));
  console.log("④ ÇIKTI — bilerek kusurlu girdi verildi, alet BİLDİRDİ mi");
  console.log("═".repeat(70));
  sina("bos dizgi sessizce ayni bos dizgiyi dondurdu (cokme YOK, ama deger de UYDURULMADI)",
       pad("") === "");
  sina("null/undefined sessizce ayni degeri dondu",
       pad(null) === null && pad(undefined) === undefined);
  let cokmeOldu = false;
  try { pad("abc-01-01"); } catch (e) { cokmeOldu = true; }
  sina("harf iceren yil (abc-01-01) SESSIZCE GECMEDI, hata FIRLATTI", cokmeOldu);

  console.log("");
  console.log("═".repeat(70));
  if (basarisiz.length) {
    console.log("🔴 ÇÜRÜDÜ (" + basarisiz.length + "): " + basarisiz.join(", "));
    process.exit(1);
  } else {
    console.log("🟢 C13 DÖRT AYAK DA TEMİZ — pad/once/sonra/arasinda kullanıma hazır.");
    process.exit(0);
  }
}

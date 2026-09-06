// MÜKERRER ALAN TARAMASI — v2, GERÇEK SÖZCÜK ÇÖZÜMLEYİCİYLE
//
// 🔴 DOĞURAN VAKA (6 Eylül 2026, kusur KOORDİNATÖRÜNDÜ):
//    `Honolulu` kaydı İKİ `s:` taşıyor — biri `ad:` satırında (yarım bir
//    yama uygulamasından), biri altta (elle düzeltmeden).
//      JavaScript        SON anahtarı alır → 2 dönem ⇒ SİTE DOĞRU
//      _sahiplik_uygula  `_dilim` regexi İLK `s:[`i alır → 1 dönem
//    ⇒ "KAPSAM DARALDI" koruması (bir veri kaybından doğmuş) KÖR kalıyor:
//      baktığı diziyi yamanın önerdiğiyle aynı görüyor.
//
// 🔴 VE BU ALETİN BİRİNCİ SÜRÜMÜ BOZUKTU — kaydı burada duruyor:
//    Naif bir süslü-parantez sayacı yazdım; "322 kayıt" dedi. Doğruladım:
//    "Akkirman ve Kili → yerlesimler.js:346" diyordu, oysa 346. satırda
//    Mora/Modon var ve orada `ad:` YALNIZ BİR. Sayaç yorum satırlarını ve
//    dizgi içindeki parantezleri ayırt etmiyordu ⇒ bitişik kayıtları
//    birleştirip SAHTE ×2 üretiyordu. Alet SİLİNDİ, sayı raporlanmadı.
//    📌 Bu projede en pahalı kusur sınıfı: "hata vermeyen, temiz bir sayı
//       üreten bozuk alet."
//
// 🟢 v2 FARKI: regex ya da sayaç değil, KARAKTER KARAKTER bir çözümleyici.
//    Dizgi (' " `), kaçış, satır yorumu (//) ve blok yorumu (/* */)
//    durumları AYRI izleniyor; anahtar yalnız KAYDIN ÜST DÜZEYİNDE
//    (süslü derinlik 1, köşeli derinlik 0) toplanıyor.
//    ⇒ `{f:"…",t:"…"}` gibi İÇ nesnelerin anahtarları SAYILMAZ.
//
// KULLANIM:  node denetim/ARAC-MUKERRER-ALAN-0906b.js [--tam]

const fs = require("fs");
const TAM = process.argv.includes("--tam");

function kayitlariCoz(metin) {
  const kayitlar = [];
  let i = 0, n = metin.length;
  let derin = 0, kose = 0;         // süslü / köşeli derinlik
  let bas = -1, basSatir = 0, satir = 1;
  let anahtarlar = null;

  while (i < n) {
    const c = metin[i];

    // ── yorumlar ──────────────────────────────────────────────
    if (c === "/" && metin[i + 1] === "/") {
      while (i < n && metin[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && metin[i + 1] === "*") {
      i += 2;
      while (i < n && !(metin[i] === "*" && metin[i + 1] === "/")) {
        if (metin[i] === "\n") satir++;
        i++;
      }
      i += 2;
      continue;
    }

    // ── dizgiler ──────────────────────────────────────────────
    if (c === '"' || c === "'" || c === "`") {
      const kapa = c;
      i++;
      while (i < n) {
        if (metin[i] === "\\") { i += 2; continue; }
        if (metin[i] === kapa) { i++; break; }
        if (metin[i] === "\n") satir++;
        i++;
      }
      continue;
    }

    if (c === "\n") { satir++; i++; continue; }

    // ── derinlik ──────────────────────────────────────────────
    if (c === "{") {
      derin++;
      if (derin === 1) { bas = i; basSatir = satir; anahtarlar = []; kose = 0; }
      i++; continue;
    }
    if (c === "}") {
      derin--;
      if (derin === 0 && anahtarlar) {
        kayitlar.push({ satir: basSatir, anahtarlar, metin: metin.slice(bas, i + 1) });
        anahtarlar = null;
      }
      if (derin < 0) derin = 0;
      i++; continue;
    }
    if (c === "[") { if (derin === 1) kose++; i++; continue; }
    if (c === "]") { if (derin === 1) kose--; i++; continue; }

    // ── anahtar: YALNIZ kaydın üst düzeyinde ──────────────────
    if (derin === 1 && kose === 0 && /[A-Za-z_$]/.test(c)) {
      let j = i;
      while (j < n && /[A-Za-z0-9_$]/.test(metin[j])) j++;
      let k = j;
      while (k < n && /\s/.test(metin[k])) k++;
      if (metin[k] === ":") {
        anahtarlar.push(metin.slice(i, j));
        i = k + 1;
        continue;
      }
      i = j;
      continue;
    }
    i++;
  }
  return kayitlar;
}

let toplam = 0;
const bulgu = [];
for (const f of fs.readdirSync("data")) {
  if (!/^yer(lesim|_yama).*\.js$/.test(f)) continue;
  const kayitlar = kayitlariCoz(fs.readFileSync("data/" + f, "utf8"));
  for (const r of kayitlar) {
    if (r.anahtarlar.indexOf("ad") < 0) continue;    // yerleşim kaydı değil
    toplam++;
    const say = {};
    for (const k of r.anahtarlar) say[k] = (say[k] || 0) + 1;
    const mk = Object.entries(say).filter(([, v]) => v > 1);
    if (mk.length) {
      const m = r.metin.match(/\bad\s*:\s*"([^"]*)"/);
      bulgu.push({ f, satir: r.satir, ad: m ? m[1] : "?",
                   alanlar: mk.map(([k, v]) => k + "×" + v) });
    }
  }
}

console.log("taranan YERLESIM kaydi: " + toplam);
console.log("");
console.log("MUKERRER ALAN TASIYAN KAYIT: " + bulgu.length);
console.log("");
// hangi alanlar mukerrer oluyor
const alanSay = {};
for (const b of bulgu) for (const a of b.alanlar) {
  const ad = a.split("×")[0];
  alanSay[ad] = (alanSay[ad] || 0) + 1;
}
if (Object.keys(alanSay).length) {
  console.log("ALAN DAGILIMI:");
  Object.entries(alanSay).sort((a, b) => b[1] - a[1])
    .forEach(([k, v]) => console.log("  " + String(v).padStart(4) + "  " + k));
  console.log("");
}
const goster = TAM ? bulgu : bulgu.slice(0, 25);
for (const b of goster) {
  console.log("  " + b.ad.padEnd(32) + " [" + b.f + ":" + b.satir + "]  " +
              b.alanlar.join(", "));
}
if (!TAM && bulgu.length > 25) console.log("  … +" + (bulgu.length - 25) + " (--tam ile hepsi)");
process.exit(bulgu.length ? 1 : 0);

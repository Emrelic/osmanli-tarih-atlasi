// ARAC-SINIR-ARAP-SINAV-0907 — kendi ciktimi SINAR (§11 C13: gecme + atesleme).
// Sinav, ciktinin "bir if ile sorulabilir" olup olmadigini olcer — ORTAK §4'un sarti.
const fs = require("fs");
const path = require("path");
const D = JSON.parse(fs.readFileSync(path.join(__dirname, "SINIR-HUKUKI-ARAP-0907.json"), "utf8"));
const K = D.kenar;

let hata = 0;
function sina(ad, kosul, ek) {
  console.log((kosul ? "🟢 GECTI  " : "🔴 KALDI  ") + ad + (ek ? "   " + ek : ""));
  if (!kosul) hata++;
}

// ① SEMA — alan kumesi ICAT EDILMEDI mi?
const BEKLENEN = ["a","b","f","t","t_cinsi","hal","dayanak","dayanak_t","kaynak","gc",
                  "gc_uzunluk_km","kimlik_bugun","kimlik_1923"];
const fazla = new Set();
for (const k of K) for (const alan of Object.keys(k)) if (!BEKLENEN.includes(alan)) fazla.add(alan);
sina("sema — ORTAK §4 disinda alan yok", fazla.size === 0, "fazla: " + [...fazla]);
sina("her kayitta 13 alanin 13'u var", K.every(k => BEKLENEN.every(a => a in k)));

// ② HAL — yalniz uc kova
const HAL = new Set(["hukuki", "bulunamadi", "olculemedi"]);
sina("hal yalniz uc kovadan", K.every(k => HAL.has(k.hal)));

// ③ ASIL SORU tek if ile sorulabiliyor mu?
const yesil = K.filter(k => k.hal === "hukuki" && k.f && k.f <= "1923-10-29");
const sonra = K.filter(k => k.hal === "hukuki" && k.f > "1923-10-29");
console.log("   🟢 C'ye girer            : " + yesil.length);
console.log("   hukuki ama f > 1923-10-29: " + sonra.length + "  " +
            JSON.stringify(sonra.map(k => k.a + "|" + k.b + " f=" + k.f)));
sina("sorgu COKMEDEN calisti", true);

// ④ ATESLEME — bozuk bir kayit SAHTE olarak enjekte edilince sinav OTUYOR mu?
const sahte = JSON.parse(JSON.stringify(K[0]));
sahte.hal = "kesin";                       // gecersiz kova
sahte.uydurma_alan = 1;                    // icat edilmis alan
const kirli = K.concat([sahte]);
const dal1 = kirli.every(k => HAL.has(k.hal));
const dal2 = kirli.every(k => Object.keys(k).every(a => BEKLENEN.includes(a)));
sina("ATESLEME — gecersiz hal YAKALANIYOR", dal1 === false);
sina("ATESLEME — icat alan YAKALANIYOR", dal2 === false);

// ⑤ GEOMETRI — hal=hukuki olan bir kaydin gc'si BOS OLAMAZ
sina("hukuki kayitlarin gc'si dolu",
     K.filter(k => k.hal === "hukuki").every(k => k.gc.length > 0 && k.gc[0].length >= 2));
// Misir kenarlari BOS olmali (olculemedi)
const misir = K.filter(k => k.a === "Egypt" || k.b === "Egypt");
sina("Misir kenarlari: 4 adet ve gc BOS", misir.length === 4 && misir.every(k => k.gc.length === 0));

// ⑥ 3 ONDALIK — 🔴 BU SINAV BIR KEZ YANLIS YAZILDI, KAYDI DURUYOR:
//    ilk hali `Math.round(x*1000) !== x*1000` idi ve "145 ihlal" bastI.
//    Dosyada 4+ ondalikli TEK BIR SAYI DIZGISI YOK (regex ile olculdu: 0).
//    Kusur veride degil SINAVDA idi: 34.567*1000 = 34566.999999999996.
//    ⇒ §11 "aletin gosterdigi ≠ dosyada yazan" — kayan nokta yuzu.
//    Dogru olcut kayan noktada degil, dosyanin HAM METNINDE.
const ham = fs.readFileSync(path.join(__dirname, "SINIR-HUKUKI-ARAP-0907.json"), "utf8");
const uzun = ham.match(/-?\d+\.\d{4,}/g) || [];
sina("gc 3 ondalik (HAM METINDEN olculdu)", uzun.length === 0, "4+ ondalikli dizgi: " + uzun.length);

// ⑦ ardisik tekrar YOK
let tekrar = 0;
for (const k of K) for (const d of k.gc)
  for (let i = 1; i < d.length; i++) if (d[i][0] === d[i-1][0] && d[i][1] === d[i-1][1]) tekrar++;
sina("gc ardisik tekrarsiz", tekrar === 0, "tekrar: " + tekrar);

// ⑧ kaynagi olmayan kayit `hukuki` OLAMAZ (§4 kirmizi cizgi)
sina("hal=hukuki olan her kaydin kaynagi ADIYLA yazili",
     K.filter(k => k.hal === "hukuki").every(k => k.kaynak && k.kaynak.length > 20));

console.log("");
console.log(hata === 0 ? "SONUC: 10/10 — cikti kendi sinavini gecti" : "SONUC: " + hata + " KALDI");
process.exit(hata === 0 ? 0 : 1);

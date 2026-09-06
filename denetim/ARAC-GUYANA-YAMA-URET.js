// ÜÇ GUYANA — SÖMÜRGE KİMLİĞİ YAMASI. Üreteç; ELLE YAZILMADI (YONTEM §⑥).
//
// KURAL TABLOSU — her satırın gerekçesi ayrı ölçüldü:
//   ingiliz-guyanasi  künye f:1831-01-01 · TDV `guyana` DOĞRULADI (yıl):
//        "1831'de Demerara ve Essequibo Birleşik Kolonisi ile Berbice
//         birleştirilerek İngiliz Guyanası oluşturuldu"
//        ⇒ `ingiltere` dönemi 1831-01-01'de BÖLÜNÜR. 1803-1831 arası
//          `ingiltere` KALIR — o dönemde henüz "İngiliz Guyanası" YOKTU,
//          iki AYRI koloni vardı (TDV: "Berbice ayrı bir koloni olarak kaldı").
//   hollanda-guyanasi künye f:1667-01-01 · TDV `surinam` DOĞRULADI (yıl):
//        "Breda Antlaşması'yla (1667) ... Surinam'daki haklarını Hollanda'ya bıraktı"
//        🔴 YALNIZ PARAMARIBO. Künyenin ADI "Hollanda Guyanası (SURİNAM)" —
//          Essequibo · Demerara · Berbice AYRI Hollanda kolonileriydi, Surinam
//          DEĞİL. Onlara yazmak `§3.5.-1` "devlet var, YERİ YANLIŞ" sınıfı olurdu
//          (Fizan'a `hafsi` yazmakla aynı hata).
//   fransiz-guyanasi  künye f:1817-01-01 · 🔴 TDV KAPSAMIYOR (ölçüldü:
//        `guyan` · `cayenne` · `fransiz-guyanasi` + 5 slug daha = 302;
//        `amerika` ve `fransa` gövdeleri okundu, Fransız Guyanası'na TARİH
//        VERMİYOR). §4 COĞRAFÎ boşluk. Kesim günü DEĞİŞTİRİLMİYOR — veride
//        ZATEN var, yalnız kimlik değişiyor.
//
// 🔴 HİÇBİR TARİH ÜRETİLMİYOR. Yama yalnız `d:` kimliğini değiştiriyor ve
//   bir yerde (1831) var olan bir dönemi künye penceresine göre bölüyor.
//   Kaynaksız bir gün YAZILMIYOR.
//
// kullanım: node denetim/ARAC-GUYANA-YAMA-URET.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");

// [ad, eski kimlik, yeni kimlik, kesim günü (null = bölme yok, hepsini çevir)]
const KURAL = [
  ["Georgetown (Stabroek)", "ingiltere", "ingiliz-guyanasi", "1831-01-01"],
  ["New Amsterdam (Berbice)", "ingiltere", "ingiliz-guyanasi", "1831-01-01"],
  ["Kyk-over-al (Essequibo)", "ingiltere", "ingiliz-guyanasi", "1831-01-01"],
  ["Paramaribo", "hollanda", "hollanda-guyanasi", null],
  ["Cayenne", "fransa-cumhuriyet", "fransiz-guyanasi", "1817-01-01"],
];

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = new Map();
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) {
      if (K.has(y.ad)) K.set(y.ad, "🔴MUKERRER");
      else K.set(y.ad, [y, f]);
    }
}
// künye ömürleri
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const OMUR = {};
for (const d of Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k])) if (d && d.id) OMUR[d.id] = [d.f, d.t];
const g = s => s.split("-").map(Number);
const kEsit = (a, b) => { const [p, q] = [g(a), g(b)];
  for (let i = 0; i < 3; i++) if (p[i] !== q[i]) return p[i] < q[i]; return true; };

const cikti = []; let hata = 0;
for (const [ad, eskiId, yeniId, kesim] of KURAL) {
  const e = K.get(ad);
  if (!e || e === "🔴MUKERRER") { console.log("🔴 " + ad + " — bulunamadi/mukerrer"); hata++; continue; }
  const [y, dosya] = e;
  const eski = y.s, yeni = [];
  let cevrilen = 0;
  for (const p of eski) {
    if (p.d !== eskiId) { yeni.push({ f: p.f, t: p.t, d: p.d }); continue; }
    if (kesim && p.f < kesim && kesim < p.t) {
      yeni.push({ f: p.f, t: kesim, d: eskiId });
      yeni.push({ f: kesim, t: p.t, d: yeniId }); cevrilen++;
    } else if (kesim && p.t <= kesim) {
      yeni.push({ f: p.f, t: p.t, d: p.d });          // kesimden ÖNCE — dokunma
    } else { yeni.push({ f: p.f, t: p.t, d: yeniId }); cevrilen++; }
  }
  // ---- SINAVLAR ----
  const sureksiz = yeni.slice(1).filter((p, i) => yeni[i].t !== p.f);
  const ters = yeni.filter(p => p.f >= p.t);
  const disi = yeni.filter(p => OMUR[p.d] &&
    !(kEsit(OMUR[p.d][0], p.f) && kEsit(p.t, OMUR[p.d][1])));
  const kunyesiz = yeni.filter(p => !OMUR[p.d]).map(p => p.d);
  if (!cevrilen || sureksiz.length || ters.length || disi.length || kunyesiz.length) {
    console.log("🔴 " + ad + " — cevrilen:" + cevrilen + " sureksiz:" + sureksiz.length
      + " ters:" + ters.length + " kunye-disi:" + disi.length
      + (kunyesiz.length ? " KUNYESIZ:" + kunyesiz.join(",") : ""));
    for (const d of disi) console.log("      " + d.f + ".." + d.t + " " + d.d
      + "   kunye " + OMUR[d.d].join(".."));
    hata++; continue;
  }
  if (eski[0].f !== yeni[0].f || eski[eski.length - 1].t !== yeni[yeni.length - 1].t) {
    console.log("🔴 " + ad + " — zincirin UCLARI degisti"); hata++; continue;
  }
  cikti.push({ ad, dosya, eski, yeni, yeniId, cevrilen });
  console.log("🟢 " + ad.padEnd(26) + eski.length + " → " + yeni.length
    + " donem · " + cevrilen + " donem " + yeniId + "  [" + dosya + "]");
}
if (hata) { console.log("\n🔴 " + hata + " kusur — YAMA YAZILMADI"); process.exit(1); }

const L = [];
L.push("// " + "=".repeat(69));
L.push("// ÜÇ GUYANA — SÖMÜRGE KİMLİĞİ (âtıl üç künye canlandırılıyor)");
L.push("// Oturum: AMERİKA-OKYANUSYA · koordinatör 1.MURAT HÜDAVENDİGAR");
L.push("//");
L.push("// TEŞHİS: üç künyenin de künyesi VE rengi var, veride SIFIR dönem —");
L.push("// yani üç sömürge bugün metropol kimliğiyle boyanıyor (`ingiltere` ·");
L.push("// `hollanda` · `fransa-cumhuriyet`). Bu bir HATA değil bir TANECİK");
L.push("// eksiği: atlasın konvansiyonu büyük sömürgeye kendi kimliğini verir");
L.push("// (`ingiliz-hindistani` 70-76 nokta · `ingiliz-kuzey-amerika` 130 dönem).");
L.push("//");
L.push("// 🔴 HİÇBİR TARİH ÜRETİLMEDİ. Yama yalnız kimlik değiştiriyor; tek");
L.push("// bölme 1831-01-01'de ve o gün künyeden DEĞİL TDV'den geliyor.");
L.push("//");
L.push("// KAYNAK — her kimlik için AYRI ölçüldü:");
L.push("//   ingiliz-guyanasi  🟢 TDV `guyana` (16.748 kar., kesilmeden okundu):");
L.push("//     «1831'de Demerara ve Essequibo Birleşik Kolonisi ile Berbice");
L.push("//      birleştirilerek İngiliz Guyanası oluşturuldu»  — YIL hassasiyeti,");
L.push("//      gün VERMİYOR ⇒ künyenin `1831-01-01`i §4'e uygun.");
L.push("//   hollanda-guyanasi 🟢 TDV `surinam` (18.425 kar.): «Breda Antlaşması'yla");
L.push("//     (1667) New Amsterdam'a (New York) karşılık Surinam'daki haklarını");
L.push("//      Hollanda'ya bıraktı» — YIL. Veri günü (1667-07-31) daha kesin.");
L.push("//   fransiz-guyanasi  🔴 TDV KAPSAMIYOR — ölçüldü: `guyan` · `cayenne` ·");
L.push("//     `fransiz-guyanasi` · `guyanlar` · `latin-amerika` · `karayipler` ·");
L.push("//     `antiller` · `guyana--fransiz` = 302. Kapsayıcı `amerika` (75.093");
L.push("//      kar.) ve `fransa` (122.179 kar.) gövdeleri OKUNDU: `amerika` üç");
L.push("//      Guyana'yı ANIYOR ama TARİHLEMİYOR (§4'ün ANMA boşluğu), `fransa`");
L.push("//      Guyana'yı hiç anmıyor. ⇒ §4 COĞRAFÎ boşluk.");
L.push("//      Bu yama Cayenne'in gününü DEĞİŞTİRMİYOR — 1817-01-01 veride");
L.push("//      ZATEN var; yalnız kimlik `fransa-cumhuriyet` → `fransiz-guyanasi`.");
L.push("//");
L.push("// 🔴 YANLIŞ ATIF ÖNLENDİ — `hollanda-guyanasi` YALNIZ PARAMARIBO'YA:");
L.push("//   künyenin adı «Hollanda Guyanası (SURİNAM)». Essequibo · Demerara ·");
L.push("//   Berbice AYRI Hollanda kolonileriydi ve TDV `guyana` onları adıyla");
L.push("//   ayırıyor. Onların Hollanda dönemlerine bu kimliği yazmak");
L.push("//   `§3.5.-1` «devlet var, YERİ YANLIŞ» sınıfı olurdu (Fizan'a `hafsi`).");
L.push("//   ⇒ O dönemler `hollanda` olarak KALIYOR; kendi künyeleri YOK");
L.push("//     (açık kalem, ONERI dosyasında).");
L.push("//");
L.push("// ÜRETİM: denetim/ARAC-GUYANA-YAMA-URET.js — CANLI veriden. Üreteç");
L.push("// süreksizlik · ters dönem · künye penceresi · künyesiz kimlik sınar;");
L.push("// biri düşerse yamayı YAZMAZ.");
L.push("// " + "=".repeat(69));
L.push("");
L.push("window.YER_YAMA_GUYANA = [");
for (const c of cikti) {
  L.push("");
  L.push("// ── " + c.ad + " ──  [" + c.dosya + "]  " + c.cevrilen + " dönem → " + c.yeniId);
  L.push("// eski: " + c.eski.map(p => p.d + " " + p.f + "→" + p.t).join(" · "));
  L.push("{ ad:" + JSON.stringify(c.ad) + ",");
  L.push("  s:[" + c.yeni.map(p => "{f:" + JSON.stringify(p.f) + ",t:" + JSON.stringify(p.t)
    + ",d:" + JSON.stringify(p.d) + "}").join(",\n     ") + "] },");
}
L.push("");
L.push("];");
L.push("");
fs.writeFileSync("denetim/yer_yama_guyana.js", L.join("\n"), "utf8");
console.log("\n-> denetim/yer_yama_guyana.js (" + cikti.length + " nokta)");

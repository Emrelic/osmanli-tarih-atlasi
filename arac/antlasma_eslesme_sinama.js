// node arac/antlasma_eslesme_sinama.js  (çıkış 0 = geçti) — js/antlasma_eslesme.js davranış sınaması
const path = require("path"), fs = require("fs"), vm = require("vm");
const kok = path.join(__dirname, "..");
const ctx = { window: {}, console };
ctx.window.window = ctx.window;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(kok, "js", "gun.js"), "utf8"), ctx);
ctx.window.GUN = ctx.window.GUN || ctx.GUN;
vm.runInContext(fs.readFileSync(path.join(kok, "js", "antlasma_eslesme.js"), "utf8"), ctx);
const E = ctx.window.ANTLASMA_ESLESME;
const kk = { id: "kk-1774", ad: "Küçük Kaynarca Antlaşması", anahtarlar: ["Küçük Kaynarca", "Kaynarca"], t: "1774-07-21" };
const lozan = { id: "lozan-1923", ad: "Lozan Antlaşması", t: "1923-07-24" };
let hata = 0;
function say(ad, kosul) { console.log((kosul ? "✓ " : "✗ ") + ad); if (!kosul) hata++; }
say("anahtarlar: «Küçük Kaynarca — …» yakalanır", E.eslesen({ b: "Küçük Kaynarca — Memleketeyn'e af", t: "1774-07-21" }, [kk]) === kk);
say("eski kural (anahtarsız) Lozan adı yakalar", E.eslesen({ b: "Lozan Antlaşması'nın imzalanması", t: "1923-07-24" }, [lozan]) === lozan);
say("gün-dışı ama ±60 içinde yakalanır (Küçük Kaynarca 26 Tem)", E.eslesen({ b: "Küçük Kaynarca Antlaşması: Kırım", t: "1774-07-26" }, [kk]) === kk);
say("pencere dışı (75 gün) yakalanmaz", E.eslesen({ b: "Küçük Kaynarca Antlaşması", t: "1774-10-05" }, [kk]) === null);
say("başka antlaşma yakalanmaz (Riga 1920)", E.eslesen({ b: "Riga Barışı: Letonya", t: "1920-08-11" }, [kk, lozan]) === null);
say("açık antlasma_id ad/günü atlar", E.eslesen({ b: "Alakasız başlık", t: "1500-01-01", antlasma_id: "lozan-1923" }, [kk, lozan]) === lozan);
say("pencere_gun=10 daraltır", E.eslesen({ b: "Lozan Antlaşması", t: "1923-08-20" }, [Object.assign({ pencere_gun: 10 }, lozan)]) === null);
say("ÖNCE günü = t-1", E.oncekiGun(lozan) === "1923-07-23");
say("SONRA günü = t", E.sonrakiGun(lozan) === "1923-07-24");
say("savaş öncesi = onceki_t (yoksa null)", E.savasOncesiGun({ t: "1923-07-24", onceki_t: "1922-10-11" }) === "1922-10-11" && E.savasOncesiGun(lozan) === null);
say("etkiOnceGun: onceki_t varsa o, yoksa t-1", E.etkiOnceGun({ t: "1699-01-26", onceki_t: "1683-07-14" }) === "1683-07-14" && E.etkiOnceGun(lozan) === "1923-07-23");
const acik = { id: "karlofca-1699", ad: "Karlofça Antlaşması", anahtarlar: ["Karlofça"], t: "1699-01-26", eslesme_kipi: "acik" };
say("eslesme_kipi=acik: ad eşleşse bile düğme YOK", E.eslesen({ b: "Karlofça Antlaşması imzalandı", t: "1699-01-26" }, [acik]) === null);
say("eslesme_kipi=acik: açık antlasma_id ile VAR", E.eslesen({ b: "ilk büyük toprak kaybı", t: "1699-01-26", antlasma_id: "karlofca-1699" }, [acik]) === acik);
process.exit(hata ? 1 : 0);

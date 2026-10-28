// NEGATIF-YIL-1010-A SINAVI — app.js gunIdx ailesinin js/gun.js'e BAĞLANMASI, İKİ YÖNDE.
// Kullanım (ağaç kökünden):  node denetim/ARAC-NEGATIF-YIL-A-SINAV-1010.js [kip] [--taban <rev>]
//   kip birim    → (varsayılan) A doğru çeviriyor · B yanlışı yakalıyor · C veri evreni · D tüketici
//   kip tarayici → GERÇEK index.html başsız Chrome'da (CDP): çalışma anında gunIdx'e giren HER girdi
//                  yakalanır, eski formülle karşılaştırılır; sayfa istisnası tabanla karşılaştırılır.
// ESKİ KOL = `--taban` (varsayılan f0b6fd50, yamasız origin/main) app.js'i `git show` ile okunur:
// sınavın kusuru GÖRDÜĞÜ (eski kolda öten) kanıtlanmadan yeni kolun "temiz"i sayılmaz.
// Çıkış: 0 temiz · 1 ihlal · 2 ölçülemedi.
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm"), cp = require("child_process");
const KOK = path.resolve(__dirname, "..");
const arg = process.argv.slice(2);
const KIP = arg[0] && !arg[0].startsWith("--") ? arg[0] : "birim";
const TABAN = arg.includes("--taban") ? arg[arg.indexOf("--taban") + 1] : "f0b6fd50";

const SONUC = [], OLCULEMEDI = [];
function sor(ad, kosul, ek) {
  SONUC.push([ad, !!kosul]);
  console.log((kosul ? "✓ " : "✗ ") + ad + (ek ? "  · " + ek : ""));
}
function olculemedi(neden) { OLCULEMEDI.push(neden); console.log("? ÖLÇÜLEMEDİ: " + neden); }
function bitir() {
  const bozuk = SONUC.filter(s => !s[1]).map(s => s[0]);
  console.log("\nSONUÇ: " + (SONUC.length - bozuk.length) + "/" + SONUC.length + " geçti" +
              (OLCULEMEDI.length ? " · ÖLÇÜLEMEDİ " + OLCULEMEDI.length + ": " + OLCULEMEDI.join(" | ") : ""));
  process.exit(bozuk.length ? 1 : OLCULEMEDI.length ? 2 : 0);
}
function dene(f) { try { return { v: f() }; } catch (e) { return { hata: (e && e.constructor && e.constructor.name) + ": " + (e && e.message) }; } }
function gitOku(rev, yol) {
  return cp.execFileSync("git", ["-C", KOK, "show", rev + ":" + yol], { encoding: "utf8", maxBuffer: 64 << 20 });
}

// app.js'in tarih yardımcıları dilimi: "var AYLAR" → kesinlikliYazi/isoDizgi/yilDizgi'nin sonu.
const DILIM_BAS = "var AYLAR = [", DILIM_SON = "// ZAMAN-GENİŞ-1008 (sürüm 3)";
const KH_BAS = "function _khGunStr(i)", KH_SON = "function _khKirpikPencere(";
function dilim(app, bas, son) {
  const i = app.indexOf(bas), j = app.indexOf(son, i + 1);
  if (i < 0 || j < 0) throw new Error("app.js kesim işareti yok: " + bas + " … " + son);
  return app.slice(i, j);
}
// Tek bir app.js metninden yardımcıları koşturulabilir hâle getir. gunYukle=false → GUN YOK.
function kol(app, gunYukle) {
  const c = { console: { log() {}, warn() {}, error() {} } };
  c.window = c;
  vm.createContext(c);
  if (gunYukle) vm.runInContext(fs.readFileSync(path.join(KOK, "js", "gun.js"), "utf8"), c, { filename: "js/gun.js" });
  vm.runInContext(dilim(app, DILIM_BAS, DILIM_SON) + "\n" + dilim(app, KH_BAS, KH_SON) +
    ";this.__f={gunIdx,idxTarih,idxYazi,gunMetniIdx,kesinlikliYazi,yilDizgi,_khGunStr};", c);
  return c.__f;
}

let APP_YENI, APP_ESKI;
try { APP_YENI = fs.readFileSync(path.join(KOK, "js", "app.js"), "utf8"); }
catch (e) { olculemedi("js/app.js okunamadı"); bitir(); }
try { APP_ESKI = gitOku(TABAN, "js/app.js"); }
catch (e) { olculemedi("taban " + TABAN + " app.js okunamadı (git): " + String(e.message).slice(0, 100)); bitir(); }
const GUN = require(path.join(KOK, "js", "gun.js"));

// ── bağımsız hakem: gün sayısı = yıl uzunluklarının toplamı (Hinnant'a DAYANMAZ) ──
function artik(y) { return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0); }
function hakemYilBasi(y) {                 // y-01-01 → 1970-01-01'e göre gün
  let n = 0;
  if (y < 1970) for (let k = y; k < 1970; k++) n -= artik(k) ? 366 : 365;
  else for (let k = 1970; k < y; k++) n += artik(k) ? 366 : 365;
  return n;
}

if (KIP === "birim") birim();
else if (KIP === "tarayici") tarayici().then(bitir, e => { olculemedi("tarayıcı: " + (e && e.stack || e)); bitir(); });
else { console.error("kip: birim | tarayici"); process.exit(2); }

function birim() {
  let Y, E;
  try { Y = kol(APP_YENI, true); } catch (e) { olculemedi("yeni kol koşmadı: " + e.message); return bitir(); }
  try { E = kol(APP_ESKI, false); } catch (e) { olculemedi("eski kol koşmadı: " + e.message); return bitir(); }

  // ───────────────────────── A — DOĞRU ÇEVİRİYOR MU ─────────────────────────
  console.log("A — DOĞRU ÇEVİRİYOR MU (beklenen yıl astronomik; hakem = yıl uzunlukları toplamı)");
  const VEKTOR = [   // [dizgi, astronomik yıl, ekranda yıl]
    ["-2999-01-01", -2999, "MÖ 3000"], ["0000-01-01", 0, "MÖ 1"], ["0001-01-01", 1, "1"],
    ["0050-01-01", 50, "50"], ["1000-01-01", 1000, "1000"], ["1945-09-02", 1945, "1945"],
    ["2026-01-01", 2026, "2026"],
  ];
  for (const [s, yil, yazi] of VEKTOR) {
    const g = dene(() => Y.gunIdx(s));
    const t = g.v != null ? Y.idxTarih(g.v) : null;
    const hakem = s.endsWith("-01-01") ? hakemYilBasi(yil) : hakemYilBasi(yil) + 244;  // 1945: Oca 1 → Eyl 2 = 244 gün
    sor("A yeni " + s + " → yıl " + yil + " · gün = hakem", t && t.y === yil && g.v === hakem,
        "gunIdx=" + g.v + (g.hata ? " HATA " + g.hata : "") + " · hakem=" + hakem + " · y=" + (t && t.y));
    const yz = dene(() => Y.idxYazi(g.v));
    sor("A yeni idxYazi(" + s + ") yılı \"" + yazi + "\"", yz.v && yz.v.endsWith(" " + yazi), JSON.stringify(yz.v || yz.hata));
    sor("A yeni gidiş-dönüş _khGunStr(gunIdx(s)) == s", dene(() => Y._khGunStr(g.v)).v === s);
  }
  // Eski kol: aynı vektörde kusur GÖRÜNMELİ (sınav ayırt ediyor mu?)
  const eskiYanlis = VEKTOR.filter(([s, yil]) => { const g = dene(() => E.gunIdx(s)); return g.hata || E.idxTarih(g.v).y !== yil; });
  sor("A ESKİ kolda kusur GÖRÜNÜYOR: MÖ 3000 · MÖ 1 · MS 1 · 0050 yanlış, 1000/1945/2026 doğru",
      JSON.stringify(eskiYanlis.map(v => v[0])) === JSON.stringify(["-2999-01-01", "0000-01-01", "0001-01-01", "0050-01-01"]),
      eskiYanlis.map(([s]) => s + "→" + E.idxTarih(E.gunIdx(s)).y).join(" · "));
  for (const s of ["1000-01-01", "1945-09-02", "2026-01-01"])
    sor("A yeni == eski: " + s, Y.gunIdx(s) === E.gunIdx(s), Y.gunIdx(s) + " / " + E.gunIdx(s));
  // gösterim: kesinlik dalları MÖ'de
  const ky = [["-2999-01-01", "yil", "MÖ 3000"], ["-2999-01-01", "onyil", "~MÖ 3000"], ["-2999-01-01", "yuzyil", "MÖ 30. yüzyıl"],
              ["-0499-03-01", "ay", "Mart MÖ 500"], ["-2999-01-01", "belirsiz", "~MÖ 3000 (belirsiz)"],
              ["1453-05-29", "onyil", "~1450"], ["1453-05-29", "yuzyil", "XV. yüzyıl"]];
  for (const [s, k, b] of ky) {
    const r = dene(() => Y.kesinlikliYazi(s, Y.gunIdx(s), k));
    sor("A kesinlikliYazi(" + s + ", " + k + ") = \"" + b + "\"", r.v === b, JSON.stringify(r.v || r.hata));
  }
  sor("A yilDizgi(\"-2999-01-01\") = \"MÖ 3000\" · (\"0330-05-11\") = \"330\"",
      Y.yilDizgi("-2999-01-01") === "MÖ 3000" && Y.yilDizgi("0330-05-11") === "330");
  const gm = [["15 Mart MÖ 44", "-0043-03-15"], ["29 Mayıs 1453", "1453-05-29"], ["3 Ocak 1924 ve sonrası", "1924-01-03"]];
  for (const [m, s] of gm) {
    const r = dene(() => Y.gunMetniIdx(m, -1));
    sor("A gunMetniIdx(\"" + m + "\") = " + s, r.v === GUN.gun(s), String(r.v || r.hata));
  }

  // ───────────────────────── B — YANLIŞI YAKALIYOR MU ─────────────────────────
  console.log("\nB — YANLIŞI YAKALIYOR MU (bozuk girdi THROW; sessiz değer YASAK)");
  const BOZUK = ["", "abc", "1453-13-01", "1281-02-30", "1900-02-29", "1453/05/29", " 1453", "1453-5-1", "--1453",
                 null, undefined, 1453, NaN];
  let eskiSessiz = [];
  for (const s of BOZUK) {
    const y = dene(() => Y.gunIdx(s)), e = dene(() => E.gunIdx(s));
    sor("B yeni gunIdx(" + (typeof s === "string" ? JSON.stringify(s) : String(s)) + ") ATAR", "hata" in y,
        y.hata || ("DÖNDÜ " + y.v));
    if (!("hata" in e)) eskiSessiz.push(JSON.stringify(s) + "→" + e.v);
  }
  sor("B ESKİ kol bozuk girdinin çoğunu SESSİZ yutuyordu (sınav ayırt ediyor)", eskiSessiz.length >= 8, eskiSessiz.join(" · "));
  sor("B yeni idxTarih(1.5) / idxTarih(\"x\") ATAR", "hata" in dene(() => Y.idxTarih(1.5)) && "hata" in dene(() => Y.idxTarih("x")));
  sor("B gunMetniIdx(\"31 Şubat 1453\") ATAR (eski 3 Mart'a kaydırırdı)", "hata" in dene(() => Y.gunMetniIdx("31 Şubat 1453", -1)),
      "eski=" + dene(() => E.gunMetniIdx("31 Şubat 1453", -1)).v);
  const gs = dene(() => kol(APP_YENI, false).gunIdx("1453-05-29"));
  sor("B GUN yüklenmemişse gunIdx ATAR (eski Date.UTC'ye SESSİZ düşmez)", "hata" in gs && /gun\.js yüklenmedi/.test(gs.hata), gs.hata);

  // ───────────────────────── C — VERİ EVRENİ (gerileme) ─────────────────────────
  console.log("\nC — VERİ EVRENİ: index.html'in yüklediği BÜTÜN data/ betikleri, her tarih biçimli dizgi");
  const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const srcs = [...html.matchAll(/<script[^>]+src="(data\/[^"?]+)/g)].map(m => m[1]);
  const ctx = { console: { log() {}, warn() {}, error() {} } };
  ctx.window = ctx; ctx.self = ctx; ctx.document = { addEventListener() {}, querySelector() { return null; }, getElementById() { return null; } };
  vm.createContext(ctx);
  const evalHata = [];
  for (const s of srcs) {
    try { vm.runInContext(fs.readFileSync(path.join(KOK, s), "utf8"), ctx, { filename: s }); }
    catch (e) { evalHata.push(s + ": " + String(e.message).slice(0, 80)); }
  }
  const RX = /^[+-]?\d{1,6}(-\d{2}){0,2}$/, RX_TARIH = /^[+-]?\d{3,6}-\d{2}(-\d{2})?$/;
  const tarih = new Set(), gorulen = new Set(), maddeGun = [];
  // `gun` (ve `*not*`) alanı GÖSTERİM METNİDİR, gunIdx'e girmez ("1552-53" = 1552-1553 yılları;
  // gunMetniIdx onu ay adı olmadığı için hiç ayrıştırmaz). Evrene alınmaz, sayısı basılır.
  let metinAtlanan = 0;
  (function yuru(x, d, anahtar) {
    if (x == null || d > 12) return;
    if (typeof x === "string") {
      if (!RX_TARIH.test(x)) return;
      if (anahtar === "gun" || /not/.test(anahtar || "")) { metinAtlanan++; return; }
      tarih.add(x); return;
    }
    if (typeof x !== "object" || gorulen.has(x)) return;
    gorulen.add(x);
    if (typeof x.gun === "string" && typeof x.t === "string") maddeGun.push([x.t, x.gun]);
    for (const k of Object.keys(x)) yuru(x[k], d + 1, Array.isArray(x) ? anahtar : k);
  })(Object.keys(ctx).reduce((o, k) => (k !== "window" && k !== "self" && (o[k] = ctx[k]), o), {}), 0, "");
  console.log("   " + srcs.length + " betik · eval hatası " + evalHata.length + " · " + tarih.size +
              " ayrık tarih dizgisi · " + maddeGun.length + " `gun` metinli kayıt · tarih biçimli METİN alanı (gun/*not*, evren dışı) " + metinAtlanan);
  if (tarih.size < 7000) olculemedi("evren beklenenden küçük (" + tarih.size + " < 7000; C0 7.404 ölçmüştü)");
  if (evalHata.length) olculemedi("veri betiği koşmadı: " + evalHata.slice(0, 3).join(" | "));
  const fark = [], yeniAtar = [], eskiAtar = [], yaziFark = [];
  for (const s of tarih) {
    const y = dene(() => Y.gunIdx(s)), e = dene(() => E.gunIdx(s));
    if ("hata" in y) { yeniAtar.push(s + " " + y.hata); continue; }
    if ("hata" in e) { eskiAtar.push(s); continue; }
    if (y.v !== e.v) { fark.push(s + ": eski " + e.v + " yeni " + y.v); continue; }
    for (const k of [undefined, "ay", "yil", "onyil", "yuzyil", "belirsiz"]) {
      const a = Y.kesinlikliYazi(s, y.v, k), b = E.kesinlikliYazi(s, e.v, k);
      if (a !== b) { yaziFark.push(s + "/" + k + ": \"" + b + "\" → \"" + a + "\""); break; }
    }
    if (Y._khGunStr(y.v) !== E._khGunStr(e.v)) yaziFark.push(s + "/_khGunStr");
    if (Y.idxYazi(y.v) !== E.idxYazi(e.v)) yaziFark.push(s + "/idxYazi");
  }
  sor("C yeni gunIdx evrende hiç ATMIYOR", !yeniAtar.length, yeniAtar.slice(0, 5).join(" | "));
  sor("C yeni == eski gunIdx (fark 0)", !fark.length, fark.length + " fark " + fark.slice(0, 5).join(" | "));
  sor("C gösterim (idxYazi · kesinlikliYazi×6 · _khGunStr) eski ile BİREBİR", !yaziFark.length, yaziFark.slice(0, 5).join(" | "));
  console.log("   bilgi: eski gunIdx'in ATTIĞI evren dizgisi " + eskiAtar.length);
  const gmFark = [], gmAtar = [];
  for (const [t, g] of maddeGun) {
    if (/^[+-]?\d+-\d{2}-\d{2}$/.test(t)) continue;               // app.js:7507 — gün hassasiyetliyse metne bakılmaz
    const kaba = Y.gunIdx(t);
    const y = dene(() => Y.gunMetniIdx(g, kaba)), e = dene(() => E.gunMetniIdx(g, kaba));
    if ("hata" in y) gmAtar.push(t + " \"" + g + "\" " + y.hata);
    else if (y.v !== e.v) gmFark.push(t + " \"" + g + "\": " + e.v + "→" + y.v);
  }
  sor("C gunMetniIdx evrende ATMIYOR ve eski ile aynı", !gmAtar.length && !gmFark.length,
      "atar " + gmAtar.length + " · fark " + gmFark.length + " " + gmAtar.concat(gmFark).slice(0, 4).join(" | "));
  // zaman ekseni ve _khGunStr — bütün 0100-9999 yılbaşları eski dolgulu biçimle aynı gün
  let eksenFark = 0;
  for (let y = 100; y <= 9999; y++) if (GUN.gunSayisi(y, 1, 1) !== E.gunIdx(("000" + y).slice(-4) + "-01-01")) eksenFark++;
  sor("C zaman ekseni GUN.gunSayisi(y,1,1) == eski gunIdx(dolgulu) · 0100-9999", eksenFark === 0, eksenFark + " fark");

  // ───────────────────────── D — TÜKETİCİ (bağlantı gerçekten var mı) ─────────────────────────
  console.log("\nD — TÜKETİCİ: gun.js'i GERÇEKTEN çağıran ne?");
  const ixGun = html.indexOf('src="js/gun.js'), ixApp = html.indexOf('src="js/app.js');
  sor("D index.html js/gun.js'i YÜKLÜYOR ve app.js'ten ÖNCE", ixGun > 0 && ixGun < ixApp, "gun.js@" + ixGun + " app.js@" + ixApp);
  const govde = dilim(APP_YENI, "function gunIdx(s)", "function idxYazi(");
  sor("D app.js gunIdx/idxTarih gövdesi GUN'a bağlı, Date.UTC/getUTC YOK",
      /GUN|_gunSayaci\(\)\.gun\(/.test(govde) && !/Date\.UTC|getUTC/.test(govde));
  const oc = fs.readFileSync(path.join(KOK, "arac", "odak_cozum.js"), "utf8");
  sor("D arac/odak_cozum.js js/gun.js'i yüklüyor (kesilen gunIdx onsuz ATAR)", /src === "js\/gun\.js"/.test(oc));
  // odak_cozum.js app.js'i METİNLE keser (KESIMLER): her BAŞ işareti app.js'te TEK olmalı, yoksa
  // ilk eşleşme (ör. bir yorum) kesimi bozar ve odak nöbetçisi ÖLÇEMEZ — bu yamada bir kez oldu.
  const kesBlok = oc.slice(oc.indexOf("const KESIMLER = ["), oc.indexOf("];", oc.indexOf("const KESIMLER = [")));
  const kesBas = [...kesBlok.matchAll(/^\s*\[("(?:[^"\\]|\\.)*"),\s*"/gm)].map(m => JSON.parse(m[1]));
  const cift = kesBas.filter(b => APP_YENI.split(b).length - 1 !== 1);
  sor("D odak_cozum KESIMLER baş işaretleri app.js'te TEKİL (" + kesBas.length + " işaret)", kesBas.length >= 8 && !cift.length,
      cift.map(b => b + "×" + (APP_YENI.split(b).length - 1)).join(" | "));
  const kullan = (APP_YENI.match(/\bGUN\.(gun|dizgi|parcala|yilYazi|gunSayisi)\(|_gunSayaci\(\)/g) || []).length;
  sor("D app.js'te GUN çağrı sitesi > 0", kullan > 0, kullan + " site");
  bitir();
}

// ───────────────────────── TARAYICI — gerçek index.html ─────────────────────────
async function tarayici() {
  const http = require("http"), os = require("os");
  const KROM = ["C:/Program Files/Google/Chrome/Application/chrome.exe",
                "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find(p => fs.existsSync(p));
  if (!KROM) { olculemedi("Chrome/Edge yok"); return; }
  if (typeof WebSocket === "undefined") { olculemedi("node'da WebSocket yok (node ≥ 22 gerekir)"); return; }
  const TUR = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
                ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp" };
  let tabanKip = false;
  const TABAN_DOSYA = {};
  for (const y of ["index.html", "js/app.js", "arac/odak_cozum.js"]) TABAN_DOSYA["/" + y] = gitOku(TABAN, y);
  const sunucu = http.createServer((q, r) => {
    const u = decodeURIComponent(q.url.split("?")[0]);
    if (tabanKip && TABAN_DOSYA[u] != null) { r.writeHead(200, { "content-type": TUR[path.extname(u)] }); return r.end(TABAN_DOSYA[u]); }
    const p = path.join(KOK, u === "/" ? "index.html" : u);
    if (!p.startsWith(KOK) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { r.writeHead(404); return r.end(); }
    r.writeHead(200, { "content-type": TUR[path.extname(p)] || "application/octet-stream" });
    fs.createReadStream(p).pipe(r);
  });
  await new Promise(ok => sunucu.listen(0, "127.0.0.1", ok));
  const PORT = sunucu.address().port;
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), "negyil-krom-"));
  const krom = cp.spawn(KROM, ["--headless=new", "--remote-debugging-port=0", "--user-data-dir=" + prof,
    "--no-first-run", "--no-default-browser-check", "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
    "--window-size=1400,900", "about:blank"], { stdio: ["ignore", "ignore", "pipe"] });
  const wsUrl = await new Promise((ok, red) => {
    let b = ""; const z = setTimeout(() => red(new Error("Chrome DevTools adresi gelmedi")), 30000);
    krom.stderr.on("data", d => { b += d; const m = b.match(/DevTools listening on (ws:\S+)/); if (m) { clearTimeout(z); ok(m[1]); } });
  });
  const port = new URL(wsUrl).port;
  const hedef = await (await fetch("http://127.0.0.1:" + port + "/json/new?about:blank", { method: "PUT" })).json();
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(ok => ws.addEventListener("open", ok));
  let no = 0; const bekle = new Map(), olay = [];
  ws.addEventListener("message", m => {
    const d = JSON.parse(m.data);
    if (d.id && bekle.has(d.id)) { bekle.get(d.id)(d); bekle.delete(d.id); } else if (d.method) olay.push(d);
  });
  const cdp = (method, params) => new Promise(ok => { const id = ++no; bekle.set(id, ok); ws.send(JSON.stringify({ id, method, params: params || {} })); });
  const ev = async (expr) => {
    const r = await cdp("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true, timeout: 120000 });
    if (r.result && r.result.exceptionDetails) throw new Error("evaluate: " + JSON.stringify(r.result.exceptionDetails).slice(0, 300));
    return r.result && r.result.result && r.result.result.value;
  };
  await cdp("Runtime.enable"); await cdp("Page.enable"); await cdp("Log.enable");
  // GUN'a gelen HER girdi yakalanır: gun.js window.GUN'u atadığı an sarılır. Eski formül aynı yerde koşar.
  await cdp("Page.addScriptToEvaluateOnNewDocument", { source: `(function(){
    var G, girdi = new Map(); window.__NEGYIL = { girdi: girdi };
    function eski(s){ var p = s.split("-"); return Math.round(Date.UTC(+p[0], (+p[1]||1)-1, +p[2]||1) / 864e5); }
    Object.defineProperty(window, "GUN", { configurable: true, get: function(){ return G; }, set: function(v){
      var asil = v.gun; v.gun = function(s){ var k = typeof s + ":" + String(s); var r, h = null;
        try { r = asil(s); } catch (e) { h = String(e.message); }
        if (!girdi.has(k)) { var e2; try { e2 = eski(s); } catch (x) { e2 = "ATAR"; } girdi.set(k, [r === undefined ? null : r, h, e2]); }
        if (h !== null) throw new Error(h); return r; };
      G = v; } });
  })();` });
  async function sayfa(etiket) {
    olay.length = 0;
    await cdp("Page.navigate", { url: "http://127.0.0.1:" + PORT + "/index.html" });
    const t0 = Date.now();
    let hazir = false;
    while (Date.now() - t0 < 180000) {
      await new Promise(ok => setTimeout(ok, 1500));
      try { hazir = await ev("typeof tarihAyarla === 'function' && typeof suanki === 'number' && document.readyState === 'complete'"); } catch (e) { hazir = false; }
      if (hazir) break;
    }
    if (!hazir) { olculemedi(etiket + ": sayfa 180 sn'de hazır olmadı"); return null; }
    await new Promise(ok => setTimeout(ok, 6000));        // ilk çizim + gecikmeli yükleyiciler
    const gez = ["1281-07-27", "1453-05-29", "1571-10-07", "1683-09-12", "1878-07-13", "1923-10-29", "1940-01-01"];
    const ekran = await ev(`(async function(){ var o = [];
      for (var s of ${JSON.stringify(gez)}) { try { tarihAyarla(gunIdx(s)); } catch (e) { o.push(s + " HATA " + e.message); continue; }
        await new Promise(function(ok){ setTimeout(ok, 700); });
        var u = document.getElementById("ustbar-yil") || document.querySelector("[id*=yil]");
        o.push(s + " suanki=" + suanki + " baslik=" + document.title.slice(0, 60)); }
      return o; })()`);
    const istisna = olay.filter(d => d.method === "Runtime.exceptionThrown")
      .map(d => (d.params.exceptionDetails.exception && d.params.exceptionDetails.exception.description || d.params.exceptionDetails.text || "").split("\n")[0]);
    const konsolHata = olay.filter(d => (d.method === "Runtime.consoleAPICalled" && d.params.type === "error") ||
      (d.method === "Log.entryAdded" && d.params.entry.level === "error"))
      .map(d => d.method === "Log.entryAdded" ? d.params.entry.text : (d.params.args || []).map(a => a.value || a.description).join(" "))
      .map(s => String(s).split("\n")[0].slice(0, 160));
    return { ekran, istisna, konsolHata };
  }
  console.log("TARAYICI — GERÇEK index.html (" + path.basename(KROM) + " başsız, yerel sunucu :" + PORT + ")");
  tabanKip = true;
  const T = await sayfa("taban");
  tabanKip = false;
  const Ye = await sayfa("yeni");
  let G = null;
  if (Ye) G = await ev(`(function(){ var r = { girdi: [], dene: {} };
    window.__NEGYIL.girdi.forEach(function(v, k){ r.girdi.push([k, v[0], v[1], v[2]]); });
    function d(f){ try { return f(); } catch (e) { return "ATAR: " + e.message; } }
    r.dene = { mo3000: d(function(){ var g = gunIdx("-2999-01-01"); return [g, idxTarih(g).y, idxYazi(g)]; }),
               ms0050: d(function(){ return idxTarih(gunIdx("0050-01-01")).y; }),
               mo1: d(function(){ return idxYazi(gunIdx("0000-01-01")); }),
               bos: d(function(){ return gunIdx(""); }), ay13: d(function(){ return gunIdx("1453-13-01"); }),
               gunVar: typeof window.GUN === "object" && typeof GUN.gun === "function" };
    return r; })()`);
  try { ws.close(); } catch (e) {}
  krom.kill(); sunucu.close();
  try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) {}
  if (!T || !Ye || !G) return;
  console.log("   taban: istisna " + T.istisna.length + " · konsol hatası " + T.konsolHata.length);
  console.log("   yeni : istisna " + Ye.istisna.length + " · konsol hatası " + Ye.konsolHata.length);
  T.konsolHata.forEach(x => console.log("     taban konsol: " + x));
  Ye.konsolHata.forEach(x => console.log("     yeni  konsol: " + x));
  console.log("     gezinti örneği: taban «" + (T.ekran || [])[1] + "» · yeni «" + (Ye.ekran || [])[1] + "»");
  const yeniIstisna = Ye.istisna.filter(x => !T.istisna.includes(x));
  const yeniKonsol = Ye.konsolHata.filter(x => !T.konsolHata.includes(x));
  sor("T yeni sayfada TABANDA OLMAYAN istisna 0", !yeniIstisna.length, yeniIstisna.slice(0, 4).join(" | "));
  sor("T yeni sayfada TABANDA OLMAYAN konsol hatası 0", !yeniKonsol.length, yeniKonsol.slice(0, 4).join(" | "));
  sor("T zaman gezintisi (7 tarih) taban ile BİREBİR", JSON.stringify(T.ekran) === JSON.stringify(Ye.ekran),
      (Ye.ekran || []).filter((x, i) => x !== T.ekran[i]).slice(0, 3).join(" | "));
  sor("T window.GUN yüklü", G.dene.gunVar === true);
  const atan = G.girdi.filter(g => g[2] !== null), farkli = G.girdi.filter(g => g[2] === null && g[1] !== g[3]);
  console.log("   çalışma anında GUN.gun'a giren ayrık girdi: " + G.girdi.length + " · atan " + atan.length + " · eski formülden farklı " + farkli.length);
  sor("T çalışma anı girdileri ≥ 1000 (yakalayıcı gerçekten bağlı)", G.girdi.length >= 1000, G.girdi.length + "");
  sor("T çalışma anında ATAN girdi 0", !atan.length, atan.slice(0, 5).map(g => g[0] + " " + g[2]).join(" | "));
  sor("T çalışma anında eski formülden FARKLI sonuç 0", !farkli.length, farkli.slice(0, 5).map(g => g[0] + " " + g[3] + "→" + g[1]).join(" | "));
  const m = G.dene.mo3000;
  sor("T sayfada gunIdx(\"-2999-01-01\") → yıl −2999 · \"1 Ocak MÖ 3000\"", Array.isArray(m) && m[1] === -2999 && m[2] === "1 Ocak MÖ 3000", JSON.stringify(m));
  sor("T sayfada \"0050-01-01\" → 50 · \"0000-01-01\" → \"1 Ocak MÖ 1\"", G.dene.ms0050 === 50 && G.dene.mo1 === "1 Ocak MÖ 1",
      G.dene.ms0050 + " · " + G.dene.mo1);
  sor("T sayfada gunIdx(\"\") ve (\"1453-13-01\") ATAR", /^ATAR/.test(String(G.dene.bos)) && /^ATAR/.test(String(G.dene.ay13)),
      G.dene.bos + " · " + G.dene.ay13);
}

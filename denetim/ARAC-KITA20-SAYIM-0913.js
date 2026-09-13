// KITA 20 — SAYIM ③ v2. v1 GEÇERSİZ: 5 eşzamanlı istekte 237 slugun 152'si
// "503", 11'i "429" döndü — TDV YÜKÜ, madde durumu DEĞİL (§4⑤ ailesi).
// v2: TEK TEK, istekler arası 1500 ms, 503/429/ağ hatasında üstel geri çekilme
// (5 · 10 · 20 · 40 · 60 sn), 6 denemede de olmazsa "OLCULEMEDI" — ölü SAYILMAZ.
// Kullanım: node _sayim2.js <proje_kökü> <çıktı_dizini>
const fs = require("fs"), path = require("path"), https = require("https");
const KOK = process.argv[2], OUT = process.argv[3], K = path.join(KOK, "data");
const bekle = ms => new Promise(r => setTimeout(r, ms));

function yukle(re, anahtarRe) {
  const r = [];
  for (const f of fs.readdirSync(K).filter(f => re.test(f)).sort()) {
    global.window = {};
    eval(fs.readFileSync(path.join(K, f), "utf8"));
    for (const [k, v] of Object.entries(window))
      if (Array.isArray(v) && (!anahtarRe || anahtarRe.test(k)))
        for (const o of v) if (o && typeof o === "object") r.push(Object.assign({ _f: f, _k: k }, o));
  }
  return r;
}
const et = o => Array.isArray(o.etiket) ? o.etiket.map(String) : [];
const savasMi = o => et(o).includes("savas") || o.tur === "savas" || o.k === "savas";
const kucuk = s => String(s || "").toLocaleLowerCase("tr");
const SLUG = "[a-z0-9]+(?:-{1,2}[a-z0-9]+)*";
function slugCikar(k) {
  k = String(k || "").trim();
  if (new RegExp("^" + SLUG + "$").test(k)) return k;
  let m = k.match(new RegExp("tdv\\s*:\\s*(" + SLUG + ")", "i")); if (m) return m[1].toLowerCase();
  m = k.match(new RegExp("TDV[^`'\"]{0,20}[`'\"](" + SLUG + ")[`'\"]")); if (m) return m[1];
  m = k.match(new RegExp("^(" + SLUG + ")\\s*[(\\u00b7]")); if (m) return m[1];
  return null;
}
function tekIstek(slug) {
  return new Promise(res => {
    const req = https.get("https://islamansiklopedisi.org.tr/" + slug,
      { timeout: 30000, headers: { "User-Agent": "Mozilla/5.0 (atlas kaynak denetimi)" } }, r => {
        r.resume();
        res({ kod: r.statusCode, loc: String(r.headers.location || "") });
      });
    req.on("timeout", () => req.destroy(new Error("zaman asimi")));
    req.on("error", e => res({ kod: 0, hata: e.message }));
  });
}
async function yokla(slug) {
  const geri = [5000, 10000, 20000, 40000, 60000];
  let son;
  for (let d = 0; d < 6; d++) {
    son = await tekIstek(slug);
    if (son.kod === 200) return { durum: "CANLI", deneme: d + 1 };
    if (son.kod >= 300 && son.kod < 400)
      return { durum: son.loc.includes("/arama") ? "OLU" : "YONLENDIRME", loc: son.loc, deneme: d + 1 };
    if (son.kod === 404) return { durum: "OLU_404", deneme: d + 1 };
    if (d < 5) await bekle(geri[d]);
  }
  return { durum: "OLCULEMEDI", son_kod: son.kod, hata: son.hata || "", deneme: 6 };
}

(async () => {
  const cek = yukle(/^olaylar.*\.js$/, /^OLAYLAR(_[A-Za-z0-9]+)?$/).filter(savasMi);
  const kuyTum = yukle(/^kronoloji.*\.js$/).filter(savasMi);
  const kuy = kuyTum.filter(o => et(o).map(kucuk).includes("osmanli") || /osmanl/.test(kucuk(o.b) + " " + kucuk(o.d)));
  for (const o of cek.concat(kuy)) o._slug = slugCikar(o.kaynak);
  const benzersiz = [...new Set(cek.concat(kuy).map(o => o._slug).filter(Boolean))].sort();

  const durum = {};
  const bas = Date.now();
  for (let i = 0; i < benzersiz.length; i++) {
    durum[benzersiz[i]] = await yokla(benzersiz[i]);
    if ((i + 1) % 25 === 0)
      console.log("ilerleme " + (i + 1) + "/" + benzersiz.length + " · " + Math.round((Date.now() - bas) / 1000) + " sn");
    await bekle(1500);
  }
  const kova = arr => {
    const c = { toplam: arr.length, slugsuz: 0 };
    for (const o of arr) {
      const a = o._slug ? durum[o._slug].durum : "slugsuz";
      c[a] = (c[a] || 0) + 1;
    }
    return c;
  };
  const dagilim = {};
  for (const v of Object.values(durum)) dagilim[v.durum] = (dagilim[v.durum] || 0) + 1;
  const ozet = {
    surum: 2, sure_sn: Math.round((Date.now() - bas) / 1000),
    tanim: "etiket savas | tur savas | k savas · cekirdek = /^OLAYLAR(_...)?$/ anahtarlari",
    cekirdek_savas: cek.length, kuyruk_savas_tum: kuyTum.length,
    kuyruk_osmanli_siniflandirici: kuy.length,
    benzersiz_slug: benzersiz.length, slug_dagilimi: dagilim,
    cekirdek_kayit_adres: kova(cek), kuyruk_osmanli_kayit_adres: kova(kuy),
    damga: "CANLI = adres 200 dönüyor. Gövde OKUNMADI; 'anlatı var' demek DEĞİL (§4② ordu/saray tuzağı).",
  };
  fs.writeFileSync(path.join(OUT, "_sayim2_ozet.json"), JSON.stringify(ozet, null, 1));
  fs.writeFileSync(path.join(OUT, "_sayim2_slug_durum.json"), JSON.stringify(durum, null, 1));
  fs.writeFileSync(path.join(OUT, "_sayim2_kayit.json"), JSON.stringify({
    cekirdek: cek.map(o => ({ f: o._f, t: o.t, b: o.b, slug: o._slug, durum: o._slug ? durum[o._slug].durum : "slugsuz" })),
    kuyruk_osm: kuy.map(o => ({ f: o._f, t: o.t, b: o.b, slug: o._slug, durum: o._slug ? durum[o._slug].durum : "slugsuz" })),
  }, null, 1));
  console.log(JSON.stringify(ozet, null, 1));
})();

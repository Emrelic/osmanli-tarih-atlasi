// ÇEVİRİ ÇIKARICI (CEVIRI-1103) — arac/ceviri.py çağırır; elle de koşar:
//   node arac/ceviri_cikar.js <depo kökü>  → stdout: JSON
// Sitenin index.html'de yüklediği data/*.js'leri sanal pencerede koşturur
// (sitenin gördüğü veri = çevrilecek veri) ve çevrilecek Türkçe metni verir:
//   olay:   [{id, b, d}]   id = <dizi>:<t>:<sıra> — js/ceviri.js kimlikle() ile birebir
//   devlet: [{id, ad}]
//   arayuz: [metin]        index.html metin/nitelikleri + js/*.js dizgileri (aday)
"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");
const kok = process.argv[2] || ".";
const oku = p => fs.readFileSync(path.join(kok, p), "utf8");

const html = oku("index.html");
const yorumsuz = html.replace(/<!--[\s\S]*?-->/g, "");
const srcs = [...yorumsuz.matchAll(/<script[^>]*src="(data\/[^"?]+)/g)].map(m => m[1])
  .filter(s => !/^data\/ceviri_/.test(s));
const win = { document: { createElement: () => ({ style: {} }), getElementById: () => null, addEventListener() {} },
  addEventListener() {}, localStorage: { getItem: () => null } };
win.window = win;
const ctx = vm.createContext(win);
const hatalar = [];
for (const s of srcs) { try { vm.runInContext(oku(s), ctx, { filename: s }); } catch (e) { hatalar.push(s + ": " + e.message); } }

// KRONOLOJI_* dizileri (150 dizi · 13.272 madde) KADEMELİ çeviriye alınır: js/ceviri.js hepsini okur
// (çevirisi yoksa Türkçe kalır), ama çıkarıcı yalnız bu listedekileri sayar — yoksa çeviri tavanı
// bir anda 13.272 × 7 dil eksik gösterir. Yeni dizi = buraya ekle + ceviri.py kuyruk/yaz/uygula.
// (KASA CUMA, 7 Kasım 2026, Adım 8 pilotu)
const KRONO_CEVIRI = new Set(["KRONOLOJI_COK_ARABISTAN2"]);
const olayDizisi = k => (/^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) || KRONO_CEVIRI.has(k)) && Array.isArray(win[k]);
const olay = [];
for (const ad of Object.keys(win).filter(olayDizisi)) {
  const say = {};
  for (const o of win[ad]) {
    if (!o || typeof o !== "object") continue;
    const n = say[o.t] = (say[o.t] || 0) + 1;
    olay.push({ id: ad + ":" + o.t + ":" + (n - 1), b: o.b || "", d: typeof o.d === "string" ? o.d : "" });
  }
}
// Maddelerin `gun` alanı ("1683 (gün kaynakta yok)", "MÖ 3000 civarı") ekranda olduğu gibi
// yazılır; rakam şablonuyla arayüz sözlüğüne girer (659 kalıp ≈ 1.100 madde, 4 Kasım 2026).
const gunKalip = new Set();
for (const ad of Object.keys(win).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(win[k])))
  for (const o of win[ad]) if (o && typeof o.gun === "string" && /[A-Za-zÇĞİÖŞÜçğıöşü]/.test(o.gun))
    gunKalip.add(o.gun.replace(/\s+/g, " ").trim().replace(/\d+(?:[.,]\d+)*/g, "#"));
const devlet = (win.DEVLETLER || []).filter(d => d && d.id && typeof d.ad === "string").map(d => ({ id: d.id, ad: d.ad }));

// ---- arayüz adayları ----
const TR = /[çğıöşüÇĞİÖŞÜ]|\b(ve|ile|bir|için|yok|var|gün|yıl|madde|harita|devlet|olay|göster|gizle|kapat|aç)\b/i;
const aday = new Set();
function ekle(s) {
  s = s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();
  if (s.length < 2 || s.length > 400) return;
  if (!/[A-Za-zÇĞİÖŞÜçğıöşü]{2}/.test(s)) return;
  // Türkçe harfi/sözcüğü yoksa: büyük harfle başlayan sözcük ("Kronoloji", "Evet, tam ekran")
  // ya da boşluklu sözcük öbeği aranır; CSS değeri, kimlik gibi küçük harfli tek parçalar elenir.
  if (!TR.test(s) && !/(^|[\s(“"'])[A-ZÇĞİÖŞÜ][a-zçğıöşüâîû]{2,}/.test(s)) return;
  if (!TR.test(s) && /^[\w\-.#\s,:%()]+$/.test(s) && /^(?:[a-z\-]+|\d)/.test(s)) return;
  if (/^[\w.#\-:\[\]="' >]+$/.test(s) && !/\s/.test(s) && !/[çğıöşüÇĞİÖŞÜ]/.test(s)) return;   // seçici/kimlik
  if (/^(https?:|data\/|js\/|css\/)/.test(s) || /[{};]\s*$/.test(s) || /function\s*\(|=>|\bvar\s/.test(s)) return;
  aday.add(s.replace(/\d+(?:[.,]\d+)*/g, "#"));   // rakam şablonu — js/ceviri.js sozlukBul ile aynı
}
const govde = yorumsuz.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
for (const m of govde.matchAll(/>([^<]+)</g)) ekle(m[1]);
for (const m of govde.matchAll(/\s(?:title|placeholder|aria-label|data-ipucu)="([^"]*)"/g)) ekle(m[1]);
const t = /<title>([^<]*)<\/title>/.exec(html); if (t) ekle(t[1]);
const jsler = fs.readdirSync(path.join(kok, "js")).filter(f => f.endsWith(".js") && f !== "ceviri.js");
for (const f of jsler) {
  const satirlar = oku("js/" + f).replace(/\/\*[\s\S]*?\*\//g, "").split("\n");
  for (const sat of satirlar) {
    const s = sat.trim();
    if (!s || s.startsWith("//") || /console\.(log|warn|error|info|debug)|throw |new Error/.test(s)) continue;
    const kodlu = s.replace(/\s\/\/\s.*$/, "");
    for (const m of kodlu.matchAll(/"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|`((?:[^`\\$]|\\.)*)`/g)) {
      let v = m[1] != null ? m[1] : m[2] != null ? m[2] : m[3];
      try { v = JSON.parse('"' + v.replace(/\\'/g, "'").replace(/"/g, '\\"').replace(/\\\\"/g, '\\"') + '"'); } catch (e) {}
      if (/[<>]/.test(v)) { for (const p of v.split(/<[^>]*>/)) ekle(p); for (const a of v.matchAll(/title="([^"]*)"/g)) ekle(a[1]); }
      else ekle(v);
    }
  }
}
for (const g of gunKalip) if (g.length <= 400) aday.add(g);
process.stdout.write(JSON.stringify({ hatalar, olay, devlet, arayuz: [...aday].sort() }));

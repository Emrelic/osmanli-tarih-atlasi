// ARAC-MOTOR-TARIH-TARAMA-1008-GOSTERIM.js — js/app.js'te tarih dizgisinin EKRANA basıldığı /
// dilimlendiği yerler: dolgusuz ("330-05-11") ve dolgulu ("0330-05-11") girdide GERÇEK davranış.
// YALNIZ OKUR. Kullanım:
//   node denetim/ARAC-MOTOR-TARIH-TARAMA-1008-GOSTERIM.js bugun=js/app.js z2=<z2 uygulanmış app.js>
// Yöntem: ① biçimleyici işlevler (kesinlikliYazi, olayTarihYazi, kisaTarihYazi, yilDizgi,
// _isyanTarihYazi, gunIdx, idxYazi, idxTarih, kesinlikBirimi) dosyadan AYRIŞTIRILIP (parantez
// eşlemesi) vm içinde GERÇEKTEN çağrılır. ② satır içi ifadeler: ifade metni dosyada BİREBİR
// aranır (bulunamazsa "bu sürümde YOK" — uydurma satır yok), aynı metin vm'de değerlendirilir.
// ③ biçimleyici çağıran satırlar ayrıca listelenir (davranış biçimleyicininkidir).
"use strict";
const fs = require("fs"), vm = require("vm");

const surumler = process.argv.slice(2).map(a => { const i = a.indexOf("="); return [a.slice(0, i), a.slice(i + 1)]; });
if (!surumler.length) { console.error("kullanım: etiket=yol ..."); process.exit(2); }

function islevKaynagi(src, ad) {
  const re = new RegExp("function\\s+" + ad.replace(/\$/g, "\\$") + "\\s*\\(");
  const m = re.exec(src);
  if (!m) return null;
  let i = src.indexOf("{", m.index), d = 0;
  for (let j = i; j < src.length; j++) {
    if (src[j] === "{") d++;
    else if (src[j] === "}") { d--; if (d === 0) return src.slice(m.index, j + 1); }
  }
  return null;
}
function degiskenKaynagi(src, ad) {
  const i = src.indexOf("var " + ad + " =");
  if (i < 0) return null;
  const j = src.indexOf(";", src.indexOf("]", i));
  return src.slice(i, j + 1);
}
function satirNo(src, metin) {
  const i = src.indexOf(metin);
  if (i < 0) return null;
  return src.slice(0, i).split("\n").length;
}

const ISLEVLER = ["gunIdx", "idxTarih", "idxYazi", "kesinlikBirimi", "kesinlikliYazi", "olayTarihYazi",
                  "kisaTarihYazi", "yilDizgi", "_isyanTarihYazi", "gunMetniIdx"];
const GIRDI = {
  "dolgusuz-gun": "330-05-11", "dolgulu-gun": "0330-05-11",
  "dolgusuz-yil": "330-01-01", "dolgulu-yil": "0330-01-01",
};
// Satır içi siteler — `ifade` dosyada BİREBİR aranır; `bag` girdinin hangi nesneye konacağı.
const SATIR_ICI = [
  { ad: "kur yılı (dizin, yerleşim satırı)", ifade: 's.kur.slice(0, 4)', bag: g => ({ s: { kur: g } }) },
  { ad: "kuruluş yılı (yerleşim kartı)", ifade: 'y.kur.slice(0, 4)', bag: g => ({ y: { kur: g } }) },
  { ad: "Osmanlı dönem ilk yıl (yerleşim)", ifade: 'dn[0].f.slice(0, 4)', bag: g => ({ dn: [{ f: g, t: "1461-08-15" }] }) },
  { ad: "Osmanlı dönem son yıl (yerleşim)", ifade: 'dn[dn.length - 1].t.slice(0, 4)', bag: g => ({ dn: [{ f: "1281-01-01", t: g }] }) },
  { ad: "yerleşim çubuğu dilim başlığı (title)", ifade: 'p.f + " → " + p.t', bag: g => ({ p: { f: g, t: "1461-08-15" } }) },
  { ad: "devlet dizini satırı (Devletler sekmesi) künye f → t", ifade: '(d.f || "") + " → " + (d.t || "")', bag: g => ({ d: { f: g, t: "1461-08-15" } }) },
  { ad: "tarihe git durum satırı", ifade: '(og.m.gun || (og.m.t || "").slice(0, 10))', bag: g => ({ og: { m: { t: g } } }) },
  { ad: "birleşik liste madde tarihi", ifade: '(o.t || "").slice(0, 10)', bag: g => ({ o: { t: g } }) },
  { ad: "kartCiz saltanat satırı (devlet kartı)", ifade: '(d.f || "").slice(0, 4) + " – " + (d.t || "").slice(0, 4)', bag: g => ({ d: { f: g, t: "1461-08-15" } }) },
  { ad: "odak kronoloji madde tarihi", ifade: '(m.t || "").slice(0, 10)', bag: g => ({ m: { t: g } }) },
  { ad: "derin anlatım adım başlığı", ifade: 'a.t + " — " + a.b', bag: g => ({ a: { t: g, b: "başlık" } }) },
  { ad: "sefer vuruş title", ifade: '" · " + v.t', bag: g => ({ v: { t: g } }) },
  { ad: "derin anlatım gün-doğrulayıcı", ifade: '/^\\d{4}-\\d{2}-\\d{2}$/.test(a.t || "")', bag: g => ({ a: { t: g } }) },
  // Z2'nin yerine koyduğu ifadeler (bugünkü dosyada YOK olmaları beklenir)
  { ad: "Z2: kartCiz saltanat satırı", ifade: 'yilDizgi(d.f) + " – " + yilDizgi(d.t)', bag: g => ({ d: { f: g, t: "1461-08-15" } }) },
  { ad: "Z2: kur yılı", ifade: 'yilDizgi(s.kur)', bag: g => ({ s: { kur: g } }) },
  { ad: "Z2: Osmanlı dönem ilk yıl", ifade: 'yilDizgi(dn[0].f)', bag: g => ({ dn: [{ f: g }] }) },
  { ad: "Z2: madde tarihi (kisaTarihYazi)", ifade: 'kisaTarihYazi(o.m || o)', bag: g => ({ o: { t: g } }) },
];
const BIC_CAGRI = /\b(kesinlikliYazi|olayTarihYazi|kisaTarihYazi|yilDizgi|_isyanTarihYazi)\(/g;

const sonuc = {};
for (const [etiket, yol] of surumler) {
  const src = fs.readFileSync(yol, "utf8");
  const ctx = { console, String, Math, Date, Number, Object, RegExp };
  vm.createContext(ctx);
  for (const v of ["AYLAR", "_ROMA_YUZYIL"]) { const k = degiskenKaynagi(src, v); if (k) vm.runInContext(k, ctx); }
  vm.runInContext("var AY_NO = {}; AYLAR.forEach(function (a, i) { AY_NO[a] = i + 1; });", ctx);
  const var_ = {};
  for (const f of ISLEVLER) { const k = islevKaynagi(src, f); var_[f] = !!k; if (k) vm.runInContext(k, ctx); }
  const S = { islev_var: var_, islev: [], satir_ici: [], cagiranlar: [] };
  // ① biçimleyiciler
  const cagri = {
    "kesinlikliYazi(ham, gunIdx(ham))": g => ctx.kesinlikliYazi(g, ctx.gunIdx(g)),
    "olayTarihYazi({t, gi})": g => ctx.olayTarihYazi({ t: g, gi: ctx.gunIdx(g) }),
    "kisaTarihYazi({t})": g => ctx.kisaTarihYazi({ t: g }),
    "yilDizgi(s)": g => ctx.yilDizgi(g),
    "_isyanTarihYazi(s,'yil')": g => ctx._isyanTarihYazi(g, "yil"),
    "_isyanTarihYazi(s,'ay')": g => ctx._isyanTarihYazi(g, "ay"),
    "_isyanTarihYazi(s,undefined)": g => ctx._isyanTarihYazi(g),
    "idxYazi(gunIdx(s))": g => ctx.idxYazi(ctx.gunIdx(g)),
  };
  for (const [ad, fn] of Object.entries(cagri)) {
    const r = { ad, satir: null };
    const kok = ad.split("(")[0];
    r.satir = satirNo(src, "function " + kok + "(");
    for (const [gk, g] of Object.entries(GIRDI)) {
      try { r[gk] = typeof ctx[kok] === "function" ? JSON.stringify(fn(g)) : "— (bu sürümde YOK)"; }
      catch (e) { r[gk] = "ÇÖKER " + e.name; }
    }
    S.islev.push(r);
  }
  // ② satır içi
  for (const s of SATIR_ICI) {
    const r = { ad: s.ad, ifade: s.ifade, satir: satirNo(src, s.ifade) };
    for (const [gk, g] of Object.entries(GIRDI)) {
      if (r.satir === null) { r[gk] = "— (bu sürümde YOK)"; continue; }
      try { r[gk] = JSON.stringify(vm.runInContext("(" + s.ifade + ")", Object.assign(ctx, s.bag(g)))); }
      catch (e) { r[gk] = "ÇÖKER " + e.name; }
    }
    S.satir_ici.push(r);
  }
  // ③ biçimleyiciyi çağıran satırlar (tanım satırları hariç)
  src.split("\n").forEach((l, i) => {
    if (/^\s*\/\//.test(l) || /^\s*function /.test(l)) return;
    let m; BIC_CAGRI.lastIndex = 0;
    while ((m = BIC_CAGRI.exec(l))) S.cagiranlar.push({ satir: i + 1, islev: m[1], metin: l.trim().slice(0, 120) });
  });
  sonuc[etiket] = S;
}

for (const [etiket, S] of Object.entries(sonuc)) {
  console.log(`\n===== ${etiket} =====  işlevler: ${JSON.stringify(S.islev_var)}`);
  console.log("① BİÇİMLEYİCİLER (gerçek çağrı) — dolgusuz-gün | dolgulu-gün | dolgusuz-yıl | dolgulu-yıl");
  for (const r of S.islev) console.log(`  :${r.satir} ${r.ad}\n      ${r["dolgusuz-gun"]} | ${r["dolgulu-gun"]} | ${r["dolgusuz-yil"]} | ${r["dolgulu-yil"]}`);
  console.log("② SATIR İÇİ (ifade dosyada birebir)");
  for (const r of S.satir_ici) console.log(`  :${r.satir === null ? "—" : r.satir} ${r.ad} :: ${r.ifade}\n      ${r["dolgusuz-gun"]} | ${r["dolgulu-gun"]} | ${r["dolgusuz-yil"]} | ${r["dolgulu-yil"]}`);
  console.log(`③ BİÇİMLEYİCİ ÇAĞIRAN SATIR: ${S.cagiranlar.length}`);
  for (const c of S.cagiranlar) console.log(`  :${c.satir} ${c.islev} :: ${c.metin}`);
}
if (process.env.JSON_CIKTI) fs.writeFileSync(process.env.JSON_CIKTI, JSON.stringify(sonuc, null, 1));

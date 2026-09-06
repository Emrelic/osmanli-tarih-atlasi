// ON SEKİZ ÇAKIŞMANIN TASNİFİ — MEKANİK Mİ, KARAR MI?
//
// `_sahiplik_uygula.py` "≥2 dosya AYNI alanı yazıyor VE değerler farklı"
// deyince ÇAKIŞMA basar. Ama bu üç apayrı durumu TEK satırda topluyor:
//
//   ⓪ NO-OP        yama tabanla birebir aynı — zaten uygulanmış
//   ① ÜST KÜME     biri ötekinin dönemlerini aynen taşıyor + alan EKLİYOR
//   ② GERÇEK       dönemler ayrışıyor — tarihsel bir karar gerekiyor
//
// 🔴 Üçü tek satırda raporlanınca aynı muameleyi görüyor ve ⓪ ile ①
//    gereksiz yere HÜKÜM BEKLİYOR. Körfez'de ölçüldü: üç kayıttan İKİSİ
//    mekanikti (Doha · Kuveyt), yalnız biri gerçek soruydu (Manama).
//
// ⚠️ Bu alet `_sahiplik_uygula.py`yi TAKLİT ETMİYOR — çakışma listesini
//    ondan ALIYOR (aşağıdaki sabit, kuru koşunun çıktısından). Taklit
//    etseydi eşiğini/kova yapısını da taşımak zorunda kalırdım
//    (`§11`: "bir aleti taklit eden ölçüm onun EŞİĞİNİ de taşımalı").
//
// KULLANIM:  node denetim/ARAC-CAKISMA-TASNIF-0906.js

const fs = require("fs"), vm = require("vm");

const CAKISAN = [
  "Bağdat", "Başkale", "Doha (Katar)", "Halepçe", "Kasr-ı Şîrîn", "Kusayr",
  "Kutaisi", "Kuveyt", "Manama (Bahreyn)", "Sefâce", "Sina güneyi", "Süveyş",
  "Timbuktu", "Tûr (Sînâ)", "Yagodina (Jagodina)", "Yergöğü (Giurgiu)",
  "Çaldıran", "Şehrizor",
];

const TABAN = /^yerlesimler.*\.js$/;      // taban dosyalari
const anah = (p) => p.f + "|" + p.t + "|" + (p.d || "");

const kayit = {};
for (const f of fs.readdirSync("data")) {
  if (!/^yer(lesim|_yama).*\.js$/.test(f)) continue;
  const d = { window: {} };
  vm.createContext(d);
  try { vm.runInContext(fs.readFileSync("data/" + f, "utf8"), d); } catch (e) { continue; }
  for (const k of Object.keys(d.window)) {
    const A = d.window[k];
    if (!Array.isArray(A)) continue;
    for (const y of A) if (y && CAKISAN.indexOf(y.ad) >= 0) {
      (kayit[y.ad] = kayit[y.ad] || []).push({ f, y });
    }
  }
}

const ozet = { "NO-OP": 0, "UST KUME": 0, GERCEK: 0, "TABAN YOK": 0 };
for (const ad of CAKISAN) {
  const hepsi = kayit[ad] || [];
  const temelK = hepsi.filter((r) => TABAN.test(r.f));
  const yamalar = hepsi.filter((r) => !TABAN.test(r.f));
  const temel = temelK.length ? temelK[0].y : null;
  console.log("");
  console.log("═══ " + ad + " ═══" + (temel ? "" : "   🔴 TABANDA YOK"));
  if (!temel) { ozet["TABAN YOK"]++; continue; }

  let enAgir = "NO-OP";
  for (const { f, y } of yamalar) {
    const satirlar = [];
    for (const alan of ["d", "s", "v", "isg"]) {
      const A = y[alan] || [], T = temel[alan] || [];
      if (!A.length) continue;
      const Ta = new Set(T.map(anah)), Aa = new Set(A.map(anah));
      const ayni = A.length === T.length && A.every((p) => Ta.has(anah(p)));
      const ek = new Set();
      for (const p of A) {
        const e = T.find((q) => anah(q) === anah(p));
        if (e) for (const k of Object.keys(p)) if (!(k in e)) ek.add(k);
      }
      const yeni = A.filter((p) => !Ta.has(anah(p))).map(anah);
      const dusen = T.filter((q) => !Aa.has(anah(q))).map(anah);
      let s;
      if (ayni && !ek.size) s = "NO-OP";
      else if (ayni) { s = "UST KUME (+" + [...ek].join(",") + ")"; if (enAgir === "NO-OP") enAgir = "UST KUME"; }
      else {
        s = "GERCEK  yeni:" + (yeni.length || 0) + " dusen:" + (dusen.length || 0);
        if (yeni.length) s += "\n         + " + yeni.slice(0, 3).join("\n         + ");
        if (dusen.length) s += "\n         - " + dusen.slice(0, 3).join("\n         - ");
        enAgir = "GERCEK";
      }
      satirlar.push("    " + alan + ": " + s);
    }
    console.log("  " + f + (satirlar.length ? "" : "   (dizi alani yok)"));
    satirlar.forEach((x) => console.log(x));
  }
  console.log("  ⇒ " + enAgir);
  ozet[enAgir]++;
}

console.log("");
console.log("═".repeat(58));
console.log("ÖZET: " + Object.entries(ozet).map(([k, v]) => k + " " + v).join("  ·  "));
console.log("  ⓪+① MEKANİK (hüküm gerekmez) : " + (ozet["NO-OP"] + ozet["UST KUME"]));
console.log("  ②  GERÇEK  (karar gerekir)   : " + ozet.GERCEK);

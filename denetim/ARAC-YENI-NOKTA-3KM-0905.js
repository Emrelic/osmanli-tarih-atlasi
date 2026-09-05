// -*- coding: utf-8 -*-
// YENİ NOKTALARIN 3 KM SINAVI — doğrulayıcının SORMADIĞI soru.
//
// 🔴 NİÇİN (5 Eylül 2026):
// `ARAC-YAMA-JS-SINA-0905` 148 yama kaydının 48'ini "ATLASTA YOK" diye
// işaretledi — yani BİREBİR ad eşleşmesi yok, demek YENİ nokta. Doğru.
// Ama o sınav **ADA** bakıyor, **MESAFEYE** bakmıyor.
//
// `CLAUDE.md §11`in ikinci tuzağı tam burada: *"Varat/Varad 1 km arayla
// iki kayıttı; Afyon ve Karahisâr-ı Sâhib 100 m arayla ÇELİŞEN zaman
// çizgileriyle duruyordu."* Bir nokta atlasta **başka bir adla** durabilir
// (`Buda`↔`Budin` · `Skopje`↔`Üsküp`) ve ad sınavı onu **YENİ** sanır.
//
// ⇒ Bu betik 48 yeni noktanın her birini atlasın 3805 noktasının
//    TAMAMINA mesafeyle sorar.
//
// ⚠️ VE 3 KM BİR YASAK DEĞİL BİR ŞÜPHE EŞİĞİDİR (`§11`): şartı zaman
//    çizgilerinin AYNI olmasıdır. Bu yüzden çıktı üç kovalı ve hiçbiri
//    "sil" demez — en yakın komşuyu ADIYLA verir, kararı insana bırakır.
//
// KOŞTUR:  py denetim/ARAC-YENI-NOKTA-3KM-0905-kos.py

const fs = require("fs");
const path = require("path");

const KOK = process.argv[2] || ".";
const D = (a) => path.join(KOK, a);

// ---- atlasın tamamını oku ----
// 🔴 Dosya listesi BURADA AYRIŞTIRILMAZ. `-kos.py` onu `import girdi` ile
//    Python'un kendisinden alır ve bir JSON dosyasıyla verir. İlk sürüm
//    burada bir regex kullandı, hiçbir şey eşleşmedi, ve betik 148 kaydın
//    148'ini "YENİ nokta" ilan etti (gerçek 48). `CLAUDE.md §11`.
const LISTE = process.argv[3];
if (!LISTE) {
  console.log("🔴 dosya listesi verilmedi — bu betik DOĞRUDAN koşturulmaz.");
  console.log("   py denetim/ARAC-YENI-NOKTA-3KM-0905-kos.py");
  process.exit(2);
}
const DOSYALAR = JSON.parse(fs.readFileSync(LISTE, "utf8"));

const ATLAS = [];
const eksik = [];
for (const f of DOSYALAR) {
  const y = D(path.join("data", f));
  if (!fs.existsSync(y)) { eksik.push(f); continue; }
  global.window = global.window || {};
  const once = new Set(Object.keys(global.window));
  eval(fs.readFileSync(y, "utf8"));
  for (const k of Object.keys(global.window)) {
    if (once.has(k)) continue;
    const v = global.window[k];
    if (Array.isArray(v)) for (const r of v) if (r && r.ad && r.lat != null) ATLAS.push(r);
  }
}
if (eksik.length) {
  console.log("🔴 OKUNAMAYAN GİRDİ DOSYASI — sayı EKSİK olur:");
  for (const f of eksik) console.log("   " + f);
}
console.log("atlas noktasi: " + ATLAS.length);
// 🔴 `0` bir ölçüm değildir — "yok" ile "bakmadım" arasında ayrım yapmaz.
// İlk sürüm 0 bastı ve DEVAM ETTİ; 148 kaydı "yeni" sandı.
if (ATLAS.length < 3000) {
  console.log("🔴 ATLAS BEKLENENDEN KÜÇÜK (>3000 olmalı) — okuma bozuk, DURDUM.");
  process.exit(2);
}

// ---- yama dosyalarını oku ----
const YAMA = [];
for (const f of fs.readdirSync(D("denetim"))) {
  if (!/^yer_yama_.*\.js$/.test(f)) continue;
  global.window = {};
  eval(fs.readFileSync(D(path.join("denetim", f)), "utf8"));
  for (const k of Object.keys(global.window)) {
    const v = global.window[k];
    if (Array.isArray(v)) for (const r of v) if (r && r.ad) YAMA.push({ f, r });
  }
}

// ---- atlasta BİREBİR adı olanları ele: geriye YENİ olanlar kalır ----
const adlar = new Set(ATLAS.map((r) => r.ad));
const yeni = YAMA.filter((x) => !adlar.has(x.r.ad));
console.log("yama kaydi: " + YAMA.length + " · YENİ (ad eslesmiyor): " + yeni.length);

const kons = yeni.filter((x) => x.r.lat != null && x.r.lon != null);
console.log("koordinatli: " + kons.length + " · KOORDİNATSIZ: " + (yeni.length - kons.length));
if (yeni.length !== kons.length) {
  console.log("  ⚠️ koordinatsız bir kayıt ÖLÇÜLEMEZ — 'temiz' DEĞİL:");
  for (const x of yeni) if (x.r.lat == null || x.r.lon == null) console.log("     " + x.f + "  " + x.r.ad);
}

// ---- mesafe ----
const R = 6371.0088;
const rad = (d) => (d * Math.PI) / 180;
function km(a, b, c, d) {
  const dl = rad(c - a), dn = rad(d - b);
  const h = Math.sin(dl / 2) ** 2 + Math.cos(rad(a)) * Math.cos(rad(c)) * Math.sin(dn / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

const kova = { ihlal: [], supheli: [], temiz: [] };
for (const x of kons) {
  let en = null;
  for (const a of ATLAS) {
    const d = km(+x.r.lat, +x.r.lon, +a.lat, +a.lon);
    if (!en || d < en.d) en = { d, a };
  }
  const sat = { f: x.f, ad: x.r.ad, d: en.d, komsu: en.a.ad };
  if (en.d < 3) kova.ihlal.push(sat);
  else if (en.d < 10) kova.supheli.push(sat);
  else kova.temiz.push(sat);
}

const yaz = (b, l, not) => {
  console.log("\n" + b + "  (" + l.length + ")");
  if (not) console.log("  " + not);
  l.sort((p, q) => p.d - q.d);
  for (const s of l) console.log("  " + s.d.toFixed(2).padStart(8) + " km  " + s.ad.padEnd(42) + "→ " + s.komsu + "   [" + s.f + "]");
};

yaz("🔴 3 KM ALTI — MÜKERRER ŞÜPHESİ", kova.ihlal,
    "şart: zaman çizgileri AYNI ise mükerrer; FARKLI ise ikisi de meşru (§11)");
yaz("🟡 3-10 KM — yakın, karara değer", kova.supheli);
console.log("\n🟢 10 KM ÜSTÜ — temiz  (" + kova.temiz.length + ")");

console.log("\n=== ÖZET ===");
console.log("YENİ nokta        : " + yeni.length);
console.log("ölçülen           : " + kons.length);
console.log("🔴 3 km altı      : " + kova.ihlal.length);
console.log("🟡 3-10 km        : " + kova.supheli.length);
console.log("🟢 temiz          : " + kova.temiz.length);
if (yeni.length !== kons.length)
  console.log("⚪ ÖLÇÜLEMEDİ     : " + (yeni.length - kons.length) + "  ← 'temiz' DEĞİL");
process.exit(kova.ihlal.length ? 1 : 0);

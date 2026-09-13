// ARAC-KITA20-SAVAS-0913 — "savaşın hikâyesi" kartlarını SINAR.
// Kullanım: node ARAC-KITA20-SAVAS-0913.js <kart_dosyasi> <proje_koku> <tdv_govde_dizini>
//
// Yedi sınav, hepsi SAYAR ve BASAR (sessiz eleme yok, D015):
//   ① AYRIŞTIRMA  dosya eval edilir; YALNIZ window.EKOKUMA_SAVAS tanımlanmalı (§7 ad alanı)
//   ② ŞEMA        zorunlu alanlar dolu · tur === "savas-hikayesi" · id benzersiz
//   ③ KESİNLİK    kesin | tartismali | iddia | rivayet (EK-OKUMA.md; boş kart yayına girmez)
//   ④ OLAY BAĞI   her olay değeri ÇEKİRDEKTE (/^OLAYLAR(_...)?$/) BİREBİR bir t —
//                 app.js ekKartBagliMi indexOf ile eşler; eşleşmeyen düğme HİÇ çıkmaz
//   ⑤ UZUNLUK     oncesi+akis+sonuc 150-300 kelime (şartname)
//   ⑥ TELİF       kart metni ile kaynak TDV gövdesi arasındaki EN UZUN ORTAK KELİME DİZİSİ.
//                 ≥ 8 kelime → İNCELE (ad listeleri ve unvanlar da buraya düşebilir;
//                 alet hüküm vermez, diziyi basar)
//   ⑦ ATEŞLEME    ⑥ ve ④'ün kendisi sınanır: bilinçli bir kopya ve uydurma bir tarih
//                 enjekte edilir, alet ÖTMEZSE çıkış kodu 2 (D010 · C13 iki yön)
const fs = require("fs"), path = require("path");
const [KART, KOK, GOVDE] = process.argv.slice(2);
const TR = { "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g", "Ü": "u", "ü": "u",
             "Ö": "o", "ö": "o", "Ç": "c", "ç": "c", "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u" };
const norm = s => String(s || "").replace(/[İIıŞşĞğÜüÖöÇçÂâÎîÛû]/g, c => TR[c]).toLowerCase()
                   .replace(/[’'`]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const kelimeler = s => norm(s).split(" ").filter(Boolean);
let hata = 0;
const yaz = (ok, m) => { if (!ok) hata++; console.log((ok ? "  ✓ " : "  ✗ ") + m); };

// ── ① ─────────────────────────────────────────────────────────────────────
global.window = {};
eval(fs.readFileSync(KART, "utf8"));
const adlar = Object.keys(window);
yaz(adlar.length === 1 && adlar[0] === "EKOKUMA_SAVAS", "① ad alanı: " + JSON.stringify(adlar));
const K = window.EKOKUMA_SAVAS || [];
console.log("  kart sayısı: " + K.length);

// ── çekirdek t kümesi ────────────────────────────────────────────────────
const cekT = new Set();
const D = path.join(KOK, "data");
for (const f of fs.readdirSync(D).filter(f => /^olaylar.*\.js$/.test(f))) {
  global.window = {};
  eval(fs.readFileSync(path.join(D, f), "utf8"));
  for (const [k, v] of Object.entries(window))
    if (/^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(v)) for (const o of v) if (o && o.t) cekT.add(o.t);
}
console.log("  çekirdek benzersiz t: " + cekT.size);

// ── TDV gövdesi: makale kısmı (Kopyalama metni → "Bu madde TDV" satırı) ──
function govde(slug) {
  const y = path.join(GOVDE, slug + ".txt");
  if (!fs.existsSync(y)) return null;
  const s = fs.readFileSync(y, "utf8");
  const a = s.indexOf("Kopyalama metni");
  let b = s.indexOf("Bu madde TDV İslâm Ansiklopedisi", a);
  if (b < 0) b = s.indexOf("Madde Bildirim Formu", a);
  return s.slice(a < 0 ? 0 : a, b < 0 ? s.length : b);
}
function enUzunOrtak(aK, bK) {           // kelime düzeyinde en uzun ortak ardışık dizi
  const idx = new Map();
  bK.forEach((w, i) => { if (!idx.has(w)) idx.set(w, []); idx.get(w).push(i); });
  let en = 0, bas = 0;
  let onceki = new Map();
  for (let i = 0; i < aK.length; i++) {
    const simdi = new Map();
    for (const j of (idx.get(aK[i]) || [])) {
      const L = (onceki.get(j - 1) || 0) + 1;
      simdi.set(j, L);
      if (L > en) { en = L; bas = i - L + 1; }
    }
    onceki = simdi;
  }
  return { en, dizi: aK.slice(bas, bas + en).join(" ") };
}
const METIN_ALAN = ["kisa", "oncesi", "akis", "sonuc", "tartisma"];
const ZORUNLU = ["id", "tur", "baslik", "kisa", "tarih_metin", "yer", "taraflar", "oncesi", "akis", "sonuc", "kesinlik", "olay", "kaynak"];
const KESINLIK = new Set(["kesin", "tartismali", "iddia", "rivayet"]);
const ESIK = 8;

const idler = new Set();
const tablo = [];
for (const k of K) {
  console.log("\n■ " + k.id);
  const eksik = ZORUNLU.filter(a => k[a] == null || k[a] === "" || (Array.isArray(k[a]) && !k[a].length));
  yaz(!eksik.length, "② zorunlu alan" + (eksik.length ? " EKSİK: " + eksik.join(",") : ""));
  yaz(k.tur === "savas-hikayesi", "② tur = " + k.tur);
  yaz(!idler.has(k.id), "② id benzersiz"); idler.add(k.id);
  yaz((k.taraflar || []).length >= 2 && k.taraflar.every(t => t.ad), "② taraflar ≥ 2 ve adlı");
  yaz(KESINLIK.has(k.kesinlik), "③ kesinlik = " + k.kesinlik);
  const yok = (k.olay || []).filter(t => !cekT.has(t));
  yaz(!yok.length, "④ olay " + JSON.stringify(k.olay) + (yok.length ? " · ÇEKİRDEKTE YOK: " + yok.join(",") : " · hepsi çekirdekte"));
  const n = kelimeler([k.oncesi, k.akis, k.sonuc].join(" ")).length;
  yaz(n >= 150 && n <= 300, "⑤ uzunluk " + n + " kelime (150-300)");

  const sluglar = [...String(k.kaynak).matchAll(/TDV:\s*([a-z0-9-]+)/g)].map(m => m[1]);
  const kartK = kelimeler(METIN_ALAN.map(a => k[a] || "").join(" · "));
  let enIyi = { en: 0, dizi: "", slug: "" }, okunan = 0;
  for (const s of sluglar) {
    const g = govde(s);
    if (g == null) { console.log("  ⚠️ ⑥ gövde BULUNAMADI: " + s + " — bu kaynak için telif sınavı ÖLÇÜLEMEDİ"); continue; }
    okunan++;
    const r = enUzunOrtak(kartK, kelimeler(g));
    if (r.en > enIyi.en) enIyi = Object.assign(r, { slug: s });
  }
  if (!okunan) { yaz(false, "⑥ telif: HİÇBİR kaynak gövdesi okunamadı — ÖLÇÜLEMEDİ, temiz SAYILMAZ"); }
  else console.log((enIyi.en >= ESIK ? "  🟠 ⑥ İNCELE " : "  ✓ ⑥ ") + "en uzun ortak dizi " + enIyi.en +
                   " kelime (" + enIyi.slug + "): \"" + enIyi.dizi + "\"");
  tablo.push({ id: k.id, kelime: n, ortak: enIyi.en, olay: (k.olay || []).length, olay_yok: yok.length });
}

// ── ⑦ ATEŞLEME — aletin kendisi ötüyor mu ────────────────────────────────
console.log("\n■ ⑦ ATEŞLEME SINAVI");
const ornekG = govde("ankara-savasi");
let ates = 0;
if (ornekG) {
  const gK = kelimeler(ornekG);
  const kopya = gK.slice(200, 215);                       // bilinçli 15 kelimelik kopya
  const r = enUzunOrtak(kelimeler("tamamen uydurma bir giriş " + kopya.join(" ") + " ve bitiş"), gK);
  const ok = r.en >= 15;
  console.log((ok ? "  ✓" : "  ✗") + " enjekte 15 kelimelik kopya ölçüldü: " + r.en);
  if (!ok) ates++;
} else { console.log("  ✗ ateşleme için ankara-savasi gövdesi yok — ÖLÇÜLEMEDİ"); ates++; }
const sahteT = "1402-07-29";
const okT = !cekT.has(sahteT);
console.log((okT ? "  ✓" : "  ✗") + " uydurma tarih " + sahteT + " çekirdekte YOK olarak görüldü");
if (!okT) ates++;
const gercekT = "1402-07-28";
const okG = cekT.has(gercekT);
console.log((okG ? "  ✓" : "  ✗") + " gerçek tarih " + gercekT + " çekirdekte VAR olarak görüldü (geçme yönü)");
if (!okG) ates++;

console.log("\n══ ÖZET ══");
console.table(tablo);
console.log("hata: " + hata + " · ateşleme hatası: " + ates +
            " · ≥" + ESIK + " kelimelik ortak dizi: " + tablo.filter(t => t.ortak >= ESIK).length + " kart");
process.exit(ates ? 2 : hata ? 1 : 0);

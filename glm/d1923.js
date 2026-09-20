// -*- coding: utf-8 -*-
// glm/d1923.js — GLM-1 · D1923-OLCUM · 1923 sınır çizgilerinin envanteri
// Koşum: node glm/d1923.js  (depo kökünden ya da herhangi bir yerden — yol __dirname'den çözülür)
// Çıktı : glm/D1923-OLCUM.json + glm/D1923-OLCUM.md
// Kural : yalnız OKUR (data/**), yalnız glm/ klasörüne yazar. Motor koşusu DEĞİLDİR.
//
// Tanımlar (ölçümün açık şartnamesi):
//   G      = "1923-10-29"
//   aktif  = r.f <= G && (!r.t || r.t >= G)          [lonca: GLM.md GLM-1/1]
//   çizgili(V1)   = aktif && hat var (dizi, ≥1 nokta)
//   çizgisiz      = aktif && (sinif==="YOK" || kategori YOK/D-YOK ya da hat yok)
//                   [lonca tanımıyla çakışma kontrolü için V2 de basılır:
//                    çizgili(V2) = V1 && sinif!=="YOK" && kategori!∈{YOK,D-YOK}]
//   bölge = dosya adının "d_sinirlar(_)" sonrası; çekirdek dosya → "cekirdek"

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const KOK = path.resolve(__dirname, "..");
const G = "1923-10-29";

const DOSYALAR = [
  "d_sinirlar.js",
  "d_sinirlar_afrika.js",
  "d_sinirlar_amerika.js",
  "d_sinirlar_asya.js",
  "d_sinirlar_avrupa_bati.js",
  "d_sinirlar_avrupa_orta.js",
  "d_sinirlar_komsu.js",
  "d_sinirlar_okyanusya.js",
  "d_sinirlar_ortadogu.js",
];

// ── 1. Yükleme (node vm, window bağlamı) ────────────────────────────────────
const ctx = { window: {} };
vm.createContext(ctx);
const varDosya = {};                      // D_SINIRLAR* değişkeni → dosya
const kayitlar = [];                      // {kayit, dosya}
for (const ad of DOSYALAR) {
  const kod = fs.readFileSync(path.join(KOK, "data", ad), "utf8");
  vm.runInContext(kod, ctx, { filename: ad });
}
for (const k of Object.keys(ctx.window)) {
  if (/^D_SINIRLAR/.test(k)) varDosya[k] = k.replace(/^D_SINIRLAR_?/, "").toLowerCase() || "cekirdek";
}
for (const [v, bolge] of Object.entries(varDosya)) {
  for (const r of ctx.window[v]) kayitlar.push({ r, dosya: dosyaAdi(v), bolge });
}
function dosyaAdi(v) {
  const uzanti = v.replace(/^D_SINIRLAR_?/, "").toLowerCase();
  return "d_sinirlar" + (uzanti ? "_" + uzanti : "") + ".js";
}

// devletler.js — künyeler (varlık penceresi f/t)
vm.runInContext(fs.readFileSync(path.join(KOK, "data", "devletler.js"), "utf8"), ctx, { filename: "devletler.js" });
const devletler = ctx.window.DEVLETLER;

// ── 2. Ön ölçümün yeniden üretimi ───────────────────────────────────────────
const hatVar = (r) => Array.isArray(r.hat) && r.hat.length > 0;
const aktifMi = (r) => !!r.f && r.f <= G && (!r.t || r.t >= G);
const yokMu = (r) => r.sinif === "YOK" || r.kategori === "YOK" || r.kategori === "D-YOK";

const aktif = kayitlar.filter(({ r }) => aktifMi(r));
const cizgiliV1 = aktif.filter(({ r }) => hatVar(r));          // hat var → "çizgili 193"
const cizgisiz = aktif.filter(({ r }) => !hatVar(r));          // hat yok → 319−193 = 126
const hatTasiyanYok = aktif.filter(({ r }) => hatVar(r) && yokMu(r));  // hat VAR ama sinif YOK (çizilmez)
const cizgisizSartname = aktif.filter(({ r }) => yokMu(r) || !hatVar(r));   // lonca tanımı (kesişir)

const noktaSayisi = cizgiliV1.reduce((t, { r }) => t + r.hat.length, 0);
const neAdmin0 = cizgiliV1.filter(({ r }) => (r.geometri_kaynagi || "").includes("Natural Earth 10m admin-0")).length;
const neDiger = cizgiliV1.filter(({ r }) => {
  const g = r.geometri_kaynagi || "";
  return g.includes("Natural Earth 10m") && !g.includes("Natural Earth 10m admin-0");
});

const on = {
  beklenen: { aktif: 319, cizgili: 193, cizgisiz: 126, nokta: 17133, ne: 185 },
  olculen: {
    aktif: aktif.length,
    cizgili_hatvar: cizgiliV1.length,
    cizgisiz_hatyok: cizgisiz.length,
    hat_var_ama_sinif_YOK: hatTasiyanYok.map(({ r }) => r.id),
    cizgisiz_sartname_tanimiyla: cizgisizSartname.length,
    nokta: noktaSayisi,
    ne_admin0_bugunku_sinir: neAdmin0,
    ne_diger: neDiger.map(({ r }) => r.id + " — " + r.geometri_kaynagi),
    ne_toplam: neAdmin0 + neDiger.length,
  },
  tutar: {
    aktif: aktif.length === 319,
    cizgili_193: cizgiliV1.length === 193,
    cizgisiz_126: cizgisiz.length === 126,
    tam_bolunme: cizgiliV1.length + cizgisiz.length === aktif.length,
    nokta_17133: noktaSayisi === 17133,
    ne_admin0_185: neAdmin0 === 185,
  },
  not: "",
};
on.not = "319 = çizgili(hat var) " + cizgiliV1.length + " + çizgisiz(hat yok) " + cizgisiz.length +
  " — TAM BÖLÜNME. Loncadaki «kategori/sinif YOK ya da hat boş» tanımı bu ikiliye göre " +
  cizgisizSartname.length + " verir: " + hatTasiyanYok.length + " kayıt (" +
  hatTasiyanYok.map(({ r }) => r.id).join(", ") + ") hem hat taşıyor hem sinif YOK — ön ölçümün " +
  "126'sı HAT YOK kümesidir; o kayıt çizgili 193'ün içinde sayılmış (hat bilgi amaçlı duruyor, çizilmiyor).";

// ── 3. Çizgisiz kayıtların dökümü ───────────────────────────────────────────
const sebepAl = (r) => [r.not, r.kesinlik_not, r.sinif_not, r.degisti && r.degisti.not]
  .filter((x) => typeof x === "string" && x.trim() !== "").join(" · ") || "(sebep alanı boş)";
const sebepSinifi = (r) => {
  if (r.degisti && r.degisti.deger === true) return "sonradan-değişti/koordinat-yok";
  if (yokMu(r) && hatVar(r)) return "sinif-YOK-ama-hat-taşır (bilgi amaçlı)";
  if (r.kategori === "fiili") return "fiili-kesin-değil";
  if (!hatVar(r)) return "hat-yok";
  return "diğer";
};
// hat-taşıyan-YOK kayıtların kimliği (ana listenin dışında, ayrı kalemdir)
const cizgisizListe = cizgisiz.map(({ r, dosya, bolge }) => ({
  id: r.id,
  taraflar: r.taraflar,
  dosya,
  bolge,
  kategori: r.kategori || null,
  sinif: r.sinif || null,
  sebep_sinifi: sebepSinifi(r),
  sebep: sebepAl(r),
}));

const grupla = (liste, anahtar) => {
  const g = {};
  for (const x of liste) {
    const k = anahtar(x);
    (g[k] = g[k] || []).push(x.id);
  }
  const out = {};
  for (const k of Object.keys(g).sort()) out[k] = { adet: g[k].length, idler: g[k] };
  return out;
};
const cizgisizTarafCifti = grupla(cizgisizListe, (x) => x.taraflar.slice().sort().join(" × "));
const cizgisizBolge = grupla(cizgisizListe, (x) => x.bolge);
const cizgisizSebepSinifi = grupla(cizgisizListe, (x) => x.sebep_sinifi);

// ── 4. Kapsam boşluğu: 1923-10-29'da yaşayan devletler × D kaydı ────────────
// DÜZELTME (M-4656, GLM ek teslim): pencere ucu GÜNÜ DAHİLDİR (CLAUDE.md §4
// "Pencere ucları ölçüm değeri değil sınır işaretidir") — t = "1923-10-29" olan
// künye o gün HAYATTADIR → f <= G <= t. İlk teslimdeki f <= G < t (47) YANLIŞTI.
const devletGunde = devletler.filter((d) => d.f && d.f <= G && (!d.t || d.t >= G));
const devletlerFehiz = devletler.filter((d) => !d.f || !d.t);
const kunyeAd = (id) => {
  const d = devletler.find((x) => x.id === id);
  return d ? (d.ad || d.isim || d.isim_tr || id) : null;
};

const tumTarafIdleri = new Set();
for (const { r } of kayitlar) for (const t of r.taraflar || []) tumTarafIdleri.add(t);
const aktifTarafIdleri = new Set();
for (const { r } of aktif) for (const t of r.taraflar || []) aktifTarafIdleri.add(t);

// D kayıtlarında geçen ama devletler.js'te künyesi olmayan taraf id'leri
const kunyesizTaraf = [...tumTarafIdleri].filter((id) => !devletler.some((d) => d.id === id)).sort();

const hicKaydiYok = devletGunde
  .filter((d) => ![...tumTarafIdleri].includes(d.id))
  .map((d) => ({ id: d.id, ad: d.ad || d.isim || "?" }));
const oGunAktifKaydiYok = devletGunde
  .filter((d) => tumTarafIdleri.has(d.id) && !aktifTarafIdleri.has(d.id))
  .map((d) => ({ id: d.id, ad: d.ad || d.isim || "?" }));

// Komşuluk: D kayıtlarının taraflarından (tüm dönemler). devletler_harita.js
// (56 MB ham poligon havuzu; devlet→poligon eşlemesi donemler.js ekleminde)
// sayısal komşuluk çıkarımı için kullanılamadı → "ölçülemedi" beyanı.
const bilinenCiftler = new Set();
for (const { r } of kayitlar) {
  const t = (r.taraflar || []).slice().sort();
  if (t.length === 2) bilinenCiftler.add(t.join(" × "));
}
const ciftGundeKayitsiz = [];
for (const c of [...bilinenCiftler].sort()) {
  const [a, b] = c.split(" × ");
  const aYaşıyor = devletGunde.some((d) => d.id === a);
  const bYaşıyor = devletGunde.some((d) => d.id === b);
  if (!aYaşıyor || !bYaşıyor) continue;
  const varMi = aktif.some(({ r }) => {
    const t = (r.taraflar || []).slice().sort();
    return t.length === 2 && t.join(" × ") === c;
  });
  if (!varMi) ciftGundeKayitsiz.push(c);
}

// ── 5. Hassasiyet (çizgili küme üzerinde) ────────────────────────────────────
// Küme seçimi: 193'ü tutan varyant V1 (hat var). Şartname "çizgili 193" der;
// onu üreten tanım V1'dir (V2 = V1 − hat taşıyan YOK'lar).
const kume = cizgiliV1;
// Müstakil bantlar (toplamı veri taşıyan n = 193 − değer-yok); yanına kümülatif de yazılır.
const bantlar = [["0–0,5", 0, 0.5], ["0,5–1", 0.5, 1], ["1–2", 1, 2], ["2–5", 2, 5], ["5–10", 5, 10], [">10", 10, Infinity]];
const kesinlikYok = kume.filter(({ r }) => typeof r.kesinlik_km !== "number").map(({ r }) => r.id);
const degerli = kume.filter(({ r }) => typeof r.kesinlik_km === "number");
const kesinlikBant = {};
for (const [e, alt, ust] of bantlar) {
  kesinlikBant[e] = degerli.filter(({ r }) => r.kesinlik_km > alt && r.kesinlik_km <= ust).length;
}
const kesinlikKumulatif = {
  "≤0,5": degerli.filter(({ r }) => r.kesinlik_km <= 0.5).length,
  "≤1": degerli.filter(({ r }) => r.kesinlik_km <= 1).length,
  "≤2": degerli.filter(({ r }) => r.kesinlik_km <= 2).length,
  "≤5": degerli.filter(({ r }) => r.kesinlik_km <= 5).length,
  "≤10": degerli.filter(({ r }) => r.kesinlik_km <= 10).length,
  ">10": degerli.filter(({ r }) => r.kesinlik_km > 10).length,
};
const km10danKotu = kume
  .filter(({ r }) => typeof r.kesinlik_km === "number" && r.kesinlik_km > 1)
  .map(({ r, dosya }) => ({ id: r.id, kesinlik_km: r.kesinlik_km, taraflar: r.taraflar, dosya }))
  .sort((a, b) => b.kesinlik_km - a.kesinlik_km);

const geometriDagilim = {};
const geometriOzet = {};
const geometriSinif = (g) => {
  if (g.includes("Natural Earth 10m admin-0")) return "NE 10m admin-0 (bugünkü sınır)";
  if (g.includes("Natural Earth 10m")) return "NE 10m (diğer — nehir vb.)";
  if (g.includes("antlaşma")) return "antlaşma metninden (cetvel/meridyen/paralel)";
  if (g.includes("IBS")) return "IBS kökenli";
  if (g.includes("hesap")) return "hesap (yarım daire vb.)";
  return "diğer";
};
for (const { r } of kume) {
  const g = r.geometri_kaynagi || "(yok)";
  geometriDagilim[g] = (geometriDagilim[g] || 0) + 1;
  const s = geometriSinif(g);
  geometriOzet[s] = (geometriOzet[s] || 0) + 1;
}

// ── 6. Çıktılar ─────────────────────────────────────────────────────────────
const rapor = {
  gorev: "GLM-1 · D1923-OLCUM",
  gun: G,
  betik: "glm/d1923.js",
  evren: {
    dosyalar: DOSYALAR,
    toplam_kayit: kayitlar.length,
    dosya_bazinda: Object.fromEntries(DOSYALAR.map((d) => {
      const v = "D_SINIRLAR" + (d === "d_sinirlar.js" ? "" : "_" + d.replace("d_sinirlar_", "").replace(".js", "").toUpperCase());
      return [d, ctx.window[v] ? ctx.window[v].length : 0];
    })),
  },
  on_olcum: on,
  cizgisiz: {
    adet: cizgisizListe.length,
    tanim: "aktif && hat YOK (319 − 193 = 126)",
    ayrica_hat_tasiyan_sinif_YOK: hatTasiyanYok.map(({ r }) => ({ id: r.id, sinif: r.sinif, not: r.not || "" })),
    sebep_sinifina_gore: cizgisizSebepSinifi,
    taraf_ciftine_gore: cizgisizTarafCifti,
    bolgeye_gore: cizgisizBolge,
    liste: cizgisizListe,
  },
  kapsam: {
    tanim: "günde yaşayan devlet: künye f <= G <= t (pencere ucu GÜNÜ DAHİL — M-4656 düzeltmesi; ilk teslimdeki f <= G < t yanlıştı, 47 veriyordu)",
    gunde_devlet_sayisi: devletGunde.length,
    fe_veya_t_eksik_kunye: devletlerFehiz.length,
    d_kaydinda_gecip_kunyesi_olmayan_taraf_idleri: kunyesizTaraf,
    hic_d_kaydi_olmayan_devletler: hicKaydiYok,
    o_gun_aktif_d_kaydi_olmayan_devletler: oGunAktifKaydiYok,
    bilinen_komsu_cifti_adedi: bilinenCiftler.size,
    ikisi_de_gunde_yasayan_ciftten_aktif_kaydi_olmayanlar: ciftGundeKayitsiz,
    komsuluk_devletler_haritadan: "ölçülemedi — devletler_harita.js 56 MB ham poligon havuzudur (window.DEVLET_PARCALAR); devlet→parça eşlemesi donemler.js ekleminde, dosyanın kendisinden komşuluk çıkarılamaz",
  },
  hassasiyet: {
    kume: "çizgili (hat var, n=" + kume.length + ")",
    kesinlik_km_bantlari_mustakil: kesinlikBant,
    kesinlik_km_kumulatif: kesinlikKumulatif,
    deger_tasiyan: degerli.length,
    kesinlik_km_yok: kesinlikYok,
    medyan_kesinlik_km: (() => {
      const s = kume.map(({ r }) => r.kesinlik_km).filter((v) => typeof v === "number").sort((a, b) => a - b);
      return s.length ? s[Math.floor(s.length / 2)] : null;
    })(),
    min_kesinlik_km: Math.min(...kume.map(({ r }) => r.kesinlik_km).filter((v) => typeof v === "number")),
    max_kesinlik_km: Math.max(...kume.map(({ r }) => r.kesinlik_km).filter((v) => typeof v === "number")),
    bir_km_den_kotu_sayi: km10danKotu.length,
    bir_km_den_kotu_liste: km10danKotu,
    geometri_kaynagi_dagilim_ozet: geometriOzet,
    geometri_kaynagi_dagilim_tam: geometriDagilim,
  },
};

fs.writeFileSync(path.join(__dirname, "D1923-OLCUM.json"), JSON.stringify(rapor, null, 2), "utf8");

// ── 7. Özet tablolar (md) ───────────────────────────────────────────────────
const L = [];
L.push("# GLM-1 · D1923-OLCUM — 1923-10-29 sınır çizgileri envanteri");
L.push("");
L.push("- Betik: `glm/d1923.js` (aynı sayılar bu betikten yeniden üretilebilir; JSON: `glm/D1923-OLCUM.json`)");
L.push("- Yöntem: `data/d_sinirlar*.js` (9 dosya) node `vm` ile `window` bağlamında; aktiflik `f <= 1923-10-29 && (!t || t >= 1923-10-29)`.");
L.push("");
L.push("## 1 · Ön ölçüm doğrulaması");
L.push("");
L.push("| ölçüm | beklenen | ölçülen | tuttu mu |");
L.push("|---|---|---|---|");
L.push("| aktif D kaydı | 319 | " + aktif.length + " | " + (aktif.length === 319 ? "✓" : "✗") + " |");
L.push("| çizgisi olan (hat var) | 193 | " + cizgiliV1.length + " | " + (cizgiliV1.length === 193 ? "✓" : "✗") + " |");
L.push("| çizgisi olmayan (hat YOK) | 126 | " + cizgisiz.length + " | " + (cizgisiz.length === 126 ? "✓" : "✗") + " |");
L.push("| nokta (hat tepeleri) | 17.133 | " + noktaSayisi.toLocaleString("tr-TR") + " | " + (noktaSayisi === 17133 ? "✓" : "✗") + " |");
L.push("| Natural Earth 10m admin-0 (bugünkü sınır) | 185 | " + neAdmin0 + " | " + (neAdmin0 === 185 ? "✓" : "✗") + " |");
L.push("");
L.push(on.not);
if (neDiger.length) {
  L.push("");
  L.push("NE-toplam (" + (neAdmin0 + neDiger.length) + ") ≠ 185: " + neDiger.length +
    " kayıt NE ama admin-0 değil — " + neDiger.map(({ r }) => "`" + r.id + "` (" + r.geometri_kaynagi + ")").join("; "));
}
L.push("");
L.push("## 2 · Çizgisiz " + cizgisizListe.length + " kayıt");
L.push("");
L.push("### Sebep sınıfına göre");
L.push("");
L.push("| sebep sınıfı | adet |");
L.push("|---|---|");
for (const [k, v] of Object.entries(cizgisizSebepSinifi)) L.push("| " + k + " | " + v.adet + " |");
L.push("");
L.push("### Bölgeye göre (dosya adından)");
L.push("");
L.push("| bölge | adet |");
L.push("|---|---|");
for (const [k, v] of Object.entries(cizgisizBolge)) L.push("| " + k + " | " + v.adet + " |");
L.push("");
L.push("### Taraf çiftine göre (ilk 25 satır — tam liste JSON'da)");
L.push("");
L.push("| taraf çifti | adet |");
L.push("|---|---|");
let i = 0;
for (const [k, v] of Object.entries(cizgisizTarafCifti)) { L.push("| " + k + " | " + v.adet + " |"); if (++i >= 25) break; }
if (Object.keys(cizgisizTarafCifti).length > 25) L.push("| …(" + (Object.keys(cizgisizTarafCifti).length - 25) + " satır daha — JSON) | |");
L.push("");
L.push("### Tam liste");
L.push("");
L.push("| id | taraflar | dosya | kategori/sinif | sebep sınıfı | sebep (kısaltılmış) |");
L.push("|---|---|---|---|---|---|");
for (const x of cizgisizListe) {
  const sebep = x.sebep.length > 90 ? x.sebep.slice(0, 87) + "…" : x.sebep;
  L.push("| `" + x.id + "` | " + x.taraflar.join(" × ") + " | " + x.dosya + " | " + (x.kategori || "-") + "/" + (x.sinif || "-") + " | " + x.sebep_sinifi + " | " + sebep + " |");
}
L.push("");
L.push("## 3 · Kapsam boşluğu");
L.push("");
L.push("- 1923-10-29'da yaşayan devlet (künye `f <= G <= t` — pencere ucu GÜNÜ DAHİL, M-4656 düzeltmesi): **" + devletGunde.length + "** (f/t'si eksik künye: " + devletlerFehiz.length + ")");
L.push("- D kayıtlarında geçip `devletler.js`te künyesi OLMAYAN taraf id: **" + kunyesizTaraf.length + "**" + (kunyesizTaraf.length ? " → " + kunyesizTaraf.map((x) => "`" + x + "`").join(", ") : ""));
L.push("- **HİÇ D kaydı olmayan** yaşayan devlet: **" + hicKaydiYok.length + "**");
if (hicKaydiYok.length) {
  L.push("");
  L.push("| devlet | ad |");
  L.push("|---|---|");
  for (const d of hicKaydiYok) L.push("| `" + d.id + "` | " + d.ad + " |");
}
L.push("");
L.push("- O gün aktif D kaydı olmayan (ama başka dönemde kaydı olan) yaşayan devlet: **" + oGunAktifKaydiYok.length + "**");
if (oGunAktifKaydiYok.length) {
  L.push("");
  L.push("| devlet | ad |");
  L.push("|---|---|");
  for (const d of oGunAktifKaydiYok) L.push("| `" + d.id + "` | " + d.ad + " |");
}
L.push("");
L.push("- Taraflardan çıkan bilinen komşu çifti (tüm dönemler): **" + bilinenCiftler.size + "**; ikisi de G günü yaşayıp **aktif kaydı olmayan** çift: **" + ciftGundeKayitsiz.length + "**");
if (ciftGundeKayitsiz.length) {
  L.push("");
  for (const c of ciftGundeKayitsiz) L.push("  - " + c);
}
L.push("");
L.push("- Komşuluğun `devletler_harita.js`den ölçümü: **ölçülemedi** — dosya 56 MB ham poligon havuzudur (`window.DEVLET_PARCALAR`); devlet→parça eşlemesi `donemler.js` ekleminde, dosyanın kendisinden komşuluk çıkarılamaz.");
L.push("");
L.push("## 4 · Hassasiyet (çizgili n=" + kume.length + " üzerinde)");
L.push("");
L.push("`kesinlik_km` dağılımı — **müstakil bantlar** (medyan " + rapor.hassasiyet.medyan_kesinlik_km.toLocaleString("tr-TR") +
  " · min " + rapor.hassasiyet.min_kesinlik_km + " · maks " + rapor.hassasiyet.max_kesinlik_km +
  " · değer taşıyan " + degerli.length + "/" + kume.length + "):");
L.push("");
L.push("| bant (km) | adet | kümülatif (≤/>) |");
L.push("|---|---|---|");
const kumEtiket = ["≤0,5", "≤1", "≤2", "≤5", "≤10", ">10"];
bantlar.forEach(([e], ix) => L.push("| " + e + " | " + kesinlikBant[e] + " | " + kumEtiket[ix] + ": " + kesinlikKumulatif[kumEtiket[ix]] + " |"));
L.push("| değer yok | " + kesinlikYok.length + " | — |");
if (kesinlikYok.length) {
  L.push("");
  L.push("Değersizler: " + kesinlikYok.map((x) => "`" + x + "`").join(", "));
}
L.push("");
L.push("### geometri_kaynagi dağılımı (kısa ad — tam dizge JSON'da)");
L.push("");
L.push("| kaynak | adet |");
L.push("|---|---|");
for (const [k, v] of Object.entries(geometriOzet).sort((a, b) => b[1] - a[1])) L.push("| " + k + " | " + v + " |");
L.push("");
L.push("### 1 km'den kötü çizgili kayıtlar (" + km10danKotu.length + ")");
L.push("");
L.push("| id | kesinlik_km | taraflar | dosya |");
L.push("|---|---|---|---|");
for (const x of km10danKotu) L.push("| `" + x.id + "` | " + x.kesinlik_km.toLocaleString("tr-TR") + " | " + x.taraflar.join(" × ") + " | " + x.dosya + " |");
L.push("");
fs.writeFileSync(path.join(__dirname, "D1923-OLCUM.md"), L.join("\n") + "\n", "utf8");

// ── 8. Konsol özeti ─────────────────────────────────────────────────────────
const satir = (a, b) => a.padEnd(46) + b;
console.log(satir("aktif", String(aktif.length) + (aktif.length === 319 ? "  ✓" : "  ✗ beklenen 319")));
console.log(satir("cizgili (hat var)", String(cizgiliV1.length) + (cizgiliV1.length === 193 ? "  ✓" : "  ✗")));
console.log(satir("cizgisiz (hat yok)", String(cizgisiz.length) + (cizgisiz.length === 126 ? "  ✓" : "  ✗")));
console.log(satir("hat var ama sinif YOK (ayri kalem)", String(hatTasiyanYok.length)));
console.log(satir("nokta", String(noktaSayisi) + (noktaSayisi === 17133 ? "  ✓" : "  ✗")));
console.log(satir("NE 10m admin-0", String(neAdmin0) + (neAdmin0 === 185 ? "  ✓" : "  ✗") + "  (NE diger: " + neDiger.length + ")"));
console.log(satir("gunde yasayan devlet", String(devletGunde.length)));
console.log(satir("hic D kaydi yok", String(hicKaydiYok.length)));
console.log(satir("o gun aktif kayit yok", String(oGunAktifKaydiYok.length)));
console.log(satir("kunyesiz taraf id (D icinde)", String(kunyesizTaraf.length)));
console.log(satir("bilinen komsu cifti", String(bilinenCiftler.size)));
console.log(satir("gunde kayitsiz yasayan cift", String(ciftGundeKayitsiz.length)));
console.log(satir("kesinlik>1km (cizgili)", String(km10danKotu.length)));
console.log(satir("kesinlik bantlari (mustakil)", JSON.stringify(kesinlikBant) + "  yok:" + kesinlikYok.length));
console.log("yazildi: glm/D1923-OLCUM.json · glm/D1923-OLCUM.md");

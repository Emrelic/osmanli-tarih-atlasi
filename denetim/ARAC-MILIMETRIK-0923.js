// -*- coding: utf-8 -*-
// denetim/ARAC-MILIMETRIK-0923.js — MİLİMETRİK SINIR KURALLARININ VERİ DENETİMİ
// Emre, 23 Eylül 2026 ("TK D tipi sınırların gösterimi"). Kod tarafı js/d_katman.js.
//
//   ① ANAKRONİZM YOK — aynı hat (birebir aynı koordinat dizisi) aynı görünümde
//      iki kayıtla AYNI GÜN çizilmez; ardıl kayıt gelince öncül biter.
//   ② YÜRÜRLÜKTEN ÖNCE ÇİZİLMEZ — kaydın `f`si, dayandığı belgenin gününden
//      önce olamaz. Belge `dayanak[].tarih`ten okunur; `f` ile birebir eşleşen
//      dayanak yoksa "f dayanaksız" SAYILIR (hüküm değil, ölçüm).
//   + pencere sağlığı (f < t) · hayalet taraf (hat penceresi künyeyi aşıyor mu)
//     · `1923-10-29` pencere sonu (tasarım günü, tarihî bitiş değil)
//
// Kullanım:  node denetim/ARAC-MILIMETRIK-0923.js            (pilot: D_SINIRLAR)
//            node denetim/ARAC-MILIMETRIK-0923.js --hepsi    (bütün D aileleri)
// Çıkış kodu: ① ihlali varsa 1, yoksa 0 (② yalnız aday listesidir).
"use strict";
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
global.window = {};
const AILELER = {
  D_SINIRLAR: "d_sinirlar.js", D_SINIRLAR_KOMSU: "d_sinirlar_komsu.js",
  D_SINIRLAR_AVRUPA_BATI: "d_sinirlar_avrupa_bati.js", D_SINIRLAR_AVRUPA_ORTA: "d_sinirlar_avrupa_orta.js",
  D_SINIRLAR_ORTADOGU: "d_sinirlar_ortadogu.js", D_SINIRLAR_AFRIKA: "d_sinirlar_afrika.js",
  D_SINIRLAR_ASYA: "d_sinirlar_asya.js", D_SINIRLAR_AMERIKA: "d_sinirlar_amerika.js",
  D_SINIRLAR_OKYANUSYA: "d_sinirlar_okyanusya.js"
};
const hepsi = process.argv.includes("--hepsi");
const secili = hepsi ? Object.keys(AILELER) : ["D_SINIRLAR"];
secili.forEach(a => require(path.join(KOK, "data", AILELER[a])));
require(path.join(KOK, "data", "devletler.js"));
const KUNYE = {};
(window.DEVLETLER || []).forEach(k => { KUNYE[k.id] = k; });

// js/d_katman.js _dEtkinSinif ile AYNI eşleme
function sinif(k) {
  if (k.sinif) return k.sinif;
  return { D: "E", fiili: "D", C: "C" }[k.kategori] || "YOK";
}
const pad = s => (s == null ? s : String(s).replace(/^(\d{3})-/, "0$1-"));  // CLAUDE.md §3.5: üç haneli yıl
const PENCERE_SONU = "1923-10-29";

const kayitlar = [];
secili.forEach(a => (window[a] || []).forEach(k => kayitlar.push(Object.assign({ _aile: a }, k))));
const cizilen = kayitlar.filter(k => Array.isArray(k.hat) && k.hat.length >= 2 && sinif(k) !== "YOK");

const ihlal1 = [], ihlal2 = [], dayanaksiz = [], pencere = [], hayalet = [];
let pencereSonu = 0;

// pencere sağlığı + ② + hayalet
cizilen.forEach(k => {
  const f = pad(k.f), t = pad(k.t);
  if (!f || (t && t <= f)) pencere.push(`${k.id}: f=${k.f} t=${k.t}`);
  if (k.t === PENCERE_SONU) pencereSonu++;
  const tarihli = (k.dayanak || []).filter(d => d.tarih).map(d => pad(String(d.tarih).slice(0, 10)));
  if (!tarihli.includes(f)) {
    dayanaksiz.push(`${k.id}: f=${k.f} · dayanak günleri ${tarihli.join(", ") || "yok"}`);
    // ②: f'den SONRA tarihli dayanakların hepsi f'yi aşıyorsa ve f'den önce/eşit
    // tarihli HİÇ dayanak yoksa hat belgesinden önce çiziliyor demektir.
    // ⚠️ ADAY, hüküm değil: `dayanak` listesinde antlaşmanın yanında modern
    // kaynak da durur (IBS 1964–1993). Hepsi f'den sonraysa ya hat belgesinden
    // önce çiziliyordur ya da antlaşma kaydı eksiktir — elle sınıflandırılır.
    if (tarihli.length && tarihli.every(d => d > f))
      ihlal2.push(`${k.id}: f=${k.f} ama en erken dayanak ${tarihli.sort()[0]}`);
  }
  (k.taraflar || []).forEach(id => {
    const ku = KUNYE[id];
    if (!ku) return;   // osmanli gibi künyesiz gövdeler (donemler.js) — kusur değil
    if ((ku.f && pad(ku.f) > f) || (ku.t && t && pad(ku.t) < t))
      hayalet.push(`${k.id}: taraf ${id} künyesi ${ku.f}→${ku.t}, hat ${k.f}→${k.t}`);
  });
});

// ①: aynı hat + aynı görünüm ailesi (hukukî: F/E/C · fiilî: D) + zaman örtüşmesi
const grup = {};
cizilen.forEach(k => {
  const gorunum = sinif(k) === "D" ? "fiili" : "hukuki";
  const a = gorunum + "|" + JSON.stringify(k.hat);
  (grup[a] = grup[a] || []).push(k);
});
let zincir = 0;
Object.values(grup).forEach(g => {
  if (g.length < 2) return;
  g.sort((x, y) => (pad(x.f) < pad(y.f) ? -1 : 1));
  zincir++;
  for (let i = 0; i + 1 < g.length; i++) {
    const a = g[i], b = g[i + 1];
    if (!a.t || pad(a.t) > pad(b.f))
      ihlal1.push(`${a.id} (${a.f}→${a.t}) ile ${b.id} (${b.f}→${b.t}) aynı hatta ÜST ÜSTE — öncül ardıl gelince bitmiyor`);
  }
});

const yaz = (baslik, dizi, en = 12) => {
  console.log(`\n${baslik}: ${dizi.length}`);
  dizi.slice(0, en).forEach(s => console.log("   " + s));
  if (dizi.length > en) console.log(`   … +${dizi.length - en}`);
};
console.log(`MİLİMETRİK SINIR DENETİMİ · aile: ${secili.join(", ")}`);
console.log(`kayıt ${kayitlar.length} · çizilen (hat var, sınıf≠YOK) ${cizilen.length} · aynı hatta zincir ${zincir}`);
yaz("① anakronizm — aynı hat aynı görünümde üst üste", ihlal1);
yaz("② ADAY — bütün tarihli dayanaklar f'den SONRA (hat belgesinden önce mi çiziliyor, antlaşma kaydı mı eksik? elle sınıflandır)", ihlal2);
yaz("pencere bozuk (f yok / t ≤ f)", pencere);
yaz("hayalet taraf (hat penceresi künyeyi aşıyor)", hayalet);
yaz("f dayanaksız (f ile birebir eşleşen dayanak günü yok — ölçüm, hüküm değil)", dayanaksiz, 8);
console.log(`\npencere sonu ${PENCERE_SONU}'da biten: ${pencereSonu}/${cizilen.length} (tasarım günü — tarihî bitiş değil)`);
process.exit(ihlal1.length ? 1 : 0);

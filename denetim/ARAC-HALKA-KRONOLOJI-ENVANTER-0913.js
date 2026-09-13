// ARAC-HALKA-KRONOLOJI-ENVANTER-0913 — HALKA-KRONOLOJI · 13 Eylül 2026
// ADIM 1 · ENVANTER: "X yeri Z tarihinden itibaren Y devletinindir" diyebilecek alanların sayımı.
// Kullanım: node denetim/ARAC-HALKA-KRONOLOJI-ENVANTER-0913.js [--json çıktı.json]
const L = require("./ARAC-HALKA-KRONOLOJI-YUKLE-0913.js");
const { dosyalar, hepsi } = L.maddeler();
const { ix: yerIx, Y } = L.yerlesimler();
const { D } = L.devletler();
const SV = L.savaslar();
const say = (arr, fn) => arr.reduce((a, o) => { for (const k of [].concat(fn(o))) if (k !== undefined) a[k] = (a[k] || 0) + 1; return a; }, {});
const sirala = o => Object.fromEntries(Object.entries(o).sort((a, b) => b[1] - a[1]));
const out = {};
const kova = { cekirdek: hepsi.filter(o => o._kova === "cekirdek"), kuyruk: hepsi.filter(o => o._kova === "kuyruk") };
out.dosya = { toplam: dosyalar.length, cekirdek: dosyalar.filter(f => /olaylar/.test(f)).length, kuyruk: dosyalar.filter(f => /kronoloji/.test(f)).length };
out.madde = { toplam: hepsi.length, cekirdek: kova.cekirdek.length, kuyruk: kova.kuyruk.length };
out.alan_doluluk = {};
for (const [kv, arr] of Object.entries(kova)) out.alan_doluluk[kv] = sirala(say(arr, o => Object.keys(o).filter(k => !k.startsWith("_") && o[k] !== "" && !(Array.isArray(o[k]) && !o[k].length))));
const TOPRAK_K = ["fetih", "kayip", "antlasma", "vassal", "kazanc", "idari", "kusatma", "sefer", "kurulus"];
out.k_toprak_ilgili = Object.fromEntries(Object.entries(say(hepsi, o => o.k)).filter(([k]) => TOPRAK_K.includes(k)));
const TOPRAK_TUR = ["fetih", "toprak-kazanc", "toprak-kayip", "isgal", "vassal", "tabiiyet", "itaat", "toprak", "antlasma", "kusatma", "sefer", "birlesme", "yikilis", "son", "kurulus"];
out.tur_toprak_ilgili = Object.fromEntries(Object.entries(say(hepsi, o => o.tur)).filter(([k]) => TOPRAK_TUR.includes(k)));
const ETK = ["toprak-kazanc", "toprak-kayip", "toprak-kaybi", "fetih", "isgal", "tabiiyet", "vassal", "kayip", "toprak", "kusatma", "sefer", "akin", "yagma", "antlasma"];
out.etiket_toprak_ilgili = Object.fromEntries(Object.entries(say(hepsi, o => o.etiket || [])).filter(([k]) => ETK.includes(k)));
// yer
const yi = { yok: 0, bos: 0, tek: 0, cok: 0, cozulmez: 0 };
for (const o of hepsi) { if (o.yer_id === undefined) yi.yok++; else if (!o.yer_id) yi.bos++; else { const n = (yerIx[o.yer_id] || []).length; n === 1 ? yi.tek++ : n > 1 ? yi.cok++ : yi.cozulmez++; } }
out.yer_id = yi;
out.yer_kon = { var: hepsi.filter(o => Array.isArray(o.yer_kon)).length, yer_id_olmadan: hepsi.filter(o => Array.isArray(o.yer_kon) && !o.yer_id).length };
out.yer_metin = hepsi.filter(o => o.yer).length;
// kaynak
const kSinif = o => { const s = String(o.kaynak || ""); if (!s.trim()) return "yok";
  if (/bulunamad/i.test(s)) return /^\s*bulunamad/i.test(s) ? "bulunamadi_ile_baslar" : "bulunamadi_icerir";
  if (/ölçülemedi|olculemedi|alınamad|okunmad/i.test(s)) return "olculemedi_okunmadi";
  if (/devletler\.js|savaslar\.js|yerlesimler|data\/|\batlas|künye|kunye|^veri\b/i.test(s)) return "atlas_veri_atfi";
  if (/^[a-z0-9-]+$/.test(s.trim())) return "yalin_slug";
  return "metin"; };
out.kaynak = { cekirdek: sirala(say(kova.cekirdek, kSinif)), kuyruk: sirala(say(kova.kuyruk, kSinif)) };
out.kapsam_genis = hepsi.filter(o => o.kapsam_genis).length;
out.ic_not = { gun: hepsi.filter(o => o.ic_not_gun).length, d: hepsi.filter(o => o.ic_not_d).length, b: hepsi.filter(o => o.ic_not_b).length,
  atlas_tarih_ifadesi: hepsi.filter(o => /atlas|hizala|devral|komşu kay/i.test([o.ic_not_gun, o.ic_not_d, o.ic_not_b].join(" "))).length };
// açık devlet alanları
out.acik_devlet_alani = {
  devlet: hepsi.filter(o => o.devlet).length, kunye_dolu: hepsi.filter(o => Array.isArray(o.kunye) && o.kunye.length).length,
  fethedilen: hepsi.filter(o => o.fethedilen).length, kaybedilen: hepsi.filter(o => o.kaybedilen).length,
  statu_dogrudan: hepsi.filter(o => o.statu_dogrudan).length, statu_vasal: hepsi.filter(o => o.statu_vasal).length,
  not: "fethedilen/kaybedilen/statu_* HARİTA SENKRON alanlarıdır (atlasın hangi yerleşimi değiştirdiği) — kaynak tanıklığı DEĞİL"
};
out.tarih_bicimi = say(hepsi, o => String(o.t).length === 7 ? "YYYY-MM" : /-01-01$/.test(o.t) ? "YYYY-01-01" : /-01$/.test(o.t) ? "YYYY-MM-01" : "YYYY-MM-DD");
out.gun_alani = hepsi.filter(o => o.gun).length;
// künye gömülü kronolojisi
const kk = D.flatMap(d => (d.kronoloji || []).map(x => Object.assign({ _kunye: d.id }, x)));
out.kunye_kronolojisi = { kunye: D.length, kronolojili_kunye: D.filter(d => (d.kronoloji || []).length).length, madde: kk.length,
  kaynakli: kk.filter(x => x.kaynak && !/bulunamad/i.test(x.kaynak)).length, yer_alani: kk.filter(x => x.yer_id || x.yer || x.yer_kon).length,
  tur: sirala(say(kk, x => x.tur)) };
out.savaslar = { SAVASLAR: SV.SAVASLAR.length, galip_dolu: SV.SAVASLAR.filter(s => s.galip).length,
  kusatma_zafer: SV.SAVASLAR.filter(s => s.tur === "kusatma" && s.galip).length, kaynak_alani: SV.SAVASLAR.filter(s => s.kaynak).length,
  ANTLASMALAR: SV.ANTLASMALAR.length, topraklar_metni: SV.ANTLASMALAR.filter(a => a.topraklar).length, antlasma_kaynak_alani: SV.ANTLASMALAR.filter(a => a.kaynak).length,
  SEFERLER: SV.SEFERLER.length };
out.havuz = { yerlesim: Y.length, kunye: D.length };
const j = process.argv.indexOf("--json");
if (j > 0) require("fs").writeFileSync(process.argv[j + 1], JSON.stringify(out, null, 1));
console.log(JSON.stringify(out, null, 1));

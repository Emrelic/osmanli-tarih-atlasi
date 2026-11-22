// DIZIN EKSIKSIZLIK DENETIMI (salt okuma, veri yazmaz). node arac/dizin_denetim.js > cikti.json
const { win } = require("./dizin_olc.js");
const N = s => String(s == null ? "" : s).toLocaleLowerCase("tr")
  .replace(/[âäàá]/g, "a").replace(/[îïìí]/g, "i").replace(/[ûüùú]/g, "u").replace(/[ôöòó]/g, "o").replace(/[êëèé]/g, "e")
  .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/[ʿʾ’'`´]/g, "")
  .replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
const NP = s => N(String(s).replace(/\([^)]*\)/g, " "));            // parantezsiz
const arr = k => (Array.isArray(win[k]) ? win[k] : []);
const olKeys = Object.keys(win).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(win[k]));
const krKeys = Object.keys(win).filter(k => /^KRONOLOJI/.test(k) && Array.isArray(win[k]) && win[k].length && win[k][0] && win[k][0].t && win[k][0].b);
const A = olKeys.reduce((a, k) => a.concat(win[k].map(o => Object.assign({ _k: k }, o))), []);
const B = krKeys.reduce((a, k) => a.concat(win[k].map(o => Object.assign({ _k: k }, o))), []);
const M = A.concat(B);
const KISI = win.KISILER, PAD = win.PADISAHLAR, SAV = win.SAVASLAR, ANT = win.ANTLASMALAR, SER = win.SERILER,
  SEH = win.SEHIRLER, DEV = win.DEVLETLER, SEF = Object.keys(win).filter(k => /^SEFERLER/.test(k) && Array.isArray(win[k])).reduce((a, k) => a.concat(win[k]), []);
const YER = Object.keys(win).filter(k => /^YERLESIMLER(_[A-Z0-9_]+)?$/.test(k) && Array.isArray(win[k])).reduce((a, k) => a.concat(win[k]), []);
const out = { evren: { OLAYLAR: A.length, KRONOLOJI: B.length, olaylar_dizileri: olKeys.length, kronoloji_dizileri: krKeys.length, KISILER: KISI.length, PADISAHLAR: PAD.length, SAVASLAR: SAV.length, ANTLASMALAR: ANT.length, SERILER: SER.length, SEHIRLER: SEH.length, DEVLETLER: DEV.length, YERLESIMLER_toplam: YER.length } };
const ilk = (a, n) => a.slice(0, n);
const sayim = (liste, f) => { const m = new Map(); liste.forEach(x => { const k = f(x); m.set(k, (m.get(k) || 0) + 1); }); return [...m.entries()].sort((a, b) => b[1] - a[1]); };

// ---------- (1a) KISI ----------
const kisiAd = new Map();               // normalleşmiş ad -> kayit
const kisiIdSet = new Set();
KISI.concat(PAD).forEach(k => { kisiIdSet.add(k.id); [k.ad, NP(k.ad), ...(k.lakap || [])].forEach(a => { if (a) kisiAd.set(N(a), k.id); kisiAd.set(NP(a), k.id); }); });
const kisiKelimeler = [];
KISI.concat(PAD).forEach(k => kisiKelimeler.push([" " + NP(k.ad) + " ", k.id]));
const BASLIK = new Set("sultan pasa bey han sah hz hazreti hatun efendi kral imparator emir halife melik".split(" "));
const kumeTok = t => N(String(t).replace(/[()]/g, " ")).split(" ").filter(w => w && !BASLIK.has(w));
const kisiKumeler = KISI.concat(PAD).map(k => [new Set(kumeTok(k.ad + " " + (k.lakap || []).join(" "))), k.id]);
function kisiVar(tok) {
  const n = N(tok), p = NP(tok);
  if (!n) return null;
  if (kisiAd.has(n)) return ["tam", kisiAd.get(n)];
  if (kisiAd.has(p)) return ["tam", kisiAd.get(p)];
  if (p.length >= 5) { const h = kisiKelimeler.find(([ad]) => ad.includes(" " + p + " ")); if (h) return ["kismi", h[1]]; }
  const ts = kumeTok(tok);
  if (ts.length >= 2) { const h = kisiKumeler.find(([k]) => ts.every(w => k.has(w))); if (h) return ["kume", h[1]]; }
  return null;
}
const tokSay = new Map(), tokKayit = new Map(); let tokTop = 0, tokTam = 0, tokKismi = 0, tokKume = 0, tokYok = 0, kisiliMadde = 0;
const kisiBaglanan = new Set();
M.forEach(o => {
  if (!o.kisiler) return; kisiliMadde++;
  String(o.kisiler).split(/\s*[,;\/]\s*|\s+ve\s+/).map(s => s.trim()).filter(Boolean).forEach(t => {
    tokTop++; const r = kisiVar(t);
    if (r) { if (r[0] === "tam") tokTam++; else if (r[0] === "kume") tokKume++; else tokKismi++; kisiBaglanan.add(r[1]); }
    else { tokYok++; tokSay.set(t, (tokSay.get(t) || 0) + 1); }
  });
});
const vefatRef = A.filter(o => o.vefat_id).map(o => o.vefat_id), kisiIdRef = M.filter(o => o.kisi_id).map(o => o.kisi_id);
const bozukKisiId = [...new Set(vefatRef.concat(kisiIdRef).filter(i => !kisiIdSet.has(i)))];
vefatRef.concat(kisiIdRef).forEach(i => kisiBaglanan.add(i));
out.kisi = {
  kisiler_alanli_madde: kisiliMadde, parca_toplam: tokTop, tam_eslesen: tokTam, kismi_eslesen: tokKismi, sozcuk_kumesi_eslesen: tokKume, dizinde_YOK: tokYok,
  dizinde_YOK_benzersiz: tokSay.size, vefat_id_kisi_id_referans: vefatRef.length + kisiIdRef.length, dizinde_olmayan_id: bozukKisiId,
  en_sik_yok_20: ilk([...tokSay.entries()].sort((a, b) => b[1] - a[1]), 20)
};
const kisiYetim = KISI.filter(k => !kisiBaglanan.has(k.id)); const padYetim = PAD.filter(k => !kisiBaglanan.has(k.id));
out.kisi.yetim_KISILER = kisiYetim.length; out.kisi.yetim_KISILER_tur = sayim(kisiYetim, k => k.tur);
out.kisi.yetim_ilk20 = ilk(kisiYetim.map(k => k.id + " | " + k.ad + " | " + k.tur), 20);
out.kisi.yetim_PADISAHLAR = padYetim.map(k => k.id);

// ---------- (1b) SAVAS / ANTLASMA / SEFER / SERI ----------
const gunNo = s => { const m = /^(-?\d{1,4})-?(\d{2})?-?(\d{2})?/.exec(String(s || "")); if (!m) return null; return Date.UTC(+m[1], (+m[2] || 1) - 1, +m[3] || 1) / 864e5; };
const durak = new Set("ve ile bin sonra savasi muharebesi kusatmasi zaferi seferi harbi baskini the of".split(" "));
function savasMadde(s) {
  const ad = NP(s.ad).split(" ").filter(w => w.length >= 4 && !durak.has(w)); const g = gunNo(s.t); if (g == null || !ad.length) return null;
  return M.find(o => { const og = gunNo(o.t); if (og == null || Math.abs(og - g) > 5) return false; const b = N(o.b + " " + (o.yer_id || "")); return ad.some(w => b.includes(w)); }) || null;
}
const savYetim = SAV.filter(s => !savasMadde(s));
out.savas = { toplam: SAV.length, maddesi_olan_buluntu: SAV.length - savYetim.length, yetim: savYetim.length, ilk20: ilk(savYetim.map(s => s.t + " | " + s.ad), 20),
  yontem: "madde ±5 gün + savaş adındaki ≥4 harfli sözcüklerden biri madde b/yer_id'sinde; savaş kaydında madde kimliği alanı YOK (heuristik)" };
const antIdler = new Set(arr("ANTLASMA_MADDELERI").map(a => a.id));
const antRef = M.filter(o => o.antlasma_id).map(o => o.antlasma_id);
function antMadde(a) { const ad = NP(a.ad).split(" ").filter(w => w.length >= 4 && !durak.has(w) && w !== "antlasmasi" && w !== "baris"); const g = gunNo(a.t); if (g == null) return null;
  return M.find(o => { const og = gunNo(o.t); if (og == null || Math.abs(og - g) > 15) return false; const b = N(o.b); return (o.tur === "antlasma" || /antlasma|baris|muahede|ahidname|sulh|ittifak|treaty|peace/.test(b)) && ad.some(w => b.includes(w)); }) || null; }
const antYetim = ANT.filter(a => !antMadde(a));
out.antlasma = { toplam: ANT.length, maddesi_olan: ANT.length - antYetim.length, yetim: antYetim.length, ilk20: ilk(antYetim.map(a => a.t + " | " + a.ad), 20),
  antlasma_id_referans: antRef.length, antlasma_id_ANTLASMA_MADDELERI_icinde_YOK: [...new Set(antRef.filter(i => !antIdler.has(i)))],
  ANTLASMA_MADDELERI_kayit_sayisi: antIdler.size,
  yontem: "ANTLASMALAR kaydında id alanı YOK; madde ±15 gün + ad sözcüğü (heuristik)" };
const seferIds = new Set(SEF.map(s => s.id).filter(Boolean)); const seferRef = [].concat(...M.filter(o => o.sefer_id).map(o => [].concat(o.sefer_id)));
out.sefer = { SEFERLER: SEF.length, id_olan: seferIds.size, sefer_id_referans: seferRef.length, sefer_id_dizinde_YOK: [...new Set(seferRef.filter(i => !seferIds.has(i)))].length, ornek: ilk([...new Set(seferRef.filter(i => !seferIds.has(i)))], 10), id_olup_hic_maddeye_baglanmayan: [...seferIds].filter(i => !seferRef.includes(i)).length };
const savSeri = new Set(SAV.map(s => s.seri).filter(Boolean)); const serIdler = new Set(SER.map(s => s.id));
const seriBos = SER.filter(s => !SAV.some(x => x.seri === s.id));
out.seri = { SERILER: SER.length, savasi_olmayan_seri: seriBos.map(s => s.id + " | " + s.ad), savasin_seri_alani_dizinde_YOK: [...savSeri].filter(i => !serIdler.has(i)), serisiz_savas: SAV.filter(s => !s.seri).length, serisiz_savas_ornek: ilk(SAV.filter(s => !s.seri).map(s => s.t + " | " + s.ad), 10) };

// ---------- (1c) DEVLET ----------
const devId = new Set(DEV.map(d => d.id)); devId.add("osmanli");
const devRef = new Map(); const bad = new Map(); let serbest = 0;
function ref(id, kaynak) { if (!id) return; if (!devRef.has(id)) devRef.set(id, new Set()); devRef.get(id).add(kaynak); if (!devId.has(id)) { if (!bad.has(id)) bad.set(id, new Set()); bad.get(id).add(kaynak); } }
M.forEach(o => {
  ["devlet", "devlet_id"].forEach(f => { if (typeof o[f] === "string") ref(o[f], "madde." + f); });
  if (Array.isArray(o.taraflar)) o.taraflar.forEach(t => ref(t, "madde.taraflar")); else if (typeof o.taraflar === "string") serbest++;
  if (Array.isArray(o.odak_kimlik)) o.odak_kimlik.forEach(t => ref(t, "madde.odak_kimlik")); else if (typeof o.odak_kimlik === "string") ref(o.odak_kimlik, "madde.odak_kimlik");
});
SAV.forEach(s => (s.taraf || []).forEach(t => ref(t, "SAVASLAR.taraf"))); ANT.forEach(a => (a.taraf || []).forEach(t => ref(t, "ANTLASMALAR.taraf")));
KISI.forEach(k => { if (k.devlet) ref(k.devlet, "KISILER.devlet"); });
YER.forEach(y => ["s", "isg"].forEach(f => (y[f] || []).forEach(p => ref(p.d, "YERLESIMLER." + f))));
SEF.forEach(s => { (s.taraf || []).forEach && (Array.isArray(s.taraf) ? s.taraf : []).forEach(t => ref(t, "SEFERLER.taraf")); if (typeof s.devlet === "string") ref(s.devlet, "SEFERLER.devlet"); });
const devYetim = DEV.filter(d => !devRef.has(d.id));
const krDevlet = DEV.filter(d => !d.kronoloji);
const TURADI = ["imparatorluk", "sultanlik", "devlet", "hanlik", "krallik", "cumhuriyet", "prenslik", "dukalik", "beylik", "ocaklik", "hanedanlik", "sehzadelik", "gecici-isgal"];
out.devlet = { toplam: DEV.length, madde_ve_veriden_referansli_benzersiz_id: devRef.size,
  dizinde_OLMAYAN_referans_id: bad.size, dizinde_OLMAYAN_ornek_20: ilk([...bad.entries()].sort((a, b) => b[1].size - a[1].size).map(([i, s]) => i + " ← " + [...s].join("+")), 20),
  taraflar_serbest_metin_madde: serbest,
  yetim_hicbir_referans_yok: devYetim.length, yetim_ilk20: ilk(devYetim.map(d => d.id + " | " + d.ad), 20),
  kronoloji_alani_bos: krDevlet.length,
  tur_alani_YOK: DEV.filter(d => !d.tur).length, tur_alani_DEV_TUR_ADI_disinda: sayim(DEV.filter(d => d.tur && !TURADI.includes(d.tur)), d => d.tur),
  tur_dagilimi: sayim(DEV, d => d.tur || "(yok)"),
  f_eksik: DEV.filter(d => !d.f).length, t_eksik: DEV.filter(d => !d.t).length, f_t_ikisi_eksik: DEV.filter(d => !d.f && !d.t).length,
  baskent_bos: DEV.filter(d => !d.baskent || /bulunamad/i.test(d.baskent)).length, baskent_alani_yok: DEV.filter(d => !d.baskent).length, baskent_bulunamadi_metni: DEV.filter(d => d.baskent && /bulunamad/i.test(d.baskent)).length,
  t_eksik_ilk20: ilk(DEV.filter(d => !d.t).map(d => d.id + " (f " + d.f + ")"), 20), tur_yok_ilk20: ilk(DEV.filter(d => !d.tur).map(d => d.id + " | " + d.ad), 20),
  baskent_bos_ilk20: ilk(DEV.filter(d => !d.baskent).map(d => d.id + " | " + d.ad), 20),
  f_gt_t: DEV.filter(d => d.f && d.t && gunNo(d.f) > gunNo(d.t)).map(d => d.id) };

// ---------- (1d) YERLESIM / SEHIR ----------
const yerAd = new Set(YER.map(y => N(y.ad))), yerAdP = new Set(YER.map(y => NP(y.ad))), sehAd = new Set(SEH.map(y => N(y.ad)));
const yerRefSet = new Set(), yerRefYok = new Map(); let yerRefToplam = 0;
M.forEach(o => {
  const l = []; if (typeof o.yer_id === "string") l.push(o.yer_id); if (Array.isArray(o.odak_yer)) o.odak_yer.forEach(x => l.push(x)); else if (typeof o.odak_yer === "string") l.push(o.odak_yer);
  l.forEach(v => { yerRefToplam++; const n = N(v), p = NP(v); if (yerAd.has(n) || yerAdP.has(p) || yerAdP.has(n) || sehAd.has(n) || sehAd.has(p)) yerRefSet.add(yerAdP.has(p) ? p : n); else yerRefYok.set(v, (yerRefYok.get(v) || 0) + 1); });
});
const yerYetim = YER.filter(y => !yerRefSet.has(NP(y.ad)) && !yerRefSet.has(N(y.ad)));
const sehYetim = SEH.filter(y => !yerRefSet.has(N(y.ad)) && !yerRefSet.has(NP(y.ad)));
const sehYerlesimde = SEH.filter(s => !yerAd.has(N(s.ad)) && !yerAdP.has(NP(s.ad)));
out.yerlesim = { YERLESIMLER: YER.length, madde_yer_id_odak_yer_referans: yerRefToplam, dizinde_YOK_benzersiz: yerRefYok.size, dizinde_YOK_ornek_20: ilk([...yerRefYok.entries()].sort((a, b) => b[1] - a[1]).map(e => e[0] + " (" + e[1] + ")"), 20),
  yetim_hicbir_madde_yer_id_odak_yer_yok: yerYetim.length, yetim_ilk20: ilk(yerYetim.map(y => y.ad), 20),
  yerlesim_sekmesi_donemsiz_kayit: YER.filter(y => !(y.d || []).length && !(y.v || []).length && !(y.s || []).length && !(y.isg || []).length).length,
  SEHIRLER: SEH.length, SEHIRLER_yerlesimlerde_karsiligi_olmayan: sehYerlesimde.length, SEHIRLER_ornek: ilk(sehYerlesimde.map(s => s.ad), 10), SEHIRLER_maddeye_bagli_olmayan: sehYetim.length, SEHIRLER_yetim_ilk20: ilk(sehYetim.map(s => s.ad), 20),
  yerlesim_sekmesi_300_kesme: "ciz() bulunan.slice(0,300): arama yokken ilk 300 satır gösterilir, " + Math.max(0, YER.length - 300) + " yerleşim yalnız aramayla ulaşılır" };

// ---------- (5) mükerrer / farklı yazım ----------
function lev(a, b) { if (Math.abs(a.length - b.length) > 2) return 9; const d = Array.from({ length: a.length + 1 }, (_, i) => [i]); for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[a.length][b.length]; }
function mukerrer(liste, adF, idF, esikUzun) {
  const g = new Map(); liste.forEach((x, i) => { const k = NP(adF(x)); if (!k) return; (g.get(k) || g.set(k, []).get(k)).push(x); });
  const tam = [...g.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => k + " ← " + v.map(idF).join(" | "));
  const keys = [...g.keys()]; const yakin = []; const kova = new Map(); keys.forEach(k => { const b = k.slice(0, 3); (kova.get(b) || kova.set(b, []).get(b)).push(k); });
  kova.forEach(ks => { for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) { if (ks[i].length >= (esikUzun || 7) && lev(ks[i], ks[j]) <= 1) yakin.push(ks[i] + " ~ " + ks[j]); } });
  return { tam_ayni_ad_grubu: tam.length, tam_ornek_20: ilk(tam, 20), yakin_ad_cifti_lev1: yakin.length, yakin_ornek_20: ilk(yakin, 20) };
}
out.mukerrer = {
  KISILER: mukerrer(KISI, k => k.ad, k => k.id), KISILER_ile_PADISAHLAR_ortak: (() => { const p = new Set(PAD.map(k => NP(k.ad))); return KISI.filter(k => p.has(NP(k.ad))).map(k => k.id + " | " + k.ad); })(),
  KISILER_id_tekrar: sayim(KISI, k => k.id).filter(e => e[1] > 1),
  SAVASLAR: mukerrer(SAV, s => s.ad, s => s.t + " " + s.ad, 8), SAVASLAR_ayni_gun_ayni_yer: (() => { const g = new Map(); SAV.forEach(s => { const k = s.t + "|" + (+s.lat).toFixed(1) + "," + (+s.lon).toFixed(1); (g.get(k) || g.set(k, []).get(k)).push(s.ad); }); return ilk([...g.entries()].filter(([, v]) => v.length > 1).map(([k, v]) => k + " ← " + v.join(" | ")), 20); })(),
  ANTLASMALAR: mukerrer(ANT, a => a.ad, a => a.t + " " + a.ad, 8), ANTLASMALAR_ayni_tarih: ilk(sayim(ANT, a => a.t).filter(e => e[1] > 1), 20),
  DEVLETLER: mukerrer(DEV, d => d.ad, d => d.id, 9), DEVLETLER_id_tekrar: sayim(DEV, d => d.id).filter(e => e[1] > 1),
  madde_kisi_yazimi_dizinden_farkli_kismi_eslesen: tokKismi
};

// ---------- (4) tıklama (app.js dizinDoldur, statik okuma) ----------
out.tiklama = [
  ["Kişiler", "satir(k.ad,k.donem,k.not) — tik YOK", "İŞLEVSİZ"],
  ["Savaşlar", "tarihAyarla(gunIdx(s.t)) — tarihe gider, haritada savaş yerine uçmaz (lat/lon dizin kaydında var)", "kısmi"],
  ["Antlaşmalar", "tarihAyarla(gunIdx(a.t)) — yalnız tarih", "kısmi"],
  ["Savaş Serileri", "satir(s.aralik,…) — tik YOK", "İŞLEVSİZ"],
  ["Şehirler ve Kaleler", "tarihAyarla(ilk.f) + dizindenUc(lat,lon)", "tam"],
  ["Yerleşim Kronolojileri", "liste → detay → dönem satırı tarihAyarla(p.f)+dizindenUc", "tam"],
  ["Devletler", "tarihAyarla(gunIdx(d.f)) — harita devlete odaklanmaz, f'si yoksa/negatifse gunIdx davranışı ölçülmedi", "kısmi"],
  ["Kartvizitler", "VEFAT_INDEX[k.id] varsa tarihAyarla+obGoster, yoksa tik YOK ('henüz kronolojiye bağlanmadı')", "bağlıysa tam / bağlı değilse İŞLEVSİZ"]
];
const kv = KISI.filter(k => ["sehzade", "valide", "hanedan", "sadrazam", "komutan", "denizci"].includes(k.tur)); const vefatSet = new Set(vefatRef);
out.kartvizit = { K2_K5_kisi: kv.length, vefat_id_ile_bagli: kv.filter(k => vefatSet.has(k.id)).length, bagli_degil: kv.filter(k => !vefatSet.has(k.id)).length, padisah_K1: PAD.filter(p => !p.ozel).length, padisah_vefat_bagli: PAD.filter(p => !p.ozel && vefatSet.has(p.id)).length,
  bagsiz_ilk20: ilk(kv.filter(k => !vefatSet.has(k.id)).map(k => k.id + " | " + k.tur), 20) };
console.log(JSON.stringify(out, null, 1));

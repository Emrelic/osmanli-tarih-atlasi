// ODAK-OLC-KOR-NOKTA-1005-olc.js — DEVLET SEKMESİ kamera yolunun (maddeAc) evrenini ÖLÇER.
// YALNIZ OKUR. Hiçbir dosyaya yazmaz (stdout'a JSON + özet).
//
// Yöntem: index.html'in app.js'ten ÖNCE yüklediği data/*.js betiklerini AYNI sırayla
// bir `window` kabuğunda koşturur; sonra app.js'ten İKİ IIFE'yi (derinKronolojiBindir +
// cokTarafliKronolojiEkle) METİN olarak keser ve eval eder ⇒ DEVLETLER[].kronoloji,
// tarayıcıdaki hâlinin AYNISI. Kamera havuzu AD_KONUM ve _khGunStr de app.js'ten
// metinle kesilir (kopyalanmaz). maddeAc'ın dal sırası (app.js:15017-15093) burada
// elle yürütülür — o işlev DOM/harita istediği için doğrudan çağrılamaz.
//
// odak_olc.py'nin sınıflandırması karşılaştırma için `odak_cozum.js:155-173`ten
// birebir aktarıldı (o dosya yüklenince kendini koşturduğu için içe alınamıyor).
const fs = require("fs");
const path = require("path");
const KOK = path.resolve(__dirname, "..");
const oku = (p) => fs.readFileSync(path.join(KOK, p), "utf8");

global.window = global;
global.document = { getElementById: () => null, createElement: () => ({ appendChild() {}, querySelector() { return {}; } }) };
const _log = console.log, _warn = console.warn;
const LOG = [];
console.log = (...a) => LOG.push(a.join(" "));
console.warn = (...a) => LOG.push("WARN " + a.join(" "));

// ---- ① index.html betik sırası ------------------------------------------------
const html = oku("index.html");
const srcs = [...html.replace(/<!--[\s\S]*?-->/g, "").matchAll(/src="([^"?]*)(\?[^"]*)?"/g)].map((m) => m[1]);
const appIx = srcs.indexOf("js/app.js");
const once = srcs.slice(0, appIx).filter((s) => s.startsWith("data/") || s === "js/suzgec.js");
const sonra = srcs.slice(appIx + 1).filter((s) => s.startsWith("data/"));
// 🔴 SATIR İÇİ <script> blokları da AYNI sırayla koşar — `window.YERLESIMLER`
//    index.html:1693'teki satır içi betikte `YERLESIMLER_*` toplanarak kurulur;
//    yalnız src'li betikleri koşturan ilk sürüm 814 yerleşim gördü (tarayıcı 4298).
const yukHata = [];
let inline = 0;
const htmlY = html.replace(/<!--[\s\S]*?-->/g, "");   // yorum içindeki "<script" metni eşleşmeyi kaydırıyordu
for (const m of htmlY.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
  const sm = m[1].match(/src="([^"?]*)/);
  if (sm && sm[1] === "js/app.js") break;
  try {
    if (sm) {
      if (!sm[1] || sm[1].startsWith("http")) continue;
      if (!(sm[1].startsWith("data/") || sm[1] === "js/suzgec.js" || sm[1] === "js/geo_coz.js")) continue;
      (0, eval)(oku(sm[1]));
    } else if (m[2].trim()) { inline++; (0, eval)(m[2]); }
  } catch (e) { yukHata.push((sm ? sm[1] : "satır içi #" + inline) + ": " + String(e.message).slice(0, 80)); }
}
// tarayıcıya giden kaynak dosya kümesi (paket başlıklarından)
const tarayiciDosya = new Set();
for (const s of srcs.filter((s) => s.startsWith("data/"))) {
  const t = oku(s);
  const ic = [...t.matchAll(/^\/\* ==== (data\/[^ ]+) ==== \*\//gm)].map((m) => m[1]);
  if (ic.length) ic.forEach((x) => tarayiciDosya.add(x.slice(5))); else tarayiciDosya.add(s.slice(5));
}

// ---- ② app.js'ten METİNLE kesilen parçalar -------------------------------------
const APP = oku("js/app.js");
function kes(bas, son) {
  const i = APP.indexOf(bas);
  const j = APP.indexOf(son, i);
  if (i < 0 || j < 0) throw new Error("kesilemedi: " + bas);
  return APP.slice(i, j);
}
(0, eval)(kes("var KRONOLOJI_ID_OZEL", "(function odakKur()"));
(0, eval)(kes("function gunIdx(s)", "function idxYazi("));
(0, eval)(kes("function _khGunStr(i)", "function _khKirpikPencere("));
(0, eval)(kes("var EPOK_DAMGASI =", "\n  : (window.SEHIRLER || []);") + "\n  : (window.SEHIRLER || []);");
(0, eval)(kes("var AD_KONUM = (function", "// Karar ④/6"));

const SG = window.SUZGEC;
const D = window.DEVLETLER || [];
const kix = {}; D.forEach((d) => { if (d && d.id) kix[d.id] = d; });
const HS = window.HUKUKI_SINIRLAR || [];

// odak_olc'un havuzu (SEHIR = d/v/s süzgeci) — odak_cozum.js:78-87
const SEHIR = new Set();
(window.YERLESIMLER || []).forEach((y) => {
  const dolu = (y.d && y.d.length) || (y.v && y.v.length) || (y.s && y.s.length);
  if (!dolu || typeof y.ad !== "string" || !y.ad) return;
  SEHIR.add(y.ad); SEHIR.add(y.ad.split(" (")[0]);
});

function kimlikSay(ids, gs) {
  let n = 0;
  for (const y of window.YERLESIMLER) {
    if (typeof y.lat !== "number" || typeof y.lon !== "number") continue;
    if (!SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, kix)) continue;
    if (++n >= 2) return n;
  }
  return n;
}
const dizi = (x) => (x == null ? null : Array.isArray(x) ? x : [x]);
const GS_BOZUK = _khGunStr(undefined);          // maddeAc ham `m` geçiriyor → m.gi yok

// app.js maddeOdakKutusu'nun ÇÖZÜM sonucu (kutu kuruluyor mu), gs parametreli
function odakKutusu(m, gs) {
  if (m.odak_kutu_kaynak) {
    const hk = HS.find((k) => k.id === m.odak_kutu_kaynak);
    if (hk && hk.kapsama && hk.kapsama.odak_kutu) return "kutu_kaynak";
  }
  const oy = dizi(m.odak_yer);
  if (oy && oy.length && oy.some((a) => adKonumBul(a))) return "odak_yer";
  const ids = dizi(m.odak_kimlik);
  if (ids && ids.length && kimlikSay(ids, gs) >= 2) return "odak_kimlik";
  return null;
}
// odak_cozum.js:155-173 birebir (havuz SEHIR, gs = m.t)
function olcSinif(m) {
  const gs = typeof m.t === "string" ? m.t : "";
  if (Array.isArray(m.yer_kon) && m.yer_kon.length === 2) return "KONUMLU";
  if (m.yer_id && SEHIR.has(m.yer_id)) return "KONUMLU";
  if (m.odak_kutu_kaynak) {
    const hk = HS.find((k) => k && k.id === m.odak_kutu_kaynak);
    if (hk && hk.kapsama && hk.kapsama.odak_kutu) return "KUTULU";
  }
  const oy = dizi(m.odak_yer);
  if (oy && oy.some((a) => typeof a === "string" && SEHIR.has(a))) return "KUTULU";
  const ids = dizi(m.odak_kimlik);
  if (ids && ids.length && gs && kimlikSay(ids, gs) >= 2) return "KUTULU";
  if (m.kapsam_genis === true) return "BEYANLI";
  return "ODAKSIZ";
}
const odakYazili = (m) => !!(m.odak_yer || m.odak_kimlik || m.odak_kutu_kaynak);

// ---- ③ evren: devlet sekmesinden açılabilen maddeler --------------------------
// odakKur adaylar = kronolojisi dolu künyeler; maddeAc(d, m) ham m alır (gezGit).
const ciftler = [];
const tekil = new Map();     // m nesnesi → ilk künye
D.forEach((d) => (d.kronoloji || []).forEach((m) => {
  if (!m || typeof m !== "object") return;
  ciftler.push([d, m]);
  if (!tekil.has(m)) tekil.set(m, d);
}));

const S = {};
const art = (k, n = 1) => { S[k] = (S[k] || 0) + n; };
const ornek = {};
const orn = (k, d, m, ek) => { (ornek[k] = ornek[k] || []).length < 6 && ornek[k].push({ kunye: d.id, t: m.t, b: String(m.b || "").slice(0, 70), ...(ek || {}) }); };
const capraz = {};

for (const [m, d] of tekil) {
  art("evren_tekil");
  if (m.gi === undefined) art("gi_yok");
  const hedef = m.yer_id ? olayKonumu_(m) : null;
  let dal;
  if (hedef) dal = "B_konumlu";
  else if (!m.kapsam_genis) dal = "C_kipirdamaz";
  else dal = "A_kapsam_genis";
  art(dal);
  const os = olcSinif(m);
  capraz[dal + " × olc:" + os] = (capraz[dal + " × olc:" + os] || 0) + 1;

  if (dal === "A_kapsam_genis") {
    const dogru = odakKutusu(m, _khGunStr(gunIdx(m.t)));
    const bozuk = odakKutusu(m, GS_BOZUK);
    if (bozuk) { art("A_odak_kutusu_CALISIYOR"); art("A_cozen:" + bozuk); }
    else { art("A_GOVDEYE_ACILIYOR"); if (!odakYazili(m)) art("A_govde_odak_yazilmamis"); }
    if (dogru && !bozuk) { art("A_gi_kusuru_KIRDI"); orn("A_gi_kusuru_KIRDI", d, m, { odak_kimlik: m.odak_kimlik }); }
    if (odakYazili(m) && !dogru) { art("A_KIRIK_ATIF"); orn("A_KIRIK_ATIF", d, m, { odak_yer: m.odak_yer, odak_kimlik: m.odak_kimlik, odak_kutu_kaynak: m.odak_kutu_kaynak }); }
    if (m.yer_id) { art("A_yer_id_yazili_cozulmuyor"); orn("A_yer_id_cozulmuyor", d, m, { yer_id: m.yer_id }); }
    if (!odakYazili(m) && !m.yer_id) orn("A_govde", d, m);
  }
  if (dal === "C_kipirdamaz") {
    if (odakYazili(m)) { art("C_odak_YAZILI_ama_OKUNMUYOR"); if (odakKutusu(m, _khGunStr(gunIdx(m.t)))) art("C_odak_cozulurdu"); orn("C_odak_okunmuyor", d, m, { odak_yer: m.odak_yer, odak_kimlik: m.odak_kimlik, odak_kutu_kaynak: m.odak_kutu_kaynak }); }
    if (Array.isArray(m.yer_kon) && m.yer_kon.length === 2) { art("C_yer_kon_VAR_ama_OKUNMUYOR"); orn("C_yer_kon", d, m, { yer_kon: m.yer_kon }); }
    if (m.yer_id) { art("C_yer_id_yazili_cozulmuyor"); orn("C_yer_id_cozulmuyor", d, m, { yer_id: m.yer_id }); }
    if (os === "KONUMLU" || os === "KUTULU") art("C_olc_TEMIZ_SAYIYOR");
  }
  if (dal === "B_konumlu" && m.odak_kimlik) {
    art("B_odak_kimlik_yazili");
    if (odakKutusu(m, _khGunStr(gunIdx(m.t))) === "odak_kimlik" && odakKutusu(m, GS_BOZUK) !== "odak_kimlik") art("B_odak_kimlik_gi_kusuru_KIRDI");
  }
}
function olayKonumu_(o) {          // app.js olayKonumu (12434) — AD_KONUM ile
  if (o.yer_kon && o.yer_kon.length === 2) return true;
  if (o.yer_id && adKonumBul(o.yer_id)) return true;
  return false;
}

// odak_olc ile havuz farkı: SEHIR'de yok ama AD_KONUM'da var (yanlış KİRLİ yönü)
const havuzFark = AD_KONUM.filter((p) => !SEHIR.has(p.ad)).length;
const ogaden = !!adKonumBul("Ogaden");

// ---- ④ evren farkı: odak_olc'un disk evreni vs tarayıcı --------------------------
const disk = fs.readdirSync(path.join(KOK, "data")).filter((f) => f.endsWith(".js") && (f.startsWith("kronoloji_") || f.startsWith("olaylar")));
const diskYuklenmeyen = disk.filter((f) => !tarayiciDosya.has(f));
const kronoAnahtar = Object.keys(window).filter((k) => /^KRONOLOJI_/.test(k));

// ---- ⑤ her kronoloji değişkeninin maddeleri HANGİ kamera yoluna gidiyor? --------
// app.js:7034 `olaylar` = /^OLAYLAR(_x)?$/ ⇒ (b) yolu YALNIZ bunlar.
// devlet sekmesi evreni = `tekil` ⇒ maddeAc yolu. İkisinde de yoksa: HİÇ açılamaz.
const yol = { OLAYLAR_b_yolu: 0, KRONOLOJI_maddeAc: 0, KRONOLOJI_HIC_ACILAMAZ: 0, acilamaz_ama_tb_ikizi_sekmede: 0 };
const tbSekme = new Set(); for (const [m] of tekil) tbSekme.add(m.t + "|" + m.b);
const acilamaz = {};
Object.keys(window).forEach((k) => {
  if (!Array.isArray(window[k])) return;
  if (/^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k)) { yol.OLAYLAR_b_yolu += window[k].length; return; }
  if (!/^KRONOLOJI_/.test(k)) return;
  window[k].forEach((m) => {
    if (tekil.has(m)) yol.KRONOLOJI_maddeAc++;
    else {
      // cokTarafliKronolojiEkle aynı t+b'yi ikinci kez eklemez — ikizi sekmedeyse GÖRÜNÜR sayılır
      if (tbSekme.has(m.t + "|" + m.b)) { yol.acilamaz_ama_tb_ikizi_sekmede++; return; }
      yol.KRONOLOJI_HIC_ACILAMAZ++; acilamaz[k] = (acilamaz[k] || 0) + 1;
      const os = "acilamaz_olc:" + olcSinif(m); yol[os] = (yol[os] || 0) + 1;
    }
  });
});
// devletler.js künyelerinin KENDİ kronolojisi (KRONOLOJI_* değişkeninden gelmeyen) — odak_olc bunu taramaz
const kronoNesne = new Set();
Object.keys(window).forEach((k) => { if (/^KRONOLOJI_/.test(k) && Array.isArray(window[k])) window[k].forEach((m) => kronoNesne.add(m)); });
const kunyeIci = {};
for (const [m] of tekil) {
  if (kronoNesne.has(m)) continue;
  const hedef = m.yer_id ? olayKonumu_(m) : null;
  const dal = hedef ? "B" : !m.kapsam_genis ? "C" : "A";
  const k = "kunye_ici " + dal + " × olc:" + olcSinif(m);
  kunyeIci[k] = (kunyeIci[k] || 0) + 1; kunyeIci.toplam = (kunyeIci.toplam || 0) + 1;
}
yol.kunye_ici = kunyeIci;
// odak_olc'un dosya varsayımı (odak_cozum.js:190-197): dosya başına SON yeni dizi
const cokDizili = [];
for (const f of disk) {
  const W2 = {}; const g2 = global.window;
  const t = oku("data/" + f);
  const adlar = [...t.matchAll(/window\.([A-Za-z0-9_]+)\s*=\s*\[/g)].map((m) => m[1]);
  if (new Set(adlar).size > 1) cokDizili.push(f + " → " + [...new Set(adlar)].join(","));
}
// maddeAc dalında `odak_kimlik` / `odak_kutu_kaynak` kaç maddede yazılı (gi kusurunun MENZİLİ)
let okimlik = 0, okutu = 0;
let okDogru = 0, okBozuk = 0;
for (const [m] of tekil) {
  if (m.odak_kutu_kaynak) okutu++;
  const ids = dizi(m.odak_kimlik);
  if (!ids || !ids.length) continue;
  okimlik++;
  if (kimlikSay(ids, _khGunStr(gunIdx(m.t))) >= 2) okDogru++;
  if (kimlikSay(ids, GS_BOZUK) >= 2) okBozuk++;
}

console.log = _log; console.warn = _warn;
const sonuc = {
  yuk_hata: yukHata, yerlesim: (window.YERLESIMLER || []).length, kunye: D.length,
  kunye_kronolojili: D.filter((d) => d.kronoloji && d.kronoloji.length).length,
  KRONOLOJI_degisken: kronoAnahtar.length,
  evren_cift: ciftler.length, sayim: S, capraz, yol, acilamaz, cok_dizili_dosya: cokDizili,
  sekmede_odak_kimlik: okimlik, odak_kimlik_dogru_gun_cozer: okDogru, odak_kimlik_ham_m_cozer: okBozuk, sekmede_odak_kutu_kaynak: okutu,
  GS_BOZUK, ad_konum: AD_KONUM.length, sehir_havuz: SEHIR.size, havuz_fark_ad: havuzFark, ogaden_ad_konumda: ogaden,
  disk_kronoloji_olaylar: disk.length, disk_ama_tarayicida_yok: diskYuklenmeyen,
  app_sonra_yuklenen_data: sonra, log_bindirme: LOG.filter((l) => /bindir|çok taraflı|eşlenemedi|EZİLDİ|künyesi olmayan/.test(l)).map((l) => l.slice(0, 300)),
  ornek,
};
process.stdout.write(JSON.stringify(sonuc, null, 1));

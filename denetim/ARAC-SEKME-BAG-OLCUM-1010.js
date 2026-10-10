// ARAC-SEKME-BAG-OLCUM-1010.js — SEKME-BAG-OLCUM-1010 (UMIT, yalnız ÖLÇÜM).
//
// Ne yapar: `arac/odak_cozum.js`in KENDİSİNİ koşturur (kopya YOK) — kaynağı
// okunur, son satırı (`process.stdout.write(JSON.stringify(cikti));`) bu
// dosyadaki EK blokla değiştirilir ve aynı işlev kapsamında koşar. Böylece
// `sekmeDali` · `veriDisi` · `devletiYaySessiz` · `olayKonumu` ·
// `maddeOdakKutusu` · `kronoGun` GERÇEK işlevlerdir; tarayıcı evreni
// (index.html betik sırası + app.js'in iki bağlama IIFE'si) odak_cozum'un
// kurduğu evrenin AYNISIDIR.
// Kesim işareti bulunamazsa ÇIKIŞ 2 (ölçülemedi ≠ temiz).
//
// GİRDİ argv[2] = odak_olc.olc()'un ürettiği G + { cikti: "<yol>" }.
// ÇIKTI G.cikti'ye madde madde döküm (JSON).
const fs = require("fs");
const path = require("path");
const G0 = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
let src = fs.readFileSync(path.join(G0.kok, "arac", "odak_cozum.js"), "utf8");
const SON = "process.stdout.write(JSON.stringify(cikti));";
const i = src.lastIndexOf(SON);
if (i < 0) {
  process.stdout.write(JSON.stringify({ hata: "ÖLÇÜLEMEDİ: odak_cozum.js son satırı bulunamadı" }));
  process.exit(2);
}

const EK = String.raw`
;(function __sekmeBag() {
  var CIK = G.cikti;
  function f(fn) { return typeof W[fn] === "function"; }
  ["kronoGun", "aktifAralik", "gunIdx"].forEach(function (fn) {
    if (!f(fn)) olculemedi("kesilen işlev yok: " + fn);
  });
  var KEYS = Object.keys(W).filter(function (k) {
    return /^(KRONOLOJI_|OLAYLAR)/.test(k) && Array.isArray(W[k]);
  }).sort();
  // madde → bulunduğu window anahtarları
  var mKey = new Map();
  KEYS.forEach(function (k) {
    W[k].forEach(function (m) {
      if (!m || typeof m !== "object") return;
      if (!mKey.has(m)) mKey.set(m, []);
      mKey.get(m).push(k);
    });
  });
  // madde → içinde bulunduğu BÜTÜN künyeler
  var mKunye = new Map();
  DEVLETLER.forEach(function (d) {
    (d && d.kronoloji || []).forEach(function (m) {
      if (!m || typeof m !== "object") return;
      if (!mKunye.has(m)) mKunye.set(m, []);
      if (mKunye.get(m).indexOf(d.id) < 0) mKunye.get(m).push(d.id);
    });
  });
  // anahtar → ad sözleşmesi bağı (app.js derinKronolojiBindir aday mantığı,
  // ÜSTÜNE gerçek üyelikle doğrulanır)
  var OZEL = W.KRONOLOJI_ID_OZEL || {};
  var COKY = W.KRONOLOJI_COK_YOLU || [];
  var anahtar = {};
  KEYS.forEach(function (k) {
    var r = { anahtar: k, madde: W[k].length };
    if (/^OLAYLAR/.test(k)) { r.yol = OLAY_ANAHTAR.test(k) ? "OLAYLAR_osmanli" : "OLAYLAR_desen_disi"; }
    else if (/^KRONOLOJI_(SINIR|COK)_/.test(k)) { r.yol = "COK_TARAFLI_onek"; }
    else {
      var ad = [OZEL[k] || k.slice(10).toLowerCase()];
      if (ad[0].indexOf("_") >= 0) ad.push(ad[0].replace(/_/g, "-"));
      r.adaylar = ad; r.ozel = OZEL[k] || null;
      var bulunan = null;
      for (var a = 0; a < ad.length && !bulunan; a++) if (kunyeIx[ad[a]]) bulunan = ad[a];
      if (bulunan) {
        r.yol = "AD_SOZLESMESI"; r.kunye = bulunan;
        var kr = kunyeIx[bulunan].kronoloji || [];
        r.uyelik_dogru = W[k].length ? kr.indexOf(W[k][0]) >= 0 : null;
      } else {
        r.yol = COKY.indexOf(k) >= 0 ? "BAGSIZ_COK_YOLUNA" : "BAGSIZ_HIC";
      }
    }
    anahtar[k] = r;
  });

  function kunyeOz(id) {
    var d = kunyeIx[id];
    if (!d) return null;
    return { id: d.id, f: d.f, t: d.t, harita: d.harita || null, ad: d.ad,
             bolge: d.bolge || null, dh_kaydi: !!DH_IX[d.harita || d.id],
             dh_id_kaydi: !!DH_IX[d.id] };
  }
  var kunyeler = {};

  function sekmeTam(m, kd) {
    var sd = sekmeDali(m, kd);
    var vd = veriDisi(m, kd, sd);
    var r = { dal: vd ? "SEKME_VERI_DISI" : sd.dal, ham_dal: sd.dal };
    if (sd.alt) r.alt = sd.alt;
    if (sd.govde) r.govde = sd.govde;
    if (sd.neden) r.neden = sd.neden;
    if (vd) r.devir = vd;
    // harita: alanı olmasaydı (yalnız d.id) gövde var mıydı?
    if (kd) {
      r.yay_id = devletiYaySessiz(kd.id, m.t);          // null = gövde var
      r.yay_harita = devletiYaySessiz(kd.harita || kd.id, m.t);
    }
    return r;
  }

  var maddeler = [];
  var gor = new Set();
  function isle(m) {
    if (!m || typeof m !== "object" || gor.has(m)) return;
    gor.add(m);
    var dosya = kaynakOf.get(m) || "(kaynaksız)";
    var yid = m.yer_id || null;
    var hedef = null;
    try { hedef = yid ? olayKonumu(m) : null; } catch (e) { hedef = "HATA"; }
    var kutu = null;
    try { var kk = maddeOdakKutusu(m); kutu = !!(kk && kk.kutu); } catch (e) { kutu = "HATA"; }
    var mg = kronoGun(m.t);
    var r = {
      dosya: dosya, anahtarlar: mKey.get(m) || [], k: kimlik(m), ilk_kunye: sekmeKunye.get(m) || null, t: m.t, b: String(m.b || "").slice(0, 90),
      kg: mg, yol: yolOf.get(m) || null,
      yer_id: yid, yer_id_cozulur: !!hedef && hedef !== "HATA",
      yer_kon: Array.isArray(m.yer_kon) && m.yer_kon.length === 2,
      odak_yer: m.odak_yer || null, odak_kimlik: m.odak_kimlik || null,
      odak_kutu_kaynak: m.odak_kutu_kaynak || null,
      kapsam_genis: m.kapsam_genis === undefined ? null : m.kapsam_genis,
      ham_kutu: kutu,
      taraflar: m.taraflar || m.devletler || (m.devlet ? [m.devlet] : null),
      sinif: yolOf.get(m) ? siniflandir(m) : null,
      kunyeler: []
    };
    (mKunye.get(m) || []).forEach(function (id) {
      var kd = kunyeIx[id];
      if (!kunyeler[id]) kunyeler[id] = kunyeOz(id);
      var e = { id: id, kfg: kronoGun(kd.f), ktg: kronoGun(kd.t) };
      e.sekme = sekmeTam(m, kd);
      r.kunyeler.push(e);
    });
    maddeler.push(r);
  }
  KEYS.forEach(function (k) { W[k].forEach(isle); });
  // künye-içi (devletler.js) maddeler de sekme evreninde: yalnız dosya evreni
  // dışında kalanları ayrıca say
  var kunyeIci = 0;
  DEVLETLER.forEach(function (d) {
    (d && d.kronoloji || []).forEach(function (m) { if (!gor.has(m)) kunyeIci++; });
  });
  // bütün künyelerin harita: alanı
  var haritaAlanli = DEVLETLER.filter(function (d) { return d && d.harita && d.harita !== d.id; })
    .map(function (d) { return { id: d.id, harita: d.harita, f: d.f, t: d.t,
                                 dh_id: !!DH_IX[d.id], dh_harita: !!DH_IX[d.harita] }; });
  // aynı DEVLET_HARITA anahtarını (harita || id) paylaşan künyeler
  var pay = {};
  DEVLETLER.forEach(function (d) {
    if (!d || !d.id) return;
    var key = d.harita || d.id;
    (pay[key] = pay[key] || []).push({ id: d.id, f: d.f, t: d.t, harita: d.harita || null });
  });
  var haritaPaylasim = {};
  Object.keys(pay).forEach(function (key) {
    if (pay[key].length > 1) haritaPaylasim[key] = { dh: !!DH_IX[key], kunyeler: pay[key] };
  });
  // index.html'in yüklediği kronoloji/olay kaynak dosyaları (sırasıyla)
  var yk = yuklenen.filter(function (k) { return /\/(kronoloji_|olaylar)/.test(k); });
  require("fs").writeFileSync(CIK, JSON.stringify({
    baslangic: W.BASLANGIC, bitis: W.BITIS,
    baslangic_t: W.idxTarih ? W.idxTarih(W.BASLANGIC) : null,
    bitis_t: W.idxTarih ? W.idxTarih(W.BITIS) : null,
    dh_var: DH_VAR, devirler: DEVIRLER,
    yuklenen_kronoloji: yk, app_sonrasi: appSonrasi, yuk_uyari: yukHata,
    disk: G.disk || [],
    anahtar: anahtar, cok_yolu: COKY, id_ozel: OZEL,
    kunyeler: kunyeler, harita_alanli: haritaAlanli, harita_paylasim: haritaPaylasim,
    kunye_ici_ayri: kunyeIci,
    bagla_log: LOG.filter(function (l) { return /PENCERESİ|eşlenemedi|künyesi olmayan|yönlenen|KORUNDU/.test(l); })
                  .map(function (l) { return l.slice(0, 3000); }),
    maddeler: maddeler
  }));
  process.stdout.write(JSON.stringify({ tamam: true, madde: maddeler.length }));
})();
`;

src = src.slice(0, i) + EK + src.slice(i + SON.length);
new Function("require", src)(require);

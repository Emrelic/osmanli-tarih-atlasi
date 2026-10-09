// odak_cozum.js — kronoloji maddelerinin KAMERA ODAĞINI app.js'in KENDİ
// diliyle çözer. `arac/odak_olc.py` çağırır, JSON döndürür.
//
// 🔴 NİÇİN JS — ve bu dosyanın tek varlık sebebi bu:
// Odak çözümü `js/app.js` ve `js/suzgec.js` içindedir. Aynı mantığı Python'da
// yeniden yazmak `CLAUDE.md §11`in yasakladığı şeydir: *bir bilgi iki yerde
// durursa ayrışır.* Ve ayrışma ÖLÇÜLDÜ — ilk Python denemesi iki yerde yanlış
// çıktı, ikisi de "YANLIŞ TEMİZ" yönünde:
//   ① `odak_kimlik` için app.js O GÜN o kimliğe ait ≥2 YERLEŞİM ister;
//      Python sürümü KİMLİK SAYISINA bakıyordu (`len(ids) >= 2`) ⇒ hiç
//      yerleşimi olmayan bir kimlik "kutulu" sayılıyordu.
//   ② `yer_id` havuzu süzgeçten geçer; Python sürümü BÜTÜN yerleşimleri
//      havuz sayıyordu ⇒ sahipsiz bir noktaya yazılan `yer_id` "çözüldü"
//      görünüyordu.
// ⇒ Burada `SUZGEC.sahipKimlikte` / `sahipAnahtari` / `aktifVAdi` GERÇEK
//   işlevleri çağrılır.
//
// 🆕 UMIT-W13-ODAK-SEKME-1006 — üç körlük kapandı (ölçüm:
//    `denetim/ODAK-OLC-KOR-NOKTA-1005.md`):
//   O2 HAVUZ. Bu dosya `yer_id`/`odak_yer` havuzunu KENDİ kuruyordu (`SEHIR` =
//      d/v/s süzgeci). app.js 27 Eylül'de (ODAK-MEKANIZMA-0080) kamerayı ayrı
//      `AD_KONUM` havuzuna taşıdı ⇒ 152 ad (Ogaden, Tibesti …) burada "kırık"
//      sayılıyordu, app.js'te çözülüyordu (YANLIŞ KİRLİ). "Süzgeç değişirse bu
//      ölçüm KENDİLİĞİNDEN takip eder" iddiası havuz için TUTMUYORDU.
//      ⇒ Artık `AD_KONUM` + `adKonumBul` + `olayKonumu` + `maddeOdakKutusu`
//        app.js'ten METİNLE KESİLİP eval edilir. Kopya YOK.
//   O3 EVREN. Disk listesi (`data/kronoloji_*` + `olaylar*`) tarayıcının
//      gördüğü şey değildi: 2975 künye-içi madde HİÇ görülmüyordu, 2059 madde
//      (16 künyesiz `KRONOLOJI_*` + 2 parçalı `OLAYLAR_*` soneki) sayılıyordu
//      ama hiçbir ekranda AÇILAMIYORDU. ⇒ index.html'in app.js'ten ÖNCE
//      koşturduğu betikler AYNI sırayla koşar, app.js'in iki bağlama IIFE'si
//      metinle kesilip eval edilir ⇒ `DEVLETLER[].kronoloji` tarayıcıdakinin
//      aynısıdır.
//   O1 SEKME. Devlet sekmesinin kamera yolu (`maddeAc`) `haritayiOlayaGotur`
//      yolundan AYRIDIR ve `odak_*`/`yer_kon` alanlarının çoğunu OKUMAZ.
//      `siniflandir` (yazılmış odak) DOKUNULMADAN durur; yanına `sekmeDali`
//      (sekmede GERÇEKTE ne oluyor) eklendi.
//   🆕 W57 (6 Ekim 2026) — KIRIM-ODAK-A-1006 ile BİRLEŞİM. app.js `maddeAc`
//      gövde dalı artık gövde YOKSA `maddeOdakKutusu({t, gi, odak_kimlik:
//      [d.id]})` ile tâbi/kimlik kutusuna düşer; o da kurulmazsa SAYAR
//      (`SEKME_ODAK_DUSEN`) ve panele not yazar. KIRIM-ODAK-A bu dalı bu
//      dosyada AYRI bir `sekme` alanıyla (GOVDE/KUTU/TABI_KUTU/SESSIZ/
//      OLCULEMEDI) ölçüyordu; o ölçüm `sekmeDali`na KATILDI — ikinci bir
//      sayaç YOK: SEKME_TABI_KUTU · SEKME_SESSIZ · SEKME_OLCULEMEDI.
//
// 🔴 KAYNAK DOSYA, PAKET DEĞİL: tarayıcı `data/paket_NN.js` demetlerini
//    yükler; burada demetlerin İÇİNDEKİ kaynak dosyalar aynı sırayla koşar
//    (`paket_coz.py` künyesiyle, Python verir). Sebep: veriyi düzenleyen
//    (ve `denetim/ODAK-KAPI-SINAV.py` ③) KAYNAK dosyaya yazar; demet ancak
//    `paketle.py yenile` ile tazelenir. Demet tazeliği ayrı kapıdır
//    (`paketle.py sina`, `denetle_yayin.py`ye bağlı).
//
// 🔴 ÖLÇÜLEMEDİ asla TEMİZ sayılmaz: kesim işareti bulunamazsa, index.html
//    etiketi künyede yoksa, veri betiği patlarsa ⇒ stdout `{hata}` + ÇIKIŞ 2.
//
// GİRDİ  argv[2] = JSON: { kok, etiket_kaynak: {"data/x.js": ["data/a.js",…]},
//                          disk: ["kronoloji_….js", …],
//                          sor?: [{t, b}], app_js?,      (yalnız sınav)
//                          yay_dogrula? }                  (pahalı doğrulama, varsayılan KAPALI)
// ÇIKTI  stdout'a tek JSON.

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function oku(yol) {
  return fs.readFileSync(yol, "utf8");
}

const G = JSON.parse(oku(process.argv[2]));
const KOK = G.kok;

function olculemedi(neden) {
  process.stdout.write(JSON.stringify({ hata: "ÖLÇÜLEMEDİ: " + neden }));
  process.exit(2);
}

// ---- ⓪ tarayıcı kabuğu ----------------------------------------------------
// Sınıf betikleri `window.X = …` da yazar, üst düzey `var X` de; ikisi
// tarayıcıda aynı nesnedir ⇒ global = window ve DOLAYLI eval.
global.window = global;
const W = global;
const _bos = function () { return null; };
global.document = {
  getElementById: _bos, querySelector: _bos, querySelectorAll: function () { return []; },
  createElement: function () { return { appendChild: _bos, querySelector: function () { return {}; }, style: {} }; },
  addEventListener: _bos, body: { appendChild: _bos },
};
global.localStorage = { getItem: _bos, setItem: _bos, removeItem: _bos };
const geval = eval;                                  // (0, eval) — küresel kapsam
const LOG = [];
const _log = console.log, _warn = console.warn, _err = console.error;
console.log = function () { LOG.push([].join.call(arguments, " ")); };
console.warn = function () { LOG.push("WARN " + [].join.call(arguments, " ")); };
console.error = function () { LOG.push("ERR " + [].join.call(arguments, " ")); };

// ---- ① index.html betik sırası — app.js'e KADAR ---------------------------
const HTML = oku(path.join(KOK, "index.html")).replace(/<!--[\s\S]*?-->/g, "");
const EK = G.etiket_kaynak || {};
const yuklenen = [];          // koşturulan kaynak dosyalar, sırasıyla
const appSonrasi = [];        // app.js'ten SONRA yüklenen veri (evren DIŞI — bağlama görmez)
const yukHata = [];
const kaynakOf = new Map();   // madde nesnesi → kaynak dosya (ilk gören)
let appGoruldu = false;
let satirIci = 0;

// Bir betik koştuktan sonra yeni görünen her kronoloji/olay maddesini o
// dosyaya bağla. Değişken adına değil NESNEYE bakılır: aynı diziye birden çok
// dosya ekleyebilir, künyeye madde iten dosya da olabilir.
function sahiplen(dosya) {
  Object.keys(W).forEach(function (k) {
    if (!/^(KRONOLOJI_|OLAYLAR)/.test(k) || !Array.isArray(W[k])) return;
    W[k].forEach(function (m) {
      if (m && typeof m === "object" && !kaynakOf.has(m)) kaynakOf.set(m, dosya);
    });
  });
  (W.DEVLETLER || []).forEach(function (d) {
    (d && d.kronoloji || []).forEach(function (m) {
      if (m && typeof m === "object" && !kaynakOf.has(m)) kaynakOf.set(m, dosya);
    });
  });
}

for (const m of HTML.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
  const sm = m[1].match(/\bsrc="([^"?#]*)/);
  const src = sm ? sm[1] : null;
  if (src === "js/app.js") { appGoruldu = true; continue; }
  if (appGoruldu) {
    if (src && src.startsWith("data/")) appSonrasi.push.apply(appSonrasi, EK[src] || [src]);
    continue;
  }
  if (src) {
    if (src === "js/suzgec.js") {
      try { geval(oku(path.join(KOK, src))); } catch (e) { olculemedi("js/suzgec.js koşmadı: " + e.message); }
      continue;
    }
    if (!src.startsWith("data/")) continue;            // dış URL, öteki js/ — kamera çözümü değil
    const liste = EK[src];
    if (!liste) olculemedi("index.html `" + src + "` yüklüyor ama Python'un etiket→kaynak haritasında yok (paket_coz)");
    for (const k of liste) {
      const yol = path.join(KOK, k);
      if (!fs.existsSync(yol)) olculemedi("kaynak diskte yok: " + k);
      try { geval(oku(yol)); } catch (e) { yukHata.push(k + ": " + String(e && e.message || e).slice(0, 120)); }
      sahiplen(path.basename(k));
      yuklenen.push(k);
    }
  } else if (m[2].trim()) {
    satirIci++;
    try { geval(m[2]); } catch (e) { yukHata.push("satır içi #" + satirIci + ": " + String(e && e.message || e).slice(0, 120)); }
    sahiplen("index.html#satir" + satirIci);
  }
}
if (!appGoruldu) olculemedi("index.html'de `js/app.js` etiketi bulunamadı");
if (!yuklenen.length) olculemedi("app.js'ten önce koşan veri betiği 0");
// Veri betiği patladıysa tarayıcı da o veriyi görmez — ama burada SESSİZ geçmek
// ölçümü kırpar. Kronoloji/olay/künye/yerleşim betiği patlarsa ölçülemedi.
const kritikHata = yukHata.filter(function (h) {
  return /^(data\/(kronoloji_|olaylar|devletler|yerlesimler|hukuki_sinirlar)|satır içi)/.test(h);
});
if (kritikHata.length) olculemedi("veri betiği koşmadı: " + kritikHata.slice(0, 3).join(" | "));

// ---- ② app.js'ten METİNLE kesilen parçalar --------------------------------
// Kesim işareti bulunamazsa ÖLÇÜLEMEDİ — app.js değiştiyse bu alet onu TAKİP
// ETMEDİĞİNİ söyler, eski hâlini taklit etmeye devam etmez.
// `G.app_js` yalnız sınav içindir (bozuk kesim işaretini app.js'e DOKUNMADAN sınar).
const APP = oku(G.app_js || path.join(KOK, "js", "app.js"));
function kes(bas, son) {
  const i = APP.indexOf(bas);
  if (i < 0) olculemedi("app.js kesim işareti yok: " + JSON.stringify(bas));
  const j = APP.indexOf(son, i + bas.length);
  if (j < 0) olculemedi("app.js kesim sonu yok: " + JSON.stringify(son));
  return APP.slice(i, j);
}
const KESIMLER = [
  ["function gunIdx(s)", "function idxYazi("],              // gunIdx + idxTarih
  ["var _cDevletIxOnbellek = null;", "function _cTarafRengi("],
  ["function _khGunStr(i)", "function _khKirpikPencere("],
  ["var EPOK_DAMGASI =", "// Karar ④/6"],                   // ISARET_KAYNAK + AD_KONUM + adKonumBul
  ["function olayKonumu(o)", "// 🔴 `yakinlikKm`"],
  ["function maddeOdakKutusu(o)", "function haritayiOlayaGotur("],
  ["var KRONOLOJI_ID_OZEL", "(function odakKur()"],          // derinKronolojiBindir + cokTarafliKronolojiEkle
  ["var BASLANGIC = gunIdx(", "// ═══"],                    // atlas penceresi (tarihAyarla kıstırır)
  ["function aktifAralik(", "\n}", "\n}\n"],                // devletiYay'in dönem sınavı (CRLF'e dayanıklı)
];
const KUNYE_ONCE = new Set();
(W.DEVLETLER || []).forEach(function (d) { (d && d.kronoloji || []).forEach(function (m) { KUNYE_ONCE.add(m); }); });
for (const [bas, son, ek] of KESIMLER) {
  try { geval(kes(bas, son) + (ek || "")); } catch (e) { olculemedi("app.js parçası koşmadı (" + bas + "): " + e.message); }
}
["gunIdx", "_khGunStr", "_cDevletIx", "adKonumBul", "olayKonumu", "maddeOdakKutusu",
 "aktifAralik"].forEach(function (f) {
  if (typeof W[f] !== "function") olculemedi("app.js'ten kesilen `" + f + "` işlev değil");
});
if (!Array.isArray(W.AD_KONUM)) olculemedi("app.js'ten kesilen AD_KONUM dizi değil");
if (typeof W.BASLANGIC !== "number" || typeof W.BITIS !== "number" || !(W.BASLANGIC < W.BITIS)) {
  olculemedi("app.js'ten kesilen BASLANGIC/BITIS sayı değil");
}

// `olaylar` listesinin anahtar deseni app.js:7034'ten METİNLE okunur
const _olRe = APP.match(/var olaylar = Object\.keys\(window\)\s*\.filter\(function \(k\) \{ return (\/\^OLAYLAR[^\n]*?\/)\.test\(k\)/);
if (!_olRe) olculemedi("app.js `var olaylar` anahtar deseni bulunamadı");
const OLAY_ANAHTAR = geval(_olRe[1]);

console.log = _log; console.warn = _warn; console.error = _err;

const SG = W.SUZGEC;
if (!SG || !SG.sahipKimlikte || !SG.sahipAnahtari || !SG.aktifVAdi) {
  olculemedi("SUZGEC yüklenemedi ya da sahipKimlikte/sahipAnahtari/aktifVAdi yok");
}
const DEVLETLER = W.DEVLETLER || [];
const kunyeIx = W._cDevletIx();
const HS = W.HUKUKI_SINIRLAR || [];
const YER = W.YERLESIMLER || [];
if (!YER.length) olculemedi("tarayıcı YERLESIMLER boş");
const adKonumBul = W.adKonumBul, olayKonumu = W.olayKonumu,
      maddeOdakKutusu = W.maddeOdakKutusu, _khGunStr = W._khGunStr;

// Eski havuzla fark (yalnız RAPOR için — çözümde KULLANILMAZ)
const _eski = new Set();
YER.forEach(function (y) {
  if (!((y.d && y.d.length) || (y.v && y.v.length) || (y.s && y.s.length))) return;
  if (typeof y.ad !== "string" || !y.ad) return;
  _eski.add(y.ad); _eski.add(y.ad.split(" (")[0]);
});
const havuzFark = W.AD_KONUM.filter(function (p) { return !_eski.has(p.ad); }).length;

// ---- ③ tek maddenin çözümü -------------------------------------------------
function odakKimlikSayisi(ids, gs) {
  let n = 0;
  for (let i = 0; i < YER.length; i++) {
    const y = YER[i];
    if (typeof y.lat !== "number" || typeof y.lon !== "number") continue;
    if (!SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, kunyeIx)) continue;
    n++;
    if (n >= 2) return n;               // app.js yalnız `n >= 2` sorar
  }
  return n;
}
function odakKutuKaynagi(o) {
  const hk = HS.find(function (k) { return k && k.id === o.odak_kutu_kaynak; });
  return !!(hk && hk.kapsama && hk.kapsama.odak_kutu);
}

// 🔴 İKİ AYRI SORU, İKİ AYRI İŞLEV — ve bunları birleştirmek ÖLÇÜLMÜŞ BİR
//    HATAYDI (`denetim/ODAK-KAPI-SINAV.py` ③, 27 Eylül 2026):
//
//    İlk yazımda tek işlev vardı ve öncelik zinciri boyunca `return`
//    ediyordu. Sınav `kronoloji_misir.js`in KONUMLU bir maddesine olmayan
//    bir `odak_yer` adı soktu ve kapı ÖTMEDİ — çünkü `yer_id` çözülünce
//    işlev dönüyor, `odak_yer`e hiç bakmıyordu.
//    ⇒ O davranış `app.js` sanılmıştı ve YANLIŞTI: `maddeOdakKutusu`
//      KONUMLU dalda da çağrılır — işaret gerçek olay yerinde kalır, KAMERA
//      odak kutusuna gider. Yani konumlu bir maddedeki kırık `odak_yer`
//      gerçekten kamerayı bozar.
//
// ⇒ `kusurlari_bul` YAZILMIŞ HER alanı bağımsız sınar (öncelik gözetmez);
//   `siniflandir` yalnız İŞ SAYIMI için öncelik zincirini yürütür.
//   Maskelenen bir kırık atıf da kusurdur.
// 📌 Kırık atıf AÇILAMAYAN maddede de sorulur: alan yazılmıştır, madde bir
//    künyeye bağlandığı gün kamera kırılır.
function kusurlari_bul(o) {
  const kusur = [];
  const gs = typeof o.t === "string" ? o.t : "";

  if (o.yer_id && !adKonumBul(o.yer_id)) {
    kusur.push({ alan: "yer_id", deger: o.yer_id,
                 niye: "AD_KONUM (app.js kamera havuzu) içinde yok" });
  }
  if (o.odak_kutu_kaynak && !odakKutuKaynagi(o)) {
    kusur.push({ alan: "odak_kutu_kaynak", deger: o.odak_kutu_kaynak,
                 niye: "HUKUKI_SINIRLAR kaydı ya da kapsama.odak_kutu yok" });
  }
  let oyer = o.odak_yer;
  if (oyer && !Array.isArray(oyer)) oyer = [oyer];
  (oyer || []).forEach(function (ad) {
    if (!(typeof ad === "string" && adKonumBul(ad))) {
      kusur.push({ alan: "odak_yer", deger: String(ad),
                   niye: "AD_KONUM (app.js kamera havuzu) içinde yok" });
    }
  });
  let ids = o.odak_kimlik;
  if (ids && !Array.isArray(ids)) ids = [ids];
  if (ids && ids.length) {
    const n = gs ? odakKimlikSayisi(ids, gs) : 0;
    if (n < 2) {
      kusur.push({ alan: "odak_kimlik", deger: ids.join(","),
                   niye: gs ? ("o gün yalnız " + n + " yerleşim — kutu kurulamaz (≥2 şart)")
                            : "maddenin t alanı gün biçiminde değil" });
    }
  }
  return kusur;
}

// İŞ SAYIMI için sınıf — YAZILMIŞ odağın önceliği (`haritayiOlayaGotur` sırası).
// ⚠️ Bu, maddenin sekmede ne yaptığını SÖYLEMEZ — o soru `sekmeDali`nindir.
function siniflandir(o) {
  const gs = typeof o.t === "string" ? o.t : "";
  if (Array.isArray(o.yer_kon) && o.yer_kon.length === 2) return "KONUMLU";
  if (o.yer_id && adKonumBul(o.yer_id)) return "KONUMLU";
  if (o.odak_kutu_kaynak && odakKutuKaynagi(o)) return "KUTULU";
  let oyer = o.odak_yer;
  if (oyer && !Array.isArray(oyer)) oyer = [oyer];
  if (oyer && oyer.some(function (a) { return typeof a === "string" && adKonumBul(a); })) {
    return "KUTULU";                    // app.js `oyn >= 1` ile yeter sayar
  }
  let ids = o.odak_kimlik;
  if (ids && !Array.isArray(ids)) ids = [ids];
  if (ids && ids.length && gs && odakKimlikSayisi(ids, gs) >= 2) return "KUTULU";
  if (o.kapsam_genis === true) return "BEYANLI";
  return "ODAKSIZ";
}

// 🆕 O1 — DEVLET SEKMESİ DALI: `maddeAc` (app.js `function maddeAc(d, m)`)
// kararını yürütür. `maddeAc` DOM/harita istediği için doğrudan çağrılamaz;
// dal KARARI üç satırdır ve o satırlardaki HER işlev (olayKonumu ·
// maddeOdakKutusu) app.js'ten kesilmiş GERÇEK işlevdir:
//
//     hedefYer = m.yer_id ? olayKonumu(m) : null     ← yer_kon YALNIZ yer_id varsa okunur
//     hedefYer          → SEKME_NOKTA       (haritayiOlayaGotur)
//     !m.kapsam_genis   → SEKME_KIPIRDAMAZ  (maddeOdakKutusu ÇAĞRILMAZ)
//     maddeOdakKutusu(m)→ SEKME_KUTU  ‖  devletiYay → SEKME_GOVDE
//
// 🔴 `maddeOdakKutusu`na HAM `m` verilir — tıpkı `maddeAc` gibi. Devlet
//    maddesinde `gi` yoktur ⇒ `odak_kimlik` `_khGunStr(undefined)` =
//    "0NaN-NaN-NaN" ile sorulur ve HİÇ çözülmez. Bu alet doğru günle sorarsa
//    YANLIŞ TEMİZ verir (ölçüldü: 129/129 doğru günle, 0/129 ham `m` ile).
//
// SEKME_OKUNMAYAN = ODAK YAZILMIŞ ama sekmede ETKİSİZ (öteki dalları ezer):
//    · KIPIRDAMAZ dalında `odak_*` ya da `yer_kon` yazılı  (okunmaz)
//    · GÖVDE dalında `odak_*` ya da `yer_kon` yazılı       (okundu ama kutu kurmadı
//                                                            ya da yer_kon hiç okunmadı)
//    OKUNMAYAN gövde maddesinin gövde SONUCU ayrıca `govde` alanında taşınır.
//
// 🆕 W57 — gövde dalının SONUCU (KIRIM-ODAK-A-1006, app.js `maddeAc`):
//    `devletiYay(d.harita || d.id)` o gün dönem bulursa   → SEKME_GOVDE
//    bulamazsa A geri düşüşü `maddeOdakKutusu({t, gi, odak_kimlik:[d.id]})`
//      kutu kurarsa                                       → SEKME_TABI_KUTU
//      kuramazsa (kamera kıpırdamaz, app.js sayar + not)  → SEKME_SESSIZ
//    🔴 Geri düşüşe DOĞRU gün (`gi`) verilir — app.js orada `gi`yi KENDİSİ
//       verir. Ham `m` kuralı (yukarıda) yalnız İLK `maddeOdakKutusu(m)`
//       çağrısı içindir; ikisini karıştırmak bir yönde yanlış temiz, öbür
//       yönde yanlış kirli verir.
//    `DEVLET_HARITA` tarayıcı evreninde YOKSA → SEKME_OLCULEMEDI (temiz DEĞİL).
//    `d` = maddenin İLK künyesi (tekil sayım).
//
// 🆕 SEKME_SESSIZ'in NEDENİ (UMIT-W13 1006b · W57'de A ile birleşti) —
//    `devletiYay`ın iki `return false`u birebir: `DEVLET_HARITA`da o id YOK
//    (`harita_kaydi_yok`) · o gün (`tarihAyarla` 1281–1923'e KISTIRIR)
//    etkin `dnm` YOK (`sahnede_degil`). Dönem sınavı app.js'in kesilmiş
//    `aktifAralik`i; `fi`/`ti` app.js'teki gibi `gunIdx(p.f/p.t)`.
//    🔴 Kıstırma şarttır: 1281 öncesi bir madde app.js'te 1281'in gövdesine
//       bakar — kıstırmasız sınav onu yanlış sınıfa koyar (W57 ölçtü, 6 Ekim:
//       kıstırmasız GOVDE 228 · gövdesiz 84; kıstırmalı GOVDE 247 · gövdesiz 65).
//    ⚠️ Üçüncü `return false` (gövde geometrisi BOŞ) burada SORULMAZ —
//       `parcaCoz` tam havuzu ister. ÖLÇÜLDÜ (1006c, 6 Ekim 2026): gerçek
//       `geo_coz` + `parcaCoz` + `devletiYay` ile 372 gövde-yolu maddesinin
//       372'sinde bu taklit gerçekle UYUŞTU (313 kutu · 59 boş), üçüncü
//       `return` 0. Ama bedeli: bellek tepesi 345 → 1438 MB, +4 sn. Kapıya
//       KONMADI; `G.yay_dogrula` (aşağıda) bu taklidi gerçekle karşılaştırır.
function odakYazili(o) {
  return !!(o.odak_yer || o.odak_kimlik || o.odak_kutu_kaynak);
}
function yerKonYazili(o) {
  return Array.isArray(o.yer_kon) && o.yer_kon.length === 2;
}
const DH_IX = {};
(W.DEVLET_HARITA || []).forEach(function (s) { if (s && s.id && !DH_IX[s.id]) DH_IX[s.id] = s; });
const DH_VAR = Object.keys(DH_IX).length > 0;
function devletiYaySessiz(id, t) {
  const s = DH_IX[id];
  if (!s) return "harita_kaydi_yok";
  const su = Math.max(W.BASLANGIC, Math.min(W.BITIS, W.gunIdx(t)));
  for (let k = 0; k < (s.dnm || []).length; k++) {
    const p = s.dnm[k];
    if (W.aktifAralik(W.gunIdx(p.f), W.gunIdx(p.t), su)) return null;
  }
  return "sahnede_degil";
}
function govdeSonucu(m, d) {
  if (!DH_VAR) return { dal: "SEKME_OLCULEMEDI" };
  const neden = devletiYaySessiz(d.harita || d.id, m.t);
  if (!neden) return { dal: "SEKME_GOVDE" };
  let k = null;
  try { k = maddeOdakKutusu({ t: m.t, gi: W.gunIdx(m.t), odak_kimlik: [d.id] }); } catch (e) { k = null; }
  return { dal: (k && k.kutu) ? "SEKME_TABI_KUTU" : "SEKME_SESSIZ", neden: neden };
}
// 🔴 ZAMAN-GENİŞ-1008 — VERİ PENCERESİ DIŞI kovası (koordinatör hükmü). DÖRT ŞART:
//   (1) LİSTE: `veri_disi[]`, kalem adıyla (madde × künye × devir)
//   (2) ölçüt VERİ: maddenin günü bir `girdi.ufuk_devirleri()` devrinde VE
//       hedef kimlik(ler)in o devire DOKUNAN tek `dnm` dönemi YOK. Veri
//       yazılınca (gövde o devirde doğunca) kalem KENDİLİĞİNDEN çıkar.
//   (3) SEKME SESSİZ / OKUNMAYAN tavanına GİRMEZ, ayrı basılır (odak_olc.py)
//   (4) beyan: bu blok + odak_olc'un satırı.
//   Devirler odak_olc.py'den gelir (`G.devirler` ← girdi.ufuk_devirleri):
//   burada tarih YAZILMAZ. UFUK'un KENDİSİNİN dışı (0900 Mapungubwe · 0981
//   Bạch Đằng) hiçbir devire düşmez ⇒ kovaya girmez (kalıcı istisna olurdu).
//   ⚠️ `G.devirler` yoksa (eski sınav betikleri) kova KURULMAZ — davranış eskisi.
//   ⚠️ Hedef YER ise (odak_yer · odak_kutu_kaynak · yer_kon) kovaya girmez:
//      o kusur devlet verisinin yokluğu değildir.
const DEVIRLER = Array.isArray(G.devirler) ? G.devirler : null;
function pad4(t) {
  t = String(t || "");
  return /^\d{1,3}-/.test(t) ? t.replace(/^\d+/, function (y) { return ("000" + y).slice(-4); }) : t;
}
function veriDisi(m, d, sd) {
  if (!DEVIRLER || !d || !DH_VAR) return null;
  const sessiz = sd.dal === "SEKME_SESSIZ" ||
                 (sd.dal === "SEKME_OKUNMAYAN" && sd.govde === "SEKME_SESSIZ");
  if (!sessiz || m.odak_yer || m.odak_kutu_kaynak || yerKonYazili(m)) return null;
  const t = pad4(m.t);
  const dv = DEVIRLER.find(function (x) {
    return x[1] <= t && (t < x[2] || (x[0] === "ileri" && t === x[2]));   // UFUK sonu dahil
  });
  if (!dv) return null;
  const ids = [d.harita || d.id];
  [].concat(m.odak_kimlik || []).forEach(function (k) {
    const kk = kunyeIx[k]; ids.push((kk && kk.harita) || k);
  });
  for (let i = 0; i < ids.length; i++) {
    const s = DH_IX[ids[i]];
    if (s && (s.dnm || []).some(function (p) { return pad4(p.f) < dv[2] && pad4(p.t) > dv[1]; }))
      return null;                      // o devirde VERİ VAR ⇒ gerçek borç, kovaya girmez
  }
  return dv[0];
}
function sekmeDali(m, d) {
  const hedef = m.yer_id ? olayKonumu(m) : null;
  if (hedef) return { dal: "SEKME_NOKTA" };
  if (!m.kapsam_genis) {
    if (odakYazili(m)) return { dal: "SEKME_OKUNMAYAN", alt: "kipirdamaz_odak" };
    if (yerKonYazili(m)) return { dal: "SEKME_OKUNMAYAN", alt: "kipirdamaz_yer_kon" };
    return { dal: "SEKME_KIPIRDAMAZ" };
  }
  let k = null;
  try { k = maddeOdakKutusu(m); } catch (e) { k = null; }
  if (k && k.kutu) return { dal: "SEKME_KUTU" };
  const g = d ? govdeSonucu(m, d) : { dal: "SEKME_GOVDE" };
  if (odakYazili(m)) return { dal: "SEKME_OKUNMAYAN", alt: "govde_odak_kurulmadi", govde: g.dal };
  if (yerKonYazili(m)) return { dal: "SEKME_OKUNMAYAN", alt: "govde_yer_kon", govde: g.dal };
  return g;
}

// ---- ④ EVREN — tarayıcının açabildiği maddeler ----------------------------
// (b) OLAYLAR: app.js'in `olaylar` deseniyle eşleşen diziler (Osmanlı listesi).
// (a) SEKME:   DEVLETLER[].kronoloji, bağlama SONRASI, nesne başına TEK.
// AÇILAMAZ:   yüklenen bir KRONOLOJI_*/OLAYLAR* dizisinde olup ikisinde de
//             olmayan — ama aynı t+b ikizi sekmedeyse (çok taraflı ekleyici
//             ikinciyi eklemez) GÖRÜNÜR sayılır, açılamaz değil.
const yolOf = new Map();
Object.keys(W).forEach(function (k) {
  if (!OLAY_ANAHTAR.test(k) || !Array.isArray(W[k])) return;
  W[k].forEach(function (m) { if (m && typeof m === "object") yolOf.set(m, "OLAYLAR"); });
});
const sekmeKunye = new Map();
DEVLETLER.forEach(function (d) {
  (d && d.kronoloji || []).forEach(function (m) {
    if (!m || typeof m !== "object") return;
    if (!yolOf.has(m)) yolOf.set(m, "SEKME");
    if (!sekmeKunye.has(m)) sekmeKunye.set(m, d.id);
  });
});
const tbSekme = new Set();
sekmeKunye.forEach(function (_, m) { tbSekme.add(m.t + "|" + m.b); });

const tumu = [];              // [m, dosya, yol]
const goruldu = new Set();
const acilamazDegisken = {};
function ekle(m, yol, degisken) {
  if (!m || typeof m !== "object" || goruldu.has(m)) return;
  goruldu.add(m);
  tumu.push([m, kaynakOf.get(m) || "(kaynaksız)", yol]);
  if (yol === "ACILAMAZ" && degisken) acilamazDegisken[degisken] = (acilamazDegisken[degisken] || 0) + 1;
}
yolOf.forEach(function (yol, m) { ekle(m, yol); });
let tbIkiz = 0;
Object.keys(W).sort().forEach(function (k) {
  if (!/^(KRONOLOJI_|OLAYLAR)/.test(k) || !Array.isArray(W[k])) return;
  W[k].forEach(function (m) {
    if (!m || typeof m !== "object" || goruldu.has(m)) return;
    if (tbSekme.has(m.t + "|" + m.b)) { goruldu.add(m); tbIkiz++; return; }
    ekle(m, "ACILAMAZ", k);
  });
});

// ---- ④b MADDE KİMLİĞİ (ODAK-KAPI-KIMLIK-1006 · W57'de tarayıcı evrenine taşındı)
// Kapı SAYI değil KİMLİK LİSTESİ karşılaştırır (`odak_olc.kapi_olcumu`).
// Sebep ölçüldü (`denetim/ODAK-KAPI-KORLUK-1006.md`): sayı tavanı dosyalar
// arası göçü göremiyordu — bir dosyadaki gerileme, başka bir dosyadan çıkan
// maddeyle 1'e 1 sıfırlanıyordu (E3c/E3e); taşınan beyanlı kusur ise "yeni"
// diye ötüyordu (E4).
// Kimlik = t + "|" + NFC(b).trim(). Açık `id` alanı yok. Dosyalar arası ikizler
// AYNI maddenin kopyasıdır ⇒ ÇOKLU KÜME olarak sayılır. Kimlik BURADA üretilir,
// Python yalnız karşılaştırır: normalleştirme tek yerde durur.
// 📌 W57: "dosya" = maddenin tarayıcıdaki KAYNAK dosyası (`kaynakOf`, paket
//    değil); evren özeti AÇILAMAZ dâhil yüklenen BÜTÜN maddeleri kapsar.
function kimlik(o) {
  return String(o.t) + "|" + String(o.b || "").normalize("NFC").trim();
}
// 8 hex: çakışma "vardı" yönüne düşer ⇒ kapı ÖTER (kapalıya düşer).
function ozet8(k) {
  return crypto.createHash("sha1").update(k, "utf8").digest("hex").slice(0, 8);
}

// ---- ⑤ dosya dosya say -----------------------------------------------------
const SEKME_DALLARI = ["SEKME_NOKTA", "SEKME_KIPIRDAMAZ", "SEKME_OKUNMAYAN", "SEKME_KUTU",
                       "SEKME_GOVDE", "SEKME_TABI_KUTU", "SEKME_SESSIZ", "SEKME_OLCULEMEDI",
                       "SEKME_VERI_DISI"];   // sonuncusu ZAMAN-GENİŞ-1008
const dosyaIx = {};
function dosyaKaydi(ad) {
  if (!dosyaIx[ad]) {
    const sk = {}; SEKME_DALLARI.forEach(function (x) { sk[x] = 0; });
    dosyaIx[ad] = { dosya: ad, madde: 0, acilamaz: 0, beyanli_yabanci: 0,
                    sinif: { KONUMLU: 0, KUTULU: 0, BEYANLI: 0, ODAKSIZ: 0 },
                    sekme: sk, kusur: [], odaksiz: [], okunmayan: [], sekme_sessiz: [], veri_disi: [],
                    beyanli: [], sekme_kutu: [], k8: [] };
  }
  return dosyaIx[ad];
}
const sekmeAlt = {};
const okunmayanGovde = {};    // OKUNMAYAN gövde maddelerinin gövde sonucu (W57)
const sessizNeden = {};
let noktaOdakKimlik = 0;
tumu.forEach(function (r) {
  const m = r[0], d = dosyaKaydi(r[1]), yol = r[2];
  const mk = kimlik(m);
  d.k8.push(ozet8(mk));
  const kus = kusurlari_bul(m);
  const sinif = yol === "ACILAMAZ" ? null : siniflandir(m);
  kus.forEach(function (k) {
    d.kusur.push({ t: m.t, b: String(m.b || "").slice(0, 80), alan: k.alan,
                   deger: k.deger, niye: k.niye, sinif: sinif || "ACILAMAZ", yol: yol, k: mk });
  });
  if (yol === "ACILAMAZ") { d.acilamaz++; return; }
  d.madde++;
  d.sinif[sinif]++;
  if (sinif === "BEYANLI" && yol === "SEKME") d.beyanli_yabanci++;
  if (sinif === "BEYANLI") d.beyanli.push({ k: mk, yol: yol });   // göç bekçisi (KIMLIK-1006)
  if (sinif === "ODAKSIZ") {
    d.odaksiz.push({ t: m.t, b: String(m.b || "").slice(0, 90), yer_id: m.yer_id || null,
                     onem: m.onem, dunya: m.dunya, yol: yol, k: mk });
  }
  if (yol === "SEKME") {
    const kd = kunyeIx[sekmeKunye.get(m)];
    let sd = sekmeDali(m, kd);
    const _vdv = veriDisi(m, kd, sd);                 // ZAMAN-GENİŞ-1008
    if (_vdv) {
      d.veri_disi.push({ t: m.t, b: String(m.b || "").slice(0, 80), devir: _vdv,
                         eski_dal: sd.dal, kunye: sekmeKunye.get(m), k: mk });
      sd = { dal: "SEKME_VERI_DISI" };
    }
    d.sekme[sd.dal]++;
    if (sd.dal === "SEKME_SESSIZ") {
      sessizNeden[sd.neden] = (sessizNeden[sd.neden] || 0) + 1;
      d.sekme_sessiz.push({ t: m.t, b: String(m.b || "").slice(0, 80), neden: sd.neden,
                            kunye: sekmeKunye.get(m), k: mk });
    }
    // KUTU maddesi: odak kutusu düşerse ne olurdu (KIMLIK sınavının E1b adayı; bilgi)
    if (sd.dal === "SEKME_KUTU" && kd) {
      d.sekme_kutu.push({ kunye: kd.id, k: mk, kutusuz: govdeSonucu(m, kd).dal });
    }
    if (sd.govde) okunmayanGovde[sd.govde] = (okunmayanGovde[sd.govde] || 0) + 1;
    if (sd.alt) {
      sekmeAlt[sd.alt] = (sekmeAlt[sd.alt] || 0) + 1;
      d.okunmayan.push({ t: m.t, b: String(m.b || "").slice(0, 80), alt: sd.alt,
                         kunye: sekmeKunye.get(m), k: mk });
    }
    if (sd.dal === "SEKME_NOKTA" && m.odak_kimlik) noktaOdakKimlik++;
  }
});

const diskSet = new Set(G.disk || []);
const yukAd = new Set(yuklenen.map(function (k) { return path.basename(k); }));
const cikti = {
  evren: "tarayici",
  yerlesim: YER.length, kunye: DEVLETLER.length,
  ad_konum: W.AD_KONUM.length, havuz_fark_eski_sehir: havuzFark,
  yuklenen_kaynak: yuklenen.length, satir_ici: satirIci,
  yuk_uyari: yukHata,
  app_sonrasi_kronoloji: appSonrasi.filter(function (k) { return /\/(kronoloji_|olaylar)/.test(k); }),
  disk_tarayicida_yok: [...diskSet].filter(function (f) { return !yukAd.has(f); }).sort(),
  evren_sayi: { OLAYLAR: 0, SEKME: 0, ACILAMAZ: 0, tb_ikizi_gorunur: tbIkiz },
  acilamaz_degisken: acilamazDegisken,
  sekme_alt: sekmeAlt, sekme_nokta_odak_kimlik: noktaOdakKimlik,
  sekme_okunmayan_govde: okunmayanGovde, devlet_harita_var: DH_VAR,
  sekme_sessiz_neden: sessizNeden,
  veri_penceresi_devirler: DEVIRLER,                   // ZAMAN-GENİŞ-1008 (null = kova kurulmadı)
  bagla_log: LOG.filter(function (l) { return /eşlenemedi|EZİLDİ|künyesi olmayan/.test(l); })
                .map(function (l) { return l.slice(0, 400); }),
  dosyalar: Object.keys(dosyaIx).sort().map(function (k) { return dosyaIx[k]; }),
};
tumu.forEach(function (r) { cikti.evren_sayi[r[2]]++; });

// 🆕 1006c — `G.yay_dogrula`: `sekmeDali`nın gövde taklidini app.js'in GERÇEK
// `devletiYay`ıyla karşılaştırır (gerçek `geo_coz` tam havuzu çözer, gerçek
// `parcaCoz` gövdeyi kurar, `harita.fitBounds` çağrılıp çağrılmadığı sayılır).
// Varsayılan KAPALI: +1,1 GB bellek, +4 sn (ölçüldü). `--yay-dogrula` ve
// `denetim/ARAC-ODAK-SEKME-SINAV-1006.py` S7 çağırır. Uyuşmazlık = taklit yanlış.
if (G.yay_dogrula) {
  const _yuk = [];
  const _taze = { head: { appendChild: function (s) {
    try { geval(oku(path.join(KOK, "data", "devlet_parcalar.js"))); }
    catch (e) { olculemedi("data/devlet_parcalar.js koşmadı: " + e.message); }
    if (s.onload) s.onload();
  } }, createElement: function () { return {}; }, querySelector: _bos, getElementById: _bos };
  global.document = _taze;
  const _ael = global.addEventListener; delete global.addEventListener;   // geo_coz tam havuzu HEMEN istesin
  console.log = function () {};
  console.error = function () { _yuk.push([].join.call(arguments, " ")); };
  W.DEVLET_PARCALAR = undefined;                                   // katman 1 değil, TAM havuz
  try { geval(oku(path.join(KOK, "js", "geo_coz.js"))); } catch (e) { olculemedi("js/geo_coz.js koşmadı: " + e.message); }
  console.log = _log; console.error = _err;
  if (_ael) global.addEventListener = _ael;
  if (!W.DEVLET_PARCALAR || !W.DEVLET_PARCALAR.length || W.__DP_TAM_HATA && !/__govdeYenile/.test(W.__DP_TAM_HATA)) {
    olculemedi("tam gövde havuzu çözülmedi: " + (W.__DP_TAM_HATA || "boş"));
  }
  geval(kes("function parcaCoz(", "var PARCALAR = window.PARCALAR"));
  geval(kes("var devletler2 = (window.DEVLET_HARITA", "window.__govdeYenile"));
  geval(kes("function devletAktifDonem(", "\n}") + "\n}\n");    // devletiYay onu çağırır (YER-ARAMA-KUTUSU-1006 ayırdı)
  geval(kes("function devletiYay(id)", "\n}") + "\n}\n");
  let _fit = null;
  global.harita = { fitBounds: function (b) { _fit = b; } };
  const yd = { halka: W.DEVLET_PARCALAR.length, capraz: {}, ucuncu_return: [], uyusmazlik: [] };
  tumu.forEach(function (r) {
    const m = r[0]; if (r[2] !== "SEKME") return;
    const d = kunyeIx[sekmeKunye.get(m)];
    const sd = sekmeDali(m, d);
    if (!(sd.dal === "SEKME_GOVDE" || sd.dal === "SEKME_SESSIZ" || sd.dal === "SEKME_TABI_KUTU" ||
          (sd.dal === "SEKME_OKUNMAYAN" && /^govde_/.test(sd.alt)))) return;
    const taklit = devletiYaySessiz(d.harita || d.id, m.t);        // null = gövde var
    _fit = null;
    geval("suanki = " + Math.max(W.BASLANGIC, Math.min(W.BITIS, W.gunIdx(m.t))) + ";");
    try { W.devletiYay(d.harita || d.id); } catch (e) { olculemedi("devletiYay patladı: " + e.message); }
    const k = (taklit ? "taklit_sessiz" : "taklit_govde") + "|gercek_" + (_fit ? "kutu" : "bos");
    yd.capraz[k] = (yd.capraz[k] || 0) + 1;
    const iz = d.id + " " + m.t + " " + String(m.b || "").slice(0, 50);
    if (!taklit && !_fit) yd.ucuncu_return.push(iz);            // geometri boş — taklit YANLIŞ TEMİZ
    if (taklit && _fit) yd.uyusmazlik.push(iz);                 // taklit YANLIŞ KİRLİ
  });
  cikti.yay_dogrulama = yd;
}

// Sınav kancası: `G.sor = [{t, b}]` ⇒ `t` eşit + `b` içeren HER madde için
// yol · sınıf · sekme dalı · kusur (`denetim/ARAC-ODAK-SEKME-SINAV-1006.py`).
if (Array.isArray(G.sor)) {
  cikti.soru = G.sor.map(function (q) {
    const bul = tumu.filter(function (r) {
      return r[0].t === q.t && String(r[0].b || "").indexOf(q.b) >= 0;
    });
    return { soru: q, cevap: bul.map(function (r) {
      const m = r[0];
      return { dosya: r[1], yol: r[2], kunye: sekmeKunye.get(m) || null, k: kimlik(m),
               sinif: r[2] === "ACILAMAZ" ? null : siniflandir(m),
               sekme: r[2] === "SEKME" ? sekmeDali(m, kunyeIx[sekmeKunye.get(m)]) : null,
               kusur: kusurlari_bul(m) };
    }) };
  });
}

process.stdout.write(JSON.stringify(cikti));

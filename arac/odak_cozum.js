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
//   ② `yer_id` `sehirler` havuzunda aranır ve o havuz `app.js:3101`de
//      `d`/`v`/`s` taşıyanlara SÜZÜLÜR; Python sürümü BÜTÜN yerleşimleri
//      havuz sayıyordu ⇒ sahipsiz bir noktaya yazılan `yer_id` "çözüldü"
//      görünüyordu, oysa app.js onu bulamaz.
// ⇒ Burada `SUZGEC.sahipKimlikte` / `sahipAnahtari` / `aktifVAdi` GERÇEK
//   işlevleri çağrılır. Süzgeç değişirse bu ölçüm KENDİLİĞİNDEN takip eder.
//
// GİRDİ  argv[2] = JSON dosyası: { kok, yerlesimler: [...], dosyalar: [...] }
//        `yerlesimler` Python tarafından `girdi.yukle()` ile verilir — çünkü
//        HANGİ dosyanın canlı olduğu yalnız `GIRDI_DOSYALARI`dan okunur
//        (`CLAUDE.md §5`: liste burada TUTULMAZ, üç kez bayatladı).
// ÇIKTI  stdout'a tek JSON.
//
// ⚠️ `gs` (gün dizgisi) olarak maddenin `t` alanı KULLANILIR. app.js
// `_khGunStr(o.gi)` çağırır ve `o.gi = gunIdx(o.t)` olduğu için ikisi aynı
// dizgiyi verir — ŞU ŞARTLA ki `t` tam gün biçimindedir. O şartı
// `denetle_kronoloji.py` ② zaten zorluyor (YYYY-AA-GG); zorlamayı bırakırsa
// bu varsayım da düşer.

const fs = require("fs");
const path = require("path");

function oku(yol) {
  return fs.readFileSync(yol, "utf8");
}

const G = JSON.parse(oku(process.argv[2]));
const KOK = G.kok;

global.window = global.window || {};
const W = global.window;

// ---- ① yerleşim havuzu (Python'dan geldi) --------------------------------
W.YERLESIMLER = G.yerlesimler;

// ---- ② künye dizini — app.js:7341 `_cDevletIx` ile aynı -------------------
(function () {
  eval(oku(path.join(KOK, "data", "devletler.js")));
})();
const DEVLETLER = W.DEVLETLER || [];
const kunyeIx = {};
DEVLETLER.forEach(function (d) { if (d && d.id) kunyeIx[d.id] = d; });

// ---- ③ hukukî sınırlar (odak_kutu_kaynak için) ---------------------------
(function () {
  const y = path.join(KOK, "data", "hukuki_sinirlar.js");
  if (fs.existsSync(y)) { try { eval(oku(y)); } catch (e) { } }
})();
const HS = W.HUKUKI_SINIRLAR || [];

// ---- ④ SÜZGEÇ — gerçek sahiplik çözücü ----------------------------------
(function () {
  eval(oku(path.join(KOK, "js", "suzgec.js")));
})();
const SG = W.SUZGEC;
if (!SG || !SG.sahipKimlikte || !SG.sahipAnahtari || !SG.aktifVAdi) {
  // 🔴 ÖLÇÜLEMEDİ asla TEMİZ sayılmaz (`denetle_yayin.py` deseni).
  process.stdout.write(JSON.stringify({
    hata: "SUZGEC yüklenemedi ya da sahipKimlikte/sahipAnahtari/aktifVAdi yok"
  }));
  process.exit(0);
}

// ---- ⑤ `sehirler` havuzu — app.js:3101 SÜZGECİYLE -----------------------
// 🔴 Süzgeç kritik: `d`/`v`/`s` taşımayan yerleşim `sehirler`de YOKTUR,
//    dolayısıyla ona yazılan bir `yer_id` app.js'te ÇÖZÜLMEZ.
const SEHIR = new Set();
let sehirSayi = 0;
W.YERLESIMLER.forEach(function (y) {
  const dolu = (y.d && y.d.length) || (y.v && y.v.length) || (y.s && y.s.length);
  if (!dolu) return;
  if (typeof y.ad !== "string" || !y.ad) return;
  sehirSayi++;
  SEHIR.add(y.ad);
  SEHIR.add(y.ad.split(" (")[0]);        // app.js'in TEK esnekliği
});

// ---- ⑥ tek maddenin çözümü — app.js sırasıyla BİREBİR -------------------
function odakKimlikSayisi(ids, gs) {
  let n = 0;
  for (let i = 0; i < W.YERLESIMLER.length; i++) {
    const y = W.YERLESIMLER[i];
    if (typeof y.lat !== "number" || typeof y.lon !== "number") continue;
    if (!SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, kunyeIx)) continue;
    n++;
    if (n >= 2) return n;               // app.js yalnız `n >= 2` sorar
  }
  return n;
}

// 🔴 İKİ AYRI SORU, İKİ AYRI İŞLEV — ve bunları birleştirmek ÖLÇÜLMÜŞ BİR
//    HATAYDI (`denetim/ODAK-KAPI-SINAV.py` ③, 27 Eylül 2026):
//
//    İlk yazımda tek işlev vardı ve öncelik zinciri boyunca `return`
//    ediyordu. Sınav `kronoloji_misir.js`in KONUMLU bir maddesine olmayan
//    bir `odak_yer` adı soktu ve kapı ÖTMEDİ — çünkü `yer_id` çözülünce
//    işlev dönüyor, `odak_yer`e hiç bakmıyordu.
//    ⇒ O davranış `app.js` sanılmıştı ve YANLIŞTI: `maddeOdakKutusu`
//      **`app.js:11940`da KONUMLU dalda da çağrılır** — işaret gerçek olay
//      yerinde kalır, KAMERA odak kutusuna gider. Yani konumlu bir maddedeki
//      kırık `odak_yer` gerçekten kamerayı bozar.
//
// ⇒ `kusurlari_bul` YAZILMIŞ HER alanı bağımsız sınar (öncelik gözetmez);
//   `siniflandir` yalnız İŞ SAYIMI için öncelik zincirini yürütür.
//   Maskelenen bir kırık atıf da kusurdur: bugün üstteki alan onu gizliyorsa,
//   yarın o alan değişince kamera kırılır ve kimse sebebini bilmez.
function kusurlari_bul(o) {
  const kusur = [];
  const gs = typeof o.t === "string" ? o.t : "";

  if (o.yer_id && !SEHIR.has(o.yer_id)) {
    kusur.push({ alan: "yer_id", deger: o.yer_id,
                 niye: "sehirler havuzunda yok (d/v/s taşıyan yerleşim değil)" });
  }
  if (o.odak_kutu_kaynak) {
    const hk = HS.find(function (k) { return k && k.id === o.odak_kutu_kaynak; });
    if (!(hk && hk.kapsama && hk.kapsama.odak_kutu)) {
      kusur.push({ alan: "odak_kutu_kaynak", deger: o.odak_kutu_kaynak,
                   niye: "HUKUKI_SINIRLAR kaydı ya da kapsama.odak_kutu yok" });
    }
  }
  let oyer = o.odak_yer;
  if (oyer && !Array.isArray(oyer)) oyer = [oyer];
  (oyer || []).forEach(function (ad) {
    if (!(typeof ad === "string" && SEHIR.has(ad))) {
      kusur.push({ alan: "odak_yer", deger: String(ad),
                   niye: "sehirler havuzunda yok" });
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

// İŞ SAYIMI için sınıf — `app.js`in kamera önceliği sırasıyla
function siniflandir(o) {
  const gs = typeof o.t === "string" ? o.t : "";
  if (Array.isArray(o.yer_kon) && o.yer_kon.length === 2) return "KONUMLU";
  if (o.yer_id && SEHIR.has(o.yer_id)) return "KONUMLU";
  if (o.odak_kutu_kaynak) {
    const hk = HS.find(function (k) { return k && k.id === o.odak_kutu_kaynak; });
    if (hk && hk.kapsama && hk.kapsama.odak_kutu) return "KUTULU";
  }
  let oyer = o.odak_yer;
  if (oyer && !Array.isArray(oyer)) oyer = [oyer];
  if (oyer && oyer.some(function (a) { return typeof a === "string" && SEHIR.has(a); })) {
    return "KUTULU";                    // app.js `oyn >= 1` ile yeter sayar
  }
  let ids = o.odak_kimlik;
  if (ids && !Array.isArray(ids)) ids = [ids];
  if (ids && ids.length && gs && odakKimlikSayisi(ids, gs) >= 2) return "KUTULU";
  if (o.kapsam_genis === true) return "BEYANLI";
  return "ODAKSIZ";
}

function cozum(o) {
  return { sinif: siniflandir(o), kusur: kusurlari_bul(o) };
}

// ---- ⑦ dosyaları tara ---------------------------------------------------
const cikti = { sehir_havuzu: SEHIR.size, sehir_kayit: sehirSayi,
                yerlesim: W.YERLESIMLER.length, kunye: DEVLETLER.length,
                dosyalar: [] };

G.dosyalar.forEach(function (ad) {
  const yol = path.join(KOK, "data", ad);
  let kayit = null;
  let hata = null;
  try {
    const kutu = {};
    (function () {
      const oncesi = new Set(Object.keys(W));
      eval(oku(yol));
      Object.keys(W).forEach(function (k) {
        if (!oncesi.has(k) && Array.isArray(W[k])) kutu.k = W[k];
      });
    })();
    kayit = kutu.k;
    if (!Array.isArray(kayit)) hata = "dosya bir dizi vermedi";
  } catch (e) {
    hata = String(e && e.message || e).slice(0, 160);
  }
  if (hata) { cikti.dosyalar.push({ dosya: ad, hata: hata }); return; }

  const s = { KONUMLU: 0, KUTULU: 0, BEYANLI: 0, ODAKSIZ: 0 };
  const kusurlar = [];
  const odaksiz = [];
  kayit.forEach(function (o) {
    if (!o || typeof o !== "object") return;
    const r = cozum(o);
    s[r.sinif]++;
    if (r.kusur.length) {
      r.kusur.forEach(function (k) {
        kusurlar.push({ t: o.t, b: String(o.b || "").slice(0, 80),
                        alan: k.alan, deger: k.deger, niye: k.niye,
                        sinif: r.sinif });
      });
    }
    if (r.sinif === "ODAKSIZ") {
      odaksiz.push({ t: o.t, b: String(o.b || "").slice(0, 90),
                     yer_id: o.yer_id || null, onem: o.onem, dunya: o.dunya });
    }
  });
  cikti.dosyalar.push({ dosya: ad, madde: kayit.length, sinif: s,
                        kusur: kusurlar, odaksiz: odaksiz });
});

process.stdout.write(JSON.stringify(cikti));

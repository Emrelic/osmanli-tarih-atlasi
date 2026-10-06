// rotus_coz.js — `data/rotus.js` kayıtlarını `js/rotus.js`in KENDİ işleviyle
// okur ve `arac/denetle.py` "Değişmez R"ye JSON döndürür.
//
// 🔴 NİÇİN NODE — `arac/odak_cozum.js` kalıbı: kaydın anlamı (şema, hüküm,
//    hangi gün etkin) tarayıcıdaki `js/rotus.js`te yazılıdır. Python'da
//    yeniden yazmak ikinci bir doğruluk kaynağı açardı. Burada o dosya
//    OLDUĞU GİBİ koşturulur; kopya YOK.
//
// GİRDİ  argv[2] = rotus dosyası (varsayılan <kök>/data/rotus.js)
//        argv[3] = js/rotus.js yolu (varsayılan <kök>/js/rotus.js) — sınav için
// ÇIKTI  stdout'a tek JSON: {dosya_var, kayit_sayisi, kayitlar:[…denetle()…]}
//        Dosya yoksa {dosya_var:false, kayit_sayisi:0, kayitlar:[]} (çıkış 0).
//        Dosya var ama `window.ROTUS` dizi değilse / betik patlarsa ⇒
//        {hata} + ÇIKIŞ 2 (ölçülemedi ≠ temiz).
const fs = require("fs");
const path = require("path");

const KOK = path.dirname(__dirname);
const DOSYA = process.argv[2] || path.join(KOK, "data", "rotus.js");
const COZ = process.argv[3] || path.join(KOK, "js", "rotus.js");

function olculemedi(neden) {
  process.stdout.write(JSON.stringify({ hata: "ÖLÇÜLEMEDİ: " + neden }));
  process.exit(2);
}

global.window = global;
let R;
try {
  R = require(path.resolve(COZ));
} catch (e) {
  olculemedi("js/rotus.js yüklenemedi: " + e.message);
}

if (!fs.existsSync(DOSYA)) {
  process.stdout.write(JSON.stringify({ dosya_var: false, kayit_sayisi: 0, kayitlar: [] }));
  process.exit(0);
}
try {
  delete global.ROTUS;
  (0, eval)(fs.readFileSync(DOSYA, "utf8"));
} catch (e) {
  olculemedi(path.basename(DOSYA) + " koşmadı: " + e.message);
}
if (!Array.isArray(global.ROTUS)) olculemedi("window.ROTUS dizi değil");
const kayitlar = R.denetle(global.ROTUS);
process.stdout.write(JSON.stringify({ dosya_var: true, kayit_sayisi: kayitlar.length, kayitlar }));

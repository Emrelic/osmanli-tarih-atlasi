// YAMA GÜVENLİK TARAMASI — "bu diziyi tabanın YERİNE koyduğumda NE KAYBOLUYOR?"
//
// 🔴 DOĞURAN VAKA (6 Eylül 2026, ve kusur KOORDİNATÖRÜNDÜ):
//    `yer_yama_1923_bosluk_0906.js` Timbuktu için yalnız
//    `s:[{1894→1923, fransa-cumhuriyet}]` taşıyordu. Uygulayıcı `s:`
//    dizisini BÜTÜN OLARAK değiştiriyor ⇒ tabanın üç dönemi (mali ·
//    songhay · fas, 1281-1700) SİLİNECEKTİ. Timbuktu 613 yıl sahipsiz
//    kalırdı — `Değişmez 1`de dev bir delik.
//    🟢 Onu yalnız ÇAKIŞMA TESPİTİ durdurdu (başka üç yama da aynı kaydı
//       yazıyordu). Tek yama olsaydı SESSİZCE inecekti.
//
// ⇒ Bu alet o soruyu ÇAKIŞMA OLMASA DA sorar: her yama kaydı, tabanla
//   karşılaştırılır ve DÜŞEN dönemler adıyla bildirilir.
//
// ⚠️ DÜŞEN DÖNEM HER ZAMAN KUSUR DEĞİLDİR — bir yama bilerek de
//    kısaltabilir (hayalet devlet düzeltmesi, yanlış tarih onarımı).
//    Bu yüzden alet HÜKÜM VERMEZ, iki kovaya ayırır:
//      🔴 TAM KAYIP  — düşen dönemin yerine HİÇBİR ŞEY konmuyor
//                      (kapsanmayan zaman aralığı doğuyor) ⇒ DELİK
//      🟡 DEĞİŞİM    — düşüyor ama aralık başka dönemlerce kapanıyor
//
// KULLANIM:  node denetim/ARAC-YAMA-KAYIP-TARAMA-0906.js

const fs = require("fs"), vm = require("vm");
const TABAN = /^yerlesimler.*\.js$/;
const ALANLAR = ["d", "s", "v", "isg"];

function oku() {
  const dosya = {};
  for (const f of fs.readdirSync("data")) {
    if (!/^yer(lesim|_yama).*\.js$/.test(f)) continue;
    const d = { window: {} };
    vm.createContext(d);
    try { vm.runInContext(fs.readFileSync("data/" + f, "utf8"), d); } catch (e) { continue; }
    const kayitlar = [];
    for (const k of Object.keys(d.window)) {
      const A = d.window[k];
      if (!Array.isArray(A)) continue;
      for (const y of A) if (y && y.ad) kayitlar.push(y);
    }
    dosya[f] = kayitlar;
  }
  return dosya;
}

const D = oku();
const taban = {};
for (const f of Object.keys(D)) if (TABAN.test(f)) for (const y of D[f]) if (!taban[y.ad]) taban[y.ad] = y;

// bir kaydin TUM sahiplik araliklarini birlestir (hangi alan olursa olsun)
function araliklar(y) {
  const a = [];
  for (const al of ALANLAR) for (const p of (y[al] || [])) if (p.f && p.t) a.push([p.f, p.t]);
  return a.sort((x, z) => x[0] < z[0] ? -1 : 1);
}
// [f,t) araligi kume tarafindan TAM kapaniyor mu?
function kapali(f, t, kume) {
  let imlec = f;
  for (let i = 0; i < 400; i++) {
    const uygun = kume.filter((p) => p[0] <= imlec && p[1] > imlec);
    if (!uygun.length) return imlec;                 // acik kalan gun
    imlec = uygun.reduce((m, p) => p[1] > m ? p[1] : m, imlec);
    if (imlec >= t) return null;                     // kapali
  }
  return imlec;
}

let tamKayip = 0, degisim = 0, incelenen = 0;
const rapor = [];
for (const f of Object.keys(D)) {
  if (TABAN.test(f)) continue;
  for (const y of D[f]) {
    const t = taban[y.ad];
    if (!t) continue;                                 // veride yok — ayri sinif
    const yamaAlan = ALANLAR.filter((al) => Array.isArray(y[al]) && y[al].length);
    if (!yamaAlan.length) continue;
    incelenen++;
    // yama uygulanmis HALI kur: yamanin yazdigi alan yamadan, otekiler tabandan
    const sonra = {};
    for (const al of ALANLAR) sonra[al] = yamaAlan.indexOf(al) >= 0 ? y[al] : (t[al] || []);
    const oncekiA = araliklar(t), sonrakiA = araliklar(sonra);
    if (!oncekiA.length) continue;
    // tabanda kapali olup yamadan SONRA acilan aralik var mi?
    const acik = [];
    for (const [f0, t0] of oncekiA) {
      if (kapali(f0, t0, oncekiA) !== null) continue;   // tabanda zaten acik
      const nokta = kapali(f0, t0, sonrakiA);
      if (nokta !== null) acik.push(f0 + "->" + t0 + "  (acilan: " + nokta + ")");
    }
    if (acik.length) {
      tamKayip++;
      rapor.push("🔴 " + y.ad + "   [" + f + "]  alan:" + yamaAlan.join(",") +
                 "\n     TABANDA KAPALI, YAMADAN SONRA ACIK:\n       " + acik.slice(0, 3).join("\n       "));
    } else {
      const dusenSay = oncekiA.length - sonrakiA.length;
      if (dusenSay > 0) { degisim++; }
    }
  }
}

console.log("incelenen yama kaydi (tabanda karsiligi olan): " + incelenen);
console.log("");
console.log("🔴 TAM KAYIP (yama DELIK aciyor) : " + tamKayip);
console.log("🟡 donem sayisi azaliyor ama aralik KAPALI : " + degisim);
console.log("");
rapor.forEach((r) => console.log(r));
if (!rapor.length) console.log("  (delik acan yama YOK)");
process.exit(tamKayip ? 1 : 0);

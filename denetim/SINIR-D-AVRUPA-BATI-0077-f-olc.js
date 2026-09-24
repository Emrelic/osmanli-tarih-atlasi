// SINIR-D-AVRUPA-BATI-0077 — F ölçütü tablo OLSAYDI kaç etkin E hattım karşılardı? (1923-09-01)
// F ölçütü (GORUNUM-ABCD-0916 §35): E + MC'ye kayıtlı antlaşma + tarafların üyeliği;
// 1920 öncesinde büyük devletlerin tanıması. Üyelik denetim/TANINMA-1923-0916.json'dan.
// "MC'ye kayıtlı" yarısı: dayanakta LNTS künyesi geçiyor mu (metinle) — geçmiyorsa ölçülemedi.
// HİÇBİR ŞEY YAZMAZ.
const fs = require("fs");
global.window = {};
require("../data/d_sinirlar_avrupa_bati.js");
const T = JSON.parse(fs.readFileSync(__dirname + "/TANINMA-1923-0916.json", "utf8"));
const GUN = "1923-09-01";
const uye = {};
T.mc_uyeleri_1923_10_29.forEach(u => { uye[u.id] = u.uyelik_tarihi; });
const K = window.D_SINIRLAR_AVRUPA_BATI.filter(k => k.sinif === "E" && k.hat && k.f <= GUN && GUN < k.t);
const say = { toplam: K.length, ikisi_uye: 0, biri_degil: 0, lnts_gecen: 0, ikisi_uye_ve_lnts: 0 };
const disarida = {};
K.forEach(k => {
  const u = k.taraflar.map(t => uye[t] && uye[t] <= GUN);
  const lnts = JSON.stringify(k.dayanak || []).match(/LNTS|League of Nations Treaty Series|Milletler Cemiyeti Antlaşma/i);
  if (u.every(Boolean)) say.ikisi_uye++;
  else { say.biri_degil++; k.taraflar.forEach((t, i) => { if (!u[i]) disarida[t] = (disarida[t] || 0) + 1; }); }
  if (lnts) say.lnts_gecen++;
  if (u.every(Boolean) && lnts) say.ikisi_uye_ve_lnts++;
  console.log((u.every(Boolean) ? "UYE " : "--- ") + (lnts ? "LNTS " : "     ") + k.id + "  " + k.taraflar.join("|"));
});
console.log(JSON.stringify(say), "üye olmayan taraf:", JSON.stringify(disarida));

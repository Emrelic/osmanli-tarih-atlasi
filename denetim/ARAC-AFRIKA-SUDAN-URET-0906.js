// SUDAN YAMASI ÜRETECİ — `YONTEM-1923-SINIR.md §⑥`: ELLE YAZMA.
//
// Yama CANLI VERİDEN okunur ve `s:` zincirinin TAMAMI yazılır.
// 🔴 Silistre elle yazıldı ve yama 6 dönemin 5'ini SİLİYORDU.
//    Uygulayıcı `s:`i ezerse, yamada olmayan dönem KAYBOLUR.
//    ⇒ Bu üreteç zinciri OLDUĞU GİBİ kopyalar, yalnız SON dönemin
//      `d:` alanını değiştirir. Öteki dönemlere DOKUNMAZ.
//
// İKİ KALEM AYRI ÜRETİLİR — olgunlukları farklı:
//   A · 34 nokta · gün 1899-01-19 DEĞİŞMİYOR · yalnız kimlik
//       2s kapısı AÇIK: çekirdekte 0 gün, konu BİREBİR
//       ⇒ borç DOĞURMUYOR
//   B ·  3 nokta · Dârfûr · gün DE kimlik DE değişiyor
//       2s kapısı KAPALI: 1916-11-06'nın çekirdekte İLGİLİ maddesi YOK
//       ⇒ kronoloji maddesi BORCU doğurur ⇒ AYRI dosya, KARAR bekler
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const G = "1923-10-28";

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  const d = { window: {} }; vm.createContext(d);
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), d); } catch (e) { continue; }
  for (const k of Object.keys(d.window)) {
    const A = d.window[k];
    if (Array.isArray(A)) for (const y of A)
      if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}
const akt = (z) => (z || []).filter(p => p.f <= G && G < p.t);
const alt = (y) => {
  if (akt(y.d).length) return "OSMANLI";
  if (akt(y.v).length) return "OSMANLI-tabi";
  const s = akt(y.s)[0]; return s ? s.d : null;
};
const KUTU = (y) => y.lat >= 3.5 && y.lat <= 22 && y.lon >= 22 && y.lon <= 38.6;

const hedef = N.filter(y => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G) &&
  alt(y) === "ingiltere" && bolge(y) === "SAHRA-ALTI-AFRIKA" && KUTU(y));

const A = [], B = [];
for (const y of hedef) {
  const son = akt(y.s)[0];
  (son.f === "1899-01-19" ? A : B).push(y);
}
console.log("KALEM A (1899-01-19): " + A.length);
console.log("KALEM B (Dârfûr)    : " + B.length +
  "   " + B.map(y => y.ad).join(" · "));

// zinciri OLDUĞU GİBİ kopyala, yalnız SON dönemin `d:`sini değiştir
function zincir(y, yeniKimlik, yeniF) {
  return (y.s || []).map(p => {
    const q = { f: p.f, t: p.t, d: p.d };
    for (const a of Object.keys(p)) if (!(a in q)) q[a] = p[a];  // k, kaynak…
    if (p.f === akt(y.s)[0].f && p.t === akt(y.s)[0].t) {
      q.d = yeniKimlik;
      if (yeniF) q.f = yeniF;
    }
    return q;
  });
}
// KALEM B'de bir ÖNCEKİ dönemin `t:`si de kayar (darfur 1916-05-23 -> 11-06)
function zincirB(y) {
  const son = akt(y.s)[0];
  return (y.s || []).map(p => {
    const q = { f: p.f, t: p.t, d: p.d };
    for (const a of Object.keys(p)) if (!(a in q)) q[a] = p[a];
    if (p.t === son.f && p.d === "darfur") q.t = "1916-11-06";   // önceki uç
    if (p.f === son.f && p.t === son.t) {                        // son dönem
      q.f = "1916-11-06"; q.d = "ingiliz-sudani";
    }
    return q;
  });
}

const j = (o) => JSON.stringify(o);
const satir = (y, z) => "  { ad: " + j(y.ad) + ", s: " + j(z) + " },";

const basA = `// -*- coding: utf-8 -*-
// YER_YAMA_AFRIKA_1923 — AFRİKA oturumu, 6 Eylül 2026
// KALEM A · SUDAN · ${A.length} nokta · GÜN DEĞİŞMİYOR, yalnız KİMLİK
//
// ═══ NİÇİN ═══
// ${A.length} nokta Anglo-Mısır Sudanı coğrafyasında (lat 3,5-22 · lon 22-38,6)
// \`ingiltere\` kimliğiyle boyanıyor. Oysa:
//   künye  \`ingiliz-sudani\`  1899-01-19 → 1923-10-29   🟢 VAR
//   renk   #24d2c0                                     🟢 VAR
//   emsal  \`Darfur\` noktası ZATEN \`ingiliz-sudani\` taşıyor
// ⇒ Yeni künye GEREKMİYOR, yeni renk GEREKMİYOR.
//
// ═══ KAYNAK (§4 — TDV önce) ═══
// TDV \`sudan\` (CANLI, gövde KESİLMEDEN okundu):
//   «19 Ocak 1899'da Sudan'ın kontrolü fiilen İngiltere'nin eline geçmiş
//    oldu» · «condominium (iki devletin ortak hâkimiyeti) adı verilen
//    yeni bir idare başlattı»
// ⇒ Veride duran gün (\`1899-01-19\`) TDV ile BİREBİR. Gün DEĞİŞMİYOR.
//
// ═══ ⑤ 2s KAPISI — AÇIK ═══
// ÇEKİRDEK \`olaylar_ek9.js\`: «Kondominyum Antlaşması — Sudan'ın
// İngiliz-Mısır ortak idaresi» · \`1899-01-19\` · **0 GÜN** uzaklıkta ve
// konusu BİREBİR ilgili. ⇒ Bu yama yeni bir 2s borcu DOĞURMUYOR.
//
// ═══ ⑥ ELLE YAZILMADI ═══
// \`denetim/ARAC-AFRIKA-SUDAN-URET-0906.js\` canlı veriden üretti.
// \`s:\` zincirinin TAMAMI yazılıyor (nube → funj → mehdi → …), yalnız
// SON dönemin \`d:\` alanı değişiyor. Silistre dersi: elle yazılan yama
// 6 dönemin 5'ini siliyordu.
//
// ⚠️ ÖLÇMEDİĞİM: bu 34 noktanın \`kaynak:\` alanı ZATEN BOŞ ("(yok)", 34/34).
//    Yama kimliği düzeltiyor; \`kaynak:\` borcu AYRI ve KAPANMADI.

window.YER_YAMA_AFRIKA_1923 = [`;

const basB = `// -*- coding: utf-8 -*-
// AFRİKA · KALEM B — DÂRFÛR · ${B.length} nokta · 🔴 KARAR BEKLİYOR, UYGULANMAZ
//
// 🔴 BU DOSYA KALEM A'DAN AYRI TUTULDU ÇÜNKÜ BORÇ DOĞURUYOR.
//
// ═══ ÇELİŞKİ ═══
//   veri (3 nokta)   \`darfur\` → \`1916-05-23\` → \`ingiltere\`
//                    \`kaynak:\` alanı BOŞ — dayanağı ÖLÇÜLEMEDİ
//   emsal (Darfur)   \`1916-11-06\` → \`ingiliz-sudani\`, TDV kaynaklı
//   künye \`darfur\`   t: **1916-11-06**  ⇒ veri künyeden 5,5 AY ERKEN kesiyor
//   TDV \`sudan\`      Ali Dinar «6 Kasım 1916'da öldürüldü» ⇒ «Dârfûr
//                    toprakları bir eyalet halinde İngiliz Sudanı'na
//                    bağlandı»
//
// ⇒ \`1916-05-23\` muhtemelen el-Fâşir'in askerî düşüşü; ilhak DEĞİL.
//   \`§11\`: ATLAS SEFERİ DEĞİL TASARRUFU BOYAR — sultanlık Kasım'a kadar
//   sürdü ve TDV ilhakı Ali Dinar'ın ölümüne bağlıyor.
//   ⚠️ AMA \`1916-05-23\`ün NE OLDUĞUNU **ÖLÇEMEDİM** — TDV \`sudan\`
//     gövdesi o günü ANMIYOR. "el-Fâşir düşüşü" bir TAHMİN, kaynak DEĞİL.
//
// ═══ 🔴 NİÇİN UYGULANMAZ: 2s KAPISI KAPALI ═══
// \`1916-11-06\`nın ÇEKİRDEKTE en yakın maddesi 3 gün ötede ve
// **ALAKASIZ**: «İngiliz-Katar Antlaşması». KUYRUKTA da ilgili madde yok.
// ⇒ Bu yama uygulanırsa \`Değişmez 2s\`ye YENİ BİR AÇIK kırılma ekler.
// ⇒ ÖN KOŞUL: çekirdeğe «Ali Dinar'ın öldürülmesi — Dârfûr'un İngiliz
//   Sudanı'na ilhakı» maddesi (\`1916-11-06\`) YAZILMALI.
//
// KARAR KOORDİNATÖRÜN: (a) madde + yama birlikte · (b) yalnız kimlik
// düzelt, günü \`1916-05-23\` bırak (o zaman künye ile 5,5 ay ayrışma
// SÜRER) · (c) dokunma.

window.YER_YAMA_AFRIKA_DARFUR = [`;

fs.writeFileSync("denetim/yer_yama_afrika_1923.js",
  basA + "\n" + A.map(y => satir(y, zincir(y, "ingiliz-sudani"))).join("\n") +
  "\n];\n", "utf8");
fs.writeFileSync("denetim/yer_yama_afrika_darfur_BEKLIYOR.js",
  basB + "\n" + B.map(y => satir(y, zincirB(y))).join("\n") + "\n];\n", "utf8");

console.log("\n🟢 YAZILDI:");
console.log("  denetim/yer_yama_afrika_1923.js            " + A.length + " kayıt");
console.log("  denetim/yer_yama_afrika_darfur_BEKLIYOR.js " + B.length + " kayıt");

// BÖLGE ÖLÇÜTÜ — 1923 sınır işinin ORTAK TABANI. TEK OTORİTE.
//
// 🔴 NİÇİN VAR (6 Eylül 2026, ORTADOĞU oturumu sordu ve HAKLIYDI):
//   `PLAN-1923-SINIRLAR.md`teki bölge sayıları (632 · 595 · 582 …) bu
//   fonksiyondan çıktı — ama fonksiyon KOORDİNATÖRÜN SCRATCHPAD'İNDEYDİ,
//   depoya hiç girmedi. Yani sayı VARDI, ÖLÇÜT YOKTU ⇒ DEVRALINAMAZDI.
//   ORTADOĞU tabanı yeniden ölçtü, 523 buldu, ve farkın sebebinin sayı
//   değil TANIMIN YAZILI OLMAMASI olduğunu gösterdi.
//   📌 `§7.1⑦`: "sende kalan hiçbir bilgi kurtarılamaz" — ve
//     `ARAC-PETEKSIZ-0905` vakası: bir kabul ölçütü bir oturumun
//     scratchpad'inde durursa, o oturum kapanınca ÖLÇÜLEMEZ olur.
//
// 🔴 VE ORTADOĞU'NUN Ⓑ TEŞHİSİ DOĞRU, BURAYA KAYDEDİLİYOR:
//   künye `bolge:` alanı bu iş için KULLANILAMAZ. 1923'te Ortadoğu ve
//   Kuzey Afrika'yı çoğunlukla Avrupalı sömürge güçleri tutuyor ve
//   onların `bolge:`si Avrupa (fransa-cumhuriyet [bati-avrupa] ·
//   italya [italya] · ingiltere [bati-avrupa] …).
//   `bolge:` bir POLITY özniteliğidir, coğrafî bir kutu DEĞİL —
//   `CLAUDE.md` `Değişmez 3`ün "yanlış eksen" teşhisinin aynısı.
//
// 🟢 BU FONKSİYONUN ASIL ERDEMİ: BİR BÖLÜNTÜ (partition) KURAR.
//   Kutular ÜST ÜSTE BİNMEZ ve BOŞLUK BIRAKMAZ — çünkü bir CASCADE'dir:
//   her nokta İLK eşleşen kovaya girer ve orada durur.
//   ⚠️ Elle yazılmış bağımsız kutular bu güvenceyi VERMEZ: iki oturum
//     aynı noktayı sayabilir ya da ikisi de saymayabilir. Üç bölge
//     oturumu aynı anda ölçtüğü için bu güvence ŞART.
//
// KULLANIM
//   const {bolge} = require('./ARAC-BOLGE-KUTU-0906.js');
//   bolge(nokta)  ->  "ORTADOGU-IRAN" | "BALKANLAR" | ...
//   node denetim/ARAC-BOLGE-KUTU-0906.js          // 1923 dağılımı + sınav

// 🔴 SIRA ANLAMLIDIR — cascade. Avrupa kutusu ÖNCE bakılır, bu yüzden
//   Batı Anadolu BALKANLAR'a, Doğu Anadolu DOGU-AVRUPA'ya düşer.
//   Bu bir KUSUR DEĞİL bir SEÇİM: Anadolu 1923'te `tbmm-turkiye`nin ve
//   sınırları Balkanlar/Kafkasya ile ortak. Ama SEÇİM OLDUĞU İÇİN
//   yazılıyor — bir sonraki oturum onu kusur sanıp "düzeltmesin".
function bolge(y) {
  const la = y.lat, lo = y.lon;
  if (la >= 34 && la <= 72 && lo >= -25 && lo < 40) {
    if (la >= 36 && la <= 48 && lo >= 12 && lo <= 30) return "BALKANLAR";
    if (lo < 5 && la < 45) return "IBERYA";
    if (lo >= 5 && lo <= 20 && la >= 36 && la <= 48) return "ITALYA";
    if (la >= 54) return "KUZEY-AVRUPA";
    if (lo >= 20) return "DOGU-AVRUPA";
    return "BATI-ORTA-AVRUPA";
  }
  if (la >= 12 && la <= 45 && lo >= 25 && lo <= 65) return "ORTADOGU-IRAN";
  if (la >= 10 && la <= 38 && lo >= -20 && lo < 25) return "KUZEY-AFRIKA";
  if (la >= -36 && la < 20 && lo >= -20 && lo <= 55) return "SAHRA-ALTI-AFRIKA";
  if (la >= 5 && la <= 55 && lo > 60 && lo <= 100) return "GUNEY-ORTA-ASYA";
  if (lo > 95 && la >= -12 && la <= 56) return "DOGU-GD-ASYA";
  if (la >= 12 && lo <= -50) return "KUZEY-AMERIKA";
  if (la < 12 && lo <= -30) return "GUNEY-ORTA-AMERIKA";
  if (lo > 100 || lo < -140) return "OKYANUSYA";
  return "VOLGA-URAL-SIBIRYA";   // Avrupa (lo<40) ile Orta Asya (lo>60) ARASI
}

// OTURUM SAHİPLİĞİ — hangi bölge kimde
const SAHIP = {
  "ORTADOGU-IRAN": "ORTADOĞU", "KUZEY-AFRIKA": "ORTADOĞU",
  "BALKANLAR": "BALKAN-DOĞU AVRUPA", "DOGU-AVRUPA": "BALKAN-DOĞU AVRUPA",
  "DOGU-GD-ASYA": "ASYA", "GUNEY-ORTA-ASYA": "ASYA",
  "SAHRA-ALTI-AFRIKA": "AFRİKA",
  "BATI-ORTA-AVRUPA": "AVRUPA", "KUZEY-AVRUPA": "AVRUPA",
  "IBERYA": "AVRUPA", "ITALYA": "AVRUPA",
  "KUZEY-AMERIKA": "AMERİKA-OKYANUSYA",
  "GUNEY-ORTA-AMERIKA": "AMERİKA-OKYANUSYA", "OKYANUSYA": "AMERİKA-OKYANUSYA",
  "VOLGA-URAL-SIBIRYA": "(atanmadı — tek kimlik, sıfır sınır çifti)",
};

// ─────────────────────────────────────────────────────────────────────
// 🔴 İKİ KAYIT — bu iki soru ARTIK SORULMASIN (ikisi de ölçüldü)
//
// ① SAHİPLİK KALEM BAZLIDIR, CASCADE BAZLI DEĞİL.
//    Cascade SURVEY'i böler: hangi oturum hangi noktaları TARAR.
//    Bir KİMLİĞİN bütün noktaları, onu İLK ÖLÇEN oturumda kalır —
//    cascade onları başka kovalara dağıtsa bile. Yoksa aynı zincire
//    iki oturum iki farklı gün yazar.
//    Ölçülmüş vakalar (6 Eylül):
//      Tunus 36 nokta  -> cascade ITALYA/AVRUPA'ya atıyor, kalem ORTADOĞU'nun
//      Levant 12 nokta -> cascade BALKANLAR'a atıyor, `yer_yama_manda`
//                         ZATEN işlemiş (ORTADOĞU'nun)
//      Viyana          -> cascade AVRUPA'ya, `avusturya` kalemi BALKAN'ın
//      Buhara · Hîve   -> cascade ORTADOGU-IRAN'a, kalem ASYA'nın
//      Mersin          -> cascade ORTADOGU-IRAN'a, `OSMANLI/tbmm` kalemi
//                         BALKAN'ın
//    ⇒ Bir kimlik senin kutunda görünüyor diye SENİN DEĞİLDİR. Tahtadan sor.
//
// ② OKYANUSYA KOVASINDAKİ 35 SİBİRYA NOKTASI — ATANMADI.
//    (AMERİKA-OKYANUSYA ölçtü, 6 Eylül: boylam 101,8-170,4 · enlem
//     56,3-72,9 · hepsi `sovyet-rusya` — Yakutsk · Verhoyansk · Hatanga ·
//     Jigansk · Bulun · Ust-Yansk · Zaşiversk · Olyokminsk …)
//    Cascade `lo > 100` kuralıyla onları OKYANUSYA'ya atıyor. Ama
//    `VOLGA-URAL-SIBIRYA`yı atanmaz yapan gerekçe — TEK KİMLİK, SIFIR
//    SINIR ÇİFTİ — bu 35 için de BİREBİR geçerli.
//    ⇒ HÜKÜM: bu 35 nokta da ATANMADI. Sınır denetimi işi YOK.
//    📌 Ve bu soru bir kez soruldu; kaydı burada olmasaydı bir sonraki
//      oturum yeniden soracaktı (`§11`: kabul edilmiş bir borç kayıtsız
//      kalırsa yarın yeniden iş sanılır — ve tersi de doğru).
// ─────────────────────────────────────────────────────────────────────
module.exports = { bolge, SAHIP };

if (require.main === module) {
  const fs = require("fs"), vm = require("vm");
  const { execSync } = require("child_process");
  const G = process.argv[2] || "1923-10-28";
  const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
    { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
  const N = [];
  for (const f of DOSYA) {
    const yol = "data/" + f.replace(/^data[\\/]/, "");
    if (!fs.existsSync(yol)) continue;
    const d = { window: {} };
    vm.createContext(d);
    try { vm.runInContext(fs.readFileSync(yol, "utf8"), d); } catch (e) { continue; }
    for (const k of Object.keys(d.window)) {
      const A = d.window[k];
      if (!Array.isArray(A)) continue;
      for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
    }
  }
  const sahip = (y) => {
    for (const p of (y.d || [])) if (p.f <= G && G < p.t) return "OSMANLI";
    for (const p of (y.v || [])) if (p.f <= G && G < p.t) return "OSMANLI-tabi";
    for (const p of (y.s || [])) if (p.f <= G && G < p.t) return p.d;
    return null;
  };
  const say = {}, otu = {};
  let sahipli = 0;
  for (const y of N) {
    if (y.bit && y.bit <= G) continue;
    if (y.kur && y.kur > G) continue;
    if (!sahip(y)) continue;
    sahipli++;
    const b = bolge(y);
    say[b] = (say[b] || 0) + 1;
    const o = SAHIP[b];
    otu[o] = (otu[o] || 0) + 1;
  }
  console.log("=== " + G + " — BÖLGE DAĞILIMI (cascade, BÖLÜNTÜ) ===");
  console.log("sahipli nokta: " + sahipli);
  for (const [b, n] of Object.entries(say).sort((a, c) => c[1] - a[1]))
    console.log("  " + b.padEnd(22) + String(n).padStart(5) + "   -> " + SAHIP[b]);
  console.log("");
  console.log("=== OTURUM YÜKÜ ===");
  for (const [o, n] of Object.entries(otu).sort((a, c) => c[1] - a[1]))
    console.log("  " + o.padEnd(34) + String(n).padStart(5));
  const t = Object.values(otu).reduce((a, b) => a + b, 0);
  console.log("");
  console.log("SINAV — bölüntü mü? toplam " + t + " ile sahipli " + sahipli +
    (t === sahipli ? "  🟢 EŞİT: örtüşme YOK, boşluk YOK" : "  🔴 AYRIŞTI"));
}

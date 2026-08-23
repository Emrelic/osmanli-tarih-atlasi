// YER YAMASI UYGULAYICI — data/yer_yama*.js dosyalarinin HEPSINI okur.
//
// 🔴 NICIN COK DOSYA: `CLAUDE.md §7` — "AYRI DOSYA VERMEK, AYRI AD ALANI
// VERMEK DEGILDIR." Dokuz oturum tek `yer_yama.js`e yazsaydi ikincisi
// birincisini SESSIZCE ezerdi (bu projede olculdu: 537 kayit 137'ye
// dustu, %74 kayip, hicbir denetim otmedi). Her oturuma ayri dosya VE
// ayri degisken adi verildi; bu betik hepsini toplar.
//
// 🔴 NICIN REGEX YOK: bu proje ayni dersi UC KEZ ogrendi (girdi.py tek
// tirnak · bagla.py CRLF · renkler.py ayristirma). "Veri zaten bir dilde
// yazilmissa, o dilin yorumlayicisini cagir." Dosya karakter karakter
// yurunuyor, metin/yorum durumu izleniyor, derinlik 0->1->0 olan her
// kume parantezi TAM nesne olarak cikarilip eval ediliyor.
// ⚠️ Ilk surumu SATIR TEMELLIYDI ve cok satirli kayitlari GORMEDI:
//    202 kaydi "eslesme yok" diye raporladi. Suzgec OLCEMEDIGINI ELEDI.
//
// 🔴 ANAHTAR NICIN JSON.stringify: ilk surum ayrac olarak NUL karakteri (U+0000)
// kullaniyordu ve o bayt dosyaya GERCEK NUL olarak indi. Alet dogru
// calisiyordu ama `grep` kaynak dosyayi "Binary file" sayiyor ve metin
// temelli her duzenleme onu bozabiliyordu.
// 📌 CLAUDE.md'nin onuncu kusur sinifi: "aletin gosterdigi != dosyada
//    yazan" — bir `\b` kacisi 0x08 baytina donmus, `Read` onu gorunmez
//    gostermis, denetim calismis ve SAYISI YALAN olmustu.
// ⇒ Gomulu denetim bayti YOK: anahtar JSON dizisi, tamamen basilabilir.
//
// UC KARAR, UC AYRI YOL — careleri TERS oldugu icin ayrilmalari SART:
//    yer_id        -> kronoloji kaydina yer_id yazilir
//    eksik_nokta   -> kronoloji kaydina yer_kon:[lat,lon] yazilir
//                     (YERLESIM DEGIL: petek almaz, toprak boyamaz)
//    kapsam_genis  -> kronoloji kaydina kapsam_genis:true yazilir
//
// Anahtar: dosya + t + b (UCU BIRDEN).
//
//    node arac/yama_uygula.js           # kuru kosu
//    node arac/yama_uygula.js --yaz     # gercekten yaz
const fs = require("fs");
const path = require("path");

const KOK = path.resolve(__dirname, "..");
const VERI = path.join(KOK, "data");
const KURU = process.argv.indexOf("--yaz") === -1;

// ---- yama dosyalarini bul ----
// 🔴 24 Agustos 2026 — BU KALIBA YALNIZ YAMA KOYULUR, RAPOR KOYULMAZ.
// Iki teshis raporu `data/yer_yama_rumeli.js` ve `..._anadolu2.js` adiyla
// yazildi (koordinatorun sevk hatasi). Ikisi de basliginda "bu bir OLCUM
// RAPORUDUR" diyordu, ama ad kalibi bunu soylemiyor — ve arac ad kalibina
// bakiyor. 9 kaydin 9'unda `dosya` alani yoktu; anahtar `undefined|t|b`
// oldu ve hepsi "MUKERRER, AYNI HUKUM ⇒ ZARARSIZ" diye raporlandi.
// ⇒ Raporlar `denetim/` altina tasindi; asagidaki kova da tekrarini
//   onlemek icin eklendi (yalniz tasimak, bir dahakini onlemezdi).
const yamaDosyalari = fs.readdirSync(VERI)
  .filter(f => /^yer_yama.*\.js$/.test(f))
  .sort();

const YAMA = [];
const kaynakSayaci = {};
for (const yd of yamaDosyalari) {
  global.window = {};
  try { eval(fs.readFileSync(path.join(VERI, yd), "utf8")); }
  catch (e) { console.log("🔴 OKUNAMADI: " + yd + " — " + e.message.slice(0, 80)); continue; }
  let n = 0;
  for (const k of Object.keys(global.window)) {
    const v = global.window[k];
    if (!Array.isArray(v)) continue;
    for (const y of v) { y.__kaynak = yd; YAMA.push(y); n++; }
  }
  kaynakSayaci[yd] = n;
}

console.log("--- YAMA DOSYALARI ---");
for (const [d, n] of Object.entries(kaynakSayaci))
  console.log("  " + String(n).padStart(5) + "  " + d);
console.log("  " + String(YAMA.length).padStart(5) + "  TOPLAM (ham)");
console.log("");

// ---- MUKERRER — IKI CINSI VAR VE CARELERI TERS ----
//   AYNI hukum   iki oturum ayni sonuca varmis -> ZARARSIZ, yalniz bilgi
//   FARKLI hukum iki oturum CELISIYOR          -> 🔴 KARAR gerekiyor
// Ilk surum ikisini TEK SAYIDA topluyordu ve her kosuda "55 mukerrer"
// diye otuyordu. Surekli oten alarm GURULTUYE donusur; daha kotusu,
// gercek bir CELISKI o gurultunun icinde kaybolur.
// 📌 CLAUDE.md "ESIK vs EKRAN": esik bitirilir, ekran hep dolu olur.
//    Bir ekrani "bitirilecek is" sanmak, bitmeyen bir isi borc sanmaktir.
function anahtar(y) { return JSON.stringify([y.dosya, y.t, y.b]); }

function hukumOzeti(y) {
  if (y.yer_id) return "yer_id:" + y.yer_id;
  if (y.eksik_nokta && typeof y.eksik_nokta.enlem === "number")
    return "yer_kon:" + y.eksik_nokta.enlem.toFixed(3) + "," + y.eksik_nokta.boylam.toFixed(3);
  if (y.kapsam_genis) return "kapsam_genis";
  return "karar-yok";
}

// ONCELIK — celiskiyi ALFABEYE degil GEREKCEYE gore coz.
// Ilk surum "ilkini al" diyordu ve "ilk" = dosya adinin alfabetik
// sirasi. Yani karar yargiyla degil, `yer_yama.js`in `yer_yama_macar.js`
// ten once gelmesiyle veriliyordu. Ve ilk gelen HEP DAHA IYI DEGIL:
//    Hunyadi'nin olumu   A yer_id:Belgrad · B Zimony (Zemun)
//                        B TARIHEN DAHA DOGRU (Hunyadi Zimony'de oldu)
//    Zsigmond'un secimi  A kapsam_genis · B yer_id:Frankfurt
//                        B DAHA IYI (secim Frankfurt'ta yapildi)
//
// KURAL: daha OZGUL olan kazanir.
//    yer_id (2)  >  yer_kon (1)  >  kapsam_genis (0)
// `yer_id` havuzdaki bir yerlesime BAGLANIR — tiklanabilir sehir, petek,
// ad. `yer_kon` ciplak bir koordinattir. `kapsam_genis` "tek noktaya
// sigmaz" demektir ve OZGUL bir cevap varken ona yenilir.
//
// ⚠️ KOR DEGIL: her cozum BASILIR. Bir `kapsam_genis` kararini otomatik
//    ezmek risklidir — o bir YARGIDIR, eksiklik degil. Alet savunulabilir
//    bir varsayilan seciyor ve ISINI GOSTERIYOR; gozden gecirmek insana
//    kaliyor.
function ozgulluk(y) {
  if (y.yer_id) return 2;
  if (y.eksik_nokta && typeof y.eksik_nokta.enlem === "number") return 1;
  if (y.kapsam_genis) return 0;
  return -1;
}

const gorulen = new Map();
const ayniHukum = [];
const celisen = [];
for (const y of YAMA) {
  const a = anahtar(y);
  if (!gorulen.has(a)) { gorulen.set(a, y); continue; }
  const onceki = gorulen.get(a);
  if (hukumOzeti(onceki) === hukumOzeti(y)) { ayniHukum.push(y); continue; }
  // Daha ozgul olani TUT
  const kazanan = ozgulluk(y) > ozgulluk(onceki) ? y : onceki;
  const kaybeden = kazanan === y ? onceki : y;
  gorulen.set(a, kazanan);
  celisen.push([kazanan, kaybeden]);
}
const temiz = [...gorulen.values()];

if (ayniHukum.length) {
  const dag = {};
  for (const y of ayniHukum) {
    const e = y.dosya + "  (" + y.__kaynak + ")";
    dag[e] = (dag[e] || 0) + 1;
  }
  console.log("i  MUKERRER, AYNI HUKUM: " + ayniHukum.length
    + " — iki oturum ayni sonuca varmis. ZARARSIZ.");
  for (const [d, n] of Object.entries(dag).sort((a, b) => b[1] - a[1]))
    console.log("     " + String(n).padStart(4) + "  " + d);
  console.log("   ⇒ Gecmis bir DAGITIM kusurunun izi, YENI bir kusur DEGIL.");
  console.log("");
}

if (celisen.length) {
  console.log("⚠️ MUKERRER, FARKLI HUKUM: " + celisen.length
    + " — OZGULLUGE gore cozuldu, GOZDEN GECIRILMELI");
  for (const [kaz, kay] of celisen.slice(0, 12)) {
    console.log("     " + kaz.dosya + " | " + kaz.t + " | " + kaz.b.slice(0, 34));
    console.log("        ✓ " + hukumOzeti(kaz) + "   (" + kaz.__kaynak + ")");
    console.log("        · " + hukumOzeti(kay) + "   (" + kay.__kaynak + ")  elendi");
  }
  if (celisen.length > 12) console.log("     ... " + (celisen.length - 12) + " tane daha");
  console.log("   ⇒ Kural: yer_id > yer_kon > kapsam_genis (daha OZGUL kazanir).");
  console.log("     Bu bir VARSAYILANDIR, hukum DEGIL — ozellikle bir");
  console.log("     `kapsam_genis` elendiyse o bir YARGIYDI, bakilmali.");
  console.log("");
}

// ---- kume parantezi sayan tarayici ----
function nesneleriBul(metin) {
  const cikti = [];
  let i = 0; const n = metin.length;
  let derinlik = 0, basla = -1;
  while (i < n) {
    const c = metin[i];
    if (c === "/" && metin[i + 1] === "/") { while (i < n && metin[i] !== "\n") i++; continue; }
    if (c === "/" && metin[i + 1] === "*") { i += 2; while (i < n && !(metin[i] === "*" && metin[i + 1] === "/")) i++; i += 2; continue; }
    if (c === '"' || c === "'" || c === "`") {
      const q = c; i++;
      while (i < n) {
        if (metin[i] === "\\") { i += 2; continue; }
        if (metin[i] === q) { i++; break; }
        i++;
      }
      continue;
    }
    if (c === "{") { if (derinlik === 0) basla = i; derinlik++; i++; continue; }
    if (c === "}") {
      derinlik--;
      if (derinlik === 0 && basla >= 0) { cikti.push([basla, i]); basla = -1; }
      if (derinlik < 0) derinlik = 0;
      i++; continue;
    }
    i++;
  }
  return cikti;
}

function kacir(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

// ---- hedef dosyaya gore grupla ----
const gruplar = {};
for (const y of temiz) (gruplar[y.dosya] = gruplar[y.dosya] || []).push(y);

let yaz = 0, vardi = 0, coklu = 0, yok = 0;
const uyari = [];

for (const dosya of Object.keys(gruplar).sort()) {
  const yol = path.join(VERI, dosya);
  if (!fs.existsSync(yol)) { uyari.push("DOSYA YOK: " + dosya); continue; }
  let ham = fs.readFileSync(yol, "utf8");

  const dizin = new Map();
  for (const [a, b] of nesneleriBul(ham)) {
    let o;
    try { o = eval("(" + ham.slice(a, b + 1) + ")"); } catch (e) { continue; }
    if (!o || typeof o.t !== "string" || typeof o.b !== "string") continue;
    const k = JSON.stringify([o.t, o.b]);
    if (!dizin.has(k)) dizin.set(k, []);
    dizin.get(k).push([a, b, o]);
  }

  const ekler = [];
  for (const y of gruplar[dosya]) {
    const bulunan = dizin.get(JSON.stringify([y.t, y.b]));
    if (!bulunan) { yok++; uyari.push("ESLESME YOK: " + dosya + " | " + y.t + " | " + y.b.slice(0, 40)); continue; }
    if (bulunan.length > 1) { coklu++; uyari.push("COKLU (" + bulunan.length + "): " + dosya + " | " + y.b.slice(0, 40)); continue; }
    const [a, b, o] = bulunan[0];

    let alan = null;
    if (y.yer_id) {
      if (o.yer_id) { vardi++; continue; }
      alan = ', yer_id:"' + kacir(y.yer_id) + '"';
    } else if (y.eksik_nokta
               && typeof y.eksik_nokta.enlem === "number"
               && typeof y.eksik_nokta.boylam === "number") {
      if (o.yer_kon) { vardi++; continue; }
      alan = ", yer_kon:[" + y.eksik_nokta.enlem + "," + y.eksik_nokta.boylam + "]";
    } else if (y.kapsam_genis) {
      if (o.kapsam_genis) { vardi++; continue; }
      alan = ", kapsam_genis:true";
    } else { continue; }        // karari olmayan kayit — atlanir

    ekler.push([b, alan]);
  }

  ekler.sort((x, z) => z[0] - x[0]);
  for (const [konum, metin] of ekler) {
    let k = konum;
    while (k > 0 && /[\s,]/.test(ham[k - 1])) k--;
    ham = ham.slice(0, k) + metin + ham.slice(k, konum) + ham.slice(konum);
  }

  if (ekler.length && !KURU) fs.writeFileSync(yol, ham, "utf8");
  if (ekler.length) console.log(String(ekler.length).padStart(5) + "  " + dosya);
  yaz += ekler.length;
}

console.log("");
console.log((KURU ? "[KURU KOSU] " : "[YAZILDI]   ")
  + "yazilacak " + yaz + " · zaten vardi " + vardi
  + " · coklu eslesme " + coklu + " · eslesme yok " + yok);
if (uyari.length) {
  console.log("");
  console.log("--- UYARILAR (ilk 15 / " + uyari.length + ") ---");
  uyari.slice(0, 15).forEach(s => console.log("  " + s));
}
if (KURU) { console.log(""); console.log("(gercekten yazmak icin: --yaz)"); }

// TAVAN KAPLAMASI — bölgenin yüzde kaçı bir yerleşimin tavanı içinde?
//
// 🔴 BU ALET, BİR ÖNCEKİNİN (ARAC-TAVAN-KIYAS-0906.js) YANLIŞ ŞEYİ
//    ÖLÇTÜĞÜ GÖRÜLDÜĞÜ İÇİN YAZILDI — ve o vaka kaydedilmeye değer:
//
//    İlk ölçüt: *"bir nokta en yakın komşusuna ulaşabiliyor mu"*
//    (mesafe ≤ Ra+Rb). Sonuç: 200 km'de 23 nokta ulaşamıyor, eskisinde 8.
//    🔴 AMA EN BÜYÜK BEŞ AÇIK HEP UZAK ADALARDI (Rapa Nui · Güney Georgia
//    · Yap · Severnaya Zemlya · Svalbard) — Emre'nin şikâyet ettiği
//    Çağatay/Altın Orda şehirleri LİSTEDE HİÇ YOKTU.
//    Sebep: o şehirlerin en yakın komşusu 400 km İÇİNDE, yani ikili
//    ölçütü GEÇİYORLAR. Ama üç şehir birbirine 380 km olsa bile
//    ORTALARINDA kocaman bir delik kalır.
//    ⇒ İkili erişim, KAPLAMAYI ölçmez. `§11`: *ölçüm doğru, ölçtüğü şey
//      sorunun kendisi değil.*
//
// 🟢 DOĞRU ÖLÇÜT: ızgara. Bölgeyi tara, her hücre için EN YAKIN yerleşime
//    olan mesafeyi hesapla, o yerleşimin TAVANI içinde mi diye bak.
//    Kaplama = tavan içinde kalan hücrelerin oranı.
//
// ⚠️ NE ÖLÇMEZ: kara/deniz ayrımı YOK — ızgara ham dikdörtgen. Bir
//    bölgede deniz payı büyükse kaplama olduğundan düşük görünür.
//    ⇒ Bölgeler KARASAL seçildi (Orta Asya · Deşt-i Kıpçak), ama sayı
//      MUTLAK değil KIYAS için okunmalı: 200 ile eski tavan AYNI ızgarada.
//
// KULLANIM:  node denetim/ARAC-TAVAN-KAPLAMA-0906.js

const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");

const YENI = { 1: 200, 2: 200, 3: 200, 4: 200, 0: 200 };
const ESKI = { 1: 700, 2: 420, 3: 280, 4: 140, 0: 280 };

// Emre'nin paketinde ADIYLA geçen iki hanlık + kıyas için bir yoğun bölge
const BOLGE = [
  ["Çağatay (Maveraünnehir–Yedisu)", 35, 48, 55, 90],
  ["Altın Orda (Deşt-i Kıpçak)",     44, 58, 30, 62],
  ["KIYAS: Anadolu (yoğun)",         36, 42, 26, 45],
];

let DOSYA;
try {
  DOSYA = JSON.parse(execSync(
    'py -c "import sys,json;sys.path.insert(0,\'arac\');import girdi;' +
    'print(json.dumps(girdi.GIRDI_DOSYALARI))"',
    { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
} catch (e) {
  DOSYA = fs.readdirSync("data").filter((f) => /^yerlesim.*\.js$/.test(f));
}

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
    for (const y of A) {
      if (!y || y.lat === undefined || y.lon === undefined) continue;
      N.push({ lat: y.lat, lon: y.lon, k: y.k || 0 });
    }
  }
}
console.log("nokta: " + N.length);

const R = 6371, rad = (x) => x * Math.PI / 180;
function km(aLat, aLon, b) {
  const dLat = rad(b.lat - aLat), dLon = rad(b.lon - aLon);
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(aLat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}

const ADIM = 0.25;   // derece — Orta Asya'da ~28 km
for (const [ad, la0, la1, lo0, lo1] of BOLGE) {
  let hucre = 0, kapaliY = 0, kapaliE = 0;
  for (let la = la0; la <= la1; la += ADIM) {
    for (let lo = lo0; lo <= lo1; lo += ADIM) {
      hucre++;
      let y = false, e = false;
      for (const n of N) {
        const d = km(la, lo, n);
        if (d > 700) continue;                       // hiçbir tavan bunu aşmıyor
        const Ry = YENI[n.k] !== undefined ? YENI[n.k] : YENI[0];
        const Re = ESKI[n.k] !== undefined ? ESKI[n.k] : ESKI[0];
        if (!y && d <= Ry) y = true;
        if (!e && d <= Re) e = true;
        if (y && e) break;
      }
      if (y) kapaliY++;
      if (e) kapaliE++;
    }
  }
  const p = (x) => (100 * x / hucre).toFixed(1);
  console.log("");
  console.log("═══ " + ad + " ═══   (" + hucre.toLocaleString("tr-TR") + " hucre)");
  console.log("  BUGUN (hepsi 200) kaplama : %" + p(kapaliY));
  console.log("  ESKI  (kademeli)  kaplama : %" + p(kapaliE));
  console.log("  FARK                      : %" + p(kapaliE - kapaliY) +
              "   (" + (kapaliE - kapaliY).toLocaleString("tr-TR") + " hucre)");
}
console.log("");
console.log("⚠️ Izgara kara/deniz ayirmiyor; sayilar MUTLAK degil KIYAS icin.");

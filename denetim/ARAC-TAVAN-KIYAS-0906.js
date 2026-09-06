// TAVAN KIYASI — 200 km TEK TAVAN ile ESKİ KADEMELİ tavanın karşılaştırması
//
// 🔴 NİÇİN: Emre'nin `H-0001` paketi *"Çağatay ve Altın Orda şehirleri
//    arasındaki boşluklar"* diyor, ve sebebi ölçüldü
//    (`HUKUM-PAKET-H0001-0906.md`): Dijkstra'nın verdiği hücre
//    `TAVAN_DAIRE` ile kesiliyor (`uret_petek.py:1905`), dışarısı
//    SAHİPSİZ kalıyor. Tavan `TAVAN_KM = 200` (hepsi), ve bu Emre'nin
//    2 Eylül DENEYİ: *"hepsi 200 olsun, bir görelim, sonra değiştiririz."*
//
// ⇒ Bu alet o "bir görelim"in sayısını üretir — karar körlemesine
//   verilmesin diye.
//
// ÖLÇÜT — geometrik, tahmin değil:
//    Tavanı Ra olan A ile Rb olan B, ancak `mesafe ≤ Ra + Rb` ise
//    BULUŞUR. Aksi hâlde aralarında GARANTİLİ bir sahipsiz şerit kalır.
//    ⇒ "En yakın komşusuna bile ULAŞAMAYAN nokta" = tavanın açtığı delik.
//
// ⚠️ NE ÖLÇMEZ: kaç km² sahipsiz kaldığını. O, petek geometrisini ister
//    ve motor donuk. Bu alet NOKTA sayar, ALAN saymaz — ikisi farklı
//    şeydir ve karıştırılırsa yanlış bir büyüklük hissi verir.
//
// KULLANIM:  node denetim/ARAC-TAVAN-KIYAS-0906.js

const fs = require("fs"), vm = require("vm");

const YENI = { 1: 200, 2: 200, 3: 200, 4: 200, 0: 200 };
const ESKI = { 1: 700, 2: 420, 3: 280, 4: 140, 0: 280 };

// girdi.py'nin okuduğu dosyalar — TEK OTORİTE (`§5`)
const { execSync } = require("child_process");
let DOSYA;
try {
  DOSYA = JSON.parse(execSync(
    'py -c "import sys,json;sys.path.insert(0,\'arac\');import girdi;' +
    'print(json.dumps(girdi.GIRDI_DOSYALARI))"',
    { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
} catch (e) {
  console.log("[!] girdi.py okunamadi — TUM yerlesim dosyalari taranacak");
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
      N.push({ ad: y.ad, lat: y.lat, lon: y.lon, k: y.k || 0 });
    }
  }
}
console.log("nokta: " + N.length);

const R = 6371;
const rad = (x) => x * Math.PI / 180;
function km(a, b) {
  const dLat = rad(b.lat - a.lat), dLon = rad(b.lon - a.lon);
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}

function olc(tavan, ad) {
  let ulasamayan = 0, toplamBosluk = 0;
  const kademe = {};
  const enKotu = [];
  for (let i = 0; i < N.length; i++) {
    let enYakin = Infinity, kimle = null;
    for (let j = 0; j < N.length; j++) {
      if (i === j) continue;
      const d = km(N[i], N[j]);
      if (d < enYakin) { enYakin = d; kimle = N[j]; }
    }
    const Ra = tavan[N[i].k] !== undefined ? tavan[N[i].k] : tavan[0];
    const Rb = tavan[kimle.k] !== undefined ? tavan[kimle.k] : tavan[0];
    const erisim = Ra + Rb;
    if (enYakin > erisim) {
      ulasamayan++;
      toplamBosluk += enYakin - erisim;
      kademe[N[i].k] = (kademe[N[i].k] || 0) + 1;
      enKotu.push([Math.round(enYakin - erisim), N[i].ad, N[i].k, kimle.ad]);
    }
  }
  enKotu.sort((a, b) => b[0] - a[0]);
  console.log("");
  console.log("═══ " + ad + " ═══");
  console.log("  en yakin komsusuna ULASAMAYAN nokta : " + ulasamayan +
              "  (%" + (100 * ulasamayan / N.length).toFixed(1) + ")");
  console.log("  toplam kapanmayan mesafe            : " +
              Math.round(toplamBosluk).toLocaleString("tr-TR") + " km");
  console.log("  kademeye gore : " + Object.entries(kademe).sort()
    .map(([k, v]) => "k" + k + "=" + v).join(" · "));
  console.log("  en buyuk bes acik:");
  enKotu.slice(0, 5).forEach((x) =>
    console.log("     " + String(x[0]).padStart(5) + " km  " + x[1] +
                " (k" + x[2] + ")  ↔  " + x[3]));
  return { ulasamayan, toplamBosluk };
}

const y = olc(YENI, "BUGÜN — TAVAN_KM hepsi 200 (Emre'nin 2 Eylül deneyi)");
const e = olc(ESKI, "ESKİ — {1:700, 2:420, 3:280, 4:140, 0:280}");

console.log("");
console.log("═".repeat(60));
console.log("  FARK: ulasamayan nokta " + y.ulasamayan + " → " + e.ulasamayan +
            "   (" + (y.ulasamayan - e.ulasamayan) + " nokta KAPANIRDI)");
console.log("  kapanmayan mesafe " + Math.round(y.toplamBosluk).toLocaleString("tr-TR") +
            " km → " + Math.round(e.toplamBosluk).toLocaleString("tr-TR") + " km");
console.log("═".repeat(60));
console.log("⚠️ Bu NOKTA sayisidir, ALAN degil. Kac km² sahipsiz kaldigini");
console.log("   olcmez — o petek geometrisini ister ve motor DONUK.");

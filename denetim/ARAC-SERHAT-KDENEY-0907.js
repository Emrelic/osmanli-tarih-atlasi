// k:"S" YAZILIRSA NE OLUR — IDDIA DEGIL, KOSTURULMUS DENEY.  YALNIZ OKUR.
//
// 🔴 `CLAUDE.md §11`: "bir aletin ne yaptigini OKUYARAK degil KOSTURARAK
//    goster." Asagidaki bes okuma noktasi koddan CIKARILDI ve burada
//    BIREBIR yeniden kuruldu; sonra hem `k:3` hem `k:"S"` verildi.
//
//    motor  uret_petek.py:768   if y["k"] in (1, 2)
//    motor  uret_petek.py:780   y["k"] in (3, 4)
//    motor  uret_petek.py:1077  TAVAN_KM.get(y.get("k") or 0, TAVAN_KM[0])
//    motor  uret_petek.py:3928  if not (y["d"] or y["v"]) or not y["k"]: continue
//    arayuz js/app.js:4753-4757 var kgruplar = {1:[],2:[],3:[],4:[]};
//                               if (!don.length || !y.k) return;
//                               kgruplar[y.k].push({...})

const TAVAN_KM = { 1: 200, 2: 200, 3: 200, 4: 200, 0: 200 };
const TAVAN_ESKI = { 1: 700, 2: 420, 3: 280, 4: 140, 0: 280 };

function deney(etiket, y) {
  const r = {};
  r["768  k1/k2 merkez mi"] = [1, 2].includes(y.k);
  r["780  k3/k4 zincir denetimi"] = [3, 4].includes(y.k);
  const t1 = TAVAN_KM[y.k] !== undefined ? TAVAN_KM[y.k] : TAVAN_KM[0];
  const t2 = TAVAN_ESKI[y.k] !== undefined ? TAVAN_ESKI[y.k] : TAVAN_ESKI[0];
  r["1077 tavan (duz tablo)"] = t1;
  r["1077 tavan (KADEMELI tablo)"] = t2;
  r["3928 bolge uretimine girer mi"] = !(!(y.d || y.v) || !y.k);

  // arayuz — GERCEK kod yolu
  let arayuz;
  try {
    const kgruplar = { 1: [], 2: [], 3: [], 4: [] };
    const don = (y.d || []).concat(y.v || []);
    if (!(!don.length || !y.k)) kgruplar[y.k].push({ ad: y.ad });
    arayuz = "SORUNSUZ · k" + y.k + " kovasinda " + (kgruplar[y.k] || []).length + " kayit";
  } catch (e) {
    arayuz = "🔴 " + e.constructor.name + ": " + e.message;
  }
  r["app.js:4757 sehirler dizini"] = arayuz;

  console.log("\n=== " + etiket + "  (k = " + JSON.stringify(y.k) + ") ===");
  for (const a of Object.keys(r)) console.log("   " + a.padEnd(34) + String(r[a]));
  return r;
}

const taban = {
  ad: "Deneme", lat: 41.0, lon: 26.5,
  d: [{ f: "1361-01-01", t: "1913-01-01" }],
};

const A = deney("BUGUNKU HAL — normal kademe", Object.assign({}, taban, { k: 3 }));
const B = deney("EMRE'NIN ONERISI — k:\"S\"", Object.assign({}, taban, { k: "S" }));

// 🔴 ILK KOSUDA BIR BEKLENTIM CURUDU: "tavan k0'a duser" dedim ama k3
//    ile k0 ESKI TABLODA IKISI DE 280 — fark GORUNMEDI. Yani tavan
//    kirilmasi GERCEK ama BU KADEMEDE gorunmez. Oteki kademelerde olculdu:
console.log("\n" + "=".repeat(64));
console.log("TAVAN KIRILMASI — hangi kademede GORUNUR (eski kademeli tablo):");
for (const k of [1, 2, 3, 4]) {
  const dogru = TAVAN_ESKI[k];
  const bozuk = TAVAN_ESKI["S"] !== undefined ? TAVAN_ESKI["S"] : TAVAN_ESKI[0];
  const not = dogru === bozuk ? "gorunmez (k0 ile ayni deger)" :
    "🔴 " + dogru + " -> " + bozuk + "  (x" + (bozuk / dogru).toFixed(2) + ")";
  console.log("  k" + k + "  dogru " + String(dogru).padStart(3) +
    " km  ·  k:\"S\" ile " + String(bozuk).padStart(3) + " km   " + not);
}
console.log("⇒ Kirilma k3'te GORUNMUYOR cunku k3 ve k0 eski tabloda ikisi de");
console.log("  280. Ilk kosumda 'tavan k0'a duser' dedim ve k3 ornegimde");
console.log("  CURUDU — sayi ayniydi. Kirilma k1'de 2,5 KAT, k4'te 2 KAT.");

console.log("\n" + "=".repeat(64));
console.log("FARKLAR:");
let n = 0;
for (const a of Object.keys(A)) {
  if (String(A[a]) !== String(B[a])) {
    n++;
    console.log("  🔴 " + a);
    console.log("       k:3   -> " + A[a]);
    console.log("       k:\"S\" -> " + B[a]);
  }
}
console.log("\nBES OKUMA NOKTASININ " + n + "'i BOZULUYOR.");
console.log("⚠️ Bu bir KOD OKUMASI DEGIL, kosturulmus bir deneydir — ama");
console.log("   motorun/arayuzun KENDISI degil, onlardan CIKARILMIS satirlar");
console.log("   kosturuldu (data/ ve arac/ DONUK, §7). Sinir budur.");

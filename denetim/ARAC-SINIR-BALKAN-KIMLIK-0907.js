// SINIR-BALKAN-0907 · kimlik tarayici
// §4 Turkce yazim ekseni: bir kimligi YOK ilan etmeden once devletler.js TARANIR,
// TAHMIN EDILEN id ARANMAZ. (ingiliz-hindistani vakasi: tek harf, cürüyen hüküm.)
// §11: veri zaten bir dilde yazilmissa, o dilin yorumlayicisini cagir -> node.
const fs = require("fs");
const path = require("path");
const KOK = path.dirname(__dirname);

global.window = {};
eval(fs.readFileSync(path.join(KOK, "data", "devletler.js"), "utf8"));
const D = window.DEVLETLER || [];

const CEV = { "İ":"i","I":"i","ı":"i","Ş":"s","ş":"s","Ğ":"g","ğ":"g","Ü":"u","ü":"u",
              "Ö":"o","ö":"o","Ç":"c","ç":"c","Â":"a","â":"a","Î":"i","î":"i",
              "Û":"u","û":"u","’":"'" };
const norm = s => String(s || "").split("").map(c => CEV[c] || c).join("")
                  .normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();

// ARANAN: NE adi -> aday Turkce kok(ler)i. Kokler GENIS tutuldu; eleme GOZLE.
const ARANAN = {
  "Albania":"arnavut", "Austria":"avustur", "Belarus":"rus",
  "Bosnia and Herzegovina":"bosna", "Bulgaria":"bulgar", "Croatia":"hirvat",
  "Czechia":"cek", "Estonia":"eston", "Germany":"alman", "Greece":"yunan",
  "Hungary":"macar", "Italy":"italy", "Kosovo":"kosov", "Macedonia2":"vardar", "Latvia":"leton",
  "Lithuania":"litvan", "Moldova":"bogdan", "Montenegro":"karadag",
  "North Macedonia":"makedon", "Poland":"polon", "Poland2":"varsova", "Poland3":"polska", "Republic of Serbia":"sirb",
  "Romania":"roman", "Russia":"rusya", "Slovakia":"slovak", "Slovenia":"sloven",
  "Switzerland":"isvic", "Turkey":"turk", "Ukraine":"ukra", "Ukraine2":"kazak-hetman", "Ukraine3":"galic", "Ukraine4":"rutenya", "Ukraine5":"zakarpat",
};

console.log("kunye toplam:", D.length);
console.log();
for (const [ne, kok] of Object.entries(ARANAN)) {
  const k = norm(kok);
  const bul = D.filter(d => norm(d.id).includes(k) || norm(d.ad).includes(k));
  console.log("== " + ne + "  (kok: " + kok + ")  -> " + bul.length);
  for (const d of bul.slice(0, 14)) {
    console.log("     " + String(d.id).padEnd(30) + " | " +
                String(d.f || "").padEnd(11) + " -> " + String(d.t || "").padEnd(11) +
                " | " + d.ad);
  }
  if (bul.length === 0) console.log("     ARANDI, YOK");
}

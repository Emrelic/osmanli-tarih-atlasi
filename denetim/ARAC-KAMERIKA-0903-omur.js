// devletler.js'in künye ömürlerini KENDİ yorumlayıcısıyla çıkar.
//
// 🔴 NİÇİN NODE: ilk sürümde bunu regex ile yaptım ve `danimarka` ile
// `haudenosaunee` künyeleri "KÜNYE YOK" çıktı — oysa ikisi de VAR.
// Regex kayıt sınırını yanlış kesiyordu. `§11`: *"veri zaten bir dilde
// yazılıysa, O DİLİN YORUMLAYICISINI ÇAĞIR."* Bu proje aynı dersi
// girdi.py (tek tırnak) · bagla.py (CRLF) · renkler.py · _bk_nobetci
// vakalarında öğrendi; bu altıncısı ve benim aletimde.
//
// kullanim:  node denetim/ARAC-KAMERIKA-0903-omur.js > denetim/_omur.json
const fs = require("fs");
global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const D = Object.keys(window)
  .filter((k) => Array.isArray(window[k]))
  .flatMap((k) => window[k]);
const out = {};
for (const d of D) {
  if (d && d.id && d.f && d.t) out[d.id] = [d.f, d.t];
}
process.stdout.write(JSON.stringify(out));

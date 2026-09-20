// -*- coding: utf-8 -*-
// ARAC-EKO1806-CIZIM-0920.js — EKO-1806 (Opus), 20 Eylül 2026.
// ⑤'in GERÇEK sınavı: kartları js/app.js'in KENDİ `ekKartHtml`i ile çizer.
// Aynanın değil ASLIN ölçülmesi için fonksiyonlar app.js metninden ADIYLA
// kesilip çalıştırılıyor (D099: "kayıt doğru, gösterici eksik" sınıfı ancak
// gerçek gösterici koşturularak yakalanır).
//
// ÖNGÖRÜ (ölçümden önce): 6 kartın 6'sı da <h4> başlık VE ≥200 karakter düz
// metin üretir; hiçbiri "yalnız rozet + Kaynak" (SON ÇARE dalının önlediği
// boş kart) çıkmaz. Ayrıca `ic_not` HİÇBİR kartın çıktısında görünmez.
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(KOK, "js/app.js"), "utf8");

// app.js'ten adıyla fonksiyon kes: "function AD(" den, aynı sütundaki "}" satırına.
function kes(ad) {
  const bas = app.indexOf("\nfunction " + ad + "(");
  if (bas < 0) throw new Error("app.js'te bulunamadı: " + ad);
  const son = app.indexOf("\n}\n", bas);
  if (son < 0) throw new Error("kapanış bulunamadı: " + ad);
  return app.slice(bas + 1, son + 3);
}
const ADLAR = ["ekEsc", "kesinlikRozeti", "_icNotMu", "_icNotAyikla", "_maddeliMetniHtmle",
               "_tartismaVarMi", "ekKartHtml"];
const ctx = vm.createContext({ window: {}, console });
// `var` ile tanımlı yardımcılar — satırıyla birlikte app.js'ten alınır.
for (const satirNo of [9498, 9499]) {
  const satir = app.split("\n")[satirNo - 1];
  if (!/^var _DAIRE_RAKAM/.test(satir)) throw new Error("app.js kaydı: " + satirNo + ". satır artık _DAIRE_RAKAM değil — araç bayatladı");
  vm.runInContext(satir, ctx, { filename: "app.js:" + satirNo });
}
for (const a of ADLAR) vm.runInContext(kes(a), ctx, { filename: "app.js:" + a });
vm.runInContext(fs.readFileSync(path.join(KOK, "data/ekokuma_1806.js"), "utf8"), ctx);

const cikti = vm.runInContext(`window.EKOKUMA_1806.map(function (k) {
  var h = ekKartHtml(k);
  var duz = h.replace(/<[^>]+>/g, " ").replace(/\\s+/g, " ").trim();
  return { id: k.id, tur: k.tur, h4: (h.match(/<h4>([\\s\\S]*?)<\\/h4>/) || [])[1] || "", uzunluk: duz.length,
           icNotSizdi: duz.indexOf("kronolojide MADDE YOK") >= 0, kaynakVar: h.indexOf("Kaynak:") >= 0 };
})`, ctx);

let kusur = 0;
for (const c of cikti) {
  const ok = c.h4 && c.uzunluk >= 200 && !c.icNotSizdi && c.kaynakVar;
  if (!ok) kusur++;
  console.log((ok ? "✓" : "🔴"), c.id, "· tur:" + c.tur, "·", c.uzunluk, "karakter düz metin");
  console.log("     h4:", c.h4.slice(0, 110));
  if (c.icNotSizdi) console.log("     🔴 ic_not ÇIKTIYA SIZDI");
  if (!c.kaynakVar) console.log("     🔴 Kaynak satırı YOK");
}
console.log(kusur === 0 ? "SONUÇ: 6/6 kart gerçek ekKartHtml ile GÖRÜNÜR çiziliyor ✓"
                        : "SONUÇ: 🔴 " + kusur + " kart kusurlu");

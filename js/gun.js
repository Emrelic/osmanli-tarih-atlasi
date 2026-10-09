// GÜN SAYACI — tarih dizgisi ↔ tam sayı gün. İKİZİ: arac/gun.py (TEK sözleşme, aynı vektörle sınanır).
// GUN-SAYACI-C0-1009 · tasarım denetim/GUN-SAYACI-TASARIM-1009.md (koordinatör onayı, 9 Ekim 2026).
//
// Sözleşme (ayrıntı ve gerekçe arac/gun.py başında):
//   · proleptik Gregoryen · ASTRONOMİK yıl (0 VAR: MÖ 1 = 0000 · MÖ 3000 = -2999 · MS 1 = 0001)
//   · 1970-01-01 = 0 (bugünkü app.js gunIdx ile aynı sıfır günü)
//   · girdi ^([+-]?)(\d{1,6})(-MM(-GG)?)?$ — 908 ≡ 0908 ≡ +000908
//   · 🔴 geçersiz girdide THROW — NaN/undefined dönmek YASAK
//   · Hinnant days_from_civil — Date KULLANILMAZ (Date.UTC 0-99 yılını 1900+ yapar)
// Tarayıcıda `window.GUN`, node'da `module.exports`. app.js'e C2'de bağlanır (C0'da tüketicisiz).
(function (kok) {
  "use strict";
  var RX = /^([+-]?)(\d{1,6})(?:-(\d{2})(?:-(\d{2}))?)?$/;
  var AY_GUN = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function fdiv(a, b) { return Math.floor(a / b); }

  function artikMi(y) { return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0); }
  function ayUzunlugu(y, a) { return a === 2 && artikMi(y) ? 29 : AY_GUN[a - 1]; }

  function gunSayisi(y, a, g) {                 // doğrulama YAPMAZ
    y -= a <= 2 ? 1 : 0;
    var era = fdiv(y, 400), yoe = y - era * 400;
    var doy = fdiv(153 * (a + (a > 2 ? -3 : 9)) + 2, 5) + g - 1;
    var doe = yoe * 365 + fdiv(yoe, 4) - fdiv(yoe, 100) + doy;
    return era * 146097 + doe - 719468;
  }

  function parcala(n) {                         // → [astronomik yıl, ay, gün]
    if (typeof n !== "number" || !Number.isInteger(n)) throw new TypeError("gün sayısı tam sayı olmalı: " + n);
    var z = n + 719468;
    var era = fdiv(z, 146097), doe = z - era * 146097;
    var yoe = fdiv(doe - fdiv(doe, 1460) + fdiv(doe, 36524) - fdiv(doe, 146096), 365);
    var doy = doe - (365 * yoe + fdiv(yoe, 4) - fdiv(yoe, 100));
    var mp = fdiv(5 * doy + 2, 153);
    var g = doy - fdiv(153 * mp + 2, 5) + 1;
    var a = mp + (mp < 10 ? 3 : -9);
    return [era * 400 + yoe + (a <= 2 ? 1 : 0), a, g];
  }

  function gun(s) {
    if (typeof s !== "string") throw new TypeError("tarih dizgi olmalı: " + s);
    var m = RX.exec(s);
    if (!m) throw new RangeError("tarih biçimi geçersiz: " + JSON.stringify(s));
    var y = (m[1] === "-" ? -1 : 1) * parseInt(m[2], 10);
    if (y === 0) y = 0;                         // -0 → 0
    var a = m[3] ? parseInt(m[3], 10) : 1, g = m[4] ? parseInt(m[4], 10) : 1;
    if (a < 1 || a > 12) throw new RangeError("ay 1-12 olmalı: " + JSON.stringify(s));
    if (g < 1 || g > ayUzunlugu(y, a)) throw new RangeError("gün o ayda yok: " + JSON.stringify(s));
    return gunSayisi(y, a, g);
  }

  function pad(n, w) { var s = String(n); while (s.length < w) s = "0" + s; return s; }
  function yilDizgi(y) {
    if (y >= 0 && y <= 9999) return pad(y, 4);
    if (y < 0 && y >= -9999) return "-" + pad(-y, 4);
    return (y > 0 ? "+" : "-") + pad(Math.abs(y), 6);      // ISO 8601 genişletilmiş
  }

  function dizgi(n, hassasiyet) {
    var p = parcala(n), h = hassasiyet || "gun";
    if (h === "gun") return yilDizgi(p[0]) + "-" + pad(p[1], 2) + "-" + pad(p[2], 2);
    if (h === "ay") return yilDizgi(p[0]) + "-" + pad(p[1], 2);
    if (h === "yil") return yilDizgi(p[0]);
    throw new RangeError("hassasiyet gun/ay/yil olmalı: " + h);
  }

  function yil(n) { return parcala(n)[0]; }

  function yilYazi(y) {
    if (typeof y !== "number" || !Number.isInteger(y)) throw new TypeError("yıl tam sayı olmalı: " + y);
    return y >= 1 ? String(y) : "MÖ " + (1 - y);
  }

  var GUN = { gun: gun, dizgi: dizgi, yil: yil, yilYazi: yilYazi, parcala: parcala,
              gunSayisi: gunSayisi, artikMi: artikMi, ayUzunlugu: ayUzunlugu };
  if (typeof module !== "undefined" && module.exports) module.exports = GUN;
  else kok.GUN = GUN;
})(typeof window !== "undefined" ? window : this);

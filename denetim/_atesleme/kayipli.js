// 🔴 SAHTE FİKSTÜR — `SINAV-JSON-ESDEGER-0907.py`nin ATEŞLEME dalını
// zorlamak için. VERİ DEĞİL, hiçbir yere bağlı değil, index.html okumaz.
//
// NİÇİN VAR (`C13`): gerçek veride kayıp YOK (ölçüldü: 🟢 TEMİZ), yani
// sınavın 🔴 dalı gerçek veriyle KOŞULAMAZ. "Zorlanamayan dal, denetimsiz
// daldır" — bu dosya o dalı ateşler.
//
// İÇİNDE KASTEN: JSON'un temsil edemediği HER değer sınıfından bir örnek.
window.KAYIPLI = {
  saglam: [1, 2.5, "metin", true, null],
  tanimsiz: undefined,
  islev: function () { return 1; },
  nan: NaN,
  sonsuz: Infinity,
  eksiSonsuz: -Infinity,
  eksiSifir: -0,
  tarih: new Date("1453-05-29T00:00:00Z"),
  buyukSayi: BigInt(9007199254740993),
  simge: Symbol("sinav"),
  seyrekDizi: (function () { var a = [1, 2, 3]; delete a[1]; return a; })(),
  icIce: { derin: { daha: [undefined, NaN] } }
};

// döngüsel başvuru — `JSON.stringify` bunda THROW eder
window.DONGUSEL = (function () { var o = { ad: "dongu" }; o.kendi = o; return o; })();

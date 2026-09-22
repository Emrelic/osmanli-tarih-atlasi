// ============================================================================
// SINIR-CIZGI-0076 · YAMA · js/app.js   — H-0137 + H-0123
// UYGULAYAN: koordinatör (ORTAK-0076 §3). Aşağıdaki iki fonksiyon js/app.js'te
// AYNI ADLA duruyor; gövdeleri bununla değiştirilir. Başka satıra dokunulmaz.
//
// ── H-0137 · "BÖYLE BİR SÜRÜ AYNI SİMGENİN GÖSTERİMİNE NE GEREK VAR" ────────
// ÖLÇÜLDÜ (Emre'nin görseli, 1913-03-06 · 37.53–41.22K · 17.65–19.58D):
//   lejant kutusunda 15 satır var; 9'u "yunanistan", 3'ü "italya", 2'si
//   "İngiltere", 1'i "fransa-cumhuriyet" — yani EŞSİZ işgalci sayısı 4.
// SEBEP (js/app.js:4323): `isgalLejanti(fs)` gelen HER FEATURE için bir satır
//   basıyor; `fs` ise `ISGALLER` dizisindeki her KAYIT için bir feature taşıyor
//   (isgalGuncelle, :4297). Bir devletin o gün 9 ayrı işgal kaydı varsa lejant
//   9 satır olur. Kusur veride değil, lejantın TEKİLLEŞTİRMEMESİNDE.
// ÇARE: satırlar (işgalci + işgal edilen + renk) üçlüsüne göre tekilleştirilir
//   ve kaç alanı kapsadığı sayıyla yazılır ("yunanistan · 9 alan").
//
// ── H-0123 · "İŞGAL EDENİN RENGİ İKİ KAT, İŞGAL EDİLENİN TEK KAT" ──────────
// ÖLÇÜLDÜ (js/app.js `isgalDesenleriKur`, K = 8):
//   bugünkü oran işgalci 5 / sahip 3 = 1,67 : 1.  Emre'nin kuralı 2 : 1.
//   8 piksellik desende 2:1 TAM BÖLÜNMEZ (8 = 5,33 + 2,67). K = 6 yapılınca
//   4 / 2 = TAM 2 : 1 olur ve desen adımı 8 px'ten 6 px'e iner (daha sık tarama,
//   küçük alanlarda okunurluğu artar).
// İKİNCİ KUSUR — "İTALYA RENGİ SARI OLMASINA RAĞMEN ALAKASIZ RENKLER":
//   ölçüldü, `data/devirler.js` ISGALLER kayıtlarının taşıdığı renkler:
//     italya #74a074 (yeşil) · rusya #4f7d4f (yeşil) · almanya #78d028 (yeşil)
//     yunanistan #20e0c0 (turkuaz) · ingiltere #7e3d8f (mor)
//     avusturya #bdab3f · fransa-cumhuriyet #00297c · ispanya #ea0cea
//   ⇒ İşgal katmanının rengi devletin HARİTA rengiyle aynı DEĞİL; ayrı bir
//   palet. Emre'nin "İtalya sarıdır" beklentisi haritadaki İtalya renginden
//   geliyor. 🔴 BU YAMA O RENKLERİ DEĞİŞTİRMİYOR: renkler `devirler.js`te
//   (ÜRETİLMİŞ dosya, `uret_devirler.py` çıktısı) duruyor, elle düzenlenmez ve
//   düzeltmesi KOŞU ister. Buradaki yama yalnız ORANI ve LEJANT metnini
//   düzeltir; renk eşleşmesi `senin-kararin` olarak raporda ayrı kalem.
// İKİNCİ KUSURUN İKİNCİ YÜZÜ: lejant şeridi sahip rengini HER ZAMAN #8e0b22
//   (Osmanlı kırmızısı) varsayıyor (:4322 kendi notu itiraf ediyor) — oysa
//   desen `ig.sahipRenk`i kullanıyor. Aşağıdaki gövde ikisini hizalıyor.
// ============================================================================
"use strict";

// ① js/app.js `isgalDesenleriKur` — K 8→6, oran 5/3 → 4/2 (TAM 2:1)
function isgalDesenleriKur() {
  var K = 6;                       // 🔴 8 → 6: 2:1 oranı tam bölünsün diye
  ISGALLER.forEach(function (ig) {
    var ad = "isgal-" + ig.id;
    if (harita.hasImage && harita.hasImage(ad)) return;
    var c = renkAyir(ig.renk);
    var s = ig.sahipRenk ? renkAyir(ig.sahipRenk) : OSMANLI_KIRMIZI;
    var veri = new Uint8Array(K * K * 4);
    for (var y = 0; y < K; y++) {
      for (var x = 0; x < K; x++) {
        // Devir deseni (x+y) ile SAĞA yatık; işgal (x-y) ile SOLA yatık — AYNEN.
        // 🔴 Emre'nin kuralı (H-0123): işgal edenin rengi İKİ KAT, işgal edilenin
        // TEK KAT. K=6'da 4 piksel işgalci + 2 piksel sahip = tam 2:1.
        var isgalci = ((x - y + K) % K) < 4;
        var r = isgalci ? c : s;
        var i = (y * K + x) * 4;
        veri[i] = r[0]; veri[i + 1] = r[1]; veri[i + 2] = r[2]; veri[i + 3] = 255;
      }
    }
    harita.addImage(ad, { width: K, height: K, data: veri });
  });
}

// ② js/app.js `isgalGuncelle` — feature'a SAHİP RENGİNİ ve SAHİBİN ADINI da taşı
//    (lejantın #8e0b22 varsayımını kaldırmak ve "kim kimi" yazabilmek için).
//    Değişen TEK satır `properties` nesnesidir.
function isgalGuncelle(t) {
  if (!haritaHazir || !ISGALLER.length) return;
  var fs = [];
  for (var i = 0; i < ISGALLER.length; i++) {
    var ig = ISGALLER[i];
    if (ig.gi === undefined) ig.gi = gunIdx(ig.f);
    if (ig.gs === undefined) ig.gs = gunIdx(ig.t);
    if (t < ig.gi || t >= ig.gs) continue;      // devirden farkı: sabit aralık
    fs.push({ type: "Feature",
              properties: { desen: "isgal-" + ig.id, renk: ig.renk, isgalci: ig.ad,
                            sahipRenk: ig.sahipRenk || null, sahipAd: ig.sahipAd || null },
              geometry: { type: "MultiPolygon", coordinates: ig.parca } });
  }
  harita.getSource("isgal").setData({ type: "FeatureCollection", features: fs });
  isgalLejanti(fs);
}

// ③ js/app.js `isgalLejanti` — TEKİLLEŞTİRİLMİŞ lejant (H-0137)
function isgalLejanti(fs) {
  var el = document.getElementById("isgal-lejant");
  if (!el) {
    el = document.createElement("div");
    el.id = "isgal-lejant";
    el.className = "devir-lejant isgal-lejant";
    document.getElementById("harita").appendChild(el);
  }
  if (!fs.length) { el.style.display = "none"; lejantYerlestir(); return; }
  el.style.display = "";
  // 🔴 H-0137: satır başına bir FEATURE değil, bir EŞSİZ İŞGAL İLİŞKİSİ.
  // Anahtar (işgalci + sahip + renk) — aynı devletin farklı sahiplerden aldığı
  // yerler AYRI satır kalır (deseni de farklıdır), aynı ilişkinin 9 parçası TEK
  // satırda birleşir ve kaç alan olduğu sayıyla yazılır.
  var sira = [], ix = {};
  fs.forEach(function (f) {
    var p = f.properties;
    var sahipRenk = p.sahipRenk || "#8e0b22";
    var anahtar = (p.isgalci || "") + "|" + (p.sahipAd || "") + "|" + p.renk + "|" + sahipRenk;
    if (!ix[anahtar]) {
      ix[anahtar] = { isgalci: p.isgalci, sahipAd: p.sahipAd, renk: p.renk, sahipRenk: sahipRenk, n: 0 };
      sira.push(anahtar);
    }
    ix[anahtar].n++;
  });
  // ORAN: isgalDesenleriKur ile AYNI — 2:1 ⇒ %66,7 / %33,3
  el.innerHTML = "<b>İşgal altında</b>" + sira.map(function (a) {
    var s = ix[a];
    var etiket = s.isgalci + (s.sahipAd ? " → " + s.sahipAd : "") + (s.n > 1 ? " · " + s.n + " alan" : "");
    return '<span><i style="background:linear-gradient(-45deg,' +
           s.renk + ' 0 66.7%,' + s.sahipRenk + ' 66.7% 100%);background-size:6px 6px"></i> ' +
           etiket + "</span>";
  }).join("");
  lejantYerlestir();
}

// ⚠️ `sahipAd`/`sahipRenk` ISGALLER kayıtlarında BUGÜN YOK (ölçüldü: devirler.js
// ISGALLER kayıtları `id · ad · renk · f · t · parca` taşıyor). Yama bunu
// BEKLEMİYOR: alan yoksa `sahipAd` null kalır ve etiket eskisi gibi yalnız
// işgalciyi yazar, `sahipRenk` de eski #8e0b22 varsayımına düşer. Yani yama
// TEK BAŞINA uygulanabilir; alanlar `uret_devirler.py` bir sonraki koşuda
// eklerse etiket kendiliğinden "İtalya → Osmanlı" hâline gelir.

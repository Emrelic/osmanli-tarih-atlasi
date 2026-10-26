// ÇAKIŞMA GİDERİMİ ANA İŞ PARÇACIĞINDAN ÇIKTI — `cakismaGider` SARMALAMASI.
// 🔴 26 Ekim 2026, Emre: *"haritada tarihe git bölümüne tarih yazıp gittiğimiz
// zaman epey uzun sürüyor ilgili tarihe gitmesi."*
//
// ÖLÇÜLDÜ (yayındaki site, Chrome, sayfa taze yüklenmiş, Enter → harita):
//     1453-05-29   devletGuncelle 5529 ms   ← cakismaGider 5494 ms
//     1520-09-30   devletGuncelle 5644 ms   ← cakismaGider 5609 ms
//                  (603 intersection 4209 ms + 178 difference 1376 ms)
//     1683-09-12   cakismaGider 36.708 ms   ← en ağır örnek (263 gövde)
//     aynı güne İKİNCİ gidiş: devletGuncelle 56-61 ms (çift önbelleği)
// Gecikmenin geri kalanı (sehirGuncelle ~300 ms, uçuş ~1,7 sn) bunun yanında küçük.
// Yani her YENİ güne (tarihe git, uzak sıçrama, çubuk) ilk gidiş 5,5 sn donma.
//
// ÇARE: hesap `js/cakisma_isci.js` (Web Worker) içinde koşar. Bu dosya yeni bir
// gün için `cakismaGider`i HAM gövdelerle hemen döndürür (harita beklemeden
// çizilir), işçinin sonucu gelince — o gün hâlâ ekrandaysa — `devletGuncelle`yi
// zorla yeniden koşturur; ikinci çağrı sonucu saklı bulur ve düzeltilmiş hâli
// yazar. Ölçüldü (sarmalama enjekte edilmiş yayın sayfası): Enter'dan sonraki en
// uzun donma 6053 → 354-535 ms, uçuş bitişi ~8,0 → ~3,0 sn; düzeltilmiş gövdeler
// ~8-16 sn sonra iner (1683-09-12 gibi ağır günlerde ~30 sn). Arada çakışan
// yabancı gövdeler üst üste görünür (POSTIT #112'nin "üçüncü yeşil"i) — donmanın
// yerine ödenen bedel bu; işçinin sonucu eşzamanlı yolla BİREBİR aynıdır
// (1453-05-29: 290 gövde, 90'ı kesilmiş, koordinat koordinat karşılaştırıldı).
//
// ⚠️ `app.js`e DOKUNULMADI (d_katman.js'in `guncelle` sarmalaması deseni) —
//    `cakismaGider` app.js'te üst seviye bir global; bu dosya app.js'ten SONRA
//    yüklenmek ZORUNDADIR. Sarmalama yalnız `devletGuncelle`nin çağrısını
//    değiştirir; eşzamanlı ölçüm betikleri asıl işleve `window.cakismaGiderEs`
//    ile ulaşır.
// ⚠️ ANAHTAR gövde NESNESİDİR (WeakMap kimliği) + devlet kimliği: tam havuz
//    inip `__govdeYenile` geometrileri yeniden kurunca anahtarlar kendiliğinden
//    değişir — seyrek havuzla hesaplanmış sonuç bayat kalamaz. Saklanan şey
//    DEĞİŞEN koordinatlardır, properties (tâbi rengi güne göre değişir) her
//    çağrıda güncel girdiden alınır.
// ⚠️ İşçi kurulamazsa (Worker yok, file://, CDN inmedi) eski eşzamanlı yola
//    düşülür — davranış kaybolmaz, yalnız hız kazancı olmaz.
(function () {
  if (typeof window.cakismaGider !== "function") {
    console.warn("ÇAKIŞMA HIZLI: window.cakismaGider bulunamadı — sarmalama BAĞLANAMADI (script sırası app.js'ten önce mi?).");
    return;
  }
  var esGider = window.cakismaGider;
  window.cakismaGiderEs = esGider;

  var gvdNo = new WeakMap(), gvdSayac = 0;
  function gvdKimlik(g) {
    if (!g) return "-";
    var n = gvdNo.get(g);
    if (n === undefined) { n = ++gvdSayac; gvdNo.set(g, n); }
    return n;
  }
  function anahtarKur(fs) {
    var p = new Array(fs.length);
    for (var i = 0; i < fs.length; i++) p[i] = fs[i].properties.id + "#" + gvdKimlik(fs[i].geometry);
    return p.join(";");
  }

  // anahtar → {indeks: yeni MultiPolygon koordinatı} (yalnız değişenler)
  var SONUC = {}, SIRA = [], AZAMI = 300;
  function sakla(a, d) {
    if (!(a in SONUC)) {
      SIRA.push(a);
      if (SIRA.length > AZAMI) delete SONUC[SIRA.shift()];
    }
    SONUC[a] = d;
  }
  function uygula(fs, d) {
    return fs.map(function (f, i) {
      var k = d[i];
      return k ? { type: "Feature", properties: f.properties,
                   geometry: { type: "MultiPolygon", coordinates: k } } : f;
    }).filter(function (f) { return f.geometry.type !== "MultiPolygon" || f.geometry.coordinates.length; });
  }

  var isci, sayac = 0, kosan = null;
  // Son istenen anahtar ve girdisi — sonuç ancak ekrandaki güne aitse çizilir,
  // iş ancak ekrandaki gün için açılır.
  var sonIstenen = null, sonFs = null, zaman = null;
  // İş, gün SAKİN_MS boyunca değişmeden kalınca açılır: kırpma (önce↔sonra,
  // 4 × ~225 ms) ve art arda atlamalar ara günler için iş AÇMAZ.
  // İşçi bir işi yarıda bırakamaz ve bazı günler ÇOK pahalı — ölçüldü: 1683-09-12
  // işçide 31,5 sn; eski eşzamanlı yolda sayfa 36,7 sn DONUYORDU. Bayat iş
  // sürerken ekrandaki gün durulursa işçi SONLANDIRILIR, yenisi kurulur (çift
  // önbelleği gider; kırpma bitince gün koşan işin günüyle aynı olduğundan
  // kırpma işçiyi öldürmez). Sonlandırma olmadan 1683 → 1402 → 1600 (700 ms
  // arayla) son günün düzeltmesi 42 sn sonra geldi.
  var SAKIN_MS = 800;
  function isciAl() {
    if (isci !== undefined) return isci;
    isci = null;
    if (typeof Worker === "undefined") return null;
    try {
      var w = new Worker("js/cakisma_isci.js" + (typeof ufukSurum === "function" ? ufukSurum() : ""));
      w.onmessage = function (e) { bitti(e.data); };
      w.onerror = function (e) {
        console.warn("ÇAKIŞMA İŞÇİSİ kurulamadı — eşzamanlı yola dönülüyor:", e && e.message);
        try { w.terminate(); } catch (e2) { }
        isci = null;
        kosan = null;
        yenidenCiz();               // bu kez eşzamanlı yoldan düzeltilmiş hâl
      };
      isci = w;
    } catch (e) { isci = null; }
    return isci;
  }
  function baslat() {
    zaman = null;
    if (!isci || !sonIstenen || sonIstenen in SONUC) return;
    if (kosan) {
      if (kosan.a === sonIstenen) return;
      try { isci.terminate(); } catch (e) { }
      isci = undefined; kosan = null;
      if (!isciAl()) { yenidenCiz(); return; }   // kurulamadı ⇒ eşzamanlı yol
    }
    kosan = { no: ++sayac, a: sonIstenen };
    isci.postMessage({ is: kosan.no, g: sonFs.map(function (f) {
      return { id: f.properties.id,
               c: f.geometry && f.geometry.type === "MultiPolygon" ? f.geometry.coordinates : null };
    }) });
  }
  function yenidenCiz() {
    if (typeof devletGuncelle !== "function" || typeof suanki === "undefined") return;
    try {
      devletImza = null;            // aynı imzada erken çıkışı aş
      devletGuncelle(suanki);
      // d_katman yaslaması devlet kaynağına yazmış olabilir; yeniden yazım onu
      // sildi ⇒ imzasını boşaltıp yeniden planlat.
      if (typeof _dYaslaPlanla === "function") { _dYaslaImza = null; _dYaslaPlanla(suanki); }
    } catch (e) { console.warn("ÇAKIŞMA HIZLI: yeniden çizim attı:", e); }
  }
  function bitti(m) {
    var is = kosan;
    kosan = null;
    if (is && is.no === m.is) {
      if (m.hata) {
        // Bu gün için bir daha denenmez (aynı girdi aynı hatayı verir): ham kalır.
        console.warn("ÇAKIŞMA İŞÇİSİ hata — gövdeler ham kaldı:", m.hata);
        sakla(is.a, {});
      } else {
        sakla(is.a, m.d);
        if (is.a === sonIstenen) yenidenCiz();
      }
    }
    baslat();                       // bu arada ekrandaki gün değiştiyse onun işi
  }

  // 🔴 TAM HAVUZ YARIŞI (ölçüldü): tam havuz inmeden (açılıştan ~3,5 sn) bir
  // güne gidilirse gövdeler seyrek havuzdan EKSİK kurulmuştur; işçi o girdide
  // `TypeError` verir. Havuz inince `__govdeYenile` geometriyi yeniden kurar
  // ama `devletGuncelle` imzası (devlet:dönem) değişmediği için ERKEN ÇIKAR —
  // ekrandaki gün ne tamamlanır ne düzeltilir. Kanca sarmalanır: yenilemeden
  // sonra gün zorla yeniden çizilir (yeni geometri = yeni anahtar = yeni iş).
  var govdeYenileEs = window.__govdeYenile;
  if (typeof govdeYenileEs === "function") {
    window.__govdeYenile = function () {
      var r = govdeYenileEs.apply(this, arguments);
      if (r) yenidenCiz();
      return r;
    };
  }

  window.cakismaGider = function (fs) {
    if (!window.polygonClipping || !fs || fs.length < 2) return esGider(fs);
    var a = anahtarKur(fs);
    sonIstenen = a; sonFs = fs;
    if (a in SONUC) return uygula(fs, SONUC[a]);
    if (!isciAl()) return esGider(fs);
    // Aynı anda tek iş; ekrandaki gün SAKİN_MS durulunca açılır (yukarıda).
    if (zaman) clearTimeout(zaman);
    zaman = setTimeout(baslat, SAKIN_MS);
    return fs;
  };
})();

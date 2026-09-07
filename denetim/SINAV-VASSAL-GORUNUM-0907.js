/* SINAV — TÂBİ DEVLET GÖRÜNÜMÜ (`d.vl`) · VASSAL-GORUNUM-0907 · 7 Eylül 2026
 *
 * NİÇİN VAR VE NİÇİN DEPODA:
 *   Bu sınavın ölçtüğü kusur sınıfı bugünkü VERİDE YOKTUR — `vl` çapası 7 Eylül
 *   sabahı `arac/uret_petek.py`ye yazıldı ve koşu 8 onu HENÜZ üretiyor. Yani
 *   gerçek veriyle koşulan hiçbir sınav bu dalları ateşleyemez.
 *   `CLAUDE.md C13`: *"gerçek veride o kusur yoksa dal koşulamaz ⇒ sahte girdi
 *   ile ZORLA ateşlenir. Zorlanamayan dal, denetimsiz daldır."*
 *   Ve depoda duruyor çünkü scratchpad'de duran bir kabul ölçütü, oturum
 *   kapanınca ÖLÇÜLEMEZ hâle gelir (`§7.1⑦` — bu proje o bedeli bir kez ödedi).
 *
 * NASIL KOŞULUR (tarayıcı konsolunda, sayfa TAM YÜKLENDİKTEN sonra):
 *     fetch("denetim/SINAV-VASSAL-GORUNUM-0907.js").then(r=>r.text())
 *       .then(eval).then(()=>console.log(JSON.stringify(window.__sinavVassal(),null,1)))
 *
 * 🔴 ÖLÇÜMDEN ÖNCE: `document.visibilityState` **"visible"** olmalı.
 *   Gizli bir sekmede MapLibre çizim yapmaz, `load` ateşlemez, ve bütün
 *   ölçümler "YOK" der — o "yok" bir sonuç değil bir ARTEFAKTTIR
 *   (`CLAUDE.md §11`, 4 Eylül vakası). Sınav bunu kendi kapısında sorar.
 *
 * NE SORAR / NE SORMAZ:
 *   SORAR   `d.vl` okunuyor mu · etiket doğru metinle çıkıyor mu · bilinmeyen
 *           statü ne çöküyor ne SESSİZCE yutuluyor · bozuk çapa bildiriliyor
 *           mu · görüş alanı ve çakışma elemeleri işliyor mu · fikstür
 *           kaldırılınca sayfa ESKİ HÂLİNE dönüyor mu (KONTROL)
 *   SORMAZ  çapanın DOĞRU YERDE olup olmadığı (o motorun işi) · punto seçiminin
 *           iyi olup olmadığı (ölçülmedi, `js/app.js` VASSAL_PUNTO'da beyan
 *           edildi) · gerçek `vl` verisinin içeriği (koşu 8 bitmeden yok)
 */
(function () {
  "use strict";

  function esitMi(a, b) { return a === b; }

  window.__sinavVassal = function () {
    var R = { kapi: {}, gecme: {}, atesleme: {}, girdi: {}, kontrol: {},
              gecen: 0, kalan: 0, notlar: [] };
    var dallar = [];
    function dal(ad, beklenen, olculen) {
      var ok = esitMi(JSON.stringify(beklenen), JSON.stringify(olculen));
      dallar.push({ dal: ad, beklenen: beklenen, olculen: olculen,
                    sonuc: ok ? "GECTI" : "KALDI" });
      if (ok) R.gecen++; else R.kalan++;
      return ok;
    }

    // ---- KAPI: ölçüm koşulları ----------------------------------------
    R.kapi.visibilityState = document.visibilityState;
    R.kapi.readyState = document.readyState;
    if (document.visibilityState !== "visible") {
      R.kapi.HUKUM = "OLCULEMEDI — sekme gizli. Bu bir 'temiz' DEGILDIR.";
      return R;
    }
    if (typeof donemler === "undefined" || typeof etiketleriYerlestir !== "function" ||
        typeof aktifDonem === "undefined" || aktifDonem < 0) {
      R.kapi.HUKUM = "OLCULEMEDI — sayfa hazir degil (donemler/aktifDonem/etiket).";
      return R;
    }
    R.kapi.aktifDonem = aktifDonem;
    R.kapi.donemSayisi = donemler.length;

    var d = donemler[aktifDonem];
    var yedek = d.vl;                       // fikstür sonrası GERİ KONULACAK
    var sayVassal = function () { return document.querySelectorAll(".vassal-etiket").length; };
    var sayDevlet = function () { return document.querySelectorAll(".devlet-etiket").length; };
    var metinler = function () {
      return Array.prototype.map.call(document.querySelectorAll(".vassal-etiket"),
        function (e) { return e.textContent; });
    };

    // ---- GECME: bugünkü (vl'siz) veri sayfayı bozmuyor -----------------
    // 🔴 BU AYAK EN KRİTİĞİ: kod bugün canlı yayında `vl` OLMADAN koşacak.
    // Bu proje bir kez `duygu:"notr"` yüzünden siteyi tamamen ölü yayınladı
    // ve `denetle.py` TEMİZ diyordu.
    etiketleriYerlestir();
    R.gecme.vlAlaniTumKayitlardaDizi =
      donemler.filter(function (x) { return Array.isArray(x.vl); }).length;
    R.gecme.gercekVlTasiyanKayit =
      donemler.filter(function (x) { return x.vl && x.vl.length; }).length;
    R.gecme.vassalEtiket = sayVassal();
    R.gecme.devletEtiket = sayDevlet();
    R.gecme.katman = harita.getStyle().layers.length;
    dal("GECME · vl yokken vassal etiketi 0", 0, R.gecme.vassalEtiket);
    dal("GECME · vl alani her kayitta DIZI", donemler.length, R.gecme.vlAlaniTumKayitlardaDizi);
    var devletTaban = R.gecme.devletEtiket;

    // ---- Fikstür kurulumu: görüş alanının İÇİNDE noktalar --------------
    var b = harita.getBounds();
    var B = b.getWest(), D = b.getEast(), G = b.getSouth(), K = b.getNorth();
    function ic(fx, fy) { return [B + (D - B) * fx, G + (K - G) * fy]; }
    // Bilinmeyen statü her koşuda BENZERSİZ: `_statuBilinmeyen` önbelleği
    // "deger basina BIR kez" uyariyor, sabit bir deger ikinci koşuda hiç
    // ötmezdi ve sınav kendi kendini geçirirdi.
    //
    // 🔴 VE KISA — ilk yazımda `"sinav-statu-" + Date.now()` idi ve SINAV
    // KALDI (3 dal). Sebep ölçüldü, VARSAYILMADI: uzun değerli etiket 42
    // karakter ⇒ ~233 px kutu, ve o kutu 819 px'lik tuvalde ZATEN YERLEŞMİŞ
    // bir DEVLET etiketiyle çakışıp eleniyordu. Kontrol: aynı çapa TEK BAŞINA
    // da yerleşmedi (yani öteki fikstür çapalarıyla çakışma değildi), kısa
    // değerle AYNI NOKTADA yerleşti. ⇒ Kod doğru çalışıyordu, FİKSTÜR genişti.
    // 📌 Ve bu, tasarımın iki kanallı olmasının değerini ölçtü: etiket elenmiş
    // olsa BİLE `console.warn` ötüyordu (dal ⑦ o koşuda da GEÇTİ) — yani
    // bilinmeyen bir statü hiçbir hâlde SESSİZ kalmıyor.
    var bilinmez = "snv" + (Date.now() % 100000);

    // console.warn yakalanır — "sessizce yutulmuyor" iddiası ancak böyle ölçülür
    var warnOrj = console.warn, yakalanan = [];
    console.warn = function () {
      yakalanan.push(Array.prototype.join.call(arguments, " "));
      return warnOrj.apply(console, arguments);
    };

    try {
      // ATESLEME ①-④: dört ayrı statü dalı, hepsi ayrı ayrı
      d.vl = [
        { k: "SINAV-Bilinen",   s: "vassal",  p: ic(0.20, 0.30) },
        { k: "SINAV-Statusuz",              p: ic(0.20, 0.62) },   // `s` YOK
        { k: "SINAV-Sozlukte",  s: "özerk",   p: ic(0.62, 0.30) },
        { k: "SINAV-Bilinmez",  s: bilinmez,  p: ic(0.62, 0.62) }
      ];
      etiketleriYerlestir();
      var m = metinler();
      R.atesleme.dortDal = { sayi: sayVassal(), metinler: m };
      dal("ATESLEME ① dort capa da yerlesti", 4, sayVassal());
      dal("ATESLEME ② bilinen statu 'tabi' yaziliyor", true,
          m.indexOf("SINAV-Bilinen · tâbi") >= 0);
      dal("ATESLEME ③ statusuz capa varsayilana dusuyor", true,
          m.indexOf("SINAV-Statusuz · tâbi") >= 0);
      dal("ATESLEME ④ sozlukteki ikinci terim aynen yaziliyor", true,
          m.indexOf("SINAV-Sozlukte · özerk") >= 0);
      // 🔴 Bilinmeyen statü: HAM DEĞER ekranda (yutulmadı) + AYRI SINIF + BİR uyarı
      dal("ATESLEME ⑤ bilinmeyen statu HAM haliyle ekranda", true,
          m.indexOf("SINAV-Bilinmez · " + bilinmez) >= 0);
      R.atesleme.bilinmeyenSinif =
        document.querySelectorAll(".vassal-etiket-bilinmeyen").length;
      dal("ATESLEME ⑥ bilinmeyen statu AYRI CSS sinifi tasiyor", 1,
          R.atesleme.bilinmeyenSinif);
      R.atesleme.uyari = yakalanan.filter(function (s) { return s.indexOf(bilinmez) >= 0; });
      dal("ATESLEME ⑦ bilinmeyen statu konsola BIR KEZ dustu", 1, R.atesleme.uyari.length);

      // ATESLEME ⑧: bilinmeyen statü İKİNCİ kez görülünce uyarı TEKRARLAMAZ
      d.vl = [{ k: "SINAV-Tekrar", s: bilinmez, p: ic(0.4, 0.4) }];
      etiketleriYerlestir();
      dal("ATESLEME ⑧ ayni bilinmeyen deger IKINCI kez otmuyor", 1,
          yakalanan.filter(function (s) { return s.indexOf(bilinmez) >= 0; }).length);

      // ATESLEME ⑨: BOZUK capa — atlanir AMA SESSIZ DEGIL
      var warnOnce = yakalanan.length;
      d.vl = [
        { s: "vassal", p: ic(0.3, 0.3) },                    // `k` YOK
        { k: "SINAV-Noktasiz", s: "vassal" },                 // `p` YOK
        { k: "SINAV-Bozuk", s: "vassal", p: ["a", "b"] },     // `p` sayi DEGIL
        { k: "SINAV-Saglam", s: "vassal", p: ic(0.5, 0.5) }
      ];
      etiketleriYerlestir();
      R.atesleme.bozukSonrasiEtiket = sayVassal();
      R.atesleme.bozukUyari = yakalanan.length - warnOnce;
      dal("ATESLEME ⑨ yalniz saglam capa yerlesti", 1, R.atesleme.bozukSonrasiEtiket);
      dal("ATESLEME ⑩ uc bozuk capanin UCU DE bildirildi", 3, R.atesleme.bozukUyari);

      // ATESLEME ⑪: GORUS ALANI disindaki capa yerlesmez
      d.vl = [{ k: "SINAV-Uzak", s: "vassal", p: [B - (D - B) * 5, G - (K - G) * 5] }];
      etiketleriYerlestir();
      dal("ATESLEME ⑪ gorus alani disindaki capa yerlesmiyor", 0, sayVassal());

      // ATESLEME ⑫: CAKISMA — ayni noktada iki capa, biri elenir
      var p0 = ic(0.5, 0.5);
      d.vl = [{ k: "SINAV-Cakisan-A", s: "vassal", p: p0 },
              { k: "SINAV-Cakisan-B", s: "vassal", p: [p0[0], p0[1]] }];
      etiketleriYerlestir();
      dal("ATESLEME ⑫ ayni noktadaki iki capadan biri eleniyor", 1, sayVassal());

      // ATESLEME ⑬: BAGIMSIZ DEVLET ETIKETI ITILMIYOR — sira tercihi sinaniyor
      // (`js/app.js`: tabi adi bir EYALETi itebilir, BAGIMSIZ DEVLETi itemez)
      d.vl = [];
      for (var q = 0; q < 40; q++) d.vl.push(
        { k: "SINAV-Kalabalik" + q, s: "vassal", p: ic(0.05 + (q % 8) * 0.12, 0.05 + Math.floor(q / 8) * 0.2) });
      etiketleriYerlestir();
      R.atesleme.kalabalikDevlet = sayDevlet();
      dal("ATESLEME ⑬ 40 tabi capasi devlet etiketlerini ITMIYOR",
          devletTaban, R.atesleme.kalabalikDevlet);
    } finally {
      console.warn = warnOrj;
      d.vl = yedek;                          // 🔴 FIKSTUR GERI ALINIR
      etiketleriYerlestir();
    }

    // ---- KONTROL: fikstür kalkınca sayfa ESKİ HÂLİNE döndü mü? ---------
    // `CLAUDE.md §11`: *"bir olcumu dogrulayan sey ikinci bir olcum degil,
    // olcumun YOKLUGUNDA ne oldugunu gosteren bir KONTROLDUR."* Bu satır
    // olmasaydı yukarıdaki sayılar bir yan etkiden de gelebilirdi.
    R.kontrol.vassalEtiket = sayVassal();
    R.kontrol.devletEtiket = sayDevlet();
    R.kontrol.vlGeriKondu = (donemler[aktifDonem].vl === yedek);
    dal("KONTROL · fikstur kalkinca vassal etiketi 0'a dondu", 0, R.kontrol.vassalEtiket);
    dal("KONTROL · devlet etiketi tabanina dondu", devletTaban, R.kontrol.devletEtiket);
    dal("KONTROL · vl alani geri konuldu", true, R.kontrol.vlGeriKondu);

    // ---- GIRDI: gercek dosyadan okuma yolu kosuldu mu? -----------------
    // Enjekte edilmis bir fikstur AYRISTIRICIYI HIC CAGIRMAZ; bu proje o
    // dersi bir nobetcinin ilk gercek girdisinde odedi (`CLAUDE.md C13③`).
    // Burada `donemler` dizisi `data/donemler.js`ten TARAYICI tarafindan
    // yuklenmis gercek kayitlardir — `vl` alani onlarin uzerinde kuruldu.
    R.girdi.kaynak = "data/donemler.js (tarayici yukledi)";
    R.girdi.kayit = donemler.length;
    R.girdi.vlAlaniDizi = R.gecme.vlAlaniTumKayitlardaDizi;
    R.girdi.gercekVlTasiyan = R.gecme.gercekVlTasiyanKayit;
    R.girdi.NOT = R.girdi.gercekVlTasiyan === 0
      ? "BUGUN 0 — kosu 8 inince BU SAYI ARTMALI ve sinav TEKRAR kosulmali."
      : "kosu 8 indi: gercek vl verisiyle kosuldu.";

    R.dallar = dallar;
    R.HUKUM = R.kalan === 0 ? "GECTI (" + R.gecen + " dal)"
                            : "KALDI — " + R.kalan + " dal";
    return R;
  };
  return "SINAV-VASSAL-GORUNUM-0907 yuklendi — window.__sinavVassal() ile kostur.";
})();

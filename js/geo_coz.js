// ═══════════════════════════════════════════════════════════════════════
// GEOMETRİ ÇÖZÜCÜ — arac/kodla.py'nin ürettiği delta+varint akışını açar.
// ═══════════════════════════════════════════════════════════════════════
// Emre'nin kararı (28 Eylül 2026): yürüyüş açılınca devletler_harita.js
// 85 → 169 MB oldu ve GitHub'ın 100 MB/dosya sınırını geçti. Sadeleştirme
// kolu ÖLÇÜLEREK kapandı (fazladan noktalar ızgara artifaktı DEĞİL, gerçek
// şekil bilgisi: eksen hizalı kenar oranı %7,2 → %6,4, yani artmadı).
// ⇒ Kalan tek kol KAYIPSIZ KODLAMA: aynı noktalar, aynı 3 ondalık hane,
//   nokta başına 16,28 bayt yerine 2,35 bayt.
//
// 🔴 BU DOSYA BOZULURSA HARİTA ÇİZİLİR AMA YANLIŞ ÇİZİLİR ve hiçbir denetim
//    ötmez. Python tarafı (`arac/kodla.py`) 93.050 halkanın HEPSİNDE bayt
//    bayt gidiş-dönüş sınavını geçmeden çıktı yazmaz. Bu dosyadaki çözücü,
//    O SINAVIN JS KARŞILIĞIDIR ve aynı biçimi okur. Biçim değişirse İKİSİ
//    BİRLİKTE değişir — yoksa sessiz bozulma olur.
//
// BİÇİM (arac/kodla.py `_kodla_havuz`):
//    varint  halka sayısı
//    her halka:  varint nokta sayısı
//                2×nokta adet zigzag varint  (önceki noktadan FARK, 1/1000°)
//    Her halkanın ilk noktası (0,0)'dan farktır — yani mutlak değeridir.
//
// SAYI GÜVENLİĞİ: en büyük mutlak değer 180.000 (boylam×1000). Zigzag onu
// 360.000 yapar — 2^19'un altında. Yani 32 bitlik JS bit işleçleri (`<<`,
// `|`) TAŞMAZ. Bu bir varsayım değil sınırdır: boylam ±180, enlem ±90.

(function (kok) {
  "use strict";

  // ── base64 → Uint8Array (parçalı) ──────────────────────────────────
  // 🔴 TEK SEFERDE `atob` YAPILMIYOR: 32 MB'lık base64 dizgisini tek atışta
  //    çözmek 24 MB'lık bir ara dizgi daha doğurur ve zayıf makinede (ölçüldü:
  //    filodaki bir bilgisayarda boş RAM 0,99 GB) tepe belleği gereksiz
  //    büyütür. 4 MB'lık dilimler hâlinde çözülüyor; base64 4 karakterde bir
  //    hizalı olduğu için dilim sınırı 4'ün katı SEÇİLMEK ZORUNDA.
  function b64Coz(s) {
    var DILIM = 4 * 1024 * 1024;              // 4'ün katı
    var uzunluk = (s.length / 4) * 3;
    if (s.charCodeAt(s.length - 1) === 61) uzunluk--;      // '='
    if (s.charCodeAt(s.length - 2) === 61) uzunluk--;
    var u8 = new Uint8Array(uzunluk);
    var y = 0;
    for (var i = 0; i < s.length; i += DILIM) {
      var ham = atob(s.substr(i, DILIM));
      for (var j = 0; j < ham.length; j++) u8[y++] = ham.charCodeAt(j);
    }
    return u8;
  }

  // ── PAYLAŞIMLI NOKTA (12 Kasım 2026) ──────────────────────────────
  // ÖLÇÜLDÜ: devlet havuzu 24.001.101 nokta taşıyor ama yalnız 800.009'u
  // tekil (dönem: 5.147.084 / 50.526) — komşu gövdeler aynı sınırı tekrar
  // tekrar yazıyor. Her noktaya ayrı `[x, y]` dizisi açmak iki havuzda
  // ~2,1 GB tutuyordu. Aynı koordinat artık TEK dizi nesnesidir; halkalar
  // ona başvurur. Değerler AYNI (aynı px/1000 bölmesi) — yalnız kimlik
  // paylaşılır. 🔴 Şart: hiçbir tüketici koordinat dizisini YERİNDE
  // değiştirmez (12 Kasım'da js/ tarandı; halkalar zaten dönemler arasında
  // paylaşılıyordu, bu aynı sözleşmenin nokta düzeyidir).
  // Anahtar px·2^20 + py: |py| ≤ 90.000 < 2^19 olduğundan çakışmaz ve 2^53
  // altında tamdır. Sınır dışı (olmaması gereken) değer paylaşılmaz.
  function noktaTablosu() {
    var m = new Map();
    return function (px, py) {
      if (py >= 524288 || py <= -524288) return [px / 1000, py / 1000];
      var k = px * 1048576 + py, n = m.get(k);
      if (n === undefined) {
        n = [px / 1000, py / 1000];   // 🔴 BÖLME — aşağıdaki gerekçe
        m.set(k, n);
      }
      return n;
    };
  }

  // ── varint akışı → halka havuzu ────────────────────────────────────
  function havuzCoz(u8) {
    var i = 0, nokta = noktaTablosu();

    function v() {                            // zigzag varint oku
      var z = 0, k = 0, c;
      do {
        c = u8[i++];
        z |= (c & 0x7F) << k;
        k += 7;
      } while (c & 0x80);
      return (z & 1) ? -((z + 1) >>> 1) : (z >>> 1);
    }

    var nHalka = v();
    var havuz = new Array(nHalka);
    for (var h = 0; h < nHalka; h++) {
      var nNokta = v();
      var halka = new Array(nNokta);
      var px = 0, py = 0;
      for (var p = 0; p < nNokta; p++) {
        px += v();
        py += v();
        // 🔴 BÖLME, ÇARPMA DEĞİL: px/1000 IEEE754'te doğru yuvarlanır ve
        //    metinden `parseFloat("31.114")` ile BİREBİR aynı double'ı verir.
        //    `px * 0.001` vermez (0.001 ikilik tabanda tam değildir).
        halka[p] = nokta(px, py);
      }
      havuz[h] = halka;
    }

    // ── NEGATİF SIFIR KUYRUĞU — OKUNUR ama UYGULANMAZ ────────────────
    // Python tarafı bu kuyruğu `-0.0`ı geri koymak için kullanıyor: dosyada
    // 38 yerde `[-0.0,49.331]` gibi değerler var ve `coz.py` özgün METNİ
    // birebir geri üretmek zorunda (17 alet o metni okuyor).
    // 🔴 Burada UYGULANMAZ, çünkü JS'te `String(-0)` === "0" — yani JS bu
    //    ayrımı metinde bile taşıyamaz; ve sayısal olarak `-0 === 0`, harita
    //    birebir aynı çizilir. AMA KUYRUK OKUNMAK ZORUNDA: okunmazsa
    //    aşağıdaki "artakalan bayt" denetimi yanlış alarm verir.
    var nEksi = v();
    for (var e = 0; e < nEksi; e++) v();

    if (i !== u8.length) {
      // Artakalan bayt = biçim uyuşmazlığı. SESSİZ GEÇİLMEZ.
      throw new Error("geo_coz: akış sonunda " + (u8.length - i) +
                      " bayt arttı — biçim uyuşmuyor");
    }
    return havuz;
  }

  // ── YUVA 1 — poligon dizisi (petek_govde.js) ───────────────────────
  // `PETEK_GOVDE_PARCA = [ poligon, ... ]` ve poligon = [ halka, ... ];
  // ötekilerden BİR DÜZEY derin. Python tarafı (`kodla.py _havuz_kodla`)
  // akışın başına poligon sayısını ve her poligonun halka sayısını yazar,
  // sonra halkaları NORMAL biçimde kodlar. Burası onun BİREBİR karşılığıdır
  // — biçim değişirse İKİSİ BİRLİKTE değişir, yoksa sessiz bozulma olur.
  function yuvaCoz(u8) {
    var i = 0;
    // 🔴 ZIGZAG — düz varint DEĞİL. Python'da SAYILAR DA `_yaz` ile yazılıyor
    // ve `_yaz` her değeri zigzag'lıyor ((n<<1) ^ ...), sayaçlar dâhil.
    // İlk yazdığımda burayı düz varint yapmıştım; `_yaz`ı okumadan "sayaç
    // zaten pozitif, zigzag gerekmez" diye VARSAYMIŞTIM. Varsayım yanlıştı ve
    // her sayacı İKİYE KATLAYARAK okurdu — 12.440 poligon 6.220 görünür,
    // halkalar yanlış gruplanır, harita sessizce yanlış çizilirdi.
    function v() {
      var z = 0, k = 0, c;
      do { c = u8[i++]; z |= (c & 0x7F) << k; k += 7; } while (c & 0x80);
      return (z & 1) ? -((z + 1) >>> 1) : (z >>> 1);
    }
    var nPol = v(), sayilar = new Array(nPol), toplam = 0;
    for (var j = 0; j < nPol; j++) { sayilar[j] = v(); toplam += sayilar[j]; }
    var halkalar = havuzCoz(u8.subarray(i));
    if (halkalar.length !== toplam) {
      throw new Error("geo_coz yuva: " + toplam + " halka bekleniyordu, " +
                      halkalar.length + " geldi");
    }
    var out = new Array(nPol), k2 = 0;
    for (var p = 0; p < nPol; p++) {
      out[p] = halkalar.slice(k2, k2 + sayilar[p]);
      k2 += sayilar[p];
    }
    return out;
  }

  // ── DİLİMLİ ÇÖZÜM (tam havuz, `load`dan sonra) ─────────────────────
  // ÖLÇÜLDÜ (25 Ekim 2026, yayın): tam havuzun çözümü TEK görevde 3,7 sn sürüyordu
  // ve sayfa açıldıktan hemen sonra arayüzü donduruyordu (uzun görev 5,9 sn).
  // Aynı iki çözücünün BİREBİR eşi, yalnız ~30 ms'lik dilimlerle ve aralarda ana
  // iş parçacığını bırakarak koşar. Biçim, sınavlar (artakalan bayt, eksi
  // kuyruğu) ve çıktı AYNI — b64Coz/havuzCoz değişirse bu da birlikte değişir.
  function dilimliCoz(s, bitti, hata) {
    var BUTCE = 30;
    var simdi = function () { return kok.performance ? kok.performance.now() : Date.now(); };
    // Dilimler arası geçiş MessageChannel ile: zincirleme setTimeout(0) 5. halkadan sonra
    // 4 ms'ye, arka plan sekmesinde 1 sn'ye kısılır (ölçüldü: gizli sekmede çözüm bitmedi).
    var kuyruk = [], kanal = null;
    if (typeof kok.MessageChannel === "function") {
      kanal = new kok.MessageChannel();
      kanal.port1.onmessage = function () { var f = kuyruk.shift(); if (f) f(); };
    }
    var sonraki = function (f) {
      var g = function () { try { f(); } catch (e) { hata(e); } };
      if (kanal) { kuyruk.push(g); kanal.port2.postMessage(0); }
      else kok.setTimeout(g, 0);
    };
    // 1) base64 → u8 (b64Coz ile aynı 4 MB'lık dilimler; dilim başına bir görev)
    var DILIM = 4 * 1024 * 1024;
    var uzunluk = (s.length / 4) * 3;
    if (s.charCodeAt(s.length - 1) === 61) uzunluk--;
    if (s.charCodeAt(s.length - 2) === 61) uzunluk--;
    var u8 = new Uint8Array(uzunluk), y = 0, si = 0;
    function b64Adim() {
      var ham = atob(s.substr(si, DILIM));
      for (var j = 0; j < ham.length; j++) u8[y++] = ham.charCodeAt(j);
      si += DILIM;
      if (si < s.length) sonraki(b64Adim);
      else { s = null; sonraki(havuzBasla); }
    }
    // 2) varint akışı → halka havuzu (havuzCoz ile aynı)
    var i = 0, nHalka, havuz, h = 0, nokta = noktaTablosu();
    function v() {
      var z = 0, k = 0, c;
      do { c = u8[i++]; z |= (c & 0x7F) << k; k += 7; } while (c & 0x80);
      return (z & 1) ? -((z + 1) >>> 1) : (z >>> 1);
    }
    function havuzBasla() { nHalka = v(); havuz = new Array(nHalka); havuzAdim(); }
    function havuzAdim() {
      var t0 = simdi();
      while (h < nHalka) {
        var nNokta = v(), halka = new Array(nNokta), px = 0, py = 0;
        for (var p = 0; p < nNokta; p++) {
          px += v(); py += v();
          halka[p] = nokta(px, py);   // paylaşımlı, bölme — havuzCoz'daki gerekçe
        }
        havuz[h++] = halka;
        if ((h & 255) === 0 && simdi() - t0 > BUTCE) { sonraki(havuzAdim); return; }
      }
      var nEksi = v();
      for (var e = 0; e < nEksi; e++) v();
      if (i !== u8.length) {
        throw new Error("geo_coz: akış sonunda " + (u8.length - i) +
                        " bayt arttı — biçim uyuşmuyor");
      }
      nokta = null;                            // tablo bırakılır; noktalar halkalarda yaşar
      bitti(havuz);
    }
    sonraki(b64Adim);
  }

  kok.geoCoz = { b64Coz: b64Coz, havuzCoz: havuzCoz, yuvaCoz: yuvaCoz, dilimliCoz: dilimliCoz };

  // ── OTOMATİK BAĞLAMA ───────────────────────────────────────────────
  // Her hedef bir satırlık base64 atar; bu dosya onu çözer ve app.js'in
  // OKUDUĞU KÜRESEL ADA koyar. app.js'e DOKUNULMAZ (Emre'nin şartı).
  // 🔴 SIRA: index.html'de bu dosya bütün `*_parcalar.js`lerden SONRA,
  //    `js/app.js`ten ÖNCE yüklenmeli.
  //
  // İKİ HEDEF (29 Eylül 2026):
  //   __DP_B64 → DEVLET_PARCALAR   devletler_harita.js'ten (169 → 35 MB)
  //   __PR_B64 → PARCALAR          donemler.js'ten        (54,8 → 10,9 MB)
  // ⚠️ Adlar AYRI olmak zorunda: ikisi de aynı sayfada yaşıyor, aynı adı
  //    kullansalardı ikincisi birincisini EZERDİ ve harita sessizce yanlış
  //    çizilirdi — bu dosyanın başındaki uyarının tam olarak anlattığı kusur.
  var HEDEFLER = [
    { b64: "__DP_B64", kuresel: "DEVLET_PARCALAR", ms: "__DP_COZUM_MS",
      hata: "__DP_HATA", ad: "devlet" },
    { b64: "__PR_B64", kuresel: "PARCALAR", ms: "__PR_COZUM_MS",
      hata: "__PR_HATA", ad: "dönem" }
  ];

  // ── KATMAN 1 / KATMAN 2 — TEMBEL YÜKLEME ───────────────────────────
  // ÖLÇÜLDÜ (29 Eylül 2026): devlet_parcalar.js 17,69 MB telde ve açılışta
  // EŞZAMANLI bekleniyordu. Oysa açılış günü (1281-01-01) havuzun yalnız
  // %4,1'ini istiyor: 3.781 halka / 129.898 nokta = 0,42 MB.
  // ⇒ KATMAN 1 (devlet_parca_on.js) senkron iner ve sayfa ONUNLA boyanır;
  //   KATMAN 2 (tam havuz) ilk boyamadan SONRA arka planda iner, gelince
  //   havuz değiştirilir ve `window.__govdeYenile()` çağrılır.
  // ⚠️ Açılışta ekranda EKSİK BİR ŞEY OLMAZ — katman 1 tam o günün verisidir.
  //   Kullanıcı zaman çubuğunu katman 2 inmeden oynatırsa o günün bazı
  //   gövdeleri henüz yoktur; `app.js`in `parcaCoz`u eksik halkayı ATLAR
  //   (çökmez), katman 2 gelince tam hâli çizilir.
  // `hedef` verilirse (zaman dilimli parça) halkalar o MEVCUT seyrek havuza
  // ÖZGÜN indeksleriyle yerleştirilir; verilmezse yeni bir seyrek dizi döner.
  function seyrekCoz(u8, hedef) {
    var i = 0;
    function v() {
      var z = 0, k = 0, c;
      do { c = u8[i++]; z |= (c & 0x7F) << k; k += 7; } while (c & 0x80);
      return (z & 1) ? -((z + 1) >>> 1) : (z >>> 1);
    }
    var n = v(), idx = new Array(n), onc = 0;
    for (var j = 0; j < n; j++) { onc += v(); idx[j] = onc; }
    var halkalar = havuzCoz(u8.subarray(i));
    if (halkalar.length !== n) {
      throw new Error("geo_coz: seyrek katmanda " + n + " indeks ama " +
                      halkalar.length + " halka");
    }
    var seyrek = hedef || [];
    for (var m = 0; m < n; m++) seyrek[idx[m]] = halkalar[m];
    return seyrek;
  }

  function surumEki() {                       // GENEL damga (window.SURUM) — etiket damgası artık
    try {                                     // yalnız o dosyanın içeriğinden türer
      return kok.SURUM ? "?v=" + kok.SURUM : "";
    } catch (e) { return ""; }
  }

  // İKİ tam havuz da aynı yoldan iner (parametreli; ilk sürümde yalnız devlet vardı):
  //   devlet: data/devlet_parcalar.js → DEVLET_PARCALAR · kanca __govdeYenile
  //   dönem : data/donem_parcalar.js  → PARCALAR        · kanca __donemYenile
  // Dönem katman 1'i (`donem_parca_on.js`, 25 Ekim 2026): açılış günü havuzun
  // %0,01'ini (1 halka) ister; 13,5 MB'lık tam havuz ilk boyamayı BEKLETMEZ.
  var TAM_DEVLET = { dosya: "data/devlet_parcalar.js", b64: "__DP_B64",
                     kuresel: "DEVLET_PARCALAR", ms: "__DP_TAM_MS",
                     halka: "__DP_TAM_HALKA", hata: "__DP_TAM_HATA",
                     kanca: "__govdeYenile", ad: "devlet" };
  var TAM_DONEM  = { dosya: "data/donem_parcalar.js", b64: "__PR_B64",
                     kuresel: "PARCALAR", ms: "__PR_TAM_MS",
                     halka: "__PR_TAM_HALKA", hata: "__PR_TAM_HATA",
                     kanca: "__donemYenile", ad: "dönem" };

  // 🔴 YENİDEN DENEME (10 Kasım 2026): devlet_parcalar.js telde 40 MB; yavaş
  // hatta (ölçüldü: 62 KB/sn → 11 dk) tarayıcı indirmeyi yarıda kesip `onerror`
  // verdi ve sayfa ömür boyu katman 1'le kaldı — 1281 dışındaki her tarihte
  // Osmanlı dışı devletler BOŞ göründü. Artık 3 kez, artan arayla yeniden istenir.
  var DENEME_ARA_MS = [5000, 20000, 60000];
  function tamHavuzuGetir(c, deneme) {
    c = c || TAM_DEVLET;
    deneme = deneme || 0;
    var s = kok.document.createElement("script");
    s.src = c.dosya + surumEki() + (deneme ? (kok.SURUM ? "&" : "?") + "d=" + deneme : "");
    s.async = true;
    s.onload = function () {
      var t = (kok.performance && kok.performance.now) ? kok.performance.now() : 0;
      function hata(e) {
        kok[c.hata] = String(e);
        if (kok.console) console.error("🔴 geo_coz tam havuz BAŞARISIZ [" + c.ad + "]:", e);
      }
      function bitti(havuz) {
        try {
          kok[c.kuresel] = havuz;
          // *_TAM_MS = duvar saati (dilimler arası boşluk dâhil); ana iş parçacığı
          // hiçbir dilimde ~30 ms'den uzun tutulmaz.
          if (t) kok[c.ms] = Math.round(kok.performance.now() - t);
          kok[c.halka] = kok[c.kuresel].length;
          if (kok.console) console.log("geo_coz: tam havuz indi [" + c.ad + "] — " +
              kok[c.kuresel].length + " halka, " + kok[c.ms] + " ms (dilimli)");
          // 🔴 app.js'in kancası. YOKSA sessizce geçilmez: katman 1 ile kalmak
          //    ileri tarihlerde EKSİK harita demektir, ve bu görünmez bir kusurdur.
          if (typeof kok[c.kanca] === "function") kok[c.kanca]();
          else {
            kok[c.hata] = "app.js kancası (" + c.kanca + ") YOK";
            if (kok.console) console.error("🔴 " + kok[c.hata]);
          }
        } catch (e) { hata(e); }
      }
      try {
        if (!kok[c.b64]) throw new Error(c.b64 + " gelmedi");
        var b64 = kok[c.b64];
        kok[c.b64] = null;
        dilimliCoz(b64, bitti, hata);
      } catch (e) { hata(e); }
    };
    s.onerror = function () {
      kok[c.hata] = c.dosya.split("/").pop() + " İNDİRİLEMEDİ";
      kok[c.hata + "_DENEME"] = deneme + 1;   // sayı ayrı alanda: yeni arayüz dizgisi doğmasın
      if (kok.console) console.error("🔴 " + kok[c.hata]);
      if (s.parentNode) s.parentNode.removeChild(s);
      if (deneme < DENEME_ARA_MS.length) {
        setTimeout(function () { tamHavuzuGetir(c, deneme + 1); }, DENEME_ARA_MS[deneme]);
      }
    };
    kok.document.head.appendChild(s);
  }

  // ── ZAMAN DİLİMLİ PARÇA (P1 ②, 16 Kasım 2026) ─────────────────────────
  // ÖLÇÜLDÜ (HAVVA prototipi, gzip): tam havuz devlet ~41 MB + dönem ~8 MB telde,
  // oysa bir tarihte havuzun yalnız %0,6–2'si gerekiyor. `arac/kodla.py dilim-yaz`
  // havuzu halkaların KULLANIM ARALIĞINA göre parçalara böler; dizin
  // `data/parca_manifest.js` (window.PARCA_MANIFEST). Tarih yılı Y için her
  // katmanda (W = kat[k]) yalnız Y//W−1 ve Y//W pencereleri gerekir (kanıt:
  // kodla.py "ZAMAN DİLİMLİ PARÇA" notu; `kodla.py dilim-sina` ölçer).
  // Manifest VARSA tam havuz (`tamHavuzuGetir`) HİÇ İSTENMEZ; app.js `guncelle()`
  // her gün değişiminde `window.parcaGerek(yıl)` çağırır. Parça gelince halkaları
  // aynı seyrek havuza (özgün indeksle) yerleşir ve kanca (`__govdeYenile` /
  // `__donemYenile`) çağrılır. Manifest YOKSA (ya da `?parca=0`) eski yol aynen.
  // Parça biçimi katman 1'inkidir (`seyrekCoz`). `?v=<sha12>` damgası: değişmeyen
  // parça sürüm değişse de AYNI adreste kalır ⇒ sw.js önbelleğinden gelir.
  var MAN = kok.PARCA_MANIFEST;
  var parcaKapali = !!kok.__PARCA_KAPALI;
  try { if (/[?&]parca=0(&|$)/.test(kok.location.search)) parcaKapali = true; } catch (e) { }
  var PD = {
    devlet: { m: MAN && MAN.devlet, kuresel: "DEVLET_PARCALAR", kanca: "__govdeYenile",
              ad: "devlet", zaman: null },
    donem:  { m: MAN && MAN.donem, kuresel: "PARCALAR", kanca: "__donemYenile",
              ad: "dönem", zaman: null }
  };
  var PARCA_KIP = !!(MAN && MAN.kok && !parcaKapali && kok.document &&
                     (PD.devlet.m || PD.donem.m));
  if (!PARCA_KIP) { PD.devlet.m = null; PD.donem.m = null; }
  var pDurum = {};          // ad → 0 inmekte · 1 indi
  var pKuyruk = [], pUcta = 0, P_ESZAMAN = 4;
  var pSayfaHazir = false, pBekleyenYil = null, pSonYil = null;
  // Ölçüm (tarayıcı sınavı ve teşhis için; arayüz metni DEĞİL):
  kok.__PARCA_OLCUM = { istenen: 0, inen: 0, bayt: 0, hata: 0, ms: 0, kip: PARCA_KIP };

  function pGerekenler(H, yil) {
    var m = H.m, out = [];
    if (!m) return out;
    for (var k = 0; k < m.kat.length; k++) {
      var W = m.kat[k], w = Math.floor(yil / W);
      for (var j = w - 1; j <= w; j++) {
        var ad = m.onek + "_" + k + "_" + j;
        if (m.p[ad]) out.push({ H: H, ad: ad });
      }
    }
    return out;
  }

  function pKancaPlanla(H) {
    if (H.zaman) return;
    // Aynı anda inen parçalar TEK yeniden kurmada birleşsin.
    H.zaman = setTimeout(function () {
      H.zaman = null;
      if (typeof kok[H.kanca] === "function") {
        try { kok[H.kanca](); } catch (e) {
          if (kok.console) console.error("🔴 geo_coz parça kancası attı [" + H.ad + "]:", e);
        }
      } else {
        kok.__PARCA_HATA = "app.js kancası (" + H.kanca + ") YOK";
        if (kok.console) console.error("🔴 " + kok.__PARCA_HATA);
      }
    }, 30);
  }

  function pGetir(is, deneme) {
    var H = is.H, ad = is.ad, kayit = H.m.p[ad];
    var s = kok.document.createElement("script");
    s.src = MAN.kok + ad + ".js?v=" + kayit[3] + (deneme ? "&d=" + deneme : "");
    s.async = true;
    s.onload = function () {
      if (s.parentNode) s.parentNode.removeChild(s);
      var t = (kok.performance && kok.performance.now) ? kok.performance.now() : 0;
      try {
        var d = kok.__DILIM && kok.__DILIM[ad];
        if (!d) throw new Error(ad + " gelmedi");
        delete kok.__DILIM[ad];
        // Manifest ile dosya AYNI üretimden mi? (önbellekte eski kopya kalmasın)
        if (String(d.sha).slice(0, 12) !== kayit[3]) {
          throw new Error(ad + " damgası manifestle tutmuyor (" +
                          String(d.sha).slice(0, 12) + " ≠ " + kayit[3] + ")");
        }
        if (!kok[H.kuresel]) kok[H.kuresel] = [];
        seyrekCoz(b64Coz(d.b64), kok[H.kuresel]);
        pDurum[ad] = 1;
        kok.__PARCA_OLCUM.inen++;
        kok.__PARCA_OLCUM.bayt += kayit[4];
        if (t) kok.__PARCA_OLCUM.ms += Math.round(kok.performance.now() - t);
        pKancaPlanla(H);
      } catch (e) {
        delete pDurum[ad];
        pSonYil = null;
        kok.__PARCA_OLCUM.hata++;
        kok.__PARCA_HATA = String(e);
        if (kok.console) console.error("🔴 geo_coz parça BAŞARISIZ [" + H.ad + "]:", e);
      }
      pUcta--;
      pPompala();
    };
    s.onerror = function () {
      if (s.parentNode) s.parentNode.removeChild(s);
      kok.__PARCA_HATA = (ad + ".js") + " İNDİRİLEMEDİ";   // tam havuzdaki dizgiyle AYNI (yeni çeviri metni doğmasın)
      kok.__PARCA_HATA_DENEME = deneme + 1;
      if (kok.console) console.error("🔴 " + kok.__PARCA_HATA);
      // Tam havuzdaki YENİDEN DENEME düzeni (DENEME_ARA_MS) parça başına aynen.
      if (deneme < DENEME_ARA_MS.length) {
        setTimeout(function () { pGetir(is, deneme + 1); }, DENEME_ARA_MS[deneme]);
        return;                                  // yuva (pUcta) denemede tutulur
      }
      delete pDurum[ad];                         // sonraki tarih değişimi yeniden ister
      pSonYil = null;
      kok.__PARCA_OLCUM.hata++;
      pUcta--;
      pPompala();
    };
    kok.document.head.appendChild(s);
  }

  function pPompala() {
    while (pUcta < P_ESZAMAN && pKuyruk.length) {
      var is = pKuyruk.shift();
      if (pDurum[is.ad] !== undefined) continue;
      pDurum[is.ad] = 0;
      pUcta++;
      kok.__PARCA_OLCUM.istenen++;
      pGetir(is, 0);
    }
  }

  // Dışa açık: `yil` ASTRONOMİK yıl (app.js idxTarih(suanki).y). Önce o yılın
  // parçaları, sonra ileri/geri oynatma için ±L0 yılın parçaları (önyükleme)
  // kuyruğa girer. İnmiş/inmekte olan parça yeniden istenmez; hızlı kaydırmada
  // henüz başlamamış eski istekler yeni yılın listesiyle DEĞİŞTİRİLİR.
  function parcaGerek(yil) {
    if (!PARCA_KIP) return false;
    yil = Math.floor(+yil);
    if (!isFinite(yil)) return false;
    if (!pSayfaHazir) { pBekleyenYil = yil; return true; }
    if (yil === pSonYil) return true;
    pSonYil = yil;
    var liste = [], gor = {};
    function ekle(is) {
      if (gor[is.ad] || pDurum[is.ad] !== undefined) return;
      gor[is.ad] = 1;
      liste.push(is);
    }
    var H, L0;
    for (H in PD) pGerekenler(PD[H], yil).forEach(ekle);
    for (H in PD) {
      if (!PD[H].m) continue;
      L0 = PD[H].m.l0 || 8;
      pGerekenler(PD[H], yil + L0).forEach(ekle);
      pGerekenler(PD[H], yil - L0).forEach(ekle);
    }
    pKuyruk = liste;
    pPompala();
    return true;
  }
  kok.parcaGerek = parcaGerek;
  // Teşhis: o yıl için GEREKEN parçaların hepsi indi mi?
  kok.parcaHazirMi = function (yil) {
    if (!PARCA_KIP) return true;
    var hepsi = pGerekenler(PD.devlet, yil).concat(pGerekenler(PD.donem, yil));
    for (var i = 0; i < hepsi.length; i++) if (pDurum[hepsi[i].ad] !== 1) return false;
    return true;
  };

  if (PARCA_KIP) {
    // app.js PARCALAR / DEVLET_PARCALAR'sız AÇILMAZ (geometriKapisi) — katman 1
    // yoksa boş seyrek havuzla açılır, parçalar `load`dan sonra dolar.
    if (PD.devlet.m && !kok.DEVLET_PARCALAR && !kok.__DP_ON_B64 && !kok.__DP_B64) kok.DEVLET_PARCALAR = [];
    if (PD.donem.m && !kok.PARCALAR && !kok.__PR_ON_B64 && !kok.__PR_B64) kok.PARCALAR = [];
    // İlk boyamayı bekletmemek için parçalar `load`dan SONRA istenir (tam havuz gibi).
    var pBasla = function () {
      pSayfaHazir = true;
      var y = pBekleyenYil;
      if (y === null) {                          // app.js henüz çağırmadıysa katman 1 günü
        var g = String(kok.__DP_ON_GUN || kok.__PR_ON_GUN || "1281");
        y = parseInt(g.replace(/^([+-]?\d+).*$/, "$1"), 10);
      }
      parcaGerek(y);
    };
    if (kok.addEventListener) {
      kok.addEventListener("load", function () { ilkKareSonra(pBasla); });
    } else {
      pBasla();
    }
  }

  // AÇILIŞ HIZI (18 Kasım 2026): `load` haritanın kendisinden ÖNCE gelir (MapLibre stili
  // ve karoları sonra biter). Parçalar `load`da istenince inip kanca (`__govdeYenile` +
  // `__donemYenile` → bütün gövdeleri yeniden kur + guncelle) İLK KAREDEN ÖNCE koşuyordu:
  // ölçüldü ~2,5 sn, atlas-hazir → ilk kare arası. Niyet "ilk boyamadan sonra" idi ⇒
  // `atlas-hazir` (app.js harita kuruldu damgası, <html> sınıfı) + bir kare beklenir.
  // Harita hiç kurulamazsa parçalar yine gelsin diye `load`dan 20 sn sonra beklemeden başlar.
  function ilkKareSonra(fn) {
    var bas = Date.now(), d = kok.document && kok.document.documentElement;
    (function bak() {
      var hazir = !d || !d.classList || d.classList.contains("atlas-hazir");
      if (!hazir && Date.now() - bas < 20000) { setTimeout(bak, 100); return; }
      var oldu = false;
      function bir() { if (!oldu) { oldu = true; setTimeout(fn, 0); } }
      // Gizli sekmede kare gelmez ⇒ 1 sn yedek.
      if (hazir && kok.requestAnimationFrame) { kok.requestAnimationFrame(bir); setTimeout(bir, 1000); }
      else bir();
    })();
  }

  // DÖNEM KATMAN 1 — `donem_parca_on.js` varsa PARCALAR seyrek kurulur, tam havuz
  // `load`dan sonra gelir. Dosya YOKSA (eski düzen) aşağıdaki eşzamanlı döngü
  // `__PR_B64`ü aynen eskisi gibi çözer.
  var donemKatman1 = false;
  if (kok.__PR_ON_B64 && !kok.PARCALAR && !kok.__PR_B64) {
    var tPr = (kok.performance && kok.performance.now) ? kok.performance.now() : 0;
    try {
      kok.PARCALAR = seyrekCoz(b64Coz(kok.__PR_ON_B64));
      kok.__PR_ON_B64 = null;
      kok.__PR_ON_MS = tPr ? Math.round(kok.performance.now() - tPr) : 0;
      donemKatman1 = true;
      if (kok.console) console.log("geo_coz[dönem katman1]: " + kok.__PR_ON_GUN +
          " için seyrek havuz, " + kok.__PR_ON_MS + " ms");
    } catch (e) {
      kok.__PR_ON_HATA = String(e);
      if (kok.console) console.error("🔴 geo_coz dönem katman1 BAŞARISIZ:", e);
      // app.js `geometriKapisi` PARCALAR'sız AÇILMAZ; boş havuzla açılır, hata
      // yukarıda haykırıldı ve tam havuz (aşağıda) hemen istenir.
      kok.PARCALAR = [];
    }
    if (PD.donem.m) {
      // ZAMAN DİLİMLİ PARÇA kipi: tam havuz İSTENMEZ, parcaGerek getirir.
    } else if (donemKatman1) {
      // Tam havuzu ilk boyamadan SONRA iste.
      if (kok.addEventListener) {
        kok.addEventListener("load", function () {
          setTimeout(function () { tamHavuzuGetir(TAM_DONEM); }, 0);
        });
      } else {
        tamHavuzuGetir(TAM_DONEM);
      }
    } else {
      tamHavuzuGetir(TAM_DONEM);
    }
  }

  if (kok.__DP_ON_B64 && !kok.DEVLET_PARCALAR) {
    var tOn = (kok.performance && kok.performance.now) ? kok.performance.now() : 0;
    try {
      kok.DEVLET_PARCALAR = seyrekCoz(b64Coz(kok.__DP_ON_B64));
      kok.__DP_ON_B64 = null;
      kok.__DP_ON_MS = tOn ? Math.round(kok.performance.now() - tOn) : 0;
      if (kok.console) console.log("geo_coz[katman1]: " + kok.__DP_ON_GUN +
          " için seyrek havuz, " + kok.__DP_ON_MS + " ms");
    } catch (e) {
      kok.__DP_ON_HATA = String(e);
      if (kok.console) console.error("🔴 geo_coz katman1 BAŞARISIZ:", e);
    }
    // Tam havuzu ilk boyamadan SONRA iste — `load` olayı beklenir.
    // ZAMAN DİLİMLİ PARÇA kipinde tam havuz İSTENMEZ (parcaGerek getirir).
    if (PD.devlet.m) {
      /* parça kipi */
    } else if (kok.addEventListener) {
      kok.addEventListener("load", function () { setTimeout(tamHavuzuGetir, 0); });
    } else {
      tamHavuzuGetir();
    }
  }

  var cozulenVar = false;
  for (var hi = 0; hi < HEDEFLER.length; hi++) {
    var H = HEDEFLER[hi];
    if (!kok[H.b64] || kok[H.kuresel]) continue;
    cozulenVar = true;
    var t0 = (kok.performance && kok.performance.now) ? kok.performance.now() : 0;
    try {
      kok[H.kuresel] = havuzCoz(b64Coz(kok[H.b64]));
      kok[H.b64] = null;                      // büyük dizgiyi bırak
      if (t0) {
        var ms = Math.round(kok.performance.now() - t0);
        kok[H.ms] = ms;
        if (kok.console) console.log("geo_coz[" + H.ad + "]: " +
            kok[H.kuresel].length + " halka, " + ms + " ms");
      }
    } catch (e) {
      // 🔴 HATA YUTULMAZ. Çözülemezse harita EKSİK çizilir; sessizce yanlış
      //    çizmek yerine konsola ve ekrana haykırması gerekir.
      if (kok.console) console.error("🔴 geo_coz BAŞARISIZ [" + H.ad + "]:", e);
      kok[H.hata] = String(e);
      // Eski ad geriye dönük: dış ölçümler __DP_HATA'ya bakıyor.
      if (!kok.__DP_HATA) kok.__DP_HATA = String(e);
    }
  }

  // Katman 1 de bir çözümdür — yerleşim onarımı onda da kurulmalı.
  if (cozulenVar || typeof kok.__DP_ON_MS === "number" ||
      typeof kok.__PR_ON_MS === "number") {
    // ── 🔴 YERLEŞİM ONARIMI — ölçülmüş bir GERİLEMENİN çaresi ──────────
    // Bu blok bir "ihtiyaten" satırı değil; kıyaslamayla bulunmuş bir kusuru
    // kapatıyor. ÖLÇÜM (28 Eylül 2026, aynı pencere 1024×768):
    //     yayındaki sürüm : tuval 604×695  · kap 604×689   ✓ doğru
    //     kodlama sonrası : tuval 400×300  · kap 604×689   🔴 YANLIŞ
    // Sebep: yukarıdaki çözüm EŞZAMANLI ve ~1,7 sn sürüyor. O sırada tarayıcı
    // ilk yerleşimi (layout) tamamlayamıyor; `js/app.js` haritayı hemen
    // ardından kurunca MapLibre kabın ölçüsünü okuyamıyor ve kendi varsayılan
    // 400×300 tuvaline düşüyor. Harita ÇİZİLİYOR ama kabının sol üst köşesine
    // sıkışıyor — geri kalan alan SİYAH kalıyor.
    // ⚠️ Ekran görüntüsünde bunu "çizilmeyen gövde" sandım; ölçüm çürüttü:
    //    tuval içindeki 300 örnek noktanın KARA olanlarının TAMAMINDA sahip
    //    katmanı vardı (kara-ama-sahipsiz = 0). Yani veri değil YERLEŞİM
    //    kusuruydu. "Haritaya bakıp karar vermek" burada yanlış teşhis verirdi.
    // ÇARE: sayfa yüklenince bir `resize` olayı yayınla. MapLibre varsayılan
    // olarak `trackResize:true` ile pencere yeniden boyutlanmasını dinler ve
    // kendini kabına oturtur. `app.js`e DOKUNULMAZ (Emre'nin şartı).
    if (kok.addEventListener) {
      kok.addEventListener("load", function () {
        try {
          kok.dispatchEvent(new Event("resize"));
        } catch (e2) {
          var ev = kok.document.createEvent("Event");   // eski tarayıcı
          ev.initEvent("resize", true, true);
          kok.dispatchEvent(ev);
        }
      });
    }
  }
})(typeof window !== "undefined" ? window : this);

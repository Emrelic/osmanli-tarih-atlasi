// kaynak_damga.js — KAYNAK DAMGASI (tarayıcı tarafı) · KAYNAK-ARAYUZ-1014, 14 Ekim 2026
//
// Emre'nin kuralı (14 Ekim 2026): her kronoloji maddesinde "Kaynaklar" bağlantısı
// olur, tıklanınca maddenin dayandığı kaynaklar DAMGASIYLA listelenir; yalnız
// güvensiz kaynağa (Vikipedi vb.) dayanan madde SİTEDE GÖSTERİLMEZ.
//
// Tablo: data/kaynak_guven.js (window.KAYNAK_GUVEN) — TEK DOĞRULUK KAYNAĞI.
// Bu dosya arac/kaynak_guven.py `Siniflayici`nın BİREBİR eşidir; eşlik
// denetim/KAYNAK-ARAYUZ-1014/esit_sina.py ile madde madde ölçülür (iki dil
// aynı maddeye farklı damga verirse site ile ölçüm ayrışır — o sınav kırılır).
//
//   window.KaynakDamga.damgala(kaynak, t) →
//     { damga: bos|bulunamadi|guvenli|ikincil|taninmayan|guvensiz,
//       alt: null|"C"|"adsiz",
//       parcalar: [{ p, kademe: A|B|K|C|Y|N|null, kodlar:[…], karisik, url }] }
//   window.KaynakDamga.gizli(madde) → true yalnız damga "guvensiz" ise
//
// Tablo yüklenmediyse KaynakDamga = null; çağıranlar hiçbir maddeyi gizlemez
// (tablo yokken içerik kaybetmek, damgasız göstermekten pahalıdır) ve konsola BAĞIRIR.
(function () {
  var T = window.KAYNAK_GUVEN;
  if (!T || !T.kaynaklar) {
    console.error("Atlas: data/kaynak_guven.js YÜKLENMEDİ — kaynak damgası ve güvensiz madde gizleme KAPALI");
    window.KaynakDamga = null;
    return;
  }
  var SIRA = { A: 0, B: 1, K: 2, C: 3, Y: 4, N: 5 };     // kaynak_guven.py KADEME_SIRA
  var ayirici = new RegExp(T.parcala.ayirici);
  var bulunamadi = new RegExp(T.bulunamadi_desen, "i");   // desen ^ ile başlar (Python .match)
  var slug = new RegExp(T.tdv_slug.desen);                // desen ^…$ (Python .match)
  var slugHaric = {};
  (T.tdv_slug.haric || []).forEach(function (s) { slugHaric[s] = true; });
  var slugUrl = T.tdv_slug.url_kalibi;
  var tdvKademe = "A";
  // HIZ (25 Ekim 2026): bir girdinin desenleri TEK alternasyonda birleşir — `eslesen` yalnız
  // "girdinin HERHANGİ bir deseni tuttu mu"ya bakar, yani (?:a)|(?:b) ile a, b'yi ayrı ayrı
  // sınamak aynı cevabı verir (desenlerde geri başvuru / adlı grup / satır içi bayrak YOK —
  // olursa ayrı sınamaya düşülür). ÖLÇÜLDÜ: 957 desen → 292 ifade, 26.915 parça 5,6 → 1,3 sn,
  // fark 0; esit_sina.py FARK 0.
  function birlesik(ds, bayrak) {
    if (!ds.length) return [];
    if (ds.some(function (p) { return /\\[1-9]|\(\?</.test(p); })) {
      return ds.map(function (p) { return new RegExp(p, bayrak); });
    }
    return [new RegExp(ds.map(function (p) { return "(?:" + p + ")"; }).join("|"), bayrak)];
  }
  // HIZ-2 (18 Kasım 2026, açılış hızı): 35 bin benzersiz parça × 200 ifade = ~7 milyon
  // RegExp.test açılışta 6-8 sn yiyordu (app.js guvensizKronolojiGizle). Her desenden,
  // eşleşmenin İÇERMEK ZORUNDA olduğu en uzun ASCII harf dizisi (zorunlu dizi) çıkarılır;
  // girdinin ifadesi yalnız parçada desenlerinden birinin zorunlu dizisi geçiyorsa sınanır.
  // Ön süzgeç YALNIZ eler, kararı yine aynı ifade verir ⇒ sonuç birebir aynı. Zorunlu dizisi
  // çıkarılamayan (üst düzey |, 3 harften kısa…) desenin girdisi her parçada sınanır.
  // ASCII şartı: /i bayrağında ASCII olmayan harf ASCII harfe katlanmaz (ES Canonicalize),
  // toLowerCase da ASCII'yi ASCII'ye, bitişik diziyi bitişik dizeye çevirir ⇒ süzgeç hiç kaçırmaz.
  // Harf katlaması olmayan karakter (CJK, rakam, noktalama): /i bayrağında da yalnız kendini tutar.
  function katlanmaz(ch) { return ch.toUpperCase() === ch && ch.toLowerCase() === ch; }
  function zorunluDizi(p, harfDuyarsiz) {
    var en = "", run = "", i = 0, n = p.length, c;
    function bitir() { if (run.length > en.length) en = run; run = ""; }
    function atla(ac, kapa) {                          // dengeli grup / sınıf sonuna atla
      var d = 0;
      for (; i < n; i++) {
        c = p[i];
        if (c === "\\") { i++; continue; }
        if (ac === "[" ) { if (c === "]" && d++ >= 0) { i++; return true; } continue; }
        if (c === "[") { i++; while (i < n && p[i] !== "]") { if (p[i] === "\\") i++; i++; } continue; }
        if (c === ac) d++;
        else if (c === kapa && --d === 0) { i++; return true; }
      }
      return false;
    }
    while (i < n) {
      c = p[i];
      var q = p[i + 1];
      if (c === "|") return null;                       // üst düzey alternasyon
      if (c === "(" || c === "[") {
        bitir();
        if (!atla(c, c === "(" ? ")" : "]")) return null;
        if (p[i] === "?" || p[i] === "*" || p[i] === "+" || p[i] === "{") {
          if (p[i] === "{") { while (i < n && p[i] !== "}") i++; }
          i++;
          if (p[i] === "?") i++;
        }
        continue;
      }
      var lit = null, adim = 1;
      if (c === "\\") {
        adim = 2;
        if (q !== undefined && /[^A-Za-z0-9]/.test(q)) lit = q;   // \. \- \/ … düz karakter
      } else if ("^$.?*+{}".indexOf(c) < 0) {
        lit = c;
      }
      var nq = p[i + adim];
      if (lit !== null && (lit.charCodeAt(0) < 128 || !harfDuyarsiz || katlanmaz(lit)) &&
          !(nq === "?" || nq === "*" || nq === "{")) {
        run += lit;
        if (nq === "+") { bitir(); adim++; }
      } else {
        bitir();
        if (nq === "?" || nq === "*" || nq === "+") adim++;
        else if (nq === "{") { var j = p.indexOf("}", i + adim); adim = j < 0 ? n : j - i + 1; }
      }
      i += adim;
    }
    bitir();
    return en.length >= 2 ? en : null;
  }
  var surekli = [];                                    // süzgeçsiz sınanan girdi sıraları
  // İki kademeli dizin: ilk harfin kodu → (Int32Array) yuva; yuva → Map(ikinci harfin kodu →
  // [[dizi, girdi sırası]]). Tek sayılı anahtar 2³¹'i aşıp Map'i yavaşlatıyordu (ölçüldü).
  function yeniDizin() { return { ilk: typeof Int32Array === "function" ? new Int32Array(65536) : [], yuva: [null], n: 0 }; }
  var dizinI = yeniDizin(), dizinD = yeniDizin();
  // Desenleri dizine koyar; zorunlu dizisi çıkmayan desenleri (her parçada sınanacak "kalan") döndürür.
  function dizinle(ds, bayrak, gi) {
    var kalan = [];
    ds.forEach(function (p) {
      var d = typeof Map === "function" ? zorunluDizi(p, !!bayrak) : null;
      if (d === null) { kalan.push(p); return; }
      if (bayrak) d = d.toLowerCase();
      var z = bayrak ? dizinI : dizinD, c0 = d.charCodeAt(0), k = ucuncu(d, 1);
      if (!z.ilk[c0]) { z.ilk[c0] = z.yuva.length; z.yuva.push(new Map()); }
      var m = z.yuva[z.ilk[c0]];
      if (!m.has(k)) m.set(k, []);
      m.get(k).push([d, gi]);
      if (k < 0) m.ikiHarf = true;                   // bu başlangıç harfinde iki harfli dizi var
      z.n++;
    });
    return kalan;
  }
  // İkinci kademenin anahtarı: 2. ve (varsa) 3. harf; 3. harf 11 bite katlanır (çakışma yalnız
  // fazladan aday doğurur, startsWith eler). İki harfli dizinin anahtarı -1-c1 (3. harf yok).
  function ucuncu(t, k) {
    var c1 = t.charCodeAt(k);
    return k + 1 < t.length ? c1 * 2048 + (t.charCodeAt(k + 1) & 2047) : -1 - c1;
  }
  function adayla(t, z, aday) {
    var l, j, y, m, son = t.length - 1, ilk = z.ilk, yuva = z.yuva, im = aday.im;
    for (var k = 0; k < son; k++) {
      if (!(y = ilk[t.charCodeAt(k)])) continue;
      m = yuva[y];
      for (var tur = 0; tur < 2; tur++) {               // 3 harfli anahtar, sonra 2 harfli diziler
        if (tur === 1 && !m.ikiHarf) break;
        l = tur === 0 ? (k + 2 < t.length ? m.get(t.charCodeAt(k + 1) * 2048 + (t.charCodeAt(k + 2) & 2047)) : null)
                      : m.get(-1 - t.charCodeAt(k + 1));
        if (!l) continue;
        for (j = 0; j < l.length; j++) {
          if (!im[l[j][1]] && t.startsWith(l[j][0], k)) { im[l[j][1]] = 1; aday.l.push(l[j][1]); }
        }
      }
    }
  }
  var girdiler = T.kaynaklar.map(function (e, gi) {
    if (e.kod === "TDV") tdvKademe = e.kademe;
    var rx = birlesik(e.desen || [], "i").concat(birlesik(e.desen_duyarli || [], ""));
    // rxKalan: zorunlu dizisi çıkmayan desenler — her parçada sınanır. Zorunlu dizilerinden biri
    // parçada geçmiyorsa dizinli desenlerin hiçbiri tutamaz ⇒ girdinin cevabı = rxKalan'ın cevabı.
    var rxKalan = birlesik(dizinle(e.desen || [], "i", gi), "i")
      .concat(birlesik(dizinle(e.desen_duyarli || [], "", gi), ""));
    if (rxKalan.length) surekli.push(gi);
    return { kod: e.kod, kademe: e.kademe, genel: !!e.genel, rx: rx, rxKalan: rxKalan,
             sonra: e.yalniz_sonra || null, once: e.once_kademe || null,
             eserSil: e.eser_desen ? new RegExp(e.eser_sil, "ig") : null,
             eserDesen: e.eser_desen ? new RegExp(e.eser_desen, "i") : null,
             eserYok: e.eser_yok_kademe || null };
  });
  var isaret = typeof Uint8Array === "function" ? new Uint8Array(girdiler.length) : [];  // tutanlar'ın aday işareti

  function metin(k) {
    if (k == null) return null;
    return Array.isArray(k) ? k.map(function (x) { return x == null ? "" : String(x); }).join(",") : String(k);
  }
  function parcala(k) {
    return metin(k).split(ayirici).map(function (p) { return p.trim(); })
      .filter(function (p) { return p; });
  }
  function tarihIso(t) {
    var m = /^(\d{1,4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?/.exec(String(t == null ? "" : t).trim());
    if (!m) return null;
    function d(s, n) { s = String(s); while (s.length < n) s = "0" + s; return s; }
    return d(+m[1], 4) + "-" + d(+(m[2] || 1), 2) + "-" + d(+(m[3] || 1), 2);
  }
  // Tutan girdiler tarihten bağımsızdır (tarih yalnız kademeyi seçer) ⇒ parça metnine göre önbellek.
  var tutanOnbellek = typeof Map === "function" ? new Map() : null;
  function tutanlar(s) {
    if (tutanOnbellek && tutanOnbellek.has(s)) return tutanOnbellek.get(s);
    // işaret 1 = zorunlu dizisi geçti → tam ifade; 2 = yalnız "kalan" desenler sınanır.
    var aday = { im: isaret, l: [] }, i, j, g, rx, gi;
    if (dizinI.n) adayla(s.toLowerCase(), dizinI, aday);
    if (dizinD.n) adayla(s, dizinD, aday);
    for (i = 0; i < surekli.length; i++) if (!isaret[surekli[i]]) { isaret[surekli[i]] = 2; aday.l.push(surekli[i]); }
    aday.l.sort(function (a, b) { return a - b; });   // girdiler sırası korunur (eski filter ile aynı)
    var r = [];
    for (i = 0; i < aday.l.length; i++) {
      gi = aday.l[i];
      g = girdiler[gi];
      rx = isaret[gi] === 1 ? g.rx : g.rxKalan;
      isaret[gi] = 0;
      for (j = 0; j < rx.length; j++) if (rx[j].test(s)) { r.push(g); break; }
    }
    if (tutanOnbellek) tutanOnbellek.set(s, r);
    return r;
  }
  function eslesen(s, tarih) {
    var ozel = [], genel = [];
    tutanlar(s).forEach(function (g) {
      var kad = g.kademe;
      if (g.sonra && (tarih === null || tarih < g.sonra)) kad = g.once;
      // ESER KOŞULU (Wikisource, Emre 10 Kasım 2026): eser adı yoksa eserYok kademesi
      if (g.eserDesen && !g.eserDesen.test(s.replace(g.eserSil, " "))) kad = g.eserYok;
      (g.genel ? genel : ozel).push([g.kod, kad]);
    });
    return ozel.length ? ozel : genel;
  }
  function parcaSinifla(p, tarih) {
    var es = [], url = null;
    var m = slug.exec(p);
    if (m && !slugHaric[m[1]]) {
      es.push(["TDV", tdvKademe]);
      url = slugUrl.replace("{slug}", m[1]);
      if (m[2]) es = es.concat(eslesen(m[2], tarih));
    } else {
      es = eslesen(p, tarih);
    }
    if (!es.length) return { kademe: null, kodlar: [], karisik: false, url: url };
    var kad = {}, kod = {};
    es.forEach(function (x) { kod[x[0]] = true; kad[x[1]] = true; });
    var kodlar = Object.keys(kod).sort();
    if (kad.C && (kad.A || kad.B)) return { kademe: "C", kodlar: kodlar, karisik: true, url: url };
    var en = Object.keys(kad).sort(function (a, b) { return SIRA[a] - SIRA[b]; })[0];
    return { kademe: en, kodlar: kodlar, karisik: false, url: url };
  }
  function damgala(kaynak, t) {
    var k = metin(kaynak);
    if (k === null || !k.trim()) return { damga: "bos", alt: null, parcalar: [] };
    k = k.trim();
    var tarih = tarihIso(t);
    var parcalar = parcala(k).map(function (p) {
      var s = parcaSinifla(p, tarih); s.p = p; return s;
    });
    if (bulunamadi.test(k)) return { damga: "bulunamadi", alt: null, parcalar: parcalar };
    var kad = {};
    parcalar.forEach(function (x) { kad[x.kademe === null ? "null" : x.kademe] = true; });
    if (kad.A) return { damga: "guvenli", alt: null, parcalar: parcalar };
    if (kad.B) return { damga: "ikincil", alt: null, parcalar: parcalar };
    if (kad["null"] || kad.K) return { damga: "taninmayan", alt: null, parcalar: parcalar };
    if (kad.C) return { damga: "guvensiz", alt: "C", parcalar: parcalar };
    return { damga: "guvensiz", alt: "adsiz", parcalar: parcalar };
  }
  // Aynı madde nesnesi birçok yerden sorulur (liste, panel, odak) — sonuç nesneye bağlı önbellekte.
  var onbellek = typeof WeakMap === "function" ? new WeakMap() : null;
  function maddeDamga(m) {
    if (!m || typeof m !== "object") return damgala(null, null);
    if (onbellek && onbellek.has(m)) return onbellek.get(m);
    var r = damgala(m.kaynak, m.t);
    if (onbellek) onbellek.set(m, r);
    return r;
  }
  window.KaynakDamga = {
    damgala: damgala,
    maddeDamga: maddeDamga,
    gizli: function (m) { return maddeDamga(m).damga === "guvensiz"; },
    parcala: parcala,
    kodAd: (function () { var o = {}; T.kaynaklar.forEach(function (e) { o[e.kod] = e; }); return o; })(),
    surum: T.surum
  };
})();

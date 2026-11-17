/* ═══ KRONOATLAS — SERVİS İŞÇİSİ (P1 hızlandırma, 16 Kasım 2026) ══════════════
   NEDEN: GitHub Pages `Cache-Control: max-age=600` verir (değiştirilemez) ve site
   ilk açılışta ~11 MB, arka planda ~50 MB (devlet_parcalar/donem_parcalar) indirir.
   Tarayıcı önbelleği 10 dakikada bayatlar; ikinci ziyaret baştan indirir.
   Bu işçi sürümlü adresleri (`?v=…`) ÖMÜR BOYU önbellekler: ikinci ziyaret ağa
   ~hiç çıkmaz. Sürüm damgası (index.html `?v=rNN`) her yayında değişir ⇒ eski
   kopya ASLA yeni içerik yerine servis edilmez.
   KURAL: ① index.html (gezinme) ÖNCE AĞ, çevrimdışıysa kopya — yayın anında görünür.
          ② `?v=` taşıyan aynı-köken dosyalar + sürümlü CDN (unpkg, jsdelivr) ÖNCE ÖNBELLEK.
          ③ Öteki aynı-köken GET (manifest, ikon) önbellekten gelir, arkadan tazelenir.
          ④ Harita karoları ve başka kökenler: DOKUNULMAZ.
   Aynı yol için yeni `?v=` gelince eski sürüm silinir (önbellek şişmez).
   Hata olursa her yol AĞA düşer — işçi siteyi bozamaz. */
var SURUM_ADI = "kronoatlas-v1";
var CDN = ["unpkg.com", "cdn.jsdelivr.net"];

self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (adlar) {
      return Promise.all(adlar.filter(function (a) { return a !== SURUM_ADI; })
        .map(function (a) { return caches.delete(a); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function sil_eski(cache, url) {
  // Aynı yolun başka ?v= sürümlerini sil.
  return cache.keys().then(function (anahtarlar) {
    return Promise.all(anahtarlar.filter(function (k) {
      var u = new URL(k.url);
      return u.origin === url.origin && u.pathname === url.pathname && k.url !== url.href;
    }).map(function (k) { return cache.delete(k); }));
  });
}

function onceOnbellek(istek, url) {
  return caches.open(SURUM_ADI).then(function (cache) {
    return cache.match(istek).then(function (kayit) {
      if (kayit) return kayit;
      return fetch(istek).then(function (yanit) {
        if (yanit && yanit.ok && yanit.type !== "opaque") {
          var kopya = yanit.clone();
          cache.put(istek, kopya).then(function () { return sil_eski(cache, url); }).catch(function () { /* kota */ });
        }
        return yanit;
      });
    });
  });
}

function onceAg(istek) {
  return fetch(istek).then(function (yanit) {
    if (yanit && yanit.ok) {
      var kopya = yanit.clone();
      caches.open(SURUM_ADI).then(function (c) { return c.put(istek, kopya); }).catch(function () { /* kota */ });
    }
    return yanit;
  }).catch(function () {
    return caches.match(istek).then(function (k) { if (k) return k; throw new Error("çevrimdışı"); });
  });
}

function eskiyiVerYenile(istek) {
  return caches.open(SURUM_ADI).then(function (cache) {
    return cache.match(istek).then(function (kayit) {
      var ag = fetch(istek).then(function (yanit) {
        if (yanit && yanit.ok) cache.put(istek, yanit.clone()).catch(function () { /* kota */ });
        return yanit;
      }).catch(function () { return kayit; });
      return kayit || ag;
    });
  });
}

self.addEventListener("fetch", function (e) {
  var istek = e.request;
  if (istek.method !== "GET") return;
  var url;
  try { url = new URL(istek.url); } catch (x) { return; }
  var ayniKoken = url.origin === self.location.origin;
  var cdn = CDN.indexOf(url.hostname) >= 0;
  if (!ayniKoken && !cdn) return;                              // ④ karolar vb.
  if (istek.headers.has("range")) return;                      // kısmi istek: dokunma

  if (ayniKoken && istek.mode === "navigate") {                // ① index.html
    e.respondWith(onceAg(istek));
    return;
  }
  if (cdn || url.search.indexOf("v=") >= 0) {                  // ② sürümlü
    e.respondWith(onceOnbellek(istek, url).catch(function () { return fetch(istek); }));
    return;
  }
  if (ayniKoken && url.pathname.indexOf("sw.js") < 0) {        // ③ öteki
    e.respondWith(eskiyiVerYenile(istek).catch(function () { return fetch(istek); }));
  }
});

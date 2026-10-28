// rotus.js — HARİTA RÖTUŞU: kaydın anlamı ve uygulanışı. TEK UYGULAMA.
//
// Kavram Emre'nin (0084/H-0019): "koşunun hesapladığı fakat göze tuhaf görünen
// yapıların, eğer belge ile çürütülemez ise, ufak tefek düzenlemelerle göze ve
// mantığa uygun hale getirilmesi". Biçimi 6 Ekim 2026 kararları:
//   ① tek tür BAĞLANTI — kullanıcının haritada çizdiği poligon, AYNI sahibin iki
//     kopuk parçasını GÖRSEL olarak bağlar
//   ② A görünümüne de (ve B'ye) uygulanır — rötuş bir görünüm değil bir KAYITTIR
//   ③ kullanıcı teklif eder, Claude K1-K9 ile kontrol eder; aykırı değilse uygulanır
//   ④ K6-K8 UYARILARI kullanıcı onayıyla geçer (onay damgasıyla), AYKIRI geçemez
// Tasarım: denetim/P84-ROTUS-TASARIM-1006b.md (koordinatör onayı).
//
// 🔴 NİÇİN AYRI DOSYA VE NİÇİN JS — `arac/odak_cozum.js` dersi:
//    rötuşu tarayıcı uygular (motor tuzuna dokunmaz, koşu gerektirmez) ve
//    `arac/denetle.py` "Değişmez R" ile onu sorar. Kaydın anlamı (hangi kayıt
//    geçerli, hangi gün etkin, hangi kimlik nereye) İKİ YERDE yazılsaydı
//    ayrışırdı — odak çözümünde Python kopyası iki yerde "YANLIŞ TEMİZ" verdi.
//    ⇒ Bu dosya tarayıcıda `window.ROTUS_COZ` olur; `arac/rotus_coz.js` node'da
//      AYNI dosyayı koşturur. Kopya YOK.
//
// KİMLİKLER: `kime`/`kimden[].d` haritanın BOYA kimliğidir — `DEVLET_HARITA[].id`
//   (künye `harita:` anahtarı varsa o; ör. `sirp-despotlugu` → `sirbistan`), ya da
//   Osmanlı için "OSMANLI" (doğrudan, `osmanli` kaynağı) / "OSM-TABI" (tâbi,
//   `vassal` kaynağı). Aynı adlar `denetle.py` `_D8Govde`dekilerdir.
//
// GEOMETRİ: polygon-clipping (index.html zaten yüklüyor) DIŞARIDAN verilir.
//   Yoksa rötuş UYGULANMAZ ve sayaçta `kutuphane_yok` görünür — sessiz değil.
(function (kok) {
  "use strict";

  var ZORUNLU = ["id", "ad", "tur", "kime", "kimden", "f", "t", "geo",
                 "teklif", "kontrol", "kaynak"];
  var SORULAR = ["K1", "K2", "K3", "K4", "K5", "K6", "K7", "K8", "K9"];
  // Karar ④: yalnız bu üç sorunun UYARISI kullanıcı onayıyla geçebilir.
  var ONAYLA_GECER = { K6: 1, K7: 1, K8: 1 };
  var SONUCLAR = { gecti: 1, uyari: 1, aykiri: 1, veri: 1, olculemedi: 1 };
  var GUN = /^\d{4}-\d{2}-\d{2}$/;

  function bos(x) { return x === undefined || x === null || x === ""; }

  // Bir kaydın SORUNLARI — [{kod:"R1"|"R2", ne:"…"}]. Boş liste = geçerli.
  // R1 şema (alan var mı, biçim doğru mu) · R2 hüküm (yalnız onaylı kayıt).
  // Geometrik sorular (R3-R8) burada DEĞİL: gövde gerektirir, denetle.py sorar.
  function sorunlar(k) {
    var s = [];
    function r1(ne) { s.push({ kod: "R1", ne: ne }); }
    function r2(ne) { s.push({ kod: "R2", ne: ne }); }
    if (!k || typeof k !== "object") { r1("kayıt nesne değil"); return s; }
    ZORUNLU.forEach(function (a) { if (bos(k[a])) r1("alan yok: " + a); });
    if (!bos(k.tur) && k.tur !== "baglanti")
      r1("tur '" + k.tur + "' — tek tür 'baglanti' (karar ①)");
    if (!bos(k.f) && !GUN.test(k.f)) r1("f biçimi YYYY-AA-GG değil: " + k.f);
    if (!bos(k.t) && !GUN.test(k.t)) r1("t biçimi YYYY-AA-GG değil: " + k.t);
    if (GUN.test(k.f || "") && GUN.test(k.t || "") && !(k.f < k.t))
      r1("pencere boş ya da ters: " + k.f + " → " + k.t);
    if (!bos(k.kimden)) {
      if (!Array.isArray(k.kimden) || !k.kimden.length) r1("kimden boş dizi değil");
      else k.kimden.forEach(function (x, i) {
        if (!x || bos(x.d)) r1("kimden[" + i + "].d yok");
        else if (x.d === k.kime) r1("kimden[" + i + "] = kime (" + x.d + ")");
      });
    }
    if (!bos(k.geo)) {
      var g = k.geo, ok = Array.isArray(g) && g.length >= 4;
      if (ok) for (var i = 0; i < g.length; i++) {
        var p = g[i];
        if (!Array.isArray(p) || p.length < 2 || typeof p[0] !== "number" ||
            typeof p[1] !== "number" || p[0] < -180 || p[0] > 180 ||
            p[1] < -90 || p[1] > 90) { ok = false; break; }
      }
      if (!ok) r1("geo ≥4 [lon,lat] noktalı halka değil");
      else if (g[0][0] !== g[g.length - 1][0] || g[0][1] !== g[g.length - 1][1])
        r1("geo halkası kapalı değil (ilk nokta = son nokta olmalı)");
    }
    var te = k.teklif || {};
    if (!bos(k.teklif) && (bos(te.kim) || bos(te.h))) r1("teklif.kim / teklif.h yok");
    var ko = k.kontrol;
    if (!bos(ko)) {
      if (bos(ko.kim) || bos(ko.gun)) r1("kontrol.kim / kontrol.gun yok");
      var so = ko.sorular || {};
      var uyari = [];
      SORULAR.forEach(function (q) {
        var c = so[q];
        if (!c || bos(c.sonuc) || bos(c.olcum)) { r1("kontrol.sorular." + q + " {sonuc, olcum} yok"); return; }
        if (!SONUCLAR[c.sonuc]) { r1(q + " sonucu tanınmıyor: " + c.sonuc); return; }
        if (c.sonuc === "aykiri") r2(q + " AYKIRI — aykırılık onayla geçmez (karar ④)");
        else if (c.sonuc === "veri") r2(q + " VERİ İLE ÇÖZÜLÜR — rötuş değil veri düzeltmesi");
        else if (c.sonuc === "olculemedi") r2(q + " ÖLÇÜLEMEDİ — hüküm askıda, uygulanamaz");
        else if (c.sonuc === "uyari") {
          if (!ONAYLA_GECER[q]) r2(q + " UYARI ama yalnız K6-K8 uyarısı onayla geçer");
          else uyari.push(q);
        }
      });
      if (ko.hukum !== "uygun") r2("kontrol.hukum '" + ko.hukum + "' — data/rotus.js'te yalnız 'uygun' durur");
      if (uyari.length) {
        var on = ko.onay || {};
        var onaylanan = Array.isArray(on.uyarilar) ? on.uyarilar : [];
        if (bos(on.kim) || bos(on.gun)) r2("uyarı var (" + uyari.join(",") + ") ama kontrol.onay {kim, gun} yok");
        uyari.forEach(function (q) {
          if (onaylanan.indexOf(q) < 0) r2(q + " uyarısı kontrol.onay.uyarilar içinde değil");
        });
      }
    }
    return s;
  }

  // Liste düzeyi: her kaydın sorunları + mükerrer id.
  function denetle(liste) {
    var cik = [], gorulen = {};
    (Array.isArray(liste) ? liste : []).forEach(function (k, i) {
      var s = sorunlar(k);
      var id = k && k.id;
      if (!bos(id)) {
        if (gorulen[id]) s.push({ kod: "R1", ne: "mükerrer id: " + id });
        gorulen[id] = 1;
      }
      cik.push({ sira: i, id: bos(id) ? "#" + i : id, ad: k && k.ad, kime: k && k.kime,
                 kimden: (k && Array.isArray(k.kimden)) ? k.kimden.map(function (x) { return x && x.d; }) : [],
                 f: k && k.f, t: k && k.t, geo: k && k.geo, sorunlar: s });
    });
    return cik;
  }

  // `gun`de ETKİN ve GEÇERLİ kayıtlar. Geçersiz kayıt uygulanmaz (ama `denetle`
  // onu adıyla sayar — sessizce elenmez).
  function etkin(liste, gun) {
    return (Array.isArray(liste) ? liste : []).filter(function (k) {
      return k && k.f <= gun && gun < k.t && sorunlar(k).length === 0;
    });
  }

  function cokgen(k) { return [k.geo.map(function (p) { return [p[0], p[1]]; })]; }

  function mpKoord(geom) {
    if (!geom) return null;
    if (geom.type === "MultiPolygon") return geom.coordinates;
    if (geom.type === "Polygon") return [geom.coordinates];
    return null;
  }

  // Bir FeatureCollection'a `gun`ün etkin rötuşlarını uygular.
  //   kimlikOku(feature) → boya kimliği · pc = polygon-clipping
  // Döner: {fc, sayac}. Girdi nesnelerine DOKUNULMAZ (app.js gövde nesnelerini
  // önbellekte tutar; yerinde değiştirmek rötuşu bir sonraki güne sızdırırdı).
  function uygula(fc, gun, kimlikOku, pc, liste) {
    var sayac = { etkin: 0, birlesti: 0, kesildi: 0, kime_yok: 0, hata: 0, kutuphane_yok: 0 };
    var ek = etkin(liste, gun);
    sayac.etkin = ek.length;
    if (!ek.length || !fc || !fc.features) return { fc: fc, sayac: sayac };
    if (!pc || typeof pc.union !== "function") {
      sayac.kutuphane_yok = ek.length;
      return { fc: fc, sayac: sayac };
    }
    var fs = fc.features.slice();
    ek.forEach(function (k) {
      var P = cokgen(k), kimden = {}, buldu = false;
      k.kimden.forEach(function (x) { kimden[x.d] = 1; });
      for (var i = 0; i < fs.length; i++) {
        var ft = fs[i], kim = kimlikOku(ft), mp = mpKoord(ft && ft.geometry);
        if (!mp) continue;
        var yeni = null;
        try {
          if (kim === k.kime) { yeni = pc.union(mp, P); buldu = true; sayac.birlesti++; }
          else if (kimden[kim]) { yeni = pc.difference(mp, P); sayac.kesildi++; }
        } catch (e) {
          // polygon-clipping kıl payı kenarda ara sıra patlar (d_katman.js:752).
          // Gövde OLDUĞU GİBİ kalır, hata SAYILIR.
          sayac.hata++; yeni = null;
        }
        if (yeni) {
          fs[i] = { type: "Feature",
                    properties: Object.assign({}, ft.properties || {}, { rotus: k.id }),
                    geometry: { type: "MultiPolygon", coordinates: yeni } };
        }
      }
      if (!buldu) sayac.kime_yok++;
    });
    return { fc: { type: "FeatureCollection", features: fs }, sayac: sayac };
  }

  // Rötuş kontur katmanı için: `gun`ün etkin poligonları.
  function konturlar(liste, gun) {
    return etkin(liste, gun).map(function (k) {
      return { type: "Feature", properties: { id: k.id, ad: k.ad, kime: k.kime },
               geometry: { type: "Polygon", coordinates: cokgen(k) } };
    });
  }

  var API = { ZORUNLU: ZORUNLU, SORULAR: SORULAR, ONAYLA_GECER: ONAYLA_GECER,
              sorunlar: sorunlar, denetle: denetle, etkin: etkin,
              uygula: uygula, konturlar: konturlar };
  kok.ROTUS_COZ = API;
  if (typeof module !== "undefined" && module.exports) module.exports = API;
})(typeof window !== "undefined" ? window : globalThis);

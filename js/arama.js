// ============================================================================
// KRONOLOJİ ARAMASI — saf mantık, DOM YOK  (ARAMA-0930, Emre 30 Eylül 2026)
// ============================================================================
// Emre iki arama istedi:
//   ① BASİT   textbox'a birkaç kelime; hepsi maddede geçmeli (VE)
//   ② GELİŞMİŞ ayrı pencere: alan (başlık / metin / …) × operatör (içerir ·
//      başlar · biter …) × metin, satırlar arası VE/VEYA
//
// 🔴 NİÇİN AYRI DOSYA: `js/suzgec.js`in emsali. Karar mantığı `app.js`e
// yazılsaydı node'da sınanamazdı ve arayüzle birlikte bayatlardı
// (`CLAUDE.md §11`: "iki yerde duran kural bayatlar"). Buradaki her işlev
// DOM'suzdur; sınavı `denetim/ARAC-ARAMA-0930-SINAV.js` (node) koşturur.
//
// 🔴 NORMALLEŞTİRİCİ KOPYALANMAZ. Türkçede `"İ".toLowerCase()` iki kod
// noktası verir ve `casefold()` de çözmez (`CLAUDE.md §4`, `D215`); bu
// projenin TEK doğru normalleştiricisi `suzgec.js`teki `sgNorm`dur. Buraya
// ikinci bir kopya yazmak, iki normalleştiricinin sessizce ayrışması demekti
// — "İstanbul" birinde bulunur ötekinde bulunmazdı. Bulunamazsa bu dosya
// SUSMAZ, ATAR (aşağıda).
// ============================================================================
(function () {
  "use strict";

  var _norm = null;
  function norm(s) {
    if (!_norm) {
      if (typeof window !== "undefined" && window.SUZGEC && window.SUZGEC.sgNorm) {
        _norm = window.SUZGEC.sgNorm;
      } else if (typeof require !== "undefined") {
        try { _norm = require("./suzgec.js").sgNorm; } catch (e) { /* aşağıda atar */ }
      }
      if (!_norm) {
        throw new Error("ARAMA: sgNorm bulunamadı — js/suzgec.js ÖNCE yüklenmeli. "
                        + "Kopyası bilerek çıkarılmadı (D215: Türkçe kücültme tuzağı).");
      }
    }
    return _norm(s);
  }

  // ── ALANLAR — hangi metinde aranacak ───────────────────────────────────
  // 🔴 Şema `VERI-YAPISI.md`ten: `b` başlık (tek satır) · `d` detay paragrafı
  //    · `yer`/`kisiler` serbest metin · `gun` insan okunur tarih.
  // ⚠️ `ic_not_*` alanları BİLEREK DIŞARIDA: onlar editoryal iç nottur ve
  //    kullanıcıya GÖSTERİLMEZ (13 Eylül 2026 kararı). Gösterilmeyen bir
  //    metinde arama yapmak, bulunamayan bir sonucu "var" göstermektir —
  //    kullanıcı tıklar, aradığı kelimeyi ekranda BULAMAZ.
  var ALANLAR = [
    { id: "hepsi",   ad: "Hepsi" },
    { id: "b",       ad: "Başlık" },
    { id: "d",       ad: "Metin (detay)" },
    { id: "yer",     ad: "Yer" },
    { id: "kisiler", ad: "Kişiler" },
    { id: "gun",     ad: "Tarih yazısı" }
  ];

  function alanMetni(olay, alan) {
    if (!olay) return "";
    switch (alan) {
      case "b":       return String(olay.b || "");
      case "d":       return String(olay.d || "");
      case "yer":     return String(olay.yer || "");
      case "kisiler": return String(olay.kisiler || "");
      case "gun":     return String(olay.gun || olay.t || "");
      default:
        return [olay.b, olay.d, olay.yer, olay.kisiler, olay.gun, olay.t]
               .filter(Boolean).join(" \u0001 ");
    }
  }
  // \u0001 ayracı: "hepsi"de iki alanın UCU BİRLEŞMESİN. Yoksa başlığı
  // "…Budin" biten ve detayı "Kalesi…" başlayan bir maddede "budin kalesi"
  // ifadesi TUTARDI — hiçbir alanda öyle bir ifade geçmediği hâlde.

  // ── OPERATÖRLER ────────────────────────────────────────────────────────
  var OPERATORLER = [
    { id: "icerir",  ad: "içerir" },
    { id: "icermez", ad: "içermez" },
    { id: "baslar",  ad: "ile başlar" },
    { id: "biter",   ad: "ile biter" },
    { id: "esit",    ad: "tam eşit" },
    { id: "kelime",  ad: "tam kelime" }
  ];

  // Tam kelime: normalleştirilmiş metinde sınırları harf/rakam OLMAYAN eşleşme.
  // ⚠️ Türkçe ek kesme işaretiyle gelir ("Mohaç'ta") ve `sgNorm` kesmeyi SİLER
  //    ⇒ "mohacta" olur ve `kelime` TUTMAZ. Bu kasıtlı: "tam kelime" diyen
  //    kullanıcı tam kelime ister; ekli hâli isteyen `içerir`i kullanır.
  //    (Ölçülmemiş bir sezgiyle "ek de sayılsın" demek, `_sgGeciyor`un ek
  //     listesini burada İKİNCİ KEZ tanımlamak olurdu — o liste orada.)
  function kelimeGecer(metinN, cekirdek) {
    if (!cekirdek) return false;
    var i = -1;
    while ((i = metinN.indexOf(cekirdek, i + 1)) >= 0) {
      var oncekiOk = (i === 0) || !/[a-z0-9]/.test(metinN.charAt(i - 1));
      var j = i + cekirdek.length;
      var sonrakiOk = (j >= metinN.length) || !/[a-z0-9]/.test(metinN.charAt(j));
      if (oncekiOk && sonrakiOk) return true;
    }
    return false;
  }

  function olcutGecer(olay, olcut) {
    var aranan = norm(olcut && olcut.metin);
    if (!aranan) return true;               // boş ölçüt SÜZMEZ (hepsini geçirir)
    var metinN = norm(alanMetni(olay, olcut.alan));
    switch (olcut.op) {
      case "icermez": return metinN.indexOf(aranan) < 0;
      case "baslar":  return metinN.indexOf(aranan) === 0;
      case "biter":   return metinN.length >= aranan.length &&
                             metinN.lastIndexOf(aranan) === metinN.length - aranan.length;
      case "esit":    return metinN === aranan;
      case "kelime":  return kelimeGecer(metinN, aranan);
      default:        return metinN.indexOf(aranan) >= 0;
    }
  }

  // ── ① BASİT ARAMA ──────────────────────────────────────────────────────
  // "mohaç macar" → iki terim, İKİSİ DE geçmeli (Emre: "iki üç metnin
  // hepsinin maddelerde aranması"). Tırnak içi TEK terim sayılır:
  //     mohaç "kanunî sultan" → ["mohac", "kanuni sultan"]
  // 🔴 Terimler `hepsi` alanında aranır ama HER TERİM AYRI AYRI: bir terim
  //    başlıkta, öteki detayda geçse de madde TUTAR. Kullanıcının "bu iki
  //    kelimenin geçtiği maddeyi bul" beklentisi budur.
  function basitAyristir(sorgu) {
    var ham = String(sorgu == null ? "" : sorgu);
    var terimler = [], m;
    var re = /"([^"]*)"|(\S+)/g;
    while ((m = re.exec(ham)) !== null) {
      var t = norm(m[1] !== undefined ? m[1] : m[2]);
      if (t) terimler.push(t);
    }
    return terimler;
  }

  function basitGecer(olay, terimler) {
    if (!terimler || !terimler.length) return true;
    var metinN = norm(alanMetni(olay, "hepsi"));
    for (var i = 0; i < terimler.length; i++) {
      if (metinN.indexOf(terimler[i]) < 0) return false;    // VE
    }
    return true;
  }

  // ── ② GELİŞMİŞ ARAMA ───────────────────────────────────────────────────
  // olcutler: [{alan, op, metin}, …] · baglac: "ve" | "veya"
  // 🔴 BOŞ ÖLÇÜT LİSTESİ = SÜZME YOK. "Hiçbir ölçüt hiçbir şeyi geçirmez"
  //    kuralı burada YANLIŞ olurdu: kullanıcı pencereyi açıp hiçbir şey
  //    yazmadan kapatınca kronoloji BOŞALIRDI. Boş küme her öngörüyü
  //    doğrular (`CLAUDE.md §11`) — burada da doğru cevap "süzme yok".
  function gelismisGecer(olay, olcutler, baglac) {
    var dolu = (olcutler || []).filter(function (o) {
      return o && String(o.metin || "").trim() !== "";
    });
    if (!dolu.length) return true;
    if (baglac === "veya") {
      for (var i = 0; i < dolu.length; i++) if (olcutGecer(olay, dolu[i])) return true;
      return false;
    }
    for (var j = 0; j < dolu.length; j++) if (!olcutGecer(olay, dolu[j])) return false;
    return true;
  }

  // ── Dışa açılan kapı ───────────────────────────────────────────────────
  // `say` yalnız sayar, hiçbir şeyi değiştirmez — arayüz rozeti bunu okur.
  function say(olaylar, gecer) {
    var n = 0;
    for (var i = 0; i < (olaylar || []).length; i++) if (gecer(olaylar[i])) n++;
    return n;
  }

  var _AR_DISA = {
    ALANLAR: ALANLAR, OPERATORLER: OPERATORLER,
    alanMetni: alanMetni, olcutGecer: olcutGecer, kelimeGecer: kelimeGecer,
    basitAyristir: basitAyristir, basitGecer: basitGecer,
    gelismisGecer: gelismisGecer, say: say
  };

  if (typeof window !== "undefined") window.ARAMA = _AR_DISA;
  if (typeof module !== "undefined" && module.exports) module.exports = _AR_DISA;
})();

// ═══════════════════════════════════════════════════════════════════════
// YAMA ÖNERİSİ — VASSAL: TEK RENK + ETİKET KATMANI   (Emre'nin paketi)
// ───────────────────────────────────────────────────────────────────────
// KURE GORUNUM · 1.MURAT hükmü (denetim/HUKUM-VASSAL-GORUNUM-0906.md)
// 6 Eylül 2026 · Ölçümler: OLCUM-VASSAL-GORUNUM-0906.md ·
//                          OLCUM-VASSAL-ETIKET-0906.md
//
// 🔴 UYGULANMADI. `js/app.js` Oturum 1'in (`§7`). Devri 1.MURAT yapar.
// 🔴 İKİSİ AYNI TURDA İNER: renk tek başına inerse tâbi ayrımı KALKAR ve
//    yerine bir şey konmaz (1.MURAT'ın hükmü). Etiket tek başına inerse
//    iki renk + etiket olur, fazlalık.
//
// 🔴🔴 VE BİR ÖN KOŞUL DAHA VAR — ETİKET YARISI BU KOŞUDA GÖRÜNMEZ.
//    Ölçüldü: `donemler.js`te `d.v` TEK GEOMETRİ (o dönemin bütün tâbi
//    dünyası), ve `tekVeri()` `properties:{}` SABİT KODLU. Yani `statu:`
//    `yerlesimler.js`e inse bile haritaya ULAŞMAZ; `d.v`nin `d.h` gibi
//    LİSTE biçimine geçmesi gerekir ve o bir MOTOR işidir
//    (`uret_petek.py`, koşu 6 boyunca donuk).
//    ⇒ Aşağıdaki etiket kodu BİÇİME DAYANIKLI yazıldı: yeni biçim
//      geldiğinde çalışır, gelmediğinde HİÇBİR ŞEY YAPMAZ. Bugün inebilir.
// ═══════════════════════════════════════════════════════════════════════

// ── ORTAK SABİT — iki katman da bunu kullanır, ayrışamasın diye ────────
var OSMANLI_KIRMIZI = "#8e0b22";

// ═══ A) RENK — DÖRT YER (ölçüldü: BEŞ geçiş var, biri BİLEREK dışarıda)
//
//  188  yorum metni                → "bugünkü tâbi tonu" ifadesi güncellenmeli
// 1013  vassal-dolgu               → AŞAĞIDA
// 1031  himaye-dolgu YEDEĞİ        → AŞAĞIDA (gerekçesi yanında)
// 1385  LEJANT swatch              → AŞAĞIDA
// 4621  _yerlesimSerit (PANEL)     → 🔴 DEĞİŞTİRİLMEDİ, gerekçe aşağıda

// --- js/app.js:1012-1013
harita.addLayer({ id: "vassal-dolgu", type: "fill", source: "vassal",
  paint: { "fill-color": OSMANLI_KIRMIZI, "fill-opacity": 1 } });

// --- js/app.js:1037-1038  (aynı sabit; iki hex ayrışmasın)
harita.addLayer({ id: "osmanli-dolgu", type: "fill", source: "osmanli",
  paint: { "fill-color": OSMANLI_KIRMIZI, "fill-opacity": 1 } });

// --- js/app.js:1031  himaye-dolgu YEDEĞİ
// ⚠️ Bu yedek yalnız `renk` alanı BOŞ olduğunda devreye giriyor. Birleşme
//    sonrası `#b2384a` hiçbir katmanla eşleşmediği için yedek olarak
//    ANLAMINI YİTİRİR. `OSMANLI_KIRMIZI`ye çevrildi — ama himaye AYRI bir
//    siyasî durum, ve bu seçim sorgulanabilir. 1.MURAT'a bildirildi.
harita.addLayer({ id: "himaye-dolgu", type: "fill", source: "himaye",
  paint: { "fill-color": ["coalesce", ["get", "renk"], OSMANLI_KIRMIZI],
           "fill-opacity": 1 } });

// --- js/app.js:1384-1385  LEJANT
// ESKİ: iki ayrı swatch — renk birleşince ikincisi YALAN SÖYLER.
// (Aşağısı büyük bir dizgi ifadesinin ORTASI; bu dosyanın kendi başına
//  ayrıştırılabilmesi için yorumda — olduğu gibi kopyalanacak.)
/*
'<span><i style="background:' + OSMANLI_KIRMIZI + '"></i> Doğrudan idare ve bağlı topraklar</span>' +
'<span><i class="lej-tabi-pill">ad <b>(tâbi)</b></i> Bağlı toprak — adı ve statüsüyle</span>' +
*/

// 🔴 js/app.js:4621 `_yerlesimSerit` DEĞİŞTİRİLMEDİ — ve bu bir SEÇİM:
//    O harita değil, yerleşim panelindeki ZAMAN ŞERİDİ. Şeritte
//    doğrudan/tâbi ayrımını RENK taşıyor ve orada etiket YOK ⇒
//    birleştirilirse şeritte ayrım TAMAMEN kaybolur. Haritada ayrımı
//    etiket devralıyor; şeritte devralacak bir şey yok.

// ═══ B) ETİKET KATMANI — `statu:`ye karşı, BİÇİME DAYANIKLI ═══════════
//
// 🔵 (b) `statu` YOKSA `(tâbi)` yazılır — BOŞ BIRAKILMAZ.
//    Gerekçe: `v:` katmanının TANIMI zaten tâbiiyet ⇒ `(tâbi)` bir tahmin
//    değil, katmanın ANLAMI. Parantezsiz bir ad yabancı devlet
//    etiketinden ayırt edilemez — ve Emre'nin bütün isteği o karışıklığı
//    gidermek.
// 🔴 (c) OKUNURLUK: ölçüldü, tâbi gövdelerin ORTANCASI z2'de 16 px,
//    z4'te 63 px; etiket ~110-130 px. Opak bir kutu taşarsa altındaki
//    HARİTAYI KAPATIR (düz metin taşarsa yalnız yazı taşar).
//    ⇒ Pill YALNIZ kutuyu taşıyabilen gövdeye çizilir: `SIGMA_PAYI`.

var TABI_ETIKET = [];             // aktif pill işaretçileri
var SIGMA_PAYI = 0.85;            // pill, gövde kutusunun en çok %85'i olabilir

function tabiEtiketTemizle() {
  for (var i = 0; i < TABI_ETIKET.length; i++) TABI_ETIKET[i].remove();
  TABI_ETIKET = [];
}

// `d.v` iki biçimde gelebilir:
//   BUGÜN  geometri  { type:"MultiPolygon", coordinates:[...] }   → ad YOK
//   YARIN  liste     [{ g, ad, kid, statu }, ...]                 → ad VAR
// Aşağısı ikisini de kabul eder; bugünkü biçimde BOŞ liste döner ve
// hiçbir etiket çizilmez (sessiz değil — sayaç 0 der).
function tabiGovdeleri(dv) {
  if (!dv) return [];
  if (Array.isArray(dv)) {
    return dv.filter(function (b) { return b && b.g && b.g.coordinates && b.g.coordinates.length; })
             .map(function (b) {
               return { g: b.g, ad: b.ad || null,
                        statu: b.statu || "tâbi" };   // ← (b) kararı
             });
  }
  return [];      // bugünkü TEK GEOMETRİ biçimi: ad taşımıyor ⇒ etiket YOK
}

function tabiEtiketGuncelle(d) {
  tabiEtiketTemizle();
  var govdeler = tabiGovdeleri(d && d.v);
  var cizilen = 0, sigmadi = 0;
  for (var i = 0; i < govdeler.length; i++) {
    var b = govdeler[i];
    if (!b.ad) { continue; }                       // adsız gövdeye pill YOK
    var mp = b.g.type === "MultiPolygon" ? b.g.coordinates : [b.g.coordinates];
    // en BÜYÜK parçaya yaz — ölçüm: yalnız en büyük parça pill taşıyabiliyor
    var enIyi = null, enAlan = 0;
    for (var k = 0; k < mp.length; k++) {
      var halka = mp[k][0];
      if (!halka || halka.length < 4) continue;
      var a = halkaAlan(halka);
      if (a > enAlan) { enAlan = a; enIyi = halka; }
    }
    if (!enIyi) continue;

    // gövdenin EKRAN kutusu — pill sığmıyorsa ÇİZME (haritayı kapatmasın)
    var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (var q = 0; q < enIyi.length; q++) {
      var p = harita.project(enIyi[q]);
      if (p.x < x0) x0 = p.x; if (p.x > x1) x1 = p.x;
      if (p.y < y0) y0 = p.y; if (p.y > y1) y1 = p.y;
    }
    var metin = b.ad + " (" + b.statu + ")";
    var punto = 10;
    var gerekenG = metin.length * KARAKTER * punto + 16;   // +16: pill dolgusu
    var gerekenY = punto * 1.36 + 6;
    if (gerekenG > (x1 - x0) * SIGMA_PAYI || gerekenY > (y1 - y0) * SIGMA_PAYI) {
      sigmadi++; continue;
    }

    var el = document.createElement("div");
    el.className = "tabi-etiket";      // 🔴 `devlet-etiket` DEĞİL — halo farkı
    el.style.fontSize = punto.toFixed(1) + "px";
    el.textContent = metin;
    el.title = b.ad + " — bağlı toprak (" + b.statu + ")";
    TABI_ETIKET.push(new maplibregl.Marker({ element: el, anchor: "center" })
      .setLngLat(etiketNoktasi(enIyi)).addTo(harita));
    cizilen++;
  }
  // 🔴 SESSİZ BAŞARISIZLIK YASAK: 0 çizildiyse SEBEBİ görünsün.
  var rz = document.getElementById("kat-sayi-tabi");
  if (rz) {
    rz.textContent = "tâbi " + cizilen;
    rz.title = govdeler.length
      ? ("adlı gövde " + govdeler.length + " · çizilen " + cizilen
         + " · sığmadı " + sigmadi)
      : "d.v henüz TEK GEOMETRİ — adlı gövde yok, etiket çizilmiyor";
  }
  return { cizilen: cizilen, sigmadi: sigmadi, govde: govdeler.length };
}

// --- js/app.js:5057 civarına, `vasVeri` kurulduktan SONRA:
//     tabiEtiketGuncelle(d);
// --- ve kamera oynayınca yeniden yerleşsin (pill ekran kutusuna bağlı):
//     ["moveend","zoomend"].forEach(function(o){
//       harita.on(o, function(){ tabiEtiketGuncelle(donemler[aktifDonem]); }); });

// ═══ C) CSS — `css/style.css` (1.MURAT'ın listesinde SERBEST) ══════════
// 🔴 HALO ÇAKIŞMASI: `.devlet-etiket` bugün BEYAZ halo taşıyor
//    (text-shadow ×3, küre işinde ölçüldü). Beyaz yazıya beyaz halo
//    eklenirse yazı BULANIK BİR BEYAZ LEKEYE döner. Yeni sınıfta halo YOK
//    — zemin karşıtlığı zaten sağlıyor: beyaz üstü #8e0b22 = 8,6:1.
/*
.tabi-etiket {
  background: #8e0b22;
  color: #fff;
  text-shadow: none;              ← ŞART: devlet-etiket'in beyaz halosu MİRAS ALINMAMALI
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;           ← altındaki haritaya tıklanabilsin
}
.lej-tabi-pill {
  background: #8e0b22; color: #fff; font-style: normal;
  font-size: 10px; padding: 1px 5px; border-radius: 3px; width: auto;
}
*/

// ═══ İNDİKTEN SONRA KOŞULACAK SINAV ═══════════════════════════════════
// ① RENK — bir tâbi ve bir Osmanlı gövdesinin fill-color'ı EŞİT olmalı.
//    🟢 Bu yarı ZATEN SINANDI (aşağıya bak).
// ② 🔴 İÇ HAT HÂLÂ ÇİZİLMELİ (`osmanli-cizgi`, katman 16). Kaybolduysa
//    yanlışlıkla düşürülmüş demektir — bu yamanın bilinen sonucu, kusur değil.
// ③ LEJANT — iki swatch yerine bir swatch + bir pill örneği olmalı.
// ④ 🔴 ETİKET GEÇME YOLU: `d.v` BUGÜNKÜ biçimdeyken (tek geometri)
//    `tabiEtiketGuncelle` 0 çizmeli VE rozet SEBEBİNİ yazmalı
//    ("d.v henüz TEK GEOMETRİ"). Sessiz 0 KABUL EDİLMEZ.
// ⑤ 🔴 ETİKET ATEŞLEME: sahte bir liste (`d.v = [{g, ad:"Eflak
//    Voyvodalığı", statu:"vassal"}]`) enjekte edilip pill'in ÇİZİLDİĞİ
//    görülmeli. Gerçek veri gelene kadar dal ancak böyle koşulabilir.
// ⑥ 🔴 SIĞMA DALI: küçük bir gövdede (z2'de ortanca 16 px) pill
//    ÇİZİLMEMELİ ve `sigmadi` sayacı ARTMALI.
// ⑦ 🔴 HALO: `.tabi-etiket` computed `text-shadow` = "none" olmalı.
// ⑧ 🔴 TEMİZLİK: dönem değişince eski pill'ler KALMAMALI
//    (`tabiEtiketTemizle`). Küre işinde öğrenildi: bir özellik eklemek,
//    onu temizleyecek yeri de eklemektir.
//
// ── 🟢 ETİKET DALLARI ATEŞLENDİ (6 Eylül, inmeden, canlı sayfada) ─────
//    Fonksiyonlar sayfaya enjekte edildi, `js/app.js`e DOKUNULMADI.
//    ④ GEÇME   bugünkü TEK GEOMETRİ biçiminde: çizilen 0 · gövde 0,
//              ve rozet SEBEBİ yazıyor                              🟢
//    ⑤ ATEŞLEME sahte liste `[{g, ad:"Eflak Voyvodalığı",
//              statu:"vassal"}]` (z4, en büyük gövde): çizilen 1     🟢
//    ⑥ SIĞMA   aynı gövde z1,5'te: çizilen 0 · sigmadi 1            🟢
//    ⑦ HALO    `.tabi-etiket` computed text-shadow = "none"         🟢
//    ⑧ TEMİZLİK `tabiEtiketTemizle()` sonrası kalan pill: 0         🟢
//    ⚪ Görsel sonuç ÖLÇÜLMEDİ — ekran görüntüsü dört kez zaman aşımı.
//
// ── 🟢 RENK YARISI ZATEN SINANDI (6 Eylül, inmeden, canlı sayfada) ────
//    setPaintProperty ile geçici uygulandı, ölçüldü, GERİ ALINDI:
//      ① aynı dolgu   vassal #8e0b22 == osmanli #8e0b22            🟢
//      ② iç hat KALDI 21.156 nokta · 178'inde `osmanli-cizgi`      🟢 beklenen
//      ③ dış çerçeve  `imparatorluk-hale` 357 noktada              🟢
//      ④ geçme yolu   1300-01-01'de `vassal` kaynağı 0 gövde       🟢
//      geri alındı    fill-color yeniden #b2384a                   🟢
//
// ⚪ ÖLÇÜLMEDİ: pill'in GÖRSEL sonucu (ekran görüntüsü dört kez zaman
//    aşımına uğradı) · kaç dönemde en büyük parçanın pill'i taşıdığı
//    (üç tarih ölçüldü, 537 dönemin tamamı değil).

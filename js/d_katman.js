// ============================================================================
// D KATMANI — 1923'ten geriye sarılan sınırların KOORDİNATLA belirlenmiş hattı.
//
// 16 Eylül 2026 akşamı Emre A-D dört kademeyi A-F ALTI KADEMEYE genişletti
// (oturumlar/GORUNUM-ABCD-0916.md en üst bölüm, BAĞLAYICI):
//   A  sürtünmeli yürüyüş · B  A'nın dolgulu hâli · C  belgeli KABA sınır
//   D  FİİLÎ kesin sınır (koordinatı belli, hukuken geçersiz — işgal/ateşkes hattı)
//   E  HUKUKÎ kesin sınır (barış antlaşması/protokol)  — ESKİ "D" = BU
//   F  E + uluslararası tanınma (Milletler Cemiyeti/büyük devletler)
// İki görünüm: HUKUKÎ = F>E>C (D hiç gösterilmez) · FİİLÎ = D>F>E>C.
// Program: oturumlar/GERIYE-SARMA-0916.md, D-KATMAN satırı.
//
// GEÇİŞ DÖNEMİ: bölge oturumları henüz `sinif` alanını yazmadı (yalnız eski
// `kategori`: D|C|fiili|D-YOK var, hepsi node'da doğrulandı — 16 Eylül 19:40
// itibarıyla 5 dosya, 159 kayıt, `sinif` alanı SIFIR). `_dEtkinSinif` bu
// yüzden `kategori`den GERİ DÜŞÜYOR (eşleme aşağıda, GORUNUM-ABCD'nin kendi
// tablosu): D→E · fiili→D · C→C · D-YOK→YOK. Bir kayıt `sinif` yazınca o
// alan `kategori`nin ÖNÜNE geçer, kod değişmeden.
//
// D_SINIRLAR AİLESİ — oturumlar/GERIYE-SARMA-0916.md §1 Kadro:
//   window.D_SINIRLAR               data/d_sinirlar.js              (D1-TURKIYE)
//   window.D_SINIRLAR_KOMSU         data/d_sinirlar_komsu.js        (D2-KOMSU)
//   window.D_SINIRLAR_AVRUPA_BATI   data/d_sinirlar_avrupa_bati.js  (D3-AVRUPA-BATI)
//   window.D_SINIRLAR_AVRUPA_ORTA   data/d_sinirlar_avrupa_orta.js  (D3-AVRUPA-ORTA)
//   window.D_SINIRLAR_ORTADOGU      data/d_sinirlar_ortadogu.js     (D4-ORTADOGU)
//   window.D_SINIRLAR_AFRIKA        data/d_sinirlar_afrika.js       (D4-AFRIKA)
//   window.D_SINIRLAR_ASYA          data/d_sinirlar_asya.js         (D5-ASYA)
//   window.D_SINIRLAR_AMERIKA       data/d_sinirlar_amerika.js      (D5-AMERIKA)
//   window.D_SINIRLAR_OKYANUSYA     data/d_sinirlar_okyanusya.js    (D5-OKYANUSYA)
// Hepsi Array.isArray ile güvenli kontrol edilir; dosya yoksa sessizce atlanır.
//
// index.html/app.js'e DOKUNULMADI (CLAUDE.md §7 — o dosyalar ARAYÜZ'ün).
// İki entegrasyon noktası kendi içinde çözüldü (bkz. denetim/D-KATMAN-0916.md §2):
//   ① katman kurulumu — kendi `harita.on("load", ...)` dinleyicisi.
//   ② canlı güncelleme — app.js'in global `guncelle()`u monkey-patch ile sarılıyor.
// Görünüm anahtarı (HUKUKÎ/FİİLÎ) de kendi MapLibre `addControl`ıyla kendi
// ekliyor — app.js/index.html'e satır eklemek GEREKMEDİ.
// 🔴 BU SON CÜMLE 21 EYLÜL 2026'DA DEĞİŞTİ — DALGA-0074/H-0003 (UI-BUTON-0074).
// `addControl(..., "top-right")` haritanın sağ üst köşesini `#harita-ust-sag`
// ile PAYLAŞIYORDU ve ölçüldü (1440×900): kesişim 68×24 = 1632 px²,
// "D: Hukukî" düğmesinin %75'i örtülü, MERKEZİNDEN TIKLANAMIYOR
// (`elementFromPoint` → `#btn-panel`, z-index 9 > 2). Emre: "haritadan
// butonlar alanına kaldırılsın. zaten üstüste binmiş yapı var."
// ⇒ Anahtar artık `index.html`teki `#d-gorunum-grup` yuvasına kuruluyor.
// index.html'e eklenen TEK satır o boş `<div>`tür; `_dGorunum`,
// `_dAktifKayitlar`, `_dSinirGuncelle` ve düğme gövdesi AYNEN duruyor
// (D045: var olan mekanizma, ikinci bir anahtar açılmadı).
// index.html'e TEK gereken satır: bu dosyanın <script> etiketi, js/app.js'ten
// SONRA (+ data/d_sinirlar*.js dosyalarının kendi <script> etiketleri —
// henüz index.html'e hiçbiri bağlı değil, tahtadan istendi).
// ============================================================================
"use strict";

// ---- SINIF STİLİ / ÖNCELİK ------------------------------------------------
var D_SINIF_ONCELIK_HUKUKI = { F: 3, E: 2, C: 1 };            // D burada YOK
var D_SINIF_ONCELIK_FIILI = { D: 4, F: 3, E: 2, C: 1 };
var D_HAT_RENK = "#0a2f5c";
// 🆕 DALGA-0055 §A madde 2 (1.MURAT) — Osmanlı vasalının sınır çizgisi "açık
// kırmızı" olsun, iç dolgu DEĞİŞMEZ. Renk app.js'in KENDİ vasal-şerit rengiyle
// AYNI (`himaye-serit-ic`, app.js:1508: "line-color": "#d4707d") — yeni bir
// ton İCAT EDİLMEDİ, var olan görsel dille eşleşti. İç dolgu zaten bu dosyada
// HİÇ çizilmiyor (D-KATMAN yalnız çizgi çizer, §9 — GORUNUM-ABCD tasarımı),
// yani "iç dolgu değişmez" şartı otomatik sağlanıyor.
// 🆕 DALGA-0064 H-0007 (1.MURAT, 17 Eylül) — SABİT ÜÇLÜ LİSTE GENEL KURALA
// GENİŞLETİLDİ: "yerleşim `v:` statüsü vassal olan BÜTÜN devletler." Statik
// bir "vasal" bayrağı devletler.js'te yok (yalnız `tur:"prenslik"` gibi
// POLİTİK TÜR var, D188 "kümeyi bilmeden hüküm verme" uyarısı buradaydı) —
// ama tâbilik zaten `window.YERLESIMLER`de ZAMAN PENCERELİ olarak duruyor
// (`y.v[].kid` + `f`/`t`), C katmanının `sahipAnahtari`/`sahipIlgiliMi`
// fonksiyonlarının (js/suzgec.js) OKUDUĞU AYNI alan. Kendi ayrıştırıcımızı
// YAZMADIK (D023): `kid` alanı zaten devletler.js'in gerçek `id:`si, ek bir
// ad eşleme/normalleştirme GEREKMİYOR — `y.v[].k` (kid'siz serbest metin)
// kasten ATLANIYOR, çünkü o kayıtların zaten bir devletler.js kimliği yok,
// D_SINIRLAR'ın `taraflar[]`i İSE her zaman gerçek künye id'si taşıyor.
var D_VASAL_RENK = "#d4707d";
// GÜN başına DEĞİL, YERLEŞİM sayısı değişmedikçe BİR KEZ kurulur (3800+
// kayıt × her ekran güncellemesi yerine tek seferlik ön-hesap).
var _dVasalPencereOnbellek = null, _dVasalPencereSayisi = -1;
function _dVasalPencereIndeksi() {
  var Y = window.YERLESIMLER || [];
  if (_dVasalPencereOnbellek && _dVasalPencereSayisi === Y.length) return _dVasalPencereOnbellek;
  var ix = {};
  Y.forEach(function (y) {
    (y.v || []).forEach(function (p) {
      if (!p.kid) return;   // kid'siz kayıt — devletler.js kimliği yok, eşleşecek taraf id'si de yok
      (ix[p.kid] = ix[p.kid] || []).push(p);
    });
  });
  _dVasalPencereOnbellek = ix;
  _dVasalPencereSayisi = Y.length;
  return ix;
}
function _dVasalMi(tarafId, gun) {
  var pencereler = _dVasalPencereIndeksi()[tarafId];
  if (!pencereler) return false;
  for (var i = 0; i < pencereler.length; i++) {
    var p = pencereler[i], f = gunIdx(p.f);
    if (gun < f) continue;
    if (p.t != null && gun >= gunIdx(p.t)) continue;   // D061/D195: açık uç BİTİŞE kadar
    return true;
  }
  return false;
}
function _dCizgiRengi(kayit, gun) {
  var tf = kayit.taraflar || [];
  for (var i = 0; i < tf.length; i++) if (_dVasalMi(tf[i], gun)) return D_VASAL_RENK;
  return D_HAT_RENK;
}

// 🆕 YARIM-YARIM ÇİZGİ — Emre, 24 Eylül 2026: "çizginin yarısı bir ülkenin
// renginin bir tık koyu rengi, diğer yanı diğer ülkenin renginin bir tık koyu
// rengi olacak." Hat iki yarım şeritle çizilir (line-offset ∓, _dKatmaniKur);
// her yarım, o YANDAKİ devletin haritadaki dolgu renginin %25 koyusudur.
// Yan `sol_taraf` beyanından okunur (MapLibre: pozitif offset = hat yönünün
// SAĞI). Beyan gövdelerle ÇELİŞİRSE (hattın solundaki örnek noktalar çoğunlukla
// öbür devletin gövdesinde) renkler takas edilir; ölçülemezse beyana güvenilir.
// Taraf rengi bulunamazsa o yarım eski lacivert (D_HAT_RENK) kalır — uydurma yok.
var D_YARIM_KOYU = 0.25;
function _dTarafRengi(id, gun) {
  if (!id) return null;
  if (id === "osmanli") return "#8e0b22";
  if (_dVasalMi(id, gun)) return D_VASAL_RENK;           // Osmanlı tâbii — açık kırmızı dil
  var kunye = (window.DEVLETLER || []).find(function (x) { return x.id === id; });
  var hk = (kunye && kunye.harita) || id;
  // `harita:` anahtarı her zaman çizilen kimlik DEĞİL (macaristan-naiplik →
  // "macaristan" ama devletler2 gövdeyi künye id'siyle çiziyor — İsviçre-AT-HU
  // oturumu 1923-09-01'de ölçtü, M-5056) ⇒ önce harita anahtarı, sonra id.
  var d2 = (typeof devletler2 !== "undefined" ? devletler2 : []);
  var DR = (typeof _DEVLET_RENK !== "undefined") ? _DEVLET_RENK : {};
  var adaylar = hk === id ? [id] : [hk, id];
  // İkisi de devletler2'de AYRI renkle olabilir (1923-09-01 ölçüldü: macaristan
  // #20d880 · macaristan-naiplik #d23024) ⇒ önce O GÜN gövdesi çizilen aday.
  for (var k = 0; k < adaylar.length; k++) {
    var sk = d2.find(function (x) { return x.id === adaylar[k]; });
    if (sk && sk.renk && (sk.dnm || []).some(function (p) { return aktifAralik(p.fi, p.ti, gun); })) return sk.renk;
  }
  for (var i = 0; i < adaylar.length; i++) {
    var s = d2.find(function (x) { return x.id === adaylar[i]; });
    if (s && s.renk) return s.renk;
  }
  for (var j = 0; j < adaylar.length; j++) if (DR[adaylar[j]]) return DR[adaylar[j]];
  return null;
}
function _dKoyu(r) { return r ? (typeof koyuTon === "function" ? koyuTon(r, D_YARIM_KOYU) : r) : D_HAT_RENK; }
function _dNoktaPolide(x, y, poli) {       // poli: polygon-clipping MultiPolygon
  for (var p = 0; p < poli.length; p++) {
    var ic = false;
    for (var r = 0; r < poli[p].length; r++) {
      var h = poli[p][r];
      for (var i = 0, j = h.length - 1; i < h.length; j = i++) {
        if (((h[i][1] > y) !== (h[j][1] > y)) &&
            (x < (h[j][0] - h[i][0]) * (y - h[i][1]) / (h[j][1] - h[i][1]) + h[i][0])) ic = !ic;
      }
    }
    if (ic) return true;
  }
  return false;
}
// Yön ölçümü: hattın ~15 köşesinde 4 km sola/sağa örnek nokta; sol_taraf
// gövdesi solda mı sağda mı daha çok? Sonuç kayıt+gövde anahtarıyla önbellekte.
var _dYonOnbellek = {};
var _dGovdeGun = null, _dGovdeGunMap = {};
function _dGovdeGunluk(id, gun) {
  var dn = gun + "|" + (typeof aktifDonem === "undefined" ? "?" : aktifDonem);
  if (_dGovdeGun !== dn) { _dGovdeGun = dn; _dGovdeGunMap = {}; }
  if (!(id in _dGovdeGunMap)) _dGovdeGunMap[id] = _dTarafGovdesi(id, gun);
  return _dGovdeGunMap[id];
}
function _dYonTers(k, gun) {
  var tf = k.taraflar || [], solId = k.sol_taraf;
  var sagId = tf.filter(function (x) { return x !== solId; })[0];
  if (!solId || !sagId || typeof _dTarafGovdesi !== "function") return false;
  var gs = _dGovdeGunluk(solId, gun), gr = _dGovdeGunluk(sagId, gun);
  if (!gs || !gr) return false;
  var a = k.id + "|" + gs.anahtar + "|" + gr.anahtar;
  if (a in _dYonOnbellek) return _dYonOnbellek[a];
  var h = k.hat, adim = Math.max(1, Math.floor(h.length / 15)), dogru = 0, ters = 0;
  for (var i = 0; i + 1 < h.length; i += adim) {
    var x0 = h[i][0], y0 = h[i][1], x1 = h[i + 1][0], y1 = h[i + 1][1];
    var kx = Math.cos(y0 * Math.PI / 180), dx = (x1 - x0) * kx, dy = y1 - y0, L = Math.sqrt(dx * dx + dy * dy);
    if (!L) continue;
    var d = 4 / 111;                        // ~4 km (derece)
    var mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
    var lx = mx - dy / L * d / kx, ly = my + dx / L * d;   // sol normal
    var rx = mx + dy / L * d / kx, ry = my - dx / L * d;   // sağ normal
    if (_dNoktaPolide(lx, ly, gs.poli)) dogru++;
    if (_dNoktaPolide(rx, ry, gr.poli)) dogru++;
    if (_dNoktaPolide(lx, ly, gr.poli)) ters++;
    if (_dNoktaPolide(rx, ry, gs.poli)) ters++;
  }
  var sonuc = ters > dogru * 2 && ters >= 3;
  _dYonOnbellek[a] = sonuc;
  if (sonuc) console.warn("D ÇİZGİ: " + k.id + " sol_taraf beyanı gövdelerle ters (" + dogru + "/" + ters + ") — yarım renkler takas edildi");
  return sonuc;
}
function _dYarimRenkler(k, gun) {
  var tf = k.taraflar || [], solId = k.sol_taraf;
  if (!solId || tf.indexOf(solId) < 0) return { sol: D_HAT_RENK, sag: D_HAT_RENK };   // yan bilinmiyor
  var sagId = tf.filter(function (x) { return x !== solId; })[0];
  var sol = _dKoyu(_dTarafRengi(solId, gun)), sag = _dKoyu(_dTarafRengi(sagId, gun));
  var ters = false;
  try { ters = _dYonTers(k, gun); } catch (e) {}
  return ters ? { sol: sag, sag: sol } : { sol: sol, sag: sag };
}
var D_SINIF_STIL = {
  // `yarim` = iki renkli çizginin HER YARIMININ genişliği (px). Milimetrik
  // (F/E) DÜZ çizilir (Emre, 24 Eylül: belgeli koordinatlı hat = kesintisiz
  // iki renkli çizgi); kesik yalnız milimetrik OLMAYAN sınıflarda (D, C).
  F: { genislik: 4.4, yarim: 2.2, dash: null, opaklik: 1 },   // hukukî + tanınmış — en kalın, düz
  E: { genislik: 3.6, yarim: 1.8, dash: null, opaklik: 1 },   // hukukî — düz
  D: { genislik: 2.5, dash: [1, 2], opaklik: 0.75 },    // fiilî/de facto — sık kesik, soluk
  C: { genislik: 2.2, dash: [2, 2], opaklik: 0.85 }     // belge kaba — orta kesik
};
var D_SINIF_ETIKET = {
  F: "hukukî (uluslararası tanınmış)", E: "hukukî", D: "fiilî (de facto, hukuken geçersiz)", C: "belge kaba"
};

// kategori → sinif (GORUNUM-ABCD-0916.md en üst bölümün kendi eşleme tablosu).
// "D kanıtı varsa F" — F kanıtı D-KUNYE'nin tanınma tablosundan (henüz yok,
// denetim/TANINMA-1923-0916.json) gelecek; o gelene kadar eski kategori:"D"
// hep E'ye düşer (temkinli — F'yi kanıtsız iddia etmemek D107'nin kuralı).
function _dEtkinSinif(k) {
  if (k.sinif) return k.sinif;
  if (k.kategori === "D") return "E";
  if (k.kategori === "fiili") return "D";
  if (k.kategori === "C") return "C";
  return "YOK";   // "D-YOK" ya da tanınmayan/eksik kategori
}

function _dHazirMi() {
  return typeof harita !== "undefined" && harita && typeof harita.getSource === "function";
}

// ---- VERİ TOPLAMA ----------------------------------------------------------
var _D_AILELER = [
  "D_SINIRLAR", "D_SINIRLAR_KOMSU", "D_SINIRLAR_AVRUPA_BATI", "D_SINIRLAR_AVRUPA_ORTA",
  "D_SINIRLAR_ORTADOGU", "D_SINIRLAR_AFRIKA", "D_SINIRLAR_ASYA", "D_SINIRLAR_AMERIKA",
  "D_SINIRLAR_OKYANUSYA"
];
function _dKayitlariTopla() {
  var out = [];
  _D_AILELER.forEach(function (ad) {
    var dizi = window[ad];
    if (Array.isArray(dizi)) out = out.concat(dizi);
  });
  return out;
}
var _dIndeksOnbellek = null, _dIndeksSayisi = -1;
function _dKayitIndeksi() {
  var tum = _dKayitlariTopla();
  if (!_dIndeksOnbellek || _dIndeksSayisi !== tum.length) {
    _dIndeksOnbellek = {};
    tum.forEach(function (k) { if (k && k.id) _dIndeksOnbellek[k.id] = k; });
    _dIndeksSayisi = tum.length;
  }
  return _dIndeksOnbellek;
}

// ---- GÖRÜNÜM ANAHTARI -------------------------------------------------------
var _dGorunum = "hukuki";   // "hukuki" | "fiili"

// ============================================================================
// 🆕 MİLİMETRİK SINIR KURALLARI — Emre, 23 Eylül 2026 ("TK D tipi sınırların
// gösterimi"). Belgeye/antlaşmaya dayanan, koordinatla tartışmasız çizilmiş
// sınır = "milimetrik sınır" (şemada sinif E/F; fiilî görünümde D de).
//   ① anakronizm yok: hat yalnız kendi penceresinde; ardılı gelince silinir
//   ② yürürlük gününden ÖNCE çizilmez                 → _dAktifKayitlar (f ≤ gün < t)
//   ③ yürürlükten sonra A/B/C gösterimini EZER         → _dYaslaGuncelle (gövde düzeltmesi)
//   ④ iki devletin rengi hatta DAYANIR, öteye taşmaz   → _dYaslaGuncelle
//   ⑤ göster/gizle ayarı                               → _dGoster + "Çizgi" düğmesi
//   ⑥ hat üstüne gelince antlaşma+tarih toast'ı        → _dToast*
// ①'nin veri tarafı (ardıl kaydın `f`si = öncülün `t`si, aynı hatta iki kayıt
// aynı görünümde üst üste binmez) `denetim/ARAC-MILIMETRIK-0923.js` ile ölçülür.
// ============================================================================

// ⑤ Göster/gizle — tercih tarayıcıda saklanır (yoksa varsayılan: GÖSTER).
var _dGoster = true;
try { _dGoster = localStorage.getItem("dSinirGoster") !== "0"; } catch (e) {}

// 🆕 ⑤b İKİ RENK aç/kapa — Emre, 24 Eylül 2026: "sınır çizgisinin iki renkli
// yapısı ve ayarlardan aç kapa yapılabilmesi". KAPALIYKEN çizgi 21 Eylül'deki
// hâline BİREBİR döner: tek renk, `_dCizgiRengi` (lacivert; taraflardan biri o
// gün Osmanlı'ya tâbiyse açık kırmızı). İki yarım katman aynı rengi alınca yan
// yana tek çizgi olur — GENİŞLİK DEĞİŞMEZ (yarim × 2 = genislik), yani kapatmak
// eski görünümü taklit etmiyor, gerçekten geri veriyor.
// Ayrı anahtar: "Çizgi ✗" hattı tümden gizler, bu yalnız BOYAMA biçimini seçer;
// biri ötekini sıfırlamaz (D045 — var olan anahtara ikinci anlam yüklenmedi).
var _dIkiRenk = true;
try { _dIkiRenk = localStorage.getItem("dSinirIkiRenk") !== "0"; } catch (e) {}

// 🆕 C = KABA BELGE ⇒ TEK RENK, SİYAH — Emre, 24 Eylül 2026: "D tipi sınırlarda
// çizgimiz iki renkli oluyor. C tipi sınırlarda tek renk olsun ve bu renkte
// siyah olsun."
// Kuralın kendi mantığı var ve şemanın eski kararıyla ÖRTÜŞÜYOR: C'nin
// koordinatı kaba olduğu için renk ona DAYANDIRILMIYOR (_D_YASLA_SINIF_*
// yalnız F/E alır). Ülke rengi taşımayan bir çizginin ülke renginde olması
// okuru yanıltırdı — siyah, "bu hat kabadır, altındaki boya buna oturmaz"
// diyen tek renktir.
// 🔴 Vasal istisnası da düşer: C hattında taraflardan biri o gün Osmanlı'ya
// tâbi olsa bile çizgi siyahtır (kural sınıfa bakar, tarafa değil).
var D_KABA_RENK = "#000000";

// ③④ YASLAMA — PİLOT: Türkiye ailesi (data/d_sinirlar.js, D1-TURKIYE) +
// komşu ailesi (data/d_sinirlar_komsu.js — Emre, 24 Eylül 2026: "Bulgaristan'ın
// 1923 sınırları D hatlarına yaslanmamış"; BG–YU/GR hatları bu ailede).
// + Avrupa aileleri (Emre, 24 Eylül 2026: "İsviçre, Avusturya, Macaristan 1923
// sınırları D hatlarına yaslanmıyor"; CH–FR/DE/IT/AT ve IT–AT batıda, AT–DE/CS/
// HU/YU ve HU–CS/YU/RO ortada).
// Öteki aileler genişletilince bu listeye eklenir; kod aileden bağımsızdır.
var _D_YASLA_AILELER = ["D_SINIRLAR", "D_SINIRLAR_KOMSU", "D_SINIRLAR_AVRUPA_BATI", "D_SINIRLAR_AVRUPA_ORTA"];
// Kaba belge (C) hatla gövde KESİLMEZ — C'ye koordinat kesinliği atfetmek
// olur (D-RENK-0073-YURURLUK §5.3). Fiilî hat yalnız fiilî görünümde keser.
var _D_YASLA_SINIF_HUKUKI = { F: 1, E: 1 };
var _D_YASLA_SINIF_FIILI = { D: 1, F: 1, E: 1 };
// Şerit genişliği: hattın her iki yanında bu kadar km içindeki "yanlış taraf"
// boyası düzeltilir. D-RENK-0073 §4 sapmayı medyan 8–17 km, en çok 40 km
// ölçmüştü; ama TR–Suriye hattında (1923-09-01) 55–100 km'ye inen TBMM ve ~50
// km'ye çıkan Suriye parçası ÖLÇÜLDÜ ⇒ 100 km. Emniyet iki korumadadır, genişlikte
// değil: kısa hat yaslanmaz, yönü gövdelerle doğrulanmayan hat yaslanmaz.
var _D_YASLA_KM = 100;
// Bundan kısa hat yaslanmaz: dik şeridi hattın boyunu kat kat aşar, yönü
// ölçülemez. Vaka: d1923-tr-gr-2 (Sisam boğazı, 1,9 km) şeridi Kuşadası
// kıyısına uzanıyordu.
var _D_YASLA_EN_KISA_KM = 10;
// Tek yan taşmasında iki gövdenin de kendi şeridindeki en az alanı (km²).
var _D_YASLA_EN_AZ_KM2 = 50;

// ---- AKTİF KAYITLAR (pencere) ------------------------------------------------
// 🔴 ÖNCELİK (F>E>C / D>F>E>C) BURADA VERİ BASTIRMASI OLARAK UYGULANMIYOR —
// denendi, GERÇEK VERİYLE ÇÜRÜDÜ (tarayıcıda sınandı, D-KATMAN-0916.md §10):
// ilk tasarım "aynı taraflar (sırasız) + aynı gün aktif ⇒ tek grup, yalnız en
// yüksek sınıf kalır" kuralını kullanıyordu. D1'in `d1923-tr-sy-dogu` (sinif E)
// ve `d1923-tr-sy-bati` (sinif C) kayıtları AYNI taraflar'ı taşıyor ama
// sınırın İKİ AYRI COĞRAFİ PARÇASI (doğu/Hatay-batı) — taraflar-eşleşmesi
// "aynı segmentin alternatifi" ile "aynı devlet çiftinin başka bir parçası"nı
// AYIRT EDEMİYOR, ve grup kuralı `tr-sy-bati`yi HER İKİ görünümde de SESSİZCE
// SİLİYORDU (D089: veri modelinin ifade edemediği bir ilişkiyi ifade edebildiği
// bir ilişkiye çevirmek yaklaşıklama değil BAŞKA BİR İDDİADIR). Şema "aynı
// fiziksel segment" için ortak bir anahtar taşımadığı sürece BASTIRMA YOK —
// öncelik yalnız ÇİZİM SIRASINDA kullanılıyor (bkz. _dKatmaniKur: layer'lar
// C→E→F→D sırayla eklenir, üstteki geometrik çakışmada üstte görünür).
// Açık soru (D-KUNYE/1.MURAT'a): gerçek bir hukukî/fiilî SAPMASI olduğunda
// (aynı segment, iki sınıf) bunu ayırt edecek bir alan (örn. `parca_grubu`
// ya da `sapma_of:"<id>"`) şemaya eklenmeli mi?
function _dAktifKayitlar(gun) {
  var izinliSiniflar = (_dGorunum === "fiili")
    ? { D: 1, F: 1, E: 1, C: 1 }
    : { F: 1, E: 1, C: 1 };            // hukukî görünüm D'yi hiç göstermez
  var sonuc = [];
  _dKayitlariTopla().forEach(function (k) {
    if (!k || !Array.isArray(k.hat) || k.hat.length < 2 || k.f == null) return;
    var sinif = _dEtkinSinif(k);
    if (!izinliSiniflar[sinif]) return;
    var f = gunIdx(k.f);
    if (gun < f) return;
    if (k.t != null && gun >= gunIdx(k.t)) return;   // D061/D195: açık uç BİTİŞE kadar
    sonuc.push({ kayit: k, sinif: sinif });
  });
  return sonuc;
}

// ---- POPUP METNİ ------------------------------------------------------------
function _dDayanakSatirlari(kayit) {
  var d = kayit.dayanak;
  if (!Array.isArray(d) || !d.length) return "";
  var GOSTER = 2;
  var satirlar = d.slice(0, GOSTER).map(function (c) {
    var baslik = c.ad || c.kaynak || "";
    var tarih = c.tarih ? " (" + c.tarih + ")" : "";
    var alinti = c.alinti ? ": “" + c.alinti + "”" : "";
    return ekEsc(baslik + tarih) + (alinti ? ekEsc(alinti) : "");
  });
  if (d.length > GOSTER) satirlar.push("+" + (d.length - GOSTER) + " kaynak daha");
  return satirlar.join("<br>");
}
// 🆕 21 Eylül 2026 — CIZGI-ANLAM-0072, DALGA-0074 H-0006. Emre: *"buradaki mavi
// çizgiler sınır çizgileri sanırım ama bu çizgiler o sene için geçerli ise…"*
// Yani kullanıcı çizgiye TIKLIYOR ve hâlâ ne olduğunu anlamıyor. ÖLÇÜLDÜ
// (denetim/ARAC-CIZGI-ANLAM-0074-ANLAM.js, 349 çizilebilir kayıt):
//   · başlık `kayit.id` idi — şemada `ad`/`baslik` alanı **%0,0**, yani balonun
//     başlığı HER ZAMAN "d1923-nl-de" gibi bir iç slug'dı.
//   · `dayanak` doluluk **%100** ve ilkinde `ad` **%100** ⇒ insan okunur bir
//     başlık ZATEN vardı, yalnız üçüncü satıra gömülüydü.
//   · pencere (`f`/`t`) HİÇ gösterilmiyordu — oysa Emre'nin sorusu tam buydu.
// 🔴 VE `taraflar[]` ADI BAŞLIĞA BASILAMAZ (bu ölçüm sırasında çıktı, öngörüde
//    yoktu): `taraflar` atlasın HARİTA KİMLİĞİdir, o günün devleti değil —
//    taraf atıflarının **%25,8'i 300 yıldan geniş** bir künyeye düşüyor (en
//    geniş 962 yıl). 1827'de `hollanda` künyesi "Hollanda Cumhuriyeti" (1581–
//    1923) der ama o tarihte Birleşik Hollanda Krallığı vardır; `almanya`
//    "Kutsal Roma / Almanya" der ama sınırı imzalayan Prusya ve Hannover'dir.
//    Antlaşmanın KENDİ adı ("Meppen Sınır Antlaşması (Hollanda–Hannover)") hem
//    insan okunur hem DÖNEME DOĞRU — o yüzden başlık ondan geliyor.
// 🔴 `t` ASLA çıplak "bitiş" diye yazılmaz: çizilebilir 349 kaydın **196'sı
//    (%56,2)** tam `1923-10-29`da biter ve bu tarihî bir bitiş değil, geriye
//    sarmanın TASARIM GÜNÜdür (D-RENK-0073 ölçtü, M-4862). Çıplak yazmak
//    "bu sınır 1923'te bitti" diye bir iddia UYDURURDU.
var _D_PENCERE_SONU = "1923-10-29";
function _dGunYazi(s) {
  // app.js'in `idxYazi`si "29 Mayıs 1453" verir; YALNIZ tam gün varsa kullan —
  // "1824-07" gibi ay hassasiyetli bir değeri "1 Temmuz" diye yazmak CLAUDE.md
  // §4'ün yasakladığı UYDURMA KESİNLİKTİR. Ham değer o durumda olduğu gibi kalır.
  if (!s) return "";
  if (typeof idxYazi !== "function" || typeof gunIdx !== "function") return String(s);
  return (/^\d{3,4}-\d{2}-\d{2}$/.test(String(s))) ? idxYazi(gunIdx(s)) : String(s);
}
function _dPencereSatiri(kayit) {
  var bas = _dGunYazi(kayit.f);
  if (kayit.t == null) return "Geçerli: " + ekEsc(bas) + "’ten itibaren (açık uç)";
  if (kayit.t === _D_PENCERE_SONU) {
    return "Geçerli: " + ekEsc(bas) + "’ten itibaren — bu hat 1923 sınırından " +
      "geriye sarıldı; <b>29 Ekim 1923 atlasın pencere sonudur, sınırın sonu değildir.</b>";
  }
  return "Geçerli: " + ekEsc(bas) + " – " + ekEsc(_dGunYazi(kayit.t));
}
// Başlık hangi dayanaktan gelmeli? `dayanak[0]` HER ZAMAN doğru değil: kaydın
// `f`si bazen LİSTEDEKİ İKİNCİ/ÜÇÜNCÜ belgenin günüdür. Emre'nin görselindeki
// kayıt tam bu: `d1923-nl-de` `f:"1824-07-02"` (Meppen) ama `dayanak[0]`
// Aachen 1816. ÖLÇÜLDÜ (349 çizilebilir kayıt): 48'inde tek dayanak var (soru
// yok) · 131'inde `tarih`i `f` ile BİREBİR eşleşen bir dayanak var, bunların
// **36'sında o dayanak ilk sırada DEĞİL** · 170'inde hiçbiri eşleşmiyor.
// ⇒ Eşleşen varsa O, yoksa ilki. Kural tek yönlü güvenli: 170 kayıtta bugünkü
// davranış AYNEN korunuyor, 36 kayıtta başlık `f`yi doğrulayan belgeye döner.
function _dBaslikDayanagi(kayit) {
  var d = kayit.dayanak || [];
  if (!d.length) return {};
  for (var i = 0; i < d.length; i++)
    if (d[i].tarih && String(d[i].tarih).slice(0, 10) === kayit.f) return d[i];
  return d[0];
}
function _dPopupHtml(kayit, sinif) {
  var d0 = _dBaslikDayanagi(kayit);
  var baslik = d0.ad || d0.kaynak || kayit.id || "D sınırı";
  var ust = "<b>" + ekEsc(baslik) + "</b>";
  var alt = [D_SINIF_ETIKET[sinif] || sinif || ""];
  if (kayit.uzunluk_km != null) alt.push(kayit.uzunluk_km + " km");
  if (kayit.kesinlik_km != null) alt.push("kesinlik ±" + kayit.kesinlik_km + " km");
  var dayanakHtml = _dDayanakSatirlari(kayit);
  return ust +
    "<br><small>" + alt.filter(Boolean).join(" · ") + "</small>" +
    "<br><small>" + _dPencereSatiri(kayit) + "</small>" +
    (dayanakHtml ? "<br><small>Dayanak: " + dayanakHtml + "</small>" : "") +
    // Emre'nin asıl cümlesi ("renkler bu sınırlara birebir oturmuyor") burada
    // cevaplanıyor: hat ile dolgu AYRI İKİ İDDİADIR, ve ayrışma bir kusur değil
    // bir ÖLÇÜdür. Sapmayı D-RENK-0073 sayıya döktü (medyan 11 km, en çok 40 km).
    (_dYaslandiMi(kayit.id)
      ? "<br><small>✓ Milimetrik sınır: iki tarafın rengi bu hatta <b>yaslandı</b> " +
        "(hattın " + _D_YASLA_KM + " km yakınındaki taşma örtüldü).</small>"
      : "<br><small>⚠️ Bu hat <b>antlaşmanın</b> çizgisidir; altındaki renk " +
        "<b>yerleşim peteğinden</b> gelir. İkisi ayrışabilir — ayrıştığı yerde " +
        "henüz o hattı tutacak yerleşim noktası yoktur.</small>") +
    "<br><small style=\"opacity:.55\">" + ekEsc(kayit.id || "") + "</small>";
}

// ---- GEOMETRİ / GÜNCELLEME ---------------------------------------------------
var _dAktifImza = null;
function _dSinirGuncelle(gun) {
  if (!_dHazirMi() || !harita.getSource("d-sinir-hat")) return;
  var aktif = _dAktifKayitlar(gun).map(function (a) {
    // C (kaba belge) SİYAH ve TEK renktir — iki renk anahtarı onu etkilemez.
    var kaba = (a.sinif === "C");
    var tek = kaba ? D_KABA_RENK : _dCizgiRengi(a.kayit, gun);
    // ⑤b iki renk KAPALIYSA her iki yarım da tek rengi alır — eski görünüm.
    var y = (_dIkiRenk && !kaba) ? _dYarimRenkler(a.kayit, gun) : { sol: tek, sag: tek };
    return { kayit: a.kayit, sinif: a.sinif, renk: tek, sol: y.sol, sag: y.sag };
  });
  // renk imzaya DAHİL — vasal renk artık gün-bağımlı (H-0007), aynı id:sinif
  // kümesi iki farklı günde farklı renk gerektirebilir (bir taraf tam o
  // aralıkta vassal'a döner/çıkar); yalnız id:sinif imzası bu geçişi KAÇIRIRDI.
  var imza = _dGorunum + "|" + aktif.map(function (a) { return a.kayit.id + ":" + a.sinif + ":" + a.sol + ":" + a.sag; }).join("+");
  if (imza === _dAktifImza) return;
  _dAktifImza = imza;
  var feat = aktif.map(function (a) {
    return {
      type: "Feature",
      properties: { kayit_id: a.kayit.id, sinif: a.sinif, renk: a.renk, renk_sol: a.sol, renk_sag: a.sag },
      geometry: { type: "LineString", coordinates: a.kayit.hat }
    };
  });
  harita.getSource("d-sinir-hat").setData({ type: "FeatureCollection", features: feat });
}

// ---- ③④ YASLAMA: rengi milimetrik hatta dayandırma ---------------------------
// Dolgu motorun peteğinden gelir ve hattı BİLMEZ (motor `hat`ı okumaz). Bu
// yüzden düzeltme tarayıcıda, GÖVDENİN KENDİSİNDE yapılır: hattın solundaki
// şeritte kalan SAĞ taraf gövdesi sağdan çıkarılıp sola eklenir, simetriği de.
// ÜST DOLGU (yama katmanı) DENENDİ VE BIRAKILDI: yumuşak kipte dolgular saydam
// (yabancı 0,44), üste konan yama altındaki yanlış rengi örtemedi, koyu leke
// olarak göründü (23 Eylül, Ceylanpınar). Gövde düzeltmesi her kipte doğrudur
// ve `devlet-cizgi` kenarını da hatta oturtur.
// Yalnız iki tarafın kendi gövdeleri değişir — üçüncü bir devletin, denizin,
// boşluğun rengine DOKUNULMAZ (hat bilmediğimiz bir şey söylemez). Taraf
// gövdesi o gün bulunamazsa o kayıt atlanır ve sayılır (uydurma renk YOK).
var _dYaslaSayac = { kayit: 0, yama: 0, atlanan: [] };

function _dYaslaSiniflari() {
  return (_dGorunum === "fiili") ? _D_YASLA_SINIF_FIILI : _D_YASLA_SINIF_HUKUKI;
}
function _dYaslaAdaylari(gun) {
  var izin = _dYaslaSiniflari();
  var ONC = { D: 4, F: 3, E: 2 };
  // Aynı HAT (birebir aynı koordinat dizisi) iki kayıtta aynı gün aktifse —
  // ör. d1920-tbmm-bg (E) ile d1920-yunan-isgal-bg (D) — görünümün önceliği
  // kazanır; ötekinin yaması yapılmaz (iki yama aynı şeridi zıt boyardı).
  // Taraf-çifti eşleşmesiyle BASTIRMA yapılmaz (bkz. _dAktifKayitlar notu).
  var grup = {};
  _D_YASLA_AILELER.forEach(function (ad) {
    var dizi = window[ad];
    if (!Array.isArray(dizi)) return;
    dizi.forEach(function (k) {
      if (!k || !Array.isArray(k.hat) || k.hat.length < 2 || k.f == null) return;
      var s = _dEtkinSinif(k);
      if (!izin[s]) return;
      if (gun < gunIdx(k.f)) return;
      if (k.t != null && gun >= gunIdx(k.t)) return;
      var anahtar = JSON.stringify(k.hat);
      var eski = grup[anahtar];
      if (!eski || ONC[s] > ONC[eski.sinif]) grup[anahtar] = { kayit: k, sinif: s };
    });
  });
  return Object.keys(grup).map(function (a) { return grup[a]; });
}

// Taraf kimliği → o gün haritada boyanan gövde {renk, poli, anahtar}.
// Osmanlı `donemler.js`ten (osmanli-dolgu sabiti), yabancılar `devletler2`den;
// künyenin `harita:` anahtarı varsa o kullanılır (bulgaristan-kralligi →
// bulgaristan) — app.js'in kendi eşlemesiyle aynı.
function _dTarafGovdesi(tarafId, gun) {
  if (tarafId === "osmanli") {
    if (typeof aktifDonem === "undefined" || aktifDonem < 0 || typeof donemler === "undefined") return null;
    var d = donemler[aktifDonem];
    if (!d) return null;
    var fc = d.o ? tekVeri(d.o) : petekVerisi(d);
    var poli = [];
    (fc.features || []).forEach(function (f) { _dPoliEkle(poli, f.geometry); });
    return poli.length ? { renk: "#8e0b22", poli: poli, anahtar: "osmanli:" + aktifDonem, hk: "osmanli" } : null;
  }
  var kunye = (window.DEVLETLER || []).find(function (x) { return x.id === tarafId; });
  var hk = (kunye && kunye.harita) || tarafId;
  var d2 = (typeof devletler2 !== "undefined" ? devletler2 : []);
  var s = d2.find(function (x) { return x.id === hk; });
  // `harita:` anahtarı o gün çizilen kimlik değilse künye id'sinin kendisi
  // denenir — ölçüldü 1923-09-01: macaristan-naiplik → `harita:"macaristan"`,
  // romanya-kralligi → `"romanya"`, ama harita gövdeyi künye id'siyle çiziyor
  // (13 HU/RO hattı "gövdesi o gün yok" diye atlanıyordu).
  if (!s || !s.dnm.some(function (p) { return aktifAralik(p.fi, p.ti, gun); })) {
    var s2 = d2.find(function (x) { return x.id === tarafId; });
    if (s2) { s = s2; hk = tarafId; }
  }
  if (!s) return null;
  for (var i = 0; i < s.dnm.length; i++) {
    var p = s.dnm[i];
    if (aktifAralik(p.fi, p.ti, gun)) {
      var pl = [];
      _dPoliEkle(pl, p.ft && p.ft.geometry);
      return pl.length ? { renk: s.renk, poli: pl, anahtar: hk + ":" + i, hk: hk } : null;
    }
  }
  return null;
}
function _dPoliEkle(dizi, g) {
  if (!g) return;
  if (g.type === "Polygon") dizi.push(g.coordinates);
  else if (g.type === "MultiPolygon") g.coordinates.forEach(function (c) { dizi.push(c); });
}

// Hattın sol/sağ şeritleri (MultiPolygon koordinatı). Her doğru parçası için
// iki yanına w genişliğinde dikdörtgen (+ dışbükey köşede kama üçgeni);
// sol = ∪sol − ∪sağ, sağ = ∪sağ − ∪sol. Keskin kıvrımda iki yanın şekilleri
// kesişir — o bölge o genişlikte İKİ şeritten de çıkarılır (yanlış boyanmaz).
// Bu yüzden şerit birkaç genişlikte kurulup birleştirilir: dar şerit kıvrımın
// dibini yalnız YAKIN parçalara bakarak doğru ayırır, geniş şerit uzağı kapsar.
// Ölçüldü (1923-09-01, 10 hat, 881 örnek nokta, hattan 5 km): tek genişlikle
// doğru renk %75 → %94, kalan 53 hatanın 53'ü kıvrım kamasındaydı.
// Şeridin hatta değen kenarı hattın KENDİ koordinatlarıdır ⇒ yama hatta oturur.
var _D_SERIT_KM = [1, 3, 8, 20, 45, _D_YASLA_KM];
function _dHatKm(h) {
  var t = 0;
  for (var i = 0; i + 1 < h.length; i++) {
    var kx = 111.32 * Math.cos(h[i][1] * Math.PI / 180);
    t += Math.sqrt(Math.pow((h[i + 1][0] - h[i][0]) * kx, 2) + Math.pow((h[i + 1][1] - h[i][1]) * 110.57, 2));
  }
  return t;
}
// MultiPolygon koordinatının yaklaşık alanı (km², yerel eşdikdörtgen izdüşüm)
function _dAlanKm2(mp) {
  var A = 0;
  (mp || []).forEach(function (poly) {
    poly.forEach(function (ring, r) {
      var a = 0;
      for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        var k = 111.32 * Math.cos(ring[i][1] * Math.PI / 180);
        a += ring[j][0] * k * ring[i][1] * 110.57 - ring[i][0] * k * ring[j][1] * 110.57;
      }
      A += (r === 0 ? 1 : -1) * Math.abs(a / 2);
    });
  });
  return A;
}
var _dSeritOnbellek = {};
function _dSeritTek(h, w) {
  var sol = [], sag = [], onceki = null;
  for (var i = 0; i + 1 < h.length; i++) {
    var p = h[i], q = h[i + 1];
    var kx = 111.32 * Math.cos((p[1] + q[1]) / 2 * Math.PI / 180), ky = 110.57;
    var ux = (q[0] - p[0]) * kx, uy = (q[1] - p[1]) * ky, L = Math.sqrt(ux * ux + uy * uy);
    if (L < 1e-6) continue;
    // ilerleme yönünün SOLU: (-uy, ux) — km uzayında, sonra dereceye
    var ox = (-uy / L) * w / kx, oy = (ux / L) * w / ky;
    sol.push([[p, q, [q[0] + ox, q[1] + oy], [p[0] + ox, p[1] + oy], p]]);
    sag.push([[p, [p[0] - ox, p[1] - oy], [q[0] - ox, q[1] - oy], q, p]]);
    if (onceki) {
      // p köşesinde dönüş: sağa dönüyorsa (çapraz < 0) SOL yan dışbükeydir ve
      // iki dikdörtgen arasında kama boşluğu kalır — üçgenle kapatılır.
      var capraz = onceki.ux * uy - onceki.uy * ux;
      if (capraz < 0) sol.push([[p, [p[0] + onceki.ox, p[1] + onceki.oy], [p[0] + ox, p[1] + oy], p]]);
      else if (capraz > 0) sag.push([[p, [p[0] - ox, p[1] - oy], [p[0] - onceki.ox, p[1] - onceki.oy], p]]);
    }
    onceki = { ux: ux, uy: uy, ox: ox, oy: oy };
  }
  var S = _dPc("union", sol), R = _dPc("union", sag);
  var S0 = _dPc("difference", [S, R]), R0 = _dPc("difference", [R, S]), K = _dPc("union", [S, R]);
  if (w <= _D_HAT_KESIK_KM) return { sol: S0, sag: R0, kapsam: K };
  // KIVRIM KAMASI (Emre, 24 Eylül — Meriç 1923: Enez deltası ve Karaağaç
  // dirseğinde iki gövde üst üste kalıyordu). S−R / R−S keskin kıvrımda iki
  // yanın dikdörtgenleri kesiştiği için o bölgeyi KARARSIZ bırakır. Oysa bant
  // hattın kendisiyle kesilince her parça hattı geçmeden ulaşılabilen tek bir
  // yandadır ⇒ parça, değdiği dar kesin yan (S0/R0) hangisiyse ona verilir.
  // İki yana da belirgin değen parça (hat ucunu dolanan bant) eski kurala düşer.
  // Kesme çizgisi iki uçtan da bant genişliğinin ötesine uzatılır: yoksa bant
  // hattın ucunu dolanır, iki yan TEK parça kalır ve hiçbir şey ayrılmaz.
  function uzat(p, q) {
    var kx = 111.32 * Math.cos(q[1] * Math.PI / 180), ky = 110.57;
    var ux = (q[0] - p[0]) * kx, uy = (q[1] - p[1]) * ky, L = Math.sqrt(ux * ux + uy * uy);
    var m = 1.5 * w + 1;
    return L < 1e-6 ? null : [q[0] + ux / L * m / kx, q[1] + uy / L * m / ky];
  }
  var bas = uzat(h[1], h[0]), son = uzat(h[h.length - 2], h[h.length - 1]);
  var hk = (bas ? [bas] : []).concat(h, son ? [son] : []);
  try {
    var kesik = _dPc("difference", [K, _dSeritTek(hk, _D_HAT_KESIK_KM).kapsam]);
    var yS = [], yR = [];
    kesik.forEach(function (poli) {
      var aS = _dAlanKm2(_dPc("intersection", [[poli], S0]));
      var aR = _dAlanKm2(_dPc("intersection", [[poli], R0]));
      if (aS > 4 * aR) yS.push([poli]);
      else if (aR > 4 * aS) yR.push([poli]);
      else {
        var ps = _dPc("intersection", [[poli], S0]), pr = _dPc("intersection", [[poli], R0]);
        if (ps.length) yS.push(ps);
        if (pr.length) yR.push(pr);
      }
    });
    return { sol: yS.length ? _dPc("union", yS) : [], sag: yR.length ? _dPc("union", yR) : [], kapsam: K };
  } catch (e) {
    return { sol: S0, sag: R0, kapsam: K };
  }
}
// Hattı bandı ikiye kesen ince şerit (km) — ~10 m; kendisi kararsız kalır.
var _D_HAT_KESIK_KM = 0.01;
// polygon-clipping 0.15.7 kıl payı çakışan kenarlarda ara sıra "Unable to pop()
// SweepEvent" fırlatıyor (ölçüldü: aynı girdiyle bir koşuda geçip ötekinde
// düştü). Önce olduğu gibi, düşerse 1e-6 dereceye (~10 cm) yuvarlanmış girdiyle
// bir kez daha denenir; o da düşerse hata yukarı fırlar (çağıran atlar ve sayar).
// Yuvarlanmış girdiyle de düştüğü ölçüldü (d1923-tr-sscb-ermenistan, Arpaçay
// köşesi [43.6525, 40.5294]) ⇒ üçüncü deneme 1e-5 derece (~1 m).
function _dYuvarlaK(k) {
  var y = function (g) { return Array.isArray(g[0]) ? g.map(y) : [Math.round(g[0] * k) / k, Math.round(g[1] * k) / k]; };
  return y;
}
var _dYuvarla = _dYuvarlaK(1e6), _dYuvarla5 = _dYuvarlaK(1e5);
function _dPc(islem, girdiler) {
  var pc = window.polygonClipping;
  try { return pc[islem].apply(null, girdiler); }
  catch (e) {
    try { return pc[islem].apply(null, girdiler.map(_dYuvarla)); }
    catch (e2) { return pc[islem].apply(null, girdiler.map(_dYuvarla5)); }
  }
}
// EN DAR ŞERİT KARAR VERİR — ve bunu O GÜN AKTİF BÜTÜN HATLAR BİRLİKTE yapar:
// genişlikler dardan genişe gezilir; bir noktayı ilk kapsayan (en dar) şerit
// hangi hattın hangi yanıysa o karar verir, sonraki (daha geniş) şeritler o
// noktaya dokunamaz. O genişlikte iki yana birden düşen nokta (kıvrım kaması)
// da "kapsandı" sayılır ve karar verilmemiş kalır (yanlış boyanmaz).
// Neden hat hat değil de küme: tek hattın 100 km'lik uç şeridi KOMŞU hattın
// alanına giriyordu — TR–Bulgaristan'ın Bulgar yakası şeridi Meriç'in Türk
// yakasındaki TBMM gövdesini Bulgaristan'a veriyordu. Ölçüldü (1923-09-01,
// hattan 5 km): yamanın yanlışa çevirdiği 33 noktanın 29'u bu komşu çakışması.
// Neden genişlikler düz birleştirilmiyor: geniş dikdörtgen/kamalar kıvrık hatta
// karşı yakaya taşıp yakındaki doğru kararı bozuyordu (aynı ölçüm).
var _dKumeOnbellek = {};
function _dSeritTekOnbellekli(kayit, w) {
  var a = kayit.id + "@" + w;
  if (!_dSeritOnbellek[a]) _dSeritOnbellek[a] = _dSeritTek(_dSadelestir(kayit.hat, w * _D_SADE_ORAN), w);
  return _dSeritOnbellek[a];
}
// Şerit, hattın w/10 km toleransla sadeleştirilmiş hâlinden kurulur. Hatta
// w/10'dan yakın bölge her zaman bir önceki (dar) genişliğin kapsamındadır
// (_D_SERIT_KM'de ardışık oran ≤ 2,5 < 10) ve _dSeritlerKume onu zaten düşer ⇒
// sadeleştirme hattın yakınında renk kararını değiştirmez, uzakta ≤ w/10 kaydırır.
// Ölçüldü (1923-09-01, 4 aile, 82 hat): şerit kurulumu 64,5 sn sürüyordu
// (d1923-de-at@100, 358 köşe: 3,7 sn); dar hat 1 km'de 0,1 km toleransla kalır.
var _D_SADE_ORAN = 0.1;
function _dSadelestir(h, tolKm) {              // Douglas–Peucker, yerel km izdüşümü
  if (h.length < 3 || !(tolKm > 0)) return h;
  var kx = 111.32 * Math.cos(h[0][1] * Math.PI / 180), ky = 110.57;
  var p = h.map(function (c) { return [c[0] * kx, c[1] * ky]; });
  var tut = new Array(h.length); tut[0] = tut[h.length - 1] = true;
  var yigin = [[0, h.length - 1]];
  while (yigin.length) {
    var ab = yigin.pop(), a = ab[0], b = ab[1], enUzak = -1, enI = -1;
    var dx = p[b][0] - p[a][0], dy = p[b][1] - p[a][1], L2 = dx * dx + dy * dy;
    for (var i = a + 1; i < b; i++) {
      var t = L2 ? ((p[i][0] - p[a][0]) * dx + (p[i][1] - p[a][1]) * dy) / L2 : 0;
      t = Math.max(0, Math.min(1, t));
      var ex = p[a][0] + t * dx - p[i][0], ey = p[a][1] + t * dy - p[i][1], d = ex * ex + ey * ey;
      if (d > enUzak) { enUzak = d; enI = i; }
    }
    if (enI >= 0 && enUzak > tolKm * tolKm) { tut[enI] = true; yigin.push([a, enI], [enI, b]); }
  }
  return h.filter(function (c, i) { return tut[i]; });
}
// MultiPolygon koordinatının kutusu [minx, miny, maxx, maxy] ve iki kutunun değmesi.
function _dKutu(mp) {
  var k = [Infinity, Infinity, -Infinity, -Infinity];
  mp.forEach(function (p) { p[0].forEach(function (c) {
    if (c[0] < k[0]) k[0] = c[0]; if (c[1] < k[1]) k[1] = c[1];
    if (c[0] > k[2]) k[2] = c[0]; if (c[1] > k[3]) k[3] = c[1];
  }); });
  return k;
}
function _dKutuDeger(a, b) { return a[0] <= b[2] && b[0] <= a[2] && a[1] <= b[3] && b[1] <= a[3]; }
function _dSeritlerKume(kayitlar) {
  var anahtar = kayitlar.map(function (k) { return k.id; }).sort().join(",");
  if (_dKumeOnbellek[anahtar]) return _dKumeOnbellek[anahtar];
  var sonuc = {}, kapsanan = [], dusen = [];
  kayitlar.forEach(function (k) { sonuc[k.id] = { sol: [], sag: [] }; });
  _D_SERIT_KM.forEach(function (w) {
    var buKapsam = [];
    kayitlar.forEach(function (k) {
      try {
        var s = _dSeritTekOnbellekli(k, w);
        // Önceki genişliklerin kapsamından YALNIZ kutusu değenler düşülür —
        // değmeyen parça farkı değiştirmez. Eskiden bütün hatların tek
        // birleşimi kullanılıyordu: Avrupa aileleri eklenince (85 aday)
        // 1923-09-01 yaslaması 275 sn sürdü (ölçüldü, 24 Eylül 2026).
        var kt = _dKutu(s.kapsam);
        var engel = kapsanan.filter(function (c) { return _dKutuDeger(c.kt, kt); })
                            .map(function (c) { return c.g; });
        var E = engel.length > 1 ? _dPc("union", engel) : engel[0];
        var yS = E ? _dPc("difference", [s.sol, E]) : s.sol;
        var yR = E ? _dPc("difference", [s.sag, E]) : s.sag;
        if (yS.length) sonuc[k.id].sol.push(yS);
        if (yR.length) sonuc[k.id].sag.push(yR);
        if (s.kapsam.length) buKapsam.push({ kt: kt, g: s.kapsam });
      } catch (e) { dusen.push(k.id + "@" + w); }
    });
    // Aynı genişlikte iki hattın ikisi de aynı noktayı isteyebilir (iki hattan
    // eşit uzaklık) — o nokta ikisine de verilir, gövde birleştirmesi
    // (_dYaslaGuncelle §2) kaynak başına ilk alanı tutar.
    kapsanan = kapsanan.concat(buKapsam);
  });
  if (dusen.length) console.warn("D YASLAMA: şerit kurulamadı (atlandı): " + dusen.join(", "));
  kayitlar.forEach(function (k) {
    var r = sonuc[k.id];
    r.sol = r.sol.length ? _dPc("union", r.sol) : [];
    r.sag = r.sag.length ? _dPc("union", r.sag) : [];
  });
  sonuc.anahtar = anahtar;
  _dKumeOnbellek[anahtar] = sonuc;
  return sonuc;
}

var _dYamaOnbellek = {};    // kayit.id|solGövde|sağGövde → [{g, kimden, kime, renk}]
var _dYaslaImza = null;
var _dYaslananlar = {};     // o an gövdesi hatta yaslanmış kayıt id'leri
var _dOsmDegisti = false;   // osmanli kaynağı bizim elimizden mi geçti?
var _dDevletDegisti = false; // devlet kaynağı bizim elimizden mi geçti?
var _dYaslaSon = {};        // son düzeltilmiş gövdeler {hk: MultiPolygon koordinatı}

// Yabancı gövdeleri app.js'in devletGuncelle()'siyle AYNI kuralla kurar
// (aktifAralik, ilk eşleşen dönem, properties {renk,id}); `yeni[hk]` verilmişse
// o devletin geometrisi onunla değiştirilir.
function _dDevletKaynaginiYaz(gun, yeni) {
  var fs = [];
  devletler2.forEach(function (s) {
    for (var i = 0; i < s.dnm.length; i++) {
      var p = s.dnm[i];
      if (aktifAralik(p.fi, p.ti, gun)) {
        if (yeni[s.id]) {
          fs.push({ type: "Feature", properties: { renk: s.renk, id: s.id },
                    geometry: { type: "MultiPolygon", coordinates: yeni[s.id] } });
        } else fs.push(p.ft);
        break;
      }
    }
  });
  harita.getSource("devlet").setData({ type: "FeatureCollection", features: fs });
}
function _dOsmanliKaynaginiYaz(geo) {
  var d = donemler[aktifDonem];
  var veri = geo ? { type: "FeatureCollection", features: [{ type: "Feature", properties: {},
                     geometry: { type: "MultiPolygon", coordinates: geo } }] }
                 : (d.o ? tekVeri(d.o) : petekVerisi(d));
  harita.getSource("osmanli").setData(veri);
}

function _dYaslaGuncelle(gun) {
  if (!_dHazirMi() || !harita.getSource("devlet")) return;
  if (!window.polygonClipping) {
    if (_dYaslaImza !== "kutuphane-yok") {
      console.warn("D YASLAMA: polygonClipping yüklenmedi — renk hatta dayandırılamıyor (index.html <script>).");
      _dYaslaImza = "kutuphane-yok";
    }
    return;
  }
  var adaylar = _dYaslaAdaylari(gun);
  var isler = [], atlanan = [];
  adaylar.forEach(function (a) {
    var k = a.kayit, tf = k.taraflar || [];
    var solId = k.sol_taraf;
    var sagId = tf.filter(function (x) { return x !== solId; })[0];
    if (!solId || !sagId || tf.indexOf(solId) < 0) { atlanan.push(k.id + ": sol_taraf belirsiz"); return; }
    var gs = _dTarafGovdesi(solId, gun), gr = _dTarafGovdesi(sagId, gun);
    if (!gs) atlanan.push(k.id + ": " + solId + " gövdesi o gün yok");
    if (!gr) atlanan.push(k.id + ": " + sagId + " gövdesi o gün yok");
    if (!gs || !gr) return;
    if (_dHatKm(k.hat) < _D_YASLA_EN_KISA_KM) { atlanan.push(k.id + ": hat " + _D_YASLA_EN_KISA_KM + " km'den kısa"); return; }
    isler.push({ kayit: k, gs: gs, gr: gr, anahtar: k.id + "|" + gs.anahtar + "|" + gr.anahtar });
  });
  // Şeritler o gün yaslanacak BÜTÜN hatlar birlikte kurulur; kümenin kendisi
  // de yama anahtarına girer (aynı hat, farklı komşu kümesinde farklı şerit).
  var kumeAnahtar = isler.map(function (x) { return x.kayit.id; }).sort().join(",");
  isler.forEach(function (x) { x.anahtar += "|" + kumeAnahtar; });
  // app.js kaynağı yeniden yazdıysa (devletImza / aktifDonem değişti) bizim
  // düzeltmemiz silinmiştir — imzaya onlar da girer.
  var imza = isler.map(function (x) { return x.anahtar; }).join("+") +
    "|dv:" + (typeof devletImza === "undefined" ? "?" : devletImza) + "|dn:" + aktifDonem;
  if (imza === _dYaslaImza) return;
  _dYaslaImza = imza;
  var sonucAnahtari = isler.map(function (x) { return x.anahtar; }).join("+");
  var hazir = _dGovdeOnbellek[sonucAnahtari];
  // `atlanan` güne bağlıdır (gövdesi o gün olmayan taraf) — önbellekten
  // dönen sonucun kendi listesi değil, BUGÜNÜN listesi yazılır; yamaya bağlı
  // atlamalar (kısa hat hariç, o yukarıda sayıldı) sonucun içinden eklenir.
  if (hazir) { _dYaslaUygula(gun, hazir, atlanan.concat(hazir.yamaAtlanan)); return; }
  // 1) kayıt başına ham yamalar (gövde+hat+küme değişmedikçe önbellekten)
  var yamalar = [], govde = {}, yaslanan = {}, kume = null, yamaAtlanan = [];
  isler.forEach(function (x) {
    govde[x.gs.hk] = x.gs; govde[x.gr.hk] = x.gr;
    var ys = _dYamaOnbellek[x.anahtar];
    if (!ys) {
      ys = [];
      try {
        if (!kume) kume = _dSeritlerKume(isler.map(function (y) { return y.kayit; }));
        var s = kume[x.kayit.id];
        // sağ tarafın sol şeride taşan gövdesi → sol tarafa geçer
        var a = _dPc("intersection", [s.sol, x.gr.poli]);
        // sol tarafın sağ şeride taşan gövdesi → sağ tarafa geçer
        var b = _dPc("intersection", [s.sag, x.gs.poli]);
        // YÖN DOĞRULAMASI: `sol_taraf` beyanı ters ya da hat yanlış yöne
        // çizilmişse yaslama gövdeleri TAKAS ederdi. Her iki tarafın gövdesi
        // kendi yanında, öbür yandakinden BÜYÜK olmalı; değilse dokunulmaz.
        var solDogru = _dAlanKm2(_dPc("intersection", [s.sol, x.gs.poli])), solYanlis = _dAlanKm2(b);
        var sagDogru = _dAlanKm2(_dPc("intersection", [s.sag, x.gr.poli])), sagYanlis = _dAlanKm2(a);
        // Tek yan taşması ters beyan DEĞİLDİR (Emre, 24 Eylül — AT–HU/FR–CH
        // 1923): Burgenland'de Avusturya noktası yok ⇒ Macar gövdesi hattın öbür
        // yanında kendi yanındakinden BÜYÜK; eski kural tam da düzeltilmesi
        // gereken yerde yaslamayı kapatıyordu. Ters beyan = İKİ gövde de yanlış
        // yanda. Tek yan bozuksa: öbür yan kendi yanında ≥3× doğrulanmalı ve iki
        // gövde de kendi şeridinde ≥50 km² bulunmalı (gövdesi olmayan taraf —
        // Tirol'de Avusturya, Melilla'da Fas — yaslanmaz).
        var tekYanTasmasi = !(solYanlis > solDogru && sagYanlis > sagDogru) &&
          (solDogru >= 3 * solYanlis || sagDogru >= 3 * sagYanlis) &&
          solDogru >= _D_YASLA_EN_AZ_KM2 && sagDogru >= _D_YASLA_EN_AZ_KM2;
        if (!(solDogru > solYanlis && sagDogru > sagYanlis) && !tekYanTasmasi) {
          throw { atla: "yön doğrulanamadı (sol gövde doğru/yanlış yanda " + Math.round(solDogru) + "/" +
                        Math.round(solYanlis) + " km², sağ " + Math.round(sagDogru) + "/" + Math.round(sagYanlis) + ")" };
        }
        if (a.length) ys.push({ g: a, kimden: x.gr.hk, kime: x.gs.hk });
        if (b.length) ys.push({ g: b, kimden: x.gs.hk, kime: x.gr.hk });
      } catch (e) {
        if (e && e.atla) ys = { atla: e.atla };
        else { console.warn("D YASLAMA: " + x.kayit.id + " kesilemedi:", e); ys = { atla: "kesim hatası" }; }
      }
      _dYamaOnbellek[x.anahtar] = ys;
    }
    if (ys.atla) { atlanan.push(x.kayit.id + ": " + ys.atla); yamaAtlanan.push(x.kayit.id + ": " + ys.atla); return; }
    yaslanan[x.kayit.id] = 1;
    yamalar = yamalar.concat(ys);
  });
  // 2) aynı kaynaktan iki hat aynı parçayı iki komşuya vermesin (üçlü nokta
  //    yakını): kaynak başına sıralı — önce alınan, sonrakinden düşülür.
  var alinan = {}, kazanilan = {};
  yamalar.forEach(function (y) {
    var g = y.g;
    try { if (alinan[y.kimden]) g = _dPc("difference", [g, alinan[y.kimden]]); } catch (e) { return; }
    if (!g.length) return;
    alinan[y.kimden] = alinan[y.kimden] ? _dPc("union", [alinan[y.kimden], g]) : g;
    (kazanilan[y.kime] = kazanilan[y.kime] || []).push(g);
  });
  // 3) etkilenen gövdeler: (gövde − verilen) ∪ alınan
  var yeni = {}, n = 0;
  Object.keys(govde).forEach(function (hk) {
    if (!alinan[hk] && !kazanilan[hk]) return;
    try {
      var g = govde[hk].poli;
      if (alinan[hk]) g = _dPc("difference", [g, alinan[hk]]);
      if (kazanilan[hk]) g = _dPc("union", [g].concat(kazanilan[hk]));
      yeni[hk] = g; n++;
    } catch (e) { console.warn("D YASLAMA: " + hk + " gövdesi birleştirilemedi:", e); }
  });
  var sonuc = { yeni: yeni, yaslanan: yaslanan, yamaAtlanan: yamaAtlanan,
                sayac: { kayit: Object.keys(yaslanan).length, yama: yamalar.length, govde: n } };
  _dGovdeOnbellekKoy(sonucAnahtari, sonuc);
  _dYaslaUygula(gun, sonuc, atlanan);
}
// Son 24 hesap tutulur (oynatmada ileri-geri gidişte yeniden kesilmesin).
var _dGovdeOnbellek = {}, _dGovdeSira = [];
function _dGovdeOnbellekKoy(a, v) {
  _dGovdeOnbellek[a] = v; _dGovdeSira.push(a);
  if (_dGovdeSira.length > 24) delete _dGovdeOnbellek[_dGovdeSira.shift()];
}
// 4) kaynaklara yaz — değişmeyenler app.js'in kendi nesneleriyle
function _dYaslaUygula(gun, sonuc, atlanan) {
  _dYaslaSon = sonuc.yeni;                 // ölçüm/denetim için (tarayıcı konsolu)
  var yeni = Object.assign({}, sonuc.yeni);
  var osm = yeni.osmanli; delete yeni.osmanli;
  // Düzeltecek yabancı gövde yoksa ve kaynak zaten app.js'in hâlindeyse
  // yazma (583 devletlik setData pahalıdır).
  var yabanciVar = Object.keys(yeni).length > 0;
  if (yabanciVar || _dDevletDegisti) _dDevletKaynaginiYaz(gun, yeni);
  _dDevletDegisti = yabanciVar;
  if (osm) { _dOsmanliKaynaginiYaz(osm); _dOsmDegisti = true; }
  else if (_dOsmDegisti && aktifDonem >= 0) { _dOsmanliKaynaginiYaz(null); _dOsmDegisti = false; }
  _dYaslananlar = sonuc.yaslanan;
  _dYaslaSayac = Object.assign({}, sonuc.sayac, { atlanan: atlanan });
}
function _dYaslandiMi(kayitId) { return !!_dYaslananlar[kayitId]; }

// ---- ⑥ TOAST: hat üstüne gelince antlaşma + tarih ------------------------------
function _dToastHtml(kayit, sinif) {
  var d0 = _dBaslikDayanagi(kayit);
  var baslik = d0.ad || d0.kaynak || kayit.id || "Sınır";
  var tarih = d0.tarih ? " · " + ekEsc(_dGunYazi(String(d0.tarih).slice(0, 10))) : "";
  return "<b>" + ekEsc(baslik) + "</b>" + tarih +
    "<br><small>" + _dPencereSatiri(kayit) + "</small>" +
    "<br><small>" + ekEsc(D_SINIF_ETIKET[sinif] || sinif || "") +
    (_dYaslandiMi(kayit.id) ? " · renk bu hatta yaslandı" : "") + "</small>";
}
var _dToast = null, _dToastId = null;
function _dToastKapat() {
  if (_dToast) { _dToast.remove(); _dToast = null; _dToastId = null; }
}

// ---- GÖRÜNÜM ANAHTARI (BUTONLAR alanı — `#d-gorunum-grup`) -------------------
// 🔴 DALGA-0074/H-0003: eskiden MapLibre `addControl(..., "top-right")` idi ve
// `#harita-ust-sag` ile ÖRTÜŞÜYORDU (ölçüm dosyanın başındaki nota işlendi).
// Gövde aynı; değişen YALNIZ nereye asıldığı ve üslubun menüye uyması.
// ⚠️ Kurulum haritanın `load`una BAĞLI DEĞİL: `_dKatmaniKur` "Style is not done
//    loading" ile düşerse bile (ölçüldü — altlık rasteri inmediğinde oluyor)
//    anahtar ekranda kalmalı, yoksa kullanıcı ayarı büsbütün kaybeder.
function _dGorunumAnahtariKur() {
  var yuva = document.getElementById("d-gorunum-grup");
  if (!yuva || yuva.childNodes.length) return;      // yuva yok ya da zaten kurulu
  var dugmeler = {};
  function boyaDugmeler() {
    Object.keys(dugmeler).forEach(function (deger) {
      dugmeler[deger].classList.toggle("etkin", _dGorunum === deger);
    });
  }
  function dugmeYap(etiket, deger, aciklama) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "d-gorunum-dugme";
    b.textContent = etiket;
    b.title = "D sınırları görünümü: " + aciklama;
    b.addEventListener("click", function () {
      if (_dGorunum === deger) return;
      _dGorunum = deger;
      boyaDugmeler();
      if (typeof haritaHazir !== "undefined" && haritaHazir && typeof suanki !== "undefined") {
        _dSinirGuncelle(suanki);
        _dYaslaGuncelle(suanki);
      }
    });
    dugmeler[deger] = b;
    return b;
  }
  var bas = document.createElement("span");
  bas.className = "d-gorunum-baslik";
  bas.textContent = "D SINIRI";
  yuva.appendChild(bas);
  // ⑤ Göster/gizle — yalnız ÇİZGİYİ gizler. Yaslama (③④) kuraldır, ayar
  // değildir: çizgi kapalıyken de renk hatta dayanır; çizgiyi açıp
  // "renk gerçekten oturuyor mu" diye bakmak bu düğmenin işidir.
  var g = document.createElement("button");
  g.type = "button";
  g.className = "d-gorunum-dugme";
  g.title = "Belgeye/antlaşmaya dayalı milimetrik sınır çizgilerini göster / gizle";
  function boyaGoster() {
    g.textContent = _dGoster ? "Çizgi ✓" : "Çizgi ✗";
    g.classList.toggle("etkin", _dGoster);
  }
  g.addEventListener("click", function () {
    _dGoster = !_dGoster;
    try { localStorage.setItem("dSinirGoster", _dGoster ? "1" : "0"); } catch (e) {}
    boyaGoster();
    _dGorunurlukUygula();
  });
  boyaGoster();
  yuva.appendChild(g);
  // ⑤b İKİ RENK aç/kapa (Emre, 24 Eylül 2026). Çizgi gizliyken de basılabilir;
  // tercihi ayrı anahtarda saklanır, "Çizgi ✓/✗" ile birbirini sıfırlamazlar.
  var ir = document.createElement("button");
  ir.type = "button";
  ir.className = "d-gorunum-dugme";
  ir.title = "Çizginin her yarısını o yandaki devletin renginin koyusuyla boya " +
             "(kapalıyken tek renk: lacivert, tâbi tarafta açık kırmızı)";
  function boyaIkiRenk() {
    ir.textContent = _dIkiRenk ? "İki renk ✓" : "İki renk ✗";
    ir.classList.toggle("etkin", _dIkiRenk);
  }
  ir.addEventListener("click", function () {
    _dIkiRenk = !_dIkiRenk;
    try { localStorage.setItem("dSinirIkiRenk", _dIkiRenk ? "1" : "0"); } catch (e) {}
    boyaIkiRenk();
    // İmza renklerden türüyor, ama yanı bilinmeyen kayıtta iki renk zaten
    // lacivert/lacivert olduğu için imza DEĞİŞMEZ ve kaynak tazelenmezdi.
    // Anahtara basmak her hâlde yeniden çizmelidir ⇒ imza sıfırlanır.
    _dAktifImza = null;
    if (typeof haritaHazir !== "undefined" && haritaHazir && typeof suanki !== "undefined") {
      _dSinirGuncelle(suanki);
    }
  });
  boyaIkiRenk();
  yuva.appendChild(ir);
  yuva.appendChild(dugmeYap("Hukukî", "hukuki", "F > E > C — yalnız barış antlaşması/protokolle kararlaştırılmış sınırlar; fiilî hat gösterilmez"));
  yuva.appendChild(dugmeYap("Fiilî", "fiili", "D > F > E > C — hukuken geçersiz olsa da fiilî/de facto hat varsa O gösterilir"));
  boyaDugmeler();
}

// ---- KATMAN KURULUMU (şemadan bağımsız, kalıcı) -------------------------------
function _dKatmaniKur() {
  if (!_dHazirMi() || harita.getSource("d-sinir-hat")) return;   // iki kez kurma
  try {
    harita.addSource("d-sinir-hat", { type: "geojson", data: bosVeri() });
    // Ekleme sırası = çizim sırası (MapLibre sonra eklenen layer'ı ÜSTE çizer).
    // C→E→F→D: hem HUKUKÎ (F üstte, sonra E, sonra C) hem FİİLÎ (D en üstte)
    // önceliğini TEK sabit sırayla karşılar — iki geometrik olarak çakışan
    // hat varsa (bugün örneği yok) üstteki görünür; veri BASTIRILMAZ (yukarı
    // bkz. _dAktifKayitlar başlığındaki not).
    // YARIM-YARIM (Emre, 24 Eylül): her sınıf İKİ katman — hat yönünün solu
    // `renk_sol`, sağı `renk_sag` (_dYarimRenkler); ikisi yan yana tek çizgi.
    var SINIFLAR = ["C", "E", "F", "D"];
    SINIFLAR.forEach(function (sinif) {
      var s = D_SINIF_STIL[sinif];
      var yw = s.yarim || s.genislik / 2;
      // Yakınlaştıkça kalınlaşır: uzakta ~yarım genişlik (harita boğulmasın),
      // z8'de 1,6 kat (iki yarım göz ayırt edebilsin — 1,8 px'te karışıyordu).
      var zg = function (c) { return ["interpolate", ["linear"], ["zoom"], 3, yw * 0.6 * c, 8, yw * 1.6 * c]; };
      [["sol", -1], ["sag", 1]].forEach(function (y) {
        var paint = { "line-color": ["get", "renk_" + y[0]], "line-width": zg(1),
                      "line-offset": zg(y[1] / 2), "line-opacity": s.opaklik };
        if (s.dash) paint["line-dasharray"] = s.dash;
        harita.addLayer({
          id: "d-sinir-hat-" + sinif + "-" + y[0], type: "line", source: "d-sinir-hat",
          filter: ["==", ["get", "sinif"], sinif],
          layout: { "line-join": "round", "line-cap": "butt" },
          paint: paint
        });
      });
    });
    // ⑥ İsabet hattı — görünmez, 14 px: 2-3 px'lik çizginin üstüne fareyi
    // tutturmak zor; toast bu katmandan tetiklenir.
    harita.addLayer({ id: "d-sinir-isabet", type: "line", source: "d-sinir-hat",
      layout: { "line-join": "round", "line-cap": "round" },
      paint: { "line-color": "#000", "line-width": 14, "line-opacity": 0 } });
    harita.on("mousemove", "d-sinir-isabet", function (e) {
      if (!_dGoster || !e.features || !e.features.length) return;
      var p = e.features[0].properties;
      var kayit = _dKayitIndeksi()[p.kayit_id];
      if (!kayit) return;
      harita.getCanvas().style.cursor = "pointer";
      if (_dToast && _dToastId === p.kayit_id) { _dToast.setLngLat(e.lngLat); return; }
      _dToastKapat();
      _dToastId = p.kayit_id;
      _dToast = new maplibregl.Popup({ closeButton: false, closeOnClick: false,
                                       className: "d-sinir-toast", offset: 14, maxWidth: "300px" })
        .setLngLat(e.lngLat).setHTML(_dToastHtml(kayit, p.sinif)).addTo(harita);
    });
    harita.on("mouseleave", "d-sinir-isabet", function () {
      harita.getCanvas().style.cursor = "";
      _dToastKapat();
    });
    _dGorunurlukUygula();
    // Tıklama da yalnız isabet hattından — sınıf katmanlarından da dinlenseydi
    // aynı tıklama iki balon açardı.
    ["d-sinir-isabet"].forEach(function (lyr) {
      harita.on("click", lyr, function (e) {
        var p = e.features[0].properties;
        var kayit = _dKayitIndeksi()[p.kayit_id];
        if (!kayit || !_dGoster) return;
        _dToastKapat();
        new maplibregl.Popup({ closeButton: true, maxWidth: "280px" })
          .setLngLat(e.lngLat)
          .setHTML(_dPopupHtml(kayit, p.sinif))
          .addTo(harita);
      });
      harita.on("mouseenter", lyr, function () { harita.getCanvas().style.cursor = "pointer"; });
      harita.on("mouseleave", lyr, function () { harita.getCanvas().style.cursor = ""; });
    });
    if (typeof haritaHazir !== "undefined" && haritaHazir && typeof suanki !== "undefined") {
      _dSinirGuncelle(suanki);
      _dYaslaGuncelle(suanki);
    }
  } catch (e) {
    console.error("D KATMANI kurulamadı:", e);
  }
}

// ⑤ Çizgi + isabet katmanlarının görünürlüğü `_dGoster`a bağlı.
function _dGorunurlukUygula() {
  if (!_dHazirMi()) return;
  var v = _dGoster ? "visible" : "none";
  ["C", "E", "F", "D"].reduce(function (a, s) {
    return a.concat(["d-sinir-hat-" + s + "-sol", "d-sinir-hat-" + s + "-sag"]);
  }, ["d-sinir-isabet"]).forEach(function (id) {
    if (harita.getLayer(id)) harita.setLayoutProperty(id, "visibility", v);
  });
  if (!_dGoster) _dToastKapat();
}

// Kendi "load" dinleyicisi — app.js'in load işleyicisinden bağımsız.
if (typeof harita !== "undefined" && harita && typeof harita.on === "function") {
  harita.on("load", _dKatmaniKur);
}
// 🔴 DALGA-0074/H-0003 — görünüm anahtarı ARTIK haritaya bağlı değil: yuva
// (`#d-gorunum-grup`) DOM'da hazırsa hemen, değilse DOMContentLoaded'da kurulur.
// Katman kurulumundan AYRILMASININ ölçülmüş sebebi yukarıdaki nottadır.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", _dGorunumAnahtariKur);
} else {
  _dGorunumAnahtariKur();
}

// guncelle() SARMALAMA — app.js'e dokunmadan canlı güncelleme.
// `guncelle` app.js'te üst seviyede tanımlı gerçek bir global (IIFE'siz
// dosya) — bu dosya app.js'TEN SONRA yüklenmek ZORUNDADIR.
(function () {
  if (typeof window.guncelle !== "function") {
    console.warn("D KATMANI: window.guncelle bulunamadı — canlı güncelleme BAĞLANAMADI (script sırası app.js'ten önce mi?).");
    return;
  }
  var _dEskiGuncelle = window.guncelle;
  window.guncelle = function () {
    var r = _dEskiGuncelle.apply(this, arguments);
    if (typeof haritaHazir !== "undefined" && haritaHazir && typeof suanki !== "undefined") {
      _dSinirGuncelle(suanki);
      _dYaslaGuncelle(suanki);
    }
    return r;
  };
})();

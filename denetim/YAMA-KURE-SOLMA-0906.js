// ═══════════════════════════════════════════════════════════════════════
// YAMA ÖNERİSİ — KÜRE ARKA YÜZ: SERT KESME → KADEMELİ SOLMA  (ADAY B)
// ───────────────────────────────────────────────────────────────────────
// KURE GORUNUM · 1.MURAT hükmü (denetim/HUKUM-KURE-ARKA-YUZ-0906.md)
// 6 Eylül 2026
//
// 🔴 BU DOSYA UYGULANMADI. `js/app.js` Oturum 1'in dosyası (`§7`);
//    ben kod YAZMADIM, bu bir ÖNERİ metnidir. Devri 1.MURAT yapar.
//    Ölçüm: denetim/OLCUM-KURE-ARKA-YUZ-0906.md
//
// ── NİÇİN ──────────────────────────────────────────────────────────────
// Bugün arka yüz `visibility:"hidden"` ile İKİLİ gizleniyor
// (`KURE_PAY_DER = 0`, opaklık hiç kullanılmıyor). Ufka ±5° içindeki
// işaretçiler kamera oynadıkça görünüp kayboluyor:
//     z0,5 →14  z1,2 →22  z2 →62  z3 →72  z4 →25   (%1,6-4,5)
// Üç tarihte de oran KARARLI: 1281 %4,8 · 1683 %5,5 · 1914 %4,5.
//
// ── HÜKMÜN İKİ ŞARTI — İKİSİ DE BU YAMADA ──────────────────────────────
// ① `pointer-events` AYNI GEÇİŞTE, AYNI DEĞERDEN türetilir (aşağıda tek
//    satır, `op`tan). Ayrı geçişte yazılsaydı ayrışabilirdi.
// ② Opaklık 0'a inince `visibility:"hidden"`e DÜŞER — tam arka yüzdeki
//    işaretçi BUGÜNKÜ garantilerini birebir korur (yer kaplamaz,
//    tıklanmaz). Yeni mekanizma YOK; var olan ikisi SIRAYA kondu.
//
// ── SABİTLERİN ÖLÇÜLMÜŞ GEREKÇESİ ──────────────────────────────────────
// KURE_SOLMA_DER = 4  — geçiş bandının genişliği (derece).
//    Ölçüldü: merkez 20° boylam kaydırılınca kenardaki bir işaretçinin
//    ufka uzaklığı 9,82° değişiyor ⇒ 1° ufuk ≈ 2,04° sürükleme.
//    4°'lik bant ≈ 8°'lik bir sürüklemede geçilir, yani solma KISA.
//    Ve 4°, bugün zaten "pop" yaşayan ±5° bandının içinde kalır.
// KURE_TIK_ESIK = 0.5 — bunun altında etiket TIKLANMAZ.
//    Ölçüldü (fotometrik): etiket koyu kahve metin + BEYAZ HALO, ve
//    `opacity` ikisini BİRLİKTE soldurur ⇒ yerel karşıtlık (metin↔halo):
//        α 1,0 → 11,22   α 0,8 → 6,86   α 0,6 → 4,16
//        α 0,5 →  3,25   α 0,4 → 2,55   α 0,3 → 2,00   (deniz zemini)
//    10px/600 WCAG'de BÜYÜK METİN DEĞİL ⇒ eşik 4,5:1.
//    α < 0,5'te etiket OKUNMUYOR ⇒ okunmayan bir etiketin tıklanması
//    yanıltıcıdır. Eşik okunurluk ölçümünden TÜRETİLDİ, seçilmedi.
//
// ── SINANDI (sayfada koşturuldu, yama İNMEDEN) ─────────────────────────
//    gizli sayısı        bugün 143  ·  öneri 143      ⇒ AYNI
//    solan (0<α<1)       22
//    tam arka yüz        143/143 computed visibility = hidden
//    görünmez-tıklanabilir ihlali                       0
//    maliyet             bugün 3,2 ms · öneri 3,3 ms  ⇒ +0,1 ms
//    ⚠️ İlk ölçümüm "6,4 ms" demişti — o rakam DEĞİŞMEZ TARAMASININ
//       (`getComputedStyle` her işaretçide) yüküydü, yamanın değil.
//       Kendi ölçümümün maliyetini ölçülen şeye yazmışım; düzeltildi.
//
// ── 🔴 BİR KEZ GÖRÜLDÜ, TEKRARLAMADI ───────────────────────────────────
//    Bir turda 1 işaretçi (0,1] dışında bir opaklık aldı; ikinci turda
//    ÜRETİLEMEDİ ve kim olduğu BULUNAMADI (`ölçülemedi`). Muhtemel
//    sebep: iki çağrı arasında yaratılıp yok olan bir işaretçi ya da
//    `getLngLat` NaN. Yama yine de KORUMALI yazıldı (`isFinite`) —
//    ölçülemeyen bir olaya karşı ucuz sigorta.
// ═══════════════════════════════════════════════════════════════════════

var KURE_SOLMA_DER = 4;     // geçiş bandı (derece) — 0 yazılırsa bugünkü ikili davranış
var KURE_TIK_ESIK  = 0.5;   // bu opaklığın altında etiket tıklanmaz

// ── DEĞİŞTİRİLECEK: js/app.js `kureArkaYuzUygula()` ────────────────────
function kureArkaYuzUygula() {
  var gizli = 0, gorunur = 0, solan = 0, i, k, ll;

  if (!KURE_ACIK) {
    // 🟢 GEÇME YOLU: küre kapalıyken hiçbir işaretçi gizli/soluk KALMAZ.
    // 🔴 BUGÜNKÜ KOD YALNIZ `visibility` TEMİZLİYOR — solma gelince ÜÇÜ
    //    de temizlenmeli, yoksa küre kapatılınca soluk etiketler KALIR.
    //    (Şart ②'nin görülmeyen ayağı: bir özellik eklemek, onu
    //     temizleyecek yeri de eklemektir.)
    for (i = 0; i < ISARETCI_KUTUK.length; i++) {
      k = ISARETCI_KUTUK[i];
      if (!k.el) continue;
      if (k.el.style.visibility === "hidden") k.el.style.visibility = "";
      if (k.el.style.opacity !== "") k.el.style.opacity = "";
      if (k.el.style.pointerEvents !== "") k.el.style.pointerEvents = "";
      gorunur++;
    }
    kureSonSayim = { gizli: 0, gorunur: gorunur, solan: 0, ufuk: null };
    return kureSonSayim;
  }

  var c = harita.getCenter();
  var ufuk = kureUfkuOlc() + KURE_PAY_DER;

  for (i = 0; i < ISARETCI_KUTUK.length; i++) {
    k = ISARETCI_KUTUK[i];
    if (!k.el || !k.el.isConnected) continue;
    try { ll = k.m.getLngLat(); } catch (e) { continue; }

    var d = kureAcDer(c.lat, c.lng, ll.lat, ll.lng) - ufuk;   // <0 ön yüz
    var op = (d <= -KURE_SOLMA_DER) ? 1 : (d >= 0 ? 0 : (-d / KURE_SOLMA_DER));
    if (!isFinite(op)) op = 0;        // ölçülemeyen tek vakaya karşı koruma

    if (op <= 0) {
      // ── ŞART ②: 0'da BUGÜNKÜ yola düş; garantiler birebir korunur
      k.el.style.visibility = "hidden";
      if (k.el.style.opacity !== "") k.el.style.opacity = "";
      if (k.el.style.pointerEvents !== "") k.el.style.pointerEvents = "";
      gizli++;
    } else {
      if (k.el.style.visibility === "hidden") k.el.style.visibility = "";
      k.el.style.opacity = (op >= 1) ? "" : String(Math.round(op * 100) / 100);
      // ── ŞART ①: AYNI GEÇİŞ, AYNI DEĞER. İkisi ayrışamaz çünkü ikisi de
      //    `op`tan türüyor ve arada başka bir yazım yok.
      k.el.style.pointerEvents = (op < KURE_TIK_ESIK) ? "none" : "";
      gorunur++;
      if (op < 1) solan++;
    }
  }

  kureSonSayim = { gizli: gizli, gorunur: gorunur, solan: solan,
                   ufuk: Math.round(ufuk * 100) / 100 };

  // 🔴 ROZET CANLI OLMALI — donmuş sayı bu projenin en sık hatası.
  var rz = document.getElementById("kat-sayi-kure");
  if (rz) {
    rz.textContent = "gizli " + gizli;
    rz.title = "arka yüz gizlendi: " + gizli + " / " + (gizli + gorunur)
             + " · solan " + solan
             + " · ufuk " + kureSonSayim.ufuk + "°"
             + " · bant " + KURE_SOLMA_DER + "°";
  }
  return kureSonSayim;
}

// ── İNDİKTEN SONRA KOŞULACAK SINAV (dört madde) ────────────────────────
// ① gizli sayısı yamadan ÖNCEKİYLE AYNI olmalı — solma yalnız GÖRÜNÜR
//    tarafta olur, arka yüzü BÜYÜTMEZ. (ölçüldü: 143 → 143)
// ② `visibility:hidden` olan her işaretçide `opacity` ve `pointerEvents`
//    BOŞ olmalı — iki durum yan yana yaşamamalı.
// ③ opaklığı KURE_TIK_ESIK altındaki hiçbir işaretçi tıklanabilir
//    OLMAMALI (`getComputedStyle(el).pointerEvents === "none"`).
// ④ 🔴 GEÇME YOLU: küre KAPATILINCA hiçbir işaretçide `opacity` ya da
//    `pointerEvents` KALMAMALI. Bu dal bugünkü kodda sınanmamıştı çünkü
//    temizlenecek tek şey vardı; artık ÜÇ şey var. (`C13`: her kusur dalı
//    AYRI AYRI ateşlenir.)
// ⚪ ÖLÇÜLMEDİ: kare hızı (koşu 6 CPU'yu paylaşıyor) · yarı saydam
//    bandın İNSAN gözüyle okunurluğu (ölçüm FOTOMETRİK, ekran görüntüsü
//    üç denemede de alınamadı).

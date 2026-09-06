// ============================================================================
// ⑳ SINAV — M-0342 HÜKMÜ: "peteği devredilmez, komşuya emilmez"
// ============================================================================
//   node --max-old-space-size=4096 denetim/SINAV-M0342-0907.js
//
// ── VAKA ───────────────────────────────────────────────────────────────────
// 16 Ağustos 2026, NOKTA SİBİRYA 2 (bu oturumun önceki kimliği) dört
// `kasitli_bosluk` kaydı yazdı: hiçbir dönemi yok, sahibi yok, ve amacı
// toprağı UZAK bir komşuya kaptırmamak.
//     Kamçatka (İtelmen)          55,000 / 158,500
//     Kolıma havzası (Yukagir)    66,000 / 152,000
//     Doğu Sibirya kıyısı         70,000 / 161,000
//     Penjina havzası (Koryak)    61,000 / 156,500
//
// `M-0342` hükmü: *"`kur:` yazılan / sahibi olmayan nokta sahneden çıkar AMA
// hiçbir dala girmediği için peteği DEVREDİLMEZ — kendinde kalır, sahibi
// olmadığı için haritada BOŞLUK görünür, komşuya EMİLMEZ."*
//
// 🔴 O hüküm BUGÜNE KADAR SINANMADI. 4 Eylül'de sınamaya çalıştım ve
//    koşulamadı: `BOLGE = box(-12,-11,146,82)` idi, dört kayıt 152-161°D'de,
//    yani PENCERE DIŞINDAYDI. Hüküm doğru da olabilirdi yanlış da; ölçüm
//    "boşluk görüyorum" derdi ama sebebi hüküm değil PENCERE olurdu.
//    (§11: "aynı görüntü iki apayrı sebepten çıkar; ikisini karıştırma.")
//
// 🟢 BUGÜN KOŞULABİLİR: `uret_petek.py:183` → `BOLGE = box(-180,-60,180,85)`
//    ve dört kaydın DÖRDÜNÜN DE peteği var (bugünkü `donemler.js`,
//    PETEKLER 3805 — ölçüldü, 7 Eylül 01:1x).
//
// ── ÖNGÖRÜ — 🔴 ÖLÇÜMDEN ÖNCE YAZILDI (7 Eylül 2026, hiçbir boya kontrolü
//    koşturulmadan; yalnız PETEKLER'de adların VARLIĞI ölçülmüştü) ─────────
//
//   ① NE BEKLİYORUM
//      Dört noktanın DÖRDÜ de, örneklenen BÜTÜN tarihlerde, hiçbir devletin
//      gövdesinin İÇİNDE olmayacak. Yani 0/4 boyalı. Hüküm TUTAR.
//      Kontrol noktası (sahipli bir yerleşim) ise BOYALI çıkacak.
//
//   ② MAZERETİ VAR MI — 🔴 VAR, ve şimdi yazıyorum ki sonradan uyduramayayım
//      `§11` "A1 tavanı" vakası: *"20 petek kısaldı, 118 YETİM YÜZ sahipli
//      komşulara KATILDI"* — yani motorda toprağı komşuya GERİ VEREN bir
//      mekanizma VAR ve `M-0342`nin tersini yapabilir. Bir nokta BOYALI
//      çıkarsa bu bir veri hatası DEĞİL, o mekanizmadır ve hüküm o zaman
//      "koşulsuz doğru" değil "şartlı doğru" olur.
//      ⚠️ Ve mazeret ŞUNU KAPSAMAZ: dördü de boyalı çıkarsa hüküm YANLIŞTIR,
//      mazeret aranmaz.
//
//   ③ HANGİ ÇIKTIDAN, HANGİ BİRİMDE
//      `data/donemler.js` (Osmanlı: DONEMLER[].o / .v → PARCALAR) ve
//      `data/devletler_harita.js` (yabancı: DEVLET_HARITA[].dnm[].g →
//      DEVLET_PARCALAR). Birim: nokta-içinde-poligon, EVET/HAYIR;
//      ve boyayan varsa kimliğin ADI.
//
//   ④ HANGİ KOŞUDA / NEYE KARŞI
//      Bu sürüm 5 Eylül 22:24 çıktısına karşı bir TABAN ölçer.
//      Koşu 7b indikten sonra AYNI betik yeniden koşulur; iki sonuç
//      karşılaştırılır. Beklenen: DEĞİŞMEZ (hüküm geometriden bağımsız).
//
// ── C13 DÖRT AYAK ──────────────────────────────────────────────────────────
//   ① GEÇME    : kusur yokken temiz mi   → dört nokta boyasız çıkmalı
//   ② ATEŞLEME : kusur varken ötüyor mu  → KONTROL noktası (sahipli) BOYALI
//                bildirilmeli; bildirilmiyorsa OKUMAM bozuk
//   ③ GİRDİ    : gerçek dosyadan okunuyor (enjekte veri YOK)
//   ④ ÇIKTI    : bilerek "emilmiş" bir vaka verildi (KONTROL), sınav onu
//                AYIRT ETMELİ. Ayırt etmiyorsa sonuç güvenilmez.
// ============================================================================
'use strict';
const fs = require('fs');

const HEDEF = [
  { ad: 'Kamçatka (İtelmen toprakları)',       lat: 55.000, lon: 158.500 },
  { ad: 'Kolıma havzası (Yukagir toprakları)', lat: 66.000, lon: 152.000 },
  { ad: 'Doğu Sibirya kıyısı (Çuvan-Yukagir)', lat: 70.000, lon: 161.000 },
  { ad: 'Penjina havzası (kuzey Koryak)',      lat: 61.000, lon: 156.500 }
];
// C13 ② ve ④ — KONTROL: sahipli olduğu KESİN noktalar. Sınav bunları
// BOYALI bildirmezse okuma yolu bozuktur ve öteki sonuç da geçersizdir.
const KONTROL = [
  { ad: 'KONTROL Bursa',  lat: 40.183, lon: 29.067 },
  { ad: 'KONTROL Viyana', lat: 48.208, lon: 16.373 }
];
const TARIHLER = ['1300-06-15', '1500-06-15', '1700-06-15', '1800-06-15',
                  '1900-06-15', '1923-01-01'];

function icinde(pt, halka) {            // ray casting; halka = [[lon,lat],…]
  let ic = false;
  for (let i = 0, j = halka.length - 1; i < halka.length; j = i++) {
    const xi = halka[i][0], yi = halka[i][1];
    const xj = halka[j][0], yj = halka[j][1];
    if (((yi > pt.lat) !== (yj > pt.lat)) &&
        (pt.lon < (xj - xi) * (pt.lat - yi) / (yj - yi) + xi)) ic = !ic;
  }
  return ic;
}

console.log('SINAV M-0342 · ' + new Date().toISOString().slice(0, 16).replace('T', ' '));
console.log('cikti: data/donemler.js  ·  data/devletler_harita.js');
console.log('');

global.window = {};
eval(fs.readFileSync('data/donemler.js', 'utf8'));
const DON = global.window.DONEMLER, PARCA = global.window.PARCALAR;
const PETEK_AD = new Set((global.window.PETEKLER || []).map(p => p.a));
global.window = {};
eval(fs.readFileSync('data/devletler_harita.js', 'utf8'));
const DH = global.window.DEVLET_HARITA, DPARCA = global.window.DEVLET_PARCALAR;
console.log('DONEMLER ' + DON.length + ' · PARCALAR ' + PARCA.length +
            ' · DEVLET_HARITA ' + DH.length + ' · DEVLET_PARCALAR ' + DPARCA.length);
console.log('');

// ── ADIM 0: peteği var mı (hüküm bunu ÖNGERKTİRİR) ────────────────────────
console.log('=== ADIM 0 — DORT KAYDIN PETEGI VAR MI ===');
let peteksiz = 0;
for (const h of HEDEF) {
  const v = PETEK_AD.has(h.ad);
  if (!v) peteksiz++;
  console.log('  ' + h.ad.padEnd(38) + (v ? '🟢 PETEK VAR' : '🔴 PETEK YOK'));
}
if (peteksiz) {
  console.log('');
  console.log('🔴 SINAV KOSULAMAZ: ' + peteksiz + ' kaydin petegi yok ⇒ hukum');
  console.log('   sinanamaz (petek yoksa "devredilmedi" de denemez).');
  process.exit(2);
}
console.log('');

function boyayan(pt, tarih) {
  for (const d of DH) {
    for (const p of (d.dnm || [])) {
      if (!(p.f <= tarih && tarih < p.t)) continue;
      for (const gi of (p.g || [])) {
        const hal = DPARCA[gi];
        if (hal && icinde(pt, hal)) return d.id;
      }
    }
  }
  for (const d of DON) {
    if (!(d.f <= tarih && tarih < d.t)) continue;
    for (const alan of ['o', 'v']) {
      for (const gi of (d[alan] || [])) {
        const hal = PARCA[gi];
        if (hal && icinde(pt, hal)) return alan === 'o' ? 'OSMANLI' : 'OSMANLI-tabi';
      }
    }
  }
  return null;
}

console.log('=== ADIM 1 — DORT BOSLUK KAYDI: BOYANIYOR MU ===');
let boyali = 0;
for (const h of HEDEF) {
  const bulgu = TARIHLER.map(t => [t, boyayan(h, t)]);
  const b = bulgu.filter(x => x[1]);
  if (b.length) boyali++;
  console.log('  ' + h.ad.padEnd(38) +
    (b.length ? '🔴 BOYALI: ' + b.map(x => x[0] + '→' + x[1]).join(' · ')
              : '🟢 hicbir tarihte boyali DEGIL'));
}
console.log('');

console.log('=== ADIM 2 — C13 ②/④ KONTROL: sahipli nokta BOYALI bildiriliyor mu ===');
let kontrolOK = 0;
for (const k of KONTROL) {
  const bulgu = TARIHLER.map(t => [t, boyayan(k, t)]).filter(x => x[1]);
  if (bulgu.length) kontrolOK++;
  console.log('  ' + k.ad.padEnd(38) +
    (bulgu.length ? '🟢 BOYALI: ' + bulgu.slice(0, 3).map(x => x[0] + '→' + x[1]).join(' · ')
                  : '🔴 HIC BOYALI DEGIL — OKUMA YOLU BOZUK'));
}
console.log('');

console.log('=== HUKUM ===');
if (kontrolOK === 0) {
  console.log('🔴 SINAV GECERSIZ — kontrol noktalari da boyasiz cikti.');
  console.log('   Okuma yolum bozuk; ADIM 1 sonucu GUVENILMEZ (§11 C13 ④).');
  process.exit(2);
}
if (boyali === 0) {
  console.log('🟢 M-0342 TUTTU — dort bosluk kaydinin petegi VAR ve hicbiri');
  console.log('   hicbir devlete emilmemis. "Boslugu komsuya devretmez" DOGRULANDI.');
  console.log('   (kontrol ' + kontrolOK + '/' + KONTROL.length + ' boyali ⇒ okuma yolu SAGLAM)');
} else {
  console.log('🔴 M-0342 CURUDU — ' + boyali + '/4 kayit BOYALI.');
  console.log('   Muhtemel mekanizma: §11 A1 tavani vakasindaki YETIM YUZ');
  console.log('   devri ("118 yetim yuz sahipli komsulara katildi"). Hukum');
  console.log('   kosulsuz degil SARTLI dogrudur; sarti olculmeli.');
}

/* ══════════════════════════════════════════════════════════════════════════
 * FİKSTÜR — SAHTE BİR `donemler.js`   ·  SINAV-KOSU8-0907  ·  7 Eylül 2026
 * ══════════════════════════════════════════════════════════════════════════
 * NİÇİN VAR: `SINAV-KOSU8-VL-0907.js`in **GEÇME** ayağı (C13①) koşu 8
 * bitmeden gerçek veriyle koşulamaz — bugünkü `donemler.js` koşu 7B'nin
 * çıktısı ve `vl` taşımıyor. Bu dosya, motorun YAZMASI BEKLENEN biçimde
 * sağlam bir çıktı taklit eder; sınav onun karşısında SESSİZ kalmalıdır.
 *
 * 🔴 BU BİR VERİ DOSYASI DEĞİLDİR. `data/` altında değil, `girdi.py`nin
 *   listesinde değil, `index.html`de değil. Yalnız `--dosya` ile açıkça
 *   verildiğinde okunur. Adı da bilerek `SINAV-KOSU8-*-0907.js`
 *   sözleşmesinin içinde — `§11`: *"bir glob bir AD SÖZLEŞMESİDİR"*, ve
 *   bu proje bir bulgu dosyasının bir uygulayıcının globuna düşmesini
 *   ("0 künye" diye sessiz bir sıfır) bir kez ödedi.
 *
 * KOŞULUŞ
 *   node denetim/SINAV-KOSU8-VL-0907.js --dosya denetim/SINAV-KOSU8-FIKSTUR-VL-0907.js
 *   → beklenen: GEÇTİ, çıkış 0
 *   node denetim/SINAV-KOSU8-FIKSTUR-VL-0907.js --boz   (bozuk sürümü basar)
 * ══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var W = (typeof window !== 'undefined' && window) ||
          (typeof global !== 'undefined' && global.window) || {};

  // ── halka havuzu: iki ayrık kare ────────────────────────────────────────
  // ring 0: (0,0)-(10,10)   ring 1: (20,0)-(30,10)   ring 2: ring0'ın deliği
  W.PARCALAR = [
    [[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]],
    [[20, 0], [30, 0], [30, 10], [20, 10], [20, 0]],
    [[4, 4], [6, 4], [6, 6], [4, 6], [4, 4]]
  ];
  // parça 0 = delikli batı karesi · parça 1 = doğu karesi
  W.PARCA_HALKA = [[0, 2], [1]];

  // ── gerçek veride BULUNAN (k, statu) çiftlerinden seçilmiş adlar ────────
  // 🔴 Uydurma ad KULLANILMIYOR: K5 kalemi `girdi.py`ye soruyor ve uydurma
  //   bir ad orada YANLIŞ bir ihlal üretirdi — yani fikstür, sınavı kendi
  //   kusuru olmayan bir yerden ötürtürdü.
  var ADLAR = ['Eflak Voyvodalığı', 'Boğdan Voyvodalığı', 'Erdel Prensliği',
               'Kırım Hanlığı', 'Mekke Şerifliği', 'Sırbistan Prensliği'];

  var D = [];
  for (var i = 0; i < 140; i++) {                 // >100: sessiz-sıfır kapanını geç
    var y = 1500 + i;
    var k = {
      f: y + '-01-01', t: (y + 1) + '-01-01',
      ad: 'FİKSTÜR ' + y, b: [0, 0, 30, 10],
      ao: 1000, e: [], c: [], o: [0]
    };
    if (i % 2 === 0) {                            // yarısında tâbi toprak var
      k.av = 100;
      k.v = (i % 4 === 0) ? [0] : [0, 1];
      k.vl = [{ k: ADLAR[i % ADLAR.length], s: 'vassal', p: [1.5, 1.5] }];
      if (i % 4 !== 0) {                          // doğu karesinde ikinci çapa
        k.vl.push({ k: ADLAR[(i + 1) % ADLAR.length], s: 'vassal', p: [25, 5] });
      }
    }
    D.push(k);
  }
  W.DONEMLER = D;
  W.PETEKLER = [];
  W.SERBEST = []; W.SERBEST_U = [];
  W.URETIM_IZI = { fikstur: true };

  if (typeof window === 'undefined' && typeof global !== 'undefined') global.window = W;

  // ── doğrudan koşulduysa kullanımı bas ──────────────────────────────────
  // 🔴 `require.main === module` YETMİYOR ve ölçüldü: bu dosya sınav
  //   tarafından `eval` edildiğinde `module` SINAVIN modülüdür, yani
  //   koşul DOĞRU çıkar ve fikstür banner'ını sınav çıktısının içine
  //   basar. Ölçüt dosyanın KENDİ ADI olmalı.
  var dogrudan = typeof process !== 'undefined' && process.argv &&
                 String(process.argv[1] || '').indexOf('SINAV-KOSU8-FIKSTUR-VL-0907') >= 0;
  if (dogrudan) {
    console.log('Bu bir FİKSTÜRDÜR, sınav değil. Kullanımı:');
    console.log('  node denetim/SINAV-KOSU8-VL-0907.js --dosya ' +
                'denetim/SINAV-KOSU8-FIKSTUR-VL-0907.js');
    console.log('DÖNEM ' + D.length + ' · `v` ' + D.filter(function (x) { return x.v; }).length +
                ' · `vl` ' + D.filter(function (x) { return x.vl; }).length);
  }
})();

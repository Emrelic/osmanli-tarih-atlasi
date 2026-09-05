// ============================================================================
// Ö9 KABUL SINAVI — "kaç nokta girdide VAR ama haritada ÇİZİLMİYOR?"
// ============================================================================
// KOŞU BİTİNCE İLK KOŞULACAK SINAVLARDAN BİRİ (bkz. KOSU-SONRASI-KUYRUK.md ⓪).
//
//   py -c yok · node ile:   node denetim/ARAC-PETEKSIZ-0905.js
//
// TABAN (4 Eylül 2026, PAKET GEOMETRİ 0904 ölçtü):
//   girdi 3805 nokta · yayındaki geometri 2731 petek · PETEĞİ OLMAYAN 1074 (%28,2)
//   ve 1074'ün 1072'si BEŞ TAM PARTİ:
//     yerlesimler_afrika2 401/401 · kamerika 377/377 · okyanusya 118/118
//     gamerika 112/112 · sibirya2 64/64      (hepsi %100 peteksiz)
//   ⇒ Sebep ZAMAN değil PARTİ: o dosyalar koşuya hiç girmemiş.
//
// BEKLENEN (koşu 5b sonrası):
//   PETEKLER 2731 → ~3800 · peteksiz oran %28,2 → ~%0
//   beş dosyanın oranı %100 → %0
//   🔴 Tutmazsa koşu EKSİK BİTMİŞ demektir; YAYIN YAPILMAZ.
//
// ⚠️ NİÇİN BU DOSYA VAR — 5 Eylül 2026, 1.MURAT:
//   Bu sınavın betiği YALNIZ bir oturumun scratchpad'inde duruyordu ve
//   kuyruk ona "scratchpad'de `peteksiz.js`" diye atıf yapıyordu. O oturum
//   kapansa kabul ölçütü ÖLÇÜLEMEZ hâle gelecekti (`§7.1⑦`: "sende kalan
//   hiçbir bilgi kurtarılamaz"). Depoya alındı.
//   Ve bir bağımlılık daha kaldırıldı: özgün betik dışarıdan bir
//   `girdi_listesi.txt` okuyordu — o da geçiciydi. Bu sürüm dosya listesini
//   `arac/girdi.py`nin `GIRDI_DOSYALARI` sabitinden ÇIKARIR, yani
//   `§5`in "hangi dosya CANLI — tek doğru kaynak girdi.py" kuralına uyar.
// ============================================================================
'use strict';
const fs = require('fs');
const path = require('path');
const kok = process.cwd();

// ── dosya listesi: girdi.py'yi PYTHON'a okutarak ──────────────────────────
// 🔴 REGEX DENENDİ VE ÇÜRÜDÜ (5 Eylül, ilk sürüm): `GIRDI_DOSYALARI\s*=\s*
//   [\(\[]([\s\S]*?)[\)\]]` tembel eşleşme yüzünden listeyi ilk parantezde
//   kesti ve **77 dosya yerine 1** çıkardı — ve betik hata vermeden
//   "TOPLAM 792 nokta · peteksiz 0" diye TEMİZ bir sayı bastı.
//   `§11`: *veri zaten bir dilde yazılıysa, o dilin yorumlayıcısını çağır.*
//   (Bu projede aynı ders yedi kez öğrenildi; bu sekizincisi.)
const cp = require('child_process');
let adlar;
try {
  const cikti = cp.execFileSync('py', ['-c',
    'import sys;sys.path.insert(0,"arac");import girdi;' +
    'print("\\n".join(girdi.GIRDI_DOSYALARI))'],
    { cwd: kok, encoding: 'utf8' });
  adlar = cikti.split('\n').map(s => s.trim()).filter(s => s.endsWith('.js'));
} catch (e) {
  console.error('girdi.py okunamadi: ' + e.message);
  process.exit(2);
}
if (adlar.length < 10) {
  console.error('liste SUPHELI KISA (' + adlar.length + ') — ayristirma kusurlu olabilir');
  process.exit(2);
}

// ── yayındaki petek adları ────────────────────────────────────────────────
global.window = {};
eval(fs.readFileSync(path.join(kok, 'data', 'donemler.js'), 'utf8'));
const PETEK = global.window.PETEKLER || [];
const PETEK_AD = new Set(PETEK.map(p => p.a));

console.log('girdi dosyasi : ' + adlar.length);
console.log('PETEKLER      : ' + PETEK.length);
console.log('');

let toplam = 0, peteksiz = 0;
const satir = [];
for (const a of adlar) {
  const p = path.join(kok, 'data', a);
  if (!fs.existsSync(p)) { console.log('  ! dosya YOK: ' + a); continue; }
  const w = {};
  const eski = global.window;
  global.window = w;                       // §7: her dosya AYRI ad alaninda
  try { eval(fs.readFileSync(p, 'utf8')); } catch (e) { }
  global.window = eski;
  let n = 0, yok = 0;
  for (const k of Object.keys(w)) {
    const v = w[k];
    if (!Array.isArray(v)) continue;
    for (const t of v) {
      if (!t || typeof t.lat !== 'number' || !t.ad) continue;
      n++;
      if (!PETEK_AD.has(t.ad)) yok++;
    }
  }
  toplam += n; peteksiz += yok;
  if (n) satir.push({ dosya: a, nokta: n, peteksiz: yok, oran: yok / n });
}

satir.sort((x, y) => y.peteksiz - x.peteksiz);
console.log('TOPLAM nokta ' + toplam + ' | PETEKSIZ ' + peteksiz +
            ' (%' + (100 * peteksiz / Math.max(1, toplam)).toFixed(1) + ')');
console.log('');
console.log('dosya                                     nokta  peteksiz    oran');
for (const s of satir) {
  if (!s.peteksiz) continue;
  console.log('  ' + s.dosya.padEnd(38) + String(s.nokta).padStart(6) +
              String(s.peteksiz).padStart(10) +
              ('%' + (100 * s.oran).toFixed(1)).padStart(8));
}
if (!satir.some(s => s.peteksiz)) console.log('  (peteksiz nokta YOK)');

console.log('');
const oran = 100 * peteksiz / Math.max(1, toplam);
if (oran > 5) {
  console.log('🔴 KABUL EDILMEZ — peteksiz oran %' + oran.toFixed(1) +
              ' (taban %28,2 · beklenen ~%0). KOSU EKSIK BITMIS, YAYIN YAPILMAZ.');
  process.exit(1);
}
console.log('🟢 GECTI — peteksiz oran %' + oran.toFixed(1));

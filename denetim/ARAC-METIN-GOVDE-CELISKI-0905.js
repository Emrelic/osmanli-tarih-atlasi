// 🔴 YENİ SORU — METİN İLE GÖVDE AYNI ŞEYİ Mİ SÖYLÜYOR?
//
// DOĞUŞU (5 Eylül 2026, `NEHİR SÜRTÜNME` · Girit): çekirdekte `1898-12-01`
// gününde **"Girit'e özerklik"** maddesi VAR, ve aynı gün harita Girit'i
// `s:"yunanistan"` boyuyordu — **on beş yıl erken ilhak.**
//
// ⇒ `Değişmez 2` bu günü TEMİZ geçiriyor, çünkü sorduğu soru şu:
//      *"bu kırılmanın ±30 gün içinde bir maddesi var mı?"*
//   Sormadığı soru:
//      *"madde ile gövde AYNI ŞEYİ mi söylüyor?"*
// 📌 `CLAUDE.md §11`in *"denetim var ≠ o soruyu soruyor"* ailesine yeni bir
//   üye — ve bu seferki TERS YÖNDE: madde DOĞRU, gövde YANLIŞ.
//
// NE ARAR: bir noktanın `s:` alanı YENİ bir yabancı kimliğe geçtiği günde,
// aynı güne düşen kronoloji maddesinin metni ÖZERKLİK/TÂBİİYET/HİMAYE
// anlatıyorsa — yani "tam ilhak" ile "özerklik" ÇELİŞİYORSA — bildirir.
//
// ⚠️ BU BİR DENETİM DEĞİL BİR TARAMA: çıktısı bir ADAY LİSTESİDİR.
//   Bir madde "özerklik" derken başka bir yerin özerkliğinden söz ediyor
//   olabilir. Her aday ELDEN doğrulanır. Yanlış pozitif BEKLENİR.
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2];

// ── kronoloji ────────────────────────────────────────────────────────
global.window = {};
const K = path.join(KOK, 'data');
for (const f of fs.readdirSync(K))
  if (/^(olaylar|kronoloji).*\.js$/.test(f)) {
    try { eval(fs.readFileSync(path.join(K, f), 'utf8')); } catch (e) {}
  }
const gunMadde = new Map();
let maddeSay = 0;
for (const k of Object.keys(global.window)) {
  const a = global.window[k];
  if (!Array.isArray(a)) continue;
  for (const o of a) {
    if (!o || !o.t) continue;
    maddeSay++;
    const g = o.t.length === 7 ? o.t + '-01' : o.t;
    if (!gunMadde.has(g)) gunMadde.set(g, []);
    gunMadde.get(g).push(o);
  }
}

// ÖZERKLİK/TÂBİİYET işaretleri — TAM İLHAK ile çelişen kelimeler
const OZERK = /özerk|muhtar|muhtâr|tâbi|tabi olmak|himaye|hâmi|vasal|vassal|haraçgüzar|haracguzar|imtiyaz|otonom|protector/i;
// ⚠️ "bağımsızlık" KASTEN YOK: bağımsızlık ilanı ile `s:` değişimi
//   ÇELİŞMEZ, birbirini destekler.

// ── veri ─────────────────────────────────────────────────────────────
const dosyalar = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const aday = [];
let gecis = 0, okunamayan = 0;
for (const rel of dosyalar) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) { console.log('🔴 DOSYA YOK: ' + rel); okunamayan++; continue; }
  global.window = {};
  try { eval(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.log('🔴 OKUNAMADI: ' + rel); okunamayan++; continue; }
  for (const k of Object.keys(global.window)) {
    const a = global.window[k];
    if (!Array.isArray(a)) continue;
    for (const y of a) {
      if (!y || !Array.isArray(y.s)) continue;
      for (const per of y.s) {
        if (!per || !per.f || !per.d) continue;
        gecis++;
        const m = gunMadde.get(per.f);
        if (!m) continue;
        for (const o of m) {
          const metin = String(o.b || '') + ' ' + String(o.d || '');
          if (OZERK.test(metin))
            aday.push([per.f, y.ad, per.d, (o.b || '').slice(0, 90)]);
        }
      }
    }
  }
}

console.log('kronoloji maddesi ' + maddeSay + ' · `s:` geçişi ' + gecis
            + ' · okunamayan dosya ' + okunamayan);
console.log('🔶 ADAY ÇELİŞKİ: ' + aday.length);
console.log('');
// aynı gün+kimlik tekrarlarını topla — bir olay çok noktayı etkiler
const grup = new Map();
for (const [g, ad, kim, b] of aday) {
  const anahtar = g + '|' + kim + '|' + b;
  if (!grup.has(anahtar)) grup.set(anahtar, []);
  grup.get(anahtar).push(ad);
}
const sirali = [...grup.entries()].sort((a, b) => b[1].length - a[1].length);
console.log('benzersiz (gün · kimlik · madde) üçlüsü: ' + sirali.length);
console.log('');
for (const [anahtar, adlar] of sirali.slice(0, 25)) {
  const [g, kim, b] = anahtar.split('|');
  console.log('  ' + g + '  →  s:' + kim + '   (' + adlar.length + ' nokta)');
  console.log('     madde: ' + b);
  console.log('     nokta: ' + adlar.slice(0, 6).join(' · ')
              + (adlar.length > 6 ? ' …' : ''));
}

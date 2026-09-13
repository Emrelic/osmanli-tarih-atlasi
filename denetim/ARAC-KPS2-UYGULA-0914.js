// denetim/ARAC-KPS2-UYGULA-0914.js — PAKET-KAPSAM2 · `kapsam` + `onem` UYGULAYICI
// ---------------------------------------------------------------------------
// Emsal: ARAC-KPS-UYGULA-0913.js. Varsayılan KURU koşu; yazmak için --yaz.
// Liste: ARAC-KPS2-LISTE-0914.js. olaylar_ek5.js KİLİTLİ → yalnız --ek5 ile (koordinatör "EK5 SERBEST").
// Hedef maddenin `b:` sabitinin ÖNÜNE eklenir:
//   kapsam yok + onem yok        → `kapsam:"dis", onem:N, `
//   kapsam "dis" + onem yok      → `onem:N, `
//   kapsam "dis" + onem === N    → ZATEN (atlanır, sayılır — idempotent)
//   başka her hâl (var olan onem ≠ N, kapsam "ic"/"konu")  → ÇÖKER, dosya yazılmaz (değer EZİLMEZ)
// GÜVENLİK: ① t + b başı listedekiyle aynı ② kaynakta tek b sabiti adayı ③ yazım sonrası yeniden
// yükleme: dizi uzunlukları aynı · hedef dışı her madde JSON birebir · hedeflerde yalnız kapsam/onem
// değişti · bayt farkı = eklenen metin ④ yazacak bir şey varsa: disk == git HEAD (başka oturumun
// yarım yazımı varsa ÇÖKER).
//
//   node denetim/ARAC-KPS2-UYGULA-0914.js [--yaz] [--ek5]
//   node denetim/ARAC-KPS2-UYGULA-0914.js --sinav [--ek5]   YALNIZ-ALAN SINAVI (dosya başına iki soru):
//     (a) HEAD ile disk, iki yanda da `kapsam`+`onem` SİLİNİNCE madde madde birebir mi
//     (b) AYNI uygulama HEAD metnine yapılınca disk metni BAYT BAYT çıkıyor mu (disk = HEAD + yalnız eklerimiz)
//   ⚠️ İlk sürüm (b)'yi "diskten ek dizgilerini regex'le sil" diye yapıyordu ve ek16'da SAHTE FARK verdi:
//      Gaeta'da `kapsam:"dis", ` ZATEN VARDI, biz yalnız `onem:3, ` ekledik; regex ikisini birlikte
//      sildi. Ters yön (HEAD'e uygula → diske eşit mi) bu belirsizliği taşımaz.
// ---------------------------------------------------------------------------
const fs = require('fs'), path = require('path'), vm = require('vm'), cp = require('child_process');
const KOK = path.join(__dirname, '..'), DATA = path.join(KOK, 'data');
const LISTE = require('./ARAC-KPS2-LISTE-0914.js');
const YAZ = process.argv.includes('--yaz'), EK5 = process.argv.includes('--ek5'), SINAV = process.argv.includes('--sinav');
const KILITLI = new Set(EK5 ? [] : ['olaylar_ek5.js']);

function yukle(code, f) {
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx, { filename: f });
  const anahtarlar = Object.keys(ctx.window).filter(k => k.startsWith('OLAYLAR') && Array.isArray(ctx.window[k]));
  return { dizi: anahtarlar.flatMap(k => ctx.window[k]), uzun: anahtarlar.map(k => ctx.window[k].length) };
}
// Regex bir `b:` yazımını yanlış tırnak çiftiyle yakalarsa (ör. metin içinde `b: "` geçen bir alan)
// sabit ayrıştırılamaz → null döner; null hiçbir m.b ile eşleşmez, aday sınavı (tam 1 aday) yine bağlar.
function sabit(ham, tirnak) { try { return vm.runInNewContext(tirnak + ham + tirnak); } catch (e) { return null; } }
function head(f) { return cp.execFileSync('git', ['show', 'HEAD:data/' + f], { cwd: KOK, encoding: 'utf8', maxBuffer: 64 << 20 }); }
function ekMetni(m, h) {
  if (m.kapsam === undefined && m.onem === undefined) return 'kapsam:"dis", onem:' + h.onem + ', ';
  if (m.kapsam === 'dis' && m.onem === undefined) return 'onem:' + h.onem + ', ';
  if (m.kapsam === 'dis' && m.onem === h.onem) return '';
  throw new Error(h.anahtar + ': mevcut kapsam=' + m.kapsam + ' onem=' + m.onem + ' — EZİLMEZ');
}
const soy = o => { const k = Object.assign({}, o); delete k.kapsam; delete k.onem; return JSON.stringify(k); };

// Tek uygulama çekirdeği — hem --yaz hem --sinav bunu kullanır (D045: iki mantık taşınmaz).
function uygula(once, f, hedefler) {
  const Y = yukle(once, f);
  const bSab = [...once.matchAll(/\bb\s*:\s*(["'])((?:(?!\1)[^\\]|\\.)*)\1/g)].map(m => ({ ix: m.index, deger: sabit(m[2], m[1]) }));
  const tSab = [...once.matchAll(/\bt\s*:\s*(["'])((?:(?!\1)[^\\]|\\.)*)\1/g)].map(m => ({ ix: m.index, deger: sabit(m[2], m[1]) }));
  const ekle = []; let zaten = 0;
  for (const h of hedefler) {
    const m = Y.dizi[h.i];
    if (!m) throw new Error(h.anahtar + ': madde YOK');
    if (m.t !== h.t || !String(m.b).startsWith(h.bBas)) throw new Error(h.anahtar + ': t/b TUTMUYOR → ' + m.t + ' | ' + m.b);
    const metin = ekMetni(m, h);
    if (!metin) { zaten++; continue; }
    let aday = bSab.filter(x => x.deger === m.b);
    if (aday.length > 1) aday = aday.filter(x => { const onceT = tSab.filter(tt => tt.ix < x.ix).pop(); return onceT && onceT.deger === m.t; });
    if (aday.length !== 1) throw new Error(h.anahtar + ': kaynakta b sabiti ' + aday.length + ' aday');
    ekle.push({ ix: aday[0].ix, metin, h });
  }
  if (new Set(ekle.map(e => e.ix)).size !== ekle.length) throw new Error(f + ': iki hedef aynı b sabitine düştü');
  let sonra = once;
  for (const e of ekle.slice().sort((a, b) => b.ix - a.ix)) sonra = sonra.slice(0, e.ix) + e.metin + sonra.slice(e.ix);
  if (ekle.length) {
    const S = yukle(sonra, f);
    if (JSON.stringify(S.uzun) !== JSON.stringify(Y.uzun)) throw new Error(f + ': dizi uzunluğu değişti');
    const hi = new Map(ekle.map(e => [e.h.i, e.h]));
    for (let j = 0; j < Y.dizi.length; j++) {
      const a = Y.dizi[j], b = S.dizi[j];
      if (hi.has(j)) {
        if (b.kapsam !== 'dis' || b.onem !== hi.get(j).onem) throw new Error(f + '#' + j + ': kapsam/onem inmedi');
        if (soy(a) !== soy(b)) throw new Error(f + '#' + j + ': başka alan değişti');
      } else if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(f + '#' + j + ': hedef DIŞI madde değişti');
    }
    if (sonra.length - once.length !== ekle.reduce((s, e) => s + e.metin.length, 0)) throw new Error(f + ': bayt farkı beklenmedik');
  }
  return { sonra, ekle, zaten };
}

const dosyaHedef = {};
const tekrar = LISTE.map(x => x[0]).filter((x, j, a) => a.indexOf(x) !== j);
if (tekrar.length) throw new Error('listede mükerrer anahtar: ' + tekrar.join(', '));
for (const [anahtar, t, bBas, onem] of LISTE) {
  const [f, i] = anahtar.split('#');
  if (![2, 3, 4, 5].includes(onem)) throw new Error(anahtar + ': onem ' + onem);
  (dosyaHedef[f] = dosyaHedef[f] || []).push({ i: +i, t, bBas, onem, anahtar });
}

if (SINAV) {
  let madde = 0, fark = 0, metinFark = 0, dosya = 0;
  for (const [f, hedefler] of Object.entries(dosyaHedef)) {
    if (KILITLI.has(f)) { console.log('  ' + f.padEnd(20) + 'KİLİTLİ — sınav dışı'); continue; }
    const hm = head(f), dm = fs.readFileSync(path.join(DATA, f), 'utf8');
    const H = yukle(hm, f), D = yukle(dm, f);
    if (JSON.stringify(H.uzun) !== JSON.stringify(D.uzun)) { console.log('  ' + f + ': DİZİ UZUNLUĞU FARKLI'); fark++; continue; }
    let df = 0;
    for (let j = 0; j < H.dizi.length; j++) { madde++; if (soy(H.dizi[j]) !== soy(D.dizi[j])) { df++; console.log('  FARK ' + f + '#' + j); } }
    const u = uygula(hm, f, hedefler);
    const mf = u.sonra === dm ? 0 : 1;
    fark += df; metinFark += mf; dosya++;
    console.log('  ' + f.padEnd(20) + 'madde ' + H.dizi.length + ' · (a) alan-dışı fark ' + df + ' · (b) HEAD+' + u.ekle.length + ' ek = disk ' + (mf ? 'FARKLI' : 'BİREBİR'));
  }
  console.log('YALNIZ-ALAN SINAVI · ' + dosya + ' dosya · ' + madde + ' madde · alan-dışı fark ' + fark + ' · metin farkı ' + metinFark + (fark || metinFark ? '  ✗' : '  ✓'));
  process.exit(fark || metinFark ? 1 : 0);
}

let toplam = 0, zatenToplam = 0, kilitli = 0;
const rapor = {};
for (const [f, hedefler] of Object.entries(dosyaHedef)) {
  if (KILITLI.has(f)) { kilitli += hedefler.length; rapor[f] = 'KİLİTLİ — ' + hedefler.length + ' madde bekliyor (--ek5)'; continue; }
  const yol = path.join(DATA, f);
  const once = fs.readFileSync(yol, 'utf8');
  const u = uygula(once, f, hedefler);
  zatenToplam += u.zaten;
  if (!u.ekle.length) { rapor[f] = '0 yeni · ' + u.zaten + ' zaten'; continue; }
  // ④ HEAD sınavı yalnız YAZILACAK bir şey varken — ikinci koşuda (hepsi "zaten") kendi yazımımız
  //   HEAD'den farklı olduğu için idempotent koşuyu çökertiyordu (ölçüldü, ilk sürüm).
  if (once !== head(f)) throw new Error(f + ': disk HEAD ile AYNI DEĞİL — başka bir yazım var, DUR');
  rapor[f] = u.ekle.length + ' yeni · ' + u.zaten + ' zaten'; toplam += u.ekle.length;
  if (YAZ) fs.writeFileSync(yol, u.sonra, 'utf8');
}
console.log((YAZ ? 'YAZILDI' : 'KURU KOŞU (yazmak için --yaz)') + ' · yeni ' + toplam + ' · zaten ' + zatenToplam + ' · kilitli ' + kilitli + ' · ' + Object.keys(rapor).length + ' dosya');
for (const [f, n] of Object.entries(rapor)) console.log('  ' + f.padEnd(22) + n);

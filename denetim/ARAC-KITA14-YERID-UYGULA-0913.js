// KITA 14 · 13 Eylül 2026 · YAMA-YER-ID-0913.json kararlarını data/ olaylar dosyalarına uygular.
// Karar tabanı: denetim/ARAC-KITA14-YERID-0913.js ölçümü (yerleşim noktası ↔ öneri sapması).
// 🔴 yer_kon DEĞERİ ÖNERİDEN DEĞİL, AYNI ADLI YERLEŞİM NOKTASINDAN alınır (1.MURAT M-3747).
// Güvenlik: her hedef dizgi dosyada TAM 1 kez geçmeli; değilse o kalem ATLANIR ve basılır.
// Kullanım: node denetim/ARAC-KITA14-YERID-UYGULA-0913.js [--kuru]
const fs = require('fs');
const KURU = process.argv.includes('--kuru');

// [dosya, t, b, yer_kon(nokta), nokta adı]
const YERKON = [
  ['olaylar_ek22.js', '1794-01-01', "Zend hânedanının sonu — İran'da Kaçar hâkimiyeti", [30.28, 57.08], 'Kirman'],
  ['olaylar_ek8.js', '1840-10-08', "Hawaii'nin ilk yazılı anayasası ilan edildi", [21.3069, -157.8583], 'Honolulu'],
  ['olaylar_ek8.js', '1887-07-06', "Süngü Anayasası — Kral Kalākaua'nın yetkileri budandı", [21.3069, -157.8583], 'Honolulu'],
  ['olaylar_ek8.js', '1894-07-04', "Hawaii Cumhuriyeti ilan edildi", [21.3069, -157.8583], 'Honolulu'],
  ['olaylar_ek8.js', '1893-09-19', "Yeni Zelanda kadınlara oy hakkı tanıyan ilk kendi kendini yöneten ülke oldu", [-41.2865, 174.7762], 'Wellington'],
  ['olaylar_ek8.js', '1468-01-01', "Kâsım Han'ın ölümü, Danyal Han'ın tahta çıkışı (Kasım Hanlığı)", [54.945, 41.393], 'Kasimov'],
  ['olaylar_ek8.js', '1609-01-01', "Rus kuvvetlerinin Kasım şehrini zaptı, Uraz Muhammed Han", [54.945, 41.393], 'Kasimov'],
  ['olaylar_ek8.js', '1793-05-20', "Timur Şah'ın ölümü, Zaman Şah'ın cülûsu (Dürrânî Devleti)", [34.528, 69.172], 'Kâbil'],
  ['olaylar_ek8.js', '1920-04-26', "Hârizm Halk Cumhuriyeti ilan edildi", [41.3783, 60.3639], 'Hîve'],
  ['olaylar_ek8.js', '1921-09-05', "Hârizm Sovyet Sosyalist Cumhuriyeti'ne dönüşüm", [41.3783, 60.3639], 'Hîve'],
  ['olaylar_ek8.js', '1920-10-08', "Buhara Halk Sovyet Cumhuriyeti ilan edildi", [39.7681, 64.421], 'Buhara'],
  ['olaylar_ek8.js', '1921-09-01', "Buhara Halk Sovyet Cumhuriyeti yeni anayasası kabul edildi", [39.7681, 64.421], 'Buhara'],
  ['olaylar_ok109.js', '1918-10-31', "Pat Çiçeği Devrimi — Macaristan halk cumhuriyeti ilân edildi", [47.498, 19.04], 'Budin'],
  ['olaylar_ok109.js', '1918-11-18', "İmparator Karl'ın çekilişi — Habsburg hânedanının sonu", [48.208, 16.373], 'Viyana'],
];

let uyg = 0, atl = 0;
const yaz = {};
const icerik = f => (yaz[f] = yaz[f] ?? fs.readFileSync('data/' + f, 'utf8'));
const say = (s, p) => s.split(p).length - 1;

// --atla <dosya> : başka bir yazarın commit'siz değişikliği olan dosyaya dokunma
const ATLA = new Set(process.argv.flatMap((a, i, A) => a === '--atla' ? [A[i + 1]] : []));
for (const [f, t, b, k, ad] of YERKON) {
  if (ATLA.has(f)) { console.log(`BEKLETİLDİ (--atla) ${f} ${t} ${b}`); atl++; continue; }
  let s = icerik(f);
  const kalip = [`b:"${b}"`, `"b": "${b}"`, `b: "${b}"`].find(p => say(s, p) === 1);
  if (!kalip) { console.log(`ATLANDI (b tekil değil/yok) ${f} ${t} ${b}`); atl++; continue; }
  const i = s.indexOf(kalip);
  // aynı kayıtta t: kontrolü — kalıbın 400 karakter öncesinde t değeri geçmeli
  if (!s.slice(Math.max(0, i - 400), i).includes(t)) { console.log(`ATLANDI (t eşleşmedi) ${f} ${t} ${b}`); atl++; continue; }
  const blok = s.slice(i, i + 4000);
  const son = blok.search(/\n\s*\}|\}\s*,?\s*\n/);
  if (/yer_kon|kapsam_genis/.test(blok.slice(0, son > 0 ? son : 800))) { console.log(`ATLANDI (alan zaten var) ${f} ${t}`); atl++; continue; }
  const ek = kalip.startsWith('"') ? `, "yer_kon": [${k[0]}, ${k[1]}]` : `, yer_kon:[${k[0]},${k[1]}]`;
  yaz[f] = s.slice(0, i + kalip.length) + ek + s.slice(i + kalip.length);
  console.log(`UYGULANDI yer_kon ${f} ${t} ← ${ad} [${k}]`); uyg++;
}

// Darfur yazım düzeltmesi (2 kayıt)
{
  const f = 'olaylar_ek15.js', s = icerik(f), eski = 'yer_id:"Dârfûr"';
  const n = say(s, eski);
  if (n === 2) { yaz[f] = s.split(eski).join('yer_id:"Darfur"'); console.log('UYGULANDI yer_id Dârfûr → Darfur ×2'); uyg += 2; }
  else { console.log(`ATLANDI Darfur — beklenen 2, bulunan ${n}`); atl += 2; }
}

console.log(`\nuygulandı ${uyg} · atlandı ${atl}${KURU ? ' · KURU KOŞU, dosya yazılmadı' : ''}`);
// 🔴 yalnız DEĞİŞEN dosya yazılır — okunup atlanan dosyayı geri yazmak, o arada başka bir
//    oturumun yaptığı değişikliği ezer (paylaşılan data/, §7).
if (!KURU) for (const [f, s] of Object.entries(yaz)) {
  if (s !== fs.readFileSync('data/' + f, 'utf8')) { fs.writeFileSync('data/' + f, s, 'utf8'); console.log('yazıldı:', f); }
}

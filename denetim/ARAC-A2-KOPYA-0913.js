// ============================================================================
// ARAC-A2-KOPYA-0913 — taslak kartlar için TELİF (kopya) ve UYDURMA-SAYI sınavı
// ============================================================================
//   node denetim/ARAC-A2-KOPYA-0913.js <taslak.json> <kaynak-dizini> [kaynak-dizini2 ...]
//
// Her kartın `kaynak` alanından "TDV: <slug>" adlarını çıkarır; kaynak dizinlerinde
// adında o slug geçen .txt (yoksa .html → etiketler atılır) dosyalarını kaynak gövdesi
// olarak yükler. Sonra kartın BÜTÜN metin alanlarını (string, iç içe dahil) o gövdelerle
// karşılaştırır:
//
//  ① EN UZUN ORTAK KELİME DİZİSİ (normalleştirilmiş: Türkçe harf eşlemesi + noktalama atımı).
//     Eşik: ≥ 12 kelime → 🔴 KOPYA ŞÜPHESİ · 8-11 → 🟡 elle bak · < 8 → 🟢.
//     (Kısa ortak diziler — özel adlar, eser adları, tarih ifadeleri — kaçınılmazdır; eşik
//     tam cümle aktarımını yakalamak için.)
//  ② KAYNAKTA OLMAYAN SAYILAR: kartta geçen her sayı (≥ 2 hane; 1.000 / 25,50 / 16,78
//     biçimleri dahil) kaynak gövdelerinin hiçbirinde geçmiyorsa listelenir.
//     ⚠️ Bu bir UYDURMA KANITI değildir: türetilmiş sayı (1049 → 1639 miladi çevirisi,
//     "altmış sekiz yıl" hesabı), atlas maddesinden alınan gün, ya da kaynağın yazıyla
//     verdiği sayı da buraya düşer. Liste ELLE okunur.
//  ③ Kaynak gövdesi BULUNAMAYAN slug → kart ölçülemedi (temiz sayılmaz — D015).
//
// Çıkış kodu: 🔴 kopya şüphesi ya da ölçülemeyen kart varsa 1.
// ============================================================================
const fs = require('fs');
const path = require('path');

const [taslakYol, ...dizinler] = process.argv.slice(2);
if (!taslakYol || !dizinler.length) {
  console.log('kullanım: node denetim/ARAC-A2-KOPYA-0913.js <taslak.json> <kaynak-dizini> [...]');
  process.exit(2);
}

function norm(s) {
  return String(s == null ? '' : s)
    .replace(/[İIı]/g, 'i').replace(/[Şş]/g, 's').replace(/[Ğğ]/g, 'g')
    .replace(/[Üü]/g, 'u').replace(/[Öö]/g, 'o').replace(/[Çç]/g, 'c')
    .replace(/[Ââ]/g, 'a').replace(/[Îî]/g, 'i').replace(/[Ûû]/g, 'u')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['‘’`ʼ‘]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
function htmlMetin(h) {
  return h.replace(/<(script|style|noscript)[^>]*>[\s\S]*?<\/\1>/gi, ' ')
          .replace(/<[^>]+>/g, ' ')
          .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
          .replace(/&#39;|&rsquo;|&lsquo;/g, "'").replace(/&#(\d+);/g, (m, d) => String.fromCharCode(+d));
}
function metinAlanlari(o, cikti = []) {
  if (typeof o === 'string') cikti.push(o);
  else if (Array.isArray(o)) o.forEach(x => metinAlanlari(x, cikti));
  else if (o && typeof o === 'object') {
    for (const [k, v] of Object.entries(o)) {
      if (['id', 'tur', 'olay', 'baglanti', 't', 'kaynak', 'kesinlik', 'kisi', 'url', 'gorsel_kaynak', 'lisans', 'lisans_olcum'].includes(k)) continue;
      metinAlanlari(v, cikti);
    }
  }
  return cikti;
}
// kaynak dizinlerindeki bütün dosyalar (bir kez listelenir)
const dosyalar = [];
for (const d of dizinler) {
  if (!fs.existsSync(d)) { console.log('⚠ dizin yok:', d); continue; }
  for (const f of fs.readdirSync(d)) if (/\.(txt|html?)$/i.test(f)) dosyalar.push(path.join(d, f));
}
// 🔴 İlk sürüm adında slug GEÇEN dosyayı alıyordu: 249 dosyalık bir dizinde `timur` ya da
// `rusya` gibi kısa bir slug BAŞKA maddenin gövdesine düşebilirdi (§4② aynı-ad tuzağının
// alet yüzü). Şimdi önce TAM ad (<slug>.txt / <slug>.html), yoksa önekli aday — ve hangi
// dosyanın alındığı her kartta basılır.
function kaynakGovdesi(slug) {
  const s = slug.toLowerCase();
  const ad = f => path.basename(f).toLowerCase();
  const tam = dosyalar.filter(f => ad(f) === s + '.txt' || ad(f) === s + '.html' || ad(f) === s + '.htm');
  const aday = tam.length ? tam : dosyalar.filter(f => ad(f).startsWith(s + '.') || ad(f).startsWith(s + '_'));
  const txt = aday.find(f => /\.txt$/i.test(f));
  const sec = txt || aday[0];
  if (!sec) return null;
  const ham = fs.readFileSync(sec, 'utf8');
  return { dosya: path.basename(sec), metin: /\.txt$/i.test(sec) ? ham : htmlMetin(ham) };
}
// en uzun ortak kelime dizisi: kaynağın bütün k-gram'larını küme olarak tutup kartın
// her başlangıç noktasından ileri uzatmak (kaynak birkaç on bin kelime — yeterince hızlı)
function enUzunOrtak(kartKelime, kaynakKelime) {
  const K = 5;
  const tohum = new Map();
  for (let i = 0; i + K <= kaynakKelime.length; i++) {
    const g = kaynakKelime.slice(i, i + K).join(' ');
    if (!tohum.has(g)) tohum.set(g, []);
    tohum.get(g).push(i);
  }
  let enIyi = { n: 0, parca: '' };
  for (let j = 0; j + K <= kartKelime.length; j++) {
    const g = kartKelime.slice(j, j + K).join(' ');
    const yerler = tohum.get(g);
    if (!yerler) continue;
    for (const i of yerler) {
      let n = K;
      while (j + n < kartKelime.length && i + n < kaynakKelime.length && kartKelime[j + n] === kaynakKelime[i + n]) n++;
      if (n > enIyi.n) enIyi = { n, parca: kartKelime.slice(j, j + n).join(' ') };
    }
  }
  return enIyi;
}
const SAYI = /\d{1,3}(?:[.,]\d{3})+(?:,\d+)?|\d+(?:,\d+)?/g;
function sayilar(s) {
  return [...new Set((String(s).match(SAYI) || []).filter(x => x.replace(/\D/g, '').length >= 2))];
}

const taslak = JSON.parse(fs.readFileSync(taslakYol, 'utf8'));
const kartlar = Array.isArray(taslak) ? taslak : (taslak.kartlar || []);
let kirmizi = 0, olculemedi = 0;
console.log(`taslak: ${path.basename(taslakYol)} · ${kartlar.length} kart · kaynak dosyası: ${dosyalar.length}`);

for (const c of kartlar) {
  // 🔴 İlk sürüm yalnız "TDV: <slug>" biçimini okuyordu; "TDV: a (gövde okundu) · b (gövde okundu)"
  // yazımında b SESSİZCE ölçülmüyordu (D015). Şimdi iki biçim birleşir. Bilerek ALINMAYANLAR:
  // "(302)" ölü sluglar ve "(200 ama YANLIŞ MADDE…)" — yanlış maddenin gövdesi ölçüt olamaz.
  const kaynakMetin = String(c.kaynak || '');
  const slugs = [...new Set([
    ...[...kaynakMetin.matchAll(/TDV:\s*([a-z0-9][a-z0-9-]*[a-z0-9])/gi)].map(m => m[1]),
    ...[...kaynakMetin.matchAll(/([a-z0-9][a-z0-9-]*[a-z0-9])\s*\((?:gövde okundu|HTTP 200)/gi)].map(m => m[1])
  ])];
  const govdeler = slugs.map(s => [s, kaynakGovdesi(s)]);
  const bulunan = govdeler.filter(([, g]) => g);
  const eksik = govdeler.filter(([, g]) => !g).map(([s]) => s);
  const kartMetin = metinAlanlari(c).join('\n');
  const kartKelime = norm(kartMetin).split(' ').filter(Boolean);
  console.log(`\n• ${c.id} [${c.tur}] · ${kartKelime.length} kelime · slug: ${slugs.join(', ') || '(yok)'}`);
  if (!bulunan.length) {
    olculemedi++;
    console.log(`  ⚪ ÖLÇÜLEMEDİ — kaynak gövdesi bulunamadı (${eksik.join(', ') || 'TDV slug yok'}); TEMİZ SAYILMAZ`);
    continue;
  }
  if (eksik.length) console.log(`  ⚪ gövdesi bulunamayan slug: ${eksik.join(', ')} (o kısım ölçülmedi)`);
  let enIyi = { n: 0, parca: '', dosya: '' };
  let kaynakHam = '';
  for (const [, g] of bulunan) {
    kaynakHam += '\n' + g.metin;
    const r = enUzunOrtak(kartKelime, norm(g.metin).split(' ').filter(Boolean));
    if (r.n > enIyi.n) enIyi = Object.assign(r, { dosya: g.dosya });
  }
  const etiket = enIyi.n >= 12 ? '🔴 KOPYA ŞÜPHESİ' : enIyi.n >= 8 ? '🟡 elle bak' : '🟢';
  if (enIyi.n >= 12) kirmizi++;
  console.log(`  ① en uzun ortak dizi: ${enIyi.n} kelime ${etiket}${enIyi.n >= 8 ? ` — "${enIyi.parca}" [${enIyi.dosya}]` : ''}`);
  const kaynakSayi = new Set(sayilar(kaynakHam).map(x => x.replace(/\./g, '')));
  const yok = sayilar(kartMetin).filter(x => !kaynakSayi.has(x.replace(/\./g, '')));
  console.log(`  ② kaynakta GEÇMEYEN sayı: ${yok.length ? yok.join(' · ') : '(yok)'}`);
}
console.log(`\nÖZET: ${kartlar.length} kart · 🔴 kopya şüphesi ${kirmizi} · ⚪ ölçülemedi ${olculemedi}`);
process.exit(kirmizi || olculemedi ? 1 : 0);

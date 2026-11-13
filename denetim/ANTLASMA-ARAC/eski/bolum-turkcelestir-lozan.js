const fs = require('fs');
const f = 'data/antlasma_madde_lozan.js';
let s = fs.readFileSync(f, 'utf8');
const KISIM = {
  'Part I. Political Clauses': 'Kısım I. Siyasî Hükümler',
  'Part II. Financial Clauses': 'Kısım II. Malî Hükümler',
  'Part III. Economic Clauses': 'Kısım III. İktisadî Hükümler',
  'Part III. Economic clauses': 'Kısım III. İktisadî Hükümler',
  'Part IV. Communications and sanitary questions': 'Kısım IV. Ulaşım ve Sağlık Meseleleri',
  'Part V. Miscellaneous provisions': 'Kısım V. Çeşitli Hükümler'
};
const BOLUM = {
  'Section I. I. Territorial Clauses': 'Bölüm I. Toprak Hükümleri',
  'Section I. 2. Special Provisions': 'Bölüm I. Toprak Hükümleri — Özel Hükümler',
  'Section II. Nationality': 'Bölüm II. Uyrukluk',
  'Section III. Protection of Minorities': 'Bölüm III. Azınlıkların Korunması',
  'Section I. Ottoman Public Debt': 'Bölüm I. Osmanlı Düyun-ı Umumiyesi',
  'Section II. Miscellaneous Clauses': 'Bölüm II. Çeşitli Hükümler',
  'Section I. Property, Rights And Interests': 'Bölüm I. Mallar, Haklar ve Menfaatler',
  'Section II. Contracts, Prescriptions And Judgments': 'Bölüm II. Sözleşmeler, Zamanaşımı ve Hükümler',
  'Section III. Debts': 'Bölüm III. Borçlar',
  'Section IV. Industrial, Literary And Artistic Property': 'Bölüm IV. Sınaî, Edebî ve Bediî Mülkiyet',
  'Section V. Mixed Arbitral Tribunal': 'Bölüm V. Karma Hakem Mahkemesi',
  'Section VI. Treaties': 'Bölüm VI. Antlaşmalar',
  'Section I. Communications': 'Bölüm I. Ulaşım',
  'Section II. Sanitary Questions': 'Bölüm II. Sağlık Meseleleri',
  'Section I. Prisoners of War': 'Bölüm I. Esirler',
  'Section II. Graves': 'Bölüm II. Mezarlar',
  'Section III. General Provisions': 'Bölüm III. Genel Hükümler'
};
let n = 0;
s = s.replace(/"bolum": "([^"]+)"/g, (m, b) => {
  const parcalar = b.split(/ \/ | — /);
  const k = KISIM[parcalar[0]];
  if (!k) return m;
  let sonuc = k;
  if (parcalar[1]) {
    const bl = BOLUM[parcalar[1]];
    if (!bl) { console.log('EŞLEŞMEDİ', b); return m; }
    sonuc += ' / ' + bl;
  }
  n++;
  return '"bolum": "' + sonuc + '"';
});
console.log('bolum değişen', n);
const eski = 'TDV «Lozan Antlaşması» ile karşılaştırma yapılamadı (sunucu engeli) — ölçülmedi.';
if (s.split(eski).length !== 2) { console.log('kaynak cümlesi bulunamadı'); process.exit(1); }
s = s.replace(eski, () => 'Metin, TDV «Lozan Antlaşması», «Musul Meselesi», «Oniki Ada», «Montrö Boğazlar Sözleşmesi», «Batı Trakya», «Antakya» ve «Düyûn-ı Umûmiyye» sayfalarıyla 13 Kasım 2026\'da gözle karşılaştırıldı (LAB); bulunan farklar düzeltildi.');
fs.writeFileSync(f, s);
console.log('ok');

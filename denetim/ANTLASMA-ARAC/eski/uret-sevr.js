const fs = require('fs');
const D = 'C:/Users/user/AppData/Local/Temp/claude/61bcdfa88cf2fd72/7ea5230f-a702-4a9c-8d48-cce9758d2aeb/scratchpad/';
const a = JSON.parse(fs.readFileSync(D + 'sevr-1-216.json', 'utf8'));
const b = JSON.parse(fs.readFileSync(D + 'sevr-217-433.json', 'utf8'));
const yerler = {
  "Yunanistan": [22.0, 39.5], "Karadeniz": [34.5, 43.0], "Boğaziçi": [29.07, 41.12], "Çatalca": [28.46, 41.14],
  "Çorlu": [27.8, 41.16], "Marmara Denizi": [28.2, 40.7], "Çanakkale Boğazı": [26.4, 40.15], "Akdeniz": [30.0, 35.0],
  "İskenderun Körfezi": [36.1, 36.6], "Suriye": [38.0, 35.5], "Ceyhan": [35.8, 37.03], "Antep": [37.38, 37.06],
  "Birecik": [37.98, 37.03], "Urfa": [38.79, 37.16], "Mardin": [40.74, 37.31], "Cizre": [42.19, 37.33],
  "Mezopotamya": [44.0, 33.5], "Musul": [43.13, 36.34], "Amadiye": [43.49, 37.09], "İstanbul": [28.98, 41.01],
  "Boğazlar": [28.0, 40.6], "Haydarpaşa": [29.02, 40.99], "Limni": [25.1, 39.9], "İmroz": [25.9, 40.16],
  "Semadirek": [25.52, 40.5], "Bozcaada": [26.05, 39.83], "Midilli": [26.55, 39.1], "Kürdistan": [42.0, 38.0],
  "Ermenistan": [43.5, 40.0], "İzmir": [27.13, 38.42], "Ege Denizi": [25.2, 38.5], "Ayasuluk": [27.37, 37.95],
  "Ödemiş": [27.97, 38.23], "Manisa": [27.43, 38.62], "Alaşehir": [28.52, 38.35], "Salihli": [28.14, 38.48],
  "Kırkağaç": [27.67, 39.1], "Soma": [27.61, 39.19], "Akhisar": [27.84, 38.92], "Çandarlı": [26.93, 38.93],
  "Foça": [26.76, 38.67], "Doğu Trakya": [27.0, 41.3], "Edirne": [26.556, 41.677], "Marmara Adaları": [27.6, 40.6],
  "Sakız": [26.14, 38.37], "Sisam": [26.98, 37.75], "İkarya": [26.15, 37.6], "Rodos": [28.226, 36.443],
  "Trakya": [27.0, 41.3], "Erzurum": [41.27, 39.9], "Trabzon": [39.72, 41.0], "Van": [43.38, 38.5],
  "Bitlis": [42.12, 38.4], "Azerbaycan": [47.5, 40.4], "Gürcistan": [43.5, 42.0], "Filistin": [35.0, 31.8],
  "Hicaz": [39.8, 21.5], "Mekke": [39.83, 21.42], "Medine": [39.61, 24.47], "Mısır": [31.2, 30.0],
  "Süveyş Kanalı": [32.35, 30.6], "Sudan": [32.5, 15.6], "Sevâkin": [37.33, 19.1], "Kıbrıs": [33.4, 35.15],
  "Fas": [-7.6, 33.6], "Tunus": [10.18, 36.8], "Libya": [13.2, 32.9], "İstanpalya": [26.35, 36.55],
  "Kerpe": [27.2, 35.7], "Kaşot": [26.93, 35.4], "Tilos": [27.4, 36.43], "Nisiros": [27.17, 36.6],
  "Kalimnos": [26.98, 36.95], "Leros": [26.85, 37.15], "Patmos": [26.55, 37.32], "Lipsos": [26.75, 37.3],
  "Simi": [27.85, 36.6], "Kos": [27.1, 36.9], "Meis": [29.59, 36.14], "Saroz Körfezi": [26.5, 40.5],
  "Rodosto": [27.5, 40.98], "Malkara": [26.9, 40.9], "Edremit Körfezi": [26.9, 39.5], "Bursa": [29.06, 40.19],
  "İznik": [29.72, 40.43], "İzmit": [29.92, 40.77], "Mudanya": [28.38, 40.38], "Bandırma": [27.97, 40.35],
  "Susurluk": [28.16, 39.91], "Manyas Gölü": [27.97, 40.2], "Gelibolu Yarımadası": [26.6, 40.35],
  "İstanbul Boğazı": [29.07, 41.12], "İskenderun": [36.17, 36.59], "Hayfa": [34.99, 32.8], "Basra": [47.78, 30.5],
  "Batum": [41.64, 41.65], "Meriç": [26.4, 41.15], "Köstence": [28.65, 44.18], "Cidde": [39.17, 21.54],
  "Lazkiye": [35.78, 35.52], "Sen Stefano": [28.8, 40.97], "Dolmabahçe": [29.0, 41.04]
};
const mad = (a.maddeler || a).concat(b.maddeler || b).sort((x, y) => x.no - y.no);
const eks = []; for (let i = 1; i <= 433; i++) if (!mad.find(x => x.no === i)) eks.push(i);
if (eks.length || mad.length !== 433) { console.log('EKSIK', eks); process.exit(1); }
const yf = x => (x.yer || []).filter(y => yerler[y]);
// Siyasi/toprak kısımları (md. 27-139) TEK TEK; öteki kısımlar aynı bölümde en çok 6 madde/adım.
const adimlar = [];
let i = 0;
while (i < mad.length) {
  const x = mad[i];
  if (x.no >= 27 && x.no <= 139) {
    adimlar.push({ no: String(x.no), bolum: x.bolum, ozet: x.ozet, yer: yf(x), konu: x.konu, dogrulanmadi: !!x.belirsiz });
    i++; continue;
  }
  const grup = [x];
  while (grup.length < 6 && i + grup.length < mad.length) {
    const y = mad[i + grup.length];
    if ((y.no >= 27 && y.no <= 139) || y.bolum !== x.bolum || !!y.belirsiz !== !!x.belirsiz) break;
    grup.push(y);
  }
  const aralik = grup.length === 1 ? String(x.no) : x.no + '-' + grup[grup.length - 1].no;
  const yer = []; grup.forEach(g => yf(g).forEach(p => { if (!yer.includes(p)) yer.push(p); }));
  adimlar.push({
    no: aralik, bolum: x.bolum,
    ozet: grup.map(g => (grup.length > 1 ? 'md. ' + g.no + ': ' : '') + g.ozet).join(' '),
    yer, konu: x.konu, dogrulanmadi: !!x.belirsiz
  });
  i += grup.length;
}
const kayit = {
  id: 'sevr-1920', ad: 'Sevr Antlaşması', t: '1920-08-10', kadraj: [19.0, 29.0, 47.0, 43.0],
  kaynak: 'Ham metin: Sevr Antlaşması İngilizce metni (Wikisource «Treaty of Sèvres» Part II-XIII, BYU Kütüphanesi sürümünden derlenmiş) ve Kısım I Milletler Cemiyeti Misakı (Versay Part 1 ile ortak metin). Özetler ham metinden KENDİ cümlemizle yazıldı; md. 27-139 (sınırlar ve siyasi hükümler) tek tek, öteki kısımlar en çok 6 maddelik adımlarda (adım başlığında madde aralığı). BEYAN: md. 374-414 (Kısım XII Çalışma) Sevr\'in kendi sayfasından değil Versay\'daki aynı Çalışma Anayasası metninden eşlenerek yazıldı → «İÇERİK DOĞRULANMADI» işaretli; md. 221 OCR bozuk; Ek I (Osmanlı borç listesi) ham metinde yok; askerî tablolar özetlenmedi. TDV «Sevr Antlaşması» ile karşılaştırma yapılmadı (ölçülmedi). `yerler` YAKLAŞIK odak noktalarıdır, sınır çizgisi değildir.',
  yerler, adimlar
};
const kod =
  '// ============================================================================\n' +
  '// ANTLAŞMA MADDELERİ — SEVR (10 Ağustos 1920) · md. 1-433, madde aralığıyla adımlar\n' +
  '// UMIT 13 Kasım 2026 (KASA emri C, Emre isteği). Tüketici: js/antlasma_oynatici.js\n' +
  '// Özetler ham metinden, kendi cümlemizle (kopya yok). Kaynak/beyan: kayıt.kaynak.\n' +
  '// ============================================================================\n' +
  'window.ANTLASMA_MADDELERI = window.ANTLASMA_MADDELERI || [];\n' +
  'window.ANTLASMA_MADDELERI.push(' + JSON.stringify(kayit, null, 1) + ');\n';
fs.writeFileSync('data/antlasma_madde_sevr.js', kod);
console.log('adim', adimlar.length, 'dogrulanmadi', adimlar.filter(x => x.dogrulanmadi).length, 'bayt', kod.length);

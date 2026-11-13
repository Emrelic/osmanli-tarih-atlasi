const fs = require('fs');
const D = 'C:/Users/user/AppData/Local/Temp/claude/61bcdfa88cf2fd72/7ea5230f-a702-4a9c-8d48-cce9758d2aeb/scratchpad/';
const a = JSON.parse(fs.readFileSync(D + 'lozan-1-71-v2.json', 'utf8'));
const b = JSON.parse(fs.readFileSync(D + 'lozan-72-143-v2.json', 'utf8'));
// [boylam, enlem]; yaklaşık merkez noktaları — haritada ODAK içindir, sınır çizgisi değildir.
const yerler = {
  "Karadeniz": [34.5, 43.0], "Ege Denizi": [25.2, 38.5], "Akdeniz": [30.0, 35.0], "Marmara Denizi": [28.2, 40.7],
  "Meriç Nehri": [26.4, 41.15], "Arda Nehri": [26.5, 41.65], "Rezve Deresi": [28.03, 41.98],
  "Suriye": [38.0, 35.5], "Irak": [43.5, 35.5], "İstanbul": [28.98, 41.01],
  "Limni": [25.1, 39.9], "Semadirek": [25.52, 40.5], "Midilli": [26.55, 39.1], "Sakız": [26.14, 38.37],
  "Sisam": [26.98, 37.75], "Nikarya": [26.15, 37.6], "İmroz": [25.9, 40.16], "Bozcaada": [26.05, 39.83],
  "Rodos": [28.226, 36.443], "İstanköy": [27.1, 36.9], "Leros": [26.85, 37.15], "Kalimnos": [26.98, 36.95],
  "Patmos": [26.55, 37.32], "Simi": [27.85, 36.6], "Kerpe": [27.2, 35.7], "Kaşot": [26.93, 35.4],
  "Tilos": [27.4, 36.43], "Nisiros": [27.17, 36.6], "Astipalya": [26.35, 36.55], "Meis": [29.59, 36.14],
  "Mısır": [31.2, 30.0], "Sudan": [32.5, 15.6], "Kıbrıs": [33.4, 35.15], "Libya": [13.2, 32.9],
  "Fas": [-7.6, 33.6], "Tunus": [10.18, 36.8], "Çanakkale Boğazı": [26.4, 40.15], "İstanbul Boğazı": [29.07, 41.12],
  "Trakya": [27.0, 41.3], "Batı Trakya": [25.4, 41.1], "Edirne": [26.556, 41.677], "Karaağaç": [26.54, 41.66],
  "Kırklareli": [27.225, 41.735], "Kuleli-Burgas": [27.35, 41.4], "Köstence": [28.65, 44.18], "Romanya": [25.0, 45.9],
  "Kudüs": [35.22, 31.77], "Hicaz": [39.8, 21.5], "Lozan": [6.63, 46.52], "Anadolu": [33.0, 39.0],
  "Arıburnu": [26.28, 40.25], "Gelibolu Yarımadası": [26.6, 40.35], "Mudanya": [28.38, 40.38],
  "Türkiye": [35.0, 39.0], "Musul": [43.13, 36.34]
};
const ek11 = JSON.parse(fs.readFileSync(D + 'lozan-ek11.json', 'utf8'));
ek11.forEach((e, k) => { const t = b.ekler[5 + k]; if (e.okundu && e.ozet) { t.ozet = e.ozet + (e.madde_say ? ' (' + e.madde_say + ' madde)' : ''); t.okundu = true; t.yer = e.yer || []; } });
const mad = (a.maddeler || a).concat(b.maddeler).sort((x, y) => x.no - y.no);
const eksik = []; for (let i = 1; i <= 143; i++) if (!mad.find(x => x.no === i)) eksik.push(i);
if (eksik.length || mad.length !== 143) { console.log('EKSIK', eksik); process.exit(1); }
const adimlar = mad.map(x => ({ no: String(x.no), bolum: x.bolum, ozet: x.ozet, yer: (x.yer || []).filter(y => yerler[y]), konu: x.konu }));
(b.ekler || []).forEach((e, i) => {
  adimlar.push({
    no: 'Ek ' + (i + 1), bolum: 'Antlaşmaya ekli belge',
    ozet: e.ad + ' — ' + (e.okundu ? e.ozet : 'içeriği OKUNMADI (ölçülmedi); yalnız belge adı kayda geçti.'),
    yer: (e.yer || []).filter(y => yerler[y]), konu: 'ek', dogrulanmadi: !e.okundu
  });
});
const kayit = {
  id: 'lozan-1923', ad: 'Lozan Antlaşması', t: '1923-07-24', kadraj: [25.5, 35.5, 45.0, 42.8],
  kaynak: 'Ham metin: Lozan Antlaşması İngilizce resmî metni (UKTS 16; Wikisource barındırıcısı, BYU Kütüphanesi sürümü) md. 1-143 ve Dışişleri Bakanlığı (mfa.gov.tr) Boğazlar, Trakya sınırı, Karaağaç/İmroz-Bozcaada, boşaltma ve mübadele ekleri; özetler ham metinden KENDİ cümlemizle yazıldı. TDV «Lozan Antlaşması» ile karşılaştırma yapılamadı (sunucu engeli) — ölçülmedi. Türkçe yer adı eşlemeleri (İmroz, Bozcaada, Tavşan Adaları vb.) resmî Türkçe metinle teyit edilmedi. Ekler: Boğazlar, Trakya, Karaağaç/İmroz-Bozcaada, Boşaltma, Mübadele ek metinleri Dışişleri/Wikisource ham metninden; öteki 11 ek Dışişleri (mfa.gov.tr) ve Milletler Cemiyeti Antlaşma Dizisi (LNTS 28) ham metninden okunup özetlendi; Ticaret Sözleşmesi md.15-18 yalnız göz gezdirildi.',
  yerler, adimlar
};
const kod =
  '// ============================================================================\n' +
  '// ANTLAŞMA MADDELERİ — LOZAN (24 Temmuz 1923) · md. 1-143 + 16 ek belge, TEK TEK\n' +
  '// UMIT 13 Kasım 2026 (KASA emri C, Emre isteği). Tüketici: js/antlasma_oynatici.js\n' +
  '// Özetler ham metinden, kendi cümlemizle (kopya yok). Kaynak/beyan: kayıt.kaynak.\n' +
  '// `yerler`: ad → [boylam, enlem] YAKLAŞIK odak noktası (sınır çizgisi değil);\n' +
  '// haritada yalnız tabloda olan adlar işaretlenir.\n' +
  '// ============================================================================\n' +
  'window.ANTLASMA_MADDELERI = window.ANTLASMA_MADDELERI || [];\n' +
  'window.ANTLASMA_MADDELERI.push(' + JSON.stringify(kayit, null, 1) + ');\n';
fs.writeFileSync('data/antlasma_madde_lozan.js', kod);
console.log('adim', adimlar.length, 'bayt', kod.length);

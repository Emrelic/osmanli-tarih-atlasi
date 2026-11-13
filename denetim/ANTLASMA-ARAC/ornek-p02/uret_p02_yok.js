// Metni ulasilamayan 4 antlasma icin 1-2 adimli, 'metin ulasilamadi' etiketli girdi + config uretir.
const fs = require('fs');
const D = 'denetim/ANTLASMA-ARAC/ornek-p02/';
const L = [
 { k: 'istanbul_bulgaristan', id: 'istanbul-bulgaristan-1913', ad: 'İstanbul Antlaşması', an: ['İstanbul Antlaşması: Bulgaristan', 'İstanbul Antlaşması', 'Bulgaristan ile barış'], t: '1913-09-29', kad: [22, 39, 32, 43],
   adim: [['Antlaşma', "Osmanlı ile Bulgaristan arasındaki 1913 İstanbul barış antlaşması; kronolojideki başlığa göre Edirne'nin Osmanlı elinde tescilini içerir. Madde metni okunamadı.", 'Edirne'],
          ['Sonuç', 'Madde sayısı ve sınır hattının ayrıntıları bu kayıtta doğrulanamadı.', '']],
   oku: "antlaşma metni (Hurewitz, Noradounghian, AJIL 1914 eki) okunamadı; gün: atlas 29 Eylül 1913 yazar, bir ikincil ansiklopedi özeti (1914-1918-online) 30 Eylül verir, TDV okunmadı, çelişki çözülmedi" },
 { k: 'atina', id: 'atina-1913', ad: 'Atina Antlaşması', an: ['Atina Antlaşması'], t: '1913-11-14', kad: [19, 34, 30, 42],
   adim: [['Antlaşma', "Osmanlı ile Yunanistan arasındaki 14 Kasım 1913 Atina barış antlaşması; kronolojideki başlığa göre Selanik-Yanya bölgesinin Yunanistan'a devrini kapsar. Madde metni okunamadı.", ''],
          ['Sonuç', 'Madde sayısı, ada hükümleri ve azınlık maddeleri bu kayıtta doğrulanamadı.', '']],
   oku: 'antlaşma metni (Hurewitz, Noradounghian, AJIL 1914) okunamadı' },
 { k: 'istanbul_protokolu', id: 'istanbul-protokolu-1913', ad: 'İstanbul Protokolü', an: ['İstanbul Protokolü', 'Türk-İran sınırının tahdidi'], t: '1913-11-17', kad: [42, 34, 50, 40],
   adim: [['Protokol', '17 Kasım 1913 İstanbul Protokolü, Osmanlı-İran sınırının tahdidine dairdir; kronolojideki başlığa göre İngiliz ve Rus elçilerinin gözetimindedir. Madde metni okunamadı.', '']],
   oku: 'protokol metni (IBS No. 28 Iran-Turkey 1964; Efe-Kızıl, ERZSOSDE X-I 2017) okunamadı' },
 { k: 'sofya', id: 'sofya-1915', ad: 'Sofya Sözleşmesi', an: ['Sofya Sözleşmesi', 'Osmanlı-Bulgar sınırının düzeltilmesi'], t: '1915-09-06', kad: [22, 39, 32, 43],
   adim: [['Sözleşme', '6 Eylül 1915 (Jülyen 24 Ağustos) Sofya Sözleşmesi, Osmanlı-Bulgar sınırının düzeltilmesine dairdir. Madde metni okunamadı.', '']],
   oku: 'sözleşme metni (IBS No. 49 Bulgaria-Turkey 1965) okunamadı' }
];
for (const a of L) {
  const m = a.adim.map((x, i) => ({ no: i + 1, bolum: x[0], ozet: x[1], yer: x[2] ? [x[2]] : [], konu: 'antlasma', belirsiz: true }));
  fs.writeFileSync(D + a.k + '-girdi.json', JSON.stringify(m, null, 1));
  fs.writeFileSync(D + a.k + '.config.json', JSON.stringify({
    id: a.id, ad: a.ad, anahtarlar: a.an, t: a.t, kadraj: a.kad,
    kaynak: '⚠ metin ulaşılamadı. Bu oturumda ham metin bulunamadı (' + a.oku + "; Wikisource ve Avalon'da sayfa yok). TDV okunmadı. Adım özetleri yalnız kronoloji maddesinin başlığına dayanır, madde madde değildir; atlas kaynak sayılmaz.",
    cikti: 'data/antlasma_madde_' + a.k + '.js', girdiler: [D + a.k + '-girdi.json']
  }, null, 1));
}

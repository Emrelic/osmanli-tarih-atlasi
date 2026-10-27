// node _yaz.js  -> yama_kuyrukcin.js + kronoloji_sinir_dogu_kuyrukcin.js yazar; surekllik/kapsam ozeti basar
const fs = require('fs');
const { SEHIR, CIN_SINIR, GUN, ad, ILK, DIR } = require('./_uret.js');
const g = (s) => GUN.gun(s);
const sorun = [];
const yama = [];
const sinir = [];
const kullanilanCin = new Set();
const ornek = (m) => `${m.yer_id}|${m.t}`;
let yeniMadde = 0, kopyaMadde = 0, kopyaYok = 0;

function ilkYuan(sehir) { return ILK[sehir].ilk; }

for (const sehir of Object.keys(SEHIR)) {
  const L = SEHIR[sehir].slice().sort((a, b) => (a.f < b.f ? -1 : a.f > b.f ? 1 : 0));
  // surereklilik
  for (let i = 0; i < L.length; i++) {
    const p = L[i];
    if (g(p.f) >= g(p.t)) sorun.push(`${sehir}: f>=t ${p.f} ${p.t} ${p.d}`);
    if (i > 0 && L[i - 1].t !== p.f) sorun.push(`${sehir}: kopukluk ${L[i - 1].t} -> ${p.f} (${L[i - 1].d} -> ${p.d})`);
  }
  const son = L[L.length - 1];
  if (son.t !== ILK[sehir].mevcut_ilk_f) sorun.push(`${sehir}: onek sonu ${son.t} != mevcut_ilk_f ${ILK[sehir].mevcut_ilk_f}`);
  const ilk = ILK[sehir].ilk;
  const mevcutSahip = ilk ? `${ilk.d} ${ilk.f}` : '?';
  const dosyalar = new Set(require('./_onceki.js')[sehir].map(p => p._dosya));
  const yeniSay = L.filter(p => p._yeni).length;
  yama.push({
    ad: sehir,
    mevcut_zincir_basi: mevcutSahip,
    aciklama: `BİRLEŞİK ÖNEK (kuyrukcin): ${L.length} dilim (${L.length - yeniSay} dilim cin1/2/3 yamalarından kopya, ${yeniSay} dilim yeni/düzeltilmiş). İlk dilim f=${L[0].f}; son dilim t=${son.t} = mevcut zincirin ilk dönemi f'i. BU KAYIT ${[...dosyalar].sort().join(', ') || '-'} içindeki aynı ad'lı yama kaydının YERİNE geçer (aracın birleştirmesi üst üste bineceği için ikisi birden uygulanmamalı).`,
    degistirilen_yama: [...dosyalar].sort(),
    s_onek: L.map(p => { const o = { f: p.f, t: p.t, d: p.d, kesinlik: p.kesinlik, kaynak: p.kaynak }; return o; }),
  });
  // sinir maddeleri
  for (let i = 1; i < L.length; i++) {
    const prev = L[i - 1], cur = L[i];
    const fg = g(cur.f);
    let adaylar = CIN_SINIR.filter(m => m.yer_id === sehir && Math.abs(g(m.t) - fg) <= 30 && (m.tur === 'toprak-kazanc' || m.tur === 'toprak-kayip'));
    const yeniDilim = cur._yeni || prev._yeni;
    if (adaylar.length && !cur._yeni) {
      adaylar.sort((a, b) => Math.abs(g(a.t) - fg) - Math.abs(g(b.t) - fg));
      const m = adaylar[0];
      const { _k, ...o } = m;
      if (!sinir.some(x => x.yer_id === o.yer_id && x.t === o.t && x.b === o.b)) { sinir.push(o); kopyaMadde++; kullanilanCin.add(_k); }
      continue;
    }
    if (!cur._yeni) { kopyaYok++; }
    const beyanli = /BEYAN/.test(cur.kaynak);
    sinir.push({
      t: cur.f, devlet: cur.d, taraflar: [cur.d, prev.d],
      b: `${sehir}: sahip ${ad(prev.d)} → ${ad(cur.d)}`,
      tur: 'toprak-kazanc', onem: 2, dunya: 1, kapsam: 'dis', yer: sehir, yer_id: sehir,
      etiket: ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281'],
      d: `${sehir} yerleşiminin s: zincirinde sahip ${ad(prev.d)} iken ${cur.f} itibarıyla ${ad(cur.d)} oldu (kuyrukcin yama dilimi). Ayrıntı ve kaynak aşağıdadır.`,
      kaynak: cur.kaynak,
      gun: `${cur.f} (Jülyen; kaynak ifadesine göre ${cur.kesinlik === 'gun' ? 'gün' : cur.kesinlik === 'ay' ? 'ay ilk günü' : 'yıl'} düzeyi)`,
      kesinlik: cur.kesinlik,
      ic_not: (beyanli ? 'BEYANLI YAKLAŞIKLIK içerir (kaynak alanına bak). ' : '') + 'Çin ay-güneş takvimi → Jülyen çevirisi ±1 gün (cin2/_cal.py). Kuyrukcin yama dilimi devri.',
      sinir_id: [],
    });
    yeniMadde++;
  }
}

// sinir: kopya madde tekrarlarini ele
fs.writeFileSync(DIR + 'yama_kuyrukcin.js', '// yama_kuyrukcin.js — kuyrukcin: cin1/2/3 önek yamalarının BİRLEŞİK ve boşlukları kapatılmış sürümü (Song/Liao/Jin/Batı Xia/Moğol-Yuan 960→1281).\n// Her kayıt, aynı ad\'lı cin1/cin2/cin3 yama kaydının YERİNE geçer (RAPOR.md).\nwindow.YAMA_DOGU_KUYRUKCIN = ' + JSON.stringify(yama, null, 1) + ';\n', 'utf8');
fs.writeFileSync(DIR + 'kronoloji_sinir_dogu_kuyrukcin.js', '// kronoloji_sinir_dogu_kuyrukcin.js — kuyrukcin yama dilimlerinin devir günleri (Değişmez 2). cin1/2/3 maddelerinden KOPYA olanlar da burada (dogrula küme-içi ölçtüğü için).\nwindow.KRONOLOJI_SINIR_DOGU_KUYRUKCIN = ' + JSON.stringify(sinir, null, 1) + ';\n', 'utf8');
console.log('sehir', yama.length, 'dilim', yama.reduce((a, y) => a + y.s_onek.length, 0), 'yeniMadde', yeniMadde, 'kopyaMadde', kopyaMadde, 'kopyaYok(yeni uretilen)', kopyaYok, 'sinir toplam', sinir.length);
console.log(sorun.length ? sorun.join('\n') : 'SUREKLILIK/UC UCA: sorun yok');

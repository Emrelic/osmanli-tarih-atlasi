// node _yaz.js -> yama_kuyruk2a.js + kronoloji_sinir_dogu_kuyruk2a.js + kunye_yeni.js yazar; surekllik/kapsam ozeti basar
const fs = require('fs');
const { SEHIR, ILK, DEGISEN, DIR, g, IDLER, T, BASLIK } = require('./_uret.js');
const KUNYE = require('./_kunye.js');
const OZEL = require('./_baslik.js');
const PARCA = JSON.parse(fs.readFileSync(DIR + '_parca.json', 'utf8'));
const yeniIdler = new Set(KUNYE.map(k => k.id));
const gecerli = (id) => id === '__BOSLUK__' || IDLER[id] || yeniIdler.has(id);
const adOf = (id) => { if (id === '__BOSLUK__') return 'sahipsiz'; const k = KUNYE.find(x => x.id === id); const d = IDLER[id]; const a = (k ? k.ad : d && d.ad) || id; return a.replace(/\s*\(.*\)\s*$/, ''); };
const kisa = (ad) => ad.replace(/\s*\(.*\)\s*$/, '');
const sorun = [];
const yama = [], sinir = [];
let kopyaMadde = 0, yeniMadde = 0;
const kullanilanKunye = new Set();

for (const sehir of Object.keys(SEHIR)) {
  const L = SEHIR[sehir].slice().sort((a, b) => (a.f < b.f ? -1 : a.f > b.f ? 1 : 0));
  for (let i = 0; i < L.length; i++) {
    const p = L[i];
    if (!gecerli(p.d)) sorun.push(`${sehir}: gecersiz devlet kimligi ${p.d} (${p.f})`);
    if (yeniIdler.has(p.d)) kullanilanKunye.add(p.d);
    if (g(p.f) >= g(p.t)) sorun.push(`${sehir}: f>=t ${p.f} ${p.t} ${p.d}`);
    if (i > 0 && L[i - 1].t !== p.f) sorun.push(`${sehir}: kopukluk ${L[i - 1].t} -> ${p.f} (${L[i - 1].d} -> ${p.d})`);
    if (i > 0 && L[i - 1].d === p.d) sorun.push(`${sehir}: ardisik ayni devlet ${p.d} ${L[i - 1].t}`);
    if (!p.kaynak) sorun.push(`${sehir}: kaynak yok ${p.f}`);
    // kunye omru
    if (p.d !== '__BOSLUK__') {
      const k = KUNYE.find(x => x.id === p.d) || IDLER[p.d];
      if (k && k.f && g(p.f) < g(k.f)) sorun.push(`${sehir}: dilim f ${p.f} ${p.d} kunye f ${k.f}'den once (hayalet)`);
      if (k && k.t && g(p.t) > g(k.t)) sorun.push(`${sehir}: dilim t ${p.t} ${p.d} kunye t ${k.t}'yi asiyor (kunye duzeltme onerisi)`);
    }
  }
  const son = L[L.length - 1];
  if (son.t !== ILK[sehir]) sorun.push(`${sehir}: onek sonu ${son.t} != mevcut_ilk_f ${ILK[sehir]}`);
  const mevc = require('./_mevcut.json')[sehir];
  const ilk = mevc && mevc[0] && mevc[0].s[0];
  const yeniSay = L.filter(p => !p._kopya).length;
  yama.push({
    ad: sehir,
    mevcut_zincir_basi: ilk ? `${ilk.d} ${ilk.f}` : '?',
    aciklama: `BİRLEŞİK ÖNEK (kuyruk2a): ${L.length} dilim (${L.length - yeniSay} dilim önceki bozkir/hint yamalarından kopya, ${yeniSay} dilim yeni/düzeltilmiş). İlk dilim f=${L[0].f}; son dilim t=${son.t} = mevcut zincirin ilk dönemi f'i. BU KAYIT ${DEGISEN[sehir]} içindeki aynı ad'lı yama kaydının YERİNE geçer (ikisi birden uygulanmamalı).`,
    degistirilen_yama: DEGISEN[sehir],
    s_onek: L.map(p => ({ f: p.f, t: p.t, d: p.d, kesinlik: p.kesinlik, kaynak: p.kaynak })),
  });
  // sinir maddeleri
  for (let i = 1; i < L.length; i++) {
    const prev = L[i - 1], cur = L[i];
    const fg = g(cur.f);
    const bosGiris = cur.d === '__BOSLUK__', bosCikis = prev.d === '__BOSLUK__';
    const devlet = bosGiris ? prev.d : cur.d;
    const tur = bosGiris ? 'toprak-kayip' : 'toprak-kazanc';
    let kopya = null;
    {
      const adaylar = (PARCA[sehir].sinir || []).filter(m => m.t === cur.f && (m.tur === 'toprak-kazanc' || m.tur === 'toprak-kayip'));
      if (adaylar.length) kopya = adaylar[0];
    }
    if (kopya) {
      const { dosya, ...o } = kopya;
      o.kopya_kume = dosya;
      if (!sinir.some(x => x.yer_id === o.yer_id && x.t === o.t && x.b === o.b)) { sinir.push(o); kopyaMadde++; }
      continue;
    }
    const beyanli = /BEYAN|ABİ MERKEZ|BOŞLUK/.test(cur.kaynak);
    const yer = kisa(sehir);
    const ozel = OZEL[`${sehir}|${cur.f}`];
    const b = ozel ? ozel.b : (bosGiris ? `${yer}: ${adOf(prev.d)} sonrası sahip kaynaklarda belirsiz kaldı (beyanlı boşluk)` : bosCikis ? `${yer}: sahipsiz dönem sona erdi, şehir ${adOf(cur.d)} idaresinde görünür` : `${yer}: ${adOf(prev.d)} yerine ${adOf(cur.d)} hâkim oldu`);
    const d = ozel && ozel.d ? ozel.d : `${sehir} yerleşiminin s: zincirinde sahip ${adOf(prev.d)} iken ${cur.f} itibarıyla ${bosGiris ? 'kaynaklarda sahibi bilinmeyen (__BOSLUK__)' : adOf(cur.d)} oldu (kuyruk2a birleşik önek dilimi). Gerekçe ve kaynak aşağıdadır.`;
    sinir.push({
      t: cur.f, devlet, taraflar: [devlet, bosGiris ? null : prev.d].filter(x => x && x !== '__BOSLUK__').filter((x, i2, a) => a.indexOf(x) === i2),
      b, tur, onem: 2, dunya: 1, kapsam: 'dis', yer, yer_id: sehir,
      etiket: ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281'],
      d, kaynak: cur.kaynak,
      gun: `${cur.f} (kaynak ifadesine göre ${{ gun: 'gün', ay: 'ay', yil: 'yıl', onyil: 'onyıl', yuzyil: 'yüzyıl' }[cur.kesinlik] || cur.kesinlik} düzeyi)`,
      kesinlik: cur.kesinlik,
      ic_not: (beyanli ? 'BEYANLI YAKLAŞIKLIK/BOŞLUK içerir (kaynak alanına bak). ' : '') + 'kuyruk2a birleşik önek dilimi devri.',
      sinir_id: [],
    });
    yeniMadde++;
  }
}
const sinirSirali = sinir;
fs.writeFileSync(DIR + 'yama_kuyruk2a.js', '// yama_kuyruk2a.js — kuyruk2a: Horasan/Mâverâünnehir/Hindukuş/Tarım/Moğolistan/Hazar şehirlerinin BİRLEŞİK, sürekli önekleri (bozkir1-4 + hint1 yamalarının YERİNE).\nwindow.YAMA_DOGU_KUYRUK2A = ' + JSON.stringify(yama, null, 1) + ';\n', 'utf8');
fs.writeFileSync(DIR + 'kronoloji_sinir_dogu_kuyruk2a.js', '// kronoloji_sinir_dogu_kuyruk2a.js — kuyruk2a yama dilimlerinin devir günleri (Değişmez 2).\nwindow.KRONOLOJI_SINIR_DOGU_KUYRUK2A = ' + JSON.stringify(sinirSirali, null, 1) + ';\n', 'utf8');
fs.writeFileSync(DIR + 'kunye_yeni.js', '// kunye_yeni.js — kuyruk2a yeni künyeleri (Horasan 1153-1193 ara dönemi).\nwindow.DOGU_KUNYE_KUYRUK2A = ' + JSON.stringify(KUNYE, null, 1) + ';\n', 'utf8');
console.log('sehir', yama.length, 'dilim', yama.reduce((a, y) => a + y.s_onek.length, 0), 'sinir yeni', yeniMadde, 'sinir kopya', kopyaMadde, 'toplam', sinir.length, 'kunye', KUNYE.length, 'kullanilan yeni kunye', [...kullanilanKunye].join(','));
console.log(sorun.length ? sorun.join('\n') : 'SUREKLILIK/UC UCA/ID: sorun yok');

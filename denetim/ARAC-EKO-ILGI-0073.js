// ============================================================================
// EKO-ILGI-0073 — EK OKUMA <-> KRONOLOJI MADDESI ILGI ALETI  (0073/H-0016..H-0019)
// ============================================================================
// Emre'nin olcutu (H-0017): "kisiler, olaylar, mekanlar, zamanlar ile ilinti
// olmalidir" — dogrudan ya da dolayli.
// Emre'nin GAYRIMESRU ornegi: anlatisinin ICINDE yalnizca "Yenici Ocagi"
// kelimesi gectigi icin baglanmis kart.  ⇒ SALT KELIME TEMASI YETMEZ.
//
// Bu yuzden alet her ekseni IKI KADEMEDE olcer:
//   GUCLU : temas kartin BASLIK BOLGESINDE (baslik/ad/kisa/soru) — kart o konu
//           HAKKINDA demektir  (Emre'nin mesru ornegi: matbaa <-> matbaa)
//   ZAYIF : temas yalnizca GOVDEDE — konu gecerken anilmis olabilir
//           (Emre'nin gayrimesru ornegi tam burasi)
// Kovalar:  A = en az bir GUCLU temas  ·  B = yalniz ZAYIF temas  ·  C = HIC temas yok
// C ve B kovasi INSAN OKUR; alet hukum VERMEZ, ayiklar.
//
// Kullanim:  node denetim/ARAC-EKO-ILGI-0073.js [kok] > denetim/EKO-ILGI-0073-HAM.json
// ============================================================================
const Y = require('./ARAC-EKO-ILGI-0073-YUKLE.js');
const kok = process.argv[2] || '.';
const R = Y.yukle(kok);
const w = R.win;
const N = Y.ekNorm;

// ---------------------------------------------------------------- kart havuzu
const kartlar = [];
function ekle(kaynakAd, liste, varsayilanTur) {
  (liste || []).forEach((k, i) => kartlar.push({ kaynak: kaynakAd, ix: i, k, turVar: varsayilanTur }));
}
Object.keys(w).filter(a => /^EKOKUMA(_[A-Z0-9]+)?$/.test(a) && Array.isArray(w[a]))
  .forEach(a => ekle(a, w[a], null));
if (Array.isArray(w.MERAK)) ekle('MERAK', w.MERAK, 'merak');
Object.keys(w).filter(a => /^MERAK_[A-Z0-9]+$/.test(a) && Array.isArray(w[a]))
  .forEach(a => ekle(a, w[a], 'merak'));
// ANTLASMALAR gune baglanir (turAlaniYok) — ayri kova, ilgi olcumune GIRER
if (Array.isArray(w.ANTLASMALAR)) ekle('ANTLASMALAR', w.ANTLASMALAR, 'antlasma');

// ------------------------------------------------------------ kronoloji evreni
const olayCek = Object.keys(w).filter(a => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(a) && Array.isArray(w[a]))
  .map(a => ({ a, l: w[a] }));
const olayKuy = Object.keys(w).filter(a => /^KRONOLOJI_/.test(a) && Array.isArray(w[a]))
  .map(a => ({ a, l: w[a] }));
const maddeler = [];
olayCek.forEach(({ a, l }) => l.forEach(o => { if (o && o.t) maddeler.push({ o, kova: 'OLAYLAR', dosya: a }); }));
olayKuy.forEach(({ a, l }) => l.forEach(o => { if (o && o.t) maddeler.push({ o, kova: 'KRONOLOJI', dosya: a }); }));
// gun -> madde dizini (bag TAM ESITLIK arar)
const gunDizin = new Map();
maddeler.forEach(m => {
  if (!gunDizin.has(m.o.t)) gunDizin.set(m.o.t, []);
  gunDizin.get(m.o.t).push(m);
});

// ------------------------------------------------------------------ metin cikar
const BASLIK_ALAN = ['baslik', 'ad', 'kisa', 'soru'];
const ATLA = /^(id|tur|kaynak|kesinlik|olay|baglanti|gorsel|gorsel_kaynak|lat|lon)$/;
function duzMetin(v, derinlik) {
  if (v == null) return '';
  if (derinlik > 4) return '';
  if (typeof v === 'string') return ' ' + v;
  if (typeof v === 'number') return ' ' + v;
  if (Array.isArray(v)) return v.map(x => duzMetin(x, (derinlik || 0) + 1)).join(' ');
  if (typeof v === 'object') return Object.keys(v).map(x => duzMetin(v[x], (derinlik || 0) + 1)).join(' ');
  return '';
}
function kartMetin(k) {
  let bas = '', gov = '';
  Object.keys(k || {}).forEach(a => {
    if (ATLA.test(a)) return;
    if (/^ic_not/.test(a)) return;            // ic not okura gosterilmez
    const s = duzMetin(k[a], 0);
    if (BASLIK_ALAN.indexOf(a) >= 0) bas += s; else gov += s;
  });
  return { bas: N(bas), gov: N(gov) };
}

// ------------------------------------------------------------------- sozlukler
const DURAK = new Set(('ve ile icin bir bu su o da de den dan ile gibi kadar sonra once uzerine karsi olarak ama fakat ancak ya veya ki mi mu ne her hic cok az daha en olan olarak yil yilinda tarihinde arasinda buyuk kucuk ilk son yeni eski devlet devleti sultan osmanli osmanlinin sehir sehri kale bolge donem doneminde yeniden basi sonu uzun kisa gore ise iki uc dort bes alti yedi sekiz dokuz on yuz bin'
).split(' '));
// id slug'inda konu TASIMAYAN parcalar (tur adi, dalga adi, dosya oneki)
const ID_DURAK = new Set(('teknik bilimsel kimdir magazin tartisma merak sebep sonuc ekokuma kart karsi anlati menkibe haber sokhaber disyankilar kahramanlik edebiyat savas-hikayesi hikayesi tamamla kurum toplum dunya vezir rivayet padisah dalga bolum konu genel tarihi tarih donem dönem hakkinda uzerine nedir nasil neden'
).split(' '));
function kelimeler(s, enAz) {
  return N(s).split(/[^a-z0-9]+/).filter(x => x.length >= (enAz || 5) && !DURAK.has(x) && !/^\d+$/.test(x));
}
// "II. Mahmud" -> ["mahmud"] ; "Ali Pasa" -> ["ali pasa","pasa"? hayir]
function kisiAdlari(s) {
  if (!s) return [];
  return String(s).split(/[,;·/&]| ve /i).map(x => x.trim()).filter(Boolean).map(ad => {
    const parcalar = N(ad).split(' ').filter(p => p.length >= 4 && !/^(sultan|sah|han|bey|pasa|efendi|emir|kral|prens|papa|imparator|cariisi|hazretleri|i|ii|iii|iv|v|vi)$/.test(p));
    return { tam: N(ad), anahtar: parcalar };
  }).filter(x => x.anahtar.length);
}
function yerAdlari(s) {
  if (!s) return [];
  return String(s).split(/[,;·/()]| ve /i).map(x => x.trim()).filter(Boolean)
    .map(y => N(y)).filter(y => y.length >= 4 && !DURAK.has(y))
    .map(y => ({ tam: y, anahtar: y.split(' ').filter(p => p.length >= 4 && !DURAK.has(p)) }))
    .filter(x => x.anahtar.length);
}
function yillar(s) {
  const out = [];
  const re = /\b(1[0-9]{3}|20[0-2][0-9]|[3-9][0-9]{2})\b/g;
  let m; while ((m = re.exec(String(s || '')))) out.push(parseInt(m[1], 10));
  return out;
}

// ------------------------------------------------------------------ eksen olcum
// donus: 0 = temas yok, 1 = zayif (yalniz govde), 2 = guclu (baslik bolgesi)
function temas(anahtarlar, metin) {
  let en = 0;
  for (const a of anahtarlar) {
    const hepsiBas = a.anahtar.every(p => metin.bas.indexOf(p) >= 0);
    const hepsiGov = a.anahtar.every(p => metin.gov.indexOf(p) >= 0);
    if (hepsiBas) return 2;
    if (hepsiGov) en = Math.max(en, 1);
  }
  return en;
}
// madde basina bir kez hesapla (ayni madde yuzlerce kartla eslesebilir)
const maddeBellek = new Map();
function maddeOn(o) {
  let c = maddeBellek.get(o);
  if (!c) {
    c = {
      kisiler: kisiAdlari(o.kisiler),
      yerler: yerAdlari(o.yer),
      yil: parseInt(String(o.t).slice(0, 4), 10),
      bKelime: kelimeler(o.b, 5).map(x => ({ tam: x, anahtar: [x] })),
      ozne: kelimeler(o.b, 5),
      govdeKelime: kelimeler((o.b || '') + ' ' + (o.d || '') + ' ' + (o.yer || '') + ' ' + (o.kisiler || ''), 5),
      met: { bas: N(o.b || ''), gov: N((o.d || '') + ' ' + (o.yer || '') + ' ' + (o.kisiler || '')) }
    };
    maddeBellek.set(o, c);
  }
  return c;
}
// ---------------------------------------------------------------- OZNE TESTI
// Emre'nin ayrimi: "anlatisinin icinde yalnizca 'Yeniceri Ocagi' kelimesi
// geciyor" YETMEZ; kart o konu HAKKINDA olmali ya da madde kartin konusundan
// bahsetmeli.  ⇒ Kartin OZNESI (id + baslik/ad) ile maddenin OZNESI (b) ve
// govdesi (b+d+yer+kisiler) CAPRAZ aranir; kartin GOVDESI ozne sayilmaz.
// Turkce ek dusurme: iki kelimeden biri otekinin en az 5 harflik oneki ise tutar.
function kokTutar(a, b) {
  if (a === b) return true;
  const k = Math.min(a.length, b.length);
  if (k < 5) return false;
  return a.slice(0, k) === b.slice(0, k);
}
function kesisir(A, B) { return A.some(a => B.some(b => kokTutar(a, b))); }

function eksenler(kartOn, metin, o) {
  const c = maddeOn(o), A = {};
  A.kisi = temas(c.kisiler, metin);
  A.yer = temas(c.yerler, metin);
  // zaman: maddenin yili kartin metninde GERCEKTEN geciyor mu (+/-1)
  A.zaman = kartOn.basYil.some(y => Math.abs(y - c.yil) <= 1) ? 2
          : (kartOn.govYil.some(y => Math.abs(y - c.yil) <= 1) ? 1 : 0);
  // olay: madde BASLIGININ icerik kelimeleri kartta geciyor mu
  A.olay = temas(c.bKelime, metin);
  // ters yon: kartin BASLIGINDAKI icerik kelimesi maddenin basligi/govdesinde geciyor mu
  A.olay_ters = temas(kartOn.basKelime, c.met);
  // OZNE CAPRAZI — kovayi BU belirler
  // 🔴 KISA AD DALI: "Prut" · "Sevr" · "Uşi" gibi TEK KELIMELIK kart adlari
  // kelime esiginin (>=5 harf) altinda kaliyor ve ANTLASMALAR kartlarinin
  // hepsi yanlislikla "temas yok" gorunuyordu. Kartin adi BUTUN HALINDE
  // maddenin metninde araniyor.
  const kisaAd = kartOn.adTam && kartOn.adTam.length >= 3 && kartOn.adTam.length <= 40
    && (c.met.bas + ' ' + c.met.gov).indexOf(kartOn.adTam) >= 0;
  A.ozne_capraz = kisaAd || kesisir(kartOn.ozne, c.govdeKelime) || kesisir(c.ozne, kartOn.ozne);
  A.govde_temasi = kesisir(c.ozne, kartOn.govdeKelime);
  return A;
}

// ------------------------------------------------------------------------ kosu
const satirlar = [], oksuz = [], genisBag = [];
let bagToplam = 0;
kartlar.forEach(({ kaynak, k }) => {
  const tur = k.tur || (kaynak === 'ANTLASMALAR' ? 'antlasma' : '(tur yok)');
  const oneri = (w.EKOBAG_ONERI || {})[k.id];
  let liste = oneri || k.olay || k.baglanti || [];
  const tAlaniyla = (!liste.length && (tur === 'magazin' || tur === 'antlasma' || !k.tur) && k.t);
  if (tAlaniyla) liste = [k.t];
  const metin = kartMetin(k);
  // Kartin OZNESI: id slug'i + baslik/ad (varsa). 200'e yakin kartta baslik/ad
  // YOK — id slug'i o kartlarin tek konu beyanidir, bu yuzden ozneye girer.
  const oznePool = String(k.id || '').replace(/[-_]/g, ' ') + ' ' + (k.baslik || k.ad || '');
  const kartOn = {
    basYil: yillar(metin.bas), govYil: yillar(metin.gov),
    basKelime: kelimeler(k.baslik || k.ad || k.soru || '', 5).map(x => ({ tam: x, anahtar: [x] })),
    // 🔴 4 HARF: ilk kosuda esik 5'ti ve "Prut" · "Sevr" · "Azak" gibi KISA OZEL
    // ADLAR ozne kumesinden dusuyordu — ANTLASMALAR kartlarinin tamami (adi tek
    // kelime) yanlislikla C kovasina dustu. Kok tutturma esigi (>=5) hala
    // koruyor: "ocak" ile "ocagi" birbirini TUTMAZ.
    ozne: kelimeler(oznePool, 5).filter(x => !ID_DURAK.has(x)),
    adTam: N(k.ad || k.baslik || ''),
    govdeKelime: kelimeler(metin.bas + ' ' + metin.gov, 5)
  };
  const kimlik = k.id || (kaynak + '#' + (k.ad || k.baslik || '?'));
  liste.forEach(bag => {
    bagToplam++;
    const gun = Y.bagGun(bag);
    const adaylar = (gunDizin.get(gun) || []).filter(m => Y.bagEslesir(bag, m.o));
    if (!adaylar.length) {
      oksuz.push({ kart: kimlik, kaynak, tur, bag: String(bag),
                   gun_var_mi: gunDizin.has(gun) ? 'gun var, ayirt edici tutmadi' : 'o gun HIC madde yok' });
      return;
    }
    if (adaylar.length > 40) {
      genisBag.push({ kart: kimlik, bag: String(bag), dusen_madde: adaylar.length });
    }
    adaylar.forEach(m => {
      const A = eksenler(kartOn, metin, m.o);
      // KOVA: A = ozne caprazi tuttu (kart o konu hakkinda ya da madde kartin
      // konusundan bahsediyor) · B = yalniz gecerken anilmis (kisi/yer/olay
      // temasi govdede) · C = hicbir eksende temas yok.  B ve C INSAN OKUR.
      const enEksen = Math.max(A.kisi, A.yer, A.olay, A.olay_ters);
      const kova = A.ozne_capraz ? 'A'
                 : ((A.govde_temasi || enEksen >= 1) ? 'B' : 'C');
      satirlar.push({
        kova, kart: kimlik, kaynak, tur, bag: String(bag),
        madde_t: m.o.t, madde_b: m.o.b, madde_kova: m.kova, madde_dosya: m.dosya,
        eksen: A,
        kart_baslik: (k.baslik || k.ad || k.soru || '').slice(0, 120),
        kart_kisa: (k.kisa || '').slice(0, 200)
      });
    });
  });
});

const say = kova => satirlar.filter(s => s.kova === kova).length;
const ozet = {
  kart: kartlar.length,
  bag_degeri: bagToplam,
  cozulen_bag_madde_cifti: satirlar.length,
  oksuz_bag: oksuz.length,
  kova_A_guclu_temas: say('A'),
  kova_B_yalniz_govde: say('B'),
  kova_C_hic_temas_yok: say('C'),
  kova_B_yuzde: +(100 * say('B') / satirlar.length).toFixed(1),
  kova_C_yuzde: +(100 * say('C') / satirlar.length).toFixed(1),
  eksen_dagilim: ['kisi', 'yer', 'zaman', 'olay', 'olay_ters'].reduce((a, e) => {
    a[e] = { guclu: satirlar.filter(s => s.eksen[e] === 2).length, zayif: satirlar.filter(s => s.eksen[e] === 1).length };
    return a;
  }, {})
};
ozet.genis_bag_40tan_cok_maddeye_dusen = genisBag.length;
console.log(JSON.stringify({ ozet, genisBag, oksuz, satirlar }, null, 1));

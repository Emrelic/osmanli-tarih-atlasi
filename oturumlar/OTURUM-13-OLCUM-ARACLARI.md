# Oturum 13 — ölçüm araçları

Bu turda iki soru ölçüldü ve ikisi de "bakarak" cevaplanamıyordu. Araçlar
`scratchpad/`te kaldıkları için oturum kapanınca kaybolacaklardı; kaynakları
buraya alındı.

🔒 **Yeri burası değil.** Kalıcı olacaklarsa `arac/` altına giderler ve orası
**Oturum 6'nın** dosyasıdır. Buraya kopyalanmalarının tek sebebi kaybolmamaları.

Her ikisi de `KOK` ortam değişkeni ister:

```bash
export KOK="C:/Users/emrem/OneDrive/Desktop/TARİH COĞRAFYA SİTESİ"
```

---

## 1. `ortakkenar.js` — "bu sınır cetvelle mi çizilmiş"

`OGRENILENLER §22` reçetesinin uygulaması. **İki gövdenin ortak kenarını** ölçer —
toplam çevreyi değil, hücre sınırını değil.

⚠️ **Çıktıdaki `köşe/1000 km` etiketi YANLIŞTIR.** Kalibrasyon çapaları **kenar**
sayısına göre kurulmuştur (`OTURUM-13-ANADOLU.md` BÖLÜM IV §21). Doğru sayı,
çıktıdaki `segment` değerinin km'ye bölünmüşüdür. Kod bilerek düzeltilmedi:
çıktısı raporlarda alıntılandı, sessizce değişirse eski alıntılar okunamaz hâle
gelir. Düzeltme `arac/`a taşınırken yapılmalı.

```bash
node ortakkenar.js <gun> <A> <B> [lon1,lat1,lon2,lat2]
node ortakkenar.js 1600-06-15 OSMANLI TABI 32.4,44.3,36.7,46.3
```

`A`/`B`: `OSMANLI` | `TABI` | devlet kimliği (`memluk`, `safevi`, `venedik`…).

```js
// ORTAK KENAR ölçümü — OGRENILENLER §22 reçetesi
// Ölçülen: İKİ GÖVDENİN ORTAK KENARI.
// Kullanım: node ortakkenar.js <gun> <A> <B> [kutu]
//   A/B: "OSMANLI" | "TABI" | <devlet-id>
const fs = require('fs');
const KOK = process.env.KOK;
global.window = {};
eval(fs.readFileSync(KOK + '/data/donemler.js', 'utf8'));
const DONEMLER = window.DONEMLER, PARCALAR = window.PARCALAR;
global.window = {};
eval(fs.readFileSync(KOK + '/data/devletler_harita.js', 'utf8'));
const DH = window.DEVLET_HARITA, DP = window.DEVLET_PARCALAR;

const R = 6371.0088, rad = Math.PI / 180;
const mes = (a, b) => {
  const dl = (b[0] - a[0]) * rad * Math.cos((a[1] + b[1]) / 2 * rad);
  const dp = (b[1] - a[1]) * rad;
  return R * Math.hypot(dl, dp);
};

// bir gövdenin halka listesini döndür
function govde(gun, ad) {
  if (ad === 'OSMANLI' || ad === 'TABI') {
    const d = DONEMLER.filter(x => x.f <= gun && gun < x.t).pop()
           || DONEMLER.filter(x => x.f <= gun).pop();
    if (!d) return [];
    const ix = ad === 'OSMANLI' ? (d.o || []) : (d.v || []);
    return ix.map(i => PARCALAR[i]);
  }
  const dev = DH.find(x => x.id === ad);
  if (!dev) { console.error('devlet yok: ' + ad); return []; }
  const dn = dev.dnm.find(p => p.f <= gun && gun < p.t);
  return dn ? dn.g.map(i => DP[i]) : [];
}

// halka listesini düz halka dizisine indirge (çok halkalı parçaları aç)
function halkalar(parcalar) {
  const H = [];
  for (const p of parcalar) {
    if (!p || !p.length) continue;
    if (typeof p[0][0] === 'number') H.push(p);
    else for (const h of p) if (h && h.length) H.push(h);
  }
  return H;
}

const anahtar = pt => pt[0].toFixed(4) + ',' + pt[1].toFixed(4);
function kenarlar(H) {
  const S = new Map();
  for (const h of H) {
    for (let i = 0, n = h.length; i < n; i++) {
      const a = h[i], b = h[(i + 1) % n];
      const ka = anahtar(a), kb = anahtar(b);
      if (ka === kb) continue;
      const k = ka < kb ? ka + '|' + kb : kb + '|' + ka;
      if (!S.has(k)) S.set(k, [a, b]);
    }
  }
  return S;
}

function olc(gun, A, B, kutu) {
  const SA = kenarlar(halkalar(govde(gun, A)));
  const SB = kenarlar(halkalar(govde(gun, B)));
  const icinde = p => !kutu ||
    (p[0] >= kutu[0] && p[0] <= kutu[2] && p[1] >= kutu[1] && p[1] <= kutu[3]);
  let uz = 0, n = 0;
  const kose = new Set();
  for (const [k, seg] of SA) {
    if (!SB.has(k)) continue;
    if (!icinde(seg[0]) || !icinde(seg[1])) continue;
    n++; uz += mes(seg[0], seg[1]);
    kose.add(k.split('|')[0]); kose.add(k.split('|')[1]);
  }
  return { gun, A, B, parca: n, km: uz, kose: kose.size,
           yog: uz > 0 ? kose.size / uz * 1000 : 0 };
}

const [gun, A, B, kt] = process.argv.slice(2);
if (gun) {
  const kutu = kt ? kt.split(',').map(Number) : null;
  const r = olc(gun, A, B, kutu);
  console.log(`${r.gun}  ${r.A} ↔ ${r.B}${kt ? '  [' + kt + ']' : ''}   ortak kenar ` +
              `${r.km.toFixed(1)} km · ${r.kose} köşe · ${r.yog.toFixed(1)} köşe/1000 km  ` +
              `(segment ${r.parca})`);
}
module.exports = { olc };
```

---

## 2. `sahip.js` — "haritada bu koordinatı KİM boyuyor"

`MIMARI §2` emilmesini doğrulamak için. Cevabı `yerlesimler.js`ten **türetmez**;
üretilmiş çıktıdan (`donemler.js` + `devletler_harita.js`) nokta-içinde-poligon
ile **okur**. Ergani turunda kendi çıkarımımı bununla çürüttüm (§20.1).

📌 **Kullanım kuralı:** "şu bölgede nokta yok, demek ki yanlış boyanıyor" cümlesi
bir ölçüm değildir. Boşluk, komşusuyla aynı tarihe sahipse emilme **doğru**
sonuç verir. Önce bununla ölç, sonra iddia et.

```bash
node sahip.js <lon> <lat> <gun> [<gun> ...]
node sahip.js 39.7622 38.2683 1515-10-01 1516-06-15
```

```js
// ÜRETİLMİŞ HARİTADA bir koordinatı KİM boyuyor?
// Kullanım: node sahip.js <lon> <lat> <gun> [<gun> ...]
// Cevap, uret_petek.py'nin çıktısından okunur — yerlesimler.js'ten DEĞİL.
const fs = require('fs');
const KOK = process.env.KOK;
global.window = {};
eval(fs.readFileSync(KOK + '/data/donemler.js', 'utf8'));
const DONEMLER = window.DONEMLER, PARCALAR = window.PARCALAR;
global.window = {};
eval(fs.readFileSync(KOK + '/data/devletler_harita.js', 'utf8'));
const DH = window.DEVLET_HARITA, DP = window.DEVLET_PARCALAR;

function halkalar(parcalar) {
  const H = [];
  for (const p of parcalar) {
    if (!p || !p.length) continue;
    if (typeof p[0][0] === 'number') H.push(p);
    else for (const h of p) if (h && h.length) H.push(h);
  }
  return H;
}
// ray casting
function ic(h, x, y) {
  let s = false;
  for (let i = 0, j = h.length - 1; i < h.length; j = i++) {
    const xi = h[i][0], yi = h[i][1], xj = h[j][0], yj = h[j][1];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) s = !s;
  }
  return s;
}
function govde(gun, ad) {
  if (ad === 'OSMANLI' || ad === 'TABI') {
    const d = DONEMLER.filter(x => x.f <= gun && gun < x.t).pop();
    if (!d) return [];
    return (ad === 'OSMANLI' ? (d.o || []) : (d.v || [])).map(i => PARCALAR[i]);
  }
  const dev = DH.find(x => x.id === ad);
  if (!dev) return [];
  const dn = dev.dnm.find(p => p.f <= gun && gun < p.t);
  return dn ? dn.g.map(i => DP[i]) : [];
}
function sahip(lon, lat, gun) {
  const bul = [];
  for (const ad of ['OSMANLI', 'TABI'])
    if (halkalar(govde(gun, ad)).some(h => ic(h, lon, lat))) bul.push(ad);
  for (const dev of DH)
    if (halkalar(govde(gun, dev.id)).some(h => ic(h, lon, lat))) bul.push(dev.id);
  return bul.length ? bul.join('+') : '—(boş)';
}
const [lon, lat, ...gunler] = process.argv.slice(2);
for (const g of gunler)
  console.log(g + '   ' + sahip(+lon, +lat, g));
module.exports = { sahip };
```

---

## 3. `sahip2.js` — `sahip.js`'in delik-duyarlı hâli 🔧

`sahip.js` bütün parçaların halkalarını **tek düz listeye** indirip
`.some(h => ic(h, …))` kullanıyordu. Bir parçanın ilk halkası dış sınır,
kalanları **deliktir**; `.some()` deliği görmez ve **enklavı "içeride"
gösterir.** Enklav sorusunda tam da bu yanıltır.

Düzeltme: tek-çift kuralı **parça bazında** işletilir — dış halkada içeride,
delikte dışarıda. Ayrıca örtüşmeyi görebilmek için **bütün** eşleşen gövdeler
döndürülür (`OSMANLI + bizans` gibi), ilki değil.

```bash
node sahip2.js <gun> [<gun> ...]        # noktalar NOKTA ortam degiskeninde
NOKTA='{"Bursa":[29.061,40.188]}' node sahip2.js 1303-06-01 1325-06-01
```

```js
// Bir parçanın ilk halkası dış sınır, kalanları deliktir.
const halkalar = p => !p || !p.length ? []
  : (typeof p[0][0] === 'number') ? [p] : p.filter(h => h && h.length);
// parça bazında tek-çift: dış halkada içeride, delikte ise DIŞARIDA
const icindeParca = (p, x, y) =>
  halkalar(p).reduce((s, h) => s !== ic(h, x, y), false);

function sahip(lon, lat, gun) {
  const bul = [];
  for (const ad of ['OSMANLI', 'TABI'])
    if (parcalar(gun, ad).some(p => icindeParca(p, lon, lat))) bul.push(ad);
  for (const dev of DH)
    if (parcalar(gun, dev.id).some(p => icindeParca(p, lon, lat))) bul.push(dev.id);
  return bul.length ? bul.join(' + ') : '—(bos)';   // ÖRTÜŞME görünür kalsın
}
```

⚠️ Dönen değerde **birden fazla gövde varsa bu bir kusurdur**, aracın hatası
değil: `donemler.js` ile `devletler_harita.js` bir bölümleme oluşturmuyor.
Ölçüm ve sonuçları `OTURUM-13-DOGU-ANADOLU.md` §3'te.

---

## Bilinen sınırları

- `ortakkenar.js` köşeleri `toFixed(4)` ile anahtarlıyor (≈11 m). İki gövdenin
  ortak kenarı ancak **birebir aynı köşe çiftini** paylaşıyorsa sayılır; motor
  aynı sınırı iki gövdede farklı yuvarlarsa kenar görünmez. Bugüne kadar
  rastlanmadı, ama sıfır çıkan bir ölçümde ilk buraya bakılmalı.
- ~~`sahip.js` delik (iç halka) ayrımı yapmaz~~ → 🔧 **DÜZELTİLDİ**, bkz. §3.
  Kusur, ona dokunan ilk soruda (Gemlik-Armutlu enklavı) ortaya çıktı.
  📌 Ders: bir aracın bilinen sınırını **yazmak yetmiyor**; o sınıra dokunan
  ilk soruda aracı düzeltmek gerekiyor. Not, kullanılmadan önce okunmalı.
- İkisi de 12 + 14 MB'lık üretilmiş dosyaları belleğe alır; her koşu birkaç
  saniye sürer. Toplu tarama yazılacaksa `require` edip döngü kurulmalı, süreç
  tekrar tekrar başlatılmamalı.

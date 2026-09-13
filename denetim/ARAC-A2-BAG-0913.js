// ============================================================================
// ARAC-A2-BAG-0913 — PAKET-A2 ek okuma + görsel BAĞ ve LİSANS denetimi
// ============================================================================
//   node denetim/ARAC-A2-BAG-0913.js            → yalnız A2 kartları (A2_ID listesi)
//   node denetim/ARAC-A2-BAG-0913.js --hepsi    → bütün ekokuma*/merak*/gorsel_madde kayıtları
//
// EVREN: index.html'in <script src="data/..."> ile yüklediği olaylar*/kronoloji*
// dosyaları (D095/D099: diskte olup yüklenmeyen dosyanın maddesi "var" sayılmaz).
// EŞLEŞME: js/app.js _ekNorm/_ekBagEslesir'in BİREBİR kopyası (app.js:7483-7504).
//
// SINAVLAR
//  ① her bağ değerinin günü evrende VAR mı
//  ② ayırt edici ("gün|parça") varsa o gündeki en az bir maddenin başlığında geçiyor mu
//  ③ ayırt edicisiz bağ ÇOK MADDELİ bir güne düşüyorsa o günün başlıkları BASILIR
//     (ilgisiz aynı-gün maddesine kart düşmesi — elle karar; `--izin` listesi aşağıda)
//  ④ görsel: url dosyası diskte var mı · ≤ 400 KB mı · gorsel_kaynak Commons dosya
//     sayfası mı · lisans PD ailesi / CC0 mı
//  ⑤ görsel çakışması: app.js find() İLK eşleşeni aldığı için aynı maddeye ikinci
//     görsel bağlanırsa GÖRÜNMEZ — önceki kaydın id'si basılır
//  ⑥ mükerrer id (bütün havuzlarda)
// Çıkış kodu: ① ② ④ ⑥ hatası varsa 1.
// ============================================================================
const fs = require('fs');
const path = require('path');
const KOK = path.join(__dirname, '..');
const DATA = path.join(KOK, 'data');

// PAKET-A2 (13 Eylül 2026) tarafından eklenen kayıtların kimlikleri
const A2_ID = [
  // 0032/H-0014 Otranto
  "savas-otranto-1480-1481", "tartisma-otranto-1480-idamlar", "dis-yankilar-otranto-1480",
  // 0045/H-0011 mimari üslup · 0032/H-0009 Topkapı
  "mimari-topkapi-sarayi", "tartisma-topkapi-sarayi", "mimari-dolmabahce-sarayi", "mimari-fatih-camii", "mimari-rumelihisari", "mimari-sehzade-camii", "mimari-yeni-cami", "mimari-beyazit-camii",
  // 0045/H-0007 savaş hikâyeleri (dalga 3)
  "savas-budin-1541", "savas-hacova-1596", "savas-prut-1711", "savas-cesme-1770", "savas-plevne-1877",
  // 0045/H-0010 padişah magazin (dalga 3)
  "bayezid1-esaret-aksehir-1403", "mehmed3-culus-gecesi-1595", "mehmed3-sehzade-mahmud-fal-1603", "ahmed1-kardesi-mustafayi-oldurtmemesi", "osman2-hac-niyeti-katl-1622", "mustafa1-kubbeyi-delen-asiler-1622", "ibrahim-katli-kim-emretti-1648", "mehmed4-avci-sultan-hal-1687", "selim3-mahmud2-28-temmuz-1808", "abdulaziz-olumu-intihar-cinayet-1876", "murad5-kisa-saltanat-kacirma-1876",
  // 0045/H-0009 antlaşma kartları (dalga 3)
  "antlasma-istanbul-1700", "antlasma-ferhad-pasa-istanbul-1590", "antlasma-prut-1711", "antlasma-hunkar-iskelesi-1833", "antlasma-ayastefanos-1878", "antlasma-mondros-1918", "sebep-sonuc-hunkar-iskelesi-1833", "sebep-sonuc-mondros-1918",
  // 0044/H-0020 Bâkî · 0034/H-0044 Hâfız Osman · 0027/H-0005 madde görselleri
  "1566-09-30-baki-divani-yazmasi-met", "1695-01-01-hafiz-osman-hilye-1691", "1513-01-01-piri-reis-dunya-haritasi", "1526-01-01-kitab-i-bahriye-kibris", "1571-10-07-inebahti-nmm-tablosu", "1478-01-01-topkapi-babihumayun-photochrom", "1522-12-21-rodos-kusatmasi-suleymanname", "1526-08-29-mohac-bamberg-1526", "1529-09-27-viyana-kusatmasi-beham",
  // __A2_ID_LISTESI__
];
// ③ için elle incelenmiş, "aynı gündeki bütün maddeler AYNI olaya ait" hükmü verilmiş günler
const IZINLI_COK_MADDELI_GUN = {
  "1480-08-11": "Otranto — olaylar_ek.js 'Otranto çıkarması' + kronoloji_italya.js 'Osmanlı çıkarmasıyla işgali', aynı olay",
  "1481-09-10": "Otranto — olaylar_ek.js 'tahliyesi' + kronoloji_italya.js 'geri alınması', aynı olay",
  // __IZIN_LISTESI__
};

function _ekNorm(s) {
  s = String(s == null ? "" : s)
    .replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
    .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c")
    .replace(/[Ââ]/g, "a").replace(/[Îî]/g, "i").replace(/[Ûû]/g, "u");
  if (s.normalize) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return s.toLowerCase().replace(/['‘’`ʼ]/g, "").replace(/\s+/g, " ").trim();
}
function _ekBagEslesir(v, o) {
  if (v == null) return false;
  var s = String(v), i = s.indexOf("|");
  if (i < 0) return s === o.t;
  if (s.slice(0, i) !== o.t) return false;
  var ayirt = _ekNorm(s.slice(i + 1));
  return !ayirt || _ekNorm(o.b).indexOf(ayirt) >= 0;
}
function yukle(dosya) {
  global.window = {};
  eval(fs.readFileSync(path.join(DATA, dosya), 'utf8'));
  const cikti = {};
  for (const k of Object.keys(window)) if (Array.isArray(window[k])) cikti[k] = window[k];
  return cikti;
}

// ── evren: index.html'in yüklediği kronoloji dosyaları ─────────────────────
const html = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
// yalnız GERÇEK <script src> satırları: yorumdaki "data/olaylar*.js" gibi desen metinleri
// ilk koşuda dosya adı sanıldı ("diskte yok" uyarısı) — `*` içeren adlar elenir.
const yuklu = [...html.matchAll(/<script[^>]*src=["']data\/((?:olaylar|kronoloji)[^"'?*]*\.js)/g)].map(m => m[1]);
const evrenDosya = [...new Set(yuklu)];
const MADDE = [];
for (const f of evrenDosya) {
  if (!fs.existsSync(path.join(DATA, f))) { console.log('⚠ index.html bağlı ama diskte yok:', f); continue; }
  const d = yukle(f);
  for (const k of Object.keys(d)) for (const o of d[k]) if (o && o.t && o.b) MADDE.push({ t: o.t, b: o.b, f });
}
const GUN = {};
for (const o of MADDE) (GUN[o.t] = GUN[o.t] || []).push(o);

// ── ÖZ-SINAV (D010: iki yönde sınanmadan "çalışıyor" sayılmaz) ──────────────
// Bilinen gerçek günlerle: tutması gereken TUTMALI, tutmaması gereken TUTMAMALI.
// Veri değişip bir beklenti bozulursa alet ÇÖKER (exit 2) — sessizce yanlış saymaz.
const OZ_SINAV = [
  ["1480-08-11|Otranto", 2],   // olaylar_ek.js + kronoloji_italya.js
  ["1480-08-11|Venedik", 0],   // o gün Venedik başlıklı madde yok ⇒ ayırıcı REDDETMELİ
  ["1481-09-10", 2],           // ayırıcısız: o günün bütün maddeleri
  ["1566-01-01|Mostar", 1],    // üç maddeli gün, yalnız biri
  ["1566-01-01|mostar", 1],    // büyük/küçük harf duyarsız
  ["1616-06-09|Ahmed", 1],     // "Sultan Ahmed Camii açıldı"
  ["9999-01-01", 0]            // olmayan gün
];
let ozBozuk = 0;
for (const [v, beklenen] of OZ_SINAV) {
  const n = (GUN[String(v).split('|')[0]] || []).filter(o => _ekBagEslesir(v, o)).length;
  if (n !== beklenen) { ozBozuk++; console.log(`✗ ÖZ-SINAV "${v}": beklenen ${beklenen}, ölçülen ${n}`); }
}
if (ozBozuk) { console.log(`ÖZ-SINAV BOZUK (${ozBozuk}) — alet ya da veri değişti, sonuçlara GÜVENME`); process.exit(2); }
console.log(`öz-sınav ✓ ${OZ_SINAV.length}/${OZ_SINAV.length} (tutması gereken tuttu, tutmaması gereken tutmadı)`);

// ── havuz: ekokuma*/merak*/gorsel_madde ────────────────────────────────────
const havuzDosya = fs.readdirSync(DATA).filter(f => /^(ekokuma|merak|gorsel_madde).*\.js$/.test(f));
const KART = [], GORSEL = [];
for (const f of havuzDosya) {
  const d = yukle(f);
  for (const k of Object.keys(d)) for (const c of d[k]) {
    if (!c) continue;
    const kayit = { c, f, k };
    if (/^GORSEL_MADDE/.test(k)) GORSEL.push(kayit); else KART.push(kayit);
  }
}

const hepsi = process.argv.includes('--hepsi');
const secili = x => hepsi || A2_ID.includes(x.c.id);
let hata = 0, uyari = 0, bagSay = 0, bagTamam = 0;
const H = m => { hata++; console.log('  ✗ ' + m); };
const U = m => { uyari++; console.log('  ⚠ ' + m); };

function baglar(c) {
  const l = [].concat(c.olay || c.baglanti || []);
  if ((c.tur === 'magazin' || !c.tur) && c.t && !l.some(v => String(v).split('|')[0] === c.t)) l.push(c.t);
  return l;
}
function bagSina(c) {
  for (const v of baglar(c)) {
    bagSay++;
    const gun = String(v).split('|')[0];
    const adaylar = GUN[gun] || [];
    if (!adaylar.length) { H(`${c.id}: "${v}" — o gün evrende madde YOK`); continue; }
    const tutan = adaylar.filter(o => _ekBagEslesir(v, o));
    if (!tutan.length) { H(`${c.id}: "${v}" — ayırt edici o günün hiçbir başlığında geçmiyor: ` + adaylar.map(o => o.b).join(' ‖ ')); continue; }
    bagTamam++;
    if (tutan.length > 1 && !IZINLI_COK_MADDELI_GUN[gun]) {
      U(`${c.id}: "${v}" ${tutan.length} maddeye düşüyor — elle bak: ` + tutan.map(o => `${o.b} [${o.f}]`).join(' ‖ '));
    }
  }
}

const PD_CC0 = /^(PD([-_].*)?|CC0|CC-Zero)$/i;
console.log(`evren: ${evrenDosya.length} kronoloji dosyası · ${MADDE.length} madde · havuz ${havuzDosya.length} dosya · ${KART.length} kart · ${GORSEL.length} görsel kaydı`);
console.log(hepsi ? 'kapsam: BÜTÜN kayıtlar' : `kapsam: A2 kimlikleri (${A2_ID.length})`);

// ⑥ mükerrer id
const idSay = {};
for (const x of KART.concat(GORSEL)) if (x.c.id) (idSay[x.c.id] = idSay[x.c.id] || []).push(x.f);
for (const [id, fl] of Object.entries(idSay)) if (fl.length > 1 && (hepsi || A2_ID.includes(id))) H(`mükerrer id ${id}: ${fl.join(', ')}`);
// A2 listesinde olup hiçbir dosyada bulunmayan id
for (const id of A2_ID) if (!idSay[id]) H(`A2 listesindeki ${id} hiçbir havuz dosyasında YOK`);

console.log('\n── KARTLAR ──');
for (const x of KART.filter(secili)) {
  const c = x.c;
  console.log(`• ${c.id} [${c.tur}] ${x.f}`);
  if (!c.kaynak || !String(c.kaynak).trim()) H(`${c.id}: kaynak alanı BOŞ`);
  bagSina(c);
}

console.log('\n── GÖRSELLER ──');
function gorselSina(c, g, etiket) {
  if (!g.url) { H(`${etiket}: url yok`); return; }
  const yol = path.join(KOK, g.url);
  if (!fs.existsSync(yol)) H(`${etiket}: dosya YOK ${g.url}`);
  else {
    const kb = fs.statSync(yol).size / 1024;
    if (kb > 400 && !/^assets\/portreler\//.test(g.url)) U(`${etiket}: ${kb.toFixed(0)} KB (> 400)`);
  }
  if (!/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(g.gorsel_kaynak || '')) H(`${etiket}: gorsel_kaynak Commons dosya sayfası değil: ${g.gorsel_kaynak}`);
  if (!PD_CC0.test(String(g.lisans || '').trim())) H(`${etiket}: lisans PD/CC0 değil: ${g.lisans}`);
}
for (const x of GORSEL.filter(secili)) {
  const c = x.c;
  console.log(`• ${c.id} [${c.tur}]`);
  bagSina(c);
  if (Array.isArray(c.gorseller)) c.gorseller.forEach((g, i) => gorselSina(c, g, `${c.id}#${i}`));
  else gorselSina(c, c, c.id);
  // ⑤ görsel çakışması: bu kaydın bağlandığı her maddeye DAHA ÖNCE sıralanmış bir kayıt da düşüyor mu
  const sira = GORSEL.indexOf(x);
  for (const v of [].concat(c.olay || [])) {
    const gun = String(v).split('|')[0];
    for (const o of (GUN[gun] || []).filter(o => _ekBagEslesir(v, o))) {
      const once = GORSEL.slice(0, sira).find(y => [].concat(y.c.olay || []).some(w => _ekBagEslesir(w, o)));
      if (once) U(`${c.id}: "${o.b}" maddesinde ÖNCE ${once.c.id} görünür (find ilk eşleşen) — bu kayıt orada GÖRÜNMEZ`);
    }
  }
}

console.log(`\nBAĞ: ${bagTamam}/${bagSay} tuttu · HATA ${hata} · UYARI ${uyari}`);
process.exit(hata ? 1 : 0);

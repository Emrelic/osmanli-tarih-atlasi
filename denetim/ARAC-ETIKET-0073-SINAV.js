// -*- coding: utf-8 -*-
// ETIKET-0073 · TARAYICI SINAVI (headless Chrome + CDP) — 20 Eylül 2026
// H-0010: çakışan şehir yazıları — çiftin BATIDAKİ üyesi sola yaslanır (`.sehir.sol`).
//
// A/B KIYASI: `window.ETIKET_AYNALA = false` aynalamayı hiç denetmez, yani
// yamadan ÖNCEKİ davranışı (doğrudan eleme) birebir geri getirir. Tek sayfada,
// yeniden yükleme olmadan iki kip ölçülür.
//
// ⚠️ HER CDP ÇAĞRISI ZAMAN AŞIMLI. İlk koşuda sayfanın JS iş parçacığı
// kilitlendi (layout thrashing) ve zaman aşımı olmadığı için sınav SESSİZCE
// asılı kaldı — hiçbir şey ölçülemedi, hiçbir şey de yazılmadı. Asılı bir
// sınav, başarısız bir sınavdan kötüdür: sayı vermez, teşhis de vermez.
//
// Kullanım: node denetim/ARAC-ETIKET-0073-SINAV.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8791';
const CDP = 9341;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  const req = http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  });
  req.setTimeout(5000, () => { req.destroy(); hata(new Error('zaman asimi')); });
  req.on('error', hata);
});

const SAHNE = [
  { ad: 'riyad-diriye', tarih: '1822-10-24', merkez: [46.625, 24.723] },
  { ad: 'budin-peste', tarih: '1541-08-29', merkez: [19.045, 47.495] },
  { ad: 'hisarlar', tarih: '1452-08-31', merkez: [29.065, 41.085] },
];
const HEDEFLER = ["Dir'iye (Necid)", 'Riyad', 'Budin', 'Peşte', 'Anadolu Hisarı', 'Rumeli Hisarı'];
const ZOOMLAR = [6, 8, 10];

(async () => {
  const KOK = path.resolve(__dirname, '..');
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'etiket0073-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', 'http://localhost:' + PORT + '/index.html'], { stdio: 'ignore' });
  const bitir = (sonuc) => {
    console.log(JSON.stringify(sonuc, null, 1));
    fs.writeFileSync(path.join(KOK, 'denetim', 'ETIKET-0073-SINAV.json'), JSON.stringify(sonuc, null, 1), 'utf8');
    try { ch.kill(); } catch (e) { }
    try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
    process.exit(0);
  };
  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) { }
  }
  if (!hedef) return bitir({ durum: 'CHROME ACILMADI' });
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bek = new Map();
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.id && bek.has(m.id)) { bek.get(m.id)(m); bek.delete(m.id); } });
  const gonder = (metot, p, ms) => {
    const id = ++no;
    return Promise.race([
      new Promise(r => { bek.set(id, r); ws.send(JSON.stringify({ id, method: metot, params: p || {} })); }),
      new Promise(r => setTimeout(() => { bek.delete(id); r({ ZAMAN_ASIMI: metot + ' ' + (ms || 20000) + 'ms' }); }, ms || 20000)),
    ]);
  };
  const js = async (ifade, ms) => {
    const c = await gonder('Runtime.evaluate', { expression: ifade, awaitPromise: true, returnByValue: true }, ms);
    if (c.ZAMAN_ASIMI) return { ZAMAN_ASIMI: c.ZAMAN_ASIMI };
    if (c.result && c.result.exceptionDetails) return { HATA: c.result.exceptionDetails.text + ' ' + ((c.result.exceptionDetails.exception || {}).description || '') };
    return c.result && c.result.result ? c.result.result.value : null;
  };
  await gonder('Runtime.enable');
  await gonder('Page.enable');

  // ⚠️ YOKLAMA SENKRON VE DIŞARIDAN. İlk sürüm sayfanın İÇİNDE `await`li bir
  // döngü kuruyordu; sayfanın JS iş parçacığı açılış yükü altındayken (261
  // dosya · 157,6 MB ham — YUKLEME-0072'nin ölçtüğü sayı) o `setTimeout`lar
  // da gecikiyor ve tek bir CDP çağrısı zaman aşımına düşüp sınavı bitiriyordu.
  // "Sayfa hazır değil" ile "sorumu soramadım" ayrı sorulardır.
  let hazir = false, tur = 0;
  for (; tur < 150 && hazir !== true; tur++) {
    const c = await js('!!window.haritaHazir', 10000);
    if (c === true) { hazir = true; break; }
    await bekle(3000);
  }
  const sonuc = { hazir, hazir_tur: tur, hazir_sn: tur * 3 };
  sonuc.kip = {};
  if (hazir !== true) return bitir(sonuc);

  sonuc.css_kural = await js(`(()=>{let n=0,metin=null;
    for(const ss of document.styleSheets){ let k; try{k=ss.cssRules;}catch(e){continue;}
      for(const r of k){ if(r.selectorText && r.selectorText.indexOf('.sehir.sol')===0){ n++; if(!metin) metin=r.cssText.slice(0,200); } } }
    return {sayi:n, ornek:metin};})()`);

  // Sahneyi kur + ölç. `sure_ms` sehirGuncelle'nin KENDİ süresidir (aynalamanın
  // maliyeti burada görünür).
  const OLC = (tarih, lon, lat, z, aynala) => `(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
    window.ETIKET_AYNALA = ${aynala};
    document.querySelectorAll('.sehir.sol').forEach(e=>e.classList.remove('sol'));
    try { tarihAyarla(gunIdx('${tarih}')); } catch(e) { return {HATA:'tarihAyarla: '+e.message}; }
    harita.jumpTo({center:[${lon},${lat}], zoom:${z}});
    await b(600);
    const t0 = performance.now();
    try { sehirGuncelle(suanki); } catch(e) { return {HATA:'sehirGuncelle: '+e.message}; }
    const sure = +(performance.now()-t0).toFixed(1);
    await b(200);
    // ⚠️ EVREN İKİ KATMAN. İlk sürüm yalnız \`.sehir\` sayıyordu ve "çakışma 0"
    // diyordu; ekran görüntüsünde ise Riyad'ın üstünde italik bir yazı vardı.
    // O yazı \`.bosluk-kutu\` (devletsiz-yerleşim halkası) idi — yani ölçüm
    // doğruydu ama SORULMAYAN soruda temizdi. Artık iki katman birlikte ölçülür.
    const els = Array.from(document.querySelectorAll('.sehir, .bosluk-kutu'));
    const kayit = els.map(e=>{const r=e.getBoundingClientRect();
      const halka = e.classList.contains('bosluk-kutu');
      const adEl = e.querySelector(halka ? '.bosluk-ad' : '.s-ad');
      const gizli = adEl ? getComputedStyle(adEl).display === 'none' : true;
      const ar = (adEl && !gizli) ? adEl.getBoundingClientRect() : null;
      return {ad:(adEl||{}).textContent||'', halka:halka, sade:halka&&e.classList.contains('sade'),
              adGizli:gizli, sol:e.classList.contains('sol'),
              al: ar?+ar.left.toFixed(1):null, at: ar?+ar.top.toFixed(1):null,
              ar: ar?+ar.right.toFixed(1):null, ab: ar?+ar.bottom.toFixed(1):null,
              l:+r.left.toFixed(1), t:+r.top.toFixed(1), r:+r.right.toFixed(1), bo:+r.bottom.toFixed(1), w:+r.width.toFixed(1)};})
      .filter(k=>k.w>0);
    // ⚠️ ÇAKIŞMA = OKUNAN İKİ YAZININ ÜST ÜSTE BİNMESİ. Emre'nin şikâyeti
    // yazı; gizli ad (asgarî işaret, sade halka) çakışma üretmez, o yüzden
    // kıyas AD elemanının kendi kutusuyla yapılır, kabın kutusuyla değil.
    // ⚠️ VE YALNIZ EKRANDA OLANLAR. MapLibre işaretleri pano dışında da DOM'da
    // durur ve orada birbirine girer; onları saymak "28 çakışma" gibi ürkütücü
    // ama GÖRÜNMEYEN sayılar üretiyordu (ölçüldü: Acoma Pueblo ↔ Oraibi, ikisi
    // de Arizona'da, sahne Riyad'dayken). Çakışma ancak görülebiliyorsa kusurdur.
    const W = window.innerWidth, Hy = window.innerHeight;
    const yazili = kayit.filter(k=>k.ar!==null && k.ad &&
                                   k.ar>0 && k.al<W && k.ab>0 && k.at<Hy);
    let cakisan=[];
    for(let i=0;i<yazili.length;i++) for(let j=i+1;j<yazili.length;j++){
      const a=yazili[i],c=yazili[j];
      if(a.al<c.ar&&a.ar>c.al&&a.at<c.ab&&a.ab>c.at)
        cakisan.push([a.ad+(a.halka?'(halka)':''), c.ad+(c.halka?'(halka)':'')]);
    }
    const H = ${JSON.stringify(HEDEFLER)};
    const ekranda = k => k.r>0 && k.l<W && k.bo>0 && k.t<Hy;
    return {zoom:+harita.getZoom().toFixed(2), sure_ms:sure,
            dom:kayit.filter(k=>!k.halka&&ekranda(k)).length,
            yazili_ekranda:yazili.length,
            halka_dom:kayit.filter(k=>k.halka&&ekranda(k)).length,
            halka_sade:kayit.filter(k=>k.halka&&k.sade&&ekranda(k)).length,
            sol:kayit.filter(k=>k.sol).length, cakisan_cift:cakisan.length,
            cakisanlar:cakisan.slice(0,10),
            hedefler:kayit.filter(k=>H.indexOf(k.ad)>=0)
                          .map(k=>({ad:k.ad,halka:k.halka,sade:k.sade,sol:k.sol,l:k.l,r:k.r,t:k.t}))};})()`;

  for (const kip of [{ ad: 'A_yamasiz', bayrak: 'false' }, { ad: 'B_yamali', bayrak: 'true' }]) {
    sonuc.kip[kip.ad] = {};
    for (const s of SAHNE) {
      sonuc.kip[kip.ad][s.ad] = {};
      for (const z of ZOOMLAR) {
        const o = await js(OLC(s.tarih, s.merkez[0], s.merkez[1], z, kip.bayrak), 45000);
        sonuc.kip[kip.ad][s.ad]['z' + z] = o;
        if (kip.ad === 'B_yamali' && o && !o.ZAMAN_ASIMI && !o.HATA) {
          const png = await gonder('Page.captureScreenshot', { format: 'png' }, 30000);
          if (png.result && png.result.data) {
            fs.writeFileSync(path.join(KOK, 'denetim', `ETIKET-0073-${s.ad}-z${z}.png`),
                             Buffer.from(png.result.data, 'base64'));
          }
        }
      }
    }
  }
  bitir(sonuc);
})();

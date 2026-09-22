// -*- coding: utf-8 -*-
// HALKA-SARI-0072 · paket 0072 / H-0003 TARAYICI SINAVI (headless Chrome + CDP)
// 20 Eylül 2026. Emsal: denetim/ARAC-OK-0071-SINAV.js (aynı CDP iskeleti).
//
// SORU 1 — ⑧ "Kaynakla kesinleşmiş sahiplik halkaları" KAPALIYKEN 1813-10-05'te
//          ekranda sarı işaret ÇİZİLİYOR MU? Çiziliyorsa HANGİ katman?
// SORU 2 — ⑧ AÇILINCA o işaretler ne oluyor, halka geliyor mu?
//
// Sayfaya DOKUNULMAZ: gerçek index.html açılır (yeni data dosyası yok, enjeksiyon
// gerekmiyor). localStorage temizlenir ⇒ ⑧ varsayılan KAPALI.
// Kullanım: node denetim/ARAC-HALKA-SARI-0072-SINAV.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const CDP = 9341;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const GUN = '1813-10-05';           // Emre'nin görselindeki gün
const ODAK = [16.5, 45.12];         // Kostajnica–Bosanski Novi arası
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

(async () => {
  const KOK = path.resolve(__dirname, '..');
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'halkasari0072-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', 'http://localhost:' + PORT + '/index.html'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) { }
  }
  if (!hedef) { console.log(JSON.stringify({ durum: 'CHROME ACILMADI' })); ch.kill(); return; }
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bek = new Map();
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.id && bek.has(m.id)) { bek.get(m.id)(m); bek.delete(m.id); } });
  const gonder = (metot, p) => { const id = ++no; return new Promise(r => { bek.set(id, r); ws.send(JSON.stringify({ id, method: metot, params: p || {} })); }); };
  const js = async ifade => {
    const c = await gonder('Runtime.evaluate', { expression: ifade, awaitPromise: true, returnByValue: true });
    if (c.result && c.result.exceptionDetails) return { HATA: c.result.exceptionDetails.text + ' ' + ((c.result.exceptionDetails.exception || {}).description || '') };
    return c.result && c.result.result ? c.result.result.value : null;
  };
  await gonder('Runtime.enable');
  // 🔴 localStorage TEMİZLEME + Page.reload DENENDİ VE ÖLÇÜLDÜ: `hazir:false`
  // verdi (reload sonrası bağlam değişiyor). Gerek de yok — profil her koşuda
  // mkdtemp ile YENİ, localStorage BOŞ ⇒ ⑧ zaten varsayılan (KAPALI) açılıyor.
  // Sınav bunu iddia etmiyor, `ayar_isaretli`yi ÖLÇÜYOR.

  // ⚠️ BEKLEME PARÇALI (0071 sınavının dersi): tek uzun awaitPromise null döner.
  let hazir = false;
  for (let i = 0; i < 20 && hazir !== true; i++) {
    hazir = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<16;i++){if(window.haritaHazir)return true;await b(500);}return false;})()');
  }
  const sonuc = { hazir, gun: GUN, odak: ODAK };
  if (hazir !== true) {
    sonuc.teshis = await js(`(()=>({ url: location.href, hata: (window.__hatalar||null),
      maplibre: typeof maplibregl, harita: typeof harita,
      haritaHazir: typeof haritaHazir === 'undefined' ? 'tanimsiz' : haritaHazir,
      yerlesim: (window.YERLESIMLER||[]).length, donem: (window.DONEMLER||[]).length,
      govde: document.body ? document.body.innerHTML.length : 0 }))()`);
  }

  if (hazir === true) {
    // ---- Günü ayarla + bölgeye uç, boyama otursun
    sonuc.kurulum = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      tarihAyarla(gunIdx('${GUN}'));
      harita.jumpTo({center:[${ODAK[0]},${ODAK[1]}], zoom:8});
      for(let i=0;i<60;i++){ if(harita.isStyleLoaded() && !harita.isMoving()) break; await b(250); }
      await b(1200);
      return { gun_idx: gunIdx('${GUN}'), merkez: harita.getCenter().toArray(), zoom: harita.getZoom() };})()`);

    const olc = () => js(`(()=>{
      const ayar = document.getElementById('ayar-halka');
      function kaynakVeri(id){ const s = harita.getSource(id); const d = s && s._data;
        return (d && d.features) ? d.features : []; }
      const nokta = kaynakVeri('hukuki-sinir-nokta').map(f=>({
        ad: f.properties.ad || null, kayit_id: f.properties.kayit_id || null,
        renk: f.properties.renk || null, kon: f.geometry.coordinates }));
      const halkaVeri = kaynakVeri('halka-kaynakli').map(f=>({
        yer: f.properties.yer, devlet: f.properties.devlet, renk: f.properties.renk }));
      const ciz = l => { try { return harita.queryRenderedFeatures({layers:[l]}).map(f=>({
        ad: f.properties.ad || f.properties.yer || null, kayit_id: f.properties.kayit_id || null,
        renk: f.properties.renk || null })); } catch(e){ return {HATA:e.message}; } };
      return {
        ayar_var: !!ayar, ayar_isaretli: ayar ? ayar.checked : null,
        KHALKA: { acik: KHALKA.acik, yuklendi: KHALKA.yuklendi, cizilen: KHALKA.cizilen,
                  yerSayisi: KHALKA.yerSayisi, havuz: _kaynakliHalkaHavuz().length },
        halka_kaynak_feature: halkaVeri.length, halka_kaynak: halkaVeri.slice(0,20),
        halka_layer_gorunur: harita.getLayer('halka-kaynakli') ? harita.getLayoutProperty('halka-kaynakli','visibility') || 'visible' : null,
        halka_CIZILEN: ciz('halka-kaynakli'),
        nokta_kaynak_feature: nokta.length, nokta_kaynak: nokta,
        nokta_layer_gorunur: harita.getLayer('hukuki-sinir-nokta') ? harita.getLayoutProperty('hukuki-sinir-nokta','visibility') || 'visible' : null,
        nokta_suzgec: harita.getFilter('hukuki-sinir-nokta') || null,
        nokta_CIZILEN: ciz('hukuki-sinir-nokta'),
        taraf_renk_habsburg: _cTarafRengi('habsburg'),
        taraf_renk_avusturya: _cTarafRengi('avusturya')
      };})()`);

    // 🔴 EKRAN GÖRÜNTÜSÜ ALINMIYOR — DENENDİ, ÖLÇÜLDÜ, VAZGEÇİLDİ. Bu sayfada
    // (swiftshader + büyük MapLibre tuvali) `Page.captureScreenshot` cevapsız
    // kalıyor VE cevapsız kalırken AYNI CDP oturumundaki `Runtime.evaluate`
    // çağrılarını da kilitliyor; 20 sn'lik `Promise.race` ile çağırmak bile
    // kurtarmadı (iki koşu 280 sn'de bitmedi, hiçbir sayı üretilemedi).
    // Kanıt SAYIDIR: `nokta_CIZILEN`/`halka_CIZILEN` = `queryRenderedFeatures`,
    // yani gerçekten ÇİZİLEN feature'lar — "veri var mı" değil "çiziliyor mu".

    sonuc.A_ayar_KAPALI = await olc();

    // ---- ⑧'i AÇ (kullanıcının yaptığı gibi: kutuya tıkla)
    sonuc.B_ayar_ACIK = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const ayar = document.getElementById('ayar-halka');
      if(!ayar) return {durum:'AYAR KUTUSU YOK'};
      ayar.click();
      for(let i=0;i<40;i++){ if(KHALKA.yuklendi) break; await b(250); }
      await b(800);
      function kaynakVeri(id){ const s = harita.getSource(id); const d = s && s._data;
        return (d && d.features) ? d.features : []; }
      const ciz = l => { try { return harita.queryRenderedFeatures({layers:[l]}).map(f=>({
        ad: f.properties.ad || f.properties.yer || null, kayit_id: f.properties.kayit_id || null,
        renk: f.properties.renk || null })); } catch(e){ return {HATA:e.message}; } };
      return {
        ayar_isaretli: ayar.checked,
        KHALKA: { acik: KHALKA.acik, yuklendi: KHALKA.yuklendi, cizilen: KHALKA.cizilen,
                  yerSayisi: KHALKA.yerSayisi, havuz: _kaynakliHalkaHavuz().length },
        halka_kaynak_feature: kaynakVeri('halka-kaynakli').length,
        halka_CIZILEN: ciz('halka-kaynakli'),
        nokta_kaynak_feature: kaynakVeri('hukuki-sinir-nokta').length,
        nokta_CIZILEN: ciz('hukuki-sinir-nokta'),
        nokta_suzgec: harita.getFilter('hukuki-sinir-nokta') || null
      };})()`);


    // ---- Havuzda bu iki şehir için kaynaklı halka tanıklığı VAR MI?
    sonuc.C_havuzda_bu_iki_sehir = await js(`(()=>{
      const havuz = _kaynakliHalkaHavuz();
      const ara = /kostaj|kostayni|novi/i;
      return { havuz: havuz.length,
               eslesen: havuz.filter(k=>ara.test(k.yer||'')).map(k=>({id:k.id,yer:k.yer,devlet:k.devlet,f:k.f,t:k.t,tarih:k.tarih})) };})()`);

    // ---- Halka şemasında zaman alanı VAR MI (Emre'nin 3. isteği)
    sonuc.D_halka_zaman_alani = await js(`(()=>{
      const havuz = _kaynakliHalkaHavuz();
      let aralik=0, tekil=0, zamansiz=0, penceresiz=0;
      havuz.forEach(k=>{ if(k.f&&k.t) aralik++; else if(k.tarih) tekil++; else zamansiz++;
                         if(!kaynakliHalkaPencere(k)) penceresiz++; });
      return { havuz: havuz.length, aralik_ft: aralik, tekil_tarih: tekil,
               zaman_alani_YOK: zamansiz, pencere_cozulemeyen: penceresiz,
               ornek_pencere: havuz.slice(0,3).map(k=>({id:k.id, pencere: kaynakliHalkaPencere(k)})) };})()`);

    // ---- C kayıtlarının zaman pencereleri (sınırsızlık orada mı?)
    sonuc.E_C_kayit_pencereleri = await js(`(()=>{
      return (window.HUKUKI_SINIRLAR||[]).map(k=>({ id:k.id, f:k.f, t:k.t,
        yil: (k.f&&k.t) ? (+String(k.t).slice(0,4)) - (+String(k.f).slice(0,4)) : null,
        hat_tur: k.hat ? k.hat.tur : null,
        nokta_adet: (k.hat && k.hat.nokta_atamalari) ? k.hat.nokta_atamalari.length : 0 }));})()`);

    sonuc.konsol_ozet = await js(`(()=>({ surum: (document.querySelector('script[src*="js/app.js"]')||{}).src||null }))()`);
  }

  console.log(JSON.stringify(sonuc, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
})();

// -*- coding: utf-8 -*-
// SEFER-OK-0070 · TEŞHİS — "ok verisi kaynakta var ama ekranda yok" (20 Eylül 2026)
// Sınav (ARAC-SEFER-OK-SINAV-0070.js ⑨) okun güzergâhı üzerindeki 4 noktada
// `queryRenderedFeatures` = 0 ölçtü. Bu alet SEBEBİ ayırır; hipotezler tek tek
// yalanlanır, biri kalana kadar:
//   H1 kaynakta veri yok           → kaynağın kendi feature sayısı
//   H2 kaynak/katman eşleşmiyor    → aynı veriyle ÇIPLAK bir sınav katmanı
//   H3 line-dasharray             → sınav katmanı desensiz
//   H4 kamera/geometri            → ekran koordinatları ve tuval ölçüsü
// Kullanım: node denetim/ARAC-SEFER-OK-TESHIS-0070.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const CDP = 9334;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'seferok-t-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', 'http://localhost:' + PORT + '/'], { stdio: 'ignore' });

  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) { }
  }
  if (!hedef) { console.log('CHROME ACILMADI'); ch.kill(); return; }
  const ws = new WebSocket(hedef.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));
  let no = 0; const bek = new Map();
  ws.addEventListener('message', ev => { const m = JSON.parse(ev.data); if (m.id && bek.has(m.id)) { bek.get(m.id)(m); bek.delete(m.id); } });
  const gonder = (metot, p) => { const id = ++no; return new Promise(r => { bek.set(id, r); ws.send(JSON.stringify({ id, method: metot, params: p || {} })); }); };
  const js = async ifade => {
    const c = await gonder('Runtime.evaluate', { expression: ifade, awaitPromise: true, returnByValue: true });
    if (c.result && c.result.exceptionDetails) return { HATA: c.result.exceptionDetails.text };
    return c.result && c.result.result ? c.result.result.value : null;
  };
  await gonder('Runtime.enable');
  await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<120;i++){if(window.haritaHazir)return 1;await b(500);}return 0;})()`);

  const cikti = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
    tarihAyarla(gunIdx('1798-07-20')); await b(800);
    const m=(window.seferler||[]).find(x=>x.ekli&&x.tur==='sefer');
    if(!m) return {durum:'ekranda sefer oku yok'};
    let a=[999,999],c=[-999,-999];
    m.yol.forEach(p=>{a=[Math.min(a[0],p[0]),Math.min(a[1],p[1])];c=[Math.max(c[0],p[0]),Math.max(c[1],p[1])];});
    harita.fitBounds([a,c],{padding:80,duration:0}); await b(1500);

    const s=harita.getSource('seferler'); const d=s.serialize?s.serialize().data:s._data;
    const f=(d&&d.features)||[];

    // H2/H3: aynı veriyle ÇIPLAK katman — desen yok, filtre yok, tam opak
    if(!harita.getSource('_teshis')) harita.addSource('_teshis',{type:'geojson',data:d});
    else harita.getSource('_teshis').setData(d);
    if(!harita.getLayer('_teshis-cizgi'))
      harita.addLayer({id:'_teshis-cizgi',type:'line',source:'_teshis',
        paint:{'line-color':'#ff0000','line-width':6}});
    await b(1200);

    // H3'ün ayırt edici sınavı: AYNI çıplak katmana sırayla desen verilip
    // ölçülür. Tek değişken line-dasharray'dir. (Bu blok bir template literal
    // İÇİNDE: buraya ters tırnak yazmak literali kapatır — bir kez yaşandı.)
    const p0=harita.project(m.yol[Math.floor(m.yol.length/2)]);
    const kutu0=[[p0.x-8,p0.y-8],[p0.x+8,p0.y+8]];
    const desenSina=async(desen)=>{
      if(desen) harita.setPaintProperty('_teshis-cizgi','line-dasharray',desen);
      else harita.setPaintProperty('_teshis-cizgi','line-dasharray',null);
      await b(900);
      return harita.queryRenderedFeatures(kutu0,{layers:['_teshis-cizgi']}).length;};
    const desen_sinavi = { desensiz: await desenSina(null),
                           d_0_433: await desenSina([0.433,0.433]),
                           d_1_5:   await desenSina([1.5,1.5]),
                           d_0_9:   await desenSina([0.9,0.9]) };
    await desenSina(null);

    // H5: kaynak AYARLARI mı? seferler kaynağı agirKaynak() ile kuruluyor
    // (maxzoom 9 · buffer 32 · tolerance 0.5); çıplak sınav kaynağında bunlar
    // YOK. Aynı veriyi aynı ayarlarla ikinci bir kaynağa koyup ölç.
    if(!harita.getSource('_teshis2')) harita.addSource('_teshis2',
      {type:'geojson',maxzoom:9,buffer:32,tolerance:0.5,data:d});
    if(!harita.getLayer('_teshis2-cizgi'))
      harita.addLayer({id:'_teshis2-cizgi',type:'line',source:'_teshis2',
        paint:{'line-color':'#00ff00','line-width':6}});
    await b(1200);
    const kaynak_ayari = harita.queryRenderedFeatures(kutu0,{layers:['_teshis2-cizgi']}).length;

    // H6: FİLTRE mi? sefer katmanının filtresi geçici kaldırılır.
    const eskiFiltre = harita.getFilter('sefer-cizgi-sefer');
    harita.setFilter('sefer-cizgi-sefer', null); await b(900);
    const filtresiz = harita.queryRenderedFeatures(kutu0,{layers:['sefer-cizgi-sefer']}).length;
    harita.setFilter('sefer-cizgi-sefer', eskiFiltre); await b(300);

    // H7: BOYA mı? aynı katmana çıplak boya verilir (desen yok, opaklık 1).
    const eskiDesen = harita.getPaintProperty('sefer-cizgi-sefer','line-dasharray');
    harita.setPaintProperty('sefer-cizgi-sefer','line-dasharray',null);
    harita.setPaintProperty('sefer-cizgi-sefer','line-opacity',1); await b(900);
    const ciplak_boya = harita.queryRenderedFeatures(kutu0,{layers:['sefer-cizgi-sefer']}).length;
    harita.setPaintProperty('sefer-cizgi-sefer','line-dasharray',eskiDesen);
    harita.setPaintProperty('sefer-cizgi-sefer','line-opacity',0.92); await b(300);

    const p=harita.project(m.yol[Math.floor(m.yol.length/2)]);
    const kutu=[[p.x-8,p.y-8],[p.x+8,p.y+8]];
    const say=(kat)=>{try{return harita.queryRenderedFeatures(kutu,{layers:kat}).length;}catch(e){return 'HATA:'+e.message;}};
    const tumRender = harita.queryRenderedFeatures(kutu).map(x=>x.layer.id);

    return { ok:m.ad, kaynak_ozellik:f.length,
             kaynak_cizgi:f.filter(x=>x.geometry.type==='LineString').length,
             ekran_nokta:[Math.round(p.x),Math.round(p.y)], tuval:[harita.getCanvas().width,harita.getCanvas().height],
             gorunurluk: Object.keys(HAREKET).map(t=>[t, harita.getLayoutProperty('sefer-cizgi-'+t,'visibility')||'(varsayilan)'])
                          .concat([['sefer-kaynak', harita.getLayoutProperty('sefer-kaynak','visibility')||'(varsayilan)']]),
             kaynak_onbellegi: (()=>{ const sc=harita.style&&harita.style.sourceCaches?harita.style.sourceCaches['seferler']:null;
               if(!sc) return 'sourceCache YOK';
               return { yuklu: sc.loaded ? sc.loaded() : null,
                        kiremit: sc.getVisibleCoordinates?sc.getVisibleCoordinates().length:null,
                        ayni_kaynak: sc.getSource()===harita.getSource('seferler') };})(),
             desen_sinavi, kaynak_ayari_render: kaynak_ayari,
             filtresiz_render: filtresiz, ciplak_boya_render: ciplak_boya,
             render_sefer: say(['sefer-cizgi-sefer']),
             render_teshis_ciplak: say(['_teshis-cizgi']),
             o_noktada_render_edilen_katmanlar: tumRender.filter((v,i,ar)=>ar.indexOf(v)===i),
             sefer_katman_var: !!harita.getLayer('sefer-cizgi-sefer'),
             sefer_kaynagi: harita.getLayer('sefer-cizgi-sefer')?harita.getLayer('sefer-cizgi-sefer').source:null,
             sefer_filtre: JSON.stringify(harita.getFilter('sefer-cizgi-sefer')),
             ornek_ozellik: f.filter(x=>x.geometry.type==='LineString').map(x=>x.properties) };})()`);

  console.log(JSON.stringify(cikti, null, 1));
  const ss = await gonder('Page.captureScreenshot', { format: 'png' });
  if (ss.result && ss.result.data) fs.writeFileSync(path.join(__dirname, 'TESHIS-SEFER-OK-0070.png'), Buffer.from(ss.result.data, 'base64'));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  process.exit(0);
})();

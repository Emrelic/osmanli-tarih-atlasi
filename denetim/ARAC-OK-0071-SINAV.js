// -*- coding: utf-8 -*-
// SEFER-OK-0070 · paket 0071 TARAYICI SINAVI (headless Chrome + CDP) — 20 Eylül 2026
// H-0003 (deniz oku kesikli · kara düz) · H-0004 (olay alanı yanıp sönme) ·
// H-0007 (yurt içi harekât okları).
// Not: `data/seferler_p0071.js` index.html'e HENÜZ BAĞLI DEĞİL (koordinatör
// ekler) — sınavda enjekte edilir; "bağlı değil" ile "çalışmıyor" ayrı sorular.
// Kullanım: node denetim/ARAC-OK-0071-SINAV.js <port>
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = process.argv[2] || '8777';
const CDP = 9336;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

// 🔴 SINAV SAYFASI — index.html'e DOKUNMADAN gerçek sayfayı sınamanın yolu.
// İlk koşuda `data/seferler_p0071.js` sayfaya sonradan enjekte edilmişti ve üç
// yeni ok "yok" göründü; sebebi kusur değil SINAV: app.js `seferler` dizisini
// KURULUŞTA bir kez hesaplıyor, sonradan gelen ad alanı o diziye girmiyor.
// Bu yüzden index.html'in bir KOPYASI üretiliyor: yeni dosyalar app.js'ten ÖNCE
// bağlanıyor. Paylaşılan index.html değişmiyor; kopya sınav sonunda siliniyor.
function sinavSayfasiYaz(kok) {
  const html = fs.readFileSync(path.join(kok, 'index.html'), 'utf8');
  const ek = '<script src="data/seferler_p0071.js"></script>\n'
           + '<script src="js/anim_dili.js"></script>\n';
  const son = '<script src="js/sefer_ok.js"></script>\n';
  const i = html.indexOf('<script src="js/app.js');
  if (i < 0) throw new Error('index.html icinde js/app.js satiri bulunamadi');
  const j = html.indexOf('</script>', i) + '</script>'.length;
  const yeni = html.slice(0, i) + ek + html.slice(i, j) + '\n' + son + html.slice(j);
  const yol = path.join(kok, '_sinav_ok0071.html');
  fs.writeFileSync(yol, yeni, 'utf8');
  return yol;
}

(async () => {
  const KOK = path.resolve(__dirname, '..');
  let sinavYol = null;
  try { sinavYol = sinavSayfasiYaz(KOK); } catch (e) { console.log(JSON.stringify({ durum: 'SINAV SAYFASI YAZILAMADI: ' + e.message })); return; }
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'ok0071-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', 'http://localhost:' + PORT + '/_sinav_ok0071.html'], { stdio: 'ignore' });
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
  // ⚠️ BEKLEME PARÇALI: tek bir 60 sn'lik `awaitPromise` çağrısı CDP'de sessizce
  // null dönebiliyor (ölçüldü — sınav "hazir: null" verip hiçbir şey ölçemedi).
  // Her tur en çok 8 sn bekler, sonuç dışarıda toplanır.
  let hazir = false;
  for (let i = 0; i < 20 && hazir !== true; i++) {
    hazir = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<16;i++){if(window.haritaHazir)return true;await b(500);}return false;})()');
  }

  const sonuc = { hazir };
  if (hazir === true) {
    // ---- H-0003: kara DÜZ, deniz KESİKLİ
    sonuc.h0003_desen = await js(`(()=>({
      sefer_dasharray: harita.getPaintProperty('sefer-cizgi-sefer','line-dasharray') || null,
      deniz_dasharray: harita.getPaintProperty('sefer-cizgi-deniz','line-dasharray') || null,
      sefer_genislik: harita.getPaintProperty('sefer-cizgi-sefer','line-width'),
      deniz_genislik: harita.getPaintProperty('sefer-cizgi-deniz','line-width'),
      deniz_ekran_kesik_px: (function(){var d=harita.getPaintProperty('sefer-cizgi-deniz','line-dasharray');
        var w=harita.getPaintProperty('sefer-cizgi-deniz','line-width');
        return d?[+(d[0]*w).toFixed(1),+(d[1]*w).toFixed(1)]:null;})(),
      lejant_hata: (function(){try{ seferLejanti({sefer:1,deniz:1},{}); return null; }catch(e){ return e.message; }})()
    }))()`);

    // ---- p0071 verisini enjekte et (index.html'e bağlı değil)
    sonuc.enjekte = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      if(!window.SEFERLER_P0071){
        await new Promise((ok,hata)=>{const s=document.createElement('script');s.src='data/seferler_p0071.js';s.onload=ok;s.onerror=()=>hata(new Error('yok'));document.head.appendChild(s);});
        await b(300);
      }
      if(!window.SEFERLER_P0071) return {durum:'DOSYA YUKLENMEDI'};
      // app.js seferler dizisi kuruluşta hesaplandı; yeni kayıtları AYNI
      // dönüşümden geçirmek için sayfayı yeniden kurmak gerekir. Sınav bunun
      // yerine kayıtları doğrudan ölçüyor (veri doğru mu), çizimi ise
      // aşağıdaki "kaynak" ölçümü yapıyor.
      return { kayit: window.SEFERLER_P0071.length,
               adlar: window.SEFERLER_P0071.map(s=>s.ad.slice(0,45)),
               turler: window.SEFERLER_P0071.map(s=>s.tur),
               nokta: window.SEFERLER_P0071.map(s=>s.yol.length) };})()`);

    // ---- H-0004: olay alanı yanıp sönme (Reşid 1807)
    sonuc.h0004_olay_alani = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const olay = olaylar.find(o=>o.t && o.t.indexOf('1807-04-21')===0);
      if(!olay) return {durum:'MADDE YOK'};
      // önceki işaret varsa temizlensin
      document.querySelectorAll('.odak-parlama').forEach(e=>e.remove());
      const kon = (typeof olayKonumu==='function') ? olayKonumu(olay) : null;
      let cagrildi = false;
      const asil = window.isaretYanipSon;
      if (typeof asil === 'function') {
        window.isaretYanipSon = function(h,g){ cagrildi = {hedef:h, glif:g||null}; return asil.apply(this, arguments); };
      }
      // 🔴 TAM AKIŞ — ilk koşuda yalnız obGoster çağrılmıştı ve işaret çıkmadı;
      // ama uygulamada bir maddeye geçiş ÜÇ çağrıdır (app.js K2 notu):
      // tarihAyarla + obGoster + haritayiOlayaGotur. İşaret üçüncüsüne bağlı
      // olabilir — sınav, sınadığı yolu birebir yürümek zorunda.
      try { tarihAyarla(olay.gi); obGoster(olay); haritayiOlayaGotur(olay, true); }
      catch(e) { return {durum:'akis HATA: '+e.message}; }
      for(let i=0;i<40;i++){ if(document.querySelector('.odak-parlama')) break; await b(150); }
      const el = document.querySelector('.odak-parlama');
      const stil = el ? getComputedStyle(el) : null;
      if (typeof asil === 'function') window.isaretYanipSon = asil;
      return { madde: olay.b.slice(0,50), yer_id: olay.yer_id||null, yer_kon: olay.yer_kon||null,
               konum_cozuldu: !!kon, isaretYanipSon_cagrildi: cagrildi,
               dom_isaret: !!el, glif: el ? (el.querySelector('.odak-glif')||{}).textContent||null : null,
               animasyon: stil ? stil.animationName+' '+stil.animationDuration+' x'+stil.animationIterationCount : null };})()`);

    // ---- H-0007: yurt içi harekât maddelerinde ok fazı
    sonuc.h0007_ic_harekat = [];
    for (const t of ['1808-07-19', '1909-04-24', '1703-08-22', '1807-02-20']) {
      sonuc.h0007_ic_harekat.push(await js(`(()=>{
        const olay = olaylar.find(o=>o.t && o.t.indexOf('${t}')===0);
        if(!olay) return {t:'${t}', durum:'MADDE YOK'};
        if(typeof window.SEFER_OK_FAZ!=='function') return {t:'${t}', durum:'FAZ YOK (js/sefer_ok.js bagli degil)'};
        const d = SEFER_OK_FAZ(olay, ()=>{});
        try{ Object.keys(window.SEFER_ANIM_GIZLI||{}).forEach(k=>delete SEFER_ANIM_GIZLI[k]); seferGuncelle(suanki); }catch(e){}
        return {t:'${t}', b: olay.b.slice(0,48), ok_fazi: d};})()`));
    }
    // ---- GÖRSEL KANIT: her yeni ok kendi sahnesinde
    sonuc.ekran = [];
    const sahneler = [
      { ad: 'duckworth-1807', t: '1807-02-20' },
      { ad: 'hareket-ordusu-1909', t: '1909-04-24' },
      { ad: 'edirne-vakasi-1703', t: '1703-08-22' }
    ];
    for (const s of sahneler) {
      const bilgi = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
        const olay = olaylar.find(o=>o.t && o.t.indexOf('${s.t}')===0);
        if(!olay) return {durum:'MADDE YOK'};
        tarihAyarla(olay.gi); await b(600);
        const m=(window.seferler||[]).filter(x=>x.ekli);
        if(!m.length) return {durum:'EKRANDA OK YOK', madde:olay.b.slice(0,40)};
        let a=[999,999],c=[-999,-999];
        m.forEach(x=>x.yol.forEach(p=>{a=[Math.min(a[0],p[0]),Math.min(a[1],p[1])];c=[Math.max(c[0],p[0]),Math.max(c[1],p[1])];}));
        harita.fitBounds([a,c],{padding:70,duration:0}); await b(1600);
        return { madde: olay.b.slice(0,45), ekrandaki_ok: m.map(x=>x.ad.slice(0,40)), turler: m.map(x=>x.tur) };})()`);
      const ss = await gonder('Page.captureScreenshot', { format: 'png' });
      if (ss.result && ss.result.data)
        fs.writeFileSync(path.join(__dirname, 'SINAV-OK-0071-' + s.ad + '.png'), Buffer.from(ss.result.data, 'base64'));
      sonuc.ekran.push(Object.assign({ ad: s.ad }, bilgi));
    }

    sonuc.konsol_hata = await js('(window.__hata||null)');
  }
  console.log(JSON.stringify(sonuc, null, 1));
  ws.close(); ch.kill();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  try { if (sinavYol) fs.unlinkSync(sinavYol); } catch (e) { }
  process.exit(0);
})();

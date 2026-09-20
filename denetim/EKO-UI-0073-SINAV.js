// -*- coding: utf-8 -*-
// EKO-UI-0073 · paket 0073 TARAYICI SINAVI (headless Chrome + CDP) — 20 Eylül 2026
// H-0002 (kart satırında kategori etiketi) · H-0020 (sağ tık "Başlığı/Maddeyi kopyala").
//
// Emsal: denetim/ARAC-OK-0071-SINAV.js. FARK: bu sınav index.html'in KOPYASINI
// üretmiyor — yeni bir `data/*.js` bağlanmıyor, ölçülen şey app.js + style.css'in
// kendisi. Paylaşılan index.html'e DOKUNULMUYOR.
// Statik sunucuyu sınav kendi açar (başka oturumun sunucusuna bağlanmaz).
//
// Kullanım: node denetim/EKO-UI-0073-SINAV.js
'use strict';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const PORT = 8791;
const CDP = 9341;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const KOK = path.resolve(__dirname, '..');
const bekle = ms => new Promise(r => setTimeout(r, ms));
const getJSON = yol => new Promise((ok, hata) => {
  http.get({ host: '127.0.0.1', port: CDP, path: yol }, res => {
    let s = ''; res.on('data', d => s += d); res.on('end', () => { try { ok(JSON.parse(s)); } catch (e) { hata(e); } });
  }).on('error', hata);
});

const TIP = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.geojson': 'application/json; charset=utf-8', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.ico': 'image/x-icon'
};
function sunucuAc() {
  return http.createServer((istek, cevap) => {
    let p = decodeURIComponent(istek.url.split('?')[0]);
    if (p === '/') p = '/index.html';
    const tam = path.join(KOK, p);
    if (tam.indexOf(KOK) !== 0) { cevap.writeHead(403); cevap.end(); return; }
    fs.readFile(tam, (h, veri) => {
      if (h) { cevap.writeHead(404); cevap.end(); return; }
      cevap.writeHead(200, { 'Content-Type': TIP[path.extname(tam).toLowerCase()] || 'application/octet-stream' });
      cevap.end(veri);
    });
  }).listen(PORT, '127.0.0.1');
}

// ESKİ (H-0002 öncesi) görünümü geri getiren stil — aynı sayfada ÖNCE/SONRA
// ölçmenin yolu. `display:contents` kolonu kaldırır, çocukları doğrudan
// `.ek-ak-baslik`in flex çocukları yapar: eski dizilimin birebir kendisi.
const ESKI_STIL = '.ek-ak-baslik{align-items:baseline;padding:4px 9px;min-height:0;line-height:normal}'
  + '.ek-ak-kol{display:contents}.ek-ak-ustyazi{display:none}.ek-ak-simge{font-size:14px}';

(async () => {
  const sunucu = sunucuAc();
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'ekoui0073-'));
  const ch = spawn(CHROME, ['--headless=new', '--disable-gpu', '--use-gl=swiftshader',
    '--remote-debugging-port=' + CDP, '--user-data-dir=' + profil, '--window-size=1400,900',
    '--no-first-run', 'http://localhost:' + PORT + '/index.html'], { stdio: 'ignore' });
  let hedef = null;
  for (let i = 0; i < 40 && !hedef; i++) {
    await bekle(500);
    try { hedef = (await getJSON('/json/list')).find(t => t.type === 'page' && t.url.indexOf('localhost') > 0); } catch (e) { }
  }
  if (!hedef) { console.log(JSON.stringify({ durum: 'CHROME ACILMADI' })); ch.kill(); sunucu.close(); return; }
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
  // Bekleme PARÇALI (emsalin ölçtüğü tuzak: tek uzun awaitPromise sessizce null döner).
  let hazir = false;
  for (let i = 0; i < 20 && hazir !== true; i++) {
    hazir = await js('(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));for(let i=0;i<16;i++){if(window.haritaHazir)return true;await b(500);}return false;})()');
  }

  const sonuc = { hazir };
  if (hazir === true) {
    // ---- ÖLÇÜM 0: kodun tanıdığı kategori evreni (Emre'nin saydığı adlarla kıyas)
    sonuc.kategori_evreni = await js(`(()=>{
      const ek = Object.keys(EKOKUMA_TUR).map(t=>({tur:t, etiket:EKOKUMA_TUR[t].etiket, ust:_ekKategoriUstYazi(t,_ekEtiketiBol(EKOKUMA_TUR[t].etiket).ad)}));
      const kv = Object.keys(AKORDEON_EK_TUR).map(t=>({tur:t, etiket:AKORDEON_EK_TUR[t].etiket, ust:_ekKategoriUstYazi(t,_ekEtiketiBol(AKORDEON_EK_TUR[t].etiket).ad)}));
      return { ekokuma_tur: ek.length, akordeon_ek_tur: kv.length, toplam: ek.length+kv.length, liste: ek.concat(kv) };
    })()`);

    // ---- Çok satırlı bir madde seç: Emre'nin şikâyet ettiği Vak'a-i Hayriyye
    sonuc.madde = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const olay = olaylar.find(o=>o.t && o.t.indexOf('1826-06-15')===0) ;
      if(!olay) return {durum:'MADDE YOK'};
      tarihAyarla(olay.gi); obGoster(olay); await b(900);
      const sat = document.querySelectorAll('#ob-ekokuma-butonlar .ek-ak-satir');
      return { t: olay.t, b: olay.b.slice(0,60), satir: sat.length };})()`);

    // ---- H-0002 ①: etiketler basıldı mı, doğru mu, KIRPILDI mı
    sonuc.h0002_etiket = await js(`(()=>{
      const sat=[...document.querySelectorAll('#ob-ekokuma-butonlar .ek-ak-satir')];
      return sat.map(s=>{
        const u=s.querySelector('.ek-ak-ustyazi'), g=s.querySelector('.ek-ak-simge'),
              y=s.querySelector('.ek-ak-ipucu, .ek-ak-etiket'), k=s.querySelector('.ek-ak-kol');
        const st=u?getComputedStyle(u):null;
        return { tur:s.getAttribute('data-tur'),
          ust: u?u.textContent:null,
          buyuk_harf: u? u.textContent===u.textContent.toLocaleUpperCase('tr') : null,
          punto: st?st.fontSize:null,
          yazi_genislik: u?+u.getBoundingClientRect().width.toFixed(1):null,
          kolon_genislik: k?+k.getBoundingClientRect().width.toFixed(1):null,
          tasti_mi: (u&&k)? u.getBoundingClientRect().width > k.getBoundingClientRect().width+0.5 : null,
          simge: g?g.textContent:null,
          baslik: y?y.textContent.slice(0,34):null };
      });})()`);

    // ---- H-0002 ②: SATIR YÜKSEKLİĞİ — ÖNCE/SONRA aynı sayfada
    sonuc.h0002_yukseklik = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const olc=()=>{const s=[...document.querySelectorAll('#ob-ekokuma-butonlar .ek-ak-baslik')];
        const h=s.map(x=>+x.getBoundingClientRect().height.toFixed(2));
        const kutu=document.getElementById('ob-ekokuma-butonlar');
        return { satir:h.length, en_az:Math.min(...h), en_cok:Math.max(...h),
                 kutu_yuksekligi:+kutu.getBoundingClientRect().height.toFixed(2) };};
      const sonrasi = olc();
      const st=document.createElement('style'); st.id='_eski0073'; st.textContent=${JSON.stringify(ESKI_STIL)};
      document.head.appendChild(st); await b(250);
      const oncesi = olc();
      st.remove(); await b(250);
      return { oncesi, sonrasi,
        satir_buyumesi:+(sonrasi.en_cok-oncesi.en_cok).toFixed(2),
        kutu_buyumesi:+(sonrasi.kutu_yuksekligi-oncesi.kutu_yuksekligi).toFixed(2) };})()`);

    // ---- H-0002 ③: "ikinci satır gibi görünmesin" — etiket ile simge AYNI
    // kolonda mı, madde başlığı etiketin ALTINA mı düşüyor (düşerse iki satır).
    sonuc.h0002_tek_satir = await js(`(()=>{
      const s=document.querySelector('#ob-ekokuma-butonlar .ek-ak-satir');
      if(!s) return {durum:'SATIR YOK'};
      const u=s.querySelector('.ek-ak-ustyazi').getBoundingClientRect();
      const g=s.querySelector('.ek-ak-simge').getBoundingClientRect();
      const y=s.querySelector('.ek-ak-ipucu, .ek-ak-etiket').getBoundingClientRect();
      return { etiket_ust:+u.top.toFixed(1), simge_ust:+g.top.toFixed(1), baslik_ust:+y.top.toFixed(1),
        etiket_simgenin_ustunde: u.bottom <= g.top+0.5,
        baslik_etiketle_ayni_hizada_degil: y.top > u.bottom-0.5,
        baslik_simgeyle_ayni_satirda: Math.abs((y.top+y.height/2)-(g.top+g.height/2)) < 6 };})()`);

    // ---- H-0020: sağ tık menüsü
    sonuc.h0020_sagtik = await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      document.querySelectorAll('.kopya-menu').forEach(e=>e.remove());
      const s=document.querySelector('#ob-ekokuma-butonlar .ek-ak-satir');
      if(!s) return {durum:'SATIR YOK'};
      const r=s.getBoundingClientRect();
      const ev=new MouseEvent('contextmenu',{bubbles:true,cancelable:true,clientX:r.left+20,clientY:r.top+8});
      s.dispatchEvent(ev); await b(160);
      const m=document.querySelector('.kopya-menu');
      const dugme=m?[...m.querySelectorAll('button')].map(x=>x.textContent):[];
      // Menüdeki metinler NE kopyalayacak?
      const bas=s.querySelector('.ek-ak-ipucu, .ek-ak-etiket').textContent;
      const govde=_ekIcerikMetni(s._kart, s._html)||'';
      return { menu_acildi: !!m, dugmeler: dugme,
        tarayici_menusu_kesildi: ev.defaultPrevented,
        satir_turu: s.getAttribute('data-tur'),
        baslik_ekranda: bas.slice(0,40),
        madde_uzunlugu: govde.length, madde_ilk_60: govde.slice(0,60),
        baslik_madde_farkli: govde !== bas };})()`);

    // ---- H-0020 kısıtı: sayfanın GERİ KALANINDA tarayıcı menüsü duruyor mu
    sonuc.h0020_disarisi = await js(`(()=>{
      document.querySelectorAll('.kopya-menu').forEach(e=>e.remove());
      const dene=sec=>{const el=document.querySelector(sec); if(!el) return {sec, durum:'YOK'};
        const r=el.getBoundingClientRect();
        const ev=new MouseEvent('contextmenu',{bubbles:true,cancelable:true,clientX:r.left+5,clientY:r.top+5});
        el.dispatchEvent(ev);
        const m=!!document.querySelector('.kopya-menu');
        document.querySelectorAll('.kopya-menu').forEach(e=>e.remove());
        return {sec, tarayici_menusu_kesildi:ev.defaultPrevented, bizim_menu:m};};
      return ['#harita','#zaman-cubugu','#olay-bilgi','body'].map(dene);})()`);

    // ---- Kısıt sınavı: SHIFT + sağ tık tarayıcının kendi menüsünü bırakmalı
    sonuc.h0020_shift = await js(`(()=>{
      document.querySelectorAll('.kopya-menu').forEach(e=>e.remove());
      const s=document.querySelector('#ob-ekokuma-butonlar .ek-ak-satir');
      const r=s.getBoundingClientRect();
      const ev=new MouseEvent('contextmenu',{bubbles:true,cancelable:true,shiftKey:true,clientX:r.left+20,clientY:r.top+8});
      s.dispatchEvent(ev);
      const m=!!document.querySelector('.kopya-menu');
      document.querySelectorAll('.kopya-menu').forEach(e=>e.remove());
      return { tarayici_menusu_kesildi: ev.defaultPrevented, bizim_menu: m };})()`);

    // ---- GÖRSEL KANIT
    await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      document.querySelectorAll('.kopya-menu').forEach(e=>e.remove());
      const ob=document.getElementById('olay-bilgi'); if(ob) ob.scrollTop=0; await b(300); return 1;})()`);
    let ss = await gonder('Page.captureScreenshot', { format: 'png' });
    if (ss.result && ss.result.data) fs.writeFileSync(path.join(__dirname, 'SINAV-EKO-UI-0073-etiketler.png'), Buffer.from(ss.result.data, 'base64'));
    // 🔍 YAKIN KARE — Emre gözüyle "okunabilir mi" sorusu 7px yazıyı tam
    // ekranda göremez. Akordeon kutusu kırpılıp 3 kat büyütülerek basılıyor.
    const kutuKon = await js(`(()=>{const k=document.getElementById('ob-ekokuma-butonlar');
      if(!k) return null; const r=k.getBoundingClientRect();
      return {x:Math.max(0,r.left-6), y:Math.max(0,r.top-6), width:r.width+12, height:Math.min(r.height+12, 420)};})()`);
    if (kutuKon && kutuKon.width > 0) {
      const yakin = await gonder('Page.captureScreenshot', { format: 'png', clip: Object.assign({ scale: 3 }, kutuKon) });
      if (yakin.result && yakin.result.data)
        fs.writeFileSync(path.join(__dirname, 'SINAV-EKO-UI-0073-yakin.png'), Buffer.from(yakin.result.data, 'base64'));
    }
    sonuc.yakin_kare = kutuKon;
    // Menü açıkken de bir kare
    await js(`(async()=>{const b=ms=>new Promise(r=>setTimeout(r,ms));
      const s=document.querySelector('#ob-ekokuma-butonlar .ek-ak-satir'); const r=s.getBoundingClientRect();
      s.dispatchEvent(new MouseEvent('contextmenu',{bubbles:true,cancelable:true,clientX:r.left+40,clientY:r.top+10}));
      await b(250); return 1;})()`);
    ss = await gonder('Page.captureScreenshot', { format: 'png' });
    if (ss.result && ss.result.data) fs.writeFileSync(path.join(__dirname, 'SINAV-EKO-UI-0073-sagtik.png'), Buffer.from(ss.result.data, 'base64'));

    sonuc.konsol_hata = await js('(window.__hata||null)');
  }
  // 🔴 ÖLÇÜLDÜ (bu sınavın ilk koşusu): `console.log` + `process.exit(0)`
  // Windows'ta BORUYA yazarken çıktıyı yutuyor — koşu "exit 0" verip EKRANA
  // HİÇBİR ŞEY basmadı. Sonuç önce DOSYAYA yazılır; ekran yalnız kolaylık.
  const cikti = path.join(__dirname, 'SINAV-EKO-UI-0073.json');
  fs.writeFileSync(cikti, JSON.stringify(sonuc, null, 1), 'utf8');
  console.log(JSON.stringify(sonuc, null, 1));
  ws.close(); ch.kill(); sunucu.close();
  try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) { }
  process.exit(0);
})();

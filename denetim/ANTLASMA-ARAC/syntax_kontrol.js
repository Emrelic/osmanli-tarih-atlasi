// node denetim/ANTLASMA-ARAC/syntax_kontrol.js data/antlasma_madde_X.js [...]
// window.* dosyasını yükler; sözdizimi hatası ve (varsa) kayıt şeması hatasını bildirir. Çıkış 0/1.
const fs = require('fs');
let hata = 0;
for (const f of process.argv.slice(2)) {
  global.window = {};
  try {
    new Function('window', fs.readFileSync(f, 'utf8') + ';')(global.window);
    const kayitlar = global.window.ANTLASMA_MADDELERI || [];
    for (const k of kayitlar) {
      for (const a of ['id', 'ad', 't', 'kadraj', 'kaynak', 'yerler', 'adimlar']) if (!k[a]) { console.log('ŞEMA', f, k.id, 'eksik alan', a); hata = 1; }
      // çok taraflı: adım başlığı (taraf ön ekiyle) kayıt içinde benzersiz olmalı; taraf varsa başlık taraf adıyla başlamalı
      const gor = new Set();
      (k.adimlar || []).forEach((a, i) => {
        if (gor.has(a.no)) { console.log('TEKRAR', f, k.id, 'adım başlığı yinelenmiş:', a.no); hata = 1; }
        gor.add(a.no);
        if (a.taraf && !String(a.no).startsWith(a.taraf)) { console.log('TARAF', f, k.id, 'adım', a.no, 'taraf başlığı yok (' + a.taraf + ')'); hata = 1; }
      });
      if (k.taraflar && (k.adimlar || []).filter(a => a.taraf).some(a => !k.taraflar.includes(a.taraf))) { console.log('TARAF', f, k.id, 'taraflar listesinde olmayan taraf'); hata = 1; }
      (k.adimlar || []).forEach((a, i) => {
        if (!a.no || !a.ozet) { console.log('ŞEMA', f, k.id, 'adım', i, 'no/ozet eksik'); hata = 1; }
        (a.yer || []).forEach(y => { if (!k.yerler[y]) { console.log('YER', f, k.id, 'adım', a.no, 'yerler tablosunda yok:', y); hata = 1; } });
      });
      console.log('OK', f, k.id, k.adimlar.length, 'adım');
    }
    if (!kayitlar.length) console.log('OK (sözdizimi)', f);
  } catch (e) { console.log('HATA', f, e.message); hata = 1; }
}
process.exit(hata);

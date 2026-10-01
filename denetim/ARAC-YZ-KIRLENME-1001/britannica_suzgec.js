// Britannica EDİTÖR / YZ ayrımı — uygulama içi tarayıcıda, britannica.com sekmesinde javascript_tool ile çalıştırılır.
// (Betikten britannica.com 403 verir; aynı kökenden fetch 200 verir.)  YZ-KIRLENME-1001 · YAZICI-KASA
// 🔴 get_page_text / WebFetch bu ayrımı YAPMAZ: sayfadaki "Britannica AI" soru-cevap kutuları
//    (.ai-qna-module / .answer-content) metne karışır. 60 sayfanın 53'ünde (%88) bu kutu vardı.
// 🔴 İSTEMCİ TARAFINDA SONRADAN YÜKLENEN YZ KUTULARI HAM HTML'DE GÖRÜNMEZ; "0 İŞARET" ≠ "YZ YOK".

window.__sleep = ms => new Promise(r => setTimeout(r, ms));
window.__nz = s => String(s).replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim().toLowerCase();

// Arama: sonuç sayfasındaki gömülü JSON'dan başlık+URL (HTML bağlantıları istemci tarafında üretiliyor)
window.__bs = async (q) => {
  await __sleep(1500);
  const h = await (await fetch('/search?query=' + encodeURIComponent(q))).text();
  return [...h.matchAll(/"pageTitle":"([^"]+)","pageTitleIdentifier":"([^"]*)","pageUrl":"([^"]+)"/g)].map(m => ({ t: m[1], u: m[3] })).slice(0, 6);
};

// Bir sayfa: EDİTÖR (p.topic-paragraph, YZ atası yok) · YZ kutuları · gövdenin tamamı · alt sayfalar
window.__pg3 = async (u) => {
  await __sleep(1500);
  const r = await fetch(u); const h = await r.text();
  const d = new DOMParser().parseFromString(h, 'text/html');
  const AI = '.ai-qna-module, .answer-content, [class*="ai-qna"], [class*="ai-tq"], [class*="britannica-ai"], [class*="ai-summary"]';
  const ed = [...d.querySelectorAll('p.topic-paragraph')].filter(p => !p.closest(AI)).map(p => p.textContent).join(' ');
  const ai = [...d.querySelectorAll(AI)].map(e => e.textContent).join(' ');
  [...d.querySelectorAll('script,style,noscript')].forEach(e => e.remove());
  const all = d.body ? d.body.textContent : '';
  // Uzun makaleler alt sayfalara bölünür (/biography/X/Early-life …): yalnız bir alt düzey
  const subs = [...new Set([...h.matchAll(/href="(?:https:\/\/www\.britannica\.com)?(\/[a-z]+\/[^"#?]+)"/g)].map(m => m[1])
    .filter(x => x.startsWith(u + '/') && x.split('/').length === u.split('/').length + 1))];
  return { s: r.status, ed: __nz(ed), ai: __nz(ai), all: __nz(all), subs };
};

// Alıntı sınıflaması: EDITOR | YZ | SAYFA-DISI (zaman çizelgesi vb.) | YOK (+ 6'lı kelime örtüşme %)
window.__sinifla = (pages, q) => {
  const segs = q.split(/…|\.\.\./).map(__nz).filter(x => x.length >= 15);
  const every = f => segs.length && segs.every(sg => pages.some(p => p[f].includes(sg)));
  const any = f => segs.some(sg => pages.some(p => p[f].includes(sg)));
  if (every('ed')) return 'EDITOR';
  if (any('ai')) return 'YZ';
  if (every('all')) return 'SAYFA-DISI';
  const w = __nz(q).split(' '); let hit = 0, n = 0;
  for (let i = 0; i + 6 <= w.length; i += 3) { n++; if (pages.some(p => p.ed.includes(w.slice(i, i + 6).join(' ')))) hit++; }
  return 'YOK:' + (n ? Math.round(100 * hit / n) : 0);
};
// Bayraklı kayıtta DOM zinciri: kutunun gerçekten YZ olduğunu kanıtlamak için
window.__where2 = async (u, q) => {
  await __sleep(1300);
  const d = new DOMParser().parseFromString(await (await fetch(u)).text(), 'text/html');
  const els = [...d.querySelectorAll('p, li, div, span, td')].filter(e => __nz(e.textContent).includes(__nz(q)));
  if (!els.length) return { u, found: false };
  let n = els.sort((a, b) => a.textContent.length - b.textContent.length)[0]; const chain = [];
  for (let k = 0; k < 6 && n; k++) { chain.push(n.tagName + '.' + String(n.className || '').slice(0, 40)); n = n.parentElement; }
  return { u, found: true, chain };
};
// ⚠️ javascript_tool çağrısı 45 sn'de keser: döngüyü ~35 sn'de kır, sonucu window'da biriktir, tekrar çağır.

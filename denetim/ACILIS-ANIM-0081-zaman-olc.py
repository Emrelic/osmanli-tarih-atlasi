"""ACILIS-ANIM-0081 — açılış zaman çizelgesini headless Chrome'da ölçer.
Kullanım: py acilis_olc.py <url> [tekrar]
Ölçülen: ilk boyama (FCP) · DCL · load · `atlas-hazir` sınıfının geldiği an
(perdenin kalktığı an) · ana iş parçacığı uzun görevleri · perde süresince
kaç rAF karesi çizildi ve en uzun kare boşluğu (CSS background-position
canlandırmasının ana iş parçacığında ne kadar DONDUĞUNUN vekili)."""
import sys, time, json
from selenium import webdriver

URL = sys.argv[1]
N = int(sys.argv[2]) if len(sys.argv) > 2 else 1

ENJEKTE = r"""
(function(){
  try { performance.setResourceTimingBufferSize(5000); } catch(e){}
  var O = window.__olc = {uzun:[], kare:[], hazir:null};
  try {
    new PerformanceObserver(function(l){ l.getEntries().forEach(function(e){ O.uzun.push([Math.round(e.startTime), Math.round(e.duration)]); }); })
      .observe({type:'longtask', buffered:true});
  } catch(e){ O.lthata = String(e); }
  // documentElement enjeksiyon anında henüz YOK — MutationObserver burada kurulamaz; her karede sor.
  function kare(t){
    if (O.hazir === null && document.documentElement && document.documentElement.classList.contains('atlas-hazir')) O.hazir = Math.round(performance.now());
    if (O.hazir === null) { O.kare.push(Math.round(t)); requestAnimationFrame(kare); }
  }
  requestAnimationFrame(kare);
})();
"""

def bir_kosu():
    op = webdriver.ChromeOptions()
    op.add_argument("--headless=new")
    op.add_argument("--window-size=1400,900")
    op.add_argument("--enable-unsafe-swiftshader"); op.add_argument("--use-angle=swiftshader"); op.add_argument("--ignore-gpu-blocklist")
    d = webdriver.Chrome(options=op)
    d.set_page_load_timeout(300)
    d.execute_cdp_cmd("Network.enable", {})
    d.execute_cdp_cmd("Network.setCacheDisabled", {"cacheDisabled": True})
    d.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {"source": ENJEKTE})
    t0 = time.time()
    d.get(URL)
    while time.time() - t0 < 240:
        if d.execute_script("return window.__olc && window.__olc.hazir"):
            break
        time.sleep(0.25)
    time.sleep(1)
    r = d.execute_script("""
      var O = window.__olc, nav = performance.getEntriesByType('navigation')[0];
      var p = {}; performance.getEntriesByType('paint').forEach(function(e){ p[e.name] = Math.round(e.startTime); });
      var res = performance.getEntriesByType('resource');
      var js = res.filter(function(r){ return /\\.js(\\?|$)/.test(r.name); });
      var sonjs = js.reduce(function(a,r){ return Math.max(a, r.responseEnd); }, 0);
      var bosluk = 0, k = O.kare; for (var i = 1; i < k.length; i++) bosluk = Math.max(bosluk, k[i]-k[i-1]);
      var fcp = p['first-contentful-paint'] || 0;
      var kilit = O.uzun.filter(function(u){ return u[0] >= fcp && u[0] < (O.hazir||1e9); }).reduce(function(a,u){ return a+u[1]; }, 0);
      var enuzun = O.uzun.slice().sort(function(a,b){ return b[1]-a[1]; }).slice(0,5);
      return {fp:p['first-paint'], fcp:fcp, dcl:Math.round(nav.domContentLoadedEventEnd), load:Math.round(nav.loadEventEnd),
              hazir:O.hazir, js_sayi:js.length, js_mb_govde:Math.round(js.reduce(function(a,r){return a+r.decodedBodySize;},0)/1e5)/10,
              js_mb_aktarim:Math.round(js.reduce(function(a,r){return a+r.transferSize;},0)/1e5)/10,
              son_js_indi:Math.round(sonjs), kare_sayi:k.length, en_uzun_kare_boslugu:bosluk,
              perde_suresince_uzun_gorev_ms:kilit, uzun_gorev_sayi:O.uzun.length, en_uzun_5:enuzun, lthata:O.lthata||null,
              perde_suresi:(O.hazir && fcp) ? O.hazir - fcp : null};
    """)
    d.quit()
    return r

for i in range(N):
    print(json.dumps(bir_kosu(), ensure_ascii=False))

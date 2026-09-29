"""ACILIS-ANIM-0929 — perde animasyonu yüklemeyi UZATIYOR mu, kaç öğe görünüyor?
Kullanım: py denetim/ACILIS-ANIM-0929-sina.py [tekrar] [--resim <klasör>]
A = http://localhost:8765/                                  (bugünkü index.html)
B = http://localhost:8765/denetim/ACILIS-ANIM-0929-sinav.html (index + acilis_siluet.js satırı)
Ölçülen (headless Chrome, SwiftShader, önbellek KAPALI, 1400x900):
  fcp · hazir (atlas-hazir sınıfı) · perde = hazir - fcp · kuruldu (acilis-kuruldu damgası)
  gorunen = perde kalkana dek fırlamaya BAŞLAMIŞ silüet sayısı ((hazir-kuruldu)/ARALIK + 1, n'e kırpılır)
  hata = konsoldaki SEVERE satırları."""
import sys, time, json, os
from selenium import webdriver

N = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else 1
GPU = "--gpu" in sys.argv
RESIM = sys.argv[sys.argv.index("--resim") + 1] if "--resim" in sys.argv else None
URL = {"A": "http://localhost:8765/", "B": "http://localhost:8765/denetim/ACILIS-ANIM-0929-sinav.html"}
for _v in ("betik", "kure", "golgesiz"):   # ACILIS-ANIM-0929-sinav-kur.py varyantları
    URL[_v] = "http://localhost:8765/denetim/ACILIS-ANIM-0929-sinav-%s.html" % _v
SIRA = [a for a in sys.argv[1:] if a in URL] or ["A", "B"]

ENJEKTE = r"""
(function(){
  var O = window.__olc = {hazir:null};
  function kare(t){
    if (O.hazir === null && document.documentElement && document.documentElement.classList.contains('atlas-hazir')) O.hazir = Math.round(performance.now());
    if (O.hazir === null) requestAnimationFrame(kare);
  }
  requestAnimationFrame(kare);
})();
"""


def kosu(etiket, resim_ek=None):
    op = webdriver.ChromeOptions()
    op.add_argument("--headless=new"); op.add_argument("--window-size=" + ("390,844" if "--dar" in sys.argv else "1400,900"))
    if GPU:   # gerçek ekran kartı (D3D11) — yazılım GPU'su bileşik kare maliyetini ABARTIR
        op.add_argument("--use-angle=d3d11"); op.add_argument("--enable-gpu"); op.add_argument("--ignore-gpu-blocklist")
    else:
        op.add_argument("--enable-unsafe-swiftshader"); op.add_argument("--use-angle=swiftshader"); op.add_argument("--ignore-gpu-blocklist")
    op.set_capability("goog:loggingPrefs", {"browser": "ALL"})
    d = webdriver.Chrome(options=op)
    d.set_page_load_timeout(300)
    # 🔴 Bu makinede Windows animasyonları KAPALI ⇒ Chrome prefers-reduced-motion:reduce
    # bildirir ve perde HAREKETSİZ kipe düşer. İlk ölçümler bunu bilmeden hareketsiz
    # kipi ölçtü. Kip AÇIKÇA seçilir: varsayılan tam hareket, --az ile azaltılmış.
    d.execute_cdp_cmd("Emulation.setEmulatedMedia", {"features": [
        {"name": "prefers-reduced-motion", "value": "reduce" if "--az" in sys.argv else "no-preference"}]})
    d.execute_cdp_cmd("Network.enable", {})
    d.execute_cdp_cmd("Network.setCacheDisabled", {"cacheDisabled": True})
    d.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {"source": ENJEKTE})
    t0 = time.time()
    d.get(URL[etiket])   # load olayına kadar bekler
    resimler = []
    while time.time() - t0 < 240:
        h = d.execute_script("return window.__olc && window.__olc.hazir")
        if resim_ek and len(resimler) < 4:
            yol = "%s-%d.png" % (resim_ek, len(resimler))
            d.save_screenshot(yol); resimler.append((round(time.time() - t0, 1), yol))
        if h:
            break
        time.sleep(0.4)
    time.sleep(1.5)
    if resim_ek:
        yol = "%s-son.png" % resim_ek; d.save_screenshot(yol); resimler.append((round(time.time() - t0, 1), yol))
    r = d.execute_script("""
      var p = {}; performance.getEntriesByType('paint').forEach(function(e){ p[e.name] = Math.round(e.startTime); });
      var m = {}; performance.getEntriesByType('mark').forEach(function(e){ m[e.name] = Math.round(e.startTime); });
      var fcp = p['first-contentful-paint'] || 0, hz = window.__olc.hazir;
      var n = (window.ACILIS_SILUET && window.ACILIS_SILUET.ogeler.length) || 0, A = window.ACILIS_ARALIK || 0;
      var gor = (A && m['acilis-kuruldu'] != null && hz) ? Math.min(n, Math.floor((hz - m['acilis-kuruldu']) / A) + 1) : null;
      var gl = document.createElement('canvas').getContext('webgl'), gx = gl && gl.getExtension('WEBGL_debug_renderer_info');
      return {gpu: gx ? String(gl.getParameter(gx.UNMASKED_RENDERER_WEBGL)).slice(0, 40) : null, fcp: fcp, hazir: hz, perde: hz && fcp ? hz - fcp : null, kuruldu: m['acilis-kuruldu'],
              isaret_hazir: m['atlas-hazir'], oge: n, gorunen: gor,
              acilis_dom_kaldi: !!document.getElementById('acilis'), acilis_js: document.documentElement.classList.contains('acilis-js')};
    """)
    r["hata"] = [l["message"][:160] for l in d.get_log("browser") if l["level"] == "SEVERE"][:5]
    r["resim"] = resimler
    d.quit()
    return r


for i in range(N):
    for e in SIRA:
        ek = os.path.join(RESIM, "%s%d" % (e, i)) if (RESIM and e == "B" and i == 0) else None
        print(e, json.dumps(kosu(e, ek), ensure_ascii=False), flush=True)

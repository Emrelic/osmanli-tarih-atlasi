# -*- coding: utf-8 -*-
"""IRAN-KAFKAS-0082 — TDV çekici. 302'yi TAKİP ETMEZ (ölü slug tuzağı ①).
Kullanım: py denetim/ARAC-IRAN-KAFKAS-0082-TDV.py slug1 slug2 ...   (slug 'arama:<kelime>' olabilir)
Çıktı: denetim/IRAN-KAFKAS-0082-tdv-onbellek/<slug>.txt"""
import sys, re, os, html, io, urllib.request, urllib.error, urllib.parse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
DIZ = "denetim/IRAN-KAFKAS-0082-tdv-onbellek"
os.makedirs(DIZ, exist_ok=True)

class Yok(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None

ac = urllib.request.build_opener(Yok)

def duz(h):
    t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<(br|/p|/div|/h\d|/li)[^>]*>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"[ \t\r\f\v]+", " ", t)
    return re.sub(r"\n\s*\n+", "\n", t)

for s in sys.argv[1:]:
    if s.startswith("arama:"):
        url = "https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(s[6:])
        ad = "ARAMA-" + re.sub(r"\W+", "_", s[6:])
    else:
        url = "https://islamansiklopedisi.org.tr/" + s
        ad = s
    try:
        r = ac.open(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
        h = r.read().decode("utf-8", "replace")
        kod = r.status
    except urllib.error.HTTPError as e:
        kod, h = e.code, ""
    except Exception as e:
        kod, h = "000:" + type(e).__name__, ""
    if s.startswith("arama:"):
        linkler = sorted(set(re.findall(r'href="https://islamansiklopedisi\.org\.tr/([a-z0-9\-]+)"', h)))
        metin = "\n".join(linkler)
    else:
        metin = duz(h)
    open(os.path.join(DIZ, ad + ".txt"), "w", encoding="utf-8").write(metin)
    print(f"{s}\t{kod}\t{len(metin)}")

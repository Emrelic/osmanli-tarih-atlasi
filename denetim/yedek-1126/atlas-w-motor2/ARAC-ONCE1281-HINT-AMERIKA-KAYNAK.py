# ONCE1281-HINDISTAN-AMERIKA — kaynak önbellek aracı (ARAC-ONCE1281-IRAN-TDV.py kalıbı + genel URL)
#   py denetim/ARAC-ONCE1281-HINT-AMERIKA-KAYNAK.py ara <kelime>             → TDV arama slug'ları
#   py denetim/ARAC-ONCE1281-HINT-AMERIKA-KAYNAK.py cek <slug>               → TDV gövdesi .txt, HTTP kodu
#   py denetim/ARAC-ONCE1281-HINT-AMERIKA-KAYNAK.py url <ad> <url>           → herhangi bir akademik sayfa .txt
#   py denetim/ARAC-ONCE1281-HINT-AMERIKA-KAYNAK.py bul <ad> <regex> [N]     → önbellekte eşleşen yerler (±N)
# Yönlendirme İZLENMEZ (TDV ölü slug = 302 görünür kalsın).
import sys, re, os, html, urllib.request, urllib.parse, io
sys.stdout.reconfigure(encoding="utf-8")
DIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ONCE1281-HINT-AMERIKA-onbellek")
os.makedirs(DIZ, exist_ok=True)

class Yok(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k): return None
op = urllib.request.build_opener(Yok)

def getir(url):
    try:
        r = op.open(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}), timeout=40)
        return r.status, r.read().decode("utf-8", "replace"), r.headers.get("Location")
    except urllib.error.HTTPError as e:
        return e.code, "", e.headers.get("Location")
    except Exception as e:
        return "000", str(e), None

def govde(h, tdv):
    h = re.sub(r"(?s)<script.*?</script>|<style.*?</style>|<noscript.*?</noscript>", " ", h)
    if tdv:
        m = re.search(r'(?s)<div[^>]*class="[^"]*article[^"]*"[^>]*>(.*)', h)
        if m: h = m.group(1)
    t = re.sub(r"<[^>]+>", " ", h)
    return re.sub(r"\s+", " ", html.unescape(t))

def yaz(ad, g):
    io.open(os.path.join(DIZ, ad + ".txt"), "w", encoding="utf-8").write(g)

k = sys.argv[1]
if k == "ara":
    c, h, _ = getir("https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(sys.argv[2]))
    print("HTTP", c)
    for s in sorted(set(re.findall(r'href="(?:https://islamansiklopedisi\.org\.tr)?/([a-z0-9-]+)"', h)))[:80]:
        print(" ", s)
elif k == "cek":
    s = sys.argv[2]; c, h, loc = getir("https://islamansiklopedisi.org.tr/" + s)
    g = govde(h, True) if h else ""
    yaz("tdv-" + s, g)
    print(s, "HTTP", c, "gövde", len(g), ("→ " + loc) if loc else "")
elif k == "url":
    ad, u = sys.argv[2], sys.argv[3]; c, h, loc = getir(u)
    g = govde(h, False) if h else ""
    yaz(ad, "URL " + u + "\n" + g)
    print(ad, "HTTP", c, "gövde", len(g), ("→ " + loc) if loc else "")
elif k == "bul":
    ad, rx = sys.argv[2], sys.argv[3]; n = int(sys.argv[4]) if len(sys.argv) > 4 else 220
    p = os.path.join(DIZ, ad + ".txt")
    if not os.path.exists(p): print("önbellekte yok:", ad); sys.exit(1)
    g = io.open(p, encoding="utf-8").read()
    say = 0
    for m in re.finditer(rx, g, re.I):
        say += 1
        print("…", g[max(0, m.start() - n): m.end() + n], "…\n")
    print("eşleşme:", say, "· gövde:", len(g))

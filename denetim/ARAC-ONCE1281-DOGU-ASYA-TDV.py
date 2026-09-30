# ONCE1281-DOGU-ASYA — TDV önbellek aracı (ATLANTIK-A aracının kopyası)
#   py denetim/ARAC-ONCE1281-DOGU-ASYA-TDV.py ara <kelime>          → arama sonucu slug'ları
#   py denetim/ARAC-ONCE1281-DOGU-ASYA-TDV.py cek <slug>            → gövdeyi .txt'ye yazar, HTTP kodu
#   py denetim/ARAC-ONCE1281-DOGU-ASYA-TDV.py bul <slug> <regex> [N] → gövdede eşleşen cümleler (±N karakter)
import sys, re, os, html, urllib.request, urllib.parse, io
sys.stdout.reconfigure(encoding="utf-8")
DIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ONCE1281-DOGU-ASYA-tdv-onbellek")
os.makedirs(DIZ, exist_ok=True)

class Yok(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k): return None
op = urllib.request.build_opener(Yok)

def getir(url):
    try:
        r = op.open(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
        return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return "000", str(e)

def govde(h):
    h = re.sub(r"(?s)<script.*?</script>|<style.*?</style>", " ", h)
    m = re.search(r'(?s)<div[^>]*class="[^"]*article[^"]*"[^>]*>(.*)', h)
    t = re.sub(r"<[^>]+>", " ", m.group(1) if m else h)
    return re.sub(r"\s+", " ", html.unescape(t))

k = sys.argv[1]
if k == "ara":
    c, h = getir("https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(sys.argv[2]))
    print("HTTP", c)
    for s in sorted(set(re.findall(r'href="(?:https://islamansiklopedisi\.org\.tr)?/([a-z0-9-]+)"', h)))[:60]:
        print(" ", s)
elif k == "cek":
    s = sys.argv[2]; c, h = getir("https://islamansiklopedisi.org.tr/" + s)
    g = govde(h) if h else ""
    io.open(os.path.join(DIZ, s + ".txt"), "w", encoding="utf-8").write(g)
    print(s, "HTTP", c, "gövde", len(g))
elif k == "bul":
    s, rx = sys.argv[2], sys.argv[3]; n = int(sys.argv[4]) if len(sys.argv) > 4 else 220
    p = os.path.join(DIZ, s + ".txt")
    if not os.path.exists(p): print("önbellekte yok:", s); sys.exit(1)
    g = io.open(p, encoding="utf-8").read()
    for m in re.finditer(rx, g, re.I):
        print("…", g[max(0, m.start() - n): m.end() + n], "…\n")

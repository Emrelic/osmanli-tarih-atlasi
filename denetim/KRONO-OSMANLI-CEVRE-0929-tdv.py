# KRONO-OSMANLI-CEVRE-0929 — TDV maddelerini çekip düz metne çevirir (KAFKAS-KORFEZ-0081-tdv.py kopyası).
# Kullanım: py -X utf8 denetim/KRONO-KAFKAS-0929-tdv.py <slug> [<slug> ...]
# 302 = ölü slug (yönlenme izlenmez); metin denetim/KRONO-OSMANLI-CEVRE-0929-tdv-onbellek/<slug>.txt
import sys, re, os, html, urllib.request, urllib.error
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KRONO-OSMANLI-CEVRE-0929-tdv-onbellek")
os.makedirs(KOK, exist_ok=True)

class Yonlenmez(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None

acici = urllib.request.build_opener(Yonlenmez)

def cek(url):
    istek = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        r = acici.open(istek, timeout=40)
        return r.status, r.read().decode("utf-8", "replace"), ""
    except urllib.error.HTTPError as e:
        return e.code, "", e.headers.get("Location", "")
    except Exception as e:
        return 0, "", str(e)

def duz(h):
    t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<(br|/p|/div|/h\d|/li)[^>]*>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"[ \t\r\f\v]+", " ", t)
    t = re.sub(r"\n\s*\n+", "\n", t)
    return t.strip()

for slug in sys.argv[1:]:
    kod, h, yer = cek("https://islamansiklopedisi.org.tr/" + slug)
    t = duz(h) if h else ""
    if t:
        with open(os.path.join(KOK, slug + ".txt"), "w", encoding="utf-8") as f:
            f.write(t)
    print(f"{slug}: HTTP {kod} {('-> ' + yer) if yer else ''} · {len(t)} karakter")

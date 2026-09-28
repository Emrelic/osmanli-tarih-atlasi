# DUNYA-KRONO-0081 — TDV maddelerini çekip düz metne çevirir, önbelleğe yazar.
# Kullanım: py denetim/ARAC-DUNYA-KRONO-0081-TDV.py <slug> [<slug> ...]
# Her slug için: HTTP kodu, yönlenme, gövde uzunluğu basılır; metin
# denetim/DUNYA-KRONO-0081-tdv-onbellek/<slug>.txt dosyasına yazılır.
import sys, re, os, html, urllib.request, urllib.error, urllib.parse
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "DUNYA-KRONO-0081-tdv-onbellek")
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
    if slug.startswith("arama:"):
        q = slug[6:]
        kod, h, yer = cek("https://islamansiklopedisi.org.tr/arama/?q=" + urllib.parse.quote(q))
        slugs = sorted(set(re.findall(r'href="/([a-z0-9\-]+)"', h)))
        print(f"ARAMA {q}: {kod} ·", " ".join(s for s in slugs if len(s) > 3)[:1500])
        continue
    kod, h, yer = cek("https://islamansiklopedisi.org.tr/" + slug)
    t = duz(h) if h else ""
    with open(os.path.join(KOK, slug + ".txt"), "w", encoding="utf-8") as f:
        f.write(t)
    print(f"{slug}: HTTP {kod} {('-> ' + yer) if yer else ''} · {len(t)} karakter")

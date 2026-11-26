# ONCE1281-AFRIKA — akademik/kurumsal sayfayı çekip düz metne çevirir, önbelleğe yazar.
# Kullanım: py denetim/ARAC-ONCE1281-AFRIKA-URL.py <ad> <url> [<ad> <url> ...]
# Metin denetim/ONCE1281-AFRIKA-url-onbellek/<ad>.txt dosyasına yazılır.
import sys, re, os, html, urllib.request, urllib.error
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ONCE1281-AFRIKA-url-onbellek")
os.makedirs(KOK, exist_ok=True)
BAS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
       "Accept": "text/html,application/xhtml+xml", "Accept-Language": "en-US,en;q=0.9"}

def duz(h):
    t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<(br|/p|/div|/h\d|/li)[^>]*>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"[ \t\r\f\v]+", " ", t)
    t = re.sub(r"\n\s*\n+", "\n", t)
    return t.strip()

a = sys.argv[1:]
for ad, url in zip(a[0::2], a[1::2]):
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers=BAS), timeout=40)
        kod, h = r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        kod, h = e.code, ""
    except Exception as e:
        kod, h = 0, ""
        print(ad, "hata", e)
    t = duz(h) if h else ""
    with open(os.path.join(KOK, ad + ".txt"), "w", encoding="utf-8") as f:
        f.write(url + "\n" + t)
    print(f"{ad}: HTTP {kod} · {len(t)} karakter · {url}")

# KRONO-AFRIKA-0929 — akademik/kurumsal (TDV-dışı) sayfayı düz metne çevirip önbelleğe yazar.
# Kullanım: py -X utf8 denetim/ARAC-KRONO-AFRIKA-0929-CEK.py <ad>=<url> [<ad>=<url> ...]
# Metin denetim/KRONO-AFRIKA-0929-tdv-onbellek/<ad>.txt dosyasına yazılır (ARA.py aynı klasörü okur).
import sys, re, os, html, urllib.request
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KRONO-AFRIKA-0929-tdv-onbellek")
os.makedirs(KOK, exist_ok=True)

def duz(h):
    t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<(br|/p|/div|/h\d|/li)[^>]*>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"[ \t\r\f\v]+", " ", t)
    t = re.sub(r"\n\s*\n+", "\n", t)
    return t.strip()

for arg in sys.argv[1:]:
    ad, url = arg.split("=", 1)
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
        t = duz(r.read().decode("utf-8", "replace"))
        kod = r.status
    except Exception as e:
        t, kod = "", str(e)
    open(os.path.join(KOK, ad + ".txt"), "w", encoding="utf-8").write(t)
    print(f"{ad}: {kod} · {len(t)} karakter")

# KRONO-TUNA-0929 — "History of Transylvania" (ed. Béla Köpeczi, Macar Bilimler
# Akademisi Tarih Enstitüsü; İng. çev., Magyar Elektronikus Könyvtár) sayfalarını çeker.
# Akademik kurumsal kaynak; atlasta daha önce savaslar.js ve D3ORTA kullandı.
# Kullanım: py denetim/ARAC-KRONO-TUNA-0929-HT.py <ilk> <son>   (html/<n>.html)
#           py denetim/ARAC-KRONO-TUNA-0929-HT.py --ara "<regex>"  (önbellekte arar)
import sys, re, os, html, urllib.request
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "KRONO-TUNA-0929-ht-onbellek")
os.makedirs(KOK, exist_ok=True)

def duz(h):
    t = re.sub(r"<script.*?</script>|<style.*?</style>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<(br|/p|/div|/h\d|/li)[^>]*>", "\n", t, flags=re.I)
    t = html.unescape(re.sub(r"<[^>]+>", " ", t))
    return re.sub(r"\n\s*\n+", "\n", re.sub(r"[ \t\r\f\v]+", " ", t)).strip()

if sys.argv[1] == "--ara":
    rx = re.compile(sys.argv[2], re.I)
    for f in sorted(os.listdir(KOK), key=lambda x: int(x.split(".")[0])):
        t = " ".join(open(os.path.join(KOK, f), encoding="utf-8").read().split())
        for c in re.split(r"(?<=[.!?])\s+", t):
            if rx.search(c):
                print(f"[s.{f[:-4]}]", c[:420])
    sys.exit()
for n in range(int(sys.argv[1]), int(sys.argv[2]) + 1):
    url = f"https://mek.oszk.hu/03400/03407/html/{n}.html"
    try:
        h = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=40).read()
        t = duz(h.decode("utf-8", "replace") if b"utf-8" in h[:2000].lower() else h.decode("latin-1"))
    except Exception as e:
        t = ""; print(n, "HATA", str(e)[:60])
    open(os.path.join(KOK, f"{n}.txt"), "w", encoding="utf-8").write(t)
    print(n, len(t), t[:80].replace("\n", " "))

# EKOKUMA-0077-C — TDV dışı kurumsal kaynağı çekip düz metne çevirir.
# Kullanım: py denetim/ARAC-EKOKUMA-0077-C-DIS.py <ad> <url>
import sys, re, os, html, urllib.request
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "EKOKUMA-0077-C-tdv-onbellek")
ad, url = sys.argv[1], sys.argv[2]
istek = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", "Accept-Language": "tr,en"})
try:
    r = urllib.request.urlopen(istek, timeout=40)
    kod, h = r.status, r.read().decode("utf-8", "replace")
except Exception as e:
    kod, h = getattr(e, "code", 0), ""
    print(ad, "HATA", e)
t = re.sub(r"<script.*?</script>|<style.*?</style>", " ", h, flags=re.S | re.I)
t = re.sub(r"<(br|/p|/div|/h\d|/li)[^>]*>", "\n", t, flags=re.I)
t = html.unescape(re.sub(r"<[^>]+>", " ", t))
t = re.sub(r"[ \t\r\f\v]+", " ", t)
t = re.sub(r"\n\s*\n+", "\n", t).strip()
open(os.path.join(KOK, "DIS-" + ad + ".txt"), "w", encoding="utf-8").write(url + "\n" + t)
print(ad, "HTTP", kod, len(t), "karakter")

# PAKET-A6C · TDV gövde çekici (salt okunur) · 13 Eylül 2026
# Kullanım: py denetim/ARAC-A6C-TDV-0913.py <cikis_klasoru> slug1 slug2 ...
# Her slug için HTTP kodu + yönlendirme sonrası başlık + düz metin yazar.
# §4: 302 = ölü; 200 = madde var ama DOĞRU madde olduğu içerikten okunur.
import sys, os, re, html, urllib.request, urllib.error

cikis = sys.argv[1]
os.makedirs(cikis, exist_ok=True)

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None

opener = urllib.request.build_opener(NoRedirect)
for slug in sys.argv[2:]:
    url = "https://islamansiklopedisi.org.tr/" + slug
    try:
        r = opener.open(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=40)
        kod = r.status
        ham = r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        kod = e.code
        ham = ""
    except Exception as e:
        kod = "000:" + type(e).__name__
        ham = ""
    baslik = ""
    m = re.search(r"<title>(.*?)</title>", ham, re.S)
    if m:
        baslik = html.unescape(m.group(1)).strip()
    ham2 = re.sub(r"<script.*?</script>|<style.*?</style>", " ", ham, flags=re.S)
    metin = html.unescape(re.sub(r"<[^>]+>", " ", ham2))
    metin = re.sub(r"[ \t\r\f\v]+", " ", metin)
    metin = re.sub(r"\n\s*\n+", "\n", metin)
    with open(os.path.join(cikis, slug + ".txt"), "w", encoding="utf-8") as f:
        f.write(metin)
    print(slug, kod, len(metin), baslik[:60])

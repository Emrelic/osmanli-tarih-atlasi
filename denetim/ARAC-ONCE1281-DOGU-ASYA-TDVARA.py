# ONCE1281-DOGU-ASYA — TDV başlık araması (M-5694 BULGU 2: ajax_search_auto.php + X-Requested-With + Referer)
#   py denetim/ARAC-ONCE1281-DOGU-ASYA-TDVARA.py <kelime> ...
import sys, time, urllib.request, urllib.parse, re, html
sys.stdout.reconfigure(encoding="utf-8")
for q in sys.argv[1:]:
    url = "https://islamansiklopedisi.org.tr/ajax_search_auto.php?sp=aa&=ac&q=" + urllib.parse.quote(q)
    rq = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "X-Requested-With": "XMLHttpRequest",
                                              "Referer": "https://islamansiklopedisi.org.tr/"})
    try:
        g = urllib.request.urlopen(rq, timeout=40).read().decode("utf-8", "replace")
        sluglar = re.findall(r'islamansiklopedisi\.org\.tr/([a-z0-9-]+)', g) or re.findall(r'href="/?([a-z0-9-]+)"', g)
        basliklar = [html.unescape(re.sub(r"<[^>]+>", "", b)).strip() for b in re.findall(r"<a[^>]*>(.*?)</a>", g, re.S)]
        print(f"[{q}] {len(g)} bayt ·", " | ".join(f"{s}" for s in dict.fromkeys(sluglar)) or "slug yok",
              "·", " | ".join(b for b in basliklar if b)[:300])
    except Exception as e:
        print(f"[{q}] HATA {str(e)[:80]}")
    time.sleep(1.5)

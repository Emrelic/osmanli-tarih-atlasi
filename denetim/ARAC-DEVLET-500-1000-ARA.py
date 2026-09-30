# DEVLET-500-1000 — TDV ajax arama ucu (M-5694 bulgusu 2)
#   py denetim/ARAC-DEVLET-500-1000-ARA.py <kelime> [<kelime> ...]
import sys, re, urllib.request, urllib.parse, html
sys.stdout.reconfigure(encoding="utf-8")
for q in sys.argv[1:]:
    u = "https://islamansiklopedisi.org.tr/ajax_search_auto.php?sp=aa&=ac&q=" + urllib.parse.quote(q)
    r = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0", "X-Requested-With": "XMLHttpRequest",
                                           "Referer": "https://islamansiklopedisi.org.tr/"})
    try:
        t = urllib.request.urlopen(r, timeout=40).read().decode("utf-8", "replace")
    except Exception as e:
        print("==", q, "HATA", e); continue
    print("==", q)
    for s in re.findall(r'href=\\?"(?:https?:\\?/\\?/islamansiklopedisi\.org\.tr)?\\?/([a-z0-9-]+)\\?"', t)[:15]:
        print("  ", s)
    if "href" not in t: print("   ham:", html.unescape(t)[:400])

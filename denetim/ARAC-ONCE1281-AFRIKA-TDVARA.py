# ONCE1281-AFRIKA — TDV otomatik tamamlama aramasi (M-5694 BULGU 2): başlık + slug listesi
# Kullanım: py denetim/ARAC-ONCE1281-AFRIKA-TDVARA.py <kelime> [<kelime> ...]
import sys, re, json, html, time, urllib.request, urllib.parse
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
BAS = {"User-Agent": "Mozilla/5.0", "X-Requested-With": "XMLHttpRequest",
       "Referer": "https://islamansiklopedisi.org.tr/"}
for q in sys.argv[1:]:
    url = "https://islamansiklopedisi.org.tr/ajax_search_auto.php?sp=aa&=ac&q=" + urllib.parse.quote(q)
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers=BAS), timeout=40)
        h = r.read().decode("utf-8", "replace")
        kod = r.status
    except Exception as e:
        print(q, "HATA", e); continue
    ciftler = re.findall(r'href="/?([a-z0-9\-]+)"[^>]*>(.*?)</a>', h, flags=re.S)
    if not ciftler:
        try:
            j = json.loads(h)
            print(q, kod, json.dumps(j, ensure_ascii=False)[:600]); continue
        except Exception:
            pass
    print(f"{q}: HTTP {kod} · {len(ciftler)} sonuç")
    for s, b in ciftler[:12]:
        print("   ", s, "·", re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", b))).strip()[:90])
    if not ciftler:
        print("   ham:", re.sub(r"\s+", " ", h)[:300])
    time.sleep(2)

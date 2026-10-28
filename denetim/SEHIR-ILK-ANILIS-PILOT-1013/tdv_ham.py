import sys, re, urllib.request, html, os
CIKTI = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tdv_ham")
os.makedirs(CIKTI, exist_ok=True)
ISTEK = [("adana", ["Adaniya", "Ataniya"]), ("canakkale", ["1452", "1463"]), ("bursa", ["Hannibal", "Prusias"])]
for slug, kelimeler in ISTEK:
    url = "https://islamansiklopedisi.org.tr/" + slug
    r = urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=60)
    ham = r.read().decode("utf-8", "replace")
    metin = re.sub(r"<script.*?</script>|<style.*?</style>", " ", ham, flags=re.S)
    metin = html.unescape(re.sub(r"<[^>]+>", " ", metin))
    metin = re.sub(r"\s+", " ", metin)
    open(os.path.join(CIKTI, slug + ".txt"), "w", encoding="utf-8").write(metin)
    print("==", slug, r.status, len(metin), "karakter")
    for k in kelimeler:
        for m in re.finditer(re.escape(k), metin):
            print("  [%s] ...%s..." % (k, metin[max(0, m.start() - 220): m.end() + 220]))
            break

# -*- coding: utf-8 -*-
"""
SINIR-BALKAN-0907 · TDV govde cekici
§4 tuzaklari:
  (1) 302 = OLU slug
  (2) 200 + yanlis madde -> govde OKUNUR
  (3) 200 + bos govde
  (4) 200 + BOILERPLATE (govde hic gelmez) -> karakter esigi
  (7) "metin cikarilamadi" != metin yok -> ikinci deneme
Govde KESILMEZ (uganda vakasi: ilk 'Bibliyografya'da kesmek %79 kaybettirdi).
"""
import sys, io, os, re, json, time, urllib.request
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZ = os.path.join(KOK, "denetim", "_tdv_balkan_0907")
os.makedirs(DIZ, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
BOILERPLATE_ESIK = 4000   # karakter; altindaysa SUPHELI, "olculemedi"


def temizle(h):
    h = re.sub(r"(?is)<script.*?</script>", " ", h)
    h = re.sub(r"(?is)<style.*?</style>", " ", h)
    h = re.sub(r"(?is)<nav.*?</nav>", " ", h)
    h = re.sub(r"(?is)<header.*?</header>", " ", h)
    h = re.sub(r"(?is)<footer.*?</footer>", " ", h)
    h = re.sub(r"(?s)<[^>]+>", " ", h)
    h = (h.replace("&nbsp;", " ").replace("&amp;", "&").replace("&quot;", '"')
          .replace("&#39;", "'").replace("&lt;", "<").replace("&gt;", ">")
          .replace("’", "'").replace("‘", "'"))
    return re.sub(r"[ \t\r\f\v]+", " ", h).strip()


def cek(slug, deneme=2):
    url = "https://islamansiklopedisi.org.tr/" + slug
    son = None
    for i in range(deneme):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=30) as r:
                kod = r.getcode()
                ham = r.read().decode("utf-8", "replace")
                gercek = r.geturl()
            if "/arama" in gercek:
                return {"slug": slug, "kod": 302, "hal": "olu", "kar": 0}
            g = temizle(ham)
            son = {"slug": slug, "kod": kod, "url": gercek, "kar": len(g), "govde": g,
                   "hal": "canli" if len(g) >= BOILERPLATE_ESIK else "boilerplate"}
            if son["hal"] == "canli":
                return son
        except Exception as e:
            son = {"slug": slug, "kod": 0, "hal": "olculemedi", "kar": 0, "hata": str(e)}
        time.sleep(1.2)
    return son


if __name__ == "__main__":
    sluglar = sys.argv[1:]
    ozet = []
    for s in sluglar:
        r = cek(s)
        if r.get("govde"):
            with open(os.path.join(DIZ, s + ".txt"), "w", encoding="utf-8") as f:
                f.write(r["govde"])
        ozet.append({k: v for k, v in r.items() if k != "govde"})
        print("%-28s %-12s %6d kar" % (s, r["hal"], r.get("kar", 0)))
    with open(os.path.join(DIZ, "_ozet.json"), "a", encoding="utf-8") as f:
        f.write(json.dumps(ozet, ensure_ascii=False) + "\n")

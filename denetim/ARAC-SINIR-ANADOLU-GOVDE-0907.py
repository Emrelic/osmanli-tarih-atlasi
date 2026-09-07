# -*- coding: utf-8 -*-
"""
ARAC-SINIR-ANADOLU-GOVDE-0907 — SINIR-ANADOLU-0907 · 7 Eylul 2026

TDV govdesini SERI ve YAVAS ceker (paralel istek 503 uretti — o bir TASIMA
ARIZASIDIR, "olu" DEGIL, §4⑤), metne cevirip denetim/_govde/ altina yazar.

🔴 SART (§4⑦): govde KESILMEZ. `uganda` vakasinda ilk `Bibliyografya`da
   kesmek metnin %79'unu attirdi ve "Bunyoro 0 kez" diye YANLIS bir sayi
   uretti. Burada TAM metin yazilir; kesme yok.
🔴 SART (§4④): <2000 karakter = BOILERPLATE SUPHESI ⇒ `olculemedi`, "yok" DEGIL.

kullanim: py ARAC-SINIR-ANADOLU-GOVDE-0907.py slug1 slug2 ...
"""
import sys, io, os, re, time, html, json, urllib.request, urllib.error, ssl

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "denetim", "_govde")
os.makedirs(DIZIN, exist_ok=True)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE


def metne_cevir(h):
    h = re.sub(r"(?is)<script.*?</script>", " ", h)
    h = re.sub(r"(?is)<style.*?</style>", " ", h)
    h = re.sub(r"(?is)<head.*?</head>", " ", h)
    h = re.sub(r"(?is)<nav.*?</nav>", " ", h)
    h = re.sub(r"(?is)<footer.*?</footer>", " ", h)
    h = re.sub(r"(?s)<[^>]+>", "\n", h)
    h = html.unescape(h)
    satir = [s.strip() for s in h.split("\n")]
    return "\n".join(s for s in satir if s)


def cek(slug):
    url = "https://islamansiklopedisi.org.tr/" + slug
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})

    class NoRedir(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k):
            return None
    op = urllib.request.build_opener(NoRedir, urllib.request.HTTPSHandler(context=ctx))
    try:
        r = op.open(req, timeout=40)
        ham = r.read().decode("utf-8", "replace")
        return r.status, ham
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as ex:
        return 0, str(ex)[:80]


def main():
    ozet = {}
    for slug in sys.argv[1:]:
        kod, govde = 0, ""
        for deneme in range(3):
            kod, govde = cek(slug)
            if kod == 200:
                break
            time.sleep(6)          # 503 = hiz siniri; SERI ve YAVAS
        if kod != 200:
            ozet[slug] = {"kod": kod, "hal": "olculemedi" if kod in (0, 503) else "olu"}
            print("%-24s kod %s  ⇒ %s" % (slug, kod, ozet[slug]["hal"]))
            time.sleep(3)
            continue
        m = metne_cevir(govde)
        yol = os.path.join(DIZIN, slug + ".txt")
        open(yol, "w", encoding="utf-8").write(m)
        hal = "boilerplate_suphesi" if len(m) < 2000 else "govde"
        ozet[slug] = {"kod": 200, "karakter": len(m), "hal": hal, "dosya": yol}
        print("%-24s 200 · %7d karakter · %s" % (slug, len(m), hal))
        time.sleep(3)
    json.dump(ozet, open(os.path.join(DIZIN, "_ozet.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()

# -*- coding: utf-8 -*-
"""PAKET-A6A — TDV slug sınayıcı + gövde çıkarıcı. Proje verisine dokunmaz.
py denetim/ARAC-A6A-TDV-0913.py CIKTI_DIZINI slug [slug ...]
① yönlendirme İZLENMEDEN HTTP kodu (302 = ölü)
② 200 ise gövde çekilir, etiketler atılır, <title> ve metin CIKTI_DIZINI/<slug>.txt'ye yazılır
"""
import io, os, re, sys, html, http.client, urllib.request
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
out = sys.argv[1]
os.makedirs(out, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0"}
for slug in sys.argv[2:]:
    try:
        c = http.client.HTTPSConnection("islamansiklopedisi.org.tr", timeout=40)
        c.request("GET", "/" + urllib.request.quote(slug), headers=UA)
        r = c.getresponse()
        kod = r.status
        body = r.read().decode("utf-8", "replace") if kod == 200 else ""
        c.close()
    except Exception as e:  # 000 bir HTTP kodu değildir — taşıma arızası
        print(f"{slug:40} ÖLÇÜLEMEDİ ({e.__class__.__name__})")
        continue
    if kod != 200:
        print(f"{slug:40} {kod}")
        continue
    t = re.search(r"<title>(.*?)</title>", body, re.S)
    t = html.unescape(t.group(1).strip()) if t else "?"
    b = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", body, flags=re.S)
    b = re.sub(r"<br\s*/?>|</p>|</div>|</h\d>", "\n", b)
    b = html.unescape(re.sub(r"<[^>]+>", " ", b))
    b = re.sub(r"[ \t]+", " ", b)
    b = re.sub(r"\n\s*\n+", "\n", b)
    open(os.path.join(out, slug + ".txt"), "w", encoding="utf-8").write(t + "\n" + b)
    print(f"{slug:40} 200  «{t}»  {len(b)} kr")

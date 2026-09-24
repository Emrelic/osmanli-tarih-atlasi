# -*- coding: utf-8 -*-
# SINIR-ARABISTAN-0078 — TDV maddelerinde 1920-1926 sınır cümleleri (salt okur)
import sys, re, html, urllib.request, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ONB = os.path.join(os.path.dirname(__file__), "SINIR-ARABISTAN-0078-tdv-onbellek")
os.makedirs(ONB, exist_ok=True)
SLUGLAR = sys.argv[1].split(",")
DESEN = re.compile(sys.argv[2] if len(sys.argv) > 2 else r"19(19|2[0-9])")
for s in SLUGLAR:
    yol = os.path.join(ONB, s + ".html")
    if not os.path.exists(yol):
        req = urllib.request.Request("https://islamansiklopedisi.org.tr/" + s, headers={"User-Agent": "Mozilla/5.0"})
        try:
            r = urllib.request.urlopen(req, timeout=40)
            kod, url = r.status, r.geturl()
            open(yol, "wb").write(r.read())
        except Exception as e:
            print(f"## {s}: HATA {e}"); continue
    t = open(yol, encoding="utf-8", errors="replace").read()
    t = html.unescape(re.sub(r"<[^>]+>", " ", t)); t = re.sub(r"\s+", " ", t)
    i = t.find("Kopyalama metni")
    govde = t[i:] if i > 0 else t
    cumleler = re.split(r"(?<=[.;])\s", govde)
    isabet = [c for c in cumleler if DESEN.search(c)]
    print(f"## {s}: gövde {len(govde)} kr · {len(isabet)} cümle")
    for c in isabet[:25]:
        print("   ·", c[:420])

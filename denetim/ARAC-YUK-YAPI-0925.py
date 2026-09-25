# -*- coding: utf-8 -*-
"""YUK-BOLME-0925 — geometri dosyalarinin YAPISI: hangi window.X, kac bayt, kac oge,
ilk kayitlarin anahtarlari. Buyuk dosya Read ile acilmaz; burada bir kez okunur."""
import json, os, re, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

for ad in ("donemler.js", "devletler_harita.js", "bolgeler.js"):
    yol = os.path.join(KOK, "data", ad)
    m = open(yol, encoding="utf-8").read()
    print("=== %s  %.2f MB (karakter %d)" % (ad, os.path.getsize(yol) / 1048576, len(m)))
    konum = [(x.start(), x.group(1)) for x in re.finditer(r"window\.([A-Z_]+)\s*=\s*", m)]
    for k, (p, isim) in enumerate(konum):
        son = konum[k + 1][0] if k + 1 < len(konum) else len(m)
        govde = m[m.index("=", p) + 1:son].strip().rstrip(";")
        try:
            v = json.loads(govde)
            n = len(v)
            ornek = ""
            if isinstance(v, list) and v and isinstance(v[0], dict):
                ornek = " anahtarlar(ilk): " + ",".join(sorted(v[0].keys()))
                # tum kayitlardaki anahtar birlesimi
                ak = {}
                for r in v:
                    for a in r: ak[a] = ak.get(a, 0) + 1
                ornek += " | birlesim: " + ",".join("%s:%d" % kv for kv in sorted(ak.items()))
                if isim == "DEVLET_HARITA":
                    ak2 = {}; ndn = 0
                    for r in v:
                        for dn in r.get("dnm", []):
                            ndn += 1
                            for a in dn: ak2[a] = ak2.get(a, 0) + 1
                    ornek += " | dnm=%d anahtar: %s" % (ndn, ",".join("%s:%d" % kv for kv in sorted(ak2.items())))
            elif isinstance(v, list) and v:
                ornek = " ilk oge tipi/uzunluk: %s/%s" % (type(v[0]).__name__, len(v[0]) if hasattr(v[0], "__len__") else "-")
        except Exception as e:
            n = "JSON-DEGIL(%s)" % str(e)[:60]; ornek = ""
        print("  %-20s %8.2f MB  n=%s%s" % (isim, len(govde.encode("utf-8")) / 1048576, n, ornek))

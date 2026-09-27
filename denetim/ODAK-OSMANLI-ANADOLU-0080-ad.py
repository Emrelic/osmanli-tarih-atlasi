"""Havuz ad arayıcı — `odak_yer`/`yer_id` için BİREBİR adı bulmak üzere (yalnız okur).

Kullanım: py denetim/ODAK-OSMANLI-ANADOLU-0080-ad.py <parça> [<parça>…]
Havuz = `arac/odak_olc.py:yer_havuzu` (app.js'in `sehirler` evreni). Parça
normalleştirilmiş alt dizgi olarak aranır; BULUNAN ad havuzda birebir olandır.
Her eşleşmede ad · lat · lon · s/d/v dönemleri özet basılır.
"""
import os
import sys
import unicodedata

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402


def norm(s):
    s = s.replace("İ", "i").replace("I", "ı").lower()
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.replace("ı", "i")


Y = girdi.yukle(sessiz=True)
for p in sys.argv[1:]:
    q = norm(p)
    bul = [y for y in Y if y.get("ad") and q in norm(y["ad"])]
    print("== %s : %d" % (p, len(bul)))
    for y in bul[:12]:
        def oz(k):
            return ";".join("%s:%s-%s" % (x.get("d") or x.get("kid") or x.get("k") or "", (x.get("f") or "")[:4],
                                          (x.get("t") or "")[:4]) for x in (y.get(k) or []))[:150]
        print("   %r  %.3f,%.3f  s=%s  d=%s  v=%s" % (y["ad"], y.get("lat", 0), y.get("lon", 0),
                                                   oz("s"), oz("d"), oz("v")))

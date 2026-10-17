# -*- coding: utf-8 -*-
"""v2 sonrasi kontrol: Urfa takip, Hums/Alacahisar cikarimi, takip alanlari."""
import io, json, os
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
v2 = [json.loads(l) for l in io.open(os.path.join(KOK, "glm", "epok_asama1.jsonl"), encoding="utf-8")]
takip = [(r["ad"], r["takip"]) for r in v2 if r.get("takip")]
print("takip:", takip)
for r in v2:
    if r["ad"] in ("Urfa", "Hums (Lebde)", "Alacahisar (Kruševac)"):
        print(r["ad"], "· slug:", r.get("slug"), "· http:", r.get("http"),
              "· govde:", r.get("govde_uzunluk"),
              "· c_yil:", len(r.get("c_yil") or []), "· c_ek:", len(r.get("c_ek") or []))
        for y, c in (r.get("c_yil") or [])[:5]:
            print("   Y[%s] %s" % (y, c[:150]))
d = {}
for r in v2:
    d[r.get("http", "?")] = d.get(r.get("http", "?"), 0) + 1
print("http:", dict(sorted(d.items())))
inc = sum(1 for r in v2 if r.get("http") == "200" and (r.get("govde_uzunluk") or 0) > 0)
print("incelemelik:", inc)
